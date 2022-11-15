import React from "react";
import Profile from "../Profile/Profile";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <span className="header-title">Awesome Kanban Board</span>
            <Profile/>
        </header>
    )
}

export default Header;