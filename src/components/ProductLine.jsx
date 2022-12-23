import { Link } from "react-router-dom";
import "../assets/styles/for_components/productLine.scss";
import { Eye } from "./icons/icons";

const ProductLine = ({ removable, title, products, link }) => {
  return (
    <section className="last">
      {title && (
        <h2>
          {title}

          <hr />

          {link && (
            <Link className="last__header-link" to={link.href}>
              {link.text}
            </Link>
          )}
        </h2>
      )}

      <ul className="last__products-wrapper">
        {products &&
          products.map((product) => (
            <li className="last__product" key={product.id}>
              {removable && (
                <span className="last__remove">
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
                        fill="#ffffff"
                        d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                      />
                    </g>
                  </svg>
                </span>
              )}

              <div className="last__item-wrapper">
                <div className="last__item">
                  <Link to="/" className="last__image-wrapper">
                    <img
                      className="last__image"
                      src={product.image}
                      alt={product.title}
                    />

                    <span className="last__itemDetails">
                      <Eye />
                    </span>
                  </Link>

                  <Link to="/" className="last__product-link">
                    {product.title}
                  </Link>

                  <div className="last__price">
                    {product.oldPrice !== null && (
                      <span className="last__old-price">
                        {product.oldPrice.toLocaleString("uk-UA", {
                          currency: "UAH",
                          minimumFractionDigits: 0,
                        })}
                      </span>
                    )}

                    {product.oldPrice !== null ? (
                      <span className="last__current-price">
                        {product.currentPrice.toLocaleString("uk-UA", {
                          currency: "UAH",
                          minimumFractionDigits: 0,
                        })}
                      </span>
                    ) : (
                      <>
                        {product.isAwait && (
                          <div className="last__status-wrapper">
                            <span className="last__isAwait">Очікується</span>
                          </div>
                        )}
                        {product.isEnding && (
                          <div className="last__status-wrapper">
                            <span className="last__isEnding">Закінчується</span>
                          </div>
                        )}
                        {product.isReady && (
                          <div className="last__status-wrapper">
                            <span className="last__isReady">
                              Готовий до відправки
                            </span>
                          </div>
                        )}

                        <span className="last__current-price-black">
                          {product.currentPrice.toLocaleString("uk-UA", {
                            currency: "UAH",
                            minimumFractionDigits: 0,
                          })}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProductLine;
