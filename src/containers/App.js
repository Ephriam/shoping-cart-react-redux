import React from 'react'
import ListOfProduct from './ListOfProducts'
import Cart from './Cart'

const App = () => {
    return (
        <div>
            <h1>Sample Shopping Cart</h1><hr/>
            <ListOfProduct /><hr />
            <Cart />
        </div>
    )
}

export default App
