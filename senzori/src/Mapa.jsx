import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GeocodeFunkcija from "./GeocodeFunkcija";
import { fetchData } from "./funkcije";
import "./Mapa.css";

export default function Mapa({ svi }) {
  const centar = { lat: 44.3784, lng: 21.4166 };
  const [dugmeValue, setDugmeValue] = useState(false);             // dugme za prikaz SVIH
  // const [dugmePokvareni, setDugmePokvareni] = useState(false);    // dugme za pokvarene
  // const [dugmePartneriText, setDugmePartneriText] = useState(false);
  // const [dugmePartneri, setDugmePartneri] = useState(false);
  // const [dugmeLokacije, setDugmeLokacije] = useState(false);
  // const [dugmeId, setDugmeId] = useState(false);

                                    //    badLok prtTxT prtLok poLok  poId     
  const [buttons, setButtons] = useState([false, false, false, false, false]);
  const [podaci, setPodaci] = useState([]); // default promenljiva koja prima podatke
  const [partner, setPartner] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [idSenzora, setIdSenzora] = useState("");
  const [stringPartneri, setStringPartneri] = useState("");

  // handleButton za prikaz svih sistema
  const handleButtonClickPrikazi = () => {
    setDugmeValue(!dugmeValue);
  };


  // handle funkcija za regulisanje prikaza
  const handleButtonValues = (index) => {
    
    const newButtons = buttons;

    if(buttons[index]===true){
      newButtons[index]=false;
      setButtons(newButtons);
      return;
    }
    
    
    setDugmeValue(false);
    buttons[index] = true;
    for(let i = 0; i<buttons.length; i++){
      if(buttons[i] === true && i !== index){
        newButtons[i] = false;
      }
    }
    
    setButtons(newButtons);
  };

  // handleButton za poziv GET zahteva
  const handleButtonGet = async (url) => {
    const rez = await fetchData(url);
    console.log(rez);
    setPodaci(rez);
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyDAeaWxQccUeaz-faM5JI-T-9IvIE-QL7g"}
    >
    
    <div class="main-container">

      <div class="no-inputs-container">
        <div class="input-container noInput">
            <label>Prikazite lokacije svih sistema: </label>

            <button class="btn" key={0} onClick={handleButtonClickPrikazi}>
             {dugmeValue ? "Sakrij" : "Prikaži"}
           </button>
        </div>

        <div class="input-container noInput">
            <label>Prikazite lokacije pokvarenih sistema: </label>
            <button class="btn" key={1} onClick={() => {handleButtonValues(0); handleButtonGet(`https://localhost:7050/api/Senzor/bad`)}}> 
              {buttons[0]? "Sakrij" : "Prikaži"}
            </button>
        </div>

        <div class="input-container noInput">
            <label>Prikazite sve poslovne partnere: </label >
            <button class="btn" key={2} onClick={() => {handleButtonValues(1); handleButtonGet(`https://localhost:7050/api/Senzor/poslovni-partneri`)}}>
            {buttons[1]? "Sakrij" : "Prikaži"}
           </button>
        </div>
      </div>

      <div className="inputs-container">
      
        <div className="input-container withInput">
              <label>Prikaz sistema po partnerima:</label>
              <input value={partner} onChange={(e)=>setPartner(e.target.value)} type="text" placeholder="Unesite poslovnog partnera"/>
              <button class="btn" key={3} onClick={() => {handleButtonValues(2); handleButtonGet(`https://localhost:7050/api/Senzor/partner/${partner}`)}} >
                {buttons[2]? "Sakrij" : "Prikaži"}
              </button>
        </div>

        <div className="input-container withInput">
              <label>Prikaz sistema po lokacijama::</label>
              <input value={lokacija} onChange={(e) => setLokacija(e.target.value)} type="text" placeholder="Unesite lokaciju"/>
              <button class="btn" key={4} onClick={() => {handleButtonValues(3); handleButtonGet(`https://localhost:7050/api/Senzor/location/${lokacija}`)}} >
                {buttons[3]? "Sakrij" : "Prikaži"}
              </button>
        </div>

        <div className="input-container withInput">
              <label>Prikaz sistema po ID-u:</label>
              <input value={idSenzora} onChange={(e)=>setIdSenzora(e.target.value)} type="text" placeholder="Unesite ID sistema"/>
            
              <button class="btn" key={5} onClick={() => {handleButtonValues(4); handleButtonGet(`https://localhost:7050/api/Senzor/id?id=${idSenzora}`)}}>
                {buttons[4]? "Sakrij" : "Prikaži"}
              </button>
        </div>
        
      
      </div>
    </div>

    
      <GoogleMap
        center={centar}
        zoom={15}
        mapContainerStyle={{ width: "100vw", height: "80%", top: "30px" }}
        options={{
          fullscreenControl: false,
          streetViewControl: true,
        }}>
        
        {dugmeValue &&
          svi.map((s) => (
            <>
              <GeocodeFunkcija address={s.lokacija} id={s.id} />
            </>
          ))}

        {buttons[4]? 
           <>
            <GeocodeFunkcija address={podaci.lokacija} id={podaci.id} />
          </>:
          <></>
        }

        {buttons[0] && podaci?.map((p) => (
           <>
            <GeocodeFunkcija address={p.lokacija} id={p.id} />
          </>
        ))}
        
        {buttons[1]? <>{console.log(podaci)}</>:<></>}
        
        {buttons[2] && podaci?.map((p) => (
           <>
            <GeocodeFunkcija address={p.lokacija} id={p.id} />
          </>
        ))}
        
        {buttons[3] && podaci?.map((p) => (
           <>
            <GeocodeFunkcija address={p.lokacija} id={p.id} />
          </>
        ))}


        

      </GoogleMap>
    </LoadScript>
  );
}
