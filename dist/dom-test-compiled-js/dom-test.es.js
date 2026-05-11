function r1(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Xm = { exports: {} }, Nt = {};
var t0;
function a1() {
  if (t0) return Nt;
  t0 = 1;
  var B = Symbol.for("react.element"), V = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), kt = Symbol.for("react.provider"), T = Symbol.for("react.context"), Lt = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), fe = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), oe = Symbol.iterator;
  function we(O) {
    return O === null || typeof O != "object" ? null : (O = oe && O[oe] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ke = Object.assign, Ke = {};
  function Me(O, W, qe) {
    this.props = O, this.context = W, this.refs = Ke, this.updater = qe || ne;
  }
  Me.prototype.isReactComponent = {}, Me.prototype.setState = function(O, W) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, W, "setState");
  }, Me.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Rt() {
  }
  Rt.prototype = Me.prototype;
  function Fe(O, W, qe) {
    this.props = O, this.context = W, this.refs = Ke, this.updater = qe || ne;
  }
  var pe = Fe.prototype = new Rt();
  pe.constructor = Fe, ke(pe, Me.prototype), pe.isPureReactComponent = !0;
  var St = Array.isArray, Pe = Object.prototype.hasOwnProperty, Et = { current: null }, Je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(O, W, qe) {
    var Ve, vt = {}, ct = null, lt = null;
    if (W != null) for (Ve in W.ref !== void 0 && (lt = W.ref), W.key !== void 0 && (ct = "" + W.key), W) Pe.call(W, Ve) && !Je.hasOwnProperty(Ve) && (vt[Ve] = W[Ve]);
    var ft = arguments.length - 2;
    if (ft === 1) vt.children = qe;
    else if (1 < ft) {
      for (var ht = Array(ft), $t = 0; $t < ft; $t++) ht[$t] = arguments[$t + 2];
      vt.children = ht;
    }
    if (O && O.defaultProps) for (Ve in ft = O.defaultProps, ft) vt[Ve] === void 0 && (vt[Ve] = ft[Ve]);
    return { $$typeof: B, type: O, key: ct, ref: lt, props: vt, _owner: Et.current };
  }
  function Bt(O, W) {
    return { $$typeof: B, type: O.type, key: W, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function Zt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === B;
  }
  function Ne(O) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(qe) {
      return W[qe];
    });
  }
  var Ct = /\/+/g;
  function f(O, W) {
    return typeof O == "object" && O !== null && O.key != null ? Ne("" + O.key) : W.toString(36);
  }
  function Mt(O, W, qe, Ve, vt) {
    var ct = typeof O;
    (ct === "undefined" || ct === "boolean") && (O = null);
    var lt = !1;
    if (O === null) lt = !0;
    else switch (ct) {
      case "string":
      case "number":
        lt = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case B:
          case V:
            lt = !0;
        }
    }
    if (lt) return lt = O, vt = vt(lt), O = Ve === "" ? "." + f(lt, 0) : Ve, St(vt) ? (qe = "", O != null && (qe = O.replace(Ct, "$&/") + "/"), Mt(vt, W, qe, "", function($t) {
      return $t;
    })) : vt != null && (Zt(vt) && (vt = Bt(vt, qe + (!vt.key || lt && lt.key === vt.key ? "" : ("" + vt.key).replace(Ct, "$&/") + "/") + O)), W.push(vt)), 1;
    if (lt = 0, Ve = Ve === "" ? "." : Ve + ":", St(O)) for (var ft = 0; ft < O.length; ft++) {
      ct = O[ft];
      var ht = Ve + f(ct, ft);
      lt += Mt(ct, W, qe, ht, vt);
    }
    else if (ht = we(O), typeof ht == "function") for (O = ht.call(O), ft = 0; !(ct = O.next()).done; ) ct = ct.value, ht = Ve + f(ct, ft++), lt += Mt(ct, W, qe, ht, vt);
    else if (ct === "object") throw W = String(O), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return lt;
  }
  function _t(O, W, qe) {
    if (O == null) return O;
    var Ve = [], vt = 0;
    return Mt(O, Ve, "", "", function(ct) {
      return W.call(qe, ct, vt++);
    }), Ve;
  }
  function zt(O) {
    if (O._status === -1) {
      var W = O._result;
      W = W(), W.then(function(qe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = qe);
      }, function(qe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = qe);
      }), O._status === -1 && (O._status = 0, O._result = W);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var De = { current: null }, re = { transition: null }, Ae = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: re, ReactCurrentOwner: Et };
  function ue() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Nt.Children = { map: _t, forEach: function(O, W, qe) {
    _t(O, function() {
      W.apply(this, arguments);
    }, qe);
  }, count: function(O) {
    var W = 0;
    return _t(O, function() {
      W++;
    }), W;
  }, toArray: function(O) {
    return _t(O, function(W) {
      return W;
    }) || [];
  }, only: function(O) {
    if (!Zt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Nt.Component = Me, Nt.Fragment = M, Nt.Profiler = st, Nt.PureComponent = Fe, Nt.StrictMode = Ze, Nt.Suspense = ce, Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ae, Nt.act = ue, Nt.cloneElement = function(O, W, qe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Ve = ke({}, O.props), vt = O.key, ct = O.ref, lt = O._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ct = W.ref, lt = Et.current), W.key !== void 0 && (vt = "" + W.key), O.type && O.type.defaultProps) var ft = O.type.defaultProps;
      for (ht in W) Pe.call(W, ht) && !Je.hasOwnProperty(ht) && (Ve[ht] = W[ht] === void 0 && ft !== void 0 ? ft[ht] : W[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1) Ve.children = qe;
    else if (1 < ht) {
      ft = Array(ht);
      for (var $t = 0; $t < ht; $t++) ft[$t] = arguments[$t + 2];
      Ve.children = ft;
    }
    return { $$typeof: B, type: O.type, key: vt, ref: ct, props: Ve, _owner: lt };
  }, Nt.createContext = function(O) {
    return O = { $$typeof: T, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: kt, _context: O }, O.Consumer = O;
  }, Nt.createElement = ln, Nt.createFactory = function(O) {
    var W = ln.bind(null, O);
    return W.type = O, W;
  }, Nt.createRef = function() {
    return { current: null };
  }, Nt.forwardRef = function(O) {
    return { $$typeof: Lt, render: O };
  }, Nt.isValidElement = Zt, Nt.lazy = function(O) {
    return { $$typeof: at, _payload: { _status: -1, _result: O }, _init: zt };
  }, Nt.memo = function(O, W) {
    return { $$typeof: fe, type: O, compare: W === void 0 ? null : W };
  }, Nt.startTransition = function(O) {
    var W = re.transition;
    re.transition = {};
    try {
      O();
    } finally {
      re.transition = W;
    }
  }, Nt.unstable_act = ue, Nt.useCallback = function(O, W) {
    return De.current.useCallback(O, W);
  }, Nt.useContext = function(O) {
    return De.current.useContext(O);
  }, Nt.useDebugValue = function() {
  }, Nt.useDeferredValue = function(O) {
    return De.current.useDeferredValue(O);
  }, Nt.useEffect = function(O, W) {
    return De.current.useEffect(O, W);
  }, Nt.useId = function() {
    return De.current.useId();
  }, Nt.useImperativeHandle = function(O, W, qe) {
    return De.current.useImperativeHandle(O, W, qe);
  }, Nt.useInsertionEffect = function(O, W) {
    return De.current.useInsertionEffect(O, W);
  }, Nt.useLayoutEffect = function(O, W) {
    return De.current.useLayoutEffect(O, W);
  }, Nt.useMemo = function(O, W) {
    return De.current.useMemo(O, W);
  }, Nt.useReducer = function(O, W, qe) {
    return De.current.useReducer(O, W, qe);
  }, Nt.useRef = function(O) {
    return De.current.useRef(O);
  }, Nt.useState = function(O) {
    return De.current.useState(O);
  }, Nt.useSyncExternalStore = function(O, W, qe) {
    return De.current.useSyncExternalStore(O, W, qe);
  }, Nt.useTransition = function() {
    return De.current.useTransition();
  }, Nt.version = "18.3.1", Nt;
}
var rv = { exports: {} };
rv.exports;
var n0;
function i1() {
  return n0 || (n0 = 1, (function(B, V) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.3.1", Ze = Symbol.for("react.element"), st = Symbol.for("react.portal"), kt = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), Lt = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), fe = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), Me = Symbol.iterator, Rt = "@@iterator";
      function Fe(y) {
        if (y === null || typeof y != "object")
          return null;
        var w = Me && y[Me] || y[Rt];
        return typeof w == "function" ? w : null;
      }
      var pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, St = {
        transition: null
      }, Pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Et = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Je = {}, ln = null;
      function Bt(y) {
        ln = y;
      }
      Je.setExtraStackFrame = function(y) {
        ln = y;
      }, Je.getCurrentStack = null, Je.getStackAddendum = function() {
        var y = "";
        ln && (y += ln);
        var w = Je.getCurrentStack;
        return w && (y += w() || ""), y;
      };
      var Zt = !1, Ne = !1, Ct = !1, f = !1, Mt = !1, _t = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: St,
        ReactCurrentOwner: Et
      };
      _t.ReactDebugCurrentFrame = Je, _t.ReactCurrentActQueue = Pe;
      function zt(y) {
        {
          for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), $ = 1; $ < w; $++)
            P[$ - 1] = arguments[$];
          re("warn", y, P);
        }
      }
      function De(y) {
        {
          for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), $ = 1; $ < w; $++)
            P[$ - 1] = arguments[$];
          re("error", y, P);
        }
      }
      function re(y, w, P) {
        {
          var $ = _t.ReactDebugCurrentFrame, ae = $.getStackAddendum();
          ae !== "" && (w += "%s", P = P.concat([ae]));
          var Ge = P.map(function(de) {
            return String(de);
          });
          Ge.unshift("Warning: " + w), Function.prototype.apply.call(console[y], console, Ge);
        }
      }
      var Ae = {};
      function ue(y, w) {
        {
          var P = y.constructor, $ = P && (P.displayName || P.name) || "ReactClass", ae = $ + "." + w;
          if (Ae[ae])
            return;
          De("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, $), Ae[ae] = !0;
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
        isMounted: function(y) {
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
        enqueueForceUpdate: function(y, w, P) {
          ue(y, "forceUpdate");
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
        enqueueReplaceState: function(y, w, P, $) {
          ue(y, "replaceState");
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
        enqueueSetState: function(y, w, P, $) {
          ue(y, "setState");
        }
      }, W = Object.assign, qe = {};
      Object.freeze(qe);
      function Ve(y, w, P) {
        this.props = y, this.context = w, this.refs = qe, this.updater = P || O;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(y, w) {
        if (typeof y != "object" && typeof y != "function" && y != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, w, "setState");
      }, Ve.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ct = function(y, w) {
          Object.defineProperty(Ve.prototype, y, {
            get: function() {
              zt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var lt in vt)
          vt.hasOwnProperty(lt) && ct(lt, vt[lt]);
      }
      function ft() {
      }
      ft.prototype = Ve.prototype;
      function ht(y, w, P) {
        this.props = y, this.context = w, this.refs = qe, this.updater = P || O;
      }
      var $t = ht.prototype = new ft();
      $t.constructor = ht, W($t, Ve.prototype), $t.isPureReactComponent = !0;
      function Sn() {
        var y = {
          current: null
        };
        return Object.seal(y), y;
      }
      var rr = Array.isArray;
      function hn(y) {
        return rr(y);
      }
      function Qn(y) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && y[Symbol.toStringTag] || y.constructor.name || "Object";
          return P;
        }
      }
      function Rn(y) {
        try {
          return xn(y), !1;
        } catch {
          return !0;
        }
      }
      function xn(y) {
        return "" + y;
      }
      function sr(y) {
        if (Rn(y))
          return De("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(y)), xn(y);
      }
      function ma(y, w, P) {
        var $ = y.displayName;
        if ($)
          return $;
        var ae = w.displayName || w.name || "";
        return ae !== "" ? P + "(" + ae + ")" : P;
      }
      function kr(y) {
        return y.displayName || "Context";
      }
      function On(y) {
        if (y == null)
          return null;
        if (typeof y.tag == "number" && De("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
          return y.displayName || y.name || null;
        if (typeof y == "string")
          return y;
        switch (y) {
          case kt:
            return "Fragment";
          case st:
            return "Portal";
          case Lt:
            return "Profiler";
          case T:
            return "StrictMode";
          case oe:
            return "Suspense";
          case we:
            return "SuspenseList";
        }
        if (typeof y == "object")
          switch (y.$$typeof) {
            case fe:
              var w = y;
              return kr(w) + ".Consumer";
            case ce:
              var P = y;
              return kr(P._context) + ".Provider";
            case at:
              return ma(y, y.render, "ForwardRef");
            case ne:
              var $ = y.displayName || null;
              return $ !== null ? $ : On(y.type) || "Memo";
            case ke: {
              var ae = y, Ge = ae._payload, de = ae._init;
              try {
                return On(de(Ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mn = Object.prototype.hasOwnProperty, Dn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Xn, Kr, En;
      En = {};
      function Kn(y) {
        if (mn.call(y, "ref")) {
          var w = Object.getOwnPropertyDescriptor(y, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return y.ref !== void 0;
      }
      function Rr(y) {
        if (mn.call(y, "key")) {
          var w = Object.getOwnPropertyDescriptor(y, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return y.key !== void 0;
      }
      function Jr(y, w) {
        var P = function() {
          Xn || (Xn = !0, De("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: P,
          configurable: !0
        });
      }
      function ya(y, w) {
        var P = function() {
          Kr || (Kr = !0, De("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: P,
          configurable: !0
        });
      }
      function le(y) {
        if (typeof y.ref == "string" && Et.current && y.__self && Et.current.stateNode !== y.__self) {
          var w = On(Et.current.type);
          En[w] || (De('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, y.ref), En[w] = !0);
        }
      }
      var Ue = function(y, w, P, $, ae, Ge, de) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ze,
          // Built-in properties that belong on the element
          type: y,
          key: w,
          ref: P,
          props: de,
          // Record the component responsible for creating this element.
          _owner: Ge
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ae
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function m(y, w, P) {
        var $, ae = {}, Ge = null, de = null, Qe = null, Dt = null;
        if (w != null) {
          Kn(w) && (de = w.ref, le(w)), Rr(w) && (sr(w.key), Ge = "" + w.key), Qe = w.__self === void 0 ? null : w.__self, Dt = w.__source === void 0 ? null : w.__source;
          for ($ in w)
            mn.call(w, $) && !Dn.hasOwnProperty($) && (ae[$] = w[$]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ae.children = P;
        else if (Ht > 1) {
          for (var cn = Array(Ht), tn = 0; tn < Ht; tn++)
            cn[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(cn), ae.children = cn;
        }
        if (y && y.defaultProps) {
          var Tt = y.defaultProps;
          for ($ in Tt)
            ae[$] === void 0 && (ae[$] = Tt[$]);
        }
        if (Ge || de) {
          var nn = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          Ge && Jr(ae, nn), de && ya(ae, nn);
        }
        return Ue(y, Ge, de, Qe, Dt, Et.current, ae);
      }
      function C(y, w) {
        var P = Ue(y.type, w, y.ref, y._self, y._source, y._owner, y.props);
        return P;
      }
      function R(y, w, P) {
        if (y == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
        var $, ae = W({}, y.props), Ge = y.key, de = y.ref, Qe = y._self, Dt = y._source, Ht = y._owner;
        if (w != null) {
          Kn(w) && (de = w.ref, Ht = Et.current), Rr(w) && (sr(w.key), Ge = "" + w.key);
          var cn;
          y.type && y.type.defaultProps && (cn = y.type.defaultProps);
          for ($ in w)
            mn.call(w, $) && !Dn.hasOwnProperty($) && (w[$] === void 0 && cn !== void 0 ? ae[$] = cn[$] : ae[$] = w[$]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          ae.children = P;
        else if (tn > 1) {
          for (var Tt = Array(tn), nn = 0; nn < tn; nn++)
            Tt[nn] = arguments[nn + 2];
          ae.children = Tt;
        }
        return Ue(y.type, Ge, de, Qe, Dt, Ht, ae);
      }
      function F(y) {
        return typeof y == "object" && y !== null && y.$$typeof === Ze;
      }
      var ie = ".", ge = ":";
      function je(y) {
        var w = /[=:]/g, P = {
          "=": "=0",
          ":": "=2"
        }, $ = y.replace(w, function(ae) {
          return P[ae];
        });
        return "$" + $;
      }
      var xe = !1, mt = /\/+/g;
      function _n(y) {
        return y.replace(mt, "$&/");
      }
      function Vt(y, w) {
        return typeof y == "object" && y !== null && y.key != null ? (sr(y.key), je("" + y.key)) : w.toString(36);
      }
      function Pn(y, w, P, $, ae) {
        var Ge = typeof y;
        (Ge === "undefined" || Ge === "boolean") && (y = null);
        var de = !1;
        if (y === null)
          de = !0;
        else
          switch (Ge) {
            case "string":
            case "number":
              de = !0;
              break;
            case "object":
              switch (y.$$typeof) {
                case Ze:
                case st:
                  de = !0;
              }
          }
        if (de) {
          var Qe = y, Dt = ae(Qe), Ht = $ === "" ? ie + Vt(Qe, 0) : $;
          if (hn(Dt)) {
            var cn = "";
            Ht != null && (cn = _n(Ht) + "/"), Pn(Dt, w, cn, "", function(Jf) {
              return Jf;
            });
          } else Dt != null && (F(Dt) && (Dt.key && (!Qe || Qe.key !== Dt.key) && sr(Dt.key), Dt = C(
            Dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            P + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Dt.key && (!Qe || Qe.key !== Dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              _n("" + Dt.key) + "/"
            ) : "") + Ht
          )), w.push(Dt));
          return 1;
        }
        var tn, Tt, nn = 0, Cn = $ === "" ? ie : $ + ge;
        if (hn(y))
          for (var Ro = 0; Ro < y.length; Ro++)
            tn = y[Ro], Tt = Cn + Vt(tn, Ro), nn += Pn(tn, w, P, Tt, ae);
        else {
          var Xu = Fe(y);
          if (typeof Xu == "function") {
            var Yi = y;
            Xu === Yi.entries && (xe || zt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), xe = !0);
            for (var Ku = Xu.call(Yi), cl, Kf = 0; !(cl = Ku.next()).done; )
              tn = cl.value, Tt = Cn + Vt(tn, Kf++), nn += Pn(tn, w, P, Tt, ae);
          } else if (Ge === "object") {
            var cc = String(y);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Or(y, w, P) {
        if (y == null)
          return y;
        var $ = [], ae = 0;
        return Pn(y, $, "", "", function(Ge) {
          return w.call(P, Ge, ae++);
        }), $;
      }
      function Ka(y) {
        var w = 0;
        return Or(y, function() {
          w++;
        }), w;
      }
      function ga(y, w, P) {
        Or(y, function() {
          w.apply(this, arguments);
        }, P);
      }
      function $i(y) {
        return Or(y, function(w) {
          return w;
        }) || [];
      }
      function go(y) {
        if (!F(y))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
      function rl(y) {
        var w = {
          $$typeof: fe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: y,
          _currentValue2: y,
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
          $$typeof: ce,
          _context: w
        };
        var P = !1, $ = !1, ae = !1;
        {
          var Ge = {
            $$typeof: fe,
            _context: w
          };
          Object.defineProperties(Ge, {
            Provider: {
              get: function() {
                return $ || ($ = !0, De("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(de) {
                w.Provider = de;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(de) {
                w._currentValue = de;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(de) {
                w._currentValue2 = de;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(de) {
                w._threadCount = de;
              }
            },
            Consumer: {
              get: function() {
                return P || (P = !0, De("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(de) {
                ae || (zt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), ae = !0);
              }
            }
          }), w.Consumer = Ge;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var Nr = -1, Mr = 0, cr = 1, mi = 2;
      function Ja(y) {
        if (y._status === Nr) {
          var w = y._result, P = w();
          if (P.then(function(Ge) {
            if (y._status === Mr || y._status === Nr) {
              var de = y;
              de._status = cr, de._result = Ge;
            }
          }, function(Ge) {
            if (y._status === Mr || y._status === Nr) {
              var de = y;
              de._status = mi, de._result = Ge;
            }
          }), y._status === Nr) {
            var $ = y;
            $._status = Mr, $._result = P;
          }
        }
        if (y._status === cr) {
          var ae = y._result;
          return ae === void 0 && De(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ae), "default" in ae || De(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ae), ae.default;
        } else
          throw y._result;
      }
      function yi(y) {
        var w = {
          // We use these fields to store the result.
          _status: Nr,
          _result: y
        }, P = {
          $$typeof: ke,
          _payload: w,
          _init: Ja
        };
        {
          var $, ae;
          Object.defineProperties(P, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return $;
              },
              set: function(Ge) {
                De("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), $ = Ge, Object.defineProperty(P, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ae;
              },
              set: function(Ge) {
                De("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ae = Ge, Object.defineProperty(P, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return P;
      }
      function gi(y) {
        y != null && y.$$typeof === ne ? De("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof y != "function" ? De("forwardRef requires a render function but was given %s.", y === null ? "null" : typeof y) : y.length !== 0 && y.length !== 2 && De("forwardRef render functions accept exactly two parameters: props and ref. %s", y.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), y != null && (y.defaultProps != null || y.propTypes != null) && De("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: at,
          render: y
        };
        {
          var P;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function($) {
              P = $, !y.name && !y.displayName && (y.displayName = $);
            }
          });
        }
        return w;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function Q(y) {
        return !!(typeof y == "string" || typeof y == "function" || y === kt || y === Lt || Mt || y === T || y === oe || y === we || f || y === Ke || Zt || Ne || Ct || typeof y == "object" && y !== null && (y.$$typeof === ke || y.$$typeof === ne || y.$$typeof === ce || y.$$typeof === fe || y.$$typeof === at || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        y.$$typeof === k || y.getModuleId !== void 0));
      }
      function ve(y, w) {
        Q(y) || De("memo: The first argument must be a component. Instead received: %s", y === null ? "null" : typeof y);
        var P = {
          $$typeof: ne,
          type: y,
          compare: w === void 0 ? null : w
        };
        {
          var $;
          Object.defineProperty(P, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(ae) {
              $ = ae, !y.name && !y.displayName && (y.displayName = ae);
            }
          });
        }
        return P;
      }
      function Re() {
        var y = pe.current;
        return y === null && De(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), y;
      }
      function dt(y) {
        var w = Re();
        if (y._context !== void 0) {
          var P = y._context;
          P.Consumer === y ? De("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : P.Provider === y && De("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(y);
      }
      function it(y) {
        var w = Re();
        return w.useState(y);
      }
      function xt(y, w, P) {
        var $ = Re();
        return $.useReducer(y, w, P);
      }
      function bt(y) {
        var w = Re();
        return w.useRef(y);
      }
      function Nn(y, w) {
        var P = Re();
        return P.useEffect(y, w);
      }
      function sn(y, w) {
        var P = Re();
        return P.useInsertionEffect(y, w);
      }
      function dn(y, w) {
        var P = Re();
        return P.useLayoutEffect(y, w);
      }
      function fr(y, w) {
        var P = Re();
        return P.useCallback(y, w);
      }
      function Za(y, w) {
        var P = Re();
        return P.useMemo(y, w);
      }
      function ei(y, w, P) {
        var $ = Re();
        return $.useImperativeHandle(y, w, P);
      }
      function pt(y, w) {
        {
          var P = Re();
          return P.useDebugValue(y, w);
        }
      }
      function gt() {
        var y = Re();
        return y.useTransition();
      }
      function ti(y) {
        var w = Re();
        return w.useDeferredValue(y);
      }
      function al() {
        var y = Re();
        return y.useId();
      }
      function il(y, w, P) {
        var $ = Re();
        return $.useSyncExternalStore(y, w, P);
      }
      var So = 0, Ql, Eo, Zr, Yu, Ar, uc, sc;
      function Xl() {
      }
      Xl.__reactDisabledLog = !0;
      function Co() {
        {
          if (So === 0) {
            Ql = console.log, Eo = console.info, Zr = console.warn, Yu = console.error, Ar = console.group, uc = console.groupCollapsed, sc = console.groupEnd;
            var y = {
              configurable: !0,
              enumerable: !0,
              value: Xl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: y,
              log: y,
              warn: y,
              error: y,
              group: y,
              groupCollapsed: y,
              groupEnd: y
            });
          }
          So++;
        }
      }
      function Sa() {
        {
          if (So--, So === 0) {
            var y = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: W({}, y, {
                value: Ql
              }),
              info: W({}, y, {
                value: Eo
              }),
              warn: W({}, y, {
                value: Zr
              }),
              error: W({}, y, {
                value: Yu
              }),
              group: W({}, y, {
                value: Ar
              }),
              groupCollapsed: W({}, y, {
                value: uc
              }),
              groupEnd: W({}, y, {
                value: sc
              })
            });
          }
          So < 0 && De("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = _t.ReactCurrentDispatcher, ri;
      function Kl(y, w, P) {
        {
          if (ri === void 0)
            try {
              throw Error();
            } catch (ae) {
              var $ = ae.stack.trim().match(/\n( *(at )?)/);
              ri = $ && $[1] || "";
            }
          return `
` + ri + y;
        }
      }
      var ol = !1, To;
      {
        var Jl = typeof WeakMap == "function" ? WeakMap : Map;
        To = new Jl();
      }
      function Zl(y, w) {
        if (!y || ol)
          return "";
        {
          var P = To.get(y);
          if (P !== void 0)
            return P;
        }
        var $;
        ol = !0;
        var ae = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ge;
        Ge = ni.current, ni.current = null, Co();
        try {
          if (w) {
            var de = function() {
              throw Error();
            };
            if (Object.defineProperty(de.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(de, []);
              } catch (Cn) {
                $ = Cn;
              }
              Reflect.construct(y, [], de);
            } else {
              try {
                de.call();
              } catch (Cn) {
                $ = Cn;
              }
              y.call(de.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Cn) {
              $ = Cn;
            }
            y();
          }
        } catch (Cn) {
          if (Cn && $ && typeof Cn.stack == "string") {
            for (var Qe = Cn.stack.split(`
`), Dt = $.stack.split(`
`), Ht = Qe.length - 1, cn = Dt.length - 1; Ht >= 1 && cn >= 0 && Qe[Ht] !== Dt[cn]; )
              cn--;
            for (; Ht >= 1 && cn >= 0; Ht--, cn--)
              if (Qe[Ht] !== Dt[cn]) {
                if (Ht !== 1 || cn !== 1)
                  do
                    if (Ht--, cn--, cn < 0 || Qe[Ht] !== Dt[cn]) {
                      var tn = `
` + Qe[Ht].replace(" at new ", " at ");
                      return y.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", y.displayName)), typeof y == "function" && To.set(y, tn), tn;
                    }
                  while (Ht >= 1 && cn >= 0);
                break;
              }
          }
        } finally {
          ol = !1, ni.current = Ge, Sa(), Error.prepareStackTrace = ae;
        }
        var Tt = y ? y.displayName || y.name : "", nn = Tt ? Kl(Tt) : "";
        return typeof y == "function" && To.set(y, nn), nn;
      }
      function Vi(y, w, P) {
        return Zl(y, !1);
      }
      function Qf(y) {
        var w = y.prototype;
        return !!(w && w.isReactComponent);
      }
      function Gi(y, w, P) {
        if (y == null)
          return "";
        if (typeof y == "function")
          return Zl(y, Qf(y));
        if (typeof y == "string")
          return Kl(y);
        switch (y) {
          case oe:
            return Kl("Suspense");
          case we:
            return Kl("SuspenseList");
        }
        if (typeof y == "object")
          switch (y.$$typeof) {
            case at:
              return Vi(y.render);
            case ne:
              return Gi(y.type, w, P);
            case ke: {
              var $ = y, ae = $._payload, Ge = $._init;
              try {
                return Gi(Ge(ae), w, P);
              } catch {
              }
            }
          }
        return "";
      }
      var Gt = {}, eu = _t.ReactDebugCurrentFrame;
      function Pt(y) {
        if (y) {
          var w = y._owner, P = Gi(y.type, y._source, w ? w.type : null);
          eu.setExtraStackFrame(P);
        } else
          eu.setExtraStackFrame(null);
      }
      function Wu(y, w, P, $, ae) {
        {
          var Ge = Function.call.bind(mn);
          for (var de in y)
            if (Ge(y, de)) {
              var Qe = void 0;
              try {
                if (typeof y[de] != "function") {
                  var Dt = Error(($ || "React class") + ": " + P + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                Qe = y[de](w, de, $, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Qe = Ht;
              }
              Qe && !(Qe instanceof Error) && (Pt(ae), De("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", P, de, typeof Qe), Pt(null)), Qe instanceof Error && !(Qe.message in Gt) && (Gt[Qe.message] = !0, Pt(ae), De("Failed %s type: %s", P, Qe.message), Pt(null));
            }
        }
      }
      function Si(y) {
        if (y) {
          var w = y._owner, P = Gi(y.type, y._source, w ? w.type : null);
          Bt(P);
        } else
          Bt(null);
      }
      var rt;
      rt = !1;
      function tu() {
        if (Et.current) {
          var y = On(Et.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
      function dr(y) {
        if (y !== void 0) {
          var w = y.fileName.replace(/^.*[\\\/]/, ""), P = y.lineNumber;
          return `

Check your code at ` + w + ":" + P + ".";
        }
        return "";
      }
      function Ei(y) {
        return y != null ? dr(y.__source) : "";
      }
      var Ur = {};
      function Ci(y) {
        var w = tu();
        if (!w) {
          var P = typeof y == "string" ? y : y.displayName || y.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
      function pn(y, w) {
        if (!(!y._store || y._store.validated || y.key != null)) {
          y._store.validated = !0;
          var P = Ci(w);
          if (!Ur[P]) {
            Ur[P] = !0;
            var $ = "";
            y && y._owner && y._owner !== Et.current && ($ = " It was passed a child from " + On(y._owner.type) + "."), Si(y), De('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, $), Si(null);
          }
        }
      }
      function en(y, w) {
        if (typeof y == "object") {
          if (hn(y))
            for (var P = 0; P < y.length; P++) {
              var $ = y[P];
              F($) && pn($, w);
            }
          else if (F(y))
            y._store && (y._store.validated = !0);
          else if (y) {
            var ae = Fe(y);
            if (typeof ae == "function" && ae !== y.entries)
              for (var Ge = ae.call(y), de; !(de = Ge.next()).done; )
                F(de.value) && pn(de.value, w);
          }
        }
      }
      function bo(y) {
        {
          var w = y.type;
          if (w == null || typeof w == "string")
            return;
          var P;
          if (typeof w == "function")
            P = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === at || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === ne))
            P = w.propTypes;
          else
            return;
          if (P) {
            var $ = On(w);
            Wu(P, y.props, "prop", $, y);
          } else if (w.PropTypes !== void 0 && !rt) {
            rt = !0;
            var ae = On(w);
            De("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && De("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Jn(y) {
        {
          for (var w = Object.keys(y.props), P = 0; P < w.length; P++) {
            var $ = w[P];
            if ($ !== "children" && $ !== "key") {
              Si(y), De("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Si(null);
              break;
            }
          }
          y.ref !== null && (Si(y), De("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Ir(y, w, P) {
        var $ = Q(y);
        if (!$) {
          var ae = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = Ei(w);
          Ge ? ae += Ge : ae += tu();
          var de;
          y === null ? de = "null" : hn(y) ? de = "array" : y !== void 0 && y.$$typeof === Ze ? (de = "<" + (On(y.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : de = typeof y, De("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, ae);
        }
        var Qe = m.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if ($)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            en(arguments[Dt], y);
        return y === kt ? Jn(Qe) : bo(Qe), Qe;
      }
      var Oa = !1;
      function ll(y) {
        var w = Ir.bind(null, y);
        return w.type = y, Oa || (Oa = !0, zt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return zt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: y
            }), y;
          }
        }), w;
      }
      function qu(y, w, P) {
        for (var $ = R.apply(this, arguments), ae = 2; ae < arguments.length; ae++)
          en(arguments[ae], $.type);
        return bo($), $;
      }
      function Qu(y, w) {
        var P = St.transition;
        St.transition = {};
        var $ = St.transition;
        St.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          y();
        } finally {
          if (St.transition = P, P === null && $._updatedFibers) {
            var ae = $._updatedFibers.size;
            ae > 10 && zt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), $._updatedFibers.clear();
          }
        }
      }
      var wo = !1, ul = null;
      function Xf(y) {
        if (ul === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), P = B && B[w];
            ul = P.call(B, "timers").setImmediate;
          } catch {
            ul = function(ae) {
              wo === !1 && (wo = !0, typeof MessageChannel > "u" && De("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ge = new MessageChannel();
              Ge.port1.onmessage = ae, Ge.port2.postMessage(void 0);
            };
          }
        return ul(y);
      }
      var Na = 0, ai = !1;
      function Ti(y) {
        {
          var w = Na;
          Na++, Pe.current === null && (Pe.current = []);
          var P = Pe.isBatchingLegacy, $;
          try {
            if (Pe.isBatchingLegacy = !0, $ = y(), !P && Pe.didScheduleLegacyUpdate) {
              var ae = Pe.current;
              ae !== null && (Pe.didScheduleLegacyUpdate = !1, ko(ae));
            }
          } catch (Tt) {
            throw Ma(w), Tt;
          } finally {
            Pe.isBatchingLegacy = P;
          }
          if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
            var Ge = $, de = !1, Qe = {
              then: function(Tt, nn) {
                de = !0, Ge.then(function(Cn) {
                  Ma(w), Na === 0 ? nu(Cn, Tt, nn) : Tt(Cn);
                }, function(Cn) {
                  Ma(w), nn(Cn);
                });
              }
            };
            return !ai && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (ai = !0, De("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var Dt = $;
            if (Ma(w), Na === 0) {
              var Ht = Pe.current;
              Ht !== null && (ko(Ht), Pe.current = null);
              var cn = {
                then: function(Tt, nn) {
                  Pe.current === null ? (Pe.current = [], nu(Dt, Tt, nn)) : Tt(Dt);
                }
              };
              return cn;
            } else {
              var tn = {
                then: function(Tt, nn) {
                  Tt(Dt);
                }
              };
              return tn;
            }
          }
        }
      }
      function Ma(y) {
        y !== Na - 1 && De("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = y;
      }
      function nu(y, w, P) {
        {
          var $ = Pe.current;
          if ($ !== null)
            try {
              ko($), Xf(function() {
                $.length === 0 ? (Pe.current = null, w(y)) : nu(y, w, P);
              });
            } catch (ae) {
              P(ae);
            }
          else
            w(y);
        }
      }
      var ru = !1;
      function ko(y) {
        if (!ru) {
          ru = !0;
          var w = 0;
          try {
            for (; w < y.length; w++) {
              var P = y[w];
              do
                P = P(!0);
              while (P !== null);
            }
            y.length = 0;
          } catch ($) {
            throw y = y.slice(w + 1), $;
          } finally {
            ru = !1;
          }
        }
      }
      var sl = Ir, au = qu, iu = ll, ii = {
        map: Or,
        forEach: ga,
        count: Ka,
        toArray: $i,
        only: go
      };
      V.Children = ii, V.Component = Ve, V.Fragment = kt, V.Profiler = Lt, V.PureComponent = ht, V.StrictMode = T, V.Suspense = oe, V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, V.act = Ti, V.cloneElement = au, V.createContext = rl, V.createElement = sl, V.createFactory = iu, V.createRef = Sn, V.forwardRef = gi, V.isValidElement = F, V.lazy = yi, V.memo = ve, V.startTransition = Qu, V.unstable_act = Ti, V.useCallback = fr, V.useContext = dt, V.useDebugValue = pt, V.useDeferredValue = ti, V.useEffect = Nn, V.useId = al, V.useImperativeHandle = ei, V.useInsertionEffect = sn, V.useLayoutEffect = dn, V.useMemo = Za, V.useReducer = xt, V.useRef = bt, V.useState = it, V.useSyncExternalStore = il, V.useTransition = gt, V.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(rv, rv.exports)), rv.exports;
}
var r0;
function av() {
  return r0 || (r0 = 1, process.env.NODE_ENV === "production" ? Xm.exports = a1() : Xm.exports = i1()), Xm.exports;
}
var Xr = av();
const v0 = /* @__PURE__ */ r1(Xr);
var qf = {}, Km = { exports: {} }, Qa = {}, Jm = { exports: {} }, gE = {};
var a0;
function o1() {
  return a0 || (a0 = 1, (function(B) {
    function V(re, Ae) {
      var ue = re.length;
      re.push(Ae);
      e: for (; 0 < ue; ) {
        var O = ue - 1 >>> 1, W = re[O];
        if (0 < st(W, Ae)) re[O] = Ae, re[ue] = W, ue = O;
        else break e;
      }
    }
    function M(re) {
      return re.length === 0 ? null : re[0];
    }
    function Ze(re) {
      if (re.length === 0) return null;
      var Ae = re[0], ue = re.pop();
      if (ue !== Ae) {
        re[0] = ue;
        e: for (var O = 0, W = re.length, qe = W >>> 1; O < qe; ) {
          var Ve = 2 * (O + 1) - 1, vt = re[Ve], ct = Ve + 1, lt = re[ct];
          if (0 > st(vt, ue)) ct < W && 0 > st(lt, vt) ? (re[O] = lt, re[ct] = ue, O = ct) : (re[O] = vt, re[Ve] = ue, O = Ve);
          else if (ct < W && 0 > st(lt, ue)) re[O] = lt, re[ct] = ue, O = ct;
          else break e;
        }
      }
      return Ae;
    }
    function st(re, Ae) {
      var ue = re.sortIndex - Ae.sortIndex;
      return ue !== 0 ? ue : re.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var kt = performance;
      B.unstable_now = function() {
        return kt.now();
      };
    } else {
      var T = Date, Lt = T.now();
      B.unstable_now = function() {
        return T.now() - Lt;
      };
    }
    var ce = [], fe = [], at = 1, oe = null, we = 3, ne = !1, ke = !1, Ke = !1, Me = typeof setTimeout == "function" ? setTimeout : null, Rt = typeof clearTimeout == "function" ? clearTimeout : null, Fe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pe(re) {
      for (var Ae = M(fe); Ae !== null; ) {
        if (Ae.callback === null) Ze(fe);
        else if (Ae.startTime <= re) Ze(fe), Ae.sortIndex = Ae.expirationTime, V(ce, Ae);
        else break;
        Ae = M(fe);
      }
    }
    function St(re) {
      if (Ke = !1, pe(re), !ke) if (M(ce) !== null) ke = !0, zt(Pe);
      else {
        var Ae = M(fe);
        Ae !== null && De(St, Ae.startTime - re);
      }
    }
    function Pe(re, Ae) {
      ke = !1, Ke && (Ke = !1, Rt(ln), ln = -1), ne = !0;
      var ue = we;
      try {
        for (pe(Ae), oe = M(ce); oe !== null && (!(oe.expirationTime > Ae) || re && !Ne()); ) {
          var O = oe.callback;
          if (typeof O == "function") {
            oe.callback = null, we = oe.priorityLevel;
            var W = O(oe.expirationTime <= Ae);
            Ae = B.unstable_now(), typeof W == "function" ? oe.callback = W : oe === M(ce) && Ze(ce), pe(Ae);
          } else Ze(ce);
          oe = M(ce);
        }
        if (oe !== null) var qe = !0;
        else {
          var Ve = M(fe);
          Ve !== null && De(St, Ve.startTime - Ae), qe = !1;
        }
        return qe;
      } finally {
        oe = null, we = ue, ne = !1;
      }
    }
    var Et = !1, Je = null, ln = -1, Bt = 5, Zt = -1;
    function Ne() {
      return !(B.unstable_now() - Zt < Bt);
    }
    function Ct() {
      if (Je !== null) {
        var re = B.unstable_now();
        Zt = re;
        var Ae = !0;
        try {
          Ae = Je(!0, re);
        } finally {
          Ae ? f() : (Et = !1, Je = null);
        }
      } else Et = !1;
    }
    var f;
    if (typeof Fe == "function") f = function() {
      Fe(Ct);
    };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), _t = Mt.port2;
      Mt.port1.onmessage = Ct, f = function() {
        _t.postMessage(null);
      };
    } else f = function() {
      Me(Ct, 0);
    };
    function zt(re) {
      Je = re, Et || (Et = !0, f());
    }
    function De(re, Ae) {
      ln = Me(function() {
        re(B.unstable_now());
      }, Ae);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, B.unstable_continueExecution = function() {
      ke || ne || (ke = !0, zt(Pe));
    }, B.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Bt = 0 < re ? Math.floor(1e3 / re) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return we;
    }, B.unstable_getFirstCallbackNode = function() {
      return M(ce);
    }, B.unstable_next = function(re) {
      switch (we) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = we;
      }
      var ue = we;
      we = Ae;
      try {
        return re();
      } finally {
        we = ue;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(re, Ae) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var ue = we;
      we = re;
      try {
        return Ae();
      } finally {
        we = ue;
      }
    }, B.unstable_scheduleCallback = function(re, Ae, ue) {
      var O = B.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? O + ue : O) : ue = O, re) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = ue + W, re = { id: at++, callback: Ae, priorityLevel: re, startTime: ue, expirationTime: W, sortIndex: -1 }, ue > O ? (re.sortIndex = ue, V(fe, re), M(ce) === null && re === M(fe) && (Ke ? (Rt(ln), ln = -1) : Ke = !0, De(St, ue - O))) : (re.sortIndex = W, V(ce, re), ke || ne || (ke = !0, zt(Pe))), re;
    }, B.unstable_shouldYield = Ne, B.unstable_wrapCallback = function(re) {
      var Ae = we;
      return function() {
        var ue = we;
        we = Ae;
        try {
          return re.apply(this, arguments);
        } finally {
          we = ue;
        }
      };
    };
  })(gE)), gE;
}
var SE = {};
var i0;
function l1() {
  return i0 || (i0 = 1, (function(B) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var V = !1, M = 5;
      function Ze(le, Ue) {
        var m = le.length;
        le.push(Ue), T(le, Ue, m);
      }
      function st(le) {
        return le.length === 0 ? null : le[0];
      }
      function kt(le) {
        if (le.length === 0)
          return null;
        var Ue = le[0], m = le.pop();
        return m !== Ue && (le[0] = m, Lt(le, m, 0)), Ue;
      }
      function T(le, Ue, m) {
        for (var C = m; C > 0; ) {
          var R = C - 1 >>> 1, F = le[R];
          if (ce(F, Ue) > 0)
            le[R] = Ue, le[C] = F, C = R;
          else
            return;
        }
      }
      function Lt(le, Ue, m) {
        for (var C = m, R = le.length, F = R >>> 1; C < F; ) {
          var ie = (C + 1) * 2 - 1, ge = le[ie], je = ie + 1, xe = le[je];
          if (ce(ge, Ue) < 0)
            je < R && ce(xe, ge) < 0 ? (le[C] = xe, le[je] = Ue, C = je) : (le[C] = ge, le[ie] = Ue, C = ie);
          else if (je < R && ce(xe, Ue) < 0)
            le[C] = xe, le[je] = Ue, C = je;
          else
            return;
        }
      }
      function ce(le, Ue) {
        var m = le.sortIndex - Ue.sortIndex;
        return m !== 0 ? m : le.id - Ue.id;
      }
      var fe = 1, at = 2, oe = 3, we = 4, ne = 5;
      function ke(le, Ue) {
      }
      var Ke = typeof performance == "object" && typeof performance.now == "function";
      if (Ke) {
        var Me = performance;
        B.unstable_now = function() {
          return Me.now();
        };
      } else {
        var Rt = Date, Fe = Rt.now();
        B.unstable_now = function() {
          return Rt.now() - Fe;
        };
      }
      var pe = 1073741823, St = -1, Pe = 250, Et = 5e3, Je = 1e4, ln = pe, Bt = [], Zt = [], Ne = 1, Ct = null, f = oe, Mt = !1, _t = !1, zt = !1, De = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(le) {
        for (var Ue = st(Zt); Ue !== null; ) {
          if (Ue.callback === null)
            kt(Zt);
          else if (Ue.startTime <= le)
            kt(Zt), Ue.sortIndex = Ue.expirationTime, Ze(Bt, Ue);
          else
            return;
          Ue = st(Zt);
        }
      }
      function O(le) {
        if (zt = !1, ue(le), !_t)
          if (st(Bt) !== null)
            _t = !0, En(W);
          else {
            var Ue = st(Zt);
            Ue !== null && Kn(O, Ue.startTime - le);
          }
      }
      function W(le, Ue) {
        _t = !1, zt && (zt = !1, Rr()), Mt = !0;
        var m = f;
        try {
          var C;
          if (!V) return qe(le, Ue);
        } finally {
          Ct = null, f = m, Mt = !1;
        }
      }
      function qe(le, Ue) {
        var m = Ue;
        for (ue(m), Ct = st(Bt); Ct !== null && !(Ct.expirationTime > m && (!le || ma())); ) {
          var C = Ct.callback;
          if (typeof C == "function") {
            Ct.callback = null, f = Ct.priorityLevel;
            var R = Ct.expirationTime <= m, F = C(R);
            m = B.unstable_now(), typeof F == "function" ? Ct.callback = F : Ct === st(Bt) && kt(Bt), ue(m);
          } else
            kt(Bt);
          Ct = st(Bt);
        }
        if (Ct !== null)
          return !0;
        var ie = st(Zt);
        return ie !== null && Kn(O, ie.startTime - m), !1;
      }
      function Ve(le, Ue) {
        switch (le) {
          case fe:
          case at:
          case oe:
          case we:
          case ne:
            break;
          default:
            le = oe;
        }
        var m = f;
        f = le;
        try {
          return Ue();
        } finally {
          f = m;
        }
      }
      function vt(le) {
        var Ue;
        switch (f) {
          case fe:
          case at:
          case oe:
            Ue = oe;
            break;
          default:
            Ue = f;
            break;
        }
        var m = f;
        f = Ue;
        try {
          return le();
        } finally {
          f = m;
        }
      }
      function ct(le) {
        var Ue = f;
        return function() {
          var m = f;
          f = Ue;
          try {
            return le.apply(this, arguments);
          } finally {
            f = m;
          }
        };
      }
      function lt(le, Ue, m) {
        var C = B.unstable_now(), R;
        if (typeof m == "object" && m !== null) {
          var F = m.delay;
          typeof F == "number" && F > 0 ? R = C + F : R = C;
        } else
          R = C;
        var ie;
        switch (le) {
          case fe:
            ie = St;
            break;
          case at:
            ie = Pe;
            break;
          case ne:
            ie = ln;
            break;
          case we:
            ie = Je;
            break;
          case oe:
          default:
            ie = Et;
            break;
        }
        var ge = R + ie, je = {
          id: Ne++,
          callback: Ue,
          priorityLevel: le,
          startTime: R,
          expirationTime: ge,
          sortIndex: -1
        };
        return R > C ? (je.sortIndex = R, Ze(Zt, je), st(Bt) === null && je === st(Zt) && (zt ? Rr() : zt = !0, Kn(O, R - C))) : (je.sortIndex = ge, Ze(Bt, je), !_t && !Mt && (_t = !0, En(W))), je;
      }
      function ft() {
      }
      function ht() {
        !_t && !Mt && (_t = !0, En(W));
      }
      function $t() {
        return st(Bt);
      }
      function Sn(le) {
        le.callback = null;
      }
      function rr() {
        return f;
      }
      var hn = !1, Qn = null, Rn = -1, xn = M, sr = -1;
      function ma() {
        var le = B.unstable_now() - sr;
        return !(le < xn);
      }
      function kr() {
      }
      function On(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? xn = Math.floor(1e3 / le) : xn = M;
      }
      var mn = function() {
        if (Qn !== null) {
          var le = B.unstable_now();
          sr = le;
          var Ue = !0, m = !0;
          try {
            m = Qn(Ue, le);
          } finally {
            m ? Dn() : (hn = !1, Qn = null);
          }
        } else
          hn = !1;
      }, Dn;
      if (typeof Ae == "function")
        Dn = function() {
          Ae(mn);
        };
      else if (typeof MessageChannel < "u") {
        var Xn = new MessageChannel(), Kr = Xn.port2;
        Xn.port1.onmessage = mn, Dn = function() {
          Kr.postMessage(null);
        };
      } else
        Dn = function() {
          De(mn, 0);
        };
      function En(le) {
        Qn = le, hn || (hn = !0, Dn());
      }
      function Kn(le, Ue) {
        Rn = De(function() {
          le(B.unstable_now());
        }, Ue);
      }
      function Rr() {
        re(Rn), Rn = -1;
      }
      var Jr = kr, ya = null;
      B.unstable_IdlePriority = ne, B.unstable_ImmediatePriority = fe, B.unstable_LowPriority = we, B.unstable_NormalPriority = oe, B.unstable_Profiling = ya, B.unstable_UserBlockingPriority = at, B.unstable_cancelCallback = Sn, B.unstable_continueExecution = ht, B.unstable_forceFrameRate = On, B.unstable_getCurrentPriorityLevel = rr, B.unstable_getFirstCallbackNode = $t, B.unstable_next = vt, B.unstable_pauseExecution = ft, B.unstable_requestPaint = Jr, B.unstable_runWithPriority = Ve, B.unstable_scheduleCallback = lt, B.unstable_shouldYield = ma, B.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(SE)), SE;
}
var o0;
function h0() {
  return o0 || (o0 = 1, process.env.NODE_ENV === "production" ? Jm.exports = o1() : Jm.exports = l1()), Jm.exports;
}
var l0;
function u1() {
  if (l0) return Qa;
  l0 = 1;
  var B = av(), V = h0();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ze = /* @__PURE__ */ new Set(), st = {};
  function kt(n, r) {
    T(n, r), T(n + "Capture", r);
  }
  function T(n, r) {
    for (st[n] = r, n = 0; n < r.length; n++) Ze.add(r[n]);
  }
  var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, at = {}, oe = {};
  function we(n) {
    return ce.call(oe, n) ? !0 : ce.call(at, n) ? !1 : fe.test(n) ? oe[n] = !0 : (at[n] = !0, !1);
  }
  function ne(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ke(n, r, o, u) {
    if (r === null || typeof r > "u" || ne(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
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
  function Ke(n, r, o, u, c, p, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = g;
  }
  var Me = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Me[n] = new Ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Me[r] = new Ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Me[n] = new Ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Me[n] = new Ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Me[n] = new Ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Me[n] = new Ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Me[n] = new Ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Me[n] = new Ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Me[n] = new Ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Rt = /[\-:]([a-z])/g;
  function Fe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Rt,
      Fe
    );
    Me[r] = new Ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Rt, Fe);
    Me[r] = new Ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Rt, Fe);
    Me[r] = new Ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Me[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Me.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Me[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function pe(n, r, o, u) {
    var c = Me.hasOwnProperty(r) ? Me[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ke(r, o, c, u) && (o = null), u || c === null ? we(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var St = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pe = Symbol.for("react.element"), Et = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Bt = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ue = Object.assign, O;
  function W(n) {
    if (O === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var qe = !1;
  function Ve(n, r) {
    if (!n || qe) return "";
    qe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (H) {
          var u = H;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (H) {
          u = H;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (H) {
          u = H;
        }
        n();
      }
    } catch (H) {
      if (H && u && typeof H.stack == "string") {
        for (var c = H.stack.split(`
`), p = u.stack.split(`
`), g = c.length - 1, b = p.length - 1; 1 <= g && 0 <= b && c[g] !== p[b]; ) b--;
        for (; 1 <= g && 0 <= b; g--, b--) if (c[g] !== p[b]) {
          if (g !== 1 || b !== 1)
            do
              if (g--, b--, 0 > b || c[g] !== p[b]) {
                var x = `
` + c[g].replace(" at new ", " at ");
                return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
              }
            while (1 <= g && 0 <= b);
          break;
        }
      }
    } finally {
      qe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? W(n) : "";
  }
  function vt(n) {
    switch (n.tag) {
      case 5:
        return W(n.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Je:
        return "Fragment";
      case Et:
        return "Portal";
      case Bt:
        return "Profiler";
      case ln:
        return "StrictMode";
      case f:
        return "Suspense";
      case Mt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ne:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case Ct:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
      case zt:
        r = n._payload, n = n._init;
        try {
          return ct(n(r));
        } catch {
        }
    }
    return null;
  }
  function lt(n) {
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
        return ct(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
  function ft(n) {
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
  function ht(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = ht(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, p = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        u = "" + g, p.call(this, g);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(g) {
        u = "" + g;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Sn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = ht(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function hn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var o = r.checked;
    return ue({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Rn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ft(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function xn(n, r) {
    r = r.checked, r != null && pe(n, "checked", r, !1);
  }
  function sr(n, r) {
    xn(n, r);
    var o = ft(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? kr(n, r.type, o) : r.hasOwnProperty("defaultValue") && kr(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ma(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function kr(n, r, o) {
    (r !== "number" || hn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var On = Array.isArray;
  function mn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ft(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Dn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(M(91));
    return ue({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(M(92));
        if (On(o)) {
          if (1 < o.length) throw Error(M(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ft(o) };
  }
  function Kr(n, r) {
    var o = ft(r.value), u = ft(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function En(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Jr, ya = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Jr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function le(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ue = {
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
  }, m = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ue).forEach(function(n) {
    m.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ue[r] = Ue[n];
    });
  });
  function C(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ue.hasOwnProperty(n) && Ue[n] ? ("" + r).trim() : r + "px";
  }
  function R(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = C(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var F = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ie(n, r) {
    if (r) {
      if (F[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(M(62));
    }
  }
  function ge(n, r) {
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
  var je = null;
  function xe(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var mt = null, _n = null, Vt = null;
  function Pn(n) {
    if (n = Be(n)) {
      if (typeof mt != "function") throw Error(M(280));
      var r = n.stateNode;
      r && (r = Tn(r), mt(n.stateNode, n.type, r));
    }
  }
  function Or(n) {
    _n ? Vt ? Vt.push(n) : Vt = [n] : _n = n;
  }
  function Ka() {
    if (_n) {
      var n = _n, r = Vt;
      if (Vt = _n = null, Pn(n), r) for (n = 0; n < r.length; n++) Pn(r[n]);
    }
  }
  function ga(n, r) {
    return n(r);
  }
  function $i() {
  }
  var go = !1;
  function rl(n, r, o) {
    if (go) return n(r, o);
    go = !0;
    try {
      return ga(n, r, o);
    } finally {
      go = !1, (_n !== null || Vt !== null) && ($i(), Ka());
    }
  }
  function Nr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Tn(o);
    if (u === null) return null;
    o = u[r];
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(M(231, r, typeof o));
    return o;
  }
  var Mr = !1;
  if (Lt) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      Mr = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    Mr = !1;
  }
  function mi(n, r, o, u, c, p, g, b, x) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, H);
    } catch (J) {
      this.onError(J);
    }
  }
  var Ja = !1, yi = null, gi = !1, k = null, Q = { onError: function(n) {
    Ja = !0, yi = n;
  } };
  function ve(n, r, o, u, c, p, g, b, x) {
    Ja = !1, yi = null, mi.apply(Q, arguments);
  }
  function Re(n, r, o, u, c, p, g, b, x) {
    if (ve.apply(this, arguments), Ja) {
      if (Ja) {
        var H = yi;
        Ja = !1, yi = null;
      } else throw Error(M(198));
      gi || (gi = !0, k = H);
    }
  }
  function dt(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function it(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function xt(n) {
    if (dt(n) !== n) throw Error(M(188));
  }
  function bt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = dt(n), r === null) throw Error(M(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === o) return xt(c), n;
          if (p === u) return xt(c), r;
          p = p.sibling;
        }
        throw Error(M(188));
      }
      if (o.return !== u.return) o = c, u = p;
      else {
        for (var g = !1, b = c.child; b; ) {
          if (b === o) {
            g = !0, o = c, u = p;
            break;
          }
          if (b === u) {
            g = !0, u = c, o = p;
            break;
          }
          b = b.sibling;
        }
        if (!g) {
          for (b = p.child; b; ) {
            if (b === o) {
              g = !0, o = p, u = c;
              break;
            }
            if (b === u) {
              g = !0, u = p, o = c;
              break;
            }
            b = b.sibling;
          }
          if (!g) throw Error(M(189));
        }
      }
      if (o.alternate !== u) throw Error(M(190));
    }
    if (o.tag !== 3) throw Error(M(188));
    return o.stateNode.current === o ? n : r;
  }
  function Nn(n) {
    return n = bt(n), n !== null ? sn(n) : null;
  }
  function sn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = sn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = V.unstable_scheduleCallback, fr = V.unstable_cancelCallback, Za = V.unstable_shouldYield, ei = V.unstable_requestPaint, pt = V.unstable_now, gt = V.unstable_getCurrentPriorityLevel, ti = V.unstable_ImmediatePriority, al = V.unstable_UserBlockingPriority, il = V.unstable_NormalPriority, So = V.unstable_LowPriority, Ql = V.unstable_IdlePriority, Eo = null, Zr = null;
  function Yu(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(Eo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ar = Math.clz32 ? Math.clz32 : Xl, uc = Math.log, sc = Math.LN2;
  function Xl(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (uc(n) / sc | 0) | 0;
  }
  var Co = 64, Sa = 4194304;
  function ni(n) {
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
  function ri(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, g = o & 268435455;
    if (g !== 0) {
      var b = g & ~c;
      b !== 0 ? u = ni(b) : (p &= g, p !== 0 && (u = ni(p)));
    } else g = o & ~c, g !== 0 ? u = ni(g) : p !== 0 && (u = ni(p));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Ar(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function Kl(n, r) {
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
  function ol(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var g = 31 - Ar(p), b = 1 << g, x = c[g];
      x === -1 ? ((b & o) === 0 || (b & u) !== 0) && (c[g] = Kl(b, r)) : x <= r && (n.expiredLanes |= b), p &= ~b;
    }
  }
  function To(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jl() {
    var n = Co;
    return Co <<= 1, (Co & 4194240) === 0 && (Co = 64), n;
  }
  function Zl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Vi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ar(r), n[r] = o;
  }
  function Qf(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Ar(o), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~p;
    }
  }
  function Gi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Ar(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Gt = 0;
  function eu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Pt, Wu, Si, rt, tu, dr = !1, Ei = [], Ur = null, Ci = null, pn = null, en = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new Map(), Jn = [], Ir = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ur = null;
        break;
      case "dragenter":
      case "dragleave":
        Ci = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        en.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bo.delete(r.pointerId);
    }
  }
  function ll(n, r, o, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = Be(r), r !== null && Wu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qu(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Ur = ll(Ur, n, r, o, u, c), !0;
      case "dragenter":
        return Ci = ll(Ci, n, r, o, u, c), !0;
      case "mouseover":
        return pn = ll(pn, n, r, o, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return en.set(p, ll(en.get(p) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, bo.set(p, ll(bo.get(p) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function Qu(n) {
    var r = ml(n.target);
    if (r !== null) {
      var o = dt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = it(o), r !== null) {
            n.blockedOn = r, tu(n.priority, function() {
              Si(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function wo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = au(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        je = u, o.target.dispatchEvent(u), je = null;
      } else return r = Be(o), r !== null && Wu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function ul(n, r, o) {
    wo(n) && o.delete(r);
  }
  function Xf() {
    dr = !1, Ur !== null && wo(Ur) && (Ur = null), Ci !== null && wo(Ci) && (Ci = null), pn !== null && wo(pn) && (pn = null), en.forEach(ul), bo.forEach(ul);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dr || (dr = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, Xf)));
  }
  function ai(n) {
    function r(c) {
      return Na(c, n);
    }
    if (0 < Ei.length) {
      Na(Ei[0], n);
      for (var o = 1; o < Ei.length; o++) {
        var u = Ei[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ur !== null && Na(Ur, n), Ci !== null && Na(Ci, n), pn !== null && Na(pn, n), en.forEach(r), bo.forEach(r), o = 0; o < Jn.length; o++) u = Jn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Jn.length && (o = Jn[0], o.blockedOn === null); ) Qu(o), o.blockedOn === null && Jn.shift();
  }
  var Ti = St.ReactCurrentBatchConfig, Ma = !0;
  function nu(n, r, o, u) {
    var c = Gt, p = Ti.transition;
    Ti.transition = null;
    try {
      Gt = 1, ko(n, r, o, u);
    } finally {
      Gt = c, Ti.transition = p;
    }
  }
  function ru(n, r, o, u) {
    var c = Gt, p = Ti.transition;
    Ti.transition = null;
    try {
      Gt = 4, ko(n, r, o, u);
    } finally {
      Gt = c, Ti.transition = p;
    }
  }
  function ko(n, r, o, u) {
    if (Ma) {
      var c = au(n, r, o, u);
      if (c === null) Cc(n, r, u, sl, o), Oa(n, u);
      else if (qu(c, n, r, o, u)) u.stopPropagation();
      else if (Oa(n, u), r & 4 && -1 < Ir.indexOf(n)) {
        for (; c !== null; ) {
          var p = Be(c);
          if (p !== null && Pt(p), p = au(n, r, o, u), p === null && Cc(n, r, u, sl, o), p === c) break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else Cc(n, r, u, null, o);
    }
  }
  var sl = null;
  function au(n, r, o, u) {
    if (sl = null, n = xe(u), n = ml(n), n !== null) if (r = dt(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = it(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return sl = n, null;
  }
  function iu(n) {
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
        switch (gt()) {
          case ti:
            return 1;
          case al:
            return 4;
          case il:
          case So:
            return 16;
          case Ql:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, y = null, w = null;
  function P() {
    if (w) return w;
    var n, r = y, o = r.length, u, c = "value" in ii ? ii.value : ii.textContent, p = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var g = o - n;
    for (u = 1; u <= g && r[o - u] === c[p - u]; u++) ;
    return w = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function $(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ae() {
    return !0;
  }
  function Ge() {
    return !1;
  }
  function de(n) {
    function r(o, u, c, p, g) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = g, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (o = n[b], this[b] = o ? o(p) : p[b]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ae : Ge, this.isPropagationStopped = Ge, this;
    }
    return ue(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ae);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ae);
    }, persist: function() {
    }, isPersistent: ae }), r;
  }
  var Qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = de(Qe), Ht = ue({}, Qe, { view: 0, detail: 0 }), cn = de(Ht), tn, Tt, nn, Cn = ue({}, Ht, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: td, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, Tt = n.screenY - nn.screenY) : Tt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Tt;
  } }), Ro = de(Cn), Xu = ue({}, Cn, { dataTransfer: 0 }), Yi = de(Xu), Ku = ue({}, Ht, { relatedTarget: 0 }), cl = de(Ku), Kf = ue({}, Qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = de(Kf), Jf = ue({}, Qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), iv = de(Jf), Zf = ue({}, Qe, { data: 0 }), ed = de(Zf), ov = {
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
  }, lv = {
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
  }, ny = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ny[n]) ? !!r[n] : !1;
  }
  function td() {
    return Wi;
  }
  var nd = ue({}, Ht, { key: function(n) {
    if (n.key) {
      var r = ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = $(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? lv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: td, charCode: function(n) {
    return n.type === "keypress" ? $(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), rd = de(nd), ad = ue({}, Cn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uv = de(ad), fc = ue({}, Ht, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: td }), sv = de(fc), ea = ue({}, Qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qi = de(ea), Hn = ue({}, Cn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = de(Hn), id = [9, 13, 27, 32], ou = Lt && "CompositionEvent" in window, Ju = null;
  Lt && "documentMode" in document && (Ju = document.documentMode);
  var Zu = Lt && "TextEvent" in window && !Ju, cv = Lt && (!ou || Ju && 8 < Ju && 11 >= Ju), fv = " ", dc = !1;
  function dv(n, r) {
    switch (n) {
      case "keyup":
        return id.indexOf(r.keyCode) !== -1;
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
  function pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var lu = !1;
  function vv(n, r) {
    switch (n) {
      case "compositionend":
        return pv(r);
      case "keypress":
        return r.which !== 32 ? null : (dc = !0, fv);
      case "textInput":
        return n = r.data, n === fv && dc ? null : n;
      default:
        return null;
    }
  }
  function ry(n, r) {
    if (lu) return n === "compositionend" || !ou && dv(n, r) ? (n = P(), w = y = ii = null, lu = !1, n) : null;
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
        return cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ay = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function hv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ay[n.type] : r === "textarea";
  }
  function od(n, r, o, u) {
    Or(u), r = is(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var bi = null, fl = null;
  function mv(n) {
    vl(n, 0);
  }
  function es(n) {
    var r = li(n);
    if (rr(r)) return n;
  }
  function iy(n, r) {
    if (n === "change") return r;
  }
  var yv = !1;
  if (Lt) {
    var ld;
    if (Lt) {
      var ud = "oninput" in document;
      if (!ud) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), ud = typeof gv.oninput == "function";
      }
      ld = ud;
    } else ld = !1;
    yv = ld && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    bi && (bi.detachEvent("onpropertychange", Ev), fl = bi = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && es(fl)) {
      var r = [];
      od(r, fl, n, xe(n)), rl(mv, r);
    }
  }
  function oy(n, r, o) {
    n === "focusin" ? (Sv(), bi = r, fl = o, bi.attachEvent("onpropertychange", Ev)) : n === "focusout" && Sv();
  }
  function Cv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return es(fl);
  }
  function ly(n, r) {
    if (n === "click") return es(r);
  }
  function Tv(n, r) {
    if (n === "input" || n === "change") return es(r);
  }
  function uy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var oi = typeof Object.is == "function" ? Object.is : uy;
  function ts(n, r) {
    if (oi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!ce.call(r, c) || !oi(n[c], r[c])) return !1;
    }
    return !0;
  }
  function bv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function pc(n, r) {
    var o = bv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = bv(o);
    }
  }
  function xo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? xo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ns() {
    for (var n = window, r = hn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = hn(n.document);
    }
    return r;
  }
  function vc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uu(n) {
    var r = ns(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && xo(o.ownerDocument.documentElement, o)) {
      if (u !== null && vc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = pc(o, p);
          var g = pc(
            o,
            u
          );
          c && g && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== g.node || n.focusOffset !== g.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(g.node, g.offset)) : (r.setEnd(g.node, g.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var sy = Lt && "documentMode" in document && 11 >= document.documentMode, su = null, sd = null, rs = null, cd = !1;
  function fd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    cd || su == null || su !== hn(u) || (u = su, "selectionStart" in u && vc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), rs && ts(rs, u) || (rs = u, u = is(sd, "onSelect"), 0 < u.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = su)));
  }
  function hc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var dl = { animationend: hc("Animation", "AnimationEnd"), animationiteration: hc("Animation", "AnimationIteration"), animationstart: hc("Animation", "AnimationStart"), transitionend: hc("Transition", "TransitionEnd") }, pr = {}, dd = {};
  Lt && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function mc(n) {
    if (pr[n]) return pr[n];
    if (!dl[n]) return n;
    var r = dl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in dd) return pr[n] = r[o];
    return n;
  }
  var wv = mc("animationend"), kv = mc("animationiteration"), Rv = mc("animationstart"), xv = mc("transitionend"), pd = /* @__PURE__ */ new Map(), yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    pd.set(n, r), kt(r, [n]);
  }
  for (var vd = 0; vd < yc.length; vd++) {
    var pl = yc[vd], cy = pl.toLowerCase(), fy = pl[0].toUpperCase() + pl.slice(1);
    Aa(cy, "on" + fy);
  }
  Aa(wv, "onAnimationEnd"), Aa(kv, "onAnimationIteration"), Aa(Rv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(xv, "onTransitionEnd"), T("onMouseEnter", ["mouseout", "mouseover"]), T("onMouseLeave", ["mouseout", "mouseover"]), T("onPointerEnter", ["pointerout", "pointerover"]), T("onPointerLeave", ["pointerout", "pointerover"]), kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hd = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function gc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Re(u, r, void 0, n), n.currentTarget = null;
  }
  function vl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r) for (var g = u.length - 1; 0 <= g; g--) {
          var b = u[g], x = b.instance, H = b.currentTarget;
          if (b = b.listener, x !== p && c.isPropagationStopped()) break e;
          gc(c, b, H), p = x;
        }
        else for (g = 0; g < u.length; g++) {
          if (b = u[g], x = b.instance, H = b.currentTarget, b = b.listener, x !== p && c.isPropagationStopped()) break e;
          gc(c, b, H), p = x;
        }
      }
    }
    if (gi) throw n = k, gi = !1, k = null, n;
  }
  function Kt(n, r) {
    var o = r[us];
    o === void 0 && (o = r[us] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Dv(r, n, 2, !1), o.add(u));
  }
  function Sc(n, r, o) {
    var u = 0;
    r && (u |= 4), Dv(o, n, u, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function cu(n) {
    if (!n[Ec]) {
      n[Ec] = !0, Ze.forEach(function(o) {
        o !== "selectionchange" && (hd.has(o) || Sc(o, !1, n), Sc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ec] || (r[Ec] = !0, Sc("selectionchange", !1, r));
    }
  }
  function Dv(n, r, o, u) {
    switch (iu(r)) {
      case 1:
        var c = nu;
        break;
      case 4:
        c = ru;
        break;
      default:
        c = ko;
    }
    o = c.bind(null, r, o, n), c = void 0, !Mr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Cc(n, r, o, u, c) {
    var p = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var g = u.tag;
      if (g === 3 || g === 4) {
        var b = u.stateNode.containerInfo;
        if (b === c || b.nodeType === 8 && b.parentNode === c) break;
        if (g === 4) for (g = u.return; g !== null; ) {
          var x = g.tag;
          if ((x === 3 || x === 4) && (x = g.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          g = g.return;
        }
        for (; b !== null; ) {
          if (g = ml(b), g === null) return;
          if (x = g.tag, x === 5 || x === 6) {
            u = p = g;
            continue e;
          }
          b = b.parentNode;
        }
      }
      u = u.return;
    }
    rl(function() {
      var H = p, J = xe(o), ee = [];
      e: {
        var K = pd.get(n);
        if (K !== void 0) {
          var Ee = Dt, _e = n;
          switch (n) {
            case "keypress":
              if ($(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ee = rd;
              break;
            case "focusin":
              _e = "focus", Ee = cl;
              break;
            case "focusout":
              _e = "blur", Ee = cl;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = cl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ee = Ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = Yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = sv;
              break;
            case wv:
            case kv:
            case Rv:
              Ee = cc;
              break;
            case xv:
              Ee = qi;
              break;
            case "scroll":
              Ee = cn;
              break;
            case "wheel":
              Ee = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = iv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = uv;
          }
          var Ie = (r & 4) !== 0, Fn = !Ie && n === "scroll", N = Ie ? K !== null ? K + "Capture" : null : K;
          Ie = [];
          for (var _ = H, I; _ !== null; ) {
            I = _;
            var Z = I.stateNode;
            if (I.tag === 5 && Z !== null && (I = Z, N !== null && (Z = Nr(_, N), Z != null && Ie.push(fu(_, Z, I)))), Fn) break;
            _ = _.return;
          }
          0 < Ie.length && (K = new Ee(K, _e, null, o, J), ee.push({ event: K, listeners: Ie }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", K && o !== je && (_e = o.relatedTarget || o.fromElement) && (ml(_e) || _e[Xi])) break e;
          if ((Ee || K) && (K = J.window === J ? J : (K = J.ownerDocument) ? K.defaultView || K.parentWindow : window, Ee ? (_e = o.relatedTarget || o.toElement, Ee = H, _e = _e ? ml(_e) : null, _e !== null && (Fn = dt(_e), _e !== Fn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (Ee = null, _e = H), Ee !== _e)) {
            if (Ie = Ro, Z = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = uv, Z = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), Fn = Ee == null ? K : li(Ee), I = _e == null ? K : li(_e), K = new Ie(Z, _ + "leave", Ee, o, J), K.target = Fn, K.relatedTarget = I, Z = null, ml(J) === H && (Ie = new Ie(N, _ + "enter", _e, o, J), Ie.target = I, Ie.relatedTarget = Fn, Z = Ie), Fn = Z, Ee && _e) t: {
              for (Ie = Ee, N = _e, _ = 0, I = Ie; I; I = Do(I)) _++;
              for (I = 0, Z = N; Z; Z = Do(Z)) I++;
              for (; 0 < _ - I; ) Ie = Do(Ie), _--;
              for (; 0 < I - _; ) N = Do(N), I--;
              for (; _--; ) {
                if (Ie === N || N !== null && Ie === N.alternate) break t;
                Ie = Do(Ie), N = Do(N);
              }
              Ie = null;
            }
            else Ie = null;
            Ee !== null && _v(ee, K, Ee, Ie, !1), _e !== null && Fn !== null && _v(ee, Fn, _e, Ie, !0);
          }
        }
        e: {
          if (K = H ? li(H) : window, Ee = K.nodeName && K.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && K.type === "file") var Le = iy;
          else if (hv(K)) if (yv) Le = Tv;
          else {
            Le = Cv;
            var We = oy;
          }
          else (Ee = K.nodeName) && Ee.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (Le = ly);
          if (Le && (Le = Le(n, H))) {
            od(ee, Le, o, J);
            break e;
          }
          We && We(n, K, H), n === "focusout" && (We = K._wrapperState) && We.controlled && K.type === "number" && kr(K, "number", K.value);
        }
        switch (We = H ? li(H) : window, n) {
          case "focusin":
            (hv(We) || We.contentEditable === "true") && (su = We, sd = H, rs = null);
            break;
          case "focusout":
            rs = sd = su = null;
            break;
          case "mousedown":
            cd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cd = !1, fd(ee, o, J);
            break;
          case "selectionchange":
            if (sy) break;
          case "keydown":
          case "keyup":
            fd(ee, o, J);
        }
        var Xe;
        if (ou) e: {
          switch (n) {
            case "compositionstart":
              var nt = "onCompositionStart";
              break e;
            case "compositionend":
              nt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              nt = "onCompositionUpdate";
              break e;
          }
          nt = void 0;
        }
        else lu ? dv(n, o) && (nt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (nt = "onCompositionStart");
        nt && (cv && o.locale !== "ko" && (lu || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && lu && (Xe = P()) : (ii = J, y = "value" in ii ? ii.value : ii.textContent, lu = !0)), We = is(H, nt), 0 < We.length && (nt = new ed(nt, n, null, o, J), ee.push({ event: nt, listeners: We }), Xe ? nt.data = Xe : (Xe = pv(o), Xe !== null && (nt.data = Xe)))), (Xe = Zu ? vv(n, o) : ry(n, o)) && (H = is(H, "onBeforeInput"), 0 < H.length && (J = new ed("onBeforeInput", "beforeinput", null, o, J), ee.push({ event: J, listeners: H }), J.data = Xe));
      }
      vl(ee, r);
    });
  }
  function fu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function is(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = Nr(n, o), p != null && u.unshift(fu(n, p, c)), p = Nr(n, r), p != null && u.push(fu(n, p, c))), n = n.return;
    }
    return u;
  }
  function Do(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _v(n, r, o, u, c) {
    for (var p = r._reactName, g = []; o !== null && o !== u; ) {
      var b = o, x = b.alternate, H = b.stateNode;
      if (x !== null && x === u) break;
      b.tag === 5 && H !== null && (b = H, c ? (x = Nr(o, p), x != null && g.unshift(fu(o, x, b))) : c || (x = Nr(o, p), x != null && g.push(fu(o, x, b)))), o = o.return;
    }
    g.length !== 0 && n.push({ event: r, listeners: g });
  }
  var Lv = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(Lv, `
`).replace(dy, "");
  }
  function Tc(n, r, o) {
    if (r = Ov(r), Ov(n) !== r && o) throw Error(M(425));
  }
  function _o() {
  }
  var os = null, hl = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wc = typeof setTimeout == "function" ? setTimeout : void 0, md = typeof clearTimeout == "function" ? clearTimeout : void 0, Nv = typeof Promise == "function" ? Promise : void 0, du = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nv < "u" ? function(n) {
    return Nv.resolve(null).then(n).catch(kc);
  } : wc;
  function kc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function pu(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), ai(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    ai(r);
  }
  function wi(n) {
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
  function Mv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Lo = Math.random().toString(36).slice(2), ki = "__reactFiber$" + Lo, ls = "__reactProps$" + Lo, Xi = "__reactContainer$" + Lo, us = "__reactEvents$" + Lo, vu = "__reactListeners$" + Lo, py = "__reactHandles$" + Lo;
  function ml(n) {
    var r = n[ki];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Xi] || o[ki]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Mv(n); n !== null; ) {
          if (o = n[ki]) return o;
          n = Mv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Be(n) {
    return n = n[ki] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function li(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(M(33));
  }
  function Tn(n) {
    return n[ls] || null;
  }
  var At = [], Ua = -1;
  function Ia(n) {
    return { current: n };
  }
  function fn(n) {
    0 > Ua || (n.current = At[Ua], At[Ua] = null, Ua--);
  }
  function He(n, r) {
    Ua++, At[Ua] = n.current, n.current = r;
  }
  var xr = {}, Ln = Ia(xr), Zn = Ia(!1), ta = xr;
  function na(n, r) {
    var o = n.type.contextTypes;
    if (!o) return xr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in o) c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function hu() {
    fn(Zn), fn(Ln);
  }
  function Av(n, r, o) {
    if (Ln.current !== xr) throw Error(M(168));
    He(Ln, r), He(Zn, o);
  }
  function ss(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(M(108, lt(n) || "Unknown", c));
    return ue({}, o, u);
  }
  function ar(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || xr, ta = Ln.current, He(Ln, n), He(Zn, Zn.current), !0;
  }
  function Rc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(M(169));
    o ? (n = ss(n, r, ta), u.__reactInternalMemoizedMergedChildContext = n, fn(Zn), fn(Ln), He(Ln, n)) : fn(Zn), He(Zn, o);
  }
  var Ri = null, mu = !1, Ki = !1;
  function xc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function Oo(n) {
    mu = !0, xc(n);
  }
  function xi() {
    if (!Ki && Ri !== null) {
      Ki = !0;
      var n = 0, r = Gt;
      try {
        var o = Ri;
        for (Gt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ri = null, mu = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), dn(ti, xi), c;
      } finally {
        Gt = r, Ki = !1;
      }
    }
    return null;
  }
  var No = [], Mo = 0, Ao = null, Ji = 0, Bn = [], Fa = 0, Ea = null, Di = 1, _i = "";
  function yl(n, r) {
    No[Mo++] = Ji, No[Mo++] = Ao, Ao = n, Ji = r;
  }
  function Uv(n, r, o) {
    Bn[Fa++] = Di, Bn[Fa++] = _i, Bn[Fa++] = Ea, Ea = n;
    var u = Di;
    n = _i;
    var c = 32 - Ar(u) - 1;
    u &= ~(1 << c), o += 1;
    var p = 32 - Ar(r) + c;
    if (30 < p) {
      var g = c - c % 5;
      p = (u & (1 << g) - 1).toString(32), u >>= g, c -= g, Di = 1 << 32 - Ar(r) + c | o << c | u, _i = p + n;
    } else Di = 1 << p | o << c | u, _i = n;
  }
  function Dc(n) {
    n.return !== null && (yl(n, 1), Uv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ao; ) Ao = No[--Mo], No[Mo] = null, Ji = No[--Mo], No[Mo] = null;
    for (; n === Ea; ) Ea = Bn[--Fa], Bn[Fa] = null, _i = Bn[--Fa], Bn[Fa] = null, Di = Bn[--Fa], Bn[Fa] = null;
  }
  var ra = null, aa = null, yn = !1, za = null;
  function yd(n, r) {
    var o = $a(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Iv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = wi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ea !== null ? { id: Di, overflow: _i } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = $a(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, aa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function gd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Sd(n) {
    if (yn) {
      var r = aa;
      if (r) {
        var o = r;
        if (!Iv(n, r)) {
          if (gd(n)) throw Error(M(418));
          r = wi(o.nextSibling);
          var u = ra;
          r && Iv(n, r) ? yd(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, ra = n);
        }
      } else {
        if (gd(n)) throw Error(M(418));
        n.flags = n.flags & -4097 | 2, yn = !1, ra = n;
      }
    }
  }
  function er(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ra = n;
  }
  function Lc(n) {
    if (n !== ra) return !1;
    if (!yn) return er(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = aa)) {
      if (gd(n)) throw cs(), Error(M(418));
      for (; r; ) yd(n, r), r = wi(r.nextSibling);
    }
    if (er(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                aa = wi(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        aa = null;
      }
    } else aa = ra ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function cs() {
    for (var n = aa; n; ) n = wi(n.nextSibling);
  }
  function Uo() {
    aa = ra = null, yn = !1;
  }
  function Zi(n) {
    za === null ? za = [n] : za.push(n);
  }
  var vy = St.ReactCurrentBatchConfig;
  function gl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(M(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(M(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(g) {
          var b = c.refs;
          g === null ? delete b[p] : b[p] = g;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string") throw Error(M(284));
      if (!o._owner) throw Error(M(290, n));
    }
    return n;
  }
  function Oc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Fv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sl(n) {
    function r(N, _) {
      if (n) {
        var I = N.deletions;
        I === null ? (N.deletions = [_], N.flags |= 16) : I.push(_);
      }
    }
    function o(N, _) {
      if (!n) return null;
      for (; _ !== null; ) r(N, _), _ = _.sibling;
      return null;
    }
    function u(N, _) {
      for (N = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? N.set(_.key, _) : N.set(_.index, _), _ = _.sibling;
      return N;
    }
    function c(N, _) {
      return N = $o(N, _), N.index = 0, N.sibling = null, N;
    }
    function p(N, _, I) {
      return N.index = I, n ? (I = N.alternate, I !== null ? (I = I.index, I < _ ? (N.flags |= 2, _) : I) : (N.flags |= 2, _)) : (N.flags |= 1048576, _);
    }
    function g(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function b(N, _, I, Z) {
      return _ === null || _.tag !== 6 ? (_ = Xd(I, N.mode, Z), _.return = N, _) : (_ = c(_, I), _.return = N, _);
    }
    function x(N, _, I, Z) {
      var Le = I.type;
      return Le === Je ? J(N, _, I.props.children, Z, I.key) : _ !== null && (_.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === zt && Fv(Le) === _.type) ? (Z = c(_, I.props), Z.ref = gl(N, _, I), Z.return = N, Z) : (Z = Hs(I.type, I.key, I.props, null, N.mode, Z), Z.ref = gl(N, _, I), Z.return = N, Z);
    }
    function H(N, _, I, Z) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== I.containerInfo || _.stateNode.implementation !== I.implementation ? (_ = ff(I, N.mode, Z), _.return = N, _) : (_ = c(_, I.children || []), _.return = N, _);
    }
    function J(N, _, I, Z, Le) {
      return _ === null || _.tag !== 7 ? (_ = io(I, N.mode, Z, Le), _.return = N, _) : (_ = c(_, I), _.return = N, _);
    }
    function ee(N, _, I) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Xd("" + _, N.mode, I), _.return = N, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Pe:
            return I = Hs(_.type, _.key, _.props, null, N.mode, I), I.ref = gl(N, null, _), I.return = N, I;
          case Et:
            return _ = ff(_, N.mode, I), _.return = N, _;
          case zt:
            var Z = _._init;
            return ee(N, Z(_._payload), I);
        }
        if (On(_) || Ae(_)) return _ = io(_, N.mode, I, null), _.return = N, _;
        Oc(N, _);
      }
      return null;
    }
    function K(N, _, I, Z) {
      var Le = _ !== null ? _.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return Le !== null ? null : b(N, _, "" + I, Z);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Pe:
            return I.key === Le ? x(N, _, I, Z) : null;
          case Et:
            return I.key === Le ? H(N, _, I, Z) : null;
          case zt:
            return Le = I._init, K(
              N,
              _,
              Le(I._payload),
              Z
            );
        }
        if (On(I) || Ae(I)) return Le !== null ? null : J(N, _, I, Z, null);
        Oc(N, I);
      }
      return null;
    }
    function Ee(N, _, I, Z, Le) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return N = N.get(I) || null, b(_, N, "" + Z, Le);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Pe:
            return N = N.get(Z.key === null ? I : Z.key) || null, x(_, N, Z, Le);
          case Et:
            return N = N.get(Z.key === null ? I : Z.key) || null, H(_, N, Z, Le);
          case zt:
            var We = Z._init;
            return Ee(N, _, I, We(Z._payload), Le);
        }
        if (On(Z) || Ae(Z)) return N = N.get(I) || null, J(_, N, Z, Le, null);
        Oc(_, Z);
      }
      return null;
    }
    function _e(N, _, I, Z) {
      for (var Le = null, We = null, Xe = _, nt = _ = 0, lr = null; Xe !== null && nt < I.length; nt++) {
        Xe.index > nt ? (lr = Xe, Xe = null) : lr = Xe.sibling;
        var qt = K(N, Xe, I[nt], Z);
        if (qt === null) {
          Xe === null && (Xe = lr);
          break;
        }
        n && Xe && qt.alternate === null && r(N, Xe), _ = p(qt, _, nt), We === null ? Le = qt : We.sibling = qt, We = qt, Xe = lr;
      }
      if (nt === I.length) return o(N, Xe), yn && yl(N, nt), Le;
      if (Xe === null) {
        for (; nt < I.length; nt++) Xe = ee(N, I[nt], Z), Xe !== null && (_ = p(Xe, _, nt), We === null ? Le = Xe : We.sibling = Xe, We = Xe);
        return yn && yl(N, nt), Le;
      }
      for (Xe = u(N, Xe); nt < I.length; nt++) lr = Ee(Xe, N, nt, I[nt], Z), lr !== null && (n && lr.alternate !== null && Xe.delete(lr.key === null ? nt : lr.key), _ = p(lr, _, nt), We === null ? Le = lr : We.sibling = lr, We = lr);
      return n && Xe.forEach(function(Yo) {
        return r(N, Yo);
      }), yn && yl(N, nt), Le;
    }
    function Ie(N, _, I, Z) {
      var Le = Ae(I);
      if (typeof Le != "function") throw Error(M(150));
      if (I = Le.call(I), I == null) throw Error(M(151));
      for (var We = Le = null, Xe = _, nt = _ = 0, lr = null, qt = I.next(); Xe !== null && !qt.done; nt++, qt = I.next()) {
        Xe.index > nt ? (lr = Xe, Xe = null) : lr = Xe.sibling;
        var Yo = K(N, Xe, qt.value, Z);
        if (Yo === null) {
          Xe === null && (Xe = lr);
          break;
        }
        n && Xe && Yo.alternate === null && r(N, Xe), _ = p(Yo, _, nt), We === null ? Le = Yo : We.sibling = Yo, We = Yo, Xe = lr;
      }
      if (qt.done) return o(
        N,
        Xe
      ), yn && yl(N, nt), Le;
      if (Xe === null) {
        for (; !qt.done; nt++, qt = I.next()) qt = ee(N, qt.value, Z), qt !== null && (_ = p(qt, _, nt), We === null ? Le = qt : We.sibling = qt, We = qt);
        return yn && yl(N, nt), Le;
      }
      for (Xe = u(N, Xe); !qt.done; nt++, qt = I.next()) qt = Ee(Xe, N, nt, qt.value, Z), qt !== null && (n && qt.alternate !== null && Xe.delete(qt.key === null ? nt : qt.key), _ = p(qt, _, nt), We === null ? Le = qt : We.sibling = qt, We = qt);
      return n && Xe.forEach(function(Sh) {
        return r(N, Sh);
      }), yn && yl(N, nt), Le;
    }
    function Fn(N, _, I, Z) {
      if (typeof I == "object" && I !== null && I.type === Je && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Pe:
            e: {
              for (var Le = I.key, We = _; We !== null; ) {
                if (We.key === Le) {
                  if (Le = I.type, Le === Je) {
                    if (We.tag === 7) {
                      o(N, We.sibling), _ = c(We, I.props.children), _.return = N, N = _;
                      break e;
                    }
                  } else if (We.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === zt && Fv(Le) === We.type) {
                    o(N, We.sibling), _ = c(We, I.props), _.ref = gl(N, We, I), _.return = N, N = _;
                    break e;
                  }
                  o(N, We);
                  break;
                } else r(N, We);
                We = We.sibling;
              }
              I.type === Je ? (_ = io(I.props.children, N.mode, Z, I.key), _.return = N, N = _) : (Z = Hs(I.type, I.key, I.props, null, N.mode, Z), Z.ref = gl(N, _, I), Z.return = N, N = Z);
            }
            return g(N);
          case Et:
            e: {
              for (We = I.key; _ !== null; ) {
                if (_.key === We) if (_.tag === 4 && _.stateNode.containerInfo === I.containerInfo && _.stateNode.implementation === I.implementation) {
                  o(N, _.sibling), _ = c(_, I.children || []), _.return = N, N = _;
                  break e;
                } else {
                  o(N, _);
                  break;
                }
                else r(N, _);
                _ = _.sibling;
              }
              _ = ff(I, N.mode, Z), _.return = N, N = _;
            }
            return g(N);
          case zt:
            return We = I._init, Fn(N, _, We(I._payload), Z);
        }
        if (On(I)) return _e(N, _, I, Z);
        if (Ae(I)) return Ie(N, _, I, Z);
        Oc(N, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, _ !== null && _.tag === 6 ? (o(N, _.sibling), _ = c(_, I), _.return = N, N = _) : (o(N, _), _ = Xd(I, N.mode, Z), _.return = N, N = _), g(N)) : o(N, _);
    }
    return Fn;
  }
  var Mn = Sl(!0), he = Sl(!1), Ca = Ia(null), ia = null, yu = null, Ed = null;
  function Cd() {
    Ed = yu = ia = null;
  }
  function Td(n) {
    var r = Ca.current;
    fn(Ca), n._currentValue = r;
  }
  function bd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function bn(n, r) {
    ia = n, Ed = yu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Vn = !0), n.firstContext = null);
  }
  function Pa(n) {
    var r = n._currentValue;
    if (Ed !== n) if (n = { context: n, memoizedValue: r, next: null }, yu === null) {
      if (ia === null) throw Error(M(308));
      yu = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else yu = yu.next = n;
    return r;
  }
  var El = null;
  function wd(n) {
    El === null ? El = [n] : El.push(n);
  }
  function kd(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, wd(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ta(n, u);
  }
  function Ta(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var ba = !1;
  function Rd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function eo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Io(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Ut & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ta(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, wd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ta(n, o);
  }
  function Nc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  function Pv(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var g = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          p === null ? c = p = g : p = p.next = g, o = o.next;
        } while (o !== null);
        p === null ? c = p = r : p = p.next = r;
      } else c = p = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function fs(n, r, o, u) {
    var c = n.updateQueue;
    ba = !1;
    var p = c.firstBaseUpdate, g = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var x = b, H = x.next;
      x.next = null, g === null ? p = H : g.next = H, g = x;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, b = J.lastBaseUpdate, b !== g && (b === null ? J.firstBaseUpdate = H : b.next = H, J.lastBaseUpdate = x));
    }
    if (p !== null) {
      var ee = c.baseState;
      g = 0, J = H = x = null, b = p;
      do {
        var K = b.lane, Ee = b.eventTime;
        if ((u & K) === K) {
          J !== null && (J = J.next = {
            eventTime: Ee,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var _e = n, Ie = b;
            switch (K = r, Ee = o, Ie.tag) {
              case 1:
                if (_e = Ie.payload, typeof _e == "function") {
                  ee = _e.call(Ee, ee, K);
                  break e;
                }
                ee = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Ie.payload, K = typeof _e == "function" ? _e.call(Ee, ee, K) : _e, K == null) break e;
                ee = ue({}, ee, K);
                break e;
              case 2:
                ba = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [b] : K.push(b));
        } else Ee = { eventTime: Ee, lane: K, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, J === null ? (H = J = Ee, x = ee) : J = J.next = Ee, g |= K;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null) break;
          K = b, b = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (J === null && (x = ee), c.baseState = x, c.firstBaseUpdate = H, c.lastBaseUpdate = J, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          g |= c.lane, c = c.next;
        while (c !== r);
      } else p === null && (c.shared.lanes = 0);
      Ai |= g, n.lanes = g, n.memoizedState = ee;
    }
  }
  function xd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(M(191, c));
        c.call(u);
      }
    }
  }
  var ds = {}, Li = Ia(ds), ps = Ia(ds), vs = Ia(ds);
  function Cl(n) {
    if (n === ds) throw Error(M(174));
    return n;
  }
  function Dd(n, r) {
    switch (He(vs, r), He(ps, n), He(Li, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Rr(r, n);
    }
    fn(Li), He(Li, r);
  }
  function Tl() {
    fn(Li), fn(ps), fn(vs);
  }
  function Hv(n) {
    Cl(vs.current);
    var r = Cl(Li.current), o = Rr(r, n.type);
    r !== o && (He(ps, n), He(Li, o));
  }
  function Mc(n) {
    ps.current === n && (fn(Li), fn(ps));
  }
  var wn = Ia(0);
  function Ac(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
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
  function $e() {
    for (var n = 0; n < hs.length; n++) hs[n]._workInProgressVersionPrimary = null;
    hs.length = 0;
  }
  var wt = St.ReactCurrentDispatcher, Yt = St.ReactCurrentBatchConfig, rn = 0, Wt = null, $n = null, ir = null, Uc = !1, ms = !1, bl = 0, X = 0;
  function jt() {
    throw Error(M(321));
  }
  function et(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!oi(n[o], r[o])) return !1;
    return !0;
  }
  function Fo(n, r, o, u, c, p) {
    if (rn = p, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wt.current = n === null || n.memoizedState === null ? Xc : Ts, n = o(u, c), ms) {
      p = 0;
      do {
        if (ms = !1, bl = 0, 25 <= p) throw Error(M(301));
        p += 1, ir = $n = null, r.updateQueue = null, wt.current = Kc, n = o(u, c);
      } while (ms);
    }
    if (wt.current = Dl, r = $n !== null && $n.next !== null, rn = 0, ir = $n = Wt = null, Uc = !1, r) throw Error(M(300));
    return n;
  }
  function ui() {
    var n = bl !== 0;
    return bl = 0, n;
  }
  function Dr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ir === null ? Wt.memoizedState = ir = n : ir = ir.next = n, ir;
  }
  function An() {
    if ($n === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = $n.next;
    var r = ir === null ? Wt.memoizedState : ir.next;
    if (r !== null) ir = r, $n = n;
    else {
      if (n === null) throw Error(M(310));
      $n = n, n = { memoizedState: $n.memoizedState, baseState: $n.baseState, baseQueue: $n.baseQueue, queue: $n.queue, next: null }, ir === null ? Wt.memoizedState = ir = n : ir = ir.next = n;
    }
    return ir;
  }
  function to(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zo(n) {
    var r = An(), o = r.queue;
    if (o === null) throw Error(M(311));
    o.lastRenderedReducer = n;
    var u = $n, c = u.baseQueue, p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = p.next, p.next = g;
      }
      u.baseQueue = c = p, o.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var b = g = null, x = null, H = p;
      do {
        var J = H.lane;
        if ((rn & J) === J) x !== null && (x = x.next = { lane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), u = H.hasEagerState ? H.eagerState : n(u, H.action);
        else {
          var ee = {
            lane: J,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          };
          x === null ? (b = x = ee, g = u) : x = x.next = ee, Wt.lanes |= J, Ai |= J;
        }
        H = H.next;
      } while (H !== null && H !== p);
      x === null ? g = u : x.next = b, oi(u, r.memoizedState) || (Vn = !0), r.memoizedState = u, r.baseState = g, r.baseQueue = x, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, Wt.lanes |= p, Ai |= p, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function wl(n) {
    var r = An(), o = r.queue;
    if (o === null) throw Error(M(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var g = c = c.next;
      do
        p = n(p, g.action), g = g.next;
      while (g !== c);
      oi(p, r.memoizedState) || (Vn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function Ic() {
  }
  function Fc(n, r) {
    var o = Wt, u = An(), c = r(), p = !oi(u.memoizedState, c);
    if (p && (u.memoizedState = c, Vn = !0), u = u.queue, ys(Hc.bind(null, o, u, n), [n]), u.getSnapshot !== r || p || ir !== null && ir.memoizedState.tag & 1) {
      if (o.flags |= 2048, kl(9, Pc.bind(null, o, u, c, r), void 0, null), tr === null) throw Error(M(349));
      (rn & 30) !== 0 || zc(o, r, c);
    }
    return c;
  }
  function zc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Pc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, jc(r) && Bc(n);
  }
  function Hc(n, r, o) {
    return o(function() {
      jc(r) && Bc(n);
    });
  }
  function jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !oi(n, o);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = Ta(n, 1);
    r !== null && Hr(r, n, 1, -1);
  }
  function $c(n) {
    var r = Dr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: to, lastRenderedState: n }, r.queue = n, n = n.dispatch = xl.bind(null, Wt, n), [r.memoizedState, n];
  }
  function kl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Vc() {
    return An().memoizedState;
  }
  function gu(n, r, o, u) {
    var c = Dr();
    Wt.flags |= n, c.memoizedState = kl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Su(n, r, o, u) {
    var c = An();
    u = u === void 0 ? null : u;
    var p = void 0;
    if ($n !== null) {
      var g = $n.memoizedState;
      if (p = g.destroy, u !== null && et(u, g.deps)) {
        c.memoizedState = kl(r, o, p, u);
        return;
      }
    }
    Wt.flags |= n, c.memoizedState = kl(1 | r, o, p, u);
  }
  function Gc(n, r) {
    return gu(8390656, 8, n, r);
  }
  function ys(n, r) {
    return Su(2048, 8, n, r);
  }
  function Yc(n, r) {
    return Su(4, 2, n, r);
  }
  function gs(n, r) {
    return Su(4, 4, n, r);
  }
  function Rl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(4, 4, Rl.bind(null, r, n), o);
  }
  function Ss() {
  }
  function qc(n, r) {
    var o = An();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && et(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Qc(n, r) {
    var o = An();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && et(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function _d(n, r, o) {
    return (rn & 21) === 0 ? (n.baseState && (n.baseState = !1, Vn = !0), n.memoizedState = o) : (oi(o, r) || (o = Jl(), Wt.lanes |= o, Ai |= o, n.baseState = !0), r);
  }
  function Es(n, r) {
    var o = Gt;
    Gt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Yt.transition;
    Yt.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = o, Yt.transition = u;
    }
  }
  function Ld() {
    return An().memoizedState;
  }
  function Cs(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, oa(n)) jv(r, o);
    else if (o = kd(n, r, o, u), o !== null) {
      var c = Wn();
      Hr(o, n, u, c), un(o, r, u);
    }
  }
  function xl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (oa(n)) jv(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null)) try {
        var g = r.lastRenderedState, b = p(g, o);
        if (c.hasEagerState = !0, c.eagerState = b, oi(b, g)) {
          var x = r.interleaved;
          x === null ? (c.next = c, wd(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = kd(n, r, c, u), o !== null && (c = Wn(), Hr(o, n, u, c), un(o, r, u));
    }
  }
  function oa(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function jv(n, r) {
    ms = Uc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function un(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  var Dl = { readContext: Pa, useCallback: jt, useContext: jt, useEffect: jt, useImperativeHandle: jt, useInsertionEffect: jt, useLayoutEffect: jt, useMemo: jt, useReducer: jt, useRef: jt, useState: jt, useDebugValue: jt, useDeferredValue: jt, useTransition: jt, useMutableSource: jt, useSyncExternalStore: jt, useId: jt, unstable_isNewReconciler: !1 }, Xc = { readContext: Pa, useCallback: function(n, r) {
    return Dr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pa, useEffect: Gc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, gu(
      4194308,
      4,
      Rl.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return gu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return gu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Dr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Dr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Cs.bind(null, Wt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Dr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: Ss, useDeferredValue: function(n) {
    return Dr().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = Es.bind(null, n[1]), Dr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Wt, c = Dr();
    if (yn) {
      if (o === void 0) throw Error(M(407));
      o = o();
    } else {
      if (o = r(), tr === null) throw Error(M(349));
      (rn & 30) !== 0 || zc(u, r, o);
    }
    c.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return c.queue = p, Gc(Hc.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, kl(9, Pc.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n = Dr(), r = tr.identifierPrefix;
    if (yn) {
      var o = _i, u = Di;
      o = (u & ~(1 << 32 - Ar(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = bl++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = X++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Pa,
    useCallback: qc,
    useContext: Pa,
    useEffect: ys,
    useImperativeHandle: Wc,
    useInsertionEffect: Yc,
    useLayoutEffect: gs,
    useMemo: Qc,
    useReducer: zo,
    useRef: Vc,
    useState: function() {
      return zo(to);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = An();
      return _d(r, $n.memoizedState, n);
    },
    useTransition: function() {
      var n = zo(to)[0], r = An().memoizedState;
      return [n, r];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Fc,
    useId: Ld,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Pa, useCallback: qc, useContext: Pa, useEffect: ys, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: gs, useMemo: Qc, useReducer: wl, useRef: Vc, useState: function() {
    return wl(to);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = An();
    return $n === null ? r.memoizedState = n : _d(r, $n.memoizedState, n);
  }, useTransition: function() {
    var n = wl(to)[0], r = An().memoizedState;
    return [n, r];
  }, useMutableSource: Ic, useSyncExternalStore: Fc, useId: Ld, unstable_isNewReconciler: !1 };
  function si(n, r) {
    if (n && n.defaultProps) {
      r = ue({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Od(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : ue({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Jc = { isMounted: function(n) {
    return (n = n._reactInternals) ? dt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = Wn(), c = Ui(n), p = eo(u, c);
    p.payload = r, o != null && (p.callback = o), r = Io(n, p, c), r !== null && (Hr(r, n, c, u), Nc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = Wn(), c = Ui(n), p = eo(u, c);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = Io(n, p, c), r !== null && (Hr(r, n, c, u), Nc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Wn(), u = Ui(n), c = eo(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Io(n, c, u), r !== null && (Hr(r, n, u, o), Nc(r, n, u));
  } };
  function Bv(n, r, o, u, c, p, g) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, g) : r.prototype && r.prototype.isPureReactComponent ? !ts(o, u) || !ts(c, p) : !0;
  }
  function Zc(n, r, o) {
    var u = !1, c = xr, p = r.contextType;
    return typeof p == "object" && p !== null ? p = Pa(p) : (c = jn(r) ? ta : Ln.current, u = r.contextTypes, p = (u = u != null) ? na(n, c) : xr), r = new r(o, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Jc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function $v(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Jc.enqueueReplaceState(r, r.state, null);
  }
  function bs(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Rd(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = Pa(p) : (p = jn(r) ? ta : Ln.current, c.context = na(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Od(n, r, p, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Jc.enqueueReplaceState(c, c.state, null), fs(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var o = "", u = r;
      do
        o += vt(u), u = u.return;
      while (u);
      var c = o;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Nd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Md(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, o) {
    o = eo(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      ku || (ku = !0, Nl = u), Md(n, r);
    }, o;
  }
  function Ad(n, r, o) {
    o = eo(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Md(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      Md(n, r), typeof u != "function" && (jo === null ? jo = /* @__PURE__ */ new Set([this]) : jo.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" });
    }), o;
  }
  function Ud(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new ef();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = Cy.bind(null, n, r, o), r.then(n, n));
  }
  function Gv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Po(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = eo(-1, 1), r.tag = 2, Io(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var ws = St.ReactCurrentOwner, Vn = !1;
  function vr(n, r, o, u) {
    r.child = n === null ? he(r, null, o, u) : Mn(r, n.child, o, u);
  }
  function la(n, r, o, u, c) {
    o = o.render;
    var p = r.ref;
    return bn(r, c), u = Fo(n, r, o, u, p, c), o = ui(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ja(n, r, c)) : (yn && o && Dc(r), r.flags |= 1, vr(n, r, u, c), r.child);
  }
  function Ll(n, r, o, u, c) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" && !Qd(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, yt(n, r, p, u, c)) : (n = Hs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, (n.lanes & c) === 0) {
      var g = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ts, o(g, u) && n.ref === r.ref) return ja(n, r, c);
    }
    return r.flags |= 1, n = $o(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function yt(n, r, o, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (ts(p, u) && n.ref === r.ref) if (Vn = !1, r.pendingProps = u = p, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Vn = !0);
      else return r.lanes = n.lanes, ja(n, r, c);
    }
    return Yv(n, r, o, u, c);
  }
  function ks(n, r, o) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, He(Tu, wa), wa |= o;
    else {
      if ((o & 1073741824) === 0) return n = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, He(Tu, wa), wa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, He(Tu, wa), wa |= u;
    }
    else p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, He(Tu, wa), wa |= u;
    return vr(n, r, c, o), r.child;
  }
  function Id(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Yv(n, r, o, u, c) {
    var p = jn(o) ? ta : Ln.current;
    return p = na(r, p), bn(r, c), o = Fo(n, r, o, u, p, c), u = ui(), n !== null && !Vn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ja(n, r, c)) : (yn && u && Dc(r), r.flags |= 1, vr(n, r, o, c), r.child);
  }
  function Wv(n, r, o, u, c) {
    if (jn(o)) {
      var p = !0;
      ar(r);
    } else p = !1;
    if (bn(r, c), r.stateNode === null) Ha(n, r), Zc(r, o, u), bs(r, o, u, c), u = !0;
    else if (n === null) {
      var g = r.stateNode, b = r.memoizedProps;
      g.props = b;
      var x = g.context, H = o.contextType;
      typeof H == "object" && H !== null ? H = Pa(H) : (H = jn(o) ? ta : Ln.current, H = na(r, H));
      var J = o.getDerivedStateFromProps, ee = typeof J == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      ee || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== u || x !== H) && $v(r, g, u, H), ba = !1;
      var K = r.memoizedState;
      g.state = K, fs(r, u, g, c), x = r.memoizedState, b !== u || K !== x || Zn.current || ba ? (typeof J == "function" && (Od(r, o, J, u), x = r.memoizedState), (b = ba || Bv(r, o, b, u, K, x, H)) ? (ee || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = x), g.props = u, g.state = x, g.context = H, u = b) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      g = r.stateNode, zv(n, r), b = r.memoizedProps, H = r.type === r.elementType ? b : si(r.type, b), g.props = H, ee = r.pendingProps, K = g.context, x = o.contextType, typeof x == "object" && x !== null ? x = Pa(x) : (x = jn(o) ? ta : Ln.current, x = na(r, x));
      var Ee = o.getDerivedStateFromProps;
      (J = typeof Ee == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== ee || K !== x) && $v(r, g, u, x), ba = !1, K = r.memoizedState, g.state = K, fs(r, u, g, c);
      var _e = r.memoizedState;
      b !== ee || K !== _e || Zn.current || ba ? (typeof Ee == "function" && (Od(r, o, Ee, u), _e = r.memoizedState), (H = ba || Bv(r, o, H, u, K, _e, x) || !1) ? (J || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(u, _e, x), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(u, _e, x)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = _e), g.props = u, g.state = _e, g.context = x, u = H) : (typeof g.componentDidUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Rs(n, r, o, u, p, c);
  }
  function Rs(n, r, o, u, c, p) {
    Id(n, r);
    var g = (r.flags & 128) !== 0;
    if (!u && !g) return c && Rc(r, o, !1), ja(n, r, p);
    u = r.stateNode, ws.current = r;
    var b = g && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && g ? (r.child = Mn(r, n.child, null, p), r.child = Mn(r, null, b, p)) : vr(n, r, b, p), r.memoizedState = u.state, c && Rc(r, o, !0), r.child;
  }
  function Eu(n) {
    var r = n.stateNode;
    r.pendingContext ? Av(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Av(n, r.context, !1), Dd(n, r.containerInfo);
  }
  function qv(n, r, o, u, c) {
    return Uo(), Zi(c), r.flags |= 256, vr(n, r, o, u), r.child;
  }
  var tf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function nf(n, r, o) {
    var u = r.pendingProps, c = wn.current, p = !1, g = (r.flags & 128) !== 0, b;
    if ((b = g) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), He(wn, c & 1), n === null)
      return Sd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (g = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, g = { mode: "hidden", children: g }, (u & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = g) : p = Vo(g, u, 0, null), n = io(n, u, o, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = Fd(o), r.memoizedState = tf, n) : zd(r, g));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null)) return Qv(n, r, g, u, b, c, o);
    if (p) {
      p = u.fallback, g = r.mode, c = n.child, b = c.sibling;
      var x = { mode: "hidden", children: u.children };
      return (g & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = x, r.deletions = null) : (u = $o(c, x), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? p = $o(b, p) : (p = io(p, g, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, g = n.child.memoizedState, g = g === null ? Fd(o) : { baseLanes: g.baseLanes | o, cachePool: null, transitions: g.transitions }, p.memoizedState = g, p.childLanes = n.childLanes & ~o, r.memoizedState = tf, u;
    }
    return p = n.child, n = p.sibling, u = $o(p, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function zd(n, r) {
    return r = Vo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xs(n, r, o, u) {
    return u !== null && Zi(u), Mn(r, n.child, null, o), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, o, u, c, p, g) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Nd(Error(M(422))), xs(n, r, g, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = Vo({ mode: "visible", children: u.children }, c, 0, null), p = io(p, c, g, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, (r.mode & 1) !== 0 && Mn(r, n.child, null, g), r.child.memoizedState = Fd(g), r.memoizedState = tf, p);
    if ((r.mode & 1) === 0) return xs(n, r, g, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var b = u.dgst;
      return u = b, p = Error(M(419)), u = Nd(p, u, void 0), xs(n, r, g, u);
    }
    if (b = (g & n.childLanes) !== 0, Vn || b) {
      if (u = tr, u !== null) {
        switch (g & -g) {
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
        c = (c & (u.suspendedLanes | g)) !== 0 ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, Ta(n, c), Hr(u, n, c, -1));
      }
      return qd(), u = Nd(Error(M(421))), xs(n, r, g, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ty.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, aa = wi(c.nextSibling), ra = r, yn = !0, za = null, n !== null && (Bn[Fa++] = Di, Bn[Fa++] = _i, Bn[Fa++] = Ea, Di = n.id, _i = n.overflow, Ea = r), r = zd(r, u.children), r.flags |= 4096, r);
  }
  function Pd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), bd(n.return, r, o);
  }
  function Fr(n, r, o, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = c);
  }
  function Oi(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (vr(n, r, u.children, o), u = wn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Pd(n, o, r);
        else if (n.tag === 19) Pd(n, o, r);
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
      u &= 1;
    }
    if (He(wn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Ac(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Fr(r, !1, c, o, p);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Ac(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        Fr(r, !0, o, null, p);
        break;
      case "together":
        Fr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ha(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ja(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, o = $o(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = $o(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Ds(n, r, o) {
    switch (r.tag) {
      case 3:
        Eu(r), Uo();
        break;
      case 5:
        Hv(r);
        break;
      case 1:
        jn(r.type) && ar(r);
        break;
      case 4:
        Dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        He(Ca, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (He(wn, wn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? nf(n, r, o) : (He(wn, wn.current & 1), n = ja(n, r, o), n !== null ? n.sibling : null);
        He(wn, wn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Oi(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), He(wn, wn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ks(n, r, o);
    }
    return ja(n, r, o);
  }
  var Ba, Gn, Xv, Kv;
  Ba = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Gn = function() {
  }, Xv = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Cl(Li.current);
      var p = null;
      switch (o) {
        case "input":
          c = Qn(n, c), u = Qn(n, u), p = [];
          break;
        case "select":
          c = ue({}, c, { value: void 0 }), u = ue({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = Dn(n, c), u = Dn(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = _o);
      }
      ie(o, u);
      var g;
      o = null;
      for (H in c) if (!u.hasOwnProperty(H) && c.hasOwnProperty(H) && c[H] != null) if (H === "style") {
        var b = c[H];
        for (g in b) b.hasOwnProperty(g) && (o || (o = {}), o[g] = "");
      } else H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (st.hasOwnProperty(H) ? p || (p = []) : (p = p || []).push(H, null));
      for (H in u) {
        var x = u[H];
        if (b = c?.[H], u.hasOwnProperty(H) && x !== b && (x != null || b != null)) if (H === "style") if (b) {
          for (g in b) !b.hasOwnProperty(g) || x && x.hasOwnProperty(g) || (o || (o = {}), o[g] = "");
          for (g in x) x.hasOwnProperty(g) && b[g] !== x[g] && (o || (o = {}), o[g] = x[g]);
        } else o || (p || (p = []), p.push(
          H,
          o
        )), o = x;
        else H === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, b = b ? b.__html : void 0, x != null && b !== x && (p = p || []).push(H, x)) : H === "children" ? typeof x != "string" && typeof x != "number" || (p = p || []).push(H, "" + x) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (st.hasOwnProperty(H) ? (x != null && H === "onScroll" && Kt("scroll", n), p || b === x || (p = [])) : (p = p || []).push(H, x));
      }
      o && (p = p || []).push("style", o);
      var H = p;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, Kv = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!yn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function or(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Jv(n, r, o) {
    var u = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return or(r), null;
      case 1:
        return jn(r.type) && hu(), or(r), null;
      case 3:
        return u = r.stateNode, Tl(), fn(Zn), fn(Ln), $e(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, za !== null && (Ml(za), za = null))), Gn(n, r), or(r), null;
      case 5:
        Mc(r);
        var c = Cl(vs.current);
        if (o = r.type, n !== null && r.stateNode != null) Xv(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(M(166));
            return or(r), null;
          }
          if (n = Cl(Li.current), Lc(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[ki] = r, u[ls] = p, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Kt("cancel", u), Kt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Kt(as[c], u);
                break;
              case "source":
                Kt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  u
                ), Kt("load", u);
                break;
              case "details":
                Kt("toggle", u);
                break;
              case "input":
                Rn(u, p), Kt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Kt("invalid", u);
                break;
              case "textarea":
                Xn(u, p), Kt("invalid", u);
            }
            ie(o, p), c = null;
            for (var g in p) if (p.hasOwnProperty(g)) {
              var b = p[g];
              g === "children" ? typeof b == "string" ? u.textContent !== b && (p.suppressHydrationWarning !== !0 && Tc(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (p.suppressHydrationWarning !== !0 && Tc(
                u.textContent,
                b,
                n
              ), c = ["children", "" + b]) : st.hasOwnProperty(g) && b != null && g === "onScroll" && Kt("scroll", u);
            }
            switch (o) {
              case "input":
                Sn(u), ma(u, p, !0);
                break;
              case "textarea":
                Sn(u), En(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = _o);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = g.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = g.createElement(o, { is: u.is }) : (n = g.createElement(o), o === "select" && (g = n, u.multiple ? g.multiple = !0 : u.size && (g.size = u.size))) : n = g.createElementNS(n, o), n[ki] = r, n[ls] = u, Ba(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (g = ge(o, u), o) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Kt(as[c], n);
                  c = u;
                  break;
                case "source":
                  Kt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = u;
                  break;
                case "details":
                  Kt("toggle", n), c = u;
                  break;
                case "input":
                  Rn(n, u), c = Qn(n, u), Kt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = ue({}, u, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  Xn(n, u), c = Dn(n, u), Kt("invalid", n);
                  break;
                default:
                  c = u;
              }
              ie(o, c), b = c;
              for (p in b) if (b.hasOwnProperty(p)) {
                var x = b[p];
                p === "style" ? R(n, x) : p === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && ya(n, x)) : p === "children" ? typeof x == "string" ? (o !== "textarea" || x !== "") && le(n, x) : typeof x == "number" && le(n, "" + x) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (st.hasOwnProperty(p) ? x != null && p === "onScroll" && Kt("scroll", n) : x != null && pe(n, p, x, g));
              }
              switch (o) {
                case "input":
                  Sn(n), ma(n, u, !1);
                  break;
                case "textarea":
                  Sn(n), En(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ft(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? mn(n, !!u.multiple, p, !1) : u.defaultValue != null && mn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = _o);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return or(r), null;
      case 6:
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(M(166));
          if (o = Cl(vs.current), Cl(Li.current), Lc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[ki] = r, (p = u.nodeValue !== o) && (n = ra, n !== null)) switch (n.tag) {
              case 3:
                Tc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Tc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            p && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[ki] = r, r.stateNode = u;
        }
        return or(r), null;
      case 13:
        if (fn(wn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && aa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) cs(), Uo(), r.flags |= 98560, p = !1;
          else if (p = Lc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p) throw Error(M(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(M(317));
              p[ki] = r;
            } else Uo(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            or(r), p = !1;
          } else za !== null && (Ml(za), za = null), p = !0;
          if (!p) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (wn.current & 1) !== 0 ? In === 0 && (In = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), or(r), null);
      case 4:
        return Tl(), Gn(n, r), n === null && cu(r.stateNode.containerInfo), or(r), null;
      case 10:
        return Td(r.type._context), or(r), null;
      case 17:
        return jn(r.type) && hu(), or(r), null;
      case 19:
        if (fn(wn), p = r.memoizedState, p === null) return or(r), null;
        if (u = (r.flags & 128) !== 0, g = p.rendering, g === null) if (u) _s(p, !1);
        else {
          if (In !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (g = Ac(n), g !== null) {
              for (r.flags |= 128, _s(p, !1), u = g.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) p = o, n = u, p.flags &= 14680066, g = p.alternate, g === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = g.childLanes, p.lanes = g.lanes, p.child = g.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = g.memoizedProps, p.memoizedState = g.memoizedState, p.updateQueue = g.updateQueue, p.type = g.type, n = g.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return He(wn, wn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          p.tail !== null && pt() > wu && (r.flags |= 128, u = !0, _s(p, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Ac(g), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), _s(p, !0), p.tail === null && p.tailMode === "hidden" && !g.alternate && !yn) return or(r), null;
          } else 2 * pt() - p.renderingStartTime > wu && o !== 1073741824 && (r.flags |= 128, u = !0, _s(p, !1), r.lanes = 4194304);
          p.isBackwards ? (g.sibling = r.child, r.child = g) : (o = p.last, o !== null ? o.sibling = g : r.child = g, p.last = g);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = pt(), r.sibling = null, o = wn.current, He(wn, u ? o & 1 | 2 : o & 1), r) : (or(r), null);
      case 22:
      case 23:
        return Wd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (wa & 1073741824) !== 0 && (or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function rf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return jn(r.type) && hu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Tl(), fn(Zn), fn(Ln), $e(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (fn(wn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(M(340));
          Uo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return fn(wn), null;
      case 4:
        return Tl(), null;
      case 10:
        return Td(r.type._context), null;
      case 22:
      case 23:
        return Wd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ls = !1, _r = !1, hy = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function Cu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      gn(n, r, u);
    }
    else o.current = null;
  }
  function af(n, r, o) {
    try {
      o();
    } catch (u) {
      gn(n, r, u);
    }
  }
  var Zv = !1;
  function eh(n, r) {
    if (os = Ma, n = ns(), vc(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, p = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, p.nodeType;
          } catch {
            o = null;
            break e;
          }
          var g = 0, b = -1, x = -1, H = 0, J = 0, ee = n, K = null;
          t: for (; ; ) {
            for (var Ee; ee !== o || c !== 0 && ee.nodeType !== 3 || (b = g + c), ee !== p || u !== 0 && ee.nodeType !== 3 || (x = g + u), ee.nodeType === 3 && (g += ee.nodeValue.length), (Ee = ee.firstChild) !== null; )
              K = ee, ee = Ee;
            for (; ; ) {
              if (ee === n) break t;
              if (K === o && ++H === c && (b = g), K === p && ++J === u && (x = g), (Ee = ee.nextSibling) !== null) break;
              ee = K, K = ee.parentNode;
            }
            ee = Ee;
          }
          o = b === -1 || x === -1 ? null : { start: b, end: x };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (hl = { focusedElem: n, selectionRange: o }, Ma = !1, be = r; be !== null; ) if (r = be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, be = n;
    else for (; be !== null; ) {
      r = be;
      try {
        var _e = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (_e !== null) {
              var Ie = _e.memoizedProps, Fn = _e.memoizedState, N = r.stateNode, _ = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : si(r.type, Ie), Fn);
              N.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(M(163));
        }
      } catch (Z) {
        gn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, be = n;
        break;
      }
      be = r.return;
    }
    return _e = Zv, Zv = !1, _e;
  }
  function Os(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && af(r, o, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Ns(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Hd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function of(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, of(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ki], delete r[ls], delete r[us], delete r[vu], delete r[py])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function no(n) {
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
  function Ni(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = _o));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ni(n, r, o), n = n.sibling; n !== null; ) Ni(n, r, o), n = n.sibling;
  }
  function Mi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Mi(n, r, o), n = n.sibling; n !== null; ) Mi(n, r, o), n = n.sibling;
  }
  var Un = null, zr = !1;
  function Pr(n, r, o) {
    for (o = o.child; o !== null; ) th(n, r, o), o = o.sibling;
  }
  function th(n, r, o) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(Eo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        _r || Cu(o, r);
      case 6:
        var u = Un, c = zr;
        Un = null, Pr(n, r, o), Un = u, zr = c, Un !== null && (zr ? (n = Un, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Un.removeChild(o.stateNode));
        break;
      case 18:
        Un !== null && (zr ? (n = Un, o = o.stateNode, n.nodeType === 8 ? pu(n.parentNode, o) : n.nodeType === 1 && pu(n, o), ai(n)) : pu(Un, o.stateNode));
        break;
      case 4:
        u = Un, c = zr, Un = o.stateNode.containerInfo, zr = !0, Pr(n, r, o), Un = u, zr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_r && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, g = p.destroy;
            p = p.tag, g !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && af(o, r, g), c = c.next;
          } while (c !== u);
        }
        Pr(n, r, o);
        break;
      case 1:
        if (!_r && (Cu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (b) {
          gn(o, r, b);
        }
        Pr(n, r, o);
        break;
      case 21:
        Pr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (_r = (u = _r) || o.memoizedState !== null, Pr(n, r, o), _r = u) : Pr(n, r, o);
        break;
      default:
        Pr(n, r, o);
    }
  }
  function nh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new hy()), r.forEach(function(u) {
        var c = fh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function ci(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var p = n, g = r, b = g;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              Un = b.stateNode, zr = !1;
              break e;
            case 3:
              Un = b.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              Un = b.stateNode.containerInfo, zr = !0;
              break e;
          }
          b = b.return;
        }
        if (Un === null) throw Error(M(160));
        th(p, g, c), Un = null, zr = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (H) {
        gn(c, r, H);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) jd(r, n), r = r.sibling;
  }
  function jd(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ci(r, n), ua(n), u & 4) {
          try {
            Os(3, n, n.return), Ns(3, n);
          } catch (Ie) {
            gn(n, n.return, Ie);
          }
          try {
            Os(5, n, n.return);
          } catch (Ie) {
            gn(n, n.return, Ie);
          }
        }
        break;
      case 1:
        ci(r, n), ua(n), u & 512 && o !== null && Cu(o, o.return);
        break;
      case 5:
        if (ci(r, n), ua(n), u & 512 && o !== null && Cu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            le(c, "");
          } catch (Ie) {
            gn(n, n.return, Ie);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, g = o !== null ? o.memoizedProps : p, b = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null) try {
            b === "input" && p.type === "radio" && p.name != null && xn(c, p), ge(b, g);
            var H = ge(b, p);
            for (g = 0; g < x.length; g += 2) {
              var J = x[g], ee = x[g + 1];
              J === "style" ? R(c, ee) : J === "dangerouslySetInnerHTML" ? ya(c, ee) : J === "children" ? le(c, ee) : pe(c, J, ee, H);
            }
            switch (b) {
              case "input":
                sr(c, p);
                break;
              case "textarea":
                Kr(c, p);
                break;
              case "select":
                var K = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!p.multiple;
                var Ee = p.value;
                Ee != null ? mn(c, !!p.multiple, Ee, !1) : K !== !!p.multiple && (p.defaultValue != null ? mn(
                  c,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : mn(c, !!p.multiple, p.multiple ? [] : "", !1));
            }
            c[ls] = p;
          } catch (Ie) {
            gn(n, n.return, Ie);
          }
        }
        break;
      case 6:
        if (ci(r, n), ua(n), u & 4) {
          if (n.stateNode === null) throw Error(M(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (Ie) {
            gn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (ci(r, n), ua(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ai(r.containerInfo);
        } catch (Ie) {
          gn(n, n.return, Ie);
        }
        break;
      case 4:
        ci(r, n), ua(n);
        break;
      case 13:
        ci(r, n), ua(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = pt())), u & 4 && nh(n);
        break;
      case 22:
        if (J = o !== null && o.memoizedState !== null, n.mode & 1 ? (_r = (H = _r) || J, ci(r, n), _r = H) : ci(r, n), ua(n), u & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !J && (n.mode & 1) !== 0) for (be = n, J = n.child; J !== null; ) {
            for (ee = be = J; be !== null; ) {
              switch (K = be, Ee = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, K, K.return);
                  break;
                case 1:
                  Cu(K, K.return);
                  var _e = K.stateNode;
                  if (typeof _e.componentWillUnmount == "function") {
                    u = K, o = K.return;
                    try {
                      r = u, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                    } catch (Ie) {
                      gn(u, o, Ie);
                    }
                  }
                  break;
                case 5:
                  Cu(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    As(ee);
                    continue;
                  }
              }
              Ee !== null ? (Ee.return = K, be = Ee) : As(ee);
            }
            J = J.sibling;
          }
          e: for (J = null, ee = n; ; ) {
            if (ee.tag === 5) {
              if (J === null) {
                J = ee;
                try {
                  c = ee.stateNode, H ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (b = ee.stateNode, x = ee.memoizedProps.style, g = x != null && x.hasOwnProperty("display") ? x.display : null, b.style.display = C("display", g));
                } catch (Ie) {
                  gn(n, n.return, Ie);
                }
              }
            } else if (ee.tag === 6) {
              if (J === null) try {
                ee.stateNode.nodeValue = H ? "" : ee.memoizedProps;
              } catch (Ie) {
                gn(n, n.return, Ie);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === n) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === n) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === n) break e;
              J === ee && (J = null), ee = ee.return;
            }
            J === ee && (J = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        ci(r, n), ua(n), u & 4 && nh(n);
        break;
      case 21:
        break;
      default:
        ci(
          r,
          n
        ), ua(n);
    }
  }
  function ua(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ms(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(M(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (le(c, ""), u.flags &= -33);
            var p = no(n);
            Mi(n, p, c);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, b = no(n);
            Ni(n, b, g);
            break;
          default:
            throw Error(M(161));
        }
      } catch (x) {
        gn(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function my(n, r, o) {
    be = n, Bd(n);
  }
  function Bd(n, r, o) {
    for (var u = (n.mode & 1) !== 0; be !== null; ) {
      var c = be, p = c.child;
      if (c.tag === 22 && u) {
        var g = c.memoizedState !== null || Ls;
        if (!g) {
          var b = c.alternate, x = b !== null && b.memoizedState !== null || _r;
          b = Ls;
          var H = _r;
          if (Ls = g, (_r = x) && !H) for (be = c; be !== null; ) g = be, x = g.child, g.tag === 22 && g.memoizedState !== null ? $d(c) : x !== null ? (x.return = g, be = x) : $d(c);
          for (; p !== null; ) be = p, Bd(p), p = p.sibling;
          be = c, Ls = b, _r = H;
        }
        rh(n);
      } else (c.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = c, be = p) : rh(n);
    }
  }
  function rh(n) {
    for (; be !== null; ) {
      var r = be;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              _r || Ns(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !_r) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : si(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var p = r.updateQueue;
              p !== null && xd(r, p, u);
              break;
            case 3:
              var g = r.updateQueue;
              if (g !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                xd(r, g, o);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (o === null && r.flags & 4) {
                o = b;
                var x = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && o.focus();
                    break;
                  case "img":
                    x.src && (o.src = x.src);
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
                var H = r.alternate;
                if (H !== null) {
                  var J = H.memoizedState;
                  if (J !== null) {
                    var ee = J.dehydrated;
                    ee !== null && ai(ee);
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
              throw Error(M(163));
          }
          _r || r.flags & 512 && Hd(r);
        } catch (K) {
          gn(r, r.return, K);
        }
      }
      if (r === n) {
        be = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, be = o;
        break;
      }
      be = r.return;
    }
  }
  function As(n) {
    for (; be !== null; ) {
      var r = be;
      if (r === n) {
        be = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, be = o;
        break;
      }
      be = r.return;
    }
  }
  function $d(n) {
    for (; be !== null; ) {
      var r = be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Ns(4, r);
            } catch (x) {
              gn(r, o, x);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (x) {
                gn(r, c, x);
              }
            }
            var p = r.return;
            try {
              Hd(r);
            } catch (x) {
              gn(r, p, x);
            }
            break;
          case 5:
            var g = r.return;
            try {
              Hd(r);
            } catch (x) {
              gn(r, g, x);
            }
        }
      } catch (x) {
        gn(r, r.return, x);
      }
      if (r === n) {
        be = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, be = b;
        break;
      }
      be = r.return;
    }
  }
  var yy = Math.ceil, Ho = St.ReactCurrentDispatcher, Ol = St.ReactCurrentOwner, hr = St.ReactCurrentBatchConfig, Ut = 0, tr = null, Yn = null, mr = 0, wa = 0, Tu = Ia(0), In = 0, Us = null, Ai = 0, bu = 0, lf = 0, Is = null, sa = null, Vd = 0, wu = 1 / 0, ka = null, ku = !1, Nl = null, jo = null, uf = !1, ro = null, Fs = 0, Bo = 0, Ru = null, zs = -1, Lr = 0;
  function Wn() {
    return (Ut & 6) !== 0 ? pt() : zs !== -1 ? zs : zs = pt();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Ut & 2) !== 0 && mr !== 0 ? mr & -mr : vy.transition !== null ? (Lr === 0 && (Lr = Jl()), Lr) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : iu(n.type)), n);
  }
  function Hr(n, r, o, u) {
    if (50 < Bo) throw Bo = 0, Ru = null, Error(M(185));
    Vi(n, o, u), ((Ut & 2) === 0 || n !== tr) && (n === tr && ((Ut & 2) === 0 && (bu |= o), In === 4 && fi(n, mr)), ca(n, u), o === 1 && Ut === 0 && (r.mode & 1) === 0 && (wu = pt() + 500, mu && xi()));
  }
  function ca(n, r) {
    var o = n.callbackNode;
    ol(n, r);
    var u = ri(n, n === tr ? mr : 0);
    if (u === 0) o !== null && fr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && fr(o), r === 1) n.tag === 0 ? Oo(Gd.bind(null, n)) : xc(Gd.bind(null, n)), du(function() {
        (Ut & 6) === 0 && xi();
      }), o = null;
      else {
        switch (eu(u)) {
          case 1:
            o = ti;
            break;
          case 4:
            o = al;
            break;
          case 16:
            o = il;
            break;
          case 536870912:
            o = Ql;
            break;
          default:
            o = il;
        }
        o = ph(o, sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function sf(n, r) {
    if (zs = -1, Lr = 0, (Ut & 6) !== 0) throw Error(M(327));
    var o = n.callbackNode;
    if (xu() && n.callbackNode !== o) return null;
    var u = ri(n, n === tr ? mr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = cf(n, u);
    else {
      r = u;
      var c = Ut;
      Ut |= 2;
      var p = ih();
      (tr !== n || mr !== r) && (ka = null, wu = pt() + 500, ao(n, r));
      do
        try {
          oh();
          break;
        } catch (b) {
          ah(n, b);
        }
      while (!0);
      Cd(), Ho.current = p, Ut = c, Yn !== null ? r = 0 : (tr = null, mr = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = To(n), c !== 0 && (u = c, r = Ps(n, c))), r === 1) throw o = Us, ao(n, 0), fi(n, u), ca(n, pt()), o;
      if (r === 6) fi(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !gy(c) && (r = cf(n, u), r === 2 && (p = To(n), p !== 0 && (u = p, r = Ps(n, p))), r === 1)) throw o = Us, ao(n, 0), fi(n, u), ca(n, pt()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Ul(n, sa, ka);
            break;
          case 3:
            if (fi(n, u), (u & 130023424) === u && (r = Vd + 500 - pt(), 10 < r)) {
              if (ri(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = wc(Ul.bind(null, n, sa, ka), r);
              break;
            }
            Ul(n, sa, ka);
            break;
          case 4:
            if (fi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var g = 31 - Ar(u);
              p = 1 << g, g = r[g], g > c && (c = g), u &= ~p;
            }
            if (u = c, u = pt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * yy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = wc(Ul.bind(null, n, sa, ka), u);
              break;
            }
            Ul(n, sa, ka);
            break;
          case 5:
            Ul(n, sa, ka);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return ca(n, pt()), n.callbackNode === o ? sf.bind(null, n) : null;
  }
  function Ps(n, r) {
    var o = Is;
    return n.current.memoizedState.isDehydrated && (ao(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = sa, sa = o, r !== null && Ml(r)), n;
  }
  function Ml(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function gy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], p = c.getSnapshot;
          c = c.value;
          try {
            if (!oi(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
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
  function fi(n, r) {
    for (r &= ~lf, r &= ~bu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ar(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Gd(n) {
    if ((Ut & 6) !== 0) throw Error(M(327));
    xu();
    var r = ri(n, 0);
    if ((r & 1) === 0) return ca(n, pt()), null;
    var o = cf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = To(n);
      u !== 0 && (r = u, o = Ps(n, u));
    }
    if (o === 1) throw o = Us, ao(n, 0), fi(n, r), ca(n, pt()), o;
    if (o === 6) throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ul(n, sa, ka), ca(n, pt()), null;
  }
  function Yd(n, r) {
    var o = Ut;
    Ut |= 1;
    try {
      return n(r);
    } finally {
      Ut = o, Ut === 0 && (wu = pt() + 500, mu && xi());
    }
  }
  function Al(n) {
    ro !== null && ro.tag === 0 && (Ut & 6) === 0 && xu();
    var r = Ut;
    Ut |= 1;
    var o = hr.transition, u = Gt;
    try {
      if (hr.transition = null, Gt = 1, n) return n();
    } finally {
      Gt = u, hr.transition = o, Ut = r, (Ut & 6) === 0 && xi();
    }
  }
  function Wd() {
    wa = Tu.current, fn(Tu);
  }
  function ao(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, md(o)), Yn !== null) for (o = Yn.return; o !== null; ) {
      var u = o;
      switch (_c(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && hu();
          break;
        case 3:
          Tl(), fn(Zn), fn(Ln), $e();
          break;
        case 5:
          Mc(u);
          break;
        case 4:
          Tl();
          break;
        case 13:
          fn(wn);
          break;
        case 19:
          fn(wn);
          break;
        case 10:
          Td(u.type._context);
          break;
        case 22:
        case 23:
          Wd();
      }
      o = o.return;
    }
    if (tr = n, Yn = n = $o(n.current, null), mr = wa = r, In = 0, Us = null, lf = bu = Ai = 0, sa = Is = null, El !== null) {
      for (r = 0; r < El.length; r++) if (o = El[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, p = o.pending;
        if (p !== null) {
          var g = p.next;
          p.next = c, u.next = g;
        }
        o.pending = u;
      }
      El = null;
    }
    return n;
  }
  function ah(n, r) {
    do {
      var o = Yn;
      try {
        if (Cd(), wt.current = Dl, Uc) {
          for (var u = Wt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Uc = !1;
        }
        if (rn = 0, ir = $n = Wt = null, ms = !1, bl = 0, Ol.current = null, o === null || o.return === null) {
          In = 1, Us = r, Yn = null;
          break;
        }
        e: {
          var p = n, g = o.return, b = o, x = r;
          if (r = mr, b.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var H = x, J = b, ee = J.tag;
            if ((J.mode & 1) === 0 && (ee === 0 || ee === 11 || ee === 15)) {
              var K = J.alternate;
              K ? (J.updateQueue = K.updateQueue, J.memoizedState = K.memoizedState, J.lanes = K.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var Ee = Gv(g);
            if (Ee !== null) {
              Ee.flags &= -257, Po(Ee, g, b, p, r), Ee.mode & 1 && Ud(p, H, r), r = Ee, x = H;
              var _e = r.updateQueue;
              if (_e === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(x), r.updateQueue = Ie;
              } else _e.add(x);
              break e;
            } else {
              if ((r & 1) === 0) {
                Ud(p, H, r), qd();
                break e;
              }
              x = Error(M(426));
            }
          } else if (yn && b.mode & 1) {
            var Fn = Gv(g);
            if (Fn !== null) {
              (Fn.flags & 65536) === 0 && (Fn.flags |= 256), Po(Fn, g, b, p, r), Zi(_l(x, b));
              break e;
            }
          }
          p = x = _l(x, b), In !== 4 && (In = 2), Is === null ? Is = [p] : Is.push(p), p = g;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var N = Vv(p, x, r);
                Pv(p, N);
                break e;
              case 1:
                b = x;
                var _ = p.type, I = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (jo === null || !jo.has(I)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var Z = Ad(p, b, r);
                  Pv(p, Z);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        uh(o);
      } catch (Le) {
        r = Le, Yn === o && o !== null && (Yn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ih() {
    var n = Ho.current;
    return Ho.current = Dl, n === null ? Dl : n;
  }
  function qd() {
    (In === 0 || In === 3 || In === 2) && (In = 4), tr === null || (Ai & 268435455) === 0 && (bu & 268435455) === 0 || fi(tr, mr);
  }
  function cf(n, r) {
    var o = Ut;
    Ut |= 2;
    var u = ih();
    (tr !== n || mr !== r) && (ka = null, ao(n, r));
    do
      try {
        Sy();
        break;
      } catch (c) {
        ah(n, c);
      }
    while (!0);
    if (Cd(), Ut = o, Ho.current = u, Yn !== null) throw Error(M(261));
    return tr = null, mr = 0, In;
  }
  function Sy() {
    for (; Yn !== null; ) lh(Yn);
  }
  function oh() {
    for (; Yn !== null && !Za(); ) lh(Yn);
  }
  function lh(n) {
    var r = dh(n.alternate, n, wa);
    n.memoizedProps = n.pendingProps, r === null ? uh(n) : Yn = r, Ol.current = null;
  }
  function uh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = Jv(o, r, wa), o !== null) {
          Yn = o;
          return;
        }
      } else {
        if (o = rf(o, r), o !== null) {
          o.flags &= 32767, Yn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, Yn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Yn = r;
        return;
      }
      Yn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Ul(n, r, o) {
    var u = Gt, c = hr.transition;
    try {
      hr.transition = null, Gt = 1, Ey(n, r, o, u);
    } finally {
      hr.transition = c, Gt = u;
    }
    return null;
  }
  function Ey(n, r, o, u) {
    do
      xu();
    while (ro !== null);
    if ((Ut & 6) !== 0) throw Error(M(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (Qf(n, p), n === tr && (Yn = tr = null, mr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || uf || (uf = !0, ph(il, function() {
      return xu(), null;
    })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
      p = hr.transition, hr.transition = null;
      var g = Gt;
      Gt = 1;
      var b = Ut;
      Ut |= 4, Ol.current = null, eh(n, o), jd(o, n), uu(hl), Ma = !!os, hl = os = null, n.current = o, my(o), ei(), Ut = b, Gt = g, hr.transition = p;
    } else n.current = o;
    if (uf && (uf = !1, ro = n, Fs = c), p = n.pendingLanes, p === 0 && (jo = null), Yu(o.stateNode), ca(n, pt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (ku) throw ku = !1, n = Nl, Nl = null, n;
    return (Fs & 1) !== 0 && n.tag !== 0 && xu(), p = n.pendingLanes, (p & 1) !== 0 ? n === Ru ? Bo++ : (Bo = 0, Ru = n) : Bo = 0, xi(), null;
  }
  function xu() {
    if (ro !== null) {
      var n = eu(Fs), r = hr.transition, o = Gt;
      try {
        if (hr.transition = null, Gt = 16 > n ? 16 : n, ro === null) var u = !1;
        else {
          if (n = ro, ro = null, Fs = 0, (Ut & 6) !== 0) throw Error(M(331));
          var c = Ut;
          for (Ut |= 4, be = n.current; be !== null; ) {
            var p = be, g = p.child;
            if ((be.flags & 16) !== 0) {
              var b = p.deletions;
              if (b !== null) {
                for (var x = 0; x < b.length; x++) {
                  var H = b[x];
                  for (be = H; be !== null; ) {
                    var J = be;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, J, p);
                    }
                    var ee = J.child;
                    if (ee !== null) ee.return = J, be = ee;
                    else for (; be !== null; ) {
                      J = be;
                      var K = J.sibling, Ee = J.return;
                      if (of(J), J === H) {
                        be = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = Ee, be = K;
                        break;
                      }
                      be = Ee;
                    }
                  }
                }
                var _e = p.alternate;
                if (_e !== null) {
                  var Ie = _e.child;
                  if (Ie !== null) {
                    _e.child = null;
                    do {
                      var Fn = Ie.sibling;
                      Ie.sibling = null, Ie = Fn;
                    } while (Ie !== null);
                  }
                }
                be = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && g !== null) g.return = p, be = g;
            else e: for (; be !== null; ) {
              if (p = be, (p.flags & 2048) !== 0) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, p, p.return);
              }
              var N = p.sibling;
              if (N !== null) {
                N.return = p.return, be = N;
                break e;
              }
              be = p.return;
            }
          }
          var _ = n.current;
          for (be = _; be !== null; ) {
            g = be;
            var I = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && I !== null) I.return = g, be = I;
            else e: for (g = _; be !== null; ) {
              if (b = be, (b.flags & 2048) !== 0) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ns(9, b);
                }
              } catch (Le) {
                gn(b, b.return, Le);
              }
              if (b === g) {
                be = null;
                break e;
              }
              var Z = b.sibling;
              if (Z !== null) {
                Z.return = b.return, be = Z;
                break e;
              }
              be = b.return;
            }
          }
          if (Ut = c, xi(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(Eo, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Gt = o, hr.transition = r;
      }
    }
    return !1;
  }
  function sh(n, r, o) {
    r = _l(o, r), r = Vv(n, r, 1), n = Io(n, r, 1), r = Wn(), n !== null && (Vi(n, 1, r), ca(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) sh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        sh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (jo === null || !jo.has(u))) {
          n = _l(o, n), n = Ad(r, n, 1), r = Io(r, n, 1), n = Wn(), r !== null && (Vi(r, 1, n), ca(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Cy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Wn(), n.pingedLanes |= n.suspendedLanes & o, tr === n && (mr & o) === o && (In === 4 || In === 3 && (mr & 130023424) === mr && 500 > pt() - Vd ? ao(n, 0) : lf |= o), ca(n, r);
  }
  function ch(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Sa, Sa <<= 1, (Sa & 130023424) === 0 && (Sa = 4194304)));
    var o = Wn();
    n = Ta(n, r), n !== null && (Vi(n, r, o), ca(n, o));
  }
  function Ty(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), ch(n, o);
  }
  function fh(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(M(314));
    }
    u !== null && u.delete(r), ch(n, o);
  }
  var dh;
  dh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Zn.current) Vn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Vn = !1, Ds(n, r, o);
      Vn = (n.flags & 131072) !== 0;
    }
    else Vn = !1, yn && (r.flags & 1048576) !== 0 && Uv(r, Ji, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ha(n, r), n = r.pendingProps;
        var c = na(r, Ln.current);
        bn(r, o), c = Fo(null, r, u, n, c, o);
        var p = ui();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (p = !0, ar(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rd(r), c.updater = Jc, r.stateNode = c, c._reactInternals = r, bs(r, u, n, o), r = Rs(null, r, u, !0, p, o)) : (r.tag = 0, yn && p && Dc(r), vr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = wy(u), n = si(u, n), c) {
            case 0:
              r = Yv(null, r, u, n, o);
              break e;
            case 1:
              r = Wv(null, r, u, n, o);
              break e;
            case 11:
              r = la(null, r, u, n, o);
              break e;
            case 14:
              r = Ll(null, r, u, si(u.type, n), o);
              break e;
          }
          throw Error(M(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : si(u, c), Yv(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : si(u, c), Wv(n, r, u, c, o);
      case 3:
        e: {
          if (Eu(r), n === null) throw Error(M(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, zv(n, r), fs(r, u, null, o);
          var g = r.memoizedState;
          if (u = g.element, p.isDehydrated) if (p = { element: u, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            c = _l(Error(M(423)), r), r = qv(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = _l(Error(M(424)), r), r = qv(n, r, u, o, c);
            break e;
          } else for (aa = wi(r.stateNode.containerInfo.firstChild), ra = r, yn = !0, za = null, o = he(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Uo(), u === c) {
              r = ja(n, r, o);
              break e;
            }
            vr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Hv(r), n === null && Sd(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, g = c.children, bc(u, c) ? g = null : p !== null && bc(u, p) && (r.flags |= 32), Id(n, r), vr(n, r, g, o), r.child;
      case 6:
        return n === null && Sd(r), null;
      case 13:
        return nf(n, r, o);
      case 4:
        return Dd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Mn(r, null, u, o) : vr(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : si(u, c), la(n, r, u, c, o);
      case 7:
        return vr(n, r, r.pendingProps, o), r.child;
      case 8:
        return vr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return vr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, g = c.value, He(Ca, u._currentValue), u._currentValue = g, p !== null) if (oi(p.value, g)) {
            if (p.children === c.children && !Zn.current) {
              r = ja(n, r, o);
              break e;
            }
          } else for (p = r.child, p !== null && (p.return = r); p !== null; ) {
            var b = p.dependencies;
            if (b !== null) {
              g = p.child;
              for (var x = b.firstContext; x !== null; ) {
                if (x.context === u) {
                  if (p.tag === 1) {
                    x = eo(-1, o & -o), x.tag = 2;
                    var H = p.updateQueue;
                    if (H !== null) {
                      H = H.shared;
                      var J = H.pending;
                      J === null ? x.next = x : (x.next = J.next, J.next = x), H.pending = x;
                    }
                  }
                  p.lanes |= o, x = p.alternate, x !== null && (x.lanes |= o), bd(
                    p.return,
                    o,
                    r
                  ), b.lanes |= o;
                  break;
                }
                x = x.next;
              }
            } else if (p.tag === 10) g = p.type === r.type ? null : p.child;
            else if (p.tag === 18) {
              if (g = p.return, g === null) throw Error(M(341));
              g.lanes |= o, b = g.alternate, b !== null && (b.lanes |= o), bd(g, o, r), g = p.sibling;
            } else g = p.child;
            if (g !== null) g.return = p;
            else for (g = p; g !== null; ) {
              if (g === r) {
                g = null;
                break;
              }
              if (p = g.sibling, p !== null) {
                p.return = g.return, g = p;
                break;
              }
              g = g.return;
            }
            p = g;
          }
          vr(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, bn(r, o), c = Pa(c), u = u(c), r.flags |= 1, vr(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = si(u, r.pendingProps), c = si(u.type, c), Ll(n, r, u, c, o);
      case 15:
        return yt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : si(u, c), Ha(n, r), r.tag = 1, jn(u) ? (n = !0, ar(r)) : n = !1, bn(r, o), Zc(r, u, c), bs(r, u, c, o), Rs(null, r, u, !0, n, o);
      case 19:
        return Oi(n, r, o);
      case 22:
        return ks(n, r, o);
    }
    throw Error(M(156, r.tag));
  };
  function ph(n, r) {
    return dn(n, r);
  }
  function by(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, o, u) {
    return new by(n, r, o, u);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function wy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ct) return 11;
      if (n === _t) return 14;
    }
    return 2;
  }
  function $o(n, r) {
    var o = n.alternate;
    return o === null ? (o = $a(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Hs(n, r, o, u, c, p) {
    var g = 2;
    if (u = n, typeof n == "function") Qd(n) && (g = 1);
    else if (typeof n == "string") g = 5;
    else e: switch (n) {
      case Je:
        return io(o.children, c, p, r);
      case ln:
        g = 8, c |= 8;
        break;
      case Bt:
        return n = $a(12, o, r, c | 2), n.elementType = Bt, n.lanes = p, n;
      case f:
        return n = $a(13, o, r, c), n.elementType = f, n.lanes = p, n;
      case Mt:
        return n = $a(19, o, r, c), n.elementType = Mt, n.lanes = p, n;
      case De:
        return Vo(o, c, p, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            g = 10;
            break e;
          case Ne:
            g = 9;
            break e;
          case Ct:
            g = 11;
            break e;
          case _t:
            g = 14;
            break e;
          case zt:
            g = 16, u = null;
            break e;
        }
        throw Error(M(130, n == null ? n : typeof n, ""));
    }
    return r = $a(g, o, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function io(n, r, o, u) {
    return n = $a(7, n, u, r), n.lanes = o, n;
  }
  function Vo(n, r, o, u) {
    return n = $a(22, n, u, r), n.elementType = De, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Xd(n, r, o) {
    return n = $a(6, n, null, r), n.lanes = o, n;
  }
  function ff(n, r, o) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, o, u, c, p, g, b, x) {
    return n = new vh(n, r, o, b, x), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = $a(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rd(p), n;
  }
  function ky(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Et, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function Kd(n) {
    if (!n) return xr;
    n = n._reactInternals;
    e: {
      if (dt(n) !== n || n.tag !== 1) throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (jn(o)) return ss(n, o, r);
    }
    return r;
  }
  function hh(n, r, o, u, c, p, g, b, x) {
    return n = df(o, u, !0, n, c, p, g, b, x), n.context = Kd(null), o = n.current, u = Wn(), c = Ui(o), p = eo(u, c), p.callback = r ?? null, Io(o, p, c), n.current.lanes = c, Vi(n, c, u), ca(n, u), n;
  }
  function pf(n, r, o, u) {
    var c = r.current, p = Wn(), g = Ui(c);
    return o = Kd(o), r.context === null ? r.context = o : r.pendingContext = o, r = eo(p, g), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Io(c, r, g), n !== null && (Hr(n, c, g, p), Nc(n, c, g)), g;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function hf(n, r) {
    Jd(n, r), (n = n.alternate) && Jd(n, r);
  }
  function mh() {
    return null;
  }
  var Il = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Zd(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Zd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(M(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Zd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Al(function() {
        pf(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = rt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Jn.length && r !== 0 && r < Jn[o].priority; o++) ;
      Jn.splice(o, 0, n), o === 0 && Qu(n);
    }
  };
  function ep(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function yh() {
  }
  function Ry(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var H = vf(g);
          p.call(H);
        };
      }
      var g = hh(r, u, n, 0, null, !1, !1, "", yh);
      return n._reactRootContainer = g, n[Xi] = g.current, cu(n.nodeType === 8 ? n.parentNode : n), Al(), g;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var H = vf(x);
        b.call(H);
      };
    }
    var x = df(n, 0, !1, null, null, !1, !1, "", yh);
    return n._reactRootContainer = x, n[Xi] = x.current, cu(n.nodeType === 8 ? n.parentNode : n), Al(function() {
      pf(r, x, o, u);
    }), x;
  }
  function js(n, r, o, u, c) {
    var p = o._reactRootContainer;
    if (p) {
      var g = p;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var x = vf(g);
          b.call(x);
        };
      }
      pf(r, g, n, c);
    } else g = Ry(o, r, n, c, u);
    return vf(g);
  }
  Pt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ni(r.pendingLanes);
          o !== 0 && (Gi(r, o | 1), ca(r, pt()), (Ut & 6) === 0 && (wu = pt() + 500, xi()));
        }
        break;
      case 13:
        Al(function() {
          var u = Ta(n, 1);
          if (u !== null) {
            var c = Wn();
            Hr(u, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Wu = function(n) {
    if (n.tag === 13) {
      var r = Ta(n, 134217728);
      if (r !== null) {
        var o = Wn();
        Hr(r, n, 134217728, o);
      }
      hf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Ta(n, r);
      if (o !== null) {
        var u = Wn();
        Hr(o, n, r, u);
      }
      hf(n, r);
    }
  }, rt = function() {
    return Gt;
  }, tu = function(n, r) {
    var o = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = o;
    }
  }, mt = function(n, r, o) {
    switch (r) {
      case "input":
        if (sr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Tn(u);
              if (!c) throw Error(M(90));
              rr(u), sr(u, c);
            }
          }
        }
        break;
      case "textarea":
        Kr(n, o);
        break;
      case "select":
        r = o.value, r != null && mn(n, !!o.multiple, r, !1);
    }
  }, ga = Yd, $i = Al;
  var xy = { usingClientEntryPoint: !1, Events: [Be, li, Tn, Or, Ka, Yd] }, Bs = { findFiberByHostInstance: ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gh = { bundleType: Bs.bundleType, version: Bs.version, rendererPackageName: Bs.rendererPackageName, rendererConfig: Bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Nn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Bs.findFiberByHostInstance || mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      Eo = Go.inject(gh), Zr = Go;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Qa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ep(r)) throw Error(M(200));
    return ky(n, r, null, o);
  }, Qa.createRoot = function(n, r) {
    if (!ep(n)) throw Error(M(299));
    var o = !1, u = "", c = Il;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, o, !1, u, c), n[Xi] = r.current, cu(n.nodeType === 8 ? n.parentNode : n), new Zd(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Nn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Al(n);
  }, Qa.hydrate = function(n, r, o) {
    if (!yf(r)) throw Error(M(200));
    return js(null, n, r, !0, o);
  }, Qa.hydrateRoot = function(n, r, o) {
    if (!ep(n)) throw Error(M(405));
    var u = o != null && o.hydratedSources || null, c = !1, p = "", g = Il;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (g = o.onRecoverableError)), r = hh(r, null, n, 1, o ?? null, c, !1, p, g), n[Xi] = r.current, cu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new mf(r);
  }, Qa.render = function(n, r, o) {
    if (!yf(r)) throw Error(M(200));
    return js(null, n, r, !1, o);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(M(40));
    return n._reactRootContainer ? (Al(function() {
      js(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Yd, Qa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!yf(o)) throw Error(M(200));
    if (n == null || n._reactInternals === void 0) throw Error(M(38));
    return js(n, r, o, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Xa = {};
var u0;
function s1() {
  return u0 || (u0 = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = av(), V = h0(), M = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ze = !1;
    function st(e) {
      Ze = e;
    }
    function kt(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Lt("warn", e, a);
      }
    }
    function T(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Lt("error", e, a);
      }
    }
    function Lt(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ce = 0, fe = 1, at = 2, oe = 3, we = 4, ne = 5, ke = 6, Ke = 7, Me = 8, Rt = 9, Fe = 10, pe = 11, St = 12, Pe = 13, Et = 14, Je = 15, ln = 16, Bt = 17, Zt = 18, Ne = 19, Ct = 21, f = 22, Mt = 23, _t = 24, zt = 25, De = !0, re = !1, Ae = !1, ue = !1, O = !1, W = !0, qe = !0, Ve = !0, vt = !0, ct = /* @__PURE__ */ new Set(), lt = {}, ft = {};
    function ht(e, t) {
      $t(e, t), $t(e + "Capture", t);
    }
    function $t(e, t) {
      lt[e] && T("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), lt[e] = t;
      {
        var a = e.toLowerCase();
        ft[a] = e, e === "onDoubleClick" && (ft.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ct.add(t[i]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Qn(e) {
      try {
        return Rn(e), !1;
      } catch {
        return !0;
      }
    }
    function Rn(e) {
      return "" + e;
    }
    function xn(e, t) {
      if (Qn(e))
        return T("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), Rn(e);
    }
    function sr(e) {
      if (Qn(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hn(e)), Rn(e);
    }
    function ma(e, t) {
      if (Qn(e))
        return T("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), Rn(e);
    }
    function kr(e, t) {
      if (Qn(e))
        return T("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), Rn(e);
    }
    function On(e) {
      if (Qn(e))
        return T("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", hn(e)), Rn(e);
    }
    function mn(e) {
      if (Qn(e))
        return T("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", hn(e)), Rn(e);
    }
    var Dn = 0, Xn = 1, Kr = 2, En = 3, Kn = 4, Rr = 5, Jr = 6, ya = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = ya + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + ya + "][" + le + "]*$"), m = {}, C = {};
    function R(e) {
      return rr.call(C, e) ? !0 : rr.call(m, e) ? !1 : Ue.test(e) ? (C[e] = !0, !0) : (m[e] = !0, T("Invalid attribute name: `%s`", e), !1);
    }
    function F(e, t, a) {
      return t !== null ? t.type === Dn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ie(e, t, a, i) {
      if (a !== null && a.type === Dn)
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
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ge(e, t, a, i) {
      if (t === null || typeof t > "u" || ie(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case En:
            return !t;
          case Kn:
            return t === !1;
          case Rr:
            return isNaN(t);
          case Jr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function je(e) {
      return mt.hasOwnProperty(e) ? mt[e] : null;
    }
    function xe(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Kr || t === En || t === Kn, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var mt = {}, _n = [
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
    _n.forEach(function(e) {
      mt[e] = new xe(
        e,
        Dn,
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
      mt[t] = new xe(
        t,
        Xn,
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
      mt[e] = new xe(
        e,
        Kr,
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
      mt[e] = new xe(
        e,
        Kr,
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
      mt[e] = new xe(
        e,
        En,
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
      mt[e] = new xe(
        e,
        En,
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
      mt[e] = new xe(
        e,
        Kn,
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
      mt[e] = new xe(
        e,
        Jr,
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
      mt[e] = new xe(
        e,
        Rr,
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
    var Vt = /[\-\:]([a-z])/g, Pn = function(e) {
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
      var t = e.replace(Vt, Pn);
      mt[t] = new xe(
        t,
        Xn,
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
      var t = e.replace(Vt, Pn);
      mt[t] = new xe(
        t,
        Xn,
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
      var t = e.replace(Vt, Pn);
      mt[t] = new xe(
        t,
        Xn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      mt[e] = new xe(
        e,
        Xn,
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
    var Or = "xlinkHref";
    mt[Or] = new xe(
      "xlinkHref",
      Xn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      mt[e] = new xe(
        e,
        Xn,
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
    var Ka = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ga = !1;
    function $i(e) {
      !ga && Ka.test(e) && (ga = !0, T("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function go(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        xn(a, t), i.sanitizeURL && $i("" + a);
        var s = i.attributeName, d = null;
        if (i.type === Kn) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : ge(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (ge(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === En)
            return a;
          d = e.getAttribute(s);
        }
        return ge(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function rl(e, t, a, i) {
      {
        if (!R(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return xn(a, t), l === "" + a ? a : l;
      }
    }
    function Nr(e, t, a, i) {
      var l = je(t);
      if (!F(t, l, i)) {
        if (ge(t, a, l, i) && (a = null), i || l === null) {
          if (R(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (xn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var v = l.propertyName;
          if (a === null) {
            var h = l.type;
            e[v] = h === En ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var S = l.attributeName, E = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var L = l.type, D;
          L === En || L === Kn && a === !0 ? D = "" : (xn(a, S), D = "" + a, l.sanitizeURL && $i(D.toString())), E ? e.setAttributeNS(E, S, D) : e.setAttribute(S, D);
        }
      }
    }
    var Mr = Symbol.for("react.element"), cr = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), gi = Symbol.for("react.provider"), k = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), dt = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), bt = Symbol.for("react.debug_trace_mode"), Nn = Symbol.for("react.offscreen"), sn = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), fr = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, ei = "@@iterator";
    function pt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[ei];
      return typeof t == "function" ? t : null;
    }
    var gt = Object.assign, ti = 0, al, il, So, Ql, Eo, Zr, Yu;
    function Ar() {
    }
    Ar.__reactDisabledLog = !0;
    function uc() {
      {
        if (ti === 0) {
          al = console.log, il = console.info, So = console.warn, Ql = console.error, Eo = console.group, Zr = console.groupCollapsed, Yu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ar,
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
        ti++;
      }
    }
    function sc() {
      {
        if (ti--, ti === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: gt({}, e, {
              value: al
            }),
            info: gt({}, e, {
              value: il
            }),
            warn: gt({}, e, {
              value: So
            }),
            error: gt({}, e, {
              value: Ql
            }),
            group: gt({}, e, {
              value: Eo
            }),
            groupCollapsed: gt({}, e, {
              value: Zr
            }),
            groupEnd: gt({}, e, {
              value: Yu
            })
          });
        }
        ti < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xl = M.ReactCurrentDispatcher, Co;
    function Sa(e, t, a) {
      {
        if (Co === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Co = i && i[1] || "";
          }
        return `
` + Co + e;
      }
    }
    var ni = !1, ri;
    {
      var Kl = typeof WeakMap == "function" ? WeakMap : Map;
      ri = new Kl();
    }
    function ol(e, t) {
      if (!e || ni)
        return "";
      {
        var a = ri.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ni = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xl.current, Xl.current = null, uc();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (j) {
              i = j;
            }
            e.call(d.prototype);
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
          for (var v = j.stack.split(`
`), h = i.stack.split(`
`), S = v.length - 1, E = h.length - 1; S >= 1 && E >= 0 && v[S] !== h[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (v[S] !== h[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || v[S] !== h[E]) {
                    var L = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && ri.set(e, L), L;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ni = !1, Xl.current = s, sc(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", z = D ? Sa(D) : "";
      return typeof e == "function" && ri.set(e, z), z;
    }
    function To(e, t, a) {
      return ol(e, !0);
    }
    function Jl(e, t, a) {
      return ol(e, !1);
    }
    function Zl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Vi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ol(e, Zl(e));
      if (typeof e == "string")
        return Sa(e);
      switch (e) {
        case ve:
          return Sa("Suspense");
        case Re:
          return Sa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return Jl(e.render);
          case dt:
            return Vi(e.type, t, a);
          case it: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Vi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ne:
          return Sa(e.type);
        case ln:
          return Sa("Lazy");
        case Pe:
          return Sa("Suspense");
        case Ne:
          return Sa("SuspenseList");
        case ce:
        case at:
        case Je:
          return Jl(e.type);
        case pe:
          return Jl(e.type.render);
        case fe:
          return To(e.type);
        default:
          return "";
      }
    }
    function Gi(e) {
      try {
        var t = "", a = e;
        do
          t += Qf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Gt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case cr:
          return "Portal";
        case yi:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case ve:
          return "Suspense";
        case Re:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var t = e;
            return eu(t) + ".Consumer";
          case gi:
            var a = e;
            return eu(a._context) + ".Provider";
          case Q:
            return Gt(e, e.render, "ForwardRef");
          case dt:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case it: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Pt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case Rt:
          var i = a;
          return Si(i) + ".Consumer";
        case Fe:
          var l = a;
          return Si(l._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case pe:
          return Wu(a, a.render, "ForwardRef");
        case Ke:
          return "Fragment";
        case ne:
          return a;
        case we:
          return "Portal";
        case oe:
          return "Root";
        case ke:
          return "Text";
        case ln:
          return Pt(a);
        case Me:
          return a === Ja ? "StrictMode" : "Mode";
        case f:
          return "Offscreen";
        case St:
          return "Profiler";
        case Ct:
          return "Scope";
        case Pe:
          return "Suspense";
        case Ne:
          return "SuspenseList";
        case zt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case fe:
        case ce:
        case Bt:
        case at:
        case Et:
        case Je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var tu = M.ReactDebugCurrentFrame, dr = null, Ei = !1;
    function Ur() {
      {
        if (dr === null)
          return null;
        var e = dr._debugOwner;
        if (e !== null && typeof e < "u")
          return rt(e);
      }
      return null;
    }
    function Ci() {
      return dr === null ? "" : Gi(dr);
    }
    function pn() {
      tu.getCurrentStack = null, dr = null, Ei = !1;
    }
    function en(e) {
      tu.getCurrentStack = e === null ? null : Ci, dr = e, Ei = !1;
    }
    function bo() {
      return dr;
    }
    function Jn(e) {
      Ei = e;
    }
    function Ir(e) {
      return "" + e;
    }
    function Oa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mn(e), e;
        default:
          return "";
      }
    }
    var ll = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qu(e, t) {
      ll[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || T("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || T("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Qu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wo(e) {
      return e._valueTracker;
    }
    function ul(e) {
      e._valueTracker = null;
    }
    function Xf(e) {
      var t = "";
      return e && (Qu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Na(e) {
      var t = Qu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(v) {
            mn(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            mn(v), i = "" + v;
          },
          stopTracking: function() {
            ul(e), delete e[t];
          }
        };
        return d;
      }
    }
    function ai(e) {
      wo(e) || (e._valueTracker = Na(e));
    }
    function Ti(e) {
      if (!e)
        return !1;
      var t = wo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Xf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ma(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var nu = !1, ru = !1, ko = !1, sl = !1;
    function au(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function iu(e, t) {
      var a = e, i = t.checked, l = gt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ii(e, t) {
      qu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ru && (T("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ru = !0), t.value !== void 0 && t.defaultValue !== void 0 && !nu && (T("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), nu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: au(t)
      };
    }
    function y(e, t) {
      var a = e, i = t.checked;
      i != null && Nr(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = au(t);
        !a._wrapperState.controlled && i && !sl && (T("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), sl = !0), a._wrapperState.controlled && !i && !ko && (T("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ko = !0);
      }
      y(e, t);
      var l = Oa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ir(l)) : a.value !== Ir(l) && (a.value = Ir(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ge(a, t.type, l) : t.hasOwnProperty("defaultValue") && Ge(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function P(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = Ir(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function $(e, t) {
      var a = e;
      w(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        xn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var v = Ih(d);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ti(d), w(d, v);
          }
        }
      }
    }
    function Ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ma(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var de = !1, Qe = !1, Dt = !1;
    function Ht(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Qe || (Qe = !0, T("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Dt || (Dt = !0, T("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !de && (T("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), de = !0);
    }
    function cn(e, t) {
      t.value != null && e.setAttribute("value", Ir(Oa(t.value)));
    }
    var tn = Array.isArray;
    function Tt(e) {
      return tn(e);
    }
    var nn;
    nn = !1;
    function Cn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ro = ["value", "defaultValue"];
    function Xu(e) {
      {
        qu("select", e);
        for (var t = 0; t < Ro.length; t++) {
          var a = Ro[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? T("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cn()) : !e.multiple && i && T("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cn());
          }
        }
      }
    }
    function Yi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, v = 0; v < s.length; v++)
          d["$" + s[v]] = !0;
        for (var h = 0; h < l.length; h++) {
          var S = d.hasOwnProperty("$" + l[h].value);
          l[h].selected !== S && (l[h].selected = S), S && i && (l[h].defaultSelected = !0);
        }
      } else {
        for (var E = Ir(Oa(a)), L = null, D = 0; D < l.length; D++) {
          if (l[D].value === E) {
            l[D].selected = !0, i && (l[D].defaultSelected = !0);
            return;
          }
          L === null && !l[D].disabled && (L = l[D]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function Ku(e, t) {
      return gt({}, t, {
        value: void 0
      });
    }
    function cl(e, t) {
      var a = e;
      Xu(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (T("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Yi(a, !!t.multiple, i, !1) : t.defaultValue != null && Yi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Yi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Yi(a, !!t.multiple, t.defaultValue, !0) : Yi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jf(e, t) {
      var a = e, i = t.value;
      i != null && Yi(a, !!t.multiple, i, !1);
    }
    var iv = !1;
    function Zf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = gt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function ed(e, t) {
      var a = e;
      qu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !iv && (T("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), iv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          T("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Oa(i)
      };
    }
    function ov(e, t) {
      var a = e, i = Oa(t.value), l = Oa(t.defaultValue);
      if (i != null) {
        var s = Ir(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Ir(l));
    }
    function lv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ny(e, t) {
      ov(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", td = "http://www.w3.org/1998/Math/MathML", nd = "http://www.w3.org/2000/svg";
    function rd(e) {
      switch (e) {
        case "svg":
          return nd;
        case "math":
          return td;
        default:
          return Wi;
      }
    }
    function ad(e, t) {
      return e == null || e === Wi ? rd(t) : e === nd && t === "foreignObject" ? Wi : e;
    }
    var uv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, fc, sv = uv(function(e, t) {
      if (e.namespaceURI === nd && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, qi = 3, Hn = 8, Qi = 9, id = 11, ou = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ju = {
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
    }, Zu = {
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
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      fv.forEach(function(t) {
        Zu[cv(t, e)] = Zu[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (kr(t, e), ("" + t).trim());
    }
    var dv = /([A-Z])/g, pv = /^ms-/;
    function lu(e) {
      return e.replace(dv, "-$1").toLowerCase().replace(pv, "-ms-");
    }
    var vv = function() {
    };
    {
      var ry = /^(?:webkit|moz|o)[A-Z]/, ay = /^-ms-/, hv = /-(.)/g, od = /;\s*$/, bi = {}, fl = {}, mv = !1, es = !1, iy = function(e) {
        return e.replace(hv, function(t, a) {
          return a.toUpperCase();
        });
      }, yv = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, T(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          iy(e.replace(ay, "ms-"))
        ));
      }, ld = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, T("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ud = function(e, t) {
        fl.hasOwnProperty(t) && fl[t] || (fl[t] = !0, T(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(od, "")));
      }, gv = function(e, t) {
        mv || (mv = !0, T("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Sv = function(e, t) {
        es || (es = !0, T("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vv = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : ry.test(e) ? ld(e) : od.test(t) && ud(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Sv(e, t));
      };
    }
    var Ev = vv;
    function oy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : lu(i)) + ":", t += dc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Ev(i, t[i]);
          var s = dc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ly(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Tv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ju[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function uy(e, t) {
      {
        if (!t)
          return;
        var a = Tv(e), i = Tv(t), l = {};
        for (var s in a) {
          var d = a[s], v = i[s];
          if (v && d !== v) {
            var h = d + "," + v;
            if (l[h])
              continue;
            l[h] = !0, T("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ly(e[d]) ? "Removing" : "Updating", d, v);
          }
        }
      }
    }
    var oi = {
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
    }, ts = gt({
      menuitem: !0
    }, oi), bv = "__html";
    function pc(e, t) {
      if (t) {
        if (ts[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(bv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && T("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function xo(e, t) {
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
    }, uu = {}, sy = new RegExp("^(aria)-[" + le + "]*$"), su = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function sd(e, t) {
      {
        if (rr.call(uu, t) && uu[t])
          return !0;
        if (su.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return T("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), uu[t] = !0, !0;
          if (t !== i)
            return T("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), uu[t] = !0, !0;
        }
        if (sy.test(t)) {
          var l = t.toLowerCase(), s = vc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return uu[t] = !0, !1;
          if (t !== s)
            return T("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), uu[t] = !0, !0;
        }
      }
      return !0;
    }
    function rs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = sd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? T("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && T("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function cd(e, t) {
      xo(e, t) || rs(e, t);
    }
    var fd = !1;
    function hc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !fd && (fd = !0, e === "select" && t.multiple ? T("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : T("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var dl = function() {
    };
    {
      var pr = {}, dd = /^on./, mc = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + le + "]*$"), kv = new RegExp("^(aria)[A-Z][" + le + "]*$");
      dl = function(e, t, a, i) {
        if (rr.call(pr, t) && pr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return T("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = d.hasOwnProperty(l) ? d[l] : null;
          if (v != null)
            return T("Invalid event handler property `%s`. Did you mean `%s`?", t, v), pr[t] = !0, !0;
          if (dd.test(t))
            return T("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (dd.test(t))
          return mc.test(t) && T("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (wv.test(t) || kv.test(t))
          return !0;
        if (l === "innerhtml")
          return T("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (l === "aria")
          return T("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return T("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), pr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return T("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var h = je(t), S = h !== null && h.type === Dn;
        if (ns.hasOwnProperty(l)) {
          var E = ns[l];
          if (E !== t)
            return T("Invalid DOM property `%s`. Did you mean `%s`?", t, E), pr[t] = !0, !0;
        } else if (!S && t !== l)
          return T("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), pr[t] = !0, !0;
        return typeof a == "boolean" && ie(t, a, h, !1) ? (a ? T('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : T('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), pr[t] = !0, !0) : S ? !0 : ie(t, a, h, !1) ? (pr[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === En && (T("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), pr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = dl(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? T("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && T("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function xv(e, t, a) {
      xo(e, t) || Rv(e, t, a);
    }
    var pd = 1, yc = 2, Aa = 4, vd = pd | yc | Aa, pl = null;
    function cy(e) {
      pl !== null && T("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), pl = e;
    }
    function fy() {
      pl === null && T("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), pl = null;
    }
    function as(e) {
      return e === pl;
    }
    function hd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qi ? t.parentNode : t;
    }
    var gc = null, vl = null, Kt = null;
    function Sc(e) {
      var t = Lu(e);
      if (t) {
        if (typeof gc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ih(a);
          gc(t.stateNode, t.type, i);
        }
      }
    }
    function Ec(e) {
      gc = e;
    }
    function cu(e) {
      vl ? Kt ? Kt.push(e) : Kt = [e] : vl = e;
    }
    function Dv() {
      return vl !== null || Kt !== null;
    }
    function Cc() {
      if (vl) {
        var e = vl, t = Kt;
        if (vl = null, Kt = null, Sc(e), t)
          for (var a = 0; a < t.length; a++)
            Sc(t[a]);
      }
    }
    var fu = function(e, t) {
      return e(t);
    }, is = function() {
    }, Do = !1;
    function _v() {
      var e = Dv();
      e && (is(), Cc());
    }
    function Lv(e, t, a) {
      if (Do)
        return e(t, a);
      Do = !0;
      try {
        return fu(e, t, a);
      } finally {
        Do = !1, _v();
      }
    }
    function dy(e, t, a) {
      fu = e, is = a;
    }
    function Ov(e) {
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
          return !!(a.disabled && Ov(t));
        default:
          return !1;
      }
    }
    function _o(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ih(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Tc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var os = !1;
    if (Sn)
      try {
        var hl = {};
        Object.defineProperty(hl, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", hl, hl), window.removeEventListener("test", hl, hl);
      } catch {
        os = !1;
      }
    function bc(e, t, a, i, l, s, d, v, h) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (E) {
        this.onError(E);
      }
    }
    var wc = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var md = document.createElement("react");
      wc = function(t, a, i, l, s, d, v, h, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), L = !1, D = !0, z = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          md.removeEventListener(Y, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          L = !0, G(), a.apply(i, me), D = !1;
        }
        var ze, Ft = !1, Ot = !1;
        function A(U) {
          if (ze = U.error, Ft = !0, ze === null && U.colno === 0 && U.lineno === 0 && (Ot = !0), U.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), md.addEventListener(Y, Ye, !1), E.initEvent(Y, !1, !1), md.dispatchEvent(E), j && Object.defineProperty(window, "event", j), L && D && (Ft ? Ot && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", A), !L)
          return G(), bc.apply(this, arguments);
      };
    }
    var Nv = wc, du = !1, kc = null, pu = !1, wi = null, Mv = {
      onError: function(e) {
        du = !0, kc = e;
      }
    };
    function Lo(e, t, a, i, l, s, d, v, h) {
      du = !1, kc = null, Nv.apply(Mv, arguments);
    }
    function ki(e, t, a, i, l, s, d, v, h) {
      if (Lo.apply(this, arguments), du) {
        var S = us();
        pu || (pu = !0, wi = S);
      }
    }
    function ls() {
      if (pu) {
        var e = wi;
        throw pu = !1, wi = null, e;
      }
    }
    function Xi() {
      return du;
    }
    function us() {
      if (du) {
        var e = kc;
        return du = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vu(e) {
      return e._reactInternals;
    }
    function py(e) {
      return e._reactInternals !== void 0;
    }
    function ml(e, t) {
      e._reactInternals = t;
    }
    var Be = (
      /*                      */
      0
    ), li = (
      /*                */
      1
    ), Tn = (
      /*                    */
      2
    ), At = (
      /*                       */
      4
    ), Ua = (
      /*                */
      16
    ), Ia = (
      /*                 */
      32
    ), fn = (
      /*                     */
      64
    ), He = (
      /*                   */
      128
    ), xr = (
      /*            */
      256
    ), Ln = (
      /*                          */
      512
    ), Zn = (
      /*                     */
      1024
    ), ta = (
      /*                      */
      2048
    ), na = (
      /*                    */
      4096
    ), jn = (
      /*                   */
      8192
    ), hu = (
      /*             */
      16384
    ), Av = (
      /*               */
      32767
    ), ss = (
      /*                   */
      32768
    ), ar = (
      /*                */
      65536
    ), Rc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), mu = (
      /*                    */
      2097152
    ), Ki = (
      /*                 */
      4194304
    ), xc = (
      /*                */
      8388608
    ), Oo = (
      /*               */
      16777216
    ), xi = (
      /*              */
      33554432
    ), No = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      At | Zn | 0
    ), Mo = Tn | At | Ua | Ia | Ln | na | jn, Ao = At | fn | Ln | jn, Ji = ta | Ua, Bn = Ki | xc | mu, Fa = M.ReactCurrentOwner;
    function Ea(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Tn | na)) !== Be && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === oe ? a : null;
    }
    function Di(e) {
      if (e.tag === Pe) {
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
    function _i(e) {
      return e.tag === oe ? e.stateNode.containerInfo : null;
    }
    function yl(e) {
      return Ea(e) === e;
    }
    function Uv(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === fe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || T("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = vu(e);
      return l ? Ea(l) === l : !1;
    }
    function Dc(e) {
      if (Ea(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ea(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var v = s.return;
          if (v !== null) {
            i = l = v;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return Dc(s), e;
            if (h === l)
              return Dc(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var S = !1, E = s.child; E; ) {
            if (E === i) {
              S = !0, i = s, l = d;
              break;
            }
            if (E === l) {
              S = !0, l = s, i = d;
              break;
            }
            E = E.sibling;
          }
          if (!S) {
            for (E = d.child; E; ) {
              if (E === i) {
                S = !0, i = d, l = s;
                break;
              }
              if (E === l) {
                S = !0, l = d, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== oe)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = _c(e);
      return t !== null ? aa(t) : null;
    }
    function aa(e) {
      if (e.tag === ne || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = aa(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function yn(e) {
      var t = _c(e);
      return t !== null ? za(t) : null;
    }
    function za(e) {
      if (e.tag === ne || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== we) {
          var a = za(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var yd = V.unstable_scheduleCallback, Iv = V.unstable_cancelCallback, gd = V.unstable_shouldYield, Sd = V.unstable_requestPaint, er = V.unstable_now, Lc = V.unstable_getCurrentPriorityLevel, cs = V.unstable_ImmediatePriority, Uo = V.unstable_UserBlockingPriority, Zi = V.unstable_NormalPriority, vy = V.unstable_LowPriority, gl = V.unstable_IdlePriority, Oc = V.unstable_yieldValue, Fv = V.unstable_setDisableYieldValue, Sl = null, Mn = null, he = null, Ca = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return T("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        qe && (e = gt({}, e, {
          getLaneLabelMap: El,
          injectProfilingHooks: Pa
        })), Sl = t.inject(e), Mn = t;
      } catch (a) {
        T("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ed(e, t) {
      if (Mn && typeof Mn.onScheduleFiberRoot == "function")
        try {
          Mn.onScheduleFiberRoot(Sl, e, t);
        } catch (a) {
          Ca || (Ca = !0, T("React instrumentation encountered an error: %s", a));
        }
    }
    function Cd(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & He) === He;
          if (Ve) {
            var i;
            switch (t) {
              case Fr:
                i = cs;
                break;
              case Oi:
                i = Uo;
                break;
              case Ha:
                i = Zi;
                break;
              case ja:
                i = gl;
                break;
              default:
                i = Zi;
                break;
            }
            Mn.onCommitFiberRoot(Sl, e, i, a);
          }
        } catch (l) {
          Ca || (Ca = !0, T("React instrumentation encountered an error: %s", l));
        }
    }
    function Td(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(Sl, e);
        } catch (t) {
          Ca || (Ca = !0, T("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(Sl, e);
        } catch (t) {
          Ca || (Ca = !0, T("React instrumentation encountered an error: %s", t));
        }
    }
    function bn(e) {
      if (typeof Oc == "function" && (Fv(e), st(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(Sl, e);
        } catch (t) {
          Ca || (Ca = !0, T("React instrumentation encountered an error: %s", t));
        }
    }
    function Pa(e) {
      he = e;
    }
    function El() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bl; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function wd(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function kd() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function Ta(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function ba() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function Rd(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function eo(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Io() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function Nc(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function Pv() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function fs(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function Li(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function vs() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function Cl(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Dd() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function Tl(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function Hv() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Mc() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function wn(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Ac(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function hs(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), wt = (
      /*                 */
      1
    ), Yt = (
      /*                    */
      2
    ), rn = (
      /*               */
      8
    ), Wt = (
      /*              */
      16
    ), $n = Math.clz32 ? Math.clz32 : ms, ir = Math.log, Uc = Math.LN2;
    function ms(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ir(t) / Uc | 0) | 0;
    }
    var bl = 31, X = (
      /*                        */
      0
    ), jt = (
      /*                          */
      0
    ), et = (
      /*                        */
      1
    ), Fo = (
      /*    */
      2
    ), ui = (
      /*             */
      4
    ), Dr = (
      /*            */
      8
    ), An = (
      /*                     */
      16
    ), to = (
      /*                */
      32
    ), zo = (
      /*                       */
      4194240
    ), wl = (
      /*                        */
      64
    ), Ic = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), zc = (
      /*                        */
      512
    ), Pc = (
      /*                        */
      1024
    ), Hc = (
      /*                        */
      2048
    ), jc = (
      /*                        */
      4096
    ), Bc = (
      /*                        */
      8192
    ), $c = (
      /*                        */
      16384
    ), kl = (
      /*                       */
      32768
    ), Vc = (
      /*                       */
      65536
    ), gu = (
      /*                       */
      131072
    ), Su = (
      /*                       */
      262144
    ), Gc = (
      /*                       */
      524288
    ), ys = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), Rl = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Ss = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), _d = Rl, Es = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), Cs = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & et)
          return "Sync";
        if (e & Fo)
          return "InputContinuousHydration";
        if (e & ui)
          return "InputContinuous";
        if (e & Dr)
          return "DefaultHydration";
        if (e & An)
          return "Default";
        if (e & to)
          return "TransitionHydration";
        if (e & zo)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & Cs)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var un = -1, Dl = wl, Xc = Rl;
    function Ts(e) {
      switch (Po(e)) {
        case et:
          return et;
        case Fo:
          return Fo;
        case ui:
          return ui;
        case Dr:
          return Dr;
        case An:
          return An;
        case to:
          return to;
        case wl:
        case Ic:
        case Fc:
        case zc:
        case Pc:
        case Hc:
        case jc:
        case Bc:
        case $c:
        case kl:
        case Vc:
        case gu:
        case Su:
        case Gc:
        case ys:
        case Yc:
          return e & zo;
        case Rl:
        case Wc:
        case Ss:
        case qc:
        case Qc:
          return e & gs;
        case Es:
          return Es;
        case Cs:
          return Cs;
        case xl:
          return xl;
        case oa:
          return oa;
        default:
          return T("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
      var a = e.pendingLanes;
      if (a === X)
        return X;
      var i = X, l = e.suspendedLanes, s = e.pingedLanes, d = a & Ld;
      if (d !== X) {
        var v = d & ~l;
        if (v !== X)
          i = Ts(v);
        else {
          var h = d & s;
          h !== X && (i = Ts(h));
        }
      } else {
        var S = a & ~l;
        S !== X ? i = Ts(S) : s !== X && (i = Ts(s));
      }
      if (i === X)
        return X;
      if (t !== X && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === X) {
        var E = Po(i), L = Po(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === An && (L & zo) !== X
        )
          return t;
      }
      (i & ui) !== X && (i |= a & An);
      var D = e.entangledLanes;
      if (D !== X)
        for (var z = e.entanglements, j = i & D; j > 0; ) {
          var G = Vn(j), me = 1 << G;
          i |= z[G], j &= ~me;
        }
      return i;
    }
    function si(e, t) {
      for (var a = e.eventTimes, i = un; t > 0; ) {
        var l = Vn(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Od(e, t) {
      switch (e) {
        case et:
        case Fo:
        case ui:
          return t + 250;
        case Dr:
        case An:
        case to:
        case wl:
        case Ic:
        case Fc:
        case zc:
        case Pc:
        case Hc:
        case jc:
        case Bc:
        case $c:
        case kl:
        case Vc:
        case gu:
        case Su:
        case Gc:
        case ys:
        case Yc:
          return t + 5e3;
        case Rl:
        case Wc:
        case Ss:
        case qc:
        case Qc:
          return un;
        case Es:
        case Cs:
        case xl:
        case oa:
          return un;
        default:
          return T("Should have found matching lanes. This is a bug in React."), un;
      }
    }
    function Jc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var v = Vn(d), h = 1 << v, S = s[v];
        S === un ? ((h & i) === X || (h & l) !== X) && (s[v] = Od(h, t)) : S <= t && (e.expiredLanes |= h), d &= ~h;
      }
    }
    function Bv(e) {
      return Ts(e.pendingLanes);
    }
    function Zc(e) {
      var t = e.pendingLanes & ~oa;
      return t !== X ? t : t & oa ? oa : X;
    }
    function $v(e) {
      return (e & et) !== X;
    }
    function bs(e) {
      return (e & Ld) !== X;
    }
    function _l(e) {
      return (e & gs) === e;
    }
    function Nd(e) {
      var t = et | ui | An;
      return (e & t) === X;
    }
    function Md(e) {
      return (e & zo) === e;
    }
    function ef(e, t) {
      var a = Fo | ui | Dr | An;
      return (t & a) !== X;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== X;
    }
    function Ad(e) {
      return (e & zo) !== X;
    }
    function Ud() {
      var e = Dl;
      return Dl <<= 1, (Dl & zo) === X && (Dl = wl), e;
    }
    function Gv() {
      var e = Xc;
      return Xc <<= 1, (Xc & gs) === X && (Xc = Rl), e;
    }
    function Po(e) {
      return e & -e;
    }
    function ws(e) {
      return Po(e);
    }
    function Vn(e) {
      return 31 - $n(e);
    }
    function vr(e) {
      return Vn(e);
    }
    function la(e, t) {
      return (e & t) !== X;
    }
    function Ll(e, t) {
      return (e & t) === t;
    }
    function yt(e, t) {
      return e | t;
    }
    function ks(e, t) {
      return e & ~t;
    }
    function Id(e, t) {
      return e & t;
    }
    function Yv(e) {
      return e;
    }
    function Wv(e, t) {
      return e !== jt && e < t ? e : t;
    }
    function Rs(e) {
      for (var t = [], a = 0; a < bl; a++)
        t.push(e);
      return t;
    }
    function Eu(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = X, e.pingedLanes = X);
      var i = e.eventTimes, l = vr(t);
      i[l] = a;
    }
    function qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Vn(i), s = 1 << l;
        a[l] = un, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Fd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = X, e.pingedLanes = X, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var v = Vn(d), h = 1 << v;
        i[v] = X, l[v] = un, s[v] = un, d &= ~h;
      }
    }
    function nf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Vn(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function zd(e, t) {
      var a = Po(t), i;
      switch (a) {
        case ui:
          i = Fo;
          break;
        case An:
          i = Dr;
          break;
        case wl:
        case Ic:
        case Fc:
        case zc:
        case Pc:
        case Hc:
        case jc:
        case Bc:
        case $c:
        case kl:
        case Vc:
        case gu:
        case Su:
        case Gc:
        case ys:
        case Yc:
        case Rl:
        case Wc:
        case Ss:
        case qc:
        case Qc:
          i = to;
          break;
        case xl:
          i = Cs;
          break;
        default:
          i = jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jt ? jt : i;
    }
    function xs(e, t, a) {
      if (ia)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = vr(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function Qv(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = vr(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(v) {
            var h = v.alternate;
            (h === null || !i.has(h)) && i.add(v);
          }), d.clear()), t &= ~s;
        }
    }
    function Pd(e, t) {
      return null;
    }
    var Fr = et, Oi = ui, Ha = An, ja = xl, Ds = jt;
    function Ba() {
      return Ds;
    }
    function Gn(e) {
      Ds = e;
    }
    function Xv(e, t) {
      var a = Ds;
      try {
        return Ds = e, t();
      } finally {
        Ds = a;
      }
    }
    function Kv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _s(e, t) {
      return e > t ? e : t;
    }
    function or(e, t) {
      return e !== 0 && e < t;
    }
    function Jv(e) {
      var t = Po(e);
      return or(Fr, t) ? or(Oi, t) ? bs(t) ? Ha : ja : Oi : Fr;
    }
    function rf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ls;
    function _r(e) {
      Ls = e;
    }
    function hy(e) {
      Ls(e);
    }
    var be;
    function Cu(e) {
      be = e;
    }
    var af;
    function Zv(e) {
      af = e;
    }
    var eh;
    function Os(e) {
      eh = e;
    }
    var Ns;
    function Hd(e) {
      Ns = e;
    }
    var of = !1, Ms = [], no = null, Ni = null, Mi = null, Un = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Pr = [], th = [
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
    function nh(e) {
      return th.indexOf(e) > -1;
    }
    function ci(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function jd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          no = null;
          break;
        case "dragenter":
        case "dragleave":
          Ni = null;
          break;
        case "mouseover":
        case "mouseout":
          Mi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Un.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zr.delete(i);
          break;
        }
      }
    }
    function ua(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ci(t, a, i, l, s);
        if (t !== null) {
          var v = Lu(t);
          v !== null && be(v);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return l !== null && h.indexOf(l) === -1 && h.push(l), e;
    }
    function my(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return no = ua(no, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Ni = ua(Ni, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var v = l;
          return Mi = ua(Mi, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var h = l, S = h.pointerId;
          return Un.set(S, ua(Un.get(S) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var E = l, L = E.pointerId;
          return zr.set(L, ua(zr.get(L) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function Bd(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = Ea(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Pe) {
            var l = Di(a);
            if (l !== null) {
              e.blockedOn = l, Ns(e.priority, function() {
                af(a);
              });
              return;
            }
          } else if (i === oe) {
            var s = a.stateNode;
            if (rf(s)) {
              e.blockedOn = _i(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rh(e) {
      for (var t = eh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Pr.length && or(t, Pr[i].priority); i++)
        ;
      Pr.splice(i, 0, a), i === 0 && Bd(a);
    }
    function As(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = bu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          cy(s), l.target.dispatchEvent(s), fy();
        } else {
          var d = Lu(i);
          return d !== null && be(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function $d(e, t, a) {
      As(e) && a.delete(t);
    }
    function yy() {
      of = !1, no !== null && As(no) && (no = null), Ni !== null && As(Ni) && (Ni = null), Mi !== null && As(Mi) && (Mi = null), Un.forEach($d), zr.forEach($d);
    }
    function Ho(e, t) {
      e.blockedOn === t && (e.blockedOn = null, of || (of = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, yy)));
    }
    function Ol(e) {
      if (Ms.length > 0) {
        Ho(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      no !== null && Ho(no, e), Ni !== null && Ho(Ni, e), Mi !== null && Ho(Mi, e);
      var i = function(v) {
        return Ho(v, e);
      };
      Un.forEach(i), zr.forEach(i);
      for (var l = 0; l < Pr.length; l++) {
        var s = Pr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Pr.length > 0; ) {
        var d = Pr[0];
        if (d.blockedOn !== null)
          break;
        Bd(d), d.blockedOn === null && Pr.shift();
      }
    }
    var hr = M.ReactCurrentBatchConfig, Ut = !0;
    function tr(e) {
      Ut = !!e;
    }
    function Yn() {
      return Ut;
    }
    function mr(e, t, a) {
      var i = lf(t), l;
      switch (i) {
        case Fr:
          l = wa;
          break;
        case Oi:
          l = Tu;
          break;
        case Ha:
        default:
          l = In;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function wa(e, t, a, i) {
      var l = Ba(), s = hr.transition;
      hr.transition = null;
      try {
        Gn(Fr), In(e, t, a, i);
      } finally {
        Gn(l), hr.transition = s;
      }
    }
    function Tu(e, t, a, i) {
      var l = Ba(), s = hr.transition;
      hr.transition = null;
      try {
        Gn(Oi), In(e, t, a, i);
      } finally {
        Gn(l), hr.transition = s;
      }
    }
    function In(e, t, a, i) {
      Ut && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var l = bu(e, t, a, i);
      if (l === null) {
        Ay(e, t, i, Ai, a), jd(e, i);
        return;
      }
      if (my(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jd(e, i), t & Aa && nh(e)) {
        for (; l !== null; ) {
          var s = Lu(l);
          s !== null && hy(s);
          var d = bu(e, t, a, i);
          if (d === null && Ay(e, t, i, Ai, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Ay(e, t, i, null, a);
    }
    var Ai = null;
    function bu(e, t, a, i) {
      Ai = null;
      var l = hd(i), s = Gs(l);
      if (s !== null) {
        var d = Ea(s);
        if (d === null)
          s = null;
        else {
          var v = d.tag;
          if (v === Pe) {
            var h = Di(d);
            if (h !== null)
              return h;
            s = null;
          } else if (v === oe) {
            var S = d.stateNode;
            if (rf(S))
              return _i(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return Ai = s, null;
    }
    function lf(e) {
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
          return Fr;
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
          return Oi;
        case "message": {
          var t = Lc();
          switch (t) {
            case cs:
              return Fr;
            case Uo:
              return Oi;
            case Zi:
            case vy:
              return Ha;
            case gl:
              return ja;
            default:
              return Ha;
          }
        }
        default:
          return Ha;
      }
    }
    function Is(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function wu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ka = null, ku = null, Nl = null;
    function jo(e) {
      return ka = e, ku = Fs(), !0;
    }
    function uf() {
      ka = null, ku = null, Nl = null;
    }
    function ro() {
      if (Nl)
        return Nl;
      var e, t = ku, a = t.length, i, l = Fs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Nl = l.slice(e, v), Nl;
    }
    function Fs() {
      return "value" in ka ? ka.value : ka.textContent;
    }
    function Bo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ru() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function Lr(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var h = e[v];
            h ? this[v] = h(s) : this[v] = s[v];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = Ru : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return gt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ru);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ru);
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
        isPersistent: Ru
      }), t;
    }
    var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = Lr(Wn), Hr = gt({}, Wn, {
      view: 0,
      detail: 0
    }), ca = Lr(Hr), sf, Ps, Ml;
    function gy(e) {
      e !== Ml && (Ml && e.type === "mousemove" ? (sf = e.screenX - Ml.screenX, Ps = e.screenY - Ml.screenY) : (sf = 0, Ps = 0), Ml = e);
    }
    var fi = gt({}, Hr, {
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
      getModifierState: gn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (gy(e), sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ps;
      }
    }), Gd = Lr(fi), Yd = gt({}, fi, {
      dataTransfer: 0
    }), Al = Lr(Yd), Wd = gt({}, Hr, {
      relatedTarget: 0
    }), ao = Lr(Wd), ah = gt({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ih = Lr(ah), qd = gt({}, Wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cf = Lr(qd), Sy = gt({}, Wn, {
      data: 0
    }), oh = Lr(Sy), lh = oh, uh = {
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
    }, Ul = {
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
    function Ey(e) {
      if (e.key) {
        var t = uh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Bo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ul[e.keyCode] || "Unidentified" : "";
    }
    var xu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = xu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return sh;
    }
    var Cy = gt({}, Hr, {
      key: Ey,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Bo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ch = Lr(Cy), Ty = gt({}, fi, {
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
    }), fh = Lr(Ty), dh = gt({}, Hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn
    }), ph = Lr(dh), by = gt({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $a = Lr(by), Qd = gt({}, fi, {
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
    }), wy = Lr(Qd), $o = [9, 13, 27, 32], Hs = 229, io = Sn && "CompositionEvent" in window, Vo = null;
    Sn && "documentMode" in document && (Vo = document.documentMode);
    var Xd = Sn && "TextEvent" in window && !Vo, ff = Sn && (!io || Vo && Vo > 8 && Vo <= 11), vh = 32, df = String.fromCharCode(vh);
    function ky() {
      ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function hh(e) {
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
      return e === "keydown" && t.keyCode === Hs;
    }
    function Jd(e, t) {
      switch (e) {
        case "keyup":
          return $o.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
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
    function mh(e) {
      return e.locale === "ko";
    }
    var Il = !1;
    function Zd(e, t, a, i, l) {
      var s, d;
      if (io ? s = pf(t) : Il ? Jd(t, i) && (s = "onCompositionEnd") : vf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ff && !mh(i) && (!Il && s === "onCompositionStart" ? Il = jo(l) : s === "onCompositionEnd" && Il && (d = ro()));
      var v = bh(a, s);
      if (v.length > 0) {
        var h = new oh(s, t, null, i, l);
        if (e.push({
          event: h,
          listeners: v
        }), d)
          h.data = d;
        else {
          var S = hf(i);
          S !== null && (h.data = S);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return hf(t);
        case "keypress":
          var a = t.which;
          return a !== vh ? null : (Kd = !0, df);
        case "textInput":
          var i = t.data;
          return i === df && Kd ? null : i;
        default:
          return null;
      }
    }
    function ep(e, t) {
      if (Il) {
        if (e === "compositionend" || !io && Jd(e, t)) {
          var a = ro();
          return uf(), Il = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!hh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ff && !mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yf(e, t, a, i, l) {
      var s;
      if (Xd ? s = mf(t, i) : s = ep(t, i), !s)
        return null;
      var d = bh(a, "onBeforeInput");
      if (d.length > 0) {
        var v = new lh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: v,
          listeners: d
        }), v.data = s;
      }
    }
    function yh(e, t, a, i, l, s, d) {
      Zd(e, t, a, i, l), yf(e, t, a, i, l);
    }
    var Ry = {
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
    function js(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ry[e.type] : t === "textarea";
    }
    function xy(e) {
      if (!Sn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Bs() {
      ht("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function gh(e, t, a, i) {
      cu(i);
      var l = bh(t, "onChange");
      if (l.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Go = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      gh(t, n, e, hd(e)), Lv(u, t);
    }
    function u(e) {
      NE(e, 0);
    }
    function c(e) {
      var t = bf(e);
      if (Ti(t))
        return e;
    }
    function p(e, t) {
      if (e === "change")
        return t;
    }
    var g = !1;
    Sn && (g = xy("input") && (!document.documentMode || document.documentMode > 9));
    function b(e, t) {
      Go = e, n = t, Go.attachEvent("onpropertychange", H);
    }
    function x() {
      Go && (Go.detachEvent("onpropertychange", H), Go = null, n = null);
    }
    function H(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function J(e, t, a) {
      e === "focusin" ? (x(), b(t, a)) : e === "focusout" && x();
    }
    function ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function K(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ee(e, t) {
      if (e === "click")
        return c(t);
    }
    function _e(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ie(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ge(e, "number", e.value);
    }
    function Fn(e, t, a, i, l, s, d) {
      var v = a ? bf(a) : window, h, S;
      if (r(v) ? h = p : js(v) ? g ? h = _e : (h = ee, S = J) : K(v) && (h = Ee), h) {
        var E = h(t, a);
        if (E) {
          gh(e, E, i, l);
          return;
        }
      }
      S && S(t, v, a), t === "focusout" && Ie(v);
    }
    function N() {
      $t("onMouseEnter", ["mouseout", "mouseover"]), $t("onMouseLeave", ["mouseout", "mouseover"]), $t("onPointerEnter", ["pointerout", "pointerover"]), $t("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function _(e, t, a, i, l, s, d) {
      var v = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (v && !as(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (Gs(S) || vp(S)))
          return;
      }
      if (!(!h && !v)) {
        var E;
        if (l.window === l)
          E = l;
        else {
          var L = l.ownerDocument;
          L ? E = L.defaultView || L.parentWindow : E = window;
        }
        var D, z;
        if (h) {
          var j = i.relatedTarget || i.toElement;
          if (D = a, z = j ? Gs(j) : null, z !== null) {
            var G = Ea(z);
            (z !== G || z.tag !== ne && z.tag !== ke) && (z = null);
          }
        } else
          D = null, z = a;
        if (D !== z) {
          var me = Gd, Ye = "onMouseLeave", ze = "onMouseEnter", Ft = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = fh, Ye = "onPointerLeave", ze = "onPointerEnter", Ft = "pointer");
          var Ot = D == null ? E : bf(D), A = z == null ? E : bf(z), Y = new me(Ye, Ft + "leave", D, i, l);
          Y.target = Ot, Y.relatedTarget = A;
          var U = null, te = Gs(l);
          if (te === a) {
            var Te = new me(ze, Ft + "enter", z, i, l);
            Te.target = A, Te.relatedTarget = Ot, U = Te;
          }
          U0(e, Y, U, D, z);
        }
      }
    }
    function I(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Z = typeof Object.is == "function" ? Object.is : I;
    function Le(e, t) {
      if (Z(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!rr.call(t, s) || !Z(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function We(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Xe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function nt(e, t) {
      for (var a = We(e), i = 0, l = 0; a; ) {
        if (a.nodeType === qi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = We(Xe(a));
      }
    }
    function lr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, v = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return qt(e, l, s, d, v);
    }
    function qt(e, t, a, i, l) {
      var s = 0, d = -1, v = -1, h = 0, S = 0, E = e, L = null;
      e: for (; ; ) {
        for (var D = null; E === t && (a === 0 || E.nodeType === qi) && (d = s + a), E === i && (l === 0 || E.nodeType === qi) && (v = s + l), E.nodeType === qi && (s += E.nodeValue.length), (D = E.firstChild) !== null; )
          L = E, E = D;
        for (; ; ) {
          if (E === e)
            break e;
          if (L === t && ++h === a && (d = s), L === i && ++S === l && (v = s), (D = E.nextSibling) !== null)
            break;
          E = L, L = E.parentNode;
        }
        E = D;
      }
      return d === -1 || v === -1 ? null : {
        start: d,
        end: v
      };
    }
    function Yo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), v = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > v) {
          var h = v;
          v = d, d = h;
        }
        var S = nt(e, d), E = nt(e, v);
        if (S && E) {
          if (l.rangeCount === 1 && l.anchorNode === S.node && l.anchorOffset === S.offset && l.focusNode === E.node && l.focusOffset === E.offset)
            return;
          var L = a.createRange();
          L.setStart(S.node, S.offset), l.removeAllRanges(), d > v ? (l.addRange(L), l.extend(E.node, E.offset)) : (L.setEnd(E.node, E.offset), l.addRange(L));
        }
      }
    }
    function Sh(e) {
      return e && e.nodeType === qi;
    }
    function CE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Sh(e) ? !1 : Sh(t) ? CE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function y0(e) {
      return e && e.ownerDocument && CE(e.ownerDocument.documentElement, e);
    }
    function g0(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function TE() {
      for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
        if (g0(t))
          e = t.contentWindow;
        else
          return t;
        t = Ma(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function S0() {
      var e = TE();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? C0(e) : null
      };
    }
    function E0(e) {
      var t = TE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && y0(a)) {
        i !== null && Dy(a) && T0(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ea && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var v = l[d];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function C0(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = lr(e), t || {
        start: 0,
        end: 0
      };
    }
    function T0(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Yo(e, t);
    }
    var b0 = Sn && "documentMode" in document && document.documentMode <= 11;
    function w0() {
      ht("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var gf = null, _y = null, tp = null, Ly = !1;
    function k0(e) {
      if ("selectionStart" in e && Dy(e))
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
    function R0(e) {
      return e.window === e ? e.document : e.nodeType === Qi ? e : e.ownerDocument;
    }
    function bE(e, t, a) {
      var i = R0(a);
      if (!(Ly || gf == null || gf !== Ma(i))) {
        var l = k0(gf);
        if (!tp || !Le(tp, l)) {
          tp = l;
          var s = bh(_y, "onSelect");
          if (s.length > 0) {
            var d = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = gf;
          }
        }
      }
    }
    function x0(e, t, a, i, l, s, d) {
      var v = a ? bf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (js(v) || v.contentEditable === "true") && (gf = v, _y = a, tp = null);
          break;
        case "focusout":
          gf = null, _y = null, tp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Ly = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ly = !1, bE(e, i, l);
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
          if (b0)
            break;
        // falls through
        case "keydown":
        case "keyup":
          bE(e, i, l);
      }
    }
    function Eh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Sf = {
      animationend: Eh("Animation", "AnimationEnd"),
      animationiteration: Eh("Animation", "AnimationIteration"),
      animationstart: Eh("Animation", "AnimationStart"),
      transitionend: Eh("Transition", "TransitionEnd")
    }, Oy = {}, wE = {};
    Sn && (wE = document.createElement("div").style, "AnimationEvent" in window || (delete Sf.animationend.animation, delete Sf.animationiteration.animation, delete Sf.animationstart.animation), "TransitionEvent" in window || delete Sf.transitionend.transition);
    function Ch(e) {
      if (Oy[e])
        return Oy[e];
      if (!Sf[e])
        return e;
      var t = Sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in wE)
          return Oy[e] = t[a];
      return e;
    }
    var kE = Ch("animationend"), RE = Ch("animationiteration"), xE = Ch("animationstart"), DE = Ch("transitionend"), _E = /* @__PURE__ */ new Map(), LE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Du(e, t) {
      _E.set(e, t), ht(t, [e]);
    }
    function D0() {
      for (var e = 0; e < LE.length; e++) {
        var t = LE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Du(a, "on" + i);
      }
      Du(kE, "onAnimationEnd"), Du(RE, "onAnimationIteration"), Du(xE, "onAnimationStart"), Du("dblclick", "onDoubleClick"), Du("focusin", "onFocus"), Du("focusout", "onBlur"), Du(DE, "onTransitionEnd");
    }
    function _0(e, t, a, i, l, s, d) {
      var v = _E.get(t);
      if (v !== void 0) {
        var h = Ui, S = t;
        switch (t) {
          case "keypress":
            if (Bo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            h = ch;
            break;
          case "focusin":
            S = "focus", h = ao;
            break;
          case "focusout":
            S = "blur", h = ao;
            break;
          case "beforeblur":
          case "afterblur":
            h = ao;
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
            h = Gd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Al;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = ph;
            break;
          case kE:
          case RE:
          case xE:
            h = ih;
            break;
          case DE:
            h = $a;
            break;
          case "scroll":
            h = ca;
            break;
          case "wheel":
            h = wy;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = fh;
            break;
        }
        var E = (s & Aa) !== 0;
        {
          var L = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = M0(a, v, i.type, E, L);
          if (D.length > 0) {
            var z = new h(v, S, null, i, l);
            e.push({
              event: z,
              listeners: D
            });
          }
        }
      }
    }
    D0(), N(), Bs(), w0(), ky();
    function L0(e, t, a, i, l, s, d) {
      _0(e, t, a, i, l, s);
      var v = (s & vd) === 0;
      v && (_(e, t, a, i, l), Fn(e, t, a, i, l), x0(e, t, a, i, l), yh(e, t, a, i, l));
    }
    var np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ny = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(np));
    function OE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ki(i, t, void 0, e), e.currentTarget = null;
    }
    function O0(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, v = s.currentTarget, h = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          OE(e, h, v), i = d;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var E = t[S], L = E.instance, D = E.currentTarget, z = E.listener;
          if (L !== i && e.isPropagationStopped())
            return;
          OE(e, z, D), i = L;
        }
    }
    function NE(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        O0(s, d, a);
      }
      ls();
    }
    function N0(e, t, a, i, l) {
      var s = hd(a), d = [];
      L0(d, e, i, a, s, t), NE(d, t);
    }
    function kn(e, t) {
      Ny.has(e) || T('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uk(t), l = I0(e);
      i.has(l) || (ME(t, e, yc, a), i.add(l));
    }
    function My(e, t, a) {
      Ny.has(e) && !t && T('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), ME(a, e, i, t);
    }
    var Th = "_reactListening" + Math.random().toString(36).slice(2);
    function rp(e) {
      if (!e[Th]) {
        e[Th] = !0, ct.forEach(function(a) {
          a !== "selectionchange" && (Ny.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === Qi ? e : e.ownerDocument;
        t !== null && (t[Th] || (t[Th] = !0, My("selectionchange", !1, t)));
      }
    }
    function ME(e, t, a, i, l) {
      var s = mr(e, t, a), d = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? Vd(e, t, s, d) : sa(e, t, s) : d !== void 0 ? wu(e, t, s, d) : Is(e, t, s);
    }
    function AE(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
    }
    function Ay(e, t, a, i, l) {
      var s = i;
      if ((t & pd) === 0 && (t & yc) === 0) {
        var d = l;
        if (i !== null) {
          var v = i;
          e: for (; ; ) {
            if (v === null)
              return;
            var h = v.tag;
            if (h === oe || h === we) {
              var S = v.stateNode.containerInfo;
              if (AE(S, d))
                break;
              if (h === we)
                for (var E = v.return; E !== null; ) {
                  var L = E.tag;
                  if (L === oe || L === we) {
                    var D = E.stateNode.containerInfo;
                    if (AE(D, d))
                      return;
                  }
                  E = E.return;
                }
              for (; S !== null; ) {
                var z = Gs(S);
                if (z === null)
                  return;
                var j = z.tag;
                if (j === ne || j === ke) {
                  v = s = z;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            v = v.return;
          }
        }
      }
      Lv(function() {
        return N0(e, t, a, s);
      });
    }
    function ap(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function M0(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, v = i ? d : t, h = [], S = e, E = null; S !== null; ) {
        var L = S, D = L.stateNode, z = L.tag;
        if (z === ne && D !== null && (E = D, v !== null)) {
          var j = _o(S, v);
          j != null && h.push(ap(S, j, E));
        }
        if (l)
          break;
        S = S.return;
      }
      return h;
    }
    function bh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, v = s.tag;
        if (v === ne && d !== null) {
          var h = d, S = _o(l, a);
          S != null && i.unshift(ap(l, S, h));
          var E = _o(l, t);
          E != null && i.push(ap(l, E, h));
        }
        l = l.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ne);
      return e || null;
    }
    function A0(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Ef(s))
        l++;
      for (var d = 0, v = i; v; v = Ef(v))
        d++;
      for (; l - d > 0; )
        a = Ef(a), l--;
      for (; d - l > 0; )
        i = Ef(i), d--;
      for (var h = l; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function UE(e, t, a, i, l) {
      for (var s = t._reactName, d = [], v = a; v !== null && v !== i; ) {
        var h = v, S = h.alternate, E = h.stateNode, L = h.tag;
        if (S !== null && S === i)
          break;
        if (L === ne && E !== null) {
          var D = E;
          if (l) {
            var z = _o(v, s);
            z != null && d.unshift(ap(v, z, D));
          } else if (!l) {
            var j = _o(v, s);
            j != null && d.push(ap(v, j, D));
          }
        }
        v = v.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function U0(e, t, a, i, l) {
      var s = i && l ? A0(i, l) : null;
      i !== null && UE(e, t, i, s, !1), l !== null && a !== null && UE(e, a, l, s, !0);
    }
    function I0(e, t) {
      return e + "__bubble";
    }
    var Va = !1, ip = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", _u = "suppressHydrationWarning", IE = "autoFocus", $s = "children", Vs = "style", kh = "__html", Uy, Rh, op, FE, xh, zE, PE;
    Uy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      cd(e, t), hc(e, t), xv(e, t, {
        registrationNameDependencies: lt,
        possibleRegistrationNames: ft
      });
    }, zE = Sn && !document.documentMode, op = function(e, t, a) {
      if (!Va) {
        var i = Dh(a), l = Dh(t);
        l !== i && (Va = !0, T("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, FE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), T("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? T("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : T("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, PE = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var F0 = /\r\n?/g, z0 = /\u0000|\uFFFD/g;
    function Dh(e) {
      On(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(F0, `
`).replace(z0, "");
    }
    function _h(e, t, a, i) {
      var l = Dh(t), s = Dh(e);
      if (s !== l && (i && (Va || (Va = !0, T('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && De))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function HE(e) {
      return e.nodeType === Qi ? e : e.ownerDocument;
    }
    function P0() {
    }
    function Lh(e) {
      e.onclick = P0;
    }
    function H0(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Vs)
            d && Object.freeze(d), Cv(t, d);
          else if (s === ip) {
            var v = d ? d[kh] : void 0;
            v != null && sv(t, v);
          } else if (s === $s)
            if (typeof d == "string") {
              var h = e !== "textarea" || d !== "";
              h && ou(t, d);
            } else typeof d == "number" && ou(t, "" + d);
          else s === wh || s === _u || s === IE || (lt.hasOwnProperty(s) ? d != null && (typeof d != "function" && xh(s, d), s === "onScroll" && kn("scroll", t)) : d != null && Nr(t, s, d, l));
        }
    }
    function j0(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === Vs ? Cv(e, d) : s === ip ? sv(e, d) : s === $s ? ou(e, d) : Nr(e, s, d, i);
      }
    }
    function B0(e, t, a, i) {
      var l, s = HE(a), d, v = i;
      if (v === Wi && (v = rd(e)), v === Wi) {
        if (l = xo(e, t), !l && e !== e.toLowerCase() && T("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var S = h.firstChild;
          d = h.removeChild(S);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var E = d;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        d = s.createElementNS(v, e);
      return v === Wi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !rr.call(Uy, e) && (Uy[e] = !0, T("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function $0(e, t) {
      return HE(t).createTextNode(e);
    }
    function V0(e, t, a, i) {
      var l = xo(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < np.length; d++)
            kn(np[d], e);
          s = a;
          break;
        case "source":
          kn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), s = a;
          break;
        case "details":
          kn("toggle", e), s = a;
          break;
        case "input":
          ii(e, a), s = iu(e, a), kn("invalid", e);
          break;
        case "option":
          Ht(e, a), s = a;
          break;
        case "select":
          cl(e, a), s = Ku(e, a), kn("invalid", e);
          break;
        case "textarea":
          ed(e, a), s = Zf(e, a), kn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), H0(t, e, i, s, l), t) {
        case "input":
          ai(e), P(e, a, !1);
          break;
        case "textarea":
          ai(e), lv(e);
          break;
        case "option":
          cn(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Lh(e);
          break;
      }
    }
    function G0(e, t, a, i, l) {
      Rh(t, i);
      var s = null, d, v;
      switch (t) {
        case "input":
          d = iu(e, a), v = iu(e, i), s = [];
          break;
        case "select":
          d = Ku(e, a), v = Ku(e, i), s = [];
          break;
        case "textarea":
          d = Zf(e, a), v = Zf(e, i), s = [];
          break;
        default:
          d = a, v = i, typeof d.onClick != "function" && typeof v.onClick == "function" && Lh(e);
          break;
      }
      pc(t, v);
      var h, S, E = null;
      for (h in d)
        if (!(v.hasOwnProperty(h) || !d.hasOwnProperty(h) || d[h] == null))
          if (h === Vs) {
            var L = d[h];
            for (S in L)
              L.hasOwnProperty(S) && (E || (E = {}), E[S] = "");
          } else h === ip || h === $s || h === wh || h === _u || h === IE || (lt.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in v) {
        var D = v[h], z = d?.[h];
        if (!(!v.hasOwnProperty(h) || D === z || D == null && z == null))
          if (h === Vs)
            if (D && Object.freeze(D), z) {
              for (S in z)
                z.hasOwnProperty(S) && (!D || !D.hasOwnProperty(S)) && (E || (E = {}), E[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && z[S] !== D[S] && (E || (E = {}), E[S] = D[S]);
            } else
              E || (s || (s = []), s.push(h, E)), E = D;
          else if (h === ip) {
            var j = D ? D[kh] : void 0, G = z ? z[kh] : void 0;
            j != null && G !== j && (s = s || []).push(h, j);
          } else h === $s ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(h, "" + D) : h === wh || h === _u || (lt.hasOwnProperty(h) ? (D != null && (typeof D != "function" && xh(h, D), h === "onScroll" && kn("scroll", e)), !s && z !== D && (s = [])) : (s = s || []).push(h, D));
      }
      return E && (uy(E, v[Vs]), (s = s || []).push(Vs, E)), s;
    }
    function Y0(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && y(e, l);
      var s = xo(a, i), d = xo(a, l);
      switch (j0(e, t, s, d), a) {
        case "input":
          w(e, l);
          break;
        case "textarea":
          ov(e, l);
          break;
        case "select":
          cc(e, l);
          break;
      }
    }
    function W0(e) {
      {
        var t = e.toLowerCase();
        return ns.hasOwnProperty(t) && ns[t] || null;
      }
    }
    function q0(e, t, a, i, l, s, d) {
      var v, h;
      switch (v = xo(t, a), Rh(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < np.length; S++)
            kn(np[S], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          ii(e, a), kn("invalid", e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          cl(e, a), kn("invalid", e);
          break;
        case "textarea":
          ed(e, a), kn("invalid", e);
          break;
      }
      pc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var E = e.attributes, L = 0; L < E.length; L++) {
          var D = E[L].name.toLowerCase();
          switch (D) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(E[L].name);
          }
        }
      }
      var z = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var G = a[j];
          if (j === $s)
            typeof G == "string" ? e.textContent !== G && (a[_u] !== !0 && _h(e.textContent, G, s, d), z = [$s, G]) : typeof G == "number" && e.textContent !== "" + G && (a[_u] !== !0 && _h(e.textContent, G, s, d), z = [$s, "" + G]);
          else if (lt.hasOwnProperty(j))
            G != null && (typeof G != "function" && xh(j, G), j === "onScroll" && kn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var me = void 0, Ye = je(j);
            if (a[_u] !== !0) {
              if (!(j === wh || j === _u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === ip) {
                  var ze = e.innerHTML, Ft = G ? G[kh] : void 0;
                  if (Ft != null) {
                    var Ot = PE(e, Ft);
                    Ot !== ze && op(j, ze, Ot);
                  }
                } else if (j === Vs) {
                  if (h.delete(j), zE) {
                    var A = oy(G);
                    me = e.getAttribute("style"), A !== me && op(j, me, A);
                  }
                } else if (v && !O)
                  h.delete(j.toLowerCase()), me = rl(e, j, G), G !== me && op(j, me, G);
                else if (!F(j, Ye, v) && !ge(j, G, Ye, v)) {
                  var Y = !1;
                  if (Ye !== null)
                    h.delete(Ye.attributeName), me = go(e, j, G, Ye);
                  else {
                    var U = i;
                    if (U === Wi && (U = rd(t)), U === Wi)
                      h.delete(j.toLowerCase());
                    else {
                      var te = W0(j);
                      te !== null && te !== j && (Y = !0, h.delete(te)), h.delete(j);
                    }
                    me = rl(e, j, G);
                  }
                  var Te = O;
                  !Te && G !== me && !Y && op(j, me, G);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[_u] !== !0 && FE(h), t) {
        case "input":
          ai(e), P(e, a, !0);
          break;
        case "textarea":
          ai(e), lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Lh(e);
          break;
      }
      return z;
    }
    function Q0(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Iy(e, t) {
      {
        if (Va)
          return;
        Va = !0, T("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t) {
      {
        if (Va)
          return;
        Va = !0, T('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, T("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Py(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, T('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function X0(e, t, a) {
      switch (t) {
        case "input":
          $(e, a);
          return;
        case "textarea":
          ny(e, a);
          return;
        case "select":
          Jf(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var K0 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
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
      ], J0 = jE.concat(["button"]), Z0 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], BE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = gt({}, e || BE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), J0.indexOf(t) !== -1 && (a.pTagInButtonScope = null), K0.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ew = function(e, t) {
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
            return Z0.indexOf(t) === -1;
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
      }, tw = function(e, t) {
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
      }, $E = {};
      lp = function(e, t, a) {
        a = a || BE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && T("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ew(e, l) ? null : i, d = s ? null : tw(e, a), v = s || d;
        if (v) {
          var h = v.tag, S = !!s + "|" + e + "|" + h;
          if (!$E[S]) {
            $E[S] = !0;
            var E = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var D = "";
              h === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), T("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, h, L, D);
            } else
              T("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, h);
          }
        }
      };
    }
    var Oh = "suppressHydrationWarning", Nh = "$", Mh = "/$", sp = "$?", cp = "$!", nw = "style", Hy = null, jy = null;
    function rw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Qi:
        case id: {
          t = i === Qi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : ad(null, "");
          break;
        }
        default: {
          var s = i === Hn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = ad(d, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), h = up(null, v);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function aw(e, t, a) {
      {
        var i = e, l = ad(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function N1(e) {
      return e;
    }
    function iw(e) {
      Hy = Yn(), jy = S0();
      var t = null;
      return tr(!1), t;
    }
    function ow(e) {
      E0(jy), tr(Hy), Hy = null, jy = null;
    }
    function lw(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (lp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, h = up(d.ancestorInfo, e);
          lp(null, v, h);
        }
        s = d.namespace;
      }
      var S = B0(e, t, a, s);
      return pp(l, S), Qy(S, t), S;
    }
    function uw(e, t) {
      e.appendChild(t);
    }
    function sw(e, t, a, i, l) {
      switch (V0(e, t, a, i), t) {
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
    function cw(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, h = up(d.ancestorInfo, t);
          lp(null, v, h);
        }
      }
      return G0(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fw(e, t, a, i) {
      {
        var l = a;
        lp(null, e, l.ancestorInfo);
      }
      var s = $0(e, t);
      return pp(i, s), s;
    }
    function dw() {
      var e = window.event;
      return e === void 0 ? Ha : lf(e.type);
    }
    var $y = typeof setTimeout == "function" ? setTimeout : void 0, pw = typeof clearTimeout == "function" ? clearTimeout : void 0, Vy = -1, VE = typeof Promise == "function" ? Promise : void 0, vw = typeof queueMicrotask == "function" ? queueMicrotask : typeof VE < "u" ? function(e) {
      return VE.resolve(null).then(e).catch(hw);
    } : $y;
    function hw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mw(e, t, a, i) {
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
    function yw(e, t, a, i, l, s) {
      Y0(e, t, a, i, l), Qy(e, l);
    }
    function GE(e) {
      ou(e, "");
    }
    function gw(e, t, a) {
      e.nodeValue = a;
    }
    function Sw(e, t) {
      e.appendChild(t);
    }
    function Ew(e, t) {
      var a;
      e.nodeType === Hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Lh(a);
    }
    function Cw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Tw(e, t, a) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function bw(e, t) {
      e.removeChild(t);
    }
    function ww(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Gy(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Hn) {
          var s = l.data;
          if (s === Mh)
            if (i === 0) {
              e.removeChild(l), Ol(t);
              return;
            } else
              i--;
          else (s === Nh || s === sp || s === cp) && i++;
        }
        a = l;
      } while (a);
      Ol(t);
    }
    function kw(e, t) {
      e.nodeType === Hn ? Gy(e.parentNode, t) : e.nodeType === ea && Gy(e, t), Ol(e);
    }
    function Rw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xw(e) {
      e.nodeValue = "";
    }
    function Dw(e, t) {
      e = e;
      var a = t[nw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function _w(e, t) {
      e.nodeValue = t;
    }
    function Lw(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === Qi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Ow(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nw(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function Mw(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function YE(e) {
      return e.data === sp;
    }
    function Yy(e) {
      return e.data === cp;
    }
    function Aw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function Uw(e, t) {
      e._reactRetry = t;
    }
    function Ah(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === qi)
          break;
        if (t === Hn) {
          var a = e.data;
          if (a === Nh || a === cp || a === sp)
            break;
          if (a === Mh)
            return null;
        }
      }
      return e;
    }
    function fp(e) {
      return Ah(e.nextSibling);
    }
    function Iw(e) {
      return Ah(e.firstChild);
    }
    function Fw(e) {
      return Ah(e.firstChild);
    }
    function zw(e) {
      return Ah(e.nextSibling);
    }
    function Pw(e, t, a, i, l, s, d) {
      pp(s, e), Qy(e, a);
      var v;
      {
        var h = l;
        v = h.namespace;
      }
      var S = (s.mode & wt) !== $e;
      return q0(e, t, a, v, i, S, d);
    }
    function Hw(e, t, a, i) {
      return pp(a, e), a.mode & wt, Q0(e, t);
    }
    function jw(e, t) {
      pp(t, e);
    }
    function Bw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === Mh) {
            if (a === 0)
              return fp(t);
            a--;
          } else (i === Nh || i === cp || i === sp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function WE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === Nh || i === cp || i === sp) {
            if (a === 0)
              return t;
            a--;
          } else i === Mh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $w(e) {
      Ol(e);
    }
    function Vw(e) {
      Ol(e);
    }
    function Gw(e) {
      return e !== "head" && e !== "body";
    }
    function Yw(e, t, a, i) {
      var l = !0;
      _h(t.nodeValue, a, i, l);
    }
    function Ww(e, t, a, i, l, s) {
      if (t[Oh] !== !0) {
        var d = !0;
        _h(i.nodeValue, l, s, d);
      }
    }
    function qw(e, t) {
      t.nodeType === ea ? Iy(e, t) : t.nodeType === Hn || Fy(e, t);
    }
    function Qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? Iy(a, t) : t.nodeType === Hn || Fy(a, t));
      }
    }
    function Xw(e, t, a, i, l) {
      (l || t[Oh] !== !0) && (i.nodeType === ea ? Iy(a, i) : i.nodeType === Hn || Fy(a, i));
    }
    function Kw(e, t, a) {
      zy(e, t);
    }
    function Jw(e, t) {
      Py(e, t);
    }
    function Zw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function ek(e, t) {
      {
        var a = e.parentNode;
        a !== null && Py(a, t);
      }
    }
    function tk(e, t, a, i, l, s) {
      (s || t[Oh] !== !0) && zy(a, i);
    }
    function nk(e, t, a, i, l) {
      (l || t[Oh] !== !0) && Py(a, i);
    }
    function rk(e) {
      T("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ak(e) {
      rp(e);
    }
    var Cf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Cf, Wy = "__reactProps$" + Cf, dp = "__reactContainer$" + Cf, qy = "__reactEvents$" + Cf, ik = "__reactListeners$" + Cf, ok = "__reactHandles$" + Cf;
    function lk(e) {
      delete e[Tf], delete e[Wy], delete e[qy], delete e[ik], delete e[ok];
    }
    function pp(e, t) {
      t[Tf] = e;
    }
    function Uh(e, t) {
      t[dp] = e;
    }
    function qE(e) {
      e[dp] = null;
    }
    function vp(e) {
      return !!e[dp];
    }
    function Gs(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[dp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = WE(e); l !== null; ) {
              var s = l[Tf];
              if (s)
                return s;
              l = WE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lu(e) {
      var t = e[Tf] || e[dp];
      return t && (t.tag === ne || t.tag === ke || t.tag === Pe || t.tag === oe) ? t : null;
    }
    function bf(e) {
      if (e.tag === ne || e.tag === ke)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ih(e) {
      return e[Wy] || null;
    }
    function Qy(e, t) {
      e[Wy] = t;
    }
    function uk(e) {
      var t = e[qy];
      return t === void 0 && (t = e[qy] = /* @__PURE__ */ new Set()), t;
    }
    var QE = {}, XE = M.ReactDebugCurrentFrame;
    function Fh(e) {
      if (e) {
        var t = e._owner, a = Vi(e.type, e._source, t ? t.type : null);
        XE.setExtraStackFrame(a);
      } else
        XE.setExtraStackFrame(null);
    }
    function oo(e, t, a, i, l) {
      {
        var s = Function.call.bind(rr);
        for (var d in e)
          if (s(e, d)) {
            var v = void 0;
            try {
              if (typeof e[d] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              v = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (Fh(l), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof v), Fh(null)), v instanceof Error && !(v.message in QE) && (QE[v.message] = !0, Fh(l), T("Failed %s type: %s", a, v.message), Fh(null));
          }
      }
    }
    var Xy = [], zh;
    zh = [];
    var Fl = -1;
    function Ou(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Fl < 0) {
        T("Unexpected pop.");
        return;
      }
      t !== zh[Fl] && T("Unexpected Fiber popped."), e.current = Xy[Fl], Xy[Fl] = null, zh[Fl] = null, Fl--;
    }
    function da(e, t, a) {
      Fl++, Xy[Fl] = e.current, zh[Fl] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var di = {};
    Object.freeze(di);
    var zl = Ou(di), Wo = Ou(!1), Jy = di;
    function wf(e, t, a) {
      return a && qo(t) ? Jy : zl.current;
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return di;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var v = rt(e) || "Unknown";
          oo(i, s, "context", v);
        }
        return l && KE(e, t, s), s;
      }
    }
    function Ph() {
      return Wo.current;
    }
    function qo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Hh(e) {
      fa(Wo, e), fa(zl, e);
    }
    function Zy(e) {
      fa(Wo, e), fa(zl, e);
    }
    function JE(e, t, a) {
      {
        if (zl.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(zl, t, e), da(Wo, a, e);
      }
    }
    function ZE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = rt(e) || "Unknown";
            Ky[s] || (Ky[s] = !0, T("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var v in d)
          if (!(v in l))
            throw new Error((rt(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var h = rt(e) || "Unknown";
          oo(l, d, "child context", h);
        }
        return gt({}, a, d);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return Jy = zl.current, da(zl, a, e), da(Wo, Wo.current, e), !0;
      }
    }
    function eC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = ZE(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = l, fa(Wo, e), fa(zl, e), da(zl, l, e), da(Wo, a, e);
        } else
          fa(Wo, e), da(Wo, a, e);
      }
    }
    function sk(e) {
      {
        if (!yl(e) || e.tag !== fe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case oe:
              return t.stateNode.context;
            case fe: {
              var a = t.type;
              if (qo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Nu = 0, Bh = 1, Pl = null, eg = !1, tg = !1;
    function tC(e) {
      Pl === null ? Pl = [e] : Pl.push(e);
    }
    function ck(e) {
      eg = !0, tC(e);
    }
    function nC() {
      eg && Mu();
    }
    function Mu() {
      if (!tg && Pl !== null) {
        tg = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Pl;
          for (Gn(Fr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Pl = null, eg = !1;
        } catch (s) {
          throw Pl !== null && (Pl = Pl.slice(e + 1)), yd(cs, Mu), s;
        } finally {
          Gn(t), tg = !1;
        }
      }
      return null;
    }
    var Rf = [], xf = 0, $h = null, Vh = 0, Ii = [], Fi = 0, Ys = null, Hl = 1, jl = "";
    function fk(e) {
      return qs(), (e.flags & Ri) !== Be;
    }
    function dk(e) {
      return qs(), Vh;
    }
    function pk() {
      var e = jl, t = Hl, a = t & ~vk(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      qs(), Rf[xf++] = Vh, Rf[xf++] = $h, $h = e, Vh = t;
    }
    function rC(e, t, a) {
      qs(), Ii[Fi++] = Hl, Ii[Fi++] = jl, Ii[Fi++] = Ys, Ys = e;
      var i = Hl, l = jl, s = Gh(i) - 1, d = i & ~(1 << s), v = a + 1, h = Gh(t) + s;
      if (h > 30) {
        var S = s - s % 5, E = (1 << S) - 1, L = (d & E).toString(32), D = d >> S, z = s - S, j = Gh(t) + z, G = v << z, me = G | D, Ye = L + l;
        Hl = 1 << j | me, jl = Ye;
      } else {
        var ze = v << s, Ft = ze | d, Ot = l;
        Hl = 1 << h | Ft, jl = Ot;
      }
    }
    function ng(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), rC(e, a, i);
      }
    }
    function Gh(e) {
      return 32 - $n(e);
    }
    function vk(e) {
      return 1 << Gh(e) - 1;
    }
    function rg(e) {
      for (; e === $h; )
        $h = Rf[--xf], Rf[xf] = null, Vh = Rf[--xf], Rf[xf] = null;
      for (; e === Ys; )
        Ys = Ii[--Fi], Ii[Fi] = null, jl = Ii[--Fi], Ii[Fi] = null, Hl = Ii[--Fi], Ii[Fi] = null;
    }
    function hk() {
      return qs(), Ys !== null ? {
        id: Hl,
        overflow: jl
      } : null;
    }
    function mk(e, t) {
      qs(), Ii[Fi++] = Hl, Ii[Fi++] = jl, Ii[Fi++] = Ys, Hl = t.id, jl = t.overflow, Ys = e;
    }
    function qs() {
      Br() || T("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, zi = null, lo = !1, Qs = !1, Au = null;
    function yk() {
      lo && T("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aC() {
      Qs = !0;
    }
    function gk() {
      return Qs;
    }
    function Sk(e) {
      var t = e.stateNode.containerInfo;
      return zi = Fw(t), jr = e, lo = !0, Au = null, Qs = !1, !0;
    }
    function Ek(e, t, a) {
      return zi = zw(t), jr = e, lo = !0, Au = null, Qs = !1, a !== null && mk(e, a), !0;
    }
    function iC(e, t) {
      switch (e.tag) {
        case oe: {
          qw(e.stateNode.containerInfo, t);
          break;
        }
        case ne: {
          var a = (e.mode & wt) !== $e;
          Xw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qw(i.dehydrated, t);
          break;
        }
      }
    }
    function oC(e, t) {
      iC(e, t);
      var a = wD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ua) : i.push(a);
    }
    function ag(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case oe: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ne:
                var i = t.type;
                t.pendingProps, Kw(a, i);
                break;
              case ke:
                var l = t.pendingProps;
                Jw(a, l);
                break;
            }
            break;
          }
          case ne: {
            var s = e.type, d = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case ne: {
                var h = t.type, S = t.pendingProps, E = (e.mode & wt) !== $e;
                tk(
                  s,
                  d,
                  v,
                  h,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ke: {
                var L = t.pendingProps, D = (e.mode & wt) !== $e;
                nk(
                  s,
                  d,
                  v,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case Pe: {
            var z = e.memoizedState, j = z.dehydrated;
            if (j !== null) switch (t.tag) {
              case ne:
                var G = t.type;
                t.pendingProps, Zw(j, G);
                break;
              case ke:
                var me = t.pendingProps;
                ek(j, me);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function lC(e, t) {
      t.flags = t.flags & ~na | Tn, ag(e, t);
    }
    function uC(e, t) {
      switch (e.tag) {
        case ne: {
          var a = e.type;
          e.pendingProps;
          var i = Ow(t, a);
          return i !== null ? (e.stateNode = i, jr = e, zi = Iw(i), !0) : !1;
        }
        case ke: {
          var l = e.pendingProps, s = Nw(t, l);
          return s !== null ? (e.stateNode = s, jr = e, zi = null, !0) : !1;
        }
        case Pe: {
          var d = Mw(t);
          if (d !== null) {
            var v = {
              dehydrated: d,
              treeContext: hk(),
              retryLane: oa
            };
            e.memoizedState = v;
            var h = kD(d);
            return h.return = e, e.child = h, jr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & wt) !== $e && (e.flags & He) === Be;
    }
    function og(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lg(e) {
      if (lo) {
        var t = zi;
        if (!t) {
          ig(e) && (ag(jr, e), og()), lC(jr, e), lo = !1, jr = e;
          return;
        }
        var a = t;
        if (!uC(e, t)) {
          ig(e) && (ag(jr, e), og()), t = fp(a);
          var i = jr;
          if (!t || !uC(e, t)) {
            lC(jr, e), lo = !1, jr = e;
            return;
          }
          oC(i, a);
        }
      }
    }
    function Ck(e, t, a) {
      var i = e.stateNode, l = !Qs, s = Pw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Tk(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Hw(t, a, e);
      if (i) {
        var l = jr;
        if (l !== null)
          switch (l.tag) {
            case oe: {
              var s = l.stateNode.containerInfo, d = (l.mode & wt) !== $e;
              Yw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case ne: {
              var v = l.type, h = l.memoizedProps, S = l.stateNode, E = (l.mode & wt) !== $e;
              Ww(
                v,
                h,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function bk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      jw(a, e);
    }
    function wk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Bw(a);
    }
    function sC(e) {
      for (var t = e.return; t !== null && t.tag !== ne && t.tag !== oe && t.tag !== Pe; )
        t = t.return;
      jr = t;
    }
    function Yh(e) {
      if (e !== jr)
        return !1;
      if (!lo)
        return sC(e), lo = !0, !1;
      if (e.tag !== oe && (e.tag !== ne || Gw(e.type) && !By(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (ig(e))
            cC(e), og();
          else
            for (; t; )
              oC(e, t), t = fp(t);
      }
      return sC(e), e.tag === Pe ? zi = wk(e) : zi = jr ? fp(e.stateNode) : null, !0;
    }
    function kk() {
      return lo && zi !== null;
    }
    function cC(e) {
      for (var t = zi; t; )
        iC(e, t), t = fp(t);
    }
    function Df() {
      jr = null, zi = null, lo = !1, Qs = !1;
    }
    function fC() {
      Au !== null && (ab(Au), Au = null);
    }
    function Br() {
      return lo;
    }
    function ug(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    var Rk = M.ReactCurrentBatchConfig, xk = null;
    function Dk() {
      return Rk.transition;
    }
    var uo = {
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
      var _k = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rn && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, hp = [], mp = [], yp = [], gp = [], Sp = [], Ep = [], Ks = /* @__PURE__ */ new Set();
      uo.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillMount == "function" && mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && gp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillUpdate == "function" && Ep.push(e));
      }, uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(D) {
          e.add(rt(D) || "Component"), Ks.add(D.type);
        }), hp = []);
        var t = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(D) {
          t.add(rt(D) || "Component"), Ks.add(D.type);
        }), mp = []);
        var a = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(D) {
          a.add(rt(D) || "Component"), Ks.add(D.type);
        }), yp = []);
        var i = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(D) {
          i.add(rt(D) || "Component"), Ks.add(D.type);
        }), gp = []);
        var l = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(D) {
          l.add(rt(D) || "Component"), Ks.add(D.type);
        }), Sp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ep.length > 0 && (Ep.forEach(function(D) {
          s.add(rt(D) || "Component"), Ks.add(D.type);
        }), Ep = []), t.size > 0) {
          var d = Xs(t);
          T(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var v = Xs(i);
          T(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var h = Xs(s);
          T(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var S = Xs(e);
          kt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var E = Xs(a);
          kt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (l.size > 0) {
          var L = Xs(l);
          kt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var Wh = /* @__PURE__ */ new Map(), dC = /* @__PURE__ */ new Set();
      uo.recordLegacyContextWarning = function(e, t) {
        var a = _k(e);
        if (a === null) {
          T("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dC.has(e.type)) {
          var i = Wh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Wh.set(a, i)), i.push(e));
        }
      }, uo.flushLegacyContextWarning = function() {
        Wh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(rt(s) || "Component"), dC.add(s.type);
            });
            var l = Xs(i);
            try {
              en(a), T(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              pn();
            }
          }
        });
      }, uo.discardPendingWarnings = function() {
        hp = [], mp = [], yp = [], gp = [], Sp = [], Ep = [], Wh = /* @__PURE__ */ new Map();
      };
    }
    var sg, cg, fg, dg, pg, pC = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, pC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = rt(t) || "Component";
        dg[a] || (dg[a] = !0, T('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Lk(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Cp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rn || W) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== fe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Lk(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = rt(e) || "Component";
          fg[l] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), fg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var v = s;
            if (v.tag !== fe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = v.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = d;
          ma(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var E = function(L) {
            var D = h.refs;
            L === null ? delete D[S] : D[S] = L;
          };
          return E._stringRef = S, E;
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
    function qh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = rt(e) || "Component";
        if (pg[t])
          return;
        pg[t] = !0, T("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function vC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function hC(e) {
      function t(A, Y) {
        if (e) {
          var U = A.deletions;
          U === null ? (A.deletions = [Y], A.flags |= Ua) : U.push(Y);
        }
      }
      function a(A, Y) {
        if (!e)
          return null;
        for (var U = Y; U !== null; )
          t(A, U), U = U.sibling;
        return null;
      }
      function i(A, Y) {
        for (var U = /* @__PURE__ */ new Map(), te = Y; te !== null; )
          te.key !== null ? U.set(te.key, te) : U.set(te.index, te), te = te.sibling;
        return U;
      }
      function l(A, Y) {
        var U = oc(A, Y);
        return U.index = 0, U.sibling = null, U;
      }
      function s(A, Y, U) {
        if (A.index = U, !e)
          return A.flags |= Ri, Y;
        var te = A.alternate;
        if (te !== null) {
          var Te = te.index;
          return Te < Y ? (A.flags |= Tn, Y) : Te;
        } else
          return A.flags |= Tn, Y;
      }
      function d(A) {
        return e && A.alternate === null && (A.flags |= Tn), A;
      }
      function v(A, Y, U, te) {
        if (Y === null || Y.tag !== ke) {
          var Te = uE(U, A.mode, te);
          return Te.return = A, Te;
        } else {
          var Se = l(Y, U);
          return Se.return = A, Se;
        }
      }
      function h(A, Y, U, te) {
        var Te = U.type;
        if (Te === mi)
          return E(A, Y, U.props.children, te, U.key);
        if (Y !== null && (Y.elementType === Te || // Keep this check inline so it only runs on the false path:
        Eb(Y, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === it && vC(Te) === Y.type)) {
          var Se = l(Y, U.props);
          return Se.ref = Cp(A, Y, U), Se.return = A, Se._debugSource = U._source, Se._debugOwner = U._owner, Se;
        }
        var tt = lE(U, A.mode, te);
        return tt.ref = Cp(A, Y, U), tt.return = A, tt;
      }
      function S(A, Y, U, te) {
        if (Y === null || Y.tag !== we || Y.stateNode.containerInfo !== U.containerInfo || Y.stateNode.implementation !== U.implementation) {
          var Te = sE(U, A.mode, te);
          return Te.return = A, Te;
        } else {
          var Se = l(Y, U.children || []);
          return Se.return = A, Se;
        }
      }
      function E(A, Y, U, te, Te) {
        if (Y === null || Y.tag !== Ke) {
          var Se = Gu(U, A.mode, te, Te);
          return Se.return = A, Se;
        } else {
          var tt = l(Y, U);
          return tt.return = A, tt;
        }
      }
      function L(A, Y, U) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var te = uE("" + Y, A.mode, U);
          return te.return = A, te;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Mr: {
              var Te = lE(Y, A.mode, U);
              return Te.ref = Cp(A, null, Y), Te.return = A, Te;
            }
            case cr: {
              var Se = sE(Y, A.mode, U);
              return Se.return = A, Se;
            }
            case it: {
              var tt = Y._payload, ut = Y._init;
              return L(A, ut(tt), U);
            }
          }
          if (Tt(Y) || pt(Y)) {
            var on = Gu(Y, A.mode, U, null);
            return on.return = A, on;
          }
          qh(A, Y);
        }
        return typeof Y == "function" && Qh(A), null;
      }
      function D(A, Y, U, te) {
        var Te = Y !== null ? Y.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return Te !== null ? null : v(A, Y, "" + U, te);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case Mr:
              return U.key === Te ? h(A, Y, U, te) : null;
            case cr:
              return U.key === Te ? S(A, Y, U, te) : null;
            case it: {
              var Se = U._payload, tt = U._init;
              return D(A, Y, tt(Se), te);
            }
          }
          if (Tt(U) || pt(U))
            return Te !== null ? null : E(A, Y, U, te, null);
          qh(A, U);
        }
        return typeof U == "function" && Qh(A), null;
      }
      function z(A, Y, U, te, Te) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var Se = A.get(U) || null;
          return v(Y, Se, "" + te, Te);
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Mr: {
              var tt = A.get(te.key === null ? U : te.key) || null;
              return h(Y, tt, te, Te);
            }
            case cr: {
              var ut = A.get(te.key === null ? U : te.key) || null;
              return S(Y, ut, te, Te);
            }
            case it:
              var on = te._payload, Qt = te._init;
              return z(A, Y, U, Qt(on), Te);
          }
          if (Tt(te) || pt(te)) {
            var nr = A.get(U) || null;
            return E(Y, nr, te, Te, null);
          }
          qh(Y, te);
        }
        return typeof te == "function" && Qh(Y), null;
      }
      function j(A, Y, U) {
        {
          if (typeof A != "object" || A === null)
            return Y;
          switch (A.$$typeof) {
            case Mr:
            case cr:
              pC(A, U);
              var te = A.key;
              if (typeof te != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(te);
                break;
              }
              if (!Y.has(te)) {
                Y.add(te);
                break;
              }
              T("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", te);
              break;
            case it:
              var Te = A._payload, Se = A._init;
              j(Se(Te), Y, U);
              break;
          }
        }
        return Y;
      }
      function G(A, Y, U, te) {
        for (var Te = null, Se = 0; Se < U.length; Se++) {
          var tt = U[Se];
          Te = j(tt, Te, A);
        }
        for (var ut = null, on = null, Qt = Y, nr = 0, Xt = 0, qn = null; Qt !== null && Xt < U.length; Xt++) {
          Qt.index > Xt ? (qn = Qt, Qt = null) : qn = Qt.sibling;
          var va = D(A, Qt, U[Xt], te);
          if (va === null) {
            Qt === null && (Qt = qn);
            break;
          }
          e && Qt && va.alternate === null && t(A, Qt), nr = s(va, nr, Xt), on === null ? ut = va : on.sibling = va, on = va, Qt = qn;
        }
        if (Xt === U.length) {
          if (a(A, Qt), Br()) {
            var Qr = Xt;
            Ws(A, Qr);
          }
          return ut;
        }
        if (Qt === null) {
          for (; Xt < U.length; Xt++) {
            var vi = L(A, U[Xt], te);
            vi !== null && (nr = s(vi, nr, Xt), on === null ? ut = vi : on.sibling = vi, on = vi);
          }
          if (Br()) {
            var _a = Xt;
            Ws(A, _a);
          }
          return ut;
        }
        for (var La = i(A, Qt); Xt < U.length; Xt++) {
          var ha = z(La, A, Xt, U[Xt], te);
          ha !== null && (e && ha.alternate !== null && La.delete(ha.key === null ? Xt : ha.key), nr = s(ha, nr, Xt), on === null ? ut = ha : on.sibling = ha, on = ha);
        }
        if (e && La.forEach(function(Wf) {
          return t(A, Wf);
        }), Br()) {
          var ql = Xt;
          Ws(A, ql);
        }
        return ut;
      }
      function me(A, Y, U, te) {
        var Te = pt(U);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (cg || T("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), U.entries === Te && (sg || T("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var Se = Te.call(U);
          if (Se)
            for (var tt = null, ut = Se.next(); !ut.done; ut = Se.next()) {
              var on = ut.value;
              tt = j(on, tt, A);
            }
        }
        var Qt = Te.call(U);
        if (Qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Xt = null, qn = Y, va = 0, Qr = 0, vi = null, _a = Qt.next(); qn !== null && !_a.done; Qr++, _a = Qt.next()) {
          qn.index > Qr ? (vi = qn, qn = null) : vi = qn.sibling;
          var La = D(A, qn, _a.value, te);
          if (La === null) {
            qn === null && (qn = vi);
            break;
          }
          e && qn && La.alternate === null && t(A, qn), va = s(La, va, Qr), Xt === null ? nr = La : Xt.sibling = La, Xt = La, qn = vi;
        }
        if (_a.done) {
          if (a(A, qn), Br()) {
            var ha = Qr;
            Ws(A, ha);
          }
          return nr;
        }
        if (qn === null) {
          for (; !_a.done; Qr++, _a = Qt.next()) {
            var ql = L(A, _a.value, te);
            ql !== null && (va = s(ql, va, Qr), Xt === null ? nr = ql : Xt.sibling = ql, Xt = ql);
          }
          if (Br()) {
            var Wf = Qr;
            Ws(A, Wf);
          }
          return nr;
        }
        for (var Zp = i(A, qn); !_a.done; Qr++, _a = Qt.next()) {
          var nl = z(Zp, A, Qr, _a.value, te);
          nl !== null && (e && nl.alternate !== null && Zp.delete(nl.key === null ? Qr : nl.key), va = s(nl, va, Qr), Xt === null ? nr = nl : Xt.sibling = nl, Xt = nl);
        }
        if (e && Zp.forEach(function(n1) {
          return t(A, n1);
        }), Br()) {
          var t1 = Qr;
          Ws(A, t1);
        }
        return nr;
      }
      function Ye(A, Y, U, te) {
        if (Y !== null && Y.tag === ke) {
          a(A, Y.sibling);
          var Te = l(Y, U);
          return Te.return = A, Te;
        }
        a(A, Y);
        var Se = uE(U, A.mode, te);
        return Se.return = A, Se;
      }
      function ze(A, Y, U, te) {
        for (var Te = U.key, Se = Y; Se !== null; ) {
          if (Se.key === Te) {
            var tt = U.type;
            if (tt === mi) {
              if (Se.tag === Ke) {
                a(A, Se.sibling);
                var ut = l(Se, U.props.children);
                return ut.return = A, ut._debugSource = U._source, ut._debugOwner = U._owner, ut;
              }
            } else if (Se.elementType === tt || // Keep this check inline so it only runs on the false path:
            Eb(Se, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof tt == "object" && tt !== null && tt.$$typeof === it && vC(tt) === Se.type) {
              a(A, Se.sibling);
              var on = l(Se, U.props);
              return on.ref = Cp(A, Se, U), on.return = A, on._debugSource = U._source, on._debugOwner = U._owner, on;
            }
            a(A, Se);
            break;
          } else
            t(A, Se);
          Se = Se.sibling;
        }
        if (U.type === mi) {
          var Qt = Gu(U.props.children, A.mode, te, U.key);
          return Qt.return = A, Qt;
        } else {
          var nr = lE(U, A.mode, te);
          return nr.ref = Cp(A, Y, U), nr.return = A, nr;
        }
      }
      function Ft(A, Y, U, te) {
        for (var Te = U.key, Se = Y; Se !== null; ) {
          if (Se.key === Te)
            if (Se.tag === we && Se.stateNode.containerInfo === U.containerInfo && Se.stateNode.implementation === U.implementation) {
              a(A, Se.sibling);
              var tt = l(Se, U.children || []);
              return tt.return = A, tt;
            } else {
              a(A, Se);
              break;
            }
          else
            t(A, Se);
          Se = Se.sibling;
        }
        var ut = sE(U, A.mode, te);
        return ut.return = A, ut;
      }
      function Ot(A, Y, U, te) {
        var Te = typeof U == "object" && U !== null && U.type === mi && U.key === null;
        if (Te && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case Mr:
              return d(ze(A, Y, U, te));
            case cr:
              return d(Ft(A, Y, U, te));
            case it:
              var Se = U._payload, tt = U._init;
              return Ot(A, Y, tt(Se), te);
          }
          if (Tt(U))
            return G(A, Y, U, te);
          if (pt(U))
            return me(A, Y, U, te);
          qh(A, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? d(Ye(A, Y, "" + U, te)) : (typeof U == "function" && Qh(A), a(A, Y));
      }
      return Ot;
    }
    var _f = hC(!0), mC = hC(!1);
    function Ok(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nk(e, t) {
      for (var a = e.child; a !== null; )
        SD(a, t), a = a.sibling;
    }
    var vg = Ou(null), hg;
    hg = {};
    var Xh = null, Lf = null, mg = null, Kh = !1;
    function Jh() {
      Xh = null, Lf = null, mg = null, Kh = !1;
    }
    function yC() {
      Kh = !0;
    }
    function gC() {
      Kh = !1;
    }
    function SC(e, t, a) {
      da(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hg && T("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hg;
    }
    function yg(e, t) {
      var a = vg.current;
      fa(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ll(i.childLanes, t) ? l !== null && !Ll(l.childLanes, t) && (l.childLanes = yt(l.childLanes, t)) : (i.childLanes = yt(i.childLanes, t), l !== null && (l.childLanes = yt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && T("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mk(e, t, a) {
      Ak(e, t, a);
    }
    function Ak(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === fe) {
                var v = ws(a), h = Bl(un, v);
                h.tag = em;
                var S = i.updateQueue;
                if (S !== null) {
                  var E = S.shared, L = E.pending;
                  L === null ? h.next = h : (h.next = L.next, L.next = h), E.pending = h;
                }
              }
              i.lanes = yt(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = yt(D.lanes, a)), gg(i.return, a, e), s.lanes = yt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === Fe)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = yt(z.lanes, a);
          var j = z.alternate;
          j !== null && (j.lanes = yt(j.lanes, a)), gg(z, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var G = l.sibling;
            if (G !== null) {
              G.return = l.return, l = G;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Of(e, t) {
      Xh = e, Lf = null, mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function ur(e) {
      Kh && T("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Xh.dependencies = {
            lanes: X,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Js = null;
    function Sg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function Uk() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function EC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Sg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Zh(e, i);
    }
    function Ik(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Sg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Fk(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Sg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Zh(e, i);
    }
    function Ga(e, t) {
      return Zh(e, t);
    }
    var zk = Zh;
    function Zh(e, t) {
      e.lanes = yt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = yt(a.lanes, t)), a === null && (e.flags & (Tn | na)) !== Be && mb(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = yt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = yt(a.childLanes, t) : (l.flags & (Tn | na)) !== Be && mb(e), i = l, l = l.return;
      if (i.tag === oe) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var CC = 0, TC = 1, em = 2, Eg = 3, tm = !1, Cg, nm;
    Cg = !1, nm = null;
    function Tg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: X
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function bC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Bl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: CC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (nm === l && !Cg && (T("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cg = !0), Ix()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, zk(e, a);
      } else
        return Fk(e, l, t, a);
    }
    function rm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Ad(a)) {
          var s = l.lanes;
          s = Id(s, e.pendingLanes);
          var d = yt(s, a);
          l.lanes = d, nf(e, d);
        }
      }
    }
    function bg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var h = v;
            do {
              var S = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              d === null ? s = d = S : (d.next = S, d = S), h = h.next;
            } while (h !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function Pk(e, t, a, i, l, s) {
      switch (a.tag) {
        case TC: {
          var d = a.payload;
          if (typeof d == "function") {
            yC();
            var v = d.call(s, i, l);
            {
              if (e.mode & rn) {
                bn(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  bn(!1);
                }
              }
              gC();
            }
            return v;
          }
          return d;
        }
        case Eg:
          e.flags = e.flags & ~ar | He;
        // Intentional fallthrough
        case CC: {
          var h = a.payload, S;
          if (typeof h == "function") {
            yC(), S = h.call(s, i, l);
            {
              if (e.mode & rn) {
                bn(!0);
                try {
                  h.call(s, i, l);
                } finally {
                  bn(!1);
                }
              }
              gC();
            }
          } else
            S = h;
          return S == null ? i : gt({}, i, S);
        }
        case em:
          return tm = !0, i;
      }
      return i;
    }
    function am(e, t, a, i) {
      var l = e.updateQueue;
      tm = !1, nm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, v = l.shared.pending;
      if (v !== null) {
        l.shared.pending = null;
        var h = v, S = h.next;
        h.next = null, d === null ? s = S : d.next = S, d = h;
        var E = e.alternate;
        if (E !== null) {
          var L = E.updateQueue, D = L.lastBaseUpdate;
          D !== d && (D === null ? L.firstBaseUpdate = S : D.next = S, L.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var z = l.baseState, j = X, G = null, me = null, Ye = null, ze = s;
        do {
          var Ft = ze.lane, Ot = ze.eventTime;
          if (Ll(i, Ft)) {
            if (Ye !== null) {
              var Y = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              Ye = Ye.next = Y;
            }
            z = Pk(e, l, ze, z, t, a);
            var U = ze.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== jt) {
              e.flags |= fn;
              var te = l.effects;
              te === null ? l.effects = [ze] : te.push(ze);
            }
          } else {
            var A = {
              eventTime: Ot,
              lane: Ft,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            Ye === null ? (me = Ye = A, G = z) : Ye = Ye.next = A, j = yt(j, Ft);
          }
          if (ze = ze.next, ze === null) {
            if (v = l.shared.pending, v === null)
              break;
            var Te = v, Se = Te.next;
            Te.next = null, ze = Se, l.lastBaseUpdate = Te, l.shared.pending = null;
          }
        } while (!0);
        Ye === null && (G = z), l.baseState = G, l.firstBaseUpdate = me, l.lastBaseUpdate = Ye;
        var tt = l.shared.interleaved;
        if (tt !== null) {
          var ut = tt;
          do
            j = yt(j, ut.lane), ut = ut.next;
          while (ut !== tt);
        } else s === null && (l.shared.lanes = X);
        qp(j), e.lanes = j, e.memoizedState = z;
      }
      nm = null;
    }
    function Hk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function wC() {
      tm = !1;
    }
    function im() {
      return tm;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Hk(d, a));
        }
    }
    var Tp = {}, Iu = Ou(Tp), bp = Ou(Tp), om = Ou(Tp);
    function lm(e) {
      if (e === Tp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = lm(om.current);
      return e;
    }
    function wg(e, t) {
      da(om, t, e), da(bp, e, e), da(Iu, Tp, e);
      var a = rw(t);
      fa(Iu, e), da(Iu, a, e);
    }
    function Nf(e) {
      fa(Iu, e), fa(bp, e), fa(om, e);
    }
    function kg() {
      var e = lm(Iu.current);
      return e;
    }
    function xC(e) {
      lm(om.current);
      var t = lm(Iu.current), a = aw(t, e.type);
      t !== a && (da(bp, e, e), da(Iu, a, e));
    }
    function Rg(e) {
      bp.current === e && (fa(Iu, e), fa(bp, e));
    }
    var jk = 0, DC = 1, _C = 1, wp = 2, so = Ou(jk);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & DC;
    }
    function Dg(e, t) {
      return e & DC | t;
    }
    function Bk(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      da(so, t, e);
    }
    function Af(e) {
      fa(so, e);
    }
    function $k(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function um(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YE(i) || Yy(i))
              return t;
          }
        } else if (t.tag === Ne && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & He) !== Be;
          if (l)
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
    var Ya = (
      /*   */
      0
    ), yr = (
      /* */
      1
    ), Qo = (
      /*  */
      2
    ), gr = (
      /*    */
      4
    ), $r = (
      /*   */
      8
    ), _g = [];
    function Lg() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function Vk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ce = M.ReactCurrentDispatcher, kp = M.ReactCurrentBatchConfig, Og, Uf;
    Og = /* @__PURE__ */ new Set();
    var Zs = X, an = null, Sr = null, Er = null, sm = !1, Rp = !1, xp = 0, Gk = 0, Yk = 25, q = null, Pi = null, zu = -1, Ng = !1;
    function Jt() {
      {
        var e = q;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function se() {
      {
        var e = q;
        Pi !== null && (zu++, Pi[zu] !== e && Wk(e));
      }
    }
    function If(e) {
      e != null && !Tt(e) && T("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", q, typeof e);
    }
    function Wk(e) {
      {
        var t = rt(an);
        if (!Og.has(t) && (Og.add(t), Pi !== null)) {
          for (var a = "", i = 30, l = 0; l <= zu; l++) {
            for (var s = Pi[l], d = l === zu ? e : s, v = l + 1 + ". " + s; v.length < i; )
              v += " ";
            v += d + `
`, a += v;
          }
          T(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mg(e, t) {
      if (Ng)
        return !1;
      if (t === null)
        return T("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", q), !1;
      e.length !== t.length && T(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Z(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, l, s) {
      Zs = s, an = t, Pi = e !== null ? e._debugHookTypes : null, zu = -1, Ng = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = X, e !== null && e.memoizedState !== null ? Ce.current = KC : Pi !== null ? Ce.current = XC : Ce.current = QC;
      var d = a(i, l);
      if (Rp) {
        var v = 0;
        do {
          if (Rp = !1, xp = 0, v >= Yk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, Ng = !1, Sr = null, Er = null, t.updateQueue = null, zu = -1, Ce.current = JC, d = a(i, l);
        } while (Rp);
      }
      Ce.current = Tm, t._debugHookTypes = Pi;
      var h = Sr !== null && Sr.next !== null;
      if (Zs = X, an = null, Sr = null, Er = null, q = null, Pi = null, zu = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & wt) !== $e && T("Internal React error: Expected static flag was missing. Please notify the React team."), sm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function zf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function LC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Wt) !== $e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ks(e.lanes, a);
    }
    function OC() {
      if (Ce.current = Tm, sm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sm = !1;
      }
      Zs = X, an = null, Sr = null, Er = null, Pi = null, zu = -1, q = null, VC = !1, Rp = !1, xp = 0;
    }
    function Xo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Er === null ? an.memoizedState = Er = e : Er = Er.next = e, Er;
    }
    function Hi() {
      var e;
      if (Sr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Sr.next;
      var a;
      if (Er === null ? a = an.memoizedState : a = Er.next, a !== null)
        Er = a, a = Er.next, Sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Sr = e;
        var i = {
          memoizedState: Sr.memoizedState,
          baseState: Sr.baseState,
          baseQueue: Sr.baseQueue,
          queue: Sr.queue,
          next: null
        };
        Er === null ? an.memoizedState = Er = i : Er = Er.next = i;
      }
      return Er;
    }
    function NC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ag(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Xo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: X,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = Kk.bind(null, an, s);
      return [i.memoizedState, d];
    }
    function Ig(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Sr, d = s.baseQueue, v = l.pending;
      if (v !== null) {
        if (d !== null) {
          var h = d.next, S = v.next;
          d.next = S, v.next = h;
        }
        s.baseQueue !== d && T("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = v, l.pending = null;
      }
      if (d !== null) {
        var E = d.next, L = s.baseState, D = null, z = null, j = null, G = E;
        do {
          var me = G.lane;
          if (Ll(Zs, me)) {
            if (j !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              j = j.next = ze;
            }
            if (G.hasEagerState)
              L = G.eagerState;
            else {
              var Ft = G.action;
              L = e(L, Ft);
            }
          } else {
            var Ye = {
              lane: me,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            j === null ? (z = j = Ye, D = L) : j = j.next = Ye, an.lanes = yt(an.lanes, me), qp(me);
          }
          G = G.next;
        } while (G !== null && G !== E);
        j === null ? D = L : j.next = z, Z(L, i.memoizedState) || Ip(), i.memoizedState = L, i.baseState = D, i.baseQueue = j, l.lastRenderedState = L;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var A = Ot;
        do {
          var Y = A.lane;
          an.lanes = yt(an.lanes, Y), qp(Y), A = A.next;
        } while (A !== Ot);
      } else d === null && (l.lanes = X);
      var U = l.dispatch;
      return [i.memoizedState, U];
    }
    function Fg(e, t, a) {
      var i = Hi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, v = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var h = d.next, S = h;
        do {
          var E = S.action;
          v = e(v, E), S = S.next;
        } while (S !== h);
        Z(v, i.memoizedState) || Ip(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), l.lastRenderedState = v;
      }
      return [v, s];
    }
    function M1(e, t, a) {
    }
    function A1(e, t, a) {
    }
    function zg(e, t, a) {
      var i = an, l = Xo(), s, d = Br();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Uf || s !== a() && (T("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      } else {
        if (s = t(), !Uf) {
          var v = t();
          Z(s, v) || (T("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
        }
        var h = jm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(h, Zs) || MC(i, t, s);
      }
      l.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return l.queue = S, vm(UC.bind(null, i, S, e), [e]), i.flags |= ta, Dp(yr | $r, AC.bind(null, i, S, s, t), void 0, null), s;
    }
    function cm(e, t, a) {
      var i = an, l = Hi(), s = t();
      if (!Uf) {
        var d = t();
        Z(s, d) || (T("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      }
      var v = l.memoizedState, h = !Z(v, s);
      h && (l.memoizedState = s, Ip());
      var S = l.queue;
      if (Lp(UC.bind(null, i, S, e), [e]), S.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Er !== null && Er.memoizedState.tag & yr) {
        i.flags |= ta, Dp(yr | $r, AC.bind(null, i, S, s, t), void 0, null);
        var E = jm();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ef(E, Zs) || MC(i, t, s);
      }
      return s;
    }
    function MC(e, t, a) {
      e.flags |= hu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = NC(), an.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function AC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, IC(t) && FC(e);
    }
    function UC(e, t, a) {
      var i = function() {
        IC(t) && FC(e);
      };
      return a(i);
    }
    function IC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Z(a, i);
      } catch {
        return !0;
      }
    }
    function FC(e) {
      var t = Ga(e, et);
      t !== null && wr(t, e, et, un);
    }
    function fm(e) {
      var t = Xo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: X,
        dispatch: null,
        lastRenderedReducer: Ag,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jk.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function Pg(e) {
      return Ig(Ag);
    }
    function Hg(e) {
      return Fg(Ag);
    }
    function Dp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = NC(), an.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var v = d.next;
          d.next = l, l.next = v, s.lastEffect = l;
        }
      }
      return l;
    }
    function jg(e) {
      var t = Xo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function dm(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var l = Xo(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = Dp(yr | t, a, void 0, s);
    }
    function pm(e, t, a, i) {
      var l = Hi(), s = i === void 0 ? null : i, d = void 0;
      if (Sr !== null) {
        var v = Sr.memoizedState;
        if (d = v.destroy, s !== null) {
          var h = v.deps;
          if (Mg(s, h)) {
            l.memoizedState = Dp(t, a, d, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Dp(yr | t, a, d, s);
    }
    function vm(e, t) {
      return (an.mode & Wt) !== $e ? _p(xi | ta | xc, $r, e, t) : _p(ta | xc, $r, e, t);
    }
    function Lp(e, t) {
      return pm(ta, $r, e, t);
    }
    function Bg(e, t) {
      return _p(At, Qo, e, t);
    }
    function hm(e, t) {
      return pm(At, Qo, e, t);
    }
    function $g(e, t) {
      var a = At;
      return a |= Ki, (an.mode & Wt) !== $e && (a |= Oo), _p(a, gr, e, t);
    }
    function mm(e, t) {
      return pm(At, gr, e, t);
    }
    function zC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || T("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function Vg(e, t, a) {
      typeof t != "function" && T("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = At;
      return l |= Ki, (an.mode & Wt) !== $e && (l |= Oo), _p(l, gr, zC.bind(null, t, e), i);
    }
    function ym(e, t, a) {
      typeof t != "function" && T("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return pm(At, gr, zC.bind(null, t, e), i);
    }
    function qk(e, t) {
    }
    var gm = qk;
    function Gg(e, t) {
      var a = Xo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Sm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Mg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Yg(e, t) {
      var a = Xo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Em(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Mg(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function Wg(e) {
      var t = Xo();
      return t.memoizedState = e, e;
    }
    function PC(e) {
      var t = Hi(), a = Sr, i = a.memoizedState;
      return jC(t, i, e);
    }
    function HC(e) {
      var t = Hi();
      if (Sr === null)
        return t.memoizedState = e, e;
      var a = Sr.memoizedState;
      return jC(t, a, e);
    }
    function jC(e, t, a) {
      var i = !Nd(Zs);
      if (i) {
        if (!Z(a, t)) {
          var l = Ud();
          an.lanes = yt(an.lanes, l), qp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function Qk(e, t, a) {
      var i = Ba();
      Gn(Kv(i, Oi)), e(!0);
      var l = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), kp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function qg() {
      var e = fm(!1), t = e[0], a = e[1], i = Qk.bind(null, a), l = Xo();
      return l.memoizedState = i, [t, i];
    }
    function BC() {
      var e = Pg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function $C() {
      var e = Hg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var VC = !1;
    function Xk() {
      return VC;
    }
    function Qg() {
      var e = Xo(), t = jm(), a = t.identifierPrefix, i;
      if (Br()) {
        var l = pk();
        i = ":" + a + "R" + l;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Gk++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Cm() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function Kk(e, t, a) {
      typeof arguments[3] == "function" && T("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $u(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        YC(t, l);
      else {
        var s = EC(e, t, l, i);
        if (s !== null) {
          var d = Da();
          wr(s, e, i, d), WC(s, t, i);
        }
      }
      qC(e, i);
    }
    function Jk(e, t, a) {
      typeof arguments[3] == "function" && T("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $u(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        YC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === X && (s === null || s.lanes === X)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var v;
            v = Ce.current, Ce.current = co;
            try {
              var h = t.lastRenderedState, S = d(h, a);
              if (l.hasEagerState = !0, l.eagerState = S, Z(S, h)) {
                Ik(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ce.current = v;
            }
          }
        }
        var E = EC(e, t, l, i);
        if (E !== null) {
          var L = Da();
          wr(E, e, i, L), WC(E, t, i);
        }
      }
      qC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function YC(e, t) {
      Rp = sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WC(e, t, a) {
      if (Ad(a)) {
        var i = t.lanes;
        i = Id(i, e.pendingLanes);
        var l = yt(i, a);
        t.lanes = l, nf(e, l);
      }
    }
    function qC(e, t, a) {
      hs(e, t);
    }
    var Tm = {
      readContext: ur,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: re
    }, QC = null, XC = null, KC = null, JC = null, Ko = null, co = null, bm = null;
    {
      var Xg = function() {
        T("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ot = function() {
        T("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", Jt(), If(t), Gg(e, t);
        },
        useContext: function(e) {
          return q = "useContext", Jt(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", Jt(), If(t), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", Jt(), If(a), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", Jt(), If(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", Jt(), If(t), $g(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", Jt(), If(t);
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return Yg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", Jt();
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return Ug(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", Jt(), jg(e);
        },
        useState: function(e) {
          q = "useState", Jt();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return fm(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", Jt(), Wg(e);
        },
        useTransition: function() {
          return q = "useTransition", Jt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", Jt(), zg(e, t, a);
        },
        useId: function() {
          return q = "useId", Jt(), Qg();
        },
        unstable_isNewReconciler: re
      }, XC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), Gg(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), $g(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return Yg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return Ug(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), jg(e);
        },
        useState: function(e) {
          q = "useState", se();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return fm(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), Wg(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), qg();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), zg(e, t, a);
        },
        useId: function() {
          return q = "useId", se(), Qg();
        },
        unstable_isNewReconciler: re
      }, KC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), Sm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), mm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Ce.current;
          Ce.current = co;
          try {
            return Em(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Ig(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), dm();
        },
        useState: function(e) {
          q = "useState", se();
          var t = Ce.current;
          Ce.current = co;
          try {
            return Pg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), gm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), PC(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), BC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), cm(e, t);
        },
        useId: function() {
          return q = "useId", se(), Cm();
        },
        unstable_isNewReconciler: re
      }, JC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", se(), Sm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", se(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", se(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", se(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", se(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", se(), mm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", se();
          var a = Ce.current;
          Ce.current = bm;
          try {
            return Em(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", se();
          var i = Ce.current;
          Ce.current = bm;
          try {
            return Fg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", se(), dm();
        },
        useState: function(e) {
          q = "useState", se();
          var t = Ce.current;
          Ce.current = bm;
          try {
            return Hg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", se(), gm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", se(), HC(e);
        },
        useTransition: function() {
          return q = "useTransition", se(), $C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", se(), cm(e, t);
        },
        useId: function() {
          return q = "useId", se(), Cm();
        },
        unstable_isNewReconciler: re
      }, Ko = {
        readContext: function(e) {
          return Xg(), ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", ot(), Jt(), Gg(e, t);
        },
        useContext: function(e) {
          return q = "useContext", ot(), Jt(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", ot(), Jt(), vm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", ot(), Jt(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", ot(), Jt(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", ot(), Jt(), $g(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", ot(), Jt();
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return Yg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", ot(), Jt();
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return Ug(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", ot(), Jt(), jg(e);
        },
        useState: function(e) {
          q = "useState", ot(), Jt();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return fm(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", ot(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", ot(), Jt(), Wg(e);
        },
        useTransition: function() {
          return q = "useTransition", ot(), Jt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", ot(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", ot(), Jt(), zg(e, t, a);
        },
        useId: function() {
          return q = "useId", ot(), Jt(), Qg();
        },
        unstable_isNewReconciler: re
      }, co = {
        readContext: function(e) {
          return Xg(), ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", ot(), se(), Sm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", ot(), se(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", ot(), se(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", ot(), se(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", ot(), se(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", ot(), se(), mm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", ot(), se();
          var a = Ce.current;
          Ce.current = co;
          try {
            return Em(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", ot(), se();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Ig(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", ot(), se(), dm();
        },
        useState: function(e) {
          q = "useState", ot(), se();
          var t = Ce.current;
          Ce.current = co;
          try {
            return Pg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", ot(), se(), gm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", ot(), se(), PC(e);
        },
        useTransition: function() {
          return q = "useTransition", ot(), se(), BC();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", ot(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", ot(), se(), cm(e, t);
        },
        useId: function() {
          return q = "useId", ot(), se(), Cm();
        },
        unstable_isNewReconciler: re
      }, bm = {
        readContext: function(e) {
          return Xg(), ur(e);
        },
        useCallback: function(e, t) {
          return q = "useCallback", ot(), se(), Sm(e, t);
        },
        useContext: function(e) {
          return q = "useContext", ot(), se(), ur(e);
        },
        useEffect: function(e, t) {
          return q = "useEffect", ot(), se(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return q = "useImperativeHandle", ot(), se(), ym(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return q = "useInsertionEffect", ot(), se(), hm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return q = "useLayoutEffect", ot(), se(), mm(e, t);
        },
        useMemo: function(e, t) {
          q = "useMemo", ot(), se();
          var a = Ce.current;
          Ce.current = co;
          try {
            return Em(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          q = "useReducer", ot(), se();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Fg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return q = "useRef", ot(), se(), dm();
        },
        useState: function(e) {
          q = "useState", ot(), se();
          var t = Ce.current;
          Ce.current = co;
          try {
            return Hg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return q = "useDebugValue", ot(), se(), gm();
        },
        useDeferredValue: function(e) {
          return q = "useDeferredValue", ot(), se(), HC(e);
        },
        useTransition: function() {
          return q = "useTransition", ot(), se(), $C();
        },
        useMutableSource: function(e, t, a) {
          return q = "useMutableSource", ot(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return q = "useSyncExternalStore", ot(), se(), cm(e, t);
        },
        useId: function() {
          return q = "useId", ot(), se(), Cm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Pu = V.unstable_now, ZC = 0, wm = -1, Op = -1, km = -1, Kg = !1, Rm = !1;
    function eT() {
      return Kg;
    }
    function Zk() {
      Rm = !0;
    }
    function eR() {
      Kg = !1, Rm = !1;
    }
    function tR() {
      Kg = Rm, Rm = !1;
    }
    function tT() {
      return ZC;
    }
    function nT() {
      ZC = Pu();
    }
    function Jg(e) {
      Op = Pu(), e.actualStartTime < 0 && (e.actualStartTime = Pu());
    }
    function rT(e) {
      Op = -1;
    }
    function xm(e, t) {
      if (Op >= 0) {
        var a = Pu() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Jo(e) {
      if (wm >= 0) {
        var t = Pu() - wm;
        wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case St:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Zg(e) {
      if (km >= 0) {
        var t = Pu() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case St:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Zo() {
      wm = Pu();
    }
    function eS() {
      km = Pu();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fo(e, t) {
      if (e && e.defaultProps) {
        var a = gt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var nS = {}, rS, aS, iS, oS, lS, aT, Dm, uS, sS, cS, Np;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set();
      var iT = /* @__PURE__ */ new Set();
      Dm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iT.has(a) || (iT.add(a), T("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aT = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          lS.has(a) || (lS.add(a), T("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & rn) {
          bn(!0);
          try {
            s = a(i, l);
          } finally {
            bn(!1);
          }
        }
        aT(t, s);
      }
      var d = s == null ? l : gt({}, l, s);
      if (e.memoizedState = d, e.lanes === X) {
        var v = e.updateQueue;
        v.baseState = d;
      }
    }
    var dS = {
      isMounted: Uv,
      enqueueSetState: function(e, t, a) {
        var i = vu(e), l = Da(), s = $u(i), d = Bl(l, s);
        d.payload = t, a != null && (Dm(a, "setState"), d.callback = a);
        var v = Uu(i, d, s);
        v !== null && (wr(v, i, s, l), rm(v, i, s)), hs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vu(e), l = Da(), s = $u(i), d = Bl(l, s);
        d.tag = TC, d.payload = t, a != null && (Dm(a, "replaceState"), d.callback = a);
        var v = Uu(i, d, s);
        v !== null && (wr(v, i, s, l), rm(v, i, s)), hs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vu(e), i = Da(), l = $u(a), s = Bl(i, l);
        s.tag = em, t != null && (Dm(t, "forceUpdate"), s.callback = t);
        var d = Uu(a, s, l);
        d !== null && (wr(d, a, l, i), rm(d, a, l)), Ac(a, l);
      }
    };
    function oT(e, t, a, i, l, s, d) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var h = v.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & rn) {
            bn(!0);
            try {
              h = v.shouldComponentUpdate(i, s, d);
            } finally {
              bn(!1);
            }
          }
          h === void 0 && T("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, i) || !Le(l, s) : !0;
    }
    function nR(e, t, a) {
      var i = e.stateNode;
      {
        var l = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? T("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : T("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && T("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && T("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && T("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === $e && (Np.add(t), T(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === $e && (Np.add(t), T(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && T("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), T("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && T("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && T("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && T("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && T("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && T("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && T("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && T("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && T("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), T("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && T("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && T("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && T("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var v = i.state;
        v && (typeof v != "object" || Tt(v)) && T("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && T("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function lT(e, t) {
      t.updater = dS, e.stateNode = t, ml(t, e), t._reactInternalInstance = nS;
    }
    function uT(e, t, a) {
      var i = !1, l = di, s = di, d = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === k && d._context === void 0
        );
        if (!v && !cS.has(t)) {
          cS.add(t);
          var h = "";
          d === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? h = " However, it is set to a " + typeof d + "." : d.$$typeof === gi ? h = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", T("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", h);
        }
      }
      if (typeof d == "object" && d !== null)
        s = ur(d);
      else {
        l = wf(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? kf(e, l) : di;
      }
      var E = new t(a, s);
      if (e.mode & rn) {
        bn(!0);
        try {
          E = new t(a, s);
        } finally {
          bn(!1);
        }
      }
      var L = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      lT(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var D = Pt(t) || "Component";
          aS.has(D) || (aS.add(D), T("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, E.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var z = null, j = null, G = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), z !== null || j !== null || G !== null) {
            var me = Pt(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            oS.has(me) || (oS.add(me), T(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, Ye, z !== null ? `
  ` + z : "", j !== null ? `
  ` + j : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return i && KE(e, l, s), E;
    }
    function rR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (T("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", rt(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function sT(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = rt(e) || "Component";
          rS.has(s) || (rS.add(s), T("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      nR(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Tg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ur(s);
      else {
        var d = wf(e, t, !0);
        l.context = kf(e, d);
      }
      {
        if (l.state === a) {
          var v = Pt(t) || "Component";
          uS.has(v) || (uS.add(v), T("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & rn && uo.recordLegacyContextWarning(e, l), uo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (fS(e, t, h, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (rR(e, l), am(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var S = At;
        S |= Ki, (e.mode & Wt) !== $e && (S |= Oo), e.flags |= S;
      }
    }
    function aR(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, v = t.contextType, h = di;
      if (typeof v == "object" && v !== null)
        h = ur(v);
      else {
        var S = wf(e, t, !0);
        h = kf(e, S);
      }
      var E = t.getDerivedStateFromProps, L = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !L && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== h) && sT(e, l, a, h), wC();
      var D = e.memoizedState, z = l.state = D;
      if (am(e, a, l, i), z = e.memoizedState, s === a && D === z && !Ph() && !im()) {
        if (typeof l.componentDidMount == "function") {
          var j = At;
          j |= Ki, (e.mode & Wt) !== $e && (j |= Oo), e.flags |= j;
        }
        return !1;
      }
      typeof E == "function" && (fS(e, t, E, a), z = e.memoizedState);
      var G = im() || oT(e, t, s, a, D, z, h);
      if (G) {
        if (!L && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var me = At;
          me |= Ki, (e.mode & Wt) !== $e && (me |= Oo), e.flags |= me;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ye = At;
          Ye |= Ki, (e.mode & Wt) !== $e && (Ye |= Oo), e.flags |= Ye;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return l.props = a, l.state = z, l.context = h, G;
    }
    function iR(e, t, a, i, l) {
      var s = t.stateNode;
      bC(e, t);
      var d = t.memoizedProps, v = t.type === t.elementType ? d : fo(t.type, d);
      s.props = v;
      var h = t.pendingProps, S = s.context, E = a.contextType, L = di;
      if (typeof E == "object" && E !== null)
        L = ur(E);
      else {
        var D = wf(t, a, !0);
        L = kf(t, D);
      }
      var z = a.getDerivedStateFromProps, j = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== h || S !== L) && sT(t, s, i, L), wC();
      var G = t.memoizedState, me = s.state = G;
      if (am(t, i, s, l), me = t.memoizedState, d === h && G === me && !Ph() && !im() && !Ae)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Zn), !1;
      typeof z == "function" && (fS(t, a, z, i), me = t.memoizedState);
      var Ye = im() || oT(t, a, v, i, G, me, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return Ye ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, L)), typeof s.componentDidUpdate == "function" && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Zn)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Zn), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = L, Ye;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Gi(t),
        digest: null
      };
    }
    function vS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function oR(e, t) {
      return !0;
    }
    function hS(e, t) {
      try {
        var a = oR(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === fe)
            return;
          console.error(i);
        }
        var v = l ? rt(l) : null, h = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === oe)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = rt(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var L = h + `
` + d + `

` + ("" + S);
        console.error(L);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var lR = typeof WeakMap == "function" ? WeakMap : Map;
    function cT(e, t, a) {
      var i = Bl(un, a);
      i.tag = Eg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Zx(l), hS(e, t);
      }, i;
    }
    function mS(e, t, a) {
      var i = Bl(un, a);
      i.tag = Eg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          Cb(e), hS(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        Cb(e), hS(e, t), typeof l != "function" && Kx(this);
        var h = t.value, S = t.stack;
        this.componentDidCatch(h, {
          componentStack: S !== null ? S : ""
        }), typeof l != "function" && (la(e.lanes, et) || T("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", rt(e) || "Unknown"));
      }), i;
    }
    function fT(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new lR(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = eD.bind(null, e, t, a);
        ia && Qp(e, a), t.then(s, s);
      }
    }
    function uR(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function sR(e, t) {
      var a = e.tag;
      if ((e.mode & wt) === $e && (a === ce || a === pe || a === Je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dT(e) {
      var t = e;
      do {
        if (t.tag === Pe && $k(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pT(e, t, a, i, l) {
      if ((e.mode & wt) === $e) {
        if (e === t)
          e.flags |= ar;
        else {
          if (e.flags |= He, a.flags |= Rc, a.flags &= -52805, a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Bt;
            else {
              var d = Bl(un, et);
              d.tag = em, Uu(a, d, et);
            }
          }
          a.lanes = yt(a.lanes, et);
        }
        return e;
      }
      return e.flags |= ar, e.lanes = l, e;
    }
    function cR(e, t, a, i, l) {
      if (a.flags |= ss, ia && Qp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        sR(a), Br() && a.mode & wt && aC();
        var d = dT(t);
        if (d !== null) {
          d.flags &= ~xr, pT(d, t, a, e, l), d.mode & wt && fT(e, s, l), uR(d, e, s);
          return;
        } else {
          if (!$v(l)) {
            fT(e, s, l), QS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Br() && a.mode & wt) {
        aC();
        var h = dT(t);
        if (h !== null) {
          (h.flags & ar) === Be && (h.flags |= xr), pT(h, t, a, e, l), ug(ec(i, a));
          return;
        }
      }
      i = ec(i, a), $x(i);
      var S = t;
      do {
        switch (S.tag) {
          case oe: {
            var E = i;
            S.flags |= ar;
            var L = ws(l);
            S.lanes = yt(S.lanes, L);
            var D = cT(S, E, L);
            bg(S, D);
            return;
          }
          case fe:
            var z = i, j = S.type, G = S.stateNode;
            if ((S.flags & He) === Be && (typeof j.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !db(G))) {
              S.flags |= ar;
              var me = ws(l);
              S.lanes = yt(S.lanes, me);
              var Ye = mS(S, z, me);
              bg(S, Ye);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function fR() {
      return null;
    }
    var Mp = M.ReactCurrentOwner, po = !1, yS, Ap, gS, SS, ES, tc, CS, _m, Up;
    yS = {}, Ap = {}, gS = {}, SS = {}, ES = {}, tc = !1, CS = {}, _m = {}, Up = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = mC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function dR(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function vT(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && oo(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, v = t.ref, h, S;
      Of(t, l), Ta(t);
      {
        if (Mp.current = t, Jn(!0), h = Ff(e, t, d, i, v, l), S = zf(), t.mode & rn) {
          bn(!0);
          try {
            h = Ff(e, t, d, i, v, l), S = zf();
          } finally {
            bn(!1);
          }
        }
        Jn(!1);
      }
      return ba(), e !== null && !po ? (LC(e, t, l), $l(e, t, l)) : (Br() && S && ng(t), t.flags |= li, Ra(e, t, h, l), t.child);
    }
    function hT(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (yD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = Yf(s), t.tag = Je, t.type = d, wS(t, s), mT(e, t, d, i, l);
        }
        {
          var v = s.propTypes;
          if (v && oo(
            v,
            i,
            // Resolved props
            "prop",
            Pt(s)
          ), a.defaultProps !== void 0) {
            var h = Pt(s) || "Unknown";
            Up[h] || (T("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), Up[h] = !0);
          }
        }
        var S = oE(a.type, null, i, t, t.mode, l);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var E = a.type, L = E.propTypes;
        L && oo(
          L,
          i,
          // Resolved props
          "prop",
          Pt(E)
        );
      }
      var D = e.child, z = LS(e, l);
      if (!z) {
        var j = D.memoizedProps, G = a.compare;
        if (G = G !== null ? G : Le, G(j, i) && e.ref === t.ref)
          return $l(e, t, l);
      }
      t.flags |= li;
      var me = oc(D, i);
      return me.ref = t.ref, me.return = t, t.child = me, me;
    }
    function mT(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === it) {
          var d = s, v = d._payload, h = d._init;
          try {
            s = h(v);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && oo(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Le(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (po = !1, t.pendingProps = i = E, LS(e, l))
            (e.flags & Rc) !== Be && (po = !0);
          else return t.lanes = e.lanes, $l(e, t, l);
      }
      return TS(e, t, a, i, l);
    }
    function yT(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ue)
        if ((t.mode & wt) === $e) {
          var d = {
            baseLanes: X,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Bm(t, a);
        } else if (la(a, oa)) {
          var L = {
            baseLanes: X,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var D = s !== null ? s.baseLanes : a;
          Bm(t, D);
        } else {
          var v = null, h;
          if (s !== null) {
            var S = s.baseLanes;
            h = yt(S, a);
          } else
            h = a;
          t.lanes = t.childLanes = oa;
          var E = {
            baseLanes: h,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, Bm(t, h), null;
        }
      else {
        var z;
        s !== null ? (z = yt(s.baseLanes, a), t.memoizedState = null) : z = a, Bm(t, z);
      }
      return Ra(e, t, l, a), t.child;
    }
    function pR(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function vR(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function hR(e, t, a) {
      {
        t.flags |= At;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ra(e, t, s, a), t.child;
    }
    function gT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ln, t.flags |= mu);
    }
    function TS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && oo(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d;
      {
        var v = wf(t, a, !0);
        d = kf(t, v);
      }
      var h, S;
      Of(t, l), Ta(t);
      {
        if (Mp.current = t, Jn(!0), h = Ff(e, t, a, i, d, l), S = zf(), t.mode & rn) {
          bn(!0);
          try {
            h = Ff(e, t, a, i, d, l), S = zf();
          } finally {
            bn(!1);
          }
        }
        Jn(!1);
      }
      return ba(), e !== null && !po ? (LC(e, t, l), $l(e, t, l)) : (Br() && S && ng(t), t.flags |= li, Ra(e, t, h, l), t.child);
    }
    function ST(e, t, a, i, l) {
      {
        switch (ND(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, v = new d(t.memoizedProps, s.context), h = v.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= He, t.flags |= ar;
            var S = new Error("Simulated error coming from DevTools"), E = ws(l);
            t.lanes = yt(t.lanes, E);
            var L = mS(t, ec(S, t), E);
            bg(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && oo(
            D,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var z;
      qo(a) ? (z = !0, jh(t)) : z = !1, Of(t, l);
      var j = t.stateNode, G;
      j === null ? (Om(e, t), uT(t, a, i), pS(t, a, i, l), G = !0) : e === null ? G = aR(t, a, i, l) : G = iR(e, t, a, i, l);
      var me = bS(e, t, a, G, z, l);
      {
        var Ye = t.stateNode;
        G && Ye.props !== i && (tc || T("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", rt(t) || "a component"), tc = !0);
      }
      return me;
    }
    function bS(e, t, a, i, l, s) {
      gT(e, t);
      var d = (t.flags & He) !== Be;
      if (!i && !d)
        return l && eC(t, a, !1), $l(e, t, s);
      var v = t.stateNode;
      Mp.current = t;
      var h;
      if (d && typeof a.getDerivedStateFromError != "function")
        h = null, rT();
      else {
        Ta(t);
        {
          if (Jn(!0), h = v.render(), t.mode & rn) {
            bn(!0);
            try {
              v.render();
            } finally {
              bn(!1);
            }
          }
          Jn(!1);
        }
        ba();
      }
      return t.flags |= li, e !== null && d ? dR(e, t, h, s) : Ra(e, t, h, s), t.memoizedState = v.state, l && eC(t, a, !0), t.child;
    }
    function ET(e) {
      var t = e.stateNode;
      t.pendingContext ? JE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && JE(e, t.context, !1), wg(e, t.containerInfo);
    }
    function mR(e, t, a) {
      if (ET(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      bC(e, t), am(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var v = d.element;
      if (l.isDehydrated) {
        var h = {
          element: v,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, S = t.updateQueue;
        if (S.baseState = h, t.memoizedState = h, t.flags & xr) {
          var E = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CT(e, t, v, a, E);
        } else if (v !== s) {
          var L = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CT(e, t, v, a, L);
        } else {
          Sk(t);
          var D = mC(t, null, v, a);
          t.child = D;
          for (var z = D; z; )
            z.flags = z.flags & ~Tn | na, z = z.sibling;
        }
      } else {
        if (Df(), v === s)
          return $l(e, t, a);
        Ra(e, t, v, a);
      }
      return t.child;
    }
    function CT(e, t, a, i, l) {
      return Df(), ug(l), t.flags |= xr, Ra(e, t, a, i), t.child;
    }
    function yR(e, t, a) {
      xC(t), e === null && lg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, v = By(i, l);
      return v ? d = null : s !== null && By(i, s) && (t.flags |= Ia), gT(e, t), Ra(e, t, d, a), t.child;
    }
    function gR(e, t) {
      return e === null && lg(t), null;
    }
    function SR(e, t, a, i) {
      Om(e, t);
      var l = t.pendingProps, s = a, d = s._payload, v = s._init, h = v(d);
      t.type = h;
      var S = t.tag = gD(h), E = fo(h, l), L;
      switch (S) {
        case ce:
          return wS(t, h), t.type = h = Yf(h), L = TS(null, t, h, E, i), L;
        case fe:
          return t.type = h = eE(h), L = ST(null, t, h, E, i), L;
        case pe:
          return t.type = h = tE(h), L = vT(null, t, h, E, i), L;
        case Et: {
          if (t.type !== t.elementType) {
            var D = h.propTypes;
            D && oo(
              D,
              E,
              // Resolved for outer only
              "prop",
              Pt(h)
            );
          }
          return L = hT(
            null,
            t,
            h,
            fo(h.type, E),
            // The inner type can have defaults too
            i
          ), L;
        }
      }
      var z = "";
      throw h !== null && typeof h == "object" && h.$$typeof === it && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function ER(e, t, a, i, l) {
      Om(e, t), t.tag = fe;
      var s;
      return qo(a) ? (s = !0, jh(t)) : s = !1, Of(t, l), uT(t, a, i), pS(t, a, i, l), bS(null, t, a, !0, s, l);
    }
    function CR(e, t, a, i) {
      Om(e, t);
      var l = t.pendingProps, s;
      {
        var d = wf(t, a, !1);
        s = kf(t, d);
      }
      Of(t, i);
      var v, h;
      Ta(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Pt(a) || "Unknown";
          yS[S] || (T("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), yS[S] = !0);
        }
        t.mode & rn && uo.recordLegacyContextWarning(t, null), Jn(!0), Mp.current = t, v = Ff(null, t, a, l, s, i), h = zf(), Jn(!1);
      }
      if (ba(), t.flags |= li, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var E = Pt(a) || "Unknown";
        Ap[E] || (T("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Ap[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var L = Pt(a) || "Unknown";
          Ap[L] || (T("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Ap[L] = !0);
        }
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return qo(a) ? (D = !0, jh(t)) : D = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Tg(t), lT(t, v), pS(t, a, l, i), bS(null, t, a, !0, D, i);
      } else {
        if (t.tag = ce, t.mode & rn) {
          bn(!0);
          try {
            v = Ff(null, t, a, l, s, i), h = zf();
          } finally {
            bn(!1);
          }
        }
        return Br() && h && ng(t), Ra(null, t, v, i), wS(t, a), t.child;
      }
    }
    function wS(e, t) {
      {
        if (t && t.childContextTypes && T("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), ES[l] || (ES[l] = !0, T("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = Pt(t) || "Unknown";
          Up[d] || (T("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), Up[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Pt(t) || "Unknown";
          SS[v] || (T("%s: Function components do not support getDerivedStateFromProps.", v), SS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Pt(t) || "Unknown";
          gS[h] || (T("%s: Function components do not support contextType.", h), gS[h] = !0);
        }
      }
    }
    var kS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jt
    };
    function RS(e) {
      return {
        baseLanes: e,
        cachePool: fR(),
        transitions: null
      };
    }
    function TR(e, t) {
      var a = null;
      return {
        baseLanes: yt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bR(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return xg(e, wp);
    }
    function wR(e, t) {
      return ks(e.childLanes, t);
    }
    function TT(e, t, a) {
      var i = t.pendingProps;
      MD(t) && (t.flags |= He);
      var l = so.current, s = !1, d = (t.flags & He) !== Be;
      if (d || bR(l, e) ? (s = !0, t.flags &= ~He) : (e === null || e.memoizedState !== null) && (l = Bk(l, _C)), l = Mf(l), Fu(t, l), e === null) {
        lg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var h = v.dehydrated;
          if (h !== null)
            return _R(t, h);
        }
        var S = i.children, E = i.fallback;
        if (s) {
          var L = kR(t, S, E, a), D = t.child;
          return D.memoizedState = RS(a), t.memoizedState = kS, L;
        } else
          return xS(t, S);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var j = z.dehydrated;
          if (j !== null)
            return LR(e, t, d, i, j, z, a);
        }
        if (s) {
          var G = i.fallback, me = i.children, Ye = xR(e, t, me, G, a), ze = t.child, Ft = e.child.memoizedState;
          return ze.memoizedState = Ft === null ? RS(a) : TR(Ft, a), ze.childLanes = wR(e, a), t.memoizedState = kS, Ye;
        } else {
          var Ot = i.children, A = RR(e, t, Ot, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = DS(l, i);
      return s.return = e, e.child = s, s;
    }
    function kR(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, v, h;
      return (l & wt) === $e && s !== null ? (v = s, v.childLanes = X, v.pendingProps = d, e.mode & Yt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), h = Gu(a, l, i, null)) : (v = DS(d, l), h = Gu(a, l, i, null)), v.return = e, h.return = e, v.sibling = h, e.child = v, h;
    }
    function DS(e, t, a) {
      return bb(e, t, X, null);
    }
    function bT(e, t) {
      return oc(e, t);
    }
    function RR(e, t, a, i) {
      var l = e.child, s = l.sibling, d = bT(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & wt) === $e && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Ua) : v.push(s);
      }
      return t.child = d, d;
    }
    function xR(e, t, a, i, l) {
      var s = t.mode, d = e.child, v = d.sibling, h = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & wt) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var E = t.child;
        S = E, S.childLanes = X, S.pendingProps = h, t.mode & Yt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = d.selfBaseDuration, S.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        S = bT(d, h), S.subtreeFlags = d.subtreeFlags & Bn;
      var L;
      return v !== null ? L = oc(v, i) : (L = Gu(i, s, l, null), L.flags |= Tn), L.return = t, S.return = t, S.sibling = L, t.child = S, L;
    }
    function Lm(e, t, a, i) {
      i !== null && ug(i), _f(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = xS(t, s);
      return d.flags |= Tn, t.memoizedState = null, d;
    }
    function DR(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, v = DS(d, s), h = Gu(i, s, l, null);
      return h.flags |= Tn, v.return = t, h.return = t, v.sibling = h, t.child = v, (t.mode & wt) !== $e && _f(t, e.child, null, l), h;
    }
    function _R(e, t, a) {
      return (e.mode & wt) === $e ? (T("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = et) : Yy(t) ? e.lanes = Dr : e.lanes = oa, null;
    }
    function LR(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & xr) {
          t.flags &= ~xr;
          var A = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Lm(e, t, d, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= He, null;
          var Y = i.children, U = i.fallback, te = DR(e, t, Y, U, d), Te = t.child;
          return Te.memoizedState = RS(d), t.memoizedState = kS, te;
        }
      else {
        if (yk(), (t.mode & wt) === $e)
          return Lm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Yy(l)) {
          var v, h, S;
          {
            var E = Aw(l);
            v = E.digest, h = E.message, S = E.stack;
          }
          var L;
          h ? L = new Error(h) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = vS(L, v, S);
          return Lm(e, t, d, D);
        }
        var z = la(d, e.childLanes);
        if (po || z) {
          var j = jm();
          if (j !== null) {
            var G = zd(j, d);
            if (G !== jt && G !== s.retryLane) {
              s.retryLane = G;
              var me = un;
              Ga(e, G), wr(j, e, G, me);
            }
          }
          QS();
          var Ye = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Lm(e, t, d, Ye);
        } else if (YE(l)) {
          t.flags |= He, t.child = e.child;
          var ze = tD.bind(null, e);
          return Uw(l, ze), null;
        } else {
          Ek(t, l, s.treeContext);
          var Ft = i.children, Ot = xS(t, Ft);
          return Ot.flags |= na, Ot;
        }
      }
    }
    function wT(e, t, a) {
      e.lanes = yt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = yt(i.lanes, t)), gg(e.return, t, a);
    }
    function OR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Pe) {
          var l = i.memoizedState;
          l !== null && wT(i, a, e);
        } else if (i.tag === Ne)
          wT(i, a, e);
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
    function NR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && um(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function MR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !CS[e])
        if (CS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              T('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              T('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              T('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          T('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function AR(e, t) {
      e !== void 0 && !_m[e] && (e !== "collapsed" && e !== "hidden" ? (_m[e] = !0, T('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_m[e] = !0, T('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function kT(e, t) {
      {
        var a = Tt(e), i = !a && typeof pt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return T("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function UR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!kT(e[a], a))
              return;
        } else {
          var i = pt(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!kT(s.value, d))
                  return;
                d++;
              }
          } else
            T('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function _S(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function RT(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      MR(l), AR(s, l), UR(d, l), Ra(e, t, d, a);
      var v = so.current, h = xg(v, wp);
      if (h)
        v = Dg(v, wp), t.flags |= He;
      else {
        var S = e !== null && (e.flags & He) !== Be;
        S && OR(t, t.child, a), v = Mf(v);
      }
      if (Fu(t, v), (t.mode & wt) === $e)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var E = NR(t.child), L;
            E === null ? (L = t.child, t.child = null) : (L = E.sibling, E.sibling = null), _S(
              t,
              !1,
              // isBackwards
              L,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var j = z.alternate;
              if (j !== null && um(j) === null) {
                t.child = z;
                break;
              }
              var G = z.sibling;
              z.sibling = D, D = z, z = G;
            }
            _S(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            _S(
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
    function IR(e, t, a) {
      wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var xT = !1;
    function FR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, v = s.value;
      {
        "value" in s || xT || (xT = !0, T("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && oo(h, s, "prop", "Context.Provider");
      }
      if (SC(t, l, v), d !== null) {
        var S = d.value;
        if (Z(S, v)) {
          if (d.children === s.children && !Ph())
            return $l(e, t, a);
        } else
          Mk(t, l, a);
      }
      var E = s.children;
      return Ra(e, t, E, a), t.child;
    }
    var DT = !1;
    function zR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DT || (DT = !0, T("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && T("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var d = ur(i);
      Ta(t);
      var v;
      return Mp.current = t, Jn(!0), v = s(d), Jn(!1), ba(), t.flags |= li, Ra(e, t, v, a), t.child;
    }
    function Ip() {
      po = !0;
    }
    function Om(e, t) {
      (t.mode & wt) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tn);
    }
    function $l(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rT(), qp(t.lanes), la(a, t.childLanes) ? (Ok(e, t), t.child) : null;
    }
    function PR(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ua) : s.push(e), a.flags |= Tn, a;
      }
    }
    function LS(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function HR(e, t, a) {
      switch (t.tag) {
        case oe:
          ET(t), t.stateNode, Df();
          break;
        case ne:
          xC(t);
          break;
        case fe: {
          var i = t.type;
          qo(i) && jh(t);
          break;
        }
        case we:
          wg(t, t.stateNode.containerInfo);
          break;
        case Fe: {
          var l = t.memoizedProps.value, s = t.type._context;
          SC(t, s, l);
          break;
        }
        case St:
          {
            var d = la(a, t.childLanes);
            d && (t.flags |= At);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case Pe: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Fu(t, Mf(so.current)), t.flags |= He, null;
            var S = t.child, E = S.childLanes;
            if (la(a, E))
              return TT(e, t, a);
            Fu(t, Mf(so.current));
            var L = $l(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Fu(t, Mf(so.current));
          break;
        }
        case Ne: {
          var D = (e.flags & He) !== Be, z = la(a, t.childLanes);
          if (D) {
            if (z)
              return RT(e, t, a);
            t.flags |= He;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), Fu(t, so.current), z)
            break;
          return null;
        }
        case f:
        case Mt:
          return t.lanes = X, yT(e, t, a);
      }
      return $l(e, t, a);
    }
    function _T(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return PR(e, t, oE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Ph() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          po = !0;
        else {
          var s = LS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & He) === Be)
            return po = !1, HR(e, t, a);
          (e.flags & Rc) !== Be ? po = !0 : po = !1;
        }
      } else if (po = !1, Br() && fk(t)) {
        var d = t.index, v = dk();
        rC(t, v, d);
      }
      switch (t.lanes = X, t.tag) {
        case at:
          return CR(e, t, t.type, a);
        case ln: {
          var h = t.elementType;
          return SR(e, t, h, a);
        }
        case ce: {
          var S = t.type, E = t.pendingProps, L = t.elementType === S ? E : fo(S, E);
          return TS(e, t, S, L, a);
        }
        case fe: {
          var D = t.type, z = t.pendingProps, j = t.elementType === D ? z : fo(D, z);
          return ST(e, t, D, j, a);
        }
        case oe:
          return mR(e, t, a);
        case ne:
          return yR(e, t, a);
        case ke:
          return gR(e, t);
        case Pe:
          return TT(e, t, a);
        case we:
          return IR(e, t, a);
        case pe: {
          var G = t.type, me = t.pendingProps, Ye = t.elementType === G ? me : fo(G, me);
          return vT(e, t, G, Ye, a);
        }
        case Ke:
          return pR(e, t, a);
        case Me:
          return vR(e, t, a);
        case St:
          return hR(e, t, a);
        case Fe:
          return FR(e, t, a);
        case Rt:
          return zR(e, t, a);
        case Et: {
          var ze = t.type, Ft = t.pendingProps, Ot = fo(ze, Ft);
          if (t.type !== t.elementType) {
            var A = ze.propTypes;
            A && oo(
              A,
              Ot,
              // Resolved for outer only
              "prop",
              Pt(ze)
            );
          }
          return Ot = fo(ze.type, Ot), hT(e, t, ze, Ot, a);
        }
        case Je:
          return mT(e, t, t.type, t.pendingProps, a);
        case Bt: {
          var Y = t.type, U = t.pendingProps, te = t.elementType === Y ? U : fo(Y, U);
          return ER(e, t, Y, te, a);
        }
        case Ne:
          return RT(e, t, a);
        case Ct:
          break;
        case f:
          return yT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= At;
    }
    function LT(e) {
      e.flags |= Ln, e.flags |= mu;
    }
    var OT, OS, NT, MT;
    OT = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === ne || l.tag === ke)
          uw(e, l.stateNode);
        else if (l.tag !== we) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, OS = function(e, t) {
    }, NT = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, v = kg(), h = cw(d, a, s, i, l, v);
        t.updateQueue = h, h && Pf(t);
      }
    }, MT = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Fp(e, t) {
      if (!Br())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = X, i = Be;
      if (t) {
        if ((e.mode & Yt) !== $e) {
          for (var h = e.selfBaseDuration, S = e.child; S !== null; )
            a = yt(a, yt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Bn, i |= S.flags & Bn, h += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = h;
        } else
          for (var E = e.child; E !== null; )
            a = yt(a, yt(E.lanes, E.childLanes)), i |= E.subtreeFlags & Bn, i |= E.flags & Bn, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Yt) !== $e) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = yt(a, yt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = yt(a, yt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jR(e, t, a) {
      if (kk() && (t.mode & wt) !== $e && (t.flags & He) === Be)
        return cC(t), Df(), t.flags |= xr | ss | ar, !1;
      var i = Yh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (bk(t), Vr(t), (t.mode & Yt) !== $e) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & He) === Be && (t.memoizedState = null), t.flags |= At, Vr(t), (t.mode & Yt) !== $e) {
            var d = a !== null;
            if (d) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fC(), !0;
    }
    function AT(e, t, a) {
      var i = t.pendingProps;
      switch (rg(t), t.tag) {
        case at:
        case ln:
        case Je:
        case ce:
        case pe:
        case Ke:
        case Me:
        case St:
        case Rt:
        case Et:
          return Vr(t), null;
        case fe: {
          var l = t.type;
          return qo(l) && Hh(t), Vr(t), null;
        }
        case oe: {
          var s = t.stateNode;
          if (Nf(t), Zy(t), Lg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Yh(t);
            if (d)
              Pf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & xr) !== Be) && (t.flags |= Zn, fC());
            }
          }
          return OS(e, t), Vr(t), null;
        }
        case ne: {
          Rg(t);
          var h = RC(), S = t.type;
          if (e !== null && t.stateNode != null)
            NT(e, t, S, i, h), e.ref !== t.ref && LT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var E = kg(), L = Yh(t);
            if (L)
              Ck(t, h, E) && Pf(t);
            else {
              var D = lw(S, i, h, E, t);
              OT(D, t, !1, !1), t.stateNode = D, sw(D, S, i, h) && Pf(t);
            }
            t.ref !== null && LT(t);
          }
          return Vr(t), null;
        }
        case ke: {
          var z = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            MT(e, t, j, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = RC(), me = kg(), Ye = Yh(t);
            Ye ? Tk(t) && Pf(t) : t.stateNode = fw(z, G, me, t);
          }
          return Vr(t), null;
        }
        case Pe: {
          Af(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ft = jR(e, t, ze);
            if (!Ft)
              return t.flags & ar ? t : null;
          }
          if ((t.flags & He) !== Be)
            return t.lanes = a, (t.mode & Yt) !== $e && tS(t), t;
          var Ot = ze !== null, A = e !== null && e.memoizedState !== null;
          if (Ot !== A && Ot) {
            var Y = t.child;
            if (Y.flags |= jn, (t.mode & wt) !== $e) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              U || xg(so.current, _C) ? Bx() : QS();
            }
          }
          var te = t.updateQueue;
          if (te !== null && (t.flags |= At), Vr(t), (t.mode & Yt) !== $e && Ot) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case we:
          return Nf(t), OS(e, t), e === null && ak(t.stateNode.containerInfo), Vr(t), null;
        case Fe:
          var Se = t.type._context;
          return yg(Se, t), Vr(t), null;
        case Bt: {
          var tt = t.type;
          return qo(tt) && Hh(t), Vr(t), null;
        }
        case Ne: {
          Af(t);
          var ut = t.memoizedState;
          if (ut === null)
            return Vr(t), null;
          var on = (t.flags & He) !== Be, Qt = ut.rendering;
          if (Qt === null)
            if (on)
              Fp(ut, !1);
            else {
              var nr = Vx() && (e === null || (e.flags & He) === Be);
              if (!nr)
                for (var Xt = t.child; Xt !== null; ) {
                  var qn = um(Xt);
                  if (qn !== null) {
                    on = !0, t.flags |= He, Fp(ut, !1);
                    var va = qn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= At), t.subtreeFlags = Be, Nk(t, a), Fu(t, Dg(so.current, wp)), t.child;
                  }
                  Xt = Xt.sibling;
                }
              ut.tail !== null && er() > tb() && (t.flags |= He, on = !0, Fp(ut, !1), t.lanes = _d);
            }
          else {
            if (!on) {
              var Qr = um(Qt);
              if (Qr !== null) {
                t.flags |= He, on = !0;
                var vi = Qr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= At), Fp(ut, !0), ut.tail === null && ut.tailMode === "hidden" && !Qt.alternate && !Br())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              er() * 2 - ut.renderingStartTime > tb() && a !== oa && (t.flags |= He, on = !0, Fp(ut, !1), t.lanes = _d);
            }
            if (ut.isBackwards)
              Qt.sibling = t.child, t.child = Qt;
            else {
              var _a = ut.last;
              _a !== null ? _a.sibling = Qt : t.child = Qt, ut.last = Qt;
            }
          }
          if (ut.tail !== null) {
            var La = ut.tail;
            ut.rendering = La, ut.tail = La.sibling, ut.renderingStartTime = er(), La.sibling = null;
            var ha = so.current;
            return on ? ha = Dg(ha, wp) : ha = Mf(ha), Fu(t, ha), La;
          }
          return Vr(t), null;
        }
        case Ct:
          break;
        case f:
        case Mt: {
          qS(t);
          var ql = t.memoizedState, Wf = ql !== null;
          if (e !== null) {
            var Zp = e.memoizedState, nl = Zp !== null;
            nl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ue && (t.flags |= jn);
          }
          return !Wf || (t.mode & wt) === $e ? Vr(t) : la(tl, oa) && (Vr(t), t.subtreeFlags & (Tn | At) && (t.flags |= jn)), null;
        }
        case _t:
          return null;
        case zt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function BR(e, t, a) {
      switch (rg(t), t.tag) {
        case fe: {
          var i = t.type;
          qo(i) && Hh(t);
          var l = t.flags;
          return l & ar ? (t.flags = l & ~ar | He, (t.mode & Yt) !== $e && tS(t), t) : null;
        }
        case oe: {
          t.stateNode, Nf(t), Zy(t), Lg();
          var s = t.flags;
          return (s & ar) !== Be && (s & He) === Be ? (t.flags = s & ~ar | He, t) : null;
        }
        case ne:
          return Rg(t), null;
        case Pe: {
          Af(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var v = t.flags;
          return v & ar ? (t.flags = v & ~ar | He, (t.mode & Yt) !== $e && tS(t), t) : null;
        }
        case Ne:
          return Af(t), null;
        case we:
          return Nf(t), null;
        case Fe:
          var h = t.type._context;
          return yg(h, t), null;
        case f:
        case Mt:
          return qS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function UT(e, t, a) {
      switch (rg(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && Hh(t);
          break;
        }
        case oe: {
          t.stateNode, Nf(t), Zy(t), Lg();
          break;
        }
        case ne: {
          Rg(t);
          break;
        }
        case we:
          Nf(t);
          break;
        case Pe:
          Af(t);
          break;
        case Ne:
          Af(t);
          break;
        case Fe:
          var l = t.type._context;
          yg(l, t);
          break;
        case f:
        case Mt:
          qS(t);
          break;
      }
    }
    var IT = null;
    IT = /* @__PURE__ */ new Set();
    var Nm = !1, Gr = !1, $R = typeof WeakSet == "function" ? WeakSet : Set, Oe = null, Hf = null, jf = null;
    function VR(e) {
      Lo(null, function() {
        throw e;
      }), us();
    }
    var GR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Yt)
        try {
          Zo(), t.componentWillUnmount();
        } finally {
          Jo(e);
        }
      else
        t.componentWillUnmount();
    };
    function FT(e, t) {
      try {
        Hu(gr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function NS(e, t, a) {
      try {
        GR(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function YR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function zT(e, t) {
      try {
        HT(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Bf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && vt && e.mode & Yt)
              try {
                Zo(), i = a(null);
              } finally {
                Jo(e);
              }
            else
              i = a(null);
          } catch (l) {
            vn(e, t, l);
          }
          typeof i == "function" && T("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          a.current = null;
    }
    function Mm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var PT = !1;
    function WR(e, t) {
      iw(e.containerInfo), Oe = t, qR();
      var a = PT;
      return PT = !1, a;
    }
    function qR() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        (e.subtreeFlags & No) !== Be && t !== null ? (t.return = e, Oe = t) : QR();
      }
    }
    function QR() {
      for (; Oe !== null; ) {
        var e = Oe;
        en(e);
        try {
          XR(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function XR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Zn) !== Be) {
        switch (en(e), e.tag) {
          case ce:
          case pe:
          case Je:
            break;
          case fe: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && T("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(e) || "instance"), s.state !== e.memoizedState && T("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : fo(e.type, i), l);
              {
                var v = IT;
                d === void 0 && !v.has(e.type) && (v.add(e.type), T("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", rt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case oe: {
            {
              var h = e.stateNode;
              Lw(h.containerInfo);
            }
            break;
          }
          case ne:
          case ke:
          case we:
          case Bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        pn();
      }
    }
    function vo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var v = d.destroy;
            d.destroy = void 0, v !== void 0 && ((e & $r) !== Ya ? eo(t) : (e & gr) !== Ya && fs(t), (e & Qo) !== Ya && Xp(!0), Mm(t, a, v), (e & Qo) !== Ya && Xp(!1), (e & $r) !== Ya ? Io() : (e & gr) !== Ya && xd());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Hu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & $r) !== Ya ? Rd(t) : (e & gr) !== Ya && Nc(t);
            var d = s.create;
            (e & Qo) !== Ya && Xp(!0), s.destroy = d(), (e & Qo) !== Ya && Xp(!1), (e & $r) !== Ya ? zv() : (e & gr) !== Ya && Pv();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var h = void 0;
                (s.tag & gr) !== Be ? h = "useLayoutEffect" : (s.tag & Qo) !== Be ? h = "useInsertionEffect" : h = "useEffect";
                var S = void 0;
                v === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? S = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + v, T("%s must not return anything besides a function, which is used for clean-up.%s", h, S);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function KR(e, t) {
      if ((t.flags & At) !== Be)
        switch (t.tag) {
          case St: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = tT(), v = t.alternate === null ? "mount" : "update";
            eT() && (v = "nested-update"), typeof s == "function" && s(l, v, a, d);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case oe:
                  var S = h.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case St:
                  var E = h.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function JR(e, t, a, i) {
      if ((a.flags & Ao) !== Be)
        switch (a.tag) {
          case ce:
          case pe:
          case Je: {
            if (!Gr)
              if (a.mode & Yt)
                try {
                  Zo(), Hu(gr | yr, a);
                } finally {
                  Jo(a);
                }
              else
                Hu(gr | yr, a);
            break;
          }
          case fe: {
            var l = a.stateNode;
            if (a.flags & At && !Gr)
              if (t === null)
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && T("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && T("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Yt)
                  try {
                    Zo(), l.componentDidMount();
                  } finally {
                    Jo(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : fo(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && T("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && T("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Yt)
                  try {
                    Zo(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jo(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && T("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && T("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), kC(a, v, l));
            break;
          }
          case oe: {
            var h = a.updateQueue;
            if (h !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ne:
                    S = a.child.stateNode;
                    break;
                  case fe:
                    S = a.child.stateNode;
                    break;
                }
              kC(a, h, S);
            }
            break;
          }
          case ne: {
            var E = a.stateNode;
            if (t === null && a.flags & At) {
              var L = a.type, D = a.memoizedProps;
              mw(E, L, D);
            }
            break;
          }
          case ke:
            break;
          case we:
            break;
          case St: {
            {
              var z = a.memoizedProps, j = z.onCommit, G = z.onRender, me = a.stateNode.effectDuration, Ye = tT(), ze = t === null ? "mount" : "update";
              eT() && (ze = "nested-update"), typeof G == "function" && G(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ye);
              {
                typeof j == "function" && j(a.memoizedProps.id, ze, me, Ye), Qx(a);
                var Ft = a.return;
                e: for (; Ft !== null; ) {
                  switch (Ft.tag) {
                    case oe:
                      var Ot = Ft.stateNode;
                      Ot.effectDuration += me;
                      break e;
                    case St:
                      var A = Ft.stateNode;
                      A.effectDuration += me;
                      break e;
                  }
                  Ft = Ft.return;
                }
              }
            }
            break;
          }
          case Pe: {
            ox(e, a);
            break;
          }
          case Ne:
          case Bt:
          case Ct:
          case f:
          case Mt:
          case zt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Gr || a.flags & Ln && HT(a);
    }
    function ZR(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          if (e.mode & Yt)
            try {
              Zo(), FT(e, e.return);
            } finally {
              Jo(e);
            }
          else
            FT(e, e.return);
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && YR(e, e.return, t), zT(e, e.return);
          break;
        }
        case ne: {
          zT(e, e.return);
          break;
        }
      }
    }
    function ex(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ne) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? Rw(l) : Dw(i.stateNode, i.memoizedProps);
            } catch (d) {
              vn(e, e.return, d);
            }
          }
        } else if (i.tag === ke) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xw(s) : _w(s, i.memoizedProps);
            } catch (d) {
              vn(e, e.return, d);
            }
        } else if (!((i.tag === f || i.tag === Mt) && i.memoizedState !== null && i !== e)) {
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
    function HT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ne:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Yt)
            try {
              Zo(), l = t(i);
            } finally {
              Jo(e);
            }
          else
            l = t(i);
          typeof l == "function" && T("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          t.hasOwnProperty("current") || T("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", rt(e)), t.current = i;
      }
    }
    function tx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ne) {
          var a = e.stateNode;
          a !== null && lk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function nx(e) {
      for (var t = e.return; t !== null; ) {
        if (BT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BT(e) {
      return e.tag === ne || e.tag === oe || e.tag === we;
    }
    function $T(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || BT(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ne && t.tag !== ke && t.tag !== Zt; ) {
          if (t.flags & Tn || t.child === null || t.tag === we)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Tn))
          return t.stateNode;
      }
    }
    function rx(e) {
      var t = nx(e);
      switch (t.tag) {
        case ne: {
          var a = t.stateNode;
          t.flags & Ia && (GE(a), t.flags &= ~Ia);
          var i = $T(e);
          AS(e, i, a);
          break;
        }
        case oe:
        case we: {
          var l = t.stateNode.containerInfo, s = $T(e);
          MS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function MS(e, t, a) {
      var i = e.tag, l = i === ne || i === ke;
      if (l) {
        var s = e.stateNode;
        t ? Tw(a, s, t) : Ew(a, s);
      } else if (i !== we) {
        var d = e.child;
        if (d !== null) {
          MS(d, t, a);
          for (var v = d.sibling; v !== null; )
            MS(v, t, a), v = v.sibling;
        }
      }
    }
    function AS(e, t, a) {
      var i = e.tag, l = i === ne || i === ke;
      if (l) {
        var s = e.stateNode;
        t ? Cw(a, s, t) : Sw(a, s);
      } else if (i !== we) {
        var d = e.child;
        if (d !== null) {
          AS(d, t, a);
          for (var v = d.sibling; v !== null; )
            AS(v, t, a), v = v.sibling;
        }
      }
    }
    var Yr = null, ho = !1;
    function ax(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ne: {
              Yr = i.stateNode, ho = !1;
              break e;
            }
            case oe: {
              Yr = i.stateNode.containerInfo, ho = !0;
              break e;
            }
            case we: {
              Yr = i.stateNode.containerInfo, ho = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VT(e, t, a), Yr = null, ho = !1;
      }
      tx(a);
    }
    function ju(e, t, a) {
      for (var i = a.child; i !== null; )
        VT(e, t, i), i = i.sibling;
    }
    function VT(e, t, a) {
      switch (bd(a), a.tag) {
        case ne:
          Gr || Bf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ke: {
          {
            var i = Yr, l = ho;
            Yr = null, ju(e, t, a), Yr = i, ho = l, Yr !== null && (ho ? ww(Yr, a.stateNode) : bw(Yr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Yr !== null && (ho ? kw(Yr, a.stateNode) : Gy(Yr, a.stateNode));
          return;
        }
        case we: {
          {
            var s = Yr, d = ho;
            Yr = a.stateNode.containerInfo, ho = !0, ju(e, t, a), Yr = s, ho = d;
          }
          return;
        }
        case ce:
        case pe:
        case Et:
        case Je: {
          if (!Gr) {
            var v = a.updateQueue;
            if (v !== null) {
              var h = v.lastEffect;
              if (h !== null) {
                var S = h.next, E = S;
                do {
                  var L = E, D = L.destroy, z = L.tag;
                  D !== void 0 && ((z & Qo) !== Ya ? Mm(a, t, D) : (z & gr) !== Ya && (fs(a), a.mode & Yt ? (Zo(), Mm(a, t, D), Jo(a)) : Mm(a, t, D), xd())), E = E.next;
                } while (E !== S);
              }
            }
          }
          ju(e, t, a);
          return;
        }
        case fe: {
          if (!Gr) {
            Bf(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && NS(a, t, j);
          }
          ju(e, t, a);
          return;
        }
        case Ct: {
          ju(e, t, a);
          return;
        }
        case f: {
          if (
            // TODO: Remove this dead flag
            a.mode & wt
          ) {
            var G = Gr;
            Gr = G || a.memoizedState !== null, ju(e, t, a), Gr = G;
          } else
            ju(e, t, a);
          break;
        }
        default: {
          ju(e, t, a);
          return;
        }
      }
    }
    function ix(e) {
      e.memoizedState;
    }
    function ox(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && Vw(s);
          }
        }
      }
    }
    function GT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $R()), t.forEach(function(i) {
          var l = nD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ia)
              if (Hf !== null && jf !== null)
                Qp(jf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function lx(e, t, a) {
      Hf = a, jf = e, en(t), YT(t, e), en(t), Hf = null, jf = null;
    }
    function mo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            ax(e, t, s);
          } catch (h) {
            vn(s, t, h);
          }
        }
      var d = bo();
      if (t.subtreeFlags & Mo)
        for (var v = t.child; v !== null; )
          en(v), YT(v, e), v = v.sibling;
      en(d);
    }
    function YT(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case ce:
        case pe:
        case Et:
        case Je: {
          if (mo(t, e), el(e), l & At) {
            try {
              vo(Qo | yr, e, e.return), Hu(Qo | yr, e);
            } catch (tt) {
              vn(e, e.return, tt);
            }
            if (e.mode & Yt) {
              try {
                Zo(), vo(gr | yr, e, e.return);
              } catch (tt) {
                vn(e, e.return, tt);
              }
              Jo(e);
            } else
              try {
                vo(gr | yr, e, e.return);
              } catch (tt) {
                vn(e, e.return, tt);
              }
          }
          return;
        }
        case fe: {
          mo(t, e), el(e), l & Ln && i !== null && Bf(i, i.return);
          return;
        }
        case ne: {
          mo(t, e), el(e), l & Ln && i !== null && Bf(i, i.return);
          {
            if (e.flags & Ia) {
              var s = e.stateNode;
              try {
                GE(s);
              } catch (tt) {
                vn(e, e.return, tt);
              }
            }
            if (l & At) {
              var d = e.stateNode;
              if (d != null) {
                var v = e.memoizedProps, h = i !== null ? i.memoizedProps : v, S = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    yw(d, E, S, h, v, e);
                  } catch (tt) {
                    vn(e, e.return, tt);
                  }
              }
            }
          }
          return;
        }
        case ke: {
          if (mo(t, e), el(e), l & At) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, D = e.memoizedProps, z = i !== null ? i.memoizedProps : D;
            try {
              gw(L, z, D);
            } catch (tt) {
              vn(e, e.return, tt);
            }
          }
          return;
        }
        case oe: {
          if (mo(t, e), el(e), l & At && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                $w(t.containerInfo);
              } catch (tt) {
                vn(e, e.return, tt);
              }
          }
          return;
        }
        case we: {
          mo(t, e), el(e);
          return;
        }
        case Pe: {
          mo(t, e), el(e);
          var G = e.child;
          if (G.flags & jn) {
            var me = G.stateNode, Ye = G.memoizedState, ze = Ye !== null;
            if (me.isHidden = ze, ze) {
              var Ft = G.alternate !== null && G.alternate.memoizedState !== null;
              Ft || jx();
            }
          }
          if (l & At) {
            try {
              ix(e);
            } catch (tt) {
              vn(e, e.return, tt);
            }
            GT(e);
          }
          return;
        }
        case f: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & wt
          ) {
            var A = Gr;
            Gr = A || Ot, mo(t, e), Gr = A;
          } else
            mo(t, e);
          if (el(e), l & jn) {
            var Y = e.stateNode, U = e.memoizedState, te = U !== null, Te = e;
            if (Y.isHidden = te, te && !Ot && (Te.mode & wt) !== $e) {
              Oe = Te;
              for (var Se = Te.child; Se !== null; )
                Oe = Se, sx(Se), Se = Se.sibling;
            }
            ex(Te, te);
          }
          return;
        }
        case Ne: {
          mo(t, e), el(e), l & At && GT(e);
          return;
        }
        case Ct:
          return;
        default: {
          mo(t, e), el(e);
          return;
        }
      }
    }
    function el(e) {
      var t = e.flags;
      if (t & Tn) {
        try {
          rx(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Tn;
      }
      t & na && (e.flags &= ~na);
    }
    function ux(e, t, a) {
      Hf = a, jf = t, Oe = e, WT(e, t, a), Hf = null, jf = null;
    }
    function WT(e, t, a) {
      for (var i = (e.mode & wt) !== $e; Oe !== null; ) {
        var l = Oe, s = l.child;
        if (l.tag === f && i) {
          var d = l.memoizedState !== null, v = d || Nm;
          if (v) {
            US(e, t, a);
            continue;
          } else {
            var h = l.alternate, S = h !== null && h.memoizedState !== null, E = S || Gr, L = Nm, D = Gr;
            Nm = v, Gr = E, Gr && !D && (Oe = l, cx(l));
            for (var z = s; z !== null; )
              Oe = z, WT(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Oe = l, Nm = L, Gr = D, US(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Ao) !== Be && s !== null ? (s.return = l, Oe = s) : US(e, t, a);
      }
    }
    function US(e, t, a) {
      for (; Oe !== null; ) {
        var i = Oe;
        if ((i.flags & Ao) !== Be) {
          var l = i.alternate;
          en(i);
          try {
            JR(t, l, i, a);
          } catch (d) {
            vn(i, i.return, d);
          }
          pn();
        }
        if (i === e) {
          Oe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Oe = s;
          return;
        }
        Oe = i.return;
      }
    }
    function sx(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        switch (t.tag) {
          case ce:
          case pe:
          case Et:
          case Je: {
            if (t.mode & Yt)
              try {
                Zo(), vo(gr, t, t.return);
              } finally {
                Jo(t);
              }
            else
              vo(gr, t, t.return);
            break;
          }
          case fe: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && NS(t, t.return, i);
            break;
          }
          case ne: {
            Bf(t, t.return);
            break;
          }
          case f: {
            var l = t.memoizedState !== null;
            if (l) {
              qT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Oe = a) : qT(e);
      }
    }
    function qT(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        if (t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function cx(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        if (t.tag === f) {
          var i = t.memoizedState !== null;
          if (i) {
            QT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Oe = a) : QT(e);
      }
    }
    function QT(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        en(t);
        try {
          ZR(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function fx(e, t, a, i) {
      Oe = t, dx(t, e, a, i);
    }
    function dx(e, t, a, i) {
      for (; Oe !== null; ) {
        var l = Oe, s = l.child;
        (l.subtreeFlags & Ji) !== Be && s !== null ? (s.return = l, Oe = s) : px(e, t, a, i);
      }
    }
    function px(e, t, a, i) {
      for (; Oe !== null; ) {
        var l = Oe;
        if ((l.flags & ta) !== Be) {
          en(l);
          try {
            vx(t, l, a, i);
          } catch (d) {
            vn(l, l.return, d);
          }
          pn();
        }
        if (l === e) {
          Oe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Oe = s;
          return;
        }
        Oe = l.return;
      }
    }
    function vx(e, t, a, i) {
      switch (t.tag) {
        case ce:
        case pe:
        case Je: {
          if (t.mode & Yt) {
            eS();
            try {
              Hu($r | yr, t);
            } finally {
              Zg(t);
            }
          } else
            Hu($r | yr, t);
          break;
        }
      }
    }
    function hx(e) {
      Oe = e, mx();
    }
    function mx() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        if ((Oe.flags & Ua) !== Be) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Oe = l, Sx(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var v = d.sibling;
                    d.sibling = null, d = v;
                  } while (d !== null);
                }
              }
            }
            Oe = e;
          }
        }
        (e.subtreeFlags & Ji) !== Be && t !== null ? (t.return = e, Oe = t) : yx();
      }
    }
    function yx() {
      for (; Oe !== null; ) {
        var e = Oe;
        (e.flags & ta) !== Be && (en(e), gx(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function gx(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          e.mode & Yt ? (eS(), vo($r | yr, e, e.return), Zg(e)) : vo($r | yr, e, e.return);
          break;
        }
      }
    }
    function Sx(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        en(a), Cx(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Oe = i) : Ex(e);
      }
    }
    function Ex(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.sibling, i = t.return;
        if (jT(t), t === e) {
          Oe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Oe = a;
          return;
        }
        Oe = i;
      }
    }
    function Cx(e, t) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          e.mode & Yt ? (eS(), vo($r, e, t), Zg(e)) : vo($r, e, t);
          break;
        }
      }
    }
    function Tx(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          try {
            Hu(gr | yr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function bx(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          try {
            Hu($r | yr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je: {
          try {
            vo(gr | yr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && NS(e, e.return, t);
          break;
        }
      }
    }
    function kx(e) {
      switch (e.tag) {
        case ce:
        case pe:
        case Je:
          try {
            vo($r | yr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Rx = [];
    function xx() {
      Rx.forEach(function(e) {
        return e();
      });
    }
    var Dx = M.ReactCurrentActQueue;
    function _x(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function XT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Dx.current !== null && T("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Lx = Math.ceil, IS = M.ReactCurrentDispatcher, FS = M.ReactCurrentOwner, Wr = M.ReactCurrentBatchConfig, yo = M.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), KT = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Vl = 0, Pp = 1, nc = 2, Am = 3, Hp = 4, JT = 5, zS = 6, It = Cr, xa = null, zn = null, Tr = X, tl = X, PS = Ou(X), br = Vl, jp = null, Um = X, Bp = X, Im = X, $p = null, Wa = null, HS = 0, ZT = 500, eb = 1 / 0, Ox = 500, Gl = null;
    function Vp() {
      eb = er() + Ox;
    }
    function tb() {
      return eb;
    }
    var Fm = !1, jS = null, $f = null, rc = !1, Bu = null, Gp = X, BS = [], $S = null, Nx = 50, Yp = 0, VS = null, GS = !1, zm = !1, Mx = 50, Vf = 0, Pm = null, Wp = un, Hm = X, nb = !1;
    function jm() {
      return xa;
    }
    function Da() {
      return (It & (qr | ji)) !== Cr ? er() : (Wp !== un || (Wp = er()), Wp);
    }
    function $u(e) {
      var t = e.mode;
      if ((t & wt) === $e)
        return et;
      if ((It & qr) !== Cr && Tr !== X)
        return ws(Tr);
      var a = Dk() !== xk;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Hm === jt && (Hm = Ud()), Hm;
      }
      var l = Ba();
      if (l !== jt)
        return l;
      var s = dw();
      return s;
    }
    function Ax(e) {
      var t = e.mode;
      return (t & wt) === $e ? et : Gv();
    }
    function wr(e, t, a, i) {
      aD(), nb && T("useInsertionEffect must not schedule updates."), GS && (zm = !0), Eu(e, a, i), (It & qr) !== X && e === xa ? lD(t) : (ia && xs(e, t, a), uD(t), e === xa && ((It & qr) === Cr && (Bp = yt(Bp, a)), br === Hp && Vu(e, Tr)), qa(e, i), a === et && It === Cr && (t.mode & wt) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yo.isBatchingLegacy && (Vp(), nC()));
    }
    function Ux(e, t, a) {
      var i = e.current;
      i.lanes = t, Eu(e, t, a), qa(e, a);
    }
    function Ix(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & qr) !== Cr
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      Jc(e, t);
      var i = Kc(e, e === xa ? Tr : X);
      if (i === X) {
        a !== null && gb(a), e.callbackNode = null, e.callbackPriority = jt;
        return;
      }
      var l = Po(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yo.current !== null && a !== JS)) {
        a == null && s !== et && T("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && gb(a);
      var d;
      if (l === et)
        e.tag === Nu ? (yo.isBatchingLegacy !== null && (yo.didScheduleLegacyUpdate = !0), ck(ib.bind(null, e))) : tC(ib.bind(null, e)), yo.current !== null ? yo.current.push(Mu) : vw(function() {
          (It & (qr | ji)) === Cr && Mu();
        }), d = null;
      else {
        var v;
        switch (Jv(i)) {
          case Fr:
            v = cs;
            break;
          case Oi:
            v = Uo;
            break;
          case Ha:
            v = Zi;
            break;
          case ja:
            v = gl;
            break;
          default:
            v = Zi;
            break;
        }
        d = ZS(v, rb.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function rb(e, t) {
      if (eR(), Wp = un, Hm = X, (It & (qr | ji)) !== Cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Kc(e, e === xa ? Tr : X);
      if (l === X)
        return null;
      var s = !ef(e, l) && !Vv(e, l) && !t, d = s ? Yx(e, l) : $m(e, l);
      if (d !== Vl) {
        if (d === nc) {
          var v = Zc(e);
          v !== X && (l = v, d = YS(e, v));
        }
        if (d === Pp) {
          var h = jp;
          throw ac(e, X), Vu(e, l), qa(e, er()), h;
        }
        if (d === zS)
          Vu(e, l);
        else {
          var S = !ef(e, l), E = e.current.alternate;
          if (S && !zx(E)) {
            if (d = $m(e, l), d === nc) {
              var L = Zc(e);
              L !== X && (l = L, d = YS(e, L));
            }
            if (d === Pp) {
              var D = jp;
              throw ac(e, X), Vu(e, l), qa(e, er()), D;
            }
          }
          e.finishedWork = E, e.finishedLanes = l, Fx(e, d, l);
        }
      }
      return qa(e, er()), e.callbackNode === a ? rb.bind(null, e) : null;
    }
    function YS(e, t) {
      var a = $p;
      if (rf(e)) {
        var i = ac(e, t);
        i.flags |= xr, rk(e.containerInfo);
      }
      var l = $m(e, t);
      if (l !== nc) {
        var s = Wa;
        Wa = a, s !== null && ab(s);
      }
      return l;
    }
    function ab(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function Fx(e, t, a) {
      switch (t) {
        case Vl:
        case Pp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case nc: {
          ic(e, Wa, Gl);
          break;
        }
        case Am: {
          if (Vu(e, a), _l(a) && // do not delay if we're inside an act() scope
          !Sb()) {
            var i = HS + ZT - er();
            if (i > 10) {
              var l = Kc(e, X);
              if (l !== X)
                break;
              var s = e.suspendedLanes;
              if (!Ll(s, a)) {
                Da(), tf(e, s);
                break;
              }
              e.timeoutHandle = $y(ic.bind(null, e, Wa, Gl), i);
              break;
            }
          }
          ic(e, Wa, Gl);
          break;
        }
        case Hp: {
          if (Vu(e, a), Md(a))
            break;
          if (!Sb()) {
            var d = si(e, a), v = d, h = er() - v, S = rD(h) - h;
            if (S > 10) {
              e.timeoutHandle = $y(ic.bind(null, e, Wa, Gl), S);
              break;
            }
          }
          ic(e, Wa, Gl);
          break;
        }
        case JT: {
          ic(e, Wa, Gl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function zx(e) {
      for (var t = e; ; ) {
        if (t.flags & hu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, v = s.value;
                try {
                  if (!Z(d(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & hu && h !== null) {
          h.return = t, t = h;
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
    function Vu(e, t) {
      t = ks(t, Im), t = ks(t, Bp), qv(e, t);
    }
    function ib(e) {
      if (tR(), (It & (qr | ji)) !== Cr)
        throw new Error("Should not already be working.");
      Wl();
      var t = Kc(e, X);
      if (!la(t, et))
        return qa(e, er()), null;
      var a = $m(e, t);
      if (e.tag !== Nu && a === nc) {
        var i = Zc(e);
        i !== X && (t = i, a = YS(e, i));
      }
      if (a === Pp) {
        var l = jp;
        throw ac(e, X), Vu(e, t), qa(e, er()), l;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Wa, Gl), qa(e, er()), null;
    }
    function Px(e, t) {
      t !== X && (nf(e, yt(t, et)), qa(e, er()), (It & (qr | ji)) === Cr && (Vp(), Mu()));
    }
    function WS(e, t) {
      var a = It;
      It |= KT;
      try {
        return e(t);
      } finally {
        It = a, It === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yo.isBatchingLegacy && (Vp(), nC());
      }
    }
    function Hx(e, t, a, i, l) {
      var s = Ba(), d = Wr.transition;
      try {
        return Wr.transition = null, Gn(Fr), e(t, a, i, l);
      } finally {
        Gn(s), Wr.transition = d, It === Cr && Vp();
      }
    }
    function Yl(e) {
      Bu !== null && Bu.tag === Nu && (It & (qr | ji)) === Cr && Wl();
      var t = It;
      It |= KT;
      var a = Wr.transition, i = Ba();
      try {
        return Wr.transition = null, Gn(Fr), e ? e() : void 0;
      } finally {
        Gn(i), Wr.transition = a, It = t, (It & (qr | ji)) === Cr && Mu();
      }
    }
    function ob() {
      return (It & (qr | ji)) !== Cr;
    }
    function Bm(e, t) {
      da(PS, tl, e), tl = yt(tl, t);
    }
    function qS(e) {
      tl = PS.current, fa(PS, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = X;
      var a = e.timeoutHandle;
      if (a !== Vy && (e.timeoutHandle = Vy, pw(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var l = i.alternate;
          UT(l, i), i = i.return;
        }
      xa = e;
      var s = oc(e.current, null);
      return zn = s, Tr = tl = t, br = Vl, jp = null, Um = X, Bp = X, Im = X, $p = null, Wa = null, Uk(), uo.discardPendingWarnings(), s;
    }
    function lb(e, t) {
      do {
        var a = zn;
        try {
          if (Jh(), OC(), pn(), FS.current = null, a === null || a.return === null) {
            br = Pp, jp = t, zn = null;
            return;
          }
          if (Ve && a.mode & Yt && xm(a, !0), qe)
            if (ba(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Li(a, i, Tr);
            } else
              ds(a, t, Tr);
          cR(e, a.return, a, t, Tr), fb(a);
        } catch (l) {
          t = l, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function ub() {
      var e = IS.current;
      return IS.current = Tm, e === null ? Tm : e;
    }
    function sb(e) {
      IS.current = e;
    }
    function jx() {
      HS = er();
    }
    function qp(e) {
      Um = yt(e, Um);
    }
    function Bx() {
      br === Vl && (br = Am);
    }
    function QS() {
      (br === Vl || br === Am || br === nc) && (br = Hp), xa !== null && (bs(Um) || bs(Bp)) && Vu(xa, Tr);
    }
    function $x(e) {
      br !== Hp && (br = nc), $p === null ? $p = [e] : $p.push(e);
    }
    function Vx() {
      return br === Vl;
    }
    function $m(e, t) {
      var a = It;
      It |= qr;
      var i = ub();
      if (xa !== e || Tr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Qp(e, Tr), l.clear()), Qv(e, t);
        }
        Gl = Pd(), ac(e, t);
      }
      Tl(t);
      do
        try {
          Gx();
          break;
        } catch (s) {
          lb(e, s);
        }
      while (!0);
      if (Jh(), It = a, sb(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), xa = null, Tr = X, br;
    }
    function Gx() {
      for (; zn !== null; )
        cb(zn);
    }
    function Yx(e, t) {
      var a = It;
      It |= qr;
      var i = ub();
      if (xa !== e || Tr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Qp(e, Tr), l.clear()), Qv(e, t);
        }
        Gl = Pd(), Vp(), ac(e, t);
      }
      Tl(t);
      do
        try {
          Wx();
          break;
        } catch (s) {
          lb(e, s);
        }
      while (!0);
      return Jh(), sb(i), It = a, zn !== null ? (Hv(), Vl) : (Mc(), xa = null, Tr = X, br);
    }
    function Wx() {
      for (; zn !== null && !gd(); )
        cb(zn);
    }
    function cb(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & Yt) !== $e ? (Jg(e), a = XS(t, e, tl), xm(e, !0)) : a = XS(t, e, tl), pn(), e.memoizedProps = e.pendingProps, a === null ? fb(e) : zn = a, FS.current = null;
    }
    function fb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ss) === Be) {
          en(t);
          var l = void 0;
          if ((t.mode & Yt) === $e ? l = AT(a, t, tl) : (Jg(t), l = AT(a, t, tl), xm(t, !1)), pn(), l !== null) {
            zn = l;
            return;
          }
        } else {
          var s = BR(a, t);
          if (s !== null) {
            s.flags &= Av, zn = s;
            return;
          }
          if ((t.mode & Yt) !== $e) {
            xm(t, !1);
            for (var d = t.actualDuration, v = t.child; v !== null; )
              d += v.actualDuration, v = v.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= ss, i.subtreeFlags = Be, i.deletions = null;
          else {
            br = zS, zn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          zn = h;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      br === Vl && (br = JT);
    }
    function ic(e, t, a) {
      var i = Ba(), l = Wr.transition;
      try {
        Wr.transition = null, Gn(Fr), qx(e, t, a, i);
      } finally {
        Wr.transition = l, Gn(i);
      }
      return null;
    }
    function qx(e, t, a, i) {
      do
        Wl();
      while (Bu !== null);
      if (iD(), (It & (qr | ji)) !== Cr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (wd(s), l === null)
        return kd(), null;
      if (s === X && T("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = X, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jt;
      var d = yt(l.lanes, l.childLanes);
      Fd(e, d), e === xa && (xa = null, zn = null, Tr = X), ((l.subtreeFlags & Ji) !== Be || (l.flags & Ji) !== Be) && (rc || (rc = !0, $S = a, ZS(Zi, function() {
        return Wl(), null;
      })));
      var v = (l.subtreeFlags & (No | Mo | Ao | Ji)) !== Be, h = (l.flags & (No | Mo | Ao | Ji)) !== Be;
      if (v || h) {
        var S = Wr.transition;
        Wr.transition = null;
        var E = Ba();
        Gn(Fr);
        var L = It;
        It |= ji, FS.current = null, WR(e, l), nT(), lx(e, l, s), ow(e.containerInfo), e.current = l, ps(s), ux(l, e, s), vs(), Sd(), It = L, Gn(E), Wr.transition = S;
      } else
        e.current = l, nT();
      var D = rc;
      if (rc ? (rc = !1, Bu = e, Gp = s) : (Vf = 0, Pm = null), d = e.pendingLanes, d === X && ($f = null), D || hb(e.current, !1), Cd(l.stateNode, i), ia && e.memoizedUpdaters.clear(), xx(), qa(e, er()), t !== null)
        for (var z = e.onRecoverableError, j = 0; j < t.length; j++) {
          var G = t[j], me = G.stack, Ye = G.digest;
          z(G.value, {
            componentStack: me,
            digest: Ye
          });
        }
      if (Fm) {
        Fm = !1;
        var ze = jS;
        throw jS = null, ze;
      }
      return la(Gp, et) && e.tag !== Nu && Wl(), d = e.pendingLanes, la(d, et) ? (Zk(), e === VS ? Yp++ : (Yp = 0, VS = e)) : Yp = 0, Mu(), kd(), null;
    }
    function Wl() {
      if (Bu !== null) {
        var e = Jv(Gp), t = _s(Ha, e), a = Wr.transition, i = Ba();
        try {
          return Wr.transition = null, Gn(t), Xx();
        } finally {
          Gn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function Qx(e) {
      BS.push(e), rc || (rc = !0, ZS(Zi, function() {
        return Wl(), null;
      }));
    }
    function Xx() {
      if (Bu === null)
        return !1;
      var e = $S;
      $S = null;
      var t = Bu, a = Gp;
      if (Bu = null, Gp = X, (It & (qr | ji)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      GS = !0, zm = !1, Cl(a);
      var i = It;
      It |= ji, hx(t.current), fx(t, t.current, a, e);
      {
        var l = BS;
        BS = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          KR(t, d);
        }
      }
      Dd(), hb(t.current, !0), It = i, Mu(), zm ? t === Pm ? Vf++ : (Vf = 0, Pm = t) : Vf = 0, GS = !1, zm = !1, Td(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function db(e) {
      return $f !== null && $f.has(e);
    }
    function Kx(e) {
      $f === null ? $f = /* @__PURE__ */ new Set([e]) : $f.add(e);
    }
    function Jx(e) {
      Fm || (Fm = !0, jS = e);
    }
    var Zx = Jx;
    function pb(e, t, a) {
      var i = ec(a, t), l = cT(e, i, et), s = Uu(e, l, et), d = Da();
      s !== null && (Eu(s, et, d), qa(s, d));
    }
    function vn(e, t, a) {
      if (VR(a), Xp(!1), e.tag === oe) {
        pb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === oe) {
          pb(i, e, a);
          return;
        } else if (i.tag === fe) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !db(s)) {
            var d = ec(a, e), v = mS(i, d, et), h = Uu(i, v, et), S = Da();
            h !== null && (Eu(h, et, S), qa(h, S));
            return;
          }
        }
        i = i.return;
      }
      T(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function eD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Da();
      tf(e, a), sD(e), xa === e && Ll(Tr, a) && (br === Hp || br === Am && _l(Tr) && er() - HS < ZT ? ac(e, X) : Im = yt(Im, a)), qa(e, l);
    }
    function vb(e, t) {
      t === jt && (t = Ax(e));
      var a = Da(), i = Ga(e, t);
      i !== null && (Eu(i, t, a), qa(i, a));
    }
    function tD(e) {
      var t = e.memoizedState, a = jt;
      t !== null && (a = t.retryLane), vb(e, a);
    }
    function nD(e, t) {
      var a = jt, i;
      switch (e.tag) {
        case Pe:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Ne:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), vb(e, a);
    }
    function rD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Lx(e / 1960) * 1960;
    }
    function aD() {
      if (Yp > Nx)
        throw Yp = 0, VS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vf > Mx && (Vf = 0, Pm = null, T("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function iD() {
      uo.flushLegacyContextWarning(), uo.flushPendingUnsafeLifecycleWarnings();
    }
    function hb(e, t) {
      en(e), Vm(e, Oo, wx), t && Vm(e, xi, kx), Vm(e, Oo, Tx), t && Vm(e, xi, bx), pn();
    }
    function Vm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Be ? i = i.child : ((i.flags & t) !== Be && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Gm = null;
    function mb(e) {
      {
        if ((It & qr) !== Cr || !(e.mode & wt))
          return;
        var t = e.tag;
        if (t !== at && t !== oe && t !== fe && t !== ce && t !== pe && t !== Et && t !== Je)
          return;
        var a = rt(e) || "ReactComponent";
        if (Gm !== null) {
          if (Gm.has(a))
            return;
          Gm.add(a);
        } else
          Gm = /* @__PURE__ */ new Set([a]);
        var i = dr;
        try {
          en(e), T("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : pn();
        }
      }
    }
    var XS;
    {
      var oD = null;
      XS = function(e, t, a) {
        var i = wb(oD, t);
        try {
          return _T(e, t, a);
        } catch (s) {
          if (gk() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Jh(), OC(), UT(e, t), wb(t, i), t.mode & Yt && Jg(t), Lo(null, _T, null, e, t, a), Xi()) {
            var l = us();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var yb = !1, KS;
    KS = /* @__PURE__ */ new Set();
    function lD(e) {
      if (Ei && !Xk())
        switch (e.tag) {
          case ce:
          case pe:
          case Je: {
            var t = zn && rt(zn) || "Unknown", a = t;
            if (!KS.has(a)) {
              KS.add(a);
              var i = rt(e) || "Unknown";
              T("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case fe: {
            yb || (T("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), yb = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (ia) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          xs(e, i, t);
        });
      }
    }
    var JS = {};
    function ZS(e, t) {
      {
        var a = yo.current;
        return a !== null ? (a.push(t), JS) : yd(e, t);
      }
    }
    function gb(e) {
      if (e !== JS)
        return Iv(e);
    }
    function Sb() {
      return yo.current !== null;
    }
    function uD(e) {
      {
        if (e.mode & wt) {
          if (!XT())
            return;
        } else if (!_x() || It !== Cr || e.tag !== ce && e.tag !== pe && e.tag !== Je)
          return;
        if (yo.current === null) {
          var t = dr;
          try {
            en(e), T(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, rt(e));
          } finally {
            t ? en(e) : pn();
          }
        }
      }
    }
    function sD(e) {
      e.tag !== Nu && XT() && yo.current === null && T(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Xp(e) {
      nb = e;
    }
    var Bi = null, Gf = null, cD = function(e) {
      Bi = e;
    };
    function Yf(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function eE(e) {
      return Yf(e);
    }
    function tE(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Q,
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
    function Eb(e, t) {
      {
        if (Bi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case fe: {
            typeof i == "function" && (l = !0);
            break;
          }
          case ce: {
            (typeof i == "function" || s === it) && (l = !0);
            break;
          }
          case pe: {
            (s === Q || s === it) && (l = !0);
            break;
          }
          case Et:
          case Je: {
            (s === dt || s === it) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Bi(a);
          if (d !== void 0 && d === Bi(i))
            return !0;
        }
        return !1;
      }
    }
    function Cb(e) {
      {
        if (Bi === null || typeof WeakSet != "function")
          return;
        Gf === null && (Gf = /* @__PURE__ */ new WeakSet()), Gf.add(e);
      }
    }
    var fD = function(e, t) {
      {
        if (Bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wl(), Yl(function() {
          nE(e.current, i, a);
        });
      }
    }, dD = function(e, t) {
      {
        if (e.context !== di)
          return;
        Wl(), Yl(function() {
          Kp(t, e, null, null);
        });
      }
    };
    function nE(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, v = e.type, h = null;
        switch (d) {
          case ce:
          case Je:
          case fe:
            h = v;
            break;
          case pe:
            h = v.render;
            break;
        }
        if (Bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, E = !1;
        if (h !== null) {
          var L = Bi(h);
          L !== void 0 && (a.has(L) ? E = !0 : t.has(L) && (d === fe ? E = !0 : S = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || S) {
          var D = Ga(e, et);
          D !== null && wr(D, e, et, un);
        }
        l !== null && !E && nE(l, t, a), s !== null && nE(s, t, a);
      }
    }
    var pD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return rE(e.current, i, a), a;
      }
    };
    function rE(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, v = null;
        switch (s) {
          case ce:
          case Je:
          case fe:
            v = d;
            break;
          case pe:
            v = d.render;
            break;
        }
        var h = !1;
        v !== null && t.has(v) && (h = !0), h ? vD(e, a) : i !== null && rE(i, t, a), l !== null && rE(l, t, a);
      }
    }
    function vD(e, t) {
      {
        var a = hD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ne:
              t.add(i.stateNode);
              return;
            case we:
              t.add(i.stateNode.containerInfo);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function hD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ne)
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
    var aE;
    {
      aE = !1;
      try {
        var Tb = Object.preventExtensions({});
      } catch {
        aE = !0;
      }
    }
    function mD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Be, this.subtreeFlags = Be, this.deletions = null, this.lanes = X, this.childLanes = X, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !aE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
      return new mD(e, t, a, i);
    };
    function iE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yD(e) {
      return typeof e == "function" && !iE(e) && e.defaultProps === void 0;
    }
    function gD(e) {
      if (typeof e == "function")
        return iE(e) ? fe : ce;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Q)
          return pe;
        if (t === dt)
          return Et;
      }
      return at;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Be, a.subtreeFlags = Be, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case at:
        case ce:
        case Je:
          a.type = Yf(e.type);
          break;
        case fe:
          a.type = eE(e.type);
          break;
        case pe:
          a.type = tE(e.type);
          break;
      }
      return a;
    }
    function SD(e, t) {
      e.flags &= Bn | Tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = X, e.lanes = t, e.child = null, e.subtreeFlags = Be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Be, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ED(e, t, a) {
      var i;
      return e === Bh ? (i = wt, t === !0 && (i |= rn, i |= Wt)) : i = $e, ia && (i |= Yt), pi(oe, null, null, i);
    }
    function oE(e, t, a, i, l, s) {
      var d = at, v = e;
      if (typeof e == "function")
        iE(e) ? (d = fe, v = eE(v)) : v = Yf(v);
      else if (typeof e == "string")
        d = ne;
      else
        e: switch (e) {
          case mi:
            return Gu(a.children, l, s, t);
          case Ja:
            d = Me, l |= rn, (l & wt) !== $e && (l |= Wt);
            break;
          case yi:
            return CD(a, l, s, t);
          case ve:
            return TD(a, l, s, t);
          case Re:
            return bD(a, l, s, t);
          case Nn:
            return bb(a, l, s, t);
          case sn:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          case dn:
          // eslint-disable-next-line no-fallthrough
          case fr:
          // eslint-disable-next-line no-fallthrough
          case bt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  d = Fe;
                  break e;
                case k:
                  d = Rt;
                  break e;
                case Q:
                  d = pe, v = tE(v);
                  break e;
                case dt:
                  d = Et;
                  break e;
                case it:
                  d = ln, v = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? rt(i) : null;
              S && (h += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var E = pi(d, a, t, l);
      return E.elementType = e, E.type = v, E.lanes = s, E._debugOwner = i, E;
    }
    function lE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, v = oE(l, s, d, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function Gu(e, t, a, i) {
      var l = pi(Ke, e, i, t);
      return l.lanes = a, l;
    }
    function CD(e, t, a, i) {
      typeof e.id != "string" && T('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = pi(St, e, i, t | Yt);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function TD(e, t, a, i) {
      var l = pi(Pe, e, i, t);
      return l.elementType = ve, l.lanes = a, l;
    }
    function bD(e, t, a, i) {
      var l = pi(Ne, e, i, t);
      return l.elementType = Re, l.lanes = a, l;
    }
    function bb(e, t, a, i) {
      var l = pi(f, e, i, t);
      l.elementType = Nn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function uE(e, t, a) {
      var i = pi(ke, e, null, t);
      return i.lanes = a, i;
    }
    function wD() {
      var e = pi(ne, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function kD(e) {
      var t = pi(Zt, null, null, $e);
      return t.stateNode = e, t;
    }
    function sE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = pi(we, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function wb(e, t) {
      return e === null && (e = pi(at, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function RD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Vy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jt, this.eventTimes = Rs(X), this.expirationTimes = Rs(un), this.pendingLanes = X, this.suspendedLanes = X, this.pingedLanes = X, this.expiredLanes = X, this.mutableReadLanes = X, this.finishedLanes = X, this.entangledLanes = X, this.entanglements = Rs(X), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < bl; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Bh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Nu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kb(e, t, a, i, l, s, d, v, h, S) {
      var E = new RD(e, t, a, v, h), L = ED(t, s);
      E.current = L, L.stateNode = E;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = D;
      }
      return Tg(L), E;
    }
    var cE = "18.3.1";
    function xD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: cr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var fE, dE;
    fE = !1, dE = {};
    function Rb(e) {
      if (!e)
        return di;
      var t = vu(e), a = sk(t);
      if (t.tag === fe) {
        var i = t.type;
        if (qo(i))
          return ZE(t, i, a);
      }
      return a;
    }
    function DD(e, t) {
      {
        var a = vu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = ra(a);
        if (l === null)
          return null;
        if (l.mode & rn) {
          var s = rt(a) || "Component";
          if (!dE[s]) {
            dE[s] = !0;
            var d = dr;
            try {
              en(l), a.mode & rn ? T("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : T("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? en(d) : pn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function xb(e, t, a, i, l, s, d, v) {
      var h = !1, S = null;
      return kb(e, t, h, S, a, i, l, s, d);
    }
    function Db(e, t, a, i, l, s, d, v, h, S) {
      var E = !0, L = kb(a, i, E, e, l, s, d, v, h);
      L.context = Rb(null);
      var D = L.current, z = Da(), j = $u(D), G = Bl(z, j);
      return G.callback = t ?? null, Uu(D, G, j), Ux(L, j, z), L;
    }
    function Kp(e, t, a, i) {
      Ed(t, e);
      var l = t.current, s = Da(), d = $u(l);
      wn(d);
      var v = Rb(a);
      t.context === null ? t.context = v : t.pendingContext = v, Ei && dr !== null && !fE && (fE = !0, T(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, rt(dr) || "Unknown"));
      var h = Bl(s, d);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && T("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var S = Uu(l, h, d);
      return S !== null && (wr(S, l, d, s), rm(S, l, d)), d;
    }
    function Ym(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ne:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function _D(e) {
      switch (e.tag) {
        case oe: {
          var t = e.stateNode;
          if (rf(t)) {
            var a = Bv(t);
            Px(t, a);
          }
          break;
        }
        case Pe: {
          Yl(function() {
            var l = Ga(e, et);
            if (l !== null) {
              var s = Da();
              wr(l, e, et, s);
            }
          });
          var i = et;
          pE(e, i);
          break;
        }
      }
    }
    function _b(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Wv(a.retryLane, t));
    }
    function pE(e, t) {
      _b(e, t);
      var a = e.alternate;
      a && _b(a, t);
    }
    function LD(e) {
      if (e.tag === Pe) {
        var t = Es, a = Ga(e, t);
        if (a !== null) {
          var i = Da();
          wr(a, e, t, i);
        }
        pE(e, t);
      }
    }
    function OD(e) {
      if (e.tag === Pe) {
        var t = $u(e), a = Ga(e, t);
        if (a !== null) {
          var i = Da();
          wr(a, e, t, i);
        }
        pE(e, t);
      }
    }
    function Lb(e) {
      var t = yn(e);
      return t === null ? null : t.stateNode;
    }
    var Ob = function(e) {
      return null;
    };
    function ND(e) {
      return Ob(e);
    }
    var Nb = function(e) {
      return !1;
    };
    function MD(e) {
      return Nb(e);
    }
    var Mb = null, Ab = null, Ub = null, Ib = null, Fb = null, zb = null, Pb = null, Hb = null, jb = null;
    {
      var Bb = function(e, t, a) {
        var i = t[a], l = Tt(e) ? e.slice() : gt({}, e);
        return a + 1 === t.length ? (Tt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Bb(e[i], t, a + 1), l);
      }, $b = function(e, t) {
        return Bb(e, t, 0);
      }, Vb = function(e, t, a, i) {
        var l = t[i], s = Tt(e) ? e.slice() : gt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], Tt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = Vb(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Gb = function(e, t, a) {
        if (t.length !== a.length) {
          kt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              kt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Vb(e, t, a, 0);
      }, Yb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Tt(e) ? e.slice() : gt({}, e);
        return s[l] = Yb(e[l], t, a + 1, i), s;
      }, Wb = function(e, t, a) {
        return Yb(e, t, 0, a);
      }, vE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Mb = function(e, t, a, i) {
        var l = vE(e, t);
        if (l !== null) {
          var s = Wb(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = gt({}, e.memoizedProps);
          var d = Ga(e, et);
          d !== null && wr(d, e, et, un);
        }
      }, Ab = function(e, t, a) {
        var i = vE(e, t);
        if (i !== null) {
          var l = $b(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = gt({}, e.memoizedProps);
          var s = Ga(e, et);
          s !== null && wr(s, e, et, un);
        }
      }, Ub = function(e, t, a, i) {
        var l = vE(e, t);
        if (l !== null) {
          var s = Gb(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = gt({}, e.memoizedProps);
          var d = Ga(e, et);
          d !== null && wr(d, e, et, un);
        }
      }, Ib = function(e, t, a) {
        e.pendingProps = Wb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, et);
        i !== null && wr(i, e, et, un);
      }, Fb = function(e, t) {
        e.pendingProps = $b(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, et);
        a !== null && wr(a, e, et, un);
      }, zb = function(e, t, a) {
        e.pendingProps = Gb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, et);
        i !== null && wr(i, e, et, un);
      }, Pb = function(e) {
        var t = Ga(e, et);
        t !== null && wr(t, e, et, un);
      }, Hb = function(e) {
        Ob = e;
      }, jb = function(e) {
        Nb = e;
      };
    }
    function AD(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function UD(e) {
      return null;
    }
    function ID() {
      return dr;
    }
    function FD(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return yu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Mb,
        overrideHookStateDeletePath: Ab,
        overrideHookStateRenamePath: Ub,
        overrideProps: Ib,
        overridePropsDeletePath: Fb,
        overridePropsRenamePath: zb,
        setErrorHandler: Hb,
        setSuspenseHandler: jb,
        scheduleUpdate: Pb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: AD,
        findFiberByHostInstance: t || UD,
        // React Refresh
        findHostInstancesForRefresh: pD,
        scheduleRefresh: fD,
        scheduleRoot: dD,
        setRefreshHandler: cD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ID,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cE
      });
    }
    var qb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function hE(e) {
      this._internalRoot = e;
    }
    Wm.prototype.render = hE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? T("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : qm(arguments[1]) ? T("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && T("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Hn) {
          var i = Lb(t.current);
          i && i.parentNode !== a && T("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Kp(e, t, null, null);
    }, Wm.prototype.unmount = hE.prototype.unmount = function() {
      typeof arguments[0] == "function" && T("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ob() && T("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yl(function() {
          Kp(null, e, null, null);
        }), qE(t);
      }
    };
    function zD(e, t) {
      if (!qm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Qb(e);
      var a = !1, i = !1, l = "", s = qb;
      t != null && (t.hydrate ? kt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Mr && T(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = xb(e, Bh, null, a, i, l, s);
      Uh(d.current, e);
      var v = e.nodeType === Hn ? e.parentNode : e;
      return rp(v), new hE(d);
    }
    function Wm(e) {
      this._internalRoot = e;
    }
    function PD(e) {
      e && rh(e);
    }
    Wm.prototype.unstable_scheduleHydration = PD;
    function HD(e, t, a) {
      if (!qm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Qb(e), t === void 0 && T("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, v = "", h = qb;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var S = Db(t, null, e, Bh, i, s, d, v, h);
      if (Uh(S.current, e), rp(e), l)
        for (var E = 0; E < l.length; E++) {
          var L = l[E];
          Vk(S, L);
        }
      return new Wm(S);
    }
    function qm(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Qi || e.nodeType === id));
    }
    function Jp(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Qi || e.nodeType === id || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Qb(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && T("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), vp(e) && (e._reactRootContainer ? T("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : T("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jD = M.ReactCurrentOwner, Xb;
    Xb = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = Lb(e._reactRootContainer.current);
        t && t.parentNode !== e && T("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = mE(e), l = !!(i && Lu(i));
      l && !a && T("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && T("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function mE(e) {
      return e ? e.nodeType === Qi ? e.documentElement : e.firstChild : null;
    }
    function Kb() {
    }
    function BD(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = Ym(d);
            s.call(D);
          };
        }
        var d = Db(
          t,
          i,
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Kb
        );
        e._reactRootContainer = d, Uh(d.current, e);
        var v = e.nodeType === Hn ? e.parentNode : e;
        return rp(v), Yl(), d;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var D = Ym(E);
            S.call(D);
          };
        }
        var E = xb(
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Kb
        );
        e._reactRootContainer = E, Uh(E.current, e);
        var L = e.nodeType === Hn ? e.parentNode : e;
        return rp(L), Yl(function() {
          Kp(t, E, a, i);
        }), E;
      }
    }
    function $D(e, t) {
      e !== null && typeof e != "function" && T("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qm(e, t, a, i, l) {
      Xb(a), $D(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = BD(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var v = l;
          l = function() {
            var h = Ym(d);
            v.call(h);
          };
        }
        Kp(t, d, e, l);
      }
      return Ym(d);
    }
    var Jb = !1;
    function VD(e) {
      {
        Jb || (Jb = !0, T("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = jD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || T("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : DD(e, "findDOMNode");
    }
    function GD(e, t, a) {
      if (T("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vp(t) && t._reactRootContainer === void 0;
        i && T("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qm(null, e, t, !0, a);
    }
    function YD(e, t, a) {
      if (T("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vp(t) && t._reactRootContainer === void 0;
        i && T("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qm(null, e, t, !1, a);
    }
    function WD(e, t, a, i) {
      if (T("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !py(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qm(e, t, a, !1, i);
    }
    var Zb = !1;
    function qD(e) {
      if (Zb || (Zb = !0, T("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Jp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = vp(e) && e._reactRootContainer === void 0;
        t && T("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = mE(e), i = a && !Lu(a);
          i && T("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yl(function() {
          Qm(null, null, e, !1, function() {
            e._reactRootContainer = null, qE(e);
          });
        }), !0;
      } else {
        {
          var l = mE(e), s = !!(l && Lu(l)), d = e.nodeType === ea && Jp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && T("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _r(_D), Cu(LD), Zv(OD), Os(Ba), Hd(Xv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && T("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ec(X0), dy(WS, Hx, Yl);
    function QD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qm(t))
        throw new Error("Target container is not a DOM element.");
      return xD(e, t, null, a);
    }
    function XD(e, t, a, i) {
      return WD(e, t, a, i);
    }
    var yE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lu, bf, Ih, cu, Cc, WS]
    };
    function KD(e, t) {
      return yE.usingClientEntryPoint || T('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zD(e, t);
    }
    function JD(e, t, a) {
      return yE.usingClientEntryPoint || T('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), HD(e, t, a);
    }
    function ZD(e) {
      return ob() && T("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yl(e);
    }
    var e1 = FD({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: cE,
      rendererPackageName: "react-dom"
    });
    if (!e1 && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var e0 = window.location.protocol;
      /^(https?|file):$/.test(e0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (e0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE, Xa.createPortal = QD, Xa.createRoot = KD, Xa.findDOMNode = VD, Xa.flushSync = ZD, Xa.hydrate = GD, Xa.hydrateRoot = JD, Xa.render = YD, Xa.unmountComponentAtNode = qD, Xa.unstable_batchedUpdates = WS, Xa.unstable_renderSubtreeIntoContainer = XD, Xa.version = cE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Xa;
}
var s0;
function c1() {
  if (s0) return Km.exports;
  s0 = 1;
  function B() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B);
      } catch (V) {
        console.error(V);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (B(), Km.exports = u1()) : Km.exports = s1(), Km.exports;
}
var c0;
function f1() {
  if (c0) return qf;
  c0 = 1;
  var B = c1();
  if (process.env.NODE_ENV === "production")
    qf.createRoot = B.createRoot, qf.hydrateRoot = B.hydrateRoot;
  else {
    var V = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    qf.createRoot = function(M, Ze) {
      V.usingClientEntryPoint = !0;
      try {
        return B.createRoot(M, Ze);
      } finally {
        V.usingClientEntryPoint = !1;
      }
    }, qf.hydrateRoot = function(M, Ze, st) {
      V.usingClientEntryPoint = !0;
      try {
        return B.hydrateRoot(M, Ze, st);
      } finally {
        V.usingClientEntryPoint = !1;
      }
    };
  }
  return qf;
}
var d1 = f1(), p1 = Object.defineProperty, v1 = (B, V, M) => V in B ? p1(B, V, { enumerable: !0, configurable: !0, writable: !0, value: M }) : B[V] = M, Zm = (B, V, M) => v1(B, typeof V != "symbol" ? V + "" : V, M);
const h1 = {
  stringify: (B) => B ? "true" : "false",
  parse: (B) => /^[ty1-9]/i.test(B)
}, m1 = {
  stringify: (B) => B.name,
  parse: (B, V, M) => {
    const Ze = (() => {
      if (typeof window < "u" && B in window)
        return window[B];
      if (typeof global < "u" && B in global)
        return global[B];
    })();
    return typeof Ze == "function" ? Ze.bind(M) : void 0;
  }
}, y1 = {
  stringify: (B) => JSON.stringify(B),
  parse: (B) => JSON.parse(B)
};
function g1(B) {
  return B.replace(
    /([a-z0-9])([A-Z])/g,
    (V, M, Ze) => `${M}-${Ze.toLowerCase()}`
  );
}
function m0(B) {
  return B.replace(/[-:]([a-z])/g, (V, M) => `${M.toUpperCase()}`);
}
const S1 = {
  stringify: (B) => B.name,
  parse: (B, V, M) => {
    const Ze = (() => {
      const st = m0(V);
      if (typeof M < "u" && st in M.container)
        return M.container[st];
    })();
    return typeof Ze == "function" ? Ze.bind(M) : void 0;
  }
}, E1 = {
  stringify: (B) => `${B}`,
  parse: (B) => parseFloat(B)
}, C1 = {
  stringify: (B) => B,
  parse: (B) => B
}, EE = {
  string: C1,
  number: E1,
  boolean: h1,
  function: m1,
  method: S1,
  json: y1
}, ev = Symbol.for("r2wc.render"), ey = Symbol.for("r2wc.connected"), lc = Symbol.for("r2wc.context"), hi = Symbol.for("r2wc.props");
function T1(B, V, M) {
  var Ze, st, kt;
  V.props || (V.props = B.propTypes ? Object.keys(B.propTypes) : []), V.events || (V.events = []);
  const T = Array.isArray(V.props) ? V.props.slice() : Object.keys(V.props), Lt = Array.isArray(V.events) ? V.events.slice() : Object.keys(V.events), ce = {}, fe = {}, at = {}, oe = {};
  for (const ne of T) {
    ce[ne] = Array.isArray(V.props) ? "string" : V.props[ne];
    const ke = g1(ne);
    at[ne] = ke, oe[ke] = ne;
  }
  for (const ne of Lt)
    fe[ne] = Array.isArray(V.events) ? {} : V.events[ne];
  class we extends HTMLElement {
    constructor() {
      super(), Zm(this, kt, !0), Zm(this, st), Zm(this, Ze, {}), Zm(this, "container"), V.shadow ? this.container = this.attachShadow({
        mode: V.shadow
      }) : this.container = this, this[hi].container = this.container;
      for (const ke of T) {
        const Ke = at[ke], Me = this.getAttribute(Ke), Rt = ce[ke], Fe = Rt ? EE[Rt] : null;
        if (Rt === "method") {
          const pe = m0(Ke);
          Object.defineProperty(this[hi].container, pe, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[hi][pe];
            },
            set(St) {
              this[hi][pe] = St, this[ev]();
            }
          }), this[hi][ke] = Fe.parse(Me, Ke, this);
        }
        Fe != null && Fe.parse && Me && (this[hi][ke] = Fe.parse(Me, Ke, this));
      }
      for (const ke of Lt)
        this[hi][ke] = (Ke) => {
          const Me = ke.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Me, { detail: Ke, ...fe[ke] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(oe);
    }
    connectedCallback() {
      this[ey] = !0, this[ev]();
    }
    disconnectedCallback() {
      this[ey] = !1, this[lc] && M.unmount(this[lc]), delete this[lc];
    }
    attributeChangedCallback(ke, Ke, Me) {
      const Rt = oe[ke], Fe = ce[Rt], pe = Fe ? EE[Fe] : null;
      Rt in ce && pe != null && pe.parse && Me && (this[hi][Rt] = pe.parse(Me, ke, this), this[ev]());
    }
    [(kt = ey, st = lc, Ze = hi, ev)]() {
      this[ey] && (this[lc] ? M.update(this[lc], this[hi]) : this[lc] = M.mount(
        this.container,
        B,
        this[hi]
      ));
    }
  }
  for (const ne of T) {
    const ke = at[ne], Ke = ce[ne];
    Object.defineProperty(we.prototype, ne, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[hi][ne];
      },
      set(Me) {
        this[hi][ne] = Me;
        const Rt = Ke ? EE[Ke] : null;
        if (Rt != null && Rt.stringify) {
          const Fe = Rt.stringify(Me, ke, this);
          this.getAttribute(ke) !== Fe && this.setAttribute(ke, Fe);
        } else
          this[ev]();
      }
    });
  }
  return we;
}
function b1(B, V, M) {
  const Ze = d1.createRoot(B), st = v0.createElement(V, M);
  return Ze.render(st), {
    root: Ze,
    ReactComponent: V
  };
}
function w1({ root: B, ReactComponent: V }, M) {
  const Ze = v0.createElement(V, M);
  B.render(Ze);
}
function k1({ root: B }) {
  B.unmount();
}
function R1(B, V = {}) {
  return T1(B, V, { mount: b1, update: w1, unmount: k1 });
}
var ty = { exports: {} }, tv = {};
var f0;
function x1() {
  if (f0) return tv;
  f0 = 1;
  var B = av(), V = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Ze = Object.prototype.hasOwnProperty, st = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, kt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(Lt, ce, fe) {
    var at, oe = {}, we = null, ne = null;
    fe !== void 0 && (we = "" + fe), ce.key !== void 0 && (we = "" + ce.key), ce.ref !== void 0 && (ne = ce.ref);
    for (at in ce) Ze.call(ce, at) && !kt.hasOwnProperty(at) && (oe[at] = ce[at]);
    if (Lt && Lt.defaultProps) for (at in ce = Lt.defaultProps, ce) oe[at] === void 0 && (oe[at] = ce[at]);
    return { $$typeof: V, type: Lt, key: we, ref: ne, props: oe, _owner: st.current };
  }
  return tv.Fragment = M, tv.jsx = T, tv.jsxs = T, tv;
}
var nv = {};
var d0;
function D1() {
  return d0 || (d0 = 1, process.env.NODE_ENV !== "production" && (function() {
    var B = av(), V = Symbol.for("react.element"), M = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), st = Symbol.for("react.strict_mode"), kt = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), Lt = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), ke = Symbol.iterator, Ke = "@@iterator";
    function Me(k) {
      if (k === null || typeof k != "object")
        return null;
      var Q = ke && k[ke] || k[Ke];
      return typeof Q == "function" ? Q : null;
    }
    var Rt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Fe(k) {
      {
        for (var Q = arguments.length, ve = new Array(Q > 1 ? Q - 1 : 0), Re = 1; Re < Q; Re++)
          ve[Re - 1] = arguments[Re];
        pe("error", k, ve);
      }
    }
    function pe(k, Q, ve) {
      {
        var Re = Rt.ReactDebugCurrentFrame, dt = Re.getStackAddendum();
        dt !== "" && (Q += "%s", ve = ve.concat([dt]));
        var it = ve.map(function(xt) {
          return String(xt);
        });
        it.unshift("Warning: " + Q), Function.prototype.apply.call(console[k], console, it);
      }
    }
    var St = !1, Pe = !1, Et = !1, Je = !1, ln = !1, Bt;
    Bt = Symbol.for("react.module.reference");
    function Zt(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === Ze || k === kt || ln || k === st || k === fe || k === at || Je || k === ne || St || Pe || Et || typeof k == "object" && k !== null && (k.$$typeof === we || k.$$typeof === oe || k.$$typeof === T || k.$$typeof === Lt || k.$$typeof === ce || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Bt || k.getModuleId !== void 0));
    }
    function Ne(k, Q, ve) {
      var Re = k.displayName;
      if (Re)
        return Re;
      var dt = Q.displayName || Q.name || "";
      return dt !== "" ? ve + "(" + dt + ")" : ve;
    }
    function Ct(k) {
      return k.displayName || "Context";
    }
    function f(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && Fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case Ze:
          return "Fragment";
        case M:
          return "Portal";
        case kt:
          return "Profiler";
        case st:
          return "StrictMode";
        case fe:
          return "Suspense";
        case at:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case Lt:
            var Q = k;
            return Ct(Q) + ".Consumer";
          case T:
            var ve = k;
            return Ct(ve._context) + ".Provider";
          case ce:
            return Ne(k, k.render, "ForwardRef");
          case oe:
            var Re = k.displayName || null;
            return Re !== null ? Re : f(k.type) || "Memo";
          case we: {
            var dt = k, it = dt._payload, xt = dt._init;
            try {
              return f(xt(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Mt = Object.assign, _t = 0, zt, De, re, Ae, ue, O, W;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (_t === 0) {
          zt = console.log, De = console.info, re = console.warn, Ae = console.error, ue = console.group, O = console.groupCollapsed, W = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        _t++;
      }
    }
    function vt() {
      {
        if (_t--, _t === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, k, {
              value: zt
            }),
            info: Mt({}, k, {
              value: De
            }),
            warn: Mt({}, k, {
              value: re
            }),
            error: Mt({}, k, {
              value: Ae
            }),
            group: Mt({}, k, {
              value: ue
            }),
            groupCollapsed: Mt({}, k, {
              value: O
            }),
            groupEnd: Mt({}, k, {
              value: W
            })
          });
        }
        _t < 0 && Fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = Rt.ReactCurrentDispatcher, lt;
    function ft(k, Q, ve) {
      {
        if (lt === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Re = dt.stack.trim().match(/\n( *(at )?)/);
            lt = Re && Re[1] || "";
          }
        return `
` + lt + k;
      }
    }
    var ht = !1, $t;
    {
      var Sn = typeof WeakMap == "function" ? WeakMap : Map;
      $t = new Sn();
    }
    function rr(k, Q) {
      if (!k || ht)
        return "";
      {
        var ve = $t.get(k);
        if (ve !== void 0)
          return ve;
      }
      var Re;
      ht = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = ct.current, ct.current = null, Ve();
      try {
        if (Q) {
          var xt = function() {
            throw Error();
          };
          if (Object.defineProperty(xt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xt, []);
            } catch (pt) {
              Re = pt;
            }
            Reflect.construct(k, [], xt);
          } else {
            try {
              xt.call();
            } catch (pt) {
              Re = pt;
            }
            k.call(xt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            Re = pt;
          }
          k();
        }
      } catch (pt) {
        if (pt && Re && typeof pt.stack == "string") {
          for (var bt = pt.stack.split(`
`), Nn = Re.stack.split(`
`), sn = bt.length - 1, dn = Nn.length - 1; sn >= 1 && dn >= 0 && bt[sn] !== Nn[dn]; )
            dn--;
          for (; sn >= 1 && dn >= 0; sn--, dn--)
            if (bt[sn] !== Nn[dn]) {
              if (sn !== 1 || dn !== 1)
                do
                  if (sn--, dn--, dn < 0 || bt[sn] !== Nn[dn]) {
                    var fr = `
` + bt[sn].replace(" at new ", " at ");
                    return k.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", k.displayName)), typeof k == "function" && $t.set(k, fr), fr;
                  }
                while (sn >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        ht = !1, ct.current = it, vt(), Error.prepareStackTrace = dt;
      }
      var Za = k ? k.displayName || k.name : "", ei = Za ? ft(Za) : "";
      return typeof k == "function" && $t.set(k, ei), ei;
    }
    function hn(k, Q, ve) {
      return rr(k, !1);
    }
    function Qn(k) {
      var Q = k.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Rn(k, Q, ve) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return rr(k, Qn(k));
      if (typeof k == "string")
        return ft(k);
      switch (k) {
        case fe:
          return ft("Suspense");
        case at:
          return ft("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case ce:
            return hn(k.render);
          case oe:
            return Rn(k.type, Q, ve);
          case we: {
            var Re = k, dt = Re._payload, it = Re._init;
            try {
              return Rn(it(dt), Q, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var xn = Object.prototype.hasOwnProperty, sr = {}, ma = Rt.ReactDebugCurrentFrame;
    function kr(k) {
      if (k) {
        var Q = k._owner, ve = Rn(k.type, k._source, Q ? Q.type : null);
        ma.setExtraStackFrame(ve);
      } else
        ma.setExtraStackFrame(null);
    }
    function On(k, Q, ve, Re, dt) {
      {
        var it = Function.call.bind(xn);
        for (var xt in k)
          if (it(k, xt)) {
            var bt = void 0;
            try {
              if (typeof k[xt] != "function") {
                var Nn = Error((Re || "React class") + ": " + ve + " type `" + xt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[xt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              bt = k[xt](Q, xt, Re, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (sn) {
              bt = sn;
            }
            bt && !(bt instanceof Error) && (kr(dt), Fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Re || "React class", ve, xt, typeof bt), kr(null)), bt instanceof Error && !(bt.message in sr) && (sr[bt.message] = !0, kr(dt), Fe("Failed %s type: %s", ve, bt.message), kr(null));
          }
      }
    }
    var mn = Array.isArray;
    function Dn(k) {
      return mn(k);
    }
    function Xn(k) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ve = Q && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return ve;
      }
    }
    function Kr(k) {
      try {
        return En(k), !1;
      } catch {
        return !0;
      }
    }
    function En(k) {
      return "" + k;
    }
    function Kn(k) {
      if (Kr(k))
        return Fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(k)), En(k);
    }
    var Rr = Rt.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ya, le;
    function Ue(k) {
      if (xn.call(k, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function m(k) {
      if (xn.call(k, "key")) {
        var Q = Object.getOwnPropertyDescriptor(k, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function C(k, Q) {
      typeof k.ref == "string" && Rr.current;
    }
    function R(k, Q) {
      {
        var ve = function() {
          ya || (ya = !0, Fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function F(k, Q) {
      {
        var ve = function() {
          le || (le = !0, Fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ve.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var ie = function(k, Q, ve, Re, dt, it, xt) {
      var bt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: V,
        // Built-in properties that belong on the element
        type: k,
        key: Q,
        ref: ve,
        props: xt,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return bt._store = {}, Object.defineProperty(bt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(bt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.defineProperty(bt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(bt.props), Object.freeze(bt)), bt;
    };
    function ge(k, Q, ve, Re, dt) {
      {
        var it, xt = {}, bt = null, Nn = null;
        ve !== void 0 && (Kn(ve), bt = "" + ve), m(Q) && (Kn(Q.key), bt = "" + Q.key), Ue(Q) && (Nn = Q.ref, C(Q, dt));
        for (it in Q)
          xn.call(Q, it) && !Jr.hasOwnProperty(it) && (xt[it] = Q[it]);
        if (k && k.defaultProps) {
          var sn = k.defaultProps;
          for (it in sn)
            xt[it] === void 0 && (xt[it] = sn[it]);
        }
        if (bt || Nn) {
          var dn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          bt && R(xt, dn), Nn && F(xt, dn);
        }
        return ie(k, bt, Nn, dt, Re, Rr.current, xt);
      }
    }
    var je = Rt.ReactCurrentOwner, xe = Rt.ReactDebugCurrentFrame;
    function mt(k) {
      if (k) {
        var Q = k._owner, ve = Rn(k.type, k._source, Q ? Q.type : null);
        xe.setExtraStackFrame(ve);
      } else
        xe.setExtraStackFrame(null);
    }
    var _n;
    _n = !1;
    function Vt(k) {
      return typeof k == "object" && k !== null && k.$$typeof === V;
    }
    function Pn() {
      {
        if (je.current) {
          var k = f(je.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Or(k) {
      return "";
    }
    var Ka = {};
    function ga(k) {
      {
        var Q = Pn();
        if (!Q) {
          var ve = typeof k == "string" ? k : k.displayName || k.name;
          ve && (Q = `

Check the top-level render call using <` + ve + ">.");
        }
        return Q;
      }
    }
    function $i(k, Q) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var ve = ga(Q);
        if (Ka[ve])
          return;
        Ka[ve] = !0;
        var Re = "";
        k && k._owner && k._owner !== je.current && (Re = " It was passed a child from " + f(k._owner.type) + "."), mt(k), Fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, Re), mt(null);
      }
    }
    function go(k, Q) {
      {
        if (typeof k != "object")
          return;
        if (Dn(k))
          for (var ve = 0; ve < k.length; ve++) {
            var Re = k[ve];
            Vt(Re) && $i(Re, Q);
          }
        else if (Vt(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var dt = Me(k);
          if (typeof dt == "function" && dt !== k.entries)
            for (var it = dt.call(k), xt; !(xt = it.next()).done; )
              Vt(xt.value) && $i(xt.value, Q);
        }
      }
    }
    function rl(k) {
      {
        var Q = k.type;
        if (Q == null || typeof Q == "string")
          return;
        var ve;
        if (typeof Q == "function")
          ve = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ce || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === oe))
          ve = Q.propTypes;
        else
          return;
        if (ve) {
          var Re = f(Q);
          On(ve, k.props, "prop", Re, k);
        } else if (Q.PropTypes !== void 0 && !_n) {
          _n = !0;
          var dt = f(Q);
          Fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && Fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(k) {
      {
        for (var Q = Object.keys(k.props), ve = 0; ve < Q.length; ve++) {
          var Re = Q[ve];
          if (Re !== "children" && Re !== "key") {
            mt(k), Fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Re), mt(null);
            break;
          }
        }
        k.ref !== null && (mt(k), Fe("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var Mr = {};
    function cr(k, Q, ve, Re, dt, it) {
      {
        var xt = Zt(k);
        if (!xt) {
          var bt = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (bt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Or();
          Nn ? bt += Nn : bt += Pn();
          var sn;
          k === null ? sn = "null" : Dn(k) ? sn = "array" : k !== void 0 && k.$$typeof === V ? (sn = "<" + (f(k.type) || "Unknown") + " />", bt = " Did you accidentally export a JSX literal instead of a component?") : sn = typeof k, Fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", sn, bt);
        }
        var dn = ge(k, Q, ve, dt, it);
        if (dn == null)
          return dn;
        if (xt) {
          var fr = Q.children;
          if (fr !== void 0)
            if (Re)
              if (Dn(fr)) {
                for (var Za = 0; Za < fr.length; Za++)
                  go(fr[Za], k);
                Object.freeze && Object.freeze(fr);
              } else
                Fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(fr, k);
        }
        if (xn.call(Q, "key")) {
          var ei = f(k), pt = Object.keys(Q).filter(function(al) {
            return al !== "key";
          }), gt = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mr[ei + gt]) {
            var ti = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            Fe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, ei, ti, ei), Mr[ei + gt] = !0;
          }
        }
        return k === Ze ? Nr(dn) : rl(dn), dn;
      }
    }
    function mi(k, Q, ve) {
      return cr(k, Q, ve, !0);
    }
    function Ja(k, Q, ve) {
      return cr(k, Q, ve, !1);
    }
    var yi = Ja, gi = mi;
    nv.Fragment = Ze, nv.jsx = yi, nv.jsxs = gi;
  })()), nv;
}
var p0;
function _1() {
  return p0 || (p0 = 1, process.env.NODE_ENV === "production" ? ty.exports = x1() : ty.exports = D1()), ty.exports;
}
var ye = _1();
const L1 = ({ theme: B = "light" }) => {
  const [V, M] = Xr.useState([]), [Ze, st] = Xr.useState(!1), [kt, T] = Xr.useState(!1), [Lt, ce] = Xr.useState(null), [fe, at] = Xr.useState(!1), [oe, we] = Xr.useState(0), [ne, ke] = Xr.useState([]), [Ke, Me] = Xr.useState([]);
  Xr.useRef(null);
  const Rt = Xr.useRef(null), Fe = Xr.useRef(null), pe = B === "dark", St = {
    display: "flex",
    height: "100vh",
    backgroundColor: pe ? "#1a1a1a" : "#f5f5f5",
    color: pe ? "#ffffff" : "#333333",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden"
  }, Pe = {
    width: "280px",
    backgroundColor: pe ? "#2d2d2d" : "#ffffff",
    borderRight: `1px solid ${pe ? "#444" : "#e0e0e0"}`,
    overflowY: "auto",
    padding: "20px",
    boxSizing: "border-box"
  }, Et = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }, Je = {
    padding: "20px",
    backgroundColor: pe ? "#2d2d2d" : "#ffffff",
    borderBottom: `1px solid ${pe ? "#444" : "#e0e0e0"}`
  }, ln = {
    padding: "20px",
    backgroundColor: pe ? "#2d2d2d" : "#ffffff",
    borderBottom: `1px solid ${pe ? "#444" : "#e0e0e0"}`,
    overflowY: "auto",
    maxHeight: "40vh"
  }, Bt = {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
    fontSize: "12px",
    fontFamily: "monospace",
    backgroundColor: pe ? "#1a1a1a" : "#f8f9fa"
  }, Zt = {
    padding: "12px 20px",
    backgroundColor: pe ? "#252525" : "#e9ecef",
    borderBottom: `1px solid ${pe ? "#444" : "#dee2e6"}`,
    fontSize: "14px",
    fontWeight: "600",
    color: pe ? "#9ca3af" : "#495057"
  }, Ne = {
    padding: "10px 16px",
    margin: "5px 0",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    transition: "background-color 0.2s",
    width: "100%",
    textAlign: "left"
  }, Ct = {
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
    color: pe ? "#60a5fa" : "#007bff"
  }, f = (m) => {
    M((C) => [
      ...C,
      `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${m}`
    ]);
  }, Mt = () => {
    M([]);
  }, _t = (m, C) => {
    ke((R) => {
      const F = [...R];
      return F[m] = { ...F[m], ...C }, F;
    });
  }, zt = () => {
    ke([
      "Basic DOM Manipulation",
      "Document Body Access",
      "Custom Element Registration",
      "insertBefore()",
      "replaceChild()",
      "cloneNode()",
      "DocumentFragment",
      "innerHTML",
      "Event Listeners",
      "Shadow DOM",
      "localStorage",
      "sessionStorage",
      "IndexedDB",
      "XMLHttpRequest",
      "Fetch API",
      "Blob API",
      "Local Network Access",
      "Cookie Access & Cross-Site",
      "Iframe Sandbox Detection",
      "React Internal Processing",
      "Parent Window Access",
      "Basic Popup Creation",
      "Popup to Parent Window Access",
      "Popup to Parent Comprehensive",
      "Popup Sandbox Escape Detection",
      "Popup to Parent Cookie Access",
      "Popup to Parent LocalStorage",
      "Popup to Parent SessionStorage",
      "Popup to Parent IndexedDB",
      "Popup to Parent XMLHttpRequest",
      "Popup to Parent Fetch API",
      "Popup to Parent WebSocket",
      "Popup to Parent Service Worker"
    ].map((C) => ({ name: C, status: "pending" })));
  };
  Xr.useEffect(() => {
    Rt.current?.scrollIntoView({ behavior: "smooth" });
  }, [V]);
  const De = async () => {
    if (fe) return;
    at(!0), we(0), Mt(), zt(), f("═══════════════════════════════════════════════════════"), f("🔄 RUNNING ALL TESTS"), f("═══════════════════════════════════════════════════════"), f("⚡ Running comprehensive DOM API test suite..."), f("-----------------------------------------------------------");
    const m = [
      { name: "Basic DOM Manipulation", fn: re },
      { name: "Document Body Access", fn: Ae },
      {
        name: "Custom Element Registration",
        fn: ue
      },
      { name: "insertBefore()", fn: O },
      { name: "replaceChild()", fn: W },
      { name: "cloneNode()", fn: qe },
      { name: "DocumentFragment", fn: Ve },
      { name: "innerHTML", fn: vt },
      { name: "Event Listeners", fn: ct },
      { name: "Shadow DOM", fn: lt },
      { name: "localStorage", fn: ft },
      { name: "sessionStorage", fn: ht },
      { name: "IndexedDB", fn: $t },
      { name: "XMLHttpRequest", fn: Sn },
      { name: "Fetch API", fn: rr },
      { name: "Blob API", fn: hn },
      { name: "Local Network Access", fn: Rn },
      { name: "Cookie Access & Cross-Site", fn: xn },
      { name: "Iframe Sandbox Detection", fn: sr },
      { name: "React Internal Processing", fn: ma },
      { name: "Parent Window Access", fn: kr },
      { name: "Basic Popup Creation", fn: On },
      {
        name: "Popup to Parent Window Access",
        fn: mn
      },
      {
        name: "Popup to Parent Comprehensive",
        fn: Dn
      },
      {
        name: "Popup Sandbox Escape Detection",
        fn: Xn
      },
      {
        name: "Popup to Parent Cookie Access",
        fn: Kr
      },
      {
        name: "Popup to Parent LocalStorage",
        fn: En
      },
      {
        name: "Popup to Parent SessionStorage",
        fn: Kn
      },
      { name: "Popup to Parent IndexedDB", fn: Rr },
      {
        name: "Popup to Parent XMLHttpRequest",
        fn: Jr
      },
      { name: "Popup to Parent Fetch API", fn: ya },
      { name: "Popup to Parent WebSocket", fn: le },
      {
        name: "Popup to Parent Service Worker",
        fn: Ue
      }
    ];
    for (let C = 0; C < m.length; C++) {
      we(C + 1), _t(C, { status: "running" }), f(`
▶️  TEST ${C + 1}/${m.length}: ${m[C].name}...`), await new Promise((ge) => setTimeout(ge, 100));
      const R = m[C].fn;
      if (m[C].name.toLowerCase().includes("popup")) {
        f("⚠ SKIPPED: Popup tests require manual interaction"), _t(C, {
          status: "skipped"
        });
        continue;
      }
      const ie = await (async () => {
        try {
          return await R();
        } catch {
          return { passed: !1, errors: 1, warnings: 0 };
        }
      })();
      await new Promise((ge) => setTimeout(ge, 500)), ie ? _t(C, {
        status: ie.passed ? "passed" : "failed",
        errors: ie.errors || 0,
        warnings: ie.warnings || 0
      }) : _t(C, { status: "passed" });
    }
    f(`
═══════════════════════════════════════════════════════`), f(`✅ COMPLETED ALL TESTS (${m.length}/${m.length})`), f("═══════════════════════════════════════════════════════"), at(!1), we(0);
  };
  Xr.useEffect(() => {
    Ze || (st(!0), setTimeout(() => {
      De();
    }, 500));
  }, [Ze]);
  const re = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: document.createElement()...");
      const C = document.createElement("div");
      C.id = "test-element-" + Date.now(), C.textContent = "Test Element", C.style.cssText = "padding: 10px; background: #e7f3ff; margin: 5px; border-radius: 4px;", f("✓ SUCCESS: document.createElement() worked"), f("⚠ TESTING: appendChild()..."), m.appendChild(C), f(`✓ SUCCESS: appendChild() worked - element ID: ${C.id}`), f("⚠ TESTING: querySelector()...");
      const R = document.querySelector(`#${C.id}`);
      f(R ? "✓ SUCCESS: querySelector() found element" : "✗ FAILED: querySelector() could not find element"), f("⚠ TESTING: removeChild()..."), m.removeChild(C), f("✓ SUCCESS: removeChild() worked");
      const F = document.querySelector(`#${C.id}`);
      f(F ? "✗ FAILED: Element still exists after removeChild" : "✓ SUCCESS: Element successfully removed from DOM");
    } catch (m) {
      f(`✗ FAILED: DOM Manipulation - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, Ae = () => {
    try {
      if (f("⚠ TESTING: document.body access..."), !document.body) {
        f("✗ FAILED: document.body is null or undefined");
        return;
      }
      if (f("✓ SUCCESS: document.body is accessible"), f("⚠ TESTING: document.body.appendChild property..."), typeof document.body.appendChild != "function") {
        f(
          `✗ FAILED: document.body.appendChild is not a function: ${typeof document.body.appendChild}`
        );
        return;
      }
      f("✓ SUCCESS: document.body.appendChild is a function"), f("⚠ TESTING: Reading body properties...");
      const m = document.body.className, C = document.body.id;
      f(
        `✓ SUCCESS: body.className='${m}', body.id='${C}'`
      ), f("⚠ TESTING: Modifying body attributes...");
      const R = document.body.getAttribute("data-test");
      document.body.setAttribute("data-test", "dom-test-" + Date.now());
      const F = document.body.getAttribute("data-test");
      f(
        `✓ SUCCESS: setAttribute worked - old='${R}', new='${F}'`
      ), R ? document.body.setAttribute("data-test", R) : document.body.removeAttribute("data-test");
    } catch (m) {
      f(`✗ FAILED: Document Body Access - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, ue = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: Custom Element registration...");
      const C = `test-element-${Date.now()}`;
      class R extends HTMLElement {
        constructor() {
          super(), this.textContent = "Custom Element Works!";
        }
      }
      customElements.define(C, R), f(`✓ SUCCESS: customElements.define() for '${C}'`), f("⚠ TESTING: Creating custom element..."), f("  🎯 This is line 365 where the error occurs");
      let F;
      try {
        F = document.createElement(C), f("✓ SUCCESS: Created custom element");
      } catch (ie) {
        f(`✗ FAILED: Element creation blocked - ${ie.message}`), f("  🎯 This is the EXACT error at line 365!"), f("  🚫 IFRAME SANDBOX: Blocks custom element creation"), f("  💡 SOLUTION: Add 'allow-same-origin' to iframe sandbox");
        return;
      }
      f("⚠ TESTING: Appending custom element to DOM..."), F.style.cssText = "display: block; padding: 10px; background: #d4edda; margin: 5px; border-radius: 4px;", m.appendChild(F), f("✓ SUCCESS: Custom element added to DOM"), setTimeout(() => {
        try {
          m.removeChild(F), f("🧹 CLEANUP: Removed custom element from DOM");
        } catch {
        }
      }, 3e3), f(
        "⚠ NOTE: If you see console errors after this test, they indicate"
      ), f(
        "  iframe sandbox restrictions. The test succeeded, but React's"
      ), f(
        "  internal processing may fail due to missing 'allow-same-origin'."
      );
    } catch (m) {
      f(`✗ FAILED: Custom Element Registration - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`), (m.message.includes("The result must not have children") || m.message.includes("NotSupportedError")) && (f(
        "⚠ IFRAME SANDBOX ISSUE: This error indicates the iframe is running"
      ), f(
        "  in a sandboxed environment without 'allow-same-origin' permission."
      ), f("  Custom element registration requires same-origin access."), f(
        "  Solution: Add 'allow-same-origin' to the iframe sandbox attribute."
      ));
    }
  }, O = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: insertBefore()...");
      const C = document.createElement("div");
      C.id = "insert-test-container-" + Date.now(), C.style.cssText = "padding: 10px; background: #fff3cd; margin: 5px; border-radius: 4px;";
      const R = document.createElement("div");
      R.textContent = "First Child", R.style.cssText = "padding: 5px; background: #ffeeba; margin: 2px;";
      const F = document.createElement("div");
      F.textContent = "Second Child (inserted before first)", F.style.cssText = "padding: 5px; background: #ffc107; margin: 2px;", C.appendChild(R), f("✓ SUCCESS: Added first child to container"), C.insertBefore(F, R), f("✓ SUCCESS: insertBefore() worked"), m.appendChild(C), f(`✓ SUCCESS: Container added to DOM with ID: ${C.id}`), C.children[0] === F && C.children[1] === R ? f(
        "✓ SUCCESS: Children are in correct order (second before first)"
      ) : f("✗ FAILED: Children order is incorrect"), setTimeout(() => {
        try {
          m.removeChild(C), f("🧹 CLEANUP: Removed insertBefore test container");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: insertBefore test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, W = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: replaceChild()...");
      const C = document.createElement("div");
      C.id = "replace-test-container-" + Date.now(), C.style.cssText = "padding: 10px; background: #d1ecf1; margin: 5px; border-radius: 4px;";
      const R = document.createElement("div");
      R.textContent = "Old Child (will be replaced)", R.style.cssText = "padding: 5px; background: #bee5eb; margin: 2px;";
      const F = document.createElement("div");
      F.textContent = "New Child (replacement)", F.style.cssText = "padding: 5px; background: #17a2b8; color: white; margin: 2px;", C.appendChild(R), m.appendChild(C), f("✓ SUCCESS: Added container with old child to DOM"), C.replaceChild(F, R), f("✓ SUCCESS: replaceChild() worked"), C.children[0] === F && !C.contains(R) ? f("✓ SUCCESS: Old child replaced with new child correctly") : f("✗ FAILED: replaceChild did not work correctly"), setTimeout(() => {
        try {
          m.removeChild(C), f("🧹 CLEANUP: Removed replaceChild test container");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: replaceChild test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, qe = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: cloneNode()...");
      const C = document.createElement("div");
      C.id = "original-" + Date.now(), C.className = "test-class", C.setAttribute("data-test", "original"), C.textContent = "Original Element", C.style.cssText = "padding: 10px; background: #f8d7da; margin: 5px; border-radius: 4px;";
      const R = document.createElement("span");
      R.textContent = " (with child)", C.appendChild(R), f("✓ SUCCESS: Created original element with child"), f("⚠ TESTING: cloneNode(false) - shallow clone...");
      const F = C.cloneNode(!1);
      F.id = "shallow-clone-" + Date.now(), f(
        `✓ SUCCESS: Shallow clone created, has ${F.children.length} children (should be 0)`
      ), f("⚠ TESTING: cloneNode(true) - deep clone...");
      const ie = C.cloneNode(!0);
      ie.id = "deep-clone-" + Date.now(), f(
        `✓ SUCCESS: Deep clone created, has ${ie.children.length} children (should be 1)`
      );
      const ge = document.createElement("div");
      ge.id = "clone-test-container-" + Date.now(), ge.style.cssText = "padding: 10px; background: #f5c6cb; margin: 5px; border-radius: 4px;", ge.appendChild(C), ge.appendChild(F), ge.appendChild(ie), m.appendChild(ge), f("✓ SUCCESS: All clones added to DOM"), setTimeout(() => {
        try {
          m.removeChild(ge), f("🧹 CLEANUP: Removed cloneNode test container");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: cloneNode test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, Ve = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: createDocumentFragment()...");
      const C = document.createDocumentFragment();
      f("✓ SUCCESS: createDocumentFragment() worked"), f("⚠ TESTING: Adding elements to fragment...");
      for (let F = 0; F < 5; F++) {
        const ie = document.createElement("div");
        ie.textContent = `Fragment Item ${F + 1}`, ie.style.cssText = "padding: 5px; background: #cce5ff; margin: 2px; border-radius: 4px;", C.appendChild(ie);
      }
      f("✓ SUCCESS: Added 5 elements to document fragment"), f("⚠ TESTING: Appending fragment to DOM...");
      const R = document.createElement("div");
      R.id = "fragment-test-container-" + Date.now(), R.style.cssText = "padding: 10px; background: #b8daff; margin: 5px; border-radius: 4px;", R.appendChild(C), m.appendChild(R), f(
        `✓ SUCCESS: Fragment appended to DOM, container has ${R.children.length} children`
      ), setTimeout(() => {
        try {
          m.removeChild(R), f("🧹 CLEANUP: Removed fragment test container");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: DocumentFragment test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, vt = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: innerHTML property...");
      const C = document.createElement("div");
      C.id = "innerhtml-test-container-" + Date.now(), C.style.cssText = "padding: 10px; background: #d6d8db; margin: 5px; border-radius: 4px;", f("⚠ TESTING: Setting innerHTML..."), C.innerHTML = `
        <div style="padding: 5px; background: #c3c5c7; margin: 2px; border-radius: 4px;">
          <strong>innerHTML Test</strong>
          <p>This was created via innerHTML</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      `, f("✓ SUCCESS: innerHTML set successfully"), m.appendChild(C), f("✓ SUCCESS: Container with innerHTML added to DOM"), f("⚠ TESTING: Reading innerHTML...");
      const R = C.innerHTML;
      f(
        `✓ SUCCESS: Read ${R.length} characters from innerHTML`
      ), setTimeout(() => {
        try {
          m.removeChild(C), f("🧹 CLEANUP: Removed innerHTML test container");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: innerHTML test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, ct = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: Event listeners on created elements...");
      const C = document.createElement("button");
      C.id = "event-test-button-" + Date.now(), C.textContent = "Click Me (auto-clicks in 1s)", C.style.cssText = "padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; margin: 5px; cursor: pointer;";
      let R = !1;
      C.addEventListener("click", () => {
        R = !0, C.textContent = "✓ Clicked!", C.style.background = "#218838", f("✓ SUCCESS: Event listener fired on created element");
      }), f("✓ SUCCESS: addEventListener() worked"), m.appendChild(C), f("✓ SUCCESS: Button with event listener added to DOM"), setTimeout(() => {
        C.click(), f(R ? "✓ SUCCESS: Programmatic click() worked" : "✗ FAILED: Click event did not fire"), setTimeout(() => {
          try {
            m.removeChild(C), f("🧹 CLEANUP: Removed event test button");
          } catch {
          }
        }, 2e3);
      }, 1e3);
    } catch (m) {
      f(`✗ FAILED: Event listener test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, lt = () => {
    try {
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f("⚠ TESTING: Shadow DOM (attachShadow)...");
      const C = document.createElement("div");
      C.id = "shadow-host-" + Date.now(), C.style.cssText = "padding: 10px; background: #e2e3e5; margin: 5px; border-radius: 4px;";
      const R = C.attachShadow({ mode: "open" });
      f("✓ SUCCESS: attachShadow() worked");
      const F = document.createElement("div");
      F.innerHTML = `
        <style>
          .shadow-content {
            padding: 10px;
            background: #6c757d;
            color: white;
            border-radius: 4px;
          }
        </style>
        <div class="shadow-content">
          <strong>Shadow DOM Content</strong>
          <p>This content is inside a shadow root!</p>
        </div>
      `, R.appendChild(F), f("✓ SUCCESS: Added content to shadow root"), m.appendChild(C), f("✓ SUCCESS: Shadow host added to DOM"), C.shadowRoot ? f("✓ SUCCESS: shadowRoot property is accessible") : f("✗ FAILED: shadowRoot property is not accessible"), setTimeout(() => {
        try {
          m.removeChild(C), f("🧹 CLEANUP: Removed shadow DOM test");
        } catch {
        }
      }, 5e3);
    } catch (m) {
      f(`✗ FAILED: Shadow DOM test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, ft = () => {
    let m = 0, C = 0;
    try {
      if (f("⚠ TESTING: localStorage API..."), typeof localStorage > "u")
        return f("✗ FAILED: localStorage is undefined"), m++, { passed: !1, errors: m, warnings: C };
      f("✓ SUCCESS: localStorage object exists");
      const R = "dom-test-key-" + Date.now(), F = "test-value-" + Math.random();
      f("⚠ TESTING: localStorage.setItem()..."), C++, localStorage.setItem(R, F), f(`✓ SUCCESS: setItem('${R}', '${F}')`), f("⚠ TESTING: localStorage.getItem()..."), C++;
      const ie = localStorage.getItem(R);
      ie === F ? f(
        `✓ SUCCESS: getItem() returned correct value: '${ie}'`
      ) : (f(
        `✗ FAILED: getItem() returned '${ie}', expected '${F}'`
      ), m++), f("⚠ TESTING: localStorage.removeItem()..."), C++, localStorage.removeItem(R);
      const ge = localStorage.getItem(R);
      ge === null ? f("✓ SUCCESS: removeItem() worked, key no longer exists") : (f(
        `✗ FAILED: Key still exists after removeItem(): '${ge}'`
      ), m++), f("⚠ TESTING: localStorage.length..."), C++;
      const je = localStorage.length;
      f(`✓ SUCCESS: localStorage.length = ${je}`), f("⚠ TESTING: localStorage.clear()..."), C++;
      const xe = localStorage.length;
      localStorage.clear();
      const mt = localStorage.length;
      return f(
        `✓ SUCCESS: clear() worked (${xe} keys → ${mt} keys)`
      ), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: localStorage test - ${R.message}`), f(`  Stack: ${R.stack?.split(`
`)[0] || "no stack"}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, ht = () => {
    let m = 0, C = 0;
    try {
      if (f("⚠ TESTING: sessionStorage API..."), typeof sessionStorage > "u")
        return f("✗ FAILED: sessionStorage is undefined"), m++, { passed: !1, errors: m, warnings: C };
      f("✓ SUCCESS: sessionStorage object exists");
      const R = "dom-test-session-" + Date.now(), F = "session-value-" + Math.random();
      f("⚠ TESTING: sessionStorage.setItem()..."), C++, sessionStorage.setItem(R, F), f(`✓ SUCCESS: setItem('${R}', '${F}')`), f("⚠ TESTING: sessionStorage.getItem()..."), C++;
      const ie = sessionStorage.getItem(R);
      ie === F ? f(
        `✓ SUCCESS: getItem() returned correct value: '${ie}'`
      ) : (f(
        `✗ FAILED: getItem() returned '${ie}', expected '${F}'`
      ), m++), f("⚠ TESTING: sessionStorage.key()..."), C++;
      const ge = sessionStorage.key(0);
      return f(`✓ SUCCESS: sessionStorage.key(0) = '${ge}'`), sessionStorage.removeItem(R), f("🧹 CLEANUP: Removed test key from sessionStorage"), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: sessionStorage test - ${R.message}`), f(`  Stack: ${R.stack?.split(`
`)[0] || "no stack"}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, $t = () => {
    let m = 0, C = 0;
    try {
      if (f("⚠ TESTING: IndexedDB API..."), !("indexedDB" in window))
        return f("✗ FAILED: indexedDB is not available in window"), m++, { passed: !1, errors: m, warnings: C };
      f("✓ SUCCESS: indexedDB object exists");
      const R = "dom-test-db-" + Date.now(), F = 1;
      f(`⚠ TESTING: indexedDB.open('${R}', ${F})...`), C++;
      const ie = indexedDB.open(R, F);
      return ie.onerror = () => {
        f(
          `✗ FAILED: indexedDB.open() error - ${ie.error?.message}`
        ), m++;
      }, ie.onsuccess = () => {
        f("✓ SUCCESS: indexedDB.open() succeeded");
        const ge = ie.result;
        f(
          `✓ SUCCESS: Database '${ge.name}' opened, version ${ge.version}`
        ), ge.close();
        const je = indexedDB.deleteDatabase(R);
        je.onsuccess = () => {
          f(`🧹 CLEANUP: Deleted test database '${R}'`);
        };
      }, ie.onupgradeneeded = (ge) => {
        f(
          "⚠ TESTING: Database upgrade needed, creating object store..."
        ), C++;
        const je = ge.target.result;
        je.objectStoreNames.contains("testStore") || (je.createObjectStore("testStore", {
          keyPath: "id"
        }).createIndex("name", "name", { unique: !1 }), f("✓ SUCCESS: Created object store and index"));
      }, { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: IndexedDB test - ${R.message}`), f(`  Stack: ${R.stack?.split(`
`)[0] || "no stack"}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Sn = () => {
    try {
      if (f("⚠ TESTING: XMLHttpRequest API..."), typeof XMLHttpRequest > "u") {
        f("✗ FAILED: XMLHttpRequest is undefined");
        return;
      }
      f("✓ SUCCESS: XMLHttpRequest constructor exists"), f("⚠ TESTING: Creating XMLHttpRequest instance...");
      const m = new XMLHttpRequest();
      f("✓ SUCCESS: new XMLHttpRequest() worked"), f("⚠ TESTING: xhr.open() and xhr.send()...");
      const C = "data:text/plain,Hello%20from%20XHR";
      m.onload = () => {
        m.status === 200 || m.status === 0 ? (f(`✓ SUCCESS: XHR request completed, status: ${m.status}`), f(`✓ SUCCESS: Response text: '${m.responseText}'`)) : f(`✗ FAILED: XHR request failed with status: ${m.status}`);
      }, m.onerror = () => {
        f("✗ FAILED: XHR request error");
      }, m.open("GET", C, !0), m.send(), f("✓ SUCCESS: xhr.open() and xhr.send() executed");
    } catch (m) {
      f(`✗ FAILED: XMLHttpRequest test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, rr = () => {
    try {
      if (f("⚠ TESTING: Fetch API..."), typeof fetch > "u") {
        f("✗ FAILED: fetch is undefined");
        return;
      }
      f("✓ SUCCESS: fetch function exists"), f("⚠ TESTING: Calling fetch() with data URL..."), fetch('data:application/json,{"test":"value","from":"fetch"}').then((C) => (f(
        `✓ SUCCESS: fetch() returned response, status: ${C.status}`
      ), f(`✓ SUCCESS: response.ok = ${C.ok}`), f("⚠ TESTING: response.json()..."), C.json())).then((C) => {
        f(
          `✓ SUCCESS: response.json() parsed data: ${JSON.stringify(C)}`
        );
      }).catch((C) => {
        f(`✗ FAILED: fetch() error - ${C.message}`);
      }), f("✓ SUCCESS: fetch() call initiated");
    } catch (m) {
      f(`✗ FAILED: Fetch API test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, hn = () => {
    try {
      if (f("⚠ TESTING: Blob API..."), typeof Blob > "u") {
        f("✗ FAILED: Blob is undefined");
        return;
      }
      f("✓ SUCCESS: Blob constructor exists"), f("⚠ TESTING: Creating Blob...");
      const m = new Blob(["Hello from Blob!"], { type: "text/plain" });
      f(
        `✓ SUCCESS: Created blob, size: ${m.size} bytes, type: '${m.type}'`
      ), f("⚠ TESTING: URL.createObjectURL()...");
      const C = URL.createObjectURL(m);
      f(`✓ SUCCESS: Created blob URL: ${C.substring(0, 50)}...`), f("⚠ TESTING: Fetching blob URL..."), fetch(C).then((R) => R.text()).then((R) => {
        f(`✓ SUCCESS: Fetched blob content: '${R}'`), URL.revokeObjectURL(C), f("🧹 CLEANUP: Revoked blob URL");
      }).catch((R) => {
        f(`✗ FAILED: Could not fetch blob - ${R.message}`);
      });
    } catch (m) {
      f(`✗ FAILED: Blob API test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, Qn = () => {
    if (kt) {
      Lt && (clearInterval(Lt), ce(null)), T(!1), f("🛑 STOPPED: Background fetch process terminated");
      return;
    }
    try {
      if (f("⚠ TESTING: Starting background fetch (every 5 seconds)..."), f("  This simulates continuous background network activity"), typeof fetch > "u") {
        f("✗ FAILED: fetch is undefined");
        return;
      }
      let m = 0;
      const C = () => {
        m++;
        const F = (/* @__PURE__ */ new Date()).toISOString(), ie = `data:application/json,{"fetch":"${m}","timestamp":"${F}"}`;
        f(
          `🔄 BACKGROUND FETCH #${m} - Starting at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}...`
        ), fetch(ie).then((ge) => ge.json()).then((ge) => {
          f(
            `✓ BACKGROUND FETCH #${m} SUCCESS: ${JSON.stringify(
              ge
            )}`
          );
        }).catch((ge) => {
          f(
            `✗ BACKGROUND FETCH #${m} FAILED: ${ge.message}`
          );
        });
      };
      C();
      const R = setInterval(C, 5e3);
      ce(R), T(!0), f("✓ SUCCESS: Background fetch process started"), f("  Click the button again to stop the background fetch");
    } catch (m) {
      f(`✗ FAILED: Background fetch test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, Rn = () => {
    try {
      if (f("⚠ TESTING: Local Network Access..."), f(`  Testing if 'allow="local-network-access"' permission is granted`), typeof fetch > "u") {
        f("✗ FAILED: fetch is undefined");
        return;
      }
      f("✓ SUCCESS: fetch function exists");
      const m = [
        "http://192.168.1.1",
        "http://10.0.0.1",
        "http://localhost:3000"
      ];
      f("⚠ TESTING: Attempting to fetch from local/private network addresses..."), f("  This will fail with network errors, but we're testing if the browser ALLOWS the attempt"), m.forEach((C, R) => {
        const F = `${C}/test`;
        f(`  [${R + 1}] Testing: ${F}`);
        const ie = new AbortController(), ge = setTimeout(() => ie.abort(), 2e3);
        fetch(F, {
          method: "HEAD",
          mode: "no-cors",
          signal: ie.signal
        }).then((je) => {
          clearTimeout(ge), f(`  ✓ [${R + 1}] Request to ${C} was ALLOWED (status: ${je.status})`), f("    → local-network-access permission is GRANTED");
        }).catch((je) => {
          clearTimeout(ge), je.name === "AbortError" ? (f(`  ⏱ [${R + 1}] Request to ${C} timed out (2s) - ALLOWED but no response`), f("    → local-network-access permission appears to be GRANTED")) : je.message.includes("Failed to fetch") || je.message.includes("NetworkError") ? (f(`  ✓ [${R + 1}] Request to ${C} failed (network error) - but was ALLOWED to attempt`), f("    → local-network-access permission is GRANTED")) : je.message.includes("local network") || je.message.includes("private network") ? (f(`  ✗ [${R + 1}] Request to ${C} BLOCKED by browser`), f("    → local-network-access permission is DENIED"), f(`    → Error: ${je.message}`)) : f(`  ⚠ [${R + 1}] Request to ${C} error: ${je.message}`);
        });
      }), f("ℹ️ INFO: Check results above to see if local network requests were allowed"), f("  If requests were blocked with 'private network' errors, the permission is missing"), f("  If requests timed out or had network errors, the permission is likely granted");
    } catch (m) {
      f(`✗ FAILED: Local Network Access test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, xn = async () => {
    try {
      f("═══════════════════════════════════════════════════════"), f("🍪 COOKIE ACCESS TEST"), f("═══════════════════════════════════════════════════════"), f("🔒 TESTING: Parent cookie isolation (security check)...");
      try {
        let m = !1;
        try {
          m = window.parent !== window;
        } catch (C) {
          f(`✓ SECURE: Access to window.parent blocked - ${C.name}`), f("  Very strict security policy in place"), m = !1;
        }
        if (m) {
          f("  Detected: Running in an iframe"), f(
            "  Testing: Iframe should NOT be able to access parent cookies"
          );
          try {
            const C = window.parent.document.cookie;
            f(
              `✗ SECURITY ISSUE: Can access parent cookies! Found: ${C.substring(
                0,
                100
              )}`
            ), f(
              "  This is a security vulnerability - iframe should be isolated from parent"
            );
          } catch (C) {
            f(
              `✓ SECURE: Cannot access parent cookies - ${C.name} (expected)`
            ), f("  Iframe is properly isolated from parent page");
          }
          try {
            window.parent.document.cookie = "iframe_attack_test=malicious; path=/", f(
              "✗ SECURITY ISSUE: Can set parent cookies! This should be blocked."
            );
          } catch (C) {
            f(
              `✓ SECURE: Cannot set parent cookies - ${C.name} (expected)`
            );
          }
        } else
          f("  Not in iframe - parent cookie isolation test skipped");
      } catch (m) {
        f(
          `✓ SECURE: Parent window access completely blocked - ${m.name}`
        ), f(
          "  Maximum security: Cannot even check if in iframe (this is OK)"
        );
      }
      f("═══════════════════════════════════════════════════════"), f("🍪 TESTING: Iframe's own cookie access (document.cookie)..."), f("  The iframe SHOULD be able to access its own cookies");
      try {
        const m = document.cookie;
        f(
          `✓ SUCCESS: document.cookie accessible - ${m ? `Found ${m.split(";").length} cookie(s)` : "No cookies found (empty but accessible)"}`
        ), m && f(
          `  Cookies: ${m.substring(0, 200)}${m.length > 200 ? "..." : ""}`
        ), f(
          "  ✓ Iframe can read its own cookies (required for functionality)"
        );
      } catch (m) {
        f(`✗ FAILED: Cannot access document.cookie - ${m.message}`), f("  This is a problem! Iframe should access its own cookies.");
      }
      f("═══════════════════════════════════════════════════════"), f("🍪 CLIENT-SIDE COOKIE SETTING TESTS"), f("═══════════════════════════════════════════════════════"), f(
        "  Testing iframe's ability to set its own cookies with various attributes"
      ), f("⚠ TESTING: Setting basic cookie (no flags)...");
      try {
        const m = `basic_${Date.now()}`, C = "basic_value";
        document.cookie = `${m}=${C}; path=/`, document.cookie.includes(m) ? (f("✓ SUCCESS: Basic cookie set and readable"), f(`  Cookie: ${m}=${C}`), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`) : f("✗ FAILED: Basic cookie not readable after setting");
      } catch (m) {
        f(`✗ FAILED: Cannot set basic cookie - ${m.message}`);
      }
      f("⚠ TESTING: Setting cookie with SameSite=Lax...");
      try {
        const m = `lax_${Date.now()}`, C = "lax_value";
        document.cookie = `${m}=${C}; path=/; SameSite=Lax`, document.cookie.includes(m) ? (f("✓ SUCCESS: SameSite=Lax cookie set and readable"), f(
          `  Cookie: ${m}=${C}; SameSite=Lax`
        ), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`) : f("✗ FAILED: SameSite=Lax cookie not readable");
      } catch (m) {
        f(`✗ FAILED: Cannot set SameSite=Lax cookie - ${m.message}`);
      }
      f("⚠ TESTING: Setting cookie with SameSite=Strict...");
      try {
        const m = `strict_${Date.now()}`, C = "strict_value";
        document.cookie = `${m}=${C}; path=/; SameSite=Strict`, document.cookie.includes(m) ? (f("✓ SUCCESS: SameSite=Strict cookie set and readable"), f(
          `  Cookie: ${m}=${C}; SameSite=Strict`
        ), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`) : f("✗ FAILED: SameSite=Strict cookie not readable");
      } catch (m) {
        f(`✗ FAILED: Cannot set SameSite=Strict cookie - ${m.message}`);
      }
      f("⚠ TESTING: Setting cookie with Secure flag...");
      try {
        const m = `secure_${Date.now()}`, C = "secure_value";
        document.cookie = `${m}=${C}; path=/; Secure`, document.cookie.includes(m) ? (f("✓ SUCCESS: Secure cookie set and readable"), f(
          `  Cookie: ${m}=${C}; Secure`
        ), f("  ✓ HTTPS is working for this iframe"), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure`) : (f("⚠ INFO: Secure cookie not readable"), f("  This is expected if iframe is not on HTTPS"), f("  Secure cookies only work on HTTPS connections"));
      } catch (m) {
        f(`⚠ INFO: Cannot set Secure cookie - ${m.message}`), f("  This is expected on HTTP connections");
      }
      f("⚠ TESTING: Attempting to set HttpOnly cookie from JS...");
      try {
        const m = `js_httponly_${Date.now()}`, C = "should_not_be_httponly";
        document.cookie = `${m}=${C}; path=/; HttpOnly`, document.cookie.includes(m) ? (f(
          "⚠ INFO: Cookie was set but HttpOnly flag ignored by browser"
        ), f(
          "  JavaScript cannot set HttpOnly cookies (security feature)"
        ), f(
          "  Cookie is readable, meaning HttpOnly flag was NOT applied"
        ), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`) : (f("✓ SECURE: Cookie with HttpOnly flag rejected by browser"), f("  This is correct - JS cannot set HttpOnly cookies"));
      } catch (m) {
        f(
          `✓ SECURE: Cannot set HttpOnly cookie from JS - ${m.message}`
        );
      }
      f("═══════════════════════════════════════════════════════"), f("✅ Client-side cookie setting tests completed"), f(
        "  Summary: Iframe CAN set its own cookies with various attributes"
      ), f("═══════════════════════════════════════════════════════"), f("═══════════════════════════════════════════════════════"), f("🔙 BACKEND SET-COOKIE HEADER TESTS"), f("═══════════════════════════════════════════════════════"), f(
        "  Testing backend-set cookies (Set-Cookie header in HTTP response)"
      ), f(""), f("⚠ TEST 1: Regular backend cookie (no HttpOnly)..."), f(
        "  This tests if iframe can receive and store regular backend cookies"
      );
      try {
        const m = `backend_test_${Date.now()}`, C = `backend_value_${Date.now()}`;
        f(
          `  Attempting to set cookie: ${m}=${C}`
        ), f("  Making request to httpbin.org/cookies/set...");
        const R = await fetch(
          `https://httpbin.org/cookies/set?${m}=${C}`,
          {
            method: "GET",
            credentials: "include",
            redirect: "follow"
          }
        );
        if (R.ok) {
          f(
            `✓ SUCCESS: Backend responded with status ${R.status}`
          ), f(
            "  Set-Cookie header should have been processed by browser"
          ), await new Promise((ie) => setTimeout(ie, 100));
          const F = document.cookie;
          F.includes(m) ? (f(
            "✓ SUCCESS: Backend-set cookie is accessible via document.cookie!"
          ), f("  Cookie successfully stored in iframe context"), document.cookie = `${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.httpbin.org`) : (f(
            "⚠ INFO: Backend-set cookie not found in document.cookie"
          ), f("  This may be due to cross-origin cookie restrictions"), f(`  Current cookies: ${F.substring(0, 100)}`)), f(
            "⚠ TESTING: Verifying backend-set cookie is sent in subsequent requests..."
          );
          try {
            const ie = await fetch(
              "https://httpbin.org/cookies",
              {
                method: "GET",
                credentials: "include"
              }
            );
            if (ie.ok) {
              const ge = await ie.json();
              f("✓ SUCCESS: Cookie verification request succeeded"), f(
                `  Cookies sent to backend: ${JSON.stringify(
                  ge.cookies
                ).substring(0, 150)}`
              ), ge.cookies && ge.cookies[m] ? f(
                "✓ SUCCESS: Backend-set cookie was sent back in request!"
              ) : f(
                "⚠ INFO: Backend-set cookie not found in subsequent request"
              );
            }
          } catch (ie) {
            f(
              `⚠ INFO: Cookie verification request failed - ${ie.message}`
            );
          }
          f(""), f("⚠ TEST 2: Backend HttpOnly cookie..."), f("  HttpOnly cookies: Set by backend with HttpOnly flag"), f("  Expected behavior:"), f("    - NOT visible in document.cookie (JS cannot read)"), f("    - Browser WILL send automatically in requests");
          try {
            const ie = `httponly_test_${Date.now()}`, ge = `secure_value_${Date.now()}`;
            f(
              `  Attempting to set HttpOnly cookie: ${ie}`
            ), f(
              "  Using httpbin.org/response-headers to set Set-Cookie with HttpOnly flag..."
            );
            const je = await fetch(
              `https://httpbin.org/response-headers?Set-Cookie=${encodeURIComponent(
                `${ie}=${ge}; Path=/; HttpOnly; SameSite=None; Secure`
              )}`,
              {
                method: "GET",
                credentials: "include"
              }
            );
            if (je.ok) {
              f(
                "✓ SUCCESS: Backend responded with HttpOnly Set-Cookie header"
              ), await new Promise((Vt) => setTimeout(Vt, 100));
              const xe = document.cookie, mt = xe.split(";").map((Vt) => Vt.trim().split("=")[0]).filter((Vt) => Vt.length > 0);
              f(
                `  Currently visible cookies in document.cookie: ${mt.length}`
              ), mt.length > 0 && f(`  Visible: ${mt.join(", ")}`), xe.includes(ie) ? (f(
                "⚠ WARNING: HttpOnly cookie IS visible in document.cookie (unexpected!)"
              ), f(
                "  This might indicate the HttpOnly flag wasn't properly set"
              )) : f(
                "✓ SUCCESS: HttpOnly cookie is NOT visible in document.cookie (as expected)"
              ), f(
                "  Making request to httpbin.org/cookies to see what browser sends..."
              );
              const _n = await fetch(
                "https://httpbin.org/cookies",
                {
                  method: "GET",
                  credentials: "include"
                }
              );
              if (_n.ok) {
                const Vt = await _n.json(), Pn = Object.keys(
                  Vt.cookies || {}
                );
                f(
                  `  Cookies received by backend: ${Pn.length}`
                ), Pn.length > 0 && f(`  Received: ${Pn.join(", ")}`), Vt.cookies && Vt.cookies[ie] ? (f(
                  "✓ SUCCESS: HttpOnly cookie WAS sent to backend by browser!"
                ), f(
                  `  Cookie value received: ${Vt.cookies[ie]}`
                ), f(
                  "  ✓ This proves HttpOnly cookies work correctly in the iframe:"
                ), f(
                  "    - JavaScript CANNOT read it via document.cookie"
                ), f(
                  "    - Browser DOES send it automatically in requests"
                )) : (f(
                  "⚠ INFO: HttpOnly cookie not found in backend response"
                ), f(
                  "  This may be due to SameSite/Secure restrictions or cookie scope"
                ));
                const Or = Pn.filter(
                  (Ka) => !mt.includes(Ka)
                );
                Or.length > 0 && f(
                  `  Found ${Or.length} additional hidden cookie(s): ${Or.join(", ")}`
                );
              } else
                f(
                  `⚠ INFO: Backend cookie check returned ${_n.status}`
                );
              f("  ═══════════════════════════════════"), f(
                "  💡 HttpOnly cookies are set by backend with 'HttpOnly' flag in Set-Cookie"
              ), f(
                "  💡 They protect against XSS by hiding cookies from JavaScript"
              ), f(
                "  💡 Browser still automatically sends them with requests"
              ), f(
                "  💡 /cookies endpoint returns cookies from the Cookie header browser sent"
              );
            } else
              f(
                `⚠ INFO: HttpOnly cookie setting request returned ${je.status}`
              );
          } catch (ie) {
            f(`⚠ INFO: HttpOnly cookie test failed - ${ie.message}`), f(
              "  This may be due to CORS, SameSite=None requiring HTTPS, or network restrictions"
            );
          }
        } else
          f(
            `⚠ INFO: Backend cookie-setting request returned ${R.status}`
          );
      } catch (m) {
        f(`⚠ INFO: Backend Set-Cookie test failed - ${m.message}`), f("  This may be due to network restrictions or CORS policies");
      }
      f("═══════════════════════════════════════════════════════"), f("⚠ TESTING: Implicit cookie access via fetch..."), f("  Making GET request to /auth-proxy/userinfo...");
      try {
        const m = await fetch(
          "https://core.avaya-inf113.ec.avayacloud.com/auth-proxy/userinfo",
          {
            method: "GET",
            credentials: "include",
            // Explicitly include credentials
            headers: {
              Accept: "application/json"
            }
          }
        );
        if (f(
          `  Response status: ${m.status} ${m.statusText}`
        ), m.ok)
          try {
            const C = await m.json();
            f(
              "✓ SUCCESS: Auth endpoint returned 200 - cookies were sent"
            ), f(
              `  Response data: ${JSON.stringify(C).substring(0, 200)}`
            );
          } catch {
            const C = await m.text();
            f(
              "✓ SUCCESS: Auth endpoint returned 200 - cookies were sent"
            ), f(`  Response (text): ${C.substring(0, 200)}`);
          }
        else m.status === 401 ? (f(
          "⚠ INFO: Auth endpoint returned 401 - no valid cookies sent"
        ), f("  This could mean: cookies weren't inherited from parent")) : m.status === 404 ? (f("⚠ INFO: Auth endpoint not found (404)"), f("  This test requires /auth-proxy/userinfo to exist")) : f(`⚠ INFO: Auth endpoint returned ${m.status}`);
      } catch (m) {
        f(`✗ FAILED: Fetch to auth endpoint failed - ${m.message}`), f("  This may indicate network restrictions or CORS issues");
      }
      f(
        "⚠ TESTING: Implicit cookie access without credentials flag..."
      );
      try {
        const m = await fetch(
          "https://core.avaya-inf113.ec.avayacloud.com/auth-proxy/userinfo",
          {
            method: "GET",
            // credentials not specified - defaults to "same-origin"
            headers: {
              Accept: "application/json"
            }
          }
        );
        f(
          `  Response status: ${m.status} ${m.statusText}`
        ), m.ok ? f(
          "✓ INFO: Request succeeded without explicit credentials flag"
        ) : m.status === 401 && f(
          "⚠ INFO: 401 without credentials flag - implicit cookies not sent"
        );
      } catch (m) {
        f(`✗ FAILED: Fetch failed - ${m.message}`);
      }
      f("═══════════════════════════════════════════════════════"), f("🌐 CROSS-SITE API REQUEST TEST"), f("═══════════════════════════════════════════════════════"), f("⚠ TESTING: Cross-origin request to external API..."), f(
        "  Making request to https://jsonplaceholder.typicode.com/users/1"
      );
      try {
        const m = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json"
            }
          }
        );
        f(
          `✓ SUCCESS: Cross-site request succeeded - Status ${m.status}`
        );
        try {
          const C = await m.json();
          f(`  Response: ${JSON.stringify(C).substring(0, 150)}...`);
        } catch {
          f("  Could not parse response as JSON");
        }
      } catch (m) {
        f(`✗ BLOCKED: Cross-site request failed - ${m.message}`), f("  This may indicate CORS restrictions or network policies");
      }
      f("⚠ TESTING: Cross-origin with credentials='omit'...");
      try {
        const m = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          {
            method: "GET",
            credentials: "omit"
          }
        );
        f(
          `✓ INFO: Request with credentials='omit' succeeded - Status ${m.status}`
        );
      } catch (m) {
        f(
          `✗ BLOCKED: Request with credentials='omit' failed - ${m.message}`
        );
      }
      f(
        "⚠ TESTING: Cross-origin to different port (localhost:3001)..."
      );
      try {
        const m = await fetch("http://localhost:3001/api/test", {
          method: "GET",
          credentials: "include"
        });
        f(
          `✓ INFO: Cross-port request succeeded - Status ${m.status}`
        );
      } catch (m) {
        f(`⚠ INFO: Cross-port request failed - ${m.message}`), f("  This is expected if no server is running on port 3001");
      }
      f("═══════════════════════════════════════════════════════"), f("✅ COOKIE TESTS COMPLETED - SUMMARY"), f("═══════════════════════════════════════════════════════"), f("Tests performed:"), f(""), f("🔒 Security Tests:"), f("  ✓ Iframe CANNOT access parent cookies"), f("  ✓ Iframe CANNOT set parent cookies"), f("  ✓ JavaScript CANNOT set HttpOnly cookies"), f(""), f("🍪 Client-Side Cookie Setting (via document.cookie):"), f("  ✓ Basic cookies (no flags)"), f("  ✓ SameSite=Lax cookies"), f("  ✓ SameSite=Strict cookies"), f("  ✓ Secure cookies (HTTPS only)"), f(""), f("🔙 Backend-Set Cookies (via Set-Cookie header):"), f("  ✓ Regular backend cookies (visible to JS)"), f(
        "  ✓ HttpOnly backend cookies (NOT visible to JS, but sent by browser)"
      ), f(""), f(
        "✅ All cookie types tested for iframe functionality and security!"
      ), f("═══════════════════════════════════════════════════════");
    } catch (m) {
      f(`✗ FAILED: Cookie Access Test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, sr = () => {
    try {
      if (f("═══════════════════════════════════════════════════════"), f("🔍 IFRAME SANDBOX DETECTION TEST"), f("═══════════════════════════════════════════════════════"), f("⚠ TESTING: iframe sandbox restrictions..."), f("⚠ TESTING: iframe detection..."), window.parent === window)
        f("✓ INFO: Not running in iframe (window.parent === window)");
      else {
        f("✓ INFO: Running in iframe (window.parent !== window)"), f("⚠ TESTING: parent window access...");
        try {
          const C = window.parent.location.origin;
          f(`✓ INFO: Can access parent origin: ${C}`);
        } catch (C) {
          f(`⚠ BLOCKED: Cannot access parent origin - ${C.name}`);
        }
      }
      f("⚠ TESTING: sandbox restrictions via custom element test...");
      try {
        const C = `sandbox-test-${Date.now()}`;
        class R extends HTMLElement {
          constructor() {
            super(), this.textContent = "Sandbox Test";
          }
        }
        customElements.define(C, R);
        const F = document.createElement(C), ie = document.createElement("div");
        ie.appendChild(F), f(
          "✓ SUCCESS: Custom element registration works (no sandbox restrictions)"
        ), ie.removeChild(F);
      } catch (C) {
        C.message.includes("The result must not have children") || C.message.includes("NotSupportedError") ? (f(
          "✗ SANDBOX RESTRICTION: Custom element registration blocked"
        ), f(
          "  This indicates iframe sandbox without 'allow-same-origin'"
        ), f(
          "  Required sandbox attributes: 'allow-same-origin allow-scripts'"
        )) : f(`✗ FAILED: Custom element test failed - ${C.message}`);
      }
      f("⚠ TESTING: other sandbox restrictions...");
      try {
        const C = `sandbox-test-${Date.now()}`;
        localStorage.setItem(C, "test"), localStorage.removeItem(C), f("✓ SUCCESS: localStorage access works");
      } catch (C) {
        f(`⚠ BLOCKED: localStorage access blocked - ${C.name}`);
      }
      try {
        const C = `sandbox-test-${Date.now()}`;
        sessionStorage.setItem(C, "test"), sessionStorage.removeItem(C), f("✓ SUCCESS: sessionStorage access works");
      } catch (C) {
        f(`⚠ BLOCKED: sessionStorage access blocked - ${C.name}`);
      }
      try {
        const C = document.cookie;
        document.cookie = `sandbox-test-${Date.now()}=test; path=/`;
        const R = document.cookie;
        f("✓ SUCCESS: document.cookie access works"), document.cookie = `sandbox-test-${Date.now()}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      } catch (C) {
        f(`⚠ BLOCKED: document.cookie access blocked - ${C.name}`);
      }
      f("⚠ TESTING: sandbox attribute detection...");
      const m = [];
      try {
        window.top !== window && m.push("top-level access restricted");
      } catch {
        m.push("top-level access blocked");
      }
      try {
        window.parent !== window && window.parent.document && m.push("parent document access allowed");
      } catch {
        m.push("parent document access blocked");
      }
      m.length > 0 ? f(`⚠ DETECTED RESTRICTIONS: ${m.join(", ")}`) : f("✓ INFO: No obvious sandbox restrictions detected"), f("═══════════════════════════════════════════════════════"), f("✅ Iframe sandbox detection test completed"), f("═══════════════════════════════════════════════════════");
    } catch (m) {
      f(`✗ FAILED: Iframe Sandbox Detection Test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, ma = () => {
    try {
      f("═══════════════════════════════════════════════════════"), f("⚛️ REACT INTERNAL PROCESSING TEST"), f("═══════════════════════════════════════════════════════"), f("⚠ TESTING: React's internal element processing...");
      const m = Fe.current;
      if (!m) {
        f("✗ FAILED: Test container not available");
        return;
      }
      f(
        "⚠ TESTING: Creating custom element with internal structure..."
      );
      const C = `react-test-${Date.now()}`;
      class R extends HTMLElement {
        constructor() {
          super(), this.innerHTML = `
            <div class="internal-content">
              <span>Child 1</span>
              <span>Child 2</span>
              <div class="nested">
                <p>Nested content</p>
              </div>
            </div>
          `, this.setAttribute("data-test", "react-processing"), this.style.cssText = "padding: 10px; background: #e3f2fd; margin: 5px; border-radius: 4px;";
        }
        connectedCallback() {
          f(
            "✓ SUCCESS: connectedCallback fired (React can access lifecycle)"
          );
        }
        disconnectedCallback() {
          f(
            "✓ SUCCESS: disconnectedCallback fired (React can access lifecycle)"
          );
        }
      }
      customElements.define(C, R), f("✓ SUCCESS: Custom element defined with internal structure"), f("⚠ TESTING: Creating and appending element..."), f("  🎯 This is line 1639 where the error occurs");
      let F;
      try {
        F = document.createElement(C), m.appendChild(F), f("✓ SUCCESS: Element added to DOM");
      } catch (xe) {
        f(`✗ FAILED: Element creation blocked - ${xe.message}`), f("  This is the EXACT error you're seeing in the console!"), f('  Error: "The result must not have attributes"'), f(
          "  🔍 WHY: The custom element sets attributes in its constructor:"
        ), f('     - this.setAttribute("data-test", "react-processing")'), f(
          '     - this.style.cssText = "padding: 10px; background: #e3f2fd; margin: 5px; border-radius: 4px;"'
        ), f(
          "  🚫 IFRAME SANDBOX BLOCKS: Access to element attributes during creation"
        ), f(
          "  💡 SOLUTION: Add 'allow-same-origin' to iframe sandbox attribute"
        );
        return;
      }
      f(
        "⚠ TESTING: React-specific behaviors requiring same-origin access..."
      );
      try {
        f("⚠ TESTING: React ref system (element internals access)..."), f("  🔗 Docs: https://reactjs.org/docs/refs-and-the-dom.html");
        const xe = F, mt = xe.children.length > 0;
        f(
          `✓ SUCCESS: React ref system works (${xe.children.length} children accessible)`
        ), f("⚠ TESTING: React event system..."), f("  🔗 Docs: https://reactjs.org/docs/events.html");
        let _n = !1;
        const Vt = () => {
          _n = !0;
        };
        xe.addEventListener("click", Vt), xe.click(), xe.removeEventListener("click", Vt), f(
          _n ? "✓ SUCCESS: React event system works (addEventListener/removeEventListener)" : "⚠ WARNING: React event system may be blocked"
        ), f("⚠ TESTING: React attribute system..."), f("  🔗 Docs: https://reactjs.org/docs/dom-elements.html");
        const Pn = xe.getAttribute("data-test");
        xe.setAttribute("data-react-test", "react-attribute-test");
        const Or = xe.getAttribute("data-react-test");
        xe.removeAttribute("data-react-test"), f(
          Or === "react-attribute-test" ? "✓ SUCCESS: React attribute system works (getAttribute/setAttribute/removeAttribute)" : "⚠ WARNING: React attribute system may be blocked"
        ), f(
          "⚠ TESTING: React DOM manipulation (the actual failing operation)..."
        ), f(
          "  🔗 Source: ReactDOMComponent.js - createElement implementation"
        );
        try {
          const ga = document.createElement("div");
          ga.innerHTML = `<${C}></${C}>`, ga.firstElementChild && f(
            "✓ SUCCESS: React DOM manipulation works (innerHTML with custom elements)"
          );
        } catch (ga) {
          f(`✗ FAILED: React DOM manipulation blocked - ${ga.message}`), f(
            "  This is the exact operation that fails in React's internal processing."
          ), f(`  Error: ${ga.message}`);
        }
        f("⚠ TESTING: React style system..."), f(
          "  🔗 Docs: https://reactjs.org/docs/dom-elements.html#style"
        );
        const Ka = xe.style.display;
        xe.style.display = "none", xe.style.display = "block", xe.style.display = Ka, f(
          "✓ SUCCESS: React style system works (style property access)"
        );
      } catch (xe) {
        f(`✗ FAILED: React internal processing blocked - ${xe.message}`), f(
          "  This indicates iframe sandbox restrictions are preventing"
        ), f("  React from accessing element internals."), f("  Solution: Add 'allow-same-origin' to iframe sandbox.");
      }
      f("⚠ TESTING: Monitoring for async React processing errors..."), f(
        "  🔍 WHY: React processes elements asynchronously after DOM operations"
      ), f(
        "  📚 Docs: React Fiber architecture uses async reconciliation"
      );
      let ie = !1;
      const ge = console.error, je = window.onerror;
      console.error = (...xe) => {
        const mt = xe.join(" ");
        (mt.includes("The result must not have children") || mt.includes("NotSupportedError") || mt.includes("The result must not have attributes")) && (ie = !0, f(`✗ ASYNC ERROR: ${mt}`), f(
          "  🕐 TIMING: This error occurred AFTER your try-catch completed"
        ), f(
          "  🔄 REACT: React's async processing failed due to iframe sandbox"
        ), f(
          "  💡 SOLUTION: Add 'allow-same-origin' to iframe sandbox attribute"
        )), ge.apply(console, xe);
      }, window.onerror = (xe, mt, _n, Vt, Pn) => (typeof xe == "string" && (xe.includes("The result must not have children") || xe.includes("NotSupportedError") || xe.includes("The result must not have attributes")) && (ie = !0, f(`✗ WINDOW ERROR: ${xe}`), f(
        "  🕐 TIMING: This error occurred AFTER your try-catch completed"
      ), f(
        "  🔄 REACT: React's async processing failed due to iframe sandbox"
      ), f(
        "  💡 SOLUTION: Add 'allow-same-origin' to iframe sandbox attribute"
      )), je ? je(xe, mt, _n, Vt, Pn) : !1), setTimeout(() => {
        try {
          F.style.display = "none", F.style.display = "block", console.error = ge, window.onerror = je, f(
            ie ? "✗ FAILED: Async errors detected - React processing blocked" : "✓ SUCCESS: No async errors detected - React processing works"
          );
        } catch (xe) {
          f(`✗ FAILED: React processing error - ${xe.message}`), console.error = ge;
        }
      }, 1e3), setTimeout(() => {
        try {
          m.removeChild(F), f("🧹 CLEANUP: Removed React test element");
        } catch {
        }
      }, 5e3), f("═══════════════════════════════════════════════════════"), f("✅ React internal processing test completed"), f("═══════════════════════════════════════════════════════");
    } catch (m) {
      f(`✗ FAILED: React Internal Processing Test - ${m.message}`), f(`  Stack: ${m.stack?.split(`
`)[0] || "no stack"}`);
    }
  }, kr = () => {
    try {
      f("═══════════════════════════════════════════════════════"), f("🔒 PARENT WINDOW ACCESS TEST"), f("═══════════════════════════════════════════════════════"), f("⚠ TESTING: window.parent access...");
      try {
        if (window.parent === window)
          f("⚠ INFO: No parent window (not in iframe)");
        else {
          f("✓ SUCCESS: window.parent is accessible"), f("⚠ TESTING: parent.location access...");
          try {
            const m = window.parent.location.href;
            f(
              `✗ SECURITY ISSUE: Can read parent location: ${m.substring(
                0,
                50
              )}`
            );
          } catch (m) {
            f(`✓ BLOCKED: Cannot read parent location - ${m.name}`);
          }
          f("⚠ TESTING: parent.document access...");
          try {
            const m = window.parent.document;
            f("✗ SECURITY ISSUE: Can access parent document");
          } catch (m) {
            f(`✓ BLOCKED: Cannot access parent document - ${m.name}`);
          }
          f("⚠ TESTING: parent.postMessage availability...");
          try {
            typeof window.parent.postMessage == "function" && f(
              "✓ INFO: parent.postMessage is available (expected for communication)"
            );
          } catch (m) {
            f(`✗ FAILED: Cannot check parent.postMessage - ${m.name}`);
          }
        }
      } catch (m) {
        f(`✗ FAILED: window.parent access failed - ${m.message}`);
      }
      f("═══════════════════════════════════════════════════════"), f("✅ Parent window access test completed"), f("═══════════════════════════════════════════════════════");
    } catch (m) {
      f(`✗ FAILED: Parent Window Access Test - ${m.message}`);
    }
  }, On = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Basic popup window creation...");
      const R = window.open(
        "",
        "_blank",
        "width=400,height=300,scrollbars=yes,resizable=yes"
      );
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      f("✓ SUCCESS: Popup window created"), Me((F) => [...F, R]), f("⚠ TESTING: Popup window properties..."), f(`  Popup name: ${R.name}`), f(`  Popup closed: ${R.closed}`), f(
        `  Popup opener: ${R.opener === window ? "same" : "different"}`
      );
      try {
        R.document.write("<html><body><h1>Test Popup</h1></body></html>"), R.document.close(), f("✓ SUCCESS: Popup can write to its own document");
      } catch (F) {
        f(`✗ FAILED: Popup document access blocked - ${F.message}`), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed test popup");
        } catch {
        }
      }, 2e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Basic popup creation - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, mn = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup access to parent window...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: popup.opener access...");
      try {
        R.opener === window ? (f("✓ SUCCESS: popup.opener points to parent window"), C++) : f("✓ BLOCKED: popup.opener is null or different window");
      } catch (F) {
        f(`✓ BLOCKED: Cannot access popup.opener - ${F.name}`);
      }
      f("⚠ TESTING: Direct opener window access from popup...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Popup Attack Test</h1>
              <script>
                try {
                  if (window.opener) {
                    document.body.innerHTML += '<p style="color: orange;">⚠️ INFO: Can access opener window (the iframe)</p>';
                    document.body.innerHTML += '<p>Opener URL: ' + window.opener.location.href + '</p>';
                    document.body.innerHTML += '<p>Opener title: ' + window.opener.document.title + '</p>';
                    
                    // IMPORTANT: Test if popup can access the opener's parent (the host page that contains the iframe)
                    document.body.innerHTML += '<hr><h3>Testing Access to Opener's Parent (Host Page):</h3>';
                    try {
                      if (window.opener.parent) {
                        document.body.innerHTML += '<p style="color: red;">⚠️ VULNERABILITY: Can access opener.parent (the host page)!</p>';
                        document.body.innerHTML += '<p>Host page URL: ' + window.opener.parent.location.href + '</p>';
                        document.body.innerHTML += '<p>Host page title: ' + window.opener.parent.document.title + '</p>';
                      } else {
                        document.body.innerHTML += '<p style="color: green;">✓ SECURE: Cannot access opener.parent</p>';
                      }
                    } catch (e) {
                      document.body.innerHTML += '<p style="color: green;">✓ SECURE: Opener parent access blocked - ' + e.name + '</p>';
                    }
                  } else {
                    document.body.innerHTML += '<p style="color: green;">✓ SECURE: Cannot access opener window</p>';
                  }
                } catch (e) {
                  document.body.innerHTML += '<p style="color: green;">✓ SECURE: Opener access blocked - ' + e.name + '</p>';
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Popup script executed");
      } catch (F) {
        f(`✗ FAILED: Popup script execution failed - ${F.message}`), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent window access - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Dn = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup comprehensive host page access tests...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f(
        "⚠ TESTING: Comprehensive popup attacks on host page (opener.parent)..."
      );
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Comprehensive Host Page Attack Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  const parent = window.opener && window.opener.parent && window.opener.parent !== window.opener ? window.opener.parent : null;
                  
                  if (!parent) {
                    const msg = '✓ SECURE: Cannot access opener.parent (host page)';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                    return;
                  }
                  
                  document.body.innerHTML += '<h2>Testing Multiple Attack Vectors on Host Page:</h2>';
                  
                  // Test 1: Document manipulation
                  try {
                    if (parent.document && parent.document.body) {
                      const attackDiv = parent.document.createElement('div');
                      attackDiv.innerHTML = '<p style="color: red; background: yellow;">🚨 POPUP ATTACK IN HOST PAGE!</p>';
                      attackDiv.style.position = 'fixed';
                      attackDiv.style.top = '0';
                      attackDiv.style.right = '0';
                      attackDiv.style.zIndex = '99999';
                      parent.document.body.appendChild(attackDiv);
                      logMessage('⚠️ VULNERABILITY: Can inject into host page DOM!');
                    }
                  } catch (e) {
                    logMessage('✓ SECURE: Host page DOM injection blocked - ' + e.name);
                  }
                  
                  // Test 2: PostMessage
                  try {
                    parent.postMessage("POPUP_ATTACK_TO_HOST: " + window.location.href, "*");
                    logMessage('⚠️ VULNERABILITY: Can postMessage to host page!');
                  } catch (e) {
                    logMessage('✓ SECURE: Host page postMessage blocked - ' + e.name);
                  }
                  
                  // Test 3: Navigation
                  try {
                    parent.location.href = "https://example.com";
                    logMessage('⚠️ VULNERABILITY: Can navigate host page!');
                  } catch (e) {
                    logMessage('✓ SECURE: Host page navigation blocked - ' + e.name);
                  }
                  
                  // Test 4: Storage
                  try {
                    if (parent.localStorage) {
                      parent.localStorage.setItem('popup_test', 'attack');
                      parent.localStorage.removeItem('popup_test');
                      logMessage('⚠️ VULNERABILITY: Can access host page localStorage!');
                    }
                  } catch (e) {
                    logMessage('✓ SECURE: Host page localStorage blocked - ' + e.name);
                  }
                  
                  // Test 5: History control
                  try {
                    parent.history.back();
                    logMessage('⚠️ VULNERABILITY: Can control host page history!');
                  } catch (e) {
                    logMessage('✓ SECURE: Host page history control blocked - ' + e.name);
                  }
                  
                  // Test 6: Focus manipulation
                  try {
                    parent.focus();
                    logMessage('⚠️ VULNERABILITY: Can control host page focus!');
                  } catch (e) {
                    logMessage('✓ SECURE: Host page focus control blocked - ' + e.name);
                  }
                  
                  // Test 7: Window resize
                  try {
                    parent.resizeTo(800, 600);
                    logMessage('⚠️ VULNERABILITY: Can resize host page window!');
                  } catch (e) {
                    logMessage('✓ SECURE: Host page window resize blocked - ' + e.name);
                  }
                  
                  document.body.innerHTML += '<p style="color: blue;">ℹ️ Check the parent window's log for test results</p>';
                } catch (e) {
                  const msg = '✓ SECURE: Comprehensive test blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Comprehensive popup attack test executed");
      } catch (F) {
        f(`✗ FAILED: Comprehensive test failed - ${F.message}`), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed comprehensive test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup comprehensive test - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Xn = async () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup sandbox escape detection...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((ge) => [...ge, R]);
      let F = !1;
      const ie = (ge) => {
        if (ge.source === R) {
          const je = ge.data;
          typeof je == "string" && (je.includes("VULNERABILITY_DETECTED") ? (F = !0, f(
            "✗ CRITICAL VULNERABILITY: allow-popups-to-escape-sandbox is ENABLED!"
          ), m++, C++) : je.includes("Not running in iframe") ? f(
            "ℹ️ INFO: Not running in iframe - popup escape test not applicable"
          ) : je.includes("No sandbox escape") && f("✓ SECURE: No sandbox escape via popup detected"));
        }
      };
      window.addEventListener("message", ie), f("⚠ TESTING: Popup attempting to detect sandbox escape...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Sandbox Escape Detection Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  // Test if the opener (web component) is in an iframe
                  let openerInIframe = false;
                  let escapeDetected = false;
                  
                  // Check if opener is in an iframe
                  try {
                    if (window.opener) {
                      if (window.opener.parent !== window.opener) {
                        openerInIframe = true;
                        logMessage('⚠️ INFO: Opener (web component) is running in an iframe');
                        document.body.innerHTML += '<p style="color: orange;">⚠️ INFO: Opener is in iframe</p>';
                        
                        // Test if popup can access opener's parent (escape from iframe)
                        try {
                          if (window.opener.parent && window.opener.parent !== window.opener) {
                            const parentUrl = window.opener.parent.location.href;
                            document.body.innerHTML += '<p style="color: red;">⚠️ VULNERABILITY: Sandbox escape via popup detected!</p>';
                            document.body.innerHTML += '<p>Can access opener.parent URL: ' + parentUrl + '</p>';
                            logMessage('VULNERABILITY_DETECTED: Sandbox escape via popup - can access opener.parent!');
                            escapeDetected = true;
                          } else {
                            document.body.innerHTML += '<p style="color: green;">✓ SECURE: Cannot access opener.parent</p>';
                            logMessage('✓ SECURE: Cannot access opener.parent');
                          }
                        } catch (e) {
                          document.body.innerHTML += '<p style="color: green;">✓ SECURE: opener.parent access blocked - ' + e.name + '</p>';
                          logMessage('✓ SECURE: opener.parent access blocked - ' + e.name);
                        }
                      } else {
                        document.body.innerHTML += '<p style="color: blue;">ℹ️ INFO: Opener is not in an iframe (not sandboxed)</p>';
                        logMessage('ℹ️ INFO: Opener is not in an iframe');
                      }
                    } else {
                      document.body.innerHTML += '<p style="color: blue;">ℹ️ INFO: No opener window</p>';
                      logMessage('ℹ️ INFO: No opener window');
                    }
                  } catch (e) {
                    document.body.innerHTML += '<p style="color: green;">✓ SECURE: Cannot access opener - ' + e.name + '</p>';
                    logMessage('✓ SECURE: Cannot access opener - ' + e.name);
                  }
                  
                  // Test allow-popups-to-escape-sandbox specifically
                  if (openerInIframe && escapeDetected) {
                    document.body.innerHTML += '<p style="color: red; font-weight: bold;">🚨 CRITICAL: allow-popups-to-escape-sandbox is ENABLED!</p>';
                    document.body.innerHTML += '<p>This allows popups to bypass iframe sandbox restrictions!</p>';
                    logMessage('VULNERABILITY_DETECTED: CRITICAL - allow-popups-to-escape-sandbox ENABLED!');
                  }
                } catch (e) {
                  document.body.innerHTML += '<p style="color: green;">✓ SECURE: Sandbox escape detection blocked - ' + e.name + '</p>';
                  logMessage('✓ SECURE: Sandbox escape detection blocked - ' + e.name);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Sandbox escape detection test executed");
      } catch (ge) {
        f(
          `✗ FAILED: Sandbox escape detection test failed - ${ge.message}`
        ), m++;
      }
      return await new Promise((ge) => setTimeout(ge, 1500)), window.removeEventListener("message", ie), setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed sandbox escape detection test popup");
        } catch {
        }
      }, 2e3), F ? (f(
        "✗ FAILED: Sandbox escape vulnerability detected - allow-popups-to-escape-sandbox is enabled!"
      ), { passed: !1, errors: m, warnings: C }) : (f("✓ SECURE: No sandbox escape vulnerability detected"), { passed: m === 0, errors: m, warnings: C });
    } catch (R) {
      return f(`✗ FAILED: Popup sandbox escape detection - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Kr = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent cookie access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to access parent cookies...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent Cookie Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  if (window.opener && window.opener.parent && window.opener.parent.document) {
                    // IMPORTANT: Test if popup can access the opener's parent (the host page that contains the iframe)
                    // Try to access host page cookies
                    try {
                      const parentCookies = window.opener.parent.document.cookie;
                      if (parentCookies) {
                        const msg = '⚠️ VULNERABILITY: Can access host page cookies!';
                        document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                        document.body.innerHTML += '<p>Cookies: ' + parentCookies.substring(0, 100) + '...</p>';
                        logMessage(msg);
                      } else {
                        const msg = '✓ SECURE: No host page cookies accessible';
                        document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                        logMessage(msg);
                      }
                    } catch (e) {
                      const msg = '✓ SECURE: Host page cookie access blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                    
                    // Try to set host page cookies
                    try {
                      window.opener.parent.document.cookie = 'popup_attack_test=malicious_value; path=/';
                      const msg = '⚠️ VULNERABILITY: Can set host page cookies!';
                      document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                      logMessage(msg);
                    } catch (e) {
                      const msg = '✓ SECURE: Host page cookie setting blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent cookie access test executed");
      } catch (F) {
        f(`✗ FAILED: Parent cookie access test failed - ${F.message}`), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent cookie access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent cookie access - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, En = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent localStorage access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to access parent localStorage...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent LocalStorage Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  if (window.opener && window.opener.parent && window.opener.parent.localStorage) {
                    // IMPORTANT: Test if popup can access the opener's parent (the host page that contains the iframe)
                    try {
                      const parentLocalStorage = window.opener.parent.localStorage;
                      const testKey = 'popup_attack_parent_localStorage_' + Date.now();
                      parentLocalStorage.setItem(testKey, 'malicious_parent_data');
                      const value = parentLocalStorage.getItem(testKey);
                      parentLocalStorage.removeItem(testKey);
                      const msg = '⚠️ VULNERABILITY: Can access host page localStorage!';
                      document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                      document.body.innerHTML += '<p>Test value: ' + value + '</p>';
                      logMessage(msg);
                    } catch (e) {
                      const msg = '✓ SECURE: Host page localStorage blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent localStorage access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent localStorage access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent localStorage access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent localStorage - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Kn = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent sessionStorage access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f(
        "⚠ TESTING: Popup attempting to access parent sessionStorage..."
      );
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent SessionStorage Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  if (window.opener && window.opener.parent && window.opener.parent.sessionStorage) {
                    // IMPORTANT: Test if popup can access the opener's parent (the host page that contains the iframe)
                    try {
                      const parentSessionStorage = window.opener.parent.sessionStorage;
                      const testKey = 'popup_attack_parent_sessionStorage_' + Date.now();
                      parentSessionStorage.setItem(testKey, 'malicious_parent_session_data');
                      const value = parentSessionStorage.getItem(testKey);
                      parentSessionStorage.removeItem(testKey);
                      const msg = '⚠️ VULNERABILITY: Can access host page sessionStorage!';
                      document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                      document.body.innerHTML += '<p>Test value: ' + value + '</p>';
                      logMessage(msg);
                    } catch (e) {
                      const msg = '✓ SECURE: Host page sessionStorage blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent sessionStorage access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent sessionStorage access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f(
            "🧹 CLEANUP: Closed parent sessionStorage access test popup"
          );
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent sessionStorage - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Rr = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent IndexedDB access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to access parent IndexedDB...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent IndexedDB Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  if (window.opener && window.opener.parent && window.opener.parent.indexedDB) {
                    // IMPORTANT: Test if popup can access the opener's parent (the host page that contains the iframe)
                    try {
                      const dbName = 'popup_attack_parent_db_' + Date.now();
                      const request = window.opener.parent.indexedDB.open(dbName, 1);
                      
                      request.onsuccess = () => {
                        const msg = '⚠️ VULNERABILITY: Can access host page IndexedDB!';
                        document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                        logMessage(msg);
                        request.result.close();
                        window.opener.parent.indexedDB.deleteDatabase(dbName);
                      };
                      
                      request.onerror = () => {
                        const msg = '✓ SECURE: Host page IndexedDB access blocked';
                        document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                        logMessage(msg);
                      };
                      
                      request.onupgradeneeded = () => {
                        const db = request.result;
                        db.createObjectStore('testStore', {keyPath: 'id'});
                      };
                    } catch (e) {
                      const msg = '✓ SECURE: Host page IndexedDB blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent IndexedDB access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent IndexedDB access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent IndexedDB access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent IndexedDB - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Jr = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent XMLHttpRequest access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to use parent XMLHttpRequest...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent XMLHttpRequest Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  // IMPORTANT: Test if popup can use the opener's parent's XMLHttpRequest (the host page that contains the iframe)
                  if (window.opener && window.opener.parent && window.opener.parent.XMLHttpRequest) {
                    try {
                      const xhr = new window.opener.parent.XMLHttpRequest();
                      xhr.open('GET', 'data:text/plain,test', true);
                      xhr.onload = () => {
                        const msg = '⚠️ VULNERABILITY: Can use host page XMLHttpRequest!';
                        document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                        logMessage(msg);
                      };
                      xhr.onerror = () => {
                        const msg = '✓ SECURE: Host page XMLHttpRequest blocked';
                        document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                        logMessage(msg);
                      };
                      xhr.send();
                    } catch (e) {
                      const msg = '✓ SECURE: Host page XMLHttpRequest blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent XMLHttpRequest access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent XMLHttpRequest access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f(
            "🧹 CLEANUP: Closed parent XMLHttpRequest access test popup"
          );
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent XMLHttpRequest - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, ya = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent Fetch API access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to use parent Fetch API...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent Fetch API Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  // IMPORTANT: Test if popup can use the opener's parent's Fetch API (the host page that contains the iframe)
                  if (window.opener && window.opener.parent && window.opener.parent.fetch) {
                    try {
                      window.opener.parent.fetch('data:text/plain,test')
                        .then(response => response.text())
                        .then(data => {
                          const msg = '⚠️ VULNERABILITY: Can use host page Fetch API!';
                          document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                          logMessage(msg);
                        })
                        .catch(error => {
                          const msg = '✓ SECURE: Host page Fetch API blocked';
                          document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                          logMessage(msg);
                        });
                    } catch (e) {
                      const msg = '✓ SECURE: Host page Fetch API blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent Fetch API access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent Fetch API access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent Fetch API access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent Fetch API - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, le = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent WebSocket access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f("⚠ TESTING: Popup attempting to use parent WebSocket...");
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent WebSocket Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  // IMPORTANT: Test if popup can use the opener's parent's WebSocket (the host page that contains the iframe)
                  if (window.opener && window.opener.parent && window.opener.parent.WebSocket) {
                    try {
                      const ws = new window.opener.parent.WebSocket('wss://echo.websocket.org');
                      ws.onopen = () => {
                        const msg = '⚠️ VULNERABILITY: Can use host page WebSocket!';
                        document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                        logMessage(msg);
                        ws.close();
                      };
                      ws.onerror = () => {
                        const msg = '✓ SECURE: Host page WebSocket blocked';
                        document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                        logMessage(msg);
                      };
                    } catch (e) {
                      const msg = '✓ SECURE: Host page WebSocket blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent WebSocket access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent WebSocket access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f("🧹 CLEANUP: Closed parent WebSocket access test popup");
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent WebSocket - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  }, Ue = () => {
    let m = 0, C = 0;
    try {
      f("⚠ TESTING: Popup to parent Service Worker access...");
      const R = window.open("", "_blank", "width=400,height=300");
      if (!R)
        return f("✓ SECURE: Popup blocked by browser (attack prevented)"), f("⚠ INFO: Cannot test popup attacks if popups are blocked"), { passed: !0, errors: 0, warnings: C };
      Me((F) => [...F, R]), f(
        "⚠ TESTING: Popup attempting to access parent Service Worker..."
      );
      try {
        R.document.write(`
          <html>
            <body>
              <h1>Parent Service Worker Access Test</h1>
              <script>
                function logMessage(msg) {
                  console.log(msg);
                  if (window.opener) {
                    window.opener.postMessage(msg, '*');
                  }
                }
                
                try {
                  // IMPORTANT: Test if popup can access the opener's parent's Service Worker (the host page that contains the iframe)
                  if (window.opener && window.opener.parent && window.opener.parent.navigator && window.opener.parent.navigator.serviceWorker) {
                    try {
                      window.opener.parent.navigator.serviceWorker.getRegistrations()
                        .then(registrations => {
                          const msg = '⚠️ VULNERABILITY: Can access host page Service Workers!';
                          document.body.innerHTML += '<p style="color: red;">' + msg + '</p>';
                          document.body.innerHTML += '<p>Registrations: ' + registrations.length + '</p>';
                          logMessage(msg);
                        })
                        .catch(error => {
                          const msg = '✓ SECURE: Host page Service Worker access blocked';
                          document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                          logMessage(msg);
                        });
                    } catch (e) {
                      const msg = '✓ SECURE: Host page Service Worker blocked - ' + e.name;
                      document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                      logMessage(msg);
                    }
                  } else {
                    const msg = '✓ SECURE: Cannot access opener.parent';
                    document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                    logMessage(msg);
                  }
                } catch (e) {
                  const msg = '✓ SECURE: Opener parent access blocked - ' + e.name;
                  document.body.innerHTML += '<p style="color: green;">' + msg + '</p>';
                  logMessage(msg);
                }
              <\/script>
            </body>
          </html>
        `), R.document.close(), f("✓ SUCCESS: Parent Service Worker access test executed");
      } catch (F) {
        f(
          `✗ FAILED: Parent Service Worker access test failed - ${F.message}`
        ), m++;
      }
      return setTimeout(() => {
        try {
          R.close(), f(
            "🧹 CLEANUP: Closed parent Service Worker access test popup"
          );
        } catch {
        }
      }, 3e3), { passed: m === 0, errors: m, warnings: C };
    } catch (R) {
      return f(`✗ FAILED: Popup to parent Service Worker - ${R.message}`), m++, { passed: !1, errors: m, warnings: C };
    }
  };
  return Xr.useEffect(() => () => {
    Lt && clearInterval(Lt);
  }, [Lt]), Xr.useEffect(() => {
    const m = (C) => {
      Ke.some((R) => R === C.source) && C.data && typeof C.data == "string" && f(`[Popup] ${C.data}`);
    };
    return window.addEventListener("message", m), () => {
      window.removeEventListener("message", m);
    };
  }, [Ke]), Xr.useEffect(() => () => {
    Ke.forEach((m) => {
      try {
        m.closed || m.close();
      } catch {
      }
    });
  }, [Ke]), /* @__PURE__ */ ye.jsxs("div", { style: St, children: [
    /* @__PURE__ */ ye.jsxs("div", { style: Pe, children: [
      /* @__PURE__ */ ye.jsx(
        "h2",
        {
          style: {
            marginTop: 0,
            fontSize: "18px",
            color: pe ? "#60a5fa" : "#007bff"
          },
          children: "🔧 DOM API Tests"
        }
      ),
      /* @__PURE__ */ ye.jsxs(
        "p",
        {
          style: { fontSize: "12px", marginBottom: "15px", lineHeight: "1.4" },
          children: [
            "Comprehensive test suite for DOM APIs requiring",
            " ",
            /* @__PURE__ */ ye.jsx("strong", { children: "allow-same-origin" }),
            "."
          ]
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: {
            ...Ne,
            backgroundColor: fe ? "#6c757d" : "#28a745",
            fontWeight: "bold",
            fontSize: "14px",
            marginBottom: "15px"
          },
          onClick: De,
          disabled: fe,
          children: fe ? `⏳ Running... (${oe}/21)` : "▶️ Run All Tests Again"
        }
      ),
      /* @__PURE__ */ ye.jsx("div", { style: Ct, children: "Basic DOM Tests" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: re, children: "Basic DOM Manipulation" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: Ae, children: "Document Body Access" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: ue, children: "Custom Elements" }),
      /* @__PURE__ */ ye.jsx("div", { style: Ct, children: "DOM Manipulation" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: O, children: "insertBefore()" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: W, children: "replaceChild()" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: qe, children: "cloneNode()" }),
      /* @__PURE__ */ ye.jsx("div", { style: Ct, children: "Advanced DOM" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: Ve, children: "DocumentFragment" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: vt, children: "innerHTML" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: ct, children: "Event Listeners" }),
      /* @__PURE__ */ ye.jsx("button", { style: Ne, onClick: lt, children: "Shadow DOM" }),
      /* @__PURE__ */ ye.jsx("div", { style: { ...Ct, color: "#dc3545" }, children: "🔒 Storage APIs" }),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: ft,
          children: "localStorage"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: ht,
          children: "sessionStorage"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: $t,
          children: "IndexedDB"
        }
      ),
      /* @__PURE__ */ ye.jsx("div", { style: { ...Ct, color: "#ffc107" }, children: "🌐 Network APIs" }),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#ffc107", color: "#000" },
          onClick: Sn,
          children: "XMLHttpRequest"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#ffc107", color: "#000" },
          onClick: rr,
          children: "Fetch API"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#ffc107", color: "#000" },
          onClick: hn,
          children: "Blob & Object URL"
        }
      ),
      /* @__PURE__ */ ye.jsxs(
        "button",
        {
          style: {
            ...Ne,
            backgroundColor: kt ? "#dc3545" : "#17a2b8",
            color: "#fff"
          },
          onClick: Qn,
          children: [
            kt ? "🛑 Stop" : "🔄",
            " Background Fetch"
          ]
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#6f42c1", color: "#fff" },
          onClick: Rn,
          children: "🌐 Local Network Access"
        }
      ),
      /* @__PURE__ */ ye.jsx("div", { style: { ...Ct, color: "#28a745" }, children: "🍪 Security Tests" }),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#28a745" },
          onClick: xn,
          children: "Cookie Access"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#17a2b8" },
          onClick: sr,
          children: "Iframe Sandbox Detection"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#fd7e14" },
          onClick: ma,
          children: "React Internal Processing"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#6f42c1" },
          onClick: kr,
          children: "Parent Window"
        }
      ),
      /* @__PURE__ */ ye.jsx("div", { style: { ...Ct, color: "#dc3545" }, children: "🚨 Popup Attack Tests" }),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: On,
          children: "Basic Popup Creation"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: mn,
          children: "Popup to Parent Window Access"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Dn,
          children: "Popup to Parent Comprehensive"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Xn,
          children: "Popup Sandbox Escape Detection"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Kr,
          children: "Popup to Parent Cookie Access"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: En,
          children: "Popup to Parent LocalStorage"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Kn,
          children: "Popup to Parent SessionStorage"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Rr,
          children: "Popup to Parent IndexedDB"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Jr,
          children: "Popup to Parent XMLHttpRequest"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: ya,
          children: "Popup to Parent Fetch API"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: le,
          children: "Popup to Parent WebSocket"
        }
      ),
      /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#dc3545" },
          onClick: Ue,
          children: "Popup to Parent Service Worker"
        }
      ),
      /* @__PURE__ */ ye.jsx("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ ye.jsx(
        "button",
        {
          style: { ...Ne, backgroundColor: "#6c757d" },
          onClick: Mt,
          children: "Clear Results"
        }
      ) })
    ] }),
    /* @__PURE__ */ ye.jsxs("div", { style: Et, children: [
      /* @__PURE__ */ ye.jsxs("div", { style: Je, children: [
        /* @__PURE__ */ ye.jsx(
          "h1",
          {
            style: {
              margin: 0,
              fontSize: "24px",
              color: pe ? "#60a5fa" : "#007bff"
            },
            children: "Test Results"
          }
        ),
        /* @__PURE__ */ ye.jsx(
          "p",
          {
            style: {
              margin: "8px 0 0 0",
              fontSize: "13px",
              color: pe ? "#9ca3af" : "#666"
            },
            children: fe ? `⏳ Running test ${oe} of 41...` : ne.length === 0 ? "Waiting for tests to run..." : `${ne.filter((m) => m.status === "passed").length} passed, ${ne.filter((m) => m.status === "failed").length} failed`
          }
        )
      ] }),
      /* @__PURE__ */ ye.jsx("div", { style: ln, children: ne.length === 0 ? /* @__PURE__ */ ye.jsx(
        "div",
        {
          style: {
            textAlign: "center",
            padding: "20px",
            color: pe ? "#6b7280" : "#999"
          },
          children: /* @__PURE__ */ ye.jsx("p", { style: { fontSize: "14px" }, children: 'No tests run yet. Click "Run All Tests Again" to start.' })
        }
      ) : /* @__PURE__ */ ye.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "10px"
          },
          children: ne.map((m, C) => /* @__PURE__ */ ye.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: pe ? "#1a1a1a" : "#f8f9fa",
                borderRadius: "4px",
                border: `1px solid ${m.status === "passed" ? "#28a745" : m.status === "failed" ? "#dc3545" : m.status === "running" ? "#ffc107" : pe ? "#444" : "#dee2e6"}`
              },
              children: [
                /* @__PURE__ */ ye.jsx(
                  "div",
                  {
                    style: {
                      fontSize: "18px",
                      marginRight: "10px",
                      minWidth: "24px"
                    },
                    children: m.status === "passed" ? "✅" : m.status === "failed" ? "❌" : m.status === "running" ? "⏳" : "⭕"
                  }
                ),
                /* @__PURE__ */ ye.jsxs("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ ye.jsx(
                    "div",
                    {
                      style: {
                        fontSize: "13px",
                        fontWeight: m.status === "running" ? "bold" : "normal",
                        color: m.status === "passed" ? "#28a745" : m.status === "failed" ? "#dc3545" : m.status === "running" ? "#ffc107" : "inherit"
                      },
                      children: m.name
                    }
                  ),
                  (m.errors !== void 0 || m.warnings !== void 0) && /* @__PURE__ */ ye.jsxs(
                    "div",
                    {
                      style: {
                        fontSize: "11px",
                        marginTop: "2px",
                        color: pe ? "#9ca3af" : "#6c757d"
                      },
                      children: [
                        m.errors !== void 0 && m.errors > 0 && /* @__PURE__ */ ye.jsxs(
                          "span",
                          {
                            style: { color: "#dc3545", marginRight: "8px" },
                            children: [
                              m.errors,
                              " error",
                              m.errors !== 1 ? "s" : ""
                            ]
                          }
                        ),
                        m.warnings !== void 0 && m.warnings > 0 && /* @__PURE__ */ ye.jsxs("span", { style: { color: "#ffc107" }, children: [
                          m.warnings,
                          " warning",
                          m.warnings !== 1 ? "s" : ""
                        ] })
                      ]
                    }
                  )
                ] })
              ]
            },
            C
          ))
        }
      ) }),
      /* @__PURE__ */ ye.jsx("div", { style: Zt, children: /* @__PURE__ */ ye.jsxs(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ ye.jsx("span", { children: "📝 Detailed Logs" }),
            /* @__PURE__ */ ye.jsx(
              "button",
              {
                style: {
                  ...Ne,
                  backgroundColor: "#6c757d",
                  padding: "6px 12px",
                  fontSize: "12px",
                  margin: 0,
                  width: "auto",
                  minWidth: "auto"
                },
                onClick: Mt,
                children: "Clear Logs"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ ye.jsx("div", { style: Bt, children: V.length === 0 ? /* @__PURE__ */ ye.jsx(
        "div",
        {
          style: {
            textAlign: "center",
            padding: "40px",
            color: pe ? "#6b7280" : "#999"
          },
          children: /* @__PURE__ */ ye.jsx("p", { style: { fontSize: "14px" }, children: fe ? "⏳ Generating logs..." : "No logs yet" })
        }
      ) : /* @__PURE__ */ ye.jsxs(ye.Fragment, { children: [
        V.map((m, C) => /* @__PURE__ */ ye.jsx(
          "div",
          {
            style: {
              marginBottom: "4px",
              color: m.includes("✓ SUCCESS") || m.includes("✅") ? "#28a745" : m.includes("✗ FAILED") || m.includes("✗ BLOCKED") ? "#dc3545" : m.includes("⚠") || m.includes("⏳") ? "#ffc107" : m.includes("🧹") ? "#6c757d" : m.includes("▶️") ? "#17a2b8" : m.includes("═") || m.includes("---") ? pe ? "#60a5fa" : "#007bff" : "inherit",
              fontWeight: m.includes("═") || m.includes("▶️") ? "bold" : "normal"
            },
            children: m
          },
          C
        )),
        /* @__PURE__ */ ye.jsx("div", { ref: Rt })
      ] }) })
    ] }),
    /* @__PURE__ */ ye.jsx(
      "div",
      {
        ref: Fe,
        style: {
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          visibility: "hidden"
        }
      }
    )
  ] });
}, O1 = R1(L1, {
  props: {
    theme: "string"
  }
});
customElements.define("dom-test-card", O1);
