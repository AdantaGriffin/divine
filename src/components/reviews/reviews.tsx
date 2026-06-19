import styles from './reviews.module.scss';

function Reviews(){
    return(
        <>
            <section className={styles.reviews}>

                <div className={styles.clientLove}>

                    <div className={styles.left}>
                        <h2>Trusted By Our Clients</h2>
                    </div>

                    <div className={styles.right}>
                        <div>⭐️⭐️⭐️⭐️⭐️ 5/5</div>
                        <p>Ariel was great. Got a line up with a shave. He was prepared with the hot towel and face massage. Great experience, WILL be back!</p>
                        <p>-AdantaG</p>
                    </div>
                </div>

                <div className={styles.ready}>

                    <div className={styles.left}>
                        <h2>Ready For Your Transformation?</h2>
                    </div>

                    <div className={styles.right}>
                        <button>Book Appointment</button>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Reviews;