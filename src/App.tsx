import React from 'react';
// import logo from './logo.svg';
import './styles/App.css';

import LoginView from './views/public/login.view'
import SignUpView from './views/public/signUp.view';
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { Menu } from 'semantic-ui-react';
import NotFound404 from './views/public/notFound404';





function App() {
  return (
    <div>
      <header>
        <h2>Client Connect</h2>
        <Menu>
          <Menu.Item>
            <Link to="/login">Log In</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signUp">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </header>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signUp" element={<SignUpView />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
