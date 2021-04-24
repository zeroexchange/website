import "./styles.scss";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel">
        <h5>Our Partners</h5>
        <div className="carousel-wrap">
          <div className="arrow-left arrow" onClick={this.previous}>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.64101 10.1517C0.759002 9.63718 0.759001 8.36278 1.64101 7.84828L13.6615 0.836324C14.5504 0.317813 15.6667 0.958974 15.6667 1.98803L15.6667 16.0119C15.6667 17.041 14.5504 17.6821 13.6615 17.1636L1.64101 10.1517Z"
                fill="#FF94EE"
              />
            </svg>
          </div>
          <div className="slider-wrap">
          <Slider ref={c => (this.slider = c)} {...settings}>
              <div className="slider-wrap__item">
                <img src="/bitcoin-com.png" alt="Logo bitcoin-com"/>
              </div>
              <div className="slider-wrap__item">
                <img src="/bitcoin-com.png" />
              </div>
              <div className="slider-wrap__item">
                <img src="/bitcoin-com.png" />
              </div>
              <div className="slider-wrap__item">
                <img src="/bitcoin-com.png" />
              </div>
              <div className="slider-wrap__item">
                <img src="/bitcoin-com.png"/>
              </div>
           
          </Slider>
          </div>
          <div className="arrow-right arrow" onClick={this.next}>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.359 10.1517C15.241 9.63718 15.241 8.36278 14.359 7.84828L2.3385 0.836324C1.44963 0.317813 0.333342 0.958974 0.333342 1.98803L0.333342 16.0119C0.333342 17.041 1.44963 17.6821 2.3385 17.1636L14.359 10.1517Z"
                fill="#FF94EE"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
