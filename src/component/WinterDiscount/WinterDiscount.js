import React from 'react';
import WinterDiscountContent from './WinterDiscountContent';
import WinterDiscountImg from './WinterDiscountImg';

function WinterDiscount() {
    return (
        <section className='discountSec'>
            <div className="container">
                <div className="row align-items-center">
                    <WinterDiscountImg/>
                    <WinterDiscountContent/>
                </div>
            </div>
        </section>
    );
}

export default WinterDiscount;