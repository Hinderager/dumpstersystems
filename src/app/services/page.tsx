import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Services",
  description: "Explore our full suite of AI-powered automation services for dumpster rental companies. From AI receptionists to route optimization, we help you scale.",
};

const services = [
  {
    title: "AI Receptionist",
    description: "24/7 phone answering, appointment booking, and customer inquiries handled by AI. Never miss a call or lose a lead again.",
    features: ["24/7 availability", "Appointment scheduling", "FAQ handling", "Lead capture", "Call transcripts"],
    icon: "📞"
  },
  {
    title: "Smart Websites",
    description: "Modern websites with online booking so customers can schedule dumpster rentals anytime, day or night.",
    features: ["Online booking", "Mobile responsive", "SEO optimized", "Lead forms", "Service area maps"],
    icon: "🌐"
  },
  {
    title: "AI Messenger",
    description: "Automated text and chat responses that engage leads and answer questions instantly across all channels.",
    features: ["SMS automation", "Facebook Messenger", "Website chat", "Quick responses", "Lead qualification"],
    icon: "💬"
  },
  {
    title: "Route Optimization",
    description: "AI-powered route planning to minimize fuel costs and maximize daily deliveries and pickups.",
    features: ["Fuel savings", "Time optimization", "Multi-stop planning", "Traffic awareness", "Driver efficiency"],
    icon: "🗺️"
  },
  {
    title: "Employee App",
    description: "Custom mobile app for drivers and dispatchers to manage jobs, capture signatures, and update statuses on the go.",
    features: ["Job management", "Photo documentation", "Digital signatures", "Real-time updates", "Offline mode"],
    icon: "📱"
  },
  {
    title: "Custom Reporting",
    description: "Real-time dashboards and analytics to track revenue, jobs, driver performance, and business health.",
    features: ["Revenue tracking", "Job analytics", "Driver metrics", "Custom KPIs", "Automated reports"],
    icon: "📊"
  },
  {
    title: "CRM & Customer Portal",
    description: "Manage customer relationships and let clients view their orders, invoices, and rental history online.",
    features: ["Customer database", "Order history", "Online payments", "Self-service portal", "Communication logs"],
    icon: "👥"
  },
  {
    title: "GPS Asset Tracking",
    description: "Real-time dumpster location tracking with geofencing and inventory management to know where every asset is.",
    features: ["Live tracking", "Geofencing alerts", "Inventory counts", "Theft prevention", "Utilization reports"],
    icon: "📍"
  },
  {
    title: "Automated Billing",
    description: "Streamlined invoicing, payment collection, and QuickBooks integration to get paid faster.",
    features: ["Auto-invoicing", "Payment reminders", "QuickBooks sync", "Online payments", "Overdue tracking"],
    icon: "💳"
  },
  {
    title: "Automated Dispatching",
    description: "Smart job assignment that matches drivers to deliveries based on location, availability, and skills.",
    features: ["Smart matching", "Capacity planning", "Schedule optimization", "Driver notifications", "Load balancing"],
    icon: "🚛"
  },
  {
    title: "Review Management",
    description: "Automated review requests and reputation monitoring to build your online presence and attract more customers.",
    features: ["Review requests", "Google reviews", "Reputation monitoring", "Response templates", "Rating alerts"],
    icon: "⭐"
  },
  {
    title: "Marketing Automation",
    description: "Email campaigns, lead nurturing, and follow-ups that run on autopilot to keep your pipeline full.",
    features: ["Email campaigns", "Lead nurturing", "Follow-up sequences", "Re-engagement", "Performance tracking"],
    icon: "📧"
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">Dumpster Systems AI</Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/services" className="text-zinc-900 font-medium">Services</Link>
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900">Pricing</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-zinc-900">Contact</Link>
          </nav>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Get Started</Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">Our Services</h1>
          <p className="mt-6 text-xl text-zinc-600">Comprehensive automation solutions designed specifically for dumpster rental companies.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold text-zinc-900">{service.title}</h2>
                <p className="mt-3 text-zinc-600">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-zinc-600">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Not sure which services you need?</h2>
          <p className="mt-4 text-lg text-blue-100">Schedule a free consultation and we&apos;ll create a custom automation plan for your business.</p>
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
