
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
    phone: Yup.number().required('Required').positive('Wrong Phone').integer('Wrong Phone').test('len', 'Wrong Phone', val => val.toString().length >= 11),
    message: Yup.string()   
  });

const MessageForm = () => {
   return (
     <div className={css.form}>
       
     <Formik
     initialValues={{
        fullName: '',
        email: '',
        phone: '',
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
        * Full name:            
        </label>
        <Field  className={`${css.input} ${errors.fullName && touched.fullName ? css.error : ''}`} name="fullName" type="text" placeholder="John Rosie"/>
        <ErrorMessage name='fullName' component="div" className={css.input_error}/>
        <label htmlFor="email">
        * E-mail: 
        </label>
        <Field  className={`${css.input} ${errors.email && touched.email ? css.error : ''}`} name="email" type="email" placeholder="johnrosie@gmail.com"/>
        <ErrorMessage name='email' component="div" className={css.input_error}/>
        <label htmlFor="phone">
        * Phone:   
        </label>
        <Field  className={`${css.input} ${errors.phone && touched.phone ? css.error : ''}`} name="phone" type="number" placeholder="380961234567"/>
        <ErrorMessage name='phone' component="div" className={css.input_error}/>        
        <label htmlFor="message">
        Message:              
        </label>
       <Field  className={css.input_textarea} name="message" as="textarea" type="text" placeholder="Your message"/>

        <button className={css.button} type='submit' >
           Send 
           <div className={css.icon_wrapper}>
            <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-right`} />
            </svg>
           </div>
        </button> 
        
       </Form>)}
     
   </Formik>
        

     </div>
   );
 };
 export default MessageForm;