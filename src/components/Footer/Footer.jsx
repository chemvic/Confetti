import Logo from 'components/Logo/Logo';
import css from './Footer.module.css';

const Footer = () => {
  return (
        <footer className={css.footer}>
          <div className={css.container}>
          <Logo/>
          <p className={css.firm__trade}>confetti © 2023</p>
          </div>
        </footer> 

  )
}

export default Footer