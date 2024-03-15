import './styles/index.scss';
import { useEffect } from 'react';
import { Slider } from 'features';
import { usePhotos } from 'shared';

export const App = () => {
  const photosState = usePhotos();

  useEffect(() => {
    photosState.getPhotos(4);
  }, []);

  return (
    <div className={'app'}>
      {photosState.photos.length > 0 && <Slider slides={photosState.photos} />}
    </div>
  );
};
