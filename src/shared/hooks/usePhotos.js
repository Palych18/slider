import { create } from 'zustand';
import { API_BASE_URL } from '../config';
import { partial } from '../utils';
import { transformPhotos } from '../utils';

/**
 * @typedef {import('./types').PhotoFromAPI} PhotoFromAPI
 * @typedef {import('./types').PhotosState} PhotosState
 * @typedef {import('./types').PhotosSetterCallback} SetterCallback
 * @typedef {import('./types').PhotosStateCreator} Creator
 */

/**
 * @function getPhotos
 * @param {Function} set
 * @param {number} count
 * @throws {Error} If photos were not got
 * @returns {Promise<void>}
 */

const getPhotos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isPhotosLoading: true,
      photos: [],
      photosErrorMessage: '',
    }));
    const queryURL = `${API_BASE_URL}/photos`;
    const responce = await fetch(queryURL);
    let photosFromAPI = await responce.json();
    if (!photosFromAPI.length) throw new Error('No photos');
    photosFromAPI = typeof count === 'number'
      ? photosFromAPI.splice(0, count)
      : photosFromAPI;
    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isPhotosLoading: false,
      photos: transformPhotos(photosFromAPI),
      photosErrorMessage: '',
    }));
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isPhotosLoading: false,
      photos: [],
      photosErrorMessage: message,
    }));
  };
};

export const usePhotos = create(/** @type {Creator} */(set) => ({
  isPhotosLoading: false,
  photos: [],
  photosErrorMessage: '',
  getPhotos: partial(getPhotos, set),
}));
