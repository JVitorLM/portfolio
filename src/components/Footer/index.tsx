import { Rodape } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Footer() {

  return(

    <Rodape>
      <a href="https://github.com/JVitorLM?tab=repositories" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="mailto:joaovitorlira.melosjp@gmail.com" target="_blank" rel="noreferrer">
        <AiOutlineMail />
      </a>
    </Rodape>
  );
}