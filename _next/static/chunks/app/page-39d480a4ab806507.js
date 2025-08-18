(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41931],
  {
    27177: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 35086));
    },
    92286: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var l = n(79432),
        r = n.n(l);
    },
    79432: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let l = n(14080);
      n(90132), n(55881);
      let r = l._(n(18231));
      function u(e, t) {
        var n;
        let l = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: l } = e;
            return null;
          },
        };
        "function" == typeof e && (l.loader = e);
        let u = { ...l, ...t };
        return (0, r.default)({
          ...u,
          modules: null == (n = u.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    27467: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let l = n(14677);
      function r(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new l.BailoutToCSRError(t);
        return n;
      }
    },
    18231: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let l = n(90132),
        r = n(55881),
        u = n(27467),
        o = n(65679);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let d = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...d, ...e },
            n = (0, r.lazy)(() => t.loader().then(i)),
            s = t.loading;
          function a(e) {
            let i = s
                ? (0, l.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              d = t.ssr
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, l.jsx)(o.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, l.jsx)(n, { ...e }),
                    ],
                  })
                : (0, l.jsx)(u.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, l.jsx)(n, { ...e }),
                  });
            return (0, l.jsx)(r.Suspense, { fallback: i, children: d });
          }
          return (a.displayName = "LoadableComponent"), a;
        };
    },
    65679: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let l = n(90132),
        r = n(64926);
      function u(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, r.getExpectedRequestStore)("next/dynamic css"),
          u = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            u.push(...t);
          }
        }
        return 0 === u.length
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: u.map((e) =>
                (0, l.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    35086: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n(90132),
        r = n(92286),
        u = n(55881);
      let o = (0, r.default)(
          () =>
            Promise.all([
              n.e(64654),
              n.e(48573),
              n.e(20049),
              n.e(90600),
              n.e(17714),
              n.e(98702),
              n.e(24883),
              n.e(57743),
              n.e(63542),
              n.e(48312),
              n.e(67488),
              n.e(79742),
            ]).then(n.bind(n, 79742)),
          { loadableGenerated: { webpack: () => [79742] }, ssr: !1 }
        ),
        i = (0, r.default)(
          () =>
            Promise.all([
              n.e(70619),
              n.e(48573),
              n.e(20049),
              n.e(90600),
              n.e(98702),
              n.e(57743),
              n.e(10901),
              n.e(63542),
              n.e(67488),
              n.e(20219),
            ]).then(n.bind(n, 20219)),
          { loadableGenerated: { webpack: () => [20219] }, ssr: !1 }
        );
      t.default = () => {
        let [e, t] = (0, u.useState)(!1),
          [n, r] = (0, u.useState)(!1);
        return ((0, u.useEffect)(() => {
          r(!0);
          let e = () => {
            t(window.innerWidth < 768);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        n)
          ? (0, l.jsx)("div", {
              children: e ? (0, l.jsx)(i, {}) : (0, l.jsx)(o, {}),
            })
          : (0, l.jsx)("div", { children: "Loading..." });
      };
    },
  },
  function (e) {
    e.O(0, [59062, 34034, 1744], function () {
      return e((e.s = 27177));
    }),
      (_N_E = e.O());
  },
]);
