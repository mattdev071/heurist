"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [48312],
  {
    80870: function (e, t, r) {
      var a,
        s,
        l,
        c,
        n,
        i,
        o,
        h = r(86442);
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.Z = function (e) {
        return h.createElement(
          "svg",
          d(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 376",
              role: "img",
              "aria-label": "Insight",
            },
            e
          ),
          h.createElement("rect", { width: "100%", height: "100%", fill: "none" }),
          h.createElement(
            "text",
            {
              x: "50%",
              y: "50%",
              dy: ".35em",
              textAnchor: "middle",
              fill: "#fff",
              fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
              fontSize: "370", // tweak to taste
              fontWeight: 600,  // or 600/500/etc
              letterSpacing: "50px",
            },
            "Insight"
          )
        );
      };
      
    },
    74493: function (e, t, r) {
      r.r(t);
      var a,
        s = r(86442);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      t.default = function (e) {
        return s.createElement(
          "svg",
          l(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 14,
              height: 14,
              fill: "none",
            },
            e
          ),
          a ||
            (a = s.createElement("path", {
              stroke: "#fff",
              strokeLinejoin: "bevel",
              strokeWidth: 2,
              d: "M12.9 1.353 1.352 12.9M12.9 1.353c-1.318 3.289-1.499 6.95-.513 10.413l.365 1.283M12.9 1.353C9.611 2.67 5.95 2.852 2.488 1.866l-1.284-.365",
            }))
        );
      };
    },
    88509: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = r(90132),
        s = r(55881),
        l = r(17714),
        c = r(74493),
        n = r(90600);
      function i(e) {
        let { mode: t = "dark" } = e,
          [r, i] = (0, s.useState)(""),
          [o, h] = (0, s.useState)(!1),
          [d, u] = (0, s.useState)(!1),
          m = async (e) => {
            if ((e.preventDefault(), !r || !r.includes("@"))) {
              l.Am.dismiss(),
                setTimeout(() => {
                  l.Am.error("Please Enter a Valid Email Address");
                }, 100);
              return;
            }
            if (!d) {
              l.Am.dismiss(),
                setTimeout(() => {
                  l.Am.error("Please Agree to Receive Newsletter Emails");
                }, 100);
              return;
            }
            h(!0);
            try {
              let e = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: r }),
                }),
                t = await e.json();
              if (!e.ok) throw Error(t.error || "Failed to subscribe");
              l.Am.dismiss(),
                setTimeout(() => {
                  "already_subscribed" === t.status
                    ? l.Am.error("You're Already on Our List!")
                    : "confirmation_sent" === t.status
                    ? l.Am.success("Check Your Email to Confirm Subscription!")
                    : l.Am.success("Successfully Subscribed to Newsletter!");
                }, 100),
                i(""),
                u(!1);
            } catch (e) {
              l.Am.dismiss(),
                setTimeout(() => {
                  l.Am.error(
                    e instanceof Error
                      ? e.message
                      : "Failed to subscribe. Please try again."
                  );
                }, 100);
            } finally {
              h(!1);
            }
          };
        return (0, a.jsxs)("div", {
          className: "w-full max-w-sm",
          children: [
            (0, a.jsx)("div", {
              className: "mb-3.5 text-center",
              children: (0, a.jsx)("h3", {
                className: "custom-font-SFMono-medium text-base mb-2 ".concat(
                  "light" === t ? "text-[#696963]" : "text-white"
                ),
                children: "Join the Insight Newsletter",
              }),
            }),
            (0, a.jsxs)("form", {
              onSubmit: m,
              children: [
                (0, a.jsxs)("div", {
                  className: "relative mb-4",
                  children: [
                    (0, a.jsx)("input", {
                      type: "email",
                      value: r,
                      onChange: (e) => i(e.target.value),
                      placeholder: "Your Email",
                      className:
                        "w-full pl-4 pr-12 py-3 rounded-md border text-sm custom-font-SFMono-regular transition-colors focus:outline-none focus:ring-1 focus:ring-[#cdf138] ".concat(
                          "light" === t
                            ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                            : "bg-[#2a2a2a] border-[#404040] text-white placeholder-gray-400"
                        ),
                      disabled: o,
                    }),
                    (0, a.jsx)("button", {
                      type: "submit",
                      disabled: o,
                      className:
                        "group absolute right-0 top-0 h-full px-4 rounded-r-md font-medium transition-all duration-200 flex items-center justify-center ".concat(
                          o
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#cdf138] hover:bg-[#b8e01f] active:bg-[#a4cc1b]",
                          " text-black"
                        ),
                      children: o
                        ? (0, a.jsxs)("svg", {
                            className: "animate-spin h-4 w-4 text-black",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                              (0, a.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                className: "opacity-25",
                              }),
                              (0, a.jsx)("path", {
                                fill: "currentColor",
                                d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                className: "opacity-75",
                              }),
                            ],
                          })
                        : (0, a.jsx)(c.default, {
                            className:
                              "w-4 h-4 transition-transform duration-300 group-hover:rotate-45 [&>path]:stroke-current",
                          }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex items-center justify-center mb-0",
                  children: (0, a.jsxs)("label", {
                    className: "flex items-center cursor-pointer group",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)("input", {
                            type: "checkbox",
                            checked: d,
                            onChange: (e) => u(e.target.checked),
                            className: "sr-only",
                            disabled: o,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "w-4 h-4 rounded border-2 transition-all duration-300 ease-in-out ".concat(
                                d
                                  ? "bg-[#cdf138] border-[#cdf138] scale-125"
                                  : "border-gray-400 ".concat(
                                      "light" === t
                                        ? "bg-white"
                                        : "bg-[#2a2a2a]",
                                      " group-hover:border-[#cdf138]"
                                    )
                              ),
                            children:
                              d &&
                              (0, a.jsx)("svg", {
                                className:
                                  "w-3 h-3 text-black absolute top-0.5 left-0.5 transition-opacity duration-200",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 3,
                                  d: "M5 13l4 4L19 7",
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("span", {
                        className:
                          "ml-3 text-xs custom-font-SFMono-medium transition-colors duration-200 text-left select-none ".concat(
                            "light" === t ? "text-gray-600" : "text-gray-400"
                          ),
                        children: [
                          "I agree to receive newsletters and accept the",
                          (0, a.jsx)("p", {
                            className:
                              "inline-flex items-center gap-[0.1em] border-b-2 border-transparent !text-[#696963] hover:!text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono ml-1 mr-1",
                            target: "_blank",
                            children: "Terms of Service",
                          }),
                          "and",
                          (0, a.jsx)("p", {
                            className:
                              "inline-flex items-center gap-[0.1em] border-b-2 border-transparent !text-[#696963] hover:!text-[#cdf138] hover:border-[#cdf138] transition-colors font-mono ml-1",
                            target: "_blank",
                            children: "Privacy Notice",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
