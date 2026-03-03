import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, MessageCircle, FileText } from 'lucide-react';

export default function ThankYou() {
  const location = useLocation();
  const state = location.state as any;

  if (!state || !state.priceRange) {
    return <Navigate to="/quote" replace />;
  }

  const { formData, priceRange } = state;

  const handleWhatsApp = () => {
    const text = `你好，我想查詢搬屋報價。
以下是我的資料：
姓名：${formData.contact.name}
電話：${formData.contact.phone}
搬運日期：${formData.contact.date}
搬出：${formData.location.fromDistrict} (${formData.location.fromStairs}層樓梯)
搬入：${formData.location.toDistrict} (${formData.location.toStairs}層樓梯)
初步報價範圍：$${priceRange.min} - $${priceRange.max}`;
    
    window.open(`https://wa.me/85212345678?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20 min-h-screen"
    >
      <Helmet>
        <title>報價完成 | 香港安心搬屋公司</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden text-center">
          <div className="bg-blue-600 py-12 px-6">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <CheckCircle className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">感謝您的查詢！</h1>
            <p className="text-blue-100 text-lg">我們已收到您的初步報價要求。</p>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <FileText className="w-6 h-6 mr-2 text-blue-600" />
              您的初步報價範圍
            </h2>
            
            <div className="bg-orange-50 rounded-2xl p-8 mb-8 border border-orange-100">
              <p className="text-slate-600 mb-2">預計搬運費用約為</p>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 tracking-tight">
                HK$ {priceRange.min} - {priceRange.max}
              </div>
              <p className="text-sm text-slate-500 mt-4">
                *此為根據您提供的資料作出的初步估算。實際收費需視乎最終物品數量、實際環境及推路距離而定。
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <p className="text-slate-700 text-lg font-medium">
                為確保報價準確，請點擊下方按鈕透過 WhatsApp 與我們的客服聯絡，確認最終報價。
              </p>
              
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg text-lg group"
              >
                <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp 確認最終報價
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
