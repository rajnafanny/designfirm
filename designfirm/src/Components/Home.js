import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Hero from '../Assets/hero.png'
import Services from './Services'
import Portfolio from './Portfolio'
import Blogs from './Blogs'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home-container">
      <div id="home" className="home-banner">
        <Navbar />
        <div className="home-banner-image">
          <img src={Hero} alt="Design Firm Banner" />
        </div>
        <div className="home-banner-content">
          <h2>Egyedi digitális élmények tervezése és megvalósítása</h2>
          <h1>Weboldaltervezés, ami életre kelti a márkád</h1>
          <p>Segítek, hogy a vállalkozásod kitűnjön a digitális térben. A letisztult UX/UI design és a professzionális kivitelezés ötvözésével olyan weboldalakat hozok létre, amelyek nemcsak szépek, hanem hatékonyak is. Fedezd fel, hogyan formálhatjuk együtt a víziódat valósággá!</p>
          <button className="primary-button">Ajánlatot kérek</button>
        </div>
      </div>

      <About />

      <Services />

      <Portfolio />

      <Blogs />

      <Contact />
    </div>
    
  );
}

export default Home
