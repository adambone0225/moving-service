import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function Guide() {
  const guides = [
    {
      title: '搬屋前 1 個月',
      items: [
        '確認新居入伙日期及時間',
        '聯絡搬屋公司獲取報價並預約服務',
        '開始清理不需要的物品（捐贈、轉售或棄置）',
        '通知管理處搬屋日期，預留車位及電梯',
      ]
    },
    {
      title: '搬屋前 2 星期',
      items: [
        '開始收集紙箱及包裝物料（如選用安心搬屋，我們會免費提供）',
        '開始執拾非日常必需品（如換季衣物、書籍、裝飾品）',
        '辦理各項服務轉移手續（水、電、煤、寬頻、銀行地址等）',
        '為每個紙箱貼上標籤，註明內含物品及所屬房間',
      ]
    },
    {
      title: '搬屋前 1 星期',
      items: [
        '清空雪櫃及冰格，盡量消耗剩餘食物',
        '執拾日常用品，只保留最後幾天必需的物品',
        '準備一個「搬屋當日必需品」袋（如替換衣物、洗漱用品、重要文件、藥物、充電器）',
        '與搬屋公司再次確認時間及細節',
      ]
    },
    {
      title: '搬屋前 1 天',
      items: [
        '拔除雪櫃電源並進行除霜及清潔',
        '拔除洗衣機電源並排清積水',
        '將貴重物品（首飾、現金、重要文件）親自保管',
        '確保所有紙箱已封好並標示清楚',
      ]
    },
    {
      title: '搬屋當日',
      items: [
        '與搬運師傅確認搬運清單及特別注意事項',
        '在舊居最後檢查一次所有房間、櫃桶，確保沒有遺漏',
        '記錄水電煤錶度數',
        '抵達新居後，指示師傅將物品放置到指定房間',
        '檢查大型傢俬及電器是否完好無缺',
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
        <title>搬屋指南 | 香港安心搬屋公司</title>
        <meta name="description" content="實用的搬屋時間表及執拾技巧，助您有條不紊地準備搬遷，減輕壓力。" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">實用搬屋指南</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            搬屋是一項繁瑣的工程，但只要有系統地計劃，就能大大減輕壓力。我們為您準備了這份詳盡的搬屋時間表及執拾清單。
          </p>
        </div>

        <div className="space-y-12">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-blue-600 px-8 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                    {index + 1}
                  </span>
                  {guide.title}
                </h2>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {guide.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-orange-400 mr-4 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4">執拾小貼士</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li><strong>重物放細箱：</strong> 書籍、雜誌等重物應放入較小的紙箱，以免過重難以搬運或導致紙箱破裂。</li>
            <li><strong>輕物放大箱：</strong> 衣物、被鋪、枕頭等較輕的物品可放入較大的紙箱或紅白藍袋。</li>
            <li><strong>易碎品包裝：</strong> 碗碟、玻璃杯等易碎品必須用氣泡紙或報紙獨立包裝，並在紙箱外顯眼處標明「易碎」。</li>
            <li><strong>填滿空隙：</strong> 紙箱內如有空隙，應用報紙或毛巾填滿，防止物品在搬運過程中搖晃碰撞。</li>
            <li><strong>封箱技巧：</strong> 紙箱底部及頂部應用封箱膠紙以「H」字型封口，確保穩固。</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
