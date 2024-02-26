// import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header'
import Nav from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Users from './components/users/users';



function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='hero'>
          <Nav />
          <div className='content'>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<Navigate to="/profile" replace />} />
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
