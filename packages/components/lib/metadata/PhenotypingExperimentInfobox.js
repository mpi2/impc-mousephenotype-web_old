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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faQuestionCircle);
export var PhenotypingExperimentInfobox = function (_a) {
    var lifeStage = _a.lifeStage, phenotypeId = _a.phenotypeId, phenotypeName = _a.phenotypeName, pipelineKey = _a.pipelineKey, procedureKey = _a.procedureKey, procedureName = _a.procedureName, parameterKey = _a.parameterKey, parameterName = _a.parameterName, strainName = _a.strainName, phenotypingCenter = _a.phenotypingCenter;
    return (_jsx("table", __assign({ className: "table table-striped" }, { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "Life stage" }, void 0),
                        _jsxs("td", __assign({ className: "font-weight-bold" }, { children: [lifeStage + " ",
                                _jsx("a", __assign({ href: process.env.REACT_APP_BASE_URL + "/help/standardized-mouse-phenotyping/pipelines/late-adult-and-interval-pipelines/", target: "_blank", rel: "noreferrer" }, { children: _jsx(FontAwesomeIcon, { icon: "question-circle" }, void 0) }), void 0)] }), void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Associated Phenotype" }, void 0),
                        _jsx("td", { children: _jsx("div", { children: _jsx("a", __assign({ className: "font-weight-bold", href: process.env.REACT_APP_BASE_URL + "/data/phenotypes/" + phenotypeId }, { children: phenotypeName }), void 0) }, void 0) }, void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Testing protocol" }, void 0),
                        _jsx("td", { children: _jsx("a", __assign({ className: "font-weight-bold", href: process.env.REACT_APP_BASE_URL + "/impress/ProcedureInfo?action=list&amp;procID=" + procedureKey + "&amp;pipeID=" + pipelineKey }, { children: procedureName }), void 0) }, void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Measured value" }, void 0),
                        _jsx("td", { children: _jsx("a", __assign({ className: "font-weight-bold", href: process.env.REACT_APP_BASE_URL + "/impress/OntologyInfo?action=list&amp;procID=" + procedureKey + "#" + parameterKey }, { children: parameterName }), void 0) }, void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Testing environment" }, void 0),
                        _jsx("td", { children: _jsx("a", __assign({ className: "font-weight-bold w-100", "data-toggle": "modal", "data-target": "#conditions", href: "#1" }, { children: "Lab conditions and equipment" }), void 0) }, void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Background Strain" }, void 0),
                        _jsx("td", __assign({ className: "font-weight-bold" }, { children: strainName }), void 0)] }, void 0),
                _jsxs("tr", { children: [_jsx("td", { children: "Phenotyping center" }, void 0),
                        _jsx("td", __assign({ className: "font-weight-bold" }, { children: phenotypingCenter }), void 0)] }, void 0)] }, void 0) }), void 0));
};
//# sourceMappingURL=PhenotypingExperimentInfobox.js.map