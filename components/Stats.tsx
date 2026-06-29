const stats = [
  { value: '80+', label: 'Cities Covered', sub: 'Across Pakistan' },
  { value: '60+', label: 'Skill Categories', sub: 'Plumber to Painter' },
  { value: '100%', label: 'CNIC Verified', sub: 'Every user' },
  { value: '24/7', label: 'AI Support', sub: 'Gemini-powered' },
]

const skills = [
  'Plumber', 'Electrician', 'Mason', 'Carpenter', 'Painter',
  'Domestic Help', 'Driver', 'Welder', 'Sanitation', 'Gardener',
  'Loader / Unloader', 'Agricultural Labour',
]

export default function Stats() {
  return (
    <section id="stats" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <p className="font-display font-extrabold text-5xl md:text-6xl text-saffron mb-1">
                {value}
              </p>
              <p className="text-white font-semibold text-base">{label}</p>
              <p className="text-white/40 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* Skill categories */}
        <div className="text-center mb-10">
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-4">
            60+ Skill Categories
          </p>
          <h3 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Every trade. Every city.
          </h3>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            From skilled craftsmen to domestic helpers — Pakistan's entire informal workforce, organized and accessible.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white/5 border border-white/10 text-white/80 text-sm px-5 py-2 rounded-full hover:border-saffron/50 hover:text-saffron transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
          <span className="bg-saffron/10 border border-saffron/30 text-saffron text-sm px-5 py-2 rounded-full">
            + 50 More
          </span>
        </div>
      </div>
    </section>
  )
}
