import * as styles from './Button.css'

function Button({content, linkTo}) {
  return (
    <div>
        <button className={styles.Button} href={linkTo}>
          <div className={styles.ButtonContent}>
            {content}
          </div>
        </button>
    </div>
  )
}

export default Button