import React, { Component } from "react";
import ReactDOM from "react-dom";
import GetAns from "./GetAnswers";

import { Carousel } from "react-responsive-carousel";
import pic from "./../../images/Nandeeswari_Kuppusamy.jpg";
import getans from "./../../images/answer.gif";
// import ingredish from "./../../images/ingredishSearch.gif";
import ingredish from "./../../images/ingSplash.png";
// import game from "./../../images/gamePlay.gif";
import game from "./../../images/GameSplash.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import RockNRoll from "./RockNRoll";

export default class CarouselComponent extends Component {

  onChange() {
    
  }
  render() {
    return (
      <Carousel
        showThumbs={false}
        useKeyboardArrows
        showStatus={false}
        transitionTime={400}
        verticalSwipe={"standard"}
        centerSlidePercentage={100}
      >
        <div id="home">
          <span className="image">
            <img src={pic} alt="Avatar" />
            {/* <img src={pic} style={ "width:2 em;height:3 em;" }/> */}
          </span>
          <div id="intro">
            <h1>Nandeeswari Kuppusamy</h1>
          </div>
          <div>
            <p className="aboutme">
              I am a passionate QA engineer turned software developer, I enjoy learning new
              technologies and skills to build seamless bug-free web
              applications.
            </p>
          </div>
          {/* <div id="footer">
            <div>Skills: Node.js, React/Redux, Ruby/Rails, Javascript, jQuery, PostgreSQL, HTML, CSS </div>
          </div> */}
        </div>
        <div>
          <GetAns />
          {/* <div><i className="fab fa-react" width="95" height="95" />
            <i className="fab fa-node"></i>
            <i className="fab fa-js"></i>
              <i className="fab fa-html5"></i>
          </div> */}
        </div>
        <div id="slide2">
          <div id="desc">
            {/* <h1>Ingredish</h1>
            <p>
              A web app to search food recipes based on the user entered
              ingredients, implemented search feature with exact match of
              ingredients provided by the user.
            </p>
            <br />
           
          </div> */}

            <div className="example">
              <img src={ingredish} />

              <div className="content">
                <div className="text">
                  <h4>INGREDISH</h4>
                  <p>A WEB APPLICATION TO SEARCH FOOD RECIPES</p>
                  <br />
                  <div id="details">
                    <a
                      href="https://ingredish.herokuapp.com/#/"
                      target="_blank"
                    >
                      Live
                    </a>
                    <br />
                    <a
                      href="https://github.com/BenjaminHuh/ingredish"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="slide3">
          <div id="desc">
            <div className="example">
              <img src={game} />

              <div className="content">
                <div className="text">
                  <h4>ROCK-N-ROLL</h4>
                  <p>A 3D ANIMATION GAME</p>
                  <br />
                  <div id="details">
                    <a href="https://knandhu.github.io/dist/" target="_blank">
                      Live
                    </a>
                    <br />
                    <a
                      href="https://github.com/knandhu/Rock-N-Roll"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
