import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ScatterPlot, IScatterPlotProps } from "./ScatterPlot";

export default {
  title: "Components/Charts/Scatter Plot",
  component: ScatterPlot
} as Meta;

const series = [
  {
    seriesName: "Female WT",
    data: [
      { x: "2015-01-01", y: 100 },
      { x: "2017-01-02", y: 10 },
      { x: "2018-01-03", y: 200 }
    ]
  },
  {
    seriesName: "Male WT",
    data: [
      { x: "2020-01-05", y: 30 },
      { x: "2020-01-06", y: 40 },
      { x: "2020-08-10", y: 80 }
    ]
  },
  {
    seriesName: "Female HOM",
    data: [
      { x: "2020-03-01", y: 25 },
      { x: "2020-04-02", y: 100 },
      { x: "2021-05-03", y: 500 }
    ]
  },
  {
    seriesName: "Male HOM",
    data: [
      { x: "2020-01-01", y: 20 },
      { x: "2020-01-02", y: 50 },
      { x: "2020-01-03", y: 60 }
    ]
  }
];

const window = [
  { x: "2015-01-01", y: 0 },
  { x: "2017-01-02", y: 200 },
  { x: "2020-01-03", y: 300 },
  { x: "2021-01-03", y: 0 }
];

const Template: Story<IScatterPlotProps> = args => (
  <div className="page-content people py-5 white-bg">
    <ScatterPlot {...args} />
  </div>
);

export const Unidimensional = Template.bind({});
Unidimensional.args = {
  xAxisLabel: "Date of experiment",
  yAxisLabel: "Total cholesterol (mg/dl)",
  series: series
};

export const UnidimensionalWithWindow = Template.bind({});
UnidimensionalWithWindow.args = {
  xAxisLabel: "Date of experiment",
  yAxisLabel: "Total cholesterol (mg/dl)",
  series: series,
  window: window
};
