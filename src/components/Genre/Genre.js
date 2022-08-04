import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Genre.module.css";

const Genre = ({ genre: { name, id } }) => {
    return (
        <NavLink to={`/genres/${id}`}>
            <div className={css.badge}>
                {name}
            </div>
        </NavLink>
    )
};

export { Genre }