"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43829],
  {
    20778: function (t, e, n) {
      n.d(e, {
        B: function () {
          return r;
        },
      });
      var a = n(72151);
      async function r(t) {
        let {
          client: e,
          ecosystem: n,
          walletType: r,
          walletAddress: i,
          chainId: c,
        } = t;
        return (0, a.j)({
          client: e,
          ecosystem: n,
          data: {
            source: "connectWallet",
            action: "connect",
            walletType: r,
            walletAddress: i,
            chainId: c,
          },
        });
      }
    },
    2552: function (t, e, n) {
      async function a(t, e) {
        return t({
          method: "eth_getCode",
          params: [e.address, e.blockTag || "latest"],
        });
      }
      n.d(e, {
        c: function () {
          return c;
        },
      });
      var r = n(91552);
      let i = new WeakMap();
      function c(t) {
        if (i.has(t)) return i.get(t);
        let e = (async () => {
          let e = (0, r.getRpcClient)(t),
            n = await a(e, { address: t.address, blockTag: "latest" });
          return "0x" === n && i.delete(t), n;
        })();
        return i.set(t, e), e;
      }
    },
    49311: function (t, e, n) {
      n.d(e, {
        K: function () {
          return a;
        },
      });
      function a(t, e) {
        return t.invalidateQueries({
          queryKey: e ? ["walletBalance", e] : ["walletBalance"],
        });
      }
    },
    16961: function (t, e, n) {
      n.d(e, {
        l: function () {
          return r;
        },
      });
      var a = n(51495);
      function r(t) {
        let e = null == t ? void 0 : t.getConfig();
        return (
          void 0 !== t &&
          ("smart" === t.id ||
            ("inApp" === t.id && !!e && "smartAccount" in e) ||
            ((0, a.J)(t) && !!e && "smartAccount" in e))
        );
      }
    },
    80738: function (t, e, n) {
      n.d(e, {
        isContractDeployed: function () {
          return i;
        },
      });
      var a = n(2552);
      let r = new WeakSet();
      async function i(t) {
        if (r.has(t)) return !0;
        let e = "0x" !== (await (0, a.c)(t));
        return e && r.add(t), e;
      }
    },
    21978: function (t, e, n) {
      n.d(e, {
        BN: function () {
          return c;
        },
        Zx: function () {
          return o;
        },
        j$: function () {
          return i;
        },
      });
      var a = n(57800);
      let r = "tw:connected-wallet-params";
      async function i(t, e, n) {
        let i;
        if (
          !(function (t) {
            try {
              return (0, a.P)(t), !0;
            } catch (t) {
              return !1;
            }
          })(n)
        )
          throw Error("given params are not stringifiable");
        let c = await t.getItem(r);
        if (c) {
          try {
            i = JSON.parse(c);
          } catch (t) {
            i = {};
          }
          i[e] = n;
        } else i = { [e]: n };
        t.setItem(r, (0, a.P)(i));
      }
      async function c(t, e) {
        let n;
        let i = await t.getItem(r);
        if (i) {
          try {
            n = JSON.parse(i);
          } catch (t) {
            n = {};
          }
          delete n[e], t.setItem(r, (0, a.P)(n));
        }
      }
      async function o(t, e) {
        let n = await t.getItem(r);
        if (!n) return null;
        try {
          let t = JSON.parse(n);
          if (null == t ? void 0 : t[e]) return t[e];
          return null;
        } catch (t) {
          return null;
        }
      }
    },
    95156: function (t, e, n) {
      n.d(e, {
        x: function () {
          return a;
        },
      });
      let a = {
        async getItem(t) {
          try {
            if ("undefined" != typeof window && window.localStorage)
              return localStorage.getItem(t);
          } catch (t) {}
          return null;
        },
        async setItem(t, e) {
          try {
            "undefined" != typeof window &&
              window.localStorage &&
              localStorage.setItem(t, e);
          } catch (t) {}
        },
        async removeItem(t) {
          "undefined" != typeof window &&
            window.localStorage &&
            localStorage.removeItem(t);
        },
      };
    },
    94447: function (t, e, n) {
      n.d(e, {
        fq: function () {
          return w;
        },
        EB: function () {
          return v;
        },
        Nh: function () {
          return g;
        },
        JS: function () {
          return h;
        },
      });
      var a = n(29181),
        r = n(16961);
      function i(t, e) {
        let n =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        n && t();
        let a = e.map((e) =>
          e.subscribe(() => {
            t();
          })
        );
        return () => {
          for (let t of a) t();
        };
      }
      var c = n(25068),
        o = n(57800),
        l = n(21978),
        u = n(31445);
      let s = "thirdweb:connected-wallet-ids",
        d = "thirdweb:active-wallet-id",
        f = "thirdweb:active-chain";
      function w(t) {
        let e = (0, c.M)(void 0),
          n = (0, c.M)(void 0),
          u = (0, c.M)(void 0),
          w = (0, c.M)("disconnected"),
          v = (0, c.M)(new Map());
        i(() => {
          (0, a.vr)([...v.getValue().values()]);
        }, [v]),
          i(() => {
            let t = u.getValue();
            if (!t) return;
            let e = v.getValue().get(t.id);
            e && e !== t && u.setValue(e);
          }, [v, u]);
        let m = (0, c.M)(new Map()),
          b = (0, c.M)(!1),
          p = (function (t, e) {
            let n = new Set(),
              a = t(),
              r = () => {
                for (let t of n) t();
              },
              i = (t) => {
                (a = t), r();
              };
            for (let n of e)
              n.subscribe(() => {
                i(t());
              });
            return {
              getValue: () => a,
              subscribe: (t) => (
                n.add(t),
                () => {
                  n.delete(t);
                }
              ),
            };
          })(() => Array.from(m.getValue().values()), [m]),
          C = (t) => {
            let e = m.getValue();
            if (e.has(t.id)) return;
            let n = new Map(e);
            n.set(t.id, t), m.setValue(n);
          },
          V = (t) => {
            let e = new Map(m.getValue());
            e.delete(t.id), m.setValue(e);
          },
          A = (a) => {
            (0, l.BN)(t, a.id),
              V(a),
              e.getValue() === a &&
                (t.removeItem(d),
                n.setValue(void 0),
                u.setValue(void 0),
                e.setValue(void 0),
                w.setValue("disconnected"));
          },
          I = async (e, n) => {
            if (!e.getAccount())
              throw Error("Cannot set a wallet without an account as active");
            let a = await (async () =>
              (null == n ? void 0 : n.accountAbstraction) && !(0, r.l)(e)
                ? await y(e, n.client, n.accountAbstraction, A)
                : e)();
            return (
              await t.setItem(d, e.id),
              C(e),
              S(a),
              e.subscribe("accountChanged", async () => {
                var t;
                let a = await I(e, n);
                null == n ||
                  null === (t = n.onConnect) ||
                  void 0 === t ||
                  t.call(n, a);
              }),
              a
            );
          },
          E = async (t, e) => {
            var n;
            let a = await I(t, e);
            return (
              null == e ||
                null === (n = e.onConnect) ||
                void 0 === n ||
                n.call(e, a),
              a
            );
          },
          S = (t) => {
            let a = t.getAccount();
            if (!a)
              throw Error("Cannot set a wallet without an account as active");
            C(t),
              e.setValue(t),
              n.setValue(a),
              u.setValue(t.getChain()),
              w.setValue("connected");
            let r = t.subscribe("accountChanged", (t) => {
                n.setValue(t);
              }),
              i = t.subscribe("chainChanged", (t) => u.setValue(t)),
              c = t.subscribe("disconnect", () => {
                o();
              }),
              o = () => {
                A(t), r(), i(), c();
              };
          },
          M = async (e) => {
            S(e), "smart" !== e.id && (await t.setItem(d, e.id));
          };
        i(
          () => {
            let e = u.getValue();
            e ? t.setItem(f, (0, o.P)(e)) : t.removeItem(f);
          },
          [u],
          !1
        ),
          i(
            async () => {
              let e = (await h(t)) || [],
                n = p
                  .getValue()
                  .map((t) => (null == t ? void 0 : t.id))
                  .filter((t) => !!t);
              t.setItem(s, (0, o.P)(Array.from(new Set([...e, ...n]))));
            },
            [p],
            !1
          );
        let B = async (n) => {
          let a = e.getValue();
          if (!a) throw Error("No active wallet found");
          if (!a.switchChain)
            throw Error("Wallet does not support switching chains");
          if ("smart" === a.id) {
            let e = await g(t);
            if (e) {
              let t = p.getValue().find((t) => t.id === e);
              t && (await t.switchChain(n));
            }
            await a.switchChain(n), S(a);
          } else await a.switchChain(n);
          u.setValue(a.getChain());
        };
        return {
          activeWalletStore: e,
          activeAccountStore: n,
          connectedWallets: p,
          addConnectedWallet: C,
          disconnectWallet: (t) => {
            A(t), t.disconnect();
          },
          setActiveWallet: M,
          connect: E,
          handleConnection: I,
          activeWalletChainStore: u,
          switchActiveWalletChain: B,
          activeWalletConnectionStatusStore: w,
          isAutoConnecting: b,
          removeConnectedWallet: V,
          defineChains: function (t) {
            let e = v.getValue();
            if (
              t.every((t) => {
                let n = e.get(t.id);
                return (0, o.P)(n) === (0, o.P)(t);
              })
            )
              return;
            let n = new Map(e);
            for (let e of t) n.set(e.id, e);
            v.setValue(n);
          },
        };
      }
      async function h(t) {
        try {
          let e = await t.getItem(s);
          if (e) return JSON.parse(e);
          return [];
        } catch (t) {
          return [];
        }
      }
      async function g(t) {
        try {
          let e = await t.getItem(d);
          if (e) return e;
        } catch (t) {}
        return null;
      }
      async function v(t) {
        try {
          let e = await t.getItem(f);
          if (e) return JSON.parse(e);
        } catch (t) {}
        return null;
      }
      let y = async (t, e, n, a) => {
        let r = t.getAccount();
        if (!r) throw Error("Cannot set a wallet without an account as active");
        let i = (0, u.d)(n);
        await i.connect({ personalAccount: r, client: e, chain: n.chain });
        let c = t.subscribe("disconnect", () => {
            o();
          }),
          o = () => {
            c(), a(i);
          };
        return i;
      };
    },
    14282: function (t, e, n) {
      n.d(e, {
        Ex: function () {
          return c;
        },
        JK: function () {
          return o;
        },
        Ld: function () {
          return i;
        },
        Rg: function () {
          return s;
        },
        X_: function () {
          return l;
        },
        bI: function () {
          return d;
        },
        yc: function () {
          return u;
        },
      });
      var a = n(73650),
        r = n(80173);
      let i =
          "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
        c = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        o = "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        l = 50000n,
        u = (t) =>
          "v0.7" === d(t || c)
            ? "0x4be0ddfebca9a5a4a617dee4dece99e7c862dceb"
            : "0x85e23b94e7F5E9cC1fF78BCe78cfb15B81f0DF00",
        s = (t) => {
          let e = (0, r.gc)().bundler;
          return e.startsWith("localhost:")
            ? "http://".concat(e, "/v2?chain=").concat(t.id)
            : "https://".concat(t.id, ".").concat(e, "/v2");
        },
        d = (t) => {
          let e = (0, a.Kn)(t);
          if (e === c) return "v0.6";
          if (e === o) return "v0.7";
          throw Error("Unknown paymaster version");
        };
    },
    31445: function (t, e, n) {
      n.d(e, {
        d: function () {
          return s;
        },
      });
      var a = n(20778),
        r = n(29181),
        i = n(33210),
        c = n(26533),
        o = n(80738),
        l = n(68737),
        u = n(14282);
      function s(t) {
        let e, s, d, f;
        let w = (0, l.h)();
        return {
          id: "smart",
          subscribe: w.subscribe,
          getChain() {
            if (f) return (f = (0, r.rT)(f.id) || f);
          },
          getConfig: () => t,
          getAccount: () => s,
          getAdminAccount: () => d,
          autoConnect: async (r) => {
            let { connectSmartAccount: i } = await Promise.all([
                n.e(15038),
                n.e(2693),
                n.e(23957),
              ]).then(n.bind(n, 2693)),
              [c, o] = await i(r, t);
            return (
              (e = r),
              (s = c),
              (f = o),
              (0, a.B)({
                client: r.client,
                walletType: "smart",
                walletAddress: s.address,
                chainId: f.id,
              }),
              s
            );
          },
          connect: async (r) => {
            let { connectSmartAccount: i } = await Promise.all([
                n.e(15038),
                n.e(2693),
                n.e(23957),
              ]).then(n.bind(n, 2693)),
              [c, o] = await i(r, t);
            return (
              (d = r.personalAccount),
              (e = r),
              (s = c),
              (f = o),
              (0, a.B)({
                client: r.client,
                walletType: "smart",
                walletAddress: s.address,
                chainId: f.id,
              }),
              w.emit("accountChanged", s),
              s
            );
          },
          disconnect: async () => {
            if (s) {
              let { disconnectSmartAccount: t } = await Promise.all([
                n.e(15038),
                n.e(2693),
                n.e(23957),
              ]).then(n.bind(n, 2693));
              await t(s);
            }
            (s = void 0),
              (d = void 0),
              (f = void 0),
              w.emit("disconnect", void 0);
          },
          switchChain: async (a) => {
            if (!e)
              throw Error("Cannot switch chain without a previous connection");
            if (!(await (0, c.T)(a))) {
              var r;
              let n = (0, i.u)({
                address:
                  t.factoryAddress ||
                  (0, u.yc)(
                    null === (r = t.overrides) || void 0 === r
                      ? void 0
                      : r.entrypointAddress
                  ),
                chain: a,
                client: e.client,
              });
              if (!(await (0, o.isContractDeployed)(n)))
                throw Error(
                  "Factory contract not deployed on chain: ".concat(a.id)
                );
            }
            let { connectSmartAccount: l } = await Promise.all([
                n.e(15038),
                n.e(2693),
                n.e(23957),
              ]).then(n.bind(n, 2693)),
              [d, h] = await l({ ...e, chain: a }, t);
            (s = d), (f = h), w.emit("chainChanged", a);
          },
        };
      }
    },
  },
]);
