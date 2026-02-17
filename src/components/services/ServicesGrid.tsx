import { Briefcase, PlaneTakeoff, Package, MessagesSquare, ShieldCheck, LayoutGrid, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Visa Processing',
    description: 'Stress-free applications for UK, US, Canada, Schengen, and more. Our 98.9% success rate is built on meticulous documentation and local expert guidance.',
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    linkText: 'Start Application',
    href: '#'
  },
  {
    title: 'Flight Ticketing',
    description: 'Exclusive First and Business class focus. We secure priority seating and competitive rates on major carriers with dedicated local support for every flight.',
    icon: <PlaneTakeoff className="w-5 h-5 text-blue-600" />,
    linkText: 'Find Flights',
    href: '#'
  },
  {
    title: 'Travel Packages',
    description: 'Curated luxury getaways from Lagos to Dubai, Maldives, and Paris. Hand-picked hotels and private tours designed specifically for the premium traveler.',
    icon: <Package className="w-5 h-5 text-blue-600" />,
    linkText: 'Explore Packages',
    href: '#'
  },
  {
    title: 'Travel Consultation',
    description: 'Expert advice on complex itinerary planning. Whether for business or education relocation, we provide strategic logistics and route optimization.',
    icon: <MessagesSquare className="w-5 h-5 text-blue-600" />,
    linkText: 'Speak to Expert',
    href: '#'
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive international coverage for ultimate peace of mind. Protect your health and luggage with global policies recognized by major embassies.',
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    linkText: 'Get Covered',
    href: '#'
  },
  {
    title: 'Corporate Travel',
    description: 'Bespoke solutions for Nigerian businesses. Managed travel spending, executive concierge services, and 24/7 priority support for your staff.',
    icon: <LayoutGrid className="w-5 h-5 text-blue-600" />,
    linkText: 'Business Inquiry',
    href: '#'
  }
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Bespoke Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Travel Redefined for Excellence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We bridge the gap between Nigerian hospitality and global travel standards, providing a seamless experience from departure to return.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                   {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <a 
                href={service.href}
                className="inline-flex items-center text-blue-600 text-sm font-bold group/link"
              >
                {service.linkText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
