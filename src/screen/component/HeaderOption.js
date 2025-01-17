import React, { useEffect, useRef, useState } from "react";
import menu from "../../images/menu.webp";
import loader from "../../images/Rectangle.webp";
import check from "../../images/check.webp";
import circle from "../../images/circle.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../images/ss-track-logo.svg';
import { useDispatch } from "react-redux";
import { useSocket } from '../../io'; // Correct import


function UserDashboardSection(params) {

    // const navigate = useNavigate();
    const location = useLocation();



    const [showContent, setShowContent] = useState(false);

    const navigate = useNavigate("");
    const dispatch = useDispatch()
    const socket = useSocket()
    let token = localStorage.getItem('token');
    let headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
    // console.log(items);


    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return (
   
        <div className="cursor-pointer mt-3">
            {/* <Header /> */}
            <>
                {/* <HeaderOption /> */}
                <nav className="navbar navbar-expand-lg navbar-dark" style={{
                    backgroundColor: "transparent",

                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    // margin: "0px 30px 0 30px",

                }}>
                    {/* <HeaderOption /> */}
                    <div className="container-fluid" style={{ position: "relative" }}>
                        <div>
                            {/* <img onClick={() => navigate('/')} className="logo" src={logo} /> */}
                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                        </div>
                        <div>
                            <div className="d-flex amButton justify-content-end" role="search">
                                <div className="ownerSectionUser1 text-white" onClick={() => {
                                    navigate('/')
                                }} >
                                    <p style={{ margin: 0 , fontSize: '0.8rem' ,fontWeight:700}} onClick={() => {
                                        navigate('/')

                                    }}>Home</p>
                                </div>
                                <div className="ownerSectionUser1 text-white" onClick={() => {
                                    navigate('/pricing')
                                }} >
                                    <p style={{ margin: 0, fontSize: '0.8rem' , fontWeight:700 }} onClick={() => location.pathname === "/" ? scrollToSection('section3') : navigate("/")}>About us</p>
                                </div>
                                <div className="ownerSectionUser1 text-white" style={{ whiteSpace: 'nowrap' }} onClick={() => {
                                    navigate('/workCards')
                                }} >
                                    <p style={{ margin: 0, fontSize: '0.8rem' , fontWeight:700 }} onClick={() => location.pathname === "/" ? scrollToSection('section4') : navigate("/")}>How It Work</p>
                                </div>
                                <div className="ownerSectionUser1 text-white" onClick={() => {
                                    navigate('/pricing')
                                }} >
                                    <p style={{ margin: 0, fontSize: '0.8rem' , fontWeight:700 }} onClick={() => location.pathname === "/" ? scrollToSection('section3') : navigate("/")}>Pricing</p>
                                </div>
                                <div className="ownerSectionUser1 text-white" onClick={() => {
                                    navigate('/pricing')
                                }} >
                                    <p style={{ margin: 0, fontSize: '0.8rem' , fontWeight:700 }} onClick={() => location.pathname === "/" ? scrollToSection('section3') : navigate("/")}>Contact us</p>
                                </div>
                              
                              
                            </div>

                        </div>
                    </div>

             
                </nav>
               
            </>

        </div>
        

    )
}

export default UserDashboardSection;