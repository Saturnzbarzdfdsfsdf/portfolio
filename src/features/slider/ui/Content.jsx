import style from './Content.module.scss'

import { Social } from '../../../widget'

const Content = ({projects}) => {

  return (
    <div className={style.wrapper}>
      <h2 className={style.number}>{projects.number}</h2>
      <h3 className={style.title}>{projects.title}</h3>
      <p className={style.description}>{projects.description}</p>
      <ul className={style.stack}>
        {projects.stack.map((item, i) => (
          <li  key={i}>
            {item.name}
            {i !== projects.stack.length - 1 && ','}
            </li>
        ))}
      </ul>

        <Social
            containerStyles={style.icon_container}
            iconStyles={style.icon_style}
        />

    </div>
  )
}

export default Content