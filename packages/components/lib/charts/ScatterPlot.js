var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { scaleOrdinal } from "@visx/scale";
import { AnimatedAxis, AnimatedGrid, XYChart, Tooltip, AnimatedGlyphSeries, buildChartTheme, AnimatedLineSeries, } from "@visx/xychart";
import { LegendItem, LegendLabel, LegendOrdinal } from "@visx/legend";
import { GlyphCircle, GlyphSquare, GlyphTriangle } from "@visx/glyph";
import "./ScatterPlot.css";
import { ParentSize } from "@visx/responsive";
var legendGlyphSize = 20;
var accessors = {
    xAccessor: function (d) { return (d ? new Date(d.x) : new Date()); },
    yAccessor: function (d) { return d.y; }
};
export var ScatterPlot = function (props) {
    var xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, series = props.series, window = props.window;
    var seriesNames = series.map(function (_a) {
        var seriesName = _a.seriesName;
        return seriesName;
    });
    if (window) {
        seriesNames.push("Window");
    }
    var _a = useState(seriesNames), activeSeries = _a[0], setActiveSeries = _a[1];
    var colorScale = scaleOrdinal({
        domain: seriesNames,
        range: seriesNames.map(function (seriesName) {
            if (seriesName === "Window") {
                return "rgba(124, 124, 124, 0.5)";
            }
            else if (seriesName.includes("WT")) {
                return "rgba(9, 120, 161, 0.5)";
            }
            return "rgba(239, 123, 11, 0.5)";
        })
    });
    var shapeScale = scaleOrdinal({
        domain: seriesNames,
        range: seriesNames.map(function (seriesName) {
            if (seriesName === "Window") {
                return (_jsx(GlyphSquare, { fill: colorScale(seriesName), stroke: colorScale(seriesName) }, seriesName));
            }
            if (seriesName.includes("Female")) {
                return (_jsx(GlyphCircle, { fill: colorScale(seriesName), stroke: colorScale(seriesName) }, seriesName));
            }
            else {
                return (_jsx(GlyphTriangle, { fill: colorScale(seriesName), stroke: colorScale(seriesName) }, seriesName));
            }
        })
    });
    var customTheme = buildChartTheme({
        backgroundColor: "white",
        colors: colorScale.range(),
        tickLength: 5,
        gridColor: "gray",
        gridColorDark: "",
        gridStyles: {
            strokeWidth: 1
        }
    });
    return (_jsxs("div", { children: [_jsx(ParentSize, { children: function (parent) {
                    return (_jsxs(XYChart, __assign({ height: 300, width: parent.width - 20, xScale: {
                            type: "time",
                            clamp: true,
                            nice: true
                        }, yScale: { type: "linear", nice: true }, theme: customTheme }, { children: [_jsx(AnimatedAxis, { orientation: "bottom", label: xAxisLabel, hideZero: true }, void 0),
                            _jsx(AnimatedAxis, { orientation: "left", label: yAxisLabel, hideZero: true }, void 0),
                            _jsx(AnimatedGrid, { columns: false, numTicks: 4, lineStyle: { strokeWidth: "1px", stroke: "lightgray" } }, void 0),
                            series.map(function (series) { return (_jsx(AnimatedGlyphSeries, __assign({ dataKey: series.seriesName, data: activeSeries.includes(series.seriesName) ? series.data : [] }, accessors, { renderGlyph: function () {
                                    return shapeScale(series.seriesName);
                                } }), series.seriesName)); }),
                            window ? (_jsx(AnimatedLineSeries, __assign({ dataKey: "Window", data: activeSeries.includes("Window") ? window : [], stroke: colorScale("Window") }, accessors), void 0)) : null,
                            _jsx(Tooltip, { snapTooltipToDatumX: true, snapTooltipToDatumY: true, showDatumGlyph: true, showVerticalCrosshair: true, renderTooltip: function (_a) {
                                    var _b;
                                    var tooltipData = _a.tooltipData, colorScale = _a.colorScale;
                                    if (((_b = tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.nearestDatum) === null || _b === void 0 ? void 0 : _b.key) === "Window") {
                                        return;
                                    }
                                    if (tooltipData &&
                                        tooltipData.nearestDatum &&
                                        tooltipData.nearestDatum.datum &&
                                        colorScale) {
                                        return (_jsxs("div", { children: [_jsx("div", __assign({ style: {
                                                        color: colorScale(tooltipData.nearestDatum.key)
                                                    } }, { children: tooltipData.nearestDatum.key }), void 0),
                                                accessors
                                                    .xAccessor(tooltipData.nearestDatum.datum)
                                                    .toDateString(), ", ", accessors.yAccessor(tooltipData.nearestDatum.datum)] }, void 0));
                                    }
                                    return;
                                } }, void 0)] }), void 0));
                } }, void 0),
            _jsx("div", __assign({ style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "14px"
                } }, { children: _jsx(LegendOrdinal, __assign({ scale: shapeScale, direction: "row", shapeHeight: legendGlyphSize, shapeWidth: legendGlyphSize, labelMargin: "10px", labelAlign: "center" }, { children: function (labels) {
                        return labels.map(function (label) {
                            var shape = shapeScale(label.datum);
                            var isValidElement = React.isValidElement(shape);
                            var color = colorScale(label.datum);
                            var legendGlyphConfig = {
                                fill: activeSeries.includes(label.text) ? color : "#ffffff",
                                top: legendGlyphSize / 2,
                                left: legendGlyphSize / 2
                            };
                            return (_jsxs(LegendItem, __assign({ onClick: function () {
                                    if (activeSeries.includes(label.text)) {
                                        setActiveSeries(activeSeries.filter(function (s) { return s !== label.text; }));
                                    }
                                    else {
                                        setActiveSeries(activeSeries.concat([label.text]));
                                    }
                                } }, { children: [_jsx("svg", __assign({ width: legendGlyphSize, height: legendGlyphSize, cursor: "pointer" }, { children: isValidElement
                                            ? React.cloneElement(shape, legendGlyphConfig)
                                            : React.createElement(shape, legendGlyphConfig) }), void 0),
                                    _jsx(LegendLabel, __assign({ className: activeSeries.includes(label.text)
                                            ? "text-dark"
                                            : "text-muted", style: { cursor: "pointer" } }, { children: label.text }), void 0)] }), label.text));
                        });
                    } }), void 0) }), void 0)] }, void 0));
};
//# sourceMappingURL=ScatterPlot.js.map