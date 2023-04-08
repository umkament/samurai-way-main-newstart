import React from "react";

export const requiredField = (value: string) =>{
if (value) return undefined;
return 'field is required'
}

export const maxLengthTC = (maxLength: number) => (value: string) =>{
  return value && value.length > maxLength ? `too long message, more ${maxLength} symbols` : undefined
}

export const minLengthTC = (minLength: number) => (value: string) =>{
  return value && value.length < minLength ? `too short message, should be more ${minLength} symbol` : undefined
}

//export const required = (value: string) => (value || typeof value === 'number' ? undefined : 'Required');
