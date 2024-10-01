"use client";

import { TestimonialsContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { testimonials } from "@/utils/testimonials";
import useMedia from "@/hooks/useMedia";

import Title from "@/components/Title";
import Star from "@/icons/Star";
import Quotes from "@/icons/Quotes";
import { openSans } from "@/lib/fonts";

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
        pagination={true}
        modules={[Pagination]}
      >
        {testimonials.map(({ id, title, testimonial, author, img, link }) => (
          <SwiperSlide key={id}>
            <div>
              <h3 className={openSans.className}>{title}</h3>
              <Link href={link}>Ver no Google</Link>
            </div>

            <p className={openSans.className}>{testimonial}</p>

            <div>
              <div>
                <Image src={img.src} width={100} height={100} alt={img.alt} />
                <div>
                  <span>{author}</span>
                  <div className="stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>

              <Quotes />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
