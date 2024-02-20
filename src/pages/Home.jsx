import Showcase from "../components/features/Showcase"
import About from "../components/About"


function Home() {
  return (
    <div>
        <Showcase 
          title={"Searching for a Junior Web Developer?"}
          content={"IM A JUNIOR FRONT-END & BACK-END DEVELOPER LOCATED IN MELBOURNE AUSTRALIA, I CREATE WEB APPLICATIONS WITH REACT AND EXPRESSJS"}
        />
        <About/>
    </div>
  )
}

export default Home