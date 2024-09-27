import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import {
  GridRowModes,
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { useState,useId } from 'react';
import { Grid } from '@mui/material';


const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
    {
      id: 1,
      Name: "Aspirin",
      ID: "MED12345",
      Category: "Pain Relief",
      Quantity: 50,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
    {
      id: 2,
      Name: "Metformin",
      ID: "MED23456",
      Category: "Diabetes",
      Quantity: 30,
      Chronic_Deseases: "Diabetes",
      Action:"View more details"
    },
    {
      id: 3,
      Name: "Albuterol",
      ID: "MED34567",
      Category: "Asthma",
      Quantity: 40,
      Chronic_Deseases: "Asthma",
      Action:"View more details"
    },
    {
      id: 4,
      Name: "Lisinopril",
      ID: "MED45678",
      Category: "Hypertension",
      Quantity: 25,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
    {
      id: 5,
      Name: "Simvastatin",
      ID: "MED56789",
      Category: "Cholesterol",
      Quantity: 60,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
    {
      id: 6,
      Name: "Insulin",
      ID: "MED67890",
      Category: "Diabetes",
      Quantity: 20,
      Chronic_Deseases: "Diabetes",
      Action:"View more details"
    },
    {
      id: 7,
      Name: "Hydrochlorothiazide",
      ID: "MED78901",
      Category: "Hypertension",
      Quantity: 35,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
    {
      id: 8,
      Name: "Montelukast",
      ID: "MED89012",
      Category: "Asthma",
      Quantity: 45,
      Chronic_Deseases: "Asthma",
      Action:"View more details"
    },
    {
      id: 9,
      Name: "Levothyroxine",
      ID: "MED90123",
      Category: "Thyroid",
      Quantity: 55,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
    {
      id: 10,
      Name: "Metoprolol",
      ID: "MED01234",
      Category: "Hypertension",
      Quantity: 70,
      Chronic_Deseases: "None",
      Action:"View more details"
    },
  ];
  
  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
  
    const handleClick = () => {
      const id = Math.floor(Math.random() * 10000); // Generate a unique ID
      setRows((oldRows) => [
        ...oldRows,
        {
          id,
          Name: '', // Initialize as empty
          ID: '', // Should be a string
          Category: '', // Can be empty or a predefined category
          Quantity: 0, // Initialize as 0 for quantity
          Chronic_Deseases: '', // Can be empty or one of the options like 'Asthma' or 'Diabetes'
          isNew: true, // Mark the row as new
        },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'Name' }, // Focus on 'Name'
      }));
    };
  
    return (
      <GridToolbarContainer sx={{ backgroundColor: '#3751FF', color: 'white' }}>
        <div className='flex gap-5 items-center'>
            <Button color="gray" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
            </Button>
            <GridToolbar />
        </div>
      </GridToolbarContainer>
    );
  }
  
  export default function MedicineList() {
    const [rows, setRows] = useState(initialRows);
    const [rowModesModel, setRowModesModel] = useState({});
  
    const handleRowEditStop = (params, event) => {
      if (params.reason === GridRowEditStopReasons.rowFocusOut) {
        event.defaultMuiPrevented = true;
      }
    };
  
    const handleEditClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };
  
    const handleSaveClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };
  
    const handleDeleteClick = (id) => () => {
      setRows(rows.filter((row) => row.id !== id));
    };
  
    const handleCancelClick = (id) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });
  
      const editedRow = rows.find((row) => row.id === id);
      if (editedRow.isNew) {
        setRows(rows.filter((row) => row.id !== id));
      }
    };
  
    const processRowUpdate = (newRow) => {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
    };
  
    const handleRowModesModelChange = (newRowModesModel) => {
      setRowModesModel(newRowModesModel);
    };
  
    const columns = [
      { field: 'Name', headerName: 'Medicine name', width: 180, editable: true },
      {
        field: 'ID',
        headerName: 'Medicine ID',
        type: 'string',
        width: 170,
        align: 'left',
        headerAlign: 'left',
        editable: true,
      },
      {
        field: 'Category',
        headerName: 'Category',
        type: 'string',
        width: 190,
        align: 'left',
        headerAlign: 'left',
        editable: true,
      },
      {
        field: 'Quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
        editable: true,
      },
      {
        field: 'Chronic_Deseases',
        headerName: 'Chronic Deseases',
        width: 200,
        editable: true,
        type: 'singleSelect',
        valueOptions: ['Asthma', 'Diabetes'],
      },
      {
        field: 'action',
        type: 'string',
        headerName: 'Action',
        width: 100,
      },
    ];
  
    return (
      <Box
        sx={{
          height: 500,
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
            showQuickFilter: true,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    );
  }