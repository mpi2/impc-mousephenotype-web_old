import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IPhenotypingDatasetProps, PhenotypingDatasetSummary } from "./PhenotypingDatasetSummary";

export default {
  title: "Components/Metadata/Phenotyping Dataset Summary",
  component: PhenotypingDatasetSummary
} as Meta;

const Template: Story<IPhenotypingDatasetProps> = args => (
  <div style={{maxWidth: "600px"}}>
    <PhenotypingDatasetSummary {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  procedureName: "Clinical Chemistry",
  parameterName: "HDL-cholesterol",
  femaleControl: 200,
  maleControl: 200,
  femaleMutant: 9,
  maleMutant: 13, 
  geneSymbol: "Cib2",
  alleleName: "tm1b(EUCOMM)Wtsi"
};



export const LargeControlNumber = Template.bind({});
LargeControlNumber.args = {
  procedureName: "Clinical Chemistry",
  parameterName: "HDL-cholesterol",
  femaleControl: 2105,
  maleControl: 2120,
  femaleMutant: 9,
  maleMutant: 13,
  geneSymbol: "Cib2",
  alleleName: "tm1b(EUCOMM)Wtsi"
};
