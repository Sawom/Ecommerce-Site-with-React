import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data=> {
                setProducts(data);
                setDisplay(data); //search
        }  )
    },[]) 

    // add to cart 
    const addtocart = (product)=>{
        const newcart = [...cart,product];
        setCart(newcart);
    }
    // search 
    const handlesearch = (event) =>{
        const search = event.target.value;
        const matched = products.filter((product)=> product.name.toLowerCase()
        .includes(search.toLowerCase()) )
        setDisplay(matched);
    }

    return (
        <div>
            <div className='posin' >
                <input onChange={handlesearch} placeholder='Search your product...' type="text" /> <br /><br />
            </div>
            <div className='shop' >
                <div className='product' >
                {
                display.map((product)=> <Product
                    key={product.key}
                    product={product}
                    addtocart={addtocart}
                ></Product> )
                }
                </div>
                <div className='cart' >
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
        </div>
        </div>
        
        
    );
};

export default Shop;