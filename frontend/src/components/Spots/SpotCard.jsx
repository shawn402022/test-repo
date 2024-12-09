import { csrfFetch } from "../../store/csrf"


const SpotCard = () => {

    const fetchData = async() => (dispatch) => {
        const data = await csrFetch('./api/spots')
        dispatch({type: 'FETCH_SUCCESS', payload:data})
    }

    return (
        <div>

        </div>
    )
}

export default SpotCard
