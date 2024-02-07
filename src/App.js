import Header from 'components/Header/Header';
import css from './App.module.css';
import Hero from 'components/Hero/Hero';
import Background from 'components/Background/Background';
import AboutUs from 'components/AboutUs/AboutUs';
import Reviews from 'components/Rewiews/Reviews';
import Contacts from 'components/Contacts/Contacts';

function App() {
  return (
    <div className={css.container}>
      <Background/>
      <Header />
      <Hero id="hero"/>
      <AboutUs id="about"/>
      <Reviews id="rewiews"/>
      <Contacts id="contacts"/>
    </div>
  );
}

export default App;
