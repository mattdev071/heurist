(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59324],
  {
    59324: function (e, t, i) {
      "use strict";
      i.d(t, {
        EthereumProvider: function () {
          return sl;
        },
      });
      var r = i(92693),
        s = i.n(r),
        n = i(34013),
        o = i(4152),
        a = i(65307),
        c = i(51317),
        h = i(52538),
        l = i(12691),
        u = i(67701),
        p = i(56578),
        d = i(45345),
        f = i(81421),
        g = i(11280),
        y = i(43738),
        m = i(11708),
        v = i(70108),
        w = i(89445);
      function b(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      let _ = "base10",
        E = "base16",
        I = "base64pad",
        P = "utf8";
      function S() {
        let e = (0, a.randomBytes)(32);
        return (0, p.B)(e, E);
      }
      function R(e) {
        let t = (0, c.vp)((0, u.m)(e, P));
        return (0, p.B)(t, E);
      }
      function O(e) {
        return Number((0, p.B)(e, _));
      }
      function x(e) {
        let t = (0, u.m)(e, I),
          i = t.slice(0, 1);
        if (1 === O(i)) {
          let e = t.slice(1, 33),
            r = t.slice(33, 45);
          return { type: i, sealed: t.slice(45), iv: r, senderPublicKey: e };
        }
        let r = t.slice(1, 13);
        return { type: i, sealed: t.slice(13), iv: r };
      }
      function N(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function C(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var A = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        q = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        j = (e, t, i) =>
          t in e
            ? A(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        $ = (e, t) => {
          for (var i in t || (t = {})) q.call(t, i) && j(e, i, t[i]);
          if (T) for (var i of T(t)) D.call(t, i) && j(e, i, t[i]);
          return e;
        };
      let U = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function k() {
        return (
          "u" > typeof w &&
          "u" > typeof w.versions &&
          "u" > typeof w.versions.node
        );
      }
      function M() {
        return (
          !(0, g.getDocument)() &&
          !!(0, g.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function z() {
        return !k() && !!(0, g.getNavigator)() && !!(0, g.getDocument)();
      }
      function L() {
        return M() ? U.reactNative : k() ? U.node : z() ? U.browser : U.unknown;
      }
      function V(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function H(e) {
        return Object.fromEntries(e.entries());
      }
      function K(e) {
        return new Map(Object.entries(e));
      }
      function B(e = f.FIVE_MINUTES, t) {
        let i, r, s;
        let n = (0, f.toMiliseconds)(e || f.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          reject: (e) => {
            s && r && (clearTimeout(s), r(e));
          },
          done: () =>
            new Promise((e, o) => {
              (s = setTimeout(() => {
                o(Error(t));
              }, n)),
                (i = e),
                (r = o);
            }),
        };
      }
      function F(e, t, i) {
        return new Promise(async (r, s) => {
          let n = setTimeout(() => s(Error(i)), t);
          try {
            let t = await e;
            r(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function W(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function J(e) {
        let [t, i] = e.split(":"),
          r = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof i) r.topic = i;
        else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${i}`
          );
        return r;
      }
      function G(e, t) {
        return (0, f.fromMiliseconds)(
          (t || Date.now()) + (0, f.toMiliseconds)(e)
        );
      }
      function Q(e) {
        return Date.now() >= (0, f.toMiliseconds)(e);
      }
      function Y(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function Z(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function X({ id: e, topic: t, wcDeepLink: r }) {
        try {
          if (!r) return;
          let s = "string" == typeof r ? JSON.parse(r) : r,
            n = s?.href;
          if ("string" != typeof n) return;
          n.endsWith("/") && (n = n.slice(0, -1));
          let o = `${n}/wc?requestId=${e}&sessionTopic=${t}`,
            a = L();
          a === U.browser
            ? o.startsWith("https://")
              ? window.open(o, "_blank", "noreferrer noopener")
              : window.open(o, "_self", "noreferrer noopener")
            : a === U.reactNative &&
              "u" > typeof (null == i.g ? void 0 : i.g.Linking) &&
              (await i.g.Linking.openURL(o));
        } catch (e) {
          console.error(e);
        }
      }
      async function ee(e, t) {
        try {
          return (
            (await e.getItem(t)) || (z() ? localStorage.getItem(t) : void 0)
          );
        } catch (e) {
          console.error(e);
        }
      }
      function et(e) {
        return e?.relay || { protocol: "irn" };
      }
      function ei(e) {
        let t = v.iO[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var er = Object.defineProperty,
        es = Object.defineProperties,
        en = Object.getOwnPropertyDescriptors,
        eo = Object.getOwnPropertySymbols,
        ea = Object.prototype.hasOwnProperty,
        ec = Object.prototype.propertyIsEnumerable,
        eh = (e, t, i) =>
          t in e
            ? er(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        el = (e, t) => {
          for (var i in t || (t = {})) ea.call(t, i) && eh(e, i, t[i]);
          if (eo) for (var i of eo(t)) ec.call(t, i) && eh(e, i, t[i]);
          return e;
        },
        eu = (e, t) => es(e, en(t));
      function ep(e) {
        var t;
        let i = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          s = e.substring(0, i),
          n = e.substring(i + 1, r).split("@"),
          o = "u" > typeof r ? e.substring(r) : "",
          a = m.parse(o);
        return {
          protocol: s,
          topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = "-") {
            let i = {},
              r = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(r)) {
                  let s = t.replace(r, ""),
                    n = e[t];
                  i[s] = n;
                }
              }),
              i
            );
          })(a),
          expiryTimestamp: a.expiryTimestamp
            ? parseInt(a.expiryTimestamp, 10)
            : void 0,
        };
      }
      function ed(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [i, r] = e.split(":");
            t.push(`${i}:${r}`);
          }),
          t
        );
      }
      function ef(e) {
        return e.includes(":");
      }
      function eg(e) {
        return ef(e) ? e.split(":")[0] : e;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let ey = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        em = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function ev(e, t) {
        let { message: i, code: r } = em[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function ew(e, t) {
        let { message: i, code: r } = ey[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function eb(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function e_(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function eE(e) {
        return typeof e > "u";
      }
      function eI(e, t) {
        return !!(t && eE(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function eP(e, t) {
        return !!(t && eE(e)) || ("number" == typeof e && !isNaN(e));
      }
      function eS(e) {
        return !!(eI(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function eR(e) {
        let t = !0;
        return (
          eb(e) ? e.length && (t = e.every((e) => eI(e, !1))) : (t = !1), t
        );
      }
      function eO(e, t) {
        let i = null;
        return (
          Object.values(e).forEach((e) => {
            var r;
            let s;
            if (i) return;
            let n =
              ((r = `${t}, namespace`),
              (s = null),
              eR(e?.methods)
                ? eR(e?.events) ||
                  (s = ew(
                    "UNSUPPORTED_EVENTS",
                    `${r}, events should be an array of strings or empty array for no events`
                  ))
                : (s = ew(
                    "UNSUPPORTED_METHODS",
                    `${r}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (i = n);
          }),
          i
        );
      }
      function ex(e, t) {
        let i = null;
        if (e && e_(e)) {
          let r;
          let s = eO(e, t);
          s && (i = s);
          let n =
            ((r = null),
            Object.values(e).forEach((e) => {
              var i, s;
              let n;
              if (r) return;
              let o =
                ((i = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                eb(i)
                  ? i.forEach((e) => {
                      n ||
                        (function (e) {
                          if (eI(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && eS(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = ew(
                          "UNSUPPORTED_ACCOUNTS",
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = ew(
                      "UNSUPPORTED_ACCOUNTS",
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (r = o);
            }),
            r);
          n && (i = n);
        } else
          i = ev(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return i;
      }
      function eN(e) {
        return eI(e.protocol, !0);
      }
      function eC(e) {
        return "u" > typeof e;
      }
      function eA(e, t) {
        return !(
          !eS(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...ed(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function eT(e, t, i) {
        let r = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                var r;
                i.includes(":")
                  ? (t[i] = e[i])
                  : null == (r = e[i].chains) ||
                    r.forEach((r) => {
                      t[r] = { methods: e[i].methods, events: e[i].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                if (i.includes(":")) t[i] = e[i];
                else {
                  let r = ed(e[i].accounts);
                  r?.forEach((r) => {
                    t[r] = {
                      accounts: e[i].accounts.filter((e) =>
                        e.includes(`${r}:`)
                      ),
                      methods: e[i].methods,
                      events: e[i].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = eq(Object.keys(e)),
          h = eq(Object.keys(t)),
          l = c.filter((e) => !h.includes(e));
        return (
          l.length &&
            (r = ev(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          V(o, a) ||
            (r = ev(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || r) return;
            let s = ed(t[e].accounts);
            s.includes(e) ||
              (r = ev(
                "NON_CONFORMING_NAMESPACES",
                `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            r ||
              (V(s[e].methods, n[e].methods)
                ? V(s[e].events, n[e].events) ||
                  (r = ev(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (r = ev(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          r
        );
      }
      function eq(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function eD() {
        let e = L();
        return new Promise((t) => {
          switch (e) {
            case U.browser:
              t(z() && navigator?.onLine);
              break;
            case U.reactNative:
              t(ej());
              break;
            case U.node:
            default:
              t(!0);
          }
        });
      }
      async function ej() {
        if (M() && "u" > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let e$ = {};
      class eU {
        static get(e) {
          return e$[e];
        }
        static set(e, t) {
          e$[e] = t;
        }
        static delete(e) {
          delete e$[e];
        }
      }
      var ek = i(28118),
        eM = i(88029),
        ez = i(25701),
        eL = i(60276);
      class eV extends eL.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class eH extends eL.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class eK {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class eB extends eL.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class eF extends eL.q {
        constructor(e) {
          super();
        }
      }
      class eW {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      class eJ extends eL.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class eG extends eL.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class eQ {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class eY {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class eZ {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class eX {
        constructor(e) {
          this.client = e;
        }
      }
      var e0 = i(3175),
        e1 = i(6080),
        e2 = i(13867);
      class e3 extends e2.IJsonRpcProvider {
        constructor(e) {
          super(e),
            (this.events = new r.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            (0, e2.formatJsonRpcRequest)(
              e.method,
              e.params || [],
              e.id || (0, e2.getBigIntRpcId)().toString()
            ),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (i, r) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                r(e);
              }
            this.events.on(`${e.id}`, (e) => {
              (0, e2.isJsonRpcError)(e) ? r(e.error) : i(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              r(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            (0, e2.isJsonRpcResponse)(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let e5 = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof i.g && "u" > typeof i.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        e8 = (e) => e.split("?")[0],
        e4 =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof i.g && "u" > typeof i.g.WebSocket
            ? i.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : i(83905);
      class e6 {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new r.EventEmitter()),
            (this.registering = !1),
            !(0, e2.isWsUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u") {
              t(Error("Connection already closed"));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send((0, e0.u)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, e2.isWsUrl)(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              let r = new URLSearchParams(e).get("origin"),
                s = (0, e2.isReactNative)()
                  ? { headers: { origin: r } }
                  : { rejectUnauthorized: !(0, e2.isLocalhostUrl)(e) },
                n = new e4(e, [], s);
              e5()
                ? (n.onerror = (e) => {
                    i(this.emitError(e.error));
                  })
                : n.on("error", (e) => {
                    i(this.emitError(e));
                  }),
                (n.onopen = () => {
                  this.onOpen(n), t(n);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, e0.D)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            r = i.message || i.toString(),
            s = (0, e2.formatJsonRpcError)(e, r);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, e2.parseConnectionError)(e, e8(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${e8(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var e9 = i(30754),
        e7 = i.n(e9),
        te = i(21170),
        tt = i.n(te),
        ti = i(89445),
        tr = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              o = n.charCodeAt(0);
            if (255 !== i[o]) throw TypeError(n + " is ambiguous");
            i[o] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            h = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * h + 1) >>> 0, o = new Uint8Array(n);
                e[t];

              ) {
                var l = i[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var u = 0, p = n - 1;
                  (0 !== l || u < s) && -1 !== p;
                  p--, u++
                )
                  (l += (a * o[p]) >>> 0),
                    (o[p] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var d = n - s; d !== n && 0 === o[d]; ) d++;
                for (var f = new Uint8Array(r + (n - d)), g = r; d !== n; )
                  f[g++] = o[d++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var o = ((n - s) * l + 1) >>> 0, h = new Uint8Array(o);
                s !== n;

              ) {
                for (
                  var u = t[s], p = 0, d = o - 1;
                  (0 !== u || p < r) && -1 !== d;
                  d--, p++
                )
                  (u += (256 * h[d]) >>> 0),
                    (h[d] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = p), s++;
              }
              for (var f = o - r; f !== o && 0 === h[f]; ) f++;
              for (var g = c.repeat(i); f < o; ++f) g += e.charAt(h[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let ts = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        tn = (e) => new TextEncoder().encode(e),
        to = (e) => new TextDecoder().decode(e);
      class ta {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class tc {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return tl(this, e);
        }
      }
      class th {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return tl(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let tl = (e, t) =>
        new th({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class tu {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new ta(e, t, i)),
            (this.decoder = new tc(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let tp = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new tu(e, t, i, r),
        td = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = tr(i, t);
          return tp({ prefix: e, name: t, encode: r, decode: (e) => ts(s(e)) });
        },
        tf = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * i) / 8) | 0),
            a = 0,
            c = 0,
            h = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | n),
              (a += i) >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
          }
          if (a >= i || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        tg = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let r = 0; r < e.length; ++r)
            for (a = (a << 8) | e[r], o += 8; o > i; )
              (o -= i), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (i - o))]), r))
            for (; (n.length * i) & 7; ) n += "=";
          return n;
        },
        ty = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          tp({
            prefix: t,
            name: e,
            encode: (e) => tg(e, r, i),
            decode: (t) => tf(t, r, i, e),
          });
      var tm = Object.freeze({
          __proto__: null,
          identity: tp({
            prefix: "\0",
            name: "identity",
            encode: (e) => to(e),
            decode: (e) => tn(e),
          }),
        }),
        tv = Object.freeze({
          __proto__: null,
          base2: ty({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        tw = Object.freeze({
          __proto__: null,
          base8: ty({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        tb = Object.freeze({
          __proto__: null,
          base10: td({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        t_ = Object.freeze({
          __proto__: null,
          base16: ty({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: ty({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let tE = ty({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        tI = ty({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        tP = ty({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        tS = ty({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        tR = ty({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        tO = ty({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        });
      var tx = Object.freeze({
          __proto__: null,
          base32: tE,
          base32upper: tI,
          base32pad: tP,
          base32padupper: tS,
          base32hex: tR,
          base32hexupper: tO,
          base32hexpad: ty({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          }),
          base32hexpadupper: ty({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: ty({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        tN = Object.freeze({
          __proto__: null,
          base36: td({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: td({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        tC = Object.freeze({
          __proto__: null,
          base58btc: td({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: td({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let tA = ty({
        prefix: "m",
        name: "base64",
        alphabet:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6,
      });
      var tT = Object.freeze({
        __proto__: null,
        base64: tA,
        base64pad: ty({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        base64url: ty({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: ty({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let tq = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        tD = tq.reduce((e, t, i) => ((e[i] = t), e), []),
        tj = tq.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var t$ = Object.freeze({
        __proto__: null,
        base256emoji: tp({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += tD[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = tj[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function tU(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((tU.bytes = 0), RangeError("Could not decode varint"));
          (i = e[n++]),
            (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
            (s += 7);
        } while (i >= 128);
        return (tU.bytes = n - t), r;
      }
      var tk = function e(t, i, r) {
        (i = i || []), (r = r || 0);
        for (var s = r; t >= 2147483648; )
          (i[r++] = (255 & t) | 128), (t /= 128);
        for (; -128 & t; ) (i[r++] = (255 & t) | 128), (t >>>= 7);
        return (i[r] = 0 | t), (e.bytes = r - s + 1), i;
      };
      let tM = (e, t, i = 0) => (tk(e, t, i), t),
        tz = (e) =>
          e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10,
        tL = (e, t) => {
          let i = t.byteLength,
            r = tz(e),
            s = r + tz(i),
            n = new Uint8Array(s + i);
          return tM(e, n, 0), tM(i, n, r), n.set(t, s), new tV(e, i, t, n);
        };
      class tV {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let tH = ({ name: e, code: t, encode: i }) => new tK(e, t, i);
      class tK {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? tL(this.code, t)
              : t.then((e) => tL(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let tB = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var tF = Object.freeze({
          __proto__: null,
          sha256: tH({ name: "sha2-256", code: 18, encode: tB("SHA-256") }),
          sha512: tH({ name: "sha2-512", code: 19, encode: tB("SHA-512") }),
        }),
        tW = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: ts,
            digest: (e) => tL(0, ts(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let tJ = {
        ...tm,
        ...tv,
        ...tw,
        ...tb,
        ...t_,
        ...tx,
        ...tN,
        ...tC,
        ...tT,
        ...t$,
      };
      function tG(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function tQ(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...tF, ...tW });
      let tY = tQ(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tZ = tQ(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? tG(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        tX = {
          utf8: tY,
          "utf-8": tY,
          hex: tJ.base16,
          latin1: tZ,
          ascii: tZ,
          binary: tZ,
          ...tJ,
        },
        t0 = "core",
        t1 = `wc@2:${t0}:`,
        t2 = { logger: "error" },
        t3 = { database: ":memory:" },
        t5 = "client_ed25519_seed",
        t8 = f.ONE_DAY,
        t4 = f.SIX_HOURS,
        t6 = "wss://relay.walletconnect.com",
        t9 = "wss://relay.walletconnect.org",
        t7 = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        ie = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        it = f.ONE_SECOND,
        ii = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        ir = 1e3 * f.FIVE_SECONDS,
        is = {
          wc_pairingDelete: {
            req: { ttl: f.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: f.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: f.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: f.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: f.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: f.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        io = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        ia = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        ic = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        ih = "verify-api",
        il = "https://verify.walletconnect.com",
        iu = "https://verify.walletconnect.org",
        ip = [il, iu];
      class id {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = ev(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, ez.Ep)(t, this.name));
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, H(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? K(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class ig {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = e1.generateKeyPair(e);
              return e1.encodeIss(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (function () {
                let e = h.Au();
                return {
                  privateKey: (0, p.B)(e.secretKey, E),
                  publicKey: (0, p.B)(e.publicKey, E),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = e1.generateKeyPair(t),
                r = S();
              return await e1.signJWT(r, e, t8, i);
            }),
            (this.generateSharedKey = (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = h.gi((0, u.m)(e, E), (0, u.m)(t, E), !0),
                  r = new o.t(c.mE, i).expand(32);
                return (0, p.B)(r, E);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(r, i);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let i =
                t ||
                (function (e) {
                  let t = (0, c.vp)((0, u.m)(e, E));
                  return (0, p.B)(t, E);
                })(e);
              return await this.keychain.set(i, e), i;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, i) => {
              this.isInitialized();
              let r = N(i),
                s = (0, e0.u)(t);
              if (C(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let o = this.getSymKey(e),
                { type: c, senderPublicKey: h } = r;
              return (function (e) {
                var t;
                let i =
                  ((t = "u" > typeof e.type ? e.type : 0), (0, u.m)(`${t}`, _));
                if (1 === O(i) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let r =
                    "u" > typeof e.senderPublicKey
                      ? (0, u.m)(e.senderPublicKey, E)
                      : void 0,
                  s =
                    "u" > typeof e.iv
                      ? (0, u.m)(e.iv, E)
                      : (0, a.randomBytes)(12);
                return (function (e) {
                  if (1 === O(e.type)) {
                    if (typeof e.senderPublicKey > "u")
                      throw Error(
                        "Missing sender public key for type 1 envelope"
                      );
                    return (0, p.B)(
                      (0, l.z)([e.type, e.senderPublicKey, e.iv, e.sealed]),
                      I
                    );
                  }
                  return (0, p.B)((0, l.z)([e.type, e.iv, e.sealed]), I);
                })({
                  type: i,
                  sealed: new n.OK((0, u.m)(e.symKey, E)).seal(
                    s,
                    (0, u.m)(e.message, P)
                  ),
                  iv: s,
                  senderPublicKey: r,
                });
              })({ type: c, symKey: o, message: s, senderPublicKey: h });
            }),
            (this.decode = async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = x(e);
                return N({
                  type: O(i.type),
                  senderPublicKey:
                    "u" > typeof i.senderPublicKey
                      ? (0, p.B)(i.senderPublicKey, E)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (C(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let i = this.getSymKey(e),
                  r = (function (e) {
                    let t = new n.OK((0, u.m)(e.symKey, E)),
                      { sealed: i, iv: r } = x(e.encoded),
                      s = t.open(r, i);
                    if (null === s) throw Error("Failed to decrypt");
                    return (0, p.B)(s, P);
                  })({ symKey: i, encoded: t });
                return (0, e0.D)(r);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e) => O(x(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              let t = x(e);
              return t.senderPublicKey
                ? (0, p.B)(t.senderPublicKey, E)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.keychain = i || new id(this.core, this.logger));
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(t5);
          } catch {
            (e = S()), await this.keychain.set(t5, e);
          }
          return (function (e, t = "utf8") {
            let i = tX[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? tG(globalThis.Buffer.from(e, "utf-8"))
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class iy extends eK {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let i = R(t),
                r = this.messages.get(e);
              return (
                typeof r > "u" && (r = {}),
                "u" > typeof r[i] ||
                  ((r[i] = t), this.messages.set(e, r), await this.persist()),
                i
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), "u" > typeof this.get(e)[R(t)]
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, ez.Ep)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, H(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? K(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class im extends eB {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new r.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, f.toMiliseconds)(2 * f.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, i) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: i },
                });
              try {
                let s = i?.ttl || t4,
                  n = et(i),
                  o = i?.prompt || !1,
                  a = i?.tag || 0,
                  c = i?.id || (0, e2.getBigIntRpcId)().toString(),
                  h = {
                    topic: e,
                    message: t,
                    opts: { ttl: s, relay: n, prompt: o, tag: a, id: c },
                  },
                  l = setTimeout(
                    () => this.queue.set(c, h),
                    this.publishTimeout
                  );
                try {
                  await await F(
                    this.rpcPublish(e, t, s, n, o, a, c),
                    this.publishTimeout,
                    `Failed to publish payload, please try again. id:${c} tag:${a}`
                  ),
                    this.removeRequestFromQueue(c),
                    this.relayer.events.emit(t7.publish, h);
                } catch (e) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null != (r = i?.internal) && r.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(c), e);
                  return;
                } finally {
                  clearTimeout(l);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: i },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, ez.Ep)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        rpcPublish(e, t, i, r, s, n, o) {
          var a, c, h, l;
          let u = {
            method: ei(r.protocol).publish,
            params: { topic: e, message: t, ttl: i, prompt: s, tag: n },
            id: o,
          };
          return (
            eE(null == (a = u.params) ? void 0 : a.prompt) &&
              (null == (c = u.params) || delete c.prompt),
            eE(null == (h = u.params) ? void 0 : h.tag) &&
              (null == (l = u.params) || delete l.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: u,
            }),
            this.relayer.request(u)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: i, opts: r } = e;
            await this.publish(t, i, r);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(eM.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(t7.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(t7.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class iv {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, r);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var iw = Object.defineProperty,
        ib = Object.defineProperties,
        i_ = Object.getOwnPropertyDescriptors,
        iE = Object.getOwnPropertySymbols,
        iI = Object.prototype.hasOwnProperty,
        iP = Object.prototype.propertyIsEnumerable,
        iS = (e, t, i) =>
          t in e
            ? iw(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iR = (e, t) => {
          for (var i in t || (t = {})) iI.call(t, i) && iS(e, i, t[i]);
          if (iE) for (var i of iE(t)) iP.call(t, i) && iS(e, i, t[i]);
          return e;
        },
        iO = (e, t) => ib(e, i_(t));
      class ix extends eJ {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new iv()),
            (this.events = new r.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = t1),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let i = et(t),
                  r = { topic: e, relay: i };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i);
                return (
                  this.onSubscribe(s, r),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((i, r) => {
                let s = new f.Watch();
                s.start(t);
                let n = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(n), s.stop(t), i(!0)),
                    s.elapsed(t) >= ir &&
                      (clearInterval(n),
                      s.stop(t),
                      r(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(
            i.map(async (i) => await this.unsubscribeById(e, i, t))
          );
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = et(i);
            await this.rpcUnsubscribe(e, t, r);
            let s = ew("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          let i = { method: ei(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            await await F(this.relayer.request(i), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(t7.connection_stalled);
          }
          return R(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: ei(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await F(
              this.relayer.request(t),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(t7.connection_stalled);
          }
        }
        rpcUnsubscribe(e, t, i) {
          let r = {
            method: ei(i.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, iO(iR({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, iR({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, iR({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(ii.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = ev("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(ii.deleted, iO(iR({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(ii.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(ii.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = ev("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          eb(t) &&
            this.onBatchSubscribe(t.map((t, i) => iO(iR({}, e[i]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            eM.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.relayer.on(t7.connect, async () => {
              await this.onConnect();
            }),
            this.relayer.on(t7.disconnect, () => {
              this.onDisconnect();
            }),
            this.events.on(ii.created, async (e) => {
              let t = ii.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(ii.deleted, async (e) => {
              let t = ii.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var iN = Object.defineProperty,
        iC = Object.getOwnPropertySymbols,
        iA = Object.prototype.hasOwnProperty,
        iT = Object.prototype.propertyIsEnumerable,
        iq = (e, t, i) =>
          t in e
            ? iN(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iD = (e, t) => {
          for (var i in t || (t = {})) iA.call(t, i) && iq(e, i, t[i]);
          if (iC) for (var i of iC(t)) iT.call(t, i) && iq(e, i, t[i]);
          return e;
        };
      class ij extends eF {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new r.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              let t = e.id;
              try {
                await this.toEstablishConnection();
                let i = this.provider.request(e);
                return (
                  this.requestsInFlight.set(t, { promise: i, request: e }),
                  await i
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              } finally {
                this.requestsInFlight.delete(t);
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(t7.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(t7.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(ie.payload, this.onPayloadHandler),
                this.provider.on(ie.connect, this.onConnectHandler),
                this.provider.on(ie.disconnect, this.onDisconnectHandler),
                this.provider.on(ie.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, ez.Ep)(e.logger, this.name)
                : (0, ez.gw)((0, ez.jI)({ level: e.logger || "error" }))),
            (this.messages = new iy(this.logger, e.core)),
            (this.subscriber = new ix(this, this.logger)),
            (this.publisher = new im(this, this.logger)),
            (this.relayUrl = e?.relayUrl || t6),
            (this.projectId = e.projectId),
            (this.bundleId = (function () {
              var e;
              try {
                return M() &&
                  "u" > typeof i.g &&
                  "u" > typeof (null == i.g ? void 0 : i.g.Application)
                  ? null == (e = i.g.Application)
                    ? void 0
                    : e.applicationId
                  : void 0;
              } catch {
                return;
              }
            })()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${t9}...`
            ),
              await this.restartTransport(t9);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var i;
          let r;
          this.isInitialized();
          let s =
            (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) ||
            "";
          if (s) return s;
          let n = (t) => {
            t.topic === e && (this.subscriber.off(ii.created, n), r());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (r = e), this.subscriber.on(ii.created, n);
              }),
              new Promise(async (i) => {
                (s = await this.subscriber.subscribe(e, t)), i();
              }),
            ]),
            s
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          this.requestsInFlight.size > 0 &&
            (this.logger.debug(
              "Waiting for all in-flight requests to finish before closing transport..."
            ),
            this.requestsInFlight.forEach(async (e) => {
              await e.promise;
            })),
            (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await F(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(ii.resubscribed, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await F(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    );
                  } catch (e) {
                    t(e);
                    return;
                  }
                  e();
                }),
              ]);
            } catch (e) {
              if ((this.logger.error(e), !this.isConnectionStalled(e.message)))
                throw e;
              this.provider.events.emit(ie.disconnect);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await eD()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new e3(
            new e6(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: s,
                auth: n,
                projectId: o,
                useOnCloseEvent: a,
                bundleId: c,
              }) {
                var h, l;
                let u;
                let p = r.split("?"),
                  f = (function (e, t, r) {
                    let s = (function () {
                        if (
                          L() === U.reactNative &&
                          "u" > typeof i.g &&
                          "u" > typeof (null == i.g ? void 0 : i.g.Platform)
                        ) {
                          let { OS: e, Version: t } = i.g.Platform;
                          return [e, t].join("-");
                        }
                        let e = (0, d.qY)();
                        if (null === e) return "unknown";
                        let t = e.os
                          ? e.os.replace(" ", "").toLowerCase()
                          : "unknown";
                        return "browser" === e.type
                          ? [t, e.name, e.version].join("-")
                          : [t, e.version].join("-");
                      })(),
                      n = (function () {
                        var e;
                        let t = L();
                        return t === U.browser
                          ? [
                              t,
                              (null == (e = (0, g.getLocation)())
                                ? void 0
                                : e.host) || "unknown",
                            ].join(":")
                          : t;
                      })();
                    return [[e, t].join("-"), ["js", r].join("-"), s, n].join(
                      "/"
                    );
                  })(e, t, s),
                  y =
                    ((h = p[1] || ""),
                    (l = {
                      auth: n,
                      ua: f,
                      projectId: o,
                      useOnCloseEvent: a || void 0,
                      origin: c || void 0,
                    }),
                    (u = $($({}, (u = m.parse(h))), l)),
                    (h = m.stringify(u)));
                return p[0] + "?" + y;
              })({
                sdkVersion: "2.11.2",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: i } = e;
          await this.messages.set(t, i);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          let r = this.messages.has(t, i);
          return r && this.logger.debug(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, e2.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s } = t.data,
              n = { topic: i, message: r, publishedAt: s };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(iD({ type: "event", event: t.id }, n)),
              this.events.emit(t.id, n),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(n);
          } else
            (0, e2.isJsonRpcResponse)(e) && this.events.emit(t7.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(t7.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, e2.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(ie.payload, this.onPayloadHandler),
            this.provider.off(ie.connect, this.onConnectHandler),
            this.provider.off(ie.disconnect, this.onDisconnectHandler),
            this.provider.off(ie.error, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(t7.connection_stalled, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await eD();
          !(function (e) {
            switch (L()) {
              case U.browser:
                !M() &&
                  z() &&
                  (window.addEventListener("online", () => e(!0)),
                  window.addEventListener("offline", () => e(!1)));
                break;
              case U.reactNative:
                M() &&
                  "u" > typeof i.g &&
                  null != i.g &&
                  i.g.NetInfo &&
                  i.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
              case U.node:
            }
          })(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(t7.disconnect), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((e) => this.logger.error(e));
            }, (0, f.toMiliseconds)(it)));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var i$ = Object.defineProperty,
        iU = Object.getOwnPropertySymbols,
        ik = Object.prototype.hasOwnProperty,
        iM = Object.prototype.propertyIsEnumerable,
        iz = (e, t, i) =>
          t in e
            ? i$(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iL = (e, t) => {
          for (var i in t || (t = {})) ik.call(t, i) && iz(e, i, t[i]);
          if (iU) for (var i of iU(t)) iM.call(t, i) && iz(e, i, t[i]);
          return e;
        };
      class iV extends eW {
        constructor(e, t, i, r = t1, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  var t;
                  this.getKey && null !== e && !eE(e)
                    ? this.map.set(this.getKey(e), e)
                    : (null == (t = e?.proposer) ? void 0 : t.publicKey)
                    ? this.map.set(e.id, e)
                    : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((i) => e7()(t[i], e[i]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let i = iL(iL({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            let { message: t } = ev("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = ev("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class iH {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (s())()),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              var e;
              this.isInitialized();
              let t = S(),
                i = await this.core.crypto.setSymKey(t),
                r = G(f.FIVE_MINUTES),
                s = { protocol: "irn" },
                n =
                  ((e = {
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: i,
                    symKey: t,
                    relay: s,
                    expiryTimestamp: r,
                  }),
                  `${e.protocol}:${e.topic}@${e.version}?` +
                    m.stringify(
                      eu(
                        el(
                          { symKey: e.symKey },
                          (function (e, t = "-") {
                            let i = {};
                            return (
                              Object.keys(e).forEach((r) => {
                                e[r] && (i["relay" + t + r] = e[r]);
                              }),
                              i
                            );
                          })(e.relay)
                        ),
                        { expiryTimestamp: e.expiryTimestamp }
                      )
                    ));
              return (
                await this.pairings.set(i, {
                  topic: i,
                  expiry: r,
                  relay: s,
                  active: !1,
                }),
                await this.core.relayer.subscribe(i),
                this.core.expirer.set(i, r),
                { topic: i, uri: n }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              let {
                topic: t,
                symKey: i,
                relay: r,
                expiryTimestamp: s,
              } = ep(e.uri);
              if (this.pairings.keys.includes(t) && this.pairings.get(t).active)
                throw Error(
                  `Pairing already exists: ${t}. Please try again with a new connection URI.`
                );
              let n = s || G(f.FIVE_MINUTES),
                o = { topic: t, relay: r, expiry: n, active: !1 };
              return (
                await this.pairings.set(t, o),
                this.core.expirer.set(t, n),
                e.activatePairing && (await this.activate({ topic: t })),
                this.events.emit(io.create, o),
                this.core.crypto.keychain.has(t) ||
                  (await this.core.crypto.setSymKey(i, t),
                  await this.core.relayer.subscribe(t, { relay: r })),
                o
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = G(f.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: i, resolve: r, reject: s } = B();
                this.events.once(Y("pairing_ping", e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  ew("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, i) => {
              let r = (0, e2.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = is[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, s, n),
                r.id
              );
            }),
            (this.sendResult = async (e, t, i) => {
              let r = (0, e2.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = is[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(r);
            }),
            (this.sendError = async (e, t, i) => {
              let r = (0, e2.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = await this.core.history.get(t, e),
                o = is[n.request.method]
                  ? is[n.request.method].res
                  : is.unregistered_method.res;
              await this.core.relayer.publish(t, s, o),
                await this.core.history.resolve(r);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, ew("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings.getAll().filter((e) => Q(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, i);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, i);
                default:
                  return this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(io.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, e2.isJsonRpcResult)(t)
                  ? this.events.emit(Y("pairing_ping", i), {})
                  : (0, e2.isJsonRpcError)(t) &&
                    this.events.emit(Y("pairing_ping", i), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(io.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = ew("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(ew("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              var t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw Error(t);
              }
              if (
                !(function (e) {
                  if (eI(e, !1))
                    try {
                      return "u" > typeof new URL(e);
                    } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw Error(t);
              }
              let i = ep(e.uri);
              if (!(null != (t = i?.relay) && t.protocol)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw Error(e);
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw Error(e);
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, f.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                let { message: e } = ev(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!eI(e, !1)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = ev(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (Q(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = ev("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.pairings = new iV(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(t7.message, async (e) => {
            let { topic: t, message: i } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(i)
              )
            )
              return;
            let r = await this.core.crypto.decode(t, i);
            try {
              (0, e2.isJsonRpcRequest)(r)
                ? (this.core.history.set(t, r),
                  this.onRelayEventRequest({ topic: t, payload: r }))
                : (0, e2.isJsonRpcResponse)(r) &&
                  (await this.core.history.resolve(r),
                  await this.onRelayEventResponse({ topic: t, payload: r }),
                  this.core.history.delete(t, r.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(ic.expired, async (e) => {
            let { topic: t } = J(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(io.expire, { topic: t }));
          });
        }
      }
      class iK extends eH {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: G(f.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.events.emit(ia.created, r);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, e2.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(ia.updated, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ("u" > typeof t && i.id !== t) ||
                    (this.records.delete(i.id),
                    this.events.emit(ia.deleted, i));
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, ez.Ep)(t, this.name));
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, e2.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = ev("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(ia.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = ev("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(ia.created, (e) => {
            let t = ia.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(ia.updated, (e) => {
              let t = ia.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(ia.deleted, (e) => {
              let t = ia.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(eM.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, f.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class iB extends eG {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = t1),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(ic.created, { target: i, expiration: r });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(ic.deleted, { target: t, expiration: i });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, ez.Ep)(t, this.name));
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return W("topic", e);
          if ("number" == typeof e) return W("id", e);
          let { message: t } = ev("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(ic.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = ev("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = ev("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, f.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(ic.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(eM.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(ic.created, (e) => {
              let t = ic.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ic.expired, (e) => {
              let t = ic.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ic.deleted, (e) => {
              let t = ic.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class iF extends eQ {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = ih),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || M() || !z()) return;
              let t = this.getVerifyUrl(e?.verifyUrl);
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (e) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(e);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = iu);
                try {
                  await this.createIframe();
                } catch (e) {
                  this.logger.info(
                    `Verify iframe failed to load: ${this.verifyUrl}`
                  ),
                    this.logger.info(e),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              let t;
              if (this.isDevEnv) return "";
              let i = this.getVerifyUrl(e?.verifyUrl);
              try {
                t = await this.fetchAttestation(e.attestationId, i);
              } catch (r) {
                this.logger.info(
                  `failed to resolve attestation: ${e.attestationId} from url: ${i}`
                ),
                  this.logger.info(r),
                  (t = await this.fetchAttestation(e.attestationId, iu));
              }
              return t;
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.info(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(2 * f.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i), 200 === r.status ? await r.json() : void 0
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              let t = (i) => {
                "verify_ready" === i.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((i) => {
                  if (document.getElementById(ih)) return i();
                  window.addEventListener("message", t);
                  let r = document.createElement("iframe");
                  (r.id = ih),
                    (r.src = `${this.verifyUrl}/${this.projectId}`),
                    (r.style.display = "none"),
                    document.body.append(r),
                    (this.iframe = r),
                    (e = i);
                }),
                new Promise((e, i) =>
                  setTimeout(() => {
                    window.removeEventListener("message", t),
                      i("verify iframe load timeout");
                  }, (0, f.toMiliseconds)(f.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || il;
              return (
                ip.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${il}`
                  ),
                  (t = il)),
                t
              );
            }),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.verifyUrl = il),
            (this.abortController = new AbortController()),
            (this.isDevEnv = k() && ti.env.IS_VITEST);
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, f.toMiliseconds)(e)
            )
          );
        }
      }
      class iW extends eY {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              let {
                  clientId: t,
                  token: i,
                  notificationType: r,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await tt()(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: r,
                  token: i,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, ez.Ep)(t, this.context));
        }
      }
      var iJ = Object.defineProperty,
        iG = Object.getOwnPropertySymbols,
        iQ = Object.prototype.hasOwnProperty,
        iY = Object.prototype.propertyIsEnumerable,
        iZ = (e, t, i) =>
          t in e
            ? iJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iX = (e, t) => {
          for (var i in t || (t = {})) iQ.call(t, i) && iZ(e, i, t[i]);
          if (iG) for (var i of iG(t)) iY.call(t, i) && iZ(e, i, t[i]);
          return e;
        };
      class i0 extends eV {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = t0),
            (this.events = new r.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || t6),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, ez.gw)((0, ez.jI)({ level: e?.logger || t2.logger }));
          (this.logger = (0, ez.Ep)(t, this.name)),
            (this.heartbeat = new eM.HeartBeat()),
            (this.crypto = new ig(this, this.logger, e?.keychain)),
            (this.history = new iK(this, this.logger)),
            (this.expirer = new iB(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new ek.Z(iX(iX({}, t3), e?.storageOptions))),
            (this.relayer = new ij({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new iH(this, this.logger)),
            (this.verify = new iF(this.projectId || "", this.logger)),
            (this.echoClient = new iW(this.projectId || "", this.logger));
        }
        static async init(e) {
          let t = new i0(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      let i1 = "client",
        i2 = `wc@2:${i1}:`,
        i3 = { name: i1, logger: "error" },
        i5 = "WALLETCONNECT_DEEPLINK_CHOICE",
        i8 = "Proposal expired",
        i4 = f.SEVEN_DAYS,
        i6 = {
          wc_sessionPropose: {
            req: { ttl: f.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: f.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: f.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: f.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: f.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: f.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: f.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: f.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: f.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: f.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: f.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: f.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: f.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: f.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: f.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: f.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        i9 = { min: f.FIVE_MINUTES, max: f.SEVEN_DAYS },
        i7 = { idle: "IDLE", active: "ACTIVE" },
        re = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var rt = Object.defineProperty,
        ri = Object.defineProperties,
        rr = Object.getOwnPropertyDescriptors,
        rs = Object.getOwnPropertySymbols,
        rn = Object.prototype.hasOwnProperty,
        ro = Object.prototype.propertyIsEnumerable,
        ra = (e, t, i) =>
          t in e
            ? rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        rc = (e, t) => {
          for (var i in t || (t = {})) rn.call(t, i) && ra(e, i, t[i]);
          if (rs) for (var i of rs(t)) ro.call(t, i) && ra(e, i, t[i]);
          return e;
        },
        rh = (e, t) => ri(e, rr(t));
      class rl extends eX {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (s())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.requestQueue = { state: i7.idle, queue: [] }),
            (this.sessionRequestQueue = { state: i7.idle, queue: [] }),
            (this.requestQueueDelay = f.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(i6) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, f.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              let t = rh(rc({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: i,
                  requiredNamespaces: r,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  relays: o,
                } = t,
                a = i,
                c,
                h = !1;
              if (
                (a && (h = this.client.core.pairing.pairings.get(a).active),
                !a || !h)
              ) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (a = e), (c = t);
              }
              let l = await this.client.core.crypto.generateKeyPair(),
                u = i6.wc_sessionPropose.req.ttl || f.FIVE_MINUTES,
                p = G(u),
                d = rc(
                  {
                    requiredNamespaces: r,
                    optionalNamespaces: s,
                    relays: o ?? [{ protocol: "irn" }],
                    proposer: { publicKey: l, metadata: this.client.metadata },
                    expiryTimestamp: p,
                  },
                  n && { sessionProperties: n }
                ),
                { reject: g, resolve: y, done: m } = B(u, i8);
              if (
                (this.events.once(
                  Y("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) g(e);
                    else if (t) {
                      t.self.publicKey = l;
                      let e = rh(rc({}, t), {
                        requiredNamespaces: d.requiredNamespaces,
                        optionalNamespaces: d.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        a &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: t.peer.metadata,
                          })),
                        y(e);
                    }
                  }
                ),
                !a)
              ) {
                let { message: e } = ev(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${a}`
                );
                throw Error(e);
              }
              let v = await this.sendRequest({
                topic: a,
                method: "wc_sessionPropose",
                params: d,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(v, rc({ id: v }, d)),
                { uri: c, approval: m }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              let {
                  id: t,
                  relayProtocol: i,
                  namespaces: r,
                  sessionProperties: s,
                } = e,
                {
                  pairingTopic: n,
                  proposer: o,
                  requiredNamespaces: a,
                  optionalNamespaces: c,
                } = this.client.proposal.get(t);
              n = n || "";
              let h = await this.client.core.crypto.generateKeyPair(),
                l = o.publicKey,
                u = await this.client.core.crypto.generateSharedKey(h, l);
              n &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: n,
                  metadata: o.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: n,
                  result: {
                    relay: { protocol: i ?? "irn" },
                    responderPublicKey: h,
                  },
                }),
                await this.client.proposal.delete(t, ew("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: n }));
              let p = rc(
                {
                  relay: { protocol: i ?? "irn" },
                  namespaces: r,
                  pairingTopic: n,
                  controller: { publicKey: h, metadata: this.client.metadata },
                  expiry: G(i4),
                },
                s && { sessionProperties: s }
              );
              await this.client.core.relayer.subscribe(u);
              let d = rh(rc({}, p), {
                topic: u,
                requiredNamespaces: a,
                optionalNamespaces: c,
                pairingTopic: n,
                acknowledged: !1,
                self: p.controller,
                peer: { publicKey: o.publicKey, metadata: o.metadata },
                controller: h,
              });
              await this.client.session.set(u, d);
              try {
                await this.sendRequest({
                  topic: u,
                  method: "wc_sessionSettle",
                  params: p,
                  throwOnFailedPublish: !0,
                });
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(u, ew("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(u),
                  e)
                );
              }
              return (
                await this.setExpiry(u, G(i4)),
                {
                  topic: u,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(u)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              let { id: t, reason: i } = e,
                { pairingTopic: r } = this.client.proposal.get(t);
              r &&
                (await this.sendError(t, r, i),
                await this.client.proposal.delete(t, ew("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              let { topic: t, namespaces: i } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: i },
                }),
                { done: s, resolve: n, reject: o } = B();
              return (
                this.events.once(Y("session_update", r), ({ error: e }) => {
                  e ? o(e) : n();
                }),
                await this.client.session.update(t, { namespaces: i }),
                { acknowledged: s }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              let { topic: t } = e,
                i = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: r, resolve: s, reject: n } = B();
              return (
                this.events.once(Y("session_extend", i), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, G(i4)),
                { acknowledged: r }
              );
            }),
            (this.request = async (e) => {
              await this.isInitialized(), await this.isValidRequest(e);
              let {
                  chainId: t,
                  request: i,
                  topic: r,
                  expiry: s = i6.wc_sessionRequest.req.ttl,
                } = e,
                n = (0, e2.payloadId)(),
                {
                  done: o,
                  resolve: a,
                  reject: c,
                } = B(s, "Request expired. Please try again.");
              return (
                this.events.once(
                  Y("session_request", n),
                  ({ error: e, result: t }) => {
                    e ? c(e) : a(t);
                  }
                ),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: n,
                      topic: r,
                      method: "wc_sessionRequest",
                      params: {
                        request: rh(rc({}, i), { expiryTimestamp: G(s) }),
                        chainId: t,
                      },
                      expiry: s,
                      throwOnFailedPublish: !0,
                    }).catch((e) => c(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: r,
                        request: i,
                        chainId: t,
                        id: n,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    X({
                      id: n,
                      topic: r,
                      wcDeepLink: await ee(this.client.core.storage, i5),
                    }),
                      e();
                  }),
                  o(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: r } = i;
              (0, e2.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                  })
                : (0, e2.isJsonRpcError)(i) &&
                  (await this.sendError(r, t, i.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: i, resolve: r, reject: s } = B();
                this.events.once(Y("session_ping", e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              let { topic: t, event: i, chainId: r } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: i, chainId: r },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: ew("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = ev(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  let { requiredNamespaces: i } = t,
                    r = Object.keys(e.namespaces),
                    s = Object.keys(i),
                    n = !0;
                  return (
                    !!V(s, r) &&
                    (r.forEach((t) => {
                      let {
                          accounts: r,
                          methods: s,
                          events: o,
                        } = e.namespaces[t],
                        a = ed(r),
                        c = i[t];
                      (V(b(t, c), a) && V(c.methods, s) && V(c.events, o)) ||
                        (n = !1);
                    }),
                    n)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings
                      .getAll()
                      .filter((i) => {
                        var r, s;
                        return (
                          (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                          (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          i.topic &&
                          i.topic !== t.topic
                        );
                      });
                  if (0 === i.length) return;
                  this.client.logger.info(
                    `Cleaning up ${i.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      i.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e) => {
              let {
                  topic: t,
                  expirerHasDeleted: i = !1,
                  emitEvent: r = !0,
                  id: s = 0,
                } = e,
                { self: n } = this.client.session.get(t);
              await this.client.core.relayer.unsubscribe(t),
                await this.client.session.delete(t, ew("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(n.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(n.publicKey)),
                this.client.core.crypto.keychain.has(t) &&
                  (await this.client.core.crypto.deleteSymKey(t)),
                i || this.client.core.expirer.del(t),
                this.client.core.storage
                  .removeItem(i5)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === t &&
                    this.deletePendingSessionRequest(
                      e.id,
                      ew("USER_DISCONNECTED")
                    );
                }),
                r &&
                  this.client.events.emit("session_delete", {
                    id: s,
                    topic: t,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, ew("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((this.sessionRequestQueue.state = i7.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(
                  e,
                  G(i6.wc_sessionPropose.req.ttl)
                );
            }),
            (this.setPendingSessionRequest = async (e) => {
              let { id: t, topic: i, params: r, verifyContext: s } = e,
                n =
                  r.request.expiryTimestamp || G(i6.wc_sessionRequest.req.ttl);
              await this.client.pendingRequest.set(t, {
                id: t,
                topic: i,
                params: r,
                verifyContext: s,
              }),
                n && this.client.core.expirer.set(t, n);
            }),
            (this.sendRequest = async (e) => {
              let {
                  topic: t,
                  method: i,
                  params: r,
                  expiry: s,
                  relayRpcId: n,
                  clientRpcId: o,
                  throwOnFailedPublish: a,
                } = e,
                c = (0, e2.formatJsonRpcRequest)(i, r, o);
              if (z() && re.includes(i)) {
                let e = R(JSON.stringify(c));
                this.client.core.verify.register({ attestationId: e });
              }
              let h = await this.client.core.crypto.encode(t, c),
                l = i6[i].req;
              return (
                s && (l.ttl = s),
                n && (l.id = n),
                this.client.core.history.set(t, c),
                a
                  ? ((l.internal = rh(rc({}, l.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, h, l))
                  : this.client.core.relayer
                      .publish(t, h, l)
                      .catch((e) => this.client.logger.error(e)),
                c.id
              );
            }),
            (this.sendResult = async (e) => {
              let { id: t, topic: i, result: r, throwOnFailedPublish: s } = e,
                n = (0, e2.formatJsonRpcResult)(t, r),
                o = await this.client.core.crypto.encode(i, n),
                a =
                  i6[(await this.client.core.history.get(i, t)).request.method]
                    .res;
              s
                ? ((a.internal = rh(rc({}, a.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(i, o, a))
                : this.client.core.relayer
                    .publish(i, o, a)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, i) => {
              let r = (0, e2.formatJsonRpcError)(e, i),
                s = await this.client.core.crypto.encode(t, r),
                n =
                  i6[(await this.client.core.history.get(t, e)).request.method]
                    .res;
              this.client.core.relayer.publish(t, s, n),
                await this.client.core.history.resolve(r);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                Q(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  Q(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === i7.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = i7.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    this.processRequest(e),
                      await new Promise((e) => setTimeout(e, 300));
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = i7.idle;
            }),
            (this.processRequest = (e) => {
              let { topic: t, payload: i } = e,
                r = i.method;
              switch (r) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, i);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, i);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, i);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${r}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.client.core.history.get(t, i.id)).request
                  .method;
              switch (r) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, i);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${r}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: i } = ev(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              let { params: i, id: r } = t;
              try {
                this.isValidConnect(rc({}, t.params));
                let s = i.expiryTimestamp || G(i6.wc_sessionPropose.req.ttl),
                  n = rc({ id: r, pairingTopic: e, expiryTimestamp: s }, i);
                await this.setProposal(r, n);
                let o = R(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, n.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: r,
                  params: n,
                  verifyContext: a,
                });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              let { id: i } = t;
              if ((0, e2.isJsonRpcResult)(t)) {
                let { result: r } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: r,
                });
                let s = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: s,
                });
                let n = s.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: n,
                });
                let o = r.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let a = await this.client.core.crypto.generateSharedKey(n, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                let c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                (0, e2.isJsonRpcError)(t) &&
                  (await this.client.proposal.delete(
                    i,
                    ew("USER_DISCONNECTED")
                  ),
                  this.events.emit(Y("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                let {
                    relay: i,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    pairingTopic: c,
                  } = t.params,
                  h = rc(
                    {
                      topic: e,
                      relay: i,
                      expiry: n,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: c,
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      controller: s.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: s.publicKey, metadata: s.metadata },
                    },
                    a && { sessionProperties: a }
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit(Y("session_connect"), { session: h }),
                  this.cleanupDuplicatePairings(h);
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: i } = t;
              (0, e2.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(Y("session_approve", i), {}))
                : (0, e2.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, ew("USER_DISCONNECTED")),
                  this.events.emit(Y("session_approve", i), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: i, id: r } = t;
              try {
                let t = `${e}_session_update`,
                  s = eU.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                  return;
                }
                this.isValidUpdate(rc({ topic: e }, i)),
                  await this.client.session.update(e, {
                    namespaces: i.namespaces,
                  }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  eU.set(t, r);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: i } = t;
              (0, e2.isJsonRpcResult)(t)
                ? this.events.emit(Y("session_update", i), {})
                : (0, e2.isJsonRpcError)(t) &&
                  this.events.emit(Y("session_update", i), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, G(i4)),
                  await this.sendResult({ id: i, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: i,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: i } = t;
              (0, e2.isJsonRpcResult)(t)
                ? this.events.emit(Y("session_extend", i), {})
                : (0, e2.isJsonRpcError)(t) &&
                  this.events.emit(Y("session_extend", i), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: i, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, e2.isJsonRpcResult)(t)
                  ? this.events.emit(Y("session_ping", i), {})
                  : (0, e2.isJsonRpcError)(t) &&
                    this.events.emit(Y("session_ping", i), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(t7.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({ id: i, topic: e, result: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: ew("USER_DISCONNECTED"),
                    }),
                  ]);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidRequest(rc({ topic: e }, r));
                let t = R(
                    JSON.stringify(
                      (0, e2.formatJsonRpcRequest)("wc_sessionRequest", r, i)
                    )
                  ),
                  s = this.client.session.get(e),
                  n = await this.getVerifyContext(t, s.peer.metadata),
                  o = { id: i, topic: e, params: r, verifyContext: n };
                await this.setPendingSessionRequest(o),
                  this.addSessionRequestToSessionRequestQueue(o),
                  this.processSessionRequestQueue();
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: i } = t;
              (0, e2.isJsonRpcResult)(t)
                ? this.events.emit(Y("session_request", i), {
                    result: t.result,
                  })
                : (0, e2.isJsonRpcError)(t) &&
                  this.events.emit(Y("session_request", i), { error: t.error });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                let t = `${e}_session_event_${r.event.name}`,
                  s = eU.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                  return;
                }
                this.isValidEmit(rc({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  eU.set(t, i);
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = i7.idle),
                    this.processSessionRequestQueue();
                }, (0, f.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = ({
              topic: e,
              error: t,
            }) => {
              let i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((e) => {
                    this.events.emit(Y("session_request", e.request.id), {
                      error: t,
                    });
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === i7.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = i7.active),
                  this.client.events.emit("session_request", e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onPairingCreated = (e) => {
              if (e.active) return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest(
                  e.topic,
                  (0, e2.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  )
                );
            }),
            (this.isValidConnect = async (e) => {
              let t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: i,
                requiredNamespaces: r,
                optionalNamespaces: s,
                sessionProperties: n,
                relays: o,
              } = e;
              if (
                (eE(i) || (await this.isValidPairingTopic(i)),
                (t = !1),
                o
                  ? o &&
                    eb(o) &&
                    o.length &&
                    o.forEach((e) => {
                      t = eN(e);
                    })
                  : (t = !0),
                !t)
              ) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw Error(e);
              }
              eE(r) ||
                0 === e_(r) ||
                this.validateNamespaces(r, "requiredNamespaces"),
                eE(s) ||
                  0 === e_(s) ||
                  this.validateNamespaces(s, "optionalNamespaces"),
                eE(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              let i = (function (e, t, i) {
                let r = null;
                if (e && e_(e)) {
                  let s;
                  let n = eO(e, t);
                  n && (r = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, r]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = b(e, r)),
                        (o = `${t} ${i}`),
                        (a = null),
                        eb(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                eS(e) ||
                                (a = ew(
                                  "UNSUPPORTED_CHAINS",
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : eS(e) ||
                            (a = ew(
                              "UNSUPPORTED_CHAINS",
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (r = o);
                } else
                  r = ev(
                    "MISSING_OR_INVALID",
                    `${t}, ${i} should be an object with data`
                  );
                return r;
              })(e, "connect()", t);
              if (i) throw Error(i.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!eC(e))
                throw Error(
                  ev("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: i,
                relayProtocol: r,
                sessionProperties: s,
              } = e;
              await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                o = ex(i, "approve()");
              if (o) throw Error(o.message);
              let a = eT(n.requiredNamespaces, i, "approve()");
              if (a) throw Error(a.message);
              if (!eI(r, !0)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${r}`
                );
                throw Error(e);
              }
              eE(s) || this.validateSessionProps(s, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (await this.isValidProposalId(t),
                !i ||
                  "object" != typeof i ||
                  !i.code ||
                  !eP(i.code, !1) ||
                  !i.message ||
                  !eI(i.message, !1))
              ) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              let t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: i, controller: r, namespaces: s, expiry: n } = e;
              if (!eN(i)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let o =
                ((t = null),
                eI(r?.publicKey, !1) ||
                  (t = ev(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() controller public key should be a string"
                  )),
                t);
              if (o) throw Error(o.message);
              let a = ex(s, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if (Q(n)) {
                let { message: e } = ev("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              await this.isValidSessionTopic(t);
              let r = this.client.session.get(t),
                s = ex(i, "update()");
              if (s) throw Error(s.message);
              let n = eT(r.requiredNamespaces, i, "update()");
              if (n) throw Error(n.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              var t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, request: r, chainId: s, expiry: n } = e;
              await this.isValidSessionTopic(i);
              let { namespaces: o } = this.client.session.get(i);
              if (!eA(o, s)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${s}`
                );
                throw Error(e);
              }
              if (eE(r) || !eI(r.method, !1)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (
                !(
                  eI((t = r.method), !1) &&
                  (function (e, t) {
                    let i = [];
                    return (
                      Object.values(e).forEach((e) => {
                        ed(e.accounts).includes(t) && i.push(...e.methods);
                      }),
                      i
                    );
                  })(o, s).includes(t)
                )
              ) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw Error(e);
              }
              if (n && (!eP(n, !1) || !(n <= i9.max) || !(n >= i9.min))) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${i9.min} and ${i9.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, response: r } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  i)
                );
              }
              if (
                eE(r) ||
                (eE(r.result) && eE(r.error)) ||
                !eP(r.id, !1) ||
                !eI(r.jsonrpc, !1)
              ) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              var t;
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, event: r, chainId: s } = e;
              await this.isValidSessionTopic(i);
              let { namespaces: n } = this.client.session.get(i);
              if (!eA(n, s)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${s}`
                );
                throw Error(e);
              }
              if (eE(r) || !eI(r.name, !1)) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (
                !(
                  eI((t = r.name), !1) &&
                  (function (e, t) {
                    let i = [];
                    return (
                      Object.values(e).forEach((e) => {
                        ed(e.accounts).includes(t) && i.push(...e.events);
                      }),
                      i
                    );
                  })(n, s).includes(t)
                )
              ) {
                let { message: e } = ev(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!eC(e)) {
                let { message: t } = ev(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              let i = {
                verified: {
                  verifyUrl: t.verifyUrl || il,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                let r = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                r &&
                  ((i.verified.origin = r.origin),
                  (i.verified.isScam = r.isScam),
                  (i.verified.validation =
                    r.origin === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.info(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(i)}`),
                i
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!eI(e, !1)) {
                  let { message: i } = ev(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(i);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            let { message: e } = ev("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(t7.message, async (e) => {
            let { topic: t, message: i } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(i)
              )
            )
              return;
            let r = await this.client.core.crypto.decode(t, i);
            try {
              (0, e2.isJsonRpcRequest)(r)
                ? (this.client.core.history.set(t, r),
                  this.onRelayEventRequest({ topic: t, payload: r }))
                : (0, e2.isJsonRpcResponse)(r)
                ? (await this.client.core.history.resolve(r),
                  await this.onRelayEventResponse({ topic: t, payload: r }),
                  this.client.core.history.delete(t, r.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: r });
            } catch (e) {
              this.client.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(ic.expired, async (e) => {
            let { topic: t, id: i } = J(e.target);
            if (i && this.client.pendingRequest.keys.includes(i))
              return await this.deletePendingSessionRequest(
                i,
                ev("EXPIRED"),
                !0
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                this.client.events.emit("session_expire", { topic: t }))
              : i &&
                (await this.deleteProposal(i, !0),
                this.client.events.emit("proposal_expire", { id: i }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(io.create, (e) =>
            this.onPairingCreated(e)
          );
        }
        isValidPairingTopic(e) {
          if (!eI(e, !1)) {
            let { message: t } = ev(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = ev(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (Q(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = ev("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!eI(e, !1)) {
            let { message: t } = ev(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            let { message: t } = ev(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (Q(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = ev("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = ev(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if (eI(e, !1)) {
            let { message: t } = ev(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = ev(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = ev(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = ev(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (Q(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = ev("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class ru extends iV {
        constructor(e, t) {
          super(e, t, "proposal", i2), (this.core = e), (this.logger = t);
        }
      }
      class rp extends iV {
        constructor(e, t) {
          super(e, t, "session", i2), (this.core = e), (this.logger = t);
        }
      }
      class rd extends iV {
        constructor(e, t) {
          super(e, t, "request", i2, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class rf extends eZ {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = i3.name),
            (this.events = new r.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || i3.name),
            (this.metadata = e?.metadata ||
              (0, y.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, ez.gw)((0, ez.jI)({ level: e?.logger || i3.logger }));
          (this.core = e?.core || new i0(e)),
            (this.logger = (0, ez.Ep)(t, this.name)),
            (this.session = new rp(this.core, this.logger)),
            (this.proposal = new ru(this.core, this.logger)),
            (this.pendingRequest = new rd(this.core, this.logger)),
            (this.engine = new rl(this));
        }
        static async init(e) {
          let t = new rf(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, ez.Fd)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var rg = i(2280);
      let ry = "error",
        rm = "wc@2:universal_provider:",
        rv = "default_chain_changed";
      var rw =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        rb = { exports: {} };
      !(function (e, t) {
        (function () {
          var i,
            r = "Expected a function",
            s = "__lodash_hash_undefined__",
            n = "__lodash_placeholder__",
            o = 1 / 0,
            a = 0 / 0,
            c = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            h = "[object Arguments]",
            l = "[object Array]",
            u = "[object Boolean]",
            p = "[object Date]",
            d = "[object Error]",
            f = "[object Function]",
            g = "[object GeneratorFunction]",
            y = "[object Map]",
            m = "[object Number]",
            v = "[object Object]",
            w = "[object Promise]",
            b = "[object RegExp]",
            _ = "[object Set]",
            E = "[object String]",
            I = "[object Symbol]",
            P = "[object WeakMap]",
            S = "[object ArrayBuffer]",
            R = "[object DataView]",
            O = "[object Float32Array]",
            x = "[object Float64Array]",
            N = "[object Int8Array]",
            C = "[object Int16Array]",
            A = "[object Int32Array]",
            T = "[object Uint8Array]",
            q = "[object Uint8ClampedArray]",
            D = "[object Uint16Array]",
            j = "[object Uint32Array]",
            $ = /\b__p \+= '';/g,
            U = /\b(__p \+=) '' \+/g,
            k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            M = /&(?:amp|lt|gt|quot|#39);/g,
            z = /[&<>"']/g,
            L = RegExp(M.source),
            V = RegExp(z.source),
            H = /<%-([\s\S]+?)%>/g,
            K = /<%([\s\S]+?)%>/g,
            B = /<%=([\s\S]+?)%>/g,
            F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            W = /^\w*$/,
            J =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            G = /[\\^$.*+?()[\]{}|]/g,
            Q = RegExp(G.source),
            Y = /^\s+/,
            Z = /\s/,
            X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            ei = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            er = /[()=,{}\[\]\/\s]/,
            es = /\\(\\)?/g,
            en = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            eo = /\w*$/,
            ea = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eh = /^\[object .+?Constructor\]$/,
            el = /^0o[0-7]+$/i,
            eu = /^(?:0|[1-9]\d*)$/,
            ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ed = /($^)/,
            ef = /['\n\r\u2028\u2029\\]/g,
            eg = "\ud800-\udfff",
            ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            em = "\\u2700-\\u27bf",
            ev = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ew = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            eb = "\\ufe0e\\ufe0f",
            e_ =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            eE = "['’]",
            eI = "[" + e_ + "]",
            eP = "[" + ey + "]",
            eS = "[" + ev + "]",
            eR = "[^" + eg + e_ + "\\d+" + em + ev + ew + "]",
            eO = "\ud83c[\udffb-\udfff]",
            ex = "[^" + eg + "]",
            eN = "(?:\ud83c[\udde6-\uddff]){2}",
            eC = "[\ud800-\udbff][\udc00-\udfff]",
            eA = "[" + ew + "]",
            eT = "\\u200d",
            eq = "(?:" + eS + "|" + eR + ")",
            eD = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
            ej = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
            e$ = "(?:" + eP + "|" + eO + ")?",
            eU = "[" + eb + "]?",
            ek =
              "(?:" +
              eT +
              "(?:" +
              [ex, eN, eC].join("|") +
              ")" +
              eU +
              e$ +
              ")*",
            eM = eU + e$ + ek,
            ez = "(?:" + ["[" + em + "]", eN, eC].join("|") + ")" + eM,
            eL =
              "(?:" +
              [ex + eP + "?", eP, eN, eC, "[" + eg + "]"].join("|") +
              ")",
            eV = RegExp(eE, "g"),
            eH = RegExp(eP, "g"),
            eK = RegExp(eO + "(?=" + eO + ")|" + eL + eM, "g"),
            eB = RegExp(
              [
                eA +
                  "?" +
                  eS +
                  "+" +
                  eD +
                  "(?=" +
                  [eI, eA, "$"].join("|") +
                  ")",
                "(?:" +
                  eA +
                  "|" +
                  eR +
                  ")+" +
                  ej +
                  "(?=" +
                  [eI, eA + eq, "$"].join("|") +
                  ")",
                eA + "?" + eq + "+" + eD,
                eA + "+" + ej,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                ez,
              ].join("|"),
              "g"
            ),
            eF = RegExp("[" + eT + eg + ey + eb + "]"),
            eW =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eJ = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            eG = -1,
            eQ = {};
          (eQ[O] =
            eQ[x] =
            eQ[N] =
            eQ[C] =
            eQ[A] =
            eQ[T] =
            eQ[q] =
            eQ[D] =
            eQ[j] =
              !0),
            (eQ[h] =
              eQ[l] =
              eQ[S] =
              eQ[u] =
              eQ[R] =
              eQ[p] =
              eQ[d] =
              eQ[f] =
              eQ[y] =
              eQ[m] =
              eQ[v] =
              eQ[b] =
              eQ[_] =
              eQ[E] =
              eQ[P] =
                !1);
          var eY = {};
          (eY[h] =
            eY[l] =
            eY[S] =
            eY[R] =
            eY[u] =
            eY[p] =
            eY[O] =
            eY[x] =
            eY[N] =
            eY[C] =
            eY[A] =
            eY[y] =
            eY[m] =
            eY[v] =
            eY[b] =
            eY[_] =
            eY[E] =
            eY[I] =
            eY[T] =
            eY[q] =
            eY[D] =
            eY[j] =
              !0),
            (eY[d] = eY[f] = eY[P] = !1);
          var eZ = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            eX = parseFloat,
            e0 = parseInt,
            e1 = "object" == typeof rw && rw && rw.Object === Object && rw,
            e2 =
              "object" == typeof self && self && self.Object === Object && self,
            e3 = e1 || e2 || Function("return this")(),
            e5 = t && !t.nodeType && t,
            e8 = e5 && e && !e.nodeType && e,
            e4 = e8 && e8.exports === e5,
            e6 = e4 && e1.process,
            e9 = (function () {
              try {
                return (
                  (e8 && e8.require && e8.require("util").types) ||
                  (e6 && e6.binding && e6.binding("util"))
                );
              } catch {}
            })(),
            e7 = e9 && e9.isArrayBuffer,
            te = e9 && e9.isDate,
            tt = e9 && e9.isMap,
            ti = e9 && e9.isRegExp,
            tr = e9 && e9.isSet,
            ts = e9 && e9.isTypedArray;
          function tn(e, t, i) {
            switch (i.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, i[0]);
              case 2:
                return e.call(t, i[0], i[1]);
              case 3:
                return e.call(t, i[0], i[1], i[2]);
            }
            return e.apply(t, i);
          }
          function to(e, t, i, r) {
            for (var s = -1, n = null == e ? 0 : e.length; ++s < n; ) {
              var o = e[s];
              t(r, o, i(o), e);
            }
            return r;
          }
          function ta(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length;
              ++i < r && !1 !== t(e[i], i, e);

            );
            return e;
          }
          function tc(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (!t(e[i], i, e)) return !1;
            return !0;
          }
          function th(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = 0, n = [];
              ++i < r;

            ) {
              var o = e[i];
              t(o, i, e) && (n[s++] = o);
            }
            return n;
          }
          function tl(e, t) {
            return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1;
          }
          function tu(e, t, i) {
            for (var r = -1, s = null == e ? 0 : e.length; ++r < s; )
              if (i(t, e[r])) return !0;
            return !1;
          }
          function tp(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = Array(r);
              ++i < r;

            )
              s[i] = t(e[i], i, e);
            return s;
          }
          function td(e, t) {
            for (var i = -1, r = t.length, s = e.length; ++i < r; )
              e[s + i] = t[i];
            return e;
          }
          function tf(e, t, i, r) {
            var s = -1,
              n = null == e ? 0 : e.length;
            for (r && n && (i = e[++s]); ++s < n; ) i = t(i, e[s], s, e);
            return i;
          }
          function tg(e, t, i, r) {
            var s = null == e ? 0 : e.length;
            for (r && s && (i = e[--s]); s--; ) i = t(i, e[s], s, e);
            return i;
          }
          function ty(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (t(e[i], i, e)) return !0;
            return !1;
          }
          var tm = tP("length");
          function tv(e, t, i) {
            var r;
            return (
              i(e, function (e, i, s) {
                if (t(e, i, s)) return (r = i), !1;
              }),
              r
            );
          }
          function tw(e, t, i, r) {
            for (var s = e.length, n = i + (r ? 1 : -1); r ? n-- : ++n < s; )
              if (t(e[n], n, e)) return n;
            return -1;
          }
          function tb(e, t, i) {
            return t == t
              ? (function (e, t, i) {
                  for (var r = i - 1, s = e.length; ++r < s; )
                    if (e[r] === t) return r;
                  return -1;
                })(e, t, i)
              : tw(e, tE, i);
          }
          function t_(e, t, i, r) {
            for (var s = i - 1, n = e.length; ++s < n; )
              if (r(e[s], t)) return s;
            return -1;
          }
          function tE(e) {
            return e != e;
          }
          function tI(e, t) {
            var i = null == e ? 0 : e.length;
            return i ? tO(e, t) / i : a;
          }
          function tP(e) {
            return function (t) {
              return null == t ? i : t[e];
            };
          }
          function tS(e) {
            return function (t) {
              return null == e ? i : e[t];
            };
          }
          function tR(e, t, i, r, s) {
            return (
              s(e, function (e, s, n) {
                i = r ? ((r = !1), e) : t(i, e, s, n);
              }),
              i
            );
          }
          function tO(e, t) {
            for (var r, s = -1, n = e.length; ++s < n; ) {
              var o = t(e[s]);
              o !== i && (r = r === i ? o : r + o);
            }
            return r;
          }
          function tx(e, t) {
            for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
            return r;
          }
          function tN(e) {
            return e && e.slice(0, tB(e) + 1).replace(Y, "");
          }
          function tC(e) {
            return function (t) {
              return e(t);
            };
          }
          function tA(e, t) {
            return tp(t, function (t) {
              return e[t];
            });
          }
          function tT(e, t) {
            return e.has(t);
          }
          function tq(e, t) {
            for (var i = -1, r = e.length; ++i < r && tb(t, e[i], 0) > -1; );
            return i;
          }
          function tD(e, t) {
            for (var i = e.length; i-- && tb(t, e[i], 0) > -1; );
            return i;
          }
          var tj = tS({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            t$ = tS({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function tU(e) {
            return "\\" + eZ[e];
          }
          function tk(e) {
            return eF.test(e);
          }
          function tM(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e, r) {
                i[++t] = [r, e];
              }),
              i
            );
          }
          function tz(e, t) {
            return function (i) {
              return e(t(i));
            };
          }
          function tL(e, t) {
            for (var i = -1, r = e.length, s = 0, o = []; ++i < r; ) {
              var a = e[i];
              (a === t || a === n) && ((e[i] = n), (o[s++] = i));
            }
            return o;
          }
          function tV(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e) {
                i[++t] = e;
              }),
              i
            );
          }
          function tH(e) {
            return tk(e)
              ? (function (e) {
                  for (var t = (eK.lastIndex = 0); eK.test(e); ) ++t;
                  return t;
                })(e)
              : tm(e);
          }
          function tK(e) {
            return tk(e) ? e.match(eK) || [] : e.split("");
          }
          function tB(e) {
            for (var t = e.length; t-- && Z.test(e.charAt(t)); );
            return t;
          }
          var tF = tS({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            tW = (function e(t) {
              var Z,
                eg,
                ey,
                em,
                ev = (t =
                  null == t ? e3 : tW.defaults(e3.Object(), t, tW.pick(e3, eJ)))
                  .Array,
                ew = t.Date,
                eb = t.Error,
                e_ = t.Function,
                eE = t.Math,
                eI = t.Object,
                eP = t.RegExp,
                eS = t.String,
                eR = t.TypeError,
                eO = ev.prototype,
                ex = e_.prototype,
                eN = eI.prototype,
                eC = t["__core-js_shared__"],
                eA = ex.toString,
                eT = eN.hasOwnProperty,
                eq = 0,
                eD = (Z = /[^.]+$/.exec(
                  (eC && eC.keys && eC.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + Z
                  : "",
                ej = eN.toString,
                e$ = eA.call(eI),
                eU = e3._,
                ek = eP(
                  "^" +
                    eA
                      .call(eT)
                      .replace(G, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                eM = e4 ? t.Buffer : i,
                ez = t.Symbol,
                eL = t.Uint8Array,
                eK = eM ? eM.allocUnsafe : i,
                eF = tz(eI.getPrototypeOf, eI),
                eZ = eI.create,
                e1 = eN.propertyIsEnumerable,
                e2 = eO.splice,
                e5 = ez ? ez.isConcatSpreadable : i,
                e8 = ez ? ez.iterator : i,
                e6 = ez ? ez.toStringTag : i,
                e9 = (function () {
                  try {
                    var e = sf(eI, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tm = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                tS = ew && ew.now !== e3.Date.now && ew.now,
                tJ = t.setTimeout !== e3.setTimeout && t.setTimeout,
                tG = eE.ceil,
                tQ = eE.floor,
                tY = eI.getOwnPropertySymbols,
                tZ = eM ? eM.isBuffer : i,
                tX = t.isFinite,
                t0 = eO.join,
                t1 = tz(eI.keys, eI),
                t2 = eE.max,
                t3 = eE.min,
                t5 = ew.now,
                t8 = t.parseInt,
                t4 = eE.random,
                t6 = eO.reverse,
                t9 = sf(t, "DataView"),
                t7 = sf(t, "Map"),
                ie = sf(t, "Promise"),
                it = sf(t, "Set"),
                ii = sf(t, "WeakMap"),
                ir = sf(eI, "create"),
                is = ii && new ii(),
                io = {},
                ia = sM(t9),
                ic = sM(t7),
                ih = sM(ie),
                il = sM(it),
                iu = sM(ii),
                ip = ez ? ez.prototype : i,
                id = ip ? ip.valueOf : i,
                ig = ip ? ip.toString : i;
              function iy(e) {
                if (nF(e) && !nj(e) && !(e instanceof ib)) {
                  if (e instanceof iw) return e;
                  if (eT.call(e, "__wrapped__")) return sz(e);
                }
                return new iw(e);
              }
              var im = (function () {
                function e() {}
                return function (t) {
                  if (!nB(t)) return {};
                  if (eZ) return eZ(t);
                  e.prototype = t;
                  var r = new e();
                  return (e.prototype = i), r;
                };
              })();
              function iv() {}
              function iw(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i);
              }
              function ib(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function i_(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iE(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iI(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iP(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.__data__ = new iI(); ++t < i; ) this.add(e[t]);
              }
              function iS(e) {
                var t = (this.__data__ = new iE(e));
                this.size = t.size;
              }
              function iR(e, t) {
                var i = nj(e),
                  r = !i && nD(e),
                  s = !i && !r && nM(e),
                  n = !i && !r && !s && n0(e),
                  o = i || r || s || n,
                  a = o ? tx(e.length, eS) : [],
                  c = a.length;
                for (var h in e)
                  (t || eT.call(e, h)) &&
                    !(
                      o &&
                      ("length" == h ||
                        (s && ("offset" == h || "parent" == h)) ||
                        (n &&
                          ("buffer" == h ||
                            "byteLength" == h ||
                            "byteOffset" == h)) ||
                        s_(h, c))
                    ) &&
                    a.push(h);
                return a;
              }
              function iO(e) {
                var t = e.length;
                return t ? e[ru(0, t - 1)] : i;
              }
              function ix(e, t, r) {
                ((r === i || nA(e[t], r)) && (r !== i || t in e)) ||
                  iq(e, t, r);
              }
              function iN(e, t, r) {
                var s = e[t];
                (eT.call(e, t) && nA(s, r) && (r !== i || t in e)) ||
                  iq(e, t, r);
              }
              function iC(e, t) {
                for (var i = e.length; i--; ) if (nA(e[i][0], t)) return i;
                return -1;
              }
              function iA(e, t, i, r) {
                return (
                  iz(e, function (e, s, n) {
                    t(r, e, i(e), n);
                  }),
                  r
                );
              }
              function iT(e, t) {
                return e && rH(t, op(t), e);
              }
              function iq(e, t, i) {
                "__proto__" == t && e9
                  ? e9(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: i,
                      writable: !0,
                    })
                  : (e[t] = i);
              }
              function iD(e, t) {
                for (
                  var r = -1, s = t.length, n = ev(s), o = null == e;
                  ++r < s;

                )
                  n[r] = o ? i : oa(e, t[r]);
                return n;
              }
              function ij(e, t, r) {
                return (
                  e == e &&
                    (r !== i && (e = e <= r ? e : r),
                    t !== i && (e = e >= t ? e : t)),
                  e
                );
              }
              function i$(e, t, r, s, n, o) {
                var a,
                  c = 1 & t,
                  l = 2 & t,
                  d = 4 & t;
                if ((r && (a = n ? r(e, s, n, o) : r(e)), a !== i)) return a;
                if (!nB(e)) return e;
                var w = nj(e);
                if (w) {
                  if (
                    ((P = e.length),
                    ($ = new e.constructor(P)),
                    P &&
                      "string" == typeof e[0] &&
                      eT.call(e, "index") &&
                      (($.index = e.index), ($.input = e.input)),
                    (a = $),
                    !c)
                  )
                    return rV(e, a);
                } else {
                  var P,
                    $,
                    U,
                    k,
                    M,
                    z = sm(e),
                    L = z == f || z == g;
                  if (nM(e)) return r$(e, c);
                  if (z == v || z == h || (L && !n)) {
                    if (((a = l || L ? {} : sw(e)), !c))
                      return l
                        ? ((U = (M = a) && rH(e, od(e), M)), rH(e, sy(e), U))
                        : ((k = iT(a, e)), rH(e, sg(e), k));
                  } else {
                    if (!eY[z]) return n ? e : {};
                    a = (function (e, t, i) {
                      var r,
                        s,
                        n = e.constructor;
                      switch (t) {
                        case S:
                          return rU(e);
                        case u:
                        case p:
                          return new n(+e);
                        case R:
                          return (
                            (r = i ? rU(e.buffer) : e.buffer),
                            new e.constructor(r, e.byteOffset, e.byteLength)
                          );
                        case O:
                        case x:
                        case N:
                        case C:
                        case A:
                        case T:
                        case q:
                        case D:
                        case j:
                          return rk(e, i);
                        case y:
                          return new n();
                        case m:
                        case E:
                          return new n(e);
                        case b:
                          return (
                            ((s = new e.constructor(
                              e.source,
                              eo.exec(e)
                            )).lastIndex = e.lastIndex),
                            s
                          );
                        case _:
                          return new n();
                        case I:
                          return id ? eI(id.call(e)) : {};
                      }
                    })(e, z, c);
                  }
                }
                o || (o = new iS());
                var V = o.get(e);
                if (V) return V;
                o.set(e, a),
                  nY(e)
                    ? e.forEach(function (i) {
                        a.add(i$(i, t, r, i, e, o));
                      })
                    : nW(e) &&
                      e.forEach(function (i, s) {
                        a.set(s, i$(i, t, r, s, e, o));
                      });
                var H = d ? (l ? sa : so) : l ? od : op,
                  K = w ? i : H(e);
                return (
                  ta(K || e, function (i, s) {
                    K && (i = e[(s = i)]), iN(a, s, i$(i, t, r, s, e, o));
                  }),
                  a
                );
              }
              function iU(e, t, r) {
                var s = r.length;
                if (null == e) return !s;
                for (e = eI(e); s--; ) {
                  var n = r[s],
                    o = t[n],
                    a = e[n];
                  if ((a === i && !(n in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function ik(e, t, s) {
                if ("function" != typeof e) throw new eR(r);
                return sT(function () {
                  e.apply(i, s);
                }, t);
              }
              function iM(e, t, i, r) {
                var s = -1,
                  n = tl,
                  o = !0,
                  a = e.length,
                  c = [],
                  h = t.length;
                if (!a) return c;
                i && (t = tp(t, tC(i))),
                  r
                    ? ((n = tu), (o = !1))
                    : t.length >= 200 && ((n = tT), (o = !1), (t = new iP(t)));
                e: for (; ++s < a; ) {
                  var l = e[s],
                    u = null == i ? l : i(l);
                  if (((l = r || 0 !== l ? l : 0), o && u == u)) {
                    for (var p = h; p--; ) if (t[p] === u) continue e;
                    c.push(l);
                  } else n(t, u, r) || c.push(l);
                }
                return c;
              }
              (iy.templateSettings = {
                escape: H,
                evaluate: K,
                interpolate: B,
                variable: "",
                imports: { _: iy },
              }),
                (iy.prototype = iv.prototype),
                (iy.prototype.constructor = iy),
                (iw.prototype = im(iv.prototype)),
                (iw.prototype.constructor = iw),
                (ib.prototype = im(iv.prototype)),
                (ib.prototype.constructor = ib),
                (i_.prototype.clear = function () {
                  (this.__data__ = ir ? ir(null) : {}), (this.size = 0);
                }),
                (i_.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (i_.prototype.get = function (e) {
                  var t = this.__data__;
                  if (ir) {
                    var r = t[e];
                    return r === s ? i : r;
                  }
                  return eT.call(t, e) ? t[e] : i;
                }),
                (i_.prototype.has = function (e) {
                  var t = this.__data__;
                  return ir ? t[e] !== i : eT.call(t, e);
                }),
                (i_.prototype.set = function (e, t) {
                  var r = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (r[e] = ir && t === i ? s : t),
                    this
                  );
                }),
                (iE.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (iE.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = iC(t, e);
                  return (
                    !(i < 0) &&
                    (i == t.length - 1 ? t.pop() : e2.call(t, i, 1),
                    --this.size,
                    !0)
                  );
                }),
                (iE.prototype.get = function (e) {
                  var t = this.__data__,
                    r = iC(t, e);
                  return r < 0 ? i : t[r][1];
                }),
                (iE.prototype.has = function (e) {
                  return iC(this.__data__, e) > -1;
                }),
                (iE.prototype.set = function (e, t) {
                  var i = this.__data__,
                    r = iC(i, e);
                  return (
                    r < 0 ? (++this.size, i.push([e, t])) : (i[r][1] = t), this
                  );
                }),
                (iI.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new i_(),
                      map: new (t7 || iE)(),
                      string: new i_(),
                    });
                }),
                (iI.prototype.delete = function (e) {
                  var t = sp(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (iI.prototype.get = function (e) {
                  return sp(this, e).get(e);
                }),
                (iI.prototype.has = function (e) {
                  return sp(this, e).has(e);
                }),
                (iI.prototype.set = function (e, t) {
                  var i = sp(this, e),
                    r = i.size;
                  return i.set(e, t), (this.size += i.size == r ? 0 : 1), this;
                }),
                (iP.prototype.add = iP.prototype.push =
                  function (e) {
                    return this.__data__.set(e, s), this;
                  }),
                (iP.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.clear = function () {
                  (this.__data__ = new iE()), (this.size = 0);
                }),
                (iS.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = t.delete(e);
                  return (this.size = t.size), i;
                }),
                (iS.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (iS.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.set = function (e, t) {
                  var i = this.__data__;
                  if (i instanceof iE) {
                    var r = i.__data__;
                    if (!t7 || r.length < 199)
                      return r.push([e, t]), (this.size = ++i.size), this;
                    i = this.__data__ = new iI(r);
                  }
                  return i.set(e, t), (this.size = i.size), this;
                });
              var iz = rF(iJ),
                iL = rF(iG, !0);
              function iV(e, t) {
                var i = !0;
                return (
                  iz(e, function (e, r, s) {
                    return (i = !!t(e, r, s));
                  }),
                  i
                );
              }
              function iH(e, t, r) {
                for (var s = -1, n = e.length; ++s < n; ) {
                  var o = e[s],
                    a = t(o);
                  if (null != a && (c === i ? a == a && !nX(a) : r(a, c)))
                    var c = a,
                      h = o;
                }
                return h;
              }
              function iK(e, t) {
                var i = [];
                return (
                  iz(e, function (e, r, s) {
                    t(e, r, s) && i.push(e);
                  }),
                  i
                );
              }
              function iB(e, t, i, r, s) {
                var n = -1,
                  o = e.length;
                for (i || (i = sb), s || (s = []); ++n < o; ) {
                  var a = e[n];
                  t > 0 && i(a)
                    ? t > 1
                      ? iB(a, t - 1, i, r, s)
                      : td(s, a)
                    : r || (s[s.length] = a);
                }
                return s;
              }
              var iF = rW(),
                iW = rW(!0);
              function iJ(e, t) {
                return e && iF(e, t, op);
              }
              function iG(e, t) {
                return e && iW(e, t, op);
              }
              function iQ(e, t) {
                return th(t, function (t) {
                  return nV(e[t]);
                });
              }
              function iY(e, t) {
                t = rq(t, e);
                for (var r = 0, s = t.length; null != e && r < s; )
                  e = e[sk(t[r++])];
                return r && r == s ? e : i;
              }
              function iZ(e, t, i) {
                var r = t(e);
                return nj(e) ? r : td(r, i(e));
              }
              function iX(e) {
                return null == e
                  ? e === i
                    ? "[object Undefined]"
                    : "[object Null]"
                  : e6 && e6 in eI(e)
                  ? (function (e) {
                      var t = eT.call(e, e6),
                        r = e[e6];
                      try {
                        e[e6] = i;
                        var s = !0;
                      } catch {}
                      var n = ej.call(e);
                      return s && (t ? (e[e6] = r) : delete e[e6]), n;
                    })(e)
                  : ej.call(e);
              }
              function i0(e, t) {
                return e > t;
              }
              function i1(e, t) {
                return null != e && eT.call(e, t);
              }
              function i2(e, t) {
                return null != e && t in eI(e);
              }
              function i3(e, t, r) {
                for (
                  var s = r ? tu : tl,
                    n = e[0].length,
                    o = e.length,
                    a = o,
                    c = ev(o),
                    h = 1 / 0,
                    l = [];
                  a--;

                ) {
                  var u = e[a];
                  a && t && (u = tp(u, tC(t))),
                    (h = t3(u.length, h)),
                    (c[a] =
                      !r && (t || (n >= 120 && u.length >= 120))
                        ? new iP(a && u)
                        : i);
                }
                u = e[0];
                var p = -1,
                  d = c[0];
                e: for (; ++p < n && l.length < h; ) {
                  var f = u[p],
                    g = t ? t(f) : f;
                  if (
                    ((f = r || 0 !== f ? f : 0), !(d ? tT(d, g) : s(l, g, r)))
                  ) {
                    for (a = o; --a; ) {
                      var y = c[a];
                      if (!(y ? tT(y, g) : s(e[a], g, r))) continue e;
                    }
                    d && d.push(g), l.push(f);
                  }
                }
                return l;
              }
              function i5(e, t, r) {
                t = rq(t, e);
                var s = null == (e = sN(e, t)) ? e : e[sk(sY(t))];
                return null == s ? i : tn(s, e, r);
              }
              function i8(e) {
                return nF(e) && iX(e) == h;
              }
              function i4(e, t, r, s, n) {
                return (
                  e === t ||
                  (null != e && null != t && (nF(e) || nF(t))
                    ? (function (e, t, r, s, n, o) {
                        var a = nj(e),
                          c = nj(t),
                          f = a ? l : sm(e),
                          g = c ? l : sm(t);
                        (f = f == h ? v : f), (g = g == h ? v : g);
                        var w = f == v,
                          P = g == v,
                          O = f == g;
                        if (O && nM(e)) {
                          if (!nM(t)) return !1;
                          (a = !0), (w = !1);
                        }
                        if (O && !w)
                          return (
                            o || (o = new iS()),
                            a || n0(e)
                              ? ss(e, t, r, s, n, o)
                              : (function (e, t, i, r, s, n, o) {
                                  switch (i) {
                                    case R:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (t = t.buffer);
                                    case S:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !n(new eL(e), new eL(t))
                                      );
                                    case u:
                                    case p:
                                    case m:
                                      return nA(+e, +t);
                                    case d:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case b:
                                    case E:
                                      return e == t + "";
                                    case y:
                                      var a = tM;
                                    case _:
                                      var c = 1 & r;
                                      if (
                                        (a || (a = tV), e.size != t.size && !c)
                                      )
                                        break;
                                      var h = o.get(e);
                                      if (h) return h == t;
                                      (r |= 2), o.set(e, t);
                                      var l = ss(a(e), a(t), r, s, n, o);
                                      return o.delete(e), l;
                                    case I:
                                      if (id) return id.call(e) == id.call(t);
                                  }
                                  return !1;
                                })(e, t, f, r, s, n, o)
                          );
                        if (!(1 & r)) {
                          var x = w && eT.call(e, "__wrapped__"),
                            N = P && eT.call(t, "__wrapped__");
                          if (x || N) {
                            var C = x ? e.value() : e,
                              A = N ? t.value() : t;
                            return o || (o = new iS()), n(C, A, r, s, o);
                          }
                        }
                        return (
                          !!O &&
                          (o || (o = new iS()),
                          (function (e, t, r, s, n, o) {
                            var a = 1 & r,
                              c = so(e),
                              h = c.length;
                            if (h != so(t).length && !a) return !1;
                            for (var l = h; l--; ) {
                              var u = c[l];
                              if (!(a ? u in t : eT.call(t, u))) return !1;
                            }
                            var p = o.get(e),
                              d = o.get(t);
                            if (p && d) return p == t && d == e;
                            var f = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++l < h; ) {
                              var y = e[(u = c[l])],
                                m = t[u];
                              if (s)
                                var v = a
                                  ? s(m, y, u, t, e, o)
                                  : s(y, m, u, e, t, o);
                              if (
                                !(v === i ? y === m || n(y, m, r, s, o) : v)
                              ) {
                                f = !1;
                                break;
                              }
                              g || (g = "constructor" == u);
                            }
                            if (f && !g) {
                              var w = e.constructor,
                                b = t.constructor;
                              w != b &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof b &&
                                  b instanceof b
                                ) &&
                                (f = !1);
                            }
                            return o.delete(e), o.delete(t), f;
                          })(e, t, r, s, n, o))
                        );
                      })(e, t, r, s, i4, n)
                    : e != e && t != t)
                );
              }
              function i6(e, t, r, s) {
                var n = r.length,
                  o = n,
                  a = !s;
                if (null == e) return !o;
                for (e = eI(e); n--; ) {
                  var c = r[n];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++n < o; ) {
                  var h = (c = r[n])[0],
                    l = e[h],
                    u = c[1];
                  if (a && c[2]) {
                    if (l === i && !(h in e)) return !1;
                  } else {
                    var p = new iS();
                    if (s) var d = s(l, u, h, e, t, p);
                    if (!(d === i ? i4(u, l, 3, s, p) : d)) return !1;
                  }
                }
                return !0;
              }
              function i9(e) {
                return (
                  !(!nB(e) || (eD && eD in e)) && (nV(e) ? ek : eh).test(sM(e))
                );
              }
              function i7(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? ok
                  : "object" == typeof e
                  ? nj(e)
                    ? rs(e[0], e[1])
                    : rr(e)
                  : oW(e);
              }
              function re(e) {
                if (!sR(e)) return t1(e);
                var t = [];
                for (var i in eI(e))
                  eT.call(e, i) && "constructor" != i && t.push(i);
                return t;
              }
              function rt(e, t) {
                return e < t;
              }
              function ri(e, t) {
                var i = -1,
                  r = nU(e) ? ev(e.length) : [];
                return (
                  iz(e, function (e, s, n) {
                    r[++i] = t(e, s, n);
                  }),
                  r
                );
              }
              function rr(e) {
                var t = sd(e);
                return 1 == t.length && t[0][2]
                  ? sO(t[0][0], t[0][1])
                  : function (i) {
                      return i === e || i6(i, e, t);
                    };
              }
              function rs(e, t) {
                var r;
                return sI(e) && (r = t) == r && !nB(r)
                  ? sO(sk(e), t)
                  : function (r) {
                      var s = oa(r, e);
                      return s === i && s === t ? oc(r, e) : i4(t, s, 3);
                    };
              }
              function rn(e, t, r, s, n) {
                e !== t &&
                  iF(
                    t,
                    function (o, a) {
                      if ((n || (n = new iS()), nB(o)))
                        !(function (e, t, r, s, n, o, a) {
                          var c = sC(e, r),
                            h = sC(t, r),
                            l = a.get(h);
                          if (l) {
                            ix(e, r, l);
                            return;
                          }
                          var u = o ? o(c, h, r + "", e, t, a) : i,
                            p = u === i;
                          if (p) {
                            var d = nj(h),
                              f = !d && nM(h),
                              g = !d && !f && n0(h);
                            (u = h),
                              d || f || g
                                ? nj(c)
                                  ? (u = c)
                                  : nk(c)
                                  ? (u = rV(c))
                                  : f
                                  ? ((p = !1), (u = r$(h, !0)))
                                  : g
                                  ? ((p = !1), (u = rk(h, !0)))
                                  : (u = [])
                                : nG(h) || nD(h)
                                ? ((u = c),
                                  nD(c)
                                    ? (u = n9(c))
                                    : (!nB(c) || nV(c)) && (u = sw(h)))
                                : (p = !1);
                          }
                          p && (a.set(h, u), n(u, h, s, o, a), a.delete(h)),
                            ix(e, r, u);
                        })(e, t, a, r, rn, s, n);
                      else {
                        var c = s ? s(sC(e, a), o, a + "", e, t, n) : i;
                        c === i && (c = o), ix(e, a, c);
                      }
                    },
                    od
                  );
              }
              function ro(e, t) {
                var r = e.length;
                if (r) return s_((t += t < 0 ? r : 0), r) ? e[t] : i;
              }
              function ra(e, t, i) {
                t = t.length
                  ? tp(t, function (e) {
                      return nj(e)
                        ? function (t) {
                            return iY(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [ok];
                var r = -1;
                return (
                  (t = tp(t, tC(su()))),
                  (function (e, t) {
                    var i = e.length;
                    for (e.sort(t); i--; ) e[i] = e[i].value;
                    return e;
                  })(
                    ri(e, function (e, i, s) {
                      return {
                        criteria: tp(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, i) {
                        for (
                          var r = -1,
                            s = e.criteria,
                            n = t.criteria,
                            o = s.length,
                            a = i.length;
                          ++r < o;

                        ) {
                          var c = rM(s[r], n[r]);
                          if (c) {
                            if (r >= a) return c;
                            return c * ("desc" == i[r] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, i);
                    }
                  )
                );
              }
              function rc(e, t, i) {
                for (var r = -1, s = t.length, n = {}; ++r < s; ) {
                  var o = t[r],
                    a = iY(e, o);
                  i(a, o) && rf(n, rq(o, e), a);
                }
                return n;
              }
              function rh(e, t, i, r) {
                var s = r ? t_ : tb,
                  n = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = rV(t)), i && (a = tp(e, tC(i))); ++n < o; )
                  for (
                    var c = 0, h = t[n], l = i ? i(h) : h;
                    (c = s(a, l, c, r)) > -1;

                  )
                    a !== e && e2.call(a, c, 1), e2.call(e, c, 1);
                return e;
              }
              function rl(e, t) {
                for (var i = e ? t.length : 0, r = i - 1; i--; ) {
                  var s = t[i];
                  if (i == r || s !== n) {
                    var n = s;
                    s_(s) ? e2.call(e, s, 1) : rS(e, s);
                  }
                }
                return e;
              }
              function ru(e, t) {
                return e + tQ(t4() * (t - e + 1));
              }
              function rp(e, t) {
                var i = "";
                if (!e || t < 1 || t > 9007199254740991) return i;
                do t % 2 && (i += e), (t = tQ(t / 2)) && (e += e);
                while (t);
                return i;
              }
              function rd(e, t) {
                return sq(sx(e, t, ok), e + "");
              }
              function rf(e, t, r, s) {
                if (!nB(e)) return e;
                t = rq(t, e);
                for (
                  var n = -1, o = t.length, a = o - 1, c = e;
                  null != c && ++n < o;

                ) {
                  var h = sk(t[n]),
                    l = r;
                  if (
                    "__proto__" === h ||
                    "constructor" === h ||
                    "prototype" === h
                  )
                    break;
                  if (n != a) {
                    var u = c[h];
                    (l = s ? s(u, h, c) : i) === i &&
                      (l = nB(u) ? u : s_(t[n + 1]) ? [] : {});
                  }
                  iN(c, h, l), (c = c[h]);
                }
                return e;
              }
              var rg = is
                  ? function (e, t) {
                      return is.set(e, t), e;
                    }
                  : ok,
                ry = e9
                  ? function (e, t) {
                      return e9(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: oj(t),
                        writable: !0,
                      });
                    }
                  : ok;
              function rm(e, t, i) {
                var r = -1,
                  s = e.length;
                t < 0 && (t = -t > s ? 0 : s + t),
                  (i = i > s ? s : i) < 0 && (i += s),
                  (s = t > i ? 0 : (i - t) >>> 0),
                  (t >>>= 0);
                for (var n = ev(s); ++r < s; ) n[r] = e[r + t];
                return n;
              }
              function rv(e, t) {
                var i;
                return (
                  iz(e, function (e, r, s) {
                    return !(i = t(e, r, s));
                  }),
                  !!i
                );
              }
              function rw(e, t, i) {
                var r = 0,
                  s = null == e ? r : e.length;
                if ("number" == typeof t && t == t && s <= 2147483647) {
                  for (; r < s; ) {
                    var n = (r + s) >>> 1,
                      o = e[n];
                    null !== o && !nX(o) && (i ? o <= t : o < t)
                      ? (r = n + 1)
                      : (s = n);
                  }
                  return s;
                }
                return rb(e, t, ok, i);
              }
              function rb(e, t, r, s) {
                var n = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                t = r(t);
                for (
                  var a = t != t, c = null === t, h = nX(t), l = t === i;
                  n < o;

                ) {
                  var u = tQ((n + o) / 2),
                    p = r(e[u]),
                    d = p !== i,
                    f = null === p,
                    g = p == p,
                    y = nX(p);
                  if (a) var m = s || g;
                  else
                    m = l
                      ? g && (s || d)
                      : c
                      ? g && d && (s || !f)
                      : h
                      ? g && d && !f && (s || !y)
                      : !f && !y && (s ? p <= t : p < t);
                  m ? (n = u + 1) : (o = u);
                }
                return t3(o, 4294967294);
              }
              function r_(e, t) {
                for (var i = -1, r = e.length, s = 0, n = []; ++i < r; ) {
                  var o = e[i],
                    a = t ? t(o) : o;
                  if (!i || !nA(a, c)) {
                    var c = a;
                    n[s++] = 0 === o ? 0 : o;
                  }
                }
                return n;
              }
              function rE(e) {
                return "number" == typeof e ? e : nX(e) ? a : +e;
              }
              function rI(e) {
                if ("string" == typeof e) return e;
                if (nj(e)) return tp(e, rI) + "";
                if (nX(e)) return ig ? ig.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function rP(e, t, i) {
                var r = -1,
                  s = tl,
                  n = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (i) (o = !1), (s = tu);
                else if (n >= 200) {
                  var h = t ? null : r9(e);
                  if (h) return tV(h);
                  (o = !1), (s = tT), (c = new iP());
                } else c = t ? [] : a;
                e: for (; ++r < n; ) {
                  var l = e[r],
                    u = t ? t(l) : l;
                  if (((l = i || 0 !== l ? l : 0), o && u == u)) {
                    for (var p = c.length; p--; ) if (c[p] === u) continue e;
                    t && c.push(u), a.push(l);
                  } else s(c, u, i) || (c !== a && c.push(u), a.push(l));
                }
                return a;
              }
              function rS(e, t) {
                return (
                  (t = rq(t, e)), null == (e = sN(e, t)) || delete e[sk(sY(t))]
                );
              }
              function rR(e, t, i, r) {
                return rf(e, t, i(iY(e, t)), r);
              }
              function rO(e, t, i, r) {
                for (
                  var s = e.length, n = r ? s : -1;
                  (r ? n-- : ++n < s) && t(e[n], n, e);

                );
                return i
                  ? rm(e, r ? 0 : n, r ? n + 1 : s)
                  : rm(e, r ? n + 1 : 0, r ? s : n);
              }
              function rx(e, t) {
                var i = e;
                return (
                  i instanceof ib && (i = i.value()),
                  tf(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, td([e], t.args));
                    },
                    i
                  )
                );
              }
              function rN(e, t, i) {
                var r = e.length;
                if (r < 2) return r ? rP(e[0]) : [];
                for (var s = -1, n = ev(r); ++s < r; )
                  for (var o = e[s], a = -1; ++a < r; )
                    a != s && (n[s] = iM(n[s] || o, e[a], t, i));
                return rP(iB(n, 1), t, i);
              }
              function rC(e, t, r) {
                for (
                  var s = -1, n = e.length, o = t.length, a = {};
                  ++s < n;

                ) {
                  var c = s < o ? t[s] : i;
                  r(a, e[s], c);
                }
                return a;
              }
              function rA(e) {
                return nk(e) ? e : [];
              }
              function rT(e) {
                return "function" == typeof e ? e : ok;
              }
              function rq(e, t) {
                return nj(e) ? e : sI(e, t) ? [e] : sU(n7(e));
              }
              function rD(e, t, r) {
                var s = e.length;
                return (r = r === i ? s : r), !t && r >= s ? e : rm(e, t, r);
              }
              var rj =
                tm ||
                function (e) {
                  return e3.clearTimeout(e);
                };
              function r$(e, t) {
                if (t) return e.slice();
                var i = e.length,
                  r = eK ? eK(i) : new e.constructor(i);
                return e.copy(r), r;
              }
              function rU(e) {
                var t = new e.constructor(e.byteLength);
                return new eL(t).set(new eL(e)), t;
              }
              function rk(e, t) {
                var i = t ? rU(e.buffer) : e.buffer;
                return new e.constructor(i, e.byteOffset, e.length);
              }
              function rM(e, t) {
                if (e !== t) {
                  var r = e !== i,
                    s = null === e,
                    n = e == e,
                    o = nX(e),
                    a = t !== i,
                    c = null === t,
                    h = t == t,
                    l = nX(t);
                  if (
                    (!c && !l && !o && e > t) ||
                    (o && a && h && !c && !l) ||
                    (s && a && h) ||
                    (!r && h) ||
                    !n
                  )
                    return 1;
                  if (
                    (!s && !o && !l && e < t) ||
                    (l && r && n && !s && !o) ||
                    (c && r && n) ||
                    (!a && n) ||
                    !h
                  )
                    return -1;
                }
                return 0;
              }
              function rz(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    o = i.length,
                    a = -1,
                    c = t.length,
                    h = t2(n - o, 0),
                    l = ev(c + h),
                    u = !r;
                  ++a < c;

                )
                  l[a] = t[a];
                for (; ++s < o; ) (u || s < n) && (l[i[s]] = e[s]);
                for (; h--; ) l[a++] = e[s++];
                return l;
              }
              function rL(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    o = -1,
                    a = i.length,
                    c = -1,
                    h = t.length,
                    l = t2(n - a, 0),
                    u = ev(l + h),
                    p = !r;
                  ++s < l;

                )
                  u[s] = e[s];
                for (var d = s; ++c < h; ) u[d + c] = t[c];
                for (; ++o < a; ) (p || s < n) && (u[d + i[o]] = e[s++]);
                return u;
              }
              function rV(e, t) {
                var i = -1,
                  r = e.length;
                for (t || (t = ev(r)); ++i < r; ) t[i] = e[i];
                return t;
              }
              function rH(e, t, r, s) {
                var n = !r;
                r || (r = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    h = s ? s(r[c], e[c], c, r, e) : i;
                  h === i && (h = e[c]), n ? iq(r, c, h) : iN(r, c, h);
                }
                return r;
              }
              function rK(e, t) {
                return function (i, r) {
                  var s = nj(i) ? to : iA,
                    n = t ? t() : {};
                  return s(i, e, su(r, 2), n);
                };
              }
              function rB(e) {
                return rd(function (t, r) {
                  var s = -1,
                    n = r.length,
                    o = n > 1 ? r[n - 1] : i,
                    a = n > 2 ? r[2] : i;
                  for (
                    o = e.length > 3 && "function" == typeof o ? (n--, o) : i,
                      a && sE(r[0], r[1], a) && ((o = n < 3 ? i : o), (n = 1)),
                      t = eI(t);
                    ++s < n;

                  ) {
                    var c = r[s];
                    c && e(t, c, s, o);
                  }
                  return t;
                });
              }
              function rF(e, t) {
                return function (i, r) {
                  if (null == i) return i;
                  if (!nU(i)) return e(i, r);
                  for (
                    var s = i.length, n = t ? s : -1, o = eI(i);
                    (t ? n-- : ++n < s) && !1 !== r(o[n], n, o);

                  );
                  return i;
                };
              }
              function rW(e) {
                return function (t, i, r) {
                  for (var s = -1, n = eI(t), o = r(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++s];
                    if (!1 === i(n[c], c, n)) break;
                  }
                  return t;
                };
              }
              function rJ(e) {
                return function (t) {
                  var r = tk((t = n7(t))) ? tK(t) : i,
                    s = r ? r[0] : t.charAt(0),
                    n = r ? rD(r, 1).join("") : t.slice(1);
                  return s[e]() + n;
                };
              }
              function rG(e) {
                return function (t) {
                  return tf(oT(oP(t).replace(eV, "")), e, "");
                };
              }
              function rQ(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var i = im(e.prototype),
                    r = e.apply(i, t);
                  return nB(r) ? r : i;
                };
              }
              function rY(e) {
                return function (t, r, s) {
                  var n = eI(t);
                  if (!nU(t)) {
                    var o = su(r, 3);
                    (t = op(t)),
                      (r = function (e) {
                        return o(n[e], e, n);
                      });
                  }
                  var a = e(t, r, s);
                  return a > -1 ? n[o ? t[a] : a] : i;
                };
              }
              function rZ(e) {
                return sn(function (t) {
                  var s = t.length,
                    n = s,
                    o = iw.prototype.thru;
                  for (e && t.reverse(); n--; ) {
                    var a = t[n];
                    if ("function" != typeof a) throw new eR(r);
                    if (o && !c && "wrapper" == sh(a)) var c = new iw([], !0);
                  }
                  for (n = c ? n : s; ++n < s; ) {
                    var h = sh((a = t[n])),
                      l = "wrapper" == h ? sc(a) : i;
                    c =
                      l && sP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? c[sh(l[0])].apply(c, l[3])
                        : 1 == a.length && sP(a)
                        ? c[h]()
                        : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      i = e[0];
                    if (c && 1 == e.length && nj(i)) return c.plant(i).value();
                    for (var r = 0, n = s ? t[r].apply(this, e) : i; ++r < s; )
                      n = t[r].call(this, n);
                    return n;
                  };
                });
              }
              function rX(e, t, r, s, n, o, a, c, h, l) {
                var u = 128 & t,
                  p = 1 & t,
                  d = 2 & t,
                  f = 24 & t,
                  g = 512 & t,
                  y = d ? i : rQ(e);
                return function m() {
                  for (var v = arguments.length, w = ev(v), b = v; b--; )
                    w[b] = arguments[b];
                  if (f)
                    var _ = sl(m),
                      E = (function (e, t) {
                        for (var i = e.length, r = 0; i--; ) e[i] === t && ++r;
                        return r;
                      })(w, _);
                  if (
                    (s && (w = rz(w, s, n, f)),
                    o && (w = rL(w, o, a, f)),
                    (v -= E),
                    f && v < l)
                  ) {
                    var I = tL(w, _);
                    return r4(e, t, rX, m.placeholder, r, w, I, c, h, l - v);
                  }
                  var P = p ? r : this,
                    S = d ? P[e] : e;
                  return (
                    (v = w.length),
                    c
                      ? (w = (function (e, t) {
                          for (
                            var r = e.length, s = t3(t.length, r), n = rV(e);
                            s--;

                          ) {
                            var o = t[s];
                            e[s] = s_(o, r) ? n[o] : i;
                          }
                          return e;
                        })(w, c))
                      : g && v > 1 && w.reverse(),
                    u && h < v && (w.length = h),
                    this &&
                      this !== e3 &&
                      this instanceof m &&
                      (S = y || rQ(S)),
                    S.apply(P, w)
                  );
                };
              }
              function r0(e, t) {
                return function (i, r) {
                  var s, n;
                  return (
                    (s = t(r)),
                    (n = {}),
                    iJ(i, function (t, i, r) {
                      e(n, s(t), i, r);
                    }),
                    n
                  );
                };
              }
              function r1(e, t) {
                return function (r, s) {
                  var n;
                  if (r === i && s === i) return t;
                  if ((r !== i && (n = r), s !== i)) {
                    if (n === i) return s;
                    "string" == typeof r || "string" == typeof s
                      ? ((r = rI(r)), (s = rI(s)))
                      : ((r = rE(r)), (s = rE(s))),
                      (n = e(r, s));
                  }
                  return n;
                };
              }
              function r2(e) {
                return sn(function (t) {
                  return (
                    (t = tp(t, tC(su()))),
                    rd(function (i) {
                      var r = this;
                      return e(t, function (e) {
                        return tn(e, r, i);
                      });
                    })
                  );
                });
              }
              function r3(e, t) {
                var r = (t = t === i ? " " : rI(t)).length;
                if (r < 2) return r ? rp(t, e) : t;
                var s = rp(t, tG(e / tH(t)));
                return tk(t) ? rD(tK(s), 0, e).join("") : s.slice(0, e);
              }
              function r5(e) {
                return function (t, r, s) {
                  return (
                    s && "number" != typeof s && sE(t, r, s) && (r = s = i),
                    (t = n5(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n5(r)),
                    (s = s === i ? (t < r ? 1 : -1) : n5(s)),
                    (function (e, t, i, r) {
                      for (
                        var s = -1,
                          n = t2(tG((t - e) / (i || 1)), 0),
                          o = ev(n);
                        n--;

                      )
                        (o[r ? n : ++s] = e), (e += i);
                      return o;
                    })(t, r, s, e)
                  );
                };
              }
              function r8(e) {
                return function (t, i) {
                  return (
                    ("string" == typeof t && "string" == typeof i) ||
                      ((t = n6(t)), (i = n6(i))),
                    e(t, i)
                  );
                };
              }
              function r4(e, t, r, s, n, o, a, c, h, l) {
                var u = 8 & t,
                  p = u ? a : i,
                  d = u ? i : a,
                  f = u ? o : i,
                  g = u ? i : o;
                (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                var y = [e, t, n, f, p, g, d, c, h, l],
                  m = r.apply(i, y);
                return sP(e) && sA(m, y), (m.placeholder = s), sD(m, e, t);
              }
              function r6(e) {
                var t = eE[e];
                return function (e, i) {
                  if (
                    ((e = n6(e)), (i = null == i ? 0 : t3(n8(i), 292)) && tX(e))
                  ) {
                    var r = (n7(e) + "e").split("e");
                    return +(
                      (r = (n7(t(r[0] + "e" + (+r[1] + i))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - i)
                    );
                  }
                  return t(e);
                };
              }
              var r9 =
                it && 1 / tV(new it([, -0]))[1] == o
                  ? function (e) {
                      return new it(e);
                    }
                  : oH;
              function r7(e) {
                return function (t) {
                  var i,
                    r,
                    s = sm(t);
                  return s == y
                    ? tM(t)
                    : s == _
                    ? ((i = -1),
                      (r = Array(t.size)),
                      t.forEach(function (e) {
                        r[++i] = [e, e];
                      }),
                      r)
                    : tp(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function se(e, t, s, o, a, c, h, l) {
                var u = 2 & t;
                if (!u && "function" != typeof e) throw new eR(r);
                var p = o ? o.length : 0;
                if (
                  (p || ((t &= -97), (o = a = i)),
                  (h = h === i ? h : t2(n8(h), 0)),
                  (l = l === i ? l : n8(l)),
                  (p -= a ? a.length : 0),
                  64 & t)
                ) {
                  var d = o,
                    f = a;
                  o = a = i;
                }
                var g = u ? i : sc(e),
                  y = [e, t, s, o, a, d, f, c, h, l];
                if (
                  (g &&
                    (function (e, t) {
                      var i = e[1],
                        r = t[1],
                        s = i | r,
                        o = s < 131,
                        a =
                          (128 == r && 8 == i) ||
                          (128 == r && 256 == i && e[7].length <= t[8]) ||
                          (384 == r && t[7].length <= t[8] && 8 == i);
                      if (o || a) {
                        1 & r && ((e[2] = t[2]), (s |= 1 & i ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var h = e[3];
                          (e[3] = h ? rz(h, c, t[4]) : c),
                            (e[4] = h ? tL(e[3], n) : t[4]);
                        }
                        (c = t[5]) &&
                          ((h = e[5]),
                          (e[5] = h ? rL(h, c, t[6]) : c),
                          (e[6] = h ? tL(e[5], n) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & r &&
                            (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = s);
                      }
                    })(y, g),
                  (e = y[0]),
                  (t = y[1]),
                  (s = y[2]),
                  (o = y[3]),
                  (a = y[4]),
                  (l = y[9] =
                    y[9] === i ? (u ? 0 : e.length) : t2(y[9] - p, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((m = e),
                      (v = t),
                      (w = l),
                      (b = rQ(m)),
                      (T = function e() {
                        for (
                          var t = arguments.length, r = ev(t), s = t, n = sl(e);
                          s--;

                        )
                          r[s] = arguments[s];
                        var o =
                          t < 3 && r[0] !== n && r[t - 1] !== n ? [] : tL(r, n);
                        return (t -= o.length) < w
                          ? r4(m, v, rX, e.placeholder, i, r, o, i, i, w - t)
                          : tn(
                              this && this !== e3 && this instanceof e ? b : m,
                              this,
                              r
                            );
                      }))
                    : (32 != t && 33 != t) || a.length
                    ? (T = rX.apply(i, y))
                    : ((_ = e),
                      (E = t),
                      (I = s),
                      (P = o),
                      (S = 1 & E),
                      (R = rQ(_)),
                      (T = function e() {
                        for (
                          var t = -1,
                            i = arguments.length,
                            r = -1,
                            s = P.length,
                            n = ev(s + i),
                            o =
                              this && this !== e3 && this instanceof e ? R : _;
                          ++r < s;

                        )
                          n[r] = P[r];
                        for (; i--; ) n[r++] = arguments[++t];
                        return tn(o, S ? I : this, n);
                      }));
                else
                  var m,
                    v,
                    w,
                    b,
                    _,
                    E,
                    I,
                    P,
                    S,
                    R,
                    O,
                    x,
                    N,
                    C,
                    A,
                    T =
                      ((O = e),
                      (x = t),
                      (N = s),
                      (C = 1 & x),
                      (A = rQ(O)),
                      function e() {
                        return (
                          this && this !== e3 && this instanceof e ? A : O
                        ).apply(C ? N : this, arguments);
                      });
                return sD((g ? rg : sA)(T, y), e, t);
              }
              function st(e, t, r, s) {
                return e === i || (nA(e, eN[r]) && !eT.call(s, r)) ? t : e;
              }
              function si(e, t, r, s, n, o) {
                return (
                  nB(e) &&
                    nB(t) &&
                    (o.set(t, e), rn(e, t, i, si, o), o.delete(t)),
                  e
                );
              }
              function sr(e) {
                return nG(e) ? i : e;
              }
              function ss(e, t, r, s, n, o) {
                var a = 1 & r,
                  c = e.length,
                  h = t.length;
                if (c != h && !(a && h > c)) return !1;
                var l = o.get(e),
                  u = o.get(t);
                if (l && u) return l == t && u == e;
                var p = -1,
                  d = !0,
                  f = 2 & r ? new iP() : i;
                for (o.set(e, t), o.set(t, e); ++p < c; ) {
                  var g = e[p],
                    y = t[p];
                  if (s) var m = a ? s(y, g, p, t, e, o) : s(g, y, p, e, t, o);
                  if (m !== i) {
                    if (m) continue;
                    d = !1;
                    break;
                  }
                  if (f) {
                    if (
                      !ty(t, function (e, t) {
                        if (!tT(f, t) && (g === e || n(g, e, r, s, o)))
                          return f.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (!(g === y || n(g, y, r, s, o))) {
                    d = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), d;
              }
              function sn(e) {
                return sq(sx(e, i, sF), e + "");
              }
              function so(e) {
                return iZ(e, op, sg);
              }
              function sa(e) {
                return iZ(e, od, sy);
              }
              var sc = is
                ? function (e) {
                    return is.get(e);
                  }
                : oH;
              function sh(e) {
                for (
                  var t = e.name + "",
                    i = io[t],
                    r = eT.call(io, t) ? i.length : 0;
                  r--;

                ) {
                  var s = i[r],
                    n = s.func;
                  if (null == n || n == e) return s.name;
                }
                return t;
              }
              function sl(e) {
                return (eT.call(iy, "placeholder") ? iy : e).placeholder;
              }
              function su() {
                var e = iy.iteratee || oM;
                return (
                  (e = e === oM ? i7 : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function sp(e, t) {
                var i,
                  r = e.__data__;
                return (
                  "string" == (i = typeof t) ||
                  "number" == i ||
                  "symbol" == i ||
                  "boolean" == i
                    ? "__proto__" !== t
                    : null === t
                )
                  ? r["string" == typeof t ? "string" : "hash"]
                  : r.map;
              }
              function sd(e) {
                for (var t = op(e), i = t.length; i--; ) {
                  var r = t[i],
                    s = e[r];
                  t[i] = [r, s, s == s && !nB(s)];
                }
                return t;
              }
              function sf(e, t) {
                var r = null == e ? i : e[t];
                return i9(r) ? r : i;
              }
              var sg = tY
                  ? function (e) {
                      return null == e
                        ? []
                        : th(tY((e = eI(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : oQ,
                sy = tY
                  ? function (e) {
                      for (var t = []; e; ) td(t, sg(e)), (e = eF(e));
                      return t;
                    }
                  : oQ,
                sm = iX;
              function sv(e, t, i) {
                t = rq(t, e);
                for (var r = -1, s = t.length, n = !1; ++r < s; ) {
                  var o = sk(t[r]);
                  if (!(n = null != e && i(e, o))) break;
                  e = e[o];
                }
                return n || ++r != s
                  ? n
                  : !!(s = null == e ? 0 : e.length) &&
                      nK(s) &&
                      s_(o, s) &&
                      (nj(e) || nD(e));
              }
              function sw(e) {
                return "function" != typeof e.constructor || sR(e)
                  ? {}
                  : im(eF(e));
              }
              function sb(e) {
                return nj(e) || nD(e) || !!(e5 && e && e[e5]);
              }
              function s_(e, t) {
                var i = typeof e;
                return (
                  !!(t = t ?? 9007199254740991) &&
                  ("number" == i || ("symbol" != i && eu.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function sE(e, t, i) {
                if (!nB(i)) return !1;
                var r = typeof t;
                return (
                  ("number" == r
                    ? !!(nU(i) && s_(t, i.length))
                    : "string" == r && t in i) && nA(i[t], e)
                );
              }
              function sI(e, t) {
                if (nj(e)) return !1;
                var i = typeof e;
                return (
                  !!(
                    "number" == i ||
                    "symbol" == i ||
                    "boolean" == i ||
                    null == e ||
                    nX(e)
                  ) ||
                  W.test(e) ||
                  !F.test(e) ||
                  (null != t && e in eI(t))
                );
              }
              function sP(e) {
                var t = sh(e),
                  i = iy[t];
                if ("function" != typeof i || !(t in ib.prototype)) return !1;
                if (e === i) return !0;
                var r = sc(i);
                return !!r && e === r[0];
              }
              ((t9 && sm(new t9(new ArrayBuffer(1))) != R) ||
                (t7 && sm(new t7()) != y) ||
                (ie && sm(ie.resolve()) != w) ||
                (it && sm(new it()) != _) ||
                (ii && sm(new ii()) != P)) &&
                (sm = function (e) {
                  var t = iX(e),
                    r = t == v ? e.constructor : i,
                    s = r ? sM(r) : "";
                  if (s)
                    switch (s) {
                      case ia:
                        return R;
                      case ic:
                        return y;
                      case ih:
                        return w;
                      case il:
                        return _;
                      case iu:
                        return P;
                    }
                  return t;
                });
              var sS = eC ? nV : oY;
              function sR(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || eN);
              }
              function sO(e, t) {
                return function (r) {
                  return null != r && r[e] === t && (t !== i || e in eI(r));
                };
              }
              function sx(e, t, r) {
                return (
                  (t = t2(t === i ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments,
                        s = -1,
                        n = t2(i.length - t, 0),
                        o = ev(n);
                      ++s < n;

                    )
                      o[s] = i[t + s];
                    s = -1;
                    for (var a = ev(t + 1); ++s < t; ) a[s] = i[s];
                    return (a[t] = r(o)), tn(e, this, a);
                  }
                );
              }
              function sN(e, t) {
                return t.length < 2 ? e : iY(e, rm(t, 0, -1));
              }
              function sC(e, t) {
                if (
                  !("constructor" === t && "function" == typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var sA = sj(rg),
                sT =
                  tJ ||
                  function (e, t) {
                    return e3.setTimeout(e, t);
                  },
                sq = sj(ry);
              function sD(e, t, i) {
                var r,
                  s,
                  n = t + "";
                return sq(
                  e,
                  (function (e, t) {
                    var i = t.length;
                    if (!i) return e;
                    var r = i - 1;
                    return (
                      (t[r] = (i > 1 ? "& " : "") + t[r]),
                      (t = t.join(i > 2 ? ", " : " ")),
                      e.replace(
                        X,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    n,
                    ((r = (s = n.match(ee)) ? s[1].split(et) : []),
                    ta(c, function (e) {
                      var t = "_." + e[0];
                      i & e[1] && !tl(r, t) && r.push(t);
                    }),
                    r.sort())
                  )
                );
              }
              function sj(e) {
                var t = 0,
                  r = 0;
                return function () {
                  var s = t5(),
                    n = 16 - (s - r);
                  if (((r = s), n > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(i, arguments);
                };
              }
              function s$(e, t) {
                var r = -1,
                  s = e.length,
                  n = s - 1;
                for (t = t === i ? s : t; ++r < t; ) {
                  var o = ru(r, n),
                    a = e[o];
                  (e[o] = e[r]), (e[r] = a);
                }
                return (e.length = t), e;
              }
              var sU =
                ((ey = (eg = nS(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(J, function (e, i, r, s) {
                        t.push(r ? s.replace(es, "$1") : i || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ey.size && ey.clear(), e;
                  }
                )).cache),
                eg);
              function sk(e) {
                if ("string" == typeof e || nX(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function sM(e) {
                if (null != e) {
                  try {
                    return eA.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function sz(e) {
                if (e instanceof ib) return e.clone();
                var t = new iw(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = rV(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var sL = rd(function (e, t) {
                  return nk(e) ? iM(e, iB(t, 1, nk, !0)) : [];
                }),
                sV = rd(function (e, t) {
                  var r = sY(t);
                  return (
                    nk(r) && (r = i),
                    nk(e) ? iM(e, iB(t, 1, nk, !0), su(r, 2)) : []
                  );
                }),
                sH = rd(function (e, t) {
                  var r = sY(t);
                  return (
                    nk(r) && (r = i), nk(e) ? iM(e, iB(t, 1, nk, !0), i, r) : []
                  );
                });
              function sK(e, t, i) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var s = null == i ? 0 : n8(i);
                return s < 0 && (s = t2(r + s, 0)), tw(e, su(t, 3), s);
              }
              function sB(e, t, r) {
                var s = null == e ? 0 : e.length;
                if (!s) return -1;
                var n = s - 1;
                return (
                  r !== i &&
                    ((n = n8(r)), (n = r < 0 ? t2(s + n, 0) : t3(n, s - 1))),
                  tw(e, su(t, 3), n, !0)
                );
              }
              function sF(e) {
                return (null == e ? 0 : e.length) ? iB(e, 1) : [];
              }
              function sW(e) {
                return e && e.length ? e[0] : i;
              }
              var sJ = rd(function (e) {
                  var t = tp(e, rA);
                  return t.length && t[0] === e[0] ? i3(t) : [];
                }),
                sG = rd(function (e) {
                  var t = sY(e),
                    r = tp(e, rA);
                  return (
                    t === sY(r) ? (t = i) : r.pop(),
                    r.length && r[0] === e[0] ? i3(r, su(t, 2)) : []
                  );
                }),
                sQ = rd(function (e) {
                  var t = sY(e),
                    r = tp(e, rA);
                  return (
                    (t = "function" == typeof t ? t : i) && r.pop(),
                    r.length && r[0] === e[0] ? i3(r, i, t) : []
                  );
                });
              function sY(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : i;
              }
              var sZ = rd(sX);
              function sX(e, t) {
                return e && e.length && t && t.length ? rh(e, t) : e;
              }
              var s0 = sn(function (e, t) {
                var i = null == e ? 0 : e.length,
                  r = iD(e, t);
                return (
                  rl(
                    e,
                    tp(t, function (e) {
                      return s_(e, i) ? +e : e;
                    }).sort(rM)
                  ),
                  r
                );
              });
              function s1(e) {
                return null == e ? e : t6.call(e);
              }
              var s2 = rd(function (e) {
                  return rP(iB(e, 1, nk, !0));
                }),
                s3 = rd(function (e) {
                  var t = sY(e);
                  return nk(t) && (t = i), rP(iB(e, 1, nk, !0), su(t, 2));
                }),
                s5 = rd(function (e) {
                  var t = sY(e);
                  return (
                    (t = "function" == typeof t ? t : i),
                    rP(iB(e, 1, nk, !0), i, t)
                  );
                });
              function s8(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = th(e, function (e) {
                    if (nk(e)) return (t = t2(e.length, t)), !0;
                  })),
                  tx(t, function (t) {
                    return tp(e, tP(t));
                  })
                );
              }
              function s4(e, t) {
                if (!(e && e.length)) return [];
                var r = s8(e);
                return null == t
                  ? r
                  : tp(r, function (e) {
                      return tn(t, i, e);
                    });
              }
              var s6 = rd(function (e, t) {
                  return nk(e) ? iM(e, t) : [];
                }),
                s9 = rd(function (e) {
                  return rN(th(e, nk));
                }),
                s7 = rd(function (e) {
                  var t = sY(e);
                  return nk(t) && (t = i), rN(th(e, nk), su(t, 2));
                }),
                ne = rd(function (e) {
                  var t = sY(e);
                  return (
                    (t = "function" == typeof t ? t : i), rN(th(e, nk), i, t)
                  );
                }),
                nt = rd(s8),
                ni = rd(function (e) {
                  var t = e.length,
                    r = t > 1 ? e[t - 1] : i;
                  return (
                    (r = "function" == typeof r ? (e.pop(), r) : i), s4(e, r)
                  );
                });
              function nr(e) {
                var t = iy(e);
                return (t.__chain__ = !0), t;
              }
              function ns(e, t) {
                return t(e);
              }
              var nn = sn(function (e) {
                  var t = e.length,
                    r = t ? e[0] : 0,
                    s = this.__wrapped__,
                    n = function (t) {
                      return iD(t, e);
                    };
                  return !(t > 1) &&
                    !this.__actions__.length &&
                    s instanceof ib &&
                    s_(r)
                    ? ((s = s.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                        func: ns,
                        args: [n],
                        thisArg: i,
                      }),
                      new iw(s, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(i), e;
                      }))
                    : this.thru(n);
                }),
                no = rK(function (e, t, i) {
                  eT.call(e, i) ? ++e[i] : iq(e, i, 1);
                }),
                na = rY(sK),
                nc = rY(sB);
              function nh(e, t) {
                return (nj(e) ? ta : iz)(e, su(t, 3));
              }
              function nl(e, t) {
                return (
                  nj(e)
                    ? function (e, t) {
                        for (
                          var i = null == e ? 0 : e.length;
                          i-- && !1 !== t(e[i], i, e);

                        );
                        return e;
                      }
                    : iL
                )(e, su(t, 3));
              }
              var nu = rK(function (e, t, i) {
                  eT.call(e, i) ? e[i].push(t) : iq(e, i, [t]);
                }),
                np = rd(function (e, t, i) {
                  var r = -1,
                    s = "function" == typeof t,
                    n = nU(e) ? ev(e.length) : [];
                  return (
                    iz(e, function (e) {
                      n[++r] = s ? tn(t, e, i) : i5(e, t, i);
                    }),
                    n
                  );
                }),
                nd = rK(function (e, t, i) {
                  iq(e, i, t);
                });
              function nf(e, t) {
                return (nj(e) ? tp : ri)(e, su(t, 3));
              }
              var ng = rK(
                  function (e, t, i) {
                    e[i ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                ny = rd(function (e, t) {
                  if (null == e) return [];
                  var i = t.length;
                  return (
                    i > 1 && sE(e, t[0], t[1])
                      ? (t = [])
                      : i > 2 && sE(t[0], t[1], t[2]) && (t = [t[0]]),
                    ra(e, iB(t, 1), [])
                  );
                }),
                nm =
                  tS ||
                  function () {
                    return e3.Date.now();
                  };
              function nv(e, t, r) {
                return (
                  (t = r ? i : t),
                  (t = e && null == t ? e.length : t),
                  se(e, 128, i, i, i, i, t)
                );
              }
              function nw(e, t) {
                var s;
                if ("function" != typeof t) throw new eR(r);
                return (
                  (e = n8(e)),
                  function () {
                    return (
                      --e > 0 && (s = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      s
                    );
                  }
                );
              }
              var nb = rd(function (e, t, i) {
                  var r = 1;
                  if (i.length) {
                    var s = tL(i, sl(nb));
                    r |= 32;
                  }
                  return se(e, r, t, i, s);
                }),
                n_ = rd(function (e, t, i) {
                  var r = 3;
                  if (i.length) {
                    var s = tL(i, sl(n_));
                    r |= 32;
                  }
                  return se(t, r, e, i, s);
                });
              function nE(e, t, s) {
                var n,
                  o,
                  a,
                  c,
                  h,
                  l,
                  u = 0,
                  p = !1,
                  d = !1,
                  f = !0;
                if ("function" != typeof e) throw new eR(r);
                function g(t) {
                  var r = n,
                    s = o;
                  return (n = o = i), (u = t), (c = e.apply(s, r));
                }
                function y(e) {
                  var r = e - l,
                    s = e - u;
                  return l === i || r >= t || r < 0 || (d && s >= a);
                }
                function m() {
                  var e,
                    i,
                    r,
                    s = nm();
                  if (y(s)) return v(s);
                  h = sT(
                    m,
                    ((e = s - l),
                    (i = s - u),
                    (r = t - e),
                    d ? t3(r, a - i) : r)
                  );
                }
                function v(e) {
                  return (h = i), f && n ? g(e) : ((n = o = i), c);
                }
                function w() {
                  var e,
                    r = nm(),
                    s = y(r);
                  if (((n = arguments), (o = this), (l = r), s)) {
                    if (h === i)
                      return (u = e = l), (h = sT(m, t)), p ? g(e) : c;
                    if (d) return rj(h), (h = sT(m, t)), g(l);
                  }
                  return h === i && (h = sT(m, t)), c;
                }
                return (
                  (t = n6(t) || 0),
                  nB(s) &&
                    ((p = !!s.leading),
                    (a = (d = "maxWait" in s) ? t2(n6(s.maxWait) || 0, t) : a),
                    (f = "trailing" in s ? !!s.trailing : f)),
                  (w.cancel = function () {
                    h !== i && rj(h), (u = 0), (n = l = o = h = i);
                  }),
                  (w.flush = function () {
                    return h === i ? c : v(nm());
                  }),
                  w
                );
              }
              var nI = rd(function (e, t) {
                  return ik(e, 1, t);
                }),
                nP = rd(function (e, t, i) {
                  return ik(e, n6(t) || 0, i);
                });
              function nS(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new eR(r);
                var i = function () {
                  var r = arguments,
                    s = t ? t.apply(this, r) : r[0],
                    n = i.cache;
                  if (n.has(s)) return n.get(s);
                  var o = e.apply(this, r);
                  return (i.cache = n.set(s, o) || n), o;
                };
                return (i.cache = new (nS.Cache || iI)()), i;
              }
              function nR(e) {
                if ("function" != typeof e) throw new eR(r);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              nS.Cache = iI;
              var nO = rd(function (e, t) {
                  var i = (t =
                    1 == t.length && nj(t[0])
                      ? tp(t[0], tC(su()))
                      : tp(iB(t, 1), tC(su()))).length;
                  return rd(function (r) {
                    for (var s = -1, n = t3(r.length, i); ++s < n; )
                      r[s] = t[s].call(this, r[s]);
                    return tn(e, this, r);
                  });
                }),
                nx = rd(function (e, t) {
                  var r = tL(t, sl(nx));
                  return se(e, 32, i, t, r);
                }),
                nN = rd(function (e, t) {
                  var r = tL(t, sl(nN));
                  return se(e, 64, i, t, r);
                }),
                nC = sn(function (e, t) {
                  return se(e, 256, i, i, i, t);
                });
              function nA(e, t) {
                return e === t || (e != e && t != t);
              }
              var nT = r8(i0),
                nq = r8(function (e, t) {
                  return e >= t;
                }),
                nD = i8(
                  (function () {
                    return arguments;
                  })()
                )
                  ? i8
                  : function (e) {
                      return (
                        nF(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                      );
                    },
                nj = ev.isArray,
                n$ = e7
                  ? tC(e7)
                  : function (e) {
                      return nF(e) && iX(e) == S;
                    };
              function nU(e) {
                return null != e && nK(e.length) && !nV(e);
              }
              function nk(e) {
                return nF(e) && nU(e);
              }
              var nM = tZ || oY,
                nz = te
                  ? tC(te)
                  : function (e) {
                      return nF(e) && iX(e) == p;
                    };
              function nL(e) {
                if (!nF(e)) return !1;
                var t = iX(e);
                return (
                  t == d ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !nG(e))
                );
              }
              function nV(e) {
                if (!nB(e)) return !1;
                var t = iX(e);
                return (
                  t == f ||
                  t == g ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function nH(e) {
                return "number" == typeof e && e == n8(e);
              }
              function nK(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function nB(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function nF(e) {
                return null != e && "object" == typeof e;
              }
              var nW = tt
                ? tC(tt)
                : function (e) {
                    return nF(e) && sm(e) == y;
                  };
              function nJ(e) {
                return "number" == typeof e || (nF(e) && iX(e) == m);
              }
              function nG(e) {
                if (!nF(e) || iX(e) != v) return !1;
                var t = eF(e);
                if (null === t) return !0;
                var i = eT.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof i && i instanceof i && eA.call(i) == e$
                );
              }
              var nQ = ti
                  ? tC(ti)
                  : function (e) {
                      return nF(e) && iX(e) == b;
                    },
                nY = tr
                  ? tC(tr)
                  : function (e) {
                      return nF(e) && sm(e) == _;
                    };
              function nZ(e) {
                return "string" == typeof e || (!nj(e) && nF(e) && iX(e) == E);
              }
              function nX(e) {
                return "symbol" == typeof e || (nF(e) && iX(e) == I);
              }
              var n0 = ts
                  ? tC(ts)
                  : function (e) {
                      return nF(e) && nK(e.length) && !!eQ[iX(e)];
                    },
                n1 = r8(rt),
                n2 = r8(function (e, t) {
                  return e <= t;
                });
              function n3(e) {
                if (!e) return [];
                if (nU(e)) return nZ(e) ? tK(e) : rV(e);
                if (e8 && e[e8])
                  return (function (e) {
                    for (var t, i = []; !(t = e.next()).done; ) i.push(t.value);
                    return i;
                  })(e[e8]());
                var t = sm(e);
                return (t == y ? tM : t == _ ? tV : o_)(e);
              }
              function n5(e) {
                return e
                  ? (e = n6(e)) === o || e === -o
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function n8(e) {
                var t = n5(e),
                  i = t % 1;
                return t == t ? (i ? t - i : t) : 0;
              }
              function n4(e) {
                return e ? ij(n8(e), 0, 4294967295) : 0;
              }
              function n6(e) {
                if ("number" == typeof e) return e;
                if (nX(e)) return a;
                if (nB(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = nB(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = tN(e);
                var i = ec.test(e);
                return i || el.test(e)
                  ? e0(e.slice(2), i ? 2 : 8)
                  : ea.test(e)
                  ? a
                  : +e;
              }
              function n9(e) {
                return rH(e, od(e));
              }
              function n7(e) {
                return null == e ? "" : rI(e);
              }
              var oe = rB(function (e, t) {
                  if (sR(t) || nU(t)) {
                    rH(t, op(t), e);
                    return;
                  }
                  for (var i in t) eT.call(t, i) && iN(e, i, t[i]);
                }),
                ot = rB(function (e, t) {
                  rH(t, od(t), e);
                }),
                oi = rB(function (e, t, i, r) {
                  rH(t, od(t), e, r);
                }),
                or = rB(function (e, t, i, r) {
                  rH(t, op(t), e, r);
                }),
                os = sn(iD),
                on = rd(function (e, t) {
                  e = eI(e);
                  var r = -1,
                    s = t.length,
                    n = s > 2 ? t[2] : i;
                  for (n && sE(t[0], t[1], n) && (s = 1); ++r < s; )
                    for (
                      var o = t[r], a = od(o), c = -1, h = a.length;
                      ++c < h;

                    ) {
                      var l = a[c],
                        u = e[l];
                      (u === i || (nA(u, eN[l]) && !eT.call(e, l))) &&
                        (e[l] = o[l]);
                    }
                  return e;
                }),
                oo = rd(function (e) {
                  return e.push(i, si), tn(og, i, e);
                });
              function oa(e, t, r) {
                var s = null == e ? i : iY(e, t);
                return s === i ? r : s;
              }
              function oc(e, t) {
                return null != e && sv(e, t, i2);
              }
              var oh = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ej.call(t)),
                    (e[t] = i);
                }, oj(ok)),
                ol = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ej.call(t)),
                    eT.call(e, t) ? e[t].push(i) : (e[t] = [i]);
                }, su),
                ou = rd(i5);
              function op(e) {
                return nU(e) ? iR(e) : re(e);
              }
              function od(e) {
                return nU(e)
                  ? iR(e, !0)
                  : (function (e) {
                      if (!nB(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var i in eI(e)) t.push(i);
                          return t;
                        })(e);
                      var t = sR(e),
                        i = [];
                      for (var r in e)
                        ("constructor" == r && (t || !eT.call(e, r))) ||
                          i.push(r);
                      return i;
                    })(e);
              }
              var of = rB(function (e, t, i) {
                  rn(e, t, i);
                }),
                og = rB(function (e, t, i, r) {
                  rn(e, t, i, r);
                }),
                oy = sn(function (e, t) {
                  var i = {};
                  if (null == e) return i;
                  var r = !1;
                  (t = tp(t, function (t) {
                    return (t = rq(t, e)), r || (r = t.length > 1), t;
                  })),
                    rH(e, sa(e), i),
                    r && (i = i$(i, 7, sr));
                  for (var s = t.length; s--; ) rS(i, t[s]);
                  return i;
                }),
                om = sn(function (e, t) {
                  return null == e
                    ? {}
                    : rc(e, t, function (t, i) {
                        return oc(e, i);
                      });
                });
              function ov(e, t) {
                if (null == e) return {};
                var i = tp(sa(e), function (e) {
                  return [e];
                });
                return (
                  (t = su(t)),
                  rc(e, i, function (e, i) {
                    return t(e, i[0]);
                  })
                );
              }
              var ow = r7(op),
                ob = r7(od);
              function o_(e) {
                return null == e ? [] : tA(e, op(e));
              }
              var oE = rG(function (e, t, i) {
                return (t = t.toLowerCase()), e + (i ? oI(t) : t);
              });
              function oI(e) {
                return oA(n7(e).toLowerCase());
              }
              function oP(e) {
                return (e = n7(e)) && e.replace(ep, tj).replace(eH, "");
              }
              var oS = rG(function (e, t, i) {
                  return e + (i ? "-" : "") + t.toLowerCase();
                }),
                oR = rG(function (e, t, i) {
                  return e + (i ? " " : "") + t.toLowerCase();
                }),
                oO = rJ("toLowerCase"),
                ox = rG(function (e, t, i) {
                  return e + (i ? "_" : "") + t.toLowerCase();
                }),
                oN = rG(function (e, t, i) {
                  return e + (i ? " " : "") + oA(t);
                }),
                oC = rG(function (e, t, i) {
                  return e + (i ? " " : "") + t.toUpperCase();
                }),
                oA = rJ("toUpperCase");
              function oT(e, t, r) {
                var s;
                return (
                  (e = n7(e)),
                  (t = r ? i : t) === i
                    ? ((s = e), eW.test(s))
                      ? e.match(eB) || []
                      : e.match(ei) || []
                    : e.match(t) || []
                );
              }
              var oq = rd(function (e, t) {
                  try {
                    return tn(e, i, t);
                  } catch (e) {
                    return nL(e) ? e : new eb(e);
                  }
                }),
                oD = sn(function (e, t) {
                  return (
                    ta(t, function (t) {
                      iq(e, (t = sk(t)), nb(e[t], e));
                    }),
                    e
                  );
                });
              function oj(e) {
                return function () {
                  return e;
                };
              }
              var o$ = rZ(),
                oU = rZ(!0);
              function ok(e) {
                return e;
              }
              function oM(e) {
                return i7("function" == typeof e ? e : i$(e, 1));
              }
              var oz = rd(function (e, t) {
                  return function (i) {
                    return i5(i, e, t);
                  };
                }),
                oL = rd(function (e, t) {
                  return function (i) {
                    return i5(e, i, t);
                  };
                });
              function oV(e, t, i) {
                var r = op(t),
                  s = iQ(t, r);
                null != i ||
                  (nB(t) && (s.length || !r.length)) ||
                  ((i = t), (t = e), (e = this), (s = iQ(t, op(t))));
                var n = !(nB(i) && "chain" in i) || !!i.chain,
                  o = nV(e);
                return (
                  ta(s, function (i) {
                    var r = t[i];
                    (e[i] = r),
                      o &&
                        (e.prototype[i] = function () {
                          var t = this.__chain__;
                          if (n || t) {
                            var i = e(this.__wrapped__);
                            return (
                              (i.__actions__ = rV(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (i.__chain__ = t),
                              i
                            );
                          }
                          return r.apply(e, td([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function oH() {}
              var oK = r2(tp),
                oB = r2(tc),
                oF = r2(ty);
              function oW(e) {
                return sI(e)
                  ? tP(sk(e))
                  : function (t) {
                      return iY(t, e);
                    };
              }
              var oJ = r5(),
                oG = r5(!0);
              function oQ() {
                return [];
              }
              function oY() {
                return !1;
              }
              var oZ = r1(function (e, t) {
                  return e + t;
                }, 0),
                oX = r6("ceil"),
                o0 = r1(function (e, t) {
                  return e / t;
                }, 1),
                o1 = r6("floor"),
                o2 = r1(function (e, t) {
                  return e * t;
                }, 1),
                o3 = r6("round"),
                o5 = r1(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (iy.after = function (e, t) {
                  if ("function" != typeof t) throw new eR(r);
                  return (
                    (e = n8(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (iy.ary = nv),
                (iy.assign = oe),
                (iy.assignIn = ot),
                (iy.assignInWith = oi),
                (iy.assignWith = or),
                (iy.at = os),
                (iy.before = nw),
                (iy.bind = nb),
                (iy.bindAll = oD),
                (iy.bindKey = n_),
                (iy.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return nj(e) ? e : [e];
                }),
                (iy.chain = nr),
                (iy.chunk = function (e, t, r) {
                  t = (r ? sE(e, t, r) : t === i) ? 1 : t2(n8(t), 0);
                  var s = null == e ? 0 : e.length;
                  if (!s || t < 1) return [];
                  for (var n = 0, o = 0, a = ev(tG(s / t)); n < s; )
                    a[o++] = rm(e, n, (n += t));
                  return a;
                }),
                (iy.compact = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = 0, s = [];
                    ++t < i;

                  ) {
                    var n = e[t];
                    n && (s[r++] = n);
                  }
                  return s;
                }),
                (iy.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = ev(e - 1), i = arguments[0], r = e; r--; )
                    t[r - 1] = arguments[r];
                  return td(nj(i) ? rV(i) : [i], iB(t, 1));
                }),
                (iy.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    i = su();
                  return (
                    (e = t
                      ? tp(e, function (e) {
                          if ("function" != typeof e[1]) throw new eR(r);
                          return [i(e[0]), e[1]];
                        })
                      : []),
                    rd(function (i) {
                      for (var r = -1; ++r < t; ) {
                        var s = e[r];
                        if (tn(s[0], this, i)) return tn(s[1], this, i);
                      }
                    })
                  );
                }),
                (iy.conforms = function (e) {
                  var t, i;
                  return (
                    (i = op((t = i$(e, 1)))),
                    function (e) {
                      return iU(e, t, i);
                    }
                  );
                }),
                (iy.constant = oj),
                (iy.countBy = no),
                (iy.create = function (e, t) {
                  var i = im(e);
                  return null == t ? i : iT(i, t);
                }),
                (iy.curry = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 8, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.curryRight = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 16, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.debounce = nE),
                (iy.defaults = on),
                (iy.defaultsDeep = oo),
                (iy.defer = nI),
                (iy.delay = nP),
                (iy.difference = sL),
                (iy.differenceBy = sV),
                (iy.differenceWith = sH),
                (iy.drop = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(e, (t = r || t === i ? 1 : n8(t)) < 0 ? 0 : t, s)
                    : [];
                }),
                (iy.dropRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        0,
                        (t = s - (t = r || t === i ? 1 : n8(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (iy.dropRightWhile = function (e, t) {
                  return e && e.length ? rO(e, su(t, 3), !0, !0) : [];
                }),
                (iy.dropWhile = function (e, t) {
                  return e && e.length ? rO(e, su(t, 3), !0) : [];
                }),
                (iy.fill = function (e, t, r, s) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? (r &&
                        "number" != typeof r &&
                        sE(e, t, r) &&
                        ((r = 0), (s = n)),
                      (function (e, t, r, s) {
                        var n = e.length;
                        for (
                          (r = n8(r)) < 0 && (r = -r > n ? 0 : n + r),
                            (s = s === i || s > n ? n : n8(s)) < 0 && (s += n),
                            s = r > s ? 0 : n4(s);
                          r < s;

                        )
                          e[r++] = t;
                        return e;
                      })(e, t, r, s))
                    : [];
                }),
                (iy.filter = function (e, t) {
                  return (nj(e) ? th : iK)(e, su(t, 3));
                }),
                (iy.flatMap = function (e, t) {
                  return iB(nf(e, t), 1);
                }),
                (iy.flatMapDeep = function (e, t) {
                  return iB(nf(e, t), o);
                }),
                (iy.flatMapDepth = function (e, t, r) {
                  return (r = r === i ? 1 : n8(r)), iB(nf(e, t), r);
                }),
                (iy.flatten = sF),
                (iy.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? iB(e, o) : [];
                }),
                (iy.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? iB(e, (t = t === i ? 1 : n8(t)))
                    : [];
                }),
                (iy.flip = function (e) {
                  return se(e, 512);
                }),
                (iy.flow = o$),
                (iy.flowRight = oU),
                (iy.fromPairs = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = {};
                    ++t < i;

                  ) {
                    var s = e[t];
                    r[s[0]] = s[1];
                  }
                  return r;
                }),
                (iy.functions = function (e) {
                  return null == e ? [] : iQ(e, op(e));
                }),
                (iy.functionsIn = function (e) {
                  return null == e ? [] : iQ(e, od(e));
                }),
                (iy.groupBy = nu),
                (iy.initial = function (e) {
                  return (null == e ? 0 : e.length) ? rm(e, 0, -1) : [];
                }),
                (iy.intersection = sJ),
                (iy.intersectionBy = sG),
                (iy.intersectionWith = sQ),
                (iy.invert = oh),
                (iy.invertBy = ol),
                (iy.invokeMap = np),
                (iy.iteratee = oM),
                (iy.keyBy = nd),
                (iy.keys = op),
                (iy.keysIn = od),
                (iy.map = nf),
                (iy.mapKeys = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iJ(e, function (e, r, s) {
                      iq(i, t(e, r, s), e);
                    }),
                    i
                  );
                }),
                (iy.mapValues = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iJ(e, function (e, r, s) {
                      iq(i, r, t(e, r, s));
                    }),
                    i
                  );
                }),
                (iy.matches = function (e) {
                  return rr(i$(e, 1));
                }),
                (iy.matchesProperty = function (e, t) {
                  return rs(e, i$(t, 1));
                }),
                (iy.memoize = nS),
                (iy.merge = of),
                (iy.mergeWith = og),
                (iy.method = oz),
                (iy.methodOf = oL),
                (iy.mixin = oV),
                (iy.negate = nR),
                (iy.nthArg = function (e) {
                  return (
                    (e = n8(e)),
                    rd(function (t) {
                      return ro(t, e);
                    })
                  );
                }),
                (iy.omit = oy),
                (iy.omitBy = function (e, t) {
                  return ov(e, nR(su(t)));
                }),
                (iy.once = function (e) {
                  return nw(2, e);
                }),
                (iy.orderBy = function (e, t, r, s) {
                  return null == e
                    ? []
                    : (nj(t) || (t = null == t ? [] : [t]),
                      nj((r = s ? i : r)) || (r = null == r ? [] : [r]),
                      ra(e, t, r));
                }),
                (iy.over = oK),
                (iy.overArgs = nO),
                (iy.overEvery = oB),
                (iy.overSome = oF),
                (iy.partial = nx),
                (iy.partialRight = nN),
                (iy.partition = ng),
                (iy.pick = om),
                (iy.pickBy = ov),
                (iy.property = oW),
                (iy.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? i : iY(e, t);
                  };
                }),
                (iy.pull = sZ),
                (iy.pullAll = sX),
                (iy.pullAllBy = function (e, t, i) {
                  return e && e.length && t && t.length
                    ? rh(e, t, su(i, 2))
                    : e;
                }),
                (iy.pullAllWith = function (e, t, r) {
                  return e && e.length && t && t.length ? rh(e, t, i, r) : e;
                }),
                (iy.pullAt = s0),
                (iy.range = oJ),
                (iy.rangeRight = oG),
                (iy.rearg = nC),
                (iy.reject = function (e, t) {
                  return (nj(e) ? th : iK)(e, nR(su(t, 3)));
                }),
                (iy.remove = function (e, t) {
                  var i = [];
                  if (!(e && e.length)) return i;
                  var r = -1,
                    s = [],
                    n = e.length;
                  for (t = su(t, 3); ++r < n; ) {
                    var o = e[r];
                    t(o, r, e) && (i.push(o), s.push(r));
                  }
                  return rl(e, s), i;
                }),
                (iy.rest = function (e, t) {
                  if ("function" != typeof e) throw new eR(r);
                  return rd(e, (t = t === i ? t : n8(t)));
                }),
                (iy.reverse = s1),
                (iy.sampleSize = function (e, t, r) {
                  return (
                    (t = (r ? sE(e, t, r) : t === i) ? 1 : n8(t)),
                    (nj(e)
                      ? function (e, t) {
                          return s$(rV(e), ij(t, 0, e.length));
                        }
                      : function (e, t) {
                          var i = o_(e);
                          return s$(i, ij(t, 0, i.length));
                        })(e, t)
                  );
                }),
                (iy.set = function (e, t, i) {
                  return null == e ? e : rf(e, t, i);
                }),
                (iy.setWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rf(e, t, r, s)
                  );
                }),
                (iy.shuffle = function (e) {
                  return (
                    nj(e)
                      ? function (e) {
                          return s$(rV(e));
                        }
                      : function (e) {
                          return s$(o_(e));
                        }
                  )(e);
                }),
                (iy.slice = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (r && "number" != typeof r && sE(e, t, r)
                        ? ((t = 0), (r = s))
                        : ((t = null == t ? 0 : n8(t)),
                          (r = r === i ? s : n8(r))),
                      rm(e, t, r))
                    : [];
                }),
                (iy.sortBy = ny),
                (iy.sortedUniq = function (e) {
                  return e && e.length ? r_(e) : [];
                }),
                (iy.sortedUniqBy = function (e, t) {
                  return e && e.length ? r_(e, su(t, 2)) : [];
                }),
                (iy.split = function (e, t, r) {
                  return (
                    r && "number" != typeof r && sE(e, t, r) && (t = r = i),
                    (r = r === i ? 4294967295 : r >>> 0)
                      ? (e = n7(e)) &&
                        ("string" == typeof t || (null != t && !nQ(t))) &&
                        !(t = rI(t)) &&
                        tk(e)
                        ? rD(tK(e), 0, r)
                        : e.split(t, r)
                      : []
                  );
                }),
                (iy.spread = function (e, t) {
                  if ("function" != typeof e) throw new eR(r);
                  return (
                    (t = null == t ? 0 : t2(n8(t), 0)),
                    rd(function (i) {
                      var r = i[t],
                        s = rD(i, 0, t);
                      return r && td(s, r), tn(e, this, s);
                    })
                  );
                }),
                (iy.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? rm(e, 1, t) : [];
                }),
                (iy.take = function (e, t, r) {
                  return e && e.length
                    ? rm(e, 0, (t = r || t === i ? 1 : n8(t)) < 0 ? 0 : t)
                    : [];
                }),
                (iy.takeRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        (t = s - (t = r || t === i ? 1 : n8(t))) < 0 ? 0 : t,
                        s
                      )
                    : [];
                }),
                (iy.takeRightWhile = function (e, t) {
                  return e && e.length ? rO(e, su(t, 3), !1, !0) : [];
                }),
                (iy.takeWhile = function (e, t) {
                  return e && e.length ? rO(e, su(t, 3)) : [];
                }),
                (iy.tap = function (e, t) {
                  return t(e), e;
                }),
                (iy.throttle = function (e, t, i) {
                  var s = !0,
                    n = !0;
                  if ("function" != typeof e) throw new eR(r);
                  return (
                    nB(i) &&
                      ((s = "leading" in i ? !!i.leading : s),
                      (n = "trailing" in i ? !!i.trailing : n)),
                    nE(e, t, { leading: s, maxWait: t, trailing: n })
                  );
                }),
                (iy.thru = ns),
                (iy.toArray = n3),
                (iy.toPairs = ow),
                (iy.toPairsIn = ob),
                (iy.toPath = function (e) {
                  return nj(e) ? tp(e, sk) : nX(e) ? [e] : rV(sU(n7(e)));
                }),
                (iy.toPlainObject = n9),
                (iy.transform = function (e, t, i) {
                  var r = nj(e),
                    s = r || nM(e) || n0(e);
                  if (((t = su(t, 4)), null == i)) {
                    var n = e && e.constructor;
                    i = s
                      ? r
                        ? new n()
                        : []
                      : nB(e) && nV(n)
                      ? im(eF(e))
                      : {};
                  }
                  return (
                    (s ? ta : iJ)(e, function (e, r, s) {
                      return t(i, e, r, s);
                    }),
                    i
                  );
                }),
                (iy.unary = function (e) {
                  return nv(e, 1);
                }),
                (iy.union = s2),
                (iy.unionBy = s3),
                (iy.unionWith = s5),
                (iy.uniq = function (e) {
                  return e && e.length ? rP(e) : [];
                }),
                (iy.uniqBy = function (e, t) {
                  return e && e.length ? rP(e, su(t, 2)) : [];
                }),
                (iy.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : i),
                    e && e.length ? rP(e, i, t) : []
                  );
                }),
                (iy.unset = function (e, t) {
                  return null == e || rS(e, t);
                }),
                (iy.unzip = s8),
                (iy.unzipWith = s4),
                (iy.update = function (e, t, i) {
                  return null == e ? e : rR(e, t, rT(i));
                }),
                (iy.updateWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rR(e, t, rT(r), s)
                  );
                }),
                (iy.values = o_),
                (iy.valuesIn = function (e) {
                  return null == e ? [] : tA(e, od(e));
                }),
                (iy.without = s6),
                (iy.words = oT),
                (iy.wrap = function (e, t) {
                  return nx(rT(t), e);
                }),
                (iy.xor = s9),
                (iy.xorBy = s7),
                (iy.xorWith = ne),
                (iy.zip = nt),
                (iy.zipObject = function (e, t) {
                  return rC(e || [], t || [], iN);
                }),
                (iy.zipObjectDeep = function (e, t) {
                  return rC(e || [], t || [], rf);
                }),
                (iy.zipWith = ni),
                (iy.entries = ow),
                (iy.entriesIn = ob),
                (iy.extend = ot),
                (iy.extendWith = oi),
                oV(iy, iy),
                (iy.add = oZ),
                (iy.attempt = oq),
                (iy.camelCase = oE),
                (iy.capitalize = oI),
                (iy.ceil = oX),
                (iy.clamp = function (e, t, r) {
                  return (
                    r === i && ((r = t), (t = i)),
                    r !== i && (r = (r = n6(r)) == r ? r : 0),
                    t !== i && (t = (t = n6(t)) == t ? t : 0),
                    ij(n6(e), t, r)
                  );
                }),
                (iy.clone = function (e) {
                  return i$(e, 4);
                }),
                (iy.cloneDeep = function (e) {
                  return i$(e, 5);
                }),
                (iy.cloneDeepWith = function (e, t) {
                  return i$(e, 5, (t = "function" == typeof t ? t : i));
                }),
                (iy.cloneWith = function (e, t) {
                  return i$(e, 4, (t = "function" == typeof t ? t : i));
                }),
                (iy.conformsTo = function (e, t) {
                  return null == t || iU(e, t, op(t));
                }),
                (iy.deburr = oP),
                (iy.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (iy.divide = o0),
                (iy.endsWith = function (e, t, r) {
                  (e = n7(e)), (t = rI(t));
                  var s = e.length,
                    n = (r = r === i ? s : ij(n8(r), 0, s));
                  return (r -= t.length) >= 0 && e.slice(r, n) == t;
                }),
                (iy.eq = nA),
                (iy.escape = function (e) {
                  return (e = n7(e)) && V.test(e) ? e.replace(z, t$) : e;
                }),
                (iy.escapeRegExp = function (e) {
                  return (e = n7(e)) && Q.test(e) ? e.replace(G, "\\$&") : e;
                }),
                (iy.every = function (e, t, r) {
                  var s = nj(e) ? tc : iV;
                  return r && sE(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.find = na),
                (iy.findIndex = sK),
                (iy.findKey = function (e, t) {
                  return tv(e, su(t, 3), iJ);
                }),
                (iy.findLast = nc),
                (iy.findLastIndex = sB),
                (iy.findLastKey = function (e, t) {
                  return tv(e, su(t, 3), iG);
                }),
                (iy.floor = o1),
                (iy.forEach = nh),
                (iy.forEachRight = nl),
                (iy.forIn = function (e, t) {
                  return null == e ? e : iF(e, su(t, 3), od);
                }),
                (iy.forInRight = function (e, t) {
                  return null == e ? e : iW(e, su(t, 3), od);
                }),
                (iy.forOwn = function (e, t) {
                  return e && iJ(e, su(t, 3));
                }),
                (iy.forOwnRight = function (e, t) {
                  return e && iG(e, su(t, 3));
                }),
                (iy.get = oa),
                (iy.gt = nT),
                (iy.gte = nq),
                (iy.has = function (e, t) {
                  return null != e && sv(e, t, i1);
                }),
                (iy.hasIn = oc),
                (iy.head = sW),
                (iy.identity = ok),
                (iy.includes = function (e, t, i, r) {
                  (e = nU(e) ? e : o_(e)), (i = i && !r ? n8(i) : 0);
                  var s = e.length;
                  return (
                    i < 0 && (i = t2(s + i, 0)),
                    nZ(e)
                      ? i <= s && e.indexOf(t, i) > -1
                      : !!s && tb(e, t, i) > -1
                  );
                }),
                (iy.indexOf = function (e, t, i) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var s = null == i ? 0 : n8(i);
                  return s < 0 && (s = t2(r + s, 0)), tb(e, t, s);
                }),
                (iy.inRange = function (e, t, r) {
                  var s, n, o;
                  return (
                    (t = n5(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n5(r)),
                    (s = e = n6(e)) >= t3((n = t), (o = r)) && s < t2(n, o)
                  );
                }),
                (iy.invoke = ou),
                (iy.isArguments = nD),
                (iy.isArray = nj),
                (iy.isArrayBuffer = n$),
                (iy.isArrayLike = nU),
                (iy.isArrayLikeObject = nk),
                (iy.isBoolean = function (e) {
                  return !0 === e || !1 === e || (nF(e) && iX(e) == u);
                }),
                (iy.isBuffer = nM),
                (iy.isDate = nz),
                (iy.isElement = function (e) {
                  return nF(e) && 1 === e.nodeType && !nG(e);
                }),
                (iy.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    nU(e) &&
                    (nj(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      nM(e) ||
                      n0(e) ||
                      nD(e))
                  )
                    return !e.length;
                  var t = sm(e);
                  if (t == y || t == _) return !e.size;
                  if (sR(e)) return !re(e).length;
                  for (var i in e) if (eT.call(e, i)) return !1;
                  return !0;
                }),
                (iy.isEqual = function (e, t) {
                  return i4(e, t);
                }),
                (iy.isEqualWith = function (e, t, r) {
                  var s = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                  return s === i ? i4(e, t, i, r) : !!s;
                }),
                (iy.isError = nL),
                (iy.isFinite = function (e) {
                  return "number" == typeof e && tX(e);
                }),
                (iy.isFunction = nV),
                (iy.isInteger = nH),
                (iy.isLength = nK),
                (iy.isMap = nW),
                (iy.isMatch = function (e, t) {
                  return e === t || i6(e, t, sd(t));
                }),
                (iy.isMatchWith = function (e, t, r) {
                  return (
                    (r = "function" == typeof r ? r : i), i6(e, t, sd(t), r)
                  );
                }),
                (iy.isNaN = function (e) {
                  return nJ(e) && e != +e;
                }),
                (iy.isNative = function (e) {
                  if (sS(e))
                    throw new eb(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return i9(e);
                }),
                (iy.isNil = function (e) {
                  return null == e;
                }),
                (iy.isNull = function (e) {
                  return null === e;
                }),
                (iy.isNumber = nJ),
                (iy.isObject = nB),
                (iy.isObjectLike = nF),
                (iy.isPlainObject = nG),
                (iy.isRegExp = nQ),
                (iy.isSafeInteger = function (e) {
                  return (
                    nH(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (iy.isSet = nY),
                (iy.isString = nZ),
                (iy.isSymbol = nX),
                (iy.isTypedArray = n0),
                (iy.isUndefined = function (e) {
                  return e === i;
                }),
                (iy.isWeakMap = function (e) {
                  return nF(e) && sm(e) == P;
                }),
                (iy.isWeakSet = function (e) {
                  return nF(e) && "[object WeakSet]" == iX(e);
                }),
                (iy.join = function (e, t) {
                  return null == e ? "" : t0.call(e, t);
                }),
                (iy.kebabCase = oS),
                (iy.last = sY),
                (iy.lastIndexOf = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  if (!s) return -1;
                  var n = s;
                  return (
                    r !== i &&
                      (n = (n = n8(r)) < 0 ? t2(s + n, 0) : t3(n, s - 1)),
                    t == t
                      ? (function (e, t, i) {
                          for (var r = i + 1; r-- && e[r] !== t; );
                          return r;
                        })(e, t, n)
                      : tw(e, tE, n, !0)
                  );
                }),
                (iy.lowerCase = oR),
                (iy.lowerFirst = oO),
                (iy.lt = n1),
                (iy.lte = n2),
                (iy.max = function (e) {
                  return e && e.length ? iH(e, ok, i0) : i;
                }),
                (iy.maxBy = function (e, t) {
                  return e && e.length ? iH(e, su(t, 2), i0) : i;
                }),
                (iy.mean = function (e) {
                  return tI(e, ok);
                }),
                (iy.meanBy = function (e, t) {
                  return tI(e, su(t, 2));
                }),
                (iy.min = function (e) {
                  return e && e.length ? iH(e, ok, rt) : i;
                }),
                (iy.minBy = function (e, t) {
                  return e && e.length ? iH(e, su(t, 2), rt) : i;
                }),
                (iy.stubArray = oQ),
                (iy.stubFalse = oY),
                (iy.stubObject = function () {
                  return {};
                }),
                (iy.stubString = function () {
                  return "";
                }),
                (iy.stubTrue = function () {
                  return !0;
                }),
                (iy.multiply = o2),
                (iy.nth = function (e, t) {
                  return e && e.length ? ro(e, n8(t)) : i;
                }),
                (iy.noConflict = function () {
                  return e3._ === this && (e3._ = eU), this;
                }),
                (iy.noop = oH),
                (iy.now = nm),
                (iy.pad = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n8(t)) ? tH(e) : 0;
                  if (!t || r >= t) return e;
                  var s = (t - r) / 2;
                  return r3(tQ(s), i) + e + r3(tG(s), i);
                }),
                (iy.padEnd = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n8(t)) ? tH(e) : 0;
                  return t && r < t ? e + r3(t - r, i) : e;
                }),
                (iy.padStart = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n8(t)) ? tH(e) : 0;
                  return t && r < t ? r3(t - r, i) + e : e;
                }),
                (iy.parseInt = function (e, t, i) {
                  return (
                    i || null == t ? (t = 0) : t && (t = +t),
                    t8(n7(e).replace(Y, ""), t || 0)
                  );
                }),
                (iy.random = function (e, t, r) {
                  if (
                    (r && "boolean" != typeof r && sE(e, t, r) && (t = r = i),
                    r === i &&
                      ("boolean" == typeof t
                        ? ((r = t), (t = i))
                        : "boolean" == typeof e && ((r = e), (e = i))),
                    e === i && t === i
                      ? ((e = 0), (t = 1))
                      : ((e = n5(e)),
                        t === i ? ((t = e), (e = 0)) : (t = n5(t))),
                    e > t)
                  ) {
                    var s = e;
                    (e = t), (t = s);
                  }
                  if (r || e % 1 || t % 1) {
                    var n = t4();
                    return t3(
                      e + n * (t - e + eX("1e-" + ((n + "").length - 1))),
                      t
                    );
                  }
                  return ru(e, t);
                }),
                (iy.reduce = function (e, t, i) {
                  var r = nj(e) ? tf : tR,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iz);
                }),
                (iy.reduceRight = function (e, t, i) {
                  var r = nj(e) ? tg : tR,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iL);
                }),
                (iy.repeat = function (e, t, r) {
                  return (
                    (t = (r ? sE(e, t, r) : t === i) ? 1 : n8(t)), rp(n7(e), t)
                  );
                }),
                (iy.replace = function () {
                  var e = arguments,
                    t = n7(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (iy.result = function (e, t, r) {
                  t = rq(t, e);
                  var s = -1,
                    n = t.length;
                  for (n || ((n = 1), (e = i)); ++s < n; ) {
                    var o = null == e ? i : e[sk(t[s])];
                    o === i && ((s = n), (o = r)), (e = nV(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (iy.round = o3),
                (iy.runInContext = e),
                (iy.sample = function (e) {
                  return (
                    nj(e)
                      ? iO
                      : function (e) {
                          return iO(o_(e));
                        }
                  )(e);
                }),
                (iy.size = function (e) {
                  if (null == e) return 0;
                  if (nU(e)) return nZ(e) ? tH(e) : e.length;
                  var t = sm(e);
                  return t == y || t == _ ? e.size : re(e).length;
                }),
                (iy.snakeCase = ox),
                (iy.some = function (e, t, r) {
                  var s = nj(e) ? ty : rv;
                  return r && sE(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.sortedIndex = function (e, t) {
                  return rw(e, t);
                }),
                (iy.sortedIndexBy = function (e, t, i) {
                  return rb(e, t, su(i, 2));
                }),
                (iy.sortedIndexOf = function (e, t) {
                  var i = null == e ? 0 : e.length;
                  if (i) {
                    var r = rw(e, t);
                    if (r < i && nA(e[r], t)) return r;
                  }
                  return -1;
                }),
                (iy.sortedLastIndex = function (e, t) {
                  return rw(e, t, !0);
                }),
                (iy.sortedLastIndexBy = function (e, t, i) {
                  return rb(e, t, su(i, 2), !0);
                }),
                (iy.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var i = rw(e, t, !0) - 1;
                    if (nA(e[i], t)) return i;
                  }
                  return -1;
                }),
                (iy.startCase = oN),
                (iy.startsWith = function (e, t, i) {
                  return (
                    (e = n7(e)),
                    (i = null == i ? 0 : ij(n8(i), 0, e.length)),
                    (t = rI(t)),
                    e.slice(i, i + t.length) == t
                  );
                }),
                (iy.subtract = o5),
                (iy.sum = function (e) {
                  return e && e.length ? tO(e, ok) : 0;
                }),
                (iy.sumBy = function (e, t) {
                  return e && e.length ? tO(e, su(t, 2)) : 0;
                }),
                (iy.template = function (e, t, r) {
                  var s = iy.templateSettings;
                  r && sE(e, t, r) && (t = i),
                    (e = n7(e)),
                    (t = oi({}, t, s, st));
                  var n,
                    o,
                    a = oi({}, t.imports, s.imports, st),
                    c = op(a),
                    h = tA(a, c),
                    l = 0,
                    u = t.interpolate || ed,
                    p = "__p += '",
                    d = eP(
                      (t.escape || ed).source +
                        "|" +
                        u.source +
                        "|" +
                        (u === B ? en : ed).source +
                        "|" +
                        (t.evaluate || ed).source +
                        "|$",
                      "g"
                    ),
                    f =
                      "//# sourceURL=" +
                      (eT.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++eG + "]") +
                      `
`;
                  e.replace(d, function (t, i, r, s, a, c) {
                    return (
                      r || (r = s),
                      (p += e.slice(l, c).replace(ef, tU)),
                      i &&
                        ((n = !0),
                        (p +=
                          `' +
__e(` +
                          i +
                          `) +
'`)),
                      a &&
                        ((o = !0),
                        (p +=
                          `';
` +
                          a +
                          `;
__p += '`)),
                      r &&
                        (p +=
                          `' +
((__t = (` +
                          r +
                          `)) == null ? '' : __t) +
'`),
                      (l = c + t.length),
                      t
                    );
                  }),
                    (p += `';
`);
                  var g = eT.call(t, "variable") && t.variable;
                  if (g) {
                    if (er.test(g))
                      throw new eb(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    p =
                      `with (obj) {
` +
                      p +
                      `
}
`;
                  (p = (o ? p.replace($, "") : p)
                    .replace(U, "$1")
                    .replace(k, "$1;")),
                    (p =
                      "function(" +
                      (g || "obj") +
                      `) {
` +
                      (g
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (n ? ", __e = _.escape" : "") +
                      (o
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      p +
                      `return __p
}`);
                  var y = oq(function () {
                    return e_(c, f + "return " + p).apply(i, h);
                  });
                  if (((y.source = p), nL(y))) throw y;
                  return y;
                }),
                (iy.times = function (e, t) {
                  if ((e = n8(e)) < 1 || e > 9007199254740991) return [];
                  var i = 4294967295,
                    r = t3(e, 4294967295);
                  (t = su(t)), (e -= 4294967295);
                  for (var s = tx(r, t); ++i < e; ) t(i);
                  return s;
                }),
                (iy.toFinite = n5),
                (iy.toInteger = n8),
                (iy.toLength = n4),
                (iy.toLower = function (e) {
                  return n7(e).toLowerCase();
                }),
                (iy.toNumber = n6),
                (iy.toSafeInteger = function (e) {
                  return e
                    ? ij(n8(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (iy.toString = n7),
                (iy.toUpper = function (e) {
                  return n7(e).toUpperCase();
                }),
                (iy.trim = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return tN(e);
                  if (!e || !(t = rI(t))) return e;
                  var s = tK(e),
                    n = tK(t),
                    o = tq(s, n),
                    a = tD(s, n) + 1;
                  return rD(s, o, a).join("");
                }),
                (iy.trimEnd = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i))
                    return e.slice(0, tB(e) + 1);
                  if (!e || !(t = rI(t))) return e;
                  var s = tK(e),
                    n = tD(s, tK(t)) + 1;
                  return rD(s, 0, n).join("");
                }),
                (iy.trimStart = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return e.replace(Y, "");
                  if (!e || !(t = rI(t))) return e;
                  var s = tK(e),
                    n = tq(s, tK(t));
                  return rD(s, n).join("");
                }),
                (iy.truncate = function (e, t) {
                  var r = 30,
                    s = "...";
                  if (nB(t)) {
                    var n = "separator" in t ? t.separator : n;
                    (r = "length" in t ? n8(t.length) : r),
                      (s = "omission" in t ? rI(t.omission) : s);
                  }
                  var o = (e = n7(e)).length;
                  if (tk(e)) {
                    var a = tK(e);
                    o = a.length;
                  }
                  if (r >= o) return e;
                  var c = r - tH(s);
                  if (c < 1) return s;
                  var h = a ? rD(a, 0, c).join("") : e.slice(0, c);
                  if (n === i) return h + s;
                  if ((a && (c += h.length - c), nQ(n))) {
                    if (e.slice(c).search(n)) {
                      var l,
                        u = h;
                      for (
                        n.global || (n = eP(n.source, n7(eo.exec(n)) + "g")),
                          n.lastIndex = 0;
                        (l = n.exec(u));

                      )
                        var p = l.index;
                      h = h.slice(0, p === i ? c : p);
                    }
                  } else if (e.indexOf(rI(n), c) != c) {
                    var d = h.lastIndexOf(n);
                    d > -1 && (h = h.slice(0, d));
                  }
                  return h + s;
                }),
                (iy.unescape = function (e) {
                  return (e = n7(e)) && L.test(e) ? e.replace(M, tF) : e;
                }),
                (iy.uniqueId = function (e) {
                  var t = ++eq;
                  return n7(e) + t;
                }),
                (iy.upperCase = oC),
                (iy.upperFirst = oA),
                (iy.each = nh),
                (iy.eachRight = nl),
                (iy.first = sW),
                oV(
                  iy,
                  ((em = {}),
                  iJ(iy, function (e, t) {
                    eT.call(iy.prototype, t) || (em[t] = e);
                  }),
                  em),
                  { chain: !1 }
                ),
                (iy.VERSION = "4.17.21"),
                ta(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    iy[e].placeholder = iy;
                  }
                ),
                ta(["drop", "take"], function (e, t) {
                  (ib.prototype[e] = function (r) {
                    r = r === i ? 1 : t2(n8(r), 0);
                    var s =
                      this.__filtered__ && !t ? new ib(this) : this.clone();
                    return (
                      s.__filtered__
                        ? (s.__takeCount__ = t3(r, s.__takeCount__))
                        : s.__views__.push({
                            size: t3(r, 4294967295),
                            type: e + (s.__dir__ < 0 ? "Right" : ""),
                          }),
                      s
                    );
                  }),
                    (ib.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                ta(["filter", "map", "takeWhile"], function (e, t) {
                  var i = t + 1,
                    r = 1 == i || 3 == i;
                  ib.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: su(e, 3), type: i }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                ta(["head", "last"], function (e, t) {
                  var i = "take" + (t ? "Right" : "");
                  ib.prototype[e] = function () {
                    return this[i](1).value()[0];
                  };
                }),
                ta(["initial", "tail"], function (e, t) {
                  var i = "drop" + (t ? "" : "Right");
                  ib.prototype[e] = function () {
                    return this.__filtered__ ? new ib(this) : this[i](1);
                  };
                }),
                (ib.prototype.compact = function () {
                  return this.filter(ok);
                }),
                (ib.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (ib.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (ib.prototype.invokeMap = rd(function (e, t) {
                  return "function" == typeof e
                    ? new ib(this)
                    : this.map(function (i) {
                        return i5(i, e, t);
                      });
                })),
                (ib.prototype.reject = function (e) {
                  return this.filter(nR(su(e)));
                }),
                (ib.prototype.slice = function (e, t) {
                  e = n8(e);
                  var r = this;
                  return r.__filtered__ && (e > 0 || t < 0)
                    ? new ib(r)
                    : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                      t !== i &&
                        (r = (t = n8(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                      r);
                }),
                (ib.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (ib.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                iJ(ib.prototype, function (e, t) {
                  var r = /^(?:filter|find|map|reject)|While$/.test(t),
                    s = /^(?:head|last)$/.test(t),
                    n = iy[s ? "take" + ("last" == t ? "Right" : "") : t],
                    o = s || /^find/.test(t);
                  n &&
                    (iy.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = s ? [1] : arguments,
                        c = t instanceof ib,
                        h = a[0],
                        l = c || nj(t),
                        u = function (e) {
                          var t = n.apply(iy, td([e], a));
                          return s && p ? t[0] : t;
                        };
                      l &&
                        r &&
                        "function" == typeof h &&
                        1 != h.length &&
                        (c = l = !1);
                      var p = this.__chain__,
                        d = !!this.__actions__.length,
                        f = o && !p,
                        g = c && !d;
                      if (!o && l) {
                        t = g ? t : new ib(this);
                        var y = e.apply(t, a);
                        return (
                          y.__actions__.push({
                            func: ns,
                            args: [u],
                            thisArg: i,
                          }),
                          new iw(y, p)
                        );
                      }
                      return f && g
                        ? e.apply(this, a)
                        : ((y = this.thru(u)),
                          f ? (s ? y.value()[0] : y.value()) : y);
                    });
                }),
                ta(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = eO[e],
                      i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    iy.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var s = this.value();
                        return t.apply(nj(s) ? s : [], e);
                      }
                      return this[i](function (i) {
                        return t.apply(nj(i) ? i : [], e);
                      });
                    };
                  }
                ),
                iJ(ib.prototype, function (e, t) {
                  var i = iy[t];
                  if (i) {
                    var r = i.name + "";
                    eT.call(io, r) || (io[r] = []),
                      io[r].push({ name: t, func: i });
                  }
                }),
                (io[rX(i, 2).name] = [{ name: "wrapper", func: i }]),
                (ib.prototype.clone = function () {
                  var e = new ib(this.__wrapped__);
                  return (
                    (e.__actions__ = rV(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = rV(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = rV(this.__views__)),
                    e
                  );
                }),
                (ib.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new ib(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (ib.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    i = nj(e),
                    r = t < 0,
                    s = i ? e.length : 0,
                    n = (function (e, t, i) {
                      for (var r = -1, s = i.length; ++r < s; ) {
                        var n = i[r],
                          o = n.size;
                        switch (n.type) {
                          case "drop":
                            e += o;
                            break;
                          case "dropRight":
                            t -= o;
                            break;
                          case "take":
                            t = t3(t, e + o);
                            break;
                          case "takeRight":
                            e = t2(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, s, this.__views__),
                    o = n.start,
                    a = n.end,
                    c = a - o,
                    h = r ? a : o - 1,
                    l = this.__iteratees__,
                    u = l.length,
                    p = 0,
                    d = t3(c, this.__takeCount__);
                  if (!i || (!r && s == c && d == c))
                    return rx(e, this.__actions__);
                  var f = [];
                  e: for (; c-- && p < d; ) {
                    h += t;
                    for (var g = -1, y = e[h]; ++g < u; ) {
                      var m = l[g],
                        v = m.iteratee,
                        w = m.type,
                        b = v(y);
                      if (2 == w) y = b;
                      else if (!b) {
                        if (1 == w) continue e;
                        break e;
                      }
                    }
                    f[p++] = y;
                  }
                  return f;
                }),
                (iy.prototype.at = nn),
                (iy.prototype.chain = function () {
                  return nr(this);
                }),
                (iy.prototype.commit = function () {
                  return new iw(this.value(), this.__chain__);
                }),
                (iy.prototype.next = function () {
                  this.__values__ === i && (this.__values__ = n3(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? i : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (iy.prototype.plant = function (e) {
                  for (var t, r = this; r instanceof iv; ) {
                    var s = sz(r);
                    (s.__index__ = 0),
                      (s.__values__ = i),
                      t ? (n.__wrapped__ = s) : (t = s);
                    var n = s;
                    r = r.__wrapped__;
                  }
                  return (n.__wrapped__ = e), t;
                }),
                (iy.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof ib) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new ib(this)),
                      (t = t.reverse()).__actions__.push({
                        func: ns,
                        args: [s1],
                        thisArg: i,
                      }),
                      new iw(t, this.__chain__)
                    );
                  }
                  return this.thru(s1);
                }),
                (iy.prototype.toJSON =
                  iy.prototype.valueOf =
                  iy.prototype.value =
                    function () {
                      return rx(this.__wrapped__, this.__actions__);
                    }),
                (iy.prototype.first = iy.prototype.head),
                e8 &&
                  (iy.prototype[e8] = function () {
                    return this;
                  }),
                iy
              );
            })();
          e8 ? (((e8.exports = tW)._ = tW), (e5._ = tW)) : (e3._ = tW);
        }.call(rw));
      })(rb, rb.exports);
      var r_ = Object.defineProperty,
        rE = Object.defineProperties,
        rI = Object.getOwnPropertyDescriptors,
        rP = Object.getOwnPropertySymbols,
        rS = Object.prototype.hasOwnProperty,
        rR = Object.prototype.propertyIsEnumerable,
        rO = (e, t, i) =>
          t in e
            ? r_(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        rx = (e, t) => {
          for (var i in t || (t = {})) rS.call(t, i) && rO(e, i, t[i]);
          if (rP) for (var i of rP(t)) rR.call(t, i) && rO(e, i, t[i]);
          return e;
        },
        rN = (e, t) => rE(e, rI(t));
      function rC(e, t, i) {
        var r;
        let s = (function (e) {
          let [t, i] = e.split(":");
          return { namespace: t, reference: i };
        })(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${s.namespace}:${s.reference}&projectId=${i}`
        );
      }
      function rA(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function rT(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function rq(e = {}, t = {}) {
        let i = rD(e),
          r = rD(t);
        return rb.exports.merge(i, r);
      }
      function rD(e) {
        var t, i, r, s;
        let n = {};
        if (!e_(e)) return n;
        for (let [o, a] of Object.entries(e)) {
          let e = ef(o) ? [o] : a.chains,
            c = a.methods || [],
            h = a.events || [],
            l = a.rpcMap || {},
            u = eg(o);
          n[u] = rN(rx(rx({}, n[u]), a), {
            chains: Z(e, null == (t = n[u]) ? void 0 : t.chains),
            methods: Z(c, null == (i = n[u]) ? void 0 : i.methods),
            events: Z(h, null == (r = n[u]) ? void 0 : r.events),
            rpcMap: rx(rx({}, l), null == (s = n[u]) ? void 0 : s.rpcMap),
          });
        }
        return n;
      }
      function rj(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function r$(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let rU = {},
        rk = (e) => rU[e],
        rM = (e, t) => {
          rU[e] = t;
        };
      class rz {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = rA(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rL {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(rv, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let i =
            t ||
            rC(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.k(i, rk("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = parseInt(rA(t));
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let r = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class rV {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = rA(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rH {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = rA(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rK {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                r = rA(t);
              e[r] = this.createHttpProvider(r, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rB {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = rA(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rF {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(rv, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = rA(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      class rW {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = rk("events")),
            (this.client = rk("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || rC(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(rv, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || rC(e, this.namespace);
          return typeof i > "u"
            ? void 0
            : new e3(new rg.Z(i, rk("disableProviderPing")));
        }
      }
      var rJ = Object.defineProperty,
        rG = Object.defineProperties,
        rQ = Object.getOwnPropertyDescriptors,
        rY = Object.getOwnPropertySymbols,
        rZ = Object.prototype.hasOwnProperty,
        rX = Object.prototype.propertyIsEnumerable,
        r0 = (e, t, i) =>
          t in e
            ? rJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        r1 = (e, t) => {
          for (var i in t || (t = {})) rZ.call(t, i) && r0(e, i, t[i]);
          if (rY) for (var i of rY(t)) rX.call(t, i) && r0(e, i, t[i]);
          return e;
        },
        r2 = (e, t) => rG(e, rQ(t));
      class r3 {
        constructor(e) {
          (this.events = new (s())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, ez.gw)((0, ez.jI)({ level: e?.logger || ry }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new r3(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [r, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: r1({}, e),
            chainId: `${r}:${s}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, r) {
          let s = new Date().getTime();
          this.request(e, i, r)
            .then((e) => t(null, (0, e2.formatJsonRpcResult)(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: ew("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: i, approval: r } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            i && ((this.uri = i), this.events.emit("display_uri", i)),
              await r()
                .then((e) => {
                  this.session = e;
                  let t = (function (e) {
                    let t = {};
                    for (let [i, r] of Object.entries(e)) {
                      let e = r.methods || [],
                        s = r.events || [],
                        n = r.accounts || [],
                        o = ef(i) ? [i] : r.chains ? r.chains : rT(r.accounts);
                      t[i] = { chains: o, methods: e, events: s, accounts: n };
                    }
                    return t;
                  })(e.namespaces);
                  (this.namespaces = rq(this.namespaces, t)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== i8) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, r] = this.validateChain(e);
            this.getProvider(i).setDefaultChain(r, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (eb(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    i.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await rf.init({
              logger: this.providerOpts.logger || ry,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => eg(e))),
          ];
          rM("client", this.client),
            rM("events", this.events),
            rM("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!i.length) return [];
                  let r = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      r.push(...i);
                    }),
                    r
                  );
                })(e, this.session),
                i = rT(t),
                r = r2(
                  r1({}, rq(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: i }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new rL({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[e] = new rV({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new rH({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new rz({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new rK({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new rB({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new rF({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[e] = new rW({ namespace: r });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: t } = e,
                { event: i } = t;
              if ("accountsChanged" === i.name) {
                let e = i.data;
                e && eb(e) && this.events.emit("accountsChanged", e.map(rj));
              } else if ("chainChanged" === i.name) {
                let e = t.chainId,
                  i = t.event.data,
                  r = eg(e),
                  s = r$(e) !== r$(i) ? `${r}:${r$(i)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(i.name, i.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var i;
              let { namespaces: r } = t,
                s = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = r2(r1({}, s), { namespaces: r })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  r2(r1({}, ew("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(rv, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: i,
            sessionProperties: r,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            i && Object.keys(i).length && (this.optionalNamespaces = i),
            (this.sessionProperties = r),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", i);
        }
        validateChain(e) {
          let [t, i] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => eg(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let r = eg(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[r].getDefaultChain();
          return [r, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, r] = this.validateChain(e);
          r &&
            (t || this.getProvider(i).setDefaultChain(r),
            this.namespaces[i]
              ? (this.namespaces[i].defaultChain = r)
              : this.namespaces[`${i}:${r}`]
              ? (this.namespaces[`${i}:${r}`].defaultChain = r)
              : (this.namespaces[`${i}:${r}`] = { defaultChain: r }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", r));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${rm}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${rm}/${e}`);
        }
      }
      let r5 = ["eth_sendTransaction", "personal_sign"],
        r8 = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        r4 = ["chainChanged", "accountsChanged"],
        r6 = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var r9 = Object.defineProperty,
        r7 = Object.defineProperties,
        se = Object.getOwnPropertyDescriptors,
        st = Object.getOwnPropertySymbols,
        si = Object.prototype.hasOwnProperty,
        sr = Object.prototype.propertyIsEnumerable,
        ss = (e, t, i) =>
          t in e
            ? r9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        sn = (e, t) => {
          for (var i in t || (t = {})) si.call(t, i) && ss(e, i, t[i]);
          if (st) for (var i of st(t)) sr.call(t, i) && ss(e, i, t[i]);
          return e;
        },
        so = (e, t) => r7(e, se(t));
      function sa(e) {
        return Number(e[0].split(":")[1]);
      }
      function sc(e) {
        return `0x${e.toString(16)}`;
      }
      class sh {
        constructor() {
          (this.events = new r.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new sh();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, i) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: i } = (function (e) {
            let {
              chains: t,
              optionalChains: i,
              methods: r,
              optionalMethods: s,
              events: n,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!eb(t)) throw Error("Invalid chains");
            let c = {
                chains: t,
                methods: r || r5,
                events: n || r4,
                rpcMap: sn({}, t.length ? { [sa(t)]: a[sa(t)] } : {}),
              },
              h = n?.filter((e) => !r4.includes(e)),
              l = r?.filter((e) => !r5.includes(e));
            if (
              !i &&
              !o &&
              !s &&
              !(null != h && h.length) &&
              !(null != l && l.length)
            )
              return { required: t.length ? c : void 0 };
            let u = {
              chains: [
                ...new Set(
                  (h?.length && l?.length) || !i ? c.chains.concat(i || []) : i
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != s && s.length ? s : r8)),
              ],
              events: [
                ...new Set(c.events.concat(null != o && o.length ? o : r6)),
              ],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: i.length ? u : void 0,
            };
          })(this.rpc);
          try {
            let r = await new Promise(async (r, s) => {
              var n;
              this.rpc.showQrModal &&
                (null == (n = this.modal) ||
                  n.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    so(
                      sn(
                        { namespaces: sn({}, t && { [this.namespace]: t }) },
                        i && { optionalNamespaces: { [this.namespace]: i } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    r(e);
                  })
                  .catch((e) => {
                    s(Error(e.message));
                  });
            });
            if (!r) return;
            let s = (function (e, t = []) {
              let i = [];
              return (
                Object.keys(e).forEach((r) => {
                  if (t.length && !t.includes(r)) return;
                  let s = e[r];
                  i.push(...s.accounts);
                }),
                i
              );
            })(r.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: sc(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: i } = t;
            "accountsChanged" === i.name
              ? ((this.accounts = this.parseAccounts(i.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === i.name
              ? this.setChainId(this.formatChainId(i.data))
              : this.events.emit(i.name, i.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", sc(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  so(sn({}, ew("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, i;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (i = this.modal) || i.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", sc(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, i, r] = e.split(":");
          return { chainId: `${t}:${i}`, address: r };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, i;
          let r = null != (t = e?.chains) ? t : [],
            s = null != (i = e?.optionalChains) ? i : [],
            n = r.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = r.length ? e?.methods || r5 : [],
            a = r.length ? e?.events || r4 : [],
            c = e?.optionalMethods || [],
            h = e?.optionalEvents || [],
            l = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: r?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: h,
            rpcMap: l,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let i = {};
          return (
            e.forEach((e) => {
              i[e] = this.getRpcUrl(e, t);
            }),
            i
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? sa(this.rpc.chains)
              : sa(this.rpc.optionalChains)),
            (this.signer = await r3.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await i
                .e(20869)
                .then(i.bind(i, 20869));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  sn({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: i, rpcMap: r } = e;
          t &&
            eb(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
            })),
            i &&
              eb(i) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
              i.forEach((e) => {
                this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var i;
          return (
            (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          let e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let sl = sh;
    },
    75617: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          IEvents: function () {
            return r.q;
          },
        });
      var r = i(60276);
    },
    484: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      let r = i(81421);
      (t.HEARTBEAT_INTERVAL = r.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    64070: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(5306).__exportStar(i(484), t);
    },
    88300: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      let r = i(5306),
        s = i(92693),
        n = i(81421),
        o = i(4208),
        a = i(64070);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return r.__awaiter(this, void 0, void 0, function* () {
            let t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return r.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return r.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              n.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    88029: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = i(5306);
      r.__exportStar(i(88300), t),
        r.__exportStar(i(4208), t),
        r.__exportStar(i(64070), t);
    },
    70206: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      let r = i(75617);
      class s extends r.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = s;
    },
    4208: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(5306).__exportStar(i(70206), t);
    },
    2280: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return v;
        },
        k: function () {
          return v;
        },
      });
      var r = i(92693),
        s = i(80718),
        n = i.n(s),
        o = i(3175),
        a = i(13867),
        c = Object.defineProperty,
        h = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, i) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        g = (e, t) => {
          for (var i in t || (t = {})) p.call(t, i) && f(e, i, t[i]);
          if (u) for (var i of u(t)) d.call(t, i) && f(e, i, t[i]);
          return e;
        },
        y = (e, t) => h(e, l(t));
      let m = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class v {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new r.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, a.isHttpUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = (0, o.u)(e),
              i = await (await n()(this.url, y(g({}, m), { body: t }))).json();
            this.onPayload({ data: i });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!(0, a.isHttpUrl)(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return t(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = (0, o.u)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await n()(e, y(g({}, m), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, o.D)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            r = i.message || i.toString(),
            s = (0, a.formatJsonRpcError)(e, r);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, a.parseConnectionError)(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
    },
    80718: function (e, t) {
      var i = "undefined" != typeof self ? self : this,
        r = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      (function (e) {
        var t = {
          searchParams: "URLSearchParams" in r,
          iterable: "Symbol" in r && "iterator" in Symbol,
          blob:
            "FileReader" in r &&
            "Blob" in r &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in r,
          arrayBuffer: "ArrayBuffer" in r,
        };
        if (t.arrayBuffer)
          var i = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            s =
              ArrayBuffer.isView ||
              function (e) {
                return e && i.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function n(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function o(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function a(e) {
          var i = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t.iterable &&
              (i[Symbol.iterator] = function () {
                return i;
              }),
            i
          );
        }
        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function h(e) {
          if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
          e.bodyUsed = !0;
        }
        function l(e) {
          return new Promise(function (t, i) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                i(e.error);
              });
          });
        }
        function u(e) {
          var t = new FileReader(),
            i = l(t);
          return t.readAsArrayBuffer(e), i;
        }
        function p(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function d() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (t.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var i;
                  t.arrayBuffer &&
                  t.blob &&
                  (i = e) &&
                  DataView.prototype.isPrototypeOf(i)
                    ? ((this._bodyArrayBuffer = p(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : t.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || s(e))
                    ? (this._bodyArrayBuffer = p(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : t.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            t.blob &&
              ((this.blob = function () {
                var e = h(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? h(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(u);
              })),
            (this.text = function () {
              var e,
                t,
                i,
                r = h(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (i = l((t = new FileReader()))),
                  t.readAsText(e),
                  i
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), i = Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      i[r] = String.fromCharCode(t[r]);
                    return i.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            t.formData &&
              (this.formData = function () {
                return this.text().then(y);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (c.prototype.append = function (e, t) {
          (e = n(e)), (t = o(t));
          var i = this.map[e];
          this.map[e] = i ? i + ", " + t : t;
        }),
          (c.prototype.delete = function (e) {
            delete this.map[n(e)];
          }),
          (c.prototype.get = function (e) {
            return (e = n(e)), this.has(e) ? this.map[e] : null;
          }),
          (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(n(e));
          }),
          (c.prototype.set = function (e, t) {
            this.map[n(e)] = o(t);
          }),
          (c.prototype.forEach = function (e, t) {
            for (var i in this.map)
              this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this);
          }),
          (c.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, i) {
                e.push(i);
              }),
              a(e)
            );
          }),
          (c.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              a(e)
            );
          }),
          (c.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, i) {
                e.push([i, t]);
              }),
              a(e)
            );
          }),
          t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function g(e, t) {
          var i,
            r,
            s = (t = t || {}).body;
          if (e instanceof g) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              s ||
                null == e._bodyInit ||
                ((s = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method =
              ((r = (i = t.method || this.method || "GET").toUpperCase()),
              f.indexOf(r) > -1 ? r : i)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && s)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(s);
        }
        function y(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var i = e.split("="),
                    r = i.shift().replace(/\+/g, " "),
                    s = i.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(r), decodeURIComponent(s));
                }
              }),
            t
          );
        }
        function m(e, t) {
          t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (g.prototype.clone = function () {
          return new g(this, { body: this._bodyInit });
        }),
          d.call(g.prototype),
          d.call(m.prototype),
          (m.prototype.clone = function () {
            return new m(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url,
            });
          }),
          (m.error = function () {
            var e = new m(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var v = [301, 302, 303, 307, 308];
        (m.redirect = function (e, t) {
          if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
          return new m(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = r.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var i = Error(e);
            this.stack = i.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function w(i, r) {
          return new Promise(function (s, n) {
            var o = new g(i, r);
            if (o.signal && o.signal.aborted)
              return n(new e.DOMException("Aborted", "AbortError"));
            var a = new XMLHttpRequest();
            function h() {
              a.abort();
            }
            (a.onload = function () {
              var e,
                t,
                i = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((e = a.getAllResponseHeaders() || ""),
                    (t = new c()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var i = e.split(":"),
                          r = i.shift().trim();
                        if (r) {
                          var s = i.join(":").trim();
                          t.append(r, s);
                        }
                      }),
                    t),
                };
              (i.url =
                "responseURL" in a
                  ? a.responseURL
                  : i.headers.get("X-Request-URL")),
                s(new m("response" in a ? a.response : a.responseText, i));
            }),
              (a.onerror = function () {
                n(TypeError("Network request failed"));
              }),
              (a.ontimeout = function () {
                n(TypeError("Network request failed"));
              }),
              (a.onabort = function () {
                n(new e.DOMException("Aborted", "AbortError"));
              }),
              a.open(o.method, o.url, !0),
              "include" === o.credentials
                ? (a.withCredentials = !0)
                : "omit" === o.credentials && (a.withCredentials = !1),
              "responseType" in a && t.blob && (a.responseType = "blob"),
              o.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e);
              }),
              o.signal &&
                (o.signal.addEventListener("abort", h),
                (a.onreadystatechange = function () {
                  4 === a.readyState &&
                    o.signal.removeEventListener("abort", h);
                })),
              a.send(void 0 === o._bodyInit ? null : o._bodyInit);
          });
        }
        (w.polyfill = !0),
          r.fetch ||
            ((r.fetch = w), (r.Headers = c), (r.Request = g), (r.Response = m)),
          (e.Headers = c),
          (e.Request = g),
          (e.Response = m),
          (e.fetch = w),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill,
        ((t = r.fetch).default = r.fetch),
        (t.fetch = r.fetch),
        (t.Headers = r.Headers),
        (t.Request = r.Request),
        (t.Response = r.Response),
        (e.exports = t);
    },
    21170: function (e) {
      "use strict";
      let t = self.fetch.bind(self);
      (e.exports = t), (e.exports.default = e.exports);
    },
  },
]);
