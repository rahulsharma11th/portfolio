import React, { Component } from 'react';
export default class SkillsIcons extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Technologies.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item skill-icon">
                  <div className="item-wrap-skills">
                   
                      <img src="https://www.surrealcms.com/uploads/nodejs-logo.png" className="item-img-icon"/>

                     {/*Adding project source code */}
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