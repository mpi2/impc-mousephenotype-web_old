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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";
import genStats from "@visx/mock-data/lib/generators/genStats";
import { withTooltip, Tooltip, defaultStyles as defaultTooltipStyles } from "@visx/tooltip";
import { PatternLines } from "@visx/pattern";
import { AnimatedAxis } from "@visx/react-spring";
import { Orientation } from "@visx/axis";
import { ParentSize } from "@visx/responsive";
var data = genStats(4);
console.log(data.flatMap(function (d) { return d.boxPlot.outliers; }).sort(function (a, b) { return a - b; }));
var x = function (d) { return d.boxPlot.x; };
var min = function (d) { return d.boxPlot.min; };
var max = function (d) { return d.boxPlot.max; };
var median = function (d) { return d.boxPlot.median; };
var firstQuartile = function (d) { return d.boxPlot.firstQuartile; };
var thirdQuartile = function (d) { return d.boxPlot.thirdQuartile; };
var outliers = function (d) { return d.boxPlot.outliers; };
export default withTooltip(function (_a) {
    var tooltipOpen = _a.tooltipOpen, tooltipLeft = _a.tooltipLeft, tooltipTop = _a.tooltipTop, tooltipData = _a.tooltipData, showTooltip = _a.showTooltip, hideTooltip = _a.hideTooltip;
    return (_jsx(ParentSize, { children: function (parent) {
            var xMax = parent.width;
            var yMax = parent.height - 100;
            var xScale = scaleBand({
                range: [0, xMax],
                round: true,
                domain: data.map(x),
                padding: 0.8
            });
            var values = data.reduce(function (allValues, _a) {
                var boxPlot = _a.boxPlot;
                allValues.push.apply(allValues, __spreadArray([boxPlot.max, boxPlot.min], boxPlot.outliers));
                return allValues;
            }, []);
            var minYValue = Math.min.apply(Math, values);
            var maxYValue = Math.max.apply(Math, values);
            var yScale = scaleLinear({
                range: [yMax, 0],
                round: true,
                domain: [minYValue, maxYValue],
                clamp: true,
                nice: true
            });
            var boxWidth = xScale.bandwidth();
            var constrainedWidth = boxWidth;
            return (_jsxs("div", __assign({ style: { position: "relative", padding: 20 } }, { children: [_jsxs("svg", __assign({ width: parent.width, height: parent.height, style: { paddingTop: 10 } }, { children: [_jsx(PatternLines, { id: "hViolinLines", height: 3, width: 3, stroke: "rgba(239, 121, 11, 0.325)", strokeWidth: 1, orientation: ["horizontal"] }, void 0),
                            _jsx(AnimatedAxis, { orientation: Orientation.bottom, scale: xScale, top: yMax, animationTrajectory: "outside" }, void 0),
                            _jsx(AnimatedAxis, { orientation: Orientation.left, scale: yScale, left: 20, numTicks: 6, tickLabelProps: function () {
                                    return {
                                        verticalAnchor: "middle",
                                        textAnchor: "end",
                                        fontSize: 10
                                    };
                                }, animationTrajectory: "outside" }, void 0),
                            _jsx(Group, { children: data.map(function (d, i) { return (_jsxs("g", { children: [_jsx(ViolinPlot, { data: d.binData, stroke: "rgba(239, 121, 11, 0.325)", left: xScale(x(d)), width: constrainedWidth, valueScale: yScale, fill: "url(#hViolinLines)" }, void 0),
                                        _jsx(BoxPlot, { min: min(d), max: max(d), left: xScale(x(d)) + constrainedWidth * 0.25, firstQuartile: firstQuartile(d), thirdQuartile: thirdQuartile(d), median: median(d), boxWidth: constrainedWidth * 0.5, fill: "rgba(239, 123, 11, 0.5)", fillOpacity: 0.3, stroke: "rgba(239, 123, 11, 0.5)", strokeWidth: 2, valueScale: yScale, outliers: outliers(d), minProps: {
                                                onMouseOver: function () {
                                                    var _a;
                                                    showTooltip({
                                                        tooltipTop: (_a = yScale(min(d))) !== null && _a !== void 0 ? _a : 0 + 40,
                                                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                                                        tooltipData: {
                                                            min: min(d),
                                                            name: x(d)
                                                        }
                                                    });
                                                },
                                                onMouseLeave: function () {
                                                    hideTooltip();
                                                }
                                            }, maxProps: {
                                                onMouseOver: function () {
                                                    var _a;
                                                    showTooltip({
                                                        tooltipTop: (_a = yScale(max(d))) !== null && _a !== void 0 ? _a : 0 + 40,
                                                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                                                        tooltipData: {
                                                            max: max(d),
                                                            name: x(d)
                                                        }
                                                    });
                                                },
                                                onMouseLeave: function () {
                                                    hideTooltip();
                                                }
                                            }, boxProps: {
                                                onMouseOver: function () {
                                                    var _a;
                                                    showTooltip({
                                                        tooltipTop: (_a = yScale(median(d))) !== null && _a !== void 0 ? _a : 0 + 40,
                                                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                                                        tooltipData: __assign(__assign({}, d.boxPlot), { name: x(d) })
                                                    });
                                                },
                                                onMouseLeave: function () {
                                                    hideTooltip();
                                                }
                                            }, medianProps: {
                                                style: {
                                                    stroke: "rgba(249, 129, 16, 0.667)"
                                                },
                                                onMouseOver: function () {
                                                    var _a;
                                                    showTooltip({
                                                        tooltipTop: (_a = yScale(median(d))) !== null && _a !== void 0 ? _a : 0 + 40,
                                                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                                                        tooltipData: {
                                                            median: median(d),
                                                            name: x(d)
                                                        }
                                                    });
                                                },
                                                onMouseLeave: function () {
                                                    hideTooltip();
                                                }
                                            }, outlierProps: {
                                                onMouseOver: function (_a) {
                                                    var _b;
                                                    var target = _a.target;
                                                    console.log(target);
                                                    showTooltip({
                                                        tooltipTop: (_b = yScale(median(d))) !== null && _b !== void 0 ? _b : 0 + 40,
                                                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                                                        tooltipData: {
                                                            median: median(d),
                                                            name: x(d)
                                                        }
                                                    });
                                                },
                                                onMouseLeave: function () {
                                                    hideTooltip();
                                                }
                                            } }, void 0)] }, i)); }) }, void 0)] }), void 0),
                    tooltipOpen && tooltipData && (_jsxs(Tooltip, __assign({ top: tooltipTop, left: tooltipLeft, style: __assign(__assign({}, defaultTooltipStyles), { backgroundColor: "#283238", color: "white" }) }, { children: [_jsx("div", { children: _jsx("strong", { children: tooltipData.name }, void 0) }, void 0),
                            _jsxs("div", __assign({ style: { marginTop: "5px", fontSize: "12px" } }, { children: [tooltipData.max && _jsxs("div", { children: ["max: ", tooltipData.max] }, void 0),
                                    tooltipData.thirdQuartile && (_jsxs("div", { children: ["third quartile: ", tooltipData.thirdQuartile] }, void 0)),
                                    tooltipData.median && (_jsxs("div", { children: ["median: ", tooltipData.median] }, void 0)),
                                    tooltipData.firstQuartile && (_jsxs("div", { children: ["first quartile: ", tooltipData.firstQuartile] }, void 0)),
                                    tooltipData.min && _jsxs("div", { children: ["min: ", tooltipData.min] }, void 0)] }), void 0)] }), void 0))] }), void 0));
        } }, void 0));
});
//# sourceMappingURL=BoxPlot.js.map