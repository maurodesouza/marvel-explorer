import { GetStaticPaths, GetStaticProps } from 'next';

import { api } from 'services/api';
import { ApiHeroProps } from 'types/api';

import HeroTemplate, { HeroTemplateProps } from 'templates/Hero';
import { formatThumbnailPath } from 'utils/formatThumbnailPath';

type HeroPageProps = {
  hero?: HeroTemplateProps;
};

const Hero = ({ hero }: HeroPageProps) => {
  return <HeroTemplate {...hero!} />;
};

export default Hero;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HeroPageProps> = async ({
  params,
}) => {
  const id = (params?.id as unknown) as number;

  if (isNaN(id)) return { props: {}, redirect: { destination: '/404' } };

  try {
    const {
      data: {
        data: { results },
      },
    } = await api.get(`/characters/${id}`);

    const hero = results[0] as ApiHeroProps;

    const formatedHeroDatas = {
      id: hero.id,
      name: hero.name,
      description: hero.description,
      wikiLink: hero.urls[1].url,
      comics: hero.comics.available,
      series: hero.series.available,
      stories: hero.stories.available,
      thumbnail: formatThumbnailPath(hero.thumbnail),
    };

    return {
      props: {
        hero: formatedHeroDatas,
      },
    };
  } catch (err) {
    return { props: {}, redirect: { destination: '/404' } };
  }
};
