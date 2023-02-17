import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs: React.FC<DialogsPropsType>= (props) => {

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

  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         {dialogsElements}
       </div>
       <div className={s.messages}>
         <div>{messagesElements}</div>
       </div>
       <div>
         <textarea placeholder='enter your message'
                   value={newMessageBody}
                   onChange={addMessChange}
         />
         <div><button onClick={addMessClick}>send</button></div>
       </div>
     </div>
  );
};
