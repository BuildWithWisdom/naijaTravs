import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ServicesHero } from '@/components/services/ServicesHero'
import { StatsBar } from '@/components/services/StatsBar'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { WhyChooseUsServices } from '@/components/services/WhyChooseUsServices'
import { ServicesCTA } from '@/components/services/ServicesCTA'
import { Newsletter } from '@/components/Newsletter'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <ServicesHero />
        <StatsBar />
        <ServicesGrid />
        <WhyChooseUsServices />
        <ServicesCTA />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
