import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartComponent = ({ data, title }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-sm">
      {/* Pie chart container */}
      <div>
        <h3 className="font-semibold text-center mb-4">{title}</h3>
        <PieChart
          series={[
            {
              data: data,
            },
          ]}
          width={450}  // Adjust to fit well alongside the legend
          height={200}
        />
      </div>
    </div>
  );
};

const Statistics = () => {
  // Define a new color palette
  const colorPalette = [
    ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"], // Palette 1
    ["#FF9F40", "#FF6384", "#4BC0C0", "#36A2EB", "#FFCE56"], // Palette 2
    ["#FFCD57", "#36A2EB", "#4BC0C0", "#FF6384", "#FF9F40"], // Palette 3
    ["#FF6384", "#FF9F40", "#36A2EB", "#4BC0C0", "#9966FF"], // Palette 4
    ["#4BC0C0", "#FFCD57", "#FF6384", "#9966FF", "#FFCE56"], // Palette 5
    ["#36A2EB", "#9966FF", "#FF9F40", "#FFCD57", "#4BC0C0"], // Palette 6
  ];
  
  const dataSets = [
    {
      title: "Risk of over-reliance on Blue Reliever Inhaler",
      data: [
        { id: 0, value: 10, label: "Strongly Agree", color: colorPalette[0][0] },
        { id: 1, value: 20, label: "Agree", color: colorPalette[0][1] },
        { id: 2, value: 25, label: "Uncertain", color: colorPalette[0][2] },
        { id: 3, value: 25, label: "Disagree", color: colorPalette[0][3] },
        { id: 4, value: 20, label: "Strongly Disagree", color: colorPalette[0][4] },
      ],
    },
    {
      title: "I don’t worry about asthma when I have my Blue Inhaler",
      data: [
        { id: 0, value: 15, label: "Strongly Agree", color: colorPalette[1][0] },
        { id: 1, value: 25, label: "Agree", color: colorPalette[1][1] },
        { id: 2, value: 20, label: "Uncertain", color: colorPalette[1][2] },
        { id: 3, value: 25, label: "Disagree", color: colorPalette[1][3] },
        { id: 4, value: 15, label: "Strongly Disagree", color: colorPalette[1][4] },
      ],
    },
    {
      title: "My blue inhaler is the only asthma treatment I rely on",
      data: [
        { id: 0, value: 20, label: "Strongly Agree", color: colorPalette[2][0] },
        { id: 1, value: 30, label: "Agree", color: colorPalette[2][1] },
        { id: 2, value: 10, label: "Uncertain", color: colorPalette[2][2] },
        { id: 3, value: 20, label: "Disagree", color: colorPalette[2][3] },
        { id: 4, value: 20, label: "Strongly Disagree", color: colorPalette[2][4] },
      ],
    },
    {
      title: "Benefits of Using Blue Reliever Inhaler easily outweigh risks",
      data: [
        { id: 0, value: 30, label: "Strongly Agree", color: colorPalette[3][0] },
        { id: 1, value: 40, label: "Agree", color: colorPalette[3][1] },
        { id: 2, value: 15, label: "Uncertain", color: colorPalette[3][2] },
        { id: 3, value: 10, label: "Disagree", color: colorPalette[3][3] },
        { id: 4, value: 5, label: "Strongly Disagree", color: colorPalette[3][4] },
      ],
    },
    {
      title: "I feel safe using my Blue Inhaler regularly",
      data: [
        { id: 0, value: 40, label: "Strongly Agree", color: colorPalette[4][0] },
        { id: 1, value: 30, label: "Agree", color: colorPalette[4][1] },
        { id: 2, value: 15, label: "Uncertain", color: colorPalette[4][2] },
        { id: 3, value: 10, label: "Disagree", color: colorPalette[4][3] },
        { id: 4, value: 5, label: "Strongly Disagree", color: colorPalette[4][4] },
      ],
    },
    {
      title: "Frequency of Blue Inhaler use during the week",
      data: [
        { id: 0, value: 10, label: "Strongly Agree", color: colorPalette[5][0] },
        { id: 1, value: 30, label: "Agree", color: colorPalette[5][1] },
        { id: 2, value: 20, label: "Uncertain", color: colorPalette[5][2] },
        { id: 3, value: 20, label: "Disagree", color: colorPalette[5][3] },
        { id: 4, value: 20, label: "Strongly Disagree", color: colorPalette[5][4] },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 px-20 py-10 bg-[#F7F8FC]">
      {dataSets.map((item, index) => (
        <PieChartComponent key={index} data={item.data} title={item.title} />
      ))}
    </div>
  );
};

export default Statistics;
