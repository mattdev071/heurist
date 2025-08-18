(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15741],
  {
    24165: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function i(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              i = {};
            for (var o in t) {
              var a = t[o],
                s = [...r, o];
              "string" == typeof a || "number" == typeof a || null == a
                ? (i[o] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (i[o] = e(a, n, s));
            }
            return i;
          })(t, (t, i) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, i)
                )
              ] = String(t));
          });
        else
          for (var i in e) {
            var o = e[i];
            null != o && (n[r(i)] = o);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, {
        L: function () {
          return i;
        },
      });
    },
    96603: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, {
        $: function () {
          return s;
        },
      });
      var o = (e) =>
          function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            var o = Object.assign({}, ...n.map((e) => e.styles)),
              a = Object.keys(o),
              s = a.filter((e) => "mappings" in o[e]);
            return Object.assign(
              (t) => {
                var n = [],
                  r = {},
                  a = i({}, t),
                  c = !1;
                for (var u of s) {
                  var l = t[u];
                  if (null != l)
                    for (var d of ((c = !0), o[u].mappings))
                      (r[d] = l), null == a[d] && delete a[d];
                }
                var f = c ? i(i({}, r), a) : t;
                for (var h in f)
                  if (
                    (function () {
                      var e = f[h],
                        t = o[h];
                      try {
                        if (t.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          n.push(t.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (null != i) {
                              var a = t.responsiveArray[r];
                              n.push(t.values[i].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && n.push(t.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return e(n.join(" "));
              },
              { properties: new Set(a) }
            );
          },
        a = (e) => e,
        s = function () {
          return o(a)(...arguments);
        };
    },
    77778: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return o;
        },
        M: function () {
          return i;
        },
      });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = i(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var i = Array.isArray(e) ? n(e) : e,
              o = {};
            for (var a in i) null != i[a] && (o[a] = r(i[a], a));
            return o;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    40274: function (e) {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var i,
            o,
            a,
            s,
            c,
            u,
            l,
            d = {},
            f = {};
          f[n] = 0;
          var h = t.PriorityQueue.make();
          for (h.push(n, 0); !h.empty(); )
            for (a in ((o = (i = h.pop()).value),
            (s = i.cost),
            (c = e[o] || {})))
              c.hasOwnProperty(a) &&
                ((u = s + c[a]),
                (l = f[a]),
                (void 0 === f[a] || l > u) &&
                  ((f[a] = u), h.push(a, u), (d[a] = o)));
          if (void 0 !== r && void 0 === f[r])
            throw Error(
              ["Could not find a path from ", n, " to ", r, "."].join("")
            );
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
          return n.reverse(), n;
        },
        find_path: function (e, n, r) {
          var i = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(i, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              i = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
            return (i.queue = []), (i.sorter = e.sorter || r.default_sorter), i;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    60646: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new i(r, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events))
            t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            u,
            l = this._events[s],
            d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, r), !0;
              case 4:
                return l.fn.call(l.context, t, r, i), !0;
              case 5:
                return l.fn.call(l.context, t, r, i, o), !0;
              case 6:
                return l.fn.call(l.context, t, r, i, o, a), !0;
            }
            for (u = 1, c = Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var f,
              h = l.length;
            for (u = 0; u < h; u++)
              switch (
                (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, r);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, r, i);
                  break;
                default:
                  if (!c)
                    for (f = 1, c = Array(d - 1); f < d; f++)
                      c[f - 1] = arguments[f];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (r && s.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, u = [], l = s.length; c < l; c++)
              (s[c].fn !== t ||
                (i && !s[c].once) ||
                (r && s[c].context !== r)) &&
                u.push(s[c]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    31346: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var r,
        i = function () {
          return r || n.nc;
        };
    },
    12622: function (e, t, n) {
      let r = n(35039),
        i = n(73359),
        o = n(97253),
        a = n(97902);
      function s(e, t, n, o, a) {
        let s = [].slice.call(arguments, 1),
          c = s.length,
          u = "function" == typeof s[c - 1];
        if (!u && !r()) throw Error("Callback required as last argument");
        if (u) {
          if (c < 2) throw Error("Too few arguments provided");
          2 === c
            ? ((a = n), (n = t), (t = o = void 0))
            : 3 === c &&
              (t.getContext && void 0 === a
                ? ((a = o), (o = void 0))
                : ((a = o), (o = n), (n = t), (t = void 0)));
        } else {
          if (c < 1) throw Error("Too few arguments provided");
          return (
            1 === c
              ? ((n = t), (t = o = void 0))
              : 2 !== c || t.getContext || ((o = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                let a = i.create(n, o);
                r(e(a, t, o));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let r = i.create(n, o);
          a(null, e(r, t, o));
        } catch (e) {
          a(e);
        }
      }
      (t.create = i.create),
        (t.toCanvas = s.bind(null, o.render)),
        (t.toDataURL = s.bind(null, o.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    35039: function (e) {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    89132: function (e, t, n) {
      let r = n(36852).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          n = r(e),
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          o = [n - 7];
        for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            i = r.length;
          for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== i - 1) &&
                (e !== i - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        });
    },
    80360: function (e, t, n) {
      let r = n(81052),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * i.indexOf(this.data[t]);
            (n += i.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    20290: function (e) {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          return ((this.buffer[Math.floor(e / 8)] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++)
            this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    5084: function (e) {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, n, r) {
        let i = e * this.size + t;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    45501: function (e, t, n) {
      let r = n(81052);
      function i(e) {
        (this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (i.getBitsLength = function (e) {
        return 8 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = i);
    },
    47707: function (e, t, n) {
      let r = n(37461),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return i[(e - 1) * 4 + 0];
          case r.M:
            return i[(e - 1) * 4 + 1];
          case r.Q:
            return i[(e - 1) * 4 + 2];
          case r.H:
            return i[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return o[(e - 1) * 4 + 0];
            case r.M:
              return o[(e - 1) * 4 + 1];
            case r.Q:
              return o[(e - 1) * 4 + 2];
            case r.H:
              return o[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    37461: function (e, t) {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (e) {
            return n;
          }
        });
    },
    11683: function (e, t, n) {
      let r = n(36852).getSymbolSize;
      t.getPositions = function (e) {
        let t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    91953: function (e, t, n) {
      let r = n(36852),
        i = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          o = n << 10;
        for (; r.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (r.getBCHDigit(o) - i);
        return ((n << 10) | o) ^ 21522;
      };
    },
    98329: function (e, t) {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        });
    },
    81708: function (e, t, n) {
      let r = n(81052),
        i = n(36852);
      function o(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = i.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13);
          }
        }),
        (e.exports = o);
    },
    81613: function (e, t) {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            o = 0,
            a = null,
            s = null;
          for (let c = 0; c < t; c++) {
            (i = o = 0), (a = s = null);
            for (let u = 0; u < t; u++) {
              let t = e.get(c, u);
              t === a
                ? i++
                : (i >= 5 && (r += n.N1 + (i - 5)), (a = t), (i = 1)),
                (t = e.get(u, c)) === s
                  ? o++
                  : (o >= 5 && (r += n.N1 + (o - 5)), (s = t), (o = 1));
            }
            i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let i = 0; i < t - 1; i++) {
              let t =
                e.get(n, i) +
                e.get(n, i + 1) +
                e.get(n + 1, i) +
                e.get(n + 1, i + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            o = 0;
          for (let n = 0; n < t; n++) {
            i = o = 0;
            for (let a = 0; a < t; a++)
              (i = ((i << 1) & 2047) | e.get(n, a)),
                a >= 10 && (1488 === i || 93 === i) && r++,
                (o = ((o << 1) & 2047) | e.get(a, n)),
                a >= 10 && (1488 === o || 93 === o) && r++;
          }
          return r * n.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            r = e.data.length;
          for (let n = 0; n < r; n++) t += e.data[n];
          return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * n.N4;
        }),
        (t.applyMask = function (e, n) {
          let r = n.size;
          for (let i = 0; i < r; i++)
            for (let o = 0; o < r; o++)
              n.isReserved(o, i) ||
                n.xor(
                  o,
                  i,
                  (function (e, n, r) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, o, i)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), t.applyMask(a, e);
            let r =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), r < o && ((o = r), (i = a));
          }
          return i;
        });
    },
    81052: function (e, t, n) {
      let r = n(31533),
        i = n(16783);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw Error("Unknown mode: " + e);
              }
            })(e);
          } catch (e) {
            return n;
          }
        });
    },
    6598: function (e, t, n) {
      let r = n(81052);
      function i(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t, n;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (n = parseInt(this.data.substr(t, 3), 10)), e.put(n, 10);
          let r = this.data.length - t;
          r > 0 &&
            ((n = parseInt(this.data.substr(t), 10)), e.put(n, 3 * r + 1));
        }),
        (e.exports = i);
    },
    10594: function (e, t, n) {
      let r = n(98329);
      (t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let i = 0; i < e.length; i++)
          for (let o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
            let i = 0;
            for (; i < n.length && 0 === n[i]; ) i++;
            n = n.slice(i);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let i = 0; i < e; i++)
            n = t.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        });
    },
    73359: function (e, t, n) {
      let r = n(36852),
        i = n(37461),
        o = n(20290),
        a = n(5084),
        s = n(89132),
        c = n(11683),
        u = n(81613),
        l = n(47707),
        d = n(18983),
        f = n(32194),
        h = n(91953),
        p = n(81052),
        m = n(71236);
      function b(e, t, n) {
        let r, i;
        let o = e.size,
          a = h.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (i = ((a >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
              ? e.set(r + 1, 8, i, !0)
              : e.set(o - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, o - r - 1, i, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, i, !0)
              : e.set(8, 15 - r - 1, i, !0);
        e.set(o - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, h;
        if (void 0 === e || "" === e) throw Error("No input text");
        let g = i.M;
        return (
          void 0 !== t &&
            ((g = i.from(t.errorCorrectionLevel, i.M)),
            (n = f.from(t.version)),
            (h = u.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, i) {
            let h;
            if (Array.isArray(e)) h = m.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = m.rawSplit(e);
                r = f.getBestVersionForData(t, n);
              }
              h = m.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let g = f.getBestVersionForData(h, n);
            if (!g)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < g)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    g +
                    ".\n"
                );
            } else t = g;
            let y = (function (e, t, n) {
                let i = new o();
                n.forEach(function (t) {
                  i.put(t.mode.bit, 4),
                    i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)),
                    t.write(i);
                });
                let a =
                  (r.getSymbolTotalCodewords(e) -
                    l.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= a && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let s = (a - i.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let i, o;
                  let a = r.getSymbolTotalCodewords(t),
                    s = a - l.getTotalCodewordsCount(t, n),
                    c = l.getBlocksCount(t, n),
                    u = a % c,
                    f = c - u,
                    h = Math.floor(a / c),
                    p = Math.floor(s / c),
                    m = p + 1,
                    b = h - p,
                    g = new d(b),
                    y = 0,
                    w = Array(c),
                    v = Array(c),
                    A = 0,
                    C = new Uint8Array(e.buffer);
                  for (let e = 0; e < c; e++) {
                    let t = e < f ? p : m;
                    (w[e] = C.slice(y, y + t)),
                      (v[e] = g.encode(w[e])),
                      (y += t),
                      (A = Math.max(A, t));
                  }
                  let x = new Uint8Array(a),
                    E = 0;
                  for (i = 0; i < A; i++)
                    for (o = 0; o < c; o++)
                      i < w[o].length && (x[E++] = w[o][i]);
                  for (i = 0; i < b; i++)
                    for (o = 0; o < c; o++) x[E++] = v[o][i];
                  return x;
                })(i, e, t);
              })(t, n, h),
              w = new a(r.getSymbolSize(t));
            return (
              (function (e, t) {
                let n = e.size,
                  r = c.getPositions(t);
                for (let t = 0; t < r.length; t++) {
                  let i = r[t][0],
                    o = r[t][1];
                  for (let t = -1; t <= 7; t++)
                    if (!(i + t <= -1) && !(n <= i + t))
                      for (let r = -1; r <= 7; r++)
                        o + r <= -1 ||
                          n <= o + r ||
                          ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                          (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                          (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                            ? e.set(i + t, o + r, !0, !0)
                            : e.set(i + t, o + r, !1, !0));
                }
              })(w, t),
              (function (e) {
                let t = e.size;
                for (let n = 8; n < t - 8; n++) {
                  let t = n % 2 == 0;
                  e.set(n, 6, t, !0), e.set(6, n, t, !0);
                }
              })(w),
              (function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    i = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t ||
                      2 === t ||
                      -2 === n ||
                      2 === n ||
                      (0 === t && 0 === n)
                        ? e.set(r + t, i + n, !0, !0)
                        : e.set(r + t, i + n, !1, !0);
                }
              })(w, t),
              b(w, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n, r, i;
                  let o = e.size,
                    a = f.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (n = Math.floor(t / 3)),
                      (r = (t % 3) + o - 8 - 3),
                      (i = ((a >> t) & 1) == 1),
                      e.set(n, r, i, !0),
                      e.set(r, n, i, !0);
                })(w, t),
              (function (e, t) {
                let n = e.size,
                  r = -1,
                  i = n - 1,
                  o = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(i, s - n)) {
                        let r = !1;
                        a < t.length && (r = ((t[a] >>> o) & 1) == 1),
                          e.set(i, s - n, r),
                          -1 == --o && (a++, (o = 7));
                      }
                    if ((i += r) < 0 || n <= i) {
                      (i -= r), (r = -r);
                      break;
                    }
                  }
              })(w, y),
              isNaN(i) && (i = u.getBestMask(w, b.bind(null, w, n))),
              u.applyMask(i, w),
              b(w, n, i),
              {
                modules: w,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: i,
                segments: h,
              }
            );
          })(e, n, g, h)
        );
      };
    },
    18983: function (e, t, n) {
      let r = n(10594);
      function i(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(n, i), e;
          }
          return n;
        }),
        (e.exports = i);
    },
    16783: function (e, t) {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(i, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    71236: function (e, t, n) {
      let r = n(81052),
        i = n(6598),
        o = n(80360),
        a = n(45501),
        s = n(81708),
        c = n(16783),
        u = n(36852),
        l = n(40274);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function f(e, t, n) {
        let r;
        let i = [];
        for (; null !== (r = e.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return i;
      }
      function h(e) {
        let t, n;
        let i = f(c.NUMERIC, r.NUMERIC, e),
          o = f(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          u.isKanjiModeEnabled()
            ? ((t = f(c.BYTE, r.BYTE, e)), (n = f(c.KANJI, r.KANJI, e)))
            : ((t = f(c.BYTE_KANJI, r.BYTE, e)), (n = [])),
          i
            .concat(o, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function p(e, t) {
        switch (t) {
          case r.NUMERIC:
            return i.getBitsLength(e);
          case r.ALPHANUMERIC:
            return o.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function m(e, t) {
        let n;
        let c = r.getBestModeForData(e);
        if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(c)
          );
        switch ((n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(e);
          case r.ALPHANUMERIC:
            return new o(e);
          case r.KANJI:
            return new s(e);
          case r.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(m(t, null))
              : t.data && e.push(m(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let i = (function (e, t) {
              let n = {},
                i = { start: {} },
                o = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  c = [];
                for (let e = 0; e < s.length; e++) {
                  let u = s[e],
                    l = "" + a + e;
                  c.push(l), (n[l] = { node: u, lastCount: 0 }), (i[l] = {});
                  for (let e = 0; e < o.length; e++) {
                    let a = o[e];
                    n[a] && n[a].node.mode === u.mode
                      ? ((i[a][l] =
                          p(n[a].lastCount + u.length, u.mode) -
                          p(n[a].lastCount, u.mode)),
                        (n[a].lastCount += u.length))
                      : (n[a] && (n[a].lastCount = u.length),
                        (i[a][l] =
                          p(u.length, u.mode) +
                          4 +
                          r.getCharCountIndicator(u.mode, t)));
                  }
                }
                o = c;
              }
              for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
              return { map: i, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let i = e[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                  }
                }
                return t;
              })(h(e, u.isKanjiModeEnabled())),
              n
            ),
            o = l.find_path(i.map, "start", "end"),
            a = [];
          for (let e = 1; e < o.length - 1; e++) a.push(i.table[o[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                n && n.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(h(e, u.isKanjiModeEnabled()));
        });
    },
    36852: function (e, t) {
      let n;
      let r = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        });
    },
    31533: function (e, t) {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    32194: function (e, t, n) {
      let r = n(36852),
        i = n(47707),
        o = n(37461),
        a = n(81052),
        s = n(31533),
        c = r.getBCHDigit(7973);
      function u(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === n && (n = a.BYTE);
          let o =
            (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
          if (n === a.MIXED) return o;
          let c = o - u(n, e);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((c / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((c / 11) * 2);
            case a.KANJI:
              return Math.floor(c / 13);
            case a.BYTE:
            default:
              return Math.floor(c / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r;
          let i = o.from(n, o.M);
          if (Array.isArray(e)) {
            if (e.length > 1)
              return (function (e, n) {
                for (let r = 1; r <= 40; r++)
                  if (
                    (function (e, t) {
                      let n = 0;
                      return (
                        e.forEach(function (e) {
                          let r = u(e.mode, t);
                          n += r + e.getBitsLength();
                        }),
                        n
                      );
                    })(e, r) <= t.getCapacity(r, n, a.MIXED)
                  )
                    return r;
              })(e, i);
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let i = 1; i <= 40; i++)
              if (n <= t.getCapacity(i, r, e)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; r.getBCHDigit(t) - c >= 0; )
            t ^= 7973 << (r.getBCHDigit(t) - c);
          return (e << 12) | t;
        });
    },
    97253: function (e, t, n) {
      let r = n(79453);
      (t.render = function (e, t, n) {
        var i;
        let o = n,
          a = t;
        void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        let s = r.getImageWidth(e.modules.size, o),
          c = a.getContext("2d"),
          u = c.createImageData(s, s);
        return (
          r.qrToImageData(u.data, e, o),
          (i = a),
          c.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          c.putImageData(u, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let i = r;
          void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
            i || (i = {});
          let o = t.render(e, n, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    97902: function (e, t, n) {
      let r = n(79453);
      function i(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(e, t, n) {
        let r = e + t;
        return void 0 !== n && (r += " " + n), r;
      }
      t.render = function (e, t, n) {
        let a = r.getOptions(t),
          s = e.modules.size,
          c = e.modules.data,
          u = s + 2 * a.margin,
          l = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              u +
              "v" +
              u +
              'H0z"/>'
            : "",
          d =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                i = 0,
                a = !1,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let u = Math.floor(c % t),
                  l = Math.floor(c / t);
                u || a || (a = !0),
                  e[c]
                    ? (s++,
                      (c > 0 && u > 0 && e[c - 1]) ||
                        ((r += a ? o("M", u + n, 0.5 + l + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (u + 1 < t && e[c + 1]) || ((r += o("h", s)), (s = 0)))
                    : i++;
              }
              return r;
            })(c, s, a.margin) +
            '"/>',
          f =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + u) +
            " " +
            u +
            '" shape-rendering="crispEdges">' +
            l +
            d +
            "</svg>\n";
        return "function" == typeof n && n(null, f), f;
      };
    },
    79453: function (e, t) {
      function n(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: t,
          color: {
            dark: n(e.color.dark || "#000000ff"),
            light: n(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          let r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          let i = n.modules.size,
            o = n.modules.data,
            a = t.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * a),
            c = r.margin * a,
            u = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let l = (t * s + n) * 4,
                d = r.color.light;
              t >= c &&
                n >= c &&
                t < s - c &&
                n < s - c &&
                (d =
                  u[
                    o[Math.floor((t - c) / a) * i + Math.floor((n - c) / a)]
                      ? 1
                      : 0
                  ]),
                (e[l++] = d.r),
                (e[l++] = d.g),
                (e[l++] = d.b),
                (e[l] = d.a);
            }
        });
    },
    63413: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return H;
        },
      });
      var r,
        i,
        o,
        a,
        s = n(18794),
        c = n(55881),
        u = "right-scroll-bar-position",
        l = "width-before-scroll-bar";
      function d(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var f = "undefined" != typeof window ? c.useLayoutEffect : c.useEffect,
        h = new WeakMap(),
        p = (0, n(79943)._)(),
        m = function () {},
        b = c.forwardRef(function (e, t) {
          var n,
            r,
            i,
            o,
            a = c.useRef(null),
            u = c.useState({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: m,
            }),
            l = u[0],
            b = u[1],
            g = e.forwardProps,
            y = e.children,
            w = e.className,
            v = e.removeScrollBar,
            A = e.enabled,
            C = e.shards,
            x = e.sideCar,
            E = e.noIsolation,
            P = e.inert,
            I = e.allowPinchZoom,
            k = e.as,
            B = e.gapMode,
            O = (0, s.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            M =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return d(t, e);
                });
              }),
              ((i = (0, c.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (o = i.facade),
              f(
                function () {
                  var e = h.get(o);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      i = o.current;
                    t.forEach(function (e) {
                      r.has(e) || d(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || d(e, i);
                      });
                  }
                  h.set(o, n);
                },
                [n]
              ),
              o),
            R = (0, s.__assign)((0, s.__assign)({}, O), l);
          return c.createElement(
            c.Fragment,
            null,
            A &&
              c.createElement(x, {
                sideCar: p,
                removeScrollBar: v,
                shards: C,
                noIsolation: E,
                inert: P,
                setCallbacks: b,
                allowPinchZoom: !!I,
                lockRef: a,
                gapMode: B,
              }),
            g
              ? c.cloneElement(
                  c.Children.only(y),
                  (0, s.__assign)((0, s.__assign)({}, R), { ref: M })
                )
              : c.createElement(
                  void 0 === k ? "div" : k,
                  (0, s.__assign)({}, R, { className: w, ref: M }),
                  y
                )
          );
        });
      (b.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (b.classNames = { fullWidth: l, zeroRight: u });
      var g = n(54179),
        y = n(31346),
        w = { left: 0, top: 0, right: 0, gap: 0 },
        v = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        A = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [v(n), v(r), v(i)];
        },
        C = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return w;
          var t = A(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        x =
          ((r = 0),
          (i = null),
          (o = {
            add: function (e) {
              if (
                0 == r &&
                (i = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = (0, y.V)();
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var t, n;
                (t = i).styleSheet
                  ? (t.styleSheet.cssText = e)
                  : t.appendChild(document.createTextNode(e)),
                  (n = i),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(n);
              }
              r++;
            },
            remove: function () {
              --r ||
                !i ||
                (i.parentNode && i.parentNode.removeChild(i), (i = null));
            },
          }),
          (a = function (e, t) {
            c.useEffect(
              function () {
                return (
                  o.add(e),
                  function () {
                    o.remove();
                  }
                );
              },
              [e && t]
            );
          }),
          function (e) {
            return a(e.styles, e.dynamic), null;
          }),
        E = "data-scroll-locked",
        P = function (e, t, n, r) {
          var i = e.left,
            o = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(E, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(s, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(u, " {\n    right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(l, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(l, " .")
              .concat(l, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(E, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        I = function () {
          var e = parseInt(document.body.getAttribute(E) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        k = function () {
          c.useEffect(function () {
            return (
              document.body.setAttribute(E, (I() + 1).toString()),
              function () {
                var e = I() - 1;
                e <= 0
                  ? document.body.removeAttribute(E)
                  : document.body.setAttribute(E, e.toString());
              }
            );
          }, []);
        },
        B = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r;
          k();
          var o = c.useMemo(
            function () {
              return C(i);
            },
            [i]
          );
          return c.createElement(x, {
            styles: P(o, !t, i, n ? "" : "!important"),
          });
        },
        O = n(84944),
        M = !1;
      if ("undefined" != typeof window)
        try {
          var R = Object.defineProperty({}, "passive", {
            get: function () {
              return (M = !0), !0;
            },
          });
          window.addEventListener("test", R, R),
            window.removeEventListener("test", R, R);
        } catch (e) {
          M = !1;
        }
      var S = !!M && { passive: !1 },
        N = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        T = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              F(e, r))
            ) {
              var i = j(e, r);
              if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        F = function (e, t) {
          return "v" === e ? N(t, "overflowY") : N(t, "overflowX");
        },
        j = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        D = function (e, t, n, r, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            s = a * r,
            c = n.target,
            u = t.contains(c),
            l = !1,
            d = s > 0,
            f = 0,
            h = 0;
          do {
            var p = j(e, c),
              m = p[0],
              b = p[1] - p[2] - a * m;
            (m || b) && F(e, c) && ((f += b), (h += m)),
              c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
          } while (
            (!u && c !== document.body) ||
            (u && (t.contains(c) || t === c))
          );
          return (
            d && ((i && 1 > Math.abs(f)) || (!i && s > f))
              ? (l = !0)
              : !d && ((i && 1 > Math.abs(h)) || (!i && -s > h)) && (l = !0),
            l
          );
        },
        Q = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        U = function (e) {
          return [e.deltaX, e.deltaY];
        },
        G = function (e) {
          return e && "current" in e ? e.current : e;
        },
        L = 0,
        W = [],
        q = (0, g.L)(p, function (e) {
          var t = c.useRef([]),
            n = c.useRef([0, 0]),
            r = c.useRef(),
            i = c.useState(L++)[0],
            o = c.useState(O.Ws)[0],
            a = c.useRef(e);
          c.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            c.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, s.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(G),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = c.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !a.current.allowPinchZoom;
              var i,
                o = Q(e),
                s = n.current,
                c = "deltaX" in e ? e.deltaX : s[0] - o[0],
                u = "deltaY" in e ? e.deltaY : s[1] - o[1],
                l = e.target,
                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === l.type) return !1;
              var f = T(d, l);
              if (!f) return !0;
              if (
                (f ? (i = d) : ((i = "v" === d ? "h" : "v"), (f = T(d, l))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || u) &&
                  (r.current = i),
                !i)
              )
                return !0;
              var h = r.current || i;
              return D(h, t, e, "h" === h ? c : u, !0);
            }, []),
            l = c.useCallback(function (e) {
              if (W.length && W[W.length - 1] === o) {
                var n = "deltaY" in e ? U(e) : Q(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var i = (a.current.shards || [])
                    .map(G)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (i.length > 0 ? u(e, i[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = c.useCallback(function (e, n, r, i) {
              var o = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(o),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== o;
                  });
                }, 1);
            }, []),
            f = c.useCallback(function (e) {
              (n.current = Q(e)), (r.current = void 0);
            }, []),
            h = c.useCallback(function (t) {
              d(t.type, U(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = c.useCallback(function (t) {
              d(t.type, Q(t), t.target, u(t, e.lockRef.current));
            }, []);
          c.useEffect(function () {
            return (
              W.push(o),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", l, S),
              document.addEventListener("touchmove", l, S),
              document.addEventListener("touchstart", f, S),
              function () {
                (W = W.filter(function (e) {
                  return e !== o;
                })),
                  document.removeEventListener("wheel", l, S),
                  document.removeEventListener("touchmove", l, S),
                  document.removeEventListener("touchstart", f, S);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            b = e.inert;
          return c.createElement(
            c.Fragment,
            null,
            b
              ? c.createElement(o, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            m ? c.createElement(B, { gapMode: e.gapMode }) : null
          );
        }),
        z = c.forwardRef(function (e, t) {
          return c.createElement(
            b,
            (0, s.__assign)({}, e, { ref: t, sideCar: q })
          );
        });
      z.classNames = b.classNames;
      var H = z;
    },
    84944: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ws: function () {
          return s;
        },
      });
      var r = n(55881),
        i = n(31346),
        o = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = (0, i.V)();
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var r, o;
                (r = t).styleSheet
                  ? (r.styleSheet.cssText = n)
                  : r.appendChild(document.createTextNode(n)),
                  (o = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(o);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        a = function () {
          var e = o();
          return function (t, n) {
            r.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        s = function () {
          var e = a();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    98628: function (e, t, n) {
      var r;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          u = "string",
          l = "major",
          d = "model",
          f = "name",
          h = "type",
          p = "vendor",
          m = "version",
          b = "architecture",
          g = "console",
          y = "mobile",
          w = "tablet",
          v = "smarttv",
          A = "wearable",
          C = "embedded",
          x = "Amazon",
          E = "Apple",
          P = "ASUS",
          I = "BlackBerry",
          k = "Browser",
          B = "Chrome",
          O = "Firefox",
          M = "Google",
          R = "Huawei",
          S = "Microsoft",
          N = "Motorola",
          T = "Opera",
          F = "Samsung",
          j = "Sharp",
          D = "Sony",
          Q = "Xiaomi",
          U = "Zebra",
          G = "Facebook",
          L = "Chromium OS",
          W = "Mac OS",
          q = " Browser",
          z = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 == 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          H = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          K = function (e, t) {
            return typeof e === u && -1 !== V(t).indexOf(V(e));
          },
          V = function (e) {
            return e.toLowerCase();
          },
          J = function (e, t) {
            if (typeof e === u)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          Z = function (e, t) {
            for (var n, r, i, s, u, l, d = 0; d < t.length && !u; ) {
              var f = t[d],
                h = t[d + 1];
              for (n = r = 0; n < f.length && !u && f[n]; )
                if ((u = f[n++].exec(e)))
                  for (i = 0; i < h.length; i++)
                    (l = u[++r]),
                      typeof (s = h[i]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = l ? l.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = l
                                ? s[1].call(this, l, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = l
                              ? s[3].call(this, l.replace(s[1], s[2]))
                              : void 0)
                        : (this[s] = l || o);
              d += 2;
            }
          },
          Y = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (K(t[n][r], e)) return "?" === n ? o : n;
              } else if (K(t[n], e)) return "?" === n ? o : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          _ = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          X = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [f, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [f, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [f, T + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [m, [f, T + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [f, T]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [m, [f, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [f, m],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [m, [f, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [m, [f, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [f, "UC" + k]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [m, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [f, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [m, [f, "Smart Lenovo " + k]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 Secure " + k], m],
              [/\bfocus\/([\w\.]+)/i],
              [m, [f, O + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [f, T + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [f, T + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [f, "MIUI " + k]],
              [/fxios\/([-\w\.]+)/i],
              [m, [f, O]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[f, "360" + q]],
              [/\b(qq)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1Browser"], m],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[f, /(.+)/, "$1" + q], m],
              [/samsungbrowser\/([\w\.]+)/i],
              [m, [f, F + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[f, /_/g, " "], m],
              [/metasr[\/ ]?([\d\.]+)/i],
              [m, [f, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[f, "Sogou Mobile"], m],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [f, m],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[f, G], m],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [f, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [f, B + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[f, B + " WebView"], m],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [f, "Android " + k]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                f,
                [
                  m,
                  Y,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[f, "Netscape"], m],
              [/(wolvic)\/([\w\.]+)/i],
              [f, m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [f, O + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [f, [m, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [m, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[b, "amd64"]],
              [/(ia32(?=;))/i],
              [[b, V]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[b, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[b, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[b, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[b, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[b, /ower/, "", V]],
              [/(sun4\w)[;\)]/i],
              [[b, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[b, V]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [p, F], [h, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [p, F], [h, y]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, E], [h, y]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [p, E], [h, w]],
              [/(macintosh);/i],
              [d, [p, E]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, j], [h, y]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [p, R], [h, w]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [p, R], [h, y]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, Q],
                [h, y],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, Q],
                [h, w],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [p, "OPPO"], [h, y]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [p, "OPPO"], [h, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"], [h, y]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"], [h, y]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [p, N], [h, y]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, N], [h, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, "LG"], [h, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [p, "LG"], [h, y]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [p, "Lenovo"], [h, w]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [p, "Nokia"],
                [h, y],
              ],
              [/(pixel c)\b/i],
              [d, [p, M], [h, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, M], [h, y]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [p, D], [h, y]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, D],
                [h, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [p, "OnePlus"], [h, y]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [p, x], [h, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, x],
                [h, y],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [h, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, I], [h, y]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [p, P], [h, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, P], [h, y]],
              [/(nexus 9)/i],
              [d, [p, "HTC"], [h, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [d, /_/g, " "], [h, y]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [p, "TCL"], [h, w]],
              [/(itel) ((\w+))/i],
              [
                [p, V],
                d,
                [h, Y, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"], [h, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"], [h, y]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"], [h, y]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [p, "Nothing"], [h, y]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, d, [h, y]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, d, [h, w]],
              [/(surface duo)/i],
              [d, [p, S], [h, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"], [h, y]],
              [/(u304aa)/i],
              [d, [p, "AT&T"], [h, y]],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"], [h, y]],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"], [h, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"], [h, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"], [h, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"], [h, w]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"], [h, w]],
              [/\b(k88) b/i],
              [d, [p, "ZTE"], [h, w]],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"], [h, y]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"], [h, y]],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"], [h, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"], [h, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], d, [h, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"], [h, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"], [h, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], d, [h, y]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], d, [h, y]],
              [/\b(ph-1) /i],
              [d, [p, "Essential"], [h, y]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"], [h, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"], [h, w]],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"], [h, w]],
              [/(shield[\w ]+) b/i],
              [d, [p, "Nvidia"], [h, w]],
              [/(sprint) (\w+)/i],
              [p, d, [h, y]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, S],
                [h, y],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, U], [h, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, U], [h, y]],
              [/smart-tv.+(samsung)/i],
              [p, [h, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, F],
                [h, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [h, v],
              ],
              [/(apple) ?tv/i],
              [p, [d, E + " TV"], [h, v]],
              [/crkey/i],
              [
                [d, B + "cast"],
                [p, M],
                [h, v],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, x], [h, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, j], [h, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, D], [h, v]],
              [/(mitv-\w{5}) bui/i],
              [d, [p, Q], [h, v]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [h, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, J],
                [d, J],
                [h, v],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, v]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [h, g]],
              [/droid.+; (shield) bui/i],
              [d, [p, "Nvidia"], [h, g]],
              [/(playstation [345portablevi]+)/i],
              [d, [p, D], [h, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, S], [h, g]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [p, F], [h, A]],
              [/((pebble))app/i],
              [p, d, [h, A]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, E], [h, A]],
              [/droid.+; (glass) \d/i],
              [d, [p, M], [h, A]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, U], [h, A]],
              [/(quest( \d| pro)?)/i],
              [d, [p, G], [h, A]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [h, C]],
              [/(aeobc)\b/i],
              [d, [p, x], [h, C]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [h, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [h, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[h, y]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [f, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [f, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [f, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, f],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, m],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [f, [m, Y, _]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [m, Y, _],
                [f, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [m, /_/g, "."],
                [f, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [f, W],
                [m, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, f],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [f, m],
              [/\(bb(10);/i],
              [m, [f, I]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [f, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [m, [f, O + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [f, B + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[f, L], m],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [f, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [[f, "Solaris"], m],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [f, m],
            ],
          },
          $ = function (e, t) {
            if ((typeof e === c && ((t = e), (e = o)), !(this instanceof $)))
              return new $(e, t).getResult();
            var n = typeof i !== s && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              g = n && n.userAgentData ? n.userAgentData : o,
              v = t ? z(X, t) : X,
              A = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[f] = o),
                  (t[m] = o),
                  Z.call(t, r, v.browser),
                  (t[l] =
                    typeof (e = t[m]) === u
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  A &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[f] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[b] = o), Z.call(e, r, v.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = o),
                  (e[d] = o),
                  (e[h] = o),
                  Z.call(e, r, v.device),
                  A && !e[h] && g && g.mobile && (e[h] = y),
                  A &&
                    "Macintosh" == e[d] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[h] = w)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[f] = o), (e[m] = o), Z.call(e, r, v.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[f] = o),
                  (e[m] = o),
                  Z.call(e, r, v.os),
                  A &&
                    !e[f] &&
                    g &&
                    g.platform &&
                    "Unknown" != g.platform &&
                    (e[f] = g.platform
                      .replace(/chrome os/i, L)
                      .replace(/macos/i, W)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === u && e.length > 500 ? J(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        ($.VERSION = "1.0.39"),
          ($.BROWSER = H([f, m, l])),
          ($.CPU = H([b])),
          ($.DEVICE = H([d, p, h, g, y, v, w, A, C])),
          ($.ENGINE = $.OS = H([f, m])),
          typeof t !== s
            ? (e.exports && (t = e.exports = $), (t.UAParser = $))
            : n.amdO
            ? o !==
                (r = function () {
                  return $;
                }.call(t, n, t, e)) && (e.exports = r)
            : typeof i !== s && (i.UAParser = $);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var et = new $();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var n in t) ee.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    54179: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(18794),
        i = n(55881),
        o = function (e) {
          var t = e.sideCar,
            n = (0, r.__rest)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var o = t.read();
          if (!o) throw Error("Sidecar medium not found");
          return i.createElement(o, (0, r.__assign)({}, n));
        };
      function a(e, t) {
        return e.useMedium(t), o;
      }
      o.isSideCarExport = !0;
    },
    79943: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var r = n(18794);
      function i(e) {
        return e;
      }
      function o(e) {
        void 0 === e && (e = {});
        var t,
          n,
          o,
          a =
            (void 0 === t && (t = i),
            (n = []),
            (o = !1),
            {
              read: function () {
                if (o)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, o);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (o = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                o = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var i = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  a = function () {
                    return Promise.resolve().then(i);
                  };
                a(),
                  (n = {
                    push: function (e) {
                      t.push(e), a();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (a.options = (0, r.__assign)({ async: !0, ssr: !1 }, e)), a;
      }
    },
    51878: function (e, t, n) {
      "use strict";
      var r = n(55881),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), u(i) && l({ inst: i });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      u(i) && l({ inst: i }),
                      e(function () {
                        u(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    76760: function (e, t, n) {
      "use strict";
      var r = n(55881),
        i = n(80876),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        s = r.useRef,
        c = r.useEffect,
        u = r.useMemo,
        l = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = s(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = a(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), o(a, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n) ? t : ((a = e), (s = n));
              }
              var a,
                s,
                c = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    80876: function (e, t, n) {
      "use strict";
      e.exports = n(51878);
    },
    77759: function (e, t, n) {
      "use strict";
      e.exports = n(76760);
    },
    30259: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function i(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      n.d(t, {
        Gg: function () {
          return o;
        },
        J8: function () {
          return a;
        },
        Rx: function () {
          return r;
        },
        aI: function () {
          return i;
        },
      });
    },
    95181: function (e, t, n) {
      "use strict";
      n.d(t, {
        GL: function () {
          return o;
        },
        Jq: function () {
          return i;
        },
        O0: function () {
          return s;
        },
        hE: function () {
          return u;
        },
        kb: function () {
          return c;
        },
        np: function () {
          return a;
        },
      });
      let r = (e) => e instanceof Uint8Array,
        i = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        o = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        a = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function s(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !r(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      class c {
        clone() {
          return this._cloneInto();
        }
      }
      function u(e) {
        let t = (t) => e().update(s(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
    },
    59093: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return a;
        },
      });
      var r = n(95180),
        i = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        o = i.blue,
        a = function () {
          let {
            accentColor: e = o.accentColor,
            accentColorForeground: t = o.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.w)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      a.accentColors = i;
    },
    95180: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        i = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        o = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: n = "rounded",
            overlayBlur: r = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[r].modalOverlay },
            fonts: { body: i[n] },
            radii: {
              actionButton: o[t].actionButton,
              connectButton: o[t].connectButton,
              menuButton: o[t].connectButton,
              modal: o[t].modal,
              modalMobile: o[t].modalMobile,
            },
          };
        };
    },
    82128: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return r;
        },
      });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    }\n  }\n}\n';
    },
    75005: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var r = n(34378),
        i = n(37886),
        o = new (class extends r.l {
          #e;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if (!i.sk && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    85367: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return s;
        },
        m: function () {
          return a;
        },
      });
      var r = n(23611),
        i = n(34622),
        o = n(34496),
        a = class extends i.F {
          #r;
          #i;
          #o;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#i = e.mutationCache),
              (this.#r = []),
              (this.state = e.state || s()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#r.includes(e) ||
              (this.#r.push(e),
              this.clearGcTimeout(),
              this.#i.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#r = this.#r.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#i.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
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
          async execute(e) {
            this.#o = (0, o.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#a({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#a({ type: "pause" });
              },
              onContinue: () => {
                this.#a({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#i.canRun(this),
            });
            let t = "pending" === this.state.status,
              n = !this.#o.canStart();
            try {
              if (!t) {
                this.#a({ type: "pending", variables: e, isPaused: n }),
                  await this.#i.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#a({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: n,
                  });
              }
              let r = await this.#o.start();
              return (
                await this.#i.config.onSuccess?.(
                  r,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#i.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#a({ type: "success", data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#i.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#i.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#a({ type: "error", error: t });
              }
            } finally {
              this.#i.runNext(this);
            }
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.V.batch(() => {
                this.#r.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#i.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function s() {
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
    23611: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return r;
        },
      });
      var r = (function () {
        let e = [],
          t = 0,
          n = (e) => {
            e();
          },
          r = (e) => {
            e();
          },
          i = (e) => setTimeout(e, 0),
          o = (r) => {
            t
              ? e.push(r)
              : i(() => {
                  n(r);
                });
          },
          a = () => {
            let t = e;
            (e = []),
              t.length &&
                i(() => {
                  r(() => {
                    t.forEach((e) => {
                      n(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let n;
            t++;
            try {
              n = e();
            } finally {
              --t || a();
            }
            return n;
          },
          batchCalls:
            (e) =>
            (...t) => {
              o(() => {
                e(...t);
              });
            },
          schedule: o,
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            r = e;
          },
          setScheduler: (e) => {
            i = e;
          },
        };
      })();
    },
    37532: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return o;
        },
      });
      var r = n(34378),
        i = n(37886),
        o = new (class extends r.l {
          #s = !0;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if (!i.sk && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#s !== e &&
              ((this.#s = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#s;
          }
        })();
    },
    74938: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return s;
        },
        z: function () {
          return c;
        },
      });
      var r = n(37886),
        i = n(23611),
        o = n(34496),
        a = n(34622),
        s = class extends a.F {
          #c;
          #u;
          #l;
          #o;
          #d;
          #f;
          constructor(e) {
            super(),
              (this.#f = !1),
              (this.#d = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#l = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#c = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  n = void 0 !== t,
                  r = n
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
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
              (this.state = e.state ?? this.#c),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#o?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#d, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#l.remove(this);
          }
          setData(e, t) {
            let n = (0, r.oE)(this.state.data, e, this.options);
            return (
              this.#a({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            this.#a({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#o?.promise;
            return (
              this.#o?.cancel(e),
              t ? t.then(r.ZT).catch(r.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#c);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, r.Nc)(e.options.enabled, this)
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
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.Kp)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#o?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#o &&
                  (this.#f
                    ? this.#o.cancel({ revert: !0 })
                    : this.#o.cancelRetry()),
                this.scheduleGc()),
              this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#a({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#o) return this.#o.continueRetry(), this.#o.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let n = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#f = !0), n.signal),
                });
              },
              a = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let e = (0, r.cG)(this.options, t),
                    n = { queryKey: this.queryKey, meta: this.meta };
                  return (i(n), (this.#f = !1), this.options.persister)
                    ? this.options.persister(e, n, this)
                    : e(n);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#u = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#a({ type: "fetch", meta: a.fetchOptions?.meta });
            let s = (e) => {
              ((0, o.DV)(e) && e.silent) ||
                this.#a({ type: "error", error: e }),
                (0, o.DV)(e) ||
                  (this.#l.config.onError?.(e, this),
                  this.#l.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#o = (0, o.Mz)({
                initialPromise: t?.initialPromise,
                fn: a.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    s(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(e);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  this.#l.config.onSuccess?.(e, this),
                    this.#l.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: s,
                onFail: (e, t) => {
                  this.#a({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#a({ type: "pause" });
                },
                onContinue: () => {
                  this.#a({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#o.start()
            );
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...c(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let n = e.error;
                  if ((0, o.DV)(n) && n.revert && this.#u)
                    return { ...this.#u, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: n,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: n,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              i.V.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#l.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function c(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, o.Kw)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    34622: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return i;
        },
      });
      var r = n(37886),
        i = class {
          #h;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.PN)(this.gcTime) &&
                (this.#h = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (r.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#h && (clearTimeout(this.#h), (this.#h = void 0));
          }
        };
    },
    34496: function (e, t, n) {
      "use strict";
      n.d(t, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return c;
        },
        Mz: function () {
          return d;
        },
      });
      var r = n(75005),
        i = n(37532),
        o = n(18855),
        a = n(37886);
      function s(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.N.isOnline();
      }
      var u = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function l(e) {
        return e instanceof u;
      }
      function d(e) {
        let t,
          n = !1,
          l = 0,
          d = !1,
          f = (0, o.O)(),
          h = () =>
            r.j.isFocused() &&
            ("always" === e.networkMode || i.N.isOnline()) &&
            e.canRun(),
          p = () => c(e.networkMode) && e.canRun(),
          m = (n) => {
            d || ((d = !0), e.onSuccess?.(n), t?.(), f.resolve(n));
          },
          b = (n) => {
            d || ((d = !0), e.onError?.(n), t?.(), f.reject(n));
          },
          g = () =>
            new Promise((n) => {
              (t = (e) => {
                (d || h()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          y = () => {
            let t;
            if (d) return;
            let r = 0 === l ? e.initialPromise : void 0;
            try {
              t = r ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(m)
              .catch((t) => {
                if (d) return;
                let r = e.retry ?? (a.sk ? 0 : 3),
                  i = e.retryDelay ?? s,
                  o = "function" == typeof i ? i(l, t) : i,
                  c =
                    !0 === r ||
                    ("number" == typeof r && l < r) ||
                    ("function" == typeof r && r(l, t));
                if (n || !c) {
                  b(t);
                  return;
                }
                l++,
                  e.onFail?.(l, t),
                  (0, a._v)(o)
                    .then(() => (h() ? void 0 : g()))
                    .then(() => {
                      n ? b(t) : y();
                    });
              });
          };
        return {
          promise: f,
          cancel: (t) => {
            d || (b(new u(t)), e.abort?.());
          },
          continue: () => (t?.(), f),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: p,
          start: () => (p() ? y() : g().then(y), f),
        };
      }
    },
    34378: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return r;
        },
      });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
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
    18855: function (e, t, n) {
      "use strict";
      function r() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        function r(e) {
          Object.assign(n, e), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (t) => {
            r({ status: "fulfilled", value: t }), e(t);
          }),
          (n.reject = (e) => {
            r({ status: "rejected", reason: e }), t(e);
          }),
          n
        );
      }
      n.d(t, {
        O: function () {
          return r;
        },
      });
    },
    37886: function (e, t, n) {
      "use strict";
      n.d(t, {
        CN: function () {
          return x;
        },
        Ht: function () {
          return C;
        },
        KC: function () {
          return c;
        },
        Kp: function () {
          return s;
        },
        Nc: function () {
          return u;
        },
        PN: function () {
          return a;
        },
        Rm: function () {
          return f;
        },
        SE: function () {
          return o;
        },
        VS: function () {
          return m;
        },
        VX: function () {
          return A;
        },
        X7: function () {
          return d;
        },
        Ym: function () {
          return h;
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
          return E;
        },
        oE: function () {
          return v;
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
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function s(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (a) {
          if (r) {
            if (t.queryHash !== f(a, t.options)) return !1;
          } else if (!p(t.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (!i || i === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function d(e, t) {
        let { exact: n, status: r, predicate: i, mutationKey: o } = e;
        if (o) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (h(t.options.mutationKey) !== h(o)) return !1;
          } else if (!p(t.options.mutationKey, o)) return !1;
        }
        return (!r || t.state.status === r) && (!i || !!i(t));
      }
      function f(e, t) {
        return (t?.queryKeyHashFn || h)(e);
      }
      function h(e) {
        return JSON.stringify(e, (e, t) =>
          g(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((n) => !p(e[n], t[n])))
        );
      }
      function m(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function b(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function g(e) {
        if (!y(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!(y(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function y(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function w(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function v(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? (function e(t, n) {
              if (t === n) return t;
              let r = b(t) && b(n);
              if (r || (g(t) && g(n))) {
                let i = r ? t : Object.keys(t),
                  o = i.length,
                  a = r ? n : Object.keys(n),
                  s = a.length,
                  c = r ? [] : {},
                  u = 0;
                for (let o = 0; o < s; o++) {
                  let s = r ? o : a[o];
                  ((!r && i.includes(s)) || r) &&
                  void 0 === t[s] &&
                  void 0 === n[s]
                    ? ((c[s] = void 0), u++)
                    : ((c[s] = e(t[s], n[s])),
                      c[s] === t[s] && void 0 !== t[s] && u++);
                }
                return o === s && u === o ? t : c;
              }
              return n;
            })(e, t)
          : t;
      }
      function A(e, t, n = 0) {
        let r = [...e, t];
        return n && r.length > n ? r.slice(1) : r;
      }
      function C(e, t, n = 0) {
        let r = [t, ...e];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var x = Symbol();
      function E(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== x
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
    },
    42453: function (e, t, n) {
      "use strict";
      n.d(t, {
        NL: function () {
          return a;
        },
        aH: function () {
          return s;
        },
      });
      var r = n(55881),
        i = n(90132),
        o = r.createContext(void 0),
        a = (e) => {
          let t = r.useContext(o);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        s = (e) => {
          let { client: t, children: n } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(o.Provider, { value: t, children: n })
          );
        };
    },
    17357: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return d;
        },
      });
      var r = n(55881),
        i = n(85367),
        o = n(23611),
        a = n(34378),
        s = n(37886),
        c = class extends a.l {
          #p;
          #m = void 0;
          #b;
          #g;
          constructor(e, t) {
            super(),
              (this.#p = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#y();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#p.defaultMutationOptions(e)),
              (0, s.VS)(this.options, t) ||
                this.#p
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#b,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#b?.state.status === "pending" &&
                  this.#b.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#b?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#y(), this.#w(e);
          }
          getCurrentResult() {
            return this.#m;
          }
          reset() {
            this.#b?.removeObserver(this),
              (this.#b = void 0),
              this.#y(),
              this.#w();
          }
          mutate(e, t) {
            return (
              (this.#g = t),
              this.#b?.removeObserver(this),
              (this.#b = this.#p
                .getMutationCache()
                .build(this.#p, this.options)),
              this.#b.addObserver(this),
              this.#b.execute(e)
            );
          }
          #y() {
            let e = this.#b?.state ?? (0, i.R)();
            this.#m = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #w(e) {
            o.V.batch(() => {
              if (this.#g && this.hasListeners()) {
                let t = this.#m.variables,
                  n = this.#m.context;
                e?.type === "success"
                  ? (this.#g.onSuccess?.(e.data, t, n),
                    this.#g.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#g.onError?.(e.error, t, n),
                    this.#g.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#m);
              });
            });
          }
        },
        u = n(42453),
        l = n(5784);
      function d(e, t) {
        let n = (0, u.NL)(t),
          [i] = r.useState(() => new c(n, e));
        r.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = r.useSyncExternalStore(
            r.useCallback((e) => i.subscribe(o.V.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          s = r.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(l.Z);
            },
            [i]
          );
        if (a.error && (0, l.L)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: s, mutateAsync: a.mutate };
      }
    },
    43486: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        a: function () {
          return O;
        },
      });
      var i = n(75005),
        o = n(23611),
        a = n(74938),
        s = n(34378),
        c = n(18855),
        u = n(37886),
        l = class extends s.l {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#p = e),
              (this.#v = null),
              (this.#A = (0, c.O)()),
              this.options.experimental_prefetchInRender ||
                this.#A.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #p;
          #C = void 0;
          #x = void 0;
          #m = void 0;
          #E;
          #P;
          #A;
          #v;
          #I;
          #k;
          #B;
          #O;
          #M;
          #R;
          #S = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#C.addObserver(this),
              d(this.#C, this.options) ? this.#N() : this.updateResult(),
              this.#T());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return f(this.#C, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return f(this.#C, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#F(),
              this.#j(),
              this.#C.removeObserver(this);
          }
          setOptions(e, t) {
            let n = this.options,
              r = this.#C;
            if (
              ((this.options = this.#p.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, u.Nc)(this.options.enabled, this.#C))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#D(),
              this.#C.setOptions(this.options),
              n._defaulted &&
                !(0, u.VS)(this.options, n) &&
                this.#p
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#C,
                    observer: this,
                  });
            let i = this.hasListeners();
            i && h(this.#C, r, this.options, n) && this.#N(),
              this.updateResult(t),
              i &&
                (this.#C !== r ||
                  (0, u.Nc)(this.options.enabled, this.#C) !==
                    (0, u.Nc)(n.enabled, this.#C) ||
                  (0, u.KC)(this.options.staleTime, this.#C) !==
                    (0, u.KC)(n.staleTime, this.#C)) &&
                this.#Q();
            let o = this.#U();
            i &&
              (this.#C !== r ||
                (0, u.Nc)(this.options.enabled, this.#C) !==
                  (0, u.Nc)(n.enabled, this.#C) ||
                o !== this.#R) &&
              this.#G(o);
          }
          getOptimisticResult(e) {
            let t = this.#p.getQueryCache().build(this.#p, e),
              n = this.createResult(t, e);
            return (
              (0, u.VS)(this.getCurrentResult(), n) ||
                ((this.#m = n),
                (this.#P = this.options),
                (this.#E = this.#C.state)),
              n
            );
          }
          getCurrentResult() {
            return this.#m;
          }
          trackResult(e, t) {
            let n = {};
            return (
              Object.keys(e).forEach((r) => {
                Object.defineProperty(n, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(r), t?.(r), e[r]),
                });
              }),
              n
            );
          }
          trackProp(e) {
            this.#S.add(e);
          }
          getCurrentQuery() {
            return this.#C;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#p.defaultQueryOptions(e),
              n = this.#p.getQueryCache().build(this.#p, t);
            return n.fetch().then(() => this.createResult(n, t));
          }
          fetch(e) {
            return this.#N({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#m)
            );
          }
          #N(e) {
            this.#D();
            let t = this.#C.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(u.ZT)), t;
          }
          #Q() {
            this.#F();
            let e = (0, u.KC)(this.options.staleTime, this.#C);
            if (u.sk || this.#m.isStale || !(0, u.PN)(e)) return;
            let t = (0, u.Kp)(this.#m.dataUpdatedAt, e);
            this.#O = setTimeout(() => {
              this.#m.isStale || this.updateResult();
            }, t + 1);
          }
          #U() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#C)
                : this.options.refetchInterval) ?? !1
            );
          }
          #G(e) {
            this.#j(),
              (this.#R = e),
              !u.sk &&
                !1 !== (0, u.Nc)(this.options.enabled, this.#C) &&
                (0, u.PN)(this.#R) &&
                0 !== this.#R &&
                (this.#M = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    i.j.isFocused()) &&
                    this.#N();
                }, this.#R));
          }
          #T() {
            this.#Q(), this.#G(this.#U());
          }
          #F() {
            this.#O && (clearTimeout(this.#O), (this.#O = void 0));
          }
          #j() {
            this.#M && (clearInterval(this.#M), (this.#M = void 0));
          }
          createResult(e, t) {
            let n;
            let r = this.#C,
              i = this.options,
              o = this.#m,
              s = this.#E,
              l = this.#P,
              f = e !== r ? e.state : this.#x,
              { state: m } = e,
              b = { ...m },
              g = !1;
            if (t._optimisticResults) {
              let n = this.hasListeners(),
                o = !n && d(e, t),
                s = n && h(e, r, t, i);
              (o || s) && (b = { ...b, ...(0, a.z)(m.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (b.fetchStatus = "idle");
            }
            let { error: y, errorUpdatedAt: w, status: v } = b;
            if (t.select && void 0 !== b.data) {
              if (o && b.data === s?.data && t.select === this.#I) n = this.#k;
              else
                try {
                  (this.#I = t.select),
                    (n = t.select(b.data)),
                    (n = (0, u.oE)(o?.data, n, t)),
                    (this.#k = n),
                    (this.#v = null);
                } catch (e) {
                  this.#v = e;
                }
            } else n = b.data;
            if (
              void 0 !== t.placeholderData &&
              void 0 === n &&
              "pending" === v
            ) {
              let e;
              if (
                o?.isPlaceholderData &&
                t.placeholderData === l?.placeholderData
              )
                e = o.data;
              else if (
                ((e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#B?.state.data, this.#B)
                    : t.placeholderData),
                t.select && void 0 !== e)
              )
                try {
                  (e = t.select(e)), (this.#v = null);
                } catch (e) {
                  this.#v = e;
                }
              void 0 !== e &&
                ((v = "success"), (n = (0, u.oE)(o?.data, e, t)), (g = !0));
            }
            this.#v &&
              ((y = this.#v), (n = this.#k), (w = Date.now()), (v = "error"));
            let A = "fetching" === b.fetchStatus,
              C = "pending" === v,
              x = "error" === v,
              E = C && A,
              P = void 0 !== n,
              I = {
                status: v,
                fetchStatus: b.fetchStatus,
                isPending: C,
                isSuccess: "success" === v,
                isError: x,
                isInitialLoading: E,
                isLoading: E,
                data: n,
                dataUpdatedAt: b.dataUpdatedAt,
                error: y,
                errorUpdatedAt: w,
                failureCount: b.fetchFailureCount,
                failureReason: b.fetchFailureReason,
                errorUpdateCount: b.errorUpdateCount,
                isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
                isFetchedAfterMount:
                  b.dataUpdateCount > f.dataUpdateCount ||
                  b.errorUpdateCount > f.errorUpdateCount,
                isFetching: A,
                isRefetching: A && !C,
                isLoadingError: x && !P,
                isPaused: "paused" === b.fetchStatus,
                isPlaceholderData: g,
                isRefetchError: x && P,
                isStale: p(e, t),
                refetch: this.refetch,
                promise: this.#A,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === I.status
                    ? e.reject(I.error)
                    : void 0 !== I.data && e.resolve(I.data);
                },
                n = () => {
                  t((this.#A = I.promise = (0, c.O)()));
                },
                i = this.#A;
              switch (i.status) {
                case "pending":
                  e.queryHash === r.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === I.status || I.data !== i.value) && n();
                  break;
                case "rejected":
                  ("error" !== I.status || I.error !== i.reason) && n();
              }
            }
            return I;
          }
          updateResult(e) {
            let t = this.#m,
              n = this.createResult(this.#C, this.options);
            if (
              ((this.#E = this.#C.state),
              (this.#P = this.options),
              void 0 !== this.#E.data && (this.#B = this.#C),
              (0, u.VS)(n, t))
            )
              return;
            this.#m = n;
            let r = {};
            e?.listeners !== !1 &&
              (() => {
                if (!t) return !0;
                let { notifyOnChangeProps: e } = this.options,
                  n = "function" == typeof e ? e() : e;
                if ("all" === n || (!n && !this.#S.size)) return !0;
                let r = new Set(n ?? this.#S);
                return (
                  this.options.throwOnError && r.add("error"),
                  Object.keys(this.#m).some(
                    (e) => this.#m[e] !== t[e] && r.has(e)
                  )
                );
              })() &&
              (r.listeners = !0),
              this.#w({ ...r, ...e });
          }
          #D() {
            let e = this.#p.getQueryCache().build(this.#p, this.options);
            if (e === this.#C) return;
            let t = this.#C;
            (this.#C = e),
              (this.#x = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#T();
          }
          #w(e) {
            o.V.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#m);
                }),
                this.#p
                  .getQueryCache()
                  .notify({ query: this.#C, type: "observerResultsUpdated" });
            });
          }
        };
      function d(e, t) {
        return (
          (!1 !== (0, u.Nc)(t.enabled, e) &&
            void 0 === e.state.data &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && f(e, t, t.refetchOnMount))
        );
      }
      function f(e, t, n) {
        if (!1 !== (0, u.Nc)(t.enabled, e)) {
          let r = "function" == typeof n ? n(e) : n;
          return "always" === r || (!1 !== r && p(e, t));
        }
        return !1;
      }
      function h(e, t, n, r) {
        return (
          (e !== t || !1 === (0, u.Nc)(r.enabled, e)) &&
          (!n.suspense || "error" !== e.state.status) &&
          p(e, n)
        );
      }
      function p(e, t) {
        return (
          !1 !== (0, u.Nc)(t.enabled, e) &&
          e.isStaleByTime((0, u.KC)(t.staleTime, e))
        );
      }
      var m = n(55881),
        b = n(42453);
      n(90132);
      var g = m.createContext(
          ((r = !1),
          {
            clearReset: () => {
              r = !1;
            },
            reset: () => {
              r = !0;
            },
            isReset: () => r,
          })
        ),
        y = () => m.useContext(g),
        w = n(5784),
        v = (e, t) => {
          (e.suspense || e.throwOnError) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        A = (e) => {
          m.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        C = (e) => {
          let {
            result: t,
            errorResetBoundary: n,
            throwOnError: r,
            query: i,
          } = e;
          return (
            t.isError &&
            !n.isReset() &&
            !t.isFetching &&
            i &&
            (0, w.L)(r, [t.error, i])
          );
        },
        x = m.createContext(!1),
        E = () => m.useContext(x);
      x.Provider;
      var P = (e) => {
          e.suspense &&
            (void 0 === e.staleTime && (e.staleTime = 1e3),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        I = (e, t) => e.isLoading && e.isFetching && !t,
        k = (e, t) => e?.suspense && t.isPending,
        B = (e, t, n) =>
          t.fetchOptimistic(e).catch(() => {
            n.clearReset();
          });
      function O(e, t) {
        return (function (e, t, n) {
          var r, i, a, s, c;
          let l = (0, b.NL)(n),
            d = E(),
            f = y(),
            h = l.defaultQueryOptions(e);
          null === (i = l.getDefaultOptions().queries) ||
            void 0 === i ||
            null === (r = i._experimental_beforeQuery) ||
            void 0 === r ||
            r.call(i, h),
            (h._optimisticResults = d ? "isRestoring" : "optimistic"),
            P(h),
            v(h, f),
            A(f);
          let p = !l.getQueryCache().get(h.queryHash),
            [g] = m.useState(() => new t(l, h)),
            x = g.getOptimisticResult(h);
          if (
            (m.useSyncExternalStore(
              m.useCallback(
                (e) => {
                  let t = d ? () => void 0 : g.subscribe(o.V.batchCalls(e));
                  return g.updateResult(), t;
                },
                [g, d]
              ),
              () => g.getCurrentResult(),
              () => g.getCurrentResult()
            ),
            m.useEffect(() => {
              g.setOptions(h, { listeners: !1 });
            }, [h, g]),
            k(h, x))
          )
            throw B(h, g, f);
          if (
            C({
              result: x,
              errorResetBoundary: f,
              throwOnError: h.throwOnError,
              query: l.getQueryCache().get(h.queryHash),
            })
          )
            throw x.error;
          if (
            (null === (s = l.getDefaultOptions().queries) ||
              void 0 === s ||
              null === (a = s._experimental_afterQuery) ||
              void 0 === a ||
              a.call(s, h, x),
            h.experimental_prefetchInRender && !u.sk && I(x, d))
          ) {
            let e = p
              ? B(h, g, f)
              : null === (c = l.getQueryCache().get(h.queryHash)) ||
                void 0 === c
              ? void 0
              : c.promise;
            null == e ||
              e.catch(w.Z).finally(() => {
                g.hasListeners() || g.updateResult();
              });
          }
          return h.notifyOnChangeProps ? x : g.trackResult(x);
        })(e, l, t);
      }
    },
    5784: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function i() {}
      n.d(t, {
        L: function () {
          return r;
        },
        Z: function () {
          return i;
        },
      });
    },
    98822: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return c;
        },
      });
      var r = n(92747),
        i = n(51591),
        o = n(2594),
        a = n(12745),
        s = n(11061);
      function c(e) {
        let t, u;
        return (0, r.K)((r) => ({
          id: "coinbaseWalletSDK",
          name: "Coinbase Wallet",
          type: c.type,
          async connect({ chainId: e } = {}) {
            try {
              let t = await this.getProvider(),
                n = (await t.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, o.K)(e)
                );
              t.on("accountsChanged", this.onAccountsChanged),
                t.on("chainChanged", this.onChainChanged),
                t.on("disconnect", this.onDisconnect.bind(this));
              let r = await this.getChainId();
              if (e && r !== e) {
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (e.code === a.ab.code) throw e;
                  return { id: r };
                });
                r = t?.id ?? r;
              }
              return { accounts: n, chainId: r };
            } catch (e) {
              if (
                /(user closed modal|accounts received is empty|user denied account)/i.test(
                  e.message
                )
              )
                throw new a.ab(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            e.removeListener("accountsChanged", this.onAccountsChanged),
              e.removeListener("chainChanged", this.onChainChanged),
              e.removeListener("disconnect", this.onDisconnect.bind(this)),
              e.disconnect(),
              e.close();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, o.K)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            if (!u) {
              let { default: i } = await Promise.all([
                n.e(98702),
                n.e(3532),
                n.e(47528),
                n.e(54855),
              ]).then(n.t.bind(n, 47528, 19));
              t = new (
                "function" != typeof i && "function" == typeof i.default
                  ? i.default
                  : i
              )({ reloadOnDisconnect: !1, ...e });
              let o = t.walletExtension?.getChainId(),
                a =
                  r.chains.find((t) =>
                    e.chainId ? t.id === e.chainId : t.id === o
                  ) || r.chains[0],
                s = e.chainId || a?.id,
                c = e.jsonRpcUrl || a?.rpcUrls.default.http[0];
              u = t.makeWeb3Provider(c, s);
            }
            return u;
          },
          async isAuthorized() {
            try {
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: e }) {
            let t = r.chains.find((t) => t.id === e);
            if (!t) throw new a.x3(new i.X4());
            let n = await this.getProvider(),
              o = (0, s.eC)(t.id);
            try {
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: o }],
                }),
                t
              );
            } catch (e) {
              if (4902 === e.code)
                try {
                  return (
                    await n.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          chainId: o,
                          chainName: t.name,
                          nativeCurrency: t.nativeCurrency,
                          rpcUrls: [t.rpcUrls.default?.http[0] ?? ""],
                          blockExplorerUrls: [t.blockExplorers?.default.url],
                        },
                      ],
                    }),
                    t
                  );
                } catch (e) {
                  throw new a.ab(e);
                }
              throw new a.x3(e);
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? r.emitter.emit("disconnect")
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, o.K)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onDisconnect(e) {
            r.emitter.emit("disconnect");
            let t = await this.getProvider();
            t.removeListener("accountsChanged", this.onAccountsChanged),
              t.removeListener("chainChanged", this.onChainChanged),
              t.removeListener("disconnect", this.onDisconnect.bind(this));
          },
        }));
      }
      c.type = "coinbaseWallet";
    },
    57745: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var r = n(92747),
        i = n(77588),
        o = n(2594);
      function a(e = {}) {
        let t;
        let { shimDisconnect: s = !1 } = e;
        return (0, r.K)((r) => ({
          id: "safe",
          name: "Safe",
          type: a.type,
          async connect() {
            let e = await this.getProvider();
            if (!e) throw new i.M();
            let t = await this.getAccounts(),
              n = await this.getChainId();
            return (
              e.on("disconnect", this.onDisconnect.bind(this)),
              s && (await r.storage?.removeItem("safe.disconnected")),
              { accounts: t, chainId: n }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new i.M();
            e.removeListener("disconnect", this.onDisconnect.bind(this)),
              s && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new i.M();
            return (await e.request({ method: "eth_accounts" })).map(o.K);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await n
                    .e(82379)
                    .then(n.t.bind(n, 82379, 19)),
                  i = new (
                    "function" != typeof r && "function" == typeof r.default
                      ? r.default
                      : r
                  )(e),
                  o = await i.safe.getInfo();
                if (!o) throw Error("Could not load Safe information");
                let { SafeAppProvider: a } = await n
                  .e(32380)
                  .then(n.t.bind(n, 32380, 19));
                t = new a(o, i);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new i.M();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (s && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      a.type = "safe";
    },
    80925: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return u;
        },
      });
      var r = n(92747),
        i = n(77588),
        o = n(51591),
        a = n(2594),
        s = n(12745),
        c = n(11061);
      function u(e) {
        let t, l;
        let d = e.isNewChainsStale ?? !0,
          f = "eip155";
        return (0, r.K)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: u.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (e.on("connect", this.onConnect.bind(this)),
              e.on("session_delete", this.onSessionDelete.bind(this)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new i.M();
              n.on("display_uri", this.onDisplayUri);
              let o = e;
              if (!o) {
                let e = (await r.storage?.getItem("state")) ?? {};
                o = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!o) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((n.session && s && (await n.disconnect()), !n.session || s)) {
                let e = r.chains.filter((e) => e.id !== o).map((e) => e.id);
                await n.connect({
                  optionalChains: [o, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, a.K)(e)),
                u = await this.getChainId();
              return (
                n.removeListener("display_uri", this.onDisplayUri),
                n.removeListener("connect", this.onConnect.bind(this)),
                n.on("accountsChanged", this.onAccountsChanged.bind(this)),
                n.on("chainChanged", this.onChainChanged),
                n.on("disconnect", this.onDisconnect.bind(this)),
                n.on("session_delete", this.onSessionDelete.bind(this)),
                { accounts: c, chainId: u }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new s.ab(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              e?.removeListener(
                "accountsChanged",
                this.onAccountsChanged.bind(this)
              ),
                e?.removeListener("chainChanged", this.onChainChanged),
                e?.removeListener("disconnect", this.onDisconnect.bind(this)),
                e?.removeListener(
                  "session_delete",
                  this.onSessionDelete.bind(this)
                ),
                e?.on("connect", this.onConnect.bind(this)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.K)(e));
          },
          async getProvider({ chainId: i } = {}) {
            async function o() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: i } = await Promise.all([
                n.e(98702),
                n.e(19527),
                n.e(59324),
                n.e(10985),
              ]).then(n.bind(n, 59324));
              return await i.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => [e.id, e.rpcUrls.default.http[0]])
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (l || (l = o()),
                (t = await l),
                t?.events.setMaxListeners(1 / 0)),
              i && (await this.switchChain?.({ chainId: i })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: e }) {
            let t = r.chains.find((t) => t.id === e);
            if (!t) throw new s.x3(new o.X4());
            try {
              let n = await this.getProvider(),
                r = this.getNamespaceChainsIds(),
                i = this.getNamespaceMethods();
              if (!r.includes(e) && i.includes("wallet_addEthereumChain")) {
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: (0, c.eC)(t.id),
                      blockExplorerUrls: [t.blockExplorers?.default.url],
                      chainName: t.name,
                      nativeCurrency: t.nativeCurrency,
                      rpcUrls: [...t.rpcUrls.default.http],
                    },
                  ],
                });
                let r = await this.getRequestedChainsIds();
                this.setRequestedChainsIds([...r, e]);
              }
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.eC)(e) }],
                }),
                t
              );
            } catch (t) {
              let e = "string" == typeof t ? t : t?.message;
              if (/user rejected request/i.test(e)) throw new s.ab(t);
              throw new s.x3(t);
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.K)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            t.removeListener(
              "accountsChanged",
              this.onAccountsChanged.bind(this)
            ),
              t.removeListener("chainChanged", this.onChainChanged),
              t.removeListener("disconnect", this.onDisconnect.bind(this)),
              t.removeListener(
                "session_delete",
                this.onSessionDelete.bind(this)
              ),
              t.on("connect", this.onConnect.bind(this));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces[f]?.chains?.map((e) =>
                  parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          getNamespaceMethods: () =>
            t ? t.session?.namespaces[f]?.methods ?? [] : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (
              this.getNamespaceMethods().includes("wallet_addEthereumChain") ||
              !d
            )
              return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      u.type = "walletConnect";
    },
    39298: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          o = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
      n.d(t, {
        D: function () {
          return r;
        },
      });
    },
    65640: function (e, t, n) {
      "use strict";
      function r(e, t = {}) {
        let n;
        try {
          n = e.getClient(t);
        } catch {}
        return n;
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    99303: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return c;
        },
      });
      var r = n(26290),
        i = n(62428),
        o = n(9666),
        a = n(2594),
        s = n(51591);
      async function c(e, t = {}) {
        let n;
        if (t.connector) {
          let { connector: e } = t,
            [r, i] = await Promise.all([e.getAccounts(), e.getChainId()]);
          n = { accounts: r, chainId: i, connector: e };
        } else n = e.state.connections.get(e.state.current);
        if (!n) throw new s.aH();
        let c = t.chainId ?? n.chainId,
          u = n.connector;
        if (u.getClient) return u.getClient({ chainId: c });
        let l = (0, o.T)(t.account ?? n.accounts[0]);
        l.address = (0, a.K)(l.address);
        let d = e.chains.find((e) => e.id === c),
          f = await n.connector.getProvider({ chainId: c });
        if (t.account && !n.accounts.includes(l.address))
          throw new s.JK({ address: l.address, connector: u });
        return (0, r.e)({
          account: l,
          chain: d,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: n = "custom",
                name: r = "Custom Provider",
                retryDelay: o,
              } = t;
              return ({ retryCount: a }) =>
                (0, i.q)({
                  key: n,
                  name: r,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? a,
                  retryDelay: o,
                  type: "custom",
                });
            })(f)({ ...e, retryCount: 0 }),
        });
      }
    },
    67223: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var r = n(47037),
        i = n(39298);
      function o(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, i.D)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...i } = e,
              { connector: o, ...a } = t;
            return (0, r.v)(i, a) && n?.id === o?.id && n?.uid === o?.uid;
          },
        });
      }
    },
    92747: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, {
        K: function () {
          return r;
        },
      });
    },
    13960: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return f;
        },
      });
      var r = n(2594),
        i = n(12745),
        o = n(49307),
        a = n(1507),
        s = n(11061),
        c = n(51591),
        u = n(77588),
        l = n(92747);
      let d = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : h(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            h(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : h(e, "isPhantom"),
        },
      };
      function f(e = {}) {
        let { shimDisconnect: t = !0, unstable_shimAsyncInject: n } = e;
        function p() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(d[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, l.K)((l) => ({
          get icon() {
            return p().icon;
          },
          get id() {
            return p().id;
          },
          get name() {
            return p().name;
          },
          type: f.type,
          async setup() {
            let t = await this.getProvider();
            t && e.target && t.on("connect", this.onConnect.bind(this));
          },
          async connect({ chainId: n, isReconnecting: o } = {}) {
            let a = await this.getProvider();
            if (!a) throw new u.M();
            let s = await this.getAccounts().catch(() => null);
            if (!o && t && s?.length)
              try {
                let e = await a.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                s = e[0]?.caveats?.[0]?.value?.map((e) => r.K(e));
              } catch (e) {
                if (e.code === i.ab.code) throw new i.ab(e);
                if (e.code === i.pT.code) throw e;
              }
            try {
              s?.length ||
                (s = (await a.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.K)(e)
                )),
                a.removeListener("connect", this.onConnect.bind(this)),
                a.on("accountsChanged", this.onAccountsChanged.bind(this)),
                a.on("chainChanged", this.onChainChanged),
                a.on("disconnect", this.onDisconnect.bind(this));
              let o = await this.getChainId();
              if (n && o !== n) {
                let e = await this.switchChain({ chainId: n }).catch((e) => {
                  if (e.code === i.ab.code) throw e;
                  return { id: o };
                });
                o = e?.id ?? o;
              }
              return (
                t &&
                  (await l.storage?.removeItem(`${this.id}.disconnected`),
                  e.target ||
                    (await l.storage?.setItem("injected.connected", !0))),
                { accounts: s, chainId: o }
              );
            } catch (e) {
              if (e.code === i.ab.code) throw new i.ab(e);
              if (e.code === i.pT.code) throw new i.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let n = await this.getProvider();
            if (!n) throw new u.M();
            n.removeListener(
              "accountsChanged",
              this.onAccountsChanged.bind(this)
            ),
              n.removeListener("chainChanged", this.onChainChanged),
              n.removeListener("disconnect", this.onDisconnect.bind(this)),
              n.on("connect", this.onConnect.bind(this)),
              t &&
                (await l.storage?.setItem(`${this.id}.disconnected`, !0),
                e.target ||
                  (await l.storage?.removeItem("injected.connected")));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new u.M();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.K)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new u.M();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = p();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? h(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (t && (await l.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await l.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== n && !1 !== n) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof n ? n : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new u.M();
              }
              return !!(
                await (0, o.J)(() =>
                  (0, a.F)(() => this.getAccounts(), { timeout: 100 })
                )
              ).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: e }) {
            let t = await this.getProvider();
            if (!t) throw new u.M();
            let n = l.chains.find((t) => t.id === e);
            if (!n) throw new i.x3(new c.X4());
            try {
              return (
                await Promise.all([
                  t.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: (0, s.eC)(e) }],
                  }),
                  new Promise((t) =>
                    l.emitter.once("change", ({ chainId: n }) => {
                      n === e && t();
                    })
                  ),
                ]),
                n
              );
            } catch (r) {
              if (4902 === r.code || r?.data?.originalError?.code === 4902)
                try {
                  let r;
                  let { default: o, ...a } = n.blockExplorers ?? {};
                  if (
                    (o && (r = [o.url, ...Object.values(a).map((e) => e.url)]),
                    await t.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          chainId: (0, s.eC)(e),
                          chainName: n.name,
                          nativeCurrency: n.nativeCurrency,
                          rpcUrls: [n.rpcUrls.default?.http[0] ?? ""],
                          blockExplorerUrls: r,
                        },
                      ],
                    }),
                    (await this.getChainId()) !== e)
                  )
                    throw new i.ab(
                      Error("User rejected switch after adding network.")
                    );
                  return n;
                } catch (e) {
                  throw new i.ab(e);
                }
              if (r.code === i.ab.code) throw new i.ab(r);
              throw new i.x3(r);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (l.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                t && (await l.storage?.removeItem(`${this.id}.disconnected`));
            } else
              l.emitter.emit("change", { accounts: e.map((e) => (0, r.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            l.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = await this.getAccounts();
            if (0 === t.length) return;
            let n = Number(e.chainId);
            l.emitter.emit("connect", { accounts: t, chainId: n });
            let r = await this.getProvider();
            r &&
              (r.removeListener("connect", this.onConnect.bind(this)),
              r.on("accountsChanged", this.onAccountsChanged.bind(this)),
              r.on("chainChanged", this.onChainChanged),
              r.on("disconnect", this.onDisconnect.bind(this)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (l.emitter.emit("disconnect"),
              t &&
                (t.removeListener(
                  "accountsChanged",
                  this.onAccountsChanged.bind(this)
                ),
                t.removeListener("chainChanged", this.onChainChanged),
                t.removeListener("disconnect", this.onDisconnect.bind(this)),
                t.on("connect", this.onConnect.bind(this))));
          },
        }));
      }
      function h(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
      f.type = "injected";
    },
    42006: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        _: function () {
          return P;
        },
      });
      var i,
        o = n(26290);
      let a = (e) => (t, n, r) => {
          let i = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let o = e;
              if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (o = (n) => {
                  let r = e(n);
                  if (!i(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return i(o);
            }),
            e(t, n, r)
          );
        },
        s = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => s(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => s(t)(e),
            };
          }
        },
        c = (e, t) => (n, r, i) => {
          let o,
            a,
            c = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            u = !1,
            l = new Set(),
            d = new Set();
          try {
            o = c.getStorage();
          } catch (e) {}
          if (!o)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              i
            );
          let f = s(c.serialize),
            h = () => {
              let e;
              let t = f({ state: c.partialize({ ...r() }), version: c.version })
                .then((e) => o.setItem(c.name, e))
                .catch((t) => {
                  e = t;
                });
              if (e) throw e;
              return t;
            },
            p = i.setState;
          i.setState = (e, t) => {
            p(e, t), h();
          };
          let m = e(
              (...e) => {
                n(...e), h();
              },
              r,
              i
            ),
            b = () => {
              var e;
              if (!o) return;
              (u = !1), l.forEach((e) => e(r()));
              let t =
                (null == (e = c.onRehydrateStorage)
                  ? void 0
                  : e.call(c, r())) || void 0;
              return s(o.getItem.bind(o))(c.name)
                .then((e) => {
                  if (e) return c.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === c.version)
                      return e.state;
                    if (c.migrate) return c.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((a = c.merge(e, null != (t = r()) ? t : m)), !0), h()
                  );
                })
                .then(() => {
                  null == t || t(a, void 0), (u = !0), d.forEach((e) => e(a));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (i.persist = {
              setOptions: (e) => {
                (c = { ...c, ...e }), e.getStorage && (o = e.getStorage());
              },
              clearStorage: () => {
                null == o || o.removeItem(c.name);
              },
              getOptions: () => c,
              rehydrate: () => b(),
              hasHydrated: () => u,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            b(),
            a || m
          );
        },
        u = (e, t) => (n, r, i) => {
          let o,
            a = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      i = null != (t = n.getItem(e)) ? t : null;
                    return i instanceof Promise ? i.then(r) : r(i);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            u = new Set(),
            l = new Set(),
            d = a.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              i
            );
          let f = () => {
              let e = a.partialize({ ...r() });
              return d.setItem(a.name, { state: e, version: a.version });
            },
            h = i.setState;
          i.setState = (e, t) => {
            h(e, t), f();
          };
          let p = e(
              (...e) => {
                n(...e), f();
              },
              r,
              i
            ),
            m = () => {
              var e, t;
              if (!d) return;
              (c = !1),
                u.forEach((e) => {
                  var t;
                  return e(null != (t = r()) ? t : p);
                });
              let i =
                (null == (t = a.onRehydrateStorage)
                  ? void 0
                  : t.call(a, null != (e = r()) ? e : p)) || void 0;
              return s(d.getItem.bind(d))(a.name)
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === a.version)
                      return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((o = a.merge(e, null != (t = r()) ? t : p)), !0), f()
                  );
                })
                .then(() => {
                  null == i || i(o, void 0),
                    (o = r()),
                    (c = !0),
                    l.forEach((e) => e(o));
                })
                .catch((e) => {
                  null == i || i(void 0, e);
                });
            };
          return (
            (i.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => m(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
            }),
            a.skipHydration || m(),
            o || p
          );
        },
        l = (e, t) =>
          "getStorage" in t || "serialize" in t || "deserialize" in t
            ? (console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
              c(e, t))
            : u(e, t),
        d = (e) => {
          let t;
          let n = new Set(),
            r = (e, r) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            };
          return (t = e(r, i, o)), o;
        },
        f = (e) => (e ? d(e) : d);
      var h = n(13960),
        p = n(53238),
        m = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      class b {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            i.set(this, new p.v());
        }
        on(e, t) {
          m(this, i, "f").on(e, t);
        }
        once(e, t) {
          m(this, i, "f").once(e, t);
        }
        off(e, t) {
          m(this, i, "f").off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          m(this, i, "f").emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return m(this, i, "f").listenerCount(e);
        }
      }
      function g(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function y(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function w(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function v(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              i = [],
              o = [];
            return function (a, s) {
              if ("object" == typeof s) {
                if (i.length) {
                  let e = w(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)),
                    (o[o.length] = a);
                  let n = w(i, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, y(o, n)) : `[ref=${y(o, n)}]`;
                } else (i[0] = s), (o[0] = a);
              }
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      i = new WeakMap();
      let A = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var C = n(51591);
      let x = 256;
      var E = n(1131);
      function P(e) {
        let t;
        let {
            multiInjectedProviderDiscovery: n = !0,
            storage: i = (function (e) {
              let {
                deserialize: t = g,
                key: n = "wagmi",
                serialize: r = v,
                storage: i = A,
              } = e;
              function o(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...i,
                key: n,
                async getItem(e, r) {
                  let a = i.getItem(`${n}.${e}`),
                    s = await o(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage:
                "undefined" != typeof window && window.localStorage
                  ? window.localStorage
                  : A,
            }),
            syncConnectedChain: s = !0,
            ssr: c,
            ...u
          } = e,
          d =
            "undefined" != typeof window && n
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          p = f(() => u.chains),
          m = f(() =>
            [
              ...(u.connectors ?? []),
              ...(c ? [] : d?.getProviders().map(w) ?? []),
            ].map(y)
          );
        function y(e) {
          let t = new b(
              (function (e = 11) {
                if (!r || x + e > 512) {
                  (r = ""), (x = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(x, x++ + e);
              })()
            ),
            n = {
              ...e({ emitter: t, chains: p.getState(), storage: i }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", M), n.setup?.(), n;
        }
        function w(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, h.L)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let P = new Map();
        function I() {
          return {
            chainId: p.getState()[0].id,
            connections: new Map(),
            current: void 0,
            status: "disconnected",
          };
        }
        let k = "0.0.0-canary-";
        t = E.i.startsWith(k)
          ? parseInt(E.i.replace(k, ""))
          : parseInt(E.i.split(".")[0] ?? "0");
        let B = f(
          a(
            i
              ? l(I, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = I(),
                      i =
                        e &&
                        "object" == typeof e &&
                        "chainId" in e &&
                        "number" == typeof e.chainId
                          ? e.chainId
                          : r.chainId;
                    return { ...r, chainId: i };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: n, name: r, type: i, uid: o } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: n, name: r, type: i, uid: o },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  skipHydration: c,
                  storage: i,
                  version: t,
                })
              : I
          )
        );
        function O(e) {
          B.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function M(e) {
          "connecting" !== B.getState().status &&
            "reconnecting" !== B.getState().status &&
            B.setState((t) => {
              let n = m.getState().find((t) => t.uid === e.uid);
              return n
                ? {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  }
                : t;
            });
        }
        return (
          s &&
            B.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (p.getState().some((t) => t.id === e))
                  return B.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          d?.subscribe((e) => {
            let t = new Map();
            for (let e of m.getState()) t.set(e.id, !0);
            let n = [];
            for (let r of e) {
              let e = y(w(r));
              t.has(e.id) || n.push(e);
            }
            (!i || B.persist.hasHydrated()) &&
              m.setState((e) => [...e, ...n], !0);
          }),
          {
            get chains() {
              return p.getState();
            },
            get connectors() {
              return m.getState();
            },
            storage: i,
            getClient: function (e = {}) {
              let t;
              let n = e.chainId ?? B.getState().chainId,
                r = p.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new C.X4();
              {
                let e = P.get(B.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new C.X4();
              }
              {
                let e = P.get(n);
                if (e) return e;
              }
              if (u.client) t = u.client({ chain: r });
              else {
                let e = r.id,
                  n = p.getState().map((e) => e.id),
                  i = {};
                for (let [t, r] of Object.entries(u))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  ) {
                    if ("object" == typeof r) {
                      if (e in r) i[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        i[t] = r;
                      }
                    } else i[t] = r;
                  }
                t = (0, o.e)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => u.transports[e]({ ...t, connectors: m }),
                });
              }
              return P.set(n, t), t;
            },
            get state() {
              return B.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(B.getState()) : e;
              let n = I();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                B.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              B.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: d,
              store: B,
              ssr: !!c,
              syncConnectedChain: s,
              transports: u.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(p.getState()) : e;
                  if (0 !== t.length) return p.setState(t, !0);
                },
                subscribe: (e) => p.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: w,
                setup: y,
                setState: (e) =>
                  m.setState("function" == typeof e ? e(m.getState()) : e, !0),
                subscribe: (e) => m.subscribe(e),
              },
              events: {
                change: O,
                connect: M,
                disconnect: function e(t) {
                  B.setState((n) => {
                    let r = n.connections.get(t.uid);
                    if (
                      (r &&
                        (r.connector.emitter.off("change", O),
                        r.connector.emitter.off("disconnect", e),
                        r.connector.emitter.on("connect", M)),
                      n.connections.delete(t.uid),
                      0 === n.connections.size)
                    )
                      return {
                        ...n,
                        connections: new Map(),
                        current: void 0,
                        status: "disconnected",
                      };
                    let i = n.connections.values().next().value;
                    return {
                      ...n,
                      connections: new Map(n.connections),
                      current: i.connector.uid,
                    };
                  });
                },
              },
            },
          }
        );
      }
    },
    80199: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return c;
        },
      });
      var r,
        i,
        o = n(1131);
      let a = () => `@wagmi/core@${o.i}`;
      var s = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class c extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return a();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof c
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof c && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return s(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? s(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    51591: function (e, t, n) {
      "use strict";
      n.d(t, {
        JK: function () {
          return s;
        },
        X4: function () {
          return i;
        },
        aH: function () {
          return a;
        },
        wi: function () {
          return o;
        },
      });
      var r = n(80199);
      class i extends r.G {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.G {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      class s extends r.G {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
    },
    77588: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
        O: function () {
          return o;
        },
      });
      var r = n(80199);
      class i extends r.G {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class o extends r.G {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    62111: function (e, t, n) {
      "use strict";
      function r(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!i(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!(i(n) && n.hasOwnProperty("isPrototypeOf"));
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: o,
          maxPages: a,
          meta: s,
          networkMode: c,
          queryFn: u,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: f,
          retry: h,
          retryDelay: p,
          structuralSharing: m,
          getPreviousPageParam: b,
          getNextPageParam: g,
          initialPageParam: y,
          _optimisticResults: w,
          enabled: v,
          notifyOnChangeProps: A,
          placeholderData: C,
          refetchInterval: x,
          refetchIntervalInBackground: E,
          refetchOnMount: P,
          refetchOnReconnect: I,
          refetchOnWindowFocus: k,
          retryOnMount: B,
          select: O,
          staleTime: M,
          suspense: R,
          throwOnError: S,
          config: N,
          connector: T,
          query: F,
          ...j
        } = e;
        return j;
      }
      n.d(t, {
        O: function () {
          return o;
        },
        k: function () {
          return r;
        },
      });
    },
    47037: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let o = Object.keys(t);
              if ((r = o.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = o[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          };
        },
      });
    },
    98658: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    1131: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "2.6.14";
    },
    53238: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var r = n(60646);
      t.Z = r;
    },
    18794: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: function () {
            return F;
          },
          __assign: function () {
            return o;
          },
          __asyncDelegator: function () {
            return P;
          },
          __asyncGenerator: function () {
            return E;
          },
          __asyncValues: function () {
            return I;
          },
          __await: function () {
            return x;
          },
          __awaiter: function () {
            return p;
          },
          __classPrivateFieldGet: function () {
            return S;
          },
          __classPrivateFieldIn: function () {
            return T;
          },
          __classPrivateFieldSet: function () {
            return N;
          },
          __createBinding: function () {
            return b;
          },
          __decorate: function () {
            return s;
          },
          __disposeResources: function () {
            return D;
          },
          __esDecorate: function () {
            return u;
          },
          __exportStar: function () {
            return g;
          },
          __extends: function () {
            return i;
          },
          __generator: function () {
            return m;
          },
          __importDefault: function () {
            return R;
          },
          __importStar: function () {
            return M;
          },
          __makeTemplateObject: function () {
            return k;
          },
          __metadata: function () {
            return h;
          },
          __param: function () {
            return c;
          },
          __propKey: function () {
            return d;
          },
          __read: function () {
            return w;
          },
          __rest: function () {
            return a;
          },
          __rewriteRelativeImportExtension: function () {
            return Q;
          },
          __runInitializers: function () {
            return l;
          },
          __setFunctionName: function () {
            return f;
          },
          __spread: function () {
            return v;
          },
          __spreadArray: function () {
            return C;
          },
          __spreadArrays: function () {
            return A;
          },
          __values: function () {
            return y;
          },
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function s(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function u(e, t, n, r, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            c = r.kind,
            u = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            l = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}),
            f = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var p = {};
          for (var m in r) p[m] = "access" === m ? {} : r[m];
          for (var m in r.access) p.access[m] = r.access[m];
          p.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(e || null));
          };
          var b = (0, n[h])(
            "accessor" === c ? { get: d.get, set: d.set } : d[u],
            p
          );
          if ("accessor" === c) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b)
              throw TypeError("Object expected");
            (s = a(b.get)) && (d.get = s),
              (s = a(b.set)) && (d.set = s),
              (s = a(b.init)) && i.unshift(s);
          } else (s = a(b)) && ("field" === c ? i.unshift(s) : (d[u] = s));
        }
        l && Object.defineProperty(l, r.name, d), (f = !0);
      }
      function l(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++)
          n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function f(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function p(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function m(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            return (function (s) {
              if (n) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), s[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, c]);
          };
        }
      }
      var b = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            (!i ||
              ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function g(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            b(t, e, n);
      }
      function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function w(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function v() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(w(arguments[t]));
        return e;
      }
      function A() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function C(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function x(e) {
        return this instanceof x ? ((this.v = e), this) : new x(e);
      }
      function E(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(e, t || []),
          o = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, u);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e, t) {
          i[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = i[e](t)).value instanceof x
              ? Promise.resolve(n.value.v).then(c, u)
              : l(o[0][2], n);
          } catch (e) {
            l(o[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function u(e) {
          s("throw", e);
        }
        function l(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function P(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, i) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: x(e[r](t)), done: !1 }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function I(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = y(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                !(function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, i, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function k(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var B = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        O = function (e) {
          return (O =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function M(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = O(e), r = 0; r < n.length; r++)
            "default" !== n[r] && b(t, e, n[r]);
        return B(t, e), t;
      }
      function R(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function N(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      function T(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function F(e, t, n) {
        if (null != t) {
          var r, i;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (i = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          i &&
            (r = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var j =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function D(e) {
        function t(t) {
          (e.error = e.hasError
            ? new j(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function i() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(i);
              if (n.dispose) {
                var o = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(o).then(i, function (e) {
                      return t(e), i();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function Q(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, i, o) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (i && o)
                  ? r + i + "." + o.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      t.default = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: d,
        __setFunctionName: f,
        __metadata: h,
        __awaiter: p,
        __generator: m,
        __createBinding: b,
        __exportStar: g,
        __values: y,
        __read: w,
        __spread: v,
        __spreadArrays: A,
        __spreadArray: C,
        __await: x,
        __asyncGenerator: E,
        __asyncDelegator: P,
        __asyncValues: I,
        __makeTemplateObject: k,
        __importStar: M,
        __importDefault: R,
        __classPrivateFieldGet: S,
        __classPrivateFieldSet: N,
        __classPrivateFieldIn: T,
        __addDisposableResource: F,
        __disposeResources: D,
        __rewriteRelativeImportExtension: Q,
      };
    },
    9666: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      n.d(t, {
        T: function () {
          return r;
        },
      });
    },
    98995: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return E;
        },
      });
      var r = n(58076),
        i = n(6526);
      class o extends i.G {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidMetadataError",
            });
        }
      }
      class a extends i.G {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidNftUriError",
            });
        }
      }
      class s extends i.G {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUriResolutionError",
            });
        }
      }
      class c extends i.G {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUnsupportedNamespaceError",
            });
        }
      }
      let u =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        l =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function m({ uri: e, gatewayUrls: t }) {
        let n = d.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = p(t?.ipfs, "https://ipfs.io"),
          i = p(t?.arweave, "https://arweave.net"),
          o = e.match(u),
          {
            protocol: a,
            subpath: c,
            target: h,
            subtarget: m = "",
          } = o?.groups || {},
          b = "ipns:/" === a || "ipns/" === c,
          g = "ipfs:/" === a || "ipfs/" === c || l.test(e);
        if (e.startsWith("http") && !b && !g) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((b || g) && h)
          return {
            uri: `${r}/${b ? "ipns" : "ipfs"}/${h}${m}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && h)
          return { uri: `${i}/${h}${m || ""}`, isOnChain: !1, isEncoded: !1 };
        let y = e.replace(f, "");
        if (
          (y.startsWith("<svg") && (y = `data:image/svg+xml;base64,${btoa(y)}`),
          y.startsWith("data:") || y.startsWith("{"))
        )
          return { uri: y, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: e });
      }
      function b(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new o({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function g({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await y({ gatewayUrls: e, uri: b(n) });
        } catch {
          throw new s({ uri: t });
        }
      }
      async function y({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = m({ uri: t, gatewayUrls: e });
        if (r || (await h(n))) return n;
        throw new s({ uri: t });
      }
      async function w(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, r.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, r.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function v(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? A(e, { gatewayUrls: t, record: n })
          : y({ uri: n, gatewayUrls: t });
      }
      async function A(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, i] = t.split("/"),
              [o, s] = n.split(":"),
              [c, u] = r.split(":");
            if (!o || "eip155" !== o.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!u) throw new a({ reason: "Contract address not found" });
            if (!i) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: parseInt(s),
              namespace: c.toLowerCase(),
              contractAddress: u,
              tokenID: i,
            };
          })(n),
          {
            uri: i,
            isOnChain: o,
            isEncoded: s,
          } = m({ uri: await w(e, { nft: r }), gatewayUrls: t });
        if (
          o &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return y({
            uri: b(
              JSON.parse(
                s ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let c = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          g({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, c) })
        );
      }
      var C = n(62273),
        x = n(92076);
      async function E(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, C.s)(
          e,
          x.g,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: i,
          universalResolverAddress: s,
          gatewayUrls: o,
          strict: a,
        });
        if (!c) return null;
        try {
          return await v(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    81612: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return l;
        },
      });
      var r = n(3238),
        i = n(8661),
        o = n(11061),
        a = n(69423),
        s = n(74309),
        c = n(62273),
        u = n(58076);
      async function l(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: l,
          gatewayUrls: d,
          strict: f,
          universalResolverAddress: h,
        }
      ) {
        let p = h;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, i.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let m = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: p,
              abi: r.du,
              functionName: "reverse",
              args: [(0, o.NC)((0, s.T)(m))],
              blockNumber: n,
              blockTag: l,
            },
            a = (0, c.s)(e, u.L, "readContract"),
            [f, h] = d ? await a({ ...i, args: [...i.args, d] }) : await a(i);
          if (t.toLowerCase() !== h.toLowerCase()) return null;
          return f;
        } catch (e) {
          if (f) throw e;
          if ((0, a.c)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    92076: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return h;
        },
      });
      var r = n(3238),
        i = n(79722),
        o = n(25932),
        a = n(8661),
        s = n(11061),
        c = n(69423),
        u = n(47592),
        l = n(74309),
        d = n(62273),
        f = n(58076);
      async function h(
        e,
        {
          blockNumber: t,
          blockTag: n,
          name: h,
          key: p,
          gatewayUrls: m,
          strict: b,
          universalResolverAddress: g,
        }
      ) {
        let y = g;
        if (!y) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          y = (0, a.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = {
              address: y,
              abi: r.k3,
              functionName: "resolve",
              args: [
                (0, s.NC)((0, l.T)(h)),
                (0, o.R)({
                  abi: r.nZ,
                  functionName: "text",
                  args: [(0, u.V)(h), p],
                }),
              ],
              blockNumber: t,
              blockTag: n,
            },
            c = (0, d.s)(e, f.L, "readContract"),
            b = m ? await c({ ...a, args: [...a.args, m] }) : await c(a);
          if ("0x" === b[0]) return null;
          let g = (0, i.k)({ abi: r.nZ, functionName: "text", data: b[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (b) throw e;
          if ((0, c.c)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    4301: function (e, t, n) {
      "use strict";
      n.d(t, {
        RE: function () {
          return C;
        },
      });
      var r = n(9666),
        i = n(3238),
        o = n(28068),
        a = n(6526),
        s = n(20789),
        c = n(54926),
        u = n(86113),
        l = n(32381),
        d = n(79722),
        f = n(25932),
        h = n(99186),
        p = n(8661),
        m = n(11061),
        b = n(20972),
        g = n(41258),
        y = n(37235),
        w = n(93280),
        v = n(74406),
        A = n(32666);
      async function C(e, t) {
        let {
            account: i = e.account,
            batch: u = !!e.batch?.multicall,
            blockNumber: d,
            blockTag: f = "latest",
            accessList: p,
            blobs: v,
            data: C,
            gas: P,
            gasPrice: I,
            maxFeePerBlobGas: k,
            maxFeePerGas: B,
            maxPriorityFeePerGas: O,
            nonce: M,
            to: R,
            value: S,
            stateOverride: N,
            ...T
          } = t,
          F = i ? (0, r.T)(i) : void 0;
        try {
          (0, A.F)(t);
          let n = (d ? (0, m.eC)(d) : void 0) || f,
            r = (function (e) {
              if (!e) return;
              let t = {};
              for (let { address: n, ...r } of e) {
                if (!(0, h.U)(n, { strict: !1 })) throw new o.b({ address: n });
                if (t[n]) throw new l.Nc({ address: n });
                t[n] = (function (e) {
                  let {
                      balance: t,
                      nonce: n,
                      state: r,
                      stateDiff: i,
                      code: o,
                    } = e,
                    a = {};
                  if (
                    (void 0 !== o && (a.code = o),
                    void 0 !== t && (a.balance = (0, m.eC)(t, { size: 32 })),
                    void 0 !== n && (a.nonce = (0, m.eC)(n, { size: 8 })),
                    void 0 !== r && (a.state = E(r)),
                    void 0 !== i)
                  ) {
                    if (a.state) throw new l.Z8();
                    a.stateDiff = E(i);
                  }
                  return a;
                })(r);
              }
              return t;
            })(N),
            i = e.chain?.formatters?.transactionRequest?.format,
            a = (i || w.tG)({
              ...(0, y.K)(T, { format: i }),
              from: F?.address,
              accessList: p,
              blobs: v,
              data: C,
              gas: P,
              gasPrice: I,
              maxFeePerBlobGas: k,
              maxFeePerGas: B,
              maxPriorityFeePerGas: O,
              nonce: M,
              to: R,
              value: S,
            });
          if (
            u &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: a }) &&
            !r
          )
            try {
              return await x(e, { ...a, blockNumber: d, blockTag: f });
            } catch (e) {
              if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e;
            }
          let c = await e.request({
            method: "eth_call",
            params: r ? [a, n, r] : [a, n],
          });
          if ("0x" === c) return { data: void 0 };
          return { data: c };
        } catch (s) {
          let r = (function (e) {
              if (!(e instanceof a.G)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(s),
            { offchainLookup: i, offchainLookupSignature: o } = await n
              .e(7508)
              .then(n.bind(n, 7508));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === o && R)
            return { data: await i(e, { data: r, to: R }) };
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, g.k)(e, n);
              return t instanceof b.cj ? e : t;
            })();
            return new c.cg(r, { docsPath: t, ...n });
          })(s, { ...t, account: F, chain: e.chain });
        }
      }
      async function x(e, t) {
        let { batchSize: n = 1024, wait: r = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: o,
            blockTag: a = "latest",
            data: u,
            multicallAddress: l,
            to: h,
          } = t,
          b = l;
        if (!b) {
          if (!e.chain) throw new s.pZ();
          b = (0, p.L)({
            blockNumber: o,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let g = (o ? (0, m.eC)(o) : void 0) || a,
          { schedule: y } = (0, v.S)({
            id: `${e.uid}.${g}`,
            wait: r,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, f.R)({
                  abi: i.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                o = await e.request({
                  method: "eth_call",
                  params: [{ data: r, to: b }, g],
                });
              return (0, d.k)({
                abi: i.F8,
                args: [n],
                functionName: "aggregate3",
                data: o || "0x",
              });
            },
          }),
          [{ returnData: w, success: A }] = await y({ data: u, to: h });
        if (!A) throw new c.VQ({ data: w });
        return "0x" === w ? { data: void 0 } : { data: w };
      }
      function E(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new u.W_({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new u.W_({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
    },
    38974: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return u;
        },
        X: function () {
          return c;
        },
      });
      var r = n(17265),
        i = n(62273),
        o = n(56922),
        a = n(81304),
        s = n(453);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let {
            block: n,
            chain: c = e.chain,
            request: u,
            type: l = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: n, client: e, request: u })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new r.Fz();
        let f = 10 ** (d.toString().split(".")[1]?.length ?? 0),
          h = (e) => (e * BigInt(Math.ceil(d * f))) / BigInt(f),
          p = n || (await (0, i.s)(e, a.Q, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: h,
            request: u,
            type: l,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === l) {
          if ("bigint" != typeof p.baseFeePerGas) throw new r.e5();
          let t =
              "bigint" == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, o.h)(e, { block: p, chain: c, request: u }),
            n = h(p.baseFeePerGas);
          return {
            maxFeePerGas: u?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: u?.gasPrice ?? h(await (0, i.s)(e, s.o, "getGasPrice")({})),
        };
      }
    },
    73208: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return b;
        },
      });
      var r = n(9666),
        i = n(11061),
        o = n(96465),
        a = n(34268),
        s = n(6526),
        c = n(22253);
      class u extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: i,
            gas: s,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, c.xr)({
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, o.d)(p)} ${r?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: s,
                gasPrice: void 0 !== u && `${(0, a.o)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, a.o)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, a.o)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
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
              value: "EstimateGasExecutionError",
            }),
            (this.cause = e);
        }
      }
      var l = n(20972),
        d = n(41258),
        f = n(37235),
        h = n(93280),
        p = n(32666),
        m = n(16953);
      async function b(e, t) {
        let n = t.account ?? e.account,
          o = n ? (0, r.T)(n) : void 0;
        try {
          let {
              accessList: n,
              blobs: r,
              blockNumber: a,
              blockTag: s,
              data: c,
              gas: u,
              gasPrice: l,
              maxFeePerBlobGas: d,
              maxFeePerGas: b,
              maxPriorityFeePerGas: g,
              nonce: y,
              to: w,
              value: v,
              ...A
            } = o?.type === "local" ? await (0, m.Z)(e, t) : t,
            C = (a ? (0, i.eC)(a) : void 0) || s;
          (0, p.F)(t);
          let x = e.chain?.formatters?.transactionRequest?.format,
            E = (x || h.tG)({
              ...(0, f.K)(A, { format: x }),
              from: o?.address,
              accessList: n,
              blobs: r,
              data: c,
              gas: u,
              gasPrice: l,
              maxFeePerBlobGas: d,
              maxFeePerGas: b,
              maxPriorityFeePerGas: g,
              nonce: y,
              to: w,
              value: v,
            }),
            P = await e.request({
              method: "eth_estimateGas",
              params: C ? [E, C] : [E],
            });
          return BigInt(P);
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new u(
              (() => {
                let t = (0, d.k)(e, n);
                return t instanceof l.cj ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: o, chain: e.chain });
        }
      }
    },
    56922: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
        h: function () {
          return u;
        },
      });
      var r = n(17265),
        i = n(15530),
        o = n(62273),
        a = n(81304),
        s = n(453);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: n, chain: c = e.chain, request: u } = t || {};
        if ("function" == typeof c?.fees?.defaultPriorityFee) {
          let t = n || (await (0, o.s)(e, a.Q, "getBlock")({}));
          return c.fees.defaultPriorityFee({ block: t, client: e, request: u });
        }
        if (void 0 !== c?.fees?.defaultPriorityFee)
          return c?.fees?.defaultPriorityFee;
        try {
          let t = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.y_)(t);
        } catch {
          let [t, i] = await Promise.all([
            n ? Promise.resolve(n) : (0, o.s)(e, a.Q, "getBlock")({}),
            (0, o.s)(e, s.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new r.e5();
          let c = i - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    77793: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var r = n(11061);
      async function i(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest" }
      ) {
        let o = n ? (0, r.eC)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, o || i] })
        );
      }
    },
    81304: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return a;
        },
      });
      var r = n(32879),
        i = n(11061),
        o = n(92641);
      async function a(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: a,
          includeTransactions: s,
        } = {}
      ) {
        let c = s ?? !1,
          u = void 0 !== n ? (0, i.eC)(n) : void 0,
          l = null;
        if (
          !(l = t
            ? await e.request({ method: "eth_getBlockByHash", params: [t, c] })
            : await e.request({
                method: "eth_getBlockByNumber",
                params: [u || (a ?? "latest"), c],
              }))
        )
          throw new r.f({ blockHash: t, blockNumber: n });
        return (e.chain?.formatters?.block?.format || o.Z)(l);
      }
    },
    94359: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(15530);
      async function i(e) {
        let t = await e.request({ method: "eth_chainId" });
        return (0, r.ly)(t);
      }
    },
    453: function (e, t, n) {
      "use strict";
      async function r(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      n.d(t, {
        o: function () {
          return r;
        },
      });
    },
    70259: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return o;
        },
      });
      var r = n(15530),
        i = n(11061);
      async function o(
        e,
        { address: t, blockTag: n = "latest", blockNumber: o }
      ) {
        let a = await e.request({
          method: "eth_getTransactionCount",
          params: [t, o ? (0, i.eC)(o) : n],
        });
        return (0, r.ly)(a);
      }
    },
    85987: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return h;
        },
      });
      var r = n(3238),
        i = n(23453),
        o = n(6526),
        a = n(54926),
        s = n(79722),
        c = n(25932),
        u = n(8661),
        l = n(35707),
        d = n(62273),
        f = n(58076);
      async function h(e, t) {
        let {
            allowFailure: n = !0,
            batchSize: h,
            blockNumber: p,
            blockTag: m,
            multicallAddress: b,
            stateOverride: g,
          } = t,
          y = t.contracts,
          w =
            h ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          v = b;
        if (!v) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          v = (0, u.L)({
            blockNumber: p,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let A = [[]],
          C = 0,
          x = 0;
        for (let e = 0; e < y.length; e++) {
          let { abi: t, address: r, args: i, functionName: o } = y[e];
          try {
            let e = (0, c.R)({ abi: t, args: i, functionName: o });
            (x += (e.length - 2) / 2),
              w > 0 &&
                x > w &&
                A[C].length > 0 &&
                (C++, (x = (e.length - 2) / 2), (A[C] = [])),
              (A[C] = [...A[C], { allowFailure: !0, callData: e, target: r }]);
          } catch (a) {
            let e = (0, l.S)(a, {
              abi: t,
              address: r,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: o,
            });
            if (!n) throw e;
            A[C] = [...A[C], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let E = await Promise.allSettled(
            A.map((t) =>
              (0, d.s)(
                e,
                f.L,
                "readContract"
              )({
                abi: r.F8,
                address: v,
                args: [t],
                blockNumber: p,
                blockTag: m,
                functionName: "aggregate3",
                stateOverride: g,
              })
            )
          ),
          P = [];
        for (let e = 0; e < E.length; e++) {
          let t = E[e];
          if ("rejected" === t.status) {
            if (!n) throw t.reason;
            for (let n = 0; n < A[e].length; n++)
              P.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: o, success: c } = r[t],
              { callData: u } = A[e][t],
              { abi: d, address: f, functionName: h, args: p } = y[P.length];
            try {
              if ("0x" === u) throw new i.wb();
              if (!c) throw new a.VQ({ data: o });
              let e = (0, s.k)({ abi: d, args: p, data: o, functionName: h });
              P.push(n ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, l.S)(t, {
                abi: d,
                address: f,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: h,
              });
              if (!n) throw e;
              P.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (P.length !== y.length) throw new o.G("multicall results mismatch");
        return P;
      }
    },
    58076: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return c;
        },
      });
      var r = n(79722),
        i = n(25932),
        o = n(35707),
        a = n(62273),
        s = n(4301);
      async function c(e, t) {
        let { abi: n, address: c, args: u, functionName: l, ...d } = t,
          f = (0, i.R)({ abi: n, args: u, functionName: l });
        try {
          let { data: t } = await (0, a.s)(
            e,
            s.RE,
            "call"
          )({ ...d, data: f, to: c });
          return (0, r.k)({
            abi: n,
            args: u,
            functionName: l,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.S)(e, {
            abi: n,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    16953: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(9666),
        i = n(38974),
        o = n(73208),
        a = n(81304),
        s = n(70259),
        c = n(17265),
        u = n(62273),
        l = n(32666),
        d = n(58184),
        f = n(94359);
      async function h(e, t) {
        let {
            account: n = e.account,
            chain: h,
            chainId: p,
            gas: m,
            nonce: b,
            parameters: g = ["chainId", "fees", "gas", "nonce", "type"],
            type: y,
          } = t,
          w = n ? (0, r.T)(n) : void 0,
          v = { ...t, ...(w ? { from: w?.address } : {}) };
        g.includes("chainId") &&
          (h
            ? (v.chainId = h.id)
            : void 0 !== p
            ? (v.chainId = p)
            : (v.chainId = await (0, u.s)(e, f.L, "getChainId")({}))),
          g.includes("nonce") &&
            void 0 === b &&
            w &&
            (v.nonce = await (0, u.s)(
              e,
              s.K,
              "getTransactionCount"
            )({ address: w.address, blockTag: "pending" }));
        let A = await (() => {
          if (void 0 === v.type)
            return (0, u.s)(e, a.Q, "getBlock")({ blockTag: "latest" });
        })();
        if ((g.includes("fees") || g.includes("type")) && void 0 === y)
          try {
            v.type = (0, d.l)(v);
          } catch {
            v.type = "bigint" == typeof A?.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (g.includes("fees")) {
          if ("eip1559" === v.type || "eip4844" === v.type) {
            if (
              void 0 === v.maxFeePerGas ||
              void 0 === v.maxPriorityFeePerGas
            ) {
              let { maxFeePerGas: n, maxPriorityFeePerGas: r } = await (0, i.C)(
                e,
                { block: A, chain: h, request: v }
              );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < r
              )
                throw new c.ld({ maxPriorityFeePerGas: r });
              (v.maxPriorityFeePerGas = r), (v.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.e5();
            let { gasPrice: n } = await (0, i.C)(e, {
              block: A,
              chain: h,
              request: v,
              type: "legacy",
            });
            v.gasPrice = n;
          }
        }
        return (
          g.includes("gas") &&
            void 0 === m &&
            (v.gas = await (0, u.s)(
              e,
              o.Q,
              "estimateGas"
            )({
              ...v,
              account: w ? { address: w.address, type: "json-rpc" } : void 0,
            })),
          (0, l.F)(v),
          delete v.parameters,
          v
        );
      }
    },
    26900: function (e, t, n) {
      "use strict";
      async function r(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      n.d(t, {
        p: function () {
          return r;
        },
      });
    },
    51309: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var r = n(9666),
        i = n(2412),
        o = n(11061);
      async function a(e, { account: t = e.account, message: n }) {
        if (!t) throw new i.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, r.T)(t);
        if ("local" === a.type) return a.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, o.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, o.NC)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [s, a.address] },
          { retryCount: 0 }
        );
      }
    },
    59954: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(98009).a)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 19258213,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601,
          },
        },
      });
    },
    26290: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        e: function () {
          return a;
        },
      });
      var i = n(9666);
      let o = 256;
      function a(e) {
        let {
            batch: t,
            cacheTime: n = e.pollingInterval ?? 4e3,
            ccipRead: a,
            key: s = "base",
            name: c = "Base Client",
            pollingInterval: u = 4e3,
            type: l = "base",
          } = e,
          d = e.chain,
          f = e.account ? (0, i.T)(e.account) : void 0,
          {
            config: h,
            request: p,
            value: m,
          } = e.transport({ chain: d, pollingInterval: u }),
          b = {
            account: f,
            batch: t,
            cacheTime: n,
            ccipRead: a,
            chain: d,
            key: s,
            name: c,
            pollingInterval: u,
            request: p,
            transport: { ...h, ...m },
            type: l,
            uid: (function (e = 11) {
              if (!r || o + e > 512) {
                (r = ""), (o = 0);
                for (let e = 0; e < 256; e++)
                  r += ((256 + 256 * Math.random()) | 0)
                    .toString(16)
                    .substring(1);
              }
              return r.substring(o, o++ + e);
            })(),
          };
        return Object.assign(b, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in b) delete r[e];
              let i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(b),
        });
      }
    },
    43306: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return eY;
        },
      });
      var r = n(3238),
        i = n(79722),
        o = n(25932),
        a = n(8661),
        s = n(97232),
        c = n(11061),
        u = n(69423),
        l = n(47592),
        d = n(74309),
        f = n(62273),
        h = n(58076);
      async function p(
        e,
        {
          blockNumber: t,
          blockTag: n,
          coinType: p,
          name: m,
          gatewayUrls: b,
          strict: g,
          universalResolverAddress: y,
        }
      ) {
        let w = y;
        if (!w) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          w = (0, a.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = (0, o.R)({
              abi: r.X$,
              functionName: "addr",
              ...(null != p
                ? { args: [(0, l.V)(m), BigInt(p)] }
                : { args: [(0, l.V)(m)] }),
            }),
            u = {
              address: w,
              abi: r.k3,
              functionName: "resolve",
              args: [(0, c.NC)((0, d.T)(m)), a],
              blockNumber: t,
              blockTag: n,
            },
            g = (0, f.s)(e, h.L, "readContract"),
            y = b ? await g({ ...u, args: [...u.args, b] }) : await g(u);
          if ("0x" === y[0]) return null;
          let v = (0, i.k)({
            abi: r.X$,
            args: null != p ? [(0, l.V)(m), BigInt(p)] : void 0,
            functionName: "addr",
            data: y[0],
          });
          if ("0x" === v || "0x00" === (0, s.f)(v)) return null;
          return v;
        } catch (e) {
          if (g) throw e;
          if ((0, u.c)(e, "resolve")) return null;
          throw e;
        }
      }
      var m = n(98995),
        b = n(81612);
      async function g(
        e,
        { blockNumber: t, blockTag: n, name: r, universalResolverAddress: i }
      ) {
        let o = i;
        if (!o) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          o = (0, a.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [s] = await (0, f.s)(
          e,
          h.L,
          "readContract"
        )({
          address: o,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.NC)((0, d.T)(r))],
          blockNumber: t,
          blockTag: n,
        });
        return s;
      }
      var y = n(92076),
        w = n(4301);
      function v(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: i, transport: o }) => {
                "success" === i && t === e && (n[r] = o.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function A(e) {
        let t = v(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var C = n(23453),
        x = n(6526);
      class E extends x.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FilterTypeNotSupportedError",
            });
        }
      }
      var P = n(90893),
        I = n(53353),
        k = n(10456),
        B = n(83963),
        O = n(79666),
        M = n(40675);
      let R = "/docs/contract/encodeEventTopics";
      function S(e) {
        let { abi: t, eventName: n, args: r } = e,
          i = t[0];
        if (n) {
          let e = (0, M.mE)({ abi: t, name: n });
          if (!e) throw new C.mv(n, { docsPath: R });
          i = e;
        }
        if ("event" !== i.type) throw new C.mv(void 0, { docsPath: R });
        let o = (0, O.t)(i),
          a = (0, k.n)(o),
          s = [];
        if (r && "inputs" in i) {
          let e = i.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, i) => N({ param: e, value: t[n][i] }))
                  : t[n]
                  ? N({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [a, ...s];
      }
      function N({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, I.w)((0, P.O0)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new E(e.type);
        return (0, B.E)([e], [t]);
      }
      async function T(e, t) {
        let {
            address: n,
            abi: r,
            args: i,
            eventName: o,
            fromBlock: a,
            strict: s,
            toBlock: u,
          } = t,
          l = v(e, { method: "eth_newFilter" }),
          d = o ? S({ abi: r, args: i, eventName: o }) : void 0,
          f = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof a ? (0, c.eC)(a) : a,
                toBlock: "bigint" == typeof u ? (0, c.eC)(u) : u,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: i,
          eventName: o,
          id: f,
          request: l(f),
          strict: !!s,
          type: "event",
        };
      }
      async function F(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: i,
          fromBlock: o,
          strict: a,
          toBlock: s,
        } = {}
      ) {
        let u = i ?? (r ? [r] : void 0),
          l = v(e, { method: "eth_newFilter" }),
          d = [];
        u &&
          ((d = [
            u.flatMap((e) => S({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof o ? (0, c.eC)(o) : o,
              toBlock: "bigint" == typeof s ? (0, c.eC)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: o,
          id: f,
          request: l(f),
          strict: !!a,
          toBlock: s,
          type: "event",
        };
      }
      async function j(e) {
        let t = v(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var D = n(9666),
        Q = n(35707),
        U = n(73208);
      async function G(e, t) {
        let { abi: n, address: r, args: i, functionName: a, ...s } = t,
          c = (0, o.R)({ abi: n, args: i, functionName: a });
        try {
          return await (0, f.s)(
            e,
            U.Q,
            "estimateGas"
          )({ data: c, to: r, ...s });
        } catch (t) {
          let e = s.account ? (0, D.T)(s.account) : void 0;
          throw (0, Q.S)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var L = n(38974),
        W = n(56922),
        q = n(77793);
      async function z(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var H = n(81304);
      let K = new Map(),
        V = new Map();
      async function J(e, { cacheKey: t, cacheTime: n = 1 / 0 }) {
        let r = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, K),
              r = t(e, V);
            return {
              clear: () => {
                n.clear(), r.clear();
              },
              promise: n,
              response: r,
            };
          })(t),
          i = r.response.get();
        if (i && n > 0 && new Date().getTime() - i.created.getTime() < n)
          return i.data;
        let o = r.promise.get();
        o || ((o = e()), r.promise.set(o));
        try {
          let e = await o;
          return r.response.set({ created: new Date(), data: e }), e;
        } finally {
          r.promise.clear();
        }
      }
      let Z = (e) => `blockNumber.${e}`;
      async function Y(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await J(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: Z(e.uid),
            cacheTime: t,
          })
        );
      }
      var _ = n(15530);
      async function X(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let i;
        let o = void 0 !== n ? (0, c.eC)(n) : void 0;
        return (
          (i = t
            ? await e.request({
                method: "eth_getBlockTransactionCountByHash",
                params: [t],
              })
            : await e.request({
                method: "eth_getBlockTransactionCountByNumber",
                params: [o || r],
              })),
          (0, _.ly)(i)
        );
      }
      async function $(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let i = void 0 !== n ? (0, c.eC)(n) : void 0,
          o = await e.request({ method: "eth_getCode", params: [t, i || r] });
        if ("0x" !== o) return o;
      }
      var ee = n(94359),
        et = n(97169),
        en = n(44368),
        er = n(36292);
      let ei = "/docs/contract/decodeEventLog";
      function eo(e) {
        let { abi: t, data: n, strict: r, topics: i } = e,
          o = r ?? !0,
          [a, ...s] = i;
        if (!a) throw new C.FM({ docsPath: ei });
        let c = t.find(
          (e) => "event" === e.type && a === (0, k.n)((0, O.t)(e))
        );
        if (!(c && "name" in c) || "event" !== c.type)
          throw new C.lC(a, { docsPath: ei });
        let { name: u, inputs: l } = c,
          d = l?.some((e) => !("name" in e && e.name)),
          f = d ? [] : {},
          h = l.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < h.length; e++) {
          let t = h[e],
            n = s[e];
          if (!n) throw new C.Gy({ abiItem: c, param: t });
          f[t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, er.r)([e], t) || [])[0];
          })({ param: t, value: n });
        }
        let p = l.filter((e) => !("indexed" in e && e.indexed));
        if (p.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, er.r)(p, n);
              if (e) {
                if (d) f = [...f, ...e];
                else for (let t = 0; t < p.length; t++) f[p[t].name] = e[t];
              }
            } catch (e) {
              if (o) {
                if (e instanceof C.xB || e instanceof en.lQ)
                  throw new C.SM({
                    abiItem: c,
                    data: n,
                    params: p,
                    size: (0, et.d)(n),
                  });
                throw e;
              }
            }
          else if (o)
            throw new C.SM({ abiItem: c, data: "0x", params: p, size: 0 });
        }
        return { eventName: u, args: Object.values(f).length > 0 ? f : void 0 };
      }
      function ea({ abi: e, eventName: t, logs: n, strict: r = !0 }) {
        return n
          .map((n) => {
            try {
              let i = eo({ ...n, abi: e, strict: r });
              if (t && !t.includes(i.eventName)) return null;
              return { ...i, ...n };
            } catch (i) {
              let e, t;
              if (i instanceof C.lC) return null;
              if (i instanceof C.SM || i instanceof C.Gy) {
                if (r) return null;
                (e = i.abiItem.name),
                  (t = i.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...n, args: t ? [] : {}, eventName: e };
            }
          })
          .filter(Boolean);
      }
      var es = n(95569);
      async function ec(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: i,
          event: o,
          events: a,
          args: s,
          strict: u,
        } = {}
      ) {
        let l = a ?? (o ? [o] : void 0),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) => S({ abi: [e], eventName: e.name, args: s })),
          ]),
          o && (d = d[0]));
        let f = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: d, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: d,
                    fromBlock: "bigint" == typeof r ? (0, c.eC)(r) : r,
                    toBlock: "bigint" == typeof i ? (0, c.eC)(i) : i,
                  },
                ],
              })
        ).map((e) => (0, es.U)(e));
        return l ? ea({ abi: l, logs: f, strict: u ?? !1 }) : f;
      }
      async function eu(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            blockHash: o,
            eventName: a,
            fromBlock: s,
            toBlock: c,
            strict: u,
          } = t,
          l = a ? (0, M.mE)({ abi: n, name: a }) : void 0,
          d = l ? void 0 : n.filter((e) => "event" === e.type);
        return (0, f.s)(
          e,
          ec,
          "getLogs"
        )({
          address: r,
          args: i,
          blockHash: o,
          event: l,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: u,
        });
      }
      async function el(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: i,
        }
      ) {
        var o;
        let a = n ? (0, c.eC)(n) : void 0;
        return {
          baseFeePerGas: (o = await e.request({
            method: "eth_feeHistory",
            params: [(0, c.eC)(t), a || r, i],
          })).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: o.gasUsedRatio,
          oldestBlock: BigInt(o.oldestBlock),
          reward: o.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function ed(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let i = r.map((e) => (0, es.U)(e));
        return "abi" in t && t.abi ? ea({ abi: t.abi, logs: i, strict: n }) : i;
      }
      async function ef(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, es.U)(e));
        return t.abi ? ea({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var eh = n(453);
      async function ep(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: i }
      ) {
        var o;
        let a = void 0 !== n ? (0, c.eC)(n) : void 0;
        return {
          ...(o = await e.request({
            method: "eth_getProof",
            params: [t, i, a || (r ?? "latest")],
          })),
          balance: o.balance ? BigInt(o.balance) : void 0,
          nonce: o.nonce ? (0, _.ly)(o.nonce) : void 0,
          storageProof: o.storageProof
            ? o.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function em(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: i }
      ) {
        let o = void 0 !== n ? (0, c.eC)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, i, o || r],
        });
      }
      var eb = n(22253),
        eg = n(47467);
      async function ey(
        e,
        { blockHash: t, blockNumber: n, blockTag: r, hash: i, index: o }
      ) {
        let a = r || "latest",
          s = void 0 !== n ? (0, c.eC)(n) : void 0,
          u = null;
        if (
          (i
            ? (u = await e.request({
                method: "eth_getTransactionByHash",
                params: [i],
              }))
            : t
            ? (u = await e.request({
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, c.eC)(o)],
              }))
            : (s || a) &&
              (u = await e.request({
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [s || a, (0, c.eC)(o)],
              })),
          !u)
        )
          throw new eb.Bh({
            blockHash: t,
            blockNumber: n,
            blockTag: a,
            hash: i,
            index: o,
          });
        return (e.chain?.formatters?.transaction?.format || eg.Tr)(u);
      }
      async function ew(e, { hash: t, transactionReceipt: n }) {
        let [r, i] = await Promise.all([
            (0, f.s)(e, Y, "getBlockNumber")({}),
            t ? (0, f.s)(e, ey, "getBlockNumber")({ hash: t }) : void 0,
          ]),
          o = n?.blockNumber || i?.blockNumber;
        return o ? r - o + 1n : 0n;
      }
      var ev = n(70259),
        eA = n(54779);
      async function eC(e, { hash: t }) {
        let n = await e.request({
          method: "eth_getTransactionReceipt",
          params: [t],
        });
        if (!n) throw new eb.Yb({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || eA.f)(n);
      }
      var ex = n(85987);
      async function eE(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            dataSuffix: s,
            functionName: c,
            ...u
          } = t,
          l = u.account ? (0, D.T)(u.account) : e.account,
          d = (0, o.R)({ abi: n, args: a, functionName: c });
        try {
          let { data: o } = await (0, f.s)(
              e,
              w.RE,
              "call"
            )({
              batch: !1,
              data: `${d}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...u,
              account: l,
            }),
            h = (0, i.k)({ abi: n, args: a, functionName: c, data: o || "0x" }),
            p = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: h,
            request: {
              abi: p,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: c,
              ...u,
              account: l,
            },
          };
        } catch (e) {
          throw (0, Q.S)(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: c,
            sender: l?.address,
          });
        }
      }
      async function eP(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      var eI = n(71870),
        ek = n(54926);
      BigInt(0), BigInt(1), BigInt(2);
      var eB = n(10757),
        eO = n(31650);
      async function eM(e, { address: t, hash: n, signature: i, ...o }) {
        let a = (0, eB.v)(i) ? i : (0, c.NC)(i);
        try {
          let { data: i } = await (0, f.s)(
            e,
            w.RE,
            "call"
          )({
            data: (0, eO.w)({
              abi: r.$o,
              args: [t, n, a],
              bytecode:
                "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
            }),
            ...o,
          });
          return (function (e, t) {
            let n = (0, eB.v)(e) ? (0, P.O0)(e) : e;
            return (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
              return !0;
            })(n, (0, eB.v)("0x1") ? (0, P.O0)("0x1") : "0x1");
          })(i ?? "0x0", "0x1");
        } catch (e) {
          if (e instanceof ek.cg) return !1;
          throw e;
        }
      }
      async function eR(e, { address: t, message: n, signature: r, ...i }) {
        return eM(e, {
          address: t,
          hash: (function (e, t) {
            let n =
                "string" == typeof e
                  ? (0, P.qX)(e)
                  : e.raw instanceof Uint8Array
                  ? e.raw
                  : (0, P.O0)(e.raw),
              r = (0, P.qX)(`\x19Ethereum Signed Message:
${n.length}`);
            return (0, I.w)((0, eI.zo)([r, n]), void 0);
          })(n),
          signature: r,
          ...i,
        });
      }
      var eS = n(6911);
      function eN({ data: e, primaryType: t, types: n }) {
        let r = (function e({ data: t, primaryType: n, types: r }) {
          let i = [{ type: "bytes32" }],
            o = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, c.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          o = i?.[0];
                        if (r.has(o) || void 0 === n[o]) return r;
                        for (let t of (r.add(o), n[o]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, I.w)(n);
              })({ primaryType: n, types: r }),
            ];
          for (let a of r[n]) {
            let [n, s] = (function t({ types: n, name: r, type: i, value: o }) {
              if (void 0 !== n[i])
                return [
                  { type: "bytes32" },
                  (0, I.w)(e({ data: o, primaryType: i, types: n })),
                ];
              if ("bytes" === i) {
                let e = o.length % 2 ? "0" : "";
                return (
                  (o = `0x${e + o.slice(2)}`),
                  [{ type: "bytes32" }, (0, I.w)(o)]
                );
              }
              if ("string" === i)
                return [{ type: "bytes32" }, (0, I.w)((0, c.NC)(o))];
              if (i.lastIndexOf("]") === i.length - 1) {
                let e = i.slice(0, i.lastIndexOf("[")),
                  a = o.map((i) => t({ name: r, type: e, types: n, value: i }));
                return [
                  { type: "bytes32" },
                  (0, I.w)(
                    (0, B.E)(
                      a.map(([e]) => e),
                      a.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: i }, o];
            })({ types: r, name: a.name, type: a.type, value: t[a.name] });
            i.push(n), o.push(s);
          }
          return (0, B.E)(i, o);
        })({ data: e, primaryType: t, types: n });
        return (0, I.w)(r);
      }
      async function eT(e, t) {
        let {
          address: n,
          signature: r,
          message: i,
          primaryType: o,
          types: a,
          domain: s,
          ...c
        } = t;
        return eM(e, {
          address: n,
          hash: (function (e) {
            let { domain: t = {}, message: n, primaryType: r } = e,
              i = { EIP712Domain: (0, eS.cj)({ domain: t }), ...e.types };
            (0, eS.iC)({ domain: t, message: n, primaryType: r, types: i });
            let o = ["0x1901"];
            return (
              t &&
                o.push(
                  (function ({ domain: e, types: t }) {
                    return eN({
                      data: e,
                      primaryType: "EIP712Domain",
                      types: t,
                    });
                  })({ domain: t, types: i })
                ),
              "EIP712Domain" !== r &&
                o.push(eN({ data: n, primaryType: r, types: i })),
              (0, I.w)((0, eI.zo)(o))
            );
          })({ message: i, primaryType: o, types: a, domain: s }),
          signature: r,
          ...c,
        });
      }
      var eF = n(32879);
      let ej = new Map(),
        eD = new Map(),
        eQ = 0;
      function eU(e, t, n) {
        let r = ++eQ,
          i = () => ej.get(e) || [],
          o = () => {
            let t = i();
            ej.set(
              e,
              t.filter((e) => e.id !== r)
            );
          },
          a = () => {
            let t = eD.get(e);
            1 === i().length && t && t(), o();
          },
          s = i();
        if ((ej.set(e, [...s, { id: r, fns: t }]), s && s.length > 0)) return a;
        let c = {};
        for (let e in t)
          c[e] = (...t) => {
            let n = i();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let u = n(c);
        return "function" == typeof u && eD.set(e, u), a;
      }
      var eG = n(49307),
        eL = n(50696),
        eW = n(98602);
      function eq(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
        let i = !0,
          o = () => (i = !1);
        return (
          (async () => {
            let a;
            t && (a = await e({ unpoll: o }));
            let s = (await n?.(a)) ?? r;
            await (0, eW.D)(s);
            let c = async () => {
              i && (await e({ unpoll: o }), await (0, eW.D)(r), c());
            };
            c();
          })(),
          o
        );
      }
      function ez(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: r,
          onError: i,
          poll: o,
          pollingInterval: a = e.pollingInterval,
        }
      ) {
        let s;
        return (void 0 !== o ? o : "webSocket" !== e.transport.type)
          ? eU(
              (0, eL.P)(["watchBlockNumber", e.uid, t, n, a]),
              { onBlockNumber: r, onError: i },
              (r) =>
                eq(
                  async () => {
                    try {
                      let t = await (0, f.s)(
                        e,
                        Y,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (s) {
                        if (t === s) return;
                        if (t - s > 1 && n)
                          for (let e = s + 1n; e < t; e++)
                            r.onBlockNumber(e, s), (s = e);
                      }
                      (!s || t > s) && (r.onBlockNumber(t, s), (s = t));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: a }
                )
            )
          : eU(
              (0, eL.P)(["watchBlockNumber", e.uid, t, n]),
              { onBlockNumber: r, onError: i },
              (t) => {
                let n = !0,
                  r = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let { unsubscribe: i } = await e.transport.subscribe({
                        params: ["newHeads"],
                        onData(e) {
                          if (!n) return;
                          let r = (0, _.y_)(e.result?.number);
                          t.onBlockNumber(r, s), (s = r);
                        },
                        onError(e) {
                          t.onError?.(e);
                        },
                      });
                      (r = i), n || r();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => r()
                );
              }
            );
      }
      async function eH(
        e,
        {
          confirmations: t = 1,
          hash: n,
          onReplaced: r,
          pollingInterval: i = e.pollingInterval,
          retryCount: o = 6,
          retryDelay: a = ({ count: e }) => 200 * ~~(1 << e),
          timeout: s,
        }
      ) {
        let c, u, l;
        let d = (0, eL.P)(["waitForTransactionReceipt", e.uid, n]),
          h = !1;
        return new Promise((p, m) => {
          s && setTimeout(() => m(new eb.mc({ hash: n })), s);
          let b = eU(d, { onReplaced: r, resolve: p, reject: m }, (r) => {
            let s = (0, f.s)(
              e,
              ez,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: i,
              async onBlockNumber(i) {
                if (h) return;
                let d = i,
                  p = (e) => {
                    s(), e(), b();
                  };
                try {
                  if (l) {
                    if (t > 1 && (!l.blockNumber || d - l.blockNumber + 1n < t))
                      return;
                    p(() => r.resolve(l));
                    return;
                  }
                  if (
                    (c ||
                      ((h = !0),
                      await (0, eG.J)(
                        async () => {
                          (c = await (0, f.s)(
                            e,
                            ey,
                            "getTransaction"
                          )({ hash: n })).blockNumber && (d = c.blockNumber);
                        },
                        { delay: a, retryCount: o }
                      ),
                      (h = !1)),
                    (l = await (0, f.s)(
                      e,
                      eC,
                      "getTransactionReceipt"
                    )({ hash: n })),
                    t > 1 && (!l.blockNumber || d - l.blockNumber + 1n < t))
                  )
                    return;
                  p(() => r.resolve(l));
                } catch (n) {
                  if (n instanceof eb.Bh || n instanceof eb.Yb) {
                    if (!c) {
                      h = !1;
                      return;
                    }
                    try {
                      (u = c), (h = !0);
                      let n = await (0, eG.J)(
                        () =>
                          (0, f.s)(
                            e,
                            H.Q,
                            "getBlock"
                          )({ blockNumber: d, includeTransactions: !0 }),
                        {
                          delay: a,
                          retryCount: o,
                          shouldRetry: ({ error: e }) => e instanceof eF.f,
                        }
                      );
                      h = !1;
                      let i = n.transactions.find(
                        ({ from: e, nonce: t }) => e === u.from && t === u.nonce
                      );
                      if (
                        !i ||
                        ((l = await (0, f.s)(
                          e,
                          eC,
                          "getTransactionReceipt"
                        )({ hash: i.hash })),
                        t > 1 && (!l.blockNumber || d - l.blockNumber + 1n < t))
                      )
                        return;
                      let s = "replaced";
                      i.to === u.to && i.value === u.value
                        ? (s = "repriced")
                        : i.from === i.to &&
                          0n === i.value &&
                          (s = "cancelled"),
                        p(() => {
                          r.onReplaced?.({
                            reason: s,
                            replacedTransaction: u,
                            transaction: i,
                            transactionReceipt: l,
                          }),
                            r.resolve(l);
                        });
                    } catch (e) {
                      p(() => r.reject(e));
                    }
                  } else p(() => r.reject(n));
                }
              },
            });
          });
        });
      }
      var eK = n(92641),
        eV = n(12745),
        eJ = n(16953),
        eZ = n(26900);
      function eY(e) {
        return {
          call: (t) => (0, w.RE)(e, t),
          createBlockFilter: () => A(e),
          createContractEventFilter: (t) => T(e, t),
          createEventFilter: (t) => F(e, t),
          createPendingTransactionFilter: () => j(e),
          estimateContractGas: (t) => G(e, t),
          estimateGas: (t) => (0, U.Q)(e, t),
          getBalance: (t) => (0, q.s)(e, t),
          getBlobBaseFee: () => z(e),
          getBlock: (t) => (0, H.Q)(e, t),
          getBlockNumber: (t) => Y(e, t),
          getBlockTransactionCount: (t) => X(e, t),
          getBytecode: (t) => $(e, t),
          getChainId: () => (0, ee.L)(e),
          getContractEvents: (t) => eu(e, t),
          getEnsAddress: (t) => p(e, t),
          getEnsAvatar: (t) => (0, m.r)(e, t),
          getEnsName: (t) => (0, b.w)(e, t),
          getEnsResolver: (t) => g(e, t),
          getEnsText: (t) => (0, y.g)(e, t),
          getFeeHistory: (t) => el(e, t),
          estimateFeesPerGas: (t) => (0, L.X)(e, t),
          getFilterChanges: (t) => ed(e, t),
          getFilterLogs: (t) => ef(e, t),
          getGasPrice: () => (0, eh.o)(e),
          getLogs: (t) => ec(e, t),
          getProof: (t) => ep(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, W._)(e, t),
          getStorageAt: (t) => em(e, t),
          getTransaction: (t) => ey(e, t),
          getTransactionConfirmations: (t) => ew(e, t),
          getTransactionCount: (t) => (0, ev.K)(e, t),
          getTransactionReceipt: (t) => eC(e, t),
          multicall: (t) => (0, ex.A)(e, t),
          prepareTransactionRequest: (t) => (0, eJ.Z)(e, t),
          readContract: (t) => (0, h.L)(e, t),
          sendRawTransaction: (t) => (0, eZ.p)(e, t),
          simulateContract: (t) => eE(e, t),
          verifyMessage: (t) => eR(e, t),
          verifyTypedData: (t) => eT(e, t),
          uninstallFilter: (t) => eP(e, t),
          waitForTransactionReceipt: (t) => eH(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: i,
                onError: o,
                includeTransactions: a,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let u, l, d;
              let h = void 0 !== s ? s : "webSocket" !== e.transport.type,
                p = a ?? !1;
              return h
                ? eU(
                    (0, eL.P)(["watchBlocks", e.uid, t, n, r, p, c]),
                    { onBlock: i, onError: o },
                    (i) =>
                      eq(
                        async () => {
                          try {
                            let r = await (0, f.s)(
                              e,
                              H.Q,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: p });
                            if (r.number && u?.number) {
                              if (r.number === u.number) return;
                              if (r.number - u.number > 1 && n)
                                for (
                                  let t = u?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await (0, f.s)(
                                    e,
                                    H.Q,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: p });
                                  i.onBlock(n, u), (u = n);
                                }
                            }
                            (!u?.number ||
                              ("pending" === t && !r?.number) ||
                              (r.number && r.number > u.number)) &&
                              (i.onBlock(r, u), (u = r));
                          } catch (e) {
                            i.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                  )
                : ((l = !0),
                  (d = () => (l = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newHeads"],
                        onData(t) {
                          if (!l) return;
                          let n = (e.chain?.formatters?.block?.format || eK.Z)(
                            t.result
                          );
                          i(n, u), (u = n);
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (d = t), l || d();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => d());
            })(e, t),
          watchBlockNumber: (t) => ez(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: i,
                batch: o = !0,
                eventName: a,
                onError: s,
                onLogs: c,
                poll: u,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              } = t;
              return (void 0 !== u ? u : "webSocket" !== e.transport.type)
                ? (() => {
                    let t = d ?? !1;
                    return eU(
                      (0, eL.P)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        l,
                        t,
                      ]),
                      { onLogs: c, onError: s },
                      (s) => {
                        let c, u;
                        let d = !1,
                          h = eq(
                            async () => {
                              if (!d) {
                                try {
                                  u = await (0, f.s)(
                                    e,
                                    T,
                                    "createContractEventFilter"
                                  )({
                                    abi: n,
                                    address: r,
                                    args: i,
                                    eventName: a,
                                    strict: t,
                                  });
                                } catch {}
                                d = !0;
                                return;
                              }
                              try {
                                let l;
                                if (u)
                                  l = await (0, f.s)(
                                    e,
                                    ed,
                                    "getFilterChanges"
                                  )({ filter: u });
                                else {
                                  let o = await (0, f.s)(
                                    e,
                                    Y,
                                    "getBlockNumber"
                                  )({});
                                  (l =
                                    c && c !== o
                                      ? await (0, f.s)(
                                          e,
                                          eu,
                                          "getContractEvents"
                                        )({
                                          abi: n,
                                          address: r,
                                          args: i,
                                          eventName: a,
                                          fromBlock: c + 1n,
                                          toBlock: o,
                                          strict: t,
                                        })
                                      : []),
                                    (c = o);
                                }
                                if (0 === l.length) return;
                                if (o) s.onLogs(l);
                                else for (let e of l) s.onLogs([e]);
                              } catch (e) {
                                u && e instanceof eV.yR && (d = !1),
                                  s.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: l }
                          );
                        return async () => {
                          u &&
                            (await (0, f.s)(
                              e,
                              eP,
                              "uninstallFilter"
                            )({ filter: u })),
                            h();
                        };
                      }
                    );
                  })()
                : (() => {
                    let t = (0, eL.P)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        l,
                        d ?? !1,
                      ]),
                      u = !0,
                      f = () => (u = !1);
                    return eU(
                      t,
                      { onLogs: c, onError: s },
                      (t) => (
                        (async () => {
                          try {
                            let o = a
                                ? S({ abi: n, eventName: a, args: i })
                                : [],
                              { unsubscribe: s } = await e.transport.subscribe({
                                params: ["logs", { address: r, topics: o }],
                                onData(e) {
                                  if (!u) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: i } = eo({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: d,
                                      }),
                                      o = (0, es.U)(r, {
                                        args: i,
                                        eventName: e,
                                      });
                                    t.onLogs([o]);
                                  } catch (o) {
                                    let e, n;
                                    if (
                                      o instanceof C.SM ||
                                      o instanceof C.Gy
                                    ) {
                                      if (d) return;
                                      (e = o.abiItem.name),
                                        (n = o.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let i = (0, es.U)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([i]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (f = s), u || f();
                          } catch (e) {
                            s?.(e);
                          }
                        })(),
                        () => f()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: i,
                events: o,
                onError: a,
                onLogs: s,
                poll: c,
                pollingInterval: u = e.pollingInterval,
                strict: l,
              }
            ) {
              let d, h;
              let p = void 0 !== c ? c : "webSocket" !== e.transport.type,
                m = l ?? !1;
              return p
                ? eU(
                    (0, eL.P)(["watchEvent", t, n, r, e.uid, i, u]),
                    { onLogs: s, onError: a },
                    (a) => {
                      let s, c;
                      let l = !1,
                        d = eq(
                          async () => {
                            if (!l) {
                              try {
                                c = await (0, f.s)(
                                  e,
                                  F,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: i,
                                  events: o,
                                  strict: m,
                                });
                              } catch {}
                              l = !0;
                              return;
                            }
                            try {
                              let u;
                              if (c)
                                u = await (0, f.s)(
                                  e,
                                  ed,
                                  "getFilterChanges"
                                )({ filter: c });
                              else {
                                let r = await (0, f.s)(
                                  e,
                                  Y,
                                  "getBlockNumber"
                                )({});
                                (u =
                                  s && s !== r
                                    ? await (0, f.s)(
                                        e,
                                        ec,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: i,
                                        events: o,
                                        fromBlock: s + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (s = r);
                              }
                              if (0 === u.length) return;
                              if (r) a.onLogs(u);
                              else for (let e of u) a.onLogs([e]);
                            } catch (e) {
                              c && e instanceof eV.yR && (l = !1),
                                a.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        c &&
                          (await (0, f.s)(
                            e,
                            eP,
                            "uninstallFilter"
                          )({ filter: c })),
                          d();
                      };
                    }
                  )
                : ((d = !0),
                  (h = () => (d = !1)),
                  (async () => {
                    try {
                      let r = o ?? (i ? [i] : void 0),
                        c = [];
                      r &&
                        ((c = [
                          r.flatMap((e) =>
                            S({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        i && (c = c[0]));
                      let { unsubscribe: u } = await e.transport.subscribe({
                        params: ["logs", { address: t, topics: c }],
                        onData(e) {
                          if (!d) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = eo({
                                abi: r ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              i = (0, es.U)(t, { args: n, eventName: e });
                            s([i]);
                          } catch (i) {
                            let e, n;
                            if (i instanceof C.SM || i instanceof C.Gy) {
                              if (l) return;
                              (e = i.abiItem.name),
                                (n = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, es.U)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            s([r]);
                          }
                        },
                        onError(e) {
                          a?.(e);
                        },
                      });
                      (h = u), d || h();
                    } catch (e) {
                      a?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: i,
                pollingInterval: o = e.pollingInterval,
              }
            ) {
              let a, s;
              return (void 0 !== i ? i : "webSocket" !== e.transport.type)
                ? eU(
                    (0, eL.P)(["watchPendingTransactions", e.uid, t, o]),
                    { onTransactions: r, onError: n },
                    (n) => {
                      let r;
                      let i = eq(
                        async () => {
                          try {
                            if (!r)
                              try {
                                r = await (0, f.s)(
                                  e,
                                  j,
                                  "createPendingTransactionFilter"
                                )({});
                                return;
                              } catch (e) {
                                throw (i(), e);
                              }
                            let o = await (0, f.s)(
                              e,
                              ed,
                              "getFilterChanges"
                            )({ filter: r });
                            if (0 === o.length) return;
                            if (t) n.onTransactions(o);
                            else for (let e of o) n.onTransactions([e]);
                          } catch (e) {
                            n.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: o }
                      );
                      return async () => {
                        r &&
                          (await (0, f.s)(
                            e,
                            eP,
                            "uninstallFilter"
                          )({ filter: r })),
                          i();
                      };
                    }
                  )
                : ((a = !0),
                  (s = () => (a = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!a) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), a || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
    },
    62428: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var r = n(6526),
        i = n(89558),
        o = n(12745),
        a = n(49307);
      function s(
        {
          key: e,
          name: t,
          request: n,
          retryCount: s = 3,
          retryDelay: c = 150,
          timeout: u,
          type: l,
        },
        d
      ) {
        return {
          config: {
            key: e,
            name: t,
            request: n,
            retryCount: s,
            retryDelay: c,
            timeout: u,
            type: l,
          },
          request: (function (e, t = {}) {
            return async (n, s = {}) => {
              let { retryDelay: c = 150, retryCount: u = 3 } = { ...t, ...s };
              return (0, a.J)(
                async () => {
                  try {
                    return await e(n);
                  } catch (e) {
                    switch (e.code) {
                      case o.s7.code:
                        throw new o.s7(e);
                      case o.B.code:
                        throw new o.B(e);
                      case o.LX.code:
                        throw new o.LX(e);
                      case o.nY.code:
                        throw new o.nY(e);
                      case o.XS.code:
                        throw new o.XS(e);
                      case o.yR.code:
                        throw new o.yR(e);
                      case o.Og.code:
                        throw new o.Og(e);
                      case o.pT.code:
                        throw new o.pT(e);
                      case o.KB.code:
                        throw new o.KB(e);
                      case o.gS.code:
                        throw new o.gS(e);
                      case o.Pv.code:
                        throw new o.Pv(e);
                      case o.GD.code:
                        throw new o.GD(e);
                      case o.ab.code:
                        throw new o.ab(e);
                      case o.PE.code:
                        throw new o.PE(e);
                      case o.Ts.code:
                        throw new o.Ts(e);
                      case o.u5.code:
                        throw new o.u5(e);
                      case o.I0.code:
                        throw new o.I0(e);
                      case o.x3.code:
                        throw new o.x3(e);
                      case 5e3:
                        throw new o.ab(e);
                      default:
                        if (e instanceof r.G) throw e;
                        throw new o.ir(e);
                    }
                  }
                },
                {
                  delay: ({ count: e, error: t }) => {
                    if (t && t instanceof i.Gg) {
                      let e = t?.headers?.get("Retry-After");
                      if (e?.match(/\d/)) return 1e3 * parseInt(e);
                    }
                    return ~~(1 << e) * c;
                  },
                  retryCount: u,
                  shouldRetry: ({ error: e }) =>
                    "code" in e && "number" == typeof e.code
                      ? -1 === e.code ||
                        e.code === o.Pv.code ||
                        e.code === o.XS.code
                      : !(e instanceof i.Gg) ||
                        !e.status ||
                        403 === e.status ||
                        408 === e.status ||
                        413 === e.status ||
                        429 === e.status ||
                        500 === e.status ||
                        502 === e.status ||
                        503 === e.status ||
                        504 === e.status,
                }
              );
            };
          })(n, { retryCount: s, retryDelay: c }),
          value: d,
        };
      }
    },
    1155: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return d;
        },
      });
      var r = n(89558),
        i = n(6526);
      class o extends i.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro" }
          );
        }
      }
      var a = n(74406),
        s = n(1507),
        c = n(50696);
      let u = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var l = n(62428);
      function d(e, t = {}) {
        let {
          batch: n,
          fetchOptions: i,
          key: d = "http",
          name: f = "HTTP JSON-RPC",
          onFetchRequest: h,
          onFetchResponse: p,
          retryDelay: m,
        } = t;
        return ({ chain: b, retryCount: g, timeout: y }) => {
          let { batchSize: w = 1e3, wait: v = 0 } =
              "object" == typeof n ? n : {},
            A = t.retryCount ?? g,
            C = y ?? t.timeout ?? 1e4,
            x = e || b?.rpcUrls.default.http[0];
          if (!x) throw new o();
          let E = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: i,
                    fetchOptions: o = {},
                    onRequest: a = t.onRequest,
                    onResponse: l = t.onResponse,
                    timeout: d = t.timeout ?? 1e4,
                  } = n,
                  {
                    headers: f,
                    method: h,
                    signal: p,
                  } = { ...t.fetchOptions, ...o };
                try {
                  let t;
                  let n = await (0, s.F)(
                    async ({ signal: t }) => {
                      let n = new Request(e, {
                        ...o,
                        body: Array.isArray(i)
                          ? (0, c.P)(
                              i.map((e) => ({
                                jsonrpc: "2.0",
                                id: e.id ?? u.take(),
                                ...e,
                              }))
                            )
                          : (0, c.P)({
                              jsonrpc: "2.0",
                              id: i.id ?? u.take(),
                              ...i,
                            }),
                        headers: { ...f, "Content-Type": "application/json" },
                        method: h || "POST",
                        signal: p || (d > 0 ? t : null),
                      });
                      return a && (await a(n)), await fetch(n);
                    },
                    {
                      errorInstance: new r.W5({ body: i, url: e }),
                      timeout: d,
                      signal: !0,
                    }
                  );
                  if (
                    (l && (await l(n)),
                    (t = n.headers
                      .get("Content-Type")
                      ?.startsWith("application/json")
                      ? await n.json()
                      : await n.text()),
                    !n.ok)
                  )
                    throw new r.Gg({
                      body: i,
                      details: (0, c.P)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Gg || t instanceof r.W5) throw t;
                  throw new r.Gg({ body: i, details: t.message, url: e });
                }
              },
            };
          })(x, { fetchOptions: i, onRequest: h, onResponse: p, timeout: C });
          return (0, l.q)(
            {
              key: d,
              name: f,
              async request({ method: t, params: i }) {
                let o = { method: t, params: i },
                  { schedule: s } = (0, a.S)({
                    id: `${e}`,
                    wait: v,
                    shouldSplitBatch: (e) => e.length > w,
                    fn: (e) => E.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  c = async (e) => (n ? s(e) : [await E.request({ body: e })]),
                  [{ error: u, result: l }] = await c(o);
                if (u) throw new r.bs({ body: o, error: u, url: x });
                return l;
              },
              retryCount: A,
              retryDelay: m,
              timeout: C,
              type: "http",
            },
            { fetchOptions: i, url: x }
          );
        };
      }
    },
    3238: function (e, t, n) {
      "use strict";
      n.d(t, {
        $o: function () {
          return u;
        },
        F8: function () {
          return r;
        },
        Wo: function () {
          return l;
        },
        X$: function () {
          return c;
        },
        du: function () {
          return a;
        },
        k3: function () {
          return o;
        },
        nZ: function () {
          return s;
        },
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        i = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        o = [
          ...i,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        a = [
          ...i,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        s = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        c = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { internalType: "address", name: "_signer", type: "address" },
              { internalType: "bytes32", name: "_hash", type: "bytes32" },
              { internalType: "bytes", name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
        ],
        l = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    76070: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return r;
        },
        Up: function () {
          return i;
        },
        hZ: function () {
          return o;
        },
      });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        i = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    95131: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bd: function () {
          return o;
        },
        Zn: function () {
          return i;
        },
        ez: function () {
          return r;
        },
      });
      let r = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    23453: function (e, t, n) {
      "use strict";
      n.d(t, {
        CI: function () {
          return E;
        },
        FM: function () {
          return p;
        },
        Gy: function () {
          return C;
        },
        KY: function () {
          return v;
        },
        M4: function () {
          return d;
        },
        MX: function () {
          return y;
        },
        S4: function () {
          return w;
        },
        SM: function () {
          return A;
        },
        cO: function () {
          return s;
        },
        dh: function () {
          return x;
        },
        fM: function () {
          return a;
        },
        fs: function () {
          return f;
        },
        gr: function () {
          return l;
        },
        hn: function () {
          return P;
        },
        lC: function () {
          return m;
        },
        mv: function () {
          return b;
        },
        wM: function () {
          return I;
        },
        wb: function () {
          return u;
        },
        xB: function () {
          return c;
        },
        xL: function () {
          return g;
        },
        yP: function () {
          return h;
        },
      });
      var r = n(79666),
        i = n(97169),
        o = n(6526);
      class a extends o.G {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorNotFoundError",
            });
        }
      }
      class s extends o.G {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorParamsNotFoundError",
            });
        }
      }
      class c extends o.G {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingDataSizeTooSmallError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends o.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingZeroDataError",
            });
        }
      }
      class l extends o.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingArrayLengthMismatchError",
            });
        }
      }
      class d extends o.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.d)(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingBytesSizeMismatchError",
            });
        }
      }
      class f extends o.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingLengthMismatchError",
            });
        }
      }
      class h extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiErrorSignatureNotFoundError",
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class p extends o.G {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureEmptyTopicsError",
            });
        }
      }
      class m extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureNotFoundError",
            });
        }
      }
      class b extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventNotFoundError",
            });
        }
      }
      class g extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionNotFoundError",
            });
        }
      }
      class y extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionOutputsNotFoundError",
            });
        }
      }
      class w extends o.G {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.t)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.t)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItemAmbiguityError",
            });
        }
      }
      class v extends o.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytesSizeMismatchError",
            });
        }
      }
      class A extends o.G {
        constructor({ abiItem: e, data: t, params: n, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.h)(n, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogDataMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = i);
        }
      }
      class C extends o.G {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.t)(e, { includeName: !0 })}".`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogTopicsMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class x extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiEncodingType",
            });
        }
      }
      class E extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiDecodingType",
            });
        }
      }
      class P extends o.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidArrayError",
            });
        }
      }
      class I extends o.G {
        constructor(e) {
          super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidDefinitionTypeError",
            });
        }
      }
    },
    2412: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return i;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
            { docsPath: e, docsSlug: "account" }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountNotFoundError",
            });
        }
      }
    },
    28068: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAddressError",
            });
        }
      }
    },
    6526: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(48159);
      class i extends Error {
        constructor(e, t = {}) {
          super(),
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ViemError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, r.bo)(),
            });
          let n =
              t.cause instanceof i
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o = (t.cause instanceof i && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: https://viem.sh${o}${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    32879: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BlockNotFoundError",
            });
        }
      }
    },
    20789: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bk: function () {
          return a;
        },
        Yl: function () {
          return o;
        },
        hJ: function () {
          return c;
        },
        mm: function () {
          return i;
        },
        pZ: function () {
          return s;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDoesNotSupportContract",
            });
        }
      }
      class o extends r.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainMismatchError",
            });
        }
      }
      class a extends r.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotFoundError",
            });
        }
      }
      class s extends r.G {
        constructor() {
          super("No chain was provided to the Client."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ClientChainNotConfiguredError",
            });
        }
      }
      class c extends r.G {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? `Chain ID "${e}" is invalid.`
              : "Chain ID is invalid."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidChainIdError",
            });
        }
      }
    },
    54926: function (e, t, n) {
      "use strict";
      n.d(t, {
        cg: function () {
          return g;
        },
        uq: function () {
          return y;
        },
        Lu: function () {
          return w;
        },
        Dk: function () {
          return v;
        },
        VQ: function () {
          return A;
        },
      });
      var r = n(9666),
        i = n(76070),
        o = n(88440),
        a = n(79666),
        s = n(50696);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.P)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var u = n(40675),
        l = n(96465),
        d = n(34268),
        f = n(23453),
        h = n(6526),
        p = n(32381),
        m = n(22253),
        b = n(48159);
      class g extends h.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: o,
            gas: a,
            gasPrice: s,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: f,
            to: h,
            value: b,
            stateOverride: g,
          }
        ) {
          let y = t ? (0, r.T)(t) : void 0,
            w = (0, m.xr)({
              from: y?.address,
              to: h,
              value:
                void 0 !== b &&
                `${(0, l.d)(b)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: a,
              gasPrice: void 0 !== s && `${(0, d.o)(s)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.o)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.o)(u)} gwei`,
              nonce: f,
            });
          g &&
            (w += `
${(0, p.Bj)(g)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
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
              value: "CallExecutionError",
            }),
            (this.cause = e);
        }
      }
      class y extends h.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: i,
            functionName: o,
            sender: s,
          }
        ) {
          let l = (0, u.mE)({ abi: t, args: n, name: o }),
            d = l
              ? c({
                  abiItem: l,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0;
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Contract Call:",
                (0, m.xr)({
                  address: r && (0, b.CR)(r),
                  function: l ? (0, a.t)(l, { includeName: !0 }) : void 0,
                  args:
                    d &&
                    "()" !== d &&
                    `${[...Array(o?.length ?? 0).keys()]
                      .map(() => " ")
                      .join("")}${d}`,
                  sender: s,
                }),
              ].filter(Boolean),
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
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
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionExecutionError",
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class w extends h.G {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, u, l, d, h;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (h = (0, o.p)({ abi: e, data: t }));
              if ("Error" === r) l = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                l = i.$[e];
              } else {
                let e = n ? (0, a.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? c({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else r && (l = r);
          s instanceof f.yP &&
            ((d = s.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              { cause: s, metaMessages: u }
            ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionRevertedError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = h),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class v extends h.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionZeroDataError",
            });
        }
      }
      class A extends h.G {
        constructor({ data: e, message: t }) {
          super(t || ""),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RawContractError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    44368: function (e, t, n) {
      "use strict";
      n.d(t, {
        KD: function () {
          return a;
        },
        T_: function () {
          return i;
        },
        lQ: function () {
          return o;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NegativeOffsetError",
            });
        }
      }
      class o extends r.G {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PositionOutOfBoundsError",
            });
        }
      }
      class a extends r.G {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RecursiveReadLimitExceededError",
            });
        }
      }
    },
    86113: function (e, t, n) {
      "use strict";
      n.d(t, {
        $s: function () {
          return o;
        },
        W_: function () {
          return a;
        },
        mV: function () {
          return i;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SliceOffsetOutOfBoundsError",
            });
        }
      }
      class o extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeExceedsPaddingSizeError",
            });
        }
      }
      class a extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesLengthError",
            });
        }
      }
    },
    24907: function (e, t, n) {
      "use strict";
      n.d(t, {
        J5: function () {
          return i;
        },
        M6: function () {
          return a;
        },
        yr: function () {
          return o;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntegerOutOfRangeError",
            });
        }
      }
      class o extends r.G {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesBooleanError",
            });
        }
      }
      class a extends r.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeOverflowError",
            });
        }
      }
    },
    17265: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fz: function () {
          return o;
        },
        e5: function () {
          return a;
        },
        ld: function () {
          return s;
        },
      });
      var r = n(34268),
        i = n(6526);
      class o extends i.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseFeeScalarError",
            });
        }
      }
      class a extends i.G {
        constructor() {
          super("Chain does not support EIP-1559 fees."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Eip1559FeesNotSupportedError",
            });
        }
      }
      class s extends i.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            r.o)(e)} gwei).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MaxFeePerGasTooLowError",
            });
        }
      }
    },
    20972: function (e, t, n) {
      "use strict";
      n.d(t, {
        C_: function () {
          return d;
        },
        G$: function () {
          return s;
        },
        Hh: function () {
          return a;
        },
        M_: function () {
          return o;
        },
        WF: function () {
          return f;
        },
        ZI: function () {
          return c;
        },
        cj: function () {
          return b;
        },
        cs: function () {
          return m;
        },
        dR: function () {
          return h;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return l;
        },
        vU: function () {
          return u;
        },
      });
      var r = n(34268),
        i = n(6526);
      class o extends i.G {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ExecutionRevertedError",
            });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooHigh",
            });
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooLow",
            });
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooHighError",
            });
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooLowError",
            });
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceMaxValueError",
            });
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends i.G {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InsufficientFundsError",
            });
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds/,
      });
      class f extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooHighError",
            });
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class h extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooLowError",
            });
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionTypeNotSupportedError",
            });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class m extends i.G {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.o)(n)} gwei` : ""
            }).`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TipAboveFeeCapError",
            });
        }
      }
      Object.defineProperty(m, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class b extends i.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownNodeError",
            });
        }
      }
    },
    89558: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gg: function () {
          return a;
        },
        W5: function () {
          return c;
        },
        bs: function () {
          return s;
        },
      });
      var r = n(50696),
        i = n(6526),
        o = n(48159);
      class a extends i.G {
        constructor({ body: e, details: t, headers: n, status: i, url: a }) {
          super("HTTP request failed.", {
            details: t,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, o.Gr)(a)}`,
              e && `Request body: ${(0, r.P)(e)}`,
            ].filter(Boolean),
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "HttpRequestError",
            }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = n),
            (this.status = i),
            (this.url = a);
        }
      }
      class s extends i.G {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.Gr)(n)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcRequestError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code);
        }
      }
      class c extends i.G {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.Gr)(t)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TimeoutError",
            });
        }
      }
    },
    12745: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return c;
        },
        GD: function () {
          return y;
        },
        I0: function () {
          return x;
        },
        KB: function () {
          return m;
        },
        LX: function () {
          return u;
        },
        Og: function () {
          return h;
        },
        PE: function () {
          return v;
        },
        Pv: function () {
          return g;
        },
        Ts: function () {
          return A;
        },
        XS: function () {
          return d;
        },
        ab: function () {
          return w;
        },
        gS: function () {
          return b;
        },
        ir: function () {
          return P;
        },
        nY: function () {
          return l;
        },
        pT: function () {
          return p;
        },
        s7: function () {
          return s;
        },
        u5: function () {
          return C;
        },
        x3: function () {
          return E;
        },
        yR: function () {
          return f;
        },
      });
      var r = n(6526),
        i = n(89558);
      class o extends r.G {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, shortMessage: o }
        ) {
          super(o, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = e.name),
            (this.code = e instanceof i.bs ? e.code : t ?? -1);
        }
      }
      class a extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderRpcError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends o {
        constructor(e) {
          super(e, {
            code: s.code,
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ParseRpcError",
            });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends o {
        constructor(e) {
          super(e, {
            code: c.code,
            shortMessage: "JSON is not a valid request object.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidRequestRpcError",
            });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends o {
        constructor(e) {
          super(e, {
            code: u.code,
            shortMessage: "The method does not exist / is not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends o {
        constructor(e) {
          super(e, {
            code: l.code,
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParamsRpcError",
            });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            shortMessage: "An internal error was received.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InternalRpcError",
            });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidInputRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            shortMessage: "Requested resource not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceUnavailableRpcError",
            });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class m extends o {
        constructor(e) {
          super(e, {
            code: m.code,
            shortMessage: "Transaction creation failed.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionRejectedRpcError",
            });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            shortMessage: "Method is not implemented.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotSupportedRpcError",
            });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class g extends o {
        constructor(e) {
          super(e, {
            code: g.code,
            shortMessage: "Request exceeds defined limit.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "LimitExceededRpcError",
            });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class y extends o {
        constructor(e) {
          super(e, {
            code: y.code,
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "JsonRpcVersionUnsupportedError",
            });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            shortMessage: "User rejected the request.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UserRejectedRequestError",
            });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnauthorizedProviderError",
            });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class A extends a {
        constructor(e) {
          super(e, {
            code: A.code,
            shortMessage: "The Provider does not support the requested method.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnsupportedProviderMethodError",
            });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            shortMessage: "The Provider is disconnected from all chains.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderDisconnectedError",
            });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class x extends a {
        constructor(e) {
          super(e, {
            code: x.code,
            shortMessage:
              "The Provider is not connected to the requested chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDisconnectedError",
            });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            shortMessage: "An error occurred when attempting to switch chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainError",
            });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class P extends o {
        constructor(e) {
          super(e, { shortMessage: "An unknown RPC error occurred." }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownRpcError",
            });
        }
      }
    },
    32381: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return i;
        },
        Z8: function () {
          return o;
        },
      });
      var r = n(6526);
      class i extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountStateConflictError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("state and stateDiff are set on the same account."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "StateAssignmentConflictError",
            });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && (r += "      state:\n" + a(n.state)),
              n.stateDiff && (r += "      stateDiff:\n" + a(n.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    22253: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bh: function () {
          return f;
        },
        JC: function () {
          return l;
        },
        Yb: function () {
          return h;
        },
        j3: function () {
          return u;
        },
        mc: function () {
          return p;
        },
        mk: function () {
          return d;
        },
        vl: function () {
          return c;
        },
        xY: function () {
          return s;
        },
        xr: function () {
          return a;
        },
      });
      var r = n(96465),
        i = n(34268),
        o = n(6526);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class s extends o.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeConflictError",
            });
        }
      }
      class c extends o.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidLegacyVError",
            });
        }
      }
      class u extends o.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSerializableTransactionError",
            });
        }
      }
      class l extends o.G {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (e.length - 2) / 2
            )} bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStorageKeySizeError",
            });
        }
      }
      class d extends o.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: s,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, r.d)(p)} ${o?.nativeCurrency?.symbol || "ETH"}`,
                data: s,
                gas: c,
                gasPrice: void 0 !== u && `${(0, i.o)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, i.o)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, i.o)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
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
              value: "TransactionExecutionError",
            }),
            (this.cause = e);
        }
      }
      class f extends o.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: i,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== i &&
            (o = `Transaction at block time "${n}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (o = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (o = `Transaction at block number "${t}" at index "${i}"`),
            r && (o = `Transaction with hash "${r}"`),
            super(`${o} could not be found.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionNotFoundError",
            });
        }
      }
      class h extends o.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionReceiptNotFoundError",
            });
        }
      }
      class p extends o.G {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WaitForTransactionReceiptTimeoutError",
            });
        }
      }
    },
    48159: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return r;
        },
        Gr: function () {
          return i;
        },
        bo: function () {
          return o;
        },
      });
      let r = (e) => e,
        i = (e) => e,
        o = () => "viem@2.9.6";
    },
    36292: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return m;
        },
      });
      var r = n(23453),
        i = n(2594),
        o = n(45665),
        a = n(97169),
        s = n(48940),
        c = n(97232),
        u = n(24907),
        l = n(15530),
        d = n(11061);
      function f(e, t = {}) {
        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
        let n = (0, d.ci)(e, t);
        return (0, l.ly)(n, t);
      }
      var h = n(90893),
        p = n(83963);
      function m(e, t) {
        let n = "string" == typeof t ? (0, h.nr)(t) : t,
          m = (0, o.q)(n);
        if (0 === (0, a.d)(n) && e.length > 0) throw new r.wb();
        if ((0, a.d)(t) && 32 > (0, a.d)(t))
          throw new r.xB({
            data: "string" == typeof t ? t : (0, d.ci)(t),
            params: e,
            size: (0, a.d)(t),
          });
        let g = 0,
          y = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          m.setPosition(g);
          let [o, a] = (function e(t, n, { staticPosition: o }) {
            let a = (0, p.S)(n.type);
            if (a) {
              let [r, i] = a;
              return (function (t, n, { length: r, staticPosition: i }) {
                if (!r) {
                  let r = i + f(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let a = f(t.readBytes(32)),
                    s = b(n),
                    c = 0,
                    u = [];
                  for (let r = 0; r < a; ++r) {
                    t.setPosition(o + (s ? 32 * r : c));
                    let [i, a] = e(t, n, { staticPosition: o });
                    (c += a), u.push(i);
                  }
                  return t.setPosition(i + 32), [u, 32];
                }
                if (b(n)) {
                  let o = i + f(t.readBytes(32)),
                    a = [];
                  for (let i = 0; i < r; ++i) {
                    t.setPosition(o + 32 * i);
                    let [r] = e(t, n, { staticPosition: o });
                    a.push(r);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                let o = 0,
                  a = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: i + o });
                  (o += s), a.push(r);
                }
                return [a, o];
              })(t, { ...n, type: i }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let i =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = i ? [] : {},
                  a = 0;
                if (b(n)) {
                  let s = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(s + a);
                    let [u, l] = e(t, c, { staticPosition: s });
                    (a += l), (o[i ? r : c?.name] = u);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let c = n.components[s],
                    [u, l] = e(t, c, { staticPosition: r });
                  (o[i ? s : c?.name] = u), (a += l);
                }
                return [o, a];
              })(t, n, { staticPosition: o });
            if ("address" === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, i.x)((0, d.ci)((0, s.T4)(t, -20))), 32];
              })(t);
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Yf)(n, { size: t.size }), (n = (0, c.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new u.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, i] = t.type.split("bytes");
                if (!i) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let i = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.ci)(i), 32];
                }
                return [(0, d.ci)(e.readBytes(parseInt(i), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int"))
              return (function (e, t) {
                let n = t.type.startsWith("int"),
                  r = parseInt(t.type.split("int")[1] || "256"),
                  i = e.readBytes(32);
                return [
                  r > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
                        let n = (0, d.ci)(e, t);
                        return (0, l.y_)(n, t);
                      })(i, { signed: n })
                    : f(i, { signed: n }),
                  32,
                ];
              })(t, n);
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let i = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Yf)(n, { size: t.size }),
                        (n = (0, c.f)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.f)(i));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.CI(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, n, { staticPosition: 0 });
          (g += a), y.push(o);
        }
        return y;
      }
      function b(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(b);
        let n = (0, p.S)(e.type);
        return !!(n && b({ ...e, type: n[1] }));
      }
    },
    88440: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return u;
        },
      });
      var r = n(76070),
        i = n(23453),
        o = n(48940),
        a = n(72782),
        s = n(36292),
        c = n(79666);
      function u(e) {
        let { abi: t, data: n } = e,
          u = (0, o.tP)(n, 0, 4);
        if ("0x" === u) throw new i.wb();
        let l = [...(t || []), r.Up, r.hZ].find(
          (e) => "error" === e.type && u === (0, a.C)((0, c.t)(e))
        );
        if (!l)
          throw new i.yP(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, s.r)(l.inputs, (0, o.tP)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    79722: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(23453),
        i = n(36292),
        o = n(40675);
      let a = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: c } = e,
          u = t[0];
        if (s) {
          let e = (0, o.mE)({ abi: t, args: n, name: s });
          if (!e) throw new r.xL(s, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new r.xL(void 0, { docsPath: a });
        if (!u.outputs) throw new r.MX(u.name, { docsPath: a });
        let l = (0, i.r)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    83963: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return f;
        },
        S: function () {
          return p;
        },
      });
      var r = n(23453),
        i = n(28068),
        o = n(6526),
        a = n(99186),
        s = n(71870),
        c = n(18344),
        u = n(97169),
        l = n(48940),
        d = n(11061);
      function f(e, t) {
        if (e.length !== t.length)
          throw new r.fs({ expectedLength: e.length, givenLength: t.length });
        let n = h(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let f = 0; f < e.length; f++)
              n.push(
                (function e({ param: t, value: n }) {
                  let f = p(t.type);
                  if (f) {
                    let [i, o] = f;
                    return (function (t, { length: n, param: i }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.hn(t);
                      if (!o && t.length !== n)
                        throw new r.gr({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${i.type}[${n}]`,
                        });
                      let a = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: i, value: t[n] });
                        r.dynamic && (a = !0), c.push(r);
                      }
                      if (o || a) {
                        let e = h(c);
                        if (o) {
                          let t = (0, d.eC)(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? (0, s.zo)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, s.zo)(c.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: i, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        i = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let a = n.components[o],
                          s = Array.isArray(t) ? o : a.name,
                          c = e({ param: a, value: t[s] });
                        i.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? h(i)
                          : (0, s.zo)(i.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type)
                    return (function (e) {
                      if (!(0, a.U)(e)) throw new i.b({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e.toLowerCase()),
                      };
                    })(n);
                  if ("bool" === t.type)
                    return (function (e) {
                      if ("boolean" != typeof e)
                        throw new o.G(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, c.gc)((0, d.C4)(e)) };
                    })(n);
                  if (t.type.startsWith("uint") || t.type.startsWith("int"))
                    return (function (e, { signed: t }) {
                      return {
                        dynamic: !1,
                        encoded: (0, d.eC)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: t.type.startsWith("int") });
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        i = (0, u.d)(e);
                      if (!n) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, c.gc)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, s.zo)([
                              (0, c.gc)((0, d.eC)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== parseInt(n))
                        throw new r.M4({ expectedSize: parseInt(n), value: e });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type)
                    return (function (e) {
                      let t = (0, d.$G)(e),
                        n = Math.ceil((0, u.d)(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++)
                        r.push(
                          (0, c.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, s.zo)([
                          (0, c.gc)((0, d.eC)((0, u.d)(t), { size: 32 })),
                          ...r,
                        ]),
                      };
                    })(n);
                  throw new r.dh(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[f], value: t[f] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function h(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += (0, u.d)(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push((0, d.eC)(t + i, { size: 32 })),
              r.push(s),
              (i += (0, u.d)(s)))
            : n.push(s);
        }
        return (0, s.zo)([...n, ...r]);
      }
      function p(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    31650: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(23453),
        i = n(71870),
        o = n(83963);
      let a = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new r.fM({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new r.cO({ docsPath: a });
        let u = (0, o.E)(c.inputs, n);
        return (0, i.SM)([s, u]);
      }
    },
    25932: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return l;
        },
      });
      var r = n(71870),
        i = n(83963),
        o = n(23453),
        a = n(72782),
        s = n(79666),
        c = n(40675);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: n, functionName: l } =
            1 === e.abi.length && e.functionName?.startsWith("0x")
              ? e
              : (function (e) {
                  let { abi: t, args: n, functionName: r } = e,
                    i = t[0];
                  if (r) {
                    let e = (0, c.mE)({ abi: t, args: n, name: r });
                    if (!e) throw new o.xL(r, { docsPath: u });
                    i = e;
                  }
                  if ("function" !== i.type)
                    throw new o.xL(void 0, { docsPath: u });
                  return { abi: [i], functionName: (0, a.C)((0, s.t)(i)) };
                })(e),
          d = n[0],
          f = "inputs" in d && d.inputs ? (0, i.E)(d.inputs, t ?? []) : void 0;
        return (0, r.SM)([l, f ?? "0x"]);
      }
    },
    79666: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return o;
        },
        t: function () {
          return i;
        },
      });
      var r = n(23453);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.wM(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    40675: function (e, t, n) {
      "use strict";
      n.d(t, {
        mE: function () {
          return c;
        },
      });
      var r = n(23453),
        i = n(10757),
        o = n(99186),
        a = n(10456),
        s = n(72782);
      function c(e) {
        let t;
        let { abi: n, args: c = [], name: u } = e,
          l = (0, i.v)(u, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, s.C)(e) === u
                : "event" === e.type && (0, a.n)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d)
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        i = n.type;
                      switch (i) {
                        case "address":
                          return (0, o.U)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === i && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let i in t) {
                      let a = t[i],
                        s = n[i];
                      if (
                        "tuple" === a.type &&
                        "tuple" === s.type &&
                        "components" in a &&
                        "components" in s
                      )
                        return e(a.components, s.components, r[i]);
                      let c = [a.type, s.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, o.U)(r[i], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new r.S4(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          return t || d[0];
        }
      }
    },
    2594: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return c;
        },
        x: function () {
          return s;
        },
      });
      var r = n(28068),
        i = n(90893),
        o = n(53353),
        a = n(99186);
      function s(e, t) {
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, o.w)((0, i.qX)(n), "bytes"),
          a = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        return `0x${a.join("")}`;
      }
      function c(e, t) {
        if (!(0, a.U)(e, { strict: !1 })) throw new r.b({ address: e });
        return s(e, t);
      }
    },
    99186: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return s;
        },
      });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        set(e, t) {
          return (
            super.set(e, t),
            this.maxSize &&
              this.size > this.maxSize &&
              this.delete(this.keys().next().value),
            this
          );
        }
      }
      var i = n(2594);
      let o = /^0x[a-fA-F0-9]{40}$/,
        a = new r(8192);
      function s(e, t) {
        let { strict: n = !0 } = t ?? {};
        if (a.has(e)) return a.get(e);
        let r =
          !!o.test(e) && (e.toLowerCase() === e || !n || (0, i.x)(e) === e);
        return a.set(e, r), r;
      }
    },
    98009: function (e, t, n) {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, {
        a: function () {
          return r;
        },
      });
    },
    8661: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(20789);
      function i({ blockNumber: e, chain: t, contract: n }) {
        let i = t?.contracts?.[n];
        if (!i) throw new r.mm({ chain: t, contract: { name: n } });
        if (e && i.blockCreated && i.blockCreated > e)
          throw new r.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: i.blockCreated },
          });
        return i.address;
      }
    },
    45665: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var r = n(44368);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function o(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(i);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    71870: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, {
        SM: function () {
          return i;
        },
        zo: function () {
          return r;
        },
      });
    },
    10757: function (e, t, n) {
      "use strict";
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, {
        v: function () {
          return r;
        },
      });
    },
    18344: function (e, t, n) {
      "use strict";
      n.d(t, {
        gc: function () {
          return o;
        },
        vk: function () {
          return i;
        },
      });
      var r = n(86113);
      function i(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? o(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.$s({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let o = "right" === t;
                i[o ? r : n - r - 1] = e[o ? r : e.length - r - 1];
              }
              return i;
            })(e, { dir: t, size: n });
      }
      function o(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * n)
          throw new r.$s({
            size: Math.ceil(i.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    97169: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(10757);
      function i(e) {
        return (0, r.v)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    48940: function (e, t, n) {
      "use strict";
      n.d(t, {
        T4: function () {
          return u;
        },
        tP: function () {
          return a;
        },
      });
      var r = n(86113),
        i = n(10757),
        o = n(97169);
      function a(e, t, n, { strict: r } = {}) {
        return (0, i.v)(e, { strict: !1 })
          ? (function (e, t, n, { strict: r } = {}) {
              s(e, t);
              let i = `0x${e
                .replace("0x", "")
                .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
              return r && c(i, t, n), i;
            })(e, t, n, { strict: r })
          : u(e, t, n, { strict: r });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1)
          throw new r.mV({ offset: t, position: "start", size: (0, o.d)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.d)(e) !== n - t
        )
          throw new r.mV({ offset: n, position: "end", size: (0, o.d)(e) });
      }
      function u(e, t, n, { strict: r } = {}) {
        s(e, t);
        let i = e.slice(t, n);
        return r && c(i, t, n), i;
      }
    },
    97232: function (e, t, n) {
      "use strict";
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          r = 0;
        for (
          let e = 0;
          e < n.length - 1 &&
          "0" === n["left" === t ? e : n.length - e - 1].toString();
          e++
        )
          r++;
        return ((n = "left" === t ? n.slice(r) : n.slice(0, n.length - r)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
      n.d(t, {
        f: function () {
          return r;
        },
      });
    },
    15530: function (e, t, n) {
      "use strict";
      n.d(t, {
        Yf: function () {
          return s;
        },
        ly: function () {
          return u;
        },
        rR: function () {
          return l;
        },
        y_: function () {
          return c;
        },
      });
      var r = n(24907),
        i = n(97169),
        o = n(97232),
        a = n(90893);
      function s(e, { size: t }) {
        if ((0, i.d)(e) > t)
          throw new r.M6({ givenSize: (0, i.d)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: n } = t;
        t.size && s(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        return Number(c(e, t));
      }
      function l(e, t = {}) {
        let n = (0, a.nr)(e);
        return (
          t.size &&
            (s(n, { size: t.size }), (n = (0, o.f)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    90893: function (e, t, n) {
      "use strict";
      n.d(t, {
        O0: function () {
          return u;
        },
        nr: function () {
          return f;
        },
        qX: function () {
          return h;
        },
      });
      var r = n(6526),
        i = n(10757),
        o = n(18344),
        a = n(15530),
        s = n(11061);
      let c = new TextEncoder();
      function u(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? f((0, s.eC)(e, t))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Yf)(n, { size: t.size }),
                  (0, o.vk)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, i.v)(e)
          ? f(e, t)
          : h(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function f(e, t = {}) {
        let n = e;
        t.size &&
          ((0, a.Yf)(n, { size: t.size }),
          (n = (0, o.vk)(n, { dir: "right", size: t.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          c = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let n = d(i.charCodeAt(t++)),
            o = d(i.charCodeAt(t++));
          if (void 0 === n || void 0 === o)
            throw new r.G(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          c[e] = 16 * n + o;
        }
        return c;
      }
      function h(e, t = {}) {
        let n = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Yf)(n, { size: t.size }),
            (0, o.vk)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    11061: function (e, t, n) {
      "use strict";
      n.d(t, {
        $G: function () {
          return f;
        },
        C4: function () {
          return c;
        },
        NC: function () {
          return s;
        },
        ci: function () {
          return u;
        },
        eC: function () {
          return l;
        },
      });
      var r = n(24907),
        i = n(18344),
        o = n(15530);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function s(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? f(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, o.Yf)(n, { size: t.size }), (0, i.vk)(n, { size: t.size }))
          : n;
      }
      function u(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += a[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, o.Yf)(r, { size: t.size }),
            (0, i.vk)(r, { dir: "right", size: t.size }))
          : r;
      }
      function l(e, t = {}) {
        let n;
        let { signed: o, size: a } = t,
          s = BigInt(e);
        a
          ? (n = o
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof n && o ? -n - 1n : 0;
        if ((n && s > n) || s < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.J5({
            max: n ? `${n}${t}` : void 0,
            min: `${c}${t}`,
            signed: o,
            size: a,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(o && s < 0
          ? (1n << BigInt(8 * a)) + BigInt(s)
          : s
        ).toString(16)}`;
        return a ? (0, i.vk)(u, { size: a }) : u;
      }
      let d = new TextEncoder();
      function f(e, t = {}) {
        return u(d.encode(e), t);
      }
    },
    42351: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(10757);
      function i(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.v)(t) ? t : null;
      }
    },
    69423: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(76070),
        i = n(6526),
        o = n(54926);
      function a(e, t) {
        if (!(e instanceof i.G)) return !1;
        let n = e.walk((e) => e instanceof o.Lu);
        return (
          n instanceof o.Lu &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === r.$[50]))
        );
      }
    },
    47592: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return c;
        },
      });
      var r = n(71870),
        i = n(90893),
        o = n(11061),
        a = n(53353),
        s = n(42351);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, o.ci)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let o = (0, s.i)(n[e]),
            c = o ? (0, i.O0)(o) : (0, a.w)((0, i.qX)(n[e]), "bytes");
          t = (0, a.w)((0, r.zo)([t, c]), "bytes");
        }
        return (0, o.ci)(t);
      }
    },
    27378: function (e, t, n) {
      "use strict";
      let r, i, o, a, s, c, u, l, d, f, h, p, m, b, g;
      n.d(t, {
        F: function () {
          return H;
        },
      });
      let y = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function w(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < r; e++) o.push((i += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              u = 0;
            function l() {
              return (
                0 == c && ((u = (u << 8) | e[t++]), (c = 8)), (u >> --c) & 1
              );
            }
            let d = 2147483648 - 1,
              f = 0;
            for (let e = 0; e < 31; e++) f = (f << 1) | l();
            let h = [],
              p = 0,
              m = 2147483648;
            for (;;) {
              let e = Math.floor(((f - p + 1) * i - 1) / m),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < o[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              h.push(t);
              let a = p + Math.floor((m * o[t]) / i),
                s = p + Math.floor((m * o[t + 1]) / i) - 1;
              for (; ((a ^ s) & 1073741824) == 0; )
                (f = ((f << 1) & d) | l()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 536870912; )
                (f = (1073741824 & f) | ((f << 1) & (d >>> 1)) | l()),
                  (a = (a << 1) ^ 1073741824),
                  (s = ((1073741824 ^ s) << 1) | 1073741825);
              (p = a), (m = 1 + s - a);
            }
            let b = r - 4;
            return h.map((t) => {
              switch (t - b) {
                case 3:
                  return b + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return b + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return b + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let i = 0, o = 0, a = 0, s = 0; i < n; i++)
                (s = (s << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (r[o++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function v(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            i = e();
          if (!i) break;
          t += r;
          for (let e = 0; e < i; e++) n.push(t + e);
          t += i + 1;
        }
        return n;
      }
      function A(e) {
        return x(() => {
          let t = v(e);
          if (t.length) return t;
        });
      }
      function C(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                i = x(t);
              return E(i.length, 1 + e, t).flatMap((e, t) => {
                let [o, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * r;
                    return [o + t * n, a.map((e) => e + i)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          let n = e() - 1;
          if (n < 0) break;
          t.push(E(1 + e(), 1 + n, e).map((e) => [e[0], e.slice(1)]));
        }
        return t.flat();
      }
      function x(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function E(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let n = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var r;
              n[i] = o += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function P(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function I(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function k(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let i = 0; 0 == r && i < n; i++) r = e[i] - t[i];
        return r;
      }
      function B(e) {
        return (e >> 24) & 255;
      }
      function O(e) {
        return 16777215 & e;
      }
      function M(e) {
        return e >= 44032 && e < 55204;
      }
      function R(e) {
        r ||
          (function () {
            let e = w(
              "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"
            );
            for (let [t, n] of ((r = new Map(
              A(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (i = new Set(v(e))),
            (o = new Map()),
            (a = new Map()),
            C(e))) {
              if (!i.has(t) && 2 == n.length) {
                let [e, r] = n,
                  i = a.get(e);
                i || ((i = new Map()), a.set(e, i)), i.set(r, t);
              }
              o.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (M(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                i = e % 28;
              c(4352 + t), c(4449 + n), i > 0 && c(4519 + i);
            } else {
              let e = o.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = B(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = B(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let i = n - 1;
            for (;;) {
              let n = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = n), !i || (e = B(t[--i])) <= r))
                break;
            }
            e = B(t[n]);
          }
        }
        return t;
      }
      function S(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            i = 0;
          for (let o of e) {
            let e = B(o),
              s = O(o);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (i = e);
            else {
              let o = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                if (M(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                  return e + (t - 4519);
                {
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              o >= 0
                ? (r = o)
                : 0 == i && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (i = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(R(e));
      }
      let N = (e) => Array.from(e);
      function T(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class F extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function j() {
        let e, t;
        if (s) return;
        let n = w(
            "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI"
          ),
          r = () => v(n),
          i = () => new Set(r());
        (s = new Map(C(n))),
          (c = i()),
          (u = r()),
          (l = new Set(r().map((e) => u[e]))),
          (u = new Set(u)),
          (d = i()),
          i();
        let o = A(n),
          a = n(),
          y = () =>
            new Set(
              r()
                .flatMap((e) => o[e])
                .concat(r())
            );
        (f = x((e) => {
          let t = x(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= a;
            return (
              (t[0] -= 32),
              (t = I(t)),
              r && (t = `Restricted[${t}]`),
              { N: t, P: y(), Q: y(), M: !n(), R: r }
            );
          }
        })),
          (h = i()),
          (p = new Map());
        let E = r()
          .concat(N(h))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (E.forEach((e, t) => {
          let r = n(),
            i = (E[t] = r ? E[t - r] : { V: [], M: new Map() });
          i.V.push(e), h.has(e) || p.set(e, i);
        }),
        new Set(p.values()))) {
          let n = [];
          for (let t of e) {
            let e = f.filter((e) => T(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              e.forEach((e) => r.G.add(e));
          }
          let r = n.flatMap((e) => N(e.G));
          for (let { G: e, V: i } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, n);
          }
        }
        let P = new Set(),
          B = new Set(),
          M = (e) => (P.has(e) ? B.add(e) : P.add(e));
        for (let e of f) {
          for (let t of e.P) M(t);
          for (let t of e.Q) M(t);
        }
        for (let e of P) p.has(e) || B.has(e) || p.set(e, 1);
        for (let r of ((m = new Set(N(P).concat(N(R(P).map(O))))),
        (b = ((e = []),
        (t = v(n)),
        (function t({ S: n, B: r }, i, o) {
          if (!(4 & n) || o !== i[i.length - 1])
            for (let a of (2 & n && (o = i[i.length - 1]),
            1 & n && e.push(i),
            r))
              for (let e of a.Q) t(a, [...i, e], o);
        })(
          (function e(r) {
            return {
              S: n(),
              B: x(() => {
                let r = v(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => F.from(e))
          .sort(k)),
        (g = new Map()),
        b)) {
          let e = [g];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function D(e) {
        return (G(e) ? "" : `${Q(U([e]))} `) + P(e);
      }
      function Q(e) {
        return `"${e}"\u200E`;
      }
      function U(e, t = P) {
        var n;
        let r = [];
        (n = e[0]), j(), u.has(n) && r.push("◌");
        let i = 0,
          o = e.length;
        for (let n = 0; n < o; n++) {
          let o = e[n];
          G(o) && (r.push(I(e.slice(i, n))), r.push(t(o)), (i = n + 1));
        }
        return r.push(I(e.slice(i, o))), r.join("");
      }
      function G(e) {
        return j(), d.has(e);
      }
      function L(e) {
        return Error(`disallowed character: ${D(e)}`);
      }
      function W(e, t) {
        let n = D(t),
          r = f.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function q(e) {
        return Error(`illegal placement: ${e}`);
      }
      function z(e) {
        return e.filter((e) => 65039 != e);
      }
      function H(e) {
        var t;
        return (t = (function (e, t, n) {
          if (!e) return [];
          j();
          let r = 0;
          return e.split(".").map((e) => {
            let i = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              o = { input: i, offset: r };
            r += i.length + 1;
            try {
              let e,
                r = (o.tokens = (function (e, t, n) {
                  let r = [],
                    i = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let o = (function (e, t) {
                      let n,
                        r = g,
                        i = e.length;
                      for (; i && (r = r.get(e[--i])); ) {
                        let { V: t } = r;
                        t && ((n = t), (e.length = i));
                      }
                      return n;
                    })(e);
                    if (o) i.length && (r.push(t(i)), (i = [])), r.push(n(o));
                    else {
                      let t = e.pop();
                      if (m.has(t)) i.push(t);
                      else {
                        let e = s.get(t);
                        if (e) i.push(...e);
                        else if (!c.has(t)) throw L(t);
                      }
                    }
                  }
                  return i.length && r.push(t(i)), r;
                })(i, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (o.output = r.flat());
              if (
                (!(function (e) {
                  for (let t = e.lastIndexOf(95); t > 0; )
                    if (95 !== e[--t])
                      throw Error("underscore allowed only at start");
                })(d),
                !(o.emoji = a > 1 || r[0].is_emoji) && d.every((e) => e < 128))
              )
                !(function (e) {
                  if (e.length >= 4 && 45 == e[2] && 45 == e[3])
                    throw Error(
                      `invalid label extension: "${I(e.slice(0, 4))}"`
                    );
                })(d),
                  (e = "ASCII");
              else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (u.has(d[0])) throw q("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && u.has(t[0]))
                      throw q(
                        `emoji + combining mark: "${I(r[e - 1])} + ${U([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = y.get(t);
                    if (n) throw q(`leading ${n}`);
                    let r = e.length,
                      i = -1;
                    for (let o = 1; o < r; o++) {
                      t = e[o];
                      let r = y.get(t);
                      if (r) {
                        if (i == o) throw q(`${n} + ${r}`);
                        (i = o + 1), (n = r);
                      }
                    }
                    if (i == r) throw q(`trailing ${n}`);
                  })(d);
                  let n = N(new Set(t)),
                    [i] = (function (e) {
                      let t = f;
                      for (let n of e) {
                        let e = t.filter((e) => T(e, n));
                        if (!e.length) {
                          if (f.some((e) => T(e, n))) throw W(t[0], n);
                          throw L(n);
                        }
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!T(e, n)) throw W(e, n);
                    if (e.M) {
                      let e = R(t).map(O);
                      for (let t = 1, n = e.length; t < n; t++)
                        if (l.has(e[t])) {
                          let r = t + 1;
                          for (let i; r < n && l.has((i = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${D(i)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${Q(
                                U(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(i, t),
                    (function (e, t) {
                      let n;
                      let r = [];
                      for (let e of t) {
                        let t = p.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : N(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => T(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(i, n),
                    (e = i.N);
                } else e = "Emoji";
              }
              o.type = e;
            } catch (e) {
              o.error = e;
            }
            return o;
          });
        })(e, S, z))
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(1 == t.length ? r : `Invalid label ${Q(U(e))}: ${r}`);
            }
            return I(r);
          })
          .join(".");
      }
    },
    74309: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return s;
        },
      });
      var r = n(90893),
        i = n(11061),
        o = n(53353),
        a = n(42351);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.qX)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          let t = (0, r.qX)(c[e]);
          if (t.byteLength > 255) {
            var u;
            t = (0, r.qX)(
              ((u = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.i)(e) || (0, o.w)((0, r.qX)(e)) : (0, i.ci)(t);
              })(c[e])),
              `[${u.slice(2)}]`)
            );
          }
          (n[s] = t.length), n.set(t, s + 1), (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
    35707: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(23453),
        i = n(6526),
        o = n(54926),
        a = n(12745);
      function s(
        e,
        { abi: t, address: n, args: s, docsPath: c, functionName: u, sender: l }
      ) {
        let {
            code: d,
            data: f,
            message: h,
            shortMessage: p,
          } = e instanceof o.VQ
            ? e
            : e instanceof i.G
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
          m =
            e instanceof r.wb
              ? new o.Dk({ functionName: u })
              : [3, a.XS.code].includes(d) && (f || h || p)
              ? new o.Lu({
                  abi: t,
                  data: "object" == typeof f ? f.data : f,
                  functionName: u,
                  message: p ?? h,
                })
              : e;
        return new o.uq(m, {
          abi: t,
          args: s,
          contractAddress: n,
          docsPath: c,
          functionName: u,
          sender: l,
        });
      }
    },
    41258: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(6526),
        i = n(20972);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.G ? e.walk((e) => e.code === i.M_.code) : e;
        return o instanceof r.G
          ? new i.M_({ cause: e, message: o.details })
          : i.M_.nodeMessage.test(n)
          ? new i.M_({ cause: e, message: e.details })
          : i.Hh.nodeMessage.test(n)
          ? new i.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.G$.nodeMessage.test(n)
          ? new i.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.ZI.nodeMessage.test(n)
          ? new i.ZI({ cause: e, nonce: t?.nonce })
          : i.vU.nodeMessage.test(n)
          ? new i.vU({ cause: e, nonce: t?.nonce })
          : i.se.nodeMessage.test(n)
          ? new i.se({ cause: e, nonce: t?.nonce })
          : i.C_.nodeMessage.test(n)
          ? new i.C_({ cause: e })
          : i.WF.nodeMessage.test(n)
          ? new i.WF({ cause: e, gas: t?.gas })
          : i.dR.nodeMessage.test(n)
          ? new i.dR({ cause: e, gas: t?.gas })
          : i.pZ.nodeMessage.test(n)
          ? new i.pZ({ cause: e })
          : i.cs.nodeMessage.test(n)
          ? new i.cs({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new i.cj({ cause: e });
      }
    },
    92641: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return a;
        },
        Z: function () {
          return o;
        },
      });
      var r = n(57733),
        i = n(47467);
      function o(e) {
        let t = e.transactions?.map((e) =>
          "string" == typeof e ? e : i.Tr(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      let a = (0, r.$)("block", o);
    },
    37235: function (e, t, n) {
      "use strict";
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let i of Object.keys(r))
              i in e && (n[i] = e[i]),
                r[i] &&
                  "object" == typeof r[i] &&
                  !Array.isArray(r[i]) &&
                  t(r[i]);
          })(t(e || {})),
          n
        );
      }
      n.d(t, {
        K: function () {
          return r;
        },
      });
    },
    57733: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return ({ exclude: n, format: r }) => ({
          exclude: n,
          format: (e) => {
            let i = t(e);
            if (n) for (let e of n) delete i[e];
            return { ...i, ...r(e) };
          },
          type: e,
        });
      }
      n.d(t, {
        $: function () {
          return r;
        },
      });
    },
    95569: function (e, t, n) {
      "use strict";
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, {
        U: function () {
          return r;
        },
      });
    },
    47467: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tr: function () {
          return a;
        },
        c8: function () {
          return o;
        },
        y_: function () {
          return s;
        },
      });
      var r = n(15530),
        i = n(57733);
      let o = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
      };
      function a(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? o[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      let s = (0, i.$)("transaction", a);
    },
    54779: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return u;
        },
        f: function () {
          return c;
        },
      });
      var r = n(15530),
        i = n(57733),
        o = n(95569),
        a = n(47467);
      let s = { "0x0": "reverted", "0x1": "success" };
      function c(e) {
        let t = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, o.U)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, r.ly)(e.transactionIndex)
            : null,
          status: e.status ? s[e.status] : null,
          type: e.type ? a.c8[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
          t
        );
      }
      let u = (0, i.$)("transactionReceipt", c);
    },
    93280: function (e, t, n) {
      "use strict";
      n.d(t, {
        iy: function () {
          return s;
        },
        tG: function () {
          return a;
        },
      });
      var r = n(11061),
        i = n(57733);
      let o = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3" };
      function a(e) {
        let t = { ...e };
        return (
          void 0 !== e.blobs &&
            "string" != typeof e.blobs[0] &&
            (t.blobs = e.blobs.map((e) => (0, r.ci)(e))),
          void 0 !== e.gas && (t.gas = (0, r.eC)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, r.eC)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, r.eC)(e.nonce)),
          void 0 !== e.type && (t.type = o[e.type]),
          void 0 !== e.value && (t.value = (0, r.eC)(e.value)),
          t
        );
      }
      let s = (0, i.$)("transactionRequest", a);
    },
    62273: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (r) => e[t.name || n]?.(r) ?? t(e, r);
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    53353: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return O;
        },
      });
      var r = n(30259);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32),
        a = (e, t, n) => (e << n) | (t >>> (32 - n)),
        s = (e, t, n) => (t << n) | (e >>> (32 - n)),
        c = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        u = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      var l = n(95181);
      let [d, f, h] = [[], [], []],
        p = BigInt(0),
        m = BigInt(1),
        b = BigInt(2),
        g = BigInt(7),
        y = BigInt(256),
        w = BigInt(113);
      for (let e = 0, t = m, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          d.push(2 * (5 * r + n)),
          f.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = p;
        for (let e = 0; e < 7; e++)
          (t = ((t << m) ^ ((t >> g) * w)) % y) & b &&
            (i ^= m << ((m << BigInt(e)) - m));
        h.push(i);
      }
      let [v, A] = (function (e, t = !1) {
          let n = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let a = 0; a < e.length; a++) {
            let { h: s, l: c } = (function (e, t = !1) {
              return t
                ? { h: Number(e & i), l: Number((e >> o) & i) }
                : { h: 0 | Number((e >> o) & i), l: 0 | Number(e & i) };
            })(e[a], t);
            [n[a], r[a]] = [s, c];
          }
          return [n, r];
        })(h, !0),
        C = (e, t, n) => (n > 32 ? c(e, t, n) : a(e, t, n)),
        x = (e, t, n) => (n > 32 ? u(e, t, n) : s(e, t, n));
      class E extends l.kb {
        constructor(e, t, n, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.Rx)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, l.Jq)(this.state));
        }
        keccak() {
          !(function (e, t = 24) {
            let n = new Uint32Array(10);
            for (let r = 24 - t; r < 24; r++) {
              for (let t = 0; t < 10; t++)
                n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let r = (t + 8) % 10,
                  i = (t + 2) % 10,
                  o = n[i],
                  a = n[i + 1],
                  s = C(o, a, 1) ^ n[r],
                  c = x(o, a, 1) ^ n[r + 1];
                for (let n = 0; n < 50; n += 10)
                  (e[t + n] ^= s), (e[t + n + 1] ^= c);
              }
              let t = e[2],
                i = e[3];
              for (let n = 0; n < 24; n++) {
                let r = f[n],
                  o = C(t, i, r),
                  a = x(t, i, r),
                  s = d[n];
                (t = e[s]), (i = e[s + 1]), (e[s] = o), (e[s + 1] = a);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let r = 0; r < 10; r++) n[r] = e[t + r];
                for (let r = 0; r < 10; r++)
                  e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
              }
              (e[0] ^= v[r]), (e[1] ^= A[r]);
            }
            n.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.Gg)(this);
          let { blockLen: t, state: n } = this,
            i = (e = (0, l.O0)(e)).length;
          for (let r = 0; r < i; ) {
            let o = Math.min(t - this.pos, i - r);
            for (let t = 0; t < o; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.Gg)(this, !1), (0, r.aI)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.Rx)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.J8)(e, this), this.finished))
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
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new E(t, n, r, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let P = (0, l.hE)(() => new E(136, 1, 32));
      var I = n(10757),
        k = n(90893),
        B = n(11061);
      function O(e, t) {
        let n = P((0, I.v)(e, { strict: !1 }) ? (0, k.O0)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, B.NC)(n);
      }
    },
    10456: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = n(70150).r;
    },
    72782: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return o;
        },
      });
      var r = n(48940),
        i = n(70150);
      let o = (e) => (0, r.tP)((0, i.r)(e), 0, 4);
    },
    70150: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var r = n(90893),
        i = n(53353);
      let o = (e) => (0, i.w)((0, r.O0)(e)),
        a = /^tuple(?<array>(\[(\d*)\])*)$/;
      function s(e) {
        let t = "",
          n = e.length;
        for (let r = 0; r < n; r++)
          (t += (function e(t) {
            let n = t.type;
            if (a.test(t.type) && "components" in t) {
              n = "(";
              let r = t.components.length;
              for (let i = 0; i < r; i++)
                (n += e(t.components[i])), i < r - 1 && (n += ", ");
              let i = (function (e, t) {
                let n = e.exec(t);
                return n?.groups;
              })(a, t.type);
              return (n += `)${i?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[r])),
            r !== n - 1 && (t += ", ");
        return t;
      }
      var c = n(6526);
      let u = (e) => {
        var t;
        return (function (e) {
          let t = !0,
            n = "",
            r = 0,
            i = "",
            o = !1;
          for (let a = 0; a < e.length; a++) {
            let s = e[a];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && r++,
              ")" === s && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === s && ["event", "function", ""].includes(i)) i = "";
                else if (((i += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[a - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (i += s), (n += s);
            }
          }
          if (!o) throw new c.G("Unable to normalize signature.");
          return i;
        })(
          "string" == typeof e
            ? e
            : "function" === (t = e).type
            ? `function ${t.name}(${s(t.inputs)})${
                t.stateMutability && "nonpayable" !== t.stateMutability
                  ? ` ${t.stateMutability}`
                  : ""
              }${t.outputs.length ? ` returns (${s(t.outputs)})` : ""}`
            : "event" === t.type
            ? `event ${t.name}(${s(t.inputs)})`
            : "error" === t.type
            ? `error ${t.name}(${s(t.inputs)})`
            : "constructor" === t.type
            ? `constructor(${s(t.inputs)})${
                "payable" === t.stateMutability ? " payable" : ""
              }`
            : "fallback" === t.type
            ? "fallback()"
            : "receive() external payable"
        );
      };
      function l(e) {
        return o(u(e));
      }
    },
    74406: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      let r = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: n, wait: i = 0, sort: o }) {
        let a = async () => {
            let t = u();
            s();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.resolve?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.reject?.(e);
                  }
                });
          },
          s = () => r.delete(t),
          c = () => u().map(({ args: e }) => e),
          u = () => r.get(t) || [],
          l = (e) => r.set(t, [...u(), e]);
        return {
          flush: s,
          async schedule(e) {
            let t = {},
              r = new Promise((e, n) => {
                (t.resolve = e), (t.reject = n);
              });
            return (
              (n?.([...c(), e]) && a(), u().length > 0)
                ? l({ args: e, pendingPromise: t })
                : (l({ args: e, pendingPromise: t }), setTimeout(a, i)),
              r
            );
          },
        };
      }
    },
    49307: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return i;
        },
      });
      var r = n(98602);
      function i(
        e,
        { delay: t = 100, retryCount: n = 2, shouldRetry: i = () => !0 } = {}
      ) {
        return new Promise((o, a) => {
          let s = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: c, error: e }) : t;
              n && (await (0, r.D)(n)), s({ count: c + 1 });
            };
            try {
              let t = await e();
              o(t);
            } catch (e) {
              if (c < n && (await i({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          s();
        });
      }
    },
    1507: function (e, t, n) {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((i, o) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : o(t);
                }, n)),
                i(await e({ signal: s?.signal || null }));
            } catch (e) {
              "AbortError" === e.name && o(t), o(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, {
        F: function () {
          return r;
        },
      });
    },
    50696: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
    },
    32666: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var r = n(9666),
        i = n(28068),
        o = n(20972),
        a = n(22253),
        s = n(99186);
      function c(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            to: l,
          } = e,
          d = t ? (0, r.T)(t) : void 0;
        if (d && !(0, s.U)(d.address)) throw new i.b({ address: d.address });
        if (l && !(0, s.U)(l)) throw new i.b({ address: l });
        if (void 0 !== n && (void 0 !== c || void 0 !== u)) throw new a.xY();
        if (c && c > 2n ** 256n - 1n) throw new o.Hh({ maxFeePerGas: c });
        if (u && c && u > c)
          throw new o.cs({ maxFeePerGas: c, maxPriorityFeePerGas: u });
      }
    },
    58184: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var r = n(22253);
      function i(e) {
        if (e.type) return e.type;
        if (
          void 0 !== e.blobs ||
          void 0 !== e.blobVersionedHashes ||
          void 0 !== e.maxFeePerBlobGas ||
          void 0 !== e.sidecars
        )
          return "eip4844";
        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== e.gasPrice)
          return void 0 !== e.accessList ? "eip2930" : "legacy";
        throw new r.j3({ transaction: e });
      }
    },
    6911: function (e, t, n) {
      "use strict";
      n.d(t, {
        cj: function () {
          return d;
        },
        iC: function () {
          return l;
        },
      });
      var r = n(23453),
        i = n(28068),
        o = n(99186),
        a = n(97169),
        s = n(11061);
      let c = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        u =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function l(e) {
        let { domain: t, message: n, primaryType: l, types: d } = e,
          f = (e, t) => {
            for (let n of e) {
              let { name: e, type: l } = n,
                h = t[e],
                p = l.match(u);
              if (p && ("number" == typeof h || "bigint" == typeof h)) {
                let [e, t, n] = p;
                (0, s.eC)(h, { signed: "int" === t, size: parseInt(n) / 8 });
              }
              if ("address" === l && "string" == typeof h && !(0, o.U)(h))
                throw new i.b({ address: h });
              let m = l.match(c);
              if (m) {
                let [e, t] = m;
                if (t && (0, a.d)(h) !== parseInt(t))
                  throw new r.KY({
                    expectedSize: parseInt(t),
                    givenSize: (0, a.d)(h),
                  });
              }
              let b = d[l];
              b && f(b, h);
            }
          };
        d.EIP712Domain && t && f(d.EIP712Domain, t),
          "EIP712Domain" !== l && f(d[l], n);
      }
      function d({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          "number" == typeof e?.chainId && { name: "chainId", type: "uint256" },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    96465: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var r = n(95131),
        i = n(36608);
      function o(e, t = "wei") {
        return (0, i.b)(e, r.ez[t]);
      }
    },
    34268: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var r = n(95131),
        i = n(36608);
      function o(e, t = "wei") {
        return (0, i.b)(e, r.Zn[t]);
      }
    },
    36608: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, o] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`
        );
      }
      n.d(t, {
        b: function () {
          return r;
        },
      });
    },
    98602: function (e, t, n) {
      "use strict";
      async function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, {
        D: function () {
          return r;
        },
      });
    },
    80817: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return s;
        },
        F: function () {
          return c;
        },
      });
      var r = n(55881);
      let i = !1;
      async function o(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let o = {};
        for (let [, t] of e.state.connections) o[t.connector.id] = 1;
        n && (o[n] = 0);
        let a =
            Object.keys(o).length > 0
              ? [...r].sort((e, t) => (o[e.id] ?? 10) - (o[t.id] ?? 10))
              : r,
          s = !1,
          c = [],
          u = [];
        for (let t of a) {
          let n = await t.getProvider();
          if (!n || u.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(s ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: s ? e.current : t.uid, connections: n };
            }),
            c.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            u.push(n),
            (s = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (s
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: void 0,
                  status: "disconnected",
                }))),
          (i = !1),
          c
        );
      }
      function a(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: s } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  if (e._internal.ssr) {
                    await e._internal.store.persist.rehydrate();
                    let t = e._internal.mipd
                      ?.getProviders()
                      .map(e._internal.connectors.providerDetailToConnector)
                      .map(e._internal.connectors.setup);
                    e._internal.connectors.setState((e) => [
                      ...e,
                      ...(t ?? []),
                    ]);
                  }
                  r
                    ? o(e)
                    : e.storage &&
                      e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: a });
        n._internal.ssr || s();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                s(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, r.createContext)(void 0);
      function c(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          a,
          e,
          (0, r.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    9117: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(67223),
        i = n(39298),
        o = n(9254),
        a = n(47037),
        s = n(55881),
        c = n(77759);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.Z)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.v,
            i = (0, s.useRef)([]),
            o = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && i.current.length) {
                  for (let n of i.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          if (u(o)) {
            let e = { ...o };
            return (
              Object.defineProperties(
                e,
                Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return {
                    ...e,
                    [n]: {
                      configurable: !1,
                      enumerable: !0,
                      get: () => (
                        i.current.includes(n) || i.current.push(n), r
                      ),
                    },
                  };
                }, {})
              ),
              e
            );
          }
          return o;
        })(
          (e) => (0, r.u)(t, { onChange: e }),
          () => (0, i.D)(t)
        );
      }
    },
    54454: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return a;
        },
      });
      var r = n(67223),
        i = n(55881),
        o = n(9254);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, o.Z)(e);
        (0, i.useEffect)(
          () =>
            (0, r.u)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    78951: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return A;
        },
      });
      var r = n(54926),
        i = n(15530),
        o = n(97232),
        a = n(36608),
        s = n(77793),
        c = n(98658),
        u = n(95131);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(u.Bd[e]);
      }
      var d = n(85987);
      async function f(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: i, ...o } = t,
          a = e.getClient({ chainId: r });
        return (0, c.s)(
          a,
          d.A,
          "multicall"
        )({ allowFailure: n, contracts: i, ...o });
      }
      var h = n(58076);
      async function p(e, t) {
        let { allowFailure: n = !0, blockNumber: i, blockTag: o, ...a } = t,
          s = t.contracts;
        try {
          let t = s.reduce((t, n, r) => {
              let i = n.chainId ?? e.state.chainId;
              return {
                ...t,
                [i]: [...(t[i] || []), { contract: n, index: r }],
              };
            }, {}),
            r = (
              await Promise.all(
                Object.entries(t).map(([t, r]) =>
                  f(e, {
                    ...a,
                    allowFailure: n,
                    blockNumber: i,
                    blockTag: o,
                    chainId: parseInt(t),
                    contracts: r.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return r.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (a) {
          if (a instanceof r.uq) throw a;
          let t = () =>
            s.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  i = e.getClient({ chainId: n });
                return (0, c.s)(i, h.L, "readContract")(r);
              })(e, { ...t, blockNumber: i, blockTag: o })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function m(e, t) {
        let {
          address: n,
          blockNumber: u,
          blockTag: d,
          chainId: f,
          token: h,
          unit: p = "ether",
        } = t;
        if (h)
          try {
            return b(e, {
              balanceAddress: n,
              chainId: f,
              symbolType: "string",
              tokenAddress: h,
            });
          } catch (t) {
            if (t instanceof r.uq) {
              let t = await b(e, {
                  balanceAddress: n,
                  chainId: f,
                  symbolType: "bytes32",
                  tokenAddress: h,
                }),
                r = (0, i.rR)((0, o.f)(t.symbol, { dir: "right" }));
              return { ...t, symbol: r };
            }
            throw t;
          }
        let m = e.getClient({ chainId: f }),
          g = (0, c.s)(m, s.s, "getBalance"),
          y = await g(
            u ? { address: n, blockNumber: u } : { address: n, blockTag: d }
          ),
          w = e.chains.find((e) => e.id === f) ?? m.chain;
        return {
          decimals: w.nativeCurrency.decimals,
          formatted: (0, a.b)(y, l(p)),
          symbol: w.nativeCurrency.symbol,
          value: y,
        };
      }
      async function b(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: o,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: o,
          },
          [u, d, f] = await p(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          h = (0, a.b)(u ?? "0", l(s ?? d));
        return { decimals: d, formatted: h, symbol: f, value: u };
      }
      var g = n(62111),
        y = n(33431),
        w = n(88227),
        v = n(9254);
      function A() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          o = (0, v.Z)(n),
          a = (0, w.x)(),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await m(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, g.O)(e)];
              })(t),
            };
          })(o, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : a,
          }),
          c = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, y.aM)({ ...i, ...s, enabled: c });
      }
    },
    88227: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var i = n(55881),
        o = n(9254);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.Z)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    9254: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(55881),
        i = n(80817),
        o = n(80199);
      let a = () => "wagmi@".concat("2.5.17");
      class s extends o.G {
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return a();
        }
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
      }
      class c extends s {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            null !== (e = t.config) && void 0 !== e
              ? e
              : (0, r.useContext)(i.V);
        if (!n) throw new c();
        return n;
      }
    },
    78994: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(17357),
        i = n(51591);
      async function o(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.wi();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let r = await n.connect({ chainId: t.chainId }),
            i = r.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: i,
                chainId: r.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: i, chainId: r.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = n(55881),
        s = n(9254),
        c = n(47037);
      let u = [];
      function l(e) {
        let t = e.connectors;
        return (0, c.v)(u, t) ? u : ((u = t), t);
      }
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, s.Z)(e),
          i = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, s.Z)(e);
            return (0, a.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.connectors.subscribe((e, t) => {
                    n(Object.values(e), t);
                  });
                })(t, { onChange: e }),
              () => l(t),
              () => l(t)
            );
          })({ config: n }),
          {
            mutate: c,
            mutateAsync: u,
            ...d
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => o(n, e),
            mutationKey: ["connect"],
          });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d]
          ),
          { ...d, connect: c, connectAsync: u, connectors: i }
        );
      }
    },
    45754: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return l;
        },
      });
      var r = n(17357);
      async function i(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var o = n(9254),
        a = n(47037);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.v)(s, t)
          ? s
          : ((s = t), t);
      }
      var u = n(55881);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.Z)(e),
          {
            mutate: s,
            mutateAsync: l,
            ...d
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => i(n, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...d,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, o.Z)(e);
            return (0, u.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.v });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: s,
          disconnectAsync: l,
        };
      }
    },
    50465: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return u;
        },
      });
      var r = n(98995),
        i = n(98658),
        o = n(62111),
        a = n(33431),
        s = n(88227),
        c = n(9254);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: u, query: l = {} } = n,
          d = (0, c.Z)(n),
          f = (0, s.x)(),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("name is required");
                return (function (e, t) {
                  let { chainId: n, ...o } = t,
                    a = e.getClient({ chainId: n });
                  return (0, i.s)(a, r.r, "getEnsAvatar")(o);
                })(e, { ...a, name: n });
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, o.O)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...l, ...h, enabled: p });
      }
    },
    89382: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return u;
        },
      });
      var r = n(81612),
        i = n(98658),
        o = n(62111),
        a = n(33431),
        s = n(88227),
        c = n(9254);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: l = {} } = n,
          d = (0, c.Z)(n),
          f = (0, s.x)(),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("address is required");
                return (function (e, t) {
                  let { chainId: n, ...o } = t,
                    a = e.getClient({ chainId: n });
                  return (0, i.s)(a, r.w, "getEnsName")(o);
                })(e, { ...a, address: n });
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, o.O)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...l, ...h, enabled: p });
      }
    },
    9703: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return c;
        },
      });
      var r = n(43306),
        i = n(65640);
      function o(e, t = {}) {
        let n = (0, i.s)(e, t);
        return n?.extend(r.I);
      }
      var a = n(77759),
        s = n(9254);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.Z)(e);
        return (0, a.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => o(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => o(t, e),
          () => o(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    2271: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return u;
        },
      });
      var r = n(17357),
        i = n(51309),
        o = n(98658),
        a = n(99303);
      async function s(e, t) {
        let n;
        let { account: r, connector: s, ...c } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, a.e)(e, { account: r, connector: s })),
          (0, o.s)(
            n,
            i.l,
            "signMessage"
          )({ ...c, ...(r ? { account: r } : {}) })
        );
      }
      var c = n(9254);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, c.Z)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["signMessage"] }),
          { mutate: o, mutateAsync: a, ...u } = (0, r.D)({ ...n, ...i });
        return { ...u, signMessage: o, signMessageAsync: a };
      }
    },
    63675: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return f;
        },
      });
      var r = n(17357),
        i = n(51591),
        o = n(77588);
      async function a(e, t) {
        let { chainId: n } = t,
          r = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (r) {
          let e = r.connector;
          if (!e.switchChain) throw new o.O({ connector: e });
          return await e.switchChain({ chainId: n });
        }
        let a = e.chains.find((e) => e.id === n);
        if (!a) throw new i.X4();
        return e.setState((e) => ({ ...e, chainId: n })), a;
      }
      var s = n(47037);
      let c = [];
      function u(e) {
        let t = e.chains;
        return (0, s.v)(c, t) ? c : ((c = t), t);
      }
      var l = n(55881),
        d = n(9254);
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.Z)(e),
          {
            mutate: i,
            mutateAsync: o,
            ...s
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => a(n, e),
            mutationKey: ["switchChain"],
          });
        return {
          ...s,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.Z)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => u(t),
              () => u(t)
            );
          })({ config: n }),
          switchChain: i,
          switchChainAsync: o,
        };
      }
    },
    33431: function (e, t, n) {
      "use strict";
      n.d(t, {
        aM: function () {
          return o;
        },
      });
      var r = n(43486),
        i = n(62111);
      function o(e) {
        let t = (0, r.a)({ ...e, queryKeyHashFn: i.k });
        return (t.queryKey = e.queryKey), t;
      }
    },
  },
]);
