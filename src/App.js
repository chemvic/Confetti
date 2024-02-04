import Header from 'components/Header/Header';
import css from './App.module.css';
import Hero from 'components/Hero/Hero';

function App() {
  return (
    <div className={css.container}>
      <Header />
      <Hero/>
    </div>
  );
}

export default App;
