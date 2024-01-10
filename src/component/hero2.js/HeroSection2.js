import React from 'react';
import HeroSectionImage from './HeroSection2image';
import HeroSectionContent from './HeroSection2econtent';
// import backgrundImage from "./../../images/image more/hm1-bg-1.webp"

function heroSection() {
    return (
        // <section className='homeSec01' style={{background:`url(${backgrundImage})`}}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5">
                        <HeroSectionImage/>
                    </div>
                    <div className="col-md-7">
                        <HeroSectionContent/>
                    </div>
                </div>
            </div>
        // </section>
    );
}

export default heroSection;