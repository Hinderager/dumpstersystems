import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how dumpster rental companies are saving time and growing revenue with Dumpster Systems AI automation solutions.",
  alternates: {
    canonical: "https://dumpstersystems.ai/case-studies",
  },
};

const caseStudies = [
  {
    company: "Metro Dumpster Services",
    location: "Dallas, TX",
    fleet: "45 dumpsters",
    challenge: "Missing calls after hours and losing leads to competitors",
    solution: "AI Receptionist + Smart Website with Online Booking",
    results: [
      "37% increase in booked jobs",
      "95% of calls answered within 3 rings",
      "Saved 25 hours/week on phone calls",
      "$8,500 additional monthly revenue",
    ],
    quote: "We were losing so many leads to after-hours calls. Now our AI receptionist captures every opportunity, and customers can book online anytime. It paid for itself in the first month.",
    author: "Mike Johnson, Owner",
  },
  {
    company: "Green Valley Roll-Off",
    location: "Phoenix, AZ",
    fleet: "78 dumpsters",
    challenge: "Inefficient routing costing thousands in fuel and driver time",
    solution: "Route Optimization + Automated Dispatching + Employee App",
    results: [
      "28% reduction in fuel costs",
      "3 additional deliveries per driver per day",
      "Real-time job tracking for customers",
      "$12,000 monthly savings",
    ],
    quote: "The route optimization alone was a game changer. Our drivers are happier, our customers get faster service, and we're saving a fortune on fuel.",
    author: "Sarah Chen, Operations Manager",
  },
  {
    company: "Quick Drop Dumpsters",
    location: "Atlanta, GA",
    fleet: "120 dumpsters",
    challenge: "Manual billing causing payment delays and cash flow issues",
    solution: "Automated Billing + CRM + Customer Portal",
    results: [
      "Average payment time reduced from 45 to 12 days",
      "92% of invoices paid online",
      "Zero billing errors in 6 months",
      "15 hours/week saved on admin work",
    ],
    quote: "Getting paid used to be our biggest headache. Now invoices go out automatically, customers pay online, and everything syncs with QuickBooks. I finally have time to focus on growth.",
    author: "David Williams, Owner",
  },
];

export default function CaseStudiesPage() {
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
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">Case Studies</h1>
          <p className="mt-6 text-xl text-zinc-600">Real results from real dumpster rental companies using our automation solutions.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.company} className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">Case Study #{index + 1}</span>
                <span>{study.location}</span>
                <span>{study.fleet}</span>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-zinc-900">{study.company}</h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">The Challenge</h3>
                  <p className="mt-2 text-lg text-zinc-700">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Our Solution</h3>
                  <p className="mt-2 text-lg text-zinc-700">{study.solution}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Results</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {study.results.map((result) => (
                    <div key={result} className="rounded-lg bg-green-50 p-4">
                      <p className="font-semibold text-green-800">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="mt-8 border-l-4 border-blue-600 pl-6">
                <p className="text-lg italic text-zinc-700">&ldquo;{study.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-zinc-900">— {study.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to be our next success story?</h2>
          <p className="mt-4 text-lg text-blue-100">Schedule a free consultation to see how we can help your business.</p>
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
