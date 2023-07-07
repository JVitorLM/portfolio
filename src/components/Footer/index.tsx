import { Rodape } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Footer() {

  return(

    <Rodape>
      <a href="https://github.com/JVitorLM?tab=repositories">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/feed/">
        <AiFillLinkedin />
      </a>
      <a href="mailto:joaovitorlira.melosjp@gmail.com">
        <AiOutlineMail />
      </a>
    </Rodape>
  );
}