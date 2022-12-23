import "../assets/styles/for_components/header.scss";

import OrderStatusWindow from "./OrderStatusWindow";

import Popup from "reactjs-popup";

import {
  Profile,
  Bookmark,
  Cart,
  Catalog,
  Logotype,
  OrderStatusIcon,
  Search,
  Menu,
} from "./icons/icons";
import { useState } from "react";
import MenuWindow from "./MenuWindow";
import SignInWindow from "./SignInWindow";
import BookmarksWindow from "./BookmarksWindow";
import CartWindow from "./CartWindow";

import { useSelector, useDispatch } from "react-redux";
import { showMenuWindow } from "../redux/menuSlice";

const Header = () => {
  const menuWindow = useSelector((state) => state.menuWindow.value);
  const dispatch = useDispatch();

  const [orderWindow, setOrderWindow] = useState(false);
  const handleOrderWindow = (e) => {
    e.preventDefault();

    orderWindow ? setOrderWindow(false) : setOrderWindow(true);
  };

  const overlayStyle = {
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(10px)",
  };

  return (
    <header className="header">
      {menuWindow && <MenuWindow />}

      <div className="header__logotype">
        <Logotype />
        GIGANT
      </div>

      <nav className="header__navbar">
        {/* WINDOWS */}

        {orderWindow && <OrderStatusWindow />}

        <button className="header__catalog-button">
          <Catalog />
          Каталог
        </button>

        <button
          onClick={handleOrderWindow}
          className="header__check-order-status"
        >
          <OrderStatusIcon />
          Статус замовлення
        </button>

        <div className="header__search">
          <span className="header__search-icon-wrapper">
            <Search />
          </span>

          <input type="text" placeholder="Я шукаю.." />

          <button className="header__search-push">Знайти</button>
        </div>

        <button
          onClick={() => dispatch(showMenuWindow())}
          className="header__menu"
        >
          <Menu />
          Відкрити меню
        </button>
      </nav>

      <div className="header__activity">
        <Popup
          trigger={
            <button className="header__sign-in">
              <Profile />
            </button>
          }
          modal
          nested
          lockScroll
          {...{ overlayStyle }}
        >
          {(close) => (
            <>
              <div className="modal__wrapper">
                <SignInWindow />
                <span className="closeModal" onClick={close}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 348.333 348.334"
                  >
                    <g>
                      <path
                        fill="#000"
                        d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </>
          )}
        </Popup>

        <Popup
          trigger={
            <button className="header__saved-products">
              <Bookmark />
            </button>
          }
          modal
          nested
          lockScroll
          {...{ overlayStyle }}
        >
          {(close) => (
            <>
              <div className="modal__wrapper">
                <BookmarksWindow />
                <span className="closeModal" onClick={close}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 348.333 348.334"
                  >
                    <g>
                      <path
                        fill="#000"
                        d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </>
          )}
        </Popup>

        <Popup
          trigger={
            <button className="header__cart-button" count={3}>
              <Cart />
            </button>
          }
          modal
          nested
          lockScroll
          {...{ overlayStyle }}
        >
          {(close) => (
            <>
              <div className="modal__wrapper">
                <CartWindow action={() => close} />
                <span className="closeModal" onClick={close}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 348.333 348.334"
                  >
                    <g>
                      <path
                        fill="#000"
                        d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </>
          )}
        </Popup>
      </div>
    </header>
  );
};

export default Header;
