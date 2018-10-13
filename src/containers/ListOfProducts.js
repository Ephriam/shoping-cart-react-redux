import React from 'react'
import Product from '../components/Product'
import { connect } from 'react-redux'

const ListOfProducts = ({products, addToCart}) => {
    const productsList = products.map(val => <Product {...val} addToCart={addToCart} key={val.id}/>)
    return (
        <div>
            <h4><b>Products</b></h4>
            {productsList}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch({type: 'ADD_TO_CART', item})
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfProducts)