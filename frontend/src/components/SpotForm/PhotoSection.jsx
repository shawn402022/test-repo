import { useRef } from "react"
import { addSpotImageThunk } from "../../store/spots";
import { useDispatch } from "react-redux";


const PhotoSection = ({spotId}) => {
    const ref = useRef();
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const imageData = {
            preview:true,
            url:ref.current.value
        }
        dispatch(addSpotImageThunk(imageData,spotId))
    }
    return (
        <form onSubmit={onSubmit}>
            <input

            ref={ref}
                type="text"

                placeholder="Preview Image URL"
            />
        <button type='submit'>Add image</button>
        </form>
    )
}

export default PhotoSection
