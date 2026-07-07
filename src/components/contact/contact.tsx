import styles from './contact.module.scss'

function Contact(){
    return(
        <>
            <section className={styles.contact}>
                <h2>Divine Strength Salon & Spa</h2>
                <div className={styles.contactMethodPhone}>
                    <p>phone:</p><a href="tel:646-986-5640">646-986-5640</a>
                </div>
                <div className={styles.contactMethodEmail}>
                    <p>email:</p><a href="mailto:adantag@gmail.com">divine@gmail.com</a>
                </div>
            </section>
        </>
    )
};

export default Contact