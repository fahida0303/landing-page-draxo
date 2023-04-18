import React, {useEffect, useState} from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/menu"
import {DivPage} from "./appElement"
import spinner from "../src/assets/Spinner-1s-200px.svg"


function App() {
  const [loanding, setLoanding] = useState(false)
  
  useEffect(()=>{
    setLoanding(true)
    setTimeout(()=>{
      setLoanding(false)
    },600)
  })

  return (
    <>
    <Navbar />
    <DivPage>
    <Menu/>
    {
      loanding?
      <img src={spinner} style={{width:"20%", height:"14%", margin:"15rem 40px 0px 10px"}} ></img>
      :
      <Outlet></Outlet>
    }
    </DivPage>
    </>
  )
}

export default App;
