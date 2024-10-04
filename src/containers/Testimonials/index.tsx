"use client";

import { TestimonialsContainer } from "./styles";
import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { testimonials } from "./testimonials";
import { openSans } from "@/lib/fonts";
import { useRef } from "react";
import { ShowUp } from "@/animation";

import useMedia from "@/hooks/useMedia";
import Star from "@/icons/Star";
import Quotes from "@/icons/Quotes";

function Testimonials() {
  const mobile = useMedia("(max-width: 1080px)");
  const container = useRef(null);

  ShowUp(container, ["#testimonials"]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <TestimonialsContainer
      className="containers-between-space padding-space"
      ref={container}
    >
      <Title centered>
        <h2>Depoimentos</h2>
      </Title>

      <Swiper
        id="testimonials"
        slidesPerView={mobile ? 1 : 2}
        spaceBetween={20}
        pagination={pagination}
        modules={[Pagination]}
      >
        {testimonials.map(({ id, title, testimonial, author, gender }) => (
          <SwiperSlide key={id}>
            <div>
              <h3 className={openSans.className}>{title}</h3>
              <Link
                target="_blank"
                href="https://www.google.com/search?client=ms-android-xiaomi-rvo3&sca_esv=00b2415a928ac49a&sca_upv=1&sxsrf=ADLYWILscOsfpl76Fk77xEs4W_tLCxCwkA:1726773222002&q=avalia%C3%A7%C3%B5es+sobre+godsclean+|+higieniza%C3%A7%C3%A3o+e+limpeza+de+sof%C3%A1+e+estofados+s%C3%A3o+gon%C3%A7alo&uds=ADvngMhoKkM4twnDbowBACrMmaWt5b9z9WCzgTqli2nwf32aY2DKZaRNGPpD9ZteUK9WS1rSXI1XHeyY-bXDx_7PWh4WAj4QpMlzwPyI2oHQUdnHFOh5_G5-M-PctqvtzUGOrF53X6n5LimuXPLwJpZBZd3pmT5qvdU06dEQAs1Mb8BZnnfSgtsT_6hvw8XterjEYQval7OQ5TyMx0b7Jh5DNmQ7HCQF7miVJb2Ef_UJ6ySJ0mAHp322fXxyYGl27GxqXQ9-pfOxchX4NZLz8V8fesmNPRlVe4yGDGQfQIpfuaWoBW3BYLfW7IykJgkLZ72bNLvhpc4GS3yWHAV5J-Oy0t9ZighICVJPuI5rZZudJFqX4C6lRwrVpM4meRKZkcJF4A2CEC8AaP8CPkY28EmDVqcyUAfPwhYOZHtW3MXSPF2jERu-KE7T6yDCdWS4ollxRgFE-Hwo8oqBf020ojb7V9v7ce2Jbnu3SZX1qAbQniGW5wyKovz7k8MOtmK2Wiiyoabyc45d9bQ9Y85dx8ZqMxc4yUuzTEKipgyF98D1WfhkPuinGG7g4X2SXq90W-9Ijq-lfo4TKHyL2bQIvIR6lvWNCC8RXn0-Hx7-Ov_KVKAYRJD4V5ngjEmOR4EjQzsrUJ1-_6edavBhkP5R9JYdejq7Z64HUA&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7kUh5ofLCNnJ7RRikZCPrFaLg3CQ9z5UzsBHhckD1Q0ABj-OZcUlTHeDCjf02tHKj8BaIFgVso6wg2gG2TlKn1l2agOtbRnO94O24LLQxqfGifkrqf-7dcAEljvUfUp2NcXP-Hj4PJy_D_joBToBWK1Y9bJylQW5X8CoPKcIVXVCiU1wxqdPEO6xH1Ai4JYitvJv834%3D&sa=X&ved=2ahUKEwj73YTE28-IAxWgO7kGHZVvB0oQk8gLegQILBAB&ictx=1&biw=393&bih=736&dpr=2.75"
                aria-label="Ir para os depoimentos do Google"
              >
                Ver no Google
              </Link>
            </div>

            <p className={openSans.className}>{testimonial}</p>

            <div>
              <div className="author">
                <div className="avatar">
                  <Image
                    src={gender === "female" ? "/girl.png" : "/boy.png"}
                    alt="Ícone de avatar"
                    fill
                    sizes="10vw"
                  />
                </div>
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
