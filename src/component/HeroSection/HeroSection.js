import React from 'react';
import HeroSectionImage from './HeroSectionImage';
import HeroSectionContent from './HeroSectionContent';
import backgrundImage from "./../../images/image more/hm1-bg-1.webp"

function HeroSection() {
    return (
        <section className='homeSec01' style={{background:`url(${backgrundImage})`}}>
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
        </section>
    );
}

export default HeroSection;