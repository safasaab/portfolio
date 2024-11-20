import travel from "./../../assets/img/travel.jpg";
import bubble from "./../../assets/img/bubble.svg";

const Details3 = () => {
  return (
    <>
            <div className="projectDetails">
        <div className="imagedetail">
          <a
            href="https://github.com/Syhwh/React_TravelAgency?tab=readme-ov-file"
            target="_blank"
          >
            <img src={travel} alt="" />
          </a>
        </div>

        <div className="textdetail">
          <h2>Demo Travel Agency</h2>
          <p>
          Your tongue wants the taste, your brain wants the sugar, and we both have it.
          Stomach is the fuel tank if you don’t fill it up your body will not function properly
          </p>
          <div className="lang">
            <p> Basic Languages:HTML, Bootstrap, JavaScript</p>
          </div>
          <div className="btn-link">
            <a
              href="https://github.com/Syhwh/React_TravelAgency?tab=readme-ov-file"
              target="_blank"
              className="git"
            >
              Github Repo
            </a>

            <a
              href="https://github.com/Syhwh/React_TravelAgency?tab=readme-ov-file"
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
  )
}

export default Details3
