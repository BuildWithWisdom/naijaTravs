import { Button } from '../ui/button'

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0a0a0b]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern office interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              EST. 2020 • Nigeria's Leading Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Premium Travel Experiences,{' '}
            <span className="text-blue-500 block">Rooted in Nigeria.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Local insight with global standards. Expertly curated journeys for the discerning Nigerian traveler. From Lagos to the world, we handle the details.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 font-semibold h-14">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white rounded-md px-8 font-semibold h-14 backdrop-blur-sm">
              Our Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
