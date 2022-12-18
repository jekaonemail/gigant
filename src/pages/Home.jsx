import "../assets/styles/for_pages/home.scss";
import Header from "../components/Header";
import Billboard from "../components/Billboard";
import ProductLine from "../components/ProductLine";
import LimitPropose from "../components/LimitPropose";
import Subscribe from "../components/Subscribe";
import HomeAbout from "../components/HomeAbout";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const Home = () => {
  const lastViewedProducts = [
    {
      id: 1,
      image:
        "https://content2.rozetka.com.ua/goods/images/preview/250024064.jpg",
      title: "Капсули для прання Persil Power Caps Колір",
      oldPrice: 1_096,
      currentPrice: 599,
      isAwait: false,
      isEnding: false,
      isReady: false,
    },

    {
      id: 2,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/151054150.jpg",
      title: "Кава розчинна Jacobs Monarch 500 г",
      oldPrice: 679,
      currentPrice: 649,
      isAwait: false,
      isEnding: false,
      isReady: false,
    },

    {
      id: 3,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/295808243.jpg",
      title: "Свічка столова Bolsius 180/21 Біла 45 шт",
      oldPrice: null,
      currentPrice: 1_000,
      isAwait: false,
      isEnding: true,
      isReady: false,
    },

    {
      id: 4,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/296313729.jpg",
      title: "Буржуйка міні Uastal сушильна",
      oldPrice: 3_999,
      currentPrice: 3_799,
      isAwait: false,
      isEnding: false,
      isReady: false,
    },

    {
      id: 5,
      image: "https://content.rozetka.com.ua/goods/images/preview/10813443.jpg",
      title: "Бідон Лідер 40 л харчовий Білий",
      oldPrice: null,
      currentPrice: 627,
      isAwait: false,
      isEnding: false,
      isReady: true,
    },

    {
      id: 6,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/163381375.jpg",
      title: "Лікер Jägermeister 0.7 л 35% (4067700015532)",
      oldPrice: 635,
      currentPrice: 399,
      isAwait: false,
      isEnding: false,
      isReady: false,
    },

    {
      id: 7,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/284920914.jpg",
      title: "Мобільний телефон Apple iPhone 14 Pro Max",
      oldPrice: null,
      currentPrice: 67_999,
      isAwait: true,
      isEnding: false,
      isReady: false,
    },

    {
      id: 8,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/285886586.jpg",
      title: "Ноутбук ASUS TUF Gaming F15 FX506LH-",
      oldPrice: 44_999,
      currentPrice: 35_999,
      isAwait: false,
      isEnding: false,
      isReady: false,
    },
  ];

  return (
    <div className="container">
      <Header />
      <Billboard />
      <ProductLine
        products={lastViewedProducts}
        removable={true}
        title="Ваші останні перегляди"
      />
      <LimitPropose />

      <ProductLine
        products={lastViewedProducts}
        removable={false}
        title="Бестселлери магазину"
        link={{ href: "/best", text: "Топ 100 бестселлерів" }}
      />

      <ProductLine
        products={lastViewedProducts}
        removable={false}
        title="Нові пропозиції"
        link={{ href: "/news", text: "Показати всі" }}
      />

      <Subscribe />

      {/* <HomeAbout />  */}

      <Brands />

      <Footer />
    </div>
  );
};

export default Home;
