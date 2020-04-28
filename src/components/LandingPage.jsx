import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";
import GetAns from './GetAnswers';
import CarouselComponent from "./carousel.component";
import pic from './../../images/Nandeeswari_Kuppusamy.jpg';


class LandingPage extends React.Component{

    render() {
        return (
          <div id="main">
            {/* <Switch>
              <Route path="#getans/"
                component={GetAns}/>
            </Switch> */}
            <CarouselComponent />
            <div id="footer">
              {/* <div>Skills: Node.js, React/Redux, Ruby/Rails, Javascript, jQuery, PostgreSQL, HTML, CSS </div> */}
              {/* <p>SKILLS: </p> */}
              <p>Javascript</p>
              <p>Ruby/Rails</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>jquery</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>Redux</p>
          </div> 
          </div>
        );
    }
} 

export default LandingPage;
