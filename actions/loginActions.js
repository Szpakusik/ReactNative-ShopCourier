export const loginAction = ( isLogged ) => {
    return ( dispatch ) => {
        dispatch( { type: "LOG_IN", payload: { isLogged: isLogged } } )
    }
}