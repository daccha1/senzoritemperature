import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPost } from "./funkcije";
import './DodajSenzor.css'
import { useNavigate } from 'react-router';

export default function DodajSenzor() {
    

    const [lokacija, setLokacija] = useState("");
    const [vremeMerenja, setVremeMerenja] = useState("");
    const [temperatura, setTemperatura] = useState();
    const [poslovniPartner, setPoslovniPartner] = useState("");
    const [datumServisa, setDatumServisa] = useState("");

    // const [senzor, setSenzor] = useState({

    // })

    const [senzor,setSenzor] = useState({})

    const nav = useNavigate();

    const handleSubmitButton = () => {
        
        senzor.lokacija = lokacija;
        senzor.vremeMerenja = vremeMerenja;
        senzor.temperatura = temperatura;
        senzor.poslovniPartner = poslovniPartner;
        senzor.datumServisa = datumServisa;



        const formatiraniDatumServisa = new Date(datumServisa.split('.').reverse().join('-')).toISOString();
        const formatiranoVremeMerenja = new Date(vremeMerenja.split('.').reverse().join('-')).toISOString();  
            const senzorUpdated = senzor;
            senzorUpdated.datumServisa = formatiraniDatumServisa;
            senzorUpdated.vremeMerenja = formatiranoVremeMerenja;
            setSenzor(senzorUpdated);
       
            fetchPost(`https://localhost:7050/api/Senzor`,senzor);
    }

    const handleReturnButton = () => {
        nav("/map");
    }
    
    return (
    <div className="all-container">
        <div className="outside-container">
            
            <h2 id="input-title">Unesite podatke o sistemu</h2>
            
            <div className="content-container">

                <div className="input-container">
                    <label htmlFor="lokacija">Unesite lokaciju</label>
                    <input type="text" id="lokacija-input" placeholder='Vojvode Stepe 327, Vozdovac 11010, Beograd' value={lokacija} onChange={(e) => setLokacija(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label htmlFor="temperatura">Unesite temperaturu</label>
                    <input type="text" id="temperatura-input" placeholder='-3, 2...' value={temperatura} onChange={(e) => setTemperatura(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label htmlFor="poslovni-partner">Unesite naziv poslovnog partnera</label>
                    <input type="text" id="partner-input" placeholder='SZR Frigoterm' value={poslovniPartner} onChange={(e) => setPoslovniPartner(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label htmlFor="datum-servisa">Unesite datum servisa sistema</label>
                    <input type="text" id="servis-input" placeholder='Datum u obliku DD.MM.GGGG.' value={datumServisa} onChange={(e) => setDatumServisa(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label htmlFor="vreme-merenja">Unesite datum servisa sistema</label>
                    <input type="text" id="vreme-input" placeholder='Datum u obliku DD.MM.GGGG.' value={vremeMerenja} onChange={(e) => setVremeMerenja(e.target.value)}/>
                </div>
                
                <button id="submit-button" className='btn' onClick={handleSubmitButton}>Dodaj sistem</button>
                <button id="return-button" className='btn' onClick={handleReturnButton}>Nazad na mapu</button>

            </div>
        </div>
    </div>
  )
}
