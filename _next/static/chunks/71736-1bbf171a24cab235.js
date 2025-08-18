(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [71736],
  {
    17876: function (t, e, r) {
      var o = 0 / 0,
        n = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt,
        f = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        s = "object" == typeof self && self && self.Object === Object && self,
        l = f || s || Function("return this")(),
        p = Object.prototype.toString,
        d = Math.max,
        h = Math.min,
        y = function () {
          return l.Date.now();
        };
      function v(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function m(t) {
        if ("number" == typeof t) return t;
        if (
          "symbol" == typeof (e = t) ||
          (e && "object" == typeof e && "[object Symbol]" == p.call(e))
        )
          return o;
        if (v(t)) {
          var e,
            r = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = v(r) ? r + "" : r;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(n, "");
        var f = i.test(t);
        return f || u.test(t) ? c(t.slice(2), f ? 2 : 8) : a.test(t) ? o : +t;
      }
      t.exports = function (t, e, r) {
        var o,
          n,
          a,
          i,
          u,
          c,
          f = 0,
          s = !1,
          l = !1,
          p = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function b(e) {
          var r = o,
            a = n;
          return (o = n = void 0), (f = e), (i = t.apply(a, r));
        }
        function k(t) {
          var r = t - c,
            o = t - f;
          return void 0 === c || r >= e || r < 0 || (l && o >= a);
        }
        function w() {
          var t,
            r,
            o,
            n = y();
          if (k(n)) return g(n);
          u = setTimeout(
            w,
            ((t = n - c), (r = n - f), (o = e - t), l ? h(o, a - r) : o)
          );
        }
        function g(t) {
          return ((u = void 0), p && o) ? b(t) : ((o = n = void 0), i);
        }
        function S() {
          var t,
            r = y(),
            a = k(r);
          if (((o = arguments), (n = this), (c = r), a)) {
            if (void 0 === u)
              return (f = t = c), (u = setTimeout(w, e)), s ? b(t) : i;
            if (l) return (u = setTimeout(w, e)), b(c);
          }
          return void 0 === u && (u = setTimeout(w, e)), i;
        }
        return (
          (e = m(e) || 0),
          v(r) &&
            ((s = !!r.leading),
            (a = (l = "maxWait" in r) ? d(m(r.maxWait) || 0, e) : a),
            (p = "trailing" in r ? !!r.trailing : p)),
          (S.cancel = function () {
            void 0 !== u && clearTimeout(u), (f = 0), (o = c = n = u = void 0);
          }),
          (S.flush = function () {
            return void 0 === u ? i : g(y());
          }),
          S
        );
      };
    },
    98745: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return c;
        },
      });
      var o = r(55881);
      let n = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return e.filter((t, e, r) => !!t && r.indexOf(t) === e).join(" ");
        };
      var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let u = (0, o.forwardRef)((t, e) => {
          let {
            color: r = "currentColor",
            size: n = 24,
            strokeWidth: u = 2,
            absoluteStrokeWidth: c,
            className: f = "",
            children: s,
            iconNode: l,
            ...p
          } = t;
          return (0, o.createElement)(
            "svg",
            {
              ref: e,
              ...i,
              width: n,
              height: n,
              stroke: r,
              strokeWidth: c ? (24 * Number(u)) / Number(n) : u,
              className: a("lucide", f),
              ...p,
            },
            [
              ...l.map((t) => {
                let [e, r] = t;
                return (0, o.createElement)(e, r);
              }),
              ...(Array.isArray(s) ? s : [s]),
            ]
          );
        }),
        c = (t, e) => {
          let r = (0, o.forwardRef)((r, i) => {
            let { className: c, ...f } = r;
            return (0, o.createElement)(u, {
              ref: i,
              iconNode: e,
              className: a("lucide-".concat(n(t)), c),
              ...f,
            });
          });
          return (r.displayName = "".concat(t)), r;
        };
    },
    44964: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      let o = (0, r(98745).Z)("BadgeDollarSign", [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
          },
        ],
        [
          "path",
          { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
        ],
        ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ]);
    },
    5893: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      let o = (0, r(98745).Z)("ChartArea", [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        [
          "path",
          {
            d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
            key: "q0gr47",
          },
        ],
      ]);
    },
    15031: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      let o = (0, r(98745).Z)("ChartCandlestick", [
        ["path", { d: "M9 5v4", key: "14uxtq" }],
        [
          "rect",
          { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" },
        ],
        ["path", { d: "M9 15v2", key: "r5rk32" }],
        ["path", { d: "M17 3v2", key: "1l2re6" }],
        [
          "rect",
          { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" },
        ],
        ["path", { d: "M17 13v3", key: "5l0wba" }],
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
      ]);
    },
    749: function (t, e, r) {
      "use strict";
      var o = r(65688);
      r.o(o, "usePathname") &&
        r.d(e, {
          usePathname: function () {
            return o.usePathname;
          },
        }),
        r.o(o, "useRouter") &&
          r.d(e, {
            useRouter: function () {
              return o.useRouter;
            },
          }),
        r.o(o, "useSearchParams") &&
          r.d(e, {
            useSearchParams: function () {
              return o.useSearchParams;
            },
          });
    },
    40310: function (t, e) {
      "use strict";
      var r = Symbol.for("react.element"),
        o =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        n = Object.assign,
        a = {};
      function i(t, e, r) {
        (this.props = t),
          (this.context = e),
          (this.refs = a),
          (this.updater = r || o);
      }
      function u() {}
      function c(t, e, r) {
        (this.props = t),
          (this.context = e),
          (this.refs = a),
          (this.updater = r || o);
      }
      (i.prototype.isReactComponent = {}),
        (i.prototype.setState = function (t, e) {
          if ("object" != typeof t && "function" != typeof t && null != t)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, t, e, "setState");
        }),
        (i.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, "forceUpdate");
        }),
        (u.prototype = i.prototype);
      var f = (c.prototype = new u());
      (f.constructor = c), n(f, i.prototype), (f.isPureReactComponent = !0);
      var s = Object.prototype.hasOwnProperty,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      e.createElement = function (t, e, o) {
        var n,
          a = {},
          i = null,
          u = null;
        if (null != e)
          for (n in (void 0 !== e.ref && (u = e.ref),
          void 0 !== e.key && (i = "" + e.key),
          e))
            s.call(e, n) && !l.hasOwnProperty(n) && (a[n] = e[n]);
        var c = arguments.length - 2;
        if (1 === c) a.children = o;
        else if (1 < c) {
          for (var f = Array(c), p = 0; p < c; p++) f[p] = arguments[p + 2];
          a.children = f;
        }
        if (t && t.defaultProps)
          for (n in (c = t.defaultProps)) void 0 === a[n] && (a[n] = c[n]);
        return { $$typeof: r, type: t, key: i, ref: u, props: a, _owner: null };
      };
    },
    86442: function (t, e, r) {
      "use strict";
      t.exports = r(40310);
    },
    51979: function () {},
    38755: function (t, e, r) {
      "use strict";
      r.d(e, {
        m9: function () {
          return n;
        },
      });
      var o = r(55881);
      function n() {
        let [t, e] = (0, o.useState)(null);
        return [
          t,
          (0, o.useCallback)(async (t) => {
            if (!(null == navigator ? void 0 : navigator.clipboard))
              return console.warn("Clipboard not supported"), !1;
            try {
              return await navigator.clipboard.writeText(t), e(t), !0;
            } catch (t) {
              return console.warn("Copy failed", t), e(null), !1;
            }
          }, []),
        ];
      }
      r(17876), "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
    },
  },
]);
