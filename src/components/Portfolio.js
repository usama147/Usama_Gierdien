import React, { Component } from 'react';
import './portfolio.css'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <button className='buton'>
        <a href="https://github.com/usama147?tab=repositories" target="_blank" className="but">Click here to check Out Some of My Work on Github.</a>
        </button>
        <hr/>
       <p>Sneak peek :</p>
        
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                  
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                        
                      </div>
                  </div>
                  <div className = "livedemo">
                       <section>
                        <a href= {item.link} target="blank"><button class="button live_Demo">Demo</button></a><a href= {item.repo} target="blank"><button class="button repo">Repo</button></a>
                       </section>
                        </div>
                        
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}