import Header from 'components/Header/Header';
import css from './App.module.css';
import Hero from 'components/Hero/Hero';
import Background from 'components/Background/Background';
import AboutUs from 'components/AboutUs/AboutUs';
import Reviews from 'components/Rewiews/Reviews';

function App() {
  return (
    <div className={css.container}>
      <Background/>
      <Header />
      <Hero id="hero"/>
      <AboutUs id="about"/>
      <Reviews id="rewiews"/>
    </div>
  );
}

export default App;
