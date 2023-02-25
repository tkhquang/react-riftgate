import xe, { createContext as je, useContext as Q, useState as ke, useLayoutEffect as vr, useEffect as pr, forwardRef as gr, useCallback as mr } from "react";
import { createPortal as Er } from "react-dom";
const X = je(null);
function br() {
  var s;
  return typeof window < "u" && !!((s = window.document) != null && s.createElement);
}
const hr = ({ children: s }) => {
  const c = Q(X);
  return br() ? Er(s, c || document.body) : null;
}, ee = je({
  state: /* @__PURE__ */ new Map([]),
  setState: () => {
  }
});
var Z = {}, yr = {
  get exports() {
    return Z;
  },
  set exports(s) {
    Z = s;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Rr() {
  if (Pe)
    return A;
  Pe = 1;
  var s = xe, c = Symbol.for("react.element"), b = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, h = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(C, d, O) {
    var g, y = {}, P = null, W = null;
    O !== void 0 && (P = "" + O), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (W = d.ref);
    for (g in d)
      m.call(d, g) && !T.hasOwnProperty(g) && (y[g] = d[g]);
    if (C && C.defaultProps)
      for (g in d = C.defaultProps, d)
        y[g] === void 0 && (y[g] = d[g]);
    return { $$typeof: c, type: C, key: P, ref: W, props: y, _owner: h.current };
  }
  return A.Fragment = b, A.jsx = w, A.jsxs = w, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var s = xe, c = Symbol.for("react.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), C = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), re = Symbol.iterator, De = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[De];
      return typeof r == "function" ? r : null;
    }
    var x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Ne = !1, te;
    te = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === T || Ne || e === h || e === O || e === g || Ye || e === W || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === y || e.$$typeof === w || e.$$typeof === C || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case b:
          return "Portal";
        case T:
          return "Profiler";
        case h:
          return "StrictMode";
        case O:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return ne(r) + ".Consumer";
          case w:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case P: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, ae, oe, ie, ue, se, fe, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (D === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, fe = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ae
            }),
            info: S({}, e, {
              value: oe
            }),
            warn: S({}, e, {
              value: ie
            }),
            error: S({}, e, {
              value: ue
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        D < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, N;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Be();
    }
    function de(e, r) {
      if (!e || q)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), f = a.length - 1, l = p.length - 1; f >= 1 && l >= 0 && a[f] !== p[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (a[f] !== p[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || a[f] !== p[l]) {
                    var E = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, E), E;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = u, Ue(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", Ce = k ? Y(k) : "";
      return typeof e == "function" && N.set(e, Ce), Ce;
    }
    function qe(e, r, t) {
      return de(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Je(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case O:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return qe(e.render);
          case y:
            return L(e.type, r, t);
          case P: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ve = {}, pe = x.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, i) {
      {
        var u = Function.call.bind(M);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (V(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(i), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var ze = Array.isArray;
    function J(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function me(e) {
      if (He(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ge(e);
    }
    var F = x.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, be, G;
    G = {};
    function Ze(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = R(F.current.type);
        G[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(F.current.type), e.ref), G[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (me(t), a = "" + t), Qe(r) && (me(r.key), a = "" + r.key), Ze(r) && (p = r.ref, er(r, i));
        for (u in r)
          M.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, l), p && tr(o, l);
        }
        return nr(e, a, p, i, n, F.current, o);
      }
    }
    var z = x.ReactCurrentOwner, he = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ye() {
      {
        if (z.current) {
          var e = R(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ir(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + R(e._owner.type) + "."), j(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && _e(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Fe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && _e(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function we(e, r, t, n, i, u) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = or(i);
          p ? a += p : a += ye();
          var f;
          e === null ? f = "null" : J(e) ? f = "array" : e !== void 0 && e.$$typeof === c ? (f = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var l = ar(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (J(E)) {
                for (var k = 0; k < E.length; k++)
                  Te(E[k], e);
                Object.freeze && Object.freeze(E);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(E, e);
        }
        return e === m ? sr(l) : ur(l), l;
      }
    }
    function fr(e, r, t) {
      return we(e, r, t, !0);
    }
    function lr(e, r, t) {
      return we(e, r, t, !1);
    }
    var cr = lr, dr = fr;
    I.Fragment = m, I.jsx = cr, I.jsxs = dr;
  }()), I;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = Rr() : s.exports = _r();
})(yr);
const $ = Z.jsx;
function jr({ children: s }) {
  const [c, b] = ke(
    /* @__PURE__ */ new Map([])
  );
  return /* @__PURE__ */ $(ee.Provider, { value: { state: c, setState: b }, children: s });
}
var Oe;
const Tr = typeof window < "u" && ((Oe = window.document) != null && Oe.createElement) ? vr : pr, wr = gr((s, c) => /* @__PURE__ */ $("div", { ...s, ref: c })), Cr = ({
  component: s = wr,
  portkey: c,
  ...b
}) => {
  const { setState: m } = Q(ee), h = mr(
    (T) => {
      T !== null && m((w) => w.set(c, T));
    },
    [m]
  );
  return /* @__PURE__ */ $(s, { ref: h, "data-portkey": c, ...b });
}, Pr = ({ portkey: s = null, children: c }) => {
  const [b, m] = ke(null), { state: h } = Q(ee);
  return Tr(() => {
    s !== null && h.has(s) && m(h.get(s));
  }, [s, m, h]), s === null ? /* @__PURE__ */ $(X.Provider, { value: null, children: c }) : b ? /* @__PURE__ */ $(X.Provider, { value: b, children: c }) : null;
}, Sr = hr, kr = {
  Target: Cr,
  Domain: Pr,
  Attach: Sr
};
export {
  hr as Portal,
  X as PortalContext,
  kr as Teleporter,
  ee as TeleporterContext,
  jr as TeleporterProvider,
  br as checkIsBrowser,
  Tr as useSafeLayoutEffect
};
