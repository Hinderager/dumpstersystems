import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dumpster Systems AI and our mission to help dumpster rental companies automate their operations and scale efficiently.",
  alternates: {
    canonical: "https://dumpstersystems.ai/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">Dumpster Systems AI</Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/services" className="text-zinc-600 hover:text-zinc-900">Services</Link>
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900">Pricing</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-900">Contact</Link>
          </nav>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Get Started</Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">About Us</h1>
          <p className="mt-6 text-xl text-zinc-600">Helping dumpster rental companies work smarter, not harder.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-zinc mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900">Our Mission</h2>
            <p className="mt-4 text-lg text-zinc-600">
              We believe dumpster rental companies shouldn&apos;t have to choose between growth and sanity.
              Too many owners are stuck answering phones at all hours, manually scheduling deliveries,
              and drowning in paperwork instead of focusing on what matters: growing their business.
            </p>
            <p className="mt-4 text-lg text-zinc-600">
              That&apos;s why we built Dumpster Systems AI. We&apos;re on a mission to automate the repetitive
              tasks that eat up your time so you can focus on serving your customers and scaling your operation.
            </p>

            <h2 className="mt-16 text-3xl font-bold text-zinc-900">Why We Focus on Dumpster Rentals</h2>
            <p className="mt-4 text-lg text-zinc-600">
              The dumpster rental industry is underserved when it comes to technology. Most software
              solutions are either too generic or too expensive for the average operator. We saw an
              opportunity to create purpose-built automation tools that actually solve the problems
              dumpster rental companies face every day.
            </p>

            <h2 className="mt-16 text-3xl font-bold text-zinc-900">What Sets Us Apart</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-zinc-900">Industry Expertise</h3>
                <p className="mt-2 text-zinc-600">We understand the unique challenges of dumpster rental operations, from scheduling to inventory management.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-zinc-900">AI-First Approach</h3>
                <p className="mt-2 text-zinc-600">We leverage the latest AI technology to automate tasks that used to require human attention 24/7.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-zinc-900">Results-Focused</h3>
                <p className="mt-2 text-zinc-600">We measure success by the hours we save you and the revenue we help you generate.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-zinc-900">Ongoing Support</h3>
                <p className="mt-2 text-zinc-600">We don&apos;t just set it and forget it. We&apos;re here to help you get the most out of your automation.</p>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold text-zinc-900">Our Promise</h2>
            <p className="mt-4 text-lg text-zinc-600">
              When you work with Dumpster Systems AI, you&apos;re not just getting software. You&apos;re getting
              a partner who&apos;s invested in your success. We&apos;ll help you identify the biggest opportunities
              for automation in your business, implement solutions that actually work, and support you
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to transform your business?</h2>
          <p className="mt-4 text-lg text-blue-100">Let&apos;s talk about how automation can help you grow.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50">Get Your Free Consultation</Link>
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
