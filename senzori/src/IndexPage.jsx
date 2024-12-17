import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./IndexPage.css";


export default function IndexPage({setPrijava, setRegistracija}) {
  
  const nav = useNavigate();

  const handleClickPrijava = () => {
    setPrijava(true);
    setRegistracija(false);
    nav("/login");
  }

  const [test, setTest] = useState(false);

  const handleClickRegistracija = () => {
    setPrijava(false);
    setRegistracija(true);
    nav("/login");

    setTest(true);
  }

  

  return (
  <div className="main-c">
    <div className="main-container">
      
      <div className="tekst-container">
        <h1 id="title-appname">FrigoMonitor</h1>
        <p id="title-paragraph">Efikasan pristup za praćenje parametara rashladnih uređaja u realnom vremenu.</p>
        <p id="title-paragraph">Brzina, efikasnost i konkurentska prednost su benefiti koje mi nudimo.</p>
      </div>

      <div className="action-buttons-container">
        <button className="action-btn prijavi-se" onClick={handleClickPrijava}>
          Prijavi se
        </button>

        <button className="action-btn registruj-se" onClick={handleClickRegistracija}>
          Registruj se
        </button>
        
        

      </div>

      <div className="contact-container">
        <p id="contact-paragraph">Adresa: Test Kralja Aleksandra 301, Beograd</p>
        <p id="contact-paragraph">E-mail: test@frigomonitor.com</p>
        <p id="contact-paragraph">Tel. 012/331-123</p>
      </div>

    </div>
  </div>
  );
}
