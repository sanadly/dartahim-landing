
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BarChart, 
  Percent, 
  Coins, 
  RefreshCw, 
  Shield, 
  Settings, 
  ShoppingCart, 
  Utensils, 
  Store, 
  Briefcase, 
  ChevronRight, 
  CreditCard, 
  Tag, 
  Gift, 
  Clock, 
  Check, 
  ChevronLeft, 
  PieChart, 
  LineChart, 
  User, 
  BarChart3,
  ArrowRight,
  Code,
  Server,
  Users,
  Layers,
  FileCode,
  Database,
  Pen,
  HelpCircle,
  Wrench,
  BookOpen
} from "lucide-react";
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

  // New B2B focused implementation process tabs
  const implementationTabs = [
    {
      id: 0,
      title: "تحليل وتصميم",
      icon: <Pen className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">تحليل الاحتياجات وتصميم النظام</h3>
          
          <div className="mb-4 border-b border-dashed border-primary/20 pb-3">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <HelpCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">دراسة متطلبات العميل</h4>
                <p className="text-xs text-text/70">نقوم بتحليل احتياجات عملك ومتطلبات برنامج الكاشباك لتحديد أفضل الحلول التي تناسب أهدافك.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">تحليل العمليات التجارية</h4>
                <p className="text-xs text-text/70">دراسة سير العمليات التجارية وتحديد نقاط التكامل مع نظام الكاشباك للحصول على أفضل النتائج.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <PieChart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">تصميم هيكل البرنامج</h4>
                <p className="text-xs text-text/70">تصميم هيكل برنامج الكاشباك بما في ذلك معدلات الاسترداد، آليات الاحتساب، وطرق الاسترداد.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-3 rounded-lg mb-3">
            <h5 className="text-xs font-medium mb-2">نتائج مرحلة التحليل والتصميم:</h5>
            <ul className="text-xs space-y-1">
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> وثيقة متطلبات مفصلة
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> مخطط هيكلي للنظام
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> جدول زمني للتنفيذ
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> تقدير التكلفة التفصيلي
              </li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center text-xs text-text/70">
            <div>متوسط مدة المرحلة: 1-2 أسبوع</div>
            <button className="text-primary font-medium hover:underline flex items-center gap-1">
              معرفة المزيد <ChevronLeft className="h-3 w-3" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "التطوير والتكامل",
      icon: <Code className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">تطوير النظام والتكامل مع الأنظمة الحالية</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-4 w-4 text-primary" />
                <h5 className="text-sm font-medium">تطوير واجهات المستخدم</h5>
              </div>
              <p className="text-xs text-text/80">تطوير واجهات مستخدم سهلة الاستخدام للعملاء والمسؤولين، مع مراعاة متطلبات العلامة التجارية.</p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-secondary" />
                <h5 className="text-sm font-medium">بناء البنية التحتية</h5>
              </div>
              <p className="text-xs text-text/80">إنشاء بنية تحتية قوية وآمنة تضمن موثوقية النظام وقدرته على التعامل مع حجم المعاملات المتوقع.</p>
            </div>
          </div>
          
          <div className="border border-dashed border-primary/20 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-medium mb-2">خيارات التكامل مع الأنظمة الحالية</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Database className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تكامل قواعد البيانات:</span> ربط نظام الكاشباك مع قواعد بيانات العملاء والمنتجات لضمان التحديث الآني للمعلومات.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShoppingCart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تكامل نقاط البيع:</span> دمج نظام الكاشباك مع أنظمة نقاط البيع للتعرف التلقائي على المشتريات واحتساب المكافآت.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">واجهة برمجة التطبيقات (API):</span> توفير واجهات برمجية تتيح التكامل السلس مع تطبيقات الهاتف المحمول أو المواقع الإلكترونية.
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-3 rounded-lg">
            <h5 className="text-xs font-medium mb-1">التقنيات المستخدمة:</h5>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {["Node.js", "React", "MongoDB", "PostgreSQL", "REST API", "Webhook", "AWS", "Docker"].map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-white/60 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "الاختبار والإطلاق",
      icon: <Wrench className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">اختبار النظام وإطلاقه</h3>
          
          <div className="space-y-3 mb-4">
            <div className="border-b border-dashed border-primary/20 pb-2">
              <h4 className="text-sm font-medium mb-2">مراحل الاختبار الشاملة</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الوظائف</div>
                  <p className="text-text/70">التحقق من عمل جميع وظائف النظام حسب المتطلبات.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الأداء</div>
                  <p className="text-text/70">قياس سرعة النظام وقدرته على تحمل الأحمال المختلفة.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الأمان</div>
                  <p className="text-text/70">فحص مستوى أمان النظام ضد الاختراقات المحتملة.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار القبول</div>
                  <p className="text-text/70">مراجعة النظام مع العميل للتأكد من تلبية جميع المتطلبات.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">استراتيجية الإطلاق</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">1</span>
                  </div>
                  <div>
                    <div className="font-medium">الإطلاق التجريبي</div>
                    <p className="text-text/70">إطلاق النظام لمجموعة محدودة من العملاء لاختبار الأداء في بيئة حقيقية.</p>
                  </div>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">2</span>
                  </div>
                  <div>
                    <div className="font-medium">المراقبة والتحسين</div>
                    <p className="text-text/70">مراقبة أداء النظام وإجراء التحسينات اللازمة بناءً على التغذية الراجعة.</p>
                  </div>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">3</span>
                  </div>
                  <div>
                    <div className="font-medium">الإطلاق الكامل</div>
                    <p className="text-text/70">إطلاق النظام بشكل كامل لجميع المستخدمين مع حملة ترويجية مناسبة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="text-green-600 font-medium flex items-center">
              <Check className="h-4 w-4 mr-1" /> معدل نجاح الإطلاق: 98%
            </div>
            <div className="text-primary font-medium hover:underline cursor-pointer flex items-center">
              طلب عرض تجريبي <ArrowRight className="h-3 w-3 mr-1" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "الدعم والتطوير",
      icon: <BookOpen className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">خدمات الدعم والتطوير المستمر</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="col-span-2 bg-primary/10 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-2">باقات الدعم الفني</h4>
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex-1 bg-white/80 p-2 rounded-lg border border-primary/10">
                  <div className="font-medium mb-1 text-primary">الباقة الأساسية</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> دعم عبر البريد الإلكتروني
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> وقت استجابة خلال 24 ساعة
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> تحديثات النظام الدورية
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white/80 p-2 rounded-lg border border-primary/10">
                  <div className="font-medium mb-1 text-secondary">الباقة المتقدمة</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> دعم على مدار الساعة
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> وقت استجابة خلال 4 ساعات
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> مدير حساب مخصص
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dashed border-primary/20 pt-3 mb-3">
            <h4 className="text-sm font-medium mb-2">خدمات التطوير المستمر</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <LineChart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تحسين الأداء:</span> مراقبة وتحسين أداء النظام بشكل مستمر لضمان سرعة وكفاءة العمليات.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">إضافة ميزات جديدة:</span> تطوير وإضافة ميزات جديدة حسب احتياجات السوق والتغذية الراجعة من العملاء.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تحديثات الأمان:</span> إجراء تحديثات أمان دورية لحماية النظام والبيانات من التهديدات المحتملة.
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/5 p-3 rounded-lg flex items-center justify-between">
            <div className="text-xs">
              <span className="font-medium">نسبة رضا العملاء عن خدمات الدعم:</span>
              <div className="w-32 bg-gray-200 rounded-full h-1.5 mt-1">
                <div className="bg-primary h-1.5 rounded-full" style={{width: "95%"}}></div>
              </div>
              <span className="text-[10px] text-primary font-medium">95%</span>
            </div>
            <button className="text-white bg-primary text-xs py-1 px-3 rounded-lg hover:bg-primary/90 transition-colors">
              اطلب استشارة مجانية
            </button>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حلول الكاشباك للشركات</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              نقدم حلولاً متكاملة ومخصصة لتنفيذ أنظمة الكاشباك التي تساعد شركتك على زيادة المبيعات وتعزيز ولاء العملاء
            </p>
          </div>
          
          {/* Business Implementation Process - New B2B Focused Component */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="order-2 md:order-1">
              {/* Interactive Business Implementation Showcase */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-0 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-lg"></div>
                
                {/* Tabs Navigation */}
                <div className="flex mb-6 bg-white/30 backdrop-blur-sm rounded-full p-1 border border-white/40 relative z-10">
                  {implementationTabs.map((tab) => (
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
                  {implementationTabs[activeTab].component}
                </motion.div>
                
                {/* Implementation Process Timeline */}
                <div className="mt-5 pt-4 border-t border-dashed border-primary/20">
                  <div className="flex justify-between">
                    {implementationTabs.map((tab, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col items-center ${activeTab >= idx ? 'text-primary' : 'text-text/40'}`}
                        style={{ width: `${100 / implementationTabs.length}%` }}
                      >
                        <div className={`w-3 h-3 rounded-full ${activeTab >= idx ? 'bg-primary' : 'bg-text/20'}`}></div>
                        <div className="text-[9px] mt-1 text-center">
                          {tab.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-0.5 bg-text/20 -mt-[9px] z-0">
                    <div className="absolute top-0 left-0 h-full bg-primary transition-all" style={{ width: `${(activeTab / (implementationTabs.length - 1)) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">حلول كاشباك مخصصة لشركتك</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                في دراهم، نفهم أن كل شركة لديها احتياجات فريدة لبرامج الكاشباك الخاصة بها. لذلك، نقدم خدمات شاملة لتطوير وتنفيذ وإدارة أنظمة الكاشباك المخصصة التي تتناسب مع نموذج أعمالك وأهدافك.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نحن لا نقدم فقط منصة جاهزة، بل نعمل معك كشريك استراتيجي لتصميم وتنفيذ حل متكامل يمكنك من تقديم برامج استرداد نقدي فعالة لعملائك، مع ضمان التكامل السلس مع أنظمتك الحالية.
              </p>
              <p className="text-text/80 leading-relaxed mb-6">
                من التحليل الأولي وحتى التنفيذ النهائي والدعم المستمر، سيعمل فريقنا من الخبراء معك في كل خطوة لضمان نجاح برنامج الكاشباك الخاص بك.
              </p>
              
              {/* Added Feature List */}
              <div className="mt-2">
                <h3 className="font-bold text-lg mb-3">ما يميز خدماتنا:</h3>
                <ul className="space-y-2">
                  {[
                    "فريق تطوير متخصص في أنظمة الكاشباك للشركات",
                    "حلول مخصصة حسب احتياجات كل شركة ونموذج أعمالها",
                    "تكامل مع أنظمة نقاط البيع والمتاجر الإلكترونية الحالية",
                    "لوحات تحكم متطورة لإدارة برامج الكاشباك وتحليل النتائج",
                    "دعم فني وتقني مستمر لضمان أداء النظام بكفاءة"
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
              <h2 className="text-3xl font-bold mb-4">جاهز لتنفيذ برنامج كاشباك فعال لشركتك؟</h2>
              <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
                تواصل معنا اليوم لمعرفة كيف يمكن لحلول الكاشباك المخصصة من دراهم أن تساعد في نمو أعمالك وزيادة ولاء عملائك.
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
                  { icon: <Code className="h-4 w-4" />, text: "حلول مخصصة" },
                  { icon: <Server className="h-4 w-4" />, text: "تكامل مع أنظمتك" },
                  { icon: <Shield className="h-4 w-4" />, text: "أمان البيانات" },
                  { icon: <Users className="h-4 w-4" />, text: "دعم مستمر" }
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
