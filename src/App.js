import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './components/Movies/MoviesPage';
import './App.css';

// import Menu from './components/Header/Menu';
import ItemPage from './components/Movies/ItemPage';
import Liked from './components/Movies/Liked';
import HomePage from './components/Movies/HomePage';
import SeriesPage from './components/Movies/SeriesPage';
import CartoonPage from './components/Movies/CartoonPage';
import SearchPage from './components/Movies/SearchPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <>
            <Header />
            {/* <Menu /> */}
            <main className={theme === 'dark' ? 'dark' : 'light'}>
                <div className="containerMain">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/moviesPage" element={<MoviesPage />} />
                        <Route path="/seriesPage" element={<SeriesPage />} />
                        <Route path="/cartoonPage" element={<CartoonPage />} />
                        <Route path="/liked" element={<Liked />} />
                        <Route path="/movies/:id" element={<ItemPage />} />
                        <Route path="searchPage" element={<SearchPage />} />
                    </Routes>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
