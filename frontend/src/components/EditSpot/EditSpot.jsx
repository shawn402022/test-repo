import { useDispatch, useSelector } from "react-redux";
import SpotForm from "../SpotForm/SpotForm";
import { useNavigate, useParams } from "react-router-dom";
import { updateSpotThunk } from "../../store/spots";

export default function EditSpot() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { spotId } = useParams();
    // const {allSpots} = useSelector();
    const spots = useSelector((state) => state.spots);
    console.log({spots, spotId});

    if(!spots?.allSpots?.[spotId]) {
        return null;
    }

    const spotData = spots.allSpots[spotId];
    const data = {
        ...spotData,
        previewImage: spotData?.previewImage?.[0]
    }


    const onSubmit = async (formData) => {
        try {
            const newSpot = await dispatch(updateSpotThunk(spotId, formData));
            // console.log(newSpot);
            navigate(`/spots/${newSpot.id}`);
        } catch (error) {
            console.log(error);
            // setErrors({ submit: error.message });
        }
    };

    return (
        <SpotForm action='Edit' data={data} onSubmit={onSubmit} />
    )
}