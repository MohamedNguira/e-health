// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/login" style={styles.navLink}>Login</Link>
        <Link to="/signup" style={styles.navLink}>Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px' },
  navLink: { textDecoration: 'none', fontSize: '18px', color: 'blue' },
};

export default App;
