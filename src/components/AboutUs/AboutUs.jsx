import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import CardAbout from 'components/CardAbout/CardAbout';
import cards from './cardAbout.json';
import css from './AboutUs.module.css';

const AboutUs = ({id}) => {

const [isMobile, setIsMobile] = useState(window.innerWidth<768);

  useEffect(()=>{

    const handleWidth = () =>{
      setIsMobile(window.innerWidth<768);
    };

    window.addEventListener('resize', handleWidth);

    return ()=>{
      window.removeEventListener('resize', handleWidth);
    }
  },[]);

    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        initialSlide: 0,
        swipeToSlide: true
 
      };
      
  return (
    <div className={css.container}>
    <section id={id} className={css.section}>
      
        <div className={css.wrapper}>
           <h2 className={css.title}>
                Kreatywny zespół dekoratorów
           </h2>
           <p className={css.description}>
                Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia  
           </p>
        </div>

        {isMobile ? (
          <Slider {...settings} style={{ width: '100%' }} >       
           {cards.map(({title, text, bgcolor})=>(
              <div key={title}>
                <CardAbout title={title} text={text} bgcolor={bgcolor}/>
              </div>
            ))}    
          
          </Slider>
        ) : (
          <div className={css.grid_container}>            
            {cards.map(({title, text, bgcolor})=>(
              <div key={title}>
                <CardAbout title={title} text={text} bgcolor={bgcolor}/>
              </div>
            ))}       
          </div> 
        )}     
    </section>
    </div>
  )
}
AboutUs.prototypes = {
    id: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired
}
export default AboutUs;