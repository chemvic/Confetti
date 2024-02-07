
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Form.module.css';

const schema = Yup.object().shape({
    fullName: Yup.string('Nieprawidłowe Іmię')
      .min(2, 'Nieprawidłowe Іmię')
      .max(50, 'Nieprawidłowe Іmię')
      .required('Wymagany').matches(/^[а-яА-Яa-zA-Z\s]*$/, 'Nieprawidłowe Іmię')
      .test('two-words', 'Nieprawidłowe Іmię', (value) => {
        return value.split(' ').length >= 2;}),
    email: Yup.string().email('Nieprawidłowy email').required('Wymagany'),
    message: Yup.string()   
  });

const MessageForm = () => {
   return (
     <div className={css.form}>
       
     <Formik
     initialValues={{
        fullName: '',
        email: '',
        message: '',
     }}
     validationSchema={schema}
     onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
     }}
   >
     {({ errors, touched }) => (
       <Form autoComplete='off'>
        <label  htmlFor="fullName">
        Imię*            
        </label>
        <Field  className={`${css.input} ${errors.fullName && touched.fullName ? css.error : ''}`} name="fullName" type="text" placeholder="Imię"/>
        <ErrorMessage name='fullName' component="div" className={css.input_error} style={{ top: `${window.innerWidth >= 768 ? '155px' : '150px'}`, right: `${window.innerWidth >= 768 ? '106px' : '44px'}` }}/>
        <label htmlFor="email">
        E-mail*
        </label>
        <Field  className={`${css.input} ${errors.email && touched.email ? css.error : ''}`} name="email" type="email" placeholder="mail@gmail.com"/>
        <ErrorMessage name='email' component="div" className={css.input_error} style={{ top: `${window.innerWidth >= 768 ? '279px' : '265px'}`, right: `${window.innerWidth >= 768 ? '106px' : '44px'}` }}/>
        <label htmlFor="message">
        Wiadomość              
        </label>
       <Field  className={css.input_textarea} name="message" as="textarea" type="text" placeholder="Twoja wiadomość..."/>

        <button className={css.button} type='submit' >
        Wyślij           
        </button> 
        
       </Form>)}
     
   </Formik>
        

     </div>
   );
 };
 export default MessageForm;