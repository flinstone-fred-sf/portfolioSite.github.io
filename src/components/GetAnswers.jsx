import React from 'react';
// import getans from "./../../images/answer.gif";
import getans from "./../../images/splash.png";


export default class GetAns extends React.Component{

  // constructor() {
  //   this.state.visible = false;
  //   this.getAnsHover = this.getAnsHover.bind(this);
  // }

  // getAnsHover() {
  //   console.log("here");
  //   this.setState({
  //     visible: true
  //   })
  // }
    render() {
        return (
          <div id="slide1">
            <div id="desc">
              {/* <p>
                A web app inspired by Stack Overflow, where professionals can
                ask questions with tags and post answers in rich text format and
                search questions based on title and tags.
              </p> */}
              {/* <p>Stack Overflow Clone</p>   */}
              <br />
            </div>
            {/* <br /> */}
            <div className="example">
              <img src={getans} />

              <div className="content">
                <div className="text">
                  <h4>GETANSWERS</h4>
                  <p>A CLONE OF STACK OVERFLOW</p>
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
              </div>
            </div>
   
          </div>
        );
    }
}
