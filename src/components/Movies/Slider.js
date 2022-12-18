import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '../styles/person.css';

const Slider = (props) => {
    const { persons } = props;

    let checkPersons = [];

    const filterPersons = persons.filter((person) => {
        if (checkPersons.indexOf(person.id) === -1) {
            checkPersons.push(person.id);
            return true;
        }
        return false;
    });

    const profession = (job) => {
        switch (job) {
            case 'actor':
                return 'Актёр';

            case 'composer':
                return 'Композитор';

            case 'composer':
                return 'Композитор';

            case 'director':
                return 'Директор';

            case 'editor':
                return 'Редактор';

            case 'producer':
                return 'Режиссер';

            default:
                return job;
        }
    };

    const itemsPersons = filterPersons.map((person) => (
        <SplideSlide key={person.id}>
            <div className="bloc">
                <img
                    className="personImg"
                    src={person.photo}
                    alt={person.name}
                />
            </div>
            <p className="personData">
                {person.name ? person.name : person.enName}
            </p>
            <p className="personData">{profession(person.enProfession)}</p>
        </SplideSlide>
    ));
    return (
        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                snap: true,
                perPage: 6,
                breakpoints: {
                    800: {
                        perPage: 5,
                    },
                    560: {
                        perPage: 4,
                    },
                },
                pagination: false,
                arrows: true,
                cover: true,
            }}
            aria-label="My Favorite Images"
        >
            {itemsPersons}
        </Splide>
    );
};

export default Slider;
