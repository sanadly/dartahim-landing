
import { Info, Clock, Target, Briefcase, Heart, Shield, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WhoAreWe = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({
    story: false,
    values: false,
    stats: false,
    services: false,
    cta: false
  });
  
  // Stats counter animation
  const [stats, setStats] = useState({
    clients: 0,
    transactions: 0,
    growth: 0,
    partners: 0
  });
  
  const targetStats = {
    clients: 5000,
    transactions: 120000,
    growth: 85,
    partners: 50
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'values', 'stats', 'services', 'cta'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.getBoundingClientRect();
          
          if (position.top < window.innerHeight * 0.75) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Stats counter animation
  useEffect(() => {
    if (isVisible.stats) {
      const duration = 2000; // ms
      const steps = 50;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        if (currentStep < steps) {
          setStats({
            clients: Math.floor((targetStats.clients / steps) * currentStep),
            transactions: Math.floor((targetStats.transactions / steps) * currentStep),
            growth: Math.floor((targetStats.growth / steps) * currentStep),
            partners: Math.floor((targetStats.partners / steps) * currentStep),
          });
          currentStep++;
        } else {
          setStats(targetStats);
          clearInterval(interval);
        }
      }, stepTime);
      
      return () => clearInterval(interval);
    }
  }, [isVisible.stats]);

  const companyValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "الموثوقية",
      description: "نلتزم بتقديم خدمات مالية موثوقة وآمنة تحظى بثقة عملائنا في جميع الأوقات."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الأمان",
      description: "نستخدم أحدث تقنيات التشفير وأمن المعلومات لحماية بيانات ومعاملات عملائك."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "الابتكار",
      description: "نسعى باستمرار لتطوير حلول مالية مبتكرة تلبي احتياجات السوق المتغيرة."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "الشفافية",
      description: "نؤمن بأهمية الشفافية في جميع تعاملاتنا مع العملاء والشركاء والموظفين."
    }
  ];

  const serviceFeatures = [
    {
      title: "بطاقات الولاء",
      description: "أنظمة ولاء متكاملة تساعد الشركات على زيادة ولاء العملاء وتعزيز المبيعات.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-primary/10",
      link: "/loyalty-cards"
    },
    {
      title: "حلول الكاشباك",
      description: "منصات استرداد نقدي متطورة تزيد من معدلات التحويل وتحفز العملاء على الشراء المتكرر.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-secondary/10",
      link: "/cashback-solutions"
    },
    {
      title: "منصات التسويق",
      description: "أدوات تسويقية متكاملة تمكنك من التواصل مع عملائك وتقديم عروض مخصصة.",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-accent/10",
      link: "/marketing-platforms"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على قصة دراهم ورؤيتنا لمستقبل المدفوعات الرقمية في ليبيا
            </p>
          </div>
          
          {/* Our Story Section */}
          <div id="story" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className={cn(
              "transition-all duration-700",
              isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]"
            )}>
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                بدأت رحلة دراهم من رؤية لتحويل طريقة تعامل الناس في ليبيا مع المال. لاحظنا التحديات التي يواجهها الناس في إجراء المعاملات المالية، والاعتماد الكبير على النقد، ومحدودية الوصول إلى الخدمات المالية الرقمية.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                تأسست دراهم في عام 2020 بهدف إنشاء نظام مالي رقمي سهل الاستخدام، آمن، وموثوق به للمستخدمين والشركات في ليبيا. منذ ذلك الوقت، نمت دراهم لتصبح منصة متكاملة توفر مجموعة متنوعة من الخدمات المالية، بما في ذلك المدفوعات الإلكترونية، بطاقات الولاء، وحلول الكاشباك.
              </p>
              <p className="text-text/80 leading-relaxed">
                اليوم، نفخر بخدمة آلاف العملاء والشركاء في جميع أنحاء ليبيا، ونواصل الابتكار وتطوير حلول مالية تلبي احتياجات السوق المتغيرة.
              </p>
            </div>
            <div className={cn(
              "relative transition-all duration-700",
              isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"
            )}>
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="قصة دراهم" 
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
          
          {/* Stats Section - New Component */}
          <div id="stats" className="mb-20">
            <div className={cn(
              "bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-10 transition-all duration-700",
              isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stats.clients}+</div>
                  <p className="text-text/70">عميل</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stats.transactions}+</div>
                  <p className="text-text/70">معاملة</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stats.growth}%</div>
                  <p className="text-text/70">نسبة النمو</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stats.partners}+</div>
                  <p className="text-text/70">شريك تجاري</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Component - New Visual Element */}
          <div className="mb-20">
            <div className="bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-bold text-lg">لوحة تحكم منتجات دراهم</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">بطاقات الولاء</div>
                    <div className="text-sm text-text/70">زيادة الولاء بنسبة 45%</div>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">حلول الكاشباك</div>
                    <div className="text-sm text-text/70">زيادة المبيعات بنسبة 32%</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">منصات التسويق</div>
                    <div className="text-sm text-text/70">معدل تحويل أعلى بنسبة 28%</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-3">مؤشرات أداء منتجاتنا</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">بطاقات الولاء</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: "85%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">حلول الكاشباك</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{width: "75%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">منصات التسويق</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{width: "90%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className={cn(
              "feature-card p-8 transition-all duration-500",
              isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="text-primary" />
                <span>رؤيتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                نطمح أن تكون دراهم المنصة المالية الرقمية الرائدة في ليبيا، ممكنة الأفراد والشركات من إجراء المعاملات المالية بسهولة وأمان، والمساهمة في تطوير اقتصاد رقمي شامل ومستدام.
              </p>
            </div>
            <div className={cn(
              "feature-card p-8 transition-all duration-500 delay-100",
              isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-primary" />
                <span>مهمتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                مهمتنا هي توفير حلول مالية رقمية مبتكرة، آمنة، وسهلة الاستخدام للجميع في ليبيا، مع تمكين الشركات من النمو وتحسين تجربة العملاء، والمساهمة في التحول الرقمي للاقتصاد الليبي.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div id="values" className="mb-20">
            <h2 className={cn(
              "text-3xl font-bold mb-8 text-center transition-all duration-500",
              isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>قيمنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "feature-card p-8 text-center hover:bg-white/80 transition-all duration-500",
                    isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )} 
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Services - New Section */}
          <div id="services" className="mb-20">
            <h2 className={cn(
              "text-3xl font-bold mb-8 text-center transition-all duration-500",
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>خدماتنا</h2>
            <p className={cn(
              "text-text/70 max-w-3xl mx-auto text-center mb-10 transition-all duration-500 delay-100",
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              نقدم مجموعة متكاملة من الحلول المالية الرقمية المصممة خصيصًا لتلبية احتياجات الشركات والأفراد في ليبيا
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceFeatures.map((service, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "feature-card p-8 hover:scale-[1.02] transition-all duration-500",
                    isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`${service.color} p-3 rounded-lg inline-flex mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text/80 mb-4">{service.description}</p>
                  <a 
                    href={service.link} 
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    اكتشف المزيد 
                    <CheckCircle className="h-4 w-4 mr-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div id="cta" className={cn(
            "bg-primary/5 rounded-2xl p-10 text-center mb-16 transition-all duration-700",
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}>
            <h2 className="text-3xl font-bold mb-4">انضم إلى رحلتنا</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن ملتزمون بتطوير خدمات مالية رقمية تلبي احتياجات المستخدمين والشركات في ليبيا. تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="button-primary hover:scale-105 transition-transform">أحجز موعد</a>
              <a href="/#contact" className="button-outline hover:scale-105 transition-transform">تواصل معنا</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoAreWe;
