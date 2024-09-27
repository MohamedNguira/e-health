import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { useState } from 'react';
import { Pharmacists } from '../data/data';

const rows = Pharmacists;
  
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "cnopt", headerName: "CNOPT", width: 150 },
    { field: "cnam", headerName: "CNAM", width: 150 },
    { field: "pharmacyName", headerName: "Pharmacy name", width: 150 },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        renderCell: (params) => {
          return (
            <Chip
              label={params.value}
              color={params.value === "accepted" ? "success" : "warning"}
            />
          );
        },
      },
  ];
  
const Pending = () => {
    const [selectedRow, setSelectedRow] = useState(null);
  const [dataRows, setDataRows] = useState(rows);

  // Handle row click to show card
  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  // Handle accept (changes status to accepted)
  const handleAccept = () => {
    setDataRows((prevRows) =>
      prevRows.map((row) =>
        row.id === selectedRow.id ? { ...row, status: "accepted" } : row
      )
    );
    setSelectedRow(null); // Hide the card after accepting
  };

  // Handle decline (remove from the table)
  const handleDecline = () => {
    setDataRows((prevRows) => prevRows.filter((row) => row.id !== selectedRow.id));
    setSelectedRow(null); // Hide the card after declining
  };
  return (
    <div className="flex flex-col  px-20 py-10 w-full">
      <h1 className="text-3xl font-bold mb-10">Pending Users :</h1>
      <div className='flex justify-start gap-8 items-start w-full'>
        <Box sx={{ height: 500, width: "70%" }}>
        <DataGrid
          rows={rows.filter((row) => row.status === "pending")}
          columns={columns}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleRowClick} // Row click event
        />
            </Box>
            {selectedRow && (
        <div className="flex flex-col gap-6 bg-[#ffffff] w-full p-4 rounded-lg shadow-md mt-4">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h3 className="text-[#A7A7A7]">ID: {selectedRow.cnopt}</h3>
            <h3 className="font-bold">{selectedRow.name}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="font-bold text-sm">CNOPT number:</p>
              <h4 className="text-[#A7A7A7]">{selectedRow.cnopt}</h4>
            </div>
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="font-bold text-sm">CNAM number:</p>
              <h4 className="text-[#A7A7A7]">{selectedRow.cnam}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start">
            <p className="font-bold text-sm">Pharmacy Address:</p>
            <h4 className="text-[#A7A7A7]">{selectedRow.address}</h4>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start">
            <p className="font-bold text-sm">Email:</p>
            <h4 className="text-[#A7A7A7]">{selectedRow.email}</h4>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start">
            <p className="font-bold text-sm">Phone number:</p>
            <h4 className="text-[#A7A7A7]">{selectedRow.phone}</h4>
          </div>
          
            <button className="bg-[#4FA648] text-white p-2 rounded-md" onClick={handleAccept}>
              Accept
            </button>
            <button className="bg-[#F55937] text-white p-2 rounded-md" onClick={handleDecline}>
              Decline
            </button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Pending ;