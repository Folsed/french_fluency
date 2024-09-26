'use client'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { revs } from './_revs'
import { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

const ReviewsCarousel = () => {
    const swiperRef = useRef(null)
    const vidRef = useRef<HTMLVideoElement[]>([])
    const [activeIndex, setActiveIndex] = useState<number>(0) // State for active slide index

    const onSwiper = (swiper: SwiperType | any) => {
        swiperRef.current = swiper
    }

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex)
    }

    useEffect(() => {
        // Play the active video and pause others
        vidRef.current.forEach((vid: HTMLVideoElement, index: number) => {
            if (vid) {
                if (index === activeIndex) {
                    vid.play()
                    console.log(vid)
                } else {
                    vid.pause()
                }
            }
        })
    }, [activeIndex])


    return (
        <Swiper
            onSwiper={onSwiper}
            onSlideChange={handleSlideChange} // Event listener for slide change
            ref={swiperRef}
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            coverflowEffect={{
                rotate: 70,
                stretch: 0,
                depth: 200,
                modifier: 1,
                scale: 0.9,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            pagination
            className='mySwiper'
        >
            {revs.map((item, index) => (
                <SwiperSlide id='sw-slide' key={item.id}>
                    <video
                        ref={(el) => {
                            if (el) {
                                vidRef.current[index] = el
                            }
                        }}
                        src={item.src}
                        loop
                        // controls
                        muted
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default ReviewsCarousel
