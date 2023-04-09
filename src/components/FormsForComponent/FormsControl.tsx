import React from 'react';
import styles from './FormsControls.module.css';


const Element = (Element: string | React.FC): React.FC<RenderFieldPropsType> => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
     <div>
       <Element
          {...input}
          {...props}
          className={`${Element === 'textarea' ? styles.textarea : styles.input} ${hasError ? styles.error : ""}`}
       />
       <div>
         {hasError && <span style={{color: 'red', fontSize: '14px'}}> {meta.error} </span>}
       </div>
     </div>
  );
};

export const Textarea = Element('textarea');
export const Input = Element('input');

type RenderFieldPropsType = {
  input: string
  label: string
  type: string
  meta: {
    touched: boolean
    error: string
    warning: string
  }
}