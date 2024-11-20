
import './App.css'
import { createHashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
// import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PlatformDetails from './pages/PlatformDetails'
import PlatformDetails2 from './pages/PlatformDetails2'
import PlatformDetails3 from './pages/PlatformDetails3'
import { Outlet} from "react-router-dom";
// import All from './pages/ALL'



function App() {

  return (
    <>
<Routes>

  <Route path="/" element={< Home />} />
  
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={< Projects />} />
  <Route path="/contact" element={< Contact />} />
  <Route path='/platform-details' element={< PlatformDetails/>}/>
  <Route path='/platform-details2' element={< PlatformDetails2/>}/>
  <Route path='/platform-details3' element={< PlatformDetails3/>}/>
</Routes>
<Outlet/>
    </>
  )

}

export default App
