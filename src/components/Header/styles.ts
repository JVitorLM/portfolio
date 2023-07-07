import styled from "styled-components";

export const Cabecalho = styled.header`
  height: 4.37rem;
  position: fixed;
  width: 100%;

  .fechado {
    display: none;
  }
`

export const BotaoMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: 2rem;
  width: 100%;
  
  svg {
    color: #2A324B;
    height: 2.18rem;
    width: 2.18rem;
  }
  
`

export const MenuLateral = styled.div`

  nav {
    background-color: #C7CCDB;
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 40vw;

    svg {
      color: #2A324B;
      width: 1.87rem;
      height: 1.87rem;
      margin: 1rem 0 0 1rem;
    }
    
    ul {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
      width: 100%;

      li {
        align-items: center;
        border-bottom: 3px solid #F7C59F;
        display: flex;
        height: 1.87rem;
        justify-content: center;
        list-style: none;
        padding: 1.2rem 0;
        width: 100%;

        a {
          color: #2A324B;
          text-decoration: none;

        }
      }
    }
  }
 
`