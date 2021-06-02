import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              <em>Feel free to contact me for any work or suggestions below</em>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h3><i class="fa fa-envelope" aria-hidden="true"></i> :
                <a href="mailTo:rahulsharma111th@gmail.com">rahulsharma111th.gmail.com</a>   
                </h3>
              </div>
            </aside>
          </div>

  
        </section>
        );
  }
}