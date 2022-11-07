import React from "react";
import "./Task.css";

const Task = ({ taskText}) => {
    return (
        <div className="task">{taskText}</div>
    )
}

export default Task;