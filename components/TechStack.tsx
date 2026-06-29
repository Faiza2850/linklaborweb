const stack = [
  {
    name: 'Flutter',
    role: 'Cross-Platform Frontend',
    desc: 'One codebase for iOS and Android. Smooth, native-performance UI.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    emoji: '📱',
  },
  {
    name: 'Node.js + Express',
    role: 'REST API Backend',
    desc: 'Scalable server handling all business logic, authentication, and data operations.',
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
    emoji: '⚙️',
  },
  {
    name: 'MySQL',
    role: 'Relational Database',
    desc: 'Structured storage for user data, job listings, applications, and work history.',
    color: 'from-orange-500/20 to-orange-600/10',
    border: 'border-orange-500/30',
    emoji: '🗄️',
  },
  {
    name: 'Google Gemini 2.5 Flash',
    role: 'AI Chatbot Engine',
    desc: 'Live context-aware AI assistant with real backend data integration.',
    color: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
    emoji: '🤖',
  },
  {
    name: 'Urdu TTS',
    role: 'Accessibility Layer',
    desc: 'Text-to-speech in Urdu throughout registration for low-literacy workers.',
    color: 'from-saffron/20 to-yellow-600/10',
    border: 'border-saffron/30',
    emoji: '🔊',
  },
  {
    name: 'CNIC Verification',
    role: 'Admin-Backed Trust System',
    desc: 'Admin panel verifies user identities, manages disputes, and governs the platform.',
    color: 'from-red-500/20 to-red-600/10',
    border: 'border-red-500/30',
    emoji: '🛡️',
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-saffron font-semibold text-sm uppercase tracking-widest text-center mb-4">
          Technology
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy text-center mb-6 leading-tight">
          Built with the right tools
        </h2>
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-16">
          A modern, production-ready tech stack designed for reliability, scalability, and accessibility.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map(({ name, role, desc, color, border, emoji }) => (
            <div
              key={name}
              className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-6 card-hover`}
            >
              <span className="text-3xl mb-4 block">{emoji}</span>
              <p className="text-saffron text-xs font-semibold uppercase tracking-widest mb-1">
                {role}
              </p>
              <h3 className="font-display font-bold text-navy text-xl mb-2">{name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture note */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            LinkLabour follows a clean{' '}
            <span className="text-navy font-semibold">3-tier architecture</span> —
            Flutter frontend communicates with Node.js REST API, which manages a normalized
            MySQL database. Admin panel provides governance and verification workflow
            separate from the worker/customer-facing app.
          </p>
        </div>
      </div>
    </section>
  )
}
