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
import { PhenotypingDatasetSummary } from "./PhenotypingDatasetSummary";
export default {
    title: "Components/Metadata/Phenotyping Dataset Summary",
    component: PhenotypingDatasetSummary
};
var Template = function (args) { return (_jsx("div", __assign({ style: { maxWidth: "600px" } }, { children: _jsx(PhenotypingDatasetSummary, __assign({}, args), void 0) }), void 0)); };
export var Default = Template.bind({});
Default.args = {
    procedureName: "Clinical Chemistry",
    parameterName: "HDL-cholesterol",
    femaleControl: 200,
    maleControl: 200,
    femaleMutant: 9,
    maleMutant: 13,
    geneSymbol: "Cib2",
    alleleName: "tm1b(EUCOMM)Wtsi"
};
export var LargeControlNumber = Template.bind({});
LargeControlNumber.args = {
    procedureName: "Clinical Chemistry",
    parameterName: "HDL-cholesterol",
    femaleControl: 2105,
    maleControl: 2120,
    femaleMutant: 9,
    maleMutant: 13,
    geneSymbol: "Cib2",
    alleleName: "tm1b(EUCOMM)Wtsi"
};
//# sourceMappingURL=PhenotypingDatasetSummary.stories.js.map