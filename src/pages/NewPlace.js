import React, { useCallback, useReducer } from 'react';
import Input from '../components/Input';
import Button from '../UI/Button'

import './NewPlace.css';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../components/util/validators";
const formReducer  = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if(inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                   formIsValid = formIsValid && state.inputs[inputId].isValid;

                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {

    const [formState, dispatch ] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
    }, []);
    return <form className="place-form">
            <Input
                id="title"
                element="input"
                   type="text"
                   label="Title"
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText={'Please enter a value'}
                   onInput={inputHandler}
            />
        <Input
            id="description"
            element="input"
               type="text"
               label="Title"
               validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
               errorText={'Please enter a valid description (at least 5 characters)'}
               onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
            Submit a place
        </Button>
    </form>
}

export default NewPlace;
