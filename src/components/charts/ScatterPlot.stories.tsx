import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ScatterPlot, IProps } from "./ScatterPlot";

export default {
  title: "Components/Charts/Scatter Plot",
  component: ScatterPlot,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<IProps> = args => <ScatterPlot {...args} />;

export const Unidimensional = Template.bind({});
Unidimensional.args = {
  title: "Test"
};

export const UnidimensionalWindow = Template.bind({});
UnidimensionalWindow.args = {
  title: "Test 1"
};
