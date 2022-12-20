import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from './Form';
import { setUser } from '../../redux/users/actions';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Registre = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.id,
                        token: user.accessToken,
                    })
                );
                navigate('/');
            })
            .catch(() => console.log('Ошибка'));
    };

    return <Form title="Зарегестироваться" handleClick={handleClick} />;
};

export default Registre;
