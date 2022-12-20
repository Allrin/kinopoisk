import { Link } from 'react-router-dom';
import Registre from './Registre';
import styles from '../styles/loginandRegisterPage.module.css'

const RegistrePage = () => {
    return (
        <div className={styles.container}>
            <h1>Зарегистрироваться</h1>
            <Registre />
            <p>
                У вас уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </div>
    );
};

export default RegistrePage;
