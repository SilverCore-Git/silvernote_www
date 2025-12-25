// Composable pour la gestion des formulaires
import { ref, reactive } from 'vue';

interface ValidationRules {
  [key: string]: (value: any) => string | null;
}

interface FormState<T> {
  values: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isDirty: boolean;
}

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  onSubmit: (values: T) => Promise<void>,
  validationRules?: ValidationRules
) => {
  const formState = reactive<FormState<T>>({
    values: { ...initialValues },
    errors: {},
    isSubmitting: false,
    isDirty: false,
  });

  const resetForm = () => {
    formState.values = { ...initialValues };
    formState.errors = {};
    formState.isDirty = false;
  };

  const setFieldValue = (field: keyof T, value: any) => {
    formState.values[field] = value;
    formState.isDirty = true;

    // Valider le champ si des règles existent
    if (validationRules?.[field as string]) {
      const error = validationRules[field as string](value);
      if (error) {
        formState.errors[field as string] = error;
      } else {
        delete formState.errors[field as string];
      }
    }
  };

  const validateForm = () => {
    formState.errors = {};
    if (!validationRules) return true;

    let isValid = true;
    for (const [field, rule] of Object.entries(validationRules)) {
      const error = rule(formState.values[field as keyof T]);
      if (error) {
        formState.errors[field] = error;
        isValid = false;
      }
    }
    return isValid;
  };

  const handleSubmit = async (e?: Event) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    formState.isSubmitting = true;
    try {
      await onSubmit(formState.values);
      resetForm();
    } finally {
      formState.isSubmitting = false;
    }
  };

  const setFieldError = (field: string, error: string) => {
    formState.errors[field] = error;
  };

  return {
    formState,
    resetForm,
    setFieldValue,
    validateForm,
    handleSubmit,
    setFieldError,
  };
};
