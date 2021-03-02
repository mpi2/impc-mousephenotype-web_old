import { FunctionComponent } from "react";
import "./ScatterPlot.css";
export interface IScatterPlotProps {
    xAxisLabel: string;
    yAxisLabel: string;
    series: IExperimentSeries[];
    window?: ITimePoint[];
}
interface ITimePoint {
    x: string;
    y: number;
}
interface IExperimentSeries {
    seriesName: string;
    data: ITimePoint[];
}
export declare const ScatterPlot: FunctionComponent<IScatterPlotProps>;
export {};
//# sourceMappingURL=ScatterPlot.d.ts.map