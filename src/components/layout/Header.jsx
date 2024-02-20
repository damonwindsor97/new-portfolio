import * as styles from './Header.css'


const Header = () => {
  return (
    <div className={styles.Header}>
      <ul className={styles.NavMenu}>
        <li className={styles.NavItem}>about</li>
        <li className={styles.NavItem}>projects</li>
        <li className={styles.NavItem}>contact</li>
      </ul>
    </div>
  )
}

export default Header