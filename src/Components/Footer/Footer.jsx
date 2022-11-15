import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__items">
                <div className="footer__item">Active tasks: </div>
                <div className="footer__item">Finished tasks: </div>
            </div>
            <div className="footer__items">
                <div className="footer__item">Kanban board by dev_NikitaSar, 2022</div>
            </div>

        </footer>
    )
}

export default Footer;