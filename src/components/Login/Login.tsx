import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsForComponent/FormsControl";
import {maxLengthTC, minLengthTC, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";



type FormDataLoginType = {
  email: string
  password: string
  rememberMe: boolean
}
const max = maxLengthTC(50)
const min = minLengthTC(2)

export const LoginForm: React.FC<InjectedFormProps<FormDataLoginType>> = (props) => {
  return (
       <form onSubmit={props.handleSubmit}>
         <div><Field component={Input} name={'email'} placeholder={'e-mail'}
                     validate={[requiredField,max, min ]}
         /></div>
         <div><Field component={Input} name={'password'} placeholder={'password'} type={'password'}
                     validate={[requiredField, max, min]}
         /></div>
         <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</div>
         <div><button>logIn</button></div>
       </form>
  )
}

const LoginReduxForm = reduxForm<FormDataLoginType>({
  // требуется уникальное имя для формы
  form: 'login'
})(LoginForm)


type MapDispatchPropsType = {
  loginTC: (email: string, password: string, rememberMe: boolean)=>void
}
/*type LoginPropsType = {
  isAuth: boolean
  loginTC: (email: string, password: string, rememberMe: boolean)=>void
}*/


const Login: React.FC<MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: FormDataLoginType) => {
    console.log(formData)
    props.loginTC(formData.email, formData.password, formData.rememberMe)
  }


  return (
     <div>
       <h1>LOGIN</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
     </div>
  )
}

export default connect(null, {loginTC})(Login)