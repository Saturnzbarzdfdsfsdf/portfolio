import React from 'react'

import {Form} from '../../../shared/ui/index' 
import style from './ContactForm.module.scss'

const ContactForm = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__content}>
        <h2 className={style.wrapper__title}>Let`s work together</h2>
        <p className={style.wrapper__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente illum similique ut repudiandae.</p>
      </div>
        
        <Form/>

    </div>
  )
}

export default ContactForm