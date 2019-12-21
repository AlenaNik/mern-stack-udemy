import React from 'react';
import './PlaceItem.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import Modal from '../UI/Modal';

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);


    return (
        <React.Fragment>
            <Modal show={showMap}
                   onCancel={closeMapHandler}
                   header={props.address}
                    contentClass="place-item__modal-content"
                    footerClass="place-item__modal-actions"
                   footer={<Button onClick={closeMapHandler}>Close<Button/>}
            />
        <li className="place-item">
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
        <Button inverse>View on map</Button>
            <Button to={`/places/${props.id}`}>Edit a place</Button>
            <Button danger>Delete a place</Button>
        </div>
        </Card>
    </li>
        </React.Fragment>
    )};
export default PlaceItem;
