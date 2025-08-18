"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [71180],
  {
    55509: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return u;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        l = function (e) {
          return e && (e.host || l(e.parentNode));
        },
        c = function (e, t, n, c) {
          var u = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = l(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var s = i[n],
            d = [],
            f = new Set(),
            v = new Set(u),
            p = function (e) {
              !e || f.has(e) || (f.add(e), p(e.parentNode));
            };
          u.forEach(p);
          var h = function (e) {
            !e ||
              v.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(c),
                      i = null !== t && "false" !== t,
                      a = (r.get(e) || 0) + 1,
                      l = (s.get(e) || 0) + 1;
                    r.set(e, a),
                      s.set(e, l),
                      d.push(e),
                      1 === a && i && o.set(e, !0),
                      1 === l && e.setAttribute(n, "true"),
                      i || e.setAttribute(c, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            a++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, i),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --a ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        u = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    82051: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
    },
    70316: function (e, t, n) {
      let r;
      n.d(t, {
        x8: function () {
          return e5;
        },
        VY: function () {
          return e0;
        },
        dk: function () {
          return e8;
        },
        aV: function () {
          return e$;
        },
        h_: function () {
          return eQ;
        },
        fC: function () {
          return eG;
        },
        Dx: function () {
          return e1;
        },
        xz: function () {
          return eJ;
        },
      });
      var o,
        i = n(55881),
        a = n(68815),
        l = n(18205),
        c = n(40384),
        u = n(55875),
        s = n(511),
        d = n(21211),
        f = n(28416),
        v = n(53345),
        p = n(90132),
        h = "dismissableLayer.update",
        m = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        g = i.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: c = !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: s,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: E,
              ...S
            } = e,
            C = i.useContext(m),
            [x, R] = i.useState(null),
            L =
              null !== (r = null == x ? void 0 : x.ownerDocument) &&
              void 0 !== r
                ? r
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, T] = i.useState({}),
            D = (0, l.e)(t, (e) => R(e)),
            P = Array.from(C.layers),
            [W] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            _ = P.indexOf(W),
            A = x ? P.indexOf(x) : -1,
            N = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = A >= _,
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, f.W)(e),
                o = i.useRef(!1),
                a = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            b("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !j ||
                n ||
                (null == s || s(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, L),
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, f.W)(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      b(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, L);
          return (
            (0, v.e)((e) => {
              A !== C.layers.size - 1 ||
                (null == u || u(e),
                !e.defaultPrevented && E && (e.preventDefault(), E()));
            }, L),
            i.useEffect(() => {
              if (x)
                return (
                  c &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = L.body.style.pointerEvents),
                      (L.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(x)),
                  C.layers.add(x),
                  w(),
                  () => {
                    c &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (L.body.style.pointerEvents = o);
                  }
                );
            }, [x, L, c, C]),
            i.useEffect(
              () => () => {
                x &&
                  (C.layers.delete(x),
                  C.layersWithOutsidePointerEventsDisabled.delete(x),
                  w());
              },
              [x, C]
            ),
            i.useEffect(() => {
              let e = () => T({});
              return (
                document.addEventListener(h, e),
                () => document.removeEventListener(h, e)
              );
            }, []),
            (0, p.jsx)(d.WV.div, {
              ...S,
              ref: D,
              style: {
                pointerEvents: N ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.M)(e.onFocusCapture, k.onFocusCapture),
              onBlurCapture: (0, a.M)(e.onBlurCapture, k.onBlurCapture),
              onPointerDownCapture: (0, a.M)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function w() {
        let e = new CustomEvent(h);
        document.dispatchEvent(e);
      }
      function b(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, d.jH)(i, a) : i.dispatchEvent(a);
      }
      (g.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(m),
            r = i.useRef(null),
            o = (0, l.e)(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, p.jsx)(d.WV.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var y = "focusScope.autoFocusOnMount",
        E = "focusScope.autoFocusOnUnmount",
        S = { bubbles: !1, cancelable: !0 },
        C = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...c
            } = e,
            [u, s] = i.useState(null),
            v = (0, f.W)(o),
            h = (0, f.W)(a),
            m = i.useRef(null),
            g = (0, l.e)(t, (e) => s(e)),
            w = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (w.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (m.current = t)
                    : L(m.current, { select: !0 });
                },
                t = function (e) {
                  if (w.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || L(m.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && L(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, w.paused]),
            i.useEffect(() => {
              if (u) {
                T.add(w);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(y, S);
                  u.addEventListener(y, v),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (L(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        x(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && L(u));
                }
                return () => {
                  u.removeEventListener(y, v),
                    setTimeout(() => {
                      let t = new CustomEvent(E, S);
                      u.addEventListener(E, h),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          L(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(E, h),
                        T.remove(w);
                    }, 0);
                };
              }
            }, [u, v, h, w]);
          let b = i.useCallback(
            (e) => {
              if ((!n && !r) || w.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = x(e);
                    return [R(t, e), R(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && L(i, { select: !0 }))
                    : (e.preventDefault(), n && L(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, w.paused]
          );
          return (0, p.jsx)(d.WV.div, {
            tabIndex: -1,
            ...c,
            ref: g,
            onKeyDown: b,
          });
        });
      function x(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function R(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function L(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      C.displayName = "FocusScope";
      var T =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = D(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = D(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function D(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var P = n(8108),
        W = n(72146),
        _ = i.forwardRef((e, t) => {
          var n, r;
          let { container: o, ...a } = e,
            [l, c] = i.useState(!1);
          (0, W.b)(() => c(!0), []);
          let u =
            o ||
            (l &&
              (null === (r = globalThis) || void 0 === r
                ? void 0
                : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
          return u
            ? P.createPortal((0, p.jsx)(d.WV.div, { ...a, ref: t }), u)
            : null;
        });
      _.displayName = "Portal";
      var A = n(18115),
        N = n(76867),
        j = n(18794),
        M = "right-scroll-bar-position",
        k = "width-before-scroll-bar";
      function I(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var O = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        F = new WeakMap(),
        z = (0, n(79943)._)(),
        V = function () {},
        H = i.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            l = i.useRef(null),
            c = i.useState({
              onScrollCapture: V,
              onWheelCapture: V,
              onTouchMoveCapture: V,
            }),
            u = c[0],
            s = c[1],
            d = e.forwardProps,
            f = e.children,
            v = e.className,
            p = e.removeScrollBar,
            h = e.enabled,
            m = e.shards,
            g = e.sideCar,
            w = e.noIsolation,
            b = e.inert,
            y = e.allowPinchZoom,
            E = e.as,
            S = e.gapMode,
            C = (0, j.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            x =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return I(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              O(
                function () {
                  var e = F.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    t.forEach(function (e) {
                      r.has(e) || I(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || I(e, o);
                      });
                  }
                  F.set(a, n);
                },
                [n]
              ),
              a),
            R = (0, j.__assign)((0, j.__assign)({}, C), u);
          return i.createElement(
            i.Fragment,
            null,
            h &&
              i.createElement(g, {
                sideCar: z,
                removeScrollBar: p,
                shards: m,
                noIsolation: w,
                inert: b,
                setCallbacks: s,
                allowPinchZoom: !!y,
                lockRef: l,
                gapMode: S,
              }),
            d
              ? i.cloneElement(
                  i.Children.only(f),
                  (0, j.__assign)((0, j.__assign)({}, R), { ref: x })
                )
              : i.createElement(
                  void 0 === E ? "div" : E,
                  (0, j.__assign)({}, R, { className: v, ref: x }),
                  f
                )
          );
        });
      (H.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (H.classNames = { fullWidth: k, zeroRight: M });
      var B = n(54179),
        Y = n(84944),
        X = { left: 0, top: 0, right: 0, gap: 0 },
        U = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        K = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [U(n), U(r), U(o)];
        },
        q = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return X;
          var t = K(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        Z = (0, Y.Ws)(),
        G = "data-scroll-locked",
        J = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(G, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(M, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(k, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(M, " .")
              .concat(M, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(k, " .")
              .concat(k, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(G, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        Q = function () {
          var e = parseInt(document.body.getAttribute(G) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        $ = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(G, (Q() + 1).toString()),
              function () {
                var e = Q() - 1;
                e <= 0
                  ? document.body.removeAttribute(G)
                  : document.body.setAttribute(G, e.toString());
              }
            );
          }, []);
        },
        ee = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          $();
          var a = i.useMemo(
            function () {
              return q(o);
            },
            [o]
          );
          return i.createElement(Z, {
            styles: J(a, !t, o, n ? "" : "!important"),
          });
        },
        et = !1;
      if ("undefined" != typeof window)
        try {
          var en = Object.defineProperty({}, "passive", {
            get: function () {
              return (et = !0), !0;
            },
          });
          window.addEventListener("test", en, en),
            window.removeEventListener("test", en, en);
        } catch (e) {
          et = !1;
        }
      var er = !!et && { passive: !1 },
        eo = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        ei = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              ea(e, r))
            ) {
              var o = el(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        ea = function (e, t) {
          return "v" === e ? eo(t, "overflowY") : eo(t, "overflowX");
        },
        el = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ec = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            c = n.target,
            u = t.contains(c),
            s = !1,
            d = l > 0,
            f = 0,
            v = 0;
          do {
            var p = el(e, c),
              h = p[0],
              m = p[1] - p[2] - a * h;
            (h || m) && ea(e, c) && ((f += m), (v += h)),
              c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
          } while (
            (!u && c !== document.body) ||
            (u && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -l > v)) && (s = !0),
            s
          );
        },
        eu = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        es = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ed = function (e) {
          return e && "current" in e ? e.current : e;
        },
        ef = 0,
        ev = [],
        ep = (0, B.L)(z, function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(ef++)[0],
            a = i.useState(Y.Ws)[0],
            l = i.useRef(e);
          i.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, j.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(ed),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = eu(e),
                a = n.current,
                c = "deltaX" in e ? e.deltaX : a[0] - i[0],
                u = "deltaY" in e ? e.deltaY : a[1] - i[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = ei(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = ei(d, s))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || u) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var v = r.current || o;
              return ec(v, t, e, "h" === v ? c : u, !0);
            }, []),
            u = i.useCallback(function (e) {
              if (ev.length && ev[ev.length - 1] === a) {
                var n = "deltaY" in e ? es(e) : eu(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(ed)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = i.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = i.useCallback(function (e) {
              (n.current = eu(e)), (r.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              s(t.type, es(t), t.target, c(t, e.lockRef.current));
            }, []),
            v = i.useCallback(function (t) {
              s(t.type, eu(t), t.target, c(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              ev.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", u, er),
              document.addEventListener("touchmove", u, er),
              document.addEventListener("touchstart", d, er),
              function () {
                (ev = ev.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", u, er),
                  document.removeEventListener("touchmove", u, er),
                  document.removeEventListener("touchstart", d, er);
              }
            );
          }, []);
          var p = e.removeScrollBar,
            h = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            h
              ? i.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            p ? i.createElement(ee, { gapMode: e.gapMode }) : null
          );
        }),
        eh = i.forwardRef(function (e, t) {
          return i.createElement(
            H,
            (0, j.__assign)({}, e, { ref: t, sideCar: ep })
          );
        });
      eh.classNames = H.classNames;
      var em = n(55509),
        eg = n(6309),
        ew = "Dialog",
        [eb, ey] = (0, c.b)(ew),
        [eE, eS] = eb(ew),
        eC = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            c = i.useRef(null),
            d = i.useRef(null),
            [f = !1, v] = (0, s.T)({ prop: r, defaultProp: o, onChange: a });
          return (0, p.jsx)(eE, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, u.M)(),
            titleId: (0, u.M)(),
            descriptionId: (0, u.M)(),
            open: f,
            onOpenChange: v,
            onOpenToggle: i.useCallback(() => v((e) => !e), [v]),
            modal: l,
            children: n,
          });
        };
      eC.displayName = ew;
      var ex = "DialogTrigger",
        eR = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eS(ex, n),
            i = (0, l.e)(t, o.triggerRef);
          return (0, p.jsx)(d.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": eY(o.open),
            ...r,
            ref: i,
            onClick: (0, a.M)(e.onClick, o.onOpenToggle),
          });
        });
      eR.displayName = ex;
      var eL = "DialogPortal",
        [eT, eD] = eb(eL, { forceMount: void 0 }),
        eP = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            a = eS(eL, t);
          return (0, p.jsx)(eT, {
            scope: t,
            forceMount: n,
            children: i.Children.map(r, (e) =>
              (0, p.jsx)(A.z, {
                present: n || a.open,
                children: (0, p.jsx)(_, {
                  asChild: !0,
                  container: o,
                  children: e,
                }),
              })
            ),
          });
        };
      eP.displayName = eL;
      var eW = "DialogOverlay",
        e_ = i.forwardRef((e, t) => {
          let n = eD(eW, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eS(eW, e.__scopeDialog);
          return i.modal
            ? (0, p.jsx)(A.z, {
                present: r || i.open,
                children: (0, p.jsx)(eA, { ...o, ref: t }),
              })
            : null;
        });
      e_.displayName = eW;
      var eA = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eS(eW, n);
          return (0, p.jsx)(eh, {
            as: eg.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, p.jsx)(d.WV.div, {
              "data-state": eY(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        eN = "DialogContent",
        ej = i.forwardRef((e, t) => {
          let n = eD(eN, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eS(eN, e.__scopeDialog);
          return (0, p.jsx)(A.z, {
            present: r || i.open,
            children: i.modal
              ? (0, p.jsx)(eM, { ...o, ref: t })
              : (0, p.jsx)(ek, { ...o, ref: t }),
          });
        });
      ej.displayName = eN;
      var eM = i.forwardRef((e, t) => {
          let n = eS(eN, e.__scopeDialog),
            r = i.useRef(null),
            o = (0, l.e)(t, n.contentRef, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return (0, em.Ry)(e);
            }, []),
            (0, p.jsx)(eI, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        ek = i.forwardRef((e, t) => {
          let n = eS(eN, e.__scopeDialog),
            r = i.useRef(!1),
            o = i.useRef(!1);
          return (0, p.jsx)(eI, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var i, a;
              null === (i = e.onCloseAutoFocus) || void 0 === i || i.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (a = n.triggerRef.current) ||
                    void 0 === a ||
                    a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              var i, a;
              null === (i = e.onInteractOutside) ||
                void 0 === i ||
                i.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let l = t.target;
              (null === (a = n.triggerRef.current) || void 0 === a
                ? void 0
                : a.contains(l)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        eI = i.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...c
            } = e,
            u = eS(eN, n),
            s = i.useRef(null),
            d = (0, l.e)(t, s);
          return (
            (0, N.EW)(),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(C, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                  children: (0, p.jsx)(g, {
                    role: "dialog",
                    id: u.contentId,
                    "aria-describedby": u.descriptionId,
                    "aria-labelledby": u.titleId,
                    "data-state": eY(u.open),
                    ...c,
                    ref: d,
                    onDismiss: () => u.onOpenChange(!1),
                  }),
                }),
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)(eq, { titleId: u.titleId }),
                    (0, p.jsx)(eZ, {
                      contentRef: s,
                      descriptionId: u.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        eO = "DialogTitle",
        eF = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eS(eO, n);
          return (0, p.jsx)(d.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      eF.displayName = eO;
      var ez = "DialogDescription",
        eV = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eS(ez, n);
          return (0, p.jsx)(d.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      eV.displayName = ez;
      var eH = "DialogClose",
        eB = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eS(eH, n);
          return (0, p.jsx)(d.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, a.M)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function eY(e) {
        return e ? "open" : "closed";
      }
      eB.displayName = eH;
      var eX = "DialogTitleWarning",
        [eU, eK] = (0, c.k)(eX, {
          contentName: eN,
          titleName: eO,
          docsSlug: "dialog",
        }),
        eq = (e) => {
          let { titleId: t } = e,
            n = eK(eX),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            i.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        eZ = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = eK("DialogDescriptionWarning"),
            o =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            i.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(o);
            }, [o, t, n]),
            null
          );
        },
        eG = eC,
        eJ = eR,
        eQ = eP,
        e$ = e_,
        e0 = ej,
        e1 = eF,
        e8 = eV,
        e5 = eB;
    },
    76867: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(55881),
        o = 0;
      function i() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : a()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    14476: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return Z;
        },
        fC: function () {
          return K;
        },
        gb: function () {
          return C;
        },
        l_: function () {
          return q;
        },
        q4: function () {
          return j;
        },
      });
      var r = n(55881),
        o = n(21211),
        i = n(18115),
        a = n(40384),
        l = n(18205),
        c = n(28416),
        u = n(42090),
        s = n(72146),
        d = n(82051),
        f = n(68815),
        v = n(90132),
        p = "ScrollArea",
        [h, m] = (0, a.b)(p),
        [g, w] = h(p),
        b = r.forwardRef((e, t) => {
          let {
              __scopeScrollArea: n,
              type: i = "hover",
              dir: a,
              scrollHideDelay: c = 600,
              ...s
            } = e,
            [d, f] = r.useState(null),
            [p, h] = r.useState(null),
            [m, w] = r.useState(null),
            [b, y] = r.useState(null),
            [E, S] = r.useState(null),
            [C, x] = r.useState(0),
            [R, L] = r.useState(0),
            [T, D] = r.useState(!1),
            [P, W] = r.useState(!1),
            _ = (0, l.e)(t, (e) => f(e)),
            A = (0, u.gm)(a);
          return (0, v.jsx)(g, {
            scope: n,
            type: i,
            dir: A,
            scrollHideDelay: c,
            scrollArea: d,
            viewport: p,
            onViewportChange: h,
            content: m,
            onContentChange: w,
            scrollbarX: b,
            onScrollbarXChange: y,
            scrollbarXEnabled: T,
            onScrollbarXEnabledChange: D,
            scrollbarY: E,
            onScrollbarYChange: S,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: W,
            onCornerWidthChange: x,
            onCornerHeightChange: L,
            children: (0, v.jsx)(o.WV.div, {
              dir: A,
              ...s,
              ref: _,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": C + "px",
                "--radix-scroll-area-corner-height": R + "px",
                ...e.style,
              },
            }),
          });
        });
      b.displayName = p;
      var y = "ScrollAreaViewport",
        E = r.forwardRef((e, t) => {
          let { __scopeScrollArea: n, children: i, nonce: a, ...c } = e,
            u = w(y, n),
            s = r.useRef(null),
            d = (0, l.e)(t, s, u.onViewportChange);
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: a,
              }),
              (0, v.jsx)(o.WV.div, {
                "data-radix-scroll-area-viewport": "",
                ...c,
                ref: d,
                style: {
                  overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                  overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                  ...e.style,
                },
                children: (0, v.jsx)("div", {
                  ref: u.onContentChange,
                  style: { minWidth: "100%", display: "table" },
                  children: i,
                }),
              }),
            ],
          });
        });
      E.displayName = y;
      var S = "ScrollAreaScrollbar",
        C = r.forwardRef((e, t) => {
          let { forceMount: n, ...o } = e,
            i = w(S, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: l } = i,
            c = "horizontal" === e.orientation;
          return (
            r.useEffect(
              () => (
                c ? a(!0) : l(!0),
                () => {
                  c ? a(!1) : l(!1);
                }
              ),
              [c, a, l]
            ),
            "hover" === i.type
              ? (0, v.jsx)(x, { ...o, ref: t, forceMount: n })
              : "scroll" === i.type
              ? (0, v.jsx)(R, { ...o, ref: t, forceMount: n })
              : "auto" === i.type
              ? (0, v.jsx)(L, { ...o, ref: t, forceMount: n })
              : "always" === i.type
              ? (0, v.jsx)(T, { ...o, ref: t })
              : null
          );
        });
      C.displayName = S;
      var x = r.forwardRef((e, t) => {
          let { forceMount: n, ...o } = e,
            a = w(S, e.__scopeScrollArea),
            [l, c] = r.useState(!1);
          return (
            r.useEffect(() => {
              let e = a.scrollArea,
                t = 0;
              if (e) {
                let n = () => {
                    window.clearTimeout(t), c(!0);
                  },
                  r = () => {
                    t = window.setTimeout(() => c(!1), a.scrollHideDelay);
                  };
                return (
                  e.addEventListener("pointerenter", n),
                  e.addEventListener("pointerleave", r),
                  () => {
                    window.clearTimeout(t),
                      e.removeEventListener("pointerenter", n),
                      e.removeEventListener("pointerleave", r);
                  }
                );
              }
            }, [a.scrollArea, a.scrollHideDelay]),
            (0, v.jsx)(i.z, {
              present: n || l,
              children: (0, v.jsx)(L, {
                "data-state": l ? "visible" : "hidden",
                ...o,
                ref: t,
              }),
            })
          );
        }),
        R = r.forwardRef((e, t) => {
          var n, o;
          let { forceMount: a, ...l } = e,
            c = w(S, e.__scopeScrollArea),
            u = "horizontal" === e.orientation,
            s = X(() => p("SCROLL_END"), 100),
            [d, p] =
              ((n = "hidden"),
              (o = {
                hidden: { SCROLL: "scrolling" },
                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                idle: {
                  HIDE: "hidden",
                  SCROLL: "scrolling",
                  POINTER_ENTER: "interacting",
                },
              }),
              r.useReducer((e, t) => {
                let n = o[e][t];
                return null != n ? n : e;
              }, n));
          return (
            r.useEffect(() => {
              if ("idle" === d) {
                let e = window.setTimeout(() => p("HIDE"), c.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [d, c.scrollHideDelay, p]),
            r.useEffect(() => {
              let e = c.viewport,
                t = u ? "scrollLeft" : "scrollTop";
              if (e) {
                let n = e[t],
                  r = () => {
                    let r = e[t];
                    n !== r && (p("SCROLL"), s()), (n = r);
                  };
                return (
                  e.addEventListener("scroll", r),
                  () => e.removeEventListener("scroll", r)
                );
              }
            }, [c.viewport, u, p, s]),
            (0, v.jsx)(i.z, {
              present: a || "hidden" !== d,
              children: (0, v.jsx)(T, {
                "data-state": "hidden" === d ? "hidden" : "visible",
                ...l,
                ref: t,
                onPointerEnter: (0, f.M)(e.onPointerEnter, () =>
                  p("POINTER_ENTER")
                ),
                onPointerLeave: (0, f.M)(e.onPointerLeave, () =>
                  p("POINTER_LEAVE")
                ),
              }),
            })
          );
        }),
        L = r.forwardRef((e, t) => {
          let n = w(S, e.__scopeScrollArea),
            { forceMount: o, ...a } = e,
            [l, c] = r.useState(!1),
            u = "horizontal" === e.orientation,
            s = X(() => {
              if (n.viewport) {
                let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                c(u ? e : t);
              }
            }, 10);
          return (
            U(n.viewport, s),
            U(n.content, s),
            (0, v.jsx)(i.z, {
              present: o || l,
              children: (0, v.jsx)(T, {
                "data-state": l ? "visible" : "hidden",
                ...a,
                ref: t,
              }),
            })
          );
        }),
        T = r.forwardRef((e, t) => {
          let { orientation: n = "vertical", ...o } = e,
            i = w(S, e.__scopeScrollArea),
            a = r.useRef(null),
            l = r.useRef(0),
            [c, u] = r.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            s = z(c.viewport, c.content),
            d = {
              ...o,
              sizes: c,
              onSizesChange: u,
              hasThumb: !!(s > 0 && s < 1),
              onThumbChange: (e) => (a.current = e),
              onThumbPointerUp: () => (l.current = 0),
              onThumbPointerDown: (e) => (l.current = e),
            };
          function f(e, t) {
            return (function (e, t, n) {
              let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "ltr",
                o = V(n),
                i = t || o / 2,
                a = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - (o - i),
                c = n.content - n.viewport;
              return B([a, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e);
            })(e, l.current, c, t);
          }
          return "horizontal" === n
            ? (0, v.jsx)(D, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                  if (i.viewport && a.current) {
                    let e = H(i.viewport.scrollLeft, c, i.dir);
                    a.current.style.transform = "translate3d(".concat(
                      e,
                      "px, 0, 0)"
                    );
                  }
                },
                onWheelScroll: (e) => {
                  i.viewport && (i.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  i.viewport && (i.viewport.scrollLeft = f(e, i.dir));
                },
              })
            : "vertical" === n
            ? (0, v.jsx)(P, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                  if (i.viewport && a.current) {
                    let e = H(i.viewport.scrollTop, c);
                    a.current.style.transform = "translate3d(0, ".concat(
                      e,
                      "px, 0)"
                    );
                  }
                },
                onWheelScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = e);
                },
                onDragScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = f(e));
                },
              })
            : null;
        }),
        D = r.forwardRef((e, t) => {
          let { sizes: n, onSizesChange: o, ...i } = e,
            a = w(S, e.__scopeScrollArea),
            [c, u] = r.useState(),
            s = r.useRef(null),
            d = (0, l.e)(t, s, a.onScrollbarXChange);
          return (
            r.useEffect(() => {
              s.current && u(getComputedStyle(s.current));
            }, [s]),
            (0, v.jsx)(A, {
              "data-orientation": "horizontal",
              ...i,
              ref: d,
              sizes: n,
              style: {
                bottom: 0,
                left:
                  "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                right:
                  "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": V(n) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
              onDragScroll: (t) => e.onDragScroll(t.x),
              onWheelScroll: (t, n) => {
                if (a.viewport) {
                  let r = a.viewport.scrollLeft + t.deltaX;
                  e.onWheelScroll(r), r > 0 && r < n && t.preventDefault();
                }
              },
              onResize: () => {
                s.current &&
                  a.viewport &&
                  c &&
                  o({
                    content: a.viewport.scrollWidth,
                    viewport: a.viewport.offsetWidth,
                    scrollbar: {
                      size: s.current.clientWidth,
                      paddingStart: F(c.paddingLeft),
                      paddingEnd: F(c.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        P = r.forwardRef((e, t) => {
          let { sizes: n, onSizesChange: o, ...i } = e,
            a = w(S, e.__scopeScrollArea),
            [c, u] = r.useState(),
            s = r.useRef(null),
            d = (0, l.e)(t, s, a.onScrollbarYChange);
          return (
            r.useEffect(() => {
              s.current && u(getComputedStyle(s.current));
            }, [s]),
            (0, v.jsx)(A, {
              "data-orientation": "vertical",
              ...i,
              ref: d,
              sizes: n,
              style: {
                top: 0,
                right: "ltr" === a.dir ? 0 : void 0,
                left: "rtl" === a.dir ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": V(n) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
              onDragScroll: (t) => e.onDragScroll(t.y),
              onWheelScroll: (t, n) => {
                if (a.viewport) {
                  let r = a.viewport.scrollTop + t.deltaY;
                  e.onWheelScroll(r), r > 0 && r < n && t.preventDefault();
                }
              },
              onResize: () => {
                s.current &&
                  a.viewport &&
                  c &&
                  o({
                    content: a.viewport.scrollHeight,
                    viewport: a.viewport.offsetHeight,
                    scrollbar: {
                      size: s.current.clientHeight,
                      paddingStart: F(c.paddingTop),
                      paddingEnd: F(c.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [W, _] = h(S),
        A = r.forwardRef((e, t) => {
          let {
              __scopeScrollArea: n,
              sizes: i,
              hasThumb: a,
              onThumbChange: u,
              onThumbPointerUp: s,
              onThumbPointerDown: d,
              onThumbPositionChange: p,
              onDragScroll: h,
              onWheelScroll: m,
              onResize: g,
              ...b
            } = e,
            y = w(S, n),
            [E, C] = r.useState(null),
            x = (0, l.e)(t, (e) => C(e)),
            R = r.useRef(null),
            L = r.useRef(""),
            T = y.viewport,
            D = i.content - i.viewport,
            P = (0, c.W)(m),
            _ = (0, c.W)(p),
            A = X(g, 10);
          function N(e) {
            R.current &&
              h({
                x: e.clientX - R.current.left,
                y: e.clientY - R.current.top,
              });
          }
          return (
            r.useEffect(() => {
              let e = (e) => {
                let t = e.target;
                (null == E ? void 0 : E.contains(t)) && P(e, D);
              };
              return (
                document.addEventListener("wheel", e, { passive: !1 }),
                () => document.removeEventListener("wheel", e, { passive: !1 })
              );
            }, [T, E, D, P]),
            r.useEffect(_, [i, _]),
            U(E, A),
            U(y.content, A),
            (0, v.jsx)(W, {
              scope: n,
              scrollbar: E,
              hasThumb: a,
              onThumbChange: (0, c.W)(u),
              onThumbPointerUp: (0, c.W)(s),
              onThumbPositionChange: _,
              onThumbPointerDown: (0, c.W)(d),
              children: (0, v.jsx)(o.WV.div, {
                ...b,
                ref: x,
                style: { position: "absolute", ...b.style },
                onPointerDown: (0, f.M)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (R.current = E.getBoundingClientRect()),
                    (L.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    y.viewport && (y.viewport.style.scrollBehavior = "auto"),
                    N(e));
                }),
                onPointerMove: (0, f.M)(e.onPointerMove, N),
                onPointerUp: (0, f.M)(e.onPointerUp, (e) => {
                  let t = e.target;
                  t.hasPointerCapture(e.pointerId) &&
                    t.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = L.current),
                    y.viewport && (y.viewport.style.scrollBehavior = ""),
                    (R.current = null);
                }),
              }),
            })
          );
        }),
        N = "ScrollAreaThumb",
        j = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = _(N, e.__scopeScrollArea);
          return (0, v.jsx)(i.z, {
            present: n || o.hasThumb,
            children: (0, v.jsx)(M, { ref: t, ...r }),
          });
        }),
        M = r.forwardRef((e, t) => {
          let { __scopeScrollArea: n, style: i, ...a } = e,
            c = w(N, n),
            u = _(N, n),
            { onThumbPositionChange: s } = u,
            d = (0, l.e)(t, (e) => u.onThumbChange(e)),
            p = r.useRef(),
            h = X(() => {
              p.current && (p.current(), (p.current = void 0));
            }, 100);
          return (
            r.useEffect(() => {
              let e = c.viewport;
              if (e) {
                let t = () => {
                  if ((h(), !p.current)) {
                    let t = Y(e, s);
                    (p.current = t), s();
                  }
                };
                return (
                  s(),
                  e.addEventListener("scroll", t),
                  () => e.removeEventListener("scroll", t)
                );
              }
            }, [c.viewport, h, s]),
            (0, v.jsx)(o.WV.div, {
              "data-state": u.hasThumb ? "visible" : "hidden",
              ...a,
              ref: d,
              style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...i,
              },
              onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, (e) => {
                let t = e.target.getBoundingClientRect(),
                  n = e.clientX - t.left,
                  r = e.clientY - t.top;
                u.onThumbPointerDown({ x: n, y: r });
              }),
              onPointerUp: (0, f.M)(e.onPointerUp, u.onThumbPointerUp),
            })
          );
        });
      j.displayName = N;
      var k = "ScrollAreaCorner",
        I = r.forwardRef((e, t) => {
          let n = w(k, e.__scopeScrollArea),
            r = !!(n.scrollbarX && n.scrollbarY);
          return "scroll" !== n.type && r
            ? (0, v.jsx)(O, { ...e, ref: t })
            : null;
        });
      I.displayName = k;
      var O = r.forwardRef((e, t) => {
        let { __scopeScrollArea: n, ...i } = e,
          a = w(k, n),
          [l, c] = r.useState(0),
          [u, s] = r.useState(0),
          d = !!(l && u);
        return (
          U(a.scrollbarX, () => {
            var e;
            let t =
              (null === (e = a.scrollbarX) || void 0 === e
                ? void 0
                : e.offsetHeight) || 0;
            a.onCornerHeightChange(t), s(t);
          }),
          U(a.scrollbarY, () => {
            var e;
            let t =
              (null === (e = a.scrollbarY) || void 0 === e
                ? void 0
                : e.offsetWidth) || 0;
            a.onCornerWidthChange(t), c(t);
          }),
          d
            ? (0, v.jsx)(o.WV.div, {
                ...i,
                ref: t,
                style: {
                  width: l,
                  height: u,
                  position: "absolute",
                  right: "ltr" === a.dir ? 0 : void 0,
                  left: "rtl" === a.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        );
      });
      function F(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function z(e, t) {
        let n = e / t;
        return isNaN(n) ? 0 : n;
      }
      function V(e) {
        let t = z(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - n) * t, 18);
      }
      function H(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "ltr",
          r = V(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          l = (0, d.u)(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return B([0, a], [0, i - r])(l);
      }
      function B(e, t) {
        return (n) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0]);
        };
      }
      var Y = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          n = { left: e.scrollLeft, top: e.scrollTop },
          r = 0;
        return (
          !(function o() {
            let i = { left: e.scrollLeft, top: e.scrollTop },
              a = n.left !== i.left,
              l = n.top !== i.top;
            (a || l) && t(), (n = i), (r = window.requestAnimationFrame(o));
          })(),
          () => window.cancelAnimationFrame(r)
        );
      };
      function X(e, t) {
        let n = (0, c.W)(e),
          o = r.useRef(0);
        return (
          r.useEffect(() => () => window.clearTimeout(o.current), []),
          r.useCallback(() => {
            window.clearTimeout(o.current),
              (o.current = window.setTimeout(n, t));
          }, [n, t])
        );
      }
      function U(e, t) {
        let n = (0, c.W)(t);
        (0, s.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      var K = b,
        q = E,
        Z = I;
    },
    53345: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(55881),
        o = n(28416);
      function i(e, t = globalThis?.document) {
        let n = (0, o.W)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
  },
]);
