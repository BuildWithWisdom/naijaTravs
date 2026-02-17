import { MapPin, ArrowRight } from 'lucide-react'

const destinations = [
  {
    title: 'Maldives Getaway',
    location: 'Male, Maldives',
    price: '₦1,250,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',
    tag: '7 Days'
  },
  {
    title: 'Dubai Luxury',
    location: 'Dubai, UAE',
    price: '₦850,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop',
    tag: '5 Days'
  },
  {
    title: 'Paris Romance',
    location: 'Paris, France',
    price: '₦1,500,000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',
    tag: '6 Days'
  },
  {
    title: 'London Explorer',
    location: 'London, UK',
    price: '₦1,100,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop',
    tag: '5 Days'
  },
  {
    title: 'Cape Town Adventure',
    location: 'Cape Town, SA',
    price: '₦950,000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2000&auto=format&fit=crop',
    tag: '6 Days'
  },
  {
    title: 'Tokyo Discovery',
    location: 'Tokyo, Japan',
    price: '₦2,100,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2000&auto=format&fit=crop',
    tag: '8 Days'
  }
]

export function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Trending Now</span>
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700">
            View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-3 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {destination.tag}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="pt-5 px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{destination.title}</h3>
                  <div className="flex items-center text-orange-500 gap-1 text-sm font-bold shrink-0">
                    <span className="text-sm">★</span> {destination.rating}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-1 stroke-[1.5]" /> 
                  <span className="truncate">{destination.location}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block mb-0.5">Starting from</span>
                    <span className="text-xl font-bold text-blue-600">{destination.price}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700">
            View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
