(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [36881, 40550, 7542],
  {
    68832: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return H;
        },
      });
      var r = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t;
                this._insertTag(
                  ((t = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && t.setAttribute("nonce", this.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t)
                );
              }
              var n = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(n);
                try {
                  r.insertRule(e, r.cssRules.length);
                } catch (e) {}
              } else n.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        a = Math.abs,
        i = String.fromCharCode,
        o = Object.assign;
      function s(e, t, n) {
        return e.replace(t, n);
      }
      function l(e, t) {
        return e.indexOf(t);
      }
      function u(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function c(e, t, n) {
        return e.slice(t, n);
      }
      function d(e) {
        return e.length;
      }
      function h(e, t) {
        return t.push(e), e;
      }
      var f = 1,
        p = 1,
        b = 0,
        m = 0,
        y = 0,
        g = "";
      function w(e, t, n, r, a, i, o) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: i,
          line: f,
          column: p,
          length: o,
          return: "",
        };
      }
      function v(e, t) {
        return o(
          w("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function x() {
        return (y = m < b ? u(g, m++) : 0), p++, 10 === y && ((p = 1), f++), y;
      }
      function E() {
        return u(g, m);
      }
      function C(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function k(e) {
        return (f = p = 1), (b = d((g = e))), (m = 0), [];
      }
      function S(e) {
        var t, n;
        return ((t = m - 1),
        (n = (function e(t) {
          for (; x(); )
            switch (y) {
              case t:
                return m;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(y);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                x();
            }
          return m;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        c(g, t, n)).trim();
      }
      var T = "-ms-",
        R = "-moz-",
        P = "-webkit-",
        O = "comm",
        A = "rule",
        I = "decl",
        _ = "@keyframes";
      function B(e, t) {
        for (var n = "", r = e.length, a = 0; a < r; a++)
          n += t(e[a], a, e, t) || "";
        return n;
      }
      function j(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case I:
            return (e.return = e.return || e.value);
          case O:
            return "";
          case _:
            return (e.return = e.value + "{" + B(e.children, r) + "}");
          case A:
            e.value = e.props.join(",");
        }
        return d((n = B(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function N(e, t, n, r, i, o, l, u, d, h, f) {
        for (
          var p = i - 1,
            b = 0 === i ? o : [""],
            m = b.length,
            y = 0,
            g = 0,
            v = 0;
          y < r;
          ++y
        )
          for (
            var x = 0, E = c(e, p + 1, (p = a((g = l[y])))), C = e;
            x < m;
            ++x
          )
            (C = (g > 0 ? b[x] + " " + E : s(E, /&\f/g, b[x])).trim()) &&
              (d[v++] = C);
        return w(e, t, n, 0 === i ? A : u, d, h, f);
      }
      function M(e, t, n, r) {
        return w(e, t, n, I, c(e, 0, r), c(e, r + 1, -1), r);
      }
      var F = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = E()), 38 === r && 12 === a && (t[n] = 1), !C(a);

          )
            x();
          return c(g, e, m);
        },
        L = function (e, t) {
          var n = -1,
            r = 44;
          do
            switch (C(r)) {
              case 0:
                38 === r && 12 === E() && (t[n] = 1), (e[n] += F(m - 1, t, n));
                break;
              case 2:
                e[n] += S(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === E() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += i(r);
            }
          while ((r = x()));
          return e;
        },
        D = function (e, t) {
          var n;
          return (n = L(k(e), t)), (g = ""), n;
        },
        q = new WeakMap(),
        z = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || q.get(n)) &&
              !r
            ) {
              q.set(e, !0);
              for (
                var a = [], i = D(t, a), o = n.props, s = 0, l = 0;
                s < i.length;
                s++
              )
                for (var u = 0; u < o.length; u++, l++)
                  e.props[l] = a[s]
                    ? i[s].replace(/&\f/g, o[u])
                    : o[u] + " " + i[s];
            }
          }
        },
        $ = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        W = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case I:
                  e.return = (function e(t, n) {
                    switch (
                      45 ^ u(t, 0)
                        ? (((((((n << 2) ^ u(t, 0)) << 2) ^ u(t, 1)) << 2) ^
                            u(t, 2)) <<
                            2) ^
                          u(t, 3)
                        : 0
                    ) {
                      case 5103:
                        return P + "print-" + t + t;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return P + t + t;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return P + t + R + t + T + t + t;
                      case 6828:
                      case 4268:
                        return P + t + T + t + t;
                      case 6165:
                        return P + t + T + "flex-" + t + t;
                      case 5187:
                        return (
                          P +
                          t +
                          s(
                            t,
                            /(\w+).+(:[^]+)/,
                            P + "box-$1$2" + T + "flex-$1$2"
                          ) +
                          t
                        );
                      case 5443:
                        return (
                          P + t + T + "flex-item-" + s(t, /flex-|-self/, "") + t
                        );
                      case 4675:
                        return (
                          P +
                          t +
                          T +
                          "flex-line-pack" +
                          s(t, /align-content|flex-|-self/, "") +
                          t
                        );
                      case 5548:
                        return P + t + T + s(t, "shrink", "negative") + t;
                      case 5292:
                        return P + t + T + s(t, "basis", "preferred-size") + t;
                      case 6060:
                        return (
                          P +
                          "box-" +
                          s(t, "-grow", "") +
                          P +
                          t +
                          T +
                          s(t, "grow", "positive") +
                          t
                        );
                      case 4554:
                        return (
                          P + s(t, /([^-])(transform)/g, "$1" + P + "$2") + t
                        );
                      case 6187:
                        return (
                          s(
                            s(
                              s(t, /(zoom-|grab)/, P + "$1"),
                              /(image-set)/,
                              P + "$1"
                            ),
                            t,
                            ""
                          ) + t
                        );
                      case 5495:
                      case 3959:
                        return s(t, /(image-set\([^]*)/, P + "$1$`$1");
                      case 4968:
                        return (
                          s(
                            s(
                              t,
                              /(.+:)(flex-)?(.*)/,
                              P + "box-pack:$3" + T + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          P +
                          t +
                          t
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return s(t, /(.+)-inline(.+)/, P + "$1$2") + t;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (d(t) - 1 - n > 6)
                          switch (u(t, n + 1)) {
                            case 109:
                              if (45 !== u(t, n + 4)) break;
                            case 102:
                              return (
                                s(
                                  t,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    P +
                                    "$2-$3$1" +
                                    R +
                                    (108 == u(t, n + 3) ? "$3" : "$2-$3")
                                ) + t
                              );
                            case 115:
                              return ~l(t, "stretch")
                                ? e(s(t, "stretch", "fill-available"), n) + t
                                : t;
                          }
                        break;
                      case 4949:
                        if (115 !== u(t, n + 1)) break;
                      case 6444:
                        switch (u(t, d(t) - 3 - (~l(t, "!important") && 10))) {
                          case 107:
                            return s(t, ":", ":" + P) + t;
                          case 101:
                            return (
                              s(
                                t,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  P +
                                  (45 === u(t, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  P +
                                  "$2$3$1" +
                                  T +
                                  "$2box$3"
                              ) + t
                            );
                        }
                        break;
                      case 5936:
                        switch (u(t, n + 11)) {
                          case 114:
                            return (
                              P + t + T + s(t, /[svh]\w+-[tblr]{2}/, "tb") + t
                            );
                          case 108:
                            return (
                              P +
                              t +
                              T +
                              s(t, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              t
                            );
                          case 45:
                            return (
                              P + t + T + s(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                            );
                        }
                        return P + t + T + t + t;
                    }
                    return t;
                  })(e.value, e.length);
                  break;
                case _:
                  return B([v(e, { value: s(e.value, "@", "@" + P) })], r);
                case A:
                  if (e.length) {
                    var a, i;
                    return (
                      (a = e.props),
                      (i = function (t) {
                        var n;
                        switch (
                          ((n = t),
                          (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return B(
                              [
                                v(e, {
                                  props: [s(t, /:(read-\w+)/, ":" + R + "$1")],
                                }),
                              ],
                              r
                            );
                          case "::placeholder":
                            return B(
                              [
                                v(e, {
                                  props: [
                                    s(t, /:(plac\w+)/, ":" + P + "input-$1"),
                                  ],
                                }),
                                v(e, {
                                  props: [s(t, /:(plac\w+)/, ":" + R + "$1")],
                                }),
                                v(e, {
                                  props: [s(t, /:(plac\w+)/, T + "input-$1")],
                                }),
                              ],
                              r
                            );
                        }
                        return "";
                      }),
                      a.map(i).join("")
                    );
                  }
              }
          },
        ],
        H = function (e) {
          var t,
            n,
            a,
            o,
            b,
            v,
            T = e.key;
          if ("css" === T) {
            var R = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(R, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var P = e.stylisPlugins || W,
            A = {},
            I = [];
          (o = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + T + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  A[t[n]] = !0;
                I.push(e);
              }
            );
          var _ =
              ((n = (t = [z, $].concat(P, [
                j,
                ((a = function (e) {
                  v.insert(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && a(e);
                }),
              ])).length),
              function (e, r, a, i) {
                for (var o = "", s = 0; s < n; s++) o += t[s](e, r, a, i) || "";
                return o;
              }),
            F = function (e) {
              var t, n;
              return B(
                ((n = (function e(t, n, r, a, o, b, v, k, T) {
                  for (
                    var R,
                      P = 0,
                      A = 0,
                      I = v,
                      _ = 0,
                      B = 0,
                      j = 0,
                      F = 1,
                      L = 1,
                      D = 1,
                      q = 0,
                      z = "",
                      $ = o,
                      W = b,
                      H = a,
                      G = z;
                    L;

                  )
                    switch (((j = q), (q = x()))) {
                      case 40:
                        if (108 != j && 58 == u(G, I - 1)) {
                          -1 != l((G += s(S(q), "&", "&\f")), "&\f") &&
                            (D = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        G += S(q);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        G += (function (e) {
                          for (; (y = E()); )
                            if (y < 33) x();
                            else break;
                          return C(e) > 2 || C(y) > 3 ? "" : " ";
                        })(j);
                        break;
                      case 92:
                        G += (function (e, t) {
                          for (
                            var n;
                            --t &&
                            x() &&
                            !(y < 48) &&
                            !(y > 102) &&
                            (!(y > 57) || !(y < 65)) &&
                            (!(y > 70) || !(y < 97));

                          );
                          return (
                            (n = m + (t < 6 && 32 == E() && 32 == x())),
                            c(g, e, n)
                          );
                        })(m - 1, 7);
                        continue;
                      case 47:
                        switch (E()) {
                          case 42:
                          case 47:
                            h(
                              w(
                                (R = (function (e, t) {
                                  for (; x(); )
                                    if (e + y === 57) break;
                                    else if (e + y === 84 && 47 === E()) break;
                                  return (
                                    "/*" +
                                    c(g, t, m - 1) +
                                    "*" +
                                    i(47 === e ? e : x())
                                  );
                                })(x(), m)),
                                n,
                                r,
                                O,
                                i(y),
                                c(R, 2, -2),
                                0
                              ),
                              T
                            );
                            break;
                          default:
                            G += "/";
                        }
                        break;
                      case 123 * F:
                        k[P++] = d(G) * D;
                      case 125 * F:
                      case 59:
                      case 0:
                        switch (q) {
                          case 0:
                          case 125:
                            L = 0;
                          case 59 + A:
                            -1 == D && (G = s(G, /\f/g, "")),
                              B > 0 &&
                                d(G) - I &&
                                h(
                                  B > 32
                                    ? M(G + ";", a, r, I - 1)
                                    : M(s(G, " ", "") + ";", a, r, I - 2),
                                  T
                                );
                            break;
                          case 59:
                            G += ";";
                          default:
                            if (
                              (h(
                                (H = N(
                                  G,
                                  n,
                                  r,
                                  P,
                                  A,
                                  o,
                                  k,
                                  z,
                                  ($ = []),
                                  (W = []),
                                  I
                                )),
                                b
                              ),
                              123 === q)
                            ) {
                              if (0 === A) e(G, n, H, H, $, b, I, k, W);
                              else
                                switch (99 === _ && 110 === u(G, 3) ? 100 : _) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    e(
                                      t,
                                      H,
                                      H,
                                      a &&
                                        h(
                                          N(
                                            t,
                                            H,
                                            H,
                                            0,
                                            0,
                                            o,
                                            k,
                                            z,
                                            o,
                                            ($ = []),
                                            I
                                          ),
                                          W
                                        ),
                                      o,
                                      W,
                                      I,
                                      k,
                                      a ? $ : W
                                    );
                                    break;
                                  default:
                                    e(G, H, H, H, [""], W, 0, k, W);
                                }
                            }
                        }
                        (P = A = B = 0), (F = D = 1), (z = G = ""), (I = v);
                        break;
                      case 58:
                        (I = 1 + d(G)), (B = j);
                      default:
                        if (F < 1) {
                          if (123 == q) --F;
                          else if (
                            125 == q &&
                            0 == F++ &&
                            125 ==
                              ((y = m > 0 ? u(g, --m) : 0),
                              p--,
                              10 === y && ((p = 1), f--),
                              y)
                          )
                            continue;
                        }
                        switch (((G += i(q)), q * F)) {
                          case 38:
                            D = A > 0 ? 1 : ((G += "\f"), -1);
                            break;
                          case 44:
                            (k[P++] = (d(G) - 1) * D), (D = 1);
                            break;
                          case 64:
                            45 === E() && (G += S(x())),
                              (_ = E()),
                              (A = I =
                                d(
                                  (z = G +=
                                    (function (e) {
                                      for (; !C(E()); ) x();
                                      return c(g, e, m);
                                    })(m))
                                )),
                              q++;
                            break;
                          case 45:
                            45 === j && 2 == d(G) && (F = 0);
                        }
                    }
                  return b;
                })("", null, null, null, [""], (t = k((t = e))), 0, [0], t)),
                (g = ""),
                n),
                _
              );
            };
          b = function (e, t, n, r) {
            (v = n),
              F(e ? e + "{" + t.styles + "}" : t.styles),
              r && (L.inserted[t.name] = !0);
          };
          var L = {
            key: T,
            sheet: new r({
              key: T,
              container: o,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: A,
            registered: {},
            insert: b,
          };
          return L.sheet.hydrate(I), L;
        };
    },
    18272: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    27444: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return b;
        },
        T: function () {
          return c;
        },
        c: function () {
          return f;
        },
        h: function () {
          return d;
        },
        w: function () {
          return u;
        },
      });
      var r = n(55881),
        a = n(68832),
        i = n(79670),
        o = n(61366),
        s = n(14273),
        l = r.createContext(
          "undefined" != typeof HTMLElement ? (0, a.Z)({ key: "css" }) : null
        );
      l.Provider;
      var u = function (e) {
          return (0, r.forwardRef)(function (t, n) {
            return e(t, (0, r.useContext)(l), n);
          });
        },
        c = r.createContext({}),
        d = {}.hasOwnProperty,
        h = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        f = function (e, t) {
          var n = {};
          for (var r in t) d.call(t, r) && (n[r] = t[r]);
          return (n[h] = e), n;
        },
        p = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            (0, i.hC)(t, n, r),
            (0, s.L)(function () {
              return (0, i.My)(t, n, r);
            }),
            null
          );
        },
        b = u(function (e, t, n) {
          var a = e.css;
          "string" == typeof a &&
            void 0 !== t.registered[a] &&
            (a = t.registered[a]);
          var s = e[h],
            l = [a],
            u = "";
          "string" == typeof e.className
            ? (u = (0, i.fp)(t.registered, l, e.className))
            : null != e.className && (u = e.className + " ");
          var f = (0, o.O)(l, void 0, r.useContext(c));
          u += t.key + "-" + f.name;
          var b = {};
          for (var m in e)
            d.call(e, m) && "css" !== m && m !== h && (b[m] = e[m]);
          return (
            (b.className = u),
            n && (b.ref = n),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(p, {
                cache: t,
                serialized: f,
                isStringTag: "string" == typeof s,
              }),
              r.createElement(s, b)
            )
          );
        });
    },
    88115: function (e, t, n) {
      "use strict";
      n.d(t, {
        F4: function () {
          return c;
        },
      });
      var r,
        a,
        i = n(27444),
        o = n(55881);
      n(14273);
      var s = n(61366);
      n(68832), n(6190);
      var l = function (e, t) {
        var n = arguments;
        if (null == t || !i.h.call(t, "css"))
          return o.createElement.apply(void 0, n);
        var r = n.length,
          a = Array(r);
        (a[0] = i.E), (a[1] = (0, i.c)(e, t));
        for (var s = 2; s < r; s++) a[s] = n[s];
        return o.createElement.apply(null, a);
      };
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, s.O)(t);
      }
      function c() {
        var e = u.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      }
      (r = l || (l = {})), a || (a = r.JSX || (r.JSX = {}));
    },
    61366: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return p;
        },
      });
      var r,
        a = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          scale: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        i = n(18272),
        o = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function (e) {
          return 45 === e.charCodeAt(1);
        },
        u = function (e) {
          return null != e && "boolean" != typeof e;
        },
        c = (0, i.Z)(function (e) {
          return l(e) ? e : e.replace(o, "-$&").toLowerCase();
        }),
        d = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(s, function (e, t, n) {
                  return (r = { name: t, styles: n, next: r }), t;
                });
          }
          return 1 === a[e] || l(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function h(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (r = { name: n.name, styles: n.styles, next: r }), n.name;
            if (void 0 !== n.styles) {
              var a = n.next;
              if (void 0 !== a)
                for (; void 0 !== a; )
                  (r = { name: a.name, styles: a.styles, next: r }),
                    (a = a.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var a = 0; a < n.length; a++) r += h(e, t, n[a]) + ";";
              else
                for (var i in n) {
                  var o = n[i];
                  if ("object" != typeof o)
                    null != t && void 0 !== t[o]
                      ? (r += i + "{" + t[o] + "}")
                      : u(o) && (r += c(i) + ":" + d(i, o) + ";");
                  else if (
                    Array.isArray(o) &&
                    "string" == typeof o[0] &&
                    (null == t || void 0 === t[o[0]])
                  )
                    for (var s = 0; s < o.length; s++)
                      u(o[s]) && (r += c(i) + ":" + d(i, o[s]) + ";");
                  else {
                    var l = h(e, t, o);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        r += c(i) + ":" + l + ";";
                        break;
                      default:
                        r += i + "{" + l + "}";
                    }
                  }
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var i = r,
                o = n(e);
              return (r = i), h(e, t, o);
            }
        }
        if (null == t) return n;
        var s = t[n];
        return void 0 !== s ? s : n;
      }
      var f = /label:\s*([^\s;{]+)\s*(;|$)/g;
      function p(e, t, n) {
        if (
          1 === e.length &&
          "object" == typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var a,
          i = !0,
          o = "";
        r = void 0;
        var s = e[0];
        null == s || void 0 === s.raw
          ? ((i = !1), (o += h(n, t, s)))
          : (o += s[0]);
        for (var l = 1; l < e.length; l++)
          (o += h(n, t, e[l])), i && (o += s[l]);
        f.lastIndex = 0;
        for (var u = ""; null !== (a = f.exec(o)); ) u += "-" + a[1];
        return {
          name:
            (function (e) {
              for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
                (t =
                  (65535 &
                    (t =
                      (255 & e.charCodeAt(r)) |
                      ((255 & e.charCodeAt(++r)) << 8) |
                      ((255 & e.charCodeAt(++r)) << 16) |
                      ((255 & e.charCodeAt(++r)) << 24))) *
                    1540483477 +
                  (((t >>> 16) * 59797) << 16)),
                  (t ^= t >>> 24),
                  (n =
                    ((65535 & t) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
                    ((65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)));
              switch (a) {
                case 3:
                  n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                  (n ^= 255 & e.charCodeAt(r)),
                    (n =
                      (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16));
              }
              return (
                (n ^= n >>> 13),
                (
                  ((n =
                    (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                    (n >>> 15)) >>>
                  0
                ).toString(36)
              );
            })(o) + u,
          styles: o,
          next: r,
        };
      }
    },
    40768: function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = n(27444),
        i = n(61366),
        o = n(14273),
        s = n(79670),
        l = n(55881),
        u = n(18272),
        c =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        d = (0, u.Z)(function (e) {
          return (
            c.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          );
        }),
        h = function (e) {
          return "theme" !== e;
        },
        f = function (e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? d : h;
        },
        p = function (e, t, n) {
          var r;
          if (t) {
            var a = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && a
                ? function (t) {
                    return e.__emotion_forwardProp(t) && a(t);
                  }
                : a;
          }
          return (
            "function" != typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        b = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            (0, s.hC)(t, n, r),
            (0, o.L)(function () {
              return (0, s.My)(t, n, r);
            }),
            null
          );
        },
        m = function e(t, n) {
          var o,
            u,
            c = t.__emotion_real === t,
            d = (c && t.__emotion_base) || t;
          void 0 !== n && ((o = n.label), (u = n.target));
          var h = p(t, n, c),
            m = h || f(d),
            y = !m("as");
          return function () {
            var g = arguments,
              w =
                c && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== o && w.push("label:" + o + ";"),
              null == g[0] || void 0 === g[0].raw)
            )
              w.push.apply(w, g);
            else {
              var v = g[0];
              w.push(v[0]);
              for (var x = g.length, E = 1; E < x; E++) w.push(g[E], v[E]);
            }
            var C = (0, a.w)(function (e, t, n) {
              var r = (y && e.as) || d,
                o = "",
                c = [],
                p = e;
              if (null == e.theme) {
                for (var g in ((p = {}), e)) p[g] = e[g];
                p.theme = l.useContext(a.T);
              }
              "string" == typeof e.className
                ? (o = (0, s.fp)(t.registered, c, e.className))
                : null != e.className && (o = e.className + " ");
              var v = (0, i.O)(w.concat(c), t.registered, p);
              (o += t.key + "-" + v.name), void 0 !== u && (o += " " + u);
              var x = y && void 0 === h ? f(r) : m,
                E = {};
              for (var C in e) (!y || "as" !== C) && x(C) && (E[C] = e[C]);
              return (
                (E.className = o),
                n && (E.ref = n),
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(b, {
                    cache: t,
                    serialized: v,
                    isStringTag: "string" == typeof r,
                  }),
                  l.createElement(r, E)
                )
              );
            });
            return (
              (C.displayName =
                void 0 !== o
                  ? o
                  : "Styled(" +
                    ("string" == typeof d
                      ? d
                      : d.displayName || d.name || "Component") +
                    ")"),
              (C.defaultProps = t.defaultProps),
              (C.__emotion_real = C),
              (C.__emotion_base = d),
              (C.__emotion_styles = w),
              (C.__emotion_forwardProp = h),
              Object.defineProperty(C, "toString", {
                value: function () {
                  return "." + u;
                },
              }),
              (C.withComponent = function (t, a) {
                return e(
                  t,
                  r({}, n, a, { shouldForwardProp: p(C, a, !0) })
                ).apply(void 0, w);
              }),
              C
            );
          };
        }.bind(null);
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        m[e] = m(e);
      });
    },
    14273: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var r,
        a = n(55881),
        i =
          !!(r || (r = n.t(a, 2))).useInsertionEffect &&
          (r || (r = n.t(a, 2))).useInsertionEffect,
        o =
          i ||
          function (e) {
            return e();
          };
      i || a.useLayoutEffect;
    },
    79670: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : n && (r += n + " ");
          }),
          r
        );
      }
      n.d(t, {
        My: function () {
          return i;
        },
        fp: function () {
          return r;
        },
        hC: function () {
          return a;
        },
      });
      var a = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        i = function (e, t, n) {
          a(e, t, n);
          var r = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var i = t;
            do e.insert(t === i ? "." + r : "", i, e.sheet, !0), (i = i.next);
            while (void 0 !== i);
          }
        };
    },
    6190: function (e, t, n) {
      "use strict";
      var r = n(38476),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(e) {
        return r.isMemo(e) ? o : s[e.$$typeof] || a;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var a = f(n);
            a && a !== p && e(t, a, r);
          }
          var o = c(n);
          d && (o = o.concat(d(n)));
          for (var s = l(t), b = l(n), m = 0; m < o.length; ++m) {
            var y = o[m];
            if (!i[y] && !(r && r[y]) && !(b && b[y]) && !(s && s[y])) {
              var g = h(n, y);
              try {
                u(t, y, g);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    98745: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(55881);
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" ");
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let s = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: a = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: c,
            iconNode: d,
            ...h
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...o,
              width: a,
              height: a,
              stroke: n,
              strokeWidth: l ? (24 * Number(s)) / Number(a) : s,
              className: i("lucide", u),
              ...h,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        l = (e, t) => {
          let n = (0, r.forwardRef)((n, o) => {
            let { className: l, ...u } = n;
            return (0, r.createElement)(s, {
              ref: o,
              iconNode: t,
              className: i("lucide-".concat(a(e)), l),
              ...u,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    24864: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    7446: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    39722: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
      ]);
    },
    17518: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    31947: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]);
    },
    26707: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("DollarSign", [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        [
          "path",
          {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s",
          },
        ],
      ]);
    },
    61312: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    89040: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Key", [
        [
          "path",
          {
            d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
            key: "g0fldk",
          },
        ],
        ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
        ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
      ]);
    },
    56667: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    25011: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    48798: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("RefreshCw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    99976: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Sparkles", [
        [
          "path",
          {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx",
          },
        ],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        ["path", { d: "M22 5h-4", key: "1gvqau" }],
        ["path", { d: "M4 17v2", key: "vumght" }],
        ["path", { d: "M5 18H3", key: "zchphs" }],
      ]);
    },
    59914: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(98745).Z)("Trash2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
      ]);
    },
    6984: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
      let r = n(89595);
      function a(e) {
        let { createServerReference: t } = n(70527);
        return t(e, r.callServer);
      }
    },
    23581: function () {},
    48767: function (e, t) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        a = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        h = n ? Symbol.for("react.forward_ref") : 60112,
        f = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        b = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        g = n ? Symbol.for("react.fundamental") : 60117,
        w = n ? Symbol.for("react.responder") : 60118,
        v = n ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case i:
                case s:
                case o:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case h:
                    case m:
                    case b:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function E(e) {
        return x(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = h),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = b),
        (t.Portal = a),
        (t.Profiler = s),
        (t.StrictMode = o),
        (t.Suspense = f),
        (t.isAsyncMode = function (e) {
          return E(e) || x(e) === c;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return x(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return x(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return x(e) === h;
        }),
        (t.isFragment = function (e) {
          return x(e) === i;
        }),
        (t.isLazy = function (e) {
          return x(e) === m;
        }),
        (t.isMemo = function (e) {
          return x(e) === b;
        }),
        (t.isPortal = function (e) {
          return x(e) === a;
        }),
        (t.isProfiler = function (e) {
          return x(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return x(e) === o;
        }),
        (t.isSuspense = function (e) {
          return x(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === d ||
            e === s ||
            e === o ||
            e === f ||
            e === p ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === h ||
                e.$$typeof === g ||
                e.$$typeof === w ||
                e.$$typeof === v ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = x);
    },
    38476: function (e, t, n) {
      "use strict";
      e.exports = n(48767);
    },
    67392: function (e, t, n) {
      "use strict";
      var r = n(89445);
      n(23581);
      var a = n(55881),
        i = a && "object" == typeof a && "default" in a ? a : { default: a },
        o = void 0 !== r && r.env && !0,
        s = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              a = t.optimizeForSpeed,
              i = void 0 === a ? o : a;
            u(s(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = i),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null;
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              u(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                u(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              if (
                (u(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              if (
                (u(s(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (t.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var n =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                u(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              if ("undefined" == typeof window) {
                this._serverSheet.deleteRule(e);
                return;
              }
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                u(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (t.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, n) {
                    return (
                      n
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(n).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (t.makeStyleTag = function (e, t, n) {
              t &&
                u(
                  s(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var a = document.head || document.getElementsByTagName("head")[0];
              return n ? a.insertBefore(r, n) : a.appendChild(r), r;
            }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function u(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        d = {};
      function h(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return d[r] || (d[r] = "jsx-" + c(e + "-" + n)), d[r];
      }
      function f(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return (
          d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              a = t.optimizeForSpeed,
              i = void 0 !== a && a;
            (this._sheet =
              r || new l({ name: "styled-jsx", optimizeForSpeed: i })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                a = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var i = a
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = i), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return i.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var a = h(r, n);
                return {
                  styleId: a,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return f(a, e);
                      })
                    : [f(a, t)],
                };
              }
              return { styleId: h(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        b = a.createContext(null);
      b.displayName = "StyleSheetContext";
      var m = i.default.useInsertionEffect || i.default.useLayoutEffect,
        y = "undefined" != typeof window ? new p() : void 0;
      function g(e) {
        var t = y || a.useContext(b);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : m(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (g.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = g);
    },
    19487: function (e, t, n) {
      "use strict";
      e.exports = n(67392).style;
    },
    86279: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dd: function () {
          return S;
        },
        FF: function () {
          return I;
        },
        Fy: function () {
          return k;
        },
        H9: function () {
          return _;
        },
        S5: function () {
          return w;
        },
        Z2: function () {
          return C;
        },
        _t: function () {
          return o;
        },
        bytesToNumberBE: function () {
          return m;
        },
        ci: function () {
          return c;
        },
        dQ: function () {
          return T;
        },
        eV: function () {
          return x;
        },
        gk: function () {
          return s;
        },
        hexToBytes: function () {
          return b;
        },
        ly: function () {
          return h;
        },
        n$: function () {
          return O;
        },
        ql: function () {
          return v;
        },
        tL: function () {
          return g;
        },
        ty: function () {
          return y;
        },
        uw: function () {
          return l;
        },
        uz: function () {
          return d;
        },
      });
      let r = BigInt(0),
        a = BigInt(1),
        i = BigInt(2);
      function o(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function s(e) {
        if (!o(e)) throw Error("Uint8Array expected");
      }
      function l(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function c(e) {
        s(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += u[e[n]];
        return t;
      }
      function d(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function h(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? r : BigInt("0x" + e);
      }
      let f = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function p(e) {
        return e >= f._0 && e <= f._9
          ? e - f._0
          : e >= f.A && e <= f.F
          ? e - (f.A - 10)
          : e >= f.a && e <= f.f
          ? e - (f.a - 10)
          : void 0;
      }
      function b(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = p(e.charCodeAt(a)),
            i = p(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }
      function m(e) {
        return h(c(e));
      }
      function y(e) {
        return s(e), h(c(Uint8Array.from(e).reverse()));
      }
      function g(e, t) {
        return b(e.toString(16).padStart(2 * t, "0"));
      }
      function w(e, t) {
        return g(e, t).reverse();
      }
      function v(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = b(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (o(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let a = r.length;
        if ("number" == typeof n && a !== n)
          throw Error(e + " of length " + n + " expected, got " + a);
        return r;
      }
      function x(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          s(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let a = e[t];
          n.set(a, r), (r += a.length);
        }
        return n;
      }
      let E = (e) => "bigint" == typeof e && r <= e;
      function C(e, t, n) {
        return E(e) && E(t) && E(n) && t <= e && e < n;
      }
      function k(e, t, n, r) {
        if (!C(t, n, r))
          throw Error(
            "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
          );
      }
      function S(e) {
        let t;
        for (t = 0; e > r; e >>= a, t += 1);
        return t;
      }
      let T = (e) => (i << BigInt(e - 1)) - a,
        R = (e) => new Uint8Array(e),
        P = (e) => Uint8Array.from(e);
      function O(e, t, n) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof n) throw Error("hmacFn must be a function");
        let r = R(e),
          a = R(e),
          i = 0,
          o = () => {
            r.fill(1), a.fill(0), (i = 0);
          },
          s = (...e) => n(a, r, ...e),
          l = (e = R()) => {
            (a = s(P([0]), e)),
              (r = s()),
              0 !== e.length && ((a = s(P([1]), e)), (r = s()));
          },
          u = () => {
            if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              n = [];
            for (; e < t; ) {
              let t = (r = s()).slice();
              n.push(t), (e += r.length);
            }
            return x(...n);
          };
        return (e, t) => {
          let n;
          for (o(), l(e); !(n = t(u())); ) l();
          return o(), n;
        };
      }
      let A = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || o(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function I(e, t, n = {}) {
        let r = (t, n, r) => {
          let a = A[n];
          if ("function" != typeof a) throw Error("invalid validator function");
          let i = e[t];
          if ((!r || void 0 !== i) && !a(i, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + n + ", got " + i
            );
        };
        for (let [e, n] of Object.entries(t)) r(e, n, !1);
        for (let [e, t] of Object.entries(n)) r(e, t, !0);
        return e;
      }
      function _(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let a = t.get(n);
          if (void 0 !== a) return a;
          let i = e(n, ...r);
          return t.set(n, i), i;
        };
      }
    },
    23646: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function a(e, ...t) {
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
      function i(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      n.d(t, {
        secp256k1: function () {
          return eo;
        },
      });
      let o =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        s = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        l = (e, t) => (e << (32 - t)) | (e >>> t);
      function u(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          a(e),
          e
        );
      }
      class c {
        clone() {
          return this._cloneInto();
        }
      }
      function d(e = 32) {
        if (o && "function" == typeof o.getRandomValues)
          return o.getRandomValues(new Uint8Array(e));
        if (o && "function" == typeof o.randomBytes) return o.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let h = (e, t, n) => (e & t) ^ (~e & n),
        f = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      class p extends c {
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
            (this.view = s(this.buffer));
        }
        update(e) {
          i(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = u(e)).length;
          for (let i = 0; i < a; ) {
            let o = Math.min(r - this.pos, a - i);
            if (o === r) {
              let t = s(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + o), this.pos),
              (this.pos += o),
              (i += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          i(this),
            (function (e, t) {
              a(e);
              let n = t.outputLen;
              if (e.length < n)
                throw Error(
                  "digestInto() expects output buffer of length at least " + n
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: n, blockLen: r, isLE: o } = this,
            { pos: l } = this;
          (t[l++] = 128),
            this.buffer.subarray(l).fill(0),
            this.padOffset > r - l && (this.process(n, 0), (l = 0));
          for (let e = l; e < r; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(4294967295),
              o = Number((n >> a) & i),
              s = Number(n & i),
              l = r ? 4 : 0,
              u = r ? 0 : 4;
            e.setUint32(t + l, o, r), e.setUint32(t + u, s, r);
          })(n, r - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
          let u = s(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let d = c / 4,
            h = this.get();
          if (d > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < d; e++) u.setUint32(4 * e, h[e], o);
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
            finished: a,
            destroyed: i,
            pos: o,
          } = this;
          return (
            (e.length = r),
            (e.pos = o),
            (e.finished = a),
            (e.destroyed = i),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let b = new Uint32Array([
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
        m = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        y = new Uint32Array(64);
      class g extends p {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | m[0]),
            (this.B = 0 | m[1]),
            (this.C = 0 | m[2]),
            (this.D = 0 | m[3]),
            (this.E = 0 | m[4]),
            (this.F = 0 | m[5]),
            (this.G = 0 | m[6]),
            (this.H = 0 | m[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: o, H: s } = this;
          return [e, t, n, r, a, i, o, s];
        }
        set(e, t, n, r, a, i, o, s) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | o),
            (this.H = 0 | s);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) y[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = y[e - 15],
              n = y[e - 2],
              r = l(t, 7) ^ l(t, 18) ^ (t >>> 3),
              a = l(n, 17) ^ l(n, 19) ^ (n >>> 10);
            y[e] = (a + y[e - 7] + r + y[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: o, F: s, G: u, H: c } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (c +
                  (l(o, 6) ^ l(o, 11) ^ l(o, 25)) +
                  h(o, s, u) +
                  b[e] +
                  y[e]) |
                0,
              d = ((l(n, 2) ^ l(n, 13) ^ l(n, 22)) + f(n, r, a)) | 0;
            (c = u),
              (u = s),
              (s = o),
              (o = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + d) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (o = (o + this.E) | 0),
            (s = (s + this.F) | 0),
            (u = (u + this.G) | 0),
            (c = (c + this.H) | 0),
            this.set(n, r, a, i, o, s, u, c);
        }
        roundClean() {
          y.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let w = (function (e) {
        let t = (t) => e().update(u(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      })(() => new g());
      class v extends c {
        constructor(e, t) {
          super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (function (e) {
              if ("function" != typeof e || "function" != typeof e.create)
                throw Error("Hash should be wrapped by utils.wrapConstructor");
              r(e.outputLen), r(e.blockLen);
            })(e);
          let n = u(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let a = this.blockLen,
            i = new Uint8Array(a);
          i.set(n.length > a ? e.create().update(n).digest() : n);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return i(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          i(this),
            a(e, this.outputLen),
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
            iHash: n,
            finished: r,
            destroyed: a,
            blockLen: i,
            outputLen: o,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = a),
            (e.blockLen = i),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let x = (e, t, n) => new v(e, t).update(n).digest();
      x.create = (e, t) => new v(e, t);
      var E = n(86279);
      let C = BigInt(0),
        k = BigInt(1),
        S = BigInt(2),
        T = BigInt(3),
        R = BigInt(4),
        P = BigInt(5),
        O = BigInt(8);
      function A(e, t) {
        let n = e % t;
        return n >= C ? n : t + n;
      }
      function I(e, t, n) {
        let r = e;
        for (; t-- > C; ) (r *= r), (r %= n);
        return r;
      }
      function _(e, t) {
        if (e === C) throw Error("invert: expected non-zero number");
        if (t <= C) throw Error("invert: expected positive modulus, got " + t);
        let n = A(e, t),
          r = t,
          a = C,
          i = k,
          o = k,
          s = C;
        for (; n !== C; ) {
          let e = r / n,
            t = r % n,
            l = a - o * e,
            u = i - s * e;
          (r = n), (n = t), (a = o), (i = s), (o = l), (s = u);
        }
        if (r !== k) throw Error("invert: does not exist");
        return A(a, t);
      }
      let B = [
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
      function j(e, t) {
        let n = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
      }
      function N(e, t, n = !1, r = {}) {
        let a;
        if (e <= C) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: i, nByteLength: o } = j(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let s = Object.freeze({
          ORDER: e,
          BITS: i,
          BYTES: o,
          MASK: (0, E.dQ)(i),
          ZERO: C,
          ONE: k,
          create: (t) => A(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return C <= t && t < e;
          },
          is0: (e) => e === C,
          isOdd: (e) => (e & k) === k,
          neg: (t) => A(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => A(t * t, e),
          add: (t, n) => A(t + n, e),
          sub: (t, n) => A(t - n, e),
          mul: (t, n) => A(t * n, e),
          pow: (e, t) =>
            (function (e, t, n) {
              if (n < C) throw Error("invalid exponent, negatives unsupported");
              if (n === C) return e.ONE;
              if (n === k) return t;
              let r = e.ONE,
                a = t;
              for (; n > C; )
                n & k && (r = e.mul(r, a)), (a = e.sqr(a)), (n >>= k);
              return r;
            })(s, e, t),
          div: (t, n) => A(t * _(n, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => _(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              a ||
                (a = (function (e) {
                  if (e % R === T) {
                    let t = (e + k) / R;
                    return function (e, n) {
                      let r = e.pow(n, t);
                      if (!e.eql(e.sqr(r), n))
                        throw Error("Cannot find square root");
                      return r;
                    };
                  }
                  if (e % O === P) {
                    let t = (e - P) / O;
                    return function (e, n) {
                      let r = e.mul(n, S),
                        a = e.pow(r, t),
                        i = e.mul(n, a),
                        o = e.mul(e.mul(i, S), a),
                        s = e.mul(i, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(s), n))
                        throw Error("Cannot find square root");
                      return s;
                    };
                  }
                  return (function (e) {
                    let t, n, r;
                    let a = (e - k) / S;
                    for (t = e - k, n = 0; t % S === C; t /= S, n++);
                    for (
                      r = S;
                      r < e &&
                      (function (e, t, n) {
                        if (t < C)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (n <= C) throw Error("invalid modulus");
                        if (n === k) return C;
                        let r = k;
                        for (; t > C; )
                          t & k && (r = (r * e) % n),
                            (e = (e * e) % n),
                            (t >>= k);
                        return r;
                      })(r, a, e) !==
                        e - k;
                      r++
                    )
                      if (r > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === n) {
                      let t = (e + k) / R;
                      return function (e, n) {
                        let r = e.pow(n, t);
                        if (!e.eql(e.sqr(r), n))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    let i = (t + k) / S;
                    return function (e, o) {
                      if (e.pow(o, a) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let s = n,
                        l = e.pow(e.mul(e.ONE, r), t),
                        u = e.pow(o, i),
                        c = e.pow(o, t);
                      for (; !e.eql(c, e.ONE); ) {
                        if (e.eql(c, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let n = e.sqr(c); t < s && !e.eql(n, e.ONE); t++)
                          n = e.sqr(n);
                        let n = e.pow(l, k << BigInt(s - t - 1));
                        (l = e.sqr(n)),
                          (u = e.mul(u, n)),
                          (c = e.mul(c, l)),
                          (s = t);
                      }
                      return u;
                    };
                  })(e);
                })(e)),
              a(s, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let n = Array(t.length),
                r = t.reduce(
                  (t, r, a) => (e.is0(r) ? t : ((n[a] = t), e.mul(t, r))),
                  e.ONE
                ),
                a = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, a) =>
                    e.is0(r) ? t : ((n[a] = e.mul(t, n[a])), e.mul(t, r)),
                  a
                ),
                n
              );
            })(s, e),
          cmov: (e, t, n) => (n ? t : e),
          toBytes: (e) => (n ? (0, E.S5)(e, o) : (0, E.tL)(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return n ? (0, E.ty)(e) : (0, E.bytesToNumberBE)(e);
          },
        });
        return Object.freeze(s);
      }
      function M(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function F(e) {
        let t = M(e);
        return t + Math.ceil(t / 2);
      }
      let L = BigInt(0),
        D = BigInt(1);
      function q(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function z(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function $(e, t) {
        return (
          z(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let W = new WeakMap(),
        H = new WeakMap();
      function G(e) {
        return H.get(e) || 1;
      }
      function U(e) {
        return (
          !(function (e) {
            let t = B.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            (0, E.FF)(e, t);
          })(e.Fp),
          (0, E.FF)(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...j(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      function V(e) {
        void 0 !== e.lowS && (0, E.uw)("lowS", e.lowS),
          void 0 !== e.prehash && (0, E.uw)("prehash", e.prehash);
      }
      let { bytesToNumberBE: Z, hexToBytes: K } = E,
        Q = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _tlv: {
            encode: (e, t) => {
              let { Err: n } = Q;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (1 & t.length) throw new n("tlv.encode: unpadded data");
              let r = t.length / 2,
                a = E.uz(r);
              if ((a.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              let i = r > 127 ? E.uz((a.length / 2) | 128) : "";
              return E.uz(e) + i + a + t;
            },
            decode(e, t) {
              let { Err: n } = Q,
                r = 0;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new n("tlv.decode: wrong tlv");
              let a = t[r++],
                i = 0;
              if (128 & a) {
                let e = 127 & a;
                if (!e)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                let o = t.subarray(r, r + e);
                if (o.length !== e)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (let e of o) i = (i << 8) | e;
                if (((r += e), i < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else i = a;
              let o = t.subarray(r, r + i);
              if (o.length !== i) throw new n("tlv.decode: wrong value length");
              return { v: o, l: t.subarray(r + i) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = Q;
              if (e < Y)
                throw new t("integer: negative integers are not allowed");
              let n = E.uz(e);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(e) {
              let { Err: t } = Q;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return Z(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: n, _tlv: r } = Q,
              a = "string" == typeof e ? K(e) : e;
            E.gk(a);
            let { v: i, l: o } = r.decode(48, a);
            if (o.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: s, l: l } = r.decode(2, i),
              { v: u, l: c } = r.decode(2, l);
            if (c.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: n.decode(s), s: n.decode(u) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: n } = Q,
              r = t.encode(2, n.encode(e.r)),
              a = t.encode(2, n.encode(e.s));
            return t.encode(48, r + a);
          },
        },
        Y = BigInt(0),
        X = BigInt(1),
        J = (BigInt(2), BigInt(3));
      BigInt(4);
      let ee = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        et = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        en = BigInt(1),
        er = BigInt(2),
        ea = (e, t) => (e + t / er) / t,
        ei = N(ee, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              n = BigInt(6),
              r = BigInt(11),
              a = BigInt(22),
              i = BigInt(23),
              o = BigInt(44),
              s = BigInt(88),
              l = (e * e * e) % ee,
              u = (l * l * e) % ee,
              c = (I(u, t, ee) * u) % ee,
              d = (I(c, t, ee) * u) % ee,
              h = (I(d, er, ee) * l) % ee,
              f = (I(h, r, ee) * h) % ee,
              p = (I(f, a, ee) * f) % ee,
              b = (I(p, o, ee) * p) % ee,
              m = (I(b, s, ee) * b) % ee,
              y = (I(m, o, ee) * p) % ee,
              g = (I(y, t, ee) * u) % ee,
              w = (I(g, i, ee) * f) % ee,
              v = (I(w, n, ee) * l) % ee,
              x = I(v, er, ee);
            if (!ei.eql(ei.sqr(x), e)) throw Error("Cannot find square root");
            return x;
          },
        }),
        eo = (function (e, t) {
          let n = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = U(e);
                  return (
                    E.FF(
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
                { Fp: n, n: r } = t,
                a = n.BYTES + 1,
                i = 2 * n.BYTES + 1;
              function o(e) {
                return A(e, r);
              }
              let {
                  ProjectivePoint: s,
                  normPrivateKeyToScalar: l,
                  weierstrassEquation: u,
                  isWithinCurveOrder: c,
                } = (function (e) {
                  var t;
                  let n = (function (e) {
                      let t = U(e);
                      E.FF(
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
                      let { endo: n, Fp: r, a } = t;
                      if (n) {
                        if (!r.eql(a, r.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof n ||
                          "bigint" != typeof n.beta ||
                          "function" != typeof n.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = n,
                    a = N(n.n, n.nBitLength),
                    i =
                      n.toBytes ||
                      ((e, t, n) => {
                        let a = t.toAffine();
                        return E.eV(
                          Uint8Array.from([4]),
                          r.toBytes(a.x),
                          r.toBytes(a.y)
                        );
                      }),
                    o =
                      n.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: t, b: a } = n,
                      i = r.sqr(e),
                      o = r.mul(i, e);
                    return r.add(r.add(o, r.mul(e, t)), a);
                  }
                  if (!r.eql(r.sqr(n.Gy), s(n.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function l(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: r,
                      nByteLength: a,
                      wrapPrivateKey: i,
                      n: o,
                    } = n;
                    if (r && "bigint" != typeof e) {
                      if (
                        (E._t(e) && (e = E.ci(e)),
                        "string" != typeof e || !r.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * a, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e
                          ? e
                          : E.bytesToNumberBE((0, E.ql)("private key", e, a));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          a +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return i && (t = A(t, o)), E.Fy("private key", t, X, o), t;
                  }
                  function u(e) {
                    if (!(e instanceof h))
                      throw Error("ProjectivePoint expected");
                  }
                  let c = (0, E.H9)((e, t) => {
                      let { px: n, py: a, pz: i } = e;
                      if (r.eql(i, r.ONE)) return { x: n, y: a };
                      let o = e.is0();
                      null == t && (t = o ? r.ONE : r.inv(i));
                      let s = r.mul(n, t),
                        l = r.mul(a, t),
                        u = r.mul(i, t);
                      if (o) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: l };
                    }),
                    d = (0, E.H9)((e) => {
                      if (e.is0()) {
                        if (n.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: a } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(a))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(a),
                        o = s(t);
                      if (!r.eql(i, o))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class h {
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
                      if (e instanceof h)
                        throw Error("projective point not allowed");
                      let a = (e) => r.eql(e, r.ZERO);
                      return a(t) && a(n) ? h.ZERO : new h(t, n, r.ONE);
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
                        .map((e, n) => e.toAffine(t[n]))
                        .map(h.fromAffine);
                    }
                    static fromHex(e) {
                      let t = h.fromAffine(o((0, E.ql)("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return h.BASE.multiply(l(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, n, r) {
                        if (
                          (!(function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, n) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + n);
                            });
                          })(n, e),
                          !(function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, n) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + n);
                            });
                          })(r, t),
                          n.length !== r.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let a = e.ZERO,
                          i = (0, E.Dd)(BigInt(n.length)),
                          o = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1,
                          s = (1 << o) - 1,
                          l = Array(s + 1).fill(a),
                          u = Math.floor((t.BITS - 1) / o) * o,
                          c = a;
                        for (let e = u; e >= 0; e -= o) {
                          l.fill(a);
                          for (let t = 0; t < r.length; t++) {
                            let a = Number((r[t] >> BigInt(e)) & BigInt(s));
                            l[a] = l[a].add(n[t]);
                          }
                          let t = a;
                          for (let e = l.length - 1, n = a; e > 0; e--)
                            (n = n.add(l[e])), (t = t.add(n));
                          if (((c = c.add(t)), 0 !== e))
                            for (let e = 0; e < o; e++) c = c.double();
                        }
                        return c;
                      })(h, a, e, t);
                    }
                    _setWindowSize(e) {
                      p.setWindowSize(this, e);
                    }
                    assertValidity() {
                      d(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      u(e);
                      let { px: t, py: n, pz: a } = this,
                        { px: i, py: o, pz: s } = e,
                        l = r.eql(r.mul(t, s), r.mul(i, a)),
                        c = r.eql(r.mul(n, s), r.mul(o, a));
                      return l && c;
                    }
                    negate() {
                      return new h(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = n,
                        a = r.mul(t, J),
                        { px: i, py: o, pz: s } = this,
                        l = r.ZERO,
                        u = r.ZERO,
                        c = r.ZERO,
                        d = r.mul(i, i),
                        f = r.mul(o, o),
                        p = r.mul(s, s),
                        b = r.mul(i, o);
                      return (
                        (b = r.add(b, b)),
                        (c = r.mul(i, s)),
                        (c = r.add(c, c)),
                        (l = r.mul(e, c)),
                        (u = r.mul(a, p)),
                        (u = r.add(l, u)),
                        (l = r.sub(f, u)),
                        (u = r.add(f, u)),
                        (u = r.mul(l, u)),
                        (l = r.mul(b, l)),
                        (c = r.mul(a, c)),
                        (p = r.mul(e, p)),
                        (b = r.sub(d, p)),
                        (b = r.mul(e, b)),
                        (b = r.add(b, c)),
                        (c = r.add(d, d)),
                        (d = r.add(c, d)),
                        (d = r.add(d, p)),
                        (d = r.mul(d, b)),
                        (u = r.add(u, d)),
                        (p = r.mul(o, s)),
                        (p = r.add(p, p)),
                        (d = r.mul(p, b)),
                        (l = r.sub(l, d)),
                        (c = r.mul(p, f)),
                        (c = r.add(c, c)),
                        new h(l, u, (c = r.add(c, c)))
                      );
                    }
                    add(e) {
                      u(e);
                      let { px: t, py: a, pz: i } = this,
                        { px: o, py: s, pz: l } = e,
                        c = r.ZERO,
                        d = r.ZERO,
                        f = r.ZERO,
                        p = n.a,
                        b = r.mul(n.b, J),
                        m = r.mul(t, o),
                        y = r.mul(a, s),
                        g = r.mul(i, l),
                        w = r.add(t, a),
                        v = r.add(o, s);
                      (w = r.mul(w, v)),
                        (v = r.add(m, y)),
                        (w = r.sub(w, v)),
                        (v = r.add(t, i));
                      let x = r.add(o, l);
                      return (
                        (v = r.mul(v, x)),
                        (x = r.add(m, g)),
                        (v = r.sub(v, x)),
                        (x = r.add(a, i)),
                        (c = r.add(s, l)),
                        (x = r.mul(x, c)),
                        (c = r.add(y, g)),
                        (x = r.sub(x, c)),
                        (f = r.mul(p, v)),
                        (c = r.mul(b, g)),
                        (f = r.add(c, f)),
                        (c = r.sub(y, f)),
                        (f = r.add(y, f)),
                        (d = r.mul(c, f)),
                        (y = r.add(m, m)),
                        (y = r.add(y, m)),
                        (g = r.mul(p, g)),
                        (v = r.mul(b, v)),
                        (y = r.add(y, g)),
                        (g = r.sub(m, g)),
                        (g = r.mul(p, g)),
                        (v = r.add(v, g)),
                        (m = r.mul(y, v)),
                        (d = r.add(d, m)),
                        (m = r.mul(x, v)),
                        (c = r.mul(w, c)),
                        (c = r.sub(c, m)),
                        (m = r.mul(w, y)),
                        (f = r.mul(x, f)),
                        new h(c, d, (f = r.add(f, m)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(e) {
                      return p.wNAFCached(this, e, h.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: a } = n;
                      E.Fy("scalar", e, Y, a);
                      let i = h.ZERO;
                      if (e === Y) return i;
                      if (this.is0() || e === X) return this;
                      if (!t || p.hasPrecomputes(this))
                        return p.wNAFCachedUnsafe(this, e, h.normalizeZ);
                      let {
                          k1neg: o,
                          k1: s,
                          k2neg: l,
                          k2: u,
                        } = t.splitScalar(e),
                        c = i,
                        d = i,
                        f = this;
                      for (; s > Y || u > Y; )
                        s & X && (c = c.add(f)),
                          u & X && (d = d.add(f)),
                          (f = f.double()),
                          (s >>= X),
                          (u >>= X);
                      return (
                        o && (c = c.negate()),
                        l && (d = d.negate()),
                        (d = new h(r.mul(d.px, t.beta), d.py, d.pz)),
                        c.add(d)
                      );
                    }
                    multiply(e) {
                      let t, a;
                      let { endo: i, n: o } = n;
                      if ((E.Fy("scalar", e, X, o), i)) {
                        let {
                            k1neg: n,
                            k1: o,
                            k2neg: s,
                            k2: l,
                          } = i.splitScalar(e),
                          { p: u, f: c } = this.wNAF(o),
                          { p: d, f: f } = this.wNAF(l);
                        (u = p.constTimeNegate(n, u)),
                          (d = p.constTimeNegate(s, d)),
                          (d = new h(r.mul(d.px, i.beta), d.py, d.pz)),
                          (t = u.add(d)),
                          (a = c.add(f));
                      } else {
                        let { p: n, f: r } = this.wNAF(e);
                        (t = n), (a = r);
                      }
                      return h.normalizeZ([t, a])[0];
                    }
                    multiplyAndAddUnsafe(e, t, n) {
                      let r = h.BASE,
                        a = (e, t) =>
                          t !== Y && t !== X && e.equals(r)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        i = a(this, t).add(a(e, n));
                      return i.is0() ? void 0 : i;
                    }
                    toAffine(e) {
                      return c(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = n;
                      if (e === X) return !0;
                      if (t) return t(h, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = n;
                      return e === X
                        ? this
                        : t
                        ? t(h, this)
                        : this.multiplyUnsafe(n.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        (0, E.uw)("isCompressed", e),
                        this.assertValidity(),
                        i(h, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return (
                        (0, E.uw)("isCompressed", e), E.ci(this.toRawBytes(e))
                      );
                    }
                  }
                  (h.BASE = new h(n.Gx, n.Gy, r.ONE)),
                    (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
                  let f = n.nBitLength,
                    p =
                      ((t = n.endo ? Math.ceil(f / 2) : f),
                      {
                        constTimeNegate: q,
                        hasPrecomputes: (e) => 1 !== G(e),
                        unsafeLadder(e, t, n = h.ZERO) {
                          let r = e;
                          for (; t > L; )
                            t & D && (n = n.add(r)),
                              (r = r.double()),
                              (t >>= D);
                          return n;
                        },
                        precomputeWindow(e, n) {
                          let { windows: r, windowSize: a } = $(n, t),
                            i = [],
                            o = e,
                            s = o;
                          for (let e = 0; e < r; e++) {
                            (s = o), i.push(s);
                            for (let e = 1; e < a; e++)
                              (s = s.add(o)), i.push(s);
                            o = s.double();
                          }
                          return i;
                        },
                        wNAF(e, n, r) {
                          let { windows: a, windowSize: i } = $(e, t),
                            o = h.ZERO,
                            s = h.BASE,
                            l = BigInt(2 ** e - 1),
                            u = 2 ** e,
                            c = BigInt(e);
                          for (let e = 0; e < a; e++) {
                            let t = e * i,
                              a = Number(r & l);
                            (r >>= c), a > i && ((a -= u), (r += D));
                            let d = t + Math.abs(a) - 1,
                              h = e % 2 != 0,
                              f = a < 0;
                            0 === a
                              ? (s = s.add(q(h, n[t])))
                              : (o = o.add(q(f, n[d])));
                          }
                          return { p: o, f: s };
                        },
                        wNAFUnsafe(e, n, r, a = h.ZERO) {
                          let { windows: i, windowSize: o } = $(e, t),
                            s = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            u = BigInt(e);
                          for (let e = 0; e < i; e++) {
                            let t = e * o;
                            if (r === L) break;
                            let i = Number(r & s);
                            if (
                              ((r >>= u),
                              i > o && ((i -= l), (r += D)),
                              0 === i)
                            )
                              continue;
                            let c = n[t + Math.abs(i) - 1];
                            i < 0 && (c = c.negate()), (a = a.add(c));
                          }
                          return a;
                        },
                        getPrecomputes(e, t, n) {
                          let r = W.get(t);
                          return (
                            r ||
                              ((r = this.precomputeWindow(t, e)),
                              1 !== e && W.set(t, n(r))),
                            r
                          );
                        },
                        wNAFCached(e, t, n) {
                          let r = G(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, n), t);
                        },
                        wNAFCachedUnsafe(e, t, n, r) {
                          let a = G(e);
                          return 1 === a
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(
                                a,
                                this.getPrecomputes(a, e, n),
                                t,
                                r
                              );
                        },
                        setWindowSize(e, n) {
                          z(n, t), H.set(e, n), W.delete(e);
                        },
                      });
                  return {
                    CURVE: n,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: l,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (e) {
                      return E.Z2(e, X, n.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let a = t.toAffine(),
                      i = n.toBytes(a.x),
                      o = E.eV;
                    return ((0, E.uw)("isCompressed", r), r)
                      ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                      : o(Uint8Array.from([4]), i, n.toBytes(a.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      o = e.subarray(1);
                    if (t === a && (2 === r || 3 === r)) {
                      let e;
                      let t = E.bytesToNumberBE(o);
                      if (!E.Z2(t, X, n.ORDER))
                        throw Error("Point is not on curve");
                      let a = u(t);
                      try {
                        e = n.sqrt(a);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & X) === X) && (e = n.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === i && 4 === r)
                      return {
                        x: n.fromBytes(o.subarray(0, n.BYTES)),
                        y: n.fromBytes(o.subarray(n.BYTES, 2 * n.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        a +
                        ", or uncompressed " +
                        i +
                        ", got " +
                        t
                    );
                  },
                }),
                d = (e) => E.ci(E.tL(e, t.nByteLength)),
                h = (e, t, n) => E.bytesToNumberBE(e.slice(t, n));
              class f {
                constructor(e, t, n) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = n),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let n = t.nByteLength;
                  return new f(
                    h((e = (0, E.ql)("compactSignature", e, 2 * n)), 0, n),
                    h(e, n, 2 * n)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: n } = Q.toSig((0, E.ql)("DER", e));
                  return new f(t, n);
                }
                assertValidity() {
                  E.Fy("r", this.r, X, r), E.Fy("s", this.s, X, r);
                }
                addRecoveryBit(e) {
                  return new f(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: a, s: i, recovery: l } = this,
                    u = m((0, E.ql)("msgHash", e));
                  if (null == l || ![0, 1, 2, 3].includes(l))
                    throw Error("recovery id invalid");
                  let c = 2 === l || 3 === l ? a + t.n : a;
                  if (c >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let h = (1 & l) == 0 ? "02" : "03",
                    f = s.fromHex(h + d(c)),
                    p = _(c, r),
                    b = o(-u * p),
                    y = o(i * p),
                    g = s.BASE.multiplyAndAddUnsafe(f, b, y);
                  if (!g) throw Error("point at infinify");
                  return g.assertValidity(), g;
                }
                hasHighS() {
                  return this.s > r >> X;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new f(this.r, o(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return E.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return Q.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return E.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return d(this.r) + d(this.s);
                }
              }
              function p(e) {
                let t = E._t(e),
                  n = "string" == typeof e,
                  r = (t || n) && e.length;
                return t
                  ? r === a || r === i
                  : n
                  ? r === 2 * a || r === 2 * i
                  : e instanceof s;
              }
              let b =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let n = E.bytesToNumberBE(e),
                      r = 8 * e.length - t.nBitLength;
                    return r > 0 ? n >> BigInt(r) : n;
                  },
                m =
                  t.bits2int_modN ||
                  function (e) {
                    return o(b(e));
                  },
                y = E.dQ(t.nBitLength);
              function g(e) {
                return (
                  E.Fy("num < 2^" + t.nBitLength, e, Y, y),
                  E.tL(e, t.nByteLength)
                );
              }
              let w = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                s.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return s.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, n = !0) {
                    if (p(e)) throw Error("first arg must be private key");
                    if (!p(t)) throw Error("second arg must be public key");
                    return s.fromHex(t).multiply(l(e)).toRawBytes(n);
                  },
                  sign: function (e, a, i = w) {
                    let { seed: u, k2sig: d } = (function (e, a, i = w) {
                      if (["recovered", "canonical"].some((e) => e in i))
                        throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: d } = t,
                        { lowS: h, prehash: p, extraEntropy: y } = i;
                      null == h && (h = !0),
                        (e = (0, E.ql)("msgHash", e)),
                        V(i),
                        p && (e = (0, E.ql)("prehashed msgHash", u(e)));
                      let v = m(e),
                        x = l(a),
                        C = [g(x), g(v)];
                      if (null != y && !1 !== y) {
                        let e = !0 === y ? d(n.BYTES) : y;
                        C.push((0, E.ql)("extraEntropy", e));
                      }
                      return {
                        seed: E.eV(...C),
                        k2sig: function (e) {
                          let t = b(e);
                          if (!c(t)) return;
                          let n = _(t, r),
                            a = s.BASE.multiply(t).toAffine(),
                            i = o(a.x);
                          if (i === Y) return;
                          let l = o(n * o(v + i * x));
                          if (l === Y) return;
                          let u = (a.x === i ? 0 : 2) | Number(a.y & X),
                            d = l;
                          if (h && l > r >> X)
                            (d = l > r >> X ? o(-l) : l), (u ^= 1);
                          return new f(i, d, u);
                        },
                      };
                    })(e, a, i);
                    return E.n$(t.hash.outputLen, t.nByteLength, t.hmac)(u, d);
                  },
                  verify: function (e, n, a, i = v) {
                    let l, u;
                    (n = (0, E.ql)("msgHash", n)),
                      (a = (0, E.ql)("publicKey", a));
                    let { lowS: c, prehash: d, format: h } = i;
                    if ((V(i), "strict" in i))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== h && "compact" !== h && "der" !== h)
                      throw Error("format must be compact or der");
                    let p = "string" == typeof e || E._t(e),
                      b =
                        !p &&
                        !h &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!p && !b)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((b && (u = new f(e.r, e.s)), p)) {
                        try {
                          "compact" !== h && (u = f.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof Q.Err)) throw e;
                        }
                        u || "der" === h || (u = f.fromCompact(e));
                      }
                      l = s.fromHex(a);
                    } catch (e) {
                      return !1;
                    }
                    if (!u || (c && u.hasHighS())) return !1;
                    d && (n = t.hash(n));
                    let { r: y, s: g } = u,
                      w = m(n),
                      x = _(g, r),
                      C = o(w * x),
                      k = o(y * x),
                      S = s.BASE.multiplyAndAddUnsafe(l, C, k)?.toAffine();
                    return !!S && o(S.x) === y;
                  },
                  ProjectivePoint: s,
                  Signature: f,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return l(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: l,
                    randomPrivateKey: () => {
                      let e = F(t.n);
                      return (function (e, t, n = !1) {
                        let r = e.length,
                          a = M(t),
                          i = F(t);
                        if (r < 16 || r < i || r > 1024)
                          throw Error(
                            "expected " + i + "-1024 bytes of input, got " + r
                          );
                        let o =
                          A(
                            n ? (0, E.bytesToNumberBE)(e) : (0, E.ty)(e),
                            t - k
                          ) + k;
                        return n ? (0, E.S5)(o, a) : (0, E.tL)(o, a);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = s.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...n) =>
                x(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) {
                      let r = e[n];
                      a(r), (t += r.length);
                    }
                    let n = new Uint8Array(t);
                    for (let t = 0, r = 0; t < e.length; t++) {
                      let a = e[t];
                      n.set(a, r), (r += a.length);
                    }
                    return n;
                  })(...n)
                ),
              randomBytes: d,
            });
          return Object.freeze({ ...n(t), create: n });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: ei,
            n: et,
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
                  n = -en * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  a = BigInt("0x100000000000000000000000000000000"),
                  i = ea(t * e, et),
                  o = ea(-n * e, et),
                  s = A(e - i * t - o * r, et),
                  l = A(-i * n - o * t, et),
                  u = s > a,
                  c = l > a;
                if ((u && (s = et - s), c && (l = et - l), s > a || l > a))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: s, k2neg: c, k2: l };
              },
            },
          },
          w
        );
      BigInt(0), eo.ProjectivePoint;
    },
    6533: function (e, t, n) {
      "use strict";
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      n.d(t, {
        M: function () {
          return r;
        },
      });
    },
    24286: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return o;
        },
      });
      var r = n(55881);
      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = a(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : a(e[t], null);
              }
            };
        };
      }
      function o(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    16805: function (e, t, n) {
      "use strict";
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var r,
        a = n(55881),
        i = n(6533),
        o = n(14521),
        s = n(24286),
        l = n(28416),
        u = n(53345),
        c = n(90132),
        d = "dismissableLayer.update",
        h = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = a.forwardRef((e, t) => {
          var n, f;
          let {
              disableOutsidePointerEvents: m = !1,
              onEscapeKeyDown: y,
              onPointerDownOutside: g,
              onFocusOutside: w,
              onInteractOutside: v,
              onDismiss: x,
              ...E
            } = e,
            C = a.useContext(h),
            [k, S] = a.useState(null),
            T =
              null !== (f = null == k ? void 0 : k.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, R] = a.useState({}),
            P = (0, s.e)(t, (e) => S(e)),
            O = Array.from(C.layers),
            [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            I = O.indexOf(A),
            _ = k ? O.indexOf(k) : -1,
            B = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = _ >= I,
            N = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, l.W)(e),
                i = a.useRef(!1),
                o = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            b("dismissableLayer.pointerDownOutside", r, a, {
                              discrete: !0,
                            });
                          },
                          a = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", o.current),
                            (o.current = t),
                            n.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", o.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", o.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !j ||
                n ||
                (null == g || g(e),
                null == v || v(e),
                e.defaultPrevented || null == x || x());
            }, T),
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, l.W)(e),
                i = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      b(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == w || w(e),
                null == v || v(e),
                e.defaultPrevented || null == x || x());
            }, T);
          return (
            (0, u.e)((e) => {
              _ !== C.layers.size - 1 ||
                (null == y || y(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, T),
            a.useEffect(() => {
              if (k)
                return (
                  m &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(k)),
                  C.layers.add(k),
                  p(),
                  () => {
                    m &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r);
                  }
                );
            }, [k, T, m, C]),
            a.useEffect(
              () => () => {
                k &&
                  (C.layers.delete(k),
                  C.layersWithOutsidePointerEventsDisabled.delete(k),
                  p());
              },
              [k, C]
            ),
            a.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, c.jsx)(o.WV.div, {
              ...E,
              ref: P,
              style: {
                pointerEvents: B ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                N.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function b(e, t, n, r) {
        let { discrete: a } = r,
          i = n.originalEvent.target,
          s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          a ? (0, o.jH)(i, s) : i.dispatchEvent(s);
      }
      (f.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let n = a.useContext(h),
            r = a.useRef(null),
            i = (0, s.e)(t, r);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(o.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    9340: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        M: function () {
          return h;
        },
      });
      var a = n(55881),
        i = n(24286),
        o = n(14521),
        s = n(28416),
        l = n(90132),
        u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        h = a.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: h,
              onUnmountAutoFocus: y,
              ...g
            } = e,
            [w, v] = a.useState(null),
            x = (0, s.W)(h),
            E = (0, s.W)(y),
            C = a.useRef(null),
            k = (0, i.e)(t, (e) => v(e)),
            S = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          a.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (S.paused || !w) return;
                  let t = e.target;
                  w.contains(t)
                    ? (C.current = t)
                    : b(C.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !w) return;
                  let t = e.relatedTarget;
                  null === t || w.contains(t) || b(C.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && b(w);
              });
              return (
                w && n.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, w, S.paused]),
            a.useEffect(() => {
              if (w) {
                m.add(S);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(u, d);
                  w.addEventListener(u, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (b(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        f(w).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && b(w));
                }
                return () => {
                  w.removeEventListener(u, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, d);
                      w.addEventListener(c, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented ||
                          b(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(c, E),
                        m.remove(S);
                    }, 0);
                };
              }
            }, [w, x, E, S]);
          let T = a.useCallback(
            (e) => {
              if ((!n && !r) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                a = document.activeElement;
              if (t && a) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || a !== i
                    ? e.shiftKey &&
                      a === r &&
                      (e.preventDefault(), n && b(i, { select: !0 }))
                    : (e.preventDefault(), n && b(r, { select: !0 }))
                  : a === t && e.preventDefault();
              }
            },
            [n, r, S.paused]
          );
          return (0, l.jsx)(o.WV.div, {
            tabIndex: -1,
            ...g,
            ref: k,
            onKeyDown: T,
          });
        });
      function f(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function b(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      h.displayName = "FocusScope";
      var m =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = y(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = y(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function y(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    56958: function (e, t, n) {
      "use strict";
      n.d(t, {
        ee: function () {
          return eV;
        },
        Eh: function () {
          return eK;
        },
        VY: function () {
          return eZ;
        },
        fC: function () {
          return eU;
        },
        D7: function () {
          return eA;
        },
      });
      var r = n(55881);
      let a = ["top", "right", "bottom", "left"],
        i = Math.min,
        o = Math.max,
        s = Math.round,
        l = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function h(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function f(e) {
        return e.split("-")[0];
      }
      function p(e) {
        return e.split("-")[1];
      }
      function b(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function y(e) {
        return ["top", "bottom"].includes(f(e)) ? "y" : "x";
      }
      function g(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function v(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: n, width: r, height: a } = e;
        return {
          width: r,
          height: a,
          top: n,
          left: t,
          right: t + r,
          bottom: n + a,
          x: t,
          y: n,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: a, floating: i } = e,
          o = y(t),
          s = b(y(t)),
          l = m(s),
          u = f(t),
          c = "y" === o,
          d = a.x + a.width / 2 - i.width / 2,
          h = a.y + a.height / 2 - i.height / 2,
          g = a[l] / 2 - i[l] / 2;
        switch (u) {
          case "top":
            r = { x: d, y: a.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: a.y + a.height };
            break;
          case "right":
            r = { x: a.x + a.width, y: h };
            break;
          case "left":
            r = { x: a.x - i.width, y: h };
            break;
          default:
            r = { x: a.x, y: a.y };
        }
        switch (p(t)) {
          case "start":
            r[s] -= g * (n && c ? -1 : 1);
            break;
          case "end":
            r[s] += g * (n && c ? -1 : 1);
        }
        return r;
      }
      let C = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: a = "absolute",
            middleware: i = [],
            platform: o,
          } = n,
          s = i.filter(Boolean),
          l = await (null == o.isRTL ? void 0 : o.isRTL(t)),
          u = await o.getElementRects({
            reference: e,
            floating: t,
            strategy: a,
          }),
          { x: c, y: d } = E(u, r, l),
          h = r,
          f = {},
          p = 0;
        for (let n = 0; n < s.length; n++) {
          let { name: i, fn: b } = s[n],
            {
              x: m,
              y: y,
              data: g,
              reset: w,
            } = await b({
              x: c,
              y: d,
              initialPlacement: r,
              placement: h,
              strategy: a,
              middlewareData: f,
              rects: u,
              platform: o,
              elements: { reference: e, floating: t },
            });
          (c = null != m ? m : c),
            (d = null != y ? y : d),
            (f = { ...f, [i]: { ...f[i], ...g } }),
            w &&
              p <= 50 &&
              (p++,
              "object" == typeof w &&
                (w.placement && (h = w.placement),
                w.rects &&
                  (u =
                    !0 === w.rects
                      ? await o.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: a,
                        })
                      : w.rects),
                ({ x: c, y: d } = E(u, h, l))),
              (n = -1));
        }
        return { x: c, y: d, placement: h, strategy: a, middlewareData: f };
      };
      async function k(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: a, platform: i, rects: o, elements: s, strategy: l } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = h(t, e),
          b = v(p),
          m = s[f ? ("floating" === d ? "reference" : "floating") : d],
          y = x(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(s.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: l,
            })
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: a,
                  width: o.floating.width,
                  height: o.floating.height,
                }
              : o.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(s.floating)),
          E = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          C = x(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: g,
                  offsetParent: w,
                  strategy: l,
                })
              : g
          );
        return {
          top: (y.top - C.top + b.top) / E.y,
          bottom: (C.bottom - y.bottom + b.bottom) / E.y,
          left: (y.left - C.left + b.left) / E.x,
          right: (C.right - y.right + b.right) / E.x,
        };
      }
      function S(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function T(e) {
        return a.some((t) => e[t] >= 0);
      }
      async function R(e, t) {
        let { placement: n, platform: r, elements: a } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(a.floating)),
          o = f(n),
          s = p(n),
          l = "y" === y(n),
          u = ["left", "top"].includes(o) ? -1 : 1,
          c = i && l ? -1 : 1,
          d = h(t, e),
          {
            mainAxis: b,
            crossAxis: m,
            alignmentAxis: g,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          s && "number" == typeof g && (m = "end" === s ? -1 * g : g),
          l ? { x: m * c, y: b * u } : { x: b * u, y: m * c }
        );
      }
      function P() {
        return "undefined" != typeof window;
      }
      function O(e) {
        return _(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function A(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function I(e) {
        var t;
        return null ==
          (t = (_(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function _(e) {
        return !!P() && (e instanceof Node || e instanceof A(e).Node);
      }
      function B(e) {
        return !!P() && (e instanceof Element || e instanceof A(e).Element);
      }
      function j(e) {
        return (
          !!P() && (e instanceof HTMLElement || e instanceof A(e).HTMLElement)
        );
      }
      function N(e) {
        return (
          !!P() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof A(e).ShadowRoot)
        );
      }
      function M(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: a } = z(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(a)
        );
      }
      function F(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function L(e) {
        let t = D(),
          n = B(e) ? z(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function D() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function q(e) {
        return ["html", "body", "#document"].includes(O(e));
      }
      function z(e) {
        return A(e).getComputedStyle(e);
      }
      function $(e) {
        return B(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function W(e) {
        if ("html" === O(e)) return e;
        let t = e.assignedSlot || e.parentNode || (N(e) && e.host) || I(e);
        return N(t) ? t.host : t;
      }
      function H(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let a = (function e(t) {
            let n = W(t);
            return q(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : j(n) && M(n)
              ? n
              : e(n);
          })(e),
          i = a === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = A(a);
        if (i) {
          let e = G(o);
          return t.concat(
            o,
            o.visualViewport || [],
            M(a) ? a : [],
            e && n ? H(e) : []
          );
        }
        return t.concat(a, H(a, [], n));
      }
      function G(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function U(e) {
        let t = z(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          a = j(e),
          i = a ? e.offsetWidth : n,
          o = a ? e.offsetHeight : r,
          l = s(n) !== i || s(r) !== o;
        return l && ((n = i), (r = o)), { width: n, height: r, $: l };
      }
      function V(e) {
        return B(e) ? e : e.contextElement;
      }
      function Z(e) {
        let t = V(e);
        if (!j(t)) return u(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: a, $: i } = U(t),
          o = (i ? s(n.width) : n.width) / r,
          l = (i ? s(n.height) : n.height) / a;
        return (
          (o && Number.isFinite(o)) || (o = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: o, y: l }
        );
      }
      let K = u(0);
      function Q(e) {
        let t = A(e);
        return D() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : K;
      }
      function Y(e, t, n, r) {
        var a;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          o = V(e),
          s = u(1);
        t && (r ? B(r) && (s = Z(r)) : (s = Z(e)));
        let l = (void 0 === (a = n) && (a = !1), r && (!a || r === A(o)) && a)
            ? Q(o)
            : u(0),
          c = (i.left + l.x) / s.x,
          d = (i.top + l.y) / s.y,
          h = i.width / s.x,
          f = i.height / s.y;
        if (o) {
          let e = A(o),
            t = r && B(r) ? A(r) : r,
            n = e,
            a = G(n);
          for (; a && r && t !== n; ) {
            let e = Z(a),
              t = a.getBoundingClientRect(),
              r = z(a),
              i = t.left + (a.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              o = t.top + (a.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (h *= e.x),
              (f *= e.y),
              (c += i),
              (d += o),
              (a = G((n = A(a))));
          }
        }
        return x({ width: h, height: f, x: c, y: d });
      }
      function X(e, t) {
        let n = $(e).scrollLeft;
        return t ? t.left + n : Y(I(e)).left + n;
      }
      function J(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = A(e),
              r = I(e),
              a = n.visualViewport,
              i = r.clientWidth,
              o = r.clientHeight,
              s = 0,
              l = 0;
            if (a) {
              (i = a.width), (o = a.height);
              let e = D();
              (!e || (e && "fixed" === t)) &&
                ((s = a.offsetLeft), (l = a.offsetTop));
            }
            return { width: i, height: o, x: s, y: l };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = I(e),
              n = $(e),
              r = e.ownerDocument.body,
              a = o(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = o(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              s = -n.scrollLeft + X(e),
              l = -n.scrollTop;
            return (
              "rtl" === z(r).direction &&
                (s += o(t.clientWidth, r.clientWidth) - a),
              { width: a, height: i, x: s, y: l }
            );
          })(I(e));
        else if (B(t))
          r = (function (e, t) {
            let n = Y(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              a = n.left + e.clientLeft,
              i = j(e) ? Z(e) : u(1),
              o = e.clientWidth * i.x;
            return {
              width: o,
              height: e.clientHeight * i.y,
              x: a * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = Q(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return x(r);
      }
      function ee(e) {
        return "static" === z(e).position;
      }
      function et(e, t) {
        if (!j(e) || "fixed" === z(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return I(e) === n && (n = n.ownerDocument.body), n;
      }
      function en(e, t) {
        let n = A(e);
        if (F(e)) return n;
        if (!j(e)) {
          let t = W(e);
          for (; t && !q(t); ) {
            if (B(t) && !ee(t)) return t;
            t = W(t);
          }
          return n;
        }
        let r = et(e, t);
        for (; r && ["table", "td", "th"].includes(O(r)) && ee(r); )
          r = et(r, t);
        return r && q(r) && ee(r) && !L(r)
          ? n
          : r ||
              (function (e) {
                let t = W(e);
                for (; j(t) && !q(t); ) {
                  if (L(t)) return t;
                  if (F(t)) break;
                  t = W(t);
                }
                return null;
              })(e) ||
              n;
      }
      let er = async function (e) {
          let t = this.getOffsetParent || en,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = j(t),
                a = I(t),
                i = "fixed" === n,
                o = Y(e, !0, i, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                l = u(0);
              if (r || (!r && !i)) {
                if ((("body" !== O(t) || M(a)) && (s = $(t)), r)) {
                  let e = Y(t, !0, i, t);
                  (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                } else a && (l.x = X(a));
              }
              let c = 0,
                d = 0;
              if (a && !r && !i) {
                let e = a.getBoundingClientRect();
                (d = e.top + s.scrollTop),
                  (c = e.left + s.scrollLeft - X(a, e));
              }
              return {
                x: o.left + s.scrollLeft - l.x - c,
                y: o.top + s.scrollTop - l.y - d,
                width: o.width,
                height: o.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ea = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: a } = e,
              i = "fixed" === a,
              o = I(r),
              s = !!t && F(t.floating);
            if (r === o || (s && i)) return n;
            let l = { scrollLeft: 0, scrollTop: 0 },
              c = u(1),
              d = u(0),
              h = j(r);
            if (
              (h || (!h && !i)) &&
              (("body" !== O(r) || M(o)) && (l = $(r)), j(r))
            ) {
              let e = Y(r);
              (c = Z(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - l.scrollLeft * c.x + d.x,
              y: n.y * c.y - l.scrollTop * c.y + d.y,
            };
          },
          getDocumentElement: I,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: a } = e,
              s = [
                ...("clippingAncestors" === n
                  ? F(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = H(e, [], !1).filter(
                            (e) => B(e) && "body" !== O(e)
                          ),
                          a = null,
                          i = "fixed" === z(e).position,
                          o = i ? W(e) : e;
                        for (; B(o) && !q(o); ) {
                          let t = z(o),
                            n = L(o);
                          n || "fixed" !== t.position || (a = null),
                            (
                              i
                                ? !n && !a
                                : (!n &&
                                    "static" === t.position &&
                                    !!a &&
                                    ["absolute", "fixed"].includes(
                                      a.position
                                    )) ||
                                  (M(o) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = W(t);
                                      return (
                                        !(r === n || !B(r) || q(r)) &&
                                        ("fixed" === z(r).position || e(r, n))
                                      );
                                    })(e, o))
                            )
                              ? (r = r.filter((e) => e !== o))
                              : (a = t),
                            (o = W(o));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = s[0],
              u = s.reduce((e, n) => {
                let r = J(t, n, a);
                return (
                  (e.top = o(r.top, e.top)),
                  (e.right = i(r.right, e.right)),
                  (e.bottom = i(r.bottom, e.bottom)),
                  (e.left = o(r.left, e.left)),
                  e
                );
              }, J(t, l, a));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: en,
          getElementRects: er,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = U(e);
            return { width: t, height: n };
          },
          getScale: Z,
          isElement: B,
          isRTL: function (e) {
            return "rtl" === z(e).direction;
          },
        },
        ei = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: a,
                rects: s,
                platform: l,
                elements: u,
                middlewareData: c,
              } = t,
              { element: d, padding: f = 0 } = h(e, t) || {};
            if (null == d) return {};
            let g = v(f),
              w = { x: n, y: r },
              x = b(y(a)),
              E = m(x),
              C = await l.getDimensions(d),
              k = "y" === x,
              S = k ? "clientHeight" : "clientWidth",
              T = s.reference[E] + s.reference[x] - w[x] - s.floating[E],
              R = w[x] - s.reference[x],
              P = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(d)),
              O = P ? P[S] : 0;
            (O && (await (null == l.isElement ? void 0 : l.isElement(P)))) ||
              (O = u.floating[S] || s.floating[E]);
            let A = O / 2 - C[E] / 2 - 1,
              I = i(g[k ? "top" : "left"], A),
              _ = i(g[k ? "bottom" : "right"], A),
              B = O - C[E] - _,
              j = O / 2 - C[E] / 2 + (T / 2 - R / 2),
              N = o(I, i(j, B)),
              M =
                !c.arrow &&
                null != p(a) &&
                j !== N &&
                s.reference[E] / 2 - (j < I ? I : _) - C[E] / 2 < 0,
              F = M ? (j < I ? j - I : j - B) : 0;
            return {
              [x]: w[x] + F,
              data: {
                [x]: N,
                centerOffset: j - N - F,
                ...(M && { alignmentOffset: F }),
              },
              reset: M,
            };
          },
        }),
        eo = (e, t, n) => {
          let r = new Map(),
            a = { platform: ea, ...n },
            i = { ...a.platform, _c: r };
          return C(e, t, { ...a, platform: i });
        };
      var es = n(8108),
        el = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function eu(e, t) {
        let n, r, a;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eu(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (a = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, a[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = a[r];
            if (("_owner" !== n || !e.$$typeof) && !eu(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ec(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ed(e, t) {
        let n = ec(e);
        return Math.round(t * n) / n;
      }
      function eh(e) {
        let t = r.useRef(e);
        return (
          el(() => {
            t.current = e;
          }),
          t
        );
      }
      let ef = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ei({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? ei({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        ep = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: a, y: i, placement: o, middlewareData: s } = e,
                  l = await R(e, n);
                return o === (null == (t = s.offset) ? void 0 : t.placement) &&
                  null != (r = s.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: a + l.x, y: i + l.y, data: { ...l, placement: o } };
              },
            }),
            options: [e, t],
          };
        },
        eb = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: a } = e,
                  {
                    mainAxis: s = !0,
                    crossAxis: l = !1,
                    limiter: u = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = h(n, e),
                  d = { x: t, y: r },
                  p = await k(e, c),
                  m = y(f(a)),
                  g = b(m),
                  w = d[g],
                  v = d[m];
                if (s) {
                  let e = "y" === g ? "top" : "left",
                    t = "y" === g ? "bottom" : "right",
                    n = w + p[e],
                    r = w - p[t];
                  w = o(n, i(w, r));
                }
                if (l) {
                  let e = "y" === m ? "top" : "left",
                    t = "y" === m ? "bottom" : "right",
                    n = v + p[e],
                    r = v - p[t];
                  v = o(n, i(v, r));
                }
                let x = u.fn({ ...e, [g]: w, [m]: v });
                return {
                  ...x,
                  data: { x: x.x - t, y: x.y - r, enabled: { [g]: s, [m]: l } },
                };
              },
            }),
            options: [e, t],
          };
        },
        em = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: a,
                    rects: i,
                    middlewareData: o,
                  } = e,
                  {
                    offset: s = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0,
                  } = h(n, e),
                  c = { x: t, y: r },
                  d = y(a),
                  p = b(d),
                  m = c[p],
                  g = c[d],
                  w = h(s, e),
                  v =
                    "number" == typeof w
                      ? { mainAxis: w, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...w };
                if (l) {
                  let e = "y" === p ? "height" : "width",
                    t = i.reference[p] - i.floating[e] + v.mainAxis,
                    n = i.reference[p] + i.reference[e] - v.mainAxis;
                  m < t ? (m = t) : m > n && (m = n);
                }
                if (u) {
                  var x, E;
                  let e = "y" === p ? "width" : "height",
                    t = ["top", "left"].includes(f(a)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (x = o.offset) ? void 0 : x[d])) || 0) +
                      (t ? 0 : v.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (E = o.offset) ? void 0 : E[d]) || 0) -
                      (t ? v.crossAxis : 0);
                  g < n ? (g = n) : g > r && (g = r);
                }
                return { [p]: m, [d]: g };
              },
            }),
            options: [e, t],
          };
        },
        ey = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, a, i, o;
                let {
                    placement: s,
                    middlewareData: l,
                    rects: u,
                    initialPlacement: c,
                    platform: d,
                    elements: v,
                  } = e,
                  {
                    mainAxis: x = !0,
                    crossAxis: E = !0,
                    fallbackPlacements: C,
                    fallbackStrategy: S = "bestFit",
                    fallbackAxisSideDirection: T = "none",
                    flipAlignment: R = !0,
                    ...P
                  } = h(n, e);
                if (null != (t = l.arrow) && t.alignmentOffset) return {};
                let O = f(s),
                  A = y(c),
                  I = f(c) === c,
                  _ = await (null == d.isRTL ? void 0 : d.isRTL(v.floating)),
                  B =
                    C ||
                    (I || !R
                      ? [w(c)]
                      : (function (e) {
                          let t = w(e);
                          return [g(e), t, g(t)];
                        })(c)),
                  j = "none" !== T;
                !C &&
                  j &&
                  B.push(
                    ...(function (e, t, n, r) {
                      let a = p(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            a = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? a : r;
                              return t ? r : a;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(f(e), "start" === n, r);
                      return (
                        a &&
                          ((i = i.map((e) => e + "-" + a)),
                          t && (i = i.concat(i.map(g)))),
                        i
                      );
                    })(c, R, T, _)
                  );
                let N = [c, ...B],
                  M = await k(e, P),
                  F = [],
                  L = (null == (r = l.flip) ? void 0 : r.overflows) || [];
                if ((x && F.push(M[O]), E)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = p(e),
                      a = b(y(e)),
                      i = m(a),
                      o =
                        "x" === a
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (o = w(o)), [o, w(o)]
                    );
                  })(s, u, _);
                  F.push(M[e[0]], M[e[1]]);
                }
                if (
                  ((L = [...L, { placement: s, overflows: F }]),
                  !F.every((e) => e <= 0))
                ) {
                  let e = ((null == (a = l.flip) ? void 0 : a.index) || 0) + 1,
                    t = N[e];
                  if (t)
                    return {
                      data: { index: e, overflows: L },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = L.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (S) {
                      case "bestFit": {
                        let e =
                          null ==
                          (o = L.filter((e) => {
                            if (j) {
                              let t = y(e.placement);
                              return t === A || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : o[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (s !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        eg = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let a, s;
                let { placement: l, rects: u, platform: c, elements: d } = e,
                  { apply: b = () => {}, ...m } = h(n, e),
                  g = await k(e, m),
                  w = f(l),
                  v = p(l),
                  x = "y" === y(l),
                  { width: E, height: C } = u.floating;
                "top" === w || "bottom" === w
                  ? ((a = w),
                    (s =
                      v ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(d.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((s = w), (a = "end" === v ? "top" : "bottom"));
                let S = C - g.top - g.bottom,
                  T = E - g.left - g.right,
                  R = i(C - g[a], S),
                  P = i(E - g[s], T),
                  O = !e.middlewareData.shift,
                  A = R,
                  I = P;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (I = T),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (A = S),
                  O && !v)
                ) {
                  let e = o(g.left, 0),
                    t = o(g.right, 0),
                    n = o(g.top, 0),
                    r = o(g.bottom, 0);
                  x
                    ? (I =
                        E -
                        2 * (0 !== e || 0 !== t ? e + t : o(g.left, g.right)))
                    : (A =
                        C -
                        2 * (0 !== n || 0 !== r ? n + r : o(g.top, g.bottom)));
                }
                await b({ ...e, availableWidth: I, availableHeight: A });
                let _ = await c.getDimensions(d.floating);
                return E !== _.width || C !== _.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        ew = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...a } = h(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = S(
                      await k(e, { ...a, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: T(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = S(
                      await k(e, { ...a, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: T(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        ev = (e, t) => ({ ...ef(e), options: [e, t] });
      var ex = n(14521),
        eE = n(90132),
        eC = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: a = 5, ...i } = e;
          return (0, eE.jsx)(ex.WV.svg, {
            ...i,
            ref: t,
            width: r,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, eE.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eC.displayName = "Arrow";
      var ek = n(24286),
        eS = n(40384),
        eT = n(28416),
        eR = n(72146),
        eP = "Popper",
        [eO, eA] = (0, eS.b)(eP),
        [eI, e_] = eO(eP),
        eB = (e) => {
          let { __scopePopper: t, children: n } = e,
            [a, i] = r.useState(null);
          return (0, eE.jsx)(eI, {
            scope: t,
            anchor: a,
            onAnchorChange: i,
            children: n,
          });
        };
      eB.displayName = eP;
      var ej = "PopperAnchor",
        eN = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: a, ...i } = e,
            o = e_(ej, n),
            s = r.useRef(null),
            l = (0, ek.e)(t, s);
          return (
            r.useEffect(() => {
              o.onAnchorChange((null == a ? void 0 : a.current) || s.current);
            }),
            a ? null : (0, eE.jsx)(ex.WV.div, { ...i, ref: l })
          );
        });
      eN.displayName = ej;
      var eM = "PopperContent",
        [eF, eL] = eO(eM),
        eD = r.forwardRef((e, t) => {
          var n, a, s, u, c, d, h, f;
          let {
              __scopePopper: p,
              side: b = "bottom",
              sideOffset: m = 0,
              align: y = "center",
              alignOffset: g = 0,
              arrowPadding: w = 0,
              avoidCollisions: v = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: C = "partial",
              hideWhenDetached: k = !1,
              updatePositionStrategy: S = "optimized",
              onPlaced: T,
              ...R
            } = e,
            P = e_(eM, p),
            [O, A] = r.useState(null),
            _ = (0, ek.e)(t, (e) => A(e)),
            [B, j] = r.useState(null),
            N = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                (0, eR.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, a;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (a = t.blockSize);
                      } else (r = e.offsetWidth), (a = e.offsetHeight);
                      n({ width: r, height: a });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(B),
            M =
              null !== (h = null == N ? void 0 : N.width) && void 0 !== h
                ? h
                : 0,
            F =
              null !== (f = null == N ? void 0 : N.height) && void 0 !== f
                ? f
                : 0,
            L =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            D = Array.isArray(x) ? x : [x],
            q = D.length > 0,
            z = { padding: L, boundary: D.filter(eW), altBoundary: q },
            {
              refs: $,
              floatingStyles: W,
              placement: G,
              isPositioned: U,
              middlewareData: Z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: a = [],
                  platform: i,
                  elements: { reference: o, floating: s } = {},
                  transform: l = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [d, h] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [f, p] = r.useState(a);
              eu(f, a) || p(a);
              let [b, m] = r.useState(null),
                [y, g] = r.useState(null),
                w = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), m(e));
                }, []),
                v = r.useCallback((e) => {
                  e !== k.current && ((k.current = e), g(e));
                }, []),
                x = o || b,
                E = s || y,
                C = r.useRef(null),
                k = r.useRef(null),
                S = r.useRef(d),
                T = null != u,
                R = eh(u),
                P = eh(i),
                O = eh(c),
                A = r.useCallback(() => {
                  if (!C.current || !k.current) return;
                  let e = { placement: t, strategy: n, middleware: f };
                  P.current && (e.platform = P.current),
                    eo(C.current, k.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== O.current };
                      I.current &&
                        !eu(S.current, t) &&
                        ((S.current = t),
                        es.flushSync(() => {
                          h(t);
                        }));
                    });
                }, [f, t, n, P, O]);
              el(() => {
                !1 === c &&
                  S.current.isPositioned &&
                  ((S.current.isPositioned = !1),
                  h((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let I = r.useRef(!1);
              el(
                () => (
                  (I.current = !0),
                  () => {
                    I.current = !1;
                  }
                ),
                []
              ),
                el(() => {
                  if ((x && (C.current = x), E && (k.current = E), x && E)) {
                    if (R.current) return R.current(x, E, A);
                    A();
                  }
                }, [x, E, A, R, T]);
              let _ = r.useMemo(
                  () => ({
                    reference: C,
                    floating: k,
                    setReference: w,
                    setFloating: v,
                  }),
                  [w, v]
                ),
                B = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                j = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!B.floating) return e;
                  let t = ed(B.floating, d.x),
                    r = ed(B.floating, d.y);
                  return l
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ec(B.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, l, B.floating, d.x, d.y]);
              return r.useMemo(
                () => ({
                  ...d,
                  update: A,
                  refs: _,
                  elements: B,
                  floatingStyles: j,
                }),
                [d, A, _, B, j]
              );
            })({
              strategy: "fixed",
              placement: b + ("center" !== y ? "-" + y : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let a;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: s = !0,
                      ancestorResize: u = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: d = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: h = !1,
                    } = r,
                    f = V(e),
                    p = s || u ? [...(f ? H(f) : []), ...H(t)] : [];
                  p.forEach((e) => {
                    s && e.addEventListener("scroll", n, { passive: !0 }),
                      u && e.addEventListener("resize", n);
                  });
                  let b =
                      f && d
                        ? (function (e, t) {
                            let n,
                              r = null,
                              a = I(e);
                            function s() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function u(c, d) {
                                void 0 === c && (c = !1),
                                  void 0 === d && (d = 1),
                                  s();
                                let {
                                  left: h,
                                  top: f,
                                  width: p,
                                  height: b,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !p || !b)) return;
                                let m = l(f),
                                  y = l(a.clientWidth - (h + p)),
                                  g = {
                                    rootMargin:
                                      -m +
                                      "px " +
                                      -y +
                                      "px " +
                                      -l(a.clientHeight - (f + b)) +
                                      "px " +
                                      -l(h) +
                                      "px",
                                    threshold: o(0, i(1, d)) || 1,
                                  },
                                  w = !0;
                                function v(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== d) {
                                    if (!w) return u();
                                    t
                                      ? u(!1, t)
                                      : (n = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  w = !1;
                                }
                                try {
                                  r = new IntersectionObserver(v, {
                                    ...g,
                                    root: a.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(v, g);
                                }
                                r.observe(e);
                              })(!0),
                              s
                            );
                          })(f, n)
                        : null,
                    m = -1,
                    y = null;
                  c &&
                    ((y = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === f &&
                        y &&
                        (y.unobserve(t),
                        cancelAnimationFrame(m),
                        (m = requestAnimationFrame(() => {
                          var e;
                          null == (e = y) || e.observe(t);
                        }))),
                        n();
                    })),
                    f && !h && y.observe(f),
                    y.observe(t));
                  let g = h ? Y(e) : null;
                  return (
                    h &&
                      (function t() {
                        let r = Y(e);
                        g &&
                          (r.x !== g.x ||
                            r.y !== g.y ||
                            r.width !== g.width ||
                            r.height !== g.height) &&
                          n(),
                          (g = r),
                          (a = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      p.forEach((e) => {
                        s && e.removeEventListener("scroll", n),
                          u && e.removeEventListener("resize", n);
                      }),
                        null == b || b(),
                        null == (e = y) || e.disconnect(),
                        (y = null),
                        h && cancelAnimationFrame(a);
                    }
                  );
                })(...t, { animationFrame: "always" === S });
              },
              elements: { reference: P.anchor },
              middleware: [
                ep({ mainAxis: m + F, alignmentAxis: g }),
                v &&
                  eb({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? em() : void 0,
                    ...z,
                  }),
                v && ey({ ...z }),
                eg({
                  ...z,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: a,
                      } = e,
                      { width: i, height: o } = n.reference,
                      s = t.floating.style;
                    s.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      s.setProperty(
                        "--radix-popper-available-height",
                        "".concat(a, "px")
                      ),
                      s.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      s.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(o, "px")
                      );
                  },
                }),
                B && ev({ element: B, padding: w }),
                eH({ arrowWidth: M, arrowHeight: F }),
                k && ew({ strategy: "referenceHidden", ...z }),
              ],
            }),
            [K, Q] = eG(G),
            X = (0, eT.W)(T);
          (0, eR.b)(() => {
            U && (null == X || X());
          }, [U, X]);
          let J = null === (n = Z.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (a = Z.arrow) || void 0 === a ? void 0 : a.y,
            et =
              (null === (s = Z.arrow) || void 0 === s
                ? void 0
                : s.centerOffset) !== 0,
            [en, er] = r.useState();
          return (
            (0, eR.b)(() => {
              O && er(window.getComputedStyle(O).zIndex);
            }, [O]),
            (0, eE.jsx)("div", {
              ref: $.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...W,
                transform: U ? W.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (u = Z.transformOrigin) || void 0 === u
                    ? void 0
                    : u.x,
                  null === (c = Z.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (d = Z.hide) || void 0 === d
                  ? void 0
                  : d.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eE.jsx)(eF, {
                scope: p,
                placedSide: K,
                onArrowChange: j,
                arrowX: J,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, eE.jsx)(ex.WV.div, {
                  "data-side": K,
                  "data-align": Q,
                  ...R,
                  ref: _,
                  style: { ...R.style, animation: U ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eD.displayName = eM;
      var eq = "PopperArrow",
        ez = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e$ = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            a = eL(eq, n),
            i = ez[a.placedSide];
          return (0,
          eE.jsx)("span", { ref: a.onArrowChange, style: { position: "absolute", left: a.arrowX, top: a.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[a.placedSide], visibility: a.shouldHideArrow ? "hidden" : void 0 }, children: (0, eE.jsx)(eC, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function eW(e) {
        return null !== e;
      }
      e$.displayName = eq;
      var eH = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, a, i, o;
          let { placement: s, rects: l, middlewareData: u } = t,
            c =
              (null === (n = u.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            h = c ? 0 : e.arrowHeight,
            [f, p] = eG(s),
            b = { start: "0%", center: "50%", end: "100%" }[p],
            m =
              (null !==
                (i = null === (r = u.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            y =
              (null !==
                (o = null === (a = u.arrow) || void 0 === a ? void 0 : a.y) &&
              void 0 !== o
                ? o
                : 0) +
              h / 2,
            g = "",
            w = "";
          return (
            "bottom" === f
              ? ((g = c ? b : "".concat(m, "px")), (w = "".concat(-h, "px")))
              : "top" === f
              ? ((g = c ? b : "".concat(m, "px")),
                (w = "".concat(l.floating.height + h, "px")))
              : "right" === f
              ? ((g = "".concat(-h, "px")), (w = c ? b : "".concat(y, "px")))
              : "left" === f &&
                ((g = "".concat(l.floating.width + h, "px")),
                (w = c ? b : "".concat(y, "px"))),
            { data: { x: g, y: w } }
          );
        },
      });
      function eG(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eU = eB,
        eV = eN,
        eZ = eD,
        eK = e$;
    },
    1580: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var r = n(55881),
        a = n(8108),
        i = n(14521),
        o = n(72146),
        s = n(90132),
        l = r.forwardRef((e, t) => {
          var n, l;
          let { container: u, ...c } = e,
            [d, h] = r.useState(!1);
          (0, o.b)(() => h(!0), []);
          let f =
            u ||
            (d &&
              (null === (l = globalThis) || void 0 === l
                ? void 0
                : null === (n = l.document) || void 0 === n
                ? void 0
                : n.body));
          return f
            ? a.createPortal((0, s.jsx)(i.WV.div, { ...c, ref: t }), f)
            : null;
        });
      l.displayName = "Portal";
    },
    90211: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(55881),
        a = n(24286),
        i = n(72146),
        o = (e) => {
          var t, n;
          let o, l;
          let { present: u, children: c } = e,
            d = (function (e) {
              var t, n;
              let [a, o] = r.useState(),
                l = r.useRef({}),
                u = r.useRef(e),
                c = r.useRef("none"),
                [d, h] =
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
                  let e = s(l.current);
                  c.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, i.b)(() => {
                  let t = l.current,
                    n = u.current;
                  if (n !== e) {
                    let r = c.current,
                      a = s(t);
                    e
                      ? h("MOUNT")
                      : "none" === a ||
                        (null == t ? void 0 : t.display) === "none"
                      ? h("UNMOUNT")
                      : n && r !== a
                      ? h("ANIMATION_OUT")
                      : h("UNMOUNT"),
                      (u.current = e);
                  }
                }, [e, h]),
                (0, i.b)(() => {
                  if (a) {
                    var e;
                    let t;
                    let n =
                        null !== (e = a.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = s(l.current).includes(e.animationName);
                        if (
                          e.target === a &&
                          r &&
                          (h("ANIMATION_END"), !u.current)
                        ) {
                          let e = a.style.animationFillMode;
                          (a.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === a.style.animationFillMode &&
                                (a.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === a && (c.current = s(l.current));
                      };
                    return (
                      a.addEventListener("animationstart", i),
                      a.addEventListener("animationcancel", r),
                      a.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          a.removeEventListener("animationstart", i),
                          a.removeEventListener("animationcancel", r),
                          a.removeEventListener("animationend", r);
                      }
                    );
                  }
                  h("ANIMATION_END");
                }, [a, h]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    e && (l.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(u),
            h =
              "function" == typeof c
                ? c({ present: d.isPresent })
                : r.Children.only(c),
            f = (0, a.e)(
              d.ref,
              (o =
                null ===
                  (t = Object.getOwnPropertyDescriptor(h.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in o &&
                o.isReactWarning
                ? h.ref
                : (o =
                    null === (n = Object.getOwnPropertyDescriptor(h, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in o &&
                  o.isReactWarning
                ? h.props.ref
                : h.props.ref || h.ref
            );
          return "function" == typeof c || d.isPresent
            ? r.cloneElement(h, { ref: f })
            : null;
        };
      function s(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      o.displayName = "Presence";
    },
    14521: function (e, t, n) {
      "use strict";
      n.d(t, {
        WV: function () {
          return s;
        },
        jH: function () {
          return l;
        },
      });
      var r = n(55881),
        a = n(8108),
        i = n(3790),
        o = n(90132),
        s = [
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
            let { asChild: r, ...a } = e,
              s = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, o.jsx)(s, { ...a, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function l(e, t) {
        e && a.flushSync(() => e.dispatchEvent(t));
      }
    },
    12677: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return e_;
        },
        ZA: function () {
          return ej;
        },
        JO: function () {
          return eA;
        },
        ck: function () {
          return eM;
        },
        wU: function () {
          return eL;
        },
        eT: function () {
          return eF;
        },
        __: function () {
          return eN;
        },
        h_: function () {
          return eI;
        },
        fC: function () {
          return eR;
        },
        $G: function () {
          return eq;
        },
        u_: function () {
          return eD;
        },
        Z0: function () {
          return ez;
        },
        xz: function () {
          return eP;
        },
        B4: function () {
          return eO;
        },
        l_: function () {
          return eB;
        },
      });
      var r = n(55881),
        a = n(8108),
        i = n(82051),
        o = n(6533),
        s = n(40384),
        l = n(24286),
        u = n(3790),
        c = n(90132),
        d = n(42090),
        h = n(16805),
        f = n(76867),
        p = n(9340),
        b = n(55875),
        m = n(56958),
        y = n(1580),
        g = n(14521),
        w = n(28416),
        v = n(511),
        x = n(72146),
        E = n(21120),
        C = n(55509),
        k = n(63413),
        S = [" ", "Enter", "ArrowUp", "ArrowDown"],
        T = [" ", "Enter"],
        R = "Select",
        [P, O, A] = (function (e) {
          let t = e + "CollectionProvider",
            [n, a] = (0, s.b)(t),
            [i, o] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            d = (e) => {
              let { scope: t, children: n } = e,
                a = r.useRef(null),
                o = r.useRef(new Map()).current;
              return (0, c.jsx)(i, {
                scope: t,
                itemMap: o,
                collectionRef: a,
                children: n,
              });
            };
          d.displayName = t;
          let h = e + "CollectionSlot",
            f = r.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                a = o(h, n),
                i = (0, l.e)(t, a.collectionRef);
              return (0, c.jsx)(u.g7, { ref: i, children: r });
            });
          f.displayName = h;
          let p = e + "CollectionItemSlot",
            b = "data-radix-collection-item",
            m = r.forwardRef((e, t) => {
              let { scope: n, children: a, ...i } = e,
                s = r.useRef(null),
                d = (0, l.e)(t, s),
                h = o(p, n);
              return (
                r.useEffect(
                  () => (
                    h.itemMap.set(s, { ref: s, ...i }),
                    () => void h.itemMap.delete(s)
                  )
                ),
                (0, c.jsx)(u.g7, { [b]: "", ref: d, children: a })
              );
            });
          return (
            (m.displayName = p),
            [
              { Provider: d, Slot: f, ItemSlot: m },
              function (t) {
                let n = o(e + "CollectionConsumer", t);
                return r.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(b, "]")));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              a,
            ]
          );
        })(R),
        [I, _] = (0, s.b)(R, [A, m.D7]),
        B = (0, m.D7)(),
        [j, N] = I(R),
        [M, F] = I(R),
        L = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: a,
              defaultOpen: i,
              onOpenChange: o,
              value: s,
              defaultValue: l,
              onValueChange: u,
              dir: h,
              name: f,
              autoComplete: p,
              disabled: y,
              required: g,
              form: w,
            } = e,
            x = B(t),
            [E, C] = r.useState(null),
            [k, S] = r.useState(null),
            [T, R] = r.useState(!1),
            O = (0, d.gm)(h),
            [A = !1, I] = (0, v.T)({ prop: a, defaultProp: i, onChange: o }),
            [_, N] = (0, v.T)({ prop: s, defaultProp: l, onChange: u }),
            F = r.useRef(null),
            L = !E || w || !!E.closest("form"),
            [D, q] = r.useState(new Set()),
            z = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, c.jsx)(m.fC, {
            ...x,
            children: (0, c.jsxs)(j, {
              required: g,
              scope: t,
              trigger: E,
              onTriggerChange: C,
              valueNode: k,
              onValueNodeChange: S,
              valueNodeHasChildren: T,
              onValueNodeHasChildrenChange: R,
              contentId: (0, b.M)(),
              value: _,
              onValueChange: N,
              open: A,
              onOpenChange: I,
              dir: O,
              triggerPointerDownPosRef: F,
              disabled: y,
              children: [
                (0, c.jsx)(P.Provider, {
                  scope: t,
                  children: (0, c.jsx)(M, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback((e) => {
                      q((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback((e) => {
                      q((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                L
                  ? (0, c.jsxs)(
                      ek,
                      {
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: _,
                        onChange: (e) => N(e.target.value),
                        disabled: y,
                        form: w,
                        children: [
                          void 0 === _
                            ? (0, c.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      z
                    )
                  : null,
              ],
            }),
          });
        };
      L.displayName = R;
      var D = "SelectTrigger",
        q = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: a = !1, ...i } = e,
            s = B(n),
            u = N(D, n),
            d = u.disabled || a,
            h = (0, l.e)(t, u.onTriggerChange),
            f = O(n),
            p = r.useRef("touch"),
            [b, y, w] = eS((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = eT(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            v = (e) => {
              d || (u.onOpenChange(!0), w()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, c.jsx)(m.ee, {
            asChild: !0,
            ...s,
            children: (0, c.jsx)(g.WV.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: d,
              "data-disabled": d ? "" : void 0,
              "data-placeholder": eC(u.value) ? "" : void 0,
              ...i,
              ref: h,
              onClick: (0, o.M)(i.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && v(e);
              }),
              onPointerDown: (0, o.M)(i.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (v(e), e.preventDefault());
              }),
              onKeyDown: (0, o.M)(i.onKeyDown, (e) => {
                let t = "" !== b.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  y(e.key),
                  (!t || " " !== e.key) &&
                    S.includes(e.key) &&
                    (v(), e.preventDefault());
              }),
            }),
          });
        });
      q.displayName = D;
      var z = "SelectValue",
        $ = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: a,
              children: i,
              placeholder: o = "",
              ...s
            } = e,
            u = N(z, n),
            { onValueNodeHasChildrenChange: d } = u,
            h = void 0 !== i,
            f = (0, l.e)(t, u.onValueNodeChange);
          return (
            (0, x.b)(() => {
              d(h);
            }, [d, h]),
            (0, c.jsx)(g.WV.span, {
              ...s,
              ref: f,
              style: { pointerEvents: "none" },
              children: eC(u.value)
                ? (0, c.jsx)(c.Fragment, { children: o })
                : i,
            })
          );
        });
      $.displayName = z;
      var W = r.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...a } = e;
        return (0, c.jsx)(g.WV.span, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          children: r || "▼",
        });
      });
      W.displayName = "SelectIcon";
      var H = (e) => (0, c.jsx)(y.h, { asChild: !0, ...e });
      H.displayName = "SelectPortal";
      var G = "SelectContent",
        U = r.forwardRef((e, t) => {
          let n = N(G, e.__scopeSelect),
            [i, o] = r.useState();
          return ((0, x.b)(() => {
            o(new DocumentFragment());
          }, []),
          n.open)
            ? (0, c.jsx)(K, { ...e, ref: t })
            : i
            ? a.createPortal(
                (0, c.jsx)(V, {
                  scope: e.__scopeSelect,
                  children: (0, c.jsx)(P.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, c.jsx)("div", { children: e.children }),
                  }),
                }),
                i
              )
            : null;
        });
      U.displayName = G;
      var [V, Z] = I(G),
        K = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: a = "item-aligned",
              onCloseAutoFocus: i,
              onEscapeKeyDown: s,
              onPointerDownOutside: d,
              side: b,
              sideOffset: m,
              align: y,
              alignOffset: g,
              arrowPadding: w,
              collisionBoundary: v,
              collisionPadding: x,
              sticky: E,
              hideWhenDetached: S,
              avoidCollisions: T,
              ...R
            } = e,
            P = N(G, n),
            [A, I] = r.useState(null),
            [_, B] = r.useState(null),
            j = (0, l.e)(t, (e) => I(e)),
            [M, F] = r.useState(null),
            [L, D] = r.useState(null),
            q = O(n),
            [z, $] = r.useState(!1),
            W = r.useRef(!1);
          r.useEffect(() => {
            if (A) return (0, C.Ry)(A);
          }, [A]),
            (0, f.EW)();
          let H = r.useCallback(
              (e) => {
                let [t, ...n] = q().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  a = document.activeElement;
                for (let n of e)
                  if (
                    n === a ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && _ && (_.scrollTop = 0),
                    n === r && _ && (_.scrollTop = _.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== a)
                  )
                    return;
              },
              [q, _]
            ),
            U = r.useCallback(() => H([M, A]), [H, M, A]);
          r.useEffect(() => {
            z && U();
          }, [z, U]);
          let { onOpenChange: Z, triggerPointerDownPosRef: K } = P;
          r.useEffect(() => {
            if (A) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, a, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (a =
                            null === (n = K.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== a
                          ? a
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (i =
                            null === (r = K.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== i
                          ? i
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : A.contains(n.target) || Z(!1),
                    document.removeEventListener("pointermove", t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [A, Z, K]),
            r.useEffect(() => {
              let e = () => Z(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [Z]);
          let [X, J] = eS((e) => {
              let t = q().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = eT(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            ee = r.useCallback(
              (e, t, n) => {
                let r = !W.current && !n;
                ((void 0 !== P.value && P.value === t) || r) &&
                  (F(e), r && (W.current = !0));
              },
              [P.value]
            ),
            et = r.useCallback(() => (null == A ? void 0 : A.focus()), [A]),
            en = r.useCallback(
              (e, t, n) => {
                let r = !W.current && !n;
                ((void 0 !== P.value && P.value === t) || r) && D(e);
              },
              [P.value]
            ),
            er = "popper" === a ? Y : Q,
            ea =
              er === Y
                ? {
                    side: b,
                    sideOffset: m,
                    align: y,
                    alignOffset: g,
                    arrowPadding: w,
                    collisionBoundary: v,
                    collisionPadding: x,
                    sticky: E,
                    hideWhenDetached: S,
                    avoidCollisions: T,
                  }
                : {};
          return (0, c.jsx)(V, {
            scope: n,
            content: A,
            viewport: _,
            onViewportChange: B,
            itemRefCallback: ee,
            selectedItem: M,
            onItemLeave: et,
            itemTextRefCallback: en,
            focusSelectedItem: U,
            selectedItemText: L,
            position: a,
            isPositioned: z,
            searchRef: X,
            children: (0, c.jsx)(k.Z, {
              as: u.g7,
              allowPinchZoom: !0,
              children: (0, c.jsx)(p.M, {
                asChild: !0,
                trapped: P.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, o.M)(i, (e) => {
                  var t;
                  null === (t = P.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, c.jsx)(h.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: d,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => P.onOpenChange(!1),
                  children: (0, c.jsx)(er, {
                    role: "listbox",
                    id: P.contentId,
                    "data-state": P.open ? "open" : "closed",
                    dir: P.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...R,
                    ...ea,
                    onPlaced: () => $(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...R.style,
                    },
                    onKeyDown: (0, o.M)(R.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || J(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = q()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => H(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      K.displayName = "SelectContentImpl";
      var Q = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: a, ...o } = e,
          s = N(G, n),
          u = Z(G, n),
          [d, h] = r.useState(null),
          [f, p] = r.useState(null),
          b = (0, l.e)(t, (e) => p(e)),
          m = O(n),
          y = r.useRef(!1),
          w = r.useRef(!0),
          {
            viewport: v,
            selectedItem: E,
            selectedItemText: C,
            focusSelectedItem: k,
          } = u,
          S = r.useCallback(() => {
            if (s.trigger && s.valueNode && d && f && v && E && C) {
              let e = s.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                n = s.valueNode.getBoundingClientRect(),
                r = C.getBoundingClientRect();
              if ("rtl" !== s.dir) {
                let a = r.left - t.left,
                  o = n.left - a,
                  s = e.left - o,
                  l = e.width + s,
                  u = Math.max(l, t.width),
                  c = window.innerWidth - 10,
                  h = (0, i.u)(o, [10, Math.max(10, c - u)]);
                (d.style.minWidth = l + "px"), (d.style.left = h + "px");
              } else {
                let a = t.right - r.right,
                  o = window.innerWidth - n.right - a,
                  s = window.innerWidth - e.right - o,
                  l = e.width + s,
                  u = Math.max(l, t.width),
                  c = window.innerWidth - 10,
                  h = (0, i.u)(o, [10, Math.max(10, c - u)]);
                (d.style.minWidth = l + "px"), (d.style.right = h + "px");
              }
              let o = m(),
                l = window.innerHeight - 20,
                u = v.scrollHeight,
                c = window.getComputedStyle(f),
                h = parseInt(c.borderTopWidth, 10),
                p = parseInt(c.paddingTop, 10),
                b = parseInt(c.borderBottomWidth, 10),
                g = h + p + u + parseInt(c.paddingBottom, 10) + b,
                w = Math.min(5 * E.offsetHeight, g),
                x = window.getComputedStyle(v),
                k = parseInt(x.paddingTop, 10),
                S = parseInt(x.paddingBottom, 10),
                T = e.top + e.height / 2 - 10,
                R = E.offsetHeight / 2,
                P = h + p + (E.offsetTop + R);
              if (P <= T) {
                let e = o.length > 0 && E === o[o.length - 1].ref.current;
                d.style.bottom = "0px";
                let t = f.clientHeight - v.offsetTop - v.offsetHeight;
                d.style.height =
                  P + Math.max(l - T, R + (e ? S : 0) + t + b) + "px";
              } else {
                let e = o.length > 0 && E === o[0].ref.current;
                d.style.top = "0px";
                let t = Math.max(T, h + v.offsetTop + (e ? k : 0) + R);
                (d.style.height = t + (g - P) + "px"),
                  (v.scrollTop = P - T + v.offsetTop);
              }
              (d.style.margin = "".concat(10, "px 0")),
                (d.style.minHeight = w + "px"),
                (d.style.maxHeight = l + "px"),
                null == a || a(),
                requestAnimationFrame(() => (y.current = !0));
            }
          }, [m, s.trigger, s.valueNode, d, f, v, E, C, s.dir, a]);
        (0, x.b)(() => S(), [S]);
        let [T, R] = r.useState();
        (0, x.b)(() => {
          f && R(window.getComputedStyle(f).zIndex);
        }, [f]);
        let P = r.useCallback(
          (e) => {
            e && !0 === w.current && (S(), null == k || k(), (w.current = !1));
          },
          [S, k]
        );
        return (0, c.jsx)(X, {
          scope: n,
          contentWrapper: d,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: P,
          children: (0, c.jsx)("div", {
            ref: h,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: T,
            },
            children: (0, c.jsx)(g.WV.div, {
              ...o,
              ref: b,
              style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
            }),
          }),
        });
      });
      Q.displayName = "SelectItemAlignedPosition";
      var Y = r.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: a = 10,
            ...i
          } = e,
          o = B(n);
        return (0, c.jsx)(m.VY, {
          ...o,
          ...i,
          ref: t,
          align: r,
          collisionPadding: a,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      Y.displayName = "SelectPopperPosition";
      var [X, J] = I(G, {}),
        ee = "SelectViewport",
        et = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: a, ...i } = e,
            s = Z(ee, n),
            u = J(ee, n),
            d = (0, l.e)(t, s.onViewportChange),
            h = r.useRef(0);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: a,
              }),
              (0, c.jsx)(P.Slot, {
                scope: n,
                children: (0, c.jsx)(g.WV.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...i,
                  ref: d,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...i.style,
                  },
                  onScroll: (0, o.M)(i.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(h.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          a = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (a < r) {
                          let i = a + e,
                            o = Math.min(r, i),
                            s = i - o;
                          (n.style.height = o + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = s > 0 ? s : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    h.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      et.displayName = ee;
      var en = "SelectGroup",
        [er, ea] = I(en),
        ei = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            a = (0, b.M)();
          return (0, c.jsx)(er, {
            scope: n,
            id: a,
            children: (0, c.jsx)(g.WV.div, {
              role: "group",
              "aria-labelledby": a,
              ...r,
              ref: t,
            }),
          });
        });
      ei.displayName = en;
      var eo = "SelectLabel",
        es = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            a = ea(eo, n);
          return (0, c.jsx)(g.WV.div, { id: a.id, ...r, ref: t });
        });
      es.displayName = eo;
      var el = "SelectItem",
        [eu, ec] = I(el),
        ed = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: a,
              disabled: i = !1,
              textValue: s,
              ...u
            } = e,
            d = N(el, n),
            h = Z(el, n),
            f = d.value === a,
            [p, m] = r.useState(null != s ? s : ""),
            [y, w] = r.useState(!1),
            v = (0, l.e)(t, (e) => {
              var t;
              return null === (t = h.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(h, e, a, i);
            }),
            x = (0, b.M)(),
            E = r.useRef("touch"),
            C = () => {
              i || (d.onValueChange(a), d.onOpenChange(!1));
            };
          if ("" === a)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, c.jsx)(eu, {
            scope: n,
            value: a,
            disabled: i,
            textId: x,
            isSelected: f,
            onItemTextChange: r.useCallback((e) => {
              m((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, c.jsx)(P.ItemSlot, {
              scope: n,
              value: a,
              disabled: i,
              textValue: p,
              children: (0, c.jsx)(g.WV.div, {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": f && y,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...u,
                ref: v,
                onFocus: (0, o.M)(u.onFocus, () => w(!0)),
                onBlur: (0, o.M)(u.onBlur, () => w(!1)),
                onClick: (0, o.M)(u.onClick, () => {
                  "mouse" !== E.current && C();
                }),
                onPointerUp: (0, o.M)(u.onPointerUp, () => {
                  "mouse" === E.current && C();
                }),
                onPointerDown: (0, o.M)(u.onPointerDown, (e) => {
                  E.current = e.pointerType;
                }),
                onPointerMove: (0, o.M)(u.onPointerMove, (e) => {
                  if (((E.current = e.pointerType), i)) {
                    var t;
                    null === (t = h.onItemLeave) || void 0 === t || t.call(h);
                  } else
                    "mouse" === E.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, o.M)(u.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = h.onItemLeave) || void 0 === t || t.call(h);
                  }
                }),
                onKeyDown: (0, o.M)(u.onKeyDown, (e) => {
                  var t;
                  ((null === (t = h.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (T.includes(e.key) && C(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ed.displayName = el;
      var eh = "SelectItemText",
        ef = r.forwardRef((e, t) => {
          let { __scopeSelect: n, className: i, style: o, ...s } = e,
            u = N(eh, n),
            d = Z(eh, n),
            h = ec(eh, n),
            f = F(eh, n),
            [p, b] = r.useState(null),
            m = (0, l.e)(
              t,
              (e) => b(e),
              h.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, h.value, h.disabled);
              }
            ),
            y = null == p ? void 0 : p.textContent,
            w = r.useMemo(
              () =>
                (0, c.jsx)(
                  "option",
                  { value: h.value, disabled: h.disabled, children: y },
                  h.value
                ),
              [h.disabled, h.value, y]
            ),
            { onNativeOptionAdd: v, onNativeOptionRemove: E } = f;
          return (
            (0, x.b)(() => (v(w), () => E(w)), [v, E, w]),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(g.WV.span, { id: h.textId, ...s, ref: m }),
                h.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? a.createPortal(s.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      ef.displayName = eh;
      var ep = "SelectItemIndicator",
        eb = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return ec(ep, n).isSelected
            ? (0, c.jsx)(g.WV.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      eb.displayName = ep;
      var em = "SelectScrollUpButton",
        ey = r.forwardRef((e, t) => {
          let n = Z(em, e.__scopeSelect),
            a = J(em, e.__scopeSelect),
            [i, o] = r.useState(!1),
            s = (0, l.e)(t, a.onScrollButtonChange);
          return (
            (0, x.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    o(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, c.jsx)(ev, {
                  ...e,
                  ref: s,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      ey.displayName = em;
      var eg = "SelectScrollDownButton",
        ew = r.forwardRef((e, t) => {
          let n = Z(eg, e.__scopeSelect),
            a = J(eg, e.__scopeSelect),
            [i, o] = r.useState(!1),
            s = (0, l.e)(t, a.onScrollButtonChange);
          return (
            (0, x.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    o(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            i
              ? (0, c.jsx)(ev, {
                  ...e,
                  ref: s,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      ew.displayName = eg;
      var ev = r.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: a, ...i } = e,
            s = Z("SelectScrollButton", n),
            l = r.useRef(null),
            u = O(n),
            d = r.useCallback(() => {
              null !== l.current &&
                (window.clearInterval(l.current), (l.current = null));
            }, []);
          return (
            r.useEffect(() => () => d(), [d]),
            (0, x.b)(() => {
              var e;
              let t = u().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [u]),
            (0, c.jsx)(g.WV.div, {
              "aria-hidden": !0,
              ...i,
              ref: t,
              style: { flexShrink: 0, ...i.style },
              onPointerDown: (0, o.M)(i.onPointerDown, () => {
                null === l.current && (l.current = window.setInterval(a, 50));
              }),
              onPointerMove: (0, o.M)(i.onPointerMove, () => {
                var e;
                null === (e = s.onItemLeave) || void 0 === e || e.call(s),
                  null === l.current && (l.current = window.setInterval(a, 50));
              }),
              onPointerLeave: (0, o.M)(i.onPointerLeave, () => {
                d();
              }),
            })
          );
        }),
        ex = r.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, c.jsx)(g.WV.div, { "aria-hidden": !0, ...r, ref: t });
        });
      ex.displayName = "SelectSeparator";
      var eE = "SelectArrow";
      function eC(e) {
        return "" === e || void 0 === e;
      }
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          a = B(n),
          i = N(eE, n),
          o = Z(eE, n);
        return i.open && "popper" === o.position
          ? (0, c.jsx)(m.Eh, { ...a, ...r, ref: t })
          : null;
      }).displayName = eE;
      var ek = r.forwardRef((e, t) => {
        let { value: n, ...a } = e,
          i = r.useRef(null),
          o = (0, l.e)(t, i),
          s = (function (e) {
            let t = r.useRef({ value: e, previous: e });
            return r.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          r.useEffect(() => {
            let e = i.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (s !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [s, n]),
          (0, c.jsx)(E.T, {
            asChild: !0,
            children: (0, c.jsx)("select", { ...a, ref: o, defaultValue: n }),
          })
        );
      });
      function eS(e) {
        let t = (0, w.W)(e),
          n = r.useRef(""),
          a = r.useRef(0),
          i = r.useCallback(
            (e) => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(a.current),
                    "" !== t &&
                      (a.current = window.setTimeout(() => e(""), 1e3));
                })(r);
            },
            [t]
          ),
          o = r.useCallback(() => {
            (n.current = ""), window.clearTimeout(a.current);
          }, []);
        return (
          r.useEffect(() => () => window.clearTimeout(a.current), []), [n, i, o]
        );
      }
      function eT(e, t, n) {
        var r;
        let a =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === a.length && (i = i.filter((e) => e !== n));
        let o = i.find((e) =>
          e.textValue.toLowerCase().startsWith(a.toLowerCase())
        );
        return o !== n ? o : void 0;
      }
      ek.displayName = "BubbleSelect";
      var eR = L,
        eP = q,
        eO = $,
        eA = W,
        eI = H,
        e_ = U,
        eB = et,
        ej = ei,
        eN = es,
        eM = ed,
        eF = ef,
        eL = eb,
        eD = ey,
        eq = ew,
        ez = ex;
    },
    3790: function (e, t, n) {
      "use strict";
      n.d(t, {
        A4: function () {
          return l;
        },
        g7: function () {
          return o;
        },
      });
      var r = n(55881),
        a = n(24286),
        i = n(90132),
        o = r.forwardRef((e, t) => {
          let { children: n, ...a } = e,
            o = r.Children.toArray(n),
            l = o.find(u);
          if (l) {
            let e = l.props.children,
              n = o.map((t) =>
                t !== l
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(s, {
              ...a,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(s, { ...a, ref: t, children: n });
        });
      o.displayName = "Slot";
      var s = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, o;
          let s =
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
                let a = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? a && i
                    ? (n[r] = (...e) => {
                        i(...e), a(...e);
                      })
                    : a && (n[r] = a)
                  : "style" === r
                  ? (n[r] = { ...a, ...i })
                  : "className" === r &&
                    (n[r] = [a, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(i, n.props),
            ref: t ? (0, a.F)(t, s) : s,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      s.displayName = "SlotClone";
      var l = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function u(e) {
        return r.isValidElement(e) && e.type === l;
      }
    },
    61673: function (e, t, n) {
      "use strict";
      n.d(t, {
        Eh: function () {
          return et;
        },
        VY: function () {
          return ee;
        },
        h_: function () {
          return J;
        },
        zt: function () {
          return Q;
        },
        fC: function () {
          return Y;
        },
        xz: function () {
          return X;
        },
      });
      var r,
        a = n(55881),
        i = n(6533),
        o = n(24286),
        s = n(40384),
        l = n(14521),
        u = n(28416),
        c = n(53345),
        d = n(90132),
        h = "dismissableLayer.update",
        f = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = a.forwardRef((e, t) => {
          var n, s;
          let {
              disableOutsidePointerEvents: p = !1,
              onEscapeKeyDown: y,
              onPointerDownOutside: g,
              onFocusOutside: w,
              onInteractOutside: v,
              onDismiss: x,
              ...E
            } = e,
            C = a.useContext(f),
            [k, S] = a.useState(null),
            T =
              null !== (s = null == k ? void 0 : k.ownerDocument) &&
              void 0 !== s
                ? s
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, R] = a.useState({}),
            P = (0, o.e)(t, (e) => S(e)),
            O = Array.from(C.layers),
            [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            I = O.indexOf(A),
            _ = k ? O.indexOf(k) : -1,
            B = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = _ >= I,
            N = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, u.W)(e),
                i = a.useRef(!1),
                o = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, a, {
                              discrete: !0,
                            });
                          },
                          a = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", o.current),
                            (o.current = t),
                            n.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", o.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", o.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !j ||
                n ||
                (null == g || g(e),
                null == v || v(e),
                e.defaultPrevented || null == x || x());
            }, T),
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, u.W)(e),
                i = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == w || w(e),
                null == v || v(e),
                e.defaultPrevented || null == x || x());
            }, T);
          return (
            (0, c.e)((e) => {
              _ !== C.layers.size - 1 ||
                (null == y || y(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, T),
            a.useEffect(() => {
              if (k)
                return (
                  p &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(k)),
                  C.layers.add(k),
                  b(),
                  () => {
                    p &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r);
                  }
                );
            }, [k, T, p, C]),
            a.useEffect(
              () => () => {
                k &&
                  (C.layers.delete(k),
                  C.layersWithOutsidePointerEventsDisabled.delete(k),
                  b());
              },
              [k, C]
            ),
            a.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(h, e),
                () => document.removeEventListener(h, e)
              );
            }, []),
            (0, d.jsx)(l.WV.div, {
              ...E,
              ref: P,
              style: {
                pointerEvents: B ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                N.onPointerDownCapture
              ),
            })
          );
        });
      function b() {
        let e = new CustomEvent(h);
        document.dispatchEvent(e);
      }
      function m(e, t, n, r) {
        let { discrete: a } = r,
          i = n.originalEvent.target,
          o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          a ? (0, l.jH)(i, o) : i.dispatchEvent(o);
      }
      (p.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let n = a.useContext(f),
            r = a.useRef(null),
            i = (0, o.e)(t, r);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, d.jsx)(l.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var y = n(55875),
        g = n(56958),
        w = n(1580),
        v = n(90211),
        x = n(3790),
        E = n(511),
        C = n(21120),
        [k, S] = (0, s.b)("Tooltip", [g.D7]),
        T = (0, g.D7)(),
        R = "TooltipProvider",
        P = "tooltip.open",
        [O, A] = k(R),
        I = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: o,
            } = e,
            [s, l] = a.useState(!0),
            u = a.useRef(!1),
            c = a.useRef(0);
          return (
            a.useEffect(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, d.jsx)(O, {
              scope: t,
              isOpenDelayed: s,
              delayDuration: n,
              onOpen: a.useCallback(() => {
                window.clearTimeout(c.current), l(!1);
              }, []),
              onClose: a.useCallback(() => {
                window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => l(!0), r));
              }, [r]),
              isPointerInTransitRef: u,
              onPointerInTransitChange: a.useCallback((e) => {
                u.current = e;
              }, []),
              disableHoverableContent: i,
              children: o,
            })
          );
        };
      I.displayName = R;
      var _ = "Tooltip",
        [B, j] = k(_),
        N = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: o,
              disableHoverableContent: s,
              delayDuration: l,
            } = e,
            u = A(_, e.__scopeTooltip),
            c = T(t),
            [h, f] = a.useState(null),
            p = (0, y.M)(),
            b = a.useRef(0),
            m = null != s ? s : u.disableHoverableContent,
            w = null != l ? l : u.delayDuration,
            v = a.useRef(!1),
            [x = !1, C] = (0, E.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (u.onOpen(), document.dispatchEvent(new CustomEvent(P)))
                  : u.onClose(),
                  null == o || o(e);
              },
            }),
            k = a.useMemo(
              () =>
                x ? (v.current ? "delayed-open" : "instant-open") : "closed",
              [x]
            ),
            S = a.useCallback(() => {
              window.clearTimeout(b.current),
                (b.current = 0),
                (v.current = !1),
                C(!0);
            }, [C]),
            R = a.useCallback(() => {
              window.clearTimeout(b.current), (b.current = 0), C(!1);
            }, [C]),
            O = a.useCallback(() => {
              window.clearTimeout(b.current),
                (b.current = window.setTimeout(() => {
                  (v.current = !0), C(!0), (b.current = 0);
                }, w));
            }, [w, C]);
          return (
            a.useEffect(
              () => () => {
                b.current && (window.clearTimeout(b.current), (b.current = 0));
              },
              []
            ),
            (0, d.jsx)(g.fC, {
              ...c,
              children: (0, d.jsx)(B, {
                scope: t,
                contentId: p,
                open: x,
                stateAttribute: k,
                trigger: h,
                onTriggerChange: f,
                onTriggerEnter: a.useCallback(() => {
                  u.isOpenDelayed ? O() : S();
                }, [u.isOpenDelayed, O, S]),
                onTriggerLeave: a.useCallback(() => {
                  m ? R() : (window.clearTimeout(b.current), (b.current = 0));
                }, [R, m]),
                onOpen: S,
                onClose: R,
                disableHoverableContent: m,
                children: n,
              }),
            })
          );
        };
      N.displayName = _;
      var M = "TooltipTrigger",
        F = a.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            s = j(M, n),
            u = A(M, n),
            c = T(n),
            h = a.useRef(null),
            f = (0, o.e)(t, h, s.onTriggerChange),
            p = a.useRef(!1),
            b = a.useRef(!1),
            m = a.useCallback(() => (p.current = !1), []);
          return (
            a.useEffect(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, d.jsx)(g.ee, {
              asChild: !0,
              ...c,
              children: (0, d.jsx)(l.WV.button, {
                "aria-describedby": s.open ? s.contentId : void 0,
                "data-state": s.stateAttribute,
                ...r,
                ref: f,
                onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    b.current ||
                    u.isPointerInTransitRef.current ||
                    (s.onTriggerEnter(), (b.current = !0));
                }),
                onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                  s.onTriggerLeave(), (b.current = !1);
                }),
                onPointerDown: (0, i.M)(e.onPointerDown, () => {
                  (p.current = !0),
                    document.addEventListener("pointerup", m, { once: !0 });
                }),
                onFocus: (0, i.M)(e.onFocus, () => {
                  p.current || s.onOpen();
                }),
                onBlur: (0, i.M)(e.onBlur, s.onClose),
                onClick: (0, i.M)(e.onClick, s.onClose),
              }),
            })
          );
        });
      F.displayName = M;
      var L = "TooltipPortal",
        [D, q] = k(L, { forceMount: void 0 }),
        z = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = j(L, t);
          return (0, d.jsx)(D, {
            scope: t,
            forceMount: n,
            children: (0, d.jsx)(v.z, {
              present: n || i.open,
              children: (0, d.jsx)(w.h, {
                asChild: !0,
                container: a,
                children: r,
              }),
            }),
          });
        };
      z.displayName = L;
      var $ = "TooltipContent",
        W = a.forwardRef((e, t) => {
          let n = q($, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: a = "top", ...i } = e,
            o = j($, e.__scopeTooltip);
          return (0, d.jsx)(v.z, {
            present: r || o.open,
            children: o.disableHoverableContent
              ? (0, d.jsx)(V, { side: a, ...i, ref: t })
              : (0, d.jsx)(H, { side: a, ...i, ref: t }),
          });
        }),
        H = a.forwardRef((e, t) => {
          let n = j($, e.__scopeTooltip),
            r = A($, e.__scopeTooltip),
            i = a.useRef(null),
            s = (0, o.e)(t, i),
            [l, u] = a.useState(null),
            { trigger: c, onClose: h } = n,
            f = i.current,
            { onPointerInTransitChange: p } = r,
            b = a.useCallback(() => {
              u(null), p(!1);
            }, [p]),
            m = a.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  a = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      a = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, a, i)) {
                      case i:
                        return "left";
                      case a:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, a),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: a } = e;
                      return [
                        { x: a, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: a, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  p(!0);
              },
              [p]
            );
          return (
            a.useEffect(() => () => b(), [b]),
            a.useEffect(() => {
              if (c && f) {
                let e = (e) => m(e, f),
                  t = (e) => m(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    c.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [c, f, m, b]),
            a.useEffect(() => {
              if (l) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    a = !(function (e, t) {
                      let { x: n, y: r } = e,
                        a = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let o = t[e].x,
                          s = t[e].y,
                          l = t[i].x,
                          u = t[i].y;
                        s > r != u > r &&
                          n < ((l - o) * (r - s)) / (u - s) + o &&
                          (a = !a);
                      }
                      return a;
                    })(n, l);
                  r ? b() : a && (b(), h());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, f, l, h, b]),
            (0, d.jsx)(V, { ...e, ref: s })
          );
        }),
        [G, U] = k(_, { isInside: !1 }),
        V = a.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: r,
              "aria-label": i,
              onEscapeKeyDown: o,
              onPointerDownOutside: s,
              ...l
            } = e,
            u = j($, n),
            c = T(n),
            { onClose: h } = u;
          return (
            a.useEffect(
              () => (
                document.addEventListener(P, h),
                () => document.removeEventListener(P, h)
              ),
              [h]
            ),
            a.useEffect(() => {
              if (u.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(u.trigger)) && h();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [u.trigger, h]),
            (0, d.jsx)(p, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: h,
              children: (0, d.jsxs)(g.VY, {
                "data-state": u.stateAttribute,
                ...c,
                ...l,
                ref: t,
                style: {
                  ...l.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, d.jsx)(x.A4, { children: r }),
                  (0, d.jsx)(G, {
                    scope: n,
                    isInside: !0,
                    children: (0, d.jsx)(C.f, {
                      id: u.contentId,
                      role: "tooltip",
                      children: i || r,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      W.displayName = $;
      var Z = "TooltipArrow",
        K = a.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            a = T(n);
          return U(Z, n).isInside
            ? null
            : (0, d.jsx)(g.Eh, { ...a, ...r, ref: t });
        });
      K.displayName = Z;
      var Q = I,
        Y = N,
        X = F,
        J = z,
        ee = W,
        et = K;
    },
    21120: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return o;
        },
        f: function () {
          return s;
        },
      });
      var r = n(55881),
        a = n(14521),
        i = n(90132),
        o = r.forwardRef((e, t) =>
          (0, i.jsx)(a.WV.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      o.displayName = "VisuallyHidden";
      var s = o;
    },
    77356: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(29457),
        a = n(19815),
        i = n(45547),
        o = n(78694),
        s = n(79632),
        l = n(24142),
        u = class extends o.l {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#t = null),
              (this.#n = (0, s.O)()),
              this.options.experimental_prefetchInRender ||
                this.#n.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #r = void 0;
          #a = void 0;
          #i = void 0;
          #o;
          #s;
          #n;
          #t;
          #l;
          #u;
          #c;
          #d;
          #h;
          #f;
          #p = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#r.addObserver(this),
              c(this.#r, this.options) ? this.#b() : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#r, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#r, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#y(),
              this.#g(),
              this.#r.removeObserver(this);
          }
          setOptions(e, t) {
            let n = this.options,
              r = this.#r;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, l.Nc)(this.options.enabled, this.#r))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#w(),
              this.#r.setOptions(this.options),
              n._defaulted &&
                !(0, l.VS)(this.options, n) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#r,
                    observer: this,
                  });
            let a = this.hasListeners();
            a && h(this.#r, r, this.options, n) && this.#b(),
              this.updateResult(t),
              a &&
                (this.#r !== r ||
                  (0, l.Nc)(this.options.enabled, this.#r) !==
                    (0, l.Nc)(n.enabled, this.#r) ||
                  (0, l.KC)(this.options.staleTime, this.#r) !==
                    (0, l.KC)(n.staleTime, this.#r)) &&
                this.#v();
            let i = this.#x();
            a &&
              (this.#r !== r ||
                (0, l.Nc)(this.options.enabled, this.#r) !==
                  (0, l.Nc)(n.enabled, this.#r) ||
                i !== this.#f) &&
              this.#E(i);
          }
          getOptimisticResult(e) {
            let t = this.#e.getQueryCache().build(this.#e, e),
              n = this.createResult(t, e);
            return (
              (0, l.VS)(this.getCurrentResult(), n) ||
                ((this.#i = n),
                (this.#s = this.options),
                (this.#o = this.#r.state)),
              n
            );
          }
          getCurrentResult() {
            return this.#i;
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
            this.#p.add(e);
          }
          getCurrentQuery() {
            return this.#r;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              n = this.#e.getQueryCache().build(this.#e, t);
            return n.fetch().then(() => this.createResult(n, t));
          }
          fetch(e) {
            return this.#b({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#i)
            );
          }
          #b(e) {
            this.#w();
            let t = this.#r.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(l.ZT)), t;
          }
          #v() {
            this.#y();
            let e = (0, l.KC)(this.options.staleTime, this.#r);
            if (l.sk || this.#i.isStale || !(0, l.PN)(e)) return;
            let t = (0, l.Kp)(this.#i.dataUpdatedAt, e);
            this.#d = setTimeout(() => {
              this.#i.isStale || this.updateResult();
            }, t + 1);
          }
          #x() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#r)
                : this.options.refetchInterval) ?? !1
            );
          }
          #E(e) {
            this.#g(),
              (this.#f = e),
              !l.sk &&
                !1 !== (0, l.Nc)(this.options.enabled, this.#r) &&
                (0, l.PN)(this.#f) &&
                0 !== this.#f &&
                (this.#h = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    r.j.isFocused()) &&
                    this.#b();
                }, this.#f));
          }
          #m() {
            this.#v(), this.#E(this.#x());
          }
          #y() {
            this.#d && (clearTimeout(this.#d), (this.#d = void 0));
          }
          #g() {
            this.#h && (clearInterval(this.#h), (this.#h = void 0));
          }
          createResult(e, t) {
            let n;
            let r = this.#r,
              a = this.options,
              o = this.#i,
              u = this.#o,
              d = this.#s,
              p = e !== r ? e.state : this.#a,
              { state: b } = e,
              m = { ...b },
              y = !1;
            if (t._optimisticResults) {
              let n = this.hasListeners(),
                o = !n && c(e, t),
                s = n && h(e, r, t, a);
              (o || s) && (m = { ...m, ...(0, i.z)(b.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (m.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: w, status: v } = m;
            if (t.select && void 0 !== m.data) {
              if (o && m.data === u?.data && t.select === this.#l) n = this.#u;
              else
                try {
                  (this.#l = t.select),
                    (n = t.select(m.data)),
                    (n = (0, l.oE)(o?.data, n, t)),
                    (this.#u = n),
                    (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
            } else n = m.data;
            if (
              void 0 !== t.placeholderData &&
              void 0 === n &&
              "pending" === v
            ) {
              let e;
              if (
                o?.isPlaceholderData &&
                t.placeholderData === d?.placeholderData
              )
                e = o.data;
              else if (
                ((e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#c?.state.data, this.#c)
                    : t.placeholderData),
                t.select && void 0 !== e)
              )
                try {
                  (e = t.select(e)), (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
              void 0 !== e &&
                ((v = "success"), (n = (0, l.oE)(o?.data, e, t)), (y = !0));
            }
            this.#t &&
              ((g = this.#t), (n = this.#u), (w = Date.now()), (v = "error"));
            let x = "fetching" === m.fetchStatus,
              E = "pending" === v,
              C = "error" === v,
              k = E && x,
              S = void 0 !== n,
              T = {
                status: v,
                fetchStatus: m.fetchStatus,
                isPending: E,
                isSuccess: "success" === v,
                isError: C,
                isInitialLoading: k,
                isLoading: k,
                data: n,
                dataUpdatedAt: m.dataUpdatedAt,
                error: g,
                errorUpdatedAt: w,
                failureCount: m.fetchFailureCount,
                failureReason: m.fetchFailureReason,
                errorUpdateCount: m.errorUpdateCount,
                isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
                isFetchedAfterMount:
                  m.dataUpdateCount > p.dataUpdateCount ||
                  m.errorUpdateCount > p.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !E,
                isLoadingError: C && !S,
                isPaused: "paused" === m.fetchStatus,
                isPlaceholderData: y,
                isRefetchError: C && S,
                isStale: f(e, t),
                refetch: this.refetch,
                promise: this.#n,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === T.status
                    ? e.reject(T.error)
                    : void 0 !== T.data && e.resolve(T.data);
                },
                n = () => {
                  t((this.#n = T.promise = (0, s.O)()));
                },
                a = this.#n;
              switch (a.status) {
                case "pending":
                  e.queryHash === r.queryHash && t(a);
                  break;
                case "fulfilled":
                  ("error" === T.status || T.data !== a.value) && n();
                  break;
                case "rejected":
                  ("error" !== T.status || T.error !== a.reason) && n();
              }
            }
            return T;
          }
          updateResult(e) {
            let t = this.#i,
              n = this.createResult(this.#r, this.options);
            if (
              ((this.#o = this.#r.state),
              (this.#s = this.options),
              void 0 !== this.#o.data && (this.#c = this.#r),
              (0, l.VS)(n, t))
            )
              return;
            this.#i = n;
            let r = {};
            e?.listeners !== !1 &&
              (() => {
                if (!t) return !0;
                let { notifyOnChangeProps: e } = this.options,
                  n = "function" == typeof e ? e() : e;
                if ("all" === n || (!n && !this.#p.size)) return !0;
                let r = new Set(n ?? this.#p);
                return (
                  this.options.throwOnError && r.add("error"),
                  Object.keys(this.#i).some(
                    (e) => this.#i[e] !== t[e] && r.has(e)
                  )
                );
              })() &&
              (r.listeners = !0),
              this.#C({ ...r, ...e });
          }
          #w() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#r) return;
            let t = this.#r;
            (this.#r = e),
              (this.#a = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #C(e) {
            a.V.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#i);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#r, type: "observerResultsUpdated" });
            });
          }
        };
      function c(e, t) {
        return (
          (!1 !== (0, l.Nc)(t.enabled, e) &&
            void 0 === e.state.data &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
        );
      }
      function d(e, t, n) {
        if (!1 !== (0, l.Nc)(t.enabled, e)) {
          let r = "function" == typeof n ? n(e) : n;
          return "always" === r || (!1 !== r && f(e, t));
        }
        return !1;
      }
      function h(e, t, n, r) {
        return (
          (e !== t || !1 === (0, l.Nc)(r.enabled, e)) &&
          (!n.suspense || "error" !== e.state.status) &&
          f(e, n)
        );
      }
      function f(e, t) {
        return (
          !1 !== (0, l.Nc)(t.enabled, e) &&
          e.isStaleByTime((0, l.KC)(t.staleTime, e))
        );
      }
    },
    83124: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var a = n(55881);
      n(90132);
      var i = a.createContext(
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
        o = () => a.useContext(i);
    },
    89002: function (e, t, n) {
      "use strict";
      n.d(t, {
        JN: function () {
          return o;
        },
        KJ: function () {
          return s;
        },
        pf: function () {
          return i;
        },
      });
      var r = n(55881),
        a = n(55538),
        i = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        o = (e) => {
          r.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        s = (e) => {
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
            (0, a.L)(r, [t.error, i])
          );
        };
    },
    77319: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(55881),
        a = r.createContext(!1),
        i = () => r.useContext(a);
      a.Provider;
    },
    3520: function (e, t, n) {
      "use strict";
      n.d(t, {
        A8: function () {
          return r;
        },
        SB: function () {
          return i;
        },
        Z$: function () {
          return a;
        },
        j8: function () {
          return o;
        },
      });
      var r = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              "function" == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        a = (e, t) => e.isLoading && e.isFetching && !t,
        i = (e, t) => e?.suspense && t.isPending,
        o = (e, t, n) =>
          t.fetchOptimistic(e).catch(() => {
            n.clearReset();
          });
    },
    96272: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return d;
        },
      });
      var r = n(55881),
        a = n(58389),
        i = n(19815),
        o = n(78694),
        s = n(24142),
        l = class extends o.l {
          #e;
          #i = void 0;
          #k;
          #S;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#T();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, s.VS)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#k,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#k?.state.status === "pending" &&
                  this.#k.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#k?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#T(), this.#C(e);
          }
          getCurrentResult() {
            return this.#i;
          }
          reset() {
            this.#k?.removeObserver(this),
              (this.#k = void 0),
              this.#T(),
              this.#C();
          }
          mutate(e, t) {
            return (
              (this.#S = t),
              this.#k?.removeObserver(this),
              (this.#k = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#k.addObserver(this),
              this.#k.execute(e)
            );
          }
          #T() {
            let e = this.#k?.state ?? (0, a.R)();
            this.#i = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #C(e) {
            i.V.batch(() => {
              if (this.#S && this.hasListeners()) {
                let t = this.#i.variables,
                  n = this.#i.context;
                e?.type === "success"
                  ? (this.#S.onSuccess?.(e.data, t, n),
                    this.#S.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#S.onError?.(e.error, t, n),
                    this.#S.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#i);
              });
            });
          }
        },
        u = n(6306),
        c = n(55538);
      function d(e, t) {
        let n = (0, u.NL)(t),
          [a] = r.useState(() => new l(n, e));
        r.useEffect(() => {
          a.setOptions(e);
        }, [a, e]);
        let o = r.useSyncExternalStore(
            r.useCallback((e) => a.subscribe(i.V.batchCalls(e)), [a]),
            () => a.getCurrentResult(),
            () => a.getCurrentResult()
          ),
          s = r.useCallback(
            (e, t) => {
              a.mutate(e, t).catch(c.Z);
            },
            [a]
          );
        if (o.error && (0, c.L)(a.options.throwOnError, [o.error]))
          throw o.error;
        return { ...o, mutate: s, mutateAsync: o.mutate };
      }
    },
    17513: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return m;
        },
      });
      var r = n(55881),
        a = n(19815),
        i = n(77356),
        o = n(78694),
        s = n(24142);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var u = class extends o.l {
          #e;
          #R;
          #P;
          #O;
          #A;
          #I;
          #_;
          #B;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#O = n),
              (this.#P = []),
              (this.#A = []),
              (this.#R = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#A.forEach((e) => {
                e.subscribe((t) => {
                  this.#j(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#A.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, n) {
            (this.#P = e),
              (this.#O = t),
              a.V.batch(() => {
                let e = this.#A,
                  t = this.#N(this.#P);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n)
                );
                let r = t.map((e) => e.observer),
                  a = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, n) => t !== e[n]);
                (e.length !== r.length || i) &&
                  ((this.#A = r),
                  (this.#R = a),
                  this.hasListeners() &&
                    (l(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    l(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#j(e, t);
                      });
                    }),
                    this.#C()));
              });
          }
          getCurrentResult() {
            return this.#R;
          }
          getQueries() {
            return this.#A.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#A;
          }
          getOptimisticResult(e, t) {
            let n = this.#N(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions)
            );
            return [n, (e) => this.#M(e ?? n, t), () => this.#F(n, e)];
          }
          #F(e, t) {
            let n = this.#N(t);
            return n.map((t, r) => {
              let a = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? a
                : t.observer.trackResult(a, (e) => {
                    n.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #M(e, t) {
            return t
              ? ((this.#I && this.#R === this.#B && t === this.#_) ||
                  ((this.#_ = t),
                  (this.#B = this.#R),
                  (this.#I = (0, s.Q$)(this.#I, t(e)))),
                this.#I)
              : e;
          }
          #N(e) {
            let t = new Map(this.#A.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                let r = this.#e.defaultQueryOptions(e),
                  a = t.get(r.queryHash);
                a
                  ? n.push({ defaultedQueryOptions: r, observer: a })
                  : n.push({
                      defaultedQueryOptions: r,
                      observer: new i.z(this.#e, r),
                    });
              }),
              n
            );
          }
          #j(e, t) {
            let n = this.#A.indexOf(e);
            -1 !== n &&
              ((this.#R = (function (e, t, n) {
                let r = e.slice(0);
                return (r[t] = n), r;
              })(this.#R, n, t)),
              this.#C());
          }
          #C() {
            this.hasListeners() &&
              this.#I !==
                this.#M(this.#F(this.#R, this.#P), this.#O?.combine) &&
              a.V.batch(() => {
                this.listeners.forEach((e) => {
                  e(this.#R);
                });
              });
          }
        },
        c = n(6306),
        d = n(77319),
        h = n(83124),
        f = n(89002),
        p = n(3520),
        b = n(55538);
      function m(e, t) {
        let { queries: n, ...o } = e,
          s = (0, c.NL)(t),
          l = (0, d.S)(),
          m = (0, h._)(),
          y = r.useMemo(
            () =>
              n.map((e) => {
                let t = s.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = l ? "isRestoring" : "optimistic"), t
                );
              }),
            [n, s, l]
          );
        y.forEach((e) => {
          (0, p.A8)(e), (0, f.pf)(e, m);
        }),
          (0, f.JN)(m);
        let [g] = r.useState(() => new u(s, y, o)),
          [w, v, x] = g.getOptimisticResult(y, o.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (l ? b.Z : g.subscribe(a.V.batchCalls(e))),
            [g, l]
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult()
        ),
          r.useEffect(() => {
            g.setQueries(y, o, { listeners: !1 });
          }, [y, o, g]);
        let E = w.some((e, t) => (0, p.SB)(y[t], e))
          ? w.flatMap((e, t) => {
              let n = y[t];
              if (n) {
                let t = new i.z(s, n);
                if ((0, p.SB)(n, e)) return (0, p.j8)(n, t, m);
                (0, p.Z$)(e, l) && (0, p.j8)(n, t, m);
              }
              return [];
            })
          : [];
        if (E.length > 0) throw Promise.all(E);
        let C = w.find((e, t) => {
          let n = y[t];
          return (
            n &&
            (0, f.KJ)({
              result: e,
              errorResetBoundary: m,
              throwOnError: n.throwOnError,
              query: s.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (null == C ? void 0 : C.error) throw C.error;
        return v(x());
      }
    },
    91793: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return f;
        },
      });
      var r = n(77356),
        a = n(55881),
        i = n(19815),
        o = n(24142),
        s = n(6306),
        l = n(83124),
        u = n(89002),
        c = n(77319),
        d = n(3520),
        h = n(55538);
      function f(e, t) {
        return (function (e, t, n) {
          var r, f, p, b, m;
          let y = (0, s.NL)(n),
            g = (0, c.S)(),
            w = (0, l._)(),
            v = y.defaultQueryOptions(e);
          null === (f = y.getDefaultOptions().queries) ||
            void 0 === f ||
            null === (r = f._experimental_beforeQuery) ||
            void 0 === r ||
            r.call(f, v),
            (v._optimisticResults = g ? "isRestoring" : "optimistic"),
            (0, d.A8)(v),
            (0, u.pf)(v, w),
            (0, u.JN)(w);
          let x = !y.getQueryCache().get(v.queryHash),
            [E] = a.useState(() => new t(y, v)),
            C = E.getOptimisticResult(v);
          if (
            (a.useSyncExternalStore(
              a.useCallback(
                (e) => {
                  let t = g ? h.Z : E.subscribe(i.V.batchCalls(e));
                  return E.updateResult(), t;
                },
                [E, g]
              ),
              () => E.getCurrentResult(),
              () => E.getCurrentResult()
            ),
            a.useEffect(() => {
              E.setOptions(v, { listeners: !1 });
            }, [v, E]),
            (0, d.SB)(v, C))
          )
            throw (0, d.j8)(v, E, w);
          if (
            (0, u.KJ)({
              result: C,
              errorResetBoundary: w,
              throwOnError: v.throwOnError,
              query: y.getQueryCache().get(v.queryHash),
            })
          )
            throw C.error;
          if (
            (null === (b = y.getDefaultOptions().queries) ||
              void 0 === b ||
              null === (p = b._experimental_afterQuery) ||
              void 0 === p ||
              p.call(b, v, C),
            v.experimental_prefetchInRender && !o.sk && (0, d.Z$)(C, g))
          ) {
            let e = x
              ? (0, d.j8)(v, E, w)
              : null === (m = y.getQueryCache().get(v.queryHash)) ||
                void 0 === m
              ? void 0
              : m.promise;
            null == e ||
              e.catch(h.Z).finally(() => {
                E.updateResult();
              });
          }
          return v.notifyOnChangeProps ? C : E.trackResult(C);
        })(e, r.z, t);
      }
    },
    55538: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function a() {}
      n.d(t, {
        L: function () {
          return r;
        },
        Z: function () {
          return a;
        },
      });
    },
    90378: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        v: function () {
          return nd;
        },
      });
      var a = n(22614);
      let i = 256;
      function o(e = 11) {
        if (!r || i + e > 512) {
          (r = ""), (i = 0);
          for (let e = 0; e < 256; e++)
            r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return r.substring(i, i++ + e);
      }
      function s(e) {
        let {
            batch: t,
            cacheTime: n = e.pollingInterval ?? 4e3,
            ccipRead: r,
            key: i = "base",
            name: s = "Base Client",
            pollingInterval: l = 4e3,
            type: u = "base",
          } = e,
          c = e.chain,
          d = e.account ? (0, a.T)(e.account) : void 0,
          {
            config: h,
            request: f,
            value: p,
          } = e.transport({ chain: c, pollingInterval: l }),
          b = {
            account: d,
            batch: t,
            cacheTime: n,
            ccipRead: r,
            chain: c,
            key: i,
            name: s,
            pollingInterval: l,
            request: f,
            transport: { ...h, ...p },
            type: u,
            uid: o(),
          };
        return Object.assign(b, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in b) delete r[e];
              let a = { ...t, ...r };
              return Object.assign(a, { extend: e(a) });
            };
          })(b),
        });
      }
      var l = n(38233),
        u = n(79227),
        c = n(90985),
        d = n(34168),
        h = n(67728),
        f = n(38997),
        p = n(64495),
        b = n(52301),
        m = n(37784);
      function y(e, t) {
        if (!(e instanceof b.G)) return !1;
        let n = e.walk((e) => e instanceof m.Lu);
        return (
          n instanceof m.Lu &&
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
            ("reverse" === t && n.reason === p.$[50]))
        );
      }
      var g = n(30968),
        w = n(67834),
        v = n(5324),
        x = n(26582);
      function E(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, f.ci)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let r = (0, x.i)(n[e]),
            a = r ? (0, w.O0)(r) : (0, v.w)((0, w.qX)(n[e]), "bytes");
          t = (0, v.w)((0, g.zo)([t, a]), "bytes");
        }
        return (0, f.ci)(t);
      }
      var C = n(64843);
      function k(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, w.qX)(t).byteLength + 2),
          r = 0,
          a = t.split(".");
        for (let e = 0; e < a.length; e++) {
          let t = (0, w.qX)(a[e]);
          if (t.byteLength > 255) {
            var i;
            t = (0, w.qX)(((i = (0, C.d)(a[e])), `[${i.slice(2)}]`));
          }
          (n[r] = t.length), n.set(t, r + 1), (r += t.length + 1);
        }
        return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
      }
      function S(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let a = e[n];
        return "function" == typeof a ? a : (n) => t(e, n);
      }
      var T = n(43561),
        R = n(74952);
      function P(
        e,
        { abi: t, address: n, args: r, docsPath: a, functionName: i, sender: o }
      ) {
        let {
            code: s,
            data: l,
            message: u,
            shortMessage: c,
          } = e instanceof m.VQ
            ? e
            : e instanceof b.G
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
          d =
            e instanceof T.wb
              ? new m.Dk({ functionName: i })
              : [3, R.XS.code].includes(s) && (l || u || c)
              ? new m.Lu({
                  abi: t,
                  data: "object" == typeof l ? l.data : l,
                  functionName: i,
                  message: c ?? u,
                })
              : e;
        return new m.uq(d, {
          abi: t,
          args: r,
          contractAddress: n,
          docsPath: a,
          functionName: i,
          sender: o,
        });
      }
      var O = n(29266);
      async function A(e, t) {
        let { abi: n, address: r, args: a, functionName: i, ...o } = t,
          s = (0, c.R)({ abi: n, args: a, functionName: i });
        try {
          let { data: t } = await S(e, O.R, "call")({ ...o, data: s, to: r });
          return (0, u.k)({
            abi: n,
            args: a,
            functionName: i,
            data: t || "0x",
          });
        } catch (e) {
          throw P(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/readContract",
            functionName: i,
          });
        }
      }
      async function I(
        e,
        {
          blockNumber: t,
          blockTag: n,
          coinType: r,
          name: a,
          gatewayUrls: i,
          strict: o,
          universalResolverAddress: s,
        }
      ) {
        let p = s;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, d.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let o = (0, c.R)({
              abi: l.X$,
              functionName: "addr",
              ...(null != r ? { args: [E(a), BigInt(r)] } : { args: [E(a)] }),
            }),
            s = {
              address: p,
              abi: l.k3,
              functionName: "resolve",
              args: [(0, f.NC)(k(a)), o],
              blockNumber: t,
              blockTag: n,
            },
            d = S(e, A, "readContract"),
            b = i ? await d({ ...s, args: [...s.args, i] }) : await d(s);
          if ("0x" === b[0]) return null;
          let m = (0, u.k)({
            abi: l.X$,
            args: null != r ? [E(a), BigInt(r)] : void 0,
            functionName: "addr",
            data: b[0],
          });
          if ("0x" === m || "0x00" === (0, h.f)(m)) return null;
          return m;
        } catch (e) {
          if (o) throw e;
          if (y(e, "resolve")) return null;
          throw e;
        }
      }
      class _ extends b.G {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class B extends b.G {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class j extends b.G {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class N extends b.G {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let M =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        F =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        L = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        D = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function q(e) {
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
      function z(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function $({ uri: e, gatewayUrls: t }) {
        let n = L.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = z(t?.ipfs, "https://ipfs.io"),
          a = z(t?.arweave, "https://arweave.net"),
          i = e.match(M),
          {
            protocol: o,
            subpath: s,
            target: l,
            subtarget: u = "",
          } = i?.groups || {},
          c = "ipns:/" === o || "ipns/" === s,
          d = "ipfs:/" === o || "ipfs/" === s || F.test(e);
        if (e.startsWith("http") && !c && !d) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((c || d) && l)
          return {
            uri: `${r}/${c ? "ipns" : "ipfs"}/${l}${u}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === o && l)
          return { uri: `${a}/${l}${u || ""}`, isOnChain: !1, isEncoded: !1 };
        let h = e.replace(D, "");
        if (
          (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`),
          h.startsWith("data:") || h.startsWith("{"))
        )
          return { uri: h, isOnChain: !0, isEncoded: !1 };
        throw new j({ uri: e });
      }
      function W(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new _({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function H({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await G({ gatewayUrls: e, uri: W(n) });
        } catch {
          throw new j({ uri: t });
        }
      }
      async function G({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = $({ uri: t, gatewayUrls: e });
        if (r || (await q(n))) return n;
        throw new j({ uri: t });
      }
      async function U(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return A(e, {
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
          return A(e, {
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
        throw new N({ namespace: t.namespace });
      }
      async function V(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? Z(e, { gatewayUrls: t, record: n })
          : G({ uri: n, gatewayUrls: t });
      }
      async function Z(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, a] = t.split("/"),
              [i, o] = n.split(":"),
              [s, l] = r.split(":");
            if (!i || "eip155" !== i.toLowerCase())
              throw new B({ reason: "Only EIP-155 supported" });
            if (!o) throw new B({ reason: "Chain ID not found" });
            if (!l) throw new B({ reason: "Contract address not found" });
            if (!a) throw new B({ reason: "Token ID not found" });
            if (!s) throw new B({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(o),
              namespace: s.toLowerCase(),
              contractAddress: l,
              tokenID: a,
            };
          })(n),
          {
            uri: a,
            isOnChain: i,
            isEncoded: o,
          } = $({ uri: await U(e, { nft: r }), gatewayUrls: t });
        if (
          i &&
          (a.includes("data:application/json;base64,") || a.startsWith("{"))
        )
          return G({
            uri: W(
              JSON.parse(
                o ? atob(a.replace("data:application/json;base64,", "")) : a
              )
            ),
            gatewayUrls: t,
          });
        let s = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (s = s.replace("0x", "").padStart(64, "0")),
          H({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, s) })
        );
      }
      async function K(
        e,
        {
          blockNumber: t,
          blockTag: n,
          name: r,
          key: a,
          gatewayUrls: i,
          strict: o,
          universalResolverAddress: s,
        }
      ) {
        let h = s;
        if (!h) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          h = (0, d.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let o = {
              address: h,
              abi: l.k3,
              functionName: "resolve",
              args: [
                (0, f.NC)(k(r)),
                (0, c.R)({ abi: l.nZ, functionName: "text", args: [E(r), a] }),
              ],
              blockNumber: t,
              blockTag: n,
            },
            s = S(e, A, "readContract"),
            d = i ? await s({ ...o, args: [...o.args, i] }) : await s(o);
          if ("0x" === d[0]) return null;
          let p = (0, u.k)({ abi: l.nZ, functionName: "text", data: d[0] });
          return "" === p ? null : p;
        } catch (e) {
          if (o) throw e;
          if (y(e, "resolve")) return null;
          throw e;
        }
      }
      async function Q(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: a,
          gatewayUrls: i,
          strict: o,
          universalResolverAddress: s,
        }
      ) {
        let l = await S(
          e,
          K,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: a,
          universalResolverAddress: s,
          gatewayUrls: i,
          strict: o,
        });
        if (!l) return null;
        try {
          return await V(e, { record: l, gatewayUrls: r });
        } catch {
          return null;
        }
      }
      async function Y(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: r,
          gatewayUrls: a,
          strict: i,
          universalResolverAddress: o,
        }
      ) {
        let s = o;
        if (!s) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          s = (0, d.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let u = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: s,
              abi: l.du,
              functionName: "reverse",
              args: [(0, f.NC)(k(u))],
              blockNumber: n,
              blockTag: r,
            },
            o = S(e, A, "readContract"),
            [c, d] = a ? await o({ ...i, args: [...i.args, a] }) : await o(i);
          if (t.toLowerCase() !== d.toLowerCase()) return null;
          return c;
        } catch (e) {
          if (i) throw e;
          if (y(e, "reverse")) return null;
          throw e;
        }
      }
      async function X(
        e,
        { blockNumber: t, blockTag: n, name: r, universalResolverAddress: a }
      ) {
        let i = a;
        if (!i) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          i = (0, d.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [o] = await S(
          e,
          A,
          "readContract"
        )({
          address: i,
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
          args: [(0, f.NC)(k(r))],
          blockNumber: t,
          blockTag: n,
        });
        return o;
      }
      function J(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: a, transport: i }) => {
                "success" === a && t === e && (n[r] = i.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function ee(e) {
        let t = J(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var et = n(19105);
      async function en(e, t) {
        let {
            address: n,
            abi: r,
            args: a,
            eventName: i,
            fromBlock: o,
            strict: s,
            toBlock: l,
          } = t,
          u = J(e, { method: "eth_newFilter" }),
          c = i ? (0, et.O)({ abi: r, args: a, eventName: i }) : void 0,
          d = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof o ? (0, f.eC)(o) : o,
                toBlock: "bigint" == typeof l ? (0, f.eC)(l) : l,
                topics: c,
              },
            ],
          });
        return {
          abi: r,
          args: a,
          eventName: i,
          id: d,
          request: u(d),
          strict: !!s,
          type: "event",
        };
      }
      async function er(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: a,
          fromBlock: i,
          strict: o,
          toBlock: s,
        } = {}
      ) {
        let l = a ?? (r ? [r] : void 0),
          u = J(e, { method: "eth_newFilter" }),
          c = [];
        l &&
          ((c = [
            l.flatMap((e) =>
              (0, et.O)({ abi: [e], eventName: e.name, args: n })
            ),
          ]),
          r && (c = c[0]));
        let d = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, f.eC)(i) : i,
              toBlock: "bigint" == typeof s ? (0, f.eC)(s) : s,
              ...(c.length ? { topics: c } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: d,
          request: u(d),
          strict: !!o,
          toBlock: s,
          type: "event",
        };
      }
      async function ea(e) {
        let t = J(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var ei = n(4020),
        eo = n(73462),
        es = n(13545);
      async function el({ hash: e, signature: t }) {
        let r = (0, eo.v)(e) ? e : (0, f.NC)(e),
          { secp256k1: a } = await Promise.resolve().then(n.bind(n, 23646)),
          i = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: r, yParity: i } = t,
                o = eu(Number(i ?? r));
              return new a.Signature(
                (0, es.y_)(e),
                (0, es.y_)(n)
              ).addRecoveryBit(o);
            }
            let e = (0, eo.v)(t) ? t : (0, f.NC)(t),
              n = eu((0, es.ly)(`0x${e.slice(130)}`));
            return a.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${i}`;
      }
      function eu(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function ec({ hash: e, signature: t }) {
        return (function (e) {
          let t = (0, v.w)(`0x${e.substring(4)}`).substring(26);
          return (0, ei.x)(`0x${t}`);
        })(await el({ hash: e, signature: t }));
      }
      var ed = n(30854);
      async function eh(e) {
        let { authorization: t, signature: n } = e;
        return ec({
          hash: (function (e) {
            let { chainId: t, contractAddress: n, nonce: r, to: a } = e,
              i = (0, v.w)(
                (0, g.SM)([
                  "0x05",
                  (0, ed.LV)([
                    t ? (0, f.eC)(t) : "0x",
                    n,
                    r ? (0, f.eC)(r) : "0x",
                  ]),
                ])
              );
            return "bytes" === a ? (0, w.nr)(i) : i;
          })(t),
          signature: n ?? t,
        });
      }
      var ef = n(28903),
        ep = n(92959),
        eb = n(61317);
      class em extends b.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: a,
            gas: i,
            gasPrice: o,
            maxFeePerGas: s,
            maxPriorityFeePerGas: l,
            nonce: u,
            to: c,
            value: d,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, eb.xr)({
                from: t?.address,
                to: c,
                value:
                  void 0 !== d &&
                  `${(0, ef.d)(d)} ${r?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: i,
                gasPrice: void 0 !== o && `${(0, ep.o)(o)} gwei`,
                maxFeePerGas: void 0 !== s && `${(0, ep.o)(s)} gwei`,
                maxPriorityFeePerGas: void 0 !== l && `${(0, ep.o)(l)} gwei`,
                nonce: u,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var ey = n(95253),
        eg = n(67122),
        ew = n(97503),
        ev = n(10168),
        ex = n(9680),
        eE = n(78032);
      class eC extends b.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class ek extends b.G {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class eS extends b.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            ep.o)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
      class eT extends b.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
      var eR = n(83873);
      async function eP(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: r,
          includeTransactions: a,
        } = {}
      ) {
        let i = a ?? !1,
          o = void 0 !== n ? (0, f.eC)(n) : void 0,
          s = null;
        if (
          !(s = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, i] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [o || (r ?? "latest"), i],
                },
                { dedupe: !!o }
              ))
        )
          throw new eT({ blockHash: t, blockNumber: n });
        return (e.chain?.formatters?.block?.format || eR.Z)(s);
      }
      async function eO(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      async function eA(e, t) {
        return eI(e, t);
      }
      async function eI(e, t) {
        let { block: n, chain: r = e.chain, request: a } = t || {};
        try {
          let t = r?.fees?.maxPriorityFeePerGas ?? r?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let r = n || (await S(e, eP, "getBlock")({})),
              i = await t({ block: r, client: e, request: a });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, es.y_)(i);
        } catch {
          let [t, r] = await Promise.all([
            n ? Promise.resolve(n) : S(e, eP, "getBlock")({}),
            S(e, eO, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new ek();
          let a = r - t.baseFeePerGas;
          if (a < 0n) return 0n;
          return a;
        }
      }
      async function e_(e, t) {
        return eB(e, t);
      }
      async function eB(e, t) {
        let {
            block: n,
            chain: r = e.chain,
            request: a,
            type: i = "eip1559",
          } = t || {},
          o = await (async () =>
            "function" == typeof r?.fees?.baseFeeMultiplier
              ? r.fees.baseFeeMultiplier({ block: n, client: e, request: a })
              : r?.fees?.baseFeeMultiplier ?? 1.2)();
        if (o < 1) throw new eC();
        let s = 10 ** (o.toString().split(".")[1]?.length ?? 0),
          l = (e) => (e * BigInt(Math.ceil(o * s))) / BigInt(s),
          u = n || (await S(e, eP, "getBlock")({}));
        if ("function" == typeof r?.fees?.estimateFeesPerGas) {
          let t = await r.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: l,
            request: a,
            type: i,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === i) {
          if ("bigint" != typeof u.baseFeePerGas) throw new ek();
          let t =
              "bigint" == typeof a?.maxPriorityFeePerGas
                ? a.maxPriorityFeePerGas
                : await eI(e, { block: u, chain: r, request: a }),
            n = l(u.baseFeePerGas);
          return {
            maxFeePerGas: a?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: a?.gasPrice ?? l(await S(e, eO, "getGasPrice")({})),
        };
      }
      async function ej(
        e,
        { address: t, blockTag: n = "latest", blockNumber: r }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, r ? (0, f.eC)(r) : n],
          },
          { dedupe: !!r }
        );
        return (0, es.ly)(a);
      }
      function eN(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, w.nr)(e))
              : e.blobs,
          a = [];
        for (let e of r) a.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? a : a.map((e) => (0, f.ci)(e));
      }
      function eM(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, w.nr)(e))
              : e.blobs,
          a =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, w.nr)(e))
              : e.commitments,
          i = [];
        for (let e = 0; e < r.length; e++) {
          let n = r[e],
            o = a[e];
          i.push(Uint8Array.from(t.computeBlobKzgProof(n, o)));
        }
        return "bytes" === n ? i : i.map((e) => (0, f.ci)(e));
      }
      var eF = n(71035);
      class eL extends b.G {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class eD extends b.G {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      var eq = n(26457),
        ez = n(61995);
      async function e$(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, es.ly)(t);
      }
      let eW = [
        "blobVersionedHashes",
        "chainId",
        "fees",
        "gas",
        "nonce",
        "type",
      ];
      async function eH(e, t) {
        let n, r;
        let {
            account: i = e.account,
            blobs: o,
            chain: s,
            gas: l,
            kzg: u,
            nonce: c,
            nonceManager: d,
            parameters: h = eW,
            type: p,
          } = t,
          b = i ? (0, a.T)(i) : i,
          m = { ...t, ...(b ? { from: b?.address } : {}) };
        async function y() {
          return n || (n = await S(e, eP, "getBlock")({ blockTag: "latest" }));
        }
        async function g() {
          return (
            r ||
            (s
              ? s.id
              : void 0 !== t.chainId
              ? t.chainId
              : (r = await S(e, e$, "getChainId")({})))
          );
        }
        if (
          (h.includes("blobVersionedHashes") || h.includes("sidecars")) &&
          o &&
          u
        ) {
          let e = eN({ blobs: o, kzg: u });
          if (h.includes("blobVersionedHashes")) {
            let t = (function (e) {
              let { commitments: t, version: n } = e,
                r = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                a = [];
              for (let e of t)
                a.push(
                  (function (e) {
                    let { commitment: t, version: n = 1 } = e,
                      r = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                      a = (0, eF.J)(t, "bytes");
                    return a.set([n], 0), "bytes" === r ? a : (0, f.ci)(a);
                  })({ commitment: e, to: r, version: n })
                );
              return a;
            })({ commitments: e, to: "hex" });
            m.blobVersionedHashes = t;
          }
          if (h.includes("sidecars")) {
            let t = eM({ blobs: o, commitments: e, kzg: u }),
              n = (function (e) {
                let { data: t, kzg: n, to: r } = e,
                  a =
                    e.blobs ??
                    (function (e) {
                      let t =
                          e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                        n =
                          "string" == typeof e.data
                            ? (0, w.nr)(e.data)
                            : e.data,
                        r = (0, ez.d)(n);
                      if (!r) throw new eD();
                      if (r > 761855)
                        throw new eL({ maxSize: 761855, size: r });
                      let a = [],
                        i = !0,
                        o = 0;
                      for (; i; ) {
                        let e = (0, eq.q)(new Uint8Array(131072)),
                          t = 0;
                        for (; t < 4096; ) {
                          let r = n.slice(o, o + 31);
                          if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                            e.pushByte(128), (i = !1);
                            break;
                          }
                          t++, (o += 31);
                        }
                        a.push(e);
                      }
                      return "bytes" === t
                        ? a.map((e) => e.bytes)
                        : a.map((e) => (0, f.ci)(e.bytes));
                    })({ data: t, to: r }),
                  i = e.commitments ?? eN({ blobs: a, kzg: n, to: r }),
                  o =
                    e.proofs ?? eM({ blobs: a, commitments: i, kzg: n, to: r }),
                  s = [];
                for (let e = 0; e < a.length; e++)
                  s.push({ blob: a[e], commitment: i[e], proof: o[e] });
                return s;
              })({ blobs: o, commitments: e, proofs: t, to: "hex" });
            m.sidecars = n;
          }
        }
        if (
          (h.includes("chainId") && (m.chainId = await g()),
          h.includes("nonce") && void 0 === c && b)
        ) {
          if (d) {
            let t = await g();
            m.nonce = await d.consume({
              address: b.address,
              chainId: t,
              client: e,
            });
          } else
            m.nonce = await S(
              e,
              ej,
              "getTransactionCount"
            )({ address: b.address, blockTag: "pending" });
        }
        if ((h.includes("fees") || h.includes("type")) && void 0 === p)
          try {
            m.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new eb.j3({ transaction: e });
            })(m);
          } catch {
            let e = await y();
            m.type = "bigint" == typeof e?.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (h.includes("fees")) {
          if ("legacy" !== m.type && "eip2930" !== m.type) {
            if (
              void 0 === m.maxFeePerGas ||
              void 0 === m.maxPriorityFeePerGas
            ) {
              let n = await y(),
                { maxFeePerGas: r, maxPriorityFeePerGas: a } = await eB(e, {
                  block: n,
                  chain: s,
                  request: m,
                });
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < a
              )
                throw new eS({ maxPriorityFeePerGas: a });
              (m.maxPriorityFeePerGas = a), (m.maxFeePerGas = r);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new ek();
            let n = await y(),
              { gasPrice: r } = await eB(e, {
                block: n,
                chain: s,
                request: m,
                type: "legacy",
              });
            m.gasPrice = r;
          }
        }
        return (
          h.includes("gas") &&
            void 0 === l &&
            (m.gas = await S(
              e,
              eU,
              "estimateGas"
            )({
              ...m,
              account: b ? { address: b.address, type: "json-rpc" } : b,
            })),
          (0, eE.F)(m),
          delete m.parameters,
          m
        );
      }
      async function eG(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let a = n ? (0, f.eC)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, a || r] })
        );
      }
      async function eU(e, t) {
        let { account: n = e.account } = t,
          r = n ? (0, a.T)(n) : void 0;
        try {
          let {
              accessList: n,
              authorizationList: a,
              blobs: o,
              blobVersionedHashes: s,
              blockNumber: l,
              blockTag: u,
              data: c,
              gas: d,
              gasPrice: h,
              maxFeePerBlobGas: p,
              maxFeePerGas: m,
              maxPriorityFeePerGas: y,
              nonce: g,
              value: w,
              stateOverride: v,
              ...x
            } = await eH(e, {
              ...t,
              parameters:
                r?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            E = (l ? (0, f.eC)(l) : void 0) || u,
            C = (0, ex.mF)(v),
            k = await (async () =>
              x.to
                ? x.to
                : a && a.length > 0
                ? await eh({ authorization: a[0] }).catch(() => {
                    throw new b.G(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, eE.F)(t);
          let S = e.chain?.formatters?.transactionRequest?.format,
            T = (S || ev.tG)({
              ...(0, ew.K)(x, { format: S }),
              from: r?.address,
              accessList: n,
              authorizationList: a,
              blobs: o,
              blobVersionedHashes: s,
              data: c,
              gas: d,
              gasPrice: h,
              maxFeePerBlobGas: p,
              maxFeePerGas: m,
              maxPriorityFeePerGas: y,
              nonce: g,
              to: k,
              value: w,
            });
          function i(t) {
            let { block: n, request: r, rpcStateOverride: a } = t;
            return e.request({
              method: "eth_estimateGas",
              params: a ? [r, n ?? "latest", a] : n ? [r, n] : [r],
            });
          }
          let R = BigInt(
            await i({ block: E, request: T, rpcStateOverride: C })
          );
          if (a) {
            let t = await eG(e, { address: T.from }),
              n = await Promise.all(
                a.map(async (e) => {
                  let { contractAddress: n } = e,
                    a = await i({
                      block: E,
                      request: {
                        authorizationList: void 0,
                        data: c,
                        from: r?.address,
                        to: n,
                        value: (0, f.eC)(t),
                      },
                      rpcStateOverride: C,
                    }).catch(() => 100000n);
                  return 2n * BigInt(a);
                })
              );
            R += n.reduce((e, t) => e + t, 0n);
          }
          return R;
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new em(
              (() => {
                let t = (0, eg.k)(e, n);
                return t instanceof ey.cj ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: r, chain: e.chain });
        }
      }
      async function eV(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            functionName: o,
            dataSuffix: s,
            ...l
          } = t,
          u = (0, c.R)({ abi: n, args: i, functionName: o });
        try {
          return await S(
            e,
            eU,
            "estimateGas"
          )({ data: `${u}${s ? s.replace("0x", "") : ""}`, to: r, ...l });
        } catch (t) {
          let e = l.account ? (0, a.T)(l.account) : void 0;
          throw P(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: o,
            sender: e?.address,
          });
        }
      }
      async function eZ(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      let eK = new Map(),
        eQ = new Map();
      async function eY(
        e,
        { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let r = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, eK),
              r = t(e, eQ);
            return {
              clear: () => {
                n.clear(), r.clear();
              },
              promise: n,
              response: r,
            };
          })(t),
          a = r.response.get();
        if (a && n > 0 && new Date().getTime() - a.created.getTime() < n)
          return a.data;
        let i = r.promise.get();
        i || ((i = e()), r.promise.set(i));
        try {
          let e = await i;
          return r.response.set({ created: new Date(), data: e }), e;
        } finally {
          r.promise.clear();
        }
      }
      let eX = (e) => `blockNumber.${e}`;
      async function eJ(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await eY(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: eX(e.uid),
            cacheTime: t,
          })
        );
      }
      async function e0(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let a;
        let i = void 0 !== n ? (0, f.eC)(n) : void 0;
        return (
          (a = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, es.ly)(a)
        );
      }
      async function e1(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let a = void 0 !== n ? (0, f.eC)(n) : void 0,
          i = await e.request(
            { method: "eth_getCode", params: [t, a || r] },
            { dedupe: !!a }
          );
        if ("0x" !== i) return i;
      }
      var e5 = n(70185),
        e6 = n(306),
        e2 = n(89212);
      async function e3(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: a,
          event: i,
          events: o,
          args: s,
          strict: l,
        } = {}
      ) {
        let u = o ?? (i ? [i] : void 0),
          c = [];
        u &&
          ((c = [
            u.flatMap((e) =>
              (0, et.O)({ abi: [e], eventName: e.name, args: o ? void 0 : s })
            ),
          ]),
          i && (c = c[0]));
        let d = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: c, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: c,
                    fromBlock: "bigint" == typeof r ? (0, f.eC)(r) : r,
                    toBlock: "bigint" == typeof a ? (0, f.eC)(a) : a,
                  },
                ],
              })
        ).map((e) => (0, e2.U)(e));
        return u ? (0, e6.h)({ abi: u, args: s, logs: d, strict: l ?? !1 }) : d;
      }
      async function e8(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            blockHash: i,
            eventName: o,
            fromBlock: s,
            toBlock: l,
            strict: u,
          } = t,
          c = o ? (0, e5.mE)({ abi: n, name: o }) : void 0,
          d = c ? void 0 : n.filter((e) => "event" === e.type);
        return S(
          e,
          e3,
          "getLogs"
        )({
          address: r,
          args: a,
          blockHash: i,
          event: c,
          events: d,
          fromBlock: s,
          toBlock: l,
          strict: u,
        });
      }
      class e9 extends b.G {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function e4(e, t) {
        let { address: n, factory: r, factoryData: a } = t;
        try {
          let [t, i, o, s, l, u, c] = await S(
            e,
            A,
            "readContract"
          )({
            abi: e7,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: a,
          });
          return {
            domain: {
              name: i,
              version: o,
              chainId: Number(s),
              verifyingContract: l,
              salt: u,
            },
            extensions: c,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new e9({ address: n });
          throw e;
        }
      }
      let e7 = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function te(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: a,
        }
      ) {
        var i;
        let o = n ? (0, f.eC)(n) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: "eth_feeHistory", params: [(0, f.eC)(t), o || r, a] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function tt(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let a = r.map((e) => (0, e2.U)(e));
        return "abi" in t && t.abi
          ? (0, e6.h)({ abi: t.abi, logs: a, strict: n })
          : a;
      }
      async function tn(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, e2.U)(e));
        return t.abi ? (0, e6.h)({ abi: t.abi, logs: r, strict: n }) : r;
      }
      async function tr(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: a }
      ) {
        var i;
        let o = void 0 !== n ? (0, f.eC)(n) : void 0;
        return {
          ...(i = await e.request({
            method: "eth_getProof",
            params: [t, a, o || (r ?? "latest")],
          })),
          balance: i.balance ? BigInt(i.balance) : void 0,
          nonce: i.nonce ? (0, es.ly)(i.nonce) : void 0,
          storageProof: i.storageProof
            ? i.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function ta(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: a }
      ) {
        let i = void 0 !== n ? (0, f.eC)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, a, i || r],
        });
      }
      var ti = n(15470);
      async function to(
        e,
        { blockHash: t, blockNumber: n, blockTag: r, hash: a, index: i }
      ) {
        let o = r || "latest",
          s = void 0 !== n ? (0, f.eC)(n) : void 0,
          l = null;
        if (
          (a
            ? (l = await e.request(
                { method: "eth_getTransactionByHash", params: [a] },
                { dedupe: !0 }
              ))
            : t
            ? (l = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, f.eC)(i)],
                },
                { dedupe: !0 }
              ))
            : (s || o) &&
              (l = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [s || o, (0, f.eC)(i)],
                },
                { dedupe: !!s }
              )),
          !l)
        )
          throw new eb.Bh({
            blockHash: t,
            blockNumber: n,
            blockTag: o,
            hash: a,
            index: i,
          });
        return (e.chain?.formatters?.transaction?.format || ti.Tr)(l);
      }
      async function ts(e, { hash: t, transactionReceipt: n }) {
        let [r, a] = await Promise.all([
            S(e, eJ, "getBlockNumber")({}),
            t ? S(e, to, "getTransaction")({ hash: t }) : void 0,
          ]),
          i = n?.blockNumber || a?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var tl = n(97178);
      async function tu(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new eb.Yb({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || tl.fA)(n);
      }
      async function tc(e, t) {
        let {
            allowFailure: n = !0,
            batchSize: r,
            blockNumber: a,
            blockTag: i,
            multicallAddress: o,
            stateOverride: s,
          } = t,
          h = t.contracts,
          f =
            r ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          p = o;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          p = (0, d.L)({
            blockNumber: a,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let y = [[]],
          g = 0,
          w = 0;
        for (let e = 0; e < h.length; e++) {
          let { abi: t, address: r, args: a, functionName: i } = h[e];
          try {
            let e = (0, c.R)({ abi: t, args: a, functionName: i });
            (w += (e.length - 2) / 2),
              f > 0 &&
                w > f &&
                y[g].length > 0 &&
                (g++, (w = (e.length - 2) / 2), (y[g] = [])),
              (y[g] = [...y[g], { allowFailure: !0, callData: e, target: r }]);
          } catch (o) {
            let e = P(o, {
              abi: t,
              address: r,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: i,
            });
            if (!n) throw e;
            y[g] = [...y[g], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let v = await Promise.allSettled(
            y.map((t) =>
              S(
                e,
                A,
                "readContract"
              )({
                abi: l.F8,
                address: p,
                args: [t],
                blockNumber: a,
                blockTag: i,
                functionName: "aggregate3",
                stateOverride: s,
              })
            )
          ),
          x = [];
        for (let e = 0; e < v.length; e++) {
          let t = v[e];
          if ("rejected" === t.status) {
            if (!n) throw t.reason;
            for (let n = 0; n < y[e].length; n++)
              x.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: a, success: i } = r[t],
              { callData: o } = y[e][t],
              { abi: s, address: l, functionName: c, args: d } = h[x.length];
            try {
              if ("0x" === o) throw new T.wb();
              if (!i) throw new m.VQ({ data: a });
              let e = (0, u.k)({ abi: s, args: d, data: a, functionName: c });
              x.push(n ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = P(t, {
                abi: s,
                address: l,
                args: d,
                docsPath: "/docs/contract/multicall",
                functionName: c,
              });
              if (!n) throw e;
              x.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (x.length !== h.length) throw new b.G("multicall results mismatch");
        return x;
      }
      async function td(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            dataSuffix: o,
            functionName: s,
            ...l
          } = t,
          d = l.account ? (0, a.T)(l.account) : e.account,
          h = (0, c.R)({ abi: n, args: i, functionName: s });
        try {
          let { data: a } = await S(
              e,
              O.R,
              "call"
            )({
              batch: !1,
              data: `${h}${o ? o.replace("0x", "") : ""}`,
              to: r,
              ...l,
              account: d,
            }),
            c = (0, u.k)({ abi: n, args: i, functionName: s, data: a || "0x" }),
            f = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: c,
            request: {
              abi: f,
              address: r,
              args: i,
              dataSuffix: o,
              functionName: s,
              ...l,
              account: d,
            },
          };
        } catch (e) {
          throw P(e, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/simulateContract",
            functionName: s,
            sender: d?.address,
          });
        }
      }
      async function th(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      function tf(e, t) {
        return (0, v.w)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, f.$G)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, f.ci)(e.raw),
              n = (0, f.$G)(`\x19Ethereum Signed Message:
${(0, ez.d)(t)}`);
            return (0, g.zo)([n, t]);
          })(e),
          t
        );
      }
      var tp = n(58162),
        tb = n(62508),
        tm = n(68419);
      let ty =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var tg = n(1008),
        tw = n(47052),
        tv = n(23646);
      async function tx(e, t) {
        let {
            address: n,
            factory: r,
            factoryData: a,
            hash: i,
            signature: o,
            universalSignatureVerifierAddress: s = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...u
          } = t,
          d = (0, eo.v)(o)
            ? o
            : "object" == typeof o && "r" in o && "s" in o
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: a }) {
                let i = (() => {
                    if (0 === a || 1 === a) return a;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return r % 2n === 0n ? 1 : 0;
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  o = `0x${new tv.secp256k1.Signature(
                    (0, es.y_)(e),
                    (0, es.y_)(t)
                  ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
                return "hex" === n ? o : (0, w.nr)(o);
              })(o)
            : (0, f.ci)(o),
          h = await (async () =>
            r || a
              ? (0, tg.p5)(d, -32) === ty
                ? d
                : (function (e) {
                    let {
                        address: t,
                        data: n,
                        signature: r,
                        to: a = "hex",
                      } = e,
                      i = (0, g.SM)([
                        (0, tw.E)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [t, n, r]
                        ),
                        ty,
                      ]);
                    return "hex" === a ? i : (0, w.nr)(i);
                  })({ address: r, data: a, signature: d })
              : d)();
        try {
          let t = s
              ? {
                  to: s,
                  data: (0, c.R)({
                    abi: l.$o,
                    functionName: "isValidSig",
                    args: [n, i, h],
                  }),
                  ...u,
                }
              : {
                  data: (0, tb.w)({
                    abi: l.$o,
                    args: [n, i, h],
                    bytecode: tp.ST,
                  }),
                  ...u,
                },
            { data: r } = await S(e, O.R, "call")(t);
          return (0, es.XA)(r ?? "0x0");
        } catch (e) {
          try {
            if ((0, tm.E)((0, ei.K)(n), await ec({ hash: i, signature: o })))
              return !0;
          } catch {}
          if (e instanceof m.cg) return !1;
          throw e;
        }
      }
      async function tE(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: a,
          signature: i,
          ...o
        }
      ) {
        return tx(e, {
          address: t,
          factory: r,
          factoryData: a,
          hash: tf(n),
          signature: i,
          ...o,
        });
      }
      var tC = n(25131);
      function tk({ data: e, primaryType: t, types: n }) {
        let r = (function e({ data: t, primaryType: n, types: r }) {
          let a = [{ type: "bytes32" }],
            i = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, f.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let a = t.match(/^\w*/u),
                          i = a?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let a of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${a}(${t[a]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, v.w)(n);
              })({ primaryType: n, types: r }),
            ];
          for (let o of r[n]) {
            let [n, s] = (function t({ types: n, name: r, type: a, value: i }) {
              if (void 0 !== n[a])
                return [
                  { type: "bytes32" },
                  (0, v.w)(e({ data: i, primaryType: a, types: n })),
                ];
              if ("bytes" === a) {
                let e = i.length % 2 ? "0" : "";
                return (
                  (i = `0x${e + i.slice(2)}`),
                  [{ type: "bytes32" }, (0, v.w)(i)]
                );
              }
              if ("string" === a)
                return [{ type: "bytes32" }, (0, v.w)((0, f.NC)(i))];
              if (a.lastIndexOf("]") === a.length - 1) {
                let e = a.slice(0, a.lastIndexOf("[")),
                  o = i.map((a) => t({ name: r, type: e, types: n, value: a }));
                return [
                  { type: "bytes32" },
                  (0, v.w)(
                    (0, tw.E)(
                      o.map(([e]) => e),
                      o.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: a }, i];
            })({ types: r, name: o.name, type: o.type, value: t[o.name] });
            a.push(n), i.push(s);
          }
          return (0, tw.E)(a, i);
        })({ data: e, primaryType: t, types: n });
        return (0, v.w)(r);
      }
      async function tS(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: a,
          signature: i,
          message: o,
          primaryType: s,
          types: l,
          domain: u,
          ...c
        } = t;
        return tx(e, {
          address: n,
          factory: r,
          factoryData: a,
          hash: (function (e) {
            let { domain: t = {}, message: n, primaryType: r } = e,
              a = { EIP712Domain: (0, tC.cj)({ domain: t }), ...e.types };
            (0, tC.iC)({ domain: t, message: n, primaryType: r, types: a });
            let i = ["0x1901"];
            return (
              t &&
                i.push(
                  (function ({ domain: e, types: t }) {
                    return tk({
                      data: e,
                      primaryType: "EIP712Domain",
                      types: t,
                    });
                  })({ domain: t, types: a })
                ),
              "EIP712Domain" !== r &&
                i.push(tk({ data: n, primaryType: r, types: a })),
              (0, v.w)((0, g.zo)(i))
            );
          })({ message: o, primaryType: s, types: l, domain: u }),
          signature: i,
          ...c,
        });
      }
      let tT = new Map(),
        tR = new Map(),
        tP = 0;
      function tO(e, t, n) {
        let r = ++tP,
          a = () => tT.get(e) || [],
          i = () => {
            let t = a();
            tT.set(
              e,
              t.filter((e) => e.id !== r)
            );
          },
          o = () => {
            let t = a();
            if (!t.some((e) => e.id === r)) return;
            let n = tR.get(e);
            1 === t.length && n && n(), i();
          },
          s = a();
        if ((tT.set(e, [...s, { id: r, fns: t }]), s && s.length > 0)) return o;
        let l = {};
        for (let e in t)
          l[e] = (...t) => {
            let n = a();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let u = n(l);
        return "function" == typeof u && tR.set(e, u), o;
      }
      var tA = n(61112);
      async function tI(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function t_(
        e,
        { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}
      ) {
        return new Promise((a, i) => {
          let o = async ({ count: s = 0 } = {}) => {
            let l = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: s, error: e }) : t;
              n && (await tI(n)), o({ count: s + 1 });
            };
            try {
              let t = await e();
              a(t);
            } catch (e) {
              if (s < n && (await r({ count: s, error: e })))
                return l({ error: e });
              i(e);
            }
          };
          o();
        });
      }
      var tB = n(67291);
      function tj(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
        let a = !0,
          i = () => (a = !1);
        return (
          (async () => {
            let o;
            t && (o = await e({ unpoll: i }));
            let s = (await n?.(o)) ?? r;
            await tI(s);
            let l = async () => {
              a && (await e({ unpoll: i }), await tI(r), l());
            };
            l();
          })(),
          i
        );
      }
      function tN(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: r,
          onError: a,
          poll: i,
          pollingInterval: o = e.pollingInterval,
        }
      ) {
        let s;
        return (
          void 0 !== i
            ? i
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? tO(
              (0, tB.P)(["watchBlockNumber", e.uid, t, n, o]),
              { onBlockNumber: r, onError: a },
              (r) =>
                tj(
                  async () => {
                    try {
                      let t = await S(
                        e,
                        eJ,
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
                  { emitOnBegin: t, interval: o }
                )
            )
          : tO(
              (0, tB.P)(["watchBlockNumber", e.uid, t, n]),
              { onBlockNumber: r, onError: a },
              (t) => {
                let n = !0,
                  r = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let a = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: i } = await a.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let r = (0, es.y_)(e.result?.number);
                            t.onBlockNumber(r, s), (s = r);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (r = i), n || r();
                    } catch (e) {
                      a?.(e);
                    }
                  })(),
                  () => r()
                );
              }
            );
      }
      async function tM(
        e,
        {
          confirmations: t = 1,
          hash: n,
          onReplaced: r,
          pollingInterval: a = e.pollingInterval,
          retryCount: i = 6,
          retryDelay: o = ({ count: e }) => 200 * ~~(1 << e),
          timeout: s = 18e4,
        }
      ) {
        let l, u, c;
        let d = (0, tB.P)(["waitForTransactionReceipt", e.uid, n]),
          h = !1,
          { promise: f, resolve: p, reject: b } = (0, tA.n)(),
          m = s ? setTimeout(() => b(new eb.mc({ hash: n })), s) : void 0,
          y = tO(d, { onReplaced: r, resolve: p, reject: b }, (r) => {
            let s = S(
              e,
              tN,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: a,
              async onBlockNumber(a) {
                let d = (e) => {
                    clearTimeout(m), s(), e(), y();
                  },
                  f = a;
                if (!h)
                  try {
                    if (c) {
                      if (
                        t > 1 &&
                        (!c.blockNumber || f - c.blockNumber + 1n < t)
                      )
                        return;
                      d(() => r.resolve(c));
                      return;
                    }
                    if (
                      (l ||
                        ((h = !0),
                        await t_(
                          async () => {
                            (l = await S(e, to, "getTransaction")({ hash: n }))
                              .blockNumber && (f = l.blockNumber);
                          },
                          { delay: o, retryCount: i }
                        ),
                        (h = !1)),
                      (c = await S(
                        e,
                        tu,
                        "getTransactionReceipt"
                      )({ hash: n })),
                      t > 1 && (!c.blockNumber || f - c.blockNumber + 1n < t))
                    )
                      return;
                    d(() => r.resolve(c));
                  } catch (n) {
                    if (n instanceof eb.Bh || n instanceof eb.Yb) {
                      if (!l) {
                        h = !1;
                        return;
                      }
                      try {
                        (u = l), (h = !0);
                        let n = await t_(
                          () =>
                            S(
                              e,
                              eP,
                              "getBlock"
                            )({ blockNumber: f, includeTransactions: !0 }),
                          {
                            delay: o,
                            retryCount: i,
                            shouldRetry: ({ error: e }) => e instanceof eT,
                          }
                        );
                        h = !1;
                        let a = n.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === u.from && t === u.nonce
                        );
                        if (
                          !a ||
                          ((c = await S(
                            e,
                            tu,
                            "getTransactionReceipt"
                          )({ hash: a.hash })),
                          t > 1 &&
                            (!c.blockNumber || f - c.blockNumber + 1n < t))
                        )
                          return;
                        let s = "replaced";
                        a.to === u.to && a.value === u.value
                          ? (s = "repriced")
                          : a.from === a.to &&
                            0n === a.value &&
                            (s = "cancelled"),
                          d(() => {
                            r.onReplaced?.({
                              reason: s,
                              replacedTransaction: u,
                              transaction: a,
                              transactionReceipt: c,
                            }),
                              r.resolve(c);
                          });
                      } catch (e) {
                        d(() => r.reject(e));
                      }
                    } else d(() => r.reject(n));
                  }
              },
            });
          });
        return f;
      }
      var tF = n(19095);
      let tL =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tD =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function tq(e, t) {
        let {
            address: n,
            domain: r,
            message: a,
            nonce: i,
            scheme: o,
            signature: s,
            time: l = new Date(),
            ...u
          } = t,
          c = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(tL)?.groups ?? {},
              {
                chainId: a,
                expirationTime: i,
                issuedAt: o,
                notBefore: s,
                requestId: l,
                ...u
              } = e.match(tD)?.groups ?? {},
              c = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...u,
              ...(a ? { chainId: Number(a) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(o ? { issuedAt: new Date(o) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(l ? { requestId: l } : {}),
              ...(c ? { resources: c } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(a);
        if (
          !c.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: a,
              scheme: i,
              time: o = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (a && r.nonce !== a) ||
              (i && r.scheme !== i) ||
              (r.expirationTime && o >= r.expirationTime) ||
              (r.notBefore && o < r.notBefore)
            )
              return !1;
            try {
              if (!r.address || (t && !(0, tm.E)(r.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: c,
            nonce: i,
            scheme: o,
            time: l,
          })
        )
          return !1;
        let d = tf(a);
        return tx(e, { address: c.address, hash: d, signature: s, ...u });
      }
      async function tz(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      function t$(e) {
        return {
          call: (t) => (0, O.R)(e, t),
          createBlockFilter: () => ee(e),
          createContractEventFilter: (t) => en(e, t),
          createEventFilter: (t) => er(e, t),
          createPendingTransactionFilter: () => ea(e),
          estimateContractGas: (t) => eV(e, t),
          estimateGas: (t) => eU(e, t),
          getBalance: (t) => eG(e, t),
          getBlobBaseFee: () => eZ(e),
          getBlock: (t) => eP(e, t),
          getBlockNumber: (t) => eJ(e, t),
          getBlockTransactionCount: (t) => e0(e, t),
          getBytecode: (t) => e1(e, t),
          getChainId: () => e$(e),
          getCode: (t) => e1(e, t),
          getContractEvents: (t) => e8(e, t),
          getEip712Domain: (t) => e4(e, t),
          getEnsAddress: (t) => I(e, t),
          getEnsAvatar: (t) => Q(e, t),
          getEnsName: (t) => Y(e, t),
          getEnsResolver: (t) => X(e, t),
          getEnsText: (t) => K(e, t),
          getFeeHistory: (t) => te(e, t),
          estimateFeesPerGas: (t) => e_(e, t),
          getFilterChanges: (t) => tt(e, t),
          getFilterLogs: (t) => tn(e, t),
          getGasPrice: () => eO(e),
          getLogs: (t) => e3(e, t),
          getProof: (t) => tr(e, t),
          estimateMaxPriorityFeePerGas: (t) => eA(e, t),
          getStorageAt: (t) => ta(e, t),
          getTransaction: (t) => to(e, t),
          getTransactionConfirmations: (t) => ts(e, t),
          getTransactionCount: (t) => ej(e, t),
          getTransactionReceipt: (t) => tu(e, t),
          multicall: (t) => tc(e, t),
          prepareTransactionRequest: (t) => eH(e, t),
          readContract: (t) => A(e, t),
          sendRawTransaction: (t) => tz(e, t),
          simulateContract: (t) => td(e, t),
          verifyMessage: (t) => tE(e, t),
          verifySiweMessage: (t) => tq(e, t),
          verifyTypedData: (t) => tS(e, t),
          uninstallFilter: (t) => th(e, t),
          waitForTransactionReceipt: (t) => tM(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: a,
                onError: i,
                includeTransactions: o,
                poll: s,
                pollingInterval: l = e.pollingInterval,
              }
            ) {
              let u, c, d, h;
              let f =
                  void 0 !== s
                    ? s
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                p = o ?? !1;
              return f
                ? tO(
                    (0, tB.P)(["watchBlocks", e.uid, t, n, r, p, l]),
                    { onBlock: a, onError: i },
                    (a) =>
                      tj(
                        async () => {
                          try {
                            let r = await S(
                              e,
                              eP,
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
                                  let n = await S(
                                    e,
                                    eP,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: p });
                                  a.onBlock(n, u), (u = n);
                                }
                            }
                            (!u?.number ||
                              ("pending" === t && !r?.number) ||
                              (r.number && r.number > u.number)) &&
                              (a.onBlock(r, u), (u = r));
                          } catch (e) {
                            a.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: l }
                      )
                  )
                : ((c = !0),
                  (d = !0),
                  (h = () => (c = !1)),
                  (async () => {
                    try {
                      r &&
                        S(
                          e,
                          eP,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: p }).then((e) => {
                          c && d && (a(e, void 0), (d = !1));
                        });
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: o } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!c) return;
                            let n = await S(
                              e,
                              eP,
                              "getBlock"
                            )({
                              blockNumber: t.blockNumber,
                              includeTransactions: p,
                            }).catch(() => {});
                            c && (a(n, u), (d = !1), (u = n));
                          },
                          onError(e) {
                            i?.(e);
                          },
                        });
                      (h = o), c || h();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchBlockNumber: (t) => tN(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: a,
                batch: i = !0,
                eventName: o,
                fromBlock: s,
                onError: l,
                onLogs: u,
                poll: c,
                pollingInterval: d = e.pollingInterval,
                strict: h,
              } = t;
              return (
                void 0 !== c
                  ? c
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    let t = h ?? !1;
                    return tO(
                      (0, tB.P)([
                        "watchContractEvent",
                        r,
                        a,
                        i,
                        e.uid,
                        o,
                        d,
                        t,
                        s,
                      ]),
                      { onLogs: u, onError: l },
                      (l) => {
                        let u, c;
                        void 0 !== s && (u = s - 1n);
                        let h = !1,
                          f = tj(
                            async () => {
                              if (!h) {
                                try {
                                  c = await S(
                                    e,
                                    en,
                                    "createContractEventFilter"
                                  )({
                                    abi: n,
                                    address: r,
                                    args: a,
                                    eventName: o,
                                    strict: t,
                                    fromBlock: s,
                                  });
                                } catch {}
                                h = !0;
                                return;
                              }
                              try {
                                let s;
                                if (c)
                                  s = await S(
                                    e,
                                    tt,
                                    "getFilterChanges"
                                  )({ filter: c });
                                else {
                                  let i = await S(e, eJ, "getBlockNumber")({});
                                  (s =
                                    u && u < i
                                      ? await S(
                                          e,
                                          e8,
                                          "getContractEvents"
                                        )({
                                          abi: n,
                                          address: r,
                                          args: a,
                                          eventName: o,
                                          fromBlock: u + 1n,
                                          toBlock: i,
                                          strict: t,
                                        })
                                      : []),
                                    (u = i);
                                }
                                if (0 === s.length) return;
                                if (i) l.onLogs(s);
                                else for (let e of s) l.onLogs([e]);
                              } catch (e) {
                                c && e instanceof R.yR && (h = !1),
                                  l.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: d }
                          );
                        return async () => {
                          c &&
                            (await S(e, th, "uninstallFilter")({ filter: c })),
                            f();
                        };
                      }
                    );
                  })()
                : (() => {
                    let t = (0, tB.P)([
                        "watchContractEvent",
                        r,
                        a,
                        i,
                        e.uid,
                        o,
                        d,
                        h ?? !1,
                      ]),
                      s = !0,
                      c = () => (s = !1);
                    return tO(
                      t,
                      { onLogs: u, onError: l },
                      (t) => (
                        (async () => {
                          try {
                            let i = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              l = o
                                ? (0, et.O)({ abi: n, eventName: o, args: a })
                                : [],
                              { unsubscribe: u } = await i.subscribe({
                                params: ["logs", { address: r, topics: l }],
                                onData(e) {
                                  if (!s) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: a } = (0, tF.F)({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: h,
                                      }),
                                      i = (0, e2.U)(r, {
                                        args: a,
                                        eventName: e,
                                      });
                                    t.onLogs([i]);
                                  } catch (i) {
                                    let e, n;
                                    if (
                                      i instanceof T.SM ||
                                      i instanceof T.Gy
                                    ) {
                                      if (h) return;
                                      (e = i.abiItem.name),
                                        (n = i.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let a = (0, e2.U)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([a]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (c = u), s || c();
                          } catch (e) {
                            l?.(e);
                          }
                        })(),
                        () => c()
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
                event: a,
                events: i,
                fromBlock: o,
                onError: s,
                onLogs: l,
                poll: u,
                pollingInterval: c = e.pollingInterval,
                strict: d,
              }
            ) {
              let h, f;
              let p =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof o ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                b = d ?? !1;
              return p
                ? tO(
                    (0, tB.P)(["watchEvent", t, n, r, e.uid, a, c, o]),
                    { onLogs: l, onError: s },
                    (s) => {
                      let l, u;
                      void 0 !== o && (l = o - 1n);
                      let d = !1,
                        h = tj(
                          async () => {
                            if (!d) {
                              try {
                                u = await S(
                                  e,
                                  er,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: a,
                                  events: i,
                                  strict: b,
                                  fromBlock: o,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let o;
                              if (u)
                                o = await S(
                                  e,
                                  tt,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let r = await S(e, eJ, "getBlockNumber")({});
                                (o =
                                  l && l !== r
                                    ? await S(
                                        e,
                                        e3,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: a,
                                        events: i,
                                        fromBlock: l + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (l = r);
                              }
                              if (0 === o.length) return;
                              if (r) s.onLogs(o);
                              else for (let e of o) s.onLogs([e]);
                            } catch (e) {
                              u && e instanceof R.yR && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: c }
                        );
                      return async () => {
                        u && (await S(e, th, "uninstallFilter")({ filter: u })),
                          h();
                      };
                    }
                  )
                : ((h = !0),
                  (f = () => (h = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        o = i ?? (a ? [a] : void 0),
                        u = [];
                      o &&
                        ((u = [
                          o.flatMap((e) =>
                            (0, et.O)({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        a && (u = u[0]));
                      let { unsubscribe: c } = await r.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!h) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = (0, tF.F)({
                                abi: o ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: b,
                              }),
                              r = (0, e2.U)(t, { args: n, eventName: e });
                            l([r]);
                          } catch (a) {
                            let e, n;
                            if (a instanceof T.SM || a instanceof T.Gy) {
                              if (d) return;
                              (e = a.abiItem.name),
                                (n = a.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, e2.U)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            l([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (f = c), h || f();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: a,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let o, s;
              return (void 0 !== a ? a : "webSocket" !== e.transport.type)
                ? tO(
                    (0, tB.P)(["watchPendingTransactions", e.uid, t, i]),
                    { onTransactions: r, onError: n },
                    (n) => {
                      let r;
                      let a = tj(
                        async () => {
                          try {
                            if (!r)
                              try {
                                r = await S(
                                  e,
                                  ea,
                                  "createPendingTransactionFilter"
                                )({});
                                return;
                              } catch (e) {
                                throw (a(), e);
                              }
                            let i = await S(
                              e,
                              tt,
                              "getFilterChanges"
                            )({ filter: r });
                            if (0 === i.length) return;
                            if (t) n.onTransactions(i);
                            else for (let e of i) n.onTransactions([e]);
                          } catch (e) {
                            n.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: i }
                      );
                      return async () => {
                        r && (await S(e, th, "uninstallFilter")({ filter: r })),
                          a();
                      };
                    }
                  )
                : ((o = !0),
                  (s = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!o) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), o || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
      var tW = n(24250);
      class tH extends b.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var tG = n(95841);
      let tU = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var tV = n(79284);
      let tZ = new tV.k(8192);
      function tK(
        {
          key: e,
          name: t,
          request: n,
          retryCount: r = 3,
          retryDelay: a = 150,
          timeout: i,
          type: s,
        },
        l
      ) {
        return {
          config: {
            key: e,
            name: t,
            request: n,
            retryCount: r,
            retryDelay: a,
            timeout: i,
            type: s,
          },
          request: (function (e, t = {}) {
            return async (n, r = {}) => {
              let {
                  dedupe: a = !1,
                  retryDelay: i = 150,
                  retryCount: o = 3,
                  uid: s,
                } = { ...t, ...r },
                l = a ? (0, v.w)((0, f.$G)(`${s}.${(0, tB.P)(n)}`)) : void 0;
              return (function (e, { enabled: t = !0, id: n }) {
                if (!t || !n) return e();
                if (tZ.get(n)) return tZ.get(n);
                let r = e().finally(() => tZ.delete(n));
                return tZ.set(n, r), r;
              })(
                () =>
                  t_(
                    async () => {
                      try {
                        return await e(n);
                      } catch (e) {
                        switch (e.code) {
                          case R.s7.code:
                            throw new R.s7(e);
                          case R.B.code:
                            throw new R.B(e);
                          case R.LX.code:
                            throw new R.LX(e, { method: n.method });
                          case R.nY.code:
                            throw new R.nY(e);
                          case R.XS.code:
                            throw new R.XS(e);
                          case R.yR.code:
                            throw new R.yR(e);
                          case R.Og.code:
                            throw new R.Og(e);
                          case R.pT.code:
                            throw new R.pT(e);
                          case R.KB.code:
                            throw new R.KB(e);
                          case R.gS.code:
                            throw new R.gS(e, { method: n.method });
                          case R.Pv.code:
                            throw new R.Pv(e);
                          case R.GD.code:
                            throw new R.GD(e);
                          case R.ab.code:
                            throw new R.ab(e);
                          case R.PE.code:
                            throw new R.PE(e);
                          case R.Ts.code:
                            throw new R.Ts(e);
                          case R.u5.code:
                            throw new R.u5(e);
                          case R.I0.code:
                            throw new R.I0(e);
                          case R.x3.code:
                            throw new R.x3(e);
                          case 5e3:
                            throw new R.ab(e);
                          default:
                            if (e instanceof b.G) throw e;
                            throw new R.ir(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof tW.Gg) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * i;
                      },
                      retryCount: o,
                      shouldRetry: ({ error: e }) =>
                        "code" in e && "number" == typeof e.code
                          ? -1 === e.code ||
                            e.code === R.Pv.code ||
                            e.code === R.XS.code
                          : !(e instanceof tW.Gg) ||
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
                  ),
                { enabled: a, id: l }
              );
            };
          })(n, { retryCount: r, retryDelay: a, uid: o() }),
          value: l,
        };
      }
      async function tQ(e, { chain: t }) {
        let {
          id: n,
          name: r,
          nativeCurrency: a,
          rpcUrls: i,
          blockExplorers: o,
        } = t;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, f.eC)(n),
                chainName: r,
                nativeCurrency: a,
                rpcUrls: i.default.http,
                blockExplorerUrls: o
                  ? Object.values(o).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      class tY extends b.G {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class tX extends b.G {
        constructor({ docsPath: e, metaMessages: t, type: n }) {
          super(`Account type "${n}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
      var tJ = n(44677);
      function t0({ chain: e, currentChainId: t }) {
        if (!e) throw new tJ.Bk();
        if (t !== e.id) throw new tJ.Yl({ chain: e, currentChainId: t });
      }
      let t1 = new tV.k(128);
      async function t5(e, t) {
        let {
          account: n = e.account,
          chain: r = e.chain,
          accessList: i,
          authorizationList: o,
          blobs: s,
          data: l,
          gas: u,
          gasPrice: c,
          maxFeePerBlobGas: d,
          maxFeePerGas: h,
          maxPriorityFeePerGas: f,
          nonce: p,
          value: m,
          ...y
        } = t;
        if (void 0 === n)
          throw new tY({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let g = n ? (0, a.T)(n) : null;
        try {
          (0, eE.F)(t);
          let n = await (async () =>
            t.to
              ? t.to
              : o && o.length > 0
              ? await eh({ authorization: o[0] }).catch(() => {
                  throw new b.G(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (g?.type === "json-rpc" || null === g) {
            let t;
            null !== r &&
              ((t = await S(e, e$, "getChainId")({})),
              t0({ currentChainId: t, chain: r }));
            let a = e.chain?.formatters?.transactionRequest?.format,
              b = (a || ev.tG)({
                ...(0, ew.K)(y, { format: a }),
                accessList: i,
                authorizationList: o,
                blobs: s,
                chainId: t,
                data: l,
                from: g?.address,
                gas: u,
                gasPrice: c,
                maxFeePerBlobGas: d,
                maxFeePerGas: h,
                maxPriorityFeePerGas: f,
                nonce: p,
                to: n,
                value: m,
              }),
              w = t1.get(e.uid);
            try {
              return await e.request(
                {
                  method: w ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [b],
                },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === w) throw t;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [b] },
                    { retryCount: 0 }
                  )
                  .then((t) => (t1.set(e.uid, !0), t))
                  .catch((n) => {
                    if (
                      "MethodNotFoundRpcError" === n.name ||
                      "MethodNotSupportedRpcError" === n.name
                    )
                      throw (t1.set(e.uid, !1), t);
                    throw n;
                  });
              throw t;
            }
          }
          if (g?.type === "local") {
            let t = await S(
                e,
                eH,
                "prepareTransactionRequest"
              )({
                account: g,
                accessList: i,
                authorizationList: o,
                blobs: s,
                chain: r,
                data: l,
                gas: u,
                gasPrice: c,
                maxFeePerBlobGas: d,
                maxFeePerGas: h,
                maxPriorityFeePerGas: f,
                nonce: p,
                nonceManager: g.nonceManager,
                parameters: [...eW, "sidecars"],
                value: m,
                ...y,
                to: n,
              }),
              a = r?.serializers?.transaction,
              b = await g.signTransaction(t, { serializer: a });
            return await S(
              e,
              tz,
              "sendRawTransaction"
            )({ serializedTransaction: b });
          }
          if (g?.type === "smart")
            throw new tX({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new tX({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: g?.type,
          });
        } catch (e) {
          if (e instanceof tX) throw e;
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, eg.k)(e, n);
              return t instanceof ey.cj ? e : t;
            })();
            return new eb.mk(r, { docsPath: t, ...n });
          })(e, { ...t, account: g, chain: t.chain || void 0 });
        }
      }
      async function t6(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (e) => (0, ei.x)(e)
            );
      }
      async function t2(e) {
        return await e.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      async function t3(e) {
        return (
          await e.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((e) => (0, ei.K)(e));
      }
      async function t8(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      async function t9(e, { account: t = e.account, message: n }) {
        if (!t) throw new tY({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, a.T)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let i =
          "string" == typeof n
            ? (0, f.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, f.NC)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [i, r.address] },
          { retryCount: 0 }
        );
      }
      async function t4(e, t) {
        let { account: n = e.account, chain: r = e.chain, ...i } = t;
        if (!n)
          throw new tY({ docsPath: "/docs/actions/wallet/signTransaction" });
        let o = (0, a.T)(n);
        (0, eE.F)({ account: o, ...t });
        let s = await S(e, e$, "getChainId")({});
        null !== r && t0({ currentChainId: s, chain: r });
        let l = r?.formatters || e.chain?.formatters,
          u = l?.transactionRequest?.format || ev.tG;
        return o.signTransaction
          ? o.signTransaction(
              { ...i, chainId: s },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...u(i), chainId: (0, f.eC)(s), from: o.address }],
              },
              { retryCount: 0 }
            );
      }
      async function t7(e, t) {
        let {
          account: n = e.account,
          domain: r,
          message: i,
          primaryType: o,
        } = t;
        if (!n)
          throw new tY({ docsPath: "/docs/actions/wallet/signTypedData" });
        let s = (0, a.T)(n),
          l = { EIP712Domain: (0, tC.cj)({ domain: r }), ...t.types };
        if (
          ((0, tC.iC)({ domain: r, message: i, primaryType: o, types: l }),
          s.signTypedData)
        )
          return s.signTypedData({
            domain: r,
            message: i,
            primaryType: o,
            types: l,
          });
        let u = (0, tC.H6)({ domain: r, message: i, primaryType: o, types: l });
        return e.request(
          { method: "eth_signTypedData_v4", params: [s.address, u] },
          { retryCount: 0 }
        );
      }
      async function ne(e, { id: t }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, f.eC)(t) }],
          },
          { retryCount: 0 }
        );
      }
      async function nt(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
      async function nn(e, t) {
        let {
          abi: n,
          account: r = e.account,
          address: i,
          args: o,
          dataSuffix: s,
          functionName: l,
          ...u
        } = t;
        if (void 0 === r)
          throw new tY({ docsPath: "/docs/contract/writeContract" });
        let d = r ? (0, a.T)(r) : null,
          h = (0, c.R)({ abi: n, args: o, functionName: l });
        try {
          return await S(
            e,
            t5,
            "sendTransaction"
          )({
            data: `${h}${s ? s.replace("0x", "") : ""}`,
            to: i,
            account: d,
            ...u,
          });
        } catch (e) {
          throw P(e, {
            abi: n,
            address: i,
            args: o,
            docsPath: "/docs/contract/writeContract",
            functionName: l,
            sender: d?.address,
          });
        }
      }
      function nr(e) {
        return {
          addChain: (t) => tQ(e, t),
          deployContract: (t) =>
            (function (e, t) {
              let { abi: n, args: r, bytecode: a, ...i } = t,
                o = (0, tb.w)({ abi: n, args: r, bytecode: a });
              return t5(e, { ...i, data: o });
            })(e, t),
          getAddresses: () => t6(e),
          getChainId: () => e$(e),
          getPermissions: () => t2(e),
          prepareTransactionRequest: (t) => eH(e, t),
          requestAddresses: () => t3(e),
          requestPermissions: (t) => t8(e, t),
          sendRawTransaction: (t) => tz(e, t),
          sendTransaction: (t) => t5(e, t),
          signMessage: (t) => t9(e, t),
          signTransaction: (t) => t4(e, t),
          signTypedData: (t) => t7(e, t),
          switchChain: (t) => ne(e, t),
          watchAsset: (t) => nt(e, t),
          writeContract: (t) => nn(e, t),
        };
      }
      var na = n(29181),
        ni = n(25890),
        no = n(33210),
        ns = n(91552),
        nl = n(85325),
        nu = n(7542),
        nc = n(10898);
      let nd = {
        contract: {
          fromViem: function (e) {
            return (0, no.u)({
              address: e.viemContract.address,
              abi: e.viemContract.abi,
              chain: e.chain,
              client: e.client,
            });
          },
          toViem: nh,
        },
        publicClient: {
          toViem: function (e) {
            var t, n, r;
            let { chain: a, client: i } = e,
              o = (0, na.GO)({ chain: a, client: i }),
              l = {
                id: a.id,
                name: a.name || "",
                rpcUrls: { default: { http: [o] } },
                nativeCurrency: {
                  name:
                    (null === (t = a.nativeCurrency) || void 0 === t
                      ? void 0
                      : t.name) || "Ether",
                  symbol:
                    (null === (n = a.nativeCurrency) || void 0 === n
                      ? void 0
                      : n.symbol) || "ETH",
                  decimals:
                    (null === (r = a.nativeCurrency) || void 0 === r
                      ? void 0
                      : r.decimals) || 18,
                },
              };
            return (function (e) {
              let { key: t = "public", name: n = "Public Client" } = e;
              return s({ ...e, key: t, name: n, type: "publicClient" }).extend(
                t$
              );
            })({
              transport: (function (e, t = {}) {
                let {
                  batch: n,
                  fetchOptions: r,
                  key: a = "http",
                  name: i = "HTTP JSON-RPC",
                  onFetchRequest: o,
                  onFetchResponse: s,
                  retryDelay: l,
                } = t;
                return ({ chain: u, retryCount: c, timeout: d }) => {
                  let { batchSize: h = 1e3, wait: f = 0 } =
                      "object" == typeof n ? n : {},
                    p = t.retryCount ?? c,
                    b = d ?? t.timeout ?? 1e4,
                    m = e || u?.rpcUrls.default.http[0];
                  if (!m) throw new tH();
                  let y = (function (e, t = {}) {
                    return {
                      async request(n) {
                        let {
                            body: r,
                            onRequest: a = t.onRequest,
                            onResponse: i = t.onResponse,
                            timeout: o = t.timeout ?? 1e4,
                          } = n,
                          s = {
                            ...(t.fetchOptions ?? {}),
                            ...(n.fetchOptions ?? {}),
                          },
                          { headers: l, method: u, signal: c } = s;
                        try {
                          let t;
                          let n = await (function (
                            e,
                            {
                              errorInstance: t = Error("timed out"),
                              timeout: n,
                              signal: r,
                            }
                          ) {
                            return new Promise((a, i) => {
                              (async () => {
                                let o;
                                try {
                                  let s = new AbortController();
                                  n > 0 &&
                                    (o = setTimeout(() => {
                                      r ? s.abort() : i(t);
                                    }, n)),
                                    a(await e({ signal: s?.signal || null }));
                                } catch (e) {
                                  e?.name === "AbortError" && i(t), i(e);
                                } finally {
                                  clearTimeout(o);
                                }
                              })();
                            });
                          })(
                            async ({ signal: t }) => {
                              let n = {
                                  ...s,
                                  body: Array.isArray(r)
                                    ? (0, tB.P)(
                                        r.map((e) => ({
                                          jsonrpc: "2.0",
                                          id: e.id ?? tU.take(),
                                          ...e,
                                        }))
                                      )
                                    : (0, tB.P)({
                                        jsonrpc: "2.0",
                                        id: r.id ?? tU.take(),
                                        ...r,
                                      }),
                                  headers: {
                                    "Content-Type": "application/json",
                                    ...l,
                                  },
                                  method: u || "POST",
                                  signal: c || (o > 0 ? t : null),
                                },
                                i = new Request(e, n),
                                d = (await a?.(i, n)) ?? { ...n, url: e };
                              return await fetch(d.url ?? e, d);
                            },
                            {
                              errorInstance: new tW.W5({ body: r, url: e }),
                              timeout: o,
                              signal: !0,
                            }
                          );
                          if (
                            (i && (await i(n)),
                            n.headers
                              .get("Content-Type")
                              ?.startsWith("application/json"))
                          )
                            t = await n.json();
                          else {
                            t = await n.text();
                            try {
                              t = JSON.parse(t || "{}");
                            } catch (e) {
                              if (n.ok) throw e;
                              t = { error: t };
                            }
                          }
                          if (!n.ok)
                            throw new tW.Gg({
                              body: r,
                              details: (0, tB.P)(t.error) || n.statusText,
                              headers: n.headers,
                              status: n.status,
                              url: e,
                            });
                          return t;
                        } catch (t) {
                          if (t instanceof tW.Gg || t instanceof tW.W5) throw t;
                          throw new tW.Gg({ body: r, cause: t, url: e });
                        }
                      },
                    };
                  })(m, {
                    fetchOptions: r,
                    onRequest: o,
                    onResponse: s,
                    timeout: b,
                  });
                  return tK(
                    {
                      key: a,
                      name: i,
                      async request({ method: e, params: t }) {
                        let r = { method: e, params: t },
                          { schedule: a } = (0, tG.S)({
                            id: m,
                            wait: f,
                            shouldSplitBatch: (e) => e.length > h,
                            fn: (e) => y.request({ body: e }),
                            sort: (e, t) => e.id - t.id,
                          }),
                          i = async (e) =>
                            n ? a(e) : [await y.request({ body: e })],
                          [{ error: o, result: s }] = await i(r);
                        if (o) throw new tW.bs({ body: r, error: o, url: m });
                        return s;
                      },
                      retryCount: p,
                      retryDelay: l,
                      timeout: b,
                      type: "http",
                    },
                    { fetchOptions: r, url: m }
                  );
                };
              })(o, {
                fetchOptions: i.secretKey
                  ? { headers: { "x-secret-key": i.secretKey } }
                  : void 0,
              }),
              chain: l,
            });
          },
        },
        walletClient: {
          toViem: function (e) {
            var t, n, r;
            let { account: a, chain: i, client: o } = e;
            if (!a) throw Error("Wallet not connected.");
            let l = (0, na.GO)({ chain: i, client: o }),
              u = {
                id: i.id,
                name: i.name || "",
                rpcUrls: { default: { http: [l] } },
                nativeCurrency: {
                  name:
                    (null === (t = i.nativeCurrency) || void 0 === t
                      ? void 0
                      : t.name) || "Ether",
                  symbol:
                    (null === (n = i.nativeCurrency) || void 0 === n
                      ? void 0
                      : n.symbol) || "ETH",
                  decimals:
                    (null === (r = i.nativeCurrency) || void 0 === r
                      ? void 0
                      : r.decimals) || 18,
                },
              },
              c = (0, ns.getRpcClient)({ client: o, chain: i });
            return (function (e) {
              let {
                key: t = "wallet",
                name: n = "Wallet Client",
                transport: r,
              } = e;
              return s({
                ...e,
                key: t,
                name: n,
                transport: r,
                type: "walletClient",
              }).extend(nr);
            })({
              transport: (function (e, t = {}) {
                let {
                  key: n = "custom",
                  name: r = "Custom Provider",
                  retryDelay: a,
                } = t;
                return ({ retryCount: i }) =>
                  tK({
                    key: n,
                    name: r,
                    request: e.request.bind(e),
                    retryCount: t.retryCount ?? i,
                    retryDelay: a,
                    type: "custom",
                  });
              })({
                request: async (e) => {
                  if ("eth_sendTransaction" === e.method)
                    return (
                      await (0, nu.sendTransaction)({
                        transaction: (0, nc.prepareTransaction)({
                          ...e.params[0],
                          chain: i,
                          client: o,
                        }),
                        account: a,
                      })
                    ).transactionHash;
                  if ("eth_estimateGas" === e.method)
                    return (0, nl.Q)({
                      transaction: (0, nc.prepareTransaction)({
                        ...e.params[0],
                        chain: i,
                        client: o,
                      }),
                      account: a,
                    });
                  if ("personal_sign" === e.method)
                    return a.signMessage({ message: { raw: e.params[0] } });
                  if ("eth_signTypedData_v4" === e.method) {
                    let t = JSON.parse(e.params[1]);
                    return a.signTypedData(t);
                  }
                  return "eth_accounts" === e.method ? [a.address] : c(e);
                },
              }),
              account: a.address,
              chain: u,
              key: "thirdweb-wallet",
            });
          },
          fromViem: function (e) {
            let t = e.walletClient.account;
            if (!t)
              throw Error(
                "Account not found in walletClient, please pass it explicitly."
              );
            return {
              address: t.address,
              signMessage: async (n) =>
                e.walletClient.signMessage({ account: t, ...n }),
              sendTransaction: async (n) => {
                let r = await e.walletClient.sendTransaction({
                  account: t,
                  chain: e.walletClient.chain,
                  ...n,
                });
                return { transaction: n, transactionHash: r };
              },
              signTypedData(t) {
                if (!t) throw Error("Typed data is required to signTypedData");
                return e.walletClient.signTypedData(t);
              },
            };
          },
        },
      };
      async function nh(e) {
        return {
          address: e.thirdwebContract.address,
          abi: await (0, ni.$x)(e.thirdwebContract),
        };
      }
    },
    34777: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(29181),
        a = n(68737);
      function i(e) {
        let t = (0, a.h)(),
          n = e.chain;
        return {
          id: "adapter",
          subscribe: t.subscribe,
          connect: async () => (t.emit("onConnect", e), e.adaptedAccount),
          autoConnect: async () => (t.emit("onConnect", e), e.adaptedAccount),
          disconnect: async () => {
            await e.onDisconnect(), t.emit("disconnect", void 0);
          },
          getAccount: () => e.adaptedAccount,
          getChain: () => (n = (0, r.rT)(n.id) || n),
          getConfig: () => e,
          switchChain: async (r) => {
            await e.switchChain(r), (n = r), t.emit("chainChanged", r);
          },
        };
      }
    },
    94153: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return a;
        },
      });
      var r = n(72151);
      async function a(e) {
        return (0, r.j)({
          client: e.client,
          ecosystem: e.ecosystem,
          data: {
            source: "pay",
            action: e.event,
            clientId: e.client.clientId,
            chainId: e.chainId,
            walletAddress: e.walletAddress,
            walletType: e.walletType,
            tokenAddress: e.fromToken,
            amountWei: e.fromAmount,
            dstTokenAddress: e.toToken,
            dstChainId: e.chainId,
            errorCode: e.error,
          },
        });
      }
    },
    67750: function (e, t, n) {
      "use strict";
      async function r(e) {
        let { payload: t, account: n } = e;
        return {
          signature: await n.signMessage({
            message: (function (e) {
              let t = [
                ""
                  .concat(e.domain, " wants you to sign in with your ")
                  .concat("Ethereum", " account:"),
                e.address,
              ].join("\n");
              (t = [t, e.statement].join("\n\n")), e.statement && (t += "\n");
              let n = [];
              if (e.uri) {
                let t = "URI: ".concat(e.uri);
                n.push(t);
              }
              let r = "Version: ".concat(e.version);
              if ((n.push(r), e.chain_id)) {
                let t = "Chain ID: ".concat(e.chain_id) || 0;
                n.push(t);
              }
              let a = "Nonce: ".concat(e.nonce);
              n.push(a);
              let i = "Issued At: ".concat(e.issued_at);
              n.push(i);
              let o = "Expiration Time: ".concat(e.expiration_time);
              if ((n.push(o), e.invalid_before)) {
                let t = "Not Before: ".concat(e.invalid_before);
                n.push(t);
              }
              return (
                e.resources &&
                  n.push(
                    [
                      "Resources:",
                      ...e.resources.map((e) => "- ".concat(e)),
                    ].join("\n")
                  ),
                [t, n.join("\n")].join("\n")
              );
            })(t),
          }),
          payload: t,
        };
      }
      n.r(t),
        n.d(t, {
          signLoginPayload: function () {
            return r;
          },
        });
    },
    29306: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return r;
        },
      });
      let r = (0, n(29181).ax)({
        id: 56,
        name: "BNB Smart Chain Mainnet",
        nativeCurrency: {
          name: "BNB Chain Native Token",
          symbol: "BNB",
          decimals: 18,
        },
        blockExplorers: [{ name: "bscscan", url: "https://bscscan.com" }],
      });
    },
    69220: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return r;
        },
      });
      let r = (0, n(29181).ax)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        blockExplorers: [{ name: "Etherscan", url: "https://etherscan.io" }],
      });
    },
    1287: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = (0, n(29181).ax)({
        id: 324,
        name: "ZkSync Era",
        nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
        blockExplorers: [
          {
            name: "zkSync Era Block Explorer",
            url: "https://explorer.zksync.io",
            apiUrl: "https://block-explorer-api.zksync.dev/api",
          },
        ],
      });
    },
    94200: function (e, t, n) {
      "use strict";
      n.d(t, {
        DB: function () {
          return o;
        },
      });
      var r = n(21021);
      let a = [
          { type: "bytes", name: "name" },
          { type: "bytes", name: "data" },
        ],
        i = [{ type: "bytes" }, { type: "address" }];
      async function o(e) {
        return (0, r.readContract)({
          contract: e.contract,
          method: ["0x9061b923", a, i],
          params: [e.name, e.data],
        });
      }
    },
    67534: function (e, t, n) {
      "use strict";
      n.d(t, {
        B7: function () {
          return r;
        },
      });
      let r = "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
    },
    81372: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return y;
        },
      });
      var r = n(56628),
        a = n(94907),
        i = n(69220),
        o = n(33210),
        s = n(34981),
        l = n(94662),
        u = n(49579),
        c = n(42343),
        d = n(63589);
      let h = [
          { type: "bytes32", name: "name" },
          { type: "string", name: "key" },
        ],
        f = [{ type: "string" }];
      var p = n(94200),
        b = n(67534);
      async function m(e) {
        let {
          client: t,
          name: n,
          key: r,
          resolverAddress: m,
          resolverChain: y,
        } = e;
        return (0, a.D)(
          async () => {
            var e, a;
            let g = (0, o.u)({
                client: t,
                chain: y || i.t,
                address: m || b.B7,
              }),
              w =
                "0x59d1d43c" +
                ((e = { name: (0, l.V)(n), key: r }),
                (0, c.EJ)(h, [e.name, e.key])).slice(2),
              v = await (0, p.DB)({
                contract: g,
                name: (0, s.NC)((0, u.T)(n)),
                data: w,
              });
            if ("0x" === v[0]) return null;
            let x = ((a = v[0]), (0, d.r)(f, a)[0]);
            return "" === x ? null : x;
          },
          { cacheKey: "ens:text:".concat(n, ":").concat(r), cacheTime: 6e4 }
        );
      }
      async function y(e) {
        let { client: t, name: n, resolverAddress: i, resolverChain: o } = e;
        return (0, a.D)(
          async () => {
            let e = await m({
              client: t,
              key: "avatar",
              name: n,
              resolverAddress: i,
              resolverChain: o,
            });
            if (!e) return null;
            try {
              return (0, r.a)({ uri: e, client: t });
            } catch (e) {
              return console.error("Error parsing avatar record", e), null;
            }
          },
          { cacheKey: "ens:avatar:".concat(n), cacheTime: 6e4 }
        );
      }
    },
    4534: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return f;
        },
      });
      var r = n(69220),
        a = n(33210),
        i = n(34981),
        o = n(49579),
        s = n(94907),
        l = n(21021);
      let u = [{ type: "bytes", name: "reverseName" }],
        c = [
          { type: "string" },
          { type: "address" },
          { type: "address" },
          { type: "address" },
        ];
      async function d(e) {
        return (0, l.readContract)({
          contract: e.contract,
          method: ["0xec11c823", u, c],
          params: [e.reverseName],
        });
      }
      var h = n(67534);
      async function f(e) {
        let { client: t, address: n, resolverAddress: l, resolverChain: u } = e;
        return (0, s.D)(
          async () => {
            let e = (0, a.u)({
                client: t,
                chain: u || r.t,
                address: l || h.B7,
              }),
              s = (0, i.NC)(
                (0, o.T)(
                  "".concat(n.toLowerCase().substring(2), ".addr.reverse")
                )
              ),
              [c, f] = await d({ contract: e, reverseName: s }).catch((e) => {
                if ("data" in e && "0x7199966d" === e.data) return [null, n];
                throw e;
              });
            return n.toLowerCase() !== f.toLowerCase() ? null : c;
          },
          {
            cacheKey: "ens:name:"
              .concat((null == u ? void 0 : u.id) || 1, ":")
              .concat(n),
            cacheTime: 6e4,
          }
        );
      }
    },
    19434: function (e, t, n) {
      "use strict";
      n.d(t, {
        jA: function () {
          return o;
        },
      });
      var r = n(21021);
      let a = [{ type: "address", name: "_address" }],
        i = [{ type: "uint256" }];
      async function o(e) {
        return (0, r.readContract)({
          contract: e.contract,
          method: ["0x70a08231", a, i],
          params: [e.address],
        });
      }
    },
    50512: function (e, t, n) {
      "use strict";
      n.d(t, {
        uH: function () {
          return o;
        },
      });
      var r = n(21021);
      let a = [],
        i = [{ type: "uint8" }];
      async function o(e) {
        return (0, r.readContract)({
          contract: e.contract,
          method: ["0x313ce567", a, i],
          params: [],
        });
      }
    },
    40550: function (e, t, n) {
      "use strict";
      n.d(t, {
        decimals: function () {
          return i;
        },
      });
      var r = n(94907),
        a = n(50512);
      async function i(e) {
        return (0, r.D)(() => (0, a.uH)(e), {
          cacheKey: ""
            .concat(e.contract.chain.id, ":")
            .concat(e.contract.address, ":decimals"),
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
    },
    29371: function (e, t, n) {
      "use strict";
      n.d(t, {
        AA: function () {
          return f;
        },
        Bo: function () {
          return c;
        },
        Bu: function () {
          return o;
        },
        EW: function () {
          return l;
        },
        I5: function () {
          return i;
        },
        gi: function () {
          return u;
        },
        jM: function () {
          return s;
        },
        oI: function () {
          return h;
        },
        te: function () {
          return d;
        },
      });
      var r = n(80173);
      let a = () => {
          let e = (0, r.gc)().pay;
          return e.startsWith("localhost")
            ? "http://".concat(e)
            : "https://".concat(e);
        },
        i = () => "".concat(a(), "/buy-with-crypto/status/v1"),
        o = () => "".concat(a(), "/buy-with-crypto/quote/v1"),
        s = () => "".concat(a(), "/buy-with-crypto/transfer/v1"),
        l = () => "".concat(a(), "/buy-with-fiat/quote/v1"),
        u = () => "".concat(a(), "/buy-with-fiat/status/v1"),
        c = () => "".concat(a(), "/destination-tokens/v1"),
        d = () => "".concat(a(), "/buy-with-crypto/source-tokens/v1"),
        h = () => "".concat(a(), "/wallet/history/v1"),
        f = () => "".concat(a(), "/convert/crypto-to-fiat/v1");
    },
    71259: function (e, t, n) {
      "use strict";
      n.d(t, {
        G8: function () {
          return s;
        },
        qq: function () {
          return l;
        },
        v$: function () {
          return u;
        },
      });
      var r = n(90132),
        a = n(55881),
        i = n(189);
      let o = (0, a.createContext)(i.au);
      function s(e) {
        let { theme: t, children: n } = e,
          a = l(t);
        return (0, r.jsx)(o.Provider, { value: a, children: n });
      }
      function l(e) {
        return e &&
          ("dark" === e ||
            "light" === e ||
            ("object" == typeof e && null !== e && "colors" in e))
          ? "string" == typeof e
            ? "light" === e
              ? i.hX
              : i.au
            : e
          : i.au;
      }
      function u() {
        return (0, a.useContext)(o);
      }
    },
    189: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return {
          type: e,
          colors: {
            primaryText: t.primaryText,
            secondaryText: t.secondaryText,
            accentText: t.accentText,
            danger: t.danger,
            success: t.success,
            modalOverlayBg: t.overlay,
            accentButtonBg: t.accentBg,
            accentButtonText: t.textOnAccent,
            primaryButtonBg: t.primaryText,
            primaryButtonText: t.base1,
            secondaryButtonBg: t.base3,
            secondaryButtonText: t.primaryText,
            secondaryButtonHoverBg: t.base4,
            modalBg: t.base1,
            tooltipBg: t.primaryText,
            tooltipText: t.base1,
            inputAutofillBg: t.base1,
            scrollbarBg: t.base2,
            tertiaryBg: t.base2,
            separatorLine: t.base4,
            secondaryIconColor: t.secondaryText,
            secondaryIconHoverBg: t.base3,
            secondaryIconHoverColor: t.primaryText,
            borderColor: t.base4,
            skeletonBg: t.base3,
            selectedTextColor: t.base1,
            selectedTextBg: t.primaryText,
            connectedButtonBg: t.base1,
            connectedButtonBgHover: t.base2,
          },
          fontFamily: "inherit",
        };
      }
      n.d(t, {
        AF: function () {
          return d;
        },
        BC: function () {
          return c;
        },
        EA: function () {
          return u;
        },
        JB: function () {
          return o;
        },
        W0: function () {
          return s;
        },
        au: function () {
          return a;
        },
        hX: function () {
          return i;
        },
        q0: function () {
          return l;
        },
      });
      let a = r("dark", {
          base1: "hsl(230 11.63% 8.43%)",
          base2: "hsl(230 11.63% 12%)",
          base3: "hsl(230 11.63% 15%)",
          base4: "hsl(230 11.63% 17%)",
          primaryText: "#eeeef0",
          secondaryText: "#7c7a85",
          danger: "#e5484D",
          success: "#30A46C",
          overlay: "rgba(0, 0, 0, 0.7)",
          accentText: "#3385FF",
          accentBg: "hsl(216 100% 50%)",
          textOnAccent: "#eeeef0",
        }),
        i = r("light", {
          base1: "#fdfcfd",
          base2: "#f2eff3",
          base3: "#e3dfe6",
          base4: "#dbd8e0",
          primaryText: "#211f26",
          secondaryText: "#6f6d78",
          accentText: "#3385FF",
          success: "#30A46C",
          danger: "#e5484D",
          overlay: "rgba(0, 0, 0, 0.7)",
          accentBg: "hsl(216 100% 50%)",
          textOnAccent: "#fdfcfd",
        }),
        o = {
          xs: "12px",
          sm: "14px",
          md: "16px",
          lg: "20px",
          xl: "24px",
          xxl: "32px",
          "3xl": "48px",
        },
        s = {
          "4xs": "2px",
          "3xs": "4px",
          xxs: "6px",
          xs: "8px",
          sm: "12px",
          md: "16px",
          lg: "24px",
          xl: "32px",
          xxl: "48px",
          "3xl": "64px",
        },
        l = {
          xs: "4px",
          sm: "6px",
          md: "8px",
          lg: "12px",
          xl: "20px",
          xxl: "32px",
        },
        u = {
          xs: "12",
          sm: "16",
          md: "24",
          lg: "32",
          xl: "48",
          xxl: "64",
          "3xl": "96",
          "4xl": "128",
        },
        c = { mobile: "@media (max-width: 640px)" },
        d = {
          sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          lg: "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        };
    },
    99216: function (e, t, n) {
      "use strict";
      n.d(t, {
        ND: function () {
          return p;
        },
        Al: function () {
          return h;
        },
        Ut: function () {
          return d;
        },
        SG: function () {
          return m;
        },
        zw: function () {
          return c;
        },
        U: function () {
          return f;
        },
        LM: function () {
          return y;
        },
      });
      var r = n(91793),
        a = n(17513),
        i = n(55881),
        o = n(29181);
      class s {
        constructor(e) {
          Object.defineProperty(this, "value", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "next", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.value = e);
        }
      }
      class l {
        enqueue(e) {
          let t = new s(e);
          this.head ? this.tail && (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            this.size++;
        }
        dequeue() {
          var e;
          let t = this.head;
          if (t)
            return (
              (this.head =
                null === (e = this.head) || void 0 === e ? void 0 : e.next),
              this.size--,
              t.value
            );
        }
        clear() {
          (this.head = void 0), (this.tail = void 0), (this.size = 0);
        }
        *[Symbol.iterator]() {
          let e = this.head;
          for (; e; ) yield e.value, (e = e.next);
        }
        constructor() {
          Object.defineProperty(this, "head", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "tail", {
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
            this.clear(),
            (this.size = 0);
        }
      }
      let u = (e, t, n) => e.bind(n);
      function c(e) {
        var t, n;
        let a = !!e && !e.name,
          i = (0, r.a)({
            queryKey: ["chain", null == e ? void 0 : e.id],
            enabled: a,
            retry: !1,
            staleTime: 36e5,
            queryFn: async () => {
              if (!e) throw Error("chain is required");
              return (0, o.Ah)(await (0, o.getChainMetadata)(e));
            },
          });
        return {
          name:
            null !== (n = null == e ? void 0 : e.name) && void 0 !== n
              ? n
              : null === (t = i.data) || void 0 === t
              ? void 0
              : t.name,
          isLoading: a && i.isLoading,
        };
      }
      function d(e) {
        var t, n, a, i, s;
        let l =
            !!e && !(null === (t = e.icon) || void 0 === t ? void 0 : t.url),
          u = (0, r.a)({
            queryKey: ["chain", null == e ? void 0 : e.id],
            enabled: l,
            retry: !1,
            staleTime: 36e5,
            queryFn: async () => {
              if (!e) throw Error("chain is required");
              return (0, o.Ah)(await (0, o.getChainMetadata)(e));
            },
          });
        return {
          url:
            null !==
              (s =
                null == e
                  ? void 0
                  : null === (n = e.icon) || void 0 === n
                  ? void 0
                  : n.url) && void 0 !== s
              ? s
              : null === (i = u.data) || void 0 === i
              ? void 0
              : null === (a = i.icon) || void 0 === a
              ? void 0
              : a.url,
          isLoading: l && u.isLoading,
        };
      }
      function h(e) {
        var t, n, a, i;
        let s =
            !!e &&
            "testnet" in e &&
            !(null === (t = e.faucets) || void 0 === t ? void 0 : t.length) &&
            1337 !== e.id,
          l = (0, r.a)({
            queryKey: ["chain", null == e ? void 0 : e.id],
            enabled: s,
            retry: !1,
            staleTime: 36e5,
            queryFn: async () => {
              if (!e) throw Error("chain is required");
              return (0, o.Ah)(await (0, o.getChainMetadata)(e));
            },
          });
        return {
          faucets:
            null !==
              (i =
                null !== (a = null == e ? void 0 : e.faucets) && void 0 !== a
                  ? a
                  : null === (n = l.data) || void 0 === n
                  ? void 0
                  : n.faucets) && void 0 !== i
              ? i
              : [],
          isLoading: s && l.isLoading,
        };
      }
      function f(e) {
        var t, n, a, i, s;
        let l =
            !!e &&
            !(null === (t = e.nativeCurrency) || void 0 === t
              ? void 0
              : t.symbol),
          u = (0, r.a)({
            queryKey: ["chain", null == e ? void 0 : e.id],
            enabled: l,
            retry: !1,
            staleTime: 36e5,
            queryFn: async () => {
              if (!e) throw Error("chain is required");
              return (0, o.Ah)(await (0, o.getChainMetadata)(e));
            },
          });
        return {
          symbol:
            null !==
              (s =
                null == e
                  ? void 0
                  : null === (n = e.nativeCurrency) || void 0 === n
                  ? void 0
                  : n.symbol) && void 0 !== s
              ? s
              : null === (i = u.data) || void 0 === i
              ? void 0
              : null === (a = i.nativeCurrency) || void 0 === a
              ? void 0
              : a.symbol,
          isLoading: l && u.isLoading,
        };
      }
      function p(e) {
        var t, n, a, i;
        let s =
            !!e &&
            !(null === (t = e.blockExplorers) || void 0 === t
              ? void 0
              : t.length),
          l = (0, r.a)({
            queryKey: ["chain", null == e ? void 0 : e.id],
            enabled: s,
            retry: !1,
            staleTime: 36e5,
            queryFn: async () => {
              if (!e) throw Error("chain is required");
              return (0, o.Ah)(await (0, o.getChainMetadata)(e));
            },
          });
        return {
          explorers:
            null !==
              (i =
                null !== (a = null == e ? void 0 : e.blockExplorers) &&
                void 0 !== a
                  ? a
                  : null === (n = l.data) || void 0 === n
                  ? void 0
                  : n.blockExplorers) && void 0 !== i
              ? i
              : [],
          isLoading: s && l.isLoading,
        };
      }
      function b(e) {
        return { queryKey: ["chain", e], enabled: !!e, staleTime: 36e5 };
      }
      function m(e) {
        return (0, r.a)({
          ...b(e),
          queryFn: async () => {
            if (!e) throw Error("chainId is required");
            return (0, o.getChainMetadata)(e);
          },
        });
      }
      function y(e, t) {
        let n = (0, i.useMemo)(() => {
          let n = (function (e) {
            if (
              !(
                (Number.isInteger(e) || e === Number.POSITIVE_INFINITY) &&
                e > 0
              )
            )
              throw TypeError(
                "Expected `concurrency` to be a number from 1 and up"
              );
            let t = new l(),
              n = 0,
              r = () => {
                if ((n--, t.size > 0)) {
                  let e = t.dequeue();
                  e && e();
                }
              },
              a = async (e, t, a) => {
                n++;
                let i = (async () => e(...a))();
                t(i);
                try {
                  await i;
                } catch (e) {}
                r();
              },
              i = (r, i, o) => {
                t.enqueue(u(a.bind(void 0, r, i, o))),
                  (async () => {
                    if ((await Promise.resolve(), n < e && t.size > 0)) {
                      let e = t.dequeue();
                      e && e();
                    }
                  })();
              },
              o = function (e) {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return new Promise((t) => {
                  i(e, t, n);
                });
              };
            return (
              Object.defineProperties(o, {
                activeCount: { get: () => n },
                pendingCount: { get: () => t.size },
                clearQueue: {
                  value() {
                    t.clear();
                  },
                },
              }),
              o
            );
          })(t);
          return e.map((e) => ({
            ...b(e),
            queryFn: () => n(() => (0, o.getChainMetadata)(e)),
          }));
        }, [e, t]);
        return (0, a.h)({ queries: n });
      }
    },
    79789: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return i;
        },
      });
      var r = n(55881),
        a = n(30535);
      function i() {
        let e = (0, a.ev)("useActiveAccount").activeAccountStore;
        return (0, r.useSyncExternalStore)(e.subscribe, e.getValue, e.getValue);
      }
    },
    42758: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(55881),
        a = n(30535);
      function i() {
        let e = (0, a.ev)("useActiveWallet").activeWalletStore;
        return (0, r.useSyncExternalStore)(e.subscribe, e.getValue, e.getValue);
      }
    },
    4796: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(55881),
        a = n(30535);
      function i() {
        let e = (0, a.ev)("useActiveWalletChain").activeWalletChainStore;
        return (0, r.useSyncExternalStore)(e.subscribe, e.getValue, e.getValue);
      }
    },
    28879: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var r = n(30535);
      function a() {
        return (0, r.ev)("useSetActiveWallet").setActiveWallet;
      }
    },
    21987: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var r = n(30535);
      function a() {
        return (0, r.ev)("useSwitchActiveWalletChain").switchActiveWalletChain;
      }
    },
    81570: function (e, t, n) {
      "use strict";
      n.d(t, {
        F6: function () {
          return u;
        },
        GS: function () {
          return f;
        },
        c9: function () {
          return c;
        },
        vL: function () {
          return d;
        },
        vN: function () {
          return h;
        },
      });
      var r = n(91793),
        a = n(69220),
        i = n(81372),
        o = n(4534),
        s = n(22463),
        l = n(51495);
      function u(e) {
        let { client: t, address: n } = e;
        return (0, r.a)({
          queryKey: ["ens-name", n],
          enabled: !!n,
          queryFn: () =>
            (0, o.g)({ client: t, address: n || "", resolverChain: a.t }),
        });
      }
      function c(e) {
        let { client: t, ensName: n } = e;
        return (0, r.a)({
          queryKey: ["ens-avatar", n],
          enabled: !!n,
          queryFn: async () => (0, i.S)({ client: t, name: n || "" }),
        });
      }
      function d(e) {
        return (0, r.a)({
          queryKey: ["wallet-info", e],
          queryFn: () => {
            if (!e) throw Error("Wallet id is required");
            return (0, s.d)(e, !1);
          },
          retry: !1,
          refetchOnWindowFocus: !1,
          refetchOnMount: !1,
          enabled: !!e,
        });
      }
      function h(e) {
        return (0, r.a)({
          queryKey: ["wallet-image", e],
          queryFn: () => {
            if (!e) throw Error("Wallet id is required");
            return (0, s.d)(e, !0);
          },
          retry: !1,
          refetchOnWindowFocus: !1,
          refetchOnMount: !1,
          enabled: !!e,
        });
      }
      function f(e) {
        if (!e) return !1;
        let t = !1;
        if (e && "smart" === e.id) {
          let n = e.getConfig();
          "sponsorGas" in n && (t = n.sponsorGas),
            "gasless" in n && (t = n.gasless);
        }
        if (e && ("inApp" === e.id || (0, l.J)(e))) {
          let n = e.getConfig();
          if (n && "smartAccount" in n && n.smartAccount) {
            let e = n.smartAccount;
            "sponsorGas" in e && (t = e.sponsorGas),
              "gasless" in e && (t = e.gasless);
          }
        }
        return t;
      }
    },
    69062: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return F;
        },
      });
      var r = n(90132),
        a = n(55881),
        i = n(96272),
        o = n(94153),
        s = n(7542),
        l = n(20819),
        u = n(93269),
        c = n(53111),
        d = n(34303),
        h = n(91040),
        f = n(81570),
        p = n(42758),
        b = n(21987),
        m = n(4882),
        y = n(91793),
        g = n(71259),
        w = n(79789),
        v = n(18135),
        x = n(31897),
        E = n(6373),
        C = n(87841),
        k = n(63705),
        S = n(509),
        T = n(189),
        R = n(99216),
        P = n(13498),
        O = n(91573),
        A = n(47299),
        I = n(64826),
        _ = n(39687),
        B = n(45113);
      function j(e) {
        var t, n;
        let i = F({ payModal: !1 }),
          [o, s] = (0, a.useState)(),
          l = (0, R.ND)(e.tx.chain),
          [u, c] = (0, a.useState)("loading"),
          d = (0, a.useCallback)(async () => {
            c("loading");
            try {
              let t = await i.mutateAsync(e.tx);
              s(t.transactionHash), e.onTxSent(t), c("sent");
            } catch (e) {
              console.error(e), c("failed");
            }
          }, [i, e.tx, e.onTxSent]),
          h = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(() => {
            h.current || ((h.current = !0), d());
          }, [d]),
          (0, r.jsxs)(I.W2, {
            p: "lg",
            children: [
              (0, r.jsx)(I.xB, { title: "Transaction", onBack: e.onBack }),
              (0, r.jsx)(O.L, { y: "xxl" }),
              (0, r.jsx)(O.L, { y: "xxl" }),
              (0, r.jsxs)(I.W2, {
                flex: "row",
                center: "x",
                children: [
                  "loading" === u &&
                    (0, r.jsx)(A.$, { size: "xxl", color: "accentText" }),
                  "failed" === u && (0, r.jsx)(P.E, { size: T.EA["3xl"] }),
                  "sent" === u &&
                    (0, r.jsx)(I.W2, {
                      color: "success",
                      flex: "row",
                      center: "both",
                      children: (0, r.jsx)(k.NhS, {
                        width: T.EA["3xl"],
                        height: T.EA["3xl"],
                      }),
                    }),
                ],
              }),
              (0, r.jsx)(O.L, { y: "lg" }),
              (0, r.jsxs)(B.x, {
                color: "primaryText",
                center: !0,
                size: "lg",
                children: [
                  "loading" === u && "Sending transaction",
                  "failed" === u && "Transaction failed",
                  "sent" === u && "Transaction sent",
                ],
              }),
              (0, r.jsx)(O.L, { y: "sm" }),
              (0, r.jsx)(B.x, {
                color: "danger",
                center: !0,
                size: "sm",
                children: "failed" === u && i.error ? i.error.message : "",
              }),
              (0, r.jsx)(O.L, { y: "xxl" }),
              (0, r.jsx)(O.L, { y: "xxl" }),
              "failed" === u &&
                (0, r.jsx)(_.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  onClick: d,
                  children: "Try Again",
                }),
              "sent" === u &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(_.zx, {
                      variant: "accent",
                      fullWidth: !0,
                      onClick: e.closeModal,
                      children: "Done",
                    }),
                    o &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(O.L, { y: "sm" }),
                          (0, r.jsxs)(_.ZP, {
                            fullWidth: !0,
                            variant: "outline",
                            href: (0, S.Sk)(
                              null !==
                                (n =
                                  null === (t = l.explorers[0]) || void 0 === t
                                    ? void 0
                                    : t.url) && void 0 !== n
                                ? n
                                : "",
                              o
                            ),
                            target: "_blank",
                            as: "a",
                            gap: "xs",
                            style: { textDecoration: "none", color: "inherit" },
                            children: [
                              "View on Explorer",
                              (0, r.jsx)(k.h0n, {
                                width: T.EA.sm,
                                height: T.EA.sm,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function N(e) {
        let t = (0, w.M)(),
          n = (0, p.r)();
        return (
          (0, y.a)({
            queryKey: ["transaction-modal-event"],
            queryFn: () => {
              t &&
                n &&
                (0, o.V)({
                  client: e.client,
                  walletAddress: t.address,
                  walletType: n.id,
                  dstChainId: e.tx.chain.id,
                  event: "open_pay_transaction_modal",
                });
            },
            enabled: !!n,
          }),
          (0, r.jsx)(g.G8, {
            theme: e.theme,
            children: (0, r.jsx)(C.u, {
              open: !0,
              size: "compact",
              setOpen: (t) => {
                t || e.onClose();
              },
              children: (0, r.jsx)(M, { ...e }),
            }),
          })
        );
      }
      function M(e) {
        let t = (0, x.q)(e.localeId),
          [n, i] = (0, a.useState)("buy");
        return t.data
          ? "execute-tx" === n
            ? (0, r.jsx)(j, {
                tx: e.tx,
                closeModal: e.onClose,
                onTxSent: e.onTxSent,
              })
            : (0, r.jsx)(E.I, {
                title: e.title,
                isEmbed: !1,
                client: e.client,
                onBack: e.onBack,
                supportedTokens: e.supportedTokens,
                connectLocale: t.data,
                theme: "string" == typeof e.theme ? e.theme : e.theme.type,
                payOptions: e.payOptions,
                onDone: () => {
                  i("execute-tx");
                },
                connectOptions: void 0,
              })
          : (0, r.jsx)(v.a, {});
      }
      function F() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, b.l)(),
          n = (0, p.r)(),
          y = (0, a.useContext)(m.E),
          g = e.payModal,
          w = !0;
        return (
          (!1 === g || e.gasless) && (w = !1),
          (function (e) {
            let { showPayModal: t, gasless: n, wallet: r, switchChain: a } = e,
              p = null == r ? void 0 : r.getAccount();
            return (0, i.D)({
              mutationFn: async (e) => {
                var i;
                r &&
                  e.chain.id !==
                    (null === (i = r.getChain()) || void 0 === i
                      ? void 0
                      : i.id) &&
                  (await a(e.chain), (p = r.getAccount()));
                let b = p;
                if (!b) throw Error("No active account");
                return t
                  ? new Promise((a, i) => {
                      let p = async () => {
                        try {
                          let t = await (0, s.sendTransaction)({
                            transaction: e,
                            account: b,
                            gasless: n,
                          });
                          a(t);
                        } catch (e) {
                          i(e);
                        }
                      };
                      (async () => {
                        try {
                          let [n, s, m] = await Promise.all([
                            (0, u.q)(e.value),
                            (0, u.q)(e.erc20Value),
                            (0, h.MY)(e.client).catch(
                              (t) => (
                                (0, o.V)({
                                  client: e.client,
                                  walletAddress: b.address,
                                  walletType: null == r ? void 0 : r.id,
                                  dstChainId: e.chain.id,
                                  event: "pay_transaction_modal_pay_api_error",
                                  error: null == t ? void 0 : t.message,
                                }),
                                null
                              )
                            ),
                          ]);
                          if (!m) {
                            p();
                            return;
                          }
                          if (
                            !m.map((e) => e.chain.id).includes(e.chain.id) ||
                            (s &&
                              !m.some(
                                (t) =>
                                  t.chain.id === e.chain.id &&
                                  t.tokens.find(
                                    (e) =>
                                      e.address.toLowerCase() ===
                                      s.tokenAddress.toLowerCase()
                                  )
                              ))
                          ) {
                            (0, o.V)({
                              client: e.client,
                              walletAddress: b.address,
                              walletType: null == r ? void 0 : r.id,
                              dstChainId: e.chain.id,
                              event:
                                "pay_transaction_modal_chain_token_not_supported",
                              error: "chain "
                                .concat(e.chain.id, " ")
                                .concat(
                                  s
                                    ? "/ token ".concat(
                                        null == s ? void 0 : s.tokenAddress
                                      )
                                    : "",
                                  " not supported"
                                ),
                            }),
                              p();
                            return;
                          }
                          let y = (null == s ? void 0 : s.amountWei) || 0n,
                            [g, w, v] = await Promise.all([
                              (0, d.p)({
                                client: e.client,
                                address: b.address,
                                chain: e.chain,
                              }),
                              (null == s ? void 0 : s.tokenAddress)
                                ? (0, c.y)({
                                    client: e.client,
                                    account: b,
                                    chain: e.chain,
                                    tokenAddress: s.tokenAddress,
                                  })
                                : void 0,
                              (0, l.p)(e, b.address),
                            ]),
                            x = (0, f.GS)(r),
                            E = (n || 0n) + (x ? 0n : v);
                          (y > 0n && w && w.value < y) ||
                          (E > 0n && g.value < E)
                            ? t({ tx: e, sendTx: p, rejectTx: i, resolveTx: a })
                            : ((0, o.V)({
                                client: e.client,
                                walletAddress: b.address,
                                walletType: null == r ? void 0 : r.id,
                                dstChainId: e.chain.id,
                                event: "pay_transaction_modal_has_enough_funds",
                              }),
                              p());
                        } catch (e) {
                          console.error("Failed to estimate cost", e), p();
                        }
                      })();
                    })
                  : ((0, o.V)({
                      client: e.client,
                      walletAddress: b.address,
                      walletType: null == r ? void 0 : r.id,
                      dstChainId: e.chain.id,
                      event: "pay_transaction_modal_disabled",
                    }),
                    (0, s.sendTransaction)({
                      transaction: e,
                      account: b,
                      gasless: n,
                    }));
              },
            });
          })({
            showPayModal:
              w && !1 !== g
                ? (e) => {
                    var t;
                    !1 !== g &&
                      y(
                        (0, r.jsx)(N, {
                          title:
                            (null == g
                              ? void 0
                              : null === (t = g.metadata) || void 0 === t
                              ? void 0
                              : t.name) || "Transaction",
                          tx: e.tx,
                          onComplete: e.sendTx,
                          onClose: () => {
                            y(null),
                              e.rejectTx(
                                Error(
                                  "User rejected transaction by closing modal"
                                )
                              );
                          },
                          onTxSent: e.resolveTx,
                          client: e.tx.client,
                          localeId: (null == g ? void 0 : g.locale) || "en_US",
                          supportedTokens:
                            null == g ? void 0 : g.supportedTokens,
                          theme: (null == g ? void 0 : g.theme) || "dark",
                          payOptions: {
                            buyWithCrypto: null == g ? void 0 : g.buyWithCrypto,
                            buyWithFiat: null == g ? void 0 : g.buyWithFiat,
                            purchaseData: null == g ? void 0 : g.purchaseData,
                            mode: "transaction",
                            transaction: e.tx,
                            metadata: null == g ? void 0 : g.metadata,
                            onPurchaseSuccess:
                              null == g ? void 0 : g.onPurchaseSuccess,
                          },
                        })
                      );
                  }
                : void 0,
            gasless: e.gasless,
            switchChain: t,
            wallet: n,
          })
        );
      }
    },
    12954: function (e, t, n) {
      "use strict";
      n.d(t, {
        Co: function () {
          return a;
        },
        K8: function () {
          return r;
        },
        Po: function () {
          return c;
        },
        Q9: function () {
          return o;
        },
        fU: function () {
          return u;
        },
        g_: function () {
          return s;
        },
        xs: function () {
          return l;
        },
        zv: function () {
          return i;
        },
      });
      let r = {
          main: "main",
          getStarted: "getStarted",
          signIn: "signIn",
          showAll: "showAll",
        },
        a = "360px",
        i = "".concat(730, "px"),
        o = 770,
        s = "570px",
        l = "660px",
        u = 250;
      function c(e) {
        setTimeout(e, u + 100);
      }
    },
    13498: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return a;
        },
      });
      var r = n(90132);
      let a = (e) =>
        (0, r.jsxs)("svg", {
          width: e.size,
          height: e.size,
          viewBox: "0 0 109 109",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          role: "presentation",
          children: [
            (0, r.jsxs)("g", {
              clipPath: "url(#clip0_4036_4155)",
              children: [
                (0, r.jsx)("path", {
                  d: "M54.5 109C84.5995 109 109 84.5995 109 54.5C109 24.4005 84.5995 0 54.5 0C24.4005 0 0 24.4005 0 54.5C0 84.5995 24.4005 109 54.5 109Z",
                  fill: "#4BABFF",
                }),
                (0, r.jsx)("path", {
                  d: "M55 96C77.6437 96 96 77.6437 96 55C96 32.3563 77.6437 14 55 14C32.3563 14 14 32.3563 14 55C14 77.6437 32.3563 96 55 96Z",
                  fill: "#1C85FF",
                }),
                (0, r.jsx)("path", {
                  d: "M73.2352 69.389C73.7459 69.8997 74.0329 70.5924 74.0329 71.3147C74.0329 72.037 73.7459 72.7298 73.2352 73.2405C72.7244 73.7513 72.0317 74.0382 71.3094 74.0382C70.5871 74.0382 69.8944 73.7513 69.3836 73.2405L54.9992 58.8515L40.6102 73.236C40.0994 73.7467 39.4067 74.0337 38.6844 74.0337C37.9621 74.0337 37.2694 73.7467 36.7586 73.236C36.2479 72.7252 35.9609 72.0325 35.9609 71.3102C35.9609 70.5879 36.2479 69.8952 36.7586 69.3844L51.1476 55L36.7632 40.611C36.2524 40.1002 35.9655 39.4075 35.9655 38.6852C35.9655 37.9629 36.2524 37.2702 36.7632 36.7594C37.2739 36.2487 37.9666 35.9617 38.6889 35.9617C39.4112 35.9617 40.104 36.2487 40.6147 36.7594L54.9992 51.1484L69.3881 36.7572C69.8989 36.2464 70.5916 35.9595 71.3139 35.9595C72.0362 35.9595 72.729 36.2464 73.2397 36.7572C73.7505 37.2679 74.0374 37.9606 74.0374 38.6829C74.0374 39.4052 73.7505 40.098 73.2397 40.6087L58.8507 55L73.2352 69.389Z",
                  fill: "url(#paint0_linear_4036_4155)",
                }),
              ],
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  id: "paint0_linear_4036_4155",
                  x1: "54.9992",
                  y1: "35.9595",
                  x2: "54.9992",
                  y2: "74.0382",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "white" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#90CBFF" }),
                  ],
                }),
                (0, r.jsx)("clipPath", {
                  id: "clip0_4036_4155",
                  children: (0, r.jsx)("rect", {
                    width: "109",
                    height: "109",
                    fill: "white",
                  }),
                }),
              ],
            }),
          ],
        });
    },
    31897: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var r = n(91793);
      async function a(e) {
        switch (e) {
          case "es_ES":
            return (await n.e(24198).then(n.bind(n, 24198))).default;
          case "ja_JP":
            return (await n.e(27300).then(n.bind(n, 27300))).default;
          case "tl_PH":
            return (await n.e(30234).then(n.bind(n, 30234))).default;
          case "vi_VN":
            return (await n.e(1369).then(n.bind(n, 1369))).default;
          case "de_DE":
            return (await n.e(69910).then(n.bind(n, 69910))).default;
          case "ko_KR":
            return (await n.e(54710).then(n.bind(n, 54710))).default;
          case "fr_FR":
            return (await n.e(63560).then(n.bind(n, 63560))).default;
          case "pt_BR":
            return (await n.e(45536).then(n.bind(n, 45536))).default;
          default:
            return (await n.e(48282).then(n.bind(n, 48282))).default;
        }
      }
      function i(e) {
        return (0, r.a)({
          queryKey: ["connect-locale", e],
          queryFn: async () => a(e),
          refetchOnWindowFocus: !1,
          refetchOnMount: !1,
        });
      }
    },
    6373: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var r = n(90132),
        a = n(55881),
        i = n(18135);
      let o = (0, a.lazy)(() =>
        Promise.all([
          n.e(43829),
          n.e(98702),
          n.e(3532),
          n.e(19527),
          n.e(7995),
          n.e(88827),
          n.e(582),
        ]).then(n.bind(n, 94421))
      );
      function s(e) {
        return (0, r.jsx)(a.Suspense, {
          fallback: (0, r.jsx)(i.a, {}),
          children: (0, r.jsx)(o, { ...e }),
        });
      }
    },
    91040: function (e, t, n) {
      "use strict";
      n.d(t, {
        MY: function () {
          return l;
        },
        QR: function () {
          return c;
        },
        oU: function () {
          return u;
        },
      });
      var r = n(91793),
        a = n(29181),
        i = n(29371),
        o = n(19114),
        s = n(94907);
      async function l(e, t) {
        return (0, s.D)(
          async () => {
            let n = (0, o.NX)(e),
              r = await n(
                "".concat((0, i.Bo)()).concat(t ? "?isTestMode=true" : "")
              );
            return (await r.json()).result.map((e) => ({
              chain: (0, a.ax)({ id: e.chainId }),
              tokens: e.tokens,
            }));
          },
          { cacheKey: "destination-tokens", cacheTime: 3e5 }
        );
      }
      function u(e, t) {
        return (0, r.a)({
          queryKey: ["destination-tokens", e],
          queryFn: async () => l(e, t),
        });
      }
      function c(e) {
        return (0, r.a)({
          queryKey: ["source-tokens", e],
          queryFn: async () => {
            let t = (0, o.NX)(e.client),
              n = new URL((0, i.te)());
            n.searchParams.append(
              "destinationChainId",
              e.destinationChainId.toString()
            ),
              n.searchParams.append(
                "destinationTokenAddress",
                e.destinationTokenAddress
              );
            let r = await t(n.toString());
            return (await r.json()).result.map((e) => ({
              chain: (0, a.ax)({ id: e.chainId }),
              tokens: e.tokens,
            }));
          },
        });
      }
    },
    51056: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(90132),
        a = n(55881);
      function i(e) {
        let { height: t, elementRef: n } = (function () {
          let e = (0, a.useRef)(null),
            [t, n] = (0, a.useState)();
          return (
            (0, a.useEffect)(() => {
              let t = e.current;
              if (!t) return;
              let r = new ResizeObserver(() => {
                n(t.scrollHeight);
              });
              return (
                r.observe(t),
                () => {
                  r.disconnect();
                }
              );
            }, []),
            { height: t, elementRef: e }
          );
        })();
        return (0, r.jsx)("div", {
          style: {
            height: t ? "".concat(t, "px") : "auto",
            transition: "height 210ms cubic-bezier(0.175, 0.885, 0.32, 1.1)",
            overflow: "hidden",
            boxSizing: "border-box",
          },
          children: (0, r.jsx)("div", {
            ref: n,
            style: { maxHeight: e.maxHeight },
            children: e.children,
          }),
        });
      }
    },
    87841: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return ed;
        },
        u: function () {
          return ec;
        },
      });
      var r = n(32836),
        a = n(90132),
        i = n(88115),
        o = n(55881),
        s = n(6533),
        l = n(24286),
        u = n(40384),
        c = n(55875),
        d = n(511),
        h = n(16805),
        f = n(9340),
        p = n(1580),
        b = n(90211),
        m = n(14521),
        y = n(76867),
        g = n(63413),
        w = n(55509),
        v = n(3790),
        x = "Dialog",
        [E, C] = (0, u.b)(x),
        [k, S] = E(x),
        T = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: s,
              modal: l = !0,
            } = e,
            u = o.useRef(null),
            h = o.useRef(null),
            [f = !1, p] = (0, d.T)({ prop: r, defaultProp: i, onChange: s });
          return (0, a.jsx)(k, {
            scope: t,
            triggerRef: u,
            contentRef: h,
            contentId: (0, c.M)(),
            titleId: (0, c.M)(),
            descriptionId: (0, c.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p((e) => !e), [p]),
            modal: l,
            children: n,
          });
        };
      T.displayName = x;
      var R = "DialogTrigger",
        P = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = S(R, n),
            o = (0, l.e)(t, i.triggerRef);
          return (0, a.jsx)(m.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": U(i.open),
            ...r,
            ref: o,
            onClick: (0, s.M)(e.onClick, i.onOpenToggle),
          });
        });
      P.displayName = R;
      var O = "DialogPortal",
        [A, I] = E(O, { forceMount: void 0 }),
        _ = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            s = S(O, t);
          return (0, a.jsx)(A, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, a.jsx)(b.z, {
                present: n || s.open,
                children: (0, a.jsx)(p.h, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      _.displayName = O;
      var B = "DialogOverlay",
        j = o.forwardRef((e, t) => {
          let n = I(B, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            o = S(B, e.__scopeDialog);
          return o.modal
            ? (0, a.jsx)(b.z, {
                present: r || o.open,
                children: (0, a.jsx)(N, { ...i, ref: t }),
              })
            : null;
        });
      j.displayName = B;
      var N = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = S(B, n);
          return (0, a.jsx)(g.Z, {
            as: v.g7,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, a.jsx)(m.WV.div, {
              "data-state": U(i.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        M = "DialogContent",
        F = o.forwardRef((e, t) => {
          let n = I(M, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            o = S(M, e.__scopeDialog);
          return (0, a.jsx)(b.z, {
            present: r || o.open,
            children: o.modal
              ? (0, a.jsx)(L, { ...i, ref: t })
              : (0, a.jsx)(D, { ...i, ref: t }),
          });
        });
      F.displayName = M;
      var L = o.forwardRef((e, t) => {
          let n = S(M, e.__scopeDialog),
            r = o.useRef(null),
            i = (0, l.e)(t, n.contentRef, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, w.Ry)(e);
            }, []),
            (0, a.jsx)(q, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, s.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, s.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, s.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        D = o.forwardRef((e, t) => {
          let n = S(M, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, a.jsx)(q, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var a, o;
              null === (a = e.onCloseAutoFocus) || void 0 === a || a.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (o = n.triggerRef.current) ||
                    void 0 === o ||
                    o.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var a, o;
              null === (a = e.onInteractOutside) ||
                void 0 === a ||
                a.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let s = t.target;
              (null === (o = n.triggerRef.current) || void 0 === o
                ? void 0
                : o.contains(s)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        q = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: s,
              ...u
            } = e,
            c = S(M, n),
            d = o.useRef(null),
            p = (0, l.e)(t, d);
          return (
            (0, y.EW)(),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(f.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: s,
                  children: (0, a.jsx)(h.XB, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": U(c.open),
                    ...u,
                    ref: p,
                    onDismiss: () => c.onOpenChange(!1),
                  }),
                }),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(Q, { titleId: c.titleId }),
                    (0, a.jsx)(Y, {
                      contentRef: d,
                      descriptionId: c.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        z = "DialogTitle",
        $ = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = S(z, n);
          return (0, a.jsx)(m.WV.h2, { id: i.titleId, ...r, ref: t });
        });
      $.displayName = z;
      var W = "DialogDescription";
      o.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          i = S(W, n);
        return (0, a.jsx)(m.WV.p, { id: i.descriptionId, ...r, ref: t });
      }).displayName = W;
      var H = "DialogClose",
        G = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = S(H, n);
          return (0, a.jsx)(m.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, s.M)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function U(e) {
        return e ? "open" : "closed";
      }
      G.displayName = H;
      var V = "DialogTitleWarning",
        [Z, K] = (0, u.k)(V, {
          contentName: M,
          titleName: z,
          docsSlug: "dialog",
        }),
        Q = (e) => {
          let { titleId: t } = e,
            n = K(V),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            o.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        Y = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = K("DialogDescriptionWarning"),
            a =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            o.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(a);
            }, [a, t, n]),
            null
          );
        },
        X = n(63705),
        J = n(71259),
        ee = n(189),
        et = n(12954),
        en = n(7863),
        er = n(51056),
        ea = n(85360);
      let ei = (0, en.lx)((e) => ({
        backgroundColor: (0, J.v$)().colors.modalOverlayBg,
        zIndex: 9999,
        position: "fixed",
        inset: 0,
        animation: "".concat(ea.BX, " 400ms cubic-bezier(0.16, 1, 0.3, 1)"),
        backdropFilter: "blur(10px)",
      }));
      var eo = n(64826),
        es = n(39687);
      function el() {
        let e = (0, r._)([
          "\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n",
        ]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function eu() {
        let e = (0, r._)([
          "\n  from {\n    opacity: 0;\n    transform: translate(0, 50%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n",
        ]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      let ec = (e) => {
          let [t, n] = (0, o.useState)(e.open),
            r = (0, o.useRef)(null),
            i = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              if (e.open) n(e.open);
              else if (r.current) {
                var t;
                let e = { duration: et.fU, fill: "forwards", easing: "ease" };
                (r.current.animate([{ opacity: 0 }], { ...e }).onfinish =
                  () => {
                    n(!1);
                  }),
                  null === (t = i.current) ||
                    void 0 === t ||
                    t.animate([{ opacity: 0 }], {
                      ...e,
                      duration: et.fU + 100,
                    });
              } else n(e.open);
            }, [e.open]),
            (0, a.jsxs)(T, {
              open: t,
              onOpenChange: e.setOpen,
              children: [
                e.trigger &&
                  (0, a.jsx)(P, { asChild: !0, children: e.trigger }),
                (0, a.jsxs)(_, {
                  children: [
                    !e.hide &&
                      (0, a.jsx)(j, {
                        asChild: !0,
                        children: (0, a.jsx)(ei, { ref: i }),
                      }),
                    (0, a.jsx)(f.M, {
                      trapped: !e.hide,
                      children: (0, a.jsx)(F, {
                        asChild: !0,
                        "aria-describedby": void 0,
                        children: (0, a.jsxs)(ep, {
                          ref: r,
                          style: e.hide
                            ? {
                                width: 0,
                                height: 0,
                                overflow: "hidden",
                                opacity: 0,
                              }
                            : {
                                height: "compact" === e.size ? "auto" : et.g_,
                                maxWidth: "compact" === e.size ? et.Co : et.zv,
                              },
                          children: [
                            (0, a.jsx)($, {
                              style: {
                                position: "absolute",
                                width: "1px",
                                height: "1px",
                                padding: 0,
                                margin: "-1px",
                                overflow: "hidden",
                                clip: "rect(0, 0, 0, 0)",
                                whiteSpace: "nowrap",
                                borderWidth: 0,
                              },
                              children: "Connect Modal",
                            }),
                            "compact" === e.size
                              ? (0, a.jsx)(er.H, {
                                  maxHeight: et.xs,
                                  children: e.children,
                                })
                              : e.children,
                            !e.hideCloseIcon &&
                              (0, a.jsx)(ed, {
                                children: (0, a.jsx)(G, {
                                  asChild: !0,
                                  children: (0, a.jsx)(es.hU, {
                                    autoFocus: !0,
                                    type: "button",
                                    "aria-label": "Close",
                                    children: (0, a.jsx)(X.Pxu, {
                                      width: ee.EA.md,
                                      height: ee.EA.md,
                                      style: { color: "inherit" },
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ed = (0, en.lx)({
          position: "absolute",
          top: ee.W0.lg,
          right: ee.W0.lg,
          transform: "translateX(6px)",
        }),
        eh = (0, i.F4)(el()),
        ef = (0, i.F4)(eu()),
        ep = (0, en.lx)((e) => {
          let t = (0, J.v$)();
          return {
            zIndex: 1e4,
            background: t.colors.modalBg,
            "--bg": t.colors.modalBg,
            color: t.colors.primaryText,
            borderRadius: ee.q0.lg,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "calc(100vw - 40px)",
            boxSizing: "border-box",
            animation: "".concat(eh, " 300ms ease"),
            boxShadow: ee.AF.lg,
            lineHeight: "normal",
            border: "1px solid ".concat(t.colors.borderColor),
            outline: "none",
            overflow: "hidden",
            fontFamily: t.fontFamily,
            "& *": { boxSizing: "border-box" },
            [ee.BC.mobile]: {
              top: "auto",
              bottom: 0,
              left: 0,
              right: 0,
              transform: "none",
              width: "100vw",
              animation: "".concat(
                ef,
                " 0.35s cubic-bezier(0.15, 1.15, 0.6, 1)"
              ),
              borderRadius: ee.q0.xl,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              maxWidth: "none !important",
            },
            "& *::selection": {
              backgroundColor: t.colors.selectedTextBg,
              color: t.colors.selectedTextColor,
            },
            ...eo.KI,
          };
        });
    },
    91573: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(90132),
        a = n(189);
      let i = (e) => {
        let { y: t } = e;
        return (0, r.jsx)("div", { style: { height: a.W0[t] } });
      };
    },
    47299: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(32836),
        a = n(90132),
        i = n(88115),
        o = n(71259),
        s = n(189),
        l = n(7863);
      function u() {
        let e = (0, r._)([
          "\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, r._)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let d = (e) => {
          let t = (0, o.v$)();
          return (0, a.jsx)(p, {
            style: {
              width: "".concat(s.EA[e.size], "px"),
              height: "".concat(s.EA[e.size], "px"),
            },
            viewBox: "0 0 50 50",
            children: (0, a.jsx)(b, {
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              stroke: t.colors[e.color],
              strokeWidth: Number(s.EA[e.size]) > 64 ? "2" : "4",
            }),
          });
        },
        h = (0, i.F4)(u()),
        f = (0, i.F4)(c()),
        p = (0, l.Ld)({
          animation: "".concat(f, " 2s linear infinite"),
          width: "1em",
          height: "1em",
        }),
        b = (0, l.ex)({
          strokeLinecap: "round",
          animation: "".concat(h, " 1.5s ease-in-out infinite"),
        });
    },
    64826: function (e, t, n) {
      "use strict";
      n.d(t, {
        BL: function () {
          return u;
        },
        KI: function () {
          return c;
        },
        W2: function () {
          return f;
        },
        x1: function () {
          return h;
        },
        xB: function () {
          return d;
        },
      });
      var r = n(90132),
        a = n(71259),
        i = n(189),
        o = n(85360),
        s = n(7863),
        l = n(98097);
      let u = (0, s.lx)((e) => {
          let t = (0, a.v$)();
          return {
            borderTop: "1px solid ".concat(t.colors.separatorLine),
            display: "flex",
            flexDirection: "column",
            gap: i.W0.lg,
            padding: i.W0.lg,
          };
        }),
        c = {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { width: 0, display: "none" },
        };
      function d(e) {
        let { onBack: t, title: n } = e;
        return (0, r.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: e.leftAligned ? "flex-start" : "center",
            position: "relative",
          },
          children: [
            t &&
              (0, r.jsx)(l.x, {
                onClick: t,
                style: { position: "absolute", left: 0, top: 0 },
              }),
            (0, r.jsx)(f, {
              flex: "row",
              gap: "xs",
              center: "both",
              children:
                "string" == typeof n ? (0, r.jsx)(l.r, { children: n }) : n,
            }),
          ],
        });
      }
      let h = (0, s.lx)(() => ({
        height: "1px",
        background: (0, a.v$)().colors.separatorLine,
      }));
      function f(e) {
        let t = {};
        return (
          e.relative && (t.position = "relative"),
          e.fullHeight && (t.height = "100%"),
          e.expand && (t.flex = "1 1 0%"),
          e.flex &&
            ((t.display = "flex"),
            (t.flexDirection = e.flex),
            "row" === e.flex && (t.flexWrap = "wrap"),
            e.gap && (t.gap = i.W0[e.gap]),
            e.center &&
              ("both" === e.center &&
                ((t.justifyContent = "center"), (t.alignItems = "center")),
              (("x" === e.center && "row" === e.flex) ||
                ("y" === e.center && "column" === e.flex)) &&
                (t.justifyContent = "center"),
              (("x" === e.center && "column" === e.flex) ||
                ("y" === e.center && "row" === e.flex)) &&
                (t.alignItems = "center"))),
          e.p && (t.padding = i.W0[e.p]),
          e.px && ((t.paddingLeft = i.W0[e.px]), (t.paddingRight = i.W0[e.px])),
          e.py && ((t.paddingTop = i.W0[e.py]), (t.paddingBottom = i.W0[e.py])),
          e.debug &&
            ((t.outline = "1px solid red"), (t.outlineOffset = "-1px")),
          (0, r.jsx)(p, {
            "data-scrolly": e.scrollY,
            "data-animate": e.animate,
            bg: e.bg,
            color: e.color,
            borderColor: e.borderColor,
            style: { ...t, ...e.style },
            children: e.children,
          })
        );
      }
      let p = (0, s.lx)((e) => {
        let t = (0, a.v$)();
        return {
          color: e.color ? t.colors[e.color] : "inherit",
          background: e.bg ? t.colors[e.bg] : void 0,
          borderColor: e.borderColor ? t.colors[e.borderColor] : void 0,
          "&[data-animate='fadein']": {
            opacity: 0,
            animation: "".concat(o.BX, " 350ms ease forwards"),
          },
          "&[data-animate='floatup']": {
            opacity: 0,
            animation: "".concat(o.xp, " 350ms ease forwards"),
          },
          "&[data-animate='floatdown']": {
            opacity: 0,
            animation: "".concat(o.K0, " 350ms ease forwards"),
          },
          "&[data-scrolly='true']": { overflowY: "auto", ...c },
        };
      });
    },
    39687: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return s;
        },
        hU: function () {
          return l;
        },
        zx: function () {
          return o;
        },
      });
      var r = n(71259),
        a = n(189),
        i = n(7863);
      let o = (0, i.Sn)((e) => {
          let t = (0, r.v$)();
          return e.unstyled
            ? {}
            : {
                all: "unset",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: a.q0.md,
                padding: "".concat(a.JB.sm, " ").concat(a.JB.sm),
                fontSize: a.JB.sm,
                fontWeight: 500,
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                lineHeight: "normal",
                flexShrink: 0,
                transition: "border 200ms ease",
                gap: (e.gap && a.W0[e.gap]) || 0,
                width: e.fullWidth ? "100%" : void 0,
                textAlign: "center",
                maxWidth: "100%",
                background: (() => {
                  if (e.bg) return t.colors[e.bg];
                  switch (e.variant) {
                    case "primary":
                      return t.colors.primaryButtonBg;
                    case "accent":
                      return t.colors.accentButtonBg;
                    case "secondary":
                      return t.colors.secondaryButtonBg;
                    default:
                      return "none";
                  }
                })(),
                color: (() => {
                  switch (e.variant) {
                    case "primary":
                    default:
                      return t.colors.primaryButtonText;
                    case "accent":
                      return t.colors.accentButtonText;
                    case "secondary":
                    case "ghost":
                    case "outline":
                      return t.colors.secondaryButtonText;
                    case "link":
                      return t.colors.accentText;
                  }
                })(),
                "&:active": { transform: "translateY(1px)" },
                "&[disabled]": { cursor: "not-allowed" },
                "&[data-disabled='true']": {
                  background: t.colors.tertiaryBg,
                  color: t.colors.secondaryText,
                  borderColor: "transparent",
                  boxShadow: "none",
                  "&:hover": { borderColor: "transparent" },
                },
                ...("outline" === e.variant
                  ? {
                      border: "1px solid ".concat(t.colors.borderColor),
                      "&:hover": { borderColor: t.colors.accentText },
                      '&[aria-selected="true"]': {
                        borderColor: t.colors.accentText,
                      },
                    }
                  : "ghost" === e.variant
                  ? {
                      border: "1px solid transparent",
                      "&:hover": { borderColor: t.colors.accentText },
                    }
                  : "secondary" === e.variant
                  ? {
                      "&:hover": {
                        background: t.colors.secondaryButtonHoverBg,
                      },
                    }
                  : "link" === e.variant
                  ? { padding: 0, "&:hover": { color: t.colors.primaryText } }
                  : {}),
              };
        }),
        s = o.withComponent("a"),
        l = (0, i.Sn)((e) => {
          let t = (0, r.v$)();
          return {
            all: "unset",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: a.q0.sm,
            WebkitTapHighlightColor: "transparent",
            color: t.colors.secondaryIconColor,
            padding: "2px",
            transition: "background 200ms ease, color 200ms ease",
            "&:hover": {
              background: t.colors.secondaryIconHoverBg,
              color: t.colors.secondaryIconHoverColor,
            },
            "&[disabled]": { cursor: "not-allowed" },
          };
        });
    },
    98097: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return u;
        },
        x: function () {
          return c;
        },
      });
      var r = n(90132),
        a = n(63705),
        i = n(71259),
        o = n(189),
        s = n(7863),
        l = n(39687);
      let u = (0, s.xD)((e) => {
          let t = (0, i.v$)();
          return {
            margin: 0,
            fontWeight: 600,
            fontSize: o.JB.lg,
            color: t.colors.primaryText,
            lineHeight: 1.3,
            textAlign: "left",
          };
        }),
        c = (e) =>
          (0, r.jsx)(l.hU, {
            onClick: e.onClick,
            style: { transform: "translateX(-25%)", ...e.style },
            type: "button",
            children: (0, r.jsx)(a.wyc, { width: o.EA.md, height: o.EA.md }),
          });
    },
    45113: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return s;
        },
        x: function () {
          return o;
        },
      });
      var r = n(71259),
        a = n(189),
        i = n(7863);
      let o = (0, i.Fe)((e) => {
          let t = (0, r.v$)();
          return {
            fontSize: a.JB[e.size || "md"],
            color: t.colors[e.color || "secondaryText"],
            margin: 0,
            display: e.inline ? "inline" : "block",
            fontWeight: e.weight || 500,
            lineHeight: e.multiline ? 1.5 : "normal",
            textAlign: e.center ? "center" : "left",
            textWrap: e.balance ? "balance" : "inherit",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          };
        }),
        s = (0, i.ov)((e) => {
          let t = (0, r.v$)();
          return {
            all: "unset",
            cursor: "pointer",
            color: t.colors[e.color || "accentText"],
            fontSize: a.JB[e.size || "md"],
            textDecoration: "none",
            textAlign: e.center ? "center" : "left",
            display: e.inline ? "inline" : "block",
            fontWeight: e.weight || 500,
            lineHeight: "normal",
            transition: "color 0.2s ease",
            "&:hover": {
              color: t.colors[e.hoverColor || "primaryText"],
              textDecoration: "none",
            },
          };
        });
    },
    85360: function (e, t, n) {
      "use strict";
      n.d(t, {
        BX: function () {
          return c;
        },
        K0: function () {
          return u;
        },
        xp: function () {
          return l;
        },
      });
      var r = n(32836),
        a = n(88115);
      function i() {
        let e = (0, r._)([
          "\n  from {\n    opacity: 0;\n    transform: translateY(20%) scale(0.8) ;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        let e = (0, r._)([
          "\n  from {\n    opacity: 0;\n    transform: translateY(-20%) scale(0.8) ;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, r._)([
          "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let l = (0, a.F4)(i()),
        u = (0, a.F4)(o()),
        c = (0, a.F4)(s());
    },
    7863: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fe: function () {
          return s;
        },
        Fy: function () {
          return d;
        },
        Ld: function () {
          return i;
        },
        Qr: function () {
          return b;
        },
        Sn: function () {
          return u;
        },
        _B: function () {
          return f;
        },
        ar: function () {
          return c;
        },
        ex: function () {
          return o;
        },
        hc: function () {
          return p;
        },
        lx: function () {
          return a;
        },
        o3: function () {
          return m;
        },
        ov: function () {
          return l;
        },
        xD: function () {
          return h;
        },
      });
      var r = n(40768);
      let a = r.Z.div,
        i = r.Z.svg,
        o = r.Z.circle,
        s = r.Z.span,
        l = r.Z.a,
        u = r.Z.button,
        c = r.Z.label,
        d = r.Z.input,
        h = r.Z.h2,
        f = r.Z.p,
        p = r.Z.ul,
        b = r.Z.select,
        m = r.Z.option;
    },
    18135: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(90132),
        a = n(47299),
        i = n(64826);
      function o(e) {
        return (0, r.jsx)(i.W2, {
          style: { minHeight: e.height || "350px" },
          fullHeight: !0,
          flex: "row",
          center: "both",
          children: (0, r.jsx)(a.$, { size: "xl", color: "secondaryText" }),
        });
      }
    },
    38984: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return a;
        },
      });
      var r = n(34981);
      async function a(e, t) {
        let n = await e({
          method: "eth_getBalance",
          params: [t.address, t.blockTag || "latest"],
        });
        return (0, r.y_)(n);
      }
    },
    7542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          sendTransaction: function () {
            return i;
          },
        });
      var r = n(7447),
        a = n(89488);
      async function i(e) {
        let { account: t, transaction: i, gasless: o } = e;
        if (
          (t.onTransactionRequested && (await t.onTransactionRequested(i)),
          i.eip712)
        ) {
          let { sendEip712Transaction: e } = await n
            .e(94194)
            .then(n.bind(n, 94194));
          return e({ account: t, transaction: i });
        }
        let s = await (0, a.n)({ transaction: i, from: t });
        if (o) {
          let { sendGaslessTransaction: e } = await n
            .e(60641)
            .then(n.bind(n, 60641));
          return e({
            account: t,
            transaction: i,
            serializableTransaction: s,
            gasless: o,
          });
        }
        let l = await t.sendTransaction(s);
        return (
          (0, r.I)({
            address: t.address,
            transactionHash: l.transactionHash,
            chainId: i.chain.id,
          }),
          { ...l, chain: i.chain, client: i.client }
        );
      }
    },
    7447: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return o;
        },
        o: function () {
          return i;
        },
      });
      var r = n(25068);
      let a = new Map();
      function i(e) {
        let t = a.get(e);
        if (t) return t;
        let n = (0, r.M)([]);
        return a.set(e, n), n;
      }
      function o(e) {
        let { address: t, transactionHash: n, chainId: r } = e,
          o = i(t);
        o.setValue([...o.getValue(), { transactionHash: n, chainId: r }]),
          a.set(t, o);
      }
    },
    56628: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(19114),
        a = n(74467),
        i = n(6073);
      async function o(e) {
        let t = e.uri;
        if ((/eip155:/i.test(e.uri) && (t = await (0, i.F)(e)), !t))
          return null;
        let n = (0, a.xy)({ client: e.client, uri: t });
        return (await s({ client: e.client, uri: n })) ? n : null;
      }
      async function s(e) {
        try {
          let t = await (0, r.NX)(e.client)(e.uri, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return !!(null == e ? void 0 : e.startsWith("image/"));
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            Object.hasOwn(globalThis, "Image")
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
              (n.src = e.uri);
          });
        }
      }
    },
    94662: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return l;
        },
      });
      var r = n(38997),
        a = n(30968),
        i = n(76910),
        o = n(33147),
        s = n(4843);
      function l(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, r.ci)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let r = n[e],
            l = (function (e) {
              if (
                66 !== e.length ||
                0 !== e.indexOf("[") ||
                65 !== e.indexOf("]")
              )
                return null;
              let t = "0x".concat(e.slice(1, 65));
              return (0, s.v)(t) ? t : null;
            })(r),
            u = l ? (0, i.O0)(l) : (0, o.w)((0, i.qX)(r), "bytes");
          t = (0, o.w)((0, a.zo)([t, u]), "bytes");
        }
        return (0, r.ci)(t);
      }
    },
    49579: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(64843),
        a = n(76910);
      function i(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, a.qX)(t).byteLength + 2),
          i = 0,
          o = t.split(".");
        for (let e = 0; e < o.length; e++) {
          let t = o[e],
            l = (0, a.qX)(t);
          if (l.byteLength > 255) {
            var s;
            l = (0, a.qX)(((s = (0, r.d)(t)), "[".concat(s.slice(2), "]")));
          }
          (n[i] = l.length), n.set(l, i + 1), (i += l.length + 1);
        }
        return n.byteLength !== i + 1 ? n.slice(0, i + 1) : n;
      }
    },
    6073: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return s;
        },
        r: function () {
          return o;
        },
      });
      var r = n(29181),
        a = n(33210),
        i = n(73650);
      function o(e, t) {
        var n, r;
        switch (t.type) {
          case "ERC721":
            return {
              metadata: e,
              owner:
                null !== (n = null == t ? void 0 : t.owner) && void 0 !== n
                  ? n
                  : null,
              id: t.tokenId,
              tokenURI: t.tokenUri,
              type: t.type,
            };
          case "ERC1155":
            return {
              metadata: e,
              owner:
                null !== (r = null == t ? void 0 : t.owner) && void 0 !== r
                  ? r
                  : null,
              id: t.tokenId,
              tokenURI: t.tokenUri,
              type: t.type,
              supply: t.supply,
            };
          default:
            throw Error("Invalid NFT type");
        }
      }
      async function s(e) {
        var t, o;
        let s = e.uri;
        s.startsWith("did:nft:") &&
          (s = s.replace("did:nft:", "").replace(/_/g, "/"));
        let [l = "", u = "", c = ""] = s.split("/"),
          [d, h] = l.split(":"),
          [f, p] = u.split(":");
        if (!d || "eip155" !== d.toLowerCase())
          throw Error(
            'Invalid EIP namespace, expected EIP155, got: "'.concat(d, '"')
          );
        if (!h) throw Error("Chain ID not found");
        if (!p || !(0, i.UJ)(p)) throw Error("Contract address not found");
        if (!c) throw Error("Token ID not found");
        let b = (0, r.XY)(Number(h)),
          m = (0, a.u)({ client: e.client, chain: b, address: p });
        switch (f) {
          case "erc721": {
            let { getNFT: e } = await n.e(78288).then(n.bind(n, 78288));
            return null !==
              (t = (await e({ contract: m, tokenId: BigInt(c) })).metadata
                .image) && void 0 !== t
              ? t
              : null;
          }
          case "erc1155": {
            let { getNFT: e } = await n.e(2162).then(n.bind(n, 2162));
            return null !==
              (o = (await e({ contract: m, tokenId: BigInt(c) })).metadata
                .image) && void 0 !== o
              ? o
              : null;
          }
          default:
            throw Error(
              'Invalid ERC namespace, expected ERC721 or ERC1155, got: "'.concat(
                f,
                '"'
              )
            );
        }
      }
    },
    509: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.startsWith("http://") || e.startsWith("https://");
      }
      function a(e, t) {
        if (!r(e)) return i(e, t);
        let n = e;
        n.endsWith("/") || (n = "".concat(n, "/"));
        let a = encodeURIComponent(t);
        return { redirect: "".concat(n, "wc?uri=").concat(a), href: n };
      }
      function i(e, t) {
        if (r(e)) return a(e, t);
        let n = e;
        n.includes("://") ||
          ((n = e.replaceAll("/", "").replaceAll(":", "")),
          (n = "".concat(n, "://"))),
          n.endsWith("/") || (n = "".concat(n, "/"));
        let i = encodeURIComponent(t);
        return { redirect: "".concat(n, "wc?uri=").concat(i), href: n };
      }
      function o(e, t) {
        return r(e) ? a(e, t) : i(e, t);
      }
      function s(e, t) {
        return ""
          .concat(e.endsWith("/") ? e : "".concat(e, "/"), "tx/")
          .concat(t);
      }
      function l(e, t) {
        return ""
          .concat(e.endsWith("/") ? e : "".concat(e, "/"), "address/")
          .concat(t);
      }
      n.d(t, {
        Po: function () {
          return o;
        },
        Sk: function () {
          return s;
        },
        ic: function () {
          return l;
        },
      });
    },
    22463: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return a;
        },
      });
      var r = n(51495);
      async function a(e, t) {
        if ((0, r.J)(e)) {
          let { getEcosystemWalletInfo: r } = await n
            .e(94765)
            .then(n.bind(n, 94765));
          return t ? r(e).then((e) => e.image_id) : r(e);
        }
        switch (e) {
          case "smart":
            return t
              ? n
                  .e(55254)
                  .then(n.bind(n, 55254))
                  .then((e) => e.default)
              : n
                  .e(39931)
                  .then(n.bind(n, 39931))
                  .then((e) => e.wallet);
          case "inApp":
            return t
              ? n
                  .e(76904)
                  .then(n.bind(n, 76904))
                  .then((e) => e.default)
              : n
                  .e(28536)
                  .then(n.bind(n, 28536))
                  .then((e) => e.wallet);
          case "walletConnect":
            return t
              ? n
                  .e(75369)
                  .then(n.bind(n, 75369))
                  .then((e) => e.default)
              : n
                  .e(1041)
                  .then(n.bind(n, 1041))
                  .then((e) => e.wallet);
          case "embedded":
            return t
              ? n
                  .e(55369)
                  .then(n.bind(n, 55369))
                  .then((e) => e.default)
              : n
                  .e(32037)
                  .then(n.bind(n, 32037))
                  .then((e) => e.wallet);
          case "adapter":
            return t
              ? n
                  .e(63269)
                  .then(n.bind(n, 63269))
                  .then((e) => e.default)
              : n
                  .e(88468)
                  .then(n.bind(n, 88468))
                  .then((e) => e.wallet);
          case "io.metamask":
            return t
              ? n
                  .e(86332)
                  .then(n.bind(n, 86332))
                  .then((e) => e.default)
              : n
                  .e(34547)
                  .then(n.bind(n, 34547))
                  .then((e) => e.wallet);
          case "com.trustwallet.app":
            return t
              ? n
                  .e(70998)
                  .then(n.bind(n, 70998))
                  .then((e) => e.default)
              : n
                  .e(81920)
                  .then(n.bind(n, 81920))
                  .then((e) => e.wallet);
          case "com.okex.wallet":
            return t
              ? n
                  .e(69830)
                  .then(n.bind(n, 69830))
                  .then((e) => e.default)
              : n
                  .e(79468)
                  .then(n.bind(n, 79468))
                  .then((e) => e.wallet);
          case "com.bitget.web3":
            return t
              ? n
                  .e(60298)
                  .then(n.bind(n, 60298))
                  .then((e) => e.default)
              : n
                  .e(40386)
                  .then(n.bind(n, 40386))
                  .then((e) => e.wallet);
          case "com.binance":
            return t
              ? n
                  .e(82181)
                  .then(n.bind(n, 82181))
                  .then((e) => e.default)
              : n
                  .e(70332)
                  .then(n.bind(n, 70332))
                  .then((e) => e.wallet);
          case "org.uniswap":
            return t
              ? n
                  .e(13837)
                  .then(n.bind(n, 13837))
                  .then((e) => e.default)
              : n
                  .e(62866)
                  .then(n.bind(n, 62866))
                  .then((e) => e.wallet);
          case "com.safepal":
            return t
              ? n
                  .e(89900)
                  .then(n.bind(n, 89900))
                  .then((e) => e.default)
              : n
                  .e(41035)
                  .then(n.bind(n, 41035))
                  .then((e) => e.wallet);
          case "me.rainbow":
            return t
              ? n
                  .e(63149)
                  .then(n.bind(n, 63149))
                  .then((e) => e.default)
              : n
                  .e(29602)
                  .then(n.bind(n, 29602))
                  .then((e) => e.wallet);
          case "com.bybit":
            return t
              ? n
                  .e(80056)
                  .then(n.bind(n, 80056))
                  .then((e) => e.default)
              : n
                  .e(89528)
                  .then(n.bind(n, 89528))
                  .then((e) => e.wallet);
          case "pro.tokenpocket":
            return t
              ? n
                  .e(89073)
                  .then(n.bind(n, 89073))
                  .then((e) => e.default)
              : n
                  .e(5425)
                  .then(n.bind(n, 5425))
                  .then((e) => e.wallet);
          case "com.ledger":
            return t
              ? n
                  .e(71359)
                  .then(n.bind(n, 71359))
                  .then((e) => e.default)
              : n
                  .e(32721)
                  .then(n.bind(n, 32721))
                  .then((e) => e.wallet);
          case "xyz.timelesswallet":
            return t
              ? n
                  .e(30595)
                  .then(n.bind(n, 30595))
                  .then((e) => e.default)
              : n
                  .e(59268)
                  .then(n.bind(n, 59268))
                  .then((e) => e.wallet);
          case "global.safe":
            return t
              ? n
                  .e(47493)
                  .then(n.bind(n, 47493))
                  .then((e) => e.default)
              : n
                  .e(73835)
                  .then(n.bind(n, 73835))
                  .then((e) => e.wallet);
          case "io.zerion.wallet":
            return t
              ? n
                  .e(10738)
                  .then(n.bind(n, 10738))
                  .then((e) => e.default)
              : n
                  .e(10463)
                  .then(n.bind(n, 10463))
                  .then((e) => e.wallet);
          case "com.robinhood.wallet":
            return t
              ? n
                  .e(84483)
                  .then(n.bind(n, 84483))
                  .then((e) => e.default)
              : n
                  .e(54095)
                  .then(n.bind(n, 54095))
                  .then((e) => e.wallet);
          case "io.1inch.wallet":
            return t
              ? n
                  .e(38895)
                  .then(n.bind(n, 38895))
                  .then((e) => e.default)
              : n
                  .e(69351)
                  .then(n.bind(n, 69351))
                  .then((e) => e.wallet);
          case "com.crypto.wallet":
            return t
              ? n
                  .e(20069)
                  .then(n.bind(n, 20069))
                  .then((e) => e.default)
              : n
                  .e(65514)
                  .then(n.bind(n, 65514))
                  .then((e) => e.wallet);
          case "com.exodus":
            return t
              ? n
                  .e(14157)
                  .then(n.bind(n, 14157))
                  .then((e) => e.default)
              : n
                  .e(28470)
                  .then(n.bind(n, 28470))
                  .then((e) => e.wallet);
          case "xyz.argent":
            return t
              ? n
                  .e(53668)
                  .then(n.bind(n, 53668))
                  .then((e) => e.default)
              : n
                  .e(99474)
                  .then(n.bind(n, 99474))
                  .then((e) => e.wallet);
          case "im.token":
            return t
              ? n
                  .e(24307)
                  .then(n.bind(n, 24307))
                  .then((e) => e.default)
              : n
                  .e(83785)
                  .then(n.bind(n, 83785))
                  .then((e) => e.wallet);
          case "com.blockchain":
            return t
              ? n
                  .e(99387)
                  .then(n.bind(n, 99387))
                  .then((e) => e.default)
              : n
                  .e(60490)
                  .then(n.bind(n, 60490))
                  .then((e) => e.wallet);
          case "io.magiceden.wallet":
            return t
              ? n
                  .e(93390)
                  .then(n.bind(n, 93390))
                  .then((e) => e.default)
              : n
                  .e(7099)
                  .then(n.bind(n, 7099))
                  .then((e) => e.wallet);
          case "com.kraken":
            return t
              ? n
                  .e(97271)
                  .then(n.bind(n, 97271))
                  .then((e) => e.default)
              : n
                  .e(72411)
                  .then(n.bind(n, 72411))
                  .then((e) => e.wallet);
          case "app.backpack":
            return t
              ? n
                  .e(22072)
                  .then(n.bind(n, 22072))
                  .then((e) => e.default)
              : n
                  .e(73235)
                  .then(n.bind(n, 73235))
                  .then((e) => e.wallet);
          case "com.zengo":
            return t
              ? n
                  .e(21386)
                  .then(n.bind(n, 21386))
                  .then((e) => e.default)
              : n
                  .e(14769)
                  .then(n.bind(n, 14769))
                  .then((e) => e.wallet);
          case "com.mewwallet":
            return t
              ? n
                  .e(55335)
                  .then(n.bind(n, 55335))
                  .then((e) => e.default)
              : n
                  .e(44385)
                  .then(n.bind(n, 44385))
                  .then((e) => e.wallet);
          case "app.phantom":
            return t
              ? n
                  .e(96928)
                  .then(n.bind(n, 96928))
                  .then((e) => e.default)
              : n
                  .e(10532)
                  .then(n.bind(n, 10532))
                  .then((e) => e.wallet);
          case "com.fireblocks":
            return t
              ? n
                  .e(19579)
                  .then(n.bind(n, 19579))
                  .then((e) => e.default)
              : n
                  .e(63750)
                  .then(n.bind(n, 63750))
                  .then((e) => e.wallet);
          case "org.mathwallet":
            return t
              ? n
                  .e(66919)
                  .then(n.bind(n, 66919))
                  .then((e) => e.default)
              : n
                  .e(56196)
                  .then(n.bind(n, 56196))
                  .then((e) => e.wallet);
          case "com.alphawallet":
            return t
              ? n
                  .e(67700)
                  .then(n.bind(n, 67700))
                  .then((e) => e.default)
              : n
                  .e(737)
                  .then(n.bind(n, 737))
                  .then((e) => e.wallet);
          case "com.roninchain.wallet":
            return t
              ? n
                  .e(11609)
                  .then(n.bind(n, 11609))
                  .then((e) => e.default)
              : n
                  .e(30791)
                  .then(n.bind(n, 30791))
                  .then((e) => e.wallet);
          case "com.unstoppabledomains":
            return t
              ? n
                  .e(28904)
                  .then(n.bind(n, 28904))
                  .then((e) => e.default)
              : n
                  .e(15762)
                  .then(n.bind(n, 15762))
                  .then((e) => e.wallet);
          case "app.keyring":
            return t
              ? n
                  .e(68586)
                  .then(n.bind(n, 68586))
                  .then((e) => e.default)
              : n
                  .e(25638)
                  .then(n.bind(n, 25638))
                  .then((e) => e.wallet);
          case "xyz.frontier.wallet":
            return t
              ? n
                  .e(81107)
                  .then(n.bind(n, 81107))
                  .then((e) => e.default)
              : n
                  .e(59662)
                  .then(n.bind(n, 59662))
                  .then((e) => e.wallet);
          case "app.omni":
            return t
              ? n
                  .e(96975)
                  .then(n.bind(n, 96975))
                  .then((e) => e.default)
              : n
                  .e(21761)
                  .then(n.bind(n, 21761))
                  .then((e) => e.wallet);
          case "technology.obvious":
            return t
              ? n
                  .e(50544)
                  .then(n.bind(n, 50544))
                  .then((e) => e.default)
              : n
                  .e(49406)
                  .then(n.bind(n, 49406))
                  .then((e) => e.wallet);
          case "com.ambire":
            return t
              ? n
                  .e(69151)
                  .then(n.bind(n, 69151))
                  .then((e) => e.default)
              : n
                  .e(83951)
                  .then(n.bind(n, 83951))
                  .then((e) => e.wallet);
          case "com.mtpelerin":
            return t
              ? n
                  .e(34750)
                  .then(n.bind(n, 34750))
                  .then((e) => e.default)
              : n
                  .e(70031)
                  .then(n.bind(n, 70031))
                  .then((e) => e.wallet);
          case "io.internetmoney":
            return t
              ? n
                  .e(81990)
                  .then(n.bind(n, 81990))
                  .then((e) => e.default)
              : n
                  .e(32900)
                  .then(n.bind(n, 52717))
                  .then((e) => e.wallet);
          case "app.walletnow":
            return t
              ? n
                  .e(28059)
                  .then(n.bind(n, 28059))
                  .then((e) => e.default)
              : n
                  .e(44916)
                  .then(n.bind(n, 44916))
                  .then((e) => e.wallet);
          case "com.bitcoin":
            return t
              ? n
                  .e(71634)
                  .then(n.bind(n, 71634))
                  .then((e) => e.default)
              : n
                  .e(81626)
                  .then(n.bind(n, 81626))
                  .then((e) => e.wallet);
          case "io.alpha-u.wallet.web":
            return t
              ? n
                  .e(29285)
                  .then(n.bind(n, 29285))
                  .then((e) => e.default)
              : n
                  .e(16190)
                  .then(n.bind(n, 16190))
                  .then((e) => e.wallet);
          case "com.coin98":
            return t
              ? n
                  .e(119)
                  .then(n.bind(n, 119))
                  .then((e) => e.default)
              : n
                  .e(7607)
                  .then(n.bind(n, 7607))
                  .then((e) => e.wallet);
          case "io.myabcwallet":
            return t
              ? n
                  .e(26870)
                  .then(n.bind(n, 26870))
                  .then((e) => e.default)
              : n
                  .e(78442)
                  .then(n.bind(n, 78442))
                  .then((e) => e.wallet);
          case "co.arculus":
            return t
              ? n
                  .e(89812)
                  .then(n.bind(n, 89812))
                  .then((e) => e.default)
              : n
                  .e(49627)
                  .then(n.bind(n, 49627))
                  .then((e) => e.wallet);
          case "com.opera":
            return t
              ? n
                  .e(89867)
                  .then(n.bind(n, 89867))
                  .then((e) => e.default)
              : n
                  .e(89586)
                  .then(n.bind(n, 89586))
                  .then((e) => e.wallet);
          case "com.chain":
            return t
              ? n
                  .e(47473)
                  .then(n.bind(n, 47473))
                  .then((e) => e.default)
              : n
                  .e(54559)
                  .then(n.bind(n, 54559))
                  .then((e) => e.wallet);
          case "io.huddln":
            return t
              ? n
                  .e(64360)
                  .then(n.bind(n, 64360))
                  .then((e) => e.default)
              : n
                  .e(5618)
                  .then(n.bind(n, 5618))
                  .then((e) => e.wallet);
          case "com.get-verso":
            return t
              ? n
                  .e(91877)
                  .then(n.bind(n, 91877))
                  .then((e) => e.default)
              : n
                  .e(43239)
                  .then(n.bind(n, 43239))
                  .then((e) => e.wallet);
          case "me.haha":
            return t
              ? n
                  .e(84125)
                  .then(n.bind(n, 84125))
                  .then((e) => e.default)
              : n
                  .e(64653)
                  .then(n.bind(n, 64653))
                  .then((e) => e.wallet);
          case "pk.modular":
            return t
              ? n
                  .e(73552)
                  .then(n.bind(n, 73552))
                  .then((e) => e.default)
              : n
                  .e(26183)
                  .then(n.bind(n, 26183))
                  .then((e) => e.wallet);
          case "org.kelp":
            return t
              ? n
                  .e(68311)
                  .then(n.bind(n, 68311))
                  .then((e) => e.default)
              : n
                  .e(58717)
                  .then(n.bind(n, 58717))
                  .then((e) => e.wallet);
          case "io.clingon":
            return t
              ? n
                  .e(66915)
                  .then(n.bind(n, 66915))
                  .then((e) => e.default)
              : n
                  .e(26620)
                  .then(n.bind(n, 26620))
                  .then((e) => e.wallet);
          case "com.broearn":
            return t
              ? n
                  .e(30636)
                  .then(n.bind(n, 30636))
                  .then((e) => e.default)
              : n
                  .e(35215)
                  .then(n.bind(n, 35215))
                  .then((e) => e.wallet);
          case "com.coinomi":
            return t
              ? n
                  .e(62159)
                  .then(n.bind(n, 62159))
                  .then((e) => e.default)
              : n
                  .e(90994)
                  .then(n.bind(n, 90994))
                  .then((e) => e.wallet);
          case "com.ripio":
            return t
              ? n
                  .e(78797)
                  .then(n.bind(n, 78797))
                  .then((e) => e.default)
              : n
                  .e(19470)
                  .then(n.bind(n, 19470))
                  .then((e) => e.wallet);
          case "com.sabay.wallet":
            return t
              ? n
                  .e(95999)
                  .then(n.bind(n, 95999))
                  .then((e) => e.default)
              : n
                  .e(81924)
                  .then(n.bind(n, 81924))
                  .then((e) => e.wallet);
          case "io.tokoin":
            return t
              ? n
                  .e(56182)
                  .then(n.bind(n, 56182))
                  .then((e) => e.default)
              : n
                  .e(94552)
                  .then(n.bind(n, 94552))
                  .then((e) => e.wallet);
          case "world.fncy":
            return t
              ? n
                  .e(84476)
                  .then(n.bind(n, 84476))
                  .then((e) => e.default)
              : n
                  .e(41800)
                  .then(n.bind(n, 41800))
                  .then((e) => e.wallet);
          case "io.copiosa":
            return t
              ? n
                  .e(17779)
                  .then(n.bind(n, 17779))
                  .then((e) => e.default)
              : n
                  .e(46623)
                  .then(n.bind(n, 46623))
                  .then((e) => e.wallet);
          case "com.liberawallet":
            return t
              ? n
                  .e(55120)
                  .then(n.bind(n, 55120))
                  .then((e) => e.default)
              : n
                  .e(3222)
                  .then(n.bind(n, 3222))
                  .then((e) => e.wallet);
          case "io.certhis":
            return t
              ? n
                  .e(12420)
                  .then(n.bind(n, 12420))
                  .then((e) => e.default)
              : n
                  .e(48010)
                  .then(n.bind(n, 48010))
                  .then((e) => e.wallet);
          case "com.burritowallet":
            return t
              ? n
                  .e(14975)
                  .then(n.bind(n, 14975))
                  .then((e) => e.default)
              : n
                  .e(70050)
                  .then(n.bind(n, 70050))
                  .then((e) => e.wallet);
          case "io.ancrypto":
            return t
              ? n
                  .e(9870)
                  .then(n.bind(n, 9870))
                  .then((e) => e.default)
              : n
                  .e(745)
                  .then(n.bind(n, 745))
                  .then((e) => e.wallet);
          case "network.cvl":
            return t
              ? n
                  .e(9797)
                  .then(n.bind(n, 9797))
                  .then((e) => e.default)
              : n
                  .e(68191)
                  .then(n.bind(n, 68191))
                  .then((e) => e.wallet);
          case "io.cypherhq":
            return t
              ? n
                  .e(31164)
                  .then(n.bind(n, 73801))
                  .then((e) => e.default)
              : n
                  .e(89778)
                  .then(n.bind(n, 89778))
                  .then((e) => e.wallet);
          case "app.status":
            return t
              ? n
                  .e(56178)
                  .then(n.bind(n, 56178))
                  .then((e) => e.default)
              : n
                  .e(15042)
                  .then(n.bind(n, 15042))
                  .then((e) => e.wallet);
          case "io.enjin":
            return t
              ? n
                  .e(6260)
                  .then(n.bind(n, 6260))
                  .then((e) => e.default)
              : n
                  .e(85144)
                  .then(n.bind(n, 85144))
                  .then((e) => e.wallet);
          case "io.trinity-tech":
            return t
              ? n
                  .e(41916)
                  .then(n.bind(n, 41916))
                  .then((e) => e.default)
              : n
                  .e(86471)
                  .then(n.bind(n, 86471))
                  .then((e) => e.wallet);
          case "app.everspace":
            return t
              ? n
                  .e(63571)
                  .then(n.bind(n, 63571))
                  .then((e) => e.default)
              : n
                  .e(42137)
                  .then(n.bind(n, 42137))
                  .then((e) => e.wallet);
          case "io.kriptomat":
            return t
              ? n
                  .e(10841)
                  .then(n.bind(n, 10841))
                  .then((e) => e.default)
              : n
                  .e(42550)
                  .then(n.bind(n, 42550))
                  .then((e) => e.wallet);
          case "io.oxalus":
            return t
              ? n
                  .e(88920)
                  .then(n.bind(n, 88920))
                  .then((e) => e.default)
              : n
                  .e(13959)
                  .then(n.bind(n, 13959))
                  .then((e) => e.wallet);
          case "org.thetatoken":
            return t
              ? n
                  .e(71970)
                  .then(n.bind(n, 71970))
                  .then((e) => e.default)
              : n
                  .e(45101)
                  .then(n.bind(n, 45101))
                  .then((e) => e.wallet);
          case "io.leapwallet":
            return t
              ? n
                  .e(92061)
                  .then(n.bind(n, 92061))
                  .then((e) => e.default)
              : n
                  .e(48684)
                  .then(n.bind(n, 48684))
                  .then((e) => e.wallet);
          case "finance.islamicoin":
            return t
              ? n
                  .e(44990)
                  .then(n.bind(n, 44990))
                  .then((e) => e.default)
              : n
                  .e(7984)
                  .then(n.bind(n, 7984))
                  .then((e) => e.wallet);
          case "xyz.coca":
            return t
              ? n
                  .e(12625)
                  .then(n.bind(n, 12625))
                  .then((e) => e.default)
              : n
                  .e(48599)
                  .then(n.bind(n, 48599))
                  .then((e) => e.wallet);
          case "com.monarchwallet":
            return t
              ? n
                  .e(98115)
                  .then(n.bind(n, 98115))
                  .then((e) => e.default)
              : n
                  .e(47710)
                  .then(n.bind(n, 47710))
                  .then((e) => e.wallet);
          case "co.filwallet":
            return t
              ? n
                  .e(1486)
                  .then(n.bind(n, 1486))
                  .then((e) => e.default)
              : n
                  .e(28842)
                  .then(n.bind(n, 28842))
                  .then((e) => e.wallet);
          case "com.valoraapp":
            return t
              ? n
                  .e(31893)
                  .then(n.bind(n, 31893))
                  .then((e) => e.default)
              : n
                  .e(73564)
                  .then(n.bind(n, 73564))
                  .then((e) => e.wallet);
          case "com.coincircle":
            return t
              ? n
                  .e(61270)
                  .then(n.bind(n, 61270))
                  .then((e) => e.default)
              : n
                  .e(14266)
                  .then(n.bind(n, 14266))
                  .then((e) => e.wallet);
          case "money.snowball":
            return t
              ? n
                  .e(48679)
                  .then(n.bind(n, 48679))
                  .then((e) => e.default)
              : n
                  .e(14810)
                  .then(n.bind(n, 14810))
                  .then((e) => e.wallet);
          case "io.paraswap":
            return t
              ? n
                  .e(27646)
                  .then(n.bind(n, 27646))
                  .then((e) => e.default)
              : n
                  .e(23232)
                  .then(n.bind(n, 23232))
                  .then((e) => e.wallet);
          case "network.mrhb":
            return t
              ? n
                  .e(53061)
                  .then(n.bind(n, 53061))
                  .then((e) => e.default)
              : n
                  .e(80075)
                  .then(n.bind(n, 80075))
                  .then((e) => e.wallet);
          case "com.apollox":
            return t
              ? n
                  .e(92962)
                  .then(n.bind(n, 92962))
                  .then((e) => e.default)
              : n
                  .e(91067)
                  .then(n.bind(n, 91067))
                  .then((e) => e.wallet);
          case "com.ennowallet":
            return t
              ? n
                  .e(96460)
                  .then(n.bind(n, 96460))
                  .then((e) => e.default)
              : n
                  .e(66972)
                  .then(n.bind(n, 66972))
                  .then((e) => e.wallet);
          case "io.loopring.wallet":
            return t
              ? n
                  .e(66454)
                  .then(n.bind(n, 66454))
                  .then((e) => e.default)
              : n
                  .e(39080)
                  .then(n.bind(n, 39080))
                  .then((e) => e.wallet);
          case "com.bee":
            return t
              ? n
                  .e(1852)
                  .then(n.bind(n, 1852))
                  .then((e) => e.default)
              : n
                  .e(64274)
                  .then(n.bind(n, 64274))
                  .then((e) => e.wallet);
          case "cc.localtrade.lab":
            return t
              ? n
                  .e(16837)
                  .then(n.bind(n, 16837))
                  .then((e) => e.default)
              : n
                  .e(95655)
                  .then(n.bind(n, 95655))
                  .then((e) => e.wallet);
          case "com.xcapit":
            return t
              ? n
                  .e(90222)
                  .then(n.bind(n, 90222))
                  .then((e) => e.default)
              : n
                  .e(73954)
                  .then(n.bind(n, 73954))
                  .then((e) => e.wallet);
          case "io.safematrix":
            return t
              ? n
                  .e(7484)
                  .then(n.bind(n, 7484))
                  .then((e) => e.default)
              : n
                  .e(40466)
                  .then(n.bind(n, 40466))
                  .then((e) => e.wallet);
          case "com.neonwallet":
            return t
              ? n
                  .e(85751)
                  .then(n.bind(n, 85751))
                  .then((e) => e.default)
              : n
                  .e(48917)
                  .then(n.bind(n, 48917))
                  .then((e) => e.wallet);
          case "xyz.sequence":
            return t
              ? n
                  .e(33997)
                  .then(n.bind(n, 33997))
                  .then((e) => e.default)
              : n
                  .e(78179)
                  .then(n.bind(n, 78179))
                  .then((e) => e.wallet);
          case "app.linen":
            return t
              ? n
                  .e(77800)
                  .then(n.bind(n, 77800))
                  .then((e) => e.default)
              : n
                  .e(75647)
                  .then(n.bind(n, 75647))
                  .then((e) => e.wallet);
          case "io.nabox":
            return t
              ? n
                  .e(17845)
                  .then(n.bind(n, 17845))
                  .then((e) => e.default)
              : n
                  .e(72254)
                  .then(n.bind(n, 72254))
                  .then((e) => e.wallet);
          case "net.spatium":
            return t
              ? n
                  .e(99189)
                  .then(n.bind(n, 99189))
                  .then((e) => e.default)
              : n
                  .e(25273)
                  .then(n.bind(n, 25273))
                  .then((e) => e.wallet);
          case "com.cryptnox":
            return t
              ? n
                  .e(50612)
                  .then(n.bind(n, 50612))
                  .then((e) => e.default)
              : n
                  .e(44640)
                  .then(n.bind(n, 44640))
                  .then((e) => e.wallet);
          case "com.rktechworks":
            return t
              ? n
                  .e(6626)
                  .then(n.bind(n, 6626))
                  .then((e) => e.default)
              : n
                  .e(61830)
                  .then(n.bind(n, 61830))
                  .then((e) => e.wallet);
          case "pro.assure":
            return t
              ? n
                  .e(78995)
                  .then(n.bind(n, 78995))
                  .then((e) => e.default)
              : n
                  .e(5121)
                  .then(n.bind(n, 5121))
                  .then((e) => e.wallet);
          case "trade.flooz.wallet":
            return t
              ? n
                  .e(14209)
                  .then(n.bind(n, 14209))
                  .then((e) => e.default)
              : n
                  .e(67712)
                  .then(n.bind(n, 67712))
                  .then((e) => e.wallet);
          case "app.keplr":
            return t
              ? n
                  .e(260)
                  .then(n.bind(n, 260))
                  .then((e) => e.default)
              : n
                  .e(1820)
                  .then(n.bind(n, 1820))
                  .then((e) => e.wallet);
          case "com.crossmint":
            return t
              ? n
                  .e(22213)
                  .then(n.bind(n, 22213))
                  .then((e) => e.default)
              : n
                  .e(98976)
                  .then(n.bind(n, 98976))
                  .then((e) => e.wallet);
          case "com.pierwallet":
            return t
              ? n
                  .e(1254)
                  .then(n.bind(n, 1254))
                  .then((e) => e.default)
              : n
                  .e(69041)
                  .then(n.bind(n, 69041))
                  .then((e) => e.wallet);
          case "app.core":
            return t
              ? n
                  .e(11929)
                  .then(n.bind(n, 11929))
                  .then((e) => e.default)
              : n
                  .e(62350)
                  .then(n.bind(n, 62350))
                  .then((e) => e.wallet);
          case "app.keeper-wallet":
            return t
              ? n
                  .e(9020)
                  .then(n.bind(n, 9020))
                  .then((e) => e.default)
              : n
                  .e(39535)
                  .then(n.bind(n, 39535))
                  .then((e) => e.wallet);
          case "com.dcentwallet":
            return t
              ? n
                  .e(33545)
                  .then(n.bind(n, 33545))
                  .then((e) => e.default)
              : n
                  .e(98533)
                  .then(n.bind(n, 98533))
                  .then((e) => e.wallet);
          case "com.withpaper":
            return t
              ? n
                  .e(18853)
                  .then(n.bind(n, 18853))
                  .then((e) => e.default)
              : n
                  .e(65417)
                  .then(n.bind(n, 65417))
                  .then((e) => e.wallet);
          case "finance.klever":
            return t
              ? n
                  .e(22840)
                  .then(n.bind(n, 22840))
                  .then((e) => e.default)
              : n
                  .e(52594)
                  .then(n.bind(n, 52594))
                  .then((e) => e.wallet);
          case "app.edge":
            return t
              ? n
                  .e(34663)
                  .then(n.bind(n, 34663))
                  .then((e) => e.default)
              : n
                  .e(73143)
                  .then(n.bind(n, 73143))
                  .then((e) => e.wallet);
          case "com.neftipedia":
            return t
              ? n
                  .e(51007)
                  .then(n.bind(n, 51007))
                  .then((e) => e.default)
              : n
                  .e(15386)
                  .then(n.bind(n, 15386))
                  .then((e) => e.wallet);
          case "io.goldbit":
            return t
              ? n
                  .e(18353)
                  .then(n.bind(n, 18353))
                  .then((e) => e.default)
              : n
                  .e(87701)
                  .then(n.bind(n, 87701))
                  .then((e) => e.wallet);
          case "com.coingrig":
            return t
              ? n
                  .e(45589)
                  .then(n.bind(n, 45589))
                  .then((e) => e.default)
              : n
                  .e(91146)
                  .then(n.bind(n, 91146))
                  .then((e) => e.wallet);
          case "io.xfun":
            return t
              ? n
                  .e(22485)
                  .then(n.bind(n, 22485))
                  .then((e) => e.default)
              : n
                  .e(35573)
                  .then(n.bind(n, 35573))
                  .then((e) => e.wallet);
          case "io.ricewallet":
            return t
              ? n
                  .e(50940)
                  .then(n.bind(n, 50940))
                  .then((e) => e.default)
              : n
                  .e(91467)
                  .then(n.bind(n, 91467))
                  .then((e) => e.wallet);
          case "com.antiersolutions":
            return t
              ? n
                  .e(89370)
                  .then(n.bind(n, 89370))
                  .then((e) => e.default)
              : n
                  .e(22016)
                  .then(n.bind(n, 22016))
                  .then((e) => e.wallet);
          case "io.okse":
            return t
              ? n
                  .e(30918)
                  .then(n.bind(n, 30918))
                  .then((e) => e.default)
              : n
                  .e(76144)
                  .then(n.bind(n, 76144))
                  .then((e) => e.wallet);
          case "com.aktionariat":
            return t
              ? n
                  .e(64694)
                  .then(n.bind(n, 64694))
                  .then((e) => e.default)
              : n
                  .e(39514)
                  .then(n.bind(n, 39514))
                  .then((e) => e.wallet);
          case "com.itoken":
            return t
              ? n
                  .e(83795)
                  .then(n.bind(n, 83795))
                  .then((e) => e.default)
              : n
                  .e(29833)
                  .then(n.bind(n, 29833))
                  .then((e) => e.wallet);
          case "io.zelus":
            return t
              ? n
                  .e(20318)
                  .then(n.bind(n, 20318))
                  .then((e) => e.default)
              : n
                  .e(4298)
                  .then(n.bind(n, 4298))
                  .then((e) => e.wallet);
          case "com.cardstack":
            return t
              ? n
                  .e(87398)
                  .then(n.bind(n, 87398))
                  .then((e) => e.default)
              : n
                  .e(4871)
                  .then(n.bind(n, 4871))
                  .then((e) => e.wallet);
          case "com.paybolt":
            return t
              ? n
                  .e(38994)
                  .then(n.bind(n, 38994))
                  .then((e) => e.default)
              : n
                  .e(7905)
                  .then(n.bind(n, 7905))
                  .then((e) => e.wallet);
          case "org.arianee":
            return t
              ? n
                  .e(80063)
                  .then(n.bind(n, 80063))
                  .then((e) => e.default)
              : n
                  .e(62938)
                  .then(n.bind(n, 12833))
                  .then((e) => e.wallet);
          case "io.slavi":
            return t
              ? n
                  .e(1679)
                  .then(n.bind(n, 1679))
                  .then((e) => e.default)
              : n
                  .e(59741)
                  .then(n.bind(n, 59741))
                  .then((e) => e.wallet);
          case "com.plasma-wallet":
            return t
              ? n
                  .e(80320)
                  .then(n.bind(n, 80320))
                  .then((e) => e.default)
              : n
                  .e(95641)
                  .then(n.bind(n, 95641))
                  .then((e) => e.wallet);
          case "tech.defiantapp":
            return t
              ? n
                  .e(93648)
                  .then(n.bind(n, 93648))
                  .then((e) => e.default)
              : n
                  .e(47334)
                  .then(n.bind(n, 47334))
                  .then((e) => e.wallet);
          case "cc.avacus":
            return t
              ? n
                  .e(41659)
                  .then(n.bind(n, 41659))
                  .then((e) => e.default)
              : n
                  .e(55191)
                  .then(n.bind(n, 55191))
                  .then((e) => e.wallet);
          case "org.bytebank":
            return t
              ? n
                  .e(30473)
                  .then(n.bind(n, 30473))
                  .then((e) => e.default)
              : n
                  .e(51194)
                  .then(n.bind(n, 51194))
                  .then((e) => e.wallet);
          case "com.coolbitx.cwsapp":
            return t
              ? n
                  .e(78238)
                  .then(n.bind(n, 78238))
                  .then((e) => e.default)
              : n
                  .e(7513)
                  .then(n.bind(n, 7513))
                  .then((e) => e.wallet);
          case "com.optowallet":
            return t
              ? n
                  .e(2051)
                  .then(n.bind(n, 2051))
                  .then((e) => e.default)
              : n
                  .e(91100)
                  .then(n.bind(n, 91100))
                  .then((e) => e.wallet);
          case "network.trustkeys":
            return t
              ? n
                  .e(68917)
                  .then(n.bind(n, 68917))
                  .then((e) => e.default)
              : n
                  .e(63075)
                  .then(n.bind(n, 63075))
                  .then((e) => e.wallet);
          case "app.beewallet":
            return t
              ? n
                  .e(76463)
                  .then(n.bind(n, 76463))
                  .then((e) => e.default)
              : n
                  .e(38159)
                  .then(n.bind(n, 38159))
                  .then((e) => e.wallet);
          case "io.ttmwallet":
            return t
              ? n
                  .e(44775)
                  .then(n.bind(n, 44775))
                  .then((e) => e.default)
              : n
                  .e(63340)
                  .then(n.bind(n, 63340))
                  .then((e) => e.wallet);
          case "io.pltwallet":
            return t
              ? n
                  .e(51068)
                  .then(n.bind(n, 26232))
                  .then((e) => e.default)
              : n
                  .e(50100)
                  .then(n.bind(n, 50100))
                  .then((e) => e.wallet);
          case "io.helixid":
            return t
              ? n
                  .e(54957)
                  .then(n.bind(n, 54957))
                  .then((e) => e.default)
              : n
                  .e(42265)
                  .then(n.bind(n, 42265))
                  .then((e) => e.wallet);
          case "it.airgap":
            return t
              ? n
                  .e(79148)
                  .then(n.bind(n, 79148))
                  .then((e) => e.default)
              : n
                  .e(91590)
                  .then(n.bind(n, 91590))
                  .then((e) => e.wallet);
          case "app.qubic.wallet":
            return t
              ? n
                  .e(21925)
                  .then(n.bind(n, 21925))
                  .then((e) => e.default)
              : n
                  .e(80433)
                  .then(n.bind(n, 80433))
                  .then((e) => e.wallet);
          case "com.holdstation":
            return t
              ? n
                  .e(23059)
                  .then(n.bind(n, 23059))
                  .then((e) => e.default)
              : n
                  .e(86106)
                  .then(n.bind(n, 86106))
                  .then((e) => e.wallet);
          case "com.saakuru.app":
            return t
              ? n
                  .e(7514)
                  .then(n.bind(n, 7514))
                  .then((e) => e.default)
              : n
                  .e(42528)
                  .then(n.bind(n, 42528))
                  .then((e) => e.wallet);
          case "com.3swallet":
            return t
              ? n
                  .e(83527)
                  .then(n.bind(n, 83527))
                  .then((e) => e.default)
              : n
                  .e(51005)
                  .then(n.bind(n, 51005))
                  .then((e) => e.wallet);
          case "com.payperless":
            return t
              ? n
                  .e(31709)
                  .then(n.bind(n, 31709))
                  .then((e) => e.default)
              : n
                  .e(45829)
                  .then(n.bind(n, 45829))
                  .then((e) => e.wallet);
          case "digital.minerva":
            return t
              ? n
                  .e(68690)
                  .then(n.bind(n, 68690))
                  .then((e) => e.default)
              : n
                  .e(93333)
                  .then(n.bind(n, 93333))
                  .then((e) => e.wallet);
          case "finance.voltage":
            return t
              ? n
                  .e(50598)
                  .then(n.bind(n, 50598))
                  .then((e) => e.default)
              : n
                  .e(35933)
                  .then(n.bind(n, 35933))
                  .then((e) => e.wallet);
          case "com.lif3":
            return t
              ? n
                  .e(57816)
                  .then(n.bind(n, 57816))
                  .then((e) => e.default)
              : n
                  .e(13725)
                  .then(n.bind(n, 13725))
                  .then((e) => e.wallet);
          case "net.shinobi-wallet":
            return t
              ? n
                  .e(26190)
                  .then(n.bind(n, 26190))
                  .then((e) => e.default)
              : n
                  .e(59907)
                  .then(n.bind(n, 59907))
                  .then((e) => e.wallet);
          case "com.kryptogo":
            return t
              ? n
                  .e(17361)
                  .then(n.bind(n, 17361))
                  .then((e) => e.default)
              : n
                  .e(85463)
                  .then(n.bind(n, 85463))
                  .then((e) => e.wallet);
          case "com.feralfile.app":
            return t
              ? n
                  .e(82889)
                  .then(n.bind(n, 82889))
                  .then((e) => e.default)
              : n
                  .e(89964)
                  .then(n.bind(n, 89964))
                  .then((e) => e.wallet);
          case "com.bifrostwallet":
            return t
              ? n
                  .e(52946)
                  .then(n.bind(n, 52946))
                  .then((e) => e.default)
              : n
                  .e(5277)
                  .then(n.bind(n, 5277))
                  .then((e) => e.wallet);
          case "com.nufinetes":
            return t
              ? n
                  .e(39561)
                  .then(n.bind(n, 39561))
                  .then((e) => e.default)
              : n
                  .e(6826)
                  .then(n.bind(n, 6826))
                  .then((e) => e.wallet);
          case "io.wallet3":
            return t
              ? n
                  .e(65282)
                  .then(n.bind(n, 65282))
                  .then((e) => e.default)
              : n
                  .e(33954)
                  .then(n.bind(n, 33954))
                  .then((e) => e.wallet);
          case "com.abra":
            return t
              ? n
                  .e(86086)
                  .then(n.bind(n, 86086))
                  .then((e) => e.default)
              : n
                  .e(67452)
                  .then(n.bind(n, 67452))
                  .then((e) => e.wallet);
          case "app.imem":
            return t
              ? n
                  .e(70692)
                  .then(n.bind(n, 70692))
                  .then((e) => e.default)
              : n
                  .e(78984)
                  .then(n.bind(n, 78984))
                  .then((e) => e.wallet);
          case "com.premanft":
            return t
              ? n
                  .e(97441)
                  .then(n.bind(n, 97441))
                  .then((e) => e.default)
              : n
                  .e(66387)
                  .then(n.bind(n, 66387))
                  .then((e) => e.wallet);
          case "so.onekey.app.wallet":
            return t
              ? n
                  .e(3458)
                  .then(n.bind(n, 3458))
                  .then((e) => e.default)
              : n
                  .e(38984)
                  .then(n.bind(n, 79935))
                  .then((e) => e.wallet);
          case "finance.slingshot":
            return t
              ? n
                  .e(59641)
                  .then(n.bind(n, 59641))
                  .then((e) => e.default)
              : n
                  .e(24913)
                  .then(n.bind(n, 24913))
                  .then((e) => e.wallet);
          case "com.kriptonio":
            return t
              ? n
                  .e(35752)
                  .then(n.bind(n, 35752))
                  .then((e) => e.default)
              : n
                  .e(61807)
                  .then(n.bind(n, 61807))
                  .then((e) => e.wallet);
          case "xyz.ctrl":
            return t
              ? n
                  .e(48503)
                  .then(n.bind(n, 48503))
                  .then((e) => e.default)
              : n
                  .e(10914)
                  .then(n.bind(n, 10914))
                  .then((e) => e.wallet);
          case "io.streakk":
            return t
              ? n
                  .e(73203)
                  .then(n.bind(n, 73203))
                  .then((e) => e.default)
              : n
                  .e(20575)
                  .then(n.bind(n, 20575))
                  .then((e) => e.wallet);
          case "com.saitamatoken":
            return t
              ? n
                  .e(25702)
                  .then(n.bind(n, 25702))
                  .then((e) => e.default)
              : n
                  .e(30300)
                  .then(n.bind(n, 30300))
                  .then((e) => e.wallet);
          case "com.flowfoundation.wallet":
            return t
              ? n
                  .e(16021)
                  .then(n.bind(n, 16021))
                  .then((e) => e.default)
              : n
                  .e(66922)
                  .then(n.bind(n, 66922))
                  .then((e) => e.wallet);
          case "io.hippowallet":
            return t
              ? n
                  .e(34051)
                  .then(n.bind(n, 34051))
                  .then((e) => e.default)
              : n
                  .e(74936)
                  .then(n.bind(n, 74936))
                  .then((e) => e.wallet);
          case "io.cosmostation":
            return t
              ? n
                  .e(64664)
                  .then(n.bind(n, 64664))
                  .then((e) => e.default)
              : n
                  .e(65054)
                  .then(n.bind(n, 65054))
                  .then((e) => e.wallet);
          case "org.bitizen":
            return t
              ? n
                  .e(32927)
                  .then(n.bind(n, 32927))
                  .then((e) => e.default)
              : n
                  .e(12647)
                  .then(n.bind(n, 12647))
                  .then((e) => e.wallet);
          case "io.blocto":
            return t
              ? n
                  .e(72431)
                  .then(n.bind(n, 72431))
                  .then((e) => e.default)
              : n
                  .e(32678)
                  .then(n.bind(n, 32678))
                  .then((e) => e.wallet);
          case "com.humbl":
            return t
              ? n
                  .e(78648)
                  .then(n.bind(n, 78648))
                  .then((e) => e.default)
              : n
                  .e(77581)
                  .then(n.bind(n, 77581))
                  .then((e) => e.wallet);
          case "io.passpay":
            return t
              ? n
                  .e(87538)
                  .then(n.bind(n, 87538))
                  .then((e) => e.default)
              : n
                  .e(37782)
                  .then(n.bind(n, 37782))
                  .then((e) => e.wallet);
          case "app.ultimate":
            return t
              ? n
                  .e(10324)
                  .then(n.bind(n, 10324))
                  .then((e) => e.default)
              : n
                  .e(92612)
                  .then(n.bind(n, 92612))
                  .then((e) => e.wallet);
          case "me.astrox":
            return t
              ? n
                  .e(97758)
                  .then(n.bind(n, 97758))
                  .then((e) => e.default)
              : n
                  .e(18509)
                  .then(n.bind(n, 18509))
                  .then((e) => e.wallet);
          case "org.thorwallet":
            return t
              ? n
                  .e(60085)
                  .then(n.bind(n, 60085))
                  .then((e) => e.default)
              : n
                  .e(8124)
                  .then(n.bind(n, 8124))
                  .then((e) => e.wallet);
          case "app.fizzwallet":
            return t
              ? n
                  .e(51964)
                  .then(n.bind(n, 51964))
                  .then((e) => e.default)
              : n
                  .e(77914)
                  .then(n.bind(n, 77914))
                  .then((e) => e.wallet);
          case "app.stickey":
            return t
              ? n
                  .e(71386)
                  .then(n.bind(n, 71386))
                  .then((e) => e.default)
              : n
                  .e(45514)
                  .then(n.bind(n, 45514))
                  .then((e) => e.wallet);
          case "com.klipwallet":
            return t
              ? n
                  .e(18731)
                  .then(n.bind(n, 18731))
                  .then((e) => e.default)
              : n
                  .e(34967)
                  .then(n.bind(n, 34967))
                  .then((e) => e.wallet);
          case "app.coinstats":
            return t
              ? n
                  .e(39378)
                  .then(n.bind(n, 39378))
                  .then((e) => e.default)
              : n
                  .e(75267)
                  .then(n.bind(n, 75267))
                  .then((e) => e.wallet);
          case "land.liker":
            return t
              ? n
                  .e(40082)
                  .then(n.bind(n, 40082))
                  .then((e) => e.default)
              : n
                  .e(78870)
                  .then(n.bind(n, 78870))
                  .then((e) => e.wallet);
          case "app.krystal":
            return t
              ? n
                  .e(21186)
                  .then(n.bind(n, 79831))
                  .then((e) => e.default)
              : n
                  .e(13123)
                  .then(n.bind(n, 13123))
                  .then((e) => e.wallet);
          case "fi.pillar":
            return t
              ? n
                  .e(50203)
                  .then(n.bind(n, 50203))
                  .then((e) => e.default)
              : n
                  .e(702)
                  .then(n.bind(n, 702))
                  .then((e) => e.wallet);
          case "io.harti":
            return t
              ? n
                  .e(73146)
                  .then(n.bind(n, 73146))
                  .then((e) => e.default)
              : n
                  .e(40511)
                  .then(n.bind(n, 40511))
                  .then((e) => e.wallet);
          case "net.stasis":
            return t
              ? n
                  .e(94071)
                  .then(n.bind(n, 94071))
                  .then((e) => e.default)
              : n
                  .e(61497)
                  .then(n.bind(n, 61497))
                  .then((e) => e.wallet);
          case "io.novawallet":
            return t
              ? n
                  .e(69666)
                  .then(n.bind(n, 69666))
                  .then((e) => e.default)
              : n
                  .e(99977)
                  .then(n.bind(n, 99977))
                  .then((e) => e.wallet);
          case "io.dttd":
            return t
              ? n
                  .e(54260)
                  .then(n.bind(n, 54260))
                  .then((e) => e.default)
              : n
                  .e(69275)
                  .then(n.bind(n, 69275))
                  .then((e) => e.wallet);
          case "com.foxwallet":
            return t
              ? n
                  .e(6080)
                  .then(n.bind(n, 78896))
                  .then((e) => e.default)
              : n
                  .e(77873)
                  .then(n.bind(n, 77873))
                  .then((e) => e.wallet);
          case "network.haqq":
            return t
              ? n
                  .e(64704)
                  .then(n.bind(n, 64704))
                  .then((e) => e.default)
              : n
                  .e(4847)
                  .then(n.bind(n, 4847))
                  .then((e) => e.wallet);
          case "com.tomi":
            return t
              ? n
                  .e(6764)
                  .then(n.bind(n, 6764))
                  .then((e) => e.default)
              : n
                  .e(97753)
                  .then(n.bind(n, 97753))
                  .then((e) => e.wallet);
          case "io.tradestrike":
            return t
              ? n
                  .e(84639)
                  .then(n.bind(n, 84639))
                  .then((e) => e.default)
              : n
                  .e(12175)
                  .then(n.bind(n, 12175))
                  .then((e) => e.wallet);
          case "app.subwallet":
            return t
              ? n
                  .e(17583)
                  .then(n.bind(n, 17583))
                  .then((e) => e.default)
              : n
                  .e(47466)
                  .then(n.bind(n, 47466))
                  .then((e) => e.wallet);
          case "tech.okto":
            return t
              ? n
                  .e(68681)
                  .then(n.bind(n, 68681))
                  .then((e) => e.default)
              : n
                  .e(44419)
                  .then(n.bind(n, 44419))
                  .then((e) => e.wallet);
          case "app.catecoin":
            return t
              ? n
                  .e(18675)
                  .then(n.bind(n, 18675))
                  .then((e) => e.default)
              : n
                  .e(78760)
                  .then(n.bind(n, 78760))
                  .then((e) => e.wallet);
          case "io.ukiss":
            return t
              ? n
                  .e(73964)
                  .then(n.bind(n, 73964))
                  .then((e) => e.default)
              : n
                  .e(70666)
                  .then(n.bind(n, 70666))
                  .then((e) => e.wallet);
          case "com.tellaw":
            return t
              ? n
                  .e(49391)
                  .then(n.bind(n, 49391))
                  .then((e) => e.default)
              : n
                  .e(94005)
                  .then(n.bind(n, 94005))
                  .then((e) => e.wallet);
          case "com.tangem":
            return t
              ? n
                  .e(15050)
                  .then(n.bind(n, 15050))
                  .then((e) => e.default)
              : n
                  .e(24980)
                  .then(n.bind(n, 24980))
                  .then((e) => e.wallet);
          case "is.callback":
            return t
              ? n
                  .e(11844)
                  .then(n.bind(n, 11844))
                  .then((e) => e.default)
              : n
                  .e(51661)
                  .then(n.bind(n, 51661))
                  .then((e) => e.wallet);
          case "io.summonersarena":
            return t
              ? n
                  .e(41866)
                  .then(n.bind(n, 41866))
                  .then((e) => e.default)
              : n
                  .e(65649)
                  .then(n.bind(n, 65649))
                  .then((e) => e.wallet);
          case "co.xellar":
            return t
              ? n
                  .e(21557)
                  .then(n.bind(n, 21557))
                  .then((e) => e.default)
              : n
                  .e(99819)
                  .then(n.bind(n, 99819))
                  .then((e) => e.wallet);
          case "io.talken":
            return t
              ? n
                  .e(3848)
                  .then(n.bind(n, 3848))
                  .then((e) => e.default)
              : n
                  .e(19485)
                  .then(n.bind(n, 19485))
                  .then((e) => e.wallet);
          case "xyz.uniultra.wallet":
            return t
              ? n
                  .e(54219)
                  .then(n.bind(n, 54219))
                  .then((e) => e.default)
              : n
                  .e(56275)
                  .then(n.bind(n, 56275))
                  .then((e) => e.wallet);
          case "io.ozonewallet":
            return t
              ? n
                  .e(29161)
                  .then(n.bind(n, 29161))
                  .then((e) => e.default)
              : n
                  .e(38376)
                  .then(n.bind(n, 38376))
                  .then((e) => e.wallet);
          case "com.tiduswallet":
            return t
              ? n
                  .e(13450)
                  .then(n.bind(n, 13450))
                  .then((e) => e.default)
              : n
                  .e(87781)
                  .then(n.bind(n, 87781))
                  .then((e) => e.wallet);
          case "world.ixo":
            return t
              ? n
                  .e(14738)
                  .then(n.bind(n, 14738))
                  .then((e) => e.default)
              : n
                  .e(98240)
                  .then(n.bind(n, 98240))
                  .then((e) => e.wallet);
          case "io.zelcore":
            return t
              ? n
                  .e(58348)
                  .then(n.bind(n, 58348))
                  .then((e) => e.default)
              : n
                  .e(54170)
                  .then(n.bind(n, 54170))
                  .then((e) => e.wallet);
          case "world.dosi.vault":
            return t
              ? n
                  .e(41023)
                  .then(n.bind(n, 41023))
                  .then((e) => e.default)
              : n
                  .e(77984)
                  .then(n.bind(n, 77984))
                  .then((e) => e.wallet);
          case "com.ullapay":
            return t
              ? n
                  .e(95480)
                  .then(n.bind(n, 95480))
                  .then((e) => e.default)
              : n
                  .e(79956)
                  .then(n.bind(n, 79956))
                  .then((e) => e.wallet);
          case "com.ellipal":
            return t
              ? n
                  .e(92943)
                  .then(n.bind(n, 92943))
                  .then((e) => e.default)
              : n
                  .e(73432)
                  .then(n.bind(n, 73432))
                  .then((e) => e.wallet);
          case "money.unstoppable":
            return t
              ? n
                  .e(52789)
                  .then(n.bind(n, 52789))
                  .then((e) => e.default)
              : n
                  .e(54960)
                  .then(n.bind(n, 54960))
                  .then((e) => e.wallet);
          case "dev.auroracloud":
            return t
              ? n
                  .e(93977)
                  .then(n.bind(n, 93977))
                  .then((e) => e.default)
              : n
                  .e(90038)
                  .then(n.bind(n, 90038))
                  .then((e) => e.wallet);
          case "zone.bitverse":
            return t
              ? n
                  .e(46470)
                  .then(n.bind(n, 46470))
                  .then((e) => e.default)
              : n
                  .e(46745)
                  .then(n.bind(n, 46745))
                  .then((e) => e.wallet);
          case "io.konio":
            return t
              ? n
                  .e(48568)
                  .then(n.bind(n, 48568))
                  .then((e) => e.default)
              : n
                  .e(7739)
                  .then(n.bind(n, 7739))
                  .then((e) => e.wallet);
          case "net.gateweb3":
            return t
              ? n
                  .e(80596)
                  .then(n.bind(n, 80596))
                  .then((e) => e.default)
              : n
                  .e(32460)
                  .then(n.bind(n, 32460))
                  .then((e) => e.wallet);
          case "app.utorg":
            return t
              ? n
                  .e(75475)
                  .then(n.bind(n, 75475))
                  .then((e) => e.default)
              : n
                  .e(66017)
                  .then(n.bind(n, 66017))
                  .then((e) => e.wallet);
          case "com.coinsdo":
            return t
              ? n
                  .e(99550)
                  .then(n.bind(n, 99550))
                  .then((e) => e.default)
              : n
                  .e(44784)
                  .then(n.bind(n, 44784))
                  .then((e) => e.wallet);
          case "app.ammer":
            return t
              ? n
                  .e(43570)
                  .then(n.bind(n, 43570))
                  .then((e) => e.default)
              : n
                  .e(45263)
                  .then(n.bind(n, 45263))
                  .then((e) => e.wallet);
          case "us.binance":
            return t
              ? n
                  .e(6803)
                  .then(n.bind(n, 6803))
                  .then((e) => e.default)
              : n
                  .e(27539)
                  .then(n.bind(n, 27539))
                  .then((e) => e.wallet);
          case "co.muza":
            return t
              ? n
                  .e(69387)
                  .then(n.bind(n, 69387))
                  .then((e) => e.default)
              : n
                  .e(30259)
                  .then(n.bind(n, 90844))
                  .then((e) => e.wallet);
          case "com.fxwallet":
            return t
              ? n
                  .e(28520)
                  .then(n.bind(n, 28520))
                  .then((e) => e.default)
              : n
                  .e(91860)
                  .then(n.bind(n, 91860))
                  .then((e) => e.wallet);
          case "app.ryipay":
            return t
              ? n
                  .e(57858)
                  .then(n.bind(n, 57858))
                  .then((e) => e.default)
              : n
                  .e(99653)
                  .then(n.bind(n, 99653))
                  .then((e) => e.wallet);
          case "org.dota168":
            return t
              ? n
                  .e(82053)
                  .then(n.bind(n, 82053))
                  .then((e) => e.default)
              : n
                  .e(44548)
                  .then(n.bind(n, 44548))
                  .then((e) => e.wallet);
          case "io.altme":
            return t
              ? n
                  .e(64561)
                  .then(n.bind(n, 64561))
                  .then((e) => e.default)
              : n
                  .e(58599)
                  .then(n.bind(n, 58599))
                  .then((e) => e.wallet);
          case "com.bitpie":
            return t
              ? n
                  .e(73192)
                  .then(n.bind(n, 73192))
                  .then((e) => e.default)
              : n
                  .e(71519)
                  .then(n.bind(n, 71519))
                  .then((e) => e.wallet);
          case "io.moonstake":
            return t
              ? n
                  .e(2779)
                  .then(n.bind(n, 2779))
                  .then((e) => e.default)
              : n
                  .e(15636)
                  .then(n.bind(n, 15636))
                  .then((e) => e.wallet);
          case "gg.indi":
            return t
              ? n
                  .e(63025)
                  .then(n.bind(n, 63025))
                  .then((e) => e.default)
              : n
                  .e(18428)
                  .then(n.bind(n, 18428))
                  .then((e) => e.wallet);
          case "io.yusetoken":
            return t
              ? n
                  .e(87339)
                  .then(n.bind(n, 87339))
                  .then((e) => e.default)
              : n
                  .e(55071)
                  .then(n.bind(n, 55071))
                  .then((e) => e.wallet);
          case "com.coininn":
            return t
              ? n
                  .e(22126)
                  .then(n.bind(n, 22126))
                  .then((e) => e.default)
              : n
                  .e(42399)
                  .then(n.bind(n, 42399))
                  .then((e) => e.wallet);
          case "io.functionx":
            return t
              ? n
                  .e(36478)
                  .then(n.bind(n, 36478))
                  .then((e) => e.default)
              : n
                  .e(15734)
                  .then(n.bind(n, 15734))
                  .then((e) => e.wallet);
          case "io.pockie":
            return t
              ? n
                  .e(31363)
                  .then(n.bind(n, 31363))
                  .then((e) => e.default)
              : n
                  .e(75241)
                  .then(n.bind(n, 75241))
                  .then((e) => e.wallet);
          case "com.amazewallet":
            return t
              ? n
                  .e(20543)
                  .then(n.bind(n, 20543))
                  .then((e) => e.default)
              : n
                  .e(97260)
                  .then(n.bind(n, 97260))
                  .then((e) => e.wallet);
          case "com.paliwallet":
            return t
              ? n
                  .e(41857)
                  .then(n.bind(n, 41857))
                  .then((e) => e.default)
              : n
                  .e(44698)
                  .then(n.bind(n, 44698))
                  .then((e) => e.wallet);
          case "me.easy":
            return t
              ? n
                  .e(72519)
                  .then(n.bind(n, 72519))
                  .then((e) => e.default)
              : n
                  .e(69331)
                  .then(n.bind(n, 69331))
                  .then((e) => e.wallet);
          case "live.superex":
            return t
              ? n
                  .e(92084)
                  .then(n.bind(n, 92084))
                  .then((e) => e.default)
              : n
                  .e(44786)
                  .then(n.bind(n, 44786))
                  .then((e) => e.wallet);
          case "com.secuxtech":
            return t
              ? n
                  .e(9019)
                  .then(n.bind(n, 9019))
                  .then((e) => e.default)
              : n
                  .e(80770)
                  .then(n.bind(n, 80770))
                  .then((e) => e.wallet);
          case "io.didwallet":
            return t
              ? n
                  .e(51543)
                  .then(n.bind(n, 98366))
                  .then((e) => e.default)
              : n
                  .e(65059)
                  .then(n.bind(n, 65059))
                  .then((e) => e.wallet);
          case "social.halo":
            return t
              ? n
                  .e(57892)
                  .then(n.bind(n, 57892))
                  .then((e) => e.default)
              : n
                  .e(73906)
                  .then(n.bind(n, 73906))
                  .then((e) => e.wallet);
          case "com.sinohope":
            return t
              ? n
                  .e(40600)
                  .then(n.bind(n, 40600))
                  .then((e) => e.default)
              : n
                  .e(76589)
                  .then(n.bind(n, 76589))
                  .then((e) => e.wallet);
          case "com.ballet":
            return t
              ? n
                  .e(4400)
                  .then(n.bind(n, 4400))
                  .then((e) => e.default)
              : n
                  .e(69931)
                  .then(n.bind(n, 69931))
                  .then((e) => e.wallet);
          case "com.opz":
            return t
              ? n
                  .e(89688)
                  .then(n.bind(n, 89688))
                  .then((e) => e.default)
              : n
                  .e(76124)
                  .then(n.bind(n, 76124))
                  .then((e) => e.wallet);
          case "io.fizen":
            return t
              ? n
                  .e(70347)
                  .then(n.bind(n, 70347))
                  .then((e) => e.default)
              : n
                  .e(89967)
                  .then(n.bind(n, 89967))
                  .then((e) => e.wallet);
          case "com.kresus":
            return t
              ? n
                  .e(22227)
                  .then(n.bind(n, 22227))
                  .then((e) => e.default)
              : n
                  .e(82683)
                  .then(n.bind(n, 82683))
                  .then((e) => e.wallet);
          case "com.midoin":
            return t
              ? n
                  .e(38317)
                  .then(n.bind(n, 38317))
                  .then((e) => e.default)
              : n
                  .e(51974)
                  .then(n.bind(n, 51974))
                  .then((e) => e.wallet);
          case "app.onto":
            return t
              ? n
                  .e(23113)
                  .then(n.bind(n, 23113))
                  .then((e) => e.default)
              : n
                  .e(8397)
                  .then(n.bind(n, 8397))
                  .then((e) => e.wallet);
          case "com.oasys-wallet":
            return t
              ? n
                  .e(97521)
                  .then(n.bind(n, 97521))
                  .then((e) => e.default)
              : n
                  .e(89210)
                  .then(n.bind(n, 89210))
                  .then((e) => e.wallet);
          case "org.gooddollar":
            return t
              ? n
                  .e(13935)
                  .then(n.bind(n, 13935))
                  .then((e) => e.default)
              : n
                  .e(96883)
                  .then(n.bind(n, 96883))
                  .then((e) => e.wallet);
          case "id.competence":
            return t
              ? n
                  .e(3260)
                  .then(n.bind(n, 3260))
                  .then((e) => e.default)
              : n
                  .e(2892)
                  .then(n.bind(n, 2892))
                  .then((e) => e.wallet);
          case "ai.spotonchain.platform":
            return t
              ? n
                  .e(34711)
                  .then(n.bind(n, 34711))
                  .then((e) => e.default)
              : n
                  .e(28838)
                  .then(n.bind(n, 28838))
                  .then((e) => e.wallet);
          case "network.dgg":
            return t
              ? n
                  .e(64303)
                  .then(n.bind(n, 64303))
                  .then((e) => e.default)
              : n
                  .e(56704)
                  .then(n.bind(n, 56704))
                  .then((e) => e.wallet);
          case "llc.besc":
            return t
              ? n
                  .e(2357)
                  .then(n.bind(n, 68461))
                  .then((e) => e.default)
              : n
                  .e(84621)
                  .then(n.bind(n, 84621))
                  .then((e) => e.wallet);
          case "app.gamic":
            return t
              ? n
                  .e(29091)
                  .then(n.bind(n, 29091))
                  .then((e) => e.default)
              : n
                  .e(25671)
                  .then(n.bind(n, 25671))
                  .then((e) => e.wallet);
          case "baby.smart":
            return t
              ? n
                  .e(37350)
                  .then(n.bind(n, 37350))
                  .then((e) => e.default)
              : n
                  .e(86576)
                  .then(n.bind(n, 86576))
                  .then((e) => e.wallet);
          case "network.gridlock":
            return t
              ? n
                  .e(80147)
                  .then(n.bind(n, 80147))
                  .then((e) => e.default)
              : n
                  .e(19197)
                  .then(n.bind(n, 19197))
                  .then((e) => e.wallet);
          case "app.zeal":
            return t
              ? n
                  .e(60663)
                  .then(n.bind(n, 60663))
                  .then((e) => e.default)
              : n
                  .e(17553)
                  .then(n.bind(n, 17553))
                  .then((e) => e.wallet);
          case "com.ivirse":
            return t
              ? n
                  .e(79019)
                  .then(n.bind(n, 79019))
                  .then((e) => e.default)
              : n
                  .e(88318)
                  .then(n.bind(n, 88318))
                  .then((e) => e.wallet);
          case "ch.dssecurity":
            return t
              ? n
                  .e(3648)
                  .then(n.bind(n, 3648))
                  .then((e) => e.default)
              : n
                  .e(99433)
                  .then(n.bind(n, 99433))
                  .then((e) => e.wallet);
          case "com.concordium":
            return t
              ? n
                  .e(69322)
                  .then(n.bind(n, 69322))
                  .then((e) => e.default)
              : n
                  .e(61028)
                  .then(n.bind(n, 61028))
                  .then((e) => e.wallet);
          case "io.zkape":
            return t
              ? n
                  .e(54136)
                  .then(n.bind(n, 54136))
                  .then((e) => e.default)
              : n
                  .e(78948)
                  .then(n.bind(n, 78948))
                  .then((e) => e.wallet);
          case "com.thirdweb":
            return t
              ? n
                  .e(23303)
                  .then(n.bind(n, 23303))
                  .then((e) => e.default)
              : n
                  .e(49081)
                  .then(n.bind(n, 20581))
                  .then((e) => e.wallet);
          case "io.pitaka":
            return t
              ? n
                  .e(59050)
                  .then(n.bind(n, 59050))
                  .then((e) => e.default)
              : n
                  .e(64473)
                  .then(n.bind(n, 64473))
                  .then((e) => e.wallet);
          case "com.trusteeglobal":
            return t
              ? n
                  .e(39415)
                  .then(n.bind(n, 39415))
                  .then((e) => e.default)
              : n
                  .e(73911)
                  .then(n.bind(n, 73911))
                  .then((e) => e.wallet);
          case "org.mugambo":
            return t
              ? n
                  .e(46707)
                  .then(n.bind(n, 46707))
                  .then((e) => e.default)
              : n
                  .e(21243)
                  .then(n.bind(n, 21243))
                  .then((e) => e.wallet);
          case "cc.dropp":
            return t
              ? n
                  .e(15995)
                  .then(n.bind(n, 15995))
                  .then((e) => e.default)
              : n
                  .e(40267)
                  .then(n.bind(n, 40267))
                  .then((e) => e.wallet);
          case "xyz.roam.wallet":
            return t
              ? n
                  .e(6627)
                  .then(n.bind(n, 6627))
                  .then((e) => e.default)
              : n
                  .e(14812)
                  .then(n.bind(n, 14812))
                  .then((e) => e.wallet);
          case "world.qoin":
            return t
              ? n
                  .e(66162)
                  .then(n.bind(n, 66162))
                  .then((e) => e.default)
              : n
                  .e(68302)
                  .then(n.bind(n, 68302))
                  .then((e) => e.wallet);
          case "com.meld.app":
            return t
              ? n
                  .e(27517)
                  .then(n.bind(n, 27517))
                  .then((e) => e.default)
              : n
                  .e(87990)
                  .then(n.bind(n, 87990))
                  .then((e) => e.wallet);
          case "com.bestwallet":
            return t
              ? n
                  .e(56471)
                  .then(n.bind(n, 56471))
                  .then((e) => e.default)
              : n
                  .e(35099)
                  .then(n.bind(n, 35099))
                  .then((e) => e.wallet);
          case "io.hyperpay":
            return t
              ? n
                  .e(70975)
                  .then(n.bind(n, 70975))
                  .then((e) => e.default)
              : n
                  .e(89671)
                  .then(n.bind(n, 89671))
                  .then((e) => e.wallet);
          case "io.xucre":
            return t
              ? n
                  .e(5806)
                  .then(n.bind(n, 5806))
                  .then((e) => e.default)
              : n
                  .e(12421)
                  .then(n.bind(n, 12421))
                  .then((e) => e.wallet);
          case "app.herewallet":
            return t
              ? n
                  .e(16204)
                  .then(n.bind(n, 16204))
                  .then((e) => e.default)
              : n
                  .e(83044)
                  .then(n.bind(n, 83044))
                  .then((e) => e.wallet);
          case "com.cakewallet":
            return t
              ? n
                  .e(39907)
                  .then(n.bind(n, 39907))
                  .then((e) => e.default)
              : n
                  .e(50221)
                  .then(n.bind(n, 50221))
                  .then((e) => e.wallet);
          case "io.unagi.unawallet":
            return t
              ? n
                  .e(75009)
                  .then(n.bind(n, 75009))
                  .then((e) => e.default)
              : n
                  .e(33073)
                  .then(n.bind(n, 33073))
                  .then((e) => e.wallet);
          case "io.ethos":
            return t
              ? n
                  .e(40605)
                  .then(n.bind(n, 40605))
                  .then((e) => e.default)
              : n
                  .e(75649)
                  .then(n.bind(n, 75649))
                  .then((e) => e.wallet);
          case "app.pluswallet":
            return t
              ? n
                  .e(63015)
                  .then(n.bind(n, 63015))
                  .then((e) => e.default)
              : n
                  .e(37197)
                  .then(n.bind(n, 37197))
                  .then((e) => e.wallet);
          case "com.authentrend":
            return t
              ? n
                  .e(59418)
                  .then(n.bind(n, 59418))
                  .then((e) => e.default)
              : n
                  .e(18358)
                  .then(n.bind(n, 18358))
                  .then((e) => e.wallet);
          case "finance.plena":
            return t
              ? n
                  .e(20193)
                  .then(n.bind(n, 20193))
                  .then((e) => e.default)
              : n
                  .e(15902)
                  .then(n.bind(n, 15902))
                  .then((e) => e.wallet);
          case "com.wemix":
            return t
              ? n
                  .e(99369)
                  .then(n.bind(n, 99369))
                  .then((e) => e.default)
              : n
                  .e(97189)
                  .then(n.bind(n, 97189))
                  .then((e) => e.wallet);
          case "com.gemwallet":
            return t
              ? n
                  .e(41358)
                  .then(n.bind(n, 41358))
                  .then((e) => e.default)
              : n
                  .e(22961)
                  .then(n.bind(n, 22961))
                  .then((e) => e.wallet);
          case "com.caesiumlab":
            return t
              ? n
                  .e(90066)
                  .then(n.bind(n, 90066))
                  .then((e) => e.default)
              : n
                  .e(19141)
                  .then(n.bind(n, 19141))
                  .then((e) => e.wallet);
          case "pro.fintoken":
            return t
              ? n
                  .e(1464)
                  .then(n.bind(n, 1464))
                  .then((e) => e.default)
              : n
                  .e(61223)
                  .then(n.bind(n, 61223))
                  .then((e) => e.wallet);
          case "com.peakdefi":
            return t
              ? n
                  .e(38933)
                  .then(n.bind(n, 38933))
                  .then((e) => e.default)
              : n
                  .e(18446)
                  .then(n.bind(n, 18446))
                  .then((e) => e.wallet);
          case "com.nodle":
            return t
              ? n
                  .e(22556)
                  .then(n.bind(n, 22556))
                  .then((e) => e.default)
              : n
                  .e(61371)
                  .then(n.bind(n, 61371))
                  .then((e) => e.wallet);
          case "com.cryptokara":
            return t
              ? n
                  .e(96283)
                  .then(n.bind(n, 96283))
                  .then((e) => e.default)
              : n
                  .e(91160)
                  .then(n.bind(n, 91160))
                  .then((e) => e.wallet);
          case "com.poolsmobility.wallet":
            return t
              ? n
                  .e(68038)
                  .then(n.bind(n, 68038))
                  .then((e) => e.default)
              : n
                  .e(33429)
                  .then(n.bind(n, 33429))
                  .then((e) => e.wallet);
          case "com.veworld":
            return t
              ? n
                  .e(7717)
                  .then(n.bind(n, 7717))
                  .then((e) => e.default)
              : n
                  .e(79026)
                  .then(n.bind(n, 79026))
                  .then((e) => e.wallet);
          case "com.azcoiner":
            return t
              ? n
                  .e(7978)
                  .then(n.bind(n, 7978))
                  .then((e) => e.default)
              : n
                  .e(67965)
                  .then(n.bind(n, 67965))
                  .then((e) => e.wallet);
          case "technology.jambo":
            return t
              ? n
                  .e(73332)
                  .then(n.bind(n, 73332))
                  .then((e) => e.default)
              : n
                  .e(62210)
                  .then(n.bind(n, 62210))
                  .then((e) => e.wallet);
          case "vc.uincubator.api":
            return t
              ? n
                  .e(54605)
                  .then(n.bind(n, 54605))
                  .then((e) => e.default)
              : n
                  .e(97728)
                  .then(n.bind(n, 97728))
                  .then((e) => e.wallet);
          case "app.m1nty":
            return t
              ? n
                  .e(50112)
                  .then(n.bind(n, 50112))
                  .then((e) => e.default)
              : n
                  .e(76869)
                  .then(n.bind(n, 76869))
                  .then((e) => e.wallet);
          case "io.noone":
            return t
              ? n
                  .e(24515)
                  .then(n.bind(n, 21890))
                  .then((e) => e.default)
              : n
                  .e(5922)
                  .then(n.bind(n, 5922))
                  .then((e) => e.wallet);
          case "com.bitso":
            return t
              ? n
                  .e(38399)
                  .then(n.bind(n, 38399))
                  .then((e) => e.default)
              : n
                  .e(7710)
                  .then(n.bind(n, 7710))
                  .then((e) => e.wallet);
          case "online.puzzle":
            return t
              ? n
                  .e(53116)
                  .then(n.bind(n, 53116))
                  .then((e) => e.default)
              : n
                  .e(32452)
                  .then(n.bind(n, 32452))
                  .then((e) => e.wallet);
          case "network.blackfort":
            return t
              ? n
                  .e(88221)
                  .then(n.bind(n, 88221))
                  .then((e) => e.default)
              : n
                  .e(43967)
                  .then(n.bind(n, 43967))
                  .then((e) => e.wallet);
          case "io.armana.portal":
            return t
              ? n
                  .e(1382)
                  .then(n.bind(n, 1382))
                  .then((e) => e.default)
              : n
                  .e(96621)
                  .then(n.bind(n, 96621))
                  .then((e) => e.wallet);
          case "io.bharatbox":
            return t
              ? n
                  .e(21453)
                  .then(n.bind(n, 21453))
                  .then((e) => e.default)
              : n
                  .e(35828)
                  .then(n.bind(n, 35828))
                  .then((e) => e.wallet);
          case "com.greengloryglobal":
            return t
              ? n
                  .e(99365)
                  .then(n.bind(n, 99365))
                  .then((e) => e.default)
              : n
                  .e(40538)
                  .then(n.bind(n, 40538))
                  .then((e) => e.wallet);
          case "com.x9wallet":
            return t
              ? n
                  .e(94892)
                  .then(n.bind(n, 94892))
                  .then((e) => e.default)
              : n
                  .e(82030)
                  .then(n.bind(n, 82030))
                  .then((e) => e.wallet);
          case "io.miraiapp":
            return t
              ? n
                  .e(42880)
                  .then(n.bind(n, 42880))
                  .then((e) => e.default)
              : n
                  .e(75203)
                  .then(n.bind(n, 75203))
                  .then((e) => e.wallet);
          case "io.kigo":
            return t
              ? n
                  .e(71222)
                  .then(n.bind(n, 71222))
                  .then((e) => e.default)
              : n
                  .e(209)
                  .then(n.bind(n, 209))
                  .then((e) => e.wallet);
          case "com.getcogni":
            return t
              ? n
                  .e(26165)
                  .then(n.bind(n, 26165))
                  .then((e) => e.default)
              : n
                  .e(87824)
                  .then(n.bind(n, 87824))
                  .then((e) => e.wallet);
          case "com.fastex.wallet":
            return t
              ? n
                  .e(65172)
                  .then(n.bind(n, 65172))
                  .then((e) => e.default)
              : n
                  .e(10676)
                  .then(n.bind(n, 59963))
                  .then((e) => e.wallet);
          case "io.wallacy":
            return t
              ? n
                  .e(28165)
                  .then(n.bind(n, 28165))
                  .then((e) => e.default)
              : n
                  .e(63679)
                  .then(n.bind(n, 63679))
                  .then((e) => e.wallet);
          case "org.talkapp":
            return t
              ? n
                  .e(84543)
                  .then(n.bind(n, 84543))
                  .then((e) => e.default)
              : n
                  .e(80125)
                  .then(n.bind(n, 80125))
                  .then((e) => e.wallet);
          case "com.usecapsule":
            return t
              ? n
                  .e(44857)
                  .then(n.bind(n, 44857))
                  .then((e) => e.default)
              : n
                  .e(86393)
                  .then(n.bind(n, 86393))
                  .then((e) => e.wallet);
          case "com.unitywallet":
            return t
              ? n
                  .e(17915)
                  .then(n.bind(n, 17915))
                  .then((e) => e.default)
              : n
                  .e(91554)
                  .then(n.bind(n, 91554))
                  .then((e) => e.wallet);
          case "app.sinum":
            return t
              ? n
                  .e(38798)
                  .then(n.bind(n, 38798))
                  .then((e) => e.default)
              : n
                  .e(48986)
                  .then(n.bind(n, 48986))
                  .then((e) => e.wallet);
          case "finance.soulswap.app":
            return t
              ? n
                  .e(29618)
                  .then(n.bind(n, 29618))
                  .then((e) => e.default)
              : n
                  .e(40061)
                  .then(n.bind(n, 40061))
                  .then((e) => e.wallet);
          case "com.shapeshift":
            return t
              ? n
                  .e(13616)
                  .then(n.bind(n, 13616))
                  .then((e) => e.default)
              : n
                  .e(54886)
                  .then(n.bind(n, 54886))
                  .then((e) => e.wallet);
          case "finance.panaroma":
            return t
              ? n
                  .e(58352)
                  .then(n.bind(n, 58352))
                  .then((e) => e.default)
              : n
                  .e(15748)
                  .then(n.bind(n, 15748))
                  .then((e) => e.wallet);
          case "io.neopin":
            return t
              ? n
                  .e(94943)
                  .then(n.bind(n, 94943))
                  .then((e) => e.default)
              : n
                  .e(32977)
                  .then(n.bind(n, 32977))
                  .then((e) => e.wallet);
          case "com.alicebob":
            return t
              ? n
                  .e(14927)
                  .then(n.bind(n, 14927))
                  .then((e) => e.default)
              : n
                  .e(63586)
                  .then(n.bind(n, 63586))
                  .then((e) => e.wallet);
          case "co.cyber.wallet":
            return t
              ? n
                  .e(160)
                  .then(n.bind(n, 160))
                  .then((e) => e.default)
              : n
                  .e(84701)
                  .then(n.bind(n, 84701))
                  .then((e) => e.wallet);
          case "com.dextrade":
            return t
              ? n
                  .e(41472)
                  .then(n.bind(n, 41472))
                  .then((e) => e.default)
              : n
                  .e(93342)
                  .then(n.bind(n, 93342))
                  .then((e) => e.wallet);
          case "com.hashpack.wallet":
            return t
              ? n
                  .e(91741)
                  .then(n.bind(n, 91741))
                  .then((e) => e.default)
              : n
                  .e(33255)
                  .then(n.bind(n, 33255))
                  .then((e) => e.wallet);
          case "org.thepulsewallet":
            return t
              ? n
                  .e(78040)
                  .then(n.bind(n, 78040))
                  .then((e) => e.default)
              : n
                  .e(85624)
                  .then(n.bind(n, 85624))
                  .then((e) => e.wallet);
          case "id.co.pintu":
            return t
              ? n
                  .e(20274)
                  .then(n.bind(n, 20274))
                  .then((e) => e.default)
              : n
                  .e(43950)
                  .then(n.bind(n, 43950))
                  .then((e) => e.wallet);
          case "io.bladewallet":
            return t
              ? n
                  .e(78917)
                  .then(n.bind(n, 78917))
                  .then((e) => e.default)
              : n
                  .e(54577)
                  .then(n.bind(n, 54577))
                  .then((e) => e.wallet);
          case "com.pandoshi":
            return t
              ? n
                  .e(99631)
                  .then(n.bind(n, 99631))
                  .then((e) => e.default)
              : n
                  .e(35131)
                  .then(n.bind(n, 35131))
                  .then((e) => e.wallet);
          case "money.keychain":
            return t
              ? n
                  .e(32536)
                  .then(n.bind(n, 32536))
                  .then((e) => e.default)
              : n
                  .e(4999)
                  .then(n.bind(n, 4999))
                  .then((e) => e.wallet);
          case "com.mpcvault.broswerplugin":
            return t
              ? n
                  .e(98691)
                  .then(n.bind(n, 98691))
                  .then((e) => e.default)
              : n
                  .e(990)
                  .then(n.bind(n, 990))
                  .then((e) => e.wallet);
          case "io.legacynetwork":
            return t
              ? n
                  .e(13657)
                  .then(n.bind(n, 13657))
                  .then((e) => e.default)
              : n
                  .e(2611)
                  .then(n.bind(n, 2611))
                  .then((e) => e.wallet);
          case "io.getclave":
            return t
              ? n
                  .e(45671)
                  .then(n.bind(n, 45671))
                  .then((e) => e.default)
              : n
                  .e(59781)
                  .then(n.bind(n, 59781))
                  .then((e) => e.wallet);
          case "me.iopay":
            return t
              ? n
                  .e(67510)
                  .then(n.bind(n, 67510))
                  .then((e) => e.default)
              : n
                  .e(46090)
                  .then(n.bind(n, 46090))
                  .then((e) => e.wallet);
          case "app.kabila":
            return t
              ? n
                  .e(44431)
                  .then(n.bind(n, 44431))
                  .then((e) => e.default)
              : n
                  .e(52264)
                  .then(n.bind(n, 52264))
                  .then((e) => e.wallet);
          case "one.mixin.messenger":
            return t
              ? n
                  .e(3951)
                  .then(n.bind(n, 3951))
                  .then((e) => e.default)
              : n
                  .e(85908)
                  .then(n.bind(n, 85908))
                  .then((e) => e.wallet);
          case "com.bettatrade":
            return t
              ? n
                  .e(87506)
                  .then(n.bind(n, 87506))
                  .then((e) => e.default)
              : n
                  .e(83286)
                  .then(n.bind(n, 83286))
                  .then((e) => e.wallet);
          case "io.scramberry":
            return t
              ? n
                  .e(53056)
                  .then(n.bind(n, 53056))
                  .then((e) => e.default)
              : n
                  .e(5656)
                  .then(n.bind(n, 5656))
                  .then((e) => e.wallet);
          case "io.earthwallet":
            return t
              ? n
                  .e(81077)
                  .then(n.bind(n, 81077))
                  .then((e) => e.default)
              : n
                  .e(12287)
                  .then(n.bind(n, 12287))
                  .then((e) => e.wallet);
          case "xyz.nestwallet":
            return t
              ? n
                  .e(30003)
                  .then(n.bind(n, 30003))
                  .then((e) => e.default)
              : n
                  .e(22256)
                  .then(n.bind(n, 22256))
                  .then((e) => e.wallet);
          case "xyz.echooo":
            return t
              ? n
                  .e(69211)
                  .then(n.bind(n, 69211))
                  .then((e) => e.default)
              : n
                  .e(20939)
                  .then(n.bind(n, 20939))
                  .then((e) => e.wallet);
          case "net.myrenegade":
            return t
              ? n
                  .e(32239)
                  .then(n.bind(n, 32239))
                  .then((e) => e.default)
              : n
                  .e(4448)
                  .then(n.bind(n, 4448))
                  .then((e) => e.wallet);
          case "io.ready":
            return t
              ? n
                  .e(71668)
                  .then(n.bind(n, 71668))
                  .then((e) => e.default)
              : n
                  .e(93559)
                  .then(n.bind(n, 93559))
                  .then((e) => e.wallet);
          case "ai.hacken":
            return t
              ? n
                  .e(38540)
                  .then(n.bind(n, 38540))
                  .then((e) => e.default)
              : n
                  .e(899)
                  .then(n.bind(n, 899))
                  .then((e) => e.wallet);
          case "io.plutope":
            return t
              ? n
                  .e(95937)
                  .then(n.bind(n, 95937))
                  .then((e) => e.default)
              : n
                  .e(92390)
                  .then(n.bind(n, 92390))
                  .then((e) => e.wallet);
          case "io.trustasset":
            return t
              ? n
                  .e(53746)
                  .then(n.bind(n, 72881))
                  .then((e) => e.default)
              : n
                  .e(93062)
                  .then(n.bind(n, 93062))
                  .then((e) => e.wallet);
          case "app.dfinnwallet":
            return t
              ? n
                  .e(67823)
                  .then(n.bind(n, 67823))
                  .then((e) => e.default)
              : n
                  .e(21003)
                  .then(n.bind(n, 21003))
                  .then((e) => e.wallet);
          case "com.bmawallet":
            return t
              ? n
                  .e(92953)
                  .then(n.bind(n, 92953))
                  .then((e) => e.default)
              : n
                  .e(45885)
                  .then(n.bind(n, 45885))
                  .then((e) => e.wallet);
          case "net.spatium.wallet":
            return t
              ? n
                  .e(75280)
                  .then(n.bind(n, 75280))
                  .then((e) => e.default)
              : n
                  .e(5190)
                  .then(n.bind(n, 5190))
                  .then((e) => e.wallet);
          case "io.transi":
            return t
              ? n
                  .e(52841)
                  .then(n.bind(n, 52841))
                  .then((e) => e.default)
              : n
                  .e(27739)
                  .then(n.bind(n, 27739))
                  .then((e) => e.wallet);
          case "com.dolletwallet":
            return t
              ? n
                  .e(56638)
                  .then(n.bind(n, 56638))
                  .then((e) => e.default)
              : n
                  .e(76219)
                  .then(n.bind(n, 76219))
                  .then((e) => e.wallet);
          case "app.wombat":
            return t
              ? n
                  .e(36249)
                  .then(n.bind(n, 36249))
                  .then((e) => e.default)
              : n
                  .e(40202)
                  .then(n.bind(n, 40202))
                  .then((e) => e.wallet);
          case "fi.dropmate":
            return t
              ? n
                  .e(6707)
                  .then(n.bind(n, 6707))
                  .then((e) => e.default)
              : n
                  .e(49143)
                  .then(n.bind(n, 49143))
                  .then((e) => e.wallet);
          case "pub.dg":
            return t
              ? n
                  .e(23191)
                  .then(n.bind(n, 23191))
                  .then((e) => e.default)
              : n
                  .e(8069)
                  .then(n.bind(n, 8069))
                  .then((e) => e.wallet);
          case "com.icewal":
            return t
              ? n
                  .e(97677)
                  .then(n.bind(n, 97677))
                  .then((e) => e.default)
              : n
                  .e(26955)
                  .then(n.bind(n, 26955))
                  .then((e) => e.wallet);
          case "one.metapro.wallet":
            return t
              ? n
                  .e(82063)
                  .then(n.bind(n, 82063))
                  .then((e) => e.default)
              : n
                  .e(56903)
                  .then(n.bind(n, 56903))
                  .then((e) => e.wallet);
          case "xyz.bonuz":
            return t
              ? n
                  .e(97669)
                  .then(n.bind(n, 97669))
                  .then((e) => e.default)
              : n
                  .e(10237)
                  .then(n.bind(n, 10237))
                  .then((e) => e.wallet);
          case "io.shido":
            return t
              ? n
                  .e(22229)
                  .then(n.bind(n, 22229))
                  .then((e) => e.default)
              : n
                  .e(2179)
                  .then(n.bind(n, 2179))
                  .then((e) => e.wallet);
          case "co.lifedefi":
            return t
              ? n
                  .e(9248)
                  .then(n.bind(n, 9248))
                  .then((e) => e.default)
              : n
                  .e(93211)
                  .then(n.bind(n, 93211))
                  .then((e) => e.wallet);
          case "fun.tobi":
            return t
              ? n
                  .e(77447)
                  .then(n.bind(n, 77447))
                  .then((e) => e.default)
              : n
                  .e(46122)
                  .then(n.bind(n, 46122))
                  .then((e) => e.wallet);
          case "inc.tomo":
            return t
              ? n
                  .e(59534)
                  .then(n.bind(n, 59534))
                  .then((e) => e.default)
              : n
                  .e(8853)
                  .then(n.bind(n, 8853))
                  .then((e) => e.wallet);
          case "app.clot":
            return t
              ? n
                  .e(24266)
                  .then(n.bind(n, 24266))
                  .then((e) => e.default)
              : n
                  .e(15467)
                  .then(n.bind(n, 15467))
                  .then((e) => e.wallet);
          case "me.komet.app":
            return t
              ? n
                  .e(67735)
                  .then(n.bind(n, 67735))
                  .then((e) => e.default)
              : n
                  .e(20826)
                  .then(n.bind(n, 20826))
                  .then((e) => e.wallet);
          case "io.guardiianwallet":
            return t
              ? n
                  .e(540)
                  .then(n.bind(n, 540))
                  .then((e) => e.default)
              : n
                  .e(34003)
                  .then(n.bind(n, 34003))
                  .then((e) => e.wallet);
          case "io.wallypto":
            return t
              ? n
                  .e(97476)
                  .then(n.bind(n, 97476))
                  .then((e) => e.default)
              : n
                  .e(83224)
                  .then(n.bind(n, 83224))
                  .then((e) => e.wallet);
          case "com.safemoon":
            return t
              ? n
                  .e(60767)
                  .then(n.bind(n, 60767))
                  .then((e) => e.default)
              : n
                  .e(89960)
                  .then(n.bind(n, 89960))
                  .then((e) => e.wallet);
          case "com.elrond.maiar.wallet":
            return t
              ? n
                  .e(374)
                  .then(n.bind(n, 374))
                  .then((e) => e.default)
              : n
                  .e(40321)
                  .then(n.bind(n, 40321))
                  .then((e) => e.wallet);
          case "co.swopme":
            return t
              ? n
                  .e(38338)
                  .then(n.bind(n, 38338))
                  .then((e) => e.default)
              : n
                  .e(63147)
                  .then(n.bind(n, 63147))
                  .then((e) => e.wallet);
          case "com.bitpay":
            return t
              ? n
                  .e(35240)
                  .then(n.bind(n, 65804))
                  .then((e) => e.default)
              : n
                  .e(81958)
                  .then(n.bind(n, 81958))
                  .then((e) => e.wallet);
          case "app.tofee":
            return t
              ? n
                  .e(22846)
                  .then(n.bind(n, 22846))
                  .then((e) => e.default)
              : n
                  .e(97317)
                  .then(n.bind(n, 97317))
                  .then((e) => e.wallet);
          case "com.zypto":
            return t
              ? n
                  .e(32012)
                  .then(n.bind(n, 32012))
                  .then((e) => e.default)
              : n
                  .e(34680)
                  .then(n.bind(n, 34680))
                  .then((e) => e.wallet);
          case "xyz.orion":
            return t
              ? n
                  .e(68338)
                  .then(n.bind(n, 68338))
                  .then((e) => e.default)
              : n
                  .e(2e3)
                  .then(n.bind(n, 2e3))
                  .then((e) => e.wallet);
          case "io.uptn.dapp-web":
            return t
              ? n
                  .e(91806)
                  .then(n.bind(n, 91806))
                  .then((e) => e.default)
              : n
                  .e(48546)
                  .then(n.bind(n, 48546))
                  .then((e) => e.wallet);
          case "io.compasswallet":
            return t
              ? n
                  .e(62425)
                  .then(n.bind(n, 62425))
                  .then((e) => e.default)
              : n
                  .e(34985)
                  .then(n.bind(n, 34985))
                  .then((e) => e.wallet);
          case "app.nicegram":
            return t
              ? n
                  .e(33241)
                  .then(n.bind(n, 33241))
                  .then((e) => e.default)
              : n
                  .e(43447)
                  .then(n.bind(n, 43447))
                  .then((e) => e.wallet);
          case "finance.openwallet":
            return t
              ? n
                  .e(85776)
                  .then(n.bind(n, 85776))
                  .then((e) => e.default)
              : n
                  .e(23346)
                  .then(n.bind(n, 23346))
                  .then((e) => e.wallet);
          case "com.tastycrypto":
            return t
              ? n
                  .e(36299)
                  .then(n.bind(n, 36299))
                  .then((e) => e.default)
              : n
                  .e(28159)
                  .then(n.bind(n, 28159))
                  .then((e) => e.wallet);
          case "com.ipmb":
            return t
              ? n
                  .e(11464)
                  .then(n.bind(n, 11464))
                  .then((e) => e.default)
              : n
                  .e(4092)
                  .then(n.bind(n, 4092))
                  .then((e) => e.wallet);
          case "com.daffione":
            return t
              ? n
                  .e(64116)
                  .then(n.bind(n, 64116))
                  .then((e) => e.default)
              : n
                  .e(40993)
                  .then(n.bind(n, 40993))
                  .then((e) => e.wallet);
          case "io.owallet":
            return t
              ? n
                  .e(85277)
                  .then(n.bind(n, 85277))
                  .then((e) => e.default)
              : n
                  .e(41356)
                  .then(n.bind(n, 41356))
                  .then((e) => e.wallet);
          case "com.beexo":
            return t
              ? n
                  .e(61778)
                  .then(n.bind(n, 61778))
                  .then((e) => e.default)
              : n
                  .e(90344)
                  .then(n.bind(n, 90344))
                  .then((e) => e.wallet);
          case "com.webauth":
            return t
              ? n
                  .e(66743)
                  .then(n.bind(n, 66743))
                  .then((e) => e.default)
              : n
                  .e(55027)
                  .then(n.bind(n, 55027))
                  .then((e) => e.wallet);
          case "id.plumaa":
            return t
              ? n
                  .e(60199)
                  .then(n.bind(n, 60199))
                  .then((e) => e.default)
              : n
                  .e(142)
                  .then(n.bind(n, 142))
                  .then((e) => e.wallet);
          case "social.gm2":
            return t
              ? n
                  .e(42411)
                  .then(n.bind(n, 42411))
                  .then((e) => e.default)
              : n
                  .e(20965)
                  .then(n.bind(n, 20965))
                  .then((e) => e.wallet);
          case "nl.greenhood.wallet":
            return t
              ? n
                  .e(25535)
                  .then(n.bind(n, 25535))
                  .then((e) => e.default)
              : n
                  .e(28682)
                  .then(n.bind(n, 28682))
                  .then((e) => e.wallet);
          case "com.companyname.swaptobe":
            return t
              ? n
                  .e(37959)
                  .then(n.bind(n, 37959))
                  .then((e) => e.default)
              : n
                  .e(46957)
                  .then(n.bind(n, 46957))
                  .then((e) => e.wallet);
          case "finance.porta":
            return t
              ? n
                  .e(86438)
                  .then(n.bind(n, 86438))
                  .then((e) => e.default)
              : n
                  .e(98962)
                  .then(n.bind(n, 98962))
                  .then((e) => e.wallet);
          case "org.alephium":
            return t
              ? n
                  .e(17510)
                  .then(n.bind(n, 17510))
                  .then((e) => e.default)
              : n
                  .e(88014)
                  .then(n.bind(n, 88014))
                  .then((e) => e.wallet);
          case "network.over":
            return t
              ? n
                  .e(23134)
                  .then(n.bind(n, 23134))
                  .then((e) => e.default)
              : n
                  .e(89056)
                  .then(n.bind(n, 60877))
                  .then((e) => e.wallet);
          case "io.walletverse":
            return t
              ? n
                  .e(80092)
                  .then(n.bind(n, 80092))
                  .then((e) => e.default)
              : n
                  .e(17545)
                  .then(n.bind(n, 17545))
                  .then((e) => e.wallet);
          case "com.berasig":
            return t
              ? n
                  .e(73672)
                  .then(n.bind(n, 73672))
                  .then((e) => e.default)
              : n
                  .e(91044)
                  .then(n.bind(n, 91044))
                  .then((e) => e.wallet);
          case "org.shefi":
            return t
              ? n
                  .e(14350)
                  .then(n.bind(n, 14350))
                  .then((e) => e.default)
              : n
                  .e(28157)
                  .then(n.bind(n, 28157))
                  .then((e) => e.wallet);
          case "com.wemixplay":
            return t
              ? n
                  .e(21679)
                  .then(n.bind(n, 21679))
                  .then((e) => e.default)
              : n
                  .e(16599)
                  .then(n.bind(n, 16599))
                  .then((e) => e.wallet);
          case "co.family.wallet":
            return t
              ? n
                  .e(63383)
                  .then(n.bind(n, 63383))
                  .then((e) => e.default)
              : n
                  .e(18945)
                  .then(n.bind(n, 18945))
                  .then((e) => e.wallet);
          case "io.legionnetwork":
            return t
              ? n
                  .e(63384)
                  .then(n.bind(n, 63384))
                  .then((e) => e.default)
              : n
                  .e(89562)
                  .then(n.bind(n, 89562))
                  .then((e) => e.wallet);
          case "com.bitnovo":
            return t
              ? n
                  .e(64770)
                  .then(n.bind(n, 64770))
                  .then((e) => e.default)
              : n
                  .e(57933)
                  .then(n.bind(n, 57933))
                  .then((e) => e.wallet);
          case "io.safecryptowallet":
            return t
              ? n
                  .e(36789)
                  .then(n.bind(n, 36789))
                  .then((e) => e.default)
              : n
                  .e(98276)
                  .then(n.bind(n, 98276))
                  .then((e) => e.wallet);
          case "ag.jup":
            return t
              ? n
                  .e(63727)
                  .then(n.bind(n, 63727))
                  .then((e) => e.default)
              : n
                  .e(95524)
                  .then(n.bind(n, 95524))
                  .then((e) => e.wallet);
          case "io.koalawallet":
            return t
              ? n
                  .e(141)
                  .then(n.bind(n, 141))
                  .then((e) => e.default)
              : n
                  .e(65832)
                  .then(n.bind(n, 65832))
                  .then((e) => e.wallet);
          case "io.nonbank":
            return t
              ? n
                  .e(92915)
                  .then(n.bind(n, 92915))
                  .then((e) => e.default)
              : n
                  .e(60801)
                  .then(n.bind(n, 60801))
                  .then((e) => e.wallet);
          case "io.universaleverything":
            return t
              ? n
                  .e(24654)
                  .then(n.bind(n, 24654))
                  .then((e) => e.default)
              : n
                  .e(61354)
                  .then(n.bind(n, 46944))
                  .then((e) => e.wallet);
          case "com.coinbase.wallet":
            return t
              ? n
                  .e(46759)
                  .then(n.bind(n, 46759))
                  .then((e) => e.default)
              : n
                  .e(23259)
                  .then(n.bind(n, 23259))
                  .then((e) => e.wallet);
          case "io.rabby":
            return t
              ? n
                  .e(72947)
                  .then(n.bind(n, 72947))
                  .then((e) => e.default)
              : n
                  .e(55401)
                  .then(n.bind(n, 55401))
                  .then((e) => e.wallet);
          case "com.brave.wallet":
            return t
              ? n
                  .e(40212)
                  .then(n.bind(n, 40212))
                  .then((e) => e.default)
              : n
                  .e(20581)
                  .then(n.bind(n, 4574))
                  .then((e) => e.wallet);
          case "com.moongate.one":
            return t
              ? n
                  .e(49486)
                  .then(n.bind(n, 49486))
                  .then((e) => e.default)
              : n
                  .e(8176)
                  .then(n.bind(n, 8176))
                  .then((e) => e.wallet);
          case "com.blanqlabs.wallet":
            return t
              ? n
                  .e(71109)
                  .then(n.bind(n, 71109))
                  .then((e) => e.default)
              : n
                  .e(11347)
                  .then(n.bind(n, 11347))
                  .then((e) => e.wallet);
          case "tech.levain":
            return t
              ? n
                  .e(65255)
                  .then(n.bind(n, 65255))
                  .then((e) => e.default)
              : n
                  .e(83168)
                  .then(n.bind(n, 83168))
                  .then((e) => e.wallet);
          case "com.enkrypt":
            return t
              ? n
                  .e(63395)
                  .then(n.bind(n, 63395))
                  .then((e) => e.default)
              : n
                  .e(54489)
                  .then(n.bind(n, 54489))
                  .then((e) => e.wallet);
          case "com.scramble":
            return t
              ? n
                  .e(81995)
                  .then(n.bind(n, 81995))
                  .then((e) => e.default)
              : n
                  .e(230)
                  .then(n.bind(n, 230))
                  .then((e) => e.wallet);
          case "io.finoa":
            return t
              ? n
                  .e(95456)
                  .then(n.bind(n, 95456))
                  .then((e) => e.default)
              : n
                  .e(67655)
                  .then(n.bind(n, 67655))
                  .then((e) => e.wallet);
          case "com.walletconnect.com":
            return t
              ? n
                  .e(20220)
                  .then(n.bind(n, 20220))
                  .then((e) => e.default)
              : n
                  .e(30246)
                  .then(n.bind(n, 30246))
                  .then((e) => e.wallet);
          case "app.nightly":
            return t
              ? n
                  .e(59347)
                  .then(n.bind(n, 59347))
                  .then((e) => e.default)
              : n
                  .e(97721)
                  .then(n.bind(n, 97721))
                  .then((e) => e.wallet);
          case "com.blazpay.wallet":
            return t
              ? n
                  .e(68945)
                  .then(n.bind(n, 68945))
                  .then((e) => e.default)
              : n
                  .e(29861)
                  .then(n.bind(n, 29861))
                  .then((e) => e.wallet);
          case "io.getjoin.prd":
            return t
              ? n
                  .e(82973)
                  .then(n.bind(n, 82973))
                  .then((e) => e.default)
              : n
                  .e(68454)
                  .then(n.bind(n, 68454))
                  .then((e) => e.wallet);
          case "xyz.talisman":
            return t
              ? n
                  .e(57350)
                  .then(n.bind(n, 57350))
                  .then((e) => e.default)
              : n
                  .e(21284)
                  .then(n.bind(n, 21284))
                  .then((e) => e.wallet);
          case "eu.flashsoft.clear-wallet":
            return t
              ? n
                  .e(59588)
                  .then(n.bind(n, 59588))
                  .then((e) => e.default)
              : n
                  .e(63567)
                  .then(n.bind(n, 63567))
                  .then((e) => e.wallet);
          case "app.berasig":
            return t
              ? n
                  .e(46660)
                  .then(n.bind(n, 46660))
                  .then((e) => e.default)
              : n
                  .e(76566)
                  .then(n.bind(n, 76566))
                  .then((e) => e.wallet);
          case "com.lootrush":
            return t
              ? n
                  .e(99479)
                  .then(n.bind(n, 99479))
                  .then((e) => e.default)
              : n
                  .e(69216)
                  .then(n.bind(n, 69216))
                  .then((e) => e.wallet);
          case "app.core.extension":
            return t
              ? n
                  .e(57236)
                  .then(n.bind(n, 57236))
                  .then((e) => e.default)
              : n
                  .e(99449)
                  .then(n.bind(n, 99449))
                  .then((e) => e.wallet);
          case "xyz.dawnwallet":
            return t
              ? n
                  .e(28630)
                  .then(n.bind(n, 28630))
                  .then((e) => e.default)
              : n
                  .e(86264)
                  .then(n.bind(n, 86264))
                  .then((e) => e.wallet);
          case "xyz.abs":
            return t
              ? n
                  .e(60604)
                  .then(n.bind(n, 60604))
                  .then((e) => e.default)
              : n
                  .e(95729)
                  .then(n.bind(n, 95729))
                  .then((e) => e.wallet);
          default:
            throw Error("Wallet with id ".concat(e, " not found"));
        }
      }
    },
    53111: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return l;
        },
      });
      var r = n(29181),
        a = n(33210),
        i = n(38984),
        o = n(91552),
        s = n(26454);
      async function l(e) {
        let { account: t, client: l, chain: u, tokenAddress: c } = e;
        if (c) {
          let { getBalance: e } = await n.e(63736).then(n.bind(n, 63736));
          return e({
            contract: (0, a.u)({ client: l, chain: u, address: c }),
            address: t.address,
          });
        }
        let d = (0, o.getRpcClient)({ client: l, chain: u }),
          [h, f, p, b] = await Promise.all([
            (0, r.getChainSymbol)(u),
            (0, r.getChainDecimals)(u),
            (0, r.getChainNativeCurrencyName)(u),
            (0, i.y)(d, { address: t.address }),
          ]);
        return {
          value: b,
          decimals: f,
          displayValue: (0, s.bb)(b, f),
          symbol: h,
          name: p,
        };
      }
    },
    34303: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return l;
        },
      });
      var r = n(29181),
        a = n(33210),
        i = n(38984),
        o = n(91552),
        s = n(26454);
      async function l(e) {
        let { address: t, client: l, chain: u, tokenAddress: c } = e;
        if (c) {
          let { getBalance: e } = await n.e(63736).then(n.bind(n, 63736));
          return e({
            contract: (0, a.u)({ client: l, chain: u, address: c }),
            address: t,
          });
        }
        let d = (0, o.getRpcClient)({ client: l, chain: u }),
          [h, f, p, b] = await Promise.all([
            (0, r.getChainSymbol)(u),
            (0, r.getChainDecimals)(u),
            (0, r.getChainNativeCurrencyName)(u),
            (0, i.y)(d, { address: t }),
          ]);
        return {
          value: b,
          decimals: f,
          displayValue: (0, s.bb)(b, f),
          symbol: h,
          name: p,
        };
      }
    },
    22614: function (e, t, n) {
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
    29266: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return E;
        },
      });
      var r = n(48597),
        a = n(22614),
        i = n(38233),
        o = n(58162),
        s = n(52301),
        l = n(44677),
        u = n(37784),
        c = n(79227),
        d = n(62508),
        h = n(90985),
        f = n(34168),
        p = n(38997),
        b = n(95253),
        m = n(67122),
        y = n(97503),
        g = n(10168),
        w = n(95841),
        v = n(9680),
        x = n(78032);
      async function E(e, t) {
        let {
            account: i = e.account,
            batch: c = !!e.batch?.multicall,
            blockNumber: h,
            blockTag: f = "latest",
            accessList: w,
            blobs: E,
            code: k,
            data: S,
            factory: T,
            factoryData: R,
            gas: P,
            gasPrice: O,
            maxFeePerBlobGas: A,
            maxFeePerGas: I,
            maxPriorityFeePerGas: _,
            nonce: B,
            to: j,
            value: N,
            stateOverride: M,
            ...F
          } = t,
          L = i ? (0, a.T)(i) : void 0;
        if (k && (T || R))
          throw new s.G(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (k && j)
          throw new s.G("Cannot provide both `code` & `to` as parameters.");
        let D = k && S,
          q = T && R && j && S,
          z = D || q,
          $ = D
            ? (function (e) {
                let { code: t, data: n } = e;
                return (0, d.w)({
                  abi: (0, r.V)(["constructor(bytes, bytes)"]),
                  bytecode: o.NO,
                  args: [t, n],
                });
              })({ code: k, data: S })
            : q
            ? (function (e) {
                let { data: t, factory: n, factoryData: a, to: i } = e;
                return (0, d.w)({
                  abi: (0, r.V)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: o.pG,
                  args: [i, t, n, a],
                });
              })({ data: S, factory: T, factoryData: R, to: j })
            : S;
        try {
          (0, x.F)(t);
          let n = (h ? (0, p.eC)(h) : void 0) || f,
            r = (0, v.mF)(M),
            a = e.chain?.formatters?.transactionRequest?.format,
            i = (a || g.tG)({
              ...(0, y.K)(F, { format: a }),
              from: L?.address,
              accessList: w,
              blobs: E,
              data: $,
              gas: P,
              gasPrice: O,
              maxFeePerBlobGas: A,
              maxFeePerGas: I,
              maxPriorityFeePerGas: _,
              nonce: B,
              to: z ? void 0 : j,
              value: N,
            });
          if (
            c &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: i }) &&
            !r
          )
            try {
              return await C(e, { ...i, blockNumber: h, blockTag: f });
            } catch (e) {
              if (!(e instanceof l.pZ) && !(e instanceof l.mm)) throw e;
            }
          let o = await e.request({
            method: "eth_call",
            params: r ? [i, n, r] : [i, n],
          });
          if ("0x" === o) return { data: void 0 };
          return { data: o };
        } catch (o) {
          let r = (function (e) {
              if (!(e instanceof s.G)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(o),
            { offchainLookup: a, offchainLookupSignature: i } = await n
              .e(92951)
              .then(n.bind(n, 92951));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === i && j)
            return { data: await a(e, { data: r, to: j }) };
          if (z && r?.slice(0, 10) === "0x101bb98d")
            throw new u.Mo({ factory: T });
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, m.k)(e, n);
              return t instanceof b.cj ? e : t;
            })();
            return new u.cg(r, { docsPath: t, ...n });
          })(o, { ...t, account: L, chain: e.chain });
        }
      }
      async function C(e, t) {
        let { batchSize: n = 1024, wait: r = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: a,
            blockTag: o = "latest",
            data: s,
            multicallAddress: d,
            to: b,
          } = t,
          m = d;
        if (!m) {
          if (!e.chain) throw new l.pZ();
          m = (0, f.L)({
            blockNumber: a,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let y = (a ? (0, p.eC)(a) : void 0) || o,
          { schedule: g } = (0, w.S)({
            id: `${e.uid}.${y}`,
            wait: r,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, h.R)({
                  abi: i.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                a = await e.request({
                  method: "eth_call",
                  params: [{ data: r, to: m }, y],
                });
              return (0, c.k)({
                abi: i.F8,
                args: [n],
                functionName: "aggregate3",
                data: a || "0x",
              });
            },
          }),
          [{ returnData: v, success: x }] = await g({ data: s, to: b });
        if (!x) throw new u.VQ({ data: v });
        return "0x" === v ? { data: void 0 } : { data: v };
      }
    },
    38233: function (e, t, n) {
      "use strict";
      n.d(t, {
        $o: function () {
          return u;
        },
        F8: function () {
          return r;
        },
        X$: function () {
          return l;
        },
        du: function () {
          return o;
        },
        k3: function () {
          return i;
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
        a = [
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
        i = [
          ...a,
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
        o = [
          ...a,
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
        l = [
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
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ];
    },
    58162: function (e, t, n) {
      "use strict";
      n.d(t, {
        NO: function () {
          return r;
        },
        ST: function () {
          return i;
        },
        pG: function () {
          return a;
        },
      });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        a =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        i =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    76030: function (e, t, n) {
      "use strict";
      n.d(t, {
        Zn: function () {
          return a;
        },
        ez: function () {
          return r;
        },
      });
      let r = { gwei: 9, wei: 18 },
        a = { ether: -9, wei: 9 };
    },
    44677: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bk: function () {
          return o;
        },
        Yl: function () {
          return i;
        },
        mm: function () {
          return a;
        },
        pZ: function () {
          return s;
        },
      });
      var r = n(52301);
      class a extends r.G {
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
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class i extends r.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class o extends r.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class s extends r.G {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
    },
    37784: function (e, t, n) {
      "use strict";
      n.d(t, {
        cg: function () {
          return y;
        },
        uq: function () {
          return g;
        },
        Lu: function () {
          return w;
        },
        Dk: function () {
          return v;
        },
        Mo: function () {
          return x;
        },
        VQ: function () {
          return E;
        },
      });
      var r = n(22614),
        a = n(64495),
        i = n(58330),
        o = n(2826),
        s = n(67291);
      function l({
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
      var u = n(70185),
        c = n(28903),
        d = n(92959),
        h = n(43561),
        f = n(52301),
        p = n(57651),
        b = n(61317),
        m = n(34532);
      class y extends f.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: i,
            gas: o,
            gasPrice: s,
            maxFeePerGas: l,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: m,
            stateOverride: y,
          }
        ) {
          let g = t ? (0, r.T)(t) : void 0,
            w = (0, b.xr)({
              from: g?.address,
              to: f,
              value:
                void 0 !== m &&
                `${(0, c.d)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: i,
              gas: o,
              gasPrice: void 0 !== s && `${(0, d.o)(s)} gwei`,
              maxFeePerGas: void 0 !== l && `${(0, d.o)(l)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.o)(u)} gwei`,
              nonce: h,
            });
          y &&
            (w += `
${(0, p.Bj)(y)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends f.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: a,
            functionName: i,
            sender: s,
          }
        ) {
          let c = (0, u.mE)({ abi: t, args: n, name: i }),
            d = c
              ? l({
                  abiItem: c,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = c ? (0, o.t)(c, { includeName: !0 }) : void 0,
            f = (0, b.xr)({
              address: r && (0, m.C)(r),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(i?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: s,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
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
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = i),
            (this.sender = s);
        }
      }
      class w extends f.G {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, u, c, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (f = (0, i.p)({ abi: e, data: t }));
              if ("Error" === r) c = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                c = a.$[e];
              } else {
                let e = n ? (0, o.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? l({
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
          else r && (c = r);
          s instanceof h.yP &&
            ((d = s.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (c && "execution reverted" !== c) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    c || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: s,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
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
            (this.data = f),
            (this.reason = c),
            (this.signature = d);
        }
      }
      class v extends f.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends f.G {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class E extends f.G {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
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
    95253: function (e, t, n) {
      "use strict";
      n.d(t, {
        C_: function () {
          return d;
        },
        G$: function () {
          return s;
        },
        Hh: function () {
          return o;
        },
        M_: function () {
          return i;
        },
        WF: function () {
          return h;
        },
        ZI: function () {
          return l;
        },
        cj: function () {
          return m;
        },
        cs: function () {
          return b;
        },
        dR: function () {
          return f;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return c;
        },
        vU: function () {
          return u;
        },
      });
      var r = n(92959),
        a = n(52301);
      class i extends a.G {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(i, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class o extends a.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends a.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class l extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class c extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends a.G {
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
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends a.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends a.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends a.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends a.G {
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
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends a.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    24250: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gg: function () {
          return o;
        },
        W5: function () {
          return l;
        },
        bs: function () {
          return s;
        },
      });
      var r = n(67291),
        a = n(52301),
        i = n(34532);
      class o extends a.G {
        constructor({
          body: e,
          cause: t,
          details: n,
          headers: a,
          status: o,
          url: s,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: n,
            metaMessages: [
              o && `Status: ${o}`,
              `URL: ${(0, i.G)(s)}`,
              e && `Request body: ${(0, r.P)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
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
            (this.headers = a),
            (this.status = o),
            (this.url = s);
        }
      }
      class s extends a.G {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, i.G)(n)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
            name: "RpcRequestError",
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
      class l extends a.G {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, i.G)(t)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    74952: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return l;
        },
        GD: function () {
          return g;
        },
        I0: function () {
          return C;
        },
        KB: function () {
          return b;
        },
        LX: function () {
          return u;
        },
        Og: function () {
          return f;
        },
        PE: function () {
          return v;
        },
        Pv: function () {
          return y;
        },
        Ts: function () {
          return x;
        },
        XS: function () {
          return d;
        },
        ab: function () {
          return w;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return S;
        },
        nY: function () {
          return c;
        },
        pT: function () {
          return p;
        },
        s7: function () {
          return s;
        },
        u5: function () {
          return E;
        },
        x3: function () {
          return k;
        },
        yR: function () {
          return h;
        },
      });
      var r = n(52301),
        a = n(24250);
      class i extends r.G {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, name: i, shortMessage: o }
        ) {
          super(o, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
            name: i || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = i || e.name),
            (this.code = e instanceof a.bs ? e.code : t ?? -1);
        }
      }
      class o extends i {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends i {
        constructor(e) {
          super(e, {
            code: s.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class l extends i {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class c extends i {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends i {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends i {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends i {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
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
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends i {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends i {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not implemented.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class y extends i {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends i {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class w extends o {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class v extends o {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class E extends o {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class C extends o {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class k extends o {
        constructor(e) {
          super(e, {
            code: k.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(k, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class S extends i {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    57651: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return a;
        },
        Z8: function () {
          return i;
        },
      });
      var r = n(52301);
      class a extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class i extends r.G {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function o(e) {
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
              n.state && (r += "      state:\n" + o(n.state)),
              n.stateDiff && (r += "      stateDiff:\n" + o(n.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    61317: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bh: function () {
          return c;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return l;
        },
        mc: function () {
          return h;
        },
        mk: function () {
          return u;
        },
        xY: function () {
          return s;
        },
        xr: function () {
          return o;
        },
      });
      var r = n(28903),
        a = n(92959),
        i = n(52301);
      function o(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class s extends i.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class l extends i.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              o(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class u extends i.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: s,
            gas: l,
            gasPrice: u,
            maxFeePerGas: c,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              o({
                chain: i && `${i?.name} (id: ${i?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, r.d)(p)} ${i?.nativeCurrency?.symbol || "ETH"}`,
                data: s,
                gas: l,
                gasPrice: void 0 !== u && `${(0, a.o)(u)} gwei`,
                maxFeePerGas: void 0 !== c && `${(0, a.o)(c)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, a.o)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class c extends i.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: a,
        }) {
          let i = "Transaction";
          n &&
            void 0 !== a &&
            (i = `Transaction at block time "${n}" at index "${a}"`),
            e &&
              void 0 !== a &&
              (i = `Transaction at block hash "${e}" at index "${a}"`),
            t &&
              void 0 !== a &&
              (i = `Transaction at block number "${t}" at index "${a}"`),
            r && (i = `Transaction with hash "${r}"`),
            super(`${i} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends i.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class h extends i.G {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    34532: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return r;
        },
        G: function () {
          return a;
        },
      });
      let r = (e) => e,
        a = (e) => e;
    },
    79227: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(43561),
        a = n(63589),
        i = n(70185);
      let o = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: l } = e,
          u = t[0];
        if (s) {
          let e = (0, i.mE)({ abi: t, args: n, name: s });
          if (!e) throw new r.xL(s, { docsPath: o });
          u = e;
        }
        if ("function" !== u.type) throw new r.xL(void 0, { docsPath: o });
        if (!u.outputs) throw new r.MX(u.name, { docsPath: o });
        let c = (0, a.r)(u.outputs, l);
        return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
      }
    },
    62508: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(43561),
        a = n(30968),
        i = n(47052);
      let o = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let l = t.find((e) => "type" in e && "constructor" === e.type);
        if (!l) throw new r.fM({ docsPath: o });
        if (!("inputs" in l) || !l.inputs || 0 === l.inputs.length)
          throw new r.cO({ docsPath: o });
        let u = (0, i.E)(l.inputs, n);
        return (0, a.SM)([s, u]);
      }
    },
    90985: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return c;
        },
      });
      var r = n(30968),
        a = n(47052),
        i = n(43561),
        o = n(87089),
        s = n(2826),
        l = n(70185);
      let u = "/docs/contract/encodeFunctionData";
      function c(e) {
        let { args: t } = e,
          { abi: n, functionName: c } =
            1 === e.abi.length && e.functionName?.startsWith("0x")
              ? e
              : (function (e) {
                  let { abi: t, args: n, functionName: r } = e,
                    a = t[0];
                  if (r) {
                    let e = (0, l.mE)({ abi: t, args: n, name: r });
                    if (!e) throw new i.xL(r, { docsPath: u });
                    a = e;
                  }
                  if ("function" !== a.type)
                    throw new i.xL(void 0, { docsPath: u });
                  return { abi: [a], functionName: (0, o.C)((0, s.t)(a)) };
                })(e),
          d = n[0],
          h = "inputs" in d && d.inputs ? (0, a.E)(d.inputs, t ?? []) : void 0;
        return (0, r.SM)([c, h ?? "0x"]);
      }
    },
    34168: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(44677);
      function a({ blockNumber: e, chain: t, contract: n }) {
        let a = t?.contracts?.[n];
        if (!a) throw new r.mm({ chain: t, contract: { name: n } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new r.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    26582: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return a;
        },
      });
      var r = n(73462);
      function a(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.v)(t) ? t : null;
      }
    },
    64843: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var r = n(67834),
        a = n(38997),
        i = n(5324),
        o = n(26582);
      function s(e) {
        let t = new Uint8Array(32).fill(0);
        return e ? (0, o.i)(e) || (0, i.w)((0, r.qX)(e)) : (0, a.ci)(t);
      }
    },
    67122: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(52301),
        a = n(95253);
      function i(e, t) {
        let n = (e.details || "").toLowerCase(),
          i = e instanceof r.G ? e.walk((e) => e?.code === a.M_.code) : e;
        return i instanceof r.G
          ? new a.M_({ cause: e, message: i.details })
          : a.M_.nodeMessage.test(n)
          ? new a.M_({ cause: e, message: e.details })
          : a.Hh.nodeMessage.test(n)
          ? new a.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.G$.nodeMessage.test(n)
          ? new a.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.ZI.nodeMessage.test(n)
          ? new a.ZI({ cause: e, nonce: t?.nonce })
          : a.vU.nodeMessage.test(n)
          ? new a.vU({ cause: e, nonce: t?.nonce })
          : a.se.nodeMessage.test(n)
          ? new a.se({ cause: e, nonce: t?.nonce })
          : a.C_.nodeMessage.test(n)
          ? new a.C_({ cause: e })
          : a.WF.nodeMessage.test(n)
          ? new a.WF({ cause: e, gas: t?.gas })
          : a.dR.nodeMessage.test(n)
          ? new a.dR({ cause: e, gas: t?.gas })
          : a.pZ.nodeMessage.test(n)
          ? new a.pZ({ cause: e })
          : a.cs.nodeMessage.test(n)
          ? new a.cs({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.cj({ cause: e });
      }
    },
    97503: function (e, t, n) {
      "use strict";
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let a of Object.keys(r))
              a in e && (n[a] = e[a]),
                r[a] &&
                  "object" == typeof r[a] &&
                  !Array.isArray(r[a]) &&
                  t(r[a]);
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
    95841: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(61112);
      let a = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: n, wait: i = 0, sort: o }) {
        let s = async () => {
            let t = c();
            l();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let n = 0; n < t.length; n++) {
                    let { resolve: r } = t[n];
                    r?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { reject: r } = t[n];
                    r?.(e);
                  }
                });
          },
          l = () => a.delete(t),
          u = () => c().map(({ args: e }) => e),
          c = () => a.get(t) || [],
          d = (e) => a.set(t, [...c(), e]);
        return {
          flush: l,
          async schedule(e) {
            let { promise: t, resolve: a, reject: o } = (0, r.n)();
            return (
              (n?.([...u(), e]) && s(), c().length > 0)
                ? d({ args: e, resolve: a, reject: o })
                : (d({ args: e, resolve: a, reject: o }), setTimeout(s, i)),
              t
            );
          },
        };
      }
    },
    61112: function (e, t, n) {
      "use strict";
      function r() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      n.d(t, {
        n: function () {
          return r;
        },
      });
    },
    9680: function (e, t, n) {
      "use strict";
      n.d(t, {
        mF: function () {
          return u;
        },
      });
      var r = n(91675),
        a = n(44475),
        i = n(57651),
        o = n(7738),
        s = n(38997);
      function l(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new a.W_({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new a.W_({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...a } of e) {
          if (!(0, o.U)(n, { strict: !1 })) throw new r.b({ address: n });
          if (t[n]) throw new i.Nc({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: a, code: o } = e,
              u = {};
            if (
              (void 0 !== o && (u.code = o),
              void 0 !== t && (u.balance = (0, s.eC)(t)),
              void 0 !== n && (u.nonce = (0, s.eC)(n)),
              void 0 !== r && (u.state = l(r)),
              void 0 !== a)
            ) {
              if (u.state) throw new i.Z8();
              u.stateDiff = l(a);
            }
            return u;
          })(a);
        }
        return t;
      }
    },
    67291: function (e, t, n) {
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
    78032: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return u;
        },
      });
      var r = n(22614),
        a = n(97379),
        i = n(91675),
        o = n(95253),
        s = n(61317),
        l = n(7738);
      function u(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: u,
            maxPriorityFeePerGas: c,
            to: d,
          } = e,
          h = t ? (0, r.T)(t) : void 0;
        if (h && !(0, l.U)(h.address)) throw new i.b({ address: h.address });
        if (d && !(0, l.U)(d)) throw new i.b({ address: d });
        if (void 0 !== n && (void 0 !== u || void 0 !== c)) throw new s.xY();
        if (u && u > a.zL) throw new o.Hh({ maxFeePerGas: u });
        if (c && u && c > u)
          throw new o.cs({ maxFeePerGas: u, maxPriorityFeePerGas: c });
      }
    },
    25131: function (e, t, n) {
      "use strict";
      n.d(t, {
        cj: function () {
          return m;
        },
        H6: function () {
          return p;
        },
        iC: function () {
          return b;
        },
      });
      var r = n(43561),
        a = n(91675),
        i = n(67291),
        o = n(52301);
      class s extends o.G {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, i.P)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class l extends o.G {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class u extends o.G {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var c = n(7738),
        d = n(61995),
        h = n(38997),
        f = n(69520);
      function p(e) {
        let { domain: t, message: n, primaryType: r, types: a } = e,
          o = (e, t) => {
            let n = { ...t };
            for (let t of e) {
              let { name: e, type: r } = t;
              "address" === r && (n[e] = n[e].toLowerCase());
            }
            return n;
          },
          s = a.EIP712Domain && t ? o(a.EIP712Domain, t) : {},
          l = (() => {
            if ("EIP712Domain" !== r) return o(a[r], n);
          })();
        return (0, i.P)({ domain: s, message: l, primaryType: r, types: a });
      }
      function b(e) {
        let { domain: t, message: n, primaryType: i, types: o } = e,
          p = (e, t) => {
            for (let n of e) {
              let { name: e, type: i } = n,
                s = t[e],
                l = i.match(f.lh);
              if (l && ("number" == typeof s || "bigint" == typeof s)) {
                let [e, t, n] = l;
                (0, h.eC)(s, {
                  signed: "int" === t,
                  size: Number.parseInt(n) / 8,
                });
              }
              if ("address" === i && "string" == typeof s && !(0, c.U)(s))
                throw new a.b({ address: s });
              let b = i.match(f.eL);
              if (b) {
                let [e, t] = b;
                if (t && (0, d.d)(s) !== Number.parseInt(t))
                  throw new r.KY({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, d.d)(s),
                  });
              }
              let m = o[i];
              m &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new u({ type: e });
                })(i),
                p(m, s));
            }
          };
        if (o.EIP712Domain && t) {
          if ("object" != typeof t) throw new s({ domain: t });
          p(o.EIP712Domain, t);
        }
        if ("EIP712Domain" !== i) {
          if (o[i]) p(o[i], n);
          else throw new l({ primaryType: i, types: o });
        }
      }
      function m({ domain: e }) {
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
    28903: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(76030),
        a = n(99377);
      function i(e, t = "wei") {
        return (0, a.b)(e, r.ez[t]);
      }
    },
    92959: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return i;
        },
      });
      var r = n(76030),
        a = n(99377);
      function i(e, t = "wei") {
        return (0, a.b)(e, r.Zn[t]);
      }
    },
    99377: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [a, i] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (i = i.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${a || "0"}${i ? `.${i}` : ""}`
        );
      }
      n.d(t, {
        b: function () {
          return r;
        },
      });
    },
  },
]);
