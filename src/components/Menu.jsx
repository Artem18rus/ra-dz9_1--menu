import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" to="/">
        Главная
      </NavLink>
      <NavLink className="menu__item" to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className="menu__item" to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className="menu__item" to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
}
