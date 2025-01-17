import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdMail } from 'react-icons/io';
import logo from '../../images/ss-track-logo.svg';

function Footer() {
    return (
        <footer
            className="text-white py-5"
            style={{
                background: 'linear-gradient(90deg, #0D4873, #0A304B, #071F2D, #0C364F, #0D4873)',
                width: '100%',
                minHeight:'50vh'

            }}
        >
            <Container>
                <Row className="mb-4 justify-content-center">
                    {/* Product Section */}
                    <Col xs={6} md={2}>
                        <h5 className="mb-3" style={{ fontSize: '16px' }}>Product</h5>
                        <ul className="list-unstyled" >
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Chrome Extension</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Desktop Application</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Mobile Application</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Integrations</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>
                                Pricing <span className="badge badge-success">Free trial</span>
                            </li>
                        </ul>
                    </Col>

                    {/* Features Section */}
                    <Col xs={6} md={2}>
                        <h5 className="mb-3" style={{ fontSize: '16px' }}>Features</h5>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem', }}>Time tracker with screenshots</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Employee timesheet software</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>GPS time clock</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Overtime tracker</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Time reporting</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Attendance tracker</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Web-based time tracker</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Activity log app</li>
                        </ul>
                    </Col>

                    {/* Solutions Section */}
                    <Col xs={6} md={2}>
                        <h5 className="mb-3" style={{ fontSize: '16px' }}>Solutions</h5>
                        <h6 className="mb-2" style={{ fontSize: '15px', fontWeight: 'bold' }}>By Industry</h6>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Agencies</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Software Development</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Consulting</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>See all industries</li>
                        </ul>
                        <h6 className="mt-3 mb-2" style={{ fontSize: '15px', fontWeight: 'bold' }}>By Workforce</h6>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Fully remote</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Hybrid</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Field</li>
                        </ul>
                    </Col>

                    {/* Company Section */}
                    <Col xs={6} md={2}>
                        <h5 className="mb-3" style={{ fontSize: '16px' }}>Company</h5>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>About Us</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Contact Us</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Partners</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>FAQ</li>
                        </ul>
                        <h5 className="mb-3" style={{ fontSize: '16px', marginTop: '2rem' }}>Apps Download</h5>
                        <ul className="list-unstyled">
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Windows time tracker</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>Android time tracker</li>
                            <li style={{ fontSize: '12px', marginBottom: '0.6rem' }}>iOS time tracker</li>
                        </ul>
                    </Col>
                    {/* Signup Section */}
                    <Col xs={6} md={2}>
                        <h4 style={{fontWeight:'500'}}>Ready to get started?</h4>
                        <div className="d-flex flex-column">
                            <input
                                type="email"

                                placeholder="Enter your work email"
                                className="form-control me-2"
                                style={{ Width: '300px', marginBottom: '10px', fontSize: '12px' }}
                            />
                            <button className="btn " style={{ backgroundColor: '#7ACB59', color: 'white', fontSize: '12px', textAlign:'center' }}>Sign Up</button>
                        </div>
                        <img
                            src={logo}
                            alt="SS Track.io"
                            style={{ minWidth: '250px', marginTop:'30px' }}
                        />
                    </Col>

                </Row>



                 {/* Bottom Row */}
                 <Row>
                        <Col>
                            <p
                                className="text-center mb-0"
                                style={{
                                    fontSize: "12px",
                                    marginTop: "10%",
                                }}
                            >
                                © All Rights Reserved 2025 SS Track.io
                            </p>
                        </Col>
                    </Row>
            </Container>
        </footer>
    );
}

export default Footer;
