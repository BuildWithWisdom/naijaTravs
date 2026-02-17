import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PackagesHero } from '@/components/packages/PackagesHero'
import { FilterSidebar } from '@/components/packages/FilterSidebar'
import { PackagesGrid } from '@/components/packages/PackagesGrid'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

export const Route = createFileRoute('/packages')({
  component: PackagesPage,
})

function PackagesPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans text-gray-900">
      <Navbar />
      
      <main>
        <PackagesHero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button 
                onClick={() => setIsMobileFiltersOpen(true)}
                variant="outline" 
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </span>
                <span className="text-xs text-gray-500">Reset</span>
              </Button>
            </div>

            {/* Sidebar - Desktop & Mobile Drawer */}
            <aside className={`
              fixed inset-0 z-50 lg:z-10 bg-white lg:bg-transparent p-6 transition-transform duration-300 transform lg:transform-none lg:sticky lg:top-36 lg:block lg:w-3/12 lg:p-0 h-full lg:h-fit overflow-y-auto lg:overflow-visible
              ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-500">Close</button>
              </div>
              <FilterSidebar />
            </aside>

            {/* Main Content */}
            <div className="lg:w-9/12">
              <PackagesGrid />
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
      
      {/* Mobile Overlay */}
      {isMobileFiltersOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileFiltersOpen(false)}
        />
      )}
    </div>
  )
}
