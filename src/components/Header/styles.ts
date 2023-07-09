import styled from "styled-components";

export const Menu = styled.div`
  display: none;

  @media (min-width: 1279px) {
    display: flex;
    height: 100%;
    width: 100%;

    nav {
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: 100%;

      ul {
        align-items: center;
        display: flex;
        gap: 3rem;
        justify-content: center;

        li {
          cursor: pointer;
          list-style: none;
          position: relative;

          &::after {
            background-color: #E1E5EE;
            bottom: -5px;
            content: "";
            height: 4px;
            left: 0;
            position: absolute;
            transition: all 1s ease-in-out;
            width: 0%;
          }

          &:hover::after {
            transition: all 1s;
            width: 100%;
          }
        }
      }
    }
  }
`

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
    color: #E1E5EE;
    height: 2.18rem;
    width: 2.18rem;
  }
  
  @media (min-width: 1279px) {
    display: none;
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

  @media (min-width: 481px) {

    nav {
      width: 30vw;
    }
  }

  @media (min-width: 769px) {

    nav {
      width: 20vw;
    }
  }

  @media (min-width: 1279px) {
    display: none;
  }
 
`