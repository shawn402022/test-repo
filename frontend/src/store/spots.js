//constant to avoid debugging typos
const GET_ALL_SPOTS = '/spot/getAllSpots'

//regular action creator
const loadAllSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    payload: spots,
  };
}

//Thunk action creator
export const getAllSpots = () => async (dispatch) => {
  const response = await fetch('/api/spots');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllSpots(data));
    return data;
  }
}

//state object
const initialState = {}

//reducer
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPOTS:{
      const newState = {};
      action.spots.forEach((spot) => (newState[spot.id] = spot));
      return newState;
    }
      //return {...state, spots: action.payload };
    default:
      return state;
  }
}

export default spotsReducer;
