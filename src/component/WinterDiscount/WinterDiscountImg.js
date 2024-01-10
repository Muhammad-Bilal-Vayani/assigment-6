import React from 'react';
import discountImg from "./../../images/image more/banner-1.webp"
function WinterDiscountImg() {
    return (
        <div className="col-lg-7 col-md-6">
            <div className="discount-img">
                <a href="#">
                    <img src={discountImg} alt="discount-img" />
                </a>
            </div>
       </div>
    );
}

export default WinterDiscountImg;