(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [79831],
  {
    12153: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 95878));
    },
    95878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return K;
          },
        });
      var a = n(90132),
        s = n(55881),
        i = n(52790),
        r = n(44861),
        l = n(48160),
        d = n(9117),
        o = n(63675),
        u = n(87711),
        c = n(1672),
        p = n(85929),
        m = n.n(p),
        x = n(13114),
        f = n.n(x),
        y = n(14887),
        h = n(76549),
        v = n(1155),
        b = n(71534),
        g = n(96465),
        w = n(55345);
      let N = (0, n(75674).U)((e, t) => ({
        amount: "",
        loading: !1,
        exchangeRate: "0",
        vestCount: "0",
        totalSupply: "0",
        userBalance: "0",
        userAllowance: "0",
        setAmount: (t) => e({ amount: t }),
        setLoading: (t) => e({ loading: t }),
        setExchangeRate: (t) => e({ exchangeRate: t }),
        setVestCount: (t) => e({ vestCount: t }),
        setTotalSupply: (t) => e({ totalSupply: t }),
        setUserBalance: (t) => e({ userBalance: t }),
        setUserAllowance: (t) => e({ userAllowance: t }),
        fetchPublicContractData: async (t) => {
          try {
            let [n, a] = await Promise.all([
              t.getExchangeRate(),
              t.getTotalSupply(),
            ]);
            e({ exchangeRate: (0, g.d)(n), totalSupply: (0, g.d)(a) });
          } catch (e) {
            console.error("Error fetching public contract data:", e);
          }
        },
        fetchContractData: async (t, n, a) => {
          if (n)
            try {
              let [t, s, i, r, l] = await Promise.all([
                a.getExchangeRate(),
                a.getVestCount(n),
                a.getTotalSupply(),
                a.getBalanceOf(n),
                a.getAllowance(n),
              ]);
              e({
                exchangeRate: (0, g.d)(t),
                vestCount: (0, g.d)(s),
                totalSupply: (0, g.d)(i),
                userBalance: (0, g.d)(r),
                userAllowance: (0, g.d)(l),
              });
            } catch (e) {
              console.error("Error fetching contract data:", e);
            }
        },
        handleApprove: async (t) => {
          e({ loading: !0 });
          try {
            await t.approve();
          } catch (e) {
            console.error("Approving failed:", e);
          }
          e({ loading: !1 });
        },
        handleStake: async (t, n) => {
          if (t) {
            e({ loading: !0 });
            try {
              await n.lock((0, w.f)(t)), e({ amount: "" });
            } catch (e) {
              console.error("Staking failed:", e);
            }
            e({ loading: !1 });
          }
        },
        handleUnstake: async (t, n) => {
          if (t) {
            e({ loading: !0 });
            try {
              await n.vest((0, w.f)(t)), e({ amount: "" });
            } catch (e) {
              console.error("Unstaking failed:", e);
            }
            e({ loading: !1 });
          }
        },
      }));
      var j = n(3238),
        T = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"heu_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[],"name":"StHEU__InsufficientBalance","type":"error"},{"inputs":[],"name":"StHEU__InvalidAmount","type":"error"},{"inputs":[],"name":"StHEU__InvalidHEUAddress","type":"error"},{"inputs":[],"name":"StHEU__MigrationModeActive","type":"error"},{"inputs":[],"name":"StHEU__RenounceOwnershipNotAllowed","type":"error"},{"inputs":[],"name":"StHEU__VestDoesNotExist","type":"error"},{"inputs":[],"name":"StHEU__VestNotFinished","type":"error"},{"inputs":[],"name":"StHEU__VestingNotAllowedInMigrationMode","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminCancelVest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stHeuAmount","type":"uint256"}],"name":"CancelVest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stHeuAmount","type":"uint256"}],"name":"Lock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"SetMigrationMode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPeriod","type":"uint256"}],"name":"SetVestPeriod","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"stHeuAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"underlyingAmount","type":"uint256"}],"name":"Slash","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stHeuAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"underlyingAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"VestStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"YieldAccumulated","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"accumulateYield","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"vestId","type":"uint256"}],"name":"adminCancelVest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vestId","type":"uint256"}],"name":"cancelVest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vestId","type":"uint256"}],"name":"claim","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"vestId","type":"uint256"}],"name":"claimableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"heu","outputs":[{"internalType":"contract IHEU","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setMigrationMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPeriod","type":"uint256"}],"name":"setVestPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"stHeuAmount","type":"uint256"}],"name":"slash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stHeuAmount","type":"uint256"}],"name":"vest","outputs":[{"internalType":"uint256","name":"vestId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vestCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"vestInfo","outputs":[{"internalType":"uint256","name":"underlyingOwed","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"uint256","name":"ratioAtVest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
        );
      function E(e, t) {
        let { address: n } = (0, d.m)(),
          a = (0, h.v)({
            chain: r.u,
            transport: (0, v.d)(
              "https://lb.drpc.org/ogrpc?network=base&dkey=AhbocRMs9UF1oHbgW1jbkknZdXcOCBMR8I8tssvAG40d"
            ),
          }),
          { data: i } = (0, b.p)(),
          l = (function (e) {
            let {
                contractAddress: t,
                heuTokenAddress: n,
                publicClient: a,
                walletClient: s,
              } = e,
              i = async (e, n) => {
                if (!a) throw Error("No public client found");
                let s = await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "vestInfo",
                  args: [e, n],
                });
                return { underlyingOwed: s[0], end: s[1], ratioAtVest: s[2] };
              },
              r = async (e, n) => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "claimableAmount",
                  args: [e, n],
                });
              },
              l = async (e) => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "vestCount",
                  args: [e],
                });
              },
              d = async (e) => {
                if (!a) throw Error("No public client found");
                let t = await l(e),
                  n = [];
                for (let a = 0; a < t; a++) {
                  let t = await i(e, BigInt(a)),
                    s = await r(e, BigInt(a));
                  n.push({ ...t, claimableAmount: s });
                }
                return n;
              },
              o = async (e) => {
                if (!s || !a) throw Error("No wallet client found");
                try {
                  var n, r;
                  let l = await i(
                    null === (n = s.account) || void 0 === n
                      ? void 0
                      : n.address,
                    e
                  );
                  if (1e3 * Number(l.end) > Date.now())
                    throw Error("Vesting period not finished");
                  let { request: d } = await a.simulateContract({
                    address: t,
                    abi: T,
                    functionName: "claim",
                    args: [e],
                    account:
                      null === (r = s.account) || void 0 === r
                        ? void 0
                        : r.address,
                  });
                  return await s.writeContract(d);
                } catch (e) {
                  if (e.message.includes("StHEU__VestNotFinished"))
                    throw Error("Vesting period not finished");
                  throw (console.error("Error claiming vest:", e), e);
                }
              };
            return {
              getTotalSupply: async () => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "totalSupply",
                });
              },
              getExchangeRate: async () => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "exchangeRate",
                });
              },
              getBalanceOf: async (e) => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: t,
                  abi: T,
                  functionName: "balanceOf",
                  args: [e],
                });
              },
              getVestInfo: i,
              getClaimableAmount: r,
              getVestCount: l,
              getAllVestInfo: d,
              getAllowance: async (e) => {
                if (!a) throw Error("No public client found");
                return await a.readContract({
                  address: n,
                  abi: j.Wo,
                  functionName: "allowance",
                  args: [e, t],
                });
              },
              approve: async () => {
                var e, i;
                if (!s || !a) throw Error("No wallet client found");
                let r = await a.readContract({
                    address: n,
                    abi: j.Wo,
                    functionName: "balanceOf",
                    args: [
                      null === (e = s.account) || void 0 === e
                        ? void 0
                        : e.address,
                    ],
                  }),
                  { request: l } = await a.simulateContract({
                    address: n,
                    abi: j.Wo,
                    functionName: "approve",
                    args: [t, r],
                    account:
                      null === (i = s.account) || void 0 === i
                        ? void 0
                        : i.address,
                  });
                return await s.writeContract(l);
              },
              lock: async (e) => {
                var i, r, l, d;
                if (!s || !a) throw Error("No wallet client found");
                if (
                  (await a.readContract({
                    address: n,
                    abi: j.Wo,
                    functionName: "allowance",
                    args: [
                      null === (i = s.account) || void 0 === i
                        ? void 0
                        : i.address,
                      t,
                    ],
                  })) < e
                ) {
                  let e = await a.readContract({
                      address: n,
                      abi: j.Wo,
                      functionName: "balanceOf",
                      args: [
                        null === (l = s.account) || void 0 === l
                          ? void 0
                          : l.address,
                      ],
                    }),
                    { request: i } = await a.simulateContract({
                      address: n,
                      abi: j.Wo,
                      functionName: "approve",
                      args: [t, e],
                      account:
                        null === (d = s.account) || void 0 === d
                          ? void 0
                          : d.address,
                    }),
                    r = await s.writeContract(i);
                  if (
                    (await new Promise((e) => setTimeout(e, 2e3)),
                    "success" !==
                      (await a.waitForTransactionReceipt({ hash: r })).status)
                  )
                    throw Error("Approving failed");
                  await new Promise((e) => setTimeout(e, 2e3));
                }
                let { request: o } = await a.simulateContract({
                  address: t,
                  abi: T,
                  functionName: "lock",
                  args: [e],
                  account:
                    null === (r = s.account) || void 0 === r
                      ? void 0
                      : r.address,
                });
                return await s.writeContract(o);
              },
              vest: async (e) => {
                var n;
                if (!s || !a) throw Error("No wallet client found");
                let { request: i } = await a.simulateContract({
                  address: t,
                  abi: T,
                  functionName: "vest",
                  args: [e],
                  account:
                    null === (n = s.account) || void 0 === n
                      ? void 0
                      : n.address,
                });
                return await s.writeContract(i);
              },
              claim: o,
              cancelVest: async (e) => {
                var n;
                if (!s || !a) throw Error("No wallet client found");
                let { request: i } = await a.simulateContract({
                  address: t,
                  abi: T,
                  functionName: "cancelVest",
                  args: [e],
                  account:
                    null === (n = s.account) || void 0 === n
                      ? void 0
                      : n.address,
                });
                return await s.writeContract(i);
              },
            };
          })({
            contractAddress: e,
            heuTokenAddress: t,
            publicClient: a,
            walletClient: i,
          }),
          {
            amount: o,
            loading: u,
            exchangeRate: c,
            vestCount: p,
            userBalance: m,
            userAllowance: x,
            totalSupply: f,
            setAmount: y,
            fetchContractData: g,
            fetchPublicContractData: w,
            handleStake: E,
            handleUnstake: C,
            handleApprove: A,
          } = N();
        return (
          (0, s.useEffect)(() => {
            n && g(e, n, l);
          }, [n, e, E, C]),
          (0, s.useEffect)(() => {
            w(l);
          }, []),
          {
            amount: o,
            loading: u,
            exchangeRate: c,
            vestCount: p,
            userBalance: m,
            userAllowance: x,
            totalSupply: f,
            totalHEUStaked: f && c ? Number(f) * Number(c) : 0,
            setAmount: y,
            handleApprove: A,
            handleStake: () => {
              E(o, l), g(e, n, l);
            },
            handleUnstake: () => {
              C(o, l), g(e, n, l);
            },
            stHEU: l,
          }
        );
      }
      var C = n(85289),
        A = n(20049),
        _ = n(36608),
        I = n(78951),
        S = n(77413),
        k = n(89332);
      let U = y.J[r.u.id].stakingContractAddress,
        B = y.J[r.u.id].heuTokenAddress;
      function D(e) {
        var t;
        let { type: n, onChangeType: s } = e,
          { openConnectModal: i } = (0, u.We)(),
          { address: l } = (0, d.m)(),
          {
            amount: o,
            setAmount: p,
            loading: m,
            exchangeRate: x,
            handleStake: f,
            handleApprove: h,
            userAllowance: v,
            userBalance: b,
          } = E(U, B),
          { data: g } = (0, I.K)({
            address: l,
            token: y.J[r.u.id].heuTokenAddress,
            query: { enabled: !!l, gcTime: 6e4 },
          }),
          w = o ? (Number(o) / Number(x)).toFixed(6) : "0",
          N = (null == g ? void 0 : g.value)
            ? (0, _.b)(
                g.value,
                null !== (t = g.decimals) && void 0 !== t ? t : 18
              )
            : "0";
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col items-center mb:flex-row",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "custom-font-SFMono-medium text-center text-2xl font-bold text-white mb:text-left",
                      children: "Stake HEU",
                    }),
                    (0, a.jsx)("div", {
                      className: (0, C.cn)(
                        'mt-1.5 font-["Inter"] text-lg text-[#848484]'
                      ),
                      children: "Stake your HEU tokens on Base network",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-[18px] flex flex-1 justify-end mb:mt-0",
                  children: (0, a.jsx)(k.mQ, {
                    value: n,
                    onValueChange: (e) => {
                      s(e), p("0");
                    },
                    className: "w-[184px]",
                    children: (0, a.jsxs)(k.dr, {
                      className: "grid w-full grid-cols-2 bg-[#343434]",
                      children: [
                        (0, a.jsx)(k.SP, {
                          value: "stake",
                          className: "data-[state=active]:bg-[#CDF138]",
                          children: "Stake",
                        }),
                        (0, a.jsx)(k.SP, {
                          value: "unstake",
                          className: "data-[state=active]:bg-[#CDF138]",
                          children: "Unstake",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-7 rounded-md bg-black px-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center gap-2 text-lg font-medium text-white",
                      children: [
                        (0, a.jsx)(A.default, {
                          src: "/images/small_logo.png",
                          alt: "logo",
                          width: 30,
                          height: 30,
                        }),
                        "HEU",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative flex h-[90px] flex-1 items-center",
                      children: [
                        (0, a.jsx)(c.h3, {
                          className:
                            "w-full bg-transparent text-right text-[26px] font-bold leading-[42px] text-[#A6A0BB] outline-none",
                          value: o,
                          onValueChange: (e) => p(e.value),
                          placeholder: "0",
                          allowNegative: !1,
                          decimalScale: 18,
                          thousandSeparator: !0,
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute bottom-2 right-0 font-bold text-[#A6A0BB]",
                          children: (0, a.jsxs)("span", {
                            className:
                              "cursor-pointer text-[#CDF138] hover:opacity-80",
                            onClick: () => {
                              Number(N) - 1e-6 < 0
                                ? p("0")
                                : p((Number(N) - 1e-6).toString());
                            },
                            children: [
                              "Max: ",
                              " ",
                              (0, a.jsx)(c.h3, {
                                value: Number(N),
                                displayType: "text",
                                thousandSeparator: !0,
                                decimalScale: 2,
                                fixedDecimalScale: !0,
                                className: "font-bold text-[#A6A0BB]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "relative h-0.5 bg-[#181818]",
                  children: (0, a.jsx)("div", {
                    className:
                      "absolute -top-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#1c1924] transition-colors hover:bg-[#1c1924]/90",
                    children: (0, a.jsx)(A.default, {
                      className: "mr-0.5 mt-1",
                      src: "/images/arrow-down.png",
                      alt: "switch",
                      width: 24,
                      height: 24,
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center gap-2 text-lg font-medium text-white",
                      children: [
                        (0, a.jsx)(A.default, {
                          src: "/images/small_logo_active.png",
                          alt: "logo",
                          width: 30,
                          height: 30,
                        }),
                        "stHEU",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative flex h-[90px] flex-1 items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "w-full text-right text-[26px] font-bold leading-[42px] text-[#A6A0BB]",
                          children: w,
                        }),
                        " ",
                        (0, a.jsx)("div", {
                          className:
                            "absolute bottom-2 right-0 font-bold text-[#A6A0BB]",
                          children: (0, a.jsxs)("span", {
                            className:
                              "cursor-pointer text-[#CDF138] hover:opacity-80",
                            children: [
                              "Balance: ",
                              (0, a.jsx)(c.h3, {
                                value: Number(b),
                                displayType: "text",
                                thousandSeparator: !0,
                                decimalScale: 2,
                                fixedDecimalScale: !0,
                                className: "font-bold text-[#A6A0BB]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "mt-4 rounded-md bg-black py-4 pl-6 text-sm font-medium text-white",
              children: "Stake HEU into stHEU to earn staking yields.",
            }),
            (0, a.jsx)("div", {
              children: l
                ? (0, a.jsx)(S.z, {
                    onClick: f,
                    disabled: m || !o || 0 >= Number(o),
                    className: (0, C.cn)(
                      'mt-4 h-12 w-full rounded-full bg-[#CDF138] font-["Inter"] text-base font-semibold text-black hover:bg-[#CDF138]/90'
                    ),
                    children: m ? "Staking..." : "Stake",
                  })
                : (0, a.jsx)(S.z, {
                    className: (0, C.cn)(
                      'mt-4 h-12 w-full rounded-full bg-white font-["Inter"] text-base font-semibold text-black hover:bg-white/90'
                    ),
                    onClick: i,
                    children: "Connect Wallet",
                  }),
            }),
          ],
        });
      }
      var R = n(34607);
      let M = (e) => {
          let { vestingInfo: t, onClaim: n, onCancel: s } = e,
            i = (e) => new Date(1e3 * Number(e)).toLocaleDateString(),
            r = (e) => 1e3 * Number(e) <= Date.now(),
            l = (e, t) => {
              if (!r(t)) {
                R.Am.error("Vesting period not finished yet");
                return;
              }
              n(e);
            };
          return (0, a.jsx)("div", {
            className: "overflow-x-auto rounded-lg bg-black",
            children: (0, a.jsxs)("table", {
              className: "min-w-full",
              children: [
                (0, a.jsx)("thead", {
                  className: "border-b border-[#343434]",
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "ID",
                      }),
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "Amount (HEU)",
                      }),
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "Ratio",
                      }),
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "Claimable Amount (HEU)",
                      }),
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "End Date",
                      }),
                      (0, a.jsx)("th", {
                        className:
                          "px-6 py-4 text-left text-sm font-medium text-[#848484]",
                        children: "Actions",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("tbody", {
                  className: "divide-y divide-[#343434]",
                  children: t.map((e, t) =>
                    (0, a.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, a.jsx)("td", {
                            className:
                              "whitespace-nowrap px-6 py-4 text-sm text-white",
                            children: t,
                          }),
                          (0, a.jsx)("td", {
                            className:
                              "whitespace-nowrap px-6 py-4 text-sm text-white",
                            children: (0, g.d)(e.underlyingOwed),
                          }),
                          (0, a.jsx)("td", {
                            className:
                              "whitespace-nowrap px-6 py-4 text-sm text-white",
                            children: (0, g.d)(e.ratioAtVest),
                          }),
                          (0, a.jsx)("td", {
                            className:
                              "whitespace-nowrap px-6 py-4 text-sm text-white",
                            children: (0, g.d)(e.claimableAmount),
                          }),
                          (0, a.jsx)("td", {
                            className:
                              "whitespace-nowrap px-6 py-4 text-sm text-white",
                            children: i(e.end),
                          }),
                          (0, a.jsxs)("td", {
                            className: "whitespace-nowrap px-6 py-4 text-sm",
                            children: [
                              (0, a.jsx)(S.z, {
                                onClick: () => l(t, e.end),
                                disabled: !r(e.end),
                                className: (0, C.cn)(
                                  "mr-4 h-8 rounded-full px-4 text-sm font-medium",
                                  r(e.end)
                                    ? "bg-[#CDF138] text-black hover:bg-[#CDF138]/90"
                                    : "cursor-not-allowed bg-gray-600 text-gray-400"
                                ),
                                children: r(e.end) ? "Claim" : "Not Claimable",
                              }),
                              (0, a.jsx)(S.z, {
                                onClick: () => s(t),
                                className:
                                  "h-8 rounded-full bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700",
                                children: "Cancel Vesting",
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          });
        },
        H = y.J[r.u.id].stakingContractAddress,
        P = y.J[r.u.id].heuTokenAddress;
      function L(e) {
        var t;
        let { type: n, onChangeType: i } = e,
          { openConnectModal: r } = (0, u.We)(),
          { address: l } = (0, d.m)(),
          {
            amount: o,
            setAmount: p,
            loading: m,
            exchangeRate: x,
            handleUnstake: f,
            stHEU: y,
          } = E(H, P),
          { data: h } = (0, I.K)({ address: l, token: H }),
          v = o ? (Number(o) * Number(x)).toFixed(6) : "0",
          b = (null == h ? void 0 : h.value)
            ? (0, _.b)(
                h.value,
                null !== (t = h.decimals) && void 0 !== t ? t : 18
              )
            : "0",
          [g, w] = (0, s.useState)([]),
          [N, j] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          (async () => {
            if (l && y)
              try {
                j(!0);
                let e = await y.getAllVestInfo(l);
                w(e);
              } catch (e) {
                console.error("Error fetching vesting info:", e);
              } finally {
                j(!1);
              }
          })();
        }, [l]);
        let T = async (e) => {
            if (y)
              try {
                await y.claim(BigInt(e));
                let t = await y.getAllVestInfo(l);
                w(t), R.Am.success("Successfully claimed vested tokens");
              } catch (e) {
                "Vesting period not finished" === e.message
                  ? R.Am.error("Vesting period not finished yet")
                  : (R.Am.error("Failed to claim vested tokens"),
                    console.error("Error claiming vest:", e));
              }
          },
          U = async (e) => {
            if (y)
              try {
                await y.cancelVest(BigInt(e));
                let t = await y.getAllVestInfo(l);
                w(t);
              } catch (e) {
                console.error("Error canceling vest:", e);
              }
          };
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col items-center mb:flex-row",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "custom-font-SFMono-medium text-center text-2xl font-bold text-white mb:text-left",
                      children: "Unstake stHEU",
                    }),
                    (0, a.jsx)("div", {
                      className: (0, C.cn)(
                        'mt-1.5 font-["Inter"] text-lg text-[#848484]'
                      ),
                      children: "Unstake and vest stHEU to receive HEU tokens.",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-[18px] flex flex-1 justify-end mb:mt-0",
                  children: (0, a.jsx)(k.mQ, {
                    value: n,
                    onValueChange: (e) => i(e),
                    className: "w-[184px]",
                    children: (0, a.jsxs)(k.dr, {
                      className: "grid w-full grid-cols-2 bg-[#343434]",
                      children: [
                        (0, a.jsx)(k.SP, {
                          value: "stake",
                          className: "data-[state=active]:bg-[#CDF138]",
                          children: "Stake",
                        }),
                        (0, a.jsx)(k.SP, {
                          value: "unstake",
                          className: "data-[state=active]:bg-[#CDF138]",
                          children: "Unstake",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-7 rounded-md bg-black px-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center gap-2 text-lg font-medium text-white",
                      children: [
                        (0, a.jsx)(A.default, {
                          src: "/images/small_logo_active.png",
                          alt: "logo",
                          width: 30,
                          height: 30,
                        }),
                        "stHEU",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative flex h-[90px] flex-1 items-center",
                      children: [
                        (0, a.jsx)("input", {
                          type: "text",
                          className:
                            "w-full bg-transparent text-right text-[26px] font-bold leading-[42px] text-[#A6A0BB] outline-none",
                          value: o,
                          onChange: (e) => p(e.target.value),
                          placeholder: "0",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute bottom-2 right-0 font-bold text-[#A6A0BB]",
                          children: (0, a.jsxs)("span", {
                            className:
                              "cursor-pointer text-[#CDF138] hover:opacity-80",
                            onClick: () => {
                              Number(b) - 1e-6 < 0
                                ? p("0")
                                : p((Number(b) - 1e-6).toString());
                            },
                            children: [
                              "Max: ",
                              " ",
                              (0, a.jsx)(c.h3, {
                                value: Number(b),
                                displayType: "text",
                                thousandSeparator: !0,
                                decimalScale: 2,
                                fixedDecimalScale: !0,
                                className: "font-bold text-[#A6A0BB]",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "relative h-0.5 bg-[#181818]",
                  children: (0, a.jsx)("div", {
                    className:
                      "absolute -top-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#1c1924] transition-colors hover:bg-[#1c1924]/90",
                    children: (0, a.jsx)(A.default, {
                      className: "mr-0.5 mt-1",
                      src: "/images/arrow-down.png",
                      alt: "switch",
                      width: 24,
                      height: 24,
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center gap-2 text-lg font-medium text-white",
                      children: [
                        (0, a.jsx)(A.default, {
                          src: "/images/small_logo.png",
                          alt: "logo",
                          width: 30,
                          height: 30,
                        }),
                        "HEU",
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "relative flex h-[90px] flex-1 items-center",
                      children: (0, a.jsx)("div", {
                        className:
                          "w-full text-right text-[26px] font-bold leading-[42px] text-[#A6A0BB]",
                        children: v,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "mt-4 rounded-md bg-black py-4 pl-6 text-sm font-medium text-white",
              children:
                "Unstake your stHEU to receive HEU tokens. 30-day vesting period applies. You will stop earning yields after unstaking.",
            }),
            (0, a.jsx)("div", {
              children: l
                ? (0, a.jsx)(S.z, {
                    onClick: f,
                    disabled:
                      m || !o || 0 >= Number(o) || Number(o) > Number(b),
                    className: (0, C.cn)(
                      'mt-4 h-12 w-full rounded-full bg-[#CDF138] font-["Inter"] text-base font-semibold text-black hover:bg-[#CDF138]/90'
                    ),
                    children: m ? "Unstaking..." : "Unstake",
                  })
                : (0, a.jsx)(S.z, {
                    className: (0, C.cn)(
                      'mt-4 h-12 w-full rounded-full bg-white font-["Inter"] text-base font-semibold text-black hover:bg-white/90'
                    ),
                    onClick: r,
                    children: "Connect Wallet",
                  }),
            }),
            N
              ? (0, a.jsx)("div", {
                  className: "text-center text-white",
                  children: "Loading vesting information...",
                })
              : g.length
              ? (0, a.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "mb-4 text-xl font-bold text-white",
                      children: "Your Vesting Positions",
                    }),
                    (0, a.jsx)(M, { vestingInfo: g, onClaim: T, onCancel: U }),
                  ],
                })
              : (0, a.jsx)("div", {
                  className: "my-4 text-center text-white",
                  children: "No vesting positions found",
                }),
          ],
        });
      }
      let F = y.J[r.u.id].stakingContractAddress,
        V = y.J[r.u.id].heuTokenAddress;
      function O(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          ...e,
          children: (0, a.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, a.jsx)("path", {
                d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z",
              }),
              (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12",
                opacity: ".1",
              }),
              (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M12 4.5a7.46 7.46 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.46 10.46 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3",
              }),
            ],
          }),
        });
      }
      function z() {
        let [e, t] = (0, s.useState)("stake"),
          {
            totalHEUStaked: n,
            exchangeRate: i,
            totalSupply: r,
            userBalance: l,
          } = E(F, V),
          [d, o] = (0, s.useState)(!1),
          [u, p] = (0, s.useState)(null),
          x = async () => {
            o(!0),
              fetch(
                "https://2gwc7dkyad.execute-api.us-east-1.amazonaws.com/prod/staking_stats?requestType=current_apr"
              )
                .then((e) => e.json())
                .then((e) => {
                  console.log(
                    e.nextDistributionTimestamp,
                    "nextDistributionTimestamp"
                  ),
                    p(e);
                })
                .finally(() => {
                  setTimeout(() => {
                    o(!1);
                  }, 1e3);
                });
          };
        return (
          (0, s.useEffect)(() => {
            x();
          }, []),
          (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "mt-6 grid grid-cols-1 gap-5 mb:grid-cols-2 lg:grid-cols-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "rounded-md bg-[#161616] pb-7 pl-8 pt-6",
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, C.cn)(
                          'font-["Inter"] text-[14px] font-semibold leading-[17.5px] text-[#848484]'
                        ),
                        children: "Total Staked",
                      }),
                      (0, a.jsx)("div", {
                        className: (0, C.cn)(
                          'mt-3 font-["Inter"] text-[24px] font-semibold leading-[29px] text-white'
                        ),
                        children: "".concat(
                          n.toLocaleString(void 0, {
                            maximumFractionDigits: 0,
                          }),
                          " HEU"
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "rounded-md bg-[#161616] pb-7 pl-8 pt-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, C.cn)(
                          'flex items-center gap-2 font-["Inter"] text-[14px] font-semibold leading-[17.5px] text-[#848484]'
                        ),
                        children: [
                          "Next Revenue Distribution",
                          !!(null == u
                            ? void 0
                            : u.nextDistributionTimestamp) &&
                            (0, a.jsxs)("div", {
                              className: "group relative",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-[#848484] text-xs",
                                  children: "ⓘ",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-[#242424] p-2 text-sm text-white shadow-lg group-hover:block",
                                  children:
                                    1e3 * u.nextDistributionTimestamp <
                                    Date.now()
                                      ? "in 0 days"
                                      : m()().to(
                                          new Date(
                                            1e3 * u.nextDistributionTimestamp
                                          )
                                        ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      d || !u
                        ? (0, a.jsx)("div", {
                            className: (0, C.cn)(
                              'mt-3 font-["Inter"] text-[24px] font-semibold leading-[29px] text-white'
                            ),
                            children: (0, a.jsx)(O, {
                              className: "animate-spin",
                            }),
                          })
                        : (0, a.jsx)("div", {
                            className: (0, C.cn)(
                              'mt-3 font-["Inter"] text-[24px] font-semibold leading-[29px] text-white'
                            ),
                            children:
                              (null == u ? void 0 : u.currentRevenueBalance) !==
                              void 0
                                ? "".concat(
                                    Intl.NumberFormat("en-US", {
                                      currency: "USD",
                                      maximumFractionDigits: 0,
                                    }).format(u.currentRevenueBalance),
                                    " HEU"
                                  )
                                : "",
                          }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "rounded-md bg-[#161616] pb-7 pl-8 pt-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, C.cn)(
                          'flex items-center gap-2 font-["Inter"] text-[14px] font-semibold leading-[17.5px] text-[#848484]'
                        ),
                        children: [
                          "Estimated stHEU APR",
                          (0, a.jsxs)("div", {
                            className: "group relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-[#848484] text-xs",
                                children: "ⓘ",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-[#242424] p-2 text-sm text-white shadow-lg group-hover:block",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "mb-2",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "text-base",
                                        children: "Base APR",
                                      }),
                                      (0, a.jsx)("div", {
                                        children:
                                          (null == u ? void 0 : u.baseApr) !==
                                          void 0
                                            ? "".concat(u.baseApr, "%")
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "text-base",
                                        children: "Revenue Share APR",
                                      }),
                                      (0, a.jsx)("div", {
                                        children:
                                          (null == u
                                            ? void 0
                                            : u.revenueShareApr) !== void 0
                                            ? "".concat(u.revenueShareApr, "%")
                                            : "",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: (0, C.cn)(
                          'mt-3 font-["Inter"] text-[24px] font-semibold leading-[29px] text-white'
                        ),
                        children:
                          (null == u ? void 0 : u.baseApr) !== void 0 &&
                          void 0 !== u.revenueShareApr
                            ? "".concat(
                                (u.baseApr + u.revenueShareApr).toFixed(2),
                                "%"
                              )
                            : "",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "rounded-md bg-[#161616] pb-7 pl-8 pt-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, C.cn)(
                          'flex items-center gap-2 font-["Inter"] text-[14px] font-semibold leading-[17.5px] text-[#848484]'
                        ),
                        children: [
                          "HEU per stHEU",
                          (0, a.jsxs)("div", {
                            className: "group relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-[#848484] text-xs",
                                children: "ⓘ",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-[#242424] p-2 text-sm text-white shadow-lg group-hover:block",
                                children:
                                  "The exchange rate between stHEU and HEU increases as rewards accumulate. The rewards are auto-compounding.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: (0, C.cn)(
                          'mt-3 font-["Inter"] text-[24px] font-semibold leading-[29px] text-white'
                        ),
                        children: Number(i).toFixed(4),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", { className: "my-6 h-[1px] bg-[#343434]" }),
              (0, a.jsxs)("div", {
                className: "flex flex-col lg:flex-row lg:gap-2",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "relative flex-1 rounded-md rounded-b-none bg-[#161616] p-10 lg:rounded-b-md",
                    children:
                      "stake" === e
                        ? (0, a.jsx)(D, { type: e, onChangeType: t })
                        : (0, a.jsx)(L, { type: e, onChangeType: t }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "rounded-md rounded-t-none bg-[#161616] px-10 pb-10 pt-0 mb:pt-10 lg:rounded-t-md",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "custom-font-SFMono-medium text-2xl font-bold text-white",
                        children: "Current Stake",
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-8 flex flex-col gap-8",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-sm font-semibold text-[#848484]'
                                ),
                                children: "Your staked amount",
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-lg font-semibold text-white'
                                ),
                                children: [
                                  (0, a.jsx)(c.h3, {
                                    value: Number(l) * Number(i),
                                    displayType: "text",
                                    thousandSeparator: !0,
                                    decimalScale: 2,
                                    fixedDecimalScale: !0,
                                    suffix: " HEU ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-[#848484]",
                                    children: "(",
                                  }),
                                  (0, a.jsx)(c.h3, {
                                    value: Number(l),
                                    displayType: "text",
                                    thousandSeparator: !0,
                                    decimalScale: 2,
                                    fixedDecimalScale: !0,
                                    suffix: " stHEU",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-[#848484]",
                                    children: ")",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-sm font-semibold text-[#848484]'
                                ),
                                children: "Your share of the pool",
                              }),
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-lg font-semibold text-white'
                                ),
                                children: (0, a.jsx)(c.h3, {
                                  value: (Number(l) / Number(r)) * 100 || 0,
                                  displayType: "text",
                                  thousandSeparator: !0,
                                  decimalScale: 4,
                                  fixedDecimalScale: !0,
                                  suffix: "%",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-sm font-semibold text-[#848484]'
                                ),
                                children: "Estimated Daily Rewards",
                              }),
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-lg font-semibold text-white'
                                ),
                                children: (0, a.jsx)(c.h3, {
                                  value: (0.5 * Number(l)) / 365 || 0,
                                  displayType: "text",
                                  thousandSeparator: !0,
                                  decimalScale: 4,
                                  fixedDecimalScale: !0,
                                  prefix: "+",
                                  suffix: " HEU",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("div", {
                                className: (0, C.cn)(
                                  'font-["Inter"] text-sm font-semibold text-[#848484]'
                                ),
                                children: "Help",
                              }),
                              (0, a.jsx)("a", {
                                href: "https://docs.heurist.ai/protocol-overview/stake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (0, C.cn)(
                                  'font-["Inter"] text-lg font-semibold text-[#CDF138] underline-offset-8 hover:underline'
                                ),
                                children: "Go to Docs",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function W() {
        let [e, t] = (0, s.useState)("Base"),
          n = (0, d.m)(),
          { switchChain: i } = (0, o.o)();
        return (
          (0, s.useEffect)(() => {
            e && i({ chainId: "Base" === e ? r.u.id : l.j.id });
          }, [e, n.chain]),
          (0, a.jsx)("div", {
            className: "flex min-h-screen items-center justify-center p-[2rem]",
            children: (0, a.jsxs)("div", {
              className: "w-full pt-9",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-between gap-[18px] pb-8 mb:flex-row mb:gap-0",
                  style: { borderBottom: "1px solid #343434" },
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "custom-font-SFMono-medium text-center text-[28px] font-semibold leading-[36px] text-white",
                      children: "Earn Rewards with HEU Staking",
                    }),
                    (0, a.jsx)(u.NL, {}),
                  ],
                }),
                "Base" === e && (0, a.jsx)(z, {}),
              ],
            }),
          })
        );
      }
      m().extend(f());
      var Y = n(52513),
        J = n(10681);
      function K() {
        let { isMobile: e, setIsMobile: t } = (0, s.useContext)(Y.h),
          n = (e) => {
            e < 840 ? t(!0) : t(!1);
          };
        return (
          (0, s.useEffect)(() => {
            (async () => {
              let e = window.navigator.userAgent || "";
              t((0, J.b)(e));
            })();
          }, []),
          (0, s.useEffect)(() => {
            let e = () => {
              n(document.documentElement.clientWidth);
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, s.useEffect)(() => {
            n(document.documentElement.clientWidth);
          }, [e]),
          (0, a.jsx)("div", {
            className: "bg-black",
            children: (0, a.jsx)(i.Providers, { children: (0, a.jsx)(W, {}) }),
          })
        );
      }
    },
    52790: function (e, t, n) {
      "use strict";
      n.d(t, {
        Providers: function () {
          return N;
        },
      });
      var a = n(90132),
        s = n(70157),
        i = n(42453),
        r = n(77153),
        l = n(80817),
        d = n(48160),
        o = n(44861),
        u = n(96899),
        c = n(87498);
      n(32848);
      var p = n(87711),
        m = n(16924),
        x = n(73890),
        f = n(97655),
        y = n(71395),
        h = n(91603),
        v = n(42048),
        b = n(13321);
      let g = (0, p.vX)({
          appName: "Imagine",
          projectId: c.O.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          wallets: [
            { groupName: "Suggested", wallets: [x.P, f.R, y.b, h.b, v.u, b.D] },
          ],
          chains: [d.j, o.u],
          ssr: !0,
        }),
        w = new s.S();
      function N(e) {
        let { children: t } = e;
        return (0, a.jsx)(r.w, {
          children: (0, a.jsx)(l.F, {
            config: g,
            children: (0, a.jsx)(i.aH, {
              client: w,
              children: (0, a.jsx)(p.pj, {
                theme: (0, m.$)({
                  accentColor: "#fff",
                  accentColorForeground: "#000",
                }),
                children: (0, a.jsx)(u.H, { children: t }),
              }),
            }),
          }),
        });
      }
    },
    77413: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var a = n(90132),
        s = n(55881),
        i = n(6309),
        r = n(93179),
        l = n(85289);
      let d = (0, r.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        o = s.forwardRef((e, t) => {
          let { className: n, variant: s, size: r, asChild: o = !1, ...u } = e,
            c = o ? i.g7 : "button";
          return (0, a.jsx)(c, {
            className: (0, l.cn)(d({ variant: s, size: r, className: n })),
            ref: t,
            ...u,
          });
        });
      o.displayName = "Button";
    },
    89332: function (e, t, n) {
      "use strict";
      n.d(t, {
        SP: function () {
          return o;
        },
        dr: function () {
          return d;
        },
        mQ: function () {
          return l;
        },
      });
      var a = n(90132),
        s = n(39402),
        i = n(55881),
        r = n(85289);
      let l = s.fC,
        d = i.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, a.jsx)(s.aV, {
            ref: t,
            className: (0, r.cn)(
              "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
              n
            ),
            ...i,
          });
        });
      d.displayName = s.aV.displayName;
      let o = i.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, a.jsx)(s.xz, {
          ref: t,
          className: (0, r.cn)(
            "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
            n
          ),
          ...i,
        });
      });
      (o.displayName = s.xz.displayName),
        (i.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, a.jsx)(s.VY, {
            ref: t,
            className: (0, r.cn)(
              "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              n
            ),
            ...i,
          });
        }).displayName = s.VY.displayName);
    },
    14887: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return i;
        },
      });
      var a = n(44861),
        s = n(48160);
      let i = {
        [a.u.id]: {
          chestRewardsAddress: "0x8342963d97F470bbfDA76C70baB118fa769ba223",
          stakingContractAddress: "0xfa13536bc4181db19fe93da82115f43f5c95761c",
          heuTokenAddress: "0xEF22cb48B8483dF6152e1423b19dF5553BbD818b",
        },
        [s.j.id]: {
          chestRewardsAddress: "0xA2C79d08Bb1Ac896eEAb1eB3Cae1c19bdB25d2ff",
          stakingContractAddress: "0x0000000000000000000000000000000000000000",
          heuTokenAddress: "0xAbEc5eCBe08b6c02F5c9A2fF82696e1E7dB6f9bf",
        },
      };
    },
    96899: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return r;
        },
        a: function () {
          return l;
        },
      });
      var a = n(90132),
        s = n(55881);
      let i = (0, s.createContext)(void 0);
      function r(e) {
        let { children: t } = e,
          [n, r] = (0, s.useState)(!1),
          [l, d] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            d(!1);
          }, []),
          (0, a.jsx)(i.Provider, {
            value: { isAuthenticated: n, setIsAuthenticated: r, isLoading: l },
            children: !l && t,
          })
        );
      }
      function l() {
        let e = (0, s.useContext)(i);
        if (void 0 === e)
          throw Error("useAuth must be used within an AuthProvider");
        return e;
      }
    },
    52513: function (e, t, n) {
      "use strict";
      n.d(t, {
        CommonProvider: function () {
          return r;
        },
        h: function () {
          return i;
        },
      });
      var a = n(90132),
        s = n(55881);
      let i = (0, s.createContext)({
          showNav: !1,
          setShowNav: () => {},
          isMobile: !1,
          setIsMobile: () => {},
          address: "",
          setAddress: () => {},
          mineData: { loaded: !1, totalLlamaPoints: 0, totalWaifuPoints: 0 },
          setMineData: () => {},
        }),
        r = (e) => {
          let { children: t } = e,
            [n, r] = (0, s.useState)(!1),
            [l, d] = (0, s.useState)(!1),
            [o, u] = (0, s.useState)({});
          return (0, a.jsx)(i.Provider, {
            value: {
              showNav: n,
              setShowNav: r,
              isMobile: l,
              setIsMobile: d,
              mineData: o,
              setMineData: u,
            },
            children: t,
          });
        };
    },
    10681: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return a;
        },
      });
      let a = (e) => /Mobi|Android/i.test(e);
    },
    32848: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var a = n(33643),
        s = n(87498);
      let i = n(89445).env.THIRDWEB_SECRET_KEY,
        r = s.O.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
        l = (0, a.P)({ clientId: r });
      (0, a.P)(i ? { secretKey: i } : { clientId: r });
    },
    85289: function (e, t, n) {
      "use strict";
      n.d(t, {
        cn: function () {
          return i;
        },
      });
      var a = n(53156),
        s = n(65221);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, s.m6)((0, a.W)(t));
      }
      n(87498);
    },
    87498: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return r;
        },
      });
      var a = n(18728),
        s = n(36971),
        i = n(89445);
      let r = (0, s.D)({
        server: {
          UMAMI_URL: a.z.string().optional(),
          UMAMI_WEBSITE_ID: a.z.string().optional(),
          CREDITS_BACKEND_URL: a.z.string().min(1),
          API_AUTH_KEY: a.z.string().min(1),
          ZYFI_API_KEY: a.z.string().min(1),
          THIRDWEB_SECRET_KEY: a.z.string().min(1),
          THIRDWEB_AUTH_PRIVATE_KEY: a.z.string().min(1),
          MAILJET_API_KEY: a.z.string().optional(),
          MAILJET_SECRET_KEY: a.z.string().optional(),
          MAILJET_LIST_ID: a.z.string().optional(),
          MAILJET_ADDITIONAL_LIST_ID: a.z.string().optional(),
        },
        client: {
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: a.z.string().min(1),
          NEXT_PUBLIC_THIRDWEB_CLIENT_ID: a.z.string().min(1),
          NEXT_PUBLIC_NFT_CONTRACT_ADDRESS: a.z.string().min(1),
          NEXT_PUBLIC_VERCEL_ENV: a.z
            .enum(["development", "preview", "production"])
            .optional(),
          NEXT_PUBLIC_VERCEL_URL: a.z.string().optional(),
        },
        experimental__runtimeEnv: {
          NEXT_PUBLIC_NFT_CONTRACT_ADDRESS:
            "0x781Af15005cAa72EDfa115E46C95a736923632BB",
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
            "7a21b8a252e1b5019f5228578eb9f44e",
          NEXT_PUBLIC_THIRDWEB_CLIENT_ID: "6bfe1ae124fa7ec8cb8a7bdc5a697448",
          NEXT_PUBLIC_VERCEL_ENV: "production",
          NEXT_PUBLIC_VERCEL_URL:
            "heurist-frontend-qgul4icm7-heurist-9f97aa7b.vercel.app",
          CREDITS_BACKEND_URL: i.env.CREDITS_BACKEND_URL,
          API_AUTH_KEY: i.env.API_AUTH_KEY,
          ZYFI_API_KEY: i.env.ZYFI_API_KEY,
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        33076, 20049, 88212, 65221, 15741, 7408, 78658, 43829, 51848, 79873,
        37710, 13541, 59062, 34034, 1744,
      ],
      function () {
        return e((e.s = 12153));
      }
    ),
      (_N_E = e.O());
  },
]);
