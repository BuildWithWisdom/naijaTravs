import { ShieldCheck, Headphones, Star } from 'lucide-react'

export function WhyChooseUsServices() {
  const features = [
    {
      title: 'Local Authority',
      description: 'Deep understanding of Nigerian visa requirements and embassy protocols.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Real-Time Assistance',
      description: 'Dedicated Lagos and Abuja teams available 24/7 for emergency travel needs.',
      icon: <Headphones className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Exclusivity Guaranteed',
      description: 'Direct relationships with luxury hotel chains and private aviation services.',
      icon: <Star className="w-5 h-5 text-blue-600" />
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Component */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                alt="Luxury SUV on a coastal road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Soft decorative elements to match the "glassmorphism" feel if any */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Component */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
              Why Discerning Nigerian Travelers Choose Us
            </h2>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-none">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
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
