import { Link } from 'react-router-dom';
import './Header-Logo.css';

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img id='faded'
                    src="/src/assets/faded-nb.png"
                    alt="Hotspot 2.0 Logo"
                    className="logo"


                />
            </Link>
        </header>
    )
}
export default Header;
