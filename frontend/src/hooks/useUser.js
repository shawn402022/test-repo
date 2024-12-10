import { useSelector } from "react-redux";

export default function useUser() {
    const user = useSelector((state) => state.session.user);
    return user;
}