import { Link } from "react-router-dom";
import "../assets/styles/for_components/subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__wrapper">
        <div className="subscribe__content">
          <h4>Новим клієнтам</h4>
          <h2>Даруємо купон на знижку -15%</h2>
          <p>
            Раз на місяць ми листуватимемо на твою скриньку найвигідніші
            пропозиції з величезними знижками, а ще трохи наших новин та
            приколів :) Ми не любимо спам, тому надсилаємо лише один лист на
            місяць щоб підняти вам настрій! <br />
            Листування можна відмінити у будьякий час!
          </p>

          <div className="subscribe__options">
            <input type="radio" id="subscribeWoman" value="woman" checked />
            <label htmlFor="subscribeWoman">Я жінка</label>
            <input type="radio" id="subscribeMan" value="man" />
            <label htmlFor="subscribeMan">Я чоловік</label>
          </div>

          <div className="subscribe__activity">
            <input
              className="subscribe__email"
              type="text"
              placeholder="Введіть ваш e-mail адрес"
            />
            <button className="subscribe__button">Підписатися</button>
          </div>

          <h5>
            Натискаючи на кнопку, ви даєте згоду на{" "}
            <Link to="/">обробку персональних даних</Link>
          </h5>
        </div>

        <div className="subscribe__image-wrapper">
          <img
            src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
            alt="subscribe image"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
