import React, { Component } from "react";
import ReactDOM from "react-dom";
import GetAns from "./GetAnswers";

import { Carousel } from "react-responsive-carousel";
import pic from "./../../images/Nandeeswari_Kuppusamy.jpg";
import getans from "./../../images/answer.gif";
import ingredish from "./../../images/ingredishSearch.gif";
import game from "./../../images/gamePlay.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import RockNRoll from "./RockNRoll";

export default class CarouselComponent extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        useKeyboardArrows
        showStatus={false}
        transitionTime={800}
        centerMode={true}
        centerSlidePercentage={100}
      >
        <div id="home">
          <span className="image">
            <img src={pic} alt="" width="150" height="150" />
          </span>
          <div id="intro">
            <h1>Nandeeswari Kuppusamy</h1>
            <span>
              I am a passionate software developer, I enjoy learning new
              technologies and skills to build seamless bug-free web
              applications. I have experience building dynamic web applications
              in JavaScript, Ruby on Rails, React/Redux and HTML/CSS.
            </span>
          </div>
        </div>
        <div>
          <GetAns />
        </div>
        <div id="slide2">
          <div id="desc">
            <h1>Ingredish</h1>
            <p>
              A web app to search food recipes based on the user entered
              ingredients, implemented search feature with exact match of
              ingredients provided by the user.
            </p>
            <br />
            <div id="details">
              <a href="https://ingredish.herokuapp.com/#/" target="_blank">
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
          <img src={ingredish}/>
        </div>
        <div id="slide3">
          <div id="desc">
            <h1>RockNRoll</h1>
            <p>
              A 3D animation game which interests users with an endless runner
              concept.
            </p>
            <br />
            <div id="details">
              <a href="https://knandhu.github.io/dist/" target="_blank">
                Live
              </a>
              <br />
              <a href="https://github.com/knandhu/Rock-N-Roll" target="_blank">
                GitHub
              </a>
            </div>
          </div>
          <img src={game} />
        </div>
      </Carousel>
    );
  }
}
