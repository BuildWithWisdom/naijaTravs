import { Button } from './ui/button'

export function Hero() {
  return (
    <div className="relative mb:pt-32 pb-32 md:pb-48 flex items-center min-h-[600px] md:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Airplane view over clouds"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <span className="bg-orange-500 rounded-full p-1 w-5 h-5 flex items-center justify-center text-[10px]">✨</span>
            No. 1 Travel Agency in Nigeria
          </div>
          
          <h1 className="text-2xl min-[600px]:text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Your Gateway to
            Global Adventures
          </h1>
          
          <p className="hidden min-[330px]:block text-sm md:text-[18px] text-gray-100 mb-10 max-w-xl leading-relaxed drop-shadow-sm font-medium">
            Experience seamless travel planning from Lagos to the world. We specialize in luxury holiday packages, stress-free visa procurement, and study abroad placements.
          </p>
          
          <div className="flex flex-col min-[340px]:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 sm:px-6 h-auto min-h-[48px] text-sm font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105 hover:shadow-xl w-full min-[450px]:w-auto whitespace-normal sm:whitespace-nowrap">
              View Packages <span className="ml-2 hidden sm:inline">→</span>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-md px-4 sm:px-6 text-sm backdrop-blur-md transition-all hover:scale-105 w-full min-[450px]:w-auto whitespace-normal sm:whitespace-nowrap">
              <span className="mr-2">▶</span> Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
