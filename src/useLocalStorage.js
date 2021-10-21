import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = {}, reviver = null) => {
  const [state, setState] = useState(() => {
    let item = window.localStorage.getItem(key);

    item ?? window.localStorage.setItem(key, JSON.stringify(initialValue));

    try {
      item = JSON.parse(item, reviver);
    } catch (e) {
      // item is already set to the retrieved value, if any
    }

    return item ?? initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(
      key,
      typeof state === "string" ? state : JSON.stringify(state)
    );
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
