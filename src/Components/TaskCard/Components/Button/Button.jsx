import React from "react";
import "./Button.css";
import addIcon from "../../../../assets/icons/icon-add.svg";

const Button = ({ showInput, input,submit }) => {

    return (
        <button 
            className={(input && submit) ? "btn active" : "btn btn_hover"} 
            onClick={showInput}>
            {
                (input && submit) ? 
                    <span className="btn__test">Submit</span>
                    :
                    <div>
                        <img className="btn__icon" src={addIcon} alt="add"/>
                        <span className="btn__test">Add card</span>
                    </div>
            }
        </button>
    )
}

export default Button;
