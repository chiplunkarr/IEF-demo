(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("._container_jt3a6_1{padding:20px;border-radius:8px;background-color:#f5f5f5;font-family:system-ui,-apple-system,sans-serif}._title_jt3a6_8{margin:0 0 16px;color:#333;font-size:24px}._content_jt3a6_14{display:flex;flex-direction:column;gap:12px}._content_jt3a6_14 p{margin:0;font-size:18px;color:#666}._button_jt3a6_26{padding:10px 20px;border:none;border-radius:4px;background-color:#007bff;color:#fff;font-size:16px;cursor:pointer;transition:background-color .2s}._button_jt3a6_26:hover{background-color:#0056b3}._button_jt3a6_26:active{background-color:#004085}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function hk(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var Zm = { exports: {} }, St = {};
var sR;
function mk() {
  if (sR) return St;
  sR = 1;
  var y = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), Ee = /* @__PURE__ */ Symbol.for("react.provider"), E = /* @__PURE__ */ Symbol.for("react.context"), He = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), re = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), $ = Symbol.iterator;
  function pe(O) {
    return O === null || typeof O != "object" ? null : (O = $ && O[$] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, be = Object.assign, $e = {};
  function rt(O, I, Qe) {
    this.props = O, this.context = I, this.refs = $e, this.updater = Qe || te;
  }
  rt.prototype.isReactComponent = {}, rt.prototype.setState = function(O, I) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, I, "setState");
  }, rt.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Vt() {
  }
  Vt.prototype = rt.prototype;
  function lt(O, I, Qe) {
    this.props = O, this.context = I, this.refs = $e, this.updater = Qe || te;
  }
  var We = lt.prototype = new Vt();
  We.constructor = lt, be(We, rt.prototype), We.isPureReactComponent = !0;
  var ft = Array.isArray, we = Object.prototype.hasOwnProperty, Ne = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(O, I, Qe) {
    var Be, dt = {}, ut = null, at = null;
    if (I != null) for (Be in I.ref !== void 0 && (at = I.ref), I.key !== void 0 && (ut = "" + I.key), I) we.call(I, Be) && !Pe.hasOwnProperty(Be) && (dt[Be] = I[Be]);
    var ot = arguments.length - 2;
    if (ot === 1) dt.children = Qe;
    else if (1 < ot) {
      for (var pt = Array(ot), It = 0; It < ot; It++) pt[It] = arguments[It + 2];
      dt.children = pt;
    }
    if (O && O.defaultProps) for (Be in ot = O.defaultProps, ot) dt[Be] === void 0 && (dt[Be] = ot[Be]);
    return { $$typeof: y, type: O, key: ut, ref: at, props: dt, _owner: Ne.current };
  }
  function jt(O, I) {
    return { $$typeof: y, type: O.type, key: I, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function Jt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function ln(O) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Qe) {
      return I[Qe];
    });
  }
  var xt = /\/+/g;
  function Ue(O, I) {
    return typeof O == "object" && O !== null && O.key != null ? ln("" + O.key) : I.toString(36);
  }
  function zt(O, I, Qe, Be, dt) {
    var ut = typeof O;
    (ut === "undefined" || ut === "boolean") && (O = null);
    var at = !1;
    if (O === null) at = !0;
    else switch (ut) {
      case "string":
      case "number":
        at = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case y:
          case C:
            at = !0;
        }
    }
    if (at) return at = O, dt = dt(at), O = Be === "" ? "." + Ue(at, 0) : Be, ft(dt) ? (Qe = "", O != null && (Qe = O.replace(xt, "$&/") + "/"), zt(dt, I, Qe, "", function(It) {
      return It;
    })) : dt != null && (Jt(dt) && (dt = jt(dt, Qe + (!dt.key || at && at.key === dt.key ? "" : ("" + dt.key).replace(xt, "$&/") + "/") + O)), I.push(dt)), 1;
    if (at = 0, Be = Be === "" ? "." : Be + ":", ft(O)) for (var ot = 0; ot < O.length; ot++) {
      ut = O[ot];
      var pt = Be + Ue(ut, ot);
      at += zt(ut, I, Qe, pt, dt);
    }
    else if (pt = pe(O), typeof pt == "function") for (O = pt.call(O), ot = 0; !(ut = O.next()).done; ) ut = ut.value, pt = Be + Ue(ut, ot++), at += zt(ut, I, Qe, pt, dt);
    else if (ut === "object") throw I = String(O), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return at;
  }
  function bt(O, I, Qe) {
    if (O == null) return O;
    var Be = [], dt = 0;
    return zt(O, Be, "", "", function(ut) {
      return I.call(Qe, ut, dt++);
    }), Be;
  }
  function Dt(O) {
    if (O._status === -1) {
      var I = O._result;
      I = I(), I.then(function(Qe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Qe);
      }, function(Qe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Qe);
      }), O._status === -1 && (O._status = 0, O._result = I);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var xe = { current: null }, ne = { transition: null }, ke = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ne, ReactCurrentOwner: Ne };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: bt, forEach: function(O, I, Qe) {
    bt(O, function() {
      I.apply(this, arguments);
    }, Qe);
  }, count: function(O) {
    var I = 0;
    return bt(O, function() {
      I++;
    }), I;
  }, toArray: function(O) {
    return bt(O, function(I) {
      return I;
    }) || [];
  }, only: function(O) {
    if (!Jt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, St.Component = rt, St.Fragment = R, St.Profiler = ie, St.PureComponent = lt, St.StrictMode = Q, St.Suspense = ee, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, St.act = oe, St.cloneElement = function(O, I, Qe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Be = be({}, O.props), dt = O.key, ut = O.ref, at = O._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ut = I.ref, at = Ne.current), I.key !== void 0 && (dt = "" + I.key), O.type && O.type.defaultProps) var ot = O.type.defaultProps;
      for (pt in I) we.call(I, pt) && !Pe.hasOwnProperty(pt) && (Be[pt] = I[pt] === void 0 && ot !== void 0 ? ot[pt] : I[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1) Be.children = Qe;
    else if (1 < pt) {
      ot = Array(pt);
      for (var It = 0; It < pt; It++) ot[It] = arguments[It + 2];
      Be.children = ot;
    }
    return { $$typeof: y, type: O.type, key: dt, ref: ut, props: Be, _owner: at };
  }, St.createContext = function(O) {
    return O = { $$typeof: E, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: Ee, _context: O }, O.Consumer = O;
  }, St.createElement = an, St.createFactory = function(O) {
    var I = an.bind(null, O);
    return I.type = O, I;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(O) {
    return { $$typeof: He, render: O };
  }, St.isValidElement = Jt, St.lazy = function(O) {
    return { $$typeof: le, _payload: { _status: -1, _result: O }, _init: Dt };
  }, St.memo = function(O, I) {
    return { $$typeof: re, type: O, compare: I === void 0 ? null : I };
  }, St.startTransition = function(O) {
    var I = ne.transition;
    ne.transition = {};
    try {
      O();
    } finally {
      ne.transition = I;
    }
  }, St.unstable_act = oe, St.useCallback = function(O, I) {
    return xe.current.useCallback(O, I);
  }, St.useContext = function(O) {
    return xe.current.useContext(O);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(O) {
    return xe.current.useDeferredValue(O);
  }, St.useEffect = function(O, I) {
    return xe.current.useEffect(O, I);
  }, St.useId = function() {
    return xe.current.useId();
  }, St.useImperativeHandle = function(O, I, Qe) {
    return xe.current.useImperativeHandle(O, I, Qe);
  }, St.useInsertionEffect = function(O, I) {
    return xe.current.useInsertionEffect(O, I);
  }, St.useLayoutEffect = function(O, I) {
    return xe.current.useLayoutEffect(O, I);
  }, St.useMemo = function(O, I) {
    return xe.current.useMemo(O, I);
  }, St.useReducer = function(O, I, Qe) {
    return xe.current.useReducer(O, I, Qe);
  }, St.useRef = function(O) {
    return xe.current.useRef(O);
  }, St.useState = function(O) {
    return xe.current.useState(O);
  }, St.useSyncExternalStore = function(O, I, Qe) {
    return xe.current.useSyncExternalStore(O, I, Qe);
  }, St.useTransition = function() {
    return xe.current.useTransition();
  }, St.version = "18.3.1", St;
}
var lv = { exports: {} };
lv.exports;
var cR;
function yk() {
  return cR || (cR = 1, (function(y, C) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = "18.3.1", Q = /* @__PURE__ */ Symbol.for("react.element"), ie = /* @__PURE__ */ Symbol.for("react.portal"), Ee = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), He = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.provider"), re = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), te = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), $e = /* @__PURE__ */ Symbol.for("react.offscreen"), rt = Symbol.iterator, Vt = "@@iterator";
      function lt(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = rt && h[rt] || h[Vt];
        return typeof w == "function" ? w : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ft = {
        transition: null
      }, we = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, an = null;
      function jt(h) {
        an = h;
      }
      Pe.setExtraStackFrame = function(h) {
        an = h;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var w = Pe.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var Jt = !1, ln = !1, xt = !1, Ue = !1, zt = !1, bt = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: ft,
        ReactCurrentOwner: Ne
      };
      bt.ReactDebugCurrentFrame = Pe, bt.ReactCurrentActQueue = we;
      function Dt(h) {
        {
          for (var w = arguments.length, z = new Array(w > 1 ? w - 1 : 0), H = 1; H < w; H++)
            z[H - 1] = arguments[H];
          ne("warn", h, z);
        }
      }
      function xe(h) {
        {
          for (var w = arguments.length, z = new Array(w > 1 ? w - 1 : 0), H = 1; H < w; H++)
            z[H - 1] = arguments[H];
          ne("error", h, z);
        }
      }
      function ne(h, w, z) {
        {
          var H = bt.ReactDebugCurrentFrame, Z = H.getStackAddendum();
          Z !== "" && (w += "%s", z = z.concat([Z]));
          var ze = z.map(function(se) {
            return String(se);
          });
          ze.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, ze);
        }
      }
      var ke = {};
      function oe(h, w) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", Z = H + "." + w;
          if (ke[Z])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, H), ke[Z] = !0;
        }
      }
      var O = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, w, z) {
          oe(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, w, z, H) {
          oe(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, w, z, H) {
          oe(h, "setState");
        }
      }, I = Object.assign, Qe = {};
      Object.freeze(Qe);
      function Be(h, w, z) {
        this.props = h, this.context = w, this.refs = Qe, this.updater = z || O;
      }
      Be.prototype.isReactComponent = {}, Be.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, Be.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ut = function(h, w) {
          Object.defineProperty(Be.prototype, h, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var at in dt)
          dt.hasOwnProperty(at) && ut(at, dt[at]);
      }
      function ot() {
      }
      ot.prototype = Be.prototype;
      function pt(h, w, z) {
        this.props = h, this.context = w, this.refs = Qe, this.updater = z || O;
      }
      var It = pt.prototype = new ot();
      It.constructor = pt, I(It, Be.prototype), It.isPureReactComponent = !0;
      function Dn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function En(h) {
        return wr(h);
      }
      function tr(h) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, z = w && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Pn(h) {
        try {
          return Vn(h), !1;
        } catch {
          return !0;
        }
      }
      function Vn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Pn(h))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(h)), Vn(h);
      }
      function si(h, w, z) {
        var H = h.displayName;
        if (H)
          return H;
        var Z = w.displayName || w.name || "";
        return Z !== "" ? z + "(" + Z + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ee:
            return "Fragment";
          case ie:
            return "Portal";
          case He:
            return "Profiler";
          case E:
            return "StrictMode";
          case $:
            return "Suspense";
          case pe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case re:
              var w = h;
              return oa(w) + ".Consumer";
            case ee:
              var z = h;
              return oa(z._context) + ".Provider";
            case le:
              return si(h, h.render, "ForwardRef");
            case te:
              var H = h.displayName || null;
              return H !== null ? H : qn(h.type) || "Memo";
            case be: {
              var Z = h, ze = Z._payload, se = Z._init;
              try {
                return qn(se(ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, Ya, On;
      On = {};
      function gr(h) {
        if (Cn.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Cn.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function $a(h, w) {
        var z = function() {
          yr || (yr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function ci(h, w) {
        var z = function() {
          Ya || (Ya = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && Ne.current && h.__self && Ne.current.stateNode !== h.__self) {
          var w = qn(Ne.current.type);
          On[w] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), On[w] = !0);
        }
      }
      var De = function(h, w, z, H, Z, ze, se) {
        var Ve = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Q,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: z,
          props: se,
          // Record the component responsible for creating this element.
          _owner: ze
        };
        return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ve, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ve, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
      };
      function st(h, w, z) {
        var H, Z = {}, ze = null, se = null, Ve = null, yt = null;
        if (w != null) {
          gr(w) && (se = w.ref, ae(w)), sa(w) && (Yr(w.key), ze = "" + w.key), Ve = w.__self === void 0 ? null : w.__self, yt = w.__source === void 0 ? null : w.__source;
          for (H in w)
            Cn.call(w, H) && !In.hasOwnProperty(H) && (Z[H] = w[H]);
        }
        var _t = arguments.length - 2;
        if (_t === 1)
          Z.children = z;
        else if (_t > 1) {
          for (var nn = Array(_t), Wt = 0; Wt < _t; Wt++)
            nn[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(nn), Z.children = nn;
        }
        if (h && h.defaultProps) {
          var ct = h.defaultProps;
          for (H in ct)
            Z[H] === void 0 && (Z[H] = ct[H]);
        }
        if (ze || se) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ze && $a(Z, Qt), se && ci(Z, Qt);
        }
        return De(h, ze, se, Ve, yt, Ne.current, Z);
      }
      function Ft(h, w) {
        var z = De(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Zt(h, w, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, Z = I({}, h.props), ze = h.key, se = h.ref, Ve = h._self, yt = h._source, _t = h._owner;
        if (w != null) {
          gr(w) && (se = w.ref, _t = Ne.current), sa(w) && (Yr(w.key), ze = "" + w.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (H in w)
            Cn.call(w, H) && !In.hasOwnProperty(H) && (w[H] === void 0 && nn !== void 0 ? Z[H] = nn[H] : Z[H] = w[H]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          Z.children = z;
        else if (Wt > 1) {
          for (var ct = Array(Wt), Qt = 0; Qt < Wt; Qt++)
            ct[Qt] = arguments[Qt + 2];
          Z.children = ct;
        }
        return De(h.type, ze, se, Ve, yt, _t, Z);
      }
      function pn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Q;
      }
      var un = ".", Gn = ":";
      function en(h) {
        var w = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(w, function(Z) {
          return z[Z];
        });
        return "$" + H;
      }
      var Bt = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Sr(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), en("" + h.key)) : w.toString(36);
      }
      function Ra(h, w, z, H, Z) {
        var ze = typeof h;
        (ze === "undefined" || ze === "boolean") && (h = null);
        var se = !1;
        if (h === null)
          se = !0;
        else
          switch (ze) {
            case "string":
            case "number":
              se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Q:
                case ie:
                  se = !0;
              }
          }
        if (se) {
          var Ve = h, yt = Z(Ve), _t = H === "" ? un + Sr(Ve, 0) : H;
          if (En(yt)) {
            var nn = "";
            _t != null && (nn = ca(_t) + "/"), Ra(yt, w, nn, "", function(td) {
              return td;
            });
          } else yt != null && (pn(yt) && (yt.key && (!Ve || Ve.key !== yt.key) && Yr(yt.key), yt = Ft(
            yt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (yt.key && (!Ve || Ve.key !== yt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + yt.key) + "/"
            ) : "") + _t
          )), w.push(yt));
          return 1;
        }
        var Wt, ct, Qt = 0, vn = H === "" ? un : H + Gn;
        if (En(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            Wt = h[Cl], ct = vn + Sr(Wt, Cl), Qt += Ra(Wt, w, z, ct, Z);
        else {
          var Ko = lt(h);
          if (typeof Ko == "function") {
            var Vi = h;
            Ko === Vi.entries && (Bt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Xo = Ko.call(Vi), ou, ed = 0; !(ou = Xo.next()).done; )
              Wt = ou.value, ct = vn + Sr(Wt, ed++), Qt += Ra(Wt, w, z, ct, Z);
          } else if (ze === "object") {
            var cc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function ji(h, w, z) {
        if (h == null)
          return h;
        var H = [], Z = 0;
        return Ra(h, H, "", "", function(ze) {
          return w.call(z, ze, Z++);
        }), H;
      }
      function Zl(h) {
        var w = 0;
        return ji(h, function() {
          w++;
        }), w;
      }
      function eu(h, w, z) {
        ji(h, function() {
          w.apply(this, arguments);
        }, z);
      }
      function dl(h) {
        return ji(h, function(w) {
          return w;
        }) || [];
      }
      function pl(h) {
        if (!pn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var w = {
          $$typeof: re,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: ee,
          _context: w
        };
        var z = !1, H = !1, Z = !1;
        {
          var ze = {
            $$typeof: re,
            _context: w
          };
          Object.defineProperties(ze, {
            Provider: {
              get: function() {
                return H || (H = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(se) {
                w.Provider = se;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(se) {
                w._currentValue = se;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(se) {
                w._currentValue2 = se;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(se) {
                w._threadCount = se;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(se) {
                Z || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", se), Z = !0);
              }
            }
          }), w.Consumer = ze;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var _r = -1, xr = 0, nr = 1, fi = 2;
      function Wa(h) {
        if (h._status === _r) {
          var w = h._result, z = w();
          if (z.then(function(ze) {
            if (h._status === xr || h._status === _r) {
              var se = h;
              se._status = nr, se._result = ze;
            }
          }, function(ze) {
            if (h._status === xr || h._status === _r) {
              var se = h;
              se._status = fi, se._result = ze;
            }
          }), h._status === _r) {
            var H = h;
            H._status = xr, H._result = z;
          }
        }
        if (h._status === nr) {
          var Z = h._result;
          return Z === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function di(h) {
        var w = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: be,
          _payload: w,
          _init: Wa
        };
        {
          var H, Z;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(ze) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = ze, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(ze) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = ze, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === te ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? xe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: le,
          render: h
        };
        {
          var z;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return w;
      }
      var _;
      _ = /* @__PURE__ */ Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ee || h === He || zt || h === E || h === $ || h === pe || Ue || h === $e || Jt || ln || xt || typeof h == "object" && h !== null && (h.$$typeof === be || h.$$typeof === te || h.$$typeof === ee || h.$$typeof === re || h.$$typeof === le || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === _ || h.getModuleId !== void 0));
      }
      function ce(h, w) {
        Y(h) || xe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: te,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(Z) {
              H = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return z;
      }
      function Se() {
        var h = We.current;
        return h === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function et(h) {
        var w = Se();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function Xe(h) {
        var w = Se();
        return w.useState(h);
      }
      function mt(h, w, z) {
        var H = Se();
        return H.useReducer(h, w, z);
      }
      function vt(h) {
        var w = Se();
        return w.useRef(h);
      }
      function Tn(h, w) {
        var z = Se();
        return z.useEffect(h, w);
      }
      function tn(h, w) {
        var z = Se();
        return z.useInsertionEffect(h, w);
      }
      function on(h, w) {
        var z = Se();
        return z.useLayoutEffect(h, w);
      }
      function rr(h, w) {
        var z = Se();
        return z.useCallback(h, w);
      }
      function Qa(h, w) {
        var z = Se();
        return z.useMemo(h, w);
      }
      function qa(h, w, z) {
        var H = Se();
        return H.useImperativeHandle(h, w, z);
      }
      function tt(h, w) {
        {
          var z = Se();
          return z.useDebugValue(h, w);
        }
      }
      function it() {
        var h = Se();
        return h.useTransition();
      }
      function Ga(h) {
        var w = Se();
        return w.useDeferredValue(h);
      }
      function nu() {
        var h = Se();
        return h.useId();
      }
      function ru(h, w, z) {
        var H = Se();
        return H.useSyncExternalStore(h, w, z);
      }
      var vl = 0, Qu, hl, $r, Wo, br, oc, sc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            Qu = console.log, hl = console.info, $r = console.warn, Wo = console.error, br = console.group, oc = console.groupCollapsed, sc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, h, {
                value: Qu
              }),
              info: I({}, h, {
                value: hl
              }),
              warn: I({}, h, {
                value: $r
              }),
              error: I({}, h, {
                value: Wo
              }),
              group: I({}, h, {
                value: br
              }),
              groupCollapsed: I({}, h, {
                value: oc
              }),
              groupEnd: I({}, h, {
                value: sc
              })
            });
          }
          vl < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = bt.ReactCurrentDispatcher, Xa;
      function Gu(h, w, z) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (Z) {
              var H = Z.stack.trim().match(/\n( *(at )?)/);
              Xa = H && H[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, yl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new Ku();
      }
      function Xu(h, w) {
        if (!h || au)
          return "";
        {
          var z = yl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        au = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ze;
        ze = Ka.current, Ka.current = null, ml();
        try {
          if (w) {
            var se = function() {
              throw Error();
            };
            if (Object.defineProperty(se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(se, []);
              } catch (vn) {
                H = vn;
              }
              Reflect.construct(h, [], se);
            } else {
              try {
                se.call();
              } catch (vn) {
                H = vn;
              }
              h.call(se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vn) {
              H = vn;
            }
            h();
          }
        } catch (vn) {
          if (vn && H && typeof vn.stack == "string") {
            for (var Ve = vn.stack.split(`
`), yt = H.stack.split(`
`), _t = Ve.length - 1, nn = yt.length - 1; _t >= 1 && nn >= 0 && Ve[_t] !== yt[nn]; )
              nn--;
            for (; _t >= 1 && nn >= 0; _t--, nn--)
              if (Ve[_t] !== yt[nn]) {
                if (_t !== 1 || nn !== 1)
                  do
                    if (_t--, nn--, nn < 0 || Ve[_t] !== yt[nn]) {
                      var Wt = `
` + Ve[_t].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, Wt), Wt;
                    }
                  while (_t >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = ze, fa(), Error.prepareStackTrace = Z;
        }
        var ct = h ? h.displayName || h.name : "", Qt = ct ? Gu(ct) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, w, z) {
        return Xu(h, !1);
      }
      function Jf(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function Pi(h, w, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Jf(h));
        if (typeof h == "string")
          return Gu(h);
        switch (h) {
          case $:
            return Gu("Suspense");
          case pe:
            return Gu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case le:
              return Hi(h.render);
            case te:
              return Pi(h.type, w, z);
            case be: {
              var H = h, Z = H._payload, ze = H._init;
              try {
                return Pi(ze(Z), w, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Ot = {}, Ju = bt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var w = h._owner, z = Pi(h.type, h._source, w ? w.type : null);
          Ju.setExtraStackFrame(z);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, w, z, H, Z) {
        {
          var ze = Function.call.bind(Cn);
          for (var se in h)
            if (ze(h, se)) {
              var Ve = void 0;
              try {
                if (typeof h[se] != "function") {
                  var yt = Error((H || "React class") + ": " + z + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                Ve = h[se](w, se, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (_t) {
                Ve = _t;
              }
              Ve && !(Ve instanceof Error) && (wt(Z), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, se, typeof Ve), wt(null)), Ve instanceof Error && !(Ve.message in Ot) && (Ot[Ve.message] = !0, wt(Z), xe("Failed %s type: %s", z, Ve.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var w = h._owner, z = Pi(h.type, h._source, w ? w.type : null);
          jt(z);
        } else
          jt(null);
      }
      var Ke;
      Ke = !1;
      function Zu() {
        if (Ne.current) {
          var h = qn(Ne.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ar(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + w + ":" + z + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ar(h.__source) : "";
      }
      var kr = {};
      function mi(h) {
        var w = Zu();
        if (!w) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (w = `

Check the top-level render call using <` + z + ">.");
        }
        return w;
      }
      function sn(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = mi(w);
          if (!kr[z]) {
            kr[z] = !0;
            var H = "";
            h && h._owner && h._owner !== Ne.current && (H = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), vi(null);
          }
        }
      }
      function $t(h, w) {
        if (typeof h == "object") {
          if (En(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              pn(H) && sn(H, w);
            }
          else if (pn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = lt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var ze = Z.call(h), se; !(se = ze.next()).done; )
                pn(se.value) && sn(se.value, w);
          }
        }
      }
      function gl(h) {
        {
          var w = h.type;
          if (w == null || typeof w == "string")
            return;
          var z;
          if (typeof w == "function")
            z = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === le || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === te))
            z = w.propTypes;
          else
            return;
          if (z) {
            var H = qn(w);
            Qo(z, h.props, "prop", H, h);
          } else if (w.PropTypes !== void 0 && !Ke) {
            Ke = !0;
            var Z = qn(w);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bn(h) {
        {
          for (var w = Object.keys(h.props), z = 0; z < w.length; z++) {
            var H = w[z];
            if (H !== "children" && H !== "key") {
              vi(h), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), xe("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Dr(h, w, z) {
        var H = Y(h);
        if (!H) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = hi(w);
          ze ? Z += ze : Z += Zu();
          var se;
          h === null ? se = "null" : En(h) ? se = "array" : h !== void 0 && h.$$typeof === Q ? (se = "<" + (qn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : se = typeof h, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, Z);
        }
        var Ve = st.apply(this, arguments);
        if (Ve == null)
          return Ve;
        if (H)
          for (var yt = 2; yt < arguments.length; yt++)
            $t(arguments[yt], h);
        return h === Ee ? Bn(Ve) : gl(Ve), Ve;
      }
      var wa = !1;
      function iu(h) {
        var w = Dr.bind(null, h);
        return w.type = h, wa || (wa = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function qo(h, w, z) {
        for (var H = Zt.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          $t(arguments[Z], H.type);
        return gl(H), H;
      }
      function Go(h, w) {
        var z = ft.transition;
        ft.transition = {};
        var H = ft.transition;
        ft.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ft.transition = z, z === null && H._updatedFibers) {
            var Z = H._updatedFibers.size;
            Z > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, lu = null;
      function Zf(h) {
        if (lu === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), z = y && y[w];
            lu = z.call(y, "timers").setImmediate;
          } catch {
            lu = function(Z) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ze = new MessageChannel();
              ze.port1.onmessage = Z, ze.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var _a = 0, Ja = !1;
      function yi(h) {
        {
          var w = _a;
          _a++, we.current === null && (we.current = []);
          var z = we.isBatchingLegacy, H;
          try {
            if (we.isBatchingLegacy = !0, H = h(), !z && we.didScheduleLegacyUpdate) {
              var Z = we.current;
              Z !== null && (we.didScheduleLegacyUpdate = !1, El(Z));
            }
          } catch (ct) {
            throw xa(w), ct;
          } finally {
            we.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var ze = H, se = !1, Ve = {
              then: function(ct, Qt) {
                se = !0, ze.then(function(vn) {
                  xa(w), _a === 0 ? eo(vn, ct, Qt) : ct(vn);
                }, function(vn) {
                  xa(w), Qt(vn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              se || (Ja = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ve;
          } else {
            var yt = H;
            if (xa(w), _a === 0) {
              var _t = we.current;
              _t !== null && (El(_t), we.current = null);
              var nn = {
                then: function(ct, Qt) {
                  we.current === null ? (we.current = [], eo(yt, ct, Qt)) : ct(yt);
                }
              };
              return nn;
            } else {
              var Wt = {
                then: function(ct, Qt) {
                  ct(yt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function xa(h) {
        h !== _a - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), _a = h;
      }
      function eo(h, w, z) {
        {
          var H = we.current;
          if (H !== null)
            try {
              El(H), Zf(function() {
                H.length === 0 ? (we.current = null, w(h)) : eo(h, w, z);
              });
            } catch (Z) {
              z(Z);
            }
          else
            w(h);
        }
      }
      var to = !1;
      function El(h) {
        if (!to) {
          to = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var z = h[w];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(w + 1), H;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Dr, no = qo, ro = iu, Za = {
        map: ji,
        forEach: eu,
        count: Zl,
        toArray: dl,
        only: pl
      };
      C.Children = Za, C.Component = Be, C.Fragment = Ee, C.Profiler = He, C.PureComponent = pt, C.StrictMode = E, C.Suspense = $, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bt, C.act = yi, C.cloneElement = no, C.createContext = tu, C.createElement = uu, C.createFactory = ro, C.createRef = Dn, C.forwardRef = pi, C.isValidElement = pn, C.lazy = di, C.memo = ce, C.startTransition = Go, C.unstable_act = yi, C.useCallback = rr, C.useContext = et, C.useDebugValue = tt, C.useDeferredValue = Ga, C.useEffect = Tn, C.useId = nu, C.useImperativeHandle = qa, C.useInsertionEffect = tn, C.useLayoutEffect = on, C.useMemo = Qa, C.useReducer = mt, C.useRef = vt, C.useState = Xe, C.useSyncExternalStore = ru, C.useTransition = it, C.version = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(lv, lv.exports)), lv.exports;
}
var fR;
function uv() {
  return fR || (fR = 1, process.env.NODE_ENV === "production" ? Zm.exports = mk() : Zm.exports = yk()), Zm.exports;
}
var bE = uv();
const bR = /* @__PURE__ */ hk(bE);
var qf = {}, ey = { exports: {} }, Ia = {}, ty = { exports: {} }, RE = {};
var dR;
function gk() {
  return dR || (dR = 1, (function(y) {
    function C(ne, ke) {
      var oe = ne.length;
      ne.push(ke);
      e: for (; 0 < oe; ) {
        var O = oe - 1 >>> 1, I = ne[O];
        if (0 < ie(I, ke)) ne[O] = ke, ne[oe] = I, oe = O;
        else break e;
      }
    }
    function R(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function Q(ne) {
      if (ne.length === 0) return null;
      var ke = ne[0], oe = ne.pop();
      if (oe !== ke) {
        ne[0] = oe;
        e: for (var O = 0, I = ne.length, Qe = I >>> 1; O < Qe; ) {
          var Be = 2 * (O + 1) - 1, dt = ne[Be], ut = Be + 1, at = ne[ut];
          if (0 > ie(dt, oe)) ut < I && 0 > ie(at, dt) ? (ne[O] = at, ne[ut] = oe, O = ut) : (ne[O] = dt, ne[Be] = oe, O = Be);
          else if (ut < I && 0 > ie(at, oe)) ne[O] = at, ne[ut] = oe, O = ut;
          else break e;
        }
      }
      return ke;
    }
    function ie(ne, ke) {
      var oe = ne.sortIndex - ke.sortIndex;
      return oe !== 0 ? oe : ne.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ee = performance;
      y.unstable_now = function() {
        return Ee.now();
      };
    } else {
      var E = Date, He = E.now();
      y.unstable_now = function() {
        return E.now() - He;
      };
    }
    var ee = [], re = [], le = 1, $ = null, pe = 3, te = !1, be = !1, $e = !1, rt = typeof setTimeout == "function" ? setTimeout : null, Vt = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(ne) {
      for (var ke = R(re); ke !== null; ) {
        if (ke.callback === null) Q(re);
        else if (ke.startTime <= ne) Q(re), ke.sortIndex = ke.expirationTime, C(ee, ke);
        else break;
        ke = R(re);
      }
    }
    function ft(ne) {
      if ($e = !1, We(ne), !be) if (R(ee) !== null) be = !0, Dt(we);
      else {
        var ke = R(re);
        ke !== null && xe(ft, ke.startTime - ne);
      }
    }
    function we(ne, ke) {
      be = !1, $e && ($e = !1, Vt(an), an = -1), te = !0;
      var oe = pe;
      try {
        for (We(ke), $ = R(ee); $ !== null && (!($.expirationTime > ke) || ne && !ln()); ) {
          var O = $.callback;
          if (typeof O == "function") {
            $.callback = null, pe = $.priorityLevel;
            var I = O($.expirationTime <= ke);
            ke = y.unstable_now(), typeof I == "function" ? $.callback = I : $ === R(ee) && Q(ee), We(ke);
          } else Q(ee);
          $ = R(ee);
        }
        if ($ !== null) var Qe = !0;
        else {
          var Be = R(re);
          Be !== null && xe(ft, Be.startTime - ke), Qe = !1;
        }
        return Qe;
      } finally {
        $ = null, pe = oe, te = !1;
      }
    }
    var Ne = !1, Pe = null, an = -1, jt = 5, Jt = -1;
    function ln() {
      return !(y.unstable_now() - Jt < jt);
    }
    function xt() {
      if (Pe !== null) {
        var ne = y.unstable_now();
        Jt = ne;
        var ke = !0;
        try {
          ke = Pe(!0, ne);
        } finally {
          ke ? Ue() : (Ne = !1, Pe = null);
        }
      } else Ne = !1;
    }
    var Ue;
    if (typeof lt == "function") Ue = function() {
      lt(xt);
    };
    else if (typeof MessageChannel < "u") {
      var zt = new MessageChannel(), bt = zt.port2;
      zt.port1.onmessage = xt, Ue = function() {
        bt.postMessage(null);
      };
    } else Ue = function() {
      rt(xt, 0);
    };
    function Dt(ne) {
      Pe = ne, Ne || (Ne = !0, Ue());
    }
    function xe(ne, ke) {
      an = rt(function() {
        ne(y.unstable_now());
      }, ke);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, y.unstable_continueExecution = function() {
      be || te || (be = !0, Dt(we));
    }, y.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return pe;
    }, y.unstable_getFirstCallbackNode = function() {
      return R(ee);
    }, y.unstable_next = function(ne) {
      switch (pe) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = pe;
      }
      var oe = pe;
      pe = ke;
      try {
        return ne();
      } finally {
        pe = oe;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(ne, ke) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var oe = pe;
      pe = ne;
      try {
        return ke();
      } finally {
        pe = oe;
      }
    }, y.unstable_scheduleCallback = function(ne, ke, oe) {
      var O = y.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? O + oe : O) : oe = O, ne) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = oe + I, ne = { id: le++, callback: ke, priorityLevel: ne, startTime: oe, expirationTime: I, sortIndex: -1 }, oe > O ? (ne.sortIndex = oe, C(re, ne), R(ee) === null && ne === R(re) && ($e ? (Vt(an), an = -1) : $e = !0, xe(ft, oe - O))) : (ne.sortIndex = I, C(ee, ne), be || te || (be = !0, Dt(we))), ne;
    }, y.unstable_shouldYield = ln, y.unstable_wrapCallback = function(ne) {
      var ke = pe;
      return function() {
        var oe = pe;
        pe = ke;
        try {
          return ne.apply(this, arguments);
        } finally {
          pe = oe;
        }
      };
    };
  })(RE)), RE;
}
var wE = {};
var pR;
function Sk() {
  return pR || (pR = 1, (function(y) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, R = 5;
      function Q(ae, De) {
        var st = ae.length;
        ae.push(De), E(ae, De, st);
      }
      function ie(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function Ee(ae) {
        if (ae.length === 0)
          return null;
        var De = ae[0], st = ae.pop();
        return st !== De && (ae[0] = st, He(ae, st, 0)), De;
      }
      function E(ae, De, st) {
        for (var Ft = st; Ft > 0; ) {
          var Zt = Ft - 1 >>> 1, pn = ae[Zt];
          if (ee(pn, De) > 0)
            ae[Zt] = De, ae[Ft] = pn, Ft = Zt;
          else
            return;
        }
      }
      function He(ae, De, st) {
        for (var Ft = st, Zt = ae.length, pn = Zt >>> 1; Ft < pn; ) {
          var un = (Ft + 1) * 2 - 1, Gn = ae[un], en = un + 1, Bt = ae[en];
          if (ee(Gn, De) < 0)
            en < Zt && ee(Bt, Gn) < 0 ? (ae[Ft] = Bt, ae[en] = De, Ft = en) : (ae[Ft] = Gn, ae[un] = De, Ft = un);
          else if (en < Zt && ee(Bt, De) < 0)
            ae[Ft] = Bt, ae[en] = De, Ft = en;
          else
            return;
        }
      }
      function ee(ae, De) {
        var st = ae.sortIndex - De.sortIndex;
        return st !== 0 ? st : ae.id - De.id;
      }
      var re = 1, le = 2, $ = 3, pe = 4, te = 5;
      function be(ae, De) {
      }
      var $e = typeof performance == "object" && typeof performance.now == "function";
      if ($e) {
        var rt = performance;
        y.unstable_now = function() {
          return rt.now();
        };
      } else {
        var Vt = Date, lt = Vt.now();
        y.unstable_now = function() {
          return Vt.now() - lt;
        };
      }
      var We = 1073741823, ft = -1, we = 250, Ne = 5e3, Pe = 1e4, an = We, jt = [], Jt = [], ln = 1, xt = null, Ue = $, zt = !1, bt = !1, Dt = !1, xe = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function oe(ae) {
        for (var De = ie(Jt); De !== null; ) {
          if (De.callback === null)
            Ee(Jt);
          else if (De.startTime <= ae)
            Ee(Jt), De.sortIndex = De.expirationTime, Q(jt, De);
          else
            return;
          De = ie(Jt);
        }
      }
      function O(ae) {
        if (Dt = !1, oe(ae), !bt)
          if (ie(jt) !== null)
            bt = !0, On(I);
          else {
            var De = ie(Jt);
            De !== null && gr(O, De.startTime - ae);
          }
      }
      function I(ae, De) {
        bt = !1, Dt && (Dt = !1, sa()), zt = !0;
        var st = Ue;
        try {
          var Ft;
          if (!C) return Qe(ae, De);
        } finally {
          xt = null, Ue = st, zt = !1;
        }
      }
      function Qe(ae, De) {
        var st = De;
        for (oe(st), xt = ie(jt); xt !== null && !(xt.expirationTime > st && (!ae || si())); ) {
          var Ft = xt.callback;
          if (typeof Ft == "function") {
            xt.callback = null, Ue = xt.priorityLevel;
            var Zt = xt.expirationTime <= st, pn = Ft(Zt);
            st = y.unstable_now(), typeof pn == "function" ? xt.callback = pn : xt === ie(jt) && Ee(jt), oe(st);
          } else
            Ee(jt);
          xt = ie(jt);
        }
        if (xt !== null)
          return !0;
        var un = ie(Jt);
        return un !== null && gr(O, un.startTime - st), !1;
      }
      function Be(ae, De) {
        switch (ae) {
          case re:
          case le:
          case $:
          case pe:
          case te:
            break;
          default:
            ae = $;
        }
        var st = Ue;
        Ue = ae;
        try {
          return De();
        } finally {
          Ue = st;
        }
      }
      function dt(ae) {
        var De;
        switch (Ue) {
          case re:
          case le:
          case $:
            De = $;
            break;
          default:
            De = Ue;
            break;
        }
        var st = Ue;
        Ue = De;
        try {
          return ae();
        } finally {
          Ue = st;
        }
      }
      function ut(ae) {
        var De = Ue;
        return function() {
          var st = Ue;
          Ue = De;
          try {
            return ae.apply(this, arguments);
          } finally {
            Ue = st;
          }
        };
      }
      function at(ae, De, st) {
        var Ft = y.unstable_now(), Zt;
        if (typeof st == "object" && st !== null) {
          var pn = st.delay;
          typeof pn == "number" && pn > 0 ? Zt = Ft + pn : Zt = Ft;
        } else
          Zt = Ft;
        var un;
        switch (ae) {
          case re:
            un = ft;
            break;
          case le:
            un = we;
            break;
          case te:
            un = an;
            break;
          case pe:
            un = Pe;
            break;
          case $:
          default:
            un = Ne;
            break;
        }
        var Gn = Zt + un, en = {
          id: ln++,
          callback: De,
          priorityLevel: ae,
          startTime: Zt,
          expirationTime: Gn,
          sortIndex: -1
        };
        return Zt > Ft ? (en.sortIndex = Zt, Q(Jt, en), ie(jt) === null && en === ie(Jt) && (Dt ? sa() : Dt = !0, gr(O, Zt - Ft))) : (en.sortIndex = Gn, Q(jt, en), !bt && !zt && (bt = !0, On(I))), en;
      }
      function ot() {
      }
      function pt() {
        !bt && !zt && (bt = !0, On(I));
      }
      function It() {
        return ie(jt);
      }
      function Dn(ae) {
        ae.callback = null;
      }
      function wr() {
        return Ue;
      }
      var En = !1, tr = null, Pn = -1, Vn = R, Yr = -1;
      function si() {
        var ae = y.unstable_now() - Yr;
        return !(ae < Vn);
      }
      function oa() {
      }
      function qn(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Vn = Math.floor(1e3 / ae) : Vn = R;
      }
      var Cn = function() {
        if (tr !== null) {
          var ae = y.unstable_now();
          Yr = ae;
          var De = !0, st = !0;
          try {
            st = tr(De, ae);
          } finally {
            st ? In() : (En = !1, tr = null);
          }
        } else
          En = !1;
      }, In;
      if (typeof ke == "function")
        In = function() {
          ke(Cn);
        };
      else if (typeof MessageChannel < "u") {
        var yr = new MessageChannel(), Ya = yr.port2;
        yr.port1.onmessage = Cn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          xe(Cn, 0);
        };
      function On(ae) {
        tr = ae, En || (En = !0, In());
      }
      function gr(ae, De) {
        Pn = xe(function() {
          ae(y.unstable_now());
        }, De);
      }
      function sa() {
        ne(Pn), Pn = -1;
      }
      var $a = oa, ci = null;
      y.unstable_IdlePriority = te, y.unstable_ImmediatePriority = re, y.unstable_LowPriority = pe, y.unstable_NormalPriority = $, y.unstable_Profiling = ci, y.unstable_UserBlockingPriority = le, y.unstable_cancelCallback = Dn, y.unstable_continueExecution = pt, y.unstable_forceFrameRate = qn, y.unstable_getCurrentPriorityLevel = wr, y.unstable_getFirstCallbackNode = It, y.unstable_next = dt, y.unstable_pauseExecution = ot, y.unstable_requestPaint = $a, y.unstable_runWithPriority = Be, y.unstable_scheduleCallback = at, y.unstable_shouldYield = si, y.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(wE)), wE;
}
var vR;
function kR() {
  return vR || (vR = 1, process.env.NODE_ENV === "production" ? ty.exports = gk() : ty.exports = Sk()), ty.exports;
}
var hR;
function Ek() {
  if (hR) return Ia;
  hR = 1;
  var y = uv(), C = kR();
  function R(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Q = /* @__PURE__ */ new Set(), ie = {};
  function Ee(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (ie[n] = r, n = 0; n < r.length; n++) Q.add(r[n]);
  }
  var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ee = Object.prototype.hasOwnProperty, re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, le = {}, $ = {};
  function pe(n) {
    return ee.call($, n) ? !0 : ee.call(le, n) ? !1 : re.test(n) ? $[n] = !0 : (le[n] = !0, !1);
  }
  function te(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function be(n, r, l, o) {
    if (r === null || typeof r > "u" || te(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function $e(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var rt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    rt[n] = new $e(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    rt[r] = new $e(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    rt[n] = new $e(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    rt[n] = new $e(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    rt[n] = new $e(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    rt[n] = new $e(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    rt[n] = new $e(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    rt[n] = new $e(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    rt[n] = new $e(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Vt = /[\-:]([a-z])/g;
  function lt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Vt,
      lt
    );
    rt[r] = new $e(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Vt, lt);
    rt[r] = new $e(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Vt, lt);
    rt[r] = new $e(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    rt[n] = new $e(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), rt.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    rt[n] = new $e(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = rt.hasOwnProperty(r) ? rt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (be(r, l, c, o) && (l = null), o || c === null ? pe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ft = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, we = /* @__PURE__ */ Symbol.for("react.element"), Ne = /* @__PURE__ */ Symbol.for("react.portal"), Pe = /* @__PURE__ */ Symbol.for("react.fragment"), an = /* @__PURE__ */ Symbol.for("react.strict_mode"), jt = /* @__PURE__ */ Symbol.for("react.profiler"), Jt = /* @__PURE__ */ Symbol.for("react.provider"), ln = /* @__PURE__ */ Symbol.for("react.context"), xt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ue = /* @__PURE__ */ Symbol.for("react.suspense"), zt = /* @__PURE__ */ Symbol.for("react.suspense_list"), bt = /* @__PURE__ */ Symbol.for("react.memo"), Dt = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, O;
  function I(n) {
    if (O === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var Qe = !1;
  function Be(n, r) {
    if (!n || Qe) return "";
    Qe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var o = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          o = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, T = d.length - 1; 1 <= m && 0 <= T && c[m] !== d[T]; ) T--;
        for (; 1 <= m && 0 <= T; m--, T--) if (c[m] !== d[T]) {
          if (m !== 1 || T !== 1)
            do
              if (m--, T--, 0 > T || c[m] !== d[T]) {
                var x = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
              }
            while (1 <= m && 0 <= T);
          break;
        }
      }
    } finally {
      Qe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? I(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return I(n.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case Ne:
        return "Portal";
      case jt:
        return "Profiler";
      case an:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case zt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case xt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case bt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function at(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function It(n) {
    var r = pt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dn(n) {
    n._valueTracker || (n._valueTracker = It(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = pt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function tr(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ot(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Vn(n, r);
    var l = ot(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || En(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Cn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(R(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(R(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(R(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ot(l) };
  }
  function Ya(n, r) {
    var l = ot(r.value), o = ot(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function On(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function gr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? gr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $a, ci = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($a = $a || document.createElement("div"), $a.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $a.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ae(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var De = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, st = ["Webkit", "ms", "Moz", "O"];
  Object.keys(De).forEach(function(n) {
    st.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), De[r] = De[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || De.hasOwnProperty(n) && De[n] ? ("" + r).trim() : r + "px";
  }
  function Zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var pn = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(R(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(R(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(R(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(R(62));
    }
  }
  function Gn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Sr = null;
  function Ra(n) {
    if (n = Ae(n)) {
      if (typeof Yt != "function") throw Error(R(280));
      var r = n.stateNode;
      r && (r = hn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function ji(n) {
    ca ? Sr ? Sr.push(n) : Sr = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Sr;
      if (Sr = ca = null, Ra(n), r) for (n = 0; n < r.length; n++) Ra(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function tu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return eu(n, r, l);
    } finally {
      pl = !1, (ca !== null || Sr !== null) && (dl(), Zl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = hn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(R(231, r, typeof l));
    return l;
  }
  var xr = !1;
  if (He) try {
    var nr = {};
    Object.defineProperty(nr, "passive", { get: function() {
      xr = !0;
    } }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
  } catch {
    xr = !1;
  }
  function fi(n, r, l, o, c, d, m, T, x) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (G) {
      this.onError(G);
    }
  }
  var Wa = !1, di = null, pi = !1, _ = null, Y = { onError: function(n) {
    Wa = !0, di = n;
  } };
  function ce(n, r, l, o, c, d, m, T, x) {
    Wa = !1, di = null, fi.apply(Y, arguments);
  }
  function Se(n, r, l, o, c, d, m, T, x) {
    if (ce.apply(this, arguments), Wa) {
      if (Wa) {
        var F = di;
        Wa = !1, di = null;
      } else throw Error(R(198));
      pi || (pi = !0, _ = F);
    }
  }
  function et(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Xe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function mt(n) {
    if (et(n) !== n) throw Error(R(188));
  }
  function vt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = et(n), r === null) throw Error(R(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return mt(c), n;
          if (d === o) return mt(c), r;
          d = d.sibling;
        }
        throw Error(R(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, T = c.child; T; ) {
          if (T === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (T === o) {
            m = !0, o = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!m) {
          for (T = d.child; T; ) {
            if (T === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (T === o) {
              m = !0, o = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!m) throw Error(R(189));
        }
      }
      if (l.alternate !== o) throw Error(R(190));
    }
    if (l.tag !== 3) throw Error(R(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = vt(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = C.unstable_scheduleCallback, rr = C.unstable_cancelCallback, Qa = C.unstable_shouldYield, qa = C.unstable_requestPaint, tt = C.unstable_now, it = C.unstable_getCurrentPriorityLevel, Ga = C.unstable_ImmediatePriority, nu = C.unstable_UserBlockingPriority, ru = C.unstable_NormalPriority, vl = C.unstable_LowPriority, Qu = C.unstable_IdlePriority, hl = null, $r = null;
  function Wo(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var br = Math.clz32 ? Math.clz32 : qu, oc = Math.log, sc = Math.LN2;
  function qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (oc(n) / sc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function Ka(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var T = m & ~c;
      T !== 0 ? o = Ka(T) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - br(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Gu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - br(d), T = 1 << m, x = c[m];
      x === -1 ? ((T & l) === 0 || (T & o) !== 0) && (c[m] = Gu(T, r)) : x <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = ml;
    return ml <<= 1, (ml & 4194240) === 0 && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - br(r), n[r] = l;
  }
  function Jf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - br(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - br(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Qo, vi, Ke, Zu, ar = !1, hi = [], kr = null, mi = null, sn = null, $t = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), Bn = [], Dr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        $t.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ae(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return kr = iu(kr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = iu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return $t.set(d, iu($t.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, iu(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Xe(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = Ae(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Zf() {
    ar = !1, kr !== null && Sl(kr) && (kr = null), mi !== null && Sl(mi) && (mi = null), sn !== null && Sl(sn) && (sn = null), $t.forEach(lu), gl.forEach(lu);
  }
  function _a(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ar || (ar = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Zf)));
  }
  function Ja(n) {
    function r(c) {
      return _a(c, n);
    }
    if (0 < hi.length) {
      _a(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (kr !== null && _a(kr, n), mi !== null && _a(mi, n), sn !== null && _a(sn, n), $t.forEach(r), gl.forEach(r), l = 0; l < Bn.length; l++) o = Bn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Bn.length && (l = Bn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Bn.shift();
  }
  var yi = ft.ReactCurrentBatchConfig, xa = !0;
  function eo(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 1, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 4, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (xa) {
      var c = no(n, r, l, o);
      if (c === null) Cc(n, r, o, uu, l), wa(n, o);
      else if (qo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Dr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ae(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Cc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Cc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Bt(o), n = vu(n), n !== null) if (r = et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Xe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (it()) {
          case Ga:
            return 1;
          case nu:
            return 4;
          case ru:
          case vl:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, w = null;
  function z() {
    if (w) return w;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Z() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function se(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Z : ze, this.isPropagationStopped = ze, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Z);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Z);
    }, persist: function() {
    }, isPersistent: Z }), r;
  }
  var Ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yt = se(Ve), _t = oe({}, Ve, { view: 0, detail: 0 }), nn = se(_t), Wt, ct, Qt, vn = oe({}, _t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Wt = n.screenX - Qt.screenX, ct = n.screenY - Qt.screenY) : ct = Wt = 0, Qt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ct;
  } }), Cl = se(vn), Ko = oe({}, vn, { dataTransfer: 0 }), Vi = se(Ko), Xo = oe({}, _t, { relatedTarget: 0 }), ou = se(Xo), ed = oe({}, Ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = se(ed), td = oe({}, Ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ov = se(td), nd = oe({}, Ve, { data: 0 }), rd = se(nd), sv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, cv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, uy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = uy[n]) ? !!r[n] : !1;
  }
  function ad() {
    return Ii;
  }
  var id = oe({}, _t, { key: function(n) {
    if (n.key) {
      var r = sv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ad, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ld = se(id), ud = oe({}, vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fv = se(ud), fc = oe({}, _t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), dv = se(fc), Wr = oe({}, Ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bi = se(Wr), Ln = oe({}, vn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = se(Ln), od = [9, 13, 27, 32], ao = He && "CompositionEvent" in window, Jo = null;
  He && "documentMode" in document && (Jo = document.documentMode);
  var Zo = He && "TextEvent" in window && !Jo, pv = He && (!ao || Jo && 8 < Jo && 11 >= Jo), vv = " ", dc = !1;
  function hv(n, r) {
    switch (n) {
      case "keyup":
        return od.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function yv(n, r) {
    switch (n) {
      case "compositionend":
        return mv(r);
      case "keypress":
        return r.which !== 32 ? null : (dc = !0, vv);
      case "textInput":
        return n = r.data, n === vv && dc ? null : n;
      default:
        return null;
    }
  }
  function oy(n, r) {
    if (io) return n === "compositionend" || !ao && hv(n, r) ? (n = z(), w = h = Za = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return pv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function gv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!sy[n.type] : r === "textarea";
  }
  function sd(n, r, l, o) {
    ji(o), r = is(r, "onChange"), 0 < r.length && (l = new yt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function Sv(n) {
    du(n, 0);
  }
  function es(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var Ev = !1;
  if (He) {
    var cd;
    if (He) {
      var fd = "oninput" in document;
      if (!fd) {
        var Cv = document.createElement("div");
        Cv.setAttribute("oninput", "return;"), fd = typeof Cv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    Ev = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Tv() {
    gi && (gi.detachEvent("onpropertychange", Rv), su = gi = null);
  }
  function Rv(n) {
    if (n.propertyName === "value" && es(su)) {
      var r = [];
      sd(r, su, n, Bt(n)), tu(Sv, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (Tv(), gi = r, su = l, gi.attachEvent("onpropertychange", Rv)) : n === "focusout" && Tv();
  }
  function wv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(su);
  }
  function dy(n, r) {
    if (n === "click") return es(r);
  }
  function _v(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : py;
  function ts(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ee.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function xv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function pc(n, r) {
    var l = xv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = xv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ns() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function vc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ns(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && vc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pc(l, d);
          var m = pc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vy = He && "documentMode" in document && 11 >= document.documentMode, uo = null, dd = null, rs = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || uo == null || uo !== En(o) || (o = uo, "selectionStart" in o && vc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ts(rs, o) || (rs = o, o = is(dd, "onSelect"), 0 < o.length && (r = new yt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function hc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: hc("Animation", "AnimationEnd"), animationiteration: hc("Animation", "AnimationIteration"), animationstart: hc("Animation", "AnimationStart"), transitionend: hc("Transition", "TransitionEnd") }, ir = {}, hd = {};
  He && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function mc(n) {
    if (ir[n]) return ir[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return ir[n] = r[l];
    return n;
  }
  var bv = mc("animationend"), kv = mc("animationiteration"), Dv = mc("animationstart"), Ov = mc("transitionend"), md = /* @__PURE__ */ new Map(), yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ba(n, r) {
    md.set(n, r), Ee(r, [n]);
  }
  for (var yd = 0; yd < yc.length; yd++) {
    var fu = yc[yd], hy = fu.toLowerCase(), my = fu[0].toUpperCase() + fu.slice(1);
    ba(hy, "on" + my);
  }
  ba(bv, "onAnimationEnd"), ba(kv, "onAnimationIteration"), ba(Dv, "onAnimationStart"), ba("dblclick", "onDoubleClick"), ba("focusin", "onFocus"), ba("focusout", "onBlur"), ba(Ov, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), Ee("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ee("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ee("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ee("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ee("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ee("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function gc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Se(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var T = o[m], x = T.instance, F = T.currentTarget;
          if (T = T.listener, x !== d && c.isPropagationStopped()) break e;
          gc(c, T, F), d = x;
        }
        else for (m = 0; m < o.length; m++) {
          if (T = o[m], x = T.instance, F = T.currentTarget, T = T.listener, x !== d && c.isPropagationStopped()) break e;
          gc(c, T, F), d = x;
        }
      }
    }
    if (pi) throw n = _, pi = !1, _ = null, n;
  }
  function Ht(n, r) {
    var l = r[os];
    l === void 0 && (l = r[os] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Lv(r, n, 2, !1), l.add(o));
  }
  function Sc(n, r, l) {
    var o = 0;
    r && (o |= 4), Lv(l, n, o, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[Ec]) {
      n[Ec] = !0, Q.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || Sc(l, !1, n), Sc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ec] || (r[Ec] = !0, Sc("selectionchange", !1, r));
    }
  }
  function Lv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !xr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Cc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var T = o.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var x = m.tag;
          if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          m = m.return;
        }
        for (; T !== null; ) {
          if (m = vu(T), m === null) return;
          if (x = m.tag, x === 5 || x === 6) {
            o = d = m;
            continue e;
          }
          T = T.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var F = d, G = Bt(l), X = [];
      e: {
        var q = md.get(n);
        if (q !== void 0) {
          var he = yt, Ce = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = ld;
              break;
            case "focusin":
              Ce = "focus", he = ou;
              break;
            case "focusout":
              Ce = "blur", he = ou;
              break;
            case "beforeblur":
            case "afterblur":
              he = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Vi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = dv;
              break;
            case bv:
            case kv:
            case Dv:
              he = cc;
              break;
            case Ov:
              he = Bi;
              break;
            case "scroll":
              he = nn;
              break;
            case "wheel":
              he = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = ov;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = fv;
          }
          var _e = (r & 4) !== 0, bn = !_e && n === "scroll", L = _e ? q !== null ? q + "Capture" : null : q;
          _e = [];
          for (var k = F, N; k !== null; ) {
            N = k;
            var K = N.stateNode;
            if (N.tag === 5 && K !== null && (N = K, L !== null && (K = _r(k, L), K != null && _e.push(so(k, K, N)))), bn) break;
            k = k.return;
          }
          0 < _e.length && (q = new he(q, Ce, null, l, G), X.push({ event: q, listeners: _e }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", q && l !== en && (Ce = l.relatedTarget || l.fromElement) && (vu(Ce) || Ce[$i])) break e;
          if ((he || q) && (q = G.window === G ? G : (q = G.ownerDocument) ? q.defaultView || q.parentWindow : window, he ? (Ce = l.relatedTarget || l.toElement, he = F, Ce = Ce ? vu(Ce) : null, Ce !== null && (bn = et(Ce), Ce !== bn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (he = null, Ce = F), he !== Ce)) {
            if (_e = Cl, K = "onMouseLeave", L = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (_e = fv, K = "onPointerLeave", L = "onPointerEnter", k = "pointer"), bn = he == null ? q : ti(he), N = Ce == null ? q : ti(Ce), q = new _e(K, k + "leave", he, l, G), q.target = bn, q.relatedTarget = N, K = null, vu(G) === F && (_e = new _e(L, k + "enter", Ce, l, G), _e.target = N, _e.relatedTarget = bn, K = _e), bn = K, he && Ce) t: {
              for (_e = he, L = Ce, k = 0, N = _e; N; N = Rl(N)) k++;
              for (N = 0, K = L; K; K = Rl(K)) N++;
              for (; 0 < k - N; ) _e = Rl(_e), k--;
              for (; 0 < N - k; ) L = Rl(L), N--;
              for (; k--; ) {
                if (_e === L || L !== null && _e === L.alternate) break t;
                _e = Rl(_e), L = Rl(L);
              }
              _e = null;
            }
            else _e = null;
            he !== null && Av(X, q, he, _e, !1), Ce !== null && bn !== null && Av(X, bn, Ce, _e, !0);
          }
        }
        e: {
          if (q = F ? ti(F) : window, he = q.nodeName && q.nodeName.toLowerCase(), he === "select" || he === "input" && q.type === "file") var Te = cy;
          else if (gv(q)) if (Ev) Te = _v;
          else {
            Te = wv;
            var je = fy;
          }
          else (he = q.nodeName) && he.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (Te = dy);
          if (Te && (Te = Te(n, F))) {
            sd(X, Te, l, G);
            break e;
          }
          je && je(n, q, F), n === "focusout" && (je = q._wrapperState) && je.controlled && q.type === "number" && oa(q, "number", q.value);
        }
        switch (je = F ? ti(F) : window, n) {
          case "focusin":
            (gv(je) || je.contentEditable === "true") && (uo = je, dd = F, rs = null);
            break;
          case "focusout":
            rs = dd = uo = null;
            break;
          case "mousedown":
            pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pd = !1, vd(X, l, G);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(X, l, G);
        }
        var Ie;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ge = "onCompositionStart";
              break e;
            case "compositionend":
              Ge = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ge = "onCompositionUpdate";
              break e;
          }
          Ge = void 0;
        }
        else io ? hv(n, l) && (Ge = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (pv && l.locale !== "ko" && (io || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && io && (Ie = z()) : (Za = G, h = "value" in Za ? Za.value : Za.textContent, io = !0)), je = is(F, Ge), 0 < je.length && (Ge = new rd(Ge, n, null, l, G), X.push({ event: Ge, listeners: je }), Ie ? Ge.data = Ie : (Ie = mv(l), Ie !== null && (Ge.data = Ie)))), (Ie = Zo ? yv(n, l) : oy(n, l)) && (F = is(F, "onBeforeInput"), 0 < F.length && (G = new rd("onBeforeInput", "beforeinput", null, l, G), X.push({ event: G, listeners: F }), G.data = Ie));
      }
      du(X, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(so(n, d, c)), d = _r(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function Rl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Av(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var T = l, x = T.alternate, F = T.stateNode;
      if (x !== null && x === o) break;
      T.tag === 5 && F !== null && (T = F, c ? (x = _r(l, d), x != null && m.unshift(so(l, x, T))) : c || (x = _r(l, d), x != null && m.push(so(l, x, T)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Mv = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Nv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Mv, `
`).replace(yy, "");
  }
  function Tc(n, r, l) {
    if (r = Nv(r), Nv(n) !== r && l) throw Error(R(425));
  }
  function wl() {
  }
  var ls = null, pu = null;
  function Rc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wc = typeof setTimeout == "function" ? setTimeout : void 0, Sd = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv < "u" ? function(n) {
    return Uv.resolve(null).then(n).catch(_c);
  } : wc;
  function _c(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function zv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var _l = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + _l, us = "__reactProps$" + _l, $i = "__reactContainer$" + _l, os = "__reactEvents$" + _l, po = "__reactListeners$" + _l, gy = "__reactHandles$" + _l;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = zv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = zv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ae(n) {
    return n = n[Ei] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(R(33));
  }
  function hn(n) {
    return n[us] || null;
  }
  var Et = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = Et[ka], Et[ka] = null, ka--);
  }
  function Le(n, r) {
    ka++, Et[ka] = n.current, n.current = r;
  }
  var Er = {}, Sn = Da(Er), Yn = Da(!1), Qr = Er;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Er;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    rn(Yn), rn(Sn);
  }
  function Fv(n, r, l) {
    if (Sn.current !== Er) throw Error(R(168));
    Le(Sn, r), Le(Yn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(R(108, at(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Er, Qr = Sn.current, Le(Sn, n), Le(Yn, Yn.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(R(169));
    l ? (n = ss(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, rn(Yn), rn(Sn), Le(Sn, n)) : rn(Yn), Le(Yn, l);
  }
  var Ci = null, ho = !1, Wi = !1;
  function bc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function xl(n) {
    ho = !0, bc(n);
  }
  function Ti() {
    if (!Wi && Ci !== null) {
      Wi = !0;
      var n = 0, r = Ot;
      try {
        var l = Ci;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(Ga, Ti), c;
      } finally {
        Ot = r, Wi = !1;
      }
    }
    return null;
  }
  var bl = [], kl = 0, Dl = null, Qi = 0, Mn = [], Oa = 0, da = null, Ri = 1, wi = "";
  function hu(n, r) {
    bl[kl++] = Qi, bl[kl++] = Dl, Dl = n, Qi = r;
  }
  function jv(n, r, l) {
    Mn[Oa++] = Ri, Mn[Oa++] = wi, Mn[Oa++] = da, da = n;
    var o = Ri;
    n = wi;
    var c = 32 - br(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - br(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ri = 1 << 32 - br(r) + c | l << c | o, wi = d + n;
    } else Ri = 1 << d | l << c | o, wi = n;
  }
  function kc(n) {
    n.return !== null && (hu(n, 1), jv(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Dl; ) Dl = bl[--kl], bl[kl] = null, Qi = bl[--kl], bl[kl] = null;
    for (; n === da; ) da = Mn[--Oa], Mn[Oa] = null, wi = Mn[--Oa], Mn[Oa] = null, Ri = Mn[--Oa], Mn[Oa] = null;
  }
  var Gr = null, Kr = null, fn = !1, La = null;
  function Ed(n, r) {
    var l = za(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Hv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Gr = n, Kr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Gr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ri, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = za(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Gr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Td(n) {
    if (fn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!Hv(n, r)) {
          if (Cd(n)) throw Error(R(418));
          r = Si(l.nextSibling);
          var o = Gr;
          r && Hv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Gr = n);
        }
      } else {
        if (Cd(n)) throw Error(R(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Gr = n;
      }
    }
  }
  function $n(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Gr = n;
  }
  function Oc(n) {
    if (n !== Gr) return !1;
    if (!fn) return $n(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Rc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (Cd(n)) throw cs(), Error(R(418));
      for (; r; ) Ed(n, r), r = Si(r.nextSibling);
    }
    if ($n(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(R(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = Gr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function cs() {
    for (var n = Kr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Kr = Gr = null, fn = !1;
  }
  function qi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var Sy = ft.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(R(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(R(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var T = c.refs;
          m === null ? delete T[d] : T[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(R(284));
      if (!l._owner) throw Error(R(290, n));
    }
    return n;
  }
  function Lc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(R(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Pv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(L, k) {
      if (n) {
        var N = L.deletions;
        N === null ? (L.deletions = [k], L.flags |= 16) : N.push(k);
      }
    }
    function l(L, k) {
      if (!n) return null;
      for (; k !== null; ) r(L, k), k = k.sibling;
      return null;
    }
    function o(L, k) {
      for (L = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? L.set(k.key, k) : L.set(k.index, k), k = k.sibling;
      return L;
    }
    function c(L, k) {
      return L = jl(L, k), L.index = 0, L.sibling = null, L;
    }
    function d(L, k, N) {
      return L.index = N, n ? (N = L.alternate, N !== null ? (N = N.index, N < k ? (L.flags |= 2, k) : N) : (L.flags |= 2, k)) : (L.flags |= 1048576, k);
    }
    function m(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function T(L, k, N, K) {
      return k === null || k.tag !== 6 ? (k = Zd(N, L.mode, K), k.return = L, k) : (k = c(k, N), k.return = L, k);
    }
    function x(L, k, N, K) {
      var Te = N.type;
      return Te === Pe ? G(L, k, N.props.children, K, N.key) : k !== null && (k.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Dt && Pv(Te) === k.type) ? (K = c(k, N.props), K.ref = mu(L, k, N), K.return = L, K) : (K = Ps(N.type, N.key, N.props, null, L.mode, K), K.ref = mu(L, k, N), K.return = L, K);
    }
    function F(L, k, N, K) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== N.containerInfo || k.stateNode.implementation !== N.implementation ? (k = ff(N, L.mode, K), k.return = L, k) : (k = c(k, N.children || []), k.return = L, k);
    }
    function G(L, k, N, K, Te) {
      return k === null || k.tag !== 7 ? (k = el(N, L.mode, K, Te), k.return = L, k) : (k = c(k, N), k.return = L, k);
    }
    function X(L, k, N) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Zd("" + k, L.mode, N), k.return = L, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case we:
            return N = Ps(k.type, k.key, k.props, null, L.mode, N), N.ref = mu(L, null, k), N.return = L, N;
          case Ne:
            return k = ff(k, L.mode, N), k.return = L, k;
          case Dt:
            var K = k._init;
            return X(L, K(k._payload), N);
        }
        if (qn(k) || ke(k)) return k = el(k, L.mode, N, null), k.return = L, k;
        Lc(L, k);
      }
      return null;
    }
    function q(L, k, N, K) {
      var Te = k !== null ? k.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return Te !== null ? null : T(L, k, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case we:
            return N.key === Te ? x(L, k, N, K) : null;
          case Ne:
            return N.key === Te ? F(L, k, N, K) : null;
          case Dt:
            return Te = N._init, q(
              L,
              k,
              Te(N._payload),
              K
            );
        }
        if (qn(N) || ke(N)) return Te !== null ? null : G(L, k, N, K, null);
        Lc(L, N);
      }
      return null;
    }
    function he(L, k, N, K, Te) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return L = L.get(N) || null, T(k, L, "" + K, Te);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case we:
            return L = L.get(K.key === null ? N : K.key) || null, x(k, L, K, Te);
          case Ne:
            return L = L.get(K.key === null ? N : K.key) || null, F(k, L, K, Te);
          case Dt:
            var je = K._init;
            return he(L, k, N, je(K._payload), Te);
        }
        if (qn(K) || ke(K)) return L = L.get(N) || null, G(k, L, K, Te, null);
        Lc(k, K);
      }
      return null;
    }
    function Ce(L, k, N, K) {
      for (var Te = null, je = null, Ie = k, Ge = k = 0, Zn = null; Ie !== null && Ge < N.length; Ge++) {
        Ie.index > Ge ? (Zn = Ie, Ie = null) : Zn = Ie.sibling;
        var Mt = q(L, Ie, N[Ge], K);
        if (Mt === null) {
          Ie === null && (Ie = Zn);
          break;
        }
        n && Ie && Mt.alternate === null && r(L, Ie), k = d(Mt, k, Ge), je === null ? Te = Mt : je.sibling = Mt, je = Mt, Ie = Zn;
      }
      if (Ge === N.length) return l(L, Ie), fn && hu(L, Ge), Te;
      if (Ie === null) {
        for (; Ge < N.length; Ge++) Ie = X(L, N[Ge], K), Ie !== null && (k = d(Ie, k, Ge), je === null ? Te = Ie : je.sibling = Ie, je = Ie);
        return fn && hu(L, Ge), Te;
      }
      for (Ie = o(L, Ie); Ge < N.length; Ge++) Zn = he(Ie, L, Ge, N[Ge], K), Zn !== null && (n && Zn.alternate !== null && Ie.delete(Zn.key === null ? Ge : Zn.key), k = d(Zn, k, Ge), je === null ? Te = Zn : je.sibling = Zn, je = Zn);
      return n && Ie.forEach(function(Vl) {
        return r(L, Vl);
      }), fn && hu(L, Ge), Te;
    }
    function _e(L, k, N, K) {
      var Te = ke(N);
      if (typeof Te != "function") throw Error(R(150));
      if (N = Te.call(N), N == null) throw Error(R(151));
      for (var je = Te = null, Ie = k, Ge = k = 0, Zn = null, Mt = N.next(); Ie !== null && !Mt.done; Ge++, Mt = N.next()) {
        Ie.index > Ge ? (Zn = Ie, Ie = null) : Zn = Ie.sibling;
        var Vl = q(L, Ie, Mt.value, K);
        if (Vl === null) {
          Ie === null && (Ie = Zn);
          break;
        }
        n && Ie && Vl.alternate === null && r(L, Ie), k = d(Vl, k, Ge), je === null ? Te = Vl : je.sibling = Vl, je = Vl, Ie = Zn;
      }
      if (Mt.done) return l(
        L,
        Ie
      ), fn && hu(L, Ge), Te;
      if (Ie === null) {
        for (; !Mt.done; Ge++, Mt = N.next()) Mt = X(L, Mt.value, K), Mt !== null && (k = d(Mt, k, Ge), je === null ? Te = Mt : je.sibling = Mt, je = Mt);
        return fn && hu(L, Ge), Te;
      }
      for (Ie = o(L, Ie); !Mt.done; Ge++, Mt = N.next()) Mt = he(Ie, L, Ge, Mt.value, K), Mt !== null && (n && Mt.alternate !== null && Ie.delete(Mt.key === null ? Ge : Mt.key), k = d(Mt, k, Ge), je === null ? Te = Mt : je.sibling = Mt, je = Mt);
      return n && Ie.forEach(function(Th) {
        return r(L, Th);
      }), fn && hu(L, Ge), Te;
    }
    function bn(L, k, N, K) {
      if (typeof N == "object" && N !== null && N.type === Pe && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case we:
            e: {
              for (var Te = N.key, je = k; je !== null; ) {
                if (je.key === Te) {
                  if (Te = N.type, Te === Pe) {
                    if (je.tag === 7) {
                      l(L, je.sibling), k = c(je, N.props.children), k.return = L, L = k;
                      break e;
                    }
                  } else if (je.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Dt && Pv(Te) === je.type) {
                    l(L, je.sibling), k = c(je, N.props), k.ref = mu(L, je, N), k.return = L, L = k;
                    break e;
                  }
                  l(L, je);
                  break;
                } else r(L, je);
                je = je.sibling;
              }
              N.type === Pe ? (k = el(N.props.children, L.mode, K, N.key), k.return = L, L = k) : (K = Ps(N.type, N.key, N.props, null, L.mode, K), K.ref = mu(L, k, N), K.return = L, L = K);
            }
            return m(L);
          case Ne:
            e: {
              for (je = N.key; k !== null; ) {
                if (k.key === je) if (k.tag === 4 && k.stateNode.containerInfo === N.containerInfo && k.stateNode.implementation === N.implementation) {
                  l(L, k.sibling), k = c(k, N.children || []), k.return = L, L = k;
                  break e;
                } else {
                  l(L, k);
                  break;
                }
                else r(L, k);
                k = k.sibling;
              }
              k = ff(N, L.mode, K), k.return = L, L = k;
            }
            return m(L);
          case Dt:
            return je = N._init, bn(L, k, je(N._payload), K);
        }
        if (qn(N)) return Ce(L, k, N, K);
        if (ke(N)) return _e(L, k, N, K);
        Lc(L, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, k !== null && k.tag === 6 ? (l(L, k.sibling), k = c(k, N), k.return = L, L = k) : (l(L, k), k = Zd(N, L.mode, K), k.return = L, L = k), m(L)) : l(L, k);
    }
    return bn;
  }
  var Rn = yu(!0), fe = yu(!1), pa = Da(null), Xr = null, mo = null, Rd = null;
  function wd() {
    Rd = mo = Xr = null;
  }
  function _d(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function xd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function mn(n, r) {
    Xr = n, Rd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Un = !0), n.firstContext = null);
  }
  function Aa(n) {
    var r = n._currentValue;
    if (Rd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Xr === null) throw Error(R(308));
      mo = n, Xr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function bd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, bd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function Dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Vv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ct & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, bd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  function Iv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function fs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var x = T, F = x.next;
      x.next = null, m === null ? d = F : m.next = F, m = x;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, T = G.lastBaseUpdate, T !== m && (T === null ? G.firstBaseUpdate = F : T.next = F, G.lastBaseUpdate = x));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, G = F = x = null, T = d;
      do {
        var q = T.lane, he = T.eventTime;
        if ((o & q) === q) {
          G !== null && (G = G.next = {
            eventTime: he,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Ce = n, _e = T;
            switch (q = r, he = l, _e.tag) {
              case 1:
                if (Ce = _e.payload, typeof Ce == "function") {
                  X = Ce.call(he, X, q);
                  break e;
                }
                X = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = _e.payload, q = typeof Ce == "function" ? Ce.call(he, X, q) : Ce, q == null) break e;
                X = oe({}, X, q);
                break e;
              case 2:
                ha = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [T] : q.push(T));
        } else he = { eventTime: he, lane: q, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, G === null ? (F = G = he, x = X) : G = G.next = he, m |= q;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          q = T, T = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (x = X), c.baseState = x, c.firstBaseUpdate = F, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function Od(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(R(191, c));
        c.call(o);
      }
    }
  }
  var ds = {}, _i = Da(ds), ps = Da(ds), vs = Da(ds);
  function Su(n) {
    if (n === ds) throw Error(R(174));
    return n;
  }
  function Ld(n, r) {
    switch (Le(vs, r), Le(ps, n), Le(_i, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(_i), Le(_i, r);
  }
  function Eu() {
    rn(_i), rn(ps), rn(vs);
  }
  function Bv(n) {
    Su(vs.current);
    var r = Su(_i.current), l = sa(r, n.type);
    r !== l && (Le(ps, n), Le(_i, l));
  }
  function Mc(n) {
    ps.current === n && (rn(_i), rn(ps));
  }
  var yn = Da(0);
  function Nc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var hs = [];
  function Me() {
    for (var n = 0; n < hs.length; n++) hs[n]._workInProgressVersionPrimary = null;
    hs.length = 0;
  }
  var ht = ft.ReactCurrentDispatcher, Lt = ft.ReactCurrentBatchConfig, qt = 0, At = null, Nn = null, Xn = null, Uc = !1, ms = !1, Cu = 0, W = 0;
  function kt() {
    throw Error(R(321));
  }
  function Ye(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Al(n, r, l, o, c, d) {
    if (qt = d, At = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ht.current = n === null || n.memoizedState === null ? Kc : Ts, n = l(o, c), ms) {
      d = 0;
      do {
        if (ms = !1, Cu = 0, 25 <= d) throw Error(R(301));
        d += 1, Xn = Nn = null, r.updateQueue = null, ht.current = Xc, n = l(o, c);
      } while (ms);
    }
    if (ht.current = xu, r = Nn !== null && Nn.next !== null, qt = 0, Xn = Nn = At = null, Uc = !1, r) throw Error(R(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Cr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xn === null ? At.memoizedState = Xn = n : Xn = Xn.next = n, Xn;
  }
  function wn() {
    if (Nn === null) {
      var n = At.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Nn.next;
    var r = Xn === null ? At.memoizedState : Xn.next;
    if (r !== null) Xn = r, Nn = n;
    else {
      if (n === null) throw Error(R(310));
      Nn = n, n = { memoizedState: Nn.memoizedState, baseState: Nn.baseState, baseQueue: Nn.baseQueue, queue: Nn.queue, next: null }, Xn === null ? At.memoizedState = Xn = n : Xn = Xn.next = n;
    }
    return Xn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ml(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(R(311));
    l.lastRenderedReducer = n;
    var o = Nn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = m = null, x = null, F = d;
      do {
        var G = F.lane;
        if ((qt & G) === G) x !== null && (x = x.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var X = {
            lane: G,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          x === null ? (T = x = X, m = o) : x = x.next = X, At.lanes |= G, Di |= G;
        }
        F = F.next;
      } while (F !== null && F !== d);
      x === null ? m = o : x.next = T, ei(o, r.memoizedState) || (Un = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = x, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, At.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(R(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (Un = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Fc(n, r) {
    var l = At, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Un = !0), o = o.queue, ys(Pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xn !== null && Xn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, Hc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(R(349));
      (qt & 30) !== 0 || jc(l, r, c);
    }
    return c;
  }
  function jc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = At.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, At.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Hc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Ic(n);
  }
  function Pc(n, r, l) {
    return l(function() {
      Vc(r) && Ic(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = va(n, 1);
    r !== null && Mr(r, n, 1, -1);
  }
  function Bc(n) {
    var r = Cr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = _u.bind(null, At, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = At.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, At.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Yc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Cr();
    At.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Nn !== null) {
      var m = Nn.memoizedState;
      if (d = m.destroy, o !== null && Ye(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    At.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ys(n, r) {
    return go(2048, 8, n, r);
  }
  function Wc(n, r) {
    return go(4, 2, n, r);
  }
  function gs(n, r) {
    return go(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Qc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function Ss() {
  }
  function qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ye(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Gc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ye(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ad(n, r, l) {
    return (qt & 21) === 0 ? (n.baseState && (n.baseState = !1, Un = !0), n.memoizedState = l) : (ei(l, r) || (l = Ku(), At.lanes |= l, Di |= l, n.baseState = !0), r);
  }
  function Es(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Lt.transition;
    Lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, Lt.transition = o;
    }
  }
  function Md() {
    return wn().memoizedState;
  }
  function Cs(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) Yv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = jn();
      Mr(l, n, o, c), Xt(l, r, o);
    }
  }
  function _u(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) Yv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, T = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = T, ei(T, m)) {
          var x = r.interleaved;
          x === null ? (c.next = c, bd(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      l = kd(n, r, c, o), l !== null && (c = jn(), Mr(l, n, o, c), Xt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === At || r !== null && r === At;
  }
  function Yv(n, r) {
    ms = Uc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Xt(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var xu = { readContext: Aa, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Kc = { readContext: Aa, useCallback: function(n, r) {
    return Cr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Aa, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Cr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Cr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Cs.bind(null, At, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Cr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Bc, useDebugValue: Ss, useDeferredValue: function(n) {
    return Cr().memoizedState = n;
  }, useTransition: function() {
    var n = Bc(!1), r = n[0];
    return n = Es.bind(null, n[1]), Cr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = At, c = Cr();
    if (fn) {
      if (l === void 0) throw Error(R(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(R(349));
      (qt & 30) !== 0 || jc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Pc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, Hc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Cr(), r = Wn.identifierPrefix;
    if (fn) {
      var l = wi, o = Ri;
      l = (o & ~(1 << 32 - br(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = W++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Aa,
    useCallback: qc,
    useContext: Aa,
    useEffect: ys,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: gs,
    useMemo: Gc,
    useReducer: Ml,
    useRef: Yc,
    useState: function() {
      return Ml(Ki);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = wn();
      return Ad(r, Nn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ml(Ki)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Fc,
    useId: Md,
    unstable_isNewReconciler: !1
  }, Xc = { readContext: Aa, useCallback: qc, useContext: Aa, useEffect: ys, useImperativeHandle: Qc, useInsertionEffect: Wc, useLayoutEffect: gs, useMemo: Gc, useReducer: Tu, useRef: Yc, useState: function() {
    return Tu(Ki);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = wn();
    return Nn === null ? r.memoizedState = n : Ad(r, Nn.memoizedState, n);
  }, useTransition: function() {
    var n = Tu(Ki)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Fc, useId: Md, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Nd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Jc = { isMounted: function(n) {
    return (n = n._reactInternals) ? et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Oi(n), d = Gi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Mr(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Oi(n), d = Gi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Mr(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = jn(), o = Oi(n), c = Gi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (Mr(r, n, o, l), Ac(r, n, o));
  } };
  function $v(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(l, o) || !ts(c, d) : !0;
  }
  function Zc(n, r, l) {
    var o = !1, c = Er, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Aa(d) : (c = An(r) ? Qr : Sn.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Er), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Jc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Jc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Aa(d) : (d = An(r) ? Qr : Sn.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Nd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Jc.enqueueReplaceState(c, c.state, null), fs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bu(n, r) {
    try {
      var l = "", o = r;
      do
        l += dt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ud(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function zd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Qv(n, r, l) {
    l = Gi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), zd(n, r);
    }, l;
  }
  function Fd(n, r, l) {
    l = Gi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        zd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      zd(n, r), typeof o != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function jd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ef();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = xy.bind(null, n, r, l), r.then(n, n));
  }
  function qv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Nl(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Gi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var ws = ft.ReactCurrentOwner, Un = !1;
  function lr(n, r, l, o) {
    r.child = n === null ? fe(r, null, l, o) : Rn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return mn(r, c), o = Al(n, r, l, o, d, c), l = ni(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Na(n, r, c)) : (fn && l && kc(r), r.flags |= 1, lr(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Jd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, nt(n, r, d, o, c)) : (n = Ps(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ts, l(m, o) && n.ref === r.ref) return Na(n, r, c);
    }
    return r.flags |= 1, n = jl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function nt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref) if (Un = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Un = !0);
      else return r.lanes = n.lanes, Na(n, r, c);
    }
    return Gv(n, r, l, o, c);
  }
  function _s(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(Co, ma), ma |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Le(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Le(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Le(Co, ma), ma |= o;
    return lr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gv(n, r, l, o, c) {
    var d = An(l) ? Qr : Sn.current;
    return d = qr(r, d), mn(r, c), l = Al(n, r, l, o, d, c), o = ni(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Na(n, r, c)) : (fn && o && kc(r), r.flags |= 1, lr(n, r, l, c), r.child);
  }
  function Kv(n, r, l, o, c) {
    if (An(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (mn(r, c), r.stateNode === null) Ma(n, r), Zc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, T = r.memoizedProps;
      m.props = T;
      var x = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = Aa(F) : (F = An(l) ? Qr : Sn.current, F = qr(r, F));
      var G = l.getDerivedStateFromProps, X = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== o || x !== F) && Wv(r, m, o, F), ha = !1;
      var q = r.memoizedState;
      m.state = q, fs(r, o, m, c), x = r.memoizedState, T !== o || q !== x || Yn.current || ha ? (typeof G == "function" && (Nd(r, l, G, o), x = r.memoizedState), (T = ha || $v(r, l, T, o, q, x, F)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = x), m.props = o, m.state = x, m.context = F, o = T) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Vv(n, r), T = r.memoizedProps, F = r.type === r.elementType ? T : ri(r.type, T), m.props = F, X = r.pendingProps, q = m.context, x = l.contextType, typeof x == "object" && x !== null ? x = Aa(x) : (x = An(l) ? Qr : Sn.current, x = qr(r, x));
      var he = l.getDerivedStateFromProps;
      (G = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== X || q !== x) && Wv(r, m, o, x), ha = !1, q = r.memoizedState, m.state = q, fs(r, o, m, c);
      var Ce = r.memoizedState;
      T !== X || q !== Ce || Yn.current || ha ? (typeof he == "function" && (Nd(r, l, he, o), Ce = r.memoizedState), (F = ha || $v(r, l, F, o, q, Ce, x) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, x)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = x, o = F) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), Na(n, r, d);
    o = r.stateNode, ws.current = r;
    var T = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Rn(r, n.child, null, d), r.child = Rn(r, null, T, d)) : lr(n, r, T, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Fv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fv(n, r.context, !1), Ld(n, r.containerInfo);
  }
  function Xv(n, r, l, o, c) {
    return Ol(), qi(c), r.flags |= 256, lr(n, r, l, o), r.child;
  }
  var tf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nf(n, r, l) {
    var o = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, T;
    if ((T = m) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Le(yn, c & 1), n === null)
      return Td(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = tf, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return Jv(n, r, m, o, T, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, T = c.sibling;
      var x = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = x, r.deletions = null) : (o = jl(c, x), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = jl(T, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = tf, o;
    }
    return d = n.child, n = d.sibling, o = jl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && qi(o), Rn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Jv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ud(Error(R(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Rn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = tf, d);
    if ((r.mode & 1) === 0) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var T = o.dgst;
      return o = T, d = Error(R(419)), o = Ud(d, o, void 0), bs(n, r, m, o);
    }
    if (T = (m & n.childLanes) !== 0, Un || T) {
      if (o = Wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), Mr(o, n, c, -1));
      }
      return Xd(), o = Ud(Error(R(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = by.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Si(c.nextSibling), Gr = r, fn = !0, La = null, n !== null && (Mn[Oa++] = Ri, Mn[Oa++] = wi, Mn[Oa++] = da, Ri = n.id, wi = n.overflow, da = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Id(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), xd(n.return, r, l);
  }
  function Or(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function xi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (lr(n, r, o.children, l), o = yn.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Id(n, l, r);
        else if (n.tag === 19) Id(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Le(yn, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Nc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Or(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Nc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Or(r, !0, l, null, d);
        break;
      case "together":
        Or(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ma(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Na(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(R(153));
    if (r.child !== null) {
      for (n = r.child, l = jl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = jl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ks(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ol();
        break;
      case 5:
        Bv(r);
        break;
      case 1:
        An(r.type) && Kn(r);
        break;
      case 4:
        Ld(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Le(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Le(yn, yn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? nf(n, r, l) : (Le(yn, yn.current & 1), n = Na(n, r, l), n !== null ? n.sibling : null);
        Le(yn, yn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return xi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Le(yn, yn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _s(n, r, l);
    }
    return Na(n, r, l);
  }
  var Ua, zn, Zv, eh;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, zn = function() {
  }, Zv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(_i.current);
      var d = null;
      switch (l) {
        case "input":
          c = tr(n, c), o = tr(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      un(l, o);
      var m;
      l = null;
      for (F in c) if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var T = c[F];
        for (m in T) T.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (ie.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var x = o[F];
        if (T = c?.[F], o.hasOwnProperty(F) && x !== T && (x != null || T != null)) if (F === "style") if (T) {
          for (m in T) !T.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in x) x.hasOwnProperty(m) && T[m] !== x[m] && (l || (l = {}), l[m] = x[m]);
        } else l || (d || (d = []), d.push(
          F,
          l
        )), l = x;
        else F === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, T = T ? T.__html : void 0, x != null && T !== x && (d = d || []).push(F, x)) : F === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(F, "" + x) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (ie.hasOwnProperty(F) ? (x != null && F === "onScroll" && Ht("scroll", n), d || T === x || (d = [])) : (d = d || []).push(F, x));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, eh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!fn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function th(n, r, l) {
    var o = r.pendingProps;
    switch (Dc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jn(r), null;
      case 1:
        return An(r.type) && vo(), Jn(r), null;
      case 3:
        return o = r.stateNode, Eu(), rn(Yn), rn(Sn), Me(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Oc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, La !== null && (Lu(La), La = null))), zn(n, r), Jn(r), null;
      case 5:
        Mc(r);
        var c = Su(vs.current);
        if (l = r.type, n !== null && r.stateNode != null) Zv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(R(166));
            return Jn(r), null;
          }
          if (n = Su(_i.current), Oc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Ht(as[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Pn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                yr(o, d), Ht("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var T = d[m];
              m === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && Tc(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && Tc(
                o.textContent,
                T,
                n
              ), c = ["children", "" + T]) : ie.hasOwnProperty(m) && T != null && m === "onScroll" && Ht("scroll", o);
            }
            switch (l) {
              case "input":
                Dn(o), si(o, d, !0);
                break;
              case "textarea":
                Dn(o), On(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = gr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[us] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Gn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Ht(as[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = tr(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = In(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var x = T[d];
                d === "style" ? Zt(n, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && ci(n, x)) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && ae(n, x) : typeof x == "number" && ae(n, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ie.hasOwnProperty(d) ? x != null && d === "onScroll" && Ht("scroll", n) : x != null && We(n, d, x, m));
              }
              switch (l) {
                case "input":
                  Dn(n), si(n, o, !1);
                  break;
                case "textarea":
                  Dn(n), On(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ot(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Cn(n, !!o.multiple, d, !1) : o.defaultValue != null && Cn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) eh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(R(166));
          if (l = Su(vs.current), Su(_i.current), Oc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = Gr, n !== null)) switch (n.tag) {
              case 3:
                Tc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Tc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (rn(yn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Kr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) cs(), Ol(), r.flags |= 98560, d = !1;
          else if (d = Oc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(R(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(R(317));
              d[Ei] = r;
            } else Ol(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (yn.current & 1) !== 0 ? xn === 0 && (xn = 3) : Xd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Eu(), zn(n, r), n === null && oo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return _d(r.type._context), Jn(r), null;
      case 17:
        return An(r.type) && vo(), Jn(r), null;
      case 19:
        if (rn(yn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (xn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = Nc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Le(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && tt() > Ro && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Nc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return Jn(r), null;
          } else 2 * tt() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = tt(), r.sibling = null, l = yn.current, Le(yn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Kd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (ma & 1073741824) !== 0 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(R(156, r.tag));
  }
  function rf(n, r) {
    switch (Dc(r), r.tag) {
      case 1:
        return An(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), rn(Yn), rn(Sn), Me(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (rn(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(R(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(yn), null;
      case 4:
        return Eu(), null;
      case 10:
        return _d(r.type._context), null;
      case 22:
      case 23:
        return Kd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1, Tr = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      dn(n, r, o);
    }
    else l.current = null;
  }
  function af(n, r, l) {
    try {
      l();
    } catch (o) {
      dn(n, r, o);
    }
  }
  var nh = !1;
  function rh(n, r) {
    if (ls = xa, n = ns(), vc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, T = -1, x = -1, F = 0, G = 0, X = n, q = null;
          t: for (; ; ) {
            for (var he; X !== l || c !== 0 && X.nodeType !== 3 || (T = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (x = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (he = X.firstChild) !== null; )
              q = X, X = he;
            for (; ; ) {
              if (X === n) break t;
              if (q === l && ++F === c && (T = m), q === d && ++G === o && (x = m), (he = X.nextSibling) !== null) break;
              X = q, q = X.parentNode;
            }
            X = he;
          }
          l = T === -1 || x === -1 ? null : { start: T, end: x };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, xa = !1, ge = r; ge !== null; ) if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ge = n;
    else for (; ge !== null; ) {
      r = ge;
      try {
        var Ce = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ce !== null) {
              var _e = Ce.memoizedProps, bn = Ce.memoizedState, L = r.stateNode, k = L.getSnapshotBeforeUpdate(r.elementType === r.type ? _e : ri(r.type, _e), bn);
              L.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(R(163));
        }
      } catch (K) {
        dn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ge = n;
        break;
      }
      ge = r.return;
    }
    return Ce = nh, nh = !1, Ce;
  }
  function Ls(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && af(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function As(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      n.tag, n = l, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function lf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, lf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[us], delete r[os], delete r[po], delete r[gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Xi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function bi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (bi(n, r, l), n = n.sibling; n !== null; ) bi(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var _n = null, Lr = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; ) ah(n, r, l), l = l.sibling;
  }
  function ah(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || Eo(l, r);
      case 6:
        var o = _n, c = Lr;
        _n = null, Ar(n, r, l), _n = o, Lr = c, _n !== null && (Lr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Lr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Lr, _n = l.stateNode.containerInfo, Lr = !0, Ar(n, r, l), _n = o, Lr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && af(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (T) {
          dn(l, r, T);
        }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Ar(n, r, l), Tr = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function ih(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ey()), r.forEach(function(o) {
        var c = vh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, T = m;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              _n = T.stateNode, Lr = !1;
              break e;
            case 3:
              _n = T.stateNode.containerInfo, Lr = !0;
              break e;
            case 4:
              _n = T.stateNode.containerInfo, Lr = !0;
              break e;
          }
          T = T.return;
        }
        if (_n === null) throw Error(R(160));
        ah(d, m, c), _n = null, Lr = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (F) {
        dn(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Yd(r, n), r = r.sibling;
  }
  function Yd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Ls(3, n, n.return), As(3, n);
          } catch (_e) {
            dn(n, n.return, _e);
          }
          try {
            Ls(5, n, n.return);
          } catch (_e) {
            dn(n, n.return, _e);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ae(c, "");
          } catch (_e) {
            dn(n, n.return, _e);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, T = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null) try {
            T === "input" && d.type === "radio" && d.name != null && Vn(c, d), Gn(T, m);
            var F = Gn(T, d);
            for (m = 0; m < x.length; m += 2) {
              var G = x[m], X = x[m + 1];
              G === "style" ? Zt(c, X) : G === "dangerouslySetInnerHTML" ? ci(c, X) : G === "children" ? ae(c, X) : We(c, G, X, F);
            }
            switch (T) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? Cn(c, !!d.multiple, he, !1) : q !== !!d.multiple && (d.defaultValue != null ? Cn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Cn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (_e) {
            dn(n, n.return, _e);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(R(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (_e) {
            dn(n, n.return, _e);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (_e) {
          dn(n, n.return, _e);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = tt())), o & 4 && ih(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (F = Tr) || G, ai(r, n), Tr = F) : ai(r, n), ea(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !G && (n.mode & 1) !== 0) for (ge = n, G = n.child; G !== null; ) {
            for (X = ge = G; ge !== null; ) {
              switch (q = ge, he = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, q, q.return);
                  break;
                case 1:
                  Eo(q, q.return);
                  var Ce = q.stateNode;
                  if (typeof Ce.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                    } catch (_e) {
                      dn(o, l, _e);
                    }
                  }
                  break;
                case 5:
                  Eo(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    Ns(X);
                    continue;
                  }
              }
              he !== null ? (he.return = q, ge = he) : Ns(X);
            }
            G = G.sibling;
          }
          e: for (G = null, X = n; ; ) {
            if (X.tag === 5) {
              if (G === null) {
                G = X;
                try {
                  c = X.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = X.stateNode, x = X.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, T.style.display = Ft("display", m));
                } catch (_e) {
                  dn(n, n.return, _e);
                }
              }
            } else if (X.tag === 6) {
              if (G === null) try {
                X.stateNode.nodeValue = F ? "" : X.memoizedProps;
              } catch (_e) {
                dn(n, n.return, _e);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              G === X && (G = null), X = X.return;
            }
            G === X && (G = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && ih(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(R(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ae(c, ""), o.flags &= -33);
            var d = Xi(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, T = Xi(n);
            bi(n, T, m);
            break;
          default:
            throw Error(R(161));
        }
      } catch (x) {
        dn(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    ge = n, $d(n);
  }
  function $d(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Os;
        if (!m) {
          var T = c.alternate, x = T !== null && T.memoizedState !== null || Tr;
          T = Os;
          var F = Tr;
          if (Os = m, (Tr = x) && !F) for (ge = c; ge !== null; ) m = ge, x = m.child, m.tag === 22 && m.memoizedState !== null ? Wd(c) : x !== null ? (x.return = m, ge = x) : Wd(c);
          for (; d !== null; ) ge = d, $d(d), d = d.sibling;
          ge = c, Os = T, Tr = F;
        }
        lh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ge = d) : lh(n);
    }
  }
  function lh(n) {
    for (; ge !== null; ) {
      var r = ge;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || As(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Od(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Od(r, m, l);
              }
              break;
            case 5:
              var T = r.stateNode;
              if (l === null && r.flags & 4) {
                l = T;
                var x = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && l.focus();
                    break;
                  case "img":
                    x.src && (l.src = x.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var G = F.memoizedState;
                  if (G !== null) {
                    var X = G.dehydrated;
                    X !== null && Ja(X);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
          Tr || r.flags & 512 && Bd(r);
        } catch (q) {
          dn(r, r.return, q);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Ns(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Wd(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (x) {
              dn(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                dn(r, c, x);
              }
            }
            var d = r.return;
            try {
              Bd(r);
            } catch (x) {
              dn(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Bd(r);
            } catch (x) {
              dn(r, m, x);
            }
        }
      } catch (x) {
        dn(r, r.return, x);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, ge = T;
        break;
      }
      ge = r.return;
    }
  }
  var Ty = Math.ceil, Ul = ft.ReactCurrentDispatcher, Du = ft.ReactCurrentOwner, ur = ft.ReactCurrentBatchConfig, Ct = 0, Wn = null, Fn = null, or = 0, ma = 0, Co = Da(0), xn = 0, Us = null, Di = 0, To = 0, uf = 0, zs = null, ta = null, Qd = 0, Ro = 1 / 0, ya = null, wo = !1, Ou = null, zl = null, of = !1, Ji = null, Fs = 0, Fl = 0, _o = null, js = -1, Rr = 0;
  function jn() {
    return (Ct & 6) !== 0 ? tt() : js !== -1 ? js : js = tt();
  }
  function Oi(n) {
    return (n.mode & 1) === 0 ? 1 : (Ct & 2) !== 0 && or !== 0 ? or & -or : Sy.transition !== null ? (Rr === 0 && (Rr = Ku()), Rr) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n);
  }
  function Mr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, _o = null, Error(R(185));
    Hi(n, l, o), ((Ct & 2) === 0 || n !== Wn) && (n === Wn && ((Ct & 2) === 0 && (To |= l), xn === 4 && ii(n, or)), na(n, o), l === 1 && Ct === 0 && (r.mode & 1) === 0 && (Ro = tt() + 500, ho && Ti()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Wn ? or : 0);
    if (o === 0) l !== null && rr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && rr(l), r === 1) n.tag === 0 ? xl(qd.bind(null, n)) : bc(qd.bind(null, n)), co(function() {
        (Ct & 6) === 0 && Ti();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = Ga;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Qu;
            break;
          default:
            l = ru;
        }
        l = mh(l, sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function sf(n, r) {
    if (js = -1, Rr = 0, (Ct & 6) !== 0) throw Error(R(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Wn ? or : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = cf(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = oh();
      (Wn !== n || or !== r) && (ya = null, Ro = tt() + 500, Zi(n, r));
      do
        try {
          sh();
          break;
        } catch (T) {
          uh(n, T);
        }
      while (!0);
      wd(), Ul.current = d, Ct = c, Fn !== null ? r = 0 : (Wn = null, or = 0, r = xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = Hs(n, c))), r === 1) throw l = Us, Zi(n, 0), ii(n, o), na(n, tt()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Ry(c) && (r = cf(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = Hs(n, d))), r === 1)) throw l = Us, Zi(n, 0), ii(n, o), na(n, tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(R(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Qd + 500 - tt(), 10 < r)) {
              if (Xa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                jn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = wc(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - br(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ty(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = wc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(R(329));
        }
      }
    }
    return na(n, tt()), n.callbackNode === l ? sf.bind(null, n) : null;
  }
  function Hs(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (Zi(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function Ry(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~uf, r &= ~To, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qd(n) {
    if ((Ct & 6) !== 0) throw Error(R(327));
    xo();
    var r = Xa(n, 0);
    if ((r & 1) === 0) return na(n, tt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = Hs(n, o));
    }
    if (l === 1) throw l = Us, Zi(n, 0), ii(n, r), na(n, tt()), l;
    if (l === 6) throw Error(R(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, tt()), null;
  }
  function Gd(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (Ro = tt() + 500, ho && Ti());
    }
  }
  function Au(n) {
    Ji !== null && Ji.tag === 0 && (Ct & 6) === 0 && xo();
    var r = Ct;
    Ct |= 1;
    var l = ur.transition, o = Ot;
    try {
      if (ur.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, ur.transition = l, Ct = r, (Ct & 6) === 0 && Ti();
    }
  }
  function Kd() {
    ma = Co.current, rn(Co);
  }
  function Zi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (Dc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), rn(Yn), rn(Sn), Me();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          rn(yn);
          break;
        case 19:
          rn(yn);
          break;
        case 10:
          _d(o.type._context);
          break;
        case 22:
        case 23:
          Kd();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = jl(n.current, null), or = ma = r, xn = 0, Us = null, uf = To = Di = 0, ta = zs = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function uh(n, r) {
    do {
      var l = Fn;
      try {
        if (wd(), ht.current = xu, Uc) {
          for (var o = At.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Uc = !1;
        }
        if (qt = 0, Xn = Nn = At = null, ms = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          xn = 1, Us = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, T = l, x = r;
          if (r = or, T.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var F = x, G = T, X = G.tag;
            if ((G.mode & 1) === 0 && (X === 0 || X === 11 || X === 15)) {
              var q = G.alternate;
              q ? (G.updateQueue = q.updateQueue, G.memoizedState = q.memoizedState, G.lanes = q.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var he = qv(m);
            if (he !== null) {
              he.flags &= -257, Nl(he, m, T, d, r), he.mode & 1 && jd(d, F, r), r = he, x = F;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var _e = /* @__PURE__ */ new Set();
                _e.add(x), r.updateQueue = _e;
              } else Ce.add(x);
              break e;
            } else {
              if ((r & 1) === 0) {
                jd(d, F, r), Xd();
                break e;
              }
              x = Error(R(426));
            }
          } else if (fn && T.mode & 1) {
            var bn = qv(m);
            if (bn !== null) {
              (bn.flags & 65536) === 0 && (bn.flags |= 256), Nl(bn, m, T, d, r), qi(bu(x, T));
              break e;
            }
          }
          d = x = bu(x, T), xn !== 4 && (xn = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Qv(d, x, r);
                Iv(d, L);
                break e;
              case 1:
                T = x;
                var k = d.type, N = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (zl === null || !zl.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Fd(d, T, r);
                  Iv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        fh(l);
      } catch (Te) {
        r = Te, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function oh() {
    var n = Ul.current;
    return Ul.current = xu, n === null ? xu : n;
  }
  function Xd() {
    (xn === 0 || xn === 3 || xn === 2) && (xn = 4), Wn === null || (Di & 268435455) === 0 && (To & 268435455) === 0 || ii(Wn, or);
  }
  function cf(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = oh();
    (Wn !== n || or !== r) && (ya = null, Zi(n, r));
    do
      try {
        wy();
        break;
      } catch (c) {
        uh(n, c);
      }
    while (!0);
    if (wd(), Ct = l, Ul.current = o, Fn !== null) throw Error(R(261));
    return Wn = null, or = 0, xn;
  }
  function wy() {
    for (; Fn !== null; ) ch(Fn);
  }
  function sh() {
    for (; Fn !== null && !Qa(); ) ch(Fn);
  }
  function ch(n) {
    var r = hh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? fh(n) : Fn = r, Du.current = null;
  }
  function fh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = th(l, r, ma), l !== null) {
          Fn = l;
          return;
        }
      } else {
        if (l = rf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          xn = 6, Fn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    xn === 0 && (xn = 5);
  }
  function Mu(n, r, l) {
    var o = Ot, c = ur.transition;
    try {
      ur.transition = null, Ot = 1, _y(n, r, l, o);
    } finally {
      ur.transition = c, Ot = o;
    }
    return null;
  }
  function _y(n, r, l, o) {
    do
      xo();
    while (Ji !== null);
    if ((Ct & 6) !== 0) throw Error(R(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(R(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Jf(n, d), n === Wn && (Fn = Wn = null, or = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || of || (of = !0, mh(ru, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = ur.transition, ur.transition = null;
      var m = Ot;
      Ot = 1;
      var T = Ct;
      Ct |= 4, Du.current = null, rh(n, l), Yd(l, n), lo(pu), xa = !!ls, pu = ls = null, n.current = l, Cy(l), qa(), Ct = T, Ot = m, ur.transition = d;
    } else n.current = l;
    if (of && (of = !1, Ji = n, Fs = c), d = n.pendingLanes, d === 0 && (zl = null), Wo(l.stateNode), na(n, tt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return (Fs & 1) !== 0 && n.tag !== 0 && xo(), d = n.pendingLanes, (d & 1) !== 0 ? n === _o ? Fl++ : (Fl = 0, _o = n) : Fl = 0, Ti(), null;
  }
  function xo() {
    if (Ji !== null) {
      var n = Ju(Fs), r = ur.transition, l = Ot;
      try {
        if (ur.transition = null, Ot = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, Fs = 0, (Ct & 6) !== 0) throw Error(R(331));
          var c = Ct;
          for (Ct |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if ((ge.flags & 16) !== 0) {
              var T = d.deletions;
              if (T !== null) {
                for (var x = 0; x < T.length; x++) {
                  var F = T[x];
                  for (ge = F; ge !== null; ) {
                    var G = ge;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, G, d);
                    }
                    var X = G.child;
                    if (X !== null) X.return = G, ge = X;
                    else for (; ge !== null; ) {
                      G = ge;
                      var q = G.sibling, he = G.return;
                      if (lf(G), G === F) {
                        ge = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = he, ge = q;
                        break;
                      }
                      ge = he;
                    }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var _e = Ce.child;
                  if (_e !== null) {
                    Ce.child = null;
                    do {
                      var bn = _e.sibling;
                      _e.sibling = null, _e = bn;
                    } while (_e !== null);
                  }
                }
                ge = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, ge = m;
            else e: for (; ge !== null; ) {
              if (d = ge, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, ge = L;
                break e;
              }
              ge = d.return;
            }
          }
          var k = n.current;
          for (ge = k; ge !== null; ) {
            m = ge;
            var N = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && N !== null) N.return = m, ge = N;
            else e: for (m = k; ge !== null; ) {
              if (T = ge, (T.flags & 2048) !== 0) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, T);
                }
              } catch (Te) {
                dn(T, T.return, Te);
              }
              if (T === m) {
                ge = null;
                break e;
              }
              var K = T.sibling;
              if (K !== null) {
                K.return = T.return, ge = K;
                break e;
              }
              ge = T.return;
            }
          }
          if (Ct = c, Ti(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, ur.transition = r;
      }
    }
    return !1;
  }
  function dh(n, r, l) {
    r = bu(l, r), r = Qv(n, r, 1), n = Ll(n, r, 1), r = jn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function dn(n, r, l) {
    if (n.tag === 3) dh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        dh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (zl === null || !zl.has(o))) {
          n = bu(l, n), n = Fd(r, n, 1), r = Ll(r, n, 1), n = jn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function xy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = jn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (or & l) === l && (xn === 4 || xn === 3 && (or & 130023424) === or && 500 > tt() - Qd ? Zi(n, 0) : uf |= l), na(n, r);
  }
  function ph(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = fa, fa <<= 1, (fa & 130023424) === 0 && (fa = 4194304)));
    var l = jn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function by(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ph(n, l);
  }
  function vh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(R(314));
    }
    o !== null && o.delete(r), ph(n, l);
  }
  var hh;
  hh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) Un = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Un = !1, ks(n, r, l);
      Un = (n.flags & 131072) !== 0;
    }
    else Un = !1, fn && (r.flags & 1048576) !== 0 && jv(r, Qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ma(n, r), n = r.pendingProps;
        var c = qr(r, Sn.current);
        mn(r, l), c = Al(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = Jc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && kc(r), lr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ma(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Dy(o), n = ri(o, n), c) {
            case 0:
              r = Gv(null, r, o, n, l);
              break e;
            case 1:
              r = Kv(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(R(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Gv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Kv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(R(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Vv(n, r), fs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bu(Error(R(423)), r), r = Xv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bu(Error(R(424)), r), r = Xv(n, r, o, l, c);
            break e;
          } else for (Kr = Si(r.stateNode.containerInfo.firstChild), Gr = r, fn = !0, La = null, l = fe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = Na(n, r, l);
              break e;
            }
            lr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Bv(r), n === null && Td(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Rc(o, c) ? m = null : d !== null && Rc(o, d) && (r.flags |= 32), Hd(n, r), lr(n, r, m, l), r.child;
      case 6:
        return n === null && Td(r), null;
      case 13:
        return nf(n, r, l);
      case 4:
        return Ld(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Rn(r, null, o, l) : lr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return lr(n, r, r.pendingProps, l), r.child;
      case 8:
        return lr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return lr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Le(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Yn.current) {
              r = Na(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              m = d.child;
              for (var x = T.firstContext; x !== null; ) {
                if (x.context === o) {
                  if (d.tag === 1) {
                    x = Gi(-1, l & -l), x.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var G = F.pending;
                      G === null ? x.next = x : (x.next = G.next, G.next = x), F.pending = x;
                    }
                  }
                  d.lanes |= l, x = d.alternate, x !== null && (x.lanes |= l), xd(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                x = x.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(R(341));
              m.lanes |= l, T = m.alternate, T !== null && (T.lanes |= l), xd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          lr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, mn(r, l), c = Aa(c), o = o(c), r.flags |= 1, lr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return nt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Ma(n, r), r.tag = 1, An(o) ? (n = !0, Kn(r)) : n = !1, mn(r, l), Zc(r, o, c), Rs(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return xi(n, r, l);
      case 22:
        return _s(n, r, l);
    }
    throw Error(R(156, r.tag));
  };
  function mh(n, r) {
    return on(n, r);
  }
  function ky(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function za(n, r, l, o) {
    return new ky(n, r, l, o);
  }
  function Jd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dy(n) {
    if (typeof n == "function") return Jd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xt) return 11;
      if (n === bt) return 14;
    }
    return 2;
  }
  function jl(n, r) {
    var l = n.alternate;
    return l === null ? (l = za(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ps(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Jd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Pe:
        return el(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case jt:
        return n = za(12, l, r, c | 2), n.elementType = jt, n.lanes = d, n;
      case Ue:
        return n = za(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
      case zt:
        return n = za(19, l, r, c), n.elementType = zt, n.lanes = d, n;
      case xe:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case xt:
            m = 11;
            break e;
          case bt:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(R(130, n == null ? n : typeof n, ""));
    }
    return r = za(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = za(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = za(22, n, o, r), n.elementType = xe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Zd(n, r, l) {
    return n = za(6, n, null, r), n.lanes = l, n;
  }
  function ff(n, r, l) {
    return r = za(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function yh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, T, x) {
    return n = new yh(n, r, l, T, x), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = za(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ne, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return Er;
    n = n._reactInternals;
    e: {
      if (et(n) !== n || n.tag !== 1) throw Error(R(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(R(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l)) return ss(n, l, r);
    }
    return r;
  }
  function gh(n, r, l, o, c, d, m, T, x) {
    return n = df(l, o, !0, n, c, d, m, T, x), n.context = ep(null), l = n.current, o = jn(), c = Oi(l), d = Gi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = jn(), m = Oi(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = Gi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (Mr(n, c, m, d), Ac(n, c, m)), m;
  }
  function vf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function tp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    tp(n, r), (n = n.alternate) && tp(n, r);
  }
  function Sh() {
    return null;
  }
  var Nu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function np(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = np.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(R(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = np.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Au(function() {
        pf(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ke();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Bn.length && r !== 0 && r < Bn[l].priority; l++) ;
      Bn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function rp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Eh() {
  }
  function Ly(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = vf(m);
          d.call(F);
        };
      }
      var m = gh(r, o, n, 0, null, !1, !1, "", Eh);
      return n._reactRootContainer = m, n[$i] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Au(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var T = o;
      o = function() {
        var F = vf(x);
        T.call(F);
      };
    }
    var x = df(n, 0, !1, null, null, !1, !1, "", Eh);
    return n._reactRootContainer = x, n[$i] = x.current, oo(n.nodeType === 8 ? n.parentNode : n), Au(function() {
      pf(r, x, l, o);
    }), x;
  }
  function Vs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var x = vf(m);
          T.call(x);
        };
      }
      pf(r, m, n, c);
    } else m = Ly(l, r, n, c, o);
    return vf(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), na(r, tt()), (Ct & 6) === 0 && (Ro = tt() + 500, Ti()));
        }
        break;
      case 13:
        Au(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = jn();
            Mr(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = jn();
        Mr(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = jn();
        Mr(l, n, r, o);
      }
      hf(n, r);
    }
  }, Ke = function() {
    return Ot;
  }, Zu = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = hn(o);
              if (!c) throw Error(R(90));
              wr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Cn(n, !!l.multiple, r, !1);
    }
  }, eu = Gd, dl = Au;
  var Ay = { usingClientEntryPoint: !1, Events: [Ae, ti, hn, ji, Zl, Gd] }, Is = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ch = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      hl = Pl.inject(Ch), $r = Pl;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ay, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rp(r)) throw Error(R(200));
    return Oy(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!rp(n)) throw Error(R(299));
    var l = !1, o = "", c = Nu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new np(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(R(188)) : (n = Object.keys(n).join(","), Error(R(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Au(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(R(200));
    return Vs(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!rp(n)) throw Error(R(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Nu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = gh(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, Ia.render = function(n, r, l) {
    if (!yf(r)) throw Error(R(200));
    return Vs(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(R(40));
    return n._reactRootContainer ? (Au(function() {
      Vs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = Gd, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(R(200));
    if (n == null || n._reactInternals === void 0) throw Error(R(38));
    return Vs(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var Ba = {};
var mR;
function Ck() {
  return mR || (mR = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var y = uv(), C = kR(), R = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = !1;
    function ie(e) {
      Q = e;
    }
    function Ee(e) {
      if (!Q) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        He("warn", e, a);
      }
    }
    function E(e) {
      if (!Q) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        He("error", e, a);
      }
    }
    function He(e, t, a) {
      {
        var i = R.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ee = 0, re = 1, le = 2, $ = 3, pe = 4, te = 5, be = 6, $e = 7, rt = 8, Vt = 9, lt = 10, We = 11, ft = 12, we = 13, Ne = 14, Pe = 15, an = 16, jt = 17, Jt = 18, ln = 19, xt = 21, Ue = 22, zt = 23, bt = 24, Dt = 25, xe = !0, ne = !1, ke = !1, oe = !1, O = !1, I = !0, Qe = !0, Be = !0, dt = !0, ut = /* @__PURE__ */ new Set(), at = {}, ot = {};
    function pt(e, t) {
      It(e, t), It(e + "Capture", t);
    }
    function It(e, t) {
      at[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), at[e] = t;
      {
        var a = e.toLowerCase();
        ot[a] = e, e === "onDoubleClick" && (ot.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var Dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function tr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Vn(e, t) {
      if (tr(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function Yr(e) {
      if (tr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function si(e, t) {
      if (tr(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function oa(e, t) {
      if (tr(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function qn(e) {
      if (tr(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function Cn(e) {
      if (tr(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    var In = 0, yr = 1, Ya = 2, On = 3, gr = 4, sa = 5, $a = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", De = new RegExp("^[" + ci + "][" + ae + "]*$"), st = {}, Ft = {};
    function Zt(e) {
      return wr.call(Ft, e) ? !0 : wr.call(st, e) ? !1 : De.test(e) ? (Ft[e] = !0, !0) : (st[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Gn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case gr:
            return t === !1;
          case sa:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === On || t === gr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      Yt[e] = new Bt(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Yt[t] = new Bt(
        t,
        yr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        On,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        gr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Sr = /[\-\:]([a-z])/g, Ra = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Sr, Ra);
      Yt[t] = new Bt(
        t,
        yr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Sr, Ra);
      Yt[t] = new Bt(
        t,
        yr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Sr, Ra);
      Yt[t] = new Bt(
        t,
        yr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        yr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ji = "xlinkHref";
    Yt[ji] = new Bt(
      "xlinkHref",
      yr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new Bt(
        e,
        yr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function dl(e) {
      !eu && Zl.test(e) && (eu = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Vn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === gr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Gn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Gn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return Gn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Zt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Vn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = en(t);
      if (!pn(t, u, i)) {
        if (Gn(t, a, u, i) && (a = null), i || u === null) {
          if (Zt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Vn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = u.type, b;
          D === On || D === gr && a === !0 ? b = "" : (Vn(a, g), b = "" + a, u.sanitizeURL && dl(b.toString())), S ? e.setAttributeNS(S, g, b) : e.setAttribute(g, b);
        }
      }
    }
    var xr = /* @__PURE__ */ Symbol.for("react.element"), nr = /* @__PURE__ */ Symbol.for("react.portal"), fi = /* @__PURE__ */ Symbol.for("react.fragment"), Wa = /* @__PURE__ */ Symbol.for("react.strict_mode"), di = /* @__PURE__ */ Symbol.for("react.profiler"), pi = /* @__PURE__ */ Symbol.for("react.provider"), _ = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), Se = /* @__PURE__ */ Symbol.for("react.suspense_list"), et = /* @__PURE__ */ Symbol.for("react.memo"), Xe = /* @__PURE__ */ Symbol.for("react.lazy"), mt = /* @__PURE__ */ Symbol.for("react.scope"), vt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Tn = /* @__PURE__ */ Symbol.for("react.offscreen"), tn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), on = /* @__PURE__ */ Symbol.for("react.cache"), rr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, qa = "@@iterator";
    function tt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var it = Object.assign, Ga = 0, nu, ru, vl, Qu, hl, $r, Wo;
    function br() {
    }
    br.__reactDisabledLog = !0;
    function oc() {
      {
        if (Ga === 0) {
          nu = console.log, ru = console.info, vl = console.warn, Qu = console.error, hl = console.group, $r = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: br,
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
        Ga++;
      }
    }
    function sc() {
      {
        if (Ga--, Ga === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, e, {
              value: nu
            }),
            info: it({}, e, {
              value: ru
            }),
            warn: it({}, e, {
              value: vl
            }),
            error: it({}, e, {
              value: Qu
            }),
            group: it({}, e, {
              value: hl
            }),
            groupCollapsed: it({}, e, {
              value: $r
            }),
            groupEnd: it({}, e, {
              value: Wo
            })
          });
        }
        Ga < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qu = R.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var Ka = !1, Xa;
    {
      var Gu = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new Gu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = qu.current, qu.current = null, oc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), g = p.length - 1, S = v.length - 1; g >= 1 && S >= 0 && p[g] !== v[S]; )
            S--;
          for (; g >= 1 && S >= 0; g--, S--)
            if (p[g] !== v[S]) {
              if (g !== 1 || S !== 1)
                do
                  if (g--, S--, S < 0 || p[g] !== v[S]) {
                    var D = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && Xa.set(e, D), D;
                  }
                while (g >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, qu.current = s, sc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", U = b ? fa(b) : "";
      return typeof e == "function" && Xa.set(e, U), U;
    }
    function yl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ce:
          return fa("Suspense");
        case Se:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Ku(e.render);
          case et:
            return Hi(e.type, t, a);
          case Xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Jf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case we:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case ee:
        case le:
        case Pe:
          return Ku(e.type);
        case We:
          return Ku(e.type.render);
        case re:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Pi(e) {
      try {
        var t = "", a = e;
        do
          t += Jf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ot(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case nr:
          return "Portal";
        case di:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ce:
          return "Suspense";
        case Se:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return Ju(t) + ".Consumer";
          case pi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case Y:
            return Ot(e, e.render, "ForwardRef");
          case et:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case bt:
          return "Cache";
        case Vt:
          var i = a;
          return vi(i) + ".Consumer";
        case lt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case We:
          return Qo(a, a.render, "ForwardRef");
        case $e:
          return "Fragment";
        case te:
          return a;
        case pe:
          return "Portal";
        case $:
          return "Root";
        case be:
          return "Text";
        case an:
          return wt(a);
        case rt:
          return a === Wa ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ft:
          return "Profiler";
        case xt:
          return "Scope";
        case we:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case re:
        case ee:
        case jt:
        case le:
        case Ne:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = R.ReactDebugCurrentFrame, ar = null, hi = !1;
    function kr() {
      {
        if (ar === null)
          return null;
        var e = ar._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function mi() {
      return ar === null ? "" : Pi(ar);
    }
    function sn() {
      Zu.getCurrentStack = null, ar = null, hi = !1;
    }
    function $t(e) {
      Zu.getCurrentStack = e === null ? null : mi, ar = e, hi = !1;
    }
    function gl() {
      return ar;
    }
    function Bn(e) {
      hi = e;
    }
    function Dr(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Zf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function _a(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Cn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Cn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      Sl(e) || (e._valueTracker = _a(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, El = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = it({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !El && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Dr(u)) : a.value !== Dr(u) && (a.value = Dr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ze(a, t.type, u) : t.hasOwnProperty("defaultValue") && ze(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Dr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      w(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Vn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Hh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), w(f, p);
          }
        }
      }
    }
    function ze(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Dr(e._wrapperState.initialValue) : e.defaultValue !== Dr(a) && (e.defaultValue = Dr(a)));
    }
    var se = !1, Ve = !1, yt = !1;
    function _t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? y.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ve || (Ve = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (yt || (yt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !se && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), se = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Dr(wa(t.value)));
    }
    var Wt = Array.isArray;
    function ct(e) {
      return Wt(e);
    }
    var Qt;
    Qt = !1;
    function vn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function Ko(e) {
      {
        qo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vn()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vn());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var g = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== g && (u[v].selected = g), g && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Dr(wa(a)), D = null, b = 0; b < u.length; b++) {
          if (u[b].value === S) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          D === null && !u[b].disabled && (D = u[b]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Xo(e, t) {
      return it({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function ed(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function td(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var ov = !1;
    function nd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = it({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Dr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ov && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), ov = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ct(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function sv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Dr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Dr(u));
    }
    function cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function uy(e, t) {
      sv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", ad = "http://www.w3.org/1998/Math/MathML", id = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return id;
        case "math":
          return ad;
        default:
          return Ii;
      }
    }
    function ud(e, t) {
      return e == null || e === Ii ? ld(t) : e === id && t === "foreignObject" ? Ii : e;
    }
    var fv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, dv = fv(function(e, t) {
      if (e.namespaceURI === id && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Wr = 1, Bi = 3, Ln = 8, Yi = 9, od = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function pv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var vv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      vv.forEach(function(t) {
        Zo[pv(t, e)] = Zo[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var hv = /([A-Z])/g, mv = /^ms-/;
    function io(e) {
      return e.replace(hv, "-$1").toLowerCase().replace(mv, "-ms-");
    }
    var yv = function() {
    };
    {
      var oy = /^(?:webkit|moz|o)[A-Z]/, sy = /^-ms-/, gv = /-(.)/g, sd = /;\s*$/, gi = {}, su = {}, Sv = !1, es = !1, cy = function(e) {
        return e.replace(gv, function(t, a) {
          return a.toUpperCase();
        });
      }, Ev = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cy(e.replace(sy, "ms-"))
        ));
      }, cd = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fd = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(sd, "")));
      }, Cv = function(e, t) {
        Sv || (Sv = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Tv = function(e, t) {
        es || (es = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yv = function(e, t) {
        e.indexOf("-") > -1 ? Ev(e) : oy.test(e) ? cd(e) : sd.test(t) && fd(e, t), typeof t == "number" && (isNaN(t) ? Cv(e, t) : isFinite(t) || Tv(e, t));
      };
    }
    var Rv = yv;
    function fy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += dc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function wv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Rv(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function _v(e) {
      var t = {};
      for (var a in e)
        for (var i = Jo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function py(e, t) {
      {
        if (!t)
          return;
        var a = _v(e), i = _v(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", dy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ts = it({
      menuitem: !0
    }, ei), xv = "__html";
    function pc(e, t) {
      if (t) {
        if (ts[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(xv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ns = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, vy = new RegExp("^(aria)-[" + ae + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function dd(e, t) {
      {
        if (wr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (vy.test(t)) {
          var u = t.toLowerCase(), s = vc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function rs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = dd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function pd(e, t) {
      Tl(e, t) || rs(e, t);
    }
    var vd = !1;
    function hc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vd && (vd = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var ir = {}, hd = /^on./, mc = /^on[^A-Z]/, bv = new RegExp("^(aria)-[" + ae + "]*$"), kv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      cu = function(e, t, a, i) {
        if (wr.call(ir, t) && ir[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ir[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ir[t] = !0, !0;
          if (hd.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), ir[t] = !0, !0;
        } else if (hd.test(t))
          return mc.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ir[t] = !0, !0;
        if (bv.test(t) || kv.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ir[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ir[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ir[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ir[t] = !0, !0;
        var v = en(t), g = v !== null && v.type === In;
        if (ns.hasOwnProperty(u)) {
          var S = ns[u];
          if (S !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, S), ir[t] = !0, !0;
        } else if (!g && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ir[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ir[t] = !0, !0) : g ? !0 : un(t, a, v, !1) ? (ir[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ir[t] = !0), !0);
      };
    }
    var Dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ov(e, t, a) {
      Tl(e, t) || Dv(e, t, a);
    }
    var md = 1, yc = 2, ba = 4, yd = md | yc | ba, fu = null;
    function hy(e) {
      fu !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function my() {
      fu === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function as(e) {
      return e === fu;
    }
    function gd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var gc = null, du = null, Ht = null;
    function Sc(e) {
      var t = Do(e);
      if (t) {
        if (typeof gc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Hh(a);
          gc(t.stateNode, t.type, i);
        }
      }
    }
    function Ec(e) {
      gc = e;
    }
    function oo(e) {
      du ? Ht ? Ht.push(e) : Ht = [e] : du = e;
    }
    function Lv() {
      return du !== null || Ht !== null;
    }
    function Cc() {
      if (du) {
        var e = du, t = Ht;
        if (du = null, Ht = null, Sc(e), t)
          for (var a = 0; a < t.length; a++)
            Sc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, is = function() {
    }, Rl = !1;
    function Av() {
      var e = Lv();
      e && (is(), Cc());
    }
    function Mv(e, t, a) {
      if (Rl)
        return e(t, a);
      Rl = !0;
      try {
        return so(e, t, a);
      } finally {
        Rl = !1, Av();
      }
    }
    function yy(e, t, a) {
      so = e, is = a;
    }
    function Nv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Tc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Nv(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Hh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Tc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (Dn)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        ls = !1;
      }
    function Rc(e, t, a, i, u, s, f, p, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, g);
      } catch (S) {
        this.onError(S);
      }
    }
    var wc = Rc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sd = document.createElement("react");
      wc = function(t, a, i, u, s, f, p, v, g) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), D = !1, b = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Sd.removeEventListener(V, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          D = !0, P(), a.apply(i, de), b = !1;
        }
        var Oe, Rt = !1, gt = !1;
        function A(M) {
          if (Oe = M.error, Rt = !0, Oe === null && M.colno === 0 && M.lineno === 0 && (gt = !0), M.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Sd.addEventListener(V, Fe, !1), S.initEvent(V, !1, !1), Sd.dispatchEvent(S), j && Object.defineProperty(window, "event", j), D && b && (Rt ? gt && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", A), !D)
          return P(), Rc.apply(this, arguments);
      };
    }
    var Uv = wc, co = !1, _c = null, fo = !1, Si = null, zv = {
      onError: function(e) {
        co = !0, _c = e;
      }
    };
    function _l(e, t, a, i, u, s, f, p, v) {
      co = !1, _c = null, Uv.apply(zv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (_l.apply(this, arguments), co) {
        var g = os();
        fo || (fo = !0, Si = g);
      }
    }
    function us() {
      if (fo) {
        var e = Si;
        throw fo = !1, Si = null, e;
      }
    }
    function $i() {
      return co;
    }
    function os() {
      if (co) {
        var e = _c;
        return co = !1, _c = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function gy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Ae = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), hn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), Le = (
      /*                   */
      128
    ), Er = (
      /*            */
      256
    ), Sn = (
      /*                          */
      512
    ), Yn = (
      /*                     */
      1024
    ), Qr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), An = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Fv = (
      /*               */
      32767
    ), ss = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Wi = (
      /*                 */
      4194304
    ), bc = (
      /*                */
      8388608
    ), xl = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), bl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | Yn | 0
    ), kl = hn | Et | ka | Da | Sn | qr | An, Dl = Et | rn | Sn | An, Qi = Qr | ka, Mn = Wi | bc | ho, Oa = R.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (hn | qr)) !== Ae && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function Ri(e) {
      if (e.tag === we) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function jv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === re) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function kc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Dc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return kc(s), e;
            if (v === u)
              return kc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var g = !1, S = s.child; S; ) {
            if (S === i) {
              g = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              g = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!g) {
            for (S = f.child; S; ) {
              if (S === i) {
                g = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                g = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!g)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Gr(e) {
      var t = Dc(e);
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === te || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fn(e) {
      var t = Dc(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === te || e.tag === be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== pe) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = C.unstable_scheduleCallback, Hv = C.unstable_cancelCallback, Cd = C.unstable_shouldYield, Td = C.unstable_requestPaint, $n = C.unstable_now, Oc = C.unstable_getCurrentPriorityLevel, cs = C.unstable_ImmediatePriority, Ol = C.unstable_UserBlockingPriority, qi = C.unstable_NormalPriority, Sy = C.unstable_LowPriority, mu = C.unstable_IdlePriority, Lc = C.unstable_yieldValue, Pv = C.unstable_setDisableYieldValue, yu = null, Rn = null, fe = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Qe && (e = it({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Aa
        })), yu = t.inject(e), Rn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rd(e, t) {
      if (Rn && typeof Rn.onScheduleFiberRoot == "function")
        try {
          Rn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function wd(e, t) {
      if (Rn && typeof Rn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Le) === Le;
          if (Be) {
            var i;
            switch (t) {
              case Or:
                i = cs;
                break;
              case xi:
                i = Ol;
                break;
              case Ma:
                i = qi;
                break;
              case Na:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            Rn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, E("React instrumentation encountered an error: %s", u));
        }
    }
    function _d(e) {
      if (Rn && typeof Rn.onPostCommitFiberRoot == "function")
        try {
          Rn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function xd(e) {
      if (Rn && typeof Rn.onCommitFiberUnmount == "function")
        try {
          Rn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function mn(e) {
      if (typeof Lc == "function" && (Pv(e), ie(e)), Rn && typeof Rn.setStrictMode == "function")
        try {
          Rn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Aa(e) {
      fe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Yv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bd(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function kd() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function va(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function ha() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Dd(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Vv() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Gi(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Iv() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Od() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function _i(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function vs() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Su(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function Ld() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function Bv() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function Mc() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function yn(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function Nc(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function hs(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), ht = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), qt = (
      /*               */
      8
    ), At = (
      /*              */
      16
    ), Nn = Math.clz32 ? Math.clz32 : ms, Xn = Math.log, Uc = Math.LN2;
    function ms(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Xn(t) / Uc | 0) | 0;
    }
    var Cu = 31, W = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), Al = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Cr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), Ml = (
      /*                       */
      4194240
    ), Tu = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Hc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), Vc = (
      /*                        */
      4096
    ), Ic = (
      /*                        */
      8192
    ), Bc = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Yc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), ys = (
      /*                       */
      1048576
    ), Wc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Qc = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Gc = (
      /*                             */
      67108864
    ), Ad = wu, Es = (
      /*          */
      134217728
    ), Md = (
      /*                          */
      268435455
    ), Cs = (
      /*               */
      268435456
    ), _u = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function Yv(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & Al)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Cr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & Ml)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & Cs)
          return "IdleHydration";
        if (e & _u)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Xt = -1, xu = Tu, Kc = wu;
    function Ts(e) {
      switch (Nl(e)) {
        case Ye:
          return Ye;
        case Al:
          return Al;
        case ni:
          return ni;
        case Cr:
          return Cr;
        case wn:
          return wn;
        case Ki:
          return Ki;
        case Tu:
        case zc:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Ic:
        case Bc:
        case Ru:
        case Yc:
        case yo:
        case go:
        case $c:
        case ys:
        case Wc:
          return e & Ml;
        case wu:
        case Qc:
        case Ss:
        case qc:
        case Gc:
          return e & gs;
        case Es:
          return Es;
        case Cs:
          return Cs;
        case _u:
          return _u;
        case Jr:
          return Jr;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Xc(e, t) {
      var a = e.pendingLanes;
      if (a === W)
        return W;
      var i = W, u = e.suspendedLanes, s = e.pingedLanes, f = a & Md;
      if (f !== W) {
        var p = f & ~u;
        if (p !== W)
          i = Ts(p);
        else {
          var v = f & s;
          v !== W && (i = Ts(v));
        }
      } else {
        var g = a & ~u;
        g !== W ? i = Ts(g) : s !== W && (i = Ts(s));
      }
      if (i === W)
        return W;
      if (t !== W && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === W) {
        var S = Nl(i), D = Nl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === wn && (D & Ml) !== W
        )
          return t;
      }
      (i & ni) !== W && (i |= a & wn);
      var b = e.entangledLanes;
      if (b !== W)
        for (var U = e.entanglements, j = i & b; j > 0; ) {
          var P = Un(j), de = 1 << P;
          i |= U[P], j &= ~de;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Un(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Nd(e, t) {
      switch (e) {
        case Ye:
        case Al:
        case ni:
          return t + 250;
        case Cr:
        case wn:
        case Ki:
        case Tu:
        case zc:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Ic:
        case Bc:
        case Ru:
        case Yc:
        case yo:
        case go:
        case $c:
        case ys:
        case Wc:
          return t + 5e3;
        case wu:
        case Qc:
        case Ss:
        case qc:
        case Gc:
          return Xt;
        case Es:
        case Cs:
        case _u:
        case Jr:
          return Xt;
        default:
          return E("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Jc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p, g = s[p];
        g === Xt ? ((v & i) === W || (v & u) !== W) && (s[p] = Nd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function $v(e) {
      return Ts(e.pendingLanes);
    }
    function Zc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== W ? t : t & Jr ? Jr : W;
    }
    function Wv(e) {
      return (e & Ye) !== W;
    }
    function Rs(e) {
      return (e & Md) !== W;
    }
    function bu(e) {
      return (e & gs) === e;
    }
    function Ud(e) {
      var t = Ye | ni | wn;
      return (e & t) === W;
    }
    function zd(e) {
      return (e & Ml) === e;
    }
    function ef(e, t) {
      var a = Al | ni | Cr | wn;
      return (t & a) !== W;
    }
    function Qv(e, t) {
      return (t & e.expiredLanes) !== W;
    }
    function Fd(e) {
      return (e & Ml) !== W;
    }
    function jd() {
      var e = xu;
      return xu <<= 1, (xu & Ml) === W && (xu = Tu), e;
    }
    function qv() {
      var e = Kc;
      return Kc <<= 1, (Kc & gs) === W && (Kc = wu), e;
    }
    function Nl(e) {
      return e & -e;
    }
    function ws(e) {
      return Nl(e);
    }
    function Un(e) {
      return 31 - Nn(e);
    }
    function lr(e) {
      return Un(e);
    }
    function Zr(e, t) {
      return (e & t) !== W;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function Gv(e) {
      return e;
    }
    function Kv(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== _u && (e.suspendedLanes = W, e.pingedLanes = W);
      var i = e.eventTimes, u = lr(t);
      i[u] = a;
    }
    function Xv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Un(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = W, e.pingedLanes = W, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p;
        i[p] = W, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function nf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Un(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Nl(t), i;
      switch (a) {
        case ni:
          i = Al;
          break;
        case wn:
          i = Cr;
          break;
        case Tu:
        case zc:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Ic:
        case Bc:
        case Ru:
        case Yc:
        case yo:
        case go:
        case $c:
        case ys:
        case Wc:
        case wu:
        case Qc:
        case Ss:
        case qc:
        case Gc:
          i = Ki;
          break;
        case _u:
          i = Cs;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function bs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = lr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Jv(e, t) {
      if (Xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = lr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Id(e, t) {
      return null;
    }
    var Or = Ye, xi = ni, Ma = wn, Na = _u, ks = kt;
    function Ua() {
      return ks;
    }
    function zn(e) {
      ks = e;
    }
    function Zv(e, t) {
      var a = ks;
      try {
        return ks = e, t();
      } finally {
        ks = a;
      }
    }
    function eh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ds(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function th(e) {
      var t = Nl(e);
      return Jn(Or, t) ? Jn(xi, t) ? Rs(t) ? Ma : Na : xi : Or;
    }
    function rf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Os;
    function Tr(e) {
      Os = e;
    }
    function Ey(e) {
      Os(e);
    }
    var ge;
    function Eo(e) {
      ge = e;
    }
    var af;
    function nh(e) {
      af = e;
    }
    var rh;
    function Ls(e) {
      rh = e;
    }
    var As;
    function Bd(e) {
      As = e;
    }
    var lf = !1, Ms = [], Xi = null, bi = null, ki = null, _n = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Ar = [], ah = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ih(e) {
      return ah.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Yd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xi = null;
          break;
        case "dragenter":
        case "dragleave":
          bi = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ge(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Cy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Xi = ea(Xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return bi = ea(bi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return _n.set(g, ea(_n.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, D = S.pointerId;
          return Lr.set(D, ea(Lr.get(D) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function $d(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === we) {
            var u = Ri(a);
            if (u !== null) {
              e.blockedOn = u, As(e.priority, function() {
                af(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (rf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lh(e) {
      for (var t = rh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ar.length && Jn(t, Ar[i].priority); i++)
        ;
      Ar.splice(i, 0, a), i === 0 && $d(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = To(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          hy(s), u.target.dispatchEvent(s), my();
        } else {
          var f = Do(i);
          return f !== null && ge(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function Ty() {
      lf = !1, Xi !== null && Ns(Xi) && (Xi = null), bi !== null && Ns(bi) && (bi = null), ki !== null && Ns(ki) && (ki = null), _n.forEach(Wd), Lr.forEach(Wd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Ty)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Ul(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && Ul(Xi, e), bi !== null && Ul(bi, e), ki !== null && Ul(ki, e);
      var i = function(p) {
        return Ul(p, e);
      };
      _n.forEach(i), Lr.forEach(i);
      for (var u = 0; u < Ar.length; u++) {
        var s = Ar[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ar.length > 0; ) {
        var f = Ar[0];
        if (f.blockedOn !== null)
          break;
        $d(f), f.blockedOn === null && Ar.shift();
      }
    }
    var ur = R.ReactCurrentBatchConfig, Ct = !0;
    function Wn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function or(e, t, a) {
      var i = uf(t), u;
      switch (i) {
        case Or:
          u = ma;
          break;
        case xi:
          u = Co;
          break;
        case Ma:
        default:
          u = xn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = ur.transition;
      ur.transition = null;
      try {
        zn(Or), xn(e, t, a, i);
      } finally {
        zn(u), ur.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = ur.transition;
      ur.transition = null;
      try {
        zn(xi), xn(e, t, a, i);
      } finally {
        zn(u), ur.transition = s;
      }
    }
    function xn(e, t, a, i) {
      Ct && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var u = To(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Di, a), Yd(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & ba && ih(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Ey(s);
          var f = To(e, t, a, i);
          if (f === null && Hy(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Hy(e, t, i, null, a);
    }
    var Di = null;
    function To(e, t, a, i) {
      Di = null;
      var u = gd(i), s = $s(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === we) {
            var v = Ri(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === $) {
            var g = f.stateNode;
            if (rf(g))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function uf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return xi;
        case "message": {
          var t = Oc();
          switch (t) {
            case cs:
              return Or;
            case Ol:
              return xi;
            case qi:
            case Sy:
              return Ma;
            case mu:
              return Na;
            default:
              return Ma;
          }
        }
        default:
          return Ma;
      }
    }
    function zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, wo = null, Ou = null;
    function zl(e) {
      return ya = e, wo = Fs(), !0;
    }
    function of() {
      ya = null, wo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = wo, a = t.length, i, u = Fs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function Fs() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
      return !0;
    }
    function js() {
      return !1;
    }
    function Rr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = _o : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return it(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _o);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: _o
      }), t;
    }
    var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = Rr(jn), Mr = it({}, jn, {
      view: 0,
      detail: 0
    }), na = Rr(Mr), sf, Hs, Lu;
    function Ry(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (sf = e.screenX - Lu.screenX, Hs = e.screenY - Lu.screenY) : (sf = 0, Hs = 0), Lu = e);
    }
    var ii = it({}, Mr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: dn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ry(e), sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hs;
      }
    }), qd = Rr(ii), Gd = it({}, ii, {
      dataTransfer: 0
    }), Au = Rr(Gd), Kd = it({}, Mr, {
      relatedTarget: 0
    }), Zi = Rr(Kd), uh = it({}, jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oh = Rr(uh), Xd = it({}, jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cf = Rr(Xd), wy = it({}, jn, {
      data: 0
    }), sh = Rr(wy), ch = sh, fh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function _y(e) {
      if (e.key) {
        var t = fh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var xo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = xo[e];
      return i ? !!a[i] : !1;
    }
    function dn(e) {
      return dh;
    }
    var xy = it({}, Mr, {
      key: _y,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ph = Rr(xy), by = it({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), vh = Rr(by), hh = it({}, Mr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dn
    }), mh = Rr(hh), ky = it({}, jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), za = Rr(ky), Jd = it({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Dy = Rr(Jd), jl = [9, 13, 27, 32], Ps = 229, el = Dn && "CompositionEvent" in window, Hl = null;
    Dn && "documentMode" in document && (Hl = document.documentMode);
    var Zd = Dn && "TextEvent" in window && !Hl, ff = Dn && (!el || Hl && Hl > 8 && Hl <= 11), yh = 32, df = String.fromCharCode(yh);
    function Oy() {
      pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ep = !1;
    function gh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vf(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function tp(e, t) {
      switch (e) {
        case "keyup":
          return jl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sh(e) {
      return e.locale === "ko";
    }
    var Nu = !1;
    function np(e, t, a, i, u) {
      var s, f;
      if (el ? s = pf(t) : Nu ? tp(t, i) && (s = "onCompositionEnd") : vf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ff && !Sh(i) && (!Nu && s === "onCompositionStart" ? Nu = zl(u) : s === "onCompositionEnd" && Nu && (f = Ji()));
      var p = xh(a, s);
      if (p.length > 0) {
        var v = new sh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var g = hf(i);
          g !== null && (v.data = g);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return hf(t);
        case "keypress":
          var a = t.which;
          return a !== yh ? null : (ep = !0, df);
        case "textInput":
          var i = t.data;
          return i === df && ep ? null : i;
        default:
          return null;
      }
    }
    function rp(e, t) {
      if (Nu) {
        if (e === "compositionend" || !el && tp(e, t)) {
          var a = Ji();
          return of(), Nu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!gh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ff && !Sh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yf(e, t, a, i, u) {
      var s;
      if (Zd ? s = mf(t, i) : s = rp(t, i), !s)
        return null;
      var f = xh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ch("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Eh(e, t, a, i, u, s, f) {
      np(e, t, a, i, u), yf(e, t, a, i, u);
    }
    var Ly = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ly[e.type] : t === "textarea";
    }
    function Ay(e) {
      if (!Dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Is() {
      pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ch(e, t, a, i) {
      oo(i);
      var u = xh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Pl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Ch(t, n, e, gd(e)), Mv(o, t);
    }
    function o(e) {
      PE(e, 0);
    }
    function c(e) {
      var t = Rf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Dn && (m = Ay("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      Pl = e, n = t, Pl.attachEvent("onpropertychange", F);
    }
    function x() {
      Pl && (Pl.detachEvent("onpropertychange", F), Pl = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (x(), T(t, a)) : e === "focusout" && x();
    }
    function X(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function q(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function he(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ce(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function _e(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
    }
    function bn(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, g;
      if (r(p) ? v = d : Vs(p) ? m ? v = Ce : (v = X, g = G) : q(p) && (v = he), v) {
        var S = v(t, a);
        if (S) {
          Ch(e, S, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && _e(p);
    }
    function L() {
      It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !as(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && ($s(g) || yp(g)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var D = u.ownerDocument;
          D ? S = D.defaultView || D.parentWindow : S = window;
        }
        var b, U;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (b = a, U = j ? $s(j) : null, U !== null) {
            var P = da(U);
            (U !== P || U.tag !== te && U.tag !== be) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var de = qd, Fe = "onMouseLeave", Oe = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = vh, Fe = "onPointerLeave", Oe = "onPointerEnter", Rt = "pointer");
          var gt = b == null ? S : Rf(b), A = U == null ? S : Rf(U), V = new de(Fe, Rt + "leave", b, i, u);
          V.target = gt, V.relatedTarget = A;
          var M = null, J = $s(u);
          if (J === a) {
            var ye = new de(Oe, Rt + "enter", U, i, u);
            ye.target = A, ye.relatedTarget = gt, M = ye;
          }
          QR(e, V, M, b, U);
        }
      }
    }
    function N(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var K = typeof Object.is == "function" ? Object.is : N;
    function Te(e, t) {
      if (K(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !K(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ie(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ge(e, t) {
      for (var a = je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = je(Ie(a));
      }
    }
    function Zn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Mt(e, u, s, f, p);
    }
    function Mt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, S = e, D = null;
      e: for (; ; ) {
        for (var b = null; S === t && (a === 0 || S.nodeType === Bi) && (f = s + a), S === i && (u === 0 || S.nodeType === Bi) && (p = s + u), S.nodeType === Bi && (s += S.nodeValue.length), (b = S.firstChild) !== null; )
          D = S, S = b;
        for (; ; ) {
          if (S === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++g === u && (p = s), (b = S.nextSibling) !== null)
            break;
          S = D, D = S.parentNode;
        }
        S = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Vl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var g = Ge(e, f), S = Ge(e, p);
        if (g && S) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var D = a.createRange();
          D.setStart(g.node, g.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(S.node, S.offset)) : (D.setEnd(S.node, S.offset), u.addRange(D));
        }
      }
    }
    function Th(e) {
      return e && e.nodeType === Bi;
    }
    function DE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Th(e) ? !1 : Th(t) ? DE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function DR(e) {
      return e && e.ownerDocument && DE(e.ownerDocument.documentElement, e);
    }
    function OR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function OE() {
      for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
        if (OR(t))
          e = t.contentWindow;
        else
          return t;
        t = xa(e.document);
      }
      return t;
    }
    function My(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function LR() {
      var e = OE();
      return {
        focusedElem: e,
        selectionRange: My(e) ? MR(e) : null
      };
    }
    function AR(e) {
      var t = OE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && DR(a)) {
        i !== null && My(a) && NR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function MR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zn(e), t || {
        start: 0,
        end: 0
      };
    }
    function NR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Vl(e, t);
    }
    var UR = Dn && "documentMode" in document && document.documentMode <= 11;
    function zR() {
      pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var gf = null, Ny = null, ap = null, Uy = !1;
    function FR(e) {
      if ("selectionStart" in e && My(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function jR(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function LE(e, t, a) {
      var i = jR(a);
      if (!(Uy || gf == null || gf !== xa(i))) {
        var u = FR(gf);
        if (!ap || !Te(ap, u)) {
          ap = u;
          var s = xh(Ny, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = gf;
          }
        }
      }
    }
    function HR(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Vs(p) || p.contentEditable === "true") && (gf = p, Ny = a, ap = null);
          break;
        case "focusout":
          gf = null, Ny = null, ap = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Uy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Uy = !1, LE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (UR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          LE(e, i, u);
      }
    }
    function Rh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Sf = {
      animationend: Rh("Animation", "AnimationEnd"),
      animationiteration: Rh("Animation", "AnimationIteration"),
      animationstart: Rh("Animation", "AnimationStart"),
      transitionend: Rh("Transition", "TransitionEnd")
    }, zy = {}, AE = {};
    Dn && (AE = document.createElement("div").style, "AnimationEvent" in window || (delete Sf.animationend.animation, delete Sf.animationiteration.animation, delete Sf.animationstart.animation), "TransitionEvent" in window || delete Sf.transitionend.transition);
    function wh(e) {
      if (zy[e])
        return zy[e];
      if (!Sf[e])
        return e;
      var t = Sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in AE)
          return zy[e] = t[a];
      return e;
    }
    var ME = wh("animationend"), NE = wh("animationiteration"), UE = wh("animationstart"), zE = wh("transitionend"), FE = /* @__PURE__ */ new Map(), jE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      FE.set(e, t), pt(t, [e]);
    }
    function PR() {
      for (var e = 0; e < jE.length; e++) {
        var t = jE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(ME, "onAnimationEnd"), bo(NE, "onAnimationIteration"), bo(UE, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(zE, "onTransitionEnd");
    }
    function VR(e, t, a, i, u, s, f) {
      var p = FE.get(t);
      if (p !== void 0) {
        var v = Oi, g = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = ph;
            break;
          case "focusin":
            g = "focus", v = Zi;
            break;
          case "focusout":
            g = "blur", v = Zi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Zi;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = qd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Au;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = mh;
            break;
          case ME:
          case NE:
          case UE:
            v = oh;
            break;
          case zE:
            v = za;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = Dy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = vh;
            break;
        }
        var S = (s & ba) !== 0;
        {
          var D = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = $R(a, p, i.type, S, D);
          if (b.length > 0) {
            var U = new v(p, g, null, i, u);
            e.push({
              event: U,
              listeners: b
            });
          }
        }
      }
    }
    PR(), L(), Is(), zR(), Oy();
    function IR(e, t, a, i, u, s, f) {
      VR(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (k(e, t, a, i, u), bn(e, t, a, i, u), HR(e, t, a, i, u), Eh(e, t, a, i, u));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Fy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function HE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function BR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          HE(e, v, p), i = f;
        }
      else
        for (var g = 0; g < t.length; g++) {
          var S = t[g], D = S.instance, b = S.currentTarget, U = S.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          HE(e, U, b), i = D;
        }
    }
    function PE(e, t) {
      for (var a = (t & ba) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        BR(s, f, a);
      }
      us();
    }
    function YR(e, t, a, i, u) {
      var s = gd(a), f = [];
      IR(f, e, i, a, s, t), PE(f, t);
    }
    function gn(e, t) {
      Fy.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = E_(t), u = qR(e);
      i.has(u) || (VE(t, e, yc, a), i.add(u));
    }
    function jy(e, t, a) {
      Fy.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ba), VE(a, e, i, t);
    }
    var _h = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[_h]) {
        e[_h] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (Fy.has(a) || jy(a, !1, e), jy(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[_h] || (t[_h] = !0, jy("selectionchange", !1, t)));
      }
    }
    function VE(e, t, a, i, u) {
      var s = or(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : zs(e, t, s);
    }
    function IE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Hy(e, t, a, i, u) {
      var s = i;
      if ((t & md) === 0 && (t & yc) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === $ || v === pe) {
              var g = p.stateNode.containerInfo;
              if (IE(g, f))
                break;
              if (v === pe)
                for (var S = p.return; S !== null; ) {
                  var D = S.tag;
                  if (D === $ || D === pe) {
                    var b = S.stateNode.containerInfo;
                    if (IE(b, f))
                      return;
                  }
                  S = S.return;
                }
              for (; g !== null; ) {
                var U = $s(g);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === te || j === be) {
                  p = s = U;
                  continue e;
                }
                g = g.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Mv(function() {
        return YR(e, t, a, s);
      });
    }
    function up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $R(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, S = null; g !== null; ) {
        var D = g, b = D.stateNode, U = D.tag;
        if (U === te && b !== null && (S = b, p !== null)) {
          var j = wl(g, p);
          j != null && v.push(up(g, j, S));
        }
        if (u)
          break;
        g = g.return;
      }
      return v;
    }
    function xh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, g = wl(u, a);
          g != null && i.unshift(up(u, g, v));
          var S = wl(u, t);
          S != null && i.push(up(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function WR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ef(s))
        u++;
      for (var f = 0, p = i; p; p = Ef(p))
        f++;
      for (; u - f > 0; )
        a = Ef(a), u--;
      for (; f - u > 0; )
        i = Ef(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function BE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, S = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === te && S !== null) {
          var b = S;
          if (u) {
            var U = wl(p, s);
            U != null && f.unshift(up(p, U, b));
          } else if (!u) {
            var j = wl(p, s);
            j != null && f.push(up(p, j, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function QR(e, t, a, i, u) {
      var s = i && u ? WR(i, u) : null;
      i !== null && BE(e, t, i, s, !1), u !== null && a !== null && BE(e, a, u, s, !0);
    }
    function qR(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, op = "dangerouslySetInnerHTML", bh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", YE = "autoFocus", Bs = "children", Ys = "style", kh = "__html", Py, Dh, sp, $E, Oh, WE, QE;
    Py = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Dh = function(e, t) {
      pd(e, t), hc(e, t), Ov(e, t, {
        registrationNameDependencies: at,
        possibleRegistrationNames: ot
      });
    }, WE = Dn && !document.documentMode, sp = function(e, t, a) {
      if (!Fa) {
        var i = Lh(a), u = Lh(t);
        u !== i && (Fa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, $E = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, Oh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, QE = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var GR = /\r\n?/g, KR = /\u0000|\uFFFD/g;
    function Lh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(GR, `
`).replace(KR, "");
    }
    function Ah(e, t, a, i) {
      var u = Lh(t), s = Lh(e);
      if (s !== u && (i && (Fa || (Fa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function XR() {
    }
    function Mh(e) {
      e.onclick = XR;
    }
    function JR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), wv(t, f);
          else if (s === op) {
            var p = f ? f[kh] : void 0;
            p != null && dv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === bh || s === ko || s === YE || (at.hasOwnProperty(s) ? f != null && (typeof f != "function" && Oh(s, f), s === "onScroll" && gn("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function ZR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ys ? wv(e, f) : s === op ? dv(e, f) : s === Bs ? ao(e, f) : _r(e, s, f, i);
      }
    }
    function ew(e, t, a, i) {
      var u, s = qE(a), f, p = i;
      if (p === Ii && (p = ld(e)), p === Ii) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var g = v.firstChild;
          f = v.removeChild(g);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(Py, e) && (Py[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function tw(e, t) {
      return qE(t).createTextNode(e);
    }
    function nw(e, t, a, i) {
      var u = Tl(t, a);
      Dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            gn(ip[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ro(e, a), gn("invalid", e);
          break;
        case "option":
          _t(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Xo(e, a), gn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), JR(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), cv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          ed(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mh(e);
          break;
      }
    }
    function rw(e, t, a, i, u) {
      Dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = nd(e, a), p = nd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Mh(e);
          break;
      }
      pc(t, p);
      var v, g, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ys) {
            var D = f[v];
            for (g in D)
              D.hasOwnProperty(g) && (S || (S = {}), S[g] = "");
          } else v === op || v === Bs || v === bh || v === ko || v === YE || (at.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], U = f?.[v];
        if (!(!p.hasOwnProperty(v) || b === U || b == null && U == null))
          if (v === Ys)
            if (b && Object.freeze(b), U) {
              for (g in U)
                U.hasOwnProperty(g) && (!b || !b.hasOwnProperty(g)) && (S || (S = {}), S[g] = "");
              for (g in b)
                b.hasOwnProperty(g) && U[g] !== b[g] && (S || (S = {}), S[g] = b[g]);
            } else
              S || (s || (s = []), s.push(v, S)), S = b;
          else if (v === op) {
            var j = b ? b[kh] : void 0, P = U ? U[kh] : void 0;
            j != null && P !== j && (s = s || []).push(v, j);
          } else v === Bs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === bh || v === ko || (at.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Oh(v, b), v === "onScroll" && gn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return S && (py(S, p[Ys]), (s = s || []).push(Ys, S)), s;
    }
    function aw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (ZR(e, t, s, f), a) {
        case "input":
          w(e, u);
          break;
        case "textarea":
          sv(e, u);
          break;
        case "select":
          cc(e, u);
          break;
      }
    }
    function iw(e) {
      {
        var t = e.toLowerCase();
        return ns.hasOwnProperty(t) && ns[t] || null;
      }
    }
    function lw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Dh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ip.length; g++)
            gn(ip[g], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          Za(e, a), gn("invalid", e);
          break;
        case "option":
          _t(e, a);
          break;
        case "select":
          ou(e, a), gn("invalid", e);
          break;
        case "textarea":
          rd(e, a), gn("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, D = 0; D < S.length; D++) {
          var b = S[D].name.toLowerCase();
          switch (b) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[D].name);
          }
        }
      }
      var U = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var P = a[j];
          if (j === Bs)
            typeof P == "string" ? e.textContent !== P && (a[ko] !== !0 && Ah(e.textContent, P, s, f), U = [Bs, P]) : typeof P == "number" && e.textContent !== "" + P && (a[ko] !== !0 && Ah(e.textContent, P, s, f), U = [Bs, "" + P]);
          else if (at.hasOwnProperty(j))
            P != null && (typeof P != "function" && Oh(j, P), j === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, Fe = en(j);
            if (a[ko] !== !0) {
              if (!(j === bh || j === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === op) {
                  var Oe = e.innerHTML, Rt = P ? P[kh] : void 0;
                  if (Rt != null) {
                    var gt = QE(e, Rt);
                    gt !== Oe && sp(j, Oe, gt);
                  }
                } else if (j === Ys) {
                  if (v.delete(j), WE) {
                    var A = fy(P);
                    de = e.getAttribute("style"), A !== de && sp(j, de, A);
                  }
                } else if (p && !O)
                  v.delete(j.toLowerCase()), de = tu(e, j, P), P !== de && sp(j, de, P);
                else if (!pn(j, Fe, p) && !Gn(j, P, Fe, p)) {
                  var V = !1;
                  if (Fe !== null)
                    v.delete(Fe.attributeName), de = pl(e, j, P, Fe);
                  else {
                    var M = i;
                    if (M === Ii && (M = ld(t)), M === Ii)
                      v.delete(j.toLowerCase());
                    else {
                      var J = iw(j);
                      J !== null && J !== j && (V = !0, v.delete(J)), v.delete(j);
                    }
                    de = tu(e, j, P);
                  }
                  var ye = O;
                  !ye && P !== de && !V && sp(j, de, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && $E(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mh(e);
          break;
      }
      return U;
    }
    function uw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function By(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Yy(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function ow(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          uy(e, a);
          return;
        case "select":
          td(e, a);
          return;
      }
    }
    var cp = function() {
    }, fp = function() {
    };
    {
      var sw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], GE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], cw = GE.concat(["button"]), fw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], KE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      fp = function(e, t) {
        var a = it({}, e || KE), i = {
          tag: t
        };
        return GE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), cw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), sw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var dw = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return fw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, pw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, XE = {};
      cp = function(e, t, a) {
        a = a || KE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = dw(e, u) ? null : i, f = s ? null : pw(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!XE[g]) {
            XE[g] = !0;
            var S = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, D, b);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var Nh = "suppressHydrationWarning", Uh = "$", zh = "/$", dp = "$?", pp = "$!", vw = "style", $y = null, Wy = null;
    function hw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case od: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ud(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ud(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = fp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function mw(e, t, a) {
      {
        var i = e, u = ud(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function lD(e) {
      return e;
    }
    function yw(e) {
      $y = Fn(), Wy = LR();
      var t = null;
      return Wn(!1), t;
    }
    function gw(e) {
      AR(Wy), Wn($y), $y = null, Wy = null;
    }
    function Sw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = fp(f.ancestorInfo, e);
          cp(null, p, v);
        }
        s = f.namespace;
      }
      var g = ew(e, t, a, s);
      return mp(u, g), eg(g, t), g;
    }
    function Ew(e, t) {
      e.appendChild(t);
    }
    function Cw(e, t, a, i, u) {
      switch (nw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Tw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = fp(f.ancestorInfo, t);
          cp(null, p, v);
        }
      }
      return rw(e, t, a, i);
    }
    function Qy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Rw(e, t, a, i) {
      {
        var u = a;
        cp(null, e, u.ancestorInfo);
      }
      var s = tw(e, t);
      return mp(i, s), s;
    }
    function ww() {
      var e = window.event;
      return e === void 0 ? Ma : uf(e.type);
    }
    var qy = typeof setTimeout == "function" ? setTimeout : void 0, _w = typeof clearTimeout == "function" ? clearTimeout : void 0, Gy = -1, JE = typeof Promise == "function" ? Promise : void 0, xw = typeof queueMicrotask == "function" ? queueMicrotask : typeof JE < "u" ? function(e) {
      return JE.resolve(null).then(e).catch(bw);
    } : qy;
    function bw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function kw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Dw(e, t, a, i, u, s) {
      aw(e, t, a, i, u), eg(e, u);
    }
    function ZE(e) {
      ao(e, "");
    }
    function Ow(e, t, a) {
      e.nodeValue = a;
    }
    function Lw(e, t) {
      e.appendChild(t);
    }
    function Aw(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mh(a);
    }
    function Mw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Nw(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Uw(e, t) {
      e.removeChild(t);
    }
    function zw(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ky(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === zh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Uh || s === dp || s === pp) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function Fw(e, t) {
      e.nodeType === Ln ? Ky(e.parentNode, t) : e.nodeType === Wr && Ky(e, t), Du(e);
    }
    function jw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Hw(e) {
      e.nodeValue = "";
    }
    function Pw(e, t) {
      e = e;
      var a = t[vw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function Vw(e, t) {
      e.nodeValue = t;
    }
    function Iw(e) {
      e.nodeType === Wr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Bw(e, t, a) {
      return e.nodeType !== Wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Yw(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function $w(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function eC(e) {
      return e.data === dp;
    }
    function Xy(e) {
      return e.data === pp;
    }
    function Ww(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Qw(e, t) {
      e._reactRetry = t;
    }
    function Fh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Wr || t === Bi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === Uh || a === pp || a === dp)
            break;
          if (a === zh)
            return null;
        }
      }
      return e;
    }
    function vp(e) {
      return Fh(e.nextSibling);
    }
    function qw(e) {
      return Fh(e.firstChild);
    }
    function Gw(e) {
      return Fh(e.firstChild);
    }
    function Kw(e) {
      return Fh(e.nextSibling);
    }
    function Xw(e, t, a, i, u, s, f) {
      mp(s, e), eg(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var g = (s.mode & ht) !== Me;
      return lw(e, t, a, p, i, g, f);
    }
    function Jw(e, t, a, i) {
      return mp(a, e), a.mode & ht, uw(e, t);
    }
    function Zw(e, t) {
      mp(t, e);
    }
    function e_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === zh) {
            if (a === 0)
              return vp(t);
            a--;
          } else (i === Uh || i === pp || i === dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function tC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Uh || i === pp || i === dp) {
            if (a === 0)
              return t;
            a--;
          } else i === zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function t_(e) {
      Du(e);
    }
    function n_(e) {
      Du(e);
    }
    function r_(e) {
      return e !== "head" && e !== "body";
    }
    function a_(e, t, a, i) {
      var u = !0;
      Ah(t.nodeValue, a, i, u);
    }
    function i_(e, t, a, i, u, s) {
      if (t[Nh] !== !0) {
        var f = !0;
        Ah(i.nodeValue, u, s, f);
      }
    }
    function l_(e, t) {
      t.nodeType === Wr ? Vy(e, t) : t.nodeType === Ln || Iy(e, t);
    }
    function u_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Wr ? Vy(a, t) : t.nodeType === Ln || Iy(a, t));
      }
    }
    function o_(e, t, a, i, u) {
      (u || t[Nh] !== !0) && (i.nodeType === Wr ? Vy(a, i) : i.nodeType === Ln || Iy(a, i));
    }
    function s_(e, t, a) {
      By(e, t);
    }
    function c_(e, t) {
      Yy(e, t);
    }
    function f_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && By(i, t);
      }
    }
    function d_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Yy(a, t);
      }
    }
    function p_(e, t, a, i, u, s) {
      (s || t[Nh] !== !0) && By(a, i);
    }
    function v_(e, t, a, i, u) {
      (u || t[Nh] !== !0) && Yy(a, i);
    }
    function h_(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function m_(e) {
      lp(e);
    }
    var Cf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Cf, Jy = "__reactProps$" + Cf, hp = "__reactContainer$" + Cf, Zy = "__reactEvents$" + Cf, y_ = "__reactListeners$" + Cf, g_ = "__reactHandles$" + Cf;
    function S_(e) {
      delete e[Tf], delete e[Jy], delete e[Zy], delete e[y_], delete e[g_];
    }
    function mp(e, t) {
      t[Tf] = e;
    }
    function jh(e, t) {
      t[hp] = e;
    }
    function nC(e) {
      e[hp] = null;
    }
    function yp(e) {
      return !!e[hp];
    }
    function $s(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = tC(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = tC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Tf] || e[hp];
      return t && (t.tag === te || t.tag === be || t.tag === we || t.tag === $) ? t : null;
    }
    function Rf(e) {
      if (e.tag === te || e.tag === be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Hh(e) {
      return e[Jy] || null;
    }
    function eg(e, t) {
      e[Jy] = t;
    }
    function E_(e) {
      var t = e[Zy];
      return t === void 0 && (t = e[Zy] = /* @__PURE__ */ new Set()), t;
    }
    var rC = {}, aC = R.ReactDebugCurrentFrame;
    function Ph(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        aC.setExtraStackFrame(a);
      } else
        aC.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              p = g;
            }
            p && !(p instanceof Error) && (Ph(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Ph(null)), p instanceof Error && !(p.message in rC) && (rC[p.message] = !0, Ph(u), E("Failed %s type: %s", a, p.message), Ph(null));
          }
      }
    }
    var tg = [], Vh;
    Vh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Vh[Uu] && E("Unexpected Fiber popped."), e.current = tg[Uu], tg[Uu] = null, Vh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, tg[Uu] = e.current, Vh[Uu] = a, e.current = t;
    }
    var ng;
    ng = {};
    var li = {};
    Object.freeze(li);
    var zu = Oo(li), Il = Oo(!1), rg = li;
    function wf(e, t, a) {
      return a && Bl(t) ? rg : zu.current;
    }
    function iC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _f(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && iC(e, t, s), s;
      }
    }
    function Ih() {
      return Il.current;
    }
    function Bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Bh(e) {
      ra(Il, e), ra(zu, e);
    }
    function ag(e) {
      ra(Il, e), ra(zu, e);
    }
    function lC(e, t, a) {
      {
        if (zu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(zu, t, e), aa(Il, a, e);
      }
    }
    function uC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            ng[s] || (ng[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return it({}, a, f);
      }
    }
    function Yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return rg = zu.current, aa(zu, a, e), aa(Il, Il.current, e), !0;
      }
    }
    function oC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = uC(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Il, e), ra(zu, e), aa(zu, u, e), aa(Il, a, e);
        } else
          ra(Il, e), aa(Il, a, e);
      }
    }
    function C_(e) {
      {
        if (!hu(e) || e.tag !== re)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case re: {
              var a = t.type;
              if (Bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, $h = 1, Fu = null, ig = !1, lg = !1;
    function sC(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function T_(e) {
      ig = !0, sC(e);
    }
    function cC() {
      ig && Ao();
    }
    function Ao() {
      if (!lg && Fu !== null) {
        lg = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Fu;
          for (zn(Or); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, ig = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), Ed(cs, Ao), s;
        } finally {
          zn(t), lg = !1;
        }
      }
      return null;
    }
    var xf = [], bf = 0, Wh = null, Qh = 0, Li = [], Ai = 0, Ws = null, ju = 1, Hu = "";
    function R_(e) {
      return qs(), (e.flags & Ci) !== Ae;
    }
    function w_(e) {
      return qs(), Qh;
    }
    function __() {
      var e = Hu, t = ju, a = t & ~x_(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      qs(), xf[bf++] = Qh, xf[bf++] = Wh, Wh = e, Qh = t;
    }
    function fC(e, t, a) {
      qs(), Li[Ai++] = ju, Li[Ai++] = Hu, Li[Ai++] = Ws, Ws = e;
      var i = ju, u = Hu, s = qh(i) - 1, f = i & ~(1 << s), p = a + 1, v = qh(t) + s;
      if (v > 30) {
        var g = s - s % 5, S = (1 << g) - 1, D = (f & S).toString(32), b = f >> g, U = s - g, j = qh(t) + U, P = p << U, de = P | b, Fe = D + u;
        ju = 1 << j | de, Hu = Fe;
      } else {
        var Oe = p << s, Rt = Oe | f, gt = u;
        ju = 1 << v | Rt, Hu = gt;
      }
    }
    function ug(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), fC(e, a, i);
      }
    }
    function qh(e) {
      return 32 - Nn(e);
    }
    function x_(e) {
      return 1 << qh(e) - 1;
    }
    function og(e) {
      for (; e === Wh; )
        Wh = xf[--bf], xf[bf] = null, Qh = xf[--bf], xf[bf] = null;
      for (; e === Ws; )
        Ws = Li[--Ai], Li[Ai] = null, Hu = Li[--Ai], Li[Ai] = null, ju = Li[--Ai], Li[Ai] = null;
    }
    function b_() {
      return qs(), Ws !== null ? {
        id: ju,
        overflow: Hu
      } : null;
    }
    function k_(e, t) {
      qs(), Li[Ai++] = ju, Li[Ai++] = Hu, Li[Ai++] = Ws, ju = t.id, Hu = t.overflow, Ws = e;
    }
    function qs() {
      Ur() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, Mi = null, nl = !1, Gs = !1, Mo = null;
    function D_() {
      nl && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function dC() {
      Gs = !0;
    }
    function O_() {
      return Gs;
    }
    function L_(e) {
      var t = e.stateNode.containerInfo;
      return Mi = Gw(t), Nr = e, nl = !0, Mo = null, Gs = !1, !0;
    }
    function A_(e, t, a) {
      return Mi = Kw(t), Nr = e, nl = !0, Mo = null, Gs = !1, a !== null && k_(e, a), !0;
    }
    function pC(e, t) {
      switch (e.tag) {
        case $: {
          l_(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & ht) !== Me;
          o_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case we: {
          var i = e.memoizedState;
          i.dehydrated !== null && u_(i.dehydrated, t);
          break;
        }
      }
    }
    function vC(e, t) {
      pC(e, t);
      var a = z1();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function sg(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, s_(a, i);
                break;
              case be:
                var u = t.pendingProps;
                c_(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, g = t.pendingProps, S = (e.mode & ht) !== Me;
                p_(
                  s,
                  f,
                  p,
                  v,
                  g,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case be: {
                var D = t.pendingProps, b = (e.mode & ht) !== Me;
                v_(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case we: {
            var U = e.memoizedState, j = U.dehydrated;
            if (j !== null) switch (t.tag) {
              case te:
                var P = t.type;
                t.pendingProps, f_(j, P);
                break;
              case be:
                var de = t.pendingProps;
                d_(j, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function hC(e, t) {
      t.flags = t.flags & ~qr | hn, sg(e, t);
    }
    function mC(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = Bw(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, Mi = qw(i), !0) : !1;
        }
        case be: {
          var u = e.pendingProps, s = Yw(t, u);
          return s !== null ? (e.stateNode = s, Nr = e, Mi = null, !0) : !1;
        }
        case we: {
          var f = $w(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: b_(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = F1(f);
            return v.return = e, e.child = v, Nr = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & ht) !== Me && (e.flags & Le) === Ae;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (nl) {
        var t = Mi;
        if (!t) {
          cg(e) && (sg(Nr, e), fg()), hC(Nr, e), nl = !1, Nr = e;
          return;
        }
        var a = t;
        if (!mC(e, t)) {
          cg(e) && (sg(Nr, e), fg()), t = vp(a);
          var i = Nr;
          if (!t || !mC(e, t)) {
            hC(Nr, e), nl = !1, Nr = e;
            return;
          }
          vC(i, a);
        }
      }
    }
    function M_(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Xw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function N_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Jw(t, a, e);
      if (i) {
        var u = Nr;
        if (u !== null)
          switch (u.tag) {
            case $: {
              var s = u.stateNode.containerInfo, f = (u.mode & ht) !== Me;
              a_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case te: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, S = (u.mode & ht) !== Me;
              i_(
                p,
                v,
                g,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function U_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Zw(a, e);
    }
    function z_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return e_(a);
    }
    function yC(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== $ && t.tag !== we; )
        t = t.return;
      Nr = t;
    }
    function Gh(e) {
      if (e !== Nr)
        return !1;
      if (!nl)
        return yC(e), nl = !0, !1;
      if (e.tag !== $ && (e.tag !== te || r_(e.type) && !Qy(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (cg(e))
            gC(e), fg();
          else
            for (; t; )
              vC(e, t), t = vp(t);
      }
      return yC(e), e.tag === we ? Mi = z_(e) : Mi = Nr ? vp(e.stateNode) : null, !0;
    }
    function F_() {
      return nl && Mi !== null;
    }
    function gC(e) {
      for (var t = Mi; t; )
        pC(e, t), t = vp(t);
    }
    function kf() {
      Nr = null, Mi = null, nl = !1, Gs = !1;
    }
    function SC() {
      Mo !== null && (d0(Mo), Mo = null);
    }
    function Ur() {
      return nl;
    }
    function pg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var j_ = R.ReactCurrentBatchConfig, H_ = null;
    function P_() {
      return j_.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var V_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Tp = [], Rp = [], Xs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & qt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & qt && typeof t.UNSAFE_componentWillUpdate == "function" && Rp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(b) {
          e.add(Ke(b) || "Component"), Xs.add(b.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(b) {
          t.add(Ke(b) || "Component"), Xs.add(b.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(b) {
          a.add(Ke(b) || "Component"), Xs.add(b.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(b) {
          i.add(Ke(b) || "Component"), Xs.add(b.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(b) {
          u.add(Ke(b) || "Component"), Xs.add(b.type);
        }), Tp = []);
        var s = /* @__PURE__ */ new Set();
        if (Rp.length > 0 && (Rp.forEach(function(b) {
          s.add(Ke(b) || "Component"), Xs.add(b.type);
        }), Rp = []), t.size > 0) {
          var f = Ks(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var g = Ks(e);
          Ee(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var S = Ks(a);
          Ee(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var D = Ks(u);
          Ee(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Kh = /* @__PURE__ */ new Map(), EC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = V_(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!EC.has(e.type)) {
          var i = Kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Kh.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), EC.add(s.type);
            });
            var u = Ks(i);
            try {
              $t(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], Tp = [], Rp = [], Kh = /* @__PURE__ */ new Map();
      };
    }
    var vg, hg, mg, yg, gg, CC = function(e, t) {
    };
    vg = !1, hg = !1, mg = {}, yg = {}, gg = {}, CC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        yg[a] || (yg[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function I_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qt || I) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== re) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !I_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          mg[u] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== re)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var g = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === g)
            return t.ref;
          var S = function(D) {
            var b = v.refs;
            D === null ? delete b[g] : b[g] = D;
          };
          return S._stringRef = g, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Xh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Jh(e) {
      {
        var t = Ke(e) || "Component";
        if (gg[t])
          return;
        gg[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RC(e) {
      function t(A, V) {
        if (e) {
          var M = A.deletions;
          M === null ? (A.deletions = [V], A.flags |= ka) : M.push(V);
        }
      }
      function a(A, V) {
        if (!e)
          return null;
        for (var M = V; M !== null; )
          t(A, M), M = M.sibling;
        return null;
      }
      function i(A, V) {
        for (var M = /* @__PURE__ */ new Map(), J = V; J !== null; )
          J.key !== null ? M.set(J.key, J) : M.set(J.index, J), J = J.sibling;
        return M;
      }
      function u(A, V) {
        var M = lc(A, V);
        return M.index = 0, M.sibling = null, M;
      }
      function s(A, V, M) {
        if (A.index = M, !e)
          return A.flags |= Ci, V;
        var J = A.alternate;
        if (J !== null) {
          var ye = J.index;
          return ye < V ? (A.flags |= hn, V) : ye;
        } else
          return A.flags |= hn, V;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= hn), A;
      }
      function p(A, V, M, J) {
        if (V === null || V.tag !== be) {
          var ye = pE(M, A.mode, J);
          return ye.return = A, ye;
        } else {
          var ve = u(V, M);
          return ve.return = A, ve;
        }
      }
      function v(A, V, M, J) {
        var ye = M.type;
        if (ye === fi)
          return S(A, V, M.props.children, J, M.key);
        if (V !== null && (V.elementType === ye || // Keep this check inline so it only runs on the false path:
        k0(V, M) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Xe && TC(ye) === V.type)) {
          var ve = u(V, M.props);
          return ve.ref = wp(A, V, M), ve.return = A, ve._debugSource = M._source, ve._debugOwner = M._owner, ve;
        }
        var qe = dE(M, A.mode, J);
        return qe.ref = wp(A, V, M), qe.return = A, qe;
      }
      function g(A, V, M, J) {
        if (V === null || V.tag !== pe || V.stateNode.containerInfo !== M.containerInfo || V.stateNode.implementation !== M.implementation) {
          var ye = vE(M, A.mode, J);
          return ye.return = A, ye;
        } else {
          var ve = u(V, M.children || []);
          return ve.return = A, ve;
        }
      }
      function S(A, V, M, J, ye) {
        if (V === null || V.tag !== $e) {
          var ve = Yo(M, A.mode, J, ye);
          return ve.return = A, ve;
        } else {
          var qe = u(V, M);
          return qe.return = A, qe;
        }
      }
      function D(A, V, M) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var J = pE("" + V, A.mode, M);
          return J.return = A, J;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case xr: {
              var ye = dE(V, A.mode, M);
              return ye.ref = wp(A, null, V), ye.return = A, ye;
            }
            case nr: {
              var ve = vE(V, A.mode, M);
              return ve.return = A, ve;
            }
            case Xe: {
              var qe = V._payload, Ze = V._init;
              return D(A, Ze(qe), M);
            }
          }
          if (ct(V) || tt(V)) {
            var Kt = Yo(V, A.mode, M, null);
            return Kt.return = A, Kt;
          }
          Xh(A, V);
        }
        return typeof V == "function" && Jh(A), null;
      }
      function b(A, V, M, J) {
        var ye = V !== null ? V.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number")
          return ye !== null ? null : p(A, V, "" + M, J);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case xr:
              return M.key === ye ? v(A, V, M, J) : null;
            case nr:
              return M.key === ye ? g(A, V, M, J) : null;
            case Xe: {
              var ve = M._payload, qe = M._init;
              return b(A, V, qe(ve), J);
            }
          }
          if (ct(M) || tt(M))
            return ye !== null ? null : S(A, V, M, J, null);
          Xh(A, M);
        }
        return typeof M == "function" && Jh(A), null;
      }
      function U(A, V, M, J, ye) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ve = A.get(M) || null;
          return p(V, ve, "" + J, ye);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case xr: {
              var qe = A.get(J.key === null ? M : J.key) || null;
              return v(V, qe, J, ye);
            }
            case nr: {
              var Ze = A.get(J.key === null ? M : J.key) || null;
              return g(V, Ze, J, ye);
            }
            case Xe:
              var Kt = J._payload, Nt = J._init;
              return U(A, V, M, Nt(Kt), ye);
          }
          if (ct(J) || tt(J)) {
            var Qn = A.get(M) || null;
            return S(V, Qn, J, ye, null);
          }
          Xh(V, J);
        }
        return typeof J == "function" && Jh(V), null;
      }
      function j(A, V, M) {
        {
          if (typeof A != "object" || A === null)
            return V;
          switch (A.$$typeof) {
            case xr:
            case nr:
              CC(A, M);
              var J = A.key;
              if (typeof J != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(J);
                break;
              }
              if (!V.has(J)) {
                V.add(J);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case Xe:
              var ye = A._payload, ve = A._init;
              j(ve(ye), V, M);
              break;
          }
        }
        return V;
      }
      function P(A, V, M, J) {
        for (var ye = null, ve = 0; ve < M.length; ve++) {
          var qe = M[ve];
          ye = j(qe, ye, A);
        }
        for (var Ze = null, Kt = null, Nt = V, Qn = 0, Ut = 0, Hn = null; Nt !== null && Ut < M.length; Ut++) {
          Nt.index > Ut ? (Hn = Nt, Nt = null) : Hn = Nt.sibling;
          var la = b(A, Nt, M[Ut], J);
          if (la === null) {
            Nt === null && (Nt = Hn);
            break;
          }
          e && Nt && la.alternate === null && t(A, Nt), Qn = s(la, Qn, Ut), Kt === null ? Ze = la : Kt.sibling = la, Kt = la, Nt = Hn;
        }
        if (Ut === M.length) {
          if (a(A, Nt), Ur()) {
            var Ir = Ut;
            Qs(A, Ir);
          }
          return Ze;
        }
        if (Nt === null) {
          for (; Ut < M.length; Ut++) {
            var oi = D(A, M[Ut], J);
            oi !== null && (Qn = s(oi, Qn, Ut), Kt === null ? Ze = oi : Kt.sibling = oi, Kt = oi);
          }
          if (Ur()) {
            var Ca = Ut;
            Qs(A, Ca);
          }
          return Ze;
        }
        for (var Ta = i(A, Nt); Ut < M.length; Ut++) {
          var ua = U(Ta, A, Ut, M[Ut], J);
          ua !== null && (e && ua.alternate !== null && Ta.delete(ua.key === null ? Ut : ua.key), Qn = s(ua, Qn, Ut), Kt === null ? Ze = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ta.forEach(function(Qf) {
          return t(A, Qf);
        }), Ur()) {
          var Wu = Ut;
          Qs(A, Wu);
        }
        return Ze;
      }
      function de(A, V, M, J) {
        var ye = tt(M);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          M[Symbol.toStringTag] === "Generator" && (hg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), M.entries === ye && (vg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var ve = ye.call(M);
          if (ve)
            for (var qe = null, Ze = ve.next(); !Ze.done; Ze = ve.next()) {
              var Kt = Ze.value;
              qe = j(Kt, qe, A);
            }
        }
        var Nt = ye.call(M);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Ut = null, Hn = V, la = 0, Ir = 0, oi = null, Ca = Nt.next(); Hn !== null && !Ca.done; Ir++, Ca = Nt.next()) {
          Hn.index > Ir ? (oi = Hn, Hn = null) : oi = Hn.sibling;
          var Ta = b(A, Hn, Ca.value, J);
          if (Ta === null) {
            Hn === null && (Hn = oi);
            break;
          }
          e && Hn && Ta.alternate === null && t(A, Hn), la = s(Ta, la, Ir), Ut === null ? Qn = Ta : Ut.sibling = Ta, Ut = Ta, Hn = oi;
        }
        if (Ca.done) {
          if (a(A, Hn), Ur()) {
            var ua = Ir;
            Qs(A, ua);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !Ca.done; Ir++, Ca = Nt.next()) {
            var Wu = D(A, Ca.value, J);
            Wu !== null && (la = s(Wu, la, Ir), Ut === null ? Qn = Wu : Ut.sibling = Wu, Ut = Wu);
          }
          if (Ur()) {
            var Qf = Ir;
            Qs(A, Qf);
          }
          return Qn;
        }
        for (var nv = i(A, Hn); !Ca.done; Ir++, Ca = Nt.next()) {
          var Xl = U(nv, A, Ir, Ca.value, J);
          Xl !== null && (e && Xl.alternate !== null && nv.delete(Xl.key === null ? Ir : Xl.key), la = s(Xl, la, Ir), Ut === null ? Qn = Xl : Ut.sibling = Xl, Ut = Xl);
        }
        if (e && nv.forEach(function(vk) {
          return t(A, vk);
        }), Ur()) {
          var pk = Ir;
          Qs(A, pk);
        }
        return Qn;
      }
      function Fe(A, V, M, J) {
        if (V !== null && V.tag === be) {
          a(A, V.sibling);
          var ye = u(V, M);
          return ye.return = A, ye;
        }
        a(A, V);
        var ve = pE(M, A.mode, J);
        return ve.return = A, ve;
      }
      function Oe(A, V, M, J) {
        for (var ye = M.key, ve = V; ve !== null; ) {
          if (ve.key === ye) {
            var qe = M.type;
            if (qe === fi) {
              if (ve.tag === $e) {
                a(A, ve.sibling);
                var Ze = u(ve, M.props.children);
                return Ze.return = A, Ze._debugSource = M._source, Ze._debugOwner = M._owner, Ze;
              }
            } else if (ve.elementType === qe || // Keep this check inline so it only runs on the false path:
            k0(ve, M) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof qe == "object" && qe !== null && qe.$$typeof === Xe && TC(qe) === ve.type) {
              a(A, ve.sibling);
              var Kt = u(ve, M.props);
              return Kt.ref = wp(A, ve, M), Kt.return = A, Kt._debugSource = M._source, Kt._debugOwner = M._owner, Kt;
            }
            a(A, ve);
            break;
          } else
            t(A, ve);
          ve = ve.sibling;
        }
        if (M.type === fi) {
          var Nt = Yo(M.props.children, A.mode, J, M.key);
          return Nt.return = A, Nt;
        } else {
          var Qn = dE(M, A.mode, J);
          return Qn.ref = wp(A, V, M), Qn.return = A, Qn;
        }
      }
      function Rt(A, V, M, J) {
        for (var ye = M.key, ve = V; ve !== null; ) {
          if (ve.key === ye)
            if (ve.tag === pe && ve.stateNode.containerInfo === M.containerInfo && ve.stateNode.implementation === M.implementation) {
              a(A, ve.sibling);
              var qe = u(ve, M.children || []);
              return qe.return = A, qe;
            } else {
              a(A, ve);
              break;
            }
          else
            t(A, ve);
          ve = ve.sibling;
        }
        var Ze = vE(M, A.mode, J);
        return Ze.return = A, Ze;
      }
      function gt(A, V, M, J) {
        var ye = typeof M == "object" && M !== null && M.type === fi && M.key === null;
        if (ye && (M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case xr:
              return f(Oe(A, V, M, J));
            case nr:
              return f(Rt(A, V, M, J));
            case Xe:
              var ve = M._payload, qe = M._init;
              return gt(A, V, qe(ve), J);
          }
          if (ct(M))
            return P(A, V, M, J);
          if (tt(M))
            return de(A, V, M, J);
          Xh(A, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" ? f(Fe(A, V, "" + M, J)) : (typeof M == "function" && Jh(A), a(A, V));
      }
      return gt;
    }
    var Df = RC(!0), wC = RC(!1);
    function B_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Y_(e, t) {
      for (var a = e.child; a !== null; )
        L1(a, t), a = a.sibling;
    }
    var Sg = Oo(null), Eg;
    Eg = {};
    var Zh = null, Of = null, Cg = null, em = !1;
    function tm() {
      Zh = null, Of = null, Cg = null, em = !1;
    }
    function _C() {
      em = !0;
    }
    function xC() {
      em = !1;
    }
    function bC(e, t, a) {
      aa(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function Tg(e, t) {
      var a = Sg.current;
      ra(Sg, t), e._currentValue = a;
    }
    function Rg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $_(e, t, a) {
      W_(e, t, a);
    }
    function W_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === re) {
                var p = ws(a), v = Pu(Xt, p);
                v.tag = rm;
                var g = i.updateQueue;
                if (g !== null) {
                  var S = g.shared, D = S.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), S.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = nt(b.lanes, a)), Rg(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = nt(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = nt(j.lanes, a)), Rg(U, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Lf(e, t) {
      Zh = e, Of = null, Cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function er(e) {
      em && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Of === null) {
          if (Zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Of = a, Zh.dependencies = {
            lanes: W,
            firstContext: a
          };
        } else
          Of = Of.next = a;
      }
      return t;
    }
    var Js = null;
    function wg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function Q_() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function kC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, nm(e, i);
    }
    function q_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function G_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, nm(e, i);
    }
    function ja(e, t) {
      return nm(e, t);
    }
    var K_ = nm;
    function nm(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (hn | qr)) !== Ae && w0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (hn | qr)) !== Ae && w0(e), i = u, u = u.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var DC = 0, OC = 1, rm = 2, _g = 3, am = !1, xg, im;
    xg = !1, im = null;
    function bg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: W
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function LC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: DC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (im === u && !xg && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), xg = !0), qb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, K_(e, a);
      } else
        return G_(e, u, t, a);
    }
    function lm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Fd(a)) {
          var s = u.lanes;
          s = Hd(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, nf(e, f);
        }
      }
    }
    function kg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var g = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = g : (f.next = g, f = g), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function X_(e, t, a, i, u, s) {
      switch (a.tag) {
        case OC: {
          var f = a.payload;
          if (typeof f == "function") {
            _C();
            var p = f.call(s, i, u);
            {
              if (e.mode & qt) {
                mn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              xC();
            }
            return p;
          }
          return f;
        }
        case _g:
          e.flags = e.flags & ~Kn | Le;
        // Intentional fallthrough
        case DC: {
          var v = a.payload, g;
          if (typeof v == "function") {
            _C(), g = v.call(s, i, u);
            {
              if (e.mode & qt) {
                mn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              xC();
            }
          } else
            g = v;
          return g == null ? i : it({}, i, g);
        }
        case rm:
          return am = !0, i;
      }
      return i;
    }
    function um(e, t, a, i) {
      var u = e.updateQueue;
      am = !1, im = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, g = v.next;
        v.next = null, f === null ? s = g : f.next = g, f = v;
        var S = e.alternate;
        if (S !== null) {
          var D = S.updateQueue, b = D.lastBaseUpdate;
          b !== f && (b === null ? D.firstBaseUpdate = g : b.next = g, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, j = W, P = null, de = null, Fe = null, Oe = s;
        do {
          var Rt = Oe.lane, gt = Oe.eventTime;
          if (ku(i, Rt)) {
            if (Fe !== null) {
              var V = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: Oe.tag,
                payload: Oe.payload,
                callback: Oe.callback,
                next: null
              };
              Fe = Fe.next = V;
            }
            U = X_(e, u, Oe, U, t, a);
            var M = Oe.callback;
            if (M !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== kt) {
              e.flags |= rn;
              var J = u.effects;
              J === null ? u.effects = [Oe] : J.push(Oe);
            }
          } else {
            var A = {
              eventTime: gt,
              lane: Rt,
              tag: Oe.tag,
              payload: Oe.payload,
              callback: Oe.callback,
              next: null
            };
            Fe === null ? (de = Fe = A, P = U) : Fe = Fe.next = A, j = nt(j, Rt);
          }
          if (Oe = Oe.next, Oe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, ve = ye.next;
            ye.next = null, Oe = ve, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Fe === null && (P = U), u.baseState = P, u.firstBaseUpdate = de, u.lastBaseUpdate = Fe;
        var qe = u.shared.interleaved;
        if (qe !== null) {
          var Ze = qe;
          do
            j = nt(j, Ze.lane), Ze = Ze.next;
          while (Ze !== qe);
        } else s === null && (u.shared.lanes = W);
        Xp(j), e.lanes = j, e.memoizedState = U;
      }
      im = null;
    }
    function J_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function AC() {
      am = !1;
    }
    function om() {
      return am;
    }
    function MC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, J_(f, a));
        }
    }
    var _p = {}, Uo = Oo(_p), xp = Oo(_p), sm = Oo(_p);
    function cm(e) {
      if (e === _p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function NC() {
      var e = cm(sm.current);
      return e;
    }
    function Dg(e, t) {
      aa(sm, t, e), aa(xp, e, e), aa(Uo, _p, e);
      var a = hw(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Af(e) {
      ra(Uo, e), ra(xp, e), ra(sm, e);
    }
    function Og() {
      var e = cm(Uo.current);
      return e;
    }
    function UC(e) {
      cm(sm.current);
      var t = cm(Uo.current), a = mw(t, e.type);
      t !== a && (aa(xp, e, e), aa(Uo, a, e));
    }
    function Lg(e) {
      xp.current === e && (ra(Uo, e), ra(xp, e));
    }
    var Z_ = 0, zC = 1, FC = 1, bp = 2, al = Oo(Z_);
    function Ag(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & zC;
    }
    function Mg(e, t) {
      return e & zC | t;
    }
    function ex(e, t) {
      return e | t;
    }
    function zo(e, t) {
      aa(al, t, e);
    }
    function Nf(e) {
      ra(al, e);
    }
    function tx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function fm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === we) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || eC(i) || Xy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Le) !== Ae;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), sr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), cr = (
      /*    */
      4
    ), zr = (
      /*   */
      8
    ), Ng = [];
    function Ug() {
      for (var e = 0; e < Ng.length; e++) {
        var t = Ng[e];
        t._workInProgressVersionPrimary = null;
      }
      Ng.length = 0;
    }
    function nx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = R.ReactCurrentDispatcher, kp = R.ReactCurrentBatchConfig, zg, Uf;
    zg = /* @__PURE__ */ new Set();
    var Zs = W, Gt = null, fr = null, dr = null, dm = !1, Dp = !1, Op = 0, rx = 0, ax = 25, B = null, Ni = null, Fo = -1, Fg = !1;
    function Pt() {
      {
        var e = B;
        Ni === null ? Ni = [e] : Ni.push(e);
      }
    }
    function ue() {
      {
        var e = B;
        Ni !== null && (Fo++, Ni[Fo] !== e && ix(e));
      }
    }
    function zf(e) {
      e != null && !ct(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function ix(e) {
      {
        var t = Ke(Gt);
        if (!zg.has(t) && (zg.add(t), Ni !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = Ni[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!K(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Zs = s, Gt = t, Ni = e !== null ? e._debugHookTypes : null, Fo = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = W, e !== null && e.memoizedState !== null ? me.current = iT : Ni !== null ? me.current = aT : me.current = rT;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= ax)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, fr = null, dr = null, t.updateQueue = null, Fo = -1, me.current = lT, f = a(i, u);
        } while (Dp);
      }
      me.current = _m, t._debugHookTypes = Ni;
      var v = fr !== null && fr.next !== null;
      if (Zs = W, Gt = null, fr = null, dr = null, B = null, Ni = null, Fo = -1, e !== null && (e.flags & Mn) !== (t.flags & Mn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ht) !== Me && E("Internal React error: Expected static flag was missing. Please notify the React team."), dm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function jC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & At) !== Me ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function HC() {
      if (me.current = _m, dm) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dm = !1;
      }
      Zs = W, Gt = null, fr = null, dr = null, Ni = null, Fo = -1, B = null, JC = !1, Dp = !1, Op = 0;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return dr === null ? Gt.memoizedState = dr = e : dr = dr.next = e, dr;
    }
    function Ui() {
      var e;
      if (fr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = fr.next;
      var a;
      if (dr === null ? a = Gt.memoizedState : a = dr.next, a !== null)
        dr = a, a = dr.next, fr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        fr = e;
        var i = {
          memoizedState: fr.memoizedState,
          baseState: fr.baseState,
          baseQueue: fr.baseQueue,
          queue: fr.queue,
          next: null
        };
        dr === null ? Gt.memoizedState = dr = i : dr = dr.next = i;
      }
      return dr;
    }
    function PC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = $l(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = sx.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = fr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, D = s.baseState, b = null, U = null, j = null, P = S;
        do {
          var de = P.lane;
          if (ku(Zs, de)) {
            if (j !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              j = j.next = Oe;
            }
            if (P.hasEagerState)
              D = P.eagerState;
            else {
              var Rt = P.action;
              D = e(D, Rt);
            }
          } else {
            var Fe = {
              lane: de,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            j === null ? (U = j = Fe, b = D) : j = j.next = Fe, Gt.lanes = nt(Gt.lanes, de), Xp(de);
          }
          P = P.next;
        } while (P !== null && P !== S);
        j === null ? b = D : j.next = U, K(D, i.memoizedState) || Hp(), i.memoizedState = D, i.baseState = b, i.baseQueue = j, u.lastRenderedState = D;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var A = gt;
        do {
          var V = A.lane;
          Gt.lanes = nt(Gt.lanes, V), Xp(V), A = A.next;
        } while (A !== gt);
      } else f === null && (u.lanes = W);
      var M = u.dispatch;
      return [i.memoizedState, M];
    }
    function Ig(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, g = v;
        do {
          var S = g.action;
          p = e(p, S), g = g.next;
        } while (g !== v);
        K(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function uD(e, t, a) {
    }
    function oD(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = Gt, u = $l(), s, f = Ur();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Uf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      } else {
        if (s = t(), !Uf) {
          var p = t();
          K(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
        }
        var v = Ym();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(v, Zs) || VC(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, ym(BC.bind(null, i, g, e), [e]), i.flags |= Qr, Lp(sr | zr, IC.bind(null, i, g, s, t), void 0, null), s;
    }
    function pm(e, t, a) {
      var i = Gt, u = Ui(), s = t();
      if (!Uf) {
        var f = t();
        K(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      }
      var p = u.memoizedState, v = !K(p, s);
      v && (u.memoizedState = s, Hp());
      var g = u.queue;
      if (Mp(BC.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      dr !== null && dr.memoizedState.tag & sr) {
        i.flags |= Qr, Lp(sr | zr, IC.bind(null, i, g, s, t), void 0, null);
        var S = Ym();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(S, Zs) || VC(i, t, s);
      }
      return s;
    }
    function VC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = PC(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function IC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, YC(t) && $C(e);
    }
    function BC(e, t, a) {
      var i = function() {
        YC(t) && $C(e);
      };
      return a(i);
    }
    function YC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !K(a, i);
      } catch {
        return !0;
      }
    }
    function $C(e) {
      var t = ja(e, Ye);
      t !== null && mr(t, e, Ye, Xt);
    }
    function vm(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: W,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = cx.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Vg(Hg);
    }
    function $g(e) {
      return Ig(Hg);
    }
    function Lp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = PC(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Wg(e) {
      var t = $l();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function hm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function Ap(e, t, a, i) {
      var u = $l(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Lp(sr | t, a, void 0, s);
    }
    function mm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (fr !== null) {
        var p = fr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            u.memoizedState = Lp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Lp(sr | t, a, f, s);
    }
    function ym(e, t) {
      return (Gt.mode & At) !== Me ? Ap(Ti | Qr | bc, zr, e, t) : Ap(Qr | bc, zr, e, t);
    }
    function Mp(e, t) {
      return mm(Qr, zr, e, t);
    }
    function Qg(e, t) {
      return Ap(Et, Yl, e, t);
    }
    function gm(e, t) {
      return mm(Et, Yl, e, t);
    }
    function qg(e, t) {
      var a = Et;
      return a |= Wi, (Gt.mode & At) !== Me && (a |= xl), Ap(a, cr, e, t);
    }
    function Sm(e, t) {
      return mm(Et, cr, e, t);
    }
    function WC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Gg(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Wi, (Gt.mode & At) !== Me && (u |= xl), Ap(u, cr, WC.bind(null, t, e), i);
    }
    function Em(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return mm(Et, cr, WC.bind(null, t, e), i);
    }
    function lx(e, t) {
    }
    var Cm = lx;
    function Kg(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Tm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Xg(e, t) {
      var a = $l(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Rm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function QC(e) {
      var t = Ui(), a = fr, i = a.memoizedState;
      return GC(t, i, e);
    }
    function qC(e) {
      var t = Ui();
      if (fr === null)
        return t.memoizedState = e, e;
      var a = fr.memoizedState;
      return GC(t, a, e);
    }
    function GC(e, t, a) {
      var i = !Ud(Zs);
      if (i) {
        if (!K(a, t)) {
          var u = jd();
          Gt.lanes = nt(Gt.lanes, u), Xp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function ux(e, t, a) {
      var i = Ua();
      zn(eh(i, xi)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (zn(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Zg() {
      var e = vm(!1), t = e[0], a = e[1], i = ux.bind(null, a), u = $l();
      return u.memoizedState = i, [t, i];
    }
    function KC() {
      var e = Yg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function XC() {
      var e = $g(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var JC = !1;
    function ox() {
      return JC;
    }
    function eS() {
      var e = $l(), t = Ym(), a = t.identifierPrefix, i;
      if (Ur()) {
        var u = __();
        i = ":" + a + "R" + u;
        var s = Op++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = rx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function wm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function sx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZC(e))
        eT(t, u);
      else {
        var s = kC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          mr(s, e, i, f), tT(s, t, i);
        }
      }
      nT(e, i);
    }
    function cx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZC(e))
        eT(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === W && (s === null || s.lanes === W)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = il;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, K(g, v)) {
                q_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var S = kC(e, t, u, i);
        if (S !== null) {
          var D = Ea();
          mr(S, e, i, D), tT(S, t, i);
        }
      }
      nT(e, i);
    }
    function ZC(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function eT(e, t) {
      Dp = dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function tT(e, t, a) {
      if (Fd(a)) {
        var i = t.lanes;
        i = Hd(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, nf(e, u);
      }
    }
    function nT(e, t, a) {
      hs(e, t);
    }
    var _m = {
      readContext: er,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: ne
    }, rT = null, aT = null, iT = null, lT = null, Wl = null, il = null, xm = null;
    {
      var tS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      rT = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Pt(), zf(t), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Pt(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Pt(), zf(t), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Pt(), zf(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Pt(), zf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Pt(), zf(t), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Pt(), zf(t);
          var a = me.current;
          me.current = Wl;
          try {
            return Xg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Pt();
          var i = me.current;
          me.current = Wl;
          try {
            return Pg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Pt(), Wg(e);
        },
        useState: function(e) {
          B = "useState", Pt();
          var t = me.current;
          me.current = Wl;
          try {
            return vm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Pt(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Pt(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Pt(), Bg(e, t, a);
        },
        useId: function() {
          return B = "useId", Pt(), eS();
        },
        unstable_isNewReconciler: ne
      }, aT = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ue(), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ue(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ue(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ue(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ue(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ue(), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ue();
          var a = me.current;
          me.current = Wl;
          try {
            return Xg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ue();
          var i = me.current;
          me.current = Wl;
          try {
            return Pg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ue(), Wg(e);
        },
        useState: function(e) {
          B = "useState", ue();
          var t = me.current;
          me.current = Wl;
          try {
            return vm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ue(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", ue(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ue(), Bg(e, t, a);
        },
        useId: function() {
          return B = "useId", ue(), eS();
        },
        unstable_isNewReconciler: ne
      }, iT = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ue(), Tm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ue(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ue(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ue(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ue(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ue(), Sm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ue();
          var a = me.current;
          me.current = il;
          try {
            return Rm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ue();
          var i = me.current;
          me.current = il;
          try {
            return Vg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ue(), hm();
        },
        useState: function(e) {
          B = "useState", ue();
          var t = me.current;
          me.current = il;
          try {
            return Yg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ue(), Cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ue(), QC(e);
        },
        useTransition: function() {
          return B = "useTransition", ue(), KC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ue(), pm(e, t);
        },
        useId: function() {
          return B = "useId", ue(), wm();
        },
        unstable_isNewReconciler: ne
      }, lT = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ue(), Tm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ue(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ue(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ue(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ue(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ue(), Sm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ue();
          var a = me.current;
          me.current = xm;
          try {
            return Rm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ue();
          var i = me.current;
          me.current = xm;
          try {
            return Ig(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ue(), hm();
        },
        useState: function(e) {
          B = "useState", ue();
          var t = me.current;
          me.current = xm;
          try {
            return $g(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ue(), Cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ue(), qC(e);
        },
        useTransition: function() {
          return B = "useTransition", ue(), XC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ue(), pm(e, t);
        },
        useId: function() {
          return B = "useId", ue(), wm();
        },
        unstable_isNewReconciler: ne
      }, Wl = {
        readContext: function(e) {
          return tS(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), Pt(), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), Pt(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), Pt(), ym(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), Pt(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), Pt(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), Pt(), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), Pt();
          var a = me.current;
          me.current = Wl;
          try {
            return Xg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), Pt();
          var i = me.current;
          me.current = Wl;
          try {
            return Pg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), Pt(), Wg(e);
        },
        useState: function(e) {
          B = "useState", Je(), Pt();
          var t = me.current;
          me.current = Wl;
          try {
            return vm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), Pt(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), Pt(), Zg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), Pt(), Bg(e, t, a);
        },
        useId: function() {
          return B = "useId", Je(), Pt(), eS();
        },
        unstable_isNewReconciler: ne
      }, il = {
        readContext: function(e) {
          return tS(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), ue(), Tm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), ue(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), ue(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), ue(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), ue(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), ue(), Sm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), ue();
          var a = me.current;
          me.current = il;
          try {
            return Rm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), ue();
          var i = me.current;
          me.current = il;
          try {
            return Vg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), ue(), hm();
        },
        useState: function(e) {
          B = "useState", Je(), ue();
          var t = me.current;
          me.current = il;
          try {
            return Yg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), ue(), Cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), ue(), QC(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), ue(), KC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), ue(), pm(e, t);
        },
        useId: function() {
          return B = "useId", Je(), ue(), wm();
        },
        unstable_isNewReconciler: ne
      }, xm = {
        readContext: function(e) {
          return tS(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), ue(), Tm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), ue(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), ue(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), ue(), Em(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), ue(), gm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), ue(), Sm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), ue();
          var a = me.current;
          me.current = il;
          try {
            return Rm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), ue();
          var i = me.current;
          me.current = il;
          try {
            return Ig(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), ue(), hm();
        },
        useState: function(e) {
          B = "useState", Je(), ue();
          var t = me.current;
          me.current = il;
          try {
            return $g(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), ue(), Cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), ue(), qC(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), ue(), XC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), ue(), pm(e, t);
        },
        useId: function() {
          return B = "useId", Je(), ue(), wm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var jo = C.unstable_now, uT = 0, bm = -1, Np = -1, km = -1, nS = !1, Dm = !1;
    function oT() {
      return nS;
    }
    function fx() {
      Dm = !0;
    }
    function dx() {
      nS = !1, Dm = !1;
    }
    function px() {
      nS = Dm, Dm = !1;
    }
    function sT() {
      return uT;
    }
    function cT() {
      uT = jo();
    }
    function rS(e) {
      Np = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function fT(e) {
      Np = -1;
    }
    function Om(e, t) {
      if (Np >= 0) {
        var a = jo() - Np;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Np = -1;
      }
    }
    function Ql(e) {
      if (bm >= 0) {
        var t = jo() - bm;
        bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ft:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aS(e) {
      if (km >= 0) {
        var t = jo() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ft:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      bm = jo();
    }
    function iS() {
      km = jo();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = it({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var uS = {}, oS, sS, cS, fS, dS, dT, Lm, pS, vS, hS, Up;
    {
      oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), Up = /* @__PURE__ */ new Set();
      var pT = /* @__PURE__ */ new Set();
      Lm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          pT.has(a) || (pT.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, dT = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          dS.has(a) || (dS.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(uS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(uS);
    }
    function mS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & qt) {
          mn(!0);
          try {
            s = a(i, u);
          } finally {
            mn(!1);
          }
        }
        dT(t, s);
      }
      var f = s == null ? u : it({}, u, s);
      if (e.memoizedState = f, e.lanes === W) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: jv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Io(i), f = Pu(u, s);
        f.payload = t, a != null && (Lm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (mr(p, i, s, u), lm(p, i, s)), hs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Io(i), f = Pu(u, s);
        f.tag = OC, f.payload = t, a != null && (Lm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (mr(p, i, s, u), lm(p, i, s)), hs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Io(a), s = Pu(i, u);
        s.tag = rm, t != null && (Lm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (mr(f, a, u, i), lm(f, a, u)), Nc(a, u);
      }
    };
    function vT(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qt) {
            mn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              mn(!1);
            }
          }
          v === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Te(a, i) || !Te(u, s) : !0;
    }
    function vx(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Up.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === Me && (Up.add(t), E(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Up.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qt) === Me && (Up.add(t), E(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && E("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function hT(e, t) {
      t.updater = yS, e.stateNode = t, vu(t, e), t._reactInternalInstance = uS;
    }
    function mT(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === _ && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = er(f);
      else {
        u = wf(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? _f(e, u) : li;
      }
      var S = new t(a, s);
      if (e.mode & qt) {
        mn(!0);
        try {
          S = new t(a, s);
        } finally {
          mn(!1);
        }
      }
      var D = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      hT(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var b = wt(t) || "Component";
          sS.has(b) || (sS.add(b), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, S.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, P = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), U !== null || j !== null || P !== null) {
            var de = wt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(de) || (fS.add(de), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Fe, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && iC(e, u, s), S;
    }
    function hx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function yT(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          oS.has(s) || (oS.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, i) {
      vx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, bg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = er(s);
      else {
        var f = wf(e, t, !0);
        u.context = _f(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          pS.has(p) || (pS.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (hx(e, u), um(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = Et;
        g |= Wi, (e.mode & At) !== Me && (g |= xl), e.flags |= g;
      }
    }
    function mx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = er(p);
      else {
        var g = wf(e, t, !0);
        v = _f(e, g);
      }
      var S = t.getDerivedStateFromProps, D = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && yT(e, u, a, v), AC();
      var b = e.memoizedState, U = u.state = b;
      if (um(e, a, u, i), U = e.memoizedState, s === a && b === U && !Ih() && !om()) {
        if (typeof u.componentDidMount == "function") {
          var j = Et;
          j |= Wi, (e.mode & At) !== Me && (j |= xl), e.flags |= j;
        }
        return !1;
      }
      typeof S == "function" && (mS(e, t, S, a), U = e.memoizedState);
      var P = om() || vT(e, t, s, a, b, U, v);
      if (P) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = Et;
          de |= Wi, (e.mode & At) !== Me && (de |= xl), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Fe = Et;
          Fe |= Wi, (e.mode & At) !== Me && (Fe |= xl), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, P;
    }
    function yx(e, t, a, i, u) {
      var s = t.stateNode;
      LC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, S = a.contextType, D = li;
      if (typeof S == "object" && S !== null)
        D = er(S);
      else {
        var b = wf(t, a, !0);
        D = _f(t, b);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && yT(t, s, i, D), AC();
      var P = t.memoizedState, de = s.state = P;
      if (um(t, i, s, u), de = t.memoizedState, f === v && P === de && !Ih() && !om() && !ke)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Yn), !1;
      typeof U == "function" && (mS(t, a, U, i), de = t.memoizedState);
      var Fe = om() || vT(t, a, p, i, P, de, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return Fe ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Yn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Yn), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = D, Fe;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
        digest: null
      };
    }
    function SS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function gx(e, t) {
      return !0;
    }
    function ES(e, t) {
      try {
        var a = gx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === re)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === $)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = Ke(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var D = v + `
` + f + `

` + ("" + g);
        console.error(D);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var Sx = typeof WeakMap == "function" ? WeakMap : Map;
    function gT(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = _g, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        f1(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = _g;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          D0(e), ES(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        D0(e), ES(e, t), typeof u != "function" && s1(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (Zr(e.lanes, Ye) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function ST(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Sx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = d1.bind(null, e, t, a);
        Xr && Jp(e, a), t.then(s, s);
      }
    }
    function Ex(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Cx(e, t) {
      var a = e.tag;
      if ((e.mode & ht) === Me && (a === ee || a === We || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function ET(e) {
      var t = e;
      do {
        if (t.tag === we && tx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function CT(e, t, a, i, u) {
      if ((e.mode & ht) === Me) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= Le, a.flags |= xc, a.flags &= -52805, a.tag === re) {
            var s = a.alternate;
            if (s === null)
              a.tag = jt;
            else {
              var f = Pu(Xt, Ye);
              f.tag = rm, No(a, f, Ye);
            }
          }
          a.lanes = nt(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function Tx(e, t, a, i, u) {
      if (a.flags |= ss, Xr && Jp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Cx(a), Ur() && a.mode & ht && dC();
        var f = ET(t);
        if (f !== null) {
          f.flags &= ~Er, CT(f, t, a, e, u), f.mode & ht && ST(e, s, u), Ex(f, e, s);
          return;
        } else {
          if (!Wv(u)) {
            ST(e, s, u), eE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ur() && a.mode & ht) {
        dC();
        var v = ET(t);
        if (v !== null) {
          (v.flags & Kn) === Ae && (v.flags |= Er), CT(v, t, a, e, u), pg(ec(i, a));
          return;
        }
      }
      i = ec(i, a), t1(i);
      var g = t;
      do {
        switch (g.tag) {
          case $: {
            var S = i;
            g.flags |= Kn;
            var D = ws(u);
            g.lanes = nt(g.lanes, D);
            var b = gT(g, S, D);
            kg(g, b);
            return;
          }
          case re:
            var U = i, j = g.type, P = g.stateNode;
            if ((g.flags & Le) === Ae && (typeof j.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !E0(P))) {
              g.flags |= Kn;
              var de = ws(u);
              g.lanes = nt(g.lanes, de);
              var Fe = CS(g, U, de);
              kg(g, Fe);
              return;
            }
            break;
        }
        g = g.return;
      } while (g !== null);
    }
    function Rx() {
      return null;
    }
    var zp = R.ReactCurrentOwner, ul = !1, TS, Fp, RS, wS, _S, tc, xS, Am, jp;
    TS = {}, Fp = {}, RS = {}, wS = {}, _S = {}, tc = !1, xS = {}, Am = {}, jp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = wC(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function wx(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function TT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      Lf(t, u), va(t);
      {
        if (zp.current = t, Bn(!0), v = Ff(e, t, f, i, p, u), g = jf(), t.mode & qt) {
          mn(!0);
          try {
            v = Ff(e, t, f, i, p, u), g = jf();
          } finally {
            mn(!1);
          }
        }
        Bn(!1);
      }
      return ha(), e !== null && !ul ? (jC(e, t, u), Vu(e, t, u)) : (Ur() && g && ug(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function RT(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (D1(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Pe, t.type = f, DS(t, s), wT(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            jp[v] || (E("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), jp[v] = !0);
          }
        }
        var g = fE(a.type, null, i, t, t.mode, u);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var S = a.type, D = S.propTypes;
        D && tl(
          D,
          i,
          // Resolved props
          "prop",
          wt(S)
        );
      }
      var b = e.child, U = US(e, u);
      if (!U) {
        var j = b.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Te, P(j, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var de = lc(b, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function wT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && tl(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (Te(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = S, US(e, u))
            (e.flags & xc) !== Ae && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return bS(e, t, a, i, u);
    }
    function _T(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || oe)
        if ((t.mode & ht) === Me) {
          var f = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, $m(t, a);
        } else if (Zr(a, Jr)) {
          var D = {
            baseLanes: W,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var b = s !== null ? s.baseLanes : a;
          $m(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = nt(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, $m(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = nt(s.baseLanes, a), t.memoizedState = null) : U = a, $m(t, U);
      }
      return ga(e, t, u, a), t.child;
    }
    function _x(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function xx(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function bx(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function xT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Sn, t.flags |= ho);
    }
    function bS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = _f(t, p);
      }
      var v, g;
      Lf(t, u), va(t);
      {
        if (zp.current = t, Bn(!0), v = Ff(e, t, a, i, f, u), g = jf(), t.mode & qt) {
          mn(!0);
          try {
            v = Ff(e, t, a, i, f, u), g = jf();
          } finally {
            mn(!1);
          }
        }
        Bn(!1);
      }
      return ha(), e !== null && !ul ? (jC(e, t, u), Vu(e, t, u)) : (Ur() && g && ug(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function bT(e, t, a, i, u) {
      {
        switch (Y1(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Le, t.flags |= Kn;
            var g = new Error("Simulated error coming from DevTools"), S = ws(u);
            t.lanes = nt(t.lanes, S);
            var D = CS(t, ec(g, t), S);
            kg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && tl(
            b,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var U;
      Bl(a) ? (U = !0, Yh(t)) : U = !1, Lf(t, u);
      var j = t.stateNode, P;
      j === null ? (Nm(e, t), mT(t, a, i), gS(t, a, i, u), P = !0) : e === null ? P = mx(t, a, i, u) : P = yx(e, t, a, i, u);
      var de = kS(e, t, a, P, U, u);
      {
        var Fe = t.stateNode;
        P && Fe.props !== i && (tc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), tc = !0);
      }
      return de;
    }
    function kS(e, t, a, i, u, s) {
      xT(e, t);
      var f = (t.flags & Le) !== Ae;
      if (!i && !f)
        return u && oC(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      zp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, fT();
      else {
        va(t);
        {
          if (Bn(!0), v = p.render(), t.mode & qt) {
            mn(!0);
            try {
              p.render();
            } finally {
              mn(!1);
            }
          }
          Bn(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? wx(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && oC(t, a, !0), t.child;
    }
    function kT(e) {
      var t = e.stateNode;
      t.pendingContext ? lC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lC(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function kx(e, t, a) {
      if (kT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      LC(e, t), um(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, g = t.updateQueue;
        if (g.baseState = v, t.memoizedState = v, t.flags & Er) {
          var S = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return DT(e, t, p, a, S);
        } else if (p !== s) {
          var D = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return DT(e, t, p, a, D);
        } else {
          L_(t);
          var b = wC(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & ~hn | qr, U = U.sibling;
        }
      } else {
        if (kf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function DT(e, t, a, i, u) {
      return kf(), pg(u), t.flags |= Er, ga(e, t, a, i), t.child;
    }
    function Dx(e, t, a) {
      UC(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Qy(i, u);
      return p ? f = null : s !== null && Qy(i, s) && (t.flags |= Da), xT(e, t), ga(e, t, f, a), t.child;
    }
    function Ox(e, t) {
      return e === null && dg(t), null;
    }
    function Lx(e, t, a, i) {
      Nm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = O1(v), S = ll(v, u), D;
      switch (g) {
        case ee:
          return DS(t, v), t.type = v = Wf(v), D = bS(null, t, v, S, i), D;
        case re:
          return t.type = v = iE(v), D = bT(null, t, v, S, i), D;
        case We:
          return t.type = v = lE(v), D = TT(null, t, v, S, i), D;
        case Ne: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && tl(
              b,
              S,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return D = RT(
            null,
            t,
            v,
            ll(v.type, S),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Xe && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Ax(e, t, a, i, u) {
      Nm(e, t), t.tag = re;
      var s;
      return Bl(a) ? (s = !0, Yh(t)) : s = !1, Lf(t, u), mT(t, a, i), gS(t, a, i, u), kS(null, t, a, !0, s, u);
    }
    function Mx(e, t, a, i) {
      Nm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = _f(t, f);
      }
      Lf(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = wt(a) || "Unknown";
          TS[g] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), TS[g] = !0);
        }
        t.mode & qt && rl.recordLegacyContextWarning(t, null), Bn(!0), zp.current = t, p = Ff(null, t, a, u, s, i), v = jf(), Bn(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = wt(a) || "Unknown";
        Fp[S] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Fp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = wt(a) || "Unknown";
          Fp[D] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Fp[D] = !0);
        }
        t.tag = re, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Bl(a) ? (b = !0, Yh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, bg(t), hT(t, p), gS(t, a, u, i), kS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ee, t.mode & qt) {
          mn(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = jf();
          } finally {
            mn(!1);
          }
        }
        return Ur() && v && ug(t), ga(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), _S[u] || (_S[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          jp[f] || (E("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), jp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          wS[p] || (E("%s: Function components do not support getDerivedStateFromProps.", p), wS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          RS[v] || (E("%s: Function components do not support contextType.", v), RS[v] = !0);
        }
      }
    }
    var OS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function LS(e) {
      return {
        baseLanes: e,
        cachePool: Rx(),
        transitions: null
      };
    }
    function Nx(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ux(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ag(e, bp);
    }
    function zx(e, t) {
      return _s(e.childLanes, t);
    }
    function OT(e, t, a) {
      var i = t.pendingProps;
      $1(t) && (t.flags |= Le);
      var u = al.current, s = !1, f = (t.flags & Le) !== Ae;
      if (f || Ux(u, e) ? (s = !0, t.flags &= ~Le) : (e === null || e.memoizedState !== null) && (u = ex(u, FC)), u = Mf(u), zo(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Vx(t, v);
        }
        var g = i.children, S = i.fallback;
        if (s) {
          var D = Fx(t, g, S, a), b = t.child;
          return b.memoizedState = LS(a), t.memoizedState = OS, D;
        } else
          return AS(t, g);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return Ix(e, t, f, i, j, U, a);
        }
        if (s) {
          var P = i.fallback, de = i.children, Fe = Hx(e, t, de, P, a), Oe = t.child, Rt = e.child.memoizedState;
          return Oe.memoizedState = Rt === null ? LS(a) : Nx(Rt, a), Oe.childLanes = zx(e, a), t.memoizedState = OS, Fe;
        } else {
          var gt = i.children, A = jx(e, t, gt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function AS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = MS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Fx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ht) === Me && s !== null ? (p = s, p.childLanes = W, p.pendingProps = f, e.mode & Lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = MS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function MS(e, t, a) {
      return L0(e, t, W, null);
    }
    function LT(e, t) {
      return lc(e, t);
    }
    function jx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = LT(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ht) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function Hx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ht) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        g = S, g.childLanes = W, g.pendingProps = v, t.mode & Lt && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = LT(f, v), g.subtreeFlags = f.subtreeFlags & Mn;
      var D;
      return p !== null ? D = lc(p, i) : (D = Yo(i, s, u, null), D.flags |= hn), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function Mm(e, t, a, i) {
      i !== null && pg(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = AS(t, s);
      return f.flags |= hn, t.memoizedState = null, f;
    }
    function Px(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = MS(f, s), v = Yo(i, s, u, null);
      return v.flags |= hn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ht) !== Me && Df(t, e.child, null, u), v;
    }
    function Vx(e, t, a) {
      return (e.mode & ht) === Me ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : Xy(t) ? e.lanes = Cr : e.lanes = Jr, null;
    }
    function Ix(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Er) {
          t.flags &= ~Er;
          var A = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mm(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Le, null;
          var V = i.children, M = i.fallback, J = Px(e, t, V, M, f), ye = t.child;
          return ye.memoizedState = LS(f), t.memoizedState = OS, J;
        }
      else {
        if (D_(), (t.mode & ht) === Me)
          return Mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Xy(u)) {
          var p, v, g;
          {
            var S = Ww(u);
            p = S.digest, v = S.message, g = S.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = SS(D, p, g);
          return Mm(e, t, f, b);
        }
        var U = Zr(f, e.childLanes);
        if (ul || U) {
          var j = Ym();
          if (j !== null) {
            var P = Vd(j, f);
            if (P !== kt && P !== s.retryLane) {
              s.retryLane = P;
              var de = Xt;
              ja(e, P), mr(j, e, P, de);
            }
          }
          eE();
          var Fe = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mm(e, t, f, Fe);
        } else if (eC(u)) {
          t.flags |= Le, t.child = e.child;
          var Oe = p1.bind(null, e);
          return Qw(u, Oe), null;
        } else {
          A_(t, u, s.treeContext);
          var Rt = i.children, gt = AS(t, Rt);
          return gt.flags |= qr, gt;
        }
      }
    }
    function AT(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), Rg(e.return, t, a);
    }
    function Bx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === we) {
          var u = i.memoizedState;
          u !== null && AT(i, a, e);
        } else if (i.tag === ln)
          AT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Yx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && fm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function $x(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !xS[e])
        if (xS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Wx(e, t) {
      e !== void 0 && !Am[e] && (e !== "collapsed" && e !== "hidden" ? (Am[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Am[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function MT(e, t) {
      {
        var a = ct(e), i = !a && typeof tt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Qx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ct(e)) {
          for (var a = 0; a < e.length; a++)
            if (!MT(e[a], a))
              return;
        } else {
          var i = tt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!MT(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function NS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function NT(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      $x(u), Wx(s, u), Qx(f, u), ga(e, t, f, a);
      var p = al.current, v = Ag(p, bp);
      if (v)
        p = Mg(p, bp), t.flags |= Le;
      else {
        var g = e !== null && (e.flags & Le) !== Ae;
        g && Bx(t, t.child, a), p = Mf(p);
      }
      if (zo(t, p), (t.mode & ht) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = Yx(t.child), D;
            S === null ? (D = t.child, t.child = null) : (D = S.sibling, S.sibling = null), NS(
              t,
              !1,
              // isBackwards
              D,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var j = U.alternate;
              if (j !== null && fm(j) === null) {
                t.child = U;
                break;
              }
              var P = U.sibling;
              U.sibling = b, b = U, U = P;
            }
            NS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            NS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function qx(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var UT = !1;
    function Gx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || UT || (UT = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (bC(t, u, p), f !== null) {
        var g = f.value;
        if (K(g, p)) {
          if (f.children === s.children && !Ih())
            return Vu(e, t, a);
        } else
          $_(t, u, a);
      }
      var S = s.children;
      return ga(e, t, S, a), t.child;
    }
    var zT = !1;
    function Kx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (zT || (zT = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = er(i);
      va(t);
      var p;
      return zp.current = t, Bn(!0), p = s(f), Bn(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Hp() {
      ul = !0;
    }
    function Nm(e, t) {
      (t.mode & ht) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), fT(), Xp(t.lanes), Zr(a, t.childLanes) ? (B_(e, t), t.child) : null;
    }
    function Xx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= hn, a;
      }
    }
    function US(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function Jx(e, t, a) {
      switch (t.tag) {
        case $:
          kT(t), t.stateNode, kf();
          break;
        case te:
          UC(t);
          break;
        case re: {
          var i = t.type;
          Bl(i) && Yh(t);
          break;
        }
        case pe:
          Dg(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          bC(t, s, u);
          break;
        }
        case ft:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case we: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Mf(al.current)), t.flags |= Le, null;
            var g = t.child, S = g.childLanes;
            if (Zr(a, S))
              return OT(e, t, a);
            zo(t, Mf(al.current));
            var D = Vu(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            zo(t, Mf(al.current));
          break;
        }
        case ln: {
          var b = (e.flags & Le) !== Ae, U = Zr(a, t.childLanes);
          if (b) {
            if (U)
              return NT(e, t, a);
            t.flags |= Le;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, al.current), U)
            break;
          return null;
        }
        case Ue:
        case zt:
          return t.lanes = W, _T(e, t, a);
      }
      return Vu(e, t, a);
    }
    function FT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Xx(e, t, fE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ih() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = US(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Le) === Ae)
            return ul = !1, Jx(e, t, a);
          (e.flags & xc) !== Ae ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ur() && R_(t)) {
        var f = t.index, p = w_();
        fC(t, p, f);
      }
      switch (t.lanes = W, t.tag) {
        case le:
          return Mx(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return Lx(e, t, v, a);
        }
        case ee: {
          var g = t.type, S = t.pendingProps, D = t.elementType === g ? S : ll(g, S);
          return bS(e, t, g, D, a);
        }
        case re: {
          var b = t.type, U = t.pendingProps, j = t.elementType === b ? U : ll(b, U);
          return bT(e, t, b, j, a);
        }
        case $:
          return kx(e, t, a);
        case te:
          return Dx(e, t, a);
        case be:
          return Ox(e, t);
        case we:
          return OT(e, t, a);
        case pe:
          return qx(e, t, a);
        case We: {
          var P = t.type, de = t.pendingProps, Fe = t.elementType === P ? de : ll(P, de);
          return TT(e, t, P, Fe, a);
        }
        case $e:
          return _x(e, t, a);
        case rt:
          return xx(e, t, a);
        case ft:
          return bx(e, t, a);
        case lt:
          return Gx(e, t, a);
        case Vt:
          return Kx(e, t, a);
        case Ne: {
          var Oe = t.type, Rt = t.pendingProps, gt = ll(Oe, Rt);
          if (t.type !== t.elementType) {
            var A = Oe.propTypes;
            A && tl(
              A,
              gt,
              // Resolved for outer only
              "prop",
              wt(Oe)
            );
          }
          return gt = ll(Oe.type, gt), RT(e, t, Oe, gt, a);
        }
        case Pe:
          return wT(e, t, t.type, t.pendingProps, a);
        case jt: {
          var V = t.type, M = t.pendingProps, J = t.elementType === V ? M : ll(V, M);
          return Ax(e, t, V, J, a);
        }
        case ln:
          return NT(e, t, a);
        case xt:
          break;
        case Ue:
          return _T(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hf(e) {
      e.flags |= Et;
    }
    function jT(e) {
      e.flags |= Sn, e.flags |= ho;
    }
    var HT, zS, PT, VT;
    HT = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === be)
          Ew(e, u.stateNode);
        else if (u.tag !== pe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, zS = function(e, t) {
    }, PT = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = Tw(f, a, s, i, u, p);
        t.updateQueue = v, v && Hf(t);
      }
    }, VT = function(e, t, a, i) {
      a !== i && Hf(t);
    };
    function Pp(e, t) {
      if (!Ur())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = W, i = Ae;
      if (t) {
        if ((e.mode & Lt) !== Me) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Mn, i |= g.flags & Mn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = nt(a, nt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Mn, i |= S.flags & Mn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Zx(e, t, a) {
      if (F_() && (t.mode & ht) !== Me && (t.flags & Le) === Ae)
        return gC(t), kf(), t.flags |= Er | ss | Kn, !1;
      var i = Gh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (U_(t), Fr(t), (t.mode & Lt) !== Me) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & Le) === Ae && (t.memoizedState = null), t.flags |= Et, Fr(t), (t.mode & Lt) !== Me) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return SC(), !0;
    }
    function IT(e, t, a) {
      var i = t.pendingProps;
      switch (og(t), t.tag) {
        case le:
        case an:
        case Pe:
        case ee:
        case We:
        case $e:
        case rt:
        case ft:
        case Vt:
        case Ne:
          return Fr(t), null;
        case re: {
          var u = t.type;
          return Bl(u) && Bh(t), Fr(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Af(t), ag(t), Ug(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Gh(t);
            if (f)
              Hf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Er) !== Ae) && (t.flags |= Yn, SC());
            }
          }
          return zS(e, t), Fr(t), null;
        }
        case te: {
          Lg(t);
          var v = NC(), g = t.type;
          if (e !== null && t.stateNode != null)
            PT(e, t, g, i, v), e.ref !== t.ref && jT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var S = Og(), D = Gh(t);
            if (D)
              M_(t, v, S) && Hf(t);
            else {
              var b = Sw(g, i, v, S, t);
              HT(b, t, !1, !1), t.stateNode = b, Cw(b, g, i, v) && Hf(t);
            }
            t.ref !== null && jT(t);
          }
          return Fr(t), null;
        }
        case be: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            VT(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = NC(), de = Og(), Fe = Gh(t);
            Fe ? N_(t) && Hf(t) : t.stateNode = Rw(U, P, de, t);
          }
          return Fr(t), null;
        }
        case we: {
          Nf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Zx(e, t, Oe);
            if (!Rt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & Le) !== Ae)
            return t.lanes = a, (t.mode & Lt) !== Me && lS(t), t;
          var gt = Oe !== null, A = e !== null && e.memoizedState !== null;
          if (gt !== A && gt) {
            var V = t.child;
            if (V.flags |= An, (t.mode & ht) !== Me) {
              var M = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              M || Ag(al.current, FC) ? e1() : eE();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Et), Fr(t), (t.mode & Lt) !== Me && gt) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case pe:
          return Af(t), zS(e, t), e === null && m_(t.stateNode.containerInfo), Fr(t), null;
        case lt:
          var ve = t.type._context;
          return Tg(ve, t), Fr(t), null;
        case jt: {
          var qe = t.type;
          return Bl(qe) && Bh(t), Fr(t), null;
        }
        case ln: {
          Nf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Fr(t), null;
          var Kt = (t.flags & Le) !== Ae, Nt = Ze.rendering;
          if (Nt === null)
            if (Kt)
              Pp(Ze, !1);
            else {
              var Qn = n1() && (e === null || (e.flags & Le) === Ae);
              if (!Qn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Hn = fm(Ut);
                  if (Hn !== null) {
                    Kt = !0, t.flags |= Le, Pp(Ze, !1);
                    var la = Hn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = Ae, Y_(t, a), zo(t, Mg(al.current, bp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ze.tail !== null && $n() > s0() && (t.flags |= Le, Kt = !0, Pp(Ze, !1), t.lanes = Ad);
            }
          else {
            if (!Kt) {
              var Ir = fm(Nt);
              if (Ir !== null) {
                t.flags |= Le, Kt = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), Pp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Nt.alternate && !Ur())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $n() * 2 - Ze.renderingStartTime > s0() && a !== Jr && (t.flags |= Le, Kt = !0, Pp(Ze, !1), t.lanes = Ad);
            }
            if (Ze.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var Ca = Ze.last;
              Ca !== null ? Ca.sibling = Nt : t.child = Nt, Ze.last = Nt;
            }
          }
          if (Ze.tail !== null) {
            var Ta = Ze.tail;
            Ze.rendering = Ta, Ze.tail = Ta.sibling, Ze.renderingStartTime = $n(), Ta.sibling = null;
            var ua = al.current;
            return Kt ? ua = Mg(ua, bp) : ua = Mf(ua), zo(t, ua), Ta;
          }
          return Fr(t), null;
        }
        case xt:
          break;
        case Ue:
        case zt: {
          ZS(t);
          var Wu = t.memoizedState, Qf = Wu !== null;
          if (e !== null) {
            var nv = e.memoizedState, Xl = nv !== null;
            Xl !== Qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !oe && (t.flags |= An);
          }
          return !Qf || (t.mode & ht) === Me ? Fr(t) : Zr(Kl, Jr) && (Fr(t), t.subtreeFlags & (hn | Et) && (t.flags |= An)), null;
        }
        case bt:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function eb(e, t, a) {
      switch (og(t), t.tag) {
        case re: {
          var i = t.type;
          Bl(i) && Bh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | Le, (t.mode & Lt) !== Me && lS(t), t) : null;
        }
        case $: {
          t.stateNode, Af(t), ag(t), Ug();
          var s = t.flags;
          return (s & Kn) !== Ae && (s & Le) === Ae ? (t.flags = s & ~Kn | Le, t) : null;
        }
        case te:
          return Lg(t), null;
        case we: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | Le, (t.mode & Lt) !== Me && lS(t), t) : null;
        }
        case ln:
          return Nf(t), null;
        case pe:
          return Af(t), null;
        case lt:
          var v = t.type._context;
          return Tg(v, t), null;
        case Ue:
        case zt:
          return ZS(t), null;
        case bt:
          return null;
        default:
          return null;
      }
    }
    function BT(e, t, a) {
      switch (og(t), t.tag) {
        case re: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case $: {
          t.stateNode, Af(t), ag(t), Ug();
          break;
        }
        case te: {
          Lg(t);
          break;
        }
        case pe:
          Af(t);
          break;
        case we:
          Nf(t);
          break;
        case ln:
          Nf(t);
          break;
        case lt:
          var u = t.type._context;
          Tg(u, t);
          break;
        case Ue:
        case zt:
          ZS(t);
          break;
      }
    }
    var YT = null;
    YT = /* @__PURE__ */ new Set();
    var Um = !1, jr = !1, tb = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Pf = null, Vf = null;
    function nb(e) {
      _l(null, function() {
        throw e;
      }), os();
    }
    var rb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function $T(e, t) {
      try {
        Ho(cr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function FS(e, t, a) {
      try {
        rb(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function ab(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function WT(e, t) {
      try {
        qT(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Be && dt && e.mode & Lt)
              try {
                ql(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function zm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var QT = !1;
    function ib(e, t) {
      yw(e.containerInfo), Re = t, lb();
      var a = QT;
      return QT = !1, a;
    }
    function lb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & bl) !== Ae && t !== null ? (t.return = e, Re = t) : ub();
      }
    }
    function ub() {
      for (; Re !== null; ) {
        var e = Re;
        $t(e);
        try {
          ob(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function ob(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yn) !== Ae) {
        switch ($t(e), e.tag) {
          case ee:
          case We:
          case Pe:
            break;
          case re: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = YT;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var v = e.stateNode;
              Iw(v.containerInfo);
            }
            break;
          }
          case te:
          case be:
          case pe:
          case jt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Ha ? Gi(t) : (e & cr) !== Ha && fs(t), (e & Yl) !== Ha && Zp(!0), zm(t, a, p), (e & Yl) !== Ha && Zp(!1), (e & zr) !== Ha ? Ll() : (e & cr) !== Ha && Od());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zr) !== Ha ? Dd(t) : (e & cr) !== Ha && Ac(t);
            var f = s.create;
            (e & Yl) !== Ha && Zp(!0), s.destroy = f(), (e & Yl) !== Ha && Zp(!1), (e & zr) !== Ha ? Vv() : (e & cr) !== Ha && Iv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & cr) !== Ae ? v = "useLayoutEffect" : (s.tag & Yl) !== Ae ? v = "useInsertionEffect" : v = "useEffect";
                var g = void 0;
                p === null ? g = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? g = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : g = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", v, g);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function sb(e, t) {
      if ((t.flags & Et) !== Ae)
        switch (t.tag) {
          case ft: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = sT(), p = t.alternate === null ? "mount" : "update";
            oT() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case $:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case ft:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function cb(e, t, a, i) {
      if ((a.flags & Dl) !== Ae)
        switch (a.tag) {
          case ee:
          case We:
          case Pe: {
            if (!jr)
              if (a.mode & Lt)
                try {
                  ql(), Ho(cr | sr, a);
                } finally {
                  Ql(a);
                }
              else
                Ho(cr | sr, a);
            break;
          }
          case re: {
            var u = a.stateNode;
            if (a.flags & Et && !jr)
              if (t === null)
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Lt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), MC(a, p, u));
            break;
          }
          case $: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    g = a.child.stateNode;
                    break;
                  case re:
                    g = a.child.stateNode;
                    break;
                }
              MC(a, v, g);
            }
            break;
          }
          case te: {
            var S = a.stateNode;
            if (t === null && a.flags & Et) {
              var D = a.type, b = a.memoizedProps;
              kw(S, D, b);
            }
            break;
          }
          case be:
            break;
          case pe:
            break;
          case ft: {
            {
              var U = a.memoizedProps, j = U.onCommit, P = U.onRender, de = a.stateNode.effectDuration, Fe = sT(), Oe = t === null ? "mount" : "update";
              oT() && (Oe = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof j == "function" && j(a.memoizedProps.id, Oe, de, Fe), u1(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case $:
                      var gt = Rt.stateNode;
                      gt.effectDuration += de;
                      break e;
                    case ft:
                      var A = Rt.stateNode;
                      A.effectDuration += de;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case we: {
            gb(e, a);
            break;
          }
          case ln:
          case jt:
          case xt:
          case Ue:
          case zt:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      jr || a.flags & Sn && qT(a);
    }
    function fb(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          if (e.mode & Lt)
            try {
              ql(), $T(e, e.return);
            } finally {
              Ql(e);
            }
          else
            $T(e, e.return);
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ab(e, e.return, t), WT(e, e.return);
          break;
        }
        case te: {
          WT(e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? jw(u) : Pw(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Hw(s) : Vw(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === zt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === te ? i = a : i = a, typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              ql(), u = t(i);
            } finally {
              Ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function pb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function GT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, GT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && S_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function vb(e) {
      for (var t = e.return; t !== null; ) {
        if (KT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function KT(e) {
      return e.tag === te || e.tag === $ || e.tag === pe;
    }
    function XT(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || KT(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== be && t.tag !== Jt; ) {
          if (t.flags & hn || t.child === null || t.tag === pe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & hn))
          return t.stateNode;
      }
    }
    function hb(e) {
      var t = vb(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & Da && (ZE(a), t.flags &= ~Da);
          var i = XT(e);
          HS(e, i, a);
          break;
        }
        case $:
        case pe: {
          var u = t.stateNode.containerInfo, s = XT(e);
          jS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function jS(e, t, a) {
      var i = e.tag, u = i === te || i === be;
      if (u) {
        var s = e.stateNode;
        t ? Nw(a, s, t) : Aw(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          jS(f, t, a);
          for (var p = f.sibling; p !== null; )
            jS(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, u = i === te || i === be;
      if (u) {
        var s = e.stateNode;
        t ? Mw(a, s, t) : Lw(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, sl = !1;
    function mb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case te: {
              Hr = i.stateNode, sl = !1;
              break e;
            }
            case $: {
              Hr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case pe: {
              Hr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        JT(e, t, a), Hr = null, sl = !1;
      }
      pb(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        JT(e, t, i), i = i.sibling;
    }
    function JT(e, t, a) {
      switch (xd(a), a.tag) {
        case te:
          jr || If(a, t);
        // eslint-disable-next-line-no-fallthrough
        case be: {
          {
            var i = Hr, u = sl;
            Hr = null, Po(e, t, a), Hr = i, sl = u, Hr !== null && (sl ? zw(Hr, a.stateNode) : Uw(Hr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Hr !== null && (sl ? Fw(Hr, a.stateNode) : Ky(Hr, a.stateNode));
          return;
        }
        case pe: {
          {
            var s = Hr, f = sl;
            Hr = a.stateNode.containerInfo, sl = !0, Po(e, t, a), Hr = s, sl = f;
          }
          return;
        }
        case ee:
        case We:
        case Ne:
        case Pe: {
          if (!jr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, S = g;
                do {
                  var D = S, b = D.destroy, U = D.tag;
                  b !== void 0 && ((U & Yl) !== Ha ? zm(a, t, b) : (U & cr) !== Ha && (fs(a), a.mode & Lt ? (ql(), zm(a, t, b), Ql(a)) : zm(a, t, b), Od())), S = S.next;
                } while (S !== g);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case re: {
          if (!jr) {
            If(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && FS(a, t, j);
          }
          Po(e, t, a);
          return;
        }
        case xt: {
          Po(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & ht
          ) {
            var P = jr;
            jr = P || a.memoizedState !== null, Po(e, t, a), jr = P;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function yb(e) {
      e.memoizedState;
    }
    function gb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && n_(s);
          }
        }
      }
    }
    function ZT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new tb()), t.forEach(function(i) {
          var u = v1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (Pf !== null && Vf !== null)
                Jp(Vf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Sb(e, t, a) {
      Pf = a, Vf = e, $t(t), e0(t, e), $t(t), Pf = null, Vf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            mb(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          $t(p), e0(p, e), p = p.sibling;
      $t(f);
    }
    function e0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ee:
        case We:
        case Ne:
        case Pe: {
          if (cl(t, e), Gl(e), u & Et) {
            try {
              ol(Yl | sr, e, e.return), Ho(Yl | sr, e);
            } catch (qe) {
              cn(e, e.return, qe);
            }
            if (e.mode & Lt) {
              try {
                ql(), ol(cr | sr, e, e.return);
              } catch (qe) {
                cn(e, e.return, qe);
              }
              Ql(e);
            } else
              try {
                ol(cr | sr, e, e.return);
              } catch (qe) {
                cn(e, e.return, qe);
              }
          }
          return;
        }
        case re: {
          cl(t, e), Gl(e), u & Sn && i !== null && If(i, i.return);
          return;
        }
        case te: {
          cl(t, e), Gl(e), u & Sn && i !== null && If(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                ZE(s);
              } catch (qe) {
                cn(e, e.return, qe);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    Dw(f, S, g, v, p, e);
                  } catch (qe) {
                    cn(e, e.return, qe);
                  }
              }
            }
          }
          return;
        }
        case be: {
          if (cl(t, e), Gl(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              Ow(D, U, b);
            } catch (qe) {
              cn(e, e.return, qe);
            }
          }
          return;
        }
        case $: {
          if (cl(t, e), Gl(e), u & Et && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                t_(t.containerInfo);
              } catch (qe) {
                cn(e, e.return, qe);
              }
          }
          return;
        }
        case pe: {
          cl(t, e), Gl(e);
          return;
        }
        case we: {
          cl(t, e), Gl(e);
          var P = e.child;
          if (P.flags & An) {
            var de = P.stateNode, Fe = P.memoizedState, Oe = Fe !== null;
            if (de.isHidden = Oe, Oe) {
              var Rt = P.alternate !== null && P.alternate.memoizedState !== null;
              Rt || Zb();
            }
          }
          if (u & Et) {
            try {
              yb(e);
            } catch (qe) {
              cn(e, e.return, qe);
            }
            ZT(e);
          }
          return;
        }
        case Ue: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ht
          ) {
            var A = jr;
            jr = A || gt, cl(t, e), jr = A;
          } else
            cl(t, e);
          if (Gl(e), u & An) {
            var V = e.stateNode, M = e.memoizedState, J = M !== null, ye = e;
            if (V.isHidden = J, J && !gt && (ye.mode & ht) !== Me) {
              Re = ye;
              for (var ve = ye.child; ve !== null; )
                Re = ve, Cb(ve), ve = ve.sibling;
            }
            db(ye, J);
          }
          return;
        }
        case ln: {
          cl(t, e), Gl(e), u & Et && ZT(e);
          return;
        }
        case xt:
          return;
        default: {
          cl(t, e), Gl(e);
          return;
        }
      }
    }
    function Gl(e) {
      var t = e.flags;
      if (t & hn) {
        try {
          hb(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~hn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function Eb(e, t, a) {
      Pf = a, Vf = t, Re = e, t0(e, t, a), Pf = null, Vf = null;
    }
    function t0(e, t, a) {
      for (var i = (e.mode & ht) !== Me; Re !== null; ) {
        var u = Re, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || Um;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, S = g || jr, D = Um, b = jr;
            Um = p, jr = S, jr && !b && (Re = u, Tb(u));
            for (var U = s; U !== null; )
              Re = U, t0(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Re = u, Um = D, jr = b, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Dl) !== Ae && s !== null ? (s.return = u, Re = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & Dl) !== Ae) {
          var u = i.alternate;
          $t(i);
          try {
            cb(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Re = s;
          return;
        }
        Re = i.return;
      }
    }
    function Cb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        switch (t.tag) {
          case ee:
          case We:
          case Ne:
          case Pe: {
            if (t.mode & Lt)
              try {
                ql(), ol(cr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              ol(cr, t, t.return);
            break;
          }
          case re: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && FS(t, t.return, i);
            break;
          }
          case te: {
            If(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              n0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Re = a) : n0(e);
      }
    }
    function n0(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function Tb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            r0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Re = a) : r0(e);
      }
    }
    function r0(e) {
      for (; Re !== null; ) {
        var t = Re;
        $t(t);
        try {
          fb(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function Rb(e, t, a, i) {
      Re = t, wb(t, e, a, i);
    }
    function wb(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re, s = u.child;
        (u.subtreeFlags & Qi) !== Ae && s !== null ? (s.return = u, Re = s) : _b(e, t, a, i);
      }
    }
    function _b(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re;
        if ((u.flags & Qr) !== Ae) {
          $t(u);
          try {
            xb(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Re = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Re = s;
          return;
        }
        Re = u.return;
      }
    }
    function xb(e, t, a, i) {
      switch (t.tag) {
        case ee:
        case We:
        case Pe: {
          if (t.mode & Lt) {
            iS();
            try {
              Ho(zr | sr, t);
            } finally {
              aS(t);
            }
          } else
            Ho(zr | sr, t);
          break;
        }
      }
    }
    function bb(e) {
      Re = e, kb();
    }
    function kb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & ka) !== Ae) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Re = u, Lb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & Qi) !== Ae && t !== null ? (t.return = e, Re = t) : Db();
      }
    }
    function Db() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & Qr) !== Ae && ($t(e), Ob(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function Ob(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          e.mode & Lt ? (iS(), ol(zr | sr, e, e.return), aS(e)) : ol(zr | sr, e, e.return);
          break;
        }
      }
    }
    function Lb(e, t) {
      for (; Re !== null; ) {
        var a = Re;
        $t(a), Mb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Re = i) : Ab(e);
      }
    }
    function Ab(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.sibling, i = t.return;
        if (GT(t), t === e) {
          Re = null;
          return;
        }
        if (a !== null) {
          a.return = i, Re = a;
          return;
        }
        Re = i;
      }
    }
    function Mb(e, t) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          e.mode & Lt ? (iS(), ol(zr, e, t), aS(e)) : ol(zr, e, t);
          break;
        }
      }
    }
    function Nb(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          try {
            Ho(cr | sr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case re: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ub(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          try {
            Ho(zr | sr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function zb(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe: {
          try {
            ol(cr | sr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && FS(e, e.return, t);
          break;
        }
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case ee:
        case We:
        case Pe:
          try {
            ol(zr | sr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Vp = Symbol.for;
      Vp("selector.component"), Vp("selector.has_pseudo_class"), Vp("selector.role"), Vp("selector.test_id"), Vp("selector.text");
    }
    var jb = [];
    function Hb() {
      jb.forEach(function(e) {
        return e();
      });
    }
    var Pb = R.ReactCurrentActQueue;
    function Vb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function a0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Pb.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ib = Math.ceil, VS = R.ReactCurrentDispatcher, IS = R.ReactCurrentOwner, Pr = R.ReactCurrentBatchConfig, fl = R.ReactCurrentActQueue, pr = (
      /*             */
      0
    ), i0 = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), zi = (
      /*                */
      4
    ), Iu = 0, Ip = 1, nc = 2, Fm = 3, Bp = 4, l0 = 5, BS = 6, Tt = pr, Sa = null, kn = null, vr = W, Kl = W, YS = Oo(W), hr = Iu, Yp = null, jm = W, $p = W, Hm = W, Wp = null, Pa = null, $S = 0, u0 = 500, o0 = 1 / 0, Bb = 500, Bu = null;
    function Qp() {
      o0 = $n() + Bb;
    }
    function s0() {
      return o0;
    }
    var Pm = !1, WS = null, Bf = null, rc = !1, Vo = null, qp = W, QS = [], qS = null, Yb = 50, Gp = 0, GS = null, KS = !1, Vm = !1, $b = 50, Yf = 0, Im = null, Kp = Xt, Bm = W, c0 = !1;
    function Ym() {
      return Sa;
    }
    function Ea() {
      return (Tt & (Vr | zi)) !== pr ? $n() : (Kp !== Xt || (Kp = $n()), Kp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & ht) === Me)
        return Ye;
      if ((Tt & Vr) !== pr && vr !== W)
        return ws(vr);
      var a = P_() !== H_;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Bm === kt && (Bm = jd()), Bm;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = ww();
      return s;
    }
    function Wb(e) {
      var t = e.mode;
      return (t & ht) === Me ? Ye : qv();
    }
    function mr(e, t, a, i) {
      m1(), c0 && E("useInsertionEffect must not schedule updates."), KS && (Vm = !0), So(e, a, i), (Tt & Vr) !== W && e === Sa ? S1(t) : (Xr && bs(e, t, a), E1(t), e === Sa && ((Tt & Vr) === pr && ($p = nt($p, a)), hr === Bp && Bo(e, vr)), Va(e, i), a === Ye && Tt === pr && (t.mode & ht) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Qp(), cC()));
    }
    function Qb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function qb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Vr) !== pr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Jc(e, t);
      var i = Xc(e, e === Sa ? vr : W);
      if (i === W) {
        a !== null && x0(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = Nl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== rE)) {
        a == null && s !== Ye && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && x0(a);
      var f;
      if (u === Ye)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), T_(p0.bind(null, e))) : sC(p0.bind(null, e)), fl.current !== null ? fl.current.push(Ao) : xw(function() {
          (Tt & (Vr | zi)) === pr && Ao();
        }), f = null;
      else {
        var p;
        switch (th(i)) {
          case Or:
            p = cs;
            break;
          case xi:
            p = Ol;
            break;
          case Ma:
            p = qi;
            break;
          case Na:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = aE(p, f0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function f0(e, t) {
      if (dx(), Kp = Xt, Bm = W, (Tt & (Vr | zi)) !== pr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = Xc(e, e === Sa ? vr : W);
      if (u === W)
        return null;
      var s = !ef(e, u) && !Qv(e, u) && !t, f = s ? a1(e, u) : Wm(e, u);
      if (f !== Iu) {
        if (f === nc) {
          var p = Zc(e);
          p !== W && (u = p, f = XS(e, p));
        }
        if (f === Ip) {
          var v = Yp;
          throw ac(e, W), Bo(e, u), Va(e, $n()), v;
        }
        if (f === BS)
          Bo(e, u);
        else {
          var g = !ef(e, u), S = e.current.alternate;
          if (g && !Kb(S)) {
            if (f = Wm(e, u), f === nc) {
              var D = Zc(e);
              D !== W && (u = D, f = XS(e, D));
            }
            if (f === Ip) {
              var b = Yp;
              throw ac(e, W), Bo(e, u), Va(e, $n()), b;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, Gb(e, f, u);
        }
      }
      return Va(e, $n()), e.callbackNode === a ? f0.bind(null, e) : null;
    }
    function XS(e, t) {
      var a = Wp;
      if (rf(e)) {
        var i = ac(e, t);
        i.flags |= Er, h_(e.containerInfo);
      }
      var u = Wm(e, t);
      if (u !== nc) {
        var s = Pa;
        Pa = a, s !== null && d0(s);
      }
      return u;
    }
    function d0(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function Gb(e, t, a) {
      switch (t) {
        case Iu:
        case Ip:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case nc: {
          ic(e, Pa, Bu);
          break;
        }
        case Fm: {
          if (Bo(e, a), bu(a) && // do not delay if we're inside an act() scope
          !b0()) {
            var i = $S + u0 - $n();
            if (i > 10) {
              var u = Xc(e, W);
              if (u !== W)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), tf(e, s);
                break;
              }
              e.timeoutHandle = qy(ic.bind(null, e, Pa, Bu), i);
              break;
            }
          }
          ic(e, Pa, Bu);
          break;
        }
        case Bp: {
          if (Bo(e, a), zd(a))
            break;
          if (!b0()) {
            var f = ri(e, a), p = f, v = $n() - p, g = h1(v) - v;
            if (g > 10) {
              e.timeoutHandle = qy(ic.bind(null, e, Pa, Bu), g);
              break;
            }
          }
          ic(e, Pa, Bu);
          break;
        }
        case l0: {
          ic(e, Pa, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Kb(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!K(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = _s(t, Hm), t = _s(t, $p), Xv(e, t);
    }
    function p0(e) {
      if (px(), (Tt & (Vr | zi)) !== pr)
        throw new Error("Should not already be working.");
      $u();
      var t = Xc(e, W);
      if (!Zr(t, Ye))
        return Va(e, $n()), null;
      var a = Wm(e, t);
      if (e.tag !== Lo && a === nc) {
        var i = Zc(e);
        i !== W && (t = i, a = XS(e, i));
      }
      if (a === Ip) {
        var u = Yp;
        throw ac(e, W), Bo(e, t), Va(e, $n()), u;
      }
      if (a === BS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Pa, Bu), Va(e, $n()), null;
    }
    function Xb(e, t) {
      t !== W && (nf(e, nt(t, Ye)), Va(e, $n()), (Tt & (Vr | zi)) === pr && (Qp(), Ao()));
    }
    function JS(e, t) {
      var a = Tt;
      Tt |= i0;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === pr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Qp(), cC());
      }
    }
    function Jb(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, zn(Or), e(t, a, i, u);
      } finally {
        zn(s), Pr.transition = f, Tt === pr && Qp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (Tt & (Vr | zi)) === pr && $u();
      var t = Tt;
      Tt |= i0;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, zn(Or), e ? e() : void 0;
      } finally {
        zn(i), Pr.transition = a, Tt = t, (Tt & (Vr | zi)) === pr && Ao();
      }
    }
    function v0() {
      return (Tt & (Vr | zi)) !== pr;
    }
    function $m(e, t) {
      aa(YS, Kl, e), Kl = nt(Kl, t);
    }
    function ZS(e) {
      Kl = YS.current, ra(YS, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = W;
      var a = e.timeoutHandle;
      if (a !== Gy && (e.timeoutHandle = Gy, _w(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          BT(u, i), i = i.return;
        }
      Sa = e;
      var s = lc(e.current, null);
      return kn = s, vr = Kl = t, hr = Iu, Yp = null, jm = W, $p = W, Hm = W, Wp = null, Pa = null, Q_(), rl.discardPendingWarnings(), s;
    }
    function h0(e, t) {
      do {
        var a = kn;
        try {
          if (tm(), HC(), sn(), IS.current = null, a === null || a.return === null) {
            hr = Ip, Yp = t, kn = null;
            return;
          }
          if (Be && a.mode & Lt && Om(a, !0), Qe)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              _i(a, i, vr);
            } else
              ds(a, t, vr);
          Tx(e, a.return, a, t, vr), S0(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function m0() {
      var e = VS.current;
      return VS.current = _m, e === null ? _m : e;
    }
    function y0(e) {
      VS.current = e;
    }
    function Zb() {
      $S = $n();
    }
    function Xp(e) {
      jm = nt(e, jm);
    }
    function e1() {
      hr === Iu && (hr = Fm);
    }
    function eE() {
      (hr === Iu || hr === Fm || hr === nc) && (hr = Bp), Sa !== null && (Rs(jm) || Rs($p)) && Bo(Sa, vr);
    }
    function t1(e) {
      hr !== Bp && (hr = nc), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function n1() {
      return hr === Iu;
    }
    function Wm(e, t) {
      var a = Tt;
      Tt |= Vr;
      var i = m0();
      if (Sa !== e || vr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Jp(e, vr), u.clear()), Jv(e, t);
        }
        Bu = Id(), ac(e, t);
      }
      Eu(t);
      do
        try {
          r1();
          break;
        } catch (s) {
          h0(e, s);
        }
      while (!0);
      if (tm(), Tt = a, y0(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), Sa = null, vr = W, hr;
    }
    function r1() {
      for (; kn !== null; )
        g0(kn);
    }
    function a1(e, t) {
      var a = Tt;
      Tt |= Vr;
      var i = m0();
      if (Sa !== e || vr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Jp(e, vr), u.clear()), Jv(e, t);
        }
        Bu = Id(), Qp(), ac(e, t);
      }
      Eu(t);
      do
        try {
          i1();
          break;
        } catch (s) {
          h0(e, s);
        }
      while (!0);
      return tm(), y0(i), Tt = a, kn !== null ? (Bv(), Iu) : (Mc(), Sa = null, vr = W, hr);
    }
    function i1() {
      for (; kn !== null && !Cd(); )
        g0(kn);
    }
    function g0(e) {
      var t = e.alternate;
      $t(e);
      var a;
      (e.mode & Lt) !== Me ? (rS(e), a = tE(t, e, Kl), Om(e, !0)) : a = tE(t, e, Kl), sn(), e.memoizedProps = e.pendingProps, a === null ? S0(e) : kn = a, IS.current = null;
    }
    function S0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === Ae) {
          $t(t);
          var u = void 0;
          if ((t.mode & Lt) === Me ? u = IT(a, t, Kl) : (rS(t), u = IT(a, t, Kl), Om(t, !1)), sn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = eb(a, t);
          if (s !== null) {
            s.flags &= Fv, kn = s;
            return;
          }
          if ((t.mode & Lt) !== Me) {
            Om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = Ae, i.deletions = null;
          else {
            hr = BS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      hr === Iu && (hr = l0);
    }
    function ic(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, zn(Or), l1(e, t, a, i);
      } finally {
        Pr.transition = u, zn(i);
      }
      return null;
    }
    function l1(e, t, a, i) {
      do
        $u();
      while (Vo !== null);
      if (y1(), (Tt & (Vr | zi)) !== pr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bd(s), u === null)
        return kd(), null;
      if (s === W && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = W, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = nt(u.lanes, u.childLanes);
      Pd(e, f), e === Sa && (Sa = null, kn = null, vr = W), ((u.subtreeFlags & Qi) !== Ae || (u.flags & Qi) !== Ae) && (rc || (rc = !0, qS = a, aE(qi, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (bl | kl | Dl | Qi)) !== Ae, v = (u.flags & (bl | kl | Dl | Qi)) !== Ae;
      if (p || v) {
        var g = Pr.transition;
        Pr.transition = null;
        var S = Ua();
        zn(Or);
        var D = Tt;
        Tt |= zi, IS.current = null, ib(e, u), cT(), Sb(e, u, s), gw(e.containerInfo), e.current = u, ps(s), Eb(u, e, s), vs(), Td(), Tt = D, zn(S), Pr.transition = g;
      } else
        e.current = u, cT();
      var b = rc;
      if (rc ? (rc = !1, Vo = e, qp = s) : (Yf = 0, Im = null), f = e.pendingLanes, f === W && (Bf = null), b || R0(e.current, !1), wd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), Hb(), Va(e, $n()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var P = t[j], de = P.stack, Fe = P.digest;
          U(P.value, {
            componentStack: de,
            digest: Fe
          });
        }
      if (Pm) {
        Pm = !1;
        var Oe = WS;
        throw WS = null, Oe;
      }
      return Zr(qp, Ye) && e.tag !== Lo && $u(), f = e.pendingLanes, Zr(f, Ye) ? (fx(), e === GS ? Gp++ : (Gp = 0, GS = e)) : Gp = 0, Ao(), kd(), null;
    }
    function $u() {
      if (Vo !== null) {
        var e = th(qp), t = Ds(Ma, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, zn(t), o1();
        } finally {
          zn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function u1(e) {
      QS.push(e), rc || (rc = !0, aE(qi, function() {
        return $u(), null;
      }));
    }
    function o1() {
      if (Vo === null)
        return !1;
      var e = qS;
      qS = null;
      var t = Vo, a = qp;
      if (Vo = null, qp = W, (Tt & (Vr | zi)) !== pr)
        throw new Error("Cannot flush passive effects while already rendering.");
      KS = !0, Vm = !1, Su(a);
      var i = Tt;
      Tt |= zi, bb(t.current), Rb(t, t.current, a, e);
      {
        var u = QS;
        QS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          sb(t, f);
        }
      }
      Ld(), R0(t.current, !0), Tt = i, Ao(), Vm ? t === Im ? Yf++ : (Yf = 0, Im = t) : Yf = 0, KS = !1, Vm = !1, _d(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function E0(e) {
      return Bf !== null && Bf.has(e);
    }
    function s1(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function c1(e) {
      Pm || (Pm = !0, WS = e);
    }
    var f1 = c1;
    function C0(e, t, a) {
      var i = ec(a, t), u = gT(e, i, Ye), s = No(e, u, Ye), f = Ea();
      s !== null && (So(s, Ye, f), Va(s, f));
    }
    function cn(e, t, a) {
      if (nb(a), Zp(!1), e.tag === $) {
        C0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          C0(i, e, a);
          return;
        } else if (i.tag === re) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !E0(s)) {
            var f = ec(a, e), p = CS(i, f, Ye), v = No(i, p, Ye), g = Ea();
            v !== null && (So(v, Ye, g), Va(v, g));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function d1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      tf(e, a), C1(e), Sa === e && ku(vr, a) && (hr === Bp || hr === Fm && bu(vr) && $n() - $S < u0 ? ac(e, W) : Hm = nt(Hm, a)), Va(e, u);
    }
    function T0(e, t) {
      t === kt && (t = Wb(e));
      var a = Ea(), i = ja(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function p1(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), T0(e, a);
    }
    function v1(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case we:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), T0(e, a);
    }
    function h1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ib(e / 1960) * 1960;
    }
    function m1() {
      if (Gp > Yb)
        throw Gp = 0, GS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Yf > $b && (Yf = 0, Im = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function y1() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function R0(e, t) {
      $t(e), Qm(e, xl, zb), t && Qm(e, Ti, Fb), Qm(e, xl, Nb), t && Qm(e, Ti, Ub), sn();
    }
    function Qm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ae ? i = i.child : ((i.flags & t) !== Ae && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var qm = null;
    function w0(e) {
      {
        if ((Tt & Vr) !== pr || !(e.mode & ht))
          return;
        var t = e.tag;
        if (t !== le && t !== $ && t !== re && t !== ee && t !== We && t !== Ne && t !== Pe)
          return;
        var a = Ke(e) || "ReactComponent";
        if (qm !== null) {
          if (qm.has(a))
            return;
          qm.add(a);
        } else
          qm = /* @__PURE__ */ new Set([a]);
        var i = ar;
        try {
          $t(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? $t(e) : sn();
        }
      }
    }
    var tE;
    {
      var g1 = null;
      tE = function(e, t, a) {
        var i = A0(g1, t);
        try {
          return FT(e, t, a);
        } catch (s) {
          if (O_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (tm(), HC(), BT(e, t), A0(t, i), t.mode & Lt && rS(t), _l(null, FT, null, e, t, a), $i()) {
            var u = os();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var _0 = !1, nE;
    nE = /* @__PURE__ */ new Set();
    function S1(e) {
      if (hi && !ox())
        switch (e.tag) {
          case ee:
          case We:
          case Pe: {
            var t = kn && Ke(kn) || "Unknown", a = t;
            if (!nE.has(a)) {
              nE.add(a);
              var i = Ke(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case re: {
            _0 || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), _0 = !0);
            break;
          }
        }
    }
    function Jp(e, t) {
      if (Xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var rE = {};
    function aE(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), rE) : Ed(e, t);
      }
    }
    function x0(e) {
      if (e !== rE)
        return Hv(e);
    }
    function b0() {
      return fl.current !== null;
    }
    function E1(e) {
      {
        if (e.mode & ht) {
          if (!a0())
            return;
        } else if (!Vb() || Tt !== pr || e.tag !== ee && e.tag !== We && e.tag !== Pe)
          return;
        if (fl.current === null) {
          var t = ar;
          try {
            $t(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? $t(e) : sn();
          }
        }
      }
    }
    function C1(e) {
      e.tag !== Lo && a0() && fl.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Zp(e) {
      c0 = e;
    }
    var Fi = null, $f = null, T1 = function(e) {
      Fi = e;
    };
    function Wf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function iE(e) {
      return Wf(e);
    }
    function lE(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function k0(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case re: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ee: {
            (typeof i == "function" || s === Xe) && (u = !0);
            break;
          }
          case We: {
            (s === Y || s === Xe) && (u = !0);
            break;
          }
          case Ne:
          case Pe: {
            (s === et || s === Xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function D0(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var R1 = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Yu(function() {
          uE(e.current, i, a);
        });
      }
    }, w1 = function(e, t) {
      {
        if (e.context !== li)
          return;
        $u(), Yu(function() {
          ev(t, e, null, null);
        });
      }
    };
    function uE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ee:
          case Pe:
          case re:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, S = !1;
        if (v !== null) {
          var D = Fi(v);
          D !== void 0 && (a.has(D) ? S = !0 : t.has(D) && (f === re ? S = !0 : g = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || g) {
          var b = ja(e, Ye);
          b !== null && mr(b, e, Ye, Xt);
        }
        u !== null && !S && uE(u, t, a), s !== null && uE(s, t, a);
      }
    }
    var _1 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return oE(e.current, i, a), a;
      }
    };
    function oE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ee:
          case Pe:
          case re:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? x1(e, a) : i !== null && oE(i, t, a), u !== null && oE(u, t, a);
      }
    }
    function x1(e, t) {
      {
        var a = b1(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case pe:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function b1(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var sE;
    {
      sE = !1;
      try {
        var O0 = Object.preventExtensions({});
      } catch {
        sE = !0;
      }
    }
    function k1(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ae, this.subtreeFlags = Ae, this.deletions = null, this.lanes = W, this.childLanes = W, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !sE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new k1(e, t, a, i);
    };
    function cE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function D1(e) {
      return typeof e == "function" && !cE(e) && e.defaultProps === void 0;
    }
    function O1(e) {
      if (typeof e == "function")
        return cE(e) ? re : ee;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return We;
        if (t === et)
          return Ne;
      }
      return le;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ae, a.subtreeFlags = Ae, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Mn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case le:
        case ee:
        case Pe:
          a.type = Wf(e.type);
          break;
        case re:
          a.type = iE(e.type);
          break;
        case We:
          a.type = lE(e.type);
          break;
      }
      return a;
    }
    function L1(e, t) {
      e.flags &= Mn | hn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = W, e.lanes = t, e.child = null, e.subtreeFlags = Ae, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ae, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function A1(e, t, a) {
      var i;
      return e === $h ? (i = ht, t === !0 && (i |= qt, i |= At)) : i = Me, Xr && (i |= Lt), ui($, null, null, i);
    }
    function fE(e, t, a, i, u, s) {
      var f = le, p = e;
      if (typeof e == "function")
        cE(e) ? (f = re, p = iE(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = te;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case Wa:
            f = rt, u |= qt, (u & ht) !== Me && (u |= At);
            break;
          case di:
            return M1(a, u, s, t);
          case ce:
            return N1(a, u, s, t);
          case Se:
            return U1(a, u, s, t);
          case Tn:
            return L0(a, u, s, t);
          case tn:
          // eslint-disable-next-line no-fallthrough
          case mt:
          // eslint-disable-next-line no-fallthrough
          case on:
          // eslint-disable-next-line no-fallthrough
          case rr:
          // eslint-disable-next-line no-fallthrough
          case vt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = lt;
                  break e;
                case _:
                  f = Vt;
                  break e;
                case Y:
                  f = We, p = lE(p);
                  break e;
                case et:
                  f = Ne;
                  break e;
                case Xe:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? Ke(i) : null;
              g && (v += `

Check the render method of \`` + g + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var S = ui(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function dE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = fE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui($e, e, i, t);
      return u.lanes = a, u;
    }
    function M1(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(ft, e, i, t | Lt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function N1(e, t, a, i) {
      var u = ui(we, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function U1(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = Se, u.lanes = a, u;
    }
    function L0(e, t, a, i) {
      var u = ui(Ue, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function pE(e, t, a) {
      var i = ui(be, e, null, t);
      return i.lanes = a, i;
    }
    function z1() {
      var e = ui(te, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function F1(e) {
      var t = ui(Jt, null, null, Me);
      return t.stateNode = e, t;
    }
    function vE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(pe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function A0(e, t) {
      return e === null && (e = ui(le, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function j1(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Gy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = xs(W), this.expirationTimes = xs(Xt), this.pendingLanes = W, this.suspendedLanes = W, this.pingedLanes = W, this.expiredLanes = W, this.mutableReadLanes = W, this.finishedLanes = W, this.entangledLanes = W, this.entanglements = xs(W), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case $h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function M0(e, t, a, i, u, s, f, p, v, g) {
      var S = new j1(e, t, a, p, v), D = A1(t, s);
      S.current = D, D.stateNode = S;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = b;
      }
      return bg(D), S;
    }
    var hE = "18.3.1";
    function H1(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: nr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var mE, yE;
    mE = !1, yE = {};
    function N0(e) {
      if (!e)
        return li;
      var t = po(e), a = C_(t);
      if (t.tag === re) {
        var i = t.type;
        if (Bl(i))
          return uC(t, i, a);
      }
      return a;
    }
    function P1(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Gr(a);
        if (u === null)
          return null;
        if (u.mode & qt) {
          var s = Ke(a) || "Component";
          if (!yE[s]) {
            yE[s] = !0;
            var f = ar;
            try {
              $t(u), a.mode & qt ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? $t(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function U0(e, t, a, i, u, s, f, p) {
      var v = !1, g = null;
      return M0(e, t, v, g, a, i, u, s, f);
    }
    function z0(e, t, a, i, u, s, f, p, v, g) {
      var S = !0, D = M0(a, i, S, e, u, s, f, p, v);
      D.context = N0(null);
      var b = D.current, U = Ea(), j = Io(b), P = Pu(U, j);
      return P.callback = t ?? null, No(b, P, j), Qb(D, j, U), D;
    }
    function ev(e, t, a, i) {
      Rd(t, e);
      var u = t.current, s = Ea(), f = Io(u);
      yn(f);
      var p = N0(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ar !== null && !mE && (mE = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(ar) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = No(u, v, f);
      return g !== null && (mr(g, u, f, s), lm(g, u, f)), f;
    }
    function Gm(e) {
      var t = e.current;
      return t.child ? t.child.tag === te ? t.child.stateNode : t.child.stateNode : null;
    }
    function V1(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (rf(t)) {
            var a = $v(t);
            Xb(t, a);
          }
          break;
        }
        case we: {
          Yu(function() {
            var u = ja(e, Ye);
            if (u !== null) {
              var s = Ea();
              mr(u, e, Ye, s);
            }
          });
          var i = Ye;
          gE(e, i);
          break;
        }
      }
    }
    function F0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function gE(e, t) {
      F0(e, t);
      var a = e.alternate;
      a && F0(a, t);
    }
    function I1(e) {
      if (e.tag === we) {
        var t = Es, a = ja(e, t);
        if (a !== null) {
          var i = Ea();
          mr(a, e, t, i);
        }
        gE(e, t);
      }
    }
    function B1(e) {
      if (e.tag === we) {
        var t = Io(e), a = ja(e, t);
        if (a !== null) {
          var i = Ea();
          mr(a, e, t, i);
        }
        gE(e, t);
      }
    }
    function j0(e) {
      var t = fn(e);
      return t === null ? null : t.stateNode;
    }
    var H0 = function(e) {
      return null;
    };
    function Y1(e) {
      return H0(e);
    }
    var P0 = function(e) {
      return !1;
    };
    function $1(e) {
      return P0(e);
    }
    var V0 = null, I0 = null, B0 = null, Y0 = null, $0 = null, W0 = null, Q0 = null, q0 = null, G0 = null;
    {
      var K0 = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : it({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = K0(e[i], t, a + 1), u);
      }, X0 = function(e, t) {
        return K0(e, t, 0);
      }, J0 = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : it({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ct(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = J0(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Z0 = function(e, t, a) {
        if (t.length !== a.length) {
          Ee("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ee("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return J0(e, t, a, 0);
      }, eR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : it({}, e);
        return s[u] = eR(e[u], t, a + 1, i), s;
      }, tR = function(e, t, a) {
        return eR(e, t, 0, a);
      }, SE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      V0 = function(e, t, a, i) {
        var u = SE(e, t);
        if (u !== null) {
          var s = tR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = ja(e, Ye);
          f !== null && mr(f, e, Ye, Xt);
        }
      }, I0 = function(e, t, a) {
        var i = SE(e, t);
        if (i !== null) {
          var u = X0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = it({}, e.memoizedProps);
          var s = ja(e, Ye);
          s !== null && mr(s, e, Ye, Xt);
        }
      }, B0 = function(e, t, a, i) {
        var u = SE(e, t);
        if (u !== null) {
          var s = Z0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = ja(e, Ye);
          f !== null && mr(f, e, Ye, Xt);
        }
      }, Y0 = function(e, t, a) {
        e.pendingProps = tR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ja(e, Ye);
        i !== null && mr(i, e, Ye, Xt);
      }, $0 = function(e, t) {
        e.pendingProps = X0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ja(e, Ye);
        a !== null && mr(a, e, Ye, Xt);
      }, W0 = function(e, t, a) {
        e.pendingProps = Z0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ja(e, Ye);
        i !== null && mr(i, e, Ye, Xt);
      }, Q0 = function(e) {
        var t = ja(e, Ye);
        t !== null && mr(t, e, Ye, Xt);
      }, q0 = function(e) {
        H0 = e;
      }, G0 = function(e) {
        P0 = e;
      };
    }
    function W1(e) {
      var t = Gr(e);
      return t === null ? null : t.stateNode;
    }
    function Q1(e) {
      return null;
    }
    function q1() {
      return ar;
    }
    function G1(e) {
      var t = e.findFiberByHostInstance, a = R.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: V0,
        overrideHookStateDeletePath: I0,
        overrideHookStateRenamePath: B0,
        overrideProps: Y0,
        overridePropsDeletePath: $0,
        overridePropsRenamePath: W0,
        setErrorHandler: q0,
        setSuspenseHandler: G0,
        scheduleUpdate: Q0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: W1,
        findFiberByHostInstance: t || Q1,
        // React Refresh
        findHostInstancesForRefresh: _1,
        scheduleRefresh: R1,
        scheduleRoot: w1,
        setRefreshHandler: T1,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: q1,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: hE
      });
    }
    var nR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function EE(e) {
      this._internalRoot = e;
    }
    Km.prototype.render = EE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xm(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = j0(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ev(e, t, null, null);
    }, Km.prototype.unmount = EE.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        v0() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          ev(null, e, null, null);
        }), nC(t);
      }
    };
    function K1(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      rR(e);
      var a = !1, i = !1, u = "", s = nR;
      t != null && (t.hydrate ? Ee("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === xr && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = U0(e, $h, null, a, i, u, s);
      jh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return lp(p), new EE(f);
    }
    function Km(e) {
      this._internalRoot = e;
    }
    function X1(e) {
      e && lh(e);
    }
    Km.prototype.unstable_scheduleHydration = X1;
    function J1(e, t, a) {
      if (!Xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      rR(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = nR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var g = z0(t, null, e, $h, i, s, f, p, v);
      if (jh(g.current, e), lp(e), u)
        for (var S = 0; S < u.length; S++) {
          var D = u[S];
          nx(g, D);
        }
      return new Km(g);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === Wr || e.nodeType === Yi || e.nodeType === od || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function rR(e) {
      e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Z1 = R.ReactCurrentOwner, aR;
    aR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = j0(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = CE(e), u = !!(i && Do(i));
      u && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Wr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function CE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function iR() {
    }
    function ek(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Gm(f);
            s.call(b);
          };
        }
        var f = z0(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          iR
        );
        e._reactRootContainer = f, jh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return lp(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var b = Gm(S);
            g.call(b);
          };
        }
        var S = U0(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          iR
        );
        e._reactRootContainer = S, jh(S.current, e);
        var D = e.nodeType === Ln ? e.parentNode : e;
        return lp(D), Yu(function() {
          ev(t, S, a, i);
        }), S;
      }
    }
    function tk(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Jm(e, t, a, i, u) {
      aR(a), tk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ek(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Gm(f);
            p.call(v);
          };
        }
        ev(t, f, e, u);
      }
      return Gm(f);
    }
    var lR = !1;
    function nk(e) {
      {
        lR || (lR = !0, E("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Z1.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Wr ? e : P1(e, "findDOMNode");
    }
    function rk(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Jm(null, e, t, !0, a);
    }
    function ak(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Jm(null, e, t, !1, a);
    }
    function ik(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Jm(e, t, a, !1, i);
    }
    var uR = !1;
    function lk(e) {
      if (uR || (uR = !0, E("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !tv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = CE(e), i = a && !Do(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Jm(null, null, e, !1, function() {
            e._reactRootContainer = null, nC(e);
          });
        }), !0;
      } else {
        {
          var u = CE(e), s = !!(u && Do(u)), f = e.nodeType === Wr && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(V1), Eo(I1), nh(B1), Ls(Ua), Bd(Zv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ec(ow), yy(JS, Jb, Yu);
    function uk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xm(t))
        throw new Error("Target container is not a DOM element.");
      return H1(e, t, null, a);
    }
    function ok(e, t, a, i) {
      return ik(e, t, a, i);
    }
    var TE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Rf, Hh, oo, Cc, JS]
    };
    function sk(e, t) {
      return TE.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), K1(e, t);
    }
    function ck(e, t, a) {
      return TE.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), J1(e, t, a);
    }
    function fk(e) {
      return v0() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var dk = G1({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: hE,
      rendererPackageName: "react-dom"
    });
    if (!dk && Dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var oR = window.location.protocol;
      /^(https?|file):$/.test(oR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (oR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TE, Ba.createPortal = uk, Ba.createRoot = sk, Ba.findDOMNode = nk, Ba.flushSync = fk, Ba.hydrate = rk, Ba.hydrateRoot = ck, Ba.render = ak, Ba.unmountComponentAtNode = lk, Ba.unstable_batchedUpdates = JS, Ba.unstable_renderSubtreeIntoContainer = ok, Ba.version = hE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ba;
}
var yR;
function Tk() {
  if (yR) return ey.exports;
  yR = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (C) {
        console.error(C);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), ey.exports = Ek()) : ey.exports = Ck(), ey.exports;
}
var gR;
function Rk() {
  if (gR) return qf;
  gR = 1;
  var y = Tk();
  if (process.env.NODE_ENV === "production")
    qf.createRoot = y.createRoot, qf.hydrateRoot = y.hydrateRoot;
  else {
    var C = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    qf.createRoot = function(R, Q) {
      C.usingClientEntryPoint = !0;
      try {
        return y.createRoot(R, Q);
      } finally {
        C.usingClientEntryPoint = !1;
      }
    }, qf.hydrateRoot = function(R, Q, ie) {
      C.usingClientEntryPoint = !0;
      try {
        return y.hydrateRoot(R, Q, ie);
      } finally {
        C.usingClientEntryPoint = !1;
      }
    };
  }
  return qf;
}
var wk = Rk();
const _k = {
  stringify: (y) => y ? "true" : "false",
  parse: (y) => /^[ty1-9]/i.test(y)
}, xk = {
  stringify: (y) => y.name,
  parse: (y, C, R) => {
    const Q = (() => {
      if (typeof window < "u" && y in window)
        return window[y];
      if (typeof global < "u" && y in global)
        return global[y];
    })();
    return typeof Q == "function" ? Q.bind(R) : void 0;
  }
}, bk = {
  stringify: (y) => JSON.stringify(y),
  parse: (y) => JSON.parse(y)
};
function kk(y) {
  return y.replace(
    /([a-z0-9])([A-Z])/g,
    (C, R, Q) => `${R}-${Q.toLowerCase()}`
  );
}
function Dk(y) {
  return y.replace(/[-:]([a-z])/g, (C, R) => `${R.toUpperCase()}`);
}
const SR = /* @__PURE__ */ Symbol.for("r2wc.bound"), Ok = {
  parse: (y, C, R) => {
    const Q = Dk(C), ie = R;
    if (typeof ie < "u" && Q in ie && typeof ie[Q] < "u") {
      let Ee = ie[Q];
      return SR in ie[Q] || (Ee = Ee.bind(ie), Object.defineProperty(Ee, SR, { value: !0 })), Ee;
    } else
      return;
  }
}, Lk = {
  stringify: (y) => `${y}`,
  parse: (y) => parseFloat(y)
}, Ak = {
  stringify: (y) => y,
  parse: (y) => y
}, _E = {
  string: Ak,
  number: Lk,
  boolean: _k,
  function: xk,
  method: Ok,
  json: bk
}, ny = /* @__PURE__ */ Symbol.for("r2wc.render"), ry = /* @__PURE__ */ Symbol.for("r2wc.connected"), uc = /* @__PURE__ */ Symbol.for("r2wc.context"), Jl = /* @__PURE__ */ Symbol.for("r2wc.props");
function Mk(y, C, R) {
  C.props || (C.props = y.propTypes ? Object.keys(y.propTypes) : []), C.events || (C.events = []);
  const Q = Array.isArray(C.props) ? C.props.slice() : Object.keys(C.props), ie = Array.isArray(C.events) ? C.events.slice() : Object.keys(C.events), Ee = {}, E = {}, He = {}, ee = {};
  for (const le of Q) {
    Ee[le] = Array.isArray(C.props) ? "string" : C.props[le];
    const $ = kk(le);
    He[le] = $, ee[$] = le;
  }
  for (const le of ie)
    E[le] = Array.isArray(C.events) ? {} : C.events[le];
  class re extends HTMLElement {
    static get observedAttributes() {
      return Object.keys(ee);
    }
    [ry] = !0;
    [uc];
    [Jl] = {};
    container;
    constructor() {
      super(), C.shadow ? this.container = this.attachShadow({
        mode: C.shadow
      }) : this.container = this, this[Jl].container = this.container;
      for (const $ of Q) {
        const pe = He[$], te = this.getAttribute(pe), be = Ee[$], $e = be ? _E[be] : null;
        $e?.parse && (te || be === "method") && (this[Jl][$] = $e.parse(te, pe, this));
      }
      for (const $ of ie)
        this[Jl][$] = (pe) => {
          const te = $.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(te, { detail: pe, ...E[$] })
          );
        };
    }
    connectedCallback() {
      this[ry] = !0, this[ny]();
    }
    disconnectedCallback() {
      this[ry] = !1, this[uc] && R.unmount(this[uc]), delete this[uc];
    }
    attributeChangedCallback($, pe, te) {
      const be = ee[$], $e = Ee[be], rt = $e ? _E[$e] : null;
      be in Ee && rt?.parse && (te || $e === "method") && (this[Jl][be] = rt.parse(te, $, this), this[ny]());
    }
    [ny]() {
      this[ry] && (this[uc] ? R.update(this[uc], this[Jl]) : this[uc] = R.mount(
        this.container,
        y,
        this[Jl]
      ));
    }
  }
  for (const le of Q) {
    const $ = He[le], pe = Ee[le];
    Object.defineProperty(re.prototype, le, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Jl][le];
      },
      set(te) {
        this[Jl][le] = te;
        const be = pe ? _E[pe] : null;
        if (be?.stringify) {
          const $e = be.stringify(te, $, this);
          this.getAttribute($) !== $e && ($e == null ? this.removeAttribute($) : this.setAttribute($, $e));
        } else
          le in Ee && be?.parse && (te || pe === "method") && (this[Jl][le] = be.parse(te, $, this)), this[ny]();
      }
    });
  }
  return re;
}
function Nk(y, C, R) {
  const Q = wk.createRoot(y), ie = bR.createElement(C, R);
  return Q.render(ie), {
    root: Q,
    ReactComponent: C
  };
}
function Uk({ root: y, ReactComponent: C }, R) {
  const Q = bR.createElement(C, R);
  y.render(Q);
}
function zk({ root: y }) {
  y.unmount();
}
function Fk(y, C = {}) {
  return Mk(y, C, { mount: Nk, update: Uk, unmount: zk });
}
var ay = { exports: {} }, rv = {};
var ER;
function jk() {
  if (ER) return rv;
  ER = 1;
  var y = uv(), C = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, ie = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(He, ee, re) {
    var le, $ = {}, pe = null, te = null;
    re !== void 0 && (pe = "" + re), ee.key !== void 0 && (pe = "" + ee.key), ee.ref !== void 0 && (te = ee.ref);
    for (le in ee) Q.call(ee, le) && !Ee.hasOwnProperty(le) && ($[le] = ee[le]);
    if (He && He.defaultProps) for (le in ee = He.defaultProps, ee) $[le] === void 0 && ($[le] = ee[le]);
    return { $$typeof: C, type: He, key: pe, ref: te, props: $, _owner: ie.current };
  }
  return rv.Fragment = R, rv.jsx = E, rv.jsxs = E, rv;
}
var av = {};
var CR;
function Hk() {
  return CR || (CR = 1, process.env.NODE_ENV !== "production" && (function() {
    var y = uv(), C = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ee = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), He = /* @__PURE__ */ Symbol.for("react.context"), ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), re = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.offscreen"), be = Symbol.iterator, $e = "@@iterator";
    function rt(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var Y = be && _[be] || _[$e];
      return typeof Y == "function" ? Y : null;
    }
    var Vt = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(_) {
      {
        for (var Y = arguments.length, ce = new Array(Y > 1 ? Y - 1 : 0), Se = 1; Se < Y; Se++)
          ce[Se - 1] = arguments[Se];
        We("error", _, ce);
      }
    }
    function We(_, Y, ce) {
      {
        var Se = Vt.ReactDebugCurrentFrame, et = Se.getStackAddendum();
        et !== "" && (Y += "%s", ce = ce.concat([et]));
        var Xe = ce.map(function(mt) {
          return String(mt);
        });
        Xe.unshift("Warning: " + Y), Function.prototype.apply.call(console[_], console, Xe);
      }
    }
    var ft = !1, we = !1, Ne = !1, Pe = !1, an = !1, jt;
    jt = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Jt(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === Q || _ === Ee || an || _ === ie || _ === re || _ === le || Pe || _ === te || ft || we || Ne || typeof _ == "object" && _ !== null && (_.$$typeof === pe || _.$$typeof === $ || _.$$typeof === E || _.$$typeof === He || _.$$typeof === ee || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === jt || _.getModuleId !== void 0));
    }
    function ln(_, Y, ce) {
      var Se = _.displayName;
      if (Se)
        return Se;
      var et = Y.displayName || Y.name || "";
      return et !== "" ? ce + "(" + et + ")" : ce;
    }
    function xt(_) {
      return _.displayName || "Context";
    }
    function Ue(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && lt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case Q:
          return "Fragment";
        case R:
          return "Portal";
        case Ee:
          return "Profiler";
        case ie:
          return "StrictMode";
        case re:
          return "Suspense";
        case le:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case He:
            var Y = _;
            return xt(Y) + ".Consumer";
          case E:
            var ce = _;
            return xt(ce._context) + ".Provider";
          case ee:
            return ln(_, _.render, "ForwardRef");
          case $:
            var Se = _.displayName || null;
            return Se !== null ? Se : Ue(_.type) || "Memo";
          case pe: {
            var et = _, Xe = et._payload, mt = et._init;
            try {
              return Ue(mt(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var zt = Object.assign, bt = 0, Dt, xe, ne, ke, oe, O, I;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Be() {
      {
        if (bt === 0) {
          Dt = console.log, xe = console.info, ne = console.warn, ke = console.error, oe = console.group, O = console.groupCollapsed, I = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        bt++;
      }
    }
    function dt() {
      {
        if (bt--, bt === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: zt({}, _, {
              value: Dt
            }),
            info: zt({}, _, {
              value: xe
            }),
            warn: zt({}, _, {
              value: ne
            }),
            error: zt({}, _, {
              value: ke
            }),
            group: zt({}, _, {
              value: oe
            }),
            groupCollapsed: zt({}, _, {
              value: O
            }),
            groupEnd: zt({}, _, {
              value: I
            })
          });
        }
        bt < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = Vt.ReactCurrentDispatcher, at;
    function ot(_, Y, ce) {
      {
        if (at === void 0)
          try {
            throw Error();
          } catch (et) {
            var Se = et.stack.trim().match(/\n( *(at )?)/);
            at = Se && Se[1] || "";
          }
        return `
` + at + _;
      }
    }
    var pt = !1, It;
    {
      var Dn = typeof WeakMap == "function" ? WeakMap : Map;
      It = new Dn();
    }
    function wr(_, Y) {
      if (!_ || pt)
        return "";
      {
        var ce = It.get(_);
        if (ce !== void 0)
          return ce;
      }
      var Se;
      pt = !0;
      var et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = ut.current, ut.current = null, Be();
      try {
        if (Y) {
          var mt = function() {
            throw Error();
          };
          if (Object.defineProperty(mt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(mt, []);
            } catch (tt) {
              Se = tt;
            }
            Reflect.construct(_, [], mt);
          } else {
            try {
              mt.call();
            } catch (tt) {
              Se = tt;
            }
            _.call(mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            Se = tt;
          }
          _();
        }
      } catch (tt) {
        if (tt && Se && typeof tt.stack == "string") {
          for (var vt = tt.stack.split(`
`), Tn = Se.stack.split(`
`), tn = vt.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && vt[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (vt[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || vt[tn] !== Tn[on]) {
                    var rr = `
` + vt[tn].replace(" at new ", " at ");
                    return _.displayName && rr.includes("<anonymous>") && (rr = rr.replace("<anonymous>", _.displayName)), typeof _ == "function" && It.set(_, rr), rr;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        pt = !1, ut.current = Xe, dt(), Error.prepareStackTrace = et;
      }
      var Qa = _ ? _.displayName || _.name : "", qa = Qa ? ot(Qa) : "";
      return typeof _ == "function" && It.set(_, qa), qa;
    }
    function En(_, Y, ce) {
      return wr(_, !1);
    }
    function tr(_) {
      var Y = _.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Pn(_, Y, ce) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return wr(_, tr(_));
      if (typeof _ == "string")
        return ot(_);
      switch (_) {
        case re:
          return ot("Suspense");
        case le:
          return ot("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case ee:
            return En(_.render);
          case $:
            return Pn(_.type, Y, ce);
          case pe: {
            var Se = _, et = Se._payload, Xe = Se._init;
            try {
              return Pn(Xe(et), Y, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Vn = Object.prototype.hasOwnProperty, Yr = {}, si = Vt.ReactDebugCurrentFrame;
    function oa(_) {
      if (_) {
        var Y = _._owner, ce = Pn(_.type, _._source, Y ? Y.type : null);
        si.setExtraStackFrame(ce);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(_, Y, ce, Se, et) {
      {
        var Xe = Function.call.bind(Vn);
        for (var mt in _)
          if (Xe(_, mt)) {
            var vt = void 0;
            try {
              if (typeof _[mt] != "function") {
                var Tn = Error((Se || "React class") + ": " + ce + " type `" + mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              vt = _[mt](Y, mt, Se, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              vt = tn;
            }
            vt && !(vt instanceof Error) && (oa(et), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", ce, mt, typeof vt), oa(null)), vt instanceof Error && !(vt.message in Yr) && (Yr[vt.message] = !0, oa(et), lt("Failed %s type: %s", ce, vt.message), oa(null));
          }
      }
    }
    var Cn = Array.isArray;
    function In(_) {
      return Cn(_);
    }
    function yr(_) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ce = Y && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ce;
      }
    }
    function Ya(_) {
      try {
        return On(_), !1;
      } catch {
        return !0;
      }
    }
    function On(_) {
      return "" + _;
    }
    function gr(_) {
      if (Ya(_))
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(_)), On(_);
    }
    var sa = Vt.ReactCurrentOwner, $a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ae;
    function De(_) {
      if (Vn.call(_, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function st(_) {
      if (Vn.call(_, "key")) {
        var Y = Object.getOwnPropertyDescriptor(_, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Ft(_, Y) {
      typeof _.ref == "string" && sa.current;
    }
    function Zt(_, Y) {
      {
        var ce = function() {
          ci || (ci = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ce.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function pn(_, Y) {
      {
        var ce = function() {
          ae || (ae = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ce.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var un = function(_, Y, ce, Se, et, Xe, mt) {
      var vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: _,
        key: Y,
        ref: ce,
        props: mt,
        // Record the component responsible for creating this element.
        _owner: Xe
      };
      return vt._store = {}, Object.defineProperty(vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: et
      }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
    };
    function Gn(_, Y, ce, Se, et) {
      {
        var Xe, mt = {}, vt = null, Tn = null;
        ce !== void 0 && (gr(ce), vt = "" + ce), st(Y) && (gr(Y.key), vt = "" + Y.key), De(Y) && (Tn = Y.ref, Ft(Y, et));
        for (Xe in Y)
          Vn.call(Y, Xe) && !$a.hasOwnProperty(Xe) && (mt[Xe] = Y[Xe]);
        if (_ && _.defaultProps) {
          var tn = _.defaultProps;
          for (Xe in tn)
            mt[Xe] === void 0 && (mt[Xe] = tn[Xe]);
        }
        if (vt || Tn) {
          var on = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          vt && Zt(mt, on), Tn && pn(mt, on);
        }
        return un(_, vt, Tn, et, Se, sa.current, mt);
      }
    }
    var en = Vt.ReactCurrentOwner, Bt = Vt.ReactDebugCurrentFrame;
    function Yt(_) {
      if (_) {
        var Y = _._owner, ce = Pn(_.type, _._source, Y ? Y.type : null);
        Bt.setExtraStackFrame(ce);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Sr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === C;
    }
    function Ra() {
      {
        if (en.current) {
          var _ = Ue(en.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function ji(_) {
      return "";
    }
    var Zl = {};
    function eu(_) {
      {
        var Y = Ra();
        if (!Y) {
          var ce = typeof _ == "string" ? _ : _.displayName || _.name;
          ce && (Y = `

Check the top-level render call using <` + ce + ">.");
        }
        return Y;
      }
    }
    function dl(_, Y) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ce = eu(Y);
        if (Zl[ce])
          return;
        Zl[ce] = !0;
        var Se = "";
        _ && _._owner && _._owner !== en.current && (Se = " It was passed a child from " + Ue(_._owner.type) + "."), Yt(_), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, Se), Yt(null);
      }
    }
    function pl(_, Y) {
      {
        if (typeof _ != "object")
          return;
        if (In(_))
          for (var ce = 0; ce < _.length; ce++) {
            var Se = _[ce];
            Sr(Se) && dl(Se, Y);
          }
        else if (Sr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var et = rt(_);
          if (typeof et == "function" && et !== _.entries)
            for (var Xe = et.call(_), mt; !(mt = Xe.next()).done; )
              Sr(mt.value) && dl(mt.value, Y);
        }
      }
    }
    function tu(_) {
      {
        var Y = _.type;
        if (Y == null || typeof Y == "string")
          return;
        var ce;
        if (typeof Y == "function")
          ce = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === ee || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === $))
          ce = Y.propTypes;
        else
          return;
        if (ce) {
          var Se = Ue(Y);
          qn(ce, _.props, "prop", Se, _);
        } else if (Y.PropTypes !== void 0 && !ca) {
          ca = !0;
          var et = Ue(Y);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", et || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(_) {
      {
        for (var Y = Object.keys(_.props), ce = 0; ce < Y.length; ce++) {
          var Se = Y[ce];
          if (Se !== "children" && Se !== "key") {
            Yt(_), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Yt(null);
            break;
          }
        }
        _.ref !== null && (Yt(_), lt("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var xr = {};
    function nr(_, Y, ce, Se, et, Xe) {
      {
        var mt = Jt(_);
        if (!mt) {
          var vt = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = ji();
          Tn ? vt += Tn : vt += Ra();
          var tn;
          _ === null ? tn = "null" : In(_) ? tn = "array" : _ !== void 0 && _.$$typeof === C ? (tn = "<" + (Ue(_.type) || "Unknown") + " />", vt = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof _, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, vt);
        }
        var on = Gn(_, Y, ce, et, Xe);
        if (on == null)
          return on;
        if (mt) {
          var rr = Y.children;
          if (rr !== void 0)
            if (Se)
              if (In(rr)) {
                for (var Qa = 0; Qa < rr.length; Qa++)
                  pl(rr[Qa], _);
                Object.freeze && Object.freeze(rr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(rr, _);
        }
        if (Vn.call(Y, "key")) {
          var qa = Ue(_), tt = Object.keys(Y).filter(function(nu) {
            return nu !== "key";
          }), it = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xr[qa + it]) {
            var Ga = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            lt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, qa, Ga, qa), xr[qa + it] = !0;
          }
        }
        return _ === Q ? _r(on) : tu(on), on;
      }
    }
    function fi(_, Y, ce) {
      return nr(_, Y, ce, !0);
    }
    function Wa(_, Y, ce) {
      return nr(_, Y, ce, !1);
    }
    var di = Wa, pi = fi;
    av.Fragment = Q, av.jsx = di, av.jsxs = pi;
  })()), av;
}
var TR;
function Pk() {
  return TR || (TR = 1, process.env.NODE_ENV === "production" ? ay.exports = jk() : ay.exports = Hk()), ay.exports;
}
var iv = Pk(), Vk = Object.defineProperty, Ik = (y, C, R) => C in y ? Vk(y, C, { enumerable: !0, configurable: !0, writable: !0, value: R }) : y[C] = R, Br = (y, C, R) => Ik(y, typeof C != "symbol" ? C + "" : C, R), Gf = "avaya_oauth_in_progress", kE = "avaya_oauth_coordination", Kf = null, Xf = null, iy = {
  authorizationEndpoint: "/auth/realms/avaya/protocol/openid-connect/auth",
  tokenEndpoint: "/auth/realms/avaya/protocol/openid-connect/token",
  clientId: "infinity-elements-get-avaya-jwt",
  scopes: []
};
function Bk(y) {
  if (y && y.startsWith("http"))
    try {
      const R = new URL(y);
      return console.log("[KeycloakAuth] Using origin from hint URL:", R.origin), R.origin;
    } catch {
    }
  const C = window.location.origin;
  if (C && C !== "null")
    return C;
  if (document.referrer)
    try {
      const R = new URL(document.referrer);
      return console.log(
        "[KeycloakAuth] Using origin from document.referrer:",
        R.origin
      ), R.origin;
    } catch {
    }
  return console.warn(
    "[KeycloakAuth] Could not determine host origin, falling back to localhost"
  ), "http://localhost";
}
function RR(y) {
  const C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", R = new Uint8Array(y);
  return crypto.getRandomValues(R), Array.from(R).map((Q) => C[Q % C.length]).join("");
}
async function Yk(y) {
  const R = new TextEncoder().encode(y), Q = await crypto.subtle.digest("SHA-256", R);
  return btoa(String.fromCharCode(...new Uint8Array(Q))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function $k(y) {
  if (y)
    return console.log("[KeycloakAuth] Using provided redirect_uri:", y), y;
  const C = "http://localhost:3000/redirect.html";
  return console.log("[KeycloakAuth] Using default redirect_uri:", C), C;
}
async function Wk(y, C, R) {
  return Qk(y, C, R);
}
function Qk(y, C, R) {
  return new Promise((Q, ie) => {
    const Ee = `refresh_${Date.now()}_${Math.random().toString(36).slice(2)}`, E = setTimeout(() => {
      window.removeEventListener("message", He), ie(new Error("Token refresh timed out - host did not respond"));
    }, 3e4), He = (ee) => {
      if (ee.data?.type === "api-response" && ee.data?.requestId === Ee)
        if (clearTimeout(E), window.removeEventListener("message", He), ee.data.success) {
          console.log("[KeycloakAuth] Token refresh via host succeeded");
          const re = ee.data.data;
          Q({
            access_token: re.access_token,
            refresh_token: re.refresh_token,
            expires_in: re.expires_in,
            refresh_expires_in: re.refresh_expires_in,
            token_type: re.token_type
          });
        } else {
          const re = ee.data.error, le = typeof re == "string" ? re : re?.message || "Token refresh failed";
          console.error(
            "[KeycloakAuth] Token refresh via host failed:",
            le
          ), ie(new Error(le));
        }
    };
    window.addEventListener("message", He), console.log("[KeycloakAuth] Sending token refresh request to host", {
      tokenEndpoint: C
    }), window.parent.postMessage(
      {
        type: "api-request",
        requestId: Ee,
        method: "refreshToken",
        params: {
          refreshToken: y,
          tokenEndpoint: C,
          clientId: R
        }
      },
      "*"
    );
  });
}
function qk(y, C) {
  console.log("[KeycloakAuth] storeTokenData called with:", {
    hasAccessToken: !!y.access_token,
    hasRefreshToken: !!y.refresh_token,
    expires_in: y.expires_in,
    expires_in_type: typeof y.expires_in,
    refresh_expires_in: y.refresh_expires_in,
    refresh_expires_in_type: typeof y.refresh_expires_in
  });
  const R = Date.now(), Q = {
    accessToken: y.access_token,
    refreshToken: y.refresh_token,
    expiresAt: y.expires_in ? R + y.expires_in * 1e3 : void 0,
    refreshExpiresAt: y.refresh_expires_in ? R + y.refresh_expires_in * 1e3 : void 0
  };
  return console.log("[KeycloakAuth] Storing tokenData:", {
    hasAccessToken: !!Q.accessToken,
    hasRefreshToken: !!Q.refreshToken,
    expiresAt: Q.expiresAt,
    refreshExpiresAt: Q.refreshExpiresAt
  }), localStorage.setItem(C, JSON.stringify(Q)), Q;
}
function ly(y) {
  try {
    const C = localStorage.getItem(y);
    return C ? C.startsWith("{") ? JSON.parse(C) : {
      accessToken: C
      // No expiration info available
    } : null;
  } catch (C) {
    return console.error("[KeycloakAuth] Failed to parse stored token data:", C), null;
  }
}
function Gk(y) {
  if (!y.expiresAt)
    return !1;
  const C = Date.now(), R = 60 * 1e3;
  return C >= y.expiresAt - R;
}
function wR(y) {
  return y.refreshExpiresAt ? Date.now() >= y.refreshExpiresAt : !1;
}
function _R(y, C, R) {
  return new Promise((Q, ie) => {
    const Ee = ly(y);
    if (Ee) {
      R && console.log(
        "[KeycloakAuth] Token data already in localStorage (found while setting up wait)"
      ), Q(Ee.accessToken);
      return;
    }
    const E = setTimeout(() => {
      He(), clearInterval(ee), ie(
        new Error(
          "OAuth flow timed out after 12s - the primary iframe may have failed. Clear localStorage and retry."
        )
      );
    }, 12e3), He = C((re) => {
      const le = re;
      if (!(!le || le?.type !== kE))
        if (R && console.log(
          "[KeycloakAuth] Received OAuth broadcast from primary iframe",
          le
        ), le.status === "success") {
          clearTimeout(E), clearInterval(ee), He();
          const $ = le.tokenData;
          localStorage.setItem(y, JSON.stringify($)), Q($.accessToken);
        } else le.status === "error" && (clearTimeout(E), clearInterval(ee), He(), ie(new Error(le.error || "OAuth flow failed")));
    }), ee = setInterval(() => {
      if (!localStorage.getItem(Gf)) {
        const le = ly(y);
        le && (clearTimeout(E), clearInterval(ee), He(), R && console.log(
          "[KeycloakAuth] Found token data in localStorage (polling fallback)"
        ), Q(le.accessToken));
      }
    }, 500);
  });
}
async function Kk(y) {
  const C = y.jwtStorageKey || "avaya_jwt", R = y.debug || !1;
  console.log("[KeycloakAuth] fetchJwtFromKeycloak called", {
    debug: R,
    jwtStorageKey: C
  });
  const Q = localStorage.getItem(Gf);
  if (Q) {
    const E = parseInt(Q, 10), ee = Date.now() - E;
    if (ee > 12e4)
      console.log(
        `[KeycloakAuth] OAuth flag is stale (${Math.round(
          ee / 1e3
        )}s old), clearing and retrying`
      ), localStorage.removeItem(Gf);
    else
      return console.log(
        `[KeycloakAuth] OAuth already in progress in another iframe (${Math.round(
          ee / 1e3
        )}s ago), waiting...`
      ), _R(C, y.onMessage, R);
  }
  const ie = Date.now().toString();
  localStorage.setItem(Gf, ie), await new Promise((E) => setTimeout(E, 10));
  const Ee = localStorage.getItem(Gf);
  if (Ee !== ie) {
    const E = parseInt(Ee || "0", 10), He = parseInt(ie, 10);
    if (E < He)
      return R && console.log(
        "[KeycloakAuth] Lost race to another iframe (timestamp resolution), waiting instead"
      ), _R(C, y.onMessage, R);
  }
  R && console.log(
    "[KeycloakAuth] This iframe is now the primary OAuth handler (won race if any)"
  );
  try {
    const E = await Xk(y), He = qk(E, C);
    return y.sendMessage({
      type: kE,
      status: "success",
      tokenData: He
    }), R && console.log("[KeycloakAuth] Broadcasted OAuth success to all iframes"), He.accessToken;
  } catch (E) {
    throw y.sendMessage({
      type: kE,
      status: "error",
      error: E instanceof Error ? E.message : "OAuth failed"
    }), E;
  } finally {
    localStorage.removeItem(Gf), Kf = null, Xf = null;
  }
}
async function Xk(y) {
  console.log("[KeycloakAuth] performOAuthFlow called");
  const C = y.keycloakConfig?.authorizationEndpoint || iy.authorizationEndpoint, R = y.keycloakConfig?.tokenEndpoint || iy.tokenEndpoint, Q = y.keycloakConfig?.clientId || iy.clientId, ie = y.keycloakConfig?.scopes || iy.scopes, Ee = $k(y.redirectUri), E = ie.length > 0 ? ie.join(" ") : void 0;
  console.log("[KeycloakAuth] OAuth flow configuration:", {
    redirectUri: Ee,
    authorizationEndpoint: C,
    tokenEndpoint: R,
    clientId: Q,
    scopes: ie
  });
  const He = RR(128), ee = await Yk(He);
  Kf = {
    tokenEndpoint: R,
    clientId: Q,
    redirectUri: Ee,
    authMethod: "none"
    // Keycloak public clients use "none" (client_id in body only)
  }, Xf = He;
  const re = Bk(Ee), le = C.startsWith("http") ? new URL(C) : new URL(C, re);
  le.searchParams.set("client_id", Q), le.searchParams.set("redirect_uri", Ee), le.searchParams.set("response_type", "code"), E && le.searchParams.set("scope", E), le.searchParams.set("code_challenge", ee), le.searchParams.set("code_challenge_method", "S256"), le.searchParams.set("state", RR(16));
  const $ = y.popupOptions?.width ?? 500, pe = y.popupOptions?.height ?? 600, te = y.popupOptions?.left ?? 100, be = y.popupOptions?.top ?? 100, $e = `width=${$},height=${pe},left=${te},top=${be}`;
  return y.debug && console.log("[KeycloakAuth] Opening popup with features:", $e), new Promise((rt, Vt) => {
    console.log("[KeycloakAuth] Opening OAuth popup");
    const lt = window.open(le.toString(), "oauth_popup", $e);
    if (!lt) {
      Kf = null, Xf = null, Vt(new Error("Popup blocked! Please allow popups for this site."));
      return;
    }
    const We = async (we) => {
      if (we.data.type === "oauth-config-request") {
        if (console.log("[KeycloakAuth] redirect.html requested OAuth config"), !Kf || !Xf) {
          console.error("[KeycloakAuth] No pending OAuth config");
          return;
        }
        we.source && (we.source.postMessage(
          {
            type: "oauth-config-response",
            config: Kf,
            codeVerifier: Xf
          },
          "*"
        ), console.log("[KeycloakAuth] Sent OAuth config to redirect.html"));
        return;
      }
      if (we.data.type === "oauth-callback") {
        console.log(
          "[KeycloakAuth] Received OAuth callback from redirect.html"
        ), window.removeEventListener("message", We), clearInterval(ft);
        const Ne = we.data.params || {};
        if (Ne.error) {
          console.error(
            "[KeycloakAuth] OAuth error:",
            Ne.error_description
          ), Vt(new Error(Ne.error_description || Ne.error));
          return;
        }
        if (Ne.access_token) {
          console.log("[KeycloakAuth] Token received from redirect.html"), console.log(
            "[KeycloakAuth] params.expires_in:",
            Ne.expires_in,
            "type:",
            typeof Ne.expires_in
          ), console.log(
            "[KeycloakAuth] params.refresh_expires_in:",
            Ne.refresh_expires_in,
            "type:",
            typeof Ne.refresh_expires_in
          );
          const Pe = {
            access_token: Ne.access_token,
            refresh_token: Ne.refresh_token,
            expires_in: Ne.expires_in,
            refresh_expires_in: Ne.refresh_expires_in,
            token_type: Ne.token_type || "bearer",
            id_token: Ne.id_token
          };
          console.log(
            "[KeycloakAuth] Resolving with tokenResponse:",
            Pe
          ), rt(Pe);
          return;
        }
        Vt(new Error("No access token received from redirect.html"));
      }
    };
    window.addEventListener("message", We);
    const ft = setInterval(() => {
      lt.closed && (clearInterval(ft), window.removeEventListener("message", We), Kf = null, Xf = null, Vt(new Error("OAuth popup was closed before completing")));
    }, 500);
  });
}
var $o = {
  // Event channels from core-agent-ui
  INTERACTION_STATUS_CHANGED: "interaction-status-changed",
  INTERACTION_ENDED: "on-interaction-ended",
  INTERACTION_ACCEPTED: "on-interaction-accepted",
  INTERACTION_UPDATED: "on-interaction-updated",
  CONSULT_STATUS_CHANGED: "consult-status-changed",
  COMPLETE_AS_CONFERENCE: "on-complete-as-conference",
  FEED_MESSAGE: "feed-message",
  AGENT_STATE_CHANGED: "agent-state-changed"
}, Jk = class {
  constructor() {
    Br(this, "interactionStatusChangedListeners", /* @__PURE__ */ new Set()), Br(this, "interactionEndedListeners", /* @__PURE__ */ new Set()), Br(this, "interactionAcceptedListeners", /* @__PURE__ */ new Set()), Br(this, "interactionUpdatedListeners", /* @__PURE__ */ new Set()), Br(this, "consultStatusChangedListeners", /* @__PURE__ */ new Set()), Br(this, "completeAsConferenceListeners", /* @__PURE__ */ new Set()), Br(this, "feedMessageListeners", /* @__PURE__ */ new Set()), Br(this, "errorListeners", /* @__PURE__ */ new Set()), Br(this, "agentStateChangedListeners", /* @__PURE__ */ new Set());
  }
  /**
   * Debug logging - no-op by default, overridden by ElementAPI subclass
   */
  log(y, C) {
  }
  /**
   * Handle an incoming window message and dispatch to appropriate listeners.
   * @returns true if the message was handled as an event, false otherwise.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMessage(y) {
    if (y.type === "on-error") {
      const C = y.error ?? y.data?.error, R = C && typeof C == "object" ? {
        code: C.code ?? "UNKNOWN_ERROR",
        message: C.message ?? "Unknown error",
        details: C.details
      } : {
        code: "UNKNOWN_ERROR",
        message: typeof C == "string" ? C : "Unknown error"
      };
      return this.log("Received broadcast error", R), this.errorListeners.forEach((Q) => {
        try {
          Q(R);
        } catch (ie) {
          this.log("Error in error callback", ie);
        }
      }), !0;
    }
    return y.type === $o.INTERACTION_STATUS_CHANGED ? (this.log("Interaction status changed", y), this.interactionStatusChangedListeners.forEach((C) => {
      try {
        C({
          interactionId: y.interactionId,
          status: y.status
        });
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.INTERACTION_ENDED ? (this.log("Interaction ended", y.interactionId), this.interactionEndedListeners.forEach((C) => {
      try {
        C(y.interactionId);
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.INTERACTION_ACCEPTED ? (this.log("Interaction accepted", y.interactionId), this.interactionAcceptedListeners.forEach((C) => {
      try {
        C(y.interactionId);
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.INTERACTION_UPDATED ? (this.log("Interaction updated", y), this.interactionUpdatedListeners.forEach((C) => {
      try {
        C({
          interactionId: y.interactionId,
          event: y.event,
          payload: y.payload
        });
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.CONSULT_STATUS_CHANGED ? (this.log("Consult status changed", y), this.consultStatusChangedListeners.forEach((C) => {
      try {
        C({
          interactionId: y.interactionId,
          consultStatus: y.consultStatus,
          consultParty: y.consultParty,
          error: y.error
        });
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.COMPLETE_AS_CONFERENCE ? (this.log("Complete as conference", y), this.completeAsConferenceListeners.forEach((C) => {
      try {
        C({
          interactionId: y.interactionId
        });
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.FEED_MESSAGE ? (this.log("Received feed message", y), this.feedMessageListeners.forEach((C) => {
      try {
        C(y, y.interactionId);
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : y.type === $o.AGENT_STATE_CHANGED ? (this.log("Agent state changed", y), this.agentStateChangedListeners.forEach((C) => {
      try {
        C({
          previousState: y.previousState,
          currentState: y.currentState,
          reason: y.reason
        });
      } catch (R) {
        this.log("Error in callback", R);
      }
    }), !0) : !1;
  }
  // Event subscription methods
  /**
   * Subscribe to interaction status changes
   *
   * Fires when the status of an interaction changes (e.g., alerting, connected, held)
   *
   * @param callback - Function to call when interaction status changes
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * const unsubscribe = api.onInteractionStatusChanged(({ interactionId, status }) => {
   *   console.log(`Interaction ${interactionId} status changed to ${status}`);
   * });
   *
   * // Later, to unsubscribe:
   * unsubscribe();
   * ```
   */
  onInteractionStatusChanged(y) {
    return this.interactionStatusChangedListeners.add(y), () => this.interactionStatusChangedListeners.delete(y);
  }
  /**
   * Subscribe to interaction accepted events
   *
   * Fires when an agent accepts an incoming interaction
   *
   * @param callback - Function to call when an interaction is accepted
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onInteractionAccepted((interactionId) => {
   *   console.log('Accepted interaction:', interactionId);
   *   // Load customer data, show interaction UI, etc.
   * });
   * ```
   */
  onInteractionAccepted(y) {
    return this.interactionAcceptedListeners.add(y), () => this.interactionAcceptedListeners.delete(y);
  }
  /**
   * Subscribe to interaction ended events
   *
   * Fires when an interaction is ended or disconnected
   *
   * @param callback - Function to call when an interaction ends
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onInteractionEnded((interactionId) => {
   *   console.log('Interaction ended:', interactionId);
   *   // Clean up UI, save data, etc.
   * });
   * ```
   */
  onInteractionEnded(y) {
    return this.interactionEndedListeners.add(y), () => this.interactionEndedListeners.delete(y);
  }
  /**
   * Subscribe to interaction updated events
   *
   * Fires when an interaction is updated with new information
   *
   * @param callback - Function to call when an interaction is updated
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onInteractionUpdated(({ interactionId, payload }) => {
   *   console.log('Interaction updated:', interactionId);
   *   console.log('New data:', payload);
   * });
   * ```
   */
  onInteractionUpdated(y) {
    return this.interactionUpdatedListeners.add(y), () => this.interactionUpdatedListeners.delete(y);
  }
  /**
   * Subscribe to consult status changes
   *
   * Fires when the status of a consultation changes
   *
   * @param callback - Function to call when consult status changes
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onConsultStatusChanged(({ interactionId, consultStatus, consultParty }) => {
   *   console.log(`Consult ${consultStatus} with ${consultParty}`);
   * });
   * ```
   */
  onConsultStatusChanged(y) {
    return this.consultStatusChangedListeners.add(y), () => this.consultStatusChangedListeners.delete(y);
  }
  /**
   * Subscribe to complete as conference events
   *
   * Fires when an interaction is completed as a conference
   *
   * @param callback - Function to call when an interaction is completed as a conference
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onCompleteAsConference(({ interactionId }) => {
   *   console.log(`Interaction ${interactionId} completed as conference`);
   * });
   * ```
   */
  onCompleteAsConference(y) {
    return this.completeAsConferenceListeners.add(y), () => this.completeAsConferenceListeners.delete(y);
  }
  /**
   * Subscribe to feed messages
   *
   * Fires when a new message is received in the interaction feed
   *
   * @param callback - Function to call when a feed message is received.
   *   Receives (message: Message, interactionId?: string)
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onReceivedFeedMessage((message, interactionId) => {
   *   console.log('New message:', message.text, 'for interaction:', interactionId);
   * });
   * ```
   */
  onReceivedFeedMessage(y) {
    return this.feedMessageListeners.add(y), () => this.feedMessageListeners.delete(y);
  }
  /**
   * Subscribe to error events
   *
   * Fires when an error occurs in the API
   *
   * @param callback - Function to call when an error occurs
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onError((error) => {
   *   console.error('API Error:', error.code, error.message);
   *   // Display error notification to user
   * });
   * ```
   */
  onError(y) {
    return this.errorListeners.add(y), () => this.errorListeners.delete(y);
  }
  /**
   * Subscribe to agent state changed events
   *
   * Fires when the agent's state changes (e.g., Available, Away, Busy)
   *
   * @param callback - Function to call when agent state changes.
   *   Receives { previousState, currentState, reason? }
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * api.onChangedAgentState(({ previousState, currentState, reason }) => {
   *   console.log(`Agent state changed from ${previousState} to ${currentState}`);
   *   if (reason) console.log(`Reason: ${reason}`);
   * });
   * ```
   */
  onChangedAgentState(y) {
    return this.agentStateChangedListeners.add(y), () => this.agentStateChangedListeners.delete(y);
  }
  /**
   * Clear all event listeners
   */
  destroyEventListeners() {
    this.interactionStatusChangedListeners.clear(), this.interactionAcceptedListeners.clear(), this.interactionEndedListeners.clear(), this.interactionUpdatedListeners.clear(), this.consultStatusChangedListeners.clear(), this.completeAsConferenceListeners.clear(), this.feedMessageListeners.clear(), this.errorListeners.clear(), this.agentStateChangedListeners.clear();
  }
};
function Zk() {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}
var eD = class extends Jk {
  /**
   * Creates a new ElementAPI instance
   *
   * @example
   * ```typescript
   * const api = new ElementAPI({
   *   elementId: 'my-custom-element',
   *   timeout: 10000,
   *   debug: true
   * });
   * ```
   */
  constructor(y = {}) {
    super(), Br(this, "elementId"), Br(this, "timeout"), Br(this, "debug"), Br(this, "requestTarget"), Br(this, "windowMessageHandler", null), Br(this, "interElementMessageListeners", /* @__PURE__ */ new Set()), Br(this, "pendingApiRequests", /* @__PURE__ */ new Map()), Br(this, "JWT_STORAGE_KEY", "avaya_jwt"), this.elementId = y.elementId || `element_${Date.now()}`, this.timeout = y.timeout || 5e3, this.debug = y.debug || !1, this.requestTarget = y.requestTarget ?? null, this.log("Initializing ElementAPI", { elementId: this.elementId }), this.setupWindowMessageListener();
  }
  /**
   * Clean up resources when the React component is unmounted or no longer needed
   *
   * Removes all event listeners, closes channels, and clears pending requests.
   * Call this method in your React component's cleanup/unmount lifecycle.
   *
   * @example
   * ```typescript
   * // In a React component
   * useEffect(() => {
   *   const api = new ElementAPI();
   *   return () => {
   *     api.destroy(); // Cleanup on unmount
   *   };
   * }, []);
   * ```
   */
  destroy() {
    this.log("Destroying ElementAPI"), this.pendingApiRequests.forEach(({ reject: y, timeout: C }) => {
      clearTimeout(C), y(new Error("ElementAPI destroyed"));
    }), this.pendingApiRequests.clear(), this.windowMessageHandler && (window.removeEventListener("message", this.windowMessageHandler), this.windowMessageHandler = null), this.destroyEventListeners(), this.interElementMessageListeners.clear();
  }
  // API Methods
  /**
   * Get information about the current active interaction
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to the interaction information
   * @throws Error if no active interaction exists
   *
   * @example Interaction-level widget (no interactionId needed)
   * ```typescript
   * try {
   *   const interaction = await api.getInteraction();
   *   console.log('Interaction ID:', interaction.interactionId);
   *   console.log('Customer:', interaction.customer?.name);
   *   console.log('Status:', interaction.status);
   * } catch (error) {
   *   console.error('No active interaction');
   * }
   * ```
   *
   * @example App-level widget (interactionId required)
   * ```typescript
   * const interaction = await api.getInteraction({ interactionId: 'int-123' });
   * console.log('Status:', interaction.status);
   * ```
   */
  async getInteraction(y) {
    return this.sendApiRequest(
      "getInteraction",
      y || {}
    );
  }
  /**
   * Get information about the current logged-in user/agent
   *
   * @returns Promise resolving to the user information including agent status, queues, and profile
   *
   * @example
   * ```typescript
   * const userInfo = await api.getUserInfo();
   * console.log('Agent:', userInfo.firstName, userInfo.lastName);
   * console.log('Queues:', userInfo.queues);
   * console.log('Email:', userInfo.email);
   * ```
   */
  async getUserInfo() {
    return this.sendApiRequest("getUserInfo", {});
  }
  /**
   * Get user interactions including owned and viewing interactions
   *
   * Retrieves all active interactions for the current or specified user,
   * including interactions they own and ones they are viewing.
   * Optionally includes queue and user details.
   *
   * @param params - Optional parameters
   * @param params.userId - User ID to get interactions for (defaults to current user)
   * @param params.details - Include queue and user details (defaults to true)
   * @returns Promise resolving to user interactions data
   *
   * @example
   * ```typescript
   * // Get current user's interactions with full details
   * const result = await api.getUserInteractions({ details: true });
   * console.log('Owned interactions:', result.interactions);
   * console.log('Viewing interactions:', result.viewing);
   * console.log('Logged in queues:', result.queue.loggedIn);
   * ```
   *
   * @example
   * ```typescript
   * // Get interactions without queue/user details for better performance
   * const result = await api.getUserInteractions({ details: false });
   * const totalCount = result.interactions.length + result.viewing.length;
   * console.log('Total active interactions:', totalCount);
   * ```
   */
  async getUserInteractions(y) {
    return this.sendApiRequest(
      "getUserInteractions",
      y || {}
    );
  }
  /**
   * Get a list of users in Infinity
   *
   * Returns users available for transfer or consult operations. Returns up to 100 users.
   *
   * - **App Level (sidebar widgets):** Provide `interactionId` parameter
   * - **Interaction Level (interaction widgets):** Omit `interactionId`, uses interaction context automatically
   *
   * @param params - Optional parameters
   * @param params.interactionId - Required for app-level widgets, optional for interaction-level widgets
   * @param params.filter - Optional substring search against user name fields
   * @returns Promise resolving to array of user information
   *
   * @example Get all users (interaction level - no interactionId needed)
   * ```typescript
   * const users = await api.getUsers();
   * users.forEach(user => {
   *   console.log(`${user.fullName} - ${user.cxStatus.status} - ${user.presence}`);
   * });
   * ```
   *
   * @example Get filtered users by name (interaction level)
   * ```typescript
   * const users = await api.getUsers({ filter: 'john' });
   * console.log('Found users:', users.map(u => u.fullName));
   * ```
   *
   * @example Get all users (app level - requires interactionId)
   * ```typescript
   * const users = await api.getUsers({ interactionId: 'int-123' });
   * users.forEach(user => {
   *   console.log(`${user.fullName} - ${user.cxStatus.status} - ${user.presence}`);
   * });
   * ```
   *
   * @example Get filtered users (app level)
   * ```typescript
   * const users = await api.getUsers({
   *   interactionId: 'int-123',
   *   filter: 'john'
   * });
   * ```
   *
   * @example Use for transfer target selection
   * ```typescript
   * const users = await api.getUsers({ filter: searchInput });
   * const eligibleUsers = users.filter(u => u.eligible);
   * eligibleUsers.forEach(user => {
   *   console.log(`${user.fullName} (${user.extension}) - ${user.cxStatus.status}`);
   * });
   * ```
   */
  async getUsers(y) {
    return this.sendApiRequest("getUsers", y || {});
  }
  /**
   * Remove the current interaction from the viewer
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.viewerRemoveInteraction();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.viewerRemoveInteraction({ interactionId: 'int-123' });
   * ```
   */
  async viewerRemoveInteraction(y) {
    return this.sendApiRequest(
      "viewerRemoveInteraction",
      y || {}
    );
  }
  /**
   * End the current interaction
   *
   * Terminates the active interaction and disconnects the call.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.endInteraction();
   * console.log('Interaction ended');
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.endInteraction({ interactionId: 'int-123' });
   * ```
   */
  async endInteraction(y) {
    return this.sendApiRequest(
      "endInteraction",
      y || {}
    );
  }
  /**
   * Start a voice call for the current interaction
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.startVoiceCall();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.startVoiceCall({ interactionId: 'int-123' });
   * ```
   */
  async startVoiceCall(y) {
    return this.sendApiRequest(
      "startVoiceCall",
      y || {}
    );
  }
  /**
   * Create a new voice interaction with a Queue ID and Phone Number
   *
   * Creates a new outbound voice call interaction to the specified phone number
   * and assigns it to the specified queue.
   *
   * @param params - Voice interaction parameters
   * @returns Promise resolving to a success message
   *
   * @example
   * ```typescript
   * await api.createVoiceInteraction({
   *   phoneNumber: '+1234567890',
   *   queueId: '003'
   * });
   * ```
   */
  async createVoiceInteraction(y) {
    return this.sendApiRequest(
      "createVoiceInteraction",
      y
    );
  }
  /**
   * Complete a blind transfer
   *
   * Transfers the call to another agent or number without consultation.
   *
   * @param options - Transfer configuration
   * @returns Promise resolving to true if successful
   *
   * @example
   * ```typescript
   * const interaction = await api.getInteraction();
   * await api.completeBlindTransfer({
   *   interactionId: interaction.interactionId,
   *   transferTo: 'agent@example.com',
   *   transferToName: 'John Doe',
   *   transferCallerIdType: 'internal'
   * });
   * ```
   */
  async completeBlindTransfer(y) {
    return this.sendApiRequest("completeBlindTransfer", y);
  }
  /**
   * Perform a single-step transfer
   *
   * Transfers the interaction directly to the specified target.
   *
   * @param params - Transfer parameters
   * @returns Promise resolving to a success message
   *
   * @example
   * ```typescript
   * await api.singleStepTransfer({
   *   targetId: 'user123',
   *   targetName: 'Support Team'
   * });
   * ```
   */
  async singleStepTransfer(y) {
    return this.sendApiRequest(
      "singleStepTransfer",
      y
    );
  }
  /**
   * Initiate a consult call
   *
   * Starts a consultation with another agent, phone number, or queue while keeping
   * the original caller on hold.
   *
   * @param options - Consult call configuration
   * @returns Promise resolving to a success message
   *
   * @example Consult with agent
   * ```typescript
   * const interaction = await api.getInteraction();
   * await api.consultCall({
   *   interactionId: interaction.interactionId,
   *   transferTo: 'supervisor@example.com'
   * });
   * ```
   *
   * @example Consult with phone number
   * ```typescript
   * await api.consultCall({
   *   interactionId: interaction.interactionId,
   *   phoneNumber: '+1234567890'
   * });
   * ```
   *
   * @example Consult with queue
   * ```typescript
   * // Get available queues first
   * const queues = await api.getTransferQueuesInteraction();
   * const targetQueue = queues.find(q => q.name === 'Support Queue');
   *
   * await api.consultCall({
   *   interactionId: interaction.interactionId,
   *   queueId: targetQueue.id
   * });
   * ```
   */
  async consultCall(y) {
    return this.sendApiRequest("consultCall", y);
  }
  /**
   * Complete an attended transfer
   *
   * Finalizes the attended transfer after consulting with the target party.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * // After consulting
   * await api.completeAttendedTransfer();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.completeAttendedTransfer({ interactionId: 'int-123' });
   * ```
   */
  async completeAttendedTransfer(y) {
    return this.sendApiRequest(
      "completeAttendedTransfer",
      y || {}
    );
  }
  /**
   * Complete the interaction as a conference
   *
   * Merges all parties into a conference call instead of completing a transfer.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * // After consulting
   * await api.completeConference();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.completeConference({ interactionId: 'int-123' });
   * ```
   */
  async completeConference(y) {
    return this.sendApiRequest(
      "completeConference",
      y || {}
    );
  }
  /**
   * Perform a warm attended transfer
   *
   * Introduces the caller to the transfer target before completing the transfer.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.attendedTransferWarm();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.attendedTransferWarm({ interactionId: 'int-123' });
   * ```
   */
  async attendedTransferWarm(y) {
    return this.sendApiRequest(
      "attendedTransferWarm",
      y || {}
    );
  }
  /**
   * Cancel an attended transfer
   *
   * Cancels the ongoing attended transfer and returns to the original call.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.attendedTransferCancel();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.attendedTransferCancel({ interactionId: 'int-123' });
   * ```
   */
  async attendedTransferCancel(y) {
    return this.sendApiRequest(
      "attendedTransferCancel",
      y || {}
    );
  }
  /**
   * Accept an incoming interaction
   *
   * Accepts a queued or alerting interaction.
   *
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * api.onInteractionAccepted(async (interactionId) => {
   *   console.log('New interaction:', interactionId);
   * });
   *
   * // When ready to accept
   * await api.acceptInteraction();
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.acceptInteraction({ interactionId: 'int-123' });
   * ```
   */
  async acceptInteraction(y) {
    return this.sendApiRequest(
      "acceptInteraction",
      y || {}
    );
  }
  /**
   * Send a DTMF dialpad digit during a call
   *
   * @param digit - The dialpad digit to send (0-9)
   * @param audioOutputDeviceId - Audio output device ID or null for default
   * @param noSendDialTone - Whether to suppress the dial tone sound
   * @param audioContextOverride - Audio context type override
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * import { DialpadDigit } from '@avaya/infinity-elements-api';
   *
   * await api.sendDialpadDigit(
   *   DialpadDigit.One,
   *   null,
   *   false
   * );
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.sendDialpadDigit(
   *   DialpadDigit.One,
   *   null,
   *   false,
   *   undefined,
   *   { interactionId: 'int-123' }
   * );
   * ```
   */
  async sendDialpadDigit(y, C, R, Q, ie) {
    return this.sendApiRequestWithId("sendDialpadDigit", {
      digit: y,
      audioOutputDeviceId: C,
      noSendDialTone: R,
      audioContextOverride: Q,
      interactionId: ie?.interactionId
    });
  }
  /**
   * Insert text into the chat feed input field
   *
   * @param text - The text to insert
   * @param options - Optional parameters
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Interaction-level widget
   * ```typescript
   * await api.insertTextIntoFeedInput('Hello, how can I help you today?');
   * ```
   *
   * @example App-level widget
   * ```typescript
   * await api.insertTextIntoFeedInput('Hello!', { interactionId: 'int-123' });
   * ```
   */
  async insertTextIntoFeedInput(y, C) {
    return this.sendApiRequest("insertTextIntoFeedInput", {
      text: y,
      interactionId: C?.interactionId
    });
  }
  /**
   * Send a rich media message (image, file, etc.) to the interaction
   *
   * @deprecated This method is deprecated and will be removed in a future version.
   *
   * @param options - Message options (must provide either mediaUrl or file)
   * @param options.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to a success message
   *
   * @example Send image from URL (interaction-level widget)
   * ```typescript
   * await api.sendRichMediaMessage({
   *   name: 'Product Image',
   *   mediaUrl: 'https://example.com/image.jpg',
   *   text: 'Here is the product you requested'
   * });
   * ```
   *
   * @example Send file upload (app-level widget)
   * ```typescript
   * const fileInput = document.querySelector('input[type="file"]');
   * const file = fileInput.files[0];
   *
   * await api.sendRichMediaMessage({
   *   name: 'Document',
   *   file: file,
   *   text: 'Attached document',
   *   interactionId: 'int-123'
   * });
   * ```
   */
  async sendRichMediaMessage(y) {
    const C = {
      name: y.name,
      mediaUrl: y.mediaUrl,
      text: y.text,
      interactionId: y.interactionId
    };
    if (y.file) {
      const R = await this.fileToBase64(y.file);
      C.file = {
        name: y.file.name,
        type: y.file.type,
        size: y.file.size,
        data: R
      };
    }
    return this.sendApiRequest(
      "sendRichMediaMessage",
      C
    );
  }
  /**
   * Send a chat message to the interaction
   *
   * Supports sending text messages, media from URLs, or file uploads.
   * At least one of text, mediaUrl, or file must be provided.
   *
   * @param options - Message options (must provide interactionId and at least one of text, mediaUrl, or file)
   * @param options.interactionId - Required interaction ID
   * @returns Promise resolving to a success message
   *
   * @example Send text message
   * ```typescript
   * await api.sendChatMessage({
   *   interactionId: 'int-123',
   *   text: 'Hello, how can I help you today?'
   * });
   * ```
   *
   * @example Send image from URL
   * ```typescript
   * await api.sendChatMessage({
   *   interactionId: 'int-123',
   *   mediaUrl: 'https://example.com/image.jpg',
   *   text: 'Here is the product you requested'
   * });
   * ```
   *
   * @example Send file upload
   * ```typescript
   * const fileInput = document.querySelector('input[type="file"]');
   * const file = fileInput.files[0];
   *
   * await api.sendChatMessage({
   *   interactionId: 'int-123',
   *   file: file,
   *   text: 'Attached document'
   * });
   * ```
   *
   * @example Send text with file
   * ```typescript
   * await api.sendChatMessage({
   *   interactionId: 'int-123',
   *   text: 'Please review this document',
   *   file: documentFile,
   *   fileName: 'Important Document.pdf'
   * });
   * ```
   */
  async sendChatMessage(y) {
    const C = {
      interactionId: y.interactionId,
      text: y.text,
      mediaUrl: y.mediaUrl
    };
    if (y.fileName && (C.fileName = y.fileName), y.file) {
      const R = await this.fileToBase64(y.file);
      C.file = {
        name: y.file.name,
        type: y.file.type,
        size: y.file.size,
        data: R
      };
    }
    return this.sendApiRequest("sendChatMessage", C);
  }
  /**
   * Set the agent's status (Available, Away, Busy, etc.)
   *
   * @param userId - The user ID of the agent
   * @param status - The new agent status
   * @param reason - Optional reason for the status change (required for some statuses)
   * @returns Promise resolving to a success message
   *
   * @example Set agent to Available
   * ```typescript
   * const userInfo = await api.getUserInfo();
   * await api.setAgentStatus(userInfo.userId, { id: 'available', name: 'Available', category: 'available' });
   * ```
   *
   * @example Set agent to Away with reason
   * ```typescript
   * const userInfo = await api.getUserInfo();
   * await api.setAgentStatus(userInfo.userId, { id: 'away', name: 'Away', category: 'away' }, {
   *   id: 'lunch',
   *   name: 'Lunch Break'
   * });
   * ```
   */
  async setAgentStatus(y, C, R) {
    return this.sendApiRequest("setAgentStatus", {
      userId: y,
      status: C,
      reason: R
    });
  }
  /**
   * Get all queues available to the current user (App Level)
   *
   * Returns a basic list of queues the agent has access to.
   *
   * @param params - Optional filter parameters
   * @returns Promise resolving to array of user queue information
   *
   * @example
   * ```typescript
   * const queues = await api.getUserQueues();
   * console.log('Available queues:', queues.map(q => q.name));
   *
   * // With filter
   * const salesQueues = await api.getUserQueues({ filter: 'Sales' });
   * ```
   */
  async getUserQueues(y) {
    return this.sendApiRequest("getUserQueues", y || {});
  }
  /**
   * Get transfer queues with real-time statistics (App Level)
   *
   * Returns detailed queue information including waiting interactions, active agents,
   * and average wait times. Requires explicit interactionId since this is used at app level
   * where interaction context is not available.
   *
   * @param params - Required interactionId and optional filter parameters
   * @returns Promise resolving to array of queue information with statistics
   *
   * @example
   * ```typescript
   * const queues = await api.getTransferQueues({
   *   interactionId: 'int-123',
   *   filter: 'support'
   * });
   * queues.forEach(queue => {
   *   console.log(`${queue.name}: ${queue.waitingInteractions} waiting`);
   *   console.log(`Active agents: ${queue.countActiveAgents}`);
   * });
   * ```
   */
  async getTransferQueues(y) {
    return this.sendApiRequest(
      "getTransferQueues",
      y
    );
  }
  /**
   * Get transfer queues with real-time statistics (Interaction Level)
   *
   * Returns detailed queue information including waiting interactions, active agents,
   * and average wait times. Uses interaction context automatically for interaction-level widgets.
   *
   * @param params - Optional filter parameters
   * @param params.filter - Optional substring search against queue names
   * @param params.interactionId - Optional interaction ID (required for app-level widgets, auto-provided for interaction-level widgets)
   * @returns Promise resolving to array of queue information with statistics
   *
   * @example Interaction-level widget
   * ```typescript
   * const queues = await api.getTransferQueuesInteraction({ filter: 'support' });
   * queues.forEach(queue => {
   *   console.log(`${queue.name}: ${queue.waitingInteractions} waiting`);
   *   console.log(`Active agents: ${queue.countActiveAgents}`);
   * });
   * ```
   *
   * @example App-level widget
   * ```typescript
   * const queues = await api.getTransferQueuesInteraction({
   *   filter: 'support',
   *   interactionId: 'int-123'
   * });
   * ```
   */
  async getTransferQueuesInteraction(y) {
    return this.sendApiRequest(
      "getTransferQueuesInteraction",
      y || {}
    );
  }
  /**
   * Get reason codes for agent status changes
   *
   * Returns available reason codes that can be used when changing agent status.
   *
   * @param params - Optional parameters
   * @param params.type - Filter by reason type (away, busy, available, queueLogout)
   * @returns Promise resolving to reason codes response
   *
   * @example Get all reason codes
   * ```typescript
   * const response = await api.getReasonCodes();
   * console.log('Reason codes:', response.reasons);
   * ```
   *
   * @example Get away reason codes only
   * ```typescript
   * const response = await api.getReasonCodes({ type: 'away' });
   * const awayReasons = response.reasons;
   * ```
   */
  async getReasonCodes(y) {
    return this.sendApiRequest(
      "getReasonCodes",
      y || {}
    );
  }
  /**
   * Get Avaya JWT token with multi-level request deduplication and automatic refresh
   * - Returns cached token from localStorage if available and not expired
   * - Automatically refreshes token if expired (using refresh token)
   * - Prevents duplicate concurrent fetch requests (instance-level)
   * - Prevents duplicate OAuth popups across iframes/elements (cross-iframe coordination)
   * - Initiates Keycloak OAuth flow if no token exists
   *
   * Cross-iframe coordination ensures that if 10 iframes all call getAvayaJwt(),
   * only ONE OAuth popup will appear, and all iframes will receive the same token.
   *
   * Uses localStorage for coordination to ensure only one OAuth popup appears
   *
   * GUARANTEE: This function ALWAYS either returns a JWT string or throws an error.
   * There are no code paths that return undefined or hang indefinitely.
   *
   * @param options - Configuration options (all optional, uses defaults if not provided)
   * @param options.authorizationEndpoint - Keycloak authorization endpoint URL
   * @param options.tokenEndpoint - Keycloak token endpoint URL
   * @param options.clientId - OAuth client ID
   * @param options.scopes - OAuth scopes to request
   * @param options.redirectUri - OAuth redirect URI (URL to redirect.html)
   * @param options.popupOptions - Popup window size/position (defaults to 500x600)
   * @param options.forceRefresh - Force token refresh even if not expired (defaults to false)
   * @returns Promise<string> The JWT token (never returns undefined, always throws on error)
   *
   * @example
   * ```typescript
   * // Use defaults
   * const jwt = await api.getAvayaJwt();
   *
   * // With configuration
   * const jwt = await api.getAvayaJwt({
   *   authorizationEndpoint: 'https://keycloak.example.com/auth/realms/xxx/protocol/openid-connect/auth',
   *   tokenEndpoint: 'https://keycloak.example.com/auth/realms/xxx/protocol/openid-connect/token',
   *   clientId: 'my-client-id',
   *   redirectUri: 'https://myapp.com/redirect.html',
   *   forceRefresh: true
   * });
   * ```
   */
  async getAvayaJwt(y = {}) {
    console.log("[ElementAPI] getAvayaJwt called", {
      options: y,
      debug: this.debug
    });
    const C = {
      authorizationEndpoint: y.authorizationEndpoint,
      tokenEndpoint: y.tokenEndpoint,
      clientId: y.clientId,
      scopes: y.scopes,
      redirectUri: y.redirectUri
    }, R = ly(this.JWT_STORAGE_KEY);
    if (console.log(
      "[ElementAPI] Checked localStorage for cached token:",
      R ? "FOUND" : "NOT FOUND"
    ), R && !y.forceRefresh) {
      if (!Gk(R))
        return this.log("Returning cached JWT from localStorage (not expired)"), R.accessToken;
      if (this.log("Cached JWT is expired, attempting refresh"), R.refreshToken && !wR(R))
        try {
          return this.log("Using refresh token to get new access token"), await this.refreshToken(C);
        } catch (Q) {
          this.log("Token refresh failed, will perform full OAuth flow", Q), localStorage.removeItem(this.JWT_STORAGE_KEY);
        }
      else
        this.log(
          "Refresh token not available or expired, performing full OAuth flow"
        ), localStorage.removeItem(this.JWT_STORAGE_KEY);
    } else if (y.forceRefresh && R?.refreshToken) {
      this.log("Force refresh requested");
      try {
        return await this.refreshToken(C);
      } catch (Q) {
        this.log("Force refresh failed, will perform full OAuth flow", Q), localStorage.removeItem(this.JWT_STORAGE_KEY);
      }
    }
    return await Kk({
      redirectUri: y.redirectUri,
      keycloakConfig: C,
      popupOptions: y.popupOptions,
      jwtStorageKey: this.JWT_STORAGE_KEY,
      sendMessage: this.sendInterElementMessage.bind(this),
      // Use existing API method!
      onMessage: this.onInterElementMessage.bind(this),
      // Use existing API method!
      debug: this.debug
    });
  }
  /**
   * Refresh the access token using the stored refresh token
   *
   * @param options - Configuration options
   * @param options.tokenEndpoint - Keycloak token endpoint URL (required)
   * @param options.clientId - OAuth client ID (required)
   * @returns Promise<string> The new JWT access token
   * @throws Error if refresh token is not available or refresh fails
   *
   * @example
   * ```typescript
   * try {
   *   const newJwt = await api.refreshToken({
   *     tokenEndpoint: 'https://keycloak.example.com/auth/realms/xxx/protocol/openid-connect/token',
   *     clientId: 'my-client-id'
   *   });
   *   console.log('Token refreshed successfully');
   * } catch (error) {
   *   console.error('Token refresh failed:', error);
   *   // May need to re-authenticate
   * }
   * ```
   */
  async refreshToken(y = {}) {
    this.log("refreshToken called");
    const C = ly(this.JWT_STORAGE_KEY);
    if (!C?.refreshToken)
      throw new Error("No refresh token available");
    if (wR(C))
      throw new Error("Refresh token is expired");
    const { tokenEndpoint: R, clientId: Q } = y;
    if (!R || !Q)
      throw new Error("Token endpoint or client ID is not set");
    const ie = await Wk(
      C.refreshToken,
      R,
      Q
    ), Ee = Date.now(), E = {
      accessToken: ie.access_token,
      refreshToken: ie.refresh_token || C.refreshToken,
      // Keep old refresh token if not provided
      expiresAt: ie.expires_in ? Ee + ie.expires_in * 1e3 : void 0,
      refreshExpiresAt: ie.refresh_expires_in ? Ee + ie.refresh_expires_in * 1e3 : C.refreshExpiresAt
      // Keep old expiration if not provided
    };
    return localStorage.setItem(this.JWT_STORAGE_KEY, JSON.stringify(E)), this.log("Token refreshed successfully"), E.accessToken;
  }
  /**
   * Clear the cached JWT token and force re-authentication on next getAvayaJwt call
   *
   * @example
   * ```typescript
   * api.clearAvayaJwt();
   * const newJwt = await api.getAvayaJwt(); // Will trigger OAuth flow
   * ```
   */
  clearAvayaJwt() {
    this.log("Clearing cached token"), localStorage.removeItem(this.JWT_STORAGE_KEY);
  }
  // Helper method to convert File to base64
  fileToBase64(y) {
    return new Promise((C, R) => {
      const Q = new FileReader();
      Q.onload = () => {
        const ie = Q.result.split(",")[1];
        C(ie);
      }, Q.onerror = () => R(new Error("Failed to read file")), Q.readAsDataURL(y);
    });
  }
  /**
   * Send a message to other elements via the host (parent window)
   *
   * Messages are routed through the host application which acts as a broker,
   * relaying messages to all other element iframes. This approach works in
   * sandboxed iframes where BroadcastChannel is not available.
   *
   * @param message - The message to send (can be any serializable type)
   * @template T - The type of the message
   *
   * @example
   * ```typescript
   * api.sendInterElementMessage({ type: 'my-event', payload: { key: 'value' } });
   * ```
   */
  sendInterElementMessage(y) {
    const C = this.requestTarget ?? window.parent;
    this.log("Sending inter-element message via host", y), C.postMessage(
      {
        type: "inter-element-message",
        elementId: this.elementId,
        payload: y
      },
      "*"
    );
  }
  /**
   * Subscribe to messages from other elements routed through the host
   *
   * The host application receives inter-element messages and relays them to
   * all element iframes. This works in sandboxed iframes where BroadcastChannel
   * is not available.
   *
   * @param callback - Function called when a message is received
   * @template T - The expected type of messages
   * @returns Unsubscribe function to stop listening
   *
   * @example
   * ```typescript
   * const unsubscribe = api.onInterElementMessage<MyMessageType>((message) => {
   *   console.log('Received:', message);
   * });
   *
   * // Later, stop listening
   * unsubscribe();
   * ```
   */
  onInterElementMessage(y) {
    const C = y;
    return this.interElementMessageListeners.add(C), () => {
      this.interElementMessageListeners.delete(C);
    };
  }
  // Event subscription methods (onInteractionStatusChanged, onInteractionEnded, etc.)
  // are inherited from ElementAPIEvents
  // Send an API request to core-agent-ui via postMessage
  sendApiRequest(y, C) {
    return this.sendApiRequestWithId(y, C);
  }
  // Send an API request and return both the response and requestId
  sendApiRequestWithId(y, C) {
    return new Promise((R, Q) => {
      const ie = Zk(), Ee = setTimeout(() => {
        this.pendingApiRequests.delete(ie), Q(new Error(`API request timeout: ${y}`));
      }, this.timeout);
      this.pendingApiRequests.set(ie, {
        resolve: (He) => {
          R(He);
        },
        reject: Q,
        timeout: Ee
      });
      const E = this.requestTarget ?? window.parent;
      this.log("Sending API request", { method: y, requestId: ie, params: C }), E.postMessage(
        {
          type: "api-request",
          requestId: ie,
          method: y,
          params: C
        },
        "*"
      );
    });
  }
  // Handle API response from core-agent-ui
  handleApiResponse(y) {
    this.log("Received API response", y);
    const C = this.pendingApiRequests.get(y.requestId);
    if (!C) {
      this.log("No pending API request found for response", {
        requestId: y.requestId
      });
      return;
    }
    if (clearTimeout(C.timeout), this.pendingApiRequests.delete(y.requestId), y.success)
      C.resolve(y.data);
    else {
      let R = "API request failed";
      typeof y.error == "string" ? R = y.error : y.error && typeof y.error == "object" && (R = y.error.message || R), C.reject(new Error(R));
    }
  }
  // Set up window message listener for API responses and events
  setupWindowMessageListener() {
    this.windowMessageHandler = (y) => {
      const C = y.data;
      if (!(this.requestTarget && y.source !== this.requestTarget) && (this.log("Received window message", { type: C?.type, data: C }), !(!C || typeof C != "object"))) {
        if ("type" in C && C.type === "api-response") {
          this.handleApiResponse(C);
          return;
        }
        if (!this.handleMessage(C) && "type" in C && C.type === "inter-element-broadcast") {
          const R = C.data?.fromElementId ?? C.fromElementId, Q = C.data?.payload ?? C.payload;
          if (R === this.elementId) {
            this.log("Ignoring own inter-element broadcast");
            return;
          }
          this.log("Received inter-element broadcast", {
            fromElementId: R,
            payload: Q,
            rawData: C
          }), this.interElementMessageListeners.forEach((ie) => {
            try {
              ie(Q);
            } catch (Ee) {
              this.log("Error in inter-element message callback", Ee);
            }
          });
          return;
        }
      }
    }, window.addEventListener("message", this.windowMessageHandler);
  }
  // Debug logging (overrides no-op in ElementAPIEvents base class)
  log(y, C) {
    this.debug && console.log(`[ElementAPI:${this.elementId}]`, y, C || "");
  }
};
const tD = "_container_jt3a6_1", nD = "_title_jt3a6_8", rD = "_content_jt3a6_14", xE = {
  container: tD,
  title: nD,
  content: rD
}, xR = new eD({
  elementId: "remote-element",
  debug: !0
}), aD = ({ message: y = "Hello, World!" }) => {
  const [C, R] = bE.useState(null);
  return bE.useEffect(() => (xR.getUserInfo().then((Q) => {
    R(Q.userId);
  }).catch((Q) => {
    console.error("Failed to get user info:", Q), console.info("May not be in iframe");
  }), () => {
    xR.destroy();
  }), []), /* @__PURE__ */ iv.jsxs("div", { className: xE.container, children: [
    /* @__PURE__ */ iv.jsx("h2", { className: xE.title, children: y }),
    /* @__PURE__ */ iv.jsx("div", { className: xE.content, children: C ? /* @__PURE__ */ iv.jsxs("p", { children: [
      "Welcome, ",
      C,
      "!"
    ] }) : /* @__PURE__ */ iv.jsx("p", { children: "Loading user info..." }) })
  ] });
}, iD = Fk(aD, {
  props: {
    message: "string"
  }
});
customElements.define("remote-element", iD);
