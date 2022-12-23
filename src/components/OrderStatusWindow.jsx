import "../assets/styles/for_components/orderStatusWindow.scss";

const OrderStatusWindow = () => {
  return (
    <div className="order-status-window">
      <h3>Перевірка статусу замовлення</h3>

      <div className="order-status-form">
        <input type="text" placeholder="Ваш номер телефону" />
        <button>Перевірити</button>
      </div>
      <span>Приклад: 0954460537</span>
    </div>
  );
};

export default OrderStatusWindow;
