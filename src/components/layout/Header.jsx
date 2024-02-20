import * as styles from './Header.css'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul className={styles.NavMenu}>
        <li className={styles.NavItem}>
          <HashLink 
          className={styles.NavLink}
          style={{ textDecoration: 'none', color: '#FFF' }} 
          smooth to="/#about"
          >
            about
          </HashLink>
          </li>
        <li className={styles.NavItem}>
          <Link 
            className={styles.NavLink}
            to="projects"
            style={{ textDecoration: 'none', color: '#FFF' }}>projects
          </Link>
        </li>
        <li className={styles.NavItem}>contact</li>
      </ul>
    </div>
  )
}

export default Header