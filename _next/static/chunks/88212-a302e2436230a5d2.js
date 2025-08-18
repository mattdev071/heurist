(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [88212],
  {
    89445: function (e, t, r) {
      "use strict";
      var a, n;
      e.exports =
        (null == (a = r.g.process) ? void 0 : a.env) &&
        "object" == typeof (null == (n = r.g.process) ? void 0 : n.env)
          ? r.g.process
          : r(61345);
    },
    61345: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                a,
                n = (e.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function d(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  r = i;
                }
              })();
              var o = [],
                u = !1,
                l = -1;
              function c() {
                u &&
                  a &&
                  ((u = !1),
                  a.length ? (o = a.concat(o)) : (l = -1),
                  o.length && h());
              }
              function h() {
                if (!u) {
                  var e = d(c);
                  u = !0;
                  for (var t = o.length; t; ) {
                    for (a = o, o = []; ++l < t; ) a && a[l].run();
                    (l = -1), (t = o.length);
                  }
                  (a = null),
                    (u = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === i || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (n.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                o.push(new p(e, t)), 1 !== o.length || u || d(h);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = m),
                (n.addListener = m),
                (n.once = m),
                (n.off = m),
                (n.removeListener = m),
                (n.removeAllListeners = m),
                (n.emit = m),
                (n.prependListener = m),
                (n.prependOnceListener = m),
                (n.listeners = function (e) {
                  return [];
                }),
                (n.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                  return "/";
                }),
                (n.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function a(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var s = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e](s, s.exports, a), (i = !1);
          } finally {
            i && delete r[e];
          }
          return s.exports;
        }
        a.ab = "//";
        var n = a(229);
        e.exports = n;
      })();
    },
    36971: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return i;
        },
      });
      var a = r(18728),
        n = r(89445),
        s = r(89445);
      function i(e) {
        let t = "object" == typeof e.client ? e.client : {},
          r = "object" == typeof e.server ? e.server : {},
          i = e.shared,
          d = e.runtimeEnv
            ? e.runtimeEnv
            : { ...s.env, ...e.experimental__runtimeEnv };
        return (function (e) {
          let t = e.runtimeEnvStrict ?? e.runtimeEnv ?? n.env;
          if (e.emptyStringAsUndefined)
            for (let [e, r] of Object.entries(t)) "" === r && delete t[e];
          if (e.skipValidation) return t;
          let r = "object" == typeof e.client ? e.client : {},
            s = "object" == typeof e.server ? e.server : {},
            i = "object" == typeof e.shared ? e.shared : {},
            d = a.z.object(r),
            o = a.z.object(s),
            u = a.z.object(i),
            l = e.isServer ?? "undefined" == typeof window,
            c = d.merge(u),
            h = o.merge(u).merge(d),
            p = l ? h.safeParse(t) : c.safeParse(t),
            m =
              e.onValidationError ??
              ((e) => {
                throw (
                  (console.error(
                    "❌ Invalid environment variables:",
                    e.flatten().fieldErrors
                  ),
                  Error("Invalid environment variables"))
                );
              }),
            f =
              e.onInvalidAccess ??
              ((e) => {
                throw Error(
                  "❌ Attempted to access a server-side environment variable on the client"
                );
              });
          if (!1 === p.success) return m(p.error);
          let y = (t) =>
              !e.clientPrefix ||
              (!t.startsWith(e.clientPrefix) && !(t in u.shape)),
            v = (e) => l || !y(e),
            _ = (e) => "__esModule" === e || "$$typeof" === e,
            g = (e.extends ?? []).reduce((e, t) => Object.assign(e, t), {});
          return new Proxy(Object.assign(p.data, g), {
            get(e, t) {
              if ("string" == typeof t && !_(t))
                return v(t) ? Reflect.get(e, t) : f(t);
            },
          });
        })({
          ...e,
          shared: i,
          client: t,
          server: r,
          clientPrefix: "NEXT_PUBLIC_",
          runtimeEnv: d,
        });
      }
    },
    53156: function (e, t, r) {
      "use strict";
      function a() {
        for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                a,
                n = "";
              if ("string" == typeof t || "number" == typeof t) n += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var s = t.length;
                  for (r = 0; r < s; r++)
                    t[r] && (a = e(t[r])) && (n && (n += " "), (n += a));
                } else for (a in t) t[a] && (n && (n += " "), (n += a));
              }
              return n;
            })(e)) &&
            (a && (a += " "), (a += t));
        return a;
      }
      r.d(t, {
        W: function () {
          return a;
        },
      }),
        (t.Z = a);
    },
    18728: function (e, t, r) {
      "use strict";
      let a;
      r.d(t, {
        NL: function () {
          return i;
        },
        z: function () {
          return e3;
        },
      }),
        ((e0 = e9 || (e9 = {})).assertEqual = (e) => e),
        (e0.assertIs = function (e) {}),
        (e0.assertNever = function (e) {
          throw Error();
        }),
        (e0.arrayToEnum = (e) => {
          let t = {};
          for (let r of e) t[r] = r;
          return t;
        }),
        (e0.getValidEnumValues = (e) => {
          let t = e0.objectKeys(e).filter((t) => "number" != typeof e[e[t]]),
            r = {};
          for (let a of t) r[a] = e[a];
          return e0.objectValues(r);
        }),
        (e0.objectValues = (e) =>
          e0.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (e0.objectKeys =
          "function" == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                let t = [];
                for (let r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
              }),
        (e0.find = (e, t) => {
          for (let r of e) if (t(r)) return r;
        }),
        (e0.isInteger =
          "function" == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) =>
                "number" == typeof e && isFinite(e) && Math.floor(e) === e),
        (e0.joinValues = function (e, t = " | ") {
          return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
        }),
        (e0.jsonStringifyReplacer = (e, t) =>
          "bigint" == typeof t ? t.toString() : t),
        ((e4 || (e4 = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let n = e9.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        s = (e) => {
          switch (typeof e) {
            case "undefined":
              return n.undefined;
            case "string":
              return n.string;
            case "number":
              return isNaN(e) ? n.nan : n.number;
            case "boolean":
              return n.boolean;
            case "function":
              return n.function;
            case "bigint":
              return n.bigint;
            case "symbol":
              return n.symbol;
            case "object":
              if (Array.isArray(e)) return n.array;
              if (null === e) return n.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return n.promise;
              if ("undefined" != typeof Map && e instanceof Map) return n.map;
              if ("undefined" != typeof Set && e instanceof Set) return n.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return n.date;
              return n.object;
            default:
              return n.unknown;
          }
        },
        i = e9.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]);
      class d extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            a = (e) => {
              for (let n of e.issues)
                if ("invalid_union" === n.code) n.unionErrors.map(a);
                else if ("invalid_return_type" === n.code) a(n.returnTypeError);
                else if ("invalid_arguments" === n.code) a(n.argumentsError);
                else if (0 === n.path.length) r._errors.push(t(n));
                else {
                  let e = r,
                    a = 0;
                  for (; a < n.path.length; ) {
                    let r = n.path[a];
                    a === n.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(n)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      a++;
                  }
                }
            };
          return a(this), r;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, e9.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let a of this.issues)
            a.path.length > 0
              ? ((t[a.path[0]] = t[a.path[0]] || []), t[a.path[0]].push(e(a)))
              : r.push(e(a));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      d.create = (e) => new d(e);
      let o = (e, t) => {
          let r;
          switch (e.code) {
            case i.invalid_type:
              r =
                e.received === n.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case i.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(
                e.expected,
                e9.jsonStringifyReplacer
              )}`;
              break;
            case i.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${e9.joinValues(
                e.keys,
                ", "
              )}`;
              break;
            case i.invalid_union:
              r = "Invalid input";
              break;
            case i.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${e9.joinValues(
                e.options
              )}`;
              break;
            case i.invalid_enum_value:
              r = `Invalid enum value. Expected ${e9.joinValues(
                e.options
              )}, received '${e.received}'`;
              break;
            case i.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case i.invalid_return_type:
              r = "Invalid function return type";
              break;
            case i.invalid_date:
              r = "Invalid date";
              break;
            case i.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                  ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                  ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                  : e9.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case i.too_small:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at least"
                        : "more than"
                    } ${e.minimum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                    } ${e.minimum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${e.minimum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${new Date(Number(e.minimum))}`
                  : "Invalid input";
              break;
            case i.too_big:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at most"
                        : "less than"
                    } ${e.maximum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                    } ${e.maximum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "bigint" === e.type
                  ? `BigInt must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "smaller than or equal to"
                        : "smaller than"
                    } ${new Date(Number(e.maximum))}`
                  : "Invalid input";
              break;
            case i.custom:
              r = "Invalid input";
              break;
            case i.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case i.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case i.not_finite:
              r = "Number must be finite";
              break;
            default:
              (r = t.defaultError), e9.assertNever(e);
          }
          return { message: r };
        },
        u = o;
      function l() {
        return u;
      }
      let c = (e) => {
        let { data: t, path: r, errorMaps: a, issueData: n } = e,
          s = [...r, ...(n.path || [])],
          i = { ...n, path: s },
          d = "";
        for (let e of a
          .filter((e) => !!e)
          .slice()
          .reverse())
          d = e(i, { data: t, defaultError: d }).message;
        return { ...n, path: s, message: n.message || d };
      };
      function h(e, t) {
        let r = c({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            l(),
            o,
          ].filter((e) => !!e),
        });
        e.common.issues.push(r);
      }
      class p {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let r = [];
          for (let a of t) {
            if ("aborted" === a.status) return m;
            "dirty" === a.status && e.dirty(), r.push(a.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) r.push({ key: await e.key, value: await e.value });
          return p.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let a of t) {
            let { key: t, value: n } = a;
            if ("aborted" === t.status || "aborted" === n.status) return m;
            "dirty" === t.status && e.dirty(),
              "dirty" === n.status && e.dirty(),
              "__proto__" !== t.value &&
                (void 0 !== n.value || a.alwaysSet) &&
                (r[t.value] = n.value);
          }
          return { status: e.value, value: r };
        }
      }
      let m = Object.freeze({ status: "aborted" }),
        f = (e) => ({ status: "dirty", value: e }),
        y = (e) => ({ status: "valid", value: e }),
        v = (e) => "aborted" === e.status,
        _ = (e) => "dirty" === e.status,
        g = (e) => "valid" === e.status,
        b = (e) => "undefined" != typeof Promise && e instanceof Promise;
      ((e1 = e5 || (e5 = {})).errToObj = (e) =>
        "string" == typeof e ? { message: e } : e || {}),
        (e1.toString = (e) =>
          "string" == typeof e ? e : null == e ? void 0 : e.message);
      class x {
        constructor(e, t, r, a) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = a);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let k = (e, t) => {
        if (g(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new d(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function w(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: a,
          description: n,
        } = e;
        if (t && (r || a))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: n }
          : {
              errorMap: (e, t) =>
                "invalid_type" !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                  ? { message: null != a ? a : t.defaultError }
                  : { message: null != r ? r : t.defaultError },
              description: n,
            };
      }
      class Z {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return s(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: s(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new p(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: s(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (b(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let a = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: s(e),
            },
            n = this._parseSync({ data: e, path: a.path, parent: a });
          return k(a, n);
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: s(e),
            },
            a = this._parse({ data: e, path: r.path, parent: r });
          return k(r, await (b(a) ? a : Promise.resolve(a)));
        }
        refine(e, t) {
          let r = (e) =>
            "string" == typeof t || void 0 === t
              ? { message: t }
              : "function" == typeof t
              ? t(e)
              : t;
          return this._refinement((t, a) => {
            let n = e(t),
              s = () => a.addIssue({ code: i.custom, ...r(t) });
            return "undefined" != typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (s(), !1))
              : !!n || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, a) =>
              !!e(r) || (a.addIssue("function" == typeof t ? t(r, a) : t), !1)
          );
        }
        _refinement(e) {
          return new eo({
            schema: this,
            typeName: e8.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return eu.create(this, this._def);
        }
        nullable() {
          return el.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return F.create(this, this._def);
        }
        promise() {
          return ed.create(this, this._def);
        }
        or(e) {
          return q.create([this, e], this._def);
        }
        and(e) {
          return G.create(this, e, this._def);
        }
        transform(e) {
          return new eo({
            ...w(this._def),
            schema: this,
            typeName: e8.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new ec({
            ...w(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: e8.ZodDefault,
          });
        }
        brand() {
          return new ef({
            typeName: e8.ZodBranded,
            type: this,
            ...w(this._def),
          });
        }
        catch(e) {
          return new eh({
            ...w(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: e8.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return ey.create(this, e);
        }
        readonly() {
          return ev.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let T = /^c[^\s-]{8,}$/i,
        O = /^[a-z][a-z0-9]*$/,
        N = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        S =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        E =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        j =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        C =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        I = (e) =>
          e.precision
            ? e.offset
              ? RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
                )
              : RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
                )
            : 0 === e.precision
            ? e.offset
              ? RegExp(
                  "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                )
              : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
            : e.offset
            ? RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
              )
            : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
      class P extends Z {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== n.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.string,
                received: t.parsedType,
              }),
              m
            );
          }
          let r = new p();
          for (let n of this._def.checks)
            if ("min" === n.kind)
              e.data.length < n.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  minimum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty());
            else if ("max" === n.kind)
              e.data.length > n.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  maximum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty());
            else if ("length" === n.kind) {
              let a = e.data.length > n.value,
                s = e.data.length < n.value;
              (a || s) &&
                ((t = this._getOrReturnCtx(e, t)),
                a
                  ? h(t, {
                      code: i.too_big,
                      maximum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    })
                  : s &&
                    h(t, {
                      code: i.too_small,
                      minimum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    }),
                r.dirty());
            } else if ("email" === n.kind)
              E.test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  validation: "email",
                  code: i.invalid_string,
                  message: n.message,
                }),
                r.dirty());
            else if ("emoji" === n.kind)
              a ||
                (a = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u"
                )),
                a.test(e.data) ||
                  (h((t = this._getOrReturnCtx(e, t)), {
                    validation: "emoji",
                    code: i.invalid_string,
                    message: n.message,
                  }),
                  r.dirty());
            else if ("uuid" === n.kind)
              S.test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  validation: "uuid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                r.dirty());
            else if ("cuid" === n.kind)
              T.test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  validation: "cuid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                r.dirty());
            else if ("cuid2" === n.kind)
              O.test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  validation: "cuid2",
                  code: i.invalid_string,
                  message: n.message,
                }),
                r.dirty());
            else if ("ulid" === n.kind)
              N.test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  validation: "ulid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                r.dirty());
            else if ("url" === n.kind)
              try {
                new URL(e.data);
              } catch (a) {
                h((t = this._getOrReturnCtx(e, t)), {
                  validation: "url",
                  code: i.invalid_string,
                  message: n.message,
                }),
                  r.dirty();
              }
            else if ("regex" === n.kind)
              (n.regex.lastIndex = 0),
                n.regex.test(e.data) ||
                  (h((t = this._getOrReturnCtx(e, t)), {
                    validation: "regex",
                    code: i.invalid_string,
                    message: n.message,
                  }),
                  r.dirty());
            else if ("trim" === n.kind) e.data = e.data.trim();
            else if ("includes" === n.kind)
              e.data.includes(n.value, n.position) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { includes: n.value, position: n.position },
                  message: n.message,
                }),
                r.dirty());
            else if ("toLowerCase" === n.kind) e.data = e.data.toLowerCase();
            else if ("toUpperCase" === n.kind) e.data = e.data.toUpperCase();
            else if ("startsWith" === n.kind)
              e.data.startsWith(n.value) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { startsWith: n.value },
                  message: n.message,
                }),
                r.dirty());
            else if ("endsWith" === n.kind)
              e.data.endsWith(n.value) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { endsWith: n.value },
                  message: n.message,
                }),
                r.dirty());
            else if ("datetime" === n.kind)
              I(n).test(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: "datetime",
                  message: n.message,
                }),
                r.dirty());
            else if ("ip" === n.kind) {
              var s, d;
              (s = e.data),
                (("v4" === (d = n.version) || !d) && j.test(s)) ||
                  (("v6" === d || !d) && C.test(s)) ||
                  (h((t = this._getOrReturnCtx(e, t)), {
                    validation: "ip",
                    code: i.invalid_string,
                    message: n.message,
                  }),
                  r.dirty());
            } else e9.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: i.invalid_string,
            ...e5.errToObj(r),
          });
        }
        _addCheck(e) {
          return new P({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...e5.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...e5.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...e5.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...e5.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...e5.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...e5.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...e5.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...e5.errToObj(e) });
        }
        datetime(e) {
          var t;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                ...e5.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...e5.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...e5.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...e5.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...e5.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...e5.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...e5.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({
            kind: "length",
            value: e,
            ...e5.errToObj(t),
          });
        }
        nonempty(e) {
          return this.min(1, e5.errToObj(e));
        }
        trim() {
          return new P({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new P({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new P({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      P.create = (e) => {
        var t;
        return new P({
          checks: [],
          typeName: e8.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...w(e),
        });
      };
      class R extends Z {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== n.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.number,
                received: t.parsedType,
              }),
              m
            );
          }
          let r = new p();
          for (let a of this._def.checks)
            "int" === a.kind
              ? e9.isInteger(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: a.message,
                }),
                r.dirty())
              : "min" === a.kind
              ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  minimum: a.value,
                  type: "number",
                  inclusive: a.inclusive,
                  exact: !1,
                  message: a.message,
                }),
                r.dirty())
              : "max" === a.kind
              ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  maximum: a.value,
                  type: "number",
                  inclusive: a.inclusive,
                  exact: !1,
                  message: a.message,
                }),
                r.dirty())
              : "multipleOf" === a.kind
              ? 0 !==
                  (function (e, t) {
                    let r = (e.toString().split(".")[1] || "").length,
                      a = (t.toString().split(".")[1] || "").length,
                      n = r > a ? r : a;
                    return (
                      (parseInt(e.toFixed(n).replace(".", "")) %
                        parseInt(t.toFixed(n).replace(".", ""))) /
                      Math.pow(10, n)
                    );
                  })(e.data, a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.not_multiple_of,
                  multipleOf: a.value,
                  message: a.message,
                }),
                r.dirty())
              : "finite" === a.kind
              ? Number.isFinite(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.not_finite,
                  message: a.message,
                }),
                r.dirty())
              : e9.assertNever(a);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, e5.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, e5.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, e5.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, e5.toString(t));
        }
        setLimit(e, t, r, a) {
          return new R({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: e5.toString(a) },
            ],
          });
        }
        _addCheck(e) {
          return new R({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: e5.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: e5.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: e5.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: e5.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: e5.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: e5.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: e5.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: e5.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: e5.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && e9.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              "finite" === r.kind ||
              "int" === r.kind ||
              "multipleOf" === r.kind
            )
              return !0;
            "min" === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : "max" === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      R.create = (e) =>
        new R({
          checks: [],
          typeName: e8.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...w(e),
        });
      class A extends Z {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== n.bigint)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.bigint,
                received: t.parsedType,
              }),
              m
            );
          }
          let r = new p();
          for (let a of this._def.checks)
            "min" === a.kind
              ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  type: "bigint",
                  minimum: a.value,
                  inclusive: a.inclusive,
                  message: a.message,
                }),
                r.dirty())
              : "max" === a.kind
              ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  type: "bigint",
                  maximum: a.value,
                  inclusive: a.inclusive,
                  message: a.message,
                }),
                r.dirty())
              : "multipleOf" === a.kind
              ? e.data % a.value !== BigInt(0) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.not_multiple_of,
                  multipleOf: a.value,
                  message: a.message,
                }),
                r.dirty())
              : e9.assertNever(a);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, e5.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, e5.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, e5.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, e5.toString(t));
        }
        setLimit(e, t, r, a) {
          return new A({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: e5.toString(a) },
            ],
          });
        }
        _addCheck(e) {
          return new A({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: e5.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: e5.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: e5.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: e5.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: e5.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      A.create = (e) => {
        var t;
        return new A({
          checks: [],
          typeName: e8.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...w(e),
        });
      };
      class $ extends Z {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== n.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.boolean,
                received: t.parsedType,
              }),
              m
            );
          }
          return y(e.data);
        }
      }
      $.create = (e) =>
        new $({
          typeName: e8.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...w(e),
        });
      class L extends Z {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== n.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.date,
                received: t.parsedType,
              }),
              m
            );
          }
          if (isNaN(e.data.getTime()))
            return h(this._getOrReturnCtx(e), { code: i.invalid_date }), m;
          let r = new p();
          for (let a of this._def.checks)
            "min" === a.kind
              ? e.data.getTime() < a.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  message: a.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: a.value,
                  type: "date",
                }),
                r.dirty())
              : "max" === a.kind
              ? e.data.getTime() > a.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  message: a.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: a.value,
                  type: "date",
                }),
                r.dirty())
              : e9.assertNever(a);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new L({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: e5.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: e5.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      L.create = (e) =>
        new L({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: e8.ZodDate,
          ...w(e),
        });
      class M extends Z {
        _parse(e) {
          if (this._getType(e) !== n.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.symbol,
                received: t.parsedType,
              }),
              m
            );
          }
          return y(e.data);
        }
      }
      M.create = (e) => new M({ typeName: e8.ZodSymbol, ...w(e) });
      class D extends Z {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.undefined,
                received: t.parsedType,
              }),
              m
            );
          }
          return y(e.data);
        }
      }
      D.create = (e) => new D({ typeName: e8.ZodUndefined, ...w(e) });
      class z extends Z {
        _parse(e) {
          if (this._getType(e) !== n.null) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.null,
                received: t.parsedType,
              }),
              m
            );
          }
          return y(e.data);
        }
      }
      z.create = (e) => new z({ typeName: e8.ZodNull, ...w(e) });
      class V extends Z {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return y(e.data);
        }
      }
      V.create = (e) => new V({ typeName: e8.ZodAny, ...w(e) });
      class U extends Z {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return y(e.data);
        }
      }
      U.create = (e) => new U({ typeName: e8.ZodUnknown, ...w(e) });
      class K extends Z {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: i.invalid_type,
              expected: n.never,
              received: t.parsedType,
            }),
            m
          );
        }
      }
      K.create = (e) => new K({ typeName: e8.ZodNever, ...w(e) });
      class B extends Z {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.void,
                received: t.parsedType,
              }),
              m
            );
          }
          return y(e.data);
        }
      }
      B.create = (e) => new B({ typeName: e8.ZodVoid, ...w(e) });
      class F extends Z {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            a = this._def;
          if (t.parsedType !== n.array)
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.array,
                received: t.parsedType,
              }),
              m
            );
          if (null !== a.exactLength) {
            let e = t.data.length > a.exactLength.value,
              n = t.data.length < a.exactLength.value;
            (e || n) &&
              (h(t, {
                code: e ? i.too_big : i.too_small,
                minimum: n ? a.exactLength.value : void 0,
                maximum: e ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== a.minLength &&
              t.data.length < a.minLength.value &&
              (h(t, {
                code: i.too_small,
                minimum: a.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.minLength.message,
              }),
              r.dirty()),
            null !== a.maxLength &&
              t.data.length > a.maxLength.value &&
              (h(t, {
                code: i.too_big,
                maximum: a.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                a.type._parseAsync(new x(t, e, t.path, r))
              )
            ).then((e) => p.mergeArray(r, e));
          let s = [...t.data].map((e, r) =>
            a.type._parseSync(new x(t, e, t.path, r))
          );
          return p.mergeArray(r, s);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new F({
            ...this._def,
            minLength: { value: e, message: e5.toString(t) },
          });
        }
        max(e, t) {
          return new F({
            ...this._def,
            maxLength: { value: e, message: e5.toString(t) },
          });
        }
        length(e, t) {
          return new F({
            ...this._def,
            exactLength: { value: e, message: e5.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      F.create = (e, t) =>
        new F({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: e8.ZodArray,
          ...w(t),
        });
      class W extends Z {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = e9.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== n.object) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              m
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: a, keys: s } = this._getCached(),
            d = [];
          if (
            !(
              this._def.catchall instanceof K &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in r.data) s.includes(e) || d.push(e);
          let o = [];
          for (let e of s) {
            let t = a[e],
              n = r.data[e];
            o.push({
              key: { status: "valid", value: e },
              value: t._parse(new x(r, n, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof K) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of d)
                o.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: r.data[e] },
                });
            else if ("strict" === e)
              d.length > 0 &&
                (h(r, { code: i.unrecognized_keys, keys: d }), t.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            let e = this._def.catchall;
            for (let t of d) {
              let a = r.data[t];
              o.push({
                key: { status: "valid", value: t },
                value: e._parse(new x(r, a, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of o) {
                    let r = await t.key;
                    e.push({
                      key: r,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => p.mergeObjectSync(t, e))
            : p.mergeObjectSync(t, o);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            e5.errToObj,
            new W({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var a, n, s, i;
                      let d =
                        null !==
                          (s =
                            null === (n = (a = this._def).errorMap) ||
                            void 0 === n
                              ? void 0
                              : n.call(a, t, r).message) && void 0 !== s
                          ? s
                          : r.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (i = e5.errToObj(e).message) &&
                              void 0 !== i
                                ? i
                                : d,
                          }
                        : { message: d };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new W({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new W({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new W({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new W({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: e8.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new W({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            e9.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            e9.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof W) {
              let r = {};
              for (let a in t.shape) {
                let n = t.shape[a];
                r[a] = eu.create(e(n));
              }
              return new W({ ...t._def, shape: () => r });
            }
            return t instanceof F
              ? new F({ ...t._def, type: e(t.element) })
              : t instanceof eu
              ? eu.create(e(t.unwrap()))
              : t instanceof el
              ? el.create(e(t.unwrap()))
              : t instanceof H
              ? H.create(t.items.map((t) => e(t)))
              : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            e9.objectKeys(this.shape).forEach((r) => {
              let a = this.shape[r];
              e && !e[r] ? (t[r] = a) : (t[r] = a.optional());
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            e9.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof eu; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return en(e9.objectKeys(this.shape));
        }
      }
      (W.create = (e, t) =>
        new W({
          shape: () => e,
          unknownKeys: "strip",
          catchall: K.create(),
          typeName: e8.ZodObject,
          ...w(t),
        })),
        (W.strictCreate = (e, t) =>
          new W({
            shape: () => e,
            unknownKeys: "strict",
            catchall: K.create(),
            typeName: e8.ZodObject,
            ...w(t),
          })),
        (W.lazycreate = (e, t) =>
          new W({
            shape: e,
            unknownKeys: "strip",
            catchall: K.create(),
            typeName: e8.ZodObject,
            ...w(t),
          }));
      class q extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let r of e)
                if ("dirty" === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new d(e.ctx.common.issues));
              return h(t, { code: i.invalid_union, unionErrors: r }), m;
            });
          {
            let e;
            let a = [];
            for (let n of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = n._parseSync({ data: t.data, path: t.path, parent: r });
              if ("valid" === s.status) return s;
              "dirty" !== s.status || e || (e = { result: s, ctx: r }),
                r.common.issues.length && a.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let n = a.map((e) => new d(e));
            return h(t, { code: i.invalid_union, unionErrors: n }), m;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      q.create = (e, t) =>
        new q({ options: e, typeName: e8.ZodUnion, ...w(t) });
      let J = (e) => {
        if (e instanceof er) return J(e.schema);
        if (e instanceof eo) return J(e.innerType());
        if (e instanceof ea) return [e.value];
        if (e instanceof es) return e.options;
        if (e instanceof ei) return Object.keys(e.enum);
        if (e instanceof ec) return J(e._def.innerType);
        if (e instanceof D) return [void 0];
        else if (e instanceof z) return [null];
        else return null;
      };
      class Y extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.object)
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              m
            );
          let r = this.discriminator,
            a = t.data[r],
            s = this.optionsMap.get(a);
          return s
            ? t.common.async
              ? s._parseAsync({ data: t.data, path: t.path, parent: t })
              : s._parseSync({ data: t.data, path: t.path, parent: t })
            : (h(t, {
                code: i.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              m);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let a = new Map();
          for (let r of t) {
            let t = J(r.shape[e]);
            if (!t)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let n of t) {
              if (a.has(n))
                throw Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(n)}`
                );
              a.set(n, r);
            }
          }
          return new Y({
            typeName: e8.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: a,
            ...w(r),
          });
        }
      }
      class G extends Z {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            a = (e, a) => {
              if (v(e) || v(a)) return m;
              let d = (function e(t, r) {
                let a = s(t),
                  i = s(r);
                if (t === r) return { valid: !0, data: t };
                if (a === n.object && i === n.object) {
                  let a = e9.objectKeys(r),
                    n = e9.objectKeys(t).filter((e) => -1 !== a.indexOf(e)),
                    s = { ...t, ...r };
                  for (let a of n) {
                    let n = e(t[a], r[a]);
                    if (!n.valid) return { valid: !1 };
                    s[a] = n.data;
                  }
                  return { valid: !0, data: s };
                }
                if (a === n.array && i === n.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let a = [];
                  for (let n = 0; n < t.length; n++) {
                    let s = e(t[n], r[n]);
                    if (!s.valid) return { valid: !1 };
                    a.push(s.data);
                  }
                  return { valid: !0, data: a };
                }
                return a === n.date && i === n.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, a.value);
              return d.valid
                ? ((_(e) || _(a)) && t.dirty(),
                  { status: t.value, value: d.data })
                : (h(r, { code: i.invalid_intersection_types }), m);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => a(e, t))
            : a(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      G.create = (e, t, r) =>
        new G({ left: e, right: t, typeName: e8.ZodIntersection, ...w(r) });
      class H extends Z {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.array)
            return (
              h(r, {
                code: i.invalid_type,
                expected: n.array,
                received: r.parsedType,
              }),
              m
            );
          if (r.data.length < this._def.items.length)
            return (
              h(r, {
                code: i.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              m
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (h(r, {
              code: i.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let a = [...r.data]
            .map((e, t) => {
              let a = this._def.items[t] || this._def.rest;
              return a ? a._parse(new x(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(a).then((e) => p.mergeArray(t, e))
            : p.mergeArray(t, a);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new H({ ...this._def, rest: e });
        }
      }
      H.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new H({ items: e, typeName: e8.ZodTuple, rest: null, ...w(t) });
      };
      class X extends Z {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.object)
            return (
              h(r, {
                code: i.invalid_type,
                expected: n.object,
                received: r.parsedType,
              }),
              m
            );
          let a = [],
            s = this._def.keyType,
            d = this._def.valueType;
          for (let e in r.data)
            a.push({
              key: s._parse(new x(r, e, r.path, e)),
              value: d._parse(new x(r, r.data[e], r.path, e)),
            });
          return r.common.async
            ? p.mergeObjectAsync(t, a)
            : p.mergeObjectSync(t, a);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new X(
            t instanceof Z
              ? { keyType: e, valueType: t, typeName: e8.ZodRecord, ...w(r) }
              : {
                  keyType: P.create(),
                  valueType: e,
                  typeName: e8.ZodRecord,
                  ...w(t),
                }
          );
        }
      }
      class Q extends Z {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.map)
            return (
              h(r, {
                code: i.invalid_type,
                expected: n.map,
                received: r.parsedType,
              }),
              m
            );
          let a = this._def.keyType,
            s = this._def.valueType,
            d = [...r.data.entries()].map(([e, t], n) => ({
              key: a._parse(new x(r, e, r.path, [n, "key"])),
              value: s._parse(new x(r, t, r.path, [n, "value"])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of d) {
                let a = await r.key,
                  n = await r.value;
                if ("aborted" === a.status || "aborted" === n.status) return m;
                ("dirty" === a.status || "dirty" === n.status) && t.dirty(),
                  e.set(a.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of d) {
              let a = r.key,
                n = r.value;
              if ("aborted" === a.status || "aborted" === n.status) return m;
              ("dirty" === a.status || "dirty" === n.status) && t.dirty(),
                e.set(a.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      Q.create = (e, t, r) =>
        new Q({ valueType: t, keyType: e, typeName: e8.ZodMap, ...w(r) });
      class ee extends Z {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.set)
            return (
              h(r, {
                code: i.invalid_type,
                expected: n.set,
                received: r.parsedType,
              }),
              m
            );
          let a = this._def;
          null !== a.minSize &&
            r.data.size < a.minSize.value &&
            (h(r, {
              code: i.too_small,
              minimum: a.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: a.minSize.message,
            }),
            t.dirty()),
            null !== a.maxSize &&
              r.data.size > a.maxSize.value &&
              (h(r, {
                code: i.too_big,
                maximum: a.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.maxSize.message,
              }),
              t.dirty());
          let s = this._def.valueType;
          function d(e) {
            let r = new Set();
            for (let a of e) {
              if ("aborted" === a.status) return m;
              "dirty" === a.status && t.dirty(), r.add(a.value);
            }
            return { status: t.value, value: r };
          }
          let o = [...r.data.values()].map((e, t) =>
            s._parse(new x(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(o).then((e) => d(e)) : d(o);
        }
        min(e, t) {
          return new ee({
            ...this._def,
            minSize: { value: e, message: e5.toString(t) },
          });
        }
        max(e, t) {
          return new ee({
            ...this._def,
            maxSize: { value: e, message: e5.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ee.create = (e, t) =>
        new ee({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: e8.ZodSet,
          ...w(t),
        });
      class et extends Z {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.function)
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.function,
                received: t.parsedType,
              }),
              m
            );
          function r(e, r) {
            return c({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                l(),
                o,
              ].filter((e) => !!e),
              issueData: { code: i.invalid_arguments, argumentsError: r },
            });
          }
          function a(e, r) {
            return c({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                l(),
                o,
              ].filter((e) => !!e),
              issueData: { code: i.invalid_return_type, returnTypeError: r },
            });
          }
          let s = { errorMap: t.common.contextualErrorMap },
            u = t.data;
          if (this._def.returns instanceof ed) {
            let e = this;
            return y(async function (...t) {
              let n = new d([]),
                i = await e._def.args.parseAsync(t, s).catch((e) => {
                  throw (n.addIssue(r(t, e)), n);
                }),
                o = await Reflect.apply(u, this, i);
              return await e._def.returns._def.type
                .parseAsync(o, s)
                .catch((e) => {
                  throw (n.addIssue(a(o, e)), n);
                });
            });
          }
          {
            let e = this;
            return y(function (...t) {
              let n = e._def.args.safeParse(t, s);
              if (!n.success) throw new d([r(t, n.error)]);
              let i = Reflect.apply(u, this, n.data),
                o = e._def.returns.safeParse(i, s);
              if (!o.success) throw new d([a(i, o.error)]);
              return o.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new et({ ...this._def, args: H.create(e).rest(U.create()) });
        }
        returns(e) {
          return new et({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new et({
            args: e || H.create([]).rest(U.create()),
            returns: t || U.create(),
            typeName: e8.ZodFunction,
            ...w(r),
          });
        }
      }
      class er extends Z {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      er.create = (e, t) =>
        new er({ getter: e, typeName: e8.ZodLazy, ...w(t) });
      class ea extends Z {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                received: t.data,
                code: i.invalid_literal,
                expected: this._def.value,
              }),
              m
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function en(e, t) {
        return new es({ values: e, typeName: e8.ZodEnum, ...w(t) });
      }
      ea.create = (e, t) =>
        new ea({ value: e, typeName: e8.ZodLiteral, ...w(t) });
      class es extends Z {
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                expected: e9.joinValues(r),
                received: t.parsedType,
                code: i.invalid_type,
              }),
              m
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                received: t.data,
                code: i.invalid_enum_value,
                options: r,
              }),
              m
            );
          }
          return y(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return es.create(e);
        }
        exclude(e) {
          return es.create(this.options.filter((t) => !e.includes(t)));
        }
      }
      es.create = en;
      class ei extends Z {
        _parse(e) {
          let t = e9.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== n.string && r.parsedType !== n.number) {
            let e = e9.objectValues(t);
            return (
              h(r, {
                expected: e9.joinValues(e),
                received: r.parsedType,
                code: i.invalid_type,
              }),
              m
            );
          }
          if (-1 === t.indexOf(e.data)) {
            let e = e9.objectValues(t);
            return (
              h(r, {
                received: r.data,
                code: i.invalid_enum_value,
                options: e,
              }),
              m
            );
          }
          return y(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ei.create = (e, t) =>
        new ei({ values: e, typeName: e8.ZodNativeEnum, ...w(t) });
      class ed extends Z {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== n.promise && !1 === t.common.async
            ? (h(t, {
                code: i.invalid_type,
                expected: n.promise,
                received: t.parsedType,
              }),
              m)
            : y(
                (t.parsedType === n.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      ed.create = (e, t) =>
        new ed({ type: e, typeName: e8.ZodPromise, ...w(t) });
      class eo extends Z {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === e8.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            a = this._def.effect || null,
            n = {
              addIssue: (e) => {
                h(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((n.addIssue = n.addIssue.bind(n)), "preprocess" === a.type)) {
            let e = a.transform(r.data, n);
            return r.common.issues.length
              ? { status: "dirty", value: r.data }
              : r.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r,
                  })
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
          }
          if ("refinement" === a.type) {
            let e = (e) => {
              let t = a.refinement(e, n);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  "aborted" === r.status
                    ? m
                    : ("dirty" === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      })))
                );
            {
              let a = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === a.status
                ? m
                : ("dirty" === a.status && t.dirty(),
                  e(a.value),
                  { status: t.value, value: a.value });
            }
          }
          if ("transform" === a.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  g(e)
                    ? Promise.resolve(a.transform(e.value, n)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!g(e)) return e;
              let s = a.transform(e.value, n);
              if (s instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: s };
            }
          }
          e9.assertNever(a);
        }
      }
      (eo.create = (e, t, r) =>
        new eo({ schema: e, typeName: e8.ZodEffects, effect: t, ...w(r) })),
        (eo.createWithPreprocess = (e, t, r) =>
          new eo({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: e8.ZodEffects,
            ...w(r),
          }));
      class eu extends Z {
        _parse(e) {
          return this._getType(e) === n.undefined
            ? y(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eu.create = (e, t) =>
        new eu({ innerType: e, typeName: e8.ZodOptional, ...w(t) });
      class el extends Z {
        _parse(e) {
          return this._getType(e) === n.null
            ? y(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      el.create = (e, t) =>
        new el({ innerType: e, typeName: e8.ZodNullable, ...w(t) });
      class ec extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === n.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ec.create = (e, t) =>
        new ec({
          innerType: e,
          typeName: e8.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...w(t),
        });
      class eh extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            a = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return b(a)
            ? a.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new d(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === a.status
                    ? a.value
                    : this._def.catchValue({
                        get error() {
                          return new d(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      eh.create = (e, t) =>
        new eh({
          innerType: e,
          typeName: e8.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ...w(t),
        });
      class ep extends Z {
        _parse(e) {
          if (this._getType(e) !== n.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: i.invalid_type,
                expected: n.nan,
                received: t.parsedType,
              }),
              m
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      ep.create = (e) => new ep({ typeName: e8.ZodNaN, ...w(e) });
      let em = Symbol("zod_brand");
      class ef extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class ey extends Z {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? m
                : "dirty" === e.status
                ? (t.dirty(), f(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return "aborted" === e.status
              ? m
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: r.path,
                  parent: r,
                });
          }
        }
        static create(e, t) {
          return new ey({ in: e, out: t, typeName: e8.ZodPipeline });
        }
      }
      class ev extends Z {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return g(t) && (t.value = Object.freeze(t.value)), t;
        }
      }
      ev.create = (e, t) =>
        new ev({ innerType: e, typeName: e8.ZodReadonly, ...w(t) });
      let e_ = (e, t = {}, r) =>
          e
            ? V.create().superRefine((a, n) => {
                var s, i;
                if (!e(a)) {
                  let e =
                      "function" == typeof t
                        ? t(a)
                        : "string" == typeof t
                        ? { message: t }
                        : t,
                    d =
                      null ===
                        (i = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                      void 0 === i ||
                      i;
                  n.addIssue({
                    code: "custom",
                    ...("string" == typeof e ? { message: e } : e),
                    fatal: d,
                  });
                }
              })
            : V.create(),
        eg = { object: W.lazycreate };
      ((e2 = e8 || (e8 = {})).ZodString = "ZodString"),
        (e2.ZodNumber = "ZodNumber"),
        (e2.ZodNaN = "ZodNaN"),
        (e2.ZodBigInt = "ZodBigInt"),
        (e2.ZodBoolean = "ZodBoolean"),
        (e2.ZodDate = "ZodDate"),
        (e2.ZodSymbol = "ZodSymbol"),
        (e2.ZodUndefined = "ZodUndefined"),
        (e2.ZodNull = "ZodNull"),
        (e2.ZodAny = "ZodAny"),
        (e2.ZodUnknown = "ZodUnknown"),
        (e2.ZodNever = "ZodNever"),
        (e2.ZodVoid = "ZodVoid"),
        (e2.ZodArray = "ZodArray"),
        (e2.ZodObject = "ZodObject"),
        (e2.ZodUnion = "ZodUnion"),
        (e2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (e2.ZodIntersection = "ZodIntersection"),
        (e2.ZodTuple = "ZodTuple"),
        (e2.ZodRecord = "ZodRecord"),
        (e2.ZodMap = "ZodMap"),
        (e2.ZodSet = "ZodSet"),
        (e2.ZodFunction = "ZodFunction"),
        (e2.ZodLazy = "ZodLazy"),
        (e2.ZodLiteral = "ZodLiteral"),
        (e2.ZodEnum = "ZodEnum"),
        (e2.ZodEffects = "ZodEffects"),
        (e2.ZodNativeEnum = "ZodNativeEnum"),
        (e2.ZodOptional = "ZodOptional"),
        (e2.ZodNullable = "ZodNullable"),
        (e2.ZodDefault = "ZodDefault"),
        (e2.ZodCatch = "ZodCatch"),
        (e2.ZodPromise = "ZodPromise"),
        (e2.ZodBranded = "ZodBranded"),
        (e2.ZodPipeline = "ZodPipeline"),
        (e2.ZodReadonly = "ZodReadonly");
      let eb = P.create,
        ex = R.create,
        ek = ep.create,
        ew = A.create,
        eZ = $.create,
        eT = L.create,
        eO = M.create,
        eN = D.create,
        eS = z.create,
        eE = V.create,
        ej = U.create,
        eC = K.create,
        eI = B.create,
        eP = F.create,
        eR = W.create,
        eA = W.strictCreate,
        e$ = q.create,
        eL = Y.create,
        eM = G.create,
        eD = H.create,
        ez = X.create,
        eV = Q.create,
        eU = ee.create,
        eK = et.create,
        eB = er.create,
        eF = ea.create,
        eW = es.create,
        eq = ei.create,
        eJ = ed.create,
        eY = eo.create,
        eG = eu.create,
        eH = el.create,
        eX = eo.createWithPreprocess,
        eQ = ey.create;
      var e0,
        e1,
        e2,
        e9,
        e4,
        e5,
        e8,
        e3 = Object.freeze({
          __proto__: null,
          defaultErrorMap: o,
          setErrorMap: function (e) {
            u = e;
          },
          getErrorMap: l,
          makeIssue: c,
          EMPTY_PATH: [],
          addIssueToContext: h,
          ParseStatus: p,
          INVALID: m,
          DIRTY: f,
          OK: y,
          isAborted: v,
          isDirty: _,
          isValid: g,
          isAsync: b,
          get util() {
            return e9;
          },
          get objectUtil() {
            return e4;
          },
          ZodParsedType: n,
          getParsedType: s,
          ZodType: Z,
          ZodString: P,
          ZodNumber: R,
          ZodBigInt: A,
          ZodBoolean: $,
          ZodDate: L,
          ZodSymbol: M,
          ZodUndefined: D,
          ZodNull: z,
          ZodAny: V,
          ZodUnknown: U,
          ZodNever: K,
          ZodVoid: B,
          ZodArray: F,
          ZodObject: W,
          ZodUnion: q,
          ZodDiscriminatedUnion: Y,
          ZodIntersection: G,
          ZodTuple: H,
          ZodRecord: X,
          ZodMap: Q,
          ZodSet: ee,
          ZodFunction: et,
          ZodLazy: er,
          ZodLiteral: ea,
          ZodEnum: es,
          ZodNativeEnum: ei,
          ZodPromise: ed,
          ZodEffects: eo,
          ZodTransformer: eo,
          ZodOptional: eu,
          ZodNullable: el,
          ZodDefault: ec,
          ZodCatch: eh,
          ZodNaN: ep,
          BRAND: em,
          ZodBranded: ef,
          ZodPipeline: ey,
          ZodReadonly: ev,
          custom: e_,
          Schema: Z,
          ZodSchema: Z,
          late: eg,
          get ZodFirstPartyTypeKind() {
            return e8;
          },
          coerce: {
            string: (e) => P.create({ ...e, coerce: !0 }),
            number: (e) => R.create({ ...e, coerce: !0 }),
            boolean: (e) => $.create({ ...e, coerce: !0 }),
            bigint: (e) => A.create({ ...e, coerce: !0 }),
            date: (e) => L.create({ ...e, coerce: !0 }),
          },
          any: eE,
          array: eP,
          bigint: ew,
          boolean: eZ,
          date: eT,
          discriminatedUnion: eL,
          effect: eY,
          enum: eW,
          function: eK,
          instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
            e_((t) => t instanceof e, t),
          intersection: eM,
          lazy: eB,
          literal: eF,
          map: eV,
          nan: ek,
          nativeEnum: eq,
          never: eC,
          null: eS,
          nullable: eH,
          number: ex,
          object: eR,
          oboolean: () => eZ().optional(),
          onumber: () => ex().optional(),
          optional: eG,
          ostring: () => eb().optional(),
          pipeline: eQ,
          preprocess: eX,
          promise: eJ,
          record: ez,
          set: eU,
          strictObject: eA,
          string: eb,
          symbol: eO,
          transformer: eY,
          tuple: eD,
          undefined: eN,
          union: e$,
          unknown: ej,
          void: eI,
          NEVER: m,
          ZodIssueCode: i,
          quotelessJson: (e) =>
            JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
          ZodError: d,
        });
    },
  },
]);
