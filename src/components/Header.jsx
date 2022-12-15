import { Link } from "react-router-dom";
import "../assets/styles/for_components/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logotype">GIGANT</div>

      <nav className="header__navbar">
        <Link to="/">Головна</Link>
        <Link to="/">Про Faststore</Link>
        <Link to="/">Доставка</Link>
        <Link to="/">Оплата</Link>
        <Link to="/">Контакти</Link>
      </nav>

      <div className="header__activity">
        <button className="header__sign-in">Мій профіль</button>
        <button className="header__saved-products">Закладки</button>

        <button className="header__cart-button" count={3}>
          Кошик
        </button>
      </div>
    </header>
  );
};

export default Header;
