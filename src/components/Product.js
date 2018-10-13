import React from 'react'

const Product = ({price, quantity, name, id, addToCart}) => {
    return (
        <div>
            <p>{`${name}-$${price} ${quantity}`}</p><br/>
            <button onClick={() => addToCart({price, quantity, name, id})}>ADD TO CART</button>
        </div>
    )
}

export default Product