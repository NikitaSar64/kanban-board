import React from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import './Tasks.css';

const Tasks = () => {
    return (
        <>
            <Header/>
            <main className="tasks__wrapper">
                <TaskCard title="Backlog" inputOrDropDown={true}/>
                <TaskCard title="Ready" typeTask="Backlog" inputOrDropDown={false}/>
                <TaskCard title="InProgress" typeTask="Ready" inputOrDropDown={false}/>
                <TaskCard title="Finished" typeTask="InProgress" inputOrDropDown={false}/>
            </main>
            <Footer/>
        </>
    )
}

export default Tasks;