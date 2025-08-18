(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [25367],
  {
    32407: function (e, t, r) {
      "use strict";
      let n, i, o, s, a, u, l, c;
      r.d(t, {
        O: function () {
          return tI;
        },
        P: function () {
          return tj;
        },
        T: function () {
          return tU;
        },
        c: function () {
          return rY;
        },
        f: function () {
          return tC;
        },
      });
      var f,
        d,
        h,
        p,
        y,
        g,
        m,
        b,
        E,
        w,
        v,
        A,
        x = {};
      function I(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function O(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function T(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      r.r(x),
        r.d(x, {
          abiSchemaToJsonSchema: function () {
            return eD;
          },
          codePointToInt: function () {
            return eq;
          },
          ensureIfUint8Array: function () {
            return eY;
          },
          ethAbiToJsonSchema: function () {
            return eF;
          },
          fetchArrayElement: function () {
            return eV;
          },
          hexToNumber: function () {
            return eM;
          },
          hexToUint8Array: function () {
            return eX;
          },
          numberToHex: function () {
            return eH;
          },
          padLeft: function () {
            return e$;
          },
          parseBaseType: function () {
            return eC;
          },
          transformJsonDataToAbiFormat: function () {
            return ez;
          },
          uint8ArrayToHexString: function () {
            return eW;
          },
        });
      let _ = BigInt(4294967296 - 1),
        N = BigInt(32),
        S = (e, t, r) => (e << r) | (t >>> (32 - r)),
        B = (e, t, r) => (t << r) | (e >>> (32 - r)),
        R = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        P = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        L = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        U = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        k = (e) =>
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function C(e) {
        for (let t = 0; t < e.length; t++) e[t] = k(e[t]);
      }
      function j(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function D(e) {
        return "string" == typeof e && (e = j(e)), O(e), e;
      }
      class F {
        clone() {
          return this._cloneInto();
        }
      }
      let V = [],
        z = [],
        q = [],
        M = BigInt(0),
        H = BigInt(1),
        $ = BigInt(2),
        W = BigInt(7),
        G = BigInt(256),
        Z = BigInt(113);
      for (let e = 0, t = H, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          V.push(2 * (5 * n + r)),
          z.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = M;
        for (let e = 0; e < 7; e++)
          (t = ((t << H) ^ ((t >> W) * Z)) % G) & $ &&
            (i ^= H << ((H << BigInt(e)) - H));
        q.push(i);
      }
      let [X, Y] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: o, l: s } = (function (e, t = !1) {
              return t
                ? { h: Number(e & _), l: Number((e >> N) & _) }
                : { h: 0 | Number((e >> N) & _), l: 0 | Number(e & _) };
            })(e[i], t);
            [r[i], n[i]] = [o, s];
          }
          return [r, n];
        })(q, !0),
        K = (e, t, r) => (r > 32 ? R(e, t, r) : S(e, t, r)),
        J = (e, t, r) => (r > 32 ? P(e, t, r) : B(e, t, r));
      class Q extends F {
        constructor(e, t, r, n = !1, i = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = i),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            I(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)), (this.state32 = L(this.state));
        }
        keccak() {
          U || C(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    i = (t + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = K(o, s, 1) ^ r[n],
                    u = J(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= a), (e[t + r + 1] ^= u);
                }
                let t = e[2],
                  i = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = z[r],
                    o = K(t, i, n),
                    s = J(t, i, n),
                    a = V[r];
                  (t = e[a]), (i = e[a + 1]), (e[a] = o), (e[a + 1] = s);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= X[n]), (e[1] ^= Y[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            U || C(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          T(this);
          let { blockLen: t, state: r } = this,
            n = (e = D(e)).length;
          for (let i = 0; i < n; ) {
            let o = Math.min(t - this.pos, n - i);
            for (let t = 0; t < o; t++) r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          T(this, !1), O(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return I(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (
            ((function (e, t) {
              O(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  `digestInto() expects output buffer of length at least ${r}`
                );
            })(e, this),
            this.finished)
          )
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new Q(t, r, n, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let ee = (e, t, r) =>
          (function (e) {
            let t = (t) => e().update(D(t)).digest(),
              r = e();
            return (
              (t.outputLen = r.outputLen),
              (t.blockLen = r.blockLen),
              (t.create = () => e()),
              t
            );
          })(() => new Q(t, e, r)),
        et = ee(1, 144, 28),
        er = ee(1, 136, 32),
        en = ee(1, 104, 48),
        ei = ee(1, 72, 64);
      function eo(e) {
        return (t) => (O(t), e(t));
      }
      (() => {
        let t =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0,
          r =
            void 0 !== e && "function" == typeof e.require && e.require.bind(e);
        return r && !t ? r("crypto") : void 0;
      })(),
        eo(et);
      let es = (() => {
        let e = eo(er);
        return (e.create = er.create), e;
      })();
      eo(en), eo(ei);
      class ea extends Error {
        get innerError() {
          return this.cause instanceof eu ? this.cause.errors : this.cause;
        }
        set innerError(e) {
          Array.isArray(e) ? (this.cause = new eu(e)) : (this.cause = e);
        }
        constructor(e, t) {
          super(e),
            Array.isArray(t) ? (this.cause = new eu(t)) : (this.cause = t),
            (this.name = this.constructor.name),
            "function" == typeof Error.captureStackTrace
              ? Error.captureStackTrace(new.target.constructor)
              : (this.stack = Error().stack);
        }
        static convertToString(e, t = !1) {
          if (null == e) return "undefined";
          let r = JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() : t
          );
          return t && ["bigint", "string"].includes(typeof e)
            ? r.replace(/['\\"]+/g, "")
            : r;
        }
        toJSON() {
          return {
            name: this.name,
            code: this.code,
            message: this.message,
            cause: this.cause,
            innerError: this.cause,
          };
        }
      }
      class eu extends ea {
        constructor(e) {
          super(
            `Multiple errors occurred: [${e
              .map((e) => e.message)
              .join("], [")}]`
          ),
            (this.code = 208),
            (this.errors = e);
        }
      }
      class el extends ea {
        constructor(e, t) {
          super(
            `Invalid value given "${ea.convertToString(e, !0)}". Error: ${t}.`
          ),
            (this.name = this.constructor.name);
        }
      }
      class ec extends el {
        constructor(e) {
          super(e, "can not parse as byte data"), (this.code = 1002);
        }
      }
      class ef extends el {
        constructor(e) {
          super(e, "can not parse as number data"), (this.code = 1003);
        }
      }
      let ed = {
        [-32700]: { message: "Parse error", description: "Invalid JSON" },
        [-32600]: {
          message: "Invalid request",
          description: "JSON is not a valid request object	",
        },
        [-32601]: {
          message: "Method not found",
          description: "Method does not exist	",
        },
        [-32602]: {
          message: "Invalid params",
          description: "Invalid method parameters",
        },
        [-32603]: {
          message: "Internal error",
          description: "Internal JSON-RPC error",
        },
        [-32e3]: {
          message: "Invalid input",
          description: "Missing or invalid parameters",
        },
        [-32001]: {
          message: "Resource not found",
          description: "Requested resource not found",
        },
        [-32002]: {
          message: "Resource unavailable",
          description: "Requested resource not available",
        },
        [-32003]: {
          message: "Transaction rejected",
          description: "Transaction creation failed",
        },
        [-32004]: {
          message: "Method not supported",
          description: "Method is not implemented",
        },
        [-32005]: {
          message: "Limit exceeded",
          description: "Request exceeds defined limit",
        },
        [-32006]: {
          message: "JSON-RPC version not supported",
          description: "Version of JSON-RPC protocol is not supported",
        },
        4001: {
          name: "User Rejected Request",
          message: "The user rejected the request.",
        },
        4100: {
          name: "Unauthorized",
          message:
            "The requested method and/or account has not been authorized by the user.",
        },
        4200: {
          name: "Unsupported Method",
          message: "The Provider does not support the requested method.",
        },
        4900: {
          name: "Disconnected",
          message: "The Provider is disconnected from all chains.",
        },
        4901: {
          name: "Chain Disconnected",
          message: "The Provider is not connected to the requested chain.",
        },
        "0-999": { name: "", message: "Not used." },
        1e3: {
          name: "Normal Closure",
          message:
            "The connection successfully completed the purpose for which it was created.",
        },
        1001: {
          name: "Going Away",
          message:
            "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.",
        },
        1002: {
          name: "Protocol error",
          message:
            "The endpoint is terminating the connection due to a protocol error.",
        },
        1003: {
          name: "Unsupported Data",
          message:
            "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)",
        },
        1004: {
          name: "Reserved",
          message: "Reserved. A meaning might be defined in the future.",
        },
        1005: {
          name: "No Status Rcvd",
          message:
            "Reserved. Indicates that no status code was provided even though one was expected.",
        },
        1006: {
          name: "Abnormal Closure",
          message:
            "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.",
        },
        1007: {
          name: "Invalid frame payload data",
          message:
            "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).",
        },
        1008: {
          name: "Policy Violation",
          message:
            "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.",
        },
        1009: {
          name: "Message Too Big",
          message:
            "The endpoint is terminating the connection because a data frame was received that is too large.",
        },
        1010: {
          name: "Mandatory Ext.",
          message:
            "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't.",
        },
        1011: {
          name: "Internal Error",
          message:
            "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.",
        },
        1012: {
          name: "Service Restart",
          message:
            "The server is terminating the connection because it is restarting.",
        },
        1013: {
          name: "Try Again Later",
          message:
            "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.",
        },
        1014: {
          name: "Bad Gateway",
          message:
            "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.",
        },
        1015: {
          name: "TLS handshake",
          message:
            "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).",
        },
        "1016-2999": {
          name: "",
          message:
            "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.",
        },
        "3000-3999": {
          name: "",
          message:
            "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol.",
        },
        "4000-4999": {
          name: "",
          message:
            "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol.",
        },
      };
      class eh extends ea {
        constructor(e, t) {
          super(
            null != t
              ? t
              : "An Rpc error has occured with a code of *code*".replace(
                  "*code*",
                  e.error.code.toString()
                )
          ),
            (this.code = e.error.code),
            (this.id = e.id),
            (this.jsonrpc = e.jsonrpc),
            (this.jsonRpcError = e.error);
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            error: this.jsonRpcError,
            id: this.id,
            jsonRpc: this.jsonrpc,
          });
        }
      }
      class ep extends eh {
        constructor(e) {
          super(e, ed[-32700].message), (this.code = -32700);
        }
      }
      class ey extends eh {
        constructor(e) {
          super(e, ed[-32600].message), (this.code = -32600);
        }
      }
      class eg extends eh {
        constructor(e) {
          super(e, ed[-32601].message), (this.code = -32601);
        }
      }
      class em extends eh {
        constructor(e) {
          super(e, ed[-32602].message), (this.code = -32602);
        }
      }
      class eb extends eh {
        constructor(e) {
          super(e, ed[-32603].message), (this.code = -32603);
        }
      }
      class eE extends eh {
        constructor(e) {
          super(e, ed[-32e3].message), (this.code = -32e3);
        }
      }
      class ew extends eh {
        constructor(e) {
          super(e, ed[-32004].message), (this.code = -32004);
        }
      }
      class ev extends eh {
        constructor(e) {
          super(e, ed[-32002].message), (this.code = -32002);
        }
      }
      class eA extends eh {
        constructor(e) {
          super(e, ed[-32001].message), (this.code = -32001);
        }
      }
      class ex extends eh {
        constructor(e) {
          super(e, ed[-32006].message), (this.code = -32006);
        }
      }
      class eI extends eh {
        constructor(e) {
          super(e, ed[-32003].message), (this.code = -32003);
        }
      }
      class eO extends eh {
        constructor(e) {
          super(e, ed[-32005].message), (this.code = -32005);
        }
      }
      let eT = new Map();
      eT.set(-32700, { error: ep }),
        eT.set(-32600, { error: ey }),
        eT.set(-32601, { error: eg }),
        eT.set(-32602, { error: em }),
        eT.set(-32603, { error: eb }),
        eT.set(-32e3, { error: eE }),
        eT.set(-32004, { error: ew }),
        eT.set(-32002, { error: ev }),
        eT.set(-32003, { error: eI }),
        eT.set(-32001, { error: eA }),
        eT.set(-32006, { error: ex }),
        eT.set(-32005, { error: eO });
      class e_ extends ea {
        constructor(e) {
          super(`Format for the type ${e} is unsupported`),
            (this.type = e),
            (this.code = 1200);
        }
        toJSON() {
          return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type,
          });
        }
      }
      var eN = r(18728);
      let eS = (e) => (e.message ? e.message : "unspecified error");
      class eB extends ea {
        constructor(e) {
          super(),
            (this.code = 1100),
            (this.errors = e),
            (super.message = `Web3 validator found ${e.length} error[s]:
${this._compileErrors().join("\n")}`);
        }
        _compileErrors() {
          return this.errors.map(eS);
        }
      }
      let eR = ["bool", "int", "uint", "bytes", "string", "address", "tuple"],
        eP = (e) => "object" == typeof e && "type" in e && "name" in e,
        eL = (e) => "string" == typeof e,
        eU = (e) => "string" == typeof e && /^((-)?0x[0-9a-f]+|(0x))$/i.test(e),
        ek = [
          "hex",
          "number",
          "blockNumber",
          "blockNumberOrTag",
          "filter",
          "bloom",
        ],
        eC = (e) => {
          let t,
            r = e.replace(/ /, ""),
            n = !1,
            i = [];
          if (
            (e.includes("[") &&
              ((r = r.slice(0, r.indexOf("["))),
              (n =
                (i = [...e.matchAll(/(?:\[(\d*)\])/g)]
                  .map((e) => parseInt(e[1], 10))
                  .map((e) => (Number.isNaN(e) ? -1 : e))).length > 0)),
            eR.includes(r))
          )
            return { baseType: r, isArray: n, baseTypeSize: t, arraySizes: i };
          if (r.startsWith("int"))
            (t = parseInt(r.substring(3), 10)), (r = "int");
          else if (r.startsWith("uint"))
            (t = parseInt(e.substring(4), 10)), (r = "uint");
          else {
            if (!r.startsWith("bytes"))
              return {
                baseType: void 0,
                isArray: !1,
                baseTypeSize: void 0,
                arraySizes: i,
              };
            (t = parseInt(r.substring(5), 10)), (r = "bytes");
          }
          return { baseType: r, isArray: n, baseTypeSize: t, arraySizes: i };
        },
        ej = (e, t = {}) => {
          if (Object.keys(t).includes("type"))
            throw new eB([
              {
                keyword: "eth",
                message: 'Either "eth" or "type" can be presented in schema',
                params: { eth: e },
                instancePath: "",
                schemaPath: "",
              },
            ]);
          let { baseType: r, baseTypeSize: n } = eC(e);
          if (!r && !ek.includes(e))
            throw new eB([
              {
                keyword: "eth",
                message: `Eth data type "${e}" is not valid`,
                params: { eth: e },
                instancePath: "",
                schemaPath: "",
              },
            ]);
          if (r) {
            if ("tuple" === r)
              throw Error('"tuple" type is not implemented directly.');
            return { format: `${r}${null != n ? n : ""}`, required: !0 };
          }
          return e ? { format: e, required: !0 } : {};
        },
        eD = (e, t = "/0") => {
          let r = {
            type: "array",
            items: [],
            maxItems: e.length,
            minItems: e.length,
          };
          for (let [n, i] of e.entries()) {
            let e, o, s;
            let a = [];
            eP(i)
              ? ((e = i.type), (o = i.name || `${t}/${n}`), (a = i.components))
              : "string" == typeof i
              ? ((e = i), (o = `${t}/${n}`))
              : Array.isArray(i) &&
                (i[0] &&
                "string" == typeof i[0] &&
                i[0].startsWith("tuple") &&
                !Array.isArray(i[0]) &&
                i[1] &&
                Array.isArray(i[1])
                  ? ((e = i[0]), (o = `${t}/${n}`), (a = i[1]))
                  : ((e = "tuple"), (o = `${t}/${n}`), (a = i)));
            let { baseType: u, isArray: l, arraySizes: c } = eC(e),
              f = r;
            for (let e = c.length - 1; e > 0; e -= 1)
              (s = {
                type: "array",
                $id: o,
                items: [],
                maxItems: c[e],
                minItems: c[e],
              }),
                c[e] < 0 && (delete s.maxItems, delete s.minItems),
                Array.isArray(f.items)
                  ? 0 === f.items.length
                    ? (f.items = [s])
                    : f.items.push(s)
                  : (f.items = [f.items, s]),
                (f = s);
            if ("tuple" !== u || l) {
              if ("tuple" === u && l) {
                let e = c[0],
                  t = Object.assign(
                    { type: "array", $id: o, items: eD(a, o) },
                    e >= 0 && { minItems: e, maxItems: e }
                  );
                f.items.push(t);
              } else if (l) {
                let t = c[0],
                  r = Object.assign(
                    { type: "array", $id: o, items: ej(e) },
                    t >= 0 && { minItems: t, maxItems: t }
                  );
                f.items.push(r);
              } else
                Array.isArray(f.items),
                  f.items.push(Object.assign({ $id: o }, ej(e)));
            } else {
              let e = eD(a, o);
              (e.$id = o), f.items.push(e);
            }
            f = r;
          }
          return r;
        },
        eF = (e) => eD(e),
        eV = (e, t) => (1 === t ? e : eV(e[0], t - 1)),
        ez = (e, t, r) => {
          let n = [];
          for (let [i, o] of e.entries()) {
            let e, s;
            let a = [];
            eP(o)
              ? ((e = o.type), (s = o.name), (a = o.components))
              : "string" == typeof o
              ? (e = o)
              : Array.isArray(o) &&
                (o[1] && Array.isArray(o[1])
                  ? ((e = o[0]), (a = o[1]))
                  : ((e = "tuple"), (a = o)));
            let { baseType: u, isArray: l, arraySizes: c } = eC(e),
              f = Array.isArray(t) ? t[i] : t[s];
            if ("tuple" !== u || l) {
              if ("tuple" === u && l) {
                let e = [];
                for (let t of f)
                  if (c.length > 1) {
                    let n = eV(t, c.length - 1),
                      i = [];
                    for (let e of n) i.push(ez(a, e, r));
                    e.push(i);
                  } else e.push(ez(a, t, r));
                n.push(e);
              } else n.push(f);
            } else n.push(ez(a, f, r));
          }
          return (r = null != r ? r : []).push(...n), r;
        },
        eq = (e) => {
          if (e >= 48 && e <= 57) return e - 48;
          if (e >= 65 && e <= 70) return e - 55;
          if (e >= 97 && e <= 102) return e - 87;
          throw Error(`Invalid code point: ${e}`);
        },
        eM = (e) => {
          if (!eU(e)) throw Error("Invalid hex string");
          let [t, r] = e.startsWith("-") ? [!0, e.slice(1)] : [!1, e],
            n = BigInt(r);
          return n > Number.MAX_SAFE_INTEGER
            ? t
              ? -n
              : n
            : n < Number.MIN_SAFE_INTEGER
            ? n
            : t
            ? -1 * Number(n)
            : Number(n);
        },
        eH = (e) => {
          if (("number" == typeof e || "bigint" == typeof e) && e < 0)
            return `-0x${e.toString(16).slice(1)}`;
          if (("number" == typeof e || "bigint" == typeof e) && e >= 0)
            return `0x${e.toString(16)}`;
          if ("string" == typeof e && eU(e)) {
            let [t, r] = e.startsWith("-") ? [!0, e.slice(1)] : [!1, e],
              n = r.split(/^(-)?0(x|X)/).slice(-1)[0];
            return `${t ? "-" : ""}0x${n.replace(/^0+/, "").toLowerCase()}`;
          }
          if ("string" == typeof e && !eU(e)) return eH(BigInt(e));
          throw new ef(e);
        },
        e$ = (e, t, r = "0") => {
          if ("string" == typeof e && !eU(e)) return e.padStart(t, r);
          let n = "string" == typeof e && eU(e) ? e : eH(e),
            [i, o] = n.startsWith("-")
              ? ["-0x", n.slice(3)]
              : ["0x", n.slice(2)];
          return `${i}${o.padStart(t, r)}`;
        };
      function eW(e) {
        let t = "0x";
        for (let r of e) {
          let e = r.toString(16);
          t += 1 === e.length ? `0${e}` : e;
        }
        return t;
      }
      let eG = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function eZ(e) {
        return e >= eG.zero && e <= eG.nine
          ? e - eG.zero
          : e >= eG.A && e <= eG.F
          ? e - (eG.A - 10)
          : e >= eG.a && e <= eG.f
          ? e - (eG.a - 10)
          : void 0;
      }
      function eX(e) {
        let t = 0;
        if (
          (e.startsWith("0") && ("x" === e[1] || "X" === e[1]) && (t = 2),
          e.length % 2 != 0)
        )
          throw new ec(`hex string has odd length: ${e}`);
        let r = (e.length - t) / 2,
          n = new Uint8Array(r);
        for (let i = 0, o = t; i < r; i += 1) {
          let t = eZ(e.charCodeAt(o++)),
            r = eZ(e.charCodeAt(o++));
          if (void 0 === t || void 0 === r)
            throw new ec(
              `Invalid byte sequence ("${e[o - 2]}${e[o - 1]}" in "${e}").`
            );
          n[i] = 16 * t + r;
        }
        return n;
      }
      function eY(e) {
        var t;
        return e instanceof Uint8Array ||
          (null === (t = null == e ? void 0 : e.constructor) || void 0 === t
            ? void 0
            : t.name) !== "Uint8Array"
          ? e
          : Uint8Array.from(e);
      }
      let eK = (e) => {
          var t, r;
          return (
            e instanceof Uint8Array ||
            (null === (t = null == e ? void 0 : e.constructor) || void 0 === t
              ? void 0
              : t.name) === "Uint8Array" ||
            (null === (r = null == e ? void 0 : e.constructor) || void 0 === r
              ? void 0
              : r.name) === "Buffer"
          );
        },
        eJ = (e, t = { abiType: "bytes" }) => {
          let r;
          if (
            ("string" != typeof e && !Array.isArray(e) && !eK(e)) ||
            ("string" == typeof e && eU(e) && e.startsWith("-")) ||
            ("string" == typeof e && !eU(e))
          )
            return !1;
          if ("string" == typeof e) {
            if (e.length % 2 != 0) return !1;
            r = eX(e);
          } else if (Array.isArray(e)) {
            if (e.some((e) => e < 0 || e > 255 || !Number.isInteger(e)))
              return !1;
            r = new Uint8Array(e);
          } else r = e;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e } = eC(t.abiType);
            return !e || r.length === e;
          }
          return (
            null == t || !t.size || r.length === (null == t ? void 0 : t.size)
          );
        },
        eQ = (e) => {
          if (!/^(0x)?[0-9a-f]{40}$/i.test(e)) return !1;
          let t = e.slice(2),
            r = eW(es(eY(j(t.toLowerCase())))).slice(2);
          for (let e = 0; e < 40; e += 1)
            if (
              (parseInt(r[e], 16) > 7 && t[e].toUpperCase() !== t[e]) ||
              (7 >= parseInt(r[e], 16) && t[e].toLowerCase() !== t[e])
            )
              return !1;
          return !0;
        },
        e0 = (e, t = !0) => {
          let r;
          return (
            !!("string" == typeof e || eK(e)) &&
            ((r = eK(e)
              ? eW(e)
              : "string" != typeof e || eU(e)
              ? e
              : e.toLowerCase().startsWith("0x")
              ? e
              : `0x${e}`),
            !!/^(0x)?[0-9a-f]{40}$/i.test(r) &&
              (!!(
                /^(0x|0X)?[0-9a-f]{40}$/.test(r) ||
                /^(0x|0X)?[0-9A-F]{40}$/.test(r)
              ) ||
                !t ||
                eQ(r)))
          );
        };
      ((f = E || (E = {})).NUMBER = "NUMBER_NUMBER"),
        (f.HEX = "NUMBER_HEX"),
        (f.STR = "NUMBER_STR"),
        (f.BIGINT = "NUMBER_BIGINT"),
        ((d = w || (w = {})).HEX = "BYTES_HEX"),
        (d.UINT8ARRAY = "BYTES_UINT8ARRAY"),
        E.BIGINT,
        w.HEX,
        E.HEX,
        w.HEX,
        ((h = v || (v = {})).EARLIEST = "earliest"),
        (h.LATEST = "latest"),
        (h.PENDING = "pending"),
        (h.SAFE = "safe"),
        (h.FINALIZED = "finalized"),
        (h.COMMITTED = "committed"),
        ((p = A || (A = {})).chainstart = "chainstart"),
        (p.frontier = "frontier"),
        (p.homestead = "homestead"),
        (p.dao = "dao"),
        (p.tangerineWhistle = "tangerineWhistle"),
        (p.spuriousDragon = "spuriousDragon"),
        (p.byzantium = "byzantium"),
        (p.constantinople = "constantinople"),
        (p.petersburg = "petersburg"),
        (p.istanbul = "istanbul"),
        (p.muirGlacier = "muirGlacier"),
        (p.berlin = "berlin"),
        (p.london = "london"),
        (p.altair = "altair"),
        (p.arrowGlacier = "arrowGlacier"),
        (p.grayGlacier = "grayGlacier"),
        (p.bellatrix = "bellatrix"),
        (p.merge = "merge"),
        (p.capella = "capella"),
        (p.shanghai = "shanghai"),
        Object.getPrototypeOf(Uint8Array);
      var e1 = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      let e2 = Symbol.for("web3/base-provider");
      class e3 {
        static isWeb3Provider(e) {
          return e instanceof e3 || !!(e && e[e2]);
        }
        get [e2]() {
          return !0;
        }
        send(e, t) {
          this.request(e)
            .then((e) => {
              t(null, e);
            })
            .catch((e) => {
              t(e);
            });
        }
        sendAsync(e) {
          return e1(this, void 0, void 0, function* () {
            return this.request(e);
          });
        }
        asEIP1193Provider() {
          let e = Object.create(this),
            t = e.request;
          return (
            (e.request = function (e) {
              return e1(this, void 0, void 0, function* () {
                return (yield t(e)).result;
              });
            }),
            (e.asEIP1193Provider = void 0),
            e
          );
        }
      }
      let e8 = (e, t) => {
          if (t === BigInt(0)) return BigInt(1);
          let r = e;
          for (let n = 1; n < t; n += 1) r *= e;
          return r;
        },
        e4 = (e, t = { abiType: "uint" }) => {
          let r;
          if (
            !["number", "string", "bigint"].includes(typeof e) ||
            ("string" == typeof e && 0 === e.length)
          )
            return !1;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e } = eC(t.abiType);
            e && (r = e);
          } else t.bitSize && (r = t.bitSize);
          let n = e8(BigInt(2), BigInt(null != r ? r : 256)) - BigInt(1);
          try {
            let t = "string" == typeof e && eU(e) ? BigInt(eM(e)) : BigInt(e);
            return t >= 0 && t <= n;
          } catch (e) {
            return !1;
          }
        },
        e5 = (e, t = { abiType: "int" }) => {
          let r;
          if (
            !["number", "string", "bigint"].includes(typeof e) ||
            ("number" == typeof e && e > Number.MAX_SAFE_INTEGER)
          )
            return !1;
          if (null == t ? void 0 : t.abiType) {
            let { baseTypeSize: e, baseType: n } = eC(t.abiType);
            if ("int" !== n) return !1;
            e && (r = e);
          } else t.bitSize && (r = t.bitSize);
          let n = e8(BigInt(2), BigInt((null != r ? r : 256) - 1)),
            i = BigInt(-1) * e8(BigInt(2), BigInt((null != r ? r : 256) - 1));
          try {
            let t = "string" == typeof e && eU(e) ? BigInt(eM(e)) : BigInt(e);
            return t >= i && t <= n;
          } catch (e) {
            return !1;
          }
        },
        e6 = (e) =>
          !!(
            e5(e) ||
            ("string" == typeof e &&
              /[0-9.]/.test(e) &&
              e.indexOf(".") === e.lastIndexOf("."))
          ) || "number" == typeof e,
        e9 = (e) => e4(e),
        e7 = (e) => Object.values(v).includes(e),
        te = (e) => e7(e) || e9(e),
        tt = (e) =>
          !!("string" == typeof e && /^(0x)?[0-9a-f]{512}$/i.test(e)) &&
          !!(/^(0x)?[0-9a-f]{512}$/.test(e) || /^(0x)?[0-9A-F]{512}$/.test(e)),
        tr = (e) =>
          !!["number", "string", "boolean"].includes(typeof e) &&
          ("boolean" == typeof e ||
            ("string" != typeof e || eU(e)
              ? "string" == typeof e && eU(e)
                ? "0x1" === e || "0x0" === e
                : 1 === e || 0 === e
              : "1" === e || "0" === e)),
        tn = (e) => null == e,
        ti = (e) =>
          !!("string" == typeof e && /^(0x)?[0-9a-f]{64}$/i.test(e)) &&
          !!(/^(0x)?[0-9a-f]{64}$/.test(e) || /^(0x)?[0-9A-F]{64}$/.test(e)),
        to = (e) => {
          let t = ["fromBlock", "toBlock", "address", "topics", "blockHash"];
          if (
            tn(e) ||
            "object" != typeof e ||
            !Object.keys(e).every((e) => t.includes(e)) ||
            (!tn(e.fromBlock) && !te(e.fromBlock)) ||
            (!tn(e.toBlock) && !te(e.toBlock))
          )
            return !1;
          if (!tn(e.address)) {
            if (Array.isArray(e.address)) {
              if (!e.address.every((e) => e0(e))) return !1;
            } else if (!e0(e.address)) return !1;
          }
          return !!(
            tn(e.topics) ||
            e.topics.every(
              (e) =>
                !!tn(e) || (Array.isArray(e) ? e.every((e) => ti(e)) : !!ti(e))
            )
          );
        },
        ts = {
          address: (e) => e0(e),
          bloom: (e) => tt(e),
          blockNumber: (e) => e9(e),
          blockTag: (e) => e7(e),
          blockNumberOrTag: (e) => te(e),
          bool: (e) => tr(e),
          bytes: (e) => eJ(e),
          filter: (e) => to(e),
          hex: (e) => eU(e),
          uint: (e) => e4(e),
          int: (e) => e5(e),
          number: (e) => e6(e),
          string: (e) => eL(e),
        };
      for (let e = 8; e <= 256; e += 8)
        (ts[`int${e}`] = (t) => e5(t, { bitSize: e })),
          (ts[`uint${e}`] = (t) => e4(t, { bitSize: e }));
      for (let e = 1; e <= 32; e += 1)
        ts[`bytes${e}`] = (t) => eJ(t, { size: e });
      ts.bytes256 = ts.bytes;
      let ta = (e) => {
        if (
          (!(null == e ? void 0 : e.type) ||
            (null == e ? void 0 : e.type) === "object") &&
          (null == e ? void 0 : e.properties)
        ) {
          let t = {};
          for (let r of Object.keys(e.properties)) {
            let n = ta(e.properties[r]);
            n && (t[r] = n);
          }
          return Array.isArray(e.required)
            ? eN.z
                .object(t)
                .partial()
                .required(
                  e.required.reduce(
                    (e, t) => Object.assign(Object.assign({}, e), { [t]: !0 }),
                    {}
                  )
                )
            : eN.z.object(t).partial();
        }
        if (
          (null == e ? void 0 : e.type) === "array" &&
          (null == e ? void 0 : e.items)
        ) {
          if (
            Array.isArray(e.items) &&
            e.items.length > 1 &&
            void 0 !== e.maxItems &&
            new Set(e.items.map((e) => e.$id)).size === e.items.length
          ) {
            let t = [];
            for (let r of e.items) {
              let e = ta(r);
              e && t.push(e);
            }
            return eN.z.tuple(t);
          }
          let t = Array.isArray(e.items) ? e.items[0] : e.items,
            r = eN.z.array(ta(t));
          return (
            (r = void 0 !== e.minItems ? r.min(e.minItems) : r),
            (r = void 0 !== e.maxItems ? r.max(e.maxItems) : r)
          );
        }
        if (e.oneOf && Array.isArray(e.oneOf))
          return eN.z.union(e.oneOf.map((e) => ta(e)));
        if (null == e ? void 0 : e.format) {
          if (!ts[e.format]) throw new e_(e.format);
          return eN.z
            .any()
            .refine(ts[e.format], (t) => ({
              params: { value: t, format: e.format },
            }));
        }
        return (null == e ? void 0 : e.type) &&
          (null == e ? void 0 : e.type) !== "object" &&
          "function" == typeof eN.z[String(e.type)]
          ? eN.z[String(e.type)]()
          : eN.z.object({ data: eN.z.any() }).partial();
      };
      class tu {
        static factory() {
          return (
            tu.validatorInstance || (tu.validatorInstance = new tu()),
            tu.validatorInstance
          );
        }
        validate(e, t, r) {
          var n, i;
          let o = ta(e).safeParse(t);
          if (!o.success) {
            let e = this.convertErrors(
              null !==
                (i =
                  null === (n = o.error) || void 0 === n ? void 0 : n.issues) &&
                void 0 !== i
                ? i
                : []
            );
            if (e) {
              if (null == r ? void 0 : r.silent) return e;
              throw new eB(e);
            }
          }
        }
        convertErrors(e) {
          if (e && Array.isArray(e) && e.length > 0)
            return e.map((e) => {
              var t;
              let r, n, i, o;
              o = e.path.join("/");
              let s = String(e.path[e.path.length - 1]),
                a = e.path.join("/");
              if (e.code === eN.NL.too_big)
                (n = "maxItems"),
                  (o = `${a}/maxItems`),
                  (i = { limit: e.maximum }),
                  (r = `must NOT have more than ${e.maximum} items`);
              else if (e.code === eN.NL.too_small)
                (n = "minItems"),
                  (o = `${a}/minItems`),
                  (i = { limit: e.minimum }),
                  (r = `must NOT have fewer than ${e.minimum} items`);
              else if (e.code === eN.NL.custom) {
                let { value: n, format: s } =
                  null !== (t = e.params) && void 0 !== t ? t : {};
                (r =
                  void 0 === n
                    ? `value at "/${o}" is required`
                    : `value "${
                        "object" == typeof n ? JSON.stringify(n) : n
                      }" at "/${o}" must pass "${s}" validation`),
                  (i = { value: n });
              }
              return {
                keyword: null != n ? n : s,
                instancePath: a ? `/${a}` : "",
                schemaPath: o ? `#${o}` : "#",
                params: null != i ? i : { value: e.message },
                message: null != r ? r : e.message,
              };
            });
        }
      }
      class tl {
        constructor() {
          this._validator = tu.factory();
        }
        validateJSONSchema(e, t, r) {
          return this._validator.validate(e, t, r);
        }
        validate(e, t, r = { silent: !1 }) {
          var n, i;
          let o = eF(e);
          if (
            !Array.isArray(o.items) ||
            (null === (n = o.items) || void 0 === n ? void 0 : n.length) !==
              0 ||
            0 !== t.length
          ) {
            if (
              Array.isArray(o.items) &&
              (null === (i = o.items) || void 0 === i ? void 0 : i.length) ===
                0 &&
              0 !== t.length
            )
              throw new eB([
                {
                  instancePath: "/0",
                  schemaPath: "/",
                  keyword: "required",
                  message: "empty schema against data can not be validated",
                  params: t,
                },
              ]);
            return this._validator.validate(o, t, r);
          }
        }
      }
      let tc = new tl();
      BigInt(0),
        BigInt(1),
        BigInt(1e3),
        BigInt(1e3),
        BigInt(1e3),
        BigInt(1e3),
        BigInt(1e6),
        BigInt(1e6),
        BigInt(1e6),
        BigInt(1e6),
        BigInt(1e9),
        BigInt(1e9),
        BigInt(1e9),
        BigInt(1e9),
        BigInt(1e9),
        BigInt(1e12),
        BigInt(1e12),
        BigInt(1e12),
        BigInt(1e15),
        BigInt(1e15),
        BigInt(1e15),
        BigInt("1000000000000000000"),
        BigInt("1000000000000000000000"),
        BigInt("1000000000000000000000"),
        BigInt("1000000000000000000000000"),
        BigInt("1000000000000000000000000000"),
        BigInt("1000000000000000000000000000000");
      let { uint8ArrayToHexString: tf } = x,
        td = (e) => (tc.validate(["hex"], [e]), eM(e)),
        th = (e, t) => {
          "bigint" != typeof e && tc.validate(["int"], [e]);
          let r = eH(e);
          return (
            t &&
              (r.startsWith("-") || r.length % 2 != 1
                ? r.length % 2 == 0 &&
                  r.startsWith("-") &&
                  (r = "-0x0".concat(r.slice(3)))
                : (r = "0x0".concat(r.slice(2)))),
            r
          );
        },
        tp = (e) => {
          if ("number" == typeof e)
            return e > 1e20
              ? (console.warn(
                  "Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods"
                ),
                BigInt(e))
              : e;
          if ("bigint" == typeof e)
            return e >= Number.MIN_SAFE_INTEGER && e <= Number.MAX_SAFE_INTEGER
              ? Number(e)
              : e;
          if ("string" == typeof e && eU(e)) return td(e);
          try {
            return tp(BigInt(e));
          } catch (t) {
            throw new ef(e);
          }
        };
      r(53238);
      let { parseBaseType: ty } = x,
        tg = (e, t, r = []) => {
          let n,
            i = Object.assign({}, e);
          for (let e of t) {
            if (i.oneOf && n) {
              let e = n,
                t = r.find(([t]) => t === e);
              t && t[0] === n && (i = i.oneOf[t[1]]);
            }
            if (!i.properties && !i.items) return;
            i.properties
              ? (i = i.properties[e])
              : i.items && i.items.properties
              ? (i = i.items.properties[e])
              : i.items && isObject(i.items)
              ? (i = i.items)
              : i.items &&
                Array.isArray(i.items) &&
                (i = i.items[parseInt(e, 10)]),
              i && e && (n = e);
          }
          return i;
        },
        tm = (e, t, r) => {
          try {
            let { baseType: n, baseTypeSize: i } = ty(t);
            if ("int" === n || "uint" === n)
              switch (r.number) {
                case FMT_NUMBER.NUMBER:
                  return Number(toBigInt(e));
                case FMT_NUMBER.HEX:
                  return numberToHex(toBigInt(e));
                case FMT_NUMBER.STR:
                  return toBigInt(e).toString();
                case FMT_NUMBER.BIGINT:
                  return toBigInt(e);
                default:
                  throw new FormatterError(
                    `Invalid format: ${String(r.number)}`
                  );
              }
            if ("bytes" === n) {
              let t;
              switch (
                (i
                  ? "string" == typeof e
                    ? (t = padLeft(e, 2 * i))
                    : isUint8Array(e) &&
                      (t = uint8ArrayConcat(new Uint8Array(i - e.length), e))
                  : (t = e),
                r.bytes)
              ) {
                case FMT_BYTES.HEX:
                  return bytesToHex(bytesToUint8Array(t));
                case FMT_BYTES.UINT8ARRAY:
                  return bytesToUint8Array(t);
                default:
                  throw new FormatterError(
                    `Invalid format: ${String(r.bytes)}`
                  );
              }
            }
            if ("string" === n) return String(e);
          } catch (e) {}
          return e;
        },
        tb = ({
          value: e,
          schemaProp: t,
          schema: r,
          object: n,
          key: i,
          dataPath: o,
          format: s,
          oneOfPath: a = [],
        }) => {
          var u, l;
          if (Array.isArray(e)) {
            let c = t;
            if (
              ((null == t ? void 0 : t.oneOf) !== void 0 &&
                t.oneOf.forEach((r, n) => {
                  var o, s;
                  Array.isArray(null == t ? void 0 : t.items) ||
                    (("object" != typeof e[0] ||
                      (null === (o = null == r ? void 0 : r.items) ||
                      void 0 === o
                        ? void 0
                        : o.type) !== "object") &&
                      ("string" != typeof e[0] ||
                        (null === (s = null == r ? void 0 : r.items) ||
                        void 0 === s
                          ? void 0
                          : s.type) === "object")) ||
                    ((c = r), a.push([i, n]));
                }),
              isNullish(null == c ? void 0 : c.items))
            )
              return delete n[i], o.pop(), !0;
            if (isObject(c.items) && !isNullish(c.items.format)) {
              for (let t = 0; t < e.length; t += 1)
                n[i][t] = tm(
                  e[t],
                  null === (u = null == c ? void 0 : c.items) || void 0 === u
                    ? void 0
                    : u.format,
                  s
                );
              return o.pop(), !0;
            }
            if (
              !Array.isArray(null == c ? void 0 : c.items) &&
              (null === (l = null == c ? void 0 : c.items) || void 0 === l
                ? void 0
                : l.type) === "object"
            ) {
              for (let t of e) tE(t, r, o, s, a);
              return o.pop(), !0;
            }
            if (Array.isArray(null == c ? void 0 : c.items)) {
              for (let t = 0; t < e.length; t += 1)
                n[i][t] = tm(e[t], c.items[t].format, s);
              return o.pop(), !0;
            }
          }
          return !1;
        },
        tE = (e, t, r, n, i = []) => {
          var o;
          if (!isObject(e) && !Array.isArray(e))
            return tm(e, null == t ? void 0 : t.format, n);
          if (
            Array.isArray(e) &&
            (null == t ? void 0 : t.type) === "array" &&
            (null === (o = null == t ? void 0 : t.items) || void 0 === o
              ? void 0
              : o.type) === "object"
          )
            tb({
              value: e,
              schemaProp: t,
              schema: t,
              object: e,
              key: "",
              dataPath: r,
              format: n,
              oneOfPath: i,
            });
          else
            for (let [o, s] of Object.entries(e)) {
              r.push(o);
              let a = tg(t, r, i);
              if (isNullish(a)) {
                delete e[o], r.pop();
                continue;
              }
              if (isObject(s)) {
                tE(s, t, r, n, i), r.pop();
                continue;
              }
              if (
                !tb({
                  value: s,
                  schemaProp: a,
                  schema: t,
                  object: e,
                  key: o,
                  dataPath: r,
                  format: n,
                  oneOfPath: i,
                })
              ) {
                if (
                  (null == a ? void 0 : a.format) === void 0 &&
                  (null == a ? void 0 : a.oneOf) !== void 0
                ) {
                  for (let [e, t] of a.oneOf.entries())
                    if ((null == t ? void 0 : t.format) !== void 0) {
                      a = t;
                      break;
                    }
                }
                (e[o] = tm(s, a.format, n)), r.pop();
              }
            }
          return e;
        };
      var tw = r(33154);
      e = r.hmd(e);
      var tv = Object.defineProperty,
        tA = (e, t, r) =>
          t in e
            ? tv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tx = (e, t, r) => tA(e, "symbol" != typeof t ? t + "" : t, r),
        tI =
          (((n = tI || {}).ON_TOAST_MESSAGE = "ON_TOAST_MESSAGE"),
          (n.ON_POSTED_ORDER = "ON_POSTED_ORDER"),
          (n.ON_FULFILLED_ORDER = "ON_FULFILLED_ORDER"),
          (n.ON_CANCELLED_ORDER = "ON_CANCELLED_ORDER"),
          (n.ON_EXPIRED_ORDER = "ON_EXPIRED_ORDER"),
          (n.ON_PRESIGNED_ORDER = "ON_PRESIGNED_ORDER"),
          (n.ON_ONCHAIN_TRANSACTION = "ON_ONCHAIN_TRANSACTION"),
          (n.ON_CHANGE_TRADE_PARAMS = "ON_CHANGE_TRADE_PARAMS"),
          (n.NO_WALLET_CONNECT = "NO_WALLET_CONNECT"),
          (n.ON_CONNECT_WALLET = "ON_CONNECT_WALLET"),
          (n.ON_FROM_CHAIN_CHANGE = "ON_FROM_CHAIN_CHANGE"),
          (n.ON_SUBMIT_TX = "ON_SUBMIT_TX"),
          n);
      class tO {
        constructor() {
          tx(this, "subscriptions", {});
        }
        on(e) {
          let { event: t, handler: r } = e;
          this.subscriptions[t] || (this.subscriptions[t] = []),
            this.subscriptions[t].push(r);
        }
        off(e) {
          let { event: t, handler: r } = e;
          this.subscriptions[t] &&
            (this.subscriptions[t] = this.subscriptions[t].filter(
              (e) => e !== r
            ));
        }
        emit(e, t) {
          this.subscriptions[e] &&
            this.subscriptions[e].forEach((r) => {
              console.log("emit", e, t), r(t);
            });
        }
      }
      let tT = "okxWidget";
      function t_(e, t, r) {
        let n = { key: tT, method: t, ...("object" == typeof r ? r : {}) };
        null == e || e.postMessage(n, "*");
      }
      function tN(e, t, r) {
        let n = (e) => {
          var n;
          "object" == typeof (n = e.data) &&
            null !== n &&
            "key" in n &&
            "method" in n &&
            "string" == typeof n.key &&
            "string" == typeof n.method &&
            e.data.key === tT &&
            e.data.method === t &&
            r(e.data);
        };
        return e.addEventListener("message", n), n;
      }
      function tS(e, t, r) {
        e.removeEventListener("message", r);
      }
      function tB(e, t) {
        e.removeEventListener("message", t);
      }
      var tR =
          (((i = tR || {}).ACTIVATE = "ACTIVATE"),
          (i.UPDATE_HEIGHT = "UPDATE_HEIGHT"),
          (i.SET_FULL_HEIGHT = "SET_FULL_HEIGHT"),
          (i.EMIT_OKX_EVENT = "EMIT_OKX_EVENT"),
          (i.PROVIDER_RPC_REQUEST = "PROVIDER_RPC_REQUEST"),
          (i.INTERCEPT_WINDOW_OPEN = "INTERCEPT_WINDOW_OPEN"),
          (i.LOAD_READY = "LOAD_READY"),
          i),
        tP =
          (((o = tP || {}).UPDATE_PARAMS = "UPDATE_PARAMS"),
          (o.UPDATE_APP_DATA = "UPDATE_APP_DATA"),
          (o.PROVIDER_RPC_RESPONSE = "PROVIDER_RPC_RESPONSE"),
          (o.PROVIDER_ON_EVENT = "PROVIDER_ON_EVENT"),
          (o.PROVIDER_ON_EVENT_CONNECT = "PROVIDER_ON_EVENT_CONNECT"),
          (o.PROVIDER_ONEVENT_WALLET_SATUS = "PROVIDER_ONEVENT_WALLET_SATUS"),
          (o.PROVIDER_ONEVENT_WALLET_SOLANA_SATUS =
            "PROVIDER_ONEVENT_WALLET_SOLANA_SATUS"),
          (o.UPDATE_PROVIDER = "UPDATE_PROVIDER"),
          o),
        tL =
          (((s = tL || {}).PROVIDER_ON_EVENT_CONNECT =
            "PROVIDER_ON_EVENT_CONNECT"),
          (s.PROVIDER_ON_EVENT = "PROVIDER_ON_EVENT"),
          (s.PROVIDER_ONEVENT_WALLET_SATUS = "PROVIDER_ONEVENT_WALLET_SATUS"),
          (s.NO_WALLET_CONNECT = "NO_WALLET_CONNECT"),
          s),
        tU =
          (((a = tU || {}).SWAP = "swap"),
          (a.BRIDGE = "bridge"),
          (a.AUTO = "auto"),
          a),
        tk = (((u = tk || {}).SWAP = "swap"), (u.BRIDGE = "bridge"), u),
        tC = (((l = tC || {}).LIGHT = "light"), (l.DARK = "dark"), l),
        tj =
          (((c = tj || {}).EVM = "EVM"),
          (c.SOLANA = "SOLANA"),
          (c.WALLET_CONNECT = "WALLET_CONNECT"),
          c);
      class tD {
        constructor(e, t = []) {
          tx(this, "eventEmitter", new tO()),
            tx(this, "listeners", []),
            tx(this, "widgetListener"),
            (this.contentWindow = e),
            this.updateListeners(t),
            (this.widgetListener = tN(
              this.contentWindow,
              tR.EMIT_OKX_EVENT,
              (e) => {
                let t = e.payload || (null == e ? void 0 : e.params);
                console.log("eventEmitter:", {
                  okxEvent: e,
                  event: e.event,
                  payload: t,
                });
                let r = { payload: t, data: null };
                if (
                  null != e &&
                  e.params &&
                  [tI.ON_SUBMIT_TX, tI.ON_FROM_CHAIN_CHANGE].includes(e.event)
                ) {
                  let t = null == e ? void 0 : e.params,
                    n = null;
                  try {
                    (n = JSON.parse(t[0].params)), (r.data = n || t);
                  } catch (e) {
                    console.error("Error parsing params:", e);
                  }
                }
                this.eventEmitter.emit(e.event, r);
              }
            ));
        }
        stopListeningIframe() {
          tB(this.contentWindow, this.widgetListener);
        }
        updateListeners(e) {
          for (let e of this.listeners) this.eventEmitter.off(e);
          for (let t of ((this.listeners = e || []), this.listeners))
            this.eventEmitter.on(t);
        }
      }
      var tF = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        tV = "object" == typeof self && self && self.Object === Object && self,
        tz = tF || tV || Function("return this")(),
        tq = tz.Symbol,
        tM = Object.prototype,
        tH = tM.hasOwnProperty,
        t$ = tM.toString,
        tW = tq ? tq.toStringTag : void 0,
        tG = Object.prototype.toString,
        tZ = tq ? tq.toStringTag : void 0;
      function tX(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : tZ && tZ in Object(e)
          ? (function (e) {
              var t = tH.call(e, tW),
                r = e[tW];
              try {
                e[tW] = void 0;
                var n = !0;
              } catch {}
              var i = t$.call(e);
              return n && (t ? (e[tW] = r) : delete e[tW]), i;
            })(e)
          : tG.call(e);
      }
      function tY(e) {
        return null != e && "object" == typeof e;
      }
      var tK = Array.isArray;
      function tJ(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      var tQ = /^(?:0|[1-9]\d*)$/;
      function t0(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function t1(e) {
        return (
          null != e &&
          t0(e.length) &&
          !(function (e) {
            if (!tJ(e)) return !1;
            var t = tX(e);
            return (
              "[object Function]" == t ||
              "[object GeneratorFunction]" == t ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          })(e)
        );
      }
      var t2 = Object.prototype;
      function t3(e) {
        return tY(e) && "[object Arguments]" == tX(e);
      }
      var t8 = Object.prototype,
        t4 = t8.hasOwnProperty,
        t5 = t8.propertyIsEnumerable,
        t6 = t3(
          (function () {
            return arguments;
          })()
        )
          ? t3
          : function (e) {
              return tY(e) && t4.call(e, "callee") && !t5.call(e, "callee");
            },
        t9 =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        t7 = t9 && e && !e.nodeType && e,
        re = t7 && t7.exports === t9 ? tz.Buffer : void 0,
        rt =
          (re ? re.isBuffer : void 0) ||
          function () {
            return !1;
          },
        rr = {};
      (rr["[object Float32Array]"] =
        rr["[object Float64Array]"] =
        rr["[object Int8Array]"] =
        rr["[object Int16Array]"] =
        rr["[object Int32Array]"] =
        rr["[object Uint8Array]"] =
        rr["[object Uint8ClampedArray]"] =
        rr["[object Uint16Array]"] =
        rr["[object Uint32Array]"] =
          !0),
        (rr["[object Arguments]"] =
          rr["[object Array]"] =
          rr["[object ArrayBuffer]"] =
          rr["[object Boolean]"] =
          rr["[object DataView]"] =
          rr["[object Date]"] =
          rr["[object Error]"] =
          rr["[object Function]"] =
          rr["[object Map]"] =
          rr["[object Number]"] =
          rr["[object Object]"] =
          rr["[object RegExp]"] =
          rr["[object Set]"] =
          rr["[object String]"] =
          rr["[object WeakMap]"] =
            !1);
      var rn =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        ri = rn && e && !e.nodeType && e,
        ro = ri && ri.exports === rn && tF.process,
        rs = (function () {
          try {
            return (
              (ri && ri.require && ri.require("util").types) ||
              (ro && ro.binding && ro.binding("util"))
            );
          } catch {}
        })(),
        ra = rs && rs.isTypedArray,
        ru = ra
          ? function (e) {
              return ra(e);
            }
          : function (e) {
              return tY(e) && t0(e.length) && !!rr[tX(e)];
            },
        rl = Object.prototype.hasOwnProperty,
        rc =
          ((y = Object.keys),
          (g = Object),
          function (e) {
            return y(g(e));
          }),
        rf = Object.prototype.hasOwnProperty;
      function rd(e) {
        return t1(e)
          ? (function (e, t) {
              var r = tK(e),
                n = !r && t6(e),
                i = !r && !n && rt(e),
                o = !r && !n && !i && ru(e),
                s = r || n || i || o,
                a = s
                  ? (function (e, t) {
                      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                      return n;
                    })(e.length, String)
                  : [],
                u = a.length;
              for (var l in e)
                rl.call(e, l) &&
                  !(
                    s &&
                    ("length" == l ||
                      (i && ("offset" == l || "parent" == l)) ||
                      (o &&
                        ("buffer" == l ||
                          "byteLength" == l ||
                          "byteOffset" == l)) ||
                      (function (e, t) {
                        var r = typeof e;
                        return (
                          !!(t = t ?? 9007199254740991) &&
                          ("number" == r || ("symbol" != r && tQ.test(e))) &&
                          e > -1 &&
                          e % 1 == 0 &&
                          e < t
                        );
                      })(l, u))
                  ) &&
                  a.push(l);
              return a;
            })(e)
          : (function (e) {
              if (
                ((t = e && e.constructor),
                e !== (("function" == typeof t && t.prototype) || t2))
              )
                return rc(e);
              var t,
                r = [];
              for (var n in Object(e))
                rf.call(e, n) && "constructor" != n && r.push(n);
              return r;
            })(e);
      }
      var rh = function (e, t, r) {
          for (var n = -1, i = Object(e), o = r(e), s = o.length; s--; ) {
            var a = o[++n];
            if (!1 === t(i[a], a, i)) break;
          }
          return e;
        },
        rp =
          ((m = function (e, t) {
            return e && rh(e, t, rd);
          }),
          function (e, t) {
            if (null == e) return e;
            if (!t1(e)) return m(e, t);
            for (
              var r = e.length, n = -1, i = Object(e);
              ++n < r && !1 !== t(i[n], n, i);

            );
            return e;
          });
      let ry = { SWAP: "dex-widget", BRIDGE: "dex-widget/bridge" },
        rg = {
          [tj.EVM]: "metamask",
          [tj.SOLANA]: "phantom",
          [tj.WALLET_CONNECT]: "walletconnect",
        },
        rm = (e) =>
          e
            ? {
                inputChain: e.fromChain,
                outputChain: e.toChain,
                inputCurrency: e.fromToken,
                outputCurrency: e.toToken,
              }
            : null,
        rb = (e) => {
          let {
            baseUrl: t,
            feeConfig: r,
            tokenPair: n,
            bridgeTokenPair: i,
            providerType: o,
            tradeType: s,
            theme: a,
            lang: u,
            chainIds: l,
            extraParams: c,
            walletName: f,
            defaultTab: d,
          } = e;
          rj({
            widgetVersion: "1",
            feeConfig: r,
            tokenPair: n,
            bridgeTokenPair: i,
            providerType: o,
          });
          let {
              supportTradeType: h,
              route: p,
              defaultTokenPair: y,
              formattedTokenPair: g,
              formattedBridgeTokenPair: m,
            } = (function ({
              tradeType: e,
              tokenPair: t,
              bridgeTokenPair: r,
              defaultTab: n,
            }) {
              let i = rm(t),
                o = rm(r);
              if (e === tU.SWAP)
                return {
                  supportTradeType: [tU.SWAP],
                  route: ry.SWAP,
                  defaultTokenPair: i,
                  formattedTokenPair: i,
                  formattedBridgeTokenPair: null,
                };
              if (e === tU.BRIDGE)
                return {
                  supportTradeType: [tU.BRIDGE],
                  route: ry.BRIDGE,
                  defaultTokenPair: o,
                  formattedTokenPair: null,
                  formattedBridgeTokenPair: o,
                };
              if (n === tk.SWAP)
                return {
                  supportTradeType: [tU.SWAP, tU.BRIDGE],
                  route: ry.SWAP,
                  defaultTokenPair: i,
                  formattedTokenPair: i,
                  formattedBridgeTokenPair: o,
                };
              if (n === tk.BRIDGE)
                return {
                  supportTradeType: [tU.SWAP, tU.BRIDGE],
                  route: ry.BRIDGE,
                  defaultTokenPair: o,
                  formattedTokenPair: i,
                  formattedBridgeTokenPair: o,
                };
              let s = !i && o,
                a = s ? ry.BRIDGE : ry.SWAP;
              return {
                supportTradeType: [tU.SWAP, tU.BRIDGE],
                route: a,
                defaultTokenPair: s ? o : i,
                formattedTokenPair: i,
                formattedBridgeTokenPair: o,
              };
            })({
              tradeType: s,
              tokenPair: n,
              bridgeTokenPair: i,
              defaultTab: d,
            }),
            b = {
              tradeType: h,
              theme: a,
              lang: u,
              walletType: rg[o],
              widgetVersion: "1",
              sdkVersion: "1.3.16",
              chainIds: l,
              walletName: f,
            },
            E = { ...b, ...y },
            w = new URLSearchParams();
          for (let e in E)
            if (E.hasOwnProperty(e)) {
              let t = E[e];
              "" !== t && null != t && w.append(e, t);
            }
          let v = w.toString();
          return {
            url: `${
              "string" == typeof t ? t : "https://web3.okx.com"
            }/${p}?${v}`,
            data: {
              ...b,
              tokenPair: g,
              bridgeTokenPair: m,
              feeConfig: r,
              providerType: o,
              extraParams: c,
              referrer: rN(),
            },
          };
        },
        rE = async (e) => {
          try {
            let t = await e.request({ method: "eth_chainId" }),
              r = parseInt(t, 16);
            return console.log(`log-requestChainId => decimal number: ${r}`), r;
          } catch (e) {
            return (
              console.error("log-requestChainId => Failed to get chainId:", e),
              null
            );
          }
        },
        rw = async (e) => {
          try {
            let t = await e.request({ method: "eth_accounts" });
            return console.log(`log-requestAddress: ${t.join(",")}`), t[0];
          } catch (e) {
            return (
              console.log("log-requestAddress-Failed to get account:", e), null
            );
          }
        },
        rv = (e) => e === tj.EVM,
        rA = async (e, t) => {
          console.log("log-getChainId-start", e, t);
          let r = null;
          return (
            rv(t) &&
              null === (r = await rE(e)) &&
              (r = null != e && e.chainId ? parseInt(e.chainId, 16) : null),
            t === tj.WALLET_CONNECT &&
              null != e &&
              e.chainId &&
              (r = e.chainId),
            t === tj.SOLANA && (r = 501),
            console.log("log-getChainId-end", {
              chainId: r,
              providerChainId: null == e ? void 0 : e.chainId,
            }),
            r
          );
        },
        rx = async (e, t) => {
          var r, n;
          console.log("log-getAddress-start", e, t);
          let i = null;
          return (
            t === tj.EVM && null != e && e.chainId && (i = e.selectedAddress),
            t === tj.WALLET_CONNECT &&
              null != e &&
              e.chainId &&
              (i = null == (r = e.accounts) ? void 0 : r[0]),
            !i && e && rv(t) && (i = await rw(e)),
            t === tj.SOLANA &&
              (i =
                null == (n = null == e ? void 0 : e.publicKey)
                  ? void 0
                  : n.toBase58()),
            console.log("log-getAddress-end", i),
            i
          );
        },
        rI = (e) => /^[\x20-\x7E]*$/.test(e),
        rO = (e) => {
          try {
            let t = decodeURIComponent(e);
            if (!rI(t))
              throw Error(`Decoded value contains invalid characters: ${t}`);
            return t;
          } catch (t) {
            throw Error(
              `Failed to decode URI component: ${e}. Error: ${t.message}`
            );
          }
        },
        rT = (e) => {
          let t = new URLSearchParams(new URL(e).search),
            r = {};
          for (let [e, n] of t.entries()) {
            let t = rO(n);
            r[e] = t;
          }
          return r;
        },
        r_ = (e) => {
          var t;
          if (
            (console.log("params:", e),
            "string" == typeof e ||
              (!tK(e) && tY(e) && "[object String]" == tX(e)))
          ) {
            if (!rI(e)) throw Error(`Invalid string found: ${e}`);
            return !0;
          }
          return (
            tJ(e) &&
              ((t = (e, t) => {
                if (!rI(t)) throw Error(`Invalid object key found: ${t}`);
                r_(e);
              }),
              (tK(e)
                ? function (e, t) {
                    for (
                      var r = -1, n = null == e ? 0 : e.length;
                      ++r < n && !1 !== t(e[r], r, e);

                    );
                    return e;
                  }
                : rp)(e, t)),
            !0
          );
        },
        rN = () => encodeURIComponent(window.location.origin),
        rS = (e, t) => {
          let r = new URLSearchParams();
          r.append("walletName", e);
          try {
            t &&
              Object.keys(t).forEach((e) => {
                if (e.startsWith("is")) {
                  let n = t[e];
                  "boolean" == typeof n && r.append(e, String(n));
                }
              });
          } catch (e) {
            console.error("Error getting wallet info:", e, t);
          }
          return encodeURIComponent(r.toString());
        },
        rB = {
          INVALID_FEE_CONFIG: "FeeConfig MUST be an object",
          INVALID_FEE_PERCENT: "FeePercent MUST be a number > 0 and <= 3",
          INVALID_TOKEN_PAIR: "Invalid tokenPair",
          INVALID_BRIDGE_TOKEN_PAIR: "Invalid bridgeTokenPair",
          INVALID_PROVIDER_TYPE: "Invalid providerType",
          INVALID_WIDGET_VERSION: "WIDGET_VERSION IS REQUIRED",
        },
        rR = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
        rP = (e) =>
          !Number.isNaN(Number(e)) &&
          null != e &&
          "" !== e &&
          !Array.isArray(e),
        rL = (e) => rP(e) && Number(e) > 0 && 3 >= Number(e),
        rU = (e) =>
          rR(e)
            ? Object.values(e).some((e) => {
                let t = null == e ? void 0 : e.feePercent;
                return rR(null == e ? void 0 : e.referrerAddress)
                  ? !!rR(null == e ? void 0 : e.referrerAddress) &&
                      !!Object.values(
                        null == e ? void 0 : e.referrerAddress
                      ).some((e) =>
                        rP(e.feePercent)
                          ? !rL(null == e ? void 0 : e.feePercent)
                          : !rL(t)
                      )
                  : !rL(t);
              })
              ? rB.INVALID_FEE_PERCENT
              : null
            : rB.INVALID_FEE_CONFIG,
        rk = (e) =>
          ("string" == typeof e || "number" == typeof e) && Number(e) >= 0,
        rC = (e) =>
          rk(null == e ? void 0 : e.fromChain) &&
          rk(null == e ? void 0 : e.toChain),
        rj = ({
          widgetVersion: e,
          feeConfig: t = {},
          tokenPair: r,
          bridgeTokenPair: n,
          providerType: i,
        }) => {
          let o = rg[i];
          if (!e) throw Error(rB.INVALID_WIDGET_VERSION);
          if (i && !o) throw Error(rB.INVALID_PROVIDER_TYPE);
          if (r && !rC(r)) throw Error(rB.INVALID_TOKEN_PAIR);
          if (n && !rC(n)) throw Error(rB.INVALID_BRIDGE_TOKEN_PAIR);
          let s = rU(t);
          if (s) throw Error(s);
          return !0;
        };
      class rD {
        constructor(e) {
          tx(this, "iframeWindow"), (this.iframeWindow = e);
        }
        async processTransaction(e, t, r, n, i, o) {
          var s, a;
          let u = { method: e, id: Number(t), params: n };
          try {
            if (
              ((null == i ? void 0 : i.selectedAddress) ||
                (null == (s = null == i ? void 0 : i.accounts)
                  ? void 0
                  : s[0]) ||
                (await i.request({
                  method: "eth_requestAccounts",
                  id: Date.now(),
                  params: [],
                })),
              "eth_sendTransaction" === e)
            ) {
              let s = (function (e) {
                  let t = { ...e };
                  return (
                    (e.gas || e.gasLimit) && (t.gas = tp(e.gas ?? e.gasLimit)),
                    (e.maxPriorityFeePerGas || e.maxFeePerGas) &&
                      delete t.gasPrice,
                    [
                      "gasPrice",
                      "gas",
                      "value",
                      "maxPriorityFeePerGas",
                      "maxFeePerGas",
                      "nonce",
                      "chainId",
                    ]
                      .filter((e) => !tn(t[e]))
                      .forEach((e) => {
                        t[e] = th(t[e]);
                      }),
                    t
                  );
                })(n[0]),
                l = { method: e, id: Number(t), params: [s] };
              console.log("eth_sendTransaction requestPara.params[0]", {
                requestPara: u,
                requestPayload: l,
              });
              let c = await (null == (a = null == i ? void 0 : i.request)
                ? void 0
                : a.call(i, l));
              console.log("provider.request===>", c),
                t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                  id: t,
                  mode: "iframe",
                  data: c,
                  path: r,
                  type: o,
                  error: null,
                  success: !0,
                });
            } else {
              let e = await i.request(u);
              console.log("sent evm transaction request:", e),
                t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                  id: t,
                  mode: "iframe",
                  data: e,
                  path: r,
                  type: o,
                  success: !0,
                });
            }
          } catch (e) {
            console.error("EVM Error:", e),
              t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                id: t,
                mode: "iframe",
                error: e && JSON.stringify(e),
                path: r,
                type: o,
                success: !1,
              });
          }
        }
        onProviderEvent(e, t) {
          t_(this.iframeWindow, tP.PROVIDER_ONEVENT_WALLET_SATUS, {
            event: e,
            params: t,
          });
        }
        registerProviderEventListeners(e) {
          [
            "connect",
            "disconnect",
            "close",
            "chainChanged",
            "accountsChanged",
          ].forEach((t) => {
            e.on(t, (e) => {
              this.onProviderEvent(t, e);
            });
          });
        }
      }
      let rF =
          (b = (function (e) {
            if (e.length >= 255) throw TypeError("Alphabet too long");
            for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
              t[r] = 255;
            for (var n = 0; n < e.length; n++) {
              var i = e.charAt(n),
                o = i.charCodeAt(0);
              if (255 !== t[o]) throw TypeError(i + " is ambiguous");
              t[o] = n;
            }
            var s = e.length,
              a = e.charAt(0),
              u = Math.log(s) / Math.log(256),
              l = Math.log(256) / Math.log(s);
            function c(e) {
              if ("string" != typeof e) throw TypeError("Expected String");
              if (0 === e.length) return new Uint8Array();
              for (var r = 0, n = 0, i = 0; e[r] === a; ) n++, r++;
              for (
                var o = ((e.length - r) * u + 1) >>> 0, l = new Uint8Array(o);
                e[r];

              ) {
                var c = t[e.charCodeAt(r)];
                if (255 === c) return;
                for (
                  var f = 0, d = o - 1;
                  (0 !== c || f < i) && -1 !== d;
                  d--, f++
                )
                  (c += (s * l[d]) >>> 0),
                    (l[d] = c % 256 >>> 0),
                    (c = (c / 256) >>> 0);
                if (0 !== c) throw Error("Non-zero carry");
                (i = f), r++;
              }
              for (var h = o - i; h !== o && 0 === l[h]; ) h++;
              for (var p = new Uint8Array(n + (o - h)), y = n; h !== o; )
                p[y++] = l[h++];
              return p;
            }
            return {
              encode: function (t) {
                if (
                  (t instanceof Uint8Array ||
                    (ArrayBuffer.isView(t)
                      ? (t = new Uint8Array(
                          t.buffer,
                          t.byteOffset,
                          t.byteLength
                        ))
                      : Array.isArray(t) && (t = Uint8Array.from(t))),
                  !(t instanceof Uint8Array))
                )
                  throw TypeError("Expected Uint8Array");
                if (0 === t.length) return "";
                for (
                  var r = 0, n = 0, i = 0, o = t.length;
                  i !== o && 0 === t[i];

                )
                  i++, r++;
                for (
                  var u = ((o - i) * l + 1) >>> 0, c = new Uint8Array(u);
                  i !== o;

                ) {
                  for (
                    var f = t[i], d = 0, h = u - 1;
                    (0 !== f || d < n) && -1 !== h;
                    h--, d++
                  )
                    (f += (256 * c[h]) >>> 0),
                      (c[h] = f % s >>> 0),
                      (f = (f / s) >>> 0);
                  if (0 !== f) throw Error("Non-zero carry");
                  (n = d), i++;
                }
                for (var p = u - n; p !== u && 0 === c[p]; ) p++;
                for (var y = a.repeat(r); p < u; ++p) y += e.charAt(c[p]);
                return y;
              },
              decodeUnsafe: c,
              decode: function (e) {
                var t = c(e);
                if (t) return t;
                throw Error("Non-base" + s + " character");
              },
            };
          })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")) &&
          b.__esModule &&
          Object.prototype.hasOwnProperty.call(b, "default")
            ? b.default
            : b,
        rV = (e) => {
          try {
            return tw.YW.from(rF.decode(e));
          } catch {
            let t = tw.GS.deserialize(rF.decode(e));
            return console.log("new version deserializeTransaction:", t), t;
          }
        };
      class rz {
        constructor(e) {
          tx(this, "iframeWindow"), (this.iframeWindow = e);
        }
        async processTransaction(e, t, r, n, i, o) {
          var s, a, u, l, c;
          try {
            let f = Array.isArray(n) ? n : [n],
              d = f[0],
              h = null == (s = f[0]) ? void 0 : s.onlyIfTrusted,
              p = null == (a = f[0]) ? void 0 : a.okxArgs,
              y = null == (u = f[0]) ? void 0 : u.transaction,
              g = null == (l = f[0]) ? void 0 : l.type;
            if ("signAllTransactions" === e) {
              let n = f.map(rV);
              console.log("solana signAllTransactions newParams:", n);
              let s = await i[e](n),
                a = s.map((e) => {
                  let t =
                      (null == e ? void 0 : e.signature) ||
                      (null == e ? void 0 : e.signatures[0]),
                    r = rF.encode(t),
                    n = rF.encode(e.serialize());
                  return { signature: r, serializedTransaction: n };
                });
              console.log("solana signAllTransactions request:", s, a),
                t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                  id: t,
                  mode: "iframe",
                  data: a,
                  path: r,
                  type: o,
                  success: !0,
                });
              return;
            }
            if (h) {
              t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                id: t,
                mode: "iframe",
                data: { onlyIfTrusted: !0 },
                path: r,
                type: o,
                success: !0,
              });
              return;
            }
            if ("string" == typeof d)
              try {
                let e = tw.YW.from(rF.decode(d));
                f[0] = e;
              } catch {
                let e = tw.GS.deserialize(rF.decode(d));
                console.log("new version deserializeTransaction:", e),
                  (f[0] = e);
              }
            if (p && g && y) {
              let e = tw.GS.deserialize(rF.decode(y)),
                t = null == (c = f[0]) ? void 0 : c.options;
              (f[0] = e), (f[1] = t), (f[2] = p);
            }
            let m = await i[e](...f);
            console.log("solana request:", m),
              t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                id: t,
                mode: "iframe",
                data: m,
                path: r,
                type: o,
                success: !0,
              });
          } catch (e) {
            console.error("Solana Error:", e),
              t_(this.iframeWindow, tP.PROVIDER_ON_EVENT, {
                id: t,
                mode: "iframe",
                error: JSON.stringify(e),
                path: r,
                type: o,
                success: !1,
              });
          }
        }
        onProviderEvent(e, t) {
          let r = null == t ? void 0 : t.toBase58();
          t_(this.iframeWindow, tP.PROVIDER_ONEVENT_WALLET_SOLANA_SATUS, {
            event: e,
            params: { address: r, chainId: 501, walletType: rg.SOLANA },
          });
        }
        registerProviderEventListeners(e) {
          ["connect", "disconnect", "accountChanged"].forEach((t) => {
            e.on(t, (e) => {
              this.onProviderEvent(t, e);
            });
          });
        }
        async processConnectEvent(e, t) {
          let {
            id: r,
            mode: n,
            params: i,
            path: o,
            type: s,
          } = e || {
            params: null,
            mode: null,
            id: null,
            path: null,
            type: null,
          };
          try {
            if (!t || "iframe" === n) throw Error("No Provider");
            let { method: e } = i[0] || { method: null };
            if ("solana" === s && "connect" === e) {
              if (!(null != t && t.connect)) throw Error("Not solana provider");
              t.connect()
                .then((e) => {
                  t_(this.iframeWindow, tP.PROVIDER_ON_EVENT_CONNECT, {
                    id: r,
                    mode: "iframe",
                    data: e.publicKey.toBase58(),
                    path: o,
                    type: s,
                    success: !0,
                  });
                })
                .catch((e) => {
                  t_(this.iframeWindow, tP.PROVIDER_ON_EVENT_CONNECT, {
                    id: r,
                    mode: "iframe",
                    error: JSON.stringify(e),
                    path: o,
                    type: s,
                    success: !1,
                  });
                });
            }
          } catch (e) {
            t_(this.iframeWindow, tP.PROVIDER_ON_EVENT_CONNECT, {
              id: r,
              mode: "iframe",
              error: JSON.stringify(e),
              path: o,
              type: s,
              success: !1,
            });
          }
        }
      }
      class rq {
        constructor(e, t) {
          switch ((tx(this, "strategy"), e)) {
            case tj.SOLANA:
              this.strategy = new rz(t);
              break;
            case tj.WALLET_CONNECT:
            case tj.EVM:
              this.strategy = new rD(t);
              break;
            default:
              throw Error("Unsupported provider type or network error", e);
          }
        }
        setStrategy(e) {
          this.strategy = e;
        }
        async processTransaction(e, t, r, n, i, o) {
          console.log("processTransaction:", {
            method: e,
            id: t,
            path: r,
            requestArgs: n,
            provider: i,
            type: o,
          }),
            await this.strategy.processTransaction(e, t, r, n, i, o);
        }
        registerProviderEventListeners(e) {
          this.strategy.registerProviderEventListeners(e);
        }
        async processConnectEvent(e, t) {
          this.strategy instanceof rz &&
            (console.log("processConnectEvent:", this.strategy, {
              provider: t,
            }),
            await this.strategy.processConnectEvent(e, t));
        }
      }
      class rM {
        constructor(e, t) {
          tx(this, "provider", null),
            tx(this, "processor"),
            tx(this, "listener"),
            tx(this, "connectListener"),
            tx(this, "processProviderEventFromWindow", async (e) => {
              console.log("processProviderEventFromWindow:", e);
              let { type: t } = e,
                { method: r, params: n } = e.params[0];
              await this.processor.processTransaction(
                r,
                e.id,
                e.path,
                n,
                this.provider,
                t
              );
            }),
            tx(this, "processConnectEvent", async (e) => {
              await this.processor.processConnectEvent(e, this.provider);
            }),
            (this.iframeWindow = e),
            (this.processor = new rq(t, this.iframeWindow));
        }
        disconnect() {
          (this.provider = null),
            tS(window, tL.PROVIDER_ON_EVENT, this.listener),
            tS(window, tL.PROVIDER_ON_EVENT_CONNECT, this.connectListener);
        }
        onConnect(e) {
          this.provider
            ? this.disconnect()
            : (console.log("onConnect====>"),
              (this.listener = tN(
                window,
                tL.PROVIDER_ON_EVENT,
                this.processProviderEventFromWindow
              )),
              (this.connectListener = tN(
                window,
                tL.PROVIDER_ON_EVENT_CONNECT,
                this.processConnectEvent
              ))),
            (this.provider = e),
            this.processor.registerProviderEventListeners(e);
        }
      }
      let rH = "480px",
        r$ = (function () {
          let e = Date.now().toString();
          return function () {
            return {
              id: e,
              defaultClassName: `default-widget-iframe-${e}`,
              specifiedClassName: `specified-widget-iframe-${e}`,
            };
          };
        })();
      function rW(e, { defaultClassName: t, specifiedClassName: r, width: n }) {
        (e.innerHTML = ""),
          (e.innerHTML = `
        .${t} {
            width: 450px;
            min-height: ${rH};
            border: none;
        }
        @media (max-width: 767px) {
            .${t} {
                width: 100%;
            }
        }
        .${r} {
            width: ${n}px;
            min-height: ${rH};
            border: none;
        }
    `);
      }
      function rG(e) {
        let { id: t, defaultClassName: r, specifiedClassName: n } = r$(),
          i = document.getElementById(t);
        if (i)
          return (
            rW(i, { defaultClassName: r, specifiedClassName: n, width: e }), i
          );
        let o = document.createElement("style");
        return (
          rW(o, { defaultClassName: r, specifiedClassName: n, width: e }),
          (o.id = t),
          document.head.appendChild(o),
          o
        );
      }
      function rZ(e, t) {
        let r = Number(t),
          { defaultClassName: n, specifiedClassName: i } = r$();
        r
          ? (rG(r < 375 ? 375 : r), (e.className = i))
          : (rG(450), (e.className = n));
      }
      let rX = async (e, t, r) => ({
        providerType: t,
        walletType: rg[t],
        chainId: await rA(e, t),
        address: await rx(e, t),
        walletInfo: rS(r, e),
      });
      function rY(e, t) {
        console.log("createOkxSwapWidget====>", e, t);
        let { params: r, provider: n, listeners: i } = t,
          o = n,
          { data: s, url: a } = rb(r),
          u = (function (e, t) {
            let { width: r } = e,
              n = document.createElement("iframe");
            return (
              rT(t),
              console.log("log-url", t),
              (n.src = t),
              rZ(n, r),
              (n.scrolling = "no"),
              (n.style.border = "none"),
              n
            );
          })(r, a);
        (e.innerHTML = ""), e.appendChild(u);
        let { contentWindow: l } = u;
        if (!l)
          throw (
            (console.error("Iframe does not contain a window", u),
            Error("Iframe does not contain a window!"))
          );
        let c = [],
          f = async () => {
            let e = await rX(o, s.providerType, s.walletName);
            console.log("updateProviderEmitEvent====>dex-ready", e, o),
              rJ(l, e, o);
          };
        c.push(
          ...(function (e, t = rH) {
            return [
              tN(window, tR.UPDATE_HEIGHT, (r) => {
                (e.style.height = r.height ? `${r.height}px` : t),
                  (e.style.minHeight = r.height ? `${r.height}px` : t);
              }),
              tN(window, tR.SET_FULL_HEIGHT, ({ isUpToSmall: r }) => {
                (e.style.height = r ? t : `${document.body.offsetHeight}px`),
                  (e.style.minHeight = r
                    ? t
                    : `${document.body.offsetHeight}px`);
              }),
            ];
          })(u, r.height),
          (function (e, t, r) {
            let n = tN(window, tR.LOAD_READY, () => {
              console.log("updateParams=====>dex-ready", e, t),
                rQ(e, t),
                r(),
                tB(window, n);
            });
            return n;
          })(l, s, f)
        );
        let d = new tD(window, i),
          h = rK(l, null, o, r.providerType);
        return (
          u.addEventListener("load", () => {
            console.log("updateParams====>load", o, s),
              rQ(l, s),
              rX(o, s.providerType, s.walletName)
                .then((e) => {
                  console.log("updateProviderEmitEvent====>load-success", e, o),
                    rJ(l, e, o);
                })
                .catch((e) => {
                  console.log("updateProviderEmitEvent====>load-error", o, e);
                });
          }),
          {
            updateParams: (e) => {
              let {
                width: t,
                lang: n,
                theme: i,
                walletName: a,
                extraParams: c,
              } = e;
              rZ(u, t),
                r_(
                  (s = rb({
                    ...r,
                    lang: n,
                    theme: i,
                    walletName: a,
                    extraParams: c,
                  }).data)
                ),
                console.log("updateParams====>updateParamsFunction", o, r),
                rQ(l, s);
            },
            updateListeners: (e) => d.updateListeners(e),
            updateProvider: async (e, t, r) => {
              var n;
              r_(t),
                null == h || h.disconnect(),
                null == (n = null == o ? void 0 : o.removeAllListeners) ||
                  n.call(o),
                (o = e);
              let i = await rX(o, t, r);
              (s = { ...s, ...i }),
                (h = rK(l, h, e, t)),
                console.log("updateProvider====>updateProviderFunction", e, t),
                rJ(l, i, o);
            },
            destroy: () => {
              null == h || h.disconnect(),
                d.stopListeningIframe(),
                c.forEach((e) => window.removeEventListener("message", e));
              try {
                e.removeChild(u);
              } catch (e) {
                console.error(
                  "Error removing iframe, maybe iframe is removed",
                  e
                );
              }
              (function () {
                let { id: e } = r$(),
                  t = document.getElementById(e);
                t && t.parentNode.removeChild(t);
              })();
            },
            iframeWindow: l,
          }
        );
      }
      function rK(e, t, r, n) {
        if (!r) return;
        if (!Object.values(tj).includes(n))
          throw Error("providerType is required");
        console.log("updateProvider iframeRpcProviderBridge===>", t),
          t && t.disconnect();
        let i = new rM(e, n);
        return r && i.onConnect(r), i;
      }
      function rJ(e, t, r) {
        console.trace("updateProviderEmitEvent", t, r),
          t_(e, tP.UPDATE_PROVIDER, { appParams: t, hasProvider: !!r });
      }
      function rQ(e, t) {
        console.log("updateParams====>end", t, e),
          t_(e, tP.UPDATE_PARAMS, { appParams: t });
      }
    },
    68967: function (e, t, r) {
      "use strict";
      (t._O = t.Jq = t.KB = t.u8 = t.cv = void 0),
        (t.Ik = t.A9 = t.n_ = t.gM = void 0);
      let n = r(98702);
      function i(e) {
        if (!(e instanceof Uint8Array))
          throw TypeError("b must be a Uint8Array");
      }
      function o(e) {
        return i(e), n.Buffer.from(e.buffer, e.byteOffset, e.length);
      }
      class s {
        constructor(e, t) {
          if (!Number.isInteger(e)) throw TypeError("span must be an integer");
          (this.span = e), (this.property = t);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(e, t) {
          if (0 > this.span) throw RangeError("indeterminate span");
          return this.span;
        }
        replicate(e) {
          let t = Object.create(this.constructor.prototype);
          return Object.assign(t, this), (t.property = e), t;
        }
        fromArray(e) {}
      }
      function a(e, t) {
        return t.property ? e + "[" + t.property + "]" : e;
      }
      class u extends s {
        isCount() {
          throw Error("ExternalLayout is abstract");
        }
      }
      class l extends u {
        constructor(e, t = 0, r) {
          if (!(e instanceof s)) throw TypeError("layout must be a Layout");
          if (!Number.isInteger(t))
            throw TypeError("offset must be integer or undefined");
          super(e.span, r || e.property), (this.layout = e), (this.offset = t);
        }
        isCount() {
          return this.layout instanceof c || this.layout instanceof f;
        }
        decode(e, t = 0) {
          return this.layout.decode(e, t + this.offset);
        }
        encode(e, t, r = 0) {
          return this.layout.encode(e, t, r + this.offset);
        }
      }
      class c extends s {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(e, t = 0) {
          return o(e).readUIntLE(t, this.span);
        }
        encode(e, t, r = 0) {
          return o(t).writeUIntLE(e, r, this.span), this.span;
        }
      }
      class f extends s {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(e, t = 0) {
          return o(e).readUIntBE(t, this.span);
        }
        encode(e, t, r = 0) {
          return o(t).writeUIntBE(e, r, this.span), this.span;
        }
      }
      function d(e) {
        let t = Math.floor(e / 4294967296);
        return { hi32: t, lo32: e - 4294967296 * t };
      }
      function h(e, t) {
        return 4294967296 * e + t;
      }
      class p extends s {
        constructor(e) {
          super(8, e);
        }
        decode(e, t = 0) {
          let r = o(e),
            n = r.readUInt32LE(t);
          return h(r.readUInt32LE(t + 4), n);
        }
        encode(e, t, r = 0) {
          let n = d(e),
            i = o(t);
          return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
        }
      }
      class y extends s {
        constructor(e) {
          super(8, e);
        }
        decode(e, t = 0) {
          let r = o(e),
            n = r.readUInt32LE(t);
          return h(r.readInt32LE(t + 4), n);
        }
        encode(e, t, r = 0) {
          let n = d(e),
            i = o(t);
          return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
        }
      }
      class g extends s {
        constructor(e, t, r) {
          if (!(e instanceof s))
            throw TypeError("elementLayout must be a Layout");
          if (
            !(
              (t instanceof u && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout"
            );
          let n = -1;
          t instanceof u || !(0 < e.span) || (n = t * e.span),
            super(n, r),
            (this.elementLayout = e),
            (this.count = t);
        }
        getSpan(e, t = 0) {
          if (0 <= this.span) return this.span;
          let r = 0,
            n = this.count;
          if (
            (n instanceof u && (n = n.decode(e, t)),
            0 < this.elementLayout.span)
          )
            r = n * this.elementLayout.span;
          else {
            let i = 0;
            for (; i < n; ) (r += this.elementLayout.getSpan(e, t + r)), ++i;
          }
          return r;
        }
        decode(e, t = 0) {
          let r = [],
            n = 0,
            i = this.count;
          for (i instanceof u && (i = i.decode(e, t)); n < i; )
            r.push(this.elementLayout.decode(e, t)),
              (t += this.elementLayout.getSpan(e, t)),
              (n += 1);
          return r;
        }
        encode(e, t, r = 0) {
          let n = this.elementLayout,
            i = e.reduce((e, i) => e + n.encode(i, t, r + e), 0);
          return (
            this.count instanceof u && this.count.encode(e.length, t, r), i
          );
        }
      }
      class m extends s {
        constructor(e, t, r) {
          if (
            !(Array.isArray(e) && e.reduce((e, t) => e && t instanceof s, !0))
          )
            throw TypeError("fields must be array of Layout instances");
          for (let n of ("boolean" == typeof t &&
            void 0 === r &&
            ((r = t), (t = void 0)),
          e))
            if (0 > n.span && void 0 === n.property)
              throw Error(
                "fields cannot contain unnamed variable-length layout"
              );
          let n = -1;
          try {
            n = e.reduce((e, t) => e + t.getSpan(), 0);
          } catch (e) {}
          super(n, t), (this.fields = e), (this.decodePrefixes = !!r);
        }
        getSpan(e, t = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          try {
            r = this.fields.reduce((r, n) => {
              let i = n.getSpan(e, t);
              return (t += i), r + i;
            }, 0);
          } catch (e) {
            throw RangeError("indeterminate span");
          }
          return r;
        }
        decode(e, t = 0) {
          i(e);
          let r = this.makeDestinationObject();
          for (let n of this.fields)
            if (
              (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
              (t += n.getSpan(e, t)),
              this.decodePrefixes && e.length === t)
            )
              break;
          return r;
        }
        encode(e, t, r = 0) {
          let n = r,
            i = 0,
            o = 0;
          for (let n of this.fields) {
            let s = n.span;
            if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
              let i = e[n.property];
              void 0 !== i &&
                ((o = n.encode(i, t, r)), 0 > s && (s = n.getSpan(t, r)));
            }
            (i = r), (r += s);
          }
          return i + o - n;
        }
        fromArray(e) {
          let t = this.makeDestinationObject();
          for (let r of this.fields)
            void 0 !== r.property &&
              0 < e.length &&
              (t[r.property] = e.shift());
          return t;
        }
        layoutFor(e) {
          if ("string" != typeof e) throw TypeError("property must be string");
          for (let t of this.fields) if (t.property === e) return t;
        }
        offsetOf(e) {
          if ("string" != typeof e) throw TypeError("property must be string");
          let t = 0;
          for (let r of this.fields) {
            if (r.property === e) return t;
            0 > r.span ? (t = -1) : 0 <= t && (t += r.span);
          }
        }
      }
      class b {
        constructor(e) {
          this.property = e;
        }
        decode(e, t) {
          throw Error("UnionDiscriminator is abstract");
        }
        encode(e, t, r) {
          throw Error("UnionDiscriminator is abstract");
        }
      }
      class E extends b {
        constructor(e, t) {
          if (!(e instanceof u && e.isCount()))
            throw TypeError(
              "layout must be an unsigned integer ExternalLayout"
            );
          super(t || e.property || "variant"), (this.layout = e);
        }
        decode(e, t) {
          return this.layout.decode(e, t);
        }
        encode(e, t, r) {
          return this.layout.encode(e, t, r);
        }
      }
      class w extends s {
        constructor(e, t, r) {
          let n;
          if (e instanceof c || e instanceof f) n = new E(new l(e));
          else if (e instanceof u && e.isCount()) n = new E(e);
          else if (e instanceof b) n = e;
          else
            throw TypeError(
              "discr must be a UnionDiscriminator or an unsigned integer layout"
            );
          if ((void 0 === t && (t = null), !(null === t || t instanceof s)))
            throw TypeError("defaultLayout must be null or a Layout");
          if (null !== t) {
            if (0 > t.span)
              throw Error("defaultLayout must have constant span");
            void 0 === t.property && (t = t.replicate("content"));
          }
          let i = -1;
          t &&
            0 <= (i = t.span) &&
            (e instanceof c || e instanceof f) &&
            (i += n.layout.span),
            super(i, r),
            (this.discriminator = n),
            (this.usesPrefixDiscriminator = e instanceof c || e instanceof f),
            (this.defaultLayout = t),
            (this.registry = {});
          let o = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (e) {
            return o(e);
          }),
            (this.configGetSourceVariant = function (e) {
              o = e.bind(this);
            });
        }
        getSpan(e, t = 0) {
          if (0 <= this.span) return this.span;
          let r = this.getVariant(e, t);
          if (!r)
            throw Error("unable to determine span for unrecognized variant");
          return r.getSpan(e, t);
        }
        defaultGetSourceVariant(e) {
          if (
            Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                e,
                this.defaultLayout.property
              )
            )
              return;
            let t = this.registry[e[this.discriminator.property]];
            if (
              t &&
              (!t.layout ||
                (t.property &&
                  Object.prototype.hasOwnProperty.call(e, t.property)))
            )
              return t;
          } else
            for (let t in this.registry) {
              let r = this.registry[t];
              if (
                r.property &&
                Object.prototype.hasOwnProperty.call(e, r.property)
              )
                return r;
            }
          throw Error("unable to infer src variant");
        }
        decode(e, t = 0) {
          let r;
          let n = this.discriminator,
            i = n.decode(e, t),
            o = this.registry[i];
          if (void 0 === o) {
            let o = this.defaultLayout,
              s = 0;
            this.usesPrefixDiscriminator && (s = n.layout.span),
              ((r = this.makeDestinationObject())[n.property] = i),
              (r[o.property] = o.decode(e, t + s));
          } else r = o.decode(e, t);
          return r;
        }
        encode(e, t, r = 0) {
          let n = this.getSourceVariant(e);
          if (void 0 === n) {
            let n = this.discriminator,
              i = this.defaultLayout,
              o = 0;
            return (
              this.usesPrefixDiscriminator && (o = n.layout.span),
              n.encode(e[n.property], t, r),
              o + i.encode(e[i.property], t, r + o)
            );
          }
          return n.encode(e, t, r);
        }
        addVariant(e, t, r) {
          let n = new v(this, e, t, r);
          return (this.registry[e] = n), n;
        }
        getVariant(e, t = 0) {
          let r;
          return (
            e instanceof Uint8Array
              ? (r = this.discriminator.decode(e, t))
              : (r = e),
            this.registry[r]
          );
        }
      }
      class v extends s {
        constructor(e, t, r, n) {
          if (!(e instanceof w)) throw TypeError("union must be a Union");
          if (!Number.isInteger(t) || 0 > t)
            throw TypeError("variant must be a (non-negative) integer");
          if (
            ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
          ) {
            if (!(r instanceof s)) throw TypeError("layout must be a Layout");
            if (
              null !== e.defaultLayout &&
              0 <= r.span &&
              r.span > e.defaultLayout.span
            )
              throw Error("variant span exceeds span of containing union");
            if ("string" != typeof n)
              throw TypeError("variant must have a String property");
          }
          let i = e.span;
          0 > e.span &&
            0 <= (i = r ? r.span : 0) &&
            e.usesPrefixDiscriminator &&
            (i += e.discriminator.layout.span),
            super(i, n),
            (this.union = e),
            (this.variant = t),
            (this.layout = r || null);
        }
        getSpan(e, t = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span);
          let n = 0;
          return this.layout && (n = this.layout.getSpan(e, t + r)), r + n;
        }
        decode(e, t = 0) {
          let r = this.makeDestinationObject();
          if (this !== this.union.getVariant(e, t))
            throw Error("variant mismatch");
          let n = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout
              ? (r[this.property] = this.layout.decode(e, t + n))
              : this.property
              ? (r[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (r[this.union.discriminator.property] = this.variant),
            r
          );
        }
        encode(e, t, r = 0) {
          let n = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(e, this.property))
          )
            throw TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, t, r);
          let i = n;
          if (
            this.layout &&
            (this.layout.encode(e[this.property], t, r + n),
            (i += this.layout.getSpan(t, r + n)),
            0 <= this.union.span && i > this.union.span)
          )
            throw Error("encoded variant overruns containing union");
          return i;
        }
        fromArray(e) {
          if (this.layout) return this.layout.fromArray(e);
        }
      }
      function A(e) {
        return 0 > e && (e += 4294967296), e;
      }
      class x extends s {
        constructor(e, t, r) {
          if (!(e instanceof c || e instanceof f))
            throw TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" == typeof t && void 0 === r && ((r = t), (t = !1)),
            4 < e.span)
          )
            throw RangeError("word cannot exceed 32 bits");
          super(e.span, r),
            (this.word = e),
            (this.msb = !!t),
            (this.fields = []);
          let n = 0;
          (this._packedSetValue = function (e) {
            return (n = A(e)), this;
          }),
            (this._packedGetValue = function () {
              return n;
            });
        }
        decode(e, t = 0) {
          let r = this.makeDestinationObject(),
            n = this.word.decode(e, t);
          for (let t of (this._packedSetValue(n), this.fields))
            void 0 !== t.property && (r[t.property] = t.decode(e));
          return r;
        }
        encode(e, t, r = 0) {
          let n = this.word.decode(t, r);
          for (let t of (this._packedSetValue(n), this.fields))
            if (void 0 !== t.property) {
              let r = e[t.property];
              void 0 !== r && t.encode(r);
            }
          return this.word.encode(this._packedGetValue(), t, r);
        }
        addField(e, t) {
          let r = new I(this, e, t);
          return this.fields.push(r), r;
        }
        addBoolean(e) {
          let t = new O(this, e);
          return this.fields.push(t), t;
        }
        fieldFor(e) {
          if ("string" != typeof e) throw TypeError("property must be string");
          for (let t of this.fields) if (t.property === e) return t;
        }
      }
      class I {
        constructor(e, t, r) {
          if (!(e instanceof x))
            throw TypeError("container must be a BitStructure");
          if (!Number.isInteger(t) || 0 >= t)
            throw TypeError("bits must be positive integer");
          let n = 8 * e.span,
            i = e.fields.reduce((e, t) => e + t.bits, 0);
          if (t + i > n)
            throw Error(
              "bits too long for span remainder (" +
                (n - i) +
                " of " +
                n +
                " remain)"
            );
          (this.container = e),
            (this.bits = t),
            (this.valueMask = (1 << t) - 1),
            32 === t && (this.valueMask = 4294967295),
            (this.start = i),
            this.container.msb && (this.start = n - i - t),
            (this.wordMask = A(this.valueMask << this.start)),
            (this.property = r);
        }
        decode(e, t) {
          return (
            A(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(e) {
          if (
            "number" != typeof e ||
            !Number.isInteger(e) ||
            e !== A(e & this.valueMask)
          )
            throw TypeError(
              a("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask
            );
          let t = this.container._packedGetValue(),
            r = A(e << this.start);
          this.container._packedSetValue(A(t & ~this.wordMask) | r);
        }
      }
      class O extends I {
        constructor(e, t) {
          super(e, 1, t);
        }
        decode(e, t) {
          return !!super.decode(e, t);
        }
        encode(e) {
          "boolean" == typeof e && (e = +e), super.encode(e);
        }
      }
      class T extends s {
        constructor(e, t) {
          if (
            !(
              (e instanceof u && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout"
            );
          let r = -1;
          e instanceof u || (r = e), super(r, t), (this.length = e);
        }
        getSpan(e, t) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(e, t)), r;
        }
        decode(e, t = 0) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(e, t)), o(e).slice(t, t + r);
        }
        encode(e, t, r) {
          let n = this.length;
          if (
            (this.length instanceof u && (n = e.length),
            !(e instanceof Uint8Array && n === e.length))
          )
            throw TypeError(
              a("Blob.encode", this) +
                " requires (length " +
                n +
                ") Uint8Array as src"
            );
          if (r + n > t.length)
            throw RangeError("encoding overruns Uint8Array");
          let i = o(e);
          return (
            o(t).write(i.toString("hex"), r, n, "hex"),
            this.length instanceof u && this.length.encode(n, t, r),
            n
          );
        }
      }
      (t.cv = (e, t, r) => new l(e, t, r)),
        (t.u8 = (e) => new c(1, e)),
        (t.KB = (e) => new c(2, e)),
        (t.Jq = (e) => new c(4, e)),
        (t._O = (e) => new p(e)),
        (t.gM = (e) => new y(e)),
        (t.n_ = (e, t, r) => new m(e, t, r)),
        (t.A9 = (e, t, r) => new g(e, t, r)),
        (t.Ik = (e, t) => new T(e, t));
    },
    54518: function (e, t, r) {
      "use strict";
      var n = r(4184).Buffer;
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(o + " is ambiguous");
          t[s] = i;
        }
        var a = e.length,
          u = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          c = Math.log(256) / Math.log(a);
        function f(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; e[r] === u; ) i++, r++;
          for (
            var s = ((e.length - r) * l + 1) >>> 0, c = new Uint8Array(s);
            r < e.length;

          ) {
            var f = e.charCodeAt(r);
            if (f > 255) return;
            var d = t[f];
            if (255 === d) return;
            for (var h = 0, p = s - 1; (0 !== d || h < o) && -1 !== p; p--, h++)
              (d += (a * c[p]) >>> 0),
                (c[p] = d % 256 >>> 0),
                (d = (d / 256) >>> 0);
            if (0 !== d) throw Error("Non-zero carry");
            (o = h), r++;
          }
          for (var y = s - o; y !== s && 0 === c[y]; ) y++;
          var g = n.allocUnsafe(i + (s - y));
          g.fill(0, 0, i);
          for (var m = i; y !== s; ) g[m++] = c[y++];
          return g;
        }
        return {
          encode: function (t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
              !n.isBuffer(t))
            )
              throw TypeError("Expected Buffer");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, o = 0, s = t.length; o !== s && 0 === t[o]; )
              o++, r++;
            for (
              var l = ((s - o) * c + 1) >>> 0, f = new Uint8Array(l);
              o !== s;

            ) {
              for (
                var d = t[o], h = 0, p = l - 1;
                (0 !== d || h < i) && -1 !== p;
                p--, h++
              )
                (d += (256 * f[p]) >>> 0),
                  (f[p] = d % a >>> 0),
                  (d = (d / a) >>> 0);
              if (0 !== d) throw Error("Non-zero carry");
              (i = h), o++;
            }
            for (var y = l - i; y !== l && 0 === f[y]; ) y++;
            for (var g = u.repeat(r); y < l; ++y) g += e.charAt(f[y]);
            return g;
          },
          decodeUnsafe: f,
          decode: function (e) {
            var t = f(e);
            if (t) return t;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    63052: function (e, t, r) {
      "use strict";
      var n = r(98702).Buffer,
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        s =
          (this && this.__decorate) ||
          function (e, t, r, n) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(e, t, r, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
            return o > 3 && s && Object.defineProperty(t, r, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return o(t, e), t;
          },
        u =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deserializeUnchecked =
          t.deserialize =
          t.serialize =
          t.BinaryReader =
          t.BinaryWriter =
          t.BorshError =
          t.baseDecode =
          t.baseEncode =
            void 0);
      let l = u(r(3532)),
        c = u(r(37391)),
        f = a(r(51330)),
        d = new (
          "function" != typeof TextDecoder ? f.TextDecoder : TextDecoder
        )("utf-8", { fatal: !0 });
      (t.baseEncode = function (e) {
        return (
          "string" == typeof e && (e = n.from(e, "utf8")),
          c.default.encode(n.from(e))
        );
      }),
        (t.baseDecode = function (e) {
          return n.from(c.default.decode(e));
        });
      class h extends Error {
        constructor(e) {
          super(e), (this.fieldPath = []), (this.originalMessage = e);
        }
        addToFieldPath(e) {
          this.fieldPath.splice(0, 0, e),
            (this.message =
              this.originalMessage + ": " + this.fieldPath.join("."));
        }
      }
      t.BorshError = h;
      class p {
        constructor() {
          (this.buf = n.alloc(1024)), (this.length = 0);
        }
        maybeResize() {
          this.buf.length < 16 + this.length &&
            (this.buf = n.concat([this.buf, n.alloc(1024)]));
        }
        writeU8(e) {
          this.maybeResize(),
            this.buf.writeUInt8(e, this.length),
            (this.length += 1);
        }
        writeU16(e) {
          this.maybeResize(),
            this.buf.writeUInt16LE(e, this.length),
            (this.length += 2);
        }
        writeU32(e) {
          this.maybeResize(),
            this.buf.writeUInt32LE(e, this.length),
            (this.length += 4);
        }
        writeU64(e) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(e).toArray("le", 8)));
        }
        writeU128(e) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(e).toArray("le", 16)));
        }
        writeU256(e) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(e).toArray("le", 32)));
        }
        writeU512(e) {
          this.maybeResize(),
            this.writeBuffer(n.from(new l.default(e).toArray("le", 64)));
        }
        writeBuffer(e) {
          (this.buf = n.concat([
            n.from(this.buf.subarray(0, this.length)),
            e,
            n.alloc(1024),
          ])),
            (this.length += e.length);
        }
        writeString(e) {
          this.maybeResize();
          let t = n.from(e, "utf8");
          this.writeU32(t.length), this.writeBuffer(t);
        }
        writeFixedArray(e) {
          this.writeBuffer(n.from(e));
        }
        writeArray(e, t) {
          for (let r of (this.maybeResize(), this.writeU32(e.length), e))
            this.maybeResize(), t(r);
        }
        toArray() {
          return this.buf.subarray(0, this.length);
        }
      }
      function y(e, t, r) {
        let n = r.value;
        r.value = function (...e) {
          try {
            return n.apply(this, e);
          } catch (e) {
            if (
              e instanceof RangeError &&
              ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(
                e.code
              ) >= 0
            )
              throw new h("Reached the end of buffer when deserializing");
            throw e;
          }
        };
      }
      t.BinaryWriter = p;
      class g {
        constructor(e) {
          (this.buf = e), (this.offset = 0);
        }
        readU8() {
          let e = this.buf.readUInt8(this.offset);
          return (this.offset += 1), e;
        }
        readU16() {
          let e = this.buf.readUInt16LE(this.offset);
          return (this.offset += 2), e;
        }
        readU32() {
          let e = this.buf.readUInt32LE(this.offset);
          return (this.offset += 4), e;
        }
        readU64() {
          let e = this.readBuffer(8);
          return new l.default(e, "le");
        }
        readU128() {
          let e = this.readBuffer(16);
          return new l.default(e, "le");
        }
        readU256() {
          let e = this.readBuffer(32);
          return new l.default(e, "le");
        }
        readU512() {
          let e = this.readBuffer(64);
          return new l.default(e, "le");
        }
        readBuffer(e) {
          if (this.offset + e > this.buf.length)
            throw new h(`Expected buffer length ${e} isn't within bounds`);
          let t = this.buf.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }
        readString() {
          let e = this.readU32(),
            t = this.readBuffer(e);
          try {
            return d.decode(t);
          } catch (e) {
            throw new h(`Error decoding UTF-8 string: ${e}`);
          }
        }
        readFixedArray(e) {
          return new Uint8Array(this.readBuffer(e));
        }
        readArray(e) {
          let t = this.readU32(),
            r = [];
          for (let n = 0; n < t; ++n) r.push(e());
          return r;
        }
      }
      function m(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function b(e, t, r, n, i) {
        try {
          if ("string" == typeof n) i[`write${m(n)}`](r);
          else if (n instanceof Array) {
            if ("number" == typeof n[0]) {
              if (r.length !== n[0])
                throw new h(
                  `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
                );
              i.writeFixedArray(r);
            } else if (2 === n.length && "number" == typeof n[1]) {
              if (r.length !== n[1])
                throw new h(
                  `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
                );
              for (let t = 0; t < n[1]; t++) b(e, null, r[t], n[0], i);
            } else
              i.writeArray(r, (r) => {
                b(e, t, r, n[0], i);
              });
          } else if (void 0 !== n.kind)
            switch (n.kind) {
              case "option":
                null == r
                  ? i.writeU8(0)
                  : (i.writeU8(1), b(e, t, r, n.type, i));
                break;
              case "map":
                i.writeU32(r.size),
                  r.forEach((r, o) => {
                    b(e, t, o, n.key, i), b(e, t, r, n.value, i);
                  });
                break;
              default:
                throw new h(`FieldType ${n} unrecognized`);
            }
          else E(e, r, i);
        } catch (e) {
          throw (e instanceof h && e.addToFieldPath(t), e);
        }
      }
      function E(e, t, r) {
        if ("function" == typeof t.borshSerialize) {
          t.borshSerialize(r);
          return;
        }
        let n = e.get(t.constructor);
        if (!n) throw new h(`Class ${t.constructor.name} is missing in schema`);
        if ("struct" === n.kind)
          n.fields.map(([n, i]) => {
            b(e, n, t[n], i, r);
          });
        else if ("enum" === n.kind) {
          let i = t[n.field];
          for (let o = 0; o < n.values.length; ++o) {
            let [s, a] = n.values[o];
            if (s === i) {
              r.writeU8(o), b(e, s, t[s], a, r);
              break;
            }
          }
        } else
          throw new h(
            `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
          );
      }
      function w(e, t, r, n) {
        try {
          if ("string" == typeof r) return n[`read${m(r)}`]();
          if (r instanceof Array) {
            if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
            if ("number" != typeof r[1])
              return n.readArray(() => w(e, t, r[0], n));
            {
              let t = [];
              for (let i = 0; i < r[1]; i++) t.push(w(e, null, r[0], n));
              return t;
            }
          }
          if ("option" === r.kind) {
            if (n.readU8()) return w(e, t, r.type, n);
            return;
          }
          if ("map" === r.kind) {
            let i = new Map(),
              o = n.readU32();
            for (let s = 0; s < o; s++) {
              let o = w(e, t, r.key, n),
                s = w(e, t, r.value, n);
              i.set(o, s);
            }
            return i;
          }
          return v(e, r, n);
        } catch (e) {
          throw (e instanceof h && e.addToFieldPath(t), e);
        }
      }
      function v(e, t, r) {
        if ("function" == typeof t.borshDeserialize)
          return t.borshDeserialize(r);
        let n = e.get(t);
        if (!n) throw new h(`Class ${t.name} is missing in schema`);
        if ("struct" === n.kind) {
          let n = {};
          for (let [i, o] of e.get(t).fields) n[i] = w(e, i, o, r);
          return new t(n);
        }
        if ("enum" === n.kind) {
          let i = r.readU8();
          if (i >= n.values.length)
            throw new h(`Enum index: ${i} is out of range`);
          let [o, s] = n.values[i],
            a = w(e, o, s, r);
          return new t({ [o]: a });
        }
        throw new h(
          `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
        );
      }
      s([y], g.prototype, "readU8", null),
        s([y], g.prototype, "readU16", null),
        s([y], g.prototype, "readU32", null),
        s([y], g.prototype, "readU64", null),
        s([y], g.prototype, "readU128", null),
        s([y], g.prototype, "readU256", null),
        s([y], g.prototype, "readU512", null),
        s([y], g.prototype, "readString", null),
        s([y], g.prototype, "readFixedArray", null),
        s([y], g.prototype, "readArray", null),
        (t.BinaryReader = g),
        (t.serialize = function (e, t, r = p) {
          let n = new r();
          return E(e, t, n), n.toArray();
        }),
        (t.deserialize = function (e, t, r, n = g) {
          let i = new n(r),
            o = v(e, t, i);
          if (i.offset < r.length)
            throw new h(
              `Unexpected ${r.length - i.offset} bytes after deserialized data`
            );
          return o;
        }),
        (t.deserializeUnchecked = function (e, t, r, n = g) {
          return v(e, t, new n(r));
        });
    },
    37391: function (e, t, r) {
      var n = r(54518);
      e.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    95435: function (e, t, r) {
      "use strict";
      let n = r(24303).v4,
        i = r(56032),
        o = function (e, t) {
          if (!(this instanceof o)) return new o(e, t);
          t || (t = {}),
            (this.options = {
              reviver: void 0 !== t.reviver ? t.reviver : null,
              replacer: void 0 !== t.replacer ? t.replacer : null,
              generator:
                void 0 !== t.generator
                  ? t.generator
                  : function () {
                      return n();
                    },
              version: void 0 !== t.version ? t.version : 2,
              notificationIdNull:
                "boolean" == typeof t.notificationIdNull &&
                t.notificationIdNull,
            }),
            (this.callServer = e);
        };
      (e.exports = o),
        (o.prototype.request = function (e, t, r, n) {
          let o;
          let s = this,
            a = null,
            u = Array.isArray(e) && "function" == typeof t;
          if (1 === this.options.version && u)
            throw TypeError("JSON-RPC 1.0 does not support batching");
          let l = !u && e && "object" == typeof e && "function" == typeof t;
          if (u || l) (n = t), (a = e);
          else {
            "function" == typeof r && ((n = r), (r = void 0));
            let o = "function" == typeof n;
            try {
              a = i(e, t, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (e) {
              if (o) return n(e);
              throw e;
            }
            if (!o) return a;
          }
          try {
            o = JSON.stringify(a, this.options.replacer);
          } catch (e) {
            return n(e);
          }
          return (
            this.callServer(o, function (e, t) {
              s._parseResponse(e, t, n);
            }),
            a
          );
        }),
        (o.prototype._parseResponse = function (e, t, r) {
          let n;
          if (e) {
            r(e);
            return;
          }
          if (!t) return r();
          try {
            n = JSON.parse(t, this.options.reviver);
          } catch (e) {
            return r(e);
          }
          if (3 === r.length) {
            if (!Array.isArray(n)) return r(null, n.error, n.result);
            {
              let e = function (e) {
                return void 0 !== e.error;
              };
              return r(
                null,
                n.filter(e),
                n.filter(function (t) {
                  return !e(t);
                })
              );
            }
          }
          r(null, n);
        });
    },
    56032: function (e, t, r) {
      "use strict";
      let n = r(24303).v4;
      e.exports = function (e, t, r, i) {
        if ("string" != typeof e) throw TypeError(e + " must be a string");
        let o = "number" == typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
        let s = { method: e };
        if ((2 === o && (s.jsonrpc = "2.0"), t)) {
          if ("object" != typeof t && !Array.isArray(t))
            throw TypeError(t + " must be an object, array or omitted");
          s.params = t;
        }
        if (void 0 === r) {
          let e =
            "function" == typeof i.generator
              ? i.generator
              : function () {
                  return n();
                };
          s.id = e(s, i);
        } else
          2 === o && null === r
            ? i.notificationIdNull && (s.id = null)
            : (s.id = r);
        return s;
      };
    },
    92286: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(79432),
        i = r.n(n);
    },
    79432: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(14080);
      r(90132), r(55881);
      let i = n._(r(18231));
      function o(e, t) {
        var r;
        let n = {
          loading: (e) => {
            let { error: t, isLoading: r, pastDelay: n } = e;
            return null;
          },
        };
        "function" == typeof e && (n.loader = e);
        let o = { ...n, ...t };
        return (0, i.default)({
          ...o,
          modules: null == (r = o.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    27467: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(14677);
      function i(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
        return r;
      }
    },
    18231: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(90132),
        i = r(55881),
        o = r(27467),
        s = r(65679);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let u = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...u, ...e },
            r = (0, i.lazy)(() => t.loader().then(a)),
            l = t.loading;
          function c(e) {
            let a = l
                ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, n.jsx)(s.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(i.Suspense, { fallback: a, children: u });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    65679: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(90132),
        i = r(64926);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = (0, i.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: o.map((e) =>
                (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    40310: function (e, t) {
      "use strict";
      var r = Symbol.for("react.element"),
        n =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        i = Object.assign,
        o = {};
      function s(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = r || n);
      }
      function a() {}
      function u(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = r || n);
      }
      (s.prototype.isReactComponent = {}),
        (s.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (s.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (a.prototype = s.prototype);
      var l = (u.prototype = new a());
      (l.constructor = u), i(l, s.prototype), (l.isPureReactComponent = !0);
      var c = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, n) {
        var i,
          o = {},
          s = null,
          a = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            c.call(t, i) && !f.hasOwnProperty(i) && (o[i] = t[i]);
        var u = arguments.length - 2;
        if (1 === u) o.children = n;
        else if (1 < u) {
          for (var l = Array(u), d = 0; d < u; d++) l[d] = arguments[d + 2];
          o.children = l;
        }
        if (e && e.defaultProps)
          for (i in (u = e.defaultProps)) void 0 === o[i] && (o[i] = u[i]);
        return { $$typeof: r, type: e, key: s, ref: a, props: o, _owner: null };
      };
    },
    86442: function (e, t, r) {
      "use strict";
      e.exports = r(40310);
    },
    4184: function (e, t, r) {
      var n = r(98702),
        i = n.Buffer;
      function o(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function s(e, t, r) {
        return i(e, t, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (e, t, r) {
          if ("number" == typeof e)
            throw TypeError("Argument must not be a number");
          return i(e, t, r);
        }),
        (s.alloc = function (e, t, r) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          var n = i(e);
          return (
            void 0 !== t
              ? "string" == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return i(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(e);
        });
    },
    51330: function (e, t) {
      "use strict";
      function r(e, t, r) {
        return t <= e && e <= r;
      }
      function n(e) {
        if (void 0 === e) return {};
        if (e === Object(e)) return e;
        throw TypeError("Could not convert argument to dictionary");
      }
      function i(e) {
        this.tokens = [].slice.call(e);
      }
      function o(e, t) {
        if (e) throw TypeError("Decoder error");
        return t || 65533;
      }
      i.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (e) {
          if (Array.isArray(e)) for (; e.length; ) this.tokens.unshift(e.pop());
          else this.tokens.unshift(e);
        },
        push: function (e) {
          if (Array.isArray(e)) for (; e.length; ) this.tokens.push(e.shift());
          else this.tokens.push(e);
        },
      };
      var s = "utf-8";
      function a(e, t) {
        if (!(this instanceof a)) return new a(e, t);
        if ((e = void 0 !== e ? String(e).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (t = n(t)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!t.fatal),
          (this._ignoreBOM = !!t.ignoreBOM),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function u(e, t) {
        if (!(this instanceof u)) return new u(e, t);
        if ((e = void 0 !== e ? String(e).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (t = n(t)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!t.fatal }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function l(e) {
        var t = e.fatal,
          n = 0,
          i = 0,
          s = 0,
          a = 128,
          u = 191;
        this.handler = function (e, l) {
          if (-1 === l && 0 !== s) return (s = 0), o(t);
          if (-1 === l) return -1;
          if (0 === s) {
            if (r(l, 0, 127)) return l;
            if (r(l, 194, 223)) (s = 1), (n = l - 192);
            else if (r(l, 224, 239))
              224 === l && (a = 160),
                237 === l && (u = 159),
                (s = 2),
                (n = l - 224);
            else {
              if (!r(l, 240, 244)) return o(t);
              240 === l && (a = 144),
                244 === l && (u = 143),
                (s = 3),
                (n = l - 240);
            }
            return (n <<= 6 * s), null;
          }
          if (!r(l, a, u))
            return (n = s = i = 0), (a = 128), (u = 191), e.prepend(l), o(t);
          if (
            ((a = 128),
            (u = 191),
            (i += 1),
            (n += (l - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var c = n;
          return (n = s = i = 0), c;
        };
      }
      function c(e) {
        e.fatal,
          (this.handler = function (e, t) {
            if (-1 === t) return -1;
            if (r(t, 0, 127)) return t;
            r(t, 128, 2047)
              ? ((n = 1), (i = 192))
              : r(t, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(t, 65536, 1114111) && ((n = 3), (i = 240));
            for (var n, i, o = [(t >> (6 * n)) + i]; n > 0; ) {
              var s = t >> (6 * (n - 1));
              o.push(128 | (63 & s)), (n -= 1);
            }
            return o;
          });
      }
      (a.prototype = {
        decode: function (e, t) {
          (r =
            "object" == typeof e && e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : "object" == typeof e &&
                "buffer" in e &&
                e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : new Uint8Array(0)),
            (t = n(t)),
            this._streaming ||
              ((this._decoder = new l({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!t.stream);
          for (
            var r, o, s = new i(r), a = [];
            !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));

          )
            null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          if (!this._streaming) {
            do {
              if (-1 === (o = this._decoder.handler(s, s.read()))) break;
              if (null === o) continue;
              Array.isArray(o) ? a.push.apply(a, o) : a.push(o);
            } while (!s.endOfStream());
            this._decoder = null;
          }
          return (
            !a.length ||
              -1 === ["utf-8"].indexOf(this.encoding) ||
              this._ignoreBOM ||
              this._BOMseen ||
              (65279 === a[0]
                ? ((this._BOMseen = !0), a.shift())
                : (this._BOMseen = !0)),
            (function (e) {
              for (var t = "", r = 0; r < e.length; ++r) {
                var n = e[r];
                n <= 65535
                  ? (t += String.fromCharCode(n))
                  : ((n -= 65536),
                    (t += String.fromCharCode(
                      (n >> 10) + 55296,
                      (1023 & n) + 56320
                    )));
              }
              return t;
            })(a)
          );
        },
      }),
        (u.prototype = {
          encode: function (e, t) {
            (e = e ? String(e) : ""),
              (t = n(t)),
              this._streaming || (this._encoder = new c(this._options)),
              (this._streaming = !!t.stream);
            for (
              var r,
                o = [],
                s = new i(
                  (function (e) {
                    for (
                      var t = String(e), r = t.length, n = 0, i = [];
                      n < r;

                    ) {
                      var o = t.charCodeAt(n);
                      if (o < 55296 || o > 57343) i.push(o);
                      else if (56320 <= o && o <= 57343) i.push(65533);
                      else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                          var s = e.charCodeAt(n + 1);
                          if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                              u = 1023 & s;
                            i.push(65536 + (a << 10) + u), (n += 1);
                          } else i.push(65533);
                        }
                      }
                      n += 1;
                    }
                    return i;
                  })(e)
                );
              !s.endOfStream() &&
              -1 !== (r = this._encoder.handler(s, s.read()));

            )
              Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (t.TextEncoder = u),
        (t.TextDecoder = a);
    },
    24303: function (e, t, r) {
      "use strict";
      r.d(t, {
        v4: function () {
          return l;
        },
      });
      for (
        var n,
          i = new Uint8Array(16),
          o =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          s = [],
          a = 0;
        a < 256;
        ++a
      )
        s.push((a + 256).toString(16).substr(1));
      var u = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              s[e[t + 0]] +
              s[e[t + 1]] +
              s[e[t + 2]] +
              s[e[t + 3]] +
              "-" +
              s[e[t + 4]] +
              s[e[t + 5]] +
              "-" +
              s[e[t + 6]] +
              s[e[t + 7]] +
              "-" +
              s[e[t + 8]] +
              s[e[t + 9]] +
              "-" +
              s[e[t + 10]] +
              s[e[t + 11]] +
              s[e[t + 12]] +
              s[e[t + 13]] +
              s[e[t + 14]] +
              s[e[t + 15]]
            ).toLowerCase();
          if (!("string" == typeof r && o.test(r)))
            throw TypeError("Stringified UUID is invalid");
          return r;
        },
        l = function (e, t, r) {
          var o =
            (e = e || {}).random ||
            (
              e.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto &&
                      "function" == typeof msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto)))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return n(i);
              }
            )();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
            r = r || 0;
            for (var s = 0; s < 16; ++s) t[r + s] = o[s];
            return t;
          }
          return u(o);
        };
    },
    54866: function (e, t, r) {
      "use strict";
      r.d(t, {
        D1: function () {
          return p;
        },
        Kd: function () {
          return y;
        },
        Mx: function () {
          return h;
        },
      });
      var n = r(2278),
        i = r(26979);
      let o = BigInt(0),
        s = BigInt(1);
      function a(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function u(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function l(e, t) {
        return (
          u(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let c = new WeakMap(),
        f = new WeakMap();
      function d(e) {
        return f.get(e) || 1;
      }
      function h(e, t) {
        return {
          constTimeNegate: a,
          hasPrecomputes: (e) => 1 !== d(e),
          unsafeLadder(t, r, n = e.ZERO) {
            let i = t;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(e, r) {
            let { windows: n, windowSize: i } = l(r, t),
              o = [],
              s = e,
              a = s;
            for (let e = 0; e < n; e++) {
              (a = s), o.push(a);
              for (let e = 1; e < i; e++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(r, n, i) {
            let { windows: o, windowSize: u } = l(r, t),
              c = e.ZERO,
              f = e.BASE,
              d = BigInt(2 ** r - 1),
              h = 2 ** r,
              p = BigInt(r);
            for (let e = 0; e < o; e++) {
              let t = e * u,
                r = Number(i & d);
              (i >>= p), r > u && ((r -= h), (i += s));
              let o = t + Math.abs(r) - 1,
                l = e % 2 != 0,
                y = r < 0;
              0 === r ? (f = f.add(a(l, n[t]))) : (c = c.add(a(y, n[o])));
            }
            return { p: c, f };
          },
          wNAFUnsafe(r, n, i, a = e.ZERO) {
            let { windows: u, windowSize: c } = l(r, t),
              f = BigInt(2 ** r - 1),
              d = 2 ** r,
              h = BigInt(r);
            for (let e = 0; e < u; e++) {
              let t = e * c;
              if (i === o) break;
              let r = Number(i & f);
              if (((i >>= h), r > c && ((r -= d), (i += s)), 0 === r)) continue;
              let u = n[t + Math.abs(r) - 1];
              r < 0 && (u = u.negate()), (a = a.add(u));
            }
            return a;
          },
          getPrecomputes(e, t, r) {
            let n = c.get(t);
            return (
              n ||
                ((n = this.precomputeWindow(t, e)), 1 !== e && c.set(t, r(n))),
              n
            );
          },
          wNAFCached(e, t, r) {
            let n = d(e);
            return this.wNAF(n, this.getPrecomputes(n, e, r), t);
          },
          wNAFCachedUnsafe(e, t, r, n) {
            let i = d(e);
            return 1 === i
              ? this.unsafeLadder(e, t, n)
              : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n);
          },
          setWindowSize(e, r) {
            u(r, t), f.set(e, r), c.delete(e);
          },
        };
      }
      function p(e, t, r, n) {
        if (
          (!(function (e, t) {
            if (!Array.isArray(e)) throw Error("array expected");
            e.forEach((e, r) => {
              if (!(e instanceof t)) throw Error("invalid point at index " + r);
            });
          })(r, e),
          !(function (e, t) {
            if (!Array.isArray(e)) throw Error("array of scalars expected");
            e.forEach((e, r) => {
              if (!t.isValid(e)) throw Error("invalid scalar at index " + r);
            });
          })(n, t),
          r.length !== n.length)
        )
          throw Error("arrays of points and scalars must have equal length");
        let o = e.ZERO,
          s = (0, i.Dd)(BigInt(r.length)),
          a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          u = (1 << a) - 1,
          l = Array(u + 1).fill(o),
          c = Math.floor((t.BITS - 1) / a) * a,
          f = o;
        for (let e = c; e >= 0; e -= a) {
          l.fill(o);
          for (let t = 0; t < n.length; t++) {
            let i = Number((n[t] >> BigInt(e)) & BigInt(u));
            l[i] = l[i].add(r[t]);
          }
          let t = o;
          for (let e = l.length - 1, r = o; e > 0; e--)
            (r = r.add(l[e])), (t = t.add(r));
          if (((f = f.add(t)), 0 !== e))
            for (let e = 0; e < a; e++) f = f.double();
        }
        return f;
      }
      function y(e) {
        return (
          (0, n.OP)(e.Fp),
          (0, i.FF)(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, n.kK)(e.n, e.nBitLength),
            ...e,
            p: e.Fp.ORDER,
          })
        );
      }
    },
    2278: function (e, t, r) {
      "use strict";
      r.d(t, {
        OP: function () {
          return g;
        },
        PS: function () {
          return w;
        },
        Tu: function () {
          return p;
        },
        U_: function () {
          return h;
        },
        Us: function () {
          return v;
        },
        gN: function () {
          return b;
        },
        kK: function () {
          return m;
        },
        oA: function () {
          return d;
        },
        wQ: function () {
          return f;
        },
      });
      var n = r(26979);
      let i = BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        u = BigInt(4),
        l = BigInt(5),
        c = BigInt(8);
      function f(e, t) {
        let r = e % t;
        return r >= i ? r : t + r;
      }
      function d(e, t, r) {
        let n = e;
        for (; t-- > i; ) (n *= n), (n %= r);
        return n;
      }
      function h(e, t) {
        if (e === i) throw Error("invert: expected non-zero number");
        if (t <= i) throw Error("invert: expected positive modulus, got " + t);
        let r = f(e, t),
          n = t,
          s = i,
          a = o,
          u = o,
          l = i;
        for (; r !== i; ) {
          let e = n / r,
            t = n % r,
            i = s - u * e,
            o = a - l * e;
          (n = r), (r = t), (s = u), (a = l), (u = i), (l = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return f(s, t);
      }
      let p = (e, t) => (f(e, t) & o) === o,
        y = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function g(e) {
        let t = y.reduce((e, t) => ((e[t] = "function"), e), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, n.FF)(e, t);
      }
      function m(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function b(e, t, r = !1, d = {}) {
        let p;
        if (e <= i) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: y, nByteLength: g } = m(e, t);
        if (g > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let b = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: y,
          BYTES: g,
          MASK: (0, n.dQ)(y),
          ZERO: i,
          ONE: o,
          create: (t) => f(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return i <= t && t < e;
          },
          is0: (e) => e === i,
          isOdd: (e) => (e & o) === o,
          neg: (t) => f(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => f(t * t, e),
          add: (t, r) => f(t + r, e),
          sub: (t, r) => f(t - r, e),
          mul: (t, r) => f(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < i) throw Error("invalid exponent, negatives unsupported");
              if (r === i) return e.ONE;
              if (r === o) return t;
              let n = e.ONE,
                s = t;
              for (; r > i; )
                r & o && (n = e.mul(n, s)), (s = e.sqr(s)), (r >>= o);
              return n;
            })(b, e, t),
          div: (t, r) => f(t * h(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => h(t, e),
          sqrt:
            d.sqrt ||
            ((t) => (
              p ||
                (p = (function (e) {
                  if (e % u === a) {
                    let t = (e + o) / u;
                    return function (e, r) {
                      let n = e.pow(r, t);
                      if (!e.eql(e.sqr(n), r))
                        throw Error("Cannot find square root");
                      return n;
                    };
                  }
                  if (e % c === l) {
                    let t = (e - l) / c;
                    return function (e, r) {
                      let n = e.mul(r, s),
                        i = e.pow(n, t),
                        o = e.mul(r, i),
                        a = e.mul(e.mul(o, s), i),
                        u = e.mul(o, e.sub(a, e.ONE));
                      if (!e.eql(e.sqr(u), r))
                        throw Error("Cannot find square root");
                      return u;
                    };
                  }
                  return (function (e) {
                    let t, r, n;
                    let a = (e - o) / s;
                    for (t = e - o, r = 0; t % s === i; t /= s, r++);
                    for (
                      n = s;
                      n < e &&
                      (function (e, t, r) {
                        if (t < i)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= i) throw Error("invalid modulus");
                        if (r === o) return i;
                        let n = o;
                        for (; t > i; )
                          t & o && (n = (n * e) % r),
                            (e = (e * e) % r),
                            (t >>= o);
                        return n;
                      })(n, a, e) !==
                        e - o;
                      n++
                    )
                      if (n > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + o) / u;
                      return function (e, r) {
                        let n = e.pow(r, t);
                        if (!e.eql(e.sqr(n), r))
                          throw Error("Cannot find square root");
                        return n;
                      };
                    }
                    let l = (t + o) / s;
                    return function (e, i) {
                      if (e.pow(i, a) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let s = r,
                        u = e.pow(e.mul(e.ONE, n), t),
                        c = e.pow(i, l),
                        f = e.pow(i, t);
                      for (; !e.eql(f, e.ONE); ) {
                        if (e.eql(f, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(f); t < s && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(u, o << BigInt(s - t - 1));
                        (u = e.sqr(r)),
                          (c = e.mul(c, r)),
                          (f = e.mul(f, u)),
                          (s = t);
                      }
                      return c;
                    };
                  })(e);
                })(e)),
              p(b, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                n = t.reduce(
                  (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
                  e.ONE
                ),
                i = e.inv(n);
              return (
                t.reduceRight(
                  (t, n, i) =>
                    e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
                  i
                ),
                r
              );
            })(b, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? (0, n.S5)(e, g) : (0, n.tL)(e, g)),
          fromBytes: (e) => {
            if (e.length !== g)
              throw Error(
                "Field.fromBytes: expected " + g + " bytes, got " + e.length
              );
            return r ? (0, n.ty)(e) : (0, n.bytesToNumberBE)(e);
          },
        });
        return Object.freeze(b);
      }
      function E(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function w(e) {
        let t = E(e);
        return t + Math.ceil(t / 2);
      }
      function v(e, t, r = !1) {
        let i = e.length,
          s = E(t),
          a = w(t);
        if (i < 16 || i < a || i > 1024)
          throw Error("expected " + a + "-1024 bytes of input, got " + i);
        let u = f(r ? (0, n.ty)(e) : (0, n.bytesToNumberBE)(e), t - o) + o;
        return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s);
      }
    },
    26979: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dd: function () {
          return O;
        },
        FF: function () {
          return R;
        },
        Fy: function () {
          return I;
        },
        H9: function () {
          return P;
        },
        S5: function () {
          return E;
        },
        Z2: function () {
          return x;
        },
        _t: function () {
          return s;
        },
        bytesToNumberBE: function () {
          return g;
        },
        ci: function () {
          return c;
        },
        dQ: function () {
          return T;
        },
        eV: function () {
          return v;
        },
        gk: function () {
          return a;
        },
        hexToBytes: function () {
          return y;
        },
        n$: function () {
          return S;
        },
        ql: function () {
          return w;
        },
        tL: function () {
          return b;
        },
        ty: function () {
          return m;
        },
        uw: function () {
          return u;
        },
        uz: function () {
          return f;
        },
      });
      let n = BigInt(0),
        i = BigInt(1),
        o = BigInt(2);
      function s(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function a(e) {
        if (!s(e)) throw Error("Uint8Array expected");
      }
      function u(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let l = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function c(e) {
        a(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += l[e[r]];
        return t;
      }
      function f(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function d(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? n : BigInt("0x" + e);
      }
      let h = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function p(e) {
        return e >= h._0 && e <= h._9
          ? e - h._0
          : e >= h.A && e <= h.F
          ? e - (h.A - 10)
          : e >= h.a && e <= h.f
          ? e - (h.a - 10)
          : void 0;
      }
      function y(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = p(e.charCodeAt(i)),
            o = p(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          n[t] = 16 * r + o;
        }
        return n;
      }
      function g(e) {
        return d(c(e));
      }
      function m(e) {
        return a(e), d(c(Uint8Array.from(e).reverse()));
      }
      function b(e, t) {
        return y(e.toString(16).padStart(2 * t, "0"));
      }
      function E(e, t) {
        return b(e, t).reverse();
      }
      function w(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = y(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (s(t)) n = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(e + " of length " + r + " expected, got " + i);
        return n;
      }
      function v(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          a(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let A = (e) => "bigint" == typeof e && n <= e;
      function x(e, t, r) {
        return A(e) && A(t) && A(r) && t <= e && e < r;
      }
      function I(e, t, r, n) {
        if (!x(t, r, n))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
          );
      }
      function O(e) {
        let t;
        for (t = 0; e > n; e >>= i, t += 1);
        return t;
      }
      let T = (e) => (o << BigInt(e - 1)) - i,
        _ = (e) => new Uint8Array(e),
        N = (e) => Uint8Array.from(e);
      function S(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = _(e),
          i = _(e),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...e) => r(i, n, ...e),
          u = (e = _()) => {
            (i = a(N([0]), e)),
              (n = a()),
              0 !== e.length && ((i = a(N([1]), e)), (n = a()));
          },
          l = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (n = a()).slice();
              r.push(t), (e += n.length);
            }
            return v(...r);
          };
        return (e, t) => {
          let r;
          for (s(), u(e); !(r = t(l())); ) u();
          return s(), r;
        };
      }
      let B = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || s(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function R(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = B[r];
          if ("function" != typeof i) throw Error("invalid validator function");
          let o = e[t];
          if ((!n || void 0 !== o) && !i(o, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + o
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      function P(e) {
        let t = new WeakMap();
        return (r, ...n) => {
          let i = t.get(r);
          if (void 0 !== i) return i;
          let o = e(r, ...n);
          return t.set(r, o), o;
        };
      }
    },
    70463: function (e, t, r) {
      "use strict";
      r.d(t, {
        UN: function () {
          return S;
        },
      });
      var n = r(54740),
        i = r(32345),
        o = r(27583);
      let [s, a] = i.ZP.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        u = new Uint32Array(80),
        l = new Uint32Array(80);
      class c extends n.VR {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: u,
            El: l,
            Fh: c,
            Fl: f,
            Gh: d,
            Gl: h,
            Hh: p,
            Hl: y,
          } = this;
          return [e, t, r, n, i, o, s, a, u, l, c, f, d, h, p, y];
        }
        set(e, t, r, n, i, o, s, a, u, l, c, f, d, h, p, y) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | l),
            (this.Fh = 0 | c),
            (this.Fl = 0 | f),
            (this.Gh = 0 | d),
            (this.Gl = 0 | h),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (u[r] = e.getUint32(t)), (l[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | u[e - 15],
              r = 0 | l[e - 15],
              n =
                i.ZP.rotrSH(t, r, 1) ^
                i.ZP.rotrSH(t, r, 8) ^
                i.ZP.shrSH(t, r, 7),
              o =
                i.ZP.rotrSL(t, r, 1) ^
                i.ZP.rotrSL(t, r, 8) ^
                i.ZP.shrSL(t, r, 7),
              s = 0 | u[e - 2],
              a = 0 | l[e - 2],
              c =
                i.ZP.rotrSH(s, a, 19) ^
                i.ZP.rotrBH(s, a, 61) ^
                i.ZP.shrSH(s, a, 6),
              f =
                i.ZP.rotrSL(s, a, 19) ^
                i.ZP.rotrBL(s, a, 61) ^
                i.ZP.shrSL(s, a, 6),
              d = i.ZP.add4L(o, f, l[e - 7], l[e - 16]),
              h = i.ZP.add4H(d, n, c, u[e - 7], u[e - 16]);
            (u[e] = 0 | h), (l[e] = 0 | d);
          }
          let {
            Ah: r,
            Al: n,
            Bh: o,
            Bl: c,
            Ch: f,
            Cl: d,
            Dh: h,
            Dl: p,
            Eh: y,
            El: g,
            Fh: m,
            Fl: b,
            Gh: E,
            Gl: w,
            Hh: v,
            Hl: A,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                i.ZP.rotrSH(y, g, 14) ^
                i.ZP.rotrSH(y, g, 18) ^
                i.ZP.rotrBH(y, g, 41),
              x =
                i.ZP.rotrSL(y, g, 14) ^
                i.ZP.rotrSL(y, g, 18) ^
                i.ZP.rotrBL(y, g, 41),
              I = (y & m) ^ (~y & E),
              O = (g & b) ^ (~g & w),
              T = i.ZP.add5L(A, x, O, a[e], l[e]),
              _ = i.ZP.add5H(T, v, t, I, s[e], u[e]),
              N = 0 | T,
              S =
                i.ZP.rotrSH(r, n, 28) ^
                i.ZP.rotrBH(r, n, 34) ^
                i.ZP.rotrBH(r, n, 39),
              B =
                i.ZP.rotrSL(r, n, 28) ^
                i.ZP.rotrBL(r, n, 34) ^
                i.ZP.rotrBL(r, n, 39),
              R = (r & o) ^ (r & f) ^ (o & f),
              P = (n & c) ^ (n & d) ^ (c & d);
            (v = 0 | E),
              (A = 0 | w),
              (E = 0 | m),
              (w = 0 | b),
              (m = 0 | y),
              (b = 0 | g),
              ({ h: y, l: g } = i.ZP.add(0 | h, 0 | p, 0 | _, 0 | N)),
              (h = 0 | f),
              (p = 0 | d),
              (f = 0 | o),
              (d = 0 | c),
              (o = 0 | r),
              (c = 0 | n);
            let L = i.ZP.add3L(N, B, P);
            (r = i.ZP.add3H(L, _, S, R)), (n = 0 | L);
          }
          ({ h: r, l: n } = i.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: o, l: c } = i.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | c)),
            ({ h: f, l: d } = i.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | f, 0 | d)),
            ({ h: h, l: p } = i.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | h, 0 | p)),
            ({ h: y, l: g } = i.ZP.add(0 | this.Eh, 0 | this.El, 0 | y, 0 | g)),
            ({ h: m, l: b } = i.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | m, 0 | b)),
            ({ h: E, l: w } = i.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | E, 0 | w)),
            ({ h: v, l: A } = i.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | v, 0 | A)),
            this.set(r, n, o, c, f, d, h, p, y, g, m, b, E, w, v, A);
        }
        roundClean() {
          u.fill(0), l.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let f = (0, o.hE)(() => new c());
      var d = r(54866),
        h = r(2278),
        p = r(26979);
      let y = BigInt(0),
        g = BigInt(1),
        m = BigInt(2),
        b = BigInt(8),
        E = { zip215: !0 },
        w = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        v = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        A = BigInt(0),
        x = BigInt(1),
        I = BigInt(2);
      BigInt(3);
      let O = BigInt(5),
        T = BigInt(8);
      function _(e, t) {
        let r = (0, h.wQ)(t * t * t, w),
          n = (function (e) {
            let t = BigInt(10),
              r = BigInt(20),
              n = BigInt(40),
              i = BigInt(80),
              o = (((e * e) % w) * e) % w,
              s = ((0, h.oA)(o, I, w) * o) % w,
              a = ((0, h.oA)(s, x, w) * e) % w,
              u = ((0, h.oA)(a, O, w) * a) % w,
              l = ((0, h.oA)(u, t, w) * u) % w,
              c = ((0, h.oA)(l, r, w) * l) % w,
              f = ((0, h.oA)(c, n, w) * c) % w,
              d = ((0, h.oA)(f, i, w) * f) % w,
              p = ((0, h.oA)(d, i, w) * f) % w,
              y = ((0, h.oA)(p, t, w) * u) % w;
            return { pow_p_5_8: ((0, h.oA)(y, I, w) * e) % w, b2: o };
          })(e * (0, h.wQ)(r * r * t, w)).pow_p_5_8,
          i = (0, h.wQ)(e * r * n, w),
          o = (0, h.wQ)(t * i * i, w),
          s = i,
          a = (0, h.wQ)(i * v, w),
          u = o === e,
          l = o === (0, h.wQ)(-e, w),
          c = o === (0, h.wQ)(-e * v, w);
        return (
          u && (i = s),
          (l || c) && (i = a),
          (0, h.Tu)(i, w) && (i = (0, h.wQ)(-i, w)),
          { isValid: u || l, value: i }
        );
      }
      let N = (0, h.gN)(w, void 0, !0),
        S = (function (e) {
          let t = (function (e) {
              let t = (0, d.Kd)(e);
              return (
                p.FF(
                  e,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            {
              Fp: r,
              n: n,
              prehash: i,
              hash: o,
              randomBytes: s,
              nByteLength: a,
              h: u,
            } = t,
            l = m << (BigInt(8 * a) - g),
            c = r.create,
            f = (0, h.gN)(t.n, t.nBitLength),
            w =
              t.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: r.sqrt(e * r.inv(t)) };
                } catch (e) {
                  return { isValid: !1, value: y };
                }
              }),
            v = t.adjustScalarBytes || ((e) => e),
            A =
              t.domain ||
              ((e, t, r) => {
                if (((0, p.uw)("phflag", r), t.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function x(e, t) {
            p.Fy("coordinate " + e, t, y, l);
          }
          function I(e) {
            if (!(e instanceof _)) throw Error("ExtendedPoint expected");
          }
          let O = (0, p.H9)((e, t) => {
              let { ex: n, ey: i, ez: o } = e,
                s = e.is0();
              null == t && (t = s ? b : r.inv(o));
              let a = c(n * t),
                u = c(i * t),
                l = c(o * t);
              if (s) return { x: y, y: g };
              if (l !== g) throw Error("invZ was invalid");
              return { x: a, y: u };
            }),
            T = (0, p.H9)((e) => {
              let { a: r, d: n } = t;
              if (e.is0()) throw Error("bad point: ZERO");
              let { ex: i, ey: o, ez: s, et: a } = e,
                u = c(i * i),
                l = c(o * o),
                f = c(s * s),
                d = c(f * f),
                h = c(u * r);
              if (c(f * c(h + l)) !== c(d + c(n * c(u * l))))
                throw Error("bad point: equation left != right (1)");
              if (c(i * o) !== c(s * a))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class _ {
            constructor(e, t, r, n) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = n),
                x("x", e),
                x("y", t),
                x("z", r),
                x("t", n),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof _) throw Error("extended point not allowed");
              let { x: t, y: r } = e || {};
              return x("x", t), x("y", r), new _(t, r, g, c(t * r));
            }
            static normalizeZ(e) {
              let t = r.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(_.fromAffine);
            }
            static msm(e, t) {
              return (0, d.D1)(_, f, e, t);
            }
            _setWindowSize(e) {
              B.setWindowSize(this, e);
            }
            assertValidity() {
              T(this);
            }
            equals(e) {
              I(e);
              let { ex: t, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = e,
                a = c(t * s),
                u = c(i * n),
                l = c(r * s),
                f = c(o * n);
              return a === u && l === f;
            }
            is0() {
              return this.equals(_.ZERO);
            }
            negate() {
              return new _(c(-this.ex), this.ey, this.ez, c(-this.et));
            }
            double() {
              let { a: e } = t,
                { ex: r, ey: n, ez: i } = this,
                o = c(r * r),
                s = c(n * n),
                a = c(m * c(i * i)),
                u = c(e * o),
                l = r + n,
                f = c(c(l * l) - o - s),
                d = u + s,
                h = d - a,
                p = u - s,
                y = c(f * h),
                g = c(d * p),
                b = c(f * p);
              return new _(y, g, c(h * d), b);
            }
            add(e) {
              I(e);
              let { a: r, d: n } = t,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: u, ey: l, ez: f, et: d } = e;
              if (r === BigInt(-1)) {
                let e = c((o - i) * (l + u)),
                  t = c((o + i) * (l - u)),
                  r = c(t - e);
                if (r === y) return this.double();
                let n = c(s * m * d),
                  h = c(a * m * f),
                  p = h + n,
                  g = t + e,
                  b = h - n,
                  E = c(p * r),
                  w = c(g * b),
                  v = c(p * b);
                return new _(E, w, c(r * g), v);
              }
              let h = c(i * u),
                p = c(o * l),
                g = c(a * n * d),
                b = c(s * f),
                E = c((i + o) * (u + l) - h - p),
                w = b - g,
                v = b + g,
                A = c(p - r * h),
                x = c(E * w),
                O = c(v * A),
                T = c(E * A);
              return new _(x, O, c(w * v), T);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return B.wNAFCached(this, e, _.normalizeZ);
            }
            multiply(e) {
              p.Fy("scalar", e, g, n);
              let { p: t, f: r } = this.wNAF(e);
              return _.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = _.ZERO) {
              return (p.Fy("scalar", e, y, n), e === y)
                ? S
                : this.is0() || e === g
                ? this
                : B.wNAFCachedUnsafe(this, e, _.normalizeZ, t);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(u).is0();
            }
            isTorsionFree() {
              return B.unsafeLadder(this, n).is0();
            }
            toAffine(e) {
              return O(this, e);
            }
            clearCofactor() {
              let { h: e } = t;
              return e === g ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, n = !1) {
              let { d: i, a: o } = t,
                s = r.BYTES;
              (e = (0, p.ql)("pointHex", e, s)), (0, p.uw)("zip215", n);
              let a = e.slice(),
                u = e[s - 1];
              a[s - 1] = -129 & u;
              let f = p.ty(a),
                d = n ? l : r.ORDER;
              p.Fy("pointHex.y", f, y, d);
              let h = c(f * f),
                { isValid: m, value: b } = w(c(h - g), c(i * h - o));
              if (!m) throw Error("Point.fromHex: invalid y coordinate");
              let E = (b & g) === g,
                v = (128 & u) != 0;
              if (!n && b === y && v)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return v !== E && (b = c(-b)), _.fromAffine({ x: b, y: f });
            }
            static fromPrivateKey(e) {
              return P(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                n = p.S5(t, r.BYTES);
              return (n[n.length - 1] |= e & g ? 128 : 0), n;
            }
            toHex() {
              return p.ci(this.toRawBytes());
            }
          }
          (_.BASE = new _(t.Gx, t.Gy, g, c(t.Gx * t.Gy))),
            (_.ZERO = new _(y, g, g, y));
          let { BASE: N, ZERO: S } = _,
            B = (0, d.Mx)(_, 8 * a);
          function R(e) {
            var t;
            return (t = p.ty(e)), (0, h.wQ)(t, n);
          }
          function P(e) {
            let t = r.BYTES;
            e = (0, p.ql)("private key", e, t);
            let n = (0, p.ql)("hashed private key", o(e), 2 * t),
              i = v(n.slice(0, t)),
              s = n.slice(t, 2 * t),
              a = R(i),
              u = N.multiply(a),
              l = u.toRawBytes();
            return { head: i, prefix: s, scalar: a, point: u, pointBytes: l };
          }
          function L(e = new Uint8Array(), ...t) {
            return R(o(A(p.eV(...t), (0, p.ql)("context", e), !!i)));
          }
          return (
            N._setWindowSize(8),
            {
              CURVE: t,
              getPublicKey: function (e) {
                return P(e).pointBytes;
              },
              sign: function (e, t, o = {}) {
                var s;
                (e = (0, p.ql)("message", e)), i && (e = i(e));
                let { prefix: a, scalar: u, pointBytes: l } = P(t),
                  c = L(o.context, a, e),
                  f = N.multiply(c).toRawBytes(),
                  d = ((s = c + L(o.context, f, l, e) * u), (0, h.wQ)(s, n));
                p.Fy("signature.s", d, y, n);
                let g = p.eV(f, p.S5(d, r.BYTES));
                return (0, p.ql)("result", g, 2 * r.BYTES);
              },
              verify: function (e, t, n, o = E) {
                let s, a, u;
                let { context: l, zip215: c } = o,
                  f = r.BYTES;
                (e = (0, p.ql)("signature", e, 2 * f)),
                  (t = (0, p.ql)("message", t)),
                  (n = (0, p.ql)("publicKey", n, f)),
                  void 0 !== c && (0, p.uw)("zip215", c),
                  i && (t = i(t));
                let d = p.ty(e.slice(f, 2 * f));
                try {
                  (s = _.fromHex(n, c)),
                    (a = _.fromHex(e.slice(0, f), c)),
                    (u = N.multiplyUnsafe(d));
                } catch (e) {
                  return !1;
                }
                if (!c && s.isSmallOrder()) return !1;
                let h = L(l, a.toRawBytes(), s.toRawBytes(), t);
                return a
                  .add(s.multiplyUnsafe(h))
                  .subtract(u)
                  .clearCofactor()
                  .equals(_.ZERO);
              },
              ExtendedPoint: _,
              utils: {
                getExtendedPublicKey: P,
                randomPrivateKey: () => s(r.BYTES),
                precompute: (e = 8, t = _.BASE) => (
                  t._setWindowSize(e), t.multiply(BigInt(3)), t
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: N,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: T,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: f,
          randomBytes: o.O6,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: _,
        });
      function B(e) {
        if (!(e instanceof U)) throw Error("RistrettoPoint expected");
      }
      let R = (e) => _(x, e),
        P = (e) => S.CURVE.Fp.create(null & bytesToNumberLE(e));
      function L(e) {
        let { d: t } = S.CURVE,
          r = S.CURVE.Fp.ORDER,
          n = S.CURVE.Fp.create,
          i = n(null * e * e),
          o = n((i + x) * null),
          s = BigInt(-1),
          a = n((s - t * i) * n(i + t)),
          { isValid: u, value: l } = _(o, a),
          c = n(l * e);
        isNegativeLE(c, r) || (c = n(-c)), u || (l = c), u || (s = i);
        let f = n(s * (i - x) * null - a),
          d = l * l,
          h = n((l + l) * a),
          p = n(null * f),
          y = n(x - d),
          g = n(x + d);
        return new S.ExtendedPoint(n(h * g), n(y * p), n(p * g), n(h * y));
      }
      class U {
        constructor(e) {
          this.ep = e;
        }
        static fromAffine(e) {
          return new U(S.ExtendedPoint.fromAffine(e));
        }
        static hashToCurve(e) {
          let t = L(P((e = ensureBytes("ristrettoHash", e, 64)).slice(0, 32))),
            r = L(P(e.slice(32, 64)));
          return new U(t.add(r));
        }
        static fromHex(e) {
          e = ensureBytes("ristrettoHex", e, 32);
          let { a: t, d: r } = S.CURVE,
            n = S.CURVE.Fp.ORDER,
            i = S.CURVE.Fp.create,
            o =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            s = P(e);
          if (!equalBytes(numberToBytesLE(s, 32), e) || isNegativeLE(s, n))
            throw Error(o);
          let a = i(s * s),
            u = i(x + t * a),
            l = i(x - t * a),
            c = i(u * u),
            f = i(l * l),
            d = i(t * r * c - f),
            { isValid: h, value: p } = R(i(d * f)),
            y = i(p * l),
            g = i(p * y * d),
            m = i((s + s) * y);
          isNegativeLE(m, n) && (m = i(-m));
          let b = i(u * g),
            E = i(m * b);
          if (!h || isNegativeLE(E, n) || b === A) throw Error(o);
          return new U(new S.ExtendedPoint(m, b, x, E));
        }
        static msm(e, t) {
          return pippenger(U, Field(S.CURVE.n, S.CURVE.nBitLength), e, t);
        }
        toRawBytes() {
          let e,
            { ex: t, ey: r, ez: n, et: i } = this.ep,
            o = S.CURVE.Fp.ORDER,
            s = S.CURVE.Fp.create,
            a = s(s(n + r) * s(n - r)),
            u = s(t * r),
            l = s(u * u),
            { value: c } = R(s(a * l)),
            f = s(c * a),
            d = s(c * u),
            h = s(f * d * i);
          if (isNegativeLE(i * h, o)) {
            let n = s(null * r),
              i = s(null * t);
            (t = n), (r = i), (e = s(null * f));
          } else e = d;
          isNegativeLE(t * h, o) && (r = s(-r));
          let p = s((n - r) * e);
          return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32);
        }
        toHex() {
          return bytesToHex(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(e) {
          B(e);
          let { ex: t, ey: r } = this.ep,
            { ex: n, ey: i } = e.ep,
            o = S.CURVE.Fp.create,
            s = o(t * i) === o(r * n),
            a = o(r * i) === o(t * n);
          return s || a;
        }
        add(e) {
          return B(e), new U(this.ep.add(e.ep));
        }
        subtract(e) {
          return B(e), new U(this.ep.subtract(e.ep));
        }
        multiply(e) {
          return new U(this.ep.multiply(e));
        }
        multiplyUnsafe(e) {
          return new U(this.ep.multiplyUnsafe(e));
        }
        double() {
          return new U(this.ep.double());
        }
        negate() {
          return new U(this.ep.negate());
        }
      }
    },
    57111: function (e, t, r) {
      "use strict";
      r.d(t, {
        kA: function () {
          return O;
        },
      });
      var n = r(55923),
        i = r(9873),
        o = r(27583);
      class s extends o.kb {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, i.z3)(e);
          let r = (0, o.O0)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            s = new Uint8Array(n);
          s.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return (0, i.$h)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, i.$h)(this),
            (0, i.gk)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let a = (e, t, r) => new s(e, t).update(r).digest();
      a.create = (e, t) => new s(e, t);
      var u = r(54866),
        l = r(2278),
        c = r(26979);
      function f(e) {
        void 0 !== e.lowS && (0, c.uw)("lowS", e.lowS),
          void 0 !== e.prehash && (0, c.uw)("prehash", e.prehash);
      }
      let { bytesToNumberBE: d, hexToBytes: h } = c;
      class p extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let y = {
          Err: p,
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = y;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let n = t.length / 2,
                i = c.uz(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = n > 127 ? c.uz((i.length / 2) | 128) : "";
              return c.uz(e) + o + i + t;
            },
            decode(e, t) {
              let { Err: r } = y,
                n = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[n++] !== e)
                throw new r("tlv.decode: wrong tlv");
              let i = t[n++],
                o = 0;
              if (128 & i) {
                let e = 127 & i;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let s = t.subarray(n, n + e);
                if (s.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let e of s) o = (o << 8) | e;
                if (((n += e), o < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else o = i;
              let s = t.subarray(n, n + o);
              if (s.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: s, l: t.subarray(n + o) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = y;
              if (e < g)
                throw new t("integer: negative integers are not allowed");
              let r = c.uz(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = y;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return d(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: n } = y,
              i = "string" == typeof e ? h(e) : e;
            c.gk(i);
            let { v: o, l: s } = n.decode(48, i);
            if (s.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: a, l: u } = n.decode(2, o),
              { v: l, l: f } = n.decode(2, u);
            if (f.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = y,
              n = t.encode(2, r.encode(e.r)),
              i = t.encode(2, r.encode(e.s));
            return t.encode(48, n + i);
          },
        },
        g = BigInt(0),
        m = BigInt(1),
        b = (BigInt(2), BigInt(3));
      BigInt(4);
      let E = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        w = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        v = BigInt(1),
        A = BigInt(2),
        x = (e, t) => (e + t / A) / t,
        I = (0, l.gN)(E, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              s = BigInt(44),
              a = BigInt(88),
              u = (e * e * e) % E,
              c = (u * u * e) % E,
              f = ((0, l.oA)(c, t, E) * c) % E,
              d = ((0, l.oA)(f, t, E) * c) % E,
              h = ((0, l.oA)(d, A, E) * u) % E,
              p = ((0, l.oA)(h, n, E) * h) % E,
              y = ((0, l.oA)(p, i, E) * p) % E,
              g = ((0, l.oA)(y, s, E) * y) % E,
              m = ((0, l.oA)(g, a, E) * g) % E,
              b = ((0, l.oA)(m, s, E) * y) % E,
              w = ((0, l.oA)(b, t, E) * c) % E,
              v = ((0, l.oA)(w, o, E) * p) % E,
              x = ((0, l.oA)(v, r, E) * u) % E,
              O = (0, l.oA)(x, A, E);
            if (!I.eql(I.sqr(O), e)) throw Error("Cannot find square root");
            return O;
          },
        }),
        O = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = (0, u.Kd)(e);
                  return (
                    c.FF(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function s(e) {
                return (0, l.wQ)(e, n);
              }
              function a(e) {
                return (0, l.U_)(e, n);
              }
              let {
                  ProjectivePoint: d,
                  normPrivateKeyToScalar: h,
                  weierstrassEquation: p,
                  isWithinCurveOrder: E,
                } = (function (e) {
                  let t = (function (e) {
                      let t = (0, u.Kd)(e);
                      c.FF(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = t,
                    n = (0, l.gN)(t.n, t.nBitLength),
                    i =
                      t.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return c.eV(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    o =
                      t.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: n, b: i } = t,
                      o = r.sqr(e),
                      s = r.mul(o, e);
                    return r.add(r.add(s, r.mul(e, n)), i);
                  }
                  if (!r.eql(r.sqr(t.Gy), s(t.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(e) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: o,
                      n: s,
                    } = t;
                    if (n && "bigint" != typeof e) {
                      if (
                        (c._t(e) && (e = c.ci(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof e
                          ? e
                          : c.bytesToNumberBE((0, c.ql)("private key", e, i));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return (
                      o && (r = (0, l.wQ)(r, s)),
                      c.Fy("private key", r, m, s),
                      r
                    );
                  }
                  function f(e) {
                    if (!(e instanceof p))
                      throw Error("ProjectivePoint expected");
                  }
                  let d = (0, c.H9)((e, t) => {
                      let { px: n, py: i, pz: o } = e;
                      if (r.eql(o, r.ONE)) return { x: n, y: i };
                      let s = e.is0();
                      null == t && (t = s ? r.ONE : r.inv(o));
                      let a = r.mul(n, t),
                        u = r.mul(i, t),
                        l = r.mul(o, t);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: u };
                    }),
                    h = (0, c.H9)((e) => {
                      if (e.is0()) {
                        if (t.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: n, y: i } = e.toAffine();
                      if (!r.isValid(n) || !r.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let o = r.sqr(i),
                        a = s(n);
                      if (!r.eql(o, a))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class p {
                    constructor(e, t, n) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        null == e || !r.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof p)
                        throw Error("projective point not allowed");
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? p.ZERO : new p(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(p.fromAffine);
                    }
                    static fromHex(e) {
                      let t = p.fromAffine(o((0, c.ql)("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return p.BASE.multiply(a(e));
                    }
                    static msm(e, t) {
                      return (0, u.D1)(p, n, e, t);
                    }
                    _setWindowSize(e) {
                      E.setWindowSize(this, e);
                    }
                    assertValidity() {
                      h(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      f(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: o, py: s, pz: a } = e,
                        u = r.eql(r.mul(t, a), r.mul(o, i)),
                        l = r.eql(r.mul(n, a), r.mul(s, i));
                      return u && l;
                    }
                    negate() {
                      return new p(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: n } = t,
                        i = r.mul(n, b),
                        { px: o, py: s, pz: a } = this,
                        u = r.ZERO,
                        l = r.ZERO,
                        c = r.ZERO,
                        f = r.mul(o, o),
                        d = r.mul(s, s),
                        h = r.mul(a, a),
                        y = r.mul(o, s);
                      return (
                        (y = r.add(y, y)),
                        (c = r.mul(o, a)),
                        (c = r.add(c, c)),
                        (u = r.mul(e, c)),
                        (l = r.mul(i, h)),
                        (l = r.add(u, l)),
                        (u = r.sub(d, l)),
                        (l = r.add(d, l)),
                        (l = r.mul(u, l)),
                        (u = r.mul(y, u)),
                        (c = r.mul(i, c)),
                        (h = r.mul(e, h)),
                        (y = r.sub(f, h)),
                        (y = r.mul(e, y)),
                        (y = r.add(y, c)),
                        (c = r.add(f, f)),
                        (f = r.add(c, f)),
                        (f = r.add(f, h)),
                        (f = r.mul(f, y)),
                        (l = r.add(l, f)),
                        (h = r.mul(s, a)),
                        (h = r.add(h, h)),
                        (f = r.mul(h, y)),
                        (u = r.sub(u, f)),
                        (c = r.mul(h, d)),
                        (c = r.add(c, c)),
                        new p(u, l, (c = r.add(c, c)))
                      );
                    }
                    add(e) {
                      f(e);
                      let { px: n, py: i, pz: o } = this,
                        { px: s, py: a, pz: u } = e,
                        l = r.ZERO,
                        c = r.ZERO,
                        d = r.ZERO,
                        h = t.a,
                        y = r.mul(t.b, b),
                        g = r.mul(n, s),
                        m = r.mul(i, a),
                        E = r.mul(o, u),
                        w = r.add(n, i),
                        v = r.add(s, a);
                      (w = r.mul(w, v)),
                        (v = r.add(g, m)),
                        (w = r.sub(w, v)),
                        (v = r.add(n, o));
                      let A = r.add(s, u);
                      return (
                        (v = r.mul(v, A)),
                        (A = r.add(g, E)),
                        (v = r.sub(v, A)),
                        (A = r.add(i, o)),
                        (l = r.add(a, u)),
                        (A = r.mul(A, l)),
                        (l = r.add(m, E)),
                        (A = r.sub(A, l)),
                        (d = r.mul(h, v)),
                        (l = r.mul(y, E)),
                        (d = r.add(l, d)),
                        (l = r.sub(m, d)),
                        (d = r.add(m, d)),
                        (c = r.mul(l, d)),
                        (m = r.add(g, g)),
                        (m = r.add(m, g)),
                        (E = r.mul(h, E)),
                        (v = r.mul(y, v)),
                        (m = r.add(m, E)),
                        (E = r.sub(g, E)),
                        (E = r.mul(h, E)),
                        (v = r.add(v, E)),
                        (g = r.mul(m, v)),
                        (c = r.add(c, g)),
                        (g = r.mul(A, v)),
                        (l = r.mul(w, l)),
                        (l = r.sub(l, g)),
                        (g = r.mul(w, m)),
                        (d = r.mul(A, d)),
                        new p(l, c, (d = r.add(d, g)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(p.ZERO);
                    }
                    wNAF(e) {
                      return E.wNAFCached(this, e, p.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: n, n: i } = t;
                      c.Fy("scalar", e, g, i);
                      let o = p.ZERO;
                      if (e === g) return o;
                      if (this.is0() || e === m) return this;
                      if (!n || E.hasPrecomputes(this))
                        return E.wNAFCachedUnsafe(this, e, p.normalizeZ);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: u,
                          k2: l,
                        } = n.splitScalar(e),
                        f = o,
                        d = o,
                        h = this;
                      for (; a > g || l > g; )
                        a & m && (f = f.add(h)),
                          l & m && (d = d.add(h)),
                          (h = h.double()),
                          (a >>= m),
                          (l >>= m);
                      return (
                        s && (f = f.negate()),
                        u && (d = d.negate()),
                        (d = new p(r.mul(d.px, n.beta), d.py, d.pz)),
                        f.add(d)
                      );
                    }
                    multiply(e) {
                      let n, i;
                      let { endo: o, n: s } = t;
                      if ((c.Fy("scalar", e, m, s), o)) {
                        let {
                            k1neg: t,
                            k1: s,
                            k2neg: a,
                            k2: u,
                          } = o.splitScalar(e),
                          { p: l, f: c } = this.wNAF(s),
                          { p: f, f: d } = this.wNAF(u);
                        (l = E.constTimeNegate(t, l)),
                          (f = E.constTimeNegate(a, f)),
                          (f = new p(r.mul(f.px, o.beta), f.py, f.pz)),
                          (n = l.add(f)),
                          (i = c.add(d));
                      } else {
                        let { p: t, f: r } = this.wNAF(e);
                        (n = t), (i = r);
                      }
                      return p.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = p.BASE,
                        i = (e, t) =>
                          t !== g && t !== m && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        o = i(this, t).add(i(e, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(e) {
                      return d(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: r } = t;
                      if (e === m) return !0;
                      if (r) return r(p, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: r } = t;
                      return e === m
                        ? this
                        : r
                        ? r(p, this)
                        : this.multiplyUnsafe(t.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        (0, c.uw)("isCompressed", e),
                        this.assertValidity(),
                        i(p, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return (
                        (0, c.uw)("isCompressed", e), c.ci(this.toRawBytes(e))
                      );
                    }
                  }
                  (p.BASE = new p(t.Gx, t.Gy, r.ONE)),
                    (p.ZERO = new p(r.ZERO, r.ONE, r.ZERO));
                  let y = t.nBitLength,
                    E = (0, u.Mx)(p, t.endo ? Math.ceil(y / 2) : y);
                  return {
                    CURVE: t,
                    ProjectivePoint: p,
                    normPrivateKeyToScalar: a,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (e) {
                      return c.Z2(e, m, t.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      o = r.toBytes(i.x),
                      s = c.eV;
                    return ((0, c.uw)("isCompressed", n), n)
                      ? s(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      s = e.subarray(1);
                    if (t === i && (2 === n || 3 === n)) {
                      let e;
                      let t = c.bytesToNumberBE(s);
                      if (!c.Z2(t, m, r.ORDER))
                        throw Error("Point is not on curve");
                      let i = p(t);
                      try {
                        e = r.sqrt(i);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((e & m) === m) && (e = r.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === o && 4 === n)
                      return {
                        x: r.fromBytes(s.subarray(0, r.BYTES)),
                        y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        i +
                        ", or uncompressed " +
                        o +
                        ", got " +
                        t
                    );
                  },
                }),
                w = (e) => c.ci(c.tL(e, t.nByteLength)),
                v = (e, t, r) => c.bytesToNumberBE(e.slice(t, r));
              class A {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new A(
                    v((e = (0, c.ql)("compactSignature", e, 2 * r)), 0, r),
                    v(e, r, 2 * r)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = y.toSig((0, c.ql)("DER", e));
                  return new A(t, r);
                }
                assertValidity() {
                  c.Fy("r", this.r, m, n), c.Fy("s", this.s, m, n);
                }
                addRecoveryBit(e) {
                  return new A(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: n, s: i, recovery: o } = this,
                    u = O((0, c.ql)("msgHash", e));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error("recovery id invalid");
                  let l = 2 === o || 3 === o ? n + t.n : n;
                  if (l >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let f = (1 & o) == 0 ? "02" : "03",
                    h = d.fromHex(f + w(l)),
                    p = a(l),
                    y = s(-u * p),
                    g = s(i * p),
                    m = d.BASE.multiplyAndAddUnsafe(h, y, g);
                  if (!m) throw Error("point at infinify");
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > n >> m;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new A(this.r, s(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return c.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return y.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return c.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return w(this.r) + w(this.s);
                }
              }
              function x(e) {
                let t = c._t(e),
                  r = "string" == typeof e,
                  n = (t || r) && e.length;
                return t
                  ? n === i || n === o
                  : r
                  ? n === 2 * i || n === 2 * o
                  : e instanceof d;
              }
              let I =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let r = c.bytesToNumberBE(e),
                      n = 8 * e.length - t.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                O =
                  t.bits2int_modN ||
                  function (e) {
                    return s(I(e));
                  },
                T = c.dQ(t.nBitLength);
              function _(e) {
                return (
                  c.Fy("num < 2^" + t.nBitLength, e, g, T),
                  c.tL(e, t.nByteLength)
                );
              }
              let N = { lowS: t.lowS, prehash: !1 },
                S = { lowS: t.lowS, prehash: !1 };
              return (
                d.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return d.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (x(e)) throw Error("first arg must be private key");
                    if (!x(t)) throw Error("second arg must be public key");
                    return d.fromHex(t).multiply(h(e)).toRawBytes(r);
                  },
                  sign: function (e, i, o = N) {
                    let { seed: u, k2sig: l } = (function (e, i, o = N) {
                      if (["recovered", "canonical"].some((e) => e in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: l } = t,
                        { lowS: p, prehash: y, extraEntropy: b } = o;
                      null == p && (p = !0),
                        (e = (0, c.ql)("msgHash", e)),
                        f(o),
                        y && (e = (0, c.ql)("prehashed msgHash", u(e)));
                      let w = O(e),
                        v = h(i),
                        x = [_(v), _(w)];
                      if (null != b && !1 !== b) {
                        let e = !0 === b ? l(r.BYTES) : b;
                        x.push((0, c.ql)("extraEntropy", e));
                      }
                      return {
                        seed: c.eV(...x),
                        k2sig: function (e) {
                          let t = I(e);
                          if (!E(t)) return;
                          let r = a(t),
                            i = d.BASE.multiply(t).toAffine(),
                            o = s(i.x);
                          if (o === g) return;
                          let u = s(r * s(w + o * v));
                          if (u === g) return;
                          let l = (i.x === o ? 0 : 2) | Number(i.y & m),
                            c = u;
                          if (p && u > n >> m)
                            (c = u > n >> m ? s(-u) : u), (l ^= 1);
                          return new A(o, c, l);
                        },
                      };
                    })(e, i, o);
                    return c.n$(t.hash.outputLen, t.nByteLength, t.hmac)(u, l);
                  },
                  verify: function (e, r, n, i = S) {
                    let o, u;
                    (r = (0, c.ql)("msgHash", r)),
                      (n = (0, c.ql)("publicKey", n));
                    let { lowS: l, prehash: h, format: p } = i;
                    if ((f(i), "strict" in i))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== p && "compact" !== p && "der" !== p)
                      throw Error("format must be compact or der");
                    let g = "string" == typeof e || c._t(e),
                      m =
                        !g &&
                        !p &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!g && !m)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((m && (u = new A(e.r, e.s)), g)) {
                        try {
                          "compact" !== p && (u = A.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof y.Err)) throw e;
                        }
                        u || "der" === p || (u = A.fromCompact(e));
                      }
                      o = d.fromHex(n);
                    } catch (e) {
                      return !1;
                    }
                    if (!u || (l && u.hasHighS())) return !1;
                    h && (r = t.hash(r));
                    let { r: b, s: E } = u,
                      w = O(r),
                      v = a(E),
                      x = s(w * v),
                      I = s(b * v),
                      T = d.BASE.multiplyAndAddUnsafe(o, x, I)?.toAffine();
                    return !!T && s(T.x) === b;
                  },
                  ProjectivePoint: d,
                  Signature: A,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return h(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: h,
                    randomPrivateKey: () => {
                      let e = (0, l.PS)(t.n);
                      return (0, l.Us)(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = d.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) => a(t, e, (0, o.eV)(...r)),
              randomBytes: o.O6,
            });
          return { ...r(t), create: r };
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: I,
            n: w,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -v * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = x(t * e, w),
                  s = x(-r * e, w),
                  a = (0, l.wQ)(e - o * t - s * n, w),
                  u = (0, l.wQ)(-o * r - s * t, w),
                  c = a > i,
                  f = u > i;
                if ((c && (a = w - a), f && (u = w - u), a > i || u > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: c, k1: a, k2neg: f, k2: u };
              },
            },
          },
          n.JQ
        );
      BigInt(0), O.ProjectivePoint;
    },
    9873: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function o(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function s(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        i(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(t, {
        $h: function () {
          return s;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return n;
        },
        z3: function () {
          return o;
        },
      });
    },
    54740: function (e, t, r) {
      "use strict";
      r.d(t, {
        VR: function () {
          return a;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var n = r(9873),
        i = r(27583);
      function o(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function s(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      class a extends i.kb {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(e) {
          (0, n.$h)(this);
          let { view: t, buffer: r, blockLen: o } = this,
            s = (e = (0, i.O0)(e)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let t = (0, i.GL)(e);
              for (; o <= s - n; n += o) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.$h)(this), (0, n.eB)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < o; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = n ? 4 : 0,
              l = n ? 0 : 4;
            e.setUint32(t + u, s, n), e.setUint32(t + l, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let u = (0, i.GL)(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = l / 4,
            f = this.get();
          if (c > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) u.setUint32(4 * e, f[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (e.length = n),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
    },
    32345: function (e, t, r) {
      "use strict";
      r.d(t, {
        EP: function () {
          return a;
        },
        SD: function () {
          return l;
        },
        Vl: function () {
          return s;
        },
        gm: function () {
          return u;
        },
        mk: function () {
          return c;
        },
      });
      let n = BigInt(4294967296 - 1),
        i = BigInt(32);
      function o(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> i) & n) }
          : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
      }
      function s(e, t = !1) {
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: s, l: a } = o(e[i], t);
          [r[i], n[i]] = [s, a];
        }
        return [r, n];
      }
      let a = (e, t, r) => (e << r) | (t >>> (32 - r)),
        u = (e, t, r) => (t << r) | (e >>> (32 - r)),
        l = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        c = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      t.ZP = {
        fromBig: o,
        split: s,
        toBig: (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0),
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        rotr32H: (e, t) => t,
        rotr32L: (e, t) => e,
        rotlSH: a,
        rotlSL: u,
        rotlBH: l,
        rotlBL: c,
        add: function (e, t, r, n) {
          let i = (t >>> 0) + (n >>> 0);
          return { h: (e + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, n) => (t + r + n + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, n, i, o) =>
          (t + r + n + i + o + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, n, i) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
    },
    55923: function (e, t, r) {
      "use strict";
      r.d(t, {
        JQ: function () {
          return l;
        },
      });
      var n = r(54740),
        i = r(27583);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class u extends n.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [e, t, r, n, i, o, s, a];
        }
        set(e, t, r, n, i, o, s, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) a[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = a[e - 15],
              r = a[e - 2],
              n = (0, i.np)(t, 7) ^ (0, i.np)(t, 18) ^ (t >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            a[e] = (o + a[e - 7] + n + a[e - 16]) | 0;
          }
          let { A: r, B: s, C: u, D: l, E: c, F: f, G: d, H: h } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (h +
                  ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) +
                  (0, n.bc)(c, f, d) +
                  o[e] +
                  a[e]) |
                0,
              p =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (0, n.l3)(r, s, u)) |
                0;
            (h = d),
              (d = f),
              (f = c),
              (c = (l + t) | 0),
              (l = u),
              (u = s),
              (s = r),
              (r = (t + p) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (u = (u + this.C) | 0),
            (l = (l + this.D) | 0),
            (c = (c + this.E) | 0),
            (f = (f + this.F) | 0),
            (d = (d + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(r, s, u, l, c, f, d, h);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let l = (0, i.hE)(() => new u());
    },
    6142: function (e, t, r) {
      "use strict";
      r.d(t, {
        fr: function () {
          return w;
        },
      });
      var n = r(9873),
        i = r(32345),
        o = r(27583);
      let s = [],
        a = [],
        u = [],
        l = BigInt(0),
        c = BigInt(1),
        f = BigInt(2),
        d = BigInt(7),
        h = BigInt(256),
        p = BigInt(113);
      for (let e = 0, t = c, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          s.push(2 * (5 * n + r)),
          a.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = l;
        for (let e = 0; e < 7; e++)
          (t = ((t << c) ^ ((t >> d) * p)) % h) & f &&
            (i ^= c << ((c << BigInt(e)) - c));
        u.push(i);
      }
      let [y, g] = (0, i.Vl)(u, !0),
        m = (e, t, r) => (r > 32 ? (0, i.SD)(e, t, r) : (0, i.EP)(e, t, r)),
        b = (e, t, r) => (r > 32 ? (0, i.mk)(e, t, r) : (0, i.gm)(e, t, r));
      class E extends o.kb {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.k8)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, o.Jq)(this.state));
        }
        keccak() {
          o.iA || (0, o.l1)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    i = (t + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = m(o, s, 1) ^ r[n],
                    u = b(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= a), (e[t + r + 1] ^= u);
                }
                let t = e[2],
                  i = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = a[r],
                    o = m(t, i, n),
                    u = b(t, i, n),
                    l = s[r];
                  (t = e[l]), (i = e[l + 1]), (e[l] = o), (e[l + 1] = u);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= y[n]), (e[1] ^= g[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            o.iA || (0, o.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, n.$h)(this);
          let { blockLen: t, state: r } = this,
            i = (e = (0, o.O0)(e)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(t - this.pos, i - n);
            for (let t = 0; t < o; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, n.$h)(this, !1), (0, n.gk)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, n.k8)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, n.eB)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new E(t, r, n, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let w = (0, o.hE)(() => new E(136, 1, 32));
    },
    27583: function (e, t, r) {
      "use strict";
      r.d(t, {
        kb: function () {
          return d;
        },
        l1: function () {
          return l;
        },
        eV: function () {
          return f;
        },
        GL: function () {
          return s;
        },
        iA: function () {
          return u;
        },
        O6: function () {
          return p;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return c;
        },
        Jq: function () {
          return o;
        },
        hE: function () {
          return h;
        },
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(9873);
      function o(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function s(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function l(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 4278190080) |
            ((t << 8) & 16711680) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function c(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, i.gk)(e),
          e
        );
      }
      function f(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (0, i.gk)(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      function h(e) {
        let t = (t) => e().update(c(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function p(e = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(e));
        if (n && "function" == typeof n.randomBytes) return n.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    60703: function (e, t, r) {
      "use strict";
      let n, i, o;
      r.d(t, {
        C6: function () {
          return s.f;
        },
        Rl: function () {
          return s.O;
        },
        YL: function () {
          return s.T;
        },
        lP: function () {
          return s.P;
        },
        wS: function () {
          return s.c;
        },
      });
      var s = r(32407),
        a =
          (((n = a || {}).SWAP_ETH_FLOW_SENT_TX = "SWAP_ETH_FLOW_SENT_TX"),
          (n.ORDER_CREATED = "ORDER_CREATED"),
          (n.SWAP_SIGNING_ERROR = "SWAP_SIGNING_ERROR"),
          (n.ORDER_FULFILLED = "ORDER_FULFILLED"),
          (n.ORDER_CANCELLED = "ORDER_CANCELLED"),
          (n.ORDER_EXPIRED = "ORDER_EXPIRED"),
          (n.ORDER_PRESIGNED = "ORDER_PRESIGNED"),
          (n.ONCHAIN_TRANSACTION_MINED = "ONCHAIN_TRANSACTION_MINED"),
          (n.ONCHAIN_TRANSACTION_FAILED = "ONCHAIN_TRANSACTION_FAILED"),
          n),
        u = (((i = u || {}).BUY = "buy"), (i.SELL = "sell"), i),
        l =
          (((o = l || {})[(o.MAINNET = 1)] = "MAINNET"),
          (o[(o.GNOSIS_CHAIN = 100)] = "GNOSIS_CHAIN"),
          (o[(o.ARBITRUM_ONE = 42161)] = "ARBITRUM_ONE"),
          (o[(o.SEPOLIA = 11155111)] = "SEPOLIA"),
          o);
    },
    56421: function (e, t, r) {
      "use strict";
      function n([e, t]) {
        return `${e}=${(function e(t) {
          return Array.isArray(t)
            ? "%5B" + t.map(e).join("%2C%20") + "%5D"
            : "bigint" == typeof t
            ? `${t}n`
            : encodeURIComponent(
                String(
                  null != t && null === Object.getPrototypeOf(t) ? { ...t } : t
                )
              );
        })(t)}`;
      }
      r.d(t, {
        GH: function () {
          return f;
        },
        bP: function () {
          return l;
        },
      });
      var i,
        o = class extends Error {
          cause = this.cause;
          context;
          constructor(...[e, t]) {
            let r, i;
            if (t) {
              let { cause: e, ...n } = t;
              e && (i = { cause: e }), Object.keys(n).length > 0 && (r = n);
            }
            super(
              (function (e, t = {}) {
                {
                  let r = `Solana error #${e}; Decode this error by running \`npx @solana/errors decode -- ${e}`;
                  return (
                    Object.keys(t).length &&
                      (r += ` '${btoa(Object.entries(t).map(n).join("&"))}'`),
                    `${r}\``
                  );
                }
              })(e, r),
              i
            ),
              (this.context = { __code: e, ...r }),
              (this.name = "SolanaError");
          }
        };
      function s(e) {
        return "fixedSize" in e && "number" == typeof e.fixedSize;
      }
      var a =
        (((i = a || {})[(i.Little = 0)] = "Little"),
        (i[(i.Big = 1)] = "Big"),
        i);
      function u(e) {
        return e?.endian !== 1;
      }
      var l = (e = {}) => {
          var t, r;
          return Object.freeze({
            ...(r = {
              fixedSize: (t = {
                config: e,
                name: "u64",
                range: [0n, BigInt("0xffffffffffffffff")],
                set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
                size: 8,
              }).size,
              write(e, r, n) {
                t.range &&
                  (function (e, t, r, n) {
                    if (n < t || n > r)
                      throw new o(8078011, {
                        codecDescription: e,
                        max: r,
                        min: t,
                        value: n,
                      });
                  })(t.name, t.range[0], t.range[1], e);
                let i = new ArrayBuffer(t.size);
                return (
                  t.set(new DataView(i), e, u(t.config)),
                  r.set(new Uint8Array(i), n),
                  n + t.size
                );
              },
            }),
            encode: (e) => {
              let t = new Uint8Array(
                "fixedSize" in r ? r.fixedSize : r.getSizeFromValue(e)
              );
              return r.write(e, t, 0), t;
            },
          });
        },
        c = (e = {}) => {
          var t, r;
          return Object.freeze({
            ...(r = {
              fixedSize: (t = {
                config: e,
                get: (e, t) => e.getBigUint64(0, t),
                name: "u64",
                size: 8,
              }).size,
              read(e, r = 0) {
                !(function (e, t, r = 0) {
                  if (t.length - r <= 0)
                    throw new o(8078e3, { codecDescription: e });
                })(t.name, e, r),
                  (function (e, t, r, n = 0) {
                    let i = r.length - n;
                    if (i < t)
                      throw new o(8078001, {
                        bytesLength: i,
                        codecDescription: e,
                        expected: t,
                      });
                  })(t.name, t.size, e, r);
                let n = new DataView(
                  (function (e, t, r) {
                    let n = e.byteOffset + (t ?? 0),
                      i = r ?? e.byteLength;
                    return e.buffer.slice(n, n + i);
                  })(e, r, t.size)
                );
                return [t.get(n, u(t.config)), r + t.size];
              },
            }),
            decode: (e, t = 0) => r.read(e, t)[0],
          });
        },
        f = (e = {}) =>
          (function (e, t) {
            if (s(e) !== s(t)) throw new o(8078004);
            if (s(e) && s(t) && e.fixedSize !== t.fixedSize)
              throw new o(8078005, {
                decoderFixedSize: t.fixedSize,
                encoderFixedSize: e.fixedSize,
              });
            if (!s(e) && !s(t) && e.maxSize !== t.maxSize)
              throw new o(8078006, {
                decoderMaxSize: t.maxSize,
                encoderMaxSize: e.maxSize,
              });
            return {
              ...t,
              ...e,
              decode: t.decode,
              encode: e.encode,
              read: t.read,
              write: e.write,
            };
          })(l(e), c(e));
    },
    52: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ey: function () {
          return u;
        },
        XY: function () {
          return s;
        },
      });
      var n = r(98702),
        i = r(53238),
        o = class extends i.v {
          socket;
          constructor(e, t, r) {
            super(),
              (this.socket = new window.WebSocket(e, r)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (e) => this.emit("message", e.data)),
              (this.socket.onerror = (e) => this.emit("error", e)),
              (this.socket.onclose = (e) => {
                this.emit("close", e.code, e.reason);
              });
          }
          send(e, t, r) {
            let n = r || t;
            try {
              this.socket.send(e), n();
            } catch (e) {
              n(e);
            }
          }
          close(e, t) {
            this.socket.close(e, t);
          }
          addEventListener(e, t, r) {
            this.socket.addEventListener(e, t, r);
          }
        };
      function s(e, t) {
        return new o(e, t);
      }
      var a = class {
          encode(e) {
            return JSON.stringify(e);
          }
          decode(e) {
            return JSON.parse(e);
          }
        },
        u = class extends i.v {
          address;
          rpc_id;
          queue;
          options;
          autoconnect;
          ready;
          reconnect;
          reconnect_timer_id;
          reconnect_interval;
          max_reconnects;
          rest_options;
          current_reconnects;
          generate_request_id;
          socket;
          webSocketFactory;
          dataPack;
          constructor(
            e,
            t = "ws://localhost:8080",
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
              ...s
            } = {},
            u,
            l
          ) {
            super(),
              (this.webSocketFactory = e),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = t),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = o),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id =
                u ||
                (() =>
                  "number" == typeof this.rpc_id
                    ? ++this.rpc_id
                    : Number(this.rpc_id) + 1)),
              l ? (this.dataPack = l) : (this.dataPack = new a()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(e, t, r, n) {
            return (
              n || "object" != typeof r || ((n = r), (r = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(Error("socket not ready"));
                let s = this.generate_request_id(e, t);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: "2.0",
                    method: e,
                    params: t || void 0,
                    id: s,
                  }),
                  n,
                  (e) => {
                    if (e) return o(e);
                    (this.queue[s] = { promise: [i, o] }),
                      r &&
                        (this.queue[s].timeout = setTimeout(() => {
                          delete this.queue[s], o(Error("reply timeout"));
                        }, r));
                  }
                );
              })
            );
          }
          async login(e) {
            let t = await this.call("rpc.login", e);
            if (!t) throw Error("authentication failed");
            return t;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(e, t) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error("socket not ready"));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: "2.0", method: e, params: t }),
                (e) => {
                  if (e) return n(e);
                  r();
                }
              );
            });
          }
          async subscribe(e) {
            "string" == typeof e && (e = [e]);
            let t = await this.call("rpc.on", e);
            if ("string" == typeof e && "ok" !== t[e])
              throw Error(
                "Failed subscribing to an event '" + e + "' with: " + t[e]
              );
            return t;
          }
          async unsubscribe(e) {
            "string" == typeof e && (e = [e]);
            let t = await this.call("rpc.off", e);
            if ("string" == typeof e && "ok" !== t[e])
              throw Error("Failed unsubscribing from an event with: " + t);
            return t;
          }
          close(e, t) {
            this.socket.close(e || 1e3, t);
          }
          setAutoReconnect(e) {
            this.reconnect = e;
          }
          setReconnectInterval(e) {
            this.reconnect_interval = e;
          }
          setMaxReconnects(e) {
            this.max_reconnects = e;
          }
          _connect(e, t) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(e, t)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", ({ data: e }) => {
                e instanceof ArrayBuffer && (e = n.Buffer.from(e).toString());
                try {
                  e = this.dataPack.decode(e);
                } catch (e) {
                  return;
                }
                if (e.notification && this.listeners(e.notification).length) {
                  if (!Object.keys(e.params).length)
                    return this.emit(e.notification);
                  let t = [e.notification];
                  if (e.params.constructor === Object) t.push(e.params);
                  else
                    for (let r = 0; r < e.params.length; r++)
                      t.push(e.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, t);
                  });
                }
                if (!this.queue[e.id])
                  return e.method
                    ? Promise.resolve().then(() => {
                        this.emit(e.method, e?.params);
                      })
                    : void 0;
                "error" in e == "result" in e &&
                  this.queue[e.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[e.id].timeout &&
                    clearTimeout(this.queue[e.id].timeout),
                  e.error
                    ? this.queue[e.id].promise[1](e.error)
                    : this.queue[e.id].promise[0](e.result),
                  delete this.queue[e.id];
              }),
              this.socket.addEventListener("error", (e) =>
                this.emit("error", e)
              ),
              this.socket.addEventListener(
                "close",
                ({ code: r, reason: n }) => {
                  this.ready && setTimeout(() => this.emit("close", r, n), 0),
                    (this.ready = !1),
                    (this.socket = void 0),
                    1e3 !== r &&
                      (this.current_reconnects++,
                      this.reconnect &&
                        (this.max_reconnects > this.current_reconnects ||
                          0 === this.max_reconnects) &&
                        (this.reconnect_timer_id = setTimeout(
                          () => this._connect(e, t),
                          this.reconnect_interval
                        )));
                }
              );
          }
        };
    },
    4101: function (e, t, r) {
      "use strict";
      r.d(t, {
        AG: function () {
          return b;
        },
        G0: function () {
          return O;
        },
        IM: function () {
          return v;
        },
        IX: function () {
          return p;
        },
        O7: function () {
          return y;
        },
        Rx: function () {
          return E;
        },
        Ue: function () {
          return c;
        },
        Yj: function () {
          return h;
        },
        Z_: function () {
          return A;
        },
        _4: function () {
          return T;
        },
        bc: function () {
          return x;
        },
        dt: function () {
          return I;
        },
        eE: function () {
          return g;
        },
        i0: function () {
          return m;
        },
        jt: function () {
          return w;
        },
        oQ: function () {
          return _;
        },
      });
      class n extends TypeError {
        constructor(e, t) {
          let r;
          let { message: n, explanation: i, ...o } = e,
            { path: s } = e,
            a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [e, ...t()]));
        }
      }
      function i(e) {
        return "object" == typeof e && null != e;
      }
      function o(e) {
        return i(e) && !Array.isArray(e);
      }
      function s(e) {
        return "symbol" == typeof e
          ? e.toString()
          : "string" == typeof e
          ? JSON.stringify(e)
          : `${e}`;
      }
      function* a(e, t, r, n) {
        var o;
        for (let a of ((i((o = e)) &&
          "function" == typeof o[Symbol.iterator]) ||
          (e = [e]),
        e)) {
          let e = (function (e, t, r, n) {
            if (!0 === e) return;
            !1 === e ? (e = {}) : "string" == typeof e && (e = { message: e });
            let { path: i, branch: o } = t,
              { type: a } = r,
              {
                refinement: u,
                message: l = `Expected a value of type \`${a}\`${
                  u ? ` with refinement \`${u}\`` : ""
                }, but received: \`${s(n)}\``,
              } = e;
            return {
              value: n,
              type: a,
              refinement: u,
              key: i[i.length - 1],
              path: i,
              branch: o,
              ...e,
              message: l,
            };
          })(a, t, r, n);
          e && (yield e);
        }
      }
      function* u(e, t, r = {}) {
        let { path: n = [], branch: o = [e], coerce: s = !1, mask: a = !1 } = r,
          l = { path: n, branch: o, mask: a };
        s && (e = t.coercer(e, l));
        let c = "valid";
        for (let n of t.validator(e, l))
          (n.explanation = r.message), (c = "not_valid"), yield [n, void 0];
        for (let [f, d, h] of t.entries(e, l))
          for (let t of u(d, h, {
            path: void 0 === f ? n : [...n, f],
            branch: void 0 === f ? o : [...o, d],
            coerce: s,
            mask: a,
            message: r.message,
          }))
            t[0]
              ? ((c = null != t[0].refinement ? "not_refined" : "not_valid"),
                yield [t[0], void 0])
              : s &&
                ((d = t[1]),
                void 0 === f
                  ? (e = d)
                  : e instanceof Map
                  ? e.set(f, d)
                  : e instanceof Set
                  ? e.add(d)
                  : i(e) && (void 0 !== d || f in e) && (e[f] = d));
        if ("not_valid" !== c)
          for (let n of t.refiner(e, l))
            (n.explanation = r.message), (c = "not_refined"), yield [n, void 0];
        "valid" === c && (yield [void 0, e]);
      }
      class l {
        constructor(e) {
          let {
            type: t,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = (e) => e,
            entries: s = function* () {},
          } = e;
          (this.type = t),
            (this.schema = r),
            (this.entries = s),
            (this.coercer = o),
            n
              ? (this.validator = (e, t) => a(n(e, t), t, this, e))
              : (this.validator = () => []),
            i
              ? (this.refiner = (e, t) => a(i(e, t), t, this, e))
              : (this.refiner = () => []);
        }
        assert(e, t) {
          return (function (e, t, r) {
            let n = f(e, t, { message: r });
            if (n[0]) throw n[0];
          })(e, this, t);
        }
        create(e, t) {
          return c(e, this, t);
        }
        is(e) {
          return !f(e, this)[0];
        }
        mask(e, t) {
          return (function (e, t, r) {
            let n = f(e, t, { coerce: !0, mask: !0, message: r });
            if (!n[0]) return n[1];
            throw n[0];
          })(e, this, t);
        }
        validate(e, t = {}) {
          return f(e, this, t);
        }
      }
      function c(e, t, r) {
        let n = f(e, t, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function f(e, t, r = {}) {
        let i = u(e, t, r),
          o = (function (e) {
            let { done: t, value: r } = e.next();
            return t ? void 0 : r;
          })(i);
        return o[0]
          ? [
              new n(o[0], function* () {
                for (let e of i) e[0] && (yield e[0]);
              }),
              void 0,
            ]
          : [void 0, o[1]];
      }
      function d(e, t) {
        return new l({ type: e, schema: null, validator: t });
      }
      function h() {
        return d("any", () => !0);
      }
      function p(e) {
        return new l({
          type: "array",
          schema: e,
          *entries(t) {
            if (e && Array.isArray(t))
              for (let [r, n] of t.entries()) yield [r, n, e];
          },
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
          validator: (e) =>
            Array.isArray(e) ||
            `Expected an array value, but received: ${s(e)}`,
        });
      }
      function y() {
        return d("boolean", (e) => "boolean" == typeof e);
      }
      function g(e) {
        return d(
          "instance",
          (t) =>
            t instanceof e ||
            `Expected a \`${e.name}\` instance, but received: ${s(t)}`
        );
      }
      function m(e) {
        let t = s(e),
          r = typeof e;
        return new l({
          type: "literal",
          schema:
            "string" === r || "number" === r || "boolean" === r ? e : null,
          validator: (r) =>
            r === e || `Expected the literal \`${t}\`, but received: ${s(r)}`,
        });
      }
      function b(e) {
        return new l({
          ...e,
          validator: (t, r) => null === t || e.validator(t, r),
          refiner: (t, r) => null === t || e.refiner(t, r),
        });
      }
      function E() {
        return d(
          "number",
          (e) =>
            ("number" == typeof e && !isNaN(e)) ||
            `Expected a number, but received: ${s(e)}`
        );
      }
      function w(e) {
        return new l({
          ...e,
          validator: (t, r) => void 0 === t || e.validator(t, r),
          refiner: (t, r) => void 0 === t || e.refiner(t, r),
        });
      }
      function v(e, t) {
        return new l({
          type: "record",
          schema: null,
          *entries(r) {
            if (i(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, e], yield [n, i, t];
              }
          },
          validator: (e) => o(e) || `Expected an object, but received: ${s(e)}`,
          coercer: (e) => (o(e) ? { ...e } : e),
        });
      }
      function A() {
        return d(
          "string",
          (e) =>
            "string" == typeof e || `Expected a string, but received: ${s(e)}`
        );
      }
      function x(e) {
        let t = d("never", () => !1);
        return new l({
          type: "tuple",
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(e.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
            }
          },
          validator: (e) =>
            Array.isArray(e) || `Expected an array, but received: ${s(e)}`,
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
        });
      }
      function I(e) {
        let t = Object.keys(e);
        return new l({
          type: "type",
          schema: e,
          *entries(r) {
            if (i(r)) for (let n of t) yield [n, r[n], e[n]];
          },
          validator: (e) => o(e) || `Expected an object, but received: ${s(e)}`,
          coercer: (e) => (o(e) ? { ...e } : e),
        });
      }
      function O(e) {
        let t = e.map((e) => e.type).join(" | ");
        return new l({
          type: "union",
          schema: null,
          coercer(t, r) {
            for (let n of e) {
              let [e, i] = n.validate(t, { coerce: !0, mask: r.mask });
              if (!e) return i;
            }
            return t;
          },
          validator(r, n) {
            let i = [];
            for (let t of e) {
              let [...e] = u(r, t, n),
                [o] = e;
              if (!o[0]) return [];
              for (let [t] of e) t && i.push(t);
            }
            return [
              `Expected the value to satisfy a union of \`${t}\`, but received: ${s(
                r
              )}`,
              ...i,
            ];
          },
        });
      }
      function T() {
        return d("unknown", () => !0);
      }
      function _(e, t, r) {
        return new l({
          ...e,
          coercer: (n, i) =>
            f(n, t)[0] ? e.coercer(n, i) : e.coercer(r(n, i), i),
        });
      }
    },
  },
]);
