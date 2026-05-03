import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, inject as d, nextTick as f, normalizeClass as p, onMounted as m, onUnmounted as h, openBlock as g, provide as _, ref as v, renderList as y, renderSlot as b, toDisplayString as x, unref as S, vModelText as C, watch as w, withCtx as T, withDirectives as E, withModifiers as D } from "vue";
//#region src/components/ui/Button.vue
var O = ["disabled"], k = {
	key: 0,
	class: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, A = {
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
		return (t, n) => (g(), s("button", {
			class: p(a.value),
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.loading ? (g(), s("span", k)) : o("", !0), b(t.$slots, "default")], 10, O));
	}
}, j = {
	key: 0,
	class: "border-b border-surface-200 px-6 py-4"
}, M = { class: "px-6 py-4" }, ee = {
	key: 1,
	class: "border-t border-surface-200 px-6 py-4"
}, N = {
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
		return (e, t) => (g(), s("div", { class: p(r.value) }, [
			e.$slots.header ? (g(), s("div", j, [b(e.$slots, "header")])) : o("", !0),
			c("div", M, [b(e.$slots, "default")]),
			e.$slots.footer ? (g(), s("div", ee, [b(e.$slots, "footer")])) : o("", !0)
		], 2));
	}
}, P = { class: "overflow-x-auto" }, F = { class: "w-full text-left text-sm" }, I = { class: "border-b border-surface-200 bg-surface-50" }, L = {
	key: 0,
	class: "w-10 px-4 py-3"
}, R = ["onClick"], z = { class: "inline-flex items-center gap-1.5" }, B = {
	key: 0,
	class: "text-surface-400"
}, V = {
	key: 0,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, H = {
	key: 1,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, U = {
	key: 2,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, W = ["onClick"], te = {
	key: 0,
	class: "w-10 px-4 py-3"
}, ne = { key: 0 }, re = ["colspan"], ie = {
	key: 0,
	class: "px-6 py-4 bg-surface-50/60 border-b border-surface-100"
}, ae = { key: 0 }, oe = { class: "bg-surface-50" }, se = {
	key: 0,
	class: "px-4 py-3"
}, ce = ["colspan"], le = { class: "flex items-center justify-between" }, ue = { class: "text-sm text-surface-500" }, de = { class: "flex items-center gap-1" }, fe = ["disabled"], pe = {
	key: 0,
	class: "inline-flex items-center justify-center w-8 h-8 text-sm text-surface-400"
}, me = ["onClick"], he = ["disabled"], G = {
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
		let r = t, a = v(null), d = v("asc"), f = v(1), m = v(/* @__PURE__ */ new Set()), h = i(() => a.value ? [...r.rows].sort((e, t) => {
			let n = e[a.value], r = t[a.value], i = n < r ? -1 : +(n > r);
			return d.value === "asc" ? i : -i;
		}) : r.rows), _ = i(() => Math.max(1, Math.ceil(h.value.length / r.perPage))), S = i(() => {
			let e = (f.value - 1) * r.perPage;
			return h.value.slice(e, e + r.perPage);
		}), C = i(() => {
			let e = _.value, t = f.value;
			if (e <= 7) return Array.from({ length: e }, (e, t) => t + 1);
			let n = [];
			n.push(1), t > 3 && n.push("...");
			for (let r = Math.max(2, t - 1); r <= Math.min(e - 1, t + 1); r++) n.push(r);
			return t < e - 2 && n.push("..."), n.push(e), n;
		});
		function E(e, t) {
			return e.id ?? t + (f.value - 1) * r.perPage;
		}
		function D(e) {
			a.value === e ? d.value = d.value === "asc" ? "desc" : "asc" : (a.value = e, d.value = "asc");
		}
		function O(e) {
			let t = new Set(m.value);
			t.has(e) ? t.delete(e) : t.add(e), m.value = t;
		}
		return w(_, (e) => {
			f.value > e && (f.value = e);
		}), w(() => r.rows, () => {
			f.value = 1, m.value = /* @__PURE__ */ new Set();
		}), (r, i) => (g(), s("div", P, [c("table", F, [
			c("thead", null, [c("tr", I, [t.expandable ? (g(), s("th", L)) : o("", !0), (g(!0), s(e, null, y(t.columns, (e) => (g(), s("th", {
				key: e.key,
				class: p(["px-4 py-3 font-semibold text-surface-600 whitespace-nowrap", { "cursor-pointer select-none hover:text-surface-900": e.sortable }]),
				onClick: (t) => e.sortable && D(e.key)
			}, [c("span", z, [l(x(e.label) + " ", 1), e.sortable ? (g(), s("span", B, [a.value === e.key && d.value === "asc" ? (g(), s("svg", V, [...i[2] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5 15l7-7 7 7"
			}, null, -1)]])) : a.value === e.key && d.value === "desc" ? (g(), s("svg", H, [...i[3] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 9l-7 7-7-7"
			}, null, -1)]])) : (g(), s("svg", U, [...i[4] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
			}, null, -1)]]))])) : o("", !0)])], 10, R))), 128))])]),
			(g(!0), s(e, null, y(S.value, (a, d) => (g(), s(e, { key: d }, [c("tr", {
				class: p(["border-b border-surface-100 hover:bg-surface-50/50 transition-colors", { "cursor-pointer": t.expandable }]),
				onClick: (e) => t.expandable && O(E(a, d))
			}, [t.expandable ? (g(), s("td", te, [(g(), s("svg", {
				class: p(["w-4 h-4 text-surface-400 transition-transform duration-200", { "rotate-90": m.value.has(E(a, d)) }]),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...i[5] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9 5l7 7-7 7"
			}, null, -1)]], 2))])) : o("", !0), (g(!0), s(e, null, y(t.columns, (e) => (g(), s("td", {
				key: e.key,
				class: "px-4 py-3 text-surface-700"
			}, [b(r.$slots, e.key, {
				row: a,
				value: a[e.key]
			}, () => [l(x(a[e.key]), 1)])]))), 128))], 10, W), t.expandable && m.value.has(E(a, d)) ? (g(), s("tr", ne, [c("td", {
				colspan: t.columns.length + 1,
				class: "p-0"
			}, [u(n, { name: "expand" }, {
				default: T(() => [m.value.has(E(a, d)) ? (g(), s("div", ie, [b(r.$slots, "expanded", {
					row: a,
					index: d
				})])) : o("", !0)]),
				_: 2
			}, 1024)], 8, re)])) : o("", !0)], 64))), 128)),
			r.$slots.footer || _.value > 1 ? (g(), s("tfoot", ae, [c("tr", oe, [t.expandable ? (g(), s("td", se)) : o("", !0), c("td", {
				colspan: t.columns.length,
				class: "px-4 py-3"
			}, [b(r.$slots, "footer", {}, () => [c("div", le, [c("span", ue, x((f.value - 1) * t.perPage + 1) + "-" + x(f.value === _.value ? h.value.length : f.value * t.perPage) + " of " + x(h.value.length), 1), c("div", de, [
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
				})], -1)]], 10, fe),
				(g(!0), s(e, null, y(C.value, (t) => (g(), s(e, { key: t }, [t === "..." ? (g(), s("button", pe, "…")) : (g(), s("button", {
					key: 1,
					class: p(["inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer", t === f.value ? "bg-primary-600 text-white" : "text-surface-600 hover:bg-surface-100"]),
					onClick: (e) => f.value = t
				}, x(t), 11, me))], 64))), 128)),
				c("button", {
					class: p(["inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors cursor-pointer", f.value === _.value ? "text-surface-300 cursor-not-allowed" : "text-surface-600 hover:bg-surface-100"]),
					disabled: f.value === _.value,
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
				})], -1)]], 10, he)
			])])])], 8, ce)])])) : o("", !0)
		])]));
	}
}, K = v([]), ge = 0;
function q({ message: e, title: t, type: n = "info", duration: r = 4e3 }) {
	let i = ge++;
	return K.value.push({
		id: i,
		message: e,
		title: t,
		type: n
	}), r > 0 && setTimeout(() => J(i), r), i;
}
function J(e) {
	let t = K.value.findIndex((t) => t.id === e);
	t !== -1 && K.value.splice(t, 1);
}
function _e() {
	K.value = [];
}
function ve() {
	return {
		toasts: K,
		success: (e, t = {}) => q({
			type: "success",
			message: e,
			...t
		}),
		error: (e, t = {}) => q({
			type: "error",
			message: e,
			...t
		}),
		warning: (e, t = {}) => q({
			type: "warning",
			message: e,
			...t
		}),
		info: (e, t = {}) => q({
			type: "info",
			message: e,
			...t
		}),
		remove: J,
		clear: _e
	};
}
//#endregion
//#region src/components/ui/Toast.vue
var ye = { class: "mt-0.5 shrink-0" }, be = { class: "flex-1 min-w-0" }, xe = {
	key: 0,
	class: "font-semibold text-sm"
}, Se = { class: "text-sm opacity-80" }, Ce = ["onClick"], Y = {
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
		return (n, d) => (g(), a(t, { to: "body" }, [u(r, {
			tag: "div",
			name: "toast",
			class: "fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none"
		}, {
			default: T(() => [(g(!0), s(e, null, y(S(K), (e) => (g(), s("div", {
				key: e.id,
				class: p([l(e.type), "pointer-events-auto min-w-[320px] max-w-md rounded-xl shadow-lg border backdrop-blur-sm p-4 flex items-start gap-3"])
			}, [
				c("span", ye, x(i[e.type]), 1),
				c("div", be, [e.title ? (g(), s("p", xe, x(e.title), 1)) : o("", !0), c("p", Se, x(e.message), 1)]),
				c("button", {
					class: "shrink-0 cursor-pointer text-current opacity-50 hover:opacity-100 transition-opacity",
					onClick: (t) => S(J)(e.id)
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
				})], -1)]], 8, Ce)
			], 2))), 128))]),
			_: 1
		})]));
	}
}, we = {
	key: 0,
	class: "w-1.5 h-1.5 rounded-full bg-current"
}, X = {
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
		return (t, n) => (g(), s("span", { class: p(a.value) }, [e.dot ? (g(), s("span", we)) : o("", !0), b(t.$slots, "default")], 2));
	}
}, Te = { class: "space-y-1" }, Ee = ["for"], De = {
	key: 0,
	class: "text-danger"
}, Oe = { class: "relative" }, ke = [
	"id",
	"value",
	"placeholder",
	"disabled",
	"rows"
], Ae = [
	"id",
	"type",
	"value",
	"placeholder",
	"disabled"
], je = {
	key: 2,
	class: "absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
}, Me = {
	key: 1,
	class: "text-sm text-danger"
}, Ne = {
	key: 2,
	class: "text-xs text-surface-500"
}, Z = {
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
		return (t, r) => (g(), s("div", Te, [
			e.label ? (g(), s("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-surface-700"
			}, [l(x(e.label) + " ", 1), e.required ? (g(), s("span", De, "*")) : o("", !0)], 8, Ee)) : o("", !0),
			c("div", Oe, [e.type === "textarea" ? (g(), s("textarea", {
				key: 0,
				id: e.id,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				rows: e.rows,
				class: p(n.value),
				onInput: r[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, ke)) : (g(), s("input", {
				key: 1,
				id: e.id,
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: p(n.value),
				onInput: r[1] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, Ae)), t.$slots.icon ? (g(), s("span", je, [b(t.$slots, "icon")])) : o("", !0)]),
			e.error ? (g(), s("p", Me, x(e.error), 1)) : e.hint ? (g(), s("p", Ne, x(e.hint), 1)) : o("", !0)
		]));
	}
}, Pe = {
	key: 0,
	class: "flex items-center justify-between px-6 py-4 border-b border-surface-200"
}, Fe = { class: "text-lg font-semibold text-surface-900" }, Ie = { class: "px-6 py-4 overflow-y-auto flex-1" }, Le = {
	key: 1,
	class: "px-6 py-4 border-t border-surface-200 bg-surface-50"
}, Q = {
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
		function _() {
			i.closeOnOverlay && f();
		}
		function v(e) {
			e.key === "Escape" && i.modelValue && i.closable && f();
		}
		return m(() => document.addEventListener("keydown", v)), h(() => document.removeEventListener("keydown", v)), (r, i) => (g(), a(t, { to: "body" }, [u(n, { name: "modal-overlay" }, {
			default: T(() => [e.modelValue ? (g(), s("div", {
				key: 0,
				class: "fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: D(_, ["self"])
			}, [u(n, { name: "modal-content" }, {
				default: T(() => [e.modelValue ? (g(), s("div", {
					key: 0,
					class: p([d[e.size], "bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden animate-in"])
				}, [
					r.$slots.header || e.title ? (g(), s("div", Pe, [b(r.$slots, "header", {}, () => [c("h2", Fe, x(e.title), 1)]), e.closable ? (g(), s("button", {
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
					})], -1)]])) : o("", !0)])) : o("", !0),
					c("div", Ie, [b(r.$slots, "default")]),
					r.$slots.footer ? (g(), s("div", Le, [b(r.$slots, "footer")])) : o("", !0)
				], 2)) : o("", !0)]),
				_: 3
			})])) : o("", !0)]),
			_: 3
		})]));
	}
}, Re = { class: "mt-0.5 shrink-0" }, ze = { class: "flex-1 min-w-0" }, Be = {
	key: 0,
	class: "font-semibold text-sm"
}, Ve = { class: "text-sm opacity-90" }, $ = {
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
		return (t, r) => (g(), s("div", {
			class: p(a.value),
			role: "alert"
		}, [
			c("span", Re, x(n[e.variant]), 1),
			c("div", ze, [e.title ? (g(), s("p", Be, x(e.title), 1)) : o("", !0), c("p", Ve, [b(t.$slots, "default")])]),
			e.closable ? (g(), s("button", {
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
}, He = { class: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-surface-300 rounded-lg hover:bg-surface-50 transition-colors" }, Ue = {
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
		let t = e, r = v(!1), i = v(null), a = {
			"bottom-start": "left-0",
			"bottom-end": "right-0",
			"top-start": "left-0 bottom-full",
			"top-end": "right-0 bottom-full"
		}, d = t.width === "full" ? "w-full" : "";
		function f() {
			r.value = !r.value;
		}
		function y() {
			r.value = !1;
		}
		_("closeDropdown", y);
		function C(e) {
			i.value && !i.value.contains(e.target) && y();
		}
		return m(() => document.addEventListener("click", C)), h(() => document.removeEventListener("click", C)), (t, m) => (g(), s("div", {
			class: "relative inline-block",
			ref_key: "dropdownRef",
			ref: i
		}, [c("div", {
			class: "cursor-pointer",
			onClick: f
		}, [b(t.$slots, "trigger", {}, () => [c("button", He, [l(x(e.label) + " ", 1), m[0] ||= c("svg", {
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
			default: T(() => [r.value ? (g(), s("div", {
				key: 0,
				class: p(["absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg py-1 min-w-[180px]", [a[e.placement], S(d)]])
			}, [b(t.$slots, "default")], 2)) : o("", !0)]),
			_: 3
		})], 512));
	}
}, We = ["disabled"], Ge = ["href"], Ke = {
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
		return (t, i) => e.as === "button" ? (g(), s("button", {
			key: 0,
			class: p(r.value),
			disabled: e.disabled,
			onClick: i[0] ||= (e) => t.$emit("click", S(n))
		}, [b(t.$slots, "default")], 10, We)) : (g(), s("a", {
			key: 1,
			class: p(r.value),
			href: e.href
		}, [b(t.$slots, "default")], 10, Ge));
	}
}, qe = {
	class: "flex border-b border-surface-200",
	role: "tablist"
}, Je = ["aria-selected", "onClick"], Ye = {
	key: 0,
	class: "mr-1.5"
}, Xe = { class: "mt-4" }, Ze = {
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
		return (n, i) => (g(), s("div", null, [c("div", qe, [(g(!0), s(e, null, y(t.tabs, (e) => (g(), s("button", {
			key: e.key,
			class: p(r(e.key)),
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [e.icon ? (g(), s("span", Ye, x(e.icon), 1)) : o("", !0), l(" " + x(e.label), 1)], 10, Je))), 128))]), c("div", Xe, [b(n.$slots, "default", { activeTab: t.modelValue })])]));
	}
}, Qe = {
	key: 0,
	class: "block text-sm font-medium text-surface-700 mb-1"
}, $e = {
	key: 0,
	class: "text-danger"
}, et = ["disabled"], tt = { class: "flex items-center gap-1 shrink-0" }, nt = {
	key: 0,
	class: "absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg overflow-hidden w-full"
}, rt = { class: "border-b border-surface-200 p-2" }, it = { class: "flex items-center gap-2 px-3 py-1.5 bg-surface-50 rounded-lg" }, at = ["placeholder"], ot = {
	key: 0,
	class: "px-4 py-3 text-sm text-surface-400 text-center"
}, st = ["onClick", "onMouseenter"], ct = { class: "flex-1 truncate" }, lt = {
	key: 0,
	class: "w-4 h-4 text-primary-600 shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, ut = {
	key: 1,
	class: "text-sm text-danger mt-1"
}, dt = {
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
	setup(t, { emit: r }) {
		let a = t, d = r, _ = v(!1), S = v(""), O = v(-1), k = v(null), A = v(null), j = v(null), M = i(() => a.modelValue !== null && a.modelValue !== void 0 && a.modelValue !== ""), ee = i(() => {
			if (!M.value) return "";
			let e = a.options.find((e) => F(e) === a.modelValue);
			return e ? P(e) : "";
		}), N = i(() => {
			if (!S.value) return a.options;
			let e = S.value.toLowerCase();
			return a.options.filter((t) => P(t).toLowerCase().includes(e));
		});
		function P(e) {
			return typeof e == "object" ? e[a.labelKey] : e;
		}
		function F(e) {
			return typeof e == "object" ? e[a.valueKey] : e;
		}
		function I(e) {
			return F(e) === a.modelValue;
		}
		let L = i(() => [
			"inline-flex items-center gap-2 w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg transition-colors",
			"hover:bg-surface-50",
			_.value ? "border-primary-500 ring-2 ring-primary-500/30" : "border-surface-300",
			a.disabled ? "bg-surface-50 cursor-not-allowed opacity-50" : "cursor-pointer",
			a.error ? "border-danger" : ""
		]);
		function R(e) {
			return [
				"flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",
				e === O.value ? "bg-primary-50 text-primary-700" : "text-surface-700 hover:bg-surface-50",
				"font-medium"
			];
		}
		function z() {
			a.disabled || (_.value = !_.value, _.value && f(() => k.value?.focus()));
		}
		function B(e) {
			d("update:modelValue", F(e)), _.value = !1, S.value = "", O.value = -1;
		}
		function V() {
			d("update:modelValue", null);
		}
		function H(e) {
			if (_.value) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), O.value = Math.min(O.value + 1, N.value.length - 1), U();
					break;
				case "ArrowUp":
					e.preventDefault(), O.value = Math.max(O.value - 1, 0), U();
					break;
				case "Enter":
					e.preventDefault(), O.value >= 0 && O.value < N.value.length && B(N.value[O.value]);
					break;
				case "Escape":
					_.value = !1, S.value = "", O.value = -1;
					break;
			}
		}
		function U() {
			f(() => {
				let e = j.value?.children;
				e && e[O.value] && e[O.value].scrollIntoView({ block: "nearest" });
			});
		}
		w(_, (e) => {
			e || (S.value = "", O.value = -1);
		}), w(S, (e) => {
			d("search", e), O.value = -1;
		});
		function W(e) {
			A.value && !A.value.contains(e.target) && (_.value = !1);
		}
		return m(() => document.addEventListener("click", W)), h(() => document.removeEventListener("click", W)), (r, i) => (g(), s("div", {
			class: "relative",
			ref_key: "containerRef",
			ref: A
		}, [
			t.label ? (g(), s("label", Qe, [l(x(t.label) + " ", 1), t.required ? (g(), s("span", $e, "*")) : o("", !0)])) : o("", !0),
			c("button", {
				class: p(L.value),
				disabled: t.disabled,
				onClick: z
			}, [c("span", { class: p(["flex-1 truncate text-left", M.value ? "text-surface-800" : "text-surface-400"]) }, x(M.value ? ee.value : t.placeholder), 3), c("div", tt, [t.clearable && M.value ? (g(), s("button", {
				key: 0,
				class: "p-0.5 rounded cursor-pointer text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors",
				onClick: D(V, ["stop"])
			}, [...i[1] ||= [c("svg", {
				class: "w-3.5 h-3.5",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])) : o("", !0), (g(), s("svg", {
				class: p(["w-4 h-4 text-surface-500 transition-transform duration-150", { "rotate-180": _.value }]),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...i[2] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 9l-7 7-7-7"
			}, null, -1)]], 2))])], 10, et),
			u(n, { name: "searchable-dropdown" }, {
				default: T(() => [_.value ? (g(), s("div", nt, [
					c("div", rt, [c("div", it, [i[3] ||= c("svg", {
						class: "w-4 h-4 text-surface-400 shrink-0",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					})], -1), E(c("input", {
						ref_key: "inputRef",
						ref: k,
						"onUpdate:modelValue": i[0] ||= (e) => S.value = e,
						class: "w-full bg-transparent outline-none text-sm placeholder:text-surface-400",
						placeholder: t.searchPlaceholder,
						onKeydown: H
					}, null, 40, at), [[C, S.value]])])]),
					N.value.length === 0 ? (g(), s("div", ot, x(t.emptyText), 1)) : o("", !0),
					c("ul", {
						class: "max-h-60 overflow-y-auto py-1",
						ref_key: "listRef",
						ref: j
					}, [(g(!0), s(e, null, y(N.value, (e, t) => (g(), s("li", {
						key: F(e),
						class: p(R(t)),
						onClick: (t) => B(e),
						onMouseenter: (e) => O.value = t
					}, [b(r.$slots, "option", {
						option: e,
						selected: I(e)
					}, () => [c("span", ct, x(P(e)), 1), I(e) ? (g(), s("svg", lt, [...i[4] ||= [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M5 13l4 4L19 7"
					}, null, -1)]])) : o("", !0)])], 42, st))), 128))], 512)
				])) : o("", !0)]),
				_: 3
			}),
			t.error ? (g(), s("p", ut, x(t.error), 1)) : o("", !0)
		], 512));
	}
}, ft = {
	Button: A,
	Card: N,
	Table: G,
	Toast: Y,
	Badge: X,
	Input: Z,
	Modal: Q,
	Alert: $,
	Dropdown: Ue,
	DropdownItem: Ke,
	Tabs: Ze,
	SearchableDropdown: dt
}, pt = { install(e) {
	for (let [t, n] of Object.entries(ft)) e.component(t, n);
} };
//#endregion
export { $ as Alert, X as Badge, A as Button, N as Card, Ue as Dropdown, Ke as DropdownItem, Z as Input, Q as Modal, dt as SearchableDropdown, G as Table, Ze as Tabs, Y as Toast, pt as default, ve as useToast };
