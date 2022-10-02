import React, { Component } from "react";
import Slider from "react-slick";
import "./Slidermovie.css";
import MO1 from "../photos/MO1.jpg";
import MO2 from "../photos/MO2.jpg";
export default class Slidermovie extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="movieslider">
        <h2> What to watch</h2>
        <Slider {...settings}>
          <div>
            <img className="movies" src={MO1} alt="horse" width={1200} />
          </div>
          <div>
            <img className="movies" src={MO2} alt="horse"  width={1200} />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}