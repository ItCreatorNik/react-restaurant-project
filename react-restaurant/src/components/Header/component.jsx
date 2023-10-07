import styles from './styles.module.css'
export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <a href="" className={styles.navLink}>About us</a>
                    </li>
                    <li>
                        <a href="" className={styles.navLink}>Experience</a>
                    </li>
                    <li>
                        <a href="" className={styles.navLink}>Cases</a>
                    </li>
                    <li>
                        <a href="" className={styles.navLink}>Information</a>
                    </li>
                    <li>
                        <a href="" className={styles.navLink}>Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}