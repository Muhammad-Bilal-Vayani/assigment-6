import React from 'react';
import FooterFirstColSMArray from './FooterFirstColSMArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function FooterFirstColSM() {
    return (
        <div>
            <p>Follow us:</p>
            <ul>
                {
                    FooterFirstColSMArray.map((element,index)=> {
                        return <li key={index}><a href=""><FontAwesomeIcon  icon={element.icon} /> </a></li>
                    })
                }
            </ul>
        </div>
    );
}

export default FooterFirstColSM;