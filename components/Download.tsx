import { Smartphone, Apple } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="section-padding bg-navy relative overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
        style={{ background: 'radial-gradient(ellipse, #F5A623 0%, transparent 70%)' }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-6">
          Download Now
        </p>
        <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white leading-tight mb-6">
          Pakistan ka kaam,
          <br />
          <span className="text-gradient">ab haath mein.</span>
        </h2>
        <p className="text-white/60 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Join thousands of workers and customers already using LinkLabour to connect,
          work, and grow — across Pakistan.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-navy font-semibold px-8 py-4 rounded-2xl hover:bg-saffron transition-colors shadow-lg hover:shadow-saffron/25 group"
          >
            <Smartphone size={22} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-xs opacity-60">Download on</p>
              <p className="text-base font-bold">Google Play</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors shadow-lg group"
          >
            <Apple size={22} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-xs opacity-60">Download on</p>
              <p className="text-base font-bold">App Store</p>
            </div>
          </a>
        </div>

        <p className="text-white/30 text-sm">
          Free to download. Free to register. No middleman fees.
        </p>
      </div>
    </section>
  )
}
