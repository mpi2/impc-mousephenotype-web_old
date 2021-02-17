import React from "react";
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
// import { LinearGradient } from "@visx/gradient";
import { scaleBand, scaleLinear } from "@visx/scale";
import genStats, { Stats } from "@visx/mock-data/lib/generators/genStats";
import {
  withTooltip,
  Tooltip,
  defaultStyles as defaultTooltipStyles
} from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { PatternLines } from "@visx/pattern";
import { AnimatedAxis } from "@visx/react-spring";
import { Orientation } from "@visx/axis";
import { ParentSize } from "@visx/responsive";

const data: Stats[] = genStats(4);
console.log(data.flatMap(d => d.boxPlot.outliers).sort((a, b) => a - b));

// accessors
const x = (d: Stats) => d.boxPlot.x;
const min = (d: Stats) => d.boxPlot.min;
const max = (d: Stats) => d.boxPlot.max;
const median = (d: Stats) => d.boxPlot.median;
const firstQuartile = (d: Stats) => d.boxPlot.firstQuartile;
const thirdQuartile = (d: Stats) => d.boxPlot.thirdQuartile;
const outliers = (d: Stats) => d.boxPlot.outliers;

interface TooltipData {
  name?: string;
  min?: number;
  median?: number;
  max?: number;
  firstQuartile?: number;
  thirdQuartile?: number;
}

export type StatsPlotProps = {
  width: number;
  height: number;
};

export default withTooltip<StatsPlotProps, TooltipData>(
  ({
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    showTooltip,
    hideTooltip
  }: StatsPlotProps & WithTooltipProvidedProps<TooltipData>) => {
    return (
      <ParentSize>
        {parent => {
          // bounds
          const xMax = parent.width;
          const yMax = parent.height - 100;

          // scales
          const xScale = scaleBand<string>({
            range: [0, xMax],
            round: true,
            domain: data.map(x),
            padding: 0.8,
          });

          const values = data.reduce((allValues, { boxPlot }) => {
            allValues.push(boxPlot.max, boxPlot.min, ...boxPlot.outliers);
            return allValues;
          }, [] as number[]);
          const minYValue = Math.min(...values);
          const maxYValue = Math.max(...values);

          const yScale = scaleLinear<number>({
            range: [yMax, 0],
            round: true,
            domain: [minYValue, maxYValue],
            clamp: true,
            nice: true
          });
          //console.log(xScale, yScale);

          const boxWidth = xScale.bandwidth();
          const constrainedWidth = boxWidth;
          return (
            <div style={{ position: "relative", padding: 20 }}>
              <svg
                width={parent.width}
                height={parent.height}
                style={{ paddingTop: 10 }}
              >
                <PatternLines
                  id="hViolinLines"
                  height={3}
                  width={3}
                  stroke="rgba(239, 121, 11, 0.325)"
                  strokeWidth={1}
                  //fill="rgba(0,0,0,0.3)"
                  orientation={["horizontal"]}
                />
                <AnimatedAxis
                  orientation={Orientation.bottom}
                  scale={xScale}
                  top={yMax}
                  animationTrajectory="outside"
                />
                <AnimatedAxis
                  orientation={Orientation.left}
                  scale={yScale}
                  left={20}
                  numTicks={6}
                  tickLabelProps={() => {
                    return {
                      verticalAnchor: "middle",
                      textAnchor: "end",
                      fontSize: 10
                    };
                  }}
                  animationTrajectory="outside"
                />
                <Group>
                  {data.map((d: Stats, i) => (
                    <g key={i}>
                      <ViolinPlot
                        data={d.binData}
                        stroke="rgba(239, 121, 11, 0.325)"
                        left={xScale(x(d))!}
                        width={constrainedWidth}
                        valueScale={yScale}
                        fill="url(#hViolinLines)"
                      />
                      <BoxPlot
                        min={min(d)}
                        max={max(d)}
                        left={xScale(x(d))! + constrainedWidth * 0.25}
                        firstQuartile={firstQuartile(d)}
                        thirdQuartile={thirdQuartile(d)}
                        median={median(d)}
                        boxWidth={constrainedWidth * 0.5}
                        fill="rgba(239, 123, 11, 0.5)"
                        fillOpacity={0.3}
                        stroke="rgba(239, 123, 11, 0.5)"
                        strokeWidth={2}
                        valueScale={yScale}
                        outliers={outliers(d)}
                        minProps={{
                          onMouseOver: () => {
                            showTooltip({
                              tooltipTop: yScale(min(d)) ?? 0 + 40,
                              tooltipLeft: xScale(x(d))! + constrainedWidth + 5,
                              tooltipData: {
                                min: min(d),
                                name: x(d)
                              }
                            });
                          },
                          onMouseLeave: () => {
                            hideTooltip();
                          }
                        }}
                        maxProps={{
                          onMouseOver: () => {
                            showTooltip({
                              tooltipTop: yScale(max(d)) ?? 0 + 40,
                              tooltipLeft: xScale(x(d))! + constrainedWidth + 5,
                              tooltipData: {
                                max: max(d),
                                name: x(d)
                              }
                            });
                          },
                          onMouseLeave: () => {
                            hideTooltip();
                          }
                        }}
                        boxProps={{
                          onMouseOver: () => {
                            showTooltip({
                              tooltipTop: yScale(median(d)) ?? 0 + 40,
                              tooltipLeft: xScale(x(d))! + constrainedWidth + 5,
                              tooltipData: {
                                ...d.boxPlot,
                                name: x(d)
                              }
                            });
                          },
                          onMouseLeave: () => {
                            hideTooltip();
                          }
                        }}
                        medianProps={{
                          style: {
                            stroke: "rgba(249, 129, 16, 0.667)"
                          },
                          onMouseOver: () => {
                            showTooltip({
                              tooltipTop: yScale(median(d)) ?? 0 + 40,
                              tooltipLeft: xScale(x(d))! + constrainedWidth + 5,
                              tooltipData: {
                                median: median(d),
                                name: x(d)
                              }
                            });
                          },
                          onMouseLeave: () => {
                            hideTooltip();
                          }
                        }}
                        outlierProps={{
                          onMouseOver: ({ target }) => {
                            console.log(target);

                            showTooltip({
                              tooltipTop: yScale(median(d)) ?? 0 + 40,
                              tooltipLeft: xScale(x(d))! + constrainedWidth + 5,
                              tooltipData: {
                                median: median(d),
                                name: x(d)
                              }
                            });
                          },
                          onMouseLeave: () => {
                            hideTooltip();
                          }
                        }}
                      />
                    </g>
                  ))}
                </Group>
              </svg>

              {tooltipOpen && tooltipData && (
                <Tooltip
                  top={tooltipTop}
                  left={tooltipLeft}
                  style={{
                    ...defaultTooltipStyles,
                    backgroundColor: "#283238",
                    color: "white"
                  }}
                >
                  <div>
                    <strong>{tooltipData.name}</strong>
                  </div>
                  <div style={{ marginTop: "5px", fontSize: "12px" }}>
                    {tooltipData.max && <div>max: {tooltipData.max}</div>}
                    {tooltipData.thirdQuartile && (
                      <div>third quartile: {tooltipData.thirdQuartile}</div>
                    )}
                    {tooltipData.median && (
                      <div>median: {tooltipData.median}</div>
                    )}
                    {tooltipData.firstQuartile && (
                      <div>first quartile: {tooltipData.firstQuartile}</div>
                    )}
                    {tooltipData.min && <div>min: {tooltipData.min}</div>}
                  </div>
                </Tooltip>
              )}
            </div>
          );
        }}
      </ParentSize>
    );
  }
);
