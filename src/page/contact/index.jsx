import React from 'react'

import style from './index.module.scss'

import ContactForm from './ui/ContactForm'
import MyDataFeedback from './ui/MyDataFeedback'

const index = () => {
  return (
    <div className={style.wrapper}>

      <ContactForm/>

      <MyDataFeedback/>

    </div>
  )
}

export default index