import React from "react";
import ROUTES from "../../configs/ROUTES";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
                <Link to={ROUTES.main}>
                    <span className="header-title">Awesome Kanban Board</span>
                </Link>
                <Profile/>
            </header>
    )
}

export default Header;