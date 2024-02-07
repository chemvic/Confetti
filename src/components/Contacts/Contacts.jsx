import css from './Contacts.module.css';
import icons from '../../images/icons.svg';
import MessageForm from 'components/Form/Form';


const Contacts = ({id}) => {
  return (
    <section  className={css.section}>
        <div id={id} className={css.contacts}>
          <div className={css.contacts_wrapper}>
            <h2 className={css.title}>Kontakty</h2>
            <p className={css.firmInfo}>Confetti - Studio<br />Dekoracij Balonami<br />Warszawa</p>
            <address>
                <ul className={css.contacts_list}>
                    <li className={css.contacts_item}>
                            <div>                                
                                <a 
                                    className={css.contacts__link}
                                    href="tel:+48 793 351 407"
                                    aria-label='Numer telefonu do kontaktu z nami'              
                                    >
                                    <svg className={css.icon}>
                                       <use href={`${icons}#icon-call`} />
                                    </svg>
                                    +48 793 351 407
                                </a>
                            </div>                        
                    </li>
                    <li className={css.contacts_item}>
                            <div>                               
                                <a 
                                    className={css.contacts__link}
                                    href="mailto:confettibalony@gmail.com"
                                    aria-label='Wyślij e-mail, aby się z nami skontaktować'              
              
                                    >
                                    <svg className={css.icon}>
                                        <use href={`${icons}#icon-sms`} />
                                    </svg>                                        
                                    confettibalony@gmail.com
                                </a>
                            </div>                         
                    </li>
                </ul>
            </address>
          </div>
          <MessageForm/>
        </div>
    </section>
  )
}

export default Contacts;