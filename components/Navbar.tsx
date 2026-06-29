'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Stats', href: '#stats' },
  { label: 'Technology', href: '#tech' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="LinkLabour logo"
            className="w-14 h-14 object-contain"
          />
          <span className="font-display font-bold text-xl text-white">
            Link<span className="text-saffron">Labour</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-saffron font-medium text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Download App
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-saffron font-medium border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a href="#download" className="btn-primary mt-4 inline-block text-center w-full text-sm">
            Download App
          </a>
        </div>
      )}
    </nav>
  )
}
