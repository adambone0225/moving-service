import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PriceList() {
  const pricingCategories = [
    {
      title: '基本搬運費',
      items: [
        { name: '紙箱 (標準尺寸)', price: '$5 / 件' },
        { name: '膠箱 / 紅白藍袋', price: '$10 / 件' },
        { name: '小型家電 (微波爐、風扇等)', price: '$20 / 件' },
        { name: '中型傢俬 (單人床、書枱等)', price: '$50 / 件' },
        { name: '大型傢俬 (雙人床、衣櫃等)', price: '$100 / 件' },
        { name: '大型家電 (雪櫃、洗衣機等)', price: '$150 / 件' },
      ]
    },
    {
      title: '附加服務費',
      items: [
        { name: '傢俬拆裝服務', price: '$50 - $200 / 件' },
        { name: '鋼琴搬運 (直立式)', price: '$800 起' },
        { name: '唐樓樓梯附加費', price: '$10 / 件 / 層' },
        { name: '推路費 (超過50米)', price: '$100 起' },
        { name: '偏遠地區附加費', price: '$200 起' },
      ]
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
        <title>透明價目表 | 香港安心搬屋公司</title>
        <meta name="description" content="明碼實價，絕無隱藏收費。每件物品搬運費低至$5起。查看詳細的搬屋價目表，讓您預算更有把握。" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">透明價目表</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            我們堅持明碼實價，絕不取巧。以下為基本收費參考，實際報價會因應地區、樓梯、推路距離等因素而有所調整。
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {pricingCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
              </div>
              <ul className="divide-y divide-slate-100">
                {category.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                    <span className="text-slate-700 font-medium">{item.name}</span>
                    <span className="text-orange-500 font-bold text-lg">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16 border border-blue-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2" />
            免費提供包裝物料
          </h3>
          <p className="text-slate-600 mb-4">
            凡惠顧滿$1,500，即免費提供以下包裝物料：
          </p>
          <ul className="grid grid-cols-2 gap-4 text-slate-700">
            <li>• 標準紙箱 10 個</li>
            <li>• 封箱膠紙 2 卷</li>
            <li>• 氣泡紙 1 卷</li>
            <li>• 傢俬保護膜</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-8">
            想知道準確的搬屋費用？使用我們的報價計算機，3分鐘即可獲取初步報價範圍。
          </p>
          <NavLink
            to="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-orange-400 hover:bg-orange-500 transition-colors shadow-lg"
          >
            使用免費報價計算機
            <ArrowRight className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
