import { NavLink } from 'react-router-dom';
import {Hr, Icon, Ul, Nav, Article} from "../menu/menuElements";



//const gif = lazy(()=>import("../Spinner-1s-200px.svg"))




function Menu({className}){
  return <Article>
  <Nav>
   <Hr/>
   <Ul>
   <Icon>
     <NavLink className="link" to="map-view">Mapa
     <ion-icon class="location-outline"  name="location-outline"></ion-icon>
     </NavLink>
   </Icon>

   <Icon>
   <NavLink className="link"   to="/">Lista de casas
   <ion-icon  className="ion-icon"  name="layers-outline"></ion-icon>
   </NavLink>
   </Icon>

   <Icon>
     <NavLink className="link" to="acerca-de">Acerca de
     <ion-icon class="menu-outline" name="menu-outline"></ion-icon>
     </NavLink>
   </Icon>
   </Ul>
</Nav>
</Article>
};


export default Menu;
