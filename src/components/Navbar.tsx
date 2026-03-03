import { NavLink } from 'react-router-dom';
import { Menu, X, Truck } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '搬屋服務', path: '/services' },
    { name: '價目表', path: '/price-list' },
    { name: '免費倉存', path: '/free-storage' },
    { name: '搬屋指南', path: '/guide' },
    { name: '關於我們', path: '/about' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-2xl text-slate-900 tracking-tight">安心搬屋</span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-blue-600',
                    isActive ? 'text-blue-600' : 'text-slate-600'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/quote"
              className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm"
            >
              免費報價
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-3 rounded-md text-base font-medium',
                    isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-orange-400 text-white hover:bg-orange-500"
            >
              免費報價
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
