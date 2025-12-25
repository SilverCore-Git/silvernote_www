// Composable pour gérer les accordéons
import { ref, computed } from 'vue';

export const useAccordion = () => {
  const openedIndex = ref<number | null>(null);

  const toggleAccordion = (index: number) => {
    openedIndex.value = openedIndex.value === index ? null : index;
  };

  const closeAccordion = () => {
    openedIndex.value = null;
  };

  const isOpen = (index: number) => computed(() => openedIndex.value === index);

  return {
    openedIndex,
    toggleAccordion,
    closeAccordion,
    isOpen,
  };
};
