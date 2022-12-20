import axios from 'axios';
import { addMovies, addDataMovie } from '../redux/movies/actions';
import { addSearchMovies } from '../redux/search/actions';

export const listMovies = (pageNumber) => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=movie&field=type&search=!null&field=poster.url&limit=20&page=${pageNumber}`
            )
            .then((response) => {
                const movies = response.data;
                dispatch(addMovies(movies));
            })
            .catch((err) => console.log(err));
    };
};

export const listCartoon = (pageNumber) => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=cartoon&field=type&search=!null&field=poster.url&limit=20&page=${pageNumber}`
            )
            .then((response) => {
                const movies = response.data;
                console.log(movies);
                dispatch(addMovies(movies));
            })
            .catch((err) => console.log(err));
    };
};

export const listSeries = (pageNumber) => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=tv-series&field=type&search=!null&field=poster.url&limit=20&page=${pageNumber}`
            )
            .then((response) => {
                const movies = response.data;
                console.log(movies);
                dispatch(addMovies(movies));
            })
            .catch((err) => console.log(err));
    };
};

export const descriptionMovie = (id) => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=${id}&field=id`
            )
            .then((response) => {
                const oneMovie = response.data;
                oneMovie.favorite = false;
                dispatch(addDataMovie(oneMovie));
            })
            .catch((err) => console.log(err));
    };
};

export const searchMovies = (name, pageNumber) => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=${name}&field=name&isStrict=false&search=!null&field=poster.url&limit=20&page=${pageNumber}`
            )
            .then((response) => {
                const movies = response.data;
                dispatch(addSearchMovies(movies));
            })
            .catch((err) => console.log(err));
    };
};

export const addPremieresMovies = () => {
    return function (dispatch) {
        axios
            .get(
                `https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=2023&field=year&search=!null&field=poster.url&limit=50`
            )
            .then((response) => {
                const movies = response.data;
                dispatch(addMovies(movies));
            })
            .catch((err) => console.log(err));
    };
};

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=матрица&field=name&isStrict=false&limit=100 - поиск по имени

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&sortField=rating.kp&sortType=-1&search=!null&field=poster.url сорт по рейтингу

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=cartoon&field=type&search=!null&field=poster.url - мульт

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=tv-series&field=type&search=!null&field=poster.url&limit=1000-сериалы

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&sortField=year&sortType=-1&search=!null&field=poster.url&limit=1000 - сортировка по году

//https://api.kinopoisk.dev/movie?token=ASKQFY5-6W84QYD-NNSAAPX-JD9379Q&search=2023&field=year&search=!null&field=poster.url&limit=10
