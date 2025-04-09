import React from 'react';
import styles from '../Modules/Contact.module.css'

export const Contact = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Contact Info</h1>
            <p>
                Name: Jordy Ruiz<br/>
                Email: jor.rui03@gmail.com
                Phone: (425) 524 - 1981
                Location: Renton, WA
            </p>
            <input type="text" className={styles.input} placeholder="Your Name" required></input>
            <input type="email" className={styles.input} placeholder="Your Email" required></input>
            <textarea className={styles.textarea} placeholder="Your Message"></textarea>
        </section>
    )
}