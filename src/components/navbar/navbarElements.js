import styled from "styled-components";
import {
  devices
} from "../../theme/Breakpoints";

export const Container = styled.div `
  border-bottom: 1px solid #d4d4d4;
  display: flex;
`;

export const LogoContainer = styled.div `
  width: 363px;
  height: 95px;
  align-items: center;
  display: flex;
  justify-content: center;

  ion-icon {
    color: gray;
    font-size: 13px;
    margin: 23px 19px 10px 9px;
    padding: 4px;
    border-radius: 37%;
    border: 1px solid gray;
    background: #ffff;
    display: none;
  }

  .App-logo {
    @media ${devices.tablet} {
      width: 190px;
      height: 77px;
    }
  }
`;

export const ListContainer = styled.div `
  display: flex;
  font-family: "Open Sans", sans-serif;
  flex-direction: column;
  font-style: italic;
  left: 450px;
  top: 4px;
  position: absolute;
  align-items: center;

  @media ${devices.mobileL} {
    left: 162px;
    top: 241px;
    position: absolute;
    text-align: center;
  }

  @media ${devices.mobileL} {
    left: 130px;
  }

  @media ${devices.mobileS} {
    left: 52px;
    margin-left: 38px;
  }
`;

export const H4 = styled.h4 `
  font-size: 23px;
  font-style: normal;
  font-weight: 510;
  line-height: 29px;
`;

export const H6 = styled.h6 `
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #7d7d7d;
  top: 25px;
  position: absolute;
  width: 409px;
  left: 0px;

  @media ${devices.mobileL} {
    left: -135px;
  }
`;