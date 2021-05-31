import { useCallback, useState } from 'react';

import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { FavoriteBorder as FavoteBorderIcon } from '@styled-icons/material/FavoriteBorder';

import * as S from './styles';

export type HeroInfoProps = {
  name: string;
  id: number;
  comics: number;
  series: number;
  stories: number;
  description?: string;
  wikiLink: string;
};

const HeroInfo = ({
  name,
  description,
  wikiLink,
  comics,
  series,
  stories,
}: HeroInfoProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorite = useCallback(() => {
    setIsFavorite(true);
  }, []);

  const handleRemoveFromFavorite = useCallback(() => {
    setIsFavorite(false);
  }, []);

  return (
    <S.Container>
      <S.HeroDetails>
        <S.Name>{name}</S.Name>

        {isFavorite ? (
          <S.IconWrapper onClick={handleRemoveFromFavorite}>
            <FavoteBorderIcon aria-label="Remove hero to favorites" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper onClick={handleAddToFavorite}>
            <FavoriteIcon aria-label="Add hero to favorites" />
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
