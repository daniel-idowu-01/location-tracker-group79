import { useEffect, useState } from "react";

export function useLocalStorage(initialValue, key) {
  // Initialize state with the value from local storage, if available
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error getting value from local storage:", error);
      return initialValue;
    }
  });

  // Update local storage whenever storedValue changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting value to local storage:", error);
    }
  }, [key, storedValue]);

  // Function to update stored value and local storage
  const setValue = (value) => {
    try {
      setStoredValue(value);
    } catch (error) {
      console.error("Error updating stored value:", error);
    }
  };

  return [storedValue, setValue];
}
