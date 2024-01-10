import React from 'react';
import FooterFirstCol from './FooterFirstCol';
import FooterSecondCol from './FooterSecondCol';
import FooterSecondColArray from './FooterSecondColArray';
import FooterThirdColArray from './FooterThirdColArray';
import FooterForthCol from './FooterForthCol';
import CopyRight from './CopyRight';

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <FooterFirstCol/>
                    <FooterSecondCol arrayName={FooterSecondColArray} title="USEFUL LINK"/>
                    <FooterSecondCol arrayName={FooterThirdColArray} title="ABOUT US"/>
                    <FooterForthCol/>
                </div>
            </div>
            <CopyRight/>
        </footer>
    );
}

export default Footer;