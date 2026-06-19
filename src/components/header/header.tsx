import styles from './header.module.scss';

function Header(){
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>
                    <p className={styles.header1}>Divine Strength</p>
                    <p className={styles.header2}>Spa & Salon</p>
                </h1>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>shop</li>
                    <li className={styles.headerItem}>appointments</li>
                    <li className={styles.headerItem}>home visit</li>
                    <li className={styles.headerItem}>contact</li>
                </ul>
                <button className={styles.headerButton}>Book Now</button>
            </header>
        </>
    )
};

export default Header;