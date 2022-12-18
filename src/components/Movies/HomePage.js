import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPremieresMovies } from '../../services/movies';
import { areYouHere } from '../../redux/movies/actions';

import SliderMovies from './SliderMovies';

import '../styles/homePage.css';
import bespr from '../images/bespr.png';
import slavik from '../images/slavik.jpg';

const HomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(addPremieresMovies());
        dispatch(areYouHere(false));
    }, []);

    return (
        <>
            <div className="unprincipled">
                <div className="unprincipledDescription">
                    <Link to={`/movies/1355059`}>
                        <img src={bespr} />
                    </Link>
                    <p className="unprincipledDescriptionItem">
                        Смешные истории из жизни очень богатых москвичей.
                        Продолжение комедии по мотивам рассказов Александра
                        Цыпкина
                    </p>
                    <p className="unprincipledDescriptionItem">
                        <span className="unprincipledDescriptionItemSpan">
                            В главных ролях:
                        </span>{' '}
                        Павел Деревянко, Оксана Акиньшина, Павел Табаков, Аглая
                        Тарасова, Максим Виторган, Ингеборга Дапкунайте и др.
                    </p>
                    <p className="unprincipledDescriptionItem">
                        {' '}
                        <span className="unprincipledDescriptionItemSpan">
                            Режиссер:
                        </span>{' '}
                        Роман Прыгунов
                    </p>
                </div>
                <div className="unprincipledImg">
                    <Link to={`/movies/1355059`}>
                        <img src={slavik} />
                    </Link>
                </div>
            </div>

            <div>
                <h3 className="premieres">Будущие премьеры</h3>
                {movies && <SliderMovies movies={movies.docs} />}
            </div>
        </>
    );
};
export default HomePage;
