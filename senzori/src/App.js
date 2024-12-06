import React, { useEffect, useState } from 'react'
import {useJsApiLoader, GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api'
import Mapa from './Mapa'
import Test from './Test';





export default function App() {

  
  // funkcija koja dovlaci sve lokacije

  const [senzori, setSenzori] = useState([]);
  
  useEffect( () => {
    async function getSenzori(){

      const response = await fetch('https://localhost:7050/api/Senzor/all');
      const nizSenzori = await response.json();
      
      setSenzori(nizSenzori);
    }
    getSenzori();
  },[])

  
  return (
  
    <div className="main-container" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width:'100wh'}}>
    
    <h1 style={{color:'red'}}>SenzoriTemperature (v0.0)</h1>  

      {/* ZA TESTIRANJE TEST i BUTTONA */}
      
    
    <Mapa svi={senzori}/>

    </div>
  )
}
