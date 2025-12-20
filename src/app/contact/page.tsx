import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dumpster Systems AI. Schedule a free consultation to learn how automation can transform your dumpster rental business.",
  alternates: {
    canonical: "https://dumpstersystems.ai/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">Dumpster Systems AI</Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/services" className="text-zinc-600 hover:text-zinc-900">Services</Link>
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900">Pricing</Link>
            <Link href="/contact" className="text-zinc-900 font-medium">Contact</Link>
          </nav>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Get Started</Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">Get In Touch</h1>
          <p className="mt-6 text-xl text-zinc-600">Ready to automate your dumpster rental business? Let&apos;s talk.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Schedule a Free Consultation</h2>
              <p className="mt-4 text-zinc-600">
                Fill out the form and we&apos;ll reach out within 24 hours to schedule a call.
                We&apos;ll discuss your current operations and show you how automation can help.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Phone</h3>
                    <p className="mt-1 text-zinc-600">(208) 742-2268</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <p className="mt-1 text-zinc-600">hello@dumpstersystems.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-2xl">⏰</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Response Time</h3>
                    <p className="mt-1 text-zinc-600">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-900">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="john@dumpsterco.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-900">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="(208) 742-2268"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-900">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="ABC Dumpster Rentals"
                  />
                </div>
                <div>
                  <label htmlFor="fleet" className="block text-sm font-medium text-zinc-900">Fleet Size</label>
                  <select
                    id="fleet"
                    name="fleet"
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select fleet size</option>
                    <option value="1-10">1-10 dumpsters</option>
                    <option value="11-25">11-25 dumpsters</option>
                    <option value="26-50">26-50 dumpsters</option>
                    <option value="51-100">51-100 dumpsters</option>
                    <option value="100+">100+ dumpsters</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-900">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us about your business and what you're looking to automate..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="text-xl font-bold text-zinc-900">Dumpster Systems AI</Link>
            <nav className="flex gap-8">
              <Link href="/services" className="text-sm text-zinc-600 hover:text-zinc-900">Services</Link>
              <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</Link>
              <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900">About</Link>
              <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-zinc-500">© 2024 Dumpster Systems AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
