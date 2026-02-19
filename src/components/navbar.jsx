import { useContext } from 'react';
import ModeContext from '../context/ModeContext.jsx';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ModeContext);

    return (
        <div className={`navbar ${theme === "light" ? "light-mode" : "dark-mode"}`}>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutpage">About</Link></li>
            <li><Link to="/add-profile">Add Profile</Link></li>
            <li><Link to="/other-profiles">Other Profiles</Link></li>
            <li><Link to="/profile-details">Profile Details</Link></li>
            </ul>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"}
            </button>
        </div>
    );
}

export default Navbar;