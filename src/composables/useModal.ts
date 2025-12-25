// Composable pour gérer les modales
import { ref } from 'vue';

interface ModalState {
  id: string;
  isOpen: boolean;
  title: string;
}

export const useModal = (initialId: string = 'default') => {
  const modals = ref<Map<string, boolean>>(new Map());

  const openModal = (id: string) => {
    modals.value.set(id, true);
  };

  const closeModal = (id: string) => {
    modals.value.set(id, false);
  };

  const toggleModal = (id: string) => {
    const current = modals.value.get(id) ?? false;
    modals.value.set(id, !current);
  };

  const isModalOpen = (id: string) => modals.value.get(id) ?? false;

  return {
    modals,
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
  };
};
