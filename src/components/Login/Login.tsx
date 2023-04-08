import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsForComponent/FormsControl";
import {maxLengthTC, minLengthTC, requiredField} from "../../utils/validators/validators";


type FormDataLoginType = {
  login: string
  password: string
  rememberMe: boolean
}
const max = maxLengthTC(10)
const min = minLengthTC(4)

export const LoginForm: React.FC<InjectedFormProps<FormDataLoginType>> = (props) => {
  return (
       <form onSubmit={props.handleSubmit}>
         <div><Field component={Input} name={'login'} placeholder={'login'}
                     validate={[requiredField,max, min ]}
         /></div>
         <div><Field component={Input} name={'password'} placeholder={'password'}
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