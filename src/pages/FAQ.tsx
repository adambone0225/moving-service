import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';

export default function FAQ() {
  const faqs = [
    {
      question: '報價後會否有隱藏收費？',
      answer: '絕對不會。我們堅持明碼實價，初步報價是根據您提供的資料計算。只要搬運當日的物品數量、樓梯層數及推路距離與報價時相符，收費將與報價一致。如需增加搬運物品，師傅會先與您確認額外收費才開始搬運。'
    },
    {
      question: '需要預早多少天預約搬屋服務？',
      answer: '一般建議提早 2 至 4 星期預約，特別是月底、週末或吉日等旺季，檔期較容易爆滿。如遇緊急情況，我們亦會盡量安排特快服務，歡迎隨時 WhatsApp 查詢。'
    },
    {
      question: '你們會提供紙箱等包裝物料嗎？',
      answer: '會的。凡惠顧滿 $1,500，我們將免費提供標準紙箱 10 個、封箱膠紙 2 卷、氣泡紙 1 卷及傢俬保護膜。如需額外紙箱，可按每個 $15 購買。'
    },
    {
      question: '大型傢俬（如衣櫃、床架）需要自行拆裝嗎？',
      answer: '不需要。我們的專業團隊具備豐富的傢俬拆裝經驗，會為您妥善拆卸及在搬入新居後重新安裝。此服務會按傢俬大小及複雜程度收取 $50 - $200 不等的附加費。'
    },
    {
      question: '15天免費倉存服務是如何計算的？',
      answer: '免費倉存期由物品入倉當日起計算，為期 15 天。此優惠僅適用於同時選用本公司「搬出」及「搬入」服務之客戶。如需延長倉存期，第 16 天起將按物品體積收取合理倉租。'
    },
    {
      question: '搬運途中如有物品損壞，會如何處理？',
      answer: '我們的師傅會極度小心搬運您的物品。如因我們的疏忽導致物品損壞，我們將按物品折舊後的現值作出賠償，最高賠償額為該物品搬運費的 10 倍或港幣 $1,000（以較低者為準）。請務必在搬運完成後即時檢查物品，並向在場主管提出。'
    },
    {
      question: '惡劣天氣下會繼續搬屋嗎？',
      answer: '為保障員工及您的物品安全，如天文台懸掛八號或以上熱帶氣旋警告信號，或發出黑色暴雨警告信號，搬運服務將會暫停。我們會盡快與您聯絡，免費另行安排搬運日期。'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>常見問題 (Q&A) | 香港安心搬屋公司</title>
        <meta name="description" content="解答您對搬屋服務、收費、包裝及倉存的常見疑問。" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">常見問題 (Q&A)</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            我們整理了客戶最常問的問題，希望能為您解答疑慮。如仍有其他問題，歡迎隨時聯絡我們。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-6 h-6 text-blue-600 shrink-0 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
