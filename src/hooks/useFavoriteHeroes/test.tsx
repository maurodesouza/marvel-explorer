import { renderHook, act } from '@testing-library/react-hooks';
import { APP_KEY } from 'utils/storage';

import { useFavoriteHeroes, FavoriteHeroesProvider, storageKey } from '.';

const heroData = {
  heroId: 123,
  heroName: 'Iron man',
  heroThumbnail:
    'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
};

const fullStorageKey = `${APP_KEY}${storageKey}`;

describe('use favorites heroes hook', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should add a favorite hero in storage', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    act(() => {
      result.current.addFavoriteHero(heroData);
    });

    const heroes = JSON.parse(window.localStorage.getItem(fullStorageKey)!);

    expect(heroes).toEqual([heroData]);
  });

  it('should remove a favorite hero from storage', () => {
    window.localStorage.setItem(fullStorageKey, JSON.stringify([heroData]));

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    act(() => {
      result.current.removeFavoriteHero(heroData.heroId);
    });

    const heroes = JSON.parse(window.localStorage.getItem(fullStorageKey)!);

    expect(heroes).toEqual([]);
  });

  it('should return true if hero is saved as favorite', () => {
    window.localStorage.setItem(fullStorageKey, JSON.stringify([heroData]));

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    let isFavorite;

    act(() => {
      isFavorite = result.current.isFavoriteHero(heroData.heroId);
    });

    expect(isFavorite).toBeTruthy();
  });

  it('should return false if hero is not saved as favorite', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    let isFavorite;

    act(() => {
      isFavorite = result.current.isFavoriteHero(heroData.heroId);
    });

    expect(isFavorite).toBeFalsy();
  });

  it('should return all saved heroes', () => {
    window.localStorage.setItem(
      fullStorageKey,
      JSON.stringify([heroData, heroData, heroData])
    );

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    let heroes;

    act(() => {
      heroes = result.current.getFavoriteHeroes();
    });

    expect(heroes).toHaveLength(3);
  });

  it('should return an empty array if no one hero was saved', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    );
    const { result } = renderHook(() => useFavoriteHeroes(), { wrapper });

    let heroes;

    act(() => {
      heroes = result.current.getFavoriteHeroes();
    });

    expect(heroes).toHaveLength(0);
  });
});
