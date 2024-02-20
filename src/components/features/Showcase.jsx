import * as styles from './Showcase.css'

import Button from '../common/Button'


function Showcase({title, content}) {
  return (
    <div className={styles.Showcase}>

            <div className={styles.ShowcaseContent}>
                <h1 className={styles.MainHeading}>{title}</h1>
                <h4 className={styles.SecondaryHeading}>{content}</h4>
            </div>

    <Button content='Send Me an Email' className={styles.EmailButton}/>
    </div>
  )
}

export default Showcase