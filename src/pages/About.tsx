import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Trophy, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>關於我們 | 香港安心搬屋公司</title>
        <meta name="description" content="了解香港安心搬屋公司的歷史、理念及專業團隊。30年來，我們致力為香港市民提供優質、可靠的搬遷服務。" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">關於安心搬屋</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            自1994年成立以來，我們一直秉持「以客為先，專業可靠」的宗旨，為無數香港家庭及企業順利完成搬遷。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
              alt="專業搬運團隊" 
              className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">我們的故事</h2>
              <p className="text-slate-600 leading-relaxed">
                安心搬屋由幾位資深搬運師傅創立。當年，他們有感於坊間搬屋公司質素參差，經常出現坐地起價、粗暴搬運等問題，令客人對搬屋充滿恐懼。因此，他們決心成立一間收費透明、服務專業的搬屋公司，務求令每位客人都能「安心」搬屋。
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">我們的承諾</h2>
              <p className="text-slate-600 leading-relaxed">
                30年來，我們堅持明碼實價，絕不濫收附加費。我們的團隊經過嚴格培訓，不僅具備專業的搬運及包裝技巧，更擁有良好的服務態度。我們視客人的物品如己出，確保每一件傢俬、每一個紙箱都能安全無恙地送達新居。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">我們的核心價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: '誠信可靠', desc: '明碼實價，絕無隱藏收費，承諾必定兌現。' },
              { icon: <Users className="w-10 h-10" />, title: '專業團隊', desc: '經驗豐富的本地師傅，熟悉各類傢俬拆裝及搬運技巧。' },
              { icon: <HeartHandshake className="w-10 h-10" />, title: '以客為先', desc: '細心聆聽客人需求，提供貼心、具彈性的服務方案。' },
              { icon: <Trophy className="w-10 h-10" />, title: '追求卓越', desc: '不斷提升服務質素，引入先進設備，務求盡善盡美。' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
