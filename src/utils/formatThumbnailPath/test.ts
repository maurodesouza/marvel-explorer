import { formatThumbnailPath } from '.';

describe('formatThumbnailPath', () => {
  it('should format the object in a string', () => {
    const datas = {
      path: 'path',
      extension: 'jpg',
    };

    const result = formatThumbnailPath(datas);

    expect(result).toEqual('path.jpg');
  });
});
