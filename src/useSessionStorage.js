import { useState, useEffect } from "react";

const useSessionStorage = (key, initialValue = {}) => {
  const [state, setState] = useState(() => {
    let item = window.sessionStorage.getItem(key);

    item ?? window.sessionStorage.setItem(key, JSON.stringify(initialValue));

    try {
      item = JSON.parse(item);
    } catch (e) {
      // item is already set to the retrieved value, if any
    }

    return item ?? initialValue;
  });

  useEffect(() => {
    window.sessionStorage.setItem(
      key,
      typeof state === "string" ? state : JSON.stringify(state)
    );
  }, [key, state]);

  return [state, setState];
};

export default useSessionStorage;
