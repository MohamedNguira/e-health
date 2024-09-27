import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  GridRowModes,
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialRows = [
  {
    "id": 1,
    "Full name": "John Doe",
    "Doctor name": "Dr. Alice Smith",
    "Email": "john.doe@example.com",
    "CNAM_ID": 123456,
    "Chronic_Diseases": "Asthma"
  },
  {
    "id": 2,
    "Full name": "Jane Smith",
    "Doctor name": "Dr. Bob Johnson",
    "Email": "jane.smith@example.com",
    "CNAM_ID": 654321,
    "Chronic_Diseases": "Dysthyroidism"
  },
  {
    "id": 3,
    "Full name": "Emily White",
    "Doctor name": "Dr. Sarah Brown",
    "Email": "emily.white@example.com",
    "CNAM_ID": 789012,
    "Chronic_Diseases": "Hypertension"
  },
  {
    "id": 4,
    "Full name": "Michael Green",
    "Doctor name": "Dr. John Taylor",
    "Email": "michael.green@example.com",
    "CNAM_ID": 345678,
    "Chronic_Diseases": "COPD"
  },
  {
    "id": 5,
    "Full name": "Chris Black",
    "Doctor name": "Dr. Linda Martin",
    "Email": "chris.black@example.com",
    "CNAM_ID": 901234,
    "Chronic_Diseases": "Parkinson's Disease"
  },
  {
    "id": 6,
    "Full name": "Sarah Johnson",
    "Doctor name": "Dr. Emily Davis",
    "Email": "sarah.johnson@example.com",
    "CNAM_ID": 567890,
    "Chronic_Diseases": "Heart Failure"
  },
  {
    "id": 7,
    "Full name": "David Lee",
    "Doctor name": "Dr. Mark Wilson",
    "Email": "david.lee@example.com",
    "CNAM_ID": 234567,
    "Chronic_Diseases": "Tuberculosis"
  },
  {
    "id": 8,
    "Full name": "Sophia Harris",
    "Doctor name": "Dr. Robert Clark",
    "Email": "sophia.harris@example.com",
    "CNAM_ID": 678901,
    "Chronic_Diseases": "Hypopituitarism"
  },
  {
    "id": 9,
    "Full name": "Daniel Wilson",
    "Doctor name": "Dr. Laura Lewis",
    "Email": "daniel.wilson@example.com",
    "CNAM_ID": 890123,
    "Chronic_Diseases": "Chronic Bronchitis"
  },
  {
    "id": 10,
    "Full name": "Olivia Martinez",
    "Doctor name": "Dr. Patricia Thompson",
    "Email": "olivia.martinez@example.com",
    "CNAM_ID": 345890,
    "Chronic_Diseases": "Lung Cancer"
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel, openModal, setOpenModal } = props;

  const handleClick = () => {
    setOpenModal(true); // Open the modal
  };

  return (
    <GridToolbarContainer
      sx={{
        backgroundColor: "#3751FF",
        color: "white",
        padding: "10px",
        display: "flex",
        gap: "6px",
      }}
    >
      <Button color="gray" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = useState(initialRows);
  const [showChronicDiseases,setShowChronicDiseases] = useState(false); 
  const [rowModesModel, setRowModesModel] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [newRowData, setNewRowData] = useState({
    "Full name": "",
    "Doctor name": "",
    Email: "",
    CNAM_ID: "",
    Chronic_Diseases: "",
  });

  const navigate = useNavigate();
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 10000);
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        ...newRowData,
        isNew: true,
      },
    ]);
    setOpenModal(false); // Close the modal after submission
    setNewRowData({
      "Full name": "",
      "Doctor name": "",
      Email: "",
      CNAM_ID: "",
      Chronic_Diseases: "",
    }); // Reset form data
  };
  const diseases = [
    "Dysthyroïdies",
    "HTA sévère",
    "ASTHME ou BPCO",
    "Insuffisance cardiaque et troubles du rythme",
    "Tuberculose active",
    "Maladie de Parkinson",
    "Affections hypophysaires"
  ];
  const columns = [
    { field: "Full name", headerName: "Full name", width: 180, editable: true },
    {
      field: "Doctor name",
      headerName: "Doctor name",
      type: "string",
      width: 170,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "Email",
      headerName: "Email",
      type: "string",
      width: 190,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "CNAM_ID",
      headerName: "CNAM ID",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "Chronic_Diseases",
      headerName: "Chronic Diseases",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Asthma", "Diabetes"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: "gray" }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="gray"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
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
            toolbar: { setRows, setRowModesModel, openModal, setOpenModal },
          }}
        />
      </Box>

      {/* Modal for Adding New Record */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        {/* Patient data  */}
        {!showChronicDiseases?(
          <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 8,
          }}
        >
          <h3 className="text-2xl mb-10 ">Add new Patient</h3>

          <div className="flex justify-between gap-6">
          <TextField
            label="Full Name"
            name="Full name"
            value={newRowData["Full name"]}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CIN"
            name="CIN"
            value={newRowData["CIN"]}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          </div>

          <div className="flex justify-between gap-6">
            <TextField
              label="Doctor name"
              name="DoctorName"
              value={newRowData["DoctorName"]}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="CNAM ID"
              name="CNAM_ID"
              value={newRowData["CNAM_ID"]}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="number"
            />

          </div>
          <TextField
              label="Email"
              name="Email"
              value={newRowData["Email"]}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="number"
            />
          
          

          <div className="flex justify-end gap-8 mt-10">
            <button className=" px-3.5 py-3 bg-[#f1f1f1] rounded justify-center items-center gap-2.5 inline-flex text-center text-[#4f4f4f] text-sm ">Add Patient</button>
            <button onClick={() => {setShowChronicDiseases(true)}} className=" px-3.5 py-3 bg-[#c95c5c] rounded justify-center items-center gap-2.5 inline-flex text-white">Add Chronic disease</button>
          </div>
        </Box>):
        (
          <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 8,
          }}
        >
          <h3 className="text-2xl mb-10 ">Chronic diseases list</h3>
          <form className="flex gap-6 justify-between items-center">
            <div className="w-full flex flex-col gap-2">
            {diseases.map((disease, index) => (
        <div key={index}>
          <input
            type="radio"
            id={disease}
            name="chronicDisease"
            value={disease}
            
            
          />
          <label htmlFor={disease}>{disease}</label>
        </div>
      ))}
            </div>
          </form>
          <button onClick={() => navigate("/questionaire")} className="px-3.5 py-2.5 bg-[#f1f1f1] rounded justify-center items-center gap-2.5 inline-flex text-center text-[#4f4f4f] text-sm">Next</button>
        </Box>
        )
        }
      </Modal>
    </Box>
  );
}
