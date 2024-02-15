import {useEffect, useState} from 'react';
import Logo from 'components/Logo/Logo';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import css from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled]=useState (false);

  useEffect(()=>{
    const handler=()=>{
     if (window.scrollY>0) {
      setScrolled(true); 
     }else{
      setScrolled(false)
     };
    };
    window.addEventListener('scroll', handler);
    return()=>{
        window.removeEventListener('scroll', handler);
     }; 
   },[]);

  return (
    <div className={css.container}>
    <header className={css.header}> 
    
        <div className={`${css.logo} ${scrolled ? css.scrolled : ''}`}>
             <Logo/>
        </div>
        <BurgerMenu scrolled={scrolled}/>
        
    </header></div>
  )
}

export default Header