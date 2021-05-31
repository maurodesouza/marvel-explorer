import { createContext, useCallback, useContext } from 'react';
import { getStorageItem, setStorageItem } from 'utils/storage';

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

export const storageKey = 'favorite_heroes';

const FavoriteHeroesContext = createContext<FavoriteHeroesContextData>(
  {} as FavoriteHeroesContextData
);

const FavoriteHeroesProvider = ({ children }: FavoriteHeroesProviderProps) => {
  const getFavoriteHeroes = useCallback((): HeroData[] => {
    const storagedHeroes = getStorageItem(storageKey);

    return storagedHeroes || [];
  }, []);

  const addFavoriteHero = useCallback(
    (heroData: HeroData) => {
      const favoriteHeroes = getFavoriteHeroes();

      setStorageItem(storageKey, [...favoriteHeroes, heroData]);
    },
    [getFavoriteHeroes]
  );

  const removeFavoriteHero = useCallback(
    (id: number) => {
      const favoriteHeroes = getFavoriteHeroes();
      const newFavoriteHeroes = favoriteHeroes.filter(
        hero => hero.heroId !== id
      );

      setStorageItem(storageKey, newFavoriteHeroes);
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
