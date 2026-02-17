import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "The visa process for my Master's in the UK was seamless. NaijaTravels guided me through every document. I got my visa in 3 weeks!",
    name: "Chiamaka Adebayo",
    role: "Student, UK",
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Best holiday ever! The Zanzibar package was affordable and the hotel was exactly as pictured. My family and I had an amazing time.",
    name: "Emeka Okafor",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Excellent customer service. They helped me rebook my flight when I missed it without charging exorbitant fees. Highly recommended!",
    name: "Aisha Bello",
    role: "Frequent Traveler",
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=200&auto=format&fit=crop"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Travelers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative group">
              <Quote className="w-10 h-10 text-gray-100 absolute top-6 right-6 group-hover:text-blue-50 transition-colors" />
              
              <p className="text-gray-600 italic mb-8 z-10 relative">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
