import React from 'react';
import styles from '../Modules/Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.emoji}>👋</span> Hola, I'm <u>Jordy</u>!
                </h1>
                <p className={styles.description}>
                    I am passionate in creating highly efficient
                    and user-friendly web applications.
                </p>
                <a className={styles.contactBtn} href="mailto:jor.rui03@gmail.com">Contact Me</a>
            </div>

            <div>
                <img className={styles.image} src="./assets/images/Rotation-Corrected.png" alt="GDG Officers" />
                <p className={styles.imageDescription}>
                    Google Developer Group Officers 2025
                </p>
            </div>




        </section>


    );
}