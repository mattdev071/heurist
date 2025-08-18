"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [64516],
  {
    64516: function (e, t, n) {
      n.r(t);
      var r = n(90132),
        u = n(55881),
        s = n(76309);
      let a = (e) => {
        let { unit: t, content: n, targetNumber: u } = e;
        return (0, r.jsxs)("div", {
          className:
            "group relative flex flex-col items-start overflow-hidden text-left",
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0 scale-0 transform rounded-full",
            }),
            (0, r.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, r.jsxs)("h2", {
                  className: "text-[32px] font-bold",
                  children: [(0, r.jsx)(s.Dz, { target: u }), t],
                }),
                (0, r.jsx)("p", {
                  className: "custom-font-SFMono-medium text-sm",
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
            className: "container mx-auto py-8 pb-[95px]",
            children: (0, r.jsx)("div", {
              className: "",
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
          return c;
        },
        fy: function () {
          return u;
        },
        nj: function () {
          return l;
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
            c = (0, r.useRef)(null);
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
                c.current && e.observe(c.current),
                () => {
                  c.current && e.unobserve(c.current);
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
            r.createElement("span", { ref: c }, s ? n.toLocaleString() : "0")
          );
        },
        c = () => [
          { unit: "", content: "REGISTERED GPU MINERS", targetNumber: 0 },
          { unit: "", content: "DEVELOPERS", targetNumber: 0 },
          { unit: "M", content: "INFERENCE REQUESTS", targetNumber: 0 },
        ],
        l = (e) => {
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
