import './App.css';
import { Hero, Guide, Attributes, Stats, Stores, ManageProduct, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Hero />
      <Guide />
      <Attributes />
      <Stats />
      <Stores />
      <ManageProduct />
      <Footer />
    </div>
  );
}

export default App;
