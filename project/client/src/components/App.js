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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
var App = function () {
    var _a = useState(0), state = _a[0], setState = _a[1];
    return (_jsxs(_Fragment, { children: [_jsx("button", __assign({ onClick: function () { return setState(state + 1); } }, { children: "CLICKME" }), void 0), state] }, void 0));
};
export default App;
