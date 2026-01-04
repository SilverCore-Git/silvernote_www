// Composable pour la gestion des notifications
import { ref } from 'vue';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

export const useNotification = () => {
  const notifications = ref<Notification[]>([]);

  const addNotification = (
    type: NotificationType,
    message: string,
    duration: number = 4000
  ) => {
    const id = Date.now().toString();
    const notification: Notification = { id, type, message, duration };

    notifications.value.push(notification);

    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  };

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index > -1) {
      notifications.value.splice(index, 1);
    }
  };

  const clearNotifications = () => {
    notifications.value = [];
  };

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    success: (msg: string) => addNotification('success', msg),
    error: (msg: string) => addNotification('error', msg),
    warning: (msg: string) => addNotification('warning', msg),
    info: (msg: string) => addNotification('info', msg),
  };
};
