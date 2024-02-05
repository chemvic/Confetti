import React, { useState } from 'react';
import css from './BurgerMenu.module.css';
import icons from '../../images/icons.svg';
import BurgerLink from 'components/BurgerLink/BurgerLink';

const BurgerMenu = ({scrolled}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div>
      <div className={css.menu_wrapper}>
      <span className={`${css.menu} ${scrolled ? css.scrolled : ''}`}>Menu</span>
      <button className={css.burger_button} onClick={openMenu}>
        
        <svg className={css.menu_icon}>
          <use href={`${icons}#icon-burger`} />
        </svg>
      </button>
      </div>
      {isOpen && (
        <>
          <div className={css.overlay} onClick={closeMenu}></div>
          <div className={`${css.modal} ${isOpen ?css.open: ''}`}>
           <div className={css.header_wrapper}> 
           <div>
            <a href='/' className={css.logo}>
            CONFETTI
           </a>
           </div>
           <div>

            <button className={css.close_button} onClick={closeMenu}>
            <svg className={css.close_icon}>
              <use href={`${icons}#icon-close`} />
            </svg> close
          </button>
           </div>
            
          </div>          
          <div className={css.modal_wrapper}>           
              <nav>
                <ul className={css.modal_list}>
                  <li className={css.modal_item}>
                  <BurgerLink text='Główna' closeMenu={closeMenu} link='hero'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='O nas' closeMenu={closeMenu} link='about'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='Recenzje' closeMenu={closeMenu} link='rewiews'/>
                  </li>
                  <li className={css.modal_item}>
                  <BurgerLink text='Kontakty' closeMenu={closeMenu} link='contacts'/>
                  </li>              
                </ul>
              </nav>
            </div>
          
                          
        </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
