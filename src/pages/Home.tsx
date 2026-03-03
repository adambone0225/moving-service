import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Clock, Box, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50"
    >
      <Helmet>
        <title>香港安心搬屋公司 | 30年專業經驗，透明收費</title>
        <meta name="description" content="香港安心搬屋公司提供專業、透明、安心的搬屋服務。30年經驗，每件物品$5起，更提供15天免費倉存。立即獲取免費報價！" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              搬屋，可以很安心。
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
              30年香港本地搬運經驗，透明收費每件$5起。我們承諾為您減輕搬遷壓力，讓您輕鬆入伙新居。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/quote"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-orange-400 hover:bg-orange-500 transition-colors shadow-lg hover:shadow-xl"
              >
                免費獲取報價
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
              <NavLink
                to="/price-list"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
              >
                查看透明價目表
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">為什麼選擇安心搬屋？</h2>
            <p className="text-lg text-slate-600">我們明白搬屋的繁瑣與壓力，因此我們提供全方位的支援，讓整個過程變得簡單、透明。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">30年專業經驗</h3>
              <p className="text-slate-600 leading-relaxed">
                服務香港超過30年，處理過無數家庭及辦公室搬遷，經驗豐富，值得信賴。
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Box className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">透明收費 $5起</h3>
              <p className="text-slate-600 leading-relaxed">
                絕無隱藏收費。明碼實價，每件物品搬運費低至$5起，讓您預算更有把握。
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">15天免費倉存</h3>
              <p className="text-slate-600 leading-relaxed">
                新居未準備好？我們提供長達15天的免費安全倉存服務，解決您的燃眉之急。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">客戶真實評價</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: '陳先生', text: '師傅好有禮貌，搬運過程好小心，價錢亦都好公道，無亂收費。' },
              { name: '李小姐', text: '因為新居裝修延誤，好彩有15日免費倉存，幫咗我好大忙！' },
              { name: '張太', text: '報價系統好方便，3分鐘就知大概價錢，之後WhatsApp確認好快。' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-slate-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">準備好輕鬆搬屋了嗎？</h2>
          <p className="text-xl text-blue-100 mb-10">只需3分鐘，即可獲取初步報價範圍。</p>
          <NavLink
            to="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-lg"
          >
            立即開始報價
            <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}
