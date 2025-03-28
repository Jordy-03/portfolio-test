import React from 'react';
import styles from '../Modules/About.module.css'

export const About = () => {
    return (
        <section className={styles.container}>
            <div className= {styles.content}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.description}>
                    HELLO WORLD
                </p>
            </div>
        </section>
    )
}