import "./Styles/Landing.css";
import "animate.css";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    const images = document.querySelectorAll(".LandingContainer img");
    images.forEach((img) =>
      img.addEventListener("dragstart", (e) => e.preventDefault())
    );
  }, []);

  return (
    <>
      <div className="LandingContainer">
        <div className="StarContainer">
          <img
            src="/star1.png"
            className="animate__animated animate__slideInDown"
          />
        </div>
        <div className="StarContainerLeft">
          <img
            src="/star3.png"
            className="animate__animated animate__slideInLeft"
          />
        </div>
        <div className="StarContainerBottom">
          <img
            src="/star2.png"
            className="animate__animated animate__slideInUp"
          />
        </div>
        <div className="StarContainerBottomRight">
          <img
            src="/star4.png"
            className="animate__animated animate__slideInUp"
          />
        </div>

        <div className="StarContainerRight">
          <img
            src="/star5.png"
            className="animate__animated animate__slideInRight"
          />
        </div>

        <div className="TitleImageContainer">
          <img
            src="/landingTitle.png"
            className="animate__animated animate__zoomIn"
          />
        </div>

        <div className="navbarContainer">
          <h1 className="title">Star Hack Alliance</h1>
          <div className="navbar-item-container">
            <a href="./" className="no-underline">
              <p className="navbar-items">Home</p>
            </a>
            <a href="./partner" className="no-underline">
              <p className="navbar-items">Partner</p>
            </a>
            <a href="./events" className="no-underline">
              <p className="navbar-items">Events</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
