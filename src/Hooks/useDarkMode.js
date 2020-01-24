import React, {useState} from 'react';
 
import useLocalStorage from './useLocalStorage';

function useDarkMode(key, initialValue) {
    const [storedValue, setStoredValue] =  useLocalStorage(key, initialValue);

   const toggleMode = () => {
       setStoredValue(!storedValue);
       if(storedValue) {
        document.body.classList.add('dark-mode')
       } else {
           document.body.classList.remove('dark-mode')
       }
     }
 
    return [storedValue, toggleMode];
    }
export default useDarkMode;