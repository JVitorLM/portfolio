import { memo, useState } from "react";
import { BotaoMenu, MenuLateral, Cabecalho, Menu } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Header() {

  const [nav, setNav] = useState(false)

  function mostrar() {

    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  }

  return (
    <Cabecalho>
      <Menu>
        <nav>
          <h1>{'<JVLDM />'}</h1>
          <ul>
            <li>
              <Link to="sobremim"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}>Sobre Mim</Link>
            </li>
            <li>
              <Link to="projetos"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}>Projetos</Link>
            </li>
            <li>
              <Link to="habilidades"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}>Habilidades</Link>
            </li>
          </ul>
        </nav>
      </Menu>
      <BotaoMenu onClick={mostrar}>
        <AiOutlineMenu className={nav ? 'fechado' : ''} />
      </BotaoMenu>
      <MenuLateral>
        <nav className={nav ? '' : 'fechado'}>
          <AiOutlineClose onClick={mostrar} />
          <ul>
            <li>
              <Link to="sobremim"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={mostrar}>Sobre Mim</Link>
            </li>
            <li>
              <Link to="projetos"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                onClick={mostrar}>Projetos</Link>
            </li>
            <li>
              <Link to="habilidades"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                onClick={mostrar}>Habilidades</Link>
            </li>
          </ul>
        </nav>
      </MenuLateral>
    </Cabecalho>
  );
}

export default memo(Header);