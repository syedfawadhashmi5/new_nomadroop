
import React, { Component } from "react";
import { Link  } from 'react-router-dom';
import applogo from '../../images/flogoz.png';
import Arrow from '../../images/arrow.png';
import Falg1 from '../../images/flag1.png'
import Falag2 from '../../images/falg2.png'


const Footer = () => {

    return(
        <div className='footer'>
                <div className='footer-inner'>
                            
                    <img className='footer-logo' src={applogo} alt='footer-Logo' /> 
                    <div className='container' id='next-bordr'>
                        <div className='row'>
                            <div className='col-md-3  mb-3'>
                                <h6>SELECT LANGUAGE</h6>

                                <div style={{ display: "flex", marginTop: "17px", marginBottom: "6px" }} >
                                    <img width="10%" height="7%" src={Falg1} />
                                    <img width="12%" height="9%" src={Falag2} />
                                </div>

                                <div style={{ display: "flex" }}> 
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />
                                    <p className="footer-link">About Nomadroof</p>
                                </div>

                                <div style={{ display: "flex", textAlign: "center" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />
                                    <p className="footer-link">Reach us</p>
                                </div>
                            </div>

                            <div className='col-md-3  mb-3'>
                                <h6>QUICK LINKS</h6>
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" width="9%" height="12%" alt="arrow-icon" />
                                    <p style={{ color: "white", marginTop: "5px", fontSize: "89%", marginBottom: "0px" }}>Exclusives</p>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">
                                        <Link to={"/nomad/properties"} className="bottom-link">Properties</Link>
                                    </p>
                                </div>  
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />
                                    <p className="footer-link">Blog</p>
                                </div>  
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">
                                        <Link to={"/contact-us"} className="bottom-link"> Conatct Us</Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-3  mb-3' >
                                <h6>HELP</h6>
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="faq-icon" />
                                        
                                    <p className="footer-link">
                                        <Link to={"/faqs"} className="bottom-link"> FAQ </Link>
                                    </p>
                                </div>  <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">
                                        <Link to={"/terms"} className="bottom-link"> Terms and Conditions </Link>
                                    </p>
                                </div>  <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">
                                        <Link to={"/privacy-policy"} className="bottom-link"> Privacy Policy </Link>   
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />
                                    <p className="footer-link">For Tenants</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-3' style={{ position: "relative" }}>
                                <h6>FOLLOW US</h6>
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">CustmerSuport@nmadroof.com</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Arrow} className="footer-icon" alt="arrow-icon" />

                                    <p className="footer-link">namadroofsupport</p>
                                </div>
                                <div style={{ display: "flex", margin: "auto" }}>
                                    {/* <FacebookIcon id="fabk-icon" />
                                    <GoogleIcon id="google-icon" />
                                    <YouTubeIcon id="youtube-icon" />
                                    <InstagramIcon id="gram-icon" /> */}
                                </div>
                            
                        </div>
                        <div className='copyright'>Copyright 2020|Nomadroof. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

