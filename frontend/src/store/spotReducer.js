
export const  fetchSpots = () => async (dispatch)  => {
    try {
        const response = await fetch('/api/spots')
        const spots = await response.json();

        dispatch({
            type: "SPOTS_FETCHED",
            payload: { spots }
        })
    } catch (error) {
        dispatch({
            type: "SPOTS_ERROR",
            payload: { error }
        })
    }
}

export const updateSpots = (index, title) => async (dispatch) => {

    try {
        await fetch('/api/spots');

        dispatch({ type: 'EDIT_SPOTS', payload: { index, updates: { title } } });
    } catch (error) {
        dispatch({ type: 'EDIT_SPOTS', payload: {error} });
    }
}

const initialState = {
    spots:[],
    error:null
}


export const spotReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case 'SPOTS_FETCHED':
            return {...state, spots: action.payload.spots, error:null}
        case 'SPOTS_ERROR':
                return {...state,  spots:[], error: action.payload.error}
        case 'EDIT_SPOTS' :{
            const updatedPosts = [...state.spots];
            updatedPosts[action.payload.index] = { ...updatedPosts[action.payload.index], ...action.payload.updates };
            return { ...state, spots: updatedPosts };
        }
        default:
            return state

    }
}
