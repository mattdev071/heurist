"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [51848],
  {
    16924: function (e, t, n) {
      n.d(t, {
        $: function () {
          return o;
        },
      });
      var r = n(95180),
        i = "#1A1B1F",
        a = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: i },
          orange: { accentColor: "#FF983D", accentColorForeground: i },
          pink: { accentColor: "#FF7AB8", accentColorForeground: i },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        s = a.blue,
        o = function () {
          let {
            accentColor: e = s.accentColor,
            accentColorForeground: t = s.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.w)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(255, 255, 255, 0.04)",
              actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
              actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
              closeButton: "rgba(224, 232, 255, 0.6)",
              closeButtonBackground: "rgba(255, 255, 255, 0.08)",
              connectButtonBackground: i,
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
              connectButtonText: "#FFF",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
              error: "#FF494A",
              generalBorder: "rgba(255, 255, 255, 0.08)",
              generalBorderDim: "rgba(255, 255, 255, 0.04)",
              menuItemBackground: "rgba(224, 232, 255, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.5)",
              modalBackground: "#1A1B1F",
              modalBorder: "rgba(255, 255, 255, 0.08)",
              modalText: "#FFF",
              modalTextDim: "rgba(224, 232, 255, 0.3)",
              modalTextSecondary: "rgba(255, 255, 255, 0.6)",
              profileAction: "rgba(224, 232, 255, 0.1)",
              profileActionHover: "rgba(224, 232, 255, 0.2)",
              profileForeground: "rgba(224, 232, 255, 0.05)",
              selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      o.accentColors = a;
    },
    97655: function (e, t, n) {
      n.d(t, {
        R: function () {
          return i;
        },
      });
      var r = n(26254),
        i = () => ({
          id: "rabby",
          name: "Rabby Wallet",
          iconUrl: async () =>
            (await n.e(40800).then(n.bind(n, 40800))).default,
          rdns: "io.rabby",
          iconBackground: "#8697FF",
          installed: (0, r.B)({ flag: "isRabby" }),
          downloadUrls: {
            chrome:
              "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
            browserExtension: "https://rabby.io",
          },
          extension: {
            instructions: {
              learnMoreUrl: "https://rabby.io/",
              steps: [
                {
                  description:
                    "wallet_connectors.rabby.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.rabby.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.rabby.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.rabby.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.rabby.extension.step3.title",
                },
              ],
            },
          },
          createConnector: (0, r.K)({ flag: "isRabby" }),
        });
    },
    46704: function (e, t, n) {
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var r = n(92747),
        i = n(80925),
        a = new Map(),
        s = (e) => {
          let {
              projectId: t,
              walletConnectParameters: n,
              rkDetailsShowQrModal: r,
            } = e,
            s = { ...(n || {}), projectId: t, showQrModal: !1 };
          r && (s = { ...s, showQrModal: !0 });
          let o = JSON.stringify(s),
            l = a.get(o);
          if (l) return l;
          let u = (0, i.a)(s);
          return a.set(o, u), u;
        };
      function o(e) {
        let { projectId: t, walletConnectParameters: n } = e;
        if (!t || "" === t)
          throw Error(
            "No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure"
          );
        return (
          "YOUR_PROJECT_ID" === t && (t = "21fef48091f12692cad574a6f7753643"),
          (e) =>
            (function (e) {
              let {
                projectId: t,
                walletDetails: n,
                walletConnectParameters: i,
              } = e;
              return (0, r.K)((e) => ({
                ...s({
                  projectId: t,
                  walletConnectParameters: i,
                  rkDetailsShowQrModal: n.rkDetails.showQrModal,
                })(e),
                ...n,
              }));
            })({ projectId: t, walletDetails: e, walletConnectParameters: n })
        );
      }
    },
    91603: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(26254),
        i = () => ({
          id: "phantom",
          name: "Phantom",
          rdns: "app.phantom",
          iconUrl: async () =>
            (await n.e(53621).then(n.bind(n, 53621))).default,
          iconBackground: "#9A8AEE",
          installed: (0, r.B)({ namespace: "phantom.ethereum" }),
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=app.phantom",
            ios: "https://apps.apple.com/app/phantom-solana-wallet/1598432977",
            mobile: "https://phantom.app/download",
            qrCode: "https://phantom.app/download",
            chrome:
              "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",
            firefox: "https://addons.mozilla.org/firefox/addon/phantom-app/",
            browserExtension: "https://phantom.app/download",
          },
          extension: {
            instructions: {
              steps: [
                {
                  description:
                    "wallet_connectors.phantom.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.phantom.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.phantom.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.phantom.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.phantom.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.phantom.extension.step3.title",
                },
              ],
              learnMoreUrl: "https://help.phantom.app",
            },
          },
          createConnector: (0, r.K)({ namespace: "phantom.ethereum" }),
        });
    },
    73890: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
      });
      var r = n(10223),
        i = n(26254),
        a = n(46704);
      function s(e) {
        return (
          !!(null == e ? void 0 : e.isMetaMask) &&
          (!e.isBraveWallet || !!e._events || !!e._state) &&
          !e.isApexWallet &&
          !e.isAvalanche &&
          !e.isBackpack &&
          !e.isBifrost &&
          !e.isBitKeep &&
          !e.isBitski &&
          !e.isBlockWallet &&
          !e.isCoinbaseWallet &&
          !e.isDawn &&
          !e.isEnkrypt &&
          !e.isExodus &&
          !e.isFrame &&
          !e.isFrontier &&
          !e.isGamestop &&
          !e.isHyperPay &&
          !e.isImToken &&
          !e.isKuCoinWallet &&
          !e.isMathWallet &&
          !e.isNestWallet &&
          !e.isOkxWallet &&
          !e.isOKExWallet &&
          !e.isOneInchIOSWallet &&
          !e.isOneInchAndroidWallet &&
          !e.isOpera &&
          !e.isPhantom &&
          !e.isPortal &&
          !e.isRabby &&
          !e.isRainbow &&
          !e.isStatus &&
          !e.isTalisman &&
          !e.isTally &&
          !e.isTokenPocket &&
          !e.isTokenary &&
          !e.isTrust &&
          !e.isTrustWallet &&
          !e.isXDEFI &&
          !e.isZeal &&
          !e.isZerion &&
          !e.__seif
        );
      }
      var o = (e) => {
        var t, o, l;
        let { projectId: u, walletConnectParameters: c } = e,
          h = (0, i.B)({ flag: "isMetaMask" }),
          d = !h,
          p = (e) =>
            (0, r.Dt)()
              ? e
              : (0, r.gn)()
              ? "metamask://wc?uri=".concat(encodeURIComponent(e))
              : "https://metamask.app.link/wc?uri=".concat(
                  encodeURIComponent(e)
                );
        return {
          id: "metaMask",
          name: "MetaMask",
          rdns: "io.metamask",
          iconUrl: async () =>
            (await n.e(94705).then(n.bind(n, 94705))).default,
          iconAccent: "#f6851a",
          iconBackground: "#fff",
          installed: d ? void 0 : h,
          downloadUrls: {
            android:
              "https://play.google.com/store/apps/details?id=io.metamask",
            ios: "https://apps.apple.com/us/app/metamask/id1438144202",
            mobile: "https://metamask.io/download",
            qrCode: "https://metamask.io/download",
            chrome:
              "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
            edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",
            firefox: "https://addons.mozilla.org/firefox/addon/ether-metamask",
            opera: "https://addons.opera.com/extensions/details/metamask-10",
            browserExtension: "https://metamask.io/download",
          },
          mobile: { getUri: d ? p : void 0 },
          qrCode: d
            ? {
                getUri: p,
                instructions: {
                  learnMoreUrl: "https://metamask.io/faqs/",
                  steps: [
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step1.description",
                      step: "install",
                      title: "wallet_connectors.metamask.qr_code.step1.title",
                    },
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step2.description",
                      step: "create",
                      title: "wallet_connectors.metamask.qr_code.step2.title",
                    },
                    {
                      description:
                        "wallet_connectors.metamask.qr_code.step3.description",
                      step: "refresh",
                      title: "wallet_connectors.metamask.qr_code.step3.title",
                    },
                  ],
                },
              }
            : void 0,
          extension: {
            instructions: {
              learnMoreUrl: "https://metamask.io/faqs/",
              steps: [
                {
                  description:
                    "wallet_connectors.metamask.extension.step1.description",
                  step: "install",
                  title: "wallet_connectors.metamask.extension.step1.title",
                },
                {
                  description:
                    "wallet_connectors.metamask.extension.step2.description",
                  step: "create",
                  title: "wallet_connectors.metamask.extension.step2.title",
                },
                {
                  description:
                    "wallet_connectors.metamask.extension.step3.description",
                  step: "refresh",
                  title: "wallet_connectors.metamask.extension.step3.title",
                },
              ],
            },
          },
          createConnector: d
            ? (0, a.d)({ projectId: u, walletConnectParameters: c })
            : (0, i.K)({
                target:
                  "undefined" != typeof window
                    ? null !==
                        (l =
                          null === (o = window.ethereum) || void 0 === o
                            ? void 0
                            : null === (t = o.providers) || void 0 === t
                            ? void 0
                            : t.find(s)) && void 0 !== l
                      ? l
                      : window.ethereum
                    : void 0,
              }),
        };
      };
    },
    26254: function (e, t, n) {
      n.d(t, {
        B: function () {
          return o;
        },
        K: function () {
          return l;
        },
      });
      var r = n(92747),
        i = n(13960);
      function a(e) {
        let t = "undefined" != typeof window ? window : void 0;
        if (void 0 === t || void 0 === t.ethereum) return;
        let n = t.ethereum.providers;
        return n ? n.find((t) => t[e]) : t.ethereum[e] ? t.ethereum : void 0;
      }
      function s(e) {
        let t = (e, n) => {
          let [r, ...i] = n.split("."),
            a = e[r];
          if (a) return 0 === i.length ? a : t(a, i.join("."));
        };
        if ("undefined" != typeof window) return t(window, e);
      }
      function o(e) {
        let { flag: t, namespace: n } = e;
        return (!!n && void 0 !== s(n)) || (!!t && void 0 !== a(t));
      }
      function l(e) {
        var t;
        let { flag: n, namespace: o, target: l } = e;
        return (
          (t =
            l ||
            (function (e) {
              var t;
              let { flag: n, namespace: r } = e,
                i = "undefined" != typeof window ? window : void 0;
              if (void 0 === i) return;
              if (r) {
                let e = s(r);
                if (e) return e;
              }
              let o =
                null === (t = i.ethereum) || void 0 === t
                  ? void 0
                  : t.providers;
              if (n) {
                let e = a(n);
                if (e) return e;
              }
              return void 0 !== o && o.length > 0 ? o[0] : i.ethereum;
            })({ flag: n, namespace: o })),
          (e) => {
            let n = t
              ? {
                  target: () => ({
                    id: e.rkDetails.id,
                    name: e.rkDetails.name,
                    provider: t,
                  }),
                }
              : {};
            return (0, r.K)((t) => ({ ...(0, i.L)(n)(t), ...e }));
          }
        );
      }
    },
    13321: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
      });
      var r = n(46704),
        i = (e) => {
          let { projectId: t, options: i } = e;
          return {
            id: "walletConnect",
            name: "WalletConnect",
            installed: void 0,
            iconUrl: async () =>
              (await n.e(92729).then(n.bind(n, 92729))).default,
            iconBackground: "#3b99fc",
            qrCode: { getUri: (e) => e },
            createConnector: (0, r.d)({
              projectId: t,
              walletConnectParameters: i,
            }),
          };
        };
    },
    42048: function (e, t, n) {
      n.d(t, {
        u: function () {
          return s;
        },
      });
      var r = n(10223),
        i = n(26254),
        a = n(46704),
        s = (e) => {
          let { projectId: t, walletConnectParameters: s } = e,
            o = (0, i.B)({ flag: "isRainbow" }),
            l = !o,
            u = (e) =>
              (0, r.Dt)()
                ? e
                : (0, r.gn)()
                ? "rainbow://wc?uri=".concat(
                    encodeURIComponent(e),
                    "&connector=rainbowkit"
                  )
                : "https://rnbwapp.com/wc?uri=".concat(
                    encodeURIComponent(e),
                    "&connector=rainbowkit"
                  );
          return {
            id: "rainbow",
            name: "Rainbow",
            rdns: "me.rainbow",
            iconUrl: async () =>
              (await n.e(6958).then(n.bind(n, 6958))).default,
            iconBackground: "#0c2f78",
            installed: l ? void 0 : o,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",
              ios: "https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",
              mobile: "https://rainbow.download?utm_source=rainbowkit",
              qrCode:
                "https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",
              browserExtension:
                "https://rainbow.me/extension?utm_source=rainbowkit",
            },
            mobile: { getUri: l ? u : void 0 },
            qrCode: l
              ? {
                  getUri: u,
                  instructions: {
                    learnMoreUrl:
                      "https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",
                    steps: [
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.rainbow.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.rainbow.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.rainbow.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.rainbow.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            createConnector: l
              ? (0, a.d)({ projectId: t, walletConnectParameters: s })
              : (0, i.K)({ flag: "isRainbow" }),
          };
        };
    },
    71395: function (e, t, n) {
      n.d(t, {
        b: function () {
          return s;
        },
      });
      var r = n(10223),
        i = n(26254),
        a = n(46704),
        s = (e) => {
          let { projectId: t, walletConnectParameters: s } = e,
            o = (0, i.B)({ flag: "isBinance" }),
            l = !o;
          return {
            id: "binance",
            name: "Binance Wallet",
            rdns: "com.binance.wallet",
            iconUrl: async () =>
              (await n.e(24873).then(n.bind(n, 24873))).default,
            iconBackground: "#000000",
            installed: l ? void 0 : o,
            downloadUrls: {
              android:
                "https://play.google.com/store/apps/details?id=com.binance.dev",
              ios: "https://apps.apple.com/us/app/id1436799971",
              mobile: "https://www.binance.com/en/download",
              qrCode: "https://www.binance.com/en/web3wallet",
            },
            mobile: l
              ? {
                  getUri: (e) =>
                    (0, r.Dt)()
                      ? e
                      : "bnc://app.binance.com/cedefi/wc?uri=".concat(
                          encodeURIComponent(e)
                        ),
                }
              : void 0,
            qrCode: l
              ? {
                  getUri: (e) => e,
                  instructions: {
                    learnMoreUrl: "https://www.binance.com/en/web3wallet",
                    steps: [
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step1.description",
                        step: "install",
                        title: "wallet_connectors.binance.qr_code.step1.title",
                      },
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step2.description",
                        step: "create",
                        title: "wallet_connectors.binance.qr_code.step2.title",
                      },
                      {
                        description:
                          "wallet_connectors.binance.qr_code.step3.description",
                        step: "scan",
                        title: "wallet_connectors.binance.qr_code.step3.title",
                      },
                    ],
                  },
                }
              : void 0,
            createConnector: l
              ? (0, a.d)({ projectId: t, walletConnectParameters: s })
              : (0, i.K)({ flag: "isBinance" }),
          };
        };
    },
    10223: function (e, t, n) {
      function r() {
        return (
          "undefined" != typeof navigator &&
          /android/i.test(navigator.userAgent)
        );
      }
      function i() {
        return (
          ("undefined" != typeof navigator &&
            /iPhone|iPod/.test(navigator.userAgent)) ||
          ("undefined" != typeof navigator &&
            (/iPad/.test(navigator.userAgent) ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1)))
        );
      }
      n.d(t, {
        Dt: function () {
          return r;
        },
        gn: function () {
          return i;
        },
      });
    },
    70157: function (e, t, n) {
      n.d(t, {
        S: function () {
          return m;
        },
      });
      var r = n(37886),
        i = n(74938),
        a = n(23611),
        s = n(34378),
        o = class extends s.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let a = t.queryKey,
              s = t.queryHash ?? (0, r.Rm)(a, t),
              o = this.get(s);
            return (
              o ||
                ((o = new i.A({
                  cache: this,
                  queryKey: a,
                  queryHash: s,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(a),
                })),
                this.add(o)),
              o
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            a.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, r._x)(e, t))
              : t;
          }
          notify(e) {
            a.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            a.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            a.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        l = n(85367),
        u = class extends s.l {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Map()),
              (this.#n = Date.now());
          }
          #t;
          #n;
          build(e, t, n) {
            let r = new l.m({
              mutationCache: this,
              mutationId: ++this.#n,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(r), r;
          }
          add(e) {
            let t = c(e),
              n = this.#t.get(t) ?? [];
            n.push(e),
              this.#t.set(t, n),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = c(e);
            if (this.#t.has(t)) {
              let n = this.#t.get(t)?.filter((t) => t !== e);
              n && (0 === n.length ? this.#t.delete(t) : this.#t.set(t, n));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#t
              .get(c(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#t.get(c(e))?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            a.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#t.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r.X7)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, r.X7)(e, t));
          }
          notify(e) {
            a.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return a.V.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(r.ZT)))
            );
          }
        };
      function c(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      var h = n(75005),
        d = n(37532);
      function p(e) {
        return {
          onFetch: (t, n) => {
            let i = t.options,
              a = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              o = t.state.data?.pageParams || [],
              l = { pages: [], pageParams: [] },
              u = 0,
              c = async () => {
                let n = !1,
                  c = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (n = !0)
                          : t.signal.addEventListener("abort", () => {
                              n = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  h = (0, r.cG)(t.options, t.fetchOptions),
                  d = async (e, i, a) => {
                    if (n) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let s = {
                      queryKey: t.queryKey,
                      pageParam: i,
                      direction: a ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    c(s);
                    let o = await h(s),
                      { maxPages: l } = t.options,
                      u = a ? r.Ht : r.VX;
                    return {
                      pages: u(e.pages, o, l),
                      pageParams: u(e.pageParams, i, l),
                    };
                  };
                if (a && s.length) {
                  let e = "backward" === a,
                    t = { pages: s, pageParams: o },
                    n = (
                      e
                        ? function (e, { pages: t, pageParams: n }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, n[0], n)
                              : void 0;
                          }
                        : f
                    )(i, t);
                  l = await d(t, n, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? o[0] ?? i.initialPageParam : f(i, l);
                    if (u > 0 && null == e) break;
                    (l = await d(l, e)), u++;
                  } while (u < t);
                }
                return l;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    c,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  ))
              : (t.fetchFn = c);
          },
        };
      }
      function f(e, { pages: t, pageParams: n }) {
        let r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
      }
      var m = class {
        #r;
        #i;
        #a;
        #s;
        #o;
        #l;
        #u;
        #c;
        constructor(e = {}) {
          (this.#r = e.queryCache || new o()),
            (this.#i = e.mutationCache || new u()),
            (this.#a = e.defaultOptions || {}),
            (this.#s = new Map()),
            (this.#o = new Map()),
            (this.#l = 0);
        }
        mount() {
          this.#l++,
            1 === this.#l &&
              ((this.#u = h.j.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onFocus());
              })),
              (this.#c = d.N.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#r.onOnline());
              })));
        }
        unmount() {
          this.#l--,
            0 === this.#l &&
              (this.#u?.(),
              (this.#u = void 0),
              this.#c?.(),
              (this.#c = void 0));
        }
        isFetching(e) {
          return this.#r.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#i.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.getQueryData(e.queryKey);
          if (void 0 === t) return this.fetchQuery(e);
          {
            let n = this.defaultQueryOptions(e),
              i = this.#r.build(this, n);
            return (
              e.revalidateIfStale &&
                i.isStaleByTime((0, r.KC)(n.staleTime, i)) &&
                this.prefetchQuery(n),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return this.#r
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, n) {
          let i = this.defaultQueryOptions({ queryKey: e }),
            a = this.#r.get(i.queryHash),
            s = a?.state.data,
            o = (0, r.SE)(t, s);
          if (void 0 !== o)
            return this.#r.build(this, i).setData(o, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return a.V.batch(() =>
            this.#r
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#r.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#r;
          a.V.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let n = this.#r,
            r = { type: "active", ...e };
          return a.V.batch(
            () => (
              n.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(r, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          let n = { revert: !0, ...t };
          return Promise.all(
            a.V.batch(() => this.#r.findAll(e).map((e) => e.cancel(n)))
          )
            .then(r.ZT)
            .catch(r.ZT);
        }
        invalidateQueries(e = {}, t = {}) {
          return a.V.batch(() => {
            if (
              (this.#r.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              "none" === e.refetchType)
            )
              return Promise.resolve();
            let n = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(n, t);
          });
        }
        refetchQueries(e = {}, t) {
          let n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
          return Promise.all(
            a.V.batch(() =>
              this.#r
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, n);
                  return (
                    n.throwOnError || (t = t.catch(r.ZT)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(r.ZT);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let n = this.#r.build(this, t);
          return n.isStaleByTime((0, r.KC)(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(r.ZT).catch(r.ZT);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = p(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(r.ZT).catch(r.ZT);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = p(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return d.N.isOnline()
            ? this.#i.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#r;
        }
        getMutationCache() {
          return this.#i;
        }
        getDefaultOptions() {
          return this.#a;
        }
        setDefaultOptions(e) {
          this.#a = e;
        }
        setQueryDefaults(e, t) {
          this.#s.set((0, r.Ym)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#s.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, r.to)(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          this.#o.set((0, r.Ym)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#o.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, r.to)(e, t.mutationKey) &&
                (n = { ...n, ...t.defaultOptions });
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#a.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, r.Rm)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            !0 !== t.enabled && t.queryFn === r.CN && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#a.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#r.clear(), this.#i.clear();
        }
      };
    },
    77153: function (e, t, n) {
      n.d(t, {
        w: function () {
          return Q;
        },
      });
      var r = n(90132),
        i = n(55881),
        a = n(95156),
        s = n(94447),
        o = n(24142),
        l = n(45547),
        u = n(19815),
        c = n(78694),
        h = class extends c.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let r = t.queryKey,
              i = t.queryHash ?? (0, o.Rm)(r, t),
              a = this.get(i);
            return (
              a ||
                ((a = new l.A({
                  cache: this,
                  queryKey: r,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(r),
                })),
                this.add(a)),
              a
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            u.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, o._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, o._x)(e, t))
              : t;
          }
          notify(e) {
            u.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            u.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            u.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        d = n(58389),
        p = class extends c.l {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#h = new Map()),
              (this.#n = 0);
          }
          #t;
          #h;
          #n;
          build(e, t, n) {
            let r = new d.m({
              mutationCache: this,
              mutationId: ++this.#n,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(r), r;
          }
          add(e) {
            this.#t.add(e);
            let t = f(e);
            if ("string" == typeof t) {
              let n = this.#h.get(t);
              n ? n.push(e) : this.#h.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = f(e);
              if ("string" == typeof t) {
                let n = this.#h.get(t);
                if (n) {
                  if (n.length > 1) {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  } else n[0] === e && this.#h.delete(t);
                }
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = f(e);
            if ("string" != typeof t) return !0;
            {
              let n = this.#h.get(t),
                r = n?.find((e) => "pending" === e.state.status);
              return !r || r === e;
            }
          }
          runNext(e) {
            let t = f(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let n = this.#h.get(t)?.find((t) => t !== e && t.state.isPaused);
              return n?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            u.V.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#h.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, o.X7)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, o.X7)(e, t));
          }
          notify(e) {
            u.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return u.V.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(o.ZT)))
            );
          }
        };
      function f(e) {
        return e.options.scope?.id;
      }
      var m = n(29457),
        g = n(43401);
      function y(e) {
        return {
          onFetch: (t, n) => {
            let r = t.options,
              i = t.fetchOptions?.meta?.fetchMore?.direction,
              a = t.state.data?.pages || [],
              s = t.state.data?.pageParams || [],
              l = { pages: [], pageParams: [] },
              u = 0,
              c = async () => {
                let n = !1,
                  c = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (n = !0)
                          : t.signal.addEventListener("abort", () => {
                              n = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  h = (0, o.cG)(t.options, t.fetchOptions),
                  d = async (e, r, i) => {
                    if (n) return Promise.reject();
                    if (null == r && e.pages.length) return Promise.resolve(e);
                    let a = {
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    c(a);
                    let s = await h(a),
                      { maxPages: l } = t.options,
                      u = i ? o.Ht : o.VX;
                    return {
                      pages: u(e.pages, s, l),
                      pageParams: u(e.pageParams, r, l),
                    };
                  };
                if (i && a.length) {
                  let e = "backward" === i,
                    t = { pages: a, pageParams: s },
                    n = (
                      e
                        ? function (e, { pages: t, pageParams: n }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, n[0], n)
                              : void 0;
                          }
                        : b
                    )(r, t);
                  l = await d(t, n, e);
                } else {
                  let t = e ?? a.length;
                  do {
                    let e = 0 === u ? s[0] ?? r.initialPageParam : b(r, l);
                    if (u > 0 && null == e) break;
                    (l = await d(l, e)), u++;
                  } while (u < t);
                }
                return l;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    c,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  ))
              : (t.fetchFn = c);
          },
        };
      }
      function b(e, { pages: t, pageParams: n }) {
        let r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
      }
      var w = class {
          #r;
          #i;
          #a;
          #s;
          #o;
          #l;
          #u;
          #c;
          constructor(e = {}) {
            (this.#r = e.queryCache || new h()),
              (this.#i = e.mutationCache || new p()),
              (this.#a = e.defaultOptions || {}),
              (this.#s = new Map()),
              (this.#o = new Map()),
              (this.#l = 0);
          }
          mount() {
            this.#l++,
              1 === this.#l &&
                ((this.#u = m.j.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#r.onFocus());
                })),
                (this.#c = g.N.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#r.onOnline());
                })));
          }
          unmount() {
            this.#l--,
              0 === this.#l &&
                (this.#u?.(),
                (this.#u = void 0),
                this.#c?.(),
                (this.#c = void 0));
          }
          isFetching(e) {
            return this.#r.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#i.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#r.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              n = this.#r.build(this, t),
              r = n.state.data;
            return void 0 === r
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  n.isStaleByTime((0, o.KC)(t.staleTime, n)) &&
                  this.prefetchQuery(t),
                Promise.resolve(r));
          }
          getQueriesData(e) {
            return this.#r
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, n) {
            let r = this.defaultQueryOptions({ queryKey: e }),
              i = this.#r.get(r.queryHash),
              a = i?.state.data,
              s = (0, o.SE)(t, a);
            if (void 0 !== s)
              return this.#r.build(this, r).setData(s, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return u.V.batch(() =>
              this.#r
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#r.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#r;
            u.V.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let n = this.#r,
              r = { type: "active", ...e };
            return u.V.batch(
              () => (
                n.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(r, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let n = { revert: !0, ...t };
            return Promise.all(
              u.V.batch(() => this.#r.findAll(e).map((e) => e.cancel(n)))
            )
              .then(o.ZT)
              .catch(o.ZT);
          }
          invalidateQueries(e, t = {}) {
            return u.V.batch(() => {
              if (
                (this.#r.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                e?.refetchType === "none")
              )
                return Promise.resolve();
              let n = { ...e, type: e?.refetchType ?? e?.type ?? "active" };
              return this.refetchQueries(n, t);
            });
          }
          refetchQueries(e, t = {}) {
            let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              u.V.batch(() =>
                this.#r
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, n);
                    return (
                      n.throwOnError || (t = t.catch(o.ZT)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(o.ZT);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let n = this.#r.build(this, t);
            return n.isStaleByTime((0, o.KC)(t.staleTime, n))
              ? n.fetch(t)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(o.ZT).catch(o.ZT);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = y(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(o.ZT).catch(o.ZT);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = y(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return g.N.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#r;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(e) {
            this.#a = e;
          }
          setQueryDefaults(e, t) {
            this.#s.set((0, o.Ym)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#s.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, o.to)(e, t.queryKey) && Object.assign(n, t.defaultOptions);
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            this.#o.set((0, o.Ym)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#o.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, o.to)(e, t.mutationKey) &&
                  (n = { ...n, ...t.defaultOptions });
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#a.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, o.Rm)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === o.CN && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#a.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#r.clear(), this.#i.clear();
          }
        },
        v = n(6306),
        q = n(89056),
        C = n(83204);
      function k(e, t) {
        return !(function e(t, n) {
          if (t === n) return !0;
          if (t && n && "object" == typeof t && "object" == typeof n) {
            let r, i;
            if (t.constructor !== n.constructor) return !1;
            if (Array.isArray(t) && Array.isArray(n)) {
              if ((r = t.length) !== n.length) return !1;
              for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
              return !0;
            }
            if (t.valueOf !== Object.prototype.valueOf)
              return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString)
              return t.toString() === n.toString();
            let a = Object.keys(t);
            if ((r = a.length) !== Object.keys(n).length) return !1;
            for (i = r; 0 != i--; )
              if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
            for (i = r; 0 != i--; ) {
              let r = a[i];
              if (r && !e(t[r], n[r])) return !1;
            }
            return !0;
          }
          return t != t && n != n;
        })(e, t)
          ? (0, o.Q$)(e, t)
          : e;
      }
      var O = n(4882),
        _ = n(30535),
        x = n(49311);
      function P(e) {
        let [t, n] = (0, i.useState)(null),
          [a] = (0, i.useState)(
            () =>
              new w({
                defaultOptions: {
                  mutations: {
                    onSettled: (e, t, n) => {
                      (0, C.L)(n, ["__contract"]) &&
                        (0, C.L)(n.__contract, ["address", "chain"]) &&
                        "string" == typeof n.__contract.address &&
                        (0, C.L)(e, ["transactionHash"]) &&
                        (0, C.L)(n, ["client", "chain"]) &&
                        (0, q.h)({
                          transactionHash: e.transactionHash,
                          client: n.client,
                          chain: n.chain,
                        })
                          .catch((e) => {
                            console.error("[Transaction Error]", e);
                          })
                          .then(() => {
                            var e, t, r;
                            return Promise.all([
                              a.invalidateQueries({
                                queryKey: [
                                  "readContract",
                                  null === (e = n.__contract) || void 0 === e
                                    ? void 0
                                    : e.chain.id,
                                  null === (t = n.__contract) || void 0 === t
                                    ? void 0
                                    : t.address,
                                ],
                              }),
                              (0, x.K)(
                                a,
                                null === (r = n.__contract) || void 0 === r
                                  ? void 0
                                  : r.chain.id
                              ),
                            ]);
                          });
                    },
                  },
                  queries: { staleTime: 6e4, structuralSharing: k },
                },
              })
          );
        return (0, r.jsx)(_.zn.Provider, {
          value: e.manager,
          children: (0, r.jsxs)(v.aH, {
            client: a,
            children: [
              (0, r.jsx)(O.E.Provider, { value: n, children: e.children }),
              t,
            ],
          }),
        });
      }
      function Q(e) {
        let t = (0, i.useMemo)(
          () => e.connectionManager || (0, s.fq)(a.x),
          [e.connectionManager]
        );
        return (0, r.jsx)(P, { manager: t, children: e.children });
      }
    },
    83204: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return "object" == typeof e && null !== e && t.every((t) => t in e);
      }
    },
  },
]);
