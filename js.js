if (
    ((function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = t.document
                  ? e(t, !0)
                  : function (t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return e(t);
                    })
            : e(t);
    })("undefined" != typeof window ? window : this, function (T, t) {
        "use strict";
        function m(t) {
            return null != t && t === t.window;
        }
        var e = [],
            C = T.document,
            n = Object.getPrototypeOf,
            a = e.slice,
            g = e.concat,
            l = e.push,
            r = e.indexOf,
            i = {},
            s = i.toString,
            _ = i.hasOwnProperty,
            o = _.toString,
            u = o.call(Object),
            v = {},
            y = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType;
            },
            c = { type: !0, src: !0, noModule: !0 };
        function b(t, e, i) {
            var n,
                r = (e = e || C).createElement("script");
            if (((r.text = t), i)) for (n in c) i[n] && (r[n] = i[n]);
            e.head.appendChild(r).parentNode.removeChild(r);
        }
        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t;
        }
        var E = function (t, e) {
                return new E.fn.init(t, e);
            },
            h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function f(t) {
            var e = !!t && "length" in t && t.length,
                i = w(t);
            return !y(t) && !m(t) && ("array" === i || 0 === e || ("number" == typeof e && 0 < e && e - 1 in t));
        }
        (E.fn = E.prototype = {
            jquery: "3.3.1",
            constructor: E,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
            },
            pushStack: function (t) {
                var e = E.merge(this.constructor(), t);
                return (e.prevObject = this), e;
            },
            each: function (t) {
                return E.each(this, t);
            },
            map: function (i) {
                return this.pushStack(
                    E.map(this, function (t, e) {
                        return i.call(t, e, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: l,
            sort: e.sort,
            splice: e.splice,
        }),
            (E.extend = E.fn.extend = function () {
                var t,
                    e,
                    i,
                    n,
                    r,
                    s,
                    o = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++), "object" == typeof o || y(o) || (o = {}), a === l && ((o = this), a--); a < l; a++)
                    if (null != (t = arguments[a]))
                        for (e in t)
                            (i = o[e]),
                                o !== (n = t[e]) &&
                                    (u && n && (E.isPlainObject(n) || (r = Array.isArray(n)))
                                        ? ((s = r ? ((r = !1), i && Array.isArray(i) ? i : []) : i && E.isPlainObject(i) ? i : {}), (o[e] = E.extend(u, s, n)))
                                        : void 0 !== n && (o[e] = n));
                return o;
            }),
            E.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t);
                },
                noop: function () {},
                isPlainObject: function (t) {
                    var e, i;
                    return !(!t || "[object Object]" !== s.call(t) || ((e = n(t)) && ("function" != typeof (i = _.call(e, "constructor") && e.constructor) || o.call(i) !== u)));
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0;
                },
                globalEval: function (t) {
                    b(t);
                },
                each: function (t, e) {
                    var i,
                        n = 0;
                    if (f(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                    else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
                    return t;
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(h, "");
                },
                makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (f(Object(t)) ? E.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i;
                },
                inArray: function (t, e, i) {
                    return null == e ? -1 : r.call(e, t, i);
                },
                merge: function (t, e) {
                    for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                    return (t.length = r), t;
                },
                grep: function (t, e, i) {
                    for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) != o && n.push(t[r]);
                    return n;
                },
                map: function (t, e, i) {
                    var n,
                        r,
                        s = 0,
                        o = [];
                    if (f(t)) for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r);
                    else for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
                    return g.apply([], o);
                },
                guid: 1,
                support: v,
            }),
            "function" == typeof Symbol && (E.fn[Symbol.iterator] = e[Symbol.iterator]),
            E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                i["[object " + e + "]"] = e.toLowerCase();
            });
        var d = (function (i) {
            function h(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            }
            function r() {
                x();
            }
            var t,
                d,
                b,
                s,
                o,
                p,
                f,
                m,
                w,
                l,
                u,
                x,
                T,
                a,
                C,
                g,
                c,
                _,
                v,
                E = "sizzle" + 1 * new Date(),
                y = i.document,
                S = 0,
                n = 0,
                k = ot(),
                A = ot(),
                O = ot(),
                D = function (t, e) {
                    return t === e && (u = !0), 0;
                },
                P = {}.hasOwnProperty,
                e = [],
                I = e.pop,
                N = e.push,
                R = e.push,
                M = e.slice,
                L = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                    return -1;
                },
                j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                H = "\\[" + F + "*(" + z + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + F + "*\\]",
                W = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                B = new RegExp(F + "+", "g"),
                q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                $ = new RegExp("^" + F + "*," + F + "*"),
                U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                Y = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
                X = new RegExp(W),
                V = new RegExp("^" + z + "$"),
                Q = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + j + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i"),
                },
                K = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                G = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                nt = function (t, e) {
                    return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                },
                rt = vt(
                    function (t) {
                        return !0 === t.disabled && ("form" in t || "label" in t);
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                R.apply((e = M.call(y.childNodes)), y.childNodes), e[y.childNodes.length].nodeType;
            } catch (i) {
                R = {
                    apply: e.length
                        ? function (t, e) {
                              N.apply(t, M.call(e));
                          }
                        : function (t, e) {
                              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                              t.length = i - 1;
                          },
                };
            }
            function st(t, e, i, n) {
                var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h = e && e.ownerDocument,
                    f = e ? e.nodeType : 9;
                if (((i = i || []), "string" != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))) return i;
                if (!n && ((e ? e.ownerDocument || e : y) !== T && x(e), (e = e || T), C)) {
                    if (11 !== f && (l = Z.exec(t)))
                        if ((r = l[1])) {
                            if (9 === f) {
                                if (!(o = e.getElementById(r))) return i;
                                if (o.id === r) return i.push(o), i;
                            } else if (h && (o = h.getElementById(r)) && v(e, o) && o.id === r) return i.push(o), i;
                        } else {
                            if (l[2]) return R.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = l[3]) && d.getElementsByClassName && e.getElementsByClassName) return R.apply(i, e.getElementsByClassName(r)), i;
                        }
                    if (d.qsa && !O[t + " "] && (!g || !g.test(t))) {
                        if (1 !== f) (h = e), (c = t);
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? (a = a.replace(it, nt)) : e.setAttribute("id", (a = E)), s = (u = p(t)).length; s--; ) u[s] = "#" + a + " " + _t(u[s]);
                            (c = u.join(",")), (h = (tt.test(t) && mt(e.parentNode)) || e);
                        }
                        if (c)
                            try {
                                return R.apply(i, h.querySelectorAll(c)), i;
                            } catch (t) {
                            } finally {
                                a === E && e.removeAttribute("id");
                            }
                    }
                }
                return m(t.replace(q, "$1"), e, i, n);
            }
            function ot() {
                var n = [];
                return function t(e, i) {
                    return n.push(e + " ") > b.cacheLength && delete t[n.shift()], (t[e + " "] = i);
                };
            }
            function at(t) {
                return (t[E] = !0), t;
            }
            function lt(t) {
                var e = T.createElement("fieldset");
                try {
                    return !!t(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), (e = null);
                }
            }
            function ut(t, e) {
                for (var i = t.split("|"), n = i.length; n--; ) b.attrHandle[i[n]] = e;
            }
            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                return t ? 1 : -1;
            }
            function ht(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            }
            function ft(i) {
                return function (t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i;
                };
            }
            function dt(e) {
                return function (t) {
                    return "form" in t
                        ? t.parentNode && !1 === t.disabled
                            ? "label" in t
                                ? "label" in t.parentNode
                                    ? t.parentNode.disabled === e
                                    : t.disabled === e
                                : t.isDisabled === e || (t.isDisabled !== !e && rt(t) === e)
                            : t.disabled === e
                        : "label" in t && t.disabled === e;
                };
            }
            function pt(o) {
                return at(function (s) {
                    return (
                        (s = +s),
                        at(function (t, e) {
                            for (var i, n = o([], t.length, s), r = n.length; r--; ) t[(i = n[r])] && (t[i] = !(e[i] = t[i]));
                        })
                    );
                });
            }
            function mt(t) {
                return t && void 0 !== t.getElementsByTagName && t;
            }
            for (t in ((d = st.support = {}),
            (o = st.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }),
            (x = st.setDocument = function (t) {
                var e,
                    i,
                    n = t ? t.ownerDocument || t : y;
                return (
                    n !== T &&
                        9 === n.nodeType &&
                        n.documentElement &&
                        ((a = (T = n).documentElement),
                        (C = !o(T)),
                        y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", r, !1) : i.attachEvent && i.attachEvent("onunload", r)),
                        (d.attributes = lt(function (t) {
                            return (t.className = "i"), !t.getAttribute("className");
                        })),
                        (d.getElementsByTagName = lt(function (t) {
                            return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length;
                        })),
                        (d.getElementsByClassName = G.test(T.getElementsByClassName)),
                        (d.getById = lt(function (t) {
                            return (a.appendChild(t).id = E), !T.getElementsByName || !T.getElementsByName(E).length;
                        })),
                        d.getById
                            ? ((b.filter.ID = function (t) {
                                  var e = t.replace(et, h);
                                  return function (t) {
                                      return t.getAttribute("id") === e;
                                  };
                              }),
                              (b.find.ID = function (t, e) {
                                  if (void 0 !== e.getElementById && C) {
                                      var i = e.getElementById(t);
                                      return i ? [i] : [];
                                  }
                              }))
                            : ((b.filter.ID = function (t) {
                                  var i = t.replace(et, h);
                                  return function (t) {
                                      var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                      return e && e.value === i;
                                  };
                              }),
                              (b.find.ID = function (t, e) {
                                  if (void 0 !== e.getElementById && C) {
                                      var i,
                                          n,
                                          r,
                                          s = e.getElementById(t);
                                      if (s) {
                                          if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                          for (r = e.getElementsByName(t), n = 0; (s = r[n++]); ) if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = d.getElementsByTagName
                            ? function (t, e) {
                                  return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : d.qsa ? e.querySelectorAll(t) : void 0;
                              }
                            : function (t, e) {
                                  var i,
                                      n = [],
                                      r = 0,
                                      s = e.getElementsByTagName(t);
                                  if ("*" !== t) return s;
                                  for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
                                  return n;
                              }),
                        (b.find.CLASS =
                            d.getElementsByClassName &&
                            function (t, e) {
                                if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t);
                            }),
                        (c = []),
                        (g = []),
                        (d.qsa = G.test(T.querySelectorAll)) &&
                            (lt(function (t) {
                                (a.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"),
                                    t.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + j + ")"),
                                    t.querySelectorAll("[id~=" + E + "-]").length || g.push("~="),
                                    t.querySelectorAll(":checked").length || g.push(":checked"),
                                    t.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]");
                            }),
                            lt(function (t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = T.createElement("input");
                                e.setAttribute("type", "hidden"),
                                    t.appendChild(e).setAttribute("name", "D"),
                                    t.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="),
                                    2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                    (a.appendChild(t).disabled = !0),
                                    2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                    t.querySelectorAll("*,:x"),
                                    g.push(",.*:");
                            })),
                        (d.matchesSelector = G.test((_ = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                            lt(function (t) {
                                (d.disconnectedMatch = _.call(t, "*")), _.call(t, "[s!='']:x"), c.push("!=", W);
                            }),
                        (g = g.length && new RegExp(g.join("|"))),
                        (c = c.length && new RegExp(c.join("|"))),
                        (e = G.test(a.compareDocumentPosition)),
                        (v =
                            e || G.test(a.contains)
                                ? function (t, e) {
                                      var i = 9 === t.nodeType ? t.documentElement : t,
                                          n = e && e.parentNode;
                                      return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                  }
                                : function (t, e) {
                                      if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                      return !1;
                                  }),
                        (D = e
                            ? function (t, e) {
                                  if (t === e) return (u = !0), 0;
                                  var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                  return (
                                      i ||
                                      (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!d.sortDetached && e.compareDocumentPosition(t) === i)
                                          ? t === T || (t.ownerDocument === y && v(y, t))
                                              ? -1
                                              : e === T || (e.ownerDocument === y && v(y, e))
                                              ? 1
                                              : l
                                              ? L(l, t) - L(l, e)
                                              : 0
                                          : 4 & i
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (t, e) {
                                  if (t === e) return (u = !0), 0;
                                  var i,
                                      n = 0,
                                      r = t.parentNode,
                                      s = e.parentNode,
                                      o = [t],
                                      a = [e];
                                  if (!r || !s) return t === T ? -1 : e === T ? 1 : r ? -1 : s ? 1 : l ? L(l, t) - L(l, e) : 0;
                                  if (r === s) return ct(t, e);
                                  for (i = t; (i = i.parentNode); ) o.unshift(i);
                                  for (i = e; (i = i.parentNode); ) a.unshift(i);
                                  for (; o[n] === a[n]; ) n++;
                                  return n ? ct(o[n], a[n]) : o[n] === y ? -1 : a[n] === y ? 1 : 0;
                              })),
                    T
                );
            }),
            (st.matches = function (t, e) {
                return st(t, null, null, e);
            }),
            (st.matchesSelector = function (t, e) {
                if (((t.ownerDocument || t) !== T && x(t), (e = e.replace(Y, "='$1']")), d.matchesSelector && C && !O[e + " "] && (!c || !c.test(e)) && (!g || !g.test(e))))
                    try {
                        var i = _.call(t, e);
                        if (i || d.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                    } catch (t) {}
                return 0 < st(e, T, null, [t]).length;
            }),
            (st.contains = function (t, e) {
                return (t.ownerDocument || t) !== T && x(t), v(t, e);
            }),
            (st.attr = function (t, e) {
                (t.ownerDocument || t) !== T && x(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && P.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                return void 0 !== n ? n : d.attributes || !C ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
            }),
            (st.escape = function (t) {
                return (t + "").replace(it, nt);
            }),
            (st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (st.uniqueSort = function (t) {
                var e,
                    i = [],
                    n = 0,
                    r = 0;
                if (((u = !d.detectDuplicates), (l = !d.sortStable && t.slice(0)), t.sort(D), u)) {
                    for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
                    for (; n--; ) t.splice(i[n], 1);
                }
                return (l = null), t;
            }),
            (s = st.getText = function (t) {
                var e,
                    i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
                    } else if (3 === r || 4 === r) return t.nodeValue;
                } else for (; (e = t[n++]); ) i += s(e);
                return i;
            }),
            ((b = st.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(et, h)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, h)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && st.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            i = !t[6] && t[2];
                        return Q.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : i && X.test(i) && (e = p(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, h).toLowerCase();
                        return "*" === t
                            ? function () {
                                  return !0;
                              }
                            : function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === e;
                              };
                    },
                    CLASS: function (t) {
                        var e = k[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) &&
                                k(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (i, n, r) {
                        return function (t) {
                            var e = st.attr(t, i);
                            return null == e
                                ? "!=" === n
                                : !n ||
                                      ((e += ""),
                                      "=" === n
                                          ? e === r
                                          : "!=" === n
                                          ? e !== r
                                          : "^=" === n
                                          ? r && 0 === e.indexOf(r)
                                          : "*=" === n
                                          ? r && -1 < e.indexOf(r)
                                          : "$=" === n
                                          ? r && e.slice(-r.length) === r
                                          : "~=" === n
                                          ? -1 < (" " + e.replace(B, " ") + " ").indexOf(r)
                                          : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function (p, t, e, m, g) {
                        var _ = "nth" !== p.slice(0, 3),
                            v = "last" !== p.slice(-4),
                            y = "of-type" === t;
                        return 1 === m && 0 === g
                            ? function (t) {
                                  return !!t.parentNode;
                              }
                            : function (t, e, i) {
                                  var n,
                                      r,
                                      s,
                                      o,
                                      a,
                                      l,
                                      u = _ != v ? "nextSibling" : "previousSibling",
                                      c = t.parentNode,
                                      h = y && t.nodeName.toLowerCase(),
                                      f = !i && !y,
                                      d = !1;
                                  if (c) {
                                      if (_) {
                                          for (; u; ) {
                                              for (o = t; (o = o[u]); ) if (y ? o.nodeName.toLowerCase() === h : 1 === o.nodeType) return !1;
                                              l = u = "only" === p && !l && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((l = [v ? c.firstChild : c.lastChild]), v && f)) {
                                          for (
                                              d = (a = (n = (r = (s = (o = c)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === S && n[1]) && n[2], o = a && c.childNodes[a];
                                              (o = (++a && o && o[u]) || (d = a = 0) || l.pop());

                                          )
                                              if (1 === o.nodeType && ++d && o === t) {
                                                  r[p] = [S, a, d];
                                                  break;
                                              }
                                      } else if ((f && (d = a = (n = (r = (s = (o = t)[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === S && n[1]), !1 === d))
                                          for (
                                              ;
                                              (o = (++a && o && o[u]) || (d = a = 0) || l.pop()) &&
                                              ((y ? o.nodeName.toLowerCase() !== h : 1 !== o.nodeType) || !++d || (f && ((r = (s = o[E] || (o[E] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] = [S, d]), o !== t));

                                          );
                                      return (d -= g) === m || (d % m == 0 && 0 <= d / m);
                                  }
                              };
                    },
                    PSEUDO: function (t, s) {
                        var e,
                            o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return o[E]
                            ? o(s)
                            : 1 < o.length
                            ? ((e = [t, t, "", s]),
                              b.setFilters.hasOwnProperty(t.toLowerCase())
                                  ? at(function (t, e) {
                                        for (var i, n = o(t, s), r = n.length; r--; ) t[(i = L(t, n[r]))] = !(e[i] = n[r]);
                                    })
                                  : function (t) {
                                        return o(t, 0, e);
                                    })
                            : o;
                    },
                },
                pseudos: {
                    not: at(function (t) {
                        var n = [],
                            r = [],
                            a = f(t.replace(q, "$1"));
                        return a[E]
                            ? at(function (t, e, i, n) {
                                  for (var r, s = a(t, null, n, []), o = t.length; o--; ) (r = s[o]) && (t[o] = !(e[o] = r));
                              })
                            : function (t, e, i) {
                                  return (n[0] = t), a(n, null, i, r), (n[0] = null), !r.pop();
                              };
                    }),
                    has: at(function (e) {
                        return function (t) {
                            return 0 < st(e, t).length;
                        };
                    }),
                    contains: at(function (e) {
                        return (
                            (e = e.replace(et, h)),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || s(t)).indexOf(e);
                            }
                        );
                    }),
                    lang: at(function (i) {
                        return (
                            V.test(i || "") || st.error("unsupported lang: " + i),
                            (i = i.replace(et, h).toLowerCase()),
                            function (t) {
                                var e;
                                do {
                                    if ((e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id;
                    },
                    root: function (t) {
                        return t === a;
                    },
                    focus: function (t) {
                        return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: dt(!1),
                    disabled: dt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !b.pseudos.empty(t);
                    },
                    header: function (t) {
                        return J.test(t.nodeName);
                    },
                    input: function (t) {
                        return K.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: pt(function () {
                        return [0];
                    }),
                    last: pt(function (t, e) {
                        return [e - 1];
                    }),
                    eq: pt(function (t, e, i) {
                        return [i < 0 ? i + e : i];
                    }),
                    even: pt(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    odd: pt(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    lt: pt(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; 0 <= --n; ) t.push(n);
                        return t;
                    }),
                    gt: pt(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                        return t;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                b.pseudos[t] = ht(t);
            for (t in { submit: !0, reset: !0 }) b.pseudos[t] = ft(t);
            function gt() {}
            function _t(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n;
            }
            function vt(a, t, e) {
                var l = t.dir,
                    u = t.next,
                    c = u || l,
                    h = e && "parentNode" === c,
                    f = n++;
                return t.first
                    ? function (t, e, i) {
                          for (; (t = t[l]); ) if (1 === t.nodeType || h) return a(t, e, i);
                          return !1;
                      }
                    : function (t, e, i) {
                          var n,
                              r,
                              s,
                              o = [S, f];
                          if (i) {
                              for (; (t = t[l]); ) if ((1 === t.nodeType || h) && a(t, e, i)) return !0;
                          } else
                              for (; (t = t[l]); )
                                  if (1 === t.nodeType || h)
                                      if (((r = (s = t[E] || (t[E] = {}))[t.uniqueID] || (s[t.uniqueID] = {})), u && u === t.nodeName.toLowerCase())) t = t[l] || t;
                                      else {
                                          if ((n = r[c]) && n[0] === S && n[1] === f) return (o[2] = n[2]);
                                          if (((r[c] = o)[2] = a(t, e, i))) return !0;
                                      }
                          return !1;
                      };
            }
            function yt(r) {
                return 1 < r.length
                    ? function (t, e, i) {
                          for (var n = r.length; n--; ) if (!r[n](t, e, i)) return !1;
                          return !0;
                      }
                    : r[0];
            }
            function bt(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++) (s = t[a]) && ((i && !i(s, n, r)) || (o.push(s), u && e.push(a)));
                return o;
            }
            function wt(d, p, m, g, _, t) {
                return (
                    g && !g[E] && (g = wt(g)),
                    _ && !_[E] && (_ = wt(_, t)),
                    at(function (t, e, i, n) {
                        var r,
                            s,
                            o,
                            a = [],
                            l = [],
                            u = e.length,
                            c =
                                t ||
                                (function (t, e, i) {
                                    for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                                    return i;
                                })(p || "*", i.nodeType ? [i] : i, []),
                            h = !d || (!t && p) ? c : bt(c, a, d, i, n),
                            f = m ? (_ || (t ? d : u || g) ? [] : e) : h;
                        if ((m && m(h, f, i, n), g)) for (r = bt(f, l), g(r, [], i, n), s = r.length; s--; ) (o = r[s]) && (f[l[s]] = !(h[l[s]] = o));
                        if (t) {
                            if (_ || d) {
                                if (_) {
                                    for (r = [], s = f.length; s--; ) (o = f[s]) && r.push((h[s] = o));
                                    _(null, (f = []), r, n);
                                }
                                for (s = f.length; s--; ) (o = f[s]) && -1 < (r = _ ? L(t, o) : a[s]) && (t[r] = !(e[r] = o));
                            }
                        } else (f = bt(f === e ? f.splice(u, f.length) : f)), _ ? _(null, e, f, n) : R.apply(e, f);
                    })
                );
            }
            function xt(t) {
                for (
                    var r,
                        e,
                        i,
                        n = t.length,
                        s = b.relative[t[0].type],
                        o = s || b.relative[" "],
                        a = s ? 1 : 0,
                        l = vt(
                            function (t) {
                                return t === r;
                            },
                            o,
                            !0
                        ),
                        u = vt(
                            function (t) {
                                return -1 < L(r, t);
                            },
                            o,
                            !0
                        ),
                        c = [
                            function (t, e, i) {
                                var n = (!s && (i || e !== w)) || ((r = e).nodeType ? l(t, e, i) : u(t, e, i));
                                return (r = null), n;
                            },
                        ];
                    a < n;
                    a++
                )
                    if ((e = b.relative[t[a].type])) c = [vt(yt(c), e)];
                    else {
                        if ((e = b.filter[t[a].type].apply(null, t[a].matches))[E]) {
                            for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                            return wt(1 < a && yt(c), 1 < a && _t(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(q, "$1"), e, a < i && xt(t.slice(a, i)), i < n && xt((t = t.slice(i))), i < n && _t(t));
                        }
                        c.push(e);
                    }
                return yt(c);
            }
            return (
                (gt.prototype = b.filters = b.pseudos),
                (b.setFilters = new gt()),
                (p = st.tokenize = function (t, e) {
                    var i,
                        n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        u = A[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (o = t, a = [], l = b.preFilter; o; ) {
                        for (s in ((i && !(n = $.exec(o))) || (n && (o = o.slice(n[0].length) || o), a.push((r = []))),
                        (i = !1),
                        (n = U.exec(o)) && ((i = n.shift()), r.push({ value: i, type: n[0].replace(q, " ") }), (o = o.slice(i.length))),
                        b.filter))
                            !(n = Q[s].exec(o)) || (l[s] && !(n = l[s](n))) || ((i = n.shift()), r.push({ value: i, type: s, matches: n }), (o = o.slice(i.length)));
                        if (!i) break;
                    }
                    return e ? o.length : o ? st.error(t) : A(t, a).slice(0);
                }),
                (f = st.compile = function (t, e) {
                    var i,
                        n = [],
                        r = [],
                        s = O[t + " "];
                    if (!s) {
                        for (i = (e = e || p(t)).length; i--; ) (s = xt(e[i]))[E] ? n.push(s) : r.push(s);
                        (s = O(
                            t,
                            (function (g, _) {
                                function t(t, e, i, n, r) {
                                    var s,
                                        o,
                                        a,
                                        l = 0,
                                        u = "0",
                                        c = t && [],
                                        h = [],
                                        f = w,
                                        d = t || (y && b.find.TAG("*", r)),
                                        p = (S += null == f ? 1 : Math.random() || 0.1),
                                        m = d.length;
                                    for (r && (w = e === T || e || r); u !== m && null != (s = d[u]); u++) {
                                        if (y && s) {
                                            for (o = 0, e || s.ownerDocument === T || (x(s), (i = !C)); (a = g[o++]); )
                                                if (a(s, e || T, i)) {
                                                    n.push(s);
                                                    break;
                                                }
                                            r && (S = p);
                                        }
                                        v && ((s = !a && s) && l--, t && c.push(s));
                                    }
                                    if (((l += u), v && u !== l)) {
                                        for (o = 0; (a = _[o++]); ) a(c, h, e, i);
                                        if (t) {
                                            if (0 < l) for (; u--; ) c[u] || h[u] || (h[u] = I.call(n));
                                            h = bt(h);
                                        }
                                        R.apply(n, h), r && !t && 0 < h.length && 1 < l + _.length && st.uniqueSort(n);
                                    }
                                    return r && ((S = p), (w = f)), c;
                                }
                                var v = 0 < _.length,
                                    y = 0 < g.length;
                                return v ? at(t) : t;
                            })(r, n)
                        )).selector = t;
                    }
                    return s;
                }),
                (m = st.select = function (t, e, i, n) {
                    var r,
                        s,
                        o,
                        a,
                        l,
                        u = "function" == typeof t && t,
                        c = !n && p((t = u.selector || t));
                    if (((i = i || []), 1 === c.length)) {
                        if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === e.nodeType && C && b.relative[s[1].type]) {
                            if (!(e = (b.find.ID(o.matches[0].replace(et, h), e) || [])[0])) return i;
                            u && (e = e.parentNode), (t = t.slice(s.shift().value.length));
                        }
                        for (r = Q.needsContext.test(t) ? 0 : s.length; r-- && ((o = s[r]), !b.relative[(a = o.type)]); )
                            if ((l = b.find[a]) && (n = l(o.matches[0].replace(et, h), (tt.test(s[0].type) && mt(e.parentNode)) || e))) {
                                if ((s.splice(r, 1), !(t = n.length && _t(s)))) return R.apply(i, n), i;
                                break;
                            }
                    }
                    return (u || f(t, c))(n, e, !C, i, !e || (tt.test(t) && mt(e.parentNode)) || e), i;
                }),
                (d.sortStable = E.split("").sort(D).join("") === E),
                (d.detectDuplicates = !!u),
                x(),
                (d.sortDetached = lt(function (t) {
                    return 1 & t.compareDocumentPosition(T.createElement("fieldset"));
                })),
                lt(function (t) {
                    return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                    ut("type|href|height|width", function (t, e, i) {
                        if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                    }),
                (d.attributes &&
                    lt(function (t) {
                        return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                    })) ||
                    ut("value", function (t, e, i) {
                        if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                    }),
                lt(function (t) {
                    return null == t.getAttribute("disabled");
                }) ||
                    ut(j, function (t, e, i) {
                        var n;
                        if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                    }),
                st
            );
        })(T);
        (E.find = d), (E.expr = d.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = d.uniqueSort), (E.text = d.getText), (E.isXMLDoc = d.isXML), (E.contains = d.contains), (E.escapeSelector = d.escape);
        function p(t, e, i) {
            for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && E(t).is(i)) break;
                    n.push(t);
                }
            return n;
        }
        function x(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        }
        var S = E.expr.match.needsContext;
        function k(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function O(t, i, n) {
            return y(i)
                ? E.grep(t, function (t, e) {
                      return !!i.call(t, e, t) !== n;
                  })
                : i.nodeType
                ? E.grep(t, function (t) {
                      return (t === i) !== n;
                  })
                : "string" != typeof i
                ? E.grep(t, function (t) {
                      return -1 < r.call(i, t) !== n;
                  })
                : E.filter(i, t, n);
        }
        (E.filter = function (t, e, i) {
            var n = e[0];
            return (
                i && (t = ":not(" + t + ")"),
                1 === e.length && 1 === n.nodeType
                    ? E.find.matchesSelector(n, t)
                        ? [n]
                        : []
                    : E.find.matches(
                          t,
                          E.grep(e, function (t) {
                              return 1 === t.nodeType;
                          })
                      )
            );
        }),
            E.fn.extend({
                find: function (t) {
                    var e,
                        i,
                        n = this.length,
                        r = this;
                    if ("string" != typeof t)
                        return this.pushStack(
                            E(t).filter(function () {
                                for (e = 0; e < n; e++) if (E.contains(r[e], this)) return !0;
                            })
                        );
                    for (i = this.pushStack([]), e = 0; e < n; e++) E.find(t, r[e], i);
                    return 1 < n ? E.uniqueSort(i) : i;
                },
                filter: function (t) {
                    return this.pushStack(O(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(O(this, t || [], !0));
                },
                is: function (t) {
                    return !!O(this, "string" == typeof t && S.test(t) ? E(t) : t || [], !1).length;
                },
            });
        var D,
            P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((E.fn.init = function (t, e, i) {
            var n, r;
            if (!t) return this;
            if (((i = i || D), "string" != typeof t)) return t.nodeType ? ((this[0] = t), (this.length = 1), this) : y(t) ? (void 0 !== i.ready ? i.ready(t) : t(E)) : E.makeArray(t, this);
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : P.exec(t)) || (!n[1] && e)) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (((e = e instanceof E ? e[0] : e), E.merge(this, E.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), A.test(n[1]) && E.isPlainObject(e))) for (n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            return (r = C.getElementById(n[2])) && ((this[0] = r), (this.length = 1)), this;
        }).prototype = E.fn),
            (D = E(C));
        var I = /^(?:parents|prev(?:Until|All))/,
            N = { children: !0, contents: !0, next: !0, prev: !0 };
        function R(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; );
            return t;
        }
        E.fn.extend({
            has: function (t) {
                var e = E(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; t < i; t++) if (E.contains(this, e[t])) return !0;
                });
            },
            closest: function (t, e) {
                var i,
                    n = 0,
                    r = this.length,
                    s = [],
                    o = "string" != typeof t && E(t);
                if (!S.test(t))
                    for (; n < r; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && E.find.matchesSelector(i, t))) {
                                s.push(i);
                                break;
                            }
                return this.pushStack(1 < s.length ? E.uniqueSort(s) : s);
            },
            index: function (t) {
                return t ? ("string" == typeof t ? r.call(E(t), this[0]) : r.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (t, e) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))));
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            },
        }),
            E.each(
                {
                    parent: function (t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null;
                    },
                    parents: function (t) {
                        return p(t, "parentNode");
                    },
                    parentsUntil: function (t, e, i) {
                        return p(t, "parentNode", i);
                    },
                    next: function (t) {
                        return R(t, "nextSibling");
                    },
                    prev: function (t) {
                        return R(t, "previousSibling");
                    },
                    nextAll: function (t) {
                        return p(t, "nextSibling");
                    },
                    prevAll: function (t) {
                        return p(t, "previousSibling");
                    },
                    nextUntil: function (t, e, i) {
                        return p(t, "nextSibling", i);
                    },
                    prevUntil: function (t, e, i) {
                        return p(t, "previousSibling", i);
                    },
                    siblings: function (t) {
                        return x((t.parentNode || {}).firstChild, t);
                    },
                    children: function (t) {
                        return x(t.firstChild);
                    },
                    contents: function (t) {
                        return k(t, "iframe") ? t.contentDocument : (k(t, "template") && (t = t.content || t), E.merge([], t.childNodes));
                    },
                },
                function (n, r) {
                    E.fn[n] = function (t, e) {
                        var i = E.map(this, r, t);
                        return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = E.filter(e, i)), 1 < this.length && (N[n] || E.uniqueSort(i), I.test(n) && i.reverse()), this.pushStack(i);
                    };
                }
            );
        var M = /[^\x20\t\r\n\f]+/g;
        function L(t) {
            return t;
        }
        function j(t) {
            throw t;
        }
        function F(t, e, i, n) {
            var r;
            try {
                t && y((r = t.promise)) ? r.call(t).done(e).fail(i) : t && y((r = t.then)) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n));
            } catch (t) {
                i.apply(void 0, [t]);
            }
        }
        (E.Callbacks = function (n) {
            n =
                "string" == typeof n
                    ? (function (t) {
                          var i = {};
                          return (
                              E.each(t.match(M) || [], function (t, e) {
                                  i[e] = !0;
                              }),
                              i
                          );
                      })(n)
                    : E.extend({}, n);
            function i() {
                for (s = s || n.once, e = r = !0; a.length; l = -1) for (t = a.shift(); ++l < o.length; ) !1 === o[l].apply(t[0], t[1]) && n.stopOnFalse && ((l = o.length), (t = !1));
                n.memory || (t = !1), (r = !1), s && (o = t ? [] : "");
            }
            var r,
                t,
                e,
                s,
                o = [],
                a = [],
                l = -1,
                u = {
                    add: function () {
                        return (
                            o &&
                                (t && !r && ((l = o.length - 1), a.push(t)),
                                (function i(t) {
                                    E.each(t, function (t, e) {
                                        y(e) ? (n.unique && u.has(e)) || o.push(e) : e && e.length && "string" !== w(e) && i(e);
                                    });
                                })(arguments),
                                t && !r && i()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            E.each(arguments, function (t, e) {
                                for (var i; -1 < (i = E.inArray(e, o, i)); ) o.splice(i, 1), i <= l && l--;
                            }),
                            this
                        );
                    },
                    has: function (t) {
                        return t ? -1 < E.inArray(t, o) : 0 < o.length;
                    },
                    empty: function () {
                        return (o = o && []), this;
                    },
                    disable: function () {
                        return (s = a = []), (o = t = ""), this;
                    },
                    disabled: function () {
                        return !o;
                    },
                    lock: function () {
                        return (s = a = []), t || r || (o = t = ""), this;
                    },
                    locked: function () {
                        return !!s;
                    },
                    fireWith: function (t, e) {
                        return s || ((e = [t, (e = e || []).slice ? e.slice() : e]), a.push(e), r || i()), this;
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!e;
                    },
                };
            return u;
        }),
            E.extend({
                Deferred: function (t) {
                    var s = [
                            ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                            ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                        ],
                        r = "pending",
                        o = {
                            state: function () {
                                return r;
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this;
                            },
                            catch: function (t) {
                                return o.then(null, t);
                            },
                            pipe: function () {
                                var r = arguments;
                                return E.Deferred(function (n) {
                                    E.each(s, function (t, e) {
                                        var i = y(r[e[4]]) && r[e[4]];
                                        a[e[1]](function () {
                                            var t = i && i.apply(this, arguments);
                                            t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments);
                                        });
                                    }),
                                        (r = null);
                                }).promise();
                            },
                            then: function (e, i, n) {
                                var l = 0;
                                function u(r, s, o, a) {
                                    return function () {
                                        function t() {
                                            var t, e;
                                            if (!(r < l)) {
                                                if ((t = o.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                                (e = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                                    y(e)
                                                        ? a
                                                            ? e.call(t, u(l, s, L, a), u(l, s, j, a))
                                                            : (l++, e.call(t, u(l, s, L, a), u(l, s, j, a), u(l, s, L, s.notifyWith)))
                                                        : (o !== L && ((i = void 0), (n = [t])), (a || s.resolveWith)(i, n));
                                            }
                                        }
                                        var i = this,
                                            n = arguments,
                                            e = a
                                                ? t
                                                : function () {
                                                      try {
                                                          t();
                                                      } catch (t) {
                                                          E.Deferred.exceptionHook && E.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (o !== j && ((i = void 0), (n = [t])), s.rejectWith(i, n));
                                                      }
                                                  };
                                        r ? e() : (E.Deferred.getStackHook && (e.stackTrace = E.Deferred.getStackHook()), T.setTimeout(e));
                                    };
                                }
                                return E.Deferred(function (t) {
                                    s[0][3].add(u(0, t, y(n) ? n : L, t.notifyWith)), s[1][3].add(u(0, t, y(e) ? e : L)), s[2][3].add(u(0, t, y(i) ? i : j));
                                }).promise();
                            },
                            promise: function (t) {
                                return null != t ? E.extend(t, o) : o;
                            },
                        },
                        a = {};
                    return (
                        E.each(s, function (t, e) {
                            var i = e[2],
                                n = e[5];
                            (o[e[1]] = i.add),
                                n &&
                                    i.add(
                                        function () {
                                            r = n;
                                        },
                                        s[3 - t][2].disable,
                                        s[3 - t][3].disable,
                                        s[0][2].lock,
                                        s[0][3].lock
                                    ),
                                i.add(e[3].fire),
                                (a[e[0]] = function () {
                                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;
                                }),
                                (a[e[0] + "With"] = i.fireWith);
                        }),
                        o.promise(a),
                        t && t.call(a, a),
                        a
                    );
                },
                when: function (t) {
                    function e(e) {
                        return function (t) {
                            (r[e] = this), (s[e] = 1 < arguments.length ? a.call(arguments) : t), --i || o.resolveWith(r, s);
                        };
                    }
                    var i = arguments.length,
                        n = i,
                        r = Array(n),
                        s = a.call(arguments),
                        o = E.Deferred();
                    if (i <= 1 && (F(t, o.done(e(n)).resolve, o.reject, !i), "pending" === o.state() || y(s[n] && s[n].then))) return o.then();
                    for (; n--; ) F(s[n], e(n), o.reject);
                    return o.promise();
                },
            });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (E.Deferred.exceptionHook = function (t, e) {
            T.console && T.console.warn && t && z.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
        }),
            (E.readyException = function (t) {
                T.setTimeout(function () {
                    throw t;
                });
            });
        var H = E.Deferred();
        function W() {
            C.removeEventListener("DOMContentLoaded", W), T.removeEventListener("load", W), E.ready();
        }
        (E.fn.ready = function (t) {
            return (
                H.then(t).catch(function (t) {
                    E.readyException(t);
                }),
                this
            );
        }),
            E.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (!0 === t ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== t && 0 < --E.readyWait) || H.resolveWith(C, [E]);
                },
            }),
            (E.ready.then = H.then),
            "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll) ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", W), T.addEventListener("load", W));
        var B = function (t, e, i, n, r, s, o) {
                var a = 0,
                    l = t.length,
                    u = null == i;
                if ("object" === w(i)) for (a in ((r = !0), i)) B(t, e, a, i[a], !0, s, o);
                else if (
                    void 0 !== n &&
                    ((r = !0),
                    y(n) || (o = !0),
                    u &&
                        (e = o
                            ? (e.call(t, n), null)
                            : ((u = e),
                              function (t, e, i) {
                                  return u.call(E(t), i);
                              })),
                    e)
                )
                    for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : u ? e.call(t) : l ? e(t[0], i) : s;
            },
            q = /^-ms-/,
            $ = /-([a-z])/g;
        function U(t, e) {
            return e.toUpperCase();
        }
        function Y(t) {
            return t.replace(q, "ms-").replace($, U);
        }
        function X(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        }
        function V() {
            this.expando = E.expando + V.uid++;
        }
        (V.uid = 1),
            (V.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || ((e = {}), X(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
                },
                set: function (t, e, i) {
                    var n,
                        r = this.cache(t);
                    if ("string" == typeof e) r[Y(e)] = i;
                    else for (n in e) r[Y(n)] = e[n];
                    return r;
                },
                get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
                },
                access: function (t, e, i) {
                    return void 0 === e || (e && "string" == typeof e && void 0 === i) ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e);
                },
                remove: function (t, e) {
                    var i,
                        n = t[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== e) {
                            i = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in n ? [e] : e.match(M) || []).length;
                            for (; i--; ) delete n[e[i]];
                        }
                        (void 0 !== e && !E.isEmptyObject(n)) || (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                    }
                },
                hasData: function (t) {
                    var e = t[this.expando];
                    return void 0 !== e && !E.isEmptyObject(e);
                },
            });
        var Q = new V(),
            K = new V(),
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            G = /[A-Z]/g;
        function Z(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (((n = "data-" + e.replace(G, "-$&").toLowerCase()), "string" == typeof (i = t.getAttribute(n)))) {
                    try {
                        i = (function (t) {
                            return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : J.test(t) ? JSON.parse(t) : t));
                        })(i);
                    } catch (t) {}
                    K.set(t, e, i);
                } else i = void 0;
            return i;
        }
        E.extend({
            hasData: function (t) {
                return K.hasData(t) || Q.hasData(t);
            },
            data: function (t, e, i) {
                return K.access(t, e, i);
            },
            removeData: function (t, e) {
                K.remove(t, e);
            },
            _data: function (t, e, i) {
                return Q.access(t, e, i);
            },
            _removeData: function (t, e) {
                Q.remove(t, e);
            },
        }),
            E.fn.extend({
                data: function (i, t) {
                    var e,
                        n,
                        r,
                        s = this[0],
                        o = s && s.attributes;
                    if (void 0 !== i)
                        return "object" == typeof i
                            ? this.each(function () {
                                  K.set(this, i);
                              })
                            : B(
                                  this,
                                  function (t) {
                                      var e;
                                      if (s && void 0 === t) {
                                          if (void 0 !== (e = K.get(s, i))) return e;
                                          if (void 0 !== (e = Z(s, i))) return e;
                                      } else
                                          this.each(function () {
                                              K.set(this, i, t);
                                          });
                                  },
                                  null,
                                  t,
                                  1 < arguments.length,
                                  null,
                                  !0
                              );
                    if (this.length && ((r = K.get(s)), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                        for (e = o.length; e--; ) o[e] && 0 === (n = o[e].name).indexOf("data-") && ((n = Y(n.slice(5))), Z(s, n, r[n]));
                        Q.set(s, "hasDataAttrs", !0);
                    }
                    return r;
                },
                removeData: function (t) {
                    return this.each(function () {
                        K.remove(this, t);
                    });
                },
            }),
            E.extend({
                queue: function (t, e, i) {
                    var n;
                    if (t) return (e = (e || "fx") + "queue"), (n = Q.get(t, e)), i && (!n || Array.isArray(i) ? (n = Q.access(t, e, E.makeArray(i))) : n.push(i)), n || [];
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var i = E.queue(t, e),
                        n = i.length,
                        r = i.shift(),
                        s = E._queueHooks(t, e);
                    "inprogress" === r && ((r = i.shift()), n--),
                        r &&
                            ("fx" === e && i.unshift("inprogress"),
                            delete s.stop,
                            r.call(
                                t,
                                function () {
                                    E.dequeue(t, e);
                                },
                                s
                            )),
                        !n && s && s.empty.fire();
                },
                _queueHooks: function (t, e) {
                    var i = e + "queueHooks";
                    return (
                        Q.get(t, i) ||
                        Q.access(t, i, {
                            empty: E.Callbacks("once memory").add(function () {
                                Q.remove(t, [e + "queue", i]);
                            }),
                        })
                    );
                },
            }),
            E.fn.extend({
                queue: function (e, i) {
                    var t = 2;
                    return (
                        "string" != typeof e && ((i = e), (e = "fx"), t--),
                        arguments.length < t
                            ? E.queue(this[0], e)
                            : void 0 === i
                            ? this
                            : this.each(function () {
                                  var t = E.queue(this, e, i);
                                  E._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && E.dequeue(this, e);
                              })
                    );
                },
                dequeue: function (t) {
                    return this.each(function () {
                        E.dequeue(this, t);
                    });
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", []);
                },
                promise: function (t, e) {
                    function i() {
                        --r || s.resolveWith(o, [o]);
                    }
                    var n,
                        r = 1,
                        s = E.Deferred(),
                        o = this,
                        a = this.length;
                    for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--; ) (n = Q.get(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(i));
                    return i(), s.promise(e);
                },
            });
        function tt(t, e, i, n) {
            var r,
                s,
                o = {};
            for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
            for (s in ((r = i.apply(t, n || [])), e)) t.style[s] = o[s];
            return r;
        }
        var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            it = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
            nt = ["Top", "Right", "Bottom", "Left"],
            rt = function (t, e) {
                return "none" === (t = e || t).style.display || ("" === t.style.display && E.contains(t.ownerDocument, t) && "none" === E.css(t, "display"));
            };
        function st(t, e, i, n) {
            var r,
                s,
                o = 20,
                a = n
                    ? function () {
                          return n.cur();
                      }
                    : function () {
                          return E.css(t, e, "");
                      },
                l = a(),
                u = (i && i[3]) || (E.cssNumber[e] ? "" : "px"),
                c = (E.cssNumber[e] || ("px" !== u && +l)) && it.exec(E.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; o--; ) E.style(t, e, c + u), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0), (c /= s);
                (c *= 2), E.style(t, e, c + u), (i = i || []);
            }
            return i && ((c = +c || +l || 0), (r = i[1] ? c + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = u), (n.start = c), (n.end = r))), r;
        }
        var ot = {};
        function at(t, e) {
            for (var i, n, r = [], s = 0, o = t.length; s < o; s++)
                (n = t[s]).style &&
                    ((i = n.style.display),
                    e
                        ? ("none" === i && ((r[s] = Q.get(n, "display") || null), r[s] || (n.style.display = "")),
                          "" === n.style.display &&
                              rt(n) &&
                              (r[s] =
                                  ((h = u = l = void 0),
                                  (u = (a = n).ownerDocument),
                                  (c = a.nodeName),
                                  (h = ot[c]) || ((l = u.body.appendChild(u.createElement(c))), (h = E.css(l, "display")), l.parentNode.removeChild(l), "none" === h && (h = "block"), (ot[c] = h)))))
                        : "none" !== i && ((r[s] = "none"), Q.set(n, "display", i)));
            var a, l, u, c, h;
            for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
            return t;
        }
        E.fn.extend({
            show: function () {
                return at(this, !0);
            },
            hide: function () {
                return at(this);
            },
            toggle: function (t) {
                return "boolean" == typeof t
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          rt(this) ? E(this).show() : E(this).hide();
                      });
            },
        });
        var lt = /^(?:checkbox|radio)$/i,
            ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ct = /^$|^module$|\/(?:java|ecma)script/i,
            ht = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        function ft(t, e) {
            var i;
            return (i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && k(t, e)) ? E.merge([t], i) : i;
        }
        function dt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"));
        }
        (ht.optgroup = ht.option), (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead), (ht.th = ht.td);
        var pt,
            mt,
            gt = /<|&#?\w+;/;
        function _t(t, e, i, n, r) {
            for (var s, o, a, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++)
                if ((s = t[d]) || 0 === s)
                    if ("object" === w(s)) E.merge(f, s.nodeType ? [s] : s);
                    else if (gt.test(s)) {
                        for (o = o || h.appendChild(e.createElement("div")), a = (ut.exec(s) || ["", ""])[1].toLowerCase(), l = ht[a] || ht._default, o.innerHTML = l[1] + E.htmlPrefilter(s) + l[2], c = l[0]; c--; ) o = o.lastChild;
                        E.merge(f, o.childNodes), ((o = h.firstChild).textContent = "");
                    } else f.push(e.createTextNode(s));
            for (h.textContent = "", d = 0; (s = f[d++]); )
                if (n && -1 < E.inArray(s, n)) r && r.push(s);
                else if (((u = E.contains(s.ownerDocument, s)), (o = ft(h.appendChild(s), "script")), u && dt(o), i)) for (c = 0; (s = o[c++]); ) ct.test(s.type || "") && i.push(s);
            return h;
        }
        (pt = C.createDocumentFragment().appendChild(C.createElement("div"))),
            (mt = C.createElement("input")).setAttribute("type", "radio"),
            mt.setAttribute("checked", "checked"),
            mt.setAttribute("name", "t"),
            pt.appendChild(mt),
            (v.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (pt.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue);
        var vt = C.documentElement,
            yt = /^key/,
            bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            wt = /^([^.]*)(?:\.(.+)|)/;
        function xt() {
            return !0;
        }
        function Tt() {
            return !1;
        }
        function Ct() {
            try {
                return C.activeElement;
            } catch (t) {}
        }
        function Et(t, e, i, n, r, s) {
            var o, a;
            if ("object" == typeof e) {
                for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e)) Et(t, a, i, n, e[a], s);
                return t;
            }
            if ((null == n && null == r ? ((r = i), (n = i = void 0)) : null == r && ("string" == typeof i ? ((r = n), (n = void 0)) : ((r = n), (n = i), (i = void 0))), !1 === r)) r = Tt;
            else if (!r) return t;
            return (
                1 === s &&
                    ((o = r),
                    ((r = function (t) {
                        return E().off(t), o.apply(this, arguments);
                    }).guid = o.guid || (o.guid = E.guid++))),
                t.each(function () {
                    E.event.add(this, e, r, n, i);
                })
            );
        }
        (E.event = {
            global: {},
            add: function (e, t, i, n, r) {
                var s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g = Q.get(e);
                if (g)
                    for (
                        i.handler && ((i = (s = i).handler), (r = s.selector)),
                            r && E.find.matchesSelector(vt, r),
                            i.guid || (i.guid = E.guid++),
                            (l = g.events) || (l = g.events = {}),
                            (o = g.handle) ||
                                (o = g.handle = function (t) {
                                    return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                                }),
                            u = (t = (t || "").match(M) || [""]).length;
                        u--;

                    )
                        (d = m = (a = wt.exec(t[u]) || [])[1]),
                            (p = (a[2] || "").split(".").sort()),
                            d &&
                                ((h = E.event.special[d] || {}),
                                (d = (r ? h.delegateType : h.bindType) || d),
                                (h = E.event.special[d] || {}),
                                (c = E.extend({ type: d, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && E.expr.match.needsContext.test(r), namespace: p.join(".") }, s)),
                                (f = l[d]) || (((f = l[d] = []).delegateCount = 0), (h.setup && !1 !== h.setup.call(e, n, p, o)) || (e.addEventListener && e.addEventListener(d, o))),
                                h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)),
                                r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                                (E.event.global[d] = !0));
            },
            remove: function (t, e, i, n, r) {
                var s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    g = Q.hasData(t) && Q.get(t);
                if (g && (l = g.events)) {
                    for (u = (e = (e || "").match(M) || [""]).length; u--; )
                        if (((d = m = (a = wt.exec(e[u]) || [])[1]), (p = (a[2] || "").split(".").sort()), d)) {
                            for (h = E.event.special[d] || {}, f = l[(d = (n ? h.delegateType : h.bindType) || d)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--; )
                                (c = f[s]),
                                    (!r && m !== c.origType) ||
                                        (i && i.guid !== c.guid) ||
                                        (a && !a.test(c.namespace)) ||
                                        (n && n !== c.selector && ("**" !== n || !c.selector)) ||
                                        (f.splice(s, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                            o && !f.length && ((h.teardown && !1 !== h.teardown.call(t, p, g.handle)) || E.removeEvent(t, d, g.handle), delete l[d]);
                        } else for (d in l) E.event.remove(t, d + e[u], i, n, !0);
                    E.isEmptyObject(l) && Q.remove(t, "handle events");
                }
            },
            dispatch: function (t) {
                var e,
                    i,
                    n,
                    r,
                    s,
                    o,
                    a = E.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Q.get(this, "events") || {})[a.type] || [],
                    c = E.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
                    for (o = E.event.handlers.call(this, a, u), e = 0; (r = o[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                            (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                                ((a.handleObj = s), (a.data = s.data), void 0 !== (n = ((E.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result;
                }
            },
            handlers: function (t, e) {
                var i,
                    n,
                    r,
                    s,
                    o,
                    a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[(r = (n = e[i]).selector + " ")] && (o[r] = n.needsContext ? -1 < E(r, this).index(u) : E.find(r, this, null, [u]).length), o[r] && s.push(n);
                            s.length && a.push({ elem: u, handlers: s });
                        }
                return (u = this), l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
            },
            addProp: function (e, t) {
                Object.defineProperty(E.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t)
                        ? function () {
                              if (this.originalEvent) return t(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent) return this.originalEvent[e];
                          },
                    set: function (t) {
                        Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                    },
                });
            },
            fix: function (t) {
                return t[E.expando] ? t : new E.Event(t);
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== Ct() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        if (this === Ct() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1;
                    },
                    _default: function (t) {
                        return k(t.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    },
                },
            },
        }),
            (E.removeEvent = function (t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i);
            }),
            (E.Event = function (t, e) {
                if (!(this instanceof E.Event)) return new E.Event(t, e);
                t && t.type
                    ? ((this.originalEvent = t),
                      (this.type = t.type),
                      (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? xt : Tt),
                      (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                      (this.currentTarget = t.currentTarget),
                      (this.relatedTarget = t.relatedTarget))
                    : (this.type = t),
                    e && E.extend(this, e),
                    (this.timeStamp = (t && t.timeStamp) || Date.now()),
                    (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: Tt,
                isPropagationStopped: Tt,
                isImmediatePropagationStopped: Tt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    (this.isDefaultPrevented = xt), t && !this.isSimulated && t.preventDefault();
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    (this.isPropagationStopped = xt), t && !this.isSimulated && t.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    (this.isImmediatePropagationStopped = xt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            E.each(
                {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function (t) {
                        var e = t.button;
                        return null == t.which && yt.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && bt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                    },
                },
                E.event.addProp
            ),
            E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, r) {
                E.event.special[t] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (t) {
                        var e,
                            i = t.relatedTarget,
                            n = t.handleObj;
                        return (i && (i === this || E.contains(this, i))) || ((t.type = n.origType), (e = n.handler.apply(this, arguments)), (t.type = r)), e;
                    },
                };
            }),
            E.fn.extend({
                on: function (t, e, i, n) {
                    return Et(this, t, e, i, n);
                },
                one: function (t, e, i, n) {
                    return Et(this, t, e, i, n, 1);
                },
                off: function (t, e, i) {
                    var n, r;
                    if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), E(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" != typeof t)
                        return (
                            (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
                            !1 === i && (i = Tt),
                            this.each(function () {
                                E.event.remove(this, t, i, e);
                            })
                        );
                    for (r in t) this.off(r, e, t[r]);
                    return this;
                },
            });
        var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            kt = /<script|<style|<link/i,
            At = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Dt(t, e) {
            return (k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0]) || t;
        }
        function Pt(t) {
            return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function It(t) {
            return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
        }
        function Nt(t, e) {
            var i, n, r, s, o, a, l, u;
            if (1 === e.nodeType) {
                if (Q.hasData(t) && ((s = Q.access(t)), (o = Q.set(e, s)), (u = s.events))) for (r in (delete o.handle, (o.events = {}), u)) for (i = 0, n = u[r].length; i < n; i++) E.event.add(e, r, u[r][i]);
                K.hasData(t) && ((a = K.access(t)), (l = E.extend({}, a)), K.set(e, l));
            }
        }
        function Rt(i, n, r, s) {
            n = g.apply([], n);
            var t,
                e,
                o,
                a,
                l,
                u,
                c = 0,
                h = i.length,
                f = h - 1,
                d = n[0],
                p = y(d);
            if (p || (1 < h && "string" == typeof d && !v.checkClone && At.test(d)))
                return i.each(function (t) {
                    var e = i.eq(t);
                    p && (n[0] = d.call(this, t, e.html())), Rt(e, n, r, s);
                });
            if (h && ((e = (t = _t(n, i[0].ownerDocument, !1, i, s)).firstChild), 1 === t.childNodes.length && (t = e), e || s)) {
                for (a = (o = E.map(ft(t, "script"), Pt)).length; c < h; c++) (l = t), c !== f && ((l = E.clone(l, !0, !0)), a && E.merge(o, ft(l, "script"))), r.call(i[c], l, c);
                if (a)
                    for (u = o[o.length - 1].ownerDocument, E.map(o, It), c = 0; c < a; c++)
                        (l = o[c]), ct.test(l.type || "") && !Q.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && E._evalUrl(l.src) : b(l.textContent.replace(Ot, ""), u, l));
            }
            return i;
        }
        function Mt(t, e, i) {
            for (var n, r = e ? E.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || E.cleanData(ft(n)), n.parentNode && (i && E.contains(n.ownerDocument, n) && dt(ft(n, "script")), n.parentNode.removeChild(n));
            return t;
        }
        E.extend({
            htmlPrefilter: function (t) {
                return t.replace(St, "<$1></$2>");
            },
            clone: function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c = t.cloneNode(!0),
                    h = E.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || E.isXMLDoc(t)))
                    for (o = ft(c), n = 0, r = (s = ft(t)).length; n < r; n++)
                        (a = s[n]), (l = o[n]), void 0, "input" === (u = l.nodeName.toLowerCase()) && lt.test(a.type) ? (l.checked = a.checked) : ("input" !== u && "textarea" !== u) || (l.defaultValue = a.defaultValue);
                if (e)
                    if (i) for (s = s || ft(t), o = o || ft(c), n = 0, r = s.length; n < r; n++) Nt(s[n], o[n]);
                    else Nt(t, c);
                return 0 < (o = ft(c, "script")).length && dt(o, !h && ft(t, "script")), c;
            },
            cleanData: function (t) {
                for (var e, i, n, r = E.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (X(i)) {
                        if ((e = i[Q.expando])) {
                            if (e.events) for (n in e.events) r[n] ? E.event.remove(i, n) : E.removeEvent(i, n, e.handle);
                            i[Q.expando] = void 0;
                        }
                        i[K.expando] && (i[K.expando] = void 0);
                    }
            },
        }),
            E.fn.extend({
                detach: function (t) {
                    return Mt(this, t, !0);
                },
                remove: function (t) {
                    return Mt(this, t);
                },
                text: function (t) {
                    return B(
                        this,
                        function (t) {
                            return void 0 === t
                                ? E.text(this)
                                : this.empty().each(function () {
                                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                                  });
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                append: function () {
                    return Rt(this, arguments, function (t) {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Dt(this, t).appendChild(t);
                    });
                },
                prepend: function () {
                    return Rt(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Dt(this, t);
                            e.insertBefore(t, e.firstChild);
                        }
                    });
                },
                before: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this);
                    });
                },
                after: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (E.cleanData(ft(t, !1)), (t.textContent = ""));
                    return this;
                },
                clone: function (t, e) {
                    return (
                        (t = null != t && t),
                        (e = null == e ? t : e),
                        this.map(function () {
                            return E.clone(this, t, e);
                        })
                    );
                },
                html: function (t) {
                    return B(
                        this,
                        function (t) {
                            var e = this[0] || {},
                                i = 0,
                                n = this.length;
                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                            if ("string" == typeof t && !kt.test(t) && !ht[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = E.htmlPrefilter(t);
                                try {
                                    for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (E.cleanData(ft(e, !1)), (e.innerHTML = t));
                                    e = 0;
                                } catch (t) {}
                            }
                            e && this.empty().append(t);
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var i = [];
                    return Rt(
                        this,
                        arguments,
                        function (t) {
                            var e = this.parentNode;
                            E.inArray(this, i) < 0 && (E.cleanData(ft(this)), e && e.replaceChild(t, this));
                        },
                        i
                    );
                },
            }),
            E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, o) {
                E.fn[t] = function (t) {
                    for (var e, i = [], n = E(t), r = n.length - 1, s = 0; s <= r; s++) (e = s === r ? this : this.clone(!0)), E(n[s])[o](e), l.apply(i, e.get());
                    return this.pushStack(i);
                };
            });
        var Lt,
            jt,
            Ft,
            zt,
            Ht,
            Wt,
            Bt,
            qt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
            $t = function (t) {
                var e = t.ownerDocument.defaultView;
                return (e && e.opener) || (e = T), e.getComputedStyle(t);
            },
            Ut = new RegExp(nt.join("|"), "i");
        function Yt() {
            if (Bt) {
                (Wt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (Bt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    vt.appendChild(Wt).appendChild(Bt);
                var t = T.getComputedStyle(Bt);
                (Lt = "1%" !== t.top),
                    (Ht = 12 === Xt(t.marginLeft)),
                    (Bt.style.right = "60%"),
                    (zt = 36 === Xt(t.right)),
                    (jt = 36 === Xt(t.width)),
                    (Bt.style.position = "absolute"),
                    (Ft = 36 === Bt.offsetWidth || "absolute"),
                    vt.removeChild(Wt),
                    (Bt = null);
            }
        }
        function Xt(t) {
            return Math.round(parseFloat(t));
        }
        function Vt(t, e, i) {
            var n,
                r,
                s,
                o,
                a = t.style;
            return (
                (i = i || $t(t)) &&
                    ("" !== (o = i.getPropertyValue(e) || i[e]) || E.contains(t.ownerDocument, t) || (o = E.style(t, e)),
                    !v.pixelBoxStyles() && qt.test(o) && Ut.test(e) && ((n = a.width), (r = a.minWidth), (s = a.maxWidth), (a.minWidth = a.maxWidth = a.width = o), (o = i.width), (a.width = n), (a.minWidth = r), (a.maxWidth = s))),
                void 0 !== o ? o + "" : o
            );
        }
        function Qt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get;
                },
            };
        }
        (Wt = C.createElement("div")),
            (Bt = C.createElement("div")).style &&
                ((Bt.style.backgroundClip = "content-box"),
                (Bt.cloneNode(!0).style.backgroundClip = ""),
                (v.clearCloneStyle = "content-box" === Bt.style.backgroundClip),
                E.extend(v, {
                    boxSizingReliable: function () {
                        return Yt(), jt;
                    },
                    pixelBoxStyles: function () {
                        return Yt(), zt;
                    },
                    pixelPosition: function () {
                        return Yt(), Lt;
                    },
                    reliableMarginLeft: function () {
                        return Yt(), Ht;
                    },
                    scrollboxSize: function () {
                        return Yt(), Ft;
                    },
                }));
        var Kt = /^(none|table(?!-c[ea]).+)/,
            Jt = /^--/,
            Gt = { position: "absolute", visibility: "hidden", display: "block" },
            Zt = { letterSpacing: "0", fontWeight: "400" },
            te = ["Webkit", "Moz", "ms"],
            ee = C.createElement("div").style;
        function ie(t) {
            var e = E.cssProps[t];
            return (e =
                e ||
                (E.cssProps[t] =
                    (function (t) {
                        if (t in ee) return t;
                        for (var e = t[0].toUpperCase() + t.slice(1), i = te.length; i--; ) if ((t = te[i] + e) in ee) return t;
                    })(t) || t));
        }
        function ne(t, e, i) {
            var n = it.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
        }
        function re(t, e, i, n, r, s) {
            var o = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
                "margin" === i && (l += E.css(t, i + nt[o], !0, r)),
                    n
                        ? ("content" === i && (l -= E.css(t, "padding" + nt[o], !0, r)), "margin" !== i && (l -= E.css(t, "border" + nt[o] + "Width", !0, r)))
                        : ((l += E.css(t, "padding" + nt[o], !0, r)), "padding" !== i ? (l += E.css(t, "border" + nt[o] + "Width", !0, r)) : (a += E.css(t, "border" + nt[o] + "Width", !0, r)));
            return !n && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5))), l;
        }
        function se(t, e, i) {
            var n = $t(t),
                r = Vt(t, e, n),
                s = "border-box" === E.css(t, "boxSizing", !1, n),
                o = s;
            if (qt.test(r)) {
                if (!i) return r;
                r = "auto";
            }
            return (
                (o = o && (v.boxSizingReliable() || r === t.style[e])),
                ("auto" !== r && (parseFloat(r) || "inline" !== E.css(t, "display", !1, n))) || ((r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = !0)),
                (r = parseFloat(r) || 0) + re(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
            );
        }
        function oe(t, e, i, n, r) {
            return new oe.prototype.init(t, e, i, n, r);
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = Vt(t, "opacity");
                            return "" === i ? "1" : i;
                        }
                    },
                },
            },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r,
                        s,
                        o,
                        a = Y(e),
                        l = Jt.test(e),
                        u = t.style;
                    if ((l || (e = ie(a)), (o = E.cssHooks[e] || E.cssHooks[a]), void 0 === i)) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : u[e];
                    "string" == (s = typeof i) && (r = it.exec(i)) && r[1] && ((i = st(t, e, r)), (s = "number")),
                        null != i &&
                            i == i &&
                            ("number" === s && (i += (r && r[3]) || (E.cssNumber[a] ? "" : "px")),
                            v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                            (o && "set" in o && void 0 === (i = o.set(t, i, n))) || (l ? u.setProperty(e, i) : (u[e] = i)));
                }
            },
            css: function (t, e, i, n) {
                var r,
                    s,
                    o,
                    a = Y(e);
                return (
                    Jt.test(e) || (e = ie(a)),
                    (o = E.cssHooks[e] || E.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)),
                    void 0 === r && (r = Vt(t, e, n)),
                    "normal" === r && e in Zt && (r = Zt[e]),
                    "" === i || i ? ((s = parseFloat(r)), !0 === i || isFinite(s) ? s || 0 : r) : r
                );
            },
        }),
            E.each(["height", "width"], function (t, a) {
                E.cssHooks[a] = {
                    get: function (t, e, i) {
                        if (e)
                            return !Kt.test(E.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                                ? se(t, a, i)
                                : tt(t, Gt, function () {
                                      return se(t, a, i);
                                  });
                    },
                    set: function (t, e, i) {
                        var n,
                            r = $t(t),
                            s = "border-box" === E.css(t, "boxSizing", !1, r),
                            o = i && re(t, a, i, s, r);
                        return (
                            s && v.scrollboxSize() === r.position && (o -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - re(t, a, "border", !1, r) - 0.5)),
                            o && (n = it.exec(e)) && "px" !== (n[3] || "px") && ((t.style[a] = e), (e = E.css(t, a))),
                            ne(0, e, o)
                        );
                    },
                };
            }),
            (E.cssHooks.marginLeft = Qt(v.reliableMarginLeft, function (t, e) {
                if (e)
                    return (
                        (parseFloat(Vt(t, "marginLeft")) ||
                            t.getBoundingClientRect().left -
                                tt(t, { marginLeft: 0 }, function () {
                                    return t.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            E.each({ margin: "", padding: "", border: "Width" }, function (r, s) {
                (E.cssHooks[r + s] = {
                    expand: function (t) {
                        for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + nt[e] + s] = n[e] || n[e - 2] || n[0];
                        return i;
                    },
                }),
                    "margin" !== r && (E.cssHooks[r + s].set = ne);
            }),
            E.fn.extend({
                css: function (t, e) {
                    return B(
                        this,
                        function (t, e, i) {
                            var n,
                                r,
                                s = {},
                                o = 0;
                            if (Array.isArray(e)) {
                                for (n = $t(t), r = e.length; o < r; o++) s[e[o]] = E.css(t, e[o], !1, n);
                                return s;
                            }
                            return void 0 !== i ? E.style(t, e, i) : E.css(t, e);
                        },
                        t,
                        e,
                        1 < arguments.length
                    );
                },
            }),
            (((E.Tween = oe).prototype = {
                constructor: oe,
                init: function (t, e, i, n, r, s) {
                    (this.elem = t), (this.prop = i), (this.easing = r || E.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = s || (E.cssNumber[i] ? "" : "px"));
                },
                cur: function () {
                    var t = oe.propHooks[this.prop];
                    return t && t.get ? t.get(this) : oe.propHooks._default.get(this);
                },
                run: function (t) {
                    var e,
                        i = oe.propHooks[this.prop];
                    return (
                        this.options.duration ? (this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                        (this.now = (this.end - this.start) * e + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        i && i.set ? i.set(this) : oe.propHooks._default.set(this),
                        this
                    );
                },
            }).init.prototype = oe.prototype),
            ((oe.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = E.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                    },
                    set: function (t) {
                        E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[E.cssProps[t.prop]] && !E.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : E.style(t.elem, t.prop, t.now + t.unit);
                    },
                },
            }).scrollTop = oe.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                },
            }),
            (E.easing = {
                linear: function (t) {
                    return t;
                },
                swing: function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (E.fx = oe.prototype.init),
            (E.fx.step = {});
        var ae,
            le,
            ue,
            ce,
            he = /^(?:toggle|show|hide)$/,
            fe = /queueHooks$/;
        function de() {
            le && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(de) : T.setTimeout(de, E.fx.interval), E.fx.tick());
        }
        function pe() {
            return (
                T.setTimeout(function () {
                    ae = void 0;
                }),
                (ae = Date.now())
            );
        }
        function me(t, e) {
            var i,
                n = 0,
                r = { height: t };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = nt[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r;
        }
        function ge(t, e, i) {
            for (var n, r = (_e.tweeners[e] || []).concat(_e.tweeners["*"]), s = 0, o = r.length; s < o; s++) if ((n = r[s].call(i, e, t))) return n;
        }
        function _e(s, t, e) {
            var i,
                o,
                n = 0,
                r = _e.prefilters.length,
                a = E.Deferred().always(function () {
                    delete l.elem;
                }),
                l = function () {
                    if (o) return !1;
                    for (var t = ae || pe(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(i);
                    return a.notifyWith(s, [u, i, e]), i < 1 && r ? e : (r || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1);
                },
                u = a.promise({
                    elem: s,
                    props: E.extend({}, t),
                    opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: ae || pe(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function (t, e) {
                        var i = E.Tween(s, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i;
                    },
                    stop: function (t) {
                        var e = 0,
                            i = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; e < i; e++) u.tweens[e].run(1);
                        return t ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t])) : a.rejectWith(s, [u, t]), this;
                    },
                }),
                c = u.props;
            for (
                (function (t, e) {
                    var i, n, r, s, o;
                    for (i in t)
                        if (((r = e[(n = Y(i))]), (s = t[i]), Array.isArray(s) && ((r = s[1]), (s = t[i] = s[0])), i !== n && ((t[n] = s), delete t[i]), (o = E.cssHooks[n]) && ("expand" in o)))
                            for (i in ((s = o.expand(s)), delete t[n], s)) (i in t) || ((t[i] = s[i]), (e[i] = r));
                        else e[n] = r;
                })(c, u.opts.specialEasing);
                n < r;
                n++
            )
                if ((i = _e.prefilters[n].call(u, s, c, u.opts))) return y(i.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return (
                E.map(c, ge, u),
                y(u.opts.start) && u.opts.start.call(s, u),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                E.fx.timer(E.extend(l, { elem: s, anim: u, queue: u.opts.queue })),
                u
            );
        }
        (E.Animation = E.extend(_e, {
            tweeners: {
                "*": [
                    function (t, e) {
                        var i = this.createTween(t, e);
                        return st(i.elem, t, it.exec(e), i), i;
                    },
                ],
            },
            tweener: function (t, e) {
                for (var i, n = 0, r = (t = y(t) ? ((e = t), ["*"]) : t.match(M)).length; n < r; n++) (i = t[n]), (_e.tweeners[i] = _e.tweeners[i] || []), _e.tweeners[i].unshift(e);
            },
            prefilters: [
                function (t, e, i) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        u,
                        c,
                        h = "width" in e || "height" in e,
                        f = this,
                        d = {},
                        p = t.style,
                        m = t.nodeType && rt(t),
                        g = Q.get(t, "fxshow");
                    for (n in (i.queue ||
                        (null == (o = E._queueHooks(t, "fx")).unqueued &&
                            ((o.unqueued = 0),
                            (a = o.empty.fire),
                            (o.empty.fire = function () {
                                o.unqueued || a();
                            })),
                        o.unqueued++,
                        f.always(function () {
                            f.always(function () {
                                o.unqueued--, E.queue(t, "fx").length || o.empty.fire();
                            });
                        })),
                    e))
                        if (((r = e[n]), he.test(r))) {
                            if ((delete e[n], (s = s || "toggle" === r), r === (m ? "hide" : "show"))) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                m = !0;
                            }
                            d[n] = (g && g[n]) || E.style(t, n);
                        }
                    if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(d))
                        for (n in (h &&
                            1 === t.nodeType &&
                            ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
                            null == (u = g && g.display) && (u = Q.get(t, "display")),
                            "none" === (c = E.css(t, "display")) && (u ? (c = u) : (at([t], !0), (u = t.style.display || u), (c = E.css(t, "display")), at([t]))),
                            ("inline" === c || ("inline-block" === c && null != u)) &&
                                "none" === E.css(t, "float") &&
                                (l ||
                                    (f.done(function () {
                                        p.display = u;
                                    }),
                                    null == u && ((c = p.display), (u = "none" === c ? "" : c))),
                                (p.display = "inline-block"))),
                        i.overflow &&
                            ((p.overflow = "hidden"),
                            f.always(function () {
                                (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);
                            })),
                        (l = !1),
                        d))
                            l ||
                                (g ? "hidden" in g && (m = g.hidden) : (g = Q.access(t, "fxshow", { display: u })),
                                s && (g.hidden = !m),
                                m && at([t], !0),
                                f.done(function () {
                                    for (n in (m || at([t]), Q.remove(t, "fxshow"), d)) E.style(t, n, d[n]);
                                })),
                                (l = ge(m ? g[n] : 0, n, f)),
                                n in g || ((g[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
                },
            ],
            prefilter: function (t, e) {
                e ? _e.prefilters.unshift(t) : _e.prefilters.push(t);
            },
        })),
            (E.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? E.extend({}, t) : { complete: i || (!i && e) || (y(t) && t), duration: t, easing: (i && e) || (e && !y(e) && e) };
                return (
                    E.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in E.fx.speeds ? (n.duration = E.fx.speeds[n.duration]) : (n.duration = E.fx.speeds._default)),
                    (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                    (n.old = n.complete),
                    (n.complete = function () {
                        y(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
                    }),
                    n
                );
            }),
            E.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(rt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
                },
                animate: function (e, t, i, n) {
                    function r() {
                        var t = _e(this, E.extend({}, e), o);
                        (s || Q.get(this, "finish")) && t.stop(!0);
                    }
                    var s = E.isEmptyObject(e),
                        o = E.speed(t, i, n);
                    return (r.finish = r), s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
                },
                stop: function (r, t, s) {
                    function o(t) {
                        var e = t.stop;
                        delete t.stop, e(s);
                    }
                    return (
                        "string" != typeof r && ((s = t), (t = r), (r = void 0)),
                        t && !1 !== r && this.queue(r || "fx", []),
                        this.each(function () {
                            var t = !0,
                                e = null != r && r + "queueHooks",
                                i = E.timers,
                                n = Q.get(this);
                            if (e) n[e] && n[e].stop && o(n[e]);
                            else for (e in n) n[e] && n[e].stop && fe.test(e) && o(n[e]);
                            for (e = i.length; e--; ) i[e].elem !== this || (null != r && i[e].queue !== r) || (i[e].anim.stop(s), (t = !1), i.splice(e, 1));
                            (!t && s) || E.dequeue(this, r);
                        })
                    );
                },
                finish: function (o) {
                    return (
                        !1 !== o && (o = o || "fx"),
                        this.each(function () {
                            var t,
                                e = Q.get(this),
                                i = e[o + "queue"],
                                n = e[o + "queueHooks"],
                                r = E.timers,
                                s = i ? i.length : 0;
                            for (e.finish = !0, E.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete e.finish;
                        })
                    );
                },
            }),
            E.each(["toggle", "show", "hide"], function (t, n) {
                var r = E.fn[n];
                E.fn[n] = function (t, e, i) {
                    return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(me(n, !0), t, e, i);
                };
            }),
            E.each({ slideDown: me("show"), slideUp: me("hide"), slideToggle: me("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, n) {
                E.fn[t] = function (t, e, i) {
                    return this.animate(n, t, e, i);
                };
            }),
            (E.timers = []),
            (E.fx.tick = function () {
                var t,
                    e = 0,
                    i = E.timers;
                for (ae = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || E.fx.stop(), (ae = void 0);
            }),
            (E.fx.timer = function (t) {
                E.timers.push(t), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
                le || ((le = !0), de());
            }),
            (E.fx.stop = function () {
                le = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (n, t) {
                return (
                    (n = (E.fx && E.fx.speeds[n]) || n),
                    (t = t || "fx"),
                    this.queue(t, function (t, e) {
                        var i = T.setTimeout(t, n);
                        e.stop = function () {
                            T.clearTimeout(i);
                        };
                    })
                );
            }),
            (ue = C.createElement("input")),
            (ce = C.createElement("select").appendChild(C.createElement("option"))),
            (ue.type = "checkbox"),
            (v.checkOn = "" !== ue.value),
            (v.optSelected = ce.selected),
            ((ue = C.createElement("input")).value = "t"),
            (ue.type = "radio"),
            (v.radioValue = "t" === ue.value);
        var ve,
            ye = E.expr.attrHandle;
        E.fn.extend({
            attr: function (t, e) {
                return B(this, E.attr, t, e, 1 < arguments.length);
            },
            removeAttr: function (t) {
                return this.each(function () {
                    E.removeAttr(this, t);
                });
            },
        }),
            E.extend({
                attr: function (t, e, i) {
                    var n,
                        r,
                        s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)
                        return void 0 === t.getAttribute
                            ? E.prop(t, e, i)
                            : ((1 === s && E.isXMLDoc(t)) || (r = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ve : void 0)),
                              void 0 !== i
                                  ? null === i
                                      ? void E.removeAttr(t, e)
                                      : r && "set" in r && void 0 !== (n = r.set(t, i, e))
                                      ? n
                                      : (t.setAttribute(e, i + ""), i)
                                  : r && "get" in r && null !== (n = r.get(t, e))
                                  ? n
                                  : null == (n = E.find.attr(t, e))
                                  ? void 0
                                  : n);
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!v.radioValue && "radio" === e && k(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e;
                            }
                        },
                    },
                },
                removeAttr: function (t, e) {
                    var i,
                        n = 0,
                        r = e && e.match(M);
                    if (r && 1 === t.nodeType) for (; (i = r[n++]); ) t.removeAttribute(i);
                },
            }),
            (ve = {
                set: function (t, e, i) {
                    return !1 === e ? E.removeAttr(t, i) : t.setAttribute(i, i), i;
                },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var o = ye[e] || E.find.attr;
                ye[e] = function (t, e, i) {
                    var n,
                        r,
                        s = e.toLowerCase();
                    return i || ((r = ye[s]), (ye[s] = n), (n = null != o(t, e, i) ? s : null), (ye[s] = r)), n;
                };
            });
        var be = /^(?:input|select|textarea|button)$/i,
            we = /^(?:a|area)$/i;
        function xe(t) {
            return (t.match(M) || []).join(" ");
        }
        function Te(t) {
            return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function Ce(t) {
            return Array.isArray(t) ? t : ("string" == typeof t && t.match(M)) || [];
        }
        E.fn.extend({
            prop: function (t, e) {
                return B(this, E.prop, t, e, 1 < arguments.length);
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[E.propFix[t] || t];
                });
            },
        }),
            E.extend({
                prop: function (t, e, i) {
                    var n,
                        r,
                        s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)
                        return (
                            (1 === s && E.isXMLDoc(t)) || ((e = E.propFix[e] || e), (r = E.propHooks[e])),
                            void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t[e] = i)) : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = E.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : be.test(t.nodeName) || (we.test(t.nodeName) && t.href) ? 0 : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
                (E.propHooks.selected = {
                    get: function (t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null;
                    },
                    set: function (t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                    },
                }),
            E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                E.propFix[this.toLowerCase()] = this;
            }),
            E.fn.extend({
                addClass: function (e) {
                    var t,
                        i,
                        n,
                        r,
                        s,
                        o,
                        a,
                        l = 0;
                    if (y(e))
                        return this.each(function (t) {
                            E(this).addClass(e.call(this, t, Te(this)));
                        });
                    if ((t = Ce(e)).length)
                        for (; (i = this[l++]); )
                            if (((r = Te(i)), (n = 1 === i.nodeType && " " + xe(r) + " "))) {
                                for (o = 0; (s = t[o++]); ) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                r !== (a = xe(n)) && i.setAttribute("class", a);
                            }
                    return this;
                },
                removeClass: function (e) {
                    var t,
                        i,
                        n,
                        r,
                        s,
                        o,
                        a,
                        l = 0;
                    if (y(e))
                        return this.each(function (t) {
                            E(this).removeClass(e.call(this, t, Te(this)));
                        });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = Ce(e)).length)
                        for (; (i = this[l++]); )
                            if (((r = Te(i)), (n = 1 === i.nodeType && " " + xe(r) + " "))) {
                                for (o = 0; (s = t[o++]); ) for (; -1 < n.indexOf(" " + s + " "); ) n = n.replace(" " + s + " ", " ");
                                r !== (a = xe(n)) && i.setAttribute("class", a);
                            }
                    return this;
                },
                toggleClass: function (r, e) {
                    var s = typeof r,
                        o = "string" == s || Array.isArray(r);
                    return "boolean" == typeof e && o
                        ? e
                            ? this.addClass(r)
                            : this.removeClass(r)
                        : y(r)
                        ? this.each(function (t) {
                              E(this).toggleClass(r.call(this, t, Te(this), e), e);
                          })
                        : this.each(function () {
                              var t, e, i, n;
                              if (o) for (e = 0, i = E(this), n = Ce(r); (t = n[e++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                              else (void 0 !== r && "boolean" != s) || ((t = Te(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : Q.get(this, "__className__") || ""));
                          });
                },
                hasClass: function (t) {
                    var e,
                        i,
                        n = 0;
                    for (e = " " + t + " "; (i = this[n++]); ) if (1 === i.nodeType && -1 < (" " + xe(Te(i)) + " ").indexOf(e)) return !0;
                    return !1;
                },
            });
        var Ee = /\r/g;
        E.fn.extend({
            val: function (i) {
                var n,
                    t,
                    r,
                    e = this[0];
                return arguments.length
                    ? ((r = y(i)),
                      this.each(function (t) {
                          var e;
                          1 === this.nodeType &&
                              (null == (e = r ? i.call(this, t, E(this).val()) : i)
                                  ? (e = "")
                                  : "number" == typeof e
                                  ? (e += "")
                                  : Array.isArray(e) &&
                                    (e = E.map(e, function (t) {
                                        return null == t ? "" : t + "";
                                    })),
                              ((n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                      }))
                    : e
                    ? (n = E.valHooks[e.type] || E.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value"))
                        ? t
                        : "string" == typeof (t = e.value)
                        ? t.replace(Ee, "")
                        : null == t
                        ? ""
                        : t
                    : void 0;
            },
        }),
            E.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = E.find.attr(t, "value");
                            return null != e ? e : xe(E.text(t));
                        },
                    },
                    select: {
                        get: function (t) {
                            var e,
                                i,
                                n,
                                r = t.options,
                                s = t.selectedIndex,
                                o = "select-one" === t.type,
                                a = o ? null : [],
                                l = o ? s + 1 : r.length;
                            for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                                if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                                    if (((e = E(i).val()), o)) return e;
                                    a.push(e);
                                }
                            return a;
                        },
                        set: function (t, e) {
                            for (var i, n, r = t.options, s = E.makeArray(e), o = r.length; o--; ) ((n = r[o]).selected = -1 < E.inArray(E.valHooks.option.get(n), s)) && (i = !0);
                            return i || (t.selectedIndex = -1), s;
                        },
                    },
                },
            }),
            E.each(["radio", "checkbox"], function () {
                (E.valHooks[this] = {
                    set: function (t, e) {
                        if (Array.isArray(e)) return (t.checked = -1 < E.inArray(E(t).val(), e));
                    },
                }),
                    v.checkOn ||
                        (E.valHooks[this].get = function (t) {
                            return null === t.getAttribute("value") ? "on" : t.value;
                        });
            }),
            (v.focusin = "onfocusin" in T);
        function Se(t) {
            t.stopPropagation();
        }
        var ke = /^(?:focusinfocus|focusoutblur)$/;
        E.extend(E.event, {
            trigger: function (t, e, i, n) {
                var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f = [i || C],
                    d = _.call(t, "type") ? t.type : t,
                    p = _.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((s = h = o = i = i || C),
                    3 !== i.nodeType &&
                        8 !== i.nodeType &&
                        !ke.test(d + E.event.triggered) &&
                        (-1 < d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),
                        (l = d.indexOf(":") < 0 && "on" + d),
                        ((t = t[E.expando] ? t : new E.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3),
                        (t.namespace = p.join(".")),
                        (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (t.result = void 0),
                        t.target || (t.target = i),
                        (e = null == e ? [t] : E.makeArray(e, [t])),
                        (c = E.event.special[d] || {}),
                        n || !c.trigger || !1 !== c.trigger.apply(i, e)))
                ) {
                    if (!n && !c.noBubble && !m(i)) {
                        for (a = c.delegateType || d, ke.test(a + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), (o = s);
                        o === (i.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T);
                    }
                    for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
                        (h = s),
                            (t.type = 1 < r ? a : c.bindType || d),
                            (u = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && u.apply(s, e),
                            (u = l && s[l]) && u.apply && X(s) && ((t.result = u.apply(s, e)), !1 === t.result && t.preventDefault());
                    return (
                        (t.type = d),
                        n ||
                            t.isDefaultPrevented() ||
                            (c._default && !1 !== c._default.apply(f.pop(), e)) ||
                            !X(i) ||
                            (l &&
                                y(i[d]) &&
                                !m(i) &&
                                ((o = i[l]) && (i[l] = null),
                                (E.event.triggered = d),
                                t.isPropagationStopped() && h.addEventListener(d, Se),
                                i[d](),
                                t.isPropagationStopped() && h.removeEventListener(d, Se),
                                (E.event.triggered = void 0),
                                o && (i[l] = o))),
                        t.result
                    );
                }
            },
            simulate: function (t, e, i) {
                var n = E.extend(new E.Event(), i, { type: t, isSimulated: !0 });
                E.event.trigger(n, null, e);
            },
        }),
            E.fn.extend({
                trigger: function (t, e) {
                    return this.each(function () {
                        E.event.trigger(t, e, this);
                    });
                },
                triggerHandler: function (t, e) {
                    var i = this[0];
                    if (i) return E.event.trigger(t, e, i, !0);
                },
            }),
            v.focusin ||
                E.each({ focus: "focusin", blur: "focusout" }, function (i, n) {
                    function r(t) {
                        E.event.simulate(n, t.target, E.event.fix(t));
                    }
                    E.event.special[n] = {
                        setup: function () {
                            var t = this.ownerDocument || this,
                                e = Q.access(t, n);
                            e || t.addEventListener(i, r, !0), Q.access(t, n, (e || 0) + 1);
                        },
                        teardown: function () {
                            var t = this.ownerDocument || this,
                                e = Q.access(t, n) - 1;
                            e ? Q.access(t, n, e) : (t.removeEventListener(i, r, !0), Q.remove(t, n));
                        },
                    };
                });
        var Ae = T.location,
            Oe = Date.now(),
            De = /\?/;
        E.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = new T.DOMParser().parseFromString(t, "text/xml");
            } catch (t) {
                e = void 0;
            }
            return (e && !e.getElementsByTagName("parsererror").length) || E.error("Invalid XML: " + t), e;
        };
        var Pe = /\[\]$/,
            Ie = /\r?\n/g,
            Ne = /^(?:submit|button|image|reset|file)$/i,
            Re = /^(?:input|select|textarea|keygen)/i;
        function Me(i, t, n, r) {
            var e;
            if (Array.isArray(t))
                E.each(t, function (t, e) {
                    n || Pe.test(i) ? r(i, e) : Me(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r);
                });
            else if (n || "object" !== w(t)) r(i, t);
            else for (e in t) Me(i + "[" + e + "]", t[e], n, r);
        }
        (E.param = function (t, e) {
            function i(t, e) {
                var i = y(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
            }
            var n,
                r = [];
            if (Array.isArray(t) || (t.jquery && !E.isPlainObject(t)))
                E.each(t, function () {
                    i(this.name, this.value);
                });
            else for (n in t) Me(n, t[n], e, i);
            return r.join("&");
        }),
            E.fn.extend({
                serialize: function () {
                    return E.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = E.prop(this, "elements");
                        return t ? E.makeArray(t) : this;
                    })
                        .filter(function () {
                            var t = this.type;
                            return this.name && !E(this).is(":disabled") && Re.test(this.nodeName) && !Ne.test(t) && (this.checked || !lt.test(t));
                        })
                        .map(function (t, e) {
                            var i = E(this).val();
                            return null == i
                                ? null
                                : Array.isArray(i)
                                ? E.map(i, function (t) {
                                      return { name: e.name, value: t.replace(Ie, "\r\n") };
                                  })
                                : { name: e.name, value: i.replace(Ie, "\r\n") };
                        })
                        .get();
                },
            });
        var Le = /%20/g,
            je = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            He = /^(?:GET|HEAD)$/,
            We = /^\/\//,
            Be = {},
            qe = {},
            $e = "*/".concat("*"),
            Ue = C.createElement("a");
        function Ye(s) {
            return function (t, e) {
                "string" != typeof t && ((e = t), (t = "*"));
                var i,
                    n = 0,
                    r = t.toLowerCase().match(M) || [];
                if (y(e)) for (; (i = r[n++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e);
            };
        }
        function Xe(e, r, s, o) {
            var a = {},
                l = e === qe;
            function u(t) {
                var n;
                return (
                    (a[t] = !0),
                    E.each(e[t] || [], function (t, e) {
                        var i = e(r, s, o);
                        return "string" != typeof i || l || a[i] ? (l ? !(n = i) : void 0) : (r.dataTypes.unshift(i), u(i), !1);
                    }),
                    n
                );
            }
            return u(r.dataTypes[0]) || (!a["*"] && u("*"));
        }
        function Ve(t, e) {
            var i,
                n,
                r = E.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : (n = n || {}))[i] = e[i]);
            return n && E.extend(!0, t, n), t;
        }
        (Ue.href = Ae.href),
            E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ae.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": $e, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (t, e) {
                    return e ? Ve(Ve(t, E.ajaxSettings), e) : Ve(E.ajaxSettings, t);
                },
                ajaxPrefilter: Ye(Be),
                ajaxTransport: Ye(qe),
                ajax: function (t, e) {
                    "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                    var c,
                        h,
                        f,
                        i,
                        d,
                        n,
                        p,
                        m,
                        r,
                        s,
                        g = E.ajaxSetup({}, e),
                        _ = g.context || g,
                        v = g.context && (_.nodeType || _.jquery) ? E(_) : E.event,
                        y = E.Deferred(),
                        b = E.Callbacks("once memory"),
                        w = g.statusCode || {},
                        o = {},
                        a = {},
                        l = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (p) {
                                    if (!i) for (i = {}; (e = ze.exec(f)); ) i[e[1].toLowerCase()] = e[2];
                                    e = i[t.toLowerCase()];
                                }
                                return null == e ? null : e;
                            },
                            getAllResponseHeaders: function () {
                                return p ? f : null;
                            },
                            setRequestHeader: function (t, e) {
                                return null == p && ((t = a[t.toLowerCase()] = a[t.toLowerCase()] || t), (o[t] = e)), this;
                            },
                            overrideMimeType: function (t) {
                                return null == p && (g.mimeType = t), this;
                            },
                            statusCode: function (t) {
                                var e;
                                if (t)
                                    if (p) x.always(t[x.status]);
                                    else for (e in t) w[e] = [w[e], t[e]];
                                return this;
                            },
                            abort: function (t) {
                                var e = t || l;
                                return c && c.abort(e), u(0, e), this;
                            },
                        };
                    if (
                        (y.promise(x),
                        (g.url = ((t || g.url || Ae.href) + "").replace(We, Ae.protocol + "//")),
                        (g.type = e.method || e.type || g.method || g.type),
                        (g.dataTypes = (g.dataType || "*").toLowerCase().match(M) || [""]),
                        null == g.crossDomain)
                    ) {
                        n = C.createElement("a");
                        try {
                            (n.href = g.url), (n.href = n.href), (g.crossDomain = Ue.protocol + "//" + Ue.host != n.protocol + "//" + n.host);
                        } catch (t) {
                            g.crossDomain = !0;
                        }
                    }
                    if ((g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Xe(Be, g, e, x), p)) return x;
                    for (r in ((m = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                    (g.type = g.type.toUpperCase()),
                    (g.hasContent = !He.test(g.type)),
                    (h = g.url.replace(je, "")),
                    g.hasContent
                        ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Le, "+"))
                        : ((s = g.url.slice(h.length)),
                          g.data && (g.processData || "string" == typeof g.data) && ((h += (De.test(h) ? "&" : "?") + g.data), delete g.data),
                          !1 === g.cache && ((h = h.replace(Fe, "$1")), (s = (De.test(h) ? "&" : "?") + "_=" + Oe++ + s)),
                          (g.url = h + s)),
                    g.ifModified && (E.lastModified[h] && x.setRequestHeader("If-Modified-Since", E.lastModified[h]), E.etag[h] && x.setRequestHeader("If-None-Match", E.etag[h])),
                    ((g.data && g.hasContent && !1 !== g.contentType) || e.contentType) && x.setRequestHeader("Content-Type", g.contentType),
                    x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : g.accepts["*"]),
                    g.headers))
                        x.setRequestHeader(r, g.headers[r]);
                    if (g.beforeSend && (!1 === g.beforeSend.call(_, x, g) || p)) return x.abort();
                    if (((l = "abort"), b.add(g.complete), x.done(g.success), x.fail(g.error), (c = Xe(qe, g, e, x)))) {
                        if (((x.readyState = 1), m && v.trigger("ajaxSend", [x, g]), p)) return x;
                        g.async &&
                            0 < g.timeout &&
                            (d = T.setTimeout(function () {
                                x.abort("timeout");
                            }, g.timeout));
                        try {
                            (p = !1), c.send(o, u);
                        } catch (t) {
                            if (p) throw t;
                            u(-1, t);
                        }
                    } else u(-1, "No Transport");
                    function u(t, e, i, n) {
                        var r,
                            s,
                            o,
                            a,
                            l,
                            u = e;
                        p ||
                            ((p = !0),
                            d && T.clearTimeout(d),
                            (c = void 0),
                            (f = n || ""),
                            (x.readyState = 0 < t ? 4 : 0),
                            (r = (200 <= t && t < 300) || 304 === t),
                            i &&
                                (a = (function (t, e, i) {
                                    for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (n)
                                        for (r in a)
                                            if (a[r] && a[r].test(n)) {
                                                l.unshift(r);
                                                break;
                                            }
                                    if (l[0] in i) s = l[0];
                                    else {
                                        for (r in i) {
                                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                                s = r;
                                                break;
                                            }
                                            o = o || r;
                                        }
                                        s = s || o;
                                    }
                                    if (s) return s !== l[0] && l.unshift(s), i[s];
                                })(g, x, i)),
                            (a = (function (t, e, i, n) {
                                var r,
                                    s,
                                    o,
                                    a,
                                    l,
                                    u = {},
                                    c = t.dataTypes.slice();
                                if (c[1]) for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                                for (s = c.shift(); s; )
                                    if ((t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = s), (s = c.shift())))
                                        if ("*" === s) s = l;
                                        else if ("*" !== l && l !== s) {
                                            if (!(o = u[l + " " + s] || u["* " + s]))
                                                for (r in u)
                                                    if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                        !0 === o ? (o = u[r]) : !0 !== u[r] && ((s = a[0]), c.unshift(a[1]));
                                                        break;
                                                    }
                                            if (!0 !== o)
                                                if (o && t.throws) e = o(e);
                                                else
                                                    try {
                                                        e = o(e);
                                                    } catch (t) {
                                                        return { state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s };
                                                    }
                                        }
                                return { state: "success", data: e };
                            })(g, a, x, r)),
                            r
                                ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (E.lastModified[h] = l), (l = x.getResponseHeader("etag")) && (E.etag[h] = l)),
                                  204 === t || "HEAD" === g.type ? (u = "nocontent") : 304 === t ? (u = "notmodified") : ((u = a.state), (s = a.data), (r = !(o = a.error))))
                                : ((o = u), (!t && u) || ((u = "error"), t < 0 && (t = 0))),
                            (x.status = t),
                            (x.statusText = (e || u) + ""),
                            r ? y.resolveWith(_, [s, u, x]) : y.rejectWith(_, [x, u, o]),
                            x.statusCode(w),
                            (w = void 0),
                            m && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, g, r ? s : o]),
                            b.fireWith(_, [x, u]),
                            m && (v.trigger("ajaxComplete", [x, g]), --E.active || E.event.trigger("ajaxStop")));
                    }
                    return x;
                },
                getJSON: function (t, e, i) {
                    return E.get(t, e, i, "json");
                },
                getScript: function (t, e) {
                    return E.get(t, void 0, e, "script");
                },
            }),
            E.each(["get", "post"], function (t, r) {
                E[r] = function (t, e, i, n) {
                    return y(e) && ((n = n || i), (i = e), (e = void 0)), E.ajax(E.extend({ url: t, type: r, dataType: n, data: e, success: i }, E.isPlainObject(t) && t));
                };
            }),
            (E._evalUrl = function (t) {
                return E.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
            }),
            E.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return (
                        this[0] &&
                            (y(t) && (t = t.call(this[0])),
                            (e = E(t, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && e.insertBefore(this[0]),
                            e
                                .map(function () {
                                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                    return t;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (i) {
                    return y(i)
                        ? this.each(function (t) {
                              E(this).wrapInner(i.call(this, t));
                          })
                        : this.each(function () {
                              var t = E(this),
                                  e = t.contents();
                              e.length ? e.wrapAll(i) : t.append(i);
                          });
                },
                wrap: function (e) {
                    var i = y(e);
                    return this.each(function (t) {
                        E(this).wrapAll(i ? e.call(this, t) : e);
                    });
                },
                unwrap: function (t) {
                    return (
                        this.parent(t)
                            .not("body")
                            .each(function () {
                                E(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (E.expr.pseudos.hidden = function (t) {
                return !E.expr.pseudos.visible(t);
            }),
            (E.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
            }),
            (E.ajaxSettings.xhr = function () {
                try {
                    return new T.XMLHttpRequest();
                } catch (t) {}
            });
        var Qe = { 0: 200, 1223: 204 },
            Ke = E.ajaxSettings.xhr();
        (v.cors = !!Ke && "withCredentials" in Ke),
            (v.ajax = Ke = !!Ke),
            E.ajaxTransport(function (r) {
                var s, o;
                if (v.cors || (Ke && !r.crossDomain))
                    return {
                        send: function (t, e) {
                            var i,
                                n = r.xhr();
                            if ((n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)) for (i in r.xhrFields) n[i] = r.xhrFields[i];
                            for (i in (r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t)) n.setRequestHeader(i, t[i]);
                            (s = function (t) {
                                return function () {
                                    s &&
                                        ((s = o = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null),
                                        "abort" === t
                                            ? n.abort()
                                            : "error" === t
                                            ? "number" != typeof n.status
                                                ? e(0, "error")
                                                : e(n.status, n.statusText)
                                            : e(
                                                  Qe[n.status] || n.status,
                                                  n.statusText,
                                                  "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? { binary: n.response } : { text: n.responseText },
                                                  n.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (n.onload = s()),
                                (o = n.onerror = n.ontimeout = s("error")),
                                void 0 !== n.onabort
                                    ? (n.onabort = o)
                                    : (n.onreadystatechange = function () {
                                          4 === n.readyState &&
                                              T.setTimeout(function () {
                                                  s && o();
                                              });
                                      }),
                                (s = s("abort"));
                            try {
                                n.send((r.hasContent && r.data) || null);
                            } catch (t) {
                                if (s) throw t;
                            }
                        },
                        abort: function () {
                            s && s();
                        },
                    };
            }),
            E.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1);
            }),
            E.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (t) {
                        return E.globalEval(t), t;
                    },
                },
            }),
            E.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
            }),
            E.ajaxTransport("script", function (i) {
                var n, r;
                if (i.crossDomain)
                    return {
                        send: function (t, e) {
                            (n = E("<script>")
                                .prop({ charset: i.scriptCharset, src: i.url })
                                .on(
                                    "load error",
                                    (r = function (t) {
                                        n.remove(), (r = null), t && e("error" === t.type ? 404 : 200, t.type);
                                    })
                                )),
                                C.head.appendChild(n[0]);
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            });
        var Je,
            Ge = [],
            Ze = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ge.pop() || E.expando + "_" + Oe++;
                return (this[t] = !0), t;
            },
        }),
            E.ajaxPrefilter("json jsonp", function (t, e, i) {
                var n,
                    r,
                    s,
                    o = !1 !== t.jsonp && (Ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(t.data) && "data");
                if (o || "jsonp" === t.dataTypes[0])
                    return (
                        (n = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                        o ? (t[o] = t[o].replace(Ze, "$1" + n)) : !1 !== t.jsonp && (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
                        (t.converters["script json"] = function () {
                            return s || E.error(n + " was not called"), s[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (r = T[n]),
                        (T[n] = function () {
                            s = arguments;
                        }),
                        i.always(function () {
                            void 0 === r ? E(T).removeProp(n) : (T[n] = r), t[n] && ((t.jsonpCallback = e.jsonpCallback), Ge.push(n)), s && y(r) && r(s[0]), (s = r = void 0);
                        }),
                        "script"
                    );
            }),
            (v.createHTMLDocument = (((Je = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Je.childNodes.length)),
            (E.parseHTML = function (t, e, i) {
                return "string" != typeof t
                    ? []
                    : ("boolean" == typeof e && ((i = e), (e = !1)),
                      e || (v.createHTMLDocument ? (((n = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), e.head.appendChild(n)) : (e = C)),
                      (s = !i && []),
                      (r = A.exec(t)) ? [e.createElement(r[1])] : ((r = _t([t], e, s)), s && s.length && E(s).remove(), E.merge([], r.childNodes)));
                var n, r, s;
            }),
            (E.fn.load = function (t, e, i) {
                var n,
                    r,
                    s,
                    o = this,
                    a = t.indexOf(" ");
                return (
                    -1 < a && ((n = xe(t.slice(a))), (t = t.slice(0, a))),
                    y(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                    0 < o.length &&
                        E.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                            .done(function (t) {
                                (s = arguments), o.html(n ? E("<div>").append(E.parseHTML(t)).find(n) : t);
                            })
                            .always(
                                i &&
                                    function (t, e) {
                                        o.each(function () {
                                            i.apply(this, s || [t.responseText, e, t]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                E.fn[e] = function (t) {
                    return this.on(e, t);
                };
            }),
            (E.expr.pseudos.animated = function (e) {
                return E.grep(E.timers, function (t) {
                    return e === t.elem;
                }).length;
            }),
            (E.offset = {
                setOffset: function (t, e, i) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        u = E.css(t, "position"),
                        c = E(t),
                        h = {};
                    "static" === u && (t.style.position = "relative"),
                        (a = c.offset()),
                        (s = E.css(t, "top")),
                        (l = E.css(t, "left")),
                        (r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? ((o = (n = c.position()).top), n.left) : ((o = parseFloat(s) || 0), parseFloat(l) || 0)),
                        y(e) && (e = e.call(t, i, E.extend({}, a))),
                        null != e.top && (h.top = e.top - a.top + o),
                        null != e.left && (h.left = e.left - a.left + r),
                        "using" in e ? e.using.call(t, h) : c.css(h);
                },
            }),
            E.fn.extend({
                offset: function (e) {
                    if (arguments.length)
                        return void 0 === e
                            ? this
                            : this.each(function (t) {
                                  E.offset.setOffset(this, e, t);
                              });
                    var t,
                        i,
                        n = this[0];
                    return n ? (n.getClientRects().length ? ((t = n.getBoundingClientRect()), (i = n.ownerDocument.defaultView), { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var t,
                            e,
                            i,
                            n = this[0],
                            r = { top: 0, left: 0 };
                        if ("fixed" === E.css(n, "position")) e = n.getBoundingClientRect();
                        else {
                            for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === E.css(t, "position"); ) t = t.parentNode;
                            t && t !== n && 1 === t.nodeType && (((r = E(t).offset()).top += E.css(t, "borderTopWidth", !0)), (r.left += E.css(t, "borderLeftWidth", !0)));
                        }
                        return { top: e.top - r.top - E.css(n, "marginTop", !0), left: e.left - r.left - E.css(n, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && "static" === E.css(t, "position"); ) t = t.offsetParent;
                        return t || vt;
                    });
                },
            }),
            E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, r) {
                var s = "pageYOffset" === r;
                E.fn[e] = function (t) {
                    return B(
                        this,
                        function (t, e, i) {
                            var n;
                            if ((m(t) ? (n = t) : 9 === t.nodeType && (n = t.defaultView), void 0 === i)) return n ? n[r] : t[e];
                            n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : (t[e] = i);
                        },
                        e,
                        t,
                        arguments.length
                    );
                };
            }),
            E.each(["top", "left"], function (t, i) {
                E.cssHooks[i] = Qt(v.pixelPosition, function (t, e) {
                    if (e) return (e = Vt(t, i)), qt.test(e) ? E(t).position()[i] + "px" : e;
                });
            }),
            E.each({ Height: "height", Width: "width" }, function (o, a) {
                E.each({ padding: "inner" + o, content: a, "": "outer" + o }, function (n, s) {
                    E.fn[s] = function (t, e) {
                        var i = arguments.length && (n || "boolean" != typeof t),
                            r = n || (!0 === t || !0 === e ? "margin" : "border");
                        return B(
                            this,
                            function (t, e, i) {
                                var n;
                                return m(t)
                                    ? 0 === s.indexOf("outer")
                                        ? t["inner" + o]
                                        : t.document.documentElement["client" + o]
                                    : 9 === t.nodeType
                                    ? ((n = t.documentElement), Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o]))
                                    : void 0 === i
                                    ? E.css(t, e, r)
                                    : E.style(t, e, i, r);
                            },
                            a,
                            i ? t : void 0,
                            i
                        );
                    };
                });
            }),
            E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
                E.fn[i] = function (t, e) {
                    return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i);
                };
            }),
            E.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t);
                },
            }),
            E.fn.extend({
                bind: function (t, e, i) {
                    return this.on(t, null, e, i);
                },
                unbind: function (t, e) {
                    return this.off(t, null, e);
                },
                delegate: function (t, e, i, n) {
                    return this.on(e, t, i, n);
                },
                undelegate: function (t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
                },
            }),
            (E.proxy = function (t, e) {
                var i, n, r;
                if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), y(t)))
                    return (
                        (n = a.call(arguments, 2)),
                        ((r = function () {
                            return t.apply(e || this, n.concat(a.call(arguments)));
                        }).guid = t.guid = t.guid || E.guid++),
                        r
                    );
            }),
            (E.holdReady = function (t) {
                t ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = k),
            (E.isFunction = y),
            (E.isWindow = m),
            (E.camelCase = Y),
            (E.type = w),
            (E.now = Date.now),
            (E.isNumeric = function (t) {
                var e = E.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return E;
                });
        var ti = T.jQuery,
            ei = T.$;
        return (
            (E.noConflict = function (t) {
                return T.$ === E && (T.$ = ei), t && T.jQuery === E && (T.jQuery = ti), E;
            }),
            t || (T.jQuery = T.$ = E),
            E
        );
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.Popper = e());
    })(this, function () {
        "use strict";
        function s(t) {
            return t && "[object Function]" === {}.toString.call(t);
        }
        function b(t, e) {
            if (1 !== t.nodeType) return [];
            var i = getComputedStyle(t, null);
            return e ? i[e] : i;
        }
        function p(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function m(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body;
            }
            var e = b(t),
                i = e.overflow,
                n = e.overflowX,
                r = e.overflowY;
            return /(auto|scroll|overlay)/.test(i + r + n) ? t : m(p(t));
        }
        function g(t) {
            return 11 === t ? $ : 10 === t ? U : $ || U;
        }
        function y(t) {
            if (!t) return document.documentElement;
            for (var e = g(10) ? document.body : null, i = t.offsetParent; i === e && t.nextElementSibling; ) i = (t = t.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? (-1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === b(i, "position") ? y(i) : i) : t ? t.ownerDocument.documentElement : document.documentElement;
        }
        function l(t) {
            return null === t.parentNode ? t : l(t.parentNode);
        }
        function _(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = i ? t : e,
                r = i ? e : t,
                s = document.createRange();
            s.setStart(n, 0), s.setEnd(r, 0);
            var o = s.commonAncestorContainer;
            if ((t !== o && e !== o) || n.contains(r))
                return (function (t) {
                    var e = t.nodeName;
                    return "BODY" !== e && ("HTML" === e || y(t.firstElementChild) === t);
                })(o)
                    ? o
                    : y(o);
            var a = l(t);
            return a.host ? _(a.host, e) : _(t, l(e).host);
        }
        function v(t, e) {
            var i = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft",
                n = t.nodeName;
            if ("BODY" !== n && "HTML" !== n) return t[i];
            var r = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || r)[i];
        }
        function h(t, e) {
            var i = "x" === e ? "Left" : "Top",
                n = "Left" == i ? "Right" : "Bottom";
            return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10);
        }
        function r(t, e, i, n) {
            return j(
                e["offset" + t],
                e["scroll" + t],
                i["client" + t],
                i["offset" + t],
                i["scroll" + t],
                g(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
            );
        }
        function w(t) {
            var e = t.body,
                i = t.documentElement,
                n = g(10) && getComputedStyle(i);
            return { height: r("Height", e, i, n), width: r("Width", e, i, n) };
        }
        function x(t) {
            return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
        }
        function T(t) {
            var e = {};
            try {
                if (g(10)) {
                    e = t.getBoundingClientRect();
                    var i = v(t, "top"),
                        n = v(t, "left");
                    (e.top += i), (e.left += n), (e.bottom += i), (e.right += n);
                } else e = t.getBoundingClientRect();
            } catch (t) {}
            var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                s = "HTML" === t.nodeName ? w(t.ownerDocument) : {},
                o = s.width || t.clientWidth || r.right - r.left,
                a = s.height || t.clientHeight || r.bottom - r.top,
                l = t.offsetWidth - o,
                u = t.offsetHeight - a;
            if (l || u) {
                var c = b(t);
                (l -= h(c, "x")), (u -= h(c, "y")), (r.width -= l), (r.height -= u);
            }
            return x(r);
        }
        function C(t, e, i) {
            var n = 2 < arguments.length && void 0 !== i && i,
                r = g(10),
                s = "HTML" === e.nodeName,
                o = T(t),
                a = T(e),
                l = m(t),
                u = b(e),
                c = parseFloat(u.borderTopWidth, 10),
                h = parseFloat(u.borderLeftWidth, 10);
            n && s && ((a.top = j(a.top, 0)), (a.left = j(a.left, 0)));
            var f = x({ top: o.top - a.top - c, left: o.left - a.left - h, width: o.width, height: o.height });
            if (((f.marginTop = 0), (f.marginLeft = 0), !r && s)) {
                var d = parseFloat(u.marginTop, 10),
                    p = parseFloat(u.marginLeft, 10);
                (f.top -= c - d), (f.bottom -= c - d), (f.left -= h - p), (f.right -= h - p), (f.marginTop = d), (f.marginLeft = p);
            }
            return (
                (r && !n ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
                    (f = (function (t, e, i) {
                        var n = 2 < arguments.length && void 0 !== i && i,
                            r = v(e, "top"),
                            s = v(e, "left"),
                            o = n ? -1 : 1;
                        return (t.top += r * o), (t.bottom += r * o), (t.left += s * o), (t.right += s * o), t;
                    })(f, e)),
                f
            );
        }
        function E(t) {
            if (!t || !t.parentElement || g()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === b(e, "transform"); ) e = e.parentElement;
            return e || document.documentElement;
        }
        function S(t, e, i, n, r) {
            var s = 4 < arguments.length && void 0 !== r && r,
                o = { top: 0, left: 0 },
                a = s ? E(t) : _(t, e);
            if ("viewport" === n)
                o = (function (t, e) {
                    var i = 1 < arguments.length && void 0 !== e && e,
                        n = t.ownerDocument.documentElement,
                        r = C(t, n),
                        s = j(n.clientWidth, window.innerWidth || 0),
                        o = j(n.clientHeight, window.innerHeight || 0),
                        a = i ? 0 : v(n),
                        l = i ? 0 : v(n, "left");
                    return x({ top: a - r.top + r.marginTop, left: l - r.left + r.marginLeft, width: s, height: o });
                })(a, s);
            else {
                var l;
                "scrollParent" === n ? "BODY" === (l = m(p(e))).nodeName && (l = t.ownerDocument.documentElement) : (l = "window" === n ? t.ownerDocument.documentElement : n);
                var u = C(l, a, s);
                if (
                    "HTML" !== l.nodeName ||
                    (function t(e) {
                        var i = e.nodeName;
                        return "BODY" !== i && "HTML" !== i && ("fixed" === b(e, "position") || t(p(e)));
                    })(a)
                )
                    o = u;
                else {
                    var c = w(t.ownerDocument),
                        h = c.height,
                        f = c.width;
                    (o.top += u.top - u.marginTop), (o.bottom = h + u.top), (o.left += u.left - u.marginLeft), (o.right = f + u.left);
                }
            }
            var d = "number" == typeof (i = i || 0);
            return (o.left += d ? i : i.left || 0), (o.top += d ? i : i.top || 0), (o.right -= d ? i : i.right || 0), (o.bottom -= d ? i : i.bottom || 0), o;
        }
        function a(t, e, n, i, r, s) {
            var o = 5 < arguments.length && void 0 !== s ? s : 0;
            if (-1 === t.indexOf("auto")) return t;
            var a = S(n, i, o, r),
                l = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
                u = Object.keys(l)
                    .map(function (t) {
                        return X({ key: t }, l[t], {
                            area: (function (t) {
                                return t.width * t.height;
                            })(l[t]),
                        });
                    })
                    .sort(function (t, e) {
                        return e.area - t.area;
                    }),
                c = u.filter(function (t) {
                    var e = t.width,
                        i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight;
                }),
                h = 0 < c.length ? c[0].key : u[0].key,
                f = t.split("-")[1];
            return h + (f ? "-" + f : "");
        }
        function u(t, e, i, n) {
            var r = 3 < arguments.length && void 0 !== n ? n : null;
            return C(i, r ? E(e) : _(e, i), r);
        }
        function k(t) {
            var e = getComputedStyle(t),
                i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
            return { width: t.offsetWidth + n, height: t.offsetHeight + i };
        }
        function A(t) {
            var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return t.replace(/left|right|bottom|top/g, function (t) {
                return e[t];
            });
        }
        function O(t, e, i) {
            i = i.split("-")[0];
            var n = k(t),
                r = { width: n.width, height: n.height },
                s = -1 !== ["right", "left"].indexOf(i),
                o = s ? "top" : "left",
                a = s ? "left" : "top",
                l = s ? "height" : "width",
                u = s ? "width" : "height";
            return (r[o] = e[o] + e[l] / 2 - n[l] / 2), (r[a] = i === a ? e[a] - n[u] : e[A(a)]), r;
        }
        function D(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function P(t, i, e) {
            return (
                (void 0 === e
                    ? t
                    : t.slice(
                          0,
                          (function (t, e, i) {
                              if (Array.prototype.findIndex)
                                  return t.findIndex(function (t) {
                                      return t[e] === i;
                                  });
                              var n = D(t, function (t) {
                                  return t[e] === i;
                              });
                              return t.indexOf(n);
                          })(t, "name", e)
                      )
                ).forEach(function (t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var e = t.function || t.fn;
                    t.enabled && s(e) && ((i.offsets.popper = x(i.offsets.popper)), (i.offsets.reference = x(i.offsets.reference)), (i = e(i, t)));
                }),
                i
            );
        }
        function t(t, i) {
            return t.some(function (t) {
                var e = t.name;
                return t.enabled && e === i;
            });
        }
        function I(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                var r = e[n],
                    s = r ? "" + r + i : t;
                if (void 0 !== document.body.style[s]) return s;
            }
            return null;
        }
        function o(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window;
        }
        function e(t, e, i, n) {
            (i.updateBound = n), o(t).addEventListener("resize", i.updateBound, { passive: !0 });
            var r = m(t);
            return (
                (function t(e, i, n, r) {
                    var s = "BODY" === e.nodeName,
                        o = s ? e.ownerDocument.defaultView : e;
                    o.addEventListener(i, n, { passive: !0 }), s || t(m(o.parentNode), i, n, r), r.push(o);
                })(r, "scroll", i.updateBound, i.scrollParents),
                (i.scrollElement = r),
                (i.eventsEnabled = !0),
                i
            );
        }
        function i() {
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = (function (t, e) {
                    return (
                        o(t).removeEventListener("resize", e.updateBound),
                        e.scrollParents.forEach(function (t) {
                            t.removeEventListener("scroll", e.updateBound);
                        }),
                        (e.updateBound = null),
                        (e.scrollParents = []),
                        (e.scrollElement = null),
                        (e.eventsEnabled = !1),
                        e
                    );
                })(this.reference, this.state)));
        }
        function c(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function f(i, n) {
            Object.keys(n).forEach(function (t) {
                var e = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && c(n[t]) && (e = "px"), (i.style[t] = n[t] + e);
            });
        }
        function N(t, e, i) {
            var n = D(t, function (t) {
                    return t.name === e;
                }),
                r =
                    !!n &&
                    t.some(function (t) {
                        return t.name === i && t.enabled && t.order < n.order;
                    });
            if (!r) {
                var s = "`" + e + "`";
                console.warn("`" + i + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!");
            }
            return r;
        }
        function n(t, e) {
            var i = 1 < arguments.length && void 0 !== e && e,
                n = Q.indexOf(t),
                r = Q.slice(n + 1).concat(Q.slice(0, n));
            return i ? r.reverse() : r;
        }
        function d(t, r, s, e) {
            var o = [0, 0],
                a = -1 !== ["right", "left"].indexOf(e),
                i = t.split(/(\+|\-)/).map(function (t) {
                    return t.trim();
                }),
                n = i.indexOf(
                    D(i, function (t) {
                        return -1 !== t.search(/,|\s/);
                    })
                );
            i[n] && -1 === i[n].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                u = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))];
            return (
                (u = u.map(function (t, e) {
                    var i = (1 === e ? !a : a) ? "height" : "width",
                        n = !1;
                    return t
                        .reduce(function (t, e) {
                            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (n = !0), t) : n ? ((t[t.length - 1] += e), (n = !1), t) : t.concat(e);
                        }, [])
                        .map(function (t) {
                            return (function (t, e, i, n) {
                                var r,
                                    s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +s[1],
                                    a = s[2];
                                if (!o) return t;
                                if (0 !== a.indexOf("%"))
                                    return "vh" !== a && "vw" !== a ? o : (("vh" === a ? j(document.documentElement.clientHeight, window.innerHeight || 0) : j(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o;
                                switch (a) {
                                    case "%p":
                                        r = i;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        r = n;
                                }
                                return (x(r)[e] / 100) * o;
                            })(t, i, r, s);
                        });
                })).forEach(function (i, n) {
                    i.forEach(function (t, e) {
                        c(t) && (o[n] += t * ("-" === i[e - 1] ? -1 : 1));
                    });
                }),
                o
            );
        }
        for (var R = Math.min, M = Math.round, L = Math.floor, j = Math.max, F = "undefined" != typeof window && "undefined" != typeof document, z = ["Edge", "Trident", "Firefox"], H = 0, W = 0; W < z.length; W += 1)
            if (F && 0 <= navigator.userAgent.indexOf(z[W])) {
                H = 1;
                break;
            }
        function B(t, e, i) {
            return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
        }
        var q =
                F && window.Promise
                    ? function (t) {
                          var e = !1;
                          return function () {
                              e ||
                                  ((e = !0),
                                  window.Promise.resolve().then(function () {
                                      (e = !1), t();
                                  }));
                          };
                      }
                    : function (t) {
                          var e = !1;
                          return function () {
                              e ||
                                  ((e = !0),
                                  setTimeout(function () {
                                      (e = !1), t();
                                  }, H));
                          };
                      },
            $ = F && !(!window.MSInputMethodContext || !document.documentMode),
            U = F && /MSIE 10/.test(navigator.userAgent),
            Y = function (t, e, i) {
                return e && et(t.prototype, e), i && et(t, i), t;
            },
            X =
                Object.assign ||
                function (t) {
                    for (var e, i = 1; i < arguments.length; i++) for (var n in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t;
                },
            V = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Q = V.slice(3),
            K = "flip",
            J = "clockwise",
            G = "counterclockwise",
            Z =
                (Y(tt, [
                    {
                        key: "update",
                        value: function () {
                            return function () {
                                if (!this.state.isDestroyed) {
                                    var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                                    (t.offsets.reference = u(this.state, this.popper, this.reference, this.options.positionFixed)),
                                        (t.placement = a(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                                        (t.originalPlacement = t.placement),
                                        (t.positionFixed = this.options.positionFixed),
                                        (t.offsets.popper = O(this.popper, t.offsets.reference, t.placement)),
                                        (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                                        (t = P(this.modifiers, t)),
                                        this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
                                }
                            }.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return function () {
                                return (
                                    (this.state.isDestroyed = !0),
                                    t(this.modifiers, "applyStyle") &&
                                        (this.popper.removeAttribute("x-placement"),
                                        (this.popper.style.position = ""),
                                        (this.popper.style.top = ""),
                                        (this.popper.style.left = ""),
                                        (this.popper.style.right = ""),
                                        (this.popper.style.bottom = ""),
                                        (this.popper.style.willChange = ""),
                                        (this.popper.style[I("transform")] = "")),
                                    this.disableEventListeners(),
                                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                    this
                                );
                            }.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return function () {
                                this.state.eventsEnabled || (this.state = e(this.reference, this.options, this.state, this.scheduleUpdate));
                            }.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return i.call(this);
                        },
                    },
                ]),
                tt);
        function tt(t, e) {
            var i = this,
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, tt),
                (this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update);
                }),
                (this.update = q(this.update.bind(this))),
                (this.options = X({}, tt.Defaults, n)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = e && e.jquery ? e[0] : e),
                (this.options.modifiers = {}),
                Object.keys(X({}, tt.Defaults.modifiers, n.modifiers)).forEach(function (t) {
                    i.options.modifiers[t] = X({}, tt.Defaults.modifiers[t] || {}, n.modifiers ? n.modifiers[t] : {});
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function (t) {
                        return X({ name: t }, i.options.modifiers[t]);
                    })
                    .sort(function (t, e) {
                        return t.order - e.order;
                    })),
                this.modifiers.forEach(function (t) {
                    t.enabled && s(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                }),
                this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(), (this.state.eventsEnabled = r);
        }
        function et(t, e) {
            for (var i, n = 0; n < e.length; n++) ((i = e[n]).enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
        return (
            (Z.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
            (Z.placements = V),
            (Z.Defaults = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.placement,
                                i = e.split("-")[0],
                                n = e.split("-")[1];
                            if (n) {
                                var r = t.offsets,
                                    s = r.reference,
                                    o = r.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(i),
                                    l = a ? "left" : "top",
                                    u = a ? "width" : "height",
                                    c = { start: B({}, l, s[l]), end: B({}, l, s[l] + s[u] - o[u]) };
                                t.offsets.popper = X({}, o, c[n]);
                            }
                            return t;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (t, e) {
                            var i,
                                n = e.offset,
                                r = t.placement,
                                s = t.offsets,
                                o = s.popper,
                                a = s.reference,
                                l = r.split("-")[0];
                            return (
                                (i = c(+n) ? [+n, 0] : d(n, o, a, l)),
                                "left" === l
                                    ? ((o.top += i[0]), (o.left -= i[1]))
                                    : "right" === l
                                    ? ((o.top += i[0]), (o.left += i[1]))
                                    : "top" === l
                                    ? ((o.left += i[0]), (o.top -= i[1]))
                                    : "bottom" === l && ((o.left += i[0]), (o.top += i[1])),
                                (t.popper = o),
                                t
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (t, n) {
                            var e = n.boundariesElement || y(t.instance.popper);
                            t.instance.reference === e && (e = y(e));
                            var i = I("transform"),
                                r = t.instance.popper.style,
                                s = r.top,
                                o = r.left,
                                a = r[i];
                            (r.top = ""), (r.left = ""), (r[i] = "");
                            var l = S(t.instance.popper, t.instance.reference, n.padding, e, t.positionFixed);
                            (r.top = s), (r.left = o), (r[i] = a), (n.boundaries = l);
                            var u = n.priority,
                                c = t.offsets.popper,
                                h = {
                                    primary: function (t) {
                                        var e = c[t];
                                        return c[t] < l[t] && !n.escapeWithReference && (e = j(c[t], l[t])), B({}, t, e);
                                    },
                                    secondary: function (t) {
                                        var e = "right" === t ? "left" : "top",
                                            i = c[e];
                                        return c[t] > l[t] && !n.escapeWithReference && (i = R(c[e], l[t] - ("right" === t ? c.width : c.height))), B({}, e, i);
                                    },
                                };
                            return (
                                u.forEach(function (t) {
                                    var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                                    c = X({}, c, h[e](t));
                                }),
                                (t.offsets.popper = c),
                                t
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.offsets,
                                i = e.popper,
                                n = e.reference,
                                r = t.placement.split("-")[0],
                                s = L,
                                o = -1 !== ["top", "bottom"].indexOf(r),
                                a = o ? "right" : "bottom",
                                l = o ? "left" : "top",
                                u = o ? "width" : "height";
                            return i[a] < s(n[l]) && (t.offsets.popper[l] = s(n[l]) - i[u]), i[l] > s(n[a]) && (t.offsets.popper[l] = s(n[a])), t;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (t, e) {
                            var i;
                            if (!N(t.instance.modifiers, "arrow", "keepTogether")) return t;
                            var n = e.element;
                            if ("string" == typeof n) {
                                if (!(n = t.instance.popper.querySelector(n))) return t;
                            } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                            var r = t.placement.split("-")[0],
                                s = t.offsets,
                                o = s.popper,
                                a = s.reference,
                                l = -1 !== ["left", "right"].indexOf(r),
                                u = l ? "height" : "width",
                                c = l ? "Top" : "Left",
                                h = c.toLowerCase(),
                                f = l ? "left" : "top",
                                d = l ? "bottom" : "right",
                                p = k(n)[u];
                            a[d] - p < o[h] && (t.offsets.popper[h] -= o[h] - (a[d] - p)), a[h] + p > o[d] && (t.offsets.popper[h] += a[h] + p - o[d]), (t.offsets.popper = x(t.offsets.popper));
                            var m = a[h] + a[u] / 2 - p / 2,
                                g = b(t.instance.popper),
                                _ = parseFloat(g["margin" + c], 10),
                                v = parseFloat(g["border" + c + "Width"], 10),
                                y = m - t.offsets.popper[h] - _ - v;
                            return (y = j(R(o[u] - p, y), 0)), (t.arrowElement = n), (t.offsets.arrow = (B((i = {}), h, M(y)), B(i, f, ""), i)), t;
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (d, p) {
                            if (t(d.instance.modifiers, "inner")) return d;
                            if (d.flipped && d.placement === d.originalPlacement) return d;
                            var m = S(d.instance.popper, d.instance.reference, p.padding, p.boundariesElement, d.positionFixed),
                                g = d.placement.split("-")[0],
                                _ = A(g),
                                v = d.placement.split("-")[1] || "",
                                y = [];
                            switch (p.behavior) {
                                case K:
                                    y = [g, _];
                                    break;
                                case J:
                                    y = n(g);
                                    break;
                                case G:
                                    y = n(g, !0);
                                    break;
                                default:
                                    y = p.behavior;
                            }
                            return (
                                y.forEach(function (t, e) {
                                    if (g !== t || y.length === e + 1) return d;
                                    (g = d.placement.split("-")[0]), (_ = A(g));
                                    var i = d.offsets.popper,
                                        n = d.offsets.reference,
                                        r = L,
                                        s = ("left" === g && r(i.right) > r(n.left)) || ("right" === g && r(i.left) < r(n.right)) || ("top" === g && r(i.bottom) > r(n.top)) || ("bottom" === g && r(i.top) < r(n.bottom)),
                                        o = r(i.left) < r(m.left),
                                        a = r(i.right) > r(m.right),
                                        l = r(i.top) < r(m.top),
                                        u = r(i.bottom) > r(m.bottom),
                                        c = ("left" === g && o) || ("right" === g && a) || ("top" === g && l) || ("bottom" === g && u),
                                        h = -1 !== ["top", "bottom"].indexOf(g),
                                        f = !!p.flipVariations && ((h && "start" === v && o) || (h && "end" === v && a) || (!h && "start" === v && l) || (!h && "end" === v && u));
                                    (s || c || f) &&
                                        ((d.flipped = !0),
                                        (s || c) && (g = y[e + 1]),
                                        f &&
                                            (v = (function (t) {
                                                return "end" === t ? "start" : "start" === t ? "end" : t;
                                            })(v)),
                                        (d.placement = g + (v ? "-" + v : "")),
                                        (d.offsets.popper = X({}, d.offsets.popper, O(d.instance.popper, d.offsets.reference, d.placement))),
                                        (d = P(d.instance.modifiers, d, "flip")));
                                }),
                                d
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (t) {
                            var e = t.placement,
                                i = e.split("-")[0],
                                n = t.offsets,
                                r = n.popper,
                                s = n.reference,
                                o = -1 !== ["left", "right"].indexOf(i),
                                a = -1 === ["top", "left"].indexOf(i);
                            return (r[o ? "left" : "top"] = s[i] - (a ? r[o ? "width" : "height"] : 0)), (t.placement = A(e)), (t.offsets.popper = x(r)), t;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (t) {
                            if (!N(t.instance.modifiers, "hide", "preventOverflow")) return t;
                            var e = t.offsets.reference,
                                i = D(t.instance.modifiers, function (t) {
                                    return "preventOverflow" === t.name;
                                }).boundaries;
                            if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                                if (!0 === t.hide) return t;
                                (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === t.hide) return t;
                                (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                            }
                            return t;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (t, e) {
                            var i = e.x,
                                n = e.y,
                                r = t.offsets.popper,
                                s = D(t.instance.modifiers, function (t) {
                                    return "applyStyle" === t.name;
                                }).gpuAcceleration;
                            void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var o,
                                a,
                                l = void 0 === s ? e.gpuAcceleration : s,
                                u = y(t.instance.popper),
                                c = T(u),
                                h = { position: r.position },
                                f = { left: L(r.left), top: M(r.top), bottom: M(r.bottom), right: L(r.right) },
                                d = "bottom" === i ? "top" : "bottom",
                                p = "right" === n ? "left" : "right",
                                m = I("transform");
                            if (
                                ((a = "bottom" == d ? ("HTML" === u.nodeName ? -u.clientHeight + f.bottom : -c.height + f.bottom) : f.top),
                                (o = "right" == p ? ("HTML" === u.nodeName ? -u.clientWidth + f.right : -c.width + f.right) : f.left),
                                l && m)
                            )
                                (h[m] = "translate3d(" + o + "px, " + a + "px, 0)"), (h[d] = 0), (h[p] = 0), (h.willChange = "transform");
                            else {
                                var g = "bottom" == d ? -1 : 1,
                                    _ = "right" == p ? -1 : 1;
                                (h[d] = a * g), (h[p] = o * _), (h.willChange = d + ", " + p);
                            }
                            var v = { "x-placement": t.placement };
                            return (t.attributes = X({}, v, t.attributes)), (t.styles = X({}, h, t.styles)), (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)), t;
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (t) {
                            return (
                                f(t.instance.popper, t.styles),
                                (function (e, i) {
                                    Object.keys(i).forEach(function (t) {
                                        !1 === i[t] ? e.removeAttribute(t) : e.setAttribute(t, i[t]);
                                    });
                                })(t.instance.popper, t.attributes),
                                t.arrowElement && Object.keys(t.arrowStyles).length && f(t.arrowElement, t.arrowStyles),
                                t
                            );
                        },
                        onLoad: function (t, e, i, n, r) {
                            var s = u(r, e, t, i.positionFixed),
                                o = a(i.placement, s, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                            return e.setAttribute("x-placement", o), f(e, { position: i.positionFixed ? "fixed" : "absolute" }), i;
                        },
                        gpuAcceleration: void 0,
                    },
                },
            }),
            Z
        );
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports, require("jquery"), require("popper.js"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery", "popper.js"], e)
            : e((t.bootstrap = {}), t.jQuery, t.Popper);
    })(this, function (t, e, u) {
        "use strict";
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        function s(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
        }
        function o() {
            return (o =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                    }
                    return t;
                }).apply(this, arguments);
        }
        (e = e && e.hasOwnProperty("default") ? e.default : e), (u = u && u.hasOwnProperty("default") ? u.default : u);
        var r,
            i,
            a,
            l,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _,
            v,
            y,
            b,
            w,
            x,
            T,
            C,
            E,
            S,
            k,
            A,
            O,
            D,
            P,
            I,
            N,
            R,
            M,
            L,
            j,
            F,
            z,
            H,
            W,
            B,
            q,
            $,
            U,
            Y,
            X,
            V,
            Q,
            K,
            J,
            G,
            Z,
            tt,
            et,
            it,
            nt,
            rt,
            st,
            ot,
            at,
            lt,
            ut,
            ct,
            ht,
            ft,
            dt,
            pt,
            mt,
            gt,
            _t,
            vt,
            yt,
            bt,
            wt,
            xt,
            Tt,
            Ct,
            Et,
            St,
            kt,
            At,
            Ot,
            Dt,
            Pt,
            It,
            Nt,
            Rt,
            Mt,
            Lt,
            jt,
            Ft,
            zt,
            Ht,
            Wt,
            Bt,
            qt,
            $t,
            Ut,
            Yt,
            Xt,
            Vt,
            Qt,
            Kt,
            Jt,
            Gt,
            Zt,
            te,
            ee,
            ie,
            ne,
            re,
            se,
            oe,
            ae,
            le,
            ue,
            ce,
            he,
            fe,
            de,
            pe,
            me,
            ge,
            _e,
            ve,
            ye,
            be,
            we,
            xe,
            Te,
            Ce,
            Ee,
            Se,
            ke,
            Ae,
            Oe,
            De,
            Pe,
            Ie,
            Ne,
            Re,
            Me,
            Le,
            je,
            Fe,
            ze,
            He,
            We,
            Be,
            qe,
            $e,
            Ue,
            Ye,
            Xe,
            Ve,
            Qe =
                ((Ye = e),
                (Xe = !1),
                (Ve = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (t) {
                        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
                        return t;
                    },
                    getSelectorFromElement: function (t) {
                        var e,
                            i = t.getAttribute("data-target");
                        (i && "#" !== i) || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && ((e = i), (i = e = "function" == typeof Ye.escapeSelector ? Ye.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
                        try {
                            return 0 < Ye(document).find(i).length ? i : null;
                        } catch (t) {
                            return null;
                        }
                    },
                    reflow: function (t) {
                        return t.offsetHeight;
                    },
                    triggerTransitionEnd: function (t) {
                        Ye(t).trigger(Xe.end);
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(Xe);
                    },
                    isElement: function (t) {
                        return (t[0] || t).nodeType;
                    },
                    typeCheckConfig: function (t, e, i) {
                        for (var n in i)
                            if (Object.prototype.hasOwnProperty.call(i, n)) {
                                var r = i[n],
                                    s = e[n],
                                    o =
                                        s && Ve.isElement(s)
                                            ? "element"
                                            : ((a = s),
                                              {}.toString
                                                  .call(a)
                                                  .match(/\s([a-zA-Z]+)/)[1]
                                                  .toLowerCase());
                                if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + o + '" but expected type "' + r + '".');
                            }
                        var a;
                    },
                }),
                (Xe = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }),
                (Ye.fn.emulateTransitionEnd = function (t) {
                    var e = this,
                        i = !1;
                    return (
                        Ye(this).one(Ve.TRANSITION_END, function () {
                            i = !0;
                        }),
                        setTimeout(function () {
                            i || Ve.triggerTransitionEnd(e);
                        }, t),
                        this
                    );
                }),
                Ve.supportsTransitionEnd() &&
                    (Ye.event.special[Ve.TRANSITION_END] = {
                        bindType: Xe.end,
                        delegateType: Xe.end,
                        handle: function (t) {
                            if (Ye(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                        },
                    }),
                Ve),
            Ke =
                ((i = "alert"),
                (l = "." + (a = "bs.alert")),
                (c = (r = e).fn[i]),
                (h = { CLOSE: "close" + l, CLOSED: "closed" + l, CLICK_DATA_API: "click" + l + ".data-api" }),
                "alert",
                "fade",
                "show",
                ((Ue = pi.prototype).close = function (t) {
                    t = t || this._element;
                    var e = this._getRootElement(t);
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (Ue.dispose = function () {
                    r.removeData(this._element, a), (this._element = null);
                }),
                (Ue._getRootElement = function (t) {
                    var e = Qe.getSelectorFromElement(t),
                        i = !1;
                    return e && (i = r(e)[0]), (i = i || r(t).closest(".alert")[0]);
                }),
                (Ue._triggerCloseEvent = function (t) {
                    var e = r.Event(h.CLOSE);
                    return r(t).trigger(e), e;
                }),
                (Ue._removeElement = function (e) {
                    var i = this;
                    r(e).removeClass("show"),
                        Qe.supportsTransitionEnd() && r(e).hasClass("fade")
                            ? r(e)
                                  .one(Qe.TRANSITION_END, function (t) {
                                      return i._destroyElement(e, t);
                                  })
                                  .emulateTransitionEnd(150)
                            : this._destroyElement(e);
                }),
                (Ue._destroyElement = function (t) {
                    r(t).detach().trigger(h.CLOSED).remove();
                }),
                (pi._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = r(this),
                            e = t.data(a);
                        e || ((e = new pi(this)), t.data(a, e)), "close" === i && e[i](this);
                    });
                }),
                (pi._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                }),
                s(pi, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                ]),
                (f = pi),
                r(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f())),
                (r.fn[i] = f._jQueryInterface),
                (r.fn[i].Constructor = f),
                (r.fn[i].noConflict = function () {
                    return (r.fn[i] = c), f._jQueryInterface;
                }),
                f),
            Je =
                ((p = "button"),
                (g = "." + (m = "bs.button")),
                (_ = ".data-api"),
                (v = (d = e).fn[p]),
                (y = "active"),
                "btn",
                (b = '[data-toggle^="button"]'),
                '[data-toggle="buttons"]',
                "input",
                ".active",
                ".btn",
                (w = { CLICK_DATA_API: "click" + g + _, FOCUS_BLUR_DATA_API: "focus" + g + _ + " blur" + g + _ }),
                (($e = di.prototype).toggle = function () {
                    var t = !0,
                        e = !0,
                        i = d(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var n = d(this._element).find("input")[0];
                        if (n) {
                            if ("radio" === n.type)
                                if (n.checked && d(this._element).hasClass(y)) t = !1;
                                else {
                                    var r = d(i).find(".active")[0];
                                    r && d(r).removeClass(y);
                                }
                            if (t) {
                                if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                (n.checked = !d(this._element).hasClass(y)), d(n).trigger("change");
                            }
                            n.focus(), (e = !1);
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !d(this._element).hasClass(y)), t && d(this._element).toggleClass(y);
                }),
                ($e.dispose = function () {
                    d.removeData(this._element, m), (this._element = null);
                }),
                (di._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = d(this).data(m);
                        t || ((t = new di(this)), d(this).data(m, t)), "toggle" === e && t[e]();
                    });
                }),
                s(di, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                ]),
                (x = di),
                d(document)
                    .on(w.CLICK_DATA_API, b, function (t) {
                        t.preventDefault();
                        var e = t.target;
                        d(e).hasClass("btn") || (e = d(e).closest(".btn")), x._jQueryInterface.call(d(e), "toggle");
                    })
                    .on(w.FOCUS_BLUR_DATA_API, b, function (t) {
                        var e = d(t.target).closest(".btn")[0];
                        d(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
                    }),
                (d.fn[p] = x._jQueryInterface),
                (d.fn[p].Constructor = x),
                (d.fn[p].noConflict = function () {
                    return (d.fn[p] = v), x._jQueryInterface;
                }),
                x),
            Ge =
                ((Se = "carousel"),
                (Ae = "." + (ke = "bs.carousel")),
                (Oe = (Ce = e).fn[Se]),
                (De = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }),
                (Pe = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }),
                (Ie = "next"),
                (Ne = "prev"),
                (Re = {
                    SLIDE: "slide" + Ae,
                    SLID: "slid" + Ae,
                    KEYDOWN: "keydown" + Ae,
                    MOUSEENTER: "mouseenter" + Ae,
                    MOUSELEAVE: "mouseleave" + Ae,
                    TOUCHEND: "touchend" + Ae,
                    LOAD_DATA_API: "load" + Ae + ".data-api",
                    CLICK_DATA_API: "click" + Ae + ".data-api",
                }),
                (Me = "active"),
                (Le = ".active"),
                (je = ".active.carousel-item"),
                (Fe = ".carousel-item"),
                (ze = ".carousel-item-next, .carousel-item-prev"),
                (He = ".carousel-indicators"),
                (We = "[data-slide], [data-slide-to]"),
                (Be = '[data-ride="carousel"]'),
                ((Ee = fi.prototype).next = function () {
                    this._isSliding || this._slide(Ie);
                }),
                (Ee.nextWhenVisible = function () {
                    !document.hidden && Ce(this._element).is(":visible") && "hidden" !== Ce(this._element).css("visibility") && this.next();
                }),
                (Ee.prev = function () {
                    this._isSliding || this._slide(Ne);
                }),
                (Ee.pause = function (t) {
                    t || (this._isPaused = !0), Ce(this._element).find(ze)[0] && Qe.supportsTransitionEnd() && (Qe.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (Ee.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (Ee.to = function (t) {
                    var e = this;
                    this._activeElement = Ce(this._element).find(je)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            Ce(this._element).one(Re.SLID, function () {
                                return e.to(t);
                            });
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var n = i < t ? Ie : Ne;
                            this._slide(n, this._items[t]);
                        }
                }),
                (Ee.dispose = function () {
                    Ce(this._element).off(Ae),
                        Ce.removeData(this._element, ke),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (Ee._getConfig = function (t) {
                    return (t = o({}, De, t)), Qe.typeCheckConfig(Se, t, Pe), t;
                }),
                (Ee._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                        Ce(this._element).on(Re.KEYDOWN, function (t) {
                            return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                            (Ce(this._element)
                                .on(Re.MOUSEENTER, function (t) {
                                    return e.pause(t);
                                })
                                .on(Re.MOUSELEAVE, function (t) {
                                    return e.cycle(t);
                                }),
                            "ontouchstart" in document.documentElement &&
                                Ce(this._element).on(Re.TOUCHEND, function () {
                                    e.pause(),
                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                        (e.touchTimeout = setTimeout(function (t) {
                                            return e.cycle(t);
                                        }, 500 + e._config.interval));
                                }));
                }),
                (Ee._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (Ee._getItemIndex = function (t) {
                    return (this._items = Ce.makeArray(Ce(t).parent().find(Fe))), this._items.indexOf(t);
                }),
                (Ee._getItemByDirection = function (t, e) {
                    var i = t === Ie,
                        n = t === Ne,
                        r = this._getItemIndex(e),
                        s = this._items.length - 1;
                    if (((n && 0 === r) || (i && r === s)) && !this._config.wrap) return e;
                    var o = (r + (t === Ne ? -1 : 1)) % this._items.length;
                    return -1 == o ? this._items[this._items.length - 1] : this._items[o];
                }),
                (Ee._triggerSlideEvent = function (t, e) {
                    var i = this._getItemIndex(t),
                        n = this._getItemIndex(Ce(this._element).find(je)[0]),
                        r = Ce.Event(Re.SLIDE, { relatedTarget: t, direction: e, from: n, to: i });
                    return Ce(this._element).trigger(r), r;
                }),
                (Ee._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        Ce(this._indicatorsElement).find(Le).removeClass(Me);
                        var e = this._indicatorsElement.children[this._getItemIndex(t)];
                        e && Ce(e).addClass(Me);
                    }
                }),
                (Ee._slide = function (t, e) {
                    var i,
                        n,
                        r,
                        s = this,
                        o = Ce(this._element).find(je)[0],
                        a = this._getItemIndex(o),
                        l = e || (o && this._getItemByDirection(t, o)),
                        u = this._getItemIndex(l),
                        c = Boolean(this._interval);
                    if (((r = t === Ie ? ((i = "carousel-item-left"), (n = "carousel-item-next"), "left") : ((i = "carousel-item-right"), (n = "carousel-item-prev"), "right")), l && Ce(l).hasClass(Me))) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                        (this._isSliding = !0), c && this.pause(), this._setActiveIndicatorElement(l);
                        var h = Ce.Event(Re.SLID, { relatedTarget: l, direction: r, from: a, to: u });
                        Qe.supportsTransitionEnd() && Ce(this._element).hasClass("slide")
                            ? (Ce(l).addClass(n),
                              Qe.reflow(l),
                              Ce(o).addClass(i),
                              Ce(l).addClass(i),
                              Ce(o)
                                  .one(Qe.TRANSITION_END, function () {
                                      Ce(l)
                                          .removeClass(i + " " + n)
                                          .addClass(Me),
                                          Ce(o).removeClass(Me + " " + n + " " + i),
                                          (s._isSliding = !1),
                                          setTimeout(function () {
                                              return Ce(s._element).trigger(h);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(600))
                            : (Ce(o).removeClass(Me), Ce(l).addClass(Me), (this._isSliding = !1), Ce(this._element).trigger(h)),
                            c && this.cycle();
                    }
                }),
                (fi._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = Ce(this).data(ke),
                            e = o({}, De, Ce(this).data());
                        "object" == typeof n && (e = o({}, e, n));
                        var i = "string" == typeof n ? n : e.slide;
                        if ((t || ((t = new fi(this, e)), Ce(this).data(ke, t)), "number" == typeof n)) t.to(n);
                        else if ("string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]();
                        } else e.interval && (t.pause(), t.cycle());
                    });
                }),
                (fi._dataApiClickHandler = function (t) {
                    var e = Qe.getSelectorFromElement(this);
                    if (e) {
                        var i = Ce(e)[0];
                        if (i && Ce(i).hasClass("carousel")) {
                            var n = o({}, Ce(i).data(), Ce(this).data()),
                                r = this.getAttribute("data-slide-to");
                            r && (n.interval = !1), fi._jQueryInterface.call(Ce(i), n), r && Ce(i).data(ke).to(r), t.preventDefault();
                        }
                    }
                }),
                s(fi, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return De;
                        },
                    },
                ]),
                (qe = fi),
                Ce(document).on(Re.CLICK_DATA_API, We, qe._dataApiClickHandler),
                Ce(window).on(Re.LOAD_DATA_API, function () {
                    Ce(Be).each(function () {
                        var t = Ce(this);
                        qe._jQueryInterface.call(t, t.data());
                    });
                }),
                (Ce.fn[Se] = qe._jQueryInterface),
                (Ce.fn[Se].Constructor = qe),
                (Ce.fn[Se].noConflict = function () {
                    return (Ce.fn[Se] = Oe), qe._jQueryInterface;
                }),
                qe),
            Ze =
                ((ce = "collapse"),
                (fe = "." + (he = "bs.collapse")),
                (de = (le = e).fn[ce]),
                (pe = { toggle: !0, parent: "" }),
                (me = { toggle: "boolean", parent: "(string|element)" }),
                (ge = { SHOW: "show" + fe, SHOWN: "shown" + fe, HIDE: "hide" + fe, HIDDEN: "hidden" + fe, CLICK_DATA_API: "click" + fe + ".data-api" }),
                (_e = "show"),
                (ve = "collapse"),
                (ye = "collapsing"),
                (be = "collapsed"),
                (we = ".show, .collapsing"),
                (xe = '[data-toggle="collapse"]'),
                ((ue = hi.prototype).toggle = function () {
                    le(this._element).hasClass(_e) ? this.hide() : this.show();
                }),
                (ue.show = function () {
                    var t,
                        e,
                        i = this;
                    if (
                        !(
                            this._isTransitioning ||
                            le(this._element).hasClass(_e) ||
                            (this._parent &&
                                0 ===
                                    (t = le.makeArray(
                                        le(this._parent)
                                            .find(we)
                                            .filter('[data-parent="' + this._config.parent + '"]')
                                    )).length &&
                                (t = null),
                            t && (e = le(t).not(this._selector).data(he)) && e._isTransitioning)
                        )
                    ) {
                        var n = le.Event(ge.SHOW);
                        if ((le(this._element).trigger(n), !n.isDefaultPrevented())) {
                            t && (hi._jQueryInterface.call(le(t).not(this._selector), "hide"), e || le(t).data(he, null));
                            var r = this._getDimension();
                            le(this._element).removeClass(ve).addClass(ye), (this._element.style[r] = 0) < this._triggerArray.length && le(this._triggerArray).removeClass(be).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = function () {
                                le(i._element).removeClass(ye).addClass(ve).addClass(_e), (i._element.style[r] = ""), i.setTransitioning(!1), le(i._element).trigger(ge.SHOWN);
                            };
                            if (Qe.supportsTransitionEnd()) {
                                var o = "scroll" + (r[0].toUpperCase() + r.slice(1));
                                le(this._element).one(Qe.TRANSITION_END, s).emulateTransitionEnd(600), (this._element.style[r] = this._element[o] + "px");
                            } else s();
                        }
                    }
                }),
                (ue.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && le(this._element).hasClass(_e)) {
                        var e = le.Event(ge.HIDE);
                        if ((le(this._element).trigger(e), !e.isDefaultPrevented())) {
                            var i = this._getDimension();
                            if (((this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), Qe.reflow(this._element), le(this._element).addClass(ye).removeClass(ve).removeClass(_e), 0 < this._triggerArray.length))
                                for (var n = 0; n < this._triggerArray.length; n++) {
                                    var r = this._triggerArray[n],
                                        s = Qe.getSelectorFromElement(r);
                                    null !== s && (le(s).hasClass(_e) || le(r).addClass(be).attr("aria-expanded", !1));
                                }
                            this.setTransitioning(!0);
                            var o = function () {
                                t.setTransitioning(!1), le(t._element).removeClass(ye).addClass(ve).trigger(ge.HIDDEN);
                            };
                            (this._element.style[i] = ""), Qe.supportsTransitionEnd() ? le(this._element).one(Qe.TRANSITION_END, o).emulateTransitionEnd(600) : o();
                        }
                    }
                }),
                (ue.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (ue.dispose = function () {
                    le.removeData(this._element, he), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (ue._getConfig = function (t) {
                    return ((t = o({}, pe, t)).toggle = Boolean(t.toggle)), Qe.typeCheckConfig(ce, t, me), t;
                }),
                (ue._getDimension = function () {
                    return le(this._element).hasClass("width") ? "width" : "height";
                }),
                (ue._getParent = function () {
                    var i = this,
                        t = null;
                    Qe.isElement(this._config.parent) ? ((t = this._config.parent), void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : (t = le(this._config.parent)[0]);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return (
                        le(t)
                            .find(e)
                            .each(function (t, e) {
                                i._addAriaAndCollapsedClass(hi._getTargetFromElement(e), [e]);
                            }),
                        t
                    );
                }),
                (ue._addAriaAndCollapsedClass = function (t, e) {
                    if (t) {
                        var i = le(t).hasClass(_e);
                        0 < e.length && le(e).toggleClass(be, !i).attr("aria-expanded", i);
                    }
                }),
                (hi._getTargetFromElement = function (t) {
                    var e = Qe.getSelectorFromElement(t);
                    return e ? le(e)[0] : null;
                }),
                (hi._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = le(this),
                            e = t.data(he),
                            i = o({}, pe, t.data(), "object" == typeof n && n);
                        if ((!e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || ((e = new hi(this, i)), t.data(he, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]();
                        }
                    });
                }),
                s(hi, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return pe;
                        },
                    },
                ]),
                (Te = hi),
                le(document).on(ge.CLICK_DATA_API, xe, function (t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var i = le(this),
                        e = Qe.getSelectorFromElement(this);
                    le(e).each(function () {
                        var t = le(this),
                            e = t.data(he) ? "toggle" : i.data();
                        Te._jQueryInterface.call(t, e);
                    });
                }),
                (le.fn[ce] = Te._jQueryInterface),
                (le.fn[ce].Constructor = Te),
                (le.fn[ce].noConflict = function () {
                    return (le.fn[ce] = de), Te._jQueryInterface;
                }),
                Te),
            ti =
                ((Xt = "dropdown"),
                (Qt = "." + (Vt = "bs.dropdown")),
                (Kt = ".data-api"),
                (Jt = (Ut = e).fn[Xt]),
                (Gt = new RegExp("38|40|27")),
                (Zt = { HIDE: "hide" + Qt, HIDDEN: "hidden" + Qt, SHOW: "show" + Qt, SHOWN: "shown" + Qt, CLICK: "click" + Qt, CLICK_DATA_API: "click" + Qt + Kt, KEYDOWN_DATA_API: "keydown" + Qt + Kt, KEYUP_DATA_API: "keyup" + Qt + Kt }),
                (te = "disabled"),
                (ee = "show"),
                (ie = "dropdown-menu-right"),
                (ne = '[data-toggle="dropdown"]'),
                (re = ".dropdown-menu"),
                (se = { offset: 0, flip: !0, boundary: "scrollParent" }),
                (oe = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" }),
                ((Yt = ci.prototype).toggle = function () {
                    if (!this._element.disabled && !Ut(this._element).hasClass(te)) {
                        var t = ci._getParentFromElement(this._element),
                            e = Ut(this._menu).hasClass(ee);
                        if ((ci._clearMenus(), !e)) {
                            var i = { relatedTarget: this._element },
                                n = Ut.Event(Zt.SHOW, i);
                            if ((Ut(t).trigger(n), !n.isDefaultPrevented())) {
                                if (!this._inNavbar) {
                                    if (void 0 === u) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var r = this._element;
                                    Ut(t).hasClass("dropup") && (Ut(this._menu).hasClass("dropdown-menu-left") || Ut(this._menu).hasClass(ie)) && (r = t),
                                        "scrollParent" !== this._config.boundary && Ut(t).addClass("position-static"),
                                        (this._popper = new u(r, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === Ut(t).closest(".navbar-nav").length && Ut("body").children().on("mouseover", null, Ut.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    Ut(this._menu).toggleClass(ee),
                                    Ut(t).toggleClass(ee).trigger(Ut.Event(Zt.SHOWN, i));
                            }
                        }
                    }
                }),
                (Yt.dispose = function () {
                    Ut.removeData(this._element, Vt), Ut(this._element).off(Qt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (Yt.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (Yt._addEventListeners = function () {
                    var e = this;
                    Ut(this._element).on(Zt.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                }),
                (Yt._getConfig = function (t) {
                    return (t = o({}, this.constructor.Default, Ut(this._element).data(), t)), Qe.typeCheckConfig(Xt, t, this.constructor.DefaultType), t;
                }),
                (Yt._getMenuElement = function () {
                    if (!this._menu) {
                        var t = ci._getParentFromElement(this._element);
                        this._menu = Ut(t).find(re)[0];
                    }
                    return this._menu;
                }),
                (Yt._getPlacement = function () {
                    var t = Ut(this._element).parent(),
                        e = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? ((e = "top-start"), Ut(this._menu).hasClass(ie) && (e = "top-end"))
                            : t.hasClass("dropright")
                            ? (e = "right-start")
                            : t.hasClass("dropleft")
                            ? (e = "left-start")
                            : Ut(this._menu).hasClass(ie) && (e = "bottom-end"),
                        e
                    );
                }),
                (Yt._detectNavbar = function () {
                    return 0 < Ut(this._element).closest(".navbar").length;
                }),
                (Yt._getPopperConfig = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (t.fn = function (t) {
                                  return (t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {})), t;
                              })
                            : (t.offset = this._config.offset),
                        { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                    );
                }),
                (ci._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = Ut(this).data(Vt);
                        if ((t || ((t = new ci(this, "object" == typeof e ? e : null)), Ut(this).data(Vt, t)), "string" == typeof e)) {
                            if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                (ci._clearMenus = function (t) {
                    if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                        for (var e = Ut.makeArray(Ut(ne)), i = 0; i < e.length; i++) {
                            var n = ci._getParentFromElement(e[i]),
                                r = Ut(e[i]).data(Vt),
                                s = { relatedTarget: e[i] };
                            if (r) {
                                var o = r._menu;
                                if (Ut(n).hasClass(ee) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && Ut.contains(n, t.target))) {
                                    var a = Ut.Event(Zt.HIDE, s);
                                    Ut(n).trigger(a),
                                        a.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && Ut("body").children().off("mouseover", null, Ut.noop),
                                            e[i].setAttribute("aria-expanded", "false"),
                                            Ut(o).removeClass(ee),
                                            Ut(n).removeClass(ee).trigger(Ut.Event(Zt.HIDDEN, s)));
                                }
                            }
                        }
                }),
                (ci._getParentFromElement = function (t) {
                    var e,
                        i = Qe.getSelectorFromElement(t);
                    return i && (e = Ut(i)[0]), e || t.parentNode;
                }),
                (ci._dataApiKeydownHandler = function (t) {
                    if (
                        (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || Ut(t.target).closest(re).length))) : Gt.test(t.which)) &&
                        (t.preventDefault(), t.stopPropagation(), !this.disabled && !Ut(this).hasClass(te))
                    ) {
                        var e = ci._getParentFromElement(this),
                            i = Ut(e).hasClass(ee);
                        if ((i || (27 === t.which && 32 === t.which)) && (!i || (27 !== t.which && 32 !== t.which))) {
                            var n = Ut(e).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                            if (0 !== n.length) {
                                var r = n.indexOf(t.target);
                                38 === t.which && 0 < r && r--, 40 === t.which && r < n.length - 1 && r++, r < 0 && (r = 0), n[r].focus();
                            }
                        } else {
                            if (27 === t.which) {
                                var s = Ut(e).find(ne)[0];
                                Ut(s).trigger("focus");
                            }
                            Ut(this).trigger("click");
                        }
                    }
                }),
                s(ci, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return se;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return oe;
                        },
                    },
                ]),
                (ae = ci),
                Ut(document)
                    .on(Zt.KEYDOWN_DATA_API, ne, ae._dataApiKeydownHandler)
                    .on(Zt.KEYDOWN_DATA_API, re, ae._dataApiKeydownHandler)
                    .on(Zt.CLICK_DATA_API + " " + Zt.KEYUP_DATA_API, ae._clearMenus)
                    .on(Zt.CLICK_DATA_API, ne, function (t) {
                        t.preventDefault(), t.stopPropagation(), ae._jQueryInterface.call(Ut(this), "toggle");
                    })
                    .on(Zt.CLICK_DATA_API, ".dropdown form", function (t) {
                        t.stopPropagation();
                    }),
                (Ut.fn[Xt] = ae._jQueryInterface),
                (Ut.fn[Xt].Constructor = ae),
                (Ut.fn[Xt].noConflict = function () {
                    return (Ut.fn[Xt] = Jt), ae._jQueryInterface;
                }),
                ae),
            ei =
                ((Dt = "." + (Ot = "bs.modal")),
                (Pt = (kt = e).fn.modal),
                (It = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
                (Nt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }),
                (Rt = {
                    HIDE: "hide" + Dt,
                    HIDDEN: "hidden" + Dt,
                    SHOW: "show" + Dt,
                    SHOWN: "shown" + Dt,
                    FOCUSIN: "focusin" + Dt,
                    RESIZE: "resize" + Dt,
                    CLICK_DISMISS: "click.dismiss" + Dt,
                    KEYDOWN_DISMISS: "keydown.dismiss" + Dt,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + Dt,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Dt,
                    CLICK_DATA_API: "click" + Dt + ".data-api",
                }),
                (Mt = "modal-open"),
                (Lt = "fade"),
                (jt = "show"),
                (Ft = ".modal-dialog"),
                (zt = '[data-toggle="modal"]'),
                (Ht = '[data-dismiss="modal"]'),
                (Wt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
                (Bt = ".sticky-top"),
                (qt = ".navbar-toggler"),
                ((At = ui.prototype).toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (At.show = function (t) {
                    var e = this;
                    if (!this._isTransitioning && !this._isShown) {
                        Qe.supportsTransitionEnd() && kt(this._element).hasClass(Lt) && (this._isTransitioning = !0);
                        var i = kt.Event(Rt.SHOW, { relatedTarget: t });
                        kt(this._element).trigger(i),
                            this._isShown ||
                                i.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                kt(document.body).addClass(Mt),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                kt(this._element).on(Rt.CLICK_DISMISS, Ht, function (t) {
                                    return e.hide(t);
                                }),
                                kt(this._dialog).on(Rt.MOUSEDOWN_DISMISS, function () {
                                    kt(e._element).one(Rt.MOUSEUP_DISMISS, function (t) {
                                        kt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (At.hide = function (t) {
                    var e = this;
                    if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                        var i = kt.Event(Rt.HIDE);
                        if ((kt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                            this._isShown = !1;
                            var n = Qe.supportsTransitionEnd() && kt(this._element).hasClass(Lt);
                            n && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                kt(document).off(Rt.FOCUSIN),
                                kt(this._element).removeClass(jt),
                                kt(this._element).off(Rt.CLICK_DISMISS),
                                kt(this._dialog).off(Rt.MOUSEDOWN_DISMISS),
                                n
                                    ? kt(this._element)
                                          .one(Qe.TRANSITION_END, function (t) {
                                              return e._hideModal(t);
                                          })
                                          .emulateTransitionEnd(300)
                                    : this._hideModal();
                        }
                    }
                }),
                (At.dispose = function () {
                    kt.removeData(this._element, Ot),
                        kt(window, document, this._element, this._backdrop).off(Dt),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._scrollbarWidth = null);
                }),
                (At.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (At._getConfig = function (t) {
                    return (t = o({}, It, t)), Qe.typeCheckConfig("modal", t, Nt), t;
                }),
                (At._showElement = function (t) {
                    var e = this,
                        i = Qe.supportsTransitionEnd() && kt(this._element).hasClass(Lt);
                    function n() {
                        e._config.focus && e._element.focus(), (e._isTransitioning = !1), kt(e._element).trigger(r);
                    }
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        (this._element.scrollTop = 0),
                        i && Qe.reflow(this._element),
                        kt(this._element).addClass(jt),
                        this._config.focus && this._enforceFocus();
                    var r = kt.Event(Rt.SHOWN, { relatedTarget: t });
                    i ? kt(this._dialog).one(Qe.TRANSITION_END, n).emulateTransitionEnd(300) : n();
                }),
                (At._enforceFocus = function () {
                    var e = this;
                    kt(document)
                        .off(Rt.FOCUSIN)
                        .on(Rt.FOCUSIN, function (t) {
                            document !== t.target && e._element !== t.target && 0 === kt(e._element).has(t.target).length && e._element.focus();
                        });
                }),
                (At._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                        ? kt(this._element).on(Rt.KEYDOWN_DISMISS, function (t) {
                              27 === t.which && (t.preventDefault(), e.hide());
                          })
                        : this._isShown || kt(this._element).off(Rt.KEYDOWN_DISMISS);
                }),
                (At._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                        ? kt(window).on(Rt.RESIZE, function (t) {
                              return e.handleUpdate(t);
                          })
                        : kt(window).off(Rt.RESIZE);
                }),
                (At._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            kt(document.body).removeClass(Mt), t._resetAdjustments(), t._resetScrollbar(), kt(t._element).trigger(Rt.HIDDEN);
                        });
                }),
                (At._removeBackdrop = function () {
                    this._backdrop && (kt(this._backdrop).remove(), (this._backdrop = null));
                }),
                (At._showBackdrop = function (t) {
                    var e = this,
                        i = kt(this._element).hasClass(Lt) ? Lt : "";
                    if (this._isShown && this._config.backdrop) {
                        var n = Qe.supportsTransitionEnd() && i;
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            i && kt(this._backdrop).addClass(i),
                            kt(this._backdrop).appendTo(document.body),
                            kt(this._element).on(Rt.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                            }),
                            n && Qe.reflow(this._backdrop),
                            kt(this._backdrop).addClass(jt),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        kt(this._backdrop).one(Qe.TRANSITION_END, t).emulateTransitionEnd(150);
                    } else if (!this._isShown && this._backdrop) {
                        kt(this._backdrop).removeClass(jt);
                        var r = function () {
                            e._removeBackdrop(), t && t();
                        };
                        Qe.supportsTransitionEnd() && kt(this._element).hasClass(Lt) ? kt(this._backdrop).one(Qe.TRANSITION_END, r).emulateTransitionEnd(150) : r();
                    } else t && t();
                }),
                (At._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (At._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (At._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (At._setScrollbar = function () {
                    var r = this;
                    if (this._isBodyOverflowing) {
                        kt(Wt).each(function (t, e) {
                            var i = kt(e)[0].style.paddingRight,
                                n = kt(e).css("padding-right");
                            kt(e)
                                .data("padding-right", i)
                                .css("padding-right", parseFloat(n) + r._scrollbarWidth + "px");
                        }),
                            kt(Bt).each(function (t, e) {
                                var i = kt(e)[0].style.marginRight,
                                    n = kt(e).css("margin-right");
                                kt(e)
                                    .data("margin-right", i)
                                    .css("margin-right", parseFloat(n) - r._scrollbarWidth + "px");
                            }),
                            kt(qt).each(function (t, e) {
                                var i = kt(e)[0].style.marginRight,
                                    n = kt(e).css("margin-right");
                                kt(e)
                                    .data("margin-right", i)
                                    .css("margin-right", parseFloat(n) + r._scrollbarWidth + "px");
                            });
                        var t = document.body.style.paddingRight,
                            e = kt("body").css("padding-right");
                        kt("body")
                            .data("padding-right", t)
                            .css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
                    }
                }),
                (At._resetScrollbar = function () {
                    kt(Wt).each(function (t, e) {
                        var i = kt(e).data("padding-right");
                        void 0 !== i && kt(e).css("padding-right", i).removeData("padding-right");
                    }),
                        kt(Bt + ", " + qt).each(function (t, e) {
                            var i = kt(e).data("margin-right");
                            void 0 !== i && kt(e).css("margin-right", i).removeData("margin-right");
                        });
                    var t = kt("body").data("padding-right");
                    void 0 !== t && kt("body").css("padding-right", t).removeData("padding-right");
                }),
                (At._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (ui._jQueryInterface = function (i, n) {
                    return this.each(function () {
                        var t = kt(this).data(Ot),
                            e = o({}, ui.Default, kt(this).data(), "object" == typeof i && i);
                        if ((t || ((t = new ui(this, e)), kt(this).data(Ot, t)), "string" == typeof i)) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i](n);
                        } else e.show && t.show(n);
                    });
                }),
                s(ui, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return It;
                        },
                    },
                ]),
                ($t = ui),
                kt(document).on(Rt.CLICK_DATA_API, zt, function (t) {
                    var e,
                        i = this,
                        n = Qe.getSelectorFromElement(this);
                    n && (e = kt(n)[0]);
                    var r = kt(e).data(Ot) ? "toggle" : o({}, kt(e).data(), kt(this).data());
                    ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
                    var s = kt(e).one(Rt.SHOW, function (t) {
                        t.isDefaultPrevented() ||
                            s.one(Rt.HIDDEN, function () {
                                kt(i).is(":visible") && i.focus();
                            });
                    });
                    $t._jQueryInterface.call(kt(e), r, this);
                }),
                (kt.fn.modal = $t._jQueryInterface),
                (kt.fn.modal.Constructor = $t),
                (kt.fn.modal.noConflict = function () {
                    return (kt.fn.modal = Pt), $t._jQueryInterface;
                }),
                $t),
            ii =
                ((ft = "tooltip"),
                (pt = "." + (dt = "bs.tooltip")),
                (mt = (ct = e).fn[ft]),
                (gt = new RegExp("(^|\\s)bs-tooltip\\S+", "g")),
                (yt = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !(vt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }),
                    selector: !(_t = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)",
                    }),
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                }),
                (wt = {
                    HIDE: "hide" + pt,
                    HIDDEN: "hidden" + pt,
                    SHOW: (bt = "show") + pt,
                    SHOWN: "shown" + pt,
                    INSERTED: "inserted" + pt,
                    CLICK: "click" + pt,
                    FOCUSIN: "focusin" + pt,
                    FOCUSOUT: "focusout" + pt,
                    MOUSEENTER: "mouseenter" + pt,
                    MOUSELEAVE: "mouseleave" + pt,
                }),
                (xt = "fade"),
                (Tt = "show"),
                (Ct = "hover"),
                (Et = "focus"),
                ((ht = li.prototype).enable = function () {
                    this._isEnabled = !0;
                }),
                (ht.disable = function () {
                    this._isEnabled = !1;
                }),
                (ht.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (ht.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                i = ct(t.currentTarget).data(e);
                            i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), ct(t.currentTarget).data(e, i)),
                                (i._activeTrigger.click = !i._activeTrigger.click),
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                        } else {
                            if (ct(this.getTipElement()).hasClass(Tt)) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (ht.dispose = function () {
                    clearTimeout(this._timeout),
                        ct.removeData(this.element, this.constructor.DATA_KEY),
                        ct(this.element).off(this.constructor.EVENT_KEY),
                        ct(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && ct(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (ht.show = function () {
                    var e = this;
                    if ("none" === ct(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = ct.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        ct(this.element).trigger(t);
                        var i = ct.contains(this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var n = this.getTipElement(),
                            r = Qe.getUID(this.constructor.NAME);
                        n.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && ct(n).addClass(xt);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                            o = this._getAttachment(s);
                        this.addAttachmentClass(o);
                        var a = !1 === this.config.container ? document.body : ct(this.config.container);
                        ct(n).data(this.constructor.DATA_KEY, this),
                            ct.contains(this.element.ownerDocument.documentElement, this.tip) || ct(n).appendTo(a),
                            ct(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new u(this.element, n, {
                                placement: o,
                                modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                },
                                onUpdate: function (t) {
                                    e._handlePopperPlacementChange(t);
                                },
                            })),
                            ct(n).addClass(Tt),
                            "ontouchstart" in document.documentElement && ct("body").children().on("mouseover", null, ct.noop);
                        var l = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            (e._hoverState = null), ct(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
                        };
                        Qe.supportsTransitionEnd() && ct(this.tip).hasClass(xt) ? ct(this.tip).one(Qe.TRANSITION_END, l).emulateTransitionEnd(li._TRANSITION_DURATION) : l();
                    }
                }),
                (ht.hide = function (t) {
                    function e() {
                        i._hoverState !== bt && n.parentNode && n.parentNode.removeChild(n),
                            i._cleanTipClass(),
                            i.element.removeAttribute("aria-describedby"),
                            ct(i.element).trigger(i.constructor.Event.HIDDEN),
                            null !== i._popper && i._popper.destroy(),
                            t && t();
                    }
                    var i = this,
                        n = this.getTipElement(),
                        r = ct.Event(this.constructor.Event.HIDE);
                    ct(this.element).trigger(r),
                        r.isDefaultPrevented() ||
                            (ct(n).removeClass(Tt),
                            "ontouchstart" in document.documentElement && ct("body").children().off("mouseover", null, ct.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger[Et] = !1),
                            (this._activeTrigger[Ct] = !1),
                            Qe.supportsTransitionEnd() && ct(this.tip).hasClass(xt) ? ct(n).one(Qe.TRANSITION_END, e).emulateTransitionEnd(150) : e(),
                            (this._hoverState = ""));
                }),
                (ht.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (ht.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (ht.addAttachmentClass = function (t) {
                    ct(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (ht.getTipElement = function () {
                    return (this.tip = this.tip || ct(this.config.template)[0]), this.tip;
                }),
                (ht.setContent = function () {
                    var t = ct(this.getTipElement());
                    this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(xt + " " + Tt);
                }),
                (ht.setElementContent = function (t, e) {
                    var i = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery) ? (i ? ct(e).parent().is(t) || t.empty().append(e) : t.text(ct(e).text())) : t[i ? "html" : "text"](e);
                }),
                (ht.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title));
                }),
                (ht._getAttachment = function (t) {
                    return vt[t.toUpperCase()];
                }),
                (ht._setListeners = function () {
                    var n = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                            ct(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (t) {
                                return n.toggle(t);
                            });
                        else if ("manual" !== t) {
                            var e = t === Ct ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                                i = t === Ct ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                            ct(n.element)
                                .on(e, n.config.selector, function (t) {
                                    return n._enter(t);
                                })
                                .on(i, n.config.selector, function (t) {
                                    return n._leave(t);
                                });
                        }
                        ct(n.element)
                            .closest(".modal")
                            .on("hide.bs.modal", function () {
                                return n.hide();
                            });
                    }),
                        this.config.selector ? (this.config = o({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (ht._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (!this.element.getAttribute("title") && "string" == t) || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (ht._enter = function (t, e) {
                    var i = this.constructor.DATA_KEY;
                    (e = e || ct(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), ct(t.currentTarget).data(i, e)),
                        t && (e._activeTrigger["focusin" === t.type ? Et : Ct] = !0),
                        ct(e.getTipElement()).hasClass(Tt) || e._hoverState === bt
                            ? (e._hoverState = bt)
                            : (clearTimeout(e._timeout),
                              (e._hoverState = bt),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        e._hoverState === bt && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (ht._leave = function (t, e) {
                    var i = this.constructor.DATA_KEY;
                    (e = e || ct(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), ct(t.currentTarget).data(i, e)),
                        t && (e._activeTrigger["focusout" === t.type ? Et : Ct] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = "out"),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      "out" === e._hoverState && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (ht._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (ht._getConfig = function (t) {
                    return (
                        "number" == typeof (t = o({}, this.constructor.Default, ct(this.element).data(), t)).delay && (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        Qe.typeCheckConfig(ft, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (ht._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (ht._cleanTipClass = function () {
                    var t = ct(this.getTipElement()),
                        e = t.attr("class").match(gt);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                }),
                (ht._handlePopperPlacementChange = function (t) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (ht._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (ct(t).removeClass(xt), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                }),
                (li._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = ct(this).data(dt),
                            e = "object" == typeof i && i;
                        if ((t || !/dispose|hide/.test(i)) && (t || ((t = new li(this, e)), ct(this).data(dt, t)), "string" == typeof i)) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]();
                        }
                    });
                }),
                s(li, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return yt;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return ft;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return dt;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return wt;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return pt;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return _t;
                        },
                    },
                ]),
                (St = li),
                (ct.fn[ft] = St._jQueryInterface),
                (ct.fn[ft].Constructor = St),
                (ct.fn[ft].noConflict = function () {
                    return (ct.fn[ft] = mt), St._jQueryInterface;
                }),
                St),
            ni =
                ((et = "popover"),
                (nt = "." + (it = "bs.popover")),
                (rt = (tt = e).fn[et]),
                (st = new RegExp("(^|\\s)bs-popover\\S+", "g")),
                (ot = o({}, ii.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                })),
                (at = o({}, ii.DefaultType, { content: "(string|element|function)" })),
                (lt = {
                    HIDE: "hide" + nt,
                    HIDDEN: "hidden" + nt,
                    SHOW: "show" + nt,
                    SHOWN: "shown" + nt,
                    INSERTED: "inserted" + nt,
                    CLICK: "click" + nt,
                    FOCUSIN: "focusin" + nt,
                    FOCUSOUT: "focusout" + nt,
                    MOUSEENTER: "mouseenter" + nt,
                    MOUSELEAVE: "mouseleave" + nt,
                }),
                (ut = (function (t) {
                    var e, i;
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    (i = t), ((e = n).prototype = Object.create(i.prototype)), ((e.prototype.constructor = e).__proto__ = i);
                    var r = n.prototype;
                    return (
                        (r.isWithContent = function () {
                            return this.getTitle() || this._getContent();
                        }),
                        (r.addAttachmentClass = function (t) {
                            tt(this.getTipElement()).addClass("bs-popover-" + t);
                        }),
                        (r.getTipElement = function () {
                            return (this.tip = this.tip || tt(this.config.template)[0]), this.tip;
                        }),
                        (r.setContent = function () {
                            var t = tt(this.getTipElement());
                            this.setElementContent(t.find(".popover-header"), this.getTitle());
                            var e = this._getContent();
                            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
                        }),
                        (r._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content;
                        }),
                        (r._cleanTipClass = function () {
                            var t = tt(this.getTipElement()),
                                e = t.attr("class").match(st);
                            null !== e && 0 < e.length && t.removeClass(e.join(""));
                        }),
                        (n._jQueryInterface = function (i) {
                            return this.each(function () {
                                var t = tt(this).data(it),
                                    e = "object" == typeof i ? i : null;
                                if ((t || !/destroy|hide/.test(i)) && (t || ((t = new n(this, e)), tt(this).data(it, t)), "string" == typeof i)) {
                                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                    t[i]();
                                }
                            });
                        }),
                        s(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return ot;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return et;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return it;
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return lt;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return nt;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return at;
                                },
                            },
                        ]),
                        n
                    );
                })(ii)),
                (tt.fn[et] = ut._jQueryInterface),
                (tt.fn[et].Constructor = ut),
                (tt.fn[et].noConflict = function () {
                    return (tt.fn[et] = rt), ut._jQueryInterface;
                }),
                ut),
            ri =
                ((M = "scrollspy"),
                (j = "." + (L = "bs.scrollspy")),
                (F = (N = e).fn[M]),
                (z = { offset: 10, method: "auto", target: "" }),
                (H = { offset: "number", method: "string", target: "(string|element)" }),
                (W = { ACTIVATE: "activate" + j, SCROLL: "scroll" + j, LOAD_DATA_API: "load" + j + ".data-api" }),
                (B = "active"),
                (q = '[data-spy="scroll"]'),
                ($ = ".active"),
                (U = ".nav, .list-group"),
                (Y = ".nav-link"),
                (X = ".nav-item"),
                (V = ".list-group-item"),
                (Q = ".dropdown"),
                (K = ".dropdown-item"),
                (J = ".dropdown-toggle"),
                (G = "position"),
                ((R = ai.prototype).refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? "offset" : G,
                        r = "auto" === this._config.method ? t : this._config.method,
                        s = r === G ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        N.makeArray(N(this._selector))
                            .map(function (t) {
                                var e,
                                    i = Qe.getSelectorFromElement(t);
                                if ((i && (e = N(i)[0]), e)) {
                                    var n = e.getBoundingClientRect();
                                    if (n.width || n.height) return [N(e)[r]().top + s, i];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (t) {
                                e._offsets.push(t[0]), e._targets.push(t[1]);
                            });
                }),
                (R.dispose = function () {
                    N.removeData(this._element, L),
                        N(this._scrollElement).off(j),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (R._getConfig = function (t) {
                    if ("string" != typeof (t = o({}, z, t)).target) {
                        var e = N(t.target).attr("id");
                        e || ((e = Qe.getUID(M)), N(t.target).attr("id", e)), (t.target = "#" + e);
                    }
                    return Qe.typeCheckConfig(M, t, H), t;
                }),
                (R._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (R._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (R._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (R._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        i = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                        for (var r = this._offsets.length; r--; ) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                    }
                }),
                (R._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                    });
                    var i = N(t.join(","));
                    i.hasClass("dropdown-item")
                        ? (i.closest(Q).find(J).addClass(B), i.addClass(B))
                        : (i.addClass(B),
                          i
                              .parents(U)
                              .prev(Y + ", " + V)
                              .addClass(B),
                          i.parents(U).prev(X).children(Y).addClass(B)),
                        N(this._scrollElement).trigger(W.ACTIVATE, { relatedTarget: e });
                }),
                (R._clear = function () {
                    N(this._selector).filter($).removeClass(B);
                }),
                (ai._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = N(this).data(L);
                        if ((t || ((t = new ai(this, "object" == typeof e && e)), N(this).data(L, t)), "string" == typeof e)) {
                            if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                s(ai, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return z;
                        },
                    },
                ]),
                (Z = ai),
                N(window).on(W.LOAD_DATA_API, function () {
                    for (var t = N.makeArray(N(q)), e = t.length; e--; ) {
                        var i = N(t[e]);
                        Z._jQueryInterface.call(i, i.data());
                    }
                }),
                (N.fn[M] = Z._jQueryInterface),
                (N.fn[M].Constructor = Z),
                (N.fn[M].noConflict = function () {
                    return (N.fn[M] = F), Z._jQueryInterface;
                }),
                Z),
            si =
                ((S = "." + (E = "bs.tab")),
                (k = (T = e).fn.tab),
                (A = { HIDE: "hide" + S, HIDDEN: "hidden" + S, SHOW: "show" + S, SHOWN: "shown" + S, CLICK_DATA_API: "click.bs.tab.data-api" }),
                (O = "active"),
                (D = ".active"),
                (P = "> li > .active"),
                ((C = oi.prototype).show = function () {
                    var i = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && T(this._element).hasClass(O)) || T(this._element).hasClass("disabled"))) {
                        var t,
                            n,
                            e = T(this._element).closest(".nav, .list-group")[0],
                            r = Qe.getSelectorFromElement(this._element);
                        if (e) {
                            var s = "UL" === e.nodeName ? P : D;
                            n = (n = T.makeArray(T(e).find(s)))[n.length - 1];
                        }
                        var o = T.Event(A.HIDE, { relatedTarget: this._element }),
                            a = T.Event(A.SHOW, { relatedTarget: n });
                        if ((n && T(n).trigger(o), T(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented())) {
                            r && (t = T(r)[0]), this._activate(this._element, e);
                            var l = function () {
                                var t = T.Event(A.HIDDEN, { relatedTarget: i._element }),
                                    e = T.Event(A.SHOWN, { relatedTarget: n });
                                T(n).trigger(t), T(i._element).trigger(e);
                            };
                            t ? this._activate(t, t.parentNode, l) : l();
                        }
                    }
                }),
                (C.dispose = function () {
                    T.removeData(this._element, E), (this._element = null);
                }),
                (C._activate = function (t, e, i) {
                    function n() {
                        return r._transitionComplete(t, s, i);
                    }
                    var r = this,
                        s = ("UL" === e.nodeName ? T(e).find(P) : T(e).children(D))[0],
                        o = i && Qe.supportsTransitionEnd() && s && T(s).hasClass("fade");
                    s && o ? T(s).one(Qe.TRANSITION_END, n).emulateTransitionEnd(150) : n();
                }),
                (C._transitionComplete = function (t, e, i) {
                    if (e) {
                        T(e).removeClass("show " + O);
                        var n = T(e.parentNode).find("> .dropdown-menu .active")[0];
                        n && T(n).removeClass(O), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                    }
                    if ((T(t).addClass(O), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Qe.reflow(t), T(t).addClass("show"), t.parentNode && T(t.parentNode).hasClass("dropdown-menu"))) {
                        var r = T(t).closest(".dropdown")[0];
                        r && T(r).find(".dropdown-toggle").addClass(O), t.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }),
                (oi._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = T(this),
                            e = t.data(E);
                        if ((e || ((e = new oi(this)), t.data(E, e)), "string" == typeof i)) {
                            if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]();
                        }
                    });
                }),
                s(oi, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.0.0";
                        },
                    },
                ]),
                (I = oi),
                T(document).on(A.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                    t.preventDefault(), I._jQueryInterface.call(T(this), "show");
                }),
                (T.fn.tab = I._jQueryInterface),
                (T.fn.tab.Constructor = I),
                (T.fn.tab.noConflict = function () {
                    return (T.fn.tab = k), I._jQueryInterface;
                }),
                I);
        function oi(t) {
            this._element = t;
        }
        function ai(t, e) {
            var i = this;
            (this._element = t),
                (this._scrollElement = "BODY" === t.tagName ? window : t),
                (this._config = this._getConfig(e)),
                (this._selector = this._config.target + " " + Y + "," + this._config.target + " " + V + "," + this._config.target + " " + K),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                N(this._scrollElement).on(W.SCROLL, function (t) {
                    return i._process(t);
                }),
                this.refresh(),
                this._process();
        }
        function li(t, e) {
            if (void 0 === u) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
        }
        function ui(t, e) {
            (this._config = this._getConfig(e)),
                (this._element = t),
                (this._dialog = kt(t).find(Ft)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
        }
        function ci(t, e) {
            (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
        }
        function hi(t, e) {
            (this._isTransitioning = !1),
                (this._element = t),
                (this._config = this._getConfig(e)),
                (this._triggerArray = le.makeArray(le('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
            for (var i = le(xe), n = 0; n < i.length; n++) {
                var r = i[n],
                    s = Qe.getSelectorFromElement(r);
                null !== s && 0 < le(s).filter(t).length && ((this._selector = s), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }
        function fi(t, e) {
            (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(e)),
                (this._element = Ce(t)[0]),
                (this._indicatorsElement = Ce(this._element).find(He)[0]),
                this._addEventListeners();
        }
        function di(t) {
            this._element = t;
        }
        function pi(t) {
            this._element = t;
        }
        !(function (t) {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        })(e),
            (t.Util = Qe),
            (t.Alert = Ke),
            (t.Button = Je),
            (t.Carousel = Ge),
            (t.Collapse = Ze),
            (t.Dropdown = ti),
            (t.Modal = ei),
            (t.Popover = ni),
            (t.Scrollspy = ri),
            (t.Tab = si),
            (t.Tooltip = ii),
            Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    "undefined" == typeof jQuery)
)
    throw new Error("jQuery is not loaded");
($.fn.zabuto_calendar = function (t) {
    var e = $.extend({}, $.fn.zabuto_calendar_defaults(), t),
        i = $.fn.zabuto_calendar_language(e.language);
    return (
        (e = $.extend({}, e, i)),
        this.each(function () {
            var a = $(this);
            function w(t, e, i, n) {
                var r = new Date(i, n, 1, 0, 0, 0, 0);
                return (
                    t.data("currDate", r),
                    e.empty(),
                    (e = (function (t, e, i, n) {
                        t.data("ajaxSettings");
                        var r = (function (t, e) {
                                var i = x(t, e),
                                    n = b(t, e, 1),
                                    r = b(t, e, i),
                                    s = i,
                                    o = n - r;
                                0 < o && (s += o);
                                return Math.ceil(s / 7);
                            })(i, n),
                            s = x(i, n),
                            o = b(i, n, 1),
                            a = b(i, n, s),
                            l = 1;
                        0 === t.data("weekStartsOn") && (6 == a && r++, 6 != o || (0 != a && 1 != a && 5 != a) || r--, 7 == ++o && (o = 0));
                        for (var u = 0; u < r; u++) {
                            for (var c = $('<tr class="calendar-dow"></tr>'), h = 0; h < 7; h++) {
                                if (h < o || s < l) c.append("<td></td>");
                                else {
                                    var f = t.attr("id") + "_" + y(i, n, l),
                                        d = $('<div id="' + (f + "_day") + '" class="day" >' + l + "</div>");
                                    d.data("day", l),
                                        (m = i),
                                        (g = n),
                                        (_ = l),
                                        (v = void 0),
                                        (v = new Date()),
                                        new Date(m, g, _).toDateString() == v.toDateString() && (d.addClass("today"), !0 === t.data("showToday") && d.html('<span class="badge badge-today">' + l + "</span>"));
                                    var p = $('<td id="' + f + '"></td>');
                                    p.append(d),
                                        p.data("date", y(i, n, l)),
                                        p.data("hasEvent", !1),
                                        "function" == typeof t.data("actionFunction") &&
                                            (p.addClass("dow-clickable"),
                                            p.click(function () {
                                                t.data("selectedDate", $(this).data("date"));
                                            }),
                                            p.click(t.data("actionFunction"))),
                                        c.append(p),
                                        l++;
                                }
                                6 == h && (o = 0);
                            }
                            e.append(c);
                        }
                        var m, g, _, v;
                        return e;
                    })(
                        t,
                        (e = (function (t, e) {
                            if (!0 === t.data("showDays")) {
                                var i = t.data("weekStartsOn"),
                                    n = t.data("dowLabels");
                                if (0 === i) {
                                    var r = $.extend([], n),
                                        s = new Array(r.pop());
                                    n = s.concat(r);
                                }
                                var o = $('<tr class="calendar-dow-header"></tr>');
                                $(n).each(function (t, e) {
                                    o.append("<th>" + e + "</th>");
                                }),
                                    e.append(o);
                            }
                            return e;
                        })(
                            t,
                            (e = (function (e, i, t, n) {
                                var r = e.data("navIcons"),
                                    s = $('<span><span class="glyphicon glyphicon-chevron-left"></span></span>'),
                                    o = $('<span><span class="glyphicon glyphicon-chevron-right"></span></span>');
                                "object" == typeof r && ("prev" in r && s.html(r.prev), "next" in r && o.html(r.next));
                                var a = e.data("showPrevious");
                                ("number" != typeof a && !1 !== a) || (a = T(e.data("showPrevious"), !0));
                                var l = $('<div class="calendar-month-navigation"></div>');
                                if ((l.attr("id", e.attr("id") + "_nav-prev"), l.data("navigation", "prev"), !1 !== a)) {
                                    var u = n - 1,
                                        c = t;
                                    -1 == u && ((c -= 1), (u = 11)),
                                        l.data("to", { year: c, month: u + 1 }),
                                        l.append(s),
                                        "function" == typeof e.data("actionNavFunction") && l.click(e.data("actionNavFunction")),
                                        l.click(function (t) {
                                            w(e, i, c, u);
                                        });
                                }
                                var h = e.data("showNext");
                                ("number" != typeof h && !1 !== h) || (h = T(e.data("showNext"), !1));
                                var f = $('<div class="calendar-month-navigation"></div>');
                                if ((f.attr("id", e.attr("id") + "_nav-next"), f.data("navigation", "next"), !1 !== h)) {
                                    var d = n + 1,
                                        p = t;
                                    12 == d && ((p += 1), (d = 0)),
                                        f.data("to", { year: p, month: d + 1 }),
                                        f.append(o),
                                        "function" == typeof e.data("actionNavFunction") && f.click(e.data("actionNavFunction")),
                                        f.click(function (t) {
                                            w(e, i, p, d);
                                        });
                                }
                                var m = e.data("monthLabels"),
                                    g = $("<td></td>").append(l),
                                    _ = $("<td></td>").append(f),
                                    v = $("<span>" + m[n] + " " + t + "</span>");
                                v.dblclick(function () {
                                    var t = e.data("initDate");
                                    w(e, i, t.getFullYear(), t.getMonth());
                                });
                                var y = $('<td colspan="5"></td>');
                                y.append(v);
                                var b = $('<tr class="calendar-month-header"></tr>');
                                return b.append(g, y, _), i.append(b), i;
                            })(t, e, i, n))
                        )),
                        i,
                        n
                    )),
                    l(t, i, n),
                    e
                );
            }
            function l(t, e, i) {
                var n = t.data("jsonData"),
                    r = t.data("ajaxSettings");
                return (
                    t.data("events", !1),
                    !1 !== n
                        ? (function (t) {
                              var e = t.data("jsonData");
                              return t.data("events", e), s(t, "json"), !0;
                          })(t)
                        : !1 === r ||
                          (function (t, e, i) {
                              var n = t.data("ajaxSettings");
                              if ("object" != typeof n || void 0 === n.url) return alert("Invalid calendar event settings"), !1;
                              var r = { year: e, month: i + 1 };
                              return (
                                  $.ajax({ type: "GET", url: n.url, data: r, dataType: "json" }).done(function (i) {
                                      var n = [];
                                      $.each(i, function (t, e) {
                                          n.push(i[t]);
                                      }),
                                          t.data("events", n),
                                          s(t, "ajax");
                                  }),
                                  !0
                              );
                          })(t, e, i)
                );
            }
            function s(u, c) {
                u.data("jsonData");
                var h = u.data("ajaxSettings"),
                    t = u.data("events");
                !1 !== t &&
                    $(t).each(function (t, e) {
                        var i = u.attr("id") + "_" + e.date,
                            n = $("#" + i),
                            r = $("#" + i + "_day");
                        if (
                            (n.data("hasEvent", !0), void 0 !== e.title && n.attr("title", e.title), void 0 === e.classname ? n.addClass("event") : (n.addClass("event-styled"), r.addClass(e.classname)), void 0 !== e.badge && !1 !== e.badge)
                        ) {
                            var s = !0 === e.badge ? "" : " badge-" + e.badge,
                                o = r.data("day");
                            r.html('<span class="badge badge-event' + s + '">' + o + "</span>");
                        }
                        if (void 0 !== e.body) {
                            var a = !1;
                            if (("json" === c && void 0 !== e.modal && !0 === e.modal ? (a = !0) : "ajax" === c && "modal" in h && !0 === h.modal && (a = !0), !0 === a)) {
                                n.addClass("event-clickable");
                                var l = (function (t, e, i, n) {
                                    var r = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'),
                                        s = $('<h4 class="modal-title" id="' + t + '_modal_title">' + e + "</h4>"),
                                        o = $('<div class="modal-header"></div>');
                                    o.append(r), o.append(s);
                                    var a = $('<div class="modal-body" id="' + t + '_modal_body">' + i + "</div>"),
                                        l = $('<div class="modal-footer" id="' + t + '_modal_footer"></div>');
                                    if (void 0 !== n) {
                                        var u = $("<div>" + n + "</div>");
                                        l.append(u);
                                    }
                                    var c = $('<div class="modal-content"></div>');
                                    c.append(o), c.append(a), c.append(l);
                                    var h = $('<div class="modal-dialog"></div>');
                                    h.append(c);
                                    var f = $('<div class="modal fade" id="' + t + '_modal" tabindex="-1" role="dialog" aria-labelledby="' + t + '_modal_title" aria-hidden="true"></div>');
                                    return f.append(h), f.data("dateId", t), f.attr("dateId", t), f;
                                })(i, e.title, e.body, e.footer);
                                $("body").append(l),
                                    $("#" + i).click(function () {
                                        $("#" + i + "_modal").modal();
                                    });
                            }
                        }
                    });
            }
            function y(t, e, i) {
                var n;
                return t + "-" + (n = (n = e + 1) < 10 ? "0" + n : n) + "-" + (i < 10 ? "0" + i : i);
            }
            function b(t, e, i) {
                var n = new Date(t, e, i, 0, 0, 0, 0).getDay();
                return 0 == n ? (n = 6) : n--, n;
            }
            function x(t, e) {
                for (var i, n, r, s = 28; (i = t), (r = s + 1), 0 < (n = e + 1) && n < 13 && 0 < i && i < 32768 && 0 < r && r <= new Date(i, n, 0).getDate(); ) s++;
                return s;
            }
            function T(t, e) {
                !1 === t && (t = 0);
                var i,
                    n = a.data("currDate"),
                    r = a.data("initDate");
                if (((i = 12 * (r.getFullYear() - n.getFullYear())), (i -= n.getMonth() + 1), (i += r.getMonth()), !0 === e)) {
                    if (i < parseInt(t) - 1) return !0;
                } else if (i >= 0 - parseInt(t)) return !0;
                return !1;
            }
            a.attr("id", "zabuto_calendar_" + Math.floor(99999 * Math.random()).toString(36)),
                a.data("initYear", e.year),
                a.data("initMonth", e.month),
                a.data("monthLabels", e.month_labels),
                a.data("weekStartsOn", e.weekstartson),
                a.data("navIcons", e.nav_icon),
                a.data("dowLabels", e.dow_labels),
                a.data("showToday", e.today),
                a.data("showDays", e.show_days),
                a.data("showPrevious", e.show_previous),
                a.data("showNext", e.show_next),
                a.data("cellBorder", e.cell_border),
                a.data("jsonData", e.data),
                a.data("ajaxSettings", e.ajax),
                a.data("legendList", e.legend),
                a.data("actionFunction", e.action),
                a.data("actionNavFunction", e.action_nav),
                (function () {
                    var t = parseInt(a.data("initYear")),
                        e = parseInt(a.data("initMonth")) - 1,
                        i = new Date(t, e, 1, 0, 0, 0, 0);
                    a.data("initDate", i);
                    var n = !0 === a.data("cellBorder") ? " table-bordered" : "",
                        r = $('<table class="table' + n + '"></table>');
                    r = w(a, r, i.getFullYear(), i.getMonth());
                    var s = (function (t) {
                            var a = $('<div class="legend" id="' + t.attr("id") + '_legend"></div>'),
                                e = t.data("legendList");
                            "object" == typeof e &&
                                0 < e.length &&
                                $(e).each(function (t, e) {
                                    if ("object" == typeof e && "type" in e) {
                                        var i = "";
                                        switch (("label" in e && (i = e.label), e.type)) {
                                            case "text":
                                                if ("" !== i) {
                                                    var n = "";
                                                    if ("badge" in e) {
                                                        if (void 0 === e.classname) var r = "badge-event";
                                                        else r = e.classname;
                                                        n = '<span class="badge ' + r + '">' + e.badge + "</span> ";
                                                    }
                                                    a.append('<span class="legend-' + e.type + '">' + n + i + "</span>");
                                                }
                                                break;
                                            case "block":
                                                if (("" !== i && (i = "<span>" + i + "</span>"), void 0 === e.classname)) var s = "event";
                                                else s = "event-styled " + e.classname;
                                                a.append('<span class="legend-' + e.type + '"><ul class="legend"><li class="' + s + '"></li></ul>' + i + "</span>");
                                                break;
                                            case "list":
                                                if ("list" in e && "object" == typeof e.list && 0 < e.list.length) {
                                                    var o = $('<ul class="legend"></ul>');
                                                    $(e.list).each(function (t, e) {
                                                        o.append('<li class="' + e + '"></li>');
                                                    }),
                                                        a.append(o);
                                                }
                                                break;
                                            case "spacer":
                                                a.append('<span class="legend-' + e.type + '"> </span>');
                                        }
                                    }
                                });
                            return a;
                        })(a),
                        o = $('<div class="zabuto_calendar"></div>');
                    o.append(r), o.append(s), a.append(o), !1 !== a.data("jsonData") && l(a, i.getFullYear(), i.getMonth());
                })();
        }),
        this
    );
}),
    ($.fn.zabuto_calendar_defaults = function () {
        var t = new Date();
        return {
            language: !1,
            year: t.getFullYear(),
            month: t.getMonth() + 1,
            show_previous: !0,
            show_next: !0,
            cell_border: !1,
            today: !1,
            show_days: !0,
            weekstartson: 1,
            nav_icon: !1,
            data: !1,
            ajax: !1,
            legend: !1,
            action: !1,
            action_nav: !1,
        };
    }),
    ($.fn.zabuto_calendar_language = function (t) {
        switch (((void 0 !== t && !1 !== t) || (t = "en"), t.toLowerCase())) {
            case "ar":
                return { month_labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], dow_labels: ["أثنين", "ثلاثاء", "اربعاء", "خميس", "جمعه", "سبت", "أحد"] };
            case "az":
                return { month_labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], dow_labels: ["B.e", "Ç.A", "Çərş", "C.A", "Cümə", "Şən", "Baz"] };
            case "cn":
                return { month_labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dow_labels: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"] };
            case "cs":
                return { month_labels: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], dow_labels: ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"] };
            case "de":
                return { month_labels: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], dow_labels: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] };
            case "en":
                return { month_labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dow_labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] };
            case "he":
                return { month_labels: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], dow_labels: ["ב", "ג", "ד", "ה", "ו", "ש", "א"] };
            case "es":
                return { month_labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], dow_labels: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"] };
            case "fi":
                return { month_labels: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"], dow_labels: ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"] };
            case "fr":
                return { month_labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], dow_labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"] };
            case "hu":
                return { month_labels: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], dow_labels: ["Hé", "Ke", "Sze", "Cs", "Pé", "Szo", "Va"] };
            case "id":
                return {
                    month_labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                    dow_labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"],
                };
            case "it":
                return { month_labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], dow_labels: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"] };
            case "jp":
                return { month_labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], dow_labels: ["月", "火", "水", "木", "金", "土", "日"] };
            case "kr":
                return { month_labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], dow_labels: ["월", "화", "수", "목", "금", "토", "일"] };
            case "nl":
                return { month_labels: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], dow_labels: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"] };
            case "no":
                return { month_labels: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], dow_labels: ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"] };
            case "pl":
                return {
                    month_labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                    dow_labels: ["pon.", "wt.", "śr.", "czw.", "pt.", "sob.", "niedz."],
                };
            case "pt":
                return { month_labels: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dow_labels: ["S", "T", "Q", "Q", "S", "S", "D"] };
            case "ru":
                return { month_labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], dow_labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вск"] };
            case "se":
                return { month_labels: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dow_labels: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"] };
            case "sk":
                return { month_labels: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"], dow_labels: ["Po", "Ut", "St", "Št", "Pi", "So", "Ne"] };
            case "tr":
                return { month_labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], dow_labels: ["Pts", "Salı", "Çar", "Per", "Cuma", "Cts", "Paz"] };
            case "ua":
                return { month_labels: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], dow_labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"] };
        }
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
function getUrlVars() {
    var n = {};
    return (
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, e, i) {
            n[e] = i;
        }),
        n
    );
}
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    function l(e) {
        var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (t) {
            return ((Math.round(t / e) * e * i) | 0) / i;
        };
    }
    function u(t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
    }
    var t, e, T, w, x, C, _, i, g, n;
    function v(t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), (this.a = t), (this.b = e), (this.c = i), (this.d = n), (this.da = n - t), (this.ca = i - t), (this.ba = e - t);
    }
    function E(t, e, i, n) {
        var r = { a: t },
            s = {},
            o = {},
            a = { c: n },
            l = (t + e) / 2,
            u = (e + i) / 2,
            c = (i + n) / 2,
            h = (l + u) / 2,
            f = (u + c) / 2,
            d = (f - h) / 8;
        return (r.b = l + (t - l) / 4), (s.b = h + d), (r.c = s.a = (r.b + s.b) / 2), (s.c = o.a = (h + f) / 2), (o.b = f - d), (a.b = c + (n - c) / 4), (o.c = a.a = (o.b + a.b) / 2), [r, s, o, a];
    }
    function y(t, e, i, n, r) {
        var s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            m,
            g,
            _,
            v = t.length - 1,
            y = 0,
            b = t[0].a;
        for (s = 0; s < v; s++)
            (o = (u = t[y]).a),
                (a = u.d),
                (l = t[y + 1].d),
                (f = r
                    ? ((m = w[s]),
                      (_ = (((g = x[s]) + m) * e * 0.25) / (n ? 0.5 : C[s] || 0.5)),
                      a - ((c = a - (a - o) * (n ? 0.5 * e : 0 !== m ? _ / m : 0)) + ((((h = a + (l - a) * (n ? 0.5 * e : 0 !== g ? _ / g : 0)) - c) * ((3 * m) / (m + g) + 0.5)) / 4 || 0)))
                    : a - ((c = a - (a - o) * e * 0.5) + (h = a + (l - a) * e * 0.5)) / 2),
                (c += f),
                (h += f),
                (u.c = d = c),
                (u.b = 0 !== s ? b : (b = u.a + 0.6 * (u.c - u.a))),
                (u.da = a - o),
                (u.ca = d - o),
                (u.ba = b - o),
                i ? ((p = E(o, b, d, a)), t.splice(y, 1, p[0], p[1], p[2], p[3]), (y += 4)) : y++,
                (b = h);
        ((u = t[y]).b = b), (u.c = b + 0.4 * (u.d - b)), (u.da = u.d - u.a), (u.ca = u.c - u.a), (u.ba = b - u.a), i && ((p = E(u.a, b, u.c, u.d)), t.splice(y, 1, p[0], p[1], p[2], p[3]));
    }
    function b(t, e, i, n) {
        var r,
            s,
            o,
            a,
            l,
            u,
            c = [];
        if (n) for (s = (t = [n].concat(t)).length; -1 < --s; ) "string" == typeof (u = t[s][e]) && "=" === u.charAt(1) && (t[s][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
        if ((r = t.length - 2) < 0) return (c[0] = new v(t[0][e], 0, 0, t[0][e])), c;
        for (s = 0; s < r; s++) (o = t[s][e]), (a = t[s + 1][e]), (c[s] = new v(o, 0, 0, a)), i && ((l = t[s + 2][e]), (w[s] = (w[s] || 0) + (a - o) * (a - o)), (x[s] = (x[s] || 0) + (l - a) * (l - a)));
        return (c[s] = new v(t[s][e], 0, 0, t[s + 1][e])), c;
    }
    function d(t, e, i, n, r, s) {
        var o,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p = {},
            m = [],
            g = s || t[0];
        for (a in ((r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == e && (e = 1),
        t[0]))
            m.push(a);
        if (1 < t.length) {
            for (d = t[t.length - 1], f = !0, o = m.length; -1 < --o; )
                if (((a = m[o]), 0.05 < Math.abs(g[a] - d[a]))) {
                    f = !1;
                    break;
                }
            f && ((t = t.concat()), s && t.unshift(s), t.push(t[1]), (s = t[t.length - 3]));
        }
        for (w.length = x.length = C.length = 0, o = m.length; -1 < --o; ) (a = m[o]), (_[a] = -1 !== r.indexOf("," + a + ",")), (p[a] = b(t, a, _[a], s));
        for (o = w.length; -1 < --o; ) (w[o] = Math.sqrt(w[o])), (x[o] = Math.sqrt(x[o]));
        if (!n) {
            for (o = m.length; -1 < --o; ) if (_[a]) for (h = (l = p[m[o]]).length - 1, u = 0; u < h; u++) (c = l[u + 1].da / x[u] + l[u].da / w[u] || 0), (C[u] = (C[u] || 0) + c * c);
            for (o = C.length; -1 < --o; ) C[o] = Math.sqrt(C[o]);
        }
        for (o = m.length, u = i ? 4 : 1; -1 < --o; ) (l = p[(a = m[o])]), y(l, e, i, n, _[a]), f && (l.splice(0, u), l.splice(l.length - u, u));
        return p;
    }
    function p(t, e, i) {
        for (var n, r, s, o, a, l, u, c, h, f, d, p = 1 / i, m = t.length; -1 < --m; )
            for (s = (f = t[m]).a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, c = 1; c <= i; c++) (n = r - (r = ((u = p * c) * u * o + 3 * (h = 1 - u) * (u * a + h * l)) * u)), (e[(d = m * i + c - 1)] = (e[d] || 0) + n * n);
    }
    _gsScope._gsDefine(
        "TweenMax",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (n, c, v) {
            function g(t) {
                var e,
                    i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i;
            }
            function _(t, e, i) {
                var n,
                    r,
                    s = t.cycle;
                for (n in s) (r = s[n]), (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
                delete t.cycle;
            }
            var y = function (t, e, i) {
                    v.call(this, t, e, i),
                        (this._cycle = 0),
                        (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        this._repeat && this._uncache(!0),
                        (this.render = y.prototype.render);
                },
                b = 1e-10,
                w = v._internals,
                x = w.isSelector,
                T = w.isArray,
                t = (y.prototype = v.to({}, 0.1, {})),
                C = [];
            (y.version = "2.0.1"),
                (t.constructor = y),
                (t.kill()._gc = !1),
                (y.killTweensOf = y.killDelayedCallsTo = v.killTweensOf),
                (y.getTweensOf = v.getTweensOf),
                (y.lagSmoothing = v.lagSmoothing),
                (y.ticker = v.ticker),
                (y.render = v.render),
                (t.invalidate = function () {
                    return (
                        (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        (this._yoyoEase = null),
                        this._uncache(!0),
                        v.prototype.invalidate.call(this)
                    );
                }),
                (t.updateTo = function (t, e) {
                    var i,
                        n = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    for (i in (e && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t))
                        this.vars[i] = t[i];
                    if (this._initted || r)
                        if (e) (this._initted = !1), r && this.render(0, !0, !0);
                        else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && v._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration)) {
                            var s = this._totalTime;
                            this.render(0, !0, !1), (this._initted = !1), this.render(s, !0, !1);
                        } else if (((this._initted = !1), this._init(), 0 < this._time || r)) for (var o, a = 1 / (1 - n), l = this._firstPT; l; ) (o = l.s + l.c), (l.c *= a), (l.s = o - l.c), (l = l._next);
                    return this;
                }),
                (t.render = function (t, e, i) {
                    this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        u,
                        c,
                        h,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        p = this._totalTime,
                        m = this._cycle,
                        g = this._duration,
                        _ = this._rawPrevTime;
                    if (
                        (f - 1e-7 <= t && 0 <= t
                            ? ((this._totalTime = f),
                              (this._cycle = this._repeat),
                              this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = g), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                              this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                              0 !== g ||
                                  (!this._initted && this.vars.lazy && !i) ||
                                  (this._startTime === this._timeline._duration && (t = 0),
                                  (_ < 0 || (t <= 0 && -1e-7 <= t) || (_ === b && "isPause" !== this.data)) && _ !== t && ((i = !0), b < _ && (r = "onReverseComplete")),
                                  (this._rawPrevTime = c = !e || t || _ === t ? t : b)))
                            : t < 1e-7
                            ? ((this._totalTime = this._time = this._cycle = 0),
                              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                              (0 !== p || (0 === g && 0 < _)) && ((r = "onReverseComplete"), (n = this._reversed)),
                              t < 0 && ((this._active = !1), 0 !== g || (!this._initted && this.vars.lazy && !i) || (0 <= _ && (i = !0), (this._rawPrevTime = c = !e || t || _ === t ? t : b))),
                              this._initted || (i = !0))
                            : ((this._totalTime = this._time = t),
                              0 !== this._repeat &&
                                  ((o = g + this._repeatDelay),
                                  (this._cycle = (this._totalTime / o) >> 0),
                                  0 !== this._cycle && this._cycle === this._totalTime / o && p <= t && this._cycle--,
                                  (this._time = this._totalTime - this._cycle * o),
                                  this._yoyo &&
                                      0 != (1 & this._cycle) &&
                                      ((this._time = g - this._time),
                                      (h = this._yoyoEase || this.vars.yoyoEase) &&
                                          (this._yoyoEase ||
                                              (!0 !== h || this._initted
                                                  ? (this._yoyoEase = h = !0 === h ? this._ease : h instanceof Ease ? h : Ease.map[h])
                                                  : ((h = this.vars.ease), (this._yoyoEase = h = h ? (h instanceof Ease ? h : "function" == typeof h ? new Ease(h, this.vars.easeParams) : Ease.map[h] || v.defaultEase) : v.defaultEase))),
                                          (this.ratio = h ? 1 - h.getRatio((g - this._time) / g) : 0))),
                                  this._time > g ? (this._time = g) : this._time < 0 && (this._time = 0)),
                              this._easeType && !h
                                  ? ((a = this._time / g),
                                    (1 === (l = this._easeType) || (3 === l && 0.5 <= a)) && (a = 1 - a),
                                    3 === l && (a *= 2),
                                    1 === (u = this._easePower) ? (a *= a) : 2 === u ? (a *= a * a) : 3 === u ? (a *= a * a * a) : 4 === u && (a *= a * a * a * a),
                                    1 === l ? (this.ratio = 1 - a) : 2 === l ? (this.ratio = a) : this._time / g < 0.5 ? (this.ratio = a / 2) : (this.ratio = 1 - a / 2))
                                  : h || (this.ratio = this._ease.getRatio(this._time / g))),
                        d !== this._time || i || m !== this._cycle)
                    ) {
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                return (this._time = d), (this._totalTime = p), (this._rawPrevTime = _), (this._cycle = m), w.lazyTweens.push(this), void (this._lazy = [t, e]);
                            !this._time || n || h ? n && this._ease._calcEnd && !h && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / g));
                        }
                        for (
                            !1 !== this._lazy && (this._lazy = !1),
                                this._active || (!this._paused && this._time !== d && 0 <= t && (this._active = !0)),
                                0 === p &&
                                    (2 === this._initted && 0 < t && this._init(),
                                    this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : (r = r || "_dummyGS")),
                                    !this.vars.onStart || (0 === this._totalTime && 0 !== g) || e || this._callback("onStart")),
                                s = this._firstPT;
                            s;

                        )
                            s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime === p && !r) || this._callback("onUpdate")),
                            this._cycle !== m && (e || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                            !r ||
                                (this._gc && !i) ||
                                (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i),
                                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !e && this.vars[r] && this._callback(r),
                                0 === g && this._rawPrevTime === b && c !== b && (this._rawPrevTime = 0));
                    } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
                }),
                (y.to = function (t, e, i) {
                    return new y(t, e, i);
                }),
                (y.from = function (t, e, i) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new y(t, e, i);
                }),
                (y.fromTo = function (t, e, i, n) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new y(t, e, n);
                }),
                (y.staggerTo = y.allTo = function (t, e, i, n, r, s, o) {
                    n = n || 0;
                    function a() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(o || i.callbackScope || this, s || C);
                    }
                    var l,
                        u,
                        c,
                        h,
                        f = 0,
                        d = [],
                        p = i.cycle,
                        m = i.startAt && i.startAt.cycle;
                    for (T(t) || ("string" == typeof t && (t = v.selector(t) || t), x(t) && (t = g(t))), t = t || [], n < 0 && ((t = g(t)).reverse(), (n *= -1)), l = t.length - 1, c = 0; c <= l; c++) {
                        for (h in ((u = {}), i)) u[h] = i[h];
                        if ((p && (_(u, t, c), null != u.duration && ((e = u.duration), delete u.duration)), m)) {
                            for (h in ((m = u.startAt = {}), i.startAt)) m[h] = i.startAt[h];
                            _(u.startAt, t, c);
                        }
                        (u.delay = f + (u.delay || 0)), c === l && r && (u.onComplete = a), (d[c] = new y(t[c], e, u)), (f += n);
                    }
                    return d;
                }),
                (y.staggerFrom = y.allFrom = function (t, e, i, n, r, s, o) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), y.staggerTo(t, e, i, n, r, s, o);
                }),
                (y.staggerFromTo = y.allFromTo = function (t, e, i, n, r, s, o, a) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), y.staggerTo(t, e, n, r, s, o, a);
                }),
                (y.delayedCall = function (t, e, i, n, r) {
                    return new y(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 });
                }),
                (y.set = function (t, e) {
                    return new y(t, 0, e);
                }),
                (y.isTweening = function (t) {
                    return 0 < v.getTweensOf(t, !0).length;
                });
            var s = function (t, e) {
                    for (var i = [], n = 0, r = t._first; r; ) r instanceof v ? (i[n++] = r) : (e && (i[n++] = r), (n = (i = i.concat(s(r, e))).length)), (r = r._next);
                    return i;
                },
                h = (y.getAllTweens = function (t) {
                    return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t));
                });
            (y.killAll = function (t, e, i, n) {
                null == e && (e = !0), null == i && (i = !0);
                var r,
                    s,
                    o,
                    a = h(0 != n),
                    l = a.length,
                    u = e && i && n;
                for (o = 0; o < l; o++) (s = a[o]), (u || s instanceof c || ((r = s.target === s.vars.onComplete) && i) || (e && !r)) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1));
            }),
                (y.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var i,
                            n,
                            r,
                            s,
                            o,
                            a = w.tweenLookup;
                        if (("string" == typeof t && (t = v.selector(t) || t), x(t) && (t = g(t)), T(t))) for (s = t.length; -1 < --s; ) y.killChildTweensOf(t[s], e);
                        else {
                            for (r in ((i = []), a)) for (n = a[r].target.parentNode; n; ) n === t && (i = i.concat(a[r].tweens)), (n = n.parentNode);
                            for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1);
                        }
                    }
                });
            function r(t, e, i, n) {
                (e = !1 !== e), (i = !1 !== i);
                for (var r, s, o = h((n = !1 !== n)), a = e && i && n, l = o.length; -1 < --l; ) (s = o[l]), (a || s instanceof c || ((r = s.target === s.vars.onComplete) && i) || (e && !r)) && s.paused(t);
            }
            return (
                (y.pauseAll = function (t, e, i) {
                    r(!0, t, e, i);
                }),
                (y.resumeAll = function (t, e, i) {
                    r(!1, t, e, i);
                }),
                (y.globalTimeScale = function (t) {
                    var e = n._rootTimeline,
                        i = v.ticker.time;
                    return arguments.length
                        ? ((t = t || b),
                          (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                          (e = n._rootFramesTimeline),
                          (i = v.ticker.frame),
                          (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                          (e._timeScale = n._rootTimeline._timeScale = t),
                          t)
                        : e._timeScale;
                }),
                (t.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
                }),
                (t.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
                }),
                (t.time = function (t, e) {
                    return arguments.length
                        ? (this._dirty && this.totalDuration(),
                          t > this._duration && (t = this._duration),
                          this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                          this.totalTime(t, e))
                        : this._time;
                }),
                (t.duration = function (t) {
                    return arguments.length ? n.prototype.duration.call(this, t) : this._duration;
                }),
                (t.totalDuration = function (t) {
                    return arguments.length
                        ? -1 === this._repeat
                            ? this
                            : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
                        : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                }),
                (t.repeat = function (t) {
                    return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                }),
                (t.repeatDelay = function (t) {
                    return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                }),
                (t.yoyo = function (t) {
                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                y
            );
        },
        !0
    ),
        _gsScope._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (c, h, f) {
                function d(t) {
                    h.call(this, t),
                        (this._labels = {}),
                        (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                        (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                        (this._sortChildren = !0),
                        (this._onUpdate = this.vars.onUpdate);
                    var e,
                        i,
                        n = this.vars;
                    for (i in n) (e = n[i]), y(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                    y(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
                }
                function p(t) {
                    var e,
                        i = {};
                    for (e in t) i[e] = t[e];
                    return i;
                }
                function m(t, e, i) {
                    var n,
                        r,
                        s = t.cycle;
                    for (n in s) (r = s[n]), (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
                    delete t.cycle;
                }
                function g(t) {
                    var e,
                        i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i;
                }
                var _ = 1e-10,
                    t = f._internals,
                    e = (d._internals = {}),
                    v = t.isSelector,
                    y = t.isArray,
                    b = t.lazyTweens,
                    w = t.lazyRender,
                    o = _gsScope._gsDefine.globals,
                    s = (e.pauseCallback = function () {}),
                    i = (d.prototype = new h());
                return (
                    (d.version = "2.0.1"),
                    (i.constructor = d),
                    (i.kill()._gc = i._forcingPlayhead = i._hasPause = !1),
                    (i.to = function (t, e, i, n) {
                        var r = (i.repeat && o.TweenMax) || f;
                        return e ? this.add(new r(t, e, i), n) : this.set(t, i, n);
                    }),
                    (i.from = function (t, e, i, n) {
                        return this.add(((i.repeat && o.TweenMax) || f).from(t, e, i), n);
                    }),
                    (i.fromTo = function (t, e, i, n, r) {
                        var s = (n.repeat && o.TweenMax) || f;
                        return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r);
                    }),
                    (i.staggerTo = function (t, e, i, n, r, s, o, a) {
                        var l,
                            u,
                            c = new d({ onComplete: s, onCompleteParams: o, callbackScope: a, smoothChildTiming: this.smoothChildTiming }),
                            h = i.cycle;
                        for ("string" == typeof t && (t = f.selector(t) || t), v((t = t || [])) && (t = g(t)), (n = n || 0) < 0 && ((t = g(t)).reverse(), (n *= -1)), u = 0; u < t.length; u++)
                            (l = p(i)).startAt && ((l.startAt = p(l.startAt)), l.startAt.cycle && m(l.startAt, t, u)), h && (m(l, t, u), null != l.duration && ((e = l.duration), delete l.duration)), c.to(t[u], e, l, u * n);
                        return this.add(c, r);
                    }),
                    (i.staggerFrom = function (t, e, i, n, r, s, o, a) {
                        return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, n, r, s, o, a);
                    }),
                    (i.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                        return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, n, r, s, o, a, l);
                    }),
                    (i.call = function (t, e, i, n) {
                        return this.add(f.delayedCall(0, t, e, i), n);
                    }),
                    (i.set = function (t, e, i) {
                        return (i = this._parseTimeOrLabel(i, 0, !0)), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new f(t, 0, e), i);
                    }),
                    (d.exportRoot = function (t, e) {
                        null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                        var i,
                            n,
                            r,
                            s,
                            o = new d(t),
                            a = o._timeline;
                        for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r; )
                            (s = r._next), (e && r instanceof f && r.target === r.vars.onComplete) || ((n = r._startTime - r._delay) < 0 && (i = 1), o.add(r, n)), (r = s);
                        return a.add(o, 0), i && o.totalDuration(), o;
                    }),
                    (i.add = function (t, e, i, n) {
                        var r, s, o, a, l, u;
                        if (("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof c))) {
                            if (t instanceof Array || (t && t.push && y(t))) {
                                for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++)
                                    y((a = t[o])) && (a = new d({ tweens: a })),
                                        this.add(a, r),
                                        "string" != typeof a && "function" != typeof a && ("sequence" === i ? (r = a._startTime + a.totalDuration() / a._timeScale) : "start" === i && (a._startTime -= a.delay())),
                                        (r += n);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof t) return this.addLabel(t, e);
                            if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                            t = f.delayedCall(0, t);
                        }
                        if ((h.prototype.add.call(this, t, e), t._time && t.render((this.rawTime() - t._startTime) * t._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                            for (u = (l = this).rawTime() > t._startTime; l._timeline; ) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), (l = l._timeline);
                        return this;
                    }),
                    (i.remove = function (t) {
                        if (t instanceof c) {
                            this._remove(t, !1);
                            var e = (t._timeline = t.vars.useFrames ? c._rootFramesTimeline : c._rootTimeline);
                            return (t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale), this;
                        }
                        if (t instanceof Array || (t && t.push && y(t))) {
                            for (var i = t.length; -1 < --i; ) this.remove(t[i]);
                            return this;
                        }
                        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t);
                    }),
                    (i._remove = function (t, e) {
                        return (
                            h.prototype._remove.call(this, t, e),
                            this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                            this
                        );
                    }),
                    (i.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                    }),
                    (i.insert = i.insertMultiple = function (t, e, i, n) {
                        return this.add(t, e || 0, i, n);
                    }),
                    (i.appendMultiple = function (t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
                    }),
                    (i.addLabel = function (t, e) {
                        return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                    }),
                    (i.addPause = function (t, e, i, n) {
                        var r = f.delayedCall(0, s, i, n || this);
                        return (r.vars.onComplete = r.vars.onReverseComplete = e), (r.data = "isPause"), (this._hasPause = !0), this.add(r, t);
                    }),
                    (i.removeLabel = function (t) {
                        return delete this._labels[t], this;
                    }),
                    (i.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1;
                    }),
                    (i._parseTimeOrLabel = function (t, e, i, n) {
                        var r, s;
                        if (n instanceof c && n.timeline === this) this.remove(n);
                        else if (n && (n instanceof Array || (n.push && y(n)))) for (s = n.length; -1 < --s; ) n[s] instanceof c && n[s].timeline === this && this.remove(n[s]);
                        if (((r = "number" != typeof t || e ? (99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof e))
                            return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - r : 0, i);
                        if (((e = e || 0), "string" != typeof t || (!isNaN(t) && null == this._labels[t]))) null == t && (t = r);
                        else {
                            if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? (i ? (this._labels[t] = r + e) : e) : this._labels[t] + e;
                            (e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1))), (t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : r);
                        }
                        return Number(t) + e;
                    }),
                    (i.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                    }),
                    (i.stop = function () {
                        return this.paused(!0);
                    }),
                    (i.gotoAndPlay = function (t, e) {
                        return this.play(t, e);
                    }),
                    (i.gotoAndStop = function (t, e) {
                        return this.pause(t, e);
                    }),
                    (i.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c = this._time,
                            h = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._startTime,
                            d = this._timeScale,
                            p = this._paused;
                        if ((c !== this._time && (t += this._time - c), h - 1e-7 <= t && 0 <= t))
                            (this._totalTime = this._time = h),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((r = !0),
                                    (o = "onComplete"),
                                    (a = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                        ((t <= 0 && -1e-7 <= t) || this._rawPrevTime < 0 || this._rawPrevTime === _) &&
                                        this._rawPrevTime !== t &&
                                        this._first &&
                                        ((a = !0), this._rawPrevTime > _ && (o = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _),
                                (t = h + 1e-4);
                        else if (t < 1e-7)
                            if (
                                ((this._totalTime = this._time = 0),
                                (0 !== c || (0 === this._duration && this._rawPrevTime !== _ && (0 < this._rawPrevTime || (t < 0 && 0 <= this._rawPrevTime)))) && ((o = "onReverseComplete"), (r = this._reversed)),
                                t < 0)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((a = r = !0), (o = "onReverseComplete")) : 0 <= this._rawPrevTime && this._first && (a = !0), (this._rawPrevTime = t);
                            else {
                                if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _), 0 === t && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                                (t = 0), this._initted || (a = !0);
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (c <= t) for (n = this._first; n && n._startTime <= t && !l; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (l = n), (n = n._next);
                                else for (n = this._last; n && n._startTime >= t && !l; ) n._duration || ("isPause" === n.data && 0 < n._rawPrevTime && (l = n)), (n = n._prev);
                                l && ((this._time = t = l._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                            }
                            this._totalTime = this._time = this._rawPrevTime = t;
                        }
                        if ((this._time !== c && this._first) || i || a || l) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== c && 0 < t && (this._active = !0)),
                                0 === c && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                                c <= (u = this._time))
                            )
                                for (n = this._first; n && ((s = n._next), u === this._time && (!this._paused || p)); )
                                    (n._active || (n._startTime <= u && !n._paused && !n._gc)) &&
                                        (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        (n = s);
                            else
                                for (n = this._last; n && ((s = n._prev), u === this._time && (!this._paused || p)); ) {
                                    if (n._active || (n._startTime <= c && !n._paused && !n._gc)) {
                                        if (l === n) {
                                            for (l = n._prev; l && l.endTime() > this._time; ) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), (l = l._prev);
                                            (l = null), this.pause();
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                                    }
                                    n = s;
                                }
                            this._onUpdate && (e || (b.length && w(), this._callback("onUpdate"))),
                                o &&
                                    (this._gc ||
                                        (f !== this._startTime && d === this._timeScale) ||
                                        !(0 === this._time || h >= this.totalDuration()) ||
                                        (r && (b.length && w(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[o] && this._callback(o)));
                        }
                    }),
                    (i._hasPausedChild = function () {
                        for (var t = this._first; t; ) {
                            if (t._paused || (t instanceof d && t._hasPausedChild())) return !0;
                            t = t._next;
                        }
                        return !1;
                    }),
                    (i.getChildren = function (t, e, i, n) {
                        n = n || -9999999999;
                        for (var r = [], s = this._first, o = 0; s; )
                            s._startTime < n || (s instanceof f ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), (s = s._next);
                        return r;
                    }),
                    (i.getTweensOf = function (t, e) {
                        var i,
                            n,
                            r = this._gc,
                            s = [],
                            o = 0;
                        for (r && this._enabled(!0, !0), n = (i = f.getTweensOf(t)).length; -1 < --n; ) (i[n].timeline === this || (e && this._contains(i[n]))) && (s[o++] = i[n]);
                        return r && this._enabled(!1, !0), s;
                    }),
                    (i.recent = function () {
                        return this._recent;
                    }),
                    (i._contains = function (t) {
                        for (var e = t.timeline; e; ) {
                            if (e === this) return !0;
                            e = e.timeline;
                        }
                        return !1;
                    }),
                    (i.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, s = this._labels; r; ) r._startTime >= i && (r._startTime += t), (r = r._next);
                        if (e) for (n in s) s[n] >= i && (s[n] += t);
                        return this._uncache(!0);
                    }),
                    (i._kill = function (t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; -1 < --n; ) i[n]._kill(t, e) && (r = !0);
                        return r;
                    }),
                    (i.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; -1 < --i; ) e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0);
                    }),
                    (i.invalidate = function () {
                        for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                        return c.prototype.invalidate.call(this);
                    }),
                    (i._enabled = function (t, e) {
                        if (t === this._gc) for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
                        return h.prototype._enabled.call(this, t, e);
                    }),
                    (i.totalTime = function (t, e, i) {
                        this._forcingPlayhead = !0;
                        var n = c.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), n;
                    }),
                    (i.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (i.totalDuration = function (t) {
                        if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                                (e = r._prev),
                                    r._dirty && r.totalDuration(),
                                    r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration
                                        ? ((this._calculatingDuration = 1), this.add(r, r._startTime - r._delay), (this._calculatingDuration = 0))
                                        : (s = r._startTime),
                                    r._startTime < 0 &&
                                        !r._paused &&
                                        ((n -= r._startTime),
                                        this._timeline.smoothChildTiming && ((this._startTime += r._startTime / this._timeScale), (this._time -= r._startTime), (this._totalTime -= r._startTime), (this._rawPrevTime -= r._startTime)),
                                        this.shiftChildren(-r._startTime, !1, -9999999999),
                                        (s = 0)),
                                    n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i),
                                    (r = e);
                            (this._duration = this._totalDuration = n), (this._dirty = !1);
                        }
                        return this._totalDuration;
                    }),
                    (i.paused = function (t) {
                        if (!t) for (var e = this._first, i = this._time; e; ) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), (e = e._next);
                        return c.prototype.paused.apply(this, arguments);
                    }),
                    (i.usesFrames = function () {
                        for (var t = this._timeline; t._timeline; ) t = t._timeline;
                        return t === c._rootFramesTimeline;
                    }),
                    (i.rawTime = function (t) {
                        return t && (this._paused || (this._repeat && 0 < this.time() && this.totalProgress() < 1))
                            ? this._totalTime % (this._duration + this._repeatDelay)
                            : this._paused
                            ? this._totalTime
                            : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
                    }),
                    d
                );
            },
            !0
        ),
        _gsScope._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (e, a, t) {
                function i(t) {
                    e.call(this, t), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
                }
                var S = 1e-10,
                    n = a._internals,
                    k = n.lazyTweens,
                    A = n.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    u = new t(null, null, 1, 0),
                    r = (i.prototype = new e());
                return (
                    (r.constructor = i),
                    (r.kill()._gc = !1),
                    (i.version = "2.0.1"),
                    (r.invalidate = function () {
                        return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), e.prototype.invalidate.call(this);
                    }),
                    (r.addCallback = function (t, e, i, n) {
                        return this.add(a.delayedCall(0, t, i, n), e);
                    }),
                    (r.removeCallback = function (t, e) {
                        if (t)
                            if (null == e) this._kill(null, t);
                            else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); -1 < --n; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this;
                    }),
                    (r.removePause = function (t) {
                        return this.removeCallback(e._internals.pauseCallback, t);
                    }),
                    (r.tweenTo = function (t, e) {
                        e = e || {};
                        var i,
                            n,
                            r,
                            s = { ease: u, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                            o = (e.repeat && l.TweenMax) || a;
                        for (n in e) s[n] = e[n];
                        return (
                            (s.time = this._parseTimeOrLabel(t)),
                            (i = Math.abs(Number(s.time) - this._time) / this._timeScale || 0.001),
                            (r = new o(this, i, s)),
                            (s.onStart = function () {
                                r.target.paused(!0),
                                    r.vars.time === r.target.time() || i !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0),
                                    e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || []);
                            }),
                            r
                        );
                    }),
                    (r.tweenFromTo = function (t, e, i) {
                        (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                        var n = this.tweenTo(e, i);
                        return (n.isFromTo = 1), n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001);
                    }),
                    (r.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c,
                            h = this._time,
                            f = this._dirty ? this.totalDuration() : this._totalDuration,
                            d = this._duration,
                            p = this._totalTime,
                            m = this._startTime,
                            g = this._timeScale,
                            _ = this._rawPrevTime,
                            v = this._paused,
                            y = this._cycle;
                        if ((h !== this._time && (t += this._time - h), f - 1e-7 <= t && 0 <= t))
                            this._locked || ((this._totalTime = f), (this._cycle = this._repeat)),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((r = !0),
                                    (o = "onComplete"),
                                    (a = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration && ((t <= 0 && -1e-7 <= t) || _ < 0 || _ === S) && _ !== t && this._first && ((a = !0), S < _ && (o = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : S),
                                this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : (t = (this._time = d) + 1e-4);
                        else if (t < 1e-7)
                            if (
                                (this._locked || (this._totalTime = this._cycle = 0),
                                ((this._time = 0) !== h || (0 === d && _ !== S && (0 < _ || (t < 0 && 0 <= _)) && !this._locked)) && ((o = "onReverseComplete"), (r = this._reversed)),
                                t < 0)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((a = r = !0), (o = "onReverseComplete")) : 0 <= _ && this._first && (a = !0), (this._rawPrevTime = t);
                            else {
                                if (((this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : S), 0 === t && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                                (t = 0), this._initted || (a = !0);
                            }
                        else if (
                            (0 === d && _ < 0 && (a = !0),
                            (this._time = this._rawPrevTime = t),
                            this._locked ||
                                ((this._totalTime = t),
                                0 !== this._repeat &&
                                    ((l = d + this._repeatDelay),
                                    (this._cycle = (this._totalTime / l) >> 0),
                                    0 !== this._cycle && this._cycle === this._totalTime / l && p <= t && this._cycle--,
                                    (this._time = this._totalTime - this._cycle * l),
                                    this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
                                    this._time > d ? (t = (this._time = d) + 1e-4) : this._time < 0 ? (this._time = t = 0) : (t = this._time))),
                            this._hasPause && !this._forcingPlayhead && !e)
                        ) {
                            if (h <= (t = this._time) || (this._repeat && y !== this._cycle))
                                for (n = this._first; n && n._startTime <= t && !u; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (u = n), (n = n._next);
                            else for (n = this._last; n && n._startTime >= t && !u; ) n._duration || ("isPause" === n.data && 0 < n._rawPrevTime && (u = n)), (n = n._prev);
                            u && u._startTime < d && ((this._time = t = u._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                        }
                        if (this._cycle !== y && !this._locked) {
                            var b = this._yoyo && 0 != (1 & y),
                                w = b === (this._yoyo && 0 != (1 & this._cycle)),
                                x = this._totalTime,
                                T = this._cycle,
                                C = this._rawPrevTime,
                                E = this._time;
                            if (
                                ((this._totalTime = y * d),
                                this._cycle < y ? (b = !b) : (this._totalTime += d),
                                (this._time = h),
                                (this._rawPrevTime = 0 === d ? _ - 1e-4 : _),
                                (this._cycle = y),
                                (this._locked = !0),
                                (h = b ? 0 : d),
                                this.render(h, e, 0 === d),
                                e || this._gc || (this.vars.onRepeat && ((this._cycle = T), (this._locked = !1), this._callback("onRepeat"))),
                                h !== this._time)
                            )
                                return;
                            if ((w && ((this._cycle = y), (this._locked = !0), (h = b ? d + 1e-4 : -1e-4), this.render(h, !0, !1)), (this._locked = !1), this._paused && !v)) return;
                            (this._time = E), (this._totalTime = x), (this._cycle = T), (this._rawPrevTime = C);
                        }
                        if ((this._time !== h && this._first) || i || a || u) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._totalTime !== p && 0 < t && (this._active = !0)),
                                0 === p && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || e || this._callback("onStart")),
                                h <= (c = this._time))
                            )
                                for (n = this._first; n && ((s = n._next), c === this._time && (!this._paused || v)); )
                                    (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                                        (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        (n = s);
                            else
                                for (n = this._last; n && ((s = n._prev), c === this._time && (!this._paused || v)); ) {
                                    if (n._active || (n._startTime <= h && !n._paused && !n._gc)) {
                                        if (u === n) {
                                            for (u = n._prev; u && u.endTime() > this._time; ) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), (u = u._prev);
                                            (u = null), this.pause();
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                                    }
                                    n = s;
                                }
                            this._onUpdate && (e || (k.length && A(), this._callback("onUpdate"))),
                                o &&
                                    (this._locked ||
                                        this._gc ||
                                        (m !== this._startTime && g === this._timeScale) ||
                                        !(0 === this._time || f >= this.totalDuration()) ||
                                        (r && (k.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[o] && this._callback(o)));
                        } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
                    }),
                    (r.getActive = function (t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n,
                            r,
                            s = [],
                            o = this.getChildren(t, e, i),
                            a = 0,
                            l = o.length;
                        for (n = 0; n < l; n++) (r = o[n]).isActive() && (s[a++] = r);
                        return s;
                    }),
                    (r.getLabelAfter = function (t) {
                        t || (0 !== t && (t = this._time));
                        var e,
                            i = this.getLabelsArray(),
                            n = i.length;
                        for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
                        return null;
                    }),
                    (r.getLabelBefore = function (t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; -1 < --i; ) if (e[i].time < t) return e[i].name;
                        return null;
                    }),
                    (r.getLabelsArray = function () {
                        var t,
                            e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                        return (
                            e.sort(function (t, e) {
                                return t.time - e.time;
                            }),
                            e
                        );
                    }),
                    (r.invalidate = function () {
                        return (this._locked = !1), e.prototype.invalidate.call(this);
                    }),
                    (r.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0;
                    }),
                    (r.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0;
                    }),
                    (r.totalDuration = function (t) {
                        return arguments.length
                            ? -1 !== this._repeat && t
                                ? this.timeScale(this.totalDuration() / t)
                                : this
                            : (this._dirty && (e.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                    }),
                    (r.time = function (t, e) {
                        return arguments.length
                            ? (this._dirty && this.totalDuration(),
                              t > this._duration && (t = this._duration),
                              this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                              this.totalTime(t, e))
                            : this._time;
                    }),
                    (r.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                    }),
                    (r.repeatDelay = function (t) {
                        return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                    }),
                    (r.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (r.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                    }),
                    i
                );
            },
            !0
        ),
        (T = 180 / Math.PI),
        (w = []),
        (x = []),
        (C = []),
        (_ = {}),
        (i = _gsScope._gsDefine.globals),
        (g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function (t, e, i) {
                (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
                var n,
                    r,
                    s,
                    o,
                    a,
                    l = e.values || [],
                    u = {},
                    c = l[0],
                    h = e.autoRotate || i.vars.orientToBezier;
                for (n in ((this._autoRotate = h ? (h instanceof Array ? h : [["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]]) : null), c)) this._props.push(n);
                for (s = this._props.length; -1 < --s; )
                    (n = this._props[s]),
                        this._overwriteProps.push(n),
                        (r = this._func[n] = "function" == typeof t[n]),
                        (u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n])),
                        a || (u[n] !== l[0][n] && (a = u));
                if (
                    ((this._beziers =
                        "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                            ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a)
                            : (function (t, e, i) {
                                  var n,
                                      r,
                                      s,
                                      o,
                                      a,
                                      l,
                                      u,
                                      c,
                                      h,
                                      f,
                                      d,
                                      p = {},
                                      m = "cubic" === (e = e || "soft") ? 3 : 2,
                                      g = "soft" === e,
                                      _ = [];
                                  if ((g && i && (t = [i].concat(t)), null == t || t.length < 1 + m)) throw "invalid Bezier data";
                                  for (h in t[0]) _.push(h);
                                  for (l = _.length; -1 < --l; ) {
                                      for (p[(h = _[l])] = a = [], f = 0, c = t.length, u = 0; u < c; u++)
                                          (n = null == i ? t[u][h] : "string" == typeof (d = t[u][h]) && "=" === d.charAt(1) ? i[h] + Number(d.charAt(0) + d.substr(2)) : Number(d)),
                                              g && 1 < u && u < c - 1 && (a[f++] = (n + a[f - 2]) / 2),
                                              (a[f++] = n);
                                      for (c = f - m + 1, u = f = 0; u < c; u += m)
                                          (n = a[u]), (r = a[u + 1]), (s = a[u + 2]), (o = 2 == m ? 0 : a[u + 3]), (a[f++] = d = 3 == m ? new v(n, r, s, o) : new v(n, (2 * r + n) / 3, (2 * r + s) / 3, s));
                                      a.length = f;
                                  }
                                  return p;
                              })(l, e.type, u)),
                    (this._segCount = this._beziers[n].length),
                    this._timeRes)
                ) {
                    var f = (function (t, e) {
                        var i,
                            n,
                            r,
                            s,
                            o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = (e = e >> 0 || 6) - 1,
                            h = [],
                            f = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; n < r; n++) (l += Math.sqrt(o[n])), (f[(s = n % e)] = l), s === c && ((u += l), (h[(s = (n / e) >> 0)] = f), (a[s] = u), (l = 0), (f = []));
                        return { length: u, lengths: a, segments: h };
                    })(this._beziers, this._timeRes);
                    (this._length = f.length),
                        (this._lengths = f.lengths),
                        (this._segments = f.segments),
                        (this._l1 = this._li = this._s1 = this._si = 0),
                        (this._l2 = this._lengths[0]),
                        (this._curSeg = this._segments[0]),
                        (this._s2 = this._curSeg[0]),
                        (this._prec = 1 / this._curSeg.length);
                }
                if ((h = this._autoRotate))
                    for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), s = h.length; -1 < --s; ) {
                        for (o = 0; o < 3; o++) (n = h[s][o]), (this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]);
                        (n = h[s][2]), (this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0), this._overwriteProps.push(n);
                    }
                return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
            },
            set: function (t) {
                var e,
                    i,
                    n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h = this._segCount,
                    f = this._func,
                    d = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (((u = this._lengths), (c = this._curSeg), (t *= this._length), (n = this._li), t > this._l2 && n < h - 1)) {
                        for (l = h - 1; n < l && (this._l2 = u[++n]) <= t; );
                        (this._l1 = u[n - 1]), (this._li = n), (this._curSeg = c = this._segments[n]), (this._s2 = c[(this._s1 = this._si = 0)]);
                    } else if (t < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = u[--n]) >= t; );
                        0 === n && t < this._l1 ? (this._l1 = 0) : n++, (this._l2 = u[n]), (this._li = n), (this._curSeg = c = this._segments[n]), (this._s1 = c[(this._si = c.length - 1) - 1] || 0), (this._s2 = c[this._si]);
                    }
                    if (((e = n), (t -= this._l1), (n = this._si), t > this._s2 && n < c.length - 1)) {
                        for (l = c.length - 1; n < l && (this._s2 = c[++n]) <= t; );
                        (this._s1 = c[n - 1]), (this._si = n);
                    } else if (t < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = c[--n]) >= t; );
                        0 === n && t < this._s1 ? (this._s1 = 0) : n++, (this._s2 = c[n]), (this._si = n);
                    }
                    o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                } else o = (t - (e = t < 0 ? 0 : 1 <= t ? h - 1 : (h * t) >> 0) * (1 / h)) * h;
                for (i = 1 - o, n = this._props.length; -1 < --n; )
                    (r = this._props[n]), (a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a), this._mod[r] && (a = this._mod[r](a, d)), f[r] ? d[r](a) : (d[r] = a);
                if (this._autoRotate) {
                    var m,
                        g,
                        _,
                        v,
                        y,
                        b,
                        w,
                        x = this._autoRotate;
                    for (n = x.length; -1 < --n; )
                        (r = x[n][2]),
                            (b = x[n][3] || 0),
                            (w = !0 === x[n][4] ? 1 : T),
                            (s = this._beziers[x[n][0]]),
                            (m = this._beziers[x[n][1]]),
                            s &&
                                m &&
                                ((s = s[e]),
                                (m = m[e]),
                                (g = s.a + (s.b - s.a) * o),
                                (g += ((v = s.b + (s.c - s.b) * o) - g) * o),
                                (v += (s.c + (s.d - s.c) * o - v) * o),
                                (_ = m.a + (m.b - m.a) * o),
                                (_ += ((y = m.b + (m.c - m.b) * o) - _) * o),
                                (y += (m.c + (m.d - m.c) * o - y) * o),
                                (a = p ? Math.atan2(y - _, v - g) * w + b : this._initialRotations[n]),
                                this._mod[r] && (a = this._mod[r](a, d)),
                                f[r] ? d[r](a) : (d[r] = a));
                }
            },
        })),
        (n = g.prototype),
        (g.bezierThrough = d),
        (g.cubicToQuadratic = E),
        (g._autoCSS = !0),
        (g.quadraticToCubic = function (t, e, i) {
            return new v(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }),
        (g._cssRegister = function () {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    d = e._parseToProxy,
                    p = e._setPluginRatio,
                    m = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, i, n, r, s) {
                        e instanceof Array && (e = { values: e }), (s = new g());
                        var o,
                            a,
                            l,
                            u = e.values,
                            c = u.length - 1,
                            h = [],
                            f = {};
                        if (c < 0) return r;
                        for (o = 0; o <= c; o++) (l = d(t, u[o], n, r, s, c !== o)), (h[o] = l.end);
                        for (a in e) f[a] = e[a];
                        return (
                            (f.values = h),
                            ((r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l),
                            (r.plugin = s),
                            (r.setRatio = p),
                            0 === f.autoRotate && (f.autoRotate = !0),
                            !f.autoRotate ||
                                f.autoRotate instanceof Array ||
                                ((o = !0 === f.autoRotate ? 0 : Number(f.autoRotate)), (f.autoRotate = null != l.end.left ? [["left", "top", "rotation", o, !1]] : null != l.end.x && [["x", "y", "rotation", o, !1]])),
                            f.autoRotate && (n._transform || n._enableTransforms(!1), (l.autoRotate = n._target._gsTransform), (l.proxy.rotation = l.autoRotate.rotation || 0), n._overwriteProps.push("rotation")),
                            s._onInitTween(l.proxy, f, n._tween),
                            r
                        );
                    },
                });
            }
        }),
        (n._mod = function (t) {
            for (var e, i = this._overwriteProps, n = i.length; -1 < --n; ) (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
        }),
        (n._kill = function (t) {
            var e,
                i,
                n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; -1 < --i; ) n[i] === e && n.splice(i, 1);
            if ((n = this._autoRotate)) for (i = n.length; -1 < --i; ) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t);
        }),
        _gsScope._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (s, H) {
                var p,
                    C,
                    S,
                    m,
                    W = function () {
                        s.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = W.prototype.setRatio);
                    },
                    u = _gsScope._gsDefine.globals,
                    g = {},
                    t = (W.prototype = new s("css"));
                ((t.constructor = W).version = "1.20.5"),
                    (W.API = 2),
                    (W.defaultTransformPerspective = 0),
                    (W.defaultSkewType = "compensated"),
                    (W.defaultSmoothOrigin = !0),
                    (t = "px"),
                    (W.suffixMap = { top: t, right: t, bottom: t, left: t, width: t, height: t, fontSize: t, padding: t, margin: t, perspective: t, lineHeight: "" });
                function o(t, e) {
                    return e.toUpperCase();
                }
                function a(t, e) {
                    return tt.createElementNS ? tt.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : tt.createElement(t);
                }
                function l(t) {
                    return z.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                }
                function _(t) {
                    _gsScope.console && console.log(t);
                }
                function E(t, e) {
                    var i,
                        n,
                        r = (e = e || et).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; -1 < --n && void 0 === r[i[n] + t]; );
                    return 0 <= n ? ((ot = "-" + (at = 3 === n ? "ms" : i[n]).toLowerCase() + "-"), at + t) : null;
                }
                function v(t, e) {
                    var i,
                        n,
                        r,
                        s = {};
                    if ((e = e || lt(t, null)))
                        if ((i = e.length)) for (; -1 < --i; ) (-1 !== (r = e[i]).indexOf("-transform") && Ft !== r) || (s[r.replace($, o)] = e.getPropertyValue(r));
                        else for (i in e) (-1 !== i.indexOf("Transform") && jt !== i) || (s[i] = e[i]);
                    else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace($, o)] = e[i]);
                    return (
                        st || (s.opacity = l(t)),
                        (n = Qt(t, e, !1)),
                        (s.rotation = n.rotation),
                        (s.skewX = n.skewX),
                        (s.scaleX = n.scaleX),
                        (s.scaleY = n.scaleY),
                        (s.x = n.x),
                        (s.y = n.y),
                        Ht && ((s.z = n.z), (s.rotationX = n.rotationX), (s.rotationY = n.rotationY), (s.scaleZ = n.scaleZ)),
                        s.filters && delete s.filters,
                        s
                    );
                }
                function y(t, e, i, n, r) {
                    var s,
                        o,
                        a,
                        l = {},
                        u = t.style;
                    for (o in i)
                        "cssText" !== o &&
                            "length" !== o &&
                            isNaN(o) &&
                            (e[o] !== (s = i[o]) || (r && r[o])) &&
                            -1 === o.indexOf("Origin") &&
                            ("number" == typeof s || "string" == typeof s) &&
                            ((l[o] = "auto" !== s || ("left" !== o && "top" !== o) ? (("" !== s && "auto" !== s && "none" !== s) || "string" != typeof e[o] || "" === e[o].replace(c, "") ? s : 0) : ht(t, o)),
                            void 0 !== u[o] && (a = new wt(u, o, u[o], a)));
                    if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                    return { difs: l, firstMPT: a };
                }
                function b(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || lt(t))[e] || 0;
                    if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = ft[e],
                        s = r.length;
                    for (i = i || lt(t, null); -1 < --s; ) (n -= parseFloat(ut(t, "padding" + r[s], i, !0)) || 0), (n -= parseFloat(ut(t, "border" + r[s] + "Width", i, !0)) || 0);
                    return n;
                }
                function k(t, e) {
                    return "function" == typeof t && (t = t(N, I)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                }
                function A(t, e) {
                    return "function" == typeof t && (t = t(N, I)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
                }
                function O(t, e, i, n) {
                    var r, s, o, a;
                    return (
                        "function" == typeof t && (t = t(N, I)),
                        (o =
                            null == t
                                ? e
                                : "number" == typeof t
                                ? t
                                : (360,
                                  (r = t.split("_")),
                                  (s = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : G) - (a ? 0 : e)),
                                  r.length &&
                                      (n && (n[i] = e + s),
                                      -1 !== t.indexOf("short") && (s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360),
                                      -1 !== t.indexOf("_cw") && s < 0 ? (s = ((s + 3599999999640) % 360) - 360 * ((s / 360) | 0)) : -1 !== t.indexOf("ccw") && 0 < s && (s = ((s - 3599999999640) % 360) - 360 * ((s / 360) | 0))),
                                  e + s)) < 1e-6 &&
                            -1e-6 < o &&
                            (o = 0),
                        o
                    );
                }
                function d(t, e, i) {
                    return (255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                }
                function n(t, e) {
                    var i,
                        n,
                        r,
                        s = t.match(_t) || [],
                        o = 0,
                        a = "";
                    if (!s.length) return t;
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            (o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length),
                            3 === (n = gt(n, e)).length && n.push(1),
                            (a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
                    return a + t.substr(o);
                }
                var D,
                    w,
                    x,
                    j,
                    T,
                    P,
                    I,
                    N,
                    e,
                    i,
                    R = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    M = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    L = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    F = /(?:\d|\-|\+|=|#|\.)*/g,
                    z = /opacity *= *([^)]*)/i,
                    B = /opacity:([^;]*)/i,
                    h = /alpha\(opacity *=.+?\)/i,
                    q = /^(rgb|hsl)/,
                    f = /([A-Z])/g,
                    $ = /-([a-z])/gi,
                    U = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    Y = /(?:Left|Right|Width)/i,
                    X = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    V = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    Q = /,(?=[^\)]*(?:\(|$))/gi,
                    K = /[\s,\(]/i,
                    J = Math.PI / 180,
                    G = 180 / Math.PI,
                    Z = {},
                    r = { style: {} },
                    tt = _gsScope.document || {
                        createElement: function () {
                            return r;
                        },
                    },
                    et = a("div"),
                    it = a("img"),
                    nt = (W._internals = { _specialProps: g }),
                    rt = (_gsScope.navigator || {}).userAgent || "",
                    st =
                        ((e = rt.indexOf("Android")),
                        (i = a("a")),
                        (x = -1 !== rt.indexOf("Safari") && -1 === rt.indexOf("Chrome") && (-1 === e || 3 < parseFloat(rt.substr(e + 8, 2)))),
                        (T = x && parseFloat(rt.substr(rt.indexOf("Version/") + 8, 2)) < 6),
                        (j = -1 !== rt.indexOf("Firefox")),
                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(rt) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(rt)) && (P = parseFloat(RegExp.$1)),
                        !!i && ((i.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(i.style.opacity))),
                    ot = "",
                    at = "",
                    lt = ("undefined" != typeof window ? window : tt.defaultView || { getComputedStyle: function () {} }).getComputedStyle,
                    ut = (W.getStyle = function (t, e, i, n, r) {
                        var s;
                        return st || "opacity" !== e
                            ? (!n && t.style[e] ? (s = t.style[e]) : (i = i || lt(t)) ? (s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(f, "-$1").toLowerCase())) : t.currentStyle && (s = t.currentStyle[e]),
                              null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                            : l(t);
                    }),
                    ct = (nt.convertToPixels = function (t, e, i, n, r) {
                        if ("px" === n || (!n && "lineHeight" !== e)) return i;
                        if ("auto" === n || !i) return 0;
                        var s,
                            o,
                            a,
                            l = Y.test(e),
                            u = t,
                            c = et.style,
                            h = i < 0,
                            f = 1 === i;
                        if ((h && (i = -i), f && (i *= 100), "lineHeight" !== e || n))
                            if ("%" === n && -1 !== e.indexOf("border")) s = (i / 100) * (l ? t.clientWidth : t.clientHeight);
                            else {
                                if (((c.cssText = "border:0 solid red;position:" + ut(t, "position") + ";line-height:0;"), "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n))
                                    c[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                                else {
                                    if (((u = t.parentNode || tt.body), -1 !== ut(u, "display").indexOf("flex") && (c.position = "absolute"), (o = u._gsCache), (a = H.ticker.frame), o && l && o.time === a)) return (o.width * i) / 100;
                                    c[l ? "width" : "height"] = i + n;
                                }
                                u.appendChild(et),
                                    (s = parseFloat(et[l ? "offsetWidth" : "offsetHeight"])),
                                    u.removeChild(et),
                                    l && "%" === n && !1 !== W.cacheWidths && (((o = u._gsCache = u._gsCache || {}).time = a), (o.width = (s / i) * 100)),
                                    0 !== s || r || (s = ct(t, e, i, n, !0));
                            }
                        else (o = lt(t).lineHeight), (t.style.lineHeight = i), (s = parseFloat(lt(t).lineHeight)), (t.style.lineHeight = o);
                        return f && (s /= 100), h ? -s : s;
                    }),
                    ht = (nt.calculateOffset = function (t, e, i) {
                        if ("absolute" !== ut(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = ut(t, "margin" + n, i);
                        return t["offset" + n] - (ct(t, e, parseFloat(r), r.replace(F, "")) || 0);
                    }),
                    ft = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    dt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    pt = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null != t && "" !== t) || (t = "0 0");
                        var i,
                            n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (3 < n.length && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(pt(n[i]));
                            return t.join(",");
                        }
                        return (
                            null == s ? (s = "center" === r ? "50%" : "0") : "center" === s && (s = "50%"),
                            ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                            (t = r + " " + s + (2 < n.length ? " " + n[2] : "")),
                            e &&
                                ((e.oxp = -1 !== r.indexOf("%")),
                                (e.oyp = -1 !== s.indexOf("%")),
                                (e.oxr = "=" === r.charAt(1)),
                                (e.oyr = "=" === s.charAt(1)),
                                (e.ox = parseFloat(r.replace(c, ""))),
                                (e.oy = parseFloat(s.replace(c, ""))),
                                (e.v = t)),
                            e || t
                        );
                    },
                    mt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    gt = (W.parseColor = function (t, e) {
                        var i, n, r, s, o, a, l, u, c, h, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
                            else {
                                if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), mt[t])) i = mt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), (i = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                                else if ("hsl" === t.substr(0, 3))
                                    if (((i = f = t.match(R)), e)) {
                                        if (-1 !== t.indexOf("=")) return t.match(M);
                                    } else
                                        (o = (Number(i[0]) % 360) / 360),
                                            (a = Number(i[1]) / 100),
                                            (n = 2 * (l = Number(i[2]) / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                            3 < i.length && (i[3] = Number(i[3])),
                                            (i[0] = d(o + 1 / 3, n, r)),
                                            (i[1] = d(o, n, r)),
                                            (i[2] = d(o - 1 / 3, n, r));
                                else i = t.match(R) || mt.transparent;
                                (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), 3 < i.length && (i[3] = Number(i[3]));
                            }
                        else i = mt.black;
                        return (
                            e &&
                                !f &&
                                ((n = i[0] / 255),
                                (r = i[1] / 255),
                                (s = i[2] / 255),
                                (l = ((u = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2),
                                u === c ? (o = a = 0) : ((h = u - c), (a = 0.5 < l ? h / (2 - u - c) : h / (u + c)), (o = u === n ? (r - s) / h + (r < s ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4), (o *= 60)),
                                (i[0] = (o + 0.5) | 0),
                                (i[1] = (100 * a + 0.5) | 0),
                                (i[2] = (100 * l + 0.5) | 0)),
                            i
                        );
                    }),
                    _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in mt) _t += "|" + t + "\\b";
                (_t = new RegExp(_t + ")", "gi")),
                    (W.colorStringFilter = function (t) {
                        var e,
                            i = t[0] + " " + t[1];
                        _t.test(i) && ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (t[0] = n(t[0], e)), (t[1] = n(t[1], e))), (_t.lastIndex = 0);
                    }),
                    H.defaultStringFilter || (H.defaultStringFilter = W.colorStringFilter);
                function vt(t, e, s, o) {
                    if (null == t)
                        return function (t) {
                            return t;
                        };
                    var a,
                        l = e ? (t.match(_t) || [""])[0] : "",
                        u = t.split(l).join("").match(L) || [],
                        c = t.substr(0, t.indexOf(u[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        f = -1 !== t.indexOf(" ") ? " " : ",",
                        d = u.length,
                        p = 0 < d ? u[0].replace(R, "") : "";
                    return d
                        ? (a = e
                              ? function (t) {
                                    var e, i, n, r;
                                    if ("number" == typeof t) t += p;
                                    else if (o && Q.test(t)) {
                                        for (r = t.replace(Q, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]);
                                        return r.join(",");
                                    }
                                    if (((e = (t.match(_t) || [l])[0]), (n = (i = t.split(e).join("").match(L) || []).length), d > n--)) for (; ++n < d; ) i[n] = s ? i[((n - 1) / 2) | 0] : u[n];
                                    return c + i.join(f) + f + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
                                }
                              : function (t) {
                                    var e, i, n;
                                    if ("number" == typeof t) t += p;
                                    else if (o && Q.test(t)) {
                                        for (i = t.replace(Q, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                                        return i.join(",");
                                    }
                                    if (((n = (e = t.match(L) || []).length), d > n--)) for (; ++n < d; ) e[n] = s ? e[((n - 1) / 2) | 0] : u[n];
                                    return c + e.join(f) + h;
                                })
                        : function (t) {
                              return t;
                          };
                }
                function yt(u) {
                    return (
                        (u = u.split(",")),
                        function (t, e, i, n, r, s, o) {
                            var a,
                                l = (e + "").split(" ");
                            for (o = {}, a = 0; a < 4; a++) o[u[a]] = l[a] = l[a] || l[((a - 1) / 2) >> 0];
                            return n.parse(t, o, r, s);
                        }
                    );
                }
                function bt(t, e, i, n, r, s) {
                    var o = new xt(t, e, i, n - i, r, -1, s);
                    return (o.b = i), (o.e = o.xs0 = n), o;
                }
                var wt =
                        ((nt._setPluginRatio = function (t) {
                            this.plugin.setRatio(t);
                            for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l; ) (e = a[l.v]), l.r ? (e = l.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0), (l.t[l.p] = e), (l = l._next);
                            if ((o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t))
                                for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                                    if ((i = l.t).type) {
                                        if (1 === i.type) {
                                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                            i[s] = r;
                                        }
                                    } else i[s] = i.s + i.xs0;
                                    l = l._next;
                                }
                        }),
                        function (t, e, i, n, r) {
                            (this.t = t), (this.p = e), (this.v = i), (this.r = r), n && ((n._prev = this)._next = n);
                        }),
                    xt =
                        ((nt._parseToProxy = function (t, e, i, n, r, s) {
                            var o,
                                a,
                                l,
                                u,
                                c,
                                h = n,
                                f = {},
                                d = {},
                                p = i._transform,
                                m = Z;
                            for (i._transform = null, Z = e, n = c = i.parse(t, e, n, r), Z = m, s && ((i._transform = p), h && ((h._prev = null), h._prev && (h._prev._next = null))); n && n !== h; ) {
                                if (n.type <= 1 && ((d[(a = n.p)] = n.s + n.c), (f[a] = n.s), s || ((u = new wt(n, "s", a, u, n.r)), (n.c = 0)), 1 === n.type))
                                    for (o = n.l; 0 < --o; ) (l = "xn" + o), (d[(a = n.p + "_" + l)] = n.data[l]), (f[a] = n[l]), s || (u = new wt(n, l, a, u, n.rxp[l]));
                                n = n._next;
                            }
                            return { proxy: f, end: d, firstMPT: u, pt: c };
                        }),
                        (nt.CSSPropTween = function (t, e, i, n, r, s, o, a, l, u, c) {
                            (this.t = t),
                                (this.p = e),
                                (this.s = i),
                                (this.c = n),
                                (this.n = o || e),
                                t instanceof xt || m.push(this.n),
                                (this.r = a ? ("function" == typeof a ? a : Math.round) : a),
                                (this.type = s || 0),
                                l && ((this.pr = l), (p = !0)),
                                (this.b = void 0 === u ? i : u),
                                (this.e = void 0 === c ? i + n : c),
                                r && ((this._next = r)._prev = this);
                        })),
                    Tt = (W.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
                        (i = i || s || ""),
                            "function" == typeof n && (n = n(N, I)),
                            (o = new xt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n)),
                            (n += ""),
                            r && _t.test(n + i) && ((n = [i, n]), W.colorStringFilter(n), (i = n[0]), (n = n[1]));
                        var c,
                            h,
                            f,
                            d,
                            p,
                            m,
                            g,
                            _,
                            v,
                            y,
                            b,
                            w,
                            x,
                            T = i.split(", ").join(",").split(" "),
                            C = n.split(", ").join(",").split(" "),
                            E = T.length,
                            S = !1 !== D;
                        for (
                            (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                                ((C =
                                    -1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                                        ? ((T = T.join(" ").replace(Q, ", ").split(" ")), C.join(" ").replace(Q, ", ").split(" "))
                                        : ((T = T.join(" ").split(",").join(", ").split(" ")), C.join(" ").split(",").join(", ").split(" "))),
                                (E = T.length)),
                                E !== C.length && (E = (T = (s || "").split(" ")).length),
                                o.plugin = l,
                                o.setRatio = u,
                                c = _t.lastIndex = 0;
                            c < E;
                            c++
                        )
                            if (((d = T[c]), (p = C[c] + ""), (_ = parseFloat(d)) || 0 === _)) o.appendXtra("", _, k(p, _), p.replace(M, ""), S && -1 !== p.indexOf("px") && Math.round, !0);
                            else if (r && _t.test(d))
                                (w = ")" + ((w = p.indexOf(")") + 1) ? p.substr(w) : "")),
                                    (x = -1 !== p.indexOf("hsl") && st),
                                    (y = p),
                                    (d = gt(d, x)),
                                    (p = gt(p, x)),
                                    (v = 6 < d.length + p.length) && !st && 0 === p[3]
                                        ? ((o["xs" + o.l] += o.l ? " transparent" : "transparent"), (o.e = o.e.split(C[c]).join("transparent")))
                                        : (st || (v = !1),
                                          x
                                              ? o
                                                    .appendXtra(y.substr(0, y.indexOf("hsl")) + (v ? "hsla(" : "hsl("), d[0], k(p[0], d[0]), ",", !1, !0)
                                                    .appendXtra("", d[1], k(p[1], d[1]), "%,", !1)
                                                    .appendXtra("", d[2], k(p[2], d[2]), v ? "%," : "%" + w, !1)
                                              : o
                                                    .appendXtra(y.substr(0, y.indexOf("rgb")) + (v ? "rgba(" : "rgb("), d[0], p[0] - d[0], ",", Math.round, !0)
                                                    .appendXtra("", d[1], p[1] - d[1], ",", Math.round)
                                                    .appendXtra("", d[2], p[2] - d[2], v ? "," : w, Math.round),
                                          v && ((d = d.length < 4 ? 1 : d[3]), o.appendXtra("", d, (p.length < 4 ? 1 : p[3]) - d, w, !1))),
                                    (_t.lastIndex = 0);
                            else if ((m = d.match(R))) {
                                if (!(g = p.match(M)) || g.length !== m.length) return o;
                                for (h = f = 0; h < m.length; h++)
                                    (b = m[h]), (y = d.indexOf(b, f)), o.appendXtra(d.substr(f, y - f), Number(b), k(g[h], b), "", S && "px" === d.substr(y + b.length, 2) && Math.round, 0 === h), (f = y + b.length);
                                o["xs" + o.l] += d.substr(f);
                            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + p : p;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (w = o.xs0 + o.data.s, c = 1; c < o.l; c++) w += o["xs" + c] + o.data["xn" + c];
                            o.e = w + o["xs" + c];
                        }
                        return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
                    }),
                    Ct = 9;
                for ((t = xt.prototype).l = t.pr = 0; 0 < --Ct; ) (t["xn" + Ct] = 0), (t["xs" + Ct] = "");
                (t.xs0 = ""),
                    (t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null),
                    (t.appendXtra = function (t, e, i, n, r, s) {
                        var o = this,
                            a = o.l;
                        return (
                            (o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || ""),
                            i || 0 === a || o.plugin
                                ? (o.l++,
                                  (o.type = o.setRatio ? 2 : 1),
                                  (o["xs" + o.l] = n || ""),
                                  0 < a
                                      ? ((o.data["xn" + a] = e + i), (o.rxp["xn" + a] = r), (o["xn" + a] = e), o.plugin || ((o.xfirst = new xt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr)), (o.xfirst.xs0 = 0)))
                                      : ((o.data = { s: e + i }), (o.rxp = {}), (o.s = e), (o.c = i), (o.r = r)))
                                : (o["xs" + a] += e + (n || "")),
                            o
                        );
                    });
                function Et(t, e) {
                    (e = e || {}),
                        (this.p = (e.prefix && E(t)) || t),
                        (g[t] = g[this.p] = this),
                        (this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi)),
                        e.parser && (this.parse = e.parser),
                        (this.clrs = e.color),
                        (this.multi = e.multi),
                        (this.keyword = e.keyword),
                        (this.dflt = e.defaultValue),
                        (this.pr = e.priority || 0);
                }
                var St = (nt._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var n,
                            r = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < r.length; n++) (e.prefix = 0 === n && e.prefix), (e.defaultValue = i[n] || s), new Et(r[n], e);
                    }),
                    kt = (nt._registerPluginProp = function (t) {
                        if (!g[t]) {
                            var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function (t, e, i, n, r, s, o) {
                                    var a = u.com.greensock.plugins[l];
                                    return a ? (a._cssRegister(), g[i].parse(t, e, i, n, r, s, o)) : (_("Error: " + l + " js file not loaded."), r);
                                },
                            });
                        }
                    });
                ((t = Et.prototype).parseComplex = function (t, e, i, n, r, s) {
                    var o,
                        a,
                        l,
                        u,
                        c,
                        h,
                        f = this.keyword;
                    if ((this.multi && (Q.test(i) || Q.test(e) ? ((a = e.replace(Q, "|").split("|")), (l = i.replace(Q, "|").split("|"))) : f && ((a = [e]), (l = [i]))), l)) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++)
                            (e = a[o] = a[o] || this.dflt), (i = l[o] = l[o] || this.dflt), f && (c = e.indexOf(f)) !== (h = i.indexOf(f)) && (-1 === h ? (a[o] = a[o].split(f).join("")) : -1 === c && (a[o] += " " + f));
                        (e = a.join(", ")), (i = l.join(", "));
                    }
                    return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s);
                }),
                    (t.parse = function (t, e, i, n, r, s, o) {
                        return this.parseComplex(t.style, this.format(ut(t, this.p, S, !1, this.dflt)), this.format(e), r, s);
                    }),
                    (W.registerSpecialProp = function (t, l, u) {
                        St(t, {
                            parser: function (t, e, i, n, r, s, o) {
                                var a = new xt(t, i, 0, 0, r, 2, i, !1, u);
                                return (a.plugin = s), (a.setRatio = l(t, e, n._tween, i)), a;
                            },
                            priority: u,
                        });
                    }),
                    (W.useSVGTransformAttr = !0);
                function At(t, e, i) {
                    var n,
                        r = tt.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r;
                }
                function Ot(t, e, i, n, r, s) {
                    var o,
                        a,
                        l,
                        u,
                        c,
                        h,
                        f,
                        d,
                        p,
                        m,
                        g,
                        _,
                        v,
                        y,
                        b = t._gsTransform,
                        w = Vt(t, !0);
                    b && ((v = b.xOrigin), (y = b.yOrigin)),
                        (!n || (o = n.split(" ")).length < 2) &&
                            (0 === (f = t.getBBox()).x &&
                                0 === f.y &&
                                f.width + f.height === 0 &&
                                (f = {
                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0,
                                }),
                            (o = [(-1 !== (e = pt(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * f.height : parseFloat(e[1])) + f.y])),
                        (i.xOrigin = u = parseFloat(o[0])),
                        (i.yOrigin = c = parseFloat(o[1])),
                        n &&
                            w !== Xt &&
                            ((h = w[0]),
                            (f = w[1]),
                            (d = w[2]),
                            (p = w[3]),
                            (m = w[4]),
                            (g = w[5]),
                            (_ = h * p - f * d) && ((a = u * (p / _) + c * (-d / _) + (d * g - p * m) / _), (l = u * (-f / _) + c * (h / _) - (h * g - f * m) / _), (u = i.xOrigin = o[0] = a), (c = i.yOrigin = o[1] = l))),
                        b &&
                            (s && ((i.xOffset = b.xOffset), (i.yOffset = b.yOffset), (b = i)),
                            r || (!1 !== r && !1 !== W.defaultSmoothOrigin) ? ((a = u - v), (l = c - y), (b.xOffset += a * w[0] + l * w[2] - a), (b.yOffset += a * w[1] + l * w[3] - l)) : (b.xOffset = b.yOffset = 0)),
                        s || t.setAttribute("data-svg-origin", o.join(" "));
                }
                function Dt(t) {
                    var e,
                        i,
                        n = this.data,
                        r = -n.rotation * J,
                        s = r + n.skewX * J,
                        o = ((Math.cos(r) * n.scaleX * 1e5) | 0) / 1e5,
                        a = ((Math.sin(r) * n.scaleX * 1e5) | 0) / 1e5,
                        l = ((Math.sin(s) * -n.scaleY * 1e5) | 0) / 1e5,
                        u = ((Math.cos(s) * n.scaleY * 1e5) | 0) / 1e5,
                        c = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        (i = a), (a = -l), (l = -i), (e = h.filter), (c.filter = "");
                        var f,
                            d,
                            p = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== h.position,
                            _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + u,
                            v = n.x + (p * n.xPercent) / 100,
                            y = n.y + (m * n.yPercent) / 100;
                        if (
                            (null != n.ox && ((v += (f = (n.oxp ? p * n.ox * 0.01 : n.ox) - p / 2) - (f * o + (d = (n.oyp ? m * n.oy * 0.01 : n.oy) - m / 2) * a)), (y += d - (f * l + d * u))),
                            g ? (_ += ", Dx=" + ((f = p / 2) - (f * o + (d = m / 2) * a) + v) + ", Dy=" + (d - (f * l + d * u) + y) + ")") : (_ += ", sizingMethod='auto expand')"),
                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (c.filter = e.replace(V, _)) : (c.filter = _ + " " + e),
                            (0 !== t && 1 !== t) ||
                                1 != o ||
                                0 !== a ||
                                0 !== l ||
                                1 != u ||
                                (g && -1 === _.indexOf("Dx=0, Dy=0")) ||
                                (z.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                                (-1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")),
                            !g)
                        ) {
                            var b,
                                w,
                                x,
                                T = P < 8 ? 1 : -1;
                            for (
                                f = n.ieOffsetX || 0,
                                    d = n.ieOffsetY || 0,
                                    n.ieOffsetX = Math.round((p - ((o < 0 ? -o : o) * p + (a < 0 ? -a : a) * m)) / 2 + v),
                                    n.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * p)) / 2 + y),
                                    Ct = 0;
                                Ct < 4;
                                Ct++
                            )
                                (x =
                                    (i = -1 !== (b = h[(w = dt[Ct])]).indexOf("px") ? parseFloat(b) : ct(this.t, w, parseFloat(b), b.replace(F, "")) || 0) !== n[w]
                                        ? Ct < 2
                                            ? -n.ieOffsetX
                                            : -n.ieOffsetY
                                        : Ct < 2
                                        ? f - n.ieOffsetX
                                        : d - n.ieOffsetY),
                                    (c[w] = (n[w] = Math.round(i - x * (0 === Ct || 2 === Ct ? 1 : T))) + "px");
                        }
                    }
                }
                var Pt,
                    It,
                    Nt,
                    Rt,
                    Mt,
                    Lt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    jt = E("transform"),
                    Ft = ot + "transform",
                    zt = E("transformOrigin"),
                    Ht = null !== E("perspective"),
                    Wt = (nt.Transform = function () {
                        (this.perspective = parseFloat(W.defaultTransformPerspective) || 0), (this.force3D = !(!1 === W.defaultForce3D || !Ht) && (W.defaultForce3D || "auto"));
                    }),
                    Bt = _gsScope.SVGElement,
                    qt = tt.documentElement || {},
                    $t =
                        ((Mt = P || (/Android/i.test(rt) && !_gsScope.chrome)),
                        tt.createElementNS &&
                            !Mt &&
                            ((It = At("svg", qt)),
                            (Rt = (Nt = At("rect", It, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                            (Nt.style[zt] = "50% 50%"),
                            (Nt.style[jt] = "scaleX(0.5)"),
                            (Mt = Rt === Nt.getBoundingClientRect().width && !(j && Ht)),
                            qt.removeChild(It)),
                        Mt),
                    Ut = function (t) {
                        var e,
                            i = a("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            s = this.style.cssText;
                        if ((qt.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
                            try {
                                (e = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ut);
                            } catch (t) {}
                        else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), qt.removeChild(i), (this.style.cssText = s), e;
                    },
                    Yt = function (t) {
                        return !(
                            !Bt ||
                            !t.getCTM ||
                            (t.parentNode && !t.ownerSVGElement) ||
                            !(function (e) {
                                try {
                                    return e.getBBox();
                                } catch (t) {
                                    return Ut.call(e, !0);
                                }
                            })(t)
                        );
                    },
                    Xt = [1, 0, 0, 1, 0, 0],
                    Vt = function (t, e) {
                        var i,
                            n,
                            r,
                            s,
                            o,
                            a,
                            l = t._gsTransform || new Wt(),
                            u = t.style;
                        if (
                            (jt
                                ? (n = ut(t, Ft, null, !0))
                                : t.currentStyle && (n = (n = t.currentStyle.filter.match(X)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                            (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                            !jt ||
                                (!(a = !lt(t) || "none" === lt(t).display) && t.parentNode) ||
                                (a && ((s = u.display), (u.display = "block")),
                                t.parentNode || ((o = 1), qt.appendChild(t)),
                                (i = !(n = ut(t, Ft, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                                s ? (u.display = s) : a && Zt(u, "display"),
                                o && qt.removeChild(t)),
                            (l.svg || (t.getCTM && Yt(t))) &&
                                (i && -1 !== (u[jt] + "").indexOf("matrix") && ((n = u[jt]), (i = 0)),
                                (r = t.getAttribute("transform")),
                                i && r && ((n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")"), (i = 0))),
                            i)
                        )
                            return Xt;
                        for (r = (n || "").match(R) || [], Ct = r.length; -1 < --Ct; ) (s = Number(r[Ct])), (r[Ct] = (o = s - (s |= 0)) ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s : s);
                        return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
                    },
                    Qt = (nt.getTransform = function (t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c = (i && t._gsTransform) || new Wt(),
                            h = c.scaleX < 0,
                            f = (Ht && (parseFloat(ut(t, zt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin)) || 0,
                            d = parseFloat(W.defaultTransformPerspective) || 0;
                        if (((c.svg = !(!t.getCTM || !Yt(t))), c.svg && (Ot(t, ut(t, zt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), (Pt = W.useSVGTransformAttr || $t)), (r = Vt(t)) !== Xt)) {
                            if (16 === r.length) {
                                var p,
                                    m,
                                    g,
                                    _,
                                    v,
                                    y = r[0],
                                    b = r[1],
                                    w = r[2],
                                    x = r[3],
                                    T = r[4],
                                    C = r[5],
                                    E = r[6],
                                    S = r[7],
                                    k = r[8],
                                    A = r[9],
                                    O = r[10],
                                    D = r[12],
                                    P = r[13],
                                    I = r[14],
                                    N = r[11],
                                    R = Math.atan2(E, O);
                                c.zOrigin && ((D = k * (I = -c.zOrigin) - r[12]), (P = A * I - r[13]), (I = O * I + c.zOrigin - r[14])),
                                    (c.rotationX = R * G),
                                    R &&
                                        ((p = T * (_ = Math.cos(-R)) + k * (v = Math.sin(-R))),
                                        (m = C * _ + A * v),
                                        (g = E * _ + O * v),
                                        (k = T * -v + k * _),
                                        (A = C * -v + A * _),
                                        (O = E * -v + O * _),
                                        (N = S * -v + N * _),
                                        (T = p),
                                        (C = m),
                                        (E = g)),
                                    (R = Math.atan2(-w, O)),
                                    (c.rotationY = R * G),
                                    R && ((m = b * (_ = Math.cos(-R)) - A * (v = Math.sin(-R))), (g = w * _ - O * v), (A = b * v + A * _), (O = w * v + O * _), (N = x * v + N * _), (y = p = y * _ - k * v), (b = m), (w = g)),
                                    (R = Math.atan2(b, y)),
                                    (c.rotation = R * G),
                                    R && ((p = y * (_ = Math.cos(R)) + b * (v = Math.sin(R))), (m = T * _ + C * v), (g = k * _ + A * v), (b = b * _ - y * v), (C = C * _ - T * v), (A = A * _ - k * v), (y = p), (T = m), (k = g)),
                                    c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && ((c.rotationX = c.rotation = 0), (c.rotationY = 180 - c.rotationY)),
                                    (R = Math.atan2(T, C)),
                                    (c.scaleX = ((1e5 * Math.sqrt(y * y + b * b + w * w) + 0.5) | 0) / 1e5),
                                    (c.scaleY = ((1e5 * Math.sqrt(C * C + E * E) + 0.5) | 0) / 1e5),
                                    (c.scaleZ = ((1e5 * Math.sqrt(k * k + A * A + O * O) + 0.5) | 0) / 1e5),
                                    (y /= c.scaleX),
                                    (T /= c.scaleY),
                                    (b /= c.scaleX),
                                    (C /= c.scaleY),
                                    2e-5 < Math.abs(R) ? ((c.skewX = R * G), (T = 0), "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(R))) : (c.skewX = 0),
                                    (c.perspective = N ? 1 / (N < 0 ? -N : N) : 0),
                                    (c.x = D),
                                    (c.y = P),
                                    (c.z = I),
                                    c.svg && ((c.x -= c.xOrigin - (c.xOrigin * y - c.yOrigin * T)), (c.y -= c.yOrigin - (c.yOrigin * b - c.xOrigin * C)));
                            } else if (!Ht || n || !r.length || c.x !== r[4] || c.y !== r[5] || (!c.rotationX && !c.rotationY)) {
                                var M = 6 <= r.length,
                                    L = M ? r[0] : 1,
                                    j = r[1] || 0,
                                    F = r[2] || 0,
                                    z = M ? r[3] : 1;
                                (c.x = r[4] || 0),
                                    (c.y = r[5] || 0),
                                    (o = Math.sqrt(L * L + j * j)),
                                    (a = Math.sqrt(z * z + F * F)),
                                    (l = L || j ? Math.atan2(j, L) * G : c.rotation || 0),
                                    (u = F || z ? Math.atan2(F, z) * G + l : c.skewX || 0),
                                    (c.scaleX = o),
                                    (c.scaleY = a),
                                    (c.rotation = l),
                                    (c.skewX = u),
                                    Ht && ((c.rotationX = c.rotationY = c.z = 0), (c.perspective = d), (c.scaleZ = 1)),
                                    c.svg && ((c.x -= c.xOrigin - (c.xOrigin * L + c.yOrigin * F)), (c.y -= c.yOrigin - (c.xOrigin * j + c.yOrigin * z)));
                            }
                            for (s in (90 < Math.abs(c.skewX) &&
                                Math.abs(c.skewX) < 270 &&
                                (h ? ((c.scaleX *= -1), (c.skewX += c.rotation <= 0 ? 180 : -180), (c.rotation += c.rotation <= 0 ? 180 : -180)) : ((c.scaleY *= -1), (c.skewX += c.skewX <= 0 ? 180 : -180))),
                            (c.zOrigin = f),
                            c))
                                c[s] < 2e-5 && -2e-5 < c[s] && (c[s] = 0);
                        }
                        return (
                            i &&
                                (t._gsTransform = c).svg &&
                                (Pt && t.style[jt]
                                    ? H.delayedCall(0.001, function () {
                                          Zt(t.style, jt);
                                      })
                                    : !Pt &&
                                      t.getAttribute("transform") &&
                                      H.delayedCall(0.001, function () {
                                          t.removeAttribute("transform");
                                      })),
                            c
                        );
                    }),
                    Kt = (nt.set3DTransformRatio = nt.setTransformRatio = function (t) {
                        var e,
                            i,
                            n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c,
                            h,
                            f,
                            d,
                            p,
                            m,
                            g,
                            _,
                            v,
                            y,
                            b,
                            w = this.data,
                            x = this.t.style,
                            T = w.rotation,
                            C = w.rotationX,
                            E = w.rotationY,
                            S = w.scaleX,
                            k = w.scaleY,
                            A = w.scaleZ,
                            O = w.x,
                            D = w.y,
                            P = w.z,
                            I = w.svg,
                            N = w.perspective,
                            R = w.force3D,
                            M = w.skewY,
                            L = w.skewX;
                        if ((M && ((L += M), (T += M)), !((((1 !== t && 0 !== t) || "auto" !== R || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && R) || P || N || E || C || 1 !== A) || (Pt && I) || !Ht))
                            T || L || I
                                ? ((T *= J),
                                  (b = L * J),
                                  1e5,
                                  (i = Math.cos(T) * S),
                                  (s = Math.sin(T) * S),
                                  (n = Math.sin(T - b) * -k),
                                  (o = Math.cos(T - b) * k),
                                  b && "simple" === w.skewType && ((e = Math.tan(b - M * J)), (n *= e = Math.sqrt(1 + e * e)), (o *= e), M && ((e = Math.tan(M * J)), (i *= e = Math.sqrt(1 + e * e)), (s *= e))),
                                  I &&
                                      ((O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset),
                                      (D += w.yOrigin - (w.xOrigin * s + w.yOrigin * o) + w.yOffset),
                                      Pt && (w.xPercent || w.yPercent) && ((m = this.t.getBBox()), (O += 0.01 * w.xPercent * m.width), (D += 0.01 * w.yPercent * m.height)),
                                      O < (m = 1e-6) && -m < O && (O = 0),
                                      D < m && -m < D && (D = 0)),
                                  (y = ((1e5 * i) | 0) / 1e5 + "," + ((1e5 * s) | 0) / 1e5 + "," + ((1e5 * n) | 0) / 1e5 + "," + ((1e5 * o) | 0) / 1e5 + "," + O + "," + D + ")"),
                                  I && Pt ? this.t.setAttribute("transform", "matrix(" + y) : (x[jt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y))
                                : (x[jt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + k + "," + O + "," + D + ")");
                        else {
                            if ((j && (S < (m = 1e-4) && -m < S && (S = A = 2e-5), k < m && -m < k && (k = A = 2e-5), !N || w.z || w.rotationX || w.rotationY || (N = 0)), T || L))
                                (T *= J),
                                    (g = i = Math.cos(T)),
                                    (_ = s = Math.sin(T)),
                                    L &&
                                        ((T -= L * J),
                                        (g = Math.cos(T)),
                                        (_ = Math.sin(T)),
                                        "simple" === w.skewType && ((e = Math.tan((L - M) * J)), (g *= e = Math.sqrt(1 + e * e)), (_ *= e), w.skewY && ((e = Math.tan(M * J)), (i *= e = Math.sqrt(1 + e * e)), (s *= e)))),
                                    (n = -_),
                                    (o = g);
                            else {
                                if (!(E || C || 1 !== A || N || I))
                                    return void (x[jt] =
                                        (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") +
                                        O +
                                        "px," +
                                        D +
                                        "px," +
                                        P +
                                        "px)" +
                                        (1 !== S || 1 !== k ? " scale(" + S + "," + k + ")" : ""));
                                (i = o = 1), (n = s = 0);
                            }
                            (c = 1),
                                (r = a = l = u = h = f = 0),
                                (d = N ? -1 / N : 0),
                                (p = w.zOrigin),
                                (m = 1e-6),
                                ",",
                                "0",
                                (T = E * J) && ((g = Math.cos(T)), (h = d * (l = -(_ = Math.sin(T)))), (r = i * _), (a = s * _), (d *= c = g), (i *= g), (s *= g)),
                                (T = C * J) && ((e = n * (g = Math.cos(T)) + r * (_ = Math.sin(T))), (v = o * g + a * _), (u = c * _), (f = d * _), (r = n * -_ + r * g), (a = o * -_ + a * g), (c *= g), (d *= g), (n = e), (o = v)),
                                1 !== A && ((r *= A), (a *= A), (c *= A), (d *= A)),
                                1 !== k && ((n *= k), (o *= k), (u *= k), (f *= k)),
                                1 !== S && ((i *= S), (s *= S), (l *= S), (h *= S)),
                                (p || I) &&
                                    (p && ((O += r * -p), (D += a * -p), (P += c * -p + p)),
                                    I && ((O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset), (D += w.yOrigin - (w.xOrigin * s + w.yOrigin * o) + w.yOffset)),
                                    O < m && -m < O && (O = "0"),
                                    D < m && -m < D && (D = "0"),
                                    P < m && -m < P && (P = 0)),
                                (y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d("),
                                (y += (i < m && -m < i ? "0" : i) + "," + (s < m && -m < s ? "0" : s) + "," + (l < m && -m < l ? "0" : l)),
                                (y += "," + (h < m && -m < h ? "0" : h) + "," + (n < m && -m < n ? "0" : n) + "," + (o < m && -m < o ? "0" : o)),
                                C || E || 1 !== A
                                    ? ((y += "," + (u < m && -m < u ? "0" : u) + "," + (f < m && -m < f ? "0" : f) + "," + (r < m && -m < r ? "0" : r)),
                                      (y += "," + (a < m && -m < a ? "0" : a) + "," + (c < m && -m < c ? "0" : c) + "," + (d < m && -m < d ? "0" : d) + ","))
                                    : (y += ",0,0,0,0,1,0,"),
                                (y += O + "," + D + "," + P + "," + (N ? 1 + -P / N : 1) + ")"),
                                (x[jt] = y);
                        }
                    });
                ((t = Wt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0),
                    (t.scaleX = t.scaleY = t.scaleZ = 1),
                    St(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                        {
                            parser: function (t, e, i, n, r, s, o) {
                                if (n._lastParsedTransform === o) return r;
                                var a,
                                    l = (n._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                                "function" == typeof o[i] && ((a = o[i]), (o[i] = e)), l && (o.scale = l(N, t));
                                var u,
                                    c,
                                    h,
                                    f,
                                    d,
                                    p,
                                    m,
                                    g,
                                    _,
                                    v = t._gsTransform,
                                    y = t.style,
                                    b = Lt.length,
                                    w = o,
                                    x = {},
                                    T = "transformOrigin",
                                    C = Qt(t, S, !0, w.parseTransform),
                                    E = w.transform && ("function" == typeof w.transform ? w.transform(N, I) : w.transform);
                                if (((C.skewType = w.skewType || C.skewType || W.defaultSkewType), (n._transform = C), E && "string" == typeof E && jt))
                                    ((c = et.style)[jt] = E),
                                        (c.display = "block"),
                                        (c.position = "absolute"),
                                        -1 !== E.indexOf("%") && ((c.width = ut(t, "width")), (c.height = ut(t, "height"))),
                                        tt.body.appendChild(et),
                                        (u = Qt(et, null, !1)),
                                        "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * J)),
                                        C.svg &&
                                            ((p = C.xOrigin),
                                            (m = C.yOrigin),
                                            (u.x -= C.xOffset),
                                            (u.y -= C.yOffset),
                                            (w.transformOrigin || w.svgOrigin) &&
                                                ((E = {}), Ot(t, pt(w.transformOrigin), E, w.svgOrigin, w.smoothOrigin, !0), (p = E.xOrigin), (m = E.yOrigin), (u.x -= E.xOffset - C.xOffset), (u.y -= E.yOffset - C.yOffset)),
                                            (p || m) && ((g = Vt(et, !0)), (u.x -= p - (p * g[0] + m * g[2])), (u.y -= m - (p * g[1] + m * g[3])))),
                                        tt.body.removeChild(et),
                                        u.perspective || (u.perspective = C.perspective),
                                        null != w.xPercent && (u.xPercent = A(w.xPercent, C.xPercent)),
                                        null != w.yPercent && (u.yPercent = A(w.yPercent, C.yPercent));
                                else if ("object" == typeof w) {
                                    if (
                                        ((u = {
                                            scaleX: A(null != w.scaleX ? w.scaleX : w.scale, C.scaleX),
                                            scaleY: A(null != w.scaleY ? w.scaleY : w.scale, C.scaleY),
                                            scaleZ: A(w.scaleZ, C.scaleZ),
                                            x: A(w.x, C.x),
                                            y: A(w.y, C.y),
                                            z: A(w.z, C.z),
                                            xPercent: A(w.xPercent, C.xPercent),
                                            yPercent: A(w.yPercent, C.yPercent),
                                            perspective: A(w.transformPerspective, C.perspective),
                                        }),
                                        null != (d = w.directionalRotation))
                                    )
                                        if ("object" == typeof d) for (c in d) w[c] = d[c];
                                        else w.rotation = d;
                                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && ((u.x = 0), (u.xPercent = A(w.x, C.xPercent))),
                                        "string" == typeof w.y && -1 !== w.y.indexOf("%") && ((u.y = 0), (u.yPercent = A(w.y, C.yPercent))),
                                        (u.rotation = O("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : C.rotation, C.rotation, "rotation", x)),
                                        Ht &&
                                            ((u.rotationX = O("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", x)),
                                            (u.rotationY = O("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", x))),
                                        (u.skewX = O(w.skewX, C.skewX)),
                                        (u.skewY = O(w.skewY, C.skewY));
                                }
                                for (
                                    Ht && null != w.force3D && ((C.force3D = w.force3D), (f = !0)),
                                        (h = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == w.scale || (u.scaleZ = 1);
                                    -1 < --b;

                                )
                                    (1e-6 < (E = u[(_ = Lt[b])] - C[_]) || E < -1e-6 || null != w[_] || null != Z[_]) &&
                                        ((f = !0), (r = new xt(C, _, C[_], E, r)), _ in x && (r.e = x[_]), (r.xs0 = 0), (r.plugin = s), n._overwriteProps.push(r.n));
                                return (
                                    (E = w.transformOrigin),
                                    C.svg &&
                                        (E || w.svgOrigin) &&
                                        ((p = C.xOffset),
                                        (m = C.yOffset),
                                        Ot(t, pt(E), u, w.svgOrigin, w.smoothOrigin),
                                        (r = bt(C, "xOrigin", (v ? C : u).xOrigin, u.xOrigin, r, T)),
                                        (r = bt(C, "yOrigin", (v ? C : u).yOrigin, u.yOrigin, r, T)),
                                        (p === C.xOffset && m === C.yOffset) || ((r = bt(C, "xOffset", v ? p : C.xOffset, C.xOffset, r, T)), (r = bt(C, "yOffset", v ? m : C.yOffset, C.yOffset, r, T))),
                                        (E = "0px 0px")),
                                    (E || (Ht && h && C.zOrigin)) &&
                                        (jt
                                            ? ((f = !0),
                                              (_ = zt),
                                              (E = (E || ut(t, _, S, !1, "50% 50%")) + ""),
                                              ((r = new xt(y, _, 0, 0, r, -1, T)).b = y[_]),
                                              (r.plugin = s),
                                              Ht
                                                  ? ((c = C.zOrigin),
                                                    (E = E.split(" ")),
                                                    (C.zOrigin = (2 < E.length && (0 === c || "0px" !== E[2]) ? parseFloat(E[2]) : c) || 0),
                                                    (r.xs0 = r.e = E[0] + " " + (E[1] || "50%") + " 0px"),
                                                    ((r = new xt(C, "zOrigin", 0, 0, r, -1, r.n)).b = c),
                                                    (r.xs0 = r.e = C.zOrigin))
                                                  : (r.xs0 = r.e = E))
                                            : pt(E + "", C)),
                                    f && (n._transformType = (C.svg && Pt) || (!h && 3 !== this._transformType) ? 2 : 3),
                                    a && (o[i] = a),
                                    l && (o.scale = l),
                                    r
                                );
                            },
                            prefix: !0,
                        }
                    ),
                    St("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    St("borderRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, i, n, r, s) {
                            e = this.format(e);
                            var o,
                                a,
                                l,
                                u,
                                c,
                                h,
                                f,
                                d,
                                p,
                                m,
                                g,
                                _,
                                v,
                                y,
                                b,
                                w,
                                x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                T = t.style;
                            for (p = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), a = 0; a < x.length; a++)
                                this.p.indexOf("border") && (x[a] = E(x[a])),
                                    -1 !== (c = u = ut(t, x[a], S, !1, "0px")).indexOf(" ") && ((c = (u = c.split(" "))[0]), (u = u[1])),
                                    (h = l = o[a]),
                                    (f = parseFloat(c)),
                                    (_ = c.substr((f + "").length)),
                                    "" ===
                                        (g = (v = "=" === h.charAt(1))
                                            ? ((d = parseInt(h.charAt(0) + "1", 10)), (h = h.substr(2)), (d *= parseFloat(h)), h.substr((d + "").length - (d < 0 ? 1 : 0)) || "")
                                            : ((d = parseFloat(h)), h.substr((d + "").length))) && (g = C[i] || _),
                                    g !== _ &&
                                        ((y = ct(t, "borderLeft", f, _)),
                                        (b = ct(t, "borderTop", f, _)),
                                        (u = "%" === g ? ((c = (y / p) * 100 + "%"), (b / m) * 100 + "%") : "em" === g ? ((c = y / (w = ct(t, "borderLeft", 1, "em")) + "em"), b / w + "em") : ((c = y + "px"), b + "px")),
                                        v && ((h = parseFloat(c) + d + g), (l = parseFloat(u) + d + g))),
                                    (r = Tt(T, x[a], c + " " + u, h + " " + l, !1, "0px", r));
                            return r;
                        },
                        prefix: !0,
                        formatter: vt("0px 0px 0px 0px", !1, !0),
                    }),
                    St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, i, n, r, s) {
                            return Tt(t.style, i, this.format(ut(t, i, S, !1, "0px 0px")), this.format(e), !1, "0px", r);
                        },
                        prefix: !0,
                        formatter: vt("0px 0px", !1, !0),
                    }),
                    St("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (t, e, i, n, r, s) {
                            var o,
                                a,
                                l,
                                u,
                                c,
                                h,
                                f = "background-position",
                                d = S || lt(t, null),
                                p = this.format((d ? (P ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                m = this.format(e);
                            if ((-1 !== p.indexOf("%")) != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && (h = ut(t, "backgroundImage").replace(U, "")) && "none" !== h) {
                                for (o = p.split(" "), a = m.split(" "), it.setAttribute("src", h), l = 2; -1 < --l; )
                                    (u = -1 !== (p = o[l]).indexOf("%")) != (-1 !== a[l].indexOf("%")) &&
                                        ((c = 0 === l ? t.offsetWidth - it.width : t.offsetHeight - it.height), (o[l] = u ? (parseFloat(p) / 100) * c + "px" : (parseFloat(p) / c) * 100 + "%"));
                                p = o.join(" ");
                            }
                            return this.parseComplex(t.style, p, m, r, s);
                        },
                        formatter: pt,
                    }),
                    St("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (t) {
                            return "co" === (t += "").substr(0, 2) ? t : pt(-1 === t.indexOf(" ") ? t + " " + t : t);
                        },
                    }),
                    St("perspective", { defaultValue: "0px", prefix: !0 }),
                    St("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    St("transformStyle", { prefix: !0 }),
                    St("backfaceVisibility", { prefix: !0 }),
                    St("userSelect", { prefix: !0 }),
                    St("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }),
                    St("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    St("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, i, n, r, s) {
                            var o, a, l;
                            return (
                                (e =
                                    P < 9
                                        ? ((a = t.currentStyle), (l = P < 8 ? " " : ","), (o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")"), this.format(e).split(",").join(l))
                                        : ((o = this.format(ut(t, this.p, S, !1, this.dflt))), this.format(e))),
                                this.parseComplex(t.style, o, e, r, s)
                            );
                        },
                    }),
                    St("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    St("autoRound,strictUnits", {
                        parser: function (t, e, i, n, r) {
                            return r;
                        },
                    }),
                    St("border", {
                        defaultValue: "0px solid #000",
                        parser: function (t, e, i, n, r, s) {
                            var o = ut(t, "borderTopWidth", S, !1, "0px"),
                                a = this.format(e).split(" "),
                                l = a[0].replace(F, "");
                            return (
                                "px" !== l && (o = parseFloat(o) / ct(t, "borderTopWidth", 1, l) + l),
                                this.parseComplex(t.style, this.format(o + " " + ut(t, "borderTopStyle", S, !1, "solid") + " " + ut(t, "borderTopColor", S, !1, "#000")), a.join(" "), r, s)
                            );
                        },
                        color: !0,
                        formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0];
                        },
                    }),
                    St("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    St("float,cssFloat,styleFloat", {
                        parser: function (t, e, i, n, r, s) {
                            var o = t.style,
                                a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new xt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e);
                        },
                    });
                function Jt(t) {
                    var e,
                        i = this.t,
                        n = i.filter || ut(this.data, "filter") || "",
                        r = (this.s + this.c * t) | 0;
                    100 == r && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !ut(this.data, "filter")) : ((i.filter = n.replace(h, "")), !0)),
                        e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 == r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(z, "opacity=" + r)));
                }
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, r, s) {
                        var o = parseFloat(ut(t, "opacity", S, !1, "1")),
                            a = t.style,
                            l = "autoAlpha" === i;
                        return (
                            "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                            l && 1 === o && "hidden" === ut(t, "visibility", S) && 0 !== e && (o = 0),
                            st
                                ? (r = new xt(a, "opacity", o, e - o, r))
                                : (((r = new xt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0),
                                  (a.zoom = 1),
                                  (r.type = 2),
                                  (r.b = "alpha(opacity=" + r.s + ")"),
                                  (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                                  (r.data = t),
                                  (r.plugin = s),
                                  (r.setRatio = Jt)),
                            l && (((r = new xt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), n._overwriteProps.push(r.n), n._overwriteProps.push(i)),
                            r
                        );
                    },
                });
                function Gt(t) {
                    if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : Zt(i, e.p), (e = e._next);
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                }
                var Zt = function (t, e) {
                    e && (t.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), t.removeProperty(e.replace(f, "-$1").toLowerCase())) : t.removeAttribute(e));
                };
                St("className", {
                    parser: function (t, e, i, n, r, s, o) {
                        var a,
                            l,
                            u,
                            c,
                            h,
                            f = t.getAttribute("class") || "",
                            d = t.style.cssText;
                        if ((((r = n._classNamePT = new xt(t, i, 0, 0, r, 2)).setRatio = Gt), (r.pr = -11), (p = !0), (r.b = f), (l = v(t, S)), (u = t._gsClassPT))) {
                            for (c = {}, h = u.data; h; ) (c[h.p] = 1), (h = h._next);
                            u.setRatio(1);
                        }
                        return (
                            ((t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                            t.setAttribute("class", r.e),
                            (a = y(t, l, v(t), o, c)),
                            t.setAttribute("class", f),
                            (r.data = a.firstMPT),
                            (t.style.cssText = d),
                            (r.xfirst = n.parse(t, a.difs, r, s))
                        );
                    },
                });
                function te(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e,
                            i,
                            n,
                            r,
                            s,
                            o = this.t.style,
                            a = g.transform.parse;
                        if ("all" === this.e) r = !(o.cssText = "");
                        else for (n = (e = this.e.split(" ").join("").split(",")).length; -1 < --n; ) (i = e[n]), g[i] && (g[i].parse === a ? (r = !0) : (i = "transformOrigin" === i ? zt : g[i].p)), Zt(o, i);
                        r && (Zt(o, jt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                    }
                }
                for (
                    St("clearProps", {
                        parser: function (t, e, i, n, r) {
                            return ((r = new xt(t, i, 0, 0, r, 2)).setRatio = te), (r.e = e), (r.pr = -10), (r.data = n._tween), (p = !0), r;
                        },
                    }),
                        t = "bezier,throwProps,physicsProps,physics2D".split(","),
                        Ct = t.length;
                    Ct--;

                )
                    kt(t[Ct]);
                ((t = W.prototype)._firstPT = t._lastParsedTransform = t._transform = null),
                    (t._onInitTween = function (t, e, i, n) {
                        if (!t.nodeType) return !1;
                        (this._target = I = t), (this._tween = i), (this._vars = e), (N = n), (D = e.autoRound), (p = !1), (C = e.suffixMap || W.suffixMap), (S = lt(t, "")), (m = this._overwriteProps);
                        var r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c,
                            h,
                            f,
                            d = t.style;
                        if (
                            (w && "" === d.zIndex && (("auto" !== (r = ut(t, "zIndex", S)) && "" !== r) || this._addLazySet(d, "zIndex", 0)),
                            "string" == typeof e && ((a = d.cssText), (r = v(t, S)), (d.cssText = a + ";" + e), (r = y(t, r, v(t)).difs), !st && B.test(e) && (r.opacity = parseFloat(RegExp.$1)), (e = r), (d.cssText = a)),
                            e.className ? (this._firstPT = s = g.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = s = this.parse(t, e, null)),
                            this._transformType)
                        ) {
                            for (
                                f = 3 === this._transformType,
                                    jt
                                        ? x &&
                                          ((w = !0),
                                          "" === d.zIndex && (("auto" !== (c = ut(t, "zIndex", S)) && "" !== c) || this._addLazySet(d, "zIndex", 0)),
                                          T && this._addLazySet(d, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden")))
                                        : (d.zoom = 1),
                                    o = s;
                                o && o._next;

                            )
                                o = o._next;
                            (h = new xt(t, "transform", 0, 0, null, 2)), this._linkCSSP(h, null, o), (h.setRatio = jt ? Kt : Dt), (h.data = this._transform || Qt(t, S, !0)), (h.tween = i), (h.pr = -1), m.pop();
                        }
                        if (p) {
                            for (; s; ) {
                                for (u = s._next, o = a; o && o.pr > s.pr; ) o = o._next;
                                (s._prev = o ? o._prev : l) ? (s._prev._next = s) : (a = s), (s._next = o) ? (o._prev = s) : (l = s), (s = u);
                            }
                            this._firstPT = a;
                        }
                        return !0;
                    }),
                    (t.parse = function (t, e, i, n) {
                        var r,
                            s,
                            o,
                            a,
                            l,
                            u,
                            c,
                            h,
                            f,
                            d,
                            p = t.style;
                        for (r in e) {
                            if (("function" == typeof (u = e[r]) && (u = u(N, I)), (s = g[r]))) i = s.parse(t, u, r, this, i, n, e);
                            else {
                                if ("--" === r.substr(0, 2)) {
                                    this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", lt(t).getPropertyValue(r) + "", u + "", r, !1, r);
                                    continue;
                                }
                                (l = ut(t, r, S) + ""),
                                    (f = "string" == typeof u),
                                    "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || (f && q.test(u))
                                        ? (f || (u = (3 < (u = gt(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), (i = Tt(p, r, l, u, !0, "transparent", i, 0, n)))
                                        : f && K.test(u)
                                        ? (i = Tt(p, r, l, u, !0, null, i, 0, n))
                                        : ((c = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : ""),
                                          ("" !== l && "auto" !== l) || (c = "width" === r || "height" === r ? ((o = b(t, r, S)), "px") : "left" === r || "top" === r ? ((o = ht(t, r, S)), "px") : ((o = "opacity" !== r ? 0 : 1), "")),
                                          "" === (h = (d = f && "=" === u.charAt(1)) ? ((a = parseInt(u.charAt(0) + "1", 10)), (u = u.substr(2)), (a *= parseFloat(u)), u.replace(F, "")) : ((a = parseFloat(u)), f ? u.replace(F, "") : "")) &&
                                              (h = r in C ? C[r] : c),
                                          (u = a || 0 === a ? (d ? a + o : a) + h : e[r]),
                                          c === h ||
                                              ("" === h && "lineHeight" !== r) ||
                                              (!a && 0 !== a) ||
                                              !o ||
                                              ((o = ct(t, r, o, c)),
                                              "%" === h
                                                  ? ((o /= ct(t, r, 100, "%") / 100), !0 !== e.strictUnits && (l = o + "%"))
                                                  : "em" === h || "rem" === h || "vw" === h || "vh" === h
                                                  ? (o /= ct(t, r, 1, h))
                                                  : "px" !== h && ((a = ct(t, r, a, h)), (h = "px")),
                                              d && (a || 0 === a) && (u = a + o + h)),
                                          d && (a += o),
                                          (!o && 0 !== o) || (!a && 0 !== a)
                                              ? void 0 !== p[r] && (u || (u + "" != "NaN" && null != u))
                                                  ? ((i = new xt(p, r, a || o || 0, 0, i, -1, r, !1, 0, l, u)).xs0 = "none" !== u || ("display" !== r && -1 === r.indexOf("Style")) ? u : l)
                                                  : _("invalid " + r + " tween value: " + e[r])
                                              : ((i = new xt(p, r, o, a - o, i, 0, r, !1 !== D && ("px" === h || "zIndex" === r), 0, l, u)).xs0 = h));
                            }
                            n && i && !i.plugin && (i.plugin = n);
                        }
                        return i;
                    }),
                    (t.setRatio = function (t) {
                        var e,
                            i,
                            n,
                            r = this._firstPT;
                        if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                for (; r; ) {
                                    if (((e = r.c * t + r.s), r.r ? (e = r.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0), r.type))
                                        if (1 === r.type)
                                            if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i;
                                            }
                                        else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                                    else r.t[r.p] = e + r.xs0;
                                    r = r._next;
                                }
                            else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
                        else
                            for (; r; ) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (((e = r.r(r.s + r.c)), r.type)) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i;
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                    else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next;
                            }
                    }),
                    (t._enableTransforms = function (t) {
                        (this._transform = this._transform || Qt(this._target, S, !0)), (this._transformType = (this._transform.svg && Pt) || (!t && 3 !== this._transformType) ? 2 : 3);
                    });
                function ee(t) {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                }
                (t._addLazySet = function (t, e, i) {
                    var n = (this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2));
                    (n.e = i), (n.setRatio = ee), (n.data = this);
                }),
                    (t._linkCSSP = function (t, e, i, n) {
                        return (
                            t &&
                                (e && (e._prev = t),
                                t._next && (t._next._prev = t._prev),
                                t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (n = !0)),
                                i ? (i._next = t) : n || null !== this._firstPT || (this._firstPT = t),
                                (t._next = e),
                                (t._prev = i)),
                            t
                        );
                    }),
                    (t._mod = function (t) {
                        for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
                    }),
                    (t._kill = function (t) {
                        var e,
                            i,
                            n,
                            r = t;
                        if (t.autoAlpha || t.alpha) {
                            for (i in ((r = {}), t)) r[i] = t[i];
                            (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
                        }
                        for (
                            t.className &&
                                (e = this._classNamePT) &&
                                ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next),
                                e._next && this._linkCSSP(e._next, e._next._next, n._prev),
                                (this._classNamePT = null)),
                                e = this._firstPT;
                            e;

                        )
                            e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), (i = e.plugin)), (e = e._next);
                        return s.prototype._kill.call(this, r);
                    });
                var ie = function (t, e, i) {
                    var n, r, s, o;
                    if (t.slice) for (r = t.length; -1 < --r; ) ie(t[r], e, i);
                    else for (r = (n = t.childNodes).length; -1 < --r; ) (o = (s = n[r]).type), s.style && (e.push(v(s)), i && i.push(s)), (1 !== o && 9 !== o && 11 !== o) || !s.childNodes.length || ie(s, e, i);
                };
                return (
                    (W.cascadeTo = function (t, e, i) {
                        var n,
                            r,
                            s,
                            o,
                            a = H.to(t, e, i),
                            l = [a],
                            u = [],
                            c = [],
                            h = [],
                            f = H._internals.reservedProps;
                        for (t = a._targets || a.target, ie(t, u, h), a.render(e, !0, !0), ie(t, c), a.render(0, !0, !0), a._enabled(!0), n = h.length; -1 < --n; )
                            if ((r = y(h[n], u[n], c[n])).firstMPT) {
                                for (s in ((r = r.difs), i)) f[s] && (r[s] = i[s]);
                                for (s in ((o = {}), r)) o[s] = u[n][s];
                                l.push(H.fromTo(h[n], e, o, r));
                            }
                        return l;
                    }),
                    s.activate([W]),
                    W
                );
            },
            !0
        ),
        (t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return (this._tween = i), !0;
            },
        })),
        ((e = t.prototype)._onInitAllProps = function () {
            var t,
                e,
                i,
                n,
                r = this._tween,
                s = r.vars.roundProps,
                o = {},
                a = r._propLookup.roundProps;
            if ("object" != typeof s || s.push) for ("string" == typeof s && (s = s.split(",")), i = s.length; -1 < --i; ) o[s[i]] = Math.round;
            else for (n in s) o[n] = l(s[n]);
            for (n in o)
                for (t = r._firstPT; t; )
                    (e = t._next),
                        t.pg
                            ? t.t._mod(o)
                            : t.n === n &&
                              (2 === t.f && t.t
                                  ? u(t.t._firstPT, o[n])
                                  : (this._add(t.t, n, t.s, t.c, o[n]), e && (e._prev = t._prev), t._prev ? (t._prev._next = e) : r._firstPT === t && (r._firstPT = e), (t._next = t._prev = null), (r._propLookup[n] = a))),
                        (t = e);
            return !1;
        }),
        (e._add = function (t, e, i, n, r) {
            this._addTween(t, e, i, i + n, e, r || Math.round), this._overwriteProps.push(e);
        }),
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (t, e, i, n) {
                var r, s;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof (s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                return !0;
            },
        }),
        (_gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, n) {
                "object" != typeof e && (e = { rotation: e }), (this.finals = {});
                var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e)
                    "useRadians" !== r &&
                        ("function" == typeof (a = e[r]) && (a = a(n, t)),
                        (s = (u = (a + "").split("_"))[0]),
                        (o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]())),
                        (l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o),
                        u.length &&
                            (-1 !== (s = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c),
                            -1 !== s.indexOf("_cw") && l < 0 ? (l = ((l + 9999999999 * c) % c) - ((l / c) | 0) * c) : -1 !== s.indexOf("ccw") && 0 < l && (l = ((l - 9999999999 * c) % c) - ((l / c) | 0) * c)),
                        (1e-6 < l || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                return !0;
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
            },
        })._autoCSS = !0),
        _gsScope._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (g) {
                function t(t, e) {
                    var i = h("easing." + t, function () {}, !0),
                        n = (i.prototype = new g());
                    return (n.constructor = i), (n.getRatio = e), i;
                }
                function e(t, e, i, n, r) {
                    var s = h("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new n() }, !0);
                    return f(s, t), s;
                }
                function _(t, e, i) {
                    (this.t = t), (this.v = e), i && ((((this.next = i).prev = this).c = i.v - e), (this.gap = i.t - t));
                }
                function i(t, e) {
                    var i = h(
                            "easing." + t,
                            function (t) {
                                (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                            },
                            !0
                        ),
                        n = (i.prototype = new g());
                    return (
                        (n.constructor = i),
                        (n.getRatio = e),
                        (n.config = function (t) {
                            return new i(t);
                        }),
                        i
                    );
                }
                var n,
                    r,
                    s,
                    o,
                    a = _gsScope.GreenSockGlobals || _gsScope,
                    l = a.com.greensock,
                    u = 2 * Math.PI,
                    c = Math.PI / 2,
                    h = l._class,
                    f = g.register || function () {},
                    d = e(
                        "Back",
                        i("BackOut", function (t) {
                            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                        }),
                        i("BackIn", function (t) {
                            return t * t * ((this._p1 + 1) * t - this._p1);
                        }),
                        i("BackInOut", function (t) {
                            return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                        })
                    ),
                    p = h(
                        "easing.SlowMo",
                        function (t, e, i) {
                            (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : 1 < t && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
                        },
                        !0
                    ),
                    m = (p.prototype = new g());
                return (
                    (m.constructor = p),
                    (m.getRatio = function (t) {
                        var e = t + (0.5 - t) * this._p;
                        return t < this._p1
                            ? this._calcEnd
                                ? 1 - (t = 1 - t / this._p1) * t
                                : e - (t = 1 - t / this._p1) * t * t * t * e
                            : t > this._p3
                            ? this._calcEnd
                                ? 1 === t
                                    ? 0
                                    : 1 - (t = (t - this._p3) / this._p1) * t
                                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                            : this._calcEnd
                            ? 1
                            : e;
                    }),
                    (p.ease = new p(0.7, 0.7)),
                    (m.config = p.config = function (t, e, i) {
                        return new p(t, e, i);
                    }),
                    ((m = (n = h(
                        "easing.SteppedEase",
                        function (t, e) {
                            (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + (e ? 0 : 1)), (this._p3 = e ? 1 : 0);
                        },
                        !0
                    )).prototype = new g()).constructor = n),
                    (m.getRatio = function (t) {
                        return t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999), (((this._p2 * t) | 0) + this._p3) * this._p1;
                    }),
                    (m.config = n.config = function (t, e) {
                        return new n(t, e);
                    }),
                    ((m = (r = h(
                        "easing.ExpoScaleEase",
                        function (t, e, i) {
                            (this._p1 = Math.log(e / t)), (this._p2 = e - t), (this._p3 = t), (this._ease = i);
                        },
                        !0
                    )).prototype = new g()).constructor = r),
                    (m.getRatio = function (t) {
                        return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2;
                    }),
                    (m.config = r.config = function (t, e, i) {
                        return new r(t, e, i);
                    }),
                    ((m = (s = h(
                        "easing.RoughEase",
                        function (t) {
                            for (
                                var e,
                                    i,
                                    n,
                                    r,
                                    s,
                                    o,
                                    a = (t = t || {}).taper || "none",
                                    l = [],
                                    u = 0,
                                    c = 0 | (t.points || 20),
                                    h = c,
                                    f = !1 !== t.randomize,
                                    d = !0 === t.clamp,
                                    p = t.template instanceof g ? t.template : null,
                                    m = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                                -1 < --h;

                            )
                                (e = f ? Math.random() : (1 / c) * h),
                                    (i = p ? p.getRatio(e) : e),
                                    (n = "none" === a ? m : "out" === a ? (r = 1 - e) * r * m : "in" === a ? e * e * m : (r = e < 0.5 ? 2 * e : 2 * (1 - e)) * r * 0.5 * m),
                                    f ? (i += Math.random() * n - 0.5 * n) : h % 2 ? (i += 0.5 * n) : (i -= 0.5 * n),
                                    d && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                                    (l[u++] = { x: e, y: i });
                            for (
                                l.sort(function (t, e) {
                                    return t.x - e.x;
                                }),
                                    o = new _(1, 1, null),
                                    h = c;
                                -1 < --h;

                            )
                                (s = l[h]), (o = new _(s.x, s.y, o));
                            this._prev = new _(0, 0, 0 !== o.t ? o : o.next);
                        },
                        !0
                    )).prototype = new g()).constructor = s),
                    (m.getRatio = function (t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t; ) e = e.next;
                            e = e.prev;
                        } else for (; e.prev && t <= e.t; ) e = e.prev;
                        return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
                    }),
                    (m.config = function (t) {
                        return new s(t);
                    }),
                    (s.ease = new s()),
                    e(
                        "Bounce",
                        t("BounceOut", function (t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                        }),
                        t("BounceIn", function (t) {
                            return (t = 1 - t) < 1 / 2.75
                                ? 1 - 7.5625 * t * t
                                : t < 2 / 2.75
                                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                                : t < 2.5 / 2.75
                                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                        }),
                        t("BounceInOut", function (t) {
                            var e = t < 0.5;
                            return (
                                (t =
                                    (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                                        ? 7.5625 * t * t
                                        : t < 2 / 2.75
                                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                                        : t < 2.5 / 2.75
                                        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                                        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                            );
                        })
                    ),
                    e(
                        "Circ",
                        t("CircOut", function (t) {
                            return Math.sqrt(1 - (t -= 1) * t);
                        }),
                        t("CircIn", function (t) {
                            return -(Math.sqrt(1 - t * t) - 1);
                        }),
                        t("CircInOut", function (t) {
                            return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                        })
                    ),
                    e(
                        "Elastic",
                        (o = function (t, e, i) {
                            var n = h(
                                    "easing." + t,
                                    function (t, e) {
                                        (this._p1 = 1 <= t ? t : 1), (this._p2 = (e || i) / (t < 1 ? t : 1)), (this._p3 = (this._p2 / u) * (Math.asin(1 / this._p1) || 0)), (this._p2 = u / this._p2);
                                    },
                                    !0
                                ),
                                r = (n.prototype = new g());
                            return (
                                (r.constructor = n),
                                (r.getRatio = e),
                                (r.config = function (t, e) {
                                    return new n(t, e);
                                }),
                                n
                            );
                        })(
                            "ElasticOut",
                            function (t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                            },
                            0.3
                        ),
                        o(
                            "ElasticIn",
                            function (t) {
                                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                            },
                            0.3
                        ),
                        o(
                            "ElasticInOut",
                            function (t) {
                                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                            },
                            0.45
                        )
                    ),
                    e(
                        "Expo",
                        t("ExpoOut", function (t) {
                            return 1 - Math.pow(2, -10 * t);
                        }),
                        t("ExpoIn", function (t) {
                            return Math.pow(2, 10 * (t - 1)) - 0.001;
                        }),
                        t("ExpoInOut", function (t) {
                            return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                        })
                    ),
                    e(
                        "Sine",
                        t("SineOut", function (t) {
                            return Math.sin(t * c);
                        }),
                        t("SineIn", function (t) {
                            return 1 - Math.cos(t * c);
                        }),
                        t("SineInOut", function (t) {
                            return -0.5 * (Math.cos(Math.PI * t) - 1);
                        })
                    ),
                    h(
                        "easing.EaseLookup",
                        {
                            find: function (t) {
                                return g.map[t];
                            },
                        },
                        !0
                    ),
                    f(a.SlowMo, "SlowMo", "ease,"),
                    f(s, "RoughEase", "ease,"),
                    f(n, "SteppedEase", "ease,"),
                    d
                );
            },
            !0
        );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (f, d) {
        "use strict";
        var p = {},
            n = f.document,
            m = (f.GreenSockGlobals = f.GreenSockGlobals || f),
            t = m[d];
        if (t) return "undefined" != typeof module && module.exports && (module.exports = t);
        function g(t) {
            var e,
                i = t.split("."),
                n = m;
            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
            return n;
        }
        function l(t) {
            var e,
                i = [],
                n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
        }
        function _() {}
        var e,
            i,
            r,
            v,
            y,
            s,
            o,
            h = g("com.greensock"),
            b = 1e-10,
            w =
                ((s = Object.prototype.toString),
                (o = s.call([])),
                function (t) {
                    return null != t && (t instanceof Array || ("object" == typeof t && !!t.push && s.call(t) === o));
                }),
            x = {},
            T = function (a, l, u, c) {
                (this.sc = x[a] ? x[a].sc : []), ((x[a] = this).gsClass = null), (this.func = u);
                var h = [];
                (this.check = function (t) {
                    for (var e, i, n, r, s = l.length, o = s; -1 < --s; ) (e = x[l[s]] || new T(l[s], [])).gsClass ? ((h[s] = e.gsClass), o--) : t && e.sc.push(this);
                    if (0 === o && u) {
                        if (((n = (i = ("com.greensock." + a).split(".")).pop()), (r = g(i.join("."))[n] = this.gsClass = u.apply(u, h)), c))
                            if (((m[n] = p[n] = r), "undefined" != typeof module && module.exports))
                                if (a === d) for (s in ((module.exports = p[d] = r), p)) r[s] = p[s];
                                else p[d] && (p[d][n] = r);
                            else
                                "function" == typeof define &&
                                    define.amd &&
                                    define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                                        return r;
                                    });
                        for (s = 0; s < this.sc.length; s++) this.sc[s].check();
                    }
                }),
                    this.check(!0);
            },
            a = (f._gsDefine = function (t, e, i, n) {
                return new T(t, e, i, n);
            }),
            C = (h._class = function (t, e, i) {
                return (
                    (e = e || function () {}),
                    a(
                        t,
                        [],
                        function () {
                            return e;
                        },
                        i
                    ),
                    e
                );
            });
        a.globals = m;
        var u = [0, 0, 1, 1],
            E = C(
                "easing.Ease",
                function (t, e, i, n) {
                    (this._func = t), (this._type = i || 0), (this._power = n || 0), (this._params = e ? u.concat(e) : u);
                },
                !0
            ),
            S = (E.map = {}),
            c = (E.register = function (t, e, i, n) {
                for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --u; )
                    for (s = l[u], r = n ? C("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; -1 < --o; ) (a = c[o]), (S[s + "." + a] = S[a + s] = r[a] = t.getRatio ? t : t[a] || new t());
            });
        for (
            (r = E.prototype)._calcEnd = !1,
                r.getRatio = function (t) {
                    if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2;
                },
                i = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
            -1 < --i;

        )
            (r = e[i] + ",Power" + i), c(new E(null, null, 1, i), r, "easeOut", !0), c(new E(null, null, 2, i), r, "easeIn" + (0 === i ? ",easeNone" : "")), c(new E(null, null, 3, i), r, "easeInOut");
        (S.linear = h.easing.Linear.easeIn), (S.swing = h.easing.Quad.easeInOut);
        var k = C("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
        });
        ((r = k.prototype).addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s,
                o,
                a = this._listeners[t],
                l = 0;
            for (this !== v || y || v.wake(), null == a && (this._listeners[t] = a = []), o = a.length; -1 < --o; ) (s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
            a.splice(l, 0, { c: e, s: i, up: n, pr: r });
        }),
            (r.removeEventListener = function (t, e) {
                var i,
                    n = this._listeners[t];
                if (n) for (i = n.length; -1 < --i; ) if (n[i].c === e) return void n.splice(i, 1);
            }),
            (r.dispatchEvent = function (t) {
                var e,
                    i,
                    n,
                    r = this._listeners[t];
                if (r) for (1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget; -1 < --e; ) (n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i));
            });
        var A = f.requestAnimationFrame,
            O = f.cancelAnimationFrame,
            D =
                Date.now ||
                function () {
                    return new Date().getTime();
                },
            P = D();
        for (i = (e = ["ms", "moz", "webkit", "o"]).length; -1 < --i && !A; ) (A = f[e[i] + "RequestAnimationFrame"]), (O = f[e[i] + "CancelAnimationFrame"] || f[e[i] + "CancelRequestAnimationFrame"]);
        C("Ticker", function (t, e) {
            var r,
                s,
                o,
                a,
                l,
                u = this,
                c = D(),
                i = !(!1 === e || !A) && "auto",
                h = 500,
                f = 33,
                d = function (t) {
                    var e,
                        i,
                        n = D() - P;
                    h < n && (c += n - f), (P += n), (u.time = (P - c) / 1e3), (e = u.time - l), (!r || 0 < e || !0 === t) && (u.frame++, (l += e + (a <= e ? 0.004 : a - e)), (i = !0)), !0 !== t && (o = s(d)), i && u.dispatchEvent("tick");
                };
            k.call(u),
                (u.time = u.frame = 0),
                (u.tick = function () {
                    d(!0);
                }),
                (u.lagSmoothing = function (t, e) {
                    return arguments.length ? ((h = t || 1e10), void (f = Math.min(e, h, 0))) : h < 1e10;
                }),
                (u.sleep = function () {
                    null != o && (i && O ? O(o) : clearTimeout(o), (s = _), (o = null), u === v && (y = !1));
                }),
                (u.wake = function (t) {
                    null !== o ? u.sleep() : t ? (c += -P + (P = D())) : 10 < u.frame && (P = D() - h + 5),
                        (s =
                            0 === r
                                ? _
                                : i && A
                                ? A
                                : function (t) {
                                      return setTimeout(t, (1e3 * (l - u.time) + 1) | 0);
                                  }),
                        u === v && (y = !0),
                        d(2);
                }),
                (u.fps = function (t) {
                    return arguments.length ? ((a = 1 / ((r = t) || 60)), (l = this.time + a), void u.wake()) : r;
                }),
                (u.useRAF = function (t) {
                    return arguments.length ? (u.sleep(), (i = t), void u.fps(r)) : i;
                }),
                u.fps(t),
                setTimeout(function () {
                    "auto" === i && u.frame < 5 && "hidden" !== (n || {}).visibilityState && u.useRAF(!1);
                }, 1500);
        }),
            ((r = h.Ticker.prototype = new h.events.EventDispatcher()).constructor = h.Ticker);
        var I = C("core.Animation", function (t, e) {
            if (
                ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = !0 === e.immediateRender),
                (this.data = e.data),
                (this._reversed = !0 === e.reversed),
                J)
            ) {
                y || v.wake();
                var i = this.vars.useFrames ? K : J;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });
        (v = I.ticker = new h.Ticker()),
            ((r = I.prototype)._dirty = r._gc = r._initted = r._paused = !1),
            (r._totalTime = r._time = 0),
            (r._rawPrevTime = -1),
            (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
            (r._paused = !1);
        var N = function () {
            y && 2e3 < D() - P && ("hidden" !== (n || {}).visibilityState || !v.lagSmoothing()) && v.wake();
            var t = setTimeout(N, 2e3);
            t.unref && t.unref();
        };
        N(),
            (r.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (r.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (r.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
            }),
            (r.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e);
            }),
            (r.restart = function (t, e) {
                return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (r.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }),
            (r.render = function (t, e, i) {}),
            (r.invalidate = function () {
                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
            }),
            (r.isActive = function () {
                var t,
                    e = this._timeline,
                    i = this._startTime;
                return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7);
            }),
            (r._enabled = function (t, e) {
                return (
                    y || v.wake(), (this._gc = !t), (this._active = this.isActive()), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                );
            }),
            (r._kill = function (t, e) {
                return this._enabled(!1, !1);
            }),
            (r.kill = function (t, e) {
                return this._kill(t, e), this;
            }),
            (r._uncache = function (t) {
                for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                return this;
            }),
            (r._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); -1 < --e; ) "{self}" === t[e] && (i[e] = this);
                return i;
            }),
            (r._callback = function (t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n);
                }
            }),
            (r.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = w(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[t + "Scope"] = n)), "onUpdate" === t && (this._onUpdate = e);
                }
                return this;
            }),
            (r.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
            }),
            (r.duration = function (t) {
                return arguments.length
                    ? ((this._duration = this._totalDuration = t),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                      this)
                    : ((this._dirty = !1), this._duration);
            }),
            (r.totalDuration = function (t) {
                return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
            }),
            (r.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
            }),
            (r.totalTime = function (t, e, i) {
                if ((y || v.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                    if ((t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if ((n < t && !i && (t = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                            for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (H.length && Z(), this.render(t, e, !1), H.length && Z());
                }
                return this;
            }),
            (r.progress = r.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
            }),
            (r.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
            }),
            (r.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
            }),
            (r.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (
                    t = t || b,
                        this._timeline && this._timeline.smoothChildTiming && ((i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime()), (this._startTime = i - ((i - this._startTime) * this._timeScale) / t)),
                        this._timeScale = t,
                        i = this.timeline;
                    i && i.timeline;

                )
                    (i._dirty = !0), i.totalDuration(), (i = i.timeline);
                return this;
            }),
            (r.reversed = function (t) {
                return arguments.length
                    ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                    : this._reversed;
            }),
            (r.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e,
                    i,
                    n = this._timeline;
                return (
                    t != this._paused &&
                        n &&
                        (y || t || v.wake(),
                        (i = (e = n.rawTime()) - this._pauseTime),
                        !t && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                        (this._pauseTime = t ? e : null),
                        (this._paused = t),
                        (this._active = this.isActive()),
                        !t && 0 != i && this._initted && this.duration() && ((e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                    this
                );
            });
        var R = C("core.SimpleTimeline", function (t) {
            I.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
        });
        ((r = R.prototype = new I()).constructor = R),
            (r.kill()._gc = !1),
            (r._first = r._last = r._recent = null),
            (r._sortChildren = !1),
            (r.add = r.insert = function (t, e, i, n) {
                var r, s;
                if (
                    ((t._startTime = Number(e || 0) + t._delay),
                    t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                    t.timeline && t.timeline._remove(t, !0),
                    (t.timeline = t._timeline = this),
                    t._gc && t._enabled(!0, !0),
                    (r = this._last),
                    this._sortChildren)
                )
                    for (s = t._startTime; r && r._startTime > s; ) r = r._prev;
                return r ? ((t._next = r._next), (r._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = r), (this._recent = t), this._timeline && this._uncache(!0), this;
            }),
            (r._remove = function (t, e) {
                return (
                    t.timeline === this &&
                        (e || t._enabled(!1, !0),
                        t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                        t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                        (t._next = t._prev = t.timeline = null),
                        t === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                    this
                );
            }),
            (r.render = function (t, e, i) {
                var n,
                    r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                    (n = r._next),
                        (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                            (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                        (r = n);
            }),
            (r.rawTime = function () {
                return y || v.wake(), this._totalTime;
            });
        function M(t) {
            return t && t.length && t !== f && t[0] && (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType));
        }
        var L = C(
            "TweenLite",
            function (t, e, i) {
                if ((I.call(this, e, i), (this.render = L.prototype.render), null == t)) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : L.selector(t) || t;
                var n,
                    r,
                    s,
                    o = t.jquery || (t.length && t !== f && t[0] && (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType))),
                    a = this.vars.overwrite;
                if (((this._overwrite = a = null == a ? Q[L.defaultOverwrite] : "number" == typeof a ? a >> 0 : Q[a]), (o || t instanceof Array || (t.push && w(t))) && "number" != typeof t[0]))
                    for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++)
                        (r = s[n])
                            ? "string" != typeof r
                                ? r.length && r !== f && r[0] && (r[0] === f || (r[0].nodeType && r[0].style && !r.nodeType))
                                    ? (s.splice(n--, 1), (this._targets = s = s.concat(l(r))))
                                    : ((this._siblings[n] = et(r, this, !1)), 1 === a && 1 < this._siblings[n].length && it(r, this, null, 1, this._siblings[n]))
                                : "string" == typeof (r = s[n--] = L.selector(r)) && s.splice(n + 1, 1)
                            : s.splice(n--, 1);
                else (this._propLookup = {}), (this._siblings = et(t, this, !1)), 1 === a && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -b), this.render(Math.min(0, -this._delay)));
            },
            !0
        );
        ((r = L.prototype = new I()).constructor = L),
            (r.kill()._gc = !1),
            (r.ratio = 0),
            (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
            (r._notifyPluginsOfEnabled = r._lazy = !1),
            (L.version = "2.0.1"),
            (L.defaultEase = r._ease = new E(null, null, 1, 1)),
            (L.defaultOverwrite = "auto"),
            (L.ticker = v),
            (L.autoSleep = 120),
            (L.lagSmoothing = function (t, e) {
                v.lagSmoothing(t, e);
            }),
            (L.selector =
                f.$ ||
                f.jQuery ||
                function (t) {
                    var e = f.$ || f.jQuery;
                    return e ? (L.selector = e)(t) : (n = n || f.document) ? (n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)) : t;
                });
        function j(t) {
            for (var e, i = this._firstPT; i; )
                (e = i.blob ? (1 === t && null != this.end ? this.end : t ? this.join("") : this.start) : i.c * t + i.s),
                    i.m ? (e = i.m.call(this._tween, e, this._target || i.t, this._tween)) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
                    i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
                    (i = i._next);
        }
        function F(t, e, i, n) {
            var r,
                s,
                o,
                a,
                l,
                u,
                c,
                h = [],
                f = 0,
                d = "",
                p = 0;
            for (
                h.start = t,
                    h.end = e,
                    t = h[0] = t + "",
                    e = h[1] = e + "",
                    i && (i(h), (t = h[0]), (e = h[1])),
                    h.length = 0,
                    r = t.match(B) || [],
                    s = e.match(B) || [],
                    n && ((n._next = null), (n.blob = 1), (h._firstPT = h._applyPT = n)),
                    l = s.length,
                    a = 0;
                a < l;
                a++
            )
                (c = s[a]),
                    (d += (u = e.substr(f, e.indexOf(c, f) - f)) || !a ? u : ","),
                    (f += u.length),
                    p ? (p = (p + 1) % 5) : "rgba(" === u.substr(-5) && (p = 1),
                    c === r[a] || r.length <= a
                        ? (d += c)
                        : (d && (h.push(d), (d = "")),
                          (o = parseFloat(r[a])),
                          h.push(o),
                          (h._firstPT = {
                              _next: h._firstPT,
                              t: h,
                              p: h.length - 1,
                              s: o,
                              c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                              f: 0,
                              m: p && p < 4 ? Math.round : 0,
                          })),
                    (f += c.length);
            return (d += e.substr(f)) && h.push(d), (h.setRatio = j), q.test(e) && (h.end = null), h;
        }
        function z(t, e, i, n, r, s, o, a, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var u = typeof t[e],
                c = "function" != u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                h = "get" !== i ? i : c ? (o ? t[c](o) : t[c]()) : t[e],
                f = "string" == typeof n && "=" === n.charAt(1),
                d = { t: t, p: e, s: h, f: "function" == u, pg: 0, n: r || e, m: s ? ("function" == typeof s ? s : Math.round) : 0, pr: 0, c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0 };
            return (
                ("number" == typeof h && ("number" == typeof n || f)) ||
                    (o || isNaN(h) || (!f && isNaN(n)) || "boolean" == typeof h || "boolean" == typeof n
                        ? ((d.fp = o), (d = { t: F(h, f ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || L.defaultStringFilter, d), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }))
                        : ((d.s = parseFloat(h)), f || (d.c = parseFloat(n) - d.s || 0))),
                d.c ? ((d._next = this._firstPT) && (d._next._prev = d), (this._firstPT = d)) : void 0
            );
        }
        var H = [],
            W = {},
            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            q = /[\+-]=-?[\.\d]/,
            $ = (L._internals = { isArray: w, isSelector: M, lazyTweens: H, blobDif: F }),
            U = (L._plugins = {}),
            Y = ($.tweenLookup = {}),
            X = 0,
            V = ($.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
            }),
            Q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            K = (I._rootFramesTimeline = new R()),
            J = (I._rootTimeline = new R()),
            G = 30,
            Z = ($.lazyRender = function () {
                var t,
                    e = H.length;
                for (W = {}; -1 < --e; ) (t = H[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                H.length = 0;
            });
        (J._startTime = v.time),
            (K._startTime = v.frame),
            (J._active = K._active = !0),
            setTimeout(Z, 1),
            (I._updateRoot = L.render = function () {
                var t, e, i;
                if ((H.length && Z(), J.render((v.time - J._startTime) * J._timeScale, !1, !1), K.render((v.frame - K._startTime) * K._timeScale, !1, !1), H.length && Z(), v.frame >= G)) {
                    for (i in ((G = v.frame + (parseInt(L.autoSleep, 10) || 120)), Y)) {
                        for (t = (e = Y[i].tweens).length; -1 < --t; ) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i];
                    }
                    if ((!(i = J._first) || i._paused) && L.autoSleep && !K._first && 1 === v._listeners.tick.length) {
                        for (; i && i._paused; ) i = i._next;
                        i || v.sleep();
                    }
                }
            }),
            v.addEventListener("tick", I._updateRoot);
        function tt(t, e, i, n) {
            var r,
                s,
                o = t.vars.onOverwrite;
            return o && (r = o(t, e, i, n)), (o = L.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s;
        }
        var et = function (t, e, i) {
                var n,
                    r,
                    s = t._gsTweenID;
                if ((Y[s || (t._gsTweenID = s = "t" + X++)] || (Y[s] = { target: t, tweens: [] }), e && (((n = Y[s].tweens)[(r = n.length)] = e), i))) for (; -1 < --r; ) n[r] === e && n.splice(r, 1);
                return Y[s].tweens;
            },
            it = function (t, e, i, n, r) {
                var s, o, a, l;
                if (1 === n || 4 <= n) {
                    for (l = r.length, s = 0; s < l; s++)
                        if ((a = r[s]) !== e) a._gc || (a._kill(null, t, e) && (o = !0));
                        else if (5 === n) break;
                    return o;
                }
                var u,
                    c = e._startTime + b,
                    h = [],
                    f = 0,
                    d = 0 === e._duration;
                for (s = r.length; -1 < --s; )
                    (a = r[s]) === e ||
                        a._gc ||
                        a._paused ||
                        (a._timeline !== e._timeline
                            ? ((u = u || nt(e, 0, d)), 0 === nt(a, u, d) && (h[f++] = a))
                            : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && (((d || !a._initted) && c - a._startTime <= 2e-10) || (h[f++] = a)));
                for (s = f; -1 < --s; )
                    if (((a = h[s]), 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || (!a._firstPT && a._initted))) {
                        if (2 !== n && !tt(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0);
                    }
                return o;
            },
            nt = function (t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                    if (((s += n._startTime), (r *= n._timeScale), n._paused)) return -100;
                    n = n._timeline;
                }
                return e < (s /= r) ? s - e : (i && s === e) || (!t._initted && s - e < 2e-10) ? b : (s += t.totalDuration() / t._timeScale / r) > e + b ? 0 : s - e - b;
            };
        (r._init = function () {
            var t,
                e,
                i,
                n,
                r,
                s,
                o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!o.immediateRender,
                c = o.ease;
            if (o.startAt) {
                for (n in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {}), o.startAt)) r[n] = o.startAt[n];
                if (
                    ((r.data = "isStart"),
                    (r.overwrite = !1),
                    (r.immediateRender = !0),
                    (r.lazy = u && !1 !== o.lazy),
                    (r.startAt = r.delay = null),
                    (r.onUpdate = o.onUpdate),
                    (r.onUpdateParams = o.onUpdateParams),
                    (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                    (this._startAt = L.to(this.target || {}, 0, r)),
                    u)
                )
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                else {
                    for (n in (0 !== this._time && (u = !1), (i = {}), o)) (V[n] && "autoCSS" !== n) || (i[n] = o[n]);
                    if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = u && !1 !== o.lazy), (i.immediateRender = u), (this._startAt = L.to(this.target, 0, i)), u)) {
                        if (0 === this._time) return;
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                }
            if (
                ((this._ease = c = c ? (c instanceof E ? c : "function" == typeof c ? new E(c, o.easeParams) : S[c] || L.defaultEase) : L.defaultEase),
                o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
            )
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if ((e && L._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), o.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
        }),
            (r._initProps = function (t, e, i, n, r) {
                var s, o, a, l, u, c;
                if (null == t) return !1;
                for (s in (W[t._gsTweenID] && Z(),
                this.vars.css ||
                    (t.style &&
                        t !== f &&
                        t.nodeType &&
                        U.css &&
                        !1 !== this.vars.autoCSS &&
                        (function (t, e) {
                            var i,
                                n = {};
                            for (i in t)
                                V[i] ||
                                    (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) ||
                                    !(!U[i] || (U[i] && U[i]._autoCSS)) ||
                                    ((n[i] = t[i]), delete t[i]);
                            t.css = n;
                        })(this.vars, t)),
                this.vars))
                    if (((c = this.vars[s]), V[s])) c && (c instanceof Array || (c.push && w(c))) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (U[s] && (l = new U[s]())._onInitTween(t, this.vars[s], this, r)) {
                        for (this._firstPT = u = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: l._priority, m: 0 }, o = l._overwriteProps.length; -1 < --o; ) e[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
                    } else e[s] = z.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, t)
                    ? this._initProps(t, e, i, n, r)
                    : 1 < this._overwrite && this._firstPT && 1 < i.length && it(t, this, e, this._overwrite, i)
                    ? (this._kill(e, t), this._initProps(t, e, i, n, r))
                    : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (W[t._gsTweenID] = !0), a);
            }),
            (r.render = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t)
                    (this._totalTime = this._time = l),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                        0 !== l ||
                            (!this._initted && this.vars.lazy && !i) ||
                            (this._startTime === this._timeline._duration && (t = 0),
                            (u < 0 || (t <= 0 && -1e-7 <= t) || (u === b && "isPause" !== this.data)) && u !== t && ((i = !0), b < u && (r = "onReverseComplete")),
                            (this._rawPrevTime = o = !e || t || u === t ? t : b));
                else if (t < 1e-7)
                    (this._totalTime = this._time = 0),
                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                        (0 !== a || (0 === l && 0 < u)) && ((r = "onReverseComplete"), (n = this._reversed)),
                        t < 0 && ((this._active = !1), 0 !== l || (!this._initted && this.vars.lazy && !i) || (0 <= u && (u !== b || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = o = !e || t || u === t ? t : b))),
                        (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                else if (((this._totalTime = this._time = t), this._easeType)) {
                    var c = t / l,
                        h = this._easeType,
                        f = this._easePower;
                    (1 === h || (3 === h && 0.5 <= c)) && (c = 1 - c),
                        3 === h && (c *= 2),
                        1 === f ? (c *= c) : 2 === f ? (c *= c * c) : 3 === f ? (c *= c * c * c) : 4 === f && (c *= c * c * c * c),
                        (this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < 0.5 ? c / 2 : 1 - c / 2);
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = this._totalTime = a), (this._rawPrevTime = u), H.push(this), void (this._lazy = [t, e]);
                        this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        !1 !== this._lazy && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== a && 0 <= t && (this._active = !0)),
                            0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : (r = r || "_dummyGS")), !this.vars.onStart || (0 === this._time && 0 !== l) || e || this._callback("onStart")),
                            s = this._firstPT;
                        s;

                    )
                        s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || ((this._time !== a || n || i) && this._callback("onUpdate"))),
                        !r ||
                            (this._gc && !i) ||
                            (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                            n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                            !e && this.vars[r] && this._callback(r),
                            0 === l && this._rawPrevTime === b && o !== b && (this._rawPrevTime = 0));
                }
            }),
            (r._kill = function (t, e, i) {
                if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((w(e) || M(e)) && "number" != typeof e[0]) for (n = e.length; -1 < --n; ) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; -1 < --n; )
                            if (e === this._targets[n]) {
                                (a = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all");
                                break;
                            }
                    } else {
                        if (e !== this.target) return !1;
                        (a = this._propLookup), (r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                    }
                    if (a) {
                        if (((u = t || a), (c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill)), i && (L.onOverwrite || this.vars.onOverwrite))) {
                            for (s in u) a[s] && (h = h || []).push(s);
                            if ((h || !t) && !tt(this, i, e, h)) return !1;
                        }
                        for (s in u)
                            (o = a[s]) &&
                                (f && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                                o.pg && o.t._kill(u) && (l = !0),
                                (o.pg && 0 !== o.t._overwriteProps.length) || (o._prev ? (o._prev._next = o._next) : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), (o._next = o._prev = null)),
                                delete a[s]),
                                c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1);
                    }
                }
                return l;
            }),
            (r.invalidate = function () {
                return (
                    this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this),
                    (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                    (this._propLookup = this._targets ? {} : []),
                    I.prototype.invalidate.call(this),
                    this.vars.immediateRender && ((this._time = -b), this.render(Math.min(0, -this._delay))),
                    this
                );
            }),
            (r._enabled = function (t, e) {
                if ((y || v.wake(), t && this._gc)) {
                    var i,
                        n = this._targets;
                    if (n) for (i = n.length; -1 < --i; ) this._siblings[i] = et(n[i], this, !0);
                    else this._siblings = et(this.target, this, !0);
                }
                return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
            }),
            (L.to = function (t, e, i) {
                return new L(t, e, i);
            }),
            (L.from = function (t, e, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new L(t, e, i);
            }),
            (L.fromTo = function (t, e, i, n) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new L(t, e, n);
            }),
            (L.delayedCall = function (t, e, i, n, r) {
                return new L(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
            }),
            (L.set = function (t, e) {
                return new L(t, 0, e);
            }),
            (L.getTweensOf = function (t, e) {
                if (null == t) return [];
                var i, n, r, s;
                if (((t = "string" != typeof t ? t : L.selector(t) || t), (w(t) || M(t)) && "number" != typeof t[0])) {
                    for (i = t.length, n = []; -1 < --i; ) n = n.concat(L.getTweensOf(t[i], e));
                    for (i = n.length; -1 < --i; ) for (s = n[i], r = i; -1 < --r; ) s === n[r] && n.splice(i, 1);
                } else if (t._gsTweenID) for (i = (n = et(t).concat()).length; -1 < --i; ) (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
                return n || [];
            }),
            (L.killTweensOf = L.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var n = L.getTweensOf(t, e), r = n.length; -1 < --r; ) n[r]._kill(i, t);
            });
        var rt = C(
            "plugins.TweenPlugin",
            function (t, e) {
                (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = rt.prototype);
            },
            !0
        );
        if (
            ((r = rt.prototype),
            (rt.version = "1.19.0"),
            (rt.API = 2),
            (r._firstPT = null),
            (r._addTween = z),
            (r.setRatio = j),
            (r._kill = function (t) {
                var e,
                    i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; -1 < --e; ) null != t[i[e]] && i.splice(e, 1);
                for (; n; ) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
                return !1;
            }),
            (r._mod = r._roundProps = function (t) {
                for (var e, i = this._firstPT; i; ) (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
            }),
            (L._onPluginEvent = function (t, e) {
                var i,
                    n,
                    r,
                    s,
                    o,
                    a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a; ) {
                        for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                        (a._prev = n ? n._prev : s) ? (a._prev._next = a) : (r = a), (a._next = n) ? (n._prev = a) : (s = a), (a = o);
                    }
                    a = e._firstPT = r;
                }
                for (; a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), (a = a._next);
                return i;
            }),
            (rt.activate = function (t) {
                for (var e = t.length; -1 < --e; ) t[e].API === rt.API && (U[new t[e]()._propName] = t[e]);
                return !0;
            }),
            (a.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e,
                    i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    o = C(
                        "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                        function () {
                            rt.call(this, i, n), (this._overwriteProps = r || []);
                        },
                        !0 === t.global
                    ),
                    a = (o.prototype = new rt(i));
                for (e in (((a.constructor = o).API = t.API), s)) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return (o.version = t.version), rt.activate([o]), o;
            }),
            (e = f._gsQueue))
        ) {
            for (i = 0; i < e.length; i++) e[i]();
            for (r in x) x[r].func || f.console.log("GSAP encountered missing dependency: " + r);
        }
        y = !1;
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("jquery")))
            : (e.jQueryBridget = i(e, e.jQuery));
    })(window, function (t, e) {
        "use strict";
        var i = Array.prototype.slice,
            n = t.console,
            h =
                void 0 === n
                    ? function () {}
                    : function (t) {
                          n.error(t);
                      };
        function r(u, r, c) {
            (c = c || e || t.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (t) {
                        c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
                    }),
                (c.fn[u] = function (t) {
                    return "string" == typeof t
                        ? (function (t, s, o) {
                              var a,
                                  l = "$()." + u + '("' + s + '")';
                              return (
                                  t.each(function (t, e) {
                                      var i = c.data(e, u);
                                      if (i) {
                                          var n = i[s];
                                          if (n && "_" != s.charAt(0)) {
                                              var r = n.apply(i, o);
                                              a = void 0 === a ? r : a;
                                          } else h(l + " is not a valid method");
                                      } else h(u + " not initialized. Cannot call methods, i.e. " + l);
                                  }),
                                  void 0 !== a ? a : t
                              );
                          })(this, t, i.call(arguments, 1))
                        : ((function (t, n) {
                              t.each(function (t, e) {
                                  var i = c.data(e, u);
                                  i ? (i.option(n), i._init()) : ((i = new r(e, n)), c.data(e, u, i));
                              });
                          })(this, t),
                          this);
                }),
                s(c));
        }
        function s(t) {
            !t || (t && t.bridget) || (t.bridget = r);
        }
        return s(e || t.jQuery), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                        var s = i[r];
                        n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                  return e();
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function _(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        var i =
                "undefined" == typeof console
                    ? function () {}
                    : function (t) {
                          console.error(t);
                      },
            v = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            y = v.length;
        function b(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
        }
        var w,
            x = !1;
        function T(t) {
            if (
                ((function () {
                    if (!x) {
                        x = !0;
                        var t = document.createElement("div");
                        (t.style.width = "200px"), (t.style.padding = "1px 2px 3px 4px"), (t.style.borderStyle = "solid"), (t.style.borderWidth = "1px 2px 3px 4px"), (t.style.boxSizing = "border-box");
                        var e = document.body || document.documentElement;
                        e.appendChild(t);
                        var i = b(t);
                        (T.isBoxSizeOuter = w = 200 == _(i.width)), e.removeChild(t);
                    }
                })(),
                "string" == typeof t && (t = document.querySelector(t)),
                t && "object" == typeof t && t.nodeType)
            ) {
                var e = b(t);
                if ("none" == e.display)
                    return (function () {
                        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < y; e++) {
                            t[v[e]] = 0;
                        }
                        return t;
                    })();
                var i = {};
                (i.width = t.offsetWidth), (i.height = t.offsetHeight);
                for (var n = (i.isBorderBox = "border-box" == e.boxSizing), r = 0; r < y; r++) {
                    var s = v[r],
                        o = e[s],
                        a = parseFloat(o);
                    i[s] = isNaN(a) ? 0 : a;
                }
                var l = i.paddingLeft + i.paddingRight,
                    u = i.paddingTop + i.paddingBottom,
                    c = i.marginLeft + i.marginRight,
                    h = i.marginTop + i.marginBottom,
                    f = i.borderLeftWidth + i.borderRightWidth,
                    d = i.borderTopWidth + i.borderBottomWidth,
                    p = n && w,
                    m = _(e.width);
                !1 !== m && (i.width = m + (p ? 0 : l + f));
                var g = _(e.height);
                return !1 !== g && (i.height = g + (p ? 0 : u + d)), (i.innerWidth = i.width - (l + f)), (i.innerHeight = i.height - (u + d)), (i.outerWidth = i.width + c), (i.outerHeight = i.height + h), i;
            }
        }
        return T;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var i = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (t, e) {
            return t[i](e);
        };
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = i(e, e.matchesSelector));
    })(window, function (u, s) {
        var c = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                modulo: function (t, e) {
                    return ((t % e) + e) % e;
                },
                makeArray: function (t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e;
                },
                removeFrom: function (t, e) {
                    var i = t.indexOf(e);
                    -1 != i && t.splice(i, 1);
                },
                getParent: function (t, e) {
                    for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), s(t, e))) return t;
                },
                getQueryElement: function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                },
                handleEvent: function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                },
                filterFindElements: function (t, n) {
                    t = c.makeArray(t);
                    var r = [];
                    return (
                        t.forEach(function (t) {
                            if (t instanceof HTMLElement)
                                if (n) {
                                    s(t, n) && r.push(t);
                                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) r.push(e[i]);
                                } else r.push(t);
                        }),
                        r
                    );
                },
                debounceMethod: function (t, e, n) {
                    var r = t.prototype[e],
                        s = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[s];
                        t && clearTimeout(t);
                        var e = arguments,
                            i = this;
                        this[s] = setTimeout(function () {
                            r.apply(i, e), delete i[s];
                        }, n || 100);
                    };
                },
                docReady: function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                },
                toDashed: function (t) {
                    return t
                        .replace(/(.)([A-Z])/g, function (t, e, i) {
                            return e + "-" + i;
                        })
                        .toLowerCase();
                },
            },
            h = u.console;
        return (
            (c.htmlInit = function (a, l) {
                c.docReady(function () {
                    var t = c.toDashed(l),
                        r = "data-" + t,
                        e = document.querySelectorAll("[" + r + "]"),
                        i = document.querySelectorAll(".js-" + t),
                        n = c.makeArray(e).concat(c.makeArray(i)),
                        s = r + "-options",
                        o = u.jQuery;
                    n.forEach(function (e) {
                        var t,
                            i = e.getAttribute(r) || e.getAttribute(s);
                        try {
                            t = i && JSON.parse(i);
                        } catch (t) {
                            return void (h && h.error("Error parsing " + r + " on " + e.className + ": " + t));
                        }
                        var n = new a(e, t);
                        o && o.data(e, l, n);
                    });
                });
            }),
            c
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        var i = document.documentElement.style,
            n = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            s = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
            o = { transform: r, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" };
        function a(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        var l = (a.prototype = Object.create(t.prototype));
        (l.constructor = a),
            (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (l.getSize = function () {
                this.size = e(this.element);
            }),
            (l.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    e[o[i] || i] = t[i];
                }
            }),
            (l.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = t[e ? "left" : "right"],
                    r = t[i ? "top" : "bottom"],
                    s = this.layout.size,
                    o = -1 != n.indexOf("%") ? (parseFloat(n) / 100) * s.width : parseInt(n, 10),
                    a = -1 != r.indexOf("%") ? (parseFloat(r) / 100) * s.height : parseInt(r, 10);
                (o = isNaN(o) ? 0 : o), (a = isNaN(a) ? 0 : a), (o -= e ? s.paddingLeft : s.paddingRight), (a -= i ? s.paddingTop : s.paddingBottom), (this.position.x = o), (this.position.y = a);
            }),
            (l.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    r = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    o = i ? "right" : "left",
                    a = this.position.x + t[r];
                (e[s] = this.getXValue(a)), (e[o] = "");
                var l = n ? "paddingTop" : "paddingBottom",
                    u = n ? "top" : "bottom",
                    c = n ? "bottom" : "top",
                    h = this.position.y + t[l];
                (e[u] = this.getYValue(h)), (e[c] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (l.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (l._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    r = parseInt(t, 10),
                    s = parseInt(e, 10),
                    o = r === this.position.x && s === this.position.y;
                if ((this.setPosition(t, e), !o || this.isTransitioning)) {
                    var a = t - i,
                        l = e - n,
                        u = {};
                    (u.transform = this.getTranslate(a, l)), this.transition({ to: u, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
                } else this.layoutPosition();
            }),
            (l.getTranslate = function (t, e) {
                return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
            }),
            (l.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
            }),
            (l._nonTransition = function (t) {
                for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
            }),
            (l.transition = function (t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        this.element.offsetHeight;
                        null;
                    }
                    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                } else this._nonTransition(t);
            });
        var u =
            "opacity," +
            r.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        (l.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: u, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(s, this, !1);
            }
        }),
            (l.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (l.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var c = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = c[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[i],
                    (function (t) {
                        for (var e in t) return !1;
                        return !null;
                    })(e.ingProperties) && this.disableTransition(),
                    i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                    i in e.onEnd)
                )
                    e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (l.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (l.removeTransitionStyles = function () {
                this.css(h);
            }),
            (l.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
                n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      this.hide())
                    : this.removeElem();
            }),
            (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            a
        );
    }),
    (function (r, s) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, n) {
                  return s(r, t, e, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = s(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (r.Outlayer = s(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item));
    })(window, function (t, e, r, s, n) {
        "use strict";
        function i() {}
        var o = t.console,
            a = t.jQuery,
            l = 0,
            u = {};
        function c(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                (this.element = i), a && (this.$element = a(this.element)), (this.options = s.extend({}, this.constructor.defaults)), this.option(e);
                var n = ++l;
                (this.element.outlayerGUID = n), (u[n] = this)._create(), this._getOption("initLayout") && this.layout();
            } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
        }
        (c.namespace = "outlayer"),
            (c.Item = n),
            (c.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var h = c.prototype;
        function f(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)).constructor = e);
        }
        s.extend(h, e.prototype),
            (h.option = function (t) {
                s.extend(this.options, t);
            }),
            (h._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (c.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (h._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (h.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (h._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) {
                    var s = new i(e[r], this);
                    n.push(s);
                }
                return n;
            }),
            (h._filterFindItemElements = function (t) {
                return s.filterFindElements(t, this.options.itemSelector);
            }),
            (h.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (h.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (h._init = h.layout),
            (h._resetLayout = function () {
                this.getSize();
            }),
            (h.getSize = function () {
                this.size = r(this.element);
            }),
            (h._getMeasurement = function (t, e) {
                var i,
                    n = this.options[t];
                n ? ("string" == typeof n ? (i = this.element.querySelector(n)) : n instanceof HTMLElement && (i = n), (this[t] = i ? r(i)[e] : n)) : (this[t] = 0);
            }),
            (h.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (h._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (h._layoutItems = function (t, i) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var n = [];
                    t.forEach(function (t) {
                        var e = this._getItemLayoutPosition(t);
                        (e.item = t), (e.isInstant = i || t.isLayoutInstant), n.push(e);
                    }, this),
                        this._processLayoutQueue(n);
                }
            }),
            (h._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (h._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (h.updateStagger = function () {
                var t = this.options.stagger;
                if (null != t)
                    return (
                        (this.stagger = (function (t) {
                            if ("number" == typeof t) return t;
                            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                i = e && e[1],
                                n = e && e[2];
                            if (!i.length) return 0;
                            i = parseFloat(i);
                            var r = d[n] || 1;
                            return i * r;
                        })(t)),
                        this.stagger
                    );
                this.stagger = 0;
            }),
            (h._positionItem = function (t, e, i, n, r) {
                n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i));
            }),
            (h._postLayout = function () {
                this.resizeContainer();
            }),
            (h.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                }
            }),
            (h._getContainerSize = i),
            (h._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (h._emitCompleteOnItems = function (e, t) {
                var i = this;
                function n() {
                    i.dispatchEvent(e + "Complete", null, [t]);
                }
                var r = t.length;
                if (t && r) {
                    var s = 0;
                    t.forEach(function (t) {
                        t.once(e, o);
                    });
                } else n();
                function o() {
                    ++s == r && n();
                }
            }),
            (h.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), a))
                    if (((this.$element = this.$element || a(this.element)), e)) {
                        var r = a.Event(e);
                        (r.type = t), this.$element.trigger(r, i);
                    } else this.$element.trigger(t, i);
            }),
            (h.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (h.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (h.stamp = function (t) {
                (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (h.unstamp = function (t) {
                (t = this._find(t)) &&
                    t.forEach(function (t) {
                        s.removeFrom(this.stamps, t), this.unignore(t);
                    }, this);
            }),
            (h._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = s.makeArray(t));
            }),
            (h._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (h._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (h._manageStamp = i),
            (h._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = r(t);
                return { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom };
            }),
            (h.handleEvent = s.handleEvent),
            (h.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (h.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (h.onresize = function () {
                this.resize();
            }),
            s.debounceMethod(c, "onresize", 100),
            (h.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (h.needsResizeLayout = function () {
                var t = r(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (h.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (h.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (h.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (h.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function (t, e) {
                        t.stagger(e * i), t.reveal();
                    });
                }
            }),
            (h.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function (t, e) {
                        t.stagger(e * i), t.hide();
                    });
                }
            }),
            (h.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (h.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (h.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (h.getItems = function (t) {
                t = s.makeArray(t);
                var i = [];
                return (
                    t.forEach(function (t) {
                        var e = this.getItem(t);
                        e && i.push(e);
                    }, this),
                    i
                );
            }),
            (h.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), s.removeFrom(this.items, t);
                        }, this);
            }),
            (h.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete u[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace);
            }),
            (c.data = function (t) {
                var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
                return e && u[e];
            }),
            (c.create = function (t, e) {
                var i = f(c);
                return (
                    (i.defaults = s.extend({}, c.defaults)),
                    s.extend(i.defaults, e),
                    (i.compatOptions = s.extend({}, c.compatOptions)),
                    (i.namespace = t),
                    (i.data = c.data),
                    (i.Item = f(n)),
                    s.htmlInit(i, t),
                    a && a.bridget && a.bridget(t, i),
                    i
                );
            });
        var d = { ms: 1, s: 1e3 };
        return (c.Item = n), c;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, u) {
        var e = t.create("masonry");
        e.compatOptions.fitWidth = "isFitWidth";
        var i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (i.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        e = t && t.element;
                    this.columnWidth = (e && u(e).outerWidth) || this.containerWidth;
                }
                var i = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    r = n / i,
                    s = i - (n % i);
                (r = Math[s && s < 1 ? "round" : "floor"](r)), (this.cols = Math.max(r, 1));
            }),
            (i.getContainerWidth = function () {
                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    e = u(t);
                this.containerWidth = e && e.innerWidth;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                i = Math.min(i, this.cols);
                for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), r = { x: this.columnWidth * n.col, y: n.y }, s = n.y + t.size.outerHeight, o = i + n.col, a = n.col; a < o; a++)
                    this.colYs[a] = s;
                return r;
            }),
            (i._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (i._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
                return e;
            }),
            (i._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (i._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols;
                i = 1 < t && i + t > this.cols ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (i._manageStamp = function (t) {
                var e = u(t),
                    i = this._getElementOffset(t),
                    n = this._getOption("originLeft") ? i.left : i.right,
                    r = n + e.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var o = Math.floor(r / this.columnWidth);
                (o -= r % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
                for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = s; l <= o; l++) this.colYs[l] = Math.max(a, this.colYs[l]);
            }),
            (i._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (i._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (i.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            e
        );
    }),
    (window.mobileAndTabletcheck = function () {
        var t,
            e = !1;
        return (
            (t = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                t
            ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    t.substr(0, 4)
                )) &&
                (e = !0),
            e
        );
    }),
    (function (f) {
        "use strict";
        f(".mobile-menu").on("click", function () {
            var t = f(this).closest(".header-menu");
            t.hasClass("open") ? (f(this).closest(".app").removeClass("fixed"), t.removeClass("open"), f(this).removeClass("mobile")) : (f(this).closest(".app").addClass("fixed"), t.addClass("open"), f(this).addClass("mobile")),
                f(".product-filter").removeClass("open"),
                f("body").find(".overlay-product").remove(),
                f("body").removeClass("stuck-mobile");
        }),
            f(window).on("resize", function () {
                767 < f(this).width() && (f(".main-content").removeClass("fixed"), f(".header-menu").removeClass("open"), f(".mobile-menu").removeClass("mobile")), f(".footer-text").offset().top, f(this).height(), f(this).scrollTop();
            });
        var n = f(".hero-button-float"),
            r = f(".hero-button-fixed");
        function s(t, e, i) {
            e < t ? (n.addClass("floating"), n.addClass("hide")) : i < t ? (n.addClass("floating"), n.removeClass("hide")) : (n.removeClass("floating"), n.find("button").removeAttr("style"));
        }
        if (0 < n.length) {
            var o = n.offset().top;
            f(window).on("scroll", function () {
                s(f(this).scrollTop(), a, o);
            });
        }
        if (0 < f(".footer-text").length) var a = f(".footer-text").offset().top - f(window).height();
        if ((0 < n.length && (o = n.offset().top), 0 < r.length)) var l = r.offset().top - 50;
        function t(t, e, i, n, r, s, o) {
            for (var a = new TimelineMax({ repeat: -1, delay: r - 1, repeatDelay: 0 }), l = 0; l <= e.length; l++) {
                0 == l && a.from(t, 1, { scale: 0, x: e[0] * n, y: i[0] * n, ease: Linear.easeNone });
                var u = 1;
                0 == l && (u = 1), (l != e.length && l != e.length && l != e.length - 1) || (u = 0), 0 < l && a.to(t, s, { x: e[l] * n, y: i[l] * n, scale: u, transformOrigin: "50% 50%", rotation: o * l, ease: Linear.easeNone });
            }
        }
        f(window).on("scroll", function () {
            var t,
                e,
                i = f(this).scrollTop();
            s(i, a, o), (e = l), a < (t = i) ? r.removeClass("show") : e < t ? r.addClass("show") : r.removeClass("show");
        }),
            t("#uiRect1", [10, -14, -21, -30, -37], [5, -8, -13, -18, -20], 1, 0.5, 1.8, 60),
            t("#uiRect2", [1, 3, 4, 5, 4], [-2, 12, 24, 34, 49], 1, 2.5, 1.8, 60),
            t("#uiRect3", [-1, 22, 35, 45, 48], [2, 4, 6, 8, 10], 1, 4.5, 1.8, 60),
            t("#uiRect4", [12, -12, -19, -28, -35], [5, 6, 8, 10, 7], 1, 6.5, 1.8, 60),
            t("#illusCircle1", [10, -10, -16, -20, -34], [10, 2, 2, 2, 2], 1, 0.5, 1.8, 0),
            t("#illusCircle2", [-2, 8, 18, 25, 36], [8, -5, -6, -3, 0], 1, 2.5, 1.8, 0),
            t("#illusCircle3", [2, 3, 4, 5, 6], [-4, 12, 30, 39, 46], 1, 4.5, 1.8, 0),
            t("#illusCircle4", [10, -10, -16, -20, -34], [10, 12, 15, 18, 20], 1, 6.5, 1.8, 0),
            t("#brandTri1", [-1, 22, 35, 45, 48], [2, 4, 6, 8, 10], 1, 0.5, 1.8, 45),
            t("#brandTri2", [10, -14, -21, -30, -37], [5, -8, -13, -18, -20], 1, 2.5, 1.8, 45),
            t("#brandTri3", [1, 3, 4, 5, 4], [-2, 12, 24, 34, 49], 1, 6.5, 1.8, 45),
            t("#brandTri4", [-2, 22, 35, 45, 48], [2, -4, -6, -8, -10], 1, 4.5, 1.8, 45),
            t("#feRect1", [13, -15, -22, -28], [10, -4, -6, -12], 1, 0.5, 1.8, 60),
            t("#feRect2", [15, -4, -6, -5, -6], [-4, 14, 23, 32, 39], 1, 6.5, 1.8, 60),
            t("#feRect3", [0, 13, 24, 32, 42], [1, 3, 6, 7, 10], 1, 2.5, 1.8, 60),
            t("#feRect4", [13, -8, -10, -16], [9, -10, -20, -28], 1, 4.5, 1.8, 60),
            t("#animPenta1", [0, 3, 4, 5, 4], [-2, 15, 24, 38, 59], 1, 0.5, 1.8, 75),
            t("#animPenta2", [-2, 12, 20, 30, 49], [10, -8, -12, -14, -16], 1, 2.5, 1.8, 75),
            t("#animPenta3", [12, -10, -23, -34, -45], [3, 8, 10, 13, 16], 1, 6.5, 1.8, 75),
            t("#animPenta4", [-2, 12, 20, 30, 49], [10, 8, 12, 14, 16], 1, 4.5, 1.8, 75),
            t("#photoPlus1", [-8, 10, 16, 27, 40], [-9, 10, 15, 24, 34], -1, 0.5, 1.8, 15),
            t("#photoPlus2", [-6, 10, 16, 27, 40], [9, -3, -4, -5, -6], 1, 2.5, 1.8, 15),
            t("#photoPlus3", [2, 3, 2, 3, 2], [2, 9, 16, 22, 28], 1, 6.5, 1.8, 15),
            t("#photoPlus4", [-8, 10, 16, 27, 40], [-12, 2, 3, 4, 5], -1, 4.5, 1.8, 15);
        var e = [
                { element: "#uiObjectPhone", time: 1, data: [{ attribute: { y: -5, scale: 1.1, rotation: 5, ease: Elastic.easeOut } }, { attribute: { y: 0, scale: 1, delay: 0.25, rotation: 0, ease: Elastic.easeOut } }] },
                { element: "#illusObjectSpooky", time: 1, data: [{ attribute: { y: 17, ease: Elastic.easeOut } }, { attribute: { delay: 0.25, y: 22, ease: Elastic.easeOut } }] },
                {
                    element: "#brandObjectText",
                    time: 1,
                    data: [
                        { attribute: { rotationY: 180, y: -3, scale: 1.25, transformOrigin: "50% 50%", ease: Elastic.easeOut } },
                        { attribute: { rotationY: 0, y: 0, delay: 0.25, scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut } },
                    ],
                },
                { element: "#feObjectArrow", time: 1, data: [{ attribute: { x: -10, opacity: 0, rotation: 0, ease: Back.easeOut } }, { attribute: { x: 0, delay: 0.25, opacity: 1, rotation: 0, ease: Elastic.easeOut } }] },
                {
                    element: "#animObjectPlay",
                    time: 1,
                    data: [
                        { attribute: { transformOrigin: "50% 50%", y: 23, x: 38, rotation: 180, scale: 1.25, ease: Elastic.easeOut } },
                        { attribute: { transformOrigin: "50% 50%", y: 22, x: 38, delay: 0.25, rotation: 0, scale: 1, ease: Elastic.easeOut } },
                    ],
                },
                { element: "#photoObjectCamera", time: 1, data: [{ attribute: { ease: Elastic.easeOut, scale: 1.25, y: 35, x: 37 } }, { attribute: { ease: Elastic.easeOut, scale: 1, delay: 0.25, y: 37, x: 37 } }] },
            ],
            u = new TimelineMax({ repeat: -1, delay: 0, repeatDelay: 0.1 });
        f.map(e, function (t) {
            var e, i, n;
            (e = t.element),
                (i = t.time),
                (n = t.data),
                f.map(n, function (t) {
                    u.to(e, i, t.attribute);
                });
        });
        var i = f(".card-error .astronaut"),
            c = f(".card-error .stars"),
            h = f(".card-error .sky");
        h.length &&
            setTimeout(function (t) {
                h.addClass("show");
            }, 2400),
            i.length &&
                setTimeout(function (t) {
                    i.addClass("floating");
                }, 1e3),
            c.length &&
                setTimeout(function (t) {
                    c.addClass("fall");
                }, 1400);
        var d,
            p,
            m,
            g,
            _,
            v,
            y = new Date(),
            b = y.getFullYear(),
            w = y.getMonth();
        (d = [
            { date: "2018-11-20", badge: !1, title: "Mawlid Al-Nabi", classname: "day-event" },
            { date: "2018-12-25", badge: !1, title: "Christmas", classname: "day-event" },
        ]),
            (m = (p = new Date(b, w)).getFullYear()),
            (g = p.getMonth()),
            f(".js-schedule-date").text(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][g] + " " + m),
            f("#scheduleCalendar").zabuto_calendar({ year: m, month: g + 1, cell_border: !1, weekstartson: 0, data: d });
        var x = f(".masonry");
        function T(e, i) {
            f(function () {
                f.get("https://api.rss2json.com/v1/api.json", { rss_url: "https://medium.com/feed/paperpillar" }, function (t) {
                    if ("ok" == t.status) {
                        var h = "";
                        (v = t.items.length),
                            (_ = t.items.slice(e, i)),
                            f.each(_, function (t, e) {
                                var i = moment(e.pubDate).format("MMM DD, YYYY"),
                                    n = e.description.indexOf("<img"),
                                    r = e.description.substring(n).indexOf("src=") + n + 5,
                                    s = e.description.substring(r).indexOf('"') + r,
                                    o = e.description.substring(r, s),
                                    a = e.description.replace(/(<([^>]+)>)/gi, ""),
                                    l = (a = a.replace("Image: Unsplash.com", "")).substr(0, 100);
                                (l = l.substr(0, Math.min(l.length, l.lastIndexOf(" ")))), (l += "...");
                                var u = e.author,
                                    c = u.replace(" ", "-").toLowerCase();
                                (h =
                                    '<div class="blog-item item"><div class="blog-image"><img class="img-fluid" alt="Blog image" src="' +
                                    o +
                                    '"></div><div class="blog-description"><a target="_blank" href="' +
                                    e.link +
                                    '" class="blog-title">' +
                                    e.title +
                                    '</a></div><div class="blog-info"><div class="media"><img class="mr-3" src="./assets/images/medium-' +
                                    c +
                                    '.png" alt="Blog image"><div class="media-body"><p class="blog-username">' +
                                    u +
                                    '</p><small class="blog-date">' +
                                    i +
                                    "</small></div></div></div></div>"),
                                    (h = f.parseHTML(h)),
                                    x.append(h).masonry("appended", h).masonry("layout");
                            });
                    }
                });
            });
        }
        x.masonry({ columnWidth: ".grid-sizer", gutter: ".gutter-sizer", itemSelector: ".item" }), f("#blogs-lists").length && T(0, 6);
        var C = 0,
            E = 6,
            S = !0;
        f(window).scroll(function () {
            var t = f(window).scrollTop();
            if (f("#blogs-lists").height() < t) {
                var e = v % 6;
                E < v && (S = !0),
                    S &&
                        (0 < e ? ((C += 6), (E += e)) : ((C += 6), (E += 6)),
                        E <= v &&
                            ((S = !1),
                            0 < !f(".loading").length && f(".blogs > .container").append("<div class='loading'></div>"),
                            setTimeout(function () {
                                f("body").find(".loading").remove(), T(C, E);
                            }, 2e3)));
            }
        });
        var k = [
            {
                url: "olio-icons",
                title: "Oliobags Icons",
                description:
                    '<p>We worked with Oliobags to create their icon set for social media use. The icons are meant to be simple and are able to represent each of their product categories! Oliobags is open for releasing these icons for free for your personal use!</p><p>Currently there are only 10 icons but this will add up in the near future to create a larger icon set.</p><p>Also check out their awesome products <a href="https://www.instagram.com/oliobags/" target="_blank">here</a>!</p>',
                image: "./assets/images/olio-icons.png",
                sourceFile: "./assets/files/olio-iconset.sketch",
                fileSize: "43kb",
            },
        ];
        if (
            (0 < f(".js-resource-list").length &&
                k.map(function (t) {
                    f(".js-resource-list").append(
                        '<div class="resources-list"><div class="resources-list-wrapper d-flex"><div class="resources-list-description d-flex align-items-center"><div class="resources-list-detail text-center text-md-left"><h3>' +
                            t.title +
                            "</h3><p>" +
                            t.description.substring(0, 100) +
                            '...</p><a class="btn btn-primary btn-rounded" href="resource-detail?s=' +
                            t.url +
                            '">View Resource</a></div></div><div class="resources-list-image" style="background-image: url(' +
                            t.image +
                            ');"></div></div></div>'
                    );
                }),
            0 < f(".js-resource-detail").length)
        ) {
            var A = getUrlVars().s,
                O = [];
            A &&
                (O = k.filter(function (t) {
                    return -1 < A.indexOf(t.url);
                })),
                0 < O.length
                    ? O.map(function (t) {
                          f(".js-resource-detail").append(
                              '<div class="resource-detail"><div class="resource-detail-image"><img src="' +
                                  t.image +
                                  '"></div><div class="resource-detail-content"><a href="resources.html"><img src="./assets/icons/arrow-left.png"> All Resources</a><h1>' +
                                  t.title +
                                  "</h1>" +
                                  t.description +
                                  '<div class="resource-detail-button"><a href="' +
                                  t.sourceFile +
                                  '" class="btn btn-primary btn-rounded" download><img src="./assets/icons/download.png"> Download <span>(' +
                                  t.fileSize +
                                  ")</span></button></div></div></div>"
                          );
                      })
                    : window.location.replace("404.html");
        }
        f("#formContact .form-control").each(function () {
            0 < f(this).val().length && (f(this).siblings("label").addClass("focus"), f(this).closest(".form-group").removeClass("error"));
        }),
            f("#formContact .form-control").on("focus", function () {
                f(this).siblings("label").addClass("focus"), f(this).closest(".form-group").removeClass("error");
            }),
            f("#formContact .form-control").on("blur", function () {
                0 === f(this).val().length && (f(this).siblings("label").removeClass("focus"), f(this).closest(".form-group").removeClass("error"));
            }),
            f("#contactModal").on("click", function (t) {
                f(t.target).closest(".modal-content").length < 1 &&
                    setTimeout(function () {
                        f("#contactModal").find(".form-group").removeClass("error");
                    }, 500);
            }),
            f("#contactModal")
                .find('[data-dismiss="modal"]')
                .on("click", function () {
                    setTimeout(function () {
                        f("#contactModal").find(".modal-success").addClass("hide"), f("#contactModal").find(".modal-form").addClass("show"), f("#contactModal").find(".form-group").removeClass("error");
                    }, 500);
                }),
            f("#name").keyup(function () {
                var t = moment(),
                    e = t.format("MMMM DD, YYYY"),
                    i = t.format("hh:mm:ss A"),
                    n = f(this).val();
                f("#subject").val("An email from " + n + " on " + e + " at " + i);
            });
        var D = f("#formContact");
        (f.support.cors = !0),
            D.submit(function (t) {
                t.preventDefault();
                var e = f(this).serialize(),
                    i = f("#name").val(),
                    n = f("#email").val(),
                    r = f("#message").val(),
                    s = grecaptcha.getResponse();
                "" == i || "" == n || "" == r || r.length < 10
                    ? f(this)
                          .find(".form-control")
                          .each(function () {
                              "" == f(this).val()
                                  ? (f(this).closest(".form-group").addClass("error"),
                                    setTimeout(function () {
                                        D.find(".form-control").closest(".form-group").removeClass("error");
                                    }, 7e3))
                                  : r.length < 8
                                  ? (f("#message").closest(".form-group").addClass("error"),
                                    setTimeout(function () {
                                        D.find(".form-control").closest(".form-group").removeClass("error");
                                    }, 7e3))
                                  : f(this).closest(".form-group").removeClass("error");
                          })
                    : 0 < s.length
                    ? (D.find(".form-control").prop("disabled", !0),
                      D.find(".lds-ring").length < 1 && (D.find(".btn").prop("disabled", !0), D.find(".btn").find("span").remove(), D.find(".btn").append('<div class="loading"></div>')),
                      setTimeout(function () {
                          f.ajax({
                              url: "https://www.enformed.io/vkju3pyg",
                              data: e,
                              success: function (t) {
                                  console.log(t);
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                          }),
                              f("#name").val("").siblings("label").removeClass("focus"),
                              f("#email").val("").siblings("label").removeClass("focus"),
                              f("#message").val("").siblings("label").removeClass("focus"),
                              D.find(".form-control").removeAttr("disabled"),
                              D.find(".btn").removeAttr("disabled"),
                              D.find(".btn").append("<span>Send Request</span>"),
                              D.find(".loading").remove(),
                              D.closest(".modal-body").find(".modal-success").removeClass("hide"),
                              D.closest(".modal-body").find(".modal-form").removeClass("show");
                      }, 2500),
                      setTimeout(function () {
                          f("#contactModal").modal("hide");
                      }, 6500),
                      setTimeout(function () {
                          f("#contactModal").find(".modal-success").addClass("hide"), f("#contactModal").find(".modal-form").addClass("show");
                      }, 7e3))
                    : (D.find(".g-recaptcha").parents(".form-group").addClass("error"),
                      setTimeout(function () {
                          D.find(".g-recaptcha").parents(".form-group").removeClass("error");
                      }, 7e3));
            }),
            0 < f("#paypal-button").length &&
                paypal.Button.render(
                    {
                        env: "sandbox",
                        client: { sandbox: "demo_sandbox_client_id", production: "demo_production_client_id" },
                        locale: "en_US",
                        style: { size: "small", color: "gold", shape: "pill" },
                        commit: !0,
                        payment: function (t, e) {
                            return e.payment.create({ transactions: [{ amount: { total: "0.01", currency: "USD" } }] });
                        },
                        onAuthorize: function (t, e) {
                            return e.payment.execute().then(function () {
                                window.alert("Thank you for your purchase!");
                            });
                        },
                    },
                    "#paypal-button"
                ),
            f(".btn-product-selected").on("click", function () {
                f(this).parents(".product-filter").hasClass("open")
                    ? (f("body").find(".overlay-product").remove(), f(".app").removeClass("stuck-mobile"))
                    : (f("body").append("<div class='overlay-product'></div>"), f("body").addClass("stuck-mobile")),
                    f(this).parents(".product-filter").toggleClass("open");
            }),
            f(document).on("click touchstart", function (t) {
                f(t.target).closest(".product-filter").length || (f("body").find(".overlay-product").remove(), f(".app").removeClass("stuck-mobile"), f(".product-filter").removeClass("open"));
            }),
            f(".btn-product-select").on("click", function () {
                var t = f(this).data("value");
                f(this).parents(".product-filter").removeClass("open"),
                    f(this).parents("ul").find(".btn").removeClass("selected"),
                    f(this).addClass("selected"),
                    f(this).parents(".product-filter").find(".btn-product-selected").text(t),
                    f("body").find(".overlay-product").remove(),
                    f("body").removeClass("stuck-mobile");
            }),
            f(".product-gallery__thumbnail a").on("click", function () {
                var t = f(this).parents(".product-gallery"),
                    e = f(this).children("img").attr("src"),
                    i = f(this).children("img").attr("alt");
                t.find("a").removeClass("active"), t.find(".product-gallery__active img").attr("src", e), t.find(".product-gallery__active img").attr("alt", i), f(this).addClass("active");
            });
    })(jQuery),
    $(document).ready(function () {
        var t = setInterval(function () {
            $(".eapps-form-element-container").length &&
                (e(),
                $("body").on("click", ".eapps-form-success-button.eapps-form-button", function () {
                    e(), $("#contactModal").modal("hide");
                }),
                clearInterval(t));
        }, 100);
        function e() {
            $("body")
                .find(".eapps-form-element-container input,.eapps-form-element-container textarea")
                .on("focus", function () {
                    $(this).parents(".eapps-form-element-wrapper").find(".eapps-form-element-label").addClass("focus"), $(this).parents(".eapps-form-element-wrapper").removeClass("error");
                }),
                $("body")
                    .find(".eapps-form-element-container input,.eapps-form-element-container textarea")
                    .each(function () {
                        0 < $(this).val().length && ($(this).parents(".eapps-form-element-wrapper").find(".eapps-form-element-label").addClass("focus"), $(this).parents(".eapps-form-element-wrapper").removeClass("error"));
                    }),
                $("body")
                    .find(".eapps-form-element-container input,.eapps-form-element-container textarea")
                    .on("blur", function () {
                        0 === $(this).val().length && ($(this).parents(".eapps-form-element-wrapper").find(".eapps-form-element-label").removeClass("focus"), $(this).parents(".eapps-form-element-wrapper").removeClass("error"));
                    }),
                $("#contactModal").on("click", function (t) {
                    $(t.target).closest(".modal-content").length < 1 &&
                        setTimeout(function () {
                            $("#contactModal").find(".form-group").removeClass("error");
                        }, 500);
                }),
                $("body")
                    // .find(".eapps-form-fieldset")
                    .end();
        }
    });

