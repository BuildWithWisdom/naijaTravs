import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { Menu, Plane, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#ccd4db] backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
            <div className="bg-blue-600 p-1 md:p-1.5 rounded-md flex-shrink-0">
              <Plane className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <span className="font-bold text-base md:text-xl tracking-tight text-slate-900 truncate">
              BlueHQ Travels
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/packages', label: 'Holiday & Study' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === '/' }}
                className="relative py-2 text-sm font-semibold transition-colors duration-200 text-slate-700 hover:text-blue-600 group uppercase tracking-wide"
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`} 
                    />
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer uppercase tracking-wide">
              Log In
            </button>
            <Button className="font-bold bg-blue-600 text-white hover:bg-blue-700 rounded-md px-6 cursor-pointer shadow-sm hover:shadow-md transition-all uppercase tracking-wide text-xs">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-3 top-1/2 -translate-y-1/2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isOpen ? <X key="close" className="h-6 w-6" /> : <Menu key="menu" className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link to="/" className="text-blue-600 font-medium text-sm p-2 hover:bg-gray-50 rounded-md">
            Home
          </Link>
          <Link to="/services" className="text-gray-600 font-medium text-sm p-2 hover:bg-gray-50 rounded-md">
            Services
          </Link>
          <Link to="/packages" className="text-gray-600 font-medium text-sm p-2 hover:bg-gray-50 rounded-md">
            Holiday & Study Packages
          </Link>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <button className="text-gray-600 font-medium text-sm p-2 hover:bg-gray-50 rounded-md text-left">
              Log In
            </button>
            <Button className="font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-md w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
