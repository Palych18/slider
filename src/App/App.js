import './styles/index.scss';
import { useEffect } from 'react';
import { Slider } from 'features';
import { usePhotos } from 'shared';

export const App = () => {
  const photosState = usePhotos();

  useEffect(() => {
    photosState.getPhotos(4);
  }, []);

  console.log(photosState.photos);

  return (
    <div className={'app'}>
      <Slider slides={[]} />
    </div>
  );
};
