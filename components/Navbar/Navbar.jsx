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
                        <Link to="/">Pagina Inicial</Link>    
                    </li>
                    <li>
                        <Link to="/">Hacks</Link>
                    </li>
                    <li>
                        <Link to="/">Contato</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default Navbar;