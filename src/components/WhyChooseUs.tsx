import { Headphones, ShieldCheck, CreditCard } from 'lucide-react'

const features = [
  {
    title: '24/7 Local Support',
    description: 'Our Lagos and Abuja teams are always available to assist you, no matter the time zone.',
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    bg: 'bg-blue-100'
  },
  {
    title: 'Trusted & Accredited',
    description: 'Licensed by IATA and partner to major global airlines for best-value guarantees.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    bg: 'bg-blue-100'
  },
  {
    title: 'Flexible Payment Plans',
    description: 'Book now and pay in installments with our "Travel Now, Pay Small Small" option.',
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    bg: 'bg-blue-100'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy Traveler" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop" 
                alt="Venice Canal" 
                className="hidden md:block rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-[200px]">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Visa Success Rate</p>
                  <p className="text-lg font-bold text-gray-900">98.9%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Why Choose Us</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Travel Without the Stress
            </h2>
            <p className="text-gray-600 mb-10 text-lg hidden md:block">
              We don't just book tickets; we design experiences. From the moment you think about traveling until you're back home, we handle all the complexities so you can focus on making memories.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${feature.bg} flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
