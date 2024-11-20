import "./Details.css";
import platform from "./../../assets/img/platform.webp";
import bubble from "./../../assets/img/bubble.svg";

const Details = () => {
  return (
    <>
      <div className="projectDetails">
        <div className="imagedetail">
         <a href="https://educational-website-reactjs.netlify.app/" target="_blank"><img src={platform} alt="" /></a> 
        </div>

        <div className="textdetail">
          <h2>Academia Educational Platform</h2>
          <p>
            Our platform is a nonprofit educational organization offering a
            simple, powerful strategy that builds people’s skills to ask better
            questions, participate in decisions that affect them, advocate for
            themselves, and partner with service-providers. innovative methods
            are delivered through educational institutions and organizations.
          </p>
          <div className="lang">
          <p> Basic Languages: HTML, CSS3, javaScript</p></div>
          <div className="btn-link">
          <a href="https://github.com/Rasif-Taghizada/Educational-Website-ReactJs" target="_blank" className="git">Github Repo</a>
         
         <a href="https://educational-website-reactjs.netlify.app/" target="_blank" className="pro"> <img src={bubble} alt="" /> </a>
          </div>
          </div>
      </div>
    </>
  );
};

export default Details;
