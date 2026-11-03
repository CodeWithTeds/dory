import { writable } from 'svelte/store';
import type { PageRoute } from '../types';

function createNavigationStore() {
  // Read initial hash if present
  const getInitialRoute = (): PageRoute => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('install') || hash.includes('plugin')) {
        return 'install';
      }
    }
    return 'landing';
  };

  const { subscribe, set } = writable<PageRoute>(getInitialRoute());

  return {
    subscribe,
    navigateTo: (route: PageRoute) => {
      set(route);
      if (typeof window !== 'undefined') {
        window.location.hash = route === 'install' ? '#install' : '#';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    toggle: () => {
      // Toggle between page 1 and page 2
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.toLowerCase();
        const next = hash.includes('install') ? 'landing' : 'install';
        window.location.hash = next === 'install' ? '#install' : '#';
        set(next);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
}

export const navigationStore = createNavigationStore();

// Listen to browser hash change
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('why')) {
      navigationStore.navigateTo('landing');
      setTimeout(() => {
        const el = document.getElementById('why-dory');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      navigationStore.navigateTo(hash.includes('install') ? 'install' : 'landing');
    }
  });
}
