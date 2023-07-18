import {e as Ot, w as bn, d as yn, g as ge, T as fi, B as Tn, C as wn, _ as Cn, b as Dn, D as Sn, o as ne, j as oe, k as y, E as Os, G as On, q as Ns, F as Nn, y as In, v as Ln, z as Rn, A as Mn} from "./index.3fd2f073.js";
import {e as xn, c as kn, n as Is, u as Bn, t as Ls, f as Pn, g as Qn, i as Vn, h as Un, w as Yn, _ as Fn} from "./logo152.3ecda335.js";
import {u as Kn} from "./main.646d13d7.js";
var Hn = typeof window < "u", ae, xe;
function Wn() {
    if (!ae && (ae = Ot(0),
    xe = Ot(0),
    Hn)) {
        const s = ()=>{
            ae.value = window.innerWidth,
            xe.value = window.innerHeight
        }
        ;
        s(),
        window.addEventListener("resize", s, {
            passive: !0
        }),
        window.addEventListener("orientationchange", s, {
            passive: !0
        })
    }
    return {
        width: ae,
        height: xe
    }
}
xn();
const $n = s=>s.stopPropagation();
function Gn(s, t) {
    (typeof s.cancelable != "boolean" || s.cancelable) && s.preventDefault(),
    t && $n(s)
}
Wn();
function zn(s) {
    const t = Ot(!1);
    return bn(s, e=>{
        e && (t.value = e)
    }
    , {
        immediate: !0
    }),
    e=>()=>t.value ? e() : null
}
const [jn,qn] = kn("overlay")
  , Zn = {
    show: Boolean,
    zIndex: Is,
    duration: Is,
    className: Bn,
    lockScroll: Ls,
    lazyRender: Ls,
    customStyle: Object
};
var Xn = yn({
    name: jn,
    props: Zn,
    setup(s, {slots: t}) {
        const e = zn(()=>s.show || !s.lazyRender)
          , i = o=>{
            Gn(o, !0)
        }
          , n = e(()=>{
            var o;
            const a = Pn(Qn(s.zIndex), s.customStyle);
            return Vn(s.duration) && (a.animationDuration = `${s.duration}s`),
            Tn(ge("div", {
                style: a,
                class: [qn(), s.className],
                onTouchmove: s.lockScroll ? i : Un
            }, [(o = t.default) == null ? void 0 : o.call(t)]), [[wn, s.show]])
        }
        );
        return ()=>ge(fi, {
            name: "van-fade",
            appear: !0
        }, {
            default: n
        })
    }
});
const Jn = Yn(Xn)
  , to = "data:image/png;base64,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"
  , eo = "/assets/756507512330.4f506f67.jpg"
  , so = "/assets/271122995993.d35ec64b.jpg"
  , io = "/assets/858863789122.13ebec88.jpg"
  , no = "/assets/190924240275.35c0386f.jpg"
  , W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAMAAADlYkD4AAAAhFBMVEUAAABZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnulZnukrZZEGAAAAK3RSTlMA87yAJzLwKw/itJGbVkQU+tDJwIp2SAfs3NRkIBnn2K1uXTvDoYVqpHlKDMRJWQAAAdlJREFUOMvlVVmCgjAMpYLsyi6LgIO79v73mwQSW5A5wbwPiC+vzdaioXC4VX14MVaw80UdOAvyKUcE3/Lr5HnMyJskFEt5yp69Rt6RSBN8unP5D3JXDx5VqTJEMp+iHGfyHD1no8QoWyZbJEMy8lmpnOIb3gdmT5gMGsOigIg3MkIwuHkB2DYmt0W3pekz+J2gcdYqcySvtcH40eTHUcWSF7ENt90Hw9PaU9pjrQBsT0bsHrP5xLQWvdlQwqqbJ6rcjRdDdHF9y9lwMw9gn2gwFJPwAOLJCef6/Ha0SW/oqIGJqOqrXpOHxgs36Volv6CMdzy2nUrnzqOCtXXAid5RxidXyDgxI+rBm0ZJABF3N5oaSLDhhG7g3dFRYQzUNxwtpUrYY1E1JWANphlUPARsb8ilFKZ5i8c52YsmuhjQx9VcGMPCIRuCRqiAEdxJb84cXSzFQs/Dd1g/Q7qqL3D4q3p/VW/+qd/8T72/2k+8D8V3Pyu6XQrhNK+OvzwKCegz/m4xXIgYl9P1Ep3u2QIxnmKhLbAa3jcAw3OUZy+AwMsMSDaEVEq+JlGMZsqeROJ62NCWS+xowy+HwHBtMyft9yeDfu5pHP5/8gShz4ZIq/2R9ezx/DMwv22fYzU4pKQuAAAAAElFTkSuQmCC"
  , oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAFVBMVEWhw/9DdOA3bd+QtPh6n/BjjOlLeuMOAjPLAAAA00lEQVRIx+2Tyw6CMBBFq0TXtgmu7fBYV9E9Kh8galwr//8RoohDYGZI3KgJZ3sP02l6UQM/i+fkOAfwnZAXuiTmjZ1+EnL5xFaCOfAD5BG2FgxzQhmJZ4z1mwW3grxEjoJPCjcU5qSgG/RO6N3hs1usUAhIYYrClW4DvoVT8paRohnVwkwxFFUeK75S+Ng0G7AGTmLvs7NT38VLsizhl1hf4HELiPb011vQLyByRH7UDWzaEaocjfaMpW4R0l1ATEr/dkhAF5arvu0Kpldwg/Bvwh2b5DtCXZbABQAAAABJRU5ErkJggg=="
  , ao = "data:image/jpeg;base64,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"
  , ro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAiXv////L5+SFxsDu9/b6/fz3+/u03djy+fnp9fTc7+3I5uOr2NSWzsglmo4Nj4Hl8/HT6+nN6OV7wrtTr6YxoJT8/v7P6efE5OC84N253tuf0s2MysSIyMFxvbVoubFctKtGqp+/4d6b0cuBxL5uvLQ9pZo/qGXuAAAA2klEQVRYw+3TSY6DMBBA0fqNbWYIBDKPPd3/iN1KIiSziiu7yG/NR7KrLFEURdGz1lmWvtIPK8ha0UsBDqJnADp9n4Cx2Kto9ZB2UGn7XwtDDQtRqqCQxsFJdBawFylho+tPYEeRb3CNaGygf8yy1vSNg6P820IhCl9gblt8htWg+EEB2+kyFS/qApynceYSbAcmuauBZWjfGjylBDrgc6OE6SD/mFjYh/VX621PH7wKlb+/R+AiIXL/2toMdiH9cj64TzASoJx//wMkz/ejg3R+JtYSRVH05v4ATV4HMQ8lOHMAAAAASUVORK5CYII="
  , lo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUAAAAWFhbhefvMAPseHyBAQkQTFBPmfP8NDQxGR0nifvrRAP8oKCngd/vqf//ih/vjf/tGSEoiPhnmif/SBv9NTlEdHiCqsKCTAAAArklEQVRYw+3WawuCUAzG8S3zlJaXrt//o3Y5z4gWxxgqHmT/d43tB4GIJDGi4fRe6cA6ASl16MA6AX3Ag+m9/WksUDmQBSBZAVQ6MAsQYqwKKAnolCCHujPtYu0BtRio/0Iyx9oVvy+0idUFqjH4AeK4+d5rOgcmBPoC9QD/AdjrKBWrkg8SIysgbyQHsgCW/0JxIAfgM7Al34ljgcqBFxDeWQHcPYEjum9t4ez2ABlrEdKqKHlTAAAAAElFTkSuQmCC"
  , co = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEV+V8L///+1n9zWyez7+v759/39/f+/rOH28/vx7fnt5/fm3vTb0e7Txeq6pt/z7/rq4/Xj2/Le1PDYzO3Qwum/q+Gym9usktilidWdgNGObMqGYcbv6fjKuubJuOXGteTBruGpj9aihdOZes+Wds7MvOeultlyBhHpAAABEElEQVRYw+2U2a7CMAxE7dLktkApS1l72Zf//0TGqYD2BeHwhjxSpXqkHEWjcchkMplMb1U5aNX1duItPgT0GJp1vb54iQaQdaylVwN43raGrAcMWk6daQE5s1+/nD1z5lSAMUIrXs4YoaYqQP+KWzyNlWePTwP43zjm0cOYSSI6QE5T5snDQISHCysBN8/ppZkP0oqTDlCG7lXNPGDu0VEHQA+3SCKMa0R4ooUO4IgkxrA9RShVogOkRBLjVMYy1HqkB2CB3CacLDHN9QCJcUs0aTr5FwHYoZF0TrEVkYDasV9WEmEkQF6BYY5KRwOOaKO0MhqANYaKLwB7xu/5C0CdyU7GA0KMSRtgMplMP607PpAJlvCDDMoAAAAASUVORK5CYII="
  , uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEWrR7z////++/7ozO379vzHhNL+/f79+P368vvt1/HlxuvUod3Ce8/05fbx3/Ts1PDq0e/Ql9nKitW/c8zgu+fetuXYquDVpN7Tndy4ZceyVsH58vriwOjcsOPMkNevUL/36/jWpt+6aMi2X8VeEh0GAAAA4ElEQVRYw+2Ux5LDIBBE9ZBAQtnSKlhOG/7/HxdvMOXj4JPLvBN96K4CpieJRCKRl0Gv1Xkf7B5shkM1x7CMUvFPUQX4e0C1adm9Xw8fYv8b0Oif4ymHvJa+nnL+rz+xOtHJL6CGm7JQCAMysF7NgBb5d8Ds5eDkTvyEo5eXuq432QyASh4hhSwGCAIEvyCbg89HAlZg8VIbY2STuOV3/VuEXXDYuxXQy9t4NtDeuqSgD/hIuv1vNQ+Qj9KASwsU6XQ6tgZUwFbdLGFb2VM1iiuHckwCGZdpmnUSiUQiz8E3QxwHXozqJhsAAAAASUVORK5CYII="
  , ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAe1BMVEUzaR7///99n3D7/fu+z7fx9fDA0bqjvJrn7uXi6t/P3MqxxqmatY/9/v34+/j1+PTk6+G2yq/U4NCtw6SpwKCXsoyMq4BzmGVpkVpQfj7s8erE1L7D07y7zbSmvp2GpnmAonJii1LS3s3G1cCSr4dXhEZJeTZEdTE9cClxIEqhAAAA5UlEQVRYw+3UyRKCMBBF0TwCAYzIDM6A8/9/oUmJ4LaTjZY5u170LYZUmOM4zr/Y9PWlfxivlzGHsorLm8m6F2Gy7ej7TQogWIh9EeinaKj7a7XGc6bdD1ylNsRAASThe5AADsQPwIHFPEZARgsIgLfz6AMpLRAD0ecD5XlOCwT6DWysgJ1VgAPiWwKVPxoMAxlGnnXA8C80S8XXAZtzEOoA+SRaBQSQeDYBjwOFTYCdAMhpOuoA/UZK9uM1VOuhZTTd606UR3mOoPiMqs0wSytmIIz5eKuLgZm51pUsl2vmOI7zE553TQh97jdDRAAAAABJRU5ErkJggg=="
  , fo = "data:image/jpeg;base64,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"
  , po = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAHlBMVEVca8D////5+v3N0uz3+Pzt7/jx8/ro6vbFy+m+xOaQTrSRAAAANklEQVRIx2MYBaNgEIMWFyhww6HAUBAKhHAomBoaGuooCCTC8VhjCNY9qmBUwXBSMApGAY0BAFDnDLQie8GvAAAAAElFTkSuQmCC"
  , Ao = "data:image/jpeg;base64,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"
  , mo = "/assets/WHEEL-01@2x.e2678276.png?time=20221215";
var R = "top"
  , k = "bottom"
  , B = "right"
  , M = "left"
  , ye = "auto"
  , Bt = [R, k, B, M]
  , gt = "start"
  , Nt = "end"
  , pi = "clippingParents"
  , es = "viewport"
  , wt = "popper"
  , Ai = "reference"
  , ze = Bt.reduce(function(s, t) {
    return s.concat([t + "-" + gt, t + "-" + Nt])
}, [])
  , ss = [].concat(Bt, [ye]).reduce(function(s, t) {
    return s.concat([t, t + "-" + gt, t + "-" + Nt])
}, [])
  , mi = "beforeRead"
  , gi = "read"
  , vi = "afterRead"
  , _i = "beforeMain"
  , Ei = "main"
  , bi = "afterMain"
  , yi = "beforeWrite"
  , Ti = "write"
  , wi = "afterWrite"
  , Ci = [mi, gi, vi, _i, Ei, bi, yi, Ti, wi];
function z(s) {
    return s ? (s.nodeName || "").toLowerCase() : null
}
function V(s) {
    if (s == null)
        return window;
    if (s.toString() !== "[object Window]") {
        var t = s.ownerDocument;
        return t && t.defaultView || window
    }
    return s
}
function vt(s) {
    var t = V(s).Element;
    return s instanceof t || s instanceof Element
}
function P(s) {
    var t = V(s).HTMLElement;
    return s instanceof t || s instanceof HTMLElement
}
function is(s) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = V(s).ShadowRoot;
    return s instanceof t || s instanceof ShadowRoot
}
function go(s) {
    var t = s.state;
    Object.keys(t.elements).forEach(function(e) {
        var i = t.styles[e] || {}
          , n = t.attributes[e] || {}
          , o = t.elements[e];
        !P(o) || !z(o) || (Object.assign(o.style, i),
        Object.keys(n).forEach(function(a) {
            var r = n[a];
            r === !1 ? o.removeAttribute(a) : o.setAttribute(a, r === !0 ? "" : r)
        }))
    })
}
function vo(s) {
    var t = s.state
      , e = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, e.popper),
    t.styles = e,
    t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
    function() {
        Object.keys(t.elements).forEach(function(i) {
            var n = t.elements[i]
              , o = t.attributes[i] || {}
              , a = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i])
              , r = a.reduce(function(c, u) {
                return c[u] = "",
                c
            }, {});
            !P(n) || !z(n) || (Object.assign(n.style, r),
            Object.keys(o).forEach(function(c) {
                n.removeAttribute(c)
            }))
        })
    }
}
const ns = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: go,
    effect: vo,
    requires: ["computeStyles"]
};
function $(s) {
    return s.split("-")[0]
}
var mt = Math.max
  , ve = Math.min
  , It = Math.round;
