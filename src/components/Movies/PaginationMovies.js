import { useSelector } from 'react-redux';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useIsMibile from '../hocks/useIsMobile';
import MoviesList from './MoviesList';
import '../styles/pagination.css';

const PaginationMovies = ({ handleChange, movies }) => {
    const isMobile = useIsMibile();
    const myTheme = useSelector((state) => state.theme.theme);

    const theme = createTheme({
        palette: {
            mode: `${myTheme}`,
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                    <Typography component={'span'}>
                        <MoviesList movies={movies.docs} />
                    </Typography>
                    <Pagination
                        onChange={handleChange}
                        count={movies.pages}
                        siblingCount={isMobile ? 0 : 2}
                        size={isMobile ? 'small' : 'medium'}
                        color="primary"
                    />
                </Stack>
            </ThemeProvider>
        </>
    );
};

export default PaginationMovies;
