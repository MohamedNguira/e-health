import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PharmacistDashboardPage from "./PharmacistDashboardPage";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import { Pharmacists } from "../data/data";
import { assets } from "../assets/assets";
import {
    Box,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
  import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
  import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
  import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Patients from "./Patients";
import Statistics from "./Statistics";
import Inventory from "./Inventory";
import Medicine from "./Medicine";
import Tests from "./Tests";
const PharmacistDashboard = () => {
    const navigate = useNavigate();
  return (
    // Sidebar pharmacist space
    <Box sx={{ display: "flex" }}>
      <Box
      sx={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#363740",
        position: "fixed", // Sidebar stays fixed
        top: 0,
        left: 0,
        boxShadow: 1,
        padding: "20px",
        
      }}
      className="mb-[25px]"
    >
      <img src={assets.logodark}  className="mb-5 cursor-pointer" />
      <hr className="border-gray-300 "/>
      <List>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/pharmacist/dashboard")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <PieChartRoundedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Overview" className="text-white" />
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer"  onClick={()=>navigate("/pharmacist/patients")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <PeopleAltOutlinedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Patients" className="text-white" />
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/pharmacist/tests")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <ConfirmationNumberOutlinedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Tests" className="text-white"/>
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/pharmacist/stats")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <StackedLineChartRoundedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Statistics" className="text-white"/>
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/pharmacist/inventory")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <InventoryRoundedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Inventory" className="text-white"/>
        </ListItem>
      <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/pharmacist/chat")} sx={{
          '&:hover': {
            backgroundColor: '#ffffff20',
            borderRadius: '10px',  
          }
        }}>
          <MessageRoundedIcon className="h-6 w-6 text-white"/>
          <ListItemText primary="Pharma Assist" className="text-white"/>
        </ListItem>
      </List>

    </Box>
      <Box className="ml-60 w-full flex flex-col">
        {/* Navbar */}
        <div className="px-24 flex justify-between items-center">
        <div className="flex items-center gap-8 m-4">
                <div className='relative flex h-min w-[240px]'>
                <SearchIcon  className='absolute left-[4px] top-1/2 mr-2 h-6 w-6 -translate-y-1/2 transform cursor-pointer pl-1'/>
                <input  type='search' className='w-full rounded border-none bg-[#f5f5f5] p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none ' placeholder='Search...'/>
            </div>
        </div>

            <div className="flex gap-5 justify-between items-center">
                <NotificationsIcon className="h-10 w-10 "/>
                <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.2rem] bg-gray-200 md:inline-block'></div>
            </div>
        </div>
        <hr className="border-none mb-5 shadow-md bg-[#959595]"/>
        <Routes>
          <Route path="pharmacist" element={<Navigate to="/pharmacist/dashboard" replace />} />
          <Route path="dashboard" element={<PharmacistDashboardPage />} />
          <Route path="patients" element={<Patients />} />
          <Route path="stats" element={<Statistics />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="medicine" element={<Medicine />} />
          <Route path="tests" element={<Tests />} />
          
        </Routes>
      </Box>
    </Box>
  );
};

export default PharmacistDashboard;