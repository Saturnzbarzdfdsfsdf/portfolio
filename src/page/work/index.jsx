import React, {useState} from 'react'
import { motion } from 'framer-motion'

import { Slider, Content } from '../../features'

import img1 from '../../shared/assets/work/thumb1.png'
import img2 from '../../shared/assets/work/thumb2.png'
import img3 from '../../shared/assets/work/thumb3.png'

import style from './index.module.scss'

import '../../shared/sass/base/_layout.scss'


const projects = [
  {
    number: '01',
    title: 'TaskMaster Pro',
    category: 'Productivity App',
    description: 'Веб-приложение для управления задачами с возможностью совместной работы в реальном времени и интеграцией с календарём.',
    stack: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Node.js' },
      { name: 'Socket.IO' },
      { name: 'MongoDB' },
    ],
    name: 'JavaScript',
    image: img1,
    live: 'https://taskmasterpro.example.com',
    github: 'https://github.com/username/taskmaster-pro',
  },
  {
    number: '02',
    title: 'ShopEasy',
    category: 'E-commerce Platform',
    description: 'Полнофункциональный интернет-магазин с адаптивным дизайном, системой оплаты и панелью администратора для управления товарами.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'PostgreSQL' },
    ],
    name: 'TypeScript',
    image: img2,
    live: 'https://shopeasy.example.com',
    github: 'https://github.com/username/shopeasy',
  },
  {
    number: '03',
    title: 'DevBlog',
    category: 'Technical Blog',
    description: 'Платформа для публикации технических статей с поддержкой Markdown, комментариев и авторизации через OAuth.',
    stack: [
      { name: 'Gatsby' },
      { name: 'GraphQL' },
      { name: 'Contentful CMS' },
      { name: 'Netlify' },
    ],
    name: 'JavaScript',
    image: img3,
    live: 'https://devblog.example.com',
    github: 'https://github.com/username/devblog',
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);


    const handleSliderChange = (swiper) => {
    const activeIndex = swiper.activeIndex;

    setProject(projects[activeIndex]);
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
      opacity: 1,
      transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
      }} 
    className={style.slider}
    >
     
        <div className={style.slider__content}>

          <Content  projects={project}/>

          <Slider handleSliderChange={handleSliderChange} projects={projects}/> 

        </div>

  
    </motion.section>
  )
}

export default Work