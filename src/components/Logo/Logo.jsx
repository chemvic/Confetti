import icons from '../../images/icons.svg';
import css from './Logo.module.css';


const Logo = () => {
  return (
    <div>
        <a href='/' className={css.logo}>
        <svg className={css.logo_icon}>
            <use href={`${icons}#icon-logo`} />
        </svg>
        </a>
    </div>
  )
}

export default Logo;