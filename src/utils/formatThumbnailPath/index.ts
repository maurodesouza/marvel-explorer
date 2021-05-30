type Thumbnail = { path: string; extension: string };

export const formatThumbnailPath = ({ path, extension }: Thumbnail) =>
  `${path}.${extension}`;
