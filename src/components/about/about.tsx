import styles from './about.module.scss';

function About(){
    return(
        <>
            <section className={styles.about}>

                <div className={styles.aboutUs}>

                    <div className={styles.images}></div>

                    <div className={styles.aboutText}>
                        <h3>About Us</h3>
                        <h2>Where Artistry Meet Luxury</h2>
                        <p>At Divine Strength we believe beauty is personal. Our talented team us dedicated to elevating your natural beauty.</p>
                        <a>our story</a>
                    </div>

                </div>

                <div className={styles.aboutWork}>
                        <h3>Gallery</h3>
                        <h2>Our Work</h2>
                        <div className={styles.workListContainer}>
                            <ul className={styles.workList}>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                                <li className={styles.workImage}>image</li>
                            </ul>
                        </div>
                </div>

            </section>
        </>
    )
};

export default About;