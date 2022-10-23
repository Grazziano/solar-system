import React from 'react';
import { Container, Image, Link, Paragraph } from './styles';
import githubSvg from '../../assets/github.svg';
import linkedinSvg from '../../assets/linkedin-circled.svg';

function Footer() {
  return (
    <Container>
      <Paragraph>
        Desenvolvido por &copy; &nbsp;
        <Link
          href="https://www.linkedin.com/in/grazziano-fagundes/"
          target="_blank"
        >
          Grazziano B. Fagundes
        </Link>
      </Paragraph>

      <nav>
        <Link
          href="https://www.linkedin.com/in/grazziano-fagundes/"
          target="_blank"
        >
          <Image src={linkedinSvg} alt="Linkedin" />
        </Link>
        <Link href="https://github.com/Grazziano" target="_blank">
          <Image src={githubSvg} alt="GitHub" />
        </Link>
      </nav>
    </Container>
  );
}

export default Footer;
