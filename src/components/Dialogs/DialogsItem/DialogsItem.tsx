import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItemPropsType = {
  id: number
  name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
  let path = '/dialogs/' + props.id
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

