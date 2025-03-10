import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart4, Target, Users, Mail, Smartphone, MessageSquare, BarChart2, Globe, Flag, ArrowUpRight, Zap, Check, CheckCircle, ChevronRight } from "lucide-react";

const MarketingPlatforms = () => {
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "استهداف دقيق",
      description: "الوصول للعملاء المناسبين في الوقت المناسب مع أدوات استهداف متقدمة."
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "قياس النتائج",
      description: "تحليلات شاملة لقياس أداء حملاتك التسويقية وتحسينها باستمرار."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "فهم أعمق للعملاء",
      description: "بناء ملفات تعريف متكاملة للعملاء لفهم احتياجاتهم وتفضيلاتهم."
    }
  ];

  const platforms = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "منصة التسويق بالبريد الإلكتروني",
      description: "إنشاء وإدارة حملات بريدية مخصصة مع تتبع دقيق للنتائج وأتمتة كاملة للرسائل."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "منصة الرسائل النصية",
      description: "التواصل الفوري مع العملاء عبر الرسائل النصية للإعلانات والعروض الحصرية."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "منصة الدردشة الآلية",
      description: "روبوتات محادثة ذكية للرد على استفسارات العملاء وتقديم دعم على مدار الساعة."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "منصة تحليلات العملاء",
      description: "فهم سلوك العملاء واتجاهات المبيعات لاتخاذ قرارات تسويقية مدروسة."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "منصة إدارة وسائل التواصل الاجتماعي",
      description: "إدارة جميع حسابات التواصل الاجتماعي من مكان واحد مع جدولة المحتوى وتحليل الأداء."
    },
    {
      icon: <Flag className="h-6 w-6" />,
      title: "منصة إدارة الحملات",
      description: "تخطيط وتنفيذ ومتابعة الحملات التسويقية المتكاملة عبر جميع القنوات."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">منصات التسويق</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              حلول تسويقية متكاملة تساعدك على الوصول إلى عملائك وتنمية أعمالك
            </p>
          </div>
          
          {/* Main Content - replaced image with custom component */}
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
              {/* Marketing Platforms Dashboard Component */}
              <div className="bg-white rounded-xl shadow-xl border border-primary/10 overflow-hidden">
                {/* Dashboard Header */}
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
                
                {/* Dashboard Content */}
                <div className="p-4">
                  {/* Statistics */}
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
                  
                  {/* Recent Campaigns */}
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
                  
                  {/* Audience Overview */}
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
                              <div className="bg-primary h-full rounded-full" style={{ width: '25%' }}></div>
                            </div>
                            <span className="text-sm">25%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">25-34</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <span className="text-sm">45%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">35-44</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{ width: '20%' }}></div>
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
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد منصات التسويق</h2>
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
          
          {/* Added image section for engagement */}
          <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">حلول تسويقية متكاملة</h2>
                <p className="text-text/80 mb-6">
                  توفر منصات التسويق من دراهم تجربة متكاملة تغطي جميع جوانب استراتيجيتك التسويقية، من جمع البيانات وتحليلها إلى إنشاء الحملات وقياس النتائج.
                </p>
                <ul className="space-y-3">
                  {[
                    "استهداف الجمهور بدقة عالية بناءً على السلوك والاهتمامات",
                    "أتمتة الحملات التسويقية لتوفير الوقت والجهد",
                    "تحسين العائد على الاستثمار من خلال تحليلات متقدمة",
                    "توحيد جميع قنوات التسويق في منصة واحدة"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1 bg-white rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-text/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:h-full">
                <img 
                  src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" 
                  alt="منصات التسويق" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Platforms Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">منصاتنا التسويقية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                  <p className="text-text/80">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Integration Section */}
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
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع أنظمة CRM</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع منصات التجارة الإلكترونية</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع أنظمة نقاط البيع</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع منصات التحليل</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section - Enhanced with visual engagement */}
          <div className="bg-primary/5 rounded-2xl overflow-hidden mb-16 animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <span>ارفع مستوى تسويقك مع منصات دراهم</span>
                </h2>
                <p className="text-lg text-text/70 mb-6 leading-relaxed">
                  حلول تسويقية مبتكرة تساعدك على فهم عملائك بشكل أفضل وبناء علاقات قوية معهم.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/50 p-4 rounded-lg flex items-start gap-3 hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">تحليلات متقدمة</h3>
                      <p className="text-text/70 text-sm">فهم سلوك العملاء واتجاهات السوق من خلال لوحات تحكم تفاعلية</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-lg flex items-start gap-3 hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">أتمتة التسويق</h3>
                      <p className="text-text/70 text-sm">حملات تسويقية آلية مدفوعة بالبيانات تستهدف العملاء في الوقت المناسب</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 p-4 rounded-lg flex items-start gap-3 hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">تكامل متعدد القنوات</h3>
                      <p className="text-text/70 text-sm">تجربة تسويقية موحدة عبر جميع نقاط الاتصال مع العملاء</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="button-primary group flex items-center justify-center gap-2">
                    <span>أحجز موعد</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="/#contact" className="button-outline flex items-center justify-center gap-2">
                    <span>تواصل معنا</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="relative max-w-md">
                  {/* Interactive marketing dashboard visualization */}
                  <div className="bg-white rounded-xl shadow-xl border border-primary/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">د</span>
                          </div>
                          <h3 className="font-bold">منصة التسويق المتكاملة</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>حملات نشطة</span>
                            <span className="font-bold text-primary">12</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>معدل التفاعل</span>
                            <span className="font-bold text-primary">68%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '68%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>معدل التحويل</span>
                            <span className="font-bold text-primary">32%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '32%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">التوصيات الذكية</h4>
                        <p className="text-sm text-text/70">زيادة عروض الكاشباك للعملاء الذين لم يقوموا بالشراء في آخر 30 يوم قد يرفع معدل التحويل بنسبة 15%.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-primary/30 -rotate-12 animate-float" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingPlatforms;
