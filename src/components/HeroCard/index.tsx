import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { FavoriteBorder as FavoteBorderIcon } from '@styled-icons/material/FavoriteBorder';

import { useFavoriteHeroes, HeroData } from 'hooks/useFavoriteHeroes';
import * as S from './styles';
import Image from 'next/image';

export type HeroCardProps = HeroData;

const HeroCard = ({ heroId, heroName, heroThumbnail }: HeroCardProps) => {
  const {
    isFavoriteHero,
    removeFavoriteHero,
    addFavoriteHero,
  } = useFavoriteHeroes();

  const { push } = useRouter();

  const [isFavorite, setIsFavorite] = useState(isFavoriteHero(heroId));

  const handleAddToFavorite = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      const heroData = {
        heroId,
        heroName,
        heroThumbnail,
      };

      addFavoriteHero(heroData);
      setIsFavorite(true);
    },
    [heroId, heroName, heroThumbnail, addFavoriteHero]
  );

  const handleRemoveFromFavorite = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      removeFavoriteHero(heroId);
      setIsFavorite(false);
    },
    [heroId, removeFavoriteHero]
  );

  return (
    <S.Container onClick={() => push(`/characters/${heroId}`)}>
      <S.ImageWrapper>
        <Image
          src={heroThumbnail}
          layout="fill"
          objectFit="cover"
          alt={heroName}
        />
      </S.ImageWrapper>
      <S.HeroContent>
        <S.HeroName>{heroName}</S.HeroName>

        {isFavorite ? (
          <S.IconWrapper onClick={handleRemoveFromFavorite}>
            <FavoteBorderIcon aria-label="Remove hero to favorites" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleAddToFavorite}>
            <FavoriteIcon aria-label="Add hero to favorites" />
          </S.IconWrapper>
        )}
      </S.HeroContent>
    </S.Container>
  );
};

export default HeroCard;
