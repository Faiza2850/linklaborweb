'use client'

import { useState } from 'react'
import { UserPlus, Search, Handshake, ClipboardList, Users, CheckSquare } from 'lucide-react'

const workerSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Register with CNIC',
    desc: 'Create your verified profile. Upload your CNIC for identity verification. Use Urdu TTS guidance if needed.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Browse & Apply for Jobs',
    desc: 'Find jobs near you filtered by skill category and location. Get real-time alerts when new jobs are posted.',
  },
  {
    step: '03',
    icon: Handshake,
    title: 'Get Hired & Build Reputation',
    desc: 'Connect with customers, negotiate through in-app chat, complete the job, and earn your rating.',
  },
]

const customerSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Post Your Job',
    desc: 'Create a job listing with your requirements, location, budget, and schedule. Takes under 2 minutes.',
  },
  {
    step: '02',
    icon: Users,
    title: 'Browse Verified Workers',
    desc: 'Review worker profiles with ratings, skills, and verified CNIC. Filter by area and skill category.',
  },
  {
    step: '03',
    icon: CheckSquare,
    title: 'Hire & Track Progress',
    desc: 'Chat with workers, agree on terms, hire, and manage everything through the app.',
  },
]

export default function HowItWorks() {
  const [tab, setTab] = useState<'worker' | 'customer'>('worker')
  const steps = tab === 'worker' ? workerSteps : customerSteps

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-saffron font-semibold text-sm uppercase tracking-widest text-center mb-4">
          How It Works
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy text-center mb-6 leading-tight">
          Simple. Fast. Trusted.
        </h2>
        <p className="text-gray-500 text-center text-lg max-w-xl mx-auto mb-12">
          Whether you're a worker or a customer, getting started takes minutes.
        </p>

        {/* Tab toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-cream rounded-full p-1 flex gap-1">
            <button
              onClick={() => setTab('worker')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                tab === 'worker'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-gray-500 hover:text-navy'
              }`}
            >
              I\'m a Worker
            </button>
            <button
              onClick={() => setTab('customer')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                tab === 'customer'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-gray-500 hover:text-navy'
              }`}
            >
              I\'m a Customer
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-saffron/30 via-saffron to-saffron/30" />

          {steps.map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="relative text-center">
              {/* Step number circle */}
              <div className="relative w-20 h-20 rounded-full bg-navy border-4 border-saffron mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Icon className="text-saffron" size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-saffron text-navy text-xs font-bold flex items-center justify-center">
                  {step.slice(1)}
                </span>
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#download" className="btn-primary text-base px-10 py-4">
            {tab === 'worker' ? 'Register as a Worker' : 'Post Your First Job'} →
          </a>
        </div>
      </div>
    </section>
  )
}
