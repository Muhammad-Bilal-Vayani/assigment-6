import React from 'react';

function BestSellHeading(props) {
    return (
        <div className='container'> 
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default BestSellHeading;