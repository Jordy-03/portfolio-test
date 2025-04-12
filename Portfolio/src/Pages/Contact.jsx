import React from 'react';
import styles from '../Modules/Contact.module.css'

export const Contact = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Contact Info</h1>
            <div className={styles.fields}>
                <div className={styles.informationContainer}>
                    <p className={styles.information}>
                        Name: Jordy Ruiz
                    </p>
                    <p className={styles.information}>
                        Email: jor.rui03@gmail.com
                    </p>
                    <p className={styles.information}>
                        Phone: (425) 524 - 1981
                    </p>
                    <p className={styles.information}>
                        Location: Renton, WA
                    </p>
                </div>


                <div className={styles.container}>
                    <label className={styles.label}>Your Name:</label>
                    <input type="text" className={styles.input} placeholder="Your Name" required></input>
                    <label className={styles.label}>Your Email:</label>

                    <input type="email" className={styles.input} placeholder="Your Email" required></input>
                    <label className={styles.label}>Description:</label>

                    <textarea className={styles.textarea} placeholder="Your Message"></textarea>
                </div>

            </div>


        </section>
    )
}