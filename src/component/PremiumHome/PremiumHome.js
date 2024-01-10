import React from 'react';
import premiumBG from "./../../images/image more/banner-bg-1.webp"
function PremiumHome() {
    return (
        <div className="container premiumSec" style={{background:`url(${premiumBG})`}}>
            <div className="row">
                <div className="col-md-10 text-align-right">
                    <h2>Premium Home <br /> Decorator</h2>
                    <a href="#">LEARN MORE</a>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default PremiumHome;