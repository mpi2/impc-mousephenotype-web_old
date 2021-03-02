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
import { BarPlot } from "./BarPlot";
export default {
    title: "Components/Charts/Bar Plot",
    component: BarPlot
};
var Template = function (args) { return (_jsx("div", __assign({ className: "page-content people py-5 white-bg", style: { height: 500 } }, { children: _jsx(BarPlot, __assign({}, args), void 0) }), void 0)); };
export var Hi = Template.bind({});
Hi.args = { greeting: "Hi", name: "Jeremy" };
export var Hello = Template.bind({});
Hello.args = { greeting: "Hello", name: "Federico" };
//# sourceMappingURL=BarPlot.stories.js.map