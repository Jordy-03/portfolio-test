import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {getImageUrl} from '../../util.js'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>

            <div className={styles.menu}>
                <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu button/"></img>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#experience">experience</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}