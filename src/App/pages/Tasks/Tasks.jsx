import React from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { taskAddedInBacklog, taskAddedInReady, taskAddedInInProgress, taskAddedInFinished } from "../../../actions";
import './Tasks.css';

const Tasks = () => {
    return (
        <>
            <Header/>
            <main className="tasks__wrapper">
                <TaskCard title="Backlog" inputOrDropDown={false} action={taskAddedInBacklog}/>
                <TaskCard title="Ready" inputOrDropDown={true} dependentTask="backlog" action={taskAddedInReady}/>
                <TaskCard title="InProgress" inputOrDropDown={true} dependentTask="ready" action={taskAddedInInProgress}/>
                <TaskCard title="Finished" inputOrDropDown={true} dependentTask="inprogress" action={taskAddedInFinished}/>
            </main>
            <Footer/>
        </>
    )
}

export default Tasks;