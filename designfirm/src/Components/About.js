import React from 'react'
import AboutUs from '../Assets/aboutus.png'

const About = () => {
  return (
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
  );
}

export default About
