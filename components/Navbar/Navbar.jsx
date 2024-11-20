import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="../../assets/Logo.png" alt="Logo" />
            </div>
                <ul className={styles.navbarLinks}>
                    <li>
                        <Link to="/">Hacks</Link>
                    </li>
                    <li>
                        <Link to="/">Contato</Link>
                    </li>
                    <li>
                        <button><Link to="/"><i className="fa-solid fa-plus"></i> MY HACK</Link></button>    
                    </li>
                </ul>

        </nav>
    )
}

export default Navbar;