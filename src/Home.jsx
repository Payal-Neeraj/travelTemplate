import React,{useEffect} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import image2 from './images/image2.jpg';
import ocean from './images/cruise_ship (1).png';
import tree from './images/palm_tree (1).png';
import compass from './images/compass.png';
import beach from './images/beach_volleyball (1).png';
import city from './images/building_construction (1).png';
import './components/slider.css';
import './components/home.css';
import ImgSlider from './ImgSlider';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () =>{

    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
        <div className="container-fluid p-0">
            <div className="row">
                    <img src={image2} alt="img" className="img-fluid slideimage" />
            </div>
            <div className="row my-5">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 d-flex justify-content-center ">
                    <h3 className="pr-5">Special Offers</h3>
                </div>
                <p className="d-flex justify-content-center">Best packages where people love to stay!</p>
                <div className="col-sm-3"></div>
            </div>
        </div> 
        <ImgSlider /> 
        <br></br>
        <div className="container-fluid py-5" data-aos="fade-left">
           <div className="row icons-row my-5">          
               <div className="col-12 mx-auto justify-content-center">
                   <h1 className="content my-4">Holidays Type</h1>
                   <p className="content">get explore your dreams into a real life</p><br></br><br></br>
                   <div className="row mb-5">
                       <div className="col-md-1">

                        </div>
                       <div className="col-md-2 ">
                       <img src={ocean} alt="img" className="icons-size " />
                       <h3 className="icon-name">Cruise</h3>
                       </div>
                       <div className="col-md-2 ">
                       <img src={tree} alt="img" className="icons-size "  />
                       <h3 className="icon-name">Safari</h3>
                        </div>
                        <div className="col-md-2">
                        <img src={compass} alt="img" className="icons-size "  />
                        <h3 className="icon-name">Adventure</h3>
                        </div>
                        <div className="col-md-2 ">
                        <img src={beach} alt="img" className="icons-size"  /> 
                        <h3 className="icon-name">Beach</h3> 
                        </div>
                        <div className="col-md-2">
                        <img src={city} alt="img" className="icons-size "  />
                        <h3 className="icon-name">City Breaks</h3>
                        </div>
                        <div className="col-1">

                        </div>
                   </div>                  
                    </div>
           </div>
        </div>
        </>
    );
};

export default Home