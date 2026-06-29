'use client'

import { ArrowDown, Shield, MapPin, Zap } from 'lucide-react'

const badges = [
  { icon: Shield, text: 'CNIC Verified Workers' },
  { icon: MapPin, text: '80+ Cities Covered' },
  { icon: Zap, text: 'Real-time AI Support' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F5A623 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Warm glow — the "chowk" sun effect */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-saffron/15 border border-saffron/30 text-saffron text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            Pakistan Ka Digital Labour Chowk
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Kaam dhundo.{' '}
            <br />
            Kaam do.{' '}
            <br />
            <span className="text-gradient">Digitally.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            LinkLabor connects verified daily-wage workers — plumbers, electricians,
            masons, carpenters and 60+ more skills — with customers across 80+ cities
            in Pakistan. No middleman. No waiting at the chowk.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#download" className="btn-primary text-base px-8 py-4">
              Download the App
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary text-base px-8 py-4"
            >
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <Icon size={14} className="text-saffron" />
                <span className="text-white/70 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: App mock UI */}
        <div className="relative flex justify-center">
          <div className="animate-float">
            <PhoneMockup />
          </div>

          {/* Floating cards */}
          <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-2xl p-4 w-48 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-brand flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              <div>
                <p className="text-navy font-semibold text-xs">Mohammad Ali</p>
                <p className="text-gray-500 text-xs">Electrician ⚡</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-saffron text-xs">★</span>
              ))}
              <span className="text-gray-500 text-xs ml-1">5.0</span>
            </div>
          </div>

          <div className="absolute bottom-16 -right-4 bg-navy border border-saffron/30 rounded-2xl shadow-2xl p-4 w-44">
            <p className="text-saffron text-xs font-semibold mb-1">Job Matched!</p>
            <p className="text-white text-xs">Plumber needed in Lahore</p>
            <p className="text-white/50 text-xs mt-1">2 mins ago</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-saffron transition-colors"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  )
}

function PhoneMockup() {
  const jobs = [
    { title: 'Plumber Needed', area: 'DHA, Lahore', price: 'Rs 1,500', color: 'bg-blue-500' },
    { title: 'Electrician', area: 'Gulberg, Lahore', price: 'Rs 2,000', color: 'bg-purple-500' },
    { title: 'House Painter', area: 'F-7, Islamabad', price: 'Rs 3,500', color: 'bg-orange-500' },
  ]

  return (
    <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-10" />

      {/* Status bar */}
      <div className="bg-navy h-8 flex items-end pb-1 px-6 justify-between">
        <span className="text-white text-[9px]">9:41</span>
        <span className="text-white text-[9px]">●●●</span>
      </div>

      {/* App screen */}
      <div className="bg-cream h-full px-4 pt-4 pb-8">
        {/* Search bar */}
        <div className="bg-white rounded-xl shadow px-3 py-2 mb-4 flex items-center gap-2">
          <MapPin size={12} className="text-saffron" />
          <span className="text-gray-400 text-[10px]">Find workers near you...</span>
        </div>

        <p className="text-navy font-display font-bold text-xs mb-3">Latest Job Postings</p>

        {/* Job cards */}
        {jobs.map((job) => (
          <div key={job.title} className="bg-white rounded-xl shadow-sm p-3 mb-2 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${job.color} flex items-center justify-center`}>
              <span className="text-white text-[10px] font-bold">{job.title[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-navy font-semibold text-[10px] truncate">{job.title}</p>
              <p className="text-gray-400 text-[9px]">{job.area}</p>
            </div>
            <span className="text-emerald-brand font-bold text-[10px]">{job.price}</span>
          </div>
        ))}

        {/* AI Chatbot bubble */}
        <div className="mt-4 bg-navy rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-saffron flex items-center justify-center text-navy text-[8px] font-bold">
              AI
            </div>
            <span className="text-white text-[9px] font-semibold">LinkBot (Gemini AI)</span>
          </div>
          <p className="text-white/70 text-[9px] leading-relaxed">
            Aapke area mein 3 verified electricians available hain. Shall I connect you?
          </p>
        </div>
      </div>
    </div>
  )
}
