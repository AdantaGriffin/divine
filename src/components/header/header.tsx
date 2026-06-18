import styles from './header.module.scss';

function Header(){
    return(
        <>
            <header className={styles.header}>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>shop</li>
                    <li className={styles.headerItem}>appointments</li>
                    <li className={styles.headerItem}>home visit</li>
                    <li className={styles.headerItem}>contact</li>
                </ul>
                <h1 className={styles.headerTitle}>Divine Strength</h1>
                <button className={styles.headerButton}>book now</button>
            </header>
        </>
    )
};

export default Header;