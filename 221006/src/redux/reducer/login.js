const initState = {
    id : '',
    pw : '',
    isLogin: false
}

function reducer(state = initState, action) {
    const { type, payload } = action; 
    switch (type) {
        case "LOGIN" :
            
            return {...state, 
                    id : payload.id, 
                    pw : payload.pw,
                    isLogin : true };
        case "LOGOUT" :

            return {...state, 
                    id : payload.id, 
                    pw : payload.pw,
                    isLogin : false };
        default:
            return state;
    }
}

export default reducer;