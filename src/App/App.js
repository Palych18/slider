import classes from './App.module.scss';
import { Slider } from 'Slider';

export const App = () => {
  return (
    <div className={classes.app}>
      <Slider />
    </div>
  );
};
