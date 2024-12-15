

const ReviewSummary = ({ numReviews, avgRating }) => {
    if (!numReviews) return 'New';

    return (
        <div>

            {Number(avgRating).toFixed(1)} · {numReviews}{' '}
            {numReviews === 1 ? 'Review' : 'Reviews'}

        </div>
    )
}

export default ReviewSummary
