"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37710],
  {
    1672: function (e, t, r) {
      r.d(t, {
        h3: function () {
          return T;
        },
      });
      var n,
        a,
        o,
        u,
        i,
        l = r(55881);
      function c(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, n = Object.getOwnPropertySymbols(e);
            a < n.length;
            a++
          )
            0 > t.indexOf(n[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (r[n[a]] = e[n[a]]);
        return r;
      }
      function s() {}
      function f(e) {
        return !!(e || "").match(/\d/);
      }
      function d(e) {
        return null == e;
      }
      function v(e) {
        return (
          d(e) ||
          ("number" == typeof e && isNaN(e)) ||
          ("number" == typeof e && !isFinite(e))
        );
      }
      function m(e) {
        return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
      }
      function p(e, t) {
        void 0 === t && (t = !0);
        var r = "-" === e[0],
          n = r && t,
          a = (e = e.replace("-", "")).split(".");
        return {
          beforeDecimal: a[0],
          afterDecimal: a[1] || "",
          hasNegation: r,
          addNegation: n,
        };
      }
      function g(e, t, r) {
        for (var n = "", a = r ? "0" : "", o = 0; o <= t - 1; o++)
          n += e[o] || a;
        return n;
      }
      function h(e, t) {
        return Array(t + 1).join(e);
      }
      function b(e) {
        var t = e + "",
          r = "-" === t[0] ? "-" : "";
        r && (t = t.substring(1));
        var n = t.split(/[eE]/g),
          a = n[0],
          o = n[1];
        if (!(o = Number(o))) return r + a;
        a = a.replace(".", "");
        var u = 1 + o,
          i = a.length;
        return (
          u < 0
            ? (a = "0." + h("0", Math.abs(u)) + a)
            : u >= i
            ? (a += h("0", u - i))
            : (a = (a.substring(0, u) || "0") + "." + a.substring(u)),
          r + a
        );
      }
      function y(e, t, r) {
        if (-1 !== ["", "-"].indexOf(e)) return e;
        var n = (-1 !== e.indexOf(".") || r) && t,
          a = p(e),
          o = a.beforeDecimal,
          u = a.afterDecimal,
          i = a.hasNegation,
          l = parseFloat("0." + (u || "0")),
          c = (u.length <= t ? "0." + u : l.toFixed(t)).split("."),
          s = o;
        return (
          o &&
            Number(c[0]) &&
            (s = o
              .split("")
              .reverse()
              .reduce(function (e, t, r) {
                return e.length > r
                  ? (Number(e[0]) + Number(t)).toString() +
                      e.substring(1, e.length)
                  : t + e;
              }, c[0])),
          (i ? "-" : "") + s + (n ? "." : "") + g(c[1] || "", t, r)
        );
      }
      function S(e, t) {
        if (((e.value = e.value), null !== e)) {
          if (e.createTextRange) {
            var r = e.createTextRange();
            return r.move("character", t), r.select(), !0;
          }
          return e.selectionStart || 0 === e.selectionStart
            ? (e.focus(), e.setSelectionRange(t, t), !0)
            : (e.focus(), !1);
        }
      }
      ((n = i || (i = {})).event = "event"), (n.props = "prop");
      var w =
          ((a = function (e, t) {
            for (
              var r = 0, n = 0, a = e.length, o = t.length;
              e[r] === t[r] && r < a;

            )
              r++;
            for (; e[a - 1 - n] === t[o - 1 - n] && o - n > r && a - n > r; )
              n++;
            return {
              from: { start: r, end: a - n },
              to: { start: r, end: o - n },
            };
          }),
          (u = void 0),
          function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return o &&
              e.length === o.length &&
              e.every(function (e, t) {
                return e === o[t];
              })
              ? u
              : ((o = e), (u = a.apply(void 0, e)));
          }),
        x = function (e, t) {
          var r = Math.min(e.selectionStart, t);
          return {
            from: { start: r, end: e.selectionEnd },
            to: { start: r, end: t },
          };
        };
      function V(e) {
        return Math.max(e.selectionStart, e.selectionEnd);
      }
      function N(e) {
        var t = e.currentValue,
          r = e.formattedValue,
          n = e.currentValueIndex,
          a = e.formattedValueIndex;
        return t[n] === r[a];
      }
      function D(e, t, r, n) {
        var a = e.length;
        if (((t = Math.min(Math.max(t, 0), a)), "left" === n)) {
          for (; t >= 0 && !r[t]; ) t--;
          -1 === t && (t = r.indexOf(!0));
        } else {
          for (; t <= a && !r[t]; ) t++;
          t > a && (t = r.lastIndexOf(!0));
        }
        return -1 === t && (t = a), t;
      }
      function C(e) {
        for (
          var t = Array.from({ length: e.length + 1 }).map(function () {
              return !0;
            }),
            r = 0,
            n = t.length;
          r < n;
          r++
        )
          t[r] = !!(f(e[r]) || f(e[r - 1]));
        return t;
      }
      function R(e, t, r, n, a, o) {
        void 0 === o && (o = s);
        var u,
          i,
          c =
            ((u = function (e, t) {
              var r, o;
              return (
                v(e)
                  ? ((o = ""), (r = ""))
                  : (r =
                      "number" == typeof e || t
                        ? n((o = "number" == typeof e ? b(e) : e))
                        : n((o = a(e, void 0)))),
                { formattedValue: r, numAsString: o }
              );
            }),
            ((i = (0, l.useRef)(u)).current = u),
            (0, l.useRef)(function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return i.current.apply(i, e);
            }).current),
          f = (0, l.useState)(function () {
            return c(d(e) ? t : e, r);
          }),
          m = f[0],
          p = f[1],
          g = e,
          h = r;
        d(e) && ((g = m.numAsString), (h = !0));
        var y = c(g, h);
        return (
          (0, l.useMemo)(
            function () {
              p(y);
            },
            [y.formattedValue]
          ),
          [
            m,
            function (e, t) {
              e.formattedValue !== m.formattedValue &&
                p({ formattedValue: e.formattedValue, numAsString: e.value }),
                o(e, t);
            },
          ]
        );
      }
      function j(e) {
        return e.replace(/[^0-9]/g, "");
      }
      function A(e) {
        return e;
      }
      function I(e) {
        var t = e.type;
        void 0 === t && (t = "text");
        var r = e.displayType;
        void 0 === r && (r = "input");
        var n = e.customInput,
          a = e.renderText,
          o = e.getInputRef,
          u = e.format;
        void 0 === u && (u = A);
        var d = e.removeFormatting;
        void 0 === d && (d = j);
        var v = e.defaultValue,
          m = e.valueIsNumericString,
          p = e.onValueChange,
          g = e.isAllowed,
          h = e.onChange;
        void 0 === h && (h = s);
        var b = e.onKeyDown;
        void 0 === b && (b = s);
        var y = e.onMouseUp;
        void 0 === y && (y = s);
        var I = e.onFocus;
        void 0 === I && (I = s);
        var E = e.onBlur;
        void 0 === E && (E = s);
        var M = e.value,
          T = e.getCaretBoundary;
        void 0 === T && (T = C);
        var O = e.isValidInputCharacter;
        void 0 === O && (O = f);
        var F = e.isCharacterSame,
          k = c(e, [
            "type",
            "displayType",
            "customInput",
            "renderText",
            "getInputRef",
            "format",
            "removeFormatting",
            "defaultValue",
            "valueIsNumericString",
            "onValueChange",
            "isAllowed",
            "onChange",
            "onKeyDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "value",
            "getCaretBoundary",
            "isValidInputCharacter",
            "isCharacterSame",
          ]),
          B = R(M, v, !!m, u, d, p),
          P = B[0],
          K = P.formattedValue,
          W = P.numAsString,
          _ = B[1],
          L = (0, l.useRef)(),
          G = (0, l.useRef)({ formattedValue: K, numAsString: W }),
          $ = function (e, t) {
            (G.current = {
              formattedValue: e.formattedValue,
              numAsString: e.value,
            }),
              _(e, t);
          },
          U = (0, l.useState)(!1),
          z = U[0],
          q = U[1],
          Z = (0, l.useRef)(null),
          H = (0, l.useRef)({ setCaretTimeout: null, focusTimeout: null });
        (0, l.useEffect)(function () {
          return (
            q(!0),
            function () {
              clearTimeout(H.current.setCaretTimeout),
                clearTimeout(H.current.focusTimeout);
            }
          );
        }, []);
        var Y = u,
          J = function (e, t) {
            var r = parseFloat(t);
            return {
              formattedValue: e,
              value: t,
              floatValue: isNaN(r) ? void 0 : r,
            };
          },
          Q = function (e, t, r) {
            (0 !== e.selectionStart || e.selectionEnd !== e.value.length) &&
              (S(e, t),
              (H.current.setCaretTimeout = setTimeout(function () {
                e.value === r && e.selectionStart !== t && S(e, t);
              }, 0)));
          },
          X = function (e, t, r) {
            return D(e, t, T(e), r);
          },
          ee = function (e, t, r) {
            var n = T(t),
              a = (function (e, t, r, n, a, o, u) {
                void 0 === u && (u = N);
                var i = a.findIndex(function (e) {
                    return e;
                  }),
                  l = e.slice(0, i);
                t || r.startsWith(l) || ((t = l), (r = l + r), (n += l.length));
                for (
                  var c = r.length, s = e.length, f = {}, d = Array(c), v = 0;
                  v < c;
                  v++
                ) {
                  d[v] = -1;
                  for (var m = 0; m < s; m++)
                    if (
                      u({
                        currentValue: r,
                        lastValue: t,
                        formattedValue: e,
                        currentValueIndex: v,
                        formattedValueIndex: m,
                      }) &&
                      !0 !== f[m]
                    ) {
                      (d[v] = m), (f[m] = !0);
                      break;
                    }
                }
                for (var p = n; p < c && (-1 === d[p] || !o(r[p])); ) p++;
                var g = p === c || -1 === d[p] ? s : d[p];
                for (p = n - 1; p > 0 && -1 === d[p]; ) p--;
                var h = -1 === p || -1 === d[p] ? 0 : d[p] + 1;
                return h > g ? g : n - h < g - n ? h : g;
              })(t, K, e, r, n, O, F);
            return D(t, a, n);
          },
          et = function (e) {
            var t,
              r = e.formattedValue;
            void 0 === r && (r = "");
            var n = e.input,
              a = e.source,
              o = e.event,
              u = e.numAsString;
            if (n) {
              var i = e.inputValue || n.value,
                l = V(n);
              (n.value = r), void 0 !== (t = ee(i, r, l)) && Q(n, t, r);
            }
            r !== K && $(J(r, u), { event: o, source: a });
          };
        (0, l.useEffect)(
          function () {
            var e = G.current,
              t = e.formattedValue,
              r = e.numAsString;
            (K !== t || W !== r) &&
              $(J(K, W), { event: void 0, source: i.props });
          },
          [K, W]
        );
        var er = Z.current ? V(Z.current) : void 0;
        ("undefined" != typeof window ? l.useLayoutEffect : l.useEffect)(
          function () {
            var e = Z.current;
            if (K !== G.current.formattedValue && e) {
              var t = ee(G.current.formattedValue, K, er);
              (e.value = K), Q(e, t, K);
            }
          },
          [K]
        );
        var en = function (e, t, r) {
            var n = t.target,
              a = Object.assign(
                Object.assign(
                  {},
                  L.current ? x(L.current, n.selectionEnd) : w(K, e)
                ),
                { lastValue: K }
              ),
              o = d(e, a),
              u = Y(o);
            if (((o = d(u, void 0)), g && !g(J(u, o)))) {
              var i = t.target,
                l = ee(e, K, V(i));
              return (i.value = K), Q(i, l, K), !1;
            }
            return (
              et({
                formattedValue: u,
                numAsString: o,
                inputValue: e,
                event: t,
                source: r,
                input: t.target,
              }),
              !0
            );
          },
          ea = function (e, t) {
            void 0 === t && (t = 0);
            var r = e.selectionStart,
              n = e.selectionEnd;
            L.current = { selectionStart: r, selectionEnd: n + t };
          },
          eo = Object.assign(
            {
              inputMode:
                z &&
                "undefined" != typeof navigator &&
                !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
                  ? "numeric"
                  : void 0,
            },
            k,
            {
              type: t,
              value: K,
              onChange: function (e) {
                en(e.target.value, e, i.event) && h(e), (L.current = void 0);
              },
              onKeyDown: function (e) {
                var t,
                  r = e.target,
                  n = e.key,
                  a = r.selectionStart,
                  o = r.selectionEnd,
                  u = r.value;
                void 0 === u && (u = ""),
                  "ArrowLeft" === n || "Backspace" === n
                    ? (t = Math.max(a - 1, 0))
                    : "ArrowRight" === n
                    ? (t = Math.min(a + 1, u.length))
                    : "Delete" === n && (t = a);
                var i = 0;
                "Delete" === n && a === o && (i = 1);
                var l = "ArrowLeft" === n || "ArrowRight" === n;
                if (void 0 === t || (a !== o && !l)) {
                  b(e), ea(r, i);
                  return;
                }
                var c = t;
                l
                  ? (c = X(u, t, "ArrowLeft" === n ? "left" : "right")) !== t &&
                    e.preventDefault()
                  : "Delete" !== n || O(u[t])
                  ? "Backspace" !== n || O(u[t]) || (c = X(u, t, "left"))
                  : (c = X(u, t, "right")),
                  c !== t && Q(r, c, u),
                  b(e),
                  ea(r, i);
              },
              onMouseUp: function (e) {
                var t = e.target,
                  r = function () {
                    var e = t.selectionStart,
                      r = t.selectionEnd,
                      n = t.value;
                    if ((void 0 === n && (n = ""), e === r)) {
                      var a = X(n, e);
                      a !== e && Q(t, a, n);
                    }
                  };
                r(),
                  requestAnimationFrame(function () {
                    r();
                  }),
                  y(e),
                  ea(t);
              },
              onFocus: function (e) {
                e.persist && e.persist();
                var t = e.target,
                  r = e.currentTarget;
                (Z.current = t),
                  (H.current.focusTimeout = setTimeout(function () {
                    var n = t.selectionStart,
                      a = t.selectionEnd,
                      o = t.value;
                    void 0 === o && (o = "");
                    var u = X(o, n);
                    u === n || (0 === n && a === o.length) || Q(t, u, o),
                      I(
                        Object.assign(Object.assign({}, e), {
                          currentTarget: r,
                        })
                      );
                  }, 0));
              },
              onBlur: function (e) {
                (Z.current = null),
                  clearTimeout(H.current.focusTimeout),
                  clearTimeout(H.current.setCaretTimeout),
                  E(e);
              },
            }
          );
        return "text" === r
          ? a
            ? l.createElement(l.Fragment, null, a(K, k) || null)
            : l.createElement("span", Object.assign({}, k, { ref: o }), K)
          : n
          ? l.createElement(n, Object.assign({}, eo, { ref: o }))
          : l.createElement("input", Object.assign({}, eo, { ref: o }));
      }
      function E(e, t) {
        var r,
          n,
          a,
          o = t.decimalScale,
          u = t.fixedDecimalScale,
          i = t.prefix;
        void 0 === i && (i = "");
        var l = t.suffix;
        void 0 === l && (l = "");
        var c = t.allowNegative,
          s = t.thousandsGroupStyle;
        if ((void 0 === s && (s = "thousand"), "" === e || "-" === e)) return e;
        var f = M(t),
          d = f.thousandSeparator,
          v = f.decimalSeparator,
          m = (0 !== o && -1 !== e.indexOf(".")) || (o && u),
          h = p(e, c),
          b = h.beforeDecimal,
          y = h.afterDecimal,
          S = h.addNegation;
        return (
          void 0 !== o && (y = g(y, o, !!u)),
          d &&
            ((r = b),
            (n = (function (e) {
              switch (e) {
                case "lakh":
                  return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                case "wan":
                  return /(\d)(?=(\d{4})+(?!\d))/g;
                default:
                  return /(\d)(?=(\d{3})+(?!\d))/g;
              }
            })(s)),
            (a = -1 === (a = r.search(/[1-9]/)) ? r.length : a),
            (b =
              r.substring(0, a) +
              r.substring(a, r.length).replace(n, "$1" + d))),
          i && (b = i + b),
          l && (y += l),
          S && (b = "-" + b),
          (e = b + ((m && v) || "") + y)
        );
      }
      function M(e) {
        var t = e.decimalSeparator;
        void 0 === t && (t = ".");
        var r = e.thousandSeparator,
          n = e.allowedDecimalSeparators;
        return (
          !0 === r && (r = ","),
          n || (n = [t, "."]),
          {
            decimalSeparator: t,
            thousandSeparator: r,
            allowedDecimalSeparators: n,
          }
        );
      }
      function T(e) {
        var t,
          r,
          n,
          a,
          o,
          u,
          g,
          h,
          x,
          V,
          N,
          D,
          C,
          j,
          A,
          T,
          O,
          F,
          k,
          B,
          P,
          K,
          W,
          _,
          L,
          G,
          $,
          U,
          z,
          q =
            ((t = (function (e) {
              var t = M(e),
                r = t.thousandSeparator,
                n = t.decimalSeparator,
                a = e.prefix;
              void 0 === a && (a = "");
              var o = e.allowNegative;
              if ((void 0 === o && (o = !0), r === n))
                throw Error(
                  "\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " +
                    r +
                    ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' +
                    n +
                    " (default value for decimalSeparator is .)\n     "
                );
              return (
                a.startsWith("-") &&
                  o &&
                  (console.error(
                    "\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " +
                      a +
                      "\n      allowNegative: " +
                      o +
                      "\n    "
                  ),
                  (o = !1)),
                Object.assign(Object.assign({}, e), { allowNegative: o })
              );
            })((t = e))).decimalSeparator,
            t.allowedDecimalSeparators,
            t.thousandsGroupStyle,
            (r = t.suffix),
            (n = t.allowNegative),
            (a = t.allowLeadingZeros),
            void 0 === (o = t.onKeyDown) && (o = s),
            void 0 === (u = t.onBlur) && (u = s),
            (g = t.thousandSeparator),
            (h = t.decimalScale),
            (x = t.fixedDecimalScale),
            void 0 === (V = t.prefix) && (V = ""),
            (N = t.defaultValue),
            (D = t.value),
            (C = t.valueIsNumericString),
            (j = t.onValueChange),
            (A = c(t, [
              "decimalSeparator",
              "allowedDecimalSeparators",
              "thousandsGroupStyle",
              "suffix",
              "allowNegative",
              "allowLeadingZeros",
              "onKeyDown",
              "onBlur",
              "thousandSeparator",
              "decimalScale",
              "fixedDecimalScale",
              "prefix",
              "defaultValue",
              "value",
              "valueIsNumericString",
              "onValueChange",
            ])),
            (O = (T = M(t)).decimalSeparator),
            (F = T.allowedDecimalSeparators),
            (k = function (e) {
              return E(e, t);
            }),
            (B = function (e, r) {
              return (function (e, t, r) {
                void 0 === t &&
                  (t = {
                    from: { start: 0, end: 0 },
                    to: { start: 0, end: e.length },
                    lastValue: "",
                  });
                var n,
                  a,
                  o,
                  u,
                  i = r.allowNegative,
                  l = r.prefix;
                void 0 === l && (l = "");
                var c = r.suffix;
                void 0 === c && (c = "");
                var s = r.decimalScale,
                  d = t.from,
                  v = t.to,
                  g = v.start,
                  h = v.end,
                  b = M(r),
                  y = b.allowedDecimalSeparators,
                  S = b.decimalSeparator,
                  w = e[h] === S;
                if (f(e) && (e === l || e === c) && "" === t.lastValue)
                  return e;
                if (h - g == 1 && -1 !== y.indexOf(e[g])) {
                  var x = 0 === s ? "" : S;
                  e = e.substring(0, g) + x + e.substring(g + 1, e.length);
                }
                var V = function (e, t, r) {
                    var n = !1,
                      a = !1;
                    l.startsWith("-")
                      ? (n = !1)
                      : e.startsWith("--")
                      ? ((n = !1), (a = !0))
                      : c.startsWith("-") && e.length === c.length
                      ? (n = !1)
                      : "-" === e[0] && (n = !0);
                    var o = n ? 1 : 0;
                    return (
                      a && (o = 2),
                      o && ((e = e.substring(o)), (t -= o), (r -= o)),
                      { value: e, start: t, end: r, hasNegation: n }
                    );
                  },
                  N = V(e, g, h),
                  D = N.hasNegation;
                (e = N.value), (g = N.start), (h = N.end);
                var C = V(t.lastValue, d.start, d.end),
                  R = C.start,
                  j = C.end,
                  A = C.value,
                  I = e.substring(g, h);
                e.length &&
                  A.length &&
                  (R > A.length - c.length || j < l.length) &&
                  !(I && c.startsWith(I)) &&
                  (e = A);
                var E = 0;
                e.startsWith(l) ? (E += l.length) : g < l.length && (E = g),
                  (e = e.substring(E)),
                  (h -= E);
                var T = e.length,
                  O = e.length - c.length;
                e.endsWith(c)
                  ? (T = O)
                  : h > O
                  ? (T = h)
                  : h > e.length - c.length && (T = h),
                  (e = e.substring(0, T)),
                  void 0 === (n = D ? "-" + e : e) && (n = ""),
                  (a = RegExp("(-)(.)*(-)")),
                  (o = /(-)/.test(n)),
                  (u = a.test(n)),
                  (n = n.replace(/-/g, "")),
                  o && !u && i && (n = "-" + n);
                var F = (e = (
                    (e = n).match(RegExp("(^-)|[0-9]|" + m(S), "g")) || []
                  ).join("")).indexOf(S),
                  k = p(
                    (e = e.replace(RegExp(m(S), "g"), function (e, t) {
                      return t === F ? "." : "";
                    })),
                    i
                  ),
                  B = k.beforeDecimal,
                  P = k.afterDecimal,
                  K = k.addNegation;
                return (
                  v.end - v.start < d.end - d.start &&
                    "" === B &&
                    w &&
                    !parseFloat(P) &&
                    (e = K ? "-" : ""),
                  e
                );
              })(e, r, t);
            }),
            (P = d(D) ? N : D),
            (W =
              null != C
                ? C
                : ((K = V),
                  "" === P ||
                    (!(null == K ? void 0 : K.match(/\d/)) &&
                      !(null == r ? void 0 : r.match(/\d/)) &&
                      "string" == typeof P &&
                      !isNaN(Number(P))))),
            d(D)
              ? d(N) || (W = W || "number" == typeof N)
              : (W = W || "number" == typeof D),
            ($ = (G = (L = R(
              (_ = function (e) {
                return v(e)
                  ? e
                  : ("number" == typeof e && (e = b(e)),
                    W && "number" == typeof h)
                  ? y(e, h, !!x)
                  : e;
              })(D),
              _(N),
              !!W,
              k,
              B,
              j
            ))[0]).numAsString),
            (U = G.formattedValue),
            (z = L[1]),
            Object.assign(Object.assign({}, A), {
              value: U,
              valueIsNumericString: !1,
              isValidInputCharacter: function (e) {
                return e === O || f(e);
              },
              isCharacterSame: function (e) {
                var t = e.currentValue,
                  r = e.lastValue,
                  n = e.formattedValue,
                  a = e.currentValueIndex,
                  o = e.formattedValueIndex,
                  u = t[a],
                  i = n[o],
                  l = w(r, t).to,
                  c = function (e) {
                    return B(e).indexOf(".") + V.length;
                  };
                return (
                  !(
                    0 === D &&
                    x &&
                    h &&
                    t[l.start] === O &&
                    c(t) < a &&
                    c(n) > o
                  ) &&
                  ((!!(a >= l.start && a < l.end && F && F.includes(u)) &&
                    i === O) ||
                    u === i)
                );
              },
              onValueChange: z,
              format: k,
              removeFormatting: B,
              getCaretBoundary: function (e) {
                var r, n, a, o, u, i;
                return (
                  void 0 === (n = (r = t).prefix) && (n = ""),
                  void 0 === (a = r.suffix) && (a = ""),
                  (o = Array.from({ length: e.length + 1 }).map(function () {
                    return !0;
                  })),
                  (u = "-" === e[0]),
                  o.fill(!1, 0, n.length + (u ? 1 : 0)),
                  (i = e.length),
                  o.fill(!1, i - a.length + 1, i + 1),
                  o
                );
              },
              onKeyDown: function (e) {
                var t = e.target,
                  r = e.key,
                  a = t.selectionStart,
                  u = t.selectionEnd,
                  i = t.value;
                if (
                  (void 0 === i && (i = ""),
                  ("Backspace" === r || "Delete" === r) && u < V.length)
                ) {
                  e.preventDefault();
                  return;
                }
                if (a !== u) {
                  o(e);
                  return;
                }
                "Backspace" === r &&
                  "-" === i[0] &&
                  a === V.length + 1 &&
                  n &&
                  S(t, 1),
                  h &&
                    x &&
                    ("Backspace" === r && i[a - 1] === O
                      ? (S(t, a - 1), e.preventDefault())
                      : "Delete" === r && i[a] === O && e.preventDefault()),
                  (null == F ? void 0 : F.includes(r)) &&
                    i[a] === O &&
                    S(t, a + 1);
                var l = !0 === g ? "," : g;
                "Backspace" === r && i[a - 1] === l && S(t, a - 1),
                  "Delete" === r && i[a] === l && S(t, a + 1),
                  o(e);
              },
              onBlur: function (e) {
                var r = $;
                r.match(/\d/g) || (r = ""),
                  a ||
                    (r = (function (e) {
                      if (!e) return e;
                      var t = "-" === e[0];
                      t && (e = e.substring(1, e.length));
                      var r = e.split("."),
                        n = r[0].replace(/^0+/, "") || "0",
                        a = r[1] || "";
                      return (t ? "-" : "") + n + (a ? "." + a : "");
                    })(r)),
                  x && h && (r = y(r, h, x)),
                  r !== $ &&
                    z(
                      {
                        formattedValue: E(r, t),
                        value: r,
                        floatValue: parseFloat(r),
                      },
                      { event: e, source: i.event }
                    ),
                  u(e);
              },
            }));
        return l.createElement(I, Object.assign({}, q));
      }
    },
    39402: function (e, t, r) {
      r.d(t, {
        VY: function () {
          return Y;
        },
        aV: function () {
          return Z;
        },
        fC: function () {
          return q;
        },
        xz: function () {
          return H;
        },
      });
      var n = r(55881),
        a = r(68815),
        o = r(40384),
        u = r(90132);
      function i(e, t = []) {
        let r = [],
          a = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let a = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: a } }),
                [r, a]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let o = n.createContext(a),
                i = r.length;
              function l(t) {
                let { scope: r, children: a, ...l } = t,
                  c = r?.[e][i] || o,
                  s = n.useMemo(() => l, Object.values(l));
                return (0, u.jsx)(c.Provider, { value: s, children: a });
              }
              return (
                (r = [...r, a]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (r, u) {
                    let l = u?.[e][i] || o,
                      c = n.useContext(l);
                    if (c) return c;
                    if (void 0 !== a) return a;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let a = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let a = r(e)[`__scope${n}`];
                    return { ...t, ...a };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: a }),
                    [a]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(a, ...t),
          ]
        );
      }
      var l = r(18205),
        c = r(6309),
        s = r(55875),
        f = r(21211),
        d = r(28416),
        v = r(511),
        m = r(42090),
        p = "rovingFocusGroup.onEntryFocus",
        g = { bubbles: !1, cancelable: !0 },
        h = "RovingFocusGroup",
        [b, y, S] = (function (e) {
          let t = e + "CollectionProvider",
            [r, a] = i(t),
            [o, s] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            f = (e) => {
              let { scope: t, children: r } = e,
                a = n.useRef(null),
                i = n.useRef(new Map()).current;
              return (0, u.jsx)(o, {
                scope: t,
                itemMap: i,
                collectionRef: a,
                children: r,
              });
            };
          f.displayName = t;
          let d = e + "CollectionSlot",
            v = n.forwardRef((e, t) => {
              let { scope: r, children: n } = e,
                a = s(d, r),
                o = (0, l.e)(t, a.collectionRef);
              return (0, u.jsx)(c.g7, { ref: o, children: n });
            });
          v.displayName = d;
          let m = e + "CollectionItemSlot",
            p = "data-radix-collection-item",
            g = n.forwardRef((e, t) => {
              let { scope: r, children: a, ...o } = e,
                i = n.useRef(null),
                f = (0, l.e)(t, i),
                d = s(m, r);
              return (
                n.useEffect(
                  () => (
                    d.itemMap.set(i, { ref: i, ...o }),
                    () => void d.itemMap.delete(i)
                  )
                ),
                (0, u.jsx)(c.g7, { [p]: "", ref: f, children: a })
              );
            });
          return (
            (g.displayName = m),
            [
              { Provider: f, Slot: v, ItemSlot: g },
              function (t) {
                let r = s(e + "CollectionConsumer", t);
                return n.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(p, "]")));
                  return Array.from(r.itemMap.values()).sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                }, [r.collectionRef, r.itemMap]);
              },
              a,
            ]
          );
        })(h),
        [w, x] = i(h, [S]),
        [V, N] = w(h),
        D = n.forwardRef((e, t) =>
          (0, u.jsx)(b.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, u.jsx)(b.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, u.jsx)(C, { ...e, ref: t }),
            }),
          })
        );
      D.displayName = h;
      var C = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: o,
              loop: i = !1,
              dir: c,
              currentTabStopId: s,
              defaultCurrentTabStopId: h,
              onCurrentTabStopIdChange: b,
              onEntryFocus: S,
              preventScrollOnEntryFocus: w = !1,
              ...x
            } = e,
            N = n.useRef(null),
            D = (0, l.e)(t, N),
            C = (0, m.gm)(c),
            [R = null, j] = (0, v.T)({ prop: s, defaultProp: h, onChange: b }),
            [A, E] = n.useState(!1),
            M = (0, d.W)(S),
            T = y(r),
            O = n.useRef(!1),
            [F, k] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = N.current;
              if (e)
                return (
                  e.addEventListener(p, M), () => e.removeEventListener(p, M)
                );
            }, [M]),
            (0, u.jsx)(V, {
              scope: r,
              orientation: o,
              dir: C,
              loop: i,
              currentTabStopId: R,
              onItemFocus: n.useCallback((e) => j(e), [j]),
              onItemShiftTab: n.useCallback(() => E(!0), []),
              onFocusableItemAdd: n.useCallback(() => k((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => k((e) => e - 1), []),
              children: (0, u.jsx)(f.WV.div, {
                tabIndex: A || 0 === F ? -1 : 0,
                "data-orientation": o,
                ...x,
                ref: D,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, a.M)(e.onMouseDown, () => {
                  O.current = !0;
                }),
                onFocus: (0, a.M)(e.onFocus, (e) => {
                  let t = !O.current;
                  if (e.target === e.currentTarget && t && !A) {
                    let t = new CustomEvent(p, g);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = T().filter((e) => e.focusable);
                      I(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === R),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        w
                      );
                    }
                  }
                  O.current = !1;
                }),
                onBlur: (0, a.M)(e.onBlur, () => E(!1)),
              }),
            })
          );
        }),
        R = "RovingFocusGroupItem",
        j = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: o = !0,
              active: i = !1,
              tabStopId: l,
              ...c
            } = e,
            d = (0, s.M)(),
            v = l || d,
            m = N(R, r),
            p = m.currentTabStopId === v,
            g = y(r),
            { onFocusableItemAdd: h, onFocusableItemRemove: S } = m;
          return (
            n.useEffect(() => {
              if (o) return h(), () => S();
            }, [o, h, S]),
            (0, u.jsx)(b.ItemSlot, {
              scope: r,
              id: v,
              focusable: o,
              active: i,
              children: (0, u.jsx)(f.WV.span, {
                tabIndex: p ? 0 : -1,
                "data-orientation": m.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, a.M)(e.onMouseDown, (e) => {
                  o ? m.onItemFocus(v) : e.preventDefault();
                }),
                onFocus: (0, a.M)(e.onFocus, () => m.onItemFocus(v)),
                onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    m.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let a =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(a)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(a)
                      )
                    )
                      return A[a];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let a = g()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) a.reverse();
                    else if ("prev" === t || "next" === t) {
                      var r, n;
                      "prev" === t && a.reverse();
                      let o = a.indexOf(e.currentTarget);
                      a = m.loop
                        ? ((r = a),
                          (n = o + 1),
                          r.map((e, t) => r[(n + t) % r.length]))
                        : a.slice(o + 1);
                    }
                    setTimeout(() => I(a));
                  }
                }),
              }),
            })
          );
        });
      j.displayName = R;
      var A = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var E = r(18115),
        M = "Tabs",
        [T, O] = (0, o.b)(M, [x]),
        F = x(),
        [k, B] = T(M),
        P = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: n,
              onValueChange: a,
              defaultValue: o,
              orientation: i = "horizontal",
              dir: l,
              activationMode: c = "automatic",
              ...d
            } = e,
            p = (0, m.gm)(l),
            [g, h] = (0, v.T)({ prop: n, onChange: a, defaultProp: o });
          return (0, u.jsx)(k, {
            scope: r,
            baseId: (0, s.M)(),
            value: g,
            onValueChange: h,
            orientation: i,
            dir: p,
            activationMode: c,
            children: (0, u.jsx)(f.WV.div, {
              dir: p,
              "data-orientation": i,
              ...d,
              ref: t,
            }),
          });
        });
      P.displayName = M;
      var K = "TabsList",
        W = n.forwardRef((e, t) => {
          let { __scopeTabs: r, loop: n = !0, ...a } = e,
            o = B(K, r),
            i = F(r);
          return (0, u.jsx)(D, {
            asChild: !0,
            ...i,
            orientation: o.orientation,
            dir: o.dir,
            loop: n,
            children: (0, u.jsx)(f.WV.div, {
              role: "tablist",
              "aria-orientation": o.orientation,
              ...a,
              ref: t,
            }),
          });
        });
      W.displayName = K;
      var _ = "TabsTrigger",
        L = n.forwardRef((e, t) => {
          let { __scopeTabs: r, value: n, disabled: o = !1, ...i } = e,
            l = B(_, r),
            c = F(r),
            s = U(l.baseId, n),
            d = z(l.baseId, n),
            v = n === l.value;
          return (0, u.jsx)(j, {
            asChild: !0,
            ...c,
            focusable: !o,
            active: v,
            children: (0, u.jsx)(f.WV.button, {
              type: "button",
              role: "tab",
              "aria-selected": v,
              "aria-controls": d,
              "data-state": v ? "active" : "inactive",
              "data-disabled": o ? "" : void 0,
              disabled: o,
              id: s,
              ...i,
              ref: t,
              onMouseDown: (0, a.M)(e.onMouseDown, (e) => {
                o || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : l.onValueChange(n);
              }),
              onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && l.onValueChange(n);
              }),
              onFocus: (0, a.M)(e.onFocus, () => {
                let e = "manual" !== l.activationMode;
                v || o || !e || l.onValueChange(n);
              }),
            }),
          });
        });
      L.displayName = _;
      var G = "TabsContent",
        $ = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: a,
              forceMount: o,
              children: i,
              ...l
            } = e,
            c = B(G, r),
            s = U(c.baseId, a),
            d = z(c.baseId, a),
            v = a === c.value,
            m = n.useRef(v);
          return (
            n.useEffect(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, u.jsx)(E.z, {
              present: o || v,
              children: (r) => {
                let { present: n } = r;
                return (0, u.jsx)(f.WV.div, {
                  "data-state": v ? "active" : "inactive",
                  "data-orientation": c.orientation,
                  role: "tabpanel",
                  "aria-labelledby": s,
                  hidden: !n,
                  id: d,
                  tabIndex: 0,
                  ...l,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  children: n && i,
                });
              },
            })
          );
        });
      function U(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function z(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      $.displayName = G;
      var q = P,
        Z = W,
        H = L,
        Y = $;
    },
    93179: function (e, t, r) {
      r.d(t, {
        j: function () {
          return o;
        },
      });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        a = function () {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  a = "";
                if ("string" == typeof t || "number" == typeof t) a += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                  else for (r in t) t[r] && (a && (a += " "), (a += r));
                }
                return a;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        o = (e, t) => (r) => {
          var o;
          if ((null == t ? void 0 : t.variants) == null)
            return a(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: u, defaultVariants: i } = t,
            l = Object.keys(u).map((e) => {
              let t = null == r ? void 0 : r[e],
                a = null == i ? void 0 : i[e];
              if (null === t) return null;
              let o = n(t) || n(a);
              return u[e][o];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return a(
            e,
            l,
            null == t
              ? void 0
              : null === (o = t.compoundVariants) || void 0 === o
              ? void 0
              : o.reduce((e, t) => {
                  let { class: r, className: n, ...a } = t;
                  return Object.entries(a).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...i, ...c }[t])
                      : { ...i, ...c }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    76549: function (e, t, r) {
      r.d(t, {
        v: function () {
          return o;
        },
      });
      var n = r(26290),
        a = r(43306);
      function o(e) {
        let { key: t = "public", name: r = "Public Client" } = e;
        return (0, n.e)({ ...e, key: t, name: r, type: "publicClient" }).extend(
          a.I
        );
      }
    },
  },
]);
