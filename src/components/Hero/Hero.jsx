import PropTypes from 'prop-types';
import React from 'react';
import css from './Hero.module.css';

const Hero = ({id}) => {
  return (
    <section id={id} className={css.section}>
    
            <div className={css.wrapper}>
                   <h1 className={css.title}>Tworzymy unikalne i niepowtarzalne <span className={css.span}>dekoracje balonowe</span> na imprezy</h1>
            </div>
        
    </section>
  )
}
Hero.prototypes = {
  id: PropTypes.string.isRequired,
}
export default Hero;