type Url = {
  type: string;
  url: string;
};

type Thumbnail = {
  extension: string;
  path: string;
};

type Details = {
  available: number;
};

export type ApiHeroProps = {
  name: string;
  id: number;
  description: string;
  thumbnail: Thumbnail;
  comics: Details;
  stories: Details;
  series: Details;
  urls: Url[];
};
