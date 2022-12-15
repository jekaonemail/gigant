import { Link } from "react-router-dom";
import "../assets/styles/for_components/billboard.scss";
import Slider from "./Slider";

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

    {
      id: 10,
      title: "Одяг, взуття та прикраси",
    },

    {
      id: 11,
      title: "Краса та здоров'я",
    },

    {
      id: 12,
      title: "Алкогольні напої та продукти",
    },
  ];

  return (
    <section className="billboard">
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

      <Slider />
    </section>
  );
};

export default Billboard;
