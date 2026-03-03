import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20"
    >
      <Helmet>
        <title>條款及細則 | 香港安心搬屋公司</title>
        <meta name="description" content="香港安心搬屋公司的服務條款及細則，保障雙方權益。" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-6">服務條款及細則</h1>
          
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. 報價與收費</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>所有報價均以港幣計算。</li>
                <li>初步報價僅供參考，最終收費以本公司職員實地視察或透過相片/影片確認後作準。</li>
                <li>如搬運當日實際物品數量、體積或搬運環境（如樓梯層數、推路距離）與報價時提供的資料不符，本公司有權調整收費。</li>
                <li>客戶需於搬運完成後，以現金、轉數快 (FPS) 或 PayMe 繳付全數款項。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. 物品包裝與保護</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>客戶有責任在搬運前將所有小件物品（如衣物、書籍、雜物）妥善裝箱並封好。</li>
                <li>易碎物品（如玻璃、陶瓷）必須由客戶自行妥善包裝，並在箱外清楚標示。如因包裝不當導致損壞，本公司概不負責。</li>
                <li>本公司會為大型傢俬及電器提供基本保護包裝（如保鮮紙、毛毯）。</li>
                <li>貴重物品（如現金、珠寶首飾、重要文件、小型電子產品）必須由客戶親自攜帶及保管，本公司恕不負責搬運及保管。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. 損壞賠償</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>本公司員工會盡力小心搬運所有物品。如因本公司員工疏忽導致物品損壞，本公司將按物品折舊後的現值作出賠償，最高賠償額為該物品搬運費的10倍或港幣$1,000（以較低者為準）。</li>
                <li>客戶必須在搬運完成後即時檢查所有物品。如有損壞，必須即時向在場主管提出，並在單據上註明。事後提出的索償，本公司保留拒絕受理的權利。</li>
                <li>電器內部機件故障、傢俬原有之損壞或刮痕，本公司概不負責。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. 倉存服務</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>15天免費倉存優惠僅適用於同時選用本公司「搬出」及「搬入」服務之客戶。</li>
                <li>免費期由物品入倉當日起計算。第16天起將按物品體積收取倉租。</li>
                <li>危險品、易燃物品、違禁品、活生動物及易腐壞食物恕不接受寄存。</li>
                <li>本公司會盡力保持貨倉環境安全及乾爽，但對於因不可抗力因素（如天災、火災、水浸）導致的物品損壞，本公司概不負責。建議客戶自行購買保險。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. 取消及更改預約</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>如需取消或更改搬運日期，必須於原定日期前最少3個工作天通知本公司。</li>
                <li>如在少於3個工作天內取消或更改預約，本公司有權沒收訂金或收取行政費。</li>
                <li>如遇惡劣天氣（如八號或以上熱帶氣旋警告信號、黑色暴雨警告信號），搬運服務將會暫停，並另行安排日期，不另收費。</li>
              </ul>
            </section>

            <p className="text-sm text-slate-500 mt-12 pt-8 border-t border-slate-200">
              本公司保留隨時修改上述條款及細則之權利，而毋須事先通知。如有任何爭議，香港安心搬屋公司保留最終決定權。
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
