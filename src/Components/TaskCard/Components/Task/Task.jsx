import React from "react";
import ROUTES from "../../../../configs/ROUTES";
import { Link } from "react-router-dom";
import "./Task.css";

const Task = ({ task }) => {

    return (
        <Link to={ROUTES.task.createPath(task.type, task.id)}>
            <div className="task">{task.name}</div>
        </Link>
    )
}

export default Task;