(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [54467, 68592],
  {
    54467: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return p;
          },
        });
      var i = s(90132),
        r = s(55881),
        l = s(8108),
        a = s(90600),
        n = s(53956),
        o = s(62385),
        c = s(68592),
        d = s(10073);
      let h = (e) => {
        let {
          sections: t,
          className: s = "",
          activeSection: r,
          scrollDirection: l,
          isArrowActive: a,
          showWideToc: n,
          isDesktop: o,
          visibleSections: c,
          startIndex: d,
          showToc: h,
          onScrollToSection: u,
          onToggleToc: x,
          onArrowClick: m,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            o && n
              ? (0, i.jsx)("div", {
                  className:
                    "fixed top-1/2 transform -translate-y-1/2 w-72 z-40 select-none right-8 transition-all duration-300 ".concat(
                      s
                    ),
                  children: (0, i.jsx)("div", {
                    className: "rounded-2xl overflow-hidden",
                    children: (0, i.jsxs)("div", {
                      className: "p-6",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex items-center justify-end mb-6",
                          children: [
                            (0, i.jsx)("h3", {
                              className:
                                "font-serif text-white font-[600] text-[1.125rem]",
                              children: "Contents",
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "w-2 h-2 bg-[#cdf138] rounded-full ml-3 animate-pulse",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "space-y-1 overflow-hidden",
                          style: { height: "312px" },
                          children: c.map((e, t) =>
                            (0, i.jsx)(
                              "button",
                              {
                                "data-toc-id": e.id,
                                onClick: (t) => {
                                  t.preventDefault(),
                                    t.stopPropagation(),
                                    u(e.id);
                                },
                                className:
                                  "w-full text-left px-3 py-2.5 text-sm transition-all duration-200 group select-none cursor-pointer ".concat(
                                    r === e.id
                                      ? "text-[#cdf138]"
                                      : "text-gray-300 hover:text-white"
                                  ),
                                type: "button",
                                children: (0, i.jsxs)("div", {
                                  className:
                                    "flex items-center justify-end text-right",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "font-medium text-right",
                                      children: e.title,
                                    }),
                                    (0, i.jsx)("span", {
                                      className:
                                        "font-mono text-xs ml-3 transition-colors ".concat(
                                          r === e.id
                                            ? "text-[#cdf138]"
                                            : "text-gray-500 group-hover:text-[#cdf138]"
                                        ),
                                      children: String(d + t + 1).padStart(
                                        2,
                                        "0"
                                      ),
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                })
              : (0, i.jsx)("div", {
                  className: "fixed right-6 z-50 select-none ".concat(s),
                  style: { bottom: "80px" },
                  children: (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsx)("div", {
                        className: "absolute right-0 bottom-16 w-80",
                        children: (0, i.jsxs)("div", {
                          className:
                            "relative rounded-2xl overflow-hidden transform origin-bottom-right ".concat(
                              h
                                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                            ),
                          style: {
                            background: "rgba(29, 29, 27, 0.15)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            willChange: "transform, opacity",
                            contain: "layout style paint",
                            transform: "translateZ(0)",
                            boxShadow:
                              "\n                    0 0 0 1px rgba(205, 241, 56, 0.2),\n                    inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                    inset 0 -1px 0 rgba(0, 0, 0, 0.1),\n                    0 8px 32px rgba(0, 0, 0, 0.3),\n                    0 2px 8px rgba(205, 241, 56, 0.1)\n                  ",
                          },
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "absolute inset-0 rounded-2xl pointer-events-none",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cdf138]/60 to-transparent",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#cdf138]/40 to-transparent",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cdf138]/30 to-transparent",
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#cdf138]/40 to-transparent",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "p-6",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between mb-6",
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: "flex items-center",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className:
                                            "w-2 h-2 bg-[#cdf138] rounded-full mr-3 animate-pulse",
                                        }),
                                        (0, i.jsx)("h3", {
                                          className:
                                            "font-serif text-white font-[600] text-[1.125rem]",
                                          children: "Contents",
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("button", {
                                      onClick: x,
                                      className:
                                        "text-gray-400 hover:text-white transition-colors duration-200 ease-out p-1 hover:bg-[#cdf138]/10 rounded-lg",
                                      children: (0, i.jsx)("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, i.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M6 18L18 6M6 6l12 12",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("div", {
                                  className: "space-y-1 overflow-hidden",
                                  style: { height: "312px" },
                                  children: c.map((e, t) =>
                                    (0, i.jsx)(
                                      "button",
                                      {
                                        "data-toc-id": e.id,
                                        onClick: () => u(e.id),
                                        className:
                                          "w-full text-left px-3 py-2.5 text-sm rounded-xl group select-none transition-all duration-200 ease-out ".concat(
                                            r === e.id
                                              ? "text-[#cdf138]"
                                              : "text-gray-300 hover:text-white"
                                          ),
                                        children: (0, i.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, i.jsxs)("span", {
                                              className:
                                                "font-mono text-xs mr-3 transition-colors ".concat(
                                                  r === e.id
                                                    ? "text-[#cdf138]"
                                                    : "text-gray-500 group-hover:text-[#cdf138]"
                                                ),
                                              children: [
                                                String(d + t + 1).padStart(
                                                  2,
                                                  "0"
                                                ),
                                                ".",
                                              ],
                                            }),
                                            (0, i.jsx)("span", {
                                              className: "font-medium",
                                              children: e.title,
                                            }),
                                          ],
                                        }),
                                      },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("button", {
                        onClick: x,
                        className:
                          "relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-out ".concat(
                            h
                              ? "text-black scale-110"
                              : "text-[#cdf138] hover:scale-105"
                          ),
                        style: {
                          background: h
                            ? "#cdf138"
                            : "rgba(255, 255, 255, 0.08)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          willChange: "transform, background, box-shadow",
                          contain: "layout style paint",
                          transform: h
                            ? "scale(1.1) rotate(180deg) translateZ(0)"
                            : "scale(1) rotate(0deg) translateZ(0)",
                          transition: "all 0.5s ease-out",
                          boxShadow: h
                            ? "\n                    0 0 0 1px rgba(205, 241, 56, 0.3),\n                    inset 0 1px 0 rgba(255, 255, 255, 0.3),\n                    inset 0 -1px 0 rgba(0, 0, 0, 0.1),\n                    0 4px 16px rgba(205, 241, 56, 0.3)\n                  "
                            : "\n                    0 0 0 1px rgba(205, 241, 56, 0.2),\n                    inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                    inset 0 -1px 0 rgba(0, 0, 0, 0.1),\n                    0 4px 16px rgba(0, 0, 0, 0.2)\n                  ",
                        },
                        title: "Table of Contents",
                        children: (0, i.jsx)("svg", {
                          className:
                            "w-5 h-5 transition-transform duration-300",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, i.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 6h16M4 12h16M4 18h16",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
            (0, i.jsx)("div", {
              className: "fixed right-6 z-50 select-none",
              style: { bottom: "16px" },
              children: (0, i.jsx)("button", {
                onClick: m,
                className:
                  "relative w-12 h-12 rounded-full flex items-center justify-center ".concat(
                    a ? "text-black" : "text-[#cdf138] hover:scale-105"
                  ),
                style: {
                  background: a ? "#cdf138" : "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  willChange: "transform, background-color, box-shadow, color",
                  contain: "layout style paint",
                  transform: "rotate("
                    .concat("up" === l ? "180deg" : "0deg", ") ")
                    .concat(a ? "scale(1.1)" : "scale(1)", " translateZ(0)"),
                  transition:
                    "transform 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out, color 0.3s ease-out",
                  boxShadow: a
                    ? "\n                0 0 0 1px rgba(205, 241, 56, 0.3),\n                inset 0 1px 0 rgba(255, 255, 255, 0.3),\n                inset 0 -1px 0 rgba(0, 0, 0, 0.1),\n                0 4px 16px rgba(205, 241, 56, 0.3)\n              "
                    : "\n                0 0 0 1px rgba(205, 241, 56, 0.2),\n                inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                inset 0 -1px 0 rgba(0, 0, 0, 0.1),\n                0 4px 16px rgba(0, 0, 0, 0.2)\n              ",
                },
                title: "up" === l ? "Scroll to Top" : "Scroll to Bottom",
                children: (0, i.jsx)("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  style: { transition: "none" },
                  children: (0, i.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                  }),
                }),
              }),
            }),
          ],
        });
      };
      var u = s(3070);
      let x = function (e, t) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
          e &&
            ((e.style.opacity = t.toString()),
            (e.style.transform = "scale("
              .concat(s, ") translate3d(0, ")
              .concat(i, "px, 0)")),
            (e.style.pointerEvents = t < 0.3 ? "none" : "auto"));
        },
        m = {
          legal: {
            logo: {
              opacityMultiplier: 1.5,
              scaleMultiplier: 2,
              translateMultiplier: 120,
            },
            title: {
              opacityMultiplier: 1.5,
              scaleMultiplier: 1,
              translateMultiplier: 80,
            },
            indicator: { opacityMultiplier: 7 },
          },
          blog: {
            logo: {
              opacityMultiplier: 0.8,
              scaleMultiplier: 1.2,
              translateMultiplier: 80,
            },
            title: {
              opacityMultiplier: 0.8,
              scaleMultiplier: 0.6,
              translateMultiplier: 60,
            },
            indicator: { opacityMultiplier: 4 },
          },
        };
      var p = (e) => {
        let { pageType: t, enableTOC: s = !1, headerMode: p = "dark" } = e,
          [f, b] = (0, r.useState)(!1),
          [g, w] = (0, r.useState)(!0),
          [v, k] = (0, r.useState)(0),
          [j, y] = (0, r.useState)(!1),
          [N, A] = (0, r.useState)(0),
          [M, S] = (0, r.useState)(""),
          [E, C] = (0, r.useState)(!1),
          [B, T] = (0, r.useState)(!1),
          [F, L] = (0, r.useState)(!0),
          [D, H] = (0, r.useState)([]),
          [Z, U] = (0, r.useState)(0),
          [I, _] = (0, r.useState)("down"),
          [P, z] = (0, r.useState)(!1),
          [R, W] = (0, r.useState)(!1),
          [Y, q] = (0, r.useState)([]);
        (0, r.useEffect)(() => {
          y(!0);
        }, []),
          (0, r.useEffect)(() => {
            let e = () => {
              if (
                (b(window.innerWidth < 768),
                C(window.innerWidth >= 1480),
                "blog" === t)
              ) {
                let e = document.getElementById("blog-scroll-indicator");
                e &&
                  (e.style.display = window.innerHeight < 1080 ? "none" : "");
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [t]),
          (0, r.useEffect)(() => {
            if (!s || !j) return;
            let e = () => {
              let e = document.querySelectorAll('section[id^="section-"]'),
                t = [];
              e.forEach((e) => {
                let s = e.querySelector("h2");
                if (s) {
                  let i = s.textContent || "",
                    r = i.match(/^(\d+)\.\s*(.+)/);
                  t.push({ id: e.id, title: r ? r[2].trim() : i });
                }
              }),
                q(t);
            };
            setTimeout(e, 100);
            let t = new MutationObserver(e);
            return (
              t.observe(document.body, { childList: !0, subtree: !0 }),
              () => t.disconnect()
            );
          }, [s, j]);
        let G = (0, r.useCallback)((e) => {
            let t = document.getElementById(e);
            t && (t.scrollIntoView({ behavior: "smooth" }), T(!1));
          }, []),
          V = (0, r.useCallback)(() => {
            T((e) => !e);
          }, []),
          X = (0, r.useCallback)(() => {
            W(!0);
            let e = "down" === I ? document.documentElement.scrollHeight : 0;
            window.scrollTo({ top: e, behavior: "smooth" }),
              setTimeout(() => W(!1), 1e3);
          }, [I]),
          O = (0, r.useCallback)(() => {
            let e = Y.findIndex((e) => e.id === M);
            if (-1 === e) return U(0), Y.slice(0, 6);
            let t = Math.max(0, e - 1);
            return (
              t + 6 > Y.length && (t = Math.max(0, Y.length - 6)),
              U(t),
              Y.slice(t, t + 6)
            );
          }, [Y, M]);
        (0, r.useEffect)(() => {
          s && H(O());
        }, [M, Y, s, O]);
        let J = (0, r.useCallback)(
          (e) => {
            let s = m[t];
            if (!s) return;
            let i = document.getElementById(
                "".concat(t, "-logo-").concat("legal" === t ? "3d" : "static")
              ),
              r = document.getElementById("".concat(t, "-title-area")),
              l = document.getElementById("".concat(t, "-scroll-indicator"));
            x(
              i,
              Math.max(1 - e * s.logo.opacityMultiplier, 0),
              Math.max(1 - e * s.logo.scaleMultiplier, 0.1),
              e * s.logo.translateMultiplier
            ),
              x(
                r,
                Math.max(1 - e * s.title.opacityMultiplier, 0),
                Math.max(1 - e * s.title.scaleMultiplier, 0.2),
                e * s.title.translateMultiplier
              ),
              l &&
                (l.style.opacity = Math.max(
                  1 - e * s.indicator.opacityMultiplier,
                  0
                ).toString());
          },
          [t]
        );
        if (
          ((0, r.useEffect)(() => {
            let e = !1,
              i = () => {
                e ||
                  (requestAnimationFrame(() => {
                    let i = window.scrollY,
                      l = document.documentElement.scrollHeight,
                      a = window.innerHeight,
                      n = Math.min(i / (0.5 * a), 1);
                    A(n),
                      i > v && i > 100 ? w(!1) : w(!0),
                      ("blog" === t || "legal" === t) && J(n),
                      s && r(i, l, a),
                      k(i),
                      (e = !1);
                  }),
                  (e = !0));
              },
              r = (e, t, s) => {
                !R &&
                  Math.abs(e - v) >= 5 &&
                  (e > v ? _("down") : _("up"), z(!0)),
                  e <= 5
                    ? (_("down"), z(!1))
                    : e + s >= t - 5
                    ? (_("up"), z(!0))
                    : R || setTimeout(() => z(!1), 1e3);
                let i = e + 100,
                  r = -1;
                for (let e = Y.length - 1; e >= 0; e--) {
                  let t = document.getElementById(Y[e].id);
                  if (t && t.offsetTop <= i) {
                    r = e;
                    break;
                  }
                }
                if (r >= 0) {
                  let e = Y[Math.max(0, r - 1)].id;
                  e !== M && S(e);
                }
                E && L(t - (e + s) >= 600);
              };
            return (
              window.addEventListener("scroll", i, { passive: !0 }),
              i(),
              () => window.removeEventListener("scroll", i)
            );
          }, [v, s, Y, M, R, E, t, J]),
          (0, r.useEffect)(() => {
            if (!j) return;
            let e = () => window.print(),
              t = document.querySelectorAll(".markdown-print-btn");
            return (
              t.forEach((t) => {
                t.addEventListener("click", e);
              }),
              () => {
                t.forEach((t) => {
                  t.removeEventListener("click", e);
                });
              }
            );
          }, [j]),
          !j)
        )
          return null;
        let Q = document.getElementById("".concat(t, "-header")),
          K = document.getElementById("".concat(t, "-footer"));
        return (0, i.jsxs)(i.Fragment, {
          children: [
            Q &&
              (0, l.createPortal)(
                f
                  ? (0, i.jsx)("div", {
                      className:
                        "fixed left-0 right-0 top-0 z-50 bg-white transition-transform duration-300 ease-in-out ".concat(
                          g ? "translate-y-0" : "-translate-y-full"
                        ),
                      children: (0, i.jsxs)("div", {
                        className:
                          "flex items-center justify-between border-b border-gray-200 p-4",
                        children: [
                          (0, i.jsx)(a.default, {
                            href: "/",
                            className: "flex items-center",
                            children: (0, i.jsx)("img", {
                              src: "/images/logo.svg",
                              alt: "Heurist",
                              className: "h-8 w-auto brightness-0",
                            }),
                          }),
                          (0, i.jsx)(d.Z, {}),
                        ],
                      }),
                    })
                  : (0, i.jsx)(n.Z, { mode: p }),
                Q
              ),
            s &&
              Y.length > 0 &&
              (0, i.jsx)(h, {
                sections: Y,
                className: "no-print",
                activeSection: M,
                scrollDirection: I,
                isArrowActive: P,
                showWideToc: F,
                isDesktop: E,
                visibleSections: D,
                startIndex: Z,
                showToc: B,
                onScrollToSection: G,
                onToggleToc: V,
                onArrowClick: X,
              }),
            K &&
              (0, l.createPortal)(
                f ? (0, i.jsx)(c.default, {}) : (0, i.jsx)(o.Z, {}),
                K
              ),
            !f && (0, i.jsx)(u.Z, {}),
          ],
        });
      };
    },
    3070: function (e, t, s) {
      "use strict";
      var i = s(90132),
        r = s(19487),
        l = s.n(r),
        a = s(55881),
        n = s(45119),
        o = s.n(n);
      t.Z = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            let s = e.current;
            if (!s) return;
            s.style.transform = "translate(-50%, -50%)";
            let i = 0,
              r = 0,
              l = (e) => {
                (i = e.clientX),
                  (r = e.clientY),
                  t.current || (t.current = requestAnimationFrame(a));
              },
              a = () => {
                (s.style.transform = "translate("
                  .concat(i, "px, ")
                  .concat(r, "px)")),
                  (t.current = void 0);
              };
            return (
              window.addEventListener("mousemove", l),
              () => {
                window.removeEventListener("mousemove", l),
                  t.current && cancelAnimationFrame(t.current);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "jsx-6c058c029080624e " + (o().root || ""),
                children: (0, i.jsx)("div", {
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
              (0, i.jsx)(l(), {
                id: "6c058c029080624e",
                children: "body{cursor:auto}",
              }),
            ],
          })
        );
      };
    },
    10073: function (e, t, s) {
      "use strict";
      var i = s(90132),
        r = s(55881),
        l = s(90600);
      let a = [
        { href: "/stake", label: "Stake", external: !1 },

        { href: "/credits", label: "API Credits", external: !1 },
        { href: "/blog", label: "Blog", external: !1 },
        { label: "Terms of Service", external: !1 },
        { label: "Privacy Notice", external: !1 },
      ];
      t.Z = (e) => {
        let { className: t, mode: s = "light" } = e,
          [n, o] = (0, r.useState)(!1);
        return (0, i.jsxs)("div", {
          className: "z-50 "
            .concat(t, " ")
            .concat(
              "dark" === s ? "bg-black text-white" : "bg-white text-black"
            ),
          children: [
            (0, i.jsx)("div", {
              className: "flex",
              children: (0, i.jsx)("button", {
                onClick: () => {
                  o(!n);
                },
                className:
                  "flex h-10 w-10 items-center justify-center focus:outline-none",
                children: (0, i.jsx)("svg", {
                  className: "h-6 w-6",
                  fill: "none",
                  stroke: "dark" === s ? "white" : "black",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, i.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16",
                  }),
                }),
              }),
            }),
            n &&
              (0, i.jsx)("div", {
                className:
                  "fixed left-0 top-[72px] z-50 w-full bg-white shadow-lg",
                children: (0, i.jsx)("div", {
                  className: "flex flex-col p-4",
                  children: a.map((e, t) =>
                    (0, i.jsx)(
                      l.default,
                      {
                        href: e.href,
                        className:
                          "mb-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        target: e.external ? "_blank" : void 0,
                        rel: e.external ? "noopener noreferrer" : void 0,
                        onClick: () => o(!1),
                        children: e.label,
                      },
                      t
                    )
                  ),
                }),
              }),
          ],
        });
      };
    },
    62385: function (e, t, s) {
      "use strict";
      var i = s(90132),
        r = s(90600),
        l = s(80870),
        a = s(88509);
      t.Z = function (e) {
        let { mode: t = "dark" } = e;
        return (0, i.jsx)("div", {
          className: "px-4 md:px-20 2xl:px-0 ".concat(
            "light" === t ? "bg-slate-200" : "bg-[#1d1d1b]"
          ),
          children: (0, i.jsxs)("div", {
            className: "m-auto max-w-[1440px]",
            children: [
              (0, i.jsxs)("div", {
                className: "flex justify-between pt-[60px] md:pt-[120px]",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex w-[480px] flex-col items-start",
                    children: [
                      (0, i.jsxs)("p", {
                        className: "text-left mb-8 ".concat(
                          "light" === t ? "text-[#696963]" : "text-white"
                        ),
                        children: [
                          "Full-stack Solutions for Onchain AI ",
                          (0, i.jsx)("br", {}),
                          "Powered By An Elastic Chain",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "w-full flex justify-start mb-16",
                        children: (0, i.jsx)(a.Z, { mode: t }),
                      }),
                    ],
                  }),
                  [
                    {
                      title: "Ecosystem",
                      showArrow: !0,
                      list: [
                        {
                          title: "Insight Mesh MCP",
                          link: "",
                        },
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
                    (0, i.jsxs)(
                      "div",
                      {
                        className: "text-base font-normal",
                        children: [
                          (0, i.jsx)("div", {
                            className: "custom-font-SFMono-medium mb-4 ".concat(
                              "light" === t ? "text-[#696963]" : "text-white"
                            ),
                            children: e.title,
                          }),
                          (0, i.jsx)("ul", {
                            className: "".concat(
                              "light" === t ? "text-[#696963]" : "text-white"
                            ),
                            children: e.list.map((t) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  className: "custom-font-SFMono-regular mb-4",
                                  children: (0, i.jsxs)(r.default, {
                                    href: t.link,
                                    target: "_blank",
                                    className: "flex items-center",
                                    children: [
                                      t.title,
                                      e.showArrow &&
                                        (0, i.jsx)("svg", {
                                          width: "21",
                                          height: "20",
                                          viewBox: "0 0 21 20",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, i.jsx)("path", {
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
              (0, i.jsx)("div", {
                className: "flex justify-center pb-16 ".concat(
                  "light" === t ? "text-[#696963]" : "text-white"
                ),
                children: (0, i.jsx)(l.Z, {
                  className: "light" === t ? "invert" : "",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "custom-font-SFMono-medium flex justify-between border-t border-solid ".concat(
                    "light" === t ? "border-[#393936]" : "border-[#696963]",
                    " py-16 text-[#696963]"
                  ),
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " Insight All Rights Reserved",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-8 items-center",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "border-b-2 border-transparent text-[#696963] hover:text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono",
                        children: "Terms of Service",
                      }),
                      (0, i.jsx)("p", {
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
    68592: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s(90132),
        r = s(90600),
        l = s(80870),
        a = s(88509);
      t.default = function (e) {
        let { mode: t = "dark" } = e;
        return (0, i.jsx)("div", {
          className: "px-4 py-8 ".concat(
            "light" === t ? "bg-slate-200" : "bg-[#1d1d1b]"
          ),
          children: (0, i.jsxs)("div", {
            className: "m-auto max-w-sm",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col pt-[60px]",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex flex-col items-start mb-8",
                    children: (0, i.jsx)("div", {
                      className: "w-full mb-8",
                      children: (0, i.jsx)(a.Z, { mode: t }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "mb-8",
                    children: (0, i.jsxs)("p", {
                      className: "text-left ".concat(
                        "light" === t ? "text-[#696963]" : "text-white"
                      ),
                      children: [
                        "Full-stack Solutions for Onchain AI ",
                        (0, i.jsx)("br", {}),
                        "Powered By An Elastic Chain",
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "grid grid-cols-2 gap-6 mb-8",
                    children: [
                      {
                        title: "Ecosystem",
                        showArrow: !0,
                        list: [
                          {
                            title: "Insight Mesh MCP",
                            link: "",
                          },
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
                          {
                            title: "Telegram",
                            link: "https://t.me/heurist_ai",
                          },
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
                      (0, i.jsxs)(
                        "div",
                        {
                          className: "text-base font-normal",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "custom-font-SFMono-medium mb-4 text-sm ".concat(
                                  "text-[#696963]"
                                ),
                              children: e.title,
                            }),
                            (0, i.jsx)("ul", {
                              className: "".concat(
                                "light" === t ? "text-[#696963]" : "text-white"
                              ),
                              children: e.list.map((t) =>
                                (0, i.jsx)(
                                  "li",
                                  {
                                    className:
                                      "custom-font-SFMono-regular mb-4",
                                    children: (0, i.jsxs)(r.default, {
                                      href: t.link,
                                      target: "_blank",
                                      className: "flex items-center",
                                      children: [
                                        t.title,
                                        e.showArrow &&
                                          (0, i.jsx)("svg", {
                                            width: "21",
                                            height: "20",
                                            viewBox: "0 0 21 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, i.jsx)("path", {
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
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex justify-center pb-10 ".concat(
                  "light" === t ? "text-[#696963]" : "text-white"
                ),
                children: (0, i.jsx)(l.Z, {
                  className: "light" === t ? "invert" : "",
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "custom-font-SFMono-medium flex flex-col items-center text-center border-t border-solid ".concat(
                    "light" === t ? "border-[#393936]" : "border-[#696963]",
                    " py-16 text-[#696963] space-y-2"
                  ),
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " Insight All rights reserved",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-8 items-center",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "border-b-2 border-transparent text-[#696963] hover:text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono",
                        children: "Terms of Service",
                      }),
                      (0, i.jsx)("p", {
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
      var i = s(90132),
        r = s(55881),
        l = s(20049),
        a = s(90600),
        n = s(749),
        o = s(89690),
        c = s(47802),
        d = s(73526);
      let h = [
          { href: "/stake", label: "Stake", external: !1 },

          { href: "/blog", label: "Blog", external: !1 },
        ],
        u = (e) => {
          let { isNewEcosystem: t, isTransparent: s, mode: r } = e;
          return "light" === r || t || !s
            ? (0, i.jsx)(a.default, {
                href: "/",
                children: (0, i.jsx)(l.default, {
                  src: c.Z,
                  alt: "Logo",
                  width: 116,
                  height: 32,
                }),
              })
            : (0, i.jsx)(a.default, {
                href: "/",
                children: (0, i.jsx)(o.Z, { width: 116, height: 32 }),
              });
        };
      t.Z = (e) => {
        let { mode: t = "dark" } = e,
          s = "/ecosystem" === (0, n.usePathname)(),
          [l, o] = (0, r.useState)(!0),
          [c, x] = (0, r.useState)(!0),
          [m, p] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          let e = () => {
            let e = window.scrollY;
            e < 10 ? (x(!0), o(!0)) : (x(!1), e < m ? o(!0) : o(!1)), p(e);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, [m]);
        let f = "fixed z-[200] w-full px-20 transition duration-200 2xl:px-0 "
          .concat(s ? "text-black" : "text-white", " ")
          .concat(c ? "bg-transparent" : "bg-white", " ")
          .concat(l ? "translate-y-0" : "-translate-y-full", " ")
          .concat("light" === t ? "bg-slate-200" : "");
        return (0, i.jsx)("header", {
          className: f,
          children: (0, i.jsxs)("nav", {
            className:
              "m-auto flex h-20 max-w-[1440px] items-center justify-between",
            children: [
              (0, i.jsx)(u, { isNewEcosystem: s, mode: t, isTransparent: c }),
              (0, i.jsx)("div", {
                className: "flex ".concat(
                  s || !c ? "text-black" : "text-white",
                  " "
                ),
                children: h.map((e) => {
                  let { href: s, label: r, external: l } = e;
                  return (0, i.jsx)(
                    a.default,
                    {
                      href: s,
                      className: "px-4 font-normal ".concat(
                        "light" === t ? "text-black" : ""
                      ),
                      target: l ? "_blank" : void 0,
                      children: r,
                    },
                    s
                  );
                }),
              }),
              (0, i.jsx)(a.default, {
                href: "/apps",
                target: "_blank",
                className: "text-black",
                children: (0, i.jsxs)("button", {
                  className:
                    "group flex h-10 items-center rounded-full bg-[#cdf138] px-6 py-2",
                  children: [
                    (0, i.jsx)("p", { className: "mr-2", children: "Portal" }),
                    (0, i.jsx)(d.Z, {
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
  },
]);
