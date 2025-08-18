"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55114],
  {
    55114: function (e, t, n) {
      n.r(t);
      var r = n(90132),
        u = n(55881),
        s = n(76309);
      let a = (e) => {
        let { unit: t, content: n, targetNumber: u } = e;
        return (0, r.jsxs)("div", {
          className:
            "group relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out",
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 scale-0 transform rounded-full bg-[#CDF138] transition-transform duration-300 ease-in-out group-hover:scale-100",
            }),
            (0, r.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, r.jsxs)("h2", {
                  className: "text-center text-[64px]/[68px] font-bold",
                  children: [(0, r.jsx)(s.Dz, { target: u }), t],
                }),
                (0, r.jsx)("p", {
                  className:
                    "custom-font-SFMono-medium text-nowrap text-center text-base",
                  children: n,
                }),
              ],
            }),
          ],
        });
      };
      t.default = () => {
        let [e, t] = (0, u.useState)((0, s.I6)());
        return (
          (0, u.useEffect)(() => {
            (0, s.fy)().then((e) => {
              t((0, s.nj)(e));
            });
          }, []),
          (0, r.jsx)("div", {
            className: "container mx-auto px-4 py-8 pb-[95px]",
            children: (0, r.jsx)("div", {
              className:
                "grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: e.map((e, t) =>
                (0, r.jsx)(
                  a,
                  {
                    unit: e.unit,
                    content: e.content,
                    targetNumber: e.targetNumber,
                  },
                  t
                )
              ),
            }),
          })
        );
      };
    },
    76309: function (e, t, n) {
      n.d(t, {
        Dz: function () {
          return a;
        },
        I6: function () {
          return i;
        },
        fy: function () {
          return u;
        },
        nj: function () {
          return c;
        },
      });
      var r = n(55881);
      let u = async () =>
          (
            await fetch("https://d2hfhz0c37x28y.cloudfront.net/prod/stats")
          ).json(),
        s = (e) =>
          e < 1e9
            ? { value: (e / 1e6).toFixed(2), unit: "M" }
            : { value: (e / 1e9).toFixed(2), unit: "B" },
        a = (e) => {
          let { target: t } = e,
            [n, u] = (0, r.useState)(0),
            [s, a] = (0, r.useState)(!1),
            i = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let e = new IntersectionObserver(
                (t) => {
                  let [n] = t;
                  n.isIntersecting && (a(!0), e.unobserve(n.target));
                },
                { threshold: 0.1 }
              );
              return (
                i.current && e.observe(i.current),
                () => {
                  i.current && e.unobserve(i.current);
                }
              );
            }, []),
            (0, r.useEffect)(() => {
              if (s && n < t) {
                let e = setTimeout(() => {
                  u((e) => Math.min(e + Math.ceil(t / 50), t));
                }, 20);
                return () => clearTimeout(e);
              }
            }, [n, t, s]),
            r.createElement("span", { ref: i }, s ? n.toLocaleString() : "0")
          );
        },
        i = () => [
          { unit: "", content: "REGISTERED GPU MINERS", targetNumber: 0 },
          { unit: "", content: "DEVELOPERS", targetNumber: 0 },
          { unit: "M", content: "INFERENCE REQUESTS", targetNumber: 0 },
        ],
        c = (e) => {
          let {
              totalMiners: t,
              totalImageCount: n,
              totalTextCount: r,
              num_devs: u,
            } = e,
            a = s(n + r);
          return [
            { unit: "", content: "REGISTERED GPU MINERS", targetNumber: t },
            { unit: "", content: "DEVELOPERS", targetNumber: u },
            {
              unit: a.unit,
              content: "INFERENCE REQUESTS",
              targetNumber: parseFloat(a.value),
            },
          ];
        };
    },
  },
]);
