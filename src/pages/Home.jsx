import Showcase from "../components/features/Showcase"
import About from "../components/About"

import { Link } from "react-router-dom"
import Button from "../components/common/Button"
import * as styles from '../components/common/Button.css'

function Home() {
  return (
    <div>
        <Showcase 
          title={"Searching for a Junior Web Developer?"}
          content={"IM A JUNIOR FRONT-END & BACK-END DEVELOPER LOCATED IN MELBOURNE AUSTRALIA, I CREATE WEB APPLICATIONS WITH REACT AND EXPRESSJS"}
          button={<Link className={styles.ButtonLink} to="mailto:damonwindsor@gmail.com?subject=Enter Subject"><Button content='Send Me an Email' /></Link>}
        />
        <About/>
    </div>
  )
}

export default Home