import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/theme/actions';
import Hamburger from 'hamburger-react';

import CustomizedSwitches from './SwitherTheme';
import { getAuth, signOut } from 'firebase/auth';

import Menu from './Menu';
import Search from '../Movies/Search';
import './header.css';

const Header = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const [isOpen, setOpen] = useState(false);

    const [isOpenLogout, setIsOpenLogout] = useState(false);

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
    const switchTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(changeTheme(nextTheme));
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div
                        className="containerLogo"
                        onMouseLeave={() => setOpen(false)}
                    >
                        {' '}
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            onMouseEnter={() => setOpen(true)}
                            size={25}
                            color="rgb(153, 153, 153)"
                        />
                        <svg
                            width="164px"
                            height="36px"
                            className="logo"
                            viewBox="0 0 164 36"
                            version="1.1"
                            onMouseEnter={() => setOpen(true)}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M58.859 18c0-5.889 2.954-10.6 8.281-10.6 5.328 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.28 10.6-5.328 0-8.282-4.71-8.282-10.6Zm8.281 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.065 0-2.954 3.533-2.954 7.652-.007 4.118.882 7.652 2.954 7.652ZM3.843 7.7v5.596h.294L7.98 7.7h5.32l-7.098 6.474.294.293L19.51 7.693v4.711L7.973 16.523v.292l11.537-1.028v4.419L7.973 19.178v.293l11.537 4.118v4.712L6.496 21.526l-.294.293 7.098 6.474H7.98l-3.843-5.596h-.294v5.596H0V7.686h3.843V7.7Zm19.23 0H28.1l-.294 12.363h.294L34.015 7.7h4.438v20.608h-5.026l.294-12.364h-.294L27.51 28.309h-4.438V7.7Zm23.955 0h-5.026v20.608h5.026v-9.13h4.137v9.13h5.026V7.7h-5.026v7.952h-4.137V7.7Zm45.25 0h-14.19v20.608h5.027V11.233h4.137v17.075h5.026V7.7Zm2.66 10.3c0-5.889 2.954-10.6 8.282-10.6 5.32 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.281 10.6-5.32 0-8.282-4.71-8.282-10.6Zm8.282 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.072 0-2.954 3.533-2.954 7.652 0 4.118.882 7.652 2.954 7.652ZM119.187 7.7h-5.026v20.608h4.438l5.916-12.364h.294l-.294 12.364h5.026V7.7h-4.438l-5.916 12.363h-.294l.294-12.363Zm23.669 13.541 4.732.585c-.889 4.12-2.954 6.774-7.364 6.774-5.32 0-8.016-4.71-8.016-10.6 0-5.889 2.689-10.6 8.016-10.6 4.317 0 6.475 2.649 7.364 6.475l-4.732 1.177c-.294-2.063-1.155-4.71-2.632-4.71-1.771 0-2.689 3.533-2.689 7.651 0 4.09.918 7.652 2.689 7.652 1.449.015 2.33-2.341 2.632-4.404Zm11.83-13.54h-4.732v20.607h4.732v-9.13h.294l3.549 9.13H164l-5.177-10.6L163.849 7.7h-5.026l-3.843 9.13h-.294V7.7Z"
                                fill="#fff"
                            ></path>
                        </svg>
                        <div>
                            {isOpen && <Menu onClick={closeMenu} user={user} />}
                        </div>
                    </div>
                    <div className="containerSearch">
                        <Search />
                        <CustomizedSwitches switchTheme={switchTheme} />
                        {user ? (
                            <>
                                <Link
                                    onClick={closeMenu}
                                    className="auth"
                                    to={user ? '/' : '/login'}
                                    onMouseEnter={() => setIsOpenLogout(true)}
                                >
                                    {user.email.split('@')[0]}
                                </Link>
                                {isOpenLogout && (
                                    <p
                                        onMouseEnter={() =>
                                            setIsOpenLogout(true)
                                        }
                                        onMouseLeave={() =>
                                            setIsOpenLogout(false)
                                        }
                                        className="logout"
                                        onClick={() => {
                                            logout();
                                            setIsOpenLogout(false);
                                        }}
                                    >
                                        Выйти
                                    </p>
                                )}
                            </>
                        ) : (
                            <Link
                                onClick={closeMenu}
                                className="auth"
                                to="/login"
                            >
                                Войти
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
