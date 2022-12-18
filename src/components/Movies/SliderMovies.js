import { Link } from 'react-router-dom';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '../styles/sliderMovie.css'
const SliderMovies = (props) => {
    const { movies } = props;

    const itemsMovies = movies.map((movie) => (
        <SplideSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                <div className="premieresMovie">
                    <img className="premieresMovieImg" src={movie.poster.url} />
                </div>
            </Link>
        </SplideSlide>
    ));
    return (
        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                snap: true,
                perPage: 4,
                breakpoints: {
                    560: {
                        perPage: 3,
                    },
                    360: {
                        perPage: 2,
                    },
                },
                pagination: false,
                arrows: true,
                cover: true,
            }}
            aria-label="My Favorite Images"
        >
            {itemsMovies}
        </Splide>
    );
};

export default SliderMovies;
