export const USER_LOCAL_STORAGE_KEY = "user";

export const getDbUserState = <T>(key: string): T | null =>
  localStorage.getItem(key)
    ? (JSON.parse(localStorage.getItem(key) as string) as T)
    : null;

export const setAndPersistsDbUserState = <T>(key: string, userInfo: T) =>
  localStorage.setItem(key, JSON.stringify({ ...userInfo }));

export const clearLocalStorageUser = (key: string) =>
  localStorage.removeItem(key);
