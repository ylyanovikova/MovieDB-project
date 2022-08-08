import { PopularMovies } from "../components";

const PopularPage = () => {
    return (
        <div style={{ width: "calc(100vw - 200px)", marginTop: "20px" }}>
            <h1 style={{ textAlign: "center", margin: "0 auto" }}>
                Popular movies
            </h1>
            <PopularMovies />
        </div>
    )
};

export { PopularPage }