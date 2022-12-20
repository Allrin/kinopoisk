import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './menu.css';
import gameimg from '../images/menu/gamemovie.png';

const Menu = ({ onClick }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    const logout = () => {
        if (user !== null) {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                })
                .catch((error) => {
                    // An error happened.
                });
        }
    };

    return (
        <>
            <nav className="menu">
                <Link onClick={onClick} className="menuItem" to="/">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m12 5.634 6.6 4.4V19.1h-4.35V13h-4.5v6.1H5.4v-9.066l6.6-4.4ZM9.75 21.5H3V8.75l9-6 9 6V21.5H9.75Z"
                            fill="rgba(255,255,255,.6)"
                        />
                    </svg>
                    Главная
                </Link>
                <Link onClick={onClick} className="menuItem" to="/moviesPage">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.24 2.5v19l2.4-1.38 11.714-6.736L21.76 12l-2.407-1.384L7.639 3.88 5.24 2.5Zm2.4 4.148v10.704L16.945 12 7.64 6.648Z"
                            fill="rgba(255,255,255,.6)"
                        />
                    </svg>
                    Фильмы
                </Link>
                <Link onClick={onClick} className="menuItem" to="/seriesPage">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.1 7.9H4.9v9.2h14.2V7.9ZM4.9 5.5H2.5v14h19v-14H4.9Z"
                            fill="rgba(255,255,255,.6)"
                        />
                    </svg>
                    Сериалы
                </Link>
                <Link onClick={onClick} className="menuItem" to="/cartoonPage">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.9 7.9h9.7v9.2H3.9V7.9ZM1.5 5.5H16v14H1.5v-14Zm19.4 2.4h1.6V5.5h-4v14h4v-2.4h-1.6V7.9Z"
                            fill="rgba(255,255,255,.6)"
                        />
                    </svg>
                    Мультфильмы
                </Link>
                <Link onClick={onClick} className="menuItem" to="/liked">
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgba(255, 255, 255, 0.6)"
                    >
                        <path d="M5.5 3.5h13V21L12 17.45 5.5 21V3.5Z" />
                    </svg>
                    Избранные
                </Link>
                {user ? (
                    <div className="menuItemAuth">
                        <Link
                            onClick={onClick}
                            
                            to="/login"
                        >
                            {user.email.split('@')[0]}
                        </Link>
                        <p
                            onClick={() => {
                                logout();
                                onClick();
                            }}
                        >
                            Выйти
                        </p>
                    </div>
                ) : (
                    <Link
                        onClick={onClick}
                        className="menuItemAuth"
                        to="/login"
                    >
                        Войти
                    </Link>
                )}

                {/* <img src={gameimg} /> */}
            </nav>
        </>
    );
};

export default Menu;
