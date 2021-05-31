export const APP_KEY = '@MarvelExplorer:';

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}${key}`);
  return JSON.parse(data!);
};

export const setStorageItem = (key: string, value: unknown[]) => {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);
  window.localStorage.setItem(`${APP_KEY}${key}`, data);
};
