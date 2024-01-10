import React from 'react';

function WinterDiscountContent(props) {
    return (
        <div className="col-lg-5 col-md-6">
            <div className="discount-content">
                <p>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</p>
                <h2>Winter Discount <br/>Up to 30%</h2>
                <p className="bright-color">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="discount-btn default-btn btn-hover">
                    <a className="btn-color-theme btn-size-md btn-style-outline" href="product-details.html">Shop Now</a>
                </div>
            </div>
       </div>
    );
}

export default WinterDiscountContent;