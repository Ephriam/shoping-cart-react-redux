import React from 'react'
import Item from '../components/Item'
import { connect } from 'react-redux'

const ListOfItems = ({items, checkOut}) => {
    let listOfItems = items.map(val =><Item {...val} key={val.id}/>)
    if(!listOfItems.length){listOfItems = 'Please add an item to your cart'}
    let total = 0
    items.map(val => {
        total += val.price * val.quantity
        return val
    })
    return (
        <div>
            <u>
                {listOfItems}
            </u><br />
            total: {total} $ <br />
            <button onClick={checkOut}>CHECK OUT</button>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.cart
})

const mapDispatchToProps = dispatch => ({
    checkOut: () => dispatch({type: 'CHECK_OUT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems)