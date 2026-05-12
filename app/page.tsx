"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Home,
  LockKeyhole,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Warehouse,
} from "lucide-react";

const spaces = [
  {
    title: "Garage storage",
    location: "Dartmouth, NS",
    price: "$95/mo",
    tag: "Drive-up access",
    icon: Home,
  },
  {
    title: "Basement space",
    location: "Halifax, NS",
    price: "$65/mo",
    tag: "Climate friendly",
    icon: Boxes,
  },
  {
    title: "Commercial bay",
    location: "Moncton, NB",
    price: "$140/mo",
    tag: "Business storage",
    icon: Building2,
  },
];

const features = [
  "Verified local hosts",
  "Flexible monthly storage",
  "Clear listing details",
  "Simple renter-host communication",
];

function Button({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200";
  const styles = {
    primary:
      "bg-[#F7B733] text-slate-950 shadow-[0_14px_30px_rgba(247,183,51,0.35)] hover:-translate-y-0.5 hover:bg-[#ffc24d]",
    secondary:
      "border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15",
    ghost: "bg-white text-slate-950 shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  };
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-100 px-4 py-2 text-sm font-extrabold text-amber-900">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3E8] text-slate-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F7B733] shadow-lg shadow-amber-500/20">
              <Warehouse className="h-6 w-6 text-slate-950" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-white">Stowhive</div>
              <div className="text-xs font-semibold text-slate-400">Storage made simple</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#hosts" className="hover:text-white">For hosts</a>
            <a href="#trust" className="hover:text-white">Trust</a>
            <a href="#waitlist" className="hover:text-white">Waitlist</a>
          </div>

          <Button className="hidden md:inline-flex">
            Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <section className="relative bg-slate-950 pb-24 pt-32 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Launching soon in Atlantic Canada
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              Storage space, hiding in plain sight.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Stowhive connects people who need flexible local storage with trusted hosts who have unused garages, basements, spare rooms, and commercial space.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button>
                Find storage near me <Search className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">
                Earn as a host <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {["Local", "Flexible", "Simple", "Trusted"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <div className="text-lg font-black text-white">{item}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">storage</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-300/30 to-orange-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.6rem] bg-[#F8F3E8] p-5 text-slate-950">
                <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-white">
                      <Search className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-black uppercase tracking-widest text-slate-400">Search</div>
                      <div className="text-lg font-black">Storage near Halifax</div>
                    </div>
                  </div>
                </div>

                <div className="relative mb-5 h-44 overflow-hidden rounded-3xl bg-slate-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(247,183,51,0.85),transparent_14%),radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.75),transparent_8%),radial-gradient(circle_at_52%_72%,rgba(247,183,51,0.65),transparent_10%)]" />
                  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:36px_36px]" />
                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-lg">
                    12 nearby spaces
                  </div>
                  <MapPin className="absolute bottom-8 right-10 h-10 w-10 rounded-full bg-amber-400 p-2 text-slate-950 shadow-xl" />
                </div>

                <div className="space-y-3">
                  {spaces.map((space) => {
                    const Icon = space.icon;
                    return (
                      <div key={space.title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100">
                          <Icon className="h-6 w-6 text-amber-700" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-black">{space.title}</div>
                          <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
                            <MapPin className="h-3.5 w-3.5" /> {space.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-black">{space.price}</div>
                          <div className="text-xs font-bold text-emerald-700">{space.tag}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              A marketplace model for everyday storage.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Instead of committing to a traditional storage unit, renters can discover convenient local space, and hosts can monetize unused square footage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [Search, "Search locally", "Browse storage options by area, access, price, and storage type."],
              [CalendarCheck, "Request a space", "Connect with the host and confirm timing, access, and expectations."],
              [LockKeyhole, "Store confidently", "Use clear listing details and host verification to reduce uncertainty."],
            ].map(([Icon, title, body], index) => (
              <div key={String(title)} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white">
                    {React.createElement(Icon as React.ElementType, { className: "h-6 w-6" })}
                  </div>
                  <div className="text-5xl font-black text-slate-100">0{index + 1}</div>
                </div>
                <h3 className="text-2xl font-black">{String(title)}</h3>
                <p className="mt-4 leading-7 text-slate-600">{String(body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-400">Host earnings example</div>
                <div className="mt-1 text-4xl font-black">$95/mo</div>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400 text-slate-950">
                <Warehouse className="h-7 w-7" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Garage corner", "$75–$125/mo"],
                ["Basement room", "$50–$100/mo"],
                ["Commercial rack space", "$120–$250/mo"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                  <span className="font-bold text-slate-200">{label}</span>
                  <span className="font-black text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>For hosts</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Turn unused space into recurring income.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Have a garage, basement, spare room, or unused commercial area? Stowhive helps you list the space, set expectations, and earn from capacity you already have.
            </p>

            <div className="mt-8 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-[#F8F3E8] p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-bold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2.5rem] bg-slate-950 p-8 text-white md:grid-cols-2 md:p-12">
            <div>
              <SectionLabel>Trust & clarity</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Built for a category where trust matters.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Storage involves people’s belongings and private property. Stowhive is designed around better listing quality, clearer expectations, and a more professional renter-host experience.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                [ShieldCheck, "Verified host profiles"],
                [Star, "Ratings and reviews roadmap"],
                [MapPin, "Location-based discovery"],
                [CheckCircle2, "Clear access and storage rules"],
              ].map(([Icon, text]) => (
                <div key={String(text)} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                  {React.createElement(Icon as React.ElementType, { className: "h-6 w-6 text-amber-300" })}
                  <span className="text-lg font-black">{String(text)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#F7B733] p-8 text-center shadow-2xl shadow-amber-500/20 md:p-14">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Get early access to Stowhive.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-amber-950">
            Join as a renter, host, or commercial partner. We’ll notify you when early listings open in your area.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-full bg-white p-2 shadow-lg sm:flex-row">
            <input
              className="min-h-12 flex-1 rounded-full px-5 font-semibold outline-none placeholder:text-slate-400"
              placeholder="Enter your email"
            />
            <Button>
              Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Stowhive Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-950">Privacy</a>
            <a href="#" className="hover:text-slate-950">Terms</a>
            <a href="mailto:hello@stowhive.com" className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
