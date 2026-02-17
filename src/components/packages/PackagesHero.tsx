import { ArrowRight } from 'lucide-react'

export function PackagesHero() {
  return (
    <div className="bg-[#002B4D] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Pattern - subtle trees/nature overlay if possible, or just gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <h1 className="text-2xl min-[400px]:text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Find Your Next Adventure or Campus
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Discover world-class universities and breathtaking holiday destinations tailored for you.
        </p>
      </div>
    </div>
  )
}
