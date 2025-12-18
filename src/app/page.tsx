import Link from "next/link";

const services = [
  { title: "AI Receptionist", description: "24/7 phone answering, appointment booking, and customer inquiries handled by AI.", icon: "Phone" },
  { title: "Smart Websites", description: "Modern websites with online booking so customers can schedule dumpster rentals anytime.", icon: "Globe" },
  { title: "AI Messenger", description: "Automated text and chat responses that engage leads and answer questions instantly.", icon: "Chat" },
  { title: "Route Optimization", description: "AI-powered route planning to minimize fuel costs and maximize daily deliveries.", icon: "Map" },
  { title: "Employee App", description: "Custom mobile app for drivers and dispatchers to manage jobs on the go.", icon: "Mobile" },
  { title: "Custom Reporting", description: "Real-time dashboards and analytics to track revenue, jobs, and performance.", icon: "Chart" },
  { title: "CRM and Customer Portal", description: "Manage customer relationships and let clients view their orders and invoices online.", icon: "Users" },
  { title: "GPS Asset Tracking", description: "Real-time dumpster location tracking with geofencing and inventory management.", icon: "Pin" },
  { title: "Automated Billing", description: "Streamlined invoicing, payment collection, and QuickBooks integration.", icon: "Credit" },
  { title: "Automated Dispatching", description: "Smart job assignment that matches drivers to deliveries based on location and availability.", icon: "Truck" },
  { title: "Review Management", description: "Automated review requests and reputation monitoring to build your online presence.", icon: "Star" },
  { title: "Marketing Automation", description: "Email campaigns, lead nurturing, and follow-ups that run on autopilot.", icon: "Mail" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-zinc-900">Dumpster Systems AI</div>
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
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">Dumpster Rental Automations</h1>
          <p className="mt-6 text-xl text-zinc-600">AI-powered solutions that help dumpster rental companies save time, reduce costs, and scale operations without adding headcount.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700 sm:w-auto">Schedule a Demo</Link>
            <Link href="/services" className="w-full rounded-full border border-zinc-300 bg-white px-8 py-3 text-lg font-medium text-zinc-900 hover:bg-zinc-50 sm:w-auto">View Services</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">Automation Solutions</h2>
            <p className="mt-4 text-lg text-zinc-600">Everything you need to run your dumpster rental business on autopilot.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to automate your dumpster rental business?</h2>
          <p className="mt-4 text-lg text-blue-100">Join other dumpster rental companies who are saving 20+ hours per week with our automation solutions.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50">Get Your Free Consultation</Link>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-xl font-bold text-zinc-900">Dumpster Systems AI</div>
            <nav className="flex gap-8">
              <Link href="/services" className="text-sm text-zinc-600 hover:text-zinc-900">Services</Link>
              <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</Link>
              <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900">About</Link>
              <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-zinc-500">2024 Dumpster Systems AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
