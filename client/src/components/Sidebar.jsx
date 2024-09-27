import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        position: "fixed", // Sidebar stays fixed
        top: 0,
        left: 0,
        boxShadow: 1,
        padding: "20px",
        
      }}
      className="mb-[25px]"
    >
      <img src={assets.logo}  className="mb-5 cursor-pointer" />
      <hr className="border-gray-300 "/>
      <List>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/admin/dashboard")}>
          <DashboardIcon className="h-6 w-6"/>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/admin/users")}>
          <PeopleIcon className="h-6 w-6"/>
          <ListItemText primary="Pharmacists" />
        </ListItem>
        <ListItem button className="flex gap-4 cursor-pointer" onClick={()=>navigate("/admin/pending")}>
          <AutorenewIcon className="h-6 w-6"/>
          <ListItemText primary="Pending" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
