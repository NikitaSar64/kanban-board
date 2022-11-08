import React from 'react';
import TaskCard from '../Components/TaskCard/TaskCard';
import './App.css';

function App() {
  return (
    <>
      <TaskCard title="Backlog" showInput={true}/>
      <TaskCard title="Ready" typeTask="Backlog" showDropDown={true}/>
    </>
  );
}

export default App;
