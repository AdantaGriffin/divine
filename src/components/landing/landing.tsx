import styles from './landing.module.scss';

function Landing(){
    return(
        <>
            <section className={styles.landing}>
                <iframe 
                className={styles.video}
                height="100%"
                width="99.5%"
                src="https://www.youtube.com/embed/_GSc3uAm8rQ?autoplay=1&mute=1&loop=1&playlist=_GSc3uAm8rQ&controls=0&modestbranding=1&rel=0" 
                title="Fire Barber Shop Promo - ATLMDERON" 
                allow="accelerometer">

                </iframe>

                <div className={styles.landingText}>
                    <div className={styles.textContainer}>

                        <p>Beauty | Confidence | Elevated</p>

                        <h2>A Salon Experience Like No Other</h2>

                        <ul>
                            <li>Hair</li>
                            <li>-</li>
                            <li>Nail</li>
                            <li>-</li>
                            <li>Scalp</li>
                            <li>-</li>
                            <li>Beauty</li>
                        </ul>

                        <button>Book An Appointment</button>

                    </div>
                </div>
            </section>

        </>
    )
};

export default Landing;