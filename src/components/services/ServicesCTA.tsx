import { Button } from '../ui/button'

export function ServicesCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <section className="bg-blue-600 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/30">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready for your next journey?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Schedule a private consultation with our travel experts today and let us craft a journey that reflects your standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-10 h-14 font-bold text-base shadow-lg shadow-white/10">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white rounded-xl px-10 h-14 font-bold text-base backdrop-blur-sm">
              Contact Lagos Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
