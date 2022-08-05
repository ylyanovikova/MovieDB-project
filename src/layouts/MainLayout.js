import { Outlet } from "react-router"

import { Header } from "../components";
import css from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={css.flex}>
            <Header />
            <Outlet />
        </div>
    )
};

export { MainLayout }