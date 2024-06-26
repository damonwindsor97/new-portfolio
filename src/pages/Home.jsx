import Showcase from "../components/features/Showcase"
import About from "../components/About"

import { Link } from "react-router-dom"
import * as styles from '../components/common/Button.css'

function Home() {
  return (
    <div>
        <Showcase 
          title={"Searching for a Junior Web Developer?"}
          content={"IM A JUNIOR FULLSTACK JAVASCRIPT DEVELOPER LOCATED IN MELBOURNE AUSTRALIA, I CREATE WEB APPLICATIONS WITH REACT AND EXPRESSJS"}
          button={<Link className={styles.ButtonLink} to="mailto:damonwindsor@gmail.com?subject=Enter Subject">Send Me an Email</Link>}
        />
        <About/>
    </div>
  )
}

export default Home