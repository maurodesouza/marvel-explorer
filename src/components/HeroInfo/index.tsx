import { useCallback, useState } from 'react';

import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material/FavoriteBorder';

import * as S from './styles';
import { useFavoriteHeroes } from 'hooks/useFavoriteHeroes';

export type HeroInfoProps = {
  name: string;
  id: number;
  comics: number;
  series: number;
  stories: number;
  description?: string;
  wikiLink: string;
  thumbnail: string;
};

const HeroInfo = ({
  id,
  name,
  description,
  thumbnail,
  wikiLink,
  comics,
  series,
  stories,
}: HeroInfoProps) => {
  const {
    isFavoriteHero,
    removeFavoriteHero,
    addFavoriteHero,
  } = useFavoriteHeroes();

  const [isFavorite, setIsFavorite] = useState(isFavoriteHero(id));

  const handleAddToFavorite = useCallback(() => {
    const heroData = {
      heroId: id,
      heroName: name,
      heroThumbnail: thumbnail,
    };

    setIsFavorite(true);
    addFavoriteHero(heroData);
  }, [addFavoriteHero, id, name, thumbnail]);

  const handleRemoveFromFavorite = useCallback(() => {
    setIsFavorite(false);
    removeFavoriteHero(id);
  }, [removeFavoriteHero, id]);

  return (
    <S.Container>
      <S.HeroDetails>
        <S.Name>{name}</S.Name>

        {isFavorite ? (
          <S.IconWrapper onClick={handleRemoveFromFavorite}>
            <FavoriteIcon aria-label="Remove hero to favorites" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleAddToFavorite}>
            <FavoriteBorderIcon aria-label="Add hero to favorites" />
          </S.IconWrapper>
        )}

        <S.Infos>
          <S.InfoBox>
            <S.Label>Comics</S.Label>
            <S.Value>{comics}</S.Value>
          </S.InfoBox>

          <S.InfoBox>
            <S.Label>Series</S.Label>
            <S.Value>{series}</S.Value>
          </S.InfoBox>

          <S.InfoBox>
            <S.Label>Stories</S.Label>
            <S.Value>{stories}</S.Value>
          </S.InfoBox>
        </S.Infos>
      </S.HeroDetails>

      <S.Content>
        {description && <S.Description>{description}</S.Description>}
        <S.SeeMore href={wikiLink} target="_blank" rel="noreferrer">
          See more
        </S.SeeMore>
      </S.Content>
    </S.Container>
  );
};

export default HeroInfo;
