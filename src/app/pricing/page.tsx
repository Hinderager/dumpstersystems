import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for dumpster rental automation. Choose from Starter, Growth, or Enterprise plans to match your business needs.",
};

const plans = [
  {
    name: "Starter",
    price: "997",
    description: "Perfect for small operations looking to automate the basics.",
    features: [
      "AI Receptionist (100 calls/mo)",
      "Smart Website with Booking",
      "Basic CRM",
      "Email Support",
      "Monthly Reports",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "1,997",
    description: "For growing companies ready to scale operations efficiently.",
    features: [
      "AI Receptionist (500 calls/mo)",
      "Smart Website with Booking",
      "Full CRM & Customer Portal",
      "Route Optimization",
      "Automated Dispatching",
      "Review Management",
      "Priority Support",
      "Weekly Reports",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full automation suite for established operations.",
    features: [
      "Unlimited AI Receptionist",
      "Everything in Growth",
      "GPS Asset Tracking",
      "Employee Mobile App",
      "Custom Integrations",
      "Automated Billing",
      "Marketing Automation",
      "Dedicated Account Manager",
      "Custom Reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">Dumpster Systems AI</Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/services" className="text-zinc-600 hover:text-zinc-900">Services</Link>
            <Link href="/pricing" className="text-zinc-900 font-medium">Pricing</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-900">Contact</Link>
          </nav>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Get Started</Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">Simple, Transparent Pricing</h1>
          <p className="mt-6 text-xl text-zinc-600">Choose the plan that fits your business. All plans include setup and training.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border ${plan.popular ? 'border-blue-600 ring-2 ring-blue-600' : 'border-zinc-200'} bg-white p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold text-zinc-900">{plan.name}</h2>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-zinc-900">
                    {plan.price === "Custom" ? "" : "$"}{plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-zinc-600">/month</span>}
                </div>
                <p className="mt-4 text-zinc-600">{plan.description}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-zinc-600">
                      <span className="mr-3 text-green-500 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-full px-6 py-3 text-center font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-zinc-300 text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h2>
          <div className="mt-12 grid gap-8 text-left md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-zinc-900">Is there a setup fee?</h3>
              <p className="mt-2 text-zinc-600">No hidden fees. Setup and training are included in all plans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">Can I change plans later?</h3>
              <p className="mt-2 text-zinc-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">What&apos;s the contract length?</h3>
              <p className="mt-2 text-zinc-600">Month-to-month. No long-term commitments required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">Do you offer custom solutions?</h3>
              <p className="mt-2 text-zinc-600">Absolutely. Contact us for a custom quote tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to automate your business?</h2>
          <p className="mt-4 text-lg text-blue-100">Schedule a free demo and see how much time you could save.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50">Schedule Free Demo</Link>
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
