"use client"

import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={32}
      // centeredSlides={true}
      className="my-24 px-16"
    >
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
      <SwiperSlide className=" w-56 h-72 rounded-3xl bg-gray-200"></SwiperSlide>
    </Swiper>
  )
}

export default Carousel
