import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { Pharmacists } from '../data/data';

const rows = Pharmacists;
const columns = [

    {
      field: "name",
      headerName: "Full name",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "address",
      width: 150,
      editable: true,
    },
    { field: "pharmacyName", headerName: "Pharmacy name", width: 150 },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 190,
    },
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




const Users = () => {
  return (
    <div className='flex flex-col mx-20 py-10'>
        <h1 className='text-3xl font-bold mb-5'>Pharmacists</h1>
        <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        className=''
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
        
    </div>
  )
}

export default Users