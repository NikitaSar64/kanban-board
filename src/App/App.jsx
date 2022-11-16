import React, { useState, useEffect } from 'react';
import TaskCard from '../Components/TaskCard/TaskCard';
import Context from '../Context/Context';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './App.css';

function App() {

  let [localStore, setLocalStore] = useState({
    'Backlog': [],
    'Ready': [],
    'InProgress': [],
    'Finished': []
  });

  useEffect(() => {
    setLocalStore({
      'Backlog' : localStorage.getItem('Backlog') ? JSON.parse(localStorage.getItem('Backlog')) : localStorage.setItem('Backlog', JSON.stringify([])),
      'Ready' : localStorage.getItem('Ready') ? JSON.parse(localStorage.getItem('Ready')) : localStorage.setItem('Ready', JSON.stringify([])),
      'InProgress' : localStorage.getItem('InProgress') ? JSON.parse(localStorage.getItem('InProgress')) : localStorage.setItem('InProgress', JSON.stringify([])),
      'Finished' : localStorage.getItem('Finished') ? JSON.parse(localStorage.getItem('Finished')) : localStorage.setItem('Finished', JSON.stringify([])),
    })
  }, [])

  const localTasks = {
    localStore,
    setLocalStore
  }

  return (
    <Context.Provider value={localTasks}>
      <Header/>
      <div className="tasks__wrapper">
          <TaskCard title="Backlog" inputOrDropDown={true}/>
          <TaskCard title="Ready" typeTask="Backlog" inputOrDropDown={false}/>
          <TaskCard title="InProgress" typeTask="Ready" inputOrDropDown={false}/>
          <TaskCard title="Finished" typeTask="InProgress" inputOrDropDown={false}/>
      </div>
      <Footer/>
    </Context.Provider>
  );
}

export default App;
