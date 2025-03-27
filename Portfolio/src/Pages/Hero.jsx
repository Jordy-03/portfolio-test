import React from 'react';
import styles from '../Modules/Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, my name is Jordy!</h1>
                <p className={styles.description}>
                    I am a CSSE graduate from the University of Washington
                    with a passion for creating efficient and user-friendly web
                    applications! Please reach out if you'd like to learn more about my work.
                </p>
                <a className={styles.contactBtn} href="mailto:jor.rui03@gmail.com">Contact Me</a>
            </div>
            <img className={styles.portrait} src={"./assets/images/portrait-circle.png"} alt={"3D illustration"} />
        </section>
    );
}

