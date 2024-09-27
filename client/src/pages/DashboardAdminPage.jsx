import React from "react";
import Card from "../components/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { Pharmacists } from "../data/data";

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
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 110,
    editable: true,
  },
  { field: "pharmacyName", headerName: "Pharmacy name", width: 150 },
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

const DashboardAdminPage = () => {
  return (
    <div className="flex flex-col  px-20 py-10 w-full">
      <h1 className="text-4xl font-bold mb-10 text-[#143265]">Welcome Back !</h1>
      <div className="flex gap-10 justify-between items-center w-full ">
        <div className="grid gap-10 grid-cols-2 w-[50%] justify-stretch">
          <Card number={246} name={"Total Pharmacists"} />
          <Card number={1230} name={"Total Patients"} />
          <Card number={"5%"} name={"Users monthly Increase"} />
          <Card number={26} name={"Pending requests"} />
        </div>
        <div className="bg-[#fffff] shadow-md rounded-md p-4 w-[50%]">
          <h3 className="text-lg text-black font-bold px-4">
            Number of users per Month :
          </h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [10, 25, 35, 19, 64, 22],
              },
            ]}
            width={500}
            height={270}
          />
         
        
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-5">Pharmacists</h1>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          className=""
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default DashboardAdminPage;
