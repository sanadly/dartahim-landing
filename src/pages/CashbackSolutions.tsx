
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Percent, Coins, RefreshCw, Shield, Settings, ShoppingCart, Utensils, Store, Briefcase, ChevronRight, CreditCard, Tag, Gift, Clock, Check, ChevronLeft, PieChart, LineChart, User, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const CashbackSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "زيادة معدل التحويل",
      description: "تحفيز المستخدمين لإتمام عمليات الشراء بفضل حوافز الكاشباك الفورية."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "تعزيز تكرار الشراء",
      description: "تشجيع العملاء على العودة مرة أخرى من خلال تراكم مكافآت الكاشباك."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "زيادة متوسط قيمة الطلب",
      description: "دفع العملاء لزيادة حجم مشترياتهم للحصول على مكافآت كاشباك أعلى."
    }
  ];

  const features = [
    {
      title: "معدلات كاشباك مرنة",
      description: "تحديد نسب الكاشباك بناءً على فئات المنتجات، حجم الطلب، أو فترات زمنية محددة."
    },
    {
      title: "استرداد متعدد الخيارات",
      description: "تقديم خيارات متنوعة لاسترداد الكاشباك سواء كرصيد للطلبات المستقبلية أو تحويل نقدي."
    },
    {
      title: "حملات موجهة",
      description: "إنشاء عروض كاشباك مخصصة لشرائح عملاء محددة أو لتعزيز مبيعات منتجات معينة."
    },
    {
      title: "إشعارات فورية",
      description: "إبلاغ العملاء في الوقت الفعلي عن الكاشباك المكتسب لتعزيز تجربة التسوق الإيجابية."
    },
    {
      title: "تكامل سلس",
      description: "دمج حلول الكاشباك بسهولة مع أنظمة المدفوعات ومنصات التجارة الإلكترونية الحالية."
    },
    {
      title: "تقارير وتحليلات شاملة",
      description: "متابعة أداء برامج الكاشباك وتأثيرها على سلوك العملاء والمبيعات."
    }
  ];

  const useCases = [
    {
      icon: <Store />,
      title: "للمتاجر ومحلات التجزئة",
      description: "زيادة متوسط قيمة المشتريات وتردد العملاء من خلال تقديم كاشباك على كل عملية شراء، مع معدلات أعلى للمشتريات الأكبر."
    },
    {
      icon: <Utensils />,
      title: "للمطاعم والمقاهي",
      description: "تشجيع الزيارات المتكررة وزيادة حجم الطلبات من خلال برامج كاشباك مخصصة لأوقات الذروة والركود."
    },
    {
      icon: <ShoppingCart />,
      title: "للتجارة الإلكترونية",
      description: "تحسين معدلات التحويل وتقليل التخلي عن سلة التسوق من خلال عروض كاشباك جذابة على المشتريات المكتملة."
    },
    {
      icon: <Briefcase />,
      title: "للخدمات المهنية",
      description: "بناء علاقات طويلة الأمد مع العملاء من خلال برامج كاشباك تكافئ الولاء وتشجع على الإحالات."
    }
  ];

  // Interactive Cashback App Showcase tabs
  const cashbackTabs = [
    {
      id: 0,
      title: "لوحة معلومات العميل",
      icon: <User className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold">ع</span>
              </div>
              <div>
                <h3 className="font-bold">عبدالله محمد</h3>
                <p className="text-xs text-text/60">عميل منذ 2023</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              عميل مميز
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-secondary/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">15,750</div>
              <div className="text-xs text-text/70">إجمالي نقاط الكاشباك</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">157.5</div>
              <div className="text-xs text-text/70">القيمة بالدينار</div>
            </div>
          </div>
          
          <div className="border-t border-dashed border-primary/20 pt-3 mb-3">
            <h4 className="text-sm font-medium mb-2">آخر المعاملات</h4>
            <div className="space-y-2 max-h-[120px] overflow-y-auto">
              {[
                { store: "سوبر ماركت البركة", amount: "+150", date: "اليوم", time: "13:45" },
                { store: "مطعم البحر المتوسط", amount: "+85", date: "اليوم", time: "10:20" },
                { store: "متجر الإلكترونيات", amount: "+320", date: "أمس", time: "16:30" },
                { store: "صيدلية الشفاء", amount: "+45", date: "أمس", time: "09:15" }
              ].map((tx, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs p-2 rounded-lg hover:bg-secondary/5">
                  <div className="flex flex-col">
                    <span className="font-medium">{tx.store}</span>
                    <span className="text-text/50 text-[10px]">{tx.date} - {tx.time}</span>
                  </div>
                  <span className="text-green-600 font-medium">{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between gap-2 mt-4">
            <button className="bg-primary text-white text-sm py-2 px-4 rounded-lg flex-1 flex items-center justify-center gap-1">
              استرداد النقاط <Gift className="h-3 w-3" />
            </button>
            <button className="border border-primary/30 text-primary text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-1">
              تحويل النقاط <RefreshCw className="h-3 w-3" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "تحليلات الكاشباك",
      icon: <BarChart3 className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">تحليلات برنامج الكاشباك</h3>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-primary/10 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-primary">+32%</div>
              <div className="text-xs text-text/70">زيادة المبيعات</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-accent">+28%</div>
              <div className="text-xs text-text/70">عودة العملاء</div>
            </div>
            <div className="bg-secondary/10 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-secondary">+45%</div>
              <div className="text-xs text-text/70">سلة المشتريات</div>
            </div>
          </div>
          
          <div className="bg-white/80 rounded-lg p-3 mb-3 border border-primary/10">
            <div className="mb-1 flex justify-between items-center">
              <h4 className="text-xs font-medium">توزيع الكاشباك حسب الفئة</h4>
              <span className="text-xs text-text/50">الشهر الماضي</span>
            </div>
            
            <div className="flex items-center justify-between gap-1 h-24">
              {[65, 40, 75, 25, 55].map((height, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary/10 rounded-t-sm relative" style={{ height: `${height}%` }}>
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm" style={{ height: `${height * 0.7}%` }}></div>
                  </div>
                  <span className="text-[9px] mt-1 text-text/70">
                    {idx === 0 ? "مطاعم" : idx === 1 ? "متاجر" : idx === 2 ? "إلكترونيات" : idx === 3 ? "صيدليات" : "أخرى"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-dashed border-primary/20 pt-2 text-xs">
            <div className="flex justify-between mb-1">
              <span>معدل استبدال النقاط:</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>متوسط قيمة الكاشباك لكل طلب:</span>
              <span className="font-medium">5.2%</span>
            </div>
            <div className="flex justify-between">
              <span>عدد العملاء النشطين:</span>
              <span className="font-medium">1,245</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "إدارة العروض",
      icon: <Tag className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">عروض الكاشباك الحالية</h3>
            <button className="text-xs text-primary flex items-center gap-1">
              <span>إضافة عرض</span>
              <span className="w-5 h-5 rounded-full bg-primary text-white inline-flex items-center justify-center">+</span>
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            {[
              { title: "كاشباك مضاعف نهاية الأسبوع", percent: "10%", status: "نشط", expiresIn: "ينتهي في 3 أيام", color: "bg-green-100 text-green-800" },
              { title: "عروض الصيف", percent: "7%", status: "قادم", expiresIn: "يبدأ غداً", color: "bg-blue-100 text-blue-800" },
              { title: "عملاء المرة الأولى", percent: "15%", status: "نشط", expiresIn: "مستمر", color: "bg-green-100 text-green-800" }
            ].map((offer, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border border-primary/10 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-sm">{offer.title}</h4>
                  </div>
                  <p className="text-xs text-text/60 mt-1">{offer.expiresIn}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-primary font-bold">{offer.percent}</div>
                  <div className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${offer.color}`}>
                    {offer.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h4 className="text-sm font-medium mb-2">فئات الكاشباك</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 p-2 bg-secondary/10 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Store className="h-3 w-3 text-primary" />
              </div>
              <div>
                <div className="font-medium">المتاجر</div>
                <div className="text-[10px] text-text/60">كاشباك 5%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-secondary/10 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Utensils className="h-3 w-3 text-primary" />
              </div>
              <div>
                <div className="font-medium">المطاعم</div>
                <div className="text-[10px] text-text/60">كاشباك 8%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-secondary/10 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <ShoppingCart className="h-3 w-3 text-primary" />
              </div>
              <div>
                <div className="font-medium">التسوق الإلكتروني</div>
                <div className="text-[10px] text-text/60">كاشباك 6%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-secondary/10 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>
              <div>
                <div className="font-medium">خدمات مهنية</div>
                <div className="text-[10px] text-text/60">كاشباك 4%</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حلول الكاشباك</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              حفز مبيعاتك وعزز ولاء عملائك مع برامج الكاشباك المبتكرة من دراهم
            </p>
          </div>
          
          {/* Enhanced Interactive Cashback Dashboard Component */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="order-2 md:order-1">
              {/* Interactive Cashback Platform Showcase */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-0 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-lg"></div>
                
                {/* Tabs Navigation */}
                <div className="flex mb-6 bg-white/30 backdrop-blur-sm rounded-full p-1 border border-white/40 relative z-10">
                  {cashbackTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1 text-xs md:text-sm py-2 px-3 md:px-4 rounded-full transition-all flex-1 ${
                        activeTab === tab.id 
                          ? "bg-primary text-white shadow-md" 
                          : "hover:bg-white/40 text-text/70"
                      }`}
                    >
                      {tab.icon}
                      <span className="hidden md:inline">{tab.title}</span>
                    </button>
                  ))}
                </div>
                
                {/* Active Tab Content with Animation */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {cashbackTabs[activeTab].component}
                </motion.div>
                
                {/* Sample Features Pills */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {[
                    { icon: <Gift className="h-3 w-3" />, text: "استرداد فوري" },
                    { icon: <CreditCard className="h-3 w-3" />, text: "تخصيص متقدم" },
                    { icon: <Shield className="h-3 w-3" />, text: "معاملات آمنة" },
                    { icon: <Settings className="h-3 w-3" />, text: "إعدادات مرنة" },
                  ].map((pill, idx) => (
                    <div key={idx} className="bg-white/40 backdrop-blur-sm rounded-full py-1 px-3 text-xs flex items-center gap-1 border border-white/40">
                      {pill.icon}
                      <span>{pill.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">برامج كاشباك مصممة لنمو أعمالك</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                تعتبر برامج الكاشباك من أكثر استراتيجيات التسويق فعالية لجذب العملاء والاحتفاظ بهم. توفر حلول الكاشباك من دراهم طريقة فعالة لمكافأة عملائك على كل عملية شراء، مما يشجعهم على العودة مراراً وتكراراً.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نقدم منصة متكاملة لإدارة برامج الكاشباك بكل سهولة، مع خيارات مرنة للتخصيص حسب احتياجات عملك. سواء كنت تدير متجراً صغيراً أو سلسلة متاجر كبيرة، يمكننا تصميم برنامج كاشباك يناسب أهدافك التجارية.
              </p>
              <p className="text-text/80 leading-relaxed">
                مع حلول الكاشباك من دراهم، ستتمكن من زيادة متوسط قيمة المشتريات، تعزيز معدل تكرار الزيارات، وبناء قاعدة عملاء مخلصين على المدى الطويل.
              </p>
              
              {/* Added Feature List */}
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-3">مميزات منصة دراهم للكاشباك:</h3>
                <ul className="space-y-2">
                  {[
                    "تخصيص كامل لبرامج الكاشباك حسب احتياجات عملك",
                    "لوحة تحكم سهلة الاستخدام لإدارة العروض والمكافآت",
                    "تكامل مع أنظمة نقاط البيع والمتاجر الإلكترونية",
                    "تقارير تحليلية تفصيلية لقياس أداء البرنامج",
                    "تطبيق جوال للعملاء لمتابعة رصيدهم واستخدام الكاشباك"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Benefits Section with image */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد حلول الكاشباك</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-text/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Added image for engagement */}
          <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">عزز ولاء العملاء من خلال الكاشباك</h2>
                <p className="text-text/80 mb-6">
                  يعد الكاشباك من أقوى الأدوات التي تساعدك على بناء علاقات طويلة المدى مع عملائك. كلما زادت مشترياتهم، زادت المكافآت، مما يخلق حلقة إيجابية من الولاء والإنفاق المتكرر.
                </p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((_, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="text-primary">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                      <span className="text-text/80">
                        {index === 0 ? "زيادة معدل الاحتفاظ بالعملاء بنسبة تصل إلى 30%" : 
                         index === 1 ? "زيادة متوسط قيمة الطلب بنسبة 25%" : 
                         "الاستفادة من بيانات سلوك العملاء لتحسين العروض"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:h-full">
                <img 
                  src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" 
                  alt="كاشباك دراهم" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">مميزات حلول الكاشباك من دراهم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Percent size={18} className="text-primary" />
                    {feature.title}
                  </h3>
                  <p className="text-text/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases with icons */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">حالات استخدام حلول الكاشباك</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="feature-card p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">
                      {useCase.icon}
                    </div>
                    {useCase.title}
                  </h3>
                  <p className="text-text/80 mb-4">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section - Enhanced */}
          <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center mb-16 overflow-hidden">
            {/* Background circles for visual interest */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/20 rounded-full blur-xl translate-x-1/4 translate-y-1/4"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold mb-4">جاهز لتنفيذ برنامج كاشباك فعال؟</h2>
              <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
                تواصل معنا اليوم لمعرفة كيف يمكن لحلول الكاشباك من دراهم أن تساعد في نمو أعمالك وزيادة ولاء عملائك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="button-primary flex items-center justify-center gap-2">
                  أحجز موعد <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/#contact" className="button-outline flex items-center justify-center gap-2">
                  تواصل معنا <ChevronLeft className="h-4 w-4" />
                </a>
              </div>
              
              {/* Added feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  { icon: <Gift className="h-4 w-4" />, text: "برامج مخصصة" },
                  { icon: <Clock className="h-4 w-4" />, text: "تفعيل فوري" },
                  { icon: <Shield className="h-4 w-4" />, text: "حماية كاملة" },
                  { icon: <PieChart className="h-4 w-4" />, text: "تقارير تفصيلية" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full py-2 px-4 text-sm border border-white/40">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CashbackSolutions;
