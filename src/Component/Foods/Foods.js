import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    const orderNow = (food) => {
        const newCart = [...cart, food]
        setCart(newCart)

    }
    return (
        <div>

            <div className='main-container'>
                <div className='foods-container'>
                    {
                        foods.map(food => <Food
                            orderNow={orderNow}
                            food={food}
                            key={food.idMeal}

                        ></Food>)
                    }
                </div>
                <div className="order-component">
                    <Order cart={cart}></Order>
                </div>
            </div>
        </div>
    );
};

export default Foods;