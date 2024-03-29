import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col" />
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map((item) => {
                      return (
                        <li>
                          <blockquote>
                            <p>{item.description1}</p>
                            <p>{item.description2}</p>

                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
