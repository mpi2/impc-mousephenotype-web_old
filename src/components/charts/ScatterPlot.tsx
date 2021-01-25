import React, { FunctionComponent, ReactElement, useContext } from "react";
import { scaleOrdinal } from "@visx/scale";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries,
  buildChartTheme
} from "@visx/xychart";
import { LegendOrdinal } from "@visx/legend";
import { GlyphCircle, GlyphTriangle } from "@visx/glyph";

import "../../styles/styles.scss";
import "./ScatterPlot.css";
import { ParentSize } from "@visx/responsive";

export interface IProps {
  xAxisLabel: string;
  yAxisLabel: string;
  /**
   * List of the experiment data series. Each experiment series object contains a **seriesName**
   * and a **data** property. The data property should have a list of data points (x, y) (dateOfExperiment, value).
   */
  series: IExperimentSeries[];
}
const legendGlyphSize = 20;

interface ITimePoint {
  x: string;
  y: number;
}

/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export interface IExperimentSeries {
  seriesName: string;
  data: ITimePoint[];
}

const accessors = {
  xAccessor: (d: ITimePoint) => (d ? new Date(d.x) : new Date()),
  yAccessor: (d: ITimePoint) => d.y
};

export const ScatterPlot: FunctionComponent<IProps> = props => {
  const { xAxisLabel, yAxisLabel, series } = props;

  const colorScale = scaleOrdinal({
    domain: series.map(({ seriesName }) => seriesName),
    range: series.map(({ seriesName }) =>
      seriesName.includes("WT")
        ? "rgba(239, 123, 11, 0.5)"
        : "rgba(9, 120, 161, 0.5)"
    )
  });

  const shapeScale = scaleOrdinal<string, React.FC | React.ReactNode>({
    domain: series.map(({ seriesName }) => seriesName),
    range: series.map(({ seriesName }) =>
      seriesName.includes("Female") ? (
        <GlyphCircle
          key={seriesName}
          fill={colorScale(seriesName)}
          stroke={colorScale(seriesName)}
        />
      ) : (
        <GlyphTriangle
          key={seriesName}
          fill={colorScale(seriesName)}
          stroke={colorScale(seriesName)}
        />
      )
    )
  });

  const customTheme = buildChartTheme({
    // colors
    backgroundColor: "white", // used by Tooltip, Annotation
    colors: colorScale.range(),
    tickLength: 5,

    // grid
    gridColor: "gray",
    gridColorDark: "",
    gridStyles: {
      strokeWidth: 1
    } as React.CSSProperties
  });

  const minDate = new Date(
    Math.min(...series.flatMap(s => s.data.map(d => +accessors.xAccessor(d))))
  );
  minDate.setMonth(minDate.getMonth() - 1);
  const maxDate = new Date(
    Math.max(...series.flatMap(s => s.data.map(d => +accessors.xAccessor(d))))
  );

  return (
    <div className="page-content people py-5 white-bg">
      <ParentSize>
        {parent => {
          return (
            <XYChart
              height={300}
              width={parent.width - 20}
              xScale={{
                type: "time",
                clamp: true,
                nice: true,
                domain: [minDate, maxDate]
              }}
              yScale={{ type: "linear" }}
              theme={customTheme}
            >
              <AnimatedAxis
                orientation="bottom"
                label={xAxisLabel}
                hideZero
                rangePadding={10}
              />
              <AnimatedAxis
                orientation="left"
                label={yAxisLabel}
                hideZero
                rangePadding={200}
              />
              <AnimatedGrid
                columns={false}
                numTicks={4}
                lineStyle={{ strokeWidth: "1px", stroke: "lightgray" }}
              />
              {series.map(series => (
                <AnimatedGlyphSeries
                  dataKey={series.seriesName}
                  data={series.data}
                  {...accessors}
                  renderGlyph={() =>
                    shapeScale(series.seriesName) as ReactElement
                  }
                />
              ))}

              <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showDatumGlyph
                showVerticalCrosshair
                renderTooltip={({ tooltipData, colorScale }) => {
                  //   console.log(tooltipData);

                  if (
                    tooltipData &&
                    tooltipData.nearestDatum &&
                    tooltipData.nearestDatum.datum &&
                    colorScale
                  ) {
                    return (
                      <div>
                        <div
                          style={{
                            color: colorScale(tooltipData.nearestDatum.key)
                          }}
                        >
                          {tooltipData.nearestDatum.key}
                        </div>
                        {accessors
                          .xAccessor(
                            tooltipData.nearestDatum.datum as ITimePoint
                          )
                          .toDateString()}
                        {", "}
                        {accessors.yAccessor(
                          tooltipData.nearestDatum.datum as ITimePoint
                        )}
                      </div>
                    );
                  }
                  return;
                }}
              />
            </XYChart>
          );
        }}
      </ParentSize>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "14px"
        }}
      >
        <LegendOrdinal
          scale={shapeScale}
          direction="row"
          labelMargin="0 15px 0 0"
          shapeHeight={legendGlyphSize}
          shapeWidth={legendGlyphSize}
          shape={({ label }) => {
            const shape = shapeScale(label.datum);
            const isValidElement = React.isValidElement(shape);
            const color = colorScale(label.datum);
            const legendGlyphConfig = {
              fill: color,
              top: legendGlyphSize / 2,
              left: legendGlyphSize / 2
            };
            return (
              <svg width={legendGlyphSize} height={legendGlyphSize}>
                {isValidElement
                  ? React.cloneElement(
                      shape as ReactElement<{
                        fill: string;
                        top: number;
                        left: number;
                      }>,
                      legendGlyphConfig
                    )
                  : React.createElement(
                      shape as React.ComponentType<{
                        fill: string;
                        top: number;
                        left: number;
                      }>,
                      legendGlyphConfig
                    )}
              </svg>
            );
          }}
        />
      </div>
    </div>
  );
};
