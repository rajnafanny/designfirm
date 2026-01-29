import React from 'react'
import PortfolioImg1 from '../Assets/portfolio1.png'

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio-section container">
        <h1>Referenciáink</h1>
              <p>Egyedi megoldások, átgondolt tervezés és igényes kivitelezés – minden szolgáltatásunk azt szolgálja, hogy online megjelenésed valóban működjön.</p>
                <div className="portfolio-list">
                    <div className="portfolio-item">
                        <div className='portfolio-img'>
                        <img src={PortfolioImg1} alt="portfolio1" />
                        </div>
                        <div className='portfolio-text'>
                        <h2>Lorem ipsum dolor sit</h2>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Egyedi, modern és felhasználóbarát weboldalakat tervezünk, ahol a megjelenés és a használhatóság kéz a kézben jár. A dizájnt mindig a márkádhoz és a célközönségedhez igazítjuk.</p>  
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className='portfolio-img'>
                        <img src={PortfolioImg1} alt="portfolio1" />
                        </div>
                        <div className='portfolio-text'>
                        <h2>Lorem ipsum dolor sit</h2>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Egyedi, modern és felhasználóbarát weboldalakat tervezünk, ahol a megjelenés és a használhatóság kéz a kézben jár. A dizájnt mindig a márkádhoz és a célközönségedhez igazítjuk.</p>  
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className='portfolio-img'>
                        <img src={PortfolioImg1} alt="portfolio1" />
                        </div>
                        <div className='portfolio-text'>
                        <h2>Lorem ipsum dolor sit</h2>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Egyedi, modern és felhasználóbarát weboldalakat tervezünk, ahol a megjelenés és a használhatóság kéz a kézben jár. A dizájnt mindig a márkádhoz és a célközönségedhez igazítjuk.</p>  
                        </div>
                    </div>
                </div>
                <button className="secondary-button">Összes referencia megtekintése</button>
    </div>
  )
}

export default Portfolio
