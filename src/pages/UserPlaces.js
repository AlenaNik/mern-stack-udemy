import React from 'react';
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom';

const dummyplaces = [
    {
        id: 'p1',
        title: 'Building',
        description: 'One building from dummy data',
        imageURL: 'https://estaticos.elperiodico.com/resources/jpg/5/0/zentauroepp50335542-soc-empire191011184753-1570812666405.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Building',
        description: 'One building from dummy data',
        imageURL: 'https://estaticos.elperiodico.com/resources/jpg/5/0/zentauroepp50335542-soc-empire191011184753-1570812666405.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = dummyplaces.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;
