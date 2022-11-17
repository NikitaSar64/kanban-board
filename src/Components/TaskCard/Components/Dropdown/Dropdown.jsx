import React, {useContext, useEffect} from "react";
import Context from "../../../../Context/Context";
import "./Dropdown.css";

const Dropdown = ({ title, typeTask, selectTask }) => {
    let tasksArray = useContext(Context);

    return (
            <select onChange={selectTask}>
                <option hidden/>
                {tasksArray.localStore[typeTask].map((task, index) => {
                    return (
                            <option key={`${title}-sel-${index}`} value={index}>{task.name}</option>
                    )})
                }
            </select>
    )
}

export default Dropdown;