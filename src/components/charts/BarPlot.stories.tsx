import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { BarPlot, IBarPlotProps } from "./BarPlot";

export default {
  title: "Components/Charts/Bar Plot",
  component: BarPlot
} as Meta;

const Template: Story<IBarPlotProps> = args => (
  <div className="page-content people py-5 white-bg" style={{ height: 500 }}>
    <BarPlot {...args} />
  </div>
);

export const Hi = Template.bind({});
Hi.args = { greeting: "Hi", name: "Jeremy" };


export const Hello = Template.bind({});
Hello.args = { greeting: "Hello", name: "Federico" };
