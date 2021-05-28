import { useCallback, useState } from 'react';
import axios from 'axios';

import Empty from 'components/Empty';
import Footer from 'components/Footer';

import Heading from 'components/Heading';
import Menu from 'components/Menu';

import Search from 'components/Search';
import ShowWhen from 'components/ShowWhen';

import HeroesGrid from 'components/HeroesGrid';
import HeroCard from 'components/HeroCard';

import { formatThumbnailPath } from 'utils/formatThumbnailPath';
import { ApiHeroProps } from 'types/api';

import * as S from './styles';
import Loading from 'components/Loading';

const HomeTemplate = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [heroes, setHeroes] = useState<ApiHeroProps[]>([]);

  const handleSearch = useCallback(async (value: string) => {
    setError('');
    setLoading(true);

    try {
      const { data } = await axios.get('/api/characters', {
        params: {
          name: value,
        },
      });

      setHeroes(data.results);
    } catch (err) {
      console.error(err);

      const error =
        err.response?.data?.error ||
        'An error has occurred, try again or come back soon';

      setError(error);
    }

    setLoading(false);
  }, []);

  return (
    <S.Container>
      <Menu />
      <Heading>Search for your favorites Marvel heroes</Heading>
      <Search error={error} onSubmit={handleSearch} />

      <S.Results>
        <ShowWhen condition={loading}>
          <Loading />
        </ShowWhen>

        <ShowWhen condition={!loading && !heroes.length}>
          <Empty
            imagePath="/images/no-search.svg"
            imageAlt="A magnifying glass with sad face and with some bubbles in the background"
          >
            Search for heroes
          </Empty>
        </ShowWhen>

        <ShowWhen condition={!loading && !!heroes.length}>
          <HeroesGrid>
            {heroes.map(hero => (
              <HeroCard
                key={hero.id}
                heroId={hero.id}
                heroName={hero.name}
                heroThumbnail={formatThumbnailPath(hero.thumbnail)}
              />
            ))}
          </HeroesGrid>
        </ShowWhen>
      </S.Results>
      <Footer />
    </S.Container>
  );
};

export default HomeTemplate;
