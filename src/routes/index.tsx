import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { SearchCard } from '../components/SearchCard'
import { Services } from '../components/Services'
import { Destinations } from '../components/Destinations'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { Testimonials } from '../components/Testimonials'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SearchCard />
        <Services />
        <Destinations />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
