import React from 'react';
const Goallist = props => {
    return (
        <ul>
          {props.goals.map((goal) => {
              return <li key={goal.id}>{goal.text}</li>
          })}
        </ul>
    );
};

export default Goallist;
