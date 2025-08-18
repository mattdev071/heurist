(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [64109],
  {
    88818: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 33723));
    },
    33723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n(90132),
        r = n(55881);
      n(26565);
      var s = (e) => {
        let { src: t, height: n = 150 } = e,
          [s, a] = (0, r.useState)(!0),
          [c, o] = (0, r.useState)(!1),
          [l, u] = (0, r.useState)(n),
          d = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              u(0.9 * window.innerHeight);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, i.jsx)("div", {
            className: "graph-container ".concat(c ? "hovered" : ""),
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: (0, i.jsxs)("div", {
              className: "relative ".concat(s ? "animate-pulse" : ""),
              children: [
                s &&
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 flex justify-center items-center loading-overlay",
                    children: (0, i.jsx)("span", {
                      className: "text-white",
                      "aria-live": "polite",
                      children: "Loading...",
                    }),
                  }),
                (0, i.jsx)("iframe", {
                  ref: d,
                  src: t,
                  width: "100%",
                  height: l,
                  frameBorder: "0",
                  allowFullScreen: !0,
                  onLoad: () => a(!1),
                  className: "iframe ".concat(c ? "hovered-graph" : ""),
                  "aria-label": "Grafana Graph",
                  style: { backgroundColor: "transparent" },
                }),
              ],
            }),
          })
        );
      };
      n(54683);
      var a = (e) => {
          let { title: t, children: n } = e,
            [s, a] = (0, r.useState)(!1);
          return (0, i.jsxs)("div", {
            className: "collapsible-section text-white mb-4",
            children: [
              (0, i.jsxs)("h2", {
                className:
                  "collapsible-title cursor-pointer text-lg font-bold py-2 px-4",
                onClick: () => a(!s),
                children: [t, " ", s ? "▼" : "▲"],
              }),
              (0, i.jsx)("div", {
                className: "content ".concat(s ? "hidden" : ""),
                children: n,
              }),
            ],
          });
        },
        c = () =>
          (0, i.jsx)("div", {
            className: "text-white p-4",
            children: [
              {
                title: "Mesh Agent Statistics",
                url: "https://monitor.heurist.ai/public-dashboards/dcf9c0bb487746f48c2b20b7ec1a2547",
              },
              {
                title: "Model Performance Statistics",
                url: "https://monitor.heurist.ai/public-dashboards/afc1ce5c76d144cd807fc939c223003a",
              },
            ].map((e) =>
              (0, i.jsx)(
                a,
                { title: e.title, children: (0, i.jsx)(s, { src: e.url }) },
                e.title
              )
            ),
          }),
        o = () =>
          (0, i.jsxs)("div", {
            className: "text-white p-4",
            children: [
              (0, i.jsx)(a, {
                title: "Mesh Agent Statistics",
                children: (0, i.jsx)(s, {
                  src: "https://monitor.heurist.ai/public-dashboards/dcf9c0bb487746f48c2b20b7ec1a2547",
                }),
              }),
              (0, i.jsx)(a, {
                title: "Model Performance Statistics",
                children: (0, i.jsx)(s, {
                  src: "https://monitor.heurist.ai/public-dashboards/afc1ce5c76d144cd807fc939c223003a",
                }),
              }),
            ],
          }),
        l = n(52790),
        u = n(52513);
      function d() {
        let { isMobile: e, setIsMobile: t } = (0, r.useContext)(u.h),
          [n, s] = (0, r.useState)(!1),
          a = (e) => {
            e < 840 ? (s(!0), t(!0)) : (s(!1), t(!1));
          };
        return ((0, r.useEffect)(() => {
          a(document.documentElement.clientWidth);
        }, [e]),
        (0, r.useEffect)(() => {
          let e = () => {
            a(document.documentElement.clientWidth);
          };
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        n)
          ? (0, i.jsx)(l.Providers, { children: (0, i.jsx)(c, {}) })
          : (0, i.jsx)(l.Providers, { children: (0, i.jsx)(o, {}) });
      }
    },
    52790: function (e, t, n) {
      "use strict";
      n.d(t, {
        Providers: function () {
          return p;
        },
      });
      var i = n(90132),
        r = n(70157),
        s = n(42453),
        a = n(77153),
        c = n(80817),
        o = n(48160),
        l = n(44861),
        u = n(96899),
        d = n(87498);
      n(32848);
      var _ = n(87711),
        E = n(16924),
        h = n(73890),
        f = n(97655),
        I = n(71395),
        T = n(91603),
        m = n(42048),
        C = n(13321);
      let v = (0, _.vX)({
          appName: "Imagine",
          projectId: d.O.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          wallets: [
            { groupName: "Suggested", wallets: [h.P, f.R, I.b, T.b, m.u, C.D] },
          ],
          chains: [o.j, l.u],
          ssr: !0,
        }),
        N = new r.S();
      function p(e) {
        let { children: t } = e;
        return (0, i.jsx)(a.w, {
          children: (0, i.jsx)(c.F, {
            config: v,
            children: (0, i.jsx)(s.aH, {
              client: N,
              children: (0, i.jsx)(_.pj, {
                theme: (0, E.$)({
                  accentColor: "#fff",
                  accentColorForeground: "#000",
                }),
                children: (0, i.jsx)(u.H, { children: t }),
              }),
            }),
          }),
        });
      }
    },
    96899: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return a;
        },
        a: function () {
          return c;
        },
      });
      var i = n(90132),
        r = n(55881);
      let s = (0, r.createContext)(void 0);
      function a(e) {
        let { children: t } = e,
          [n, a] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            o(!1);
          }, []),
          (0, i.jsx)(s.Provider, {
            value: { isAuthenticated: n, setIsAuthenticated: a, isLoading: c },
            children: !c && t,
          })
        );
      }
      function c() {
        let e = (0, r.useContext)(s);
        if (void 0 === e)
          throw Error("useAuth must be used within an AuthProvider");
        return e;
      }
    },
    52513: function (e, t, n) {
      "use strict";
      n.d(t, {
        CommonProvider: function () {
          return a;
        },
        h: function () {
          return s;
        },
      });
      var i = n(90132),
        r = n(55881);
      let s = (0, r.createContext)({
          showNav: !1,
          setShowNav: () => {},
          isMobile: !1,
          setIsMobile: () => {},
          address: "",
          setAddress: () => {},
          mineData: { loaded: !1, totalLlamaPoints: 0, totalWaifuPoints: 0 },
          setMineData: () => {},
        }),
        a = (e) => {
          let { children: t } = e,
            [n, a] = (0, r.useState)(!1),
            [c, o] = (0, r.useState)(!1),
            [l, u] = (0, r.useState)({});
          return (0, i.jsx)(s.Provider, {
            value: {
              showNav: n,
              setShowNav: a,
              isMobile: c,
              setIsMobile: o,
              mineData: l,
              setMineData: u,
            },
            children: t,
          });
        };
    },
    32848: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return c;
        },
      });
      var i = n(33643),
        r = n(87498);
      let s = n(89445).env.THIRDWEB_SECRET_KEY,
        a = r.O.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
        c = (0, i.P)({ clientId: a });
      (0, i.P)(s ? { secretKey: s } : { clientId: a });
    },
    54683: function () {},
    26565: function () {},
    87498: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var i = n(18728),
        r = n(36971),
        s = n(89445);
      let a = (0, r.D)({
        server: {
          UMAMI_URL: i.z.string().optional(),
          UMAMI_WEBSITE_ID: i.z.string().optional(),
          CREDITS_BACKEND_URL: i.z.string().min(1),
          API_AUTH_KEY: i.z.string().min(1),
          ZYFI_API_KEY: i.z.string().min(1),
          THIRDWEB_SECRET_KEY: i.z.string().min(1),
          THIRDWEB_AUTH_PRIVATE_KEY: i.z.string().min(1),
          MAILJET_API_KEY: i.z.string().optional(),
          MAILJET_SECRET_KEY: i.z.string().optional(),
          MAILJET_LIST_ID: i.z.string().optional(),
          MAILJET_ADDITIONAL_LIST_ID: i.z.string().optional(),
        },
        client: {
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: i.z.string().min(1),
          NEXT_PUBLIC_THIRDWEB_CLIENT_ID: i.z.string().min(1),
          NEXT_PUBLIC_NFT_CONTRACT_ADDRESS: i.z.string().min(1),
          NEXT_PUBLIC_VERCEL_ENV: i.z
            .enum(["development", "preview", "production"])
            .optional(),
          NEXT_PUBLIC_VERCEL_URL: i.z.string().optional(),
        },
        experimental__runtimeEnv: {
          NEXT_PUBLIC_NFT_CONTRACT_ADDRESS:
            "0x781Af15005cAa72EDfa115E46C95a736923632BB",
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
            "7a21b8a252e1b5019f5228578eb9f44e",
          NEXT_PUBLIC_THIRDWEB_CLIENT_ID: "6bfe1ae124fa7ec8cb8a7bdc5a697448",
          NEXT_PUBLIC_VERCEL_ENV: "production",
          NEXT_PUBLIC_VERCEL_URL:
            "heurist-frontend-qgul4icm7-heurist-9f97aa7b.vercel.app",
          CREDITS_BACKEND_URL: s.env.CREDITS_BACKEND_URL,
          API_AUTH_KEY: s.env.API_AUTH_KEY,
          ZYFI_API_KEY: s.env.ZYFI_API_KEY,
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        14120, 33076, 88212, 15741, 7408, 78658, 43829, 51848, 59062, 34034,
        1744,
      ],
      function () {
        return e((e.s = 88818));
      }
    ),
      (_N_E = e.O());
  },
]);
