import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import swal from 'sweetalert';

import useIsMibile from '../hooks/useIsMobile';
import '../styles/starRating.css';

const StarRating = ({ rating, onChange }) => {
    const isMobile = useIsMibile();
    const theme = useSelector((state) => state.theme.theme);

    const onPick = (newValue) => {
        swal({
            title: `Ваша оценка: ${newValue}`,
            // icon: 'success',
            button: 'Ok',
            className: `${theme === 'dark' ? 'darkModal' : 'lightModal'}`,
        });
    };

    return (
        <>
            <Stack spacing={3}>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="half-rating-read"
                        value={rating}
                        precision={0.1}
                        max={10}
                        size={isMobile ? 'small' : 'large'}
                        onChange={(e, newValue) => onPick(newValue)}
                        emptyIcon={
                            <StarIcon
                                style={{
                                    color: theme === 'dark' ? 'white' : 'black',
                                }}
                                fontSize="inherit"
                            />
                        }
                    />
                    <Box className="rating">{rating}</Box>
                </Box>
            </Stack>
        </>
    );
};
export default StarRating;
