import { useDispatch, useSelector } from 'react-redux';

import { searchMovies } from '../../services/movies';

import PaginationMovies from './PaginationMovies';

const SearchPage = () => {
    const dispatch = useDispatch();

    const searchMoviesList = useSelector(
        (state) => state.searchMovies.searchMovies
    );

    const nameSearch = useSelector((state) => state.searchMovies.nameSearch);
    console.log(nameSearch);

    const handleChange = (event, value) => {
        dispatch(searchMovies(nameSearch, value));
    };

    return (
        <>
            {searchMoviesList && (
                <PaginationMovies
                    movies={searchMoviesList}
                    handleChange={handleChange}
                />
            )}
        </>
    );
};

export default SearchPage;
