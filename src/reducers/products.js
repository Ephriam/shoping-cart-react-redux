const items = [{
    id: 1,
    name: 'Ipad 4',
    price: 500,
    quantity: 5
},{
    id: 2,
    name: 'T shirt',
    price: 10,
    quantity: 5
},{
    id: 3,
    name: 'Music CD',
    price: 19,
    quantity: 5
}]

const products = (state = items, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const newItems = items.map(val => {
                if(val.id === action.item.id && val.quantity > 0){
                    val.quantity--
                }
                return val
            })
            return newItems
        default: 
            return state
    }
}

export default products