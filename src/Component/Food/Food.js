import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Food.css'
const Food = (props) => {
    // console.log(props)
    const { orderNow, food } = props
    const { idMeal, strMeal, strMealThumb, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strInstructions } = food
    return (
        <div className='food-container'>
            <img src={strMealThumb} alt="" />
            <div className='food-info'>
                <h3>Name : {strMeal}</h3>
                <h5>Category : {strCategory}</h5>
                <p>Ingredients : {strIngredient1} , {strIngredient2},{strIngredient3},{strIngredient4},{strIngredient5},{strIngredient6},{strIngredient7},{strIngredient8},{strIngredient9} </p>
                <p>Instructions : {strInstructions.slice(1, 100)}</p>
            </div>
            <button onClick={() => orderNow(food)} className='btn-order'>
                <p>Order Now</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Food;