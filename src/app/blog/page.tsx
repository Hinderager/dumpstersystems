import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and insights for dumpster rental business owners looking to automate operations and grow their company.",
};

const posts = [
  {
    title: "5 Signs Your Dumpster Rental Business Needs Automation",
    excerpt: "Discover the telltale signs that it's time to automate your operations and stop losing money to inefficient processes.",
    category: "Business Growth",
    date: "December 15, 2024",
    readTime: "5 min read",
    slug: "signs-your-business-needs-automation",
  },
  {
    title: "How AI Receptionists Are Changing the Dumpster Rental Industry",
    excerpt: "Learn how AI-powered phone systems are helping dumpster rental companies capture more leads and provide better customer service.",
    category: "Technology",
    date: "December 10, 2024",
    readTime: "7 min read",
    slug: "ai-receptionists-dumpster-rental",
  },
  {
    title: "The Complete Guide to Route Optimization for Dumpster Deliveries",
    excerpt: "Everything you need to know about optimizing your delivery routes to save fuel, time, and increase daily capacity.",
    category: "Operations",
    date: "December 5, 2024",
    readTime: "10 min read",
    slug: "route-optimization-guide",
  },
  {
    title: "How to Get More Google Reviews for Your Dumpster Rental Company",
    excerpt: "Proven strategies for collecting more positive reviews and building a stellar online reputation.",
    category: "Marketing",
    date: "November 28, 2024",
    readTime: "6 min read",
    slug: "get-more-google-reviews",
  },
  {
    title: "Automated Billing: Get Paid Faster and Reduce Admin Work",
    excerpt: "How automated invoicing and payment collection can transform your cash flow and free up hours every week.",
    category: "Finance",
    date: "November 20, 2024",
    readTime: "8 min read",
    slug: "automated-billing-guide",
  },
  {
    title: "Building a Smart Website That Books Jobs While You Sleep",
    excerpt: "Why online booking is essential for modern dumpster rental companies and how to implement it effectively.",
    category: "Technology",
    date: "November 15, 2024",
    readTime: "6 min read",
    slug: "smart-website-online-booking",
  },
];

export default function BlogPage() {
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
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900">Blog</h1>
          <p className="mt-6 text-xl text-zinc-600">Tips and insights for growing your dumpster rental business with automation.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">{post.category}</span>
                  <span className="text-zinc-500">{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-zinc-900 hover:text-blue-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-zinc-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-zinc-500">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-zinc-900">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-zinc-600">Get the latest automation tips and industry insights delivered to your inbox.</p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-zinc-300 px-6 py-3 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
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
