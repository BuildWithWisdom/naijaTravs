import { Button } from './ui/button'
import { Input } from './ui/input'
import { Plane, Hotel, FileCheck, GraduationCap, Search, Calendar, MapPin, Users } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function SearchCard() {
  const [activeTab, setActiveTab] = useState('flights')

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[150px] md:-mt-[120px]">
      <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-100">
        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-gray-100 pb-4 mb-6">
          <button 
            onClick={() => setActiveTab('flights')}
            className={cn("flex items-center gap-2 text-sm font-medium px-2 pb-2 -mb-4 border-b-2 transition-colors", activeTab === 'flights' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}
          >
            <Plane className="w-4 h-4" /> Flights
          </button>
          <button 
            onClick={() => setActiveTab('hotels')}
            className={cn("flex items-center gap-2 text-sm font-medium px-2 pb-2 -mb-4 border-b-2 transition-colors", activeTab === 'hotels' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}
          >
            <Hotel className="w-4 h-4" /> Hotels
          </button>
          <button 
            onClick={() => setActiveTab('visa')}
            className={cn("flex items-center gap-2 text-sm font-medium px-2 pb-2 -mb-4 border-b-2 transition-colors", activeTab === 'visa' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}
          >
            <FileCheck className="w-4 h-4" /> Visa Assistance
          </button>
          <button 
            onClick={() => setActiveTab('study')}
            className={cn("flex items-center gap-2 text-sm font-medium px-2 pb-2 -mb-4 border-b-2 transition-colors", activeTab === 'study' ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}
          >
            <GraduationCap className="w-4 h-4" /> Study Abroad
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Lagos (LOS)" className="pl-10 bg-gray-50 border-gray-200 h-12" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Where do you want to go?" className="pl-10 bg-gray-50 border-gray-200 h-12" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input type="date" className="pl-10 bg-gray-50 border-gray-200 h-12" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <select className="w-full h-12 pl-10 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                </select>
              </div>
            </div>
          </div>

          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/20">
            <Search className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
      </div>
    </div>
  )
}
