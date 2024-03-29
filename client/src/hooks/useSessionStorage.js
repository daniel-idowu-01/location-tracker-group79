import { useState } from "react";

function useSessionStorage(key, initialValue) {
  // Retrieve the initial value from session storage if it exists
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to store the value
  const [value, setValue] = useState(initial);

  // Define a function to save the value to session storage
  const saveToSessionStorage = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, saveToSessionStorage];
}

export default useSessionStorage;
