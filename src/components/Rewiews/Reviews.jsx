import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './Reviews.module.css';
import icons from '../../images/icons.svg';

import CardReview from 'components/CardReview/CardReview';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={css.next_button}>   
        <button className={css.button} onClick={onClick}>
            <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-right`} />
            </svg>
          </button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={css.prev_button}>    
        <button className={css.button} onClick={onClick}>
            <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-left`} />
            </svg>
        </button>
      </div>
    );
  }

const Reviews = ({id}) => {
    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
       
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }      
          ]
 
      };
  return (
    <section id={id} className={css.section}>
        <h2 className={css.title}>
            Recenzje
        </h2>
        <Slider {...settings} style={{ width: '100%' }} >       
            <div><CardReview text='Baaardzo super ścianka  , dziękuję za współpracę 🫶 ' name='Anetta Ostalczyk'/></div>
            <div><CardReview text='Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie! ' name='Aleksandra Murawska'/></div>
            <div><CardReview text='Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję  ) ' name='Katia Maksymiw'/></div>  
        </Slider>
    </section>
  )
}

export default Reviews