import "../assets/styles/for_components/slider.scss";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Slider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://content.rozetka.com.ua/banner_main/image_ua/original/299285145.jpg",
      title: "Автономне живлення у точках видачі Faststore",
      description: "забирайте замовлення у зручний час",
    },

    {
      id: 2,
      image:
        "https://content1.rozetka.com.ua/banner_main/image_ua/original/303508193.jpg",
      title: "Новорічний розпродаж ноутбуків",
      description: "термін акції обмежений, поспішайте придбати",
    },
  ];

  return (
    <div className="slider__wrapper">
      <div className="slider__container">
        <Swiper
          loop={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
        >
          {data &&
            data.map((slide) => (
              <SwiperSlide className="slider__slide" key={slide.id}>
                <img
                  className="slider__image"
                  src={slide.image}
                  alt={slide.description}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
