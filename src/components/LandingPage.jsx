import React from 'react';
import pic from './../../images/Nandeeswari_Kuppusamy.jpg';


class LandingPage extends React.Component{

    render() {
        return (
          <div id="main">
            <div id='intro'>
              <h1>Hi, I'm Nandhu</h1>
              <h4>Here is my Portfolio!</h4>
            </div>
            <span className="image">
              <img src={pic} alt="" width='350' height='350'/>
            </span>
          </div>
        );
    }
} 

export default LandingPage;
