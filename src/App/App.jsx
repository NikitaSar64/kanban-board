import React, { useState, useEffect } from 'react';
import TaskCard from '../Components/TaskCard/TaskCard';
import Context from '../Context/Context';
import './App.css';

function App() {

  let [localStore, setLocalStore] = useState({
    'Backlog': [],
    'Ready': [],
  });

  useEffect(() => {
    setLocalStore({
      'Backlog' : localStorage.getItem('Backlog') ? JSON.parse(localStorage.getItem('Backlog')) : localStorage.setItem('Backlog', JSON.stringify([])),
      'Ready' : localStorage.getItem('Ready') ? JSON.parse(localStorage.getItem('Ready')) : localStorage.setItem('Ready', JSON.stringify([])),
    })
  }, [])

  const localTasks = {
    localStore,
    setLocalStore
  }

  return (
    <Context.Provider value={localTasks}>
      <TaskCard title="Backlog" inputOrDropDown={true}/>
      <TaskCard title="Ready" typeTask="Backlog" inputOrDropDown={false}/>
    </Context.Provider>
  );
}

export default App;
