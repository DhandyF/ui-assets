import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, inject as d, nextTick as f, normalizeClass as p, normalizeStyle as m, onMounted as h, onUnmounted as g, openBlock as _, provide as v, ref as y, renderList as b, renderSlot as x, toDisplayString as S, unref as C, vModelText as w, watch as T, withCtx as E, withDirectives as D, withModifiers as O } from "vue";
//#region src/components/ui/Button.vue
var k = ["disabled"], A = {
	key: 0,
	class: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, j = {
	__name: "Button",
	props: {
		variant: {
			type: String,
			default: "primary",
			validator: (e) => [
				"primary",
				"secondary",
				"danger",
				"outline",
				"ghost"
			].includes(e)
		},
		size: {
			type: String,
			default: "md",
			validator: (e) => [
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			].includes(e)
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		block: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(e) {
		let t = e, n = {
			xs: "px-2.5 py-1 text-xs",
			sm: "px-3 py-1.5 text-sm",
			md: "px-4 py-2 text-sm",
			lg: "px-5 py-2.5 text-base",
			xl: "px-6 py-3 text-base"
		}, r = {
			primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm",
			secondary: "bg-surface-100 text-surface-800 hover:bg-surface-200 active:bg-surface-300 shadow-sm",
			danger: "bg-danger text-white hover:bg-red-700 active:bg-red-800 shadow-sm",
			outline: "border border-surface-300 text-surface-700 hover:bg-surface-50 active:bg-surface-100",
			ghost: "text-surface-700 hover:bg-surface-100 active:bg-surface-200"
		}, a = i(() => [
			"inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg cursor-pointer",
			"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
			"disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
			n[t.size],
			r[t.variant],
			t.block ? "w-full" : ""
		]);
		return (t, n) => (_(), s("button", {
			class: p(a.value),
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.loading ? (_(), s("span", A)) : o("", !0), x(t.$slots, "default")], 10, k));
	}
}, M = {
	key: 0,
	class: "border-b border-surface-200 px-6 py-4"
}, N = { class: "px-6 py-4" }, P = {
	key: 1,
	class: "border-t border-surface-200 px-6 py-4"
}, F = {
	__name: "Card",
	props: { variant: {
		type: String,
		default: "default",
		validator: (e) => [
			"default",
			"bordered",
			"elevated",
			"interactive"
		].includes(e)
	} },
	setup(e) {
		let t = e, n = {
			default: "bg-white",
			bordered: "bg-white border border-surface-200",
			elevated: "bg-white shadow-md",
			interactive: "bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-surface-200"
		}, r = i(() => ["rounded-xl overflow-hidden", n[t.variant]]);
		return (e, t) => (_(), s("div", { class: p(r.value) }, [
			e.$slots.header ? (_(), s("div", M, [x(e.$slots, "header")])) : o("", !0),
			c("div", N, [x(e.$slots, "default")]),
			e.$slots.footer ? (_(), s("div", P, [x(e.$slots, "footer")])) : o("", !0)
		], 2));
	}
}, I = { class: "overflow-x-auto" }, L = { class: "w-full text-left text-sm" }, R = { class: "border-b border-surface-200 bg-surface-50" }, ee = {
	key: 0,
	class: "w-10 px-4 py-3"
}, z = ["onClick"], B = { class: "inline-flex items-center gap-1.5" }, V = {
	key: 0,
	class: "text-surface-400"
}, H = {
	key: 0,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, U = {
	key: 1,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, W = {
	key: 2,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, G = ["onClick"], K = {
	key: 0,
	class: "w-10 px-4 py-3"
}, q = { key: 0 }, te = ["colspan"], ne = {
	key: 0,
	class: "px-6 py-4 bg-surface-50/60 border-b border-surface-100"
}, J = { key: 0 }, Y = { class: "bg-surface-50" }, X = {
	key: 0,
	class: "px-4 py-3"
}, re = ["colspan"], ie = { class: "flex items-center justify-between" }, ae = { class: "text-sm text-surface-500" }, oe = { class: "flex items-center gap-1" }, se = ["disabled"], ce = {
	key: 0,
	class: "inline-flex items-center justify-center w-8 h-8 text-sm text-surface-400"
}, le = ["onClick"], ue = ["disabled"], de = {
	__name: "Table",
	props: {
		columns: {
			type: Array,
			required: !0
		},
		rows: {
			type: Array,
			default: () => []
		},
		expandable: {
			type: Boolean,
			default: !1
		},
		perPage: {
			type: Number,
			default: 10
		}
	},
	setup(t) {
		let r = t, a = y(null), d = y("asc"), f = y(1), m = y(/* @__PURE__ */ new Set()), h = i(() => a.value ? [...r.rows].sort((e, t) => {
			let n = e[a.value], r = t[a.value], i = n < r ? -1 : +(n > r);
			return d.value === "asc" ? i : -i;
		}) : r.rows), g = i(() => Math.max(1, Math.ceil(h.value.length / r.perPage))), v = i(() => {
			let e = (f.value - 1) * r.perPage;
			return h.value.slice(e, e + r.perPage);
		}), C = i(() => {
			let e = g.value, t = f.value;
			if (e <= 7) return Array.from({ length: e }, (e, t) => t + 1);
			let n = [];
			n.push(1), t > 3 && n.push("...");
			for (let r = Math.max(2, t - 1); r <= Math.min(e - 1, t + 1); r++) n.push(r);
			return t < e - 2 && n.push("..."), n.push(e), n;
		});
		function w(e, t) {
			return e.id ?? t + (f.value - 1) * r.perPage;
		}
		function D(e) {
			a.value === e ? d.value = d.value === "asc" ? "desc" : "asc" : (a.value = e, d.value = "asc");
		}
		function O(e) {
			let t = new Set(m.value);
			t.has(e) ? t.delete(e) : t.add(e), m.value = t;
		}
		return T(g, (e) => {
			f.value > e && (f.value = e);
		}), T(() => r.rows, () => {
			f.value = 1, m.value = /* @__PURE__ */ new Set();
		}), (r, i) => (_(), s("div", I, [c("table", L, [
			c("thead", null, [c("tr", R, [t.expandable ? (_(), s("th", ee)) : o("", !0), (_(!0), s(e, null, b(t.columns, (e) => (_(), s("th", {
				key: e.key,
				class: p(["px-4 py-3 font-semibold text-surface-600 whitespace-nowrap", { "cursor-pointer select-none hover:text-surface-900": e.sortable }]),
				onClick: (t) => e.sortable && D(e.key)
			}, [c("span", B, [l(S(e.label) + " ", 1), e.sortable ? (_(), s("span", V, [a.value === e.key && d.value === "asc" ? (_(), s("svg", H, [...i[2] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5 15l7-7 7 7"
			}, null, -1)]])) : a.value === e.key && d.value === "desc" ? (_(), s("svg", U, [...i[3] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 9l-7 7-7-7"
			}, null, -1)]])) : (_(), s("svg", W, [...i[4] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
			}, null, -1)]]))])) : o("", !0)])], 10, z))), 128))])]),
			(_(!0), s(e, null, b(v.value, (a, d) => (_(), s(e, { key: d }, [c("tr", {
				class: p(["border-b border-surface-100 hover:bg-surface-50/50 transition-colors", { "cursor-pointer": t.expandable }]),
				onClick: (e) => t.expandable && O(w(a, d))
			}, [t.expandable ? (_(), s("td", K, [(_(), s("svg", {
				class: p(["w-4 h-4 text-surface-400 transition-transform duration-200", { "rotate-90": m.value.has(w(a, d)) }]),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...i[5] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9 5l7 7-7 7"
			}, null, -1)]], 2))])) : o("", !0), (_(!0), s(e, null, b(t.columns, (e) => (_(), s("td", {
				key: e.key,
				class: "px-4 py-3 text-surface-700"
			}, [x(r.$slots, e.key, {
				row: a,
				value: a[e.key]
			}, () => [l(S(a[e.key]), 1)])]))), 128))], 10, G), t.expandable && m.value.has(w(a, d)) ? (_(), s("tr", q, [c("td", {
				colspan: t.columns.length + 1,
				class: "p-0"
			}, [u(n, { name: "expand" }, {
				default: E(() => [m.value.has(w(a, d)) ? (_(), s("div", ne, [x(r.$slots, "expanded", {
					row: a,
					index: d
				})])) : o("", !0)]),
				_: 2
			}, 1024)], 8, te)])) : o("", !0)], 64))), 128)),
			r.$slots.footer || g.value > 1 ? (_(), s("tfoot", J, [c("tr", Y, [t.expandable ? (_(), s("td", X)) : o("", !0), c("td", {
				colspan: t.columns.length,
				class: "px-4 py-3"
			}, [x(r.$slots, "footer", {}, () => [c("div", ie, [c("span", ae, S((f.value - 1) * t.perPage + 1) + "-" + S(f.value === g.value ? h.value.length : f.value * t.perPage) + " of " + S(h.value.length), 1), c("div", oe, [
				c("button", {
					class: p(["inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors cursor-pointer", f.value === 1 ? "text-surface-300 cursor-not-allowed" : "text-surface-600 hover:bg-surface-100"]),
					disabled: f.value === 1,
					onClick: i[0] ||= (e) => f.value--
				}, [...i[6] ||= [c("svg", {
					class: "w-4 h-4",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [c("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M15 19l-7-7 7-7"
				})], -1)]], 10, se),
				(_(!0), s(e, null, b(C.value, (t) => (_(), s(e, { key: t }, [t === "..." ? (_(), s("button", ce, "…")) : (_(), s("button", {
					key: 1,
					class: p(["inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer", t === f.value ? "bg-primary-600 text-white" : "text-surface-600 hover:bg-surface-100"]),
					onClick: (e) => f.value = t
				}, S(t), 11, le))], 64))), 128)),
				c("button", {
					class: p(["inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors cursor-pointer", f.value === g.value ? "text-surface-300 cursor-not-allowed" : "text-surface-600 hover:bg-surface-100"]),
					disabled: f.value === g.value,
					onClick: i[1] ||= (e) => f.value++
				}, [...i[7] ||= [c("svg", {
					class: "w-4 h-4",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [c("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M9 5l7 7-7 7"
				})], -1)]], 10, ue)
			])])])], 8, re)])])) : o("", !0)
		])]));
	}
}, Z = y([]), fe = 0;
function Q({ message: e, title: t, type: n = "info", duration: r = 4e3 }) {
	let i = fe++;
	return Z.value.push({
		id: i,
		message: e,
		title: t,
		type: n
	}), r > 0 && setTimeout(() => $(i), r), i;
}
function $(e) {
	let t = Z.value.findIndex((t) => t.id === e);
	t !== -1 && Z.value.splice(t, 1);
}
function pe() {
	Z.value = [];
}
function me() {
	return {
		toasts: Z,
		success: (e, t = {}) => Q({
			type: "success",
			message: e,
			...t
		}),
		error: (e, t = {}) => Q({
			type: "error",
			message: e,
			...t
		}),
		warning: (e, t = {}) => Q({
			type: "warning",
			message: e,
			...t
		}),
		info: (e, t = {}) => Q({
			type: "info",
			message: e,
			...t
		}),
		remove: $,
		clear: pe
	};
}
//#endregion
//#region src/components/ui/Toast.vue
var he = { class: "mt-0.5 shrink-0" }, ge = { class: "flex-1 min-w-0" }, _e = {
	key: 0,
	class: "font-semibold text-sm"
}, ve = { class: "text-sm opacity-80" }, ye = ["onClick"], be = {
	__name: "Toast",
	setup(n) {
		let i = {
			success: "✓",
			error: "✕",
			warning: "⚠",
			info: "ℹ"
		};
		function l(e) {
			let t = {
				success: "bg-green-50 border-green-200 text-green-800",
				error: "bg-red-50 border-red-200 text-red-800",
				warning: "bg-amber-50 border-amber-200 text-amber-800",
				info: "bg-blue-50 border-blue-200 text-blue-800"
			};
			return t[e] || t.info;
		}
		return (n, d) => (_(), a(t, { to: "body" }, [u(r, {
			tag: "div",
			name: "toast",
			class: "fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none"
		}, {
			default: E(() => [(_(!0), s(e, null, b(C(Z), (e) => (_(), s("div", {
				key: e.id,
				class: p([l(e.type), "pointer-events-auto min-w-[320px] max-w-md rounded-xl shadow-lg border backdrop-blur-sm p-4 flex items-start gap-3"])
			}, [
				c("span", he, S(i[e.type]), 1),
				c("div", ge, [e.title ? (_(), s("p", _e, S(e.title), 1)) : o("", !0), c("p", ve, S(e.message), 1)]),
				c("button", {
					class: "shrink-0 cursor-pointer text-current opacity-50 hover:opacity-100 transition-opacity",
					onClick: (t) => C($)(e.id)
				}, [...d[0] ||= [c("svg", {
					class: "w-4 h-4",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [c("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M6 18L18 6M6 6l12 12"
				})], -1)]], 8, ye)
			], 2))), 128))]),
			_: 1
		})]));
	}
}, xe = {
	key: 0,
	class: "w-1.5 h-1.5 rounded-full bg-current"
}, Se = {
	__name: "Badge",
	props: {
		variant: {
			type: String,
			default: "default",
			validator: (e) => [
				"default",
				"primary",
				"success",
				"warning",
				"danger",
				"info"
			].includes(e)
		},
		size: {
			type: String,
			default: "md",
			validator: (e) => [
				"sm",
				"md",
				"lg"
			].includes(e)
		},
		dot: {
			type: Boolean,
			default: !1
		},
		pill: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = {
			sm: "px-1.5 py-0.5 text-xs",
			md: "px-2.5 py-0.5 text-xs",
			lg: "px-3 py-1 text-sm"
		}, r = {
			default: "bg-surface-100 text-surface-700",
			primary: "bg-primary-100 text-primary-700",
			success: "bg-green-100 text-green-700",
			warning: "bg-amber-100 text-amber-700",
			danger: "bg-red-100 text-red-700",
			info: "bg-blue-100 text-blue-700"
		}, a = i(() => [
			"inline-flex items-center gap-1.5 font-medium",
			n[t.size],
			r[t.variant],
			t.pill ? "rounded-full" : "rounded-md"
		]);
		return (t, n) => (_(), s("span", { class: p(a.value) }, [e.dot ? (_(), s("span", xe)) : o("", !0), x(t.$slots, "default")], 2));
	}
}, Ce = { class: "space-y-1" }, we = ["for"], Te = {
	key: 0,
	class: "text-danger"
}, Ee = { class: "relative" }, De = [
	"id",
	"value",
	"placeholder",
	"disabled",
	"rows"
], Oe = [
	"id",
	"type",
	"value",
	"placeholder",
	"disabled"
], ke = {
	key: 2,
	class: "absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
}, Ae = {
	key: 1,
	class: "text-sm text-danger"
}, je = {
	key: 2,
	class: "text-xs text-surface-500"
}, Me = {
	__name: "Input",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text"
		},
		error: {
			type: String,
			default: ""
		},
		hint: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		required: {
			type: Boolean,
			default: !1
		},
		rows: {
			type: Number,
			default: 3
		},
		id: {
			type: String,
			default: () => `input-${Math.random().toString(36).slice(2, 9)}`
		}
	},
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = i(() => [
			"w-full rounded-lg border bg-white px-3 py-2 text-sm transition-all duration-150",
			"placeholder:text-surface-400",
			"focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500",
			"disabled:bg-surface-50 disabled:text-surface-400 disabled:cursor-not-allowed",
			t.error ? "border-danger text-danger focus:ring-danger/30 focus:border-danger" : "border-surface-300 text-surface-800",
			t.$slots?.icon ? "pl-10" : ""
		]);
		return (t, r) => (_(), s("div", Ce, [
			e.label ? (_(), s("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-surface-700"
			}, [l(S(e.label) + " ", 1), e.required ? (_(), s("span", Te, "*")) : o("", !0)], 8, we)) : o("", !0),
			c("div", Ee, [e.type === "textarea" ? (_(), s("textarea", {
				key: 0,
				id: e.id,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				rows: e.rows,
				class: p(n.value),
				onInput: r[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, De)) : (_(), s("input", {
				key: 1,
				id: e.id,
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: p(n.value),
				onInput: r[1] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, Oe)), t.$slots.icon ? (_(), s("span", ke, [x(t.$slots, "icon")])) : o("", !0)]),
			e.error ? (_(), s("p", Ae, S(e.error), 1)) : e.hint ? (_(), s("p", je, S(e.hint), 1)) : o("", !0)
		]));
	}
}, Ne = { class: "text-lg font-semibold text-surface-900" }, Pe = {
	__name: "Modal",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		title: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "md",
			validator: (e) => [
				"sm",
				"md",
				"lg",
				"full"
			].includes(e)
		},
		closable: {
			type: Boolean,
			default: !0
		},
		closeOnOverlay: {
			type: Boolean,
			default: !0
		},
		contentClass: {
			type: String,
			default: ""
		},
		overlayClass: {
			type: String,
			default: ""
		},
		headerClass: {
			type: String,
			default: ""
		},
		bodyClass: {
			type: String,
			default: ""
		},
		footerClass: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue", "close"],
	setup(e, { emit: r }) {
		let i = e, l = r, d = {
			sm: "max-w-sm",
			md: "max-w-lg",
			lg: "max-w-2xl",
			full: "max-w-[90vw]"
		};
		function f() {
			l("update:modelValue", !1), l("close");
		}
		function m() {
			i.closeOnOverlay && f();
		}
		function v(e) {
			e.key === "Escape" && i.modelValue && i.closable && f();
		}
		return h(() => document.addEventListener("keydown", v)), g(() => document.removeEventListener("keydown", v)), (r, i) => (_(), a(t, { to: "body" }, [u(n, { name: "modal-overlay" }, {
			default: E(() => [e.modelValue ? (_(), s("div", {
				key: 0,
				class: p(["fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4", e.overlayClass]),
				onClick: O(m, ["self"])
			}, [u(n, { name: "modal-content" }, {
				default: E(() => [e.modelValue ? (_(), s("div", {
					key: 0,
					class: p([[d[e.size], e.contentClass], "bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden animate-in"])
				}, [
					r.$slots.header || e.title ? (_(), s("div", {
						key: 0,
						class: p(["flex items-center justify-between px-6 py-4 border-b border-surface-200", e.headerClass])
					}, [x(r.$slots, "header", {}, () => [c("h2", Ne, S(e.title), 1)]), e.closable ? (_(), s("button", {
						key: 0,
						class: "p-1.5 rounded-lg cursor-pointer text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors",
						onClick: f
					}, [...i[0] ||= [c("svg", {
						class: "w-5 h-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M6 18L18 6M6 6l12 12"
					})], -1)]])) : o("", !0)], 2)) : o("", !0),
					c("div", { class: p(["px-6 py-4 overflow-y-auto flex-1", e.bodyClass]) }, [x(r.$slots, "default")], 2),
					r.$slots.footer ? (_(), s("div", {
						key: 1,
						class: p(["px-6 py-4 border-t border-surface-200 bg-surface-50", e.footerClass])
					}, [x(r.$slots, "footer")], 2)) : o("", !0)
				], 2)) : o("", !0)]),
				_: 3
			})], 2)) : o("", !0)]),
			_: 3
		})]));
	}
}, Fe = { class: "mt-0.5 shrink-0" }, Ie = { class: "flex-1 min-w-0" }, Le = {
	key: 0,
	class: "font-semibold text-sm"
}, Re = { class: "text-sm opacity-90" }, ze = {
	__name: "Alert",
	props: {
		variant: {
			type: String,
			default: "info",
			validator: (e) => [
				"info",
				"success",
				"warning",
				"danger"
			].includes(e)
		},
		title: {
			type: String,
			default: ""
		},
		closable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close"],
	setup(e) {
		let t = e, n = {
			info: "ℹ",
			success: "✓",
			warning: "⚠",
			danger: "✕"
		}, r = {
			info: "bg-blue-50 border-blue-200 text-blue-800",
			success: "bg-green-50 border-green-200 text-green-800",
			warning: "bg-amber-50 border-amber-200 text-amber-800",
			danger: "bg-red-50 border-red-200 text-red-800"
		}, a = i(() => ["flex items-start gap-3 p-4 rounded-xl border", r[t.variant]]);
		return (t, r) => (_(), s("div", {
			class: p(a.value),
			role: "alert"
		}, [
			c("span", Fe, S(n[e.variant]), 1),
			c("div", Ie, [e.title ? (_(), s("p", Le, S(e.title), 1)) : o("", !0), c("p", Re, [x(t.$slots, "default")])]),
			e.closable ? (_(), s("button", {
				key: 0,
				class: "shrink-0 p-1 rounded-md cursor-pointer opacity-60 hover:opacity-100 transition-opacity",
				onClick: r[0] ||= (e) => t.$emit("close")
			}, [...r[1] ||= [c("svg", {
				class: "w-4 h-4",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])) : o("", !0)
		], 2));
	}
}, Be = { class: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-surface-300 rounded-lg hover:bg-surface-50 transition-colors" }, Ve = {
	__name: "Dropdown",
	props: {
		label: {
			type: String,
			default: "Options"
		},
		placement: {
			type: String,
			default: "bottom-start",
			validator: (e) => [
				"bottom-start",
				"bottom-end",
				"top-start",
				"top-end"
			].includes(e)
		},
		width: {
			type: String,
			default: "auto"
		}
	},
	setup(e) {
		let t = e, r = y(!1), i = y(null), a = {
			"bottom-start": "left-0",
			"bottom-end": "right-0",
			"top-start": "left-0 bottom-full",
			"top-end": "right-0 bottom-full"
		}, d = t.width === "full" ? "w-full" : "";
		function f() {
			r.value = !r.value;
		}
		function m() {
			r.value = !1;
		}
		v("closeDropdown", m);
		function b(e) {
			i.value && !i.value.contains(e.target) && m();
		}
		return h(() => document.addEventListener("click", b)), g(() => document.removeEventListener("click", b)), (t, m) => (_(), s("div", {
			class: "relative inline-block",
			ref_key: "dropdownRef",
			ref: i
		}, [c("div", {
			class: "cursor-pointer",
			onClick: f
		}, [x(t.$slots, "trigger", {}, () => [c("button", Be, [l(S(e.label) + " ", 1), m[0] ||= c("svg", {
			class: "w-4 h-4 text-surface-500",
			fill: "none",
			viewBox: "0 0 24 24",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [c("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M19 9l-7 7-7-7"
		})], -1)])])]), u(n, { name: "dropdown" }, {
			default: E(() => [r.value ? (_(), s("div", {
				key: 0,
				class: p(["absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg py-1 min-w-[180px]", [a[e.placement], C(d)]])
			}, [x(t.$slots, "default")], 2)) : o("", !0)]),
			_: 3
		})], 512));
	}
}, He = ["disabled"], Ue = ["href"], We = {
	__name: "DropdownItem",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		href: {
			type: String,
			default: ""
		},
		as: {
			type: String,
			default: "button"
		}
	},
	emits: ["click"],
	setup(e) {
		let t = e, n = d("closeDropdown", () => {}), r = i(() => [
			"flex w-full items-center gap-2 px-3 py-2 text-sm text-surface-700 transition-colors",
			"hover:bg-surface-100 hover:text-surface-900",
			t.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"
		]);
		return (t, i) => e.as === "button" ? (_(), s("button", {
			key: 0,
			class: p(r.value),
			disabled: e.disabled,
			onClick: i[0] ||= (e) => t.$emit("click", C(n))
		}, [x(t.$slots, "default")], 10, He)) : (_(), s("a", {
			key: 1,
			class: p(r.value),
			href: e.href
		}, [x(t.$slots, "default")], 10, Ue));
	}
}, Ge = {
	class: "flex border-b border-surface-200",
	role: "tablist"
}, Ke = ["aria-selected", "onClick"], qe = {
	key: 0,
	class: "mr-1.5"
}, Je = { class: "mt-4" }, Ye = {
	__name: "Tabs",
	props: {
		tabs: {
			type: Array,
			required: !0
		},
		modelValue: {
			type: String,
			required: !0
		}
	},
	emits: ["update:modelValue"],
	setup(t) {
		let n = t;
		function r(e) {
			return ["px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer", n.modelValue === e ? "border-primary-600 text-primary-700" : "border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300"];
		}
		return (n, i) => (_(), s("div", null, [c("div", Ge, [(_(!0), s(e, null, b(t.tabs, (e) => (_(), s("button", {
			key: e.key,
			class: p(r(e.key)),
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [e.icon ? (_(), s("span", qe, S(e.icon), 1)) : o("", !0), l(" " + S(e.label), 1)], 10, Ke))), 128))]), c("div", Je, [x(n.$slots, "default", { activeTab: t.modelValue })])]));
	}
}, Xe = {
	key: 0,
	class: "block text-sm font-medium text-surface-700 mb-1"
}, Ze = {
	key: 0,
	class: "text-danger"
}, Qe = ["disabled"], $e = { class: "flex items-center gap-1 shrink-0" }, et = { class: "border-b border-surface-200 p-2" }, tt = { class: "flex items-center gap-2 px-3 py-1.5 bg-surface-50 rounded-lg" }, nt = ["placeholder"], rt = {
	key: 0,
	class: "px-4 py-3 text-sm text-surface-400 text-center"
}, it = ["onClick", "onMouseenter"], at = { class: "flex-1 truncate" }, ot = {
	key: 0,
	class: "w-4 h-4 text-primary-600 shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, st = {
	key: 1,
	class: "text-sm text-danger mt-1"
}, ct = {
	__name: "SearchableDropdown",
	props: {
		modelValue: {
			type: [
				String,
				Number,
				null
			],
			default: null
		},
		options: {
			type: Array,
			default: () => []
		},
		labelKey: {
			type: String,
			default: "label"
		},
		valueKey: {
			type: String,
			default: "value"
		},
		placeholder: {
			type: String,
			default: "Select an option"
		},
		searchPlaceholder: {
			type: String,
			default: "Search..."
		},
		label: {
			type: String,
			default: ""
		},
		error: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		required: {
			type: Boolean,
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !1
		},
		emptyText: {
			type: String,
			default: "No results found"
		}
	},
	emits: ["update:modelValue", "search"],
	setup(r, { emit: d }) {
		let v = r, C = d, k = y(!1), A = y(""), j = y(-1), M = y(null), N = y(null), P = y(null), F = y(null), I = y(null), L = y({}), R = i(() => v.modelValue !== null && v.modelValue !== void 0 && v.modelValue !== ""), ee = i(() => {
			if (!R.value) return "";
			let e = v.options.find((e) => V(e) === v.modelValue);
			return e ? B(e) : "";
		}), z = i(() => {
			if (!A.value) return v.options;
			let e = A.value.toLowerCase();
			return v.options.filter((t) => B(t).toLowerCase().includes(e));
		});
		function B(e) {
			return typeof e == "object" ? e[v.labelKey] : e;
		}
		function V(e) {
			return typeof e == "object" ? e[v.valueKey] : e;
		}
		function H(e) {
			return V(e) === v.modelValue;
		}
		let U = i(() => [
			"inline-flex items-center gap-2 w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg transition-colors",
			"hover:bg-surface-50",
			k.value ? "border-primary-500 ring-2 ring-primary-500/30" : "border-surface-300",
			v.disabled ? "bg-surface-50 cursor-not-allowed opacity-50" : "cursor-pointer",
			v.error ? "border-danger" : ""
		]);
		function W(e) {
			return [
				"flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",
				e === j.value ? "bg-primary-50 text-primary-700" : "text-surface-700 hover:bg-surface-50",
				"font-medium"
			];
		}
		function G() {
			if (!P.value) return;
			let e = P.value.getBoundingClientRect();
			L.value = {
				top: `${e.bottom + 4}px`,
				left: `${e.left}px`,
				width: `${e.width}px`
			};
		}
		function K() {
			v.disabled || (k.value = !k.value, k.value && f(() => {
				G(), M.value?.focus();
			}));
		}
		function q(e) {
			C("update:modelValue", V(e)), k.value = !1, A.value = "", j.value = -1;
		}
		function te() {
			C("update:modelValue", null);
		}
		function ne(e) {
			if (k.value) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), j.value = Math.min(j.value + 1, z.value.length - 1), J();
					break;
				case "ArrowUp":
					e.preventDefault(), j.value = Math.max(j.value - 1, 0), J();
					break;
				case "Enter":
					e.preventDefault(), j.value >= 0 && j.value < z.value.length && q(z.value[j.value]);
					break;
				case "Escape":
					k.value = !1, A.value = "", j.value = -1;
					break;
			}
		}
		function J() {
			f(() => {
				let e = I.value?.children;
				e && e[j.value] && e[j.value].scrollIntoView({ block: "nearest" });
			});
		}
		T(k, (e) => {
			e || (A.value = "", j.value = -1);
		}), T(A, (e) => {
			C("search", e), j.value = -1;
		});
		function Y(e) {
			let t = e.target;
			N.value?.contains(t) || F.value?.contains(t) || M.value !== t && (k.value = !1);
		}
		function X() {
			k.value && G();
		}
		return h(() => {
			document.addEventListener("click", Y, !0), window.addEventListener("scroll", X, !0), window.addEventListener("resize", X);
		}), g(() => {
			document.removeEventListener("click", Y, !0), window.removeEventListener("scroll", X, !0), window.removeEventListener("resize", X);
		}), (i, d) => (_(), s("div", {
			class: "relative",
			ref_key: "containerRef",
			ref: N
		}, [
			r.label ? (_(), s("label", Xe, [l(S(r.label) + " ", 1), r.required ? (_(), s("span", Ze, "*")) : o("", !0)])) : o("", !0),
			c("button", {
				ref_key: "triggerRef",
				ref: P,
				class: p(U.value),
				disabled: r.disabled,
				onClick: K
			}, [c("span", { class: p(["flex-1 truncate text-left", R.value ? "text-surface-800" : "text-surface-400"]) }, S(R.value ? ee.value : r.placeholder), 3), c("div", $e, [r.clearable && R.value ? (_(), s("button", {
				key: 0,
				class: "p-0.5 rounded cursor-pointer text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors",
				onClick: O(te, ["stop"])
			}, [...d[1] ||= [c("svg", {
				class: "w-3.5 h-3.5",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])) : o("", !0), (_(), s("svg", {
				class: p(["w-4 h-4 text-surface-500 transition-transform duration-150", { "rotate-180": k.value }]),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...d[2] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 9l-7 7-7-7"
			}, null, -1)]], 2))])], 10, Qe),
			(_(), a(t, { to: "body" }, [u(n, {
				name: "searchable-dropdown",
				onBeforeEnter: G,
				onEnter: G
			}, {
				default: E(() => [k.value ? (_(), s("div", {
					key: 0,
					ref_key: "dropdownRef",
					ref: F,
					class: "fixed z-[9999] bg-white border border-surface-200 rounded-xl shadow-lg overflow-hidden",
					style: m(L.value)
				}, [
					c("div", et, [c("div", tt, [d[3] ||= c("svg", {
						class: "w-4 h-4 text-surface-400 shrink-0",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					})], -1), D(c("input", {
						ref_key: "inputRef",
						ref: M,
						"onUpdate:modelValue": d[0] ||= (e) => A.value = e,
						class: "w-full bg-transparent outline-none text-sm placeholder:text-surface-400",
						placeholder: r.searchPlaceholder,
						onKeydown: ne
					}, null, 40, nt), [[w, A.value]])])]),
					z.value.length === 0 ? (_(), s("div", rt, S(r.emptyText), 1)) : o("", !0),
					c("ul", {
						class: "max-h-60 overflow-y-auto py-1",
						ref_key: "listRef",
						ref: I
					}, [(_(!0), s(e, null, b(z.value, (e, t) => (_(), s("li", {
						key: V(e),
						class: p(W(t)),
						onClick: (t) => q(e),
						onMouseenter: (e) => j.value = t
					}, [x(i.$slots, "option", {
						option: e,
						selected: H(e)
					}, () => [c("span", at, S(B(e)), 1), H(e) ? (_(), s("svg", ot, [...d[4] ||= [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M5 13l4 4L19 7"
					}, null, -1)]])) : o("", !0)])], 42, it))), 128))], 512)
				], 4)) : o("", !0)]),
				_: 3
			})])),
			r.error ? (_(), s("p", st, S(r.error), 1)) : o("", !0)
		], 512));
	}
}, lt = {
	Button: j,
	Card: F,
	Table: de,
	Toast: be,
	Badge: Se,
	Input: Me,
	Modal: Pe,
	Alert: ze,
	Dropdown: Ve,
	DropdownItem: We,
	Tabs: Ye,
	SearchableDropdown: ct
}, ut = { install(e) {
	for (let [t, n] of Object.entries(lt)) e.component(t, n);
} };
//#endregion
export { ze as Alert, Se as Badge, j as Button, F as Card, Ve as Dropdown, We as DropdownItem, Me as Input, Pe as Modal, ct as SearchableDropdown, de as Table, Ye as Tabs, be as Toast, ut as default, me as useToast };
