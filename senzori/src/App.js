import React, { useEffect, useState } from 'react'
import {useJsApiLoader, GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api'
import Mapa from './Mapa'
import { createBrowserRouter, RouterProvider } from 'react-router';
import IndexPage from './IndexPage';
import LoginForm from './LoginForm';
import DodajSenzor from './DodajSenzor';

export default function App() {

  
  // funkcija koja dovlaci sve lokacije



  const [senzori, setSenzori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prijava, setPrijava] = useState(false);
  const [registracija, setRegistracija] = useState(false);
  
  useEffect( () => {
    async function getSenzori(){

      const response = await fetch('https://localhost:7050/api/Senzor/all');
      const nizSenzori = await response.json();
    
      if(nizSenzori === null){
        throw new Error("Greska");
      }
      setSenzori(nizSenzori);
      setLoading(false);
    }
    getSenzori();
  },[])

  const router = new createBrowserRouter([
    {
      path:'/map',
      element: <Mapa svi={senzori}/>
    },
    
    {
      path: '/',
      element: <IndexPage setPrijava={setPrijava} setRegistracija={setRegistracija}/>
    },

    {
      path: '/login',
      element: <LoginForm prijavaValue={prijava} registracijaValue={registracija}/>
    },

    {
      path:'/add',
      element: <DodajSenzor/>
    },

  ]);
  
  return (
  <div>
    <div className="main-container" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width:'100wh'}}>
    
    {/* <h1 style={{color:'red'}}>SenzoriTemperature (v0.0)</h1>   */}

    <RouterProvider router={router}/>


    </div>

  </div>
  )
}
