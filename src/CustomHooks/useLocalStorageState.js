import { useEffect, useState } from "react";

export const useLocalStorageState = (initialState, key) => {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem('watched');
        return storedValue ? JSON.parse(storedValue) : initialState
    });

    
  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(value));
    }, [value, key]
  ) 

  return [value, setValue]
}