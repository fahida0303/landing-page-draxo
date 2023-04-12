import React, {Suspense, lazy} from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/menu"
import {DivPage} from "./appElement"
const loanding = lazy(()=>import('./assets/Spinner-1s-200px.svg'))
function App() {
  return (
    <>
    <Navbar />
    <DivPage>
    <Menu/>
    <Suspense fallback={<img></img>}>
      <Outlet></Outlet>
    </Suspense>
    </DivPage>
    </>
  )
}

export default App;
