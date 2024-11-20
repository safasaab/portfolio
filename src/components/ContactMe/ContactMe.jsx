import "./ContactMe.css";
import call from "./../../assets/img/call.svg";
import mail from "./../../assets/img/mail.svg";
import location from "./../../assets/img/location.svg";

const ContactMe = () => {
  return (
    <>
      <div className="contact-container">
        <div className="container-top">
          <h1>Contact Me</h1>
          <p>
            I am available for <span>freelance work</span>
          </p>
        </div>
        <div className="content">
          <div className="container-left">
            <div className="socialCard">
              <div className="icon">
                <img src={call} alt="" />
              </div>
              <div className="text">
                <p>Call me</p>
                <h4>+963954952876</h4>
              </div>
            </div>
            <div className="socialCard">
              <div className="icon">
                <img src={mail} alt="" />
              </div>
              <div className="text">
                <p>Email me</p>
                <h4>safa.alsaap@gmail.com</h4>
              </div>
            </div>
            <div className="socialCard">
              <div className="icon">
                <img src={location} alt="" />
              </div>
              <div className="text">
                <p>Address</p>
                <h4>Damascus,Syria</h4>
              </div>
            </div>
          </div>
          <div className="container-right">
          <input type="text" className="name" placeholder="Full Name" />
          <input type="email" className="email" placeholder="Your Email"></input>
          <input type="tel" className="tel" placeholder="Phone Number"></input>
          <textarea placeholder="Message"></textarea>
          <input type="submit" className="send" value="Send Message"></input>
          </div>
        </div>
        <footer>
      <div className="footer-container">
<p className="rights"> &copy; 2024. All Rights Reserved</p>
<div className="social">
  <a href="https://www.facebook.com/Foufa212?sfnsn=mo&mibextid=RUbZ1f" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
  <a href="https://t.me/SafaSaab1" target="_blank"><i className="fa-brands fa-telegram"></i></a>
  <a href="https://www.instagram.com/safa.alsaab/profilecard/?igsh=MTd2N2xvMnV0OGRmeg==" target="_blank"><i className="fa-brands fa-instagram"></i></a>
</div>
</div>
      </footer>
      </div>

    </>
  );
};

export default ContactMe;
