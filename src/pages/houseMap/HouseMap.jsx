import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { DivMap, ButtonMp } from "./HouseMapElememnt";
import "mapbox-gl/dist/mapbox-gl.css";

function MapView({ className }) {
  const [lng, setLng] = useState(37.09024);
  const [lat, setLang] = useState(95.712891);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco"
    )
      .then((res) => res.json())
      .then((data) => {
        const infLocation = mapList(data);
        setData(infLocation);
      });
  }, []);

  const mapList = (house) => {
    let houseList = [];
    Object.keys(house).map((key) => {
      const value = house[key];
      value.map((info) => {
        const result = {
          id: info.id,
          lat: info.location.latitude,
          lng: info.location.longitude,
        };
        houseList.push(result);
      });
    });
    return houseList;
  };

  return (
    <DivMap>
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGhlZmFoaSIsImEiOiJjbGZzZjd1ZmwwNWh1M2hwand2MXVlMWI5In0.Uoat8DGAGABIoB0PZ2jyQw"
        style={{ width:"100%", height: "100vh"  }}
        initialViewState={{
          center: [lng, lat],
          zoom: 0
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {data.map((inf) => (
          <Marker key={inf.id} longitude={inf.lng} latitude={inf.lat}>
            <ButtonMp>{inf.id}</ButtonMp>
          </Marker>
        ))}
      </Map>
    </DivMap>
  );
}

export default MapView;
