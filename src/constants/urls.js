const baseURL = process.env.REACT_APP_API;


const urls = {

    movies: `/discover/movie`,
    genres: `/genre/movie/list`
};

export default baseURL;
export { urls }