import { Conteudo, Habilidades, Projetos, SobreMim } from "./styles";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLink } from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import Preto from '../../assets/img/preto.png';
import FotoPerfil from '../../assets/img/foto-perfil.png';
import PortfolioImagem from '../../assets/img/portfolio-imagem.png';

export default function Main() {

  return (
    <Conteudo>
      <SobreMim id="sobremim">
        <h2>Sobre Mim</h2>
        <div>
          <img src={FotoPerfil} alt="Foto de perfil" />
          <p>Meu nome é João Vitor, tenho 19 anos, sou um programador Front-End e estou estudando programação há 9 meses.</p>
        </div>
      </SobreMim>

      <Projetos id="projetos">
        <h2>Projetos</h2>
        <ul>
          <li>
            <h3>Portfólio</h3>
            <img src={PortfolioImagem} alt="" />
            <div>
              <a href="https://github.com/JVitorLM/portfolio" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://portfolio-nu-woad-79.vercel.app/?vercelToolbarCode=2L4CTyf5UY0l4zo" target="_blank" rel="noreferrer">
                <BiLink />
              </a>
            </div>
          </li>
          <li>
            <h3>???</h3>
            <img src={Preto} alt="" />
            <div>
              <a href="#" target="_blank" rel="noreferrer"> 
                <AiFillGithub />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <BiLink />
              </a>
            </div>
          </li>
        </ul>
      </Projetos>
      
      <Habilidades id="habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li >
            <AiFillHtml5 style={{ color: "#ff0000" }} />
            <h3>HTML5</h3>
          </li>
          <li>
            <BiLogoCss3 style={{ color: "#0000ff" }} />
            <h3>CSS</h3>
          </li>
          <li>
            <DiSass style={{ color: "#f07287" }} />
            <h3>SASS</h3>
          </li>
          <li>
            <BiLogoJavascript style={{ color: "#ffff00" }}/>
            <h3>JAVASCRIPT</h3>
          </li>
          <li>
            <BiLogoTypescript style={{ color: "#0000ff" }} />
            <h3>TYPESCRIPT</h3>
          </li>
          <li>
            <GrReactjs style={{ color: "#00ffff" }} />
            <h3>REACTJS</h3>
          </li>
        </ul>
      </Habilidades>
    </Conteudo>
  );
}