import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend
    let navigate = useNavigate();
    const frndDetails = () => {
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={frndDetails}>{username} {id}</button>
        </div>
    );
};

export default Friend;