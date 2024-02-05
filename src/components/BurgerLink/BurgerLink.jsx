import { Link} from 'react-scroll';
import css from './BurgerLink.module.css';

const BurgerLink = ({text, link, closeMenu}) => {
  
   return (
     <div >
      <Link
                     className={css.modal_link}
                     to={link}
                     onClick={closeMenu}
                     offset={-100}
                     smooth={true}
                     duration={500}
                    >
                     {text}
      </Link>
     </div>
   );
 };
 export default BurgerLink;