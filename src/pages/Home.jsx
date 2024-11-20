import Header from "./../components/Header/Header"
import NavBar from "./../components/NavBar/NavBar"
import AboutMe from "../components/AboutMe/AboutMe"
import ContactMe from "../components/ContactMe/ContactMe"
import Project from "../components/Project/Project"


const Home = () => {
  return (
    <>
     <NavBar></NavBar>
     <Header></Header>
      <AboutMe></AboutMe>
      <Project></Project>
      <ContactMe></ContactMe>
    </>
  )
}

export default Home
