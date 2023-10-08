import { useContext } from 'react'
import { Button } from '../Button/component'
import styles from './styles.module.css'
import { ThemeContext } from '../../contexts/Theme'
import { ThemeControl } from '../ThemeControl/component'
export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const onSwitchTheme = (theme) => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    
    return (
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="" className={styles.navLink}>
                About us
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Experience
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Cases
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Information
              </a>
            </li>
            <li>
              <a href="" className={styles.navLink}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <ThemeControl theme={theme} onClick={onSwitchTheme} />
      </header>
    );
}