import "./Project.css";
import platform from "./../../assets/img/platform.webp";
import bubble from "./../../assets/img/bubble.svg";
import restaurant from "./../../assets/img/about-page-img.jpg";
import travel from "./../../assets/img/travel.jpg";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="portfolio">
        <div className="text">
          <h1>My Latest Projects</h1>
          <p>
            I take pride in paying attention to the smallest details and making
            sure that my work is pixel perfect. Iam excited to bring my skills
            and experience to help businesses achieve their goals and create a
            strong online presence
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="cardImg">
              <img src={platform} alt="" />
            </div>
            <div className="content">
              <div className="contentText">
                <h3>Academia Educational Platform</h3>
                <p>HTML, CSS, JavaScript</p>
              </div>
              <button className="cardIcon">
                <Link to="/platform-details">
                  
                  <img src={bubble} alt="" />
                </Link>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img src={restaurant} alt="" />
            </div>
            <div className="content">
              <div className="contentText">
                <h3>Restaurant Website</h3>
                <p>HTML, Bootstrap, JavaScript</p>
              </div>
              <button className="cardIcon">
                <Link to="/platform-details2">
                  
                  <img src={bubble} alt="" />
                </Link>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src={travel} alt="" />
            </div>
            <div className="content">
              <div className="contentText">
                <h3>Travel Agency</h3>
                <p>HTML, Bootstrap, JavaScript</p>
              </div>
              <button className="cardIcon">
                <Link to="/platform-details3">
                  
                  <img src={bubble} alt="" />
                </Link>
              </button>
            </div>
          </div>
        </div>


    
      </div>
    </>
  );
};

export default Project;
