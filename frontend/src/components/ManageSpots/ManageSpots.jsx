import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import SpotTile from '../SpotTile/SpotTile';
import './ManageSpots.css';

const ManageSpots = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);
  const allSpots = useSelector((state) => state.spots.allSpots);

  const userSpots = Object.values(allSpots).filter(
    (spot) => spot.ownerId === user?.id
  );

  useEffect(() => {
    // Your effect logic here
  }, []);

  const handleDelete = spotId => function() {
    console.log(spotId);
    return Promise.resolve().then(() => {
      // Future implementation:
      // return dispatch(deleteSpotThunk(spotId))
      //   .then(() => dispatch(fetchAllSpotsThunk()));
    });
  };
  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="manage-spots">

      <h1>Manage Spots</h1>


        <button onClick={() => navigate('/spots/new')} className="create-spot-button">
          Create a New Spot
        </button>
        <div className="spots-grid">
        {userSpots.map((spot) => (
            <div key={spot.id} className="spot-tile-container">
              <SpotTile spot={spot} />
              <div className="spot-actions">
                <button className='edit-button' onClick={() => navigate(`/spots/${spot.id}/edit`)}>
                  Update
                </button>
                <OpenModalButton className='delete-button'
                  buttonText="Delete"
                  modalComponent={
                    <DeleteConfirmModal
                      onDelete={() => handleDelete(spot.id)}
                      type="Spot"
                    />
                  }
                />
              </div>
            </div>

          ))}

        </div>


    </div>
  );
};

export default ManageSpots;
