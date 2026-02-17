import { MapPin, Calendar, CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react'

export interface PackageCardProps {
  type: 'holiday' | 'study'
  image: string
  title: string
  location: string
  durationOrDegree: string
  price: string
  description: string
  tags?: string[]
}

export function PackageCard({ type, image, title, location, durationOrDegree, price, description, tags }: PackageCardProps) {
  const isStudy = type === 'study'

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`
            px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
            ${isStudy ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}
          `}>
            {isStudy ? 'Study Abroad' : 'Holiday'}
          </span>
          {tags?.map(tag => (
            <span key={tag} className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
              {tag === 'Visa Included' && <CheckCircle2 className="w-3 h-3" />}
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            {isStudy ? <GraduationCap className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
            {durationOrDegree}
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed h-10">
          {description}
        </p>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5">{isStudy ? 'Tuition Deposit' : 'Starting from'}</span>
            <span className="text-lg font-bold text-blue-600">{price}</span>
          </div>
          <button className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
