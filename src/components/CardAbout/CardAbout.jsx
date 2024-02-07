import PropTypes from 'prop-types';
import css from './CardAbout.module.css';

const CardAbout = ({title, text, bgcolor}) => {
   return (
     <div className={css.card} style={{ backgroundColor: bgcolor }}>                        
        <h3 className={css.title}>{title}</h3>       
        <p className={css.text}>{text}</p>
     </div>
   );
 };
 CardAbout.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
 }
 export default CardAbout;