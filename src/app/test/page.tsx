"use client";

import { useEffect, useState, useRef } from "react";

export default function TestPage() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalHeight = windowHeight * 6;
  const progress = Math.min(scrollY / (totalHeight - windowHeight), 1);

  const section1Progress = Math.min(Math.max((progress - 0) / 0.2, 0), 1);
  const section2Progress = Math.min(Math.max((progress - 0.2) / 0.2, 0), 1);
  const section3Progress = Math.min(Math.max((progress - 0.4) / 0.2, 0), 1);
  const section4Progress = Math.min(Math.max((progress - 0.6) / 0.2, 0), 1);
  const section5Progress = Math.min(Math.max((progress - 0.8) / 0.2, 0), 1);

  return (
    <div ref={containerRef} style={{ height: totalHeight }} className="relative bg-zinc-950">
      <div className="fixed inset-0 overflow-hidden">
        <BackgroundGradient progress={progress} />
        <FloatingParticles scrollY={scrollY} />
        <ProgressLine progress={progress} />
        <StageIndicators progress={progress} />
        <Section1 progress={section1Progress} scrollY={scrollY} section2Progress={section2Progress} />
        <Section2 progress={section2Progress} scrollY={scrollY} section3Progress={section3Progress} />
        <Section3 progress={section3Progress} section4Progress={section4Progress} />
        <Section4 progress={section4Progress} scrollY={scrollY} section5Progress={section5Progress} />
        <Section5 progress={section5Progress} scrollY={scrollY} />
        <ScrollIndicator progress={progress} />
      </div>
    </div>
  );
}

function BackgroundGradient({ progress }: { progress: number }) {
  return (
    <div
      className="absolute inset-0 transition-all duration-700"
      style={{
        background: `radial-gradient(ellipse at ${30 + progress * 40}% ${20 + progress * 60}%,
          rgba(59, 130, 246, 0.15) 0%,
          rgba(139, 92, 246, 0.1) 25%,
          rgba(236, 72, 153, 0.05) 50%,
          transparent 70%)`
      }}
    />
  );
}

function FloatingParticles({ scrollY }: { scrollY: number }) {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: 2 + (i % 4) * 2,
            height: 2 + (i % 4) * 2,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 23 + scrollY * (0.02 + (i % 5) * 0.01)) % 120 - 10}%`,
            opacity: 0.1 + (i % 3) * 0.1,
          }}
        />
      ))}
    </>
  );
}

function ProgressLine({ progress }: { progress: number }) {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-1 bg-zinc-800 rounded-full overflow-hidden">
      <div
        className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-300"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}

function StageIndicators({ progress }: { progress: number }) {
  const stages = ["Lead", "Capture", "Nurture", "Schedule", "Deliver"];
  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-12">
      {stages.map((label, i) => (
        <div key={label} className="flex items-center gap-3">
          <div
            className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
              progress > i * 0.2
                ? "bg-gradient-to-r from-blue-500 to-purple-500 border-transparent scale-110"
                : "border-zinc-600 bg-transparent"
            }`}
          />
          <span className={`text-xs font-medium transition-all duration-500 ${
            progress > i * 0.2 ? "text-white" : "text-zinc-600"
          }`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ScrollIndicator({ progress }: { progress: number }) {
  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity: 1 - progress * 3 }}
    >
      <span className="text-zinc-500 text-sm">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-zinc-500 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

