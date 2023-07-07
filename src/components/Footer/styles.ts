import styled from "styled-components";

export const Rodape = styled.footer`
  align-items: center;
  border-top: 2px solid #000000;
  display: flex;
  gap: 2rem;
  height: 6.25rem;
  justify-content: center;
  width: 100%;

  a {
    font-size: 2rem;

    &:nth-child(1) {
      color: #767B91;
    }
    
    &:nth-child(2) {
      color: blue;
    }

    &:nth-child(3) {
      color: #767B91;
    }
  }
`