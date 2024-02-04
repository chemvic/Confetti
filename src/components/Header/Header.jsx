import {useEffect, useState} from 'react';
import css from './Header.module.css';
import Logo from 'components/Logo/Logo';

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
    
           <div className={css.header}> 
        <div className={`${css.logo} ${scrolled ? css.scrolled : ''}`}>
             <Logo/>
        </div>

        <div>
            <span className={`${css.menu} ${scrolled ? css.scrolled : ''}`}>Menu</span>
            <button>Burger</button>


        </div>
       

</div>
  )
}

export default Header