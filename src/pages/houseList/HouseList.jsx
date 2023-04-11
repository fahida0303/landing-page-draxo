import { useState, useEffect } from "react";
import {useCollapse} from 'react-collapsed';
import {Hr,Img, Div, Module, Button, H6, ContinerL,H3, P1} from './listElement';




function HouseList(){

  const [data,setData] = useState([])

useEffect(() => {
   fetch('https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco')
   .then((res) => res.json())
   .then((data) => {
      setData(data) 
     console.log(data);
   })
 }, [])

 const [isExpanded, setExpanded] = useState(false)
 const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
 
  return(
    <ContinerL>
      {
        Object.keys(data).sort().map(key => {
          const value = data[key]
          console.log(value);
          return <div>
            <H3 key={key}>{key}</H3>
            
            {value.map(inf => {

             
              return <div>
               <Hr></Hr>     
              <Module>
              <Img src={inf.url} alt="images house"></Img>
              <Div>
              <H6 className="list-group-item fs-5">No.{inf.id}{inf.name},{inf.building_end_date}-{inf.building_start_date}</H6>
                <P1>{inf.address}</P1>
                <Button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
        {isExpanded ? 'Ver menos' : 'Ver'}
       <p {...getCollapseProps()}>{inf.description},{inf.states_name},{inf.city_latitude},{inf.city_longitude}</p>
      </Button>
      </Div>
              </Module>
              </div>
            })}
          </div>
        })
      }
   </ContinerL>
 )
}



export default HouseList;
