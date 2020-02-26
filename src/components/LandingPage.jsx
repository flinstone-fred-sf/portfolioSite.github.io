import React from 'react';
import CarouselComponent from "./carousel.component";
import pic from './../../images/Nandeeswari_Kuppusamy.jpg';


class LandingPage extends React.Component{

    render() {
        return (
          <div id="main">
            <div class="dropdown">
              <button class="dropbtn">Projects</button>
              <div class="dropdown-content">
                <a href="#">GetAnswers</a>
                <a href="#">Ingredish</a>
                <a href="#">RockNRoll</a>
              </div>
            </div>
            <CarouselComponent />
          </div>
        );
    }
} 

export default LandingPage;
