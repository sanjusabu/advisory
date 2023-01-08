import React from "react";
import { Button } from "antd";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "About Me",
    content:
      "Manish Sharma is an 21 yr old entrepreneur. In an attempt to provide a mass form of mentorship to give information and ways to all those that are interested - Giving all the ability to consider a step-by-step guide to building career based on past experience.",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  {/* <Button type="primary" size="large">
                    Learn More
                  </Button> */}
                  {/* <Button size="large">
                    <i className="fas fa-desktop"></i> Watch a Demo
                  </Button> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