function je() {
    var s = navigator.userAgentData;
    return s != null && s.brands ? s.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function Di() {
    return !/^((?!chrome|android).)*safari/i.test(je())
}
function Lt(s, t, e) {
    t === void 0 && (t = !1),
    e === void 0 && (e = !1);
    var i = s.getBoundingClientRect()
      , n = 1
      , o = 1;
    t && P(s) && (n = s.offsetWidth > 0 && It(i.width) / s.offsetWidth || 1,
    o = s.offsetHeight > 0 && It(i.height) / s.offsetHeight || 1);
    var a = vt(s) ? V(s) : window
      , r = a.visualViewport
      , c = !Di() && e
      , u = (i.left + (c && r ? r.offsetLeft : 0)) / n
      , d = (i.top + (c && r ? r.offsetTop : 0)) / o
      , f = i.width / n
      , m = i.height / o;
    return {
        width: f,
        height: m,
        top: d,
        right: u + f,
        bottom: d + m,
        left: u,
        x: u,
        y: d
    }
}
function os(s) {
    var t = Lt(s)
      , e = s.offsetWidth
      , i = s.offsetHeight;
    return Math.abs(t.width - e) <= 1 && (e = t.width),
    Math.abs(t.height - i) <= 1 && (i = t.height),
    {
        x: s.offsetLeft,
        y: s.offsetTop,
        width: e,
        height: i
    }
}
function Si(s, t) {
    var e = t.getRootNode && t.getRootNode();
    if (s.contains(t))
        return !0;
    if (e && is(e)) {
        var i = t;
        do {
            if (i && s.isSameNode(i))
                return !0;
            i = i.parentNode || i.host
        } while (i)
    }
    return !1
}
function J(s) {
    return V(s).getComputedStyle(s)
}
function _o(s) {
    return ["table", "td", "th"].indexOf(z(s)) >= 0
}
function at(s) {
    return ((vt(s) ? s.ownerDocument : s.document) || window.document).documentElement
}
function Te(s) {
    return z(s) === "html" ? s : s.assignedSlot || s.parentNode || (is(s) ? s.host : null) || at(s)
}
function Rs(s) {
    return !P(s) || J(s).position === "fixed" ? null : s.offsetParent
}
function Eo(s) {
    var t = /firefox/i.test(je())
      , e = /Trident/i.test(je());
    if (e && P(s)) {
        var i = J(s);
        if (i.position === "fixed")
            return null
    }
    var n = Te(s);
    for (is(n) && (n = n.host); P(n) && ["html", "body"].indexOf(z(n)) < 0; ) {
        var o = J(n);
        if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
            return n;
        n = n.parentNode
    }
    return null
}
function zt(s) {
    for (var t = V(s), e = Rs(s); e && _o(e) && J(e).position === "static"; )
        e = Rs(e);
    return e && (z(e) === "html" || z(e) === "body" && J(e).position === "static") ? t : e || Eo(s) || t
}
function as(s) {
    return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y"
}
function Wt(s, t, e) {
    return mt(s, ve(t, e))
}
function bo(s, t, e) {
    var i = Wt(s, t, e);
    return i > e ? e : i
}
function Oi() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function Ni(s) {
    return Object.assign({}, Oi(), s)
}
function Ii(s, t) {
    return t.reduce(function(e, i) {
        return e[i] = s,
        e
    }, {})
}
var yo = function(t, e) {
    return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
        placement: e.placement
    })) : t,
    Ni(typeof t != "number" ? t : Ii(t, Bt))
};
function To(s) {
    var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, a = e.modifiersData.popperOffsets, r = $(e.placement), c = as(r), u = [M, B].indexOf(r) >= 0, d = u ? "height" : "width";
    if (!(!o || !a)) {
        var f = yo(n.padding, e)
          , m = os(o)
          , h = c === "y" ? R : M
          , b = c === "y" ? k : B
          , A = e.rects.reference[d] + e.rects.reference[c] - a[c] - e.rects.popper[d]
          , v = a[c] - e.rects.reference[c]
          , T = zt(o)
          , C = T ? c === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0
          , D = A / 2 - v / 2
          , g = f[h]
          , _ = C - m[d] - f[b]
          , E = C / 2 - m[d] / 2 + D
          , w = Wt(g, E, _)
          , N = c;
        e.modifiersData[i] = (t = {},
        t[N] = w,
        t.centerOffset = w - E,
        t)
    }
}
function wo(s) {
    var t = s.state
      , e = s.options
      , i = e.element
      , n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n),
    !n) || !Si(t.elements.popper, n) || (t.elements.arrow = n))
}
const Li = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: To,
    effect: wo,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};
