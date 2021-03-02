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
import { jsx as _jsx } from "react/jsx-runtime";
import { ScatterPlot } from "./ScatterPlot";
export default {
    title: "Components/Charts/Scatter Plot",
    component: ScatterPlot
};
var series = [
    {
        seriesName: "Female WT",
        data: [
            { x: "2015-01-01", y: 100 },
            { x: "2017-01-02", y: 10 },
            { x: "2018-01-03", y: 200 }
        ]
    },
    {
        seriesName: "Male WT",
        data: [
            { x: "2020-01-05", y: 30 },
            { x: "2020-01-06", y: 40 },
            { x: "2020-08-10", y: 80 }
        ]
    },
    {
        seriesName: "Female HOM",
        data: [
            { x: "2020-03-01", y: 25 },
            { x: "2020-04-02", y: 100 },
            { x: "2021-05-03", y: 500 }
        ]
    },
    {
        seriesName: "Male HOM",
        data: [
            { x: "2020-01-01", y: 20 },
            { x: "2020-01-02", y: 50 },
            { x: "2020-01-03", y: 60 }
        ]
    }
];
var window = [
    { x: "2015-01-01", y: 0 },
    { x: "2017-01-02", y: 200 },
    { x: "2020-01-03", y: 300 },
    { x: "2021-01-03", y: 0 }
];
var Template = function (args) { return (_jsx("div", __assign({ className: "page-content people py-5 white-bg" }, { children: _jsx(ScatterPlot, __assign({}, args), void 0) }), void 0)); };
export var Unidimensional = Template.bind({});
Unidimensional.args = {
    xAxisLabel: "Date of experiment",
    yAxisLabel: "Total cholesterol (mg/dl)",
    series: series
};
export var UnidimensionalWithWindow = Template.bind({});
UnidimensionalWithWindow.args = {
    xAxisLabel: "Date of experiment",
    yAxisLabel: "Total cholesterol (mg/dl)",
    series: series,
    window: window
};
//# sourceMappingURL=ScatterPlot.stories.js.map