import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import image from '../../../public/images/batidos.jpeg'
import image2 from '../../../public/images/BB.jpg'
import image3 from '../../../public/images/cachito.jpeg'
import image4 from '../../../public/images/cafe.jpeg'
import image5 from '../../../public/images/croissant.jpeg'
import image6 from '../../../public/images/empanada.jpeg'
import image7 from '../../../public/images/palmeras-chocolate.jpeg'
import image8 from '../../../public/images/tarta-queso.jpeg'

function Carousel() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel
