import styled from "styled-components";


export const Conteudo = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: 100%;
  padding: 6.25rem 2rem 0 2rem;
  width: 100%;

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
  }
`

export const SobreMim = styled.section`
align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  margin: 3rem 0;

  img {
    border-radius: 1rem;
    height: 14rem;
    width: 100%;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
  }

  @media (min-width: 1279px) {

    img {
      height: 18rem;
      width: 25%;
    }
  }
`

export const Projetos = styled.section`
  margin: 3rem 0;

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      height: 100%;
      width: 100%;

      h3 {
        text-align: center;
      }

      img {
        height: 9.37rem;
        width: 100%;
      }

      div {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;

        a {
          color: #767B91;
          font-size: 2rem;
          transition: all 1s;

          &:hover {
            color: #E1E5EE;
            transition: all 1s;
            font-size: 3rem;
          }
        }
      }
    }
  }

  @media (min-width: 1279px) {
    margin-top: 6rem;

    ul {
      flex-direction: row;
      margin-top: 5rem;

      li {
        align-items: center;

        img {
          width: 50%;
        }
      }
    }
  }
`
export const Habilidades = styled.section`
  margin: 3rem 0 0 0;
  padding-bottom: 2rem;

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 0;

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      list-style: none;
      width: 7.5rem;

      svg {
        height: 1.87rem;
        transition: all 2s;
        width: 1.87rem;

        &:hover {
          height: 4rem;
          transition: all 1s;
          width: 4rem;
        }
      }

      h3 {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1279px) {
    margin: 10rem 30rem 7rem 30rem;

    ul {
      margin-top: 2rem;
      gap: 4rem;
    }
  }
`
