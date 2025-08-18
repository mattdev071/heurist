(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [30932],
  {
    64727: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 88559));
    },
    88559: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return eG;
          },
        });
      var a = s(90132),
        r = s(55881),
        n = s(28879),
        i = s(29181),
        l = s(90378),
        o = s(67750),
        d = s(34777),
        c = s(71534),
        m = s(9117),
        x = s(45754),
        u = s(63675);
      s(89595);
      var f = s(6984),
        p = (0, f.$)("8b4bad6046d2b3f8d9056bd254f97b49a82d0021"),
        h = (0, f.$)("fa9376d1d0cf6e0759b92760b564f1a17d250533"),
        b = (0, f.$)("e95e767faf92d0dfc75e0c1e723026ac1a7c4d55"),
        g = (0, f.$)("127143c11ede1f1cbfd57e72d6231591ef55a95e"),
        j = s(7446),
        v = s(17518),
        y = s(56667),
        N = s(59914),
        w = s(25011),
        D = s(17714),
        C = s(96899);
      let _ = (0, r.createContext)(void 0);
      function k(e) {
        let { children: t } = e,
          [s, n] = (0, r.useState)(null),
          [i, l] = (0, r.useState)(!1),
          [o, d] = (0, r.useState)(null),
          { address: c } = (0, m.m)(),
          { isAuthenticated: x, isLoading: u } = (0, C.a)(),
          f = async () => {
            if ((l(!0), d(null), !c || !x)) {
              l(!1), n(null);
              return;
            }
            try {
              let [e, t, s] = await Promise.all([
                fetch("/api/credits/user-data?userId=".concat(c)),
                fetch("/api/credits/payment-history?userId=".concat(c)),
                fetch("/api/credits/usage-history?userId=".concat(c)),
              ]);
              if (401 === e.status) {
                d("Unauthorized access"), n(null);
                return;
              }
              let a = await e.json();
              if (!a.api_keys) {
                d("Could not fetch user data");
                return;
              }
              let r = [];
              if (200 === t.status) {
                let e = await t.json();
                e.payments && (r = e.payments);
              }
              let i = [];
              if (200 === s.status) {
                let e = await s.json();
                e.data && (i = e.data);
              }
              n({
                remaining_credits: a.remaining_credits,
                api_keys: a.api_keys,
                payments: r,
                usage_history: i,
              }),
                d(null);
            } catch (e) {
              console.error("failed to fetch user data:", e),
                d("Could not fetch user data");
            } finally {
              l(!1);
            }
          };
        return (
          (0, r.useEffect)(() => {
            u || f();
          }, [c, x, u]),
          (0, a.jsx)(_.Provider, {
            value: { userData: s, loading: i, error: o, refetchUserData: f },
            children: t,
          })
        );
      }
      function E() {
        let e = (0, r.useContext)(_);
        if (void 0 === e)
          throw Error("useUserData must be used within a UserDataProvider");
        return e;
      }
      let P = "rounded-md bg-[#161616] px-9 py-7",
        A = "custom-font-SFMono-medium text-xl font-bold leading-7 mb:text-2xl",
        I = "mt-2 text-sm leading-[17px] tracking-wide text-[#7D7D7D]",
        F = "custom-font-SFMono-medium rounded-md bg-black",
        T = { border: "1px solid #343434" },
        Z = "text-sm text-[#545454]",
        S = "flex h-16 items-center justify-center",
        z = (e) => {
          let {
            apiKey: t,
            onCopy: s,
            onDelete: r,
            isCopied: n,
            isDeleting: i,
          } = e;
          return (0, a.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
              (0, a.jsxs)("div", {
                className: "font-mono text-base text-white",
                children: [t.slice(0, 10), "...", t.slice(-3)],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)("button", {
                    className:
                      "flex h-8 w-8 items-center justify-center rounded-md bg-[#161616] transition-all hover:bg-[#343434] disabled:cursor-not-allowed disabled:opacity-50",
                    onClick: () => s(t),
                    title: "Copy API key",
                    disabled: i,
                    children: n
                      ? (0, a.jsx)(j.Z, {
                          size: 16,
                          className: "text-[#10B981]",
                        })
                      : (0, a.jsx)(v.Z, { size: 16, className: "text-white" }),
                  }),
                  (0, a.jsx)("button", {
                    className:
                      "flex h-8 w-8 items-center justify-center rounded-md bg-[#161616] transition-all hover:bg-[#343434] disabled:cursor-not-allowed disabled:opacity-50",
                    onClick: () => {
                      i ||
                        (0, D.ZP)(
                          (e) =>
                            (0, a.jsxs)("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text-base font-medium",
                                  children: "Delete API Key",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-sm text-[#7D7D7D]",
                                  children:
                                    "Are you sure you want to delete this API key? This action cannot be undone.",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex justify-end gap-3",
                                  children: [
                                    (0, a.jsx)("button", {
                                      className:
                                        "rounded-lg border border-[#343434] bg-black px-4 py-2 text-sm text-white transition-all hover:bg-[#161616]",
                                      onClick: () => D.ZP.dismiss(e.id),
                                      children: "Cancel",
                                    }),
                                    (0, a.jsx)("button", {
                                      className:
                                        "rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-2 text-sm text-red-500 transition-all hover:bg-red-950/50",
                                      onClick: () => {
                                        r(t), D.ZP.dismiss(e.id);
                                      },
                                      children: "Delete",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          {
                            duration: 1 / 0,
                            style: {
                              background: "black",
                              color: "#fff",
                              border: "1px solid #343434",
                              borderRadius: "12px",
                              padding: "16px",
                              minWidth: "320px",
                            },
                          }
                        );
                    },
                    title: i ? "Deleting..." : "Delete API key",
                    disabled: i,
                    children: i
                      ? (0, a.jsx)(y.Z, {
                          size: 16,
                          className: "animate-spin text-[#7D7D7D]",
                        })
                      : (0, a.jsx)(N.Z, { size: 16, className: "text-white" }),
                  }),
                ],
              }),
            ],
          });
        };
      function L() {
        let [e, t] = (0, r.useState)(!1),
          [s, n] = (0, r.useState)(null),
          [i, l] = (0, r.useState)([]),
          { address: o } = (0, m.m)(),
          { userData: d, loading: c, error: x, refetchUserData: u } = E(),
          f = async () => {
            if (!o) {
              D.ZP.error("Please connect your wallet first");
              return;
            }
            if (
              !(null == d ? void 0 : d.remaining_credits) ||
              d.remaining_credits <= 0
            ) {
              D.ZP.error(
                "Please purchase credits before generating an API key"
              );
              return;
            }
            t(!0);
            try {
              let e = await fetch(
                  "/api/credits/generate-key?userId=".concat(o),
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  }
                ),
                t = await e.json();
              if (401 === e.status) {
                D.ZP.error(
                  "Unauthorized access. Please reconnect your wallet."
                );
                return;
              }
              if (404 === e.status) {
                D.ZP.error(
                  "Please purchase credits before generating an API key"
                );
                return;
              }
              t.apiKey
                ? (D.ZP.success("New API key generated successfully"),
                  await u())
                : D.ZP.error(t.error || "Failed to generate API key");
            } catch (e) {
              console.error("Error generating API key:", e),
                D.ZP.error("Failed to generate API key. Please try again.");
            } finally {
              t(!1);
            }
          },
          p = (e) => {
            navigator.clipboard.writeText(e),
              n(e),
              D.ZP.success("Copied to clipboard", {
                duration: 1500,
                position: "bottom-right",
              });
          },
          h = async (e) => {
            if (!o) {
              D.ZP.error("Please connect your wallet first");
              return;
            }
            l((t) => [...t, e]);
            try {
              let t = await fetch("/api/credits/delete-key?userId=".concat(o), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ user_api_key: e }),
                }),
                s = await t.json();
              if (401 === t.status) {
                D.ZP.error(
                  "Unauthorized access. Please reconnect your wallet."
                );
                return;
              }
              t.ok
                ? (D.ZP.success("API key deleted successfully"), await u())
                : D.ZP.error(s.error || "Failed to delete API key");
            } catch (e) {
              console.error("Error deleting API key:", e),
                D.ZP.error("Failed to delete API key. Please try again.");
            } finally {
              l((t) => t.filter((t) => t !== e));
            }
          };
        return (0, a.jsxs)("div", {
          className: P,
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center justify-between mb:flex-row",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", { className: A, children: "API Keys" }),
                    (0, a.jsx)("div", {
                      className: I,
                      children: "Generate and manage your API access keys",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  onClick:
                    !e &&
                    (null == d ? void 0 : d.remaining_credits) &&
                    d.remaining_credits > 0
                      ? f
                      : void 0,
                  className:
                    "mt-4 flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-medium transition-all mb:mt-0 ".concat(
                      (null == d ? void 0 : d.remaining_credits) &&
                        d.remaining_credits > 0
                        ? "cursor-pointer bg-[#CDF138] text-black hover:bg-[#CDF138]/90"
                        : "cursor-not-allowed bg-[#343434] text-[#7D7D7D]"
                    ),
                  title:
                    (null == d ? void 0 : d.remaining_credits) &&
                    !(d.remaining_credits <= 0)
                      ? e
                        ? "Generating new key..."
                        : void 0
                      : "Purchase credits to generate API keys",
                  children: [
                    e
                      ? (0, a.jsx)(y.Z, {
                          size: 21,
                          className: "animate-spin text-black",
                        })
                      : (0, a.jsx)(w.Z, {
                          size: 21,
                          className:
                            (null == d ? void 0 : d.remaining_credits) &&
                            d.remaining_credits > 0
                              ? "text-black"
                              : "text-[#7D7D7D]",
                        }),
                    e ? "Generating..." : "Add New Key",
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-7",
              children: [
                (0, a.jsx)(D.Toaster, {
                  toastOptions: {
                    style: {
                      background: "#1a1a1a",
                      color: "#fff",
                      border: "1px solid #343434",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      fontSize: "14px",
                    },
                    success: {
                      iconTheme: { primary: "#10B981", secondary: "#1a1a1a" },
                    },
                  },
                }),
                !c &&
                o &&
                !x &&
                (null == d ? void 0 : d.api_keys) &&
                0 !== d.api_keys.length
                  ? (0, a.jsx)("div", {
                      className: "mt-7 flex w-full flex-col gap-3",
                      children: d.api_keys.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "rounded-lg border border-[#343434] bg-black px-6 py-4",
                            style: T,
                            children: (0, a.jsx)(z, {
                              apiKey: e.apiKey,
                              onCopy: p,
                              onDelete: h,
                              isCopied: s === e.apiKey,
                              isDeleting: i.includes(e.apiKey),
                            }),
                          },
                          e.apiKey
                        )
                      ),
                    })
                  : (0, a.jsx)("div", {
                      className: "".concat(F, " mt-7 p-2 sm:p-6"),
                      style: T,
                      children: (0, a.jsx)("div", {
                        className: S,
                        children: (0, a.jsx)("span", {
                          className: Z,
                          children: c
                            ? "Loading API keys..."
                            : o
                            ? x || "No API keys found"
                            : "Connect wallet to view API keys",
                        }),
                      }),
                    }),
              ],
            }),
          ],
        });
      }
      var R = s(61673),
        U = s(61312),
        B = s(20049),
        M = s(85289),
        H = s(19487),
        O = s.n(H),
        W = s(26707),
        K = s(24864),
        V = s(99976),
        Y = s(48798),
        X = s(21987),
        $ = s(4796),
        G = s(69062),
        q = s(57743),
        J = s(33210),
        Q = s(89056),
        ee = s(21021),
        et = s(39131),
        es = s(40550),
        ea = s(19434),
        er = s(53384),
        en = s(60063),
        ei = s(12932),
        el = s(4572),
        eo = s(4339),
        ed = s(41414),
        ec = s(12677);
      let em = ec.fC,
        ex = ec.ZA,
        eu = ec.B4,
        ef = r.forwardRef((e, t) => {
          let { className: s, children: r, ...n } = e;
          return (0, a.jsxs)(ec.xz, {
            ref: t,
            className: (0, M.cn)(
              "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              s
            ),
            ...n,
            children: [
              r,
              (0, a.jsx)(ec.JO, {
                asChild: !0,
                children: (0, a.jsx)(ed.v4q, { className: "h-6 w-6" }),
              }),
            ],
          });
        });
      ef.displayName = ec.xz.displayName;
      let ep = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(ec.u_, {
          ref: t,
          className: (0, M.cn)(
            "flex cursor-default items-center justify-center py-1",
            s
          ),
          ...r,
          children: (0, a.jsx)(ed.g8U, { className: "h-4 w-4" }),
        });
      });
      ep.displayName = ec.u_.displayName;
      let eh = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(ec.$G, {
          ref: t,
          className: (0, M.cn)(
            "flex cursor-default items-center justify-center py-1",
            s
          ),
          ...r,
          children: (0, a.jsx)(ed.v4q, { className: "h-4 w-4" }),
        });
      });
      eh.displayName = ec.$G.displayName;
      let eb = r.forwardRef((e, t) => {
        let { className: s, children: r, position: n = "popper", ...i } = e;
        return (0, a.jsx)(ec.h_, {
          children: (0, a.jsxs)(ec.VY, {
            ref: t,
            className: (0, M.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              s
            ),
            position: n,
            ...i,
            children: [
              (0, a.jsx)(ep, {}),
              (0, a.jsx)(ec.l_, {
                className: (0, M.cn)(
                  "p-1",
                  "popper" === n &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: r,
              }),
              (0, a.jsx)(eh, {}),
            ],
          }),
        });
      });
      (eb.displayName = ec.VY.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(ec.__, {
            ref: t,
            className: (0, M.cn)("px-2 py-1.5 text-sm font-semibold", s),
            ...r,
          });
        }).displayName = ec.__.displayName);
      let eg = r.forwardRef((e, t) => {
        let { className: s, children: r, ...n } = e;
        return (0, a.jsxs)(ec.ck, {
          ref: t,
          className: (0, M.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            s
          ),
          ...n,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, a.jsx)(ec.wU, {
                children: (0, a.jsx)(ed.nQG, { className: "h-4 w-4" }),
              }),
            }),
            (0, a.jsx)(ec.eT, { children: r }),
          ],
        });
      });
      (eg.displayName = ec.ck.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(ec.Z0, {
            ref: t,
            className: (0, M.cn)("-mx-1 my-1 h-px bg-muted", s),
            ...r,
          });
        }).displayName = ec.Z0.displayName);
      var ej = s(8662),
        ev = s(1287),
        ey = s(29306);
      let eN = (0, i.ax)({
          id: 5e3,
          name: "Mantle Mainnet",
          nativeCurrency: { name: "Mantle", symbol: "MNT", decimals: 18 },
          blockExplorers: [
            { name: "mantle", url: "https://explorer.mantle.xyz" },
          ],
        }),
        ew = {
          8453: {
            USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            HEU: "0xef22cb48b8483df6152e1423b19df5553bbd818b",
            WETH: "0x4200000000000000000000000000000000000006",
          },
          324: {
            USDC: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
            HEU: "0xAbEc5eCBe08b6c02F5c9A2fF82696e1E7dB6f9bf",
            WETH: "0x8Ebe4A94740515945ad826238Fc4D56c6B8b0e60",
            ZK: "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E",
          },
          56: {
            WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            USDT: "0x55d398326f99059ff775485246999027b3197955",
          },
          5e3: {
            WMNT: "0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8",
            USDC: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
            USDT: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
            WETH: "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111",
          },
        },
        eD = {
          8453: "0x59D944B7Ff8c432ff395683f5c95d97cA0237986",
          324: "0xf188c87dE7b040bb5Dc6bD9957C7aa16309489B6",
          56: "0xc07242374De5A4c047Cf804B95F01384E0AAaBBd",
          5e3: "0x59d944b7ff8c432ff395683f5c95d97ca0237986",
        },
        eC = [ej.u, ev.j, ey.e, eN],
        e_ = new Map(),
        ek = {
          heu: { usd: 0.0436, discount: 20 },
          wmnt: { usd: 0.7559, discount: 0 },
          usdc: { usd: 1, discount: 0 },
          usdt: { usd: 1, discount: 0 },
          wbnb: { usd: 764.2343, discount: 0 },
          weth: { usd: 3639.1255, discount: 0 },
          zk: { usd: 0.0543, discount: 0 },
        };
      var eE = s(32848);
      let eP = (e) => {
          let { lastUpdated: t } = e,
            [, s] = (0, r.useState)(0);
          return ((0, r.useEffect)(() => {
            let e = setInterval(() => {
              s((e) => e + 1);
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          t)
            ? (0, a.jsxs)("span", {
                className: "text-xs text-[#7D7D7D]",
                children: [
                  "Updated ",
                  Math.floor((Date.now() - t.getTime()) / 1e3),
                  "s ago",
                ],
              })
            : null;
        },
        eA = (e) => {
          let {
              chain: t,
              tokenAddress: s,
              amount: n,
              setTokenAddress: i,
              setAmount: l,
              rates: o,
              ratesLoading: d,
              lastUpdated: c,
              isUsingFallback: m,
              onDisplayAmountChange: x,
            } = e,
            u = (0, X.l)(),
            f = null == t ? void 0 : t.id,
            p = 100 * parseFloat(n || "0"),
            h = (() => {
              var e, t, a;
              if (!s || !o || !f) return 0;
              let r =
                null ===
                  (t = Object.entries(ew[f] || {}).find((e) => {
                    let [t, a] = e;
                    return a.toLowerCase() === s.toLowerCase();
                  })) || void 0 === t
                  ? void 0
                  : null === (e = t[0]) || void 0 === e
                  ? void 0
                  : e.toLowerCase();
              return r
                ? ((null === (a = o[r]) || void 0 === a
                    ? void 0
                    : a.discount) || 0) / 100
                : 0;
            })(),
            b = async () => {
              var e;
              if (!o || !s || !n || !f) return null;
              let a =
                null ===
                  (e = Object.keys(ew[f] || {}).find(
                    (e) => ew[f][e].toLowerCase() === s.toLowerCase()
                  )) || void 0 === e
                  ? void 0
                  : e.toLowerCase();
              if (!a || !o[a]) return null;
              let r = o[a].usd;
              if (!r || r <= 0) return null;
              let i = parseFloat(parseFloat(n).toFixed(2));
              if (isNaN(i) || i <= 0) return null;
              try {
                let e = (0, J.u)({ client: eE.o, address: s, chain: t }),
                  a = await (0, es.decimals)({ contract: e });
                return (i / r).toFixed(Math.min(a, 8));
              } catch (e) {
                return console.error("Error getting token decimals:", e), null;
              }
            },
            [g, j] = (0, r.useState)(null),
            [v, y] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            let e = !0;
            return (
              (async () => {
                if ((j(null), x(null), n && s && o && !d)) {
                  y(!0);
                  let t = await b();
                  e && (j(t), x(t), y(!1));
                }
              })(),
              () => {
                e = !1;
              }
            );
          }, [n, s, t, o, d]);
          let N = n
            ? ((e) => {
                let t = parseFloat(e);
                return isNaN(t)
                  ? "Please enter a valid amount"
                  : t < 0.1
                  ? "Minimum amount is $".concat(0.1)
                  : t > 1e4
                  ? "Maximum amount is $".concat((1e4).toLocaleString())
                  : null;
              })(n)
            : null;
          return (0, a.jsxs)("div", {
            className: "grid gap-8 pb-4",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col gap-6 rounded-xl bg-[#161616] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)(W.Z, {
                            size: 20,
                            className: "text-[#CDF138]",
                          }),
                          (0, a.jsx)("span", {
                            className: "font-medium text-white",
                            children: "Amount to Pay (USD)",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-sm text-[#7D7D7D]",
                        children: ["$", 0.1, " - $", (1e4).toLocaleString()],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)(eo.I, {
                            className:
                              "h-16 rounded-xl border-none bg-black/40 px-6 font-mono text-2xl leading-none text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] placeholder:text-[#545454] focus-visible:ring-1 focus-visible:ring-[#CDF138] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                            placeholder: "0.00",
                            type: "number",
                            value: n,
                            onChange: (e) => {
                              let t = e.target.value;
                              ("" === t || /^\d*\.?\d{0,2}$/.test(t)) && l(t);
                            },
                            min: 0.1,
                            max: 1e4,
                            step: "0.01",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-sm text-[#7D7D7D]",
                            children: "USD",
                          }),
                        ],
                      }),
                      N &&
                        (0, a.jsx)("div", {
                          className: "text-sm text-red-500",
                          children: N,
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "space-y-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, a.jsx)("label", {
                        className: "text-sm text-[#7D7D7D]",
                        children: "Network",
                      }),
                      (0, a.jsxs)(em, {
                        value: null == t ? void 0 : t.id.toString(),
                        onValueChange: async (e) => {
                          console.log("value", e);
                          let t = eC.find((t) => t.id.toString() === e);
                          if (t) {
                            console.log("targetChain", t);
                            try {
                              await u(t), i(""), j(null), x(null);
                            } catch (e) {
                              console.error("Failed to switch network", e),
                                D.ZP.error("Failed to switch network");
                            }
                          }
                        },
                        children: [
                          (0, a.jsx)(ef, {
                            className:
                              "h-12 rounded-xl border-none bg-[#161616] text-white shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] ring-offset-background transition-colors focus-visible:ring-1 focus-visible:ring-[#CDF138] focus-visible:ring-offset-2",
                            children: (0, a.jsx)(eu, {
                              placeholder: "Select Network",
                            }),
                          }),
                          (0, a.jsx)(eb, {
                            className:
                              "rounded-xl border-none bg-[#161616] p-2 shadow-[0_8px_16px_rgba(0,0,0,0.4)]",
                            children: (0, a.jsx)(ex, {
                              children: eC.map((e) =>
                                (0, a.jsx)(
                                  eg,
                                  {
                                    value: e.id.toString(),
                                    className:
                                      "text-white hover:bg-[#343434] focus:bg-[#343434]",
                                    children: e.name,
                                  },
                                  e.id
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, a.jsx)("label", {
                        className: "text-sm text-[#7D7D7D]",
                        children: "Payment Token",
                      }),
                      (0, a.jsxs)(em, {
                        value: s,
                        onValueChange: (e) => {
                          i(e), j(null), x(null);
                        },
                        disabled: !f || d,
                        children: [
                          (0, a.jsx)(ef, {
                            className:
                              "h-12 rounded-xl border-none bg-[#161616] text-white shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] ring-offset-background transition-colors focus-visible:ring-1 focus-visible:ring-[#CDF138] focus-visible:ring-offset-2",
                            children: (0, a.jsx)(eu, {
                              placeholder: "Select Token",
                            }),
                          }),
                          (0, a.jsx)(eb, {
                            className:
                              "rounded-xl border-none bg-[#161616] p-2 shadow-[0_8px_16px_rgba(0,0,0,0.4)]",
                            children: (0, a.jsx)(ex, {
                              children:
                                f && ew[f]
                                  ? Object.entries(ew[f]).map((e) => {
                                      var t;
                                      let [s, r] = e,
                                        n =
                                          (null == o
                                            ? void 0
                                            : null ===
                                                (t = o[s.toLowerCase()]) ||
                                              void 0 === t
                                            ? void 0
                                            : t.discount) || 0;
                                      return (0, a.jsx)(
                                        eg,
                                        {
                                          value: r,
                                          className:
                                            "flex items-center justify-between gap-2 text-white hover:bg-[#343434] focus:bg-[#343434]",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, a.jsx)("span", {
                                                children: s,
                                              }),
                                              n > 0 &&
                                                (0, a.jsxs)("span", {
                                                  className:
                                                    "rounded bg-[#CDF138]/10 px-1.5 py-0.5 text-xs text-[#CDF138]",
                                                  children: ["+", n, "% bonus"],
                                                }),
                                            ],
                                          }),
                                        },
                                        r
                                      );
                                    })
                                  : (0, a.jsx)(eg, {
                                      value: "",
                                      disabled: !0,
                                      className: "text-[#7D7D7D]",
                                      children: "Select a network first",
                                    }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  m &&
                    s &&
                    f &&
                    (() => {
                      var e;
                      let t =
                        null ===
                          (e = Object.keys(ew[f] || {}).find(
                            (e) => ew[f][e].toLowerCase() === s.toLowerCase()
                          )) || void 0 === e
                          ? void 0
                          : e.toLowerCase();
                      return "usdc" === t || "usdt" === t
                        ? null
                        : (0, a.jsx)("div", {
                            className:
                              "rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-4",
                            children: (0, a.jsxs)("div", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 mt-0.5",
                                  children: (0, a.jsx)("span", {
                                    className: "text-yellow-500 text-xs",
                                    children: "⚠",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-sm text-yellow-400 font-medium",
                                      children: "Network Issue Detected",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-xs text-yellow-300/80 mt-1",
                                      children:
                                        "There's a network issue and the conversion rate might be inaccurate. Consider using USDC or USDT for more reliable rates.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          });
                    })(),
                  n &&
                    !N &&
                    (0, a.jsx)("div", {
                      className:
                        "relative overflow-hidden rounded-xl bg-gradient-to-br from-[#161616] to-black p-[1px] after:absolute after:inset-0 after:animate-[gradient_3s_ease_infinite] after:bg-gradient-to-r after:from-[#CDF138]/20 after:via-[#CDF138]/0 after:to-[#CDF138]/20 after:bg-[length:200%_200%] after:blur-xl",
                      children: (0, a.jsx)("div", {
                        className:
                          "relative rounded-[11px] bg-gradient-to-br from-[#161616] to-black p-6",
                        children: (0, a.jsxs)("div", {
                          className: "relative flex flex-col gap-4",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex h-8 w-8 items-center justify-center rounded-lg bg-[#CDF138]/10",
                                      children: (0, a.jsx)(W.Z, {
                                        size: 16,
                                        className: "text-[#CDF138]",
                                      }),
                                    }),
                                    (0, a.jsxs)("span", {
                                      className:
                                        "font-mono text-base text-[#7D7D7D]",
                                      children: [
                                        "$",
                                        parseFloat(n).toLocaleString("en-US", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(K.Z, {
                                  size: 20,
                                  className: "text-[#7D7D7D]",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex h-8 w-8 items-center justify-center rounded-lg bg-[#CDF138]/10",
                                      children: (0, a.jsx)(V.Z, {
                                        size: 16,
                                        className: "text-[#CDF138]",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-col items-end",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className:
                                            "font-mono text-lg font-medium text-[#CDF138]",
                                          children: [
                                            Math.floor(
                                              p * (1 + h)
                                            ).toLocaleString(),
                                            " credits",
                                          ],
                                        }),
                                        h > 0 &&
                                          (0, a.jsxs)("span", {
                                            className: "text-xs text-[#7D7D7D]",
                                            children: [
                                              "includes ",
                                              100 * h,
                                              "% bonus!",
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center justify-between rounded-lg bg-[#CDF138]/5 px-4 py-2",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-xs text-[#7D7D7D]",
                                  children: "Base Rate",
                                }),
                                (0, a.jsxs)("span", {
                                  className: "font-mono text-sm text-white",
                                  children: [
                                    "1 USD = 100 credits",
                                    " ",
                                    h > 0 && "+ ".concat(100 * h, "% bonus"),
                                  ],
                                }),
                              ],
                            }),
                            s &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col gap-2 rounded-lg bg-[#CDF138]/5 px-4 py-3",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-xs text-[#7D7D7D]",
                                        children: "Estimated Cost",
                                      }),
                                      c &&
                                        !d &&
                                        (0, a.jsxs)("span", {
                                          className: "text-xs text-[#7D7D7D]",
                                          children: [
                                            (0, a.jsx)(eP, { lastUpdated: c }),
                                            (0, a.jsx)(Y.Z, {
                                              size: 14,
                                              className: "ml-2 inline",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "font-mono text-sm text-white",
                                    children: d
                                      ? "Loading rates..."
                                      : v
                                      ? "Calculating..."
                                      : g
                                      ? ""
                                          .concat(g, " ")
                                          .concat(
                                            Object.keys(ew[f] || {}).find(
                                              (e) =>
                                                ew[f][e].toLowerCase() ===
                                                s.toLowerCase()
                                            ) || ""
                                          )
                                      : "Enter an amount",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
            ],
          });
        };
      function eI() {
        var e;
        let [t, s] = (0, r.useState)(""),
          [n, i] = (0, r.useState)(""),
          [l, o] = (0, r.useState)(!1),
          [d, c] = (0, r.useState)(null),
          { isConnected: x, address: u } = (0, m.m)(),
          f = (0, $.v)(),
          p = (0, X.l)(),
          h = null == f ? void 0 : f.id,
          b = h ? eD[h] : void 0,
          g = h && b ? (0, J.u)({ client: eE.o, address: b, chain: f }) : null,
          { mutateAsync: j, isPending: v } = (0, G.p)(),
          {
            rates: y,
            loading: N,
            lastUpdated: C,
            isUsingFallback: _,
          } = (function (e) {
            let t =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1],
              [s, a] = (0, r.useState)(null),
              [n, i] = (0, r.useState)(!1),
              [l, o] = (0, r.useState)(null),
              [d, c] = (0, r.useState)(null),
              [x, u] = (0, r.useState)(!1),
              { address: f } = (0, m.m)();
            return (
              (0, r.useEffect)(() => {
                if (!t || !f) {
                  i(!1);
                  return;
                }
                let s = async () => {
                  try {
                    i(!0), o(null), u(!1);
                    let t = new URL(
                      "/api/credits/credits-conversion",
                      window.location.origin
                    );
                    t.searchParams.set("userId", f),
                      e && t.searchParams.set("token", e);
                    let s = new Promise((e, t) => {
                        setTimeout(() => t(Error("Request timeout")), 5e3);
                      }),
                      r = await Promise.race([fetch(t), s]);
                    if (!r.ok) {
                      let e = await r.json().catch(() => ({}));
                      throw Error(
                        e.error || "HTTP error! status: ".concat(r.status)
                      );
                    }
                    let n = await r.json();
                    a(n),
                      c(new Date()),
                      e_.set("".concat(f, "-").concat(e || "all"), {
                        data: n,
                        timestamp: Date.now(),
                      });
                  } catch (e) {
                    console.error("failed to fetch conversion rates:", e),
                      console.log("Using fallback rates due to API failure"),
                      a(ek),
                      u(!0),
                      c(new Date()),
                      o("Using cached rates due to network issues");
                  } finally {
                    i(!1);
                  }
                };
                s();
                let r = setInterval(s, 3e4);
                return () => {
                  clearInterval(r);
                };
              }, [f, e, t]),
              {
                rates: s,
                loading: n,
                error: l,
                lastUpdated: d,
                isUsingFallback: x,
              }
            );
          })(
            (t && h
              ? null ===
                  (e = Object.keys(ew[h] || {}).find(
                    (e) => ew[h][e].toLowerCase() === t.toLowerCase()
                  )) || void 0 === e
                ? void 0
                : e.toLowerCase()
              : void 0) || "",
            l
          ),
          k = async () => {
            if (!g || !t || !n || !h) {
              D.ZP.error("Please fill in all fields");
              return;
            }
            try {
              var e, a, r, l;
              let o;
              let d = parseFloat(n);
              if (isNaN(d) || d <= 0) {
                D.ZP.error("Please enter a valid amount");
                return;
              }
              if (d < 0.1) {
                D.ZP.error("Minimum amount is $".concat(0.1));
                return;
              }
              if (d > 1e4) {
                D.ZP.error(
                  "Maximum amount is $".concat((1e4).toLocaleString())
                );
                return;
              }
              let c = eC.find((e) => e.id === h);
              if (!c) {
                D.ZP.error("Unsupported network");
                return;
              }
              if ((null == f ? void 0 : f.id) !== c.id) {
                D.ZP.loading("Switching network...");
                try {
                  if (
                    (await p(c),
                    await new Promise((e) => setTimeout(e, 1e3)),
                    (null == f ? void 0 : f.id) !== c.id)
                  )
                    throw Error("Network switch failed or was rejected");
                  D.ZP.success("Network switched successfully");
                } catch (e) {
                  D.ZP.error("Failed to switch network. Please try again.");
                  return;
                }
              }
              if (!b) {
                D.ZP.error("Contract address not found");
                return;
              }
              let m = (0, J.u)({ client: eE.o, address: t, chain: f });
              try {
                o = await (0, es.decimals)({ contract: m });
              } catch (e) {
                D.ZP.error("Failed to fetch token decimals");
                return;
              }
              let x =
                null ===
                  (e = Object.keys(ew[h] || {}).find(
                    (e) => ew[h][e].toLowerCase() === t.toLowerCase()
                  )) || void 0 === e
                  ? void 0
                  : e.toLowerCase();
              if (!x || !y || !y[x]) {
                D.ZP.error("Token rate not found");
                return;
              }
              let v = y[x].usd;
              if (!v || v <= 0) {
                D.ZP.error("Invalid conversion rate");
                return;
              }
              let N = (parseFloat(n) / v).toFixed(o),
                w = (0, ei.v)(N, o).toString();
              if (!u) {
                D.ZP.error("Wallet not connected");
                return;
              }
              try {
                let e = await (0, ea.jA)({ contract: m, address: u });
                if (BigInt(e) < BigInt(w)) {
                  D.ZP.error(
                    "Insufficient ".concat(
                      null == x ? void 0 : x.toUpperCase(),
                      " balance"
                    )
                  );
                  return;
                }
              } catch (e) {
                console.error("Error fetching token balance:", e),
                  D.ZP.error("Failed to check token balance");
                return;
              }
              let C = await (0, er.M1)({ contract: m, owner: u, spender: b });
              if (BigInt(C) < BigInt(w)) {
                let e = D.ZP.loading("Approving token...");
                try {
                  let t = (0, en.d)({
                      contract: m,
                      spender: b,
                      amountWei: BigInt(w),
                    }),
                    s = await j(t);
                  D.ZP.loading("Waiting for approval confirmation...", {
                    id: e,
                  }),
                    await (0, Q.h)({
                      transactionHash: s.transactionHash,
                      client: eE.o,
                      chain: f,
                    }),
                    D.ZP.success("Token approved", { id: e });
                } catch (t) {
                  D.ZP.dismiss(e),
                    D.ZP.error(
                      (
                        null === (a = t.message) || void 0 === a
                          ? void 0
                          : a.includes("user rejected")
                      )
                        ? "Approval rejected by user"
                        : "Failed to approve token"
                    );
                  return;
                }
              }
              let _ = D.ZP.loading("Preparing purchase...");
              try {
                if (
                  !(await (0, ee.readContract)({
                    contract: g,
                    method:
                      "function isAcceptedToken(address tokenAddress) view returns (bool)",
                    params: [t],
                  }))
                )
                  throw Error("Token is not accepted for payment");
                let e = (0, et.A)({
                  contract: g,
                  method:
                    "function purchaseCredits(address tokenAddress, address creditedAddress, uint256 amount)",
                  params: [t, u, BigInt(w)],
                });
                D.ZP.loading("Confirming purchase...", { id: _ });
                let a = await j(e);
                D.ZP.loading("Waiting for confirmation...", { id: _ }),
                  await (0, Q.h)({
                    transactionHash: a.transactionHash,
                    client: eE.o,
                    chain: f,
                  }),
                  D.ZP.success(
                    "Purchase successful! Your credits may take 1-2 minutes to appear.",
                    {
                      id: _,
                      duration: 1 / 0,
                      icon: "✅",
                      style: { borderLeft: "4px solid #CDF138" },
                    }
                  ),
                  s(""),
                  i("");
              } catch (e) {
                D.ZP.dismiss(_),
                  D.ZP.error(
                    (
                      null === (r = e.message) || void 0 === r
                        ? void 0
                        : r.includes("user rejected")
                    )
                      ? "Transaction rejected by user"
                      : (
                          null === (l = e.message) || void 0 === l
                            ? void 0
                            : l.startsWith("insufficient funds for gas")
                        )
                      ? "Insufficient funds for gas. Make sure you have enough funds for gas + purchase amount."
                      : (null == e ? void 0 : e.message) ||
                        "Transaction failed. Please try again."
                  );
              }
            } catch (e) {
              D.ZP.error(
                (null == e ? void 0 : e.message) ||
                  "An unexpected error occurred"
              );
            }
          };
        return x
          ? h && eD[h]
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(O(), {
                    id: "8c13143763c1ec45",
                    children:
                      ".hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar::-webkit-scrollbar{display:none}",
                  }),
                  (0, a.jsxs)(el.Vq, {
                    open: l,
                    onOpenChange: (e) => {
                      o(e), e || (s(""), i(""), c(null));
                    },
                    children: [
                      (0, a.jsx)(el.hg, {
                        asChild: !0,
                        children: (0, a.jsxs)(q.E.button, {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          className:
                            "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#CDF138] px-6 text-base font-medium text-black transition-all hover:bg-[#BAD82F]",
                          children: [
                            (0, a.jsx)(w.Z, { size: 20 }),
                            "Purchase Credits",
                          ],
                        }),
                      }),
                      (0, a.jsxs)(el.cZ, {
                        className:
                          "mx-3 flex max-h-[90vh] max-w-[calc(100vw-24px)] flex-col border border-[#343434] bg-black p-0 sm:mx-0 sm:max-w-2xl",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "jsx-8c13143763c1ec45 flex-none p-4 sm:p-6",
                            children: (0, a.jsxs)(el.fK, {
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-8c13143763c1ec45 flex items-center gap-3",
                                  children: [
                                    (0, a.jsx)(q.E.div, {
                                      initial: { scale: 0 },
                                      animate: { scale: 1 },
                                      transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                      },
                                      children: (0, a.jsx)(V.Z, {
                                        size: 24,
                                        className: "text-[#CDF138]",
                                      }),
                                    }),
                                    (0, a.jsx)(q.E.span, {
                                      className:
                                        "custom-font-SFMono-medium bg-gradient-to-r from-[#CDF138] to-[#8FAD0F] bg-clip-text text-3xl font-bold text-transparent",
                                      initial: { opacity: 0, y: -20 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: { duration: 0.5 },
                                      children: "Purchase Credits",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "jsx-8c13143763c1ec45 mt-2 text-[#7D7D7D]",
                                  children:
                                    "Purchase API credits using your preferred payment method",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "jsx-8c13143763c1ec45 mt-2 h-[1px] w-full bg-[#343434]",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "jsx-8c13143763c1ec45 hide-scrollbar flex-1 overflow-y-auto px-4 sm:px-6",
                            children: (0, a.jsx)(q.E.div, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.3, delay: 0.2 },
                              children: (0, a.jsx)(eA, {
                                chain: f,
                                tokenAddress: t,
                                amount: n,
                                setTokenAddress: s,
                                setAmount: i,
                                rates: y,
                                ratesLoading: N,
                                lastUpdated: C,
                                isUsingFallback: _,
                                onDisplayAmountChange: c,
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "jsx-8c13143763c1ec45 flex-none",
                            children: (0, a.jsxs)(el.cN, {
                              className:
                                "flex-col-reverse gap-4 border-t border-[#343434] p-4 sm:flex-row sm:p-6",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-8c13143763c1ec45 flex items-center justify-center gap-2 sm:justify-start",
                                  children: [
                                    (0, a.jsx)(Y.Z, {
                                      size: 16,
                                      className: (0, M.cn)(
                                        "text-[#7D7D7D]",
                                        N && "animate-spin"
                                      ),
                                    }),
                                    (0, a.jsx)(eP, { lastUpdated: C }),
                                  ],
                                }),
                                (0, a.jsx)(q.E.button, {
                                  whileHover: { scale: 1.02 },
                                  whileTap: { scale: 0.98 },
                                  disabled: v || !n || !t || N || !d,
                                  onClick: k,
                                  className: (0, M.cn)(
                                    "flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-medium transition-all",
                                    !v && n && t && !N && d
                                      ? "bg-[#CDF138] text-black hover:bg-[#BAD82F]"
                                      : "cursor-not-allowed bg-[#343434] text-[#7D7D7D]"
                                  ),
                                  children: v
                                    ? (0, a.jsx)(Y.Z, {
                                        size: 20,
                                        className: "animate-spin",
                                      })
                                    : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)(K.Z, { size: 20 }),
                                          "Proceed to Payment",
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, a.jsxs)("button", {
                className:
                  "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#343434] px-6 font-sans text-base font-normal text-[#7D7D7D] transition-all",
                disabled: !0,
                children: [
                  (0, a.jsx)(w.Z, { size: 21, className: "text-[#7D7D7D]" }),
                  "Unsupported network",
                ],
              })
          : (0, a.jsxs)("button", {
              className:
                "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#343434] px-6 font-sans text-base font-normal text-[#7D7D7D] transition-all",
              disabled: !0,
              children: [
                (0, a.jsx)(w.Z, { size: 21, className: "text-[#7D7D7D]" }),
                "Connect Wallet",
              ],
            });
      }
      var eF = s(31947),
        eT = s(39722),
        eZ = s(89040),
        eS = s(45126),
        ez = s(62999);
      function eL() {
        return (0, a.jsx)(a.Fragment, {
          children: [1, 2, 3].map((e) =>
            (0, a.jsx)(
              q.E.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.1 * e },
                children: (0, a.jsx)(eS.Zb, {
                  className: "border-[#343434] bg-[#161616] p-4",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "h-4 w-4 rounded-full bg-[#343434]",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "h-4 w-32 animate-pulse rounded-md bg-[#343434]",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "h-3 w-8 rounded-sm bg-[#343434]",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "h-6 w-24 animate-pulse rounded-md bg-[#343434]",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "h-4 w-4 rounded-full bg-[#343434]",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "h-6 w-64 animate-pulse rounded-md bg-[#343434]",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "h-4 w-4 rounded-full bg-[#343434]",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "h-5 w-48 animate-pulse rounded-md bg-[#343434]",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
              e
            )
          ),
        });
      }
      function eR(e) {
        let { onClose: t } = e,
          { userData: s, loading: r, error: n } = E(),
          i = (e) => new Date(e).toLocaleString(),
          l = (e) =>
            e.length <= 8
              ? e
              : "".concat(e.slice(0, 4), "...").concat(e.slice(-4));
        return (0, a.jsx)(el.Vq, {
          open: !0,
          onOpenChange: () => t(),
          children: (0, a.jsxs)(el.cZ, {
            className:
              "mx-3 max-h-[90vh] max-w-[calc(100vw-24px)] border border-[#343434] bg-black p-4 sm:mx-0 sm:max-w-4xl sm:p-6",
            children: [
              (0, a.jsxs)(el.fK, {
                className: "mb-2",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)(q.E.div, {
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                        children: (0, a.jsx)(eF.Z, {
                          size: 24,
                          className: "text-[#CDF138]",
                        }),
                      }),
                      (0, a.jsx)(q.E.span, {
                        className:
                          "custom-font-SFMono-medium bg-gradient-to-r from-[#CDF138] to-[#8FAD0F] bg-clip-text text-3xl font-bold text-transparent",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5 },
                        children: "Usage History",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-2 text-[#7D7D7D]",
                    children:
                      "View your API credit usage history and transaction details",
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-2 h-[1px] w-full bg-[#343434]",
                  }),
                ],
              }),
              (0, a.jsx)(ez.x, {
                className:
                  "h-[50vh] sm:h-[60vh] [&_[data-radix-scroll-area-scrollbar]]:hidden",
                children: (0, a.jsx)("div", {
                  className: "space-y-4 pr-2",
                  children: r
                    ? (0, a.jsx)(eL, {})
                    : n
                    ? (0, a.jsx)(q.E.div, {
                        className: "flex items-center justify-center py-12",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        children: (0, a.jsx)("p", {
                          className: "text-red-500",
                          children: n,
                        }),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          null == s
                            ? void 0
                            : s.usage_history.map((e, t) =>
                                (0, a.jsx)(
                                  q.E.div,
                                  {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: {
                                      duration: 0.3,
                                      delay: 0.1 * t,
                                    },
                                    children: (0, a.jsx)(eS.Zb, {
                                      className:
                                        "border-[#343434] bg-[#161616] p-4 transition-colors duration-200 hover:bg-[#1c1c1c]",
                                      children: (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2 text-[#7D7D7D]",
                                                children: [
                                                  (0, a.jsx)(eT.Z, {
                                                    size: 16,
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "text-sm",
                                                    children: i(e.date),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "font-mono text-xs text-[#7D7D7D]",
                                                    children: "COST",
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "rounded-md border border-[#343434] bg-black/50 px-3 py-1",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "font-mono text-sm font-medium text-[#CDF138]",
                                                        children:
                                                          e.usage.toFixed(6),
                                                      }),
                                                      (0, a.jsxs)("span", {
                                                        className:
                                                          "font-mono text-xs text-[#7D7D7D]",
                                                        children: [
                                                          " ",
                                                          "credits",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, a.jsx)(eF.Z, {
                                                size: 16,
                                                className: "text-[#7D7D7D]",
                                              }),
                                              (0, a.jsx)("div", {
                                                className:
                                                  "rounded-md border border-[#343434] bg-black/50 px-3 py-1.5",
                                                children: (0, a.jsx)("span", {
                                                  className:
                                                    "font-mono text-sm font-medium text-white",
                                                  children: e.model_permaslug,
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, a.jsx)(eZ.Z, {
                                                size: 16,
                                                className: "text-[#7D7D7D]",
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "group relative rounded-md border border-[#343434] bg-black/50 px-2 py-1",
                                                children: [
                                                  (0, a.jsx)("code", {
                                                    className:
                                                      "font-mono text-xs text-[#9D9D9D]",
                                                    children: l(e.api_key),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "absolute -top-8 left-1/2 hidden -translate-x-1/2 transform rounded-md bg-[#161616] px-2 py-1 text-xs text-white group-hover:block",
                                                    children: e.api_key,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  t
                                )
                              ),
                          (!(null == s ? void 0 : s.usage_history) ||
                            0 === s.usage_history.length) &&
                            (0, a.jsxs)(q.E.div, {
                              className:
                                "flex flex-col items-center justify-center py-12 text-[#7D7D7D]",
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.5 },
                              children: [
                                (0, a.jsx)(eF.Z, {
                                  size: 24,
                                  className: "mb-2",
                                }),
                                (0, a.jsx)("p", {
                                  children: "No usage history found",
                                }),
                              ],
                            }),
                        ],
                      }),
                }),
              }),
            ],
          }),
        });
      }
      function eU(e) {
        let { className: t } = e,
          { userData: s, loading: n } = E(),
          [i, l] = (0, r.useState)(!1);
        return (0, a.jsxs)("div", {
          className: P,
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center justify-between gap-6 mb:flex-row",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", { className: A, children: "Credits" }),
                    (0, a.jsx)("div", {
                      className: I,
                      children: "View and manage your available API credits",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-2 mb:mt-0",
                  children: (0, a.jsx)(eI, {}),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "".concat(
                F,
                " mt-7 flex flex-col gap-6 px-6 py-6 sm:px-8 sm:py-7"
              ),
              style: T,
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: t,
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "custom-font-SFMono-medium text-base font-semibold leading-[22px] sm:text-lg",
                          children: "Current Balance",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mt-3 flex items-center justify-center gap-2 md:mt-2.5 md:justify-start",
                          children: [
                            (0, a.jsx)(B.default, {
                              src: "/images/balance.svg",
                              alt: "Balance",
                              width: 24,
                              height: 24,
                              className: "sm:h-7 sm:w-7",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "custom-font-SFMono-medium text-xl font-semibold leading-[26px] sm:text-2xl md:text-3xl md:leading-8",
                              children: (() => {
                                var e, t;
                                if (n)
                                  return (0, a.jsx)("span", {
                                    className: "animate-pulse",
                                    children: "...",
                                  });
                                let r =
                                    null !==
                                      (t =
                                        null == s
                                          ? void 0
                                          : s.remaining_credits) && void 0 !== t
                                      ? t
                                      : 0,
                                  i =
                                    (null ===
                                      (e = r.toString().split(".")[1]) ||
                                    void 0 === e
                                      ? void 0
                                      : e.length) > 2;
                                return (0, a.jsx)(R.zt, {
                                  children: (0, a.jsxs)(R.fC, {
                                    children: [
                                      (0, a.jsx)(R.xz, {
                                        asChild: !0,
                                        children: (0, a.jsxs)("div", {
                                          className:
                                            "relative flex items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              children:
                                                Math.round(100 * r) / 100,
                                            }),
                                            i &&
                                              (0, a.jsx)("span", {
                                                className:
                                                  "absolute -right-2.5 -top-0.5 text-[10px] font-light text-[#7D7D7D] transition-colors hover:text-[#9D9D9D]",
                                                children: "*",
                                              }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)(R.h_, {
                                        children: (0, a.jsxs)(R.VY, {
                                          className: (0, M.cn)(
                                            "select-none rounded-md bg-[#161616] px-4 py-2.5 text-sm text-white shadow-xl",
                                            "data-[state=delayed-open]:animate-in",
                                            "data-[state=closed]:animate-out",
                                            "data-[state=delayed-open]:fade-in-0",
                                            "data-[state=closed]:fade-out-0",
                                            "data-[state=delayed-open]:zoom-in-95",
                                            "data-[state=closed]:zoom-out-95",
                                            "data-[side=bottom]:slide-in-from-top-2",
                                            "data-[side=top]:slide-in-from-bottom-2"
                                          ),
                                          sideOffset: 8,
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "font-medium text-[#9D9D9D]",
                                              children: "Full Balance",
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "mt-1 font-mono text-white",
                                              children: r,
                                            }),
                                            (0, a.jsx)(R.Eh, {
                                              className: "fill-[#161616]",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                });
                              })(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => l(!0),
                      className:
                        "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#161616] px-6 text-base text-white transition-all hover:bg-[#343434]",
                      children: "Usage History",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center gap-2 rounded-xl bg-[#161616] px-4 py-3 text-center md:flex-row md:justify-between md:text-left",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)(U.Z, {
                          size: 20,
                          className: "text-white opacity-60",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-sm text-[#7D7D7D]",
                          children: "Credit Conversion Rate",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-sm font-medium",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-[#CDF138]",
                          children: "$1",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-[#7D7D7D]",
                          children: " = ",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-white",
                          children: "100 credits",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i && (0, a.jsx)(eR, { onClose: () => l(!1) }),
          ],
        });
      }
      let eB = (e) => {
          let [t, s] = e.toString().split(".");
          if (!s) return t;
          let a = s.search(/[1-9]/);
          if (-1 === a) return t;
          let r = s.slice(a, a + 2);
          return "".concat(t, ".").concat(s.slice(0, a)).concat(r);
        },
        eM = (e, t) => e.toString() !== t,
        eH = (e, t) =>
          "base" === e
            ? "https://basescan.org/tx/".concat(t)
            : "zksync" === e
            ? "https://explorer.zksync.io/tx/".concat(t)
            : "",
        eO = (e) => {
          let { payments: t } = e;
          return (0, a.jsx)("div", {
            className: "w-full overflow-auto",
            children: (0, a.jsxs)("table", {
              className: "min-w-full whitespace-nowrap",
              children: [
                (0, a.jsx)("thead", {
                  className:
                    "text-left text-xs font-bold tracking-wider text-[#545454]",
                  children: (0, a.jsxs)("tr", {
                    className: "border-b border-[#343434]",
                    children: [
                      (0, a.jsx)("th", {
                        className: "px-4 py-3",
                        children: "Date",
                      }),
                      (0, a.jsx)("th", {
                        className: "px-4 py-3",
                        children: "Amount",
                      }),
                      (0, a.jsx)("th", {
                        className: "px-4 py-3",
                        children: "Chain",
                      }),
                      (0, a.jsx)("th", {
                        className: "px-4 py-3",
                        children: "Credits",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("tbody", {
                  className: "text-sm",
                  children: t.map((e) =>
                    (0, a.jsxs)(
                      "tr",
                      {
                        className:
                          "border-b border-[#343434] last:border-none hover:bg-[#1a1a1a]",
                        children: [
                          (0, a.jsx)("td", {
                            className: "px-4 py-3",
                            children: new Date(
                              1e3 * e.utc_seconds
                            ).toLocaleDateString(),
                          }),
                          (0, a.jsx)("td", {
                            className: "px-4 py-3",
                            children: (0, a.jsxs)("div", {
                              className: "group relative inline-block",
                              children: [
                                e.usd_amount,
                                "$ (",
                                eB(e.payment_amount_formatted),
                                " ",
                                e.token_symbol,
                                eM(
                                  e.payment_amount_formatted,
                                  eB(e.payment_amount_formatted)
                                ) &&
                                  (0, a.jsx)("span", {
                                    className:
                                      "relative -top-1 ml-0.5 text-xs font-normal text-[#7D7D7D]",
                                    children: "*",
                                  }),
                                ")",
                                (0, a.jsxs)("div", {
                                  className:
                                    "pointer-events-none absolute bottom-full left-1/2 z-50 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#161616] px-4 py-2.5 text-sm text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100",
                                  children: [
                                    e.payment_amount_formatted,
                                    " ",
                                    e.token_symbol,
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute left-1/2 top-full -mt-[1px] -translate-x-1/2 border-4 border-transparent border-t-[#161616]",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("td", {
                            className: "px-4 py-3",
                            children: (0, a.jsx)("a", {
                              href: eH(e.network, e.transaction_hash),
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "text-[#CDF138] hover:underline",
                              children:
                                "zksync" === e.network
                                  ? "ZKSync"
                                  : e.network.charAt(0).toUpperCase() +
                                    e.network.slice(1),
                            }),
                          }),
                          (0, a.jsx)("td", {
                            className: "px-4 py-3",
                            children: e.credits,
                          }),
                        ],
                      },
                      e.transaction_hash
                    )
                  ),
                }),
              ],
            }),
          });
        };
      function eW() {
        let { address: e } = (0, m.m)(),
          { userData: t, loading: s, error: r } = E(),
          n = () =>
            s
              ? (0, a.jsx)("span", {
                  className: Z,
                  children: "Loading history...",
                })
              : e
              ? r
                ? (0, a.jsx)("span", { className: Z, children: r })
                : (null == t ? void 0 : t.payments) && 0 !== t.payments.length
                ? (0, a.jsx)(eO, { payments: t.payments })
                : (0, a.jsx)("span", {
                    className: Z,
                    children: "No payment history found",
                  })
              : (0, a.jsx)("span", {
                  className: Z,
                  children: "Connect wallet to view history",
                });
        return (0, a.jsxs)("div", {
          className: P,
          children: [
            (0, a.jsx)("div", { className: A, children: "Payment History" }),
            (0, a.jsx)("div", {
              className: I,
              children: "View your usage of payments",
            }),
            (0, a.jsx)("div", {
              className: "".concat(F, " mt-7 p-2 sm:p-6"),
              style: T,
              children:
                !s &&
                e &&
                !r &&
                (null == t ? void 0 : t.payments) &&
                0 !== t.payments.length
                  ? n()
                  : (0, a.jsx)("div", { className: S, children: n() }),
            }),
          ],
        });
      }
      var eK = s(52513),
        eV = s(10681),
        eY = s(87711);
      let eX = {
          ethereum: (0, i.ax)({
            id: 1,
            rpc: "https://lb.drpc.org/ogrpc?network=ethereum&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d",
          }),
          bsc: (0, i.ax)({
            id: 56,
            rpc: "https://lb.drpc.org/ogrpc?network=bsc&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d",
          }),
          zksync: (0, i.ax)({
            id: 324,
            rpc: "https://lb.drpc.org/ogrpc?network=zksync&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d",
          }),
          base: (0, i.ax)({
            id: 8453,
            rpc: "https://lb.drpc.org/ogrpc?network=base&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d",
          }),
          arbitrum: (0, i.ax)({
            id: 42161,
            rpc: "https://lb.drpc.org/ogrpc?network=arbitrum&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d",
          }),
          mantle: (0, i.ax)({
            id: 5e3,
            rpc: "https://lb.drpc.org/ogrpc?network=mantle&dkey=AhbocRMs9UF1oHbgW1jbkknsJFyi3YsR76Tzqi5fk9AX",
          }),
        },
        e$ = {
          1: "ethereum",
          56: "bsc",
          324: "zksync",
          8453: "base",
          42161: "arbitrum",
          5e3: "mantle",
        };
      function eG() {
        let { isMobile: e, setIsMobile: t } = (0, r.useContext)(eK.h),
          { data: s } = (0, c.p)(),
          i = (0, m.m)(),
          { disconnectAsync: f } = (0, x.q)(),
          { switchChainAsync: j } = (0, u.o)(),
          v = (0, n.U)(),
          { setIsAuthenticated: y } = (0, C.a)(),
          N = (0, r.useRef)(!0);
        (0, r.useEffect)(() => {
          let e;
          if (!i.isConnected)
            return N.current
              ? ((e = setTimeout(() => {
                  i.isConnected || (y(!1), p()), (N.current = !1);
                }, 2500)),
                () => clearTimeout(e))
              : (y(!1), void p());
          (N.current = !1),
            (async () => {
              if (s) {
                let e = l.v.walletClient.fromViem({ walletClient: s }),
                  t = await s.getChainId(),
                  a = e$[t],
                  r = a ? eX[a] : void 0;
                r ||
                  (console.warn("Unsupported chain ID: ".concat(t)),
                  (r = eX.base));
                let n = (0, d.S)({
                  adaptedAccount: e,
                  chain: r,
                  client: eE.o,
                  onDisconnect: async () => {
                    y(!1), await Promise.all([f(), p()]);
                  },
                  switchChain: async (e) => {
                    await j({ chainId: e.id });
                  },
                });
                if ((v(n), y(!1), await p(), await g())) {
                  y(!0);
                  return;
                }
                try {
                  let e = n.getAccount();
                  if (!e) throw Error("no account found");
                  let t = n.getChain();
                  if (!t) throw Error("no chain found");
                  let s = await h({ address: e.address, chainId: t.id }),
                    a = await (0, o.signLoginPayload)({
                      account: e,
                      payload: s,
                    });
                  await b(a), y(!0);
                } catch (e) {
                  console.error("login error:", e), y(!1);
                }
              }
            })();
        }, [s, f, j, v, y, i.address]),
          (0, r.useEffect)(() => {
            (async () => {
              let e = window.navigator.userAgent || "";
              t((0, eV.b)(e));
            })();
          }, []),
          (0, r.useEffect)(() => {
            w(document.documentElement.clientWidth);
          }, [e]),
          (0, r.useEffect)(() => {
            let e = () => {
              w(document.documentElement.clientWidth);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
        let w = (e) => {
          t(e < 840);
        };
        return (0, a.jsxs)("div", {
          className: "relative",
          children: [
            (0, a.jsx)("div", {
              className: "absolute right-8 top-8 z-10",
              children: (0, a.jsx)(eY.NL, {
                label: "Connect Wallet",
                showBalance: !1,
              }),
            }),
            (0, a.jsx)("div", {
              className:
                "relative flex items-center justify-center bg-black p-8 text-white",
              children: (0, a.jsxs)("div", {
                className: "w-full pt-14",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "custom-font-SFMono-medium text-2xl lg:text-3xl xl:text-4xl",
                    children: "Purchase API Credits",
                  }),
                  (0, a.jsx)("div", {
                    className: "mb-6 mt-8 h-[2px] bg-[#161616]",
                  }),
                  (0, a.jsxs)(k, {
                    children: [
                      (0, a.jsx)(eU, {}),
                      (0, a.jsx)("div", {
                        className: "my-6 h-[2px] bg-[#161616]",
                      }),
                      (0, a.jsx)(L, {}),
                      (0, a.jsx)("div", {
                        className: "my-6 h-[2px] bg-[#161616]",
                      }),
                      (0, a.jsx)(eW, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    45126: function (e, t, s) {
      "use strict";
      s.d(t, {
        Zb: function () {
          return i;
        },
        aY: function () {
          return l;
        },
      });
      var a = s(90132),
        r = s(55881),
        n = s(85289);
      let i = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            s
          ),
          ...r,
        });
      });
      (i.displayName = "Card"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, n.cn)("flex flex-col space-y-1.5 p-6", s),
            ...r,
          });
        }).displayName = "CardHeader"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("h3", {
            ref: t,
            className: (0, n.cn)(
              "font-semibold leading-none tracking-tight",
              s
            ),
            ...r,
          });
        }).displayName = "CardTitle"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("p", {
            ref: t,
            className: (0, n.cn)("text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = "CardDescription");
      let l = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, n.cn)("p-6 pt-0", s),
          ...r,
        });
      });
      (l.displayName = "CardContent"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, n.cn)("flex items-center p-6 pt-0", s),
            ...r,
          });
        }).displayName = "CardFooter");
    },
    4572: function (e, t, s) {
      "use strict";
      s.d(t, {
        $N: function () {
          return f;
        },
        Vq: function () {
          return l;
        },
        cN: function () {
          return u;
        },
        cZ: function () {
          return m;
        },
        fK: function () {
          return x;
        },
        hg: function () {
          return o;
        },
      });
      var a = s(90132),
        r = s(70316),
        n = s(55881),
        i = s(85289);
      let l = r.fC,
        o = r.xz,
        d = r.h_;
      r.x8;
      let c = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, a.jsx)(r.aV, {
          ref: t,
          className: (0, i.cn)(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            s
          ),
          ...n,
        });
      });
      c.displayName = r.aV.displayName;
      let m = n.forwardRef((e, t) => {
        let { className: s, children: n, ...l } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(c, {}),
            (0, a.jsx)(r.VY, {
              ref: t,
              className: (0, i.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-[520px] max-w-[calc(100vw-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                s
              ),
              ...l,
              children: n,
            }),
          ],
        });
      });
      m.displayName = r.VY.displayName;
      let x = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...s,
        });
      };
      x.displayName = "DialogHeader";
      let u = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...s,
        });
      };
      u.displayName = "DialogFooter";
      let f = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, a.jsx)(r.Dx, {
          ref: t,
          className: (0, i.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            s
          ),
          ...n,
        });
      });
      (f.displayName = r.Dx.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, a.jsx)(r.dk, {
            ref: t,
            className: (0, i.cn)("text-sm text-muted-foreground", s),
            ...n,
          });
        }).displayName = r.dk.displayName);
    },
    4339: function (e, t, s) {
      "use strict";
      s.d(t, {
        I: function () {
          return i;
        },
      });
      var a = s(90132),
        r = s(55881),
        n = s(85289);
      let i = r.forwardRef((e, t) => {
        let { className: s, type: r, ...i } = e;
        return (0, a.jsx)("input", {
          type: r,
          className: (0, n.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            s
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    62999: function (e, t, s) {
      "use strict";
      s.d(t, {
        x: function () {
          return l;
        },
      });
      var a = s(90132),
        r = s(55881),
        n = s(14476),
        i = s(85289);
      let l = r.forwardRef((e, t) => {
        let { className: s, children: r, ...l } = e;
        return (0, a.jsxs)(n.fC, {
          ref: t,
          className: (0, i.cn)("relative overflow-hidden", s),
          ...l,
          children: [
            (0, a.jsx)(n.l_, {
              className: "h-full w-full rounded-[inherit]",
              children: r,
            }),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(n.Ns, {}),
          ],
        });
      });
      l.displayName = n.fC.displayName;
      let o = r.forwardRef((e, t) => {
        let { className: s, orientation: r = "vertical", ...l } = e;
        return (0, a.jsx)(n.gb, {
          ref: t,
          orientation: r,
          className: (0, i.cn)(
            "flex touch-none select-none transition-colors",
            "vertical" === r &&
              "h-full w-2.5 border-l border-l-transparent p-[1px]",
            "horizontal" === r &&
              "h-2.5 flex-col border-t border-t-transparent p-[1px]",
            s
          ),
          ...l,
          children: (0, a.jsx)(n.q4, {
            className: "relative flex-1 rounded-full bg-border",
          }),
        });
      });
      o.displayName = n.gb.displayName;
    },
    96899: function (e, t, s) {
      "use strict";
      s.d(t, {
        H: function () {
          return i;
        },
        a: function () {
          return l;
        },
      });
      var a = s(90132),
        r = s(55881);
      let n = (0, r.createContext)(void 0);
      function i(e) {
        let { children: t } = e,
          [s, i] = (0, r.useState)(!1),
          [l, o] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            o(!1);
          }, []),
          (0, a.jsx)(n.Provider, {
            value: { isAuthenticated: s, setIsAuthenticated: i, isLoading: l },
            children: !l && t,
          })
        );
      }
      function l() {
        let e = (0, r.useContext)(n);
        if (void 0 === e)
          throw Error("useAuth must be used within an AuthProvider");
        return e;
      }
    },
    52513: function (e, t, s) {
      "use strict";
      s.d(t, {
        CommonProvider: function () {
          return i;
        },
        h: function () {
          return n;
        },
      });
      var a = s(90132),
        r = s(55881);
      let n = (0, r.createContext)({
          showNav: !1,
          setShowNav: () => {},
          isMobile: !1,
          setIsMobile: () => {},
          address: "",
          setAddress: () => {},
          mineData: { loaded: !1, totalLlamaPoints: 0, totalWaifuPoints: 0 },
          setMineData: () => {},
        }),
        i = (e) => {
          let { children: t } = e,
            [s, i] = (0, r.useState)(!1),
            [l, o] = (0, r.useState)(!1),
            [d, c] = (0, r.useState)({});
          return (0, a.jsx)(n.Provider, {
            value: {
              showNav: s,
              setShowNav: i,
              isMobile: l,
              setIsMobile: o,
              mineData: d,
              setMineData: c,
            },
            children: t,
          });
        };
    },
    10681: function (e, t, s) {
      "use strict";
      s.d(t, {
        b: function () {
          return a;
        },
      });
      let a = (e) => /Mobi|Android/i.test(e);
    },
    32848: function (e, t, s) {
      "use strict";
      s.d(t, {
        o: function () {
          return l;
        },
      });
      var a = s(33643),
        r = s(87498);
      let n = s(89445).env.THIRDWEB_SECRET_KEY,
        i = r.O.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
        l = (0, a.P)({ clientId: i });
      (0, a.P)(n ? { secretKey: n } : { clientId: i });
    },
    85289: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return n;
        },
      });
      var a = s(53156),
        r = s(65221);
      function n() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.m6)((0, a.W)(t));
      }
      s(87498);
    },
    87498: function (e, t, s) {
      "use strict";
      s.d(t, {
        O: function () {
          return i;
        },
      });
      var a = s(18728),
        r = s(36971),
        n = s(89445);
      let i = (0, r.D)({
        server: {
          UMAMI_URL: a.z.string().optional(),
          UMAMI_WEBSITE_ID: a.z.string().optional(),
          CREDITS_BACKEND_URL: a.z.string().min(1),
          API_AUTH_KEY: a.z.string().min(1),
          ZYFI_API_KEY: a.z.string().min(1),
          THIRDWEB_SECRET_KEY: a.z.string().min(1),
          THIRDWEB_AUTH_PRIVATE_KEY: a.z.string().min(1),
          MAILJET_API_KEY: a.z.string().optional(),
          MAILJET_SECRET_KEY: a.z.string().optional(),
          MAILJET_LIST_ID: a.z.string().optional(),
          MAILJET_ADDITIONAL_LIST_ID: a.z.string().optional(),
        },
        client: {
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: a.z.string().min(1),
          NEXT_PUBLIC_THIRDWEB_CLIENT_ID: a.z.string().min(1),
          NEXT_PUBLIC_NFT_CONTRACT_ADDRESS: a.z.string().min(1),
          NEXT_PUBLIC_VERCEL_ENV: a.z
            .enum(["development", "preview", "production"])
            .optional(),
          NEXT_PUBLIC_VERCEL_URL: a.z.string().optional(),
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
          CREDITS_BACKEND_URL: n.env.CREDITS_BACKEND_URL,
          API_AUTH_KEY: n.env.API_AUTH_KEY,
          ZYFI_API_KEY: n.env.ZYFI_API_KEY,
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        33076, 60750, 6545, 20049, 88212, 17714, 65221, 15741, 7408, 57743,
        79873, 15038, 71180, 36881, 59062, 34034, 1744,
      ],
      function () {
        return e((e.s = 64727));
      }
    ),
      (_N_E = e.O());
  },
]);
