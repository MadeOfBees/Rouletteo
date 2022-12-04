// import the component rouletteo
import Excell from '../Pages/Excell';
import toasty from 'toasty';
import useKonami from 'use-konami';

const MyComponent = () => {
  useKonami({
    onUnlock: () => {
      let t = toasty();
      t.trigger()
      console.log('*the sound of bees gets louder*');
    }
  });
  return (
    <div>
      <Excell />
    </div>
  );
}

export default MyComponent;