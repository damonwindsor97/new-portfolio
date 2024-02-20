import * as styles from './Button.css'

function Button({content}) {
  return (
    <div>
        <button className={styles.Button}>
          <div className={styles.ButtonContent}>
            {content}
          </div>
        </button>
    </div>
  )
}

export default Button