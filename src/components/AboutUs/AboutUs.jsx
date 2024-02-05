import css from './AboutUs.module.css';
import CardAbout from 'components/CardAbout/CardAbout';

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
        <div className={css.grid_container}>
          <div className={css.card1}><CardAbout title='Kreatywne podejście i dbałość o szczegóły' text='Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z dbałością o szczegóły' bgcolor='#ED4B5E'/></div>
          <div className={css.card2}><CardAbout title='Materiały przyjazne dla środowiska' text='Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy ślad na środowisku.' bgcolor='#222222'/></div>
          <div className={css.card3}><CardAbout title='Szeroka gama kolorów do personalizacji' text='Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.' bgcolor='#444444'/></div>  
          <div className={css.card4}><CardAbout title='Gwarancja dostawy i montażu' text='Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.' bgcolor='#808080'/></div>

        </div>
        

    </section>
  )
}

export default AboutUs;