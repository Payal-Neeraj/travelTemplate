import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/lake.webp';
import img5 from './images/img1.jpg';
import './components/slider.css';

export default class ImgSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="container-fluid nav_bg">
        <div className="row ">
          <div className="col-md-10 mx-auto ">
          <Slider {...settings}>
          <div>
          
          <div className="card ">
            <img src={img1} className="card-img-top img-size" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Card title1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
            
          </div>
          <div>
          <div className="card">
            <img src={img2} className="card-img-top img-size" alt="img2" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
            <img src={img3} className="card-img-top img-size" alt="img3" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
            <img src={img4} className="card-img-top img-size" alt="img4" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
            <img src={img5} className="card-img-top img-size" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
        </Slider>
          </div>
        </div>   
      </div>
    );
  }
}