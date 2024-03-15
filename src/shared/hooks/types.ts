/****************************************
PhotosState
****************************************/

export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type ModPhotoFromAPI = {
  id: number;
  description: string;
  url: string;
};

export type PhotosState = {
  isPhotosLoading: boolean;
  photos: [] | ModPhotoFromAPI[];
  photosErrorMessage: string;
  getPhotos: (count?: number) => void;
};

export type PhotosSetterCallback = (state: PhotosState) => PhotosState;
export type PhotosStateCreator = (set: Function) => PhotosState;

/***************************************/
