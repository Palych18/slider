/**
 * @typedef {import('./types').PhotoFromAPI} PhotoFromAPI
 * @typedef {import('./types').ModPhotoFromAPI} ModPhotoFromAPI
 */

/**
 * @transformPhotos
 * @param {PhotoFromAPI[]} photos
 * @return {ModPhotoFromAPI[]}
 */

export const transformPhotos = (photos) => photos.map((photo) => ({
  id: photo.id,
  description: photo.title,
  url: photo.url,
}));
