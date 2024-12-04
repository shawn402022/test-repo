import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpots } from "./store/spots"

const SpotList = () => {
  const dispatch = useDispatch();
  const spotList = useSelector((state) => Object.values(state.spot.spotList));
  console.log(spotList)

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);



  return (
    <div>
      <h1>Spot List</h1>
      {Array.isArray(spotList) ? (
        spotList.map(({ id, city, state }) => (
          <p key={id}>{city} {state}</p>
        ))
      ) : (
        <p>Loading spots...</p>
      )}
    </div>
  )
}

export default SpotList
