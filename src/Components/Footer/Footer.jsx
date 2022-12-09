import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = () => {
    const store = useSelector(store => store);

    return (
        <footer className="footer">
            <div className="footer__items">
                <div className="footer__item">Active tasks: {store['backlog'].length}</div>
                <div className="footer__item">Finished tasks: {store['finished'].length}</div>
            </div>
            <div className="footer__items">
                <div className="footer__item">
                    <a href="https://github.com/NikitaSar64" target="_blank">Kanban board by dev_NikitaSar, 2022</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;