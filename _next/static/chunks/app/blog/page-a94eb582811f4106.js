(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59404],
  {
    91239: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 85014, 23)),
        Promise.resolve().then(n.t.bind(n, 51594, 23)),
        Promise.resolve().then(n.bind(n, 27467)),
        Promise.resolve().then(n.bind(n, 65679)),
        Promise.resolve().then(n.bind(n, 87657)),
        Promise.resolve().then(n.bind(n, 54467)),
        Promise.resolve().then(n.bind(n, 90778)),
        Promise.resolve().then(n.bind(n, 87555)),
        Promise.resolve().then(n.t.bind(n, 54150, 23));
    },
    27467: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(14677);
      function i(e) {
        let { reason: t, children: n } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    65679: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(90132),
        i = n(64926);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: o.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    90778: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(90132),
        i = n(55881);
      t.default = () => {
        let e = (0, i.useRef)(null),
          t = (0, i.useRef)();
        return (
          (0, i.useEffect)(() => {
            let n = e.current;
            if (!n) return;
            let r = n.getContext("2d");
            if (!r) return;
            let i = () => {
              (n.width = window.innerWidth), (n.height = window.innerHeight);
            };
            i(), window.addEventListener("resize", i);
            let o = window.innerWidth < 768 ? 40 : 90,
              l = [];
            for (let e = 0; e < o; e++)
              l.push({
                x: Math.random() * n.width,
                y: Math.random() * n.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
              });
            let s = (e) => "hsla(".concat(75, ", 80%, 60%, ").concat(e, ")"),
              a = () => "hsla(".concat(75, ", 80%, 60%, 0.9)"),
              u = () => {
                for (let e of (r.clearRect(0, 0, n.width, n.height), l))
                  (e.x += e.vx),
                    (e.y += e.vy),
                    (e.x <= 0 || e.x >= n.width) && (e.vx *= -1),
                    (e.y <= 0 || e.y >= n.height) && (e.vy *= -1);
                for (let e = 0; e < l.length; e++) {
                  let t = l[e];
                  for (let n = e + 1; n < l.length; n++) {
                    let e = l[n],
                      i = Math.hypot(t.x - e.x, t.y - e.y);
                    if (i < 120) {
                      let n = 1 - i / 120;
                      (r.strokeStyle = s(n)),
                        (r.lineWidth = 1),
                        (r.shadowBlur = 4),
                        (r.shadowColor = s(0.8 * n)),
                        r.beginPath(),
                        r.moveTo(t.x, t.y),
                        r.lineTo(e.x, e.y),
                        r.stroke();
                    }
                  }
                }
                for (let e of ((r.fillStyle = a()),
                (r.shadowBlur = 6),
                (r.shadowColor = a()),
                l))
                  r.beginPath(), r.arc(e.x, e.y, 2, 0, 2 * Math.PI), r.fill();
                (r.shadowBlur = 0), (t.current = requestAnimationFrame(u));
              };
            return (
              u(),
              () => {
                t.current && cancelAnimationFrame(t.current),
                  window.removeEventListener("resize", i);
              }
            );
          }, []),
          (0, r.jsx)("canvas", {
            ref: e,
            className: "fixed inset-0 z-0 pointer-events-none select-none",
            "aria-hidden": "true",
          })
        );
      };
    },
    87555: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n(90132);
      function i() {
        return (0, r.jsxs)("button", {
          onClick: () => {
            let e = document.getElementById("blog-footer");
            e && e.scrollIntoView({ behavior: "smooth" });
          },
          className:
            "group inline-flex items-center gap-2 bg-[#cdf138] text-xl lg:text-xl font-medium tracking-wide text-black px-4 py-2 transition-all duration-300 hover:bg-[#b8e01f] active:scale-95",
          style: { fontFamily: "monospace", fontSize: "1.25rem" },
          children: [
            (0, r.jsx)("span", { children: "Subscribe to Newsletter" }),
            (0, r.jsx)("svg", {
              className:
                "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, r.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M17 8l4 4m0 0l-4 4m4-4H3",
              }),
            }),
          ],
        });
      }
    },
    54150: function () {},
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/person.2c07b7fb.png",
          height: 653,
          width: 641,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXH3+fHX3svFzMrj7976+vzr7uHQ4O+8wb3U2NbN1MbHzMjExtni5eX19fast6vHy8fr7tuor6att56YnpS3vLr3+fLP1cro6+nf5sz+/v+utb66wbyiqaF9lmGJAAAAGnRSTlMAQJbrF3DYBXL++8WIWbfw+5zW7/z//////qT3tfAAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVHicHchJEoAgDAXRDwJJnHAiDOr9r2lhr1414EJm9Hy5B9dhxjTRv6zMIICwPNHuDJi11iYnfFNVeQ+EvJV0Jf4AR5gCrvEXAiAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [
        64654, 96310, 20049, 90600, 17714, 24883, 63542, 48312, 54467, 59062,
        34034, 1744,
      ],
      function () {
        return e((e.s = 91239));
      }
    ),
      (_N_E = e.O());
  },
]);
