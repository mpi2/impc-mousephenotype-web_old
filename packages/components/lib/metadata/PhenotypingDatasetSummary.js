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
export var PhenotypingDatasetSummary = function (_a) {
    var procedureName = _a.procedureName, parameterName = _a.parameterName, femaleControl = _a.femaleControl, maleControl = _a.maleControl, femaleMutant = _a.femaleMutant, maleMutant = _a.maleMutant, geneSymbol = _a.geneSymbol, alleleName = _a.alleleName;
    return (_jsxs("div", __assign({ className: "card w-100" }, { children: [_jsx("div", __assign({ className: "card-header" }, { children: "Description of the experiments performed" }), void 0),
            _jsxs("div", __assign({ className: "card-body" }, { children: [_jsxs("p", { children: ["A ", _jsx("b", { children: procedureName }, void 0), " phenotypic assay was performed on", " ", _jsxs("b", { children: [femaleControl + femaleMutant + maleControl + maleMutant, " mice"] }, void 0), ". The charts show the results of measuring ", _jsx("b", { children: parameterName }, void 0), " in", " ", _jsxs("b", { children: [femaleMutant, " female"] }, void 0), ", ", _jsxs("b", { children: [maleMutant, " male"] }, void 0), " mutants compared to ", _jsxs("b", { children: [femaleControl, " female"] }, void 0), ", ", _jsxs("b", { children: [maleControl, " male"] }, void 0), " controls. The mutants are ", _jsx("b", {}, void 0), " for the", " ", _jsxs("b", { children: [geneSymbol, _jsx("sup", { children: alleleName }, void 0)] }, void 0), " ", "allele."] }, void 0),
                    femaleControl + maleControl > 500 ? (_jsxs("small", { children: ["* The high throughput nature of the IMPC means that large control sample sizes may accumulate over a long period of time. See the", " ", _jsx("a", __assign({ href: process.env.REACT_APP_BASE_URL + "/about-impc/animal-welfare" }, { children: "animal welfare guidelines" }), void 0), " ", "for more information."] }, void 0)) : null] }), void 0)] }), void 0));
};
//# sourceMappingURL=PhenotypingDatasetSummary.js.map