import { NavLink } from "react-router-dom";

import { UserInfo } from "../UserInfo/UserInfo";
import css from "./Header.module.css";

const Header = ()=>{
    return(
        <div className={css.header}>
            <UserInfo/>
            <ul className={css.headerMenu}>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="movies">Movies</NavLink></li>
                <li><NavLink to="genres">Genres</NavLink></li>
                <li><NavLink to="actors">Actors</NavLink></li>
            </ul>
        </div>
    )
};

export {Header}