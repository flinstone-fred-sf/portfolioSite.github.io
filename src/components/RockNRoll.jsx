import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class RockNRoll extends React.Component{
    render() {
        return (
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
        )
    }

}