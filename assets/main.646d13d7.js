import {_ as st, o as ot, c as ct, r as it, s as at, u as F, a as M, b as qe, i as V, n as lt, d as Ve, h as ze, p as ae, e as ut, w as ft, f as ht} from "./index.3fd2f073.js";
const dt = {};
function pt(e, t) {
    const n = it("router-view");
    return ot(),
    ct(n)
}
const mt = st(dt, [["render", pt]])
  , gt = "modulepreload"
  , vt = function(e) {
    return "/" + e
}
  , we = {}
  , Se = function(t, n, r) {
    if (!n || n.length === 0)
        return t();
    const s = document.getElementsByTagName("link");
    return Promise.all(n.map(i=>{
        if (i = vt(i),
        i in we)
            return;
        we[i] = !0;
        const d = i.endsWith(".css")
          , m = d ? '[rel="stylesheet"]' : "";
        if (!!r)
            for (let o = s.length - 1; o >= 0; o--) {
                const l = s[o];
                if (l.href === i && (!d || l.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${i}"]${m}`))
            return;
        const u = document.createElement("link");
        if (u.rel = d ? "stylesheet" : gt,
        d || (u.as = "script",
        u.crossOrigin = ""),
        u.href = i,
        document.head.appendChild(u),
        d)
            return new Promise((o,l)=>{
                u.addEventListener("load", o),
                u.addEventListener("error", ()=>l(new Error(`Unable to preload CSS for ${i}`)))
            }
            )
    }
    )).then(()=>t())
};
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const q = typeof window < "u";
function yt(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const S = Object.assign;
function le(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = B(s) ? s.map(e) : e(s)
    }
    return n
}
const W = ()=>{}
  , B = Array.isArray
  , Rt = /\/$/
  , Et = e=>e.replace(Rt, "");
function ue(e, t, n="/") {
    let r, s = {}, i = "", d = "";
    const m = t.indexOf("#");
    let a = t.indexOf("?");
    return m < a && m >= 0 && (a = -1),
    a > -1 && (r = t.slice(0, a),
    i = t.slice(a + 1, m > -1 ? m : t.length),
    s = e(i)),
    m > -1 && (r = r || t.slice(0, m),
    d = t.slice(m, t.length)),
    r = _t(r != null ? r : t, n),
    {
        fullPath: r + (i && "?") + i + d,
        path: r,
        query: s,
        hash: d
    }
}
function Pt(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function _e(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function wt(e, t, n) {
    const r = t.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && z(t.matched[r], n.matched[s]) && Ge(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function z(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ge(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!St(e[n], t[n]))
            return !1;
    return !0
}
function St(e, t) {
    return B(e) ? ke(e, t) : B(t) ? ke(t, e) : e === t
}
function ke(e, t) {
    return B(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function _t(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/");
    let s = n.length - 1, i, d;
    for (i = 0; i < r.length; i++)
        if (d = r[i],
        d !== ".")
            if (d === "..")
                s > 1 && s--;
            else
                break;
    return n.slice(0, s).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/")
}
var X;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(X || (X = {}));
var Y;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Y || (Y = {}));
function kt(e) {
    if (!e)
        if (q) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Et(e)
}
const Ct = /^[^#]+#/;
function bt(e, t) {
    return e.replace(Ct, "#") + t
}
function At(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ee = ()=>({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function Ot(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        t = At(s, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function Ce(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const he = new Map;
function xt(e, t) {
    he.set(e, t)
}
function Lt(e) {
    const t = he.get(e);
    return he.delete(e),
    t
}
let Mt = ()=>location.protocol + "//" + location.host;
function Ue(e, t) {
    const {pathname: n, search: r, hash: s} = t
      , i = e.indexOf("#");
    if (i > -1) {
        let m = s.includes(e.slice(i)) ? e.slice(i).length : 1
          , a = s.slice(m);
        return a[0] !== "/" && (a = "/" + a),
        _e(a, "")
    }
    return _e(n, e) + r + s
}
function Bt(e, t, n, r) {
    let s = []
      , i = []
      , d = null;
    const m = ({state: f})=>{
        const g = Ue(e, location)
          , R = n.value
          , C = t.value;
        let k = 0;
        if (f) {
            if (n.value = g,
            t.value = f,
            d && d === R) {
                d = null;
                return
            }
            k = C ? f.position - C.position : 0
        } else
            r(g);
        s.forEach(E=>{
            E(n.value, R, {
                delta: k,
                type: X.pop,
                direction: k ? k > 0 ? Y.forward : Y.back : Y.unknown
            })
        }
        )
    }
    ;
    function a() {
        d = n.value
    }
    function u(f) {
        s.push(f);
        const g = ()=>{
            const R = s.indexOf(f);
            R > -1 && s.splice(R, 1)
        }
        ;
        return i.push(g),
        g
    }
    function o() {
        const {history: f} = window;
        !f.state || f.replaceState(S({}, f.state, {
            scroll: ee()
        }), "")
    }
    function l() {
        for (const f of i)
            f();
        i = [],
        window.removeEventListener("popstate", m),
        window.removeEventListener("beforeunload", o)
    }
    return window.addEventListener("popstate", m),
    window.addEventListener("beforeunload", o),
    {
        pauseListeners: a,
        listen: u,
        destroy: l
    }
}
function be(e, t, n, r=!1, s=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? ee() : null
    }
}
function Nt(e) {
    const {history: t, location: n} = window
      , r = {
        value: Ue(e, n)
    }
      , s = {
        value: t.state
    };
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(a, u, o) {
        const l = e.indexOf("#")
          , f = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + a : Mt() + e + a;
        try {
            t[o ? "replaceState" : "pushState"](u, "", f),
            s.value = u
        } catch (g) {
            console.error(g),
            n[o ? "replace" : "assign"](f)
        }
    }
    function d(a, u) {
        const o = S({}, t.state, be(s.value.back, a, s.value.forward, !0), u, {
            position: s.value.position
        });
        i(a, o, !0),
        r.value = a
    }
    function m(a, u) {
        const o = S({}, s.value, t.state, {
            forward: a,
            scroll: ee()
        });
        i(o.current, o, !0);
        const l = S({}, be(r.value, a, null), {
            position: o.position + 1
        }, u);
        i(a, l, !1),
        r.value = a
    }
    return {
        location: r,
        state: s,
        push: m,
        replace: d
    }
}
function $t(e) {
    e = kt(e);
    const t = Nt(e)
      , n = Bt(e, t.state, t.location, t.replace);
    function r(i, d=!0) {
        d || n.pauseListeners(),
        history.go(i)
    }
    const s = S({
        location: "",
        base: e,
        go: r,
        createHref: bt.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    s
}
function It(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function De(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const I = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , Ke = Symbol("");
var Ae;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Ae || (Ae = {}));
function G(e, t) {
    return S(new Error, {
        type: e,
        [Ke]: !0
    }, t)
}
function $(e, t) {
    return e instanceof Error && Ke in e && (t == null || !!(e.type & t))
}
const Oe = "[^/]+?"
  , Tt = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , jt = /[.+*?^${}()[\]/\\]/g;
function Ht(e, t) {
    const n = S({}, Tt, t)
      , r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const u of e) {
        const o = u.length ? [] : [90];
        n.strict && !u.length && (s += "/");
        for (let l = 0; l < u.length; l++) {
            const f = u[l];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0)
                l || (s += "/"),
                s += f.value.replace(jt, "\\$&"),
                g += 40;
            else if (f.type === 1) {
                const {value: R, repeatable: C, optional: k, regexp: E} = f;
                i.push({
                    name: R,
                    repeatable: C,
                    optional: k
                });
                const w = E || Oe;
                if (w !== Oe) {
                    g += 10;
                    try {
                        new RegExp(`(${w})`)
                    } catch (L) {
                        throw new Error(`Invalid custom RegExp for param "${R}" (${w}): ` + L.message)
                    }
                }
                let O = C ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
                l || (O = k && u.length < 2 ? `(?:/${O})` : "/" + O),
                k && (O += "?"),
                s += O,
                g += 20,
                k && (g += -8),
                C && (g += -20),
                w === ".*" && (g += -50)
            }
            o.push(g)
        }
        r.push(o)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const d = new RegExp(s,n.sensitive ? "" : "i");
    function m(u) {
        const o = u.match(d)
          , l = {};
        if (!o)
            return null;
        for (let f = 1; f < o.length; f++) {
            const g = o[f] || ""
              , R = i[f - 1];
            l[R.name] = g && R.repeatable ? g.split("/") : g
        }
        return l
    }
    function a(u) {
        let o = ""
          , l = !1;
        for (const f of e) {
            (!l || !o.endsWith("/")) && (o += "/"),
            l = !1;
            for (const g of f)
                if (g.type === 0)
                    o += g.value;
                else if (g.type === 1) {
                    const {value: R, repeatable: C, optional: k} = g
                      , E = R in u ? u[R] : "";
                    if (B(E) && !C)
                        throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
                    const w = B(E) ? E.join("/") : E;
                    if (!w)
                        if (k)
                            f.length < 2 && (o.endsWith("/") ? o = o.slice(0, -1) : l = !0);
                        else
                            throw new Error(`Missing required param "${R}"`);
                    o += w
                }
        }
        return o || "/"
    }
    return {
        re: d,
        score: r,
        keys: i,
        parse: m,
        stringify: a
    }
}
function qt(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}
function Vt(e, t) {
    let n = 0;
    const r = e.score
      , s = t.score;
    for (; n < r.length && n < s.length; ) {
        const i = qt(r[n], s[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (xe(r))
            return 1;
        if (xe(s))
            return -1
    }
    return s.length - r.length
}
function xe(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const zt = {
    type: 0,
    value: ""
}
  , Gt = /[a-zA-Z0-9_]/;
function Ut(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[zt]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(g) {
        throw new Error(`ERR (${n})/"${u}": ${g}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let i;
    function d() {
        i && s.push(i),
        i = []
    }
    let m = 0, a, u = "", o = "";
    function l() {
        !u || (n === 0 ? i.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
            type: 1,
            value: u,
            regexp: o,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function f() {
        u += a
    }
    for (; m < e.length; ) {
        if (a = e[m++],
        a === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            a === "/" ? (u && l(),
            d()) : a === ":" ? (l(),
            n = 1) : f();
            break;
        case 4:
            f(),
            n = r;
            break;
        case 1:
            a === "(" ? n = 2 : Gt.test(a) ? f() : (l(),
            n = 0,
            a !== "*" && a !== "?" && a !== "+" && m--);
            break;
        case 2:
            a === ")" ? o[o.length - 1] == "\\" ? o = o.slice(0, -1) + a : n = 3 : o += a;
            break;
        case 3:
            l(),
            n = 0,
            a !== "*" && a !== "?" && a !== "+" && m--,
            o = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    l(),
    d(),
    s
}
function Dt(e, t, n) {
    const r = Ht(Ut(e.path), n)
      , s = S(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
    s
}
function Kt(e, t) {
    const n = []
      , r = new Map;
    t = Be({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function s(o) {
        return r.get(o)
    }
    function i(o, l, f) {
        const g = !f
          , R = Qt(o);
        R.aliasOf = f && f.record;
        const C = Be(t, o)
          , k = [R];
        if ("alias"in o) {
            const O = typeof o.alias == "string" ? [o.alias] : o.alias;
            for (const L of O)
                k.push(S({}, R, {
                    components: f ? f.record.components : R.components,
                    path: L,
                    aliasOf: f ? f.record : R
                }))
        }
        let E, w;
        for (const O of k) {
            const {path: L} = O;
            if (l && L[0] !== "/") {
                const j = l.record.path
                  , N = j[j.length - 1] === "/" ? "" : "/";
                O.path = l.record.path + (L && N + L)
            }
            if (E = Dt(O, l, C),
            f ? f.alias.push(E) : (w = w || E,
            w !== E && w.alias.push(E),
            g && o.name && !Me(E) && d(o.name)),
            R.children) {
                const j = R.children;
                for (let N = 0; N < j.length; N++)
                    i(j[N], E, f && f.children[N])
            }
            f = f || E,
            (E.record.components && Object.keys(E.record.components).length || E.record.name || E.record.redirect) && a(E)
        }
        return w ? ()=>{
            d(w)
        }
        : W
    }
    function d(o) {
        if (De(o)) {
            const l = r.get(o);
            l && (r.delete(o),
            n.splice(n.indexOf(l), 1),
            l.children.forEach(d),
            l.alias.forEach(d))
        } else {
            const l = n.indexOf(o);
            l > -1 && (n.splice(l, 1),
            o.record.name && r.delete(o.record.name),
            o.children.forEach(d),
            o.alias.forEach(d))
        }
    }
    function m() {
        return n
    }
    function a(o) {
        let l = 0;
        for (; l < n.length && Vt(o, n[l]) >= 0 && (o.record.path !== n[l].record.path || !Qe(o, n[l])); )
            l++;
        n.splice(l, 0, o),
        o.record.name && !Me(o) && r.set(o.record.name, o)
    }
    function u(o, l) {
        let f, g = {}, R, C;
        if ("name"in o && o.name) {
            if (f = r.get(o.name),
            !f)
                throw G(1, {
                    location: o
                });
            C = f.record.name,
            g = S(Le(l.params, f.keys.filter(w=>!w.optional).map(w=>w.name)), o.params && Le(o.params, f.keys.map(w=>w.name))),
            R = f.stringify(g)
        } else if ("path"in o)
            R = o.path,
            f = n.find(w=>w.re.test(R)),
            f && (g = f.parse(R),
            C = f.record.name);
        else {
            if (f = l.name ? r.get(l.name) : n.find(w=>w.re.test(l.path)),
            !f)
                throw G(1, {
                    location: o,
                    currentLocation: l
                });
            C = f.record.name,
            g = S({}, l.params, o.params),
            R = f.stringify(g)
        }
        const k = [];
        let E = f;
        for (; E; )
            k.unshift(E.record),
            E = E.parent;
        return {
            name: C,
            path: R,
            params: g,
            matched: k,
            meta: Wt(k)
        }
    }
    return e.forEach(o=>i(o)),
    {
        addRoute: i,
        resolve: u,
        removeRoute: d,
        getRoutes: m,
        getRecordMatcher: s
    }
}
function Le(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function Qt(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Ft(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function Ft(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "boolean" ? n : n[r];
    return t
}
function Me(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Wt(e) {
    return e.reduce((t,n)=>S(t, n.meta), {})
}
function Be(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Qe(e, t) {
    return t.children.some(n=>n === e || Qe(e, n))
}
const Fe = /#/g
  , Yt = /&/g
  , Xt = /\//g
  , Zt = /=/g
  , Jt = /\?/g
  , We = /\+/g
  , en = /%5B/g
  , tn = /%5D/g
  , Ye = /%5E/g
  , nn = /%60/g
  , Xe = /%7B/g
  , rn = /%7C/g
  , Ze = /%7D/g
  , sn = /%20/g;
function me(e) {
    return encodeURI("" + e).replace(rn, "|").replace(en, "[").replace(tn, "]")
}
function on(e) {
    return me(e).replace(Xe, "{").replace(Ze, "}").replace(Ye, "^")
}
function de(e) {
    return me(e).replace(We, "%2B").replace(sn, "+").replace(Fe, "%23").replace(Yt, "%26").replace(nn, "`").replace(Xe, "{").replace(Ze, "}").replace(Ye, "^")
}
function cn(e) {
    return de(e).replace(Zt, "%3D")
}
function an(e) {
    return me(e).replace(Fe, "%23").replace(Jt, "%3F")
}
function ln(e) {
    return e == null ? "" : an(e).replace(Xt, "%2F")
}
function J(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
function un(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const i = r[s].replace(We, " ")
          , d = i.indexOf("=")
          , m = J(d < 0 ? i : i.slice(0, d))
          , a = d < 0 ? null : J(i.slice(d + 1));
        if (m in t) {
            let u = t[m];
            B(u) || (u = t[m] = [u]),
            u.push(a)
        } else
            t[m] = a
    }
    return t
}
function Ne(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = cn(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (B(r) ? r.map(i=>i && de(i)) : [r && de(r)]).forEach(i=>{
            i !== void 0 && (t += (t.length ? "&" : "") + n,
            i != null && (t += "=" + i))
        }
        )
    }
    return t
}
function fn(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = B(r) ? r.map(s=>s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const hn = Symbol("")
  , $e = Symbol("")
  , te = Symbol("")
  , Je = Symbol("")
  , pe = Symbol("");
function Q() {
    let e = [];
    function t(r) {
        return e.push(r),
        ()=>{
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e,
        reset: n
    }
}
function T(e, t, n, r, s) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return ()=>new Promise((d,m)=>{
        const a = l=>{
            l === !1 ? m(G(4, {
                from: n,
                to: t
            })) : l instanceof Error ? m(l) : It(l) ? m(G(2, {
                from: t,
                to: l
            })) : (i && r.enterCallbacks[s] === i && typeof l == "function" && i.push(l),
            d())
        }
          , u = e.call(r && r.instances[s], t, n, a);
        let o = Promise.resolve(u);
        e.length < 3 && (o = o.then(a)),
        o.catch(l=>m(l))
    }
    )
}
function fe(e, t, n, r) {
    const s = [];
    for (const i of e)
        for (const d in i.components) {
            let m = i.components[d];
            if (!(t !== "beforeRouteEnter" && !i.instances[d]))
                if (dn(m)) {
                    const u = (m.__vccOpts || m)[t];
                    u && s.push(T(u, n, r, i, d))
                } else {
                    let a = m();
                    s.push(()=>a.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${i.path}"`));
                        const o = yt(u) ? u.default : u;
                        i.components[d] = o;
                        const f = (o.__vccOpts || o)[t];
                        return f && T(f, n, r, i, d)()
                    }
                    ))
                }
        }
    return s
}
function dn(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Ie(e) {
    const t = V(te)
      , n = V(Je)
      , r = M(()=>t.resolve(F(e.to)))
      , s = M(()=>{
        const {matched: a} = r.value
          , {length: u} = a
          , o = a[u - 1]
          , l = n.matched;
        if (!o || !l.length)
            return -1;
        const f = l.findIndex(z.bind(null, o));
        if (f > -1)
            return f;
        const g = Te(a[u - 2]);
        return u > 1 && Te(o) === g && l[l.length - 1].path !== g ? l.findIndex(z.bind(null, a[u - 2])) : f
    }
    )
      , i = M(()=>s.value > -1 && vn(n.params, r.value.params))
      , d = M(()=>s.value > -1 && s.value === n.matched.length - 1 && Ge(n.params, r.value.params));
    function m(a={}) {
        return gn(a) ? t[F(e.replace) ? "replace" : "push"](F(e.to)).catch(W) : Promise.resolve()
    }
    return {
        route: r,
        href: M(()=>r.value.href),
        isActive: i,
        isExactActive: d,
        navigate: m
    }
}
const pn = Ve({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Ie,
    setup(e, {slots: t}) {
        const n = qe(Ie(e))
          , {options: r} = V(te)
          , s = M(()=>({
            [je(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [je(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const i = t.default && t.default(n);
            return e.custom ? i : ze("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, i)
        }
    }
})
  , mn = pn;
function gn(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function vn(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!B(s) || s.length !== r.length || r.some((i,d)=>i !== s[d]))
            return !1
    }
    return !0
}
function Te(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const je = (e,t,n)=>e != null ? e : t != null ? t : n
  , yn = Ve({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = V(pe)
          , s = M(()=>e.route || r.value)
          , i = V($e, 0)
          , d = M(()=>{
            let u = F(i);
            const {matched: o} = s.value;
            let l;
            for (; (l = o[u]) && !l.components; )
                u++;
            return u
        }
        )
          , m = M(()=>s.value.matched[d.value]);
        ae($e, M(()=>d.value + 1)),
        ae(hn, m),
        ae(pe, s);
        const a = ut();
        return ft(()=>[a.value, m.value, e.name], ([u,o,l],[f,g,R])=>{
            o && (o.instances[l] = u,
            g && g !== o && u && u === f && (o.leaveGuards.size || (o.leaveGuards = g.leaveGuards),
            o.updateGuards.size || (o.updateGuards = g.updateGuards))),
            u && o && (!g || !z(o, g) || !f) && (o.enterCallbacks[l] || []).forEach(C=>C(u))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const u = s.value
              , o = e.name
              , l = m.value
              , f = l && l.components[o];
            if (!f)
                return He(n.default, {
                    Component: f,
                    route: u
                });
            const g = l.props[o]
              , R = g ? g === !0 ? u.params : typeof g == "function" ? g(u) : g : null
              , k = ze(f, S({}, R, t, {
                onVnodeUnmounted: E=>{
                    E.component.isUnmounted && (l.instances[o] = null)
                }
                ,
                ref: a
            }));
            return He(n.default, {
                Component: k,
                route: u
            }) || k
        }
    }
});
function He(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Rn = yn;
function En(e) {
    const t = Kt(e.routes, e)
      , n = e.parseQuery || un
      , r = e.stringifyQuery || Ne
      , s = e.history
      , i = Q()
      , d = Q()
      , m = Q()
      , a = at(I);
    let u = I;
    q && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const o = le.bind(null, c=>"" + c)
      , l = le.bind(null, ln)
      , f = le.bind(null, J);
    function g(c, p) {
        let h, v;
        return De(c) ? (h = t.getRecordMatcher(c),
        v = p) : v = c,
        t.addRoute(v, h)
    }
    function R(c) {
        const p = t.getRecordMatcher(c);
        p && t.removeRoute(p)
    }
    function C() {
        return t.getRoutes().map(c=>c.record)
    }
    function k(c) {
        return !!t.getRecordMatcher(c)
    }
    function E(c, p) {
        if (p = S({}, p || a.value),
        typeof c == "string") {
            const y = ue(n, c, p.path)
              , A = t.resolve({
                path: y.path
            }, p)
              , K = s.createHref(y.fullPath);
            return S(y, A, {
                params: f(A.params),
                hash: J(y.hash),
                redirectedFrom: void 0,
                href: K
            })
        }
        let h;
        if ("path"in c)
            h = S({}, c, {
                path: ue(n, c.path, p.path).path
            });
        else {
            const y = S({}, c.params);
            for (const A in y)
                y[A] == null && delete y[A];
            h = S({}, c, {
                params: l(c.params)
            }),
            p.params = l(p.params)
        }
        const v = t.resolve(h, p)
          , _ = c.hash || "";
        v.params = o(f(v.params));
        const b = Pt(r, S({}, c, {
            hash: on(_),
            path: v.path
        }))
          , P = s.createHref(b);
        return S({
            fullPath: b,
            hash: _,
            query: r === Ne ? fn(c.query) : c.query || {}
        }, v, {
            redirectedFrom: void 0,
            href: P
        })
    }
    function w(c) {
        return typeof c == "string" ? ue(n, c, a.value.path) : S({}, c)
    }
    function O(c, p) {
        if (u !== c)
            return G(8, {
                from: p,
                to: c
            })
    }
    function L(c) {
        return U(c)
    }
    function j(c) {
        return L(S(w(c), {
            replace: !0
        }))
    }
    function N(c) {
        const p = c.matched[c.matched.length - 1];
        if (p && p.redirect) {
            const {redirect: h} = p;
            let v = typeof h == "function" ? h(c) : h;
            return typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = w(v) : {
                path: v
            },
            v.params = {}),
            S({
                query: c.query,
                hash: c.hash,
                params: "path"in v ? {} : c.params
            }, v)
        }
    }
    function U(c, p) {
        const h = u = E(c)
          , v = a.value
          , _ = c.state
          , b = c.force
          , P = c.replace === !0
          , y = N(h);
        if (y)
            return U(S(w(y), {
                state: typeof y == "object" ? S({}, _, y.state) : _,
                force: b,
                replace: P
            }), p || h);
        const A = h;
        A.redirectedFrom = p;
        let K;
        return !b && wt(r, v, h) && (K = G(16, {
            to: A,
            from: v
        }),
        Ee(v, v, !0, !1)),
        (K ? Promise.resolve(K) : ge(A, v)).catch(x=>$(x) ? $(x, 2) ? x : se(x) : re(x, A, v)).then(x=>{
            if (x) {
                if ($(x, 2))
                    return U(S({
                        replace: P
                    }, w(x.to), {
                        state: typeof x.to == "object" ? S({}, _, x.to.state) : _,
                        force: b
                    }), p || A)
            } else
                x = ye(A, v, !0, P, _);
            return ve(A, v, x),
            x
        }
        )
    }
    function tt(c, p) {
        const h = O(c, p);
        return h ? Promise.reject(h) : Promise.resolve()
    }
    function ge(c, p) {
        let h;
        const [v,_,b] = Pn(c, p);
        h = fe(v.reverse(), "beforeRouteLeave", c, p);
        for (const y of v)
            y.leaveGuards.forEach(A=>{
                h.push(T(A, c, p))
            }
            );
        const P = tt.bind(null, c, p);
        return h.push(P),
        H(h).then(()=>{
            h = [];
            for (const y of i.list())
                h.push(T(y, c, p));
            return h.push(P),
            H(h)
        }
        ).then(()=>{
            h = fe(_, "beforeRouteUpdate", c, p);
            for (const y of _)
                y.updateGuards.forEach(A=>{
                    h.push(T(A, c, p))
                }
                );
            return h.push(P),
            H(h)
        }
        ).then(()=>{
            h = [];
            for (const y of c.matched)
                if (y.beforeEnter && !p.matched.includes(y))
                    if (B(y.beforeEnter))
                        for (const A of y.beforeEnter)
                            h.push(T(A, c, p));
                    else
                        h.push(T(y.beforeEnter, c, p));
            return h.push(P),
            H(h)
        }
        ).then(()=>(c.matched.forEach(y=>y.enterCallbacks = {}),
        h = fe(b, "beforeRouteEnter", c, p),
        h.push(P),
        H(h))).then(()=>{
            h = [];
            for (const y of d.list())
                h.push(T(y, c, p));
            return h.push(P),
            H(h)
        }
        ).catch(y=>$(y, 8) ? y : Promise.reject(y))
    }
    function ve(c, p, h) {
        for (const v of m.list())
            v(c, p, h)
    }
    function ye(c, p, h, v, _) {
        const b = O(c, p);
        if (b)
            return b;
        const P = p === I
          , y = q ? history.state : {};
        h && (v || P ? s.replace(c.fullPath, S({
            scroll: P && y && y.scroll
        }, _)) : s.push(c.fullPath, _)),
        a.value = c,
        Ee(c, p, h, P),
        se()
    }
    let D;
    function nt() {
        D || (D = s.listen((c,p,h)=>{
            if (!Pe.listening)
                return;
            const v = E(c)
              , _ = N(v);
            if (_) {
                U(S(_, {
                    replace: !0
                }), v).catch(W);
                return
            }
            u = v;
            const b = a.value;
            q && xt(Ce(b.fullPath, h.delta), ee()),
            ge(v, b).catch(P=>$(P, 12) ? P : $(P, 2) ? (U(P.to, v).then(y=>{
                $(y, 20) && !h.delta && h.type === X.pop && s.go(-1, !1)
            }
            ).catch(W),
            Promise.reject()) : (h.delta && s.go(-h.delta, !1),
            re(P, v, b))).then(P=>{
                P = P || ye(v, b, !1),
                P && (h.delta && !$(P, 8) ? s.go(-h.delta, !1) : h.type === X.pop && $(P, 20) && s.go(-1, !1)),
                ve(v, b, P)
            }
            ).catch(W)
        }
        ))
    }
    let ne = Q(), Re = Q(), Z;
    function re(c, p, h) {
        se(c);
        const v = Re.list();
        return v.length ? v.forEach(_=>_(c, p, h)) : console.error(c),
        Promise.reject(c)
    }
    function rt() {
        return Z && a.value !== I ? Promise.resolve() : new Promise((c,p)=>{
            ne.add([c, p])
        }
        )
    }
    function se(c) {
        return Z || (Z = !c,
        nt(),
        ne.list().forEach(([p,h])=>c ? h(c) : p()),
        ne.reset()),
        c
    }
    function Ee(c, p, h, v) {
        const {scrollBehavior: _} = e;
        if (!q || !_)
            return Promise.resolve();
        const b = !h && Lt(Ce(c.fullPath, 0)) || (v || !h) && history.state && history.state.scroll || null;
        return lt().then(()=>_(c, p, b)).then(P=>P && Ot(P)).catch(P=>re(P, c, p))
    }
    const oe = c=>s.go(c);
    let ce;
    const ie = new Set
      , Pe = {
        currentRoute: a,
        listening: !0,
        addRoute: g,
        removeRoute: R,
        hasRoute: k,
        getRoutes: C,
        resolve: E,
        options: e,
        push: L,
        replace: j,
        go: oe,
        back: ()=>oe(-1),
        forward: ()=>oe(1),
        beforeEach: i.add,
        beforeResolve: d.add,
        afterEach: m.add,
        onError: Re.add,
        isReady: rt,
        install(c) {
            const p = this;
            c.component("RouterLink", mn),
            c.component("RouterView", Rn),
            c.config.globalProperties.$router = p,
            Object.defineProperty(c.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>F(a)
            }),
            q && !ce && a.value === I && (ce = !0,
            L(s.location).catch(_=>{}
            ));
            const h = {};
            for (const _ in I)
                h[_] = M(()=>a.value[_]);
            c.provide(te, p),
            c.provide(Je, qe(h)),
            c.provide(pe, a);
            const v = c.unmount;
            ie.add(c),
            c.unmount = function() {
                ie.delete(c),
                ie.size < 1 && (u = I,
                D && D(),
                D = null,
                a.value = I,
                ce = !1,
                Z = !1),
                v()
            }
        }
    };
    return Pe
}
function H(e) {
    return e.reduce((t,n)=>t.then(()=>n()), Promise.resolve())
}
function Pn(e, t) {
    const n = []
      , r = []
      , s = []
      , i = Math.max(t.matched.length, e.matched.length);
    for (let d = 0; d < i; d++) {
        const m = t.matched[d];
        m && (e.matched.find(u=>z(u, m)) ? r.push(m) : n.push(m));
        const a = e.matched[d];
        a && (t.matched.find(u=>z(u, a)) || s.push(a))
    }
    return [n, r, s]
}
function kn() {
    return V(te)
}
const wn = [{
    path: "/",
    name: "home",
    component: ()=>Se(()=>import("./home.1beacee1.js"), ["./assets/home.1beacee1.js", "./assets/index.3fd2f073.js", "./assets/index.7c0a7270.css", "./assets/logo152.3ecda335.js", "./assets/home.7d3a7dad.css"])
}, {
    path: "/iframe",
    name: "iframeView",
    component: ()=>Se(()=>import("./iframe.bfd38d1a.js"), ["./assets/iframe.bfd38d1a.js", "./assets/index.3fd2f073.js", "./assets/index.7c0a7270.css", "./assets/iframe.a814f366.css"])
}]
  , Sn = En({
    routes: wn,
    history: $t(),
    scrollBehavior() {
        return {
            top: 0
        }
    }
})
  , et = ht(mt);
et.use(Sn);
et.mount("#app");
export {kn as u};
