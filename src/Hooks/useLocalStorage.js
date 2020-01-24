import {useState} from 'react';

function useLocalStorage(key, initialValue) {
   //key: 'must be a string'
   //value: can be anything. a string, number, primative, etc.

    const [storedValue, setStoreValue]= useState(() => {
        //useState: updates initialValue
    
            const item = window.localStorage.getItem(key);
            //checking to see if the 'item=key' exists in local storage by using '.getItem()' method.            
            return item ? JSON.parse(item) : initialValue;
            //if the 'item=key', does exist  in local storage and it is an OBJECT or ARRAY, we parse it into JSON  using the 'ternary operator'
            //JSON.parse() method
            //1. parses a JSON string into the Javascript value or object described by the string. 
            //Ternary Operator accepts 3 conditions. 
            //1.A condition 
            //2. followed by a '?'
            //3. followed by an expression to execute if condition is truthy followed by a ':'
            //4. if falsy and expression to execute after ':'

            //SETTER FUNCTION
            const setValue = value => {                
                setStoredValue(value);
                //updating state to 'value'
                window.localStorage.setItem(key, 
                //.setItem() is used to save 'value' to localStorage.
                //it will add the 'key' to localStorage object or update it if it already exists.
                JSON.stringify(value));
                //value is being converted to a JSON string.
                
            }
    })
    return [storedValue, setValue];
    //storedValue was set when the useState(() => {} callback function was invoked and initialValue was updated. 'item was declared and .getItem() method invoked to check if 'item=key' was in local storage. A ternary was used to test three conditions.
    //1. is 'item=key' in local storage
    //2. if truthy, and if it is an obejct/array, use JSON.parse() method to convert the JSON string to Javascript. if truthy execute 'initialValue'
}