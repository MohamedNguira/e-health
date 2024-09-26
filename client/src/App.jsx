import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes,Router } from "react-router-dom";
import { themeSettings } from "./theme";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/users";
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from "react"
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const theme = createTheme(themeSettings());
    return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/*" element={isAuthenticated?<AdminDashboard />:<Navigate to="/login" />} />
            </Routes>
          
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
