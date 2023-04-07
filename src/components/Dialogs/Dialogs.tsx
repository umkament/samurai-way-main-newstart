import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps} from "redux-form";

export const Dialogs: React.FC<DialogsPropsType>= (props) => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

  let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id}/>)
  let newMessageBody = props.messagesPage.newMessageBody

  let addMessChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    let textOfMessage = e.currentTarget.value
    props.updateMessageBody(textOfMessage)
  }

  let addMessClick = () => {
    props.sendMessage()
  }

 // if (!props.isAuth) return <Redirect to={'/login'}/>


  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         {dialogsElements}
       </div>
       <div className={s.messages}>
         <div>{messagesElements}</div>
       </div>
      <DialogForm onSubmit={onSubmit}/>
     </div>
  );
};

export const DialogForm: React.FC<InjectedFormProps<FormDataType>> = () => {
  return (
     <form>
         <Field component={'textarea'} name={'textarea'}
                placeholder='enter your message'
                value={newMessageBody}
                onChange={addMessChange}
         />
       <div><button onClick={addMessClick}>send</button></div>
     </form>

  )

}

type FormDataDialogType = {

}