var ka = Object.defineProperty;
var Va = (w, v, m) => v in w ? ka(w, v, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: m
}) : w[v] = m;
var _ = (w, v, m) => (Va(w, typeof v != "symbol" ? v + "" : v, m), m);

function Sa(w, v) {
    for (var m = 0; m < v.length; m++) {
        const g = v[m];
        if (typeof g != "string" && !Array.isArray(g)) {
            for (const x in g)
                if (x !== "default" && !(x in w)) {
                    const L = Object.getOwnPropertyDescriptor(g, x);
                    L && Object.defineProperty(w, x, L.get ? L : {
                        enumerable: !0,
                        get: () => g[x]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(w, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const v = document.createElement("link").relList;
    if (v && v.supports && v.supports("modulepreload")) return;
    for (const x of document.querySelectorAll('link[rel="modulepreload"]')) g(x);
    new MutationObserver(x => {
        for (const L of x)
            if (L.type === "childList")
                for (const $ of L.addedNodes) $.tagName === "LINK" && $.rel === "modulepreload" && g($)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function m(x) {
        const L = {};
        return x.integrity && (L.integrity = x.integrity), x.referrerpolicy && (L.referrerPolicy = x.referrerpolicy), x.crossorigin === "use-credentials" ? L.credentials = "include" : x.crossorigin === "anonymous" ? L.credentials = "omit" : L.credentials = "same-origin", L
    }

    function g(x) {
        if (x.ep) return;
        x.ep = !0;
        const L = m(x);
        fetch(x.href, L)
    }
})();
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function La(w) {
    return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w
}
var Ci = {
    exports: {}
};
(function(w, v) {
        (function(m, g) {
            g(v)
        })(Er, function(m) {
                class g {
                    constructor(i) {
                        this.controller_ = i
                    }
                    get element() {
                        return this.controller_.view.element
                    }
                    get disabled() {
                        return this.controller_.viewProps.get("disabled")
                    }
                    set disabled(i) {
                        this.controller_.viewProps.set("disabled", i)
                    }
                    get hidden() {
                        return this.controller_.viewProps.get("hidden")
                    }
                    set hidden(i) {
                        this.controller_.viewProps.set("hidden", i)
                    }
                    dispose() {
                        this.controller_.viewProps.set("disposed", !0)
                    }
                }
                class x {
                    constructor(i) {
                        this.target = i
                    }
                }
                class L extends x {
                    constructor(i, r, a, p) {
                        super(i), this.value = r, this.presetKey = a, this.last = p != null ? p : !0
                    }
                }

                function $(o) {
                    return o
                }

                function N(o) {
                    return o == null
                }
                const xt = {
                    alreadydisposed: () => "View has been already disposed",
                    invalidparams: o => `Invalid parameters for '${o.name}'`,
                    nomatchingcontroller: o => `No matching controller for '${o.key}'`,
                    nomatchingview: o => `No matching view for '${JSON.stringify(o.params)}'`,
                    notbindable: () => "Value is not bindable",
                    propertynotfound: o => `Property '${o.name}' not found`,
                    shouldneverhappen: () => "This error should never happen"
                };
                class nt {
                    constructor(i) {
                        var r;
                        this.message = (r = xt[i.type](i.context)) !== null && r !== void 0 ? r : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = i.type
                    }
                    static alreadyDisposed() {
                        return new nt({
                            type: "alreadydisposed"
                        })
                    }
                    static notBindable() {
                        return new nt({
                            type: "notbindable"
                        })
                    }
                    static propertyNotFound(i) {
                        return new nt({
                            type: "propertynotfound",
                            context: {
                                name: i
                            }
                        })
                    }
                    static shouldNeverHappen() {
                        return new nt({
                            type: "shouldneverhappen"
                        })
                    }
                }
                class lt {
                    constructor() {
                        this.observers_ = {}
                    }
                    on(i, r) {
                        let a = this.observers_[i];
                        return a || (a = this.observers_[i] = []), a.push({
                            handler: r
                        }), this
                    }
                    off(i, r) {
                        const a = this.observers_[i];
                        return a && (this.observers_[i] = a.filter(p => p.handler !== r)), this
                    }
                    emit(i, r) {
                        const a = this.observers_[i];
                        !a || a.forEach(p => {
                            p.handler(r)
                        })
                    }
                }
                const A = "tp";

                function j(o) {
                    return (r, a) => [A, "-", o, "v", r ? `_${r}` : "", a ? `-${a}` : ""].join("")
                }

                function Dn(o, i) {
                    return r => i(o(r))
                }

                function yi(o) {
                    return o.rawValue
                }

                function k(o, i) {
                    o.emitter.on("change", Dn(yi, i)), i(o.rawValue)
                }

                function it(o, i, r) {
                    k(o.value(i), r)
                }

                function Rn(o, i, r) {
                    r ? o.classList.add(i) : o.classList.remove(i)
                }

                function O(o, i) {
                    return r => {
                        Rn(o, i, r)
                    }
                }

                function Pi(o, i) {
                    k(o, r => {
                        i.textContent = r != null ? r : ""
                    })
                }
                const V = j("btn");
                class Ei {
                    constructor(i, r) {
                        this.element = i.createElement("div"), this.element.classList.add(V()), r.viewProps.bindClassModifiers(this.element);
                        const a = i.createElement("button");
                        a.classList.add(V("b")), r.viewProps.bindDisabled(a), this.element.appendChild(a), this.buttonElement = a;
                        const p = i.createElement("div");
                        p.classList.add(V("t")), Pi(r.props.value("title"), p), this.buttonElement.appendChild(p)
                    }
                }
                class ki {
                    constructor(i, r) {
                        this.emitter = new lt, this.onClick_ = this.onClick_.bind(this), this.props = r.props, this.viewProps = r.viewProps, this.view = new Ei(i, {
                            props: this.props,
                            viewProps: this.viewProps
                        }), this.view.buttonElement.addEventListener("click", this.onClick_)
                    }
                    onClick_() {
                        this.emitter.emit("click", {
                            sender: this
                        })
                    }
                }
                class _t {
                    constructor(i, r) {
                        var a;
                        this.constraint_ = r == null ? void 0 : r.constraint, this.equals_ = (a = r == null ? void 0 : r.equals) !== null && a !== void 0 ? a : (p, d) => p === d, this.emitter = new lt, this.rawValue_ = i
                    }
                    get constraint() {
                        return this.constraint_
                    }
                    get rawValue() {
                        return this.rawValue_
                    }
                    set rawValue(i) {
                        this.setRawValue(i, {
                            forceEmit: !1,
                            last: !0
                        })
                    }
                    setRawValue(i, r) {
                        const a = r != null ? r : {
                                forceEmit: !1,
                                last: !0
                            },
                            p = this.constraint_ ? this.constraint_.constrain(i) : i;
                        !!this.equals_(this.rawValue_, p) && !a.forceEmit || (this.emitter.emit("beforechange", {
                            sender: this
                        }), this.rawValue_ = p, this.emitter.emit("change", {
                            options: a,
                            rawValue: p,
                            sender: this
                        }))
                    }
                }
                class dt {
                    constructor(i) {
                        this.emitter = new lt, this.value_ = i
                    }
                    get rawValue() {
                        return this.value_
                    }
                    set rawValue(i) {
                        this.setRawValue(i, {
                            forceEmit: !1,
                            last: !0
                        })
                    }
                    setRawValue(i, r) {
                        const a = r != null ? r : {
                            forceEmit: !1,
                            last: !0
                        };
                        this.value_ === i && !a.forceEmit || (this.emitter.emit("beforechange", {
                            sender: this
                        }), this.value_ = i, this.emitter.emit("change", {
                            options: a,
                            rawValue: this.value_,
                            sender: this
                        }))
                    }
                }

                function gt(o, i) {
                    const r = i == null ? void 0 : i.constraint,
                        a = i == null ? void 0 : i.equals;
                    return !r && !a ? new dt(o) : new _t(o, i)
                }
                class R {
                    constructor(i) {
                        this.emitter = new lt, this.valMap_ = i;
                        for (const r in this.valMap_) this.valMap_[r].emitter.on("change", () => {
                            this.emitter.emit("change", {
                                key: r,
                                sender: this
                            })
                        })
                    }
                    static createCore(i) {
                        return Object.keys(i).reduce((a, p) => Object.assign(a, {
                            [p]: gt(i[p])
                        }), {})
                    }
                    static fromObject(i) {
                        const r = this.createCore(i);
                        return new R(r)
                    }
                    get(i) {
                        return this.valMap_[i].rawValue
                    }
                    set(i, r) {
                        this.valMap_[i].rawValue = r
                    }
                    value(i) {
                        return this.valMap_[i]
                    }
                }

                function qe(o, i) {
                    const a = Object.keys(i).reduce((p, d) => {
                        if (p === void 0) return;
                        const u = i[d],
                            f = u(o[d]);
                        return f.succeeded ? Object.assign(Object.assign({}, p), {
                            [d]: f.value
                        }) : void 0
                    }, {});
                    return a
                }

                function Ge(o, i) {
                    return o.reduce((r, a) => {
                        if (r === void 0) return;
                        const p = i(a);
                        if (!(!p.succeeded || p.value === void 0)) return [...r, p.value]
                    }, [])
                }

                function Vi(o) {
                    return o === null ? !1 : typeof o == "object"
                }

                function ht(o) {
                    return i => r => {
                        if (!i && r === void 0) return {
                            succeeded: !1,
                            value: void 0
                        };
                        if (i && r === void 0) return {
                            succeeded: !0,
                            value: void 0
                        };
                        const a = o(r);
                        return a !== void 0 ? {
                            succeeded: !0,
                            value: a
                        } : {
                            succeeded: !1,
                            value: void 0
                        }
                    }
                }

                function zn(o) {
                    return {
                        custom: i => ht(i)(o),
                        boolean: ht(i => typeof i == "boolean" ? i : void 0)(o),
                        number: ht(i => typeof i == "number" ? i : void 0)(o),
                        string: ht(i => typeof i == "string" ? i : void 0)(o),
                        function: ht(i => typeof i == "function" ? i : void 0)(o),
                        constant: i => ht(r => r === i ? i : void 0)(o),
                        raw: ht(i => i)(o),
                        object: i => ht(r => {
                            if (!!Vi(r)) return qe(r, i)
                        })(o),
                        array: i => ht(r => {
                            if (!!Array.isArray(r)) return Ge(r, i)
                        })(o)
                    }
                }
                const Mt = {
                    optional: zn(!0),
                    required: zn(!1)
                };

                function F(o, i) {
                    const r = Mt.required.object(i)(o);
                    return r.succeeded ? r.value : void 0
                }

                function P(o) {
                    return o && o.parentElement && o.parentElement.removeChild(o), null
                }

                function Si() {
                    return ["veryfirst", "first", "last", "verylast"]
                }
                const Nn = j(""),
                    On = {
                        veryfirst: "vfst",
                        first: "fst",
                        last: "lst",
                        verylast: "vlst"
                    };
                class ut {
                    constructor(i) {
                        this.parent_ = null, this.blade = i.blade, this.view = i.view, this.viewProps = i.viewProps;
                        const r = this.view.element;
                        this.blade.value("positions").emitter.on("change", () => {
                            Si().forEach(a => {
                                r.classList.remove(Nn(void 0, On[a]))
                            }), this.blade.get("positions").forEach(a => {
                                r.classList.add(Nn(void 0, On[a]))
                            })
                        }), this.viewProps.handleDispose(() => {
                            P(r)
                        })
                    }
                    get parent() {
                        return this.parent_
                    }
                }
                const J = "http://www.w3.org/2000/svg";

                function D(o) {
                    o.offsetHeight
                }

                function q(o, i) {
                    const r = o.style.transition;
                    o.style.transition = "none", i(), o.style.transition = r
                }

                function xe(o) {
                    return o.ontouchstart !== void 0
                }

                function Li(o) {
                    for (; o.childNodes.length > 0;) o.removeChild(o.childNodes[0])
                }

                function Ye(o) {
                    return o.relatedTarget ? o.relatedTarget : "explicitOriginalTarget" in o ? o.explicitOriginalTarget : null
                }
                const Qt = j("lbl");

                function In(o, i) {
                    const r = o.createDocumentFragment();
                    return i.split(`
`).map(p => o.createTextNode(p)).forEach((p, d) => {
                        d > 0 && r.appendChild(o.createElement("br")), r.appendChild(p)
                    }), r
                }
                class vt {
                    constructor(i, r) {
                        this.element = i.createElement("div"), this.element.classList.add(Qt()), r.viewProps.bindClassModifiers(this.element);
                        const a = i.createElement("div");
                        a.classList.add(Qt("l")), it(r.props, "label", d => {
                            N(d) ? this.element.classList.add(Qt(void 0, "nol")) : (this.element.classList.remove(Qt(void 0, "nol")), Li(a), a.appendChild(In(i, d)))
                        }), this.element.appendChild(a), this.labelElement = a;
                        const p = i.createElement("div");
                        p.classList.add(Qt("v")), this.element.appendChild(p), this.valueElement = p
                    }
                }
                class Ce extends ut {
                    constructor(i, r) {
                        const a = r.valueController.viewProps;
                        super(Object.assign(Object.assign({}, r), {
                            view: new vt(i, {
                                props: r.props,
                                viewProps: a
                            }),
                            viewProps: a
                        })), this.props = r.props, this.valueController = r.valueController, this.view.valueElement.appendChild(this.valueController.view.element)
                    }
                }
                class Bn extends ut {
                    constructor(i) {
                        super(i), this.value = i.value
                    }
                }
                class ye extends R {
                    constructor(i) {
                        super(i)
                    }
                    static create(i) {
                        const r = {
                                completed: !0,
                                expanded: i,
                                expandedHeight: null,
                                shouldFixHeight: !1,
                                temporaryExpanded: null
                            },
                            a = R.createCore(r);
                        return new ye(a)
                    }
                    get styleExpanded() {
                        var i;
                        return (i = this.get("temporaryExpanded")) !== null && i !== void 0 ? i : this.get("expanded")
                    }
                    get styleHeight() {
                        if (!this.styleExpanded) return "0";
                        const i = this.get("expandedHeight");
                        return this.get("shouldFixHeight") && !N(i) ? `${i}px` : "auto"
                    }
                    bindExpandedClass(i, r) {
                        const a = () => {
                            this.styleExpanded ? i.classList.add(r) : i.classList.remove(r)
                        };
                        it(this, "expanded", a), it(this, "temporaryExpanded", a)
                    }
                    cleanUpTransition() {
                        this.set("shouldFixHeight", !1), this.set("expandedHeight", null), this.set("completed", !0)
                    }
                }

                function Zt(o) {
                    return ye.create(o)
                }

                function mt(o, i) {
                    let r = 0;
                    return q(i, () => {
                        o.set("expandedHeight", null), o.set("temporaryExpanded", !0), D(i), r = i.clientHeight, o.set("temporaryExpanded", null), D(i)
                    }), r
                }

                function te(o, i) {
                    i.style.height = o.styleHeight
                }

                function Mi(o, i) {
                    o.value("expanded").emitter.on("beforechange", () => {
                        o.set("completed", !1), N(o.get("expandedHeight")) && o.set("expandedHeight", mt(o, i)), o.set("shouldFixHeight", !0), D(i)
                    }), o.emitter.on("change", () => {
                        te(o, i)
                    }), te(o, i), i.addEventListener("transitionend", r => {
                        r.propertyName === "height" && o.cleanUpTransition()
                    })
                }
                class Pe {
                    constructor(i, r) {
                        const a = j(r.viewName);
                        this.element = i.createElement("div"), this.element.classList.add(a()), r.viewProps.bindClassModifiers(this.element)
                    }
                }
                class Ee extends Bn {
                    constructor(i, r) {
                        const a = r.valueController.viewProps;
                        super(Object.assign(Object.assign({}, r), {
                            value: r.valueController.value,
                            view: new vt(i, {
                                props: r.props,
                                viewProps: a
                            }),
                            viewProps: a
                        })), this.props = r.props, this.valueController = r.valueController, this.view.valueElement.appendChild(this.valueController.view.element)
                    }
                }
                const Ai = j("");

                function jn(o, i) {
                    return O(o, Ai(void 0, i))
                }
                class Bt extends R {
                    constructor(i) {
                        super(i)
                    }
                    static create(i) {
                        var r, a;
                        const p = i != null ? i : {},
                            d = {
                                disabled: (r = p.disabled) !== null && r !== void 0 ? r : !1,
                                disposed: !1,
                                hidden: (a = p.hidden) !== null && a !== void 0 ? a : !1
                            },
                            u = R.createCore(d);
                        return new Bt(u)
                    }
                    bindClassModifiers(i) {
                        it(this, "disabled", jn(i, "disabled")), it(this, "hidden", jn(i, "hidden"))
                    }
                    bindDisabled(i) {
                        it(this, "disabled", r => {
                            i.disabled = r
                        })
                    }
                    bindTabIndex(i) {
                        it(this, "disabled", r => {
                            i.tabIndex = r ? -1 : 0
                        })
                    }
                    handleDispose(i) {
                        this.value("disposed").emitter.on("change", r => {
                            r && i()
                        })
                    }
                }
                class ke {
                    constructor() {
                        this.disabled = !1, this.emitter = new lt
                    }
                    dispose() {}
                    tick() {
                        this.disabled || this.emitter.emit("tick", {
                            sender: this
                        })
                    }
                }
                class Fn {
                    constructor(i, r) {
                        this.disabled_ = !1, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = i, this.emitter = new lt, this.interval_ = r, this.setTimer_()
                    }
                    get disabled() {
                        return this.disabled_
                    }
                    set disabled(i) {
                        this.disabled_ = i, this.disabled_ ? this.clearTimer_() : this.setTimer_()
                    }
                    dispose() {
                        this.clearTimer_()
                    }
                    clearTimer_() {
                        if (this.timerId_ === null) return;
                        const i = this.doc_.defaultView;
                        i && i.clearInterval(this.timerId_), this.timerId_ = null
                    }
                    setTimer_() {
                        if (this.clearTimer_(), this.interval_ <= 0) return;
                        const i = this.doc_.defaultView;
                        i && (this.timerId_ = i.setInterval(this.onTick_, this.interval_))
                    }
                    onTick_() {
                        this.disabled_ || this.emitter.emit("tick", {
                            sender: this
                        })
                    }
                }
                class We {
                    constructor(i) {
                        this.constraints = i
                    }
                    constrain(i) {
                        return this.constraints.reduce((r, a) => a.constrain(r), i)
                    }
                }

                function ee(o, i) {
                    if (o instanceof i) return o;
                    if (o instanceof We) {
                        const r = o.constraints.reduce((a, p) => a || (p instanceof i ? p : null), null);
                        if (r) return r
                    }
                    return null
                }
                class Kn {
                    constructor(i) {
                        this.values = R.fromObject({
                            max: i.max,
                            min: i.min
                        })
                    }
                    constrain(i) {
                        const r = this.values.get("max"),
                            a = this.values.get("min");
                        return Math.min(Math.max(i, a), r)
                    }
                }
                class Ve {
                    constructor(i) {
                        this.values = R.fromObject({
                            max: i.max,
                            min: i.min
                        })
                    }
                    get maxValue() {
                        return this.values.get("max")
                    }
                    get minValue() {
                        return this.values.get("min")
                    }
                    constrain(i) {
                        const r = this.values.get("max"),
                            a = this.values.get("min");
                        let p = i;
                        return N(a) || (p = Math.max(p, a)), N(r) || (p = Math.min(p, r)), p
                    }
                }
                class Ct {
                    constructor(i, r = 0) {
                        this.step = i, this.origin = r
                    }
                    constrain(i) {
                        const r = this.origin % this.step,
                            a = Math.round((i - r) / this.step);
                        return r + a * this.step
                    }
                }
                const $n = j("pop");
                class Un {
                    constructor(i, r) {
                        this.element = i.createElement("div"), this.element.classList.add($n()), r.viewProps.bindClassModifiers(this.element), k(r.shows, O(this.element, $n(void 0, "v")))
                    }
                }
                class Se {
                    constructor(i, r) {
                        this.shows = gt(!1), this.viewProps = r.viewProps, this.view = new Un(i, {
                            shows: this.shows,
                            viewProps: this.viewProps
                        })
                    }
                }
                const Hn = j("txt");
                class jt {
                    constructor(i, r) {
                        this.onChange_ = this.onChange_.bind(this), this.element = i.createElement("div"), this.element.classList.add(Hn()), r.viewProps.bindClassModifiers(this.element), this.props_ = r.props, this.props_.emitter.on("change", this.onChange_);
                        const a = i.createElement("input");
                        a.classList.add(Hn("i")), a.type = "text", r.viewProps.bindDisabled(a), this.element.appendChild(a), this.inputElement = a, r.value.emitter.on("change", this.onChange_), this.value_ = r.value, this.refresh()
                    }
                    refresh() {
                        const i = this.props_.get("formatter");
                        this.inputElement.value = i(this.value_.rawValue)
                    }
                    onChange_() {
                        this.refresh()
                    }
                }
                class ne {
                    constructor(i, r) {
                        this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = r.parser, this.props = r.props, this.value = r.value, this.viewProps = r.viewProps, this.view = new jt(i, {
                            props: r.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }), this.view.inputElement.addEventListener("change", this.onInputChange_)
                    }
                    onInputChange_(i) {
                        const a = i.currentTarget.value,
                            p = this.parser_(a);
                        N(p) || (this.value.rawValue = p), this.view.refresh()
                    }
                }

                function ie(o) {
                    return o === "false" ? !1 : !!o
                }
                class Ti {
                    constructor(i) {
                        this.text = i
                    }
                    evaluate() {
                        return Number(this.text)
                    }
                    toString() {
                        return this.text
                    }
                }
                const qn = {
                    "**": (o, i) => Math.pow(o, i),
                    "*": (o, i) => o * i,
                    "/": (o, i) => o / i,
                    "%": (o, i) => o % i,
                    "+": (o, i) => o + i,
                    "-": (o, i) => o - i,
                    "<<": (o, i) => o << i,
                    ">>": (o, i) => o >> i,
                    ">>>": (o, i) => o >>> i,
                    "&": (o, i) => o & i,
                    "^": (o, i) => o ^ i,
                    "|": (o, i) => o | i
                };
                class Xe {
                    constructor(i, r, a) {
                        this.left = r, this.operator = i, this.right = a
                    }
                    evaluate() {
                        const i = qn[this.operator];
                        if (!i) throw new Error(`unexpected binary operator: '${this.operator}`);
                        return i(this.left.evaluate(), this.right.evaluate())
                    }
                    toString() {
                        return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ")
                    }
                }
                const Je = {
                    "+": o => o,
                    "-": o => -o,
                    "~": o => ~o
                };
                class Di {
                    constructor(i, r) {
                        this.operator = i, this.expression = r
                    }
                    evaluate() {
                        const i = Je[this.operator];
                        if (!i) throw new Error(`unexpected unary operator: '${this.operator}`);
                        return i(this.expression.evaluate())
                    }
                    toString() {
                        return ["u(", this.operator, this.expression.toString(), ")"].join(" ")
                    }
                }

                function Qe(o) {
                    return (i, r) => {
                        for (let a = 0; a < o.length; a++) {
                            const p = o[a](i, r);
                            if (p !== "") return p
                        }
                        return ""
                    }
                }

                function se(o, i) {
                    var r;
                    const a = o.substr(i).match(/^\s+/);
                    return (r = a && a[0]) !== null && r !== void 0 ? r : ""
                }

                function Ri(o, i) {
                    const r = o.substr(i, 1);
                    return r.match(/^[1-9]$/) ? r : ""
                }

                function At(o, i) {
                    var r;
                    const a = o.substr(i).match(/^[0-9]+/);
                    return (r = a && a[0]) !== null && r !== void 0 ? r : ""
                }

                function Ze(o, i) {
                    const r = At(o, i);
                    if (r !== "") return r;
                    const a = o.substr(i, 1);
                    if (i += 1, a !== "-" && a !== "+") return "";
                    const p = At(o, i);
                    return p === "" ? "" : a + p
                }

                function st(o, i) {
                    const r = o.substr(i, 1);
                    if (i += 1, r.toLowerCase() !== "e") return "";
                    const a = Ze(o, i);
                    return a === "" ? "" : r + a
                }

                function Le(o, i) {
                    const r = o.substr(i, 1);
                    if (r === "0") return r;
                    const a = Ri(o, i);
                    return i += a.length, a === "" ? "" : a + At(o, i)
                }

                function yt(o, i) {
                    const r = Le(o, i);
                    if (i += r.length, r === "") return "";
                    const a = o.substr(i, 1);
                    if (i += a.length, a !== ".") return "";
                    const p = At(o, i);
                    return i += p.length, r + a + p + st(o, i)
                }

                function zi(o, i) {
                    const r = o.substr(i, 1);
                    if (i += r.length, r !== ".") return "";
                    const a = At(o, i);
                    return i += a.length, a === "" ? "" : r + a + st(o, i)
                }

                function re(o, i) {
                    const r = Le(o, i);
                    return i += r.length, r === "" ? "" : r + st(o, i)
                }
                const Gn = Qe([yt, zi, re]);

                function Me(o, i) {
                    var r;
                    const a = o.substr(i).match(/^[01]+/);
                    return (r = a && a[0]) !== null && r !== void 0 ? r : ""
                }

                function tn(o, i) {
                    const r = o.substr(i, 2);
                    if (i += r.length, r.toLowerCase() !== "0b") return "";
                    const a = Me(o, i);
                    return a === "" ? "" : r + a
                }

                function en(o, i) {
                    var r;
                    const a = o.substr(i).match(/^[0-7]+/);
                    return (r = a && a[0]) !== null && r !== void 0 ? r : ""
                }

                function Ni(o, i) {
                    const r = o.substr(i, 2);
                    if (i += r.length, r.toLowerCase() !== "0o") return "";
                    const a = en(o, i);
                    return a === "" ? "" : r + a
                }

                function Oi(o, i) {
                    var r;
                    const a = o.substr(i).match(/^[0-9a-f]+/i);
                    return (r = a && a[0]) !== null && r !== void 0 ? r : ""
                }

                function Ii(o, i) {
                    const r = o.substr(i, 2);
                    if (i += r.length, r.toLowerCase() !== "0x") return "";
                    const a = Oi(o, i);
                    return a === "" ? "" : r + a
                }
                const Bi = Qe([tn, Ni, Ii]),
                    nn = Qe([Bi, Gn]);

                function ji(o, i) {
                    const r = nn(o, i);
                    return i += r.length, r === "" ? null : {
                        evaluable: new Ti(r),
                        cursor: i
                    }
                }

                function Fi(o, i) {
                    const r = o.substr(i, 1);
                    if (i += r.length, r !== "(") return null;
                    const a = Tt(o, i);
                    if (!a) return null;
                    i = a.cursor, i += se(o, i).length;
                    const p = o.substr(i, 1);
                    return i += p.length, p !== ")" ? null : {
                        evaluable: a.evaluable,
                        cursor: i
                    }
                }

                function oe(o, i) {
                    var r;
                    return (r = ji(o, i)) !== null && r !== void 0 ? r : Fi(o, i)
                }

                function sn(o, i) {
                    const r = oe(o, i);
                    if (r) return r;
                    const a = o.substr(i, 1);
                    if (i += a.length, a !== "+" && a !== "-" && a !== "~") return null;
                    const p = sn(o, i);
                    return p ? (i = p.cursor, {
                        cursor: i,
                        evaluable: new Di(a, p.evaluable)
                    }) : null
                }

                function Ki(o, i, r) {
                    r += se(i, r).length;
                    const a = o.filter(p => i.startsWith(p, r))[0];
                    return a ? (r += a.length, r += se(i, r).length, {
                        cursor: r,
                        operator: a
                    }) : null
                }

                function rn(o, i) {
                    return (r, a) => {
                        const p = o(r, a);
                        if (!p) return null;
                        a = p.cursor;
                        let d = p.evaluable;
                        for (;;) {
                            const u = Ki(i, r, a);
                            if (!u) break;
                            a = u.cursor;
                            const f = o(r, a);
                            if (!f) return null;
                            a = f.cursor, d = new Xe(u.operator, d, f.evaluable)
                        }
                        return d ? {
                            cursor: a,
                            evaluable: d
                        } : null
                    }
                }
                const $i = [
                    ["**"],
                    ["*", "/", "%"],
                    ["+", "-"],
                    ["<<", ">>>", ">>"],
                    ["&"],
                    ["^"],
                    ["|"]
                ].reduce((o, i) => rn(o, i), sn);

                function Tt(o, i) {
                    return i += se(o, i).length, $i(o, i)
                }

                function Yn(o) {
                    const i = Tt(o, 0);
                    return !i || i.cursor + se(o, i.cursor).length !== o.length ? null : i.evaluable
                }

                function ae(o) {
                    var i;
                    const r = Yn(o);
                    return (i = r == null ? void 0 : r.evaluate()) !== null && i !== void 0 ? i : null
                }

                function Ui(o) {
                    if (typeof o == "number") return o;
                    if (typeof o == "string") {
                        const i = ae(o);
                        if (!N(i)) return i
                    }
                    return 0
                }

                function W(o) {
                    return i => i.toFixed(Math.max(Math.min(o, 20), 0))
                }
                const Hi = W(0);

                function Pt(o) {
                    return Hi(o) + "%"
                }

                function qi(o) {
                    return String(o)
                }

                function Wn(o, i) {
                    for (; o.length < i;) o.push(void 0)
                }

                function Xn(o) {
                    const i = [];
                    return Wn(i, o), gt(i)
                }

                function Jn(o) {
                    const i = o.indexOf(void 0);
                    return i < 0 ? o : o.slice(0, i)
                }

                function Qn(o, i) {
                    const r = [...Jn(o), i];
                    return r.length > o.length ? r.splice(0, r.length - o.length) : Wn(r, o.length), r
                }

                function on({
                    primary: o,
                    secondary: i,
                    forward: r,
                    backward: a
                }) {
                    let p = !1;

                    function d(u) {
                        p || (p = !0, u(), p = !1)
                    }
                    o.emitter.on("change", u => {
                        d(() => {
                            i.setRawValue(r(o, i), u.options)
                        })
                    }), i.emitter.on("change", u => {
                        d(() => {
                            o.setRawValue(a(o, i), u.options)
                        }), d(() => {
                            i.setRawValue(r(o, i), u.options)
                        })
                    }), d(() => {
                        i.setRawValue(r(o, i), {
                            forceEmit: !1,
                            last: !0
                        })
                    })
                }

                function Ft(o, i) {
                    const r = o * (i.altKey ? .1 : 1) * (i.shiftKey ? 10 : 1);
                    return i.upKey ? +r : i.downKey ? -r : 0
                }

                function Et(o) {
                    return {
                        altKey: o.altKey,
                        downKey: o.key === "ArrowDown",
                        shiftKey: o.shiftKey,
                        upKey: o.key === "ArrowUp"
                    }
                }

                function Zn(o) {
                    return {
                        altKey: o.altKey,
                        downKey: o.key === "ArrowLeft",
                        shiftKey: o.shiftKey,
                        upKey: o.key === "ArrowRight"
                    }
                }

                function ti(o) {
                    return o === "ArrowUp" || o === "ArrowDown"
                }

                function an(o) {
                    return ti(o) || o === "ArrowLeft" || o === "ArrowRight"
                }

                function ln(o, i) {
                    var r, a;
                    const p = i.ownerDocument.defaultView,
                        d = i.getBoundingClientRect();
                    return {
                        x: o.pageX - (((r = p && p.scrollX) !== null && r !== void 0 ? r : 0) + d.left),
                        y: o.pageY - (((a = p && p.scrollY) !== null && a !== void 0 ? a : 0) + d.top)
                    }
                }
                class Ae {
                    constructor(i) {
                        this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = i, this.emitter = new lt, i.addEventListener("touchstart", this.onTouchStart_, {
                            passive: !1
                        }), i.addEventListener("touchmove", this.onTouchMove_, {
                            passive: !0
                        }), i.addEventListener("touchend", this.onTouchEnd_), i.addEventListener("mousedown", this.onMouseDown_)
                    }
                    computePosition_(i) {
                        const r = this.elem_.getBoundingClientRect();
                        return {
                            bounds: {
                                width: r.width,
                                height: r.height
                            },
                            point: i ? {
                                x: i.x,
                                y: i.y
                            } : null
                        }
                    }
                    onMouseDown_(i) {
                        var r;
                        i.preventDefault(), (r = i.currentTarget) === null || r === void 0 || r.focus();
                        const a = this.elem_.ownerDocument;
                        a.addEventListener("mousemove", this.onDocumentMouseMove_), a.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
                            altKey: i.altKey,
                            data: this.computePosition_(ln(i, this.elem_)),
                            sender: this,
                            shiftKey: i.shiftKey
                        })
                    }
                    onDocumentMouseMove_(i) {
                        this.emitter.emit("move", {
                            altKey: i.altKey,
                            data: this.computePosition_(ln(i, this.elem_)),
                            sender: this,
                            shiftKey: i.shiftKey
                        })
                    }
                    onDocumentMouseUp_(i) {
                        const r = this.elem_.ownerDocument;
                        r.removeEventListener("mousemove", this.onDocumentMouseMove_), r.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
                            altKey: i.altKey,
                            data: this.computePosition_(ln(i, this.elem_)),
                            sender: this,
                            shiftKey: i.shiftKey
                        })
                    }
                    onTouchStart_(i) {
                        i.preventDefault();
                        const r = i.targetTouches.item(0),
                            a = this.elem_.getBoundingClientRect();
                        this.emitter.emit("down", {
                            altKey: i.altKey,
                            data: this.computePosition_(r ? {
                                x: r.clientX - a.left,
                                y: r.clientY - a.top
                            } : void 0),
                            sender: this,
                            shiftKey: i.shiftKey
                        }), this.lastTouch_ = r
                    }
                    onTouchMove_(i) {
                        const r = i.targetTouches.item(0),
                            a = this.elem_.getBoundingClientRect();
                        this.emitter.emit("move", {
                            altKey: i.altKey,
                            data: this.computePosition_(r ? {
                                x: r.clientX - a.left,
                                y: r.clientY - a.top
                            } : void 0),
                            sender: this,
                            shiftKey: i.shiftKey
                        }), this.lastTouch_ = r
                    }
                    onTouchEnd_(i) {
                        var r;
                        const a = (r = i.targetTouches.item(0)) !== null && r !== void 0 ? r : this.lastTouch_,
                            p = this.elem_.getBoundingClientRect();
                        this.emitter.emit("up", {
                            altKey: i.altKey,
                            data: this.computePosition_(a ? {
                                x: a.clientX - p.left,
                                y: a.clientY - p.top
                            } : void 0),
                            sender: this,
                            shiftKey: i.shiftKey
                        })
                    }
                }

                function U(o, i, r, a, p) {
                    const d = (o - i) / (r - i);
                    return a + d * (p - a)
                }

                function Kt(o) {
                    return String(o.toFixed(10)).split(".")[1].replace(/0+$/, "").length
                }

                function Q(o, i, r) {
                    return Math.min(Math.max(o, i), r)
                }
                const G = j("txt");
                class le {
                    constructor(i, r) {
                        this.onChange_ = this.onChange_.bind(this), this.props_ = r.props, this.props_.emitter.on("change", this.onChange_), this.element = i.createElement("div"), this.element.classList.add(G(), G(void 0, "num")), r.arrayPosition && this.element.classList.add(G(void 0, r.arrayPosition)), r.viewProps.bindClassModifiers(this.element);
                        const a = i.createElement("input");
                        a.classList.add(G("i")), a.type = "text", r.viewProps.bindDisabled(a), this.element.appendChild(a), this.inputElement = a, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = r.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(G()), this.inputElement.classList.add(G("i"));
                        const p = i.createElement("div");
                        p.classList.add(G("k")), this.element.appendChild(p), this.knobElement = p;
                        const d = i.createElementNS(J, "svg");
                        d.classList.add(G("g")), this.knobElement.appendChild(d);
                        const u = i.createElementNS(J, "path");
                        u.classList.add(G("gb")), d.appendChild(u), this.guideBodyElem_ = u;
                        const f = i.createElementNS(J, "path");
                        f.classList.add(G("gh")), d.appendChild(f), this.guideHeadElem_ = f;
                        const S = i.createElement("div");
                        S.classList.add(j("tt")()), this.knobElement.appendChild(S), this.tooltipElem_ = S, r.value.emitter.on("change", this.onChange_), this.value = r.value, this.refresh()
                    }
                    onDraggingChange_(i) {
                        if (i.rawValue === null) {
                            this.element.classList.remove(G(void 0, "drg"));
                            return
                        }
                        this.element.classList.add(G(void 0, "drg"));
                        const r = i.rawValue / this.props_.get("draggingScale"),
                            a = r + (r > 0 ? -1 : r < 0 ? 1 : 0),
                            p = Q(-a, -4, 4);
                        this.guideHeadElem_.setAttributeNS(null, "d", [`M ${a+p},0 L${a},4 L${a+p},8`, `M ${r},-1 L${r},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${r},4`);
                        const d = this.props_.get("formatter");
                        this.tooltipElem_.textContent = d(this.value.rawValue), this.tooltipElem_.style.left = `${r}px`
                    }
                    refresh() {
                        const i = this.props_.get("formatter");
                        this.inputElement.value = i(this.value.rawValue)
                    }
                    onChange_() {
                        this.refresh()
                    }
                }
                class ei {
                    constructor(i, r) {
                        var a;
                        this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = r.baseStep, this.parser_ = r.parser, this.props = r.props, this.sliderProps_ = (a = r.sliderProps) !== null && a !== void 0 ? a : null, this.value = r.value, this.viewProps = r.viewProps, this.dragging_ = gt(null), this.view = new le(i, {
                            arrayPosition: r.arrayPosition,
                            dragging: this.dragging_,
                            props: this.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
                        const p = new Ae(this.view.knobElement);
                        p.emitter.on("down", this.onPointerDown_), p.emitter.on("move", this.onPointerMove_), p.emitter.on("up", this.onPointerUp_)
                    }
                    constrainValue_(i) {
                        var r, a;
                        const p = (r = this.sliderProps_) === null || r === void 0 ? void 0 : r.get("minValue"),
                            d = (a = this.sliderProps_) === null || a === void 0 ? void 0 : a.get("maxValue");
                        let u = i;
                        return p !== void 0 && (u = Math.max(u, p)), d !== void 0 && (u = Math.min(u, d)), u
                    }
                    onInputChange_(i) {
                        const a = i.currentTarget.value,
                            p = this.parser_(a);
                        N(p) || (this.value.rawValue = this.constrainValue_(p)), this.view.refresh()
                    }
                    onInputKeyDown_(i) {
                        const r = Ft(this.baseStep_, Et(i));
                        r !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + r), {
                            forceEmit: !1,
                            last: !1
                        })
                    }
                    onInputKeyUp_(i) {
                        Ft(this.baseStep_, Et(i)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                            forceEmit: !0,
                            last: !0
                        })
                    }
                    onPointerDown_() {
                        this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0
                    }
                    computeDraggingValue_(i) {
                        if (!i.point) return null;
                        const r = i.point.x - i.bounds.width / 2;
                        return this.constrainValue_(this.originRawValue_ + r * this.props.get("draggingScale"))
                    }
                    onPointerMove_(i) {
                        const r = this.computeDraggingValue_(i.data);
                        r !== null && (this.value.setRawValue(r, {
                            forceEmit: !1,
                            last: !1
                        }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_)
                    }
                    onPointerUp_(i) {
                        const r = this.computeDraggingValue_(i.data);
                        r !== null && (this.value.setRawValue(r, {
                            forceEmit: !0,
                            last: !0
                        }), this.dragging_.rawValue = null)
                    }
                }

                function $t(o, i) {
                    o.write(i)
                }

                function pn(o) {
                    const i = o ? ee(o, Ct) : null;
                    return i ? i.step : null
                }

                function Gi(o, i) {
                    const r = o && ee(o, Ct);
                    return r ? Kt(r.step) : Math.max(Kt(i), 2)
                }

                function Ut(o) {
                    const i = pn(o);
                    return i != null ? i : 1
                }

                function ni(o, i) {
                    var r;
                    const a = o && ee(o, Ct),
                        p = Math.abs((r = a == null ? void 0 : a.step) !== null && r !== void 0 ? r : i);
                    return p === 0 ? .1 : Math.pow(10, Math.floor(Math.log10(p)) - 1)
                }

                function Te(o) {
                    return [o[0], o[1], o[2]]
                }

                function cn(o) {
                    const i = Q(Math.floor(o), 0, 255).toString(16);
                    return i.length === 1 ? `0${i}` : i
                }

                function ii(o, i = "#") {
                    const r = Te(o.getComponents("rgb")).map(cn).join("");
                    return `${i}${r}`
                }

                function Yi(o, i = "#") {
                    const r = o.getComponents("rgb"),
                        a = [r[0], r[1], r[2], r[3] * 255].map(cn).join("");
                    return `${i}${a}`
                }

                function De(o, i) {
                    const r = W(i === "float" ? 2 : 0);
                    return `rgb(${Te(o.getComponents("rgb",i)).map(p=>r(p)).join(", ")})`
                }

                function Wi(o) {
                    return i => De(i, o)
                }

                function si(o, i) {
                    const r = W(2),
                        a = W(i === "float" ? 2 : 0);
                    return `rgba(${o.getComponents("rgb",i).map((d,u)=>(u===3?r:a)(d)).join(", ")})`
                }

                function ri(o) {
                    return i => si(i, o)
                }

                function Xi(o) {
                    const i = [W(0), Pt, Pt];
                    return `hsl(${Te(o.getComponents("hsl")).map((a,p)=>i[p](a)).join(", ")})`
                }

                function Ji(o) {
                    const i = [W(0), Pt, Pt, W(2)];
                    return `hsla(${o.getComponents("hsl").map((a,p)=>i[p](a)).join(", ")})`
                }

                function Qi(o, i) {
                    const r = W(i === "float" ? 2 : 0),
                        a = ["r", "g", "b"];
                    return `{${Te(o.getComponents("rgb",i)).map((d,u)=>`${a[u]}: ${r(d)}`).join(", ")}}`}function Zi(o){return i=>Qi(i,o)}function ts(o,i){const r=W(2),a=W(i==="float"?2:0),p=["r","g","b","a"];return`{${o.getComponents("rgb",i).map((u,f)=>{const S=f===3?r:a;return`${p[f]}: ${S(u)}`}).join(", ")}}`}function dn(o){return i=>ts(i,o)}[...["int","float"].reduce((o,i)=>[...o,{format:{alpha:!1,mode:"rgb",notation:"func",type:i},stringifier:Wi(i)},{format:{alpha:!0,mode:"rgb",notation:"func",type:i},stringifier:ri(i)},{format:{alpha:!1,mode:"rgb",notation:"object",type:i},stringifier:Zi(i)},{format:{alpha:!0,mode:"rgb",notation:"object",type:i},stringifier:dn(i)}],[])];class pe{constructor(i){this.components=i.components,this.asm_=i.assembly}constrain(i){const r=this.asm_.toComponents(i).map((a,p)=>{var d,u;return(u=(d=this.components[p])===null||d===void 0?void 0:d.constrain(a))!==null&&u!==void 0?u:a});return this.asm_.fromComponents(r)}}const oi=j("pndtxt");class ce{constructor(i,r){this.textViews=r.textViews,this.element=i.createElement("div"),this.element.classList.add(oi()),this.textViews.forEach(a=>{const p=i.createElement("div");p.classList.add(oi("a")),p.appendChild(a.element),this.element.appendChild(p)})}}function es(o,i,r){return new ei(o,{arrayPosition:r===0?"fst":r===i.axes.length-1?"lst":"mid",baseStep:i.axes[r].baseStep,parser:i.parser,props:i.axes[r].textProps,value:gt(0,{constraint:i.axes[r].constraint}),viewProps:i.viewProps})}class de{constructor(i,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((a,p)=>es(i,r,p)),this.acs_.forEach((a,p)=>{on({primary:this.value,secondary:a.value,forward:d=>r.assembly.toComponents(d.rawValue)[p],backward:(d,u)=>{const f=r.assembly.toComponents(d.rawValue);return f[p]=u.rawValue,r.assembly.fromComponents(f)}})}),this.view=new ce(i,{textViews:this.acs_.map(a=>a.view)})}}function ai(o,i){return"step"in o&&!N(o.step)?new Ct(o.step,i):null}function ns(o){return!N(o.max)&&!N(o.min)?new Kn({max:o.max,min:o.min}):!N(o.max)||!N(o.min)?new Ve({max:o.max,min:o.min}):null}const is={monitor:{defaultInterval:200,defaultLineCount:3}},kt=j("grl");class ss{constructor(i,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=i.createElement("div"),this.element.classList.add(kt()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const a=i.createElementNS(J,"svg");a.classList.add(kt("g")),a.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(a),this.svgElem_=a;const p=i.createElementNS(J,"polyline");this.svgElem_.appendChild(p),this.lineElem_=p;const d=i.createElement("div");d.classList.add(kt("t"),j("tt")()),this.element.appendChild(d),this.tooltipElem_=d,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const i=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,a=this.props_.get("minValue"),p=this.props_.get("maxValue"),d=[];this.value.rawValue.forEach((at,E)=>{if(at===void 0)return;const St=U(E,0,r,0,i.width),bs=U(at,a,p,i.height,0);d.push([St,bs].join(","))}),this.lineElem_.setAttributeNS(null,"points",d.join(" "));const u=this.tooltipElem_,f=this.value.rawValue[this.cursor_.rawValue];if(f===void 0){u.classList.remove(kt("t","a"));return}const S=U(this.cursor_.rawValue,0,r,0,i.width),ot=U(f,a,p,i.height,0);u.style.left=`${S}px`,u.style.top=`${ot}px`,u.textContent=`${this.formatter_(f)}`,u.classList.contains(kt("t","a"))||(u.classList.add(kt("t","a"),kt("t","in")),D(u),u.classList.remove(kt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class rs{constructor(i,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=gt(-1),this.view=new ss(i,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!xe(i))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const a=new Ae(this.view.element);a.emitter.on("down",this.onGraphPointerDown_),a.emitter.on("move",this.onGraphPointerMove_),a.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(i){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(U(i.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(i){this.onGraphPointerMove_(i)}onGraphPointerMove_(i){if(!i.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(U(i.data.point.x,0,i.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}class li{constructor(i){this.controller_=i}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(i){this.controller_.viewProps.set("disabled",i)}get title(){var i;return(i=this.controller_.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.props.set("title",i)}on(i,r){const a=r.bind(this);return this.controller_.emitter.on(i,()=>{a(new x(this))}),this}}class os extends x{constructor(i,r,a){super(i),this.cell=r,this.index=a}}class pi extends g{constructor(i){super(i),this.cellToApiMap_=new Map,this.emitter_=new lt;const r=this.controller_.valueController;r.cellControllers.forEach((a,p)=>{const d=new li(a);this.cellToApiMap_.set(a,d),a.emitter.on("click",()=>{const u=p%r.size[0],f=Math.floor(p/r.size[0]);this.emitter_.emit("click",{event:new os(this,d,[u,f])})})})}cell(i,r){const a=this.controller_.valueController,p=a.cellControllers[r*a.size[0]+i];return this.cellToApiMap_.get(p)}on(i,r){const a=r.bind(this);return this.emitter_.on(i,p=>{a(p.event)}),this}}class hn{constructor(i,r){this.size=r.size;const[a,p]=this.size,d=[];for(let u=0;u<p;u++)for(let f=0;f<a;f++){const S=new ki(i,{props:R.fromObject(Object.assign({},r.cellConfig(f,u))),viewProps:Bt.create()});d.push(S)}this.cellCs_=d,this.viewProps=Bt.create(),this.viewProps.handleDispose(()=>{this.cellCs_.forEach(u=>{u.viewProps.set("disposed",!0)})}),this.view=new Pe(i,{viewProps:this.viewProps,viewName:"btngrid"}),this.view.element.style.gridTemplateColumns=`repeat(${a}, 1fr)`,this.cellCs_.forEach(u=>{this.view.element.appendChild(u.view.element)})}get cellControllers(){return this.cellCs_}}const as={id:"buttongrid",type:"blade",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept(o){const i=Mt,r=F(o,{cells:i.required.function,size:i.required.array(i.required.number),view:i.required.constant("buttongrid"),label:i.optional.string});return r?{params:r}:null},controller(o){return new Ce(o.document,{blade:o.blade,props:R.fromObject({label:o.params.label}),valueController:new hn(o.document,{cellConfig:o.params.cells,size:o.params.size})})},api(o){return!(o.controller instanceof Ce)||!(o.controller.valueController instanceof hn)?null:new pi(o.controller)}};class ci extends g{get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,r){const a=r.bind(this);return this.controller_.valueController.value.emitter.on(i,p=>{a(new L(this,p.rawValue,void 0,p.options.last))}),this}}function rt(o,i,r){return o*(1-r)+i*r}const ls=20,ps=.001,un=100;function di(o,i){let r=.25,a=.5,p=-1;for(let d=0;d<ls;d++){const[u,f]=o.curve(a);if(a+=r*(u<i?1:-1),p=f,r*=.5,Math.abs(i-u)<ps)break}return p}class Vt{constructor(i=0,r=0,a=1,p=1){this.cache_=[],this.comps_=[i,r,a,p]}get x1(){return this.comps_[0]}get y1(){return this.comps_[1]}get x2(){return this.comps_[2]}get y2(){return this.comps_[3]}static isObject(i){return N(i)||!Array.isArray(i)?!1:typeof i[0]=="number"&&typeof i[1]=="number"&&typeof i[2]=="number"&&typeof i[3]=="number"}static equals(i,r){return i.x1===r.x1&&i.y1===r.y1&&i.x2===r.x2&&i.y2===r.y2}curve(i){const r=rt(0,this.x1,i),a=rt(0,this.y1,i),p=rt(this.x1,this.x2,i),d=rt(this.y1,this.y2,i),u=rt(this.x2,1,i),f=rt(this.y2,1,i),S=rt(r,p,i),ot=rt(a,d,i),at=rt(p,u,i),E=rt(d,f,i);return[rt(S,at,i),rt(ot,E,i)]}y(i){if(this.cache_.length===0){const r=[];for(let a=0;a<un;a++)r.push(di(this,U(a,0,un-1,0,1)));this.cache_=r}return this.cache_[Math.round(U(Q(i,0,1),0,1,0,un-1))]}toObject(){return[this.comps_[0],this.comps_[1],this.comps_[2],this.comps_[3]]}}const vn={toComponents:o=>o.toObject(),fromComponents:o=>new Vt(...o)};function cs(o){const i=W(2);return`cubic-bezier(${o.toObject().map(a=>i(a)).join(", ")})`}const mn=[0,.5,.5,1];function ds(o){const i=o.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);if(!i)return new Vt(...mn);const r=[i[1],i[2],i[3],i[4]].reduce((a,p)=>{if(!a)return null;const d=Number(p);return isNaN(d)?null:[...a,d]},[]);return new Vt(...r!=null?r:mn)}const X=j("cbz");class bn{constructor(i,r){this.element=i.createElement("div"),this.element.classList.add(X()),r.viewProps.bindClassModifiers(this.element),r.foldable.bindExpandedClass(this.element,X(void 0,"expanded")),it(r.foldable,"completed",O(this.element,X(void 0,"cpl")));const a=i.createElement("div");a.classList.add(X("h")),this.element.appendChild(a);const p=i.createElement("button");p.classList.add(X("b")),r.viewProps.bindDisabled(p);const d=i.createElementNS(J,"svg");d.innerHTML='<path d="M2 13C8 13 8 3 14 3"/>',p.appendChild(d),a.appendChild(p),this.buttonElement=p;const u=i.createElement("div");if(u.classList.add(X("t")),a.appendChild(u),this.textElement=u,r.pickerLayout==="inline"){const f=i.createElement("div");f.classList.add(X("p")),this.element.appendChild(f),this.pickerElement=f}else this.pickerElement=null}}const fn=j("cbzp");class H{constructor(i,r){this.element=i.createElement("div"),this.element.classList.add(fn()),r.viewProps.bindClassModifiers(this.element);const a=i.createElement("div");a.classList.add(fn("g")),this.element.appendChild(a),this.graphElement=a;const p=i.createElement("div");p.classList.add(fn("t")),this.element.appendChild(p),this.textElement=p}}function hi(o,i){const r=new MutationObserver(p=>{for(const d of p)d.type==="childList"&&d.addedNodes.forEach(u=>{!u.contains(u)||(i(),r.disconnect())})}),a=o.ownerDocument;r.observe(a.body,{attributes:!0,childList:!0,subtree:!0})}const pt=j("cbzg");function ui(o,i){return r=>i(o(r))}class Re{constructor(i,r){this.element=i.createElement("div"),this.element.classList.add(pt()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const a=i.createElement("div");a.classList.add(pt("p")),this.element.appendChild(a),this.previewElement=a;const p=i.createElementNS(J,"svg");p.classList.add(pt("g")),this.element.appendChild(p),this.svgElem_=p;const d=i.createElementNS(J,"path");d.classList.add(pt("u")),this.svgElem_.appendChild(d),this.guideElem_=d;const u=i.createElementNS(J,"polyline");u.classList.add(pt("l")),this.svgElem_.appendChild(u),this.lineElem_=u,this.handleElems_=[i.createElement("div"),i.createElement("div")],this.handleElems_.forEach(f=>{f.classList.add(pt("h")),this.element.appendChild(f)}),this.vectorElems_=[i.createElementNS(J,"line"),i.createElementNS(J,"line")],this.vectorElems_.forEach(f=>{f.classList.add(pt("v")),this.svgElem_.appendChild(f)}),this.value_=r.value,this.value_.emitter.on("change",this.onValueChange_.bind(this)),this.sel_=r.selection,this.handleElems_.forEach((f,S)=>{k(this.sel_,ui(ot=>ot===S,O(f,pt("h","sel"))))}),hi(this.element,()=>{this.refresh()})}getVertMargin_(i){return i*.25}valueToPosition(i,r){const a=this.element.getBoundingClientRect(),p=a.width,d=a.height,u=this.getVertMargin_(d);return{x:U(i,0,1,0,p),y:U(r,0,1,d-u,u)}}positionToValue(i,r){const a=this.element.getBoundingClientRect(),p=a.width,d=a.height,u=this.getVertMargin_(d);return{x:Q(U(i,0,p,0,1),0,1),y:U(r,d-u,u,0,1)}}refresh(){this.guideElem_.setAttributeNS(null,"d",[0,1].map(d=>{const u=this.valueToPosition(0,d),f=this.valueToPosition(1,d);return[`M ${u.x},${u.y}`,`L ${f.x},${f.y}`].join(" ")}).join(" "));const i=this.value_.rawValue,r=[];let a=0;for(;;){const d=this.valueToPosition(...i.curve(a));if(r.push([d.x,d.y].join(",")),a>=1)break;a=Math.min(a+.05,1)}this.lineElem_.setAttributeNS(null,"points",r.join(" "));const p=i.toObject();[0,1].forEach(d=>{const u=this.valueToPosition(d,d),f=this.valueToPosition(p[d*2],p[d*2+1]),S=this.vectorElems_[d];S.setAttributeNS(null,"x1",String(u.x)),S.setAttributeNS(null,"y1",String(u.y)),S.setAttributeNS(null,"x2",String(f.x)),S.setAttributeNS(null,"y2",String(f.y));const ot=this.handleElems_[d];ot.style.left=`${f.x}px`,ot.style.top=`${f.y}px`})}onValueChange_(){this.refresh()}}const _n=24,vi=400,mi=1e3,Ht=j("cbzprv");class qt{constructor(i,r){this.stopped_=!0,this.startTime_=-1,this.onDispose_=this.onDispose_.bind(this),this.onTimer_=this.onTimer_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.element=i.createElement("div"),this.element.classList.add(Ht()),r.viewProps.bindClassModifiers(this.element);const a=i.createElementNS(J,"svg");a.classList.add(Ht("g")),this.element.appendChild(a),this.svgElem_=a;const p=i.createElementNS(J,"path");p.classList.add(Ht("t")),this.svgElem_.appendChild(p),this.ticksElem_=p;const d=i.createElement("div");d.classList.add(Ht("m")),this.element.appendChild(d),this.markerElem_=d,this.value_=r.value,this.value_.emitter.on("change",this.onValueChange_),r.viewProps.handleDispose(this.onDispose_),hi(this.element,()=>{this.refresh()})}play(){this.stop(),this.updateMarker_(0),this.markerElem_.classList.add(Ht("m","a")),this.startTime_=new Date().getTime()+vi,this.stopped_=!1,requestAnimationFrame(this.onTimer_)}stop(){this.stopped_=!0,this.markerElem_.classList.remove(Ht("m","a"))}onDispose_(){this.stop()}updateMarker_(i){const r=this.value_.rawValue.y(Q(i,0,1));this.markerElem_.style.left=`${r*100}%`}refresh(){const i=this.svgElem_.getBoundingClientRect(),r=i.width,a=i.height,p=[],d=this.value_.rawValue;for(let u=0;u<_n;u++){const f=U(u,0,_n-1,0,1),S=U(d.y(f),0,1,0,r);p.push(`M ${S},0 v${a}`)}this.ticksElem_.setAttributeNS(null,"d",p.join(" "))}onTimer_(){if(this.startTime_===null)return;const i=new Date().getTime()-this.startTime_,r=i/mi;this.updateMarker_(r),i>mi+vi&&this.stop(),this.stopped_||requestAnimationFrame(this.onTimer_)}onValueChange_(){this.refresh(),this.play()}}function Y(o,i,r,a){const p=r-o,d=a-i;return Math.sqrt(p*p+d*d)}function he(o,i,r,a){const p=Y(o,i,r,a),d=Math.atan2(a-i,r-o),u=Math.round(d/(Math.PI/4))*Math.PI/4;return{x:o+Math.cos(u)*p,y:i+Math.sin(u)*p}}class bt{constructor(i,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.sel_=gt(0),this.viewProps=r.viewProps,this.view=new Re(i,{selection:this.sel_,value:this.value,viewProps:this.viewProps}),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_),this.prevView_=new qt(i,{value:this.value,viewProps:this.viewProps}),this.prevView_.element.addEventListener("mousedown",p=>{p.stopImmediatePropagation(),p.preventDefault(),this.prevView_.play()}),this.view.previewElement.appendChild(this.prevView_.element);const a=new Ae(this.view.element);a.emitter.on("down",this.onPointerDown_),a.emitter.on("move",this.onPointerMove_),a.emitter.on("up",this.onPointerUp_)}refresh(){this.view.refresh(),this.prevView_.refresh(),this.prevView_.play()}updateValue_(i,r,a){const p=this.sel_.rawValue,d=this.value.rawValue.toObject(),u=this.view.positionToValue(i.x,i.y),f=r?he(p,p,u.x,u.y):u;d[p*2]=f.x,d[p*2+1]=f.y,this.value.setRawValue(new Vt(...d),a)}onPointerDown_(i){const r=i.data;if(!r.point)return;const a=this.value.rawValue,p=this.view.valueToPosition(a.x1,a.y1),d=Y(r.point.x,r.point.y,p.x,p.y),u=this.view.valueToPosition(a.x2,a.y2),f=Y(r.point.x,r.point.y,u.x,u.y);this.sel_.rawValue=d<=f?0:1,this.updateValue_(r.point,i.shiftKey,{forceEmit:!1,last:!1})}onPointerMove_(i){const r=i.data;!r.point||this.updateValue_(r.point,i.shiftKey,{forceEmit:!1,last:!1})}onPointerUp_(i){const r=i.data;!r.point||this.updateValue_(r.point,i.shiftKey,{forceEmit:!0,last:!0})}onKeyDown_(i){an(i.key)&&i.preventDefault();const r=this.sel_.rawValue,a=this.value.rawValue.toObject();a[r*2]+=Ft(this.baseStep_,Zn(i)),a[r*2+1]+=Ft(this.baseStep_,Et(i)),this.value.setRawValue(new Vt(...a),{forceEmit:!1,last:!1})}onKeyUp_(i){an(i.key)&&i.preventDefault();const r=Ft(this.baseStep_,Zn(i)),a=Ft(this.baseStep_,Et(i));r===0&&a===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class bi{constructor(i,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new H(i,{viewProps:this.viewProps}),this.gc_=new bt(i,{baseStep:r.axis.baseStep,value:this.value,viewProps:this.viewProps}),this.view.graphElement.appendChild(this.gc_.view.element);const a=Object.assign(Object.assign({},r.axis),{constraint:new Ve({max:1,min:0})}),p=Object.assign(Object.assign({},r.axis),{constraint:void 0});this.tc_=new de(i,{assembly:vn,axes:[a,p,a,p],parser:ae,value:this.value,viewProps:this.viewProps}),this.view.textElement.appendChild(this.tc_.view.element)}get allFocusableElements(){return[this.gc_.view.element,...this.tc_.view.textViews.map(i=>i.inputElement)]}refresh(){this.gc_.refresh()}}class ze{constructor(i,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Zt(r.expanded),this.view=new bn(i,{foldable:this.foldable_,pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("blur",this.onButtonBlur_),this.view.buttonElement.addEventListener("click",this.onButtonClick_),this.tc_=new ne(i,{parser:ds,props:R.fromObject({formatter:cs}),value:this.value,viewProps:this.viewProps}),this.view.textElement.appendChild(this.tc_.view.element),this.popC_=r.pickerLayout==="popup"?new Se(i,{viewProps:this.viewProps}):null;const a=new bi(i,{axis:r.axis,value:this.value,viewProps:this.viewProps});a.allFocusableElements.forEach(p=>{p.addEventListener("blur",this.onPopupChildBlur_),p.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=a,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),k(this.popC_.shows,p=>{p&&a.refresh()}),on({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:p=>p.rawValue,backward:(p,d)=>d.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Mi(this.foldable_,this.view.pickerElement))}onButtonBlur_(i){if(!this.popC_)return;const r=i.relatedTarget;(!r||!this.popC_.view.element.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.allFocusableElements[0].focus()}onPopupChildBlur_(i){if(!this.popC_)return;const r=this.popC_.view.element,a=Ye(i);a&&r.contains(a)||a&&a===this.view.buttonElement&&!xe(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(i){!this.popC_||i.key==="Escape"&&(this.popC_.shows.rawValue=!1)}}function gn(){return new pe({assembly:vn,components:[0,1,2,3].map(o=>o%2===0?new Ve({min:0,max:1}):void 0)})}const Dt={id:"cubic-bezier",type:"blade",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept(o){const i=Mt,r=F(o,{value:i.required.array(i.required.number),view:i.required.constant("cubicbezier"),expanded:i.optional.boolean,label:i.optional.string,picker:i.optional.custom(a=>a==="inline"||a==="popup"?a:void 0)});return r?{params:r}:null},controller(o){var i,r;const a=new Vt(...o.params.value),p=gt(a,{constraint:gn(),equals:Vt.equals}),d=new ze(o.document,{axis:{baseStep:.1,textProps:R.fromObject({draggingScale:.01,formatter:W(2)})},expanded:(i=o.params.expanded)!==null&&i!==void 0?i:!1,pickerLayout:(r=o.params.picker)!==null&&r!==void 0?r:"popup",value:p,viewProps:o.viewProps});return new Ee(o.document,{blade:o.blade,props:R.fromObject({label:o.params.label}),valueController:d})},api(o){return!(o.controller instanceof Ee)||!(o.controller.valueController instanceof ze)?null:new ci(o.controller)}};class z extends g{begin(){this.controller_.valueController.begin()}end(){this.controller_.valueController.end()}}const wn=20;class K{constructor(){this.start_=null,this.duration_=0,this.fps_=null,this.frameCount_=0,this.timestamps_=[]}get duration(){return this.duration_}get fps(){return this.fps_}begin(i){this.start_=i.getTime()}calculateFps_(i){if(this.timestamps_.length===0)return null;const r=this.timestamps_[0];return 1e3*(this.frameCount_-r.frameCount)/(i-r.time)}compactTimestamps_(){if(this.timestamps_.length<=wn)return;const i=this.timestamps_.length-wn;this.timestamps_.splice(0,i);const r=this.timestamps_[0].frameCount;this.timestamps_.forEach(a=>{a.frameCount-=r}),this.frameCount_-=r}end(i){if(this.start_===null)return;const r=i.getTime();this.duration_=r-this.start_,this.start_=null,this.fps_=this.calculateFps_(r),this.timestamps_.push({frameCount:this.frameCount_,time:r}),++this.frameCount_,this.compactTimestamps_()}}const Gt=j("fps");class tt{constructor(i,r){this.element=i.createElement("div"),this.element.classList.add(Gt()),r.viewProps.bindClassModifiers(this.element),this.graphElement=i.createElement("div"),this.graphElement.classList.add(Gt("g")),this.element.appendChild(this.graphElement);const a=i.createElement("div");a.classList.add(Gt("l")),this.element.appendChild(a);const p=i.createElement("span");p.classList.add(Gt("v")),p.textContent="--",a.appendChild(p),this.valueElement=p;const d=i.createElement("span");d.classList.add(Gt("u")),d.textContent="FPS",a.appendChild(d)}}class xn{constructor(i,r){this.stopwatch_=new K,this.onTick_=this.onTick_.bind(this),this.ticker_=r.ticker,this.ticker_.emitter.on("tick",this.onTick_),this.value_=r.value,this.viewProps=r.viewProps,this.view=new tt(i,{viewProps:this.viewProps}),this.graphC_=new rs(i,{formatter:W(0),lineCount:r.lineCount,props:R.fromObject({maxValue:r.maxValue,minValue:r.minValue}),value:this.value_,viewProps:this.viewProps}),this.view.graphElement.appendChild(this.graphC_.view.element),this.viewProps.handleDispose(()=>{this.graphC_.viewProps.set("disposed",!0),this.ticker_.dispose()})}begin(){this.stopwatch_.begin(new Date)}end(){this.stopwatch_.end(new Date)}onTick_(){const i=this.stopwatch_.fps;if(i!==null){const r=this.value_.rawValue;this.value_.rawValue=Qn(r,i),this.view.valueElement.textContent=i.toFixed(0)}}}function ue(o,i){return i===0?new ke:new Fn(o,i!=null?i:is.monitor.defaultInterval)}const Cn={id:"fpsgraph",type:"blade",accept(o){const i=Mt,r=F(o,{view:i.required.constant("fpsgraph"),interval:i.optional.number,label:i.optional.string,lineCount:i.optional.number,max:i.optional.number,min:i.optional.number});return r?{params:r}:null},controller(o){var i,r,a,p;const d=(i=o.params.interval)!==null&&i!==void 0?i:500;return new Ce(o.document,{blade:o.blade,props:R.fromObject({label:o.params.label}),valueController:new xn(o.document,{lineCount:(r=o.params.lineCount)!==null&&r!==void 0?r:2,maxValue:(a=o.params.max)!==null&&a!==void 0?a:90,minValue:(p=o.params.min)!==null&&p!==void 0?p:0,ticker:ue(o.document,d),value:Xn(80),viewProps:o.viewProps})})},api(o){return!(o.controller instanceof Ce)||!(o.controller.valueController instanceof xn)?null:new z(o.controller)}};class et{constructor(i,r){this.min=i,this.max=r}static isObject(i){if(typeof i!="object"||i===null)return!1;const r=i.min,a=i.max;return!(typeof r!="number"||typeof a!="number")}static equals(i,r){return i.min===r.min&&i.max===r.max}get length(){return this.max-this.min}toObject(){return{min:this.min,max:this.max}}}const yn={fromComponents:o=>new et(o[0],o[1]),toComponents:o=>[o.min,o.max]};class ve{constructor(i){this.edge=i}constrain(i){var r,a,p,d,u,f,S,ot;if(i.min<=i.max)return new et((a=(r=this.edge)===null||r===void 0?void 0:r.constrain(i.min))!==null&&a!==void 0?a:i.min,(d=(p=this.edge)===null||p===void 0?void 0:p.constrain(i.max))!==null&&d!==void 0?d:i.max);const at=(i.min+i.max)/2;return new et((f=(u=this.edge)===null||u===void 0?void 0:u.constrain(at))!==null&&f!==void 0?f:at,(ot=(S=this.edge)===null||S===void 0?void 0:S.constrain(at))!==null&&ot!==void 0?ot:at)}}const Pn=j("rsltxt");class Ne{constructor(i,r){this.sliderView_=r.sliderView,this.textView_=r.textView,this.element=i.createElement("div"),this.element.classList.add(Pn());const a=i.createElement("div");a.classList.add(Pn("s")),a.appendChild(this.sliderView_.element),this.element.appendChild(a);const p=i.createElement("div");p.classList.add(Pn("t")),p.appendChild(this.textView_.element),this.element.appendChild(p)}}const ct=j("rsl");class me{constructor(i,r){this.onSliderPropsChange_=this.onSliderPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.sliderProps_=r.sliderProps,this.sliderProps_.emitter.on("change",this.onSliderPropsChange_),this.element=i.createElement("div"),this.element.classList.add(ct()),r.viewProps.bindClassModifiers(this.element),this.value_=r.value,this.value_.emitter.on("change",this.onValueChange_);const a=i.createElement("div");a.classList.add(ct("t")),this.element.appendChild(a),this.trackElement=a;const p=i.createElement("div");p.classList.add(ct("b")),a.appendChild(p),this.barElement=p;const d=["min","max"].map(u=>{const f=i.createElement("div");return f.classList.add(ct("k"),ct("k",u)),a.appendChild(f),f});this.knobElements=[d[0],d[1]],this.update_()}valueToX_(i){const r=this.sliderProps_.get("minValue"),a=this.sliderProps_.get("maxValue");return Q(U(i,r,a,0,1),0,1)*100}update_(){const i=this.value_.rawValue;i.length===0?this.element.classList.add(ct(void 0,"zero")):this.element.classList.remove(ct(void 0,"zero"));const r=[this.valueToX_(i.min),this.valueToX_(i.max)];this.barElement.style.left=`${r[0]}%`,this.barElement.style.right=`${100-r[1]}%`,this.knobElements.forEach((a,p)=>{a.style.left=`${r[p]}%`})}onSliderPropsChange_(){this.update_()}onValueChange_(){this.update_()}}class En{constructor(i,r){this.grabbing_=null,this.grabOffset_=0,this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.sliderProps=r.sliderProps,this.viewProps=r.viewProps,this.value=r.value,this.view=new me(i,{sliderProps:this.sliderProps,value:this.value,viewProps:r.viewProps});const a=new Ae(this.view.trackElement);a.emitter.on("down",this.onPointerDown_),a.emitter.on("move",this.onPointerMove_),a.emitter.on("up",this.onPointerUp_)}ofs_(){return this.grabbing_==="min"?this.view.knobElements[0].getBoundingClientRect().width/2:this.grabbing_==="max"?-this.view.knobElements[1].getBoundingClientRect().width/2:0}valueFromData_(i){if(!i.point)return null;const r=(i.point.x+this.ofs_())/i.bounds.width,a=this.sliderProps.get("minValue"),p=this.sliderProps.get("maxValue");return U(r,0,1,a,p)}onPointerDown_(i){if(!i.data.point)return;const r=i.data.point.x/i.data.bounds.width,a=this.value.rawValue,p=this.sliderProps.get("minValue"),d=this.sliderProps.get("maxValue"),u=U(a.min,p,d,0,1),f=U(a.max,p,d,0,1);Math.abs(f-r)<=.025?this.grabbing_="max":Math.abs(u-r)<=.025?this.grabbing_="min":r>=u&&r<=f?(this.grabbing_="length",this.grabOffset_=U(r-u,0,1,0,d-p)):r<u?(this.grabbing_="min",this.onPointerMove_(i)):r>f&&(this.grabbing_="max",this.onPointerMove_(i))}applyPointToValue_(i,r){const a=this.valueFromData_(i);if(a===null)return;const p=this.sliderProps.get("minValue"),d=this.sliderProps.get("maxValue");if(this.grabbing_==="min")this.value.setRawValue(new et(a,this.value.rawValue.max),r);else if(this.grabbing_==="max")this.value.setRawValue(new et(this.value.rawValue.min,a),r);else if(this.grabbing_==="length"){const u=this.value.rawValue.length;let f=a-this.grabOffset_,S=f+u;f<p?(f=p,S=p+u):S>d&&(f=d-u,S=d),this.value.setRawValue(new et(f,S),r)}}onPointerMove_(i){this.applyPointToValue_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.applyPointToValue_(i.data,{forceEmit:!0,last:!0}),this.grabbing_=null}}class wt{constructor(i,r){this.value=r.value,this.viewProps=r.viewProps,this.sc_=new En(i,r);const a={baseStep:r.baseStep,constraint:r.constraint,textProps:R.fromObject({draggingScale:r.draggingScale,formatter:r.formatter})};this.tc_=new de(i,{assembly:yn,axes:[a,a],parser:r.parser,value:this.value,viewProps:r.viewProps}),this.view=new Ne(i,{sliderView:this.sc_.view,textView:this.tc_.view})}get textController(){return this.tc_}}function fi(o){return et.isObject(o)?new et(o.min,o.max):new et(0,0)}function kn(o,i){o.writeProperty("max",i.max),o.writeProperty("min",i.min)}function hs(o){const i=[],r=ns(o);r&&i.push(r);const a=ai(o);return a&&i.push(a),new ve(new We(i))}const Oe={id:"input-interval",type:"input",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept:(o,i)=>{if(!et.isObject(o))return null;const r=Mt,a=F(i,{format:r.optional.function,max:r.optional.number,min:r.optional.number,step:r.optional.number});return a?{initialValue:new et(o.min,o.max),params:a}:null},binding:{reader:o=>fi,constraint:o=>hs(o.params),equals:et.equals,writer:o=>kn},controller(o){var i;const r=o.value,a=o.constraint;if(!(a instanceof ve))throw nt.shouldNeverHappen();const p=(r.rawValue.min+r.rawValue.max)/2,d=(i=o.params.format)!==null&&i!==void 0?i:W(Gi(a.edge,p)),u=a.edge&&ee(a.edge,Kn);if(u)return new wt(o.document,{baseStep:Ut(a.edge),constraint:a.edge,draggingScale:ni(a.edge,p),formatter:d,parser:ae,sliderProps:new R({maxValue:u.values.value("max"),minValue:u.values.value("min")}),value:r,viewProps:o.viewProps});const f={baseStep:Ut(a.edge),constraint:a.edge,textProps:R.fromObject({draggingScale:p,formatter:d})};return new de(o.document,{assembly:yn,axes:[f,f],parser:ae,value:r,viewProps:o.viewProps})}};class Rt{constructor(i){this.controller_=i}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(i){this.controller_.viewProps.set("disabled",i)}get title(){var i;return(i=this.controller_.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.props.set("title",i)}}class zt extends L{constructor(i,r,a,p,d){super(i,p,d),this.cell=r,this.index=a}}class be extends g{constructor(i){super(i),this.cellToApiMap_=new Map,this.controller_.valueController.cellControllers.forEach(a=>{const p=new Rt(a);this.cellToApiMap_.set(a,p)})}get value(){return this.controller_.value}cell(i,r){const a=this.controller_.valueController,p=a.cellControllers[r*a.size[0]+i];return this.cellToApiMap_.get(p)}on(i,r){const a=r.bind(this);this.controller_.value.emitter.on(i,p=>{const d=this.controller_.valueController,u=d.findCellByValue(p.rawValue);if(!u)return;const f=this.cellToApiMap_.get(u);if(!f)return;const S=d.cellControllers.indexOf(u);a(new zt(this,f,[S%d.size[0],Math.floor(S/d.size[0])],p.rawValue,void 0))})}}const fe=j("rad");class _i{constructor(i,r){this.element=i.createElement("div"),this.element.classList.add(fe()),r.viewProps.bindClassModifiers(this.element);const a=i.createElement("label");a.classList.add(fe("l")),this.element.appendChild(a);const p=i.createElement("input");p.classList.add(fe("i")),p.name=r.name,p.type="radio",r.viewProps.bindDisabled(p),a.appendChild(p),this.inputElement=p;const d=i.createElement("div");d.classList.add(fe("b")),a.appendChild(d);const u=i.createElement("div");u.classList.add(fe("t")),d.appendChild(u),it(r.props,"title",f=>{u.textContent=f})}}class gi{constructor(i,r){this.props=r.props,this.viewProps=r.viewProps,this.view=new _i(i,{name:r.name,props:this.props,viewProps:this.viewProps})}}class Ie{constructor(i,r){this.cellCs_=[],this.cellValues_=[],this.onCellInputChange_=this.onCellInputChange_.bind(this),this.size=r.size;const[a,p]=this.size;for(let d=0;d<p;d++)for(let u=0;u<a;u++){const f=new gi(i,{name:r.groupName,props:R.fromObject(Object.assign({},r.cellConfig(u,d))),viewProps:Bt.create()});this.cellCs_.push(f),this.cellValues_.push(r.cellConfig(u,d).value)}this.value=r.value,k(this.value,d=>{const u=this.findCellByValue(d);!u||(u.view.inputElement.checked=!0)}),this.viewProps=Bt.create(),this.view=new Pe(i,{viewProps:this.viewProps,viewName:"radgrid"}),this.view.element.style.gridTemplateColumns=`repeat(${a}, 1fr)`,this.cellCs_.forEach(d=>{d.view.inputElement.addEventListener("change",this.onCellInputChange_),this.view.element.appendChild(d.view.element)})}get cellControllers(){return this.cellCs_}findCellByValue(i){const r=this.cellValues_.findIndex(a=>a===i);return r<0?null:this.cellCs_[r]}onCellInputChange_(i){const r=i.currentTarget,a=this.cellCs_.findIndex(p=>p.view.inputElement===r);a<0||(this.value.rawValue=this.cellValues_[a])}}const Nt=function(){return{id:"radiogrid",type:"blade",accept(o){const i=Mt,r=F(o,{cells:i.required.function,groupName:i.required.string,size:i.required.array(i.required.number),value:i.required.raw,view:i.required.constant("radiogrid"),label:i.optional.string});return r?{params:r}:null},controller(o){return new Ee(o.document,{blade:o.blade,props:R.fromObject({label:o.params.label}),valueController:new Ie(o.document,{groupName:o.params.groupName,cellConfig:o.params.cells,size:o.params.size,value:gt(o.params.value)})})},api(o){return!(o.controller instanceof Ee)||!(o.controller.valueController instanceof Ie)?null:new be(o.controller)}}}();function Vn(o){return{id:"input-radiogrid",type:"input",accept(i,r){if(!o.isType(i))return null;const a=Mt,p=F(r,{cells:a.required.function,groupName:a.required.string,size:a.required.array(a.required.number),view:a.required.constant("radiogrid")});return p?{initialValue:i,params:p}:null},binding:o.binding,controller:i=>new Ie(i.document,{cellConfig:i.params.cells,groupName:i.params.groupName,size:i.params.size,value:i.value})}}const us=Vn({isType:o=>typeof o=="number",binding:{reader:o=>Ui,writer:o=>$t}}),vs=Vn({isType:o=>typeof o=="string",binding:{reader:o=>qi,writer:o=>$t}}),ms=Vn({isType:o=>typeof o=="boolean",binding:{reader:o=>ie,writer:o=>$t}}),wi=[as,Dt,Cn,Oe,Nt,ms,us,vs];m.ButtonCellApi=li,m.ButtonGridApi=pi,m.ButtonGridController=hn,m.CubicBezier=Vt,m.CubicBezierApi=ci,m.CubicBezierAssembly=vn,m.CubicBezierController=ze,m.CubicBezierGraphController=bt,m.CubicBezierGraphView=Re,m.CubicBezierPickerController=bi,m.CubicBezierPickerView=H,m.CubicBezierPreviewView=qt,m.CubicBezierView=bn,m.FpsGraphBladeApi=z,m.FpsGraphController=xn,m.FpsView=tt,m.Fpswatch=K,m.Interval=et,m.IntervalAssembly=yn,m.IntervalConstraint=ve,m.RadioCellApi=Rt,m.RadioController=gi,m.RadioGridApi=be,m.RadioGridController=Ie,m.RadioView=_i,m.RangeSliderController=En,m.RangeSliderTextController=wt,m.RangeSliderTextView=Ne,m.RangeSliderView=me,m.TpRadioGridChangeEvent=zt,m.plugins=wi,Object.defineProperty(m,"__esModule",{value:!0})})})(Ci,Ci.exports);const Ma=La(Ci.exports),Aa=Sa({__proto__:null,default:Ma},[Ci.exports]);function Ds(w){return Math.abs(Math.floor(w))}function we(w,v){return Math.random()*(v-w)+w}function Lt(w,v){return Math.floor(we(w,v+1))}function Cr(w,v,m,g){const x=Math.pow;return Math.sqrt(x(w-m,2)+x(v-g,2))}function Rs(w,v,m=1){if(w>360||w<0)throw new Error(`Expected hue 0-360 range, got \`${w}\``);if(v>100||v<0)throw new Error(`Expected lightness 0-100 range, got \`${v}\``);if(m>1||m<0)throw new Error(`Expected alpha 0-1 range, got \`${m}\``);return`hsla(${w}, 100%, ${v}%, ${m})`}const yr=w=>{if(typeof w=="object"&&w!==null){if(typeof Object.getPrototypeOf=="function"){const v=Object.getPrototypeOf(w);return v===Object.prototype||v===null}return Object.prototype.toString.call(w)==="[object Object]"}return!1},Ta=["__proto__","constructor","prototype"],kr=(...w)=>w.reduce((v,m)=>(Object.keys(m).forEach(g=>{Ta.includes(g)||(Array.isArray(v[g])&&Array.isArray(m[g])?v[g]=m[g]:yr(v[g])&&yr(m[g])?v[g]=kr(v[g],m[g]):v[g]=m[g])}),v),{});class Da{constructor({x:v,y:m,ctx:g,hue:x,decay:L,gravity:$,friction:N,brightness:xt,flickering:nt,lineWidth:lt,explosionLength:A}){_(this,"x");_(this,"y");_(this,"ctx");_(this,"hue");_(this,"friction");_(this,"gravity");_(this,"flickering");_(this,"lineWidth");_(this,"explosionLength");_(this,"angle");_(this,"speed");_(this,"brightness");_(this,"coordinates",[]);_(this,"decay");_(this,"alpha",1);for(this.x=v,this.y=m,this.ctx=g,this.hue=x,this.gravity=$,this.friction=N,this.flickering=nt,this.lineWidth=lt,this.explosionLength=A,this.angle=we(0,Math.PI*2),this.speed=Lt(1,10),this.brightness=Lt(xt.min,xt.max),this.decay=we(L.min,L.max);this.explosionLength--;)this.coordinates.push([v,m])}update(v){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&v()}draw(){const v=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=Rs(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[v][0],this.coordinates[v][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=Rs(this.hue,this.flickering?we(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class Ra{constructor(v,m){_(this,"active",!1);_(this,"x");_(this,"y");this.options=v,this.canvas=m,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(v,m){const{click:g,move:x}=this.mouseOptions;(g||x)&&(this.x=v.pageX-this.canvas.offsetLeft,this.y=v.pageY-this.canvas.offsetTop,this.active=m)}pointerDown(v){this.usePointer(v,this.mouseOptions.click)}pointerUp(v){this.usePointer(v,!1)}pointerMove(v){this.usePointer(v,this.active)}}class za{constructor(){_(this,"hue");_(this,"rocketsPoint");_(this,"opacity");_(this,"acceleration");_(this,"friction");_(this,"gravity");_(this,"particles");_(this,"explosion");_(this,"mouse");_(this,"boundaries");_(this,"sound");_(this,"delay");_(this,"brightness");_(this,"decay");_(this,"flickering");_(this,"intensity");_(this,"traceLength");_(this,"traceSpeed");_(this,"lineWidth");_(this,"lineStyle");_(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={height:0,width:0,x:50,y:50}}update(v){Object.assign(this,kr(this,v))}}class Na{constructor(v,m){_(this,"tick",0);_(this,"rafId",0);_(this,"fps",60);_(this,"tolerance",.1);_(this,"now");this.options=v,this.render=m}mount(){this.now=performance.now();const v=1e3/this.fps,m=g=>{this.rafId=requestAnimationFrame(m);const x=g-this.now;x>=v-this.tolerance&&(this.render(),this.now=g-x%v,this.tick+=x*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(m)}unmount(){cancelAnimationFrame(this.rafId)}}class Oa{constructor(v,m){this.options=v,this.updateSize=m,this.handleResize=this.handleResize.bind(this)}mount(){this.options.autoresize&&window.addEventListener("resize",this.handleResize)}unmount(){this.options.autoresize&&window.removeEventListener("resize",this.handleResize)}handleResize(){this.updateSize()}}class Ia{constructor(v){_(this,"buffers",[]);_(this,"audioContext");_(this,"onInit",!1);this.options=v,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const v of this.soundOptions.files){const m=await(await fetch(v)).arrayBuffer();this.audioContext.decodeAudioData(m).then(g=>{this.buffers.push(g)}).catch(g=>{throw g})}}play(){if(this.isEnabled&&this.buffers.length){const v=this.audioContext.createBufferSource(),m=this.buffers[Lt(0,this.buffers.length-1)],g=this.audioContext.createGain();v.buffer=m,g.gain.value=we(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),g.connect(this.audioContext.destination),v.connect(g),v.start(0)}else this.init()}}class Ba{constructor({x:v,y:m,dx:g,dy:x,ctx:L,hue:$,speed:N,traceLength:xt,acceleration:nt}){_(this,"x");_(this,"y");_(this,"sx");_(this,"sy");_(this,"dx");_(this,"dy");_(this,"ctx");_(this,"hue");_(this,"speed");_(this,"acceleration");_(this,"traceLength");_(this,"totalDistance");_(this,"angle");_(this,"brightness");_(this,"coordinates",[]);_(this,"currentDistance",0);for(this.x=v,this.y=m,this.sx=v,this.sy=m,this.dx=g,this.dy=x,this.ctx=L,this.hue=$,this.speed=N,this.traceLength=xt,this.acceleration=nt,this.totalDistance=Cr(v,m,g,x),this.angle=Math.atan2(x-m,g-v),this.brightness=Lt(50,70);this.traceLength--;)this.coordinates.push([v,m])}update(v){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const m=Math.cos(this.angle)*this.speed,g=Math.sin(this.angle)*this.speed;this.currentDistance=Cr(this.sx,this.sy,this.x+m,this.y+g),this.currentDistance>=this.totalDistance?v(this.dx,this.dy,this.hue):(this.x+=m,this.y+=g)}draw(){const v=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[v][0],this.coordinates[v][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=Rs(this.hue,this.brightness),this.ctx.stroke()}}class ja{constructor(v,m={}){_(this,"target");_(this,"container");_(this,"canvas");_(this,"ctx");_(this,"width");_(this,"height");_(this,"traces",[]);_(this,"explosions",[]);_(this,"waitStopRaf");_(this,"running",!1);_(this,"opts");_(this,"sound");_(this,"resize");_(this,"mouse");_(this,"raf");this.target=v,this.container=v,this.opts=new za,this.updateOptions(m),this.createCanvas(this.target),this.sound=new Ia(this.opts),this.resize=new Oa(this.opts,this.updateSize.bind(this)),this.mouse=new Ra(this.opts,this.canvas),this.raf=new Na(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.1"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(v=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),v&&this.canvas.remove())}async waitStop(v){if(this.running)return new Promise(m=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(v),m()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(v=1){for(let m=0;m<v;m++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(v){this.opts.update(v)}updateSize({width:v=this.container.clientWidth,height:m=this.container.clientHeight}={}){this.width=v,this.height=m,this.canvas.width=v,this.canvas.height=m,this.updateBoundaries({...this.opts.boundaries,width:v,height:m})}updateBoundaries(v){this.updateOptions({boundaries:v})}createCanvas(v){v instanceof HTMLCanvasElement?(v.isConnected||document.body.append(v),this.canvas=v):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:v,lineStyle:m,lineWidth:g}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${v})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=m,this.ctx.lineJoin="round",this.ctx.lineWidth=we(g.trace.min,g.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:v,rocketsPoint:m,boundaries:g,traceLength:x,traceSpeed:L,acceleration:$,mouse:N}=this.opts;this.traces.push(new Ba({x:this.width*Lt(m.min,m.max)/100,y:this.height,dx:this.mouse.x&&N.move||this.mouse.active?this.mouse.x:Lt(g.x,g.width-g.x*2),dy:this.mouse.y&&N.move||this.mouse.active?this.mouse.y:Lt(g.y,g.height*.5),ctx:this.ctx,hue:Lt(v.min,v.max),speed:L,acceleration:$,traceLength:Ds(x)}))}initTrace(){if(this.waitStopRaf)return;const{delay:v,mouse:m}=this.opts;(this.raf.tick>Lt(v.min,v.max)||this.mouse.active&&m.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let v=this.traces.length;for(;v--;)this.traces[v].draw(),this.traces[v].update((m,g,x)=>{this.initExplosion(m,g,x),this.sound.play(),this.traces.splice(v,1)})}initExplosion(v,m,g){const{particles:x,flickering:L,lineWidth:$,explosion:N,brightness:xt,friction:nt,gravity:lt,decay:A}=this.opts;let j=Ds(x);for(;j--;)this.explosions.push(new Da({x:v,y:m,ctx:this.ctx,hue:g,friction:nt,gravity:lt,flickering:Lt(0,100)<=L,lineWidth:we($.explosion.min,$.explosion.max),explosionLength:Ds(N),brightness:xt,decay:A}))}drawExplosion(){let v=this.explosions.length;for(;v--;)this.explosions[v].draw(),this.explosions[v].update(()=>{this.explosions.splice(v,1)})}}var zs={exports:{}};/*! Tweakpane 3.1.4 (c) 2016 cocopon, licensed under the MIT license. */(function(w,v){(function(m,g){g(v)})(Er,function(m){class g{constructor(t){const[e,s]=t.split("-"),l=e.split(".");this.major=parseInt(l[0],10),this.minor=parseInt(l[1],10),this.patch=parseInt(l[2],10),this.prerelease=s!=null?s:null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}class x{constructor(t){this.controller_=t}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(t){this.controller_.viewProps.set("disabled",t)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(t){this.controller_.viewProps.set("hidden",t)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class L{constructor(t){this.target=t}}class $ extends L{constructor(t,e,s,l){super(t),this.value=e,this.presetKey=s,this.last=l!=null?l:!0}}class N extends L{constructor(t,e,s){super(t),this.value=e,this.presetKey=s}}class xt extends L{constructor(t,e){super(t),this.expanded=e}}class nt extends L{constructor(t,e){super(t),this.index=e}}function lt(n){return n}function A(n){return n==null}function j(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Dn(n,t){let e=n;do{const s=Object.getOwnPropertyDescriptor(e,t);if(s&&(s.set!==void 0||s.writable===!0))return!0;e=Object.getPrototypeOf(e)}while(e!==null);return!1}const yi={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class k{constructor(t){var e;this.message=(e=yi[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}static alreadyDisposed(){return new k({type:"alreadydisposed"})}static notBindable(){return new k({type:"notbindable"})}static propertyNotFound(t){return new k({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new k({type:"shouldneverhappen"})}}class it{constructor(t,e,s){this.obj_=t,this.key_=e,this.presetKey_=s!=null?s:e}static isBindable(t){return!(t===null||typeof t!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(t){this.obj_[this.key_]=t}writeProperty(t,e){const s=this.read();if(!it.isBindable(s))throw k.notBindable();if(!(t in s))throw k.propertyNotFound(t);s[t]=e}}class Rn extends x{get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get title(){var t;return(t=this.controller_.valueController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.valueController.props.set("title",t)}on(t,e){const s=e.bind(this);return this.controller_.valueController.emitter.on(t,()=>{s(new L(this))}),this}}class O{constructor(){this.observers_={}}on(t,e){let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e}),this}off(t,e){const s=this.observers_[t];return s&&(this.observers_[t]=s.filter(l=>l.handler!==e)),this}emit(t,e){const s=this.observers_[t];!s||s.forEach(l=>{l.handler(e)})}}const Pi="tp";function V(n){return(e,s)=>[Pi,"-",n,"v",e?`_${e}`:"",s?`-${s}`:""].join("")}function Ei(n,t){return e=>t(n(e))}function ki(n){return n.rawValue}function _t(n,t){n.emitter.on("change",Ei(ki,t)),t(n.rawValue)}function dt(n,t,e){_t(n.value(t),e)}function gt(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function R(n,t){return e=>{gt(n,t,e)}}function qe(n,t){_t(n,e=>{t.textContent=e!=null?e:""})}const Ge=V("btn");class Vi{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ge()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("button");s.classList.add(Ge("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const l=t.createElement("div");l.classList.add(Ge("t")),qe(e.props.value("title"),l),this.buttonElement.appendChild(l)}}class ht{constructor(t,e){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Vi(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class zn{constructor(t,e){var s;this.constraint_=e==null?void 0:e.constraint,this.equals_=(s=e==null?void 0:e.equals)!==null&&s!==void 0?s:(l,c)=>l===c,this.emitter=new O,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e!=null?e:{forceEmit:!1,last:!0},l=this.constraint_?this.constraint_.constrain(t):t,c=this.rawValue_;!!this.equals_(c,l)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=l,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:l,sender:this}))}}class Mt{constructor(t){this.emitter=new O,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e!=null?e:{forceEmit:!1,last:!0},l=this.value_;l===t&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:s,previousRawValue:l,rawValue:this.value_,sender:this}))}}function F(n,t){const e=t==null?void 0:t.constraint,s=t==null?void 0:t.equals;return!e&&!s?new Mt(n):new zn(n,t)}class P{constructor(t){this.emitter=new O,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((s,l)=>Object.assign(s,{[l]:F(t[l])}),{})}static fromObject(t){const e=this.createCore(t);return new P(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}function Si(n,t){const s=Object.keys(t).reduce((l,c)=>{if(l===void 0)return;const h=t[c],b=h(n[c]);return b.succeeded?Object.assign(Object.assign({},l),{[c]:b.value}):void 0},{});return s}function Nn(n,t){return n.reduce((e,s)=>{if(e===void 0)return;const l=t(s);if(!(!l.succeeded||l.value===void 0))return[...e,l.value]},[])}function On(n){return n===null?!1:typeof n=="object"}function ut(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const s=n(e);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function J(n){return{custom:t=>ut(t)(n),boolean:ut(t=>typeof t=="boolean"?t:void 0)(n),number:ut(t=>typeof t=="number"?t:void 0)(n),string:ut(t=>typeof t=="string"?t:void 0)(n),function:ut(t=>typeof t=="function"?t:void 0)(n),constant:t=>ut(e=>e===t?t:void 0)(n),raw:ut(t=>t)(n),object:t=>ut(e=>{if(!!On(e))return Si(e,t)})(n),array:t=>ut(e=>{if(!!Array.isArray(e))return Nn(e,t)})(n)}}const D={optional:J(!0),required:J(!1)};function q(n,t){const e=D.required.object(t)(n);return e.succeeded?e.value:void 0}function xe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function Li(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Ye{constructor(t){this.value_=t}static create(t){return[new Ye(t),(e,s)=>{t.setRawValue(e,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const Qt=V("");function In(n,t){return R(n,Qt(void 0,t))}class vt extends P{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Ye.create(F(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,s,l;const c=t!=null?t:{};return new vt(P.createCore({disabled:(e=c.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(s=c.hidden)!==null&&s!==void 0?s:!1,parent:(l=c.parent)!==null&&l!==void 0?l:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){_t(this.globalDisabled_,In(t,"disabled")),dt(this,"hidden",In(t,"hidden"))}bindDisabled(t){_t(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){_t(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const s=t.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function Ce(){return["veryfirst","first","last","verylast"]}const Bn=V(""),ye={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Zt{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Ce().forEach(s=>{e.classList.remove(Bn(void 0,ye[s]))}),this.blade.get("positions").forEach(s=>{e.classList.add(Bn(void 0,ye[s]))})}),this.viewProps.handleDispose(()=>{Li(e)})}get parent(){return this.parent_}set parent(t){if(this.parent_=t,!("parent"in this.viewProps.valMap_)){xe({key:"parent",target:vt.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const mt="http://www.w3.org/2000/svg";function te(n){n.offsetHeight}function Mi(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Pe(n){return n.ontouchstart!==void 0}function Ee(){return globalThis}function Ai(){return Ee().document}function jn(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const Bt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function ke(n,t){const e=n.createElementNS(mt,"svg");return e.innerHTML=Bt[t],e}function Fn(n,t,e){n.insertBefore(t,n.children[e])}function We(n){n.parentElement&&n.parentElement.removeChild(n)}function ee(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function Kn(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Ve(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const Ct=V("lbl");function $n(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(l=>n.createTextNode(l)).forEach((l,c)=>{c>0&&e.appendChild(n.createElement("br")),e.appendChild(l)}),e}class Un{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ct()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Ct("l")),dt(e.props,"label",c=>{A(c)?this.element.classList.add(Ct(void 0,"nol")):(this.element.classList.remove(Ct(void 0,"nol")),Kn(s),s.appendChild($n(t,c)))}),this.element.appendChild(s),this.labelElement=s;const l=t.createElement("div");l.classList.add(Ct("v")),this.element.appendChild(l),this.valueElement=l}}class Se extends Zt{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{view:new Un(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Hn={id:"button",type:"blade",accept(n){const t=D,e=q(n,{title:t.required.string,view:t.required.constant("button"),label:t.optional.string});return e?{params:e}:null},controller(n){return new Se(n.document,{blade:n.blade,props:P.fromObject({label:n.params.label}),valueController:new ht(n.document,{props:P.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof Se)||!(n.controller.valueController instanceof ht)?null:new Rn(n.controller)}};class jt extends Zt{constructor(t){super(t),this.value=t.value}}function ne(){return new P({positions:F([],{equals:j})})}class ie extends P{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=P.createCore(e);return new ie(s)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!A(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const s=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};dt(this,"expanded",s),dt(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ti(n,t){let e=0;return Mi(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),te(t),e=t.clientHeight,n.set("temporaryExpanded",null),te(t)}),e}function qn(n,t){t.style.height=n.styleHeight}function Xe(n,t){n.value("expanded").emitter.on("beforechange",()=>{n.set("completed",!1),A(n.get("expandedHeight"))&&n.set("expandedHeight",Ti(n,t)),n.set("shouldFixHeight",!0),te(t)}),n.emitter.on("change",()=>{qn(n,t)}),qn(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class Je extends x{constructor(t,e){super(t),this.rackApi_=e}}function Di(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function Qe(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function se(n,t){const e=t!=null?t:{};return n.addBlade(Object.assign(Object.assign({},e),{view:"separator"}))}function Ri(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}class At{constructor(t){this.emitter=new O,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw k.shouldNeverHappen();const s=e!==void 0?e:this.items_.length;this.items_.splice(s,0,t),this.cache_.add(t);const l=this.extract_(t);l&&(l.emitter.on("add",this.onSubListAdd_),l.emitter.on("remove",this.onSubListRemove_),l.allItems().forEach(c=>{this.cache_.add(c)})),this.emitter.emit("add",{index:s,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const s=this.extract_(t);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}class Ze extends x{constructor(t){super(t),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(t){const e=t.sender.target.read();this.emitter_.emit("change",{event:new $(this,e,this.controller_.binding.target.presetKey,t.options.last)})}}class st extends Se{constructor(t,e){super(t,e),this.binding=e.binding}}class Le extends x{constructor(t){super(t),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(t){const e=t.sender.target.read();this.emitter_.emit("update",{event:new N(this,e,this.controller_.binding.target.presetKey)})}}class yt extends Se{constructor(t,e){super(t,e),this.binding=e.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function zi(n){return n instanceof Me?n.apiSet_:n instanceof Je?n.rackApi_.apiSet_:null}function re(n,t){const e=n.find(s=>s.controller_===t);if(!e)throw k.shouldNeverHappen();return e}function Gn(n,t,e){if(!it.isBindable(n))throw k.notBindable();return new it(n,t,e)}class Me extends x{constructor(t,e){super(t),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new O,this.apiSet_=new At(zi),this.pool_=e;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(l=>{this.setUpApi_(l)})}get children(){return this.controller_.rack.children.map(t=>re(this.apiSet_,t))}addInput(t,e,s){const l=s!=null?s:{},c=this.controller_.view.element.ownerDocument,h=this.pool_.createInput(c,Gn(t,e,l.presetKey),l),b=new Ze(h);return this.add(b,l.index)}addMonitor(t,e,s){const l=s!=null?s:{},c=this.controller_.view.element.ownerDocument,h=this.pool_.createMonitor(c,Gn(t,e),l),b=new Le(h);return this.add(b,l.index)}addFolder(t){return Qe(this,t)}addButton(t){return Di(this,t)}addSeparator(t){return se(this,t)}addTab(t){return Ri(this,t)}add(t,e){this.controller_.rack.add(t.controller_,e);const s=this.apiSet_.find(l=>l.controller_===t.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(t),t}remove(t){this.controller_.rack.remove(t.controller_)}addBlade(t){const e=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(e,t),l=this.pool_.createBladeApi(s);return this.add(l,t.index)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}setUpApi_(t){this.apiSet_.find(s=>s.controller_===t)||this.apiSet_.add(this.pool_.createBladeApi(t))}onRackAdd_(t){this.setUpApi_(t.bladeController)}onRackRemove_(t){if(t.isRoot){const e=re(this.apiSet_,t.bladeController);this.apiSet_.remove(e)}}onRackInputChange_(t){const e=t.bladeController;if(e instanceof st){const s=re(this.apiSet_,e),l=e.binding;this.emitter_.emit("change",{event:new $(s,l.target.read(),l.target.presetKey,t.options.last)})}else if(e instanceof jt){const s=re(this.apiSet_,e);this.emitter_.emit("change",{event:new $(s,e.value.rawValue,void 0,t.options.last)})}}onRackMonitorUpdate_(t){if(!(t.bladeController instanceof yt))throw k.shouldNeverHappen();const e=re(this.apiSet_,t.bladeController),s=t.bladeController.binding;this.emitter_.emit("update",{event:new N(e,s.target.read(),s.target.presetKey)})}}class tn extends Je{constructor(t,e){super(t,new Me(t.rackController,e)),this.emitter_=new O,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new xt(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(t){this.controller_.foldable.set("expanded",t)}get title(){return this.controller_.props.get("title")}set title(t){this.controller_.props.set("title",t)}get children(){return this.rackApi_.children}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class en extends Zt{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}}class Ni{constructor(t,e){const s=V(e.viewName);this.element=t.createElement("div"),this.element.classList.add(s()),e.viewProps.bindClassModifiers(this.element)}}function Oi(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof st&&s.binding===t)return s}return null}function Ii(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof yt&&s.binding===t)return s}return null}function Bi(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof jt&&s.value===t)return s}return null}function nn(n){return n instanceof oe?n.rack:n instanceof en?n.rackController.rack:null}function ji(n){const t=nn(n);return t?t.bcSet_:null}class Fi{constructor(t){var e,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new O,this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new At(ji),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var s;(s=t.parent)===null||s===void 0||s.remove(t),Dn(t,"parent")?t.parent=this:(t.parent_=this,xe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(t,e)}remove(t){Dn(t,"parent")?t.parent=null:(t.parent_=null,xe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(e=>e instanceof t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,isRoot:e,sender:this}),!e)return;const s=t.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof st)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof yt)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof jt)s.value.emitter.on("change",this.onChildValueChange_);else{const l=nn(s);if(l){const c=l.emitter;c.on("layout",this.onDescendantLayout_),c.on("inputchange",this.onDescendantInputChange_),c.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,isRoot:e,sender:this}),!e)return;const s=t.item;if(s instanceof st)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof yt)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof jt)s.value.emitter.off("change",this.onChildValueChange_);else{const l=nn(s);if(l){const c=l.emitter;c.off("layout",this.onDescendantLayout_),c.off("inputchange",this.onDescendantInputChange_),c.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const t=this.bcSet_.items.filter(l=>!l.viewProps.get("hidden")),e=t[0],s=t[t.length-1];this.bcSet_.items.forEach(l=>{const c=[];l===e&&(c.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&c.push("veryfirst")),l===s&&(c.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&c.push("verylast")),l.blade.set("positions",c)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildInputChange_(t){const e=Oi(this.find(st),t.sender);if(!e)throw k.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onChildMonitorUpdate_(t){const e=Ii(this.find(yt),t.sender);if(!e)throw k.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:e,sender:this})}onChildValueChange_(t){const e=Bi(this.find(jt),t.sender);if(!e)throw k.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onDescendantLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(t){this.emitter.emit("inputchange",{bladeController:t.bladeController,options:t.options,sender:this})}onDescendantMonitorUpdate_(t){this.emitter.emit("monitorupdate",{bladeController:t.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class oe extends Zt{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Ni(t,{viewName:"brk",viewProps:e.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Fi({blade:e.root?void 0:e.blade,viewProps:e.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let l=this.rack.children.length-1;l>=0;l--)this.rack.children[l].viewProps.set("disposed",!0)})}onRackAdd_(t){!t.isRoot||Fn(this.view.element,t.bladeController.view.element,t.index)}onRackRemove_(t){!t.isRoot||We(t.bladeController.view.element)}}const sn=V("cnt");class Ki{constructor(t,e){var s;this.className_=V((s=e.viewName)!==null&&s!==void 0?s:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),sn()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),dt(this.foldable_,"completed",R(this.element,this.className_(void 0,"cpl")));const l=t.createElement("button");l.classList.add(this.className_("b")),dt(e.props,"title",y=>{A(y)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const c=t.createElement("div");c.classList.add(this.className_("i")),this.element.appendChild(c);const h=t.createElement("div");h.classList.add(this.className_("t")),qe(e.props.value("title"),h),this.buttonElement.appendChild(h),this.titleElement=h;const b=t.createElement("div");b.classList.add(this.className_("m")),this.buttonElement.appendChild(b);const C=e.containerElement;C.classList.add(this.className_("c")),this.element.appendChild(C),this.containerElement=C}}class rn extends en{constructor(t,e){var s;const l=ie.create((s=e.expanded)!==null&&s!==void 0?s:!0),c=new oe(t,{blade:e.blade,root:e.root,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:c,view:new Ki(t,{containerElement:c.view.element,foldable:l,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=l,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const $i={id:"folder",type:"blade",accept(n){const t=D,e=q(n,{title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean});return e?{params:e}:null},controller(n){return new rn(n.document,{blade:n.blade,expanded:n.params.expanded,props:P.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof rn?new tn(n.controller,n.pool):null}};class Tt extends jt{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{value:e.valueController.value,view:new Un(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Yn extends x{}const ae=V("spr");class Ui{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ae()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("hr");s.classList.add(ae("r")),this.element.appendChild(s)}}class W extends Zt{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Ui(t,{viewProps:e.viewProps})}))}}const Hi={id:"separator",type:"blade",accept(n){const e=q(n,{view:D.required.constant("separator")});return e?{params:e}:null},controller(n){return new W(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof W?new Yn(n.controller):null}},Pt=V("tbi");class qi{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Pt()),e.viewProps.bindClassModifiers(this.element),dt(e.props,"selected",c=>{c?this.element.classList.add(Pt(void 0,"sel")):this.element.classList.remove(Pt(void 0,"sel"))});const s=t.createElement("button");s.classList.add(Pt("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const l=t.createElement("div");l.classList.add(Pt("t")),qe(e.props.value("title"),l),this.buttonElement.appendChild(l),this.titleElement=l}}class Wn{constructor(t,e){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new qi(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Xn{constructor(t,e){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Wn(t,{props:e.itemProps,viewProps:vt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new oe(t,{blade:ne(),viewProps:vt.create()}),this.props=e.props,dt(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Jn{constructor(t,e){this.controller_=t,this.rackApi_=e}get title(){var t;return(t=this.controller_.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.itemController.props.set("title",t)}get selected(){return this.controller_.props.get("selected")}set selected(t){this.controller_.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addBlade(t){return this.rackApi_.addBlade(t)}}class Qn extends Je{constructor(t,e){super(t,new Me(t.rackController,e)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new O,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(t=>{const e=this.pageApiMap_.get(t);if(!e)throw k.shouldNeverHappen();return e})}addPage(t){const e=this.controller_.view.element.ownerDocument,s=new Xn(e,{itemProps:P.fromObject({selected:!1,title:t.title}),props:P.fromObject({selected:!1})});this.controller_.add(s,t.index);const l=this.pageApiMap_.get(s);if(!l)throw k.shouldNeverHappen();return l}removePage(t){this.controller_.remove(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}setUpPageApi_(t){const e=this.rackApi_.apiSet_.find(l=>l.controller_===t.contentController);if(!e)throw k.shouldNeverHappen();const s=new Jn(t,e);this.pageApiMap_.set(t,s)}onPageAdd_(t){this.setUpPageApi_(t.item)}onPageRemove_(t){if(!this.pageApiMap_.get(t.item))throw k.shouldNeverHappen();this.pageApiMap_.delete(t.item)}onSelect_(t){this.emitter_.emit("select",{event:new nt(this,t.rawValue)})}}const on=-1;class Ft{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=F(!0),this.selectedIndex=F(on),this.items_=[]}add(t,e){const s=e!=null?e:this.items_.length;this.items_.splice(s,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=on,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,s)=>{e.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,s)=>{e.rawValue=s===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(s=>s===t.sender);this.items_.forEach((s,l)=>{s.rawValue=l===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Et=V("tab");class Zn{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Et(),sn()),e.viewProps.bindClassModifiers(this.element),_t(e.empty,R(this.element,Et(void 0,"nop")));const s=t.createElement("div");s.classList.add(Et("t")),this.element.appendChild(s),this.itemsElement=s;const l=t.createElement("div");l.classList.add(Et("i")),this.element.appendChild(l);const c=e.contentsElement;c.classList.add(Et("c")),this.element.appendChild(c),this.contentsElement=c}}class ti extends en{constructor(t,e){const s=new oe(t,{blade:e.blade,viewProps:e.viewProps}),l=new Ft;super({blade:e.blade,rackController:s,view:new Zn(t,{contentsElement:s.view.element,empty:l.empty,viewProps:e.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new At(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=l}get pageSet(){return this.pageSet_}add(t,e){this.pageSet_.add(t,e)}remove(t){this.pageSet_.remove(this.pageSet_.items[t])}onPageAdd_(t){const e=t.item;Fn(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(e.contentController,t.index),this.tab.add(e.props.value("selected"))}onPageRemove_(t){const e=t.item;We(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.rackController.rack.remove(e.contentController),this.tab.remove(e.props.value("selected"))}}const an={id:"tab",type:"blade",accept(n){const t=D,e=q(n,{pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")});return!e||e.pages.length===0?null:{params:e}},controller(n){const t=new ti(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const s=new Xn(n.document,{itemProps:P.fromObject({selected:!1,title:e.title}),props:P.fromObject({selected:!1})});t.add(s)}),t},api(n){return n.controller instanceof ti?new Qn(n.controller,n.pool):null}};function ln(n,t){const e=n.accept(t.params);if(!e)return null;const s=D.optional.boolean(t.params.disabled).value,l=D.optional.boolean(t.params.hidden).value;return n.controller({blade:ne(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:s,hidden:l}),viewProps:vt.create({disabled:s,hidden:l})})}class Ae{constructor(){this.disabled=!1,this.emitter=new O}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class U{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new O,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Kt{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,s)=>s.constrain(e),t)}}function Q(n,t){if(n instanceof t)return n;if(n instanceof Kt){const e=n.constraints.reduce((s,l)=>s||(l instanceof t?l:null),null);if(e)return e}return null}class G{constructor(t){this.values=P.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(t,s),e)}}class le{constructor(t){this.values=P.fromObject({options:t})}get options(){return this.values.get("options")}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(l=>l.value===t).length>0?t:e[0].value}}class ei{constructor(t){this.values=P.fromObject({max:t.max,min:t.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(t){const e=this.values.get("max"),s=this.values.get("min");let l=t;return A(s)||(l=Math.max(l,s)),A(e)||(l=Math.min(l,e)),l}}class $t{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,s=Math.round((t-e)/this.step);return e+s*this.step}}const pn=V("lst");class Gi{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(pn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("select");s.classList.add(pn("s")),dt(this.props_,"options",c=>{ee(s),c.forEach((h,b)=>{const C=t.createElement("option");C.dataset.index=String(b),C.textContent=h.text,C.value=String(h.value),s.appendChild(C)})}),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const l=t.createElement("div");l.classList.add(pn("m")),l.appendChild(ke(t,"dropdown")),this.element.appendChild(l),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Ut{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Gi(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const s=t.currentTarget.selectedOptions.item(0);if(!s)return;const l=Number(s.dataset.index);this.value.rawValue=this.props.get("options")[l].value}}const ni=V("pop");class Te{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ni()),e.viewProps.bindClassModifiers(this.element),_t(e.shows,R(this.element,ni(void 0,"v")))}}class cn{constructor(t,e){this.shows=F(!1),this.viewProps=e.viewProps,this.view=new Te(t,{shows:this.shows,viewProps:this.viewProps})}}const ii=V("txt");class Yi{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ii()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const s=t.createElement("input");s.classList.add(ii("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class De{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Yi(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const s=t.currentTarget.value,l=this.parser_(s);A(l)||(this.value.rawValue=l),this.view.refresh()}}function Wi(n){return String(n)}function si(n){return n==="false"?!1:!!n}function ri(n){return Wi(n)}class Xi{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Ji={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Qi{constructor(t,e,s){this.left=e,this.operator=t,this.right=s}evaluate(){const t=Ji[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Zi={"+":n=>n,"-":n=>-n,"~":n=>~n};class ts{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Zi[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function dn(n){return(t,e)=>{for(let s=0;s<n.length;s++){const l=n[s](t,e);if(l!=="")return l}return""}}function pe(n,t){var e;const s=n.substr(t).match(/^\s+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function oi(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function ce(n,t){var e;const s=n.substr(t).match(/^[0-9]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function es(n,t){const e=ce(n,t);if(e!=="")return e;const s=n.substr(t,1);if(t+=1,s!=="-"&&s!=="+")return"";const l=ce(n,t);return l===""?"":s+l}function de(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const s=es(n,t);return s===""?"":e+s}function ai(n,t){const e=n.substr(t,1);if(e==="0")return e;const s=oi(n,t);return t+=s.length,s===""?"":s+ce(n,t)}function ns(n,t){const e=ai(n,t);if(t+=e.length,e==="")return"";const s=n.substr(t,1);if(t+=s.length,s!==".")return"";const l=ce(n,t);return t+=l.length,e+s+l+de(n,t)}function is(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const s=ce(n,t);return t+=s.length,s===""?"":e+s+de(n,t)}function kt(n,t){const e=ai(n,t);return t+=e.length,e===""?"":e+de(n,t)}const ss=dn([ns,is,kt]);function rs(n,t){var e;const s=n.substr(t).match(/^[01]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function li(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const s=rs(n,t);return s===""?"":e+s}function os(n,t){var e;const s=n.substr(t).match(/^[0-7]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function pi(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const s=os(n,t);return s===""?"":e+s}function hn(n,t){var e;const s=n.substr(t).match(/^[0-9a-f]+/i);return(e=s&&s[0])!==null&&e!==void 0?e:""}function as(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const s=hn(n,t);return s===""?"":e+s}const ci=dn([li,pi,as]),rt=dn([ci,ss]);function ls(n,t){const e=rt(n,t);return t+=e.length,e===""?null:{evaluable:new Xi(e),cursor:t}}function ps(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const s=mn(n,t);if(!s)return null;t=s.cursor,t+=pe(n,t).length;const l=n.substr(t,1);return t+=l.length,l!==")"?null:{evaluable:s.evaluable,cursor:t}}function un(n,t){var e;return(e=ls(n,t))!==null&&e!==void 0?e:ps(n,t)}function di(n,t){const e=un(n,t);if(e)return e;const s=n.substr(t,1);if(t+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const l=di(n,t);return l?(t=l.cursor,{cursor:t,evaluable:new ts(s,l.evaluable)}):null}function Vt(n,t,e){e+=pe(t,e).length;const s=n.filter(l=>t.startsWith(l,e))[0];return s?(e+=s.length,e+=pe(t,e).length,{cursor:e,operator:s}):null}function vn(n,t){return(e,s)=>{const l=n(e,s);if(!l)return null;s=l.cursor;let c=l.evaluable;for(;;){const h=Vt(t,e,s);if(!h)break;s=h.cursor;const b=n(e,s);if(!b)return null;s=b.cursor,c=new Qi(h.operator,c,b.evaluable)}return c?{cursor:s,evaluable:c}:null}}const cs=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>vn(n,t),di);function mn(n,t){return t+=pe(n,t).length,cs(n,t)}function ds(n){const t=mn(n,0);return!t||t.cursor+pe(n,t.cursor).length!==n.length?null:t.evaluable}function X(n){var t;const e=ds(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function bn(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=X(n);if(!A(t))return t}return 0}function fn(n){return String(n)}function H(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}const hi=H(0);function pt(n){return hi(n)+"%"}function ui(n){return String(n)}function Re(n){return n}function _n(n,t){for(;n.length<t;)n.push(void 0)}function vi(n){const t=[];return _n(t,n),F(t)}function mi(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function Ht(n,t){const e=[...mi(n),t];return e.length>n.length?e.splice(0,e.length-n.length):_n(e,n.length),e}function qt({primary:n,secondary:t,forward:e,backward:s}){let l=!1;function c(h){l||(l=!0,h(),l=!1)}n.emitter.on("change",h=>{c(()=>{t.setRawValue(e(n,t),h.options)})}),t.emitter.on("change",h=>{c(()=>{n.setRawValue(s(n,t),h.options)}),c(()=>{t.setRawValue(e(n,t),h.options)})}),c(()=>{t.setRawValue(e(n,t),{forceEmit:!1,last:!0})})}function Y(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function he(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function bt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function bi(n){return n==="ArrowUp"||n==="ArrowDown"}function ze(n){return bi(n)||n==="ArrowLeft"||n==="ArrowRight"}function gn(n,t){var e,s;const l=t.ownerDocument.defaultView,c=t.getBoundingClientRect();return{x:n.pageX-(((e=l&&l.scrollX)!==null&&e!==void 0?e:0)+c.left),y:n.pageY-(((s=l&&l.scrollY)!==null&&s!==void 0?s:0)+c.top)}}class Dt{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new O,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(gn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(gn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(gn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const s=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,l=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(s?{x:s.clientX-l.left,y:s.clientY-l.top}:void 0),sender:this,shiftKey:t.shiftKey})}}function z(n,t,e,s,l){const c=(n-t)/(e-t);return s+c*(l-s)}function wn(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function K(n,t,e){return Math.min(Math.max(n,t),e)}function Gt(n,t){return(n%t+t)%t}const tt=V("txt");class xn{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(tt(),tt(void 0,"num")),e.arrayPosition&&this.element.classList.add(tt(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(tt("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(tt()),this.inputElement.classList.add(tt("i"));const l=t.createElement("div");l.classList.add(tt("k")),this.element.appendChild(l),this.knobElement=l;const c=t.createElementNS(mt,"svg");c.classList.add(tt("g")),this.knobElement.appendChild(c);const h=t.createElementNS(mt,"path");h.classList.add(tt("gb")),c.appendChild(h),this.guideBodyElem_=h;const b=t.createElementNS(mt,"path");b.classList.add(tt("gh")),c.appendChild(b),this.guideHeadElem_=b;const C=t.createElement("div");C.classList.add(V("tt")()),this.knobElement.appendChild(C),this.tooltipElem_=C,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(tt(void 0,"drg"));return}this.element.classList.add(tt(void 0,"drg"));const e=t.rawValue/this.props_.get("draggingScale"),s=e+(e>0?-1:e<0?1:0),l=K(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+l},0 L${s},4 L${s+l},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const c=this.props_.get("formatter");this.tooltipElem_.textContent=c(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class ue{constructor(t,e){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.parser_=e.parser,this.props=e.props,this.sliderProps_=(s=e.sliderProps)!==null&&s!==void 0?s:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=F(null),this.view=new xn(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const l=new Dt(this.view.knobElement);l.emitter.on("down",this.onPointerDown_),l.emitter.on("move",this.onPointerMove_),l.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,s;const l=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("minValue"),c=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let h=t;return l!==void 0&&(h=Math.max(h,l)),c!==void 0&&(h=Math.min(h,c)),h}onInputChange_(t){const s=t.currentTarget.value,l=this.parser_(s);A(l)||(this.value.rawValue=this.constrainValue_(l)),this.view.refresh()}onInputKeyDown_(t){const e=Y(this.baseStep_,he(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Y(this.baseStep_,he(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("draggingScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Cn=V("sld");class et{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Cn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Cn("t")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const l=t.createElement("div");l.classList.add(Cn("k")),this.trackElement.appendChild(l),this.knobElement=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=K(z(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class yn{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new et(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){!t.point||this.value.setRawValue(z(K(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Y(this.baseStep_,bt(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Y(this.baseStep_,bt(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ve=V("sldtxt");class Pn{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ve());const s=t.createElement("div");s.classList.add(ve("s")),this.sliderView_=e.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(ve("t")),this.textView_=e.textView,l.appendChild(this.textView_.element),this.element.appendChild(l)}}class Ne{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new yn(t,{baseStep:e.baseStep,props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new ue(t,{baseStep:e.baseStep,parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Pn(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ct(n,t){n.write(t)}function me(n){const t=D;if(Array.isArray(n))return t.required.array(t.required.object({text:t.required.string,value:t.required.raw}))(n).value;if(typeof n=="object")return t.required.raw(n).value}function En(n){if(n==="inline"||n==="popup")return n}function wt(n){const t=D;return t.required.object({max:t.optional.number,min:t.optional.number,step:t.optional.number})(n).value}function fi(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function kn(n){return A(n)?null:new le(fi(n))}function hs(n){const t=n?Q(n,$t):null;return t?t.step:null}function Oe(n,t){const e=n&&Q(n,$t);return e?wn(e.step):Math.max(wn(t),2)}function Rt(n){const t=hs(n);return t!=null?t:1}function zt(n,t){var e;const s=n&&Q(n,$t),l=Math.abs((e=s==null?void 0:s.step)!==null&&e!==void 0?e:t);return l===0?.1:Math.pow(10,Math.floor(Math.log10(l))-1)}const be=V("ckb");class fe{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(be()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("label");s.classList.add(be("l")),this.element.appendChild(s);const l=t.createElement("input");l.classList.add(be("i")),l.type="checkbox",s.appendChild(l),this.inputElement=l,e.viewProps.bindDisabled(this.inputElement);const c=t.createElement("div");c.classList.add(be("w")),s.appendChild(c);const h=ke(t,"check");c.appendChild(h),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _i{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new fe(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked}}function gi(n){const t=[],e=kn(n.options);return e&&t.push(e),new Kt(t)}const Ie={id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=q(t,{options:D.optional.custom(me)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>si,constraint:n=>gi(n.params),writer:n=>ct},controller:n=>{const t=n.document,e=n.value,s=n.constraint,l=s&&Q(s,le);return l?new Ut(t,{props:new P({options:l.values.value("options")}),value:e,viewProps:n.viewProps}):new _i(t,{value:e,viewProps:n.viewProps})}},Nt=V("col");class Vn{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Nt()),e.foldable.bindExpandedClass(this.element,Nt(void 0,"expanded")),dt(e.foldable,"completed",R(this.element,Nt(void 0,"cpl")));const s=t.createElement("div");s.classList.add(Nt("h")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(Nt("s")),s.appendChild(l),this.swatchElement=l;const c=t.createElement("div");if(c.classList.add(Nt("t")),s.appendChild(c),this.textElement=c,e.pickerLayout==="inline"){const h=t.createElement("div");h.classList.add(Nt("p")),this.element.appendChild(h),this.pickerElement=h}else this.pickerElement=null}}function us(n,t,e){const s=K(n/255,0,1),l=K(t/255,0,1),c=K(e/255,0,1),h=Math.max(s,l,c),b=Math.min(s,l,c),C=h-b;let y=0,M=0;const T=(b+h)/2;return C!==0&&(M=C/(1-Math.abs(h+b-1)),s===h?y=(l-c)/C:l===h?y=2+(c-s)/C:y=4+(s-l)/C,y=y/6+(y<0?1:0)),[y*360,M*100,T*100]}function vs(n,t,e){const s=(n%360+360)%360,l=K(t/100,0,1),c=K(e/100,0,1),h=(1-Math.abs(2*c-1))*l,b=h*(1-Math.abs(s/60%2-1)),C=c-h/2;let y,M,T;return s>=0&&s<60?[y,M,T]=[h,b,0]:s>=60&&s<120?[y,M,T]=[b,h,0]:s>=120&&s<180?[y,M,T]=[0,h,b]:s>=180&&s<240?[y,M,T]=[0,b,h]:s>=240&&s<300?[y,M,T]=[b,0,h]:[y,M,T]=[h,0,b],[(y+C)*255,(M+C)*255,(T+C)*255]}function ms(n,t,e){const s=K(n/255,0,1),l=K(t/255,0,1),c=K(e/255,0,1),h=Math.max(s,l,c),b=Math.min(s,l,c),C=h-b;let y;C===0?y=0:h===s?y=60*(((l-c)/C%6+6)%6):h===l?y=60*((c-s)/C+2):y=60*((s-l)/C+4);const M=h===0?0:C/h,T=h;return[y,M*100,T*100]}function wi(n,t,e){const s=Gt(n,360),l=K(t/100,0,1),c=K(e/100,0,1),h=c*l,b=h*(1-Math.abs(s/60%2-1)),C=c-h;let y,M,T;return s>=0&&s<60?[y,M,T]=[h,b,0]:s>=60&&s<120?[y,M,T]=[b,h,0]:s>=120&&s<180?[y,M,T]=[0,h,b]:s>=180&&s<240?[y,M,T]=[0,b,h]:s>=240&&s<300?[y,M,T]=[b,0,h]:[y,M,T]=[h,0,b],[(y+C)*255,(M+C)*255,(T+C)*255]}function o(n,t,e){const s=e+t*(100-Math.abs(2*e-100))/200;return[n,s!==0?t*(100-Math.abs(2*e-100))/s:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function i(n,t,e){const s=100-Math.abs(e*(200-t)/100-100);return[n,s!==0?t*e/s:0,e*(200-t)/(2*100)]}function r(n){return[n[0],n[1],n[2]]}function a(n,t){return[n[0],n[1],n[2],t]}const p={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:o,rgb:vs},hsv:{hsl:i,hsv:(n,t,e)=>[n,t,e],rgb:wi},rgb:{hsl:us,hsv:ms,rgb:(n,t,e)=>[n,t,e]}};function d(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function u(n,t){return n===t?t:Gt(n,t)}function f(n,t,e){var s;const l=d(t,e);return[t==="rgb"?K(n[0],0,l[0]):u(n[0],l[0]),K(n[1],0,l[1]),K(n[2],0,l[2]),K((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function S(n,t,e,s){const l=d(t,e),c=d(t,s);return n.map((h,b)=>h/l[b]*c[b])}function ot(n,t,e){const s=S(n,t.mode,t.type,"int"),l=p[t.mode][e.mode](...s);return S(l,e.mode,"int",e.type)}function at(n,t){return typeof n!="object"||A(n)?!1:t in n&&typeof n[t]=="number"}class E{constructor(t,e,s="int"){this.mode=e,this.type=s,this.comps_=f(t,e,s)}static black(t="int"){return new E([0,0,0],"rgb",t)}static fromObject(t,e="int"){const s="a"in t?[t.r,t.g,t.b,t.a]:[t.r,t.g,t.b];return new E(s,"rgb",e)}static toRgbaObject(t,e="int"){return t.toRgbaObject(e)}static isRgbColorObject(t){return at(t,"r")&&at(t,"g")&&at(t,"b")}static isRgbaColorObject(t){return this.isRgbColorObject(t)&&at(t,"a")}static isColorObject(t){return this.isRgbColorObject(t)}static equals(t,e){if(t.mode!==e.mode)return!1;const s=t.comps_,l=e.comps_;for(let c=0;c<s.length;c++)if(s[c]!==l[c])return!1;return!0}getComponents(t,e="int"){return a(ot(r(this.comps_),{mode:this.mode,type:this.type},{mode:t!=null?t:this.mode,type:e}),this.comps_[3])}toRgbaObject(t="int"){const e=this.getComponents("rgb",t);return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const St=V("colp");class bs{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(St()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(St("hsv"));const l=t.createElement("div");l.classList.add(St("sv")),this.svPaletteView_=e.svPaletteView,l.appendChild(this.svPaletteView_.element),s.appendChild(l);const c=t.createElement("div");c.classList.add(St("h")),this.hPaletteView_=e.hPaletteView,c.appendChild(this.hPaletteView_.element),s.appendChild(c),this.element.appendChild(s);const h=t.createElement("div");if(h.classList.add(St("rgb")),this.textView_=e.textView,h.appendChild(this.textView_.element),this.element.appendChild(h),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const b=t.createElement("div");b.classList.add(St("a"));const C=t.createElement("div");C.classList.add(St("ap")),C.appendChild(this.alphaViews_.palette.element),b.appendChild(C);const y=t.createElement("div");y.classList.add(St("at")),y.appendChild(this.alphaViews_.text.element),b.appendChild(y),this.element.appendChild(b)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function Tr(n){return n==="int"?"int":n==="float"?"float":void 0}function fs(n){const t=D;return q(n,{alpha:t.optional.boolean,color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(Tr)}),expanded:t.optional.boolean,picker:t.optional.custom(En)})}function _e(n){return n?.1:1}function ge(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}function Dr(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function ft(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Rr={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Is(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),s=t[2];return Rr[s](e)}function Bs(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[ft(t[1],255),ft(t[2],255),ft(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function js(n){return t=>{const e=Bs(t);return e?new E(e,"rgb",n):null}}function Fs(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[ft(t[1],255),ft(t[2],255),ft(t[3],255),ft(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Ks(n){return t=>{const e=Fs(t);return e?new E(e,"rgb",n):null}}function $s(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Is(t[1]),ft(t[2],100),ft(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Us(n){return t=>{const e=$s(t);return e?new E(e,"hsl",n):null}}function Hs(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Is(t[1]),ft(t[2],100),ft(t[3],100),ft(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function qs(n){return t=>{const e=Hs(t);return e?new E(e,"hsl",n):null}}function Gs(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function zr(n){const t=Gs(n);return t?new E(t,"rgb","int"):null}function Ys(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),z(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),z(parseInt(e[4],16),0,255,0,1)]:null}function Nr(n){const t=Ys(n);return t?new E(t,"rgb","int"):null}function Ws(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Xs(n){return t=>{const e=Ws(t);return e?new E(e,"rgb",n):null}}function Js(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Qs(n){return t=>{const e=Js(t);return e?new E(e,"rgb",n):null}}const Or=[{parser:Gs,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ys,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Bs,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Fs,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:$s,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Hs,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Ws,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Js,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ir(n){return Or.reduce((t,{parser:e,result:s})=>t||(e(n)?s:null),null)}function _s(n,t="int"){const e=Ir(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}const Zs={int:[zr,Nr,js("int"),Ks("int"),Us("int"),qs("int"),Xs("int"),Qs("int")],float:[js("float"),Ks("float"),Us("float"),qs("float"),Xs("float"),Qs("float")]};function Br(n){const t=Zs[n];return e=>{if(typeof e!="string")return E.black(n);const s=t.reduce((l,c)=>l||c(e),null);return s!=null?s:E.black(n)}}function gs(n){const t=Zs[n];return e=>t.reduce((s,l)=>s||l(e),null)}function tr(n){const t=K(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function er(n,t="#"){const e=r(n.getComponents("rgb")).map(tr).join("");return`${t}${e}`}function ws(n,t="#"){const e=n.getComponents("rgb"),s=[e[0],e[1],e[2],e[3]*255].map(tr).join("");return`${t}${s}`}function nr(n,t){const e=H(t==="float"?2:0);return`rgb(${r(n.getComponents("rgb",t)).map(l=>e(l)).join(", ")})`}function jr(n){return t=>nr(t,n)}function xi(n,t){const e=H(2),s=H(t==="float"?2:0);return`rgba(${n.getComponents("rgb",t).map((c,h)=>(h===3?e:s)(c)).join(", ")})`}function Fr(n){return t=>xi(t,n)}function Kr(n){const t=[H(0),pt,pt];return`hsl(${r(n.getComponents("hsl")).map((s,l)=>t[l](s)).join(", ")})`}function $r(n){const t=[H(0),pt,pt,H(2)];return`hsla(${n.getComponents("hsl").map((s,l)=>t[l](s)).join(", ")})`}function ir(n,t){const e=H(t==="float"?2:0),s=["r","g","b"];return`{${r(n.getComponents("rgb",t)).map((c,h)=>`${s[h]}: ${e(c)}`).join(", ")}}`}function Ur(n){return t=>ir(t,n)}function sr(n,t){const e=H(2),s=H(t==="float"?2:0),l=["r","g","b","a"];return`{${n.getComponents("rgb",t).map((h,b)=>{const C=b===3?e:s;return`${l[b]}: ${C(h)}`}).join(", ")}}`}function Hr(n){return t=>sr(t,n)}const qr=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:er},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ws},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Kr},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:$r},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:t},stringifier:jr(t)},{format:{alpha:!0,mode:"rgb",notation:"func",type:t},stringifier:Fr(t)},{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Ur(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Hr(t)}],[])];function xs(n){return qr.reduce((t,e)=>t||(Dr(e.format,n)?e.stringifier:null),null)}const Sn=V("apl");class Gr{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Sn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(Sn("b")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(Sn("c")),s.appendChild(l),this.colorElem_=l;const c=t.createElement("div");c.classList.add(Sn("m")),this.element.appendChild(c),this.markerElem_=c;const h=t.createElement("div");h.classList.add(Sn("p")),this.markerElem_.appendChild(h),this.previewElem_=h,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),s=new E([e[0],e[1],e[2],0],"rgb"),l=new E([e[0],e[1],e[2],255],"rgb"),c=["to right",xi(s),xi(l)];this.colorElem_.style.background=`linear-gradient(${c.join(",")})`,this.previewElem_.style.backgroundColor=xi(t);const h=z(e[3],0,1,0,100);this.markerElem_.style.left=`${h}%`}onValueChange_(){this.update_()}}class Yr{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Gr(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=t.point.x/t.bounds.width,l=this.value.rawValue,[c,h,b]=l.getComponents("hsv");this.value.setRawValue(new E([c,h,b,s],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Y(_e(!0),bt(t));if(e===0)return;const s=this.value.rawValue,[l,c,h,b]=s.getComponents("hsv");this.value.setRawValue(new E([l,c,h,b+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Y(_e(!0),bt(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Be=V("coltxt");function Wr(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return t.appendChild(e.reduce((s,l)=>{const c=n.createElement("option");return c.textContent=l.text,c.value=l.value,s.appendChild(c),s},n.createDocumentFragment())),t}class Xr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Be()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Be("m")),this.modeElem_=Wr(t),this.modeElem_.classList.add(Be("ms")),s.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const l=t.createElement("div");l.classList.add(Be("mm")),l.appendChild(ke(t,"dropdown")),s.appendChild(l),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(Be("w")),this.element.appendChild(c),this.textsElem_=c,this.textViews_=e.textViews,this.applyTextViews_(),_t(e.colorMode,h=>{this.modeElem_.value=h})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(t){this.textViews_=t,this.applyTextViews_()}applyTextViews_(){ee(this.textsElem_);const t=this.element.ownerDocument;this.textViews_.forEach(e=>{const s=t.createElement("div");s.classList.add(Be("c")),s.appendChild(e.element),this.textsElem_.appendChild(s)})}}function Jr(n){return H(n==="float"?2:0)}function Qr(n,t,e){const s=d(n,t)[e];return new G({min:0,max:s})}function Cs(n,t,e){return new ue(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",baseStep:_e(!1),parser:t.parser,props:P.fromObject({draggingScale:t.colorType==="float"?.01:1,formatter:Jr(t.colorType)}),value:F(0,{constraint:Qr(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}class Zr{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.parser_=e.parser,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=F(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Xr(t,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Cs(t,e,0),Cs(t,e,1),Cs(t,e,2)];return s.forEach((l,c)=>{qt({primary:this.value,secondary:l.value,forward:h=>h.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[c],backward:(h,b)=>{const C=this.colorMode.rawValue,y=h.rawValue.getComponents(C,this.colorType_);return y[c]=b.rawValue,new E(a(r(y),y[3]),C,this.colorType_)}})}),s}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ys=V("hpl");class to{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ys()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(ys("c")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(ys("m")),this.element.appendChild(l),this.markerElem_=l,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=nr(new E([e,100,100],"hsv"));const s=z(e,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class eo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new to(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=z(K(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),l=this.value.rawValue,[,c,h,b]=l.getComponents("hsv");this.value.setRawValue(new E([s,c,h,b],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Y(_e(!1),bt(t));if(e===0)return;const s=this.value.rawValue,[l,c,h,b]=s.getComponents("hsv");this.value.setRawValue(new E([l+e,c,h,b],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Y(_e(!1),bt(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ps=V("svp"),rr=64;class no{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Ps()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("canvas");s.height=rr,s.width=rr,s.classList.add(Ps("c")),this.element.appendChild(s),this.canvasElement=s;const l=t.createElement("div");l.classList.add(Ps("m")),this.element.appendChild(l),this.markerElem_=l,this.update_()}update_(){const t=jn(this.canvasElement);if(!t)return;const s=this.value.rawValue.getComponents("hsv"),l=this.canvasElement.width,c=this.canvasElement.height,h=t.getImageData(0,0,l,c),b=h.data;for(let M=0;M<c;M++)for(let T=0;T<l;T++){const It=z(T,0,l,0,100),Mn=z(M,0,c,100,0),An=wi(s[0],It,Mn),$e=(M*l+T)*4;b[$e]=An[0],b[$e+1]=An[1],b[$e+2]=An[2],b[$e+3]=255}t.putImageData(h,0,0);const C=z(s[1],0,100,0,100);this.markerElem_.style.left=`${C}%`;const y=z(s[2],0,100,100,0);this.markerElem_.style.top=`${y}%`}onValueChange_(){this.update_()}}class io{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new no(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=z(t.point.x,0,t.bounds.width,0,100),l=z(t.point.y,0,t.bounds.height,100,0),[c,,,h]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new E([c,s,l,h],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){ze(t.key)&&t.preventDefault();const[e,s,l,c]=this.value.rawValue.getComponents("hsv"),h=_e(!1),b=Y(h,bt(t)),C=Y(h,he(t));b===0&&C===0||this.value.setRawValue(new E([e,s+b,l+C,c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=_e(!1),s=Y(e,bt(t)),l=Y(e,he(t));s===0&&l===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class so{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new eo(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new io(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Yr(t,{value:this.value,viewProps:this.viewProps}),text:new ue(t,{parser:X,baseStep:.1,props:P.fromObject({draggingScale:.01,formatter:H(2)}),value:F(0,{constraint:new G({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&qt({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,l)=>{const c=s.rawValue.getComponents();return c[3]=l.rawValue,new E(c,s.rawValue.mode)}}),this.textC_=new Zr(t,{colorType:e.colorType,parser:X,value:this.value,viewProps:this.viewProps}),this.view=new bs(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Es=V("colsw");class ro{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Es()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Es("sw")),this.element.appendChild(s),this.swatchElem_=s;const l=t.createElement("button");l.classList.add(Es("b")),e.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=ws(t)}onValueChange_(){this.update_()}}class oo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new ro(t,{value:this.value,viewProps:this.viewProps})}}class ks{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=ie.create(e.expanded),this.swatchC_=new oo(t,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new De(t,{parser:e.parser,props:P.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Vn(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new cn(t,{viewProps:this.viewProps}):null;const l=new so(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});l.view.allFocusableElements.forEach(c=>{c.addEventListener("blur",this.onPopupChildBlur_),c.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=l,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(l.view.element),qt({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:c=>c.rawValue,backward:(c,h)=>h.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=Ve(t);s&&e.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!Pe(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ao(n,t){return E.isColorObject(n)?E.fromObject(n,t):E.black(t)}function lo(n){return r(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function po(n){return n.getComponents("rgb").reduce((t,e,s)=>{const l=Math.floor(s===3?e*255:e)&255;return t<<8|l},0)>>>0}function co(n){return new E([n>>16&255,n>>8&255,n&255],"rgb")}function ho(n){return new E([n>>24&255,n>>16&255,n>>8&255,z(n&255,0,255,0,1)],"rgb")}function uo(n){return typeof n!="number"?E.black():co(n)}function vo(n){return typeof n!="number"?E.black():ho(n)}function mo(n){const t=xs(n);return t?(e,s)=>{ct(e,t(s))}:null}function bo(n){const t=n?po:lo;return(e,s)=>{ct(e,t(s))}}function fo(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _o(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function go(n,t){return(e,s)=>{n?fo(e,s,t):_o(e,s,t)}}function Vs(n){var t;return!!((n==null?void 0:n.alpha)||((t=n==null?void 0:n.color)===null||t===void 0?void 0:t.alpha))}function wo(n){return n?t=>ws(t,"0x"):t=>er(t,"0x")}function xo(n){return"color"in n||"view"in n&&n.view==="color"}const Co={id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!xo(t))return null;const e=fs(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>Vs(n.params)?vo:uo,equals:E.equals,writer:n=>bo(Vs(n.params))},controller:n=>{const t=Vs(n.params),e="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ks(n.document,{colorType:"int",expanded:e!=null?e:!1,formatter:wo(t),parser:gs("int"),pickerLayout:s!=null?s:"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}};function yo(n){return E.isRgbaColorObject(n)}function Po(n){return t=>ao(t,n)}function Eo(n,t){return e=>n?sr(e,t):ir(e,t)}const ko={id:"input-color-object",type:"input",accept:(n,t)=>{if(!E.isColorObject(n))return null;const e=fs(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>Po(ge(n.params)),equals:E.equals,writer:n=>go(yo(n.initialValue),ge(n.params))},controller:n=>{var t;const e=E.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,l="picker"in n.params?n.params.picker:void 0,c=(t=ge(n.params))!==null&&t!==void 0?t:"int";return new ks(n.document,{colorType:c,expanded:s!=null?s:!1,formatter:Eo(e,c),parser:gs(c),pickerLayout:l!=null?l:"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}},Vo={id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||"view"in t&&t.view==="text")return null;const e=_s(n,ge(t));if(!e||!xs(e))return null;const l=fs(t);return l?{initialValue:n,params:l}:null},binding:{reader:n=>{var t;return Br((t=ge(n.params))!==null&&t!==void 0?t:"int")},equals:E.equals,writer:n=>{const t=_s(n.initialValue,ge(n.params));if(!t)throw k.shouldNeverHappen();const e=mo(t);if(!e)throw k.notBindable();return e}},controller:n=>{const t=_s(n.initialValue,ge(n.params));if(!t)throw k.shouldNeverHappen();const e=xs(t);if(!e)throw k.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,l="picker"in n.params?n.params.picker:void 0;return new ks(n.document,{colorType:t.type,expanded:s!=null?s:!1,formatter:e,parser:gs(t.type),pickerLayout:l!=null?l:"popup",supportsAlpha:t.alpha,value:n.value,viewProps:n.viewProps})}};class Yt{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((s,l)=>{var c,h;return(h=(c=this.components[l])===null||c===void 0?void 0:c.constrain(s))!==null&&h!==void 0?h:s});return this.asm_.fromComponents(e)}}const or=V("pndtxt");class So{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(or()),this.textViews.forEach(s=>{const l=t.createElement("div");l.classList.add(or("a")),l.appendChild(s.element),this.element.appendChild(l)})}}function Lo(n,t,e){return new ue(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",baseStep:t.axes[e].baseStep,parser:t.parser,props:t.axes[e].textProps,value:F(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class Ss{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((s,l)=>Lo(t,e,l)),this.acs_.forEach((s,l)=>{qt({primary:this.value,secondary:s.value,forward:c=>e.assembly.toComponents(c.rawValue)[l],backward:(c,h)=>{const b=e.assembly.toComponents(c.rawValue);return b[l]=h.rawValue,e.assembly.fromComponents(b)}})}),this.view=new So(t,{textViews:this.acs_.map(s=>s.view)})}}function ar(n,t){return"step"in n&&!A(n.step)?new $t(n.step,t):null}function lr(n){return!A(n.max)&&!A(n.min)?new G({max:n.max,min:n.min}):!A(n.max)||!A(n.min)?new ei({max:n.max,min:n.min}):null}function Mo(n){const t=Q(n,G);if(t)return[t.values.get("min"),t.values.get("max")];const e=Q(n,ei);return e?[e.minValue,e.maxValue]:[void 0,void 0]}function Ao(n,t){const e=[],s=ar(n,t);s&&e.push(s);const l=lr(n);l&&e.push(l);const c=kn(n.options);return c&&e.push(c),new Kt(e)}const To={id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=D,s=q(t,{format:e.optional.function,max:e.optional.number,min:e.optional.number,options:e.optional.custom(me),step:e.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>bn,constraint:n=>Ao(n.params,n.initialValue),writer:n=>ct},controller:n=>{var t;const e=n.value,s=n.constraint,l=s&&Q(s,le);if(l)return new Ut(n.document,{props:new P({options:l.values.value("options")}),value:e,viewProps:n.viewProps});const c=(t="format"in n.params?n.params.format:void 0)!==null&&t!==void 0?t:H(Oe(s,e.rawValue)),h=s&&Q(s,G);return h?new Ne(n.document,{baseStep:Rt(s),parser:X,sliderProps:new P({maxValue:h.values.value("max"),minValue:h.values.value("min")}),textProps:P.fromObject({draggingScale:zt(s,e.rawValue),formatter:c}),value:e,viewProps:n.viewProps}):new ue(n.document,{baseStep:Rt(s),parser:X,props:P.fromObject({draggingScale:zt(s,e.rawValue),formatter:c}),value:e,viewProps:n.viewProps})}};class Wt{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(A(t))return!1;const e=t.x,s=t.y;return!(typeof e!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const pr={toComponents:n=>n.getComponents(),fromComponents:n=>new Wt(...n)},je=V("p2d");class Do{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(je()),e.viewProps.bindClassModifiers(this.element),_t(e.expanded,R(this.element,je(void 0,"expanded")));const s=t.createElement("div");s.classList.add(je("h")),this.element.appendChild(s);const l=t.createElement("button");l.classList.add(je("b")),l.appendChild(ke(t,"p2dpad")),e.viewProps.bindDisabled(l),s.appendChild(l),this.buttonElement=l;const c=t.createElement("div");if(c.classList.add(je("t")),s.appendChild(c),this.textElement=c,e.pickerLayout==="inline"){const h=t.createElement("div");h.classList.add(je("p")),this.element.appendChild(h),this.pickerElement=h}else this.pickerElement=null}}const Xt=V("p2dp");class Ro{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=e.invertsY,this.maxValue_=e.maxValue,this.element=t.createElement("div"),this.element.classList.add(Xt()),e.layout==="popup"&&this.element.classList.add(Xt(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Xt("p")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const l=t.createElementNS(mt,"svg");l.classList.add(Xt("g")),this.padElement.appendChild(l),this.svgElem_=l;const c=t.createElementNS(mt,"line");c.classList.add(Xt("ax")),c.setAttributeNS(null,"x1","0"),c.setAttributeNS(null,"y1","50%"),c.setAttributeNS(null,"x2","100%"),c.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(c);const h=t.createElementNS(mt,"line");h.classList.add(Xt("ax")),h.setAttributeNS(null,"x1","50%"),h.setAttributeNS(null,"y1","0"),h.setAttributeNS(null,"x2","50%"),h.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(h);const b=t.createElementNS(mt,"line");b.classList.add(Xt("l")),b.setAttributeNS(null,"x1","50%"),b.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(b),this.lineElem_=b;const C=t.createElement("div");C.classList.add(Xt("m")),this.padElement.appendChild(C),this.markerElem_=C,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),s=this.maxValue_,l=z(t,-s,+s,0,100),c=z(e,-s,+s,0,100),h=this.invertsY_?100-c:c;this.lineElem_.setAttributeNS(null,"x2",`${l}%`),this.lineElem_.setAttributeNS(null,"y2",`${h}%`),this.markerElem_.style.left=`${l}%`,this.markerElem_.style.top=`${h}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function cr(n,t,e){return[Y(t[0],bt(n)),Y(t[1],he(n))*(e?1:-1)]}class zo{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.baseSteps_=e.baseSteps,this.maxValue_=e.maxValue,this.invertsY_=e.invertsY,this.view=new Ro(t,{invertsY:this.invertsY_,layout:e.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Dt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=this.maxValue_,l=z(t.point.x,0,t.bounds.width,-s,+s),c=z(this.invertsY_?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-s,+s);this.value.setRawValue(new Wt(l,c),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){ze(t.key)&&t.preventDefault();const[e,s]=cr(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(new Wt(this.value.rawValue.x+e,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,s]=cr(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class No{constructor(t,e){var s,l;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=ie.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new cn(t,{viewProps:this.viewProps}):null;const c=new zo(t,{baseSteps:[e.axes[0].baseStep,e.axes[1].baseStep],invertsY:e.invertsY,layout:e.pickerLayout,maxValue:e.maxValue,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(h=>{h.addEventListener("blur",this.onPopupChildBlur_),h.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.textC_=new Ss(t,{assembly:pr,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new Do(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(l=this.view.buttonElement)===null||l===void 0||l.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),qt({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:h=>h.rawValue,backward:(h,b)=>b.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=Ve(t);s&&e.contains(s)||s&&s===this.view.buttonElement&&!Pe(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}class Fe{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(A(t))return!1;const e=t.x,s=t.y,l=t.z;return!(typeof e!="number"||typeof s!="number"||typeof l!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const dr={toComponents:n=>n.getComponents(),fromComponents:n=>new Fe(...n)};function Oo(n){return Fe.isObject(n)?new Fe(n.x,n.y,n.z):new Fe}function Io(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function Bo(n,t){return new Yt({assembly:dr,components:[Ot("x"in n?n.x:void 0,t.x),Ot("y"in n?n.y:void 0,t.y),Ot("z"in n?n.z:void 0,t.z)]})}function Ls(n,t){return{baseStep:Rt(t),constraint:t,textProps:P.fromObject({draggingScale:zt(t,n),formatter:H(Oe(t,n))})}}const jo={id:"input-point3d",type:"input",accept:(n,t)=>{if(!Fe.isObject(n))return null;const e=D,s=q(t,{x:e.optional.custom(wt),y:e.optional.custom(wt),z:e.optional.custom(wt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Oo,constraint:n=>Bo(n.params,n.initialValue),equals:Fe.equals,writer:n=>Io},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Yt))throw k.shouldNeverHappen();return new Ss(n.document,{assembly:dr,axes:[Ls(t.rawValue.x,e.components[0]),Ls(t.rawValue.y,e.components[1]),Ls(t.rawValue.z,e.components[2])],parser:X,value:t,viewProps:n.viewProps})}};class Ke{constructor(t=0,e=0,s=0,l=0){this.x=t,this.y=e,this.z=s,this.w=l}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(A(t))return!1;const e=t.x,s=t.y,l=t.z,c=t.w;return!(typeof e!="number"||typeof s!="number"||typeof l!="number"||typeof c!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const hr={toComponents:n=>n.getComponents(),fromComponents:n=>new Ke(...n)};function Fo(n){return Ke.isObject(n)?new Ke(n.x,n.y,n.z,n.w):new Ke}function Ko(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function $o(n,t){return new Yt({assembly:hr,components:[Ot("x"in n?n.x:void 0,t.x),Ot("y"in n?n.y:void 0,t.y),Ot("z"in n?n.z:void 0,t.z),Ot("w"in n?n.w:void 0,t.w)]})}function Uo(n,t){return{baseStep:Rt(t),constraint:t,textProps:P.fromObject({draggingScale:zt(t,n),formatter:H(Oe(t,n))})}}const Ho={id:"input-point4d",type:"input",accept:(n,t)=>{if(!Ke.isObject(n))return null;const e=D,s=q(t,{x:e.optional.custom(wt),y:e.optional.custom(wt),z:e.optional.custom(wt),w:e.optional.custom(wt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Fo,constraint:n=>$o(n.params,n.initialValue),equals:Ke.equals,writer:n=>Ko},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Yt))throw k.shouldNeverHappen();return new Ss(n.document,{assembly:hr,axes:t.rawValue.getComponents().map((s,l)=>Uo(s,e.components[l])),parser:X,value:t,viewProps:n.viewProps})}};function qo(n){const t=[],e=kn(n.options);return e&&t.push(e),new Kt(t)}const Go={id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const s=q(t,{options:D.optional.custom(me)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ui,constraint:n=>qo(n.params),writer:n=>ct},controller:n=>{const t=n.document,e=n.value,s=n.constraint,l=s&&Q(s,le);return l?new Ut(t,{props:new P({options:l.values.value("options")}),value:e,viewProps:n.viewProps}):new De(t,{parser:c=>c,props:P.fromObject({formatter:Re}),value:e,viewProps:n.viewProps})}},Ln={monitor:{defaultInterval:200,defaultLineCount:3}},ur=V("mll");class Yo{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(ur()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("textarea");s.classList.add(ur("i")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,s.readOnly=!0,e.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,s=[];this.value.rawValue.forEach(l=>{l!==void 0&&s.push(this.formatter_(l))}),t.textContent=s.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class Ms{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Yo(t,{formatter:e.formatter,lineCount:e.lineCount,value:this.value,viewProps:this.viewProps})}}const vr=V("sgl");class Wo{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(vr()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(vr("i")),s.readOnly=!0,s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class As{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Wo(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const Xo={id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=q(t,{lineCount:D.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>si},controller:n=>{var t;return n.value.rawValue.length===1?new As(n.document,{formatter:ri,value:n.value,viewProps:n.viewProps}):new Ms(n.document,{formatter:ri,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:Ln.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Jt=V("grl");class Jo{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Jt()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=t.createElementNS(mt,"svg");s.classList.add(Jt("g")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const l=t.createElementNS(mt,"polyline");this.svgElem_.appendChild(l),this.lineElem_=l;const c=t.createElement("div");c.classList.add(Jt("t"),V("tt")()),this.element.appendChild(c),this.tooltipElem_=c,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const t=this.svgElem_.getBoundingClientRect(),e=this.value.rawValue.length-1,s=this.props_.get("minValue"),l=this.props_.get("maxValue"),c=[];this.value.rawValue.forEach((M,T)=>{if(M===void 0)return;const It=z(T,0,e,0,t.width),Mn=z(M,s,l,t.height,0);c.push([It,Mn].join(","))}),this.lineElem_.setAttributeNS(null,"points",c.join(" "));const h=this.tooltipElem_,b=this.value.rawValue[this.cursor_.rawValue];if(b===void 0){h.classList.remove(Jt("t","a"));return}const C=z(this.cursor_.rawValue,0,e,0,t.width),y=z(b,s,l,t.height,0);h.style.left=`${C}px`,h.style.top=`${y}px`,h.textContent=`${this.formatter_(b)}`,h.classList.contains(Jt("t","a"))||(h.classList.add(Jt("t","a"),Jt("t","in")),te(h),h.classList.remove(Jt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Qo{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=F(-1),this.view=new Jo(t,{cursor:this.cursor_,formatter:e.formatter,lineCount:e.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Pe(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Dt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const e=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(z(t.offsetX,0,e.width,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(z(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ts(n){return"format"in n&&!A(n.format)?n.format:H(2)}function Zo(n){var t;return n.value.rawValue.length===1?new As(n.document,{formatter:Ts(n.params),value:n.value,viewProps:n.viewProps}):new Ms(n.document,{formatter:Ts(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:Ln.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function ta(n){var t,e,s;return new Qo(n.document,{formatter:Ts(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:Ln.monitor.defaultLineCount,props:P.fromObject({maxValue:(e="max"in n.params?n.params.max:null)!==null&&e!==void 0?e:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function mr(n){return"view"in n&&n.view==="graph"}const ea={id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=D,s=q(t,{format:e.optional.function,lineCount:e.optional.number,max:e.optional.number,min:e.optional.number,view:e.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>mr(n)?64:1,reader:n=>bn},controller:n=>mr(n.params)?ta(n):Zo(n)},na={id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=D,s=q(t,{lineCount:e.optional.number,multiline:e.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ui},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ms(n.document,{formatter:Re,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:Ln.monitor.defaultLineCount,value:e,viewProps:n.viewProps}):new As(n.document,{formatter:Re,value:e,viewProps:n.viewProps})}};class ia{constructor(t){this.onValueChange_=this.onValueChange_.bind(this),this.reader=t.reader,this.writer=t.writer,this.emitter=new O,this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.target=t.target,this.read()}read(){const t=this.target.read();t!==void 0&&(this.value.rawValue=this.reader(t))}write_(t){this.writer(this.target,t)}onValueChange_(t){this.write_(t.rawValue),this.emitter.emit("change",{options:t.options,rawValue:t.rawValue,sender:this})}}function sa(n,t){const e=n.accept(t.target.read(),t.params);if(A(e))return null;const s=D,l={target:t.target,initialValue:e.initialValue,params:e.params},c=n.binding.reader(l),h=n.binding.constraint?n.binding.constraint(l):void 0,b=F(c(e.initialValue),{constraint:h,equals:n.binding.equals}),C=new ia({reader:c,target:t.target,value:b,writer:n.binding.writer(l)}),y=s.optional.boolean(t.params.disabled).value,M=s.optional.boolean(t.params.hidden).value,T=n.controller({constraint:h,document:t.document,initialValue:e.initialValue,params:e.params,value:C.value,viewProps:vt.create({disabled:y,hidden:M})}),It=s.optional.string(t.params.label).value;return new st(t.document,{binding:C,blade:ne(),props:P.fromObject({label:It!=null?It:t.target.key}),valueController:T})}class ra{constructor(t){this.onTick_=this.onTick_.bind(this),this.reader_=t.reader,this.target=t.target,this.emitter=new O,this.value=t.value,this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const t=this.target.read();if(t===void 0)return;const e=this.value.rawValue,s=this.reader_(t);this.value.rawValue=Ht(e,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(t){this.read()}}function oa(n,t){return t===0?new Ae:new U(n,t!=null?t:Ln.monitor.defaultInterval)}function aa(n,t){var e,s,l;const c=D,h=n.accept(t.target.read(),t.params);if(A(h))return null;const b={target:t.target,initialValue:h.initialValue,params:h.params},C=n.binding.reader(b),y=(s=(e=c.optional.number(t.params.bufferSize).value)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(h.params))!==null&&s!==void 0?s:1,M=c.optional.number(t.params.interval).value,T=new ra({reader:C,target:t.target,ticker:oa(t.document,M),value:vi(y)}),It=c.optional.boolean(t.params.disabled).value,Mn=c.optional.boolean(t.params.hidden).value,An=n.controller({document:t.document,params:h.params,value:T.value,viewProps:vt.create({disabled:It,hidden:Mn})}),$e=(l=c.optional.string(t.params.label).value)!==null&&l!==void 0?l:t.target.key;return new yt(t.document,{binding:T,blade:ne(),props:P.fromObject({label:$e}),valueController:An})}class la{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t){t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput(t,e,s){const l=e.read();if(A(l))throw new k({context:{key:e.key},type:"nomatchingcontroller"});const c=this.pluginsMap_.inputs.reduce((h,b)=>h!=null?h:sa(b,{document:t,target:e,params:s}),null);if(c)return c;throw new k({context:{key:e.key},type:"nomatchingcontroller"})}createMonitor(t,e,s){const l=this.pluginsMap_.monitors.reduce((c,h)=>c!=null?c:aa(h,{document:t,params:s,target:e}),null);if(l)return l;throw new k({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const s=this.pluginsMap_.blades.reduce((l,c)=>l!=null?l:ln(c,{document:t,params:e}),null);if(!s)throw new k({type:"nomatchingview",context:{params:e}});return s}createBladeApi(t){if(t instanceof st)return new Ze(t);if(t instanceof yt)return new Le(t);if(t instanceof oe)return new Me(t,this);const e=this.pluginsMap_.blades.reduce((s,l)=>s!=null?s:l.api({controller:t,pool:this}),null);if(!e)throw k.shouldNeverHappen();return e}}function pa(){const n=new la;return[ma,jo,Ho,Go,To,Vo,ko,Co,Ie,Xo,na,ea,Hn,$i,Hi,an].forEach(t=>{n.register(t)}),n}function ca(n){return Wt.isObject(n)?new Wt(n.x,n.y):new Wt}function da(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function Ot(n,t){if(!n)return;const e=[],s=ar(n,t);s&&e.push(s);const l=lr(n);return l&&e.push(l),new Kt(e)}function ha(n,t){return new Yt({assembly:pr,components:[Ot("x"in n?n.x:void 0,t.x),Ot("y"in n?n.y:void 0,t.y)]})}function br(n,t){const[e,s]=n?Mo(n):[];if(!A(e)||!A(s))return Math.max(Math.abs(e!=null?e:0),Math.abs(s!=null?s:0));const l=Rt(n);return Math.max(Math.abs(l)*10,Math.abs(t)*10)}function ua(n,t){const e=t instanceof Yt?t.components[0]:void 0,s=t instanceof Yt?t.components[1]:void 0,l=br(e,n.x),c=br(s,n.y);return Math.max(l,c)}function fr(n,t){return{baseStep:Rt(t),constraint:t,textProps:P.fromObject({draggingScale:zt(t,n),formatter:H(Oe(t,n))})}}function va(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const ma={id:"input-point2d",type:"input",accept:(n,t)=>{if(!Wt.isObject(n))return null;const e=D,s=q(t,{expanded:e.optional.boolean,picker:e.optional.custom(En),x:e.optional.custom(wt),y:e.optional.object({inverted:e.optional.boolean,max:e.optional.number,min:e.optional.number,step:e.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ca,constraint:n=>ha(n.params,n.initialValue),equals:Wt.equals,writer:n=>da},controller:n=>{const t=n.document,e=n.value,s=n.constraint;if(!(s instanceof Yt))throw k.shouldNeverHappen();const l="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new No(t,{axes:[fr(e.rawValue.x,s.components[0]),fr(e.rawValue.y,s.components[1])],expanded:l!=null?l:!1,invertsY:va(n.params),maxValue:ua(e.rawValue,s),parser:X,pickerLayout:c!=null?c:"popup",value:e,viewProps:n.viewProps})}};class _r extends x{constructor(t){super(t),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new $(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get options(){return this.controller_.valueController.props.get("options")}set options(t){this.controller_.valueController.props.set("options",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class gr extends x{constructor(t){super(t),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new $(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(t){this.controller_.valueController.sliderController.props.set("maxValue",t)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(t){this.controller_.valueController.sliderController.props.set("minValue",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class wr extends x{constructor(t){super(t),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new $(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(t){this.controller_.valueController.props.set("formatter",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}const ba=function(){return{id:"list",type:"blade",accept(n){const t=D,e=q(n,{options:t.required.custom(me),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string});return e?{params:e}:null},controller(n){const t=new le(fi(n.params.options)),e=F(n.params.value,{constraint:t}),s=new Ut(n.document,{props:new P({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:P.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof Ut)?null:new _r(n.controller)}}}();function fa(n){return n.reduce((t,e)=>Object.assign(t,{[e.presetKey]:e.read()}),{})}function _a(n,t){n.forEach(e=>{const s=t[e.presetKey];s!==void 0&&e.write(s)})}class ga extends tn{constructor(t,e){super(t,e)}get element(){return this.controller_.view.element}importPreset(t){const e=this.controller_.rackController.rack.find(st).map(s=>s.binding.target);_a(e,t),this.refresh()}exportPreset(){const t=this.controller_.rackController.rack.find(st).map(e=>e.binding.target);return fa(t)}refresh(){this.controller_.rackController.rack.find(st).forEach(t=>{t.binding.read()}),this.controller_.rackController.rack.find(yt).forEach(t=>{t.binding.read()})}}class wa extends rn{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const xa={id:"slider",type:"blade",accept(n){const t=D,e=q(n,{max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number});return e?{params:e}:null},controller(n){var t,e;const s=(t=n.params.value)!==null&&t!==void 0?t:0,l=new G({max:n.params.max,min:n.params.min}),c=new Ne(n.document,{baseStep:1,parser:X,sliderProps:new P({maxValue:l.values.value("max"),minValue:l.values.value("min")}),textProps:P.fromObject({draggingScale:zt(void 0,s),formatter:(e=n.params.format)!==null&&e!==void 0?e:fn}),value:F(s,{constraint:l}),viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:P.fromObject({label:n.params.label}),valueController:c})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof Ne)?null:new gr(n.controller)}},Ca=function(){return{id:"text",type:"blade",accept(n){const t=D,e=q(n,{parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string});return e?{params:e}:null},controller(n){var t;const e=new De(n.document,{parser:n.params.parse,props:P.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:s=>String(s)}),value:F(n.params.value),viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:P.fromObject({label:n.params.label}),valueController:e})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof De)?null:new wr(n.controller)}}}();function ya(n){const t=n.createElement("div");return t.classList.add(V("dfw")()),n.body&&n.body.appendChild(t),t}function xr(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const s=n.createElement("style");s.dataset.tpStyle=t,s.textContent=e,n.head.appendChild(s)}class Pa extends ga{constructor(t){var e,s;const l=t!=null?t:{},c=(e=l.document)!==null&&e!==void 0?e:Ai(),h=pa(),b=new wa(c,{expanded:l.expanded,blade:ne(),props:P.fromObject({title:l.title}),viewProps:vt.create()});super(b,h),this.pool_=h,this.containerElem_=(s=l.container)!==null&&s!==void 0?s:ya(c),this.containerElem_.appendChild(this.element),this.doc_=c,this.usesDefaultWrapper_=!l.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw k.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw k.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(t){t.css&&xr(this.document,`plugin-${t.id}`,t.css)}setUpDefaultPlugins_(){xr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230deg, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230deg, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230deg, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230deg, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230deg, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(t=>{this.embedPluginStyle_(t)}),this.registerPlugin({plugins:[xa,ba,an,Ca]})}}const Ea=new g("3.1.4");m.BladeApi=x,m.ButtonApi=Rn,m.FolderApi=tn,m.InputBindingApi=Ze,m.ListApi=_r,m.MonitorBindingApi=Le,m.Pane=Pa,m.SeparatorApi=Yn,m.SliderApi=gr,m.TabApi=Qn,m.TabPageApi=Jn,m.TextApi=wr,m.TpChangeEvent=$,m.VERSION=Ea,Object.defineProperty(m,"__esModule",{value:!0})})})(zs,zs.exports);const Vr=document.querySelector(".container"),Z=document.querySelector(".fireworks_container"),I={hue:{min:0,max:345},delay:{min:30,max:60},rocketsPoint:{min:50,max:50},opacity:.5,acceleration:1.02,friction:.97,gravity:1.5,particles:60,traceLength:3,traceSpeed:10,explosion:5,intensity:30,flickering:50,lineStyle:"round",lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},brightness:{min:50,max:80},decay:{min:.015,max:.03},boundaries:{x:50,y:50,width:Z.clientWidth,height:Z.clientHeight},sound:{enabled:!1,files:[location.href+"sounds/explosion0.mp3",location.href+"sounds/explosion1.mp3",location.href+"sounds/explosion2.mp3"],volume:{min:2,max:4}},mouse:{click:!0,move:!1,max:1}},Ue={color:"#000000",image:"",size:"cover",position:"50% 50%",repeat:"no-repeat",container:!1,fps:!1},Tn=new ja(Z,I);window.fireworks=Tn;Tn.start();const Sr={get traces(){return Tn.traces.length},get particles(){return Tn.explosions.length}},Lr=window.innerWidth>1e3,B=new zs.exports.Pane({document,expanded:Lr,title:document.title});B.registerPlugin(Aa);B.on("fold",({expanded:w})=>{Lr||(Vr.style.display=w?"none":"block")});B.addInput(I,"hue",{min:0,max:360,step:1});B.addInput(I,"acceleration",{min:1,max:2});B.addInput(I,"brightness",{min:1,max:100,step:1});B.addInput(I,"decay",{min:.001,max:.05});B.addInput(I,"delay",{min:10,max:100});B.addInput(I,"explosion",{min:1,max:10,step:1});B.addInput(I,"flickering",{min:0,max:100});B.addInput(I,"intensity",{min:1,max:60});B.addInput(I,"friction",{min:.5,max:3});B.addInput(I,"gravity",{min:0,max:10});B.addInput(I,"opacity",{min:0,max:1,step:.1});B.addInput(I,"particles",{step:1,min:1,max:200});B.addInput(I,"traceLength",{min:1,max:10});B.addInput(I,"traceSpeed",{min:1,max:100,step:1});B.addInput(I,"rocketsPoint",{min:0,max:100,step:1});B.addInput(I.lineWidth,"explosion",{label:"lineWidth (explosion)",min:0,max:10});B.addInput(I.lineWidth,"trace",{label:"lineWidth (trace)",min:0,max:10});B.addInput(I,"lineStyle",{options:{round:"round",square:"square"}});const Ns=B.addFolder({title:"mouse",expanded:!1});Ns.addInput(I.mouse,"click",{label:"mouse click"});Ns.addInput(I.mouse,"max",{label:"maximum rockets",min:1,max:15,step:1});Ns.addInput(I.mouse,"move",{label:"follow mouse"});const Mr=B.addFolder({title:"sound",expanded:!1});Mr.addInput(I.sound,"enabled");Mr.addInput(I.sound,"volume",{min:0,max:100,step:1});B.on("change",()=>{Tn.updateOptions(I)});const He=B.addFolder({title:"background",expanded:!1});He.addInput(Ue,"container").on("change",({value:w})=>{Vr.style.display=w?"none":"block"});He.addInput(Ue,"color").on("change",({value:w})=>{Z.style.backgroundColor=w});He.addInput(Ue,"image").on("change",({value:w})=>{Z.style.backgroundImage=`url(${w})`});He.addInput(Ue,"size").on("change",({value:w})=>{Z.style.backgroundSize=w});He.addInput(Ue,"position").on("change",({value:w})=>{Z.style.backgroundPosition=w});He.addInput(Ue,"repeat").on("change",({value:w})=>{Z.style.backgroundRepeat=w});const Os=B.addFolder({title:"monitors",expanded:!1}),Pr=Os.addBlade({view:"fpsgraph",label:"fps"});Os.addMonitor(Sr,"particles",{view:"graph",label:"particles",min:0,max:5e3});Os.addMonitor(Sr,"traces",{view:"graph",label:"traces",min:0,max:50});const Ar=()=>{Pr.begin(),Pr.end(),requestAnimationFrame(Ar)};requestAnimationFrame(Ar);document.addEventListener("keydown",w=>{w.code==="F11"&&(w.preventDefault(),Z.requestFullscreen?Z.requestFullscreen():Z.webkitRequestFullscreen?Z.webkitRequestFullscreen():Z.mozRequestFullScreen?Z.mozRequestFullScreen():Z.msRequestFullscreen&&Z.msRequestFullscreen())});