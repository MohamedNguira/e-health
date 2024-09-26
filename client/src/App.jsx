// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import { useNavigate } from 'react-router-dom';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleSignupSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup onSignUpSuccess={handleSignupSuccess} />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/details" element={<Details onNavigateToDashboard={handleLoginSuccess} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px' },
  navLink: { textDecoration: 'none', fontSize: '18px', color: 'blue' },
};

export default App;
