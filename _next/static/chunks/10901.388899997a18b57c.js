(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [10901],
  {
    17876: function (e, t, n) {
      var r = 0 / 0,
        i = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt,
        l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        a = "object" == typeof self && self && self.Object === Object && self,
        f = l || a || Function("return this")(),
        d = Object.prototype.toString,
        h = Math.max,
        p = Math.min,
        m = function () {
          return f.Date.now();
        };
      function y(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function v(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == d.call(t))
        )
          return r;
        if (y(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = y(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var l = s.test(e);
        return l || u.test(e) ? c(e.slice(2), l ? 2 : 8) : o.test(e) ? r : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          i,
          o,
          s,
          u,
          c,
          l = 0,
          a = !1,
          f = !1,
          d = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function S(t) {
          var n = r,
            o = i;
          return (r = i = void 0), (l = t), (s = e.apply(o, n));
        }
        function _(e) {
          var n = e - c,
            r = e - l;
          return void 0 === c || n >= t || n < 0 || (f && r >= o);
        }
        function b() {
          var e,
            n,
            r,
            i = m();
          if (_(i)) return g(i);
          u = setTimeout(
            b,
            ((e = i - c), (n = i - l), (r = t - e), f ? p(r, o - n) : r)
          );
        }
        function g(e) {
          return ((u = void 0), d && r) ? S(e) : ((r = i = void 0), s);
        }
        function w() {
          var e,
            n = m(),
            o = _(n);
          if (((r = arguments), (i = this), (c = n), o)) {
            if (void 0 === u)
              return (l = e = c), (u = setTimeout(b, t)), a ? S(e) : s;
            if (f) return (u = setTimeout(b, t)), S(c);
          }
          return void 0 === u && (u = setTimeout(b, t)), s;
        }
        return (
          (t = v(t) || 0),
          y(n) &&
            ((a = !!n.leading),
            (o = (f = "maxWait" in n) ? h(v(n.maxWait) || 0, t) : o),
            (d = "trailing" in n ? !!n.trailing : d)),
          (w.cancel = function () {
            void 0 !== u && clearTimeout(u), (l = 0), (r = c = i = u = void 0);
          }),
          (w.flush = function () {
            return void 0 === u ? s : g(m());
          }),
          w
        );
      };
    },
    89445: function (e, t, n) {
      "use strict";
      var r, i;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (i = n.g.process) ? void 0 : i.env)
          ? n.g.process
          : n(61345);
    },
    23581: function () {},
    61345: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                i = (e.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function u(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                  n = s;
                }
              })();
              var c = [],
                l = !1,
                a = -1;
              function f() {
                l &&
                  r &&
                  ((l = !1),
                  r.length ? (c = r.concat(c)) : (a = -1),
                  c.length && d());
              }
              function d() {
                if (!l) {
                  var e = u(f);
                  l = !0;
                  for (var t = c.length; t; ) {
                    for (r = c, c = []; ++a < t; ) r && r[a].run();
                    (a = -1), (t = c.length);
                  }
                  (r = null),
                    (l = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === s || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || l || u(d);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            s = !0;
          try {
            t[e](o, o.exports, r), (s = !1);
          } finally {
            s && delete n[e];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(229);
        e.exports = i;
      })();
    },
    40310: function (e, t) {
      "use strict";
      var n = Symbol.for("react.element"),
        r =
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
        i = Object.assign,
        o = {};
      function s(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = n || r);
      }
      function u() {}
      function c(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = n || r);
      }
      (s.prototype.isReactComponent = {}),
        (s.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (s.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (u.prototype = s.prototype);
      var l = (c.prototype = new u());
      (l.constructor = c), i(l, s.prototype), (l.isPureReactComponent = !0);
      var a = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, r) {
        var i,
          o = {},
          s = null,
          u = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (u = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            a.call(t, i) && !f.hasOwnProperty(i) && (o[i] = t[i]);
        var c = arguments.length - 2;
        if (1 === c) o.children = r;
        else if (1 < c) {
          for (var l = Array(c), d = 0; d < c; d++) l[d] = arguments[d + 2];
          o.children = l;
        }
        if (e && e.defaultProps)
          for (i in (c = e.defaultProps)) void 0 === o[i] && (o[i] = c[i]);
        return { $$typeof: n, type: e, key: s, ref: u, props: o, _owner: null };
      };
    },
    86442: function (e, t, n) {
      "use strict";
      e.exports = n(40310);
    },
    67392: function (e, t, n) {
      "use strict";
      var r = n(89445);
      n(23581);
      var i = n(55881),
        o = i && "object" == typeof i && "default" in i ? i : { default: i },
        s = void 0 !== r && r.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        c = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              o = void 0 === i ? s : i;
            l(u(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              l("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = o),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var c =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = c ? c.getAttribute("content") : null;
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              l(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                l(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              if (
                (l(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (s ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              if (
                (l(u(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    s ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (t.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var n =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  s ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                l(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              if ("undefined" == typeof window) {
                this._serverSheet.deleteRule(e);
                return;
              }
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                l(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (t.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, n) {
                    return (
                      n
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(n).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (t.makeStyleTag = function (e, t, n) {
              t &&
                l(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var a = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        f = {};
      function d(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return f[r] || (f[r] = "jsx-" + a(e + "-" + n)), f[r];
      }
      function h(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return (
          f[n] || (f[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), f[n]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              o = void 0 !== i && i;
            (this._sheet =
              r || new c({ name: "styled-jsx", optimizeForSpeed: o })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof o &&
                (this._sheet.setOptimizeForSpeed(o),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var o = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = o), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return o.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = d(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return h(i, e);
                      })
                    : [h(i, t)],
                };
              }
              return { styleId: d(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        m = i.createContext(null);
      m.displayName = "StyleSheetContext";
      var y = o.default.useInsertionEffect || o.default.useLayoutEffect,
        v = "undefined" != typeof window ? new p() : void 0;
      function S(e) {
        var t = v || i.useContext(m);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : y(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (S.dynamic = function (e) {
        return e
          .map(function (e) {
            return d(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = S);
    },
    19487: function (e, t, n) {
      "use strict";
      e.exports = n(67392).style;
    },
    83977: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(90132),
        i = n(55881),
        o = n(26544),
        s = n(17876);
      let u = [],
        c = { width: "100%", height: "100%" },
        l = (0, i.forwardRef)(function (e, t) {
          var n;
          let {
              className: o,
              children: l,
              debounceTime: a = 300,
              ignoreDimensions: f = u,
              parentSizeStyles: d,
              enableDebounceLeadingCall: h = !0,
              resizeObserverPolyfill: p,
              ...m
            } = e,
            y = (0, i.useRef)(null),
            v = (0, i.useRef)(0),
            [S, _] = (0, i.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            b = (0, i.useMemo)(() => {
              let e = Array.isArray(f) ? f : [f];
              return s(
                (t) => {
                  _((n) =>
                    Object.keys(n)
                      .filter((e) => n[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? n
                      : t
                  );
                },
                a,
                { leading: h }
              );
            }, [a, h, f]);
          return (
            (0, i.useEffect)(() => {
              let e = new (p || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  var t;
                  let {
                    left: n,
                    top: r,
                    width: i,
                    height: o,
                  } = null !== (t = null == e ? void 0 : e.contentRect) &&
                  void 0 !== t
                    ? t
                    : {};
                  v.current = window.requestAnimationFrame(() => {
                    b({ width: i, height: o, top: r, left: n });
                  });
                });
              });
              return (
                y.current && e.observe(y.current),
                () => {
                  window.cancelAnimationFrame(v.current),
                    e.disconnect(),
                    b.cancel();
                }
              );
            }, [b, p]),
            (0, r.jsx)("div", {
              style: { ...c, ...d },
              ref:
                ((n = [t, y]),
                (e) => {
                  n.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: o,
              ...m,
              children: l({ ...S, ref: y.current, resize: b }),
            })
          );
        }),
        a = (0, i.forwardRef)((e, t) => {
          let {
              scene: n,
              style: s,
              onSplineMouseDown: u,
              onSplineMouseUp: c,
              onSplineMouseHover: a,
              onSplineKeyDown: f,
              onSplineKeyUp: d,
              onSplineStart: h,
              onSplineLookAt: p,
              onSplineFollow: m,
              onSplineScroll: y,
              onLoad: v,
              renderOnDemand: S = !0,
              children: _,
              ...b
            } = e,
            g = (0, i.useRef)(null),
            [w, R] = (0, i.useState)(!0),
            [j, x] = (0, i.useState)();
          if (j) throw j;
          return (
            (0, i.useEffect)(() => {
              let e;
              R(!0);
              let t = [
                { name: "mouseDown", cb: u },
                { name: "mouseUp", cb: c },
                { name: "mouseHover", cb: a },
                { name: "keyDown", cb: f },
                { name: "keyUp", cb: d },
                { name: "start", cb: h },
                { name: "lookAt", cb: p },
                { name: "follow", cb: m },
                { name: "scroll", cb: y },
              ];
              return (
                g.current &&
                  ((e = new o.M(g.current, { renderOnDemand: S })),
                  (async function () {
                    for (let r of (await e.load(n), t))
                      r.cb && e.addEventListener(r.name, r.cb);
                    R(!1), null == v || v(e);
                  })().catch((e) => {
                    x(e);
                  })),
                () => {
                  for (let n of t) n.cb && e.removeEventListener(n.name, n.cb);
                  e.dispose();
                }
              );
            }, [n]),
            (0, r.jsx)(l, {
              ref: t,
              parentSizeStyles: { overflow: "hidden", ...s },
              debounceTime: 50,
              ...b,
              children: () =>
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    w && _,
                    (0, r.jsx)("canvas", {
                      ref: g,
                      style: { display: w ? "none" : "block" },
                    }),
                  ],
                }),
            })
          );
        });
    },
  },
]);
