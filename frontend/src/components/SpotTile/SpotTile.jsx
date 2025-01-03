import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ManageSpots from '../ManageSpots/ManageSpots';
import ToolTip from '../ToolTip/ToolTip';
import "./SpotTile.css";

const SpotTile = ({ spot, actions }) => {
  const navigate = useNavigate();
  const defaultImage = " ";

  const imageUrl =
    spot.previewImage || spot.SpotImages?.[0]?.url || defaultImage;
  // Add logging to check image URLs
  console.log("Image URL:", imageUrl);

  // Create stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-filled" />);
    }

    // Add remaining stars up to 5
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`star-empty-${i}`} className="star-empty" />);
    }

    return stars;
  };

  return (
    <div className="spot-tile-container">
      <Link to={`/spots/${spot.id}`} className="spot-tile-link">
        <div
          className="spot-tile"
          onClick={() => navigate(`/spots/${spot.id}`)}
        >
          <img
            src={imageUrl}
            alt={spot.name}
            className="spot-thumbnail"
            onError={(e) => {
              console.log("Image load error:", e);
              e.target.src = defaultImage;
            }}
          />
          <div className="spot-info">
            <div className="location-price">
              <p className="spot-location">
                {spot.city}, {spot.state}
              </p>
              <p className="spot-price">${spot.price} night</p>
            </div>
            <ManageSpots/>
            <div className="rating">
              {spot.avgRating ? (
                <>
                  <div className="star-rating">
                    {renderStars(spot.avgRating)}
                  </div>
                  <span>{Number(spot.avgRating).toFixed(1)}</span>
                </>
              ) : (
                <span className="new-listing">
                  <FaStar className="star-filled" /> New
                </span>
              )}
            </div>
            <ToolTip tooltipText={spot.name}>
              <h3 className="spot-name">{spot.name}</h3>
            </ToolTip>
          </div>
        </div>
      </Link>
      {actions && actions}
    </div>
  );
};

export default SpotTile;


















/*
import { FaStar } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import './SpotTile.css';
import ManageSpots from '../ManageSpots/ManageSpots';
import ToolTip from '../ToolTip/ToolTip';

const SpotTile = ({ spot }) => {
  const navigate = useNavigate();
  const defaultImage = '';

  const imageUrl =
    spot.previewImage || spot.SpotImages?.[0]?.url || defaultImage;
  // Add logging to check image URLs
  console.log('Image URL:', imageUrl);

  // Create stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-filled" />);
    }

    // Add remaining stars up to 5
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`star-empty-${i}`} className="star-empty" />);
    }

    return stars;
  };

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
          <FaStar /> {spot.avgRating ? spot.avgRating.toFixed(2) : 'New'}
        </span>
        <ToolTip/>
      </div>
    </div>
  );
};

export default SpotTile;
*/
