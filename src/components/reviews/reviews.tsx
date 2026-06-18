import styles from './reviews.module.scss';

function Reviews(){
    return(
        <>
            <section className={styles.reviews}>

                <div className={styles.clientLove}>

                    <div className={styles.left}>
                        <h3>Gallery</h3>
                        <h2>Trusted By Our Clients</h2>
                    </div>

                    <div className={styles.right}>
                        <div>stars</div>
                        <p>review</p>
                        <p>name</p>
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