import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

export default function CounterHooks() {

    const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext);

    function handleClick (event) {
       let operation = event.target.name;
        setCount((prevValue) => { 
            return (operation === "plus" ? prevValue+1 : prevValue -1);
        });
               
    }


    return (
      
        <div>
        <button style={theme} onClick={handleClick} name="minus">-</button>
        <span>{count}</span>
        <button style={theme} onClick={handleClick} name="plus">+</button>
      </div>

    )
}