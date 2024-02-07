import Logo from 'components/Logo/Logo';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <section className={css.section}>
        <div className={css.footer}>
          <Logo/>
          <p className={css.firm__trade}>confetti © 2023</p>
        </div> 
    </section>
  )
}

export default Footer