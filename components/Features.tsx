import {
  User, Briefcase, MessageSquare, MapPin,
  Bell, Star, CheckCircle, Bot, LayoutDashboard, Volume2
} from 'lucide-react'

const workerFeatures = [
  { icon: User, text: 'Verified profile with CNIC authentication' },
  { icon: MapPin, text: 'Location-based job discovery near you' },
  { icon: Bell, text: 'Real-time job alert notifications' },
  { icon: Volume2, text: 'Urdu Text-to-Speech for low-literacy users' },
  { icon: MessageSquare, text: 'In-app messaging with employers' },
  { icon: Star, text: 'Build your rating and work history' },
]

const customerFeatures = [
  { icon: Briefcase, text: 'Post jobs with requirements & budget' },
  { icon: CheckCircle, text: 'Browse verified worker profiles' },
  { icon: MapPin, text: 'Filter workers by area & skill' },
  { icon: MessageSquare, text: 'Negotiate directly with workers' },
  { icon: LayoutDashboard, text: 'Track applications & hiring status' },
  { icon: Star, text: 'Rate and review completed work' },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-saffron font-semibold text-sm uppercase tracking-widest text-center mb-4">
          Features
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy text-center mb-6 max-w-3xl mx-auto leading-tight">
          Built for both sides of the chowk
        </h2>
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-16">
          Whether you're looking for work or looking for workers, LinkLabour has you covered.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Workers Card */}
          <div className="bg-navy rounded-3xl p-8">
            <div className="w-12 h-12 rounded-xl bg-saffron/20 border border-saffron/30 flex items-center justify-center mb-6">
              <User className="text-saffron" size={22} />
            </div>
            <h3 className="font-display font-bold text-white text-2xl mb-2">For Workers</h3>
            <p className="text-white/60 text-sm mb-8">
              Register once, get found by hundreds of customers daily.
            </p>
            <ul className="space-y-4">
              {workerFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-saffron/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-saffron" />
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customers Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-brand/10 border border-emerald-brand/20 flex items-center justify-center mb-6">
              <Briefcase className="text-emerald-brand" size={22} />
            </div>
            <h3 className="font-display font-bold text-navy text-2xl mb-2">For Customers</h3>
            <p className="text-gray-500 text-sm mb-8">
              Find reliable, verified workers within minutes — not hours.
            </p>
            <ul className="space-y-4">
              {customerFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-emerald-brand" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Chatbot Feature */}
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-saffron/20">
          <div className="w-16 h-16 rounded-2xl bg-saffron flex items-center justify-center flex-shrink-0">
            <Bot className="text-navy" size={30} />
          </div>
          <div className="flex-1">
            <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">AI-Powered</p>
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
              LinkBot — Powered by Google Gemini 2.5 Flash
            </h3>
            <p className="text-white/70 leading-relaxed max-w-2xl">
              Our intelligent assistant answers questions, helps workers find jobs, guides customers
              through hiring — all in real-time with live backend data. Available in Urdu and English.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 bg-saffron/15 border border-saffron/30 text-saffron text-sm font-semibold px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
              Always Online
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
