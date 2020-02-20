import React from 'react';
import pic from './images/Nandeeswari_Kuppusamy.jpg';


class LandingPage extends React.Component{

    render() {
        return (
          <div id="main">
            <div id='intro'>
              <h1>Hi I'm Nandhu</h1>
              <h3>Here is my Portfolio!</h3>
            </div>
            <span className="image">
              <img src={pic} alt="" width='450' height='450'/>
            </span>
          </div>
        );
    }
} 

export default LandingPage;
