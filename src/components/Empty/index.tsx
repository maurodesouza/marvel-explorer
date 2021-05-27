import * as S from './styles';

export type EmptyProps = {
  imagePath?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

const Empty = ({ imagePath, imageAlt, children }: EmptyProps) => {
  return (
    <S.Container>
      {imagePath && <S.Image src={imagePath} alt={imageAlt} />}
      {children && <S.Content>{children}</S.Content>}
    </S.Container>
  );
};

export default Empty;
