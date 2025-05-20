import ServicesCard from './ServicesCard/ServicesCard'

import style from './Services.module.scss' 


const Services = () => {
  return (
    <div className={style.wrapper}>
      <ServicesCard/>
      <ServicesCard/>
      <ServicesCard/>
      <ServicesCard/>
    </div>
  )
}

export default Services