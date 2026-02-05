
import './Navbar.module.css';
import styles from './toggleBtn.module.css';



const Navbar = ({toggleStyles, styles: toggleStylesClass}) => {
    const buttonText = toggleStylesClass === "light-mode" ? "Dark Mode" : "Light Mode";
    const styles = toggleStylesClass;
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