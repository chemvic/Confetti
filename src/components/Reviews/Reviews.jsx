import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './Reviews.module.css';
import icons from '../../images/icons.svg';
import reviews from './reviewsCards.json';

import CardReview from 'components/CardReview/CardReview';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={css.next_button}>   
        <button className={css.button}  type='button' onClick={onClick}>
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
        <button className={css.button} type='button' onClick={onClick}>
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
        <Slider {...settings} style={{ width: '100%' }}  >
          {reviews.map(({text, name})=>(
            <div key={name}>
              <CardReview text={text} name={name}/>
            </div>
          ))}
        </Slider>     

    </section>
  )
}


Reviews.propTypes = {
    id: PropTypes.string.isRequired,
}
export default Reviews