import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataDialogType = {
  newMessageBody: string
}
export const Dialogs: React.FC<DialogsPropsType>= (props) => {

  let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
  let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id}/>)
 let newMessageBody = props.messagesPage.newMessageBody

  const addNewMessage = (values: FormDataDialogType) => {
    console.log(values)
    props.sendMessage(values.newMessageBody)
  }

  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         {dialogsElements}
       </div>
       <div className={s.messages}>
         <div>{messagesElements}</div>
       </div>
      <DialogReduxForm onSubmit={addNewMessage}/>
     </div>
  )
}


export const DialogForm: React.FC<InjectedFormProps<FormDataDialogType>> = (props) => {
  return (
     <form onSubmit={props.handleSubmit}>
         <Field component={'textarea'}
                name={'newMessageBody'}
                placeholder='enter your message'
         />
       <div><button>send</button></div>
     </form>
  )
}


const DialogReduxForm = reduxForm<FormDataDialogType>({
  form: 'dialog'
})(DialogForm)