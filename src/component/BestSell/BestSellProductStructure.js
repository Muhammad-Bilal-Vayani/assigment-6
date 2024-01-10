import React from 'react';

let BestSellProductStructure=(props)=> {
    let passData=()=>
    {
        props.handleData(props)
        props.count()
        
    }
    
    return (
        <div className="bestSellSingle" onClick={passData}>
            <img src={props.product.img} alt="" />
            <h6>{props.product.category}</h6>
            <h4>{props.product.title}</h4>
            {
                props.product.discount?
                <h5>{props.product.discount}</h5>:
                null
            }
            {
                props.product.isNew?
                <h3>{props.product.isNew}</h3>:
                null
            }
            <div className="bottomDiv">
                <div className="price">
                    <span>{props.product.actualPrice}</span><del>{props.product.discountedPrice}</del>
                </div>
                <div className="addToCart">
                    <a href="#">+ Add To Cart</a>
                </div>
            </div>
        </div>
    );
}

export default BestSellProductStructure;
