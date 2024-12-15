import { deleteReviewThunk } from "../../store/reviews";
import { fetchSingleSpotThunk } from "../../store/spots";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal"
import OpenModalButton from "../OpenModalButton/OpenModalButton"
import { useDispatch } from "react-redux";


const Review = ({ spotReview, userId, spotId }) => {
    const dispatch = useDispatch();

    const handleDeleteReview = (reviewId) => async () => {
        await dispatch(deleteReviewThunk(reviewId));
        dispatch(fetchSingleSpotThunk(spotId));
    };
    return (
        <>
            <span>
                {spotReview.review}
            </span>
            <span>
                ({spotReview.stars})
            </span>
            {userId === spotReview.userId && (
                <OpenModalButton
                    buttonText="Delete"
                    modalComponent={
                        <DeleteConfirmModal
                            onDelete={handleDeleteReview(spotReview.id)}
                            type="Review"
                        />
                    }
                />
            )}


        </>

    )
}

export default Review
