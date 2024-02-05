import Header from 'components/Header/Header';
import css from './App.module.css';
import Hero from 'components/Hero/Hero';
import Background from 'components/Background/Background';

function App() {
  return (
    <div className={css.container}>
      <Background/>
      <Header />
      <Hero/>
    </div>
  );
}

export default App;
