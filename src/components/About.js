import React, { Component } from 'react';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">


            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <hr/>
               <h2>My hobbies</h2>
               <p>
                  <i class="fa fa-code"></i> Experimenting with code <b>|</b> <i class="fa fa-pencil"></i> Drawing <b>|</b>  <i class="fa fa-music"></i> Listening to music <b>|</b>  <i class="fa fa-gamepad"></i> Gaming  
               </p>
               <div className="row">

                  <div className="columns contact-details">
                  <hr/>
                  <h2>More..</h2>
                  <p className="address">
       						
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <ul>
                       <li>DOB 15 May 2002</li>
                    </ul>
                    
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}