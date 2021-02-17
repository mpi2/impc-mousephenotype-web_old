import React, { FunctionComponent } from "react";


export interface IBarPlotProps {
    greeting: string;
    name: string;
}

export const BarPlot: FunctionComponent<IBarPlotProps> = props => {
    return <div>{props.greeting} {props.name}</div>
}