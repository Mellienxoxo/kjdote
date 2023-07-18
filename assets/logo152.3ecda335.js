import {e as l, b as d} from "./index.3fd2f073.js";
function D() {}
const Z = Object.assign
  , g = typeof window < "u";
function i(u, e) {
    const n = e.split(".");
    let t = u;
    return n.forEach(s=>{
        var r;
        t = (r = t[s]) != null ? r : ""
    }
    ),
    t
}
const K = null
  , M = [Number, String]
  , O = {
    type: Boolean,
    default: !0
}
  , Y = u=>({
    type: String,
    default: u
})
  , f = u=>u != null
  , P = u=>typeof u == "function"
  , m = u=>u !== null && typeof u == "object"
  , A = u=>typeof u == "number" || /^\d+(\.\d+)?$/.test(u)
  , W = ()=>g ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function x(u) {
    if (f(u))
        return A(u) ? `${u}px` : String(u)
}
function G(u) {
    const e = {};
    return u !== void 0 && (e.zIndex = +u),
    e
}
const B = /-(\w)/g
  , E = u=>u.replace(B, (e,n)=>n.toUpperCase())
  , b = u=>u.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "")
  , {hasOwnProperty: h} = Object.prototype;
function p(u, e, n) {
    const t = e[n];
    !f(t) || (!h.call(u, n) || !m(t) ? u[n] = t : u[n] = v(Object(u[n]), t))
}
function v(u, e) {
    return Object.keys(e).forEach(n=>{
        p(u, e, n)
    }
    ),
    u
}
var F = {
    name: "\u59D3\u540D",
    tel: "\u7535\u8BDD",
    save: "\u4FDD\u5B58",
    confirm: "\u786E\u8BA4",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    loading: "\u52A0\u8F7D\u4E2D...",
    noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
    nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
    addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
    telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
    vanCalendar: {
        end: "\u7ED3\u675F",
        start: "\u5F00\u59CB",
        title: "\u65E5\u671F\u9009\u62E9",
        weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
        monthTitle: (u,e)=>`${u}\u5E74 ${e}\u6708`,
        rangePrompt: u=>`\u6700\u591A\u9009\u62E9 ${u} \u5929`
    },
    vanCascader: {
        select: "\u8BF7\u9009\u62E9"
    },
    vanPagination: {
        prev: "\u4E0A\u4E00\u9875",
        next: "\u4E0B\u4E00\u9875"
    },
    vanPullRefresh: {
        pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
        loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
    },
    vanSubmitBar: {
        label: "\u5408\u8BA1:"
    },
    vanCoupon: {
        unlimited: "\u65E0\u95E8\u69DB",
        discount: u=>`${u}\u6298`,
        condition: u=>`\u6EE1 ${u}\u5143\u53EF\u7528`
    },
    vanCouponCell: {
        title: "\u4F18\u60E0\u5238",
        count: u=>`${u}\u5F20\u53EF\u7528`
    },
    vanCouponList: {
        exchange: "\u5151\u6362",
        close: "\u4E0D\u4F7F\u7528",
        enable: "\u53EF\u7528",
        disabled: "\u4E0D\u53EF\u7528",
        placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
    },
    vanAddressEdit: {
        area: "\u5730\u533A",
        areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
        addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
        addressDetail: "\u8BE6\u7EC6\u5730\u5740",
        defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
    },
    vanAddressList: {
        add: "\u65B0\u589E\u5730\u5740"
    }
};
const o = l("zh-CN")
  , c = d({
    "zh-CN": F
})
  , j = {
    messages() {
        return c[o.value]
    },
    use(u, e) {
        o.value = u,
        this.add({
            [u]: e
        })
    },
    add(u={}) {
        v(c, u)
    }
};
var y = j;
function z(u) {
    const e = E(u) + ".";
    return (n,...t)=>{
        const s = y.messages()
          , r = i(s, e + n) || i(s, n);
        return P(r) ? r(...t) : r
    }
}
function a(u, e) {
    return e ? typeof e == "string" ? ` ${u}--${e}` : Array.isArray(e) ? e.reduce((n,t)=>n + a(u, t), "") : Object.keys(e).reduce((n,t)=>n + (e[t] ? a(u, t) : ""), "") : ""
}
function L(u) {
    return (e,n)=>(e && typeof e != "string" && (n = e,
    e = ""),
    e = e ? `${u}__ ${e}` : u,
    `${e}${a(e, n)}`)
}
function w(u) {
    const e = `van-${u}`;
    return [e, L(e), z(e)]
}
function N(u) {
    return u.install = e=>{
        const {name: n} = u;
        e.component(n, u),
        e.component(E(`-${n}`), u)
    }
    ,
    u
}
const I = "data:image/png;base64,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";
export {I as _, x as a, A as b, w as c, g as d, W as e, Z as f, G as g, D as h, f as i, b as k, Y as m, M as n, O as t, K as u, N as w};
