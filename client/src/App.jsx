import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes,Router } from "react-router-dom";
import { themeSettings } from "./theme";
import AdminDashboard from "./pages/AdminDashboard";
import PharmacistDashboard from "./pages/PharmacistDashboard";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'
import { useState } from "react"
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleSignupSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
    const theme = createTheme(themeSettings());
    return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          
            <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup onSignUpSuccess={handleSignupSuccess} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/details" element={<Details onNavigateToDashboard={handleLoginSuccess} />} />
            <Route path="/admin/*" element={isAuthenticated?<AdminDashboard />:<Navigate to="/login" />} />
            <Route path="/pharmacist/*" element={isAuthenticated?<PharmacistDashboard />:<Navigate to="/login" />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
          
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

