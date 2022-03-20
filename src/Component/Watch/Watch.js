import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const newSteps = () => {
        const countStep = steps + 1
        setSteps(countStep)
    }
    return (
        <div>
            <h2>Step : {steps} </h2>
            <button onClick={newSteps}>De Dour ....</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;