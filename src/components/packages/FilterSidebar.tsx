import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState(2500000)

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-gray-900">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" /> Filters
        </h3>
        <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors">Reset</button>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Type of Trip */}
        <div>
          <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">Type of Trip</h4>
          <div className="space-y-3">
            {['Holiday Packages', 'Study Abroad'].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all"
                    defaultChecked
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors font-medium text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-100 w-full" />

        {/* Region */}
        <div>
          <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">Region</h4>
          <div className="space-y-3">
            {['Europe & UK', 'North America', 'Middle East', 'Africa', 'Asia Pacific'].map((region) => (
              <label key={region} className="flex items-center gap-3 cursor-pointer group">
                 <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors font-medium text-sm">{region}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-100 w-full" />

        {/* Budget Range */}
        <div>
          <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 sm:mb-6">Budget Range</h4>
          <div className="space-y-6">
            <div className="relative pt-2">
              <input 
                type="range" 
                min="100000" 
                max="5000000" 
                step="100000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:shadow-md"
              />
              <div className="flex justify-between text-xs font-bold text-gray-400 mt-3">
                <span>₦100k</span>
                <span>₦5M+</span>
              </div>
            </div>

            <div className="bg-white border border-blue-100 rounded-xl p-4 text-center shadow-sm">
              <span className="text-sm text-gray-500 block mb-1">Up to</span>
              <span className="text-2xl font-bold text-blue-600">₦{priceRange.toLocaleString()}</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-md shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:scale-[1.02]">
              Show 24 Results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
