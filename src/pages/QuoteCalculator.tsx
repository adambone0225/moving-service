import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Package, MapPin, User, ArrowRight, ArrowLeft } from 'lucide-react';

export default function QuoteCalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    items: {
      boxes: 0,
      smallAppliances: 0,
      mediumFurniture: 0,
      largeFurniture: 0,
      largeAppliances: 0
    },
    location: {
      fromDistrict: '',
      toDistrict: '',
      fromStairs: '0',
      toStairs: '0'
    },
    contact: {
      name: '',
      phone: '',
      date: '',
      address: ''
    }
  });

  const districts = ['中西區', '灣仔', '東區', '南區', '油尖旺', '深水埗', '九龍城', '黃大仙', '觀塘', '葵青', '荃灣', '屯門', '元朗', '北區', '大埔', '沙田', '西貢', '離島'];

  const handleItemChange = (item: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      items: { ...prev.items, [item]: Math.max(0, value) }
    }));
  };

  const calculatePriceRange = () => {
    const { items, location } = formData;
    let basePrice = 
      (items.boxes * 5) +
      (items.smallAppliances * 20) +
      (items.mediumFurniture * 50) +
      (items.largeFurniture * 100) +
      (items.largeAppliances * 150);

    // Basic district fee
    if (location.fromDistrict && location.toDistrict) {
      basePrice += 300; // Base transport
    }

    // Stairs fee estimation
    const totalItems = Object.values(items).reduce((a: number, b: number) => a + b, 0);
    const stairsFee = (parseInt(location.fromStairs) + parseInt(location.toStairs)) * totalItems * 10;
    
    basePrice += stairsFee;

    const minPrice = Math.max(500, Math.floor(basePrice * 0.9));
    const maxPrice = Math.max(800, Math.ceil(basePrice * 1.2));

    return { min: minPrice, max: maxPrice };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const range = calculatePriceRange();
    // In a real app, send data to server here
    navigate('/thank-you', { state: { formData, priceRange: range } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 py-12 lg:py-20 min-h-screen"
    >
      <Helmet>
        <title>免費報價計算機 | 香港安心搬屋公司</title>
        <meta name="description" content="只需3分鐘，輸入物品數量及搬運地點，即時獲取初步報價範圍。" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">免費報價計算機</h1>
          <p className="text-slate-600">只需3個簡單步驟，即時獲取初步報價範圍。</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[
              { num: 1, icon: <Package className="w-5 h-5" />, label: '物品數量' },
              { num: 2, icon: <MapPin className="w-5 h-5" />, label: '搬運地點' },
              { num: 3, icon: <User className="w-5 h-5" />, label: '聯絡資料' }
            ].map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${
                  step >= s.num ? 'bg-blue-600 border-blue-100 text-white' : 'bg-white border-slate-100 text-slate-400'
                }`}>
                  {s.icon}
                </div>
                <span className={`mt-2 text-sm font-medium ${step >= s.num ? 'text-blue-600' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">第一步：選擇物品數量</h2>
                
                {[
                  { id: 'boxes', label: '紙箱 (標準尺寸)', price: '$5' },
                  { id: 'smallAppliances', label: '小型家電 (微波爐、風扇等)', price: '$20' },
                  { id: 'mediumFurniture', label: '中型傢俬 (單人床、書枱等)', price: '$50' },
                  { id: 'largeFurniture', label: '大型傢俬 (雙人床、衣櫃等)', price: '$100' },
                  { id: 'largeAppliances', label: '大型家電 (雪櫃、洗衣機等)', price: '$150' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <p className="font-medium text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-500">約 {item.price} / 件</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        type="button"
                        onClick={() => handleItemChange(item.id, formData.items[item.id as keyof typeof formData.items] - 1)}
                        className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >-</button>
                      <span className="w-8 text-center font-bold text-lg">{formData.items[item.id as keyof typeof formData.items]}</span>
                      <button 
                        type="button"
                        onClick={() => handleItemChange(item.id, formData.items[item.id as keyof typeof formData.items] + 1)}
                        className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                      >+</button>
                    </div>
                  </div>
                ))}

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                  >
                    下一步 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">第二步：搬運地點及樓梯</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">搬出地點</h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">地區</label>
                      <select 
                        value={formData.location.fromDistrict}
                        onChange={(e) => setFormData(prev => ({...prev, location: {...prev.location, fromDistrict: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">請選擇地區</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">需行樓梯層數 (如無電梯)</label>
                      <select 
                        value={formData.location.fromStairs}
                        onChange={(e) => setFormData(prev => ({...prev, location: {...prev.location, fromStairs: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {[0,1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} 層</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">搬入地點</h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">地區</label>
                      <select 
                        value={formData.location.toDistrict}
                        onChange={(e) => setFormData(prev => ({...prev, location: {...prev.location, toDistrict: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">請選擇地區</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">需行樓梯層數 (如無電梯)</label>
                      <select 
                        value={formData.location.toStairs}
                        onChange={(e) => setFormData(prev => ({...prev, location: {...prev.location, toStairs: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {[0,1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} 層</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> 上一步
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.location.fromDistrict || !formData.location.toDistrict}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    下一步 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">第三步：聯絡資料</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                      <input 
                        required
                        type="text" 
                        value={formData.contact.name}
                        onChange={(e) => setFormData(prev => ({...prev, contact: {...prev.contact, name: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="陳大文"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">聯絡電話 (WhatsApp)</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.contact.phone}
                        onChange={(e) => setFormData(prev => ({...prev, contact: {...prev.contact, phone: e.target.value}}))}
                        className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="9876 5432"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">預計搬運日期</label>
                    <input 
                      required
                      type="date" 
                      value={formData.contact.date}
                      onChange={(e) => setFormData(prev => ({...prev, contact: {...prev.contact, date: e.target.value}}))}
                      className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">詳細地址 (選填，有助更準確報價)</label>
                    <textarea 
                      rows={3}
                      value={formData.contact.address}
                      onChange={(e) => setFormData(prev => ({...prev, contact: {...prev.contact, address: e.target.value}}))}
                      className="w-full rounded-lg border-slate-300 border p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="搬出及搬入之詳細地址"
                    ></textarea>
                  </div>

                  <div className="pt-6 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition-colors"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" /> 上一步
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-lg text-lg"
                    >
                      獲取初步報價
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
