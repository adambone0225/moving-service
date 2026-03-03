import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>聯絡我們 | 香港安心搬屋公司</title>
        <meta name="description" content="歡迎隨時與我們聯絡查詢搬屋報價或服務詳情。提供電話、WhatsApp、電郵等多種聯絡方式。" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">聯絡我們</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            我們隨時準備為您解答任何關於搬屋的疑問，或提供免費報價。請透過以下方式與我們的客服團隊聯絡。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">電話查詢</h3>
                <p className="text-slate-600 mb-1">一般查詢及預約：+852 1234 5678</p>
                <p className="text-slate-600">緊急聯絡：+852 9876 5432</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mr-6 shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp 報價</h3>
                <p className="text-slate-600 mb-4">傳送相片及清單，最快15分鐘內回覆報價。</p>
                <a 
                  href="https://wa.me/85212345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#25D366] font-medium hover:underline"
                >
                  立即 WhatsApp 我們
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">電郵聯絡</h3>
                <p className="text-slate-600">info@ansinmoving.com.hk</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">辦公時間</h3>
                <p className="text-slate-600 mb-1">星期一至六：上午 9:00 - 下午 6:00</p>
                <p className="text-slate-600">星期日及公眾假期：休息 (搬運服務照常)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">辦事處地址</h2>
            <div className="flex items-start mb-8">
              <MapPin className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-1" />
              <p className="text-lg text-slate-700 leading-relaxed">
                香港九龍觀塘開源道1號<br />
                創紀之城1期1樓101室
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-slate-200">
              {/* Placeholder for Google Maps iframe */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                地圖載入中...
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
