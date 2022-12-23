import "../assets/styles/for_components/signIn__content.scss";

const SignInWindow = () => {
  return (
    <div className="signIn__content">
      <h3>Вхід до профілю</h3>
      <p>
        Отримайте більше можливостей користування магазином, увійдіть в свій
        профіль
      </p>

      <div className="signInForm">
        <input type="text" placeholder="Введіть ваш e-mail" />
        <input type="password" placeholder="Ваш пароль" />
        <button>Увійти</button>
      </div>

      <span>
        Ще не зареєстровані? <button>Створити аккаунт</button>
      </span>
    </div>
  );
};

export default SignInWindow;
