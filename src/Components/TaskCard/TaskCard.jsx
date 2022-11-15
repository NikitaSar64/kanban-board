import React, { useState, useContext } from "react";
import Button from "./Components/Button/Button";
import Task from "./Components/Task/Task";
import Input from "./Components/Input/Input";
import Context from "../../Context/Context";
import Dropdown from "./Components/Dropdown/Dropdown";
import setId from "../../utils/setId";
import './TaskCard.css';

const TaskCard = ({ title, typeTask, inputOrDropDown }) => {
    let context = useContext(Context);
    let [input, setShowInput] = useState(false);
    let [submit, isSubmit] = useState(false);
    let [task, setTask] = useState(null);
    let [indexTask, setIndexTask] = useState(null);
    //title = title.split(' ').join('')

    function selectTask(e){
        isSubmit(true);
        setIndexTask(e.target.value);
    }
    
    function submitTask() {
        if (!input){
            setShowInput(true);
        }

        if (indexTask){
            let newTask = [];
            let deleteTask = [...context.localStore[title], context.localStore[typeTask][indexTask]];
            JSON.parse(localStorage.getItem(typeTask)).forEach((elem, index) => {
                if (index != indexTask) newTask.push(elem);
            })

            localStorage.setItem(typeTask, JSON.stringify(newTask));
            localStorage.setItem(title, JSON.stringify(deleteTask));

            context.setLocalStore(state => ({
                ...state,
                [typeTask]: newTask,
                [title]: [...state[title], state[typeTask][indexTask]]
            }))

            setIndexTask(null);
            isSubmit(false);
            setShowInput(false);
        } else if (input && submit){
            context.setLocalStore(state => ({
                ...state,
                [title]:  [...state[title], task],
            }))
            let taskArr = [...context.localStore[title], task];
            localStorage.setItem(title, JSON.stringify(taskArr));
            
            isSubmit(false);
            setShowInput(false);
        }
    }

    return (
        <div className="task-card">
            <div className="task-card__title">{title == "InProgress" ? "In Progress" : title}</div>
            <div className="task-card__wrapper">
                {context.localStore[title].map(task => {
                    return (
                        <Task key={`${title}-${task.id}`} taskText={task.name}/>
                    )
                })}
                {inputOrDropDown && (input && 
                <Input task={(e) => {
                    setTask({id: setId(context.localStore[title]), name: e.target.value});
                    e.target.value.length > 0 ? isSubmit(true) : isSubmit(false);
                    }}/>
                    )}
                {!inputOrDropDown && (input && <Dropdown title={title} typeTask={typeTask} selectTask={selectTask}/>)}
                <Button 
                    showInput={() => {
                        submitTask()}}
                    input={input}
                    submit={submit}/>
            </div>
        </div>
    )
}

export default TaskCard;