import { r as reactExports, W as jsxRuntimeExports } from "./server-CZPPjn-5.mjs";
import { c as createLucideIcon } from "./router-ZAigrvxl.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`);
    window.location.href = `mailto:rahul.sharma123456789100@gmail.com?subject=${subject}&body=${body}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-ember mb-4", children: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-6xl md:text-8xl uppercase leading-none", children: "Say hello." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl", children: "Concierge requests, press, or partnerships — we read every message and reply within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-6 max-w-3xl", children: [{
      icon: Mail,
      t: "Email",
      c: "rahul.sharma123456789100@gmail.com"
    }, {
      icon: Phone,
      t: "Phone",
      c: "+91 9711009880"
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-md p-8 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-5 h-5 text-ember mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: b.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-xl uppercase tracking-wide", children: b.c })
    ] }, b.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-16 grid gap-4 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Name", required: true, value: name, onChange: (e) => setName(e.target.value), className: "px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Message", rows: 6, required: true, value: message, onChange: (e) => setMessage(e.target.value), className: "px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember resize-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "px-8 py-4 gradient-ember text-ember-foreground font-display tracking-widest uppercase text-sm rounded-sm hover:opacity-90 transition self-start", children: "Send message" })
    ] })
  ] });
}
export {
  ContactPage as component
};
