import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import style from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ projects, handleSliderChange }) => {
  //рефы для кнопок
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // состояние для инициализации навигации после монтирования
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // подключаем кастомные кнопки к навигации swiper
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // инициализируем навигацию заново
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={style.swiper_wrapper}>

      <Swiper
        className={style.swiper}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSliderChange}
        modules={[Navigation]}
        onSwiper={setSwiperInstance} 
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {projects.map((project, i) => {
          return (
            <SwiperSlide
              key={i}
              className={style.slider__content}
              >
              <img
              src={project.image}
              alt={project.title}
              className={style.project_image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

        
      <div className={style.navigation_button}>
        <button ref={prevRef} className={style.navigation_button__prev}>P</button>
        <button ref={nextRef} className={style.navigation_button__next}>N</button>
      </div>

    </div>

   
  );
};

export default Slider;
