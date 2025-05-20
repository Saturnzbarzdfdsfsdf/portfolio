import React from 'react'

import er from '../../shared/assets/404/123.png'

import style from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={style.wrapper}>
      <img src={er} alt="" />
    </div>
  )
}

export default NotFoundPage