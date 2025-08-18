(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92559],
  {
    85140: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 98365)),
        Promise.resolve().then(r.bind(r, 61849));
    },
    61849: function (e, t, r) {
      "use strict";
      r.d(t, {
        CreditsProvider: function () {
          return T;
        },
      });
      var n = r(90132),
        a = r(70157),
        c = r(42453),
        l = r(77153),
        s = r(80817),
        i = r(98009);
      let o = (0, i.a)({
        id: 56,
        name: "BNB Smart Chain",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
        rpcUrls: { default: { http: ["https://rpc.ankr.com/bsc"] } },
        blockExplorers: {
          default: {
            name: "BscScan",
            url: "https://bscscan.com",
            apiUrl: "https://api.bscscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 15921452,
          },
        },
      });
      var u = r(48160),
        d = r(44861);
      let p = (0, i.a)({
        id: 5e3,
        name: "Mantle",
        nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
        rpcUrls: { default: { http: ["https://rpc.mantle.xyz"] } },
        blockExplorers: {
          default: {
            name: "Mantle Explorer",
            url: "https://explorer.mantle.xyz",
            apiUrl: "https://explorer.mantle.xyz/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            blockCreated: 304717,
          },
        },
      });
      var f = r(96899),
        h = r(87498);
      r(32848);
      var m = r(87711),
        b = r(16924),
        C = r(73890),
        E = r(97655),
        v = r(71395),
        x = r(91603),
        _ = r(42048),
        N = r(13321);
      let B = new a.S(),
        P = (0, m.vX)({
          appName: "Imagine",
          projectId: h.O.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          wallets: [
            { groupName: "Suggested", wallets: [C.P, E.R, v.b, x.b, _.u, N.D] },
          ],
          chains: [o, u.j, d.u, p],
          ssr: !0,
        });
      function T(e) {
        let { children: t } = e;
        return (0, n.jsx)(l.w, {
          children: (0, n.jsx)(s.F, {
            config: P,
            children: (0, n.jsx)(c.aH, {
              client: B,
              children: (0, n.jsx)(m.pj, {
                theme: (0, b.$)({
                  accentColor: "#fff",
                  accentColorForeground: "#000",
                }),
                children: (0, n.jsx)(f.H, { children: t }),
              }),
            }),
          }),
        });
      }
    },
    96899: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return l;
        },
        a: function () {
          return s;
        },
      });
      var n = r(90132),
        a = r(55881);
      let c = (0, a.createContext)(void 0);
      function l(e) {
        let { children: t } = e,
          [r, l] = (0, a.useState)(!1),
          [s, i] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            i(!1);
          }, []),
          (0, n.jsx)(c.Provider, {
            value: { isAuthenticated: r, setIsAuthenticated: l, isLoading: s },
            children: !s && t,
          })
        );
      }
      function s() {
        let e = (0, a.useContext)(c);
        if (void 0 === e)
          throw Error("useAuth must be used within an AuthProvider");
        return e;
      }
    },
    32848: function (e, t, r) {
      "use strict";
      r.d(t, {
        o: function () {
          return s;
        },
      });
      var n = r(33643),
        a = r(87498);
      let c = r(89445).env.THIRDWEB_SECRET_KEY,
        l = a.O.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
        s = (0, n.P)({ clientId: l });
      (0, n.P)(c ? { secretKey: c } : { clientId: l });
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
        return e((e.s = 85140));
      }
    ),
      (_N_E = e.O());
  },
]);
