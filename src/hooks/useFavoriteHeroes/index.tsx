import { createContext, useCallback, useContext } from 'react';

export type HeroData = {
  heroId: number;
  heroThumbnail: string;
  heroName: string;
};

type FavoriteHeroesContextData = {
  addFavoriteHero: (heroData: HeroData) => void;
  removeFavoriteHero: (id: number) => void;
  getFavoriteHeroes: () => HeroData[];
  isFavoriteHero: (id: number) => boolean;
};

type FavoriteHeroesProviderProps = {
  children: React.ReactNode;
};

export const storageKey = '@MarvelExplorer:favorite_heroes';

const FavoriteHeroesContext = createContext<FavoriteHeroesContextData>(
  {} as FavoriteHeroesContextData
);

const FavoriteHeroesProvider = ({ children }: FavoriteHeroesProviderProps) => {
  const getFavoriteHeroes = useCallback((): HeroData[] => {
    const storagedHeroes = localStorage.getItem(storageKey);

    if (storagedHeroes) return JSON.parse(storagedHeroes);

    return [];
  }, []);

  const addFavoriteHero = useCallback(
    (heroData: HeroData) => {
      const favoriteHeroes = getFavoriteHeroes();
      const newFavoriteHeroes = [...favoriteHeroes, heroData];

      localStorage.setItem(storageKey, JSON.stringify(newFavoriteHeroes));
    },
    [getFavoriteHeroes]
  );

  const removeFavoriteHero = useCallback(
    (id: number) => {
      const favoriteHeroes = getFavoriteHeroes();
      const newFavoriteHeroes = favoriteHeroes.filter(
        hero => hero.heroId !== id
      );

      localStorage.setItem(storageKey, JSON.stringify(newFavoriteHeroes));
    },
    [getFavoriteHeroes]
  );

  const isFavoriteHero = useCallback(
    (id: number) => {
      const favoriteHeroes = getFavoriteHeroes();
      const isFavorite = !!favoriteHeroes.find(
        hero => Number(hero.heroId) === id
      );

      return isFavorite;
    },
    [getFavoriteHeroes]
  );

  return (
    <FavoriteHeroesContext.Provider
      value={{
        addFavoriteHero,
        removeFavoriteHero,
        getFavoriteHeroes,
        isFavoriteHero,
      }}
    >
      {children}
    </FavoriteHeroesContext.Provider>
  );
};

const useFavoriteHeroes = (): FavoriteHeroesContextData =>
  useContext(FavoriteHeroesContext);

export { useFavoriteHeroes, FavoriteHeroesProvider };
