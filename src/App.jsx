import {Routes, Route} from 'react-router-dom'

import Layout from './components/layout/Layout'
// Page Imports
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="projects" element={<ProjectsPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
