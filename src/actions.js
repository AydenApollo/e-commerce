export function addItem(data) {
    return {
        type: 'ADD_ITEM',
        data: data
    }
}
export function viewCart(data) {
    return {
        type: "VIEW_THE_CART",
        data: data
    }
}
export function deleteItem(data) {
    return {
        type: "REMOVE_FROM_CART",
        data: data
    }
}
export function loadItemInView(data) {
    return {
        type: "LOAD_ITEM",
        data: data
    }
}