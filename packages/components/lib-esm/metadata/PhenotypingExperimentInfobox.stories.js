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
import { PhenotypingExperimentInfobox } from "./PhenotypingExperimentInfobox";
export default {
    title: "Components/Metadata/Phenotyping Experiment Infobox",
    component: PhenotypingExperimentInfobox
};
var Template = function (args) { return (_jsx("div", __assign({ style: { maxWidth: "600px", backgroundColor: "white" } }, { children: _jsx(PhenotypingExperimentInfobox, __assign({}, args), void 0) }), void 0)); };
export var Default = Template.bind({});
Default.args = {
    lifeStage: "Early adult",
    phenotypeId: "MP:0001556",
    phenotypeName: "increased circulating HDL cholesterol level",
    pipelineKey: "8",
    procedureKey: "683",
    procedureName: "Clinical Chemistry",
    parameterKey: "30356",
    parameterName: "HDL-cholesterol",
    strainName: "involves: C57BL/6NTac",
    phenotypingCenter: "MRC Harwell"
};
//# sourceMappingURL=PhenotypingExperimentInfobox.stories.js.map