import React from 'react';
import styled from 'styled-components';
 import youtube from '../images/youtube (1).png'
import linkedin from '../images/linkedin (1).png'
import gmail_ios from '../images/gmail_ios.png';
import facebook from '../images/facebook (2).png' 

function Footer(){
    return(
        <>
        <FooterContainer className="main-footer"> 
        <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* column1 */}
                        <div className="col-md-3 col-sm-6">
                            <h1 >Let's find your dream home</h1>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            {/* <h4>Let's find your dream home</h4> */}
                        </div>

                        {/* column2 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Contact us</h5>
                            <ul className="list-unstyled">
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>

                        {/* column3 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Help & FAQs</h5>
                            <ul className="list-unstyled">
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img className="m-2" src={youtube}  alt="youtube"></img>
                            <img className="m-2" src={gmail_ios}  alt="youtube"></img>
                            <img className="m-2" src={linkedin}  alt="youtube"></img>
                            <img className="m-2" src={facebook}  alt="youtube"></img>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center d-flex justify-content-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    </>
    );
}

export default Footer;

const FooterContainer = styled.footer  `
    .footer-middle{
        background: #BA44E3;
        padding-top: 3rem;
        color: black;
        clip-path: polygon(0 1%, 70% 7%, 100% 10%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
    }

    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
        font-weight: bold;
    }

    ul li{
        font-size: 15px;
        font-weight: bold;
    }

    h1{
        font-italic: true;
        font-weight: bolder;
    }

    h5{
        font-weight: bold;
    }



    
`;
