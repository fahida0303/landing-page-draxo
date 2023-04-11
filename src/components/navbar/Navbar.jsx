import logo from "../../assets/logo-draxo.png";
import { Container, LogoContainer, ListContainer, H6, H4} from "./navbarElements";


const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} className="App-logo " alt="logo"></img>
        <ion-icon name="reorder-four-outline"></ion-icon>
      </LogoContainer>
      <ListContainer>
        <H4>Lista de Casas</H4>
        <H6>Lista de casas en san Francisco</H6>
      </ListContainer>
    </Container>
  );
};

export default Navbar;
