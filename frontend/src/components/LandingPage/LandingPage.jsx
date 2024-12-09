import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../store/spotReducer";
import { useEffect } from "react";



export const LandingPage = () => {
    const dispatch = useDispatch();
    const { spots } = useSelector((state) => state.spots);

    useEffect(() => {
        dispatch(fetchSpots());
    }, [dispatch])

    return (
        <div>
            {JSON.stringify(spots)}
        </div>

    )
}

export default LandingPage
