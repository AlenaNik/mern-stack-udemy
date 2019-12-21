import React from 'react';
import Input from '../components/Input';
import './NewPlace.css';

const NewPlace = () => {
    return <form className="place-form">
            <Input element="input"
                   type="text"
                   label="Title"
                   validators={[]}
                   errorText={'Please enter a value'}

            />
    </form>
}

export default NewPlace;
