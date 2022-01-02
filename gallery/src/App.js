import grid1 from './assets/desktop/image-grid-1.jpg';
import grid2 from './assets/desktop/image-grid-2.jpg';
import grid3 from './assets/desktop/image-grid-3.jpg';
import hero from './assets/desktop/image-hero.jpg';
//import map from './assets/desktop/image-map.png';

import tabgrid1 from './assets/tablet/image-grid-1.jpg';
import tabgrid2 from './assets/tablet/image-grid-2.jpg';
import tabgrid3 from './assets/tablet/image-grid-3.jpg';
import tabhero from './assets/tablet/image-hero.jpg';
//import tabmap from './assets/tablet/image-map.png';

import mobgrid1 from './assets/mobile/image-grid-1.jpg';
import mobgrid2 from './assets/mobile/image-grid-2.jpg';
import mobgrid3 from './assets/mobile/image-grid-3.jpg';
import mobhero from './assets/mobile/image-hero.jpg';
//import mobmap from './assets/mobile/image-map.png';

//import leftArrow from './assets/icon-arrow-left.svg';
import rightArrow from './assets/icon-arrow-right.svg';

import facebook from './assets/icon-facebook.svg';
import instagram from './assets/icon-instagram.svg';
import twitter from './assets/icon-twitter.svg';


import './App.css';



function App() {
  return (
    <div className="App">



      <div className="hero-section">
        <picture>
          <source media="(min-width:1000px)" srcSet={hero} />
          <source media="(min-width:700px)" srcSet={tabhero} />  
          <img srcSet={mobhero} alt="Flowers" />
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
            <span id="location-btn"> <button> OUR LOCATION </button> <span><img src={rightArrow} alt="leftArrow" /></span> </span>

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
            <source media="(min-width:1000px)" srcSet={grid1} />
            <source media="(min-width:700px)" srcSet={tabgrid1} />
            <img srcSet={mobgrid1} alt="Flowers" />
          </picture>

        </div>

        <div className="bottom">

          <picture>
            <source media="(min-width:1000px)" srcSet={grid2} />
            <source media="(min-width:700px)" srcSet={tabgrid2} />
            <img srcSet={mobgrid2} alt="Flowers" />
          </picture> 

          <div className="bottom-half">

            <picture>
              <source media="(min-width:1000px)" srcSet={grid3} />
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
