import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Box, Shield, ThermometerSun, Clock, ArrowRight } from 'lucide-react';

export default function FreeStorage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>15天免費倉存 | 香港安心搬屋公司</title>
        <meta name="description" content="新居裝修延誤？我們為所有搬屋客戶提供長達15天的免費安全倉存服務，解決您的燃眉之急。" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              新居未準備好？<br />
              <span className="text-blue-600">我們為您提供15天免費倉存</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              我們明白搬屋過程中充滿變數，新居裝修延誤、交吉期不合等情況時有發生。為減輕您的壓力，我們為所有搬屋客戶提供長達15天的免費倉存服務。
            </p>
            <NavLink
              to="/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-orange-400 hover:bg-orange-500 transition-colors shadow-lg"
            >
              立即獲取搬屋報價
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80" 
              alt="安全倉存設施" 
              className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">我們的倉存設施優勢</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Clock className="w-8 h-8" />, title: '15天全免', desc: '首15天免收任何倉租，其後收費相宜。' },
            { icon: <Shield className="w-8 h-8" />, title: '24小時保安', desc: '嚴密保安系統及閉路電視監控，確保物品安全。' },
            { icon: <ThermometerSun className="w-8 h-8" />, title: '防潮恆溫', desc: '完善的抽濕及通風系統，保護您的貴重傢俬。' },
            { icon: <Box className="w-8 h-8" />, title: '妥善包裝', desc: '入倉前會為傢俬進行防塵防潮包裝處理。' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-6">倉存服務條款及細則</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>免費倉存優惠僅適用於同時選用本公司「搬出」及「搬入」服務之客戶。</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>15天免費期由物品入倉當日起計算。</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>如需延長倉存期，第16天起將按物品體積收取合理倉租，詳情請向客服查詢。</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
              <span>危險品、易燃物品、違禁品、活生動物及易腐壞食物恕不接受寄存。</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
