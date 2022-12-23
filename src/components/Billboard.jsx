import { Link } from "react-router-dom";
import "../assets/styles/for_components/billboard.scss";
import Slider from "./Slider";

import { CallbackIcon, ArrowDown, Support } from "./icons/icons";

import { useState } from "react";

const Billboard = () => {
  const categories = [
    {
      id: 1,
      title: "Ноутбуки та комп`ютери",
    },

    {
      id: 2,
      title: "Смартфони, ТВ і електроніка",
    },

    {
      id: 3,
      title: "Товари для геймерів",
    },

    {
      id: 4,
      title: "Побутова техніка",
    },

    {
      id: 5,
      title: "Товари для дому",
    },

    {
      id: 6,
      title: "Інструменти та автотовари",
    },

    {
      id: 7,
      title: "Сантехніка та ремонт",
    },

    {
      id: 8,
      title: "Дача, сад і огород",
    },

    {
      id: 9,
      title: "Спорт і захоплення",
    },

    // {
    //   id: 10,
    //   title: "Одяг, взуття та прикраси",
    // },

    // {
    //   id: 11,
    //   title: "Краса та здоров'я",
    // },

    // {
    //   id: 12,
    //   title: "Алкогольні напої та продукти",
    // },
  ];

  const [support, setSupport] = useState(false);

  const handleSupportMenu = () => {
    support ? setSupport(false) : setSupport(true);
  };

  return (
    <section className="billboard">
      <div className="billboard__left">
        <div
          className={
            support
              ? "billboard__support billboard__support-active"
              : "billboard__support"
          }
          onClick={handleSupportMenu}
        >
          <h5>
            <strong>
              <Support />
              Служба підтримки покупців
            </strong>
            <ArrowDown />
          </h5>

          <div
            className={
              support
                ? "billboard__support-content"
                : "billboard__support-content-hidden"
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <p>Виникли питання? Будемо раді на них відповісти!</p>

            <h4>Прийом дзвінків (Пн-Пт) з 9:00-18:00</h4>
            <div className="billboard__phones-wrapper">
              <ul>
                <li>+38 (095) 446-05-37</li>
                <li>+38 (066) 890-24-65</li>
              </ul>

              <button className="billboard__callback-button">
                <CallbackIcon />
                Передзвоніть мені
              </button>
            </div>
          </div>
        </div>

        <ul className="billboard__categories">
          {categories &&
            categories.map((category) => (
              <li key={category.id}>
                <Link to="/">
                  <span className="billboard__category-icon"></span>
                  {category.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <Slider />
    </section>
  );
};

export default Billboard;
