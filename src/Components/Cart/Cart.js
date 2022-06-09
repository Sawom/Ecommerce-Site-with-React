import React from 'react';
import './cart.css';
const Cart = (props) => {
    const{cart} = props;
    let total = 0;
    for(const product of cart ){
        total = total+product.price;
    }
    const tax = total*.02;
    const delivery = total* .05;
    const grand = total+tax+delivery;
    return (
        <div>
            <h2> <u> Order Summary </u> </h2>
            <h3>Selected Product: {props.cart.length} </h3>
            <h3>Product Price: {total} </h3>
            <h3>Tax: {tax} </h3>
            <h3>Delivery Charge: {delivery} </h3>
            <h3>Grand Total: {grand} </h3>
        </div>
    );
};

export default Cart;