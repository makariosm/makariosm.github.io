import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BackgroundContent.css";

function BackgroundContent() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slide-container">
              <div className="slide-title">
                <p className="slide-name">{d.name}</p>
              </div>
              <div className="slide">
                <div className='slide-content'>
                  <div className='slide-image-container'>
                    <img src={d.img} alt="" className="slide-image"/>
                  </div>
                  <div className="slide-text">
                    <p className="slide-review">{d.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  const data = [
    {
      name: `John Morgan`,
      img: `/images/img-1.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `/images/img-1.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `/images/img-1.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `/images/img-1.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: `/images/img-1.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];
  
  export default BackgroundContent;
  