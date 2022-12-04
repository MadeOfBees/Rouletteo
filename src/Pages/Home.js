// import the component rouletteo
import Excell from './XLREight';
import toasty from 'toasty';
import useKonami from 'use-konami';

const MyComponent = () => {
  useKonami({onUnlock: () => toasty().trigger()});
  return (
    <div>
      <Excell />
    </div>
  );
}

export default MyComponent;