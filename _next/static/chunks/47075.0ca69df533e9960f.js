"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [47075],
  {
    70054: function (e, t, r) {
      var s = r(90132),
        n = r(55881);
      t.Z = (e) => {
        let { src: t, className: r, ...o } = e,
          l = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = new IntersectionObserver(
              (t) => {
                let [r] = t;
                r.isIntersecting &&
                  l.current &&
                  (l.current.load(), e.unobserve(r.target));
              },
              { threshold: 0.1 }
            );
            return (
              l.current && e.observe(l.current),
              () => {
                l.current && e.unobserve(l.current);
              }
            );
          }, []),
          (0, s.jsxs)("video", {
            ref: l,
            className: r,
            onLoadedData: () => {
              var e;
              null === (e = l.current) || void 0 === e || e.play();
            },
            ...o,
            children: [
              (0, s.jsx)("source", { src: t, type: "video/webm" }),
              (0, s.jsx)("source", {
                src: t.replace(".webm", ".mp4"),
                type: "video/mp4",
              }),
              "Your browser does not support the video tag.",
            ],
          })
        );
      };
    },
    47075: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var s = r(90132),
        n = r(55881),
        o = r(90600),
        l = r(73526),
        i = r(74493),
        c = r(70054),
        a = function (e) {
          let { scrollProgress: t, isSecondScreen: r } = e;
          return (0, s.jsxs)("div", {
            className: "m-auto max-w-[1440px] pb-[160px]",
            children: [
              (0, s.jsxs)("h2", {
                className:
                  "title pb-[64px] text-center text-[80px]/[80px] font-semibold xl:text-[92px]/[92px] ".concat(
                    r ? "text-white" : "text-black"
                  ),
                children: ["EXPLORE", (0, s.jsx)("br", {}), "OUR ECOSYSTEM"],
              }),
              (0, s.jsx)("div", {
                className:
                  "relative flex items-center justify-center pb-[160px]",
                children: (0, s.jsx)("div", {
                  className:
                    "relative flex w-full items-stretch justify-between overflow-hidden",
                  children: [].map((e, t) =>
                    (0, s.jsx)(
                      o.default,
                      {
                        href: e.link,
                        target: "__blank",
                        onMouseEnter: (e) => {
                          console.log("mouse enter");
                          let t = e.currentTarget.querySelector("video");
                          t && t.play();
                        },
                        onMouseLeave: (e) => {
                          console.log("mouse leave");
                          let t = e.currentTarget.querySelector("video");
                          t && (t.pause(), (t.currentTime = 0));
                        },
                        className:
                          "link-hover-effect flex w-[32%] flex-col rounded-2xl border border-solid border-transparent bg-white p-6 hover:border-[#1d1d1b] xl:p-10",
                        children: (0, s.jsxs)("div", {
                          className: "flex w-full flex-col justify-between",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-nowrap text-[20px] xl:text-[32px]/[40px]",
                                  children: e.title,
                                }),
                                (0, s.jsx)("div", {
                                  className: " cursor-pointer",
                                  children: (0, s.jsxs)("div", {
                                    className:
                                      "group rounded-full p-2 transition-colors duration-300 hover:bg-black",
                                    children: [
                                      (0, s.jsx)(l.Z, {
                                        className:
                                          "text-black transition-colors transition-transform duration-300 group-hover:hidden group-hover:rotate-45",
                                      }),
                                      (0, s.jsx)(i.default, {
                                        className:
                                          "hidden text-white transition-colors transition-transform duration-300 group-hover:block group-hover:rotate-45",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "m-auto my-[26px] flex max-h-[300px] max-w-[300px] justify-center",
                              children: (0, s.jsx)(c.Z, {
                                src: e.video,
                                muted: !0,
                                playsInline: !0,
                                className: "h-[300px]",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "custom-font-SFMono-regular text-base font-normal not-italic",
                              children: e.desc,
                            }),
                          ],
                        }),
                      },
                      e.id
                    )
                  ),
                }),
              }),
            ],
          });
        },
        u = (e) => {
          let { children: t } = e,
            r = (0, n.useRef)(null),
            [o, l] = (0, n.useState)(0),
            [i, c] = (0, n.useState)(!1),
            [u, d] = (0, n.useState)(!1),
            [x, p] = (0, n.useState)(!1),
            [m, v] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              let e = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  c(t.isIntersecting);
                },
                { threshold: [0, 1] }
              );
              return (
                r.current && e.observe(r.current),
                () => {
                  r.current && e.unobserve(r.current);
                }
              );
            }, []),
            (0, n.useEffect)(() => {
              if (!i) return;
              let e = (e) => {
                  if (!m || u) return;
                  e.preventDefault();
                  let t = e.deltaY;
                  l((e) => {
                    let r = e + 0.001 * t;
                    return r >= 1 && d(!0), Math.max(0, Math.min(1, r));
                  });
                },
                t = () => {
                  if (!r.current) return;
                  let e = r.current.getBoundingClientRect(),
                    t = window.innerHeight;
                  console.log("-viewportHeight-", t),
                    console.log("- rect.top -", e.top),
                    p(e.top <= -t + Math.floor(t / 2)),
                    window.scrollY > 800 || v(!1);
                },
                s = r.current;
              return (
                s &&
                  (s.addEventListener("wheel", e, { passive: !1 }),
                  window.addEventListener("scroll", t)),
                () => {
                  s &&
                    (s.removeEventListener("wheel", e),
                    window.removeEventListener("scroll", t));
                }
              );
            }, [i, u, m]),
            (0, s.jsxs)("div", {
              ref: r,
              className:
                "min-h-screen w-full  px-20 pt-40 transition-colors duration-300 ease-out 2xl:px-0 ".concat(
                  x ? "bg-[#1d1d1b]" : "bg-transparent"
                ),
              children: [
                (0, s.jsx)(a, { scrollProgress: o, isSecondScreen: x }),
                n.Children.map(t, (e) =>
                  n.cloneElement(e, { isSecondScreen: x })
                ),
              ],
            })
          );
        };
    },
  },
]);
