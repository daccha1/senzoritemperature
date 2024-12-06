import { Circle, MarkerF } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'


export default function GeocodeFunkcija({address, id}) {
  
const [lat, setLat] = useState();
const [lng, setLng] = useState();

useEffect(() =>{
    async function geoCode(address) {

        const apiKey = 'AIzaSyDAeaWxQccUeaz-faM5JI-T-9IvIE-QL7g';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    
        const response = await fetch(url);
        const data = await response.json();
        
       // console.log(JSON.stringify(data));
        const lati = data.results[0].geometry.location.lat;
        const lngt = data.results[0].geometry.location.lng;
        setLat(lati);
        setLng(lngt);
    };
    geoCode(address);
});

  
return (
    <>
        <MarkerF className="svi-senzori" position={{lat, lng}} key={id}>
            <Circle center={{lat, lng}} radius={30} options={{fillColor:'green', fillOpacity:'0.1', strokeOpacity:'0'}}></Circle>
        </MarkerF>
    </>
  )
}
