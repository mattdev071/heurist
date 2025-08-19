(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [79742],
  {
    17876: function (e, t, s) {
      var n = 0 / 0,
        a = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        o = parseInt,
        c = "object" == typeof s.g && s.g && s.g.Object === Object && s.g,
        d = "object" == typeof self && self && self.Object === Object && self,
        u = c || d || Function("return this")(),
        f = Object.prototype.toString,
        m = Math.max,
        x = Math.min,
        h = function () {
          return u.Date.now();
        };
      function p(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function b(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == f.call(t))
        )
          return n;
        if (p(e)) {
          var t,
            s = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = p(s) ? s + "" : s;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(a, "");
        var c = r.test(e);
        return c || l.test(e) ? o(e.slice(2), c ? 2 : 8) : i.test(e) ? n : +e;
      }
      e.exports = function (e, t, s) {
        var n,
          a,
          i,
          r,
          l,
          o,
          c = 0,
          d = !1,
          u = !1,
          f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function w(t) {
          var s = n,
            i = a;
          return (n = a = void 0), (c = t), (r = e.apply(i, s));
        }
        function v(e) {
          var s = e - o,
            n = e - c;
          return void 0 === o || s >= t || s < 0 || (u && n >= i);
        }
        function j() {
          var e,
            s,
            n,
            a = h();
          if (v(a)) return g(a);
          l = setTimeout(
            j,
            ((e = a - o), (s = a - c), (n = t - e), u ? x(n, i - s) : n)
          );
        }
        function g(e) {
          return ((l = void 0), f && n) ? w(e) : ((n = a = void 0), r);
        }
        function y() {
          var e,
            s = h(),
            i = v(s);
          if (((n = arguments), (a = this), (o = s), i)) {
            if (void 0 === l)
              return (c = e = o), (l = setTimeout(j, t)), d ? w(e) : r;
            if (u) return (l = setTimeout(j, t)), w(o);
          }
          return void 0 === l && (l = setTimeout(j, t)), r;
        }
        return (
          (t = b(t) || 0),
          p(s) &&
            ((d = !!s.leading),
            (i = (u = "maxWait" in s) ? m(b(s.maxWait) || 0, t) : i),
            (f = "trailing" in s ? !!s.trailing : f)),
          (y.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (n = o = a = l = void 0);
          }),
          (y.flush = function () {
            return void 0 === l ? r : g(h());
          }),
          y
        );
      };
    },
    79742: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        });
      var n = s(90132),
        a = s(83977),
        i = s(92286),
        r = s(3070),
        l = s(90600),
        o = s(73526),
        c = function () {
          return (0, n.jsxs)("div", {
            className:
              "desc m-auto flex max-w-[1440px] flex-col justify-between text-white",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "font-['Inter'], sans-serif; text-[60px]/[60px] lg:text-[80px]/[80px]",
                children: [
                  (0, n.jsx)("h1", {
                    className: "sr-only",
                    children:
                      "Full-Stack AI Infrastructure for Onchain Economy - Decentralized, Composable, Compliant, and Permissionless",
                  }),
                  (0, n.jsxs)("div", {
                    className: "font-semibold uppercase",
                    "aria-hidden": "true",
                    children: [
                      (0, n.jsx)("span", {
                        className: "block",
                        children: "FULL-STACK",
                      }),
                      (0, n.jsx)("span", {
                        className: "block text-nowrap pl-60",
                        children: "AI INFRA",
                      }),
                      (0, n.jsx)("span", {
                        className: "block",
                        children: "FOR ONCHAIN",
                      }),
                      (0, n.jsx)("span", {
                        className: "block pl-60",
                        children: "ECONOMY",
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                children: (0, n.jsxs)("div", {
                  className: "relative flex items-end justify-between",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mt-48 flex w-1/2 grow text-[24px]",
                      children: (0, n.jsxs)(l.default, {
                        href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xTBA",
                        className: "group ml-4 flex",
                        children: [
                          "Buy Now",
                          " ",
                          (0, n.jsx)("span", {
                            className:
                              "ml-2 rounded-full bg-white p-3 transition-transform duration-300 group-hover:rotate-45",
                            children: (0, n.jsx)(o.Z, {}),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "flex w-1/2 flex-col items-center text-white",
                      children: (0, n.jsxs)("p", {
                        className: "custom-font-SFMono-regular flex text-base",
                        children: [
                          (0, n.jsx)("span", {
                            className: "mr-4 mt-[-5px] text-2xl",
                            children: "+",
                          }),
                          (0, n.jsxs)("span", {
                            className: "flex w-[430px] flex-col items-start",
                            children: [
                              "Compose your agent swarm with Insight Mesh. Create and customize fully managed MCP servers connecting to 100+ Web3 tools.",
                              (0, n.jsxs)(l.default, {
                                href: "",
                                target: "_blank",
                                className:
                                  "group relative mt-4 block overflow-hidden font-['Inter']",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "relative z-10",
                                    children: "Deploy Now",
                                  }),
                                  (0, n.jsx)("span", {
                                    className:
                                      "absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        d = s(82644),
        u = s(62385),
        f = s(53956),
        m = s(19487),
        x = s.n(m),
        h = s(55881),
        p = s(20049),
        b = s(32543),
        w = (e) => {
          let {
              text: t = "\n  ADVANCING AGI -\n  DECENTRALIZED COMPUTING -\n  AUTONOMOUS AGENTS -\n  TRANSPARENT TECHNOLOGY -\n  MONETIZATION FOR BUILDERS -\n  FOSTERING INNOVATION -\n  CRYPTO-NATIVE AI APPS -\n  SHAPING TOMORROW, TODAY -\n  ",
              triggerOffset: s = 200,
            } = e,
            a = (0, h.useRef)(null),
            i = (0, h.useRef)(null),
            [r, l] = (0, h.useState)(0);
          if (
            ((0, h.useEffect)(() => {
              if ("string" != typeof t || 0 === t.length) {
                console.error(
                  "ScrollRevealText: text prop must be a non-empty string"
                );
                return;
              }
              let e = () => {
                if (!a.current || !i.current) return;
                let e = a.current.getBoundingClientRect(),
                  n = window.innerHeight,
                  r = n - e.top,
                  o = e.top + e.height / 2;
                (i.current.style.transform =
                  "translate(-50%, calc(-50% + ".concat(
                    (n / 2 - o) * 0.3,
                    "px))"
                  )),
                  r > s
                    ? l(
                        Math.floor(
                          Math.max(0, Math.min(1, (r - s) / e.height)) *
                            t.replace(/\s+/g, "").length +
                            5
                        )
                      )
                    : l(0);
              };
              return (
                window.addEventListener("scroll", e),
                e(),
                () => window.removeEventListener("scroll", e)
              );
            }, [t, s]),
            "string" != typeof t || 0 === t.length)
          )
            return null;
          let o = t.trim().split(" -"),
            c = 0;
          return (0, n.jsxs)("div", {
            className: "jsx-e3a7b6977c19f890 scroll-reveal-text-container",
            children: [
              (0, n.jsxs)("div", {
                ref: a,
                className: "jsx-e3a7b6977c19f890 scroll-reveal-text relative",
                children: [
                  (0, n.jsx)("div", {
                    ref: i,
                    className:
                      "jsx-e3a7b6977c19f890 absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 will-change-transform",
                    children: (0, n.jsx)(p.default, {
                      src: b.default,
                      alt: "logo",
                      width: 160,
                      height: 160,
                    }),
                  }),
                  o.map((e, t) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className:
                          "jsx-e3a7b6977c19f890 text-line text-[60px] leading-[72px] xl:text-[64px]/[92px]",
                        children: e
                          .trim()
                          .split("")
                          .map((e, t) => {
                            let s = c < r;
                            return (
                              c++,
                              (0, n.jsx)(
                                "span",
                                {
                                  style: {
                                    color: s ? "#000" : "#ccc",
                                    transition: "color 0.3s ease",
                                  },
                                  className: "jsx-e3a7b6977c19f890 mr-[2px]",
                                  children: e,
                                },
                                t
                              )
                            );
                          }),
                      },
                      t
                    )
                  ),
                ],
              }),
              (0, n.jsx)(x(), {
                id: "e3a7b6977c19f890",
                children:
                  ".scroll-reveal-text-container.jsx-e3a7b6977c19f890{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.scroll-reveal-text.jsx-e3a7b6977c19f890{padding:20px 0;color:#a7a6a1;font-family:Inter;font-style:normal;font-weight:600;letter-spacing:-2.65px;text-transform:uppercase;text-align:left}.text-line.jsx-e3a7b6977c19f890{white-space:nowrap}",
              }),
            ],
          });
        },
        v = s(39291),
        j = (e) => {
          let { texts: t, scrollDuration: s, pauseDuration: a } = e,
            [i, r] = (0, h.useState)(0),
            [l, o] = (0, h.useState)(!1);
          return (
            (0, h.useEffect)(() => {
              let e = setInterval(() => {
                r((e) => (e + 1) % t.length);
              }, s + a);
              return () => clearInterval(e);
            }, [t, s, a]),
            (0, n.jsxs)("div", {
              className:
                x().dynamic([["7b056f57f9679ed6", [a, s, s]]]) +
                " noticeWrap custom-font-playfair-display relative m-auto h-20 max-w-[1440px] overflow-hidden",
              children: [
                t.map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      style: {
                        top: t === i ? "0" : "100%",
                        opacity: t === i ? 1 : 0,
                        transition: "top "
                          .concat(s, "ms ease-in-out, opacity ")
                          .concat(a, "ms ease-in-out"),
                      },
                      className:
                        x().dynamic([["7b056f57f9679ed6", [a, s, s]]]) +
                        " " +
                        "noticeRow  ".concat(t === i ? "active" : ""),
                      children: e,
                    },
                    t
                  )
                ),
                (0, n.jsx)(x(), {
                  id: "7b056f57f9679ed6",
                  dynamic: [a, s, s],
                  children:
                    ".noticeWrap.__jsx-style-dynamic-selector{overflow:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:80px;font-weight:600;line-height:70px;color:#877dff}.noticeRow.__jsx-style-dynamic-selector{position:absolute;height:100%;width:100%;opacity:0;-webkit-transition:opacity "
                      .concat(a, "ms ease-in-out;-moz-transition:opacity ")
                      .concat(a, "ms ease-in-out;-o-transition:opacity ")
                      .concat(a, "ms ease-in-out;transition:opacity ")
                      .concat(
                        a,
                        "ms ease-in-out}.noticeRow.active.__jsx-style-dynamic-selector{opacity:1}@-webkit-keyframes slideIn{0%{top:100%}100%{top:0}}@-moz-keyframes slideIn{0%{top:100%}100%{top:0}}@-o-keyframes slideIn{0%{top:100%}100%{top:0}}@keyframes slideIn{0%{top:100%}100%{top:0}}@-webkit-keyframes slideOut{0%{top:0}100%{top:-100%}}@-moz-keyframes slideOut{0%{top:0}100%{top:-100%}}@-o-keyframes slideOut{0%{top:0}100%{top:-100%}}@keyframes slideOut{0%{top:0}100%{top:-100%}}.noticeRow.active.__jsx-style-dynamic-selector{-webkit-animation:slideIn "
                      )
                      .concat(s, "ms forwards;-moz-animation:slideIn ")
                      .concat(s, "ms forwards;-o-animation:slideIn ")
                      .concat(s, "ms forwards;animation:slideIn ")
                      .concat(
                        s,
                        "ms forwards}.noticeRow.__jsx-style-dynamic-selector:not(.active){-webkit-animation:slideOut "
                      )
                      .concat(s, "ms forwards;-moz-animation:slideOut ")
                      .concat(s, "ms forwards;-o-animation:slideOut ")
                      .concat(s, "ms forwards;animation:slideOut ")
                      .concat(s, "ms forwards}"),
                }),
              ],
            })
          );
        },
        g = s(87971),
        y = s.n(g);
      (0, i.default)(() => s.e(86963).then(s.bind(s, 86963)), {
        loadableGenerated: { webpack: () => [86963] },
        ssr: !1,
      });
      let A = (0, i.default)(() => s.e(42803).then(s.bind(s, 42803)), {
        loadableGenerated: { webpack: () => [42803] },
        ssr: !1,
      });
      (0, i.default)(() => s.e(45147).then(s.bind(s, 45147)), {
        loadableGenerated: { webpack: () => [45147] },
        ssr: !1,
      }),
        (0, i.default)(() => s.e(75527).then(s.bind(s, 75527)), {
          loadableGenerated: { webpack: () => [75527] },
          ssr: !1,
        }),
        (0, i.default)(() => s.e(81830).then(s.bind(s, 81830)), {
          loadableGenerated: { webpack: () => [81830] },
          ssr: !1,
        }),
        (0, i.default)(() => s.e(64063).then(s.bind(s, 64063)), {
          loadableGenerated: { webpack: () => [64063] },
          ssr: !1,
        });
      let N = (0, i.default)(() => s.e(55114).then(s.bind(s, 55114)), {
          loadableGenerated: { webpack: () => [55114] },
          ssr: !1,
        }),
        k = (0, i.default)(() => s.e(47075).then(s.bind(s, 47075)), {
          loadableGenerated: { webpack: () => [47075] },
          ssr: !1,
        });
      var S = function () {
        return (0, n.jsxs)("div", {
          className: "",
          children: [
            (0, n.jsx)(f.Z, {}),
            (0, n.jsxs)("main", {
              className: "".concat(y().root, " w-full bg-[#f6f8fc]"),
              children: [
                (0, n.jsx)(r.Z, {}),
                (0, n.jsxs)("div", {
                  className:
                    "relative z-10 m-auto flex h-[880px] items-center justify-center bg-[#1d1d1b]",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute left-0 top-[-10px] z-[-1] h-full w-full",
                      children: (0, n.jsx)(a.Z, {
                        scene:
                          "https://prod.spline.design/nqRMZIJYA0gKanl5/scene.splinecode",
                        className: "h-full w-full",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "relative flex h-full w-full justify-center px-20 2xl:px-0",
                      children: (0, n.jsxs)("div", {
                        className: "relative m-auto w-full",
                        children: [
                          (0, n.jsx)(j, {
                            texts: [
                              "DECENTRALIZED",
                              "COMPOSABLE",
                              "COMPLIANT",
                              "PERMISSIONLESS",
                            ],
                            scrollDuration: 1e3,
                            pauseDuration: 500,
                          }),
                          (0, n.jsx)(c, {}),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "page2-content relative bg-white pt-20",
                  children: (0, n.jsxs)("div", {
                    className: "m-auto max-w-[1440px]",
                    children: [
                      (0, n.jsx)(w, { triggerOffset: 500 }),
                      (0, n.jsx)(N, {}),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "page3-content relative",
                  children: [
                    (0, n.jsx)(k, { children: (0, n.jsx)(A, {}) }),
                    (0, n.jsx)(v.Z, {}),
                    (0, n.jsx)(d.Z, {}),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "page6-content relative",
                  children: (0, n.jsx)(u.Z, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    3070: function (e, t, s) {
      "use strict";
      var n = s(90132),
        a = s(19487),
        i = s.n(a),
        r = s(55881),
        l = s(45119),
        o = s.n(l);
      t.Z = () => {
        let e = (0, r.useRef)(null),
          t = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            let s = e.current;
            if (!s) return;
            s.style.transform = "translate(-50%, -50%)";
            let n = 0,
              a = 0,
              i = (e) => {
                (n = e.clientX),
                  (a = e.clientY),
                  t.current || (t.current = requestAnimationFrame(r));
              },
              r = () => {
                (s.style.transform = "translate("
                  .concat(n, "px, ")
                  .concat(a, "px)")),
                  (t.current = void 0);
              };
            return (
              window.addEventListener("mousemove", i),
              () => {
                window.removeEventListener("mousemove", i),
                  t.current && cancelAnimationFrame(t.current);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "jsx-6c058c029080624e " + (o().root || ""),
                children: (0, n.jsx)("div", {
                  ref: e,
                  style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#CDF138",
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.1s ease-out",
                    pointerEvents: "none",
                    zIndex: 9999,
                  },
                  className: "jsx-6c058c029080624e",
                }),
              }),
              (0, n.jsx)(i(), {
                id: "6c058c029080624e",
                children: "body{cursor:auto}",
              }),
            ],
          })
        );
      };
    },
    62385: function (e, t, s) {
      "use strict";
      var n = s(90132),
        a = s(90600),
        i = s(80870),
        r = s(88509);
      t.Z = function (e) {
        let { mode: t = "dark" } = e;
        return (0, n.jsx)("div", {
          className: "px-4 md:px-20 2xl:px-0 ".concat(
            "light" === t ? "bg-slate-200" : "bg-[#1d1d1b]"
          ),
          children: (0, n.jsxs)("div", {
            className: "m-auto max-w-[1440px]",
            children: [
              (0, n.jsxs)("div", {
                className: "flex justify-between pt-[60px] md:pt-[120px]",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex w-[480px] flex-col items-start",
                    children: [
                      (0, n.jsxs)("p", {
                        className: "text-left mb-8 ".concat(
                          "light" === t ? "text-[#696963]" : "text-white"
                        ),
                        children: [
                          "Full-stack Solutions for Onchain AI ",
                          (0, n.jsx)("br", {}),
                          "Powered By An Elastic Chain",
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "w-full flex justify-start mb-16",
                        children: (0, n.jsx)(r.Z, { mode: t }),
                      }),
                    ],
                  }),
                  [
                    {
                      title: "Ecosystem",
                      showArrow: !0,
                      list: [
                        {
                          title: "Insight Imagine",
                          link: "/",
                        },
                        {
                          title: "Pondera - Free AI Chat",
                          link: "",
                        },
                        {
                          title: "Deep Research",
                          link: "",
                        },
                        {
                          title: "Insight Digital Assets",
                          link: "https://tokenize.heurist.ai",
                        },
                      ],
                    },
                    {
                      title: "Buy INSIGHT",
                      showArrow: !1,
                      list: [
                        {
                          title: "Uniswap",
                          link: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xTBA",
                        },

                        {
                          title: "MEXC",
                          link: "https://www.mexc.com/exchange/HEU_USDT",
                        },
                        {
                          title: "Gate.io",
                          link: "https://www.gate.io/trade/HEU_USDT",
                        },
                      ],
                    },
                    {
                      title: "Track INSIGHT",
                      showArrow: !1,
                      list: [
                        {
                          title: "DexScreener",
                          link: "https://dexscreener.com/base/0xb655dc66ecead581d1f1a5759c2c37c2dbef2275",
                        },
                        {
                          title: "CoinGecko",
                          link: "https://www.coingecko.com/en/coins/heurist",
                        },
                      ],
                    },
                    {
                      title: "Follow Us",
                      showArrow: !1,
                      list: [
                        { title: "Telegram", link: "https://t.me/heurist_ai" },
                        {
                          title: "Twitter",
                          link: "https://twitter.com/heurist_ai",
                        },
                        {
                          title: "Medium",
                          link: "https://heuristai.medium.com/",
                        },
                        {
                          title: "LinkedIn",
                          link: "https://www.linkedin.com/company/heurist-ai",
                        },
                        { title: "Blog", link: "/blog" },
                      ],
                    },
                  ].map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className: "text-base font-normal",
                        children: [
                          (0, n.jsx)("div", {
                            className: "custom-font-SFMono-medium mb-4 ".concat(
                              "light" === t ? "text-[#696963]" : "text-white"
                            ),
                            children: e.title,
                          }),
                          (0, n.jsx)("ul", {
                            className: "".concat(
                              "light" === t ? "text-[#696963]" : "text-white"
                            ),
                            children: e.list.map((t) =>
                              (0, n.jsx)(
                                "li",
                                {
                                  className: "custom-font-SFMono-regular mb-4",
                                  children: (0, n.jsxs)(a.default, {
                                    href: t.link,
                                    target: "_blank",
                                    className: "flex items-center",
                                    children: [
                                      t.title,
                                      e.showArrow &&
                                        (0, n.jsx)("svg", {
                                          width: "21",
                                          height: "20",
                                          viewBox: "0 0 21 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, n.jsx)("path", {
                                            d: "M16.4578 4.76462L5.26199 15.9605M16.4578 4.76462C15.1795 7.95327 15.0044 11.5031 15.9601 14.8597L16.3143 16.104M16.4578 4.76462C13.2692 6.04302 9.71937 6.21806 6.36275 5.26242L5.11845 4.90816",
                                            stroke: "#696963",
                                            strokeWidth: "1.5",
                                            strokeLinejoin: "bevel",
                                          }),
                                        }),
                                    ],
                                  }),
                                },
                                t.title
                              )
                            ),
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex justify-center pb-16 ".concat(
                  "light" === t ? "text-[#696963]" : "text-white"
                ),
                children: (0, n.jsx)(i.Z, {
                  className: "light" === t ? "invert" : "",
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "custom-font-SFMono-medium flex justify-between border-t border-solid ".concat(
                    "light" === t ? "border-[#393936]" : "border-[#696963]",
                    " py-16 text-[#696963]"
                  ),
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " Insight All Rights Reserved",
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex gap-8 items-center",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "border-b-2 border-transparent text-[#696963] hover:text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono",
                        children: "Terms of Service",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "border-b-2 border-transparent text-[#696963] hover:text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono",
                        children: "Privacy Notice",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    53956: function (e, t, s) {
      "use strict";
      var n = s(90132),
        a = s(55881),
        i = s(20049),
        r = s(90600),
        l = s(749),
        o = s(89690),
        c = s(47802),
        d = s(73526);
      let u = [
          { href: "/stake", label: "Stake", external: !1 },

          { href: "/", label: "Docs", external: !0 },
          { href: "/blog", label: "Blog", external: !1 },
        ],
        f = (e) => {
          let { isNewEcosystem: t, isTransparent: s, mode: a } = e;
          return "light" === a || t || !s
            ? (0, n.jsx)(r.default, {
                href: "/",
                children: (0, n.jsx)(i.default, {
                  src: c.Z,
                  alt: "Logo",
                  width: 116,
                  height: 32,
                }),
              })
            : (0, n.jsx)(r.default, {
                href: "/",
                children: (0, n.jsx)(o.Z, { width: 116, height: 32 }),
              });
        };
      t.Z = (e) => {
        let { mode: t = "dark" } = e,
          s = "/ecosystem" === (0, l.usePathname)(),
          [i, o] = (0, a.useState)(!0),
          [c, m] = (0, a.useState)(!0),
          [x, h] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
          let e = () => {
            let e = window.scrollY;
            e < 10 ? (m(!0), o(!0)) : (m(!1), e < x ? o(!0) : o(!1)), h(e);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, [x]);
        let p = "fixed z-[200] w-full px-20 transition duration-200 2xl:px-0 "
          .concat(s ? "text-black" : "text-white", " ")
          .concat(c ? "bg-transparent" : "bg-white", " ")
          .concat(i ? "translate-y-0" : "-translate-y-full", " ")
          .concat("light" === t ? "bg-slate-200" : "");
        return (0, n.jsx)("header", {
          className: p,
          children: (0, n.jsxs)("nav", {
            className:
              "m-auto flex h-20 max-w-[1440px] items-center justify-between",
            children: [
              (0, n.jsx)(f, { isNewEcosystem: s, mode: t, isTransparent: c }),
              (0, n.jsx)("div", {
                className: "flex ".concat(
                  s || !c ? "text-black" : "text-white",
                  " "
                ),
                children: u.map((e) => {
                  let { href: s, label: a, external: i } = e;
                  return (0, n.jsx)(
                    r.default,
                    {
                      href: s,
                      className: "px-4 font-normal ".concat(
                        "light" === t ? "text-black" : ""
                      ),
                      target: i ? "_blank" : void 0,
                      children: a,
                    },
                    s
                  );
                }),
              }),
              (0, n.jsx)(r.default, {
                href: "/apps",
                target: "_blank",
                className: "text-black",
                children: (0, n.jsxs)("button", {
                  className:
                    "group flex h-10 items-center rounded-full bg-[#cdf138] px-6 py-2",
                  children: [
                    (0, n.jsx)("p", { className: "mr-2", children: "Portal" }),
                    (0, n.jsx)(d.Z, {
                      className:
                        "transition-transform duration-300 group-hover:rotate-45",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    87971: function (e) {
      e.exports = { root: "desktop_root__C4tr8" };
    },
    45119: function (e) {
      e.exports = { root: "CustomCursor_root__36kTq" };
    },
    47802: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/new-nav.de172743.png",
        height: 575,
        width: 2056,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMsOHpFbo2nDmMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVHicY2BiYQABRgYmJgZmZkZGRgAAvQAVAXpxZQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    83977: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(90132),
        a = s(55881),
        i = s(26544),
        r = s(17876);
      let l = [],
        o = { width: "100%", height: "100%" },
        c = (0, a.forwardRef)(function (e, t) {
          var s;
          let {
              className: i,
              children: c,
              debounceTime: d = 300,
              ignoreDimensions: u = l,
              parentSizeStyles: f,
              enableDebounceLeadingCall: m = !0,
              resizeObserverPolyfill: x,
              ...h
            } = e,
            p = (0, a.useRef)(null),
            b = (0, a.useRef)(0),
            [w, v] = (0, a.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            j = (0, a.useMemo)(() => {
              let e = Array.isArray(u) ? u : [u];
              return r(
                (t) => {
                  v((s) =>
                    Object.keys(s)
                      .filter((e) => s[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? s
                      : t
                  );
                },
                d,
                { leading: m }
              );
            }, [d, m, u]);
          return (
            (0, a.useEffect)(() => {
              let e = new (x || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  var t;
                  let {
                    left: s,
                    top: n,
                    width: a,
                    height: i,
                  } = null !== (t = null == e ? void 0 : e.contentRect) &&
                  void 0 !== t
                    ? t
                    : {};
                  b.current = window.requestAnimationFrame(() => {
                    j({ width: a, height: i, top: n, left: s });
                  });
                });
              });
              return (
                p.current && e.observe(p.current),
                () => {
                  window.cancelAnimationFrame(b.current),
                    e.disconnect(),
                    j.cancel();
                }
              );
            }, [j, x]),
            (0, n.jsx)("div", {
              style: { ...o, ...f },
              ref:
                ((s = [t, p]),
                (e) => {
                  s.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: i,
              ...h,
              children: c({ ...w, ref: p.current, resize: j }),
            })
          );
        }),
        d = (0, a.forwardRef)((e, t) => {
          let {
              scene: s,
              style: r,
              onSplineMouseDown: l,
              onSplineMouseUp: o,
              onSplineMouseHover: d,
              onSplineKeyDown: u,
              onSplineKeyUp: f,
              onSplineStart: m,
              onSplineLookAt: x,
              onSplineFollow: h,
              onSplineScroll: p,
              onLoad: b,
              renderOnDemand: w = !0,
              children: v,
              ...j
            } = e,
            g = (0, a.useRef)(null),
            [y, A] = (0, a.useState)(!0),
            [N, k] = (0, a.useState)();
          if (N) throw N;
          return (
            (0, a.useEffect)(() => {
              let e;
              A(!0);
              let t = [
                { name: "mouseDown", cb: l },
                { name: "mouseUp", cb: o },
                { name: "mouseHover", cb: d },
                { name: "keyDown", cb: u },
                { name: "keyUp", cb: f },
                { name: "start", cb: m },
                { name: "lookAt", cb: x },
                { name: "follow", cb: h },
                { name: "scroll", cb: p },
              ];
              return (
                g.current &&
                  ((e = new i.M(g.current, { renderOnDemand: w })),
                  (async function () {
                    for (let n of (await e.load(s), t))
                      n.cb && e.addEventListener(n.name, n.cb);
                    A(!1), null == b || b(e);
                  })().catch((e) => {
                    k(e);
                  })),
                () => {
                  for (let s of t) s.cb && e.removeEventListener(s.name, s.cb);
                  e.dispose();
                }
              );
            }, [s]),
            (0, n.jsx)(c, {
              ref: t,
              parentSizeStyles: { overflow: "hidden", ...r },
              debounceTime: 50,
              ...j,
              children: () =>
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    y && v,
                    (0, n.jsx)("canvas", {
                      ref: g,
                      style: { display: y ? "none" : "block" },
                    }),
                  ],
                }),
            })
          );
        });
    },
  },
]);
