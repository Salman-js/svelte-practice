import { writable, readable } from 'svelte/store';

export const count = writable(0);

export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  return function () {
    clearInterval(interval);
  };
});

function createCount() {
  const { subscribe, set, update } = writable(e);
  return {
    subscribe,
    increment: (size = 1) => update((n) => n + size),
    decrement: (size = 1) => update((n) => n + size),
    reset: () => set(0),
  };
}

export const customStore = createCount();
