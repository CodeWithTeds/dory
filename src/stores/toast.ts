import { writable } from 'svelte/store';
import type { ToastMessage } from '../types';

function createToastStore() {
  const { subscribe, update } = writable<ToastMessage[]>([]);

  return {
    subscribe,
    show: (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success', duration = 3000) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, title, description, type };
      
      update(toasts => [...toasts, newToast]);

      setTimeout(() => {
        update(toasts => toasts.filter(t => t.id !== id));
      }, duration);
    },
    remove: (id: string) => {
      update(toasts => toasts.filter(t => t.id !== id));
    }
  };
}

export const toastStore = createToastStore();
