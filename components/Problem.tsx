import { AlertCircle, Clock, ShieldOff, Frown } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Waqt ki Barbaadi',
    desc: 'Workers wait hours at chowks every morning — uncertain if they\'ll find work. Customers spend hours calling around.',
  },
  {
    icon: ShieldOff,
    title: 'Koi Verification Nahi',
    desc: 'No way to verify a worker\'s skills or identity. Both sides exposed to risk, fraud, and unreliability.',
  },
  {
    icon: AlertCircle,
    title: 'Beech Mein Dalal',
    desc: 'Middlemen exploit both workers and customers — taking cuts, inflating prices, and hiding opportunities.',
  },
  {
    icon: Frown,
    title: 'Ghar Ka Chulha',
    desc: 'For a daily-wage worker, no job today means the family doesn\'t eat tonight. This is a real crisis.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="text-saffron font-semibold text-sm uppercase tracking-widest text-center mb-4">
          The Real Problem
        </p>

        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy text-center mb-6 max-w-3xl mx-auto leading-tight">
          Pakistan ke 35 million daily-wage workers deserve better.
        </h2>

        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Informal labor has powered Pakistan for generations — but the system
          for finding work is broken, opaque, and exploitative.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-saffron/30 hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-saffron/10 transition-colors">
                <Icon className="text-red-400 group-hover:text-saffron transition-colors" size={22} />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bridge quote */}
        <div className="mt-16 bg-navy rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #F5A623 0%, transparent 70%)' }}
          />
          <p className="relative font-display font-bold text-white text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
            "A non-employed worker today may not be able to{' '}
            <span className="text-saffron">feed his family tonight.</span>"
          </p>
          <p className="relative text-white/40 text-sm mt-4">
            — The reality that drives LinkLabour
          </p>
        </div>
      </div>
    </section>
  )
}
