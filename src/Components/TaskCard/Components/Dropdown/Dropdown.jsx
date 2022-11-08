import React from "react";
import "./Dropdown.css";

const Dropdown = ({ tasks, changeTask }) => {
    return (
            <select onChange={changeTask}>
                {tasks.map(task => {
                    return (
                            <option key={task.id} value={task.id}>{task.name}</option>
                    )})
                }
            </select>
    )
}

export default Dropdown;