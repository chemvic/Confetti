import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './AboutUs.module.css';
import CardAbout from 'components/CardAbout/CardAbout';
import cards from './cardAbout.json';

const AboutUs = ({id}) => {
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
    <section id={id} className={css.section}>
        <div className={css.wrapper}>
           <h2 className={css.title}>
                Kreatywny zespół dekoratorów
           </h2>
           <p className={css.description}>
                Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia  
           </p>
        </div>

        {window.innerWidth < 768 ? (
          <Slider {...settings} style={{ width: '100%' }} >       
            <div><CardAbout title={cards.cards[0].title} text={cards.cards[0].text} bgcolor={cards.cards[0].bgcolor}/></div>
            <div><CardAbout title={cards.cards[1].title} text={cards.cards[1].text} bgcolor={cards.cards[1].bgcolor}/></div>
            <div><CardAbout title={cards.cards[2].title} text={cards.cards[2].text} bgcolor={cards.cards[2].bgcolor}/></div>  
            <div><CardAbout title={cards.cards[3].title} text={cards.cards[3].text} bgcolor={cards.cards[3].bgcolor}/></div>      
          </Slider>
        ) : (
          <div className={css.grid_container}>       
            <div className={css.card1}><CardAbout title={cards.cards[0].title} text={cards.cards[0].text} bgcolor={cards.cards[0].bgcolor}/></div>
            <div className={css.card2}><CardAbout title={cards.cards[1].title} text={cards.cards[1].text} bgcolor={cards.cards[1].bgcolor}/></div>
            <div className={css.card3}><CardAbout title={cards.cards[2].title} text={cards.cards[2].text} bgcolor={cards.cards[2].bgcolor}/></div>   
            <div className={css.card4}><CardAbout title={cards.cards[3].title} text={cards.cards[3].text} bgcolor={cards.cards[3].bgcolor}/></div>       
          </div> 
        )}
         

    </section>
  )
}
AboutUs.prototypes = {
    id: PropTypes.string.isRequired,
}
export default AboutUs;