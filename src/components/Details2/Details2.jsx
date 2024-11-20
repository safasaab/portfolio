
import restaurant from "./../../assets/img/about-page-img.jpg";
import bubble from "./../../assets/img/bubble.svg";

const Details2 = () => {
  return (
    <>
      <div className="projectDetails">
        <div className="imagedetail">
          <a
            href="https://github.com/ionutcora-webdevelopment/react-restaurant"
            target="_blank"
          >
            <img src={restaurant} alt="" />
          </a>
        </div>

        <div className="textdetail">
          <h2>React Restaurant</h2>
          <p>
          Your tongue wants the taste, your brain wants the sugar, and we both have it.
          Stomach is the fuel tank if you don’t fill it up your body will not function properly
          </p>
          <div className="lang">
            <p> Basic Languages:HTML, Bootstrap, JavaScript</p>
          </div>
          <div className="btn-link">
            <a
              href="https://github.com/ionutcora-webdevelopment/react-restaurant"
              target="_blank"
              className="git"
            >
              Github Repo
            </a>

            <a
              href="https://github.com/ionutcora-webdevelopment/react-restaurant"
              target="_blank"
              className="pro"
            >
              {" "}
              <img src={bubble} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details2;
