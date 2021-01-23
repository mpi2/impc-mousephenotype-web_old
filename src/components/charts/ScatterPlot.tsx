import React, { FunctionComponent, ReactElement } from "react";
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
import "../../styles/styles.scss";
import { Point } from "@visx/point";
import {
  GlyphCircle,
  GlyphTriangle,
} from "@visx/glyph";

export interface IProps {
  title: string;
}
const legendGlyphSize = 20;

interface TimePoint {
  x: string;
  y: number;
}

const data1: TimePoint[] = [
  { x: "2020-01-01", y: 100 },
  { x: "2020-01-02", y: 10 },
  { x: "2020-01-03", y: 200 }
];

const data2: TimePoint[] = [
  { x: "2020-01-01", y: 30 },
  { x: "2020-01-02", y: 40 },
  { x: "2020-01-03", y: 80 }
];

const data3: TimePoint[] = [
  { x: "2020-01-01", y: 20 },
  { x: "2020-01-02", y: 50 },
  { x: "2020-01-03", y: 60 }
];

const data4: TimePoint[] = [
  { x: "2020-03-01", y: 30 },
  { x: "2020-04-02", y: 100 },
  { x: "2020-05-03", y: 500 }
];

const accessors = {
  xAccessor: (d: Point) => d.x,
  yAccessor: (d: Point) => d.y
};

const ordinal = scaleOrdinal({
  domain: ["Female WT", "Male WT", "Female HOM", "Male HOM"],
  range: [
    "rgba(239, 123, 11, 0.5)",
    "rgba(239, 123, 11, 0.5)",
    "rgba(9, 120, 161, 0.5)",
    "rgba(9, 120, 161, 0.5)"
  ]
});

const shapeScale = scaleOrdinal<string, React.FC | React.ReactNode>({
  domain: ["Female WT", "Male WT", "Female HOM", "Male HOM"],
  range: [
    <GlyphCircle
      key="Female WT"
      fill={ordinal("Female WT")}
      stroke={ordinal("Female WT")}
    />,
    <GlyphTriangle
      key="Male WT"
      fill={ordinal("Male WT")}
      stroke={ordinal("Male WT")}
    />,
    <GlyphCircle
      key="Female HOM"
      fill={ordinal("Female HOM")}
      stroke={ordinal("Female HOM")}
    />,
    <GlyphTriangle
      key="Male HOM"
      fill={ordinal("Male HOM")}
      stroke={ordinal("Female HOM")}
    />
  ]
});

export const ScatterPlot: FunctionComponent<IProps> = props => {
  const { title } = props;

  const customTheme = buildChartTheme({
    // colors
    backgroundColor: "white", // used by Tooltip, Annotation
    colors: ordinal.range(),
    tickLength: 0.5,

    // grid
    gridColor: "gray",
    gridColorDark: "",
    gridStyles: {
      strokeWidth: 1
    } as React.CSSProperties
  });

  return (
    <div className="page-content people py-5 white-bg">
      <XYChart
        height={300}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
        theme={customTheme}
      >
        <h1>{title}</h1>
        <AnimatedAxis orientation="bottom" />
        <AnimatedAxis orientation="left" />
        <AnimatedGrid columns={false} numTicks={4} />
        <AnimatedGlyphSeries
          dataKey="Female WT"
          data={data1}
          {...accessors}
          renderGlyph={() => shapeScale("Female WT") as ReactElement}
        />
        <AnimatedGlyphSeries
          dataKey="Male WT"
          data={data2}
          {...accessors}
          renderGlyph={() => shapeScale("Female WT") as ReactElement}
        />
        <AnimatedGlyphSeries
          dataKey="Female HOM"
          data={data3}
          {...accessors}
          renderGlyph={() => shapeScale("Female HOM") as ReactElement}
        />
        <AnimatedGlyphSeries
          dataKey="Male HOM"
          data={data4}
          {...accessors}
          renderGlyph={() => shapeScale("Male HOM") as ReactElement}
        />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData, colorScale }) => {
            if (tooltipData && tooltipData.nearestDatum && colorScale) {
              return (
                <div>
                  <div
                    style={{ color: colorScale(tooltipData.nearestDatum.key) }}
                  >
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor(tooltipData.nearestDatum.datum as Point)}
                  {", "}
                  {accessors.yAccessor(tooltipData.nearestDatum.datum as Point)}
                </div>
              );
            }
            return;
          }}
        />
      </XYChart>
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
            const color = ordinal(label.datum);
            return (
              <svg width={legendGlyphSize} height={legendGlyphSize}>
                {isValidElement
                  ? React.cloneElement(
                      shape as ReactElement<{
                        fill: string;
                        top: number;
                        left: number;
                      }>,
                      {
                        fill: color,
                        top: 10,
                        left: 10
                      }
                    )
                  : React.createElement(
                      shape as React.ComponentType<{
                        fill: string;
                        top: number;
                        left: number;
                      }>,
                      {
                        fill: color,
                        top: 50,
                        left: 50
                      }
                    )}
              </svg>
            );
          }}
        />
      </div>
    </div>
  );
};
