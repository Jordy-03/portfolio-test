import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from '../Modules/Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Jordy Ruiz</a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"}
                    alt="menu button/"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                </img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="./About">About</a>
                    </li>
                    <li>
                        <a href="./Experience">Experience</a>
                    </li>
                    <li>
                        <a href="./Projects">Projects</a>
                    </li>
                    <li>
                        <a href="./Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}