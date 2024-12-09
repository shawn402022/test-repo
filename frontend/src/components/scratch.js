// Copy and paste your work, or start typing.


export fetchPosts = () => (dispatch) => {
    // Indicate we’re starting a request
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Dispatch a success action with the fetched data
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
        // Dispatch a failure action if there's an error
        dispatch({ type: 'FETCH_POSTS_FAILURE', error });
    }
}


export fetchSpots = async () => (dispatch) => {
    try {
        const spots = await fetch(whatever)
        dispatch({ type: "SPOTS_FETCHED", payload: { spots } });
    } catch (error) {
        dispatch({ type: "SPOTS_ERROR", payload: { error } });
    }
}



/**

Store = The signle object that holds the entire application state

Action = An object that describes **what** happend, usually with a type property.
{ type: 'INCRMENET', payload: 1 }

Reducer = A pure function tht takes the current state and an action, and it decides how to update the slice

Dispatch = A function that sends an action to the reducer. Calling store.dispatch(action) triggers all reducers to calculate the next state


UI (dispatch an action) -> Reducer (creates a new state) -> Store (updates state) -> UI (re-renders)

// Action.js
const incrementAction = { type: 'INCREMENT', payload: 1 };


// Reducer.js
const initialState = { count: 0 }
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
      case 'INCRMENET':
        return { ...state, count: state.count + action.payload };
    }
};


// store.js
import { createStore } from 'redux';

const store = createStore(counterRducer);



// Application.js
store.dispatch(incrementAction)

console.log(store.getState()) // print out 1




// Redux-thunk
const fetchData = async () => (dispatch) => {
	const data = await fetch(whatever)
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
}
**/

// Flow for creating network requests:

// actions.js
// READING DATA
export fetchPosts = () => (dispatch) => {
    // Indicate we’re starting a request
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Dispatch a success action with the fetched data
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
        // Dispatch a failure action if there's an error
        dispatch({ type: 'FETCH_POSTS_FAILURE', error });
    }
}

// UPDATING DATE
export const updatePost = (index, title) => (dispatch) => {
    dispatch({ type: 'UPDATE_POSTS_REQUEST' });

    try {
        await fetch('https://jsonplaceholder.typicode.com/posts');

        dispatch({ type: 'UPDATE_POSTS_SUCCESS', payload: { index, updates: { title } } });
    } catch (error) {
        dispatch({ type: 'UPDATE_POSTS_FAILURE', error });
    }
}


// postsReducer.js
const initialState = {
    loading: false,
    error: null,
    posts: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        // READING DATA
        case 'FETCH_POSTS_REQUEST':
            return { ...state, loading: true, error: null };
        // READING DATA
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        // READING DATA
        case 'FETCH_POSTS_FAILURE':
            return { ...state, loading: false, error: action.error };
        // UPDATING DATE
        case 'UPDATE_POSTS_REQUEST':
            return { ...state, postLoading: true, postError: null };
        // UPDATING DATE
        case 'UPDATE_POSTS_SUCCESS':
            const updatedPosts = [...state.posts];
            updatedPosts[payload.index] = { ...updatedPost[payload.index], ...payload.updates };
            return { ...state, loading: false, posts: updatedPosts };
        // UPDATING DATE
        case 'UPDATE_POSTS_FAILURE':
            return { ...state, postLoading: false, postError: action.error };
        default:
            return state;
    }
}

export default postsReducer;

// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    posts: postsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;



// PostsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, updatePost } from './actions';

// React component
const PostsList = () => {
    const dispatch = useDispatch();
    // READING FROM REDUCER
    const { loading, error, posts } = useSelector(state => state.posts);

    // READING DATA
    useEffect(() => {
        // Dispatch the thunk when the component mounts (optional)
        dispatch(fetchPosts());
    }, [dispatch]);


    // UPDATING DATA
    const handleSubmit = () => {
        dispatch(updatePost('New party'))
    }

    // READING DATA
    const handleReloadPosts = () => {
        dispatch(fetchPosts())
    }

    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading posts...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {/* Alternatively, you can trigger the thunk from a button click */}
		// READING DATA
            <button onClick={handleReloadPosts}>Load Posts</button>
		// UPDATING DATA
            <button onClick={handleSubmit}>Update post</button>
        </div>
    );
}

export default PostsList;



// EXAMPLE COMPONENTS FOR ASSIGNMENT
export const Spot = ({ title, description, rating }) => (
    <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div>{rating}</div>
    </div>
);

// READ SPOTS AND DISPLAYING SPOTS
export const LandingPage = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, isError } = useSelector((state) => state.spots);

    useEffect(() => {
        dispatch(fetchSpots());
    }, [dispatch])

    return (
        { isLoading && <div>Loading...</div>}
{
    !isLoading && (
        {
            spots.map((spot) => (
                <Spot title={spot.title} description={spot.description} rating={spot.rating} />
            )}
    )
}
    )
}
