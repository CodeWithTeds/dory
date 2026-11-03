import { toastStore } from '../stores/toast';

export async function copyToClipboard(text: string, label = 'Command copied to clipboard!'): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      toastStore.show('Copied!', label, 'success');
      return true;
    } else {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      toastStore.show('Copied!', label, 'success');
      return true;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    toastStore.show('Failed to copy', 'Please copy manually.', 'warning');
    return false;
  }
}