function Section1({ progress, scrollY, section2Progress }: { progress: number; scrollY: number; section2Progress: number }) {
  const sources = ["Phone Call", "Email", "Facebook", "Google", "Text"];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-500"
      style={{
        opacity: progress < 1 ? 1 - progress * 0.5 : 0.5 - (section2Progress * 0.5),
        transform: `translateY(${progress * -100}px)`,
      }}
    >
      <div className="text-center max-w-4xl px-8">
        <div className="mb-8 relative h-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${20 + i * 15}%`,
                top: -60 - i * 20,
                transform: `translateY(${Math.min(progress * 200, 100 + i * 10)}px) rotate(${-15 + i * 8}deg)`,
                opacity: Math.min(progress * 2, 1),
                transition: `all ${0.5 + i * 0.1}s ease-out`
              }}
            >
              {"📱📧💬🔍📞"[i]}
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={i + 10}
              className="absolute text-3xl"
              style={{
                right: `${15 + i * 20}%`,
                top: -40 - i * 30,
                transform: `translateY(${Math.min(progress * 180, 80 + i * 15)}px)`,
                opacity: Math.min(progress * 1.5, 1),
                transition: `all ${0.6 + i * 0.15}s ease-out`
              }}
            >
              🌐
            </div>
          ))}
        </div>
        <h1
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
          style={{
            transform: `scale(${1 + progress * 0.05})`,
            opacity: 1 - progress * 0.3
          }}
        >
          Leads Pour In
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8">
          Phone calls, website forms, Facebook messages, Google searches...
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {sources.map((source, i) => (
            <div
              key={source}
              className="px-6 py-3 bg-zinc-800/50 backdrop-blur rounded-full border border-zinc-700/50 text-zinc-300"
              style={{
                transform: `translateY(${Math.sin((scrollY * 0.01) + i) * 10}px)`,
                opacity: 0.7 + Math.sin((scrollY * 0.02) + i) * 0.3
              }}
            >
              {"📞📧💬🔍📱"[i]} {source}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section2({ progress, scrollY, section3Progress }: { progress: number; scrollY: number; section3Progress: number }) {
  const stats = [
    { icon: "⚡", label: "Instant Response", value: "<1 sec" },
    { icon: "📊", label: "Data Captured", value: "100%" },
    { icon: "🎯", label: "Lead Score", value: "Auto" }
  ];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: progress > 0 ? Math.min(progress * 2, 1) * (1 - section3Progress) : 0,
        transform: `translateY(${(1 - progress) * 100}px)`,
      }}
    >
      <div className="text-center max-w-4xl px-8">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-500/30"
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          />
          <div
            className="absolute inset-4 rounded-full border-4 border-purple-500/40"
            style={{ transform: `rotate(${-scrollY * 0.15}deg)` }}
          />
          <div
            className="absolute inset-8 rounded-full border-4 border-pink-500/50"
            style={{ transform: `rotate(${scrollY * 0.2}deg)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="text-7xl"
              style={{ transform: `scale(${1 + Math.sin(scrollY * 0.02) * 0.1})` }}
            >
              🤖
            </div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 45 + scrollY * 0.5}deg) translateX(${80 + Math.sin(scrollY * 0.05 + i) * 20}px)`,
                opacity: 0.5 + Math.sin(scrollY * 0.03 + i) * 0.5
              }}
            />
          ))}
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          AI Captures Every Lead
        </h2>
        <p className="text-xl text-zinc-400 mb-8">
          24/7 instant response. Never miss another opportunity.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map((item, i) => (
            <div
              key={item.label}
              className="bg-zinc-800/60 backdrop-blur rounded-2xl p-4 border border-zinc-700/50"
              style={{ transform: `translateY(${Math.sin((scrollY * 0.02) + i * 2) * 8}px)` }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section3({ progress, section4Progress }: { progress: number; section4Progress: number }) {
  const messages = [
    { from: "user", text: "I need a dumpster for a kitchen remodel", delay: 0.1 },
    { from: "ai", text: "Perfect! A 10-yard dumpster is ideal for kitchen remodels. When would you like it delivered?", delay: 0.3 },
    { from: "user", text: "This Saturday morning would be great", delay: 0.5 },
    { from: "ai", text: "Saturday 8-10 AM works! You are all set. Confirmation text coming your way. Total: $350 for 7 days.", delay: 0.7 }
  ];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: progress > 0 ? Math.min(progress * 2, 1) * (1 - section4Progress) : 0,
        transform: `translateY(${(1 - progress) * 100}px)`,
      }}
    >
      <div className="text-center max-w-5xl px-8">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">
          AI Nurtures the Relationship
        </h2>
        <div className="max-w-lg mx-auto bg-zinc-900/80 backdrop-blur rounded-3xl border border-zinc-700/50 p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-700/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl">🤖</div>
            <div>
              <div className="font-semibold text-white">Dumpster AI Assistant</div>
              <div className="text-xs text-green-400">● Online 24/7</div>
            </div>
          </div>
          <div className="space-y-4 text-left">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                style={{
                  opacity: progress > msg.delay ? 1 : 0,
                  transform: `translateX(${progress > msg.delay ? 0 : (msg.from === "user" ? 20 : -20)}px)`,
                  transition: "all 0.5s ease-out"
                }}
              >
                <div className={`${msg.from === "user" ? "bg-blue-600 rounded-br-sm" : "bg-zinc-700 rounded-bl-sm"} rounded-2xl px-4 py-2 max-w-xs`}>
                  <p className="text-white text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-1" style={{ opacity: progress > 0.85 ? 0.5 : 0 }}>
            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4({ progress, scrollY, section5Progress }: { progress: number; scrollY: number; section5Progress: number }) {
  const notifications = [
    { icon: "📱", label: "Customer Notified", sub: "Confirmation text sent", delay: 0.4 },
    { icon: "🚛", label: "Driver Assigned", sub: "Route optimized automatically", delay: 0.55 },
    { icon: "💳", label: "Payment Processed", sub: "Invoice auto-generated", delay: 0.7 }
  ];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: progress > 0 ? Math.min(progress * 2, 1) * (1 - section5Progress) : 0,
        transform: `translateY(${(1 - progress) * 100}px)`,
      }}
    >
      <div className="text-center max-w-5xl px-8">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-8">
          Automatically Scheduled
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div
            className="bg-zinc-900/80 backdrop-blur rounded-3xl border border-zinc-700/50 p-6 shadow-2xl"
            style={{ transform: `perspective(1000px) rotateY(${(progress - 0.5) * 10}deg)` }}
          >
            <div className="text-lg font-semibold text-white mb-4">December 2025</div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="text-xs text-zinc-500 py-1">{d}</div>
              ))}
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-300 ${
                    i === 20
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold scale-110 shadow-lg shadow-green-500/50"
                      : i < 18
                        ? "text-zinc-600"
                        : "text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="text-5xl" style={{ transform: `translateX(${Math.sin(scrollY * 0.03) * 10}px)`, opacity: progress > 0.3 ? 1 : 0 }}>➡️</div>
          <div className="space-y-4">
            {notifications.map((item) => (
              <div
                key={item.label}
                className="bg-zinc-900/80 backdrop-blur rounded-2xl border border-zinc-700/30 p-4 shadow-lg flex items-center gap-4"
                style={{
                  transform: `translateX(${progress > item.delay ? 0 : 50}px)`,
                  opacity: progress > item.delay ? 1 : 0,
                  transition: "all 0.5s ease-out"
                }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-xs text-zinc-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section5({ progress, scrollY }: { progress: number; scrollY: number }) {
  const stats = [
    { value: "0", label: "Phone Calls Made", icon: "📵" },
    { value: "0", label: "Hours on Admin", icon: "⏰" },
    { value: "$350", label: "Revenue Earned", icon: "💰" },
    { value: "100%", label: "Automated", icon: "🤖" }
  ];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: progress > 0 ? Math.min(progress * 2, 1) : 0,
        transform: `translateY(${(1 - progress) * 100}px)`,
      }}
    >
      <div className="text-center max-w-5xl px-8">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-8">
          You Just Show Up
        </h2>
        <p className="text-xl text-zinc-400 mb-12">The AI handled everything. You deliver the dumpster and get paid.</p>
        <div className="relative h-40 flex items-center justify-center">
          <div
            className="text-9xl"
            style={{ transform: `translateX(${(progress - 0.5) * 200}px)`, transition: "transform 1s ease-out" }}
          >
            🚛
          </div>
          <div
            className="absolute right-1/4 top-1/2 -translate-y-1/2 text-8xl"
            style={{ opacity: progress > 0.6 ? 1 : 0, transform: `scale(${progress > 0.6 ? 1 : 0.5})`, transition: "all 0.5s ease-out" }}
          >
            🗑️
          </div>
          {progress > 0.7 && [...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-pulse"
              style={{
                left: `${40 + i * 10}%`,
                top: `${10 + (i % 3) * 20}%`,
                transform: `translateY(${Math.sin(scrollY * 0.05 + i) * 20}px) rotate(${i * 15}deg)`,
              }}
            >
              💵
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          style={{ opacity: progress > 0.5 ? 1 : 0, transform: `translateY(${progress > 0.5 ? 0 : 30}px)`, transition: "all 0.5s ease-out 0.3s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur rounded-2xl p-6 border border-zinc-700/50">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12" style={{ opacity: progress > 0.8 ? 1 : 0, transform: `scale(${progress > 0.8 ? 1 : 0.9})`, transition: "all 0.5s ease-out 0.5s" }}>
          <a href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xl font-bold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
            Automate Your Business →
          </a>
        </div>
      </div>
    </div>
  );
}
