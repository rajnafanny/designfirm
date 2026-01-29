import React from 'react'
import Navbar from './Navbar'
import Hero from '../Assets/hero.png'
import AboutUs from '../Assets/aboutus.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
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

      <div id="about" className="about-section container">
        <div className="about-text">
        <h1>Bemutatkozás</h1>
        <p>A DesignFirmnél nem csupán egy átlagos weboldalt kapsz, hanem egy olyan online megjelenést, amely teljes mértékben az igényeidre és céljaidra szabott. A kapcsolatfelvételt követően azonnal megkezdjük a közös munkát, ahol kiemelt figyelmet fordítunk arra, hogy az elkészült oldal vizuálisan megnyerő, átlátható és funkcionálisan is kifogástalan legyen. <br /><br /> 

            Számunkra fontos, hogy a végeredmény ne csak esztétikus legyen, hanem maradéktalanul megfeleljen az elvárásaidnak, és valódi értéket képviseljen a vállalkozásod számára. Hiszünk abban, hogy egy jó weboldal élményt ad, ezért célunk, hogy ügyfeleink pozitív tapasztalatokkal távozzanak.<br /><br />

            E-mailben bármikor felveheted velünk a kapcsolatot, és igyekszünk a lehető legrövidebb időn belül válaszolni, mert a gördülékeny kommunikáció számunkra alapérték.
        </p> 
        <button className="secondary-button">Tovább olvasom</button>
        </div>
        <div className='about-image'>
          <img src={AboutUs} alt="About Us" />
        </div>

      </div>
    </div>
    
  );
}

export default Home
