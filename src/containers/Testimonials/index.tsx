"use client";

import { TestimonialsContainer } from "./styles";
import useMedia from "@/hooks/useMedia";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Title from "@/components/Title";

function Testimonials() {
  const mobile = useMedia("(max-width: 1080px)");

  return (
    <TestimonialsContainer className="containers-between-space padding-space">
      <Title centered>
        <h2>Depoimentos</h2>
      </Title>

      <Swiper
        id="projects"
        slidesPerView={mobile ? 1 : 2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