function Rt(s) {
    return s.split("-")[1]
}
var Co = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function Do(s) {
    var t = s.x
      , e = s.y
      , i = window
      , n = i.devicePixelRatio || 1;
    return {
        x: It(t * n) / n || 0,
        y: It(e * n) / n || 0
    }
}
function Ms(s) {
    var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, a = s.offsets, r = s.position, c = s.gpuAcceleration, u = s.adaptive, d = s.roundOffsets, f = s.isFixed, m = a.x, h = m === void 0 ? 0 : m, b = a.y, A = b === void 0 ? 0 : b, v = typeof d == "function" ? d({
        x: h,
        y: A
    }) : {
        x: h,
        y: A
    };
    h = v.x,
    A = v.y;
    var T = a.hasOwnProperty("x")
      , C = a.hasOwnProperty("y")
      , D = M
      , g = R
      , _ = window;
    if (u) {
        var E = zt(e)
          , w = "clientHeight"
          , N = "clientWidth";
        if (E === V(e) && (E = at(e),
        J(E).position !== "static" && r === "absolute" && (w = "scrollHeight",
        N = "scrollWidth")),
        E = E,
        n === R || (n === M || n === B) && o === Nt) {
            g = k;
            var O = f && E === _ && _.visualViewport ? _.visualViewport.height : E[w];
            A -= O - i.height,
            A *= c ? 1 : -1
        }
        if (n === M || (n === R || n === k) && o === Nt) {
            D = B;
            var S = f && E === _ && _.visualViewport ? _.visualViewport.width : E[N];
            h -= S - i.width,
            h *= c ? 1 : -1
        }
    }
    var I = Object.assign({
        position: r
    }, u && Co)
      , Y = d === !0 ? Do({
        x: h,
        y: A
    }) : {
        x: h,
        y: A
    };
    if (h = Y.x,
    A = Y.y,
    c) {
        var L;
        return Object.assign({}, I, (L = {},
        L[g] = C ? "0" : "",
        L[D] = T ? "0" : "",
        L.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + A + "px)" : "translate3d(" + h + "px, " + A + "px, 0)",
        L))
    }
    return Object.assign({}, I, (t = {},
    t[g] = C ? A + "px" : "",
    t[D] = T ? h + "px" : "",
    t.transform = "",
    t))
}
function So(s) {
    var t = s.state
      , e = s.options
      , i = e.gpuAcceleration
      , n = i === void 0 ? !0 : i
      , o = e.adaptive
      , a = o === void 0 ? !0 : o
      , r = e.roundOffsets
      , c = r === void 0 ? !0 : r
      , u = {
        placement: $(t.placement),
        variation: Rt(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: n,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ms(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: a,
        roundOffsets: c
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ms(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: c
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const rs = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: So,
    data: {}
};
var re = {
    passive: !0
};
function Oo(s) {
    var t = s.state
      , e = s.instance
      , i = s.options
      , n = i.scroll
      , o = n === void 0 ? !0 : n
      , a = i.resize
      , r = a === void 0 ? !0 : a
      , c = V(t.elements.popper)
      , u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return o && u.forEach(function(d) {
        d.addEventListener("scroll", e.update, re)
    }),
    r && c.addEventListener("resize", e.update, re),
    function() {
        o && u.forEach(function(d) {
            d.removeEventListener("scroll", e.update, re)
        }),
        r && c.removeEventListener("resize", e.update, re)
    }
}
const ls = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: Oo,
    data: {}
};
var No = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function pe(s) {
    return s.replace(/left|right|bottom|top/g, function(t) {
        return No[t]
    })
}
var Io = {
    start: "end",
    end: "start"
};
function xs(s) {
    return s.replace(/start|end/g, function(t) {
        return Io[t]
    })
}
function cs(s) {
    var t = V(s)
      , e = t.pageXOffset
      , i = t.pageYOffset;
    return {
        scrollLeft: e,
        scrollTop: i
    }
}
function ds(s) {
    return Lt(at(s)).left + cs(s).scrollLeft
}
function Lo(s, t) {
    var e = V(s)
      , i = at(s)
      , n = e.visualViewport
      , o = i.clientWidth
      , a = i.clientHeight
      , r = 0
      , c = 0;
    if (n) {
        o = n.width,
        a = n.height;
        var u = Di();
        (u || !u && t === "fixed") && (r = n.offsetLeft,
        c = n.offsetTop)
    }
    return {
        width: o,
        height: a,
        x: r + ds(s),
        y: c
    }
}
function Ro(s) {
    var t, e = at(s), i = cs(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = mt(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), a = mt(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), r = -i.scrollLeft + ds(s), c = -i.scrollTop;
    return J(n || e).direction === "rtl" && (r += mt(e.clientWidth, n ? n.clientWidth : 0) - o),
    {
        width: o,
        height: a,
        x: r,
        y: c
    }
}
function us(s) {
    var t = J(s)
      , e = t.overflow
      , i = t.overflowX
      , n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(e + n + i)
}
function Ri(s) {
    return ["html", "body", "#document"].indexOf(z(s)) >= 0 ? s.ownerDocument.body : P(s) && us(s) ? s : Ri(Te(s))
}
function $t(s, t) {
    var e;
    t === void 0 && (t = []);
    var i = Ri(s)
      , n = i === ((e = s.ownerDocument) == null ? void 0 : e.body)
      , o = V(i)
      , a = n ? [o].concat(o.visualViewport || [], us(i) ? i : []) : i
      , r = t.concat(a);
    return n ? r : r.concat($t(Te(a)))
}
function qe(s) {
    return Object.assign({}, s, {
        left: s.x,
        top: s.y,
        right: s.x + s.width,
        bottom: s.y + s.height
    })
}
function Mo(s, t) {
    var e = Lt(s, !1, t === "fixed");
    return e.top = e.top + s.clientTop,
    e.left = e.left + s.clientLeft,
    e.bottom = e.top + s.clientHeight,
    e.right = e.left + s.clientWidth,
    e.width = s.clientWidth,
    e.height = s.clientHeight,
    e.x = e.left,
    e.y = e.top,
    e
}
function ks(s, t, e) {
    return t === es ? qe(Lo(s, e)) : vt(t) ? Mo(t, e) : qe(Ro(at(s)))
}
function xo(s) {
    var t = $t(Te(s))
      , e = ["absolute", "fixed"].indexOf(J(s).position) >= 0
      , i = e && P(s) ? zt(s) : s;
    return vt(i) ? t.filter(function(n) {
        return vt(n) && Si(n, i) && z(n) !== "body"
    }) : []
}
function ko(s, t, e, i) {
    var n = t === "clippingParents" ? xo(s) : [].concat(t)
      , o = [].concat(n, [e])
      , a = o[0]
      , r = o.reduce(function(c, u) {
        var d = ks(s, u, i);
        return c.top = mt(d.top, c.top),
        c.right = ve(d.right, c.right),
        c.bottom = ve(d.bottom, c.bottom),
        c.left = mt(d.left, c.left),
        c
    }, ks(s, a, i));
    return r.width = r.right - r.left,
    r.height = r.bottom - r.top,
    r.x = r.left,
    r.y = r.top,
    r
}
function Mi(s) {
    var t = s.reference, e = s.element, i = s.placement, n = i ? $(i) : null, o = i ? Rt(i) : null, a = t.x + t.width / 2 - e.width / 2, r = t.y + t.height / 2 - e.height / 2, c;
    switch (n) {
    case R:
        c = {
            x: a,
            y: t.y - e.height
        };
        break;
    case k:
        c = {
            x: a,
            y: t.y + t.height
        };
        break;
    case B:
        c = {
            x: t.x + t.width,
            y: r
        };
        break;
    case M:
        c = {
            x: t.x - e.width,
            y: r
        };
        break;
    default:
        c = {
            x: t.x,
            y: t.y
        }
    }
    var u = n ? as(n) : null;
    if (u != null) {
        var d = u === "y" ? "height" : "width";
        switch (o) {
        case gt:
            c[u] = c[u] - (t[d] / 2 - e[d] / 2);
            break;
        case Nt:
            c[u] = c[u] + (t[d] / 2 - e[d] / 2);
            break
        }
    }
    return c
}
function Mt(s, t) {
    t === void 0 && (t = {});
    var e = t
      , i = e.placement
      , n = i === void 0 ? s.placement : i
      , o = e.strategy
      , a = o === void 0 ? s.strategy : o
      , r = e.boundary
      , c = r === void 0 ? pi : r
      , u = e.rootBoundary
      , d = u === void 0 ? es : u
      , f = e.elementContext
      , m = f === void 0 ? wt : f
      , h = e.altBoundary
      , b = h === void 0 ? !1 : h
      , A = e.padding
      , v = A === void 0 ? 0 : A
      , T = Ni(typeof v != "number" ? v : Ii(v, Bt))
      , C = m === wt ? Ai : wt
      , D = s.rects.popper
      , g = s.elements[b ? C : m]
      , _ = ko(vt(g) ? g : g.contextElement || at(s.elements.popper), c, d, a)
      , E = Lt(s.elements.reference)
      , w = Mi({
        reference: E,
        element: D,
        strategy: "absolute",
        placement: n
    })
      , N = qe(Object.assign({}, D, w))
      , O = m === wt ? N : E
      , S = {
        top: _.top - O.top + T.top,
        bottom: O.bottom - _.bottom + T.bottom,
        left: _.left - O.left + T.left,
        right: O.right - _.right + T.right
    }
      , I = s.modifiersData.offset;
    if (m === wt && I) {
        var Y = I[n];
        Object.keys(S).forEach(function(L) {
            var ct = [B, k].indexOf(L) >= 0 ? 1 : -1
              , dt = [R, k].indexOf(L) >= 0 ? "y" : "x";
            S[L] += Y[dt] * ct
        })
    }
    return S
}
function Bo(s, t) {
    t === void 0 && (t = {});
    var e = t
      , i = e.placement
      , n = e.boundary
      , o = e.rootBoundary
      , a = e.padding
      , r = e.flipVariations
      , c = e.allowedAutoPlacements
      , u = c === void 0 ? ss : c
      , d = Rt(i)
      , f = d ? r ? ze : ze.filter(function(b) {
        return Rt(b) === d
    }) : Bt
      , m = f.filter(function(b) {
        return u.indexOf(b) >= 0
    });
    m.length === 0 && (m = f);
    var h = m.reduce(function(b, A) {
        return b[A] = Mt(s, {
            placement: A,
            boundary: n,
            rootBoundary: o,
            padding: a
        })[$(A)],
        b
    }, {});
    return Object.keys(h).sort(function(b, A) {
        return h[b] - h[A]
    })
}
function Po(s) {
    if ($(s) === ye)
        return [];
    var t = pe(s);
    return [xs(s), t, xs(t)]
}
function Qo(s) {
    var t = s.state
      , e = s.options
      , i = s.name;
    if (!t.modifiersData[i]._skip) {
        for (var n = e.mainAxis, o = n === void 0 ? !0 : n, a = e.altAxis, r = a === void 0 ? !0 : a, c = e.fallbackPlacements, u = e.padding, d = e.boundary, f = e.rootBoundary, m = e.altBoundary, h = e.flipVariations, b = h === void 0 ? !0 : h, A = e.allowedAutoPlacements, v = t.options.placement, T = $(v), C = T === v, D = c || (C || !b ? [pe(v)] : Po(v)), g = [v].concat(D).reduce(function(bt, et) {
            return bt.concat($(et) === ye ? Bo(t, {
                placement: et,
                boundary: d,
                rootBoundary: f,
                padding: u,
                flipVariations: b,
                allowedAutoPlacements: A
            }) : et)
        }, []), _ = t.rects.reference, E = t.rects.popper, w = new Map, N = !0, O = g[0], S = 0; S < g.length; S++) {
            var I = g[S]
              , Y = $(I)
              , L = Rt(I) === gt
              , ct = [R, k].indexOf(Y) >= 0
              , dt = ct ? "width" : "height"
              , x = Mt(t, {
                placement: I,
                boundary: d,
                rootBoundary: f,
                altBoundary: m,
                padding: u
            })
              , F = ct ? L ? B : M : L ? k : R;
            _[dt] > E[dt] && (F = pe(F));
            var Jt = pe(F)
              , ut = [];
            if (o && ut.push(x[Y] <= 0),
            r && ut.push(x[F] <= 0, x[Jt] <= 0),
            ut.every(function(bt) {
                return bt
            })) {
                O = I,
                N = !1;
                break
            }
            w.set(I, ut)
        }
        if (N)
            for (var te = b ? 3 : 1, Ie = function(et) {
                var Ft = g.find(function(se) {
                    var ht = w.get(se);
                    if (ht)
                        return ht.slice(0, et).every(function(Le) {
                            return Le
                        })
                });
                if (Ft)
                    return O = Ft,
                    "break"
            }, Yt = te; Yt > 0; Yt--) {
                var ee = Ie(Yt);
                if (ee === "break")
                    break
            }
        t.placement !== O && (t.modifiersData[i]._skip = !0,
        t.placement = O,
        t.reset = !0)
    }
}
const xi = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Qo,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function Bs(s, t, e) {
    return e === void 0 && (e = {
        x: 0,
        y: 0
    }),
    {
        top: s.top - t.height - e.y,
        right: s.right - t.width + e.x,
        bottom: s.bottom - t.height + e.y,
        left: s.left - t.width - e.x
    }
}
function Ps(s) {
    return [R, B, k, M].some(function(t) {
        return s[t] >= 0
    })
}
function Vo(s) {
    var t = s.state
      , e = s.name
      , i = t.rects.reference
      , n = t.rects.popper
      , o = t.modifiersData.preventOverflow
      , a = Mt(t, {
        elementContext: "reference"
    })
      , r = Mt(t, {
        altBoundary: !0
    })
      , c = Bs(a, i)
      , u = Bs(r, n, o)
      , d = Ps(c)
      , f = Ps(u);
    t.modifiersData[e] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: u,
        isReferenceHidden: d,
        hasPopperEscaped: f
    },
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": f
    })
}
const ki = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Vo
};
function Uo(s, t, e) {
    var i = $(s)
      , n = [M, R].indexOf(i) >= 0 ? -1 : 1
      , o = typeof e == "function" ? e(Object.assign({}, t, {
        placement: s
    })) : e
      , a = o[0]
      , r = o[1];
    return a = a || 0,
    r = (r || 0) * n,
    [M, B].indexOf(i) >= 0 ? {
        x: r,
        y: a
    } : {
        x: a,
        y: r
    }
}
function Yo(s) {
    var t = s.state
      , e = s.options
      , i = s.name
      , n = e.offset
      , o = n === void 0 ? [0, 0] : n
      , a = ss.reduce(function(d, f) {
        return d[f] = Uo(f, t.rects, o),
        d
    }, {})
      , r = a[t.placement]
      , c = r.x
      , u = r.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c,
    t.modifiersData.popperOffsets.y += u),
    t.modifiersData[i] = a
}
const Bi = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Yo
};
function Fo(s) {
    var t = s.state
      , e = s.name;
    t.modifiersData[e] = Mi({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const hs = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Fo,
    data: {}
};
function Ko(s) {
    return s === "x" ? "y" : "x"
}
function Ho(s) {
    var t = s.state
      , e = s.options
      , i = s.name
      , n = e.mainAxis
      , o = n === void 0 ? !0 : n
      , a = e.altAxis
      , r = a === void 0 ? !1 : a
      , c = e.boundary
      , u = e.rootBoundary
      , d = e.altBoundary
      , f = e.padding
      , m = e.tether
      , h = m === void 0 ? !0 : m
      , b = e.tetherOffset
      , A = b === void 0 ? 0 : b
      , v = Mt(t, {
        boundary: c,
        rootBoundary: u,
        padding: f,
        altBoundary: d
    })
      , T = $(t.placement)
      , C = Rt(t.placement)
      , D = !C
      , g = as(T)
      , _ = Ko(g)
      , E = t.modifiersData.popperOffsets
      , w = t.rects.reference
      , N = t.rects.popper
      , O = typeof A == "function" ? A(Object.assign({}, t.rects, {
        placement: t.placement
    })) : A
      , S = typeof O == "number" ? {
        mainAxis: O,
        altAxis: O
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, O)
      , I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
      , Y = {
        x: 0,
        y: 0
    };
    if (!!E) {
        if (o) {
            var L, ct = g === "y" ? R : M, dt = g === "y" ? k : B, x = g === "y" ? "height" : "width", F = E[g], Jt = F + v[ct], ut = F - v[dt], te = h ? -N[x] / 2 : 0, Ie = C === gt ? w[x] : N[x], Yt = C === gt ? -N[x] : -w[x], ee = t.elements.arrow, bt = h && ee ? os(ee) : {
                width: 0,
                height: 0
            }, et = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Oi(), Ft = et[ct], se = et[dt], ht = Wt(0, w[x], bt[x]), Le = D ? w[x] / 2 - te - ht - Ft - S.mainAxis : Ie - ht - Ft - S.mainAxis, An = D ? -w[x] / 2 + te + ht + se + S.mainAxis : Yt + ht + se + S.mainAxis, Re = t.elements.arrow && zt(t.elements.arrow), mn = Re ? g === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, _s = (L = I == null ? void 0 : I[g]) != null ? L : 0, gn = F + Le - _s - mn, vn = F + An - _s, Es = Wt(h ? ve(Jt, gn) : Jt, F, h ? mt(ut, vn) : ut);
            E[g] = Es,
            Y[g] = Es - F
        }
        if (r) {
            var bs, _n = g === "x" ? R : M, En = g === "x" ? k : B, ft = E[_], ie = _ === "y" ? "height" : "width", ys = ft + v[_n], Ts = ft - v[En], Me = [R, M].indexOf(T) !== -1, ws = (bs = I == null ? void 0 : I[_]) != null ? bs : 0, Cs = Me ? ys : ft - w[ie] - N[ie] - ws + S.altAxis, Ds = Me ? ft + w[ie] + N[ie] - ws - S.altAxis : Ts, Ss = h && Me ? bo(Cs, ft, Ds) : Wt(h ? Cs : ys, ft, h ? Ds : Ts);
            E[_] = Ss,
            Y[_] = Ss - ft
        }
        t.modifiersData[i] = Y
    }
}
const Pi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Ho,
    requiresIfExists: ["offset"]
};
function Wo(s) {
    return {
        scrollLeft: s.scrollLeft,
        scrollTop: s.scrollTop
    }
}
function $o(s) {
    return s === V(s) || !P(s) ? cs(s) : Wo(s)
}
function Go(s) {
    var t = s.getBoundingClientRect()
      , e = It(t.width) / s.offsetWidth || 1
      , i = It(t.height) / s.offsetHeight || 1;
    return e !== 1 || i !== 1
}
function zo(s, t, e) {
    e === void 0 && (e = !1);
    var i = P(t)
      , n = P(t) && Go(t)
      , o = at(t)
      , a = Lt(s, n, e)
      , r = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = {
        x: 0,
        y: 0
    };
    return (i || !i && !e) && ((z(t) !== "body" || us(o)) && (r = $o(t)),
    P(t) ? (c = Lt(t, !0),
    c.x += t.clientLeft,
    c.y += t.clientTop) : o && (c.x = ds(o))),
    {
        x: a.left + r.scrollLeft - c.x,
        y: a.top + r.scrollTop - c.y,
        width: a.width,
        height: a.height
    }
}
function jo(s) {
    var t = new Map
      , e = new Set
      , i = [];
    s.forEach(function(o) {
        t.set(o.name, o)
    });
    function n(o) {
        e.add(o.name);
        var a = [].concat(o.requires || [], o.requiresIfExists || []);
        a.forEach(function(r) {
            if (!e.has(r)) {
                var c = t.get(r);
                c && n(c)
            }
        }),
        i.push(o)
    }
    return s.forEach(function(o) {
        e.has(o.name) || n(o)
    }),
    i
}
function qo(s) {
    var t = jo(s);
    return Ci.reduce(function(e, i) {
        return e.concat(t.filter(function(n) {
            return n.phase === i
        }))
    }, [])
}
function Zo(s) {
    var t;
    return function() {
        return t || (t = new Promise(function(e) {
            Promise.resolve().then(function() {
                t = void 0,
                e(s())
            })
        }
        )),
        t
    }
}
function Xo(s) {
    var t = s.reduce(function(e, i) {
        var n = e[i.name];
        return e[i.name] = n ? Object.assign({}, n, i, {
            options: Object.assign({}, n.options, i.options),
            data: Object.assign({}, n.data, i.data)
        }) : i,
        e
    }, {});
    return Object.keys(t).map(function(e) {
        return t[e]
    })
}
var Qs = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Vs() {
    for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
        t[e] = arguments[e];
    return !t.some(function(i) {
        return !(i && typeof i.getBoundingClientRect == "function")
    })
}
function we(s) {
    s === void 0 && (s = {});
    var t = s
      , e = t.defaultModifiers
      , i = e === void 0 ? [] : e
      , n = t.defaultOptions
      , o = n === void 0 ? Qs : n;
    return function(r, c, u) {
        u === void 0 && (u = o);
        var d = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Qs, o),
            modifiersData: {},
            elements: {
                reference: r,
                popper: c
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , m = !1
          , h = {
            state: d,
            setOptions: function(T) {
                var C = typeof T == "function" ? T(d.options) : T;
                A(),
                d.options = Object.assign({}, o, d.options, C),
                d.scrollParents = {
                    reference: vt(r) ? $t(r) : r.contextElement ? $t(r.contextElement) : [],
                    popper: $t(c)
                };
                var D = qo(Xo([].concat(i, d.options.modifiers)));
                return d.orderedModifiers = D.filter(function(g) {
                    return g.enabled
                }),
                b(),
                h.update()
            },
            forceUpdate: function() {
                if (!m) {
                    var T = d.elements
                      , C = T.reference
                      , D = T.popper;
                    if (!!Vs(C, D)) {
                        d.rects = {
                            reference: zo(C, zt(D), d.options.strategy === "fixed"),
                            popper: os(D)
                        },
                        d.reset = !1,
                        d.placement = d.options.placement,
                        d.orderedModifiers.forEach(function(S) {
                            return d.modifiersData[S.name] = Object.assign({}, S.data)
                        });
                        for (var g = 0; g < d.orderedModifiers.length; g++) {
                            if (d.reset === !0) {
                                d.reset = !1,
                                g = -1;
                                continue
                            }
                            var _ = d.orderedModifiers[g]
                              , E = _.fn
                              , w = _.options
                              , N = w === void 0 ? {} : w
                              , O = _.name;
                            typeof E == "function" && (d = E({
                                state: d,
                                options: N,
                                name: O,
                                instance: h
                            }) || d)
                        }
                    }
                }
            },
            update: Zo(function() {
                return new Promise(function(v) {
                    h.forceUpdate(),
                    v(d)
                }
                )
            }),
            destroy: function() {
                A(),
                m = !0
            }
        };
        if (!Vs(r, c))
            return h;
        h.setOptions(u).then(function(v) {
            !m && u.onFirstUpdate && u.onFirstUpdate(v)
        });
        function b() {
            d.orderedModifiers.forEach(function(v) {
                var T = v.name
                  , C = v.options
                  , D = C === void 0 ? {} : C
                  , g = v.effect;
                if (typeof g == "function") {
                    var _ = g({
                        state: d,
                        name: T,
                        instance: h,
                        options: D
                    })
                      , E = function() {};
                    f.push(_ || E)
                }
            })
        }
        function A() {
            f.forEach(function(v) {
                return v()
            }),
            f = []
        }
        return h
    }
}
var Jo = we()
  , ta = [ls, hs, rs, ns]
  , ea = we({
    defaultModifiers: ta
})
  , sa = [ls, hs, rs, ns, Bi, xi, Pi, Li, ki]
  , fs = we({
    defaultModifiers: sa
});
const Qi = Object.freeze(Object.defineProperty({
    __proto__: null,
    popperGenerator: we,
    detectOverflow: Mt,
    createPopperBase: Jo,
    createPopper: fs,
    createPopperLite: ea,
    top: R,
    bottom: k,
    right: B,
    left: M,
    auto: ye,
    basePlacements: Bt,
    start: gt,
    end: Nt,
    clippingParents: pi,
    viewport: es,
    popper: wt,
    reference: Ai,
    variationPlacements: ze,
    placements: ss,
    beforeRead: mi,
    read: gi,
    afterRead: vi,
    beforeMain: _i,
    main: Ei,
    afterMain: bi,
    beforeWrite: yi,
    write: Ti,
    afterWrite: wi,
    modifierPhases: Ci,
    applyStyles: ns,
    arrow: Li,
    computeStyles: rs,
    eventListeners: ls,
    flip: xi,
    hide: ki,
    offset: Bi,
    popperOffsets: hs,
    preventOverflow: Pi
}, Symbol.toStringTag, {
    value: "Module"
}));
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ia = 1e6
  , na = 1e3
  , Ze = "transitionend"
  , oa = s=>s == null ? `${s}` : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase()
  , aa = s=>{
    do
        s += Math.floor(Math.random() * ia);
    while (document.getElementById(s));
    return s
}
  , Vi = s=>{
    let t = s.getAttribute("data-bs-target");
    if (!t || t === "#") {
        let e = s.getAttribute("href");
        if (!e || !e.includes("#") && !e.startsWith("."))
            return null;
        e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
        t = e && e !== "#" ? e.trim() : null
    }
    return t
}
  , Ui = s=>{
    const t = Vi(s);
    return t && document.querySelector(t) ? t : null
}
  , q = s=>{
    const t = Vi(s);
    return t ? document.querySelector(t) : null
}
  , ra = s=>{
    if (!s)
        return 0;
    let {transitionDuration: t, transitionDelay: e} = window.getComputedStyle(s);
    const i = Number.parseFloat(t)
      , n = Number.parseFloat(e);
    return !i && !n ? 0 : (t = t.split(",")[0],
    e = e.split(",")[0],
    (Number.parseFloat(t) + Number.parseFloat(e)) * na)
}
  , Yi = s=>{
    s.dispatchEvent(new Event(Ze))
}
  , Z = s=>!s || typeof s != "object" ? !1 : (typeof s.jquery < "u" && (s = s[0]),
typeof s.nodeType < "u")
  , it = s=>Z(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null
  , Pt = s=>{
    if (!Z(s) || s.getClientRects().length === 0)
        return !1;
    const t = getComputedStyle(s).getPropertyValue("visibility") === "visible"
      , e = s.closest("details:not([open])");
    if (!e)
        return t;
    if (e !== s) {
        const i = s.closest("summary");
        if (i && i.parentNode !== e || i === null)
            return !1
    }
    return t
}
  , nt = s=>!s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? !0 : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false"
  , Fi = s=>{
    if (!document.documentElement.attachShadow)
        return null;
    if (typeof s.getRootNode == "function") {
        const t = s.getRootNode();
        return t instanceof ShadowRoot ? t : null
    }
    return s instanceof ShadowRoot ? s : s.parentNode ? Fi(s.parentNode) : null
}
  , _e = ()=>{}
  , jt = s=>{
    s.offsetHeight
}
  , Ki = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
  , ke = []
  , la = s=>{
    document.readyState === "loading" ? (ke.length || document.addEventListener("DOMContentLoaded", ()=>{
        for (const t of ke)
            t()
    }
    ),
    ke.push(s)) : s()
}
  , Q = ()=>document.documentElement.dir === "rtl"
  , U = s=>{
    la(()=>{
        const t = Ki();
        if (t) {
            const e = s.NAME
              , i = t.fn[e];
            t.fn[e] = s.jQueryInterface,
            t.fn[e].Constructor = s,
            t.fn[e].noConflict = ()=>(t.fn[e] = i,
            s.jQueryInterface)
        }
    }
    )
}
  , j = s=>{
    typeof s == "function" && s()
}
  , Hi = (s,t,e=!0)=>{
    if (!e) {
        j(s);
        return
    }
    const i = 5
      , n = ra(t) + i;
    let o = !1;
    const a = ({target: r})=>{
        r === t && (o = !0,
        t.removeEventListener(Ze, a),
        j(s))
    }
    ;
    t.addEventListener(Ze, a),
    setTimeout(()=>{
        o || Yi(t)
    }
    , n)
}
  , ps = (s,t,e,i)=>{
    const n = s.length;
    let o = s.indexOf(t);
    return o === -1 ? !e && i ? s[n - 1] : s[0] : (o += e ? 1 : -1,
    i && (o = (o + n) % n),
    s[Math.max(0, Math.min(o, n - 1))])
}
  , ca = /[^.]*(?=\..*)\.|.*/
  , da = /\..*/
  , ua = /::\d+$/
  , Be = {};
let Us = 1;
const Wi = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
}
  , ha = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function $i(s, t) {
    return t && `${t}::${Us++}` || s.uidEvent || Us++
}
function Gi(s) {
    const t = $i(s);
    return s.uidEvent = t,
    Be[t] = Be[t] || {},
    Be[t]
}
function fa(s, t) {
    return function e(i) {
        return As(i, {
            delegateTarget: s
        }),
        e.oneOff && l.off(s, i.type, t),
        t.apply(s, [i])
    }
}
function pa(s, t, e) {
    return function i(n) {
        const o = s.querySelectorAll(t);
        for (let {target: a} = n; a && a !== this; a = a.parentNode)
            for (const r of o)
                if (r === a)
                    return As(n, {
                        delegateTarget: a
                    }),
                    i.oneOff && l.off(s, n.type, t, e),
                    e.apply(a, [n])
    }
}
function zi(s, t, e=null) {
    return Object.values(s).find(i=>i.callable === t && i.delegationSelector === e)
}
function ji(s, t, e) {
    const i = typeof t == "string"
      , n = i ? e : t || e;
    let o = qi(s);
    return ha.has(o) || (o = s),
    [i, n, o]
}
function Ys(s, t, e, i, n) {
    if (typeof t != "string" || !s)
        return;
    let[o,a,r] = ji(t, e, i);
    t in Wi && (a = (b=>function(A) {
        if (!A.relatedTarget || A.relatedTarget !== A.delegateTarget && !A.delegateTarget.contains(A.relatedTarget))
            return b.call(this, A)
    }
    )(a));
    const c = Gi(s)
      , u = c[r] || (c[r] = {})
      , d = zi(u, a, o ? e : null);
    if (d) {
        d.oneOff = d.oneOff && n;
        return
    }
    const f = $i(a, t.replace(ca, ""))
      , m = o ? pa(s, e, a) : fa(s, a);
    m.delegationSelector = o ? e : null,
    m.callable = a,
    m.oneOff = n,
    m.uidEvent = f,
    u[f] = m,
    s.addEventListener(r, m, o)
}
function Xe(s, t, e, i, n) {
    const o = zi(t[e], i, n);
    !o || (s.removeEventListener(e, o, Boolean(n)),
    delete t[e][o.uidEvent])
}
function Aa(s, t, e, i) {
    const n = t[e] || {};
    for (const o of Object.keys(n))
        if (o.includes(i)) {
            const a = n[o];
            Xe(s, t, e, a.callable, a.delegationSelector)
        }
}
function qi(s) {
    return s = s.replace(da, ""),
    Wi[s] || s
}
const l = {
    on(s, t, e, i) {
        Ys(s, t, e, i, !1)
    },
    one(s, t, e, i) {
        Ys(s, t, e, i, !0)
    },
    off(s, t, e, i) {
        if (typeof t != "string" || !s)
            return;
        const [n,o,a] = ji(t, e, i)
          , r = a !== t
          , c = Gi(s)
          , u = c[a] || {}
          , d = t.startsWith(".");
        if (typeof o < "u") {
            if (!Object.keys(u).length)
                return;
            Xe(s, c, a, o, n ? e : null);
            return
        }
        if (d)
            for (const f of Object.keys(c))
                Aa(s, c, f, t.slice(1));
        for (const f of Object.keys(u)) {
            const m = f.replace(ua, "");
            if (!r || t.includes(m)) {
                const h = u[f];
                Xe(s, c, a, h.callable, h.delegationSelector)
            }
        }
    },
    trigger(s, t, e) {
        if (typeof t != "string" || !s)
            return null;
        const i = Ki()
          , n = qi(t)
          , o = t !== n;
        let a = null
          , r = !0
          , c = !0
          , u = !1;
        o && i && (a = i.Event(t, e),
        i(s).trigger(a),
        r = !a.isPropagationStopped(),
        c = !a.isImmediatePropagationStopped(),
        u = a.isDefaultPrevented());
        let d = new Event(t,{
            bubbles: r,
            cancelable: !0
        });
        return d = As(d, e),
        u && d.preventDefault(),
        c && s.dispatchEvent(d),
        d.defaultPrevented && a && a.preventDefault(),
        d
    }
};
function As(s, t) {
    for (const [e,i] of Object.entries(t || {}))
        try {
            s[e] = i
        } catch {
            Object.defineProperty(s, e, {
                configurable: !0,
                get() {
                    return i
                }
            })
        }
    return s
}
const st = new Map
  , Pe = {
    set(s, t, e) {
        st.has(s) || st.set(s, new Map);
        const i = st.get(s);
        if (!i.has(t) && i.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
            return
        }
        i.set(t, e)
    },
    get(s, t) {
        return st.has(s) && st.get(s).get(t) || null
    },
    remove(s, t) {
        if (!st.has(s))
            return;
        const e = st.get(s);
        e.delete(t),
        e.size === 0 && st.delete(s)
    }
};
function Fs(s) {
    if (s === "true")
        return !0;
    if (s === "false")
        return !1;
    if (s === Number(s).toString())
        return Number(s);
    if (s === "" || s === "null")
        return null;
    if (typeof s != "string")
        return s;
    try {
        return JSON.parse(decodeURIComponent(s))
    } catch {
        return s
    }
}
function Qe(s) {
    return s.replace(/[A-Z]/g, t=>`-${t.toLowerCase()}`)
}
const X = {
    setDataAttribute(s, t, e) {
        s.setAttribute(`data-bs-${Qe(t)}`, e)
    },
    removeDataAttribute(s, t) {
        s.removeAttribute(`data-bs-${Qe(t)}`)
    },
    getDataAttributes(s) {
        if (!s)
            return {};
        const t = {}
          , e = Object.keys(s.dataset).filter(i=>i.startsWith("bs") && !i.startsWith("bsConfig"));
        for (const i of e) {
            let n = i.replace(/^bs/, "");
            n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
            t[n] = Fs(s.dataset[i])
        }
        return t
    },
    getDataAttribute(s, t) {
        return Fs(s.getAttribute(`data-bs-${Qe(t)}`))
    }
};
class qt {
    static get Default() {
        return {}
    }
    static get DefaultType() {
        return {}
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
    }
    _getConfig(t) {
        return t = this._mergeConfigObj(t),
        t = this._configAfterMerge(t),
        this._typeCheckConfig(t),
        t
    }
    _configAfterMerge(t) {
        return t
    }
    _mergeConfigObj(t, e) {
        const i = Z(e) ? X.getDataAttribute(e, "config") : {};
        return {
            ...this.constructor.Default,
            ...typeof i == "object" ? i : {},
            ...Z(e) ? X.getDataAttributes(e) : {},
            ...typeof t == "object" ? t : {}
        }
    }
    _typeCheckConfig(t, e=this.constructor.DefaultType) {
        for (const i of Object.keys(e)) {
            const n = e[i]
              , o = t[i]
              , a = Z(o) ? "element" : oa(o);
            if (!new RegExp(n).test(a))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${n}".`)
        }
    }
}
const ma = "5.2.3";
class K extends qt {
    constructor(t, e) {
        super(),
        t = it(t),
        t && (this._element = t,
        this._config = this._getConfig(e),
        Pe.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
        Pe.remove(this._element, this.constructor.DATA_KEY),
        l.off(this._element, this.constructor.EVENT_KEY);
        for (const t of Object.getOwnPropertyNames(this))
            this[t] = null
    }
    _queueCallback(t, e, i=!0) {
        Hi(t, e, i)
    }
    _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element),
        t = this._configAfterMerge(t),
        this._typeCheckConfig(t),
        t
    }
    static getInstance(t) {
        return Pe.get(it(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e={}) {
        return this.getInstance(t) || new this(t,typeof e == "object" ? e : null)
    }
    static get VERSION() {
        return ma
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
    }
    static eventName(t) {
        return `${t}${this.EVENT_KEY}`
    }
}
const Ce = (s,t="hide")=>{
    const e = `click.dismiss ${s.EVENT_KEY}`
      , i = s.NAME;
    l.on(document, e, `[data-bs-dismiss="${i}"]`, function(n) {
        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        nt(this))
            return;
        const o = q(this) || this.closest(`.${i}`);
        s.getOrCreateInstance(o)[t]()
    })
}
  , ga = "alert"
  , va = "bs.alert"
  , Zi = `.${va}`
  , _a = `close ${Zi}`
  , Ea = `closed ${Zi}`
  , ba = "fade"
  , ya = "show";
class De extends K {
    static get NAME() {
        return ga
    }
    close() {
        if (l.trigger(this._element, _a).defaultPrevented)
            return;
        this._element.classList.remove(ya);
        const e = this._element.classList.contains(ba);
        this._queueCallback(()=>this._destroyElement(), this._element, e)
    }
    _destroyElement() {
        this._element.remove(),
        l.trigger(this._element, Ea),
        this.dispose()
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = De.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
                    throw new TypeError(`No method named "${t}"`);
                e[t](this)
            }
        })
    }
}
Ce(De, "close");
U(De);
const Ta = "button"
  , wa = "bs.button"
  , Ca = `.${wa}`
  , Da = ".data-api"
  , Sa = "active"
  , Ks = '[data-bs-toggle="button"]'
  , Oa = `click ${Ca}${Da}`;
