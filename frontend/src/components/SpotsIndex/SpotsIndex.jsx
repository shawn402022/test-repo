import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import useUser from '../../hooks/useUser';
import { deleteSpotThunk, fetchAllSpotsThunk } from '../../store/spots';
import './SpotsIndex.css';
//import * as assetImages from '../assets'

const SpotsIndex = () => {
  const dispatch = useDispatch();
  const allSpots = useSelector((state) => state.spots.allSpots);
  const user = useUser();
console.log(allSpots, user);

  useEffect(() => {
    dispatch(fetchAllSpotsThunk());
  }, [dispatch]);



  return (
    <div className="spots-grid">
      {Object.values(allSpots).map((spot) => (
        <Link to={`/spots/${spot.id}`} key={spot.id} className="spot-link">
          <div className="spot-tile">
            <img src={spot.previewImage} alt={spot.name} className="spot-image" />
            <div className="spot-details">
              <div className="location-price">
                <div className="spot-location">
                  {spot.city}, {spot.state}
                </div>
                <div className="spot-rating">
                  <i className="fas fa-star"></i>
                  {spot.avgRating ? spot.avgRating.toFixed(1) : 'New'}
                </div>
                <div className="spot-price">${spot.price} night</div>
              </div>
            </div>
            <Actions isVisible={user?.id === spot.ownerId} spotId={spot.id} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SpotsIndex;

function Actions({ spotId, isVisible = false}) {
  if(!isVisible) {
    return null;
  }

  return (
    <footer>
      <DeleteSpot spotId={spotId} />
      <UpdateSpot spotId={spotId} />
    </footer>
  )
}

function DeleteSpot({spotId}) {
  const dispatch = useDispatch();

  const deleteSpot = (event) => {
    event.preventDefault();
    return dispatch(deleteSpotThunk(spotId))
      .then(() => dispatch(fetchAllSpotsThunk()));
  }

  return <button type='button' onClick={deleteSpot}>Delete</button>;
}

function UpdateSpot({spotId}) {
  const navigate = useNavigate();

  const updateSpot = (event) => {
    event.preventDefault();
    navigate(`/spots/${spotId}/edit`);
  }

  return <button type='button' onClick={updateSpot}>Update</button>;
}
