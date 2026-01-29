import React from 'react'
import Service1 from '../Assets/service1.png'
import Service2 from '../Assets/service2.png'
import Service3 from '../Assets/service3.png'

function Services() {
  return (
    <div className="services-wrapper">
    <div id="services" className="services-section container">
      <h1>Szolgáltatásaink</h1>
      <p>Egyedi megoldások, átgondolt tervezés és igényes kivitelezés – minden szolgáltatásunk azt szolgálja, hogy online megjelenésed valóban működjön.</p>
        <div className="services-list">
            <div className="service-item">
                <img src={Service1} alt="Webdesign & UI/UX tervezés" />
                <div className='service-text'>
                <h2>Webdesign & UI/UX tervezés</h2>
                <p>Egyedi, modern és felhasználóbarát weboldalakat tervezünk, ahol a megjelenés és a használhatóság kéz a kézben jár. A dizájnt mindig a márkádhoz és a célközönségedhez igazítjuk.</p>  
                <a href='#' className="more-button">Megtekintem</a>
                </div>
            </div>
            <div className="service-item">
                <img src={Service2} alt="WordPress weboldal készítés" />
                <div className='service-text'>
                <h2>WordPress weboldal készítés</h2>
                <p>A jóváhagyott design alapján reszponzív, gyors és könnyen kezelhető WordPress weboldalakat építünk, amelyek hosszú távon is stabil alapot nyújtanak vállalkozásodnak.</p>  
                <a href='#' className="more-button">Megtekintem</a>
                </div>
            </div>
            <div className="service-item">
                <img src={Service3} alt="Konzultáció & támogatás" />
                <div className='service-text'>
                <h2>Konzultáció & támogatás</h2>
                <p>A közös munka nem ér véget az átadással. Kérdés esetén e-mailben elérhetőek vagyunk, és igyekszünk gyors, érthető segítséget nyújtani.</p>  
                <a href='#' className="more-button">Megtekintem</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
