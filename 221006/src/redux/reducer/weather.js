const initState = {
    weatherData : {},
}


function reducer(state = initState, action) {
    const { type, payload } = action; 
    switch (type) {
        case "GET_WEATHER_DATA" :
            
            return {...state, weatherData : payload};
    
        default:
            return state;
    }
}

export default reducer;