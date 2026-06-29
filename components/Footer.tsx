export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-saffron rounded-lg flex items-center justify-center font-display font-black text-navy text-lg">
                LL
              </div>
              <span className="font-display font-bold text-xl text-white">
                Link<span className="text-saffron">Labour</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Pakistan's trusted digital platform connecting daily-wage workers with
              employers — transparently, efficiently, and safely.
            </p>
            <p className="text-white/30 text-xs mt-4">
              A Final Year Project by Tehmeena Akhtar & Faiza Fatima
              <br />
              UET Taxila — Department of Computer Science (2022–2026)
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'For Workers', 'For Customers', 'AI Chatbot'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-saffron text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Info</h4>
            <ul className="space-y-3">
              {['About', 'Privacy Policy', 'Terms of Use', 'Contact', 'Admin Panel'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-saffron text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © 2026 LinkLabour. Built with ❤️ for Pakistan's daily-wage workers.
          </p>
          <p className="text-white/20 text-xs">
            Supervised by Dr. Syed Muhammad Adnan — UET Taxila
          </p>
        </div>
      </div>
    </footer>
  )
}
