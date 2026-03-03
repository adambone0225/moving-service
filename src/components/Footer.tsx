import { NavLink } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl tracking-tight">安心搬屋</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              30年經驗，提供專業、透明、安心的香港搬屋服務。我們致力於減輕您搬屋的壓力，讓您輕鬆入伙新居。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">快速連結</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/services" className="hover:text-blue-400 transition-colors">搬屋服務</NavLink></li>
              <li><NavLink to="/price-list" className="hover:text-blue-400 transition-colors">透明價目表</NavLink></li>
              <li><NavLink to="/free-storage" className="hover:text-blue-400 transition-colors">15天免費倉存</NavLink></li>
              <li><NavLink to="/quote" className="hover:text-blue-400 transition-colors">免費報價</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">客戶支援</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/guide" className="hover:text-blue-400 transition-colors">搬屋指南</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-blue-400 transition-colors">常見問題 (Q&A)</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-blue-400 transition-colors">條款及細則</NavLink></li>
              <li><NavLink to="/about" className="hover:text-blue-400 transition-colors">關於我們</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">聯絡我們</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+852 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>info@ansinmoving.com.hk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>香港九龍觀塘開源道1號</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} 香港安心搬屋公司. 版權所有.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <NavLink to="/terms" className="hover:text-white transition-colors">私隱政策</NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">服務條款</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
