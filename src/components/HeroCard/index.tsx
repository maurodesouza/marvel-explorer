import { useCallback, useState } from 'react';

import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { FavoriteBorder as FavoteBorderIcon } from '@styled-icons/material/FavoriteBorder';

import { useFavoriteHeroes, HeroData } from 'hooks/useFavoriteHeroes';
import * as S from './styles';

export type HeroCardProps = HeroData;

const HeroCard = ({ heroId, heroName, heroThumbnail }: HeroCardProps) => {
  const {
    isFavoriteHero,
    removeFavoriteHero,
    addFavoriteHero,
  } = useFavoriteHeroes();

  const [isFavorite, setIsFavorite] = useState(isFavoriteHero(heroId));

  const handleAddToFavorite = useCallback(() => {
    const heroData = {
      heroId,
      heroName,
      heroThumbnail,
    };

    addFavoriteHero(heroData);
    setIsFavorite(true);
  }, [heroId, heroName, heroThumbnail, addFavoriteHero]);

  const handleRemoveFromFavorite = useCallback(() => {
    removeFavoriteHero(heroId);
    setIsFavorite(false);
  }, [heroId, removeFavoriteHero]);

  return (
    <S.Container>
      <S.HeroImage src={heroThumbnail} alt={heroName} />
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