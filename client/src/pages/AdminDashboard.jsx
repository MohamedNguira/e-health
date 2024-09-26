import React from "react";
import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Users from "./users";

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box className="ml-60 w-full flex flex-col">
        <Navbar />
        
        <Routes>
          <Route path="admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<></>} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
