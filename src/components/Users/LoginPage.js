import { Link } from 'react-router-dom';
import Login from './Login';

import styles from '../styles/loginandRegisterPage.module.css';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <h1>Войти</h1>
            <Login />
            <p>
                Или <Link to="/registre"> Зарегистрироваться</Link>
            </p>
        </div>
    );
};

export default LoginPage;
