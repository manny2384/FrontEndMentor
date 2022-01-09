import grid1 from './assets/desktop/image-grid-1.jpg';
import grid2 from './assets/desktop/image-grid-2.jpg';
import grid3 from './assets/desktop/image-grid-3.jpg';
import hero from './assets/desktop/image-hero.jpg';
import map from './assets/desktop/image-map.png';

import tabgrid1 from './assets/tablet/image-grid-1.jpg';
import tabgrid2 from './assets/tablet/image-grid-2.jpg';
import tabgrid3 from './assets/tablet/image-grid-3.jpg';
import tabhero from './assets/tablet/image-hero.jpg';
import tabmap from './assets/tablet/image-map.png';

import mobgrid1 from './assets/mobile/image-grid-1.jpg';
import mobgrid2 from './assets/mobile/image-grid-2.jpg';
import mobgrid3 from './assets/mobile/image-grid-3.jpg';
import mobhero from './assets/mobile/image-hero.jpg';
import mobmap from './assets/mobile/image-map.png';

import leftArrow from './assets/icon-arrow-left.svg';
import rightArrow from './assets/icon-arrow-right.svg';

import facebook from './assets/icon-facebook.svg';
import instagram from './assets/icon-instagram.svg';
import twitter from './assets/icon-twitter.svg';


import './App.css';
import {React, useEffect, useState} from 'react';


function App() {

  // page state of website vs grid page
  const [page, setPage] = useState(true);
  useEffect(()=>{
    console.log('re-rendering');

  }, [page]);
  


  return (
    <div className="App">

      {!page &&
          <div id="showGrid">

            <span className="btn" id="back-btn" onClick={()=>setPage(!page)}>
              <button><img src={leftArrow} alt="left Arrow" /></button>
              <span> BACK TO HOME </span>
            </span>

            <div style={{'width':'100%', 'display':'grid'}}>
            <picture>
                  <source media="(min-width:1440px)" srcSet={map} />
                  <source media="(min-width:768px)" srcSet={tabmap} />  
                  <img srcSet={mobmap} alt="Flowers" />
            </picture> 
            </div>
            
            <div className="location"> 
              <div id="big-loc"> OUR LOCATION </div>
              <div className="loc-description"> 
                <p id="street"> 99 KING STREET </p>
                <p>
                  Newport <br />
                  RI 02840 <br />
                  United States of America <br />
                </p>
                <p> 
                  Our newly opened gallery is located near the Edward King House on 99 King Street,
                  the Modern Art Gallery is free to all visitors and open seven days a week from 
                  8am to 9pm.
                </p>
              </div>
            </div>

          </div>
      }
    
      {page &&
        <div id="showGallery">
          <div className="hero-section">
            <div className="black-wall"></div>
            <picture>
              <source media="(min-width:1000px)" srcSet={hero} />
              <source media="(min-width:700px)" srcSet={tabhero} />  
              <img srcSet={mobhero} alt="hero-img" />
            </picture> 

            <div className="hero-description">

              <p className="big-word">
                <span> MODERN ART GALLERY </span>
              </p>

              <div className="small-word">

                <span>   
                    The arts in the collection of the Modern Art Gallery all started 
                    from a spark of inspiration. Will these pieces inspire you? Visit 
                    us and find out. 
                </span>

                <div className="btn" id="forward-btn" onClick={() => setPage(!page)}> 
                  <span> OUR LOCATION </span> 
                  <button><img src={rightArrow} alt="right Arrow" /></button> 
                </div>

              </div>

            </div>

          </div>

          <div className="mid-section">

            <div className="top">

              <div className="intro">   
                    <p className="big-word">YOUR DAY AT THE GALLERY</p>

                    <p className="small-word">
                    Wander through our distinct collections and find new insights about 
                    our artists. Dive into the details of their creative process.
                    </p>
              </div>

              <picture>
                <source media="(min-width:1150px)" srcSet={grid1} />
                <source media="(min-width:700px)" srcSet={tabgrid1} />
                <img srcSet={mobgrid1} alt="Flowers" />
              </picture>

            </div>

            <div className="bottom">

              <picture>
                <source media="(min-width:1150px)" srcSet={grid2} />
                <source media="(min-width:700px)" srcSet={tabgrid2} />
                <img srcSet={mobgrid2} alt="Flowers" />
              </picture> 

              <div className="bottom-half">

                <picture>
                  <source media="(min-width:1150px)" srcSet={grid3} />
                  <source media="(min-width:700px)" srcSet={tabgrid3} />
                  <img srcSet={mobgrid3} alt="Flowers" />
                </picture> 

                <div className="inspire">
                  <p className="big-word" style={{"paddingTop":"2rem","paddingBottom":"2rem"}}>COME &amp; BE INSPIRED</p>
                  <p className="small-word" style={{"paddingBottom":"2rem"}}>
                    We’re excited to welcome you to our gallery and see how our collections 
                    influence you.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      }

      <div className="footer">
        <p className="big-word">MODERN ART GALLERY</p>

        <p className="small-word">
          The Modern Art Gallery is free to all visitors and open seven days a week 
          from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>

        <ul>
          <li><img srcSet={facebook} alt="facebook-icon" /></li>
          <li><img srcSet={instagram} alt="instagram-icon" /></li>
          <li><img srcSet={twitter} alt="twitter-icon" /></li>
        </ul>
      </div>


    </div>
  );
}

export default App;
