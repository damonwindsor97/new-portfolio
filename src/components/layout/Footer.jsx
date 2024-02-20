import * as styles from './Footer.css'

import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
        <div className={styles.Footer}>
          <div className={styles.Content}>
            Damon Windsor. 2024
          </div>
        </div>
    </Container>
  )
}

export default Footer