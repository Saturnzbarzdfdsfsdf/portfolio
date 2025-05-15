// Feedback.jsx
import React from 'react'
import style from './index.module.scss'

const Feedback = (props) => {
  const { contacts, title, icon } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.img_box}>
        {icon}
      </div>
      <div className={style.feedback}>
        <span>{title}</span>
        <p>{contacts}</p>
      </div>
    </div>
  )
}

export default Feedback
