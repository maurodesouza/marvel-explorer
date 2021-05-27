import * as S from './styles';

const Footer = () => (
  <S.Container>
    <S.MadeBy>
      Made with ❤ by{' '}
      <a
        href="https://www.linkedin.com/in/maurodesouzaa/"
        target="_blank"
        rel="noreferrer"
      >
        Mauro de Souza
      </a>{' '}
    </S.MadeBy>

    <S.Copy>Data provided by Marvel. © 2020 MARVEL</S.Copy>
  </S.Container>
);

export default Footer;