class Se extends K {
    static get NAME() {
        return Ta
    }
    toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(Sa))
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = Se.getOrCreateInstance(this);
            t === "toggle" && e[t]()
        })
    }
}
l.on(document, Oa, Ks, s=>{
    s.preventDefault();
    const t = s.target.closest(Ks);
    Se.getOrCreateInstance(t).toggle()
}
);
U(Se);
const p = {
    find(s, t=document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, s))
    },
    findOne(s, t=document.documentElement) {
        return Element.prototype.querySelector.call(t, s)
    },
    children(s, t) {
        return [].concat(...s.children).filter(e=>e.matches(t))
    },
    parents(s, t) {
        const e = [];
        let i = s.parentNode.closest(t);
        for (; i; )
            e.push(i),
            i = i.parentNode.closest(t);
        return e
    },
    prev(s, t) {
        let e = s.previousElementSibling;
        for (; e; ) {
            if (e.matches(t))
                return [e];
            e = e.previousElementSibling
        }
        return []
    },
    next(s, t) {
        let e = s.nextElementSibling;
        for (; e; ) {
            if (e.matches(t))
                return [e];
            e = e.nextElementSibling
        }
        return []
    },
    focusableChildren(s) {
        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");
        return this.find(t, s).filter(e=>!nt(e) && Pt(e))
    }
}
  , Na = "swipe"
  , Qt = ".bs.swipe"
  , Ia = `touchstart ${Qt}`
  , La = `touchmove ${Qt}`
  , Ra = `touchend ${Qt}`
  , Ma = `pointerdown ${Qt}`
  , xa = `pointerup ${Qt}`
  , ka = "touch"
  , Ba = "pen"
  , Pa = "pointer-event"
  , Qa = 40
  , Va = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
}
  , Ua = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
class Ee extends qt {
    constructor(t, e) {
        super(),
        this._element = t,
        !(!t || !Ee.isSupported()) && (this._config = this._getConfig(e),
        this._deltaX = 0,
        this._supportPointerEvents = Boolean(window.PointerEvent),
        this._initEvents())
    }
    static get Default() {
        return Va
    }
    static get DefaultType() {
        return Ua
    }
    static get NAME() {
        return Na
    }
    dispose() {
        l.off(this._element, Qt)
    }
    _start(t) {
        if (!this._supportPointerEvents) {
            this._deltaX = t.touches[0].clientX;
            return
        }
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
    }
    _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        j(this._config.endCallback)
    }
    _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
        const t = Math.abs(this._deltaX);
        if (t <= Qa)
            return;
        const e = t / this._deltaX;
        this._deltaX = 0,
        e && j(e > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
        this._supportPointerEvents ? (l.on(this._element, Ma, t=>this._start(t)),
        l.on(this._element, xa, t=>this._end(t)),
        this._element.classList.add(Pa)) : (l.on(this._element, Ia, t=>this._start(t)),
        l.on(this._element, La, t=>this._move(t)),
        l.on(this._element, Ra, t=>this._end(t)))
    }
    _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && (t.pointerType === Ba || t.pointerType === ka)
    }
    static isSupported() {
        return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
    }
}
const Ya = "carousel"
  , Fa = "bs.carousel"
  , rt = `.${Fa}`
  , Xi = ".data-api"
  , Ka = "ArrowLeft"
  , Ha = "ArrowRight"
  , Wa = 500
  , Kt = "next"
  , yt = "prev"
  , Ct = "left"
  , Ae = "right"
  , $a = `slide ${rt}`
  , Ve = `slid ${rt}`
  , Ga = `keydown ${rt}`
  , za = `mouseenter ${rt}`
  , ja = `mouseleave ${rt}`
  , qa = `dragstart ${rt}`
  , Za = `load ${rt}${Xi}`
  , Xa = `click ${rt}${Xi}`
  , Ji = "carousel"
  , le = "active"
  , Ja = "slide"
  , tr = "carousel-item-end"
  , er = "carousel-item-start"
  , sr = "carousel-item-next"
  , ir = "carousel-item-prev"
  , tn = ".active"
  , en = ".carousel-item"
  , nr = tn + en
  , or = ".carousel-item img"
  , ar = ".carousel-indicators"
  , rr = "[data-bs-slide], [data-bs-slide-to]"
  , lr = '[data-bs-ride="carousel"]'
  , cr = {
    [Ka]: Ae,
    [Ha]: Ct
}
  , dr = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
}
  , ur = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
