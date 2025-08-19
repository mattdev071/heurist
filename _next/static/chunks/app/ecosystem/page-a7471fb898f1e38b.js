(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34431, 68592],
  {
    25504: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 41313));
    },
    749: function (e, t, s) {
      "use strict";
      var i = s(65688);
      s.o(i, "usePathname") &&
        s.d(t, {
          usePathname: function () {
            return i.usePathname;
          },
        }),
        s.o(i, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return i.useRouter;
            },
          }),
        s.o(i, "useSearchParams") &&
          s.d(t, {
            useSearchParams: function () {
              return i.useSearchParams;
            },
          });
    },
    40310: function (e, t) {
      "use strict";
      var s = Symbol.for("react.element"),
        i =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        a = Object.assign,
        r = {};
      function l(e, t, s) {
        (this.props = e),
          (this.context = t),
          (this.refs = r),
          (this.updater = s || i);
      }
      function n() {}
      function o(e, t, s) {
        (this.props = e),
          (this.context = t),
          (this.refs = r),
          (this.updater = s || i);
      }
      (l.prototype.isReactComponent = {}),
        (l.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (l.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (n.prototype = l.prototype);
      var c = (o.prototype = new n());
      (c.constructor = o), a(c, l.prototype), (c.isPureReactComponent = !0);
      var d = Object.prototype.hasOwnProperty,
        h = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, i) {
        var a,
          r = {},
          l = null,
          n = null;
        if (null != t)
          for (a in (void 0 !== t.ref && (n = t.ref),
          void 0 !== t.key && (l = "" + t.key),
          t))
            d.call(t, a) && !h.hasOwnProperty(a) && (r[a] = t[a]);
        var o = arguments.length - 2;
        if (1 === o) r.children = i;
        else if (1 < o) {
          for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
          r.children = c;
        }
        if (e && e.defaultProps)
          for (a in (o = e.defaultProps)) void 0 === r[a] && (r[a] = o[a]);
        return { $$typeof: s, type: e, key: l, ref: n, props: r, _owner: null };
      };
    },
    86442: function (e, t, s) {
      "use strict";
      e.exports = s(40310);
    },
    41313: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return k;
          },
        });
      var i,
        a,
        r,
        l = s(90132),
        n = s(55881),
        o = s(62385),
        c = s(53956),
        d = s(20049),
        h = s(90600),
        u = s(86442);
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                  ({}).hasOwnProperty.call(s, i) && (e[i] = s[i]);
              }
              return e;
            }).apply(null, arguments);
      }
      let x = [
        {
          title: "Aethir",
          image: (0, l.jsx)(d.default, {
            src: "/partners/aethir.svg",
            alt: "Aethir",
            width: 48,
            height: 48,
          }),
          description:
            "Aethir aggregates enterprise-grade GPUs into a global network and builds Scalable Decentralised Cloud Infrastructure for Gaming & AI.",
          buttonText: "Visit",
          buttonLink: "https://aethir.com/",
          tags: ["Compute"],
        },
        {
          title: "Aizel Network",
          image: (0, l.jsx)(d.default, {
            src: "/partners/aizel.jpg",
            alt: "Aizel",
            width: 48,
            height: 48,
          }),
          description:
            "Aizel is the fastest and most scalable modular network dedicated to verifiable AI.",
          buttonText: "Visit",
          buttonLink: "https://aizelnetwork.com/",
          tags: ["Compute"],
        },
        {
          title: "Akave",
          image: (0, l.jsx)(d.default, {
            src: "/partners/akave.svg",
            alt: "Akave",
            width: 48,
            height: 48,
          }),
          description:
            "Akave transforms data management with a decentralized L2 solution, blending Filecoin storage, advanced encryption, and intuitive interfaces.",
          buttonText: "Visit",
          buttonLink: "https://akave.ai/",
          tags: ["Storage"],
        },
        {
          title: "Arbus",
          image: (0, l.jsx)(d.default, {
            src: "/partners/arbus.jpg",
            alt: "Arbus",
            width: 48,
            height: 48,
          }),
          description:
            "AI-Powered Web3 Intelligence Platform. Explore a more efficient way to navigate the crypto market. Master the Web3 landscape with advanced data analytics.",
          buttonText: "Visit",
          buttonLink: "https://arbus.ai/",
          tags: ["LLM API"],
        },
        {
          title: "Bounce",
          image: (0, l.jsx)(d.default, {
            src: "/partners/bounce-logo.png",
            alt: "Bounce Finance",
            width: 48,
            height: 48,
          }),
          description:
            "Bounce's DeFAI platform provides auction intelligence services to Heurist-powered agents.",
          buttonText: "Bid Now",
          buttonLink: "https://www.bounce.finance/",
          tags: ["Finance"],
        },
        {
          title: "Creator.Bid",
          image: (0, l.jsx)(d.default, {
            src: "/partners/creatorbid.jpg",
            alt: "CreatorBid",
            width: 48,
            height: 48,
          }),
          description:
            "Creator.Bid is a platform for creating and tokenizing AI agents on Base. Heurist provides customized image generation models and inferencing for every AI agent on Creator.Bid",
          buttonText: "Visit",
          buttonLink: "https://creator.bid/",
          tags: ["AI Agent"],
        },
        {
          title: "Eden",
          image: (0, l.jsx)(d.default, {
            src: "/partners/eden.jpg",
            alt: "Eden",
            width: 48,
            height: 48,
          }),
          description:
            "Eden is an open platform for generative AI art, supporting image and video creation and custom model training.",
          buttonText: "Visit",
          buttonLink: "https://www.eden.art/",
          tags: ["Image API"],
        },
        {
          title: "ElizaOS",
          image: (0, l.jsx)(d.default, {
            src: "/partners/ai16z.jpg",
            alt: "ai16z",
            width: 48,
            height: 48,
          }),
          description:
            "The operating system for AI agents. As an official partner, Heurist provides AI inference API for ElizaOS, and supports the research and development of Eliza.",
          buttonText: "Visit",
          buttonLink: "https://elizaos.ai/",
          tags: ["AI Agent"],
        },
        {
          title: "Exabits",
          image: (0, l.jsx)(d.default, {
            src: "/partners/exabits.jpg",
            alt: "Exabits",
            width: 48,
            height: 48,
          }),
          description:
            "Exabits is the base layer of AI compute. By tokenizing GPU power, Exabits enables users to become stakeholders of the AI compute economy.",
          buttonText: "Visit",
          buttonLink: "https://www.exabits.ai/",
          tags: ["Compute"],
        },
        {
          title: "GenLayer",
          image: (0, l.jsx)(
            function (e) {
              return u.createElement(
                "svg",
                m(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 139,
                    height: 41,
                    fill: "none",
                  },
                  e
                ),
                i ||
                  (i = u.createElement("path", {
                    fill: "#282B5D",
                    d: "M18.172.367c-3.52.327-7.185 1.778-10.184 4.016-1.863 1.38-3.992 3.762-5.128 5.703C.915 13.418.004 16.72.004 20.492c0 3.169.614 5.918 1.945 8.678 2.426 5.008 6.52 8.636 11.832 10.466 1.842.644 4.565 1.093 6.49 1.093 1.883-.01 4.575-.47 6.356-1.083 3.111-1.063 5.742-2.719 7.973-5.008 1.792-1.84 2.764-3.2 3.798-5.305 4.473-9.168 1.382-20.257-7.186-25.807C27.384 1.05 22.79-.063 18.172.367m5.323 2.493c1.924.348 4.565 1.39 6.243 2.453 3.49 2.218 6.06 5.428 7.421 9.301 2.508 7.104.205 15.096-5.721 19.839-3.286 2.627-6.991 3.925-11.219 3.925-3.992 0-7.584-1.176-10.768-3.537-1.105-.828-3.02-2.77-3.848-3.925-1.443-2.023-2.661-4.936-3.081-7.358C1.355 16.853 4.2 9.913 9.718 5.968c2.579-1.84 5.087-2.8 8.557-3.302.726-.102 4.34.03 5.22.194",
                  })),
                a ||
                  (a = u.createElement("path", {
                    fill: "#282B5D",
                    d: "M13.183 7.348c-.594.215-1.167.634-1.505 1.104-.624.858-.624.828-.594 8.064l.031 6.582.236.511c.286.614.726 1.094 1.35 1.462l.461.276 6.848.03c7.687.031 7.43.052 8.29-.705.257-.224.584-.664.748-.991l.287-.583V9.505l-.287-.583c-.307-.623-.757-1.073-1.433-1.43l-.43-.236-6.807-.02c-5.547-.02-6.878 0-7.195.112m13.613 2.35.287.246.03 6.071c.02 3.332 0 6.215-.03 6.398-.031.174-.164.42-.277.532-.215.204-.368.204-6.602.204-6.182 0-6.387-.01-6.571-.194a1.2 1.2 0 0 1-.266-.541c-.03-.184-.051-3.067-.03-6.399l.03-6.07.286-.246.287-.245H26.51z",
                  })),
                r ||
                  (r = u.createElement("path", {
                    fill: "#282B5D",
                    d: "M6.476 23.475c.03 4.313.03 4.323.276 4.783.307.593.87 1.186 1.392 1.462.39.214.553.225 4.279.276l3.88.05.245.287c.235.276.246.347.246 1.87v1.574h2.272l-.041-1.87c-.03-1.635-.061-1.922-.246-2.33-.317-.675-.767-1.135-1.443-1.482l-.594-.297-3.807-.05c-3.48-.052-3.828-.073-3.992-.236-.174-.163-.184-.5-.215-4.262l-.03-4.088H6.444zM31.639 23.23v4.078l-.235.214c-.226.215-.318.215-3.962.245l-3.736.031-.583.286c-.625.307-1.075.757-1.433 1.431-.215.389-.236.593-.266 2.34l-.041 1.922h2.272v-1.574c0-1.523.01-1.594.246-1.87l.245-.286 3.829-.051c3.725-.051 3.828-.062 4.299-.287.573-.286 1.146-.899 1.453-1.543.205-.45.215-.623.246-4.742l.03-4.262H31.64zM53.537 12.059c-2.61.583-4.606 2.422-5.22 4.794-.257.99-.277 2.606-.052 3.485 1.095 4.313 5.834 6.316 10.45 4.425a9 9 0 0 0 1.157-.603l.522-.347v-5.263999999999999H58.04v4.17l-.48.205c-2.16.92-4.863.296-6.111-1.39-.666-.92-.82-1.441-.83-2.883 0-1.226.01-1.308.328-1.962.798-1.697 2.364-2.637 4.38-2.637.451 0 1.014.051 1.25.102.634.143 1.484.573 1.965.992l.42.357.388-.306c.205-.174.563-.501.788-.736l.41-.43-.491-.439c-.645-.593-1.372-.991-2.375-1.329-.686-.235-1.044-.286-2.15-.316-.92-.031-1.535.01-1.995.112M88.142 17.65c.03 5.53.03 5.55.266 6.02.296.604.839 1.145 1.443 1.442.46.225.563.235 4.084.266l3.613.03-.03-1.104-.031-1.103-3.388-.031c-3.296-.02-3.398-.03-3.583-.235-.184-.205-.194-.48-.225-5.52l-.03-5.304h-2.1399999999999997zM66.922 15.187c-1.382.184-2.805 1.073-3.542 2.218-.952 1.492-1.034 3.73-.205 5.345.287.562 1.218 1.533 1.853 1.901.89.542 2.057.787 3.408.716 1.587-.082 2.692-.48 3.43-1.247l.337-.348-.594-.664c-.624-.705-.757-.777-.982-.5-.236.285-1.3.725-1.924.796-.645.072-1.73-.081-2.19-.317-.687-.357-1.321-1.113-1.547-1.86l-.071-.224h7.994v-.644c-.01-1.513-.522-2.852-1.484-3.813-1.116-1.124-2.672-1.594-4.483-1.36m2.23 2.105c.717.378 1.27 1.084 1.434 1.84l.072.337h-5.773l.071-.286c.215-.9.911-1.707 1.73-2.003.604-.225 1.935-.164 2.467.112M80.042 15.178c-.87.133-1.668.47-2.19.93l-.471.42v-1.36l-1.096.03-1.105.031-.03 5.029-.021 5.039h2.334l.04-3.046c.031-2.82.041-3.066.246-3.495.46-.992 1.167-1.483 2.273-1.595 1.166-.123 2.016.317 2.456 1.278.266.572.276.582.307 3.71l.041 3.148h2.232v-3.322c0-3.495-.052-4.047-.471-4.855-.737-1.451-2.6-2.238-4.545-1.942M102.294 15.176c-1.146.123-2.375.542-3.04 1.042-.174.123-.164.174.143.747.174.337.39.715.471.848l.143.235.256-.204c.4-.317 1.259-.593 2.181-.726 1.392-.184 2.446.194 2.876 1.022.112.225.205.583.205.818v.409h-1.249c-1.546 0-2.907.143-3.562.357-.604.205-1.362.849-1.669 1.421s-.317 1.86-.02 2.463c.307.634.982 1.216 1.709 1.492.553.205.829.246 1.873.246 1.126 0 1.28-.02 1.833-.287.327-.153.757-.439.941-.643l.348-.358v1.237h2.15V21.89c0-1.86-.051-3.587-.103-3.833-.327-1.41-1.289-2.371-2.712-2.719-.819-.194-1.883-.255-2.774-.163m3.235 6.44c0 .95-.328 1.43-1.28 1.85-1.024.459-2.528.224-2.968-.46-.236-.359-.225-1.043.02-1.38.399-.542.747-.624 2.569-.624h1.659zM125.085 15.176c-1.791.224-3.203 1.226-3.94 2.78-.778 1.635-.666 3.649.266 5.11.962 1.492 2.641 2.33 4.698 2.33 1.607 0 3.009-.48 3.787-1.277l.338-.348-.583-.674c-.328-.368-.625-.665-.666-.665s-.256.133-.481.287c-.839.613-1.904.838-3.009.633-.778-.143-1.106-.296-1.648-.787a2.65 2.65 0 0 1-.819-1.277l-.082-.287h7.974v-.695c0-1.492-.522-2.8-1.474-3.76-1.095-1.084-2.682-1.585-4.361-1.37m2.068 2.085c.532.255.983.736 1.269 1.339.44.93.635.868-2.62.868h-2.866l.061-.286c.205-.9.891-1.707 1.72-2.003.573-.215 1.934-.164 2.436.082M138.102 15.189c-.84.102-1.7.51-2.242 1.042l-.44.42v-1.483l-1.095.03-1.106.031-.031 5.029-.02 5.039h2.334l.041-2.944c.03-2.81.041-2.954.266-3.444.481-1.032 1.187-1.492 2.385-1.564l.808-.051V16.19c0-.828-.03-1.114-.123-1.104-.071.01-.419.051-.777.102M109.219 15.27c0 .06.973 2.34 2.16 5.07 1.587 3.658 2.129 5.018 2.088 5.191-.041.123-.215.45-.389.726-.573.91-1.617 1.134-2.671.582l-.573-.306-.267.48c-.726 1.278-.685 1.155-.481 1.308 1.044.787 3.092.982 4.258.41.656-.318 1.382-1.053 1.751-1.769.286-.582 4.974-11.335 5.046-11.61.051-.164-.031-.174-1.054-.154l-1.106.03-1.586 3.7c-.881 2.034-1.618 3.68-1.638 3.65-.031-.031-.757-1.697-1.607-3.7l-1.556-3.65-1.187-.03c-.737-.02-1.188.01-1.188.072",
                  }))
              );
            },
            { className: "h-full w-full overflow-hidden pl-1 pt-1" }
          ),
          description:
            "GenLayer is a decentralized blockchain platform designed to execute AI-powered smart contracts called Intelligent Contracts, with the ability to access internet data and process natural language instructions.",
          buttonText: "Read More",
          buttonLink: "https://docs.genlayer.com/",
          tags: ["LLM API"],
        },
        {
          title: "Holdstation",
          image: (0, l.jsx)(d.default, {
            src: "/partners/holdstation.jpg",
            alt: "Holdstation",
            width: 48,
            height: 48,
          }),
          description:
            "Holdstation provides innovative financial solutions and tools for the Web3 ecosystem, enabling seamless access to DeFi and NFTs.",
          buttonText: "Visit",
          buttonLink: "https://holdstation.com/",
          tags: ["Finance"],
        },
        {
          title: "Holoworld",
          image: (0, l.jsx)(d.default, {
            src: "/partners/holoworld.jpg",
            alt: "Holoworld",
            width: 48,
            height: 48,
          }),
          description:
            "Holoworld brings your imagination to life. Create your favorite AI character, customize their personality and looks, and watch them become a virtual star.",
          buttonText: "Visit",
          buttonLink: "https://holoworld.com/",
          tags: ["AI Agent"],
        },
        {
          title: "Lit Protocol",
          image: (0, l.jsx)(d.default, {
            src: "/partners/lit-primary-black.svg",
            alt: "Lit Protocol",
            width: 48,
            height: 48,
          }),
          description:
            "Lit is a key management network for decentralized signing and encryption.",
          buttonText: "Visit",
          buttonLink: "https://www.litprotocol.com/",
          tags: ["Data"],
        },
        {
          title: "Marlin Protocol",
          image: (0, l.jsx)(d.default, {
            src: "/partners/marlin.svg",
            alt: "Marlin Protocol",
            width: 48,
            height: 48,
          }),
          description:
            "Marlin is a TEE-based decentralized cloud providing coprocessors for AI and ZK.",
          buttonText: "Visit",
          buttonLink: "https://www.marlin.org/",
          tags: ["Compute"],
        },
        {
          title: "Space and Time",
          image: (0, l.jsx)(d.default, {
            src: "/partners/spacextime.svg",
            alt: "Space x Time DB",
            width: 48,
            height: 48,
          }),
          description:
            "Space and Time enables smarter, trustless blockchain applications by delivering ZK-proven, SQL-queryable data across onchain and offchain ecosystems.",
          buttonText: "Visit",
          buttonLink: "https://spaceandtime.io/",
          tags: ["Data"],
        },
      ];
      var p = (e) => {
          let { mobile: t } = e;
          return (0, l.jsx)("div", {
            className: "pb-20",
            children: (0, l.jsx)("div", {
              className:
                "m-auto grid max-w-[1440px] grid-cols-1 gap-4 lg:grid-cols-3 2xl:px-0 ".concat(
                  t ? "px-4" : "px-20"
                ),
              children: x.map((e, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "flex rounded-lg bg-white p-6 ",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-200",
                        children: e.image && e.image,
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "mb-2 inline-block rounded-md bg-[#1d1d1b] px-2 py-1 text-xs text-white",
                            children: e.tags[0],
                          }),
                          (0, l.jsx)("h2", {
                            className: "mb-2 text-xl font-bold",
                            children: e.title,
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "custom-font-SFMono-regular mb-4 flex-grow text-sm text-gray-600",
                            children: e.description,
                          }),
                          (0, l.jsxs)(h.default, {
                            href: e.buttonLink,
                            target: "_blank",
                            className: "group relative mt-4 flex items-center",
                            children: [
                              (0, l.jsx)("span", {
                                className: "mr-3 text-base font-semibold",
                                children: e.buttonText,
                              }),
                              (0, l.jsx)("svg", {
                                className:
                                  "transition-transform duration-300 group-hover:rotate-45",
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, l.jsx)("path", {
                                  d: "M11.0586 1.15966L1.16016 11.0581M11.0586 1.15966C9.92835 3.9788 9.77359 7.11727 10.6185 10.0849L10.9317 11.185M11.0586 1.15966C8.23946 2.28992 5.101 2.44468 2.13336 1.59977L1.03326 1.28657",
                                  stroke: "#1D1D1B",
                                  strokeWidth: "2",
                                  strokeLinejoin: "bevel",
                                }),
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-[#c9c9c6] transition-transform duration-300 group-hover:scale-x-100",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          });
        },
        f = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(c.Z, {}),
              (0, l.jsxs)("div", {
                className: "relative bg-[#F6F8FC]",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "relative m-auto max-w-[1440px] px-20 py-40 2xl:px-0",
                    children: (0, l.jsx)("div", {
                      className: "flex items-center justify-center",
                      children: (0, l.jsxs)("div", {
                        className: "relative text-center",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                            style: {
                              backgroundColor: "#CDF138",
                              borderRadius: "50%",
                              filter: "blur(60px)",
                            },
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "relative flex flex-col items-center justify-center p-12 text-center leading-none",
                            children: [
                              (0, l.jsxs)("h1", {
                                className:
                                  "text-[60px]/[60px] font-semibold lg:text-[70px]/[70px] xl:text-[80px]/[80px]",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "block",
                                    children: "ECOSYSTEM",
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "block",
                                    children: "PARTNERS",
                                  }),
                                ],
                              }),
                              (0, l.jsx)("h2", {
                                className:
                                  "mt-8 max-w-2xl text-lg font-medium text-gray-700 lg:text-xl",
                                children:
                                  "Join the growing partnership network and build decentralized AI together",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)(p, {}),
                ],
              }),
              (0, l.jsx)(o.Z, {}),
            ],
          }),
        g = s(68592),
        b = s(47802),
        w = s(10073),
        v = () =>
          (0, l.jsx)("div", {
            className: "relative z-50",
            children: (0, l.jsxs)("div", {
              className: "flex items-center justify-between p-4",
              children: [
                (0, l.jsx)(h.default, {
                  href: "/",
                  children: (0, l.jsx)(d.default, {
                    src: b.Z,
                    alt: "Heurist",
                    width: 122,
                    height: 64,
                  }),
                }),
                (0, l.jsx)(w.Z, { className: "text-white" }),
              ],
            }),
          }),
        j = () =>
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: "relative bg-[#F6F8FC]",
                children: [
                  (0, l.jsx)(v, {}),
                  (0, l.jsx)("div", {
                    className: "flex items-center justify-center py-10",
                    children: (0, l.jsxs)("div", {
                      className: "relative text-center",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                          style: {
                            backgroundColor: "#CDF138",
                            borderRadius: "50%",
                            filter: "blur(60px)",
                          },
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "relative flex flex-col items-center justify-center p-2",
                          children: [
                            (0, l.jsxs)("h1", {
                              className:
                                "text-[40px] font-bold leading-tight text-center",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "block",
                                  children: "ECOSYSTEM",
                                }),
                                (0, l.jsx)("span", {
                                  className: "block",
                                  children: "PARTNERS",
                                }),
                              ],
                            }),
                            (0, l.jsx)("h2", {
                              className:
                                "mt-6 max-w-sm px-4 text-base font-medium text-gray-700",
                              children:
                                "Join the growing partnership network and build decentralized AI together",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(p, { mobile: !0 }),
                ],
              }),
              (0, l.jsx)(g.default, {}),
            ],
          }),
        k = () => {
          let [e, t] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                let e = document.documentElement.clientWidth;
                t(window.innerWidth < 768 || e < 768);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, l.jsx)("div", {
              children: e ? (0, l.jsx)(j, {}) : (0, l.jsx)(f, {}),
            })
          );
        };
    },
    10073: function (e, t, s) {
      "use strict";
      var i = s(90132),
        a = s(55881),
        r = s(90600);
      let l = [
        { href: "/stake", label: "Stake", external: !1 },

        { href: "/", label: "Docs", external: !0 },
        { href: "/credits", label: "API Credits", external: !1 },
        { href: "/blog", label: "Blog", external: !1 },
        { label: "Terms of Service", external: !1 },
        { label: "Privacy Notice", external: !1 },
      ];
      t.Z = (e) => {
        let { className: t, mode: s = "light" } = e,
          [n, o] = (0, a.useState)(!1);
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
                  children: l.map((e, t) =>
                    (0, i.jsx)(
                      r.default,
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
        a = s(90600),
        r = s(80870),
        l = s(88509);
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
                        children: (0, i.jsx)(l.Z, { mode: t }),
                      }),
                    ],
                  }),
                  [
                    {
                      title: "Ecosystem",
                      showArrow: !0,
                      list: [
                        {
                          title: "Heurist Mesh MCP",
                          link: "https://etherscan.io/token/0xTBA",
                        },
                        {
                          title: "Heurist Imagine",
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
                          title: "Heurist Digital Assets",
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
                                  children: (0, i.jsxs)(a.default, {
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
                children: (0, i.jsx)(r.Z, {
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
                      " Heurist All Rights Reserved",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-8 items-center",
                    children: [
                      (0, i.jsx)(a.default, {
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
        a = s(90600),
        r = s(80870),
        l = s(88509);
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
                      children: (0, i.jsx)(l.Z, { mode: t }),
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
                            title: "Heurist Mesh MCP",
                            link: "https://etherscan.io/token/0xTBA",
                          },
                          {
                            title: "Heurist Imagine",
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
                            title: "Heurist Digital Assets",
                            link: "https://tokenize.heurist.ai",
                          },
                        ],
                      },
                      {
                        title: "Buy HEU",
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
                        title: "Track HEU",
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
                                    children: (0, i.jsxs)(a.default, {
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
                children: (0, i.jsx)(r.Z, {
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
                      " Heurist All rights reserved",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex gap-8 items-center",
                    children: [
                      (0, i.jsx)(a.default, {
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
        a = s(55881),
        r = s(20049),
        l = s(90600),
        n = s(749),
        o = s(89690),
        c = s(47802),
        d = s(73526);
      let h = [
          { href: "/stake", label: "Stake", external: !1 },

          { href: "/", label: "Docs", external: !0 },
          { href: "/blog", label: "Blog", external: !1 },
        ],
        u = (e) => {
          let { isNewEcosystem: t, isTransparent: s, mode: a } = e;
          return "light" === a || t || !s
            ? (0, i.jsx)(l.default, {
                href: "/",
                children: (0, i.jsx)(r.default, {
                  src: c.Z,
                  alt: "Logo",
                  width: 116,
                  height: 32,
                }),
              })
            : (0, i.jsx)(l.default, {
                href: "/",
                children: (0, i.jsx)(o.Z, { width: 116, height: 32 }),
              });
        };
      t.Z = (e) => {
        let { mode: t = "dark" } = e,
          s = "/ecosystem" === (0, n.usePathname)(),
          [r, o] = (0, a.useState)(!0),
          [c, m] = (0, a.useState)(!0),
          [x, p] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
          let e = () => {
            let e = window.scrollY;
            e < 10 ? (m(!0), o(!0)) : (m(!1), e < x ? o(!0) : o(!1)), p(e);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, [x]);
        let f = "fixed z-[200] w-full px-20 transition duration-200 2xl:px-0 "
          .concat(s ? "text-black" : "text-white", " ")
          .concat(c ? "bg-transparent" : "bg-white", " ")
          .concat(r ? "translate-y-0" : "-translate-y-full", " ")
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
                  let { href: s, label: a, external: r } = e;
                  return (0, i.jsx)(
                    l.default,
                    {
                      href: s,
                      className: "px-4 font-normal ".concat(
                        "light" === t ? "text-black" : ""
                      ),
                      target: r ? "_blank" : void 0,
                      children: a,
                    },
                    s
                  );
                }),
              }),
              (0, i.jsx)(l.default, {
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
  function (e) {
    e.O(
      0,
      [20049, 90600, 17714, 63542, 48312, 59062, 34034, 1744],
      function () {
        return e((e.s = 25504));
      }
    ),
      (_N_E = e.O());
  },
]);
