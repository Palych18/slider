import { transformPhotos } from './transformPhotos';

const dataForTest = {
  test1: {
    photos: [
      {
        albumId: 1,
        id: 1,
        title: 'Some description 1',
        url: 'https://some_url.com/1',
        thumbnailUrl: 'https://some_url.com/1',
      },
      {
        albumId: 1,
        id: 2,
        title: 'Some description 2',
        url: 'https://some_url.com/2',
        thumbnailUrl: 'https://some_url.com/2',
      },
    ],
    expectedModPhotos: [
      {
        id: 1,
        description: 'Some description 1',
        url: 'https://some_url.com/1',
      },
      {
        id: 2,
        description: 'Some description 2',
        url: 'https://some_url.com/2',
      },
    ],
  },
};

describe('transformPhotos', () => {
  it('Unit test 1', () => {
    const { photos, expectedModPhotos } = dataForTest.test1;
    const modPhotos = transformPhotos(photos);
    expect(modPhotos).toStrictEqual(expectedModPhotos);
  });
});
