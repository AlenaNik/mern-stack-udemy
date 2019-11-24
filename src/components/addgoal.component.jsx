import React, {useState} from 'react';

const AddGoal = props => {
const [enteredText, setEnteredText] = useState('');

   const addOneHandler = e => {
       e.preventDefault();
       const newGoal = {
           id: Math.random().toString(),
           text: enteredText
       };
       props.onAddGoal(newGoal);
       setEnteredText('')
   }

   const textChange = e => {
       setEnteredText(e.target.value);
   }

    return (
        <form action="" onSubmit={addOneHandler}>
            <input type="text" value={enteredText} onChange={textChange}/>
            <button type="submit">Add one</button>
        </form>
    )
}

export default AddGoal;
