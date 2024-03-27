// import logo from './logo.svg';
import './App.scss';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loading from './components/preloader/loading';

const NewsPage = lazy(() => import('./components/news/news-page'));
const Header = lazy(() => import('./components/header/header'));
const Nav = lazy(() => import('./components/navbar/navbar'));
const Profile = lazy(() => import('./components/profile/profile'));
const Dialogs = lazy(() => import('./components/dialogs/dialogs'));
const Users = lazy(() => import('./components/users/users'));



function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='hero'>
          <Nav />
          <div className='content'>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/users" element={<Users />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/settings" element={<Loading />} />
                <Route path="*" element={<Navigate to="/profile" replace />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
