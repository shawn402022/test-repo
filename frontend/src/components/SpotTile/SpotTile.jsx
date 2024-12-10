import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SpotTile.css';
import ManageSpots from '../ManageSpots/ManageSpots';

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();
  const defaultImage = 'https://i.ibb.co/WnFbjJB/villa-1.jpg';

  const imageUrl =
    spot.previewImage || spot.SpotImages?.[0]?.url || defaultImage;
  // Add logging to check image URLs
  console.log('Image URL:', imageUrl);

  return (
    <div className="spot-tile" onClick={() => navigate(`/spots/${spot.id}`)}>
      <img
        src={imageUrl}
        alt={spot.name}
        className="spot-thumbnail"
        onError={(e) => {
          console.log('Image load error:', e);
          e.target.src = defaultImage;
        }}
      />
      <div className="spot-info">
        <div className="location-price">
          <p className="spot-location">{spot.city}, {spot.state}</p>
          <p className="spot-price">${spot.price} night</p>
        </div>
        <ManageSpots/>
        <span className="rating">
          <FaStar /> {spot.avgRating ? Number(spot.avgRating).toFixed(1) : 'New'}
        </span>
      </div>
    </div>
  );
};

export default SpotTile;
