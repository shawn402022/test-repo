import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteReviewThunk } from '../../store/reviews';
import { fetchSingleSpotThunk } from '../../store/spots';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import ReviewFormModal from '../ReviewFormModal/ReviewFormModal';
import './SpotDetails.css';
import ReviewSummary from '../ReviewSummary/ReviewSummary';
import SpotReviews from '../SpotReviews/SpotReviews';

const SpotDetails = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();

  const spot = useSelector((state) => state.spots.singleSpot);
  const user = useSelector((state) => state.session.user);

  const hasReviewed = spot?.Reviews?.some(
    (review) => review.userId === user?.id,
  );
  const Owner = spot?.Owner;
  const reviews = spot?.Reviews || [];

  useEffect(() => {
    dispatch(fetchSingleSpotThunk(spotId));
  }, [dispatch, spotId]);

  if (!spot || !spot.id) return <div>Loading...</div>;

  const {
    name,
    description,
    price,
    city,
    state,
    country,
    SpotImages,
    avgRating,
    numReviews,
  } = spot;

  const isComingSoon = () => {
    alert('Feature coming soon');
  };

  const canReview = user && !hasReviewed && user.id !== Owner?.id;

  // const formatReviewDate = (date) => {
  //   const options = { month: 'long', year: 'numeric' };
  //   return new Date(date).toLocaleDateString('en-US', options);
  // };






  return (
    <div className="spot-details">
      <div className="spot-details-container">
        <h1>{name}</h1>
        <div className="spot-location">
          {city}, {state}, {country}
        </div>
        <div className="spot-images-grid">
          <div className="main-image">
            {SpotImages && SpotImages[0] && (
              <img src={SpotImages[0].url} alt="Main spot view" />
            )}
          </div>
          <div className="small-images">
            <div className="image1"><img /></div>
            <div className="image2"><img /></div>
            <div className="image3"><img /></div>
            <div className="image4"><img /></div>
          </div>
        </div>

        <div className="spot-info-container">
          <div className="host-description">
            <h2>
              Hosted by {Owner?.firstName} {Owner?.lastName}
            </h2>
            <p>{description}</p>
          </div>

          <div className="callout-box">
            <div className="price-review-summary">
              <div className="price-line">
                <span className="price">${price}</span> night
              </div>
              <div className="rating-line">
                <i className="fas fa-star"></i>
                <ReviewSummary numReviews={numReviews} avgRating={avgRating}/>
              </div>
            </div>
            <button onClick={isComingSoon}>Reserve</button>
          </div>
        </div>
        <div className="reviews-section">
          <h2 className="reviews-header">
            <i className="fas fa-star"></i>
            <ReviewSummary numReviews={numReviews} avgRating={avgRating}/>
          </h2>

          {canReview && (
            <OpenModalButton
              buttonText="Post Your Review"
              modalComponent={
                <ReviewFormModal
                  spotId={spotId}
                  onReviewSubmit={() => {
                    dispatch(fetchSingleSpotThunk(spotId));
                  }}
                />
              }
            />
          )}
          <SpotReviews reviews={reviews} userId={user?.id} spotId={spot.id}/>

        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
