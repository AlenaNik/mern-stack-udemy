import React from 'react';
import PlaceList from '../components/PlaceList'

const dummyplaces = [
    {
        id: 'p1',
        title: 'Building',
        description: 'One building from dummy data',
        imageURL: 'https://estaticos.elperiodico.com/resources/jpg/5/0/zentauroepp50335542-soc-empire191011184753-1570812666405.jpg',
        address: '20 W 34th St, New York, NY 10001',

    }
]

const UserPlaces = () => {
    return <PlaceList items={}/>
};

export default UserPlaces;
