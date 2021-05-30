import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => (
  <S.Container>{children}</S.Container>
);

export default Heading;
