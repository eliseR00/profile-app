import styles from './toggleBtn.module.css';

const Navbar = ({toggleStyles, toggleText}) => {
    const buttonText = toggleText === "light-mode" ? "Dark Mode" : "Light Mode";
    return (
        <div className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><a href="#" >Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Profiles</a></li>
            </ul>
            <button id={styles['mode-toggle']} onClick={toggleStyles}>{buttonText}</button>
        </div>
    );
}
export default Navbar;