class Zt extends K {
    constructor(t, e) {
        super(t, e),
        this._interval = null,
        this._activeElement = null,
        this._isSliding = !1,
        this.touchTimeout = null,
        this._swipeHelper = null,
        this._indicatorsElement = p.findOne(ar, this._element),
        this._addEventListeners(),
        this._config.ride === Ji && this.cycle()
    }
    static get Default() {
        return dr
    }
    static get DefaultType() {
        return ur
    }
    static get NAME() {
        return Ya
    }
    next() {
        this._slide(Kt)
    }
    nextWhenVisible() {
        !document.hidden && Pt(this._element) && this.next()
    }
    prev() {
        this._slide(yt)
    }
    pause() {
        this._isSliding && Yi(this._element),
        this._clearInterval()
    }
    cycle() {
        this._clearInterval(),
        this._updateInterval(),
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
    }
    _maybeEnableCycle() {
        if (!!this._config.ride) {
            if (this._isSliding) {
                l.one(this._element, Ve, ()=>this.cycle());
                return
            }
            this.cycle()
        }
    }
    to(t) {
        const e = this._getItems();
        if (t > e.length - 1 || t < 0)
            return;
        if (this._isSliding) {
            l.one(this._element, Ve, ()=>this.to(t));
            return
        }
        const i = this._getItemIndex(this._getActive());
        if (i === t)
            return;
        const n = t > i ? Kt : yt;
        this._slide(n, e[t])
    }
    dispose() {
        this._swipeHelper && this._swipeHelper.dispose(),
        super.dispose()
    }
    _configAfterMerge(t) {
        return t.defaultInterval = t.interval,
        t
    }
    _addEventListeners() {
        this._config.keyboard && l.on(this._element, Ga, t=>this._keydown(t)),
        this._config.pause === "hover" && (l.on(this._element, za, ()=>this.pause()),
        l.on(this._element, ja, ()=>this._maybeEnableCycle())),
        this._config.touch && Ee.isSupported() && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
        for (const i of p.find(or, this._element))
            l.on(i, qa, n=>n.preventDefault());
        const e = {
            leftCallback: ()=>this._slide(this._directionToOrder(Ct)),
            rightCallback: ()=>this._slide(this._directionToOrder(Ae)),
            endCallback: ()=>{
                this._config.pause === "hover" && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), Wa + this._config.interval))
            }
        };
        this._swipeHelper = new Ee(this._element,e)
    }
    _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName))
            return;
        const e = cr[t.key];
        e && (t.preventDefault(),
        this._slide(this._directionToOrder(e)))
    }
    _getItemIndex(t) {
        return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement)
            return;
        const e = p.findOne(tn, this._indicatorsElement);
        e.classList.remove(le),
        e.removeAttribute("aria-current");
        const i = p.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
        i && (i.classList.add(le),
        i.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
        const t = this._activeElement || this._getActive();
        if (!t)
            return;
        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval
    }
    _slide(t, e=null) {
        if (this._isSliding)
            return;
        const i = this._getActive()
          , n = t === Kt
          , o = e || ps(this._getItems(), i, n, this._config.wrap);
        if (o === i)
            return;
        const a = this._getItemIndex(o)
          , r = h=>l.trigger(this._element, h, {
            relatedTarget: o,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: a
        });
        if (r($a).defaultPrevented || !i || !o)
            return;
        const u = Boolean(this._interval);
        this.pause(),
        this._isSliding = !0,
        this._setActiveIndicatorElement(a),
        this._activeElement = o;
        const d = n ? er : tr
          , f = n ? sr : ir;
        o.classList.add(f),
        jt(o),
        i.classList.add(d),
        o.classList.add(d);
        const m = ()=>{
            o.classList.remove(d, f),
            o.classList.add(le),
            i.classList.remove(le, f, d),
            this._isSliding = !1,
            r(Ve)
        }
        ;
        this._queueCallback(m, i, this._isAnimated()),
        u && this.cycle()
    }
    _isAnimated() {
        return this._element.classList.contains(Ja)
    }
    _getActive() {
        return p.findOne(nr, this._element)
    }
    _getItems() {
        return p.find(en, this._element)
    }
    _clearInterval() {
        this._interval && (clearInterval(this._interval),
        this._interval = null)
    }
    _directionToOrder(t) {
        return Q() ? t === Ct ? yt : Kt : t === Ct ? Kt : yt
    }
    _orderToDirection(t) {
        return Q() ? t === yt ? Ct : Ae : t === yt ? Ae : Ct
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = Zt.getOrCreateInstance(this, t);
            if (typeof t == "number") {
                e.to(t);
                return
            }
            if (typeof t == "string") {
                if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
}
l.on(document, Xa, rr, function(s) {
    const t = q(this);
    if (!t || !t.classList.contains(Ji))
        return;
    s.preventDefault();
    const e = Zt.getOrCreateInstance(t)
      , i = this.getAttribute("data-bs-slide-to");
    if (i) {
        e.to(i),
        e._maybeEnableCycle();
        return
    }
    if (X.getDataAttribute(this, "slide") === "next") {
        e.next(),
        e._maybeEnableCycle();
        return
    }
    e.prev(),
    e._maybeEnableCycle()
});
l.on(window, Za, ()=>{
    const s = p.find(lr);
    for (const t of s)
        Zt.getOrCreateInstance(t)
}
);
U(Zt);
const hr = "collapse"
  , fr = "bs.collapse"
  , Xt = `.${fr}`
  , pr = ".data-api"
  , Ar = `show ${Xt}`
  , mr = `shown ${Xt}`
  , gr = `hide ${Xt}`
  , vr = `hidden ${Xt}`
  , _r = `click ${Xt}${pr}`
  , Ue = "show"
  , St = "collapse"
  , ce = "collapsing"
  , Er = "collapsed"
  , br = `:scope .${St} .${St}`
  , yr = "collapse-horizontal"
  , Tr = "width"
  , wr = "height"
  , Cr = ".collapse.show, .collapse.collapsing"
  , Je = '[data-bs-toggle="collapse"]'
  , Dr = {
    parent: null,
    toggle: !0
}
  , Sr = {
    parent: "(null|element)",
    toggle: "boolean"
};
class Gt extends K {
    constructor(t, e) {
        super(t, e),
        this._isTransitioning = !1,
        this._triggerArray = [];
        const i = p.find(Je);
        for (const n of i) {
            const o = Ui(n)
              , a = p.find(o).filter(r=>r === this._element);
            o !== null && a.length && this._triggerArray.push(n)
        }
        this._initializeChildren(),
        this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle()
    }
    static get Default() {
        return Dr
    }
    static get DefaultType() {
        return Sr
    }
    static get NAME() {
        return hr
    }
    toggle() {
        this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (this._isTransitioning || this._isShown())
            return;
        let t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(Cr).filter(r=>r !== this._element).map(r=>Gt.getOrCreateInstance(r, {
            toggle: !1
        }))),
        t.length && t[0]._isTransitioning || l.trigger(this._element, Ar).defaultPrevented)
            return;
        for (const r of t)
            r.hide();
        const i = this._getDimension();
        this._element.classList.remove(St),
        this._element.classList.add(ce),
        this._element.style[i] = 0,
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        this._isTransitioning = !0;
        const n = ()=>{
            this._isTransitioning = !1,
            this._element.classList.remove(ce),
            this._element.classList.add(St, Ue),
            this._element.style[i] = "",
            l.trigger(this._element, mr)
        }
          , a = `scroll ${i[0].toUpperCase() + i.slice(1)}`;
        this._queueCallback(n, this._element, !0),
        this._element.style[i] = `${this._element[a]}px`
    }
    hide() {
        if (this._isTransitioning || !this._isShown() || l.trigger(this._element, gr).defaultPrevented)
            return;
        const e = this._getDimension();
        this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`,
        jt(this._element),
        this._element.classList.add(ce),
        this._element.classList.remove(St, Ue);
        for (const n of this._triggerArray) {
            const o = q(n);
            o && !this._isShown(o) && this._addAriaAndCollapsedClass([n], !1)
        }
        this._isTransitioning = !0;
        const i = ()=>{
            this._isTransitioning = !1,
            this._element.classList.remove(ce),
            this._element.classList.add(St),
            l.trigger(this._element, vr)
        }
        ;
        this._element.style[e] = "",
        this._queueCallback(i, this._element, !0)
    }
    _isShown(t=this._element) {
        return t.classList.contains(Ue)
    }
    _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle),
        t.parent = it(t.parent),
        t
    }
    _getDimension() {
        return this._element.classList.contains(yr) ? Tr : wr
    }
    _initializeChildren() {
        if (!this._config.parent)
            return;
        const t = this._getFirstLevelChildren(Je);
        for (const e of t) {
            const i = q(e);
            i && this._addAriaAndCollapsedClass([e], this._isShown(i))
        }
    }
    _getFirstLevelChildren(t) {
        const e = p.find(br, this._config.parent);
        return p.find(t, this._config.parent).filter(i=>!e.includes(i))
    }
    _addAriaAndCollapsedClass(t, e) {
        if (!!t.length)
            for (const i of t)
                i.classList.toggle(Er, !e),
                i.setAttribute("aria-expanded", e)
    }
    static jQueryInterface(t) {
        const e = {};
        return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function() {
            const i = Gt.getOrCreateInstance(this, e);
            if (typeof t == "string") {
                if (typeof i[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                i[t]()
            }
        })
    }
}
l.on(document, _r, Je, function(s) {
    (s.target.tagName === "A" || s.delegateTarget && s.delegateTarget.tagName === "A") && s.preventDefault();
    const t = Ui(this)
      , e = p.find(t);
    for (const i of e)
        Gt.getOrCreateInstance(i, {
            toggle: !1
        }).toggle()
});
U(Gt);
const Hs = "dropdown"
  , Or = "bs.dropdown"
  , _t = `.${Or}`
  , ms = ".data-api"
  , Nr = "Escape"
  , Ws = "Tab"
  , Ir = "ArrowUp"
  , $s = "ArrowDown"
  , Lr = 2
  , Rr = `hide ${_t}`
  , Mr = `hidden ${_t}`
  , xr = `show ${_t}`
  , kr = `shown ${_t}`
  , sn = `click ${_t}${ms}`
  , nn = `keydown ${_t}${ms}`
  , Br = `keyup ${_t}${ms}`
  , Dt = "show"
  , Pr = "dropup"
  , Qr = "dropend"
  , Vr = "dropstart"
  , Ur = "dropup-center"
  , Yr = "dropdown-center"
  , pt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
  , Fr = `${pt}.${Dt}`
  , me = ".dropdown-menu"
  , Kr = ".navbar"
  , Hr = ".navbar-nav"
  , Wr = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
  , $r = Q() ? "top-end" : "top-start"
  , Gr = Q() ? "top-start" : "top-end"
  , zr = Q() ? "bottom-end" : "bottom-start"
  , jr = Q() ? "bottom-start" : "bottom-end"
  , qr = Q() ? "left-start" : "right-start"
  , Zr = Q() ? "right-start" : "left-start"
  , Xr = "top"
  , Jr = "bottom"
  , tl = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
}
  , el = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
class G extends K {
    constructor(t, e) {
        super(t, e),
        this._popper = null,
        this._parent = this._element.parentNode,
        this._menu = p.next(this._element, me)[0] || p.prev(this._element, me)[0] || p.findOne(me, this._parent),
        this._inNavbar = this._detectNavbar()
    }
    static get Default() {
        return tl
    }
    static get DefaultType() {
        return el
    }
    static get NAME() {
        return Hs
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (nt(this._element) || this._isShown())
            return;
        const t = {
            relatedTarget: this._element
        };
        if (!l.trigger(this._element, xr, t).defaultPrevented) {
            if (this._createPopper(),
            "ontouchstart"in document.documentElement && !this._parent.closest(Hr))
                for (const i of [].concat(...document.body.children))
                    l.on(i, "mouseover", _e);
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Dt),
            this._element.classList.add(Dt),
            l.trigger(this._element, kr, t)
        }
    }
    hide() {
        if (nt(this._element) || !this._isShown())
            return;
        const t = {
            relatedTarget: this._element
        };
        this._completeHide(t)
    }
    dispose() {
        this._popper && this._popper.destroy(),
        super.dispose()
    }
    update() {
        this._inNavbar = this._detectNavbar(),
        this._popper && this._popper.update()
    }
    _completeHide(t) {
        if (!l.trigger(this._element, Rr, t).defaultPrevented) {
            if ("ontouchstart"in document.documentElement)
                for (const i of [].concat(...document.body.children))
                    l.off(i, "mouseover", _e);
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(Dt),
            this._element.classList.remove(Dt),
            this._element.setAttribute("aria-expanded", "false"),
            X.removeDataAttribute(this._menu, "popper"),
            l.trigger(this._element, Mr, t)
        }
    }
    _getConfig(t) {
        if (t = super._getConfig(t),
        typeof t.reference == "object" && !Z(t.reference) && typeof t.reference.getBoundingClientRect != "function")
            throw new TypeError(`${Hs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return t
    }
    _createPopper() {
        if (typeof Qi > "u")
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let t = this._element;
        this._config.reference === "parent" ? t = this._parent : Z(this._config.reference) ? t = it(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
        const e = this._getPopperConfig();
        this._popper = fs(t, this._menu, e)
    }
    _isShown() {
        return this._menu.classList.contains(Dt)
    }
    _getPlacement() {
        const t = this._parent;
        if (t.classList.contains(Qr))
            return qr;
        if (t.classList.contains(Vr))
            return Zr;
        if (t.classList.contains(Ur))
            return Xr;
        if (t.classList.contains(Yr))
            return Jr;
        const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return t.classList.contains(Pr) ? e ? Gr : $r : e ? jr : zr
    }
    _detectNavbar() {
        return this._element.closest(Kr) !== null
    }
    _getOffset() {
        const {offset: t} = this._config;
        return typeof t == "string" ? t.split(",").map(e=>Number.parseInt(e, 10)) : typeof t == "function" ? e=>t(e, this._element) : t
    }
    _getPopperConfig() {
        const t = {
            placement: this._getPlacement(),
            modifiers: [{
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }]
        };
        return (this._inNavbar || this._config.display === "static") && (X.setDataAttribute(this._menu, "popper", "static"),
        t.modifiers = [{
            name: "applyStyles",
            enabled: !1
        }]),
        {
            ...t,
            ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
        }
    }
    _selectMenuItem({key: t, target: e}) {
        const i = p.find(Wr, this._menu).filter(n=>Pt(n));
        !i.length || ps(i, e, t === $s, !i.includes(e)).focus()
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = G.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof e[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
    static clearMenus(t) {
        if (t.button === Lr || t.type === "keyup" && t.key !== Ws)
            return;
        const e = p.find(Fr);
        for (const i of e) {
            const n = G.getInstance(i);
            if (!n || n._config.autoClose === !1)
                continue;
            const o = t.composedPath()
              , a = o.includes(n._menu);
            if (o.includes(n._element) || n._config.autoClose === "inside" && !a || n._config.autoClose === "outside" && a || n._menu.contains(t.target) && (t.type === "keyup" && t.key === Ws || /input|select|option|textarea|form/i.test(t.target.tagName)))
                continue;
            const r = {
                relatedTarget: n._element
            };
            t.type === "click" && (r.clickEvent = t),
            n._completeHide(r)
        }
    }
    static dataApiKeydownHandler(t) {
        const e = /input|textarea/i.test(t.target.tagName)
          , i = t.key === Nr
          , n = [Ir, $s].includes(t.key);
        if (!n && !i || e && !i)
            return;
        t.preventDefault();
        const o = this.matches(pt) ? this : p.prev(this, pt)[0] || p.next(this, pt)[0] || p.findOne(pt, t.delegateTarget.parentNode)
          , a = G.getOrCreateInstance(o);
        if (n) {
            t.stopPropagation(),
            a.show(),
            a._selectMenuItem(t);
            return
        }
        a._isShown() && (t.stopPropagation(),
        a.hide(),
        o.focus())
    }
}
l.on(document, nn, pt, G.dataApiKeydownHandler);
l.on(document, nn, me, G.dataApiKeydownHandler);
l.on(document, sn, G.clearMenus);
l.on(document, Br, G.clearMenus);
l.on(document, sn, pt, function(s) {
    s.preventDefault(),
    G.getOrCreateInstance(this).toggle()
});
U(G);
const Gs = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
  , zs = ".sticky-top"
  , de = "padding-right"
  , js = "margin-right";
class ts {
    constructor() {
        this._element = document.body
    }
    getWidth() {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }
    hide() {
        const t = this.getWidth();
        this._disableOverFlow(),
        this._setElementAttributes(this._element, de, e=>e + t),
        this._setElementAttributes(Gs, de, e=>e + t),
        this._setElementAttributes(zs, js, e=>e - t)
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, de),
        this._resetElementAttributes(Gs, de),
        this._resetElementAttributes(zs, js)
    }
    isOverflowing() {
        return this.getWidth() > 0
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
        this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, e, i) {
        const n = this.getWidth()
          , o = a=>{
            if (a !== this._element && window.innerWidth > a.clientWidth + n)
                return;
            this._saveInitialAttribute(a, e);
            const r = window.getComputedStyle(a).getPropertyValue(e);
            a.style.setProperty(e, `${i(Number.parseFloat(r))}px`)
        }
        ;
        this._applyManipulationCallback(t, o)
    }
    _saveInitialAttribute(t, e) {
        const i = t.style.getPropertyValue(e);
        i && X.setDataAttribute(t, e, i)
    }
    _resetElementAttributes(t, e) {
        const i = n=>{
            const o = X.getDataAttribute(n, e);
            if (o === null) {
                n.style.removeProperty(e);
                return
            }
            X.removeDataAttribute(n, e),
            n.style.setProperty(e, o)
        }
        ;
        this._applyManipulationCallback(t, i)
    }
    _applyManipulationCallback(t, e) {
        if (Z(t)) {
            e(t);
            return
        }
        for (const i of p.find(t, this._element))
            e(i)
    }
}
const on = "backdrop"
  , sl = "fade"
  , qs = "show"
  , Zs = `mousedown.bs.${on}`
  , il = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
}
  , nl = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
class an extends qt {
    constructor(t) {
        super(),
        this._config = this._getConfig(t),
        this._isAppended = !1,
        this._element = null
    }
    static get Default() {
        return il
    }
    static get DefaultType() {
        return nl
    }
    static get NAME() {
        return on
    }
    show(t) {
        if (!this._config.isVisible) {
            j(t);
            return
        }
        this._append();
        const e = this._getElement();
        this._config.isAnimated && jt(e),
        e.classList.add(qs),
        this._emulateAnimation(()=>{
            j(t)
        }
        )
    }
    hide(t) {
        if (!this._config.isVisible) {
            j(t);
            return
        }
        this._getElement().classList.remove(qs),
        this._emulateAnimation(()=>{
            this.dispose(),
            j(t)
        }
        )
    }
    dispose() {
        !this._isAppended || (l.off(this._element, Zs),
        this._element.remove(),
        this._isAppended = !1)
    }
    _getElement() {
        if (!this._element) {
            const t = document.createElement("div");
            t.className = this._config.className,
            this._config.isAnimated && t.classList.add(sl),
            this._element = t
        }
        return this._element
    }
    _configAfterMerge(t) {
        return t.rootElement = it(t.rootElement),
        t
    }
    _append() {
        if (this._isAppended)
            return;
        const t = this._getElement();
        this._config.rootElement.append(t),
        l.on(t, Zs, ()=>{
            j(this._config.clickCallback)
        }
        ),
        this._isAppended = !0
    }
    _emulateAnimation(t) {
        Hi(t, this._getElement(), this._config.isAnimated)
    }
}
const ol = "focustrap"
  , al = "bs.focustrap"
  , be = `.${al}`
  , rl = `focusin ${be}`
  , ll = `keydown.tab ${be}`
  , cl = "Tab"
  , dl = "forward"
  , Xs = "backward"
  , ul = {
    autofocus: !0,
    trapElement: null
}
  , hl = {
    autofocus: "boolean",
    trapElement: "element"
};
class rn extends qt {
    constructor(t) {
        super(),
        this._config = this._getConfig(t),
        this._isActive = !1,
        this._lastTabNavDirection = null
    }
    static get Default() {
        return ul
    }
    static get DefaultType() {
        return hl
    }
    static get NAME() {
        return ol
    }
    activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
        l.off(document, be),
        l.on(document, rl, t=>this._handleFocusin(t)),
        l.on(document, ll, t=>this._handleKeydown(t)),
        this._isActive = !0)
    }
    deactivate() {
        !this._isActive || (this._isActive = !1,
        l.off(document, be))
    }
    _handleFocusin(t) {
        const {trapElement: e} = this._config;
        if (t.target === document || t.target === e || e.contains(t.target))
            return;
        const i = p.focusableChildren(e);
        i.length === 0 ? e.focus() : this._lastTabNavDirection === Xs ? i[i.length - 1].focus() : i[0].focus()
    }
    _handleKeydown(t) {
        t.key === cl && (this._lastTabNavDirection = t.shiftKey ? Xs : dl)
    }
}
const fl = "modal"
  , pl = "bs.modal"
  , H = `.${pl}`
  , Al = ".data-api"
  , ml = "Escape"
  , gl = `hide ${H}`
  , vl = `hidePrevented ${H}`
  , ln = `hidden ${H}`
  , cn = `show ${H}`
  , _l = `shown ${H}`
  , El = `resize ${H}`
  , bl = `click.dismiss ${H}`
  , yl = `mousedown.dismiss ${H}`
  , Tl = `keydown.dismiss ${H}`
  , wl = `click ${H}${Al}`
  , Js = "modal-open"
  , Cl = "fade"
  , ti = "show"
  , Ye = "modal-static"
  , Dl = ".modal.show"
  , Sl = ".modal-dialog"
  , Ol = ".modal-body"
  , Nl = '[data-bs-toggle="modal"]'
  , Il = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
}
  , Ll = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
