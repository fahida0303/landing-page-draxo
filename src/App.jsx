import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/menu"
import {DivPage} from "./appElement"

function App() {
  return (
    <>
    <Navbar />
    <DivPage>
    <Menu/>
      <Outlet></Outlet>
    </DivPage>
    </>
  )
}

export default App;
