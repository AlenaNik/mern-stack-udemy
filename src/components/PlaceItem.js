import React from 'react';
import './Place.css';
import Card from '../UI/Card';

const PlaceItem = props => {
    return <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item">
        <button>View on map</button>
            <button>Edit a place</button>
            <button>Delete a place</button>
        </div>
        </Card>
    </li>
};
export default PlaceItem;
