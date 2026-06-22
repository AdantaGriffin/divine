import styles from './services.module.scss';

function Services(){
    return(
        <>
            <section className={styles.services}>
                <h3>Our Services</h3>
                <h2>Tailored To You</h2>
                <ul className={styles.servicesList}>
                    <li className={styles.service}>
                        <img src="/images/cutsNDesigns.webp" alt="Hair Cuts & Design's Image" className={styles.serviceImage}/>
                        <div className={styles.serviceText}>
                            <img src="/icons/scissors.png" alt="hair cut and designs icon"/>
                            <h3>Hair Cuts & Design's</h3>
                            <p>Precision cuts and effortless styling</p>
                            <a>learn more</a>
                        </div>
                    </li>
                    <li className={styles.service}>
                        <img src="/images/stylistNColor.jpg" alt="Stylist & Color Image" className={styles.serviceImage}/>
                        <div className={styles.serviceText}>
                            <img src="/icons/pen.png" alt="stylist and color icon"/>
                            <h3>Stylist & Color</h3>
                            <p>Smooth shiny hair & dimensional colors that enhance you</p>
                            <a>learn more</a>
                        </div>
                    </li>
                    <li className={styles.service}>
                        <img src="/images/manicure.jpg" alt="Manicure & Pedicure Image" className={styles.serviceImage}/>
                        <div className={styles.serviceText}>
                            <img src="/icons/nail-artist.png" alt="manicure icon"/>
                            <h3>Manicure & Pedicure</h3>
                            <p>Beautiful nail impeccable care</p>
                            <a>learn more</a>
                        </div>
                    </li>
                    <li className={styles.service}>
                        <img src="/images/scalpWellness.jpg" alt="Scalp & Hair Wellness Image" className={styles.serviceImage}/>
                        <div className={styles.serviceText}>
                            <img src="/icons/hair-treatment.png" alt="scalp and hair wellness icon"/>
                            <h3>Scalp & Hair Wellness</h3>
                            <p>Scalp care for strong and healthy hair</p>
                            <a>learn more</a>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
};

export default Services;