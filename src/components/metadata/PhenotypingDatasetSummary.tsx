import React, { FunctionComponent } from "react";

export interface IPhenotypingDatasetProps {
  procedureName: string;
  parameterName: string;
  femaleControl: number;
  maleControl: number;
  femaleMutant: number;
  maleMutant: number;
  geneSymbol: string;
  alleleName: string;
}

export const PhenotypingDatasetSummary: FunctionComponent<IPhenotypingDatasetProps> = ({
  procedureName,
  parameterName,
  femaleControl,
  maleControl,
  femaleMutant,
  maleMutant,
  geneSymbol,
  alleleName
}) => {
  return (
    <div className="card w-100">
      <div className="card-header">
        Description of the experiments performed
      </div>
      <div className="card-body">
        <p>
          A <b>{procedureName}</b> phenotypic assay was performed on{" "}
          <b>{femaleControl + femaleMutant + maleControl + maleMutant} mice</b>.
          The charts show the results of measuring <b>{parameterName}</b> in{" "}
          <b>{femaleMutant} female</b>, <b>{maleMutant} male</b> mutants compared to <b>{femaleControl} female</b>
          , <b>{maleControl} male</b> controls. The mutants are <b></b> for the{" "}
          <b>
            {geneSymbol}<sup>{alleleName}</sup>
          </b>{" "}
          allele.
        </p>
        {
          femaleControl + maleControl > 500 ? (
                    <small>
          * The high throughput nature of the IMPC means that large control
          sample sizes may accumulate over a long period of time. See the{" "}
          <a
            href={`${process.env.REACT_APP_BASE_URL}/about-impc/animal-welfare`}
          >
            animal welfare guidelines
          </a>{" "}
          for more information.
        </small>
          ) : null
        }
      </div>
    </div>
  );
};
