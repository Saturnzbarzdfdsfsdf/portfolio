
import { CgAirplane } from "react-icons/cg";
import style from './ServicesCard.module.scss'

const ServicesCard = () => {
  return (

    <div className={style.card}>
      <div className={style.card__hover}>

        <div className={style.card__box}>
        <h2 className={style.number}>01</h2>

 
            <CgAirplane className={style.card__icon} size='30' color='#1c1c22' />


        </div>

        <h3 className={style.card__title}>Web Development</h3>
      </div>

      <p className={style.card__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure reprehenderit doloremque facili
      </p>
    </div>

  )
}

export default ServicesCard


