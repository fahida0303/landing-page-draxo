import styled from "styled-components";
import { devices } from './theme/Breakpoints';

export  const DivPage = styled.div`
display: flex;


@media ${devices.mobileL} {
  flex-direction: column;
  position: relative;
  top: -4rem;
}
`