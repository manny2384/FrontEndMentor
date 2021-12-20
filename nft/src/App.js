import './App.css';
import equilibrium from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import view from "./images/icon-view.svg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="innerCard">
          
          <div className="innerinnerCard">
            
            <div className="nftImage"> 
              <img id="nft" alt="nftImage" src={equilibrium} /> 
              <a href="#"><img id="eye" src={view} alt="eye" /></a>
            </div>

            <div className="tag"> <a href="#"> Equilibrium #3429 </a> </div>

            <div className="desc"> Our Equilibrium collection promotes balance and calm. </div>

            <div className="specs">
              <span style={{"color": '#00FFF8'}}> <img src={ethereum} alt="ethereum" /> 0.041 ETH </span>
              <span> <img src={clock} alt="clock" /> 3 days left </span>
            </div>


            <div className="author"> <img src={avatar} alt="avatar" /> <p> Creation of <a href="#">Jules Wyvern</a> </p> </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
