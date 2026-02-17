import { Plane, CheckCircle2, GraduationCap, Users } from 'lucide-react'

const serviceItems = [
  {
    title: 'Holiday Packages',
    description: 'Affordable and luxury vacation deals to Dubai, Zanzibar, Maldives, and more.',
    icon: <Plane className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50',
    linkText: 'View Packages',
    linkColor: 'text-blue-600'
  },
  {
    title: 'Visa Procurement',
    description: 'Expert assistance for UK, USA, Canada, and Schengen visa applications with high success rates.',
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    color: 'bg-green-50',
    linkText: 'Check Requirements',
    linkColor: 'text-green-600'
  },
  {
    title: 'Study Abroad',
    description: 'Admission processing and student visa support for top universities globally.',
    icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
    color: 'bg-yellow-50',
    linkText: 'Find Schools',
    linkColor: 'text-yellow-600'
  },
  {
    title: 'Travel Consult',
    description: 'Personalized itinerary planning and professional advice for first-time travelers.',
    icon: <Users className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50',
    linkText: 'Book Session',
    linkColor: 'text-purple-600'
  }
]

export function Services() {
  return (
    <section className="py-20 bg-gray-50/50 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Services</h2>
          <p className="text-gray-600">
            We simplify your travel experience with comprehensive solutions tailored for the Nigerian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <a href="#" className={`inline-flex items-center text-sm font-semibold ${item.linkColor} hover:opacity-80`}>
                {item.linkText} <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
