(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [24484, 66255],
  {
    15238: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 98365)),
        Promise.resolve().then(t.bind(t, 52790));
    },
    52790: function (e, n, t) {
      "use strict";
      t.d(n, {
        Providers: function () {
          return T;
        },
      });
      var r = t(90132),
        u = t(70157),
        i = t(42453),
        o = t(77153),
        c = t(80817),
        s = t(48160),
        l = t(44861),
        a = t(96899),
        f = t(87498);
      t(32848);
      var d = t(87711),
        h = t(16924),
        _ = t(73890),
        E = t(97655),
        v = t(71395),
        C = t(91603),
        P = t(42048),
        N = t(13321);
      let j = (0, d.vX)({
          appName: "Imagine",
          projectId: f.O.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          wallets: [
            { groupName: "Suggested", wallets: [_.P, E.R, v.b, C.b, P.u, N.D] },
          ],
          chains: [s.j, l.u],
          ssr: !0,
        }),
        I = new u.S();
      function T(e) {
        let { children: n } = e;
        return (0, r.jsx)(o.w, {
          children: (0, r.jsx)(c.F, {
            config: j,
            children: (0, r.jsx)(i.aH, {
              client: I,
              children: (0, r.jsx)(d.pj, {
                theme: (0, h.$)({
                  accentColor: "#fff",
                  accentColorForeground: "#000",
                }),
                children: (0, r.jsx)(a.H, { children: n }),
              }),
            }),
          }),
        });
      }
    },
    96899: function (e, n, t) {
      "use strict";
      t.d(n, {
        H: function () {
          return o;
        },
        a: function () {
          return c;
        },
      });
      var r = t(90132),
        u = t(55881);
      let i = (0, u.createContext)(void 0);
      function o(e) {
        let { children: n } = e,
          [t, o] = (0, u.useState)(!1),
          [c, s] = (0, u.useState)(!0);
        return (
          (0, u.useEffect)(() => {
            s(!1);
          }, []),
          (0, r.jsx)(i.Provider, {
            value: { isAuthenticated: t, setIsAuthenticated: o, isLoading: c },
            children: !c && n,
          })
        );
      }
      function c() {
        let e = (0, u.useContext)(i);
        if (void 0 === e)
          throw Error("useAuth must be used within an AuthProvider");
        return e;
      }
    },
    32848: function (e, n, t) {
      "use strict";
      t.d(n, {
        o: function () {
          return c;
        },
      });
      var r = t(33643),
        u = t(87498);
      let i = t(89445).env.THIRDWEB_SECRET_KEY,
        o = u.O.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
        c = (0, r.P)({ clientId: o });
      (0, r.P)(i ? { secretKey: i } : { clientId: o });
    },
  },
  function (e) {
    e.O(
      0,
      [
        80155, 7369, 33076, 20049, 90600, 88212, 65221, 15741, 7408, 78658,
        43829, 51848, 71736, 98365, 59062, 34034, 1744,
      ],
      function () {
        return e((e.s = 15238));
      }
    ),
      (_N_E = e.O());
  },
]);
