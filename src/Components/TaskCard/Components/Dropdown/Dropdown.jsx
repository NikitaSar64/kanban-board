import React, {useContext} from "react";
import Context from "../../../../Context/Context";
import "./Dropdown.css";

const Dropdown = ({ title, typeTask, selectTask }) => {
    let tasksArray = useContext(Context).localStore[typeTask];

    return (
            <select onChange={selectTask}>
                <option hidden/>
                {tasksArray.map((task, index) => {
                    return (
                            <option key={`${title}-sel-${task.id}`} value={index}>{task.name}</option>
                    )})
                }
            </select>
    )
}

export default Dropdown;