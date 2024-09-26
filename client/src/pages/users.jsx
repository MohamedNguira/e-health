import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 190,
    
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
        return (
            <Chip
                label={params.value}
                color={params.value === 'Accepted' ? 'success' : 'warning'}
            />
        );
    },
},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14,status:"Accepted",Email:"test@ensi-uma.tn" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31,status:"Accepted",Email:"test@ensi-uma.tn" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31,status:"Pending",Email:"test@ensi-uma.tn" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11,status:"Accepted" ,Email:"test@ensi-uma.tn"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,status:"Accepted",Email:"test@ensi-uma.tn"},
  { id: 6, lastName: 'Melisandre', firstName: "Neguira", age: 150,status:"Pending",Email:"test@ensi-uma.tn" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,status:"Accepted" ,Email:"test@ensi-uma.tn"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,status:"Accepted",Email:"test@ensi-uma.tn"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age:45 ,status:"Accepted" ,Email:"test@ensi-uma.tn"},
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