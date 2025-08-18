"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [78658],
  {
    44861: function (e, t, n) {
      n.d(t, {
        u: function () {
          return y;
        },
      });
      var r = n(15530),
        s = n(92641),
        a = n(47467),
        i = n(54779);
      let o = {
        block: (0, s.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = a.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? r.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, a.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, r.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, i.d)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, r.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, r.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, r.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var l = n(28068),
        u = n(99186),
        c = n(71870),
        h = n(11061),
        p = n(98841),
        f = n(677);
      let d = {
          contracts: {
            gasPriceOracle: {
              address: "0x420000000000000000000000000000000000000F",
            },
            l1Block: { address: "0x4200000000000000000000000000000000000015" },
            l2CrossDomainMessenger: {
              address: "0x4200000000000000000000000000000000000007",
            },
            l2Erc721Bridge: {
              address: "0x4200000000000000000000000000000000000014",
            },
            l2StandardBridge: {
              address: "0x4200000000000000000000000000000000000010",
            },
            l2ToL1MessagePasser: {
              address: "0x4200000000000000000000000000000000000016",
            },
          },
          formatters: o,
          serializers: {
            transaction: function (e, t) {
              return "deposit" === e.type || void 0 !== e.sourceHash
                ? (function (e) {
                    !(function (e) {
                      let { from: t, to: n } = e;
                      if (t && !(0, u.U)(t)) throw new l.b({ address: t });
                      if (n && !(0, u.U)(n)) throw new l.b({ address: n });
                    })(e);
                    let {
                        sourceHash: t,
                        data: n,
                        from: r,
                        gas: s,
                        isSystemTx: a,
                        mint: i,
                        to: o,
                        value: f,
                      } = e,
                      d = [
                        t,
                        r,
                        o ?? "0x",
                        i ? (0, h.NC)(i) : "0x",
                        f ? (0, h.NC)(f) : "0x",
                        s ? (0, h.NC)(s) : "0x",
                        a ? "0x1" : "0x",
                        n ?? "0x",
                      ];
                    return (0, c.SM)(["0x7e", (0, p.LV)(d)]);
                  })(e)
                : (0, f.D)(e, t);
            },
          },
        },
        y = (0, n(98009).a)({
          ...d,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...d.contracts,
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 17482143,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 17482143,
              },
            },
          },
          sourceId: 1,
        });
    },
    48160: function (e, t, n) {
      n.d(t, {
        j: function () {
          return N;
        },
      });
      var r = n(98009),
        s = n(15530),
        a = n(90893),
        i = n(11061),
        o = n(92641),
        l = n(95569),
        u = n(47467),
        c = n(54779),
        h = n(93280);
      let p = {
        block: (0, o.G)({
          format(e) {
            let t = e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = p.transaction?.format(e);
              return (
                "0x71" === t.typeHex
                  ? (t.type = "eip712")
                  : "0xff" === t.typeHex && (t.type = "priority"),
                t
              );
            });
            return {
              l1BatchNumber: e.l1BatchNumber
                ? (0, s.y_)(e.l1BatchNumber)
                : null,
              l1BatchTimestamp: e.l1BatchTimestamp
                ? (0, s.y_)(e.l1BatchTimestamp)
                : null,
              transactions: t,
            };
          },
        }),
        transaction: (0, u.y_)({
          format(e) {
            let t = {};
            return (
              "0x71" === e.type
                ? (t.type = "eip712")
                : "0xff" === e.type && (t.type = "priority"),
              {
                ...t,
                l1BatchNumber: e.l1BatchNumber
                  ? (0, s.y_)(e.l1BatchNumber)
                  : null,
                l1BatchTxIndex: e.l1BatchTxIndex
                  ? (0, s.y_)(e.l1BatchTxIndex)
                  : null,
              }
            );
          },
        }),
        transactionReceipt: (0, c.d)({
          format: (e) => ({
            l1BatchNumber: e.l1BatchNumber ? (0, s.y_)(e.l1BatchNumber) : null,
            l1BatchTxIndex: e.l1BatchTxIndex
              ? (0, s.y_)(e.l1BatchTxIndex)
              : null,
            logs: e.logs.map((e) => ({
              ...(0, l.U)(e),
              l1BatchNumber: e.l1BatchNumber
                ? (0, s.y_)(e.l1BatchNumber)
                : null,
              transactionLogIndex: (0, s.ly)(e.transactionLogIndex),
              logType: e.logType,
            })),
            l2ToL1Logs: e.l2ToL1Logs.map((e) => ({
              blockNumber: (0, s.y_)(e.blockHash),
              blockHash: e.blockHash,
              l1BatchNumber: (0, s.y_)(e.l1BatchNumber),
              transactionIndex: (0, s.y_)(e.transactionIndex),
              shardId: (0, s.y_)(e.shardId),
              isService: e.isService,
              sender: e.sender,
              key: e.key,
              value: e.value,
              transactionHash: e.transactionHash,
              logIndex: (0, s.y_)(e.logIndex),
            })),
          }),
        }),
        transactionRequest: (0, h.iy)({
          exclude: [
            "customSignature",
            "factoryDeps",
            "gasPerPubdata",
            "paymaster",
            "paymasterInput",
          ],
          format: (e) =>
            e.gasPerPubdata ||
            (e.paymaster && e.paymasterInput) ||
            e.factoryDeps ||
            e.customSignature
              ? {
                  eip712Meta: {
                    ...(e.gasPerPubdata
                      ? { gasPerPubdata: (0, i.NC)(e.gasPerPubdata) }
                      : {}),
                    ...(e.paymaster && e.paymasterInput
                      ? {
                          paymasterParams: {
                            paymaster: e.paymaster,
                            paymasterInput: Array.from(
                              (0, a.nr)(e.paymasterInput)
                            ),
                          },
                        }
                      : {}),
                    ...(e.factoryDeps
                      ? {
                          factoryDeps: e.factoryDeps.map((e) =>
                            Array.from((0, a.nr)(e))
                          ),
                        }
                      : {}),
                    ...(e.customSignature
                      ? {
                          customSignature: Array.from(
                            (0, a.nr)(e.customSignature)
                          ),
                        }
                      : {}),
                  },
                  type: "0x71",
                }
              : {},
        }),
      };
      var f = n(71870),
        d = n(98841),
        y = n(677),
        m = n(28068),
        b = n(6526),
        g = n(20789),
        x = n(99186),
        w = n(4794),
        v = n(25119);
      function B(e) {
        let { chainId: t, to: n, from: r, paymaster: s, paymasterInput: a } = e;
        if (!(0, v.W)(e)) throw new w.l();
        if (!t || t <= 0) throw new g.hJ({ chainId: t });
        if (n && !(0, x.U)(n)) throw new m.b({ address: n });
        if (r && !(0, x.U)(r)) throw new m.b({ address: r });
        if (s && !(0, x.U)(s)) throw new m.b({ address: s });
        if (s && !a)
          throw new b.G(
            "`paymasterInput` must be provided when `paymaster` is defined"
          );
        if (!s && a)
          throw new b.G(
            "`paymaster` must be provided when `paymasterInput` is defined"
          );
      }
      var C = n(37275);
      let N = (0, r.a)({
        formatters: p,
        serializers: {
          transaction: function (e, t) {
            return (0, v.W)(e)
              ? (function (e) {
                  let {
                    chainId: t,
                    gas: n,
                    nonce: r,
                    to: s,
                    from: a,
                    value: o,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: u,
                    customSignature: c,
                    factoryDeps: h,
                    paymaster: p,
                    paymasterInput: y,
                    gasPerPubdata: m,
                    data: b,
                  } = e;
                  B(e);
                  let g = [
                    r ? (0, i.NC)(r) : "0x",
                    u ? (0, i.NC)(u) : "0x",
                    l ? (0, i.NC)(l) : "0x",
                    n ? (0, i.NC)(n) : "0x",
                    s ?? "0x",
                    o ? (0, i.NC)(o) : "0x",
                    b ?? "0x0",
                    (0, i.NC)(t),
                    (0, i.NC)(""),
                    (0, i.NC)(""),
                    (0, i.NC)(t),
                    a ?? "0x",
                    m ? (0, i.NC)(m) : "0x",
                    h ?? [],
                    c ?? "0x",
                    p && y ? [p, y] : [],
                  ];
                  return (0, f.SM)(["0x71", (0, d.LV)(g)]);
                })(e)
              : (0, y.D)(e, t);
          },
        },
        custom: {
          getEip712Domain: (e) => {
            B(e);
            let t = (function (e) {
              let {
                gas: t,
                nonce: n,
                to: r,
                from: s,
                value: a,
                maxFeePerGas: o,
                maxPriorityFeePerGas: l,
                factoryDeps: u,
                paymaster: c,
                paymasterInput: h,
                gasPerPubdata: p,
                data: f,
              } = e;
              return {
                txType: 113n,
                from: BigInt(s),
                to: r ? BigInt(r) : 0n,
                gasLimit: t ?? 0n,
                gasPerPubdataByteLimit: p ?? 0n,
                maxFeePerGas: o ?? 0n,
                maxPriorityFeePerGas: l ?? 0n,
                paymaster: c ? BigInt(c) : 0n,
                nonce: n ? BigInt(n) : 0n,
                value: a ?? 0n,
                data: f || "0x0",
                factoryDeps: u?.map((e) => i.NC(C.x(e))) ?? [],
                paymasterInput: h || "0x",
              };
            })(e);
            return {
              domain: { name: "zkSync", version: "2", chainId: e.chainId },
              types: {
                Transaction: [
                  { name: "txType", type: "uint256" },
                  { name: "from", type: "uint256" },
                  { name: "to", type: "uint256" },
                  { name: "gasLimit", type: "uint256" },
                  { name: "gasPerPubdataByteLimit", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymaster", type: "uint256" },
                  { name: "nonce", type: "uint256" },
                  { name: "value", type: "uint256" },
                  { name: "data", type: "bytes" },
                  { name: "factoryDeps", type: "bytes32[]" },
                  { name: "paymasterInput", type: "bytes" },
                ],
              },
              primaryType: "Transaction",
              message: t,
            };
          },
        },
        id: 324,
        name: "zkSync Era",
        network: "zksync-era",
        nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
        rpcUrls: {
          default: {
            http: ["https://mainnet.era.zksync.io"],
            webSocket: ["wss://mainnet.era.zksync.io/ws"],
          },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://era.zksync.network/",
            apiUrl: "https://api-era.zksync.network/api",
          },
        },
        contracts: {
          multicall3: { address: "0xF9cda624FBC7e059355ce98a31693d299FACd963" },
        },
      });
    },
    98841: function (e, t, n) {
      n.d(t, {
        LV: function () {
          return o;
        },
      });
      var r = n(6526),
        s = n(45665),
        a = n(90893),
        i = n(11061);
      function o(e, t = "hex") {
        let n = (function e(t) {
            return Array.isArray(t)
              ? (function (e) {
                  let t = e.reduce((e, t) => e + t.length, 0),
                    n = l(t);
                  return {
                    length: t <= 55 ? 1 + t : 1 + n + t,
                    encode(r) {
                      for (let { encode: s } of (t <= 55
                        ? r.pushByte(192 + t)
                        : (r.pushByte(247 + n),
                          1 === n
                            ? r.pushUint8(t)
                            : 2 === n
                            ? r.pushUint16(t)
                            : 3 === n
                            ? r.pushUint24(t)
                            : r.pushUint32(t)),
                      e))
                        s(r);
                    },
                  };
                })(t.map((t) => e(t)))
              : (function (e) {
                  let t = "string" == typeof e ? (0, a.nr)(e) : e,
                    n = l(t.length);
                  return {
                    length:
                      1 === t.length && t[0] < 128
                        ? 1
                        : t.length <= 55
                        ? 1 + t.length
                        : 1 + n + t.length,
                    encode(e) {
                      (1 === t.length && t[0] < 128) ||
                        (t.length <= 55
                          ? e.pushByte(128 + t.length)
                          : (e.pushByte(183 + n),
                            1 === n
                              ? e.pushUint8(t.length)
                              : 2 === n
                              ? e.pushUint16(t.length)
                              : 3 === n
                              ? e.pushUint24(t.length)
                              : e.pushUint32(t.length))),
                        e.pushBytes(t);
                    },
                  };
                })(t);
          })(e),
          r = (0, s.q)(new Uint8Array(n.length));
        return (n.encode(r), "hex" === t) ? (0, i.ci)(r.bytes) : r.bytes;
      }
      function l(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 16777216) return 3;
        if (e < 4294967296) return 4;
        throw new r.G("Length is too large.");
      }
    },
    40413: function (e, t, n) {
      n.d(t, {
        J: function () {
          return m;
        },
      });
      var r = n(30259),
        s = n(95181);
      class a extends s.kb {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, s.GL)(this.buffer));
        }
        update(e) {
          (0, r.Gg)(this);
          let { view: t, buffer: n, blockLen: a } = this,
            i = (e = (0, s.O0)(e)).length;
          for (let r = 0; r < i; ) {
            let o = Math.min(a - this.pos, i - r);
            if (o === a) {
              let t = (0, s.GL)(e);
              for (; a <= i - r; r += a) this.process(t, r);
              continue;
            }
            n.set(e.subarray(r, r + o), this.pos),
              (this.pos += o),
              (r += o),
              this.pos === a && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.Gg)(this), (0, r.J8)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: a, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > a - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < a; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let s = BigInt(32),
              a = BigInt(4294967295),
              i = Number((n >> s) & a),
              o = Number(n & a),
              l = r ? 4 : 0,
              u = r ? 0 : 4;
            e.setUint32(t + l, i, r), e.setUint32(t + u, o, r);
          })(n, a - 8, BigInt(8 * this.length), i),
            this.process(n, 0);
          let l = (0, s.GL)(e),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = u / 4,
            h = this.get();
          if (c > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) l.setUint32(4 * e, h[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: s,
            destroyed: a,
            pos: i,
          } = this;
          return (
            (e.length = r),
            (e.pos = i),
            (e.finished = s),
            (e.destroyed = a),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let i = (e, t, n) => (e & t) ^ (~e & n),
        o = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
        l = new Uint32Array([
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
        u = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        c = new Uint32Array(64);
      class h extends a {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]),
            (this.E = 0 | u[4]),
            (this.F = 0 | u[5]),
            (this.G = 0 | u[6]),
            (this.H = 0 | u[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: s, F: a, G: i, H: o } = this;
          return [e, t, n, r, s, a, i, o];
        }
        set(e, t, n, r, s, a, i, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | a),
            (this.G = 0 | i),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              r = (0, s.np)(t, 7) ^ (0, s.np)(t, 18) ^ (t >>> 3),
              a = (0, s.np)(n, 17) ^ (0, s.np)(n, 19) ^ (n >>> 10);
            c[e] = (a + c[e - 7] + r + c[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: u, E: h, F: p, G: f, H: d } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (d +
                  ((0, s.np)(h, 6) ^ (0, s.np)(h, 11) ^ (0, s.np)(h, 25)) +
                  i(h, p, f) +
                  l[e] +
                  c[e]) |
                0,
              y =
                (((0, s.np)(n, 2) ^ (0, s.np)(n, 13) ^ (0, s.np)(n, 22)) +
                  o(n, r, a)) |
                0;
            (d = f),
              (f = p),
              (p = h),
              (h = (u + t) | 0),
              (u = a),
              (a = r),
              (r = n),
              (n = (t + y) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (u = (u + this.D) | 0),
            (h = (h + this.E) | 0),
            (p = (p + this.F) | 0),
            (f = (f + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(n, r, a, u, h, p, f, d);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let p = (0, s.hE)(() => new h());
      var f = n(10757),
        d = n(90893),
        y = n(11061);
      function m(e, t) {
        let n = p((0, f.v)(e, { strict: !1 }) ? (0, d.O0)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, y.NC)(n);
      }
    },
    677: function (e, t, n) {
      n.d(t, {
        D: function () {
          return U;
        },
      });
      var r = n(22253),
        s = n(90893),
        a = n(11061);
      function i(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, s.nr)(e))
              : e.blobs,
          i = [];
        for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? i : i.map((e) => (0, a.ci)(e));
      }
      function o(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, s.nr)(e))
              : e.blobs,
          i =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, s.nr)(e))
              : e.commitments,
          o = [];
        for (let e = 0; e < r.length; e++) {
          let n = r[e],
            s = i[e];
          o.push(Uint8Array.from(t.computeBlobKzgProof(n, s)));
        }
        return "bytes" === n ? o : o.map((e) => (0, a.ci)(e));
      }
      var l = n(40413),
        u = n(6526);
      class c extends u.G {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BlobSizeTooLargeError",
            });
        }
      }
      class h extends u.G {
        constructor() {
          super("Blob data must not be empty."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EmptyBlobError",
            });
        }
      }
      class p extends u.G {
        constructor({ hash: e, size: t }) {
          super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${t}`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidVersionedHashSizeError",
            });
        }
      }
      class f extends u.G {
        constructor({ hash: e, version: t }) {
          super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: ["Expected: 1", `Received: ${t}`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidVersionedHashVersionError",
            });
        }
      }
      var d = n(45665),
        y = n(97169),
        m = n(71870),
        b = n(97232),
        g = n(98841),
        x = n(28068),
        w = n(20789),
        v = n(20972),
        B = n(99186),
        C = n(48940),
        N = n(15530);
      function P(e) {
        let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: s } = e;
        if (t <= 0) throw new w.hJ({ chainId: t });
        if (s && !(0, B.U)(s)) throw new x.b({ address: s });
        if (r && r > 2n ** 256n - 1n) throw new v.Hh({ maxFeePerGas: r });
        if (n && r && n > r)
          throw new v.cs({ maxFeePerGas: r, maxPriorityFeePerGas: n });
      }
      var I = n(58184);
      function G(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: s, storageKeys: a } = e[n];
          for (let e = 0; e < a.length; e++)
            if (a[e].length - 2 != 64) throw new r.JC({ storageKey: a[e] });
          if (!(0, B.U)(s, { strict: !1 })) throw new x.b({ address: s });
          t.push([s, a]);
        }
        return t;
      }
      function U(e, t) {
        let n = (0, I.l)(e);
        return "eip1559" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: s,
                to: i,
                value: o,
                maxFeePerGas: l,
                maxPriorityFeePerGas: u,
                accessList: c,
                data: h,
              } = e;
              P(e);
              let p = G(c),
                f = [
                  (0, a.NC)(n),
                  s ? (0, a.NC)(s) : "0x",
                  u ? (0, a.NC)(u) : "0x",
                  l ? (0, a.NC)(l) : "0x",
                  r ? (0, a.NC)(r) : "0x",
                  i ?? "0x",
                  o ? (0, a.NC)(o) : "0x",
                  h ?? "0x",
                  p,
                  ...L(e, t),
                ];
              return (0, m.SM)(["0x02", (0, g.LV)(f)]);
            })(e, t)
          : "eip2930" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                data: s,
                nonce: i,
                to: o,
                value: l,
                accessList: c,
                gasPrice: h,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: s,
                  to: a,
                } = e;
                if (t <= 0) throw new w.hJ({ chainId: t });
                if (a && !(0, B.U)(a)) throw new x.b({ address: a });
                if (n || s)
                  throw new u.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                  );
                if (r && r > 2n ** 256n - 1n)
                  throw new v.Hh({ maxFeePerGas: r });
              })(e);
              let p = G(c),
                f = [
                  (0, a.NC)(n),
                  i ? (0, a.NC)(i) : "0x",
                  h ? (0, a.NC)(h) : "0x",
                  r ? (0, a.NC)(r) : "0x",
                  o ?? "0x",
                  l ? (0, a.NC)(l) : "0x",
                  s ?? "0x",
                  p,
                  ...L(e, t),
                ];
              return (0, m.SM)(["0x01", (0, g.LV)(f)]);
            })(e, t)
          : "eip4844" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: u,
                to: b,
                value: x,
                maxFeePerBlobGas: w,
                maxFeePerGas: v,
                maxPriorityFeePerGas: B,
                accessList: I,
                data: U,
              } = e;
              !(function (e) {
                let { blobVersionedHashes: t } = e;
                if (t) {
                  if (0 === t.length) throw new h();
                  for (let e of t) {
                    let t = (0, y.d)(e),
                      n = (0, N.ly)((0, C.tP)(e, 0, 1));
                    if (32 !== t) throw new p({ hash: e, size: t });
                    if (1 !== n) throw new f({ hash: e, version: n });
                  }
                }
                P(e);
              })(e);
              let k = e.blobVersionedHashes,
                E = e.sidecars;
              if (e.blobs) {
                let t =
                    "string" == typeof e.blobs[0]
                      ? e.blobs
                      : e.blobs.map((e) => (0, a.ci)(e)),
                  n = e.kzg,
                  r = i({ blobs: t, kzg: n }),
                  u = o({ blobs: t, commitments: r, kzg: n });
                (k = (function (e) {
                  let { commitments: t, version: n } = e,
                    r = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                    s = [];
                  for (let e of t)
                    s.push(
                      (function (e) {
                        let { commitment: t, version: n = 1 } = e,
                          r = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                          s = (0, l.J)(t, "bytes");
                        return s.set([n], 0), "bytes" === r ? s : (0, a.ci)(s);
                      })({ commitment: e, to: r, version: n })
                    );
                  return s;
                })({ commitments: r })),
                  !1 !== E &&
                    (E = (function (e) {
                      let { data: t, kzg: n, to: r } = e,
                        l =
                          e.blobs ??
                          (function (e) {
                            let t =
                                e.to ??
                                ("string" == typeof e.data ? "hex" : "bytes"),
                              n =
                                "string" == typeof e.data
                                  ? (0, s.nr)(e.data)
                                  : e.data,
                              r = (0, y.d)(n);
                            if (!r) throw new h();
                            if (r > 761855)
                              throw new c({ maxSize: 761855, size: r });
                            let i = [],
                              o = !0,
                              l = 0;
                            for (; o; ) {
                              let e = (0, d.q)(new Uint8Array(131072)),
                                t = 0;
                              for (; t < 4096; ) {
                                let r = n.slice(l, l + 31);
                                if (
                                  (e.pushByte(0), e.pushBytes(r), r.length < 31)
                                ) {
                                  e.pushByte(128), (o = !1);
                                  break;
                                }
                                t++, (l += 31);
                              }
                              i.push(e);
                            }
                            return "bytes" === t
                              ? i.map((e) => e.bytes)
                              : i.map((e) => (0, a.ci)(e.bytes));
                          })({ data: t, to: r }),
                        u = e.commitments ?? i({ blobs: l, kzg: n, to: r }),
                        p =
                          e.proofs ??
                          o({ blobs: l, commitments: u, kzg: n, to: r }),
                        f = [];
                      for (let e = 0; e < l.length; e++)
                        f.push({ blob: l[e], commitment: u[e], proof: p[e] });
                      return f;
                    })({ blobs: t, commitments: r, proofs: u }));
              }
              let T = G(I),
                S = [
                  (0, a.NC)(n),
                  u ? (0, a.NC)(u) : "0x",
                  B ? (0, a.NC)(B) : "0x",
                  v ? (0, a.NC)(v) : "0x",
                  r ? (0, a.NC)(r) : "0x",
                  b ?? "0x",
                  x ? (0, a.NC)(x) : "0x",
                  U ?? "0x",
                  T,
                  w ? (0, a.NC)(w) : "0x",
                  k ?? [],
                  ...L(e, t),
                ],
                F = [],
                _ = [],
                z = [];
              if (E)
                for (let e = 0; e < E.length; e++) {
                  let { blob: t, commitment: n, proof: r } = E[e];
                  F.push(t), _.push(n), z.push(r);
                }
              return (0, m.SM)([
                "0x03",
                E ? (0, g.LV)([S, F, _, z]) : (0, g.LV)(S),
              ]);
            })(e, t)
          : (function (e, t) {
              let {
                chainId: n = 0,
                gas: s,
                data: i,
                nonce: o,
                to: l,
                value: c,
                gasPrice: h,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: s,
                  to: a,
                  accessList: i,
                } = e;
                if (a && !(0, B.U)(a)) throw new x.b({ address: a });
                if (void 0 !== t && t <= 0) throw new w.hJ({ chainId: t });
                if (n || s)
                  throw new u.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                  );
                if (r && r > 2n ** 256n - 1n)
                  throw new v.Hh({ maxFeePerGas: r });
                if (i)
                  throw new u.G(
                    "`accessList` is not a valid Legacy Transaction attribute."
                  );
              })(e);
              let p = [
                o ? (0, a.NC)(o) : "0x",
                h ? (0, a.NC)(h) : "0x",
                s ? (0, a.NC)(s) : "0x",
                l ?? "0x",
                c ? (0, a.NC)(c) : "0x",
                i ?? "0x",
              ];
              if (t) {
                let e = (() => {
                  if (t.v >= 35n)
                    return (t.v - 35n) / 2n > 0
                      ? t.v
                      : 27n + (35n === t.v ? 0n : 1n);
                  if (n > 0) return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                  let e = 27n + (27n === t.v ? 0n : 1n);
                  if (t.v !== e) throw new r.vl({ v: t.v });
                  return e;
                })();
                p = [...p, (0, a.NC)(e), t.r, t.s];
              } else n > 0 && (p = [...p, (0, a.NC)(n), "0x", "0x"]);
              return (0, g.LV)(p);
            })(e, t);
      }
      function L(e, t) {
        let { r: n, s: r, v: s, yParity: i } = t ?? e;
        return void 0 === n || void 0 === r || (void 0 === s && void 0 === i)
          ? []
          : [
              "number" == typeof i
                ? i
                  ? (0, a.NC)(1)
                  : "0x"
                : 0n === s
                ? "0x"
                : 1n === s
                ? (0, a.NC)(1)
                : 27n === s
                ? "0x"
                : (0, a.NC)(1),
              (0, b.f)(n),
              (0, b.f)(r),
            ];
      }
    },
    4794: function (e, t, n) {
      n.d(t, {
        l: function () {
          return s;
        },
      });
      var r = n(6526);
      class s extends r.G {
        constructor() {
          super(
            'Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`'
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidEip712TransactionError",
            });
        }
      }
    },
    37275: function (e, t, n) {
      n.d(t, {
        x: function () {
          return h;
        },
      });
      var r = n(18344),
        s = n(90893),
        a = n(40413);
      let i = 32n * (2n ** 16n - 1n);
      var o = n(6526);
      class l extends o.G {
        constructor({ givenLength: e, maxBytecodeSize: t }) {
          super(
            `Bytecode cannot be longer than ${t} bytes. Given length: ${e}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytecodeLengthExceedsMaxSizeError",
            });
        }
      }
      class u extends o.G {
        constructor({ givenLengthInWords: e }) {
          super(
            `Bytecode length in 32-byte words must be odd. Given length in words: ${e}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytecodeLengthInWordsMustBeOddError",
            });
        }
      }
      class c extends o.G {
        constructor({ givenLength: e }) {
          super(
            `The bytecode length in bytes must be divisible by 32. Given length: ${e}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytecodeLengthMustBeDivisibleBy32Error",
            });
        }
      }
      function h(e) {
        let t = (0, s.O0)(e);
        if (t.length % 32 != 0) throw new c({ givenLength: t.length });
        if (t.length > i)
          throw new l({ givenLength: t.length, maxBytecodeSize: i });
        let n = (0, a.J)(t),
          o = (0, s.O0)(n),
          h = t.length / 32;
        if (h % 2 == 0) throw new u({ givenLengthInWords: h });
        let p = (0, s.O0)(h),
          f = (0, r.vk)(p, { size: 2 }),
          d = new Uint8Array([1, 0]);
        return o.set(d, 0), o.set(f, 2), o;
      }
    },
    25119: function (e, t, n) {
      n.d(t, {
        W: function () {
          return r;
        },
      });
      function r(e) {
        return (
          "eip712" === e.type ||
          ("customSignature" in e && !!e.customSignature) ||
          ("paymaster" in e && !!e.paymaster) ||
          ("paymasterInput" in e && !!e.paymasterInput) ||
          ("gasPerPubdata" in e && "bigint" == typeof e.gasPerPubdata) ||
          ("factoryDeps" in e && !!e.factoryDeps)
        );
      }
    },
  },
]);
