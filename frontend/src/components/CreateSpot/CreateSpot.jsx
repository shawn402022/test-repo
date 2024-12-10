import { useDispatch } from "react-redux";
import SpotForm from "../SpotForm/SpotForm";
import { createSpotThunk } from "../../store/spots";

const data = {
    country: '',
    address: '',
    city: '',
    state: '',
    description: '',
    name: '',
    price: '',
    previewImage: '',
    images: ['', '', '', ''],
    latitude: "",
    longitude: ""
};

export default function CreateSpot() {
    const dispatch = useDispatch();

    const onSubmit = async (formData) => {
        try {
            const newSpot = await dispatch(createSpotThunk(formData));
            navigate(`/spots/${newSpot.id}`);
        } catch (error) {
            console.log(error);
            // setErrors({ submit: error.message });
        }
    };

    return (
        <SpotForm data={data} onSubmit={onSubmit} />
    )
}