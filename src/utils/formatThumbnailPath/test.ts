import { formatThumbnailPath } from '.';

describe('formatThumbnailPath', () => {
  it('should render the {{ name }}', () => {
    const datas = {
      path: 'path',
      extension: 'jpg',
    };

    const result = formatThumbnailPath(datas);

    expect(result).toEqual('path.jpg');
  });
});
