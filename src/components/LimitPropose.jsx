import "../assets/styles/for_components/limitPropose.scss";
import { Clock } from "./icons/icons";

const LimitPropose = () => {
  const cards = [
    {
      id: 1,
      title: "Лук від Balenciaga",
      description: "Збери свій оригінальний стайл",
      discount: 50,
      ending: "time",
      image:
        "https://dneprnews.info/wp-content/uploads/2021/10/3045b5416edd9ccd2a696ba635ad064d.jpg",
    },

    {
      id: 2,
      title: "Розпродаж головних уборів",
      description: "Твій зимовий аксессуар повинен бути теплий",
      discount: 40,
      ending: "time",
      image:
        "https://www.lookbook.in.th/wp-content/uploads/2022/07/BALENCIAGA-51-COUTURE-LOOK-21_BRIAN-WHITBY.jpg",
    },

    {
      id: 3,
      title: "SALE - Вечірні плаття",
      description: "Пасує не тільки Кардашьян",
      discount: 35,
      ending: "time",
      image:
        "https://cdn.cnn.com/cnnnext/dam/assets/220706103143-kim-kardashian-balenciaga-runway-full-169.jpg",
    },

    {
      id: 4,
      title: "Брендові кроси",
      description: "Обери свій стиль кроссфіту",
      discount: 45,
      ending: "time",
      image:
        "https://media.vogue.co.uk/photos/5d5482b312e31a000848373c/2:3/w_2560%2Cc_limit/original",
    },
  ];

  return (
    <section className="limit">
      <ul className="limit__cards-wrapper">
        {cards &&
          cards.map((card) => (
            <li key={card.image} className="limit__card">
              <span className="limit__discount">-{card.discount}%</span>

              <div className="limit__card-image-wrapper">
                <img src={card.image} alt={card.title} />
              </div>

              <h2>{card.title}</h2>

              <p>{card.description}</p>

              <span className="limit__card-ending">
                <Clock />
                Завершення акції через: <strong>07:35:32</strong>
              </span>

              <button className="limit__card-button">
                Дивитись пропозицію
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default LimitPropose;
