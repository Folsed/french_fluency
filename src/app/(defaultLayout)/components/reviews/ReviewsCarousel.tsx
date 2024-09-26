'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'

import { EffectCoverflow, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { revs } from './_revs'

const ReviewsCarousel = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
        >
            {revs.map((item, _) => (
                <SwiperSlide id='sw-slide' key={item.id}>
                    <video src={item.src} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default ReviewsCarousel
