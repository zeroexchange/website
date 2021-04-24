import "./styles.scss";
import { Component } from "react";
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
      slidesToScroll: 5,
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
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className="slider-wrap__item">
                <a href="https://exchange.bitcoin.com/" target="_blank">
                  <img src="/bitcoin-com.png" alt="Logo bitcoin-com" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://www.avalabs.org/" target="_blank">
                  <img src="/avalabs.png" alt="Logo avalabs" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://www.bithumb.pro/en-us" target="_blank">
                  <img src="/bithumb.png" alt="Logo bithumb" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://www.bridgemutual.io/" target="_blank">
                  <img src="/bridge.png" alt="Logo bridge" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://www.binance.org/en/smartChain" target="_blank">
                  <img src="/bsc.png" alt="Logo bsc" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://kaironlabs.com/" target="_blank">
                  <img src="/kairon.png" alt="Logo kairon" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://moonbeam.network/" target="_blank">
                  <img src="/moonbeam.png" alt="Logo moonbeam" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://polkadot.network/" target="_blank">
                  <img src="/polkadot.png" alt="Logo polkadot" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://web3api.substack.com/" target="_blank">
                  <img src="/web3api.png" alt="Logo web3api" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://wasder.gg/ " target="_blank">
                  <img src="/wasder.png" alt="Logo wasder" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a
                  href="https://indacoin.com/buy-bitcoin-with-card"
                  target="_blank"
                >
                  <img src="/indacoin.png" alt="Logo indacoin" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://grow.house/" target="_blank">
                  <img src="/grow.png" alt="Logo grow" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://gda.capital/" target="_blank">
                  <img src="/gda.png" alt="Logo gda" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://www.fireblocks.com/" target="_blank">
                  <img src="/fireblocks.png" alt="Logo fireblocks" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="http://hypercube.video/ " target="_blank">
                  <img src="/hypercube.png" alt="Logo hypercube" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://changelly.com/" target="_blank">
                  <img src="/changelly.png" alt="Logo changelly" />
                </a>
              </div>
              <div className="slider-wrap__item">
                <a href="https://bscstarter.finance/#/home" target="_blank">
                  <img src="/bscstarter.png" alt="Logo bscstarter" />
                </a>
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
