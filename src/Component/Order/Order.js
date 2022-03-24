import React from 'react';
import './Order.css'
const Order = (props) => {
    const { cart } = props
    console.log(cart)
    let food = '';
    for (const item of cart) {
        console.log(item)
        food = food + item.strMeal + ','
    }
    return (
        <div className='order'>
            <h3>Order Summery</h3>
            <h4>Food order : {cart.length} item</h4>
            <h4>Food Item: {food} </h4>
        </div>
    );
};

export default Order;