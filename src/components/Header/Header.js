import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

import { UserInfo } from "../UserInfo/UserInfo";
import css from "./Header.module.css";
import "./style.css";

const Header = () => {
    return (
        <div className={css.header} id="menu">
            <UserInfo />
            <ul className={css.headerMenu}>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="movies">Movies</NavLink></li>
                <li><NavLink to="genres">Genres</NavLink></li>
                <li><NavLink to="popular">Popular</NavLink></li>
            </ul>
            <div className={css.switcher}>
                <div>Switch theme</div>
                <ThemeSwitcher />
            </div>
        </div>
    )
};

export { Header }
