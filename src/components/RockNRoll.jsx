import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class RockNRoll extends React.Component{
    render() {
        return (
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
             
        )
    }

}