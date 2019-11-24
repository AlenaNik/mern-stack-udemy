import React, { useState } from 'react';
import './App.css';
import Goallist from './components/goallist.component'
import AddGoal from "./components/addgoal.component";

function App() {
    const [Daygoals, setDaygoals] = useState([
        {id: '1', text: 'Wake up'},
        {id: '2', text: 'Breakfast'},
        {id: '3', text: 'Go to sleep'},
    ]);

const addGoalHandler = (newOne) => {
       setDaygoals((prevDayGoals) => prevDayGoals.concat(newOne)
       )
};


  return (
    <>
      <h1>Hey there</h1>
        <AddGoal onAddGoal={addGoalHandler}/>
      <Goallist goals={Daygoals}/>
    </>
  );
}

export default App;
