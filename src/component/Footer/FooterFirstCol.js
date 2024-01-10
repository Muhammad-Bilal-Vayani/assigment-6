import React from 'react';
import footerLogo from "./../../images/image more/headerLogo.webp"
import FooterFirstColSM from './FooterFirstColSM';

function FooterFirstCol() {
    return (
        <div className='col-md-3 firsCol'>
            <img src={footerLogo} alt="" />
            <FooterFirstColSM/>
        </div>
    );
}

export default FooterFirstCol;