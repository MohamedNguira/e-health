import React from 'react'
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AdminDashboard from "../pages/AdminDashboard";
import Users from "../pages/users";
const Layout = () => {
  return (
    <>
         <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box className="ml-60 w-full flex flex-col">
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/patients" element={<Users />} />
              </Routes>
            </Box>
          </Box>
    </>
  )
}

export default Layout