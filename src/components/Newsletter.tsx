import { Button } from './ui/button'
import { Input } from './ui/input'

export function Newsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Miss the Next Deal!
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 25,000+ Nigerian travelers receiving exclusive flight deals and travel tips directly in their inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-12">
              Subscribe
            </Button>
          </form>
          
          <p className="text-blue-200 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
