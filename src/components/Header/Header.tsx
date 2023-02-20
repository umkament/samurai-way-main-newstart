import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}
const Header = (props: HeaderPropsType) => {
  return (
     <header className={s.header}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WCWFp5epLNc9bnAas3FRM_iViC5LSWUwvA&usqp=CAU'/>
    <div className={s.loginBlock}>
      {props.isAuth ? props.login:<NavLink to={'/login'}>Login</NavLink>}
    </div>
     </header>
  )
}

export default Header;