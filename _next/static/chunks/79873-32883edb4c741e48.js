"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [79873],
  {
    68815: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    18205: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return a;
        },
      });
      var r = n(55881);
      function i(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function a(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    40384: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
        k: function () {
          return a;
        },
      });
      var r = n(55881),
        i = n(90132);
      function a(e, t) {
        let n = r.createContext(t),
          a = (e) => {
            let { children: t, ...a } = e,
              o = r.useMemo(() => a, Object.values(a));
            return (0, i.jsx)(n.Provider, { value: o, children: t });
          };
        return (
          (a.displayName = e + "Provider"),
          [
            a,
            function (i) {
              let a = r.useContext(n);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${i}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function o(e, t = []) {
        let n = [],
          a = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let i = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: i } }),
                [n, i]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let o = r.createContext(a),
                u = n.length;
              n = [...n, a];
              let c = (t) => {
                let { scope: n, children: a, ...c } = t,
                  s = n?.[e]?.[u] || o,
                  l = r.useMemo(() => c, Object.values(c));
                return (0, i.jsx)(s.Provider, { value: l, children: a });
              };
              return (
                (c.displayName = t + "Provider"),
                [
                  c,
                  function (n, i) {
                    let c = i?.[e]?.[u] || o,
                      s = r.useContext(c);
                    if (s) return s;
                    if (void 0 !== a) return a;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let i = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let i = n(e)[`__scope${r}`];
                    return { ...t, ...i };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: i }),
                    [i]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(a, ...t),
          ]
        );
      }
    },
    42090: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return a;
        },
      });
      var r = n(55881);
      n(90132);
      var i = r.createContext(void 0);
      function a(e) {
        let t = r.useContext(i);
        return e || t || "ltr";
      }
    },
    55875: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var r,
        i = n(55881),
        a = n(72146),
        o = (r || (r = n.t(i, 2)))["useId".toString()] || (() => void 0),
        u = 0;
      function c(e) {
        let [t, n] = i.useState(o());
        return (
          (0, a.b)(() => {
            e || n((e) => e ?? String(u++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    18115: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(55881),
        i = n(18205),
        a = n(72146),
        o = (e) => {
          var t, n;
          let o, c;
          let { present: s, children: l } = e,
            d = (function (e) {
              var t, n;
              let [i, o] = r.useState(),
                c = r.useRef({}),
                s = r.useRef(e),
                l = r.useRef("none"),
                [d, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = u(c.current);
                  l.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, a.b)(() => {
                  let t = c.current,
                    n = s.current;
                  if (n !== e) {
                    let r = l.current,
                      i = u(t);
                    e
                      ? f("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? f("UNMOUNT")
                      : n && r !== i
                      ? f("ANIMATION_OUT")
                      : f("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, f]),
                (0, a.b)(() => {
                  if (i) {
                    var e;
                    let t;
                    let n =
                        null !== (e = i.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = u(c.current).includes(e.animationName);
                        if (
                          e.target === i &&
                          r &&
                          (f("ANIMATION_END"), !s.current)
                        ) {
                          let e = i.style.animationFillMode;
                          (i.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === i.style.animationFillMode &&
                                (i.style.animationFillMode = e);
                            }));
                        }
                      },
                      a = (e) => {
                        e.target === i && (l.current = u(c.current));
                      };
                    return (
                      i.addEventListener("animationstart", a),
                      i.addEventListener("animationcancel", r),
                      i.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          i.removeEventListener("animationstart", a),
                          i.removeEventListener("animationcancel", r),
                          i.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [i, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    e && (c.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(s),
            f =
              "function" == typeof l
                ? l({ present: d.isPresent })
                : r.Children.only(l),
            m = (0, i.e)(
              d.ref,
              (o =
                null ===
                  (t = Object.getOwnPropertyDescriptor(f.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in o &&
                o.isReactWarning
                ? f.ref
                : (o =
                    null === (n = Object.getOwnPropertyDescriptor(f, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in o &&
                  o.isReactWarning
                ? f.props.ref
                : f.props.ref || f.ref
            );
          return "function" == typeof l || d.isPresent
            ? r.cloneElement(f, { ref: m })
            : null;
        };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      o.displayName = "Presence";
    },
    21211: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return u;
        },
        jH: function () {
          return c;
        },
      });
      var r = n(55881),
        i = n(8108),
        a = n(6309),
        o = n(90132),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...i } = e,
              u = r ? a.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, o.jsx)(u, { ...i, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function c(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    6309: function (e, t, n) {
      n.d(t, {
        g7: function () {
          return o;
        },
      });
      var r = n(55881),
        i = n(18205),
        a = n(90132),
        o = r.forwardRef((e, t) => {
          let { children: n, ...i } = e,
            o = r.Children.toArray(n),
            c = o.find(s);
          if (c) {
            let e = c.props.children,
              n = o.map((t) =>
                t !== c
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, a.jsx)(u, {
              ...i,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, a.jsx)(u, { ...i, ref: t, children: n });
        });
      o.displayName = "Slot";
      var u = r.forwardRef((e, t) => {
        let { children: n, ...a } = e;
        if (r.isValidElement(n)) {
          let e, o;
          let u =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let i = e[r],
                  a = t[r];
                /^on[A-Z]/.test(r)
                  ? i && a
                    ? (n[r] = (...e) => {
                        a(...e), i(...e);
                      })
                    : i && (n[r] = i)
                  : "style" === r
                  ? (n[r] = { ...i, ...a })
                  : "className" === r &&
                    (n[r] = [i, a].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(a, n.props),
            ref: t ? (0, i.F)(t, u) : u,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      u.displayName = "SlotClone";
      var c = ({ children: e }) => (0, a.jsx)(a.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === c;
      }
    },
    28416: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(55881);
      function i(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    511: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var r = n(55881),
        i = n(28416);
      function a({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [a, o] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [a] = n,
              o = r.useRef(a),
              u = (0, i.W)(t);
            return (
              r.useEffect(() => {
                o.current !== a && (u(a), (o.current = a));
              }, [a, o, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          c = u ? e : a,
          s = (0, i.W)(n);
        return [
          c,
          r.useCallback(
            (t) => {
              if (u) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else o(t);
            },
            [u, e, o, s]
          ),
        ];
      }
    },
    72146: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(55881),
        i = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    36822: function (e, t, n) {
      n.d(t, {
        T: function () {
          return p;
        },
      });
      var r = n(9666),
        i = n(2412),
        a = n(24515),
        o = n(24526),
        u = n(37235),
        c = n(93280),
        s = n(62273),
        l = n(32666),
        d = n(94359),
        f = n(16953),
        m = n(26900);
      async function p(e, t) {
        let {
          account: n = e.account,
          chain: p = e.chain,
          accessList: h,
          blobs: v,
          data: w,
          gas: y,
          gasPrice: g,
          maxFeePerBlobGas: C,
          maxFeePerGas: N,
          maxPriorityFeePerGas: T,
          nonce: E,
          to: b,
          value: I,
          ...O
        } = t;
        if (!n)
          throw new i.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let M = (0, r.T)(n);
        try {
          let n;
          if (
            ((0, l.F)(t),
            null !== p &&
              ((n = await (0, s.s)(e, d.L, "getChainId")({})),
              (0, a.q)({ currentChainId: n, chain: p })),
            "local" === M.type)
          ) {
            let t = await (0, s.s)(
                e,
                f.Z,
                "prepareTransactionRequest"
              )({
                account: M,
                accessList: h,
                blobs: v,
                chain: p,
                chainId: n,
                data: w,
                gas: y,
                gasPrice: g,
                maxFeePerBlobGas: C,
                maxFeePerGas: N,
                maxPriorityFeePerGas: T,
                nonce: E,
                to: b,
                value: I,
                ...O,
              }),
              r = p?.serializers?.transaction,
              i = await M.signTransaction(t, { serializer: r });
            return await (0, s.s)(
              e,
              m.p,
              "sendRawTransaction"
            )({ serializedTransaction: i });
          }
          let r = e.chain?.formatters?.transactionRequest?.format,
            i = (r || c.tG)({
              ...(0, u.K)(O, { format: r }),
              accessList: h,
              blobs: v,
              data: w,
              from: M.address,
              gas: y,
              gasPrice: g,
              maxFeePerBlobGas: C,
              maxFeePerGas: N,
              maxPriorityFeePerGas: T,
              nonce: E,
              to: b,
              value: I,
            });
          return await e.request(
            { method: "eth_sendTransaction", params: [i] },
            { retryCount: 0 }
          );
        } catch (e) {
          throw (0, o.$)(e, { ...t, account: M, chain: t.chain || void 0 });
        }
      }
    },
    94027: function (e, t, n) {
      n.d(t, {
        O: function () {
          return d;
        },
      });
      var r = n(9666),
        i = n(2412),
        a = n(24515),
        o = n(11061),
        u = n(93280),
        c = n(62273),
        s = n(32666),
        l = n(94359);
      async function d(e, t) {
        let { account: n = e.account, chain: d = e.chain, ...f } = t;
        if (!n)
          throw new i.o({ docsPath: "/docs/actions/wallet/signTransaction" });
        let m = (0, r.T)(n);
        (0, s.F)({ account: m, ...t });
        let p = await (0, c.s)(e, l.L, "getChainId")({});
        null !== d && (0, a.q)({ currentChainId: p, chain: d });
        let h = d?.formatters || e.chain?.formatters,
          v = h?.transactionRequest?.format || u.tG;
        return "local" === m.type
          ? m.signTransaction(
              { ...f, chainId: p },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...v(f), chainId: (0, o.eC)(p), from: m.address }],
              },
              { retryCount: 0 }
            );
      }
    },
    72866: function (e, t, n) {
      n.d(t, {
        x: function () {
          return c;
        },
      });
      var r = n(9666),
        i = n(2412),
        a = n(10757),
        o = n(50696),
        u = n(6911);
      async function c(e, t) {
        let {
          account: n = e.account,
          domain: c,
          message: s,
          primaryType: l,
        } = t;
        if (!n)
          throw new i.o({ docsPath: "/docs/actions/wallet/signTypedData" });
        let d = (0, r.T)(n),
          f = { EIP712Domain: (0, u.cj)({ domain: c }), ...t.types };
        if (
          ((0, u.iC)({ domain: c, message: s, primaryType: l, types: f }),
          "local" === d.type)
        )
          return d.signTypedData({
            domain: c,
            message: s,
            primaryType: l,
            types: f,
          });
        let m = (0, o.P)(
          { domain: c ?? {}, message: s, primaryType: l, types: f },
          (e, t) => ((0, a.v)(t) ? t.toLowerCase() : t)
        );
        return e.request(
          { method: "eth_signTypedData_v4", params: [d.address, m] },
          { retryCount: 0 }
        );
      }
    },
    85477: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var r = n(25932),
        i = n(62273),
        a = n(36822);
      async function o(e, t) {
        let {
            abi: n,
            address: o,
            args: u,
            dataSuffix: c,
            functionName: s,
            ...l
          } = t,
          d = (0, r.R)({ abi: n, args: u, functionName: s });
        return (0, i.s)(
          e,
          a.T,
          "sendTransaction"
        )({ data: `${d}${c ? c.replace("0x", "") : ""}`, to: o, ...l });
      }
    },
    24515: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var r = n(20789);
      function i({ chain: e, currentChainId: t }) {
        if (!e) throw new r.Bk();
        if (t !== e.id) throw new r.Yl({ chain: e, currentChainId: t });
      }
    },
    24526: function (e, t, n) {
      n.d(t, {
        $: function () {
          return o;
        },
      });
      var r = n(20972),
        i = n(22253),
        a = n(41258);
      function o(e, { docsPath: t, ...n }) {
        let o = (() => {
          let t = (0, a.k)(e, n);
          return t instanceof r.cj ? e : t;
        })();
        return new i.mk(o, { docsPath: t, ...n });
      }
    },
    12932: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      function r(e, t) {
        let [n, r = "0"] = e.split("."),
          i = n.startsWith("-");
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let [e, i, a] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            o = Math.round(Number(`${i}.${a}`));
          (r =
            o > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${o}`).length > t &&
            ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
    },
    71534: function (e, t, n) {
      n.d(t, {
        p: function () {
          return q;
        },
      });
      var r = n(42453),
        i = n(94359),
        a = n(11061);
      async function o(e, { chain: t }) {
        let {
          id: n,
          name: r,
          nativeCurrency: i,
          rpcUrls: o,
          blockExplorers: u,
        } = t;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, a.eC)(n),
                chainName: r,
                nativeCurrency: i,
                rpcUrls: o.default.http,
                blockExplorerUrls: u
                  ? Object.values(u).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { retryCount: 0 }
        );
      }
      var u = n(31650),
        c = n(36822),
        s = n(2594);
      async function l(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, s.x)(e)
            );
      }
      async function d(e) {
        return await e.request({ method: "wallet_getPermissions" });
      }
      var f = n(16953);
      async function m(e) {
        return (
          await e.request({ method: "eth_requestAccounts" }, { retryCount: 0 })
        ).map((e) => (0, s.K)(e));
      }
      async function p(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      var h = n(26900),
        v = n(51309),
        w = n(94027),
        y = n(72866);
      async function g(e, { id: t }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, a.eC)(t) }],
          },
          { retryCount: 0 }
        );
      }
      async function C(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
      var N = n(85477);
      function T(e) {
        return {
          addChain: (t) => o(e, t),
          deployContract: (t) =>
            (function (e, t) {
              let { abi: n, args: r, bytecode: i, ...a } = t,
                o = (0, u.w)({ abi: n, args: r, bytecode: i });
              return (0, c.T)(e, { ...a, data: o });
            })(e, t),
          getAddresses: () => l(e),
          getChainId: () => (0, i.L)(e),
          getPermissions: () => d(e),
          prepareTransactionRequest: (t) => (0, f.Z)(e, t),
          requestAddresses: () => m(e),
          requestPermissions: (t) => p(e, t),
          sendRawTransaction: (t) => (0, h.p)(e, t),
          sendTransaction: (t) => (0, c.T)(e, t),
          signMessage: (t) => (0, v.l)(e, t),
          signTransaction: (t) => (0, w.O)(e, t),
          signTypedData: (t) => (0, y.x)(e, t),
          switchChain: (t) => g(e, t),
          watchAsset: (t) => C(e, t),
          writeContract: (t) => (0, N.n)(e, t),
        };
      }
      var E = n(99303);
      async function b(e, t = {}) {
        let n = await (0, E.e)(e, t);
        return n.extend(T), n.extend(T);
      }
      var I = n(62111),
        O = n(55881),
        M = n(33431),
        _ = n(9117),
        R = n(88227),
        $ = n(9254);
      function q() {
        var e, t, n;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: a = {}, ...o } = i,
          u = (0, $.Z)(o),
          c = (0, r.NL)(),
          { address: s, connector: l, status: d } = (0, _.m)(),
          f = (0, R.x)(),
          { queryKey: m, ...p } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { connectorUid: i, scopeKey: a, ...o } = n[1];
                return b(e, { ...o, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return [
                  "walletClient",
                  { ...(0, I.O)(n), connectorUid: t?.uid },
                ];
              })(t),
            };
          })(u, {
            ...i,
            chainId: null !== (e = i.chainId) && void 0 !== e ? e : f,
            connector: null !== (t = i.connector) && void 0 !== t ? t : l,
          }),
          h = !!(
            "disconnected" !== d &&
            (null === (n = a.enabled) || void 0 === n || n)
          ),
          v = (0, O.useRef)(s);
        return (
          (0, O.useEffect)(() => {
            let e = v.current;
            !s && e
              ? (c.removeQueries({ queryKey: m }), (v.current = void 0))
              : s !== e &&
                (c.invalidateQueries({ queryKey: m }), (v.current = s));
          }, [s, c]),
          (0, M.aM)({ ...a, ...p, queryKey: m, enabled: h, staleTime: 1 / 0 })
        );
      }
    },
  },
]);
