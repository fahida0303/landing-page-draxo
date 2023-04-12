import styled from "styled-components";
import { devices } from "../../theme/Breakpoints";

export const Article = styled.div`
  display: flex;
  width: 54%;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  background: black;
  width: 51%;
  height: 100vh;
  display: grid;
  grid-template-columns: 133% 1fr;
  grid-template-rows: 10rem 10rem;


  @media ${devices.tablet} {
    width: 71%;
  }
  @media ${devices.mobileL} {
    margin: 20px;
    width: 100%;
    display: block;
    background: none;
  }
  `;

export const Hr = styled.hr`
  color: #3c3c3c;
  position: absolute;
  opacity: 0.2;
  left: 37px;
  position: absolute;
  width: 20%;
  margin: 4em 0;


  /* @media ${devices.mobileI} {
    color: black;
    opacity: 1.5;
    left: 80px;
    width: 61%;
  } */
  @media ${devices.mobileL} {
    opacity: 1.5;
    color: black;
    left: 80px;
    width: 61%;
  }
  @media ${devices.mobileM} {
    width: 50%;
    opacity: 1;
  }
  @media ${devices.mobileS} {
    left: 62px;
    width: 80%;
  }
`;

export const Icon = styled.li`
  color: #ffff;
  display: flex;
  align-items: flex-end;

  ion-icon {
    color: #ffff;
    font-size: 20px;
    margin: 24px 19px 10px 10px;
    padding: 10px;
    border-radius: 50%;
    background: #262626;

    @media ${devices.mobileM} {
      font-size: 14px;
    }
  }

  ion-icon:hover {
    background: #927bef;
  }

  &:hover {
    color: #927bef;
  }

  .link {
    color: #ffff;
    text-decoration: none;
    margin: 0px 0px 20px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    &:hover {
      color: #927bef;
    }

    @media ${devices.mobileL} {
      font-size: 0px;
      margin: 2px 25px 0px 26px;
    }
  }
`;

export const Ul = styled.ul`
  padding: 80px 10px 0px;
  font-family: "Open Sans", sans-serif;

  @media ${devices.mobileI} {
    display: flex;
    padding: 0px;
    /* margin-left: 24px; */
  }
  @media ${devices.mobileL} {
    display: flex;
    padding: 0px;
    /* margin-left: 24px; */
  }
`;

export const Continer = styled.div`
  border: 1px solid black;
`;
