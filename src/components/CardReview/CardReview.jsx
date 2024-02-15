import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import css from './CardReview.module.css';

const CardReview = ({text, name}) => {
   return (
     <div className={css.card}>
        <div className={css.review}>                   
          <p className={css.text}>{text}</p>  
        </div>
      
       <div className={css.user}>
        <svg className={css.icon}>
          <use href={`${icons}#icon-user`} />
        </svg>
        <p className={css.name}>{name}</p>
       </div>  

     </div>
   );
 };
 CardReview.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 }
 export default CardReview;