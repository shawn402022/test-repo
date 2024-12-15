import Review from "./Review"


const SpotReviews = ({ reviews, userId, spotId }) => {
    return (
        <ul className="reviewDetails">
            {reviews?.map((r) => {
                return (
                    <li key={r.id}>
                        <Review  spotReview={r} userId={userId} spotId={spotId}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default SpotReviews
