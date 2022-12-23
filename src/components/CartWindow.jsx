import "../assets/styles/for_components/cartWindow.scss";

const CartWindow = ({ action }) => {
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
    <div className="cart__content">
      <h3>Кошик покупця</h3>
      <div className="cart__total-info">
        <h5>Загальна інформація:</h5>

        <ul>
          <li>
            Товарів: <span>3 шт.</span>
          </li>
          <li>
            Загальна сума: <span>3 449 грн</span>
          </li>
          <li>
            <button onClick={action()} className="cart__continueShopping">
              Продовжити покупки
            </button>
            <button className="cart__process">Оформити замовлення</button>
          </li>
        </ul>
      </div>

      <ul>
        {products &&
          products.map((product) => (
            <li>
              <div className="cart__image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="cart__product-details">
                <h2>{product.title}</h2>
                <div className="cart__product-activity">
                  <div
                    className={
                      product.oldPrice
                        ? "cart__product-price"
                        : "cart__product-price-normal"
                    }
                  >
                    {product.currentPrice}

                    {product.oldPrice && <span>{product.oldPrice}</span>}
                  </div>

                  <div className="cart__product-count-wrapper">
                    <span className="cart__product-decrement">-</span>
                    <div className="cart__product-count">1</div>
                    <div className="cart__product-increment">+</div>
                  </div>
                </div>

                <div className="cart__product-buttons">
                  <button className="cart__product-removeFromCart">
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
                    Видалити з кошику
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CartWindow;
