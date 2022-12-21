import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classNames from 'classnames';
import Slider from './Slider';
import StarRating from './StarRating';

import { descriptionMovie } from '../../services/movies';

import { addDataMovie } from '../../redux/movies/actions';
import {
    addFavoritesMovies,
    deleteFavoritesMovies,
} from '../../redux/favorites/actions';

import styles from '../styles/itemPage.module.css';
import loadBLack from '../images/loadBlack.gif';
import loadWhite from '../images/loadWhite.gif';

const ItemPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const oneMovie = useSelector((state) => state.movies.oneMovie);
    console.log(oneMovie);
    const favoritesMovies = useSelector(
        (state) => state.favoritesMovies.favoritesMovies
    );

    useEffect(() => {
        dispatch(descriptionMovie(id));
    }, [id]);

    const searchTreailerYoutube = (videos) => {
        let url = '';
        if (videos.length > 0) {
            url = videos.find(
                (video) =>
                    video.site === 'youtube' &&
                    (video.type === 'TRAILER' || video.name === 'Трейлер')
            ).url;
        }
        console.log(url);

        return url;
    };

    const movieIsFavoritesMovies = () => {
        let indexMovie = favoritesMovies.findIndex(
            (movie) => movie.id === oneMovie.id
        );
        return indexMovie;
    };

    const handleClick = () => {
        if (movieIsFavoritesMovies() === -1) {
            oneMovie.favorite = true;
            dispatch(addFavoritesMovies(oneMovie));
        } else {
            oneMovie.favorite = false;
            dispatch(deleteFavoritesMovies(oneMovie));
        }
        dispatch(addDataMovie({ ...oneMovie }));
    };

    // var btn = classNames(styles.sectionHeadDescriptionButton);

    return (
        <>
            {oneMovie ? (
                <>
                    <div className={styles.sectionHead}>
                        <div className={styles.sectionHeadPreview}>
                            <img
                                className={styles.poster}
                                src={oneMovie.poster.previewUrl}
                            />

                            {searchTreailerYoutube(oneMovie.videos.trailers) ? (
                                <div className={styles.trailer}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src={searchTreailerYoutube(
                                            oneMovie.videos.trailers
                                        )}
                                    ></iframe>
                                </div>
                            ) : (
                                <div className={styles.trailer}>
                                    <p
                                        className={
                                            styles.sectionHeadDescriptionAboutMovie
                                        }
                                    >
                                        Нет трейлера
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className={styles.sectionHeadDescription}>
                            <div
                                className={styles.sectionHeadDescriptionHeader}
                            >
                                <h2
                                    className={
                                        styles.sectionHeadDescriptionTitle
                                    }
                                >
                                    {' '}
                                    {oneMovie.name
                                        ? oneMovie.name
                                        : oneMovie.alternativeName}
                                </h2>
                                <button
                                    className={
                                        styles.sectionHeadDescriptionButton
                                    }
                                    onClick={handleClick}
                                >
                                    <span
                                        className={
                                            movieIsFavoritesMovies() === -1
                                                ? styles.sectionHeadDescriptionButtonImgAdd
                                                : styles.sectionHeadDescriptionButtonImgDelete
                                        }
                                    ></span>
                                    Буду смотреть
                                </button>
                            </div>

                            <div>
                                <div className={styles.card}>
                                    <h3
                                        className={
                                            styles.sectionHeadDescriptionAboutMovie
                                        }
                                    >
                                        О фильме
                                    </h3>
                                    <div
                                        className={
                                            styles.sectionHeadDescriptionBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            Год производства
                                        </p>
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            {oneMovie.year}
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            styles.sectionHeadDescriptionBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            Страна
                                        </p>
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            {oneMovie.countries[0].name}
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            styles.sectionHeadDescriptionBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            Жанр
                                        </p>
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionItem
                                            }
                                        >
                                            {oneMovie.genres.map(
                                                (el) => `${el.name} `
                                            )}
                                        </p>
                                    </div>
                                    {oneMovie.movieLength && (
                                        <div
                                            className={
                                                styles.sectionHeadDescriptionBlock
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.sectionHeadDescriptionItem
                                                }
                                            >
                                                Время
                                            </p>
                                            <p
                                                className={
                                                    styles.sectionHeadDescriptionItem
                                                }
                                            >
                                                {oneMovie.movieLength} мин
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h3
                                        className={
                                            styles.sectionHeadDescriptionAboutMovie
                                        }
                                    >
                                        Описание
                                    </h3>
                                    {oneMovie.description ? (
                                        <p
                                            className={
                                                styles.sectionHeadDescriptionText
                                            }
                                        >
                                            {oneMovie.description}
                                        </p>
                                    ) : (
                                        <p>Нет описания</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider persons={oneMovie.persons} />

                    <div>
                        <h3 className={styles.sectionHeadDescriptionAboutMovie}>
                            Рейтинг фильма
                        </h3>
                        <StarRating rating={oneMovie.rating.imdb} />
                    </div>
                </>
            ) : (
                <img
                    className="loading"
                    src={myTheme === 'dark' ? loadWhite : loadBLack}
                />
            )}
        </>
    );
};

export default ItemPage;