class xt extends K {
    constructor(t, e) {
        super(t, e),
        this._dialog = p.findOne(Sl, this._element),
        this._backdrop = this._initializeBackDrop(),
        this._focustrap = this._initializeFocusTrap(),
        this._isShown = !1,
        this._isTransitioning = !1,
        this._scrollBar = new ts,
        this._addEventListeners()
    }
    static get Default() {
        return Il
    }
    static get DefaultType() {
        return Ll
    }
    static get NAME() {
        return fl
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        this._isShown || this._isTransitioning || l.trigger(this._element, cn, {
            relatedTarget: t
        }).defaultPrevented || (this._isShown = !0,
        this._isTransitioning = !0,
        this._scrollBar.hide(),
        document.body.classList.add(Js),
        this._adjustDialog(),
        this._backdrop.show(()=>this._showElement(t)))
    }
    hide() {
        !this._isShown || this._isTransitioning || l.trigger(this._element, gl).defaultPrevented || (this._isShown = !1,
        this._isTransitioning = !0,
        this._focustrap.deactivate(),
        this._element.classList.remove(ti),
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated()))
    }
    dispose() {
        for (const t of [window, this._dialog])
            l.off(t, H);
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose()
    }
    handleUpdate() {
        this._adjustDialog()
    }
    _initializeBackDrop() {
        return new an({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
        })
    }
    _initializeFocusTrap() {
        return new rn({
            trapElement: this._element
        })
    }
    _showElement(t) {
        document.body.contains(this._element) || document.body.append(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.scrollTop = 0;
        const e = p.findOne(Ol, this._dialog);
        e && (e.scrollTop = 0),
        jt(this._element),
        this._element.classList.add(ti);
        const i = ()=>{
            this._config.focus && this._focustrap.activate(),
            this._isTransitioning = !1,
            l.trigger(this._element, _l, {
                relatedTarget: t
            })
        }
        ;
        this._queueCallback(i, this._dialog, this._isAnimated())
    }
    _addEventListeners() {
        l.on(this._element, Tl, t=>{
            if (t.key === ml) {
                if (this._config.keyboard) {
                    t.preventDefault(),
                    this.hide();
                    return
                }
                this._triggerBackdropTransition()
            }
        }
        ),
        l.on(window, El, ()=>{
            this._isShown && !this._isTransitioning && this._adjustDialog()
        }
        ),
        l.on(this._element, yl, t=>{
            l.one(this._element, bl, e=>{
                if (!(this._element !== t.target || this._element !== e.target)) {
                    if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return
                    }
                    this._config.backdrop && this.hide()
                }
            }
            )
        }
        )
    }
    _hideModal() {
        this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._isTransitioning = !1,
        this._backdrop.hide(()=>{
            document.body.classList.remove(Js),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            l.trigger(this._element, ln)
        }
        )
    }
    _isAnimated() {
        return this._element.classList.contains(Cl)
    }
    _triggerBackdropTransition() {
        if (l.trigger(this._element, vl).defaultPrevented)
            return;
        const e = this._element.scrollHeight > document.documentElement.clientHeight
          , i = this._element.style.overflowY;
        i === "hidden" || this._element.classList.contains(Ye) || (e || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Ye),
        this._queueCallback(()=>{
            this._element.classList.remove(Ye),
            this._queueCallback(()=>{
                this._element.style.overflowY = i
            }
            , this._dialog)
        }
        , this._dialog),
        this._element.focus())
    }
    _adjustDialog() {
        const t = this._element.scrollHeight > document.documentElement.clientHeight
          , e = this._scrollBar.getWidth()
          , i = e > 0;
        if (i && !t) {
            const n = Q() ? "paddingLeft" : "paddingRight";
            this._element.style[n] = `${e}px`
        }
        if (!i && t) {
            const n = Q() ? "paddingRight" : "paddingLeft";
            this._element.style[n] = `${e}px`
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, e) {
        return this.each(function() {
            const i = xt.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof i[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                i[t](e)
            }
        })
    }
}
l.on(document, wl, Nl, function(s) {
    const t = q(this);
    ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
    l.one(t, cn, n=>{
        n.defaultPrevented || l.one(t, ln, ()=>{
            Pt(this) && this.focus()
        }
        )
    }
    );
    const e = p.findOne(Dl);
    e && xt.getInstance(e).hide(),
    xt.getOrCreateInstance(t).toggle(this)
});
Ce(xt);
U(xt);
const Rl = "offcanvas"
  , Ml = "bs.offcanvas"
  , tt = `.${Ml}`
  , dn = ".data-api"
  , xl = `load ${tt}${dn}`
  , kl = "Escape"
  , ei = "show"
  , si = "showing"
  , ii = "hiding"
  , Bl = "offcanvas-backdrop"
  , un = ".offcanvas.show"
  , Pl = `show ${tt}`
  , Ql = `shown ${tt}`
  , Vl = `hide ${tt}`
  , ni = `hidePrevented ${tt}`
  , hn = `hidden ${tt}`
  , Ul = `resize ${tt}`
  , Yl = `click ${tt}${dn}`
  , Fl = `keydown.dismiss ${tt}`
  , Kl = '[data-bs-toggle="offcanvas"]'
  , Hl = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
}
  , Wl = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
class ot extends K {
    constructor(t, e) {
        super(t, e),
        this._isShown = !1,
        this._backdrop = this._initializeBackDrop(),
        this._focustrap = this._initializeFocusTrap(),
        this._addEventListeners()
    }
    static get Default() {
        return Hl
    }
    static get DefaultType() {
        return Wl
    }
    static get NAME() {
        return Rl
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        if (this._isShown || l.trigger(this._element, Pl, {
            relatedTarget: t
        }).defaultPrevented)
            return;
        this._isShown = !0,
        this._backdrop.show(),
        this._config.scroll || new ts().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(si);
        const i = ()=>{
            (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
            this._element.classList.add(ei),
            this._element.classList.remove(si),
            l.trigger(this._element, Ql, {
                relatedTarget: t
            })
        }
        ;
        this._queueCallback(i, this._element, !0)
    }
    hide() {
        if (!this._isShown || l.trigger(this._element, Vl).defaultPrevented)
            return;
        this._focustrap.deactivate(),
        this._element.blur(),
        this._isShown = !1,
        this._element.classList.add(ii),
        this._backdrop.hide();
        const e = ()=>{
            this._element.classList.remove(ei, ii),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._config.scroll || new ts().reset(),
            l.trigger(this._element, hn)
        }
        ;
        this._queueCallback(e, this._element, !0)
    }
    dispose() {
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose()
    }
    _initializeBackDrop() {
        const t = ()=>{
            if (this._config.backdrop === "static") {
                l.trigger(this._element, ni);
                return
            }
            this.hide()
        }
          , e = Boolean(this._config.backdrop);
        return new an({
            className: Bl,
            isVisible: e,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: e ? t : null
        })
    }
    _initializeFocusTrap() {
        return new rn({
            trapElement: this._element
        })
    }
    _addEventListeners() {
        l.on(this._element, Fl, t=>{
            if (t.key === kl) {
                if (!this._config.keyboard) {
                    l.trigger(this._element, ni);
                    return
                }
                this.hide()
            }
        }
        )
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = ot.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
                    throw new TypeError(`No method named "${t}"`);
                e[t](this)
            }
        })
    }
}
l.on(document, Yl, Kl, function(s) {
    const t = q(this);
    if (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
    nt(this))
        return;
    l.one(t, hn, ()=>{
        Pt(this) && this.focus()
    }
    );
    const e = p.findOne(un);
    e && e !== t && ot.getInstance(e).hide(),
    ot.getOrCreateInstance(t).toggle(this)
});
l.on(window, xl, ()=>{
    for (const s of p.find(un))
        ot.getOrCreateInstance(s).show()
}
);
l.on(window, Ul, ()=>{
    for (const s of p.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(s).position !== "fixed" && ot.getOrCreateInstance(s).hide()
}
);
Ce(ot);
U(ot);
const $l = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
  , Gl = /^aria-[\w-]*$/i
  , zl = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
  , jl = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
  , ql = (s,t)=>{
    const e = s.nodeName.toLowerCase();
    return t.includes(e) ? $l.has(e) ? Boolean(zl.test(s.nodeValue) || jl.test(s.nodeValue)) : !0 : t.filter(i=>i instanceof RegExp).some(i=>i.test(e))
}
  , fn = {
    "*": ["class", "dir", "id", "lang", "role", Gl],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function Zl(s, t, e) {
    if (!s.length)
        return s;
    if (e && typeof e == "function")
        return e(s);
    const n = new window.DOMParser().parseFromString(s, "text/html")
      , o = [].concat(...n.body.querySelectorAll("*"));
    for (const a of o) {
        const r = a.nodeName.toLowerCase();
        if (!Object.keys(t).includes(r)) {
            a.remove();
            continue
        }
        const c = [].concat(...a.attributes)
          , u = [].concat(t["*"] || [], t[r] || []);
        for (const d of c)
            ql(d, u) || a.removeAttribute(d.nodeName)
    }
    return n.body.innerHTML
}
const Xl = "TemplateFactory"
  , Jl = {
    allowList: fn,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
}
  , tc = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
}
  , ec = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
class sc extends qt {
    constructor(t) {
        super(),
        this._config = this._getConfig(t)
    }
    static get Default() {
        return Jl
    }
    static get DefaultType() {
        return tc
    }
    static get NAME() {
        return Xl
    }
    getContent() {
        return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)
    }
    hasContent() {
        return this.getContent().length > 0
    }
    changeContent(t) {
        return this._checkContent(t),
        this._config.content = {
            ...this._config.content,
            ...t
        },
        this
    }
    toHtml() {
        const t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (const [n,o] of Object.entries(this._config.content))
            this._setContent(t, o, n);
        const e = t.children[0]
          , i = this._resolvePossibleFunction(this._config.extraClass);
        return i && e.classList.add(...i.split(" ")),
        e
    }
    _typeCheckConfig(t) {
        super._typeCheckConfig(t),
        this._checkContent(t.content)
    }
    _checkContent(t) {
        for (const [e,i] of Object.entries(t))
            super._typeCheckConfig({
                selector: e,
                entry: i
            }, ec)
    }
    _setContent(t, e, i) {
        const n = p.findOne(i, t);
        if (!!n) {
            if (e = this._resolvePossibleFunction(e),
            !e) {
                n.remove();
                return
            }
            if (Z(e)) {
                this._putElementInTemplate(it(e), n);
                return
            }
            if (this._config.html) {
                n.innerHTML = this._maybeSanitize(e);
                return
            }
            n.textContent = e
        }
    }
    _maybeSanitize(t) {
        return this._config.sanitize ? Zl(t, this._config.allowList, this._config.sanitizeFn) : t
    }
    _resolvePossibleFunction(t) {
        return typeof t == "function" ? t(this) : t
    }
    _putElementInTemplate(t, e) {
        if (this._config.html) {
            e.innerHTML = "",
            e.append(t);
            return
        }
        e.textContent = t.textContent
    }
}
const ic = "tooltip"
  , nc = new Set(["sanitize", "allowList", "sanitizeFn"])
  , Fe = "fade"
  , oc = "modal"
  , ue = "show"
  , ac = ".tooltip-inner"
  , oi = `.${oc}`
  , ai = "hide.bs.modal"
  , Ht = "hover"
  , Ke = "focus"
  , rc = "click"
  , lc = "manual"
  , cc = "hide"
  , dc = "hidden"
  , uc = "show"
  , hc = "shown"
  , fc = "inserted"
  , pc = "click"
  , Ac = "focusin"
  , mc = "focusout"
  , gc = "mouseenter"
  , vc = "mouseleave"
  , _c = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: Q() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: Q() ? "right" : "left"
}
  , Ec = {
    allowList: fn,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 0],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
}
  , bc = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
