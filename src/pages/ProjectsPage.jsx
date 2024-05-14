import * as styles from './ProjectsPage.css'
import Showcase from '../components/features/Showcase'

import { Link } from 'react-router-dom'

import ThoughtzImage1 from '../assets/signup_preview.png'
import ThoughtzImage2 from '../assets/profile_preview.png'

import Notes1 from '../assets/notes1.png'
import Notes2 from '../assets/notes2.png'

import LinkOasis1 from '../assets/link-oasis-home.png'
import LinkOasis2 from '../assets/link-oasis-yt.png'

function ProjectsPage() {
  return (
    <div>
      <Showcase title="PROJECTS" content="Old, New, Small & Big"/>

      <div className={styles.ProjectsSection}>
        <div className={`${styles.ProjectBox}`}>
          <h2 className={styles.ProjectTitle}><Link to="https://thoughtz-repo-qfc4.onrender.com" style={{textDecoration: 'none'}}>thoughtz Social Media App</Link></h2>
          <p className={styles.ProjectTech}>FERN Stack - Firebase, Express, Reactjs & Node | Vanilla Extract CSS</p>
          <p className={styles.ProjectDescription}>'thoughtz' is my take on a Social Media Application - similar to the likes of Twitter or even Tumblrr (if you're that old haha) - allowing users to signup, edit their profile and create posts to their profiles (coming soon..).</p>
          <div className={styles.ImageSection}>
            <div className={styles.ImageDiv}>
              <img src={ThoughtzImage1} className={styles.ProjectImage} alt="signup"/>
            </div>

            <div className={styles.ImageDiv}>
              <img src={ThoughtzImage2} className={styles.ProjectImage} alt="profile"/>
            </div>
          </div>
        </div>
        <div className={`${styles.ProjectBox}`}>
          <h2 className={styles.ProjectTitle}><Link to="https://link-oasis.onrender.com/" style={{textDecoration: 'none'}}>Link Oasis</Link></h2>
          <p className={styles.ProjectTech}>Reactjs, Shadcn, Tailwind CSS</p>
          <p className={styles.ProjectDescription}>Link Oasis is a URL utility application where users can alter and convert files related to URL's - such as YouTube to Mp3 & shortening URL's.</p>
          <div className={styles.ImageSection}>
            <div className={styles.ImageDiv}>
              <img src={LinkOasis1} className={styles.ProjectImage} alt="signup"/>
            </div>

            <div className={styles.ImageDiv}>
              <img src={LinkOasis2} className={styles.ProjectImage} alt="profile"/>
            </div>
          </div>
        </div>

        <div className={`${styles.ProjectBox}`}>
          <h2 className={styles.ProjectTitle}><Link to="https://notes-app-lira.onrender.com" style={{textDecoration: 'none'}}>Notes app</Link></h2>
          <p className={styles.ProjectTech}>Reactjs & Vanilla CSS</p>
          <p className={styles.ProjectDescription}>A basic Notes application that saves your notes to Local Storage - Create, Search for, Edit & Delete notes</p>
          <div className={styles.ImageSection}>
            <div className={styles.ImageDiv}>
              <img src={Notes1} className={styles.ProjectImage}/>
            </div>

            <div className={styles.ImageDiv}>
              <img src={Notes2} className={styles.ProjectImage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage