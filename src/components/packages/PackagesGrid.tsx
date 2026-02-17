import { PackageCard } from './PackageCard'
import type { PackageCardProps } from './PackageCard'
import { ChevronDown } from 'lucide-react'

const MOCK_PACKAGES: PackageCardProps[] = [
  {
    type: 'holiday',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop', // Dubai
    title: 'Dubai Summer Special',
    location: 'UAE',
    durationOrDegree: '7 Days, 6 Nights',
    price: '₦850,000',
    description: 'Experience the luxury of Dubai with our all-inclusive summer package including desert safari and cruise.',
    tags: ['Visa Included']
  },
  {
    type: 'study',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', // University of Hertfordshire - Keep if working, User didn't complain? Wait, user complained about Dubai and Toronto. I'll replace Toronto with this if it works or Paris.
    title: 'University of Hertfordshire',
    location: 'UK',
    durationOrDegree: 'MSc Management',
    price: '₦3,000,000',
    description: 'Advance your career with a Master\'s degree. 2-year work visa opportunity post-graduation.',
    tags: []
  },
  {
    type: 'holiday',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2020&auto=format&fit=crop', // Zanzibar
    title: 'Zanzibar Beach Escape',
    location: 'Tanzania',
    durationOrDegree: '5 Days',
    price: '₦650,000',
    description: 'Relax on pristine white sands and enjoy the vibrant culture of Stone Town.',
    tags: []
  },
  {
    type: 'study',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop', // Reusing Paris image as Toronto fallback
    title: 'University of Toronto',
    location: 'Canada',
    durationOrDegree: 'BSc Computer Science',
    price: '₦4,500,000',
    description: 'Top-ranked global university. Partial scholarships available for high-achieving Nigerian students.',
    tags: ['Scholarship']
  },
  {
    type: 'holiday',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop', // Seychelles
    title: 'Seychelles Honeymoon',
    location: 'Seychelles',
    durationOrDegree: '6 Days',
    price: '₦1,200,000',
    description: 'The ultimate romantic getaway. Private villas, crystal clear waters, and unforgettable sunsets.',
    tags: []
  },
  {
    type: 'study',
    image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop', // Ireland School
    title: 'Dublin Business School',
    location: 'Ireland',
    durationOrDegree: 'MBA International',
    price: '₦2,800,000',
    description: 'Study in the heart of Dublin. Affordable tuition fees and great part-time work options.',
    tags: []
  }
]

export function PackagesGrid() {
  return (
    <div>
      {/* Grid Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Showing <span className="font-bold text-gray-900">8</span> of <span className="font-bold text-gray-900">24</span> packages</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-sm font-medium hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {MOCK_PACKAGES.map((pkg, i) => (
          <PackageCard key={i} {...pkg} />
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all hover:shadow-lg shadow-sm">
          Load More Packages <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
