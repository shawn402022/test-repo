
import { useState, useEffect } from 'react'

const SpotThumbNail = ({ spotId }) => {
    const [spotImages, setSpotImages] = useState([])

    useEffect(() => {
        const fetchSpotImages = async () => {
            const response = await fetch(`/api/spots/${spotId}`)
            const data = await response.json()
            setSpotImages(data.SpotImages)
        }
        fetchSpotImages()
    }, [spotId])

    return (
        <div>
            {spotImages.map((image, index) => (
                <div key={image.id}>
                    <img
                        src={image.url}
                        className={`image${index + 1} thumb-nail`}
                        alt={`Spot view ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    )
}

export default SpotThumbNail
