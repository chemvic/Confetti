import PropTypes from 'prop-types';
import { Link} from 'react-scroll';
import css from './BurgerLink.module.css';

const BurgerLink = ({text, link, closeMenu}) => {
  
   return (
     <div >
      <Link
                     className={css.modal_link}
                     to={link}
                     onClick={closeMenu}
                     smooth={true}
                     duration={500}
                     tabIndex={0}
                    >
                     {text}
      </Link>
     </div>
   );
 };

 BurgerLink.prototypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  closeMenu : PropTypes.func.isRequired
 }
 export default BurgerLink;