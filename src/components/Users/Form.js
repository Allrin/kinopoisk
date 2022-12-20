import { useState } from 'react';
import styles from '../styles/form.module.css';

const Form = ({ handleClick, title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.form}>
            <input
                className={styles.form_input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className={styles.form_input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button className={styles.form_btn} onClick={() => handleClick(email, password)}>
                {title}
            </button>
        </div>
    );
};

export default Form;
