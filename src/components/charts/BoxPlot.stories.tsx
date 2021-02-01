import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import BoxPlot, { StatsPlotProps } from "./BoxPlot";
import { TooltipData } from "@visx/xychart/lib/types/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";

export default {
  title: "Components/Charts/Box Plot",
  component: BoxPlot
} as Meta;


const Template: Story<StatsPlotProps &
  WithTooltipProvidedProps<TooltipData>> = args => (
  <div className="page-content people py-5 white-bg">
    <BoxPlot {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {width: 500, height: 500};