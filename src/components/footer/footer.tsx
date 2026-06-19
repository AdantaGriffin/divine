import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <footer className={styles.footer}>

                <div className={styles.left}>
                    <h2>Divine Strength</h2>
                    <p>Beauty | Confidence | Elevated</p>
                    <ul className={styles.leftFooterLinkList}>
                        <li>
                            <img src="/icons/instagram.png" alt="instagram"/>
                        </li>
                        <li>
                            <img src="/icons/facebook.png" alt="facebook"/>
                        </li>
                        <li>
                            <img src="/icons/youtube.png" alt="youtube"/>
                        </li>
                        <li>
                            <img src="/icons/pinterest.png" alt="pinterest"/>
                        </li>
                        <li>
                            <img src="/icons/tiktok.png" alt="tiktok"/>
                        </li>
                    </ul>
                </div>

                <div className={styles.right}>
                    <ul className={styles.footerList}>

                        <li>
                            <p>Quick Links</p>
                            <ul className={styles.linkList}>
                                <li>home</li>
                                <li>about</li>
                                <li>services</li>
                                <li>gallery</li>
                                <li>stylist</li>
                            </ul>
                        </li>

                        <li>
                            <p>Services</p>
                            <ul className={styles.linkList}>
                                <li>groom</li>
                                <li>hair</li>
                                <li>color</li>
                                <li>nails</li>
                                <li>wellness</li>
                            </ul>
                        </li>
                        <li>
                            <p>Contact</p>
                            <ul className={styles.linkList}>
                                <li>address</li>
                                <li>phone</li>
                                <li>email</li>
                            </ul>
                        </li>
                        <li>
                            <p>Hours</p>
                            <ul className={styles.linkList}>
                                <li>mon-fri: 10am - 8pm</li>
                                <li>sat: 10am - 7pm</li>
                                <li>sun: 10am - 7pm</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;