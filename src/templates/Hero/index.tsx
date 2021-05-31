import Image from 'next/image';
import { useRouter } from 'next/router';

import BaseTemplate from '../Base';

import HeroInfo from 'components/HeroInfo';
import Loading from 'components/Loading';

import * as S from './styles';

export type HeroTemplateProps = {
  id: number;
  name: string;
  description?: string;
  wikiLink: string;
  comics: number;
  series: number;
  stories: number;
  thumbnail: string;
};

const Hero = ({ thumbnail, ...rest }: HeroTemplateProps) => {
  const { isFallback } = useRouter();

  return (
    <BaseTemplate>
      {isFallback ? (
        <S.Center>
          <Loading />
        </S.Center>
      ) : (
        <>
          <S.ThumbnailWrapper>
            <Image src={thumbnail} layout="fill" objectFit="cover" />
          </S.ThumbnailWrapper>

          <S.InfoWrapper>
            <HeroInfo {...rest} />
          </S.InfoWrapper>
        </>
      )}
    </BaseTemplate>
  );
};

export default Hero;
