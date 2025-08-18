(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63185],
  {
    17697: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 58705, 23)),
        Promise.resolve().then(n.bind(n, 17714)),
        Promise.resolve().then(n.bind(n, 52513)),
        Promise.resolve().then(n.t.bind(n, 40015, 23)),
        Promise.resolve().then(n.t.bind(n, 93002, 23)),
        Promise.resolve().then(n.t.bind(n, 66648, 23));
    },
    19830: function (e, t) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return l;
          },
          isEqualNode: function () {
            return o;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function i(e) {
        let { type: t, props: n } = e,
          i = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let o = r[e] || e.toLowerCase();
          "script" === t && ("async" === o || "defer" === o || "noModule" === o)
            ? (i[o] = !!n[e])
            : i.setAttribute(o, n[e]);
        }
        let { children: o, dangerouslySetInnerHTML: l } = n;
        return (
          l
            ? (i.innerHTML = l.__html || "")
            : o &&
              (i.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          i
        );
      }
      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function l() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              i = "";
            if (r) {
              let { children: e } = r.props;
              i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            i !== document.title && (document.title = i),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          l = Number(r.content),
          a = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < l;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var u;
          (null == n
            ? void 0
            : null == (u = n.tagName)
            ? void 0
            : u.toLowerCase()) === e && a.push(n);
        }
        let s = t.map(i).filter((e) => {
          for (let t = 0, n = a.length; t < n; t++)
            if (o(a[t], e)) return a.splice(t, 1), !1;
          return !0;
        });
        a.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          s.forEach((e) => n.insertBefore(e, r)),
          (r.content = (l - a.length + s.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    12247: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    58705: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return _;
          },
          handleClientScriptLoad: function () {
            return b;
          },
          initScriptLoader: function () {
            return m;
          },
        });
      let r = n(14080),
        i = n(38966),
        o = n(90132),
        l = r._(n(8108)),
        a = i._(n(55881)),
        u = n(43929),
        s = n(19830),
        c = n(12247),
        d = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        y = (e) => {
          if (l.default.preinit) {
            e.forEach((e) => {
              l.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        h = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: o,
              children: l = "",
              strategy: a = "afterInteractive",
              onError: u,
              stylesheets: c,
            } = e,
            h = n || t;
          if (h && f.has(h)) return;
          if (d.has(t)) {
            f.add(h), d.get(t).then(r, u);
            return;
          }
          let b = () => {
              i && i(), f.add(h);
            },
            m = document.createElement("script"),
            v = new Promise((e, t) => {
              m.addEventListener("load", function (t) {
                e(), r && r.call(this, t), b();
              }),
                m.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          for (let [n, r] of (o
            ? ((m.innerHTML = o.__html || ""), b())
            : l
            ? ((m.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
              b())
            : t && ((m.src = t), d.set(t, v)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = s.DOMAttributeNames[n] || n.toLowerCase();
            m.setAttribute(e, r);
          }
          "worker" === a && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", a),
            c && y(c),
            document.body.appendChild(m);
        };
      function b(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => h(e));
            })
          : h(e);
      }
      function m(e) {
        e.forEach(b),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function v(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: i = null,
            strategy: s = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...y
          } = e,
          {
            updateScripts: b,
            scripts: m,
            getIsSsr: v,
            appDir: _,
            nonce: g,
          } = (0, a.useContext)(u.HeadManagerContext),
          E = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let e = t || n;
          E.current || (i && e && f.has(e) && i(), (E.current = !0));
        }, [i, t, n]);
        let M = (0, a.useRef)(!1);
        if (
          ((0, a.useEffect)(() => {
            !M.current &&
              ("afterInteractive" === s
                ? h(e)
                : "lazyOnload" === s &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => h(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => h(e));
                      })),
              (M.current = !0));
          }, [e, s]),
          ("beforeInteractive" === s || "worker" === s) &&
            (b
              ? ((m[s] = (m[s] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: i, onError: d, ...y },
                ])),
                b(m))
              : v && v()
              ? f.add(t || n)
              : v && !v() && h(e)),
          _)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === s)
          )
            return n
              ? (l.default.preload(
                  n,
                  y.integrity
                    ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: g,
                        crossOrigin: y.crossOrigin,
                      }
                    : { as: "script", nonce: g, crossOrigin: y.crossOrigin }
                ),
                (0, o.jsx)("script", {
                  nonce: g,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...y, id: t }]) +
                      ")",
                  },
                }))
              : (y.dangerouslySetInnerHTML &&
                  ((y.children = y.dangerouslySetInnerHTML.__html),
                  delete y.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: g,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...y, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === s &&
            n &&
            l.default.preload(
              n,
              y.integrity
                ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: g,
                    crossOrigin: y.crossOrigin,
                  }
                : { as: "script", nonce: g, crossOrigin: y.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let _ = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    52513: function (e, t, n) {
      "use strict";
      n.d(t, {
        CommonProvider: function () {
          return l;
        },
        h: function () {
          return o;
        },
      });
      var r = n(90132),
        i = n(55881);
      let o = (0, i.createContext)({
          showNav: !1,
          setShowNav: () => {},
          isMobile: !1,
          setIsMobile: () => {},
          address: "",
          setAddress: () => {},
          mineData: { loaded: !1, totalLlamaPoints: 0, totalWaifuPoints: 0 },
          setMineData: () => {},
        }),
        l = (e) => {
          let { children: t } = e,
            [n, l] = (0, i.useState)(!1),
            [a, u] = (0, i.useState)(!1),
            [s, c] = (0, i.useState)({});
          return (0, r.jsx)(o.Provider, {
            value: {
              showNav: n,
              setShowNav: l,
              isMobile: a,
              setIsMobile: u,
              mineData: s,
              setMineData: c,
            },
            children: t,
          });
        };
    },
    93002: function () {},
    66648: function () {},
    40015: function () {},
  },
  function (e) {
    e.O(0, [30538, 17714, 59062, 34034, 1744], function () {
      return e((e.s = 17697));
    }),
      (_N_E = e.O());
  },
]);
