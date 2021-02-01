import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faQuestionCircle);

export interface IPhenotypingExperimentProps {
  lifeStage: string;
  phenotypeId: string;
  phenotypeName: string;
  pipelineKey: string;
  procedureKey: string;
  procedureName: string;
  parameterKey: string;
  parameterName: string;
  strainName: string;
  phenotypingCenter: string;
}

export const PhenotypingExperimentInfobox: FunctionComponent<IPhenotypingExperimentProps> = ({
  lifeStage,
  phenotypeId,
  phenotypeName,
  pipelineKey,
  procedureKey,
  procedureName,
  parameterKey,
  parameterName,
  strainName,
  phenotypingCenter
}) => {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td>Life stage</td>
          <td className="font-weight-bold">
            {`${lifeStage} `}
            <a
              href={`${process.env.REACT_APP_BASE_URL}/help/standardized-mouse-phenotyping/pipelines/late-adult-and-interval-pipelines/`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="question-circle" />
            </a>
          </td>
        </tr>
        <tr>
          <td>Associated Phenotype</td>
          <td>
            <div>
              <a
                className="font-weight-bold"
                href={`${process.env.REACT_APP_BASE_URL}/data/phenotypes/${phenotypeId}`}
              >
                {phenotypeName}
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td>Testing protocol</td>
          <td>
            <a
              className="font-weight-bold"
              href={`${process.env.REACT_APP_BASE_URL}/impress/ProcedureInfo?action=list&amp;procID=${procedureKey}&amp;pipeID=${pipelineKey}`}
            >
              {procedureName}
            </a>
          </td>
        </tr>
        <tr>
          <td>Measured value</td>
          <td>
            <a
              className="font-weight-bold"
              href={`${process.env.REACT_APP_BASE_URL}/impress/OntologyInfo?action=list&amp;procID=${procedureKey}#${parameterKey}`}
            >
              {parameterName}
            </a>
          </td>
        </tr>
        <tr>
          <td>Testing environment</td>
          <td>
            <a
              className="font-weight-bold w-100"
              data-toggle="modal"
              data-target="#conditions"
              href="#1"
            >
              Lab conditions and equipment
            </a>
          </td>
        </tr>
        <tr>
          <td>Background Strain</td>
          <td className="font-weight-bold">{strainName}</td>
        </tr>
        <tr>
          <td>Phenotyping center</td>
          <td className="font-weight-bold">{phenotypingCenter}</td>
        </tr>
      </tbody>
    </table>
  );
};
