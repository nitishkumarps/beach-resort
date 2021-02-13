import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

/**
 * @author
 * @class Services
 **/

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eum.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eum.",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eum.",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

Services.propTypes = {};
export default Services;
