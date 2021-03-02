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
import { MainNavBar } from "./MainNavBar";
import { TopNavBar } from "./TopNavBar";
export var Header = function (_a) {
    var menuItems = _a.menuItems;
    return (_jsxs("div", __assign({ className: "header" }, { children: [_jsx(TopNavBar, {}, void 0),
            _jsx(MainNavBar, { menuItems: menuItems }, void 0)] }), void 0));
};
//# sourceMappingURL=index.js.map