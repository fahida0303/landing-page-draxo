import styled from "styled-components";
import { devices } from '../../theme/Breakpoints';

export const DivMap = styled.div`
  width: 80%;
  height: auto;
  position: absolute;
  left: 18rem;

  @media ${devices.laptop} {
    width: 80%;
    left: 14rem;
  }
  @media ${devices. tablet} {
    left: 18.5rem;
  }
  @media ${devices.mobileL} {
    top: 13rem;
    left: 32px;
  }
`;
export const ButtonMp = styled.button`
  background: red;
  color: #ffff;
  width: 32px;
  height: 34px;
  display: block;
  border-radius: 24px;
  border: none;
`;
