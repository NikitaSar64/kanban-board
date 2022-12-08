import React from "react";
import { useSelector } from "react-redux";
import "./Dropdown.css";

const Dropdown = ({ dependentTask, onChange }) => {
    const store = useSelector(store => store);

    return (
            <select onChange={onChange}>
                <option hidden/>
                {store[dependentTask].map(task => {
                    return (
                            <option key={task.id} value={task.id}>{task.name}</option>
                    )})
                }
            </select>
    )
}

export default Dropdown;