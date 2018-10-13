import React from 'react'

const Item = ({quantity, price, name, id}) => {
    return (
        <li>{`${name} -$${price} x ${quantity}`}</li>
    )
}

export default Item