import React, {useContext, useState} from "react";
import Context from "../../../../../Context/Context";
import { useParams, Link } from "react-router-dom";
import ROUTES from "../../../../../configs/ROUTES";
import closeBtn from "../../../../../assets/icons/close-btn.png";
import "./Detail.css";

const Detail = () => {
    const context = useContext(Context);
    let [active, setActive] = useState(false);
    let [text, setText] = useState('');
    const params = useParams();
    let type = null;
    const id = params.id;

    switch (params.type){
        case "backlog":
            type = "Backlog"
            break;
        case "ready":
            type = "Ready"
            break;
        case "inprogress":
            type = "InProgress"
            break;
        case "finished":
            type = "Finished";
            break;
    }

    function saveChange(){
        let temp = context.localStore[type].map((elem, index) => {
            if (id == index){
                elem.description = text;
            }
            return elem;
        })

        context.setLocalStore(state => ({
            ...state,
            [type] : temp
        }))

        localStorage.setItem(type, JSON.stringify(temp));
        setActive(false);
    }

    return (
        <div className="detail__wrapper">
            <div className="detail">
                <div className="detail__header">
                    <div>{JSON.parse(localStorage.getItem(type))[id].name}</div>
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
                        JSON.parse(localStorage.getItem(type))[id].description == "" 
                        ? "This task has no description" 
                        : JSON.parse(localStorage.getItem(type))[id].description
                    }/>
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