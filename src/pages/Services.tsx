import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, Building2, Package, Truck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HomeIcon className="h-10 w-10 text-blue-600" />,
      title: '住宅搬遷',
      description: '提供專業的家庭搬屋服務。我們的團隊會小心包裝、搬運及拆裝您的傢俬，確保所有物品安全抵達新居。',
      features: ['免費提供紙箱', '專業傢俬拆裝', '易碎物品特別包裝']
    },
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: '辦公室搬遷',
      description: '高效的辦公室搬遷方案，將對您業務的影響減至最低。我們有豐富經驗處理電腦設備及機密文件。',
      features: ['非辦公時間服務', 'IT設備專業搬運', '文件保密處理']
    },
    {
      icon: <Package className="h-10 w-10 text-blue-600" />,
      title: '存倉服務',
      description: '提供安全、恆溫的倉存空間。所有搬屋客戶均可享有15天免費倉存優惠，解決新居未入伙的煩惱。',
      features: ['15天免費倉存', '24小時保安監控', '防潮恆溫設備']
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: '單件物品搬運',
      description: '無論是購買了新傢俬需要運送，還是只需搬運一部鋼琴或大型電器，我們都能提供快捷妥當的服務。',
      features: ['特快預約', '鋼琴專業搬運', '大型電器運送']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>搬屋服務 | 香港安心搬屋公司</title>
        <meta name="description" content="提供住宅搬遷、辦公室搬遷、存倉服務及單件物品搬運。專業團隊，細心服務，讓您搬屋無煩惱。" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">專業搬屋服務</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            無論是大型家庭搬遷還是單件物品運送，我們都以最專業的態度為您服務。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">需要客製化服務？</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            每個搬遷需求都是獨特的。如果您有特別的搬運需求，歡迎隨時與我們聯絡，我們將為您提供專屬方案。
          </p>
          <NavLink
            to="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-lg"
          >
            獲取免費報價
            <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
