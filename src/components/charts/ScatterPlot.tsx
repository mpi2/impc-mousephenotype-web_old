import React, { FunctionComponent, ReactElement, useState } from "react";
import { scaleOrdinal } from "@visx/scale";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries,
  buildChartTheme,
  AnimatedLineSeries
} from "@visx/xychart";
import { LegendItem, LegendLabel, LegendOrdinal } from "@visx/legend";
import { GlyphCircle, GlyphSquare, GlyphTriangle } from "@visx/glyph";

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
  window?: ITimePoint[];
}
const legendGlyphSize = 20;

interface ITimePoint {
  x: string;
  y: number;
}

/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
interface IExperimentSeries {
  seriesName: string;
  data: ITimePoint[];
}

const accessors = {
  xAccessor: (d: ITimePoint) => (d ? new Date(d.x) : new Date()),
  yAccessor: (d: ITimePoint) => d.y
};

export const ScatterPlot: FunctionComponent<IProps> = props => {
  const { xAxisLabel, yAxisLabel, series, window } = props;
  const seriesNames = series.map(({ seriesName }) => seriesName);
  if (window) {
    seriesNames.push("Window");
  }

  const [activeSeries, setActiveSeries] = useState<string[]>(seriesNames);

  const colorScale = scaleOrdinal({
    domain: seriesNames,
    range: seriesNames.map(seriesName => {
      if (seriesName === "Window") {
        return "rgba(124, 124, 124, 0.5)";
      } else if (seriesName.includes("WT")) {
        return "rgba(9, 120, 161, 0.5)";
      }
      return "rgba(239, 123, 11, 0.5)";
    })
  });

  const shapeScale = scaleOrdinal<string, React.FC | React.ReactNode>({
    domain: seriesNames,
    range: seriesNames.map(seriesName => {
      if (seriesName === "Window") {
        return (
          <GlyphSquare
            key={seriesName}
            fill={colorScale(seriesName)}
            stroke={colorScale(seriesName)}
          />
        );
      }
      if (seriesName.includes("Female")) {
        return (
          <GlyphCircle
            key={seriesName}
            fill={colorScale(seriesName)}
            stroke={colorScale(seriesName)}
          />
        );
      } else {
        return (
          <GlyphTriangle
            key={seriesName}
            fill={colorScale(seriesName)}
            stroke={colorScale(seriesName)}
          />
        );
      }
    })
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

  // const minDate = new Date(
  //   Math.min(...series.flatMap(s => s.data.map(d => +accessors.xAccessor(d))))
  // );
  // minDate.setMonth(minDate.getMonth() - 1);
  // const maxDate = new Date(
  //   Math.max(...series.flatMap(s => s.data.map(d => +accessors.xAccessor(d))))
  // );

  return (
    <div>
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
                // domain: [minDate, maxDate]
              }}
              yScale={{ type: "linear", nice: true }}
              theme={customTheme}
            >
              <AnimatedAxis orientation="bottom" label={xAxisLabel} hideZero />
              <AnimatedAxis orientation="left" label={yAxisLabel} hideZero />
              <AnimatedGrid
                columns={false}
                numTicks={4}
                lineStyle={{ strokeWidth: "1px", stroke: "lightgray" }}
              />
              {series.map(series => (
                <AnimatedGlyphSeries
                  key={series.seriesName}
                  dataKey={series.seriesName}
                  data={
                    activeSeries.includes(series.seriesName) ? series.data : []
                  }
                  {...accessors}
                  renderGlyph={() =>
                    shapeScale(series.seriesName) as ReactElement
                  }
                />
              ))}

              {window ? (
                <AnimatedLineSeries
                  dataKey="Window"
                  data={activeSeries.includes("Window") ? window : []}
                  stroke={colorScale("Window")}
                  {...accessors}
                />
              ) : null}

              <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showDatumGlyph
                showVerticalCrosshair
                renderTooltip={({ tooltipData, colorScale }) => {
                  if (tooltipData?.nearestDatum?.key === "Window") {
                    return;
                  }

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
          shapeHeight={legendGlyphSize}
          shapeWidth={legendGlyphSize}
          labelMargin="10px"
          labelAlign="center"
        >
          {labels =>
            labels.map(label => {
              const shape = shapeScale(label.datum);
              const isValidElement = React.isValidElement(shape);
              const color = colorScale(label.datum);
              const legendGlyphConfig = {
                fill: activeSeries.includes(label.text) ? color : "#ffffff",
                top: legendGlyphSize / 2,
                left: legendGlyphSize / 2
              };
              return (
                <LegendItem
                  key={label.text}
                  onClick={() => {
                    if (activeSeries.includes(label.text)) {
                      setActiveSeries(
                        activeSeries.filter(s => s !== label.text)
                      );
                    } else {
                      setActiveSeries(activeSeries.concat([label.text]));
                    }
                  }}
                >
                  <svg
                    width={legendGlyphSize}
                    height={legendGlyphSize}
                    cursor="pointer"
                  >
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
                  <LegendLabel
                    className={
                      activeSeries.includes(label.text)
                        ? "text-dark"
                        : "text-muted"
                    }
                   style={{cursor: "pointer"}}
                  >
                    {label.text}
                  </LegendLabel>
                </LegendItem>
              );
            })
          }
        </LegendOrdinal>
      </div>
    </div>
  );
};
