import React, { FunctionComponent } from "react";
import { ScatterPlot } from "@impc/components";
import ReactDOM from "react-dom";

const series = [
  {
    seriesName: "Female WT",
    data: [
      { x: "2015-01-01", y: 100 },
      { x: "2017-01-02", y: 10 },
      { x: "2018-01-03", y: 200 },
    ],
  },
  {
    seriesName: "Male WT",
    data: [
      { x: "2020-01-05", y: 30 },
      { x: "2020-01-06", y: 40 },
      { x: "2020-08-10", y: 80 },
    ],
  },
  {
    seriesName: "Female HOM",
    data: [
      { x: "2020-03-01", y: 25 },
      { x: "2020-04-02", y: 100 },
      { x: "2021-05-03", y: 500 },
    ],
  },
  {
    seriesName: "Male HOM",
    data: [
      { x: "2020-01-01", y: 20 },
      { x: "2020-01-02", y: 50 },
      { x: "2020-01-03", y: 60 },
    ],
  },
];

const TestWidget: FunctionComponent = () => {
  return (
    <ScatterPlot
      series={series}
      xAxisLabel="Test X"
      yAxisLabel="Test Y"
    ></ScatterPlot>
  );
};

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".impc_late_adult_heatmap_widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(<TestWidget />, Div);
});
