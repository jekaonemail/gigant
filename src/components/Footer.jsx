import { Link } from "react-router-dom";
import "../assets/styles/for_components/footer.scss";

import {
  Logotype,
  Instagram,
  Telegram,
  Facebook,
  Tiktok,
  Email,
  Phone,
} from "./icons/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__activity">
          <div className="footer__logotype-wrapper">
            <Logotype />
          </div>

          <h3>Gigant</h3>

          <span>Copyright &copy; GIGANT - 2022</span>
          <span>Всі права захищені</span>
        </div>

        <ul>
          <li>
            <h5>Корисна інформація</h5>
            <Link to="/">Про інтернет-магазин</Link>
            <Link to="/">Договор оферти</Link>
            <Link to="/">Політика конфіденційності</Link>
            <Link to="/">Угода користувача</Link>
            <Link to="/">Контакти</Link>
          </li>

          <li>
            <h5>Допомога користувачу</h5>
            <Link to="/">Статус замовлення</Link>
            <Link to="/">Історія переглядів</Link>
            <Link to="/">Кошик покупця</Link>
            <Link to="/">Товари в закладках</Link>
            <Link to="/">Робота в Gigant</Link>
          </li>

          <li>
            <h5>Швидка навігація</h5>
            <Link to="/">Акції та знижки</Link>
            <Link to="/">Оплата & Доставка</Link>
            <Link to="/">Гарантія та повернення</Link>
            <Link to="/">Особистий профіль</Link>
            <Link to="/">Новини магазину</Link>
          </li>

          <li className="footer__support">
            <h5>Зв'язок з нами</h5>
            <Link
              className="footer__link-with-icon"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:no-reply@example.com";
              }}
            >
              <Email />
              support@gigant.com.ua
            </Link>

            <Link
              className="footer__link-with-icon"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "tel:+380954460537";
              }}
            >
              <Phone />
              +38 (095) 446-05-37
            </Link>

            <Link
              className="footer__link-with-icon"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "tel:+380668902465";
              }}
            >
              <Phone />
              +38 (066) 890-24-65
            </Link>

            <div className="footer__social">
              <h3>Слідкуй за нами в соцмережах:</h3>

              <div className="footer__social-wrapper">
                <button>
                  <Instagram />
                </button>

                <button>
                  <Telegram />
                </button>

                <button>
                  <Facebook />
                </button>

                <button>
                  <Tiktok />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
