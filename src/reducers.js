import deepcopy from 'deepcopy'

var initialState = {
    cart_list: [
        {Cart: "", in_cart: false}
    ]
}

export function item_select(state, action) {
    if (state === undefined) {
        return initialState
    }
    let new_state = deepcopy(state);
    if (action.type === 'ADD_ITEM') {
        new_state.cart_list.push({Cart: action.data.Cart, in_cart: false})
    }
    return new_state
}


export default item_select