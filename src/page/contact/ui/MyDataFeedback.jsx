// MyDataFeedback.jsx
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import style from './MyDataFeedback.module.scss'
import Feedback from '../../../shared/ui/Feedback'

const contactsData = [
  { icon: <FaPhoneAlt />, title: 'Phone', contacts: '+7 (999) 180 69-69' },
  { icon: <MdEmail />, title: 'Email', contacts: 'it999work@gmail.com' },
  { icon: <FaLocationDot />, title: 'Address', contacts: 'city Ivanovo' },
]

const MyDataFeedback = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.feedback_box}>
        {contactsData.map((item, i) => (
          <Feedback
            key={i}
            title={item.title}
            contacts={item.contacts}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default MyDataFeedback
