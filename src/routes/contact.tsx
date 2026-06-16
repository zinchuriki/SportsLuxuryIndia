import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elev8" },
      { name: "description", content: "Get in touch with the Elev8 team — concierge, support, and partnerships." },
      { property: "og:title", content: "Contact — Elev8" },
      { property: "og:description", content: "Get in touch with the Elev8 team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-xs uppercase tracking-widest text-ember mb-4">Contact</p>
      <h1 className="text-display text-6xl md:text-8xl uppercase leading-none">Say hello.</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Concierge requests, press, or partnerships — we read every message and reply within one business day.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl">
        {[
          { icon: Mail, t: "Email", c: "rahul.sharma123456789100@gmail.com" },
          { icon: Phone, t: "Phone", c: "+91 9711009880" },
        ].map((b) => (
          <div key={b.t} className="border border-border rounded-md p-8 bg-card">
            <b.icon className="w-5 h-5 text-ember mb-4" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{b.t}</div>
            <div className="mt-2 font-display text-xl uppercase tracking-wide">{b.c}</div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-16 grid gap-4 max-w-2xl"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember" />
          <input type="email" placeholder="Email" className="px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember" />
        </div>
        <textarea placeholder="Message" rows={6} className="px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-ember resize-none" />
        <button type="submit" className="px-8 py-4 gradient-ember text-ember-foreground font-display tracking-widest uppercase text-sm rounded-sm hover:opacity-90 transition self-start">
          Send message
        </button>
      </form>
    </div>
  );
}
