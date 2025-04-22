import { Circle, InfoWindowF, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

export default function GeocodeFunkcija({
  address,
  id,
  temperatura,
  poslovniPartner,
  objekat,
}) {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [loading, setLoading] = useState(true);
  const [markerClick, setMarkerClick] = useState(false);

  const handleMarkerClick = () => {
    if (markerClick === true) {
      setMarkerClick(false);
      return;
    }
    setMarkerClick(true);
  };

  useEffect(() => {
    async function geoCode(address) {
      const apiKey = "AIzaSyDAeaWxQccUeaz-faM5JI-T-9IvIE-QL7g";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      // console.log(JSON.stringify(data));
      const lati = data.results[0].geometry.location.lat;
      const lngt = data.results[0].geometry.location.lng;
      setLat(lati);
      setLng(lngt);
      setLoading(false);
    }
    geoCode(address);
  });

  return (
    <>
      <MarkerF
        position={{ lat, lng }}
        key={id}
        onClick={() => handleMarkerClick()}
      >
        <Circle
          center={{ lat, lng }}
          radius={30}
          options={{
            fillColor: "green",
            fillOpacity: "0.1",
            strokeOpacity: "0",
          }}
        />

        {!loading && markerClick && address && (
          <InfoWindowF position={{ lat, lng }}>
            <div>
              <h2>{objekat.poslovniPartner}</h2>
              <p>ID: {objekat.id}</p>
              {objekat.temperatura > 10 ? (
                <p style={{ color: "red" }}>
                  Temperatura: {objekat.temperatura}°C
                </p>
              ) : (
                <p>Temperatura: {objekat.temperatura}°C</p>
              )}
              <p>Adresa: {objekat.lokacija}</p>
            </div>
          </InfoWindowF>
        )}
      </MarkerF>
    </>
  );
}
