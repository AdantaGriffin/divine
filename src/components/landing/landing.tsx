import styles from './landing.module.scss';

function Landing(){
    return(
        <>
            <section className={styles.landing}>
                <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition:"100% 100%" }}    
                >
                    <source 
                    src="/images/divineLanding.mov">
                    </source>
                </video>

                <div className={styles.landingText}>
                    <div className={styles.textContainer}>

                        <p>Beauty | Confidence | Elevated</p>

                        <h2>A Salon Experience <em>Like</em> No Other</h2>

                        <ul>
                            <li>HAIR</li>
                            <li>-</li>
                            <li>NAIL</li>
                            <li>-</li>
                            <li>SCALP</li>
                            <li>-</li>
                            <li>BEAUTY</li>
                        </ul>

                        <button>Book An Appointment</button>

                    </div>
                </div>
            </section>

        </>
    )
};

export default Landing;