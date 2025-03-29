import React from 'react';
import styles from '../Modules/Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.emoji}>👋</span> Hola, me llamo <u>Jordy</u>!
                </h1>
                <p className={styles.description}>
                    I am someone with a passion for creating efficient 
                    and user-friendly web applications.
                </p>
                <a className={styles.contactBtn} href="mailto:jor.rui03@gmail.com">Contact Me</a>
            </div>
            <img className={styles.portrait} src={"./assets/images/portrait-circle.png"} alt={"3D illustration"} />
        </section>
    );
}