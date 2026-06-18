import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <footer className={styles.footer}>

                <div className={styles.left}>
                    <h2>Divine Strength</h2>
                    <p>Beauty | Confidence | Elevated</p>
                    <ul className={styles.leftFooterLinkList}>
                        <li>IG</li>
                        <li>FB</li>
                        <li>YT</li>
                        <li>Pin</li>
                        <li>TK</li>
                    </ul>
                </div>

                <div className={styles.right}>
                    <ul className={styles.footerList}>

                        <li>
                            <p>Quick Links</p>
                            <ul>
                                <li>home</li>
                                <li>about</li>
                                <li>services</li>
                                <li>gallery</li>
                                <li>stylist</li>
                            </ul>
                        </li>

                        <li>
                            <p>Services</p>
                            <ul>
                                <li>groom</li>
                                <li>hair</li>
                                <li>color</li>
                                <li>nails</li>
                                <li>wellness</li>
                            </ul>
                        </li>
                        <li>
                            <p>Contact</p>
                            <ul>
                                <li>address</li>
                                <li>phone</li>
                                <li>email</li>
                            </ul>
                        </li>
                        <li>
                            <p>Hours</p>
                            <ul>
                                <li>mon-fri</li>
                                <li>sat</li>
                                <li>sun</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;