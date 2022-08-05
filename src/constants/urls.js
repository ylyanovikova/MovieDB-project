const baseURL = process.env.REACT_APP_API;


const urls = {

    movies: `/discover/movie`,
    genres: `/genre/movie/list`,
    search: `/search/keyword`,
    movie: `/movie`
};

export default baseURL;
export { urls }