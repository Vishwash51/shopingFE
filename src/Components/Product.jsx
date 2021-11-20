import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Product() {
    
        return (
            <div id="product">
                <h1>Choose & Enjoy</h1>
                <p>dummy textdummy textdummy textdummy textdummy textdummy textdummy textdummy textdummy text</p>
                <div className="a-container">
                    <Productbox image={pimage1} title="Large Burger" />
                    <Productbox image={pimage2} title="Luger Burger" />
                </div>
            </div>
        );
    
}

export default Product;