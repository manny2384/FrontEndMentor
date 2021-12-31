import './App.css';
import menu from "./assets/shared/mobile/menu.svg";

function App() {


  let showLinks = () => {
    document.getElementsByClassName("nav-links")[0].style.display = "flex";
  }

  return (
    <div className="App">

      <div className="nav-bar">
        <div className="logo"> 
          <div className="logoIcon"> </div>
          <div style={{"color":"#36536B", "font-size":"28px"}}> <b>pay</b>api </div>  
        </div> 
      
        <div className="nav-icon"> <img src={menu} alt="nav icon" onClick={showLinks} /> </div>

        <div className="nav-links">
          <ul>
            <li> Pricing </li>
            <li> About </li>
            <li> Contact </li>
            <li> <button> Schedule a Demo </button> </li>
          </ul>
        </div>

        
     
      </div>





    </div>
  );
}

export default App;

/*
    Start building with our APIs for absolutely free.
    Enter email address 
    Schedule a Demo
    Have any questions? Contact Us

    Who we work with
    Today, millions of people around the world have successfully connected 
    their accounts to apps they love using our API. We provide developers 
    with the tools they need to create easy and accessible experiences 
    for their users.
    About Us

    Easy to implement
    Our API comes with just a few lines of code. You’ll be up and running in 
    no time. We built our documentation page to integrate payments functionality 
    with ease.

    Simple UI & UX
    Our pre-built form is easy to integrate in your app or website’s checkout 
    flow and designed to optimize conversion.

    Personal Finances
    Consolidate financial data from multiple sources and categorize transactions up to
    2 years of history. Analyze reports to reconcile activities in your account.

    Banking & Coverage
    With our platform, you can speed up account onboarding and support ongoing payments 
    for checking, savings, credit card, and brokerage accounts.

    Consumer Payments
    It’s easier to set up secure bank payments with us through a flow designed with the 
    user experience in mind. Customers could instantly authenticate their account.

    Ready to start? 
    Enter email address 
    Schedule a Demo

    Pricing
    About
    Contact

  */