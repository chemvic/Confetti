import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import css from './App.module.css';
import Hero from 'components/Hero/Hero';
import Background from 'components/Background/Background';
import AboutUs from 'components/AboutUs/AboutUs';
import Reviews from 'components/Reviews/Reviews';
import Contacts from 'components/Contacts/Contacts';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className={css.container}>
      <Background/>
      <Header />
      <Hero id="hero"/>
      <AboutUs id="about"/>
      <Reviews id="rewiews"/>
      <Contacts id="contacts"/>
      <Footer/>
      <ToastContainer autoClose={1000}/>

    </div>
  );
}

export default App;
