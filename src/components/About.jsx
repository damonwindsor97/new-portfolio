import * as styles from './About.css'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Me from '../assets/cheif.jpg'

function About() {
  return (
    <div className={styles.AboutSection}>
        <Link id="about" />
        <Container>
            <div className={styles.InfoSection}>
                <div className={styles.Info}>
                    <div >
                        <p>I recently graduated in December of 2023 - primarily I use <span className={styles.ComplementaryText}>JavaScript</span> both in Front-End & Back-End development but am eager to learn more languages and frameworks. </p>
                    </div>
                    <div>
                        <p><strong>Front-End Development:</strong> My main Front-End framework is <span className={styles.ComplementaryText}>React</span> and currently my preferred styling system is <span className={styles.ComplementaryText}>Vanilla Extract</span>.</p>
                        <p><strong>Back-End Development:</strong> My main Back-End framework is <span className={styles.ComplementaryText}>ExpressJS</span></p>
                    </div>
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