import React from 'react';
import { ButtonHTMLAttributes } from 'react'
import { BtnLogin } from './StyleButton';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button=(props: ButtonProps) => {
  return(
    <BtnLogin {...props}/>
  )
}