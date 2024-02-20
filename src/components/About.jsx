import * as styles from './About.css'

import { Container } from 'react-bootstrap'

import Me from '../assets/cheif.jpg'

function About() {
  return (
    <div className={styles.AboutSection}>
        <Container>
            <div className={styles.InfoSection}>
                <div>
                    <p>I recently graduated in December of 2023 - primarily I use JavaScript both in Front-End & Back-End development but am eager to learn more languages and frameworks. </p>
                </div>
                <div>
                    <p>Front-End Development: My main Front-End framework is React and currently my preferred styling system is Vanilla Extract.</p>
                    <p>Back-End Development: My main Back-End framework is ExpressJS</p>
                </div>
            </div>

            <div className={styles.PhotoSection}>
                <img className={styles.Photo} src={Me}/>
            </div>
        </Container>
    </div>
  )
}

export default About