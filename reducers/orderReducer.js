const initState = {
    orders: [],
}

export default function loginReducer (state = initState, action) {
    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload.orders,
            }
        default:
            return state;
    }
}