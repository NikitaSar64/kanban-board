import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ROUTES from "../../../../../configs/ROUTES";
import closeBtn from "../../../../../assets/icons/close-btn.png";
import { updateTaskDescription } from "../../../../../actions";
import "./Detail.css";

const Detail = () => {
    let store = useSelector(store => store);
    let dispatch = useDispatch();
    let [active, setActive] = useState(false);
    let [text, setText] = useState('');
    const params = useParams();
    let type = null;
    const id = params.id;

    switch (params.type){
        case "backlog":
            type = "backlog"
            break;
        case "ready":
            type = "ready"
            break;
        case "inprogress":
            type = "inprogress"
            break;
        case "finished":
            type = "finished";
            break;
    }

    function saveChange(){
        dispatch(updateTaskDescription(type, text, id));
        setActive(false);
    }

    console.log(store)
    return (
        <div className="detail__wrapper">
            <div className="detail">
                <div className="detail__header">
                    <div>{store[type][id - 1].name}</div>
                    <Link to={ROUTES.main}>
                        <div className="detail__btn-close">
                            <img src={closeBtn} alt="close"/>
                        </div>
                    </Link>
                </div>
                <textarea
                    className="detail__description"
                    onChange={(e) => {
                        setText(e.target.value)
                        setActive(true)
                    }}
                    name="Task description" 
                    defaultValue={
                        store[type][id - 1].description == "" 
                        ? "This task has no description" 
                        : store[type][id - 1].description
                    }
                    />
                <div 
                    className={active ? "detail__btn-save detail__btn-save_active" : "detail__btn-save"}
                    onClick={() => saveChange()}>
                    Save
                </div>
            </div>
        </div>
    )
}

export default Detail;