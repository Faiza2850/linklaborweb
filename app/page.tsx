import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Stats />
      <TechStack />
      <Download />
      <Footer />
    </main>
  )
}
