import { useDispatch } from "react-redux";
import SpotForm from "../SpotForm/SpotForm";
import { createSpotThunk } from "../../store/spots";
import { useNavigate } from "react-router-dom";

const initialData = {
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
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        console.log('Form data being submitted:', formData);
        try {
            const newSpot = await dispatch(createSpotThunk(formData));
            navigate(`/spots/${newSpot.id}`);
        } catch (error) {
            console.error('Failed to create spot:', error);
            // You might want to handle this error, perhaps by setting some state to display to the user
        }
    };

    return (
        <SpotForm data={initialData} onSubmit={onSubmit} />
    )
}
