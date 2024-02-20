import * as styles from './Showcase.css'

import Button from '../common/Button'


function Showcase({title, content, button}) {
  return (
    <div className={styles.Showcase}>
      
      <div className={styles.ShowcaseContent}>
        <h1 className={styles.MainHeading}>{title}</h1>
        <h4 className={styles.SecondaryHeading}>{content}</h4>
      </div>

    {button}
    </div>
  )
}

export default Showcase