"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [60929],
  {
    74493: function (e, t, r) {
      r.r(t);
      var s,
        n = r(86442);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                  ({}).hasOwnProperty.call(r, s) && (e[s] = r[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.default = function (e) {
        return n.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 14,
              height: 14,
              fill: "none",
            },
            e
          ),
          s ||
            (s = n.createElement("path", {
              stroke: "#fff",
              strokeLinejoin: "bevel",
              strokeWidth: 2,
              d: "M12.9 1.353 1.352 12.9M12.9 1.353c-1.318 3.289-1.499 6.95-.513 10.413l.365 1.283M12.9 1.353C9.611 2.67 5.95 2.852 2.488 1.866l-1.284-.365",
            }))
        );
      };
    },
    70054: function (e, t, r) {
      var s = r(90132),
        n = r(55881);
      t.Z = (e) => {
        let { src: t, className: r, ...i } = e,
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
            ...i,
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
    60929: function (e, t, r) {
      r.r(t);
      var s = r(90132),
        n = r(90600),
        i = r(74493),
        l = r(70054);
      t.default = function (e) {
        let { scrollProgress: t } = e;
        return (0, s.jsxs)("div", {
          className: "w-full bg-[#1d1d1b] px-4 pt-10",
          children: [
            (0, s.jsxs)("h2", {
              className: "pb-10 text-center text-[40px]/[48px] text-white",
              children: ["EXPLORE ", (0, s.jsx)("br", {}), " OUR ECOSYSTEM"],
            }),
            (0, s.jsx)("div", {
              className: "relative flex items-center justify-center",
              children: (0, s.jsx)("div", {
                className: "relative w-full",
                children: [
                  {
                    id: 2,
                    color: "bg-green-500",
                    title: "Provide Compute",
                    desc: "Contribute to AI inference with your GPU and earn Heurist Tokens",
                    video: "/2coin.webm",
                    coverImage: "/2coin.svg",
                    link: "/ecosystem",
                  },
                  {
                    id: 3,
                    color: "bg-blue-500",
                    title: "Build AI with API",
                    desc: "Easily integrate AI with REST API or Node.js SDK with a few lines of code",
                    video: "/4Computer_small.webm",
                    coverImage: "/4Computer_small.svg",
                    link: "/ecosystem",
                  },
                ].map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "mb-4 rounded-2xl bg-white p-6",
                      style: { transition: "left 0.3s ease-out" },
                      children: (0, s.jsxs)("div", {
                        className: "flex w-full flex-col justify-between",
                        children: [
                          (0, s.jsxs)("h2", {
                            className:
                              "flex items-center justify-between text-[24px]/[32px]",
                            children: [
                              e.title,
                              (0, s.jsx)(n.default, {
                                href: e.link,
                                target: "__blank",
                                className:
                                  "link-hover-effect cursor-pointer p-4",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "group rounded-full bg-black p-2 transition-colors",
                                  children: (0, s.jsx)(i.default, {
                                    className: " text-white transition-colors ",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "svg-box flex justify-center",
                            children: (0, s.jsx)(l.Z, {
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
      };
    },
  },
]);
