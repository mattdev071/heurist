"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7408],
  {
    33817: function (t, e, n) {
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("positive integer expected, got " + t);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            "Uint8Array expected of length " + e + ", got length=" + t.length
          );
      }
      function o(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function s(t, e) {
        i(t);
        let n = e.outputLen;
        if (t.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      n.d(e, {
        $h: function () {
          return o;
        },
        eB: function () {
          return s;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return r;
        },
      });
    },
    12943: function (t, e, n) {
      n.d(e, {
        JQ: function () {
          return h;
        },
      });
      var r = n(33817),
        i = n(52545);
      let o = (t, e, n) => (t & e) ^ (~t & n),
        s = (t, e, n) => (t & e) ^ (t & n) ^ (e & n);
      class u extends i.kb {
        constructor(t, e, n, r) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, r.$h)(this);
          let { view: e, buffer: n, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let r = 0; r < s; ) {
            let u = Math.min(o - this.pos, s - r);
            if (u === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - r; r += o) this.process(e, r);
              continue;
            }
            n.set(t.subarray(r, r + u), this.pos),
              (this.pos += u),
              (r += u),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, r.$h)(this), (0, r.eB)(t, this), (this.finished = !0);
          let { buffer: e, view: n, blockLen: o, isLE: s } = this,
            { pos: u } = this;
          (e[u++] = 128),
            this.buffer.subarray(u).fill(0),
            this.padOffset > o - u && (this.process(n, 0), (u = 0));
          for (let t = u; t < o; t++) e[t] = 0;
          !(function (t, e, n, r) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((n >> i) & o),
              u = Number(n & o),
              a = r ? 4 : 0,
              c = r ? 0 : 4;
            t.setUint32(e + a, s, r), t.setUint32(e + c, u, r);
          })(n, o - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          let a = (0, i.GL)(t),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = c / 4,
            f = this.get();
          if (l > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < l; t++) a.setUint32(4 * t, f[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = r),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            r % e && t.buffer.set(n),
            t
          );
        }
      }
      let a = new Uint32Array([
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
        c = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        l = new Uint32Array(64);
      class f extends u {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | c[0]),
            (this.B = 0 | c[1]),
            (this.C = 0 | c[2]),
            (this.D = 0 | c[3]),
            (this.E = 0 | c[4]),
            (this.F = 0 | c[5]),
            (this.G = 0 | c[6]),
            (this.H = 0 | c[7]);
        }
        get() {
          let { A: t, B: e, C: n, D: r, E: i, F: o, G: s, H: u } = this;
          return [t, e, n, r, i, o, s, u];
        }
        set(t, e, n, r, i, o, s, u) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | u);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) l[n] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = l[t - 15],
              n = l[t - 2],
              r = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ (n >>> 10);
            l[t] = (o + l[t - 7] + r + l[t - 16]) | 0;
          }
          let { A: n, B: r, C: u, D: c, E: f, F: h, G: d, H: p } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (p +
                  ((0, i.np)(f, 6) ^ (0, i.np)(f, 11) ^ (0, i.np)(f, 25)) +
                  o(f, h, d) +
                  a[t] +
                  l[t]) |
                0,
              v =
                (((0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22)) +
                  s(n, r, u)) |
                0;
            (p = d),
              (d = h),
              (h = f),
              (f = (c + e) | 0),
              (c = u),
              (u = r),
              (r = n),
              (n = (e + v) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (u = (u + this.C) | 0),
            (c = (c + this.D) | 0),
            (f = (f + this.E) | 0),
            (h = (h + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(n, r, u, c, f, h, d, p);
        }
        roundClean() {
          l.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let h = (0, i.hE)(() => new f());
    },
    90545: function (t, e, n) {
      n.d(e, {
        fr: function () {
          return P;
        },
      });
      var r = n(33817);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32),
        s = (t, e, n) => (t << n) | (e >>> (32 - n)),
        u = (t, e, n) => (e << n) | (t >>> (32 - n)),
        a = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        c = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n));
      var l = n(52545);
      let f = [],
        h = [],
        d = [],
        p = BigInt(0),
        v = BigInt(1),
        y = BigInt(2),
        b = BigInt(7),
        g = BigInt(256),
        m = BigInt(113);
      for (let t = 0, e = v, n = 1, r = 0; t < 24; t++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          f.push(2 * (5 * r + n)),
          h.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = p;
        for (let t = 0; t < 7; t++)
          (e = ((e << v) ^ ((e >> b) * m)) % g) & y &&
            (i ^= v << ((v << BigInt(t)) - v));
        d.push(i);
      }
      let [w, x] = (function (t, e = !1) {
          let n = new Uint32Array(t.length),
            r = new Uint32Array(t.length);
          for (let s = 0; s < t.length; s++) {
            let { h: u, l: a } = (function (t, e = !1) {
              return e
                ? { h: Number(t & i), l: Number((t >> o) & i) }
                : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
            })(t[s], e);
            [n[s], r[s]] = [u, a];
          }
          return [n, r];
        })(d, !0),
        S = (t, e, n) => (n > 32 ? a(t, e, n) : s(t, e, n)),
        O = (t, e, n) => (n > 32 ? c(t, e, n) : u(t, e, n));
      class C extends l.kb {
        constructor(t, e, n, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.k8)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, l.Jq)(this.state));
        }
        keccak() {
          l.iA || (0, l.l1)(this.state32),
            (function (t, e = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - e; r < 24; r++) {
                for (let e = 0; e < 10; e++)
                  n[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let r = (e + 8) % 10,
                    i = (e + 2) % 10,
                    o = n[i],
                    s = n[i + 1],
                    u = S(o, s, 1) ^ n[r],
                    a = O(o, s, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (t[e + n] ^= u), (t[e + n + 1] ^= a);
                }
                let e = t[2],
                  i = t[3];
                for (let n = 0; n < 24; n++) {
                  let r = h[n],
                    o = S(e, i, r),
                    s = O(e, i, r),
                    u = f[n];
                  (e = t[u]), (i = t[u + 1]), (t[u] = o), (t[u + 1] = s);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let r = 0; r < 10; r++) n[r] = t[e + r];
                  for (let r = 0; r < 10; r++)
                    t[e + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (t[0] ^= w[r]), (t[1] ^= x[r]);
              }
              n.fill(0);
            })(this.state32, this.rounds),
            l.iA || (0, l.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, r.$h)(this);
          let { blockLen: e, state: n } = this,
            i = (t = (0, l.O0)(t)).length;
          for (let r = 0; r < i; ) {
            let o = Math.min(e - this.pos, i - r);
            for (let e = 0; e < o; e++) n[this.pos++] ^= t[r++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: n, blockLen: r } = this;
          (t[n] ^= e),
            (128 & e) != 0 && n === r - 1 && this.keccak(),
            (t[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, r.$h)(this, !1), (0, r.gk)(t), this.finish();
          let e = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = t.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, i - r);
            t.set(e.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, r.k8)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, r.eB)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new C(e, n, r, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let P = (0, l.hE)(() => new C(136, 1, 32));
    },
    52545: function (t, e, n) {
      n.d(e, {
        GL: function () {
          return o;
        },
        Jq: function () {
          return i;
        },
        O0: function () {
          return h;
        },
        ci: function () {
          return f;
        },
        hE: function () {
          return p;
        },
        iA: function () {
          return u;
        },
        kb: function () {
          return d;
        },
        l1: function () {
          return c;
        },
        np: function () {
          return s;
        },
      });
      var r = n(33817);
      let i = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        s = (t, e) => (t << (32 - e)) | (t >>> e),
        u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        a = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function c(t) {
        for (let e = 0; e < t.length; e++) t[e] = a(t[e]);
      }
      let l = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function f(t) {
        (0, r.gk)(t);
        let e = "";
        for (let n = 0; n < t.length; n++) e += l[t[n]];
        return e;
      }
      function h(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error("utf8ToBytes expected string, got " + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, r.gk)(t),
          t
        );
      }
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      function p(t) {
        let e = (e) => t().update(h(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
    },
    29457: function (t, e, n) {
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var r = n(78694),
        i = n(24142),
        o = new (class extends r.l {
          #t;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    58389: function (t, e, n) {
      n.d(e, {
        R: function () {
          return u;
        },
        m: function () {
          return s;
        },
      });
      var r = n(19815),
        i = n(75584),
        o = n(97983),
        s = class extends i.F {
          #r;
          #i;
          #o;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#i = t.mutationCache),
              (this.#r = []),
              (this.state = t.state || u()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#r.includes(t) ||
              (this.#r.push(t),
              this.clearGcTimeout(),
              this.#i.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#r = this.#r.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#i.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#r.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#i.remove(this));
          }
          continue() {
            return this.#o?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#o = (0, o.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#s({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#s({ type: "pause" });
              },
              onContinue: () => {
                this.#s({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#i.canRun(this),
            });
            let e = "pending" === this.state.status,
              n = !this.#o.canStart();
            try {
              if (!e) {
                this.#s({ type: "pending", variables: t, isPaused: n }),
                  await this.#i.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#s({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: n,
                  });
              }
              let r = await this.#o.start();
              return (
                await this.#i.config.onSuccess?.(
                  r,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, t, this.state.context),
                await this.#i.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, t, this.state.context),
                this.#s({ type: "success", data: r }),
                r
              );
            } catch (e) {
              try {
                throw (
                  (await this.#i.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#i.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#s({ type: "error", error: e });
              }
            } finally {
              this.#i.runNext(this);
            }
          }
          #s(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.V.batch(() => {
                this.#r.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#i.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function u() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    19815: function (t, e, n) {
      n.d(e, {
        V: function () {
          return r;
        },
      });
      var r = (function () {
        let t = [],
          e = 0,
          n = (t) => {
            t();
          },
          r = (t) => {
            t();
          },
          i = (t) => setTimeout(t, 0),
          o = (r) => {
            e
              ? t.push(r)
              : i(() => {
                  n(r);
                });
          },
          s = () => {
            let e = t;
            (t = []),
              e.length &&
                i(() => {
                  r(() => {
                    e.forEach((t) => {
                      n(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let n;
            e++;
            try {
              n = t();
            } finally {
              --e || s();
            }
            return n;
          },
          batchCalls:
            (t) =>
            (...e) => {
              o(() => {
                t(...e);
              });
            },
          schedule: o,
          setNotifyFunction: (t) => {
            n = t;
          },
          setBatchNotifyFunction: (t) => {
            r = t;
          },
          setScheduler: (t) => {
            i = t;
          },
        };
      })();
    },
    43401: function (t, e, n) {
      n.d(e, {
        N: function () {
          return o;
        },
      });
      var r = n(78694),
        i = n(24142),
        o = new (class extends r.l {
          #u = !0;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t(!0),
                    n = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#u !== t &&
              ((this.#u = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#u;
          }
        })();
    },
    45547: function (t, e, n) {
      n.d(e, {
        A: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var r = n(24142),
        i = n(19815),
        o = n(97983),
        s = n(75584),
        u = class extends s.F {
          #a;
          #c;
          #l;
          #o;
          #f;
          #h;
          constructor(t) {
            super(),
              (this.#h = !1),
              (this.#f = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#l = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#a = (function (t) {
                let e =
                    "function" == typeof t.initialData
                      ? t.initialData()
                      : t.initialData,
                  n = void 0 !== e,
                  r = n
                    ? "function" == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: n ? r ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: n ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = t.state ?? this.#a),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#o?.promise;
          }
          setOptions(t) {
            (this.options = { ...this.#f, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#l.remove(this);
          }
          setData(t, e) {
            let n = (0, r.oE)(this.state.data, t, this.options);
            return (
              this.#s({
                data: n,
                type: "success",
                dataUpdatedAt: e?.updatedAt,
                manual: e?.manual,
              }),
              n
            );
          }
          setState(t, e) {
            this.#s({ type: "setState", state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#o?.promise;
            return (
              this.#o?.cancel(t),
              e ? e.then(r.ZT).catch(r.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#a);
          }
          isActive() {
            return this.observers.some(
              (t) => !1 !== (0, r.Nc)(t.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.CN ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.Kp)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#o &&
                  (this.#h
                    ? this.#o.cancel({ revert: !0 })
                    : this.#o.cancelRetry()),
                this.scheduleGc()),
              this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#s({ type: "invalidate" });
          }
          fetch(t, e) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#o) return this.#o.continueRetry(), this.#o.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let n = new AbortController(),
              i = (t) => {
                Object.defineProperty(t, "signal", {
                  enumerable: !0,
                  get: () => ((this.#h = !0), n.signal),
                });
              },
              s = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let t = (0, r.cG)(this.options, e),
                    n = { queryKey: this.queryKey, meta: this.meta };
                  return (i(n), (this.#h = !1), this.options.persister)
                    ? this.options.persister(t, n, this)
                    : t(n);
                },
              };
            i(s),
              this.options.behavior?.onFetch(s, this),
              (this.#c = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== s.fetchOptions?.meta) &&
                this.#s({ type: "fetch", meta: s.fetchOptions?.meta });
            let u = (t) => {
              ((0, o.DV)(t) && t.silent) ||
                this.#s({ type: "error", error: t }),
                (0, o.DV)(t) ||
                  (this.#l.config.onError?.(t, this),
                  this.#l.config.onSettled?.(this.state.data, t, this)),
                this.scheduleGc();
            };
            return (
              (this.#o = (0, o.Mz)({
                initialPromise: e?.initialPromise,
                fn: s.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    u(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(t);
                  } catch (t) {
                    u(t);
                    return;
                  }
                  this.#l.config.onSuccess?.(t, this),
                    this.#l.config.onSettled?.(t, this.state.error, this),
                    this.scheduleGc();
                },
                onError: u,
                onFail: (t, e) => {
                  this.#s({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#s({ type: "pause" });
                },
                onContinue: () => {
                  this.#s({ type: "continue" });
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0,
              })),
              this.#o.start()
            );
          }
          #s(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error,
                  };
                case "pause":
                  return { ...e, fetchStatus: "paused" };
                case "continue":
                  return { ...e, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...e,
                    ...a(e.data, this.options),
                    fetchMeta: t.meta ?? null,
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let n = t.error;
                  if ((0, o.DV)(n) && n.revert && this.#c)
                    return { ...this.#c, fetchStatus: "idle" };
                  return {
                    ...e,
                    error: n,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: n,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...e, isInvalidated: !0 };
                case "setState":
                  return { ...e, ...t.state };
              }
            })(this.state)),
              i.V.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#l.notify({ query: this, type: "updated", action: t });
              });
          }
        };
      function a(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, o.Kw)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
    },
    75584: function (t, e, n) {
      n.d(e, {
        F: function () {
          return i;
        },
      });
      var r = n(24142),
        i = class {
          #d;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.PN)(this.gcTime) &&
                (this.#d = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (r.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#d && (clearTimeout(this.#d), (this.#d = void 0));
          }
        };
    },
    97983: function (t, e, n) {
      n.d(e, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return a;
        },
        Mz: function () {
          return f;
        },
      });
      var r = n(29457),
        i = n(43401),
        o = n(79632),
        s = n(24142);
      function u(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function a(t) {
        return (t ?? "online") !== "online" || i.N.isOnline();
      }
      var c = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = t?.revert),
            (this.silent = t?.silent);
        }
      };
      function l(t) {
        return t instanceof c;
      }
      function f(t) {
        let e,
          n = !1,
          l = 0,
          f = !1,
          h = (0, o.O)(),
          d = () =>
            r.j.isFocused() &&
            ("always" === t.networkMode || i.N.isOnline()) &&
            t.canRun(),
          p = () => a(t.networkMode) && t.canRun(),
          v = (n) => {
            f || ((f = !0), t.onSuccess?.(n), e?.(), h.resolve(n));
          },
          y = (n) => {
            f || ((f = !0), t.onError?.(n), e?.(), h.reject(n));
          },
          b = () =>
            new Promise((n) => {
              (e = (t) => {
                (f || d()) && n(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), f || t.onContinue?.();
            }),
          g = () => {
            let e;
            if (f) return;
            let r = 0 === l ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(v)
              .catch((e) => {
                if (f) return;
                let r = t.retry ?? (s.sk ? 0 : 3),
                  i = t.retryDelay ?? u,
                  o = "function" == typeof i ? i(l, e) : i,
                  a =
                    !0 === r ||
                    ("number" == typeof r && l < r) ||
                    ("function" == typeof r && r(l, e));
                if (n || !a) {
                  y(e);
                  return;
                }
                l++,
                  t.onFail?.(l, e),
                  (0, s._v)(o)
                    .then(() => (d() ? void 0 : b()))
                    .then(() => {
                      n ? y(e) : g();
                    });
              });
          };
        return {
          promise: h,
          cancel: (e) => {
            f || (y(new c(e)), t.abort?.());
          },
          continue: () => (e?.(), h),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: p,
          start: () => (p() ? g() : b().then(g), h),
        };
      }
    },
    78694: function (t, e, n) {
      n.d(e, {
        l: function () {
          return r;
        },
      });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    79632: function (t, e, n) {
      n.d(e, {
        O: function () {
          return r;
        },
      });
      function r() {
        let t, e;
        let n = new Promise((n, r) => {
          (t = n), (e = r);
        });
        function r(t) {
          Object.assign(n, t), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (e) => {
            r({ status: "fulfilled", value: e }), t(e);
          }),
          (n.reject = (t) => {
            r({ status: "rejected", reason: t }), e(t);
          }),
          n
        );
      }
    },
    24142: function (t, e, n) {
      n.d(e, {
        CN: function () {
          return C;
        },
        Ht: function () {
          return O;
        },
        KC: function () {
          return a;
        },
        Kp: function () {
          return u;
        },
        Nc: function () {
          return c;
        },
        PN: function () {
          return s;
        },
        Q$: function () {
          return v;
        },
        Rm: function () {
          return h;
        },
        SE: function () {
          return o;
        },
        VS: function () {
          return y;
        },
        VX: function () {
          return S;
        },
        X7: function () {
          return f;
        },
        Ym: function () {
          return d;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return w;
        },
        _x: function () {
          return l;
        },
        cG: function () {
          return P;
        },
        oE: function () {
          return x;
        },
        sk: function () {
          return r;
        },
        to: function () {
          return p;
        },
      });
      var r = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function o(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function s(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function u(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function a(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function c(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function l(t, e) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: o,
          queryKey: s,
          stale: u,
        } = t;
        if (s) {
          if (r) {
            if (e.queryHash !== h(s, e.options)) return !1;
          } else if (!p(e.queryKey, s)) return !1;
        }
        if ("all" !== n) {
          let t = e.isActive();
          if (("active" === n && !t) || ("inactive" === n && t)) return !1;
        }
        return (
          ("boolean" != typeof u || e.isStale() === u) &&
          (!i || i === e.state.fetchStatus) &&
          (!o || !!o(e))
        );
      }
      function f(t, e) {
        let { exact: n, status: r, predicate: i, mutationKey: o } = t;
        if (o) {
          if (!e.options.mutationKey) return !1;
          if (n) {
            if (d(e.options.mutationKey) !== d(o)) return !1;
          } else if (!p(e.options.mutationKey, o)) return !1;
        }
        return (!r || e.state.status === r) && (!i || !!i(e));
      }
      function h(t, e) {
        return (e?.queryKeyHashFn || d)(t);
      }
      function d(t) {
        return JSON.stringify(t, (t, e) =>
          g(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, n) => ((t[n] = e[n]), t), {})
            : e
        );
      }
      function p(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((n) => !p(t[n], e[n])))
        );
      }
      function v(t, e) {
        if (t === e) return t;
        let n = b(t) && b(e);
        if (n || (g(t) && g(e))) {
          let r = n ? t : Object.keys(t),
            i = r.length,
            o = n ? e : Object.keys(e),
            s = o.length,
            u = n ? [] : {},
            a = 0;
          for (let i = 0; i < s; i++) {
            let s = n ? i : o[i];
            ((!n && r.includes(s)) || n) && void 0 === t[s] && void 0 === e[s]
              ? ((u[s] = void 0), a++)
              : ((u[s] = v(t[s], e[s])),
                u[s] === t[s] && void 0 !== t[s] && a++);
          }
          return i === s && a === i ? t : u;
        }
        return e;
      }
      function y(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let n in t) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function g(t) {
        if (!m(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let n = e.prototype;
        return (
          !!(m(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function m(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function w(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function x(t, e, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(t, e)
          : !1 !== n.structuralSharing
          ? v(t, e)
          : e;
      }
      function S(t, e, n = 0) {
        let r = [...t, e];
        return n && r.length > n ? r.slice(1) : r;
      }
      function O(t, e, n = 0) {
        let r = [e, ...t];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var C = Symbol();
      function P(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== C
          ? t.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
    },
    6306: function (t, e, n) {
      n.d(e, {
        NL: function () {
          return s;
        },
        aH: function () {
          return u;
        },
      });
      var r = n(55881),
        i = n(90132),
        o = r.createContext(void 0),
        s = (t) => {
          let e = r.useContext(o);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        u = (t) => {
          let { client: e, children: n } = t;
          return (
            r.useEffect(
              () => (
                e.mount(),
                () => {
                  e.unmount();
                }
              ),
              [e]
            ),
            (0, i.jsx)(o.Provider, { value: e, children: n })
          );
        };
    },
    14023: function (t, e, n) {
      n.d(e, {
        $s: function () {
          return O;
        },
        BB: function () {
          return m;
        },
        Dp: function () {
          return l;
        },
        Gh: function () {
          return y;
        },
        H_: function () {
          return h;
        },
        He: function () {
          return g;
        },
        M6: function () {
          return S;
        },
        O3: function () {
          return f;
        },
        cB: function () {
          return w;
        },
        dp: function () {
          return v;
        },
        mL: function () {
          return p;
        },
        sw: function () {
          return b;
        },
        xS: function () {
          return d;
        },
        zo: function () {
          return c;
        },
      });
      var r = n(63030),
        i = n(55286);
      n(99855);
      var o = n(31113),
        s = n(96325);
      let u = new TextDecoder(),
        a = new TextEncoder();
      function c(...t) {
        let e = 0;
        for (let n of t) e += n.length;
        let n = new Uint8Array(e);
        for (let e = 0, r = 0; e < t.length; e++) {
          let i = t[e];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      function l(t) {
        return t instanceof Uint8Array
          ? t
          : "string" == typeof t
          ? h(t)
          : t instanceof Uint8Array
          ? t
          : new Uint8Array(t);
      }
      function f(t, e = {}) {
        let { size: n } = e,
          r = new Uint8Array(1);
        return ((r[0] = Number(t)), "number" == typeof n)
          ? (o.Yf(r, n), o.vk(r, { dir: "left", size: n }))
          : r;
      }
      function h(t, e = {}) {
        let { size: n } = e,
          u = t;
        n && (s.Yf(t, n), (u = i.eh(t, n)));
        let a = u.slice(2);
        a.length % 2 && (a = `0${a}`);
        let c = a.length / 2,
          l = new Uint8Array(c);
        for (let t = 0, e = 0; t < c; t++) {
          let n = o.DN(a.charCodeAt(e++)),
            i = o.DN(a.charCodeAt(e++));
          if (void 0 === n || void 0 === i)
            throw new r.G(
              `Invalid byte sequence ("${a[e - 2]}${a[e - 1]}" in "${a}").`
            );
          l[t] = 16 * n + i;
        }
        return l;
      }
      function d(t, e) {
        return h(i.xS(t, e));
      }
      function p(t, e = {}) {
        let { size: n } = e,
          r = a.encode(t);
        return "number" == typeof n
          ? (o.Yf(r, n), o.vk(r, { dir: "right", size: n }))
          : r;
      }
      function v(t) {
        return t.length;
      }
      function y(t, e = {}) {
        let { size: n } = e;
        void 0 !== n && o.Yf(t, n);
        let r = i.xv(t, e);
        return i.Gh(r, e);
      }
      function b(t, e = {}) {
        var n;
        let { size: r } = e,
          i = t;
        if (
          (void 0 !== r &&
            (o.Yf(i, r), (n = i), (i = o.fy(n, { dir: "left" }))),
          i.length > 1 || i[0] > 1)
        )
          throw new x(i);
        return !!i[0];
      }
      function g(t, e = {}) {
        let { size: n } = e;
        void 0 !== n && o.Yf(t, n);
        let r = i.xv(t, e);
        return i.He(r, e);
      }
      function m(t, e = {}) {
        let { size: n } = e,
          r = t;
        return void 0 !== n && (o.Yf(r, n), (r = w(r))), u.decode(r);
      }
      function w(t) {
        return o.fy(t, { dir: "right" });
      }
      class x extends r.G {
        constructor(t) {
          super(`Bytes value \`${t}\` is not a valid boolean.`, {
            metaMessages: [
              "The bytes array must contain a single byte of either a `0` or `1` value.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesBooleanError",
            });
        }
      }
      class S extends r.G {
        constructor({ givenSize: t, maxSize: e }) {
          super(
            `Size cannot exceed \`${e}\` bytes. Given size: \`${t}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class O extends r.G {
        constructor({ size: t, targetSize: e, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    63030: function (t, e, n) {
      n.d(e, {
        G: function () {
          return r;
        },
      });
      class r extends Error {
        constructor(t, e = {}) {
          let n = (() => {
              if (e.cause instanceof r) {
                if (e.cause.details) return e.cause.details;
                if (e.cause.shortMessage) return e.cause.shortMessage;
              }
              return e.cause?.message ? e.cause.message : e.details;
            })(),
            i = (e.cause instanceof r && e.cause.docsPath) || e.docsPath,
            o = `https://oxlib.sh${i ?? ""}`;
          super(
            [
              t || "An error occurred.",
              ...(e.metaMessages ? ["", ...e.metaMessages] : []),
              ...(n || i
                ? ["", n ? `Details: ${n}` : void 0, i ? `See: ${o}` : void 0]
                : []),
            ]
              .filter((t) => "string" == typeof t)
              .join("\n"),
            e.cause ? { cause: e.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = e.cause),
            (this.details = n),
            (this.docs = o),
            (this.docsPath = i),
            (this.shortMessage = t);
        }
        walk(t) {
          return (function t(e, n) {
            return n?.(e)
              ? e
              : e && "object" == typeof e && "cause" in e && e.cause
              ? t(e.cause, n)
              : n
              ? null
              : e;
          })(this, t);
        }
      }
    },
    55286: function (t, e, n) {
      n.d(e, {
        $s: function () {
          return M;
        },
        BB: function () {
          return P;
        },
        Dp: function () {
          return f;
        },
        Gh: function () {
          return x;
        },
        Gu: function () {
          return E;
        },
        He: function () {
          return C;
        },
        J5: function () {
          return k;
        },
        M6: function () {
          return A;
        },
        O0: function () {
          return O;
        },
        O3: function () {
          return h;
        },
        Q_: function () {
          return y;
        },
        dp: function () {
          return m;
        },
        eh: function () {
          return b;
        },
        fi: function () {
          return w;
        },
        mL: function () {
          return v;
        },
        mV: function () {
          return $;
        },
        sw: function () {
          return S;
        },
        tP: function () {
          return g;
        },
        xS: function () {
          return p;
        },
        xv: function () {
          return d;
        },
        zo: function () {
          return l;
        },
      });
      var r = n(14023),
        i = n(63030),
        o = n(99855),
        s = n(31113),
        u = n(96325);
      let a = new TextEncoder(),
        c = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function l(...t) {
        return `0x${t.reduce((t, e) => t + e.replace("0x", ""), "")}`;
      }
      function f(t) {
        return t instanceof Uint8Array
          ? d(t)
          : Array.isArray(t)
          ? d(new Uint8Array(t))
          : t;
      }
      function h(t, e = {}) {
        let n = `0x${Number(t)}`;
        return "number" == typeof e.size ? (u.Yf(n, e.size), y(n, e.size)) : n;
      }
      function d(t, e = {}) {
        let n = "";
        for (let e = 0; e < t.length; e++) n += c[t[e]];
        let r = `0x${n}`;
        return "number" == typeof e.size ? (u.Yf(r, e.size), b(r, e.size)) : r;
      }
      function p(t, e = {}) {
        let n;
        let { signed: r, size: i } = e,
          o = BigInt(t);
        i
          ? (n = r
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof t && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let s = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && o > n) || o < s) {
          let e = "bigint" == typeof t ? "n" : "";
          throw new k({
            max: n ? `${n}${e}` : void 0,
            min: `${s}${e}`,
            signed: r,
            size: i,
            value: `${t}${e}`,
          });
        }
        let u = (r && o < 0 ? (1n << BigInt(8 * i)) + BigInt(o) : o).toString(
            16
          ),
          a = `0x${u}`;
        return i ? y(a, i) : a;
      }
      function v(t, e = {}) {
        return d(a.encode(t), e);
      }
      function y(t, e) {
        return u.vk(t, { dir: "left", size: e });
      }
      function b(t, e) {
        return u.vk(t, { dir: "right", size: e });
      }
      function g(t, e, n, r = {}) {
        let { strict: i } = r;
        u.EM(t, e);
        let o = `0x${t
          .replace("0x", "")
          .slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
        return i && u.Ro(o, e, n), o;
      }
      function m(t) {
        return Math.ceil((t.length - 2) / 2);
      }
      function w(t) {
        return u.fy(t, { dir: "left" });
      }
      function x(t, e = {}) {
        let { signed: n } = e;
        e.size && u.Yf(t, e.size);
        let r = BigInt(t);
        if (!n) return r;
        let i = (1n << (8n * BigInt((t.length - 2) / 2))) - 1n;
        return r <= i >> 1n ? r : r - i - 1n;
      }
      function S(t, e = {}) {
        e.size && u.Yf(t, e.size);
        let n = w(t);
        if ("0x" === n) return !1;
        if ("0x1" === n) return !0;
        throw new I(t);
      }
      function O(t, e = {}) {
        return r.H_(t, e);
      }
      function C(t, e = {}) {
        let { signed: n, size: r } = e;
        return n || r ? Number(x(t, e)) : Number(t);
      }
      function P(t, e = {}) {
        let { size: n } = e,
          i = r.H_(t);
        return n && (s.Yf(i, n), (i = r.cB(i))), new TextDecoder().decode(i);
      }
      function E(t, e = {}) {
        let { strict: n = !1 } = e;
        try {
          return (
            !(function (t, e = {}) {
              let { strict: n = !1 } = e;
              if (!t || "string" != typeof t) throw new T(t);
              if ((n && !/^0x[0-9a-fA-F]*$/.test(t)) || !t.startsWith("0x"))
                throw new B(t);
            })(t, { strict: n }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class k extends i.G {
        constructor({ max: t, min: e, signed: n, size: r, value: i }) {
          super(
            `Number \`${i}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              t ? `(\`${e}\` to \`${t}\`)` : `(above \`${e}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class I extends i.G {
        constructor(t) {
          super(`Hex value \`"${t}"\` is not a valid boolean.`, {
            metaMessages: [
              'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexBooleanError",
            });
        }
      }
      class T extends i.G {
        constructor(t) {
          super(
            `Value \`${
              "object" == typeof t ? o.P(t) : t
            }\` of type \`${typeof t}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class B extends i.G {
        constructor(t) {
          super(`Value \`${t}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class A extends i.G {
        constructor({ givenSize: t, maxSize: e }) {
          super(
            `Size cannot exceed \`${e}\` bytes. Given size: \`${t}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class $ extends i.G {
        constructor({ offset: t, position: e, size: n }) {
          super(
            `Slice ${
              "start" === e ? "starting" : "ending"
            } at offset \`${t}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class M extends i.G {
        constructor({ size: t, targetSize: e, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    99855: function (t, e, n) {
      n.d(e, {
        P: function () {
          return r;
        },
      });
      function r(t, e, n) {
        return JSON.stringify(
          t,
          (t, n) =>
            "function" == typeof e
              ? e(t, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
    },
    31113: function (t, e, n) {
      n.d(e, {
        DN: function () {
          return s;
        },
        Yf: function () {
          return i;
        },
        fy: function () {
          return a;
        },
        vk: function () {
          return u;
        },
      });
      var r = n(14023);
      function i(t, e) {
        if (r.dp(t) > e) throw new r.M6({ givenSize: r.dp(t), maxSize: e });
      }
      let o = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function s(t) {
        return t >= o.zero && t <= o.nine
          ? t - o.zero
          : t >= o.A && t <= o.F
          ? t - (o.A - 10)
          : t >= o.a && t <= o.f
          ? t - (o.a - 10)
          : void 0;
      }
      function u(t, e = {}) {
        let { dir: n, size: i = 32 } = e;
        if (0 === i) return t;
        if (t.length > i)
          throw new r.$s({ size: t.length, targetSize: i, type: "Bytes" });
        let o = new Uint8Array(i);
        for (let e = 0; e < i; e++) {
          let r = "right" === n;
          o[r ? e : i - e - 1] = t[r ? e : t.length - e - 1];
        }
        return o;
      }
      function a(t, e = {}) {
        let { dir: n = "left" } = e,
          r = 0;
        for (
          let e = 0;
          e < t.length - 1 &&
          "0" === t["left" === n ? e : t.length - e - 1].toString();
          e++
        )
          r++;
        return "left" === n ? t.slice(r) : t.slice(0, t.length - r);
      }
    },
    96325: function (t, e, n) {
      n.d(e, {
        EM: function () {
          return o;
        },
        Ro: function () {
          return s;
        },
        Yf: function () {
          return i;
        },
        fy: function () {
          return a;
        },
        vk: function () {
          return u;
        },
      });
      var r = n(55286);
      function i(t, e) {
        if (r.dp(t) > e) throw new r.M6({ givenSize: r.dp(t), maxSize: e });
      }
      function o(t, e) {
        if ("number" == typeof e && e > 0 && e > r.dp(t) - 1)
          throw new r.mV({ offset: e, position: "start", size: r.dp(t) });
      }
      function s(t, e, n) {
        if ("number" == typeof e && "number" == typeof n && r.dp(t) !== n - e)
          throw new r.mV({ offset: n, position: "end", size: r.dp(t) });
      }
      function u(t, e = {}) {
        let { dir: n, size: i = 32 } = e;
        if (0 === i) return t;
        let o = t.replace("0x", "");
        if (o.length > 2 * i)
          throw new r.$s({
            size: Math.ceil(o.length / 2),
            targetSize: i,
            type: "Hex",
          });
        return `0x${o["right" === n ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
      function a(t, e = {}) {
        let { dir: n = "left" } = e,
          r = t.replace("0x", ""),
          i = 0;
        for (
          let t = 0;
          t < r.length - 1 &&
          "0" === r["left" === n ? t : r.length - t - 1].toString();
          t++
        )
          i++;
        return "0" ===
          (r = "left" === n ? r.slice(i) : r.slice(0, r.length - i))
          ? "0x"
          : "right" === n && r.length % 2 == 1
          ? `0x${r}0`
          : `0x${r}`;
      }
    },
    72151: function (t, e, n) {
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var r = n(80173),
        i = n(19114),
        o = n(57800);
      async function s(t) {
        let { client: e, ecosystem: n, data: s } = t,
          u = (0, i.NX)(e, n),
          a = { source: "sdk", ...s };
        return u("".concat((0, r.TS)("analytics"), "/event"), {
          method: "POST",
          body: (0, o.P)(a),
        }).catch(() => {});
      }
    },
    29181: function (t, e, n) {
      n.d(e, {
        Ah: function () {
          return y;
        },
        GO: function () {
          return f;
        },
        XY: function () {
          return c;
        },
        ax: function () {
          return u;
        },
        getChainDecimals: function () {
          return d;
        },
        getChainMetadata: function () {
          return v;
        },
        getChainNativeCurrencyName: function () {
          return p;
        },
        getChainSymbol: function () {
          return h;
        },
        rT: function () {
          return l;
        },
        vr: function () {
          return a;
        },
      });
      var r = n(80173),
        i = n(19114),
        o = n(94907);
      let s = new Map();
      function u(t) {
        let e = (0, r.gc)().rpc;
        if ("number" == typeof t)
          return { id: t, rpc: "https://".concat(t, ".").concat(e) };
        if ("rpcUrls" in t && !("rpc" in t))
          return (function (t) {
            var e;
            let n = (0, r.gc)().rpc;
            return {
              id: t.id,
              name: t.name,
              nativeCurrency: {
                name: t.nativeCurrency.name,
                symbol: t.nativeCurrency.symbol,
                decimals: t.nativeCurrency.decimals,
              },
              rpc:
                null !== (e = t.rpcUrls.default.http[0]) && void 0 !== e
                  ? e
                  : "https://".concat(t.id, ".").concat(n),
              blockExplorers: (null == t ? void 0 : t.blockExplorers)
                ? Object.values(null == t ? void 0 : t.blockExplorers).map(
                    (t) => ({ name: t.name, url: t.url, apiUrl: t.apiUrl })
                  )
                : [],
              testnet: !!t.testnet || void 0,
            };
          })(t);
        if ("rpc" in t && Array.isArray(t.rpc) && "slug" in t)
          return (function (t) {
            var e, n;
            let i = (0, r.gc)().rpc;
            return {
              id: t.chainId,
              name: t.name,
              rpc:
                null !== (n = t.rpc[0]) && void 0 !== n
                  ? n
                  : "https://".concat(t.chainId, ".").concat(i),
              blockExplorers:
                null == t
                  ? void 0
                  : null === (e = t.explorers) || void 0 === e
                  ? void 0
                  : e.map((t) => ({ name: t.name, url: t.url, apiUrl: t.url })),
              nativeCurrency: {
                name: t.nativeCurrency.name,
                symbol: t.nativeCurrency.symbol,
                decimals: t.nativeCurrency.decimals,
              },
              faucets: t.faucets ? [...t.faucets] : void 0,
              icon: t.icon,
              testnet: !!t.testnet || void 0,
            };
          })(t);
        let n = t.rpc;
        n || (n = "https://".concat(t.id, ".").concat(e));
        let i = { ...t, rpc: n };
        return s.set(t.id, i), i;
      }
      function a(t) {
        for (let e of t) s.set(e.id, e);
      }
      function c(t) {
        if (s.has(t)) return s.get(t);
        let e = (0, r.gc)().rpc;
        return { id: t, rpc: "https://".concat(t, ".").concat(e) };
      }
      function l(t) {
        return s.get(t);
      }
      function f(t) {
        let e = (0, r.gc)().rpc;
        if ("number" == typeof t.chain)
          return "https://"
            .concat(t.chain, ".")
            .concat(e, "/")
            .concat(t.client.clientId);
        let { rpc: n } = t.chain;
        if ((0, i.Rm)(n)) {
          let n = new URL(t.chain.rpc.replace(r.vB, e));
          return (
            ("/" === n.pathname || n.pathname.startsWith("/$")) &&
              (n.pathname = "/".concat(t.client.clientId)),
            n.toString()
          );
        }
        return n;
      }
      async function h(t) {
        var e;
        return (
          null === (e = t.nativeCurrency) || void 0 === e ? void 0 : e.symbol
        )
          ? t.nativeCurrency.symbol
          : v(t)
              .then((t) => t.nativeCurrency.symbol)
              .catch(() => "ETH");
      }
      async function d(t) {
        var e;
        return (
          null === (e = t.nativeCurrency) || void 0 === e ? void 0 : e.decimals
        )
          ? t.nativeCurrency.decimals
          : v(t)
              .then((t) => t.nativeCurrency.decimals)
              .catch(() => 18);
      }
      async function p(t) {
        var e;
        return (
          null === (e = t.nativeCurrency) || void 0 === e ? void 0 : e.name
        )
          ? t.nativeCurrency.name
          : v(t)
              .then((t) => t.nativeCurrency.name)
              .catch(() => "ETH");
      }
      function v(t) {
        let e = t.id;
        return (0, o.D)(
          async () => {
            try {
              let r = await fetch(
                "https://api.thirdweb.com/v1/chains/".concat(e)
              );
              if (!r.ok) {
                var n;
                throw (
                  (null === (n = r.body) || void 0 === n || n.cancel(),
                  Error("Failed to fetch chain data for chainId ".concat(e)))
                );
              }
              let i = await r.json();
              if (i.error || !i.data)
                throw Error(
                  "Failed to fetch chain data for chainId ".concat(e)
                );
              let o = i.data;
              return b(t, o);
            } catch (e) {
              return b(t);
            }
          },
          { cacheKey: "chain:".concat(e), cacheTime: 3e5 }
        );
      }
      function y(t) {
        var e;
        return {
          id: t.chainId,
          name: t.name,
          rpc: t.rpc[0] || "",
          testnet: !0 === t.testnet || void 0,
          nativeCurrency: t.nativeCurrency,
          blockExplorers:
            null === (e = t.explorers) || void 0 === e
              ? void 0
              : e.map((t) => ({ name: t.name, url: t.url, apiUrl: t.url })),
          faucets: t.faucets ? [...t.faucets] : void 0,
          icon: t.icon,
        };
      }
      function b(t, e) {
        var n;
        let r = t.nativeCurrency
          ? { ...(null == e ? void 0 : e.nativeCurrency), ...t.nativeCurrency }
          : null == e
          ? void 0
          : e.nativeCurrency;
        return {
          ...e,
          name: t.name || (null == e ? void 0 : e.name) || "",
          chainId: t.id || (null == e ? void 0 : e.chainId) || -1,
          rpc: t.rpc ? [t.rpc] : (null == e ? void 0 : e.rpc) || [""],
          testnet: t.testnet || (null == e ? void 0 : e.testnet) || !1,
          nativeCurrency: {
            name: (null == r ? void 0 : r.name) || "",
            symbol: (null == r ? void 0 : r.symbol) || "",
            decimals: (null == r ? void 0 : r.decimals) || 18,
          },
          icon: t.icon || (null == e ? void 0 : e.icon),
          chain: (null == e ? void 0 : e.chain) || t.name || "",
          shortName: (null == e ? void 0 : e.shortName) || t.name || "",
          slug: (null == e ? void 0 : e.slug) || t.name || "",
          explorers:
            (null === (n = t.blockExplorers) || void 0 === n
              ? void 0
              : n.map((t) => ({
                  name: t.name,
                  url: t.url,
                  standard: "EIP3091",
                }))) || (null == e ? void 0 : e.explorers),
          stackType: (null == e ? void 0 : e.stackType) || "",
        };
      }
    },
    33643: function (t, e, n) {
      n.d(e, {
        P: function () {
          return l;
        },
      });
      var r = n(90200),
        i = n(76910),
        o = n(12943),
        s = n(4843),
        u = n(34981);
      let a = new r.k(4096);
      var c = n(555);
      function l(t) {
        let { clientId: e, secretKey: n, ...r } = t,
          l = e;
        if (n) {
          if ((0, c.w)(n)) {
            if (!e)
              throw Error(
                "clientId must be provided when using a JWT secretKey"
              );
          } else
            l = (function (t) {
              if (a.has(t)) return a.get(t);
              let e = (function (t, e) {
                let n = (0, o.JQ)(
                  (0, s.v)(t, { strict: !1 }) ? (0, u.GZ)(t) : t
                );
                return (0, u.dg)(n);
              })((0, i.qX)(t)).slice(2, 34);
              return a.set(t, e), e;
            })(n);
        }
        if (!l) throw Error("clientId or secretKey must be provided");
        return { ...r, clientId: l, secretKey: n };
      }
    },
    33210: function (t, e, n) {
      n.d(e, {
        u: function () {
          return i;
        },
      });
      var r = n(73650);
      function i(t) {
        if (!t.client)
          throw Error(
            "getContract validation error - invalid client: ".concat(t.client)
          );
        if (!(0, r.UJ)(t.address))
          throw Error(
            "getContract validation error - invalid address: ".concat(t.address)
          );
        if (!t.chain || !t.chain.id)
          throw Error(
            "getContract validation error - invalid chain: ".concat(t.chain)
          );
        return t;
      }
    },
    4882: function (t, e, n) {
      n.d(e, {
        E: function () {
          return r;
        },
      });
      let r = (0, n(55881).createContext)(() => {});
    },
    30535: function (t, e, n) {
      n.d(e, {
        a$: function () {
          return o;
        },
        ev: function () {
          return s;
        },
        zn: function () {
          return i;
        },
      });
      var r = n(55881);
      let i = (0, r.createContext)(void 0);
      function o() {
        let t = s("useConnectionManager");
        if (!t)
          throw Error(
            "useConnectionManager must be used within a <ThirdwebProvider> Provider"
          );
        return t;
      }
      function s(t) {
        let e = (0, r.useContext)(i);
        if (!e)
          throw Error("".concat(t, " must be used within <ThirdwebProvider>"));
        return e;
      }
    },
    25068: function (t, e, n) {
      n.d(e, {
        M: function () {
          return r;
        },
      });
      function r(t) {
        let e = new Set(),
          n = t,
          r = () => {
            for (let t of e) t();
          };
        return {
          getValue: () => n,
          setValue(t) {
            t !== n && ((n = t), r());
          },
          subscribe: (t) => (
            e.add(t),
            () => {
              e.delete(t);
            }
          ),
        };
      }
    },
    91552: function (t, e, n) {
      n.r(e),
        n.d(e, {
          getRpcClient: function () {
            return c;
          },
        });
      var r = n(29181),
        i = n(57800),
        o = n(19114);
      async function s(t, e, n) {
        var r, s, u, a, c, l, f, h, d, p, v, y;
        let b = await (0, o.NX)(e)(t, {
          headers: {
            ...(null === (u = e.config) || void 0 === u
              ? void 0
              : null === (s = u.rpc) || void 0 === s
              ? void 0
              : null === (r = s.fetch) || void 0 === r
              ? void 0
              : r.headers),
            "Content-Type": "application/json",
          },
          body: (0, i.P)(n.requests),
          method: "POST",
          requestTimeoutMs:
            null !== (v = n.requestTimeoutMs) && void 0 !== v
              ? v
              : null === (l = e.config) || void 0 === l
              ? void 0
              : null === (c = l.rpc) || void 0 === c
              ? void 0
              : null === (a = c.fetch) || void 0 === a
              ? void 0
              : a.requestTimeoutMs,
          keepalive:
            null === (d = e.config) || void 0 === d
              ? void 0
              : null === (h = d.rpc) || void 0 === h
              ? void 0
              : null === (f = h.fetch) || void 0 === f
              ? void 0
              : f.keepalive,
        });
        if (!b.ok)
          throw (
            (null === (y = b.body) || void 0 === y || y.cancel(),
            Error(
              "RPC request failed with status "
                .concat(b.status, " - ")
                .concat(b.statusText)
            ))
          );
        if (
          null === (p = b.headers.get("Content-Type")) || void 0 === p
            ? void 0
            : p.startsWith("application/json")
        )
          return await b.json();
        let g = await b.text();
        try {
          return JSON.parse(g);
        } catch (t) {
          throw (console.error("Error parsing response", t, g), t);
        }
      }
      async function u(t, e, n) {
        var r, s, u, a, c, l, f, h, d, p, v, y;
        let b = await (0, o.NX)(e)(t, {
          headers: {
            ...((null === (u = e.config) || void 0 === u
              ? void 0
              : null === (s = u.rpc) || void 0 === s
              ? void 0
              : null === (r = s.fetch) || void 0 === r
              ? void 0
              : r.headers) || {}),
            "Content-Type": "application/json",
          },
          body: (0, i.P)(n.request),
          method: "POST",
          requestTimeoutMs:
            null !== (v = n.requestTimeoutMs) && void 0 !== v
              ? v
              : null === (l = e.config) || void 0 === l
              ? void 0
              : null === (c = l.rpc) || void 0 === c
              ? void 0
              : null === (a = c.fetch) || void 0 === a
              ? void 0
              : a.requestTimeoutMs,
          keepalive:
            null === (d = e.config) || void 0 === d
              ? void 0
              : null === (h = d.rpc) || void 0 === h
              ? void 0
              : null === (f = h.fetch) || void 0 === f
              ? void 0
              : f.keepalive,
        });
        if (!b.ok)
          throw (
            (null === (y = b.body) || void 0 === y || y.cancel(),
            Error("RPC request failed with status ".concat(b.status)))
          );
        if (
          null === (p = b.headers.get("Content-Type")) || void 0 === p
            ? void 0
            : p.startsWith("application/json")
        )
          return await b.json();
        let g = await b.text();
        try {
          return JSON.parse(g);
        } catch (t) {
          throw (console.error("Error parsing response", t, g), t);
        }
      }
      let a = new WeakMap();
      function c(t) {
        let e = (function (t) {
            if (a.has(t)) return a.get(t);
            let e = new Map();
            return a.set(t, e), e;
          })(t.client),
          n = t.chain.rpc;
        if (e.has(n)) return e.get(n);
        let o = (() => {
          var e, n, o, a, c, l, f, h, d, p;
          let v = (0, r.GO)({ client: t.client, chain: t.chain }),
            y =
              null !==
                (h =
                  null !==
                    (f =
                      null === (e = t.config) || void 0 === e
                        ? void 0
                        : e.maxBatchSize) && void 0 !== f
                    ? f
                    : null === (o = t.client.config) || void 0 === o
                    ? void 0
                    : null === (n = o.rpc) || void 0 === n
                    ? void 0
                    : n.maxBatchSize) && void 0 !== h
                ? h
                : 100,
            b =
              null !==
                (p =
                  null !==
                    (d =
                      null === (a = t.config) || void 0 === a
                        ? void 0
                        : a.batchTimeoutMs) && void 0 !== d
                    ? d
                    : null === (l = t.client.config) || void 0 === l
                    ? void 0
                    : null === (c = l.rpc) || void 0 === c
                    ? void 0
                    : c.batchTimeoutMs) && void 0 !== p
                ? p
                : 0,
            g = new Map(),
            m = [],
            w = null;
          function x() {
            var e;
            w && (clearTimeout(w), (w = null));
            let n = Array(m.length),
              r = m
                .slice()
                .map(
                  (t, e) => (
                    (t.request.id = e),
                    (t.request.jsonrpc = "2.0"),
                    (n[e] = t.request),
                    t
                  )
                );
            (m = []),
              s(v, t.client, {
                requests: n,
                requestTimeoutMs:
                  null === (e = t.config) || void 0 === e
                    ? void 0
                    : e.requestTimeoutMs,
              })
                .then((t) => {
                  r.forEach((e, n) => {
                    let r = t[n];
                    r
                      ? r instanceof Error
                        ? e.reject(r)
                        : "error" in r
                        ? e.reject(r.error)
                        : "string" == typeof r
                        ? e.reject(Error(r))
                        : "eth_subscription" === r.method
                        ? e.reject("Subscriptions not supported yet")
                        : e.resolve(r.result)
                      : e.reject(Error("No response"));
                  });
                })
                .catch((t) => {
                  for (let e of r) e.reject(t);
                })
                .finally(() => {
                  g.clear();
                });
          }
          return 1 === y
            ? async (e) => {
                var n;
                (e.id = 1), (e.jsonrpc = "2.0");
                let r = await u(v, t.client, {
                  request: e,
                  requestTimeoutMs:
                    null === (n = t.config) || void 0 === n
                      ? void 0
                      : n.requestTimeoutMs,
                });
                if (!r) throw Error("No response");
                if ("error" in r) throw r.error;
                return r.result;
              }
            : async (t) => {
                let e, n;
                let r = "".concat(t.method, ":").concat((0, i.P)(t.params));
                if (g.has(r)) return g.get(r);
                let o = new Promise((t, r) => {
                  (e = t), (n = r);
                });
                return (
                  g.set(r, o),
                  m.push({ request: t, resolve: e, reject: n, requestKey: r }),
                  y > 1
                    ? (w || (w = setTimeout(x, b)), m.length >= y && x())
                    : x(),
                  o
                );
              };
        })();
        return e.set(n, o), o;
      }
    },
    89056: function (t, e, n) {
      n.d(e, {
        h: function () {
          return f;
        },
      });
      var r = n(97178);
      async function i(t, e) {
        let n = await t({
          method: "eth_getTransactionReceipt",
          params: [e.hash],
        });
        if (!n) throw Error("Transaction receipt not found.");
        return (0, r.fA)(n);
      }
      var o = n(91552),
        s = n(48926),
        u = n(34981);
      async function a(t) {
        let e = await t({ method: "eth_blockNumber" });
        return (0, u.y_)(e);
      }
      let c = new Map(),
        l = new Map();
      function f(t) {
        var e;
        let { transactionHash: n, chain: r, client: u } = t,
          f = r.id,
          h = "".concat(f, ":tx_").concat(n),
          d = null !== (e = t.maxBlocksWaitTime) && void 0 !== e ? e : 100;
        if (l.has(h)) return l.get(h);
        let p = new Promise((t, e) => {
          n ||
            e(
              Error(
                "Transaction has no transactionHash to wait for, did you execute it?"
              )
            );
          let l = (0, o.getRpcClient)({ client: u, chain: r }),
            f = -1,
            h = (function (t) {
              let {
                  client: e,
                  chain: n,
                  onNewBlockNumber: r,
                  overPollRatio: i,
                  latestBlockNumber: u,
                  onError: l,
                } = t,
                f = n.id,
                h = c.get(f);
              return (
                h ||
                  ((h = (function (t, e, n, r) {
                    let i,
                      u,
                      c = [],
                      l = [],
                      f = !1,
                      h = (0, o.getRpcClient)({ client: t, chain: e });
                    async function d() {
                      if (!f) return;
                      try {
                        let t = await a(h);
                        if (!i || t > i) {
                          let e = [];
                          if (i)
                            for (let n = i + 1n; n <= t; n++) e.push(BigInt(n));
                          else e = [t];
                          i = t;
                          let n = new Date().getTime();
                          if (u) {
                            let t = (n - u) / e.length;
                            l.push(t), (l = l.slice(-10));
                          }
                          for (let t of ((u = n), e)) for (let e of c) e(t);
                        }
                      } catch (t) {
                        r
                          ? r(t)
                          : console.error(
                              "[watchBlockNumber]: Failed to poll for latest block number: ".concat(
                                t
                              )
                            );
                      }
                      let t = (function (t) {
                        for (; t.length < 10; ) t.unshift(1e3);
                        return t.reduce((t, e) => t + e, 0) / t.length;
                      })(l);
                      await (0, s._)(
                        Math.max(500, Math.min(5e3, Math.max(500, t))) /
                          (null != n ? n : 2)
                      ),
                        d();
                    }
                    return function (t, e) {
                      return (
                        c.push(t),
                        f || ((i = e), (f = !0), d()),
                        function () {
                          0 === (c = c.filter((e) => e !== t)).length &&
                            ((i = void 0), (u = void 0), (f = !1));
                        }
                      );
                    };
                  })(e, n, i, l)),
                  c.set(f, h)),
                h(r, u)
              );
            })({
              client: u,
              chain: r,
              onNewBlockNumber: async () => {
                if (++f >= d) {
                  h(),
                    e(
                      Error("Transaction not found after ".concat(d, " blocks"))
                    );
                  return;
                }
                try {
                  let e = await i(l, { hash: n });
                  h(), t(e);
                } catch (t) {}
              },
            });
        }).finally(() => {
          l.delete(h);
        });
        return l.set(h, p), p;
      }
    },
    73650: function (t, e, n) {
      n.d(e, {
        Kn: function () {
          return l;
        },
        UJ: function () {
          return a;
        },
        Xn: function () {
          return f;
        },
        pm: function () {
          return h;
        },
        xs: function () {
          return c;
        },
      });
      var r = n(90200),
        i = n(76910),
        o = n(33147);
      let s = /^0x[a-fA-F0-9]{40}$/,
        u = new r.k(4096);
      function a(t) {
        if (u.has(t)) return u.get(t);
        let e = s.test(t) && (t.toLowerCase() === t || c(t) === t);
        return u.set(t, e), e;
      }
      function c(t) {
        let e = t.substring(2).toLowerCase(),
          n = (0, o.w)((0, i.qX)(e), "bytes"),
          r = e.split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && t[e] && (r[e] = r[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              t[e + 1] &&
              (r[e + 1] = r[e + 1].toUpperCase());
        return "0x".concat(r.join(""));
      }
      function l(t) {
        if (!a(t)) throw Error("Invalid address: ".concat(t));
        return c(t);
      }
      function f(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return h(l(t), e);
      }
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return "".concat(t.slice(0, e + 2), "...").concat(t.slice(-e));
      }
    },
    26533: function (t, e, n) {
      n.d(e, {
        T: function () {
          return r;
        },
      });
      async function r(t) {
        if (1337 === t.id || 31337 === t.id) return !1;
        if (
          324 === t.id ||
          300 === t.id ||
          302 === t.id ||
          11124 === t.id ||
          282 === t.id ||
          388 === t.id ||
          4654 === t.id ||
          333271 === t.id ||
          37111 === t.id ||
          978658 === t.id ||
          531050104 === t.id ||
          4457845 === t.id ||
          2741 === t.id ||
          240 === t.id ||
          61166 === t.id ||
          555271 === t.id
        )
          return !0;
        try {
          let { getChainMetadata: e } = await Promise.resolve().then(
              n.bind(n, 29181)
            ),
            r = await e(t);
          return "zksync_stack" === r.stackType;
        } catch (t) {
          return !1;
        }
      }
    },
    90200: function (t, e, n) {
      n.d(e, {
        k: function () {
          return r;
        },
      });
      class r extends Map {
        get(t) {
          let e = super.get(t);
          return (
            super.has(t) && void 0 !== e && (this.delete(t), super.set(t, e)), e
          );
        }
        set(t, e) {
          if ((super.set(t, e), this.maxSize && this.size > this.maxSize)) {
            let t = this.keys().next().value;
            t && this.delete(t);
          }
          return this;
        }
        constructor(t) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = t);
        }
      }
    },
    17555: function (t, e, n) {
      n.d(e, {
        f: function () {
          return o;
        },
        t: function () {
          return i;
        },
      });
      let r = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/],
      ];
      function i() {
        return "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
          ? "mobile"
          : "undefined" != typeof navigator
          ? "browser"
          : "node";
      }
      function o(t) {
        for (let e = 0, n = r.length; e < n; e++) {
          let [n, i] = r[e];
          if (i.exec(t)) return n;
        }
        return null;
      }
    },
    80173: function (t, e, n) {
      n.d(e, {
        TS: function () {
          return s;
        },
        gc: function () {
          return o;
        },
        vB: function () {
          return r;
        },
      });
      let r = "rpc.thirdweb.com",
        i = {
          rpc: r,
          inAppWallet: "embedded-wallet.thirdweb.com",
          social: "social.thirdweb.com",
          pay: "pay.thirdweb.com",
          storage: "storage.thirdweb.com",
          bundler: "bundler.thirdweb.com",
          analytics: "c.thirdweb.com",
        },
        o = () => i,
        s = (t) => {
          let e = i[t];
          return e.startsWith("localhost")
            ? "http://".concat(e)
            : "https://".concat(e);
        };
    },
    4843: function (t, e, n) {
      n.d(e, {
        v: function () {
          return i;
        },
      });
      var r = n(55286);
      function i(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.Gu(t, e);
      }
    },
    34981: function (t, e, n) {
      n.d(e, {
        $G: function () {
          return d;
        },
        C4: function () {
          return l;
        },
        GZ: function () {
          return c;
        },
        NC: function () {
          return p;
        },
        XA: function () {
          return a;
        },
        dg: function () {
          return f;
        },
        eC: function () {
          return h;
        },
        gc: function () {
          return i;
        },
        ly: function () {
          return u;
        },
        rR: function () {
          return o;
        },
        y_: function () {
          return s;
        },
      });
      var r = n(55286);
      function i(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { dir: n, size: i = 32 } = e;
        return null === i ? t : "right" === n ? r.eh(t, i) : r.Q_(t, i);
      }
      function o(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.BB(t, e);
      }
      function s(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.Gh(t, e);
      }
      function u(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.He(t, e);
      }
      function a(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.sw(t, e);
      }
      function c(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.O0(t, e);
      }
      function l(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.O3(t, e);
      }
      function f(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.xv(t, e);
      }
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.xS(t, e);
      }
      function d(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.mL(t, e);
      }
      function p(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (typeof t) {
          case "number":
          case "bigint":
            return h(t, e);
          case "string":
            return d(t, e);
          case "boolean":
            return l(t, e);
          default:
            return f(t, e);
        }
      }
    },
    76910: function (t, e, n) {
      n.d(e, {
        O0: function () {
          return o;
        },
        nr: function () {
          return s;
        },
        qX: function () {
          return u;
        },
      });
      var r = n(14023),
        i = n(4843);
      function o(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (typeof t) {
          case "number":
          case "bigint":
            return r.xS(t, e);
          case "boolean":
            return (function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return r.O3(t, e);
            })(t, e);
          default:
            if ((0, i.v)(t)) return s(t, e);
            return u(t, e);
        }
      }
      function s(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.H_(t, e);
      }
      function u(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.mL(t, e);
      }
    },
    19114: function (t, e, n) {
      let r;
      n.d(e, {
        NX: function () {
          return a;
        },
        Rm: function () {
          return f;
        },
      });
      var i = n(90200),
        o = n(17555),
        s = n(555),
        u = n(2989);
      function a(t, e) {
        return async function (n, i) {
          let u, a;
          let { requestTimeoutMs: c = 6e4, ...l } = i || {},
            h = l.headers ? new Headers(l.headers) : void 0;
          if (f(n)) {
            h || (h = new Headers());
            let i = t.secretKey && (0, s.w)(t.secretKey) ? t.secretKey : void 0,
              u = t.secretKey && !(0, s.w)(t.secretKey) ? t.secretKey : void 0,
              a = t.clientId;
            for (let [t, s] of (!i ||
            (function (t) {
              try {
                let { hostname: e } = new URL(t);
                return e.startsWith("pay.");
              } catch (t) {
                return !1;
              }
            })(n) ||
            (function (t) {
              try {
                let { hostname: e } = new URL(t);
                return (
                  e.startsWith("in-app-wallet.") ||
                  e.startsWith("embedded-wallet.")
                );
              } catch (t) {
                return !1;
              }
            })(n) ||
            (function (t) {
              try {
                let { hostname: e } = new URL(t);
                return (
                  e.endsWith(".bundler.thirdweb.com") ||
                  e.endsWith(".bundler.thirdweb-dev.com")
                );
              } catch (t) {
                return !1;
              }
            })(n)
              ? u
                ? h.set("x-secret-key", u)
                : a && h.set("x-client-id", a)
              : h.set("authorization", "Bearer ".concat(i)),
            e &&
              (h.set("x-ecosystem-id", e.id),
              e.partnerId && h.set("x-ecosystem-partner-id", e.partnerId)),
            (function () {
              let t;
              if (r) return r;
              let e = null;
              return (
                "undefined" != typeof navigator &&
                  (e = (0, o.f)(navigator.userAgent)),
                "undefined" != typeof globalThis &&
                  "Application" in globalThis &&
                  (t = globalThis.Application.applicationId),
                (r = Object.entries({
                  "x-sdk-platform": (0, o.t)(),
                  "x-sdk-version": "5.86.1",
                  "x-sdk-os": e
                    ? (function (t) {
                        let e = t.toLowerCase();
                        if (e.startsWith("win")) return "win";
                        switch (t) {
                          case "Mac OS":
                            return "mac";
                          case "iOS":
                            return "ios";
                          case "Android OS":
                            return "android";
                          default:
                            return e.replace(/\s/gi, "_");
                        }
                      })(e)
                    : "unknown",
                  "x-sdk-name": "unified-sdk",
                  ...(t ? { "x-bundle-id": t } : {}),
                }))
              );
            })()))
              h.set(t, s);
          }
          return (
            c &&
              ((u = new AbortController()),
              (a = setTimeout(() => {
                null == u || u.abort("timeout");
              }, c))),
            fetch(n, {
              ...l,
              headers: h,
              signal: null == u ? void 0 : u.signal,
            }).finally(() => {
              a && clearTimeout(a);
            })
          );
        };
      }
      let c = [
          ".thirdweb.com",
          ".ipfscdn.io",
          ".thirdweb.dev",
          ".thirdweb-dev.com",
        ],
        l = new i.k(4096);
      function f(t) {
        if (l.has(t)) return l.get(t);
        try {
          let { hostname: e } = new URL(t);
          try {
            if (u.T && "localhost" === e) return l.set(t, !0), !0;
          } catch (t) {}
          let n = c.some((t) => e.endsWith(t));
          return l.set(t, n), n;
        } catch (e) {
          return l.set(t, !1), !1;
        }
      }
    },
    33147: function (t, e, n) {
      n.d(e, {
        w: function () {
          return s;
        },
      });
      var r = n(90545),
        i = n(4843),
        o = n(34981);
      function s(t, e) {
        let n = (0, r.fr)((0, i.v)(t, { strict: !1 }) ? (0, o.GZ)(t) : t);
        return "bytes" === e ? n : (0, o.dg)(n);
      }
    },
    57800: function (t, e, n) {
      n.d(e, {
        P: function () {
          return r;
        },
      });
      function r(t, e, n) {
        return JSON.stringify(
          t,
          (t, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof e ? e(t, r) : r;
          },
          n
        );
      }
    },
    555: function (t, e, n) {
      n.d(e, {
        w: function () {
          return r;
        },
      });
      function r(t) {
        return 3 === t.split(".").length;
      }
    },
    2989: function (t, e, n) {
      n.d(e, {
        T: function () {
          return r;
        },
      });
      let r = !1;
    },
    94907: function (t, e, n) {
      n.d(e, {
        D: function () {
          return o;
        },
      });
      let r = new Map(),
        i = new Map();
      async function o(t, e) {
        let { cacheKey: n, cacheTime: o = Number.POSITIVE_INFINITY } = e,
          s = (function (t) {
            let e = (t, e) => ({
                clear: () => e.delete(t),
                get: () => e.get(t),
                set: (n) => e.set(t, n),
              }),
              n = e(t, r),
              o = e(t, i);
            return {
              clear: () => {
                n.clear(), o.clear();
              },
              promise: n,
              response: o,
            };
          })(n),
          u = s.response.get();
        if (u && o > 0 && new Date().getTime() - u.created.getTime() < o)
          return u.data;
        let a = s.promise.get();
        a || ((a = t()), s.promise.set(a));
        try {
          let t = await a;
          return s.response.set({ created: new Date(), data: t }), t;
        } finally {
          s.promise.clear();
        }
      }
    },
    48926: function (t, e, n) {
      n.d(e, {
        _: function () {
          return r;
        },
      });
      function r(t) {
        return new Promise((e) => setTimeout(e, t));
      }
    },
    51495: function (t, e, n) {
      n.d(e, {
        J: function () {
          return r;
        },
      });
      function r(t) {
        return "string" == typeof t
          ? t.startsWith("ecosystem.")
          : t.id.startsWith("ecosystem.");
      }
    },
    68737: function (t, e, n) {
      n.d(e, {
        h: function () {
          return r;
        },
      });
      function r() {
        return (function () {
          let t = new Map();
          return {
            subscribe(e, n) {
              if (t.has(e)) {
                var r;
                null === (r = t.get(e)) || void 0 === r || r.add(n);
              } else t.set(e, new Set([n]));
              return () => {
                let r = t.get(e);
                r && r.delete(n);
              };
            },
            emit(e, n) {
              let r = t.get(e);
              if (r) for (let t of r) t(n);
            },
          };
        })();
      }
    },
    52301: function (t, e, n) {
      n.d(e, {
        G: function () {
          return o;
        },
      });
      let r = "2.21.55",
        i = {
          getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: n }) =>
            e ? `${t ?? "https://viem.sh"}${e}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${r}`,
        };
      class o extends Error {
        constructor(t, e = {}) {
          let n =
              e.cause instanceof o
                ? e.cause.details
                : e.cause?.message
                ? e.cause.message
                : e.details,
            s = (e.cause instanceof o && e.cause.docsPath) || e.docsPath,
            u = i.getDocsUrl?.({ ...e, docsPath: s });
          super(
            [
              t || "An error occurred.",
              "",
              ...(e.metaMessages ? [...e.metaMessages, ""] : []),
              ...(u ? [`Docs: ${u}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            e.cause ? { cause: e.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = n),
            (this.docsPath = s),
            (this.metaMessages = e.metaMessages),
            (this.name = e.name ?? this.name),
            (this.shortMessage = t),
            (this.version = r);
        }
        walk(t) {
          return (function t(e, n) {
            return n?.(e)
              ? e
              : e && "object" == typeof e && "cause" in e && void 0 !== e.cause
              ? t(e.cause, n)
              : n
              ? null
              : e;
          })(this, t);
        }
      }
    },
    10676: function (t, e, n) {
      n.d(e, {
        Cd: function () {
          return s;
        },
        J5: function () {
          return i;
        },
        M6: function () {
          return u;
        },
        yr: function () {
          return o;
        },
      });
      var r = n(52301);
      class i extends r.G {
        constructor({ max: t, min: e, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${t ? `(${e} to ${t})` : `(above ${e})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends r.G {
        constructor(t) {
          super(
            `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class s extends r.G {
        constructor(t) {
          super(
            `Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      class u extends r.G {
        constructor({ givenSize: t, maxSize: e }) {
          super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    73462: function (t, e, n) {
      n.d(e, {
        v: function () {
          return r;
        },
      });
      function r(t, { strict: e = !0 } = {}) {
        return (
          !!t &&
          "string" == typeof t &&
          (e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x"))
        );
      }
    },
    61995: function (t, e, n) {
      n.d(e, {
        d: function () {
          return i;
        },
      });
      var r = n(73462);
      function i(t) {
        return (0, r.v)(t, { strict: !1 })
          ? Math.ceil((t.length - 2) / 2)
          : t.length;
      }
    },
    67728: function (t, e, n) {
      n.d(e, {
        f: function () {
          return r;
        },
      });
      function r(t, { dir: e = "left" } = {}) {
        let n = "string" == typeof t ? t.replace("0x", "") : t,
          r = 0;
        for (
          let t = 0;
          t < n.length - 1 &&
          "0" === n["left" === e ? t : n.length - t - 1].toString();
          t++
        )
          r++;
        return ((n = "left" === e ? n.slice(r) : n.slice(0, n.length - r)),
        "string" == typeof t)
          ? (1 === n.length && "right" === e && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
    },
    13545: function (t, e, n) {
      n.d(e, {
        XA: function () {
          return a;
        },
        Yf: function () {
          return s;
        },
        ly: function () {
          return c;
        },
        y_: function () {
          return u;
        },
      });
      var r = n(10676),
        i = n(61995),
        o = n(67728);
      function s(t, { size: e }) {
        if ((0, i.d)(t) > e)
          throw new r.M6({ givenSize: (0, i.d)(t), maxSize: e });
      }
      function u(t, e = {}) {
        let { signed: n } = e;
        e.size && s(t, { size: e.size });
        let r = BigInt(t);
        if (!n) return r;
        let i = (t.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function a(t, e = {}) {
        let n = t;
        if (
          (e.size && (s(n, { size: e.size }), (n = (0, o.f)(n))),
          "0x00" === (0, o.f)(n))
        )
          return !1;
        if ("0x01" === (0, o.f)(n)) return !0;
        throw new r.Cd(n);
      }
      function c(t, e = {}) {
        return Number(u(t, e));
      }
    },
    89212: function (t, e, n) {
      n.d(e, {
        U: function () {
          return r;
        },
      });
      function r(t, { args: e, eventName: n } = {}) {
        return {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          logIndex: t.logIndex ? Number(t.logIndex) : null,
          transactionHash: t.transactionHash ? t.transactionHash : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          ...(n ? { args: e, eventName: n } : {}),
        };
      }
    },
    15470: function (t, e, n) {
      n.d(e, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return i;
        },
      });
      var r = n(13545);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function o(t) {
        let e = {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          chainId: t.chainId ? (0, r.ly)(t.chainId) : void 0,
          gas: t.gas ? BigInt(t.gas) : void 0,
          gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
          maxFeePerBlobGas: t.maxFeePerBlobGas
            ? BigInt(t.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: t.maxPriorityFeePerGas
            ? BigInt(t.maxPriorityFeePerGas)
            : void 0,
          nonce: t.nonce ? (0, r.ly)(t.nonce) : void 0,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? Number(t.transactionIndex)
            : null,
          type: t.type ? i[t.type] : void 0,
          typeHex: t.type ? t.type : void 0,
          value: t.value ? BigInt(t.value) : void 0,
          v: t.v ? BigInt(t.v) : void 0,
        };
        return (
          t.authorizationList &&
            (e.authorizationList = t.authorizationList.map((t) => ({
              contractAddress: t.address,
              chainId: Number(t.chainId),
              nonce: Number(t.nonce),
              r: t.r,
              s: t.s,
              yParity: Number(t.yParity),
            }))),
          (e.yParity = (() => {
            if (t.yParity) return Number(t.yParity);
            if ("bigint" == typeof e.v) {
              if (0n === e.v || 27n === e.v) return 0;
              if (1n === e.v || 28n === e.v) return 1;
              if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === e.type &&
            (delete e.accessList,
            delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas,
            delete e.yParity),
          "eip2930" === e.type &&
            (delete e.maxFeePerBlobGas,
            delete e.maxFeePerGas,
            delete e.maxPriorityFeePerGas),
          "eip1559" === e.type && delete e.maxFeePerBlobGas,
          e
        );
      }
    },
    97178: function (t, e, n) {
      n.d(e, {
        fA: function () {
          return u;
        },
      });
      var r = n(13545),
        i = n(89212),
        o = n(15470);
      let s = { "0x0": "reverted", "0x1": "success" };
      function u(t) {
        let e = {
          ...t,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          contractAddress: t.contractAddress ? t.contractAddress : null,
          cumulativeGasUsed: t.cumulativeGasUsed
            ? BigInt(t.cumulativeGasUsed)
            : null,
          effectiveGasPrice: t.effectiveGasPrice
            ? BigInt(t.effectiveGasPrice)
            : null,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
          logs: t.logs ? t.logs.map((t) => (0, i.U)(t)) : null,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex
            ? (0, r.ly)(t.transactionIndex)
            : null,
          status: t.status ? s[t.status] : null,
          type: t.type ? o.c8[t.type] || t.type : null,
        };
        return (
          t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)),
          t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)),
          e
        );
      }
    },
  },
]);
