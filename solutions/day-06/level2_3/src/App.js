import './css/app.css';
import { NumberGenerator, WorldPopulation } from './components';

function App() {
  return (
    <div className="app">
      <NumberGenerator length="32" />
      <NumberGenerator length="32" isHexa="true" />
      <WorldPopulation />
    </div>
  );
}

export default App;
