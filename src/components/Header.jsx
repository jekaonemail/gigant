import { Link } from "react-router-dom";
import "../assets/styles/for_components/header.scss";

import Profile from "./icons/Profile";
import Bookmark from "./icons/Bookmark";
import Cart from "./icons/Cart";
import Catalog from "./icons/Catalog";
import Logotype from "./icons/Logotype";
import OrderStatus from "./icons/OrderStatus";
import Search from "./icons/Search";
import Menu from "./icons/Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logotype">
        <Logotype />
        GIGANT
      </div>

      <nav className="header__navbar">
        <button className="header__catalog-button">
          <Catalog />
          Каталог
        </button>

        <button className="header__check-order-status">
          <OrderStatus />
          Статус замовлення
        </button>

        <div className="header__search">
          <span className="header__search-icon-wrapper">
            <Search />
          </span>

          <input type="text" placeholder="Я шукаю.." />

          <button className="header__search-push">Знайти</button>
        </div>

        {/* <Link to="/">Про Gigant</Link>
        <Link to="/">Акції</Link>
        <Link to="/">Новини</Link>
        <Link to="/">Клієнтам</Link>
        <Link to="/">Контакти</Link> */}

        <button className="header__menu">
          <Menu />
          Відкрити меню
        </button>
      </nav>

      <div className="header__activity">
        <button className="header__sign-in">
          <Profile />
        </button>
        <button className="header__saved-products">
          <Bookmark />
        </button>

        <button className="header__cart-button" count={3}>
          <Cart />
        </button>
      </div>
    </header>
  );
};

export default Header;
