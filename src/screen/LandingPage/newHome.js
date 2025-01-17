import React from 'react';
import { useNavigate } from 'react-router-dom';
import apple from '../../images/apple.svg';
import chrome from '../../images/chrome.svg';
import laptopandmob from '../../images/laptopand mob.svg';
import microsoftlogo from '../../images/microsoft.svg';
import playstore from '../../images/playStore.svg';
import NavigationBar from '../../screen/component/header'; // Import your NavigationBar component
import NewHIW from '../LandingPage/Components/newHIW';
import ETIOP from '../LandingPage/Components/ETIOP'
import FeaturesSection from '../LandingPage/Components/FeaturesSection';
import ProductivitySection from '../LandingPage/Components/ProductivitySection';
import PricingSection from '../../screen/LandingPage/Components/PricingSection'
import DownaloadApp from '../LandingPage/Components/DownloadApp'
import FAQ from '../LandingPage/Components/FAQ';
import ContactSection from '../LandingPage/Components/ContactSection'
import StatsSection from '../LandingPage/Components/StatsSection';
import StartingSStrack from '../LandingPage/Components/StartingSStrack';

function NewHome() {
  const navigate = useNavigate();


  return (
    <>
      {/* Navbar */}

      {/* Main content */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundColor: '#ffffff',
        scrollbarWidth: 'none',
      }}>
        <div style={{
          position: 'sticky',
          top: '0',
          width: '100%',
          zIndex: '10',

        }}>
          <NavigationBar />
        </div>
        <div style={{
          position: 'absolute',
          width: '150%',
          height: '190%',
          top: '-115%',
          background: 'linear-gradient(90deg, #0D4873, #0A304B, #071F2D, #0C364F, #0D4873)',
          borderRadius: '50%',
          zIndex: 1,
        }}></div>
        <div className="container" style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#ffffff',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            fontFamily: "'Sinkin Sans', sans-serif",
            marginBottom: '30px',
            marginTop: '10%',
          }}>End-to-End Employee Presence Tracking System</h1>
          <p style={{
            fontSize: '1rem',
            fontWeight: '400',
            marginBottom: '50px',
            textAlign:'center',
            width:'75%',
            fontFamily: "'Sinkin Sans', sans-serif",
          }}>
            From work from home to office, onsite, in the field, or any specific job site, SS Track.io offers
            precision tracking, seamless management, and smarter team solutions. Track across Windows, Mac,
            Android, iOS, and Chrome platforms with unmatched efficiency.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0',
            marginBottom: '2rem',
            width: '30%',
            maxWidth: '500px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}>
            <input
              type="email"
              placeholder="Enter your work email"
              className="form-control"
              style={{
                flex: '2',
                padding: '0.86rem 1rem',
                fontSize: '0.69rem',
                fontFamily: "'Sinkin Sans', sans-serif",
                border: 'none',
                outline: 'none',
                borderRadius: '0',
              }}
            />
            <button style={{
              padding: '0.9rem 2.7rem',
              fontSize: '0.69rem',
              fontFamily: "'Sinkin Sans', sans-serif",
              border: 'none',
              backgroundColor: '#7ACB59',
              color: '#ffffff',
              cursor: 'pointer',
              fontWeight: 'bold',
            }} onClick={() => navigate("/signup")}>Sign up</button>
          </div>
          <p style={{
            fontSize: '1rem',
            fontWeight: '400',
            marginBottom: '2.49rem',
            marginTop: '1rem',
            fontFamily: "'Sinkin Sans', sans-serif",
          }}>
            SS Track Is Available Across All Major Platforms For Seamless Access
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '2.49rem',
          }}>
            <img src={microsoftlogo} alt="Microsoft" style={{ width: '11rem' }} />
            <img src={apple} alt="Apple" style={{ width: '3rem' }} />
            <img src={playstore} alt="Google Play" style={{ width: '12rem' }} />
            <img src={chrome} alt="Chrome Web Store" style={{ width: '12rem' }} />
          </div>
        </div>

        {/* Mockup */}
        <img
          src={laptopandmob}
          alt="Laptop and Mobile Mockup"
          style={{
            position: 'relative',
            // top: '60%',
            width: '81%',
            zIndex: 2,
          }}
        />



      </div>
      <StatsSection />
      <NewHIW />
      <ETIOP />
      <FeaturesSection />
      <ProductivitySection />
      <PricingSection />
      <DownaloadApp />
      <FAQ />
      <ContactSection />
      <StartingSStrack/>
    </>
  );
}

export default NewHome;

