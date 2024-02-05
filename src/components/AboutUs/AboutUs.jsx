import React from 'react';
import css from './AboutUs.module.css';

const AboutUs = ({id}) => {
  return (
    <section id={id} className={css.section}>
        <div className={css.wrapper}>
           <h2 className={css.title}>
                Kreatywny zespół dekoratorów
           </h2>
           <p className={css.description}>
                Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia  
           </p>
        </div>
        

    </section>
  )
}

export default AboutUs;