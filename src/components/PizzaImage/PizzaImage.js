import React from 'react';

import classes from './PizzaImage.css';
import PizzaImageFile from '../../assets/pizza.jpg';

const PizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImageFile} className={classes.PizzaImg}/>
    </div>
);

export default PizzaImage;