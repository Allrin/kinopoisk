import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import { setUser } from '../../redux/users/actions';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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

    return <Form title="Войти" handleClick={handleClick} />;
};

export default Login;
