import './AboutMe.css'
import htmlLogo from './../../assets/img/html.jpg'
import cssLogo from './../../assets/img/css.png'
import jsLogo from './../../assets/img/js.webp'
import reactLogo from './../../assets/img/react.webp'
import bsLogo from './../../assets/img/bs.png'
import figmaLogo from './../../assets/img/figma.png'
import gitLogo from './../../assets/img/github.png'
const AboutMe = () => {
  return (
    <>
    <div className="about">
        <div className="container">
        <h1>About Me</h1>
        <h2>Safa Al-Saab</h2>
        <p>Graduate of Damascus University, Department of Communications and Electronics Engineering and iam a junior front-end developer</p>
        </div>
   <div className="slider">
    <div className="slideTrack">
    <div className="slide"><img src={htmlLogo} alt="" width='100px'/></div>
      <div className="slide"> <img src={cssLogo} alt="" width='100px' /></div>
      <div className="slide"><img src={jsLogo} alt="" width='100px' /></div>
      <div className="slide"> <img src={reactLogo} alt=""  width='100px'/></div>
      <div className="slide"><img src={bsLogo} alt=""   width='100px'/></div>
      <div className="slide"> <img src={figmaLogo} alt=""  width='100px'/></div>
      <div className="slide"><img src={gitLogo} alt=""   width='100px'/></div>


    <div className="slide"><img src={htmlLogo} alt="" width='100px'/></div>
      <div className="slide"> <img src={cssLogo} alt="" width='100px'/></div>
      <div className="slide"><img src={jsLogo} alt="" width='100px' /></div>
      <div className="slide"> <img src={reactLogo} alt="" width='100px' /></div>
      <div className="slide"><img src={bsLogo} alt="" width='100px'/></div>
      <div className="slide"> <img src={figmaLogo} alt=""  width='100px' /></div>
      <div className="slide"><img src={gitLogo} alt=""  width='100px' /></div>
      
    </div>
   
   
    
   
    
   
    
   </div>
    </div>
      
    </>
  )
}

export default AboutMe
