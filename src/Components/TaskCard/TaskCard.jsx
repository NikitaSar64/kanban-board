import React, { useState, useContext, useRef, useEffect } from "react";
import Button from "./Components/Button/Button";
import Task from "./Components/Task/Task";
import Input from "./Components/Input/Input";
import Context from "../../Context/Context";
import Dropdown from "./Components/Dropdown/Dropdown";
import './TaskCard.css';

const TaskCard = ({ title, typeTask, inputOrDropDown }) => {
    let context = useContext(Context);
    let [input, setShowInput] = useState(false);
    let [submit, isSubmit] = useState(false);
    let [task, setTask] = useState(null);
    let [indexTask, setIndexTask] = useState(null);
    let taskWrapper = useRef(null);

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
            let tmp = context.localStore[title].map((elem, index) => {
                elem.type = title.toLowerCase();
                elem.id = index;
                return elem;
            })

            let count = 0;
            let deleteTask = [...tmp, {...context.localStore[typeTask][indexTask], type: title.toLowerCase(), id: tmp.length}];
            JSON.parse(localStorage.getItem(typeTask)).forEach((elem, index) => {
                if (index != indexTask) {
                    elem.id = count;
                    count++;
                    newTask.push(elem)
                }
            })

            context.setLocalStore(state => ({
                ...state,
                [typeTask]: newTask,
                [title]: [...state[title], {...state[typeTask][indexTask], type: title.toLowerCase(), id: state[title].length}]
            }))
            
            localStorage.setItem(typeTask, JSON.stringify(newTask));
            localStorage.setItem(title, JSON.stringify(deleteTask));

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

    useEffect(() => {
        taskWrapper.current.scrollTop = context.localStore[title].length * 40;
    }, [input])
    
    return (
        <div className={context.localStore[title].length > 12 ? "task-card task-card_max-height" : "task-card"}>
            <div className="task-card__title">{title === "InProgress" ? "In Progress" : title}</div>
            <div className="task-card__wrapper" ref={taskWrapper}>
                {context.localStore[title].map((task, index) => {
                    return (
                        <Task key={`${title}-${index}`} task={task}/>
                    )
                })}
                {inputOrDropDown && (input && 
                <Input task={(e) => {
                    setTask(
                        {
                            type: title.toLowerCase(),
                            id: context.localStore[title].length, 
                            name: e.target.value,
                            description: "",
                        });
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