import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import FullFeaturedCrudGrid from "../components/PatientsList";

const PharmacistDashboardPage = () => {
  return (
    <div className="flex flex-col gap-20 px-20 py-10  bg-[#F7F8FC]">
      {/* cards */}
      <div className="flex justify-evenly gap-5 items-center">
        <div className="flex flex-col gap-5 items-start justify-between w-full text-[#606060] bg-white shadow-sm px-6 py-4 rounded-md">
          <h3 className="text-lg  font-bold">Total Patients</h3>
          <h2 className="text-3xl font-bold text-black">298</h2>
        </div>
        <div className="flex flex-col gap-5 items-start justify-between w-full text-[#3751FF] bg-white shadow-sm  px-6 py-4 rounded-md">
          <h3 className="text-lg  font-bold">Tests</h3>
          <h2 className="text-3xl font-bold ">536</h2>
        </div>
        <div className="flex flex-col gap-5 items-start justify-between w-full text-[#606060] bg-white shadow-sm  px-6 py-4 rounded-md">
          <h3 className="text-lg  font-bold">Inhalers Sold</h3>
          <h2 className="text-3xl font-bold text-black">213</h2>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full bg-white flex flex-col gap-4 justify-start py-6 px-4 shadow-sm">
        <h2 className="text-xl text-black">
          Relationship between patients and Inhalers
        </h2>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Using Inhalers Moderately" },
                { id: 1, value: 15, label: "Dependent On Inhaler" },
                { id: 2, value: 20, label: "Independent From Inhalers" },
              ],
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={250}
        />
      </div>

      {/* Table data */}
      <div className="flex flex-col gap-6">
      <h2 className='text-xl p-0 m-0 text-black'>Patient's List :</h2>
      <FullFeaturedCrudGrid />
      </div>

    </div>
  );
};

export default PharmacistDashboardPage;
