import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Friend from './../Friend/Friend';

const FriendDetails = () => {
    const { details } = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${details}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>my Friend details ................{details}.</h1>
            <h3> name : {friend.name}</h3>
            <h4>email : {friend.email}</h4>
            <h4>phone : {friend.phone}</h4>
            <p>city : {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetails;