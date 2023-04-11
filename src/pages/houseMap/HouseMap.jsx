import React, {useEffect, useState} from "react";
import Map, {Marker} from "react-map-gl";
import {DivMap, ButtonMp, } from './HouseMapElememnt'
import 'mapbox-gl/dist/mapbox-gl.css';





function MapView({className,props}){

  const [lng,setLng]=useState(37.7749295)
  const [lat,setLang]=useState(-122.4194155)
  


  const [data,setData] = useState([])
  useEffect(() => {
    fetch('https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco')
    .then((res) => res.json())
    .then((data) => {
       setData(data) 
      //console.log(data);
    })
  }, [])

  
  

  return <DivMap>
  <Map
  mapboxAccessToken="pk.eyJ1IjoidGhlZmFoaSIsImEiOiJjbGZzZjd1ZmwwNWh1M2hwand2MXVlMWI5In0.Uoat8DGAGABIoB0PZ2jyQw"
  style={{width:"79vw", height:"100vh"}}
  initialViewState={{
    center: [lng, lat]
  }}
  mapStyle="mapbox://styles/mapbox/streets-v12"
  >
    {/* <Marker longitude={-100} latitude={40} anchor="bottom" >
    <ButtonMp>132
      </ButtonMp>
    </Marker> */}
       
{Object.keys(data).map(key => {
  const value = data[key];
  value.map(inf =>{
 <Marker 
 Key={inf} 
 latitude={console.log(parseFloat(inf.location.latitude))} 
 longitude={console.log(parseFloat(inf.location.longitude))}
 anchor="bottom">
  
  <ButtonMp>
        {inf.id}
      </ButtonMp>
 </Marker>
   })
  })}
  </Map>
</DivMap>
 }

export default MapView;
