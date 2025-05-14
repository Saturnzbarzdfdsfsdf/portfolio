import React from 'react'

import style from './ServicesCard.module.scss'

const ServicesCard = () => {
  return (

    <div className={style.wrapper}>

    <h2 className={style.number}>01</h2>
    <h3 className={style.title}>Web Development</h3>
    <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure reprehenderit doloremque facili</p>

    {/* <ProjectLink/> */}

  </div>
  )
}

export default ServicesCard