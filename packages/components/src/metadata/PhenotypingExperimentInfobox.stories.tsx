import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import {
  IPhenotypingExperimentProps,
  PhenotypingExperimentInfobox
} from "./PhenotypingExperimentInfobox";

export default {
  title: "Components/Metadata/Phenotyping Experiment Infobox",
  component: PhenotypingExperimentInfobox
} as Meta;


const Template: Story<IPhenotypingExperimentProps> = args => (
  <div style={{ maxWidth: "600px", backgroundColor: "white"}}>
    <PhenotypingExperimentInfobox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  lifeStage: "Early adult",
  phenotypeId: "MP:0001556",
  phenotypeName: "increased circulating HDL cholesterol level",
  pipelineKey: "8",
  procedureKey: "683",
  procedureName: "Clinical Chemistry",
  parameterKey: "30356",
  parameterName: "HDL-cholesterol",
  strainName: "involves: C57BL/6NTac",
  phenotypingCenter: "MRC Harwell"
};