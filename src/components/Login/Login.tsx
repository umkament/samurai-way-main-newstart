import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataLoginType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataLoginType>> = (props) => {
  return (
       <form onSubmit={props.handleSubmit}>
         <div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
         <div><Field component={'input'} name={'password'} placeholder={'password'}/></div>
         <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me</div>
         <div><button>logIn</button></div>
       </form>
  )
}

const LoginReduxForm = reduxForm<FormDataLoginType>({
  // требуется уникальное имя для формы
  form: 'login'
})(LoginForm)


export const Login = () => {
  const onSubmit = (formData: FormDataLoginType) => {
    console.log(formData)
  }
  return (
     <div>
       <h1>LOGIN</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
     </div>
  )
}