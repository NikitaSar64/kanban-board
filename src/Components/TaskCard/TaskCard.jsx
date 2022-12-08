import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Components/Button/Button";
import Task from "./Components/Task/Task";
import Input from "./Components/Input/Input";
import Dropdown from "./Components/Dropdown/Dropdown";
import './TaskCard.css';

const TaskCard = ({ title, action, inputOrDropDown, dependentTask }) => {
    const [submitInput, setSubmitInput] = useState(false);
    const [submitDropDownId, setSubmitDropDownId] = useState(null);
    const [input, showInput] = useState(false);
    const [text, setText] = useState('');
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="task-card task-card_max-height">
            <div className="task-card__title">{title === "InProgress" ? "In Progress" : title}</div>
            <div className="task-card__wrapper">
                {store[title.toLowerCase()].map((task, index) => {
                    return (
                        <Task key={`${title}-${index}`} task={task}/>
                    )
                })}
                {(input && !inputOrDropDown) && 
                <Input task={(e) => {
                    setText(e.target.value);
                    e.target.value.length > 0 ? setSubmitInput(true) : setSubmitInput(false)
                    }}/>
                }
                {(input && inputOrDropDown) && <Dropdown dependentTask={dependentTask} onChange={(e) => {
                    setSubmitInput(true);
                    setSubmitDropDownId(e.target.value)}}/>}
                <Button 
                    showInput={() => {
                        if (input && (submitDropDownId != null) && setSubmitInput){
                            dispatch(action(submitDropDownId));
                            setSubmitInput(false);
                            showInput(false);
                        } else if (input && submitInput){
                            dispatch(action({
                                type: title,
                                id: store[title.toLowerCase()].length + 1, 
                                name: text,
                                description: "",
                            }));
                            setSubmitInput(false);
                            showInput(false);
                        } else {
                            showInput(true)
                        }
                    }}
                    input={input}
                    submit={submitInput}
                    />
            </div>
        </div>
    )
}

export default TaskCard;