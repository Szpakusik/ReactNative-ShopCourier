const initState = {
    isLogged: false,
}

export default function loginReducer (state = initState, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                isLogged: action.payload.isLogged,
            }

        default:
            return state;
    }
}