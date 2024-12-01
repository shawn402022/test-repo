
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiSmokeBomb } from 'react-icons/gi';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <ul className='navBar'>
            <li className='smokeBomb'>
                <NavLink to="/"><GiSmokeBomb className="smoke"/></NavLink>
            </li>
            {isLoaded && (
                <li>
                    <ProfileButton user={sessionUser} />
                </li>
            )}
        </ul>
    );
}

export default Navigation;
