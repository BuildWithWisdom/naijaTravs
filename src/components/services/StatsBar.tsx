export function StatsBar() {
  const stats = [
    { label: 'Visas Approved', value: '10k+' },
    { label: 'Happy Travelers', value: '25k+' },
    { label: 'Airline Partners', value: '50+' },
    { label: 'Expert Support', value: '24/7' },
  ]

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
