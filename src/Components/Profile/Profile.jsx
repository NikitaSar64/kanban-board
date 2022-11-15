import React, { useState } from "react";
import userAvatar from "../../assets/icons/user-avatar.png";
import Menu from "./Components/Menu/Menu";
import "./Profile.css";

const Profile = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="profile" onClick={() => setOpen(!open)}>
            <div className="profile__icon">
                <img src={userAvatar} alt="userAvetar" />
            </div>
            <div className={open ? "profile__btn rotate" : "profile__btn"}></div>
            {open && <Menu/>}
        </div>
    )
}

export default Profile;