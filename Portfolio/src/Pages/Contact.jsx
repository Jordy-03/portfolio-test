import React from 'react';
import styles from '../Modules/Contact.module.css'

export const Contact = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Contact Info</h1>
            <input type="text" className={styles.input} placeholder="Your Name" />
            <input type="email" className={styles.input} placeholder="Your Email" />


        </section>
    )
}