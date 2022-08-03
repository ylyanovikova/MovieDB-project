import {Outlet} from "react-router"

import { Header } from "../components";

const MainLayout = () => {
    return (
        <div style={{display: "flex"}}>
            <Header/>
            <Outlet/>
        </div>
    )
};

export { MainLayout }