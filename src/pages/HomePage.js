import { Outlet } from "react-router-dom";

import { SearchForm } from "../components";

const HomePage = () => {
    return (
        <div style={{ width: "100%" }}>
            <SearchForm />
            <Outlet />
        </div>
    )
};

export { HomePage }