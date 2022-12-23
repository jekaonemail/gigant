import "../assets/styles/for_components/menuWindow.scss";
import { useDispatch } from "react-redux";
import { hideMenuWindow } from "../redux/menuSlice";

const MenuWindow = () => {
  const dispatch = useDispatch();

  document.body.style.overflow = "hidden";

  return (
    <div
      className="menuWrapper"
      onClick={() => {
        document.body.style.overflow = "visible";
        dispatch(hideMenuWindow());
      }}
    >
      <div className="menuContent" onClick={(e) => e.stopPropagation()}>
        <h3 className="menu__logo">
          GIGANT
          <button
            onClick={() => {
              document.body.style.overflow = "visible";
              dispatch(hideMenuWindow());
            }}
          >
            X
          </button>
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero cum ab
          maiores quia aut sapiente voluptatem excepturi nihil assumenda, odio
          reprehenderit tenetur facere eius non ea? Cumque voluptate sit
          adipisci.
        </p>
      </div>
    </div>
  );
};

export default MenuWindow;