class Vt extends K {
    constructor(t, e) {
        if (typeof Qi > "u")
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(t, e),
        this._isEnabled = !0,
        this._timeout = 0,
        this._isHovered = null,
        this._activeTrigger = {},
        this._popper = null,
        this._templateFactory = null,
        this._newContent = null,
        this.tip = null,
        this._setListeners(),
        this._config.selector || this._fixTitle()
    }
    static get Default() {
        return Ec
    }
    static get DefaultType() {
        return bc
    }
    static get NAME() {
        return ic
    }
    enable() {
        this._isEnabled = !0
    }
    disable() {
        this._isEnabled = !1
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }
    toggle() {
        if (!!this._isEnabled) {
            if (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown()) {
                this._leave();
                return
            }
            this._enter()
        }
    }
    dispose() {
        clearTimeout(this._timeout),
        l.off(this._element.closest(oi), ai, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
        this._disposePopper(),
        super.dispose()
    }
    show() {
        if (this._element.style.display === "none")
            throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
            return;
        const t = l.trigger(this._element, this.constructor.eventName(uc))
          , i = (Fi(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !i)
            return;
        this._disposePopper();
        const n = this._getTipElement();
        this._element.setAttribute("aria-describedby", n.getAttribute("id"));
        const {container: o} = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (o.append(n),
        l.trigger(this._element, this.constructor.eventName(fc))),
        this._popper = this._createPopper(n),
        n.classList.add(ue),
        "ontouchstart"in document.documentElement)
            for (const r of [].concat(...document.body.children))
                l.on(r, "mouseover", _e);
        const a = ()=>{
            l.trigger(this._element, this.constructor.eventName(hc)),
            this._isHovered === !1 && this._leave(),
            this._isHovered = !1
        }
        ;
        this._queueCallback(a, this.tip, this._isAnimated())
    }
    hide() {
        if (!this._isShown() || l.trigger(this._element, this.constructor.eventName(cc)).defaultPrevented)
            return;
        if (this._getTipElement().classList.remove(ue),
        "ontouchstart"in document.documentElement)
            for (const n of [].concat(...document.body.children))
                l.off(n, "mouseover", _e);
        this._activeTrigger[rc] = !1,
        this._activeTrigger[Ke] = !1,
        this._activeTrigger[Ht] = !1,
        this._isHovered = null;
        const i = ()=>{
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
            this._element.removeAttribute("aria-describedby"),
            l.trigger(this._element, this.constructor.eventName(dc)))
        }
        ;
        this._queueCallback(i, this.tip, this._isAnimated())
    }
    update() {
        this._popper && this._popper.update()
    }
    _isWithContent() {
        return Boolean(this._getTitle())
    }
    _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
        this.tip
    }
    _createTipElement(t) {
        const e = this._getTemplateFactory(t).toHtml();
        if (!e)
            return null;
        e.classList.remove(Fe, ue),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
        const i = aa(this.constructor.NAME).toString();
        return e.setAttribute("id", i),
        this._isAnimated() && e.classList.add(Fe),
        e
    }
    setContent(t) {
        this._newContent = t,
        this._isShown() && (this._disposePopper(),
        this.show())
    }
    _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new sc({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        }),
        this._templateFactory
    }
    _getContentForTemplate() {
        return {
            [ac]: this._getTitle()
        }
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
    }
    _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Fe)
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(ue)
    }
    _createPopper(t) {
        const e = typeof this._config.placement == "function" ? this._config.placement.call(this, t, this._element) : this._config.placement
          , i = _c[e.toUpperCase()];
        return fs(this._element, t, this._getPopperConfig(i))
    }
    _getOffset() {
        const {offset: t} = this._config;
        return typeof t == "string" ? t.split(",").map(e=>Number.parseInt(e, 10)) : typeof t == "function" ? e=>t(e, this._element) : t
    }
    _resolvePossibleFunction(t) {
        return typeof t == "function" ? t.call(this._element) : t
    }
    _getPopperConfig(t) {
        const e = {
            placement: t,
            modifiers: [{
                name: "flip",
                options: {
                    fallbackPlacements: this._config.fallbackPlacements
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }, {
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "arrow",
                options: {
                    element: `.${this.constructor.NAME}-arrow`
                }
            }, {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: i=>{
                    this._getTipElement().setAttribute("data-popper-placement", i.state.placement)
                }
            }]
        };
        return {
            ...e,
            ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
        }
    }
    _setListeners() {
        const t = this._config.trigger.split(" ");
        for (const e of t)
            if (e === "click")
                l.on(this._element, this.constructor.eventName(pc), this._config.selector, i=>{
                    this._initializeOnDelegatedTarget(i).toggle()
                }
                );
            else if (e !== lc) {
                const i = e === Ht ? this.constructor.eventName(gc) : this.constructor.eventName(Ac)
                  , n = e === Ht ? this.constructor.eventName(vc) : this.constructor.eventName(mc);
                l.on(this._element, i, this._config.selector, o=>{
                    const a = this._initializeOnDelegatedTarget(o);
                    a._activeTrigger[o.type === "focusin" ? Ke : Ht] = !0,
                    a._enter()
                }
                ),
                l.on(this._element, n, this._config.selector, o=>{
                    const a = this._initializeOnDelegatedTarget(o);
                    a._activeTrigger[o.type === "focusout" ? Ke : Ht] = a._element.contains(o.relatedTarget),
                    a._leave()
                }
                )
            }
        this._hideModalHandler = ()=>{
            this._element && this.hide()
        }
        ,
        l.on(this._element.closest(oi), ai, this._hideModalHandler)
    }
    _fixTitle() {
        const t = this._element.getAttribute("title");
        !t || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"))
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return
        }
        this._isHovered = !0,
        this._setTimeout(()=>{
            this._isHovered && this.show()
        }
        , this._config.delay.show)
    }
    _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1,
        this._setTimeout(()=>{
            this._isHovered || this.hide()
        }
        , this._config.delay.hide))
    }
    _setTimeout(t, e) {
        clearTimeout(this._timeout),
        this._timeout = setTimeout(t, e)
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
        const e = X.getDataAttributes(this._element);
        for (const i of Object.keys(e))
            nc.has(i) && delete e[i];
        return t = {
            ...e,
            ...typeof t == "object" && t ? t : {}
        },
        t = this._mergeConfigObj(t),
        t = this._configAfterMerge(t),
        this._typeCheckConfig(t),
        t
    }
    _configAfterMerge(t) {
        return t.container = t.container === !1 ? document.body : it(t.container),
        typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        typeof t.title == "number" && (t.title = t.title.toString()),
        typeof t.content == "number" && (t.content = t.content.toString()),
        t
    }
    _getDelegateConfig() {
        const t = {};
        for (const e in this._config)
            this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
        return t.selector = !1,
        t.trigger = "manual",
        t
    }
    _disposePopper() {
        this._popper && (this._popper.destroy(),
        this._popper = null),
        this.tip && (this.tip.remove(),
        this.tip = null)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = Vt.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof e[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
}
U(Vt);
const yc = "popover"
  , Tc = ".popover-header"
  , wc = ".popover-body"
  , Cc = {
    ...Vt.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
}
  , Dc = {
    ...Vt.DefaultType,
    content: "(null|string|element|function)"
};
class gs extends Vt {
    static get Default() {
        return Cc
    }
    static get DefaultType() {
        return Dc
    }
    static get NAME() {
        return yc
    }
    _isWithContent() {
        return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
        return {
            [Tc]: this._getTitle(),
            [wc]: this._getContent()
        }
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = gs.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof e[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
}
U(gs);
const Sc = "scrollspy"
  , Oc = "bs.scrollspy"
  , vs = `.${Oc}`
  , Nc = ".data-api"
  , Ic = `activate ${vs}`
  , ri = `click ${vs}`
  , Lc = `load ${vs}${Nc}`
  , Rc = "dropdown-item"
  , Tt = "active"
  , Mc = '[data-bs-spy="scroll"]'
  , He = "[href]"
  , xc = ".nav, .list-group"
  , li = ".nav-link"
  , kc = ".nav-item"
  , Bc = ".list-group-item"
  , Pc = `${li}, ${kc} > ${li}, ${Bc}`
  , Qc = ".dropdown"
  , Vc = ".dropdown-toggle"
  , Uc = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
}
  , Yc = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
class Oe extends K {
    constructor(t, e) {
        super(t, e),
        this._targetLinks = new Map,
        this._observableSections = new Map,
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element,
        this._activeTarget = null,
        this._observer = null,
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        },
        this.refresh()
    }
    static get Default() {
        return Uc
    }
    static get DefaultType() {
        return Yc
    }
    static get NAME() {
        return Sc
    }
    refresh() {
        this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const t of this._observableSections.values())
            this._observer.observe(t)
    }
    dispose() {
        this._observer.disconnect(),
        super.dispose()
    }
    _configAfterMerge(t) {
        return t.target = it(t.target) || document.body,
        t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
        typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map(e=>Number.parseFloat(e))),
        t
    }
    _maybeEnableSmoothScroll() {
        !this._config.smoothScroll || (l.off(this._config.target, ri),
        l.on(this._config.target, ri, He, t=>{
            const e = this._observableSections.get(t.target.hash);
            if (e) {
                t.preventDefault();
                const i = this._rootElement || window
                  , n = e.offsetTop - this._element.offsetTop;
                if (i.scrollTo) {
                    i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    return
                }
                i.scrollTop = n
            }
        }
        ))
    }
    _getNewObserver() {
        const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(e=>this._observerCallback(e),t)
    }
    _observerCallback(t) {
        const e = a=>this._targetLinks.get(`#${a.target.id}`)
          , i = a=>{
            this._previousScrollData.visibleEntryTop = a.target.offsetTop,
            this._process(e(a))
        }
          , n = (this._rootElement || document.documentElement).scrollTop
          , o = n >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n;
        for (const a of t) {
            if (!a.isIntersecting) {
                this._activeTarget = null,
                this._clearActiveClass(e(a));
                continue
            }
            const r = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (o && r) {
                if (i(a),
                !n)
                    return;
                continue
            }
            !o && !r && i(a)
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map,
        this._observableSections = new Map;
        const t = p.find(He, this._config.target);
        for (const e of t) {
            if (!e.hash || nt(e))
                continue;
            const i = p.findOne(e.hash, this._element);
            Pt(i) && (this._targetLinks.set(e.hash, e),
            this._observableSections.set(e.hash, i))
        }
    }
    _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target),
        this._activeTarget = t,
        t.classList.add(Tt),
        this._activateParents(t),
        l.trigger(this._element, Ic, {
            relatedTarget: t
        }))
    }
    _activateParents(t) {
        if (t.classList.contains(Rc)) {
            p.findOne(Vc, t.closest(Qc)).classList.add(Tt);
            return
        }
        for (const e of p.parents(t, xc))
            for (const i of p.prev(e, Pc))
                i.classList.add(Tt)
    }
    _clearActiveClass(t) {
        t.classList.remove(Tt);
        const e = p.find(`${He}.${Tt}`, t);
        for (const i of e)
            i.classList.remove(Tt)
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = Oe.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
}
l.on(window, Lc, ()=>{
    for (const s of p.find(Mc))
        Oe.getOrCreateInstance(s)
}
);
U(Oe);
const Fc = "tab"
  , Kc = "bs.tab"
  , Et = `.${Kc}`
  , Hc = `hide ${Et}`
  , Wc = `hidden ${Et}`
  , $c = `show ${Et}`
  , Gc = `shown ${Et}`
  , zc = `click ${Et}`
  , jc = `keydown ${Et}`
  , qc = `load ${Et}`
  , Zc = "ArrowLeft"
  , ci = "ArrowRight"
  , Xc = "ArrowUp"
  , di = "ArrowDown"
  , At = "active"
  , ui = "fade"
  , We = "show"
  , Jc = "dropdown"
  , td = ".dropdown-toggle"
  , ed = ".dropdown-menu"
  , $e = ":not(.dropdown-toggle)"
  , sd = '.list-group, .nav, [role="tablist"]'
  , id = ".nav-item, .list-group-item"
  , nd = `.nav-link ${$e}, .list-group-item ${$e}, [role="tab"]${$e}`
  , pn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
  , Ge = `${nd}, ${pn}`
  , od = `.${At}[data-bs-toggle="tab"], .${At}[data-bs-toggle="pill"], .${At}[data-bs-toggle="list"]`;
