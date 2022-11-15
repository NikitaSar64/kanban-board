import React from "react";
import './Input.css';

const Input = ({ task }) => {

    return (
        <div className="input__wrapper">
            <input 
                type="textarea" 
                onChange={task}
                autoFocus
            />
        </div>
    )
}

export default Input;