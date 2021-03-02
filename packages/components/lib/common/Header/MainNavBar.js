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
import { useState } from "react";
import "./MainNavBar.css";
export var MainNavBar = function (_a) {
    var menuItems = _a.menuItems;
    var _b = useState(-1), activeMenuId = _b[0], setActiveMenu = _b[1];
    return (_jsxs("div", { children: [_jsx("div", __assign({ className: "header__nav" }, { children: _jsx("div", __assign({ className: "container" }, { children: _jsxs("div", __assign({ className: "row" }, { children: [_jsx("div", __assign({ className: "col-6 col-md-3" }, { children: _jsx("a", __assign({ href: process.env.REACT_APP_BASE_URL, className: "header__logo-link active" }, { children: _jsx("img", { className: "header__logo", src: "https://dev.mousephenotype.org/wp-content/themes/impc/images/IMPC_logo.svg", alt: "International Mouse Phenotyping Consortium Office Logo" }, void 0) }), void 0) }), void 0),
                            _jsxs("div", __assign({ className: "col-6 col-md-9 text-right" }, { children: [_jsx("div", __assign({ className: "d-none d-lg-block" }, { children: _jsx("div", __assign({ className: "menu-main-nav-container" }, { children: _jsx("ul", __assign({ id: "menu-main-nav", className: "menu" }, { children: menuItems.map(function (menuItem) {
                                                    return (_jsx("li", __assign({ id: "menu-item-" + menuItem.id, className: menuItem.classes + " menu-item menu-item-type-post_type menu-item-object-page menu-item-" + menuItem.id + " " + (menuItem.classes === "data"
                                                            ? "current-menu-item"
                                                            : ""), onMouseOver: function () { return setActiveMenu(menuItem.id || -1); }, onFocus: function () { return setActiveMenu(menuItem.id || -1); }, onMouseLeave: function () { return setActiveMenu(-1); } }, { children: _jsx("a", __assign({ href: menuItem.link }, { children: menuItem.name }), void 0) }), "menu-item-" + menuItem.id));
                                                }) }), void 0) }), void 0) }), void 0),
                                    _jsxs("button", __assign({ className: "navbar-toggler d-inline d-lg-none collapsed", type: "button", "data-toggle": "collapse", "data-target": "#navbarToggleExternalContent ", "aria-controls": "navbarToggleExternalContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, { children: [_jsx("span", { className: "icon-bar top-bar" }, void 0),
                                            _jsx("span", { className: "icon-bar middle-bar" }, void 0),
                                            _jsx("span", { className: "icon-bar bottom-bar" }, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0),
            menuItems
                .filter(function (menuItem) { return menuItem.children && menuItem.children.length > 0; })
                .map(function (menuItem) {
                var _a, _b, _c, _d;
                var itemId = ((_a = menuItem.classes) === null || _a === void 0 ? void 0 : _a.split("-")[0]) + "-menu";
                return (_jsxs("div", __assign({ className: itemId + " sub-menu d-none d-lg-block " + (activeMenuId == menuItem.id ? "active" : "collapse"), id: itemId, style: {
                        paddingTop: "0px",
                        marginTop: "0px",
                        paddingBottom: "0px",
                        marginBottom: "0px"
                    }, onMouseOver: function () { return setActiveMenu(menuItem.id || -1); }, onFocus: function () { return setActiveMenu(menuItem.id || -1); }, onMouseLeave: function () { return setActiveMenu(-1); } }, { children: [_jsx("div", __assign({ className: itemId + "__inside" }, { children: _jsxs("div", __assign({ className: "container" }, { children: [menuItem.classes == "about-impc" ? (_jsx("a", __assign({ href: menuItem.link }, { children: menuItem.name }), menuItem.link)) : null,
                                    ((_b = menuItem.children) === null || _b === void 0 ? void 0 : _b.some(function (item) { var _a; return item.children && ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) > 0; })) ? (_jsx("div", __assign({ className: "row justify-content-end" }, { children: (_c = menuItem.children) === null || _c === void 0 ? void 0 : _c.map(function (subMenuItem) {
                                            var _a;
                                            return (_jsxs("div", __assign({ className: "col col-auto text-left" }, { children: [_jsx("a", __assign({ href: subMenuItem.link }, { children: subMenuItem.name }), void 0),
                                                    _jsx("div", __assign({ className: "sub-pages" }, { children: (_a = subMenuItem.children) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) {
                                                            if (a.name < b.name) {
                                                                return -1;
                                                            }
                                                            if (a.name > b.name) {
                                                                return 1;
                                                            }
                                                            return 0;
                                                        }).map(function (subMenutItemChild) {
                                                            return (_jsx("p", { children: _jsx("a", __assign({ href: subMenutItemChild.link }, { children: subMenutItemChild.name }), void 0) }, subMenutItemChild.link));
                                                        }) }), void 0)] }), subMenuItem.link));
                                        }) }), void 0)) : ((_d = menuItem.children) === null || _d === void 0 ? void 0 : _d.map(function (subMenuItem) {
                                        return (_jsx("a", __assign({ href: subMenuItem.link }, { children: subMenuItem.name }), subMenuItem.link));
                                    }))] }), void 0) }), void 0),
                        _jsx("div", { className: itemId + "__drop" }, void 0)] }), "subMenu-" + menuItem.id));
            })] }, void 0));
};
//# sourceMappingURL=MainNavBar.js.map