import React from 'react';


export default class GetAns extends React.Component{

    render() {
        return (
             <div id="slide1">
   <div id="desc">
     <h1>GetAnswers</h1>
     <p>
       A web app inspired by Stack Overflow, where professionals can ask
       questions with tags and post answers in rich text format and search
       questions based on title and tags.
     </p>
     <br />
     <div id="details">
       <a href="https://get-ans.herokuapp.com/#/" target="_blank">
         Live
       </a>
       <br />
       <a href="https://github.com/knandhu/GetAnswers" target="_blank">
         GitHub
       </a>
     </div>
   </div>
   <br />
   <img src={getans} />
 </div>
        )
    }
}
