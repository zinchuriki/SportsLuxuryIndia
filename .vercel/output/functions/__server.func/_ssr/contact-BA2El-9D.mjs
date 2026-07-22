import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as Mail, e as Phone } from "../_libs/lucide-react.mjs";
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
