import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart4, Target, Users, Mail, Smartphone, MessageSquare, BarChart2, Globe, Flag, ArrowUpRight, Zap, Check, Star, Award, TrendingUp, PieChart } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DatabaseIcon, Store, CreditCard } from "lucide-react";

const MarketingPlatforms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("cta-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const benefits = [{
    icon: <Target className="h-6 w-6" />,
    title: "استهداف دقيق",
    description: "الوصول للعملاء المناسبين في الوقت المناسب مع أدوات استهداف متقدمة."
  }, {
    icon: <BarChart4 className="h-6 w-6" />,
    title: "قياس النتائج",
    description: "تحليلات شاملة لقياس أداء حملاتك التسويقية وتحسينها باستمرار."
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "فهم أعمق للعملاء",
    description: "بناء ملفات تعريف متكاملة للعملاء لفهم احتياجاتهم وتفضيلاتهم."
  }];
  const platforms = [{
    icon: <Mail className="h-6 w-6" />,
    title: "منصة التسويق بالبريد الإلكتروني",
    description: "إنشاء وإدارة حملات بريدية مخصصة مع تتبع دقيق للنتائج وأتمتة كاملة للرسائل."
  }, {
    icon: <Smartphone className="h-6 w-6" />,
    title: "منصة الرسائل النصية",
    description: "التواصل الفوري مع العملاء عبر الرسائل النصية للإعلانات والعروض الحصرية."
  }, {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "منصة الدردشة الآلية",
    description: "روبوتات محادثة ذكية للرد على استفسارات العملاء وتقديم دعم على مدار الساعة."
  }, {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "منصة تحليلات العملاء",
    description: "فهم سلوك العملاء واتجاهات المبيعات لاتخاذ قرارات تسويقية مدروسة."
  }];

  const marketingTabs = [{
    id: "email",
    icon: <Mail className="h-5 w-5" />,
    title: "التسويق بالبريد الإلكتروني",
    content: {
      title: "أطلق العنان لقوة التسويق بالبريد الإلكتروني",
      description: "منصة متكاملة تتيح لك إنشاء وإدارة حملات بريدية متخصصة تصل إلى جمهورك المستهدف بدقة وفاعلية.",
      features: ["نماذج جاهزة احترافية تناسب مختلف القطاعات", "تقسيم الجمهور بناءً على البيانات السلوكية والديموغرافية", "تتبع معدلات الفتح والنقر وتحويل المبيعات", "أتمتة سلسلة الرسائل حسب تفاعل المستخدم"],
      metrics: [{
        label: "متوسط معدل الفتح",
        value: "32%",
        icon: <Star className="h-4 w-4 text-yellow-400" />
      }, {
        label: "معدل النقر",
        value: "15%",
        icon: <TrendingUp className="h-4 w-4 text-green-500" />
      }, {
        label: "عائد الاستثمار",
        value: "380%",
        icon: <Award className="h-4 w-4 text-blue-500" />
      }],
      image: "/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png"
    }
  }, {
    id: "sms",
    icon: <Smartphone className="h-5 w-5" />,
    title: "الرسائل النصية",
    content: {
      title: "وصول فوري مع الرسائل النصية",
      description: "منصة رسائل نصية متطورة تتيح لك التواصل الفوري مع عملائك بمعدل وصول يتجاوز 98%.",
      features: ["إرسال رسائل جماعية بتكلفة منخفضة", "رسائل مخصصة تحتوي على اسم العميل ومعلوماته", "روابط مختصرة للتتبع وقياس الأداء", "جدولة الرسائل في الأوقات المثالية"],
      metrics: [{
        label: "معدل القراءة",
        value: "98%",
        icon: <Star className="h-4 w-4 text-yellow-400" />
      }, {
        label: "متوسط الاستجابة",
        value: "4.5 دقيقة",
        icon: <TrendingUp className="h-4 w-4 text-green-500" />
      }, {
        label: "معدل التحويل",
        value: "28%",
        icon: <Award className="h-4 w-4 text-blue-500" />
      }],
      image: "/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png"
    }
  }, {
    id: "analytics",
    icon: <BarChart4 className="h-5 w-5" />,
    title: "تحليلات متقدمة",
    content: {
      title: "تحليلات متقدمة تدعمها الذكاء الاصطناعي",
      description: "اكتشف رؤى عميقة حول سلوك عملائك واتخذ قرارات مبنية على البيانات لتحسين استراتيجياتك التسويقية.",
      features: ["لوحات تحكم مخصصة تبرز المؤشرات الرئيسية", "تحليل تفاعل العملاء عبر القنوات المختلفة", "تنبؤات ذكية لتحسين توقيت الحملات", "تقارير أداء مفصلة قابلة للتصدير"],
      metrics: [{
        label: "تحسين معدل الاستهداف",
        value: "56%",
        icon: <Target className="h-4 w-4 text-primary" />
      }, {
        label: "تحسين العائد على الاستثمار",
        value: "120%",
        icon: <PieChart className="h-4 w-4 text-accent" />
      }, {
        label: "توفير الوقت",
        value: "75%",
        icon: <Zap className="h-4 w-4 text-yellow-500" />
      }],
      image: "/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png"
    }
  }];

  const activeTabContent = marketingTabs.find(tab => tab.id === activeTab)?.content;
  return <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">منصات التسويق</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              حلول تسويقية متكاملة تساعدك على الوصول إلى عملائك وتنمية أعمالك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">استراتيجيات تسويقية مبنية على البيانات</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                في عصر التحول الرقمي، أصبح التسويق الفعال يعتمد بشكل أساسي على البيانات والتحليلات. توفر منصات التسويق من دراهم حلولاً متكاملة تمكنك من فهم عملائك بشكل أعمق والتواصل معهم بطريقة مخصصة وفعالة.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نقدم مجموعة من المنصات التسويقية المتطورة التي تساعدك على إدارة علاقات العملاء، إنشاء حملات تسويقية مستهدفة، وتحليل النتائج لتحسين أداء أعمالك باستمرار.
              </p>
              <p className="text-text/80 leading-relaxed">
                مع منصات التسويق من دراهم، ستتمكن من توحيد جميع جهودك التسويقية في مكان واحد، مما يوفر لك الوقت والجهد ويزيد من فعالية استراتيجياتك التسويقية.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl border border-primary/10 overflow-hidden">
                <div className="bg-primary p-4 text-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">د</span>
                      </div>
                      <h3 className="font-bold">منصة دراهم للتسويق</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md hover:bg-white/10 cursor-pointer">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div className="p-1 rounded-md hover:bg-white/10 cursor-pointer">
                        <Users className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">87%</div>
                      <div className="text-xs text-text/70">معدل الفتح</div>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">12k</div>
                      <div className="text-xs text-text/70">مشتركين</div>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">32%</div>
                      <div className="text-xs text-text/70">معدل التحويل</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-sm">آخر الحملات</h4>
                      <span className="text-primary text-xs cursor-pointer">عرض الكل</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-secondary/10 p-3 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-medium text-sm">حملة العيد</div>
                          <div className="text-xs text-text/70">إرسال: 12,500 | فتح: 10,875</div>
                        </div>
                        <div className="text-green-600 flex items-center text-sm">
                          <span>87%</span>
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-medium text-sm">عروض الصيف</div>
                          <div className="text-xs text-text/70">إرسال: 8,200 | فتح: 6,560</div>
                        </div>
                        <div className="text-green-600 flex items-center text-sm">
                          <span>80%</span>
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-sm">نظرة على الجمهور</h4>
                      <span className="text-primary text-xs cursor-pointer">تحليل مفصل</span>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-text/70">الفئة العمرية</span>
                        <span className="text-xs text-text/70">النسبة</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">18-24</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{
                              width: '25%'
                            }}></div>
                            </div>
                            <span className="text-sm">25%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">25-34</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{
                              width: '45%'
                            }}></div>
                            </div>
                            <span className="text-sm">45%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">35-44</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{
                              width: '20%'
                            }}></div>
                            </div>
                            <span className="text-sm">20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد منصات التسويق</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-text/80">{benefit.description}</p>
                </div>)}
            </div>
          </div>
          
          <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">حلول تسويقية متكاملة</h2>
                <p className="text-text/80 mb-6">
                  توفر منصات التسويق من دراهم تجربة متكاملة تغطي جميع جوانب استراتيجيتك التسويقية، من جمع البيانات وتحليلها إلى إنشاء الحملات وقياس النتائج.
                </p>
                <ul className="space-y-3">
                  {["استهداف الجمهور بدقة عالية بناءً على السلوك والاهتمامات", "أتمتة الحملات التسويقية لتوفير الوقت والجهد", "تحسين العائد على الاستثمار من خلال تحليلات متقدمة", "توحيد جميع قنوات التسويق في منصة واحدة"].map((item, idx) => <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 bg-white rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-text/80">{item}</span>
                    </li>)}
                </ul>
              </div>
              <div className="md:h-full">
                <img alt="منصات التسويق" className="w-full h-full object-cover" src="/lovable-uploads/a60ccd7c-eb30-4c78-ae67-9c6337896ffc.jpg" />
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">منصاتنا التسويقية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                  <p className="text-text/80">{platform.description}</p>
                </div>)}
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">تكامل سلس مع أنظمتك الحالية</h2>
                <p className="text-text/80 mb-4">
                  تتكامل منصات التسويق من دراهم بسلاسة مع أنظمة إدارة علاقات العملاء (CRM)، أنظمة التجارة الإلكترونية، وأنظمة نقاط البيع التي تستخدمها حالياً.
                </p>
                <p className="text-text/80">
                  نوفر واجهات برمجة تطبيقات (APIs) مفتوحة تسمح بنقل البيانات بسهولة بين منصاتنا وأنظمتك الأخرى، مما يضمن تجربة متكاملة وفعالة.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="feature-card p-6 text-center hover:bg-white/80 transition-all">
                  <div className="flex justify-center mb-3">
                    <DatabaseIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-0">تكامل مع أنظمة CRM</h3>
                </div>
                <div className="feature-card p-6 text-center hover:bg-white/80 transition-all">
                  <div className="flex justify-center mb-3">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-0">تكامل مع منصات التجارة الإلكترونية</h3>
                </div>
                <div className="feature-card p-6 text-center hover:bg-white/80 transition-all">
                  <div className="flex justify-center mb-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-0">تكامل مع أنظمة نقاط البيع</h3>
                </div>
                <div className="feature-card p-6 text-center hover:bg-white/80 transition-all">
                  <div className="flex justify-center mb-3">
                    <PieChart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-0">تكامل مع منصات التحليل</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20 rounded-2xl bg-white shadow-lg border border-primary/10 overflow-hidden">
            <div className="bg-primary p-6 text-white">
              <h2 className="text-2xl font-bold">استكشف حلولنا التسويقية المتكاملة</h2>
              <p className="text-white/80 mt-2">اكتشف كيف يمكن لمنصات التسويق من دراهم تحويل استراتيجيتك التسويقية</p>
            </div>
            
            <div className="flex border-b overflow-x-auto">
              {marketingTabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("px-6 py-4 flex items-center gap-2 font-medium transition-colors", activeTab === tab.id ? "border-b-2 border-primary text-primary" : "text-text/60 hover:text-primary hover:bg-primary/5")}>
                  {tab.icon}
                  {tab.title}
                </button>)}
            </div>
            
            {activeTabContent && <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{activeTabContent.title}</h3>
                    <p className="text-text/70 mb-6">{activeTabContent.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      <h4 className="font-bold">المميزات الرئيسية:</h4>
                      <ul className="space-y-2">
                        {activeTabContent.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                            <div className="mt-1">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {activeTabContent.metrics.map((metric, idx) => <div key={idx} className="bg-primary/5 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">{metric.icon}</div>
                          <div className="text-xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-text/70">{metric.label}</div>
                        </div>)}
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src={activeTabContent.image} alt={activeTabContent.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>}
          </div>
          
          <div id="cta-section" className={cn("bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 mb-16 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold mb-4">ارفع مستوى تسويقك مع منصات دراهم</h2>
                <p className="text-lg text-text/70 mb-6">
                  حلول متكاملة تجمع بين تحليلات البيانات المتقدمة والذكاء الاصطناعي لتحويل تجربة عملائك وزيادة عائد استثمارك التسويقي.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[{
                  icon: <Users className="h-5 w-5" />,
                  text: "استهداف دقيق لعملائك"
                }, {
                  icon: <TrendingUp className="h-5 w-5" />,
                  text: "زيادة معدلات التحويل"
                }, {
                  icon: <Award className="h-5 w-5" />,
                  text: "تحسين ولاء العملاء"
                }, {
                  icon: <BarChart4 className="h-5 w-5" />,
                  text: "تقارير أداء متقدمة"
                }].map((item, idx) => <div key={idx} className="flex items-center gap-3 bg-white/50 rounded-lg p-3">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="button-primary text-center group transition-all">
                    <span className="flex items-center justify-center">
                      أحجز موعد
                      <ArrowUpRight className="h-4 w-4 mr-2 group-hover:translate-y-[-2px] group-hover:translate-x-[-2px] transition-transform" />
                    </span>
                  </a>
                  <a href="/#contact" className="button-outline text-center">تواصل معنا</a>
                </div>
              </div>
              
              <div className="md:w-2/5 enhanced-card p-6">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <span className="text-sm text-text/50 mr-2">منصات دراهم للتسويق</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">تقرير الأداء الأسبوعي</span>
                        <span className="text-sm text-primary">↑ 24%</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{
                        width: '75%'
                      }}></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="bg-accent/5 p-3 rounded-lg flex-1 text-center">
                        <div className="text-sm text-text/70">زيارات</div>
                        <div className="text-xl font-bold text-accent">1.4K</div>
                      </div>
                      <div className="bg-secondary/5 p-3 rounded-lg flex-1 text-center">
                        <div className="text-sm text-text/70">تحويلات</div>
                        <div className="text-xl font-bold text-secondary">320</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2">أعلى المنتجات مبيعاً</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">بطاقة الولاء الذهبية</span>
                          <span className="text-xs font-medium">842 مشترك</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">باقة كاشباك بريميوم</span>
                          <span className="text-xs font-medium">654 مشترك</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default MarketingPlatforms;
