import React, { useEffect, useState } from "react";
import Button from "./Components/Button/Button";
import Task from "./Components/Task/Task";
import './TaskCard.css';

const TaskCard = ({ title }) => {
    let [input, setShowInput] = useState(false);
    let [submit, isSubmit] = useState(false);
    let [task, setTask] = useState(null);
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(title)){
            let localTasks = JSON.parse(localStorage.getItem(title));
            setTasks(localTasks);
        } else {
            localStorage.setItem(title, JSON.stringify([]));
        }
    },[])

    
    if (!input && submit) {
        let localTasks = JSON.parse(localStorage.getItem(title));
        localTasks.push(task);
        localStorage.setItem(title, JSON.stringify(localTasks)); 

        setTasks(localTasks);
        isSubmit(false);
        setShowInput(false);
    }

    return (
        <div className="task-card">
            <div>{title}</div>
            {tasks.map(task => {
                return (
                    <Task key={task.id} taskText={task.name}/>
                )
            })}
            {input && 
            <input 
                type="text" 
                onChange={(e) => {
                    setTask({id: tasks.length + 1, name: e.target.value});
                    e.target.value.length > 0 ? isSubmit(true) : isSubmit(false);
                    }
                }
                autoFocus
                />}
            <Button 
                showInput={() => {
                    setShowInput(!input)}}
                input={input}
                submit={submit}/>
        </div>
    )
}

export default TaskCard;