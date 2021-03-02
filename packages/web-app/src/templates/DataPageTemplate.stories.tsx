import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DataPageTemplate } from "./DataPageTemplate";

export default {
  title: "Templates/DataPageTemplate",
  component: DataPageTemplate
} as Meta;

const Template: Story = args => (
    <DataPageTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
