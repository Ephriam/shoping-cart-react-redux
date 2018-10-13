const cart = (state = [], action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            const newState = [...state]
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.item.id){
                    if(action.item.quantity > 0){newState[i].quantity++}
                    return newState
                }
            }
            if(action.item.quantity <= 0){return newState}
            const newItem = action.item
            newItem.quantity = 1
            newState.push(newItem)
            return newState
        case 'CHECK_OUT':
            const newState2 = []
            return newState2
        default:
            return state
    }
}

export default cart