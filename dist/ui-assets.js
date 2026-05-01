import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, inject as d, nextTick as f, normalizeClass as p, onMounted as m, onUnmounted as h, openBlock as g, provide as _, ref as v, renderList as y, renderSlot as b, toDisplayString as x, unref as S, vModelText as C, watch as w, withCtx as T, withDirectives as ee, withModifiers as te } from "vue";
//#region src/components/ui/Button.vue
var E = ["disabled"], D = {
	key: 0,
	class: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, O = {
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
			"inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg",
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
		}, [e.loading ? (g(), s("span", D)) : o("", !0), b(t.$slots, "default")], 10, E));
	}
}, k = {
	key: 0,
	class: "border-b border-surface-200 px-6 py-4"
}, A = { class: "px-6 py-4" }, j = {
	key: 1,
	class: "border-t border-surface-200 px-6 py-4"
}, M = {
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
			e.$slots.header ? (g(), s("div", k, [b(e.$slots, "header")])) : o("", !0),
			c("div", A, [b(e.$slots, "default")]),
			e.$slots.footer ? (g(), s("div", j, [b(e.$slots, "footer")])) : o("", !0)
		], 2));
	}
}, N = { class: "overflow-x-auto" }, P = { class: "w-full text-left text-sm" }, F = { class: "border-b border-surface-200 bg-surface-50" }, I = {
	key: 0,
	class: "w-10 px-4 py-3"
}, L = ["onClick"], R = { class: "inline-flex items-center gap-1.5" }, z = {
	key: 0,
	class: "text-surface-400"
}, B = {
	key: 0,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, V = {
	key: 1,
	class: "w-3.5 h-3.5 text-primary-600",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, H = {
	key: 2,
	class: "w-3.5 h-3.5",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, U = ["onClick"], ne = {
	key: 0,
	class: "w-10 px-4 py-3"
}, re = { key: 0 }, ie = ["colspan"], ae = {
	key: 0,
	class: "px-6 py-4 bg-surface-50/60 border-b border-surface-100"
}, oe = { key: 0 }, se = { class: "bg-surface-50" }, ce = {
	key: 0,
	class: "px-4 py-3"
}, le = ["colspan"], W = {
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
		}
	},
	setup(t) {
		let r = t, a = v(null), d = v("asc"), f = v(/* @__PURE__ */ new Set());
		function m(e) {
			a.value === e ? d.value = d.value === "asc" ? "desc" : "asc" : (a.value = e, d.value = "asc");
		}
		function h(e) {
			let t = new Set(f.value);
			t.has(e) ? t.delete(e) : t.add(e), f.value = t;
		}
		let _ = i(() => a.value ? [...r.rows].sort((e, t) => {
			let n = e[a.value], r = t[a.value], i = n < r ? -1 : +(n > r);
			return d.value === "asc" ? i : -i;
		}) : r.rows);
		return (r, i) => (g(), s("div", N, [c("table", P, [
			c("thead", null, [c("tr", F, [t.expandable ? (g(), s("th", I)) : o("", !0), (g(!0), s(e, null, y(t.columns, (e) => (g(), s("th", {
				key: e.key,
				class: p(["px-4 py-3 font-semibold text-surface-600 whitespace-nowrap", { "cursor-pointer select-none hover:text-surface-900": e.sortable }]),
				onClick: (t) => e.sortable && m(e.key)
			}, [c("span", R, [l(x(e.label) + " ", 1), e.sortable ? (g(), s("span", z, [a.value === e.key && d.value === "asc" ? (g(), s("svg", B, [...i[0] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5 15l7-7 7 7"
			}, null, -1)]])) : a.value === e.key && d.value === "desc" ? (g(), s("svg", V, [...i[1] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 9l-7 7-7-7"
			}, null, -1)]])) : (g(), s("svg", H, [...i[2] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
			}, null, -1)]]))])) : o("", !0)])], 10, L))), 128))])]),
			(g(!0), s(e, null, y(_.value, (a, d) => (g(), s(e, { key: d }, [c("tr", {
				class: p(["border-b border-surface-100 hover:bg-surface-50/50 transition-colors", { "cursor-pointer": t.expandable }]),
				onClick: (e) => t.expandable && h(d)
			}, [t.expandable ? (g(), s("td", ne, [(g(), s("svg", {
				class: p(["w-4 h-4 text-surface-400 transition-transform duration-200", { "rotate-90": f.value.has(d) }]),
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [...i[3] ||= [c("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9 5l7 7-7 7"
			}, null, -1)]], 2))])) : o("", !0), (g(!0), s(e, null, y(t.columns, (e) => (g(), s("td", {
				key: e.key,
				class: "px-4 py-3 text-surface-700"
			}, [b(r.$slots, e.key, {
				row: a,
				value: a[e.key]
			}, () => [l(x(a[e.key]), 1)])]))), 128))], 10, U), t.expandable && f.value.has(d) ? (g(), s("tr", re, [c("td", {
				colspan: t.columns.length + 1,
				class: "p-0"
			}, [u(n, { name: "expand" }, {
				default: T(() => [f.value.has(d) ? (g(), s("div", ae, [b(r.$slots, "expanded", {
					row: a,
					index: d
				})])) : o("", !0)]),
				_: 2
			}, 1024)], 8, ie)])) : o("", !0)], 64))), 128)),
			r.$slots.footer ? (g(), s("tfoot", oe, [c("tr", se, [t.expandable ? (g(), s("td", ce)) : o("", !0), c("td", {
				colspan: t.columns.length,
				class: "px-4 py-3"
			}, [b(r.$slots, "footer")], 8, le)])])) : o("", !0)
		])]));
	}
}, G = v([]), ue = 0;
function K({ message: e, title: t, type: n = "info", duration: r = 4e3 }) {
	let i = ue++;
	return G.value.push({
		id: i,
		message: e,
		title: t,
		type: n
	}), r > 0 && setTimeout(() => q(i), r), i;
}
function q(e) {
	let t = G.value.findIndex((t) => t.id === e);
	t !== -1 && G.value.splice(t, 1);
}
function de() {
	G.value = [];
}
function fe() {
	return {
		toasts: G,
		success: (e, t = {}) => K({
			type: "success",
			message: e,
			...t
		}),
		error: (e, t = {}) => K({
			type: "error",
			message: e,
			...t
		}),
		warning: (e, t = {}) => K({
			type: "warning",
			message: e,
			...t
		}),
		info: (e, t = {}) => K({
			type: "info",
			message: e,
			...t
		}),
		remove: q,
		clear: de
	};
}
//#endregion
//#region src/components/ui/Toast.vue
var pe = { class: "mt-0.5 shrink-0" }, me = { class: "flex-1 min-w-0" }, he = {
	key: 0,
	class: "font-semibold text-sm"
}, ge = { class: "text-sm opacity-80" }, _e = ["onClick"], J = {
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
			default: T(() => [(g(!0), s(e, null, y(S(G), (e) => (g(), s("div", {
				key: e.id,
				class: p([l(e.type), "pointer-events-auto min-w-[320px] max-w-md rounded-xl shadow-lg border backdrop-blur-sm p-4 flex items-start gap-3"])
			}, [
				c("span", pe, x(i[e.type]), 1),
				c("div", me, [e.title ? (g(), s("p", he, x(e.title), 1)) : o("", !0), c("p", ge, x(e.message), 1)]),
				c("button", {
					class: "shrink-0 text-current opacity-50 hover:opacity-100 transition-opacity",
					onClick: (t) => S(q)(e.id)
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
				})], -1)]], 8, _e)
			], 2))), 128))]),
			_: 1
		})]));
	}
}, ve = {
	key: 0,
	class: "w-1.5 h-1.5 rounded-full bg-current"
}, Y = {
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
		return (t, n) => (g(), s("span", { class: p(a.value) }, [e.dot ? (g(), s("span", ve)) : o("", !0), b(t.$slots, "default")], 2));
	}
}, ye = { class: "space-y-1" }, be = ["for"], xe = {
	key: 0,
	class: "text-danger"
}, Se = { class: "relative" }, Ce = [
	"id",
	"value",
	"placeholder",
	"disabled",
	"rows"
], we = [
	"id",
	"type",
	"value",
	"placeholder",
	"disabled"
], Te = {
	key: 2,
	class: "absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
}, Ee = {
	key: 1,
	class: "text-sm text-danger"
}, De = {
	key: 2,
	class: "text-xs text-surface-500"
}, X = {
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
		return (t, r) => (g(), s("div", ye, [
			e.label ? (g(), s("label", {
				key: 0,
				for: e.id,
				class: "block text-sm font-medium text-surface-700"
			}, [l(x(e.label) + " ", 1), e.required ? (g(), s("span", xe, "*")) : o("", !0)], 8, be)) : o("", !0),
			c("div", Se, [e.type === "textarea" ? (g(), s("textarea", {
				key: 0,
				id: e.id,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				rows: e.rows,
				class: p(n.value),
				onInput: r[0] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, Ce)) : (g(), s("input", {
				key: 1,
				id: e.id,
				type: e.type,
				value: e.modelValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				class: p(n.value),
				onInput: r[1] ||= (e) => t.$emit("update:modelValue", e.target.value)
			}, null, 42, we)), t.$slots.icon ? (g(), s("span", Te, [b(t.$slots, "icon")])) : o("", !0)]),
			e.error ? (g(), s("p", Ee, x(e.error), 1)) : e.hint ? (g(), s("p", De, x(e.hint), 1)) : o("", !0)
		]));
	}
}, Oe = {
	key: 0,
	class: "flex items-center justify-between px-6 py-4 border-b border-surface-200"
}, ke = { class: "text-lg font-semibold text-surface-900" }, Ae = { class: "px-6 py-4 overflow-y-auto flex-1" }, je = {
	key: 1,
	class: "px-6 py-4 border-t border-surface-200 bg-surface-50"
}, Z = {
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
				onClick: te(_, ["self"])
			}, [u(n, { name: "modal-content" }, {
				default: T(() => [e.modelValue ? (g(), s("div", {
					key: 0,
					class: p([d[e.size], "bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden animate-in"])
				}, [
					r.$slots.header || e.title ? (g(), s("div", Oe, [b(r.$slots, "header", {}, () => [c("h2", ke, x(e.title), 1)]), e.closable ? (g(), s("button", {
						key: 0,
						class: "p-1.5 rounded-lg text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors",
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
					c("div", Ae, [b(r.$slots, "default")]),
					r.$slots.footer ? (g(), s("div", je, [b(r.$slots, "footer")])) : o("", !0)
				], 2)) : o("", !0)]),
				_: 3
			})])) : o("", !0)]),
			_: 3
		})]));
	}
}, Me = { class: "mt-0.5 shrink-0" }, Ne = { class: "flex-1 min-w-0" }, Pe = {
	key: 0,
	class: "font-semibold text-sm"
}, Fe = { class: "text-sm opacity-90" }, Q = {
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
			c("span", Me, x(n[e.variant]), 1),
			c("div", Ne, [e.title ? (g(), s("p", Pe, x(e.title), 1)) : o("", !0), c("p", Fe, [b(t.$slots, "default")])]),
			e.closable ? (g(), s("button", {
				key: 0,
				class: "shrink-0 p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity",
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
}, Ie = { class: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-surface-300 rounded-lg hover:bg-surface-50 transition-colors" }, $ = {
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
		}, [c("div", { onClick: f }, [b(t.$slots, "trigger", {}, () => [c("button", Ie, [l(x(e.label) + " ", 1), m[0] ||= c("svg", {
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
}, Le = ["disabled"], Re = ["href"], ze = {
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
		}, [b(t.$slots, "default")], 10, Le)) : (g(), s("a", {
			key: 1,
			class: p(r.value),
			href: e.href
		}, [b(t.$slots, "default")], 10, Re));
	}
}, Be = {
	class: "flex border-b border-surface-200",
	role: "tablist"
}, Ve = ["aria-selected", "onClick"], He = {
	key: 0,
	class: "mr-1.5"
}, Ue = { class: "mt-4" }, We = {
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
			return ["px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap", n.modelValue === e ? "border-primary-600 text-primary-700" : "border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300"];
		}
		return (n, i) => (g(), s("div", null, [c("div", Be, [(g(!0), s(e, null, y(t.tabs, (e) => (g(), s("button", {
			key: e.key,
			class: p(r(e.key)),
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			onClick: (t) => n.$emit("update:modelValue", e.key)
		}, [e.icon ? (g(), s("span", He, x(e.icon), 1)) : o("", !0), l(" " + x(e.label), 1)], 10, Ve))), 128))]), c("div", Ue, [b(n.$slots, "default", { activeTab: t.modelValue })])]));
	}
}, Ge = {
	key: 0,
	class: "block text-sm font-medium text-surface-700 mb-1"
}, Ke = {
	key: 0,
	class: "text-danger"
}, qe = ["disabled"], Je = { class: "flex items-center gap-1 shrink-0" }, Ye = {
	key: 0,
	class: "absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg overflow-hidden w-full"
}, Xe = { class: "border-b border-surface-200 p-2" }, Ze = { class: "flex items-center gap-2 px-3 py-1.5 bg-surface-50 rounded-lg" }, Qe = ["placeholder"], $e = {
	key: 0,
	class: "px-4 py-3 text-sm text-surface-400 text-center"
}, et = ["onClick", "onMouseenter"], tt = { class: "flex-1 truncate" }, nt = {
	key: 0,
	class: "w-4 h-4 text-primary-600 shrink-0",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, rt = {
	key: 1,
	class: "text-sm text-danger mt-1"
}, it = {
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
		let a = t, d = r, _ = v(!1), S = v(""), E = v(-1), D = v(null), O = v(null), k = v(null), A = i(() => a.modelValue !== null && a.modelValue !== void 0 && a.modelValue !== ""), j = i(() => {
			if (!A.value) return "";
			let e = a.options.find((e) => P(e) === a.modelValue);
			return e ? N(e) : "";
		}), M = i(() => {
			if (!S.value) return a.options;
			let e = S.value.toLowerCase();
			return a.options.filter((t) => N(t).toLowerCase().includes(e));
		});
		function N(e) {
			return typeof e == "object" ? e[a.labelKey] : e;
		}
		function P(e) {
			return typeof e == "object" ? e[a.valueKey] : e;
		}
		function F(e) {
			return P(e) === a.modelValue;
		}
		let I = i(() => [
			"inline-flex items-center gap-2 w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg transition-colors",
			"hover:bg-surface-50",
			_.value ? "border-primary-500 ring-2 ring-primary-500/30" : "border-surface-300",
			a.disabled ? "bg-surface-50 cursor-not-allowed opacity-50" : "cursor-pointer",
			a.error ? "border-danger" : ""
		]);
		function L(e) {
			return [
				"flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",
				e === E.value ? "bg-primary-50 text-primary-700" : "text-surface-700 hover:bg-surface-50",
				"font-medium"
			];
		}
		function R() {
			a.disabled || (_.value = !_.value, _.value && f(() => D.value?.focus()));
		}
		function z(e) {
			d("update:modelValue", P(e)), _.value = !1, S.value = "", E.value = -1;
		}
		function B() {
			d("update:modelValue", null);
		}
		function V(e) {
			if (_.value) switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), E.value = Math.min(E.value + 1, M.value.length - 1), H();
					break;
				case "ArrowUp":
					e.preventDefault(), E.value = Math.max(E.value - 1, 0), H();
					break;
				case "Enter":
					e.preventDefault(), E.value >= 0 && E.value < M.value.length && z(M.value[E.value]);
					break;
				case "Escape":
					_.value = !1, S.value = "", E.value = -1;
					break;
			}
		}
		function H() {
			f(() => {
				let e = k.value?.children;
				e && e[E.value] && e[E.value].scrollIntoView({ block: "nearest" });
			});
		}
		w(_, (e) => {
			e || (S.value = "", E.value = -1);
		}), w(S, (e) => {
			d("search", e), E.value = -1;
		});
		function U(e) {
			O.value && !O.value.contains(e.target) && (_.value = !1);
		}
		return m(() => document.addEventListener("click", U)), h(() => document.removeEventListener("click", U)), (r, i) => (g(), s("div", {
			class: "relative",
			ref_key: "containerRef",
			ref: O
		}, [
			t.label ? (g(), s("label", Ge, [l(x(t.label) + " ", 1), t.required ? (g(), s("span", Ke, "*")) : o("", !0)])) : o("", !0),
			c("button", {
				class: p(I.value),
				disabled: t.disabled,
				onClick: R
			}, [c("span", { class: p(["flex-1 truncate text-left", A.value ? "text-surface-800" : "text-surface-400"]) }, x(A.value ? j.value : t.placeholder), 3), c("div", Je, [t.clearable && A.value ? (g(), s("button", {
				key: 0,
				class: "p-0.5 rounded text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors",
				onClick: te(B, ["stop"])
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
			}, null, -1)]], 2))])], 10, qe),
			u(n, { name: "searchable-dropdown" }, {
				default: T(() => [_.value ? (g(), s("div", Ye, [
					c("div", Xe, [c("div", Ze, [i[3] ||= c("svg", {
						class: "w-4 h-4 text-surface-400 shrink-0",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					})], -1), ee(c("input", {
						ref_key: "inputRef",
						ref: D,
						"onUpdate:modelValue": i[0] ||= (e) => S.value = e,
						class: "w-full bg-transparent outline-none text-sm placeholder:text-surface-400",
						placeholder: t.searchPlaceholder,
						onKeydown: V
					}, null, 40, Qe), [[C, S.value]])])]),
					M.value.length === 0 ? (g(), s("div", $e, x(t.emptyText), 1)) : o("", !0),
					c("ul", {
						class: "max-h-60 overflow-y-auto py-1",
						ref_key: "listRef",
						ref: k
					}, [(g(!0), s(e, null, y(M.value, (e, t) => (g(), s("li", {
						key: P(e),
						class: p(L(t)),
						onClick: (t) => z(e),
						onMouseenter: (e) => E.value = t
					}, [b(r.$slots, "option", {
						option: e,
						selected: F(e)
					}, () => [c("span", tt, x(N(e)), 1), F(e) ? (g(), s("svg", nt, [...i[4] ||= [c("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M5 13l4 4L19 7"
					}, null, -1)]])) : o("", !0)])], 42, et))), 128))], 512)
				])) : o("", !0)]),
				_: 3
			}),
			t.error ? (g(), s("p", rt, x(t.error), 1)) : o("", !0)
		], 512));
	}
}, at = {
	Button: O,
	Card: M,
	Table: W,
	Toast: J,
	Badge: Y,
	Input: X,
	Modal: Z,
	Alert: Q,
	Dropdown: $,
	DropdownItem: ze,
	Tabs: We,
	SearchableDropdown: it
}, ot = { install(e) {
	for (let [t, n] of Object.entries(at)) e.component(t, n);
} };
//#endregion
export { Q as Alert, Y as Badge, O as Button, M as Card, $ as Dropdown, ze as DropdownItem, X as Input, Z as Modal, it as SearchableDropdown, W as Table, We as Tabs, J as Toast, ot as default, fe as useToast };
