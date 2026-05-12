"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  MapPin,
  Star,
  CalendarCheck,
  Warehouse,
  ArrowRight,
  CheckCircle2,
  Menu,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Button({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
      : "bg-slate-950 text-white hover:bg-slate-800";
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-3xl bg-white ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 shadow-sm">
              <Warehouse className="h-5 w-5 text-slate-950" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">Stowhive</div>
              <div className="text-xs font-medium text-slate-500">
                Storage made simple
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#how" className="hover:text-slate-950">
              How it works
            </a>
            <a href="#hosts" className="hover:text-slate-950">
              For hosts
            </a>
            <a href="#trust" className="hover:text-slate-950">
              Trust
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button>Join the waitlist</Button>
          </div>
          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.35),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
                Launching soon in Canada
              </div>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Find convenient storage space near you.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Stowhive connects people who need flexible storage with trusted
                local hosts who have extra space in garages, basements, spare
                rooms, and commercial areas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button>
                  Find storage <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Become a host</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Flexible terms
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Local options
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Verified hosts
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-2xl">
                <div className="p-6 md:p-8">
                  <div className="rounded-3xl bg-slate-100 p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-500">
                          Search storage
                        </div>
                        <div className="text-2xl font-bold">Nearby spaces</div>
                      </div>
                      <Search className="h-6 w-6 text-slate-500" />
                    </div>
                    <div className="space-y-4">
                      {[
                        ["Garage bay", "Dartmouth, NS", "$95/mo", "4.9"],
                        ["Basement storage", "Halifax, NS", "$65/mo", "4.8"],
                        ["Commercial rack space", "Moncton, NB", "$140/mo", "5.0"],
                      ].map(([title, location, price, rating]) => (
                        <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="font-bold">{title}</div>
                              <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                                <MapPin className="h-3.5 w-3.5" /> {location}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">{price}</div>
                              <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                                <Star className="h-3.5 w-3.5" /> {rating}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Storage without the traditional hassle.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple marketplace experience for renters and hosts.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                Search,
                "Search nearby",
                "Browse available storage spaces by location, price, size, and access needs.",
              ],
              [
                CalendarCheck,
                "Book flexibly",
                "Choose short-term or longer-term storage without locking into unnecessary space.",
              ],
              [
                ShieldCheck,
                "Store with confidence",
                "Host verification, clear listings, and simple communication help reduce uncertainty.",
              ],
            ].map(([Icon, title, body]) => (
              <Card key={String(title)} className="border border-slate-200 shadow-sm">
                <div className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
                    {React.createElement(Icon as React.ElementType, {
                      className: "h-6 w-6 text-amber-700",
                    })}
                  </div>
                  <h3 className="text-xl font-bold">{String(title)}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{String(body)}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="hosts" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Turn unused space into recurring income.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Have an empty garage, basement area, spare room, or commercial
                storage corner? Stowhive helps you list it, manage interest, and
                earn from space you already have.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "List your space in minutes",
                "Set your own monthly price",
                "Choose what storage types you accept",
                "Communicate with renters before confirming",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 text-amber-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Built around trust, clarity, and convenience.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Storage is personal. Stowhive is designed to make each listing
                clear, each host accountable, and each booking easier to
                understand before anyone commits.
              </p>
            </div>
            <Card className="border border-slate-200 shadow-sm">
              <div className="p-7">
                <div className="space-y-5">
                  {[
                    "Clear listing details and photos",
                    "Host and renter expectations upfront",
                    "Location-based discovery",
                    "Simple inquiry and booking flow",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <div className="font-medium text-slate-800">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-amber-400 p-8 text-center shadow-lg md:p-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">
              Be first to know when Stowhive launches.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-amber-950">
              Join the early access list as a renter, host, or commercial
              partner.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                className="h-12 flex-1 rounded-full border-0 px-5 text-slate-950 shadow-sm outline-none ring-1 ring-black/10 placeholder:text-slate-400"
                placeholder="Enter your email"
              />
              <Button>Join waitlist</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Stowhive Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-950">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-950">
              Terms
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
