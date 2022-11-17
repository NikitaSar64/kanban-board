import React, { useContext } from "react";
import Context from "../../Context/Context";
import "./Footer.css";

const Footer = () => {
    const context = useContext(Context);

    return (
        <footer className="footer">
            <div className="footer__items">
                <div className="footer__item">Active tasks: {context.localStore['Backlog'].length}</div>
                <div className="footer__item">Finished tasks: {context.localStore['Finished'].length}</div>
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