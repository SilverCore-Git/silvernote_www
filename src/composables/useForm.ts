import { ref, reactive } from 'vue';

export function useForm() {
  const errors = reactive<Record<string, string>>({});
  const isSubmitting = ref(false);

  const resetErrors = () => {
    Object.keys(errors).forEach(key => delete errors[key]);
  };

  const setError = (field: string, message: string) => {
    errors[field] = message;
  };

  const clearError = (field: string) => {
    delete errors[field];
  };

  return {
    errors,
    isSubmitting,
    resetErrors,
    setError,
    clearError
  };
}
