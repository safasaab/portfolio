import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import "./NavBarStyle.css";
import { useEffect, useState } from "react";
import moon from "./../../assets/img/moon.svg";
import sun from "./../../assets/img/sun.svg";
import darkLogo from "./../../assets/img/safa-dark-logo.png";

const NavBar = () => {
  const [showSide, setshowside] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "light"
    
  );


  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);




  return (
    <>
      <nav>
        {theme === "light" ? (
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        ) : (
          <div className="dark-logo">
            <img src={darkLogo} alt="" />
          </div>
        )}

        <ul className="list">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          {/* <li><Link to="/education">Education</Link></li> */}
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme === "light" ? "dark" : "light"
            );
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="darkMode"
        >
          {theme === "light" ? (
            <img src={moon} alt="" />
          ) : (
            <img src={sun} alt="" />
          )}
        </button>
        {showSide && (
          <ul className="side">
            <li className="close">
              {" "}
              <button
                onClick={() => {
                  setshowside(false);
                }}
              >
                        {theme === "light" ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#9c3a94c4"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
        ) : (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#fff"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        )}

              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        )}

        <button
          onClick={() => {
            setshowside(true);
          }}
          className="menu"
        >
                  {theme === "light" ? (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#9c3a94c4"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#fff"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}

        </button>
      </nav>
    </>
  );
};

export default NavBar
