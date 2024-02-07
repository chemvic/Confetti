
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Form.module.css';
import icons from '../../images/icons.svg';

const schema = Yup.object().shape({
    fullName: Yup.string('Wrong Fullname')
      .min(2, 'Wrong Fullname')
      .max(50, 'Wrong Fullname')
      .required('Required').matches(/^[а-яА-Яa-zA-Z\s]*$/, 'Wrong Fullname')
      .test('two-words', 'Wrong Fullname', (value) => {
        return value.split(' ').length >= 2;}),
    email: Yup.string().email('Wrong Email').required('Required'),
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
        <ErrorMessage name='fullName' component="div" className={css.input_error}/>
        <label htmlFor="email">
        E-mail*
        </label>
        <Field  className={`${css.input} ${errors.email && touched.email ? css.error : ''}`} name="email" type="email" placeholder="mail@gmail.com"/>
        <ErrorMessage name='email' component="div" className={css.input_error}/>
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