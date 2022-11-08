import React from "react";
import './Input.css';

const Input = ({ task }) => {
    return (
        <input 
            type="text" 
            onChange={task}
            autoFocus
        />
    )
}

export default Input;