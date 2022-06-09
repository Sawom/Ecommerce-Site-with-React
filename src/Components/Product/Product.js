import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const{name,img,price,seller,stock} = props.product;
    console.log(props.product);
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='pos' >
            <div className='imgst' >
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='nam' >{name}</h3>
                <h3>Price: $ {price} </h3>
                <h3> by: {seller} </h3>
                <h3>Only {stock} remain </h3>
                <button className='btn' onClick={()=> props.addtocart(props.product) } > {element}  add to cart</button> <br /><br />
            </div>
        </div>
    );
};

export default Product;