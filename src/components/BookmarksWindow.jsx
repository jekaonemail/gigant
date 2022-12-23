import "../assets/styles/for_components/bookmarksWindow.scss";
import { Cart } from "./icons/icons";

const BookmarksWindow = () => {
  const products = [
    {
      id: 1,
      title: "Кава розчинна Jacobs Monarch 500 г",
      oldPrice: 679,
      currentPrice: 649,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/151054150.jpg",
    },

    {
      id: 2,
      title: "Капсули для прання Persil Power Caps Колір",
      oldPrice: 1_096,
      currentPrice: 599,
      image:
        "https://content2.rozetka.com.ua/goods/images/preview/250024064.jpg",
    },

    {
      id: 3,
      title: "Лікер Jägermeister 0.7 л 35% (4067700015532)",
      oldPrice: null,
      currentPrice: 399,
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/163381375.jpg",
    },
  ];

  return (
    <div className="bookmarks__content">
      <h3>Збережені товари</h3>

      <ul className="bookmarks__list-wrapper">
        {products &&
          products.map((product) => (
            <li>
              <div className="bookmarks__image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="bookmarks__product-info">
                <h2>{product.title}</h2>
                <div
                  className={
                    product.oldPrice
                      ? "bookmarks__product-price"
                      : "bookmarks__product-price-normal"
                  }
                >
                  <strong>{product.currentPrice}</strong>
                  {product.oldPrice && <span>{product.oldPrice}</span>}
                </div>

                <div className="bookmarks__activity">
                  <button className="bookmarks__addToCart">
                    <Cart />
                    Додати до кошику
                  </button>

                  <button className="bookmarks__remove">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      width="10px"
                      height="10px"
                      viewBox="0 0 348.333 348.334"
                    >
                      <g>
                        <path
                          fill="#FFF"
                          d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                        />
                      </g>
                    </svg>
                    Видалити з обраного
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookmarksWindow;
