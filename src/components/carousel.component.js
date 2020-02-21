import React,{Component} from "react";
import ReactDOM from 'react-dom';

import { Carousel } from "react-responsive-carousel";
import pic from "./../../images/Nandeeswari_Kuppusamy.jpg";
import pic1 from './../../images/cloud.jpg';
import pic2 from './../../images/sun.jpg';
import getans from './../../images/answer.gif';
import ingredish from './../../images/ingredishSearch.gif';
import game from './../../images/gamePlay.gif';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                <h1>A Brief Introduction</h1>
                <h4>Hi, I'm Nandhu</h4>
                <span>
                  Please browse around my website to view my portfolio
                </span>
              </div>
            </div>
            <div id="slide1">
              <div id="desc">
                <h1>GetAnswers</h1>
                <p>
                  A web app inspired by Stack Overflow, where professionals can
                  ask questions with tags and post answers in rich text format
                  and search questions based on title and tags.
                </p>
                <br />
                <div id="details">
                  <a href="https://get-ans.herokuapp.com/#/" target="_blank">
                    Live
                  </a>
                  <br />
                  <a
                    href="https://github.com/knandhu/GetAnswers"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <br />
              <img src={getans} />
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
              <img src={ingredish} />
            </div>
            <div id="slide3">
              <div id="desc">
                <h1>RockNRoll</h1>
                <p>
                  A 3D animation game which interests users with an endless
                  runner concept.
                </p>
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
              <img src={game} />
            </div>
          </Carousel>
        );
    }
}
