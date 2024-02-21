import * as styles from './Header.css'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul className={styles.NavMenu}>
          <HashLink 
          className={styles.NavLink}
          style={{ textDecoration: 'none', color: '#FFF' }} 
          smooth to="/#about"
          >
        <li className={styles.NavItem}>
            about
          </li>
          </HashLink>
          <Link 
            className={styles.NavLink}
            to="projects"
            style={{ textDecoration: 'none', color: '#FFF' }}>
        <li className={styles.NavItem}>
              projects
        </li>
          </Link>
        <li className={styles.NavItem}>contact</li>
      </ul>
    </div>
  )
}

export default Header