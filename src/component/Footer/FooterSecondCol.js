import React from 'react';
import FooterSecondColArray from './FooterSecondColArray';

function FooterSecondCol(props) {
    return (
        <div className='col-md-3 col02'>
            <h3>{props.title}</h3>
            <ul>
                {
                    props.arrayName.map((element,index)=> <li key={index}><a href={element.link}>{element.name}</a></li>)
                }
            </ul>
        </div>
    );
}

export default FooterSecondCol;