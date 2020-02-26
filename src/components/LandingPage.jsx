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
          </div>
        );
    }
} 

export default LandingPage;
