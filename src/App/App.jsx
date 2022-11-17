import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Tasks from '../App/pages/Tasks/Tasks';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Context from '../Context/Context';
import ROUTES from '../configs/ROUTES';
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
      <Routes>
        <Route path={ROUTES.main} element={<Tasks/>}/>
        <Route path={ROUTES.task.mask} element={<TaskDetail/>}/>
        <Route path={ROUTES.error} element={<ErrorPage/>}/>
      </Routes>
    </Context.Provider>
  );
}

export default App;
