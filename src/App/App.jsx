import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Tasks from '../App/pages/Tasks/Tasks';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ROUTES from '../configs/ROUTES';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Tasks/>}/>
      <Route path={ROUTES.task.mask} element={<TaskDetail/>}/>
      <Route path={ROUTES.error} element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
