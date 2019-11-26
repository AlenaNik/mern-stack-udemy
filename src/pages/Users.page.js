import React from 'react';
import UserList from '../components/UsersList.component';

const Users = () => {
    const USERS = [{
        id: 'user1',
        name: 'Batosha',
        image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        places: 11
    }];

    return (
       <UserList items={USERS}/>
    )
};

export default Users;
