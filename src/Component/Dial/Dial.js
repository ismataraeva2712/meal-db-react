import React from 'react';

const Dial = (props) => {
    return (
        <div style={{
            border: '2px solid red',
            margin: '20px'
        }}>
            <p>hello i am counting your steps {props.steps} </p>
        </div>
    );
};

export default Dial;