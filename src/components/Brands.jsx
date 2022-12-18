import "../assets/styles/for_components/brands.scss";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Brands = () => {
  const brandList = [
    {
      id: 1,
      name: "Adidas",
      image:
        "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
      link: "/adidas",
    },

    {
      id: 2,
      name: "Nike",
      image: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
      link: "/nike",
    },

    {
      id: 3,
      name: "Puma",
      image: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
      link: "/puma",
    },

    {
      id: 4,
      name: "Converse",
      image:
        "https://seeklogo.com/images/C/converse-logo-BB7450EFE9-seeklogo.com.png",
      link: "/converse",
    },

    {
      id: 5,
      name: "Crocs",
      image: "https://logodix.com/logo/37057.jpg",
      link: "/crocs",
    },

    {
      id: 6,
      name: "Fubu",
      image:
        "https://cdn.shopify.com/s/files/1/0488/0754/2935/files/fubulogo.png?v=1658131234",
      link: "/fubu",
    },

    {
      id: 7,
      name: "Reebok",
      image:
        "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/800x600/551064_v3.png",
      link: "/reebok",
    },

    {
      id: 8,
      name: "DC",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/DCSHOECOUSA_Logo.svg/1200px-DCSHOECOUSA_Logo.svg.png",
      link: "/dc",
    },

    {
      id: 1,
      name: "Fila",
      image:
        "data:image/png;base64,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",
      link: "/fila",
    },

    {
      id: 9,
      name: "Champion",
      image:
        "https://1000logos.net/wp-content/uploads/2018/12/Champion-emblem.jpg",
      link: "/champion",
    },

    {
      id: 10,
      name: "Everlast",
      image:
        "https://seeklogo.com/images/E/Everlast-logo-10AFCFC702-seeklogo.com.png",
      link: "/everlast",
    },

    {
      id: 11,
      name: "New balance",
      image:
        "https://w7.pngwing.com/pngs/1003/670/png-transparent-new-balance-branson-sneakers-shoe-clothing-rock-cliff-text-trademark-logo.png",
      link: "/new-balance",
    },

    {
      id: 12,
      name: "Jack Wolfskin",
      image:
        "https://www.outdoorsportswire.com/wp-content/uploads/2021/01/JW_Logo_Large-1.png",
      link: "/jack-wolfskin",
    },
  ];

  return (
    <section className="brands">
      <div className="brands__wrapper">
        <h3>Тицяй улюблені бренди</h3>
        <Swiper
          loop={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={7}
          className="brands__slider"
          spaceBetween={15}
        >
          {brandList &&
            brandList.map((brand) => (
              <SwiperSlide className="brands__slide">
                <Link to={brand.link}>
                  <div className="brands__image-wrapper">
                    <img src={brand.image} alt={brand.name} />
                  </div>

                  <h3>{brand.name}</h3>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
