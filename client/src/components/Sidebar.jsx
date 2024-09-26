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


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed", // Sidebar stays fixed
        top: 0,
        left: 0,
        boxShadow: 1,
        padding: "20px",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        My Sidebar
      </Typography>
      <hr className="border-gray-300 "/>
      <List>
        <ListItem button className="flex gap-4">
          <DashboardIcon className="h-6 w-6"/>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="flex gap-4">
          <PeopleIcon className="h-6 w-6"/>
          <ListItemText primary="Pharmacists" />
        </ListItem>
        <ListItem button className="flex gap-4" onClick={()=>navigate("/patients")}>
          <AutorenewIcon className="h-6 w-6"/>
          <ListItemText primary="Pending" />
        </ListItem>
        
      </List>
    </Box>
  );
};

export default Sidebar;
