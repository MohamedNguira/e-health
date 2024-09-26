import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/users";
function App() {
  const theme = createTheme(themeSettings()); // No more mode selection, always light

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box className="ml-60 w-full flex flex-col">
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/users" element={<Users />} />
                
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