class kt extends K {
    constructor(t) {
        super(t),
        this._parent = this._element.closest(sd),
        this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
        l.on(this._element, jc, e=>this._keydown(e)))
    }
    static get NAME() {
        return Fc
    }
    show() {
        const t = this._element;
        if (this._elemIsActive(t))
            return;
        const e = this._getActiveElem()
          , i = e ? l.trigger(e, Hc, {
            relatedTarget: t
        }) : null;
        l.trigger(t, $c, {
            relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t),
        this._activate(t, e))
    }
    _activate(t, e) {
        if (!t)
            return;
        t.classList.add(At),
        this._activate(q(t));
        const i = ()=>{
            if (t.getAttribute("role") !== "tab") {
                t.classList.add(We);
                return
            }
            t.removeAttribute("tabindex"),
            t.setAttribute("aria-selected", !0),
            this._toggleDropDown(t, !0),
            l.trigger(t, Gc, {
                relatedTarget: e
            })
        }
        ;
        this._queueCallback(i, t, t.classList.contains(ui))
    }
    _deactivate(t, e) {
        if (!t)
            return;
        t.classList.remove(At),
        t.blur(),
        this._deactivate(q(t));
        const i = ()=>{
            if (t.getAttribute("role") !== "tab") {
                t.classList.remove(We);
                return
            }
            t.setAttribute("aria-selected", !1),
            t.setAttribute("tabindex", "-1"),
            this._toggleDropDown(t, !1),
            l.trigger(t, Wc, {
                relatedTarget: e
            })
        }
        ;
        this._queueCallback(i, t, t.classList.contains(ui))
    }
    _keydown(t) {
        if (![Zc, ci, Xc, di].includes(t.key))
            return;
        t.stopPropagation(),
        t.preventDefault();
        const e = [ci, di].includes(t.key)
          , i = ps(this._getChildren().filter(n=>!nt(n)), t.target, e, !0);
        i && (i.focus({
            preventScroll: !0
        }),
        kt.getOrCreateInstance(i).show())
    }
    _getChildren() {
        return p.find(Ge, this._parent)
    }
    _getActiveElem() {
        return this._getChildren().find(t=>this._elemIsActive(t)) || null
    }
    _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        for (const i of e)
            this._setInitialAttributesOnChild(i)
    }
    _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        const e = this._elemIsActive(t)
          , i = this._getOuterElement(t);
        t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
        const e = q(t);
        !e || (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
    }
    _toggleDropDown(t, e) {
        const i = this._getOuterElement(t);
        if (!i.classList.contains(Jc))
            return;
        const n = (o,a)=>{
            const r = p.findOne(o, i);
            r && r.classList.toggle(a, e)
        }
        ;
        n(td, At),
        n(ed, We),
        i.setAttribute("aria-expanded", e)
    }
    _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i)
    }
    _elemIsActive(t) {
        return t.classList.contains(At)
    }
    _getInnerElement(t) {
        return t.matches(Ge) ? t : p.findOne(Ge, t)
    }
    _getOuterElement(t) {
        return t.closest(id) || t
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = kt.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
                    throw new TypeError(`No method named "${t}"`);
                e[t]()
            }
        })
    }
}
l.on(document, zc, pn, function(s) {
    ["A", "AREA"].includes(this.tagName) && s.preventDefault(),
    !nt(this) && kt.getOrCreateInstance(this).show()
});
l.on(window, qc, ()=>{
    for (const s of p.find(od))
        kt.getOrCreateInstance(s)
}
);
U(kt);
const ad = "toast"
  , rd = "bs.toast"
  , lt = `.${rd}`
  , ld = `mouseover ${lt}`
  , cd = `mouseout ${lt}`
  , dd = `focusin ${lt}`
  , ud = `focusout ${lt}`
  , hd = `hide ${lt}`
  , fd = `hidden ${lt}`
  , pd = `show ${lt}`
  , Ad = `shown ${lt}`
  , md = "fade"
  , hi = "hide"
  , he = "show"
  , fe = "showing"
  , gd = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
}
  , vd = {
    animation: !0,
    autohide: !0,
    delay: 5e3
};
class Ne extends K {
    constructor(t, e) {
        super(t, e),
        this._timeout = null,
        this._hasMouseInteraction = !1,
        this._hasKeyboardInteraction = !1,
        this._setListeners()
    }
    static get Default() {
        return vd
    }
    static get DefaultType() {
        return gd
    }
    static get NAME() {
        return ad
    }
    show() {
        if (l.trigger(this._element, pd).defaultPrevented)
            return;
        this._clearTimeout(),
        this._config.animation && this._element.classList.add(md);
        const e = ()=>{
            this._element.classList.remove(fe),
            l.trigger(this._element, Ad),
            this._maybeScheduleHide()
        }
        ;
        this._element.classList.remove(hi),
        jt(this._element),
        this._element.classList.add(he, fe),
        this._queueCallback(e, this._element, this._config.animation)
    }
    hide() {
        if (!this.isShown() || l.trigger(this._element, hd).defaultPrevented)
            return;
        const e = ()=>{
            this._element.classList.add(hi),
            this._element.classList.remove(fe, he),
            l.trigger(this._element, fd)
        }
        ;
        this._element.classList.add(fe),
        this._queueCallback(e, this._element, this._config.animation)
    }
    dispose() {
        this._clearTimeout(),
        this.isShown() && this._element.classList.remove(he),
        super.dispose()
    }
    isShown() {
        return this._element.classList.contains(he)
    }
    _maybeScheduleHide() {
        !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
            this.hide()
        }
        , this._config.delay))
    }
    _onInteraction(t, e) {
        switch (t.type) {
        case "mouseover":
        case "mouseout":
            {
                this._hasMouseInteraction = e;
                break
            }
        case "focusin":
        case "focusout":
            {
                this._hasKeyboardInteraction = e;
                break
            }
        }
        if (e) {
            this._clearTimeout();
            return
        }
        const i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide()
    }
    _setListeners() {
        l.on(this._element, ld, t=>this._onInteraction(t, !0)),
        l.on(this._element, cd, t=>this._onInteraction(t, !1)),
        l.on(this._element, dd, t=>this._onInteraction(t, !0)),
        l.on(this._element, ud, t=>this._onInteraction(t, !1))
    }
    _clearTimeout() {
        clearTimeout(this._timeout),
        this._timeout = null
    }
    static jQueryInterface(t) {
        return this.each(function() {
            const e = Ne.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof e[t] > "u")
                    throw new TypeError(`No method named "${t}"`);
                e[t](this)
            }
        })
    }
}
Ce(Ne);
U(Ne);
const Ut = s=>(Rn("data-v-b295f216"),
s = s(),
Mn(),
s)
  , _d = {
    key: 0
}
  , Ed = {
    class: "nav-module"
}
  , bd = {
    class: "navbar navbar-expand-lg navbar-light bg-light"
}
  , yd = Ut(()=>y("a", {
    class: "navbar-brand",
    href: ""
}, [y("img", {
    src: to,
    alt: ""
})], -1))
  , Td = Ut(()=>y("span", {
    class: "navbar-toggler-icon"
}, null, -1))
  , wd = [Td]
  , Cd = Ut(()=>y("ul", {
    class: "navbar-nav"
}, [y("li", {
    class: "nav-item active"
}, [y("a", {
    class: "nav-link",
    href: "#home"
}, "Home")]), y("li", {
    class: "nav-item"
}, [y("a", {
    class: "nav-link",
    href: "#about"
}, "ABOUT")]), y("li", {
    class: "nav-item"
}, [y("a", {
    class: "nav-link",
    href: "#related"
}, "RELATED")]), y("li", {
    class: "nav-item"
}, [y("a", {
    class: "nav-link",
    href: "#reviews"
}, "REVIEWS")])], -1))
  , Dd = [Cd]
  , Sd = In('<div class="banner-module" id="home" data-v-b295f216><div class="container" data-v-b295f216><div class="carousel slide" data-ride="carousel" data-v-b295f216><div class="carousel-inner" data-v-b295f216><div class="carousel-item active" data-v-b295f216><div class="row" data-v-b295f216><div class="col-md-6" style="color:#fff;font-size:43px;" data-v-b295f216><h1 class="video_text" data-v-b295f216>Papa&#39;s Pizzeria To Go!</h1><h1 class="" style="color:#fff;font-size:24px;" data-v-b295f216>Strategy</h1></div></div></div></div></div></div></div><div class="video_section layout_padding" id="about" style="margin-top:0;background-size:cover;" data-v-b295f216><div class="container" data-v-b295f216><div class="row" data-v-b295f216><div class="col-md-6" data-v-b295f216><h1 class="video_text_2" data-v-b295f216>Papa&#39;s Pizzeria To Go!</h1><p style="colo-r:#fff;" data-v-b295f216>Top, bake, and serve pizzas in Papa&#39;s Pizzeria To Go! This all-new version of the classic restaurant sim features updated gameplay and brand-new controls reimagined for smaller screens.<br data-v-b295f216><br data-v-b295f216> You&#39;ll need to multitask between each area of the pizzeria, with new controls designed to work just right in the palm of your hand. Head to the Order Station to watch for customers waiting in the lobby. Switch to the Topping Station to add a variety of toppings to each pizza. Move to the Bake Station to cook the pizzas in the oven until they&#39;re baked just right. Jump to the Cutting Station to cut the pizza into perfect slices. Each station is a hands-on experience, where you&#39;ll need to drag, swipe, and tap your way through the pizza-building process.<br data-v-b295f216><br data-v-b295f216> Keep your customers happy to earn more points and level up. As your level rises, you&#39;ll unlock new toppings in the shop, and new customers will start visiting the Pizzeria! A well-crafted pizza also earns you tips, which you can spend on upgrades and decorations for the lobby!<br data-v-b295f216><br data-v-b295f216> ** NEW FOR PAPA&#39;S PIZZERIA TO GO **<br data-v-b295f216><br data-v-b295f216> Papa&#39;s Pizzeria To Go is redesigned and reimagined for smaller screens, so your fingers don&#39;t get in the way of the action!<br data-v-b295f216><br data-v-b295f216> CONTROL WITH YOUR THUMBS - You&#39;ll switch stations using buttons in the corners of the screen, perfect for your thumbs. You can also use buttons in the top corners to quickly switch Order Tickets, and you can view all of your Order Tickets in a zoomed-in mode for easy reading.<br data-v-b295f216><br data-v-b295f216> TOPPING STATION - We&#39;ve completely redesigned the Topping Station for smaller screens. Bins of toppings can be scrolled with your thumb, which allows us to have many more toppings than in the original game. Tap on a bin to select that topping, then tap multiple times on the pizza to add items directly onto the pizza. You don&#39;t need to drag individual toppings onto the pizza, so you can top faster than ever! A quick swipe on the pizza will send it off the to the Bake Station.<br data-v-b295f216><br data-v-b295f216> BAKE STATION - Papa Louie&#39;s coal-fired oven gets an upgrade! You can buy new Oven Alarms in the Shop to help you keep track of pizzas in the oven. Simply drag an alarm onto one of the oven timers, and you&#39;ll hear an alert when that pizza is cooked just right. Buy new Oven Boosters to cook your pizzas even faster than before!<br data-v-b295f216><br data-v-b295f216> CUTTING STATION - When it&#39;s time to cut pizzas, simply touch and drag a line across the pizza to decide where to cut. If you want even more control to fine-tune your slices, you can also cut using multi-touch! Use two fingers or thumbs to move each end of the line at the same time, and release to slice your pizza. If you&#39;re having trouble cutting pizzas at the right angle, buy a variety of Cutting Guides in the Shop to cut that perfect slice!<br data-v-b295f216><br data-v-b295f216> NEW INGREDIENTS - We&#39;ve added a ton of new ingredients which can&#39;t be found in the original Papa&#39;s Pizzeria. As you play the game, you&#39;ll unlock 26 unique ingredients to serve your customers!<br data-v-b295f216><br data-v-b295f216> CUSTOMIZE YOUR LOBBY - You can spend your hard-earned tips in the Shop, where you can find a variety of posters, tables, decorations, and wallpaper styles for your lobby! Use the brand-new Lobby tool to add items to your restaurant, and move and arrange them however you like! Choose from over 140 customization items, and every item you add to the lobby will improve your Waiting Score for your customers!<br data-v-b295f216><br data-v-b295f216> UPDATED FEATURES - Serve picky closers at the end of the day, earn paychecks as you play the game, and try to please the finicky Food Critic to earn a Blue Ribbon!<br data-v-b295f216><br data-v-b295f216> **GAME FEATURES**<br data-v-b295f216><br data-v-b295f216> - Hands-on pizza shop in the Papa Louie universe<br data-v-b295f216> - All new controls and gameplay designed for smaller screens<br data-v-b295f216> - Multi-task between topping, baking, and cutting<br data-v-b295f216> - Shop to buy upgrades, furniture, and posters using your in-game tips<br data-v-b295f216> - New Lobby Editor to customize and decorate your shop<br data-v-b295f216> - 90 customers to unlock with unique orders<br data-v-b295f216> - Challenging Closers and Food Critic<br data-v-b295f216> -75 in-game achievements to earn</p></div><div class="col-md-6" data-v-b295f216><div class="image_4" data-v-b295f216><img src="' + eo + '" data-v-b295f216></div></div></div></div></div><div class="related-module container" id="related" data-v-b295f216><h1 class="title" data-v-b295f216>RELATED</h1><div class="product_section_2" data-v-b295f216><div class="row" data-v-b295f216><div class="col-md-6" data-v-b295f216><div class="image_2" data-v-b295f216><img style="width:100%;height:300px;object-fit:cover;" class="img-responsive" src="' + so + '" alt=" " data-v-b295f216></div><h1 class="game_text" data-v-b295f216>Total Football</h1><p class="long_text" data-v-b295f216>Total Football offers you Magnificent 11v11 gaming experience and Diversity of game mode.</p></div><div class="col-md-6" data-v-b295f216><div class="image_2" data-v-b295f216><img style="width:100%;height:300px;object-fit:cover;" class="img-responsive" src="' + io + '" alt=" " data-v-b295f216></div><h1 class="game_text" data-v-b295f216>aa</h1><p class="long_text" data-v-b295f216>aa is the &quot;hello world&quot; app for iPhones, iPads &amp; iPods.</p></div><div class="col-md-6" data-v-b295f216><div class="image_2" data-v-b295f216><img style="width:100%;height:300px;object-fit:cover;" class="img-responsive" src="' + no + '" alt=" " data-v-b295f216></div><h1 class="game_text" data-v-b295f216>Reigns</h1><p class="long_text" data-v-b295f216>** Play Store Most Innovative Game of 2016 ** Sit on the throne as a benevolent (or malevolent) medieval monarch of the modern age and swipe your royal fingers either left or right to impose your will upon the kingdom.</p></div></div></div></div><div class="testimonial_section layout_padding" id="reviews" data-v-b295f216><div class="container" data-v-b295f216><h1 class="testimonial_text" data-v-b295f216>Comments</h1><div class="testimonial_section_2" data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>Its really fun! You make pizzas for the customers, and it shows you how good you did. I dont like these things though, 1 is that the animations arent like the computer, computer animations are cool! And number 2 is that I really get mixed up with the orders, maybe you can change the way it works. Anyways its awesome to play!!!</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + oo + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Fritz Bradtke</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>I mean this is a good game and all also childhood memories but i woldnt recommend it because it&#39;s outdated like dounutsria you can make your own people but In this they make it for you then also in dounutsria yo have challenges you can do and parides it&#39;s just more fun but this got none of that I prefer the more new versions but it&#39;s your desicion if you still want to play it and I&#39;m sad that I can&#39;t refund because it&#39;s taking up so much storage Thanks for reading.</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + ao + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Patsy Sipes</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>This game is plain ole&#39; hard, we get to many orders and over time we end up Giving customers the wrong pizza, then tips go down, so if you could add something to fix that, that would be amazing, thanks!</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + ro + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Lelah Hilpert</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>Great game that has some unfortunate bugs. Got to the point I unlocked Marty, and every time I made his pizza, despite topping it and baking it the way I was supposed to, it glitched out and acted like it had only some toppings and wasn&#39;t cooked right. Really annoying. Still, very fun beyond that.</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + lo + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Gwen Hickle</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>used to play it on PC... fully satisfied with the mobile version (so far)</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + co + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Lon Hills</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>The game is lacking clarity, seems like it runs only at a low resolution. If an HD update is to be made, that would make it a perfect game to relive my nostalgia.</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + uo + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Laverna Cassin</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>Is a fun game as all the papa games are, but a few things could be improved. The slice cutting markers for instance should be shown in the pizza (dotted lines) so can get precise cuts. Topping automation purchases would also be good. The timers for cooking the pizza, since when did papa games require you manually set the timers instead of it being automated to the customer?? For now giving a 2 star rating. Rather disappointed with this purchase</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + ho + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Mr. Alexandre Goldner DVM</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>I remember playing this game waaaay back when it first came out on PC and back then I loved it. I still think it&#39;s pretty good but it would be better if you could turn off the music like you can in the newer games. A quick upgrade to the ones that force you to listen to the music is a must in my book then I&#39;ll definitely rate 5 stars. To all those complaining about this game it&#39;s the first game so of course there&#39;s going to be some features that are different from the others.</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + fo + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Annette Yost</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>I love this game I&#39;ve played it for a few months now and have 100% completed the game, achievements and all, this game is super fast paced and is a great stress relief, the game play stays the same for most the game but the challenge is getting better score getting achievements, or improving your speed this is definitely worth the small price tag. \u{1F44D}</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + po + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Mrs. Lillie Hoppe</h1></div></div></div><br data-v-b295f216><br data-v-b295f216><div class="box_main" data-v-b295f216><div class="quote_icon" data-v-b295f216><img src="' + W + '" data-v-b295f216></div><p class="dolor_text" data-v-b295f216>Although not identical to the original, it has nearly the same vibes as when I played it 8 years ago or so. For the price and nostalgia am very happy. Maybe make papas pizzeria 2 that&#39;s maybe a bit more difficult and with more details like making the dough or the sauce or cutting the veggies before the day starts. But keeping the same atmosphere would be great.</p><div class="client_main" data-v-b295f216><div class="client_left" data-v-b295f216><div class="images_5" data-v-b295f216><img src="' + Ao + '" data-v-b295f216></div></div><div class="client_right" data-v-b295f216><h1 class="sandy_text" data-v-b295f216>Mr. Lemuel Bartell</h1></div></div></div><br data-v-b295f216><br data-v-b295f216></div></div></div>', 4)
  , Od = {
    key: 1,
    class: "game-wrapper-module"
}
  , Nd = Ut(()=>y("div", {
    class: "game-title"
}, [y("img", {
    src: Fn,
    alt: ""
}), y("h1", null, "Bem-vindo")], -1))
  , Id = {
    class: "game-prize-module"
}
  , Ld = {
    class: "game-prize"
}
  , Rd = Ut(()=>y("h1", null, "OK", -1))
  , Md = Ut(()=>y("div", {
    class: "content"
}, "Voc\xEA recebe 100% de b\xF4nus", -1))
  , xd = {
    __name: "home",
    setup(s) {
        const t = Ot(0)
          , e = Ot(!1)
          , i = Ot(0)
          , n = Kn()
          , o = Dn({
            navShow: !0
        });
        /Mobi|Android|iPhone/i.test(navigator.userAgent) ? t.value = 2 : (window.frames.length == parent.frames.length && n.push({
            path: "/iframe"
        }),
        setTimeout(()=>{
            t.value = 2
        }
        , 500)),
        Sn(()=>{
            window.addEventListener("resize", ()=>{
                o.navShow = !0
            }
            )
        }
        );
        const a = ()=>{
            i.value = 2084,
            setTimeout(()=>{
                e.value = !0
            }
            , 5e3)
        }
          , r = ()=>{
            window.location.href = "/store/index.html"
        }
        ;
        return (c,u)=>{
            const d = Jn;
            return ne(),
            oe(Nn, null, [t.value === 1 ? (ne(),
            oe("div", _d, [y("div", Ed, [y("nav", bd, [yd, y("button", {
                class: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNav",
                "aria-controls": "navbarNav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                onClick: u[0] || (u[0] = f=>o.navShow = !o.navShow)
            }, wd), ge(fi, {
                name: "fade"
            }, {
                default: Os(()=>[o.navShow ? (ne(),
                oe("div", {
                    key: 0,
                    class: Ln(["collapse navbar-collapse", o.navShow ? "show" : ""]),
                    id: "navbarNav"
                }, Dd, 2)) : Ns("", !0)]),
                _: 1
            })])]), Sd])) : t.value === 2 ? (ne(),
            oe("div", Od, [Nd, y("div", Id, [y("div", Ld, [y("img", {
                style: On({
                    transform: `rotate(${i.value}deg)`
                }),
                src: mo,
                alt: ""
            }, null, 4)]), y("button", {
                type: "button",
                onClick: a
            }, "SPIN")])])) : Ns("", !0), ge(d, {
                show: e.value,
                onClick: u[1] || (u[1] = f=>e.value = !1)
            }, {
                default: Os(()=>[y("div", {
                    class: "pop-module"
                }, [Rd, Md, y("button", {
                    type: "button",
                    onClick: r
                }, "Obtenha")])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
}
  , Qd = Cn(xd, [["__scopeId", "data-v-b295f216"]]);
export {Qd as default};